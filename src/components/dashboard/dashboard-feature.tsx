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
    "5EG2aDswSnY9sQEV4XGgCuQVXQXqL3qTxziNRJbYNL8mv7k7y3pMnQz3PAwWavmAEsiM12UQcUmbfJmWDJwkvz3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkqJuTdKLse87B5RtgB1WKtMw2AD8ug2hAHPmjczDTUSWB2xkhZg5zFufGLCUEnDkYw5B5q3jcD3TiGEBLq7VQ4",
  "key1": "41jHRzcsg2cYRGxiK2SJBfGe4MGqgbsHcHmL3Y13ueM5Qs6QLpcqsNaE5KwttbhtYR1kub6X4xV4Kakr4eEzy41V",
  "key2": "4W3HkpF6FZWmHxcCmCLLbP9S3URja1xf6DcHN12K2RsfsfkDdhAyBoFtYryeNrQ92NRDpHU1p4ob4XUzn8aVkes5",
  "key3": "2owtogKXo177tUSnCZWxWxCykhmTLKc2xJsuhShU8q5wvruZ7PJBzAj1vYaAZGRUeLo5hjtb2Lzq9WDw95tmrmf3",
  "key4": "QbgjrA5kjtn9XdQeBwediytbDedoWLNQyjoGbnbqp6B3ZmCu7Uet9uiw1y4NfKyaLHU6a9Nb1VV1LvfNtQh4rNt",
  "key5": "zimzS4MkqttxfCmEE5cG8ZfzvKeaGTgfsvHN6aJ9NVjevwPJhNmKAt3Uo72zHeMs842yaNLhdi5PTt6uU5kmuup",
  "key6": "4uSAEv46Kems4fGh9z3Yszz4gJYUPLN4rUfKf1sBBwyAVH9Hnj33pbzmYYrinvCQiik5bu82rpTUCW7LcfaD7feY",
  "key7": "4BuSHBLuiW2eSjDA46JGcjNcJn4j94qLFJy3BCuLdMTPUHdMeGAhqeKjPHSGefKXkW7pHy4219WewCBd1b6GsdeJ",
  "key8": "2sP5XHZY9tzkHXUdrEvo6vrxBRifhpbja6Hg8r326hEwMnkpDB2Edqu1SRunFKiFB7wn4wE2WseJquqQAKytjDjG",
  "key9": "YaskcRQc4MfETsjqrGSWA1ivApr1AGFcTdj7mYQiwNefHQsv4RMayri8jekAf6fbpTGSKSiuJAg2Tu2PhoscuY6",
  "key10": "5uWwBYSLFPbzQzkLWCkK2oZdDXakVrChsWhQ3xUxx6QLT13njBfAzPdL3X7uP5ryo2gezDSC12doumZFmNPxqBT5",
  "key11": "46pw1f9npedvuCn3QbGnEGe95Pzc1CasH3iGGVW6T14uFYCgVnLxwWN6ZAZy6gPn1FF81TF6fiy6X1NwYh5YmGFh",
  "key12": "4iSpxESyxmVtq7K2NeppNz8kAD9jGLNjGUeiScAHVDJkNiSY37pbr5ufP4GkvN5whKJ8NNhhnpQdiCG9qsPrxbnJ",
  "key13": "3jjYm3i5mMuh2xRGZJUGdGCA8Kdonp5GPfHqFXKAEQjnRXn33p6pyKGCejThuipCnvD3uRj28aSzYTbaKHXq92Vm",
  "key14": "2zQj6Dg7ABnMV5erZnpL4DN31TDtRmYmJmPWVjDVsjSHRrx5FSkWQ6ddvTYXYD8twLvmEsvY3o7REj4q7GLfc4WL",
  "key15": "4LqDTSgBQ84LsyiWjn9hHS4S7YgGaQDSiE4gwEb9uVhbGEgJPdujFcMukKvEnx6SfQjwmqgawxNYqB4E7MLaKaBp",
  "key16": "Q6r6oLKhvZdvtxNFUEk6tRvuwNdq5ER9YUJe3cAh1cvPDu4aDRrCGnLgsEVZA1ATNGnqKm6qpx5HjFVtWwjsdFE",
  "key17": "47AKiE4DBi41WFM4K3W9vwyyvnTLCWT1bPzG81pJp7tYS8aHp5VqPJRUPFmYn1iBmjfWVyjhKF9LEB9duPDEdpec",
  "key18": "5MYTcYMzbkkM7ZWFpU5RSrLrrB9SGnH6qrDq4nWK9VtkaBvBaPM18Nn8UVBsGryFuMgSnpw2avhVohwERYTyvx9E",
  "key19": "5yQPS6c1fqxEuEyGekaoxJQF9NFkL4jdzSB7yS7v7vP7CV29PN86VxyLSWAA1a9y7BSMXTSGBna2MdK2qdq5QboL",
  "key20": "fNzayFYrB54cTbC6KmLtfmJbXawbrEeygcyqhSoJDiwUhc4a2F8V5uUdv5DLrKzJodmfoWot7QA62RaxSjbSPrk",
  "key21": "5R8T2HWd1V6uaHaY8d2KJY5bsWB2z3RK7kupJ6MCJ6iTNjnF15Zmh8j2WAZ8T66aPkbTULbawQoXCcgLqcuMbCEA",
  "key22": "4yRnhSXDq6sVYZTxQiiR3CBQ7JMTaU1gtMsPkbnb7czZauuNYoyYWVuV6vcjCPokwj9yvbgQuHCh2Y2ab5rTDUQ",
  "key23": "4TTE86i3BNgG4J6HnXiWxxoDHidQqmCLCb8jQZkwGLNFPXYAZ6cJMqgqrxuprh7wp3B1xARtjUM6unutPzfFVLiE",
  "key24": "4DcczQnuerQ3b7tAfkhexsH9bea8PgRM6aB6pxM495kn6doJ1FJJ62m59MBR7ktMPPip8fZ8bWziP5WUan45jMD"
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
