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
    "4Jjs3xDmo4bqZSqKmePrKscnoH71rXf2YK1bAh2wB8izPe6vmtCJTLMs3QF8zx2cpeSTQQMXWUVdeTXm9K98mLgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PXYCE2XeCJCjvD1WkkqHPUhNPkzmRbwZfMz7ApV11swdxS8zYUZSKbDnrpeJ3w7Gm3hw6VJxfaqoA59HsAzeeaS",
  "key1": "41GAK7qG2HMUqzcnSD3Es2MwxTRnGSZ1vHDUbksPWPY3uVZ2dQ8vwY1sjmfJuRkU34zRCH3gJXsQe2y5RBe4NPWQ",
  "key2": "5ErZkBQm7REWv2vvrTNHPZ8nAVJHh54iyep7fRJiDtHMFqtzVhz8GRTwFXAUDWW8izDLTNtUrnzFt83J7if1AbK1",
  "key3": "5W5GGVFKeWU38DHSRYD22Z9sjNusSghRqxT4EsM47ng1q3TwdsgjJkq3d5on8HXKMEXSLnhMdKN9dNRkTjK7Zdr8",
  "key4": "4MRoq6UKhMewPp9iAQjzpazMo9NJDoj96qXF9tKigS1aDdjcxn1ELgTGeUx3qEKT1RsGqBRQauq79hyupCNEQGRJ",
  "key5": "3ogYpChZj2vWy3hjLniPEEL6q86JCZDAuSydK5dKtAG146vNdSZrBDbcYagy9Uw2ZfsCppcAeBqdjj4ZUw1hCLBD",
  "key6": "25uxbG4UkgVc7LjRv3BWNAbYUHUSckm5LRe9aXrbCuU9HRiqKraaugBW4PWWYSiQy1hyHaoemMnpdDpsZQ5CSd25",
  "key7": "np9aRcCEqkZHFqMfW3nWmHiWx9ruCoxDdym8QpH9ZKLLddhy7cKnJGstsuToccsKmAdymz6qBKhjprw6zMY63kB",
  "key8": "3vKLRZj73121uTYS5LEKoShRGC3Dcx8mqbV8FqXXywW4GrCwCtJrTG5p5JnTWdiSEE9aCbk8LntTBSGoABrPLHGX",
  "key9": "YoSK5gYZ7bU13ViBzfa1nPt19stSzPZdVpEzvfLQHPwWTviDFEt3yCVb2eFr35mRMiu8JEt5JoXw6o6RJughj1s",
  "key10": "5o1na4mb9EFPwiej99gir3UeztD6os64V2ajN1Bd2gC4ZmJpzt1rGdKX7eAb44mz2iFkZSyxXjpJHRdLA5ozcynk",
  "key11": "mBnRfvLf19HbEUyv18BMUQmoC23KT1v6YtPMRyptndjPj6MVP33z4v8nn7Wc2wZNki84yp6hzBh4pFo99kZxQ3y",
  "key12": "3axTLduE1TiCz7pfAnuUXZ9yXBWmRPxjKpD17zzqqTVt1a6HUN2uK9x47EuvDghCRS4CMkPJTvVkAZSRM8WKDgB1",
  "key13": "37nNngendjmqxnQuGZ4sqhFhE2BK3ew272WWSNcxRSXtsbQ86dgWvN6MCkCeWFLwga2ViTH3fLnMxsscaeKQf4CK",
  "key14": "RK8KHZNNNUrLdHgEqx1qjHXPBTsjgSkmgGJaCrcdKGsQqnE1X5NM18wpthzz7xSoi2q4Kp7iVGxsyVx2Nbv8pYF",
  "key15": "22h4EMsrfDKN7uUers24a2nj9VJ9sJgva6S4qFdTAPosyp5VdfYAvyCySDeHGMK45ag1LaVxJQUWWVypjUSYCV9y",
  "key16": "3rS4rMBysCZn1RYewJY7dqe5xEF4dFqTxMisKKN3ThmBf3xPPgtmXV4hNpD6NinFQBZpFphryKA9gZhA5qqmhCKT",
  "key17": "4GZ391EPV7ASoVF54Sq1fGUiaMEBzEwhbqH5AXEAS9HtfuM4YtrktCyWio18AZStbNESgJvey3Rz7Skei9Mu8aaM",
  "key18": "4CTFUkdietXPbKtibtWcau9UmqpwuqkDbGe6DT3QfczZvaCDQtWQXv85r9JftLFAkpmJdDJvWSsLrDVJ9EmkhuE4",
  "key19": "yDbXT3LukHvuXpcK3QqR3J8YC939PXMwZ4a9KVtGQb7wFBA59jkm5CxxH9SWP1dAX49jjpi3gibmAuqUWmsb9Vi",
  "key20": "2UPMnx4zjd8aHu3SsdPLgBF1T2B68YmpZ9DUWzgAyHHLBLSf53MrEf7LjR6BWNAGNCytJM9xnvKNUzvBx6xfDR4p",
  "key21": "4jiYp4ndchLCRewk1EGJc8DJunVXwTkUWhnoW7qkh5UKrYg2pYCWKfUtapfMpv9tjDvE1WbKXFj3AAvTZK8BeP2J",
  "key22": "46N2oF6x1VGwgKBmRmhmkH7UgmgFPSkDe9o7vLLYqB3g21MSHhe4G5TJzYdSM1rfxgDwkAn6Mtf4o1ZM8gnvNbTr",
  "key23": "4XUGpyPokS7JjFXpB9Zy8A5FxqAXd8x28Quv2ogAwd92gom9D7MBnA9ocEehDyDjduetqma6xyBavmBVwaf6iGDw",
  "key24": "3qprJzjeUvcf9qGMpUhUDoTtYKSKAUxsKGzs3Aof56VRU3qZ64MRGtqrzDx9bvrtfd5tXRNKeV7hbRVSdqu2fo9M",
  "key25": "5JkFscBQxaMiv6cZmMPB4YhbstEU56E8hZM7SsbVyqfAXofsVcE2WS1qVWv7RtsRMYgauRXVKE87dVPKzTugmEah",
  "key26": "4ot8ittvhXVCHAAW2y9maaP1RmkSbnaEDiQNEJsNsFY7jm2AXePiQeybBHTnawWGKXC7KycLWeWP6Pp1FNBQmNQT",
  "key27": "56PoHZdhRVJHqSekN4ZJvaFUrrRELwKqM3Afqd4CxZVqBVcMVv2P4LYfXa5AeMyrryVAQmQpAsd4qNBJmYivUyUe",
  "key28": "5PtyAjdRkxbtxdFf5ZTefKpWNVT6jXHvmMsjUVowdj2MQYtJ14VygUJURUyHiQX6q6PcTfhYNoimmJYmQ53hSeej",
  "key29": "2Q8EtuXSzLyQR5dBkHkBg9LsZXPENpzBoqMae7ySRXCRvB6PDPkx9JyH3wTvRRLboe5iLCyjvcyqNQGrVq9BujQQ",
  "key30": "2udf9AQAmaCF2HuoGHTTSoQJxkYRCEskzhmWhK8Rm6bYra3aDPopP4c7qcgoo1CyKEwoCezLAYUQPiye3d2NuQno",
  "key31": "2Ew8vowBkuTGE6s75JP33ixqVgZLqfm8e9KBfv9wzmXtPG6sx56319C93KAUxkARC5SivN2uKtv7fdCTJPRJ4sQM",
  "key32": "3JHv8wiLkFtvojfAGp8UkT4WLw8LjG5D7vxzQgPL7btcHZTEUYkWnAZgkAkKWtt5q5d6isv6NA82asYVxY9ofkdY",
  "key33": "PPfgY4qQgMD8whRR3EAogqHjzARdJi8A3CtofUv7zj1Kjy2891cN45EFQ6wrc27HnxAMnbDDYuT8DGK16de3u1n",
  "key34": "i5aebDEm54bhXbhHhxfHK7SXs1m5i2zz7frD69wdL7SzrX7LvaT6kW2pRJRHhRjENezct7g8XxDgqJmtxYLST9Q",
  "key35": "GgiHYBJ1K5MFXd1T4G8sov9gRgtezMwjYToMaPGSKxVMncDkfJqwcxBSpvd1F2Lf6MrovguTbYeaYA2msjW4zJe",
  "key36": "2adnfcJ15JvpqKBM7R8eocTToV6BdCCA7KKiWmbh6wHaFFX97CsLHNsMPtB4f9F68FfoLKnn9GhF1vFUVs5AjUck",
  "key37": "4ZzyDooXn1Ca1sZ8uYUZX1VDTtgxDqSJSpjj6qKLzo4kkhe6xNiy8Yqytr5qizRCxncjbG3sLayV4Mvqj1uDFruX",
  "key38": "4eXywm1x7ZbWpJWfAEMHHR3aiuYARxbnGudsAkYbJYdp34of1MryXg3JaQfELutE6jLtDaYHFuVtqjfRXwyBPEZs"
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
