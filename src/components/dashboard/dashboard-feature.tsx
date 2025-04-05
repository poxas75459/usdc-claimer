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
    "3Ag69FAMKHkBkTt6W9t6MsDcBDGdS5ZpnDxqWkBnPjrYg1j8b1ptFKEVGpoyqHs2yUbUEKmpKf6RCKsoAz91K2xW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ayzcpUq2rCcgmvaVQ3KXLjWGitQoyo71yDCdMVGsEZ5FmYGUFZYynRno5aZVh7uKc7wAXesaFXvHhVy9qQuP5vn",
  "key1": "5ErmadEbPTMyPaZU1nd5mVi3y8CzkYuck26KoguCwHFTrUr2iF4SuPrfDaJmzUyhkgdxpSBCQvE2GGJCpdzc5YHn",
  "key2": "pvJSKnr3trWFdVs87RkC28wvMigqiESBdiT4HRMbfhrHejKPfzDXmZtJspCcJxTMirw5ECuqGThvheiskSKsKEZ",
  "key3": "2PyEZQKC1XUobdDqs28KiypMD4QAPu2D95YGqnwxsokSXMj76s8B4ynDQ7KU9RcZQruYJXD1gWK2gjuBbnZyGYbP",
  "key4": "3gZ3qGtTbPynVaNx7mtxHALpdULVQ6LUY8qwnWVLgCNuZTDCg9mxZYpMNt4btgr4Qqv7XFPMJN14Cq2ptimAebDo",
  "key5": "5T4cmHLSs66JYX7rghioGEWbZZ4QDSxs6qqx7W9PZNaemkSqbhwRPVEitTb7Yo5u3u4eMweDSN2kjJDtHt13hzEu",
  "key6": "EZaFMA38zqnmETyLNX46qiHYxiJMPz7utKZsPmoaciCGvfCKX1vXDd72yqUmtBabPt3ergVPvDMjpBWMhguADWS",
  "key7": "32F4u8nbNGqgwiPSFCrnQBUgdhzWueqtX2UhkFtSeSoecTgsMvhaJC9QqdSf1UYWrV13aTdU17jbfZedg5E6zjzK",
  "key8": "4PhZwM6C5h3vr1p54ztNHsyYNzU7Pa4qtCdbMAL3X8JTY88FcB6gUpBNaKhoSbQYekDB2zSjfZPwGEngzd1Vbm9S",
  "key9": "NtskwYDg83DNr8Ud7NkRWgcSe77gQQJkhcjNjjZdgcVqeFt9kjy3hGkcuroYxEENfC459Dr6yL5JX6F26qKsTr6",
  "key10": "G8w1YnLpwdHZ7FxMQshAq92jw9L19rFGNnGhyWUwjx8de8RBetxbysjaibb1eMRk3kVPuYwSUa2WYrd4XHceqAC",
  "key11": "5cPCwfdXcxtNV72NN5jJ4rEMabccEqAGmJTXWiq4La1yPPVq9QuFgkYbeCz8xm6NYjuRzPPqt9az7AuuPVRFvaCx",
  "key12": "5j5Suhh2wpxcryVF4aCEov93MihVnqMrQKodXLzSruefSa2Q3732GD1xcgUqwrRW54WKGVmHA5oFVtzRF61rLbUF",
  "key13": "PZWyMHAxrP16f8sxtHuiYtMnBehP9M3PVZXKnYfDJz5MPzYJ2pVE87Ub37XsPUc9Cn4BJWQoFSg5PanxaDwUfjA",
  "key14": "wv6kmxUC6miqViQSc34jZxuntVGLsFp6qW18Lm9Nx55GD74dw7opNXLGhco4zd1mYcwxnpY6fYTsqZmaxnPAQ87",
  "key15": "2Ur6UK97HGegdbuu15NoAvoUd2yvtBuKrWY9TPoDbGe1b26qR2Krm1egdjPiE3bqsKhbaAwK9w4bj6sGWLUAFvwa",
  "key16": "tNeUpijR4vh1U1oBxcotJoYqGWb3uW2zTjofj8bq3dyfQeGQp2Q5rcKx3vGvk4GwMYhbuRW3fXoXoiFiiEigJnr",
  "key17": "3eaGopBXRasTCJAHMQ67QF5HhkjSwCxy4otANNxKtW1h2FCJEMaqQ5WyEnTs4iNCoxMeaRzdNt2dFhLnsfnoAnCB",
  "key18": "51oCvPQM3Ud6fh1eoV3YGKsUN8JSgaVN3PHFURKBUtYt83AQEvjpGVURScAhCicG1m8AV1sTTEiXPrLq2wm6L31",
  "key19": "3mNZPTBZkg7ADjJp65sUzBdTr2wt5grJT9UztH7MxFsYXemsVEPq9ucgSw3BZMJL6y5nsR3y5kVQV1UGBGpz8Mzb",
  "key20": "86KarKK7YtHLcsUqrCcANBRpzkXc8tr7nPhFVr5fMA6N7iNX8rg6RJyak4qhk3KbXo5p6ViHbD1Nx2A9xoci6Eh",
  "key21": "3yodTbE2AfPt9bX1dLZpUytEtdSdqYAsGquPhP5M6drUdjdxtJvFzWQPTb1NgMh93VL5183Fj1nua8wYVc7FgSBW",
  "key22": "26kwrP3hqdEqSbsSbryG9wjVkgPP8gLx9WgyPf1UNhhQZVzSApqv5Leoy7GBPYSyVAH8RtMr3QHrTmTYqmXxmDQq",
  "key23": "BQbWeE5S8Z5mh1F7Tbj5mg6cWYguLFKSnkdTumr8aRqpozoXL4BCktMPH9fLniBD7wG2dCTHq2scpTv8gDQ4DFL",
  "key24": "5mVvLqQ2Uo1tsMekAvHQAqoN64TwuWEH1ccdcq4Hp2UW829r2d3eFmEPi5T6N13pma4JhBTZs5tcqhEEtQNCHkiF",
  "key25": "61Ao4ZV4KafEcChnmfeui3DEeyUVb3WNc4t2LrdCZnCW8UZ3LPTg4PdK8HzfVbCaJegWAsu4Y2p7qZUBjAjF2Vbt",
  "key26": "3pu9wpH8Cw6ZSqDLrGBkZKNaQjEugYGhpDVxe7SAD8LiKVKonhK9rLXP7E9KCiq8WPvZQtjTob13nCugbw9dsMUN"
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
