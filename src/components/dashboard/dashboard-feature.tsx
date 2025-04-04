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
    "2KvrZh8JSQKCdiAtWM1rZeQPegRiWiT53tKoee9CieA3zzYWTtQhtVG7H8kRXXZuamNn9KF9cH3PLXuodKhpzaJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdjQd4QU11pKnbhTa939JonDpUcCGU1nWXbNp7XrUXpot32W2rbCBQKfK3gF4FSpGQFbFfVnudGrtEGZW2omqxX",
  "key1": "5PehUUyQK5WciRwTKBzMWDEWP8AkXL9t185GFwWnkGzWPVRAy4NWxdUFr9cSaxX2vgeGFvsuEjtVjMixv2WJujwb",
  "key2": "ZY4hpY2SrTntGafMPaBrKiK9H4bdvbuGtsY8rVuggAxgiRiQn3Vr189uV8HKwVKGErUpQMeGfF16AGbd51hGyWa",
  "key3": "ve8va2VRPCUqJtL6H1hDoSznkBeE16iBCgw8an2DKfi7YacSxHdCHFVvxLugTQw7b9F9qEqiTXb2826qJG6An1w",
  "key4": "3EFVXu3U9qUpbou3FjD15fGHfm8qEB4BTDB4L3oiposYUDYjuQbg3uPwWSVGehTDZKvjQR7UkbmXUCUdRsUJQEFP",
  "key5": "4e1ctAsviq4a5ocMp9LgViEg67oSk1dRsqmyxo2fAksPNB71EfaJYuxLWmZf93ufPm4nwguH19F9k5FwP7ZmuZG",
  "key6": "5yoTrDz7q8eMG55JV8YBkzvVvs5gRPwWLHkJJeKeh8yiBto5bmdJKwVkyn1FU9NBPgCPZ4bGyR33RtKcFHvAGMRS",
  "key7": "2ezafxTmnagHE3SDUG3vqAmaXgaPTWo6wA3zPE9dLH6H8hde1m51FPuWUTTd3c9ApeqbMm7XySYynUSeJoS587Xe",
  "key8": "2qd639DeECM9USYw81M8FjD63cittQUPERsTFZmtK94Cdm2Uy3BJ5P9Lc3dvowY27jV5yvytrZs9uJFEY8hfEeS",
  "key9": "3dXiTGEEUzdQ8hCpbNnRGaiauNskR45YSZFfTtpN572XJCtGoxoFGEFpLvZYrMJVtBJ6Vq281RinQHZYHVazL7xb",
  "key10": "2Cjzrq1gGuc6eu5nQwyxHXBLqBWZR5Uc6uy9qrpgsZZDdfysG3eV9q518kw3FJLLV6VwhEb936gUHQ77HBPxN3PH",
  "key11": "311PGRhyDnDGPJ9yUFxoh46GiXeWxrMREJStvvrbGAmUHceoEC5Y3CTzqcGg4RqUENja9d3F5eN3wdRrcZJ5JHLh",
  "key12": "2ZzF5dHKzyPHDmjx1DVRgn2YnXmMZuSTnbTemW6QjEyFVga3LVA3CfjuvDkvuE7JR93pqUZj7EeQD3ektYXDMDgq",
  "key13": "228Z53x4w9Cpy5Nf418zHmvGbqR5ZCrdEFiFzafSZeEkXQHiiKpNKyB5jvjZu49y4cP9AaqxT4QUEsg4oeV3raQ9",
  "key14": "3DcqiCV5cP4gsJ9aGendqFQYBCJfNsK45V5NgWBt11oJ8xbUpVo3CVaNGoZCs7JWh1RAhMQBFk164L24LnYV6se5",
  "key15": "2kcir69Dn4YGgzU1bm47EKbBUfAsRz14S8ape1wYPd9sMDGjhBbYQN5zzzEJ5wUTG8zefJJuzZKMvog56omFazXR",
  "key16": "4fwwakaALnzpcPuYzZ9smKPVpc7uFX1v2c59VQSrHBmeoa2uLjWBGuQpTXTZTn7KX9yJ2Do1Nu2ywReQ2a9FJgxM",
  "key17": "2FdnH5Qtob7hxeKmibomyN6XcL9p3Ke45vd1wPwWpgE3Grnsb8k2H8FkNAcQ6f5DhjnAKhBkpXGAit2K6cW4wCC1",
  "key18": "3rD7y6taWKfDLh8vqi9CFDSmzi7bQQYWKoKWyjAqkp4NW72wpCtrMrdpwZgWBhZBfv98FEnmNXiCS9Jtod2gaGss",
  "key19": "3xRmpKuSN1PNgCauHbZ3MbRQgqCWUnVYyNb22we5BaNX94BB2FzDRGj2WyXbFnLCyrBVGrJDypeSuj3SguY2o3oz",
  "key20": "5asmiJQ4d6Hr5A8fsy9MpKpeVqkWJtaXxL9V1LnF1Amyb3h1rdR9AMv6KmT1CxwHdaHDf4eb7FVhRiJCMWSkptfG",
  "key21": "457LY5jiHLKcc6gt3GVuGMDJCCNK3jSVwvAZUZut2FgxsjtLLHdZa5wWjiSNsm53TdXVaHgLVbckBu4HHMR89NZX",
  "key22": "42tXRYXZTs9FcZD5Y3dpktVX2aEW9oWCSPge2FZ48BMYZ7hw4pKddGYt136f7pCZUGeMZ893wVpskprXSJm5pZU6",
  "key23": "tDgJqpkw3c4VwarQc7VXfManMbGxbfHm7PeurTxsLVD75QDMnyPE4Tia6WGXFhymxzGWHh3DtKxrN5A1t8JzLEE",
  "key24": "BbHy78hg7DneUbtaJiGYcYswsoVbkPepiU1CZ32ZM3wHqcGU7E2tyLamxQayKX845SaZLGLKV6n8PPiVmm91GC9",
  "key25": "5S8nyZhkgoM83ToMNVMKm7iJ7maMkaJKiAn9gTMxJFNpwMrVXyQJftR8LkZAzWok33JZJhWcHxFwF8S7QfumBH4S",
  "key26": "2H53h8Z61afHVUubc1a3ELCaXn8rfpeZM6W8oCG32LPHv1qNkBU79rpYT5BnGV4M2DydJPHsYqyVfYfc9EttfQ3i",
  "key27": "2rpZ976dpLc51jymxzBC8Nwq7eBqE4o4d3XRTQoP9PGWtPqrn73HTu64qbY9ds6gMVKxuNffnXXUTvuugDJ5GUJY",
  "key28": "42cNzuiLNySyQgLbUfNNhjENE5uUW9irJbhEedhf7fNtZGxSpD4paZFea2eVdAdYyzwPkCWE2qrtRSnYdkmfCKR7",
  "key29": "42j9obeNiQEXc35JNyAzRLRn8i2u6AqTFsWebit7WgtzWyY1DV6bdDEH1ysrXKeWRGSAQMUsaoLt8wX2mBM8oWtj",
  "key30": "3nU4vnTdiQHxXXfujsx3MmddVnBbZwwhcZenDM6mc12KSRqEoufyEJG66rzyTUDbppPzE6GkXfVefzJa5MdLzFPL",
  "key31": "44xgsz5FRx6Bq89T6EqvaTcxweS9xKH5pYekuS2W9DRFXoydQZf1uPRYGuDQJjpN9uyR9cUQngznPtopwxAaepjA",
  "key32": "4ipBQeSC1QiaYkdQajqwo23s2tjcDFLPqf6LfRHrJ2mbKqFh9Vr9wnkctpBEBakvJ9doPPbCYRYpgMKYJXDE9dju",
  "key33": "2HkXP5KYmv3eTF7Gg6u9SMc4rnWaPixFAXcjbcHmrbPeoLdZF7DT9uccJQLNJrieiirfAm7TMi39E2aJbotbVuJs",
  "key34": "5hz9FkxgE7LxtDjKUniLaPTtvqS9hqPYHpMoKjT9wEXf5QHiz8Jfrv3DXAzpmq3QipGCN8RDFd5QCL58E4U5obrW",
  "key35": "2jvpR7fLXvcp1USzneaV7HJZ8TibLwRbdEXpucjV9va4wqkaw1gr6iDayfQMQEknd2BW2JrGN7C3jT8duePiQZgs",
  "key36": "31hcoYA6AoMft5ExnXvrD6nMWsDGAPq3tTv6K9MrkVP55fXVw4kpJy2H1qfqxtYBHqaQbmHvxM7zBj8VjmG5DTa",
  "key37": "stEyithdAFK2Yg7fpBJq7JcBHGvqggwLZAmssqWeanzS8GdA3uvvjpZLtkjJqoCfZG7bx2GCtd9t1iZhzoHxyQm",
  "key38": "4dUjacWGv5Suwmd7Srnc4Bjth2ptJkLAoJLuy1paqbsTWCBFg36AuEJdiZNMF2iRSpvKP9jsQD5sJYo7JW31tHuC",
  "key39": "cXZAP1xrbiuuPRenHHnvqDHRaGito2u7ziFeUNYBhYp5Dt6tmVpYrzbeaCRAJTRS7CgKzMCHEvwbDWk5DKCy4sH",
  "key40": "4vyVVJVbHfHJFHUuZPsgfaWgqqck2nw2prJcc1Xf8vxw5LK4n5qujo2DJncvD1HJchgAMLbtXyf2sCP5eSJ3T28Z",
  "key41": "3fQ3rZDVo11teVYrUCfoZGdLRXyvR2spGix8ZjgkFv8FVgL6LTeqXrDuNU3SnrQNTfGBuV97sQCRQqvysUhwaRcQ",
  "key42": "4tqvrtZSGqUXikv5JFUzozW4D7kLi3b3ttnyBoAAF9bcH1YGVr7PM35pC2t3F32ssg6fT5okL9sP56R29ftboU4a",
  "key43": "2aoEK8amXv8JA8JLmvULtSbNetVPfjPuPD9DTTWKgRCmUK7MvFaaM2NSsWrLddR6e5w75S1Buze2k1GZ4YQ7wKWL",
  "key44": "38kEymSJzhBwDQQCKK112gMnWWbAmnSgpmDkTMQZxUbPX1bJYQTBmnrhK28qsbNMANdGUix6YwMPoe9gYQDhkAF1",
  "key45": "AG5Dy93MXNG9bPgWJ59ahuZEs8NdH2F8KDzrrb6ppMBcZhiNqW9spj17j5Gh65Sjm45A9oX6RyaaQF7GrY4LbEJ",
  "key46": "4hvbXbrXWV8jLhy6pogz9qFAdibtgzMH7NhLrXKEVSNXSQFu2o1SyzWFSYmgAeiviok3pueJDMreGDi4kM3GiA6k",
  "key47": "4rVYvyxbmiWY6g9sfAujRo1xfD6gTA3NgFSukws1r7JVP3Tja2dhqRZd9CUddMH6aG6yAbnbN7pTE7jn9wCCTa8X"
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
