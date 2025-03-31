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
    "eKURyhpBZ5wApQQQ5eZVf8KMg4YfC6ejwVTDHDGcPXQc4wjGRoZrSgJNpPbUbcpF9dogAwy3wcMHgJxsLeSMetz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bh8eiK7R19NfNWBfpoVHWGWcau8qrka4p62pHN1DmvuH2TueJw6mX2GpnASs7qrJ1g9dBEN113fcUVhSmyceykV",
  "key1": "4mha56pXgMoStiu8ZVqTng9EEbQQSYyvuRiAndSEUu6HGYLV1aejUFKH2XCzes2FAaFefD1iVZVRW6FzmPCHfLrR",
  "key2": "47dGzzzpBp6qNJBn6faU1yxEv1vPfXvvKmXiEpZ88hXrAgFu5L4pGybh6WU6eAmsQXQWAHzeSur89tkEUtXGweoj",
  "key3": "4oLNXqJLbMnj789fgbPsuhBRzjhxX5RiV2njQKKssRievbRyHHAdNxSZ8LqPYASDfKWNQRgTgmq3GvvN9yfKQ2cu",
  "key4": "3TDxqFWTdFmn8vSkdDXpGFbkC7UxSEKWJ24UPoYY99a27MacLTLHMv5odGmLihjxgUk5mXrko1SqHf6KaA1vjHgz",
  "key5": "2L4EFypYqhJxW8UWcFoiaPJD5hHGJFRyh95bQGkTJRnrreT8pE9erDwRCfi6Bs7k4bR1FwLfgWfRrAdPRhjq5VZc",
  "key6": "2P8xnBYtYUm3BvVFYPo9sxSm1YtnZ5RRURtY1stiDjnbLxdEPbg5GJ9G6mVtGDnEJZURAeRwTPtQ1c8ncoSotzzB",
  "key7": "4ssC6L1kryUtbAy4rxT61keRkgv8kgUG9QGaXNL4THxmS4MusrfUvbYniz5FzWk8GPtFTVSPxNSVKEuk6msQ1X5s",
  "key8": "4bDsjgyHhdavpP9JY73Bc3YxTE4yuzB9MA8RapqmqxyKERs22MUq9ysACUhJw62beyULDU1TNFnoF5m6BEwvR82q",
  "key9": "3C7gm3ScBmFtYzse4fvbmCHeUmnrUAYf2C5kEcLBi8YaJ9GNdSgoPGZggQJUb5wyxvoUR2GiRFRAagDCMsGzSnKc",
  "key10": "NLRq6BxZZ9s96f8ooAAyYr6FsvS3poRtxEMcT2p51JbdxsZkWveH3cqn4EtRwanmTFkgt64mJoTjQqnBBo7EBcc",
  "key11": "rEPZkKecGqeY3P9KHWwu4MUHi4XtUEJKv1V21FLAanwGhkiFtZhNqbgEV8R5FnCGfQnonhmtHppZ6nR4jKnny8G",
  "key12": "34nAgUNXGt3sTopK4vbVVr4KhA4o3wUkVLJcJYPw6qV6FaahQYihgUJbabnoCXHwcDofoq1hwicKR38AbuteF4nk",
  "key13": "2nfd9MVm6e8m1BNWwyTuHeAqz9ALDG8ANcWpuGQcnnoZ4qt58BzJ252ehmmrvhmoqgMphmzQfSVS7RpdFbMsRNd5",
  "key14": "4KMr6HmCyXdeCn6dsYvrzz1haADGNoT1qPjmkfj2LSYVtz3CF72bQ9dto6vnJwQvr6wgYmaDhuToiL8fh5VWmrHm",
  "key15": "5Wwu56wqcU8aqbaBTruBHHLi1mmY8gBPEr6xcCkTbi5sJrEuwwCvGTPy1QKiGdqo7FA9BgHSsABBks6tuCnA7CUh",
  "key16": "4zXNvMdVHWpigfEhxyNzv3mU3BmihEPoLCSeaBS6w6HiHqjRzchNZDpqE7ds5Sh5dGC2hG9DXsZQviAFNmX6H5zL",
  "key17": "2jZFjSs86N8iWuyf8KpnEKVqD1TtzMW61HoRbiAQNWxUcAa6DDc1q6aJL2iqb1qr4DpX5aYoGaJJkCB7XD9H5V7D",
  "key18": "46j8DN6B8bgPPrBXSWcsiwbUJQQhTSxiLVoqBLFvZZygY2B8RLVNyc6HEWH2fk7sFqpzC8NLZFiAcP7wRqZGXM9N",
  "key19": "4rtv9LZwYVMNqigj3xvJpTnSseXuu1Zyy6cvr8zH74yZq1CZQuJDSt9rbLMrokTuNJSzVwqiGyPe61Z5LozjwL1V",
  "key20": "64Nc3ZHfFQdafYqe8e4mUhAhxfKj57Bco8vtDes9S7YxtYVi286xqD6NAirBfbfxQdQ9SfbGXjzZCymWpyx9Qejq",
  "key21": "2ySgSSAijuKpBqAfW4kXDaRWw3a7Z8JyugmmbjkLtXpRJsbyz4PhXnMyZsQqgCviUQfC2nCj4NuErWBZVxQw5ii9",
  "key22": "4WufneNpR5i4xPh5DmbFqw42dbpCxmnQ2U3hgdtKffx678jPh3qoo1SfdZD9RjXHve5U2Tj6tCSBQHpSEe8DQAEC",
  "key23": "3Ni97N9vv4nxWUp3JDu2s61HH5QmWbSS1jbqpfUm7cAxyGdr67u853cRjjZwyttZzp1eNdq9CP4nDx6nW13VNEkb",
  "key24": "23nkrxSJQ393XSrDFq54xzRixabMhg4CXJqgRYK4da9sbWKBZ8eav1XhBpFJxzbP5GjZAXb7xHY7o95ZjhyoxtXB",
  "key25": "1nqe8KLhbZcSpERGEmyDM7A8DvU9gn4ccbAswjbc1werZ9SKsEuTPTsUq689zJTk7SdHyexfgD1zeFnw78GFx2p",
  "key26": "3Yumh9koxzmzGiA1Ddc2B8usEXVNecY9aUmKx5EkAuCSbBNUPurqVGmKv24udSbWPGciUa4SapY13iDzF8f9gpUF",
  "key27": "My1RWnjsNYin6qZhgSzXsizRDNJ8XSH2vUTi96UjFLr5tEJSGekJQJqUNfsCmzVDA7H6f8VPA7PeWLQaDf4o4bq",
  "key28": "qPcNpH1ekcSMZyRB7D34EzyVpRNvwviXJY7CsRPccGcqSCNrh5snWf2s46QTcZL6wwNAGtPCEJtYsySyYv3bxyw",
  "key29": "5fSpS86ExM7PV6cbdVBAcZJCwqqEJofVJ6xHyK5gunuZaRF85jpgPgwv71WDa57BTapuH95nHUXHM3goEm7egdLK",
  "key30": "2PKvcmdtyNiypp9oAXv9RF4nbhnaakFTR293eWcBNgAeWaA468eQdDe9KZBgBq45DLV8MsrZgKujTDc7hm7hQcTw",
  "key31": "EDKfHeFBqvJvNxALaHqMFnbSpfeJ3pLEZmdVjimTDDUYStqJBfu4fKv9V8eghzreHMdFicWN4esSjS4j2F5EyRp",
  "key32": "4Ktpo9m3Q3eGDRz6L1nEaripgRLgMCKVP6QJETe6itHG6PrJceykM2xL95g69hPow7sqgBeSoHZ59di6iFBFoKen",
  "key33": "ajDGgTPPyZ51RyV3QsnJKpaL5avGs4yDyGvXY38Js3STvgS4jY7Uut6E1Ey5XwPPCRGrhAQ7QopnWfBfSLYkP1P",
  "key34": "22XJ9X7YMGn1jbBGJo62PrEuNMP7ZzrUmQsz8ViFruQ4uHHJicNuoW5ZgRXhxcqycb9ZF1YkWMJq5zqrXDXaNvve"
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
