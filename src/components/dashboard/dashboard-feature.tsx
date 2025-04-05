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
    "4nyt35oviDgvurzfP4tPXhTkHyFrzLNvAKzx7H7bTEHYyxmmxvmQtzp7ZBRvdVuVimqhiSqWD4ReTb4zmy7Wa1co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1UteprASRnn9TfRtGKzUdpiNAtPP6rJjCgMdbSorhtEE434k7VdRE6bTWSFruU6bMq1gGcu8qMwteuxDTcDUdv",
  "key1": "3UHxkeVohg8gCroMJ9BgAXUumjJTPFkkeutmTj7gmthk3u5DsMBZsZqYE4ZGcPN6aif1xAR7oKM8yEpQuuLbgxLc",
  "key2": "47jrj6XgD1c7adGg9jMkVLKA1Cdsdb9QMX77sJ41QFS5ydx5ULvNEAfqx4fUAQS79ZNQhzTuAo5kdsjdG5o6Fzaf",
  "key3": "UuKbxsEe6fJSejdcoRvDtzwKLUNVXKrJttWiHmbo3zYsZtd6WSxsR1XSyen9oh2NbSNiB7CaqjfdkpXF6B2Dccm",
  "key4": "3mPqPTVJY2ZmnokcsLq5jgUaYKb8cLPuQYVnkxEVGb9EGpoN6RiiivP3KQdSuMPBYNCREwufd8hSHeAq5AGFmE5k",
  "key5": "5LK1vXEP5x1WoiMDRK6L6uLwdrP1SjuRUsmFdUie5LHYxBLHgDjZQFDYbfhh8MjUPSfu3TbFNPf7bnnBJpAjBM3z",
  "key6": "41YZpPGgyHSh1fTmj1hmE1gM9k9d27wkJm9bZWFac86RT1EFRHgQf4oheEXWZMfV7kgKqqYe9jdLqJhbt59yLSAD",
  "key7": "prEgnVYUuodSvyAjWHzJQZfev5JY9Dq1ufyPhUorkopfwAGfqiojJJEqxAohZsWNJngWtkRU6JjiwUbLW9eNtwc",
  "key8": "5QTynWcYVLqRzk3EdKHABdvNrz4iXSPjcLzNo31cvL8cJaodnsHTixYuVFP4akvCe7f9oEpJToC4W8XLEPhXW7R3",
  "key9": "2UfxdRW2W9xLn8ZMxP6gaJ67iKJbwNDRE9Z6wYUt2SoSCxuHAWaVdbqAjQfSBCEUq5BGVJ6Jp4X91gXGLqiCcxto",
  "key10": "Up54jDnZK2RLAofRxvdi5RiWC4fPDg6ke6XGoQsm5emuu28xTvEHUqxqKeTFqGxBf5T5aJjGaan99svqL7q3XpT",
  "key11": "5XCdXhHMmWPJkyXWUfQfXfXqrh5D95q2Kb4RxoiGKHLwECucb7wvwqNL8WzHVmR1c3qEDzrNK4oc3kzRrzQxFqJi",
  "key12": "KWTgP6HqGFVja2Vezy6WNd6qLBUCHqqAnFcFmRZegjxRRNfPmn85FD4NwK4oH3bRJ8zSCzfxwaCbRPdLK6SpfpN",
  "key13": "4WbFoaHaiNeKiSnkMNU3frhyeQo8PKzRFVMYpnsrbFAzuFrphN1szX7XrnjsseUMu7g6xJ1QoXCZnjn8dTTknwTX",
  "key14": "4TJ2fht37KkC5CQgTR8cj89EVU38dEHM13GTvuj7SnVZBx11WdRxYQ7wE6LfvRWWYzD5Fkkyx6VcujuHxaNQhXkx",
  "key15": "hYGZgqThQMseZP8ZzK2oSKnYHXggw9sH1U57kRwGeZ2RBmoKxCV2YYo3AT8ax7KRR6mv8HPR1tbnKGTkvNGEFzX",
  "key16": "4Z6SGVEfiJFWoskDK59p1NwzsEgRstrVwiKZy2YvJNku8e12zrMEqcQG16mWacNQ8k6q5BMRQ4bwGbCMazdJJvjd",
  "key17": "61JhP2aRQpAuhjEgLtVqqb636po4VJ3KthJeDpcTeNxGfTGFra4qQFz352JR3XNvDUVwzc1h3QGYVsxzA6dZNMSE",
  "key18": "3HUVpYLKcVLcK7VLRMBb28U2B7KemHqb3Zg14N9RMKbP6P5WsurBdDHR8fvnKAkiCtYXdHfBMsniVh7NJsPJKyNe",
  "key19": "3FMPRPS44yj22RPqU5sKq4qfUm4Pi437d9NCLHgScD2B9bsRi8H1QjT9T3eYXGYqYfe48odWpGNZsQaxUvtkSXv5",
  "key20": "3uaLEkRMmYnacJhGR7qaUY5BvKN1rJysyCzrxrDateG4C3EcfM6vXErmDo9dn1SLd5tacqwoZRGE2jBQMTyQWFw1",
  "key21": "UwMembLgoMdGiU9msnJ1RdyYbYYmBF6XxtD3EJBmYiZvK5Yiyr7PEiDAZYMd6frsKQDWx5guN7whYucZDTN4nUL",
  "key22": "2wqQYBePrazkgpGecLuzw2fYyhv7ckrq4Kj9qbW4npAQuPBGBWqQTyeK2DhyMXgdfoeE2v5dfVkVJJbfLd8bYj53",
  "key23": "3uzSmvCsrGyVeMGg2aFL9SnLisp8LACkzEJum4FQceSMVTmSWHKnvLexA34NPcKC6i1HRbp1uP9rfdXzPjA4Niav",
  "key24": "5MR2gMsk7To64cXR6APw3gR6s5HnPVEc5JgMNSZuLGT6zA6eRVnMXdur6J5yuvGW34sGLFXFsZayMcvDSqbD57Gg",
  "key25": "3rU5Ci3hDwwRCvnNnymA39aSmYxzxKn2PKA1YW42TnX8pd4zcAtAWpvQomd3QRqLS9oFZkR2dPfKwp3W1qyy1cYn",
  "key26": "3K1kLoJm4bYLkqgsQgMgYdUjHeh8NSCRLdJSVPvuGcahtrQT8ynRh5G2n782cQSxkxDTHF6vXWdqDgXL1PnVwghS",
  "key27": "4514S5f12jgrtvqEJ7db6aVTnFSYiFW1WuT7GhHtvddPphqXtetbGi6VYZqbdSDAsz9zAXKDyfAhJ4a6vR4vaZy5",
  "key28": "3RzcLN1CsXAPdakXBo9gHabGfXpEXEWaFN6zxbnVmkjDr4NnPYuMXw9XXSMzD69PitJ4LG79SeDxmdfS6u2Bv5c9",
  "key29": "PWEwsmsUFY1kiwEbr3JuhokzJfNZHXtcZTdhQt2fdhKKfAKDELzUainFcZtM5kR4gGU6AcB9JqToqTmi1P5NoaU",
  "key30": "dHysFybS4vxMYRgZDaYc3wDuaq3yZXSFE83E5kxkNsAx3xJzGkaG3h93uB4aW1muqweaNF67mxDiefJNARAzcGk",
  "key31": "3t2iyBJVyHZN7vhtLhYzFe2mRjy92RP1PWC9FrED8KsKGukvEZLdbnoAVVAhDZcKQdPrTYP5oZBx5GYw4om9qLkh",
  "key32": "22gaF4zbZUS1RpvULk7Scq4Mhug2o4zzN15JdREnCCjqq3cpsN8x6hQGVzMdaRGbrAb6BaMwgS97WeViN86sgvEc",
  "key33": "3wessiT7B9bWvMZSS1o5dSRwocJJ2dzXQdRk78tgRiqYFN1ZEiDLAEXUCavU6wsfsbkhxJZHCFDmeDeiyNTvDNDn",
  "key34": "3JFMNVov9aAWW8eMCwYuajLce51oTnG69ZUBkFnX6tL6Xi1oT89ki5d9oVSBU1MpDFzpQHW98gc7tg5UdHTDCABi",
  "key35": "2ZZuvsGxKUsnwKbS78B3rmsUJSuhxMuQwmQn96EGevbe4xjgVvRo28Cf4j7bh12YNa3UdkUM42mT8a7ULeUY7FQR",
  "key36": "439SLjskrfDcdxv4YtzCUVGuJ2dDgGca72j3ihUEHqc24gTifsPwuHZBtv2ZPqum7NwZuirF6Sae8TD5LZoRGk8M",
  "key37": "2boADnfVeTpHWkHbGoYrQmLMg4qBbfa6R2mESGSxssXiLY2yLKbFUQLpxfqUc3gZaVuZykz5HXe7hJN7PgE72Ahx",
  "key38": "Nxd22ps2AY296D9uThhpRgvkyQSt3g4GG867pqNwj9aoofsaEqTY8zjku7JU9JrLMkTRpY2vvbZWLHjEvw93d5J",
  "key39": "6mo7Kf2kqcKwSKxoeJ2p3CyW84ymBDYNu4Xeh4cAW7ZgTMF3ZYtjqEEd6RYNH3uzFNQom6tPd4f2DDNcPt6YyAw",
  "key40": "2P9K2DjV7mTALYQ9EKmqiSbMMLky46erJYY8mSocgwZNxuKTmyYjGUH3tcnosr3KwFaHih1ktN186B95ZuX4K3fU",
  "key41": "29WZohGyTbujZwnRiKphoLmWnzzyZrXnv3Vn1qrNvQUKNfNkxC1haHBGYnYqfmgwrjvVfCs6phF12fBfTeDGWJne",
  "key42": "2qnr1mHyeRBoW3QjhF66WR9yVS4kTZ28LsPQUgxq9jKyZL7xeqrpY9wk1XyXAuupS91821mN1eSEXVEvSpuYChd4",
  "key43": "2mi9SeEh2cRkijRFdEGUbbJwWJDqDmRvENEuuHAhGXxX4f88eJMzQ55tgmVmNeWukYd7jw96sEbX5RRC3Mm19zNb"
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
