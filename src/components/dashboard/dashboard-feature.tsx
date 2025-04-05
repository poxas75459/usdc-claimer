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
    "EwRFDcwsjSr6U7AxszFGGWMtUEMsmD2kP2TiHJdd9riYpxn9mxtSdURqDjC7wNPhqp9DpnN1aURXNBoA9gSBmQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "591mb4HZ6x1DZA6ivTccWL1YxsbLhtw6PGscnGwso57uuzXWc3aDij6SfNGy6nLfRYuheYvHLkxBqjmFSBEwUpxs",
  "key1": "Zz2Hq76wUjKegoCAqkZhnUncG3RnxhFtuZcps5t24VGir7HTkz1pTjz5s4WtGGmSSSuG9NL5cLKb4VxtY859bAL",
  "key2": "5rkU3bYgDeRBx7SVPDemiWkCPZggnisirSmKqxKCsKdYfcB9d7UWUaUgExSdJa6JKfm6Yv5tf481u6r8X7SxHCkb",
  "key3": "5bTn4M9PYGri9ghv57DEz9zWEVQNGvVngigKhfX6pqjUmMcU5otFM6QtwLb9Lc3GXi8JbodkQnAM8ra8rRWyR1Y5",
  "key4": "fTLthWxekx2Arnk8KBerm3ZHJJg5vDn8XbiND2pJheQpNwHSmyEb7qbgewZ3mbNNB6DUzMtFCvZVQzD134Y1v33",
  "key5": "M4M1iA4BwweMgqyUokcPLx3hFtayQiE4W9sZDhWQdU5JccFFS979oL7mDbwGgUe18SDoQZYdDaqwEC9Wffb4yuZ",
  "key6": "aftoLnozfiCSj5vGEWH1qf9HvAVb8wtLkDwCXSkQVpShL6tT1vkpnRekSgq8CZ3wDNCuxtW34Sp3D4mDeKJgt2r",
  "key7": "2LKCjpVrhQ5Wjo1dWiZY6hxMzuswzhi3N3vvTz9zgXs1Jc4nDmZaUWkjpuzQYb2zrVfkt5K5KgHvVf5hZE8P71Pb",
  "key8": "62u5XSzf21nJEMyDxAA99qb6v3EFAtyNqs7KPtaXbyGU4C4Rww8mGda5wne1qhMGNyYod4g1iCNWqfRrQXRHag9m",
  "key9": "Wq9mRCqibpgTGQBaqmUEpynckds5Q4ByprRoW6xGxywfMrbqShx6a79QXpLb7gWUdyctdFX23mgaR8aZ7Z9JFG9",
  "key10": "2Rqp1oprY3UaETHjeabrfpoMwNPDXn7ahF6Zo3rdbmNrtMMNtmndPUqmRbVjFNMtZzNLCsFsjjNd7jrzf2qvQwkL",
  "key11": "5e8bPgSLMSjGYL33KoWQYvcG6YJT5M1NnUgdSeD3F5uQUkmfV7m3RwZkQCfbFQHhPJYR1nBunQjxrkGUiV8eSdBQ",
  "key12": "3FMAdvdKRgKCqUWNVKqAu6dAvupgqUNRhvu6jHSRu1hbcQEme5j8Hd8U3ZNLrm7XumnHHMtPCDwP6j83yYkSwnLE",
  "key13": "aAbBByaBn8CTnCG3npyvUKcjQAzB4mwUdCRw8mjQqbeDQ1HzM8ZRxgEQjzU3dME9mftZojMfPUsiCXHoMbu8tCN",
  "key14": "57uHdoaTZVhip4fi7DRCTgffS9DCNxuHFDpRV2ZHbKS4ouZdbNaM3v2R3M8gEwbY62snEAXDBHVkc39gTAPJaT6G",
  "key15": "5U8bf8k3qKUAY4zuq5gtCAG7QSijMXAHUu6nm1SdaAh8LFYWPLoyMbMpyoEep4P6AFTx7HF3rYWjstNcn4CzXyEA",
  "key16": "4KhBrja1fnoDa1oyGRPZTFS3bs9A5RpDGEFBWHKegu7ASWnNrdnRuX5q5eRTvyVDnjut5WmcEnGmxoS1kQwg58zQ",
  "key17": "3hxUJX49CdbFencbLyRpUftJjLnFk67d7sTxn8CQifGo4zDaswKmkcRJCT23AVaz42pfTfKKYDBfpN16Bfmd5NxK",
  "key18": "2wrPrEYpvZ3XdmndvvdVRHhNiRd2G9uKzPgj45Ddba1o5Pv3dAVGePPSdmwRuLJWPcQ5qE2g6wSD3mr3PdjsZmv4",
  "key19": "4ywR5P4Y66L2tw8bMrxkPgPGbuYtpPcUaq29v3SmZaq4egwindynrFZjvptsmPoBG7Y64u2hRMMYVD3sSbTcqFue",
  "key20": "5NDfeNr12kCFas2fBqQ8dvpzdi7XuZUieqTq76ctLuqqvSyPFmWkQHT9umBCstZkEa5s6AzT53ByfyG9TkAiPPVb",
  "key21": "31g5KWbVewGkkdYZDSD2MMdDkUftSbysvUpu79V3cWVYHz83p8orK2siUHMbZjuEvFQq5sTdWkuC2zpenRJFfV2Q",
  "key22": "48gW62CYpHqFtc8roLvierashfW3aPbB1atQYkcMt8AHBzGgZCcQDBKNzUr6jAjdVBt8kGkJXTSbyVHx7qzTmuZw",
  "key23": "3xSWnrBfy1pCyfLoCxHgWSwYKeJ7uVVtqFjy9bn6i3wb91VACanj4rhtHTDMaRVy1Dg7tH4dW7FUkJ8eJAtxQrsS",
  "key24": "2xF5NeDFphzfE4vpDxPQ7eNMVMe1P4WkTULUKJ7GKdGYT2TgZQDkDuhtB7NKaLNXzE4A6E6b6A4wDra5AyVyskEo",
  "key25": "3ZbCY3cs1qxsjWCvERgo77n6Baffy2L1zPDxx3aeTZozh2aGaJfrxm5zytLAz72wdrMsQBn4AQoYZFPCzMqQQPCb",
  "key26": "2NoE3xorACXuAkwdV7jFT4gzbjVz7UDSgjwT7QmUh5qoevTRP6NKvcUxAp3f8ip12b4aRDggzyhK7GNweZfgGrtJ",
  "key27": "hD2HwgWiGJNaWGHjkDRYoBgUbQSfv7puUn79QXughHaP8GFAsH9g49nKm4inmp9fmopgNCjRHYuLcJ6wzPPQB9V"
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
