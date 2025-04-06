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
    "48zcj3FXCc4Vjti1XqBr8FWjvYEPmMy6shUH9VtEEdhTidttk9fjiDaadWrZxoiJUhjSojNM6rKeyvC5W6iTwXHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zVUmVfrvNuvmAMDVHK4tjmFNp4MfWQuKodCvYye4GWXcN5CZAnnjvoFaMoucicoaKGNdxQKknJ2DjQ9UFi9snF",
  "key1": "2kGVeEjbeCjrYyeQba3QuwkpDjY36eyCuJbYD6mdnEY6b9rYnySkxnd14dDaHpLNo4F1hvJGBXDGKDLRQt6B6Vii",
  "key2": "2fCTfQg9WuCMy3ckgwS2FT1ZQh9VVpkayp4JUm2wxbMq9XxSD9iRK98VQgsNAYYWhcpBA47u5ZVSZtujNBRrCvib",
  "key3": "63QHo15DQpJ923cSEBeHtwQqkS4FnqC1ZEgiVYXrAyxxY5ejHA6WaKGazXtxx9jNtZNLUDKCSuGXTEdPR7zU3ADi",
  "key4": "3Fau6q4eYntsyqNMpNANd88gKT3a9Yg5m16z9wsPPJwoZbVSbAKQx9cE7xRxLtnbYVKAUN62Ey76e2asqECVJpnx",
  "key5": "29eYMiMSDnYrfXv8Tpop2iRjMfkNUkd3bJZ6yPvQvwgcPTwKjzvMioDodHceY4RA4JA7DYMeeQMuYFP9Z4MD8h3Q",
  "key6": "4iAP6GtucSJDjJ2Wv2op6FDeHK4YuW4uX3r55rhmEsXTCvxKrdFR6LqR5M5fwSCBmbacGLTPiJRWTR778KvkjsBb",
  "key7": "41SW3m5cewFCtX9GQKvPmNRETYHTTUtTD5m8ydUD8Xq5AQvUcqRKZqEymxndhXicaq2JDTZW4ywHRSMSKFzBVrrf",
  "key8": "2AoptnavX9FUEUN8xk24M3DCQiHXJh2HhpC7YqiG63NH9KgqRnU7f5NE3PAHzueCmvxuDjFeZGH9ggDhC4XQpbw8",
  "key9": "SYTzeY6WjUddPtQofDE2HwgZqydxg622DzHTAMtT4rYmuKa9TuChT5Uq3ngvE8oDeCQJFCjywn4t3BjvcvYEv7p",
  "key10": "4pYihQiXoUjaYr6d9k7ZhdjtzfmdMG3cZMhXNVjFQjxmZzcayohc3L1MDhh98LvkgUb4PnBFNXKqKz2q5JrTXzmh",
  "key11": "5bbf8G1zBDCrejBvcztU22gq2TPoHJFv9XHo3bFpFTuAUno1Y3m392hoESLctzwe9pcfxxoLw48UxQh8rUeKcYUr",
  "key12": "4AUJ1TGQDWtRz64FyfvRcjUEXt8c8uM1K8V58T5zCtqDfVUeoPxutqPUf93BLR5T4x3MXG4cSfhF1qSXaFAvf9a4",
  "key13": "2sEWpJVRFEgMTHMFaC5SC1JP93CXG9Hinew91JZFT292Y15EGVoK8ABsoNw72f1fmU91GKMRdrE6Q5a2qToCX8fp",
  "key14": "61a2c8irAcHbuMGgqBgNym9YXWN1FEmwFZSRjbNgK9DwLbUnm3NxpLy35PiYpVsomJbddZcyKYrdyo2ECcir4Lqu",
  "key15": "2Abp6dd7iujSy6j7mAJBFWXdA8prsuFAAUA8UpX9SARB7nXsQ7czcPpdYLxcDXR77oLu9uDNnSgf7SdxWetBKqJi",
  "key16": "3v18TfVrjZayujsA4jJ6uz389CNu9TYvqJU6ohbb9mjMy5EdWdk3oKU1MemDgGvuYDQJpA2i4qeUkoU6gn3iJDHC",
  "key17": "2vK3aZ1BZjbU8j7SEK3e1f2tk31DeZKn3AQXfkfrJxP8u1LggBWoKygomcgtP7qWCLLfsBpzYKqpqTMBo9MbGUXW",
  "key18": "25bjcgv6Pyb1A9YNEaZEyQND9yTzw9zKkDuB2oRcXvurEBT9dwoHtGHEntVbZYCGdw2V8NTS2nAuqtH2CVxWQpdD",
  "key19": "dopmunpvqpSnTHWkKmQHu4q2psshiheUVjeQMKRmZ8WKMLzVrTdXGEv5rbAfMjP8L4ASXqQeyWUjXREUKvkr2Qs",
  "key20": "2dbBxNYdx1KCXgWuQaBzq2FvTGKYxjXmeXoj2NHtswErzfEmQvbeBVk7T2QS8LfSW4ZRLNFEYURCHaAwjFWDrGzr",
  "key21": "3yWyqxjMWxSYuDigr5AARaPTWw8cbrYtcZ3ejJQFAwpUPFbnk27nTvXvFbz42fB9bmX6noaZ2MUPU2mVD9poyxmV",
  "key22": "gtywakbWrPHuE8aL6WrTRPDbfkMQLsgVey7dHKMVovvRTavQsbpPaVKnDafYmLhv2ArgTGJwNvQmM7qLZbjd5A9",
  "key23": "44o6rwrAevn2ZXsC7XJe3H9yvVdKtpB3rNBMhbCDNeMASVVFkQRrygvug9bmb7AHwxCQT6BebRr7c3emGL3GdJct",
  "key24": "4iBfVNbTYKYUPdSfKFQUojESqxY2X7ALXQvY49kYxYy6GajRPiXbvMt3qZVZUWYsJgxUEfi3xi79LQr48xrE8MJF",
  "key25": "3QKXPmz4MVwevJcPJTLFcCxmcsmeo3ywNTpZ5LtYS8xi1f7PrsV3i5ti9EuCzqA3NJSg3ByAiXDektCsEKcAuMy9",
  "key26": "5Ud8BPLiHSVGQEZNgkoMUYmdWrj6p22EzNvnfHigvojnLvSJCHk1u4LF9wKWT8SKnZgqBUhpcYT7892sBHc6EU85",
  "key27": "4RwXMG6oFSmCk55D1aPgesHRBJ1yuVeJCK8ZJKDR1R2gv4ZAdw9yVC2VnyfcdFZ2J9k6TQLYWA8xQmHsmF1QHax2",
  "key28": "5naFmMFkhDMuNxhp8yC22ZKNSJg9Mo6RX5FpGJLLhioMGkzUrvAeRPvA2y6RsPiLZP8hPwoBinYY52tuhELc2jcY",
  "key29": "4socWiMjfk31HbiTbrR2j1iyd6Nye2iJDvvF6DP8inYU2JACXFjdsT7HPskpxYv4dSjavnSztbZkwuMUArnoC8c4",
  "key30": "hPr9jPhhMbykHagAkvsym6cXYwVqxEYppmd1ETRefo21cCEbUTuXr32w1DHH5FdVKk24j1P17nN8wtuJDHNbnDa",
  "key31": "223E3vDKPQmSpcNcvbwEVJ35g26VEBYEsuoE9rN1KhAPnikDeZdTUc2MF8Cg2CMatGfGRoCVY1xTuZJm25n9ExLd",
  "key32": "5teMie6ya9A4nU89yaWiDSnLdVZNNCWFXUSqHT5WXkrMdt97gmJRr8W9zUcKfFd1AVEEAnZKHDTsA1R6Kb5L7cBz",
  "key33": "35Q1wPj7npUKAyw816CeGQ9a49hegqaviFhUh6kFWNp5zR7wa25XcTXUdjZkYzUBJYi2c6QNBTYs7w7DjaNZ9pkd",
  "key34": "2jKG7dmwTwTuLYrS3aWPNG5b49g3QRSCuXCYBNCZdMhdV7R8vG7ptT1Jfytm7bFbe6Yrno4JsuQeZyJpvfs93wGX",
  "key35": "2m5488rcQX1UV5g3HTXwaEFnXGV5YwJsf5LQqQU7qGDZbZxZdUzD5L2Mt16VhPUDi3ZJ6VVghjRP8oguEXPe8H1i",
  "key36": "4xScnjNXrLWcnRJ5LRoy74UBqw6xzKD9V7Kcx4ANbzHyA4XGPvHCawvBgEkMk9TkPHn67M714WXD4uXYsVNprH7H",
  "key37": "4JcvC24M3LerntDAvz1hCjTASpnfsM4AjfhYRqjaqjWpuSfEY2qKkrZ3RzzofbYPy5hJAguVvinqLhs5qc5v65hi",
  "key38": "2ZgQPPdnZdBDuKgY1yzy2QyPqACVcBPmVqLiknDD5A1u9JZDknW36V5GkkHUwsmgYEErVgxRgNmyGfgKDdR1QiXX",
  "key39": "66Dh4mqREYoZFHgvPzGpDX4hsG99d4kyMSziwPfxPzZeSZ1RMKJSBYmBJkU5PzhzXuAKi6DCZHPJ8T5cgCkiZxHK",
  "key40": "ZeAizXqLxHYymb8jAbbYeUmxjJcnpp8U1Njpyn5WjvekyHyur4VFxJXvsEfaL5R3QTbEceKQzHAs3HBNiTo5EP2",
  "key41": "3aHFdYGnqoiSfA11qgFAwas8jtSfnLE9HojuRrTm2ZWgHfi2n8ivqamA5JUafwVwyfouH5ceqeWf97vSGfiDfv9y",
  "key42": "2ddKsKxkcdiVZZV2nC5xFA56BbAi2cTK4GqD6TqZzGX5HmT3ryc5JeugWqcym76RzEbrG49fKUtEtBkSTZy1iKJL",
  "key43": "3jZnYzSFVzNyTjcB57pnycrM7ztoBGpkEkQvDqxEViTPK6XpX48cHwDkYRnGx6wsb1hPgoMwtYSfMcoqEEspSF7R",
  "key44": "HTaa58YszLX3SYXXbhjvEJoYDzimFZz396uhq1XPTMYvqwWMNQRCs6VBf1DoQPQLDJG8WZMskdyM5fQ4dzDGzWV",
  "key45": "4PsQvML2ETemYKFPThF5ARfwoaX1sPJFNJDagDVwNSQwrVVtFK8TUv9NoqLfZMSUwGSy8FzM9jPdGen3nhSsh1oW",
  "key46": "4JGSUrheS9zAcdt12XDygDFTjBNiEMGNXqkt2fwVuw963fjQu3nAznZgWLhiqL6poyLrta6WLQu7njKTWNbehiVE",
  "key47": "2b31cewXwALuEsDfuADoBg5PRqif3fWgEsoNuFW6xPuU4w9aN1pqgYMRdMVp9i7zF7GrF2hUJLortd7FBAdUFCHv"
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
