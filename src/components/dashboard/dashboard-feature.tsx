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
    "BbvQyPj3B3TVihNnPku6r72jKNJscHGQZHCVer16t1SGjBg647gRLhL9co5YZaCFuvkHB1n37vQ2Ssxzn2xCNfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpSUyXZdg1skQipHeemyTyQP7ubGutKoDzJ6jGnpxCkTA8aZpnhAozmKm5UYpnshYHzZNfAP2pKczTkBMWgWGyp",
  "key1": "5E43XSyCqF8KwkoyQxrVxseD8XgmjjUjsDaHSmSahVGfHMLhd1Cm4BpPTsiMB25XsFiwyTKQ9gSShZwXsAz6o9QX",
  "key2": "64vpAHqcCVDAeJtUsvZcMHjT6AkKQbimPDe1spJ5hkiaGJFX1DeqkU7H2LzUejpJhqiVQhbB3eyn4isieVFXRE2p",
  "key3": "5AAfbxpfzWZR4wiFyGbVYVoZ7rBi9b69X9jADR4A8FLA6dPGWRQ512hWT6UTDcBnM25F88sqVbeHKhBfQiwv7fHB",
  "key4": "5Mv8L6fRbC6JDo4FmUHHktejLFctK2wQSqjqG5EKmR9BvuhshJCrH23gkthzvW9wtMsM6PWQZGbb8EsSL12gJMyz",
  "key5": "9AfjzjycZVZZKNar5oamydW1tiqrmZjbUS8jU7xoUKYbaH6d3QUoXf4uLnQPZbQsiAFh6gbygN7QEYDq2CTjTA2",
  "key6": "4Ed4HyRodTFjiNgDbjYthNom7zygiJnCyyQHPAMvS4eRF8WSXBgJzqcudB1t7zgxnhdyU2czE8gD3kDAZ6xktDb",
  "key7": "2qHB7CY5UG2mRSGxv2hD42nhvb65umMdrDhhwj7HGKkN7wX8whomjqmQyCuX1YpUGw11R44ujMQe4m62jbifEwjr",
  "key8": "53SNs8ty1YRivuHAPWSVsgbxqLMjGRuwcPJeR7dDSgqdAejeBiXxYDVPpZoaWNw8eikoXVL34GHsA4fK88ejbp55",
  "key9": "5xMn825BHc4WcQAQy9MUFQCdgbBGhDtLmw6WoYKeT9zMJrWWkMwu3hpzYgfAjgQrWxoFnwMWZP8StDeaWPpk3pRB",
  "key10": "5odHyhVCeaKfdAco3NPNwaJvVRQdUNV3yTzRcgF4onoJ5zkkxLcAYvxGDoH7FZde41tpMp4pom9nbs5fZxifPN54",
  "key11": "4FMS2V2UKPTQD4gbMKvYRa1235wtfaSvpfsravGjeZj9wHFcVJdemKiHYDZxPxyYm77PNTc9YmU31jqLCDr42tu3",
  "key12": "4bwo6EsMdBcL6qebPgPLXb8UPaD7sGYYbN9Dmihhc9FvbMSZK4F3NCoMNiRK4x5e9JPa6J2LwavZjGJjChbXVCNM",
  "key13": "tUrJj4f8BisGEVhCHke9LqFCWh4M5wBp2jLo97e9k7bGnXGXr4Pxw43GTQCFPHfyrJrqjoTGKAJEiQM3BQv3G5r",
  "key14": "553UX3xuRZFNLKtUDsTqDYnTSR5WC8cqP1QSBsBgR8tSci9ZWZB1rvaThdM6KMbEXBs1QLDA4b9yVziG728rtxyk",
  "key15": "4BTAAwt7AcT6oh5gFKuHzDDfLq87mWkoA582Ks34zRpv3xFJpXxJ5sbCgyUX1RfkLW1npPHPVfeXhw5fCGLFsSzQ",
  "key16": "4uy3MsWiyMCuBggkuQCkPWndUsYtGFVrsJ9Z9y2jKGZGsScpjVEr2ZPeUjNtzXSo5M3digL6RTic5GKRdLWSiWhp",
  "key17": "FBV55T4eL1x2PKQ85HCqEHa4yMVBRy5e7KpYKEVGieoP5g6gGdUbHLxWq4FJYadCjuGvbPTCPfahJFsTGxcRJTB",
  "key18": "oCWbc7jBm3GQU3Mtd7SbDgU2RL6A7BDuTrXmFZLc6F6LGPNJnwDvqRQMqnCF88ubZE7yFoLLh1WwhXNpKead6Pc",
  "key19": "3m3mzTGtQncdvuAszqJ7qkhXoxvkUmvGUMMxW3L6xiBRZbSQ3BrbyTrmK1ustABQNJvd5CEQ9uQorv9A3atCCCyt",
  "key20": "y3QKy8QpF1iS8ybeLEUF94JUKYtoepjaKTv98sbVUmEuFhqVDp1ZDqZ7JH5uEHYiRfsqQ2ZxheRCZCD63Hm5BRv",
  "key21": "5sbDQke9dTZfs9wNN1oaFwJ26Cp5EuVVbP1ZWaWwpwpmpwJbbE618dnGax3vXt9qEXryru8vp7wQAtRiqt63Lqrz",
  "key22": "2FrztJ4hhtxLWwZ3NTzR7DJ7GRU8rHJRgBfVXwz6rnZ9UaXJAhBmV274xUD8CsJ7ZHLtQ7Wo7FLXsKZbuFSWcb93",
  "key23": "34iRNUSaQDvvt3chnKsGCFcXsb7JMB3uZ4aqswpVttEytsJYAhvU6YrRwjAzf5NsmH6goBw2RvSfNdgmqGzEYLqB",
  "key24": "4hq3jeSxagJEAKAcyRXFQr1pf28ErdNVn5mFsxtVChENobEzun7mrpcLefaqXwfRPcDqqsuVjmVdY1STpGHNfRmo",
  "key25": "5R6Ff3axTnAn41RHnzBxNHAjXGCoN1MdrhjwmUeFaMY7zWPSPdwYnwXKyzKACzBQt3Tzhg9QHzERH3YvvzSVZoL4",
  "key26": "jqATGPaW6EiDdNHasELAdCefgQBsT7ggRP73FBr9KsM7eKdJiqjJREqK5113bn9Kzpf7ygKo5GPfZ7km1N5qnyR",
  "key27": "4MBimDrC3kW3WZXuDsCHNdWuoviZfjU7aSmWY6Rwy5wJUPEfiauU4P2anRHpWLTiAoUGr1WZth1NgBJcgva8u39S",
  "key28": "4vSCaEhroW6xP7Jw8DN54ppmoSeWn3hZ8jQ1UmZZVLod62ugTjRU7tEtAXFbQnQFqC6rzYAUrsx9atUwtMNre7BJ",
  "key29": "3rpwcATDaDrwnE7NBDjDcj756dRoTfwUsgsYd4xEkSDgyeFYtoJNRUV4TNHzRmQ19txgC6H5QTKWrUnhw36VWaut",
  "key30": "4j8LbfYPiNSw2VieiNhnxnDqV1uNFL4kYz5hZP7BhfCKsEiAPJSHr2kXfHgvZBMrZhtJeKAfKTN2k9rVREu2pLcK",
  "key31": "4AxXr7T1Z2T9bhRfPUbcNyrM8mvdjDbJTYDXDAUKXpjmbYW3TXK5YgjztqoZ4gX8xoRmHWCXGXPictkXtfPr7HXw",
  "key32": "5JKS1F4w7ZiXADjxhk2DnGKdsPxCAqjYT5tzamNQRgcpN9Jwj3rnQah7g6bV8XsjKTk4DbdU5qtb42gjCYQkZM3P",
  "key33": "b6DapgxzJBvPbo2iXzKXGAAxDJhUGq9bYBVGBaWpYP1XvkQFm9hCEvZfa8XBnoJJyKz8JhgMiT4qWFZnFyeA5DU",
  "key34": "2faGLEpNZZbmKog8WTZjeTm6B2L6a5pGx8Cerrz3aCBZi3XyftS9tGg72p4jEMyQpj9eNVNujmfFSZizu4mYiTLi",
  "key35": "3v6LirvyUqnwn4i8qafpzYh7uLVWWVQeQz1FyxVQcxLNjA8aeipdC6TJF8kAFwYoTYuSEkZv4K3XZ7y64pC8M3q1",
  "key36": "5kMmcUkWEh8fg4w2i66c6p3ZBqviM96KV787omn9eha1FmGZJtNwF5u4vBrwMG1n36CGJa7g3xHRsvpUDbTTh9eY",
  "key37": "5UnWm8d8QNBDoMY4PB7CSZ6a1aDCFWwUDuNW25az5BBPbPc8rakE8AqMsAaRqmy1zZDjuS4SJEDEZyJFP4CxfDGw",
  "key38": "drz5Myc8bJLG3MueheHhRnUJuBEXYgaaGcErC3PeLhKQzoJsyP5Kfp9UXTXE5dB1Bk8XL2YLASRNxi4GnQFntBU",
  "key39": "a5nYbfYdzDYk9dmDHRmBGsF7iJMYD8JbmDSA6U1gAbVbuwrrPBhnZtaujTiUbgASMXndGpyp9LmdzfJxLq2BYmy",
  "key40": "42LT3eW6DvdfA3F6aeQram6mTjQ7zR5yXxs2riDu1UTmAz8m421Coy2xT9Bkh8xWSTkNyrQ6c9HJk6666J5QkPXz"
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
