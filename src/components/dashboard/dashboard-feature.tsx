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
    "5rnJJLT62j2KV6WzhLMhStZt43sTXSo1tyTa7ZvLTJkZWeXan5WTSpQjyrnfMRkfhx5SCu1BQtNUMkxHmeU4XnoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uyKz82RpQoXC9sKJMgt8RYoEKXscD9X6MmS2MVvU7cvAoEwy3XaxYPX2PSoAqzYjHj9UrkR6dFhJXaw6WGQ2DE2",
  "key1": "2uhbFo2C5eeVTwKdduRmaiWUN4zZSarE4D3Xna4jcoCwLPN7fgz7r7ZnKSTpkePNVuxUKFDNo3T9b6ra1zUWoyqm",
  "key2": "3xh2Cas1yg8e9ts5x8KadKpubpwc4yfpQ5tjLyYcBSRixTy6W1Kg8DYRr9Drc4uyHv3qhv3wUb29aRH9NeVHA192",
  "key3": "zTqxkgDRBAnyb7kaQ6xdYSWc44pEvwe3LvZ7UGghGNytSaWjGfH686m1mci6qDCZwMit418dW4AFJnjVz3EaW9E",
  "key4": "2G7KWH8KdkWFHFfgN6teHpZ1zzQti54PYKRXVSPHznqvbophxJz3kTnRiSsTWXxkvokPAcLN9XeahaPZNUtTp5jK",
  "key5": "5mUh664C2Niyc4KVZgUVB4ggge296nrvy3U6ATrM9L4ZwZyUHRzjq3FaFQPrqyVwyprG74CwkidbzDvM5icPRhrW",
  "key6": "2UkbJdUSWS68L9xzSoB3YpMqiCcmvRjYqGgLf9jP4GTzL6XMawxchiq9Td7qUMVDckEFzoqQpcf5VipMpiDqBmhS",
  "key7": "3DpJPvvwmm46PBS9srvc1A1gPX8PZvQaVhEmiFfi8oHrAJBriGw5DptZZDjAp7L6UT3tAF8cnjJ7Hz2oEJzL17oG",
  "key8": "5WCbtFhKFeBAKFizBKJrPuxC9jsbAT3a3b4XbJcsUHui1MLMtqZWxNdMTWDAPFepWBM7413nGJhPK9H59CdUNpDK",
  "key9": "31q83s8X4oUM5ijf5rPdA21bq5b8uyFvSXW6iQmDQqPZHEzWmKJJq4wtkUgRJ4rojYf17xwpswTZPKJLkGpHYo6T",
  "key10": "5THV9FSQcJQa63EAzGor5eGUWYhKqzrZZyVuwGmKXcc2pGn5qvCQbxCLVKFgCfXTe1e31a5CKdj7vYJQ1YeUdh4e",
  "key11": "3DetzrJ3XCwhxZoDqoyoAu14w69rGNrU6waELyk6xByTpNUZsNqM3FHoLmvSKUC3PVbq9xMyV9fKSKaTEFkYqisH",
  "key12": "2LK7SthbKPeznXLpMtzj5rkjZTVCKLVHEqwkBQVP6MWEZGDNhh3JqRCwPW3G787j8HcrLQNZVgPGchvbpAn8yPW8",
  "key13": "NHc3UmwGwmVKVvByuck8vgb9vSCoL3ujXejWvVC6gcuZxV688uxWSXwaUz2denKJT2UCSGwVby5nJ4F85jRZPAJ",
  "key14": "vSnGJrGsiCDMwHhrrpkCeQhKMAukhiLxELfVFHgKgqNhLKXWdxdZj93dTqaBWvgdJubJaQqSbrknBHih65f6Qi7",
  "key15": "2gJKncQYoxRWpAj5cf39kABDZAZM2E321wXh2ste3Lc8x6UCfMZLkX6WR7c8trMPWYR2r9zYWZSp8K4cg4QtSqhc",
  "key16": "fujKoZ7q9jLiJHjqWMx72GFfZMzm6TSfZSK2aXqwhSFApprPLmFbjoAfSoi61UXdGNjqLsMajqmQQ2L16dDjov2",
  "key17": "3zh7rCYp1uA3AXFv2RtfRzLNPYQJinbugMptMR2PPnnnfzXfn37dKyfubfWbhJq1ow7RYnHEsUWh4rgqGSWmDNNZ",
  "key18": "QaAVCh9SL78K9sTKQeipXbcT4CHbXKoCzBhv4Ex5qxHTxCwvHStFjVn8WdtvUmcGeWM97Q9hDGjPoPS3CFAEQCR",
  "key19": "3SbCi1eQ4tBJFZVGH1z9LLa9NzB65ZD9sQ2B8dWMVFeqcNfj8o5FsjwNktycH9krURGRanqtKfiaubPerhTTzYjy",
  "key20": "2vmtws8B8eJokKpLB1DDrCUkxJWicb9tbueQmYntaVRkfisYCGzVC37Y9J4gRWcd2RLFGAkYZHWvJvRb7qbfL5sw",
  "key21": "2x6DvQxQUvZFMULZYRSQtZwMAEoLFqRmBTv4DonqSVzEusehjQPaZ3wkwf598HFWsdPr1bLLSXvYkNSwFt76QmMk",
  "key22": "2FxSBo2iZYvGabwdspFreYtdbdF23WDvwbpgRtTohbgZkrtmM7deKN8oS9anX5gnTvXX1RpoVkExhbC7VKWQ2pdA",
  "key23": "esjdWBmTrPsspnjofTYDLCrn1VkAGu7bZYA8eotrqrS3QX3u8AvPinQG2nW9SvF4PCH6tei1oNSy2cSdzFE6smh",
  "key24": "5UWrbodbmUQBxbquqUApyBnUdjv5yFcmvwY7CHyhDWToJi9WwYWV1Zh65oEYDaRBkJWMSYUWWTEC3zHZBAMT2aGX",
  "key25": "347dP5V7tFGe6ARdDWxd6KryD7Wb1FQkaF7K3o1BLfKCXypHtxeCzcL6GfSf2mC1JMN6zaicBA2R1nLwg19HJ6HP",
  "key26": "NSevEH95iBZLKjkRUypopMDyfAcYueFZ3PNqZhxxz11Nzym12bymUo3MYq2TgBd3GHFgzzMKLVR6bP9AzegLJAC",
  "key27": "4nn3kX4thSZHzPgETpHeLUQQ7TGxeS39BkVSZ9AFq7pRJNVeo7qeFQcYi6mAJGEHqVfK9ThPsBaDEUrFRQtdQLyh",
  "key28": "4fp5SWFxqTPHEFpLvHefvT25PyTr5CFbMawnfpLm5BQCsU56iVjZohcwEyutXoNvym6UvYY4NEqNp9QWRSkCJXm7",
  "key29": "kdFzgDj4Wbq7qDcfDD4jCYz1Stwn8HDnVewX5Rn4gRzm43Sx3n9GGA4Drg2L6HGDrehNzHc2so7LzU4Gwbi4LSL",
  "key30": "5VSfBpnFsiRE6WdT3uoEJhCiHSbgD9TvBMTCxMtr3D3Dh8zEbEFYGVt2q9A3kppGBwJ4bQCXWhZTxDCtbVvYJmDQ",
  "key31": "53Jg7dKUTFuexn9oe8dB3QF4XcRELvSeKhrgGnJQbYaUEBmrvpUrupsicgRxdbzkrTkQACey991CuS2JDhaSHqEf",
  "key32": "wTUK7P5aqi4EJS3XMkL2DWzzrGFFbiEbru3Qkyrrr4BRwGucMfVRpzsMaaSA7gyeuudRbRRBHDcAxJWRLvmpuwT",
  "key33": "n9Lqnr6F5gZXTguqZUnx9wHH1xusjBuyxmavq2NKfjUK41eBuU61c5UYdZEg1bA6J4bqRUNkMCUT8hQydFvSD7F",
  "key34": "5GPPYJfDy19Z6oq9VLgEnRtxLRaWumNHC7p8rVoFWA9US3Z3GDkgkvRu1QD6SWRkDK3qu55B1yXn9buMu4xeafZ8",
  "key35": "kH6DQGUyQW4Yt2UqxuCevJ7999Uj6JVQe9LjAwVRy1jFAvy5YH6Rk7Td7awNmHEkQRBfn4kK1JX81QMihr1XJ6t",
  "key36": "dZNs6HND4wP1e9GTsDFQPPdhVQipMpKYTityeMB6d3oPvqbbPhSBDrHk1aAm8TnJGpFuwpS9BymibF1fWj7FPZS",
  "key37": "5rNYiC9tAyiCTZeqPn921oq2QXKZ9Xtvf9s5tM7nYWS13GAeGAMcJT18MFMWg8HLunaYc7wS5Zhy7aNYJmdX372b",
  "key38": "58tsGxSU5VqbnxpsqR6jLjrvbyu8UWK3L9fY5XXNTiyJoQNGLBKNheutgK8xfdsFnG6TYF9Ph4bop1HGD1VTNtCf",
  "key39": "5o98hUgtwsQZozGHBwcBoLdyNj3bhBkwUBjZyk9oFJrFDD9CFf9fKM3JBecNjRAEezR4tYRR6tegvJSbMKkSTPQG",
  "key40": "5cWDE5zxHkYRg3LH14JUmScgXZf3CypBtBYdFSq9uGgNLqkHZ1Uutf3UYRFLLnmo8YnHHogDsQYVJmysrak6ycQ7",
  "key41": "2HPGVr7sEKBbY4NMqsGX1GQqjCKcU5SDcEHU8jHpgtiHCMPGxbad65AKshce4XCL3C5sMK7HBxpSXu98vuSmhHwW",
  "key42": "2shzTqS3K9L5josgF9PqzkDXzFz9VL1zSRGj5FwPUKQzzW3TeGjbTJvfd35BXpFYntD5jCyUvrL9PpvCBPM8whHQ",
  "key43": "AkXbZSeUiuUuQkXZsVjE2zsCHzTobTRgyt7T8KfwovHZWCbk8Tr1hNos4hdfXfsxahLpfm3fYVoWEb57tyqpVbk",
  "key44": "vaLofk1JYb6sNttmpdvidU51yLGHDzd3EcTKBXCuqmsbw119Hy8DSvak7wRDXYzN7cb3ZVkjj1mMjHLEm7S3YVy",
  "key45": "4AZiXdUa5NSYppd7HhATZbjZSvbcwzZdhk3Sig3fx97sTmdCyErT5pQaMmxoM8xR3b5z4RimpG7CQ16kzh75Woe6"
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
