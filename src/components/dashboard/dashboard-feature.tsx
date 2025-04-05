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
    "7v7ECpnNpheCjBbLtFxUJz4kR5zLUfDGd5xm4LZAZCxFq8VgqE2SRCDodXzpVqm11C26SRiagVREjkmCTKm4qoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrXCMWx5jrTiTS9H88MNB4vUGFdS1Q1ZXrNxG76gSZN9NDE4JQNgozcNzrLxfGrKVrxnmaYdZUcT2EfUPTz9E17",
  "key1": "2j8RXLrr7m1RTVBLXz4r4b2LWhtedDK3hwUdvQLPLXfh8byonkW55gN685wuKy3nQUfZuPPvWykEKSTkhJUrTLYU",
  "key2": "hBNuFuAKchpQ2SVAcyYh6zeGESg5dFwUZU51A1kq4BeAszFG6GQpt4W7fp34PAR4yoamfNKwnPL3qxMbmxjhjC3",
  "key3": "4evsXB5TmMjVfxpRaFwHfAsEYzLPMF8yXKjBNhUe4iggNJJddJiTDujFhdWn1NBQR583iwz6W9ShLsQzV1hrowLZ",
  "key4": "5HhZwijFYS44594VBksiaLM53epi4hBRvqhDGBfGPHSPj7T9JEmEpUx9ARAyqC8Gr8W91yFu1mxEZ4zTaHzBPtx3",
  "key5": "2NZ55BTMZDwFZdCwbM4wWQCPx95fhjSTaYpgCXgGtjiePNQwLdJxnegBiPBVViWpwG6gobq6R9Wr5NUNvqKqzZnp",
  "key6": "3PDYJywRUCbLb5yMzYiRaJnecN13jrmLi5z3gkoEx5MpWD3SmQEsRNkMgJ6MbMbs5SMdo6RdRFgrVWgMyvPAN1sp",
  "key7": "DiekokNjnXa7uTY7Sm5iUnxPTuqBZmWafjpbHDJGaoVXVakMPVWiQ8UaLpdnzvdtgr68SdWYW7tXaX2nyEw7uDM",
  "key8": "3bqp3sKZwDdedqG2mFcgAtzxCyrmANipVEo2xJZ1ajAxSHa5TQHfU1mXuG9oLmFjatujV4xsg5o48h7oBbtvRyex",
  "key9": "MCwX3MqQovMu7emiUoGEDJvU4bWDknNNLz532gbbuaj22QYTAyq5nairSec1rupwwaY8aFeAxCgn4esY3UfCxbw",
  "key10": "2Y3b2b9FhGGEG51jUzJoHNTjmuDt8J3PGuQrWKaEwBTWnDfv9qyitrRJb61JApcQXyhcA1joD2u94cYn9PbDBgYE",
  "key11": "5X9Ck21e86RF2dVbgevm45HCip3sV471QnyrPuouczT5Pk9jTzAfnH853EcSBvq3ji6hANC83Hje9TWnD6rDCkNp",
  "key12": "Lcq1EBCjSYLwS6fR3anMx7TVCPei6aD3dFNbFzDaV61DjJRbJrbakPznqvyt6rEWhKyFCmNcFZgcXncqoBg4FiX",
  "key13": "4fe2RPEsPWWZHSq9UX5WB1kjBNJPAJKXjimwnU4siM2jiRkdKn1jkZA3vuuaWo8UE5nkTMSikxbrhjirjV2sKqps",
  "key14": "2b8JWsWRrnCExnUEn9L1RcGFPrXfDvZKKbStfmPX4PFVyRKeuJUn9RAAj6jqgnUusL7xz9sJ6UyJ2CrXJSvN673Z",
  "key15": "4njCrdwq7RDJPqRVC46XYK14AMyr8ZWzQkKgg1JtGUagZcVqWYX6cmJ5rR4YbeGUcvCpvuGw8M3kSVvQmEo59Tfa",
  "key16": "5jULG5rr1xrfko3H1ozhWWaXbbAU6SBJr1jhAY4Bse11v515Xn1kMoxRo2C4ppv8hcnvg45ufJQpy8UexK7QnF5W",
  "key17": "Po4yJZHVJM6gLw9REwmuUGk4BebCQAbv3taMkE59nYcf14ibL9ztSij1PvenXvx7yYENAgyustwgJHzwNiFN499",
  "key18": "PeoGmNttKJDyNxF8m85e3cNSjBDRJEyvDxPw9SBez7DNX1ftohdQGThsoSeAmhUVCMs8GRVZJKAkZvHh5A8sqwR",
  "key19": "583twr3AJ3adGKCL7EWyUTSfwPcJz55M8MmpXrdJm7A6Fgj6Jo1aWborbrSAQsjuGk2pgCSUvzetN1JxeNHaZiw4",
  "key20": "3Xcy4J2T9iZEbXvqLEg8pwfdj9EwTaTTPzcM3VWf8nG2AtfJaA9GmR3XfAaihBz9SYB8KbHxtX2ESpv36cagLK7y",
  "key21": "5FC9hia3Qc5c5pWgSJ8JgTw2XVjvhhQ2k4TojHcfiobBPoVVDepr42yPAVw6eXWWdtthXo4aHR1k4aBw1r4iwsBh",
  "key22": "4FVJbnJHwRgTUuzUvHxBe6eDEhwaym2VPgwEVgySPSsNK2nx2guYK2KBpdyN6NumREvhd3kDt9GHmYWvBr6Yd4tj",
  "key23": "3Qh8rnd626RkwUpb3dWFcF5qAmBmY1WumQ4DwBtRCBW1ML9nAvJqNFfzsAApWJdvWkqx9QRy8SM5rZkuCFFEJqq6",
  "key24": "4jxDbcGpH88hDNYzYo7Ay9URASw2tvrPLvXjSXmAjiZP4FPNVbGas1F9yL9quiyfbR96BmDWYmx26RYJpEYsx7f5",
  "key25": "pnCfL1fJ8j5BcZXaaiMcAwqso7fgPAfxyWfr2gDMZPYYbpUQgqQ2mhnjJAR9GMLJrLUm2WPC6maD1aStfuNSVkj",
  "key26": "ZMoJSPjGQWTH4f4fxqUihKFHwcYfke4V42SapvQbZKS6wxio6cHwAC4V3K8kAwwrT8MgHMZaXQXCW3C6SjK6ZTf",
  "key27": "4ZKNKKbrhJmbTxq6WrCbk6v4w4WoqCEuBwer5ukQYVqEd3aYL44eCq6g6pzVBTDf6AfcxyaX8ntkqmqMjHNHoPc9",
  "key28": "38rcLwc9gvb9aqXdv9F3DFAkJCybDUBxhhER5eoCsjujJxrhuD17K8w28XzgfWQk8UFwQXUnA4Gbwj68WLJwskm6",
  "key29": "5aCNCRWRf6SmCYVS9Eg3Xk8X9zPqCZeuuRXp7wQheGoFD7YtoMfMWJ3gzBPAwrL2SXazqxqbLwPMbuFRJMGsRjB7",
  "key30": "CFVWC4uheo6kdg2LNHP7WGa22M5DW3SjcWwYSH98WVrgxi16QCZCEkdirXu4hJh4QWJGZLHiyWTuYBTkK8ypYLx",
  "key31": "2E8gZPHAByyCfEdP78gR2apsAzZsiPd3Xz3Acu4ipt3hXxL19xAYc7JeoKL6jrc9iwDZjAbFjLVZ8FcYE4mBZoJo",
  "key32": "4L7SfR7nSvSbTHrCdgvPMHLEYxSMLjVAAtBVpQFW2ENJUoqHVxKQ4RRepQipboPXg6jpyXwbG9H4QpD4KUdzsQJz",
  "key33": "5XgZR5GoAnRFUUmon8CZAJVqxvAp7gsq8tNvxM4tfpQSBNyS3wwoLQgSvDsT1w6aBHK8Hb1DLaEWpTNjrVRhvTtv",
  "key34": "5cQwXR5YGHq6NZdvo6Xepzr42HK5edUKGniRGViZLwsfkX9nej1bygtERBTGLdvjYWMiYQmcZbRxEbigAwsxZqvU"
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
