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
    "3Zbabp4JrRSsRDrAk2pCvtS2U7JLxG71xnW6LUeqdZm2TmgTBsgEUmzMUiM9WF5Bq4fq8GdGfm8CdvprbJ4gWVEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQemKHxLuCUT7LjTV3JL61CvHf4gXPMiVBF44paEQvMi9jJr5NH49E95QhAJR1jZN3RXVXxtk7GdtH3sBW397nt",
  "key1": "5V88mqyemamKw8zyAdpMgbRfC4XUsnNdDP5ShqRP3WWJ7TcFkKZ4TWeejnZtkaAFC85bf72uY8wgSvjX63ztFY2A",
  "key2": "4hdksgtuTPuvp4szE3GD9M13pcZuyUX8P5TZV1UdsUZjywejNS8TV4FYJpwiN6bf6VRa5wN1c1SF9P9VYuAD4vWS",
  "key3": "5oQbJugqbycJKxadpJ3oiQSbS9UDWz3XKe4RkvnNShL8SkN7W1giyycUoXvFyLBnyHrevXGH1B79ePzo6zKzuaHK",
  "key4": "65VTvBTX7ezParmeQ9LFJ9fGdrszjeh9APgT4F8k5gpPgd4NRg4fbH8PJgCosjUxCC3f2eogcsphRXuS9SAfsEo3",
  "key5": "5fyWo4fYjykunbCZ5GCKhDaUaiwwxo2QSLXs3qqpCyqGNtSRW2L2Z325pan28CGx4imCiyZ8jvoNVMJ81VPafMn1",
  "key6": "3cNTqRwicgMqj1GVHg6dUWUa94WUV4NsbWYLrmLaHyKXpxasEFA7w8zYBAdrCdPA6mn4fETgZJpYXWmYC6P8YtVW",
  "key7": "5w4fZ1LEgP1NBCPBwn2XK8V887T9AmME9wGEVyyjBsKYnZpsLncsmE3yeH9KuPXeDFNV9dnC5x7WAdXxPu1QqN7G",
  "key8": "3YmxvWpm5YyXpaGM1m39YqRhmZ4cD7Hen2YrciLXVzNzmMna3iRyqTNzMnZQctZnWZNXB1RAC4oJhGFmH1vzJ9zv",
  "key9": "2fRhjUqaMxfB3gb9x5nMe2c8uvXHAeMdum99Ktes6kQumSDQwDHLUCpEpPaK6vuHqCbSyuXe6RKGmHPEDmmNzviW",
  "key10": "3d4gitgn6WKj1iRaa4RayXXfLiSJr5gfdX3SDyydBwCNig5kFbJi8GfdpQAf7w9ggkS7M7p6pYazHAjvo2FZFCBC",
  "key11": "2ZQ48W3ejFpRiYLwqGcxuELHtKWrEpfRr1jJLKWyakoxwvRzR5kFDRe4msBSPNexAXf8W15gnuJGYkEZBnHDCx1E",
  "key12": "oacvgeF5ZJepiJ3xiTJ4trfy27oFdJ8fRBYQPXfyEPJsLK2hvxkrRdo2NZG67tFqTCZboB6L9Lu5rosP2nVGgT1",
  "key13": "54zQCyuvRiEnCsRXJ4fZmZ7Vdzba9DfSc6FiwxgdBKc2yBrybrt7Y3mk6EqdfFrqucsGrTZRRapGModijJdVs2ev",
  "key14": "2fvx1kS4FnyLzKSjSrwrwcDNxshW4P37YbEf2dx1o8KMq1p2LcsvrCJT8JD3AVAEc6dfkqmQ4cjr6gEKLQCrfjiM",
  "key15": "128XZ4hoEi1B7mBizLs1mCHe6P4gyn5jrRLo4cper1AWfGEjwgp7CmpbgUB5CQyicdnpWvG8gDKdGcHvze9xEGHD",
  "key16": "5AHVEuse7haGbEGttDkQaqisv4M6nDzNvS2gzHRHrZdjYjtRQGJjQEuycfqBpcJoD7cdo1WkZoAsv2fo93UdAwaE",
  "key17": "voyenCFpyb36bEuEYZZx7WPZycvUfPMcEW9SsGHeGMPsvriHHbsFe2MTF2gAe55NHw9gdU67jNNijXnGCExGThB",
  "key18": "fqkR4HoXaVs2gw7NCvpuvmn7YnmoNzDTnBfJRnZTms6w28SCYSKZppZhvSk4vBRTKQ486HGZE1y7ZubQBuDjex2",
  "key19": "5ozK2MJbNm25s7Xvab5EHT46MuEFVyAJcA7TzQQWPgo8Cz94nts9kGpqKFHMhz2igfKpyeN5r4M7AMJAPonV6sBE",
  "key20": "3ZdyvUGwwfN7K9TPxLNqcLYq3KmtgVAvL4QXRxEqnmW4x8Jnpp5w183HzRuWSKseNtEJCV8qAbf5ye3mACUK386d",
  "key21": "3AwNMF84pQwjG5gQt9m3LecfnezFjCzefigXTnJKZDeLLv4swiX4BeMfqiYqraSd8ZHFwtZTwhVhHZ1qYmeFabkw",
  "key22": "5wg6UzjVmvo2UA7D3AeWXgaK7n5Wf8AwgUeT5kL6HyQrdhZcsaLX84YVJEqq4UQNWQecBRxdHvYSpHezWXg6QQJ9",
  "key23": "xeNRAUQrUAm6yUjT7zX9HDNZDPSWbBaQTsYsYAwhEy8zJjuu21eMb8nEtiHLFacq4w47673BPaNNMCY8mPDiphV",
  "key24": "3cRLmbSK6oGTFLpzZQnMdm25PozSjojh9YoMaycAoPxMhvdpp6aidPZ9uoRMHzekiZA6io6FJezBjnpxpVZnHraT",
  "key25": "59JRpkLWgKnV2545b2mvVgWEzrifVFUPhfquV5hbwvgsfqTy8Y92xnPzkC41yo8zMwi5mfd3dGg1hCMovJNpgHSJ",
  "key26": "314cUJxpdtNZ6an9MSQxNVRdPgnU6adPJv6KycTRF4sajGQSd5VqEzaRHaQ111wYRWCd1QbU31o7pNswr6t3AmCs",
  "key27": "2EJREpxsEL64W199uz5C7XupKu6cCuvfNU5c8SSLKVMWXkogEV7K6DdsgYqLdYT8s3zLdzz8PYDD49YfG7M2D8h",
  "key28": "5STCELstXZrXTKMH2BvBKgEYoEJA1Bb7YNTwRn1BiUBTJuRntNXhN7uMsepgdUkDxARMcUbTpubggjqNyqxgo1Kv",
  "key29": "3eac75UwAg8XD2W7Wxkk4QtqgUzAUyNSPSns7WRJZzsQsN87mB4bMYWVbx9vT3TXTWRqHECsmCAxLNc1fjXWTABd"
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
