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
    "3qZCYEMPcvtcNHuQCtSoFT6ZPxspt6WaoQCr2Yn37BkmxzmLLkgHeRm4VAaz1N4kBMZSeMTBXCmEarddtbAKPKZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TM9UNZRv5nvMdUwv8jr2Nh31Qy4D9vkVpyP3iv2daEbrvAC2epZcCucWzyGWXqKiPXyhrE6R2vtQDo3STxRRsKQ",
  "key1": "4D6WQQMY3BfKbp5tVVPFznzEHRq2FMXYuiaHnURcQwEeamh1Vjp314Baxt74LDJ8aBXzHRtnkzMyJx5Gj8mqrTdU",
  "key2": "iSBxF4Dm1GoHG33yMEDyrfAqgzkfdqEWGE28hUpaskrdN4ETs93u1kiHierwmi1zjsojHq8ifzVBvAN7cQExKQM",
  "key3": "2yUDicxBcrbEezNDEdFuK173QKqb4dCqeU12UBkqs9YbbzPwna7saMR4kpqh2wVS4FDmKR1y3ScQHjVbd6Q3zrMp",
  "key4": "4ePYggfSbHArHLAZc8bSRZUi1LMCERGFQuzMYXXMmKRLVjnCq7AenCezvx2qmpaoKyMiWLSqRWu1HXfTK4wgUVMW",
  "key5": "3grGeszWhmsr3R5WNg1C9eUQAgSufSYJ49btDWRN6gBs8ef1BcBhkzL4Kf9HuvcXpd4eoFWYxcNpsajfGK8xPhPr",
  "key6": "q2q6Pg5Tgc5Zxw83c6J67xuUNpNbJCou6LKYJ9okgSrLv9htN7bX76VgcGzJ5zyHmNuFACcjyKPKsbahpYNZiD5",
  "key7": "53f1P9UeK6cXmeMi6wkWnCqXAALR3ouDgtkGcGL4uBkd3pEmE1SjtL5mLJ9QcKkxr34tHRvet6EiJaExce2KuJoC",
  "key8": "4YpQeb3gPdNSk1uH2EiweCcaJAqsmLyJkfjfGfGqbtHmqiyoK18kWjpCWZW3d7MGDrfXqPz4phJ3hLjrxtPWDNtU",
  "key9": "GdPuDwjcLfeg9KQAC78Nx8TxQqjrLLiPvCxuQaAKpGAJTFT74JmqkUt4jWnuc9PVvRn9WPSYiz2SVxDmH1sJ1Cw",
  "key10": "dj2WKWSqQbJqXqHdjYwjpnBHBwwaUZhQ4wiGeXTCzkNprpUCovKrUzvA42mEGYU11Hz2xyBwAqb5s7axkf2xyat",
  "key11": "4znkbgRrRKWQtaRAguZj4U7i4rYTdEqdJXXuJm2dxJq3nvprL5dSPogpi5HqURuP8RameAtJbu8tD4DG6FnBqzEu",
  "key12": "5gCUqmX1BAbfPja5P6LMrzyqdzUwPuuRjhVDcVF8UHYiUdkCMbqm8ysMS3R1dxaARHAejNJVtu2eYEFYUoaepgiD",
  "key13": "5pdaY4CjGrQRo7HNzBbvzyC3nKWgTrAZo9YhPtjB9vyQFt1F4ZQ7BKvncPQsovFei4MjjKYMS3UxRoFftEGZtG9o",
  "key14": "2kkgRfP6YkQh7j6ofwMBFTU8rRGM1Yof3RHSiZ78VCJUbcK1MMbYX5PHx6EAcqx7RbSr8QVakvCAwYENfpTSAvVY",
  "key15": "2BgvEawymajtaRNyARPTzuYLzg4Wmyx3jfyoUXpKUMYFVKmkwpYr5NUnCw9dXQjQvsSfir7sZXLWM4imGBctrs9K",
  "key16": "5NLLFS5QZfnygkhmvnMJvFAtRGRXPSd9qq76fmhewKhNsq1gkwxwqKHSCQuaCg4YyNciRkxMK4fFefFf9CvqMKiR",
  "key17": "26nWu5B97gQfGd2xc7ZyWESuYy7SvgPjcPcNYjqkcC2pBVzWYTCGkizyi3trYpbbk1dZVVdy7Fjz5SJAtZgL49uy",
  "key18": "2SqTv9vzHTb45yNufGR8gzzaS6bY6rTeNFxcZzUcHkSsardhvGou6hVD79qn5i4M7kdyiNHMQepBjLVBxaZtnc8v",
  "key19": "582z3goXvbPbv9Uo9mQ243UpLzT5HoqMuvb3d2f6n46YNRUtAsg7dSWtzUhpoFkwddsGfwKRS3DPNXn5NXgcvpLw",
  "key20": "3Xww6tNcTrr3Ukop9Y3K1ANpYohCWnKUpMLjji3ULE7CpXr8qTavjbrN7pHQxSnZJ5fN7usVyo4JEmK1u9uuMosh",
  "key21": "5oKuAKB3nUTSad7JE8jrB5MrWGbDwAbh2UTPgactMV6EZ1uvZJqarHKiLMST3CUDtWEYGp1UD9H5wxKDJEPxczaU",
  "key22": "3VXRX694dBboo7wyyFbkb5t4af3e8rttqfTbdyPGUKbhTDmRsv4YTHc9tSU5SngdopKpEWpGFRmAFMan2U6RpX7U",
  "key23": "2sGhH1i9JQ4x9mV7erEzfywrbogaMwr14YVBE5q9AzWhjoayKY7tPKZWJgXDUKk9pBnVnSyhhzb6TxCpnS34dENM",
  "key24": "4WfBfjHfSgxNFh6qyhV1oUWLevG8cMAMoDjVbqywz7YB911VbL3pikmxLChgWZnhpqdVTNn4nF2WCB5CqQKn4EjB",
  "key25": "2w3PJuHk4Z5vcEy7taJ1Y3pLG2oqYE39T5ivu7HCMD8ibYx6BE4uDnXmGk4HDEodFoTfa5dVDdzeXievufDMSsGL",
  "key26": "3VZ6CYpozzc8KczhR1zcPiMCNQiAqNoikyrQovPcuNeRoUN3wVc8KNR2B3Fc9sLq57FrCgosP8kagftsgjiPAYC4",
  "key27": "2kFNxLi9XCKrkLzkqubZ6KNVPcMkSf4dJ77tkDWp11hbQcwRGGPxmMetoFzRyi8M45PjeZaNuTRfKy1eWz2xnzZy",
  "key28": "3BiP4tXEjSA9qFQkCPsCGPspkvkTsJrjhB8juoFcG8eLjB89WFvJW45LyWpSgBgzJgy3ysSqWnnLjwnPJ5MnprHY"
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
