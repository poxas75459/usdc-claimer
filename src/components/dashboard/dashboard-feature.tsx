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
    "5W3sNzMxKahNDZc6oXF1TpvBLKMWBptsNbLCNBWQ9f8gbkfj3YoZagPYHXU1t4fAQBgtfHtL4dwjvd4ZtkHKBH1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gb118bM6KavnZeYWvzgK8KniQM4ct3tpqhhoMQVBsNm9oWDSjEEapaMgSfdk3Qw73o7zQrguqZuc5MMG5Ca15WZ",
  "key1": "YAVfMNmmH2n6zgLrsB7JzbH4LeEgqXH33rvudASV1tZ8dZfcmUvjoUG2kSUTc4LyGdgtmaZYffbtanCCAmVV8Eu",
  "key2": "5uoEfN2odXWBQT9damLoQG9vnpEdKGX5bJUdHGUdu1wdTpQ3KD9HPTEp9EzCWr2Ht7xAWFsHtgL5w3aKcZK9R5nT",
  "key3": "ujNjybLFsBPrMW2UmZGqwpybVSvhcW7UHVBFvLqr548q9C9C3LXpAyDvj6ydLuWnQ9kfYmiUSCcDsHftzoSvWUY",
  "key4": "5rJoRGVSNYYNfyWieaG3ukiZx4zqDLCvESLg7YWvWWSG3cjWyMpfnyxgEQbTUwjiuMUaeCzMGKNH3EYMtMvXfCBw",
  "key5": "gppWkq1LbUqDaCRwps6EffGixBAaaH6DSiSid6RGZ1Fptz4VEycrjBFfzTHsLwZX6BicKKvqBRcLRH88ftUuLHh",
  "key6": "hbZRncH6xoqgPKgSq2vjvzMYJGs4f64KjikmbipXDakF1Y85ejA7arXqNujL3dhphRMVi5CVePrkvbhSM3e6ec7",
  "key7": "2FjMZXmm3ycdiFmM1yzx6Ca6qwH5ZW9yYq4qytGqSRFMZCaudkEscBPcCxxGWXDMzqQy3BfBq6QqTVv8K7yd2n2i",
  "key8": "AzcT2FwLGxNKtTSDBVVwPY8kRZcRFNGk38NZuqBSM2RqkccpXq8XfQDYzc1PLHx2fz6RsypdDeSVcXgkicRLCQh",
  "key9": "2gNXchhHFbqch7RWewPsAkvnwMawVBN4EHFiMtRHE6hNyYFSAKXc2w7NCmawNFMEWdGcMSDJCWBHRk9nVVojJ94F",
  "key10": "2KcU5pVJJi49gmGnhndYUM1ASKgiDCkJUEtmHoSraq6D2qgvC91iLTbNzPrCJspJoDUyWoaYtg9SrPC2HGkVr9kZ",
  "key11": "3icMyq65UfvKdFvWbTEtWCDT9amdtUME4hLnhqXAn57agS4GehpYSfVwMdmW8dKw4uWUE9jj2kjnB5z4pfA5HkP7",
  "key12": "3vvB2i8kjpaUafYUQS3TfZH41gTSNXBp8isuBo3gj6kwUdq9MidirWAnLYAqVufW7hPEryV5c179bi4R6WakQTKk",
  "key13": "5T3QE8CsbRaJdnQNqbBiExFh7kqmhJ5KxUiopVrZZjhNyYp8mG7DpmHoewGkC9FLJ292PpaDiiZNR2dmEFFh6J7X",
  "key14": "4v3iHUndGdqVQDT1TqCsMBd2JEfm4CRgD8ds9FSnc9jFtpEEYxEAoAZc4B9yGbHFQfepEVCbbwErSSXduDdju2K7",
  "key15": "491426iT2qHGZuxBtNTSqPo7cXEjcB4VKjBAefbncWkKX8WmAbfJe4pgRKqMhJoTnaJVjMGd5jwCPsLqhFsFEnuH",
  "key16": "5PLfx3au7weGWfQ4zckKySTe6HqfDZUmSeHQpsWXLCPYzUtcL8Wgkxf1mb38jBKhQrsrjPbKDepqKF7sMDMt9Tz7",
  "key17": "3e6NP9UdyHGW4R159hZes7DSnGxtGUBz8zvdiWEYeuXxNWppfhUjpxoK6eBaeydHikito95wcbNG3hqtYKcwJVxp",
  "key18": "es9uqbcNgufrZFi337M2NNJepnaiKeK4YjnNDTM5LceyKjrmPW74wsA6CesdUHA8MqRAgJBKbSgAbSy5F1tw3Di",
  "key19": "5a9nV9XM6vNvfvJWPx5KHFFCfhNjVqFgfTHDXdSKnzc3rLhBcsuvxXxeGdTFJGCRfy15TVJLXRksu56UvXzMjWdD",
  "key20": "64oTxRXKtLvgxNYU978h36o5dayVBVwqbWp4zDEsgoTYhToTmcZU1MoF1TQd6hyCTNE9RFRXVvRejLnKDGZW6BnN",
  "key21": "4RnGWqZrGfma2UbBzViDk3MEqDWFPPEMjLC8PYGXUNQfc26gbqYjYC62BamfuPGD6pZkoTLTxBqEM3Qz9guxAHJZ",
  "key22": "5V3oJEKLWyCC37dacqzJXvgq4Wm9BQXrQc96GPS4uHkvfAisiw9kYDqcDJjzHbPTmQYUbBUxBFAYmHU5bp4rm1ym",
  "key23": "5iHdpmXv2YHgjAy2oVEVzGjA3UTm9AC5WrzsHQ5iQraCB3K7wmagTgaSdNbTxWU4A5M2oB2RZZ5csBFHN6KqG5MF",
  "key24": "EpRpBuH5FKC1Him9LxEarfQ7bTd8EQmdqMdXCpRGFo5D68HzkNdsA4AXbVCtyMGNh3BaXNZubch3YbmwsrAN264",
  "key25": "4ZiV4z3Krs4wdrMhGqrZsBy6RytNNhDD3DeSf1Ur5Y4vkZzNvGhZtxY9Bf7qg2xnPMUPR2xNhULf7dizuAxQrasA",
  "key26": "67SoSsNt9CaysNEv6nz4nRdTa8B6KrKmA7DBwa7RCXxVkr7EbAYZPeU31H8PE9ZX6qAJ7kW6qbpgPmuxVtFGtPPv",
  "key27": "4KRg7NtcwN8DTQ9F1YegAyg8rFzeYXTegdepq4JeJoBPqNqgqhDCZGnyZwtAdsg4aPHyJYnFQ15Q1DTWwtbbFbJA",
  "key28": "Dj1tq7H29a8c5YQDLKdme1eAGbXhvr4ThWWfM6ExygzxbWjku4VcFsoU56HmHHQkUbDG37THU2rC2YtQdcmeXxh",
  "key29": "2pk9uYp6T8mTdeMYGVHRLR3ifDNHT7yybcSJ8oFmKF3FSQLNwpJwceEeeRgsE2qsnf8ATbQenR2cJvnA3GmfELZT",
  "key30": "25cCGdomihASm5cEUqySfgZ8Q7uu3gihxo69D7Y2hYbkpTdhrtpqXn2Gg7ZFrtD3SSLHNi6JDG3XTjrdC3jBjdfX",
  "key31": "4bVuM3K85y9Tpxxw469zokjcHtTdJWQkQBy7EezXkFuPsXA4fHtLd7UqgzydFXyjUtkp7Vefr9H3pHxoH38fAeRM",
  "key32": "2vQ6TXouj2WSrvnptsNsJb3Q17oe6wotFm6Gc1aHxRMsk6AcGN8Cfzw6KZnxC7yT4UnXEiXzvVRKqZ33Xnh6rGBB",
  "key33": "51jrv47h3dSHhpzFqnEiXi28oAjkwmLzAxtFLaiWHg9y6E6ML4Ko2GNwhNrbzsmVfNjScfKytTY1F3NrsG3HiVok",
  "key34": "2dMHsXFTkDKzF83FG7QEZFNegRseijZ8oNce3GXrxihVrorNgnHcdLJM7CDD1kyAzxbKUZLWv3tg2ykynVTZcv3k",
  "key35": "4Ugsk6iC9xcT9jevzDSG8QAcy1eHqqjg1AEs6L8ch3oGXxDmce9k7jbqn8QJFjzfPVk9ZSfmALXNYSs9jRAAAMUn",
  "key36": "Eqqz92Asjav5LZ96K1MMXMXjXFzQaWDx1tHrz1ekwypWWJZrYi4ViT2Xgv6knkN34V72JAMraSkVSvxF45qJHY6",
  "key37": "49xq58LsHPHQcGxxpDvfba4d7GucZjymNaFThpMUvxB7ndtzNurQD9MTpSAaFbRe4c9FrhzABYmqoitvWefgAX3M",
  "key38": "3zMBq13jDg1d8QzLMjVabu9aLDVJLQ4XYPq9vfqW5eGp69Zw6HnJnKhbiwRt9vWtMP6TPUuHzbsSYo4YbaV8bJ1J",
  "key39": "kHWRAfj5VbgpGT31ySPGDZoM5GCKagsxwu9PxxtpKPf86oSP747skNKRS2pWmiiWy4EDMnaHLydEVrPSEtqme59"
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
