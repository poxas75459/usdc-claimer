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
    "2BXdguaT8v7JCHhQ8pj7CqeHJnfY7S98cKcQpiV8f1aAQrbQDPRQDZtV3cMLm68ShPxe4NzSFu3oh2ZWFbHZMfcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vX4DXipH58vJ62kD7uFprDo4P3KH34QP1ZxrCcrRf1MXkLQkyg9MwL1c8YzivdZMmPZbFa8EK5jJJ6ckpRz3kfx",
  "key1": "3rvPeqdKQghA78SJeVAhTuWY9iXoxsN2SZq2HSATiqsvAwvo3vxWQsASu4E5BFZe3DeCoECadvJVkmqWJDP32nhy",
  "key2": "5A4gFGSDKLYSHbb9CfTK3UPKW39WbvX32v9SHEvzv2GiuVeobh9xiLMBJ1AJvRqRE7XaXAYJ13WvNAwu6ZG78HAW",
  "key3": "5MTpMUVRwFX6qQqANebRVuQahUwiuJpFTzQad4zQaQiLzzhjRnkpYcE9iiG9YLe6mzmbfU2QbyxaNpagHTc7MKTb",
  "key4": "4A9QZLSJok75z1LJhgpro5K3iF6Tq57WezizPRg89akCEnMeDFjnjsbGDfBQFPuJptJzbun7a6VV8zf5go5Wsh5B",
  "key5": "46kQLh9WjRumoEzDwdNqShVKy9K6aqpXQkGQ13cQ9AJSR8UvHr1JfnUeqEn4QoqPFctPj1o68isG5LtTsiaRRLQX",
  "key6": "5JqRkN6hUX94iz8fBSgFaGjFU8ASgwiccanRQKjNJuFzbHhccwiVZbdSdGSTxwDNAGk9bbbqifCMBZLMsmpZA8tj",
  "key7": "x5jW7UZAXtk1Hp9jqCgkNioEKUsSS4nQ4awq9EoxvCkQwFUgoTeFZcUY2TMM2ZfFhFjvhLLfELBcJngZeajEnRH",
  "key8": "5QSAJzG4GKQ6K66wkWdnXZmTWUtCbkJ53bCD3DgNCSePPmnJ1M6aAPYBesAgCstYFYYe9wJTLsAxg6VqtveV9MfM",
  "key9": "2pUdJgjC3TGrYDMxGmXtdKWohmcsfA8qT2KwkUZH2tBn4Kiu2EW1L85geCnWWMxmePQAj27ZcxV68AWB8rQLEuju",
  "key10": "4cySJfwmaVYky9kJyknA7KiHvmL6xByMqyFXGM9AALan9qPGuz7TjYGMpafjwUvLttYJkVh2cKPhBkKbc6TdCBxt",
  "key11": "z1dcnSU5QaqjhGBWgFy1mpdGVQWJKEVaeoj7LxB5P3yrPaviNaFfBPxj6pGmpPrA2Z4gBnpWZ4oyL3QGHsERvMT",
  "key12": "5h634WPdofhKBbetNHb3MLtZ2JJ23FaVSo6n2BjBCPuPWH6XhdB23aNba2Sw1dVuuFfMgW2Jeip7QZKhagxJsdiT",
  "key13": "3Z7bjV1JYj9u94nEStGWrjubFMoc2UygPr46c2LegnVhpE58fEtkmWDM5E4c5JRStnFDW213T6KywrfXogdSCw4c",
  "key14": "4A9HYXK9vhxTQ8vL5nnnku7kmLVbxZUsK6Y1teddMQPAB4NeRfGabJBN3BuhqJcMXH5mNgeaWLNWzPYYaw7CqB5C",
  "key15": "3tiWhJQs2s4ECNJx2X9jZkYCNu3w1wG2Q5e6ifRoLzLLHbnhngamktLELNfM7qxDCRC2LM8TiPJodAPbnNdp1a4V",
  "key16": "5EP4sjVvfZ4KG2UpJcdHAoHqot7F3ixsPPwnpSnhFSegaqiG7EbDbU23zgWVkmb66zMzRg9bHNQQQensjGghrrSu",
  "key17": "5CJbbRUbU9N79kzrqxN8gXZAjn42JtSr59uwsK1WZHp3M9iL8pbohcLnaL5ocUV34UzsjLrABZ2nzn13ovjxyL8p",
  "key18": "2EffhUBtcsMrzipDw6qgSoBd59oLYaAL7ZFEeHKCuWJt7vUPUKppy8wADfNxUFvzHhcGWKUtcJ93GLLNbMK9uUf4",
  "key19": "58a8Hz5LVX3raTAyBH4c45fibtp6XF5DBy6P6p3MV79cP7jPQKQLiJn8UHdi7Foi8uP6WM5x6jRwVDz3439zYrTm",
  "key20": "3E3W9kvF2sK9mLMjxUUB2TwSfXLSjuKjR7R1YtxWhZAftUZd7px7wVtispPj6e7eHnB8UoEXJnZZ8cpyWauWJfx9",
  "key21": "5pwfPJPLLkDCrApEm1omXi4TEAAAZ2mKXxQpDpwgXFGuZWixCY9t3CY3ytZb5Kvqoh8vTpNPggTd5VarCKY8357K",
  "key22": "3s6Aka2ES9aZYWeronRMYtRfKG9QSBAz6wepera5Jv9ys7HGY7oZnxTnAtmVTP7uFSvYXwBi5B5KnCpbPXyyhaq2",
  "key23": "58fNWXJ4jAmKvpYEFnQWzyxkZ1og64uJarD9N2TGRdqK84HsRpeWiRhCAWD7LHoQ6SWSLC9sG23PHXa3ze2e3KuJ",
  "key24": "4MexS69aYdaekwnHiYDySQSqJQ5vCNTxNdmVxcpP1PZNn44hct5edCsTMSt4eu2U1pCGfWGxAJecqR8ho7qCvd3M",
  "key25": "2xrKrW5sHmdVLk2UARUkLpLhaW52uD7oXMBb9yVhWG1KZuEc4S89xDM892YfibCjPoVgCU3rjQknKiQJy1nb68WA",
  "key26": "2oS7tRAnrm3ruN8aPGdUto4k7pqia3EvHMiPUsrbAeq4yBSzCEE9A8uYEHBwre2L3o6WLEtY25yyhxGaUkWUZWBL",
  "key27": "DbYLqcVhaGMmvYvR8zbiuYV3zqZk9rNC4nC8e35Z3kKQk2XMPiZubFqzqJsoBCTfL1y1VgB5ojVGLscX1Adrc8m",
  "key28": "WJGESqJS5df1yDhTdHwxJt7CAonKSdr7Fa3D8A5WB1kYA2VFq8wghwNv7ADJX9QXqjHMWmXWRqBT1PQ2gzq4vSP",
  "key29": "RM5aVdE62zH5bM6UxbWhfxekPoqrrrF3TnrM4gFqbTExCofhEXJn2qAbxCxJ8oemVsS2S1XPD1iNLkZ2G2XU4Dh",
  "key30": "3CszPPteEwHt5G6s3bhqjxUwJntvwiMJUQZAx7wevbVjbFksJAnDeVo1RbCV1eJpVTuaEvbWHp2fU3kE5jZP6GjZ",
  "key31": "4uv5jkkdMFzsEdTfUV9azkGhutfrfDpstVwkNFNzPNJtZZkoHtj82VjBV5W6vxMLD5pyg7d6P85YsA4PTRPvBpAD",
  "key32": "3x7TkfSWM3dgDiAZrxthVNNQtGtHtaUq3YqzhuBvZSTcQAv3Wk6wUYvPdGX9efBBAYf48sekK3ij3Hxtqej94n4K",
  "key33": "5DWU32J6AN7W16CptrhJ9cSeRJEzN54xFGW8ohXKvcN8ugTJQDf562326YTQ85TMn75n7ATLZFo8vv5jRKSV3bSC",
  "key34": "25AKFZXcqbqsmshGseNatCKxf6RotFPF4cZ8nHGXiK5UCHcWb7Ux46Wdqdv4EpNHtZ3SRCxupRMHRrFnHD48hzPy",
  "key35": "67bkkikbKargSauTrKdiQm2fjyck3zydeKWn3bTuT4whNd6tNcthcdzUcH5mRjYXZ6iFUs2qozmdUwy7hNrTZevj",
  "key36": "YR4HbpR2kmuj1WN8JVv7NgsAzKe2dVbJrq3wtb3FiFQVQYwnLRoSe3LZ6ueFgDXUTWfYZL5XuBX2uJy4Er1Kkum",
  "key37": "55AB8nb2b1yBQPuBVx6gTG3qoTSQHBZ9dbi3e1myXEGmVZdMUyutetgJs6oDSjnUdmtLDVVQU7v7t3DR6wdrWdxv",
  "key38": "UG1nKPT34XYpKnbTenEA73EJhfgGKaMB3xZ2MBy5P9jCMsrstHupPHYtnE4kjH1mnJ67rvoRTEPzzW7DagxDfY5",
  "key39": "2v9bLd4TqG4t7jEUfaUCM7m1QoxZDzyuEHo1oMswpDKv7uKDrxBP3mPazfjavNHnP3t2qqg1VWBi7pNcPAYRgZcn",
  "key40": "3QQAAUx4FsRfaTv4uXTdBunjsGt65VmkEsGDdBC2peEEWCmB9JEbH95EafdXYp2L8LXH3YKRGgrg1Zu9WTm1o5VL",
  "key41": "TATssd9RVsE7vjUvgFk51BbNyw1d4LamA2uJEnAe7Uax7WY9qe3M5pLDT3WZY2YA9DzHG7drDbCgtd3KCYRc47a",
  "key42": "5DHBQBJ5U8nde9QbZZVzeZZjFU7akinpMzj3MPNdqyme2Y1jnNKKTLdPRYBE4BXWXgtQrAnP6y8Q2U17epnhJd51",
  "key43": "5pjvHFzJFwL1ePaDtGAT77E3ucyn1ZdsiRMHxSCVqVxoGCqcd16umfpxkNXVFu49M8f5mWYEZ6EXc16a412hRnzV",
  "key44": "4HQsmVyipnzByTBbXJkmWd3zs7CbSasFvxiMsNA9VEdGEXAUCtfPgRbSe4TvNRH1zvYxe6f3sTfCz3Kzvm58GyoS",
  "key45": "226fDC8yXPtBcTqh3aDp3ETSArHr56LftZFAn7NDS5JKQabxHb8pZTXvtA2egjqaHuQnbaEL7pxF71ixLpmNQ6TV"
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
