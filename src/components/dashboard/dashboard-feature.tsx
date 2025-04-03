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
    "34xxpxWdMPkdqPX2iWQztGopmn9pQ57KLqkvKd3rALiJ6jQVzCnFGLJ6bK52hBSurQofEQ5qhL2WJKmyUaZqSRRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxQztzzn7Xpo6tt19QpoKts2yQB8ut35egRTj8or29R712KqzTTsuHSG3RjvQJQ9QFChVVtYVzCNrGp44J7m3PE",
  "key1": "4TXmL4aAYSEYWpJxNa5yU5gyP1rMtdvR77sHJcqLBYnJ3EshP3tyfW9CfXA19q2b7b5QHaKKfspmA8LfQnxBfZUC",
  "key2": "4eqZ6cpk2v3r5SU5Fr5QQQoCERkmLsqvyB5APNYV6YQWTe5eNKtZYF8yQD9DL5tNpvh8RUqUJCe35Y83CyFJRLUb",
  "key3": "cVumJiZggNX8RXLn3veyCosmMcWDHBjCFeNrpWXHcJ51NcGB9ixTvwf3TWWDoMXYp6gwKTSxyEtUEwhB5mdaF2u",
  "key4": "2uewG6KCwmF262V8ZwXCvz2rrApAQBEJEgfKCfCsqiLyJzY3NgTPn2GYNGB1rNZkuPADfgH7beh2uJoNBjsuoxyH",
  "key5": "3Nc8qYN1pEsr8H7S81ZANm8uwwFoU3s3anHE6KE99RUr9xS81m8q8uFrhmaSnH7L7bW787u3Bfw6sEa7GR8CU9kV",
  "key6": "3LMo3JtML4rCmkVT15nyTGUTuthdgiDScEikNyikGobwWn2LtDeSGJHKD87XnYVQm5K5m3Hoz4WCm9BRcXn8X7F8",
  "key7": "2kkDV5dbM6b3fvCK8oEAaVKEiqNYZkSDXkkfPo9KbRyeTGBJchrrj3BGyqtxkCtEjX8hdSwozhgrp5jdyTNcnqfZ",
  "key8": "4fW1nJqHoyKgR3bfL4HzBcG2fsJ4hUjY38XWCPZgfNKwcWGLFco8bgZowuyQ1eahRHJK3yX7rMQBz6Ldgao7CMm9",
  "key9": "63Lhak4uWaEWAKyADbvKqKMdweWV3rAce7TNep7WjZnWXodo2yqbZJkSLbC7WyrE1g4CCcmJQrqrGH4oSf2WN9ds",
  "key10": "44FXu7Pik2nRQ5GGmAzGwU2Ci7WXXPRjm379WcssGM6xSzbnrzNwEVtxUbrFjuEJBEynoM8AmVfAm3sAwt41vQeM",
  "key11": "2aXc9Whw3uAx4uLqjpHdACAhe94bNXa4Scd2rDsyUYQwRD9suD2Aw6sA74B3wqHMJpeL8kUFmtsoAjrCrgdEqG4f",
  "key12": "2L78p682uZkTciC9YuWHVPdgAjCEQkCk3tzUfGtySSQEQWNmG3BLqRSgm6GYjDqwdTGuLCdEai55hJWuLGHFSKLM",
  "key13": "2vtrTrS6SvZfM2AAodjDAs61Zk6LhqpF6ttyNZVc9cGnQsL5emWcMBBZ7a19UqfK5aR1xDVnCkWkzvB3D2eM1rjM",
  "key14": "z1bMBVLkeJgkLo6UzX78gcyUkpZ1aaxoW7bc9cHPhqpXAtCM82HmbDzNXKneKJurrg8PXT5J8iMFnatnhsDAiH5",
  "key15": "2tBLdJ6ApNZW5YabVbgXYcQWgDgiTc1DFNtZTYZJhm2TdG18fsisKNsTfn7JhRFPmDmse5ph3P1WWyX1LPU2vuA",
  "key16": "axRwf5Js6AChkeyPsW6gMFUEq2bG3YSAsxVqeJqjY2Fg9mUjAp3VcpoiwnzoPLjyjLRw3zTQmM1Cx4VjMRNu9Q4",
  "key17": "2f8PNyJJzswYat5sTqVrAg1q1UcuGBi4dunBL2HeQyW4UGM9LpUvqgKaEtsk1xNvQFY2sMtrWfwmzNEyvKbErrfc",
  "key18": "56dZfe1MHY2XSQfC6DTA3xSNi1NJaXfQvvaGj3v8YSaZ46fYM18FXKZ855tMC6c3U56mG46J3U1mJAnskt45KgqN",
  "key19": "EgnECZKVCZ5FBMQi7ZHn36b6QbkARSuUmBVmVXBmsQxLt3pjcJWehPpaSj3woFPbb58uBHzh72GbenHc3oSkfAT",
  "key20": "4uBrEbrFAkgaHKhgCGtsdPMhkVDcxPmwh57ue8s3gxYpsh5MzpPoMSKNM7BzPvjxbiZU1VwxHnnFGvEoWXNrCKgy",
  "key21": "27YwWPj9R6ALwkjaXgbBvUHRaZ2ZivU1mY65bkXLS6uNez9Jetwq3ZTVsqcS8roHjuW6wJxtLL2CicipW61TsBJX",
  "key22": "2P2McxEHJQ4RQ39km332u9PtYHp9y3F48shAo6oJpa8iJDeUuq3Axb5fCioHNG7ongmBk6faUQsBPYanpVLMvh51",
  "key23": "3PsxGJj1dePpoF2PLsAtqtR7WYQAEboVXWcPMT6wf9782K3YCQLQrhgarUtiChTiV4ba7SNQoA2HFM6NwtojLi4N",
  "key24": "2EoH9d3i6wtA1opckGkf1ERw7aH2HuyaHb3PVj5gQ6N9Knvv5toCuUMB6yipHUjuySMdyroTBFVw8uS4vbepVqBn",
  "key25": "5CTdJm73NpGFSc9ZSGxJAnKXnVs7mt3iD8LZjToUwmme6CMCf8zyCGpxmzXLrTesBix6ABwximJ8cPn4Gwo3jCEv",
  "key26": "52wCWDo2Q5VCqfnA1RUMahe6z3oEirfN2AVbhWRX3j8B1kF9j4MeAmjQ26o3DMHZsD5ov7vaxoxwbTajfPKwmqRm",
  "key27": "4oxPi11stLZYrAjkrg6wMup39yCYjQzhx1mA5m2QbkrpEhE6mNZeqHqD1MR96Je5gk1zEvR8nVacqHAL6X3c1VUC",
  "key28": "4s9xhQFmGqxnix5fHTvZErBVtua3WJzVBAWeLx8Su9S45SWicveKJF2AMNMH5eJK4xGaQibWfVPoPzhz4RMoC6TA"
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
