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
    "3nyfDrwWKMJKTanS3yKF6swsrJD7HFndY1fEX8wwqd8surnjoD7iiPVdFvy48ujK8cupqDRzuGh2bP8eD21bbxBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4UVN45bDTuquSPUqnpPQFnd2sSFxySBkFTRaPYsWSy1c6igXyGVE3PGiodgpHCNCixSUqSGojZM1TkGTLimh44",
  "key1": "2JT8xshn9rqsXA2M1Wvx9sqoqsg2DVpzav9Law7FdmJHPZXzhWqerGwWU9zbFwkWJLdBD3LDHzJBf124G95aiYVL",
  "key2": "2SWB4SSNux4nXHE6mp6sDKBazRLrsyuYEMyLNNWaBhQEETa1dxWWsAj8CCgGJWP8UZPTCWc7y6sCWM8doxGAwk1f",
  "key3": "21Q1sHhksswPN1MPnQp6wa9q98dfCGaEHm7H3qYNLctGCf8sHCEWV97P1EjfsGnC7ineg6JsQWMfz3jgjrHee7km",
  "key4": "55W2hWugF9pixjwCKHZB8pkwQAjyyKfcvMfrGVZYsRnwY8REdVU6zfPkJftCRiU2aQELELcKnLUu2yQpSF8gAAEY",
  "key5": "wopB3zvEMmtyf3H6PuMaBTY9mckYvFy3BTspNMc3st4LS94ob2ZtXZnjjkvvHFknM1Gr9EtMxY3oW3sijBJWmDs",
  "key6": "4wtKyC4rdZ6MXXcMoSnhm6fhA7nH24PhJR69bgkoB5jx4i9dzfKUjPSBWPP6mnUZP4xidgcro24pVPfqWP3aYuYe",
  "key7": "4d8dXN7tVa7Y6nnz6pqZvXYK6JxfMno8gi3ceNc3xeTD3uRMN1QzRdsJENQEySLPqSwsj5rXQtjJ8iqQhEYcMtRH",
  "key8": "2uNmRyVsJisbVTY3npotnsBRvWqeju4YSkn8G9DmQ8Kcmjmti3APhULp62sHyqxau6wVbRbZRhPfKET2dYPurvgW",
  "key9": "4PAqifo9jveHDaMa5xL1JsgLEJKXWhdEmEB3b3jafkdvgxuaj5ZMihYvphciFh9oXon4eYkda5ppx5ctZQSMwvta",
  "key10": "2Sz4ETiyZeeJGoxbk4twf9FrGmhwmSf95hvH63ypmUKM9dnPFMdqJ2ewch2ujeBLv4eYv58FEhao8TyLKWaaBqxd",
  "key11": "2QBbcEaH3rx894KHMXDFzUb8ZSMkpUZeuWPyLkGNjq6YuG4ZEG3iK1jQTTNimeiX1uKye3iGkd1a2W2qqAhV6JLr",
  "key12": "3vBxWRRoYk8kmitCZF4GwcCuuo81upi5P1Ax8xPJmqq4uce1o3qvPXTzw6yGGCCm9B3ATwtCkMFZcESGTrjAxLiB",
  "key13": "5W2QDScdui43THfQcUJ2fn7ufw93uQcN2WHUA2avw92x5bxPC7Ggw9WAgfLu1bSTBtmXmt9FQmh3us7LnXfPE942",
  "key14": "5uive27t9ARxMq2E3crkpwLBqt5Nq5dfBYLDzPuhNzoGvC9yBExNKNYRMAZf98sw22uVpBp3oYPFNDiBs8WjtsqR",
  "key15": "444H7CAbkUNFsWQYaSmkExGirYifiL2YyiuBbRQKvwe14QBehwmt8V8oBEph7DWahipC5BSas5JAXkvbyQQLeQEe",
  "key16": "4g6KbgoUEKrtn64197zx5HBQdt9CJiyfZK8jHLHw8MB8n9g2CaQg8H8VXYfpBdEvTDRSxUUmF8f66jqv3aCeX18Y",
  "key17": "8imjUVGTWzNkBTcFKZCD8wVAV4TGRkceUSbsSztsmBG2e8NhndqSfCDaBAcgcgrQRztyT1kYj4AwpDrHQ4RK8H6",
  "key18": "3EyLCbNPyE6FZbPZiEfMgzJxdETkmdGZPrW3LoNYhHkYor892FR5sK2Z1ekWWFxExhtD4DWknWEy4JqBq2gcQvUf",
  "key19": "3vL5f4qdVaJex2HYvHmDjcTeHqEdqokam7uvmAbk8H4JMnwZLFehfQqufn5djkYtcCFsKGU6g4KjzYuYzRUR6cPT",
  "key20": "4u5QHFjKopZ1bSTzYtTVnAT3XHNdfHbX1sUg6vKRQCHvzTmakGqXDZaLsx7bctwhxRDnKW5yDk8Gr1LeJd91iJeG",
  "key21": "2PDirJnP9XxTUQy2e6a6QN6ESJsW9G42oALxrPnZSA7dc8ueTcGKLey458413oFyCYmMCfAybzm2HFmic7xqAQWx",
  "key22": "D1v2QYbASyE9XcsgWg8S5AXQzTCV4yfEjQN4AtMBVUK9vqgKinR6JHufEnsx1FjeeqvNwhFh7WW136gDwo7sptD",
  "key23": "2T3KLF9ozVtcNMJxKmf4BQnnQdBDrqTCWpJRH8krweFQznB1KmjphSVU1wwq5oJnzGVej2HeZRHnPrysuFFGyifr",
  "key24": "2hBN4hJdGdoqovqguHDkUg81mxGYavkvjuE9T7fP88BohVs1pvRkiGzdhSda6ZJFgR6JDyJkc3jUrDyZeRNa1Dyj",
  "key25": "2khqKpK2QDUKiBzYcosDvwTSUJZvzp6x1VRFcopqc8scT6FDba4TbaPz4zdajertfPktNt9vFYAFJ2F3MibntDQj",
  "key26": "4CenVyPQAVC6UsexgbTgYpFSByG7vrHpW1d5dJ3WqrXYXs5XTo7V8uLcqkc3V1MsH6G3Te7RrMw9iwoeETWMXRJP",
  "key27": "3ungFCDpJUMyp8bvuXvEhYXUrwn83NefdNsE7B84K2X2Bc3yPQjvEGqjsuXxaEsmui7YXrjmkFgjtK75CkhgCqsw",
  "key28": "3qHS9MLMoYoHGUxMGZdT1E6oG7HKro3UN6iG4Mv81oXE8vAo1UEb1Vd2KMyZA1aVHiwWEbKPWypMT9ZTHMMWcRXi",
  "key29": "2jxMkzQiM9Y9yiVLBYUbdVFuAvyL4YcjUofbDEKnVcjEcuPxqu55dxGa8jpNg74Ep4LnKccSY5kBQrD1n5b1JEfU",
  "key30": "5sSGbhq5Ca9rgfTPQKcGvtKZKMkqWT7ueSvCK7pfGH2hXqBNpzdVhzuhhun9auTHbhx6AFvkitta3bEihe1TqxuP"
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
