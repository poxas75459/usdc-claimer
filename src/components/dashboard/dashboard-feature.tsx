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
    "3ZiGfWykpTXCjSw66aTvmsJGpfrozVNDHQ7VDt1JDoofndu6YtnfwEZWHb3AdWpUXxrSGXgMAWJc9kDze6bzkkxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UsA6ZQUBnou4U3W5ntCMuKAP3bc67uoNFBxLEfYerd46WB1hewGMnrokxsKUvDTxu73scAwrh3TCAZbCuL7J27U",
  "key1": "5M8EAqp5xRGmFwSoqbTu5LqLorsFSe7hfvXqE8HzfC3bLBVZM7t69QLKg9N6DnqofFjt5KbBaQSreYmqSaK38tCC",
  "key2": "5GWPy8C6knRQzdBGnixK99t6en3Fd6YmDQzUxCuEck2FScfAeZfXgJviypimH9QiKYhHXSZzXmED46kbVTcDVkVT",
  "key3": "4pRDW3PACNy1dpG9vi5gSuC755xE6bwnyFy5q4iBvPvxHMe85nxNKb8LUFFuNH2hF29zKUqm17e29sxo8i7RCvC",
  "key4": "4ng41bhxxXcixs4hzk2NN2doXCWSeyzjSL6rECAYtfV1KRJnySGXQ6ETDidUZDGNXD1nteuzLPipCQSRhwzxsAns",
  "key5": "4tnANsMXPwa4grBPRenQiLz7Z1joqoetjCrDyFSSRWy1YuqzvT1qqufScttUemd7trPbee1jhHa7i23HMrCcGo3E",
  "key6": "NVd4jqSYGjS6EW4kjC3qpTz86Q9w698vdJT6YSJzvKEa3uUcD7nurxxQNiWwzE4YNd97AqzEA6sQjXnYgYhqPD6",
  "key7": "3ZNXUxojARhPoxWAQq6PdKHNYhaNJeFwUhNfNMYcrLqHFwUzKsZpx5VCo7iwL7LjM5PyRVwhgF87K7bLkFEMj4De",
  "key8": "513xfodhrRdJUbgjxic2UWZpdmSXhoSvJWjQjZDncjQsNzdTvQJWscAx6AC9Vph8T2KRMpBwrLcrmr2dzKQPYfr3",
  "key9": "2JBGwjF1AEqzXtWinY6rxowhDVWJSBiWhuQ6UuYgL8Lu8hW8iEhvPRTATZnQi7uSZ8czsFbGhfNiSeqfBngNinrA",
  "key10": "2vaKqFd9ae2KTHBPADpkA6hatCavFGysMZY2NxJTbJ5U4MLqDQSVS1rr6NXaiUrU9STaEPSX6fxvgUWtknenxRnn",
  "key11": "3zxN4suEV74uLetW8JGyEsMu5dwSTLcQAFSphPTV3QzXTNyVzP24Rd4993v9VTxomViuamTay2FcXjUvCGvZ6Qgu",
  "key12": "JqMT8PtPPnPMDdHJVAxWeBPS5wobBUA8j3p63p1kk9cHsEz9KFhZLnDBWQTmpHPUP5Sc5sY5BUuvoUppPVdpSh6",
  "key13": "5QVPMfEGqvyzbLkpJrCgWgwens2X9UN8UDRURPuLGVUi2GLaYx7nKnneRbH6Rn6YfDHqVvo7AEmGMuv7oLCBvc7W",
  "key14": "5aVB8DmNKvf3PPi1bYxhXFb5jK1Ge1Mg8ya2Xoo6tYBY9zzvV1Q4QdnFcryK1XNeGuansbuJVVCNDazBCj19ukM4",
  "key15": "2QichrMozirqnqHo89DqZmB7aNut6zYFYyGDSJEfLsk5rwLZTJ2jaez4e6GTFWB8bJbW7Ku1581u5WgHDhT3k87C",
  "key16": "2SNDzbo4ZMpRKLYYjP4qmo6PdCNwCmRfSJY7sL6mBhKPs9TV7Z4LEGDg4W9KkVSXarg7dYLfpBqQaxWM2MNJEEJY",
  "key17": "3SnGinyfXAZhjvCavAnMwhCtwftH77m5KsturiXQPepwVZZVcQoVFECVP3k6dJ1sx6qPjY7HC1g2SBXLBCtSMRH6",
  "key18": "65xwFQ8d6DrkAVMhFHXVDATZa2mGmCfJCDbtDWDoKBNJdvhRWQkarvwQXMAWLRBuS8sUpwzqVLC3KosnCEWjjAi1",
  "key19": "2iBhPZ7g2nbYN1dCHds6u5r771AQ7oz9Fhq9GGcnm5hdURL6ZwSAUMLamZo3nvuuHfNBtTam1t8XZkJBjArVboqy",
  "key20": "5pNYfLweKaM2fhji1U8mty65xzggcVX1xg5h7oVT6PMLMbTbnNEd85Bhm2vEAwYiqKr6FMbDuDE8YwF8zP6twGb5",
  "key21": "4YkUoPSoSvjUP4eEp4vhknnaXFZne63uyoxXQ2z448joqf6XbVPQ2GFKdZwGKTCXNsJEYH2hFNCha8sgkAQ1vutp",
  "key22": "3ftLBC6wiF94usoqqbkC73f3KNyHivbC9aHsPBehg6UPs7XnPk56MUSzJC1w849s1Za9bvuBqurFPbVDa345JVTy",
  "key23": "3R6FjEeNpdxu9qVFrddF5tRuLgbJg9kGrFqEbrs43N56qyZucueMbsHr2TbeiHXy9eXQUSkFxHr1eeU95dvA1cBQ",
  "key24": "5Pq6zetiJhXgMqDpTyoHw1AchbAB86QJA6mPydQShj3VTQeQbNvYfLh8SQNiQF2q1joz3Jr9CjqP1Htyv73bxXMi",
  "key25": "43jDDQiquuy67vQJGicBSvTLF4qeBk7H5wPTyuDQsCLStFbxmdqQ6VZPTxCo5kBqzbr4gYXkdZSB6p5moL23iCur",
  "key26": "23Qj4C1Cv8poMd4TM3WznTkQ6GQHegU9PEchDz4V2jetdYeP9gGmFx6TthaSRPZ8fnen46hBhycydsvffi7QdKxJ",
  "key27": "3qTpjvLjdFwBDFQNzbpXaXtVvH8HTb5ZER9Wo7YdoAYy9vkHV9gJsa3WYYDqygCFwYL7CvtYezcXiQTzjSU9vCae",
  "key28": "TBT9jusSpBweJLiQusx9aLWUdkL2PaA2euqHhXfGc9f3yniDyb5AbiXjoNieKs5UebE8KU21WUX3DQKPVDxPCn7",
  "key29": "3w7QmZ4ydrV3tcqJVqPdKqVy34RguNak7sr82Z9p8fRam5DarsLjWrsADqhdnEWcHjCu8Tn5qpm1D8s687Bwo39D",
  "key30": "2ic9BjAG8Yx84nnJaVsk44LG8Nbiz9nHeyiD3jce1ReQMjQbvjTAuiZxGBN1ETRHvVcoJF2mqSzV8jS71DRNfZkw",
  "key31": "2Ctwfk2F6hYzM1dx4dLURcWnxDXPqGiKYUUwrwG6hGqRvNtrM9vMCLncx6c6x1zJwHkMesfFWyjiovnNTn8AQem1",
  "key32": "4B7Ss7mwpGd5kVQebHEbKLE7WpBfyAWK6tptmZ2J1KmajZxaTAxjbKCsVTdCsPPSsforWfY3qQ7HWuQCRATPDLCk",
  "key33": "43kCWeMNRbHZKVjWaELNLaucJ9dET5v28tq78i2NgMAo1nzBDp3mxfP3Y8zKHdzph3UQSQTK6A2V25kYMoqHYVtw",
  "key34": "5hVXagREac4xTyDVMt9oAr3kmTPE3n9GeEriRrvgVwTswbeDJVCr4CWxbgPmgcQibKEFLMg75UMCE5tpxzTjmbEJ",
  "key35": "5c5k73bGCe943vjgjBTuAAqTjGyWzM1mY3fzuyid26WxLfnPZUHK7qC7b2Xzbtyjyd9u4H8SMLFxgvew7dCun1aY",
  "key36": "WnaE9cjPtCfyEntp35bMPN6pPrTC1qaFW9qXBw1ocnSwM4gaa7icxjAyhktNyYRRkZ9fW3UqgV8RpgqrsEWPVFw",
  "key37": "8Mo6rEnefCsZoq7n3LCNwjkMaC2amnpf779yDLTffWsrZGEuR5anwZ73zeSFcx9AAjbL3WUvrgRAwvBTw9AgtBg",
  "key38": "3TqxRCMzSdttGk6GQL7REDv6fCsAmSmBK4rJTTaYwBwmZdKsP5doKv2Cogrn3PeyE1Zv6V1DSCQ2RK4fLD3NVb6x",
  "key39": "43KYwsHTQUQgEdw4yQ4afFiHWQUqsiPMAF8Rd3oH9gRBRz7Ru1Aa7pJS1A8YEUnYdfV5fmU5EpeGfudARMKk6NFd",
  "key40": "3hrq45F5R6ebKC5cTE3kjQaJAedoBRz312kHNnGcCYkc4tRdujbjoAtFf2VVNPP4Nht4JpeGtF1kiwD5WEWu6mdE",
  "key41": "2AmLhYiZn2WYJc5NMw4rmsRUtZxvzrMPcvC6UH3zFwvBGqVsNHjCg83LkQtxkRCt4cRL8RWsSszc4LdKpwTEB3WK",
  "key42": "skqoPtu8baNhgeFvEcSf3SKKfxy9Gr22FtQtvaS2SpNM82JFDxXfikKydYRp4aCKyjtn8vEwPEjkrZHDmMjxoE5",
  "key43": "458MpgLgUGRYHMeDcvikGrz4m5UjfacFiNRngrVVyD1jS7vnccEGj6gzWFFASPs4wsh7rJgkuG5KeS8doiJpMVWB",
  "key44": "3sYWgBB2mBnGbzk1AzmVLsyEsQraoBpTrsvkM3qApv2yXeBwkzVwtyhQNeb8rtgtfNU7FGzEpjZNQheqatPnSdBP"
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
