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
    "ct7qFhCMfomW7yDgHdpmrb9Rrep3PKavzZL8xk2VNQrLoz9dEC8tkmTP9chX6YQ7Liwirt9iwc1McrWC7BWfUGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYAKSoApBDRkQvgNDBTyJo4uMav6nBPmeAcRURUDkz2y1Ho1fCgBtWbH325ysEYgScNFZUBMJoiZMyU23ZVe8HQ",
  "key1": "4Gt8AgpGxkgpLg8VHtUCtEnVB7DaazBMiRbRV4V3yQQwWj5SwtwsZzA9QGa9QzwMnJUsryJcTAgFZ6M6ARV7kahv",
  "key2": "4qwsWbwpWPhCzGNsQ6YLbAZ7D1HJGieCCnvyAB3AxKGRRxM9g1V8g1Cx4eHu1iQoBXuvQ1hMrZfcQTvRUySFAwME",
  "key3": "B9qje64wrX35bPgdW3cbp9HasDX5ft633FaCdYpSVsdPcvSp2wFmTA8kZwyHcdWJSUWtD4yg8L4WbjXmyV8X6au",
  "key4": "2NytCSkvgm34ydrC6p1ewgrGxayNSYQZ4MjYqc69H34d3qn8sedxYggxg2LANKN7guHRRcLCHdN8fRvvfTkXduwj",
  "key5": "5fAFzL8YNtzq8wVAVFhLYUudxa7gD2cjNHTdRzqvP2wkWccNbzPcsecjRH7pa1nUYnduoDVXhQSBg8DLVdUcvQYV",
  "key6": "3zrjVW4BNfBf1BNubpvEeiPUYafhE1pDVfx68sTuUJb1UnhycxVNEohvMYNgqYocwdvvku7TX5JCFyWobpUpUCpv",
  "key7": "3x1SJoH9FfW47uxByX2YGJdvRJ4n27cqPDv6bChFhdiySUNnFy1c4mRCt8vvbzNAZzsSCsRRSrXtRNcbRPkZ65MC",
  "key8": "397DCGDfU1DMUPtY2bTXX7jfsrVvFQhvhALmU4xVUSvzWZNtmoXm6s9H9aiiLtKzUPRAMWB6zxFDoRPMqmtNGqCC",
  "key9": "3Afo1rmb8A7yrMyvHPL8kzvNbiVDFnuWuNMSr8qXZGYtKa76aKpmup2qzUxQRMDZkBGbFRnMAr4DuLrwWVUnd1qd",
  "key10": "5gheZtxmDnAEwb2a2xpioER4jQb2sQw29FyHehnEQpXpqEvJAXxAEaxigB9UBXpGCXN3U2C5k5wXJDu8jCc6RNY8",
  "key11": "4jvyhfKjGe3W3jiFW2Y3H289sUaGoEAGdgZCSXmoP3ic5bvJbSJCWFJDh8Px6YmroS1EShfNfADjibywoaNBxnrK",
  "key12": "5WwhUdn7gZC6hj7mvzoH4EU3KsU5EQCPxYWvA1NNziJbdwYBVM1y5bb497Lv5CzcuKxtMyhwpDR6XE1uyXeJ9svb",
  "key13": "5c8BPZpxpJzD59u865rQw3BYoGbxYdjaiwB73fwYfNK9nBms9rcXpXp3tL9SJeKtX8bXi5xgySDXfiBA6e6t8BWT",
  "key14": "2SeBLykQG9bzgVBamwcdtn2UiX56hvgbtKV2q2NA4takQutkDdLkqD4kmWn933Fw6H54QnJYrcZZM2XA2YUvthth",
  "key15": "4KwApSEk8ivtPCNhji9NAoAnbcwCQLqtrRaC8i8FxHgqGKENfgCa2WujLW5BjTYqh3e3ssbEzDQmjBVU3By7yGSy",
  "key16": "3ncA5wv6CSUjREy8SJc5Q6zvBKpHQChTKVS6gXzL2emE8zB7zxCvEueyyx1K19Tp8h3B9KQBmMvnAvHDPGpysMsE",
  "key17": "Y9Ugufvh6iewcXAmf1jHdHkfRrWPAhqWMSwHa8BYDMJp9JaiFnbguWsjo9sa4giAgJosAyiKi4JuF4fkyAHP2cW",
  "key18": "3hFStimYbDqgnkpoNmDyYmpMg4Hcauuoksbg7QkTz5Nf3Wr2VjYySq1KBtG5YfNMmFGXw5prHifyMQeiUtmpR7LM",
  "key19": "5xu3p4tJXWQPdBzJyxwAvjvt9CsqS4QKxKqcwnCsN6vSQYz4DxXg5Xw7C8juhJhkBHVer4bWFvwEKV41ac4a8vDw",
  "key20": "2eewJfHnzKhnrcP7cbyKaXiApNpNcPujb7Uep4DWrnHS7V4Y3Tc4HqiJU8UgLoHh2Rd2hrQwS2e9rvhDBAGWRmgw",
  "key21": "42UvbSy7QYLMec85cZ8sJBhx5Tq7qYs3CQzSd37reQ4N8v16DxNJqKY8r6xN9Wuz3bchfJnn8iBEvptJrGXzZR4c",
  "key22": "Hng593AirALyjsTmGQzu9DLBLBPuUveb3v55fCe3a4SzFAfnSM8zTwfVfMUxmUGHbWDZYukGbxghxAfja81FJkp",
  "key23": "PygcpMUdPV7CiZ9T68ahFEMByFnXSAgbxaVt3YLp6jF7SEUz1B5kE43BY1SzhD8S3sQFQHrwtMvS5KxnsrEdisG",
  "key24": "3qogXpd8pH3FxtTLSLdNBb6hn2ZFSGyu5wkzBxpAfZBenMdJEy854WK48hRsP4HVoQFLGeq1S5UfcUy5igcuF1E1",
  "key25": "2QbvYT4az8Nob5L7FLpnWX6ytG3E6yFVPPFJCABFoZAdzXheSJSAN3D3R796kqp5f14iFV2wHM4TNR8gy5XfHK2U",
  "key26": "5xK8MmZBMiECinFripyTSTBkm4RpJsMGnj7vNqFfYRh7EVYQorYXe6oJf7hQ82yqASu3YYcjXL86wFZsQgoGe2e5",
  "key27": "5xeouP4ZLbEJTG4kD4rPfXM7XtYH68uqTMVf1XVtsKEVEtzybKVrQnNkzkExqrg1wYNL5pmyCt2xAuZjvAuDbYDq",
  "key28": "3ccYQomHUPtu8KgvJ5ZbS3KtNAK6KKp2QMC3uQgf47VAMiL6RUXz2ARLmyXa8jJ5UY3g5ezY2GLvnWR3q9txGSa3",
  "key29": "4q3ddJigwbFG86zEpCsW6FtVxyF9dNnT4xSDEXmboTQqjf9ueogDX9AyvmEyQRd5FinotW548veL4veGzijA2nQQ",
  "key30": "E7ZQxBCsH274pbjkov5RQV5ncpQE7yMdHH2TWvayoNvUL2yGud4ZERsjcS9Ah9xoNsCazY5A9cDc5qvKpQR81Eb",
  "key31": "61cdAm8tg8tZsN8NRuC6i2cb9732MWYUTVHmHnqc4mokzJopHLdr8u2zrz9rKhdkgKxZywrSGXTozvheCRSk8JMQ",
  "key32": "5LpPCaKqtduDudQR5susGRMe2MGdCpKGeNNjufw7LsXkdA9Deg94hSomD3ahEqxHDfD2QvwWYooNMRGBTvrtw1hn",
  "key33": "4Y1huK75KejiZBLtG3a9wPUFtnUrjJPCtPZ5gNY9zy73VmwBJ8ASUjtwvGxNBsCxp2ydwfsbX6WxbYnUUaPuX6uw"
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
