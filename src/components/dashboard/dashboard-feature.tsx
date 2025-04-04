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
    "56PMa5JEuybtK5t2C9Y5EmdKxckVCwzLBagZ1fbgQJvvp9jzGws2HSzAsYSxY3Kgt3APjY3uw659zFvEDkvaQcvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yx4yn2YZbyzM42JLpnfLAi6W672un3hNJNJdarRBVEGALFirJcMzvwviXe7kEBMeLN6Fjq2gx2HYQgpSda9qwWc",
  "key1": "4Ko8nTEyeTq9Zknq2AWSnNrXDEDRcG1S2AMEqkGWUaDJnMjUyHz5Lrv5PnBTR1GL9BkGdigffdRjyxHfeCUfqAJG",
  "key2": "3Rx4LCfKcRyjJJfheNcgBCAzWw2fpQdDLJSByHSNgan9SuABE9yrsm62MAWW9fTYGCSpnQo3wS3T4pyjrtPzu5He",
  "key3": "wM72PgP6w4nNj5XodsPgGJYxWLjoMN3vJr8pp7EKonQ5zXbqzQQDBC9nRaTeK7SsorPMPzXbCqyA9JVrMK895PR",
  "key4": "2AQECtcnEWHCNZ5aLVJTk4qKaWoDYhsYp5qaFcq5Tgn69n2tNiFEGYTkHFCpaNyAvb5wKhRvTEJM1ZK3PT3kHRKY",
  "key5": "22JuSUz1xgeZ43g5b8ESDhmdUXqxFtYr7HJwt1d6fBTAwP2zT3rkNPkJQYgAG58Sh86AnFeugbswCKC1STp2RHAE",
  "key6": "2D6u3uBiUGAuLpnPsv5o8F8eYui8piejuPCweUFBSMt3Vnb7T5ELD1cBxmuYs7AbzthGLUUDhMfdkNkzM9XcZoVj",
  "key7": "3xHoPNQyKiWRWeimQMHi158UDsNYx5HWW9iyJJUywrrHbLXGaiXjtc7UR6MMkCCgibh3xSwS7g3HQgLQydx9QLGs",
  "key8": "rNMXQWev9bMK3Sicebt72raDS7fcPL1ssUazERQgSNXwiwSkj21TqhSwui1dFV87pknJ1F7DM7UhmqoTWmSjBav",
  "key9": "494bTyV13DcHZzDsRbEdTKxJ5CksjrNooqSw7PoMzdcwLkS42zCZkye8VeTzJ3ZCEo74DDiK9RgNDnZHfbMQuypF",
  "key10": "4mmGQm1X8BriUg5DXL6Q64FF1pFdaPGCiqELAUua4hVx1qxyDbTWh8nHi49JVthvDFziWmFgbYPD9Dq7x6d5RxTP",
  "key11": "5wWqtr71vkbwnvXN5413BRkeEo9vGN7sWBDZUCwRSYPwug7DathN9KA4raCx8NrWJQyfqE9zRkB7YyDJN9KRZ9yE",
  "key12": "3uzb1CCpBx1mmSnD1Q6RDVbTwZyRyt2iFEC7fSUYahkWKZxP8G2pVcHJNmRS9DwWXh1cNqiV9WqfRctdNMaiWJCv",
  "key13": "3bmzYejKvSjuN47TXDdBky75A2ci4XJGRkTRC4b771o1BfGnv6zs2CQS4m4zgawigYhaANFYKVuDMr8LQ4CGwj1w",
  "key14": "1b5b2QLHQDdZk3q2pffBeZJudnSU6Ysg83uSVyhR72bWP7YPqXBVkyae8xRadEeCvFA9zPdDs4uvCXpDPGmR5rZ",
  "key15": "4nFsemXei1a4nxHgNWuQ2Si69me38o9x3suDh8QfHBbowq4nVUFuwvV1KSoZP7ZLVD2STePgTDWZaiNxix44o3gc",
  "key16": "45PnVp2fHfERfZ5UtLqdkSMqFFmYtat55TRuzPswuM4PySpkZNfwwYEXRJeVn9iR814saaF8KDDPSYg6P4GSqVbW",
  "key17": "4mzWgiyxTutKj1sF9rxcptCk1ucsa9Do5gJRNEr8jP1de591dpd4qmrJUuHQULwBJkqYue3nLLtWDwkbq7sWa5K",
  "key18": "5DG1aHoQkS5sqG69txKeoxFim8tbKWL7D5v3k2TvBvy356Yi8h8PGURmDj41pAvSfmDRgJEnVxtVv5Ak5vpMTZHG",
  "key19": "5h6y5f9je2J6Q9hG3nJxLHN3JjadiixhnSTaVYB1zi2qqM8Puztg4K9FsUcnDXDixanVTBs8c49pB7kiJBxpzH8G",
  "key20": "aJ5pHxqeEzBxVWYUjyRgkgNnB5NoUkrVCFH5GR2SRHkMKgdimfp9HyyAQGA1LRrTEEMboLSmQDsGsS4uG6gnw31",
  "key21": "4XBQLUJGmdCqCQBwjTckgM69GJQkfJa4zZmgu58BE4J64YRVDKyGUpa14xXmToUAXZzvPEDR7bX4EDRKcdMzaj5W",
  "key22": "21EJcdD4RQ23G8nTUFuS1q7XwwuyBvAESngXDZ5iNXJ7wDGgZwAnB9ebnETe5oSxUNUA3NSYm1JAY6Xzk2rXdYdv",
  "key23": "4zPLrq8NabBu7GhPGugZHDNsws8baurXQ8jZAuroBjLZmT7YH8tXKqx7WRdB4oN1T7KN6WCTJqGyYReUTMVn7ikt",
  "key24": "r3wW4G8HcVGaCJGzgrtSg5XAxTBW39PePZa2qYRntZih5WABNhXMKmdCS3zrbYYM4pxJrTFhT28XFCVmKd3Ef8o",
  "key25": "4xM3ZSvMRcaJxYA3kxJWMFCaoqZB2w7LfLJbBTvfb7Wf4osg7WDodD8zMGATPbmXsrofXpCYxC4ec6wynx73CFhQ",
  "key26": "W2JEUoRYeL5pLH1AhmfkJ4DN7Uwgw69dkCxfGDQEJyhXsGVN1uoVoxCRwpsScGjzhQnN3epaijkiHjjEarZ3JRB",
  "key27": "3UQNmJLzws4EeSpbD8Eht4d575fhbHebyn5UsnmfafY6Yw6ZsErb28ZhryrjJwHbWoTjMs5LEkcSu5xwtxDi8QaM",
  "key28": "2v2oQQRKWJQcP1WqJ4hMq5NPtBm4cfFng8c39mJtZjA38HvFxPTY71rdeDtuB6MFH8XrcbxDaAB2mfwc5JkiLtgn",
  "key29": "3AJfFcXAYQaQc7vyao6rWLMFxwWQQiAudV3vai5vXCB5DYx9LsE5knAtc699bZNiECwktmadaeCm6aXNPsANdvBy",
  "key30": "5MzbaukCkoHwseQbKVeBhnVAgaaqqDh7uP4VFR8B4WVGfFJRMH3Aqk5tw7xZEJW2TqFKCeJcANt1BoQUCoZZzj8j",
  "key31": "43QjzDCwm1Jb3AMm9ceJQ1Amu55T3upttG7j6VTKQTJnH3Ddd88Nt5VvUFfcxZDF22UPDdswgcQ6mkx9GXwim7eF",
  "key32": "5MybmRZXegA3KrLh19eHtBeQRVgQJjdAPJMGRkBaTrNQBURB9VA37mTHtpXhKi9APGqsQFygzkyz1a3EapfQpXSf",
  "key33": "5yYw3bLRwkQiz6S2TxgX6RepGNp66jko6pFckzCTV9oDPpk5dpYFAS9zPdx54WHBJhFYAioiq2a56xf99RgRbES3",
  "key34": "4gLqFMFVbZXzXCpWYTRK9xRP9eL6CyE9tTNyajhoLveEUYrWd7L8RDRN1AYihfdzQDC6QaB63xoWb5yDEj49DwaB",
  "key35": "5CgExbcifKWi33Z4JzyqPs27G2tBsvJ3WpcBM3NnSfgZSAFcqgD44WWduFW4bXdpenoC7u98fqp72HWRGKX7sXNh"
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
