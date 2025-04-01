/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "vJd9Q2ZdeuSiALbjmtoVQZsmEY2YqD6DYHSuzH7GKW8Efc4SfsaZSfbMSYQ15ZaVcEqksiyxvBrJJMJn5EVSaer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MP18M6CfLrZt38NajtaP9bP8KuV81ej7BmgsSz3zCuqZkD231sjzBvi9tJZ199hVQh6Hn1xbdEzmUrM4gN22sqb",
  "key1": "vkph1Nu3X7fBrgkFKqTwCWXf4c1UF8zwgWthPmwbhTpenFMbbWhKdY2nU1NyRuyQHALYdxbmdZiT5ssYxpXdS6v",
  "key2": "2fyrmfMv5bdyQ4ATedcyUgJ8paeyZHdtZjDj2tKHPXofh34wYEgfk7N3dntkh2Fxi9GnZru1whNLRr2sDeD86t5e",
  "key3": "4CKwjCdvB4HWHwRzW3WqRA64VbmKxy1vSdtf3Fn2EiykY6QY2D6WvumefDSCp4n8NhyjknvdoPHamfyNsrfFewJc",
  "key4": "G3J5qrk2N7bCjtVVD3DqpBNrGHxVXdStfqwuRNPC1XyPyyzWKmzYbMGGJSCdtzpksdbx7nBxYrEssLHsKVCTXHe",
  "key5": "Y9ARJo8yq7ZedhKN7RNiQjNv5WjruM3toTib38vXNuxK9Zk1uC6eifTPVQ5cd2MmNsXCHFVUNvwRpGbZMbbSEXw",
  "key6": "5LpP9etyHTfiFy9eKa7CjVCdM147t2Pd6eH2W1vaUGe6aHCoJ1rf3BrsH29tN42s5xGKYQLHY9QtVCiNMu4HQuyx",
  "key7": "4W9qn8nMSSpACpXwb3o9ySo4578XCrAcaY3q5gsVDHsxEKa4uXq2rHrohuibePtYTrJzjvQ9vB6JgoDKUnoLxLZX",
  "key8": "42BPA5NLzvfBMKD51d4NStH7USmExW5T2U9jTsNzu26ZnxUBh69W6WoEhFh95wmfdnhpPH6VSm4E7DdUwMR1pixg",
  "key9": "4A1e7FEEuwX6kT9MkuDrm5yDSbYF4hLcPGgBcuBf9gvzPfLpwJf2ECwqkcnU7cb4kZFYJdyyXChqqfYuTDCci2e1",
  "key10": "3AAFayoj7Teumz561Q3PmqmLm6EKQBQYN21rCV1Q3RPpE1qmQ1AczTEoVkMtvfDLRVNKuzRosP8ZTP7kF1wDXFbR",
  "key11": "4isUb3th4pUx7GUjbChyj45dopRU4CFbutgJekfTPEvvQeC1M8e6fw49ZJM9LHzqyJepfQR9MvL1vR7VpNu4T4LS",
  "key12": "Q53wbbnMXxHMyJMY6jvtzka3Mu8Crw5bUHaT84gXmwUoSQDZvkjxBUMdDMLC5b2k5ba1x4d8Abu6LhgNRzuzdFx",
  "key13": "5mcxezsKVCyWvVte6waAEVXUkThFzEgJMG9eY4hDW9N8SKxHu1wvKNjf7e3oSRJ2RJ11SvrKr1vHFTAr6Mqov2zy",
  "key14": "2vztzCvwqLDJQspXLPrzTpt5Z58gwnt3obJYNBfg1FSwCVmYKkNgh4sMNCLVQGnjTBVXfydEGLHSqHJg2jtUbdm8",
  "key15": "LZgaZqxm32LHnfXdPWrQatoVdrYFsw5GuMHm6Ti55LgrdamrXPcWbyFQ3JF4nXiW4skgQ933yPqEJCBbbEyaEKJ",
  "key16": "4KDXsXC6CAZgYpkAi16BuGurdQo3vTvyKdih1ZaPb7Fq4QvBjsZVxbm9fefRJAyjAmFRj1kcK8YWywrnyWrSLCjo",
  "key17": "3akcCvnZ4ZpxQeDC4QQk9f8oo6NscsuZ2qjbkzdDRZb2aJ1hBNguTMMaxGYAhBofZpXfvV6BTWwLxpPAR1d1bQbn",
  "key18": "5C1Jw4CqfZTtBQyd3m29cbJVSLsG99DcGRts89qUfRqjcDVW2otCVMnXgBRYqNHkV1g4HzJx9vNrgVojtLqiUwWg",
  "key19": "64YxeNEUmoG7kM9TCCYeMGkPJfu8EaT8kg2473Vbb8cu5gxxScaXyuPPB1Wmy58wbLw964KA1qXCf4iAM7qc2VTD",
  "key20": "2AKfL9XE5uhjuxugxELTWMTaR76ZkvSFWRP15V1zpnWbg5QHsuVnopA3atgzv27jxPb5rQBTc3n3DHz1ECVmoejq",
  "key21": "3qq1MbJfMMnL9hWXoqRDS2ygTyVvGS5E9BboYmYDcCAgqcw4h4qieEwpz7iDbEG9DMRPV3ktKk4vciypxWgJFEAY",
  "key22": "5gfn38WwB2XrcU7B9zXxKL1wiqHezpv7CrKwCBuMYe5MqwiMGf4x2wLbC1wiPQjmAacnbt74ghFDCfDZSbvhJpPJ",
  "key23": "2cJ3ixxtkd9mSSG7ipWouWxznUZ362zzDs6SferRBzDJ9kx5FJPqKacFWjQRiTcH2wzyLLizz5GFAEWRA3LCngEn",
  "key24": "4u4Qhm8CwY3e25yG7SvjQFeS7jq7FaPQreM7WZEa7qpior9dvmyhPPM4sQseSuxjBqNTMi7BQFxPi2qr11AYb7yu",
  "key25": "22BctVZEXkSXMLbK1SHsL3aeVxVdkbrn435RqbiLmad47W2S6CgP2FAz7pXpM3oMJfRM4BLbfSujQEirTdPQAPP7",
  "key26": "4XMKjQnJT8JY9YS1udgZP2G1VucpwyESZXTg8cRZHBz9va7JUbLAkDVwkNBhTjfD3LRn5zemTwmuvY33fSvYiC8c",
  "key27": "2oEWHJAiX23txKnvbRrJFyATxYkPZ4mULnyLfaBradPaGkAkHZbHSZ4o6jbea5HcLvNdX8BVZ2g6F3VdzyUtJdPx",
  "key28": "y2AenzChSRNqdjc768ixTHPkgQ7SZtEqeU7b2nDpNHHAyykePGWsgCwBTCE66tz2LFCh8pyn1giGe79RtTbpPos",
  "key29": "CuYHRQ91XZX1TAba8XWV69xTrC6s1HXVYhJGCq4V6qAbKgtsTuXedi2KDheD2SEv7G8zDHgrfsdtJtWS6Rtr3WB",
  "key30": "46FFXf6jf5hJY82PP3wkUJcktfGoqiHAiNCaZ1C6Rwc5BxaGxoLCkjJb4xzoeL1AVFU53YaSyZaPg5byLiU7znUe",
  "key31": "3aTYTUTsaBhMiWUhqkwCmLosLYnc6bEqHjocxf2XtvRKD366xRoFDs5tFFgfAQNHVdaargUUzfJ4eumpDYEUbz92",
  "key32": "3ZZnGAku5YEhrdAa8mcW4Px4aFeWGVJ1J3zo38h7QXEgahPk3dExzvWbU9iu4FZqGfQC6TsYtcvxB5cacc3s1Up1",
  "key33": "53UjYLkehxrordNfTTodHX5ZEnt2PTnCw6Kb5fJufsCU5cuy46UPMw1NAsvZhT45bEPXpbY1bFzWJsJA5ftftCTx",
  "key34": "5p2keYVerd5VR3Y72TSTsen92JLUNoQEH9FgyM6cn5ksgPo3gGP336z7zA4Lvb4gLxLmgYiy9zZM9ZjGBMdM5azU",
  "key35": "2amkcmDyDGrKbWDnvHby54T1hwZSMpvGf1HcpAsJyBXWjrtxKKMhdhqtQWvyyvUM5kyzdTBNxvDTPyEXzpTqBAad",
  "key36": "qCQbk2rX1MfLm7bQekKNXavQSHrUdQQvRPuhLB9CK3xmX5aDF4tsbjV487ozm9BAN2N5BgS1oqHhv7bTyoeSxEq",
  "key37": "3gV3FbouqodTgBN2oNkWYdy7wbxYwwaAQmcgd3ECZ3J8ZiUScQoJF8MPthRmKVQZfMhaz316nPTsfqegqmChwKD5",
  "key38": "3odbB9Z1TAusEjrYgAxXLuAjwiYxS5efL5Gtx7z97txANyFE6W6f1v1fCHdTA7VBsbuFfbuP3y1s4iSaWDyn41xP",
  "key39": "EjqFQxPhJPy3p6xEvrDBSDmLH2Unyc7wq2fECzt9E4Z5NnCpW4LAmkKL3NomLWZLPCqmUnFDH28mE6MECCyZvsQ",
  "key40": "2ejn6ntwXGx5PEjJBEjxZaxdNo6RaCSsbzC1z9PmGMQH4LeRNMVSCZv5KG77kzRvEFRQ9cT32GNBBKk2QwfXCyZk",
  "key41": "27dNnJpy1BCyu9sdxZ54gsWAmT5KhYLAZ3RfAXJ4VmGjeG9bVNDRABCeR84jdAVF3HnemQSptTd8cRov2xkA9DYv",
  "key42": "29Cang8uaiVngsTnaLYjDzZs8HA3sSucZiJLB3RSygUjU7FgTq9eWtZKsswAM6uPkcXL8aiGojVGTqTHHmS7aR1C",
  "key43": "2SYqE5fbQJTw8KMwcutaab1rkWKcmndRLY3pdex2YFZJqw2bhBBAaHoGEWRE4uku8ohW67fTzHp6wQvTxDVe68BH",
  "key44": "5JMoZBtXvg5iQLqgGmPTiPfzdhLB2qZaRqEKrx3jvpVWy4juzsdynX6KsdkCbCbHhRdXyuYFfaH21Q46pYjDtnRp",
  "key45": "56iD7CW2s3jdt728A8bBxhLfdDqnKvKL7yqqzFErFkNVj72xCnuqEETAZqiiX7NL2s2tVthHEWYbnK3oYek8A9yo",
  "key46": "2Nzvs4AxRdMDpw1Nb9JbxP553TBkL371NvotQofBBqFeHdaejJR2FJimi6MowWxVJmFULbqQMJ6MsnhCg28qpTyn",
  "key47": "59hihBoZZhhANsoWXRMT66tXEgWeDqvRLjxQbTwsKY2wbN6vKab8siF8n86MJrTAhEPiyGvJRjJmfzSFoZRZdi4C",
  "key48": "3p5cLsUZgSkpJbimuHwqmMc8kt5VE5QgzUKnNRcCAGveYdcNyhCaDoketUAmbmonqYKiKSbT6RxpLXeYW4X92yfW",
  "key49": "4LpraxeYoUoTv6xkKVhuQJipDsoEPMHVcocxz8xHZFz6ERSVBAWoo8bqEnjDadBuwNVx99ED89JyTipzt4Qku7b"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
