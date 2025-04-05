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
    "HB6iYbnGqbNQtFas2JE2pr21GYPWYKEkgk4SMLFaYY7bDvkfzLBEoBdrtBneW98zTfYsh9817WkT9X1NeYqUhb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFG3iu1T6Tjp9QZ5VwFbqqT3sCsqT9FDZaVAXcG7hXw45tZwN9oBpoRdDRURPwy8VYyDWYe6q1hiCszi4jKsjCR",
  "key1": "5waGCbn7Pq5Q75ihgfH8eVFjDuzHRfDo58nDqAZFHn6V1iArkyURprKUUvWpAwp6Eb7mKGNrQrMwwJopFBBbgqz6",
  "key2": "54ACRZriG2XoAt5Wv6T1ajkqrSFqzZbVQHoQXMZGQDMCo13MFtsLiB3dapdFt5xaL27DhqkYnGib5xsPdEKqzauG",
  "key3": "w2BRPk5mcMpYHA7unUpSxEJUDo7XKuatFZFL25znZLZcq81zqr1MZEtBM97ZMMxT3AEwzQ4J4xQdp63k8JTiXzD",
  "key4": "5mRvsNV6AWnoJoF6k9ms2N4gLeePGBxwRf3Dgzipg97uS8CiiFstV1Hf6oPdfr5fcPV5sirdo3Dxqd3Yeb2UySjL",
  "key5": "4nT9fH62jaht2hnWKoNRkSo5hmH7phJLpQSAtwbRLdqSHuX4eyR6mCAynni4Xawx8gEpXVznZ2kzmwkJtqLwx4v9",
  "key6": "4ntu9sWCtdQUacqEWeh7egnKKmZsDiNWpcFfFJJcCAR8u4Fintrpn4WhtNTvASorZ2VumWWvwshW1r3MSRPDupYA",
  "key7": "33C8LRmwrDrWSCtuKEsU2C4J8mR5f7apqVzjBFWyF9E8hr3k1cAd9NEAT2ub1WEuERvBBF7DNzYvfAqCGdJakAJv",
  "key8": "4L619sYn7vEAX9vECFkmMxqMM2FNVxh178hYVXqEygzGkVGSJ2mU9gijf6odHAqgNweegBwyS9i3NtwRMtGvrLQo",
  "key9": "5cpumMtbNWW27VVFgz3yuDREu3CYAnB5YkHzPq69tcQsM6yhA8j1DUtXDw3P4Vg5mPEtSsAGczJBgzHiYTSbB35L",
  "key10": "2VevvUhXkyNiF59ZdZmyHzKyNMBiqFQTqJiZzWQvEtvxY9dFxdXozT3LxD74mLvHQogttaxRZP9JyWAkP2b2X5kA",
  "key11": "4mtaXzKoYxt4iPeZqvdesnutx2fdPv1e6UaYrzKrYRXTdbERTop3kW9s2YqbgGDSJvPpp6uo1Gax2ZGtsydKBSvk",
  "key12": "4ToFFd3x9AMv1qh9VSGYN1VTppare7kVyKEjdtupqjjtENWbLWKCNdbpppViDuDN1LjJk83NwPrFYkvN6XiisegT",
  "key13": "2KCiAWJhhKN2686ePzppf8JyziwWrvstJtKQQV73xits7YqNZc25Ay1BtvcYCm7BAHCpqGbmaU3CS2nZT5K2H5Ka",
  "key14": "5P8ZYG9BaUf749ufiEZdKNMLSroKtRxPkQnGK67c9AMiTfqkeSQVZM89pCYFpaJzp283aXBccpRFWKdXJNED9SQh",
  "key15": "3uTgW1uuLUZuZ9kW1KMpoCn2ATvw4nkPjmAYVxt9sVmvZ229rx5ggvJi287rLktDwDfPHLVpW6nUNUjCyMf6i6Sj",
  "key16": "Te6fbETWKNsitrz4uqfhfp9uXDCSFcpPyzKyRBGArcirf2wExmBUSBadAf7awMaeCoZMhfV3ApeLbxC7FBAya1P",
  "key17": "5W5vdbcNzMgZRtfq4An54rHLmt2qmvXnayUJYwsYvXXfzFciyHmB6tpiRBKMzUxAqRbTVxGMxEd6JoCyuvxGSTCF",
  "key18": "2U9nG2oaikSgedgbz9sutCAyExMQ6EZLKKYFBLio5ec5Pwrci6JpnKEnDKNRwZwDykosNJzZC89Cuq2g72cByJAF",
  "key19": "2eN3FnPYcWgEkdoZh8rH3QdKYGrRLsyHK615ZprSoLbnpQoRGdF4WjEhDifQEssaco6mfKN6LqmTx7ves2ZfQ2bf",
  "key20": "261GHrBu2SLtWDo9fJUgHmdqQWdpUCPvabWkc4oCSgKBUrCskyLFCjGZgQ2Z4eQfipFJd4QeNRXBombGMThKuf6c",
  "key21": "3S6q9MwTRns5uinzQMnZ98nh44yyP44abkKvjfTo4pgLKnthctnUuikrNuYtGZPQq664Cgc4nQvXd1sn5KFtmqz7",
  "key22": "3PQer7USMt3zxsHuAWTsdzBa4Eu1tP79ZpeA3oDibwuUydeMeqtTkRWXFetLD7KXaCt4w2NVzQKDymLgMDj5zqd9",
  "key23": "2Qc87qY9YuZ3RWfYW3by59iWiPkGZ8gyJcBsaFG1jqkFpVffrwwZY3RsTfY9rmAG4fZGSDhbg9thw1KAFABxfGek",
  "key24": "2vHdZCKBdcmizU156iUs3fM3yksaVMmRwsA11pj7XLjWymTQvaqEUomMA356hieDkebG61xV9hFeeCxY6SVyXUzo",
  "key25": "4jxKngoEAYwHtjNCDbeBmuzTvKFyaF86pUmrv7gdoPmSSrDVsKrGWgyumtprCifBJHD2jmVTf3Qhw8LmXGDRQFG7",
  "key26": "51bTtJHi6RkMdqLSchqDQR4TjfMhXmSQAXyM6bD6jJR89qeZq4rXimRL1V4bFhjczeqzgcBwYHx1yeFqRf4mWmdX",
  "key27": "5bLa6eQviY6z2V2uPeWf2Px7KS7aohkNGoYTbAFDUyKrwkGDjyows7VP5J1sanhKSMVTDbxqLm6v9erR1mquD9nC",
  "key28": "2Eac2Kh4foni5KjfEDMTdJZgjVgVUXyJsffHxd2AzP54umpqyqVNz8MvaEZwaXoTKVNMFwuFnhZz7CdoiYExkF4f",
  "key29": "4VvyCep6gZ88X1hHRNhgZvXSYmmCgKbFJZJVUUAhXMvEvM1UqDi37C1jkRGspbAjY5udthVmQLP6zc7RtotWQywP",
  "key30": "2yMb96jWqQFK9a1YxrsBuaLyUzZTyz1obH6WpevvaKktg39RDyLVxkUdN44CES3QQL6wGqZx7nX2w8CJyzRKxm5X",
  "key31": "27QCmazr7sUf1TREgtG7a9r2MrvHD81VvJWJxj43rB44eFBSM3wEagK8qCShRCSXtmEEaH1B55W3j5j1bzdMazr7",
  "key32": "3D4qnNyrhVtSUuTNPSw6AbWEypNTwiH62gwmYRvXPaKcTTcT7NuRiovno1vx52dt2LLJTn4t12rNdrW6eAS7wtAA",
  "key33": "56PeYHZCHKKQmjvp9VT2AhSY6TnuvuKYkGtNSfYkCSYPg6j9s7mF3adxL6QmQsYzvr5rZuqqQjQ9cmzRTsjNQ2HM",
  "key34": "3KFwPwyZJRdsgwXs6WrkdC4eyG6akW3LdvtA7bSRXGD7owpbx4946XmrAyjNHwRRdkQoLu7wVwyTrQMZq9mTV8pF",
  "key35": "3EkGatv2eL8YoPjEK9tjKNy3m8fA9wEzWaWDeqaX91NmaNFnp3nof9duPtWWNpDj4r64SnrjKJDRX21bzXLipQh9",
  "key36": "4tcGS2B1GDRUAkrQ3a4dNSYUxyRBKdT7TRNXGHukkRbBJ1zqxAPrWSMfXnAqnxhDVUYE4jeUnHZDcBaVoRHYa5J9",
  "key37": "21N1bGXFjBqZoSRFrgzhUcChvjPc5J8YGYmsRZ3HntAfMz4Z54rGNBYKukWmpUrugHAkUwJ6oK7xLW6EMKTGRQhN",
  "key38": "2CDRL4y4tp43JSnRaQF8FuzdRzzSuSAS3n3an1pFuJs2jwDh6pR3DyumecBYpeXkD4DhsT2yb6T2o2YV7uaTLWvc"
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
