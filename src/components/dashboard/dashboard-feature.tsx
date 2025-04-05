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
    "5R5Fxu8e4XrR71ja5AbUerre5tEV92PzJkTPAAi36P1ihwhqRsThrnZGEfm38887TiXM1VRG9xhrreYiDhaAbaR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcQZJi3EugiobD8syAgA367C3ASg8t1syc9dqZMuKSUFsuzY88oXDxP8JxmAQ6Bxp24LgZMwEgV2TZFigJWuGb2",
  "key1": "pC274LkJPoz2WnQdadZ4hWF5Y8zkfV1yZ4oxGgG7TSRkQ4vWWxSuDgMYVtaw34LxMZVcXdBGoiUb5uEn6cynDTM",
  "key2": "2D5RaFv9GSmWouNFRCARNbs1Vc7CiihcZ8PFP3t7UoyPuk1rxcnDi6VCNJcvo4ZtQjpV26xrmW4soznKKwkxcscv",
  "key3": "RPz33qzB7k9vrp8nYV9LJH5Dgv4NwijxLPkwG2aZ9xqFz3LNsWkHY92YqZTvzSpgpFQYbD9Sc3mKZnA7BM21RDW",
  "key4": "3w8N7HNSYiwm1Z19XaQjG7DnijPvyzQQ7gctZGYzeNy2MdVhnLPbFu6XQ5jJa2eExmeriK5YnU9z6WhJyCqViSSN",
  "key5": "CJ72CHGbE5akwWuWrDdF6X1kZp3QZyJaqAhURht1qBDdosmSMVTcsREXnJb48DJS8jnE4T7s38UcdRKTs8g4zMH",
  "key6": "2NXC3WvzQ6EZ3vMWxuy7seqCdE788U6NwfwUYGUMJwVwyyiju2mrJArvQTwoNg1vax2oN2s2XQf9dBh9Xc31hwoM",
  "key7": "3G8TB3E1ip1kfU8NrrHEVxVFpy7Uw1zS6nZC67xsmRFmtN1p3i8PRC6669XUehYssmHtPQXrjFU9GVSyCk2Ey7VZ",
  "key8": "2388aJG47gg3GBygwjxFGwyYJGg7HEj5MXW2s9hS1sncKExrifJbvf7iEDEC22FN2DDJ1wRLBmucjvZF8d5iqqyp",
  "key9": "3ErvyDTUQvAUczqQGWPfz8SiANokGWWmaQzierMRutGdE98h646HDSa1Z1Ftx4XxMvNtS1mMg7GEZDQGHVFWj84t",
  "key10": "2W1yJbWEjpFWWS38BCL9hXxMdcPnVWx2ScuAaghSx48e3RLe7Xtq7Ssjf8uuqbXDew4iZNKPQY6gGnShDwu25w6f",
  "key11": "4tRN52S4N86zsfvHAdQTNq5E17a7zJ7ZtTcqp9NRo3WcALZ2G7r88HAoUUrDU2n7G3F5VVZYZ1F8HkT9pQTcPYgK",
  "key12": "shxww17ovKcPQk2ffrDRTb3PhVwpEkBTjGsMP8vR1EHdQAcXvmrz85pLYJTRTVnoJv8CNL6PMesXXrcz3hLV3TE",
  "key13": "5YfntiawJvyVoYt1xwaxwdRUaJjCmHUeQXad5ZhwEEVEoS2WV4ZAgcK6vuH4HkfAsa4m5CWyLqHmh1HHkuJ8yeak",
  "key14": "4sPeh3GqUncNay8Rg28bNbChFP5n8rkemBTrqudtWHWqd8GP2Gmkn3c5Lb58zyPox1NpQ5osDR4ZuQ4YBabGmXwp",
  "key15": "48C3JozSJ8uTMER9QL2uwW3xXs5nRNYenFpUdG27wmnKr49LtDyUWZ9xTi83E81xahUxAQhZAiAXiitRCNZLybzW",
  "key16": "5M2DLhxPQm6r1MPa9cGzPqi1oWoMfhqwtr1SZAeqfj6KzK9rZcqTd9FyMmRpKobLmJREgM6jjUGxip9LShT9XwAc",
  "key17": "43U8mhPvRGRekK7U5kMopMCeYTKRGVQRY9vxNbxvdyWQByt59GTMwbZ6Er3oMGTFQMiYNNQjtgtbo5Mysn4dumMP",
  "key18": "4u8SNAaWvaDA3LpMEY91J2QXeJ1ECLyTbqoQy93zwir1hAo3B1Fuy3KZYor9EiZ4co8XYY6FgR3nBwE9iCDbqzBj",
  "key19": "MyBdZMmCneSqg5wUsjQT3g2rgZa1a9hZH4S4uHK2AsKJqL9cQD7NWXTLSQ6CD8Qt29mvGS7Yv5nYsEUyXyF66fs",
  "key20": "2dkuPvNeJFH66TKSQejDp7eiyVv5P2dAzzbBhmuPBwHf4XbbSPGnZ1GNjhHzAyauYvEGMRXDfXoqyLBRhi1vrtAs",
  "key21": "3c596r2Y2RWoBenEyCCCLhtQtUKcAdMw3BcboiNQZteJAeQAdbQzJFeyPCkFsuSBrsS7hnyz6CzRxQ4DEB8mAAfs",
  "key22": "4mRxWxPYUnnP58MPv2iBFFmsZFAiaMro2sVgbHGBENgEtmPLeGKE6E7YFbCtgpMBXTTj9sM8MvrFiNr9YLc8bgy6",
  "key23": "3M4DhztRYWAKVDNDzyjp645XXGha8V7ZX3rRaiFD7btVZjae9SpZu2DRKtHe2YTBSkbCshPDyKkK25PZpCD3x9FP",
  "key24": "3S5GDLgdwVBi5kZnoQ45jREQpBJrr3RmMRTHb3My2stLFKdyeWHUo9da57AtTngBVzJ8TDsDWxJ3HQ6UPHvcV7U6",
  "key25": "4Gc56Wabxxs9JK7ECGj1Ep8vsB6XpCkZsZyPNfnGwMvwrX5UP2SeGcbNo88GNtUGUXQGQ2LR3Cj1xZuMd2wNagDc",
  "key26": "65ZzHQQyPZUCiyDvtWM3PVt9zrJXaBjPpqBLGNLgYBUEpaNpQG3FmNmHEp3DPatgceUV6cWEywVXiVe4t6QBPZhA",
  "key27": "3nXGscTNjuzSWrRjFeL2574e4mpVJanFgVAUUsZvMC1GX4Q2rUdL5wosmz5VTQdmuXfBXWV2ndjfW8Cky6o4YPp6",
  "key28": "3rw2s9N27ZZmN5y6V9aLrDYzGiTS6F2uVh1urdahjaJhjbBBZArwmwu3A1x9aQosYpGKSA4Xcu3C6FuWtNqZCrGk"
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
