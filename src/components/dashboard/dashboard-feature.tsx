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
    "5XxHme8CrZE7mUgjVywsG8vTMVuebNdJda7RqWu2LAGGqKBkoDu5V3gT9ZskQ3Tcqw6Auzobqcvsp71DPbUsMu56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428qdq41Cs4eTxXBHBESnLiPo3VAfjaAH8HDeHSoFZKe8eCvGCmCxYtJsE7bdtiwvxiVHkYS1kWyVpeBJxYpizmF",
  "key1": "4MskXFG6A511mToUPUYU4SqwrftQvFdqZmmFeyveTFj2GBPPNeq4GtMtggdBBiEPrs7ZG8CCjrArpBbby3qaZFTY",
  "key2": "29nJETdmbbsKntiUqCwuwoAFNdNCrkDsgwG1seD8kxo1m6Y7RaHcMmdZpkg1RouG3t9p56aWTk2Kpdtazn6tT8DN",
  "key3": "2sfxv7rrww5mXUXjjhVhJh4MYPABpvpRKDGUscPDGBqDyWYcR6UJ1tzGRspdhGeatheAKpzpKdQLMejB1yN9NRfX",
  "key4": "5HfBEXUJ38WsLALeiZi6fwXAgB6MYoM2FDojT3qHyzZ6oR47eB2zhMzaSWS34zKfNH2Az2q3snNjiRpWRKHMgYyy",
  "key5": "5qGyFBhjh1AE9fsQJ2NDtPGdLwk8CLANCXsgzuLDYssTCtZyqucQNXaSsdPjsR77SktBShgj8Rvd5ft6kaQ4aLeE",
  "key6": "BTQRfys6G1cEwDHc85193hGNHnQ6XyEscDroBvC3EF6JhAih2qXrBXUHMcSy94bAMshugoFBTfo5EN5e6SjQkzA",
  "key7": "3Nok5Jw76aVYNR6eQgLJFwtDJXUAghtirmLHcQhHVTb6ZFa2kCVWwazVckWCbvYgvMWdwZbnjzqJuzBEuTjVtG4e",
  "key8": "5uSq5HUeVkwov4AuvPJupoGH3DY8TNsTjiJfCUGJo3DZwfX9SAAGDbEWJLaBUCr6ADbZJ61yvQyp7cs9BaQQFRHc",
  "key9": "4RjHzuYgraS134Bp2EEFggXfTDfnaAfTmcprc7Y4PQv4VSwoVPdaHV6Q918AmtPfbvwkM7KUruiyj4Ax6yMkc2Xc",
  "key10": "4KEYfQwCgaF3cmtmmFxJih4NmxpYYxTsf4rgLLrxmoQP7R12NorZZq3MPBF1u9sX4kPyaSSihFwGNmeU8mPtzcPb",
  "key11": "4F5Tg8nvD78MXc3GND4xX5rkHTne7vYGU5M4SqEGK1t5N7FAzJntVw8HriKEgo3HMRsbuAqvtShYctVPZX5VqoRz",
  "key12": "2aLjjKuU62DxD8CHwukatFvyLWTPftWZCc59yRNGVHYX9woDUrR4utRDhv9pYNkuKvJPdpceyXay3xP3j22fkgnz",
  "key13": "29NEbPBeVrXv5TjoEhgC3J9rLtQ2jwxwFT9NzxMxqquwTiTdDi54GjxkgoNFX4GnuiZ9urwUBKEjCGo5CqhqpQpm",
  "key14": "zuHU9oyWLqUxEoEHtXJK5bExzQFXXLZXtR1qtjnPuax4nuGLbR5h1ZN4R2PkWtkfjXJ1Uo7H8G7TjQE6f2v781q",
  "key15": "WKEZtg6LDM2uHmnqo4PCbXjQYABShX6RZuhMg9koHn8buVU4yukFuDov4BzQhM9W5yS44ndqRxq5VfyhnR2MJhr",
  "key16": "U2V265JUcbEWYj9BB5zraPrWc9wseRkQdZKoPy8Zkyuo4TU8LbWsKheDB2bRfHxBPem25fE7YbPDPT82meYWz81",
  "key17": "5eZNLBDUvrraMWXHBrTpn7XUB5KDbFLxSBiuVt2LUFcHviPb94RhFnSopWALQygLJarLnTPAvmLRnkqCBJGNb4ae",
  "key18": "4Fe4Y1XKb4NRsi2gkm74Y6q5QvxfQT8z3TpYXbd5BQ1X7pJJE5yusNBwHV29uFzoBKm7YimXEDRxjUChpwPk4orz",
  "key19": "4wDJnjuoMoy4iEb6qi2h9hawC64NQB42Bai9UTqeZHg1vnjGcXvnqe9cQLQN1Wc54kSrbS33XgNT2rukjB5U9Vw",
  "key20": "9urh3UAqwRJRNnZSjP3NMCv9TxgoyLrz3UDBtf8UYFeBYiXjfCPgAj5K8Xb316PDZjEso7q4rJM8FHHCLivdrTQ",
  "key21": "612YSv2Eg2yycnF3QHTdpcDo9hCPYpTPdkgo3Z8STH1FdLKgT4uszyiPzEX8uf6U1PYUbLn8ubwynWPPc9rs8iU8",
  "key22": "4uzphL7e6WD1AFtGbLxbkrbtB9BmxjJddhzjRVFTs3VptuR7Q3yKLKGpXqTbdF6FRXhKybKitZRArL5SkUVUWoMn",
  "key23": "22PnGqJY1iziPKTr6LPoRiYRJzeJYxANpTLPXodeDmaGGcsHWkN39ysSDAoJuei5d61tQVmYKgMB3zznHqiCZbgH",
  "key24": "ACzRi14Ch5WJoYxXXY9NF9zSceSJ8Gj4dzoBKLGASsaRfZudv29xhf5b4HueKbNoC64nuzBcq9CZu5CCn2oh9YH",
  "key25": "5jMNvSSUjdMjVFiSVRcCJ7uZWR6gj3Bd9yaVJ6wEjYXem5ajjufLVrF74APx6Wxy2rgp5rwRg6jFM9bAiXyzm4Rh",
  "key26": "5KY562R6xWn1aHJvjZ9h8btegTC2WFqMyC3StH1KcGuLDaHT96xtc9RscC7rj7CRFZwTyhx4CzY6e3fVn6Z9MMz9",
  "key27": "4yq7Qzs9V8QdSHPVsh66yeTWFd5U93f2L1AbbZgmo816cTqprVd1fVA2Y6xDQPHSnQfxtYm8TkRQq212nPfTGkb4",
  "key28": "5LtSYb7kEuqZg5AARS5SHMqkYGFqJKgvWsb7bHPaqyS8JvS3iNNSdwXMos36QShVMDm4rfQT7vvYiaqyBgd7yNTX",
  "key29": "qg7c6c6GeX14Cfjef9fpcqM1YPo9j8b7RqLW5nRqJavTJtWwP9GMsqxYZyqffosFuzn1g1H8ESNNQkzA8tqcnKR",
  "key30": "4orw1BggZMETz8kLxWdXV8HvmwJPCZ2WMgSpQgrudHB2xTbvpb1NpipDzEPF1zLTQCWSC6Quez9sfTqfV8fwhYEY",
  "key31": "E6CJgcX6whz2YdgnbW89vMRVPxdMm3js1T5mvmCnbGTfnxw3HkstkdjBEtB5FEm2NNQHsgzgZpHk6VP4vCVGiAt",
  "key32": "5xoGSkYm2is8RoC79mptBKgAaeLM6JuTt573UarmFcDQ79aBCifMMhwC6oroZPcZUueMWdhvEPED9jUtZydsdwhb",
  "key33": "2RgDXorgPExrPbwAjjh4XeRbzqtXVspe3NCnX5dmouvjAVZN3vnM3nKFC6KHc7KqpmBLvfhFsHWuwM8CP4kEahVW",
  "key34": "5iYqGWyJRHoHoujzw93g4TJi3nktoZdQUuebe47NMUzyyLLq1EEt39xLZPpJ3hyNh4qxGGopr31jhdbpqGjDsdaq",
  "key35": "k4ujKjv4hAdh464dXemXD3QN8MDC91Sc3L1cbz3HjDxj6gx8JkvxuEEQ98ZeVz9ejKQjx3Bn8TGNnzr58Padb1o",
  "key36": "3Vqp2L3i5Y86LFbNdqXPFk9pSKMtETCArxJoRHXqEK8Sat11L2aK8TA2wpYMepkgJ7H5XfemzuJxpdRRZN9LqUaX",
  "key37": "2GuoUihiGUDUHmcfeUC7YBzmotBDL4Y6ThsfMqbw3ZTNHpmDPYFE7AVCDQBhEkfAi9nSSstijTx5TGJm99YvEB6d"
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
