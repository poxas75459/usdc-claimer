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
    "5qehdTZKnMNLCmfThQfai99fWmGdeqxAGAChx8j1wdzVQMubRdaZUksYwT9LpwC5R3ZXHU7ksGyibtdXRKsC4jFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMXjoo9zPRDHgkSXokUzeDpLFD6fGxKkrocy17pt6EVJp2RhGb2ia9njgypaWZMAa2F8nahegy9rUYASEM7Knby",
  "key1": "3bbXtQ19zwo1DZ6qym8ApjY2dVrey3Skq5kMayYW3dDseXbJ2vk5vqrFdQbwpwbQ6J5YtTtjuZhTE3WBvXxLLGhW",
  "key2": "8g9hDdYDjbJnjLKFLaGiYX38GmnAjVLpf6CxD6p5v3iPUB8cBji6aMhxvnqnvuAD7HyDNgLtkASxWxAuJU3mas6",
  "key3": "4bPXDiGZF9jor2FgncfCnA73yZ9KXYRYJX56ohVnZCTwa22eUqxDgBATJfLrj6CTKZTveDuF2nSTjDvsZekyJTVG",
  "key4": "3Xbyj47zNmSonkhwqjqJcqDi1h2m63pnQJkncTt6QgHUGrTsdXfCGjya1uVzRDvMYpbZATfmbrZcbZPghUcMQ6hm",
  "key5": "4jJNgSn3CS31orbJR5NoPxJtD62XHLcaDubbA1QVNUsjaSdGcmmvRsa93CB6obpkaMATGxCyc8bqK3CsJ9LcYMjj",
  "key6": "YKaaoRrX4r3oWSboctfB4vB9NqnyimPkai8xXvgUVZjrZ2xfbvsu7yB6N9YYhLeMYxGH8je2ayY2kosXBuZZFtp",
  "key7": "sGB51UrmN2wNFGvLzeXtLB6pxxWjMaUAvVqZkAxoVuTTaakcptEtRmByGfbh5ZrCnhkgy7iueMou74xq69tJ6uk",
  "key8": "4W6bwS814hqbakT6gdZMwpKBQn93D9qNvydK2wwRNMFpr1Y3nVFwfExqvpMch4ecN8yajJuWuNVuYhuXYwBwWTnQ",
  "key9": "5webG2bPcDz7FPuQvVPzsdnKggcBX2LCMREeNwF516mD991UMeWgXDEJ9T1BqvsTZUFbZEd9UsM2FWRXdXrqfzk2",
  "key10": "AYFiNqbMKAWyNr4umXd8CfoWM6sSV3f9DBd5ALFWN5F6av278KJF6e2RDyVieLhHUDr6kYFFiRjPChGA7cUt2jn",
  "key11": "nVRVEbD4HhSN5A8vweq8UA6o2iQUEAPMSihEAEkUBmYYkFZLiWRRZ41GeakJPwFYN8h4y3Dzjt5mgEkhdG14y7A",
  "key12": "3qmLXUcsjXJkZZYg3FkATz8HKsUg39KyfxBk8wJ8D1JV3UmM5Su1EAF3mUs5Hj2GcmaxzFErvm6m7gaxPtASLB6z",
  "key13": "2H2mPYf9SMWq5WpufM2DpA9psPWRZSGibdVbW3VdW2Q32C2XihpLuJFJMsuyFFU8fEDMukMwSdeGwYiqa8JsGsrz",
  "key14": "5En5f5bfmb5wQdM1bNepotwDuMTW3uAQYevj2tRRNwELCxEMQm2kfhN5xdhRPKvRqzvSVUWG7NhTRM9K6NJcaXcX",
  "key15": "5fWcQymyVK8yHogfrkmFUTgkdtUGD3Uq5KKVUqkGu6jXZJuyVGT6yiFaH2iZV3U3FarjKxtbz5x3vbfxkTgtreR7",
  "key16": "2FLRC9dxyXs6ymYTbZYXxJ38tCA5Rm3ydDNkbdnhZNq9Z7EBfvLHJa6MyR4HCTz4g6kJiyQZ4EeondfxqfeUgfJ4",
  "key17": "8LrHoiKZDTjUEahvq4Uai8B3SMYJX9UdKEN4WfyG7HbCHqdC788uR369i2gwJ9wTjEmmLL6QNvYeyGqFFauZgde",
  "key18": "Uy3RHZzBgnFeYb1BYAsHHdTa4N2Gbi2yHsPymWpsgu896Bfyzgp3QsjFSMpyNMjbJVz4gmd7wKdwzuFsge74ki6",
  "key19": "2UWbMCkB5P7V9i1GTxPNYTQJymvwdeQHwGS6PksgFqDdT5V7JEywE2x62QbVtcXgJdUvFaxfVdoKkk6B8Tmbg6m9",
  "key20": "5ALMCHVbiiiiysNCA2Y6kWmPVHzez9Uc3z1CirVEZqzLfztrmu72mXEoXraCnLj4fQiLituLdM4botbufC4YHU1E",
  "key21": "gkRfVqY3WTcqNYFQ4Sig4s2nQ28JwX9GAsKJ3H5KtRMJRpeNJ8tiB99WtxmiUXVRUmCgoKpiRaRFMYi8UJ67atQ",
  "key22": "avDcg42wT8vtMikRPwUy5jnrv1Jnqu1ebNbT8K4qH2Cm2orqTJgTfveabrEqsMXf6xYA1PDkmuvrs1jfMUYRwsy",
  "key23": "yedHkehrSSeoWjHjnHyEYe5MPi6FdBF2eh9LHi8bTu9JCERTM6E8MzpZ4XLY6FPtN6F5QkRuRJ3KRLwXCeGw1br",
  "key24": "3FYbjPmaNDkwBbeZAZnJSext5oKiDWKqLgvDR66mzL8ooGce99skAV8EaGLQY325HPYiM7ZChgT4wjUW62WyRVFw",
  "key25": "31fHy9qR7xZMuhqfERocfUtccMBLNciAnFVrpkNhuK1cN2Eb6Ymi2CCCD4hwR8MGmh2ZD4MndQcZtFWjS3MruFpU",
  "key26": "3SKW5Zw18WtFkDnXM7VHx9TK9rsyP6hmRsXefwxi1q6Mn87Feb1AC4Ret9zuvvekQKfRpYng6Yevqqzz8WC8HZE2",
  "key27": "2EJ3ysEkFvGvBJn8e97LYCVCK6PCMRmkqum1dAHc3SPdwJwMavQrzRxr2FKPTkj7qECpHVk4fFR5z2yYM8Ac58jZ",
  "key28": "3kZ9CV2d1oaLEgQjirZkAoqJxCxzYnHfTRcUcp8oBw1gShem3m2W6iWwr3sxUbrogUx7uwckWa44wryjaYSsjh18",
  "key29": "2utmwNe9xAPfWbtVrNULu1u7gJjXMZ5Qw9xdaiQVhPrW7PkmmY5nm4vUq9S4mJhZ5CQgkCfgDbB98muMnBcXNYqM",
  "key30": "3KsvAaBMyhbU8gk6M9y4JWYrW9jeKm2qFp7mJdNi8SAzUQVg4o7NxQddLjwXXB3gUafmvKm4DzstmD5QejVMGhLf",
  "key31": "3Js6mvTGPZEZzpkxbt6eKSB2QKyVVYYvZvTKpKm7oemVDx5PhxJYknNkCzmJCi7YCRg1mtP67yXbCQ68S48UXMsg",
  "key32": "2DcL71z13MBm3rGZKYUSesUx4pEABaosNmqdidUBLJVqgZv3PRmPHPc7M1hpu5WJ8TUW3vYLLp84TEeVVYWr8QHb",
  "key33": "5dKurWVVmhoQiJCLdKDFwTfiAMTViGMZhnti2jvD5qwbkxjACJ14jEFdGo86QKqyYNghQHFusd6Z9MqP2kxuXdPp",
  "key34": "53rPFWkEsoV8k2qebYtVs8qHs2GWj9LKxdnui1V41Lk2Jgcm6QBVcgXyuynki6BPaX2Yx3gk5KpdTr432FhUv89R",
  "key35": "5stMUwV13TPNQNWzwmVzq3UPYAFERo82S1gLZLGtmTNKhHpkW778ym6XiqSBR8AkyMS9PeDML2x714wX4Fj2LRX7"
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
