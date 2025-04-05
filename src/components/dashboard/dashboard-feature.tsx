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
    "ibTdQmeSUepWykR29wE8dfTD3tAFZj3zYmn4DeuyDLeo3mHi6muR2zKXS8YQofArbqGQ6nZCMe7NyPgsZdA4p32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dvCbgUVg77jT5KacaKtWHpNn81eaqzNFstwGP97c1dm9GNrJRzASY1tjCFPYXBD3CZj4DgpFUSERibqaKWJRber",
  "key1": "3eWnqUUkpb2vqvaYeHYijr7EssHS8izhUuZiEmraU8qzmYJM617nomZxYbzUhdvrgrEbZYGNvEJuF2h1bBvFwmum",
  "key2": "3Tih9R5ZwNbde2RyKYvFJyKntvS7GBmbeehcsfVk2koHYGRYkcDfjnKK5sGgasXiKekmo64j8uNLhJcQUfvzpek7",
  "key3": "kzC9LRtAu3uiuubZqLJ7v6Udwa5biVrEJ6VVaSV6CANyFdfeczwraMj7G5CScLm67CDo89PEE6F14fwZq4m8Jed",
  "key4": "52mFxXxsCpJ6v7hWbvptPGqbbGsKDHKnGN3PJqEz11kwMQSVxh6DSJcHPcbRYDoQ9UezJG8pw9QcHV2MUrgeu9KC",
  "key5": "5RgP8v2SHBLnTiTf98PKqjSgXAfK5H5kVgMGuYPzdnrqVF8RhEuWGa82qNQX41LNowqn5Q3C2eVRa7rmbZmp8HEo",
  "key6": "2dZ5oKQsswJgR4ATgaUzvPDzWjEhDVbg6jtksBQ7my4Tcqhp53dC3VFx2ihiUZbzcNX9Y8GPwTmqoQkbPWcoWqcB",
  "key7": "3R8dR8jnPhvcjFEwTKeWRjjmWGjeUG3fjLNEBoaVAaknr8ErhmmP5zN8pHwriR9RHLmzST1HVDQAd9DpWGTHTBc",
  "key8": "2vBvsypgykPnerivc79Ud7q3Rs6KcyV6QxpRdzLagNNgCBuBwpwiCvvQWAyswvWrPz4PUYdztPv3GL9t1wHFNETy",
  "key9": "3oshYBSYQpyhTRv44kYLdtGZ4DLQ7GRbB3TXMzJ9jh79415U7PP3mwBMSYHkGskeNFEg9PQJnGwdDQpjTM63tXf8",
  "key10": "DsZZysFPsXRAu7QAnaWqDYXDR2VJmm9e27FJoa2hnfNRiPBVUYnepTSQnN2yAccbkWgEgPzXdqeHejNEbBRay7f",
  "key11": "3wkiDJSWAXZJKL4unJazb99CGGFqRmyGwqtcESUkeqep82NdreuvbEfoTH8BbUgxzmH3zwtg6TYtPfDGAYag26eG",
  "key12": "5XtcwVg2iwr3QSY4YpGari3j1JoZwivAp38qwhjaFfUwp94isznLXWyc7c5F8tbrmM9wH4iAFjqHf7GDoo5wX8By",
  "key13": "61iYma9vZB5Qgx7tLbSjCdithY23yYtz5hnjutrARgz7jqb1jWqbDbP8da38irpirggK3ArAZaAnmaeCsZTdnjtk",
  "key14": "Hp7PBfgxGCXGeua8xC5LFp2oF9K6NkyAV2uMjK9C27AbLfEaqgMyqXrHyRvte9n9DAPHaQYn2Wn8wt9TJxp73WM",
  "key15": "3bZCVSLkiLNYfLYfBDnMamXNChweiZAVtXHmLsRwqqAvyVDZKPre6DXSgNWSayfNxfZwBm68aVqGAxxD6wKTYX2q",
  "key16": "5euTCUWNNUgzdY2gj25RCA4ppzxb73fPpVDg1pBXRNgNTMWFusWAa1vJqyA32SrvGDUJozNwY8caPsoKosamAqgd",
  "key17": "3X6A7K7vLoLNRpiAQmj5HY9MaBZTpDcRFywJteY8m8tVCFogoFRbT4WSGQHiAz1p6oEkzukGnHjvnatR2F8fjDmg",
  "key18": "3PKeQ1Mjjbw3dqSJiVzgdrPNaLUZEKgtDHNyvNjq9pP6f77iRwKF4TDk7Xp4gXcVkMi7kenudq7wghTngsC1QPHw",
  "key19": "2AD4w5ZvCkCXiNqtfu5bq95ge1RPkjq9r9n9TEr54yYFyzQh6vTMAcDLKaZmbbvnjmr2qfrCfNthJM9gubVQfbR6",
  "key20": "5Wux9EQPmsuoQ36FCybhERY95SB6nyrsejQhq7FHsYLTH9HWgoYqWr5FRKw45u2weoi6DQNWmCe4CU7y85FUpxmk",
  "key21": "4W4YtAwyCn4wWGsPGyEyNbt4uxnewbAQPgUv2RNRCaHF6vjtHBmco5HxDG7Z1eVaecLUrwrHtawHc2NUzhSBMaVy",
  "key22": "3nzphHHUJLqMk6APkUSLTE55Dhzss7CRZyEGtV9tfpw5qULkUaqUFkB87YmxPVRtEzcA54vTcJJ8Gdx4RaHpGkxv",
  "key23": "4NYL9SkZ3NzaR7u1Z5Keg7cdZrR5WDDUkyvJbv4dNo8Xds7aumatpfcHjT2Jgc2LsdLJM2t1SnySy8bGx23oQEha",
  "key24": "3eB3CFx4XT7RKwmg6mPpc5ALtTgagKrBpMkYfvGRQAuo7j4TRxCkQ5Cbj3qm1FRAULD5Xvmcyjbaa6SzpYGNBMop",
  "key25": "2NZFkfadRq3Feo24F1jTdswFEn2PsAAtMB22XwPEuVerUnyCtfp5hhC9ehrvKTnRk4X5XFMLeNnSG6B2THkosFoW",
  "key26": "3yRRU5EGbuB7UoRWZqjxeL6s9rpbW8VRDqhuCbTF9KmitqW3HaptvrSZTP5EYqqsphLPY5PMDHniF6wf9KDRkZn1",
  "key27": "bfaRuSuPD2nw5dw6NZ8TbeizfGKGWjSEDBDywmbHmEVTbQfekYtVxD5zjkstJmPL7aTotLTeGAok5fT6SpcfCVs",
  "key28": "2zYtWciUVrV2qyg3aHZ4urryE6i4UGKRCGb4AbAJqo9YFHdEpKG111RhmfLdoc8zHWo3fxgWyDRKdBfEBCxErtr1",
  "key29": "4Fjx7TPFtHFnCMCKLbVZutPzLctnJT3X2rUBZTPim9FXDA1han7r7TzVyX4AngNxtybbk4G7nCcZy1EozgmPHqUa"
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
