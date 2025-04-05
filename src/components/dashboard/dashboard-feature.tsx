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
    "4GCmAwhXgANn4t8xxLcLq3uH6aZnd7tCvxjSLnaMEW4hRg1ApYaKY7k5vhfXRbeThw2KsDtdSeLfu6sTae8pqcSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GoP8c8Kcc5c53rPP68NSPkFBVyrE7Shk7GxfpTbbtkkwBxAGWnkUWGD9qKqbo9aeWMbQt6ZayZNpyPPyPWq8wFV",
  "key1": "3ucqa33ZUBWadgEnBGuMPhUmu8kwaKBbnsXdbzAFXnNS1kWaL9KuZfx5SszcMk5VdyNd76k5SgipFGE6c4QgPTcr",
  "key2": "h5Aq28MaaZeNaQDFbfDQy5erf6msdPzetJR6cbebetLF7FT2mq4HPenZi1omdq8Jx48LeXj52k7XnEyDE7s6CZE",
  "key3": "5c1LqcUV5wJymVMiuJU99t8ugj49PwUReyimRHPju9vDU9bWdCv8NKXPp5M7Uz9867AqVYYPNqHCFWkqw2GkGSba",
  "key4": "BVmXAWUfAdCM5GdLamnUBNMSjvs8RYpwLkzxedpRCHNUbjmopHDyzykQkqEfHv8y5Lcw2rCwnBsixDVN8ceFbKn",
  "key5": "CXYmkU2cjwPtP2LZmRNcK58hg5GWZBzzNfkzHSkM7DJwUWoGwhLxsB8zjALbkHL3ZyfStfwU3DKCsMcqSmdfmX6",
  "key6": "YoPfQ8CXVq8FRJQbWqLR2DXxWxxTcmE4eJ4bHnuV5tESJXj6QVmyb6iznXJSaGu5GE2crcDYQhp8Nj2QzLowkzv",
  "key7": "2DYZGtmN2iqiMTXxKMoC73suwCJ1vZ4zgQYZMHSTtMwwZ7AJo7xwE5WqtkWMCZsVBQtQ3SUHTCWWFWgVyVLajYKD",
  "key8": "5nfjSjEQCJL8bAANu4vmfSptLdUX14iR2AAMEmQkXP4fQD1mJdcnUrhetpXVTbNvLkD56NYBd5fRQDo45EeznPk",
  "key9": "3gKd2UqmCzSc32f4H8XxnGDaEzCL7qf9BzTghRKj8Moxpn23juciscdXmtEyV9836Bu6r9DDgf8w1Cq7L38Zktue",
  "key10": "3DomnJKuxsSfpXxSyERWaUzvCYoZVo8XCxHTLJKzgKDVRgaXYV5Cy6TA6S4617653n7mw4omiHpwbVURX8yH7MPm",
  "key11": "4mqNq6aYT6Z9kGCYAXLvKGB4H9yBRKJLvzrXsDdPxb8B3uHofB9aQj2hEvJHj9e3D3G1tV2E8GXNoyHqtUxsWGAg",
  "key12": "5uTdDfi3ScPeZzeEWxwn2xbmeq9TZnWeDJ2fuZEVKZet5nqxnZ45zk9w2pe8MpLWUD7LVTksfsWg5mqgPUWQQr2d",
  "key13": "4KMwRMnwUsWW6Ubeu8SMnpehJQXWnF6ZcPMAzKsHSko8Fur3jEC7F9REuMovz92WNdAAqqNnmGac6Nyke2zfceiB",
  "key14": "2dCMCyxHGZoVEibbEC2YyWiGAR2hPFfBdfm3sBuezLPrR4tLyKobb8RuQ4yhXzwzJkwnk6KT1dcw8jtnk5TrWe3C",
  "key15": "2QSMMosr7RKGnheMriivoHCqTyQDmqT1cdrUh4hdHUUmynEvE4LdcJB2jvpamzZz1bFcETNRLSxPEjxLkqJn66Px",
  "key16": "4jqzscAThrW4E7AJrKrB5xYadk29cG2cGnckH4q3n77dCqZdXYs64JxKPFwhKAMt3eYziopETnZRSUSQLsgNmbzL",
  "key17": "4tra59oboxwWceaPJVaAD8B1BBbKxJh1FwEviYLJXYZ89ww8CQTBggzmp9EA5tryjhH9mFGxYiMm9YupWvQxVoLt",
  "key18": "2Hi59HqmwjR8irYb4Yw8ETNbcv6uGy8TUoE5vwqycrdvh3NDFFmRbVTLHgB3WtVV5fAczkYVCCkbEUd8is2KoFvm",
  "key19": "5kEaL4WjBB716MzCrwCjsoz4jkWxzfb4JcAasD6qcrKpviTqt8HKvt1kfFj4cvKpxdpYAGCNzYbDCb4qya9sptys",
  "key20": "2trTrYDXsK3rAaNULYY53FQ2bqdRM1Gpj9ak4oCS2hZeRvTaLNYNZk5VCrP1QggNGSvs7EwQzkPfcYGwwCf1FSyS",
  "key21": "5HNSdnhKP5A3keSnqTsYMHZXuZJXuXA3LxRouqHAJp7DHcx5wk5eFrCUfGScqSiqoCHnZfb24YQfG76L2qwmfb84",
  "key22": "4Jb2f4XhZTeXoc9JELyExTh1bNFLkjcmVZEGCQCD6oVThXPjHSFgjZFEVtWdsGB5Ps9St38pRGizQR1q7k9QCSf7",
  "key23": "5pUrNjKQN8QHb9dJg5m4zzqeR71dhGd2g4ygLNhNZcCE7PbRAp8qSMbHoGNcr2WgMGfpD2zk8kRQoMetWzjcgFFB",
  "key24": "3HW45zRPgtjrA5N2Q6wwiaUDaaZQqKqnbNTjwhm8zSf9SZgx94k7btufj8VTcwj7w6K7LQ3QGCPCBtmqg1yNtcic",
  "key25": "5pmtLykv7kgXZeV51WVzmPicjHtox9tz6UWNm4f8ZsSCHh5KZADEm5tUh47GML1Ks86sgboZCUgqNeTCnZD9DyFZ",
  "key26": "3MwYdB9YegUmktpdZxzGCjVwPoWXnv6ytQCgY21QpFsfpGEFSW4nLzG3QmiSaTezZBwsq425TtnQF4ZhX5bpyZXq",
  "key27": "35YvsyEGqWJK9MCun6APpexGBdxpzdvheTfMyBxXN6KJShbe1Lju3dztNBzJwFQxG4swaAitBrUjewYWaWFpoQP4",
  "key28": "41NusDhbF3LLPrfDz8CiMHto1knUtRdi547MWicBqBrNz31Ebzvs791KCZZ5VPBZDGCGfBiVNCZp1nV3qzC66uXF",
  "key29": "5wqLDPz9c5Q3sLXRB3mZ8cN8X9kohvvzXceqkdyFNEcaLnBdjbigNHYMu8MzffWRVBp7ieWTSPj8uYfca9QQEZvj",
  "key30": "5PWEr9V1ejCGbTpBVFwNjMHm88HeewKDnb7Ahzp3athpYUD1SvN67ta8enixgy46TzkreQ4gybJGgyguEuzs1UXT",
  "key31": "4eXqdfBVxP1DX8ifAqPrRTqXUQcvycowjzoPWytrAtEpA7Lfm92Ed6YygNPyxyWjQWHoym9ffRQ3GL9m6jaccBVr",
  "key32": "TPj1sjAfghMfMiSWXWXgQqqxdV9EpTy6fdQYWUs6tKEEB7QzQATFkEQcWVQsapMQTBjdPKfL8dgbs3Zf8b8o9Qe",
  "key33": "3SEiZw4isjE2PKGmX9uxwFykDk5swKyVBL53B6QEsftz5t1VmSp3BMWUGEXgpiM8888Uzpq3zLsf43MtYAf4X59V",
  "key34": "4bftwZZrxEAUUhvFaXFVQ98bCmm3kdBWGk5HARDJuGhZnMut1EvvMh6mBtPdBZL3aYaPgeigy191zWroyUxJps8X",
  "key35": "32v4U8BSpiCyBUcqPpEPxoTMc12TzksFGYhhTxsiWS9s6PQSNg1fnX1KuST6CrSTg9pwbcvjhC5sZJpuRjEquzEh",
  "key36": "4qNLxndBQpx7ox5gXGthvUsnkvDKb9TR8okcfb3LkURWsh8ATaArQoQhNAQzTmZSZTzcdXt9KnmxYhqNbVcC6BRF",
  "key37": "5Po4gkkwR2r93ew8AuUTQAYKLEpampabDTaV2WbgxXRJQufTuA3zTdpZQzjZbub65GEkAyp9iMybzfNj8E5tJpLD",
  "key38": "5mKumRjdnXE3ZkiQ8QfmffdZojY22oM8zNJ7kuFLdGqf5RzD46mjCB5GGQ9Adjj8Qh8mazjqs7CdMnfKRH9Q6MYT",
  "key39": "64W23wf4US9Tj2eUcjgA3r4BeAoKeXL3DtSzESb499FvXNwEiaiZovUNRkGvinzpRzCXrc6VQYHug45ZLshzwm7w",
  "key40": "2AFyYoMSN4zWLWxRM7V87kSCSQqBJzLPXvCQD7xX9q3sxNFkqUJZc1TTFh6ZDeCXtuX4YBFiuY98UtL7QFo8UH8b",
  "key41": "5G8dGowWqn1gP4JR4cV9CA9gfFQK9yinUajUHitQxeAkbeNM1jge4yjrykTGuqf1GyfqaAwNnKPD6qRi9hv67tHg",
  "key42": "XtMJ4Zo4Hknmqni1XbBqVXbPzQ8aXKNDJZxmeQm3SoWWGM5534SDPBxL5fxpyjQ1TJj7GXgfhAM2jUXPfo6gPo1",
  "key43": "65PP4DTxQyAW9fT1T1tKQT8pe4vv6832muyfgq1T1yJH2XLvSFfBvErMum3CpDU2q6AHxA9Ye7Qx8q6EKaZdEHvH",
  "key44": "528rdW7DWVZ37QtNH3T9cpLCFQp4XtVi4obiXqdNi41qisLtPUrTuAv9DXxit4nZeqpTsqqGPsp9gjCsBmKVXe3h"
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
