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
    "2GdotfKDZa4mkaMBdkU5yQy4oVcdAv8mYcMscK9K3wwTv24fn45XJkQCfYa4DbwQ9GEbvsNP5waBhzSKjSjSDtEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zuC1UqgpDmAT1VTKCQhc82omPmeeUQxDMKRUb9zj5j6ug3dgGdErFKHPwnsWdRHJaM8dgv41KrtkmP4H5XgcK21",
  "key1": "59RZbsMELbvEU7pxL4aWsmJA5onWRCQvQDijyWAYTEujzuRvuAQCBGV3HCj8hwyp52LEBXtvQZRzZnfLsZ6Wf69M",
  "key2": "4z3W3e9iuaLtATNNcG9TcSCqTp1ikvHGyXUmZTo6d3vPax3UqTwrKp3wmUUkSsJcy15Tjn9pw9PpP6Fn8kfQruB",
  "key3": "2TzmdCHhsnF9cPhxnqQthDT56gxPTBcbvF52cJjcTfBvVssypM5s1p7WESeCotyYsFAEMd33132TKVbjRDTxQoPi",
  "key4": "4oTmm46H59CZRtp2vZqcnz3BXBFB5USSLv5HobznEi9LzwnFtmyM3ZTTXoaa43iAtpv2naK4y4DtnK4qRtrvoH3x",
  "key5": "5nLpnoY31BVVYdiFgBM3FwXMvmTtTpsLUKivHamjdUhJ3W9QfV7Wyenaokmfczs8p8GN1rYYjJr4qkZujAjMDBZe",
  "key6": "4eWYwvsbXxYF4KjRbAAtDFutJdruqMPhCni2TTi1Q9XNXfDetFHmZfybAx4unN5gErp6RgECB9diaMZWrbYttw8Z",
  "key7": "5EHusoF5EqcmEGSyX2RwgaTTeBRu75FkDYo4jd16UnuXmMVx7Cua3yDv5snoNB6qNko3PqG7GxGC5tbKes7cfAo7",
  "key8": "29ejojWRnQQdbDNDU6RkgnUpXtGDaUaisaibEpudbjoud4oxP7pUS5eVqyK3vDMvZZcjJkSLVvUYg6Gj52BDhK55",
  "key9": "5o4RSTwYyKf3JbGcpq8W4fZRGDCR7btZWX3yShgzMzus8FkTYhSk2DYiv3CiSVu3sBpit8arbmhoom93ZgiEGTUe",
  "key10": "4Q9WimRwY13DnyfnuRosTY6MW7UBe6fwHRaGuwL7B1ccV7G3TPxytqWLrio2gNDjBTJX8gkkRTYSkG8xqFKX9SZi",
  "key11": "549ZXKKFWUdNekqRebKTL6YYQkDYGnrdnVwgZcRbLfcJ55rNueF1MGQa4xQE9qXqyz5q2FwLmQfaBPkpg4okTPM3",
  "key12": "4J2Yj4w1DU7Y9WyHpKwAmJZZd7qRxGLfqgqQnX6BWyDXLvU9sMHtybJBQkuBehGUDq55B5aXdfYsCJxoncr34rys",
  "key13": "3ScxNXSqTc9qPtoJtXzdsXQyEi35StvtkJSL3jngnFYscZoAH25H6pcS2aQkcQsRT6n29bFhZbAzfaTJC1s5DdFz",
  "key14": "3VPnWRRGngW9bgjoR6abMzXRParvPZg24wjjF3YbemE77UdhpwpS2ZjBpy4myiPZNaBJSs7VKYWHXkCVdtwDx9iW",
  "key15": "64VXT8N2igLEaAiWCV4PkTg5dMVJZzvdKAeAAWGuChuZpb7vSTQkL6W5H6aQeXpHDNf1uLcU6MNvdF6WQhhgjFxS",
  "key16": "4ELFCJrpuciTgUumVYdhTVv95bBQBLDwXS7mnPbjsCtrVHfD8exnMm1yuSfcDvX99iJ2Hj5eXWGRAyH4ic3zoRqN",
  "key17": "3B21WTEW94eqgPsYJUqAUz2Cw2tWDqSzS53bfYXBZ1SCRNDjCrK6mJegzAg3b6zVCmoM6SFRruNnofaMfbhsXo18",
  "key18": "gdMyFGjMqyqSWhzTwDKfhYDHvFwx1A7iTQ8K9NgL49yc74Zr2FGLBbQuUEYgX2vaL7xz4tHmU3z1cCNsnPtN2rR",
  "key19": "45jeczepPmaqeAvqYs8VempSJrq7r3L8JMwuzCRCRDbz9SNpQFUYwP1gAmT2f6vVnMx11zCbJdr3mb8mgbrSGHyL",
  "key20": "2uGXvPqq7paGdW2NCbr9z2yLDbDMgtpDBQiK55ns2gKA4fdXDf3YSYtbkM4TGpLAQ6YJYHdVEFCAcqGe6M5qSg2t",
  "key21": "5cZwLZPJnzBZs5ZGfXMrckwNBM5aSzzg8Ts2uDpXzrxu4BET6FCEFx1WmfWosWHdPamMRGLdaGqkYa7pNJJN7UJE",
  "key22": "2xpoLkvh9wsgksxq2gSSgHEoDZJTj7hdgy7QPENcw6JVWN7YPQ5CED7ViSfLRtZJurxU7vVHbcLfs7hr5UXtzb35",
  "key23": "2fpbcp4oRQfgw3f6CHZ5krC1JaUCzcTJ5Be6yd1u2p8nQB721XwurNEFsU4A1E3kiKz6fAgm2TZeEr7LGZA6CpKX",
  "key24": "41G7FjN9RxMP4XVBNkjdqe2b4Hwn6CNXFc5kHEAPxizjM3VtTLAJdr5nwVf2zc64m4HiXvgDEGPpbU5gcoTjmWnS",
  "key25": "2s9tqVe1rWgos8mhGmLSUuZDZMTwKkGQj4twEkAUzcUdnZ8jxD8m9MPJwggcDH61JX9SA2uYEWqD85xP8DosWqx9",
  "key26": "2qAas8fspkta1sVQ7aimwdLE6nGLeT1nxwxWgKWQDcSHk7E466faridvZzB7FQUaZrAqrSH5vVFc3y1r629Ft88K",
  "key27": "3AKGGvLrFW3U7hrEqrr1fudUf2MbcRPi3ncfXUmXSKWxrbr4oohT67cP3jDQUmw8EzCbzDE46ytLEP6BTs533v4y",
  "key28": "nMhnojFdUXUHePo2L8gXLBQiU21xyshJ13aPrY9BkL8AkzXqhPtHKKmKSWXNWdxrkZ1KvSQb2Mcs1ubfDZsxmAh",
  "key29": "5rSwkFJTd3fu7WC7R9MoH4ZeRGzQBeVbWnsndx8a8yAGUPxtStg2RrpRedciFB1xCxAKsFUm7UZWVbhz35tumMh5",
  "key30": "2PTT5eiQ9rC7NoXRZ5YTyivvTvSSkvuzBbMFmsuP49zz9bhr1oDccmuurvWd3qqBPtEQKHH5Dfs1vYiBzBSHs3w",
  "key31": "4S4UgwpB5QaBjutWdnWczc6jb3LuE4ZSQbDjttpuRJLzZeWFYEFhF4CYxCsyKqBgvHW77bn46Bo8Dkr37Zx3vrX9",
  "key32": "3sftuQVabNKrKBu8sExMHuHhc9PQzjuDwEcraMDM4MnbWXBMu8ZHfT8VDaMxWdXdce88vGx7CmCTj2A5HRwgoDCk",
  "key33": "GETRRZpSvv15JUdF3JPacRSNdLYTMLkjSBW3cRGvXn7yJdSCPqgh5Xrge4QjepaDQX8vtEtezGZiJpajo7swV6C",
  "key34": "2GeCoQc9a54M28FtnCav4UvvsML2CzomyGm59m5L8PU57ncK61ta8Tg79hJNfLb4HqiNQhweqZ83jZvdNYMZTXNP",
  "key35": "43oKgAC4ewwHPoMCnM4JNeWfFJiDkFvQZTWFLUis4u31f5FsHJxESZaSyD6vXMEco8Qz8R6fafxLUhumttujaHof",
  "key36": "3TTbQAm9DfDhUDm6UuRbi5w6jqqMA8kHT3fXM3H9eUgWrMrvYAcEHiKdmK8aBsPFecft4o1v1R9qLmyufd4TeP6v",
  "key37": "32FFBd9m9ruSq1dHSQTJZ2HWomFBrAFcNZDiQjSTGH56fLYFgVu4wNYib4ah6FrUBpV5VPRxusyy582RWecTw7Jh",
  "key38": "4ZiqTRQdRAYUTSrxdpdsKnmaKMbKUwZvaP52XfvRZDHb2wSBtjzE1nDPJ9ES9zv5W4iFYzF2uqbGukCBrCzpz3dc"
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
