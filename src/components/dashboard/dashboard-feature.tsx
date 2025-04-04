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
    "3AQ15FUVQQQoza9T6fFjcuBYMWEvRvxafZBkhqUxe5FcEFcx1K4xAYZZMME6TGXZXgURqC95Yu9n4bNxkHZfDmnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMv9AW1cQ2J3ifJQXKCNVRvHFQboiw5peXFdQ6ZyzBwhnnp2mnTns1cZf8bSM84fRvo8sZfmxf9Efk7jdVcuvHQ",
  "key1": "33KAGdbC8XvSNKqJm2BPLVnUUuy1uvYw5wgwknfKMVwc84dg3RMsEa9Hs1ijUeUFeiNdo1shbAtUMZD6yR7FzNDY",
  "key2": "3C3LyUWNoUTsENTYxVR3LNrt6jn3Vit6kDsxN7xPqKJYw9S4AThAHSQudtZRQxf6uBpGuk9mtTstfrFHV3bdcbgC",
  "key3": "4kJswYB86RXo8oaJJnNkEbzYDQaAmxEMSZ8DreBoQZsm4eHtJo82Ndxq6G6abNTw3e9xSrdpmu1xoLzeAmtr2eda",
  "key4": "4UdDCcFWLoygPDGQatndj9HV6xBKdZUfsd7jQasrowSE4oKEDNDsLWtjeYwt8ZHvnb3LAb6nszfm3LynfDGHDT5X",
  "key5": "v4zx1zysgid75zWKZA1wpq5x3YRafkXQcdA7YqD3Z89mVUSGiPPahwrQWDQDLFUKx5RT2WrCfrfGJq7H6vg9PQS",
  "key6": "2JEfnBKaJcSd4wkZXs2Z7DeTyGgsYqPhQt7vgV52NZL7ZJHxH4UfVZYhaXzkNCJy8cg3UQUD4C3NzzU5Sq7WHqGe",
  "key7": "48Gv55FYiGQZVwv5PtCvsadyWpXuDZMhuW2KfodWtwNeTpjeM1YM9miuGhm6r1ADZwbsPZbzreMdjZvPVZs5uR6o",
  "key8": "tuc1GTYqvsxgW22K9ot7vPab4v1wDP985CmCMZTzy45tb5pZgAEPaNzmGqgBSWJrC8MPFpKZ6naWuevbgYpLUx4",
  "key9": "4BA2iPSPZbW4jz84mxaNLNfZN9UJn66WePwpHNxPtVLFUBvZJFppSLJmWivWACur9wyqbgeJRfbVf6fQrmTMUPRt",
  "key10": "dkYFmJRoZbR6eQu2Z54QhYKBUnb7whjziQuz2ZKgShKmFmUJJbDx7uqXeVWifwSudmFCNko4Bcp6gD2m1CvhhCm",
  "key11": "MKfyxWDeWYcKf4ncdqYXMg9AMmpgJV54gJGVx38iaCqQC9cAx7cMVmuUNpXM3ibBhVrFyDbxUk4kvAtZcUbL2Y6",
  "key12": "5Uc8vid7GAm8biKUWbmqFoUiwg5vaFrbCXNBn9zBWBt9gtcvmXhGwSUqUHvHqRFfTsHG5aEcKP19XarTZxugKqED",
  "key13": "65R15c61Z52v8pKVvEyaw7XnrH753DE5ZAniA2hZzifDJqPgzVcYRgJyoXNMhvGq7umeEUhv1UzmFnH7yBihi664",
  "key14": "34JGdyohT5MrjPqCD7apBrfp9LDsGyaSPcSTeK89Siiv94iB4eET3C8X7SiKEZfJJfDfGtYiVSA14gbDkMe6pqHx",
  "key15": "3wx6HYKNLsZAQfQiy9A68VFiBY5n1reH5vpjFvJpXvV3e1pwpbdPmQvHrHFjz8Ndr2BFvgPWuRae9wk6igGS7wQP",
  "key16": "3wjY3ciM1bhdX2ymGPtEbx3xcQAxeFRMUi2yvH9C9NYw32vAJpjPZ61LaqE6wKazv8mgywBbWtMroHzdf67xfq8M",
  "key17": "5i4Byo6HxkXiffYnGDgzGykkxfmD6BM898SaX3ZFDSF43we7zLf18JSVwCHZf3pu7QTzFCRCdZLA9iULXEDV8L9s",
  "key18": "2H2LtvPkoUd4kAeqjSJYQo63DfargHYcM2Q6Br2W3hV93mck1pyZcxGLXdRvBj9s5mj8zqruDYiw2rf3N3eqwKMY",
  "key19": "3b4PGq5LvmaBrv8y7JFL5TLgh31xmEXhKkgsJZBjbxg2zStqvxQg9ubLizTbGh9dQ7SQoG34zEfeLXhzpT73vsBu",
  "key20": "47zhmRkLmtqcpfwkHULYSRnWuT4gQa8rcH6Ze2YMxNK4PeDknYUHdzQ4P2AfRahwwKDfjCyQssVGsBia9HV85BoR",
  "key21": "2wNb7Q8bGdSt5QjBoHvfu9mGgx7ZkTiSMBthfkPa6JFmBPi6mspDXxwLZzGspuMAEHZbPcCku6asQf946wXn4yzg",
  "key22": "2PC5ptcRWAdjvuHe6t42pngqeTmE2oQ66jH7dqJGPV7MJU2337KhuxwcQnXWshSFhzVWTyCQEN8yu9VtYXcurSnz",
  "key23": "4wFF9QJGkDkJhbhHW6cqYmJ2NgDDCNbUPYtc6B8PeDEfr2eBDrA47XS1Cfx4gKVWPcTbH8KwsXWBtGaH5ZNP4Mib",
  "key24": "2nHXdXQu1QCF7ATmz8B8LobqNGfU9AXLZFG5N8tXG8iGxrayuARSJxouvhyRFJMn1BCobNbh5DWmhER3yaMpnYHu",
  "key25": "5aceSSWDhzRjmggKDXS8BJYCdHppuCt5wPyx3BA46r52fxfrng8WkWX7zwfA536Ed9qhHix2LYkzQbZJGFH3DcV3",
  "key26": "BmHCnt8611hgQNbYmjfaW9eWuwxvp2xkVVuS1bfzc693rn6S8tqd4DaCKZE6MDgbYWKVhQ5u95n57nPdzWdkDqU",
  "key27": "447JuhztNGbXAPJTc85m8MZsotLJNHQTXCRSzZr4ZmN5mv9UT5woB7aACy7c47RLZVNMULAv2sUmnpDvDu9Yriej",
  "key28": "61tLeFqxLijEwqAbcdTu7pbH6tJW3gU54osCnpgoqoKg8NBHDJz1HfpQ9YKdyoxrHRQAitMRibyo9gCXkXjY5UEM",
  "key29": "4ZXoZsBCJFDHVYHMwTWi9GhHMkFEsqWKANZbBKAqbJdCWFoZYva9UmsY2cGv8jFEBFkrTKs9EyJtRsN1wXiCDzkd",
  "key30": "3mWm7Qs5wz1iFjjmb3E9kVLPjWGVfN6xuxkReywu9UH3ghrAGWMapRF6EXNWVYkdgLmnCsWLbjWreWcZQJppkkWt",
  "key31": "3kSeCu1NJoNAyxv8MiWbHUTvwnGmBu1s81EZzZyk9AeyZ6KBZV6gC5SyGDStnuj6RGFDjwVrmhjGjh6Vc6Gc36EC",
  "key32": "4eBrdbDCdXAVHJKXCUQWCjhSNga5LsehTm9Az4zoTRRmPzuwKP4yREtTe27dtDXNq1mbFUmCrWCkSZPzHYLmqMDa",
  "key33": "ozvWRCDCvXFxeGWNPY2B9PVfmNE293vApD98E6ag2tFvCvA4abXAsRc7rPaNyvbqFvc3dKtzdit11oLCmJ7PNam",
  "key34": "a6o6zGyMkTbrdnr74mGT3z7gGdLGmTBwgw2mWLPq7fAyuiNocKuLAoXmkYoVgQHkgu4u48QTGxJzCzMJLaf6M1M",
  "key35": "3YvgRCGpojbtE5sL5bTmr35tFjT6nVwAQ8RKYzFV88xwPX58FrNhEzaV1rHndbHB2ozVS4xoiUa6yGD34CTyBFJN",
  "key36": "4GJnMmvQKeMdEJQy9A7rRpYa8NEHBM3vVvhHtevNq5CAdCWGzVvmLWZk1ok5tYmbKM68cDRJyt63oqiQzudx1aLY",
  "key37": "4zbbnQrxEaf1FJWoeYzudB1m56uFe4WMPZRjPV9M7doLBdbdPuAHHfqhYVjvwNsy9DuoSda9UbpJWr1vSn4n3Fcx",
  "key38": "4zvNvF5PaRC2hyUfBqxycNcTjwoUHLdkJPjzPo5Hu48NFJynFZy5rE3XSGx4Fc75f7sr4ESpB89oiqdkMxjc6iCw",
  "key39": "K5yzSXxvENM1srWQVpEKLUQ6oKHTD1EVoBkDZqt1ymyc52T2nnA4W4KJgJhEEXu642D3AUWSBQ37rA9BatsBqFb",
  "key40": "2hF8wt6hHaaULGknqBc1qzCoGiXsYH7uziB68odCbnkWomiX3SrYPhA28eheJSCyUbLXCFa9wdSLZDf9Nh23kuJd",
  "key41": "3iRMgCwADS5YUGSrhQubLdAYRTR6yq4uActj6yWitztKPFuideg91FeVkA5XygrqtCZfrW8e3p2WB4jrNcJ6njGv",
  "key42": "UHx7PLt58NdgLSxCymWGcLLHhy19KMEPZR3t9ukDNf9EiNyezjJkRiMyCxZ2vugcitdgoFVWCGxg7TQXQxYaPyc",
  "key43": "3Z3aAiXNEaL2snxYHWE4kgCTEudTahAhr41LdH4CNbsDHmKVNk7LjPmPUcFHUiXf4jPfhNs57hgLxrJXAoeKV11Y",
  "key44": "3Hn8USZF9wn9hAf2GhXsyYVLKTCAiwcMecHnZBdYBS91HCmpfLi6r1R3NtmdRbPKqHWyieUuy6KFhwL4e2yQo4fv",
  "key45": "aLwCkGeGQc7oDqMz1xtEk9LjWE4yVbeHrXmkPWFWLGod2h58jaeEcqKX51YGMct1SLwcqgArBLQFnniDz2gxURQ"
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
