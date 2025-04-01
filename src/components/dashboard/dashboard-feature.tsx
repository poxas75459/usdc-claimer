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
    "4pPioE8cc5EapvsFcph9pQLZikfcu3scVgpCEDnbZNkNypeefkEeNHv2YJSsirhoQPtZFBxtLCSt1Gssrke77a1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KCqthymLR3c1obTWcMnuyvtCVEbasrySU4M3vjU4PBjNfpaFuNK9C1Q45CrinMvMt3RqUUZYp6YgpuCWGdtfiVS",
  "key1": "31SEkMB4R7jRs8YNE3GVNgvPk9g7kwU6HWCpBz6HKoF51GDQiJRRGq6BpBWnVCxpDX2GkFY1oDqzJcQHgVnhcmZN",
  "key2": "5VDwaPZzDXRuvBJzwaNQBWhEUEFV5agWqWVZMB81Qq4K6J6PijoFXpGx1TqrSuPb45y4LJKbnXPQtA6dfkWqnfxU",
  "key3": "31FkTxpi4EPi34PiywfzDot5QTArkVywC9beKwk83TdM2pdwfWmZnwCcBu16oRmKqFkc1FVM2iDAT1CqCsGssrXo",
  "key4": "2cmi8wxMt2zNpnuSveqsjGkkJP3VwXgp9wbjUzU3kzbgqimVggU8RGCK11HcRVkcMMeLpJrMThmY87AVzcdFYJTZ",
  "key5": "2idsPRTU8ppSLPhGT7jB3hjjJbBFSLFm7BuBDoEGAyRsqzeJGFVBguBjrrwWrPuPWbczf3XgVG1dw5pKsi2u2oQT",
  "key6": "2S9Raw3p1eVNbCrMLYqAeKtuQnW7GdhZxRSjPQSricb7foRfNacvFgF52neAqSGgB3Pnan3tYCBZhtytjHr9Pttu",
  "key7": "3ieuu6NkZPyiZuxvzEHwg7KCotsjKaMmiSo1aVZ9q1GYaHgmGfo2CjRZK14P5KzWj85fJdmihrjk29LwfxGQYnMV",
  "key8": "31UCC69zkbvhdsMYhuPmfWNhLfvZ3nF9CqmvYPG4Yok7FTuZ8qfZDfKmkFa6vUr6M8s69ixiiKMYUcistbY21Mr6",
  "key9": "4dw8V8u7TksyscsyKZEXVhmBCAWPGN76W5VDGDJYSDPmb9pWpdTcRRPY4tHZL4ywprrx45fiK5eCnV7d9cSkzP8N",
  "key10": "23CSrbAbus8YyPtwPk5mXQMjru1TfuJbW1GU4Ue9pmV4kr6uPnhhkBtLL3a3anNBeWbFUoLzYitoPFWXHh8J5cMR",
  "key11": "65a94GhqenQYWcm2ACf5XVhy8wmxQjJa7ym6a7YXFgH2iiRUwYgSFPDMhhYymLjW6rGqBQZdoowTQwv9YLfJAsoy",
  "key12": "54NYcG97JLqkahM4fp4nW8kS5N7DNQg2e9Lb9XerXAHGeuAqRYSTeByhLzVun44mU4b2ea6n3GfYq695YS51wxP4",
  "key13": "3mPGKCbAQfP7rPN92TKwAvZKCLg4f6GX7EPWJ6qkNQF6ttvx29PK7LQTVRXHmQeSzauSoMhgV5wq15By5tXsfqnx",
  "key14": "5E2UdnJbiF9cXpbzgnMtccSb9rJetLEfXt3769KRHApAWf2WrQfSDr9ZjhCdwKRKD4TNeoXvqDGFvnEs2WA5N5vU",
  "key15": "4Pgq2RSaWzSnp6qbx4Xqz6HKtC243wK84z22jzK8MQ1j4C55ej7CUSxY9q3PMzGNxjfSjHgZmqoGx4Tw8NXv3dxW",
  "key16": "5fhYawgC4vnTfbheM5RtaYbhMSjWb3TyPox29p2e4KP5aTuDefUUZo8eaD4bdRSWrHoREzLaFCxeUZFKZ1q8KxW3",
  "key17": "2HRUSKkXxLvvZqv5H8Cto79vtV6wQoMi8cGpm1oYJhd2dK7TfEBhbSNw5HqA49dxLw8uMu6USL9AMPF4SX4toai7",
  "key18": "48B3kom2TvykpWq6dWWp7L5zdimkEhogGhyqmDYxZAcRmCE8A2krZSm9L7ucv7XhhJJkF47MsahhiZKzCnnrw7Cz",
  "key19": "2bN9d4kRfrC1r1NdsRYoHwqF4st9doQE9UG6M9qKzNiVPqJHjC8zEZgESuRb4zfh4rso7MWXZqSGe9kRKZviXuT2",
  "key20": "5FJagqh2ZvGA7fp4QaPSKWb1p4gAUmtADsXKE3xGVUkXXpR6n4KdQtQTbbHtxSePnv589SnbsbJxRaoQzNjePJHX",
  "key21": "2w3tk6aqvHnDFqgtR2ZbZpCvrKqTSKTH8pcfAdgSa2y6qsjsMGffezcG5DjWaBrcZiKtLjLr4eByUFVG36bqfjk8",
  "key22": "3NFnNv1vK7ddukXouEbNhf1HDL6qWJrwX4V93ToLiKZuL4BB6g98LodTiYLREWfmLBrwVkmgppbbo8VUH2HvQrWG",
  "key23": "3EhdpU7KZ452GFKK9BqzsJF6LiaRrGRUgnW2gp6U7cFHhuE1fs7xUq1eaq6a9ciNAif8SA7gN186Ty9y9cdi1nQf",
  "key24": "aFVYRBbj7dQS4HGv4vQDeG2qF95LgUrhJXunASJZYEtbxWBrhxnvcMxrN7yifN7Zhhy2yVHZCyLyqD141aCyDKo",
  "key25": "5tYhGEfwZcckwHruRYzYU4isULNRAnTZDad8yoS4ixgY2kRNmtn8ynqKN9KYAm2F5VPvVaSuJpCettCpajkpBpTh",
  "key26": "5uANzusibUJrxTxvk9cXyv8mAaj1u3WHozsTywLsiRYx3F6avT3geZn3cExBWDBsA5TmGLzgSUQMjgF73rvhqtMr",
  "key27": "52vJZWv6bcA4MwNWYGFsUfZStxt1EvyFu9DzEfBXgtuna1Ce2aVg9LYf6J8JMQTQ2P932xzUZFqPtsRvRMrLs5kD",
  "key28": "53ETTTyc812qVqn89GQJQk6fYih154iUiVDJMz7mHwXJdraC6mr5boBR9Rg5aHNDipSss8dcwkqC95sChzuWF3Q1",
  "key29": "3qmN7pNnCb6YJotPHi7vZSrGsMKhPp7zaMfwwxwcQVoFttXns96wc1ZFKD6HS7Yo4Hq9a3vL8a3LXdJQAzH9qo9a",
  "key30": "4BGiDDbHaTPvJwFyYpn51RpCuV5n6j3mLksF9uVakPHy6UZQSJtuVFrkQWAktRgzPZgTkr9hnAWSj6LRb3R3PxZ8",
  "key31": "2Nj5uK8JZo2Z5uEiUpFARWhuE2Zx1BmxPvPruUNbiZmyJcuJ63oscWu19Vy4pPgJCUBmAzwcGD1T1ET7y8F8TJyC",
  "key32": "3HdxRFY8R1zxPM8TR58fbPLCwaXbpqrBgzBT81YyJdGa8Hh3Lc9F5UpRsWvDWK2V1JhqGHywbwRHFxNvr6R6bt6B",
  "key33": "3A144YJh37w4cHnaQphttaiCkMLDnpjgrF7pm7JXWRpW7nhRNTPpP9cq4DG7kRRKBJ2RJykyGxRUBo6wyRuZmJ3k",
  "key34": "511bZjGcSspRKBM6gczdMLJGgZkAeGaJeRBi5SXw56E8NdvoC4ti958qaYwP1i1dfAEcLSQsXR48Gp3DssVCMLoz",
  "key35": "46Q197GWquoAs1jRQqymusipfXCkGCzvefHzxecpJfP3Vfv8ZS4YkjKS7UiqUvarhHm5wheUUMvJYb9xT4ms5S2Z",
  "key36": "2HZcpvDFkSEybadPGNUxm9MrT1DoxdxvpxhrBBP2FFVt4Jh2zqean9tex9Q1uJZoj9dL64LTHoNpcgJLA5JSdUAP",
  "key37": "5V7U4m153EccqmGcayGVELLjLAysmoFbG4ZGAcimPMu2xiQ3pop3TixMyCJ6dYoocMg76jfeReWWzZECCBADAvkU",
  "key38": "49uFFaeWwcdDDhZs16siUW7rnqkLNSnVR7RYQw9318bt3rcppYADKpkKjtoPxnsstmBesUwVhC7tbwcxYVFyiJ2F",
  "key39": "2qY4GQHtmYZqo2BkXsXbv7PRJ1nLbdvYjjubrSxNeUDJHJ13DT42SDB9nrMPHZL1EmgsfbFzhxqPL9UxFnDKZvd1",
  "key40": "2hTUsNZq9jjzVXQFPnafk3K5mJdMAiKm4R5tddGmnLnMJ45p3jeDGvGsq9Gk4X4M95CuWrNGjamEVteNUgvnoPU7",
  "key41": "3jH9teGr42iFxwR21FvsWLHznQnRnsyWzyXZAHDw5Lxtu8NaLmM3XfA1bSUbs5sewKXuGB9HWQx9ZkDZwuRf35Aq"
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
