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
    "zDxqPFX6k1S16eb7snS4TWFdRVWXdcLv6KhJ2Rs7WuuvG1LM52QdJttncmsaj47G3KnzJUAgZqDyVpD7YLQhRwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H4aZyZknU5UVAknfXvjq83MnfZrcxS4Zoyqyg23iLX3SG2ZAEZxREKnxLXQeyUMjFWmvLEkX1TB8wKMmwt18GQi",
  "key1": "5VsA9aKw2VtZRzpweFzUB3hTCUDbcHAPvvAnN1GLaXddNhgX7R7vwCuKi6i1idxNpCiQxe7KzHziSVaeP9qdKVvn",
  "key2": "3ZqHBQmx6FbGCdAsvpxHGNEhMKexguJ9LwrsFpjevS3vjDfeUfUcdfVvBxm9j9WRoPeBtRn3cYRbXBc6yANiWWkY",
  "key3": "3K2Xc5pgT9dPLsBzTwVyM8GT3BPL2fDZ7baPjWhc5vUcbaWMevRt5GqQ1NiJKRtfKh8jskcfBN7pjRrwPNqvTQYU",
  "key4": "3KdJtyBjXznK4rD1HguG2iApuq94DsX3KCpsaJsY6PZbMXhvocCVnwgZzWTjyMwdL5rAV3j5GMKThUFcGK7FyFUD",
  "key5": "4KHXMNxJBtDs23EKGoRADaWxFWfCUQ4pCXcSbgzaiZ8zJvznEwUrLmActW6vue6RUyK5Fwcx6ZW8bgJZDFf3vE51",
  "key6": "2a97HPAxjqeenL2eLtmxQo5KRqkhdaQ1NjdHoDZoYq8ZaCANSCTZ6TQazQNV1hUT4QXX44KEojj86M4Z61YLZmJz",
  "key7": "559b5NtTkEPcYqVk4PV5ffUjzuNWUUgPpBiQVUjKvUWTix1pw3W4AbUpYZE9vxbSd11ojinLGvq2NmfuBGWN4HBc",
  "key8": "3HDYvygct46oqKeBQNx9L1kx7XsYSMzszU7xYequmgHVBm6TxAhkUQQMMMjrU4CGR9maciFGMovoRiRrTogvQYHh",
  "key9": "3eahEy3S1NcJGabx7kf9fKAS6VmnSdtmUf3BnQC6E4RLZTQSJU8nRSMZqNA2HUoTr3RokxpheY4MUnzPdwmavCsg",
  "key10": "64AscjikM8swWjHLkCXnj16GMr4bK7zkHkS3tq4NdRGLzeG8GME8LcPUAgzEEJhffPTEh8xPMnQciyNLBtxYJGnU",
  "key11": "H4JMLBSJ5duueznNrkYNCR4fbTKawNHGsBRrNFe1zMrzDeF8oLhghqdomL9oSXaSYiHD9nQ9K6re2yVetYtzFAE",
  "key12": "4PVVMT2BYfTFsvecGdiacMbXmnWQnf3V6uQ5PYyKymoLQsoZ2Q8biC7kJH7kUtQFmhGSUmvmt5W8SovfpFsY3ahW",
  "key13": "2jLpKY7eQsMLgbr6f9yt2xsKUgBvtcuLqbewDiehVXPVDzP4xMk4HzF2cMNcMrwQteVDPRPWhJCiJkoyGwJLcGZD",
  "key14": "5yUpd6Nzp5twVDajC5bSJZoHKuwe9F9QC6RM4Qrt7iGvhdpTciFtmDjTCcjPWMo45Eh9feFBJ5jMZn7fei4wwjgm",
  "key15": "4jxXTaqgRUjk5mYbVx6W61dJMyACRCNqqHo4ojFqaxT7W2m5udfowKsZCaXRgB4TttxXhMYMkYRnrTvtgGX9xR8w",
  "key16": "oiSFQCfwtQK4kxv1qKWMox4xgHM3UajN9qo6qPiCmpKBSKunGfsidWP1WSk3w41WLVVNsKNhvxG7rjxRYGGnjYA",
  "key17": "5CtaJWLmBd9dyB97kDmRj1mbMzjJUGskTZqM7L16LrrG2ebnvrCt5Dh6P5nExBY2NrhVHVkfmDXZeTGxdSoUbmaJ",
  "key18": "4tWmj34SbGg1sL5Xi7XtLbvxpm2LFSQVAdKsFygFCs7Yrhtksh7FAHehpdo2keq4iK6EV5Q2Auh2TCnzvivNB59N",
  "key19": "2J9Cskh8s6md2YMQeLxBDn9cJA1u6gFXtTLPhiVWrSViMxQS3WBkJt19kXBcd96Yh5uakeuwwzK2QKSJ51r5vttP",
  "key20": "1CPoycZazYvgwWTrSQgisxWdBJm1yPMG4adE7EWUcsBrHK76aJqdskrz9JEGe7tEFcS9VdB4dLad3EyjyTHmt7r",
  "key21": "vFzHXt4u3nFQt2oJC4YiDQNUL9kdWXLURxyCFN5JwfcURsLJpHYYEjSVLe7t2oY64P3iGUPNMXHZchUbBGPZyA8",
  "key22": "2mcQbP62wkDPodnknErkziCPr7S6LXRUg81DtYBTB4NjvgVSGTfrgJ69F8tANNX2tRQE1DSp7RmGFYtTWn2MAosx",
  "key23": "22qbNjmDQnTH9DoTSC9x2gSgQpuMphyMFk26dFMt2U6ZsgMnVzq3TMVFQv4sJ8G9KBCjb3xA72yQwcpDgmkKNSxH",
  "key24": "3aboPjNmTJVZUfsG82E8hY1iCLkdmD6iPZzPxpDARBQ2uP4zXCpQRa26unEyYVb9tiMGqB8AVYMEEQ7jpoxGa697",
  "key25": "2wCNqoBTr4x6pcvZVWjheoq6KZiEqcMkJaSgxuWn5EiazQB65cSfjtNQN6Y7b2ToQh3ydSBnkP8XBrhwUGuJSv5c",
  "key26": "5Pi1nJZgpwRnGYgn34FdNS54gEJAi9uegypEKdSUvwG2yiGMPbT9WmayMW1b4QYsTTuQvU8sbxN8FWNkprxnBnaY",
  "key27": "2ZitVaSCWTYSY1B4Z7GAbLu7KjfYdqtXJoyk7n1UGF7Jkkd7CDqveSAq9C9WgXg8TNPAiZXqYZ3vyP7UVAHCvDte",
  "key28": "4CvG3gbLxXm7WD3qkSr9dZuvfkXPcixDLRTh7zdZ11BGggYPYYQkGC8JPm85pJSbDPB8WqZt5dpKcHKTu1hsxwfN",
  "key29": "rDpPPKMkZvLX3SHmYUrigndA5XvGMN8JtCbRQBoUkLmameoztR2xeuttsax2A3PJSFdPhsDwKLHWyfaxapoGPtT",
  "key30": "3sKTR783dCqukLQE5YF9D87XuPrzZE5nbbiRRcYg4DyxNEF6vkHgKo24ansnt49BddJEP4XyjmF7c8Ue4tenQQqq",
  "key31": "5BUUkzGWgDy1hGjE3Z75q8DVE6hx3WGDLWwCQY69uteSzBR1BnDZiWHd5r2ajj9Y8u6nX7od8JqME4GLEUouUZGe",
  "key32": "533xta1TAMoYGcTjznNgFmtqCbXu5GTbEGLuMy6VXaqCrrsmXihsJkmM1wngSwQXFVywCbsT5sAyobijLzNzuTfs",
  "key33": "3fRQdQ7V42hFcSqt3oGbhA4GtiJxqA4Z8NhpEEQ4Bz4f3yGy449VxftehG7DKusbMxEvN8ZAtdZmGWyKrQwvNw3F",
  "key34": "5ahHHDCyiK2tzeQeBoNzCZtUH5G3pqBqrV2cE8n84jDQjcnMrLB2XeRxZmo7nrjM2CnnFU82poUWyqGVZcYB9D1Q",
  "key35": "vTe5inPEfTwjJ31RNVr1BGYnDT2AVJJi46CVcUoSHhMvTJtfYBsCtrEHYexkU8dUxJ832rcn9f1FCvUBVUaFwkC"
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
