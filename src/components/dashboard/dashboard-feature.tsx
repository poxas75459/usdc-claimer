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
    "5HgWCVkfUKWhy4qw9qhTKmzxJc8fUXUA5H4ZD4EXJj22yXwb1vdP6NNZis27uPXSNuViFn9HLyDpEE1HCQmYViZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "583pshCrordibsqEbQa5HKr7jH6W8mbVAzqgmUntHwMrkExb79f2dMePFaHu8i8f7Yg2Q4uN3qKhXRo75nMDaVWQ",
  "key1": "oAVqcDeFsHQLy2TuV34bXipk159EjeED8H1qyD6bqZDEX5M5NWpKQ4E3DdJvw1RLz8HVURvZpDMcpe4bcvVdeE1",
  "key2": "2cxz47rd6GHS9xZiKbysTpUiD8yQhma3f16GV9DqGS2Gmsdpyf2UEz8ANvJQEivp9CWeavBGyp3RC4Ex1gCqPPf",
  "key3": "3BTNHAqi3WYtHcrMGsCDBuBGpJ9ChrqGbvXSuMr5DsTYdr8xv8xBgkNLHXd3fqywgLN3NL5kHh9zcbpr6nAgR3av",
  "key4": "5zpjTEzChUrsfZpJJ14S9YVRwmgNWB8XseeipHNGuLrgjCzdLquhQi6SyP6b5ZhhGTnW7Bb7L2wW3eRxzGdqkeLM",
  "key5": "2uqAchKKQcGs8B5UpWCcUE4McH2J5TY8ABq6pndH6LZsPCR2DjCCvPpbMQQ99rLWszoFP6XFYLHoMKKPoCsf5A4m",
  "key6": "3njjSAED8jeWUzoh4U9QFZtSwo42LZP4hk49yxmYTBepotq3dCdsU5bLhSQgQzJYS24LywwKwrWT7APTfyw9kucQ",
  "key7": "3L8cetfShM8b75eKkBZsK4TwzcR6CiJZdUX2RM3sb3G7JS3YNetVGQDJGqLCm8AADdXX37VkfxJqQA7xjsbM5uiP",
  "key8": "3NSNHfiRFeeovRrXqaNUdamU3NtP4rbvYpnMz1zFCzhu289d7Ny5rQxcyZBCvFEBW7PLtaBK8g4LHhcXinttoumv",
  "key9": "2zgzLAoYap4HkXqXKkU7ZSWk3UFh8Xs4QMQvbLyPr9n958c5Lxg5PPz3AZEzKxWSvFRd4YCzWZUFr2fuCnypGuki",
  "key10": "3tJiZS4hEZ8JJmddRFB8MhtTuYWoNjNEFR2ktiqc6L3ZrZKb2jFavXm6JbpGAaKfLHAM5qqGPGyAjWCRXdWY14xz",
  "key11": "5GHAicw5r1qx874JFYUDCZTJgUkgXWS7Ndd3iHPgRwR8qNnsVcowApHMuzJ9rrbyHsEDf7i6YN5wREshChMYRXck",
  "key12": "D1tLmc89FVoSPtpSPn6Lz2exG1F4ikPR7kuZy62o4ormNgMEcuUi1pimdcFYGqDWUpcJ328iM1CRDy6xQXeJFGG",
  "key13": "pKnWaMxG9WcmYNLhssSQ2qdcNhXFMiBxHcKj6a11cUCxCr97DcHRLhRCtoe7A3sJr3s92An6crjjz4W2jFJrgRm",
  "key14": "bryyMbrG3EtcqvZ7M2gmh3nvAEdkLCEhRKC3rUg6p1LFQsQoZR8sMgzvWXqeVcueSrScy8ZzR6wxQT2vrP8zvsm",
  "key15": "3DrSrEFpZ6YmedMVQQTxs8qAXY5ThfjaNoDrYiWU2NGNeJsoosTzZ1mgHraaefSYEQnmmfbCwtMENYhQx38TKuKr",
  "key16": "4jjJDbhjg4F4WTpHy4Z8h13akppLcNojZjQj6XsJ8NzrGp26fbmc4zgYP8NSnonvWvMrfUTGwTxq4UX7juTT1FD9",
  "key17": "gEB3e3ZxcgNi7wtccnvjPFXpVefKmVQodPwVkhSR3gyrYqpVCk6P81BXmPsVE1n5DDFco62NmtpL4AZM3wmxmVD",
  "key18": "53cYSiDRJtSprhCHMUMEm9PtU9BY9gmisrXuSnVUqZfE1GbZoCDMJMHbumB5duJEcFyrYHjwm5jyJJ3BrqQZWmmc",
  "key19": "4utyhdBiTidNbu6fxoUpgdjYLc98yatotkFs9CAAgoUMTVoomFKkyaxvtUE3AqSCaH4UF3cLeyXXWEKkmhhapaNG",
  "key20": "3wR9EtRFsXFSq9Tnw8wPgz1YtqNTWiULBnwytcrTYFG9LmdN7jwYgW95kUiCD42PMZbhixu8LJHqQNHxKx23Yiiy",
  "key21": "5cE7NkuS8V32Hf3fU7KE5qGsY48JR8vQjw7CNTLkD5HpDt7vxhmAcsHNxpjUSScnJLJoq52jrg1au4nZ5enhNLch",
  "key22": "3S9EfNpgYboaMqM14BYsG6ebuqY3C3ZVYt61GT8xjp9PGe7cwCpCA2YSbNszfVVVMDEAtnUgErmaHi1oefyWrapS",
  "key23": "5b3fkYgDbvcPn1mU7ikP362FSbFkG7qJHWLodMVF8UzrXDwfThrdgJ1b6GXAHnqWcr7wxJ61jdsVy44X2FtNLi5L",
  "key24": "3hr89xmkbT2tm34YskR3GwiEwFRhWgWWa8U15LfkhXZY3wn9hn6Fw5FQRtdwHXAfpFMJ3FsYPqQTiJEXJXvh9NAQ",
  "key25": "vYnAtiD91KyWpZk9P8uHBdRMQWfw5nZfBoLADRF1DF1nAPPSJiSM36macEurNoHGK67QGVESkJL7PzMF92mznmp",
  "key26": "59hj6uUtckmChXhWHoaWLedJCVZ97NrBauuQru4fK4uYUM9Yz24gao9Y7BorJDd8cFeLpDtFnAeCTzM7Hu1TdNHB",
  "key27": "34ZEFb5B6QMftv3p6y4oCgNcjtJb5o4X1GCruw76ZWTTSkvXKv9aiFzestRGZ2TRMx8J6KxN5vpW6SjuaKB2mQSt",
  "key28": "3YczFWM8UzjgZzWzYEhuxRnB5k3gvv8EqmW2RQ41hwHM4PmWS5YC8D1b84USZrSSpYdTTzT8GtnBieNKftET7bEu",
  "key29": "2iLJqFJhzsurUiLNiL2ApsbdRyKpqz7kkcdjTrsCFdfFcE417nDFfJhSxUa23eKUh4Dycy7j8xuxJkwDpCgYo4FD",
  "key30": "4D3bw7QwXkQM7nZqhEE23Nx7bcjiKXWyXvzEE6wH9xhgHSQ4JFbmJtr2kD3M6Lvuzp3u8KpFnVZCY2Dr1CJfZqU4",
  "key31": "4CtSEoKWmotmKvXyfU5CURGXP4mEqBtnGH9rrJBZFWXSY4nb183KbvDwD94DdHAecCpBxCkN93PhycK47EpB1Lu2",
  "key32": "6F1zGtphDq8GVi8dWtCJv8wFzPujvqN7c4TFH5TnVNZ8rAhnVJmTFyxksK2wu1YmwF5dm2yGGN6v5pALQarPaNu"
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
