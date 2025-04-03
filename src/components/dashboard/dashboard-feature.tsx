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
    "3KB3mwVtcd5u1TWCspyQdzgV8r2GpwfwGNmqkkDC3E4n7EdKCY9hLapuawrrbuH9wMuAWHsPZPYVTnFfdWE3bedv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bptVfqbHt6tcuSqYBBQJn7boVS2qskhoWUZyRfQvxXdshXChknU9XQvaq8wDhCYZXdDgW6X8ik61fzesbcgELod",
  "key1": "2uHLYXAPKWTrqmj2hkZLDjh1TwiP73fsN5biuerwrG5DS9JV16JVaW3ZoVyqmGJvFgUNDKanPP9xkDbc6BrjYwW3",
  "key2": "4za4SZ4Q9fKHXF7vt4J6jP4U6CXDEvoVSAfZgggQG79m7m4GWZgq4c4kzXpcfGa7xgVuthThacr658HPB7WTpsSL",
  "key3": "3CyRvc1XSMDefDr5fMAkxzsEKm9yZ9PysfQascTULJNVJYgjWQZgpbLVyx6LHSTb5EuhwNG6oot5dsDSqsA4k5Zc",
  "key4": "2NTJmPgr8jahf4kw3FCs6rPqTKyLjh12B6sqLrC3he6uH4S897SRaCfb2GcvcTSVXmnaik5gSdWFNWvKUySH7MTY",
  "key5": "5ccB2XdE23uBor3sWm3nzFtrhT158zQ1t125u1tHiB9TXQsQUVi5h6pJUzujcpqeaZsNNxCapycpSEtH2Bm6h28h",
  "key6": "2oBpFBYHqZTunZGC5y3Dn6ojxnNwp2V4pjyqMsgQeKixJo6q87kDeKEsBmURBSKNAw2ADSNuibdTM9j66EQxdeSE",
  "key7": "5pTg6LRns7Z64JZ1JdK7ZGmZhhiN1Lxm78dt4Umbg4pU2RAgVJ9prYoGepBUjkQksice2kLYa4bJhrJ2Pn6v7SmP",
  "key8": "3wqpeiFeu3qhqry8dhXmsFFaTbJcxkEEj6pmMf6wd2LKcXEaX626kvX9fUfoStrrqY9FeftEQzsWPDoP93N4tNAD",
  "key9": "2fvzc5F9amgu8WB4Tm1rDBQeHMA5zB4GdcxVU68gzax6aXGAjg88ZJBsWs7pioE7HaBBZ5A3dfw5YrEWiZRWQXdR",
  "key10": "3J9h3Vb8TJzENXvqaPzWj7ydw74wigQoQnGyCSQo3aHdopQ2Qb3RD9bsi2R3mXBN6DT5FuTMSWgyqRC5Xt3mL3b2",
  "key11": "4SG8jd2RL6t9z666EYH3asRjc2LLWQVNDnVFGVZxaQUqUTFXZodxKr68aUmN3mUYCbEwqkjWA5j7MSznx4RLwTLj",
  "key12": "4TfdhHaViTUAbzdZDknJZVbnwDyx3YLmkmxYRK3nyHEBsY5zJWdURyDSMnVV8LnbohhrfyBBmfNUt7hgu17oCDhq",
  "key13": "3hA1Jj1Z34RH3T53r6E77Qf7uR2xpWtRBv6fz6rEKKnsjm5saivyrEJmkvFuoVWUifhu72ApczqGWM6wzBNzh71h",
  "key14": "5CkwdtKkTMS1Y59hvTfrNcuYsVPKigaKw5SaHPRD1kX4wseAoyyqTPy9EKnffr11pjbbfSbYSsYSxBMR8UN1ySUp",
  "key15": "9Wq3g6QJhmhmQK2rbfYa97hS4Xrkxtmf35EUxhc6YukQ2hLPaLvr274gVypGUKySmzhScomk9kP5k5CLGdUgAw2",
  "key16": "5Ep9UXPwv4sikKx2j6hHHVBpe6PSC8x8jd29XtCoaQNuPaZgVcqy6dYhWd3K4jMmjBLsaNPxeRv1apiswaAxzpJm",
  "key17": "3oftNj3AQDQXQ6AcPuHbEsSYtGGMzELmr65cSyt8ov4XybyHK9BKNKdmFgGJVkrgM8PUt52xQEpKafXztYSNPbRS",
  "key18": "5gPXUsoBQh3Npar6nDmwX7m98mCW6MbmXqoEFysN2DDkBYz2ceXebq8X8xeVZjm7ce6nFVoSisVSHJwuoxJp82Fa",
  "key19": "2aTfPUSrxLXSXLLPkSdVodyLgqyj7PseQwur1WGYjNrTc54ZM9btvZrZN2kwrcizu9yX4bpBhpH39HRjSq8rAtCB",
  "key20": "31rZWMWLcXs8msqfK3HFuMeciXz7MLEEdGPDYLWABAJVv7k28EzdMDGTb6YKCKVCMFPU9E92EHqCaZZMCeR6ich9",
  "key21": "4q4tG2Dts6oLtHxgPfd2sST11wfkvoEMzgG6jidx7Ch9hQxeGgSQ5F9WXtykFyKsm6bmeu55k1RqZNt1uWg3qcdB",
  "key22": "5iuLJqCqgHJukNnNoL3tJAgvqTP5KFWxx8uABip9xAsRYCyA72VrE1W9TRyioHT7dXi3Yj7fBuidmJWiCvwxxoYk",
  "key23": "4TMc1rX2xwcFBSoundHjMASfM33rMVbrBrV37uEheo2RCYLV1mWTnLf9yVVVWVn9B4x9K8Ju5UsteLRPbfhnoTAT",
  "key24": "2K492iwaucArQtB576A4VZLp5CswTmsD8DQywZZ8XwieFVUCJjAk9NcxMnHZ9QuA6CUnE2h8TYQ68ee3p6btFpQK",
  "key25": "3MY7HHRYEjPWYirk7eMEE72Z2KB6ZPT1kbXJi4FVH9K6XdJgSFmWNMDYUkYecNsQnuzxprbf6ws1yTqbUdc4wjqs",
  "key26": "5gDKgCnmuu4rBVCwKMPLhc9oLkEQdimdFm6hKNYBUVPt6qYgdjJgE7D1rnQasv7AQKKm8sRnbGBLNHzHNxLnr5X1",
  "key27": "8Vm7cR54GP5evqPka9kHr5xe5QKs7eAHueNmxbgk88bhVinmrhE2YjB91Br3PBHcjV2YRkz56Ah8JXbr2H7Tb6i",
  "key28": "2YwyNJSTkEn8K6GNn4RX188JHkAZqFMzZ7KiJi2jM6HmWDLqpYK81YkieB2ZM3Z4L4fEFhkMjxboDF9nEp9Dkeqf",
  "key29": "3PXb1xPddnxZakY7LRZbWS62CwoJaimpn9iXjcJeqGQyEwb92i2NYkhWfPgrrX5AmP8PJaoohNJBs6gs91bxjuMX",
  "key30": "2CwBXdb67gjpwQDu7nzykguTer8DY6hifCH2FdiyKCWV9y7wuu5NinxZjkZevzWVsqBqKxTY9SZvj2i7UF4FkaTn",
  "key31": "txhAaRvvhSJoVQMHncrPHYAAxRD58aU41yEVCHqKTEvvaiNPzs4Jj62TmwoCZN4hCecHVFSThQcAbAUtYaJhjX4",
  "key32": "3PKki3vqApjKfcykPfXxeHw2YiTmQd7SW4eSwpGweHhLFhoGkCqNM6hFLBouokkJwneB8exAsVrXd8awrsCRVVWa"
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
