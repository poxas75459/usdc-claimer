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
    "2jhZ7Q1dsDCoWFBubqDtnrguShbg27Z6yFzu5uU9RcJLkicuDcZs2AFmtKTG4xm5Ey4PMkQuzPAxGWWWTfkWCihT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tkJaJ1AAnWAZPsBN5RxVt6gioZU9FQBSSf1QxFZkCSyAUqFW1tSGziECFKpVuzdbWuqesyBijuJhk8rUCuVnT1",
  "key1": "2joNz7eLCQdFa2eRAgpPiTE2aGPP7hgZHRTCB7w3TRZ3KPYHZ4kyJrvxfGQp9y14Wd2SsfeYjmgPaCcBhJ3TvcDP",
  "key2": "4nXg8gTqGpGgNdhy2DpsQ7h8fg7XnszNG96cmxLk5buNrmcePAvQX64HjjR1ohx3n2GdxngKkVP79VrKB2Rexhwj",
  "key3": "Mx3XhwdE723f6TDKcYqoKucJ3ERTb15kgJwqcBJrxQSK1LvodaeSxcU9UmA2sXM49mQFtH7R3pDkjpSDhdtr8xj",
  "key4": "4okpuGjaNvi8fXWV33v3bR3PduYYoMxL9DGgGrGF6rb3g8GypLPTTjQVRm7kCLHXDpTo6eDEHT1vEVkiBZ25F5Kr",
  "key5": "4nPw9PqFYwTXcZf5DhoSp8QoJSvavzUWtvinDuahFdYPBVSzzTpyMwyHSmVprp7tA5D4FRr8scwFdfTydmFmKJMj",
  "key6": "2ET7EAi7dvSbh7LQ4HzFQdrrv444KtxHaFzB7rAUpWQm1885ixWfB6dAb8LeXtRq8SCwstEEwARBv84JXvgyfXzg",
  "key7": "31meZMHUyJLBtL72UW2JhEqmmcxH6pzetVR7fdyPYeg5x19SsqHuhoesMxMyVoqkVyrJk8xmMhk6Xd3KCo8v3iwf",
  "key8": "2j7nrqM2sbj8d46MirzozreRrTPh56mSLUQXjA14ETrd1R5mtsarNuKvsMzLe18aTz7NCiEyPdYoxnMRr7jH666x",
  "key9": "nu1AL6vjDB5ZYEcffvjbFXFoCW4bevBH5gyyPXsk8amHwZseJW8mKfpMQAqoSrpHkpMsD9jgnDgB3oSBzvYVYL8",
  "key10": "4K2dJmyGGisujyYwVMxp3K9zKteCydagYN8gThLpcSjHvjpciMwnYqKMRULhDRMuncRefaR4BHb2jpxu2PrkoPGe",
  "key11": "5MyykBYVeYXF5UcEk9U8FniVZi7m3SEfxBn6DpEiKYJRu7xvcmKf1Vi4qMNPFPtqNFgy9STtTkuik2ojgeLDTCDL",
  "key12": "XM3JCsLR9TCojkAncaGMW74ZcbtUTVsVbvKMFLLRBBBwE7UxQytHzayHgAwYvwqxnDupNMoa1QfrmCij3U3VLj6",
  "key13": "5NruJxjCvadMwC9j2rhfEBJfCXkr2LfdhDtAgttVTyocj7Mh5gNm81Bd6kfMxSgPw37KzHUwFkSjgAn1kvXUf7St",
  "key14": "e71rqktbUVbWDVN9KojbKrYAXuTpNdJdUwnZAuyT2qqDcempQRccHXR5e3oSE86CXW3FwHSzgAbFGicTLq54E6Q",
  "key15": "2gVLnH3MHY46gSNYSEfUti5fBCrwntkCWjFyoe1jP2B1y1tmRy4zQjKE1YzFaJsTbJSxNM4nHDRnCQ92peawrFHt",
  "key16": "5mYRUc3Vw2SUTqob9JkEYEw6FNGcfFonU9B4jte1cEcfFmppNZQeKyF48qpoWR99Zu5DsbCxHzz3XgpCh8cTZweS",
  "key17": "zZiCzfWG1XxYarnDAEzqS52qGQFiAYZhSM9eAs1Zh6hdHnBiKiwsZ4buXV8nvQFcCa1Qs5acEP64JKBxUZZvna5",
  "key18": "4pTG3XiALsQDzr9GDvv9JTaxj8XU76bKT1zT7YykjYiQRviDM1SqCYQ6CeAtYBLZPVWmJpi5hYXgMe9PBhWrEoHz",
  "key19": "5428FLBHGdVwGyVmefxnB1cL73JW2ejc7ZhjdguLPRfvAT5CpEqxuEeem6AuJytGFuYCPCm2uHbYjyuPw1APXK9f",
  "key20": "4mRrGN4i4MfxEMhrrFkyx1MVqvPisebQwD5edyGpcDwk6hbBMHJhFRNwDbM3D97g6hyGZcLzHYtC8DxFj1PT64p4",
  "key21": "5Qh986RcokUzqCsKU7yYdHwNmktgtvqz55GWXjsaa2prDPSHBz7RSAi4DPuvAqyFYe7uzuQCAgjb7rMnssVi8dEs",
  "key22": "29arWnFjBxxP1Yu5ZfHX2NhvJps3qwcmQsQ2kUiZ2xMHuyZJA6NNGLGjg8DgxgAB16282ZJePMF3DbKVdUbLm1rR",
  "key23": "4CCXJ4gmpDGh31mZkd8pHx1HkVk3vNWQNj3NceT9NFPCoZwBviUQNDh3nEyFfK35RF55nYH4Xp92rf7omkykCJ7G",
  "key24": "x5FtkoNLJ2rgxpnAQX1aQoNTBdgxPpqmPARyzwyYhcmN8AzsT4xAqHhfiVffmLh813UcHVPWWfcF8eF3trtDUHd",
  "key25": "5xbBs3U6WQynrDYAWafUb6ZctyBwGUvtGC8FZjdwGAJi7xhmtg224hqpoCvYAQEouqqisYVWH6iLBi2vxiAJyY3Z",
  "key26": "3P7PFxBmVqFgm8KG6NraLg4UmibjapXTm3biXFoUe7rtvvQ55mpV5gi3y8NsjnpZnwWF4KpKZvjKcLA3Mp5GN5Te",
  "key27": "3gNBkJP24PMrNExkKJAw2xMspcuFXPFAuSTHbA75QqGkceL3itxVkW9CeieDtaCn81RJRe7ysyGxe7hmkaaJtLzV",
  "key28": "2a45Cs2pjSWcUSSwYA4yrxuAtRfHwiiQeCKZVRBo1Gk12QTKDBGTzrM7APV36oXBtq2MLUYETq8gLuRSZMXhL3bV",
  "key29": "5NxpaMBfuc3Urn28XDoPxgXseX6PNTWNVNwPdXzRddnSM3a9m4szt5zJcLTrpbSwUKXRkn9ecPVNbqkcCigU1H1U",
  "key30": "nuUD2ffzr9HvNc77sBH7aejNrYNiByvGJEoqw5UsTRxAfTdvba66rhy42m3CU2Ums9zkJaNrk7ofi1oayoPPjK4",
  "key31": "7uQjpwakxnCauUXXfLBBUhJR5fx9irndZ5MHJ6eygczsbnj1XgPaeVWdjR2DokaH5Nn7XENuSNThb3b7gBzxy7x",
  "key32": "2TytdoHAuV8mt5szy37Enpbo1HgeU9YuZUqP25evk6HFcocupeKRiZEWA6FymaHXfiwXTmFkjxPkUiWRjxHCuwhT",
  "key33": "2JHS9vjhk2RJEzhnu63YEVyNyv44SLHRXLwgUZzxFyw4JKwkHzZuEwKXtiqbK9xNc257baocyWeL4VnAPcSoYhGc",
  "key34": "5XcNz2djJWSmSYg9jgvqGYHe2KSRjeZqhmxy6cqXVSoB2XVCG1MqUXKF4xzuqu6pDLyikfN9YZ1wMZ8jJoYWgS2i",
  "key35": "5EHoCbGqP3HVqLPqZczMPPQRjc8G3W3RnMNbyCdoE8szUV4scLR1JeEivnzuWs5h7iwtkrpZRu2QW8dCmdZYC4rj",
  "key36": "3GzU5tu4u86YEfdUvXnRUKCtCJuCDzKQgtEBhA8Jbb4yntuDJQFU9WZhG4vM6gJaN6UdS3r1JhC9iLo2HeCdGLQw",
  "key37": "2reginV78bzVyECCwi3frY3Yj2Fn6buNKKsiYRYVxCtW7wFz4spcN5vG9XJDmQvzjENjTi5woxje1Hb7t6hsBoTm",
  "key38": "4kajQbgMFCRs3RAkgm2w7FZykD6LqXzsdq89WL4SzD4F2Rsa8uwcGApaH2kmqKNM9XNezDC6u2mmWacr65PY34x7"
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
