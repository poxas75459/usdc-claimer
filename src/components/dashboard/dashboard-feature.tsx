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
    "AQiWQiFndfupphbTuKAZHfcwVDu6ZtcTcBkTKwaGDTa9vCCsvyDiibH7iPHvBqYN8rWQAbCo6HH7yf334WmusGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RqrvpF8ktZ2PMosd4XvSArFHrwM8iTA5P7GTnhAsyHBcUWC7J4A7uocmF2aGpWN8vSPcJTBmBP9KN4z8uQs57Le",
  "key1": "2yCvsG49hV5dGbjgedKt7GGoDtYQQafrmPQXncqzDUrhdNcTU4HPR6k3XtnQchjuXWtETLkrWeF8PHJmo9y7Ugme",
  "key2": "1Art8YDiW8VD1KDJcfZnanCq4KELVf7FzbTFuQoxFsePKy4xiy8kS2dGj1fj3yLaV4KXAQFWdC6qtgNgMMrCxDn",
  "key3": "3kFsCYxCwq7xgJQ22kMxhVxuaNsxKztzqwAEifbPwznJtGGSBW1iutUd9SHYhwydJEUcUHiMPc2mW7y8UYvCNmPY",
  "key4": "2BZQMRnA8nPVpfbAXEzpYkvjWPrNsg1gPWJMjTtUvrYA7ExA4TnahPAmE8Jfx5URDRbnFJzfifdvLFjkN3Do9ftU",
  "key5": "48BhWFeAWCpUTao7vUsXUN7vz6kTVJeQu4NvEfEq2DHqVgqBQRisVXys9X1Fsp2eW1jZeupaYLvLuuUy5tpfYGzi",
  "key6": "54MJgYCseVRAiDziRKC7Kibj2hF7tCTHNecrMSnFLDhPPhbnhH34nFCPWKELgSu2WShy928wc9AF3j4VbRuB9T67",
  "key7": "Bvmyvk6XyhEX8s2UVTxA8MNvcfjCCtHK1SQP7xwxSMRHiHPgwmF1jHHqZEwnm3VAiwJ9NY2sfSvJEXvo3qgGJmx",
  "key8": "RhzziJsCYVXLpgYGcjK2QkUym5Y6AC4KxffwkrhH1F2cEiu1DHsCcWwZoSfP2CjwHkL5FrAZNVmReAw5m874X5N",
  "key9": "38igKBsprZYX6WLd7GvWkjyuJ1VWb9iKhKExE8eTs1N9e26ZuLjAYboeaZNWUW3TjUHXoyhwryvx9zE67sbYLHqg",
  "key10": "wDWebmkMQ4MDYyFbHXj3bAePUPmdpB7Wo8ayErqjAuKvbieeqeHAJZgnL3PTTmoAysjgbzcRhHe8ZLyiyoSvEdw",
  "key11": "3fPWLDeB196UparMKQ7DB5Vm7sMrkVynLk4F47q9ho9msi2pHz3A8znnVZJV39ZikkWJNqktSW5sBvWetgBiazq6",
  "key12": "33FP8i72G2ec8wQRs82pm7fWDU6xfC1nkrcr9C9fxvhuoYyBrJG15aBowiu6QShDuLaf1AtiE1zQtxEGkXkR61eb",
  "key13": "3xRCL54A4n5u5TY6WP12rKCKB1m5BnyWMXoYJeo7Ws8NxAojBZKHf8jpdnsboXB92M4jqJ4UiLVtKEmVobRaWptD",
  "key14": "3JRQzcqW1RDDt3yodAdE9bppbU5U1aB5wkJJvHFnP3qerD1wwuKkRjByWc2rMMU81NRrSd8GdP7on8eo7oUYYiDi",
  "key15": "54AXzt2YxeYPS9aUDYf8Q8kf65DD9emCu11BDfX4ApMTThh6Dd7hWmf59oaRATWdTFUytQRAGxwYczeZQCktyVqR",
  "key16": "5GBJwpGJqcoSMWKC6V8Kd5ZtRUZ7143Lqkc9FiioA6i1vDKdecMSG8ucDiLKaeyiZvoRLn2zyV6SwDnNfTDFCuC6",
  "key17": "5U6F7YMYd7CNTqZdAU5XLUoGbvYGu6X7EvGHszML88DydZVpsb6s7heZdpxpeT8HAcu9HASc5ohpCCrTDn7Hfhqx",
  "key18": "4PttavvGcTWo8fTmcyoRgjwpGEBcjXrSkV3cNHUZJPpwJZdJXaDzubMto4d2vTDJKCxRwK7mkQovvLaLUdFYibZG",
  "key19": "372ApenPV5s3xbarJLqS7C3dtW2GJHuh2CSMHHLfaeEZ87UQwzv1b6znPDZS8pF9vhrJpJg1cfWmhZ1Yusq5ypsv",
  "key20": "49aN8kses1tJ7bNRPwrdVHcZSYSzcMWbJN44uvGuKAqgukBqpDcHLPcagoMSA6XhX1iwBpFf4cLix87H64yBHg6R",
  "key21": "2AXXzMVqpqQzFivYLX1EKMgoWToqREGdEQJ6cNnJB33mLqNBTpYyY5FrFdvxDRcckxrQR4tni1AzsPGS74uCPq9d",
  "key22": "4FomP9DphNiSEJHVbCa55ZyBVmbWCMD69gYTbgeHFPo6zosw8mQgcqTjcSzf8V2yUnX8busMZUcHhF7riKrfLA7g",
  "key23": "2ReZAhuyAARY3vPZQr4vr5GdmLYFrcWEzATfPnBMRqRUC26QywxpT7kcMtQYrn2hfAudV5b2Styppdr8nTLxoXHz",
  "key24": "4NeFqSpDucmwXtypL71dRkSMbewokvCoYGRVV6ce6nux3y2FarnkrL4P1s7AF3u2QhUcokkwBHsptwy4BPbACRMQ",
  "key25": "5aXbP6yxL5DGMUJ4D2CjDeSzBEq8kJY7i78q9GQCJfkUae4fV1ZHZbwuxwmANu3DzxiuhUu83LMvvieCyAztLsLN",
  "key26": "2Nfnksr9Q31BDA4mp53BW6Wf3nmJdxKzdmy1EKxuJCZNCDZMxHLYGgzM68EHsFA1gUSXrC7WQJqraSYtQTgPYyNR",
  "key27": "2S9yMA36drJYJaimgQ7HTZZSbYA1yRE9bYY5zv7LykeSH29va7yZpev226PX31J5Qe7uwPU2CpGskFV8C2y2yoaW",
  "key28": "m5E2F5moAYWrTeMy8TUMxyCAPYo6UBTxLoeQL4K4XY4UyRNULoDyPD8sc5tgDprKgTdsBJd4g6W7UMwHW78pd5i"
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
