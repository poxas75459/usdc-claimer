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
    "2aExvsgRH7TDGA1a9kVr3XoHu7mcnN5dZgw6kfj3kx6dcVRMYvXFE4eFXS4yxHzRZdYyDW6WX9AUaFqnd3HjJNir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKutUSSz3CnFpMzFb9NX59oVoFjxtCnJuKGJ9JVQ3bdfM4CgsX96AkAvP8dkeVU1kL5Q3vwR1jF39DADoeopYcf",
  "key1": "45hndpxiKMAVgGYnz1wN2vwUFHa2AtLvBZ7gwVymFWQKWtsEKSJfZprWdMAaCMP481NNLcuDnaoBr37UoJApJWsP",
  "key2": "sqVmrNYCnuXHFY3wHZfTw8Qoe3JhhpQDDjRawBpLYqHZhdgNaEtcBkvquF22ySaGscS5fNydpqVRKXXoGudfkcU",
  "key3": "2RsodLKxGoENkF5RC1UbJpSEL3o3bKeoZmmWDy8Xkc2HUeN7i7SpjysMtNqoeuQezqLvyY6mhCUdgiwLshutaDsK",
  "key4": "5V2rNZLebZbw762RiwNKGSmVdkCXRBz1yU2JcE38fHbmGhf6v5iZ9pghFm7k6TRDG2RiEKnqW8ynTfsuTNryDFxT",
  "key5": "4uDurgk8aqqtkmddRBLaUGdXJvZu2tDVShfStbRnpPxnx1h6xqKzVZG5JHEh2qnn21QaDRJp9WtBbrAw4vtqQgp7",
  "key6": "53aQj4Hybs1cQ4kakebjcNUYsPYeYhH5VzHgiNJFoTE4NCtYNnFGLHyFz3XUTA8cEPKexYhim6Sr1pqyfu7yNLiu",
  "key7": "zwcayhRhj2c9GuLPoTt76PC1ts5SVYwDW197ewA6iU5vZrJcMPVd177Gd5K5QB7yatiQxrpN56Sg2FkyXFSEAse",
  "key8": "4pkKQUn8b5KQ4gvd8W54jHsxztgkPq66UvyZkKycWtTsthDCU4h9gpkE6St6hydoHhNt95dDv1YaSQB7ettBLuvM",
  "key9": "5WJTd3N8DcJRnwKnMSX9MMGssr4MrJLZ912H3hRyLNhBCSZSUzaZErLCAbGvdQAy9Jx4g3gA8a9iMLACexrzd3dw",
  "key10": "3xtHoTN8rn2GSDt4Nat6UQfNJsAyePK3HWLz6vPQkzommRfpSdhnF7bACT5xBGxC3PeMF4AiihubSBuy1ptQ95dQ",
  "key11": "EfGwm8kteWjrCZH339AGk4hgvBhHw6uowepj7dMgBZhf7ZHVpSWmgtgeFDC4FKaeA3om5ztZrZeziyqhxcaQtXE",
  "key12": "LVcor8U7QRETufivXRi7ovphmr1S5o3XaJXsS9xBNQ177pU23c8Q3M8Lq7dC3HoMgVRWuurDgbcWyhdtisSf6Ys",
  "key13": "2o3oaD4rBYSVqk6PZYxNZKC32zfkQmfg2VKDWtsZKHXPLaUPaqtpu2AwHm1YKVtiewcWSAXHByuDTpis7HojVQdk",
  "key14": "Z7dC4YtotV6K2o2jToiYb9NibW9Ta48iVZqaUYZhxHuN5S3sf6LFNTE22mgzT1tBsBHBcGN1uYQjiM65zjRttnf",
  "key15": "5XwrXMEEgnUUTzp7yfNj1CqYToa2tvePbBpSyEW34jstSLr4gW3VwuD5wVKHD3V3YsVAWiztQqVCgnhZta9krLFa",
  "key16": "dfL4qL1bg75xTa6WCo4SQHGASoXFPpoWfsgxHnW6ae4uyw8KBB9ihrLcQbsebmRS9jphNUmJ8fAHwL5k7kqavLq",
  "key17": "3Lp3Am1BeEovuHWMELBsSX89fjWRyZ9ay9V3Acs2qrV1ScoHVkM7gM59HEywWxuCaNtHAaKAFvBRhACTvpcfznbC",
  "key18": "3wKGANo7mbMuYQakDSZMtJiZtPCYBFvejj8cMe5gzHRTe8cvUGWBW61nVwcWdKCth1bJf3VGtSGvP5uqQfHMrZ4C",
  "key19": "3D9Cs2Sns2b6B1zVbwQyHKTrP33x9daM3sGppn2Vv2Kr6fUQMe2vh36axwvH2ic7QojSbh6C57W83yt73cWVRwbY",
  "key20": "3VN8GrRmN6EPUQK2Tpu8K2PaWoJBfxLFWqDcDo64GUW24HdUX2matKUDC7p76mYH6CLArU9TE7PBDh1wCA3H9xs8",
  "key21": "3ECsjP7h9HuAEWQ8ciZtcPoggRWRzRsm2ZDTb9WTYBvys9nEmNtJEmt7KtBWEFHZScDWQtUPqwWpEn8AxU7Bc1r4",
  "key22": "5gKgjqWgw1qUoVi6hHuviaykXvJeVSfsGzWMGFAbx58CXJ3NQmTJM3JLWm8zMRiNjNNe8nw6V3ycjTeNm4ihZYxY",
  "key23": "3y5p2nEbCStxLt341JV8sC589DJzrn8nra1unrD3PHajMMvKvarddNnznq7UXWmPeGgwP61opfwf5er4uAGzL3zn",
  "key24": "3Ec7zZM899o1xRhAi9MuMU4u2scKwxLbMrFs9E4hxqFkcP3Ym9WVnEApSJ6zfPvExs7UqH44N7X64R8R928zdzNV",
  "key25": "4bBMtNeswM3Ej7ASzxrwkHBwWJrjinKpqWfcYrAvuaxLxxQBrjuvmJhNL1y57nSAYEkF4H8t12rhxyHfmC216t7y",
  "key26": "44G6TTbKfUEbk91LiTwm3EpoSkYLRkvbn75GdpRDQaZAgzB15EM7ij7BHaqC4VC9YZMF7594NJNVnNdwp3G9SSvX",
  "key27": "5uKcptTukNgfvGHJNwbrqU8bXpJV2fe7dEoBomachigfHCQUUwLfGJRn7DonsTMQ1CXkDZaAEQv4Q9r6eu8zECms",
  "key28": "4NVxrpvUsF8NwmXmL7x1hbarHcGrPPfLcX4xr4LfR8ZdZ5J63zrLUWPZXeRypN3kbwwvCgddpX1rA6EPxiUCHShz",
  "key29": "247Na7wy2B9zp77BMZaJHyHnCznfQt2pktwSocNLySyepSaGQKQBxfFSjSFvNUxKfSe5MVARe6bAcbStksdNUKj2",
  "key30": "4rRTtTkkeF6RRNz6Qg5iU4H4gXLbrVteFfUQYsbUcX2B1KCkcNsEJziFLMsSSowJWkMuZeHGCHBSvbjXgqRwagMQ",
  "key31": "2p79Z6J6mzaRaEqjpm8xtZPL4SxbwaKL1dEPGKqVsPE9EJY5rRVoR8wCkcrvWV5VyyC5ABa8kZcKCNBJVi8AEVEA",
  "key32": "2cepzkfkg2R92wCE5GVfLkHQbaJhVMLr24vQtjz6SYdBrH1Va6FJPT416tUP9ZEyGC221asaqZP8KrkRdtqrddPb",
  "key33": "YtPQ53EdiPqvdoqhR2Sxb79dtGYPfoJpTDfP9dCXUQ2NKGj7oJPkFzNVFC9fvkXHF7WvHACghdoR5C178J9TUvQ",
  "key34": "4XF4wdQLZLiyoBvBHsSACw6mMqTGhZQ6T9974GscrX4V4HQDdpHMG3YCaYzpMNeCupvYN8mreaGhZMEcnQpW6jbt",
  "key35": "32Xr9wsjsfLMSD41LfZEuv9SnpxFVXeU9TXgMq6aTyxmKEJjehWf6Q6g3EzsQuLwmAAZG7UVv9keftzyxH45cPcJ",
  "key36": "5r7gYGcjDibfiTRJqrKPRgrW18HuBczbC1iWyP1fCSrDkf7qeuQLQ7fJehVEuwEpwfaWbvBFMSKMa67pjPAZdpTg",
  "key37": "24BpL5tNSepuM6ySVPNgnTqtdM6eaEGhemMbEJvtbXJpVKo4JEDaVkzWKMC63WD88TYYBX4gD5cV71HsfDNAsRqa",
  "key38": "2Wn6cFzP4e1jTWJi4rvMMciKKKwRufgJjqM5awega6ejGSoVP7HKyaprSNxXczoRFcMMGcAFV69rWXv9aKzmfVy1",
  "key39": "4WvuJwPZLpYEqntmkvioxAaLEN1r2qj3K1R4bhaqQga87QTBamYSRXwLX5dV7AZUjjRwEDiTh7DrXABYfaE886Dx",
  "key40": "nyHDxCuvwA4pFGRNz6qLgBhHpjW9juiFtatqdGfmPGCGgr7tbsTfMYysjsF6rQ2GYzqzCT5RxjSY6k9aNTyitDW",
  "key41": "K1UJRobDrBwaHVdgh9HQe99fvHgann2Q3CjgpAY1BH8EZPWF5YP7mqPgMVpckG3JH8ZhGuF24qLbMSfaM5RLUui",
  "key42": "42zUFo8mi8MyWikLj8cF6xq5A4HTQEA82mTnHJtkNP1E5UmrTNrxgo3zc3cvZnqJXMQy2GCeiC8anHhmjggLHbKT",
  "key43": "3bzg1SqTsu2v4LgdQm4fctMSdagrRELukfPPPMG1vpexn4P4A2oBgb6qK4D2z7HyuxuhhNAbadqeNKrUudHTU38X",
  "key44": "mrz2uC6zqqY6UYA41UwpD3VMvfgiYcQGNYMvf1UBSubd7qjALWJjgGB7NVV2hd2PE4vSebLzBuKtqhoUocoh9rW",
  "key45": "4PxnUdYiEuSbWhjo3mZpYiecrsdCYVitpmrKpHchTHMyAvg9ExAbjDCupNtHf7xzuVgCAC3erQp8Lc6tgnL2qHD5",
  "key46": "4p4ESWeqB5ShnCs2qisFjDT2qWib2f6tsRBhjZd3xB6yah2WZhiKNoVWY2LSmQ4E9JGtGQrAxbrGhvH2HBKTTLcs",
  "key47": "3ncGz15PZt7dUGKeHE7m9ZTFJHi6XehyDsWs9yDj1bU6tka7QmL4KxLEYwm39hypR1LiveP5mg4mLDZRujSMxHzD"
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
