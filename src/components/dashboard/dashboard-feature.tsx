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
    "2bzP6eXyiUMd6YQDGc85Ew216WJYxhFcEHqFmT5RppaXeEW3fKJGNG1byzqsjxdzWC7kj1CsHmQZZEQLH9csik8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cj3ktGUYCJL4nBNt1hkEJWDLJRjKXQMZ9wbSqvLwhVmmwAyQSuRZoxgU8nHXwuKef4JFykM3Hc9wmhZM91F1FbD",
  "key1": "2KgHZHUSdA6CBL1gbBB7xwBoCyuWypNb3jz1biFvkNMFkWPo6kvKgXUYFRmUZwY1BQxfCua7VmuqR4GuHSAy9wZd",
  "key2": "4DEgHUwaYknnhynZZ2rBpPVqgb13fvMuUAS9pYgcEcYKHjZ6WkpsdZchzfUFvomUSkuyDJ4deu3fjwAoCPEXmeZd",
  "key3": "5ijLbT7RLk8XDAqWkHmNAzfa77C2LkCn9hANksqha3QDZCkEat8uJivJSEGxuYpNC42xHRfUcRmjemyYNWix8iXU",
  "key4": "kVG9rv1FKXQ822sn21gjPpiuQzticXUtauxYsQ6Hzf1w5RSzszwz9rfQ4GezBLeGMv4iuqASp7BsyNswhKCUcsc",
  "key5": "4oyQtzL7xB7xsQt5CuK3ybkoJLaeGjuX1xP7sBSZC6frmvbGbQycBGBFUbB3zhmLJuAE2X5h9avbT6c6dy9re6FJ",
  "key6": "7qSRcQkPaSZiMuW7qs5VfHFt9XCihBM4EPaMqPrEQPk2EmqW9jZbqNSckn4yBukR8vwg9srUxnZTH8e6FXPxCDt",
  "key7": "67ik1XZMSheiqcqJarq1WAEH1XQdETW7hidapfuJ3TDUGvUit4ypqeh64xQpFjMkzYaN47wMVEdCLm9gWXzKnjTf",
  "key8": "2bkE1dcejAhySmtLnsPMtuqB7Bntasex8UrTvwtBev2vBWSeam8dJowqoTarbrCZf2dT1ZuXQAHiP5n62Ke9yb6Q",
  "key9": "5QugZ5TnmxhEoYFQyDWQ89ARcxMeNhVcaqiWUS2fPh8dxuSwZr6mWGPyLZuBJuXE9re2iSeDAQi6hSfaTRGEEaWg",
  "key10": "HeH9QmtrohHcX5KDE8bYHkUiGF5JG32B2E87P9PQSrek3RC2EEpxctPdD28XEDoT4iQhp4HPkWtMfxUsudy7Djz",
  "key11": "cZCHWFByZcs2DpBTjcEWDxc3kDjELSmoqCAftKiQRyegzAaU7nudr6kQ2qbyG8hRh28CCswT9eDG6WuKgvhaeVQ",
  "key12": "e1NTrsoduvz3VomQWUt1AcWs51Y9HBMyt1FaxfULvpEKo92i2yS9byFxnx4LGKrrMw4kcWq9qRo8Rw6iNQTiCA9",
  "key13": "5gPRWncEE1rGdi3tWmCEmDRGHDEVG5fsGD5idB7dC7SWcMp8ncUxj6BVc2hACAkShHkAN8843GKF3k7B9kxEsj1B",
  "key14": "3gbuRhpSfK8Dnm7jGRnQNA67GRQY8Dp9euTj6DGzdS8vLo7pnGMaDX37wJXKxp82Rpg6MXCvmC2fpSgByJC3cnLD",
  "key15": "ZRNaXwD8wjtNqqRktbsQNmtr6MmYC14NbYD3gGJqmoAPzq3J7ZburBdPzHs1v4i7A6LTToUX4c6PWjRzrFiVkNn",
  "key16": "2NXWfVU9U683sM9fpzheRyKNZWe4WqLHWfzZXnw27LbHgYagSDLSSmKsZ8J4QErW7Rb5paSwYHs9yJWwJpxtNq16",
  "key17": "5tittC8Qiq2kRrSqK8m17uefZh2xpKxUJHu1UxL6jqzeCvz3U5vbFGR72bRkNNiMu7Z858E3ecukaCz4FNN4NPF2",
  "key18": "2FTziF57chjmgdsBaPRC2bJF6PFbtSeUbVLEoFPJrT8UDSDikPcsUAytozpiiu9gXWz8VPX491jBDJtpF3amMM9C",
  "key19": "GcUsgfpkjBCWU5MG9bM5JDJFxEvokcMtyHrsacL9JTF1DKikrhXSLUFxve4PkouVvwBDadcXP78fJUCGN9ZTL8U",
  "key20": "5Wj1RHBFGfQypSxWfwC9HXEpakttBS45xhnoMvUTSttSxFbFQiGtozcmrwQ2K5FPKVZbADZvyTq2VoVzwmwcKefE",
  "key21": "5pf36y7knuW2FBPYispDWLfwVS8WVwWqa4p16WJCrgqpUzevJBaEDakzX2RZhA4nXCXHU1LPAsMMPUHaZMDhALnZ",
  "key22": "yCVRkXB9TDt6rjWME6uevaCEsfGurhEwHZ7yj9PaVEdnGyHguhDJ3GSGLUKXQzxcvmtCJuygRz3U26yUt7JGAph",
  "key23": "3imxcoQ1F31qMbezBYu2xjGJj45bFYQztWH4z7NGKcvztgbjHbYDipAeJBtfrQht2DRaFHFgnQhw7fTUpouoMCym",
  "key24": "5H7DgK4spjwm8kBqvnTnaYDtqMe3peHDZsAJRCZGW2Gd6uPrRcbjGX2yuiUYGkV9zyZ6EYxGDjMJnSTqB7fu3qdF",
  "key25": "5bgEEZb9iceCEFzWboTBzdM8cEi9B9dPVEKGH2Howknx8gdi1qCHizYU2drttAX5JQLuqtMw53Qb5HYVeQfiz3Ma",
  "key26": "3bA9Sw2EhaQr3kUKsa4WEixmsDUUZEJk8CrhTQRgHh57pJSmSE8YWjk4wKtzrXuA74VBUHRDFY3W44vud1ALPMTj"
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
