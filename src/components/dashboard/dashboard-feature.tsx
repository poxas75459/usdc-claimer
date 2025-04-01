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
    "2bKfPbspawEn5rtfb1TxuntfSd1adLQ6aetXaYUTkjfveS9BY4sqsavszEzCMB5wcrrMcrcRG36AEWgTKsshDJJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KdpbVrCEmHGYDfqMCLk3Cwb2doFXifBC5VMWrHb1ypt4kagbiLDLGqbvJJPfLyhZJgJZCzV5P8k2r8QV4g8xzui",
  "key1": "5wLggqMDjpYCDohuPbqkh9rZVDAQEoE9PzeqsegugvmSqB1hX6Z5D2AkVevqi1bZ9twqy9gKeDWrZNUgXeHZTry7",
  "key2": "4ucu9u7tfsf9ysDSsjy1YYd5dZxsZYSj69LA62ue6QnJivcgNAnoHTV8Q9eDYsdBWmXBPENHW9T6qXt2qEamB2dM",
  "key3": "4KWhE9S3jXN6zZQGEPyRbNfRX7bcWpXineuMVNXbHDQ9TjYGQm5TwrqFLik3npCyoGXV6ANBZatxJxZoxYDyR9gM",
  "key4": "2zeHis3iwEmVcdCSKFeKavCjYjdtH1HG7dtvgdTtTgDGPf2vayYTDVMvm5QLoVVxQxJMbSSEe8SVJvRwgMLT8st5",
  "key5": "2bgMj3WPY7kDMLkfYe7drMpW2mDbiecN2QFtQvjexT2eu25tfE2D4o2Fi2WU8p7U1Hy8fp5jo27LtsUGTXtkKESP",
  "key6": "5oShSKAjic4Gm79MYHRHm4LtDCc4g7JYXuKeGe9PFZJU4f2mPfdx6K5gAjVWN7Nz8mSdNEhiqVLBE6Jedv1nnS7Y",
  "key7": "jc8zYtnzd6pnYnfwzecEBgeWZY35REc3zUEKXzMRw2gChfRceXo7tQtJjLbr8CfpQEqg5pyVxwr2AtQpg4fPnuA",
  "key8": "477gqpS1vR4x9rByJkUdJqJ662WBiYBvJtxFZvdq5vnoTQRg8Y5zw1EUFvW4bY9v8e6EPutS1gSeTUat2tqxRoXK",
  "key9": "4qxYgz2gzVcwAygbLQkSesyP5pt35tUNhURvMKdJn88WwS2zwSSLvYrDquAXqVyNPLzNhADaB5CkvPWQmgktMqvi",
  "key10": "3CyQ3kdM6YDtUQ4X1weCPYbThKWuF1EiUekVr3gVSmGuUJuqPzgWHZVkKxrZEJifEzZv6CUNWjdcqFA4Yc2HAvvD",
  "key11": "5vr4s1qYqBnpKPbNgjjPkEiixLoK334KpVFZ2UhYewk2VLtjupp9oZtkPEt1vUr8PzGQMyd49mtyzj3eVLSJUsJJ",
  "key12": "2h4puxsYUyab8SqVgjZvFsKJEWdSFviwECTRHH18LVsLPFivWKUviJ3NMJP4pdYiweFCLdBqHCv1Cwv4gr9YnUZP",
  "key13": "HBDMTXDrTQJvThZdGkqgMk8TjguiLCZfF7GuLdWfVnbQRteXkyqgL8CihTdAQaRzAFVuhQZhqGwhx4swkCcMPo2",
  "key14": "453VwQET3zoTorkNAB389F5avQ5Ag5ZSnvWvQomDH5entorHcQ5UJDYbYXmAJUTx8v4Sn5tNMYYyJbycAH4CpcRK",
  "key15": "5vCRsh9H2WWsku8swRb4XAq2wqNVpPfUBZUNqU3NCCHeesZeTQFBP4vVJBZF84AByBUedby992oU2tdZvKJQw1oj",
  "key16": "4oyiYH6BA3S1UyxzQHEpG9tqG7mhy69YSD34GFDT6d6EDLUNiVs1Qcf9wru4DRu2KGbcFN6zEW77TrcdWnaQXbgm",
  "key17": "2cmMzYkQ3adgSRwLBfDtB8arLbYtZTz7Y46c2dVpXupnE43j7ZN1n1ok7vw7PrNoeAiN9tRicEvEGc1FxEcLm5VC",
  "key18": "kg1JM1RMfdKJm6BVP3gpLykHJvoUXzYTJcuUKLXwWFnFvaZ6vNSn7MQGxhhG7SGVWPKPhsKYr2kkYRJgjH1rs22",
  "key19": "29ivZmVEC7tVh4v8tBXVuGcyxX9bihQmeXNWnpMC1ai5BegahcduEtT151TwF2W2MgNJ21DmXMsLbFaHcST3exi3",
  "key20": "3MAMKmnM5i8g2digCgWjdvHjEKkuRV2J3jQfxWJXEpxZ5sXzu1DkPUQ23C5TdBZYrUQmapMJjgfw7HD4n15K2Pxr",
  "key21": "4nBpweKPKK9di4gLLXWdFpmVTAS8Vm5wdXxyMLsFX9eVzYNxjMnMvh5qQrsdPEnoidBD9ZcCTKdCFXpyYP42njTj",
  "key22": "2KFKwLHpPLL9iwmm6KJNpZzq9z4urDpUBsnMPv6USqf8rgRR7LpLmYHzC6k95GuCa3uB1HPRbLjV8TtvJWRQbVM7",
  "key23": "BRnNiXUbjBCxBEGkQGC6qvpbV7CDG1xfXTbYxfvq95TERGqsZyYBb57nNMnfN3ZjNy6AgD2KLwtkS9k3rCrUbjf",
  "key24": "63CZPzcv9dJdg4oj6AE7mgJdKe17NiAmMYGzWZwZgvEY1vvYAhbu7J5EAir57Fb5NZX6e8cEyNiMMrQAqj2h3ja5",
  "key25": "U3xeEet2iSfixhE8XaW7RzthvczvKy2QxJ7X3177caig5TFXH9gtUAH12zJmNRFCxzoML5DFcgdWQSwuSsjhpWW",
  "key26": "4ZCaobQbYbfVxPJNu8cZGeycNyAxd3w8ttZFBx9wTLC7ABVYCNzjxuJk5pnDfFD3uUFPuQpR7Zd76VpVhKrz58ZV",
  "key27": "5L2K2ivGRLJ424bPS2xjGFBWTVD4aFm5BL1ogvUEs2uFucHtVD9thanhjdix8StDDAsszbEA7ZoNnJmi5ruN7m6t",
  "key28": "5G8thUx2zZ9x3qu7Q1GuznAqnGe5ZZuU7yCF87dU1VGqQ4EkHJyTkUzWwCWFwnKHJLaWZS2mS1bNQk7VdKrVp4BJ",
  "key29": "4BSvaRxTJtZS3JXrMYft8eRK9amgHzmVkGVFntvHQqzS4CQhLyeMLJx3JDTwyyLYQCrhdJ4bK4Pem4PmRAFuEuWR",
  "key30": "a8MpxX2DjFQfncjaSkNUXys34EryLxeR1LDeJZuJGDPrkhs5yi6nXGSZ4cXdqSY2q5oWRMcQbRcSVz4UjDkJygL",
  "key31": "4bC55AieCTtEEaMdsx4SUTBqsoo76pXatyv65iEsrPvkSiY9fad6vqfDqKU9yPhmLo85DAPAgcDqw8R5gERk9XrB",
  "key32": "yPVLKdcUWuiTRvLbkxT3uyTe53yqBgZfDZNtK6pMp99wstCXtmUFThR5EuHmtNnHpFDpQmPwyNhi6tMzi2dpqqL",
  "key33": "4FsNfFQSSZJcavJtuBxF5z4Js37oAFaHABWr6Wg5h1pHHAbGiPCH1HPtuLy7QzN8omfqLLSZY3iayWXx1EyZEqa7",
  "key34": "GY8Z7RxGE8YpsmWWZqt5FKo87yxMCQ1thurhrYyDxv5Rxr62W2nZ1BJuDTugZAqKLuWAsrKbSZVro9vuwfiZdQx",
  "key35": "65viprof1ygpBU2WTQEqdnAF3rTrUieFmSFKN3MyXrqNA7actqD7Kjv5mAHzi9jVYiQyGRG4xbVBfvS1ycXGRkhg"
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
