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
    "4ha9iZS3VDn7f7qoxGRHfMbkyevp8NrSKH37pNaXVAzyN2G5b3vh9zkQnqqKYg1mfBwHucYSJPskJ3kiKZqwb7ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQXKPdH8tSMK5UHk8kUagyuEd6v7q3JhvFHvDMVDAvNiw61UDSzxo8x4RQVL9ZFtg3jy21iLK8uPAxttgefuygG",
  "key1": "2ijs2fxXxSrqwnmd4oFCCbQP2e1VwDnzcWcMSxs825aZnfjGC2PrUb2PEEakMo2EfcYdHKhf51HJMLUBsSFgsHgn",
  "key2": "5cwXGhGVHS6LhjmFfGqTtsJtyxdEF5BhreUkihWwuudiDH3ncEkPYAxL88aRFpEtxZiRM7EYg8SxRFFEErMsqFQR",
  "key3": "KcK4iQUsSdR88yodkvk6rP4PVjoFrKHy1yTg7gmgLZk7eWnhYw64xNaHwgsJ9dpjvA4fBTu1tR7UHLm9iF82Xvu",
  "key4": "2MwdHdu58FkUmzo23jLxYUCqkmDneF7Hv3EjAvrwkw2FJDXG49KhVewg966NvbZ2JBAxf9BWyqnCuyJvpUZfJoMQ",
  "key5": "4eTd2NgR82ashP9dBzddWzC36XRY7jB3tnnx8hCVZUs3Ewr38is2SUC8rYnAiRRxXS6ZPTyiFqfYxJLvjt8UkXUi",
  "key6": "NWJRhERKcrDSU8uiEfcLdDg7JCt6YPM3JbL36Ty4zr4aLmq1cz3RAmXuHp1nxo4wP67P8ECpTYhSGBRkWrAC8CD",
  "key7": "5SbGJDnhsTnvozjzph7Kx9AqvzvC5R2D9BRw8zwpnYr4x4BVRnbm7YLjo42n98x4paJrYxmHGf5xAcmaYLeVW8Z",
  "key8": "2mPd1gytCsry1vKUU1hxQb2TvKKcGzs8v7ruSK4cQBtRhVXRdeaAEqdynn2WkBMagd6fU24FR3F48p7weD7mR9Z8",
  "key9": "3Td4WyFgGWVaMohTTqe4aZaMkXQovJ7zNmd9P8pQurLciNHrHkuV3sedWWFQjD7HEiFqKxTrdfkcH7uQCPdm6LmE",
  "key10": "3PJk3HqfvfNxvVUAzREyG9QfJfKhbJ392GqnwgTqjfB392KvdUAM4jBdiupM4EV5BZtAUajkL2wrNjBwt34sipKQ",
  "key11": "2ATrWZgNwe6ykM3xTX1FotHyvUhbfR8Bcq4Z59DhZajVPHfNSZadgXz2v1dBLrCCMGqe8rcyH1hXumBQZq7VbCLY",
  "key12": "2nxYwjjPjJE85m9dBxTqoGfP6GDBaP6xYPUAQ1FhKqefBWP1FdqYWn2qEnKDDvrL7U3RGJzPMBK7sXUr8TWUuWNw",
  "key13": "AJpvmpcJRctsqUVFj5KoPJhPVsEzsjHzsHUTjBhpucsDUYMS47jMEUE6pg1F98duqMmQ6X1guSxV3E7cxrgNxrw",
  "key14": "3PaJEMAvyPBPm19DJ9dtudaQ2to4gsZz1c1r7cZZR97yTmKtBJwwnS9D3K5cQpfK3d7KWmk4Higp8SEuaGTRnyhy",
  "key15": "4tsQdUDZiMEg4X7bodJdNHFbcURDxwiiVvqDq6VbFMgBqAQ4r2XfNBRTdadH577GqCNEuMyVVxG83BwLreCresyt",
  "key16": "43Vgc1tbLXVi58bjDK4TorEh197GWjKh5rhEFoJT8iiUN51HSz9qxiW1EJVJE37UHzrt5fzxQbPj3BReS86Ef4uw",
  "key17": "4tTAgjMKzgCPaS6zjVy18GUf6Wo84wbVBiCqcnbhEcZpCwHcoJKSBTLyvYsE8sxnWvFca5Nc5Vnucyr33BhvNMSu",
  "key18": "Rz7jowQktHxCHqW3ruzpet1gpsDj4w4PAX8V7UFGxTWMwRZ3JHztn18rx5dbvymrWrqSY7mwczWG97Kt6dR1HjY",
  "key19": "5GuwwwWtB4qV3jdJXzsdmVE44tGuNbscEZNA5VdPauddbWqGacX9GFk1j3pmMUJta7Dh9GbdthVxsZFttjrKQcCo",
  "key20": "3G8sRpRLjrSk8AutiNKMENhvDNEBGDD4vee1fiHcRdB23bCPon4WnFQiryih7BcCnvwaYVEbiSnPmbdaTmgDRc17",
  "key21": "5bfGVBBPDduZh8tcQusD6B7eqd7zBjaL2SaiTjvKP1JsqwqL7eXGf7WNQy89SVVJF2v7xwSjiJmzb26EjwMXJmCf",
  "key22": "2qEnssd6spCafqmdtW1iYhkQ2dDfFZATVmM336fKapHWGfaERGbcjMc995oWiBy1rUzGzAcHzbN3AMavNowXWcYL",
  "key23": "WpBmZJ7ByrPezJRXFk8EwqrNAQSbweXEobygYUbZNocMR5PYfFUn9hqAHifZVSmunb13ZTPoD2uNrWvX2m4C7UL",
  "key24": "3RAg963LXtC9cUgcj8PQp4iNHHGhvnm3jxQiVRxaxkQtKX269v9gGf22FHgjFZadYGgBevDiaZfEEScTLKxbYQ4J",
  "key25": "4ozoL4cE2EnQDb6ZC3wZcu2qPeARi9TU3RCFy3dy8KdLj5QDtzoybH9xNQi9mYHWKFr65y6pFs9CDtNGxEpQZpyc",
  "key26": "3fQc6ty6AMQ6mVyAYqnQU3gaBkDmhp62XQeCA8JsUe8its5pNPTJuetawSYdoAbHSBxv9rZ3zY4Y6CMb4w9rjBdd",
  "key27": "3EgigrQeTkMg4Jjo24NtBkbQXXzqTF7j9LQgvNmoQxHfF3K4FpBHEnVGhp9vPsNrFpnaVsfWtWSTsM225wfk8MXW",
  "key28": "227Z4HrJYATyQ3vx5ZqvMZXME1y8pJyEye1cBSaPxYpsbcF9qNr1SMc4pYH9Wat52mpyviLnBiiReQQPsxVUxmqy",
  "key29": "34yPYThSbNKHeJSmJNTk955r69yJDWyu6FnNsDBt5jKseDLtj1XNBGNTDVe4J4VoYJm1f5TUxN2cyBmMMVFQuRwu",
  "key30": "4yQeb9AvNvCuj4NF7HbLRJWx17w6FJZRQEvRfkCojWuqZdhYk3yM29oMv3qtApogEWEc2rdxEvwW3Fd3D1pgpaUS",
  "key31": "44H6emGnAJqxdFsxvM7R9N32MZ2ePWE2Rq7Kego6Vormb1G5BRSwmss99gWjw2yVAWpvPN6FMEcMsDsEM78egjCa",
  "key32": "4uc3RjnHwqwhVAXyWDBX4oG1Kxb78J1fdRXYmqT3KGHVeNBctpEvWE4SX1RLUCASR4CfoZ6D64MMTcg3xmCxnMqj",
  "key33": "2FAZh2KTL2VGuKUmJanxn5k7wiVxfEMHKYSLJSGJWFcSEDREo17SMh7CyKctBzEdjh1wMXsPvn6n83sKn3MAtW4V",
  "key34": "4vKhe1Lpwmf6yP1Zt1EiqXsEjFDPEFk4pWhAB5VU4vhPynGF22SznfjZP8w1uXjDwuLzpsEfp5a8Zdb2rjthHWUk"
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
