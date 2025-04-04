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
    "5heANEoj1X9PSQ1c1Awig6y8m7yVrR6ZpCpxg43y9eCDf14AvWWGpuCThr4GLHAPvBXurQQUMJ57iMPxuxDNu4hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mePC2AvtoKgBVe5dKSYS3B4fwtxj1qCCKcRAJhaP4zrK2hsm6wNKqvH461d5JTt5etPvSKD64ge8YrAkvanEfpA",
  "key1": "YRmGsUwTHoER5pE522neoenjmCA3rDJVPTLH9ubQzPapqe526wynUsz6FaZZJ2NvUBGBquWTznCDwn5EXs4b37N",
  "key2": "4gpcbp3r7Nt71tJJ6FiFrr1juubiTrbfP3KYPXwvWBgzqfJjbv2UPZdRCqnbawXLi2hqkHQdAHiE8giVPNPL9XaD",
  "key3": "52RAKD6Z7pqXg5KRZo5gqkb5JoZP2uub4MHLLuKPzjf8gS6eNKfSBARHXKUVqkjdQz68skDFWZZcty95qSPHEzDe",
  "key4": "329u4GxCUtNBroSbZ5kuASY151LGExbXWzHY4Jf9ihjBxqAdTxBnEMQc1LwowUzQG96bNMnWeZnE74ZxjHkKYKd3",
  "key5": "2VDygZBaTR8Jp16EpcEcHgw44BQAWTDYVFyEzy2aD2pf5db3k6n8BXtebQwH3J8Ds6YaArpLgkgs5iEzvxXEALs4",
  "key6": "4TazhTab4fW8br5ZZSNw3GUUrKzef3oDAEMMJq4pLmWdhBFfeWKZNqyz2tMbB1GpeLXKD1TwQCa8UdgsevdXHzFE",
  "key7": "48FLbBk9RvKUBGoDnZCr4Q3Vh3WuSZjndsHFF98rY8Mcb6AJ7eKNDZcuSv2WjePf3PrzGDJCXXvwjDtJEmjcSgDV",
  "key8": "GvELhP3rSRYusAwDymLePFxzBAyrP3aBLHmi2MPyUCGpfHaH7o3nLZvVVfv4RjhF5ekgsJH7okqU5iFYZSmtNUE",
  "key9": "4WUJKbapfkxT7GsVHbnJacaqCnNbn8TSutrQtNN82pKvhdSkVhRpji1hrBcztnG2f2vtnGdiGHUeT8M9mMHLQG38",
  "key10": "3aCnz5iC6d7dw6HjTtBCEsMtcyyYkgb9xse1ZNEnkftbr9wnbsMWCskkjWAZoxVsfLCzyCDtYZQCQebr7AMQsk2Q",
  "key11": "htRveWDFq3L9QK5HWP92TJL3Wxx3g2j4bEnyjT2ucTwKVyMtraJk31aYwvtRi5g7G77kd3hz3GTc9bXx2mMVk64",
  "key12": "2bgo62r7AbAxRUMPynZaG5sTesPcawyk9DQiefC6mbo6z5WKZzh5sMe2NK925vKLGuZ8GYfkSWS78ZVTGEQ3qntJ",
  "key13": "urZNzyLs6AQorpNwBBpvAxAfXyAUhRCpMBrPcbAxbeF6gRxRMpjwL8867EeE5emLJcFNfrquprqWF7mqfwok8sb",
  "key14": "6QjrW2vgr1R29oAeZTQw1nKdiWvfgUpeSi59xw5C8dcADBQT6qqqSEG5fz2eYDKkeVzEXVpgb1T2SfC5dXg4bLq",
  "key15": "3LHyTZHEvjVGL8PDiz6LeVP7nYJVsDcXPZnjxKxS9cKMvXLgDVVxFZAXwsxQ5bJ5Ycjp2mUZi5AeRQAENa3RcLEb",
  "key16": "2xpRE2mf2eXLm1MoSWfbywHSGtpRjfM1D4jFZUivUxoodGowhv2WbUU3azpgi5MPtjLHZX7ksVQarvVTT6WmmLye",
  "key17": "YNDHCxM2dWnmMqwPwfxjZVFk1K6KgTKkUqHpC7xvT1BhS9HrJRwAVL5tLeAHyVUTn271b5vnELFxyu97L5JFq3E",
  "key18": "5Ffsm7gYEwftqXujS3bDkDug1E5iNdvTR9JWNAtgZcWjb5yU1our2pT9JT3LbqVqaxqdXaqWgET6NrECX4RXcuH2",
  "key19": "4yF8DxgwgPPuj6DngWkFozGVSxF3qofkfaBVfw6usYuya47Uai28kecGkNsJQYJMVA6QWiTQj1Znc72PRZ1tUvCq",
  "key20": "2z5EatzY4jsNviydPHpkQFFnTBh5bp34yzGbrwoEwbUbPqcLtjnfpXTrBky1JkJGEubXZo4gutjYEQVMZXCGajgt",
  "key21": "2L4UfLQiynJiThjXFGVd4pDoF4kog3TLzerMHNZinujJJRPFQwQsGEX3qdc5tdJ1qRDTVB3RDUd3kWnhqvR1gbwJ",
  "key22": "4kz5uscoy5yoYqpFgJLWM7hQWxjRd4RqDCymjrZ3NyU6UFYyrEtjVXFJzJ8V7M976R6BWgUdbgfV91BGaieZq1UK",
  "key23": "2jmDWHo4KPUH7bQnW8PxsmPzXqAxFUvAeGQdWW1kNFuoiq7LZ3TtmJEKevZGa7CRymcqTX3DTzgsPBxNBoqDZLxT",
  "key24": "au71r4FEwNGpUSSAC3huTGr4pkmVvByYp8yRXqR8rLX61gU4zP6mPmK5m6d9C9oxQFguaH3uY8mGdnPPrAoSYRe",
  "key25": "5nQBjFoDKDprLEq38QbqaddZT2UKC1776bP2PDrEjYtyZBYRAdRNhZK9t9E5VvXt39rFgJKWzxsMyEQNQ3ZkSxdo",
  "key26": "43U2k3B67649SbvCLDUUBQYkBZ8zWAtjg4aWi3vztxhBHiVoEcjqvwvK5Wq5A74JC8exo1Co5QhFVgtSFVjhNKhc",
  "key27": "25p95DnxKG2H8WBxhR6nFTC3pSrr9MXmbfQrebC1b67VGcjmCLLs8hvFszWrWEfy2wKnQKczrUXPgCqtiKtL2LvM",
  "key28": "4BL3DBCgp7y2eCyxSCpeuWYv7ujACQ76dfNpmDaiUV141a6VZLHtaR3Wi6i91XUsHQia79WJ9LhrsQjemcAfUzyD",
  "key29": "3GfLja5S2Ay77uqbc9JM3zcjH8ifyEt2gJVgaPXaEEuh5yetUbyspBXWkXqyiUQFSXaW3vTrzcYK3UxPtBoGfF1B",
  "key30": "61pYo5gREe8WJ4wTTycHaiQUBs3qupTgDrUCRoyyWu1kY4fYCqut166TRFP8gd2DPs8kiHP9sNNSwbMz2XogbBva",
  "key31": "5bXjA2v2Ruw6dpQ1hutJT6WmTMFHNwBryiX9siNtcneyEB2T7GqRM97rTh4fif39JnpG8A1K8ksk6Y949eCDixFW",
  "key32": "4eSMukCkFpiRjkw8SSu8BNaJdPzRLLPGeJwHybTsTM8pAXoWo5Xbc37kBDvAq1dR9bLszN3MhXgeAVsLZgUiq4sP",
  "key33": "316sZq475pXGvShcs1vKUSmTggxq92AFnsVRpWAzNcrnGNT9Hwup3YSEEsxB1ftpCmYJdDS56kqm6h82sKoATEhx",
  "key34": "yhis1B76RNzaLujEkpq7grPx66xktG9UDSQ6ucb2FQmdr4vUSMyZ9BuTNG935BPcrAprPk6YZLdmNjAfgsPyJte",
  "key35": "aX6VkjW928vfjbqYmkMzrCW8dW9suxyVt3yGqtwM3tkgnP29DnNdm98h34yUPUfV6nawDPm2smDE68PLdd72omi",
  "key36": "TbtDygDZSbtTN3i6xxPoaE4hnSxuggzqTo9TZXRC43MUcbBc4pEXVAT8dMde2gTk2EK1Hu75GZEa24hAHjoYXUm",
  "key37": "2ew7oKW6rQercEVwJAMG2GTgdWkd8XLZG8f4DvvZz4oQgEPNikhWCRZVtGkECy6FnhA51Dsy1asnrTg5CFQMfLpi",
  "key38": "seojn4cEAqiPU4qvLVuBVwWPFMz2B2rgXkE17tMUsBbhgNc2v3jwy8uvMUZ8Uoib583hHdH1SM5rRMmGBhK7nTW",
  "key39": "mVLvWVdzeXXeLyKSPjSBBUMyyfLJWZxEiezCDYS8Kqt1kcTJb5NLWg4CahPdCCMMdvX95Lq1v6opVYuYtf9vDE3",
  "key40": "2toAH5bUxE3uXrByTSzzwsSKzLMQDDeQzNwEUEFsMLEGDJdSbcBSMLm47cHBYx9U7BR4pmrrzxuaR9LuLxUCG68x",
  "key41": "463BFJGMexYdsJbae1TSu4vPijJ6zoBnPYPgorEa6wkuqZRQREgrCbtJpApWQUecTG4RRHZsHZZA7X7De3RAR3G4",
  "key42": "5b4kYn5RPcUM1mDN9AtmJnF9jcK5RsmooGP9ubazoPtWdwRgqfPoyqXKzHmK3QyD1CC7z4gMiC4oGiKxgypcaBEz",
  "key43": "56pcZTStFkEwLsyXBj8aGMiRZuFZ1Ft92QKmKWh3ihdBdS7bPdm7dhXPHg59LHVwA8MgsjqKU86sJ6wmD5ivq7nc",
  "key44": "3BZHP7vyULjdgjQTheHbvthv9ZSTT3AnKWddGFerSRQoeRkxevopiuUZZ1u64vo9B17GN3NYqTFAvjqQXyt62xxG"
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
