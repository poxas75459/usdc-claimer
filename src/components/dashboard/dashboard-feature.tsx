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
    "fELoq2Pt5mpEDoffdSXcEvHREXkmyoASTAFbLQP3MsAC8CjnyurB4tabu85iyVWHrtGjeKFbV3GMTBeHHwMm8ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3gc6kH74TGnPy7bZEaMxpYsKvUps7YyYu23JTbsnWfXvTy1wLBkTpxpxh7wHoJV35sVweJUuJLRJyDhMbzzPX3",
  "key1": "SJbtXrFCxBiRyJTFezv7dMzAxt4DLUvC2ohMKcEQEpcwRrUfDzvJJ5JE6h5hEAYEywJjs2GY5jpgK2rVx24Yp4U",
  "key2": "mS1QcnR8qrWKbu5BjHR8j4HqXXN8eiLbiNG6Y2iz7WRYfXZCxLzs7ihZvfM4Dmh3psyvJoiZ6SppuMFJNgbRrwS",
  "key3": "1y6SSG6ZDQbajdpmjFmk4MFYoundZX1wKHFbEMzmgHanwtygdUTEU9xXVkyubsAkritWMtEtfsp4QH7F47WYqQn",
  "key4": "2Lwf4stpSwAzTCMBdFa1YHa7JT9qKbBRf1tjX8Lt2h81K7gu3ZSgfrPUmSzNifZRmMAaEJan7yLszgJdF1JWBXMj",
  "key5": "5hDywPoZytq8ck2hKHscMY2ZDWW3qh4Q2mDBZXGPhZzTeo15FMG6LRRHf69xkA9PVFiQiu4rvmcfCGUWinUbSUzY",
  "key6": "5FstonJg4Yaj4H7tprhNNjSdU258GFGqFwe2TdrrrMsdTZ4VQtREzR49ocj7qBKQdoXiV4bJ2xVEnNCTX3Mn2bhk",
  "key7": "2cmH6Zi8v5LtkYJjw7KNtNTyngFVjzbMa2d6sTnvX2nCQonXeo7qsBY364fxXn8C361dkfJGN9UjAYx19j7B79ET",
  "key8": "5y85dg2ncDS5tx5fsLbbRfdsfuP1UUMjyn347uWHyuRZwquFdYXJYxTjSULoTxA9WEVctgJfzvmtuhZdBgh4Dj8k",
  "key9": "5MdMFqw7v8HDMz9UJFchM35rsYFm5BF976PQZ6wpWSCejWdnUBQNQPMH7ZrZXiWPfvX5cQzBuT6X5EQVeTerJmux",
  "key10": "292u6iAc9mvf5PtGjXP8fE7iqMy1PhLSiCe274CEyA5cqwU1KqDWXvanj9abLTas9kibyF63M3v6PSFibNRP8Asw",
  "key11": "4PKCHeZPMmbzmGwMFKsCUTNBDP3wg1JGA6KVqqZMwiQsbJf6pHJtih2pUSXyP8xDtuuo4c1GQHRAmFNvTVA35dPA",
  "key12": "2KZFrjGAH43GFG3dXkHAzgTjb4x6baXhbY11NrQobqKdJc2e9cWMXTyTiREP5VX8yZ24N8Kfh5LvS4T29dHYuEo7",
  "key13": "3Q45RMbNrZ6a5K3S8EHzgW71X6X2gE6x7VaTUXAai1m5gp1tm4crwoSjBNRYgCyiCF66VQ4XNNhAVwb8zH1SB9NA",
  "key14": "55W7FmpmTh3KpFdQmgFfKJsCc4c2xCkdb6q5BU6hbRn6AZxqLbXBTJA47Bo4k6YYX9jHhi7Z8DDGqGnMsB5T4nic",
  "key15": "4PHxFLc25s6XpAkzK82zqsvHfQyyJeYX87KAmeYQb4BzC3X9AJYZHyz5hNq6VveQz7zCpnxd277gVRvhfZ2v1EeA",
  "key16": "3E5f5QGuFy1jNgDs1kft1G5xByUgeJNk5mPcTgTKt9DrNFmDucG8HG9t4EBrmZJ54hVFzKJvh8vvi6qwTcEc5LGH",
  "key17": "21ro4Cz1SS8HZwWwopv8rHWaHcfK85pAz75tLMvEjrgmVa3VYFN4Gg7sBe9Vj2TWkrhDJAHYGWEtuqrDmE2jJeT5",
  "key18": "3SY9Sk1dsE53qmp24tNyRx4G8EUtP4E3smTcJGu6oc9tAuFFrg1CJGuqVqHpkf29ymB4chomqFW3Y1C22VMnH1Xm",
  "key19": "4iGAgn8YrJK9rNpPcaohAfnQ8ezudY1kEkJEw5nWK9b6piLsbRhx5mC3y4nh2bHkuSuC2Uq1aEsZXkV2o3UgKDxJ",
  "key20": "5Ce6YJZoRrhm6HSLf9gBuWCt8waAi1SHW295Lcu2ev3Pmh5Bmy13yhNQPe9LDbRKMGwcawDgXusqQEXghZoTzXjw",
  "key21": "5TPTaLc3veC6RcESKAywZ5yBBMBX5GSreUKgcZdyADjSvvC4ive8jYdH1zFqBVdVvFyCT9hrnXQhp8PRgVEDh7rQ",
  "key22": "q8tVHsxPJVQ3cv3dSqWDnxNKGWHRFNWVaXWMwqkEWUbGVxtSfWeKE8RsfQPbFww16PYB8JNmTNZwPh7AdwbTGPk",
  "key23": "2i5LaQH1kK2zwqBaQLFAfAa7W3XmG437Ta3PvUEEvYun85JWdELBNCseQk1pHmrTHfVfBM3YXX666x86WPbXMN1q",
  "key24": "3rjGkoqdaZAacTukNSuAVL5TLJbC8qongbWf7AtTDxn7KCwCUrTVyTpfM5kAJN35GNMxTJxWdvkEXpbTPMoxTY5h",
  "key25": "2mNtFJWXHHeaNzf2TkUYQnjm25oextoAXJhYaukVyxpRXT92AZNq2KAmDWGMf2rnJtGjRmbiMrvMRuL6rCaNZ5i2",
  "key26": "4dNAzM7X9uX9a6ixKzFp9pUDZY4oLZvE8kxrn2JpmGegNevnsvQL7kgTrtqY6zNFDpz5uaJ39SxGjvDidb8Akr8s",
  "key27": "3gKtvWEggNHQoqFw64Hgch5TDf6o1EmNzGA2vdHgZdXgBJWRV6hrx4hCdoqLrZTQkmfYLkdJW9h3Hn3Z5DKUER7a",
  "key28": "4rDaYecHBW48Y28JeFzT6tN2NRQVaGskfvLmNRooRkVvwYmyU4h7XT7TqFQhFT9KuziXs6PftHdGjtvCocj76PMn",
  "key29": "3kYngdM9AjydLPW8PYtjhnGq5tpdmocTqRzfdguX9Gwa1tXVvucXV9skcz2CwPd3N6WsqwizKZQ1Dug9cdzTgjFJ",
  "key30": "4kmXHSEEZ9ck312b8FgMsk46kyZzYHABJVETzDTAN65R6t4GRxjimKe2ZX3m9L6NkYpvDvLZDLWtFMY84HfMRmRF",
  "key31": "3RM5jiahHZUCz17gGbEqGvyegT5qLsXqN4btf8Uroh4P5utCaJqzYLvnaNkWwdJLN8j8TBM8NBoZhK4mW1rBJ71a",
  "key32": "5LthnaVFeYFSrdmknoetzxGVbJfvAx1kRg62xMSFdB4RNmU1DWMTUYui8BJ1ybmJoZtyyDmZnZjttiLDqZKE4cvX",
  "key33": "26iysjixjYTJbM5vWZhvWY8RrxUvoDo9J6Kgyi9Vs99gCtNc8Q6ufJAcZzxKoHYEtRBC56Ga3t78tXphnTiqeBWL",
  "key34": "JU6VSJHPXw4anrUWwARqhKA19efTCaCA4LgbwxLM8VWV77z7S9pVRpsStSTsKqdtsB5v162rhWakvdD6aiBJwHT",
  "key35": "3AUesrg6U6zwc27Z3psD9qCmz1Awr1y7Qw1wdmCbGD3y8DYhdu1HyuvmHTJh5SSUDM2rt7jSjPGnAr2X2m3CrGEf"
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
