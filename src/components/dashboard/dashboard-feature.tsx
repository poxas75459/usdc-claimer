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
    "2uBEcvGPjeR95Vwa3DPJ7VCUrRrjGTYqhBp1PAvnCeKrTeARmnQrw7r2njU8xjPxZ9PDACb6xZzV7e63VFyTY2up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DytVPKJyxAVL5XA9U5eSDF7rzxRv97neZo6yzMynBH2rWdvaczPyVdLmQS6V3wRAHFw9F6xZyGpPpts3FBVgWFt",
  "key1": "41cbqLX2WkYafN7edyEgvQTZ6jwGCrLqCYLcL4qiRKfxraDeb2fNswDNs9ZzT7eFR8eJe7pdFKJKCf3h7phTzaed",
  "key2": "5MtU6XhdYSsYeJocFuNLZ35HVnmFTW92xARFofoBEtMH5HfpPnkzY8Nx2xvZ5mXokJwT19r5pwRtxe9S41jPdwFe",
  "key3": "4LPv4bae1sJTwtg4PbPQbN4SBYH7e3nAf1RmQwLGTJPML9Zk26qekCeq4jmPzEyb5MewhvfAJARhjzLycQLgqXUT",
  "key4": "437JWECqnCPCUVUTpVLdthrmWjpeeNnYt4HNse2vv7fEoK3q6rP2ptyv8n5Qs4iFyAtTcQnDuNMHhJaP2Wyr9Ds6",
  "key5": "3nb3abcmHGo27UsLTXPUzVs6xnVogLSBtqEJVeoaWBqnPDK59CZVHjrBfWASYmkzmC6KGiUPPrzneWCP4RhCS5pb",
  "key6": "pYmmYJA8dkRheb9no2bSMamLiLKTiVeti6x4JvzZ3CYe3v3zNEGsk1Jq2rGQXiQGdXcFKRU4KWcaZaa4jfkcCfT",
  "key7": "3hvzkgRtt2oLFwZDHDV2RkVyGoKBBBzjAbqLFZ6ea6p9FN97qiZVbG1sgmGK87sR7cMptKSRdcsAr88LVHesFTaE",
  "key8": "3viDJWpaScLmg5pC4ir8mPMebEXVQ3GRXKv8fXjnSMXMSthiP5hnTNZ7Bikgek1AFTrjEpHEnqZVwBrPY3xHREXL",
  "key9": "CpDo43Zfu5REttPV6CBSDpqqpkFcqVoNCiSM9KrtgVdBGvEkU34aujcogcMHAcHnuvWU3UhZ5yPitqAMK7xTzKg",
  "key10": "W55bUxD9b47aa3ZcB6FZERTRV1h2KfCKVeZstr9jFyxWp4ZFaZCFMWvNjhEg2JrqEqKEmJuHWMyDWQLmxYkNWgf",
  "key11": "2CkSYd1pKBN9kbxdtCq77KKVHRMSqcJHv7ZMU1DfCqz57Ge1MyUAsZbntCeJZrjfsoL9izDKYF2uVxemCummj65i",
  "key12": "5Jgzypo1qts1YY5z3tk35o4vPuJM3UEbEuEKCpw9B8quirC8XK52u2zfvkEeaX7cD1ELQhdhEJMHw89evA9HnQ9W",
  "key13": "4sd4r33xSqyAfechawhE8aECH9FoCVfu5y4SnQc5xBk37Z7m8P4vidtTgr2YJFpDWj8fzqciTJdUXt6vgtLg7jNj",
  "key14": "4fXgdmnN3JEcFNSE1pxqfgRBmNM7NCfj4c5NBkqnL7JNuXWi12fM727CUkuajrqKcxnC7wzLtCCNZk9NRNJrQNd7",
  "key15": "gv7ZzhTMe1tDXC4LMUewoEN54H91kt3X4nozjEZJzVzv3SN8gAJTzGNoXQEo57oatNqhg66EtKn9NxKQYCnYmBX",
  "key16": "4q1nB9ZyLyNN3xHCGjNQrXbybjWXfa5ojqhGXbJJ8yba4xPXxvCLNjiXhCEjynCTPk2VypAb55od36WcbXEYhXfM",
  "key17": "4S2LEoutVbzdFcTUTQCLwE1rcKWaKb7XvYvF1bRC81AAUju2sUgMCKWYheotMTHH6US9Z8tkHviZQYMFjSk9dqkK",
  "key18": "41PWeJ2scFmysaA6d7uzgbaTa1d51mr7iQ6ihMG6CDKdtLJo8bJS7P2QjKKxsGwfTUZeHkJ8VbibwNsDyLZaDHQJ",
  "key19": "4v1tVKQAC4DUpXJuKNRJcrkZNo1RovGdReZHsJBzyUztJJw3UZ9ck17PYRRLnzbphNzkEtascJYfhc5Hnw8jQtjw",
  "key20": "1zdxQSUFT2JpsQy8jr4Cka41PnjdzpExYM4fBx87t9tiHWL9H98Yj2wX5pJNmuLvmoAecFLpwzDEmqw6nioMQRg",
  "key21": "s1wpM2d3Q5YJJT4JVcNgwkAuFaoGerCrXPEJnDz2P35etVUnNLsW9VBF3VTDuGahF5dVKmHApWRkgSD1nSzDw7S",
  "key22": "Jxqd1MeR8NQjRyYzstzNEsKHGapWnPnskuxXNeeeaafdXGUNg5uXU8tF5mHWZ4cCskWeaMSBXqPG8QJ3kJXtiBU",
  "key23": "5qzkEw4DgpLvxRKxK91UGjXi3usiv7j4nHRWGpgtELT8DCB8wV4kvxyXo2AAqvhnwvdcpy183FE6hPRCHuTRpmQr",
  "key24": "4v3PARfHmKpz5wiRxpAH9pTrQdH7EAa31EVLmpQpcVtF3wT2FwhVP7CAVopNQMPD5ts2VKBaCm8WZT8fShJ5tmqV",
  "key25": "2WwWf3dMGy1WSxiwTtDE7aUTsGxcb2QG3WR9mrfikJBhSCZNEQQzvJHYSFLJ4QtnvzDVnoG1gdjEu9tXS4k7dk5r",
  "key26": "56p1YKssUTT1ytv9ueuQ49HYCqAMFQwKoA18ALrpwTszL7vBN3dKTJdtoVq2F8d3Js1SAXoSqnZ9zycuKDU5Z4Uy"
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
