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
    "3FKj7xoU14vG4bj6AxURFCsY9jJEsXvzaZRSNzNqnkF8pMzru4LQMfL2bdKzCgW5mWafH3GS4P7863vJN5DLHdPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cSuE5K3k6pFEDk51fvTQwvbUzk57XMN9hYTCJ7zLgH8DYYdXaaszmwU6ce4or6U6c5Xxiku9hVRdzk4gX6AC3P",
  "key1": "3ZDi7w89x3n3CVzWE1AznCjERTPzu9BzYcJGYV6PATBgieCWKmq3vCVZ3nMBm2XFmskf4UU5d471et5Ub4kKbwDt",
  "key2": "2ciSWj2AxeWFrMM9zyW42AKQMEdC6qhF9cwBtbxWkEbpUhkSBCKbgyWEsTxsjpHZkuPsnzntvMHa4NY2wy3B9Vmj",
  "key3": "c5NrK5AeUuSZuA2h9BK4LZe5kj67SrhNLLJz2u3DqweLGZ4JcLdUiGEqYYW7TvjuG212b5T67b4qdtv2fxqGCYG",
  "key4": "3dcW9yHqsh5dri7DD4CbRTHJCUyE6SaFcpEJHr49tUsx7rnBc58uhUGSi7jY3BaTuQSRWFXwPpqgdRrCtffKygWq",
  "key5": "4bs36CHKvHwjdFuAkJmnpW1JTJBkEjcQUGSSSt8QA5EHRZn88rKgVUzpZzbVG8EgiSMHs8ZLYjWwQJzEFGfH2pXV",
  "key6": "WaKGj7ZnUMwma9Yq8gQWtR4Jritwp4LT7aTj3qFaCEshU9HthKzSrfeuuuyJtF7QM1jg1TScP4mwMUGTAPPM2Wy",
  "key7": "2TReqdyNottLTYcxoNEvboU3fZGznhgrEAiFDyT6b7NCdo7rMsM822WW6VkLKu3UppfT6siKcuhcPG7oKCzCfLuM",
  "key8": "2CHhwjiEaHQFVXT8U5sSq4cUyDw1y5KWLCcv6VnUJMbUVWg45VBTihWC3oLR3Fq9Y8reEPmSJVrzG8usDQ4Sv9sx",
  "key9": "2p9ryL3Y3BSYtsdVVNSWNPmmRNNbpENtLoXvKNcAqTximocK2DGXBKFNTvrnvGdRAvTbZ7faJvaGv9HScsY38v2p",
  "key10": "5b6LaTKSETXJdRoDtVRAiQ7nY4YVHhxjLFxYf1tExygCqq5Rf7xcAT3EdgKyUTAgXq36CyPyksR8VdfHRHwKEEGn",
  "key11": "PHSG6EfWEdYcfGrhLQz8X36HBGx1mBF8B21sR1Uas2Q2A1c15SGRPdE1fCp1vpYf1HsdKWJqXxUMcn2fGq2pdRR",
  "key12": "5ZRimRpimXDLtTfD3j1ThNFor5he3TcsR7XNZRWBMWgTp4LJUt4M8XnC4nfu2YgnMuTBdT2pEene6CndjJHaxLPW",
  "key13": "2132FdR5jGhT5YWeoPBjqRMUoQnjVZvUCXv3XTpzhRcjqmM2SER4mMaj7v3hnH2FFD6zGZQAxgdJvGzMV4Xyr8Xe",
  "key14": "2WsYrpq1Bdhzi4dVUYXw3DyjVZdiJn8uwMwdSUqNcCtEo4CumBvSDRSZ1aiaEDaqv9MqRETDR5iBmrnBLAcG887X",
  "key15": "48rtfsca2aGkzBLma6VY4KJUhwcsfBWMk3c8UrkcyRHMSMuGXeCGQg2f1pzWMJ73yCbjhRQvSxL5XHPGRNqYYbnS",
  "key16": "eb27Uq5rHLeNbB4fjQ9QCbmpcKp2gRtreVD8tzvMKcBznVS5BC2te77AsYLKaai7D7e7TU7DtgmyLTuHhZKYATJ",
  "key17": "3U34k3j6ST7i9t2GvXPBfAj3gNDU6abQSW8dE1MhRKWt85kS89vDKt7o1TCLWfM11eMcMKDWmWHgZ3yz6t6F4oHB",
  "key18": "3v5oDmAM4C9dFb3ZUnkXApEUvEwZNAX2da9FtXHZvQU73b1SGq2u4HbHv26kcgWustSKa3DE2DPUe2EBvML7SyyB",
  "key19": "5abMrfUGVp5nB7DmYVwMEnYtXWMKLQpmM1ERkiR7RzbFANbt8CP9MgykwPpbuNcmtjXsnqmyNgJNtXhxqV7vvvFU",
  "key20": "2sgDZTwEy889oLpyHR8EuNPmSPV4vsjLv3Dtf5VN2rcLBPe8CQ4YVE26VToy4rX91zxkYzNV49RJTTiRLCT39hd6",
  "key21": "3y9x2rp7LfwbrtXDpoFfKQ6SM7yRgARobPAQA7AZpkJC1Vpg4aKtwKBBHScjknYUniJ64dJSsii42TEUTg4ntYD5",
  "key22": "3CxMKMDAuKTH5yN6ZUXEjqDMLAu9Bp6rAkhUp2z1fj21csCA5baunzohmBU2azbdD6wYau9tt7hBtFWMYjwYjrwe",
  "key23": "5H2osEZYLksqgWQQccp8zAymeqSEvEAiYvj2LMaiRhsyA1VpmbGm16o7V3FzMqmkwYeNT1vFeLDXsRbNrZjVg5oa",
  "key24": "62nmfHfNo3AUm2jNjPBzuBqrr93kwgF1xuNzgGBFBnAkYKvXTab3ywBAwUzG1iqE9u7U214RSCtXFCm3SEFZZQor",
  "key25": "3vdbK6r9zpDbdjna3iq51uC541EnSDgee72pFkvwS7RqWmjJ5VcRPWY1unqnG5caVtV7yCLgVhSFyUA31eJ3KJx3",
  "key26": "4YHC3aqA6M2T5w72H7an63HA9UWF5LzquxUdztjtTGe5K649qB3qxAULPW5sknapUmMZQcb68JVBL9dFUAPeXUQv",
  "key27": "3GgJit12WeStgZHFbWCHnjVFz8DCHJQXkD4dBBd7WLQUU6y7WNkoCJ4tnFwnrsoTMpm56sCfvPfpDquVfp2W6BLi",
  "key28": "27aTtWCGpujwS2BFYohYfL6qJL8hPtWk6B16yM7jFWQg3ewRZqR31beRGjYi7ndvhZAshQ5gm53ZUpwJjUP3rCVu",
  "key29": "3fEY1u1vy6LckjUZiBNG8gt8sWjmxNGYBqRQvci6y5GrXhJbWtrBBdu4oJKApXwr4DhApLGL9khhJ2kpnGFWLDts",
  "key30": "3sn5J6PV9KtqE7qvCDcmdpJ7rnpgdgSy2UXqu9oXM6j8B3wrZAo9tCtf7L2Xo3z4WPczHEpGg2d47kU715iUT5Sn",
  "key31": "5YBAW7ENDQNzYuYPkZnDAjGtx2Dwp3w8TS6kFy6hmtCPez3NMW1qs88UQmy4Zdc1hQQ86R6jyvcXPJq3CphAxHCy",
  "key32": "4NTr1NXnsH1NwFcTg4WvZ3UPHKXaDaJrTbM8MqKdGZCBkbXh5UEaJPrKkv2uKyXjH3Z9gmabjnRK51GHioSEFUnw",
  "key33": "4b6CKhsW3xDfDJnhcisVycWmio8gU29yznB1Lqp3ze27ATfmg4FBcS774rswKyZMFaMS6UzjufaHsGf3koMFUUVA",
  "key34": "46z8Au1HZfroniwTndPZqRpgwCA1MhcW232MGg1pWypWcCzgk4NRESnxuHMsdk1r7My6eoZ6mE4wPxcQ4UhLWKcL",
  "key35": "5T1Fqu8AVnaS3cBCRLgsrxhEzsgvBDCUfAD2r2a6f3DwMP3aWuyEnTYqbPqZBmTykDk9cAsabi6MS3kwd4N2E98y",
  "key36": "2B7EeFskGbDEut8urcxsuxBNVLgCNtkFwHiWVcWVLjNAHg5Jzfz5xjacWMiQqbQEfUxq5F7AxEJYm4AFYsHDNJ5T",
  "key37": "3vSbdQfznCXGqkBWRKGJXKr1Dr8tXL5FKQwEUSkbkABxnr5xdwRXvSqMM7QfKJA4BTjfAnffwQewAsXguuXYABKn",
  "key38": "JhnoL37fziHeKeaWCcg8RGmeoGJz1ZNC1WpwSTugHrk24wwswpDkdeFbUNkEugybXyHV9Be1GYmgxbdGCCXqJWr",
  "key39": "24o2UZCiXBP4E4LZvJgud1RvqMxzS2819C97yyz5jkFJfVzYFL2EfamzqvMjuyvVg39Bt7T7u1HiMmcVtAQ1CmmE"
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
