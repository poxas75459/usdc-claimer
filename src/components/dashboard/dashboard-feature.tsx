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
    "4cBAeNiENzE6d3AUPezr69ju1N2CTXi9HMLo7V4YrMSAzjuq7XGQMqcrtjgfoR2y8octmN3qC496QZAVRCafjiuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "opguku8QF2F5BG6aeY33DAvi4ePJTRBoawkyj35reMjuxweVgVVzrF1wtdr6eAA7KzXEET9TyK99WdBYXrYgvRc",
  "key1": "2VCL8GqDNjSG76FJnYG57N9j3Z7z5qZpsWJDYH4FhDdHdj35aYv3516mufHdJrix21L4wgdtp6W4J1yoWboQNLoc",
  "key2": "5ZXVUrMoFrGTmuChB1qYM6vjTNd2ncQftW2EvSkrzLnxffFeKGRD8ZR5PAZyN4LRDrynFDeaHiszAWWXyEYE3fmp",
  "key3": "2EApaAbSdi7Ue3YxGwDShnGkgr2dRZs5ieNhrhYBupK56Zdapuj4VLwWf1gGDSF1xvskBEsLxfohvG8ByZpHpTsu",
  "key4": "3zfnTXbZV7z6gTeogNowDuEZ6jbJsfFABwavvXJcztsxRvqj5Jt7RGjeCMmTzwyL6JnaX9WUKDcdUBwKGepMvjYL",
  "key5": "2MBZA2RYCPUWDnwq8a1yS5mqKAZ2qHFAiHGxHxFugt14cp7BRhpNKc4q1Q2upyS7uWE4qQTR1NaDNJFRVzjTV2GE",
  "key6": "ev2FvzH7q1Nj3swPjXtcKwanwsYfm5veM3fqoJc5NS1BHF9XSgqr9wiCnrC2376vpbm4n6KdQCSjVdeidw3eH8u",
  "key7": "398LUBQKt6WuFaLVLyuVUWNGbNFidYQTHzSL9TwgszMg69tRXCnQZRAhrMX24K9sMfYh9HowFAicw6uZdeozi8bf",
  "key8": "5DjTjdLGd9iRczi99sR9mQMKr9vueVxDdCgVaLoubwqM1QpUFgJCYPwNhRoeaY88pN9icvVeQmqeFPbZZAoK2SbW",
  "key9": "3Uqrd3wY2b7Z218BmeHTRzcdui4hor1pVU4gT4vFFEPBoTzqdDegMZF54xhJJqdxQx7sbnhXtpaN19i9G5CqkATe",
  "key10": "4KqLeAPPphc5JyKq5Zam7VB9zg5CZUgA63dyBW5qRjb6oFoQUtXfnfYxNGffjk9SZzKyqWpoD71zUhwmzEeNT4mA",
  "key11": "2z9JWVrM198rLoPBgYvYXXjFLgmRx49zcdCEbdv4H8jTxHFXFtNHDJrGsGmz9Si4kRumueLeuJ8Z6ZoUJaRs7ikT",
  "key12": "39jznFXzyATu9qbPMTYnBMtGCAz3f2zyumX1w839kCJ7C46aaiCEEchMP6QmndNNz4magHPNzvVfdECEbxc3nnLm",
  "key13": "3TCAQB6UzkSRvtEU9VYvEU18aJgbuBCinqiJr6NN2pA63CvcSQA8yDibK7p3LAfX1u997dD5A4b58EtDsMFyVtTh",
  "key14": "3XRXzp9pyM3G4UtoMjtQetFrZ41A4cbqRXPeaNVZscY2jsZNAYcS6UuAGPv5ECnPp3YLWrpsMTeNNmKmZV5HsmaM",
  "key15": "355wTs64MWx8AmPh35uteSNqiUX6m3fCP8fGK2qxpsi9jJTHhdwUwvDrZtLW6KrggNjNaFHnhY8xxqr2U1c2uaGf",
  "key16": "4hr3LqKmKH2oax8xmcsrz3CVCNJVTQcnXavgGGGpeDrubkfpVuJe1SiitSFpZXmVnsdvivhq3uJ4Atqx7fX5B8A1",
  "key17": "2MyHuwupn3FokoA714nQJC7tv2QAf6orhN4yPu7yXEDyKzA4rmidPF99Ge1zreKojvddq4eEAeTzo5QyNpujBMRq",
  "key18": "5Kf1HjbU29R9zLPbnXAsysYHFgguAmedhtcDzmr6ghGz6dJvJG86RLByQNQZDxzLWPKrRrVR9hyY759yNj8Yf38q",
  "key19": "4PUGat9HnmN7eHjNF5qf7DSMYjSuRnr5C65hy9FfAmXGmQDHAJgUcx72ovxmyaENTUWE6t7FmC6suFvD15GjZkWd",
  "key20": "7tzYFFNDuvxcPxEPmepbE8wtxGezigngYv5TtuTL3xRpkf158ganNijjjqXcesVL1hLXqv4UgSqjjAAjrh6B1yz",
  "key21": "5j9GGqjRxH6tzDpHQ8r1ZVqPujhZYDa9ABaBT3j5nzXHBGBqi6NhLjfXx3BtWrMqC1V5mYcPLzgqDWgQHYzoY1fw",
  "key22": "3DrjhZy82hBazNKq2xus6wkp1sPTVH9DrksLqs3AzB7212RJ1Hzvg6qCpcCScFft6SaeSk8vT2NjPmQ19iY21fYk",
  "key23": "bTxMmquq47wDko1Q9VCvXnw1hNF7uHSp6AYRiwwf5GYqwdmWicwTqtcMgHtrviBEReNsE7w29sJTQHu5S9HzBaL",
  "key24": "3XvMdxWUMKCet7ohtCpozL7YLEVpV7M5LoLRaLz3WQRPBjsoBQ6ftjrupCc3qZmjA1R6qkKs7cPWaLq5XUsqY65T",
  "key25": "MhgQLxmwPGqj2QaPqMjnwf4nXrca9U3YNwM62dTMfid3yv3D4TPJMDbFjWKpBS6RfqQPKcg5WtxMpDR7vN6heh2",
  "key26": "56VnQa7UpU15bLD2Fr5era612DNxMFgn8XxqA51TzgzssySBEEYQVzuAgZy7hAeNjCT4xdT65hZFinfEDkwekw1L",
  "key27": "5UnAZATnqHw9mX8avm9gbW4zKdawtaVnHqVMpRJBhYdNqMgKMGuz9WVLX7F9j4YnnHffpN5DzwX56vCfxDHXbEaC",
  "key28": "3uxArv8HfGG7ECtxsNWB9kkYceYtMqE1XEGZqtDrLLzcLRrYrmJriheCo3yaH8iT2FTG9JvgotB7utcGbuKoEyhQ",
  "key29": "4E2VFsGEQ2RgjzB1es2Qo4HrMPCdZJ6JxjBgzq4zNnPZFqo2VAReHA6YbMN9fk92wAgQQtPzaLEbXUuTtMt4mGvQ",
  "key30": "3sWREDLZKFiT57gUYHQfKpbESfCfE7vE3q79HjdFuCo9NFEMY5mnpLERq4LyXWAGFv99Aqboxj1q8gvbi8NCP5K8"
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
