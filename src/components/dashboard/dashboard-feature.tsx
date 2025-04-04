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
    "3gcF4s2ukNC9fqXztKrVYH7PUttmWSmCNJQ6RcZ28cwVnejhk2t1iYm6sV11XSw1TK3c72FsP2rHNrrSvUfawngn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJNc7pYGcLgMYcyQa6RAN4SyrvVLFRSqcN4DqZMrVLYTvvn94d6xrvRoRocWcVLrfAGaCKvZb4pAsrxFa5Ug5d7",
  "key1": "5BYZ9r3qKTDstQPjxFYnYALj2Tdbf5q6iMXNs9ASH6gqPYcMKSEy3saQSM17nACn5SRvx9vnTbWsuAExfAhe6JoW",
  "key2": "4jhxGvebp1VqzvA7Y7ACJUsejbGUta9aQSXA7VkDp26S2nKabfWVgoLgaxZgfvnVPg4e94vmHkw1k64jKBP9ap5S",
  "key3": "58zG9gMJR9AiaxFahoetopg4Q5VeUuuBfz6LmXAgSgYfjHV3SafuKcbypzqZrcFBwMQTbwPjGNwr2mWa63Frn6Po",
  "key4": "5qp6mtGrAJzgp6E3CmUhcP6NxAniY8VZnMUoc7wcoW6tL5KA5kFqjqjUhwDcSaNZVX73p8GXbuDxD4xFNmRispq5",
  "key5": "5wo2D5SaCVAcDGH1gYZXm5uYgXdnFFP9Y4d3HQf13cLSrpXwn8nKkqMtRNMFRKgikk7b6RgVyHB2gzhN3JktXAPm",
  "key6": "4ADB7bV6ZprKbSMbXQundosAFd9vM4ZsKb5dfg6GTQL7kUak6Zd6T4oPHtAAqvSNz3sEwoU3B9RrYNaX8dW5WJFK",
  "key7": "hR1eyNiYAAvwvH55eXDULTZ4KNmNAUz6hMHtvJW46QTGssLg9Yyx6DUVXiFn95aVq18HpQdxwsdNijDVcM6cEqf",
  "key8": "5J1GGK5LS25f5pAqkssunWeJncL8NniHXHF7oE27VCfYiB8aoQ3wCC9PNqVvD63mBNvfMsNNaG1LgfpGG8swiirb",
  "key9": "3zE5R5qmmb6Asic4ikFj7w4QeYiAnX9oT69X98dha9qvYJbGNf9azj9NNpgvjHEp1guoid5LpN2EHJG56PwSkMce",
  "key10": "2sFvYTRf2VhP8AQJ31fngazYjpkDqJmiLEcU1UKLYHFC9EWPMQudYg4GrQawV7qSrboxjocW2BR364wc1u6axrWU",
  "key11": "62i4vzZGVHhH9TmytqF9ZeQVk8QF4dj7TLez74oq9qGH5xHDHHctSn3A4W3Eg2LySrpXgBM61fjDe2STKPAh1MH7",
  "key12": "UekQ67uKN56MqesNXnaGjKVXVhcYsi8zn8gq62aqULAuh91ZJJkFSrVtMHtA6ExpTfqrvLVbEHWpYKsTPuU6rc7",
  "key13": "4RPLdmDyGDjXPMiedv89eCSGen6RpwnVCRnzhsdKYQpLEGBZA6TmWhYFPaWy5FdojapqRV1U1TqthJrrnFoWKNyy",
  "key14": "4Gegx9d62TZgxDgPs88XpfosBU1bm47vpsenyVyJvcnnsPTRbkJu5qWFJDagSeqg5kcmUkZDtFcG88t9HyafwuTB",
  "key15": "64s9UpGa1bXbJy8r54vqH8XW4hjj2bZNNPrghZZmGBRYMoYbBnYJq5r6XCQZHaN4w7t7BsWwhXcauPWpCF3gxBin",
  "key16": "96shsZMFvHYrrtasBfEtyu8sats23yLwGJ625Rp61VsKwkdiXJg7MbFZZAWPshdPyhN8nXmDrmbRiTXNT5NBEQo",
  "key17": "w1WbmSDV6sKy82n4bx7gvs6fGM9PtRaqRzacmhqzuB82iBuUzmRbb6otLJf1KzTFBco73BFnG9LFVqCx3DEY2nB",
  "key18": "42TTFrjp1uCzspizA4bujArkhpMexh4B4JNrHmLQas4NbD22K1hFmVVWBr8EDm1C1mioYQPQTs22nvmydZYFkJjL",
  "key19": "2vJSxnekCD94QQAYKXUYPvqu3zQM2ZeGDgFJCzCzM1VBdiCpRpaq3wYgsFxZVCDCiPtLhbkAjseNtJ1q6ed6ZwvE",
  "key20": "3o8KkmPWuzG7P1DoE7jcwZsHoLrjipmXwSamkWdKprFMZQtZt5oLGW948JhTELBKUJU3ZWsDPxhkP7dvWrt1vxLp",
  "key21": "4vUPXso4kGgCQ2VDzN8FdghrhtvoMUUqr9cgq8uQJdsAFQyyQJ8osG9eJpAnrgQCtRkCUXwS3MjcdkyVWrr64xHo",
  "key22": "3mYrn7Xa2f231X9GmrVYRUTPh85irNyGD5xUG4dktrMkS3SfiLPnKhdBEPjtcrD45oZLFmB5qUsXs8syTNAHKf2Q",
  "key23": "5egJUZjiZC5KV83rK5sN4cb7PbVPs8e9mSw7dKpEQcWwhUosYDgtCK5QRh2tzXTT6Cj4unTRQitSqFY9rk24cnnr",
  "key24": "2v6Ut7nnNWDcFsHfEMaTWbboJpztY9j1yKtbnBxdrsg5hvzfNy7mvs7B86jzNk2TkMnnL3h7KQJjzHjwczPFDZ75",
  "key25": "2k5jKemQ8zzdhNN6ibrkshorPR5fx2mDUkk6xxTaDsJU4odNJpo7gmmZBAfUNtn2BGx2A2QfG6DXpTvKgyHwtXSi",
  "key26": "37h5kr3i1ybhMMaxFFGLayVLPXCRm5YhibHdP2fuiJwCwHHQtpbUDhf6jCHqX7QLNJww3LB3PsRM99KESe6suh5d",
  "key27": "eWemfxjgSmHz5G7KHdGJEDftkrrhCmWBELerNH8DVzWcqBFifXRWBcPQubMJJ5NJ5KMJ7aG7Mw5k8Cje3pZ4uS9",
  "key28": "3pgHecCiPkXmPRRGQ5GgbYxVts45rjaQ8cxhmkoj6fCyNCPA9mKGoaUV1pP3DdsFgXdFjca2Hh9PnAJLV5yyaQGF",
  "key29": "4fhCVdnNhweW5GeDNeHp85rnkr1TCveanbZThUEA9mnKffRvqtzMkcL3afPRoki1Cw3ZG6FNkBT9NjgBsmJXNEet",
  "key30": "49Np1vxCaAzfK25a766izX4dNWB2xDNghHqci2bssxQabune88pHLY8vPgN3myE8qom2nz3EfzXcDxTS15jH53b2",
  "key31": "31FSrQX6qT9KNPgyFdfLbDKQJo5JXCidux941zNYHtDMxQjghE1G4z26W9NsWqaeRvPiXx7MzDz62meWcdHiGzzS",
  "key32": "5KeE8Mzouffrhr8K4ZeD6NmT99kdsXVWdGkLrjPrhpVqq4FyPzKqnpfaMXA5oEre183nWTcGz3XSFLd7kpNaDUPA",
  "key33": "4k9GVbDKaicyL4xXk1hbX2VPMGzxc8K1aNMaKe61TGMyncwytPwAj2QwrVYzPkpFvHGFSrzNzXo4bEKJP3HWxYye",
  "key34": "246k2wfLZM9c6n2gm1mKA5W3ej2zXtyX16R3URUTfnp2u1h9qqs3vwzKHBvTV6ExqWoMZcqej7unNWVzJojySroE",
  "key35": "2iYYMmfcxDF1QrW7HcAQ2RNnp9wTQfMijrbHCqUTh4mVpzWdrs8DCScBxehvVELUvgcKUgyQs6cB458KAywqsbG4",
  "key36": "PchxJ9BSPYvCDPoGC1bpP8KfsJGW6WcBigTYCri1ZvYEn1ys7m7WheSN5a7MgC7Wddxd8NBYd5ZLwM3kJyYMqaP"
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
