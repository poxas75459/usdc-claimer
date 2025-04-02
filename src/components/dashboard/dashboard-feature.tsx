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
    "4Ag5EaFhLNkvXUyXx8Z2zqeZubbDKioYQyYMuz3K82jTruJuzC8RARXQan2ZzRs4rAcQJiLgABUkiLCFUqf39F7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Na561y86SAWNug5J17RVqkjqEcXSfXnD7nmWoRM9HFmFY91uL5hysoVQB1nALw7iCxhABaTq1su39yw5Xg5Hw2T",
  "key1": "3TXLtvpub9BUyeNmqJP1xNALG3zGLMSn1kQiJNa37bDSDjHbtoYmvmzoHS72J75JHEzSo6kCF93XLiTEwFjUXw2",
  "key2": "uzuCvm1mWU9fvrb2BZWgPCnZ5LWCa33PeCmDpLKjVJfU7nFDTTwwnzc99yRBiWxYB3h2i6pLFivryAMSK85ATTr",
  "key3": "3SBpMFi3jThwVLpJywjZHMsht1kadG6nCjvDmQ9No1jfejFXvUWPm8wN2CMbXM37nk5wjdvNAEgW8jSHi1RAhfeP",
  "key4": "4gQnR53rbaDxNBcHNxPFW4QFnKasyamcYEw6rnyqhSibYxUyMoa69hYPqAx3u2VpxsVtWd4cWPQqj5R8SexYD6QF",
  "key5": "3DuKByuZJ5UY2Dc4KruojBhB3v3ix7rG1LtEMvcpGhryU2nG8FnFPTn6oVvB7z7WxWrt91r5hmRZKHkfYYeCBFug",
  "key6": "3iL6bMjJMRxyi41oQhbFPJrAqwzJkgD6Z5WrFKmwcXicVdH6U5vAGArGwY9dqoxGLXWXb37hDAKwGTwQhqZwEGXc",
  "key7": "51MhhrrSbcuQqgPzKNLzCeRaLS8J6jtuvnVw3hYauiVPbjWoDaqRyPU9UtF3RR8L5GFAF3PUTo8ktot92cvqSNqh",
  "key8": "4EAbR65jk9iAPUKFrxpQiqfjNgVHP12cZVHixG7zKJutdrgPCRJ9ksAmfTbmMr9r1W6mudEAhsMDBmnYfabzmj2F",
  "key9": "5QrHQSMcB2o6Z7tSbvAXV9mz1tTDF6wjjAhRbVwUSBJFERxTGiP1QdCmA5uMJ5LS7kKVLFTfG18TVDdR4pDCx5zF",
  "key10": "3MyDQPwnuS2PNfdqr7DKHWVjvvh7FU6yshtNJxofs8B9CrWCqDT8QSFHLhNpu85GYtzYd3Y8SMYFEDP9m6DnxcgD",
  "key11": "5mhx9m6RmERwrMQh4WNmDFbJx6M8HAVTh8SpAPVTctAJU21QEFyafMVf8C6EiG319gE1jwk7UheQKmB6HLHANUm4",
  "key12": "26WnqKEDLymxzdw4nJz3bCd2qLxG7ufQ5sxNUCh1wFPXJfyaS64FD7oiappMkxC5mYVyMq8bzFcv4JY1YhBFaZSL",
  "key13": "5ChGM5oLqnL5gR4WStCA3ae3gmPyHvFZWUjtvnRwQvNk5DtZMYB5SKFZNVCCWNzvCHf6LSYSw7KymW9NH7xWjiXq",
  "key14": "5nAhMGnRqzfV32BcrPE88BbPa7LbE89w8K7t1CdDp5xrmNqyGVzD3j4oqsQifdHvVcDQKzSdQ5rwh4DGVjmv92Hq",
  "key15": "2NbamJjbxUnc7TMaDm9vcwZsgMa85xocJSEr9Vo79ZU91NPzZjbB232KFyuL8iLFVX7W5tMd4WTGfZpMo1ry2F9C",
  "key16": "oqAivJABBQKKd6ZrKHtaaiSYVF133pAYy58EevgDT41TV8QAiwZHuByaXmCKU375W2oKJT2qoy8CRPa5CJhgDYW",
  "key17": "4uMYPUxGw1QnpgasofZeACy84dvYLZFtb5hvbHhWwjH6wrN26sDCvumvVmLdq2N8FHz3436Noz4PELH9F3GiDsNy",
  "key18": "4idtnkCrQW12j51CYRdnH3NKGuHJmgSWdKujg14EfpPfsJPYtA1avGU944hAocGHfezpvfNpS4AzPV8fqLUfMKDG",
  "key19": "3VF84HBHvynGixGdkvazpHziv7YThg1pNpVQXxHjepFkVCvPpc76U29i8AeRdEQYXyPG2yLiNTxNb2afKyYAEBKr",
  "key20": "DAhfqtyBcuX3fUmNgbXftsrHTAxu23wFigtnXK9aipB3zvmzSADSxmPPqDjDUu1saxDBdmuBwLbMYBGMTj5d2Am",
  "key21": "3iWviurtuL6sQj3oApFfcNnPizoemPSM8sPLB5hAGbFQa7yABjNqkh7RFp5QdisUNBxtkFFrgR5cmrws7oYR5QBu",
  "key22": "5TybYRstczBi8NAmMcp6MoXQd3Hnm3VsUGNnsPTcAg8qkhUkmVZxxK186r7wN9DD6vTttmsBxWWhmXk3z4D3WGrA",
  "key23": "42ZCSXPLwWXZPBhvhk1TcT2NzPAFGFB7d48ACay1kd6CswiTbvog1PEha1E6CncdN6RkTzWREZzJDoUNbXQ3opUe",
  "key24": "2ZNDVU8vBp8T3oJCcM3Gn5Ex54cgKdQUx2rBWcy8GRE5C7Mv4TNHQsQtzoiHCqtCjhSturCz2h4tc228ed31jTFd",
  "key25": "4SZGzxfZKuA4wA5oABgPPaDkkRhwkQwGqUDkKcti7sgixoAwZgJEJqyWi6PZW4juDVQFFKwnbqdKB55bW1mi8znC",
  "key26": "G7X3vvk2LoH3eHDT9RKywEsjx5xAEeRvoMJcCRUBXA9Tw5YUmLkLtcGBTrxDti3B3GY2LowEhMaMeuenZhi8L6b",
  "key27": "4DkJrRWdQMXiTeMWaYVPMg2CCMTj6qy277Y1qfH9zFoLNXriVUMr6hV1Ne34Lw1BDD3Ep2RLcaVfit3vWK4Cmn4A",
  "key28": "3HVS8zPaeKqmdfhWwXYWLybg8rpWQVeZAzB4LQBS9wjVAqnCnt3dVf9CabGav97kL4XSUZLjEbwLbEwx2pUcAYuw",
  "key29": "2Qv9QzueZCwFQwBhpCTEgZorNQeWUMEC24vRaaWCTXNBJBpSCMKTkujm1Vp32qr66maXRovg1AHMmksGsFwpxXjC",
  "key30": "2pP5pjuyScVpkJHJcAbS5cu4aeRcmV5p1i7V27JpsrL42kG4zQa2sQK4HeytpLfAnT6VgDJAnuNAQHYsUT8ZE26W",
  "key31": "4gkevC3xFcUJtj3RxnEt3aWE6vXHfAUBrWcF94ictz4Q5kiwVqFsZDLk8pPKJscxLxiuDL39fRGhsf1WQ764UiLp",
  "key32": "2G3KcqmriH4XGhRLQPjtGZHsgCwyCS9WTetoqhAfFFbTChqPGEo3rdhN7VMPi6wgGoEkk9Rcdt2zA8G2mkE3KnVi"
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
