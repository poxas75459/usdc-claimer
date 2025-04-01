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
    "2YVyE4KKCiTLfq8aQuDjuwXn5Xy6eY5T71snNwJJSZExHtJHnPuZX3DwPdtDUiZ9mRPYBuZdJRrkdit6t2qt6EUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYWRAHTraXDEjgMTrfTwRqfiahaVh8UasYpMCrbXEARmKvczzrqg5g9AgSAPSwC65to2M7iDkJbCsJTgKJZC4zS",
  "key1": "5wYz5GtZeGUZignFuzbf7FmdokPrxc9ek7KJJ72KKaNnfcx4GcLTLDsLjs7kajZNzpCaD3NXr5arhZWxEons4LmV",
  "key2": "646Mc4pK3VnkfRJf2a8RNozFv9tvbexLhuhvLmmvDzbXNUZ2q6zZjZD6fXzJMTLmuoSD3N7NnAyj825uVbAFz1QU",
  "key3": "9y5YjQpJHi4MHktAdXe3Vp8uyKwepMg2SaDtQhQJ1EH6ouXp35ZAEgDiav18ZjhYs9L1xuAJ732XTJmy9VbF2wm",
  "key4": "3kmatcZ7Zpyk3cgewAHhLpTzTSZHUQJRzaB3A9Rcyu92AMnUz9fkRnjE1sggtfN9dfPx7td4wpDLr2ymFqRcEE63",
  "key5": "47rCMy5LwKcefWUeLWNnGkG6hmhei4VCHT5WNwFnp8VAuKwY6pJXTJV24A88SNDQBDE8CvJ9iah1hHmgWZ67uTv5",
  "key6": "5Dqs2cZMQt9Nkq6nzymcU8MT7djKWPFVF2mNJwJUDhiKTxeLXhzo17CjFLsXtZBjjs5hWQRQPBpDCUFG3Z2omRda",
  "key7": "3saBusCudQD8aKE9op5bC17PRqnpNnFeD6SpjwL5QCdi43R63wjo3X8xy6SjuRDCBJcU1ZJqGdJYevVGCifNFBi4",
  "key8": "3bQ6FfYoD3kFeJf5ozKVth1G6UESXhB4zcFmoarCGPBcpHKPtoo1UBVVCtXMZ3nvuQe9aoZPnc9fvsLNBkwXALyc",
  "key9": "4xqWKWWvmFrx2WqQRXHy4zE1kL3HZiqt1Gy7nCxJCc4g9qhX4vuqph9KjR8kJTAvjdugqKtyc44QF3HThGKoC1Ji",
  "key10": "4P37k2h6AnZqjApJUcQhiHWJ5kdbLeXbh19nTtuzZdvDmXDQ16z4G5ZuAbpdpftFEe5DxTcBNpa8uZc7a7yMSzAc",
  "key11": "3etowhGhyUxvXbNevbiNF7brLEFyYZberjf82gyvTE1La6968w6pUCtaRFbHnXTvXFZZpbiMVhCENoQ7y332KExe",
  "key12": "2EZjxCXffyLgk4LYTx4RzMJYZGkKaoKwXZdpVo43a3tZ4nhkCfxTPF7VhVgD39SRiPdkgpuz7bYVt1VMXuzgnjNB",
  "key13": "2AGnPRpzEoUu9XcErchHnUb72svUZvU2LpjYpDHAgzmXNoPThCHs25bJ8KQN2J9QjS95r6AUgnfkQfDNodRMHgRm",
  "key14": "2VF1dNjxiNBuXAw9tEeDnMfKDdQ15aHaiqmo1RdXesYAQgXVfzmdJL7F1dHctN8ZYJCZX4aFdJYRn6BaBHE8fEWe",
  "key15": "2fvwD7rJaWJLcSVs7owin2J5oAQYXSpjcKUe1UiWmECrepSfbGcpA7nR1d1UHqo3ZQqMFcDSy4goPrLJgKcNuqHT",
  "key16": "2HJ67Ygxeb9WJLDx1Vn7UnLBazsnMZGZA6FJFdWwAysst7gbA9ACSyYzaXQxx2gQGCy72YDdgM7FjZigUqeiWoLB",
  "key17": "36T64hTrvCp3nSmocx7ooW5dCN5Uz5i7WmStsqD8yYmZoqS7byFbrnKxibDLjx6VHmn4imdw9tKB9c1K7pE3KaAu",
  "key18": "4HwqUN14gNphM3qvrjoqTdXGRgYKkySVQqk2KVLAhoFSXPV45PUevE1ZZv1WdzUntgasSexBLwHwmLTRCUBaFNK9",
  "key19": "4birfqzZrcokzFbF5QN5EkCU38qE9UvnpnmwJQehFWS8zSiiZ5fHAVzdQLpghF3baCf6hYsZTJwhyuFfQQsFeqY9",
  "key20": "4QJJjMcanYfSbqSWozncvVJnxRUNxQJo4qBFuWmNSzd7rvJouXGksM5Kv53QBLqC7xpBzvRF8iUqMagrt7vcByDE",
  "key21": "3PK4wkjaa7QJt9qTr31dWSCeBG5iwRoor4mVMp1U6MRHup9Xr3TBYyQ29zhPiSYYVnW4N1eSsprWWk6WtAuTLpkg",
  "key22": "gQMkHCDUip4tnRUYeLkrk6pf9bPhYKDApwqfBseJBmv23LcpRCPitdeSxm2VypRectQgvoK8v6KTb19MaESosWY",
  "key23": "4QrCVjiV3zFB6C4C19Zj4opKHLzhq1XpYyMszcSmKdfD3D5Twfr74GCmPzsxYu3GFHr21BNNdGKq1UejU3LjX1UH",
  "key24": "3FPumeWVYuh2PV6bjtdWTwQzw4rgZLVXfdSeDYZGRWDZwSy6Nrk34EvHqqYcpqZ5KvfUGRCZqhqZwKCbCAg25Wty",
  "key25": "5DxKsTE5XoLYAZz9BsLV597uvQuwcmaVbNiwo2s8EYjAdY2wRPqJHmWSJ5h75Wzac1QUESndmG6nxrcJ7htw78wx",
  "key26": "FbPusbpGdopBvHPfMcsjvK1RpZeWBJ34ss9HEruczfMhjAMJRc6mrvbHWGxb6xMp6RYwqtuahs572W2XvxQMnnh",
  "key27": "4gD8UX4SBjdEYLaa72Fx6a9VTNbmuihhGLaoMBdYWRGiSMiSXiXCv7BhqkiD2wkD7gsaqpJVgb1sRYjJuh51LM9i",
  "key28": "2TanzPcgejxifp6X1YhkCuKj4iYURYMJn12H7Bc2uD3NrxLrV8VbCJ3ALvk3aRm96ALoSsiSRmPzCYgQo3Gv9DTB",
  "key29": "EAWnCvkSYwBTHw4w99yNhw9ZWWNpWfnQk52zp1np1c3TXxBjkLqmPBE8Hk7V6ixZ9Cxz5bnab5CNgj18f1xhQUg",
  "key30": "63iGPj8HtSyTraGv1NngZfgjHafuvdG7w4mA1pFAfGSmAmTwBihSzCatc7VHJr2BNoSytz9HxcqcciSz4xqNpz21",
  "key31": "5K8s7zWZGHPW7hfBS1zFLtGjYGoTW9ADkqwYrMSq5S8bG8nZsxDarPoEjt5hvPqCJZHhcmKsGuK1F3QhLwVLPYNf",
  "key32": "2g6KYLNvd9TtH219m1Zhe9V5UF459CdRqJirchyqT7pXwGGD657K5BtbTHcUiYR2XdShMJafh5HoY8Y8KnSmf3cN",
  "key33": "4QGejiX1qs9zAq4AtAFZJyz2ysBzZeR49pYe4HBj4wsGEVUqmcvicqd3VomAWuz2Rt71x1hpjD5syh1YoLtJ4W4h",
  "key34": "wh5f7UBU7xNXwtYuARU7LrYiCeUaQpjQkZmuWH2y6QGLHKoyTCpCJZ7VQ1yud8DfncsoctFgrg5WdGkP9zsLL7q",
  "key35": "3BMTkm1GgDFTzUkHzhTU1aXSiadwfgyPiCvRcJz2ZM3JhLGz4GRnHXY2QerFjPCCrySPxYppF6tyajMvYZyFqW72",
  "key36": "T7cqnhRvzw1q68ihyyShSeVjqeRns57L2B1w9vvF7eVxEs9EaGNBNHvts2GK1mWwN5Rw3GhdQNizpLVXhwAjbSQ"
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
