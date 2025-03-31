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
    "pHbD1xpaATDmBByThByFCDoXBDKSBMQVH5nDu7qfFNNQcyyoyY4hQvdSuFkTyCHsSJf346icJS6PZYWFUMNA5XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYt1nrnpMW8bARNWQonFbgtvJCs4bWqe9XgEkNyyCLWCEuD9g6rX7YPR2seaE55isgJVA12WZvtVCA1zJYcjmsW",
  "key1": "2CHHjAfK3dcT4QD1PLCc8N9iq3cKmJrHJ3xie8Hcv3y5NeEYwbfdB9VHdKQXCBbZ5b8QgqaMGkgtgLVqYGhWvn5m",
  "key2": "4Bh4Tg7ujAnnGZQUacZnCb85RUUf9ecNea23MWjba44r36kAP56mncWwAj2usm9eos4WNqyZdxgji6fbfQeSCSrV",
  "key3": "5H8gkMMsEAbgbtca59bMvkjVkq5wiFnSWJm19qQ1ZbXVcovvjBR5iPpS3Wwkef7fbg4yrT4uoByYAYZpTF9GdZMp",
  "key4": "2VSgjncnreQL4XYNeYcPv1p7GMt8xfCVbapdkye5nS8oFShfE5WFW2coBci7FzSFvLVVvM5EZKhqpw7o33k495mT",
  "key5": "4reVYRL1BdNkfcsC7bhXmsMJiCk8qEtMCgemHyu1FGWR127QwvGAv66HfTLWPEoYQaKTrrgsbgb7oS1gM9BK9pC7",
  "key6": "2REezvDGYy2dgupbhMPxibsJ5Yx5p5ziQ1eGzeqNo8pSQrePRo1Bv8XCt4QaGfX9gYcg8XrVJWvKED58WqBbkDjm",
  "key7": "TedDxsJQxvLMnXA4rvbYd1VUFeikCnwfgcAPfLVdqCpGiWXE9bYvZjBUwNfZTxQ8ktEzaXZ6ArPrWpjKxunF6uv",
  "key8": "5bcM91fuooxeR3FzHYGNMJkiVCGUgxLcbDYH9iGm2ykDMbzJ3dq8kGjoiqHZsNyXCjPGTFjJ3ghGNxritbfUHWcU",
  "key9": "3vDVtSqn1tn5bZBPbbvoWArdDQwsAZpLYhxnAK2xAQS6saDC8MBohy4hJA4okdziQMjDVtfkvEsHnzc2MBwjkRt6",
  "key10": "557t39v3hMsyYqRRzxquW6AEC1mfnq2YqtztWbZ5uTVXEewTtCHVfc3ob6td4KgCLtSqJBRHWcKfiBhdoviXc5e9",
  "key11": "3bvSHwMX9VH5E4jczCAD6k96P9f6qb6TnAkRDfBwh9tXsXnNqnSSqRUVuPRJ8Yo7pWxaVkQJr66uhxvXePiD6SE2",
  "key12": "28pCoaZhE2ZoHpmmRDaQVJCzvFZCj14p8bHEdaE18wckvmA35qp8ZfxG1B64EdKgRrJZuMgd58Q4NhqkBLtTxaVu",
  "key13": "2sdU4Eoaw2J98UJeeWdu1Ae9aiaSiFcsrtmoMP3ryjdyH9tjUBoKxezdvSbBmwgU8at4uUmTWHfLGpeM9MRknobc",
  "key14": "5E4UDhSstKJiYEX38Ud5gusQqfVbgpyuiSmT8hJuKzMSRhBF8SE3NgPAVhyaHfetbWvKf1LKnixqGzXbQ4uqskNo",
  "key15": "2D2wAN3xwVZiXZ3UbcVLPP1KLSMr29HXVkGr81JPrWHkT4v367bAwLBLExVquP668KoSrLwm8ekabMTRULfSSLuy",
  "key16": "5Xt1Gx8tVeDYFGRU4JzSu7xP9tQ5ZHjzQpSVMDSsz2S9bjXzKpV5EzcFJtJUegjAJ31Ye8bdx9Mf5NjGeJHTFxqd",
  "key17": "3YarNZFPYYZm3Qp4w2yqrcLErVwkLbskNeB4XLWaSRouZpqTSYrQorB2twnUs51iTSy7k7oxqUjaSPwv2k85i7kP",
  "key18": "4FwJ1AcTRBQBmxuGMdLGTdfiH8izK3yvNk15ZU8yn1WuXCBQa9o3dRsGsYoAWcDvqRHh2jZWeZNFo5LnGrwgyjzP",
  "key19": "5vTnHsXC9RZTbpdZY96xfBMndBLaPgHSw8cb2DKXtpRggZvyiGLoLEpbbhXk9MH39xsgCdZjmzx6wSgHYcVvNjVc",
  "key20": "4pELtVcQBkdexDvYBgrRYFVdM6cEfD79YUCDMjCfAAErZjBiuutYLMq8jvgpye2hrMDKDoiVDZhCperQsvpHNexo",
  "key21": "288d9TLx9xKJ6bgMGoXwsvtwyqNkKYkShFd6vqB6oeuVS5kupWPNnnJ58FfkZzyKJcy74eo1McbGRXH8af3XcSvq",
  "key22": "Zba9uFxYkMJnE3DR9rkJrrv1k5Wcj3uzvgmb551rBTRbzrbRa8C6MVu7spajgUu5UvY7wAWm6bRfZaDcMXYh9mo",
  "key23": "3JryW46GGcYEjUCNymmz3x2hc7yqJRtEytvHjydXuKNEeAisA9wtarXeoHujybRQQdadyBmmv2iS2gGao7sywoHo",
  "key24": "2YNDgoeFUtNZjPTvYnD9m5TmZ5c5SyY4ki5SbzHgPhUvqFW9zUdghQsfp21RFvsBr2djqLq4Pc9u69apgW7sCiDN",
  "key25": "62KuBtRKWAjg39XtKLmUCPh2eZ9L5XnEsVWnoWjFnoevTqArk8iv65D1Fxp2qYfufjZauWouPSDyKPHm1dogT5JK",
  "key26": "3QyMnphgZcbuJFtezGxo9ZLUgtpHjBjUaaMyp5TnnCKWszY1fCLWjpU96oWX7Hw59SbUQ7QGuy3UE4psop1J5nHu",
  "key27": "4UiVhhAYfb6upcMFSBVY3QBkQjKeJ6gGUjCCVUthcSq6wSKqMzeneawyswQmdd2Va7iDTZK61x4Wjm2thEDwHtzP",
  "key28": "4HJBj1gZqgd2fUTcPN2sxV7cyfMQCNfcifmbciw7YdDDoRbo86uSmXhpHeomRPWHLTJMohGLkcL25aYkXZ1woG6H",
  "key29": "5HxdnAPr1mLNZpeY7NpHBTb6wmBB1AYpVKZs638fr8JbcbDayWECUZeVcw4PH74qa2d1coGZbvYDFNhT5EPgLed9",
  "key30": "Q2UwhYXG9oVas53w8pMEL31VVLNuTamb4fqWy8cr6ZapqJQPkXieERcWFXrMDXZjzDecdB9JRWyxF5uWi2Ucd7m",
  "key31": "47mVKdh4gcjRxCV6DWxgzkd91o1Ey9G8YycknA3eFbiY3S9v9Xfbm2mvJTq3yNw9ExFAwWVPRYMHyjqBJSL4Ldje",
  "key32": "T3yCm23xLGfmoXik1ejaPSLbZBQd5CCc4vdNsXVVwZ3NTz4eN4oydh9DtJW6qhmyhPikJxTEWoVm1M69f7VLYX4",
  "key33": "4ESiTtUA958Htk2E8dYrpXpZa87W14VHTGfwNTKwDgfe56Ps2Ni9tnbi6ewCUdxeV5uaVagzErVUWL8UL3psZDzM",
  "key34": "VVLHt8AAcJfuhbdwoqwtq8jjr6UKAXyMvNw59NgsTEoNvubr2VHiR3taSmecKwkmLEXGZWzn7uXd8uWCF2j7a7F",
  "key35": "3beS4H35Mco3HLgZKR2PTaZfg3M9QiRCNrDQQaxnEzLnEssDERoPqQgEqh134Zdsds9vTn1CndYArgKmMgVk7Uge",
  "key36": "mjqRgbngXbtAjqpA3eCQGGozrXRFDnZqLQ6pZx2n4vYcga7wheqzMSy1ahS9M3p2BE7uk8VYVSceNvQZH8q1xZX",
  "key37": "4zm192XUC3PrKnSBNqQZWtDowuFTh4BSQbR8uc4VyMdBHqCMC3vUBMCQJYLNrVTKtCyzswyU92qMkBtqWoFXWaau",
  "key38": "2qEBUd6sDmCfDaDRkh4Hw82kPPsP5hE8L1Qh9rTCDBneWikwnarcPyrsYDy9qxiaVoLnXC1x5xyBm9i5oywR31Gs",
  "key39": "55RNY7RZuR68yTFZzvpZzSQvifuAaigJz6GKpZto4fY2hL8dWEiTFky6JBhsy7hupzQj7BYkHvMQjEH4BeyBiMVV",
  "key40": "v3o1tDBs5bL7Q17hFk9G4EfJf2Arh7Aa1tsoGvrLc9zsR2ATNRgD9cYYqpU54KWrGWY6iWtPEvzUq4rNGTrQZoc",
  "key41": "2YWVHmUtADjtJjCyVcoKpe2YdVi6KLmBbuJ8bbNToieJ3JsaJx8ecNaMiWXJeGgRs8ok47bgX6PE4n9NeT15BhNv"
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
