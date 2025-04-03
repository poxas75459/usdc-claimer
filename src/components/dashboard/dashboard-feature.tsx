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
    "2t4pzy4XKQJfbLMbkCHHfVQW8gJSii7Ww7ouWrrjdGJGwgnPkd9mAoKHK16hRrUUfQuJAFqCdFp1CzSiQeTEWzzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnWKQHRQJmC7ABwBUWiwFNg8tQ2zYeA92jkjBvTf52oVjF9zWahAWb6b2sMoHUgTTFvEXtEdgE82amxviMHHWG7",
  "key1": "3NvtayKn1W9rWpg7BMJ7W8qf5LfjZ4oBov3fjGuxWCssAZSkRYipnd1BTB1nGzRivCLPvzru9dUhWuvgmhA3dWxv",
  "key2": "669nQa2FE7RToKtPEBiGscobjtLrrHLGjenVsesMW5P46tdmbZ7H2ehbX2o3qBg13s3DB8Wc739PzxzqxyYqnu7J",
  "key3": "253LMJp2kD8kUAg7XhL9tvM23SrQY4jKRnkWUBdQiKCQ4pxy6tgKzqaWY8d46bQkAT2X7nGK3DdyNDAhjMNKT1zR",
  "key4": "5LF49DGMJg6sJSXxawPXEzn32XVdR9hraq3cqFsHNiE2NTvGvguqBgKoWP6Lfkx4s8ycMNWp2vmeDkxEKY9h7VPF",
  "key5": "5itEgFTkHTFdknE6WcJZ9ceC85U4zwYNNkMJGyVp6WXBHGMPFCgvLkbM61Ao4FhrvKcLseWTK9KECDUzVpafhywE",
  "key6": "2FXRkJaCNfc1jhudWFw5UD6s4KGWk5BvowW8nVj3MuF5yqDYmAtVt798DSsqVFdhEQ7FemGqCtks1znX4LPKwDWc",
  "key7": "5DagF9oVQSrRHvnh7V5ca1M6x5iL5AJpETumvBuC53yzLojNguzpkjvcjZCQnLjRacBLK6FfF337G94Kih56m53a",
  "key8": "3V4LV8m1nAw5sDGqn6qdXTP6scKK6dQi2QSu7dJgh3bx38VQ3kJFFkXL1EDoMz5hoUzbMeM7kR8nvT744HHkjJuX",
  "key9": "3twuMeuRBsDDLbju4Kpuy4HKdKk3ahjsrHEPT2zqpRAx6i5jzti4A4N5qE2QUjqpVDwShEwKn8Bf2Epugx3otwS5",
  "key10": "5sTLmLa4t2zXFqTt4FJXEeHZVaXftCqoJDcY7QUp1kGwuEdUPy41RQYMPhcoxwNWd4NmFhExVqoSyWUT6mteAthz",
  "key11": "38554BnwrrPyqG3XBCY8eTTDEFtmPkNKsDqtByGBEqisQtE4hxinaoRaEVQLpB1RvbHJMQHmUFN3N9bRJ3BYv2PF",
  "key12": "2iub9xgJHikpCR9kunXJPWmKjv5tcTDzKmSZKQGstd3sY5A5MTMUhGQ4cY3nbTzQodyHASZNEn3DnZEXv2eQYSjM",
  "key13": "33pp7rQJMHXqcLSirFtuH1qdC7y4R4GFqHZurRtHTT6xXfyZZf55CSZXVTFqDBpDj3rGVstMmHKM5ugk4NCN9EYg",
  "key14": "2w87rRDDqbPKYKfG5sXCvHcRLW5sjvt9KgxXtiBaH1A9VuVG2btwZ4vjQVFjA47QMUV2itvrAk5vrBQXpUUFPRWn",
  "key15": "4vgtkUACu97RVjqhhSucq8rmpe9vRAfJZgn1wEtmZsEZ4JfczGpWw8WySqnY1vdXYLNehMtDo5uDfHHAyDKsn9J5",
  "key16": "GvmXPzhCWfic7KpVjRL5jpw7YUuVVrAVqmCogWHDCffyZaRcCMQWgY3epfx1ENQSMcQcCXn8jwU2yJHBcorxDrj",
  "key17": "5essRBzVoARXqXpyAoqJgfBMiS9JfaP45e7fvRXiXtobXYTee5bczkXaRaQTqrdP5xNp54vRfcmKewbjKDwupGnT",
  "key18": "37ZWfWXjiEpNNcyMiNj55xRffWLgsjT2mMWizmzbJvBjPV96CFSxs6Txb8Nkuw9ABsiWqkDVt6vXs3853LPiLMAb",
  "key19": "4JbC1NvvfDuWiSSkLAWQNJiwmKPYrhnnnYa9EQK8GqtRXQvDT57Mn5TReFCP6SJcdpArmfe5dWrudtN8Fj42ZyAt",
  "key20": "2gBLAycA4NkPdTqTQBfZhnYx4sms94hF9LWt5wm8oWvFAocgbvTfqmKQGYx5bWzTCdfxZboxg3PQUwye3i7Ug1fj",
  "key21": "47FvxhGSGw6FoM1aSy2jyUFma1wZKaCeQFfBcNuaSzX2RmeeWL9q6GGtPreF1H6Ua9r7SMZfGVFMsGHhsd7A8rbC",
  "key22": "4AEeVEZrJQ7AYAhxeHU8nwNAtvvyqzb9CCgviToKEtqhPdvnndrX6rjzRDQCXSChmd4NP89fXQKzUhRR4Zsge5Cw",
  "key23": "PanRKmvNzukaoBdA2k8svFw9F7JyT5yWUEYzhqfUvqgKnaoLnHwY3zFRESDvJK4ghsMdgV1jFPM8dnXwU9ScpEZ",
  "key24": "4CPqhMpLqYHvL8UbDVkTgsk284HPFLiUDsQVUEDhWQNL7M51zMsLdkFt45gVTKrjwkujmqbg5dHtJwhqVknCdpuR",
  "key25": "5YWzkvBGbLDe5DjwZvWSegcLQt8osA5mN8qPKh3kRxaYuwnxZk8D2zbPobpHj7N9kwtmPC1aQNQA6FXn9R7WPx4t",
  "key26": "3VRRRV1Uzajj7pd5Ko54rF1pFv9SGUyiSLvf86CDXfmU7cGy5nVDKn2xGieQoskMDjP22WuunBim9nWned1QuyqS",
  "key27": "2bnkfataqoz1hpJJppHvszZ5oK8z6Qj1Yp8E79J2XNyqcQKCZHZPHg1rFqkJ7mgqirjWbfFH9oyz4HmzcBwoM79V",
  "key28": "2TKKKTMBXmodvdwdA2fdxgZbe7t2g2HyEMgAiHWnMPLh3d9pWzMspSsomjAAZKU1wQHjvukRjriNVWSF2eA3oksv"
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
