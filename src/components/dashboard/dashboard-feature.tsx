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
    "2SbMYfGtXjtW4T6jQTEzFUvPuw4ZZeJnvj16Q4EZzTKqXUxAkC2Ztg6EPQoSC8PJDHJ8RfjSAutxgmXF3tFuWC4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gc4uS53tmrrUvUcbfQdD36ox9tVb88jxgNa3UGbASrCCNyKNPJ21bkfyqDdhXCgq6grxChmbqksgAxQ762uKy2V",
  "key1": "8v8gHaQEtvMwJUzqQ7rSAbHFaCtEKcLGQXAptjFQm1JNoFXC3QZG1w6ixstMCnsLj2sJPi8mjX6Epswy7FnYzWT",
  "key2": "2yQkWuEo5Q7zxDUqELeAo8is1pmHFJ6UkBp4sJytajdgPoxgMzcnmoKkSnHzABRKqeBQRmPvwtANmAkLX5VsbpFJ",
  "key3": "5YXhrzszsjANupFRLY2ubRjfFfWYuWgooaUxRU1Narc4of6afqjQrnA5RYCHcLMdRQBp1tomJpevR2Gms47hY8ZR",
  "key4": "47UecEgyjHcMB5Bee7RuBZ5RJaPJybMwRQJr6sdeBsXS83Ary6QJoK9vHg71p35R7zRUN11LfEj1PVRGkHM59LPP",
  "key5": "2TfjkhymXQa8n6me5b5wFN5VgKLvgN1hMY5ZTAm21HUBfDfdazTwJnPpvSdieYHG2Z8mqRrXRcPqyfMcx9q7j43",
  "key6": "5D18L8vV4EDsF4F9TXs4A3Jx1fMka9nrhu7Bmm8ENc7RVmFt6Ae4fq7eDdA31zdmEVeLjggELggNvb4q72hZJYxR",
  "key7": "FYcFEVkc1ypQvehazmPm5YdvVCLa8GzVuTogrQoSrKBdjf46oCZBhqYGYmZyoL7teQA5Qi5rqhqmCHu15dggxV6",
  "key8": "2dzuLuWYPEgqzDbEmxQBk84v3WHE8mYWoW2uzt3Mz2CJHiLewPY74vzcAnsJzZYfqQGXbo2Kz8UcPxh9DFn5nmWE",
  "key9": "2sPqAeumprc4knzWBVfubxajytPdqJj38zPB7d4k4P6jZReZRpjBu4MJMTBv4DLNKa3zeWLmJmKXD3V6uUZNsmHK",
  "key10": "BudgpoyBvSqzpA7iB8de4EEZcoMNoB3AjvruYqN2niFjfUNoBxoDuusSd3rm3Kkt16EntqTJWiin1XT4gPCE2ed",
  "key11": "27aMhn1jAucuxF1v2RPEzbxaRLjzdSFdhVxLjK3L9gUxqe9xpmmYV8zRfeZcJLAnyiW1VQGZfgP1bGCHhhAGGQpz",
  "key12": "5Z2YsuzD6rLnyDRw7uMiQ1MUPn7tLEP1g8q47Jhpwc43LWq9GEMYHKosxDrWcdiN1MiU5k88kVkUUswipT8Wcxwg",
  "key13": "2aKapvs8ykPmbWFXkKVXmkCQL5aurW57o5DuuXzadqF5EgVPCGAWV1ZYB8A7XRJtp6npqk8925CW54gGnbcfEJ77",
  "key14": "32EyanNb7U7n9noMw1t1i8b9dJtdtsSnRiocziqn9wpnz19yhseTuutFhXw5b29sshLVEygwdNtyCg34qu8dgwUy",
  "key15": "4yVPqLKK7rkoPkBztc7YrAtXYkRzqxJPgScDgT2w8L1thfhwRqLYh2CACiNmScoX9aFraB9w3Vs4m7wmxSWkYEEB",
  "key16": "4R3CqFiHLC8XjAAvianh7mFTd7usK56j7V9eftiMKoX7MdJ4m4o8BDvdqLmF1v3Bi9RuFg3Rq76SifpWcAyUwbfZ",
  "key17": "3iSPaMQHuATeW4KxE5ubcYoveTJMrn3yunHggoBQ4AHLDZRQb2Xe4fbLoWJYCeTW6fb7eJe28BGQhkc5qwG2HHrL",
  "key18": "4nJ4d4LBaje9BBMHsR44pGC87BFtJJuoGXnzTJCZsPbiqFA5oEWjEuAkBMwf2hk157X3oWjoVdURxYDipoeHLkMe",
  "key19": "5peTZeL9uN8zMTuoDB8iHGgP4RYNmdhYtLor9Ska9wp9fz15RWGLqFRF8azNHEnio86QQAPsbJryZDYUkTSxpdkp",
  "key20": "bPE4eP4bF8sUnvXq7wimxLvBnP5iRgq1hQjdXAEHbSxVs928VhhNM8zzjMJ7ePL5iFvVi8xNHoCtUbqFej3T6rq",
  "key21": "4J4fcZKvkMSf9Nx1GpWmqoowmFhPV39nxyUDHaxCbF8eM3QRkw9KdCBQGa11jhe5qpHAhX7EQotPiQQ8M4dEZjy1",
  "key22": "rrAoZYMLuwWWoy7Qc4xXHuEZzYXbUeaWNdLfR1Z8YnLu6hAEoWYkQafeP3pXfG2P496mCouT7mhJQWjCoTsAEBr",
  "key23": "3gRD27ZyztGkwUhyV7YepnKSahF6dJdfVkUgGuKByXDnGKircFrVzjcPTzQ3XZskmSRPswCirSfWAYCbDP73pygn",
  "key24": "TegnSJwjhk7ECKoBTeHPVYLsfKnFXTg5G4UYty8uARsja7mkUHF5TXDoZ48zsAbfqyVWWyLJ1Wu2wu1PgEhw9dW",
  "key25": "eWKmuNrjqsBi1dysezRSDs1dv6XVyJDznrSsJBjBHiGhA4L9ZGX59R47BBAFjs1T8q8sCvMZvaoLf7Zb5dQ5oLi",
  "key26": "byPruHX6XXZSsGpZnw4HoQow4un5vYHMobhkKd3yANrBspMC5asr7pJfMB57Uj8RWEqNje4E1R9dptBq3aiDp96",
  "key27": "4fdXS3fEJH8AVpgFW1jayYUmW69UKgroUbd5RPD76vXmakg2iNZqejcBbsChw8UR2JzWeT828tXKDjTvD2cprLTi",
  "key28": "4bXBNyoP7ZFoA8C1KyHxr8DUM6euSoW4ZSfd95DbP4ngFjfmLWm9AaDQDQ9mbqP1SHAozLsgHzhXTsvS7Fyh9h3M",
  "key29": "3KEFFQDK3avRiqLkwQJmGSFuAWoVkG8L8jZTEysE2JUzBm6q6VjY473b9fhJg829Dpin8TfhMCeAPtpwecv8NfpX",
  "key30": "2NvhPuVU3WJfVyC9tqPNUJswTm4WyQMMewr7HzyTjJzUiGVFfThags4pL6J8nFvTvHYzxJEt4bXG2GkbaeEMaViN",
  "key31": "3RE5qwbyPJnbRkJk6NEN4x6WEeeM6f3WCtetKHiFR4fx9YdKQ6Q4rQJLGUcHdHftdVFgJUVHbNHRhHPozKvUaGKJ",
  "key32": "2YikDqKbA3bxYn1QQ9X8urV1eJYAfFkZt44yKU3ghEaeCBNtTtb3jfFtedKawovmyEA8p2hC8BX5vQrQmMAgE9Qq",
  "key33": "4ipF6gN1rCC47Qm9DNCHEzPyktNRhx9GJTZ2VvFJ7Qvg1noRXEz9j367FH2MMa9HzaFPXPNByiu2ZENtW3HAFBJN",
  "key34": "3GaeqqgDbmBJo7dWvgNjstptvm2Gfg2veaEmQfYGjb4y3N8mSRnenLYwHHW1NRgJGWN69nfVMpNMXWoDBVCHsS47"
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
