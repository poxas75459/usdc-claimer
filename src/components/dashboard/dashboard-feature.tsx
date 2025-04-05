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
    "3P7fnd9tavrXcKnA9fEbJeztbqofFtqHAFToLCeoUoVtRzrtex1uf7nqbcSPaBsnSvZnXARzQJEK2YPC2uSpFPGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28NiKzXtGAB442xSQDkjuwy8BQLs2DYvWcJy6TaLdHb1uUjsrp629CoXjqfajCeHXRGCgp4p5NBkHwoTGMs6p2E5",
  "key1": "3BBn8J2kpkDCpCDubgUfhyFQH19RvXGnrHvzY3zaBnuscse3RdWCRoj8SZ5WfAqQYgkh5kx5P4AChRC6iAQ5J6qN",
  "key2": "2qGPGj76tsxiZoVTS3S8WdACJcGJGCHagRfAYBFxqfzbomDPccJ7yfpqRgU17hbcLXjA7nX1eKUpw1bqkJRaLoQu",
  "key3": "5BdW8mYnrfNkEmh5MoB6tQG7mzyXLAWN22ZPHX7TdWQU7Fxy8jub1eBk6doS8BGyznBydcyQYwHmGH5VMLXc9ADT",
  "key4": "61sqrYp4ERVU1yBnRJ3i3KewMkagdS6VuEqjPtUs5cByDDJa6SDh9XWm7RYW2G2qvNcJXbMaePDUaWLhDu47CK9j",
  "key5": "3ZphsMCvRHtMSApm3qRbnPLyBFnDKA4CwMXT9ixW3GADKRazczFVW6EnmShGjMWM3spCSiN5CJT1jAr4ycqTbW8c",
  "key6": "4CWnXHNhBgaiUZhKaqtBi2X1y1LMGNtkzav4CHLxddZyvdwxYbmAduWLo31gME2vvTRqAHg8B1GsdRWjy2PJBAke",
  "key7": "4FPxfcQwKn5pqYjkPhRNWrhRapDKRxuaKgQst7h56BeRreFmBVsPnxwQ2sKvqaPfEEs4Ex4SAJC5tgrqhXGzKCAM",
  "key8": "4HDjo3utDaYuA8n5N3LBPvd62Jbx6AcG19ZdMoeFYtHjF5rVrKN9ipbWmKVbdDZfWojpoEncp4JNvH5wYY3Mh8eU",
  "key9": "5fMUynnYK1VWLzxoACpibUDVc1NEaBAbhRNug4zc2Aq7smGWbJHTmmHyqFiV55BUvYLBCB9Rk8C6LEntjpTk3PTf",
  "key10": "2gBscgs1aqFH2pSemrrA5byroWijnv4sVHdAQeXYHYxwnw3TSWvRojnveMMS823fp77pvgwzomTMGk8g1LRAdL2Q",
  "key11": "Ei283eDrjHZF5zgbzRFQrPMn2ujrWtq8hykZJxQa95roPxjdM4t3C9XFo3ZpHQHhtYETNsJggXwLuKCR2bv7SVt",
  "key12": "4sTxaC4CWXJ4dYj9LpuMaK4gtZjjm5gmmhnt7qFogohnfJ3xjwfCxLH27uBR8MS3BWoxyFWbB96VxMYkNYpi57nm",
  "key13": "381UJ26AtfUP8ThBnDGSnoYvqyyQNjhgXZM9kLoVNJAGM5aNKeiiXGmK7we48j7X1paprc1YR3chYmukWSTbAhGY",
  "key14": "2wXAZ3KnkWMiJttZewHHG6NXuFrL567Ty26mBFmqgkYTaZokxMbncWpwNuXmPcohmHx21seBR9rqSiaaysoAvZq9",
  "key15": "5nsnwCrBeNBMTuQj2aQ8W8M4p2zntYmMY8cNvH14iFmNwrqYo1s7fKVTgDuNycckvZgSXMA3f7xibwAkPeu7ZKYF",
  "key16": "4U5GpSvkTvP9JyT2gTvppjWb5jhcWAtnzkF7XLBH2zNKwTW6hpjhaNUzDmMvxLwJSFo5zSRXUW4M4TjZbYbBUFri",
  "key17": "wnyyDJxY8dc82NxrUiUnvMqaR8wWzn8rapUhzd8fprz387SDvoCUYWg5gjwCknKJ7eSx3kHXHgQ4MbtG8gBgWLY",
  "key18": "49bQ6NbEHir7QZb5ZNbRPNVhXRYoVQaCUDDkUWz9wAqgZ9B4uToMBH3hAFXvWTAunLE6n9AFQDemhqHhjPU6ckcA",
  "key19": "jvMEwaWeEdYkY2s5gYNH8mJmv33RvYiu2ge4Br5mavXpai4A8mKmKsFZorLLTfTySFrzYaWfhBbuLXEmHaVfaJQ",
  "key20": "63nZxze5HddP2jLGYn5TWqoMY5SfvVS3mxVR1Vyb1gqtmfQ6zuGkxefF2k22DQfokxA1RFz1cT3FfcQmoPjLkqdf",
  "key21": "2PKLUP8QdKV7TxgYC9wgu2PxeQxZFqpR52PKpdxDTzCyoKrexP258LPQD7tys4Ug2XwChyezAoojBYnEFdhKJEDB",
  "key22": "4ntAAFeexcBH8k8299rrrzYZqWyFBjzzbczmLMpEkLwFpM8u9jw713eJ2CW5XiuDdWePV21rX3w4xaSTUNya1R1Y",
  "key23": "Bs81uTjStVpeSrQdKeFkCmYKfHazBquv5c1kspYmKcFPXV3RWCLvF7t7YT25eHLTJLMA2g6sPKRxrvunLecRvUo",
  "key24": "5vUDFMPckx2GVN15e3yNtLxVTvLH9c8MYWTcQeMKcRReDTS9gzJa3bxaxwBYqHRKhs4VgxaCG5fty2D6QvEVyrNM",
  "key25": "2m3W1CWGPVUN4oJbzcv8nVprxooUGvEKzXdX98WB29pmJ34qwo4SbXbzPzdvrbYfwwaM4n57fYdKKcK6BsG1UBLX",
  "key26": "5oXH7RuqrJMkpkmNstAYkZmpFz2wf7AH7oqV8a3FhEabDV7iQ5gxDwo5deUyA1jXadEnGbUsvcSWMGSCWHrSd5sT",
  "key27": "5yQW3fwjX3eFmdt4VeGWxUCd6m59yzLxDnmktcH6Fz1yfLQftzwzdVGKevdgawJz9vv5r1MJiBKTyx5xvZUGfPB3",
  "key28": "qk9FGxYx56tQhUmyKCQnS22dzn9iW5NEvFw2ZttsuWYp39KmMaimyQq93Cv65FjCKB7YfxDif1Gd6dtsD1UNYEe",
  "key29": "3PvTVfZKC3GF7QXRtcFjvGiRxK3LV37HxHNLMvFyikHtjKsptQisydz1HtBKuz5iRcWogunzWFuqbDZq4aHKMkAy",
  "key30": "5YyZUH2EET9Z448EQeYQXc5tYMNGdtsq2wMx3kn3XyBVFbBSwi9mP7tHNynt26qPRJiD25N569SJScbvjiVb1YEQ",
  "key31": "tkcoAhPk5N7waLwASDDcBKCv6nwhLBv4Ekh59ifJdz4fxqEbGAw8eo8NdAs7F6EYuCihVc7USxD8CR7ftsdwxW8",
  "key32": "5kLaVUmWYMBzQcPGxf19QQx3grsVvQvVbuUySZbYP2i4zpBhPLpRPRp5HQW2DeGuQZoTkXPZrAPYKvryAwjLfP8J",
  "key33": "3SrJCC1XPjpfzpLJQRuvPphM1FQiHtKCq16JZDGTa6WKqsErpHMhfAeshxvnQrVApfNF5MKCSrut9RbGWsGcDhUk",
  "key34": "44z4UqbmHdyHtQW6wT1m7mPpv1ZQ4oqnPTj82w2BshfUDx8H3Drr6v17AWpzknr9drmL1heySFcwj4e3dWFHvFVr",
  "key35": "vFUtC3ZLaZdtNGnXW9yUUcn8FJXbA9rBmS24cNAXSLVruWyvJsgAuFJycFynmZeTsn5uwjhAczCX7DF4LczLdsz",
  "key36": "biZgr1xmphHaHV5jvoMW36NVC46EoQTSXqUZS2KFXLJ31kdAxaQE47kAYGFzNSVSPiBzYvm5nQLQ4TQE4fM6UGZ",
  "key37": "4BKeSfcGjHcvEHH3HK4tXaQWQSWutHHGfKxZKatJkG5byK5FTbpiZzgHEFCJsRxZXYzAyZd2AFGWJhyyFj6TpPen"
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
