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
    "2jgvCCfSyq6rpCFqXLc91u8J6iBCgVzLUNvV8mPCnS9yhr9cvgTRiwPvhF3HRxrzPhTbh8gPZs82ttwQ3FfJCvY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxyH9Bht516JTA2HiYi5QCT6FQfb6fDrYLoaMPemqhGRZM1sHArTtU7pBY75M6SjMvW6LqYvE4jw6tw87ereLpQ",
  "key1": "4i1ou2oxubfUYhhrDzvRia9zXB33m9o2t7imsPTd5NgF82myAEhvfGg8RQUh5UGcKD4LQ3kdX7EWpTGG63uKsnrh",
  "key2": "5Re2ULgdFbNp2GNZZwV3ET2CZTqk9kRgyBKFViasRqzjNXoVV574QKC82q6fY18m3CanTccoEtRkHYRbdinq5yLR",
  "key3": "4peceQxqJ5coiHcm5evvrTeszx4EcKQWyUueyxi5YcUT6LXFZYCmeZsMGSrgmhfAGbYCuy7TwAWbA6fK3EcQvAoG",
  "key4": "3UycHbRRzccGRKxuzqd3616Vr4Wwf5WcazcWiffJdPoyrAj4yqYWkQ3apvYRrBh5PU6sCdQwA5o1KBj1EW5ddLs1",
  "key5": "3Ybcc1xk6j5qTjgLtsKKaH3MiyApFDnxpJhRG6iu5REFNExSGFF8UNmzCkP9HvkW1di1CZFte5P9voqd5G6vLq8n",
  "key6": "5sRvt4PX2QNNtdUEWXKG2KUjHtwzypQuisiKyoaACbq2ccpcWECiCnAnR3N7vLNf2NcmSjdHu6YMCX4hu2jmaXXi",
  "key7": "4UhjTuwBD1G5mrYtrBaKDbCNyaqYD2jp675mYLhQTjFnjB1hnBMyTcWjGZsy6EDMqPLcA4GV15xsQ8HgvtGxybpB",
  "key8": "ergVVqcrcoyfpdumPfsFhCT9uAa5AJ8stJPWjJAvmj1GLmxAG3yjsPkFttb8mNYJBqFqm9uMybmbf2DeZyQdsKU",
  "key9": "8WpWm9f6w4T2z1zExRuHVCoTPFCf2VnQeBC4vndWF77hC9N5NKiAaNDuBJ1m4cUeLaXzkR4z1J4teAZn1xzHWgw",
  "key10": "4jUJx7AetwmE8Q2Ran35V62mU3bg2RyXDKcHQEzcpz2UqZXb9ja2GtZxdo28mZi1RgZNrUR8Mhu78CsathzqDaPY",
  "key11": "5r16kXCzVpwgLy7uXhSdvTjD8RYXzVUQyMqkp2n6CPocXvt5GYHYDzzFrLPhXNyZQM4N6tPi8qQK4TPUJj47Tv45",
  "key12": "4dKgvAWB88FTY81QYqWwJWaXnTGPcqHTpkQNND2NVYMdgwma5MYQacWPydxLymP4XQscg3xZu9AQgK6s7jYDEmAf",
  "key13": "qUqcoF5NowzBgThzkDjAkLxLwZXSEqdmVMG3VkkDxgBwQt9ArthFDsTYBqYBzvcVAB3pjvjjBChwuHoTkofTF6f",
  "key14": "2wYbxB7RyVhS593yX9rxziLAsZSLdcxmZgPDUoq1xRXZbtUwGUJTp5UT6zPnQB87fdWoXao3KgXczho6xFv6TkwM",
  "key15": "j5odJhYNkxqEquznWeCqW16UtnBCzEUXJsmTa2pqVd3ontJ8qyose8JG5AvTA2rMSdfL52tNz4gs1RqGuhroGPG",
  "key16": "5ZvmxB32mA41ENX8YH5QEsKTystBxgMdPQ1SA1iy16ARsrqMzKZsitu2D2Bw33G9A5mrBuUFeS5brf8YxVPiH1oM",
  "key17": "55JeWsKFXi7qigH9ixdXk6UGnUDeUCUu6TuQutFs2dRNQBisaZT5vofo9e5ahUQhRhqSoMichSsQqigt4BCghqJt",
  "key18": "krFMzudSi4SkcC3xoeo65yzBszh98XcKZ1dJoBYBNXU5p85CHBdSeqcpfSiKsjjBdHjCCFHueV2YvBk58aVnC7L",
  "key19": "2fiUMwFC947XShkWFyAFjkpmiHFE4uicqKb8ZYJjZtkfedpfSn7aECQGzvihMMQpW8QfkxQUyKjeepkwLCKLNVpw",
  "key20": "5k1L8ZqPvvnNjxPZJLhi5viKqcZpw7aiZ9xRJyLJTt3yzh94CgDSkFqn2hoQdFjXsPBVSxBW4LYbL7mYTX1CEbAU",
  "key21": "5huntGYcDDeAgfvVcatPp52CmF9p2MN5A97BXB819LQQuEQWW2jb5cbstfr3r9339mivTabsfmLiUYJKusQdUeRr",
  "key22": "5u4Ni8F3ZJi4DgprmyTqjZFd5nPXYRbGmXKiqHb84fWGi5xedVN4kGAKkfysDUVm452Sz685qx12mxYYDJWKzDni",
  "key23": "5KbL3JbcNa5WtwjrkGLWBxjFe7ckL5jiZdLz5EBaZHEZguvS49oKvFx39nc6jND1CtpuM9Wsrih1ZccCaK3ddx8f",
  "key24": "2B1ndSyM6nFULRJJwQ8qXWxAot9ogH5ZdFouCZUV3vGVjyRrapVRyUVco5KaxbbgDPAmSWyVCY6gnA1jQUwh738V",
  "key25": "5Sjbkwds2FCtBDkQim4Nzwmkxbq4EER7tVNekTrpgLjkkyBHQYQophy98Za5S8aFJoh71yDgVvsuhEQDp5tbmS5B",
  "key26": "4uXbaUnUTnez19LcZTUeqnuvfPkQ2TBcA2R9ywx92NmP1MLqNwQNd1TPBPijBS7GJvD6efSwfGB2snSYHt3LRoFM",
  "key27": "33vy6sTMMLvn1UZ8S5WbKe3JoDBQFm5zXjiAycjhCeksiR5j1aYYcdam17QKtbiFdh7snY8cRGjsBhMN81uWVaft",
  "key28": "3PQSsMpMeQtnS5987GhHAAJ7skzzA5cZrQVUEsMYJYogBMj6585kLnuAohiDm5t4CZJmo9yVhoDrZnxLx1HnjPZC",
  "key29": "4ht9hUw1WzcZLTEevxzw4U46uv5g2GhmqtYW2fi7Bn1E26fuvGjSi4PoCdcB2Nsz699QtDfYNDAiWFyQuefbQh2V",
  "key30": "4cQH2bvnucXUAw1qAqi4jjNe2tv57mcBmERcrnCMM25T8xx2x8pHABJfH3NWcyxDaTFkFw1AJqZ6jaeiqyj8pT8s",
  "key31": "4DGRYodegBuEwfWBJwVeN9qy8a3pwWUjGykpRWBijTDR28wHsZ5wyrAWATB2VbGBJLXDKidrxp4ZvWu9fEXZ9ExD",
  "key32": "2HRdx8B4BJY3zcCFsa2LXVyKZZ3qPW1mU3jZ6KxKriYTz1f6bjN7sLyASSjrhvPz4NqazW8cSk3MkrLva3iHUrHE",
  "key33": "54ZCNnEZPEw2mV27ruSvpTtv1cgMc34K4iZ7tXchug2SaSGVisDZapv6uUnDnVePgqptQFr46XNiHRurPAtNqVLp"
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
