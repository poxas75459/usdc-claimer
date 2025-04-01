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
    "2foUkbfrENU955rgfgkz2HVtXmAWimdh4LPzoPpkJ27FgkgN7xeGScnZ88SXtNPXVc9app4gh5rrbAcnVFZdZCdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNZ5U4aKscmk6jKZ7NVb5KJVkWLev7FSVmnUH7fHz2zpJ6hf8jJy5Gg7WAwwuKEhNn4sg71yKhWVkt5LaxhekU9",
  "key1": "2eBuoXszYxr1XTSxwG26EteWHRUDzqK5ibfLPZvS7PXcuf2yi6k8sGzPBmRtcPMzXNvNbpY58EDxv7PiR9h3myax",
  "key2": "kNGcMtTJtvRdTkamCcBRca9xpzqZSy44YqA3pBV2Z6BXehydJGv5d3wC63EnyNMog9BgzSK1gxGyApeJXNxyZPt",
  "key3": "3UTsKc9YrmX4ggvH19jJVtnc6qyCak11GGmtakcP8VXhECBxu8FKmG7a748pMozotq71jMxxvSd6BvMDnXpvR7o2",
  "key4": "5bV9Y6wLmWLQ7VvkvdDqDB8HZ6H9H5G3mgJSXf34Y1En5iVVhXn4LtQjHKLeaUpr3yMVuxLk7Q6xF1LUSBeLcxk2",
  "key5": "2UWt7xWrnqqxb3NNVnbjWg3zWV5sVjGHDFtHs85zHgtwCEvWh4wtbqLSSFrvFdvJ8yfA139vfURsVbHiA1ndDizw",
  "key6": "2qfnnvoqsajt3mvCo4pQHXU2qidUsUNxpqYZQ1LtZsmnp8Ya56mYZuYKHhnCPdP6QkK5yGWKZ9xfneggbPppuUu5",
  "key7": "4MBKEgfff1rkgC82Sw5jD45sKqCpzmfYP1jnKNse9iLymJqu3Sz29Gxdcu54kCPYnoa7Kc3dY423EBYxJ3urAvix",
  "key8": "ttRuhGthTAmctKHhhfdH5svT4rADeJcWtG5Rg5WCfjKeLYXuAGLMRxbFKymtZseC95Xc3F4Zb8S2EPe5ooZQZXD",
  "key9": "9UFjXtbb8USNENxcy6bmHV4maTUGUsMNmgeQUuGRVVVey5LoNUaroqT7P2mijemENEFaSLYR5DyTNEx2V1fnozU",
  "key10": "3v1q7eNq7xRs4o5X9RrkYtYescFFqoVNoig9WSXkWMKhjMbLYUmREgAaKk8oqLThZTWkU3sLsjVmFgZu9f1BHqaF",
  "key11": "4Hs748Am9sPJsQix9myaSQwVPMa4WFei8piRBeTK4K6gcE92Xdi4YtnfHddUfhuuHChnXWZPFdLMWryQ4jHtECe8",
  "key12": "46Dd1hZqcaSdmurJgcDZsKxQ8J6SQdym5NoGCPzTQLx4Ssg54y2cwAevjybupNvTnPvG85TWWAqcTUTwd1JkEkUp",
  "key13": "5xn1jvEEmACY7KFAauzr8ff7hNR6K2TCALQNg2bcYSP7Q8PtQTLscRifjVNp6rEMqvqV9CVHckZ9qrDV8VWE37gc",
  "key14": "63ky8gqshuKMU2PAAP96xdjLyMZD7ZM4an7EHpLERYdFwGyoY7XRERMexwQzK45vjpzm2RMR9mMZ35QUUnEasqF8",
  "key15": "4rbyV4moU7VzKBCp8mQ4SyQNGch1Q1CFWu77jXdar4T8rjzxUshvXCqHK6yNzWiXkEoBMBJ6kYjFAwfET2rPuv5u",
  "key16": "4s3jZPJGF9WxkpSyb534UPz5Hmt3kvzbt4aeAVtqLokD4drgZygKNeLpUNhN4y5zSEzbhjBxMBVSLxNGdRVCkKPf",
  "key17": "4t56cvvomKVtYBQmvQAKwhJxfd693283K38GTZcngERDKdrX8g1UTR4WAEBYrKYyrkYJF38CRKiJtcff7vYgcNM1",
  "key18": "t9H5BjzFEHtkXFQaM8PnzUULEWaJd5usWvrAsGh8fWm6p9ak2dHdtLFPa33cVt85AEcrjUJkPCF8A7k5XivUesV",
  "key19": "PDAtnnh95EBdPNP8aaoDE4t3etxHE8ofdRxL8Q9DgmcxBfJGDkFTuPZyN2uVFPxcVkjhD1k866kXkXGrL8KURXt",
  "key20": "5fd5gCYS4YgZrTkANoeFsYyZwZecxEB9tEXMa6UJJXHpF63Nkk4iKm8nvarAMBpKpZWML4vSkAwfsBFemQCqziT8",
  "key21": "4Vcp7jNeMaVRmcQTzYNALLjiH9BbSu6Uqm5Wq5os7muwwXvuXxR35BXnFLWBTzqm1opvtX4j5KM7oGLy5FAt4S78",
  "key22": "23M7rCgGsY3T3VdV5WsGocknWfPsW1J2fzPwKk8CVGV4VSncgCmYPJFxppCoQXu2Bpwem4BAvW7Hk2LjUAy6kURg",
  "key23": "59BDHcz3hMEYDDqoLhgxhLHRR3PfjUpZ3PeSzXe5pkgaP3gZeZAKMb5SVKxBfGeXXu9fKxirw6bnpPMLYZskxkoZ",
  "key24": "4WBd4Kt8QFmvFddKX3VWS4ARWt1kx9bi26Hdrtk8DrixCytRq92anJ3J3sXbpAG2tVJdSv5sSbUNVrJgsSnuSC7g",
  "key25": "5C32UUJX2hKB3vnku4ad5zCioUGQ6VWT4Be4DgP8mUJMbqoV8VNhc4LPbXbCoP4HJC5HpQjvsqebNz1jQNym7uXm",
  "key26": "3PzYzoAjtnGshezfNbJTrPRYTho2cjCCBTQip7cFLXpJi3bovABkgVUtHFwMbk7erUN8gapiXh8uRqeKn3LcNpqx",
  "key27": "3wkeWhaQnRBoaV1k82XK2413zvwSusWm6rmnLhq4Zd8FBDhmAvzsjxp6UHRagt31H5KNRDVT97kUVRCdsqmTAcjD",
  "key28": "2k58riRRs4ecGZ5JVwigeJznZMZ6Z3Xyqcb9FP8tVDU6StfdBot6qFBrBmgSj3i3pj1sveYAnuoRrN2YDQ7xoiJw",
  "key29": "5m2L8QBam9jQEGjq4qFHa7dvWmDHXQmzXXWh6oootsbxhWZQuvS8WMKigWWzj3dnpkwVnfHJuAMWBdfK6WFkuYQo",
  "key30": "3p7t4cyAd6Ef6DpNmsiTAenpZV5BiHAK6q9Ur1RHb8hKpjZpzWmUdRSjFvwWaR3qhb2qnnZqo2NFzB2C5qH9N7XZ",
  "key31": "ygF1ATibWE8XAhKpN62gvzkxDAMbfzQ2hKb21W2G4qUKzsRxy33WNBuAqJALdXkNz8fRRC7Rtw7y4Qx46DM2Vxt",
  "key32": "4crYu7ZkgvqVHFrKXVsyyrYVgNPbn2QNwafMd8D77gXWHBdJGeCVqqrLYpq5ov4TmMMWbUqrSqiMUa3c1FPctW7v",
  "key33": "479YF7Gf88h9XsVF77QGFP2Vf2j1FroDFLfT5ieaGUmZo6xtChGSJgPjxw2gxvQhiphH6REXKcapQEaMxsvS1u1y",
  "key34": "3zAawJ1LDJ4cqDVFU8nkjX8Nx9Q57K5G1dtQn98vJjSi15Cdxej3GSsrqBinfNaaCUuaUUkcB6LBB6hgRdX4PqNx",
  "key35": "4AjdFKsGENEWErGBGY78f8sK7zdFCYK3sfenKZxubgLyTyoBgxXCz341Rq143NiVrkAcqjUP6K8M8xhS8JLFYhUP",
  "key36": "5seRGC3BpJqEe3ZFoMufqFPKQFyQhggDGPvrUUVRWkFDjttNZ5DGRjpcf8HJbfqD49sbr2Bvf5mtXC4bRrxmoyrr",
  "key37": "5t4Ank28sCTMsznrfkL3QkzkGmaf8pxBourbRhUtibd1DuuZCPecydeC87Qd9JnC6xn3m78gPWQ3vmvQwsdEBoea",
  "key38": "5rBm6exWpJhpArXwdkkPCcJkNpyNMJazpuBLGaUBvwivaT54HubQGVQhFgTb5hoDj2mQ2xHaA2DWmEmhJugQu2uN",
  "key39": "57HNak8VDFUjRrJar5BUesxxA5QnwG8wPyApfnMX5mdMhbVpomze31Hz9DaDLy2webwtbraL2FMYiWsGsvUBN3vE",
  "key40": "2ESc8Sr8QXmTkAyJtbZCoF4S5TJCxdDr5eEwaVBkCZjNNVxfGJZTbpLSEqz2ZYR57a7Knw8yX3btELeT3CoRqSTg",
  "key41": "cLKXwgk6WfGgSoBtMM5ABcLSBLKo7Nfnj8k5BUncR48nMdTTsbv5aAaGP8BPDVoKvq2BSrRsrrwmXDkp9zsq4sK",
  "key42": "5XfR8YxgNCRngNCDJvzfpb6bTVocwi8NMP7qo7UFmx4YFgfwRVZTVHWrJMkwKJobDZuGgTy6vmQkFzKBZxKS65CV",
  "key43": "2pUDP6dzXMGCkVVuxpPjFa4DVevE4z6nTYqMTiiXFazBWJEA1MULyLJ2r2Gwoc3rFNMdYRGouy9GTsQf8hir9jfE",
  "key44": "1c8GFag7KGdNJkiS3qEb668kLvaiasAfLBakE9iaF8oDpDQmZRFFk7bFZiVnpEpxNoLW791qWicioaUcFFiZcYU",
  "key45": "4BexhtjJDo1bbWZMGGc5cnmsmEhzVLYPGExhDYVzxfmfmAMvgVew9Xc5BPnJUTwa2HUhAfeoUKvRT1HmjrsQByob",
  "key46": "2nC5me9YiRYU7tV1FvmzbSyWJHx3MM3r3TPBi6bjdZJwRNKrzFpqoYfrgBSK7ZWUJU9Ap4KgBbpmfSNVRQGjuKJ",
  "key47": "3VWWdySdEYfGyoeTQ7Rrusqrn86TFE4LpBrbn7PQmYLSWmWKp6Jmd4uQMt71zUv2QwJVoR9vT2rTYyTA35ypRme2",
  "key48": "3njk1kdAoGZAHT78d1jxC8Aude3pA6AbKVB9FastovgeUV4jyFQ4EzKf1MHPYeG6B6aWnwzHxHK6PxRCrnvxK3no",
  "key49": "ZvsY4D1iQbaTWWfBVFg7Fv6a9Gr1Fc1DQF6iBrPSoDp7qQpXgLoB3wy4quXfCD5DLA1QCb7gnXBojj1QNzLHMTc"
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
