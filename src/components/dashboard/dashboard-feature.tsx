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
    "4p6rQQyijsunFh5pwuoXy3iEM5CyYAjeA9p5EaTiwde3NqLQWk9UkN7DX4h8NYveEgAcFMGvWTe54awMPbg2t42k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HnTZQNaKpdhLxDziArxiGa9b1sdy7XM1rF8XrQHcexUmr3kfmZLeUgAsdvfajXLF9hEcRRpzLT2wUc9ezY1GYMw",
  "key1": "3sqf42mEY9wZ3ScagSyXSefY1so3mHGpBMT9VgSTdx6n6Z41rtcSyFtv4hZmgSDavG2YwKHkhvtpuaUYrPepx2St",
  "key2": "51ViMK8K5s3rD9hnAiWtWTqsgGhYHbfuYSpdiMQjWmgmSmT9c32GSwZzJAYzoEZNEpnPZBymv1m3Y75e4i2Cjogf",
  "key3": "2zvsRuVKToArYE1rNqYzRp6Uw5LTLFcPnhUdf6KweUA12WTJ89giHgkM7qcQ5FGGi8Lxb4odrLikda4FgqRewriF",
  "key4": "4fkF8vkNpZ9HFjt4hUSUH6M7vT2au2i7BByNYbti8bVJMrHtVKGMcyWm3f8CV9yyiXBskcxzj61dFAr93L86ZeKn",
  "key5": "47UsMfLCKpPepcJC4aSwCf6uJXefdu8aymp3wxkDLbFUxWwDFAQztUYpyj7dmnvgd1SzCwLAzyqyFshntMu6sT8",
  "key6": "4N9tLYw52fijwJbyA3xsByxRk7Jc5rBqBYxVBbuc9uKs9n5nMTeyA359VQwEw9nch4EwLk2SQEzdoTjHuUdEbMXA",
  "key7": "HH5wp3LubHyphZanmPSnNwm3d5Xeyzu9j4hi3KpD3AzuNzSVzHyACgF5Ew8MXE4fc4Bh7KVX8fPUwhZknv14nYK",
  "key8": "2eh36wRw9anGUnpfqSMjW87DtPe7fEpWkaTSreeavtLsc47UnixZ2j92GUhPbYeARG6XPmuCWaLoG2V14Y3aF6XC",
  "key9": "574mckJCVwp1nB6KBg6TPn7gTZefGT6Stcw3NkkY2NkcRhNmMvLATH8V344mFdqeJVWtV5x36yV4eaeYZNfYkq9f",
  "key10": "8yAJ4bUZaHFCWZXxVaWgYtVyhKZq4SZRXZa14fQpPRr6eGq2Y6xdB9DGwVogyeXEjp86PWujanTZsKaZuaHEKPw",
  "key11": "3BBwWXZQReDFyiYC9ZwTDCArY4bvANW9PHZnrYFwMQtWJGq1oJUTrpDQRq7YekpTwv3DtXXfeA5ywMN8A8oZBTTB",
  "key12": "2mj5o5UBVoBswA2e2xVVuea8qWDfRSxn5AchEBTTsNwfRPHdP6EasA29w1LsVrM1oJ5haWVBfMYS2tjNKymLWfVW",
  "key13": "2b8CLLN4Mgsyq2UzwLB9nKgxqWYzjyGFAmuKF6cMtSADLvzigkDVtJxmNDv9MWb8GPPVAAgU8rF91Q8RUKpK7ruj",
  "key14": "3KTvbxtKvYkVAsPGTY6W1UeYNXYSwdpJRzB2GTwcecEPc6EW11X7ZH8hCYgM25v5G5AUpd6nWUofhfuUSKfkASF3",
  "key15": "2XeoTGpF2qSZq7R5RUzcc2Q4P3wxJKUqfQFTBpUBN4FN2dyDCPTtczCvptAHKLEB4P6WzM8KuqTjY7ceMQQTNBcn",
  "key16": "2VVvZCxbGWi2aajmvxudKks7DMNZF9Q56pmkJZAZ14F9fWCbHtcwmY8XvswThVEhNRMQ3ds6XsgM1Rd5qiXoLdhz",
  "key17": "3tBoVM1FMN8vNGtMSBsJBGk7d7f8R5r3A6t8xnw6DhVzpstWjyjSx6KbwZpNCz2eAYJ1JE79Tpj8nnUMxd2JHdBV",
  "key18": "2jbftGa1RyZ3mgUkYM32hrvhxT8r9v92SRZEFAaA6i9V8PG22Dh8vFZV2534z9smFa9bZDp9sxPPjs8RW5ErpMmB",
  "key19": "3VBNnXG9c9KfxBEU13eU9RYsZ4ry2si1XChaGXSDUXp8qsuxLLNLr1ZvytwrF7qq6LvormjPJsE3SqLxpC44ckXG",
  "key20": "4p2F5CrwQR5qHbu6Xm5wtfxzELKSU5WemoaZyFyPmBK1ncn71AdiktTBDndy2SnCKXZ6boNk1P1tBgDp1K9kDGDj",
  "key21": "EBSgRCiJQJo1M2ue9rmwTt88reqjMsgN9dgsFtd1cKKYMdy75Up6Uu4cNFFQFusXpoq6rV5oyE27BnZZusWfhva",
  "key22": "3pVTuVAM4kSbK4xJzZHdJsKMSfxDBkATPZ1QAQ14DcZ41hQydCXVTfz3QKG8ayER3kVHEDp1qmnfvkDKKAN3H7AX",
  "key23": "4zebFPwgoQ8VCMEiUYrSPFnXXUgRfckxhG5nPMZvuzRw4YCyqztwqKfM5gpYkiiHA3Led5gPGFXFELqyNqgLRAc4",
  "key24": "5UeoSmZnHrQ9BqFg2rtzDSgoqt1Qe9CrgE8hzsRdP1nAogQQLdLZT4YGBb8ATHsKk8txGEfXkZGfkJyuTix7V1Fo",
  "key25": "2nHiNNYLxbWEuLQUG7tLMwZvXbTKzg1ZcrYefT7tWcDC8F46gGn2P6XximiMA6ZiXFy6mv2M4Rx8nT81fUEqEix9",
  "key26": "ENiBgc1YRgteQnEMF6yvbekeQwJjQwVd7WWR1Aysau2Um55oNPkccB1HwG8mkE4R5GszHLCbRwnUinABP8Yikp7",
  "key27": "4k1QTCrWDHky4T9qmSTeeyFKHzQMZDLJoDz2zRK4pzvVcrkpamniXhvhYt8a838mfsXhXKMK8cjTSLZ9ycLoAmtg",
  "key28": "5Wr4v6mwx2epdwuNvBDanz511cx5mUkfNtzECK6Rg376affrF6P1bDc6PWSGXbQKpYDovbgUHoSngvxHiGFtLWqp",
  "key29": "67Q8DJJhF6utDvwpTGybfRuYAVYLox8GPmFk4Mwrdb81id9SKrJRkKnV4rGTaC3jbkjawrqztgnQRaZhgcnVWhuX",
  "key30": "43x38SkoLjRKiKXvv1B2ea28ru3fSHkTv1Nb5XSoiQperh7VfVULDNo7esQLjVuVHXSLJjSvR1vAqw3u9e2hMhPZ",
  "key31": "YKcMqnFPqymwobfkfnm9m94JudgpLiSmAzwSZo8PLGrXKFhzmb7uUm7CbfTVchuunmLeWXxZfA3qt6KL1hoy9XR",
  "key32": "5q182b8JivcTQ9c5fmhJvX1WPQ8U4QJ9NE7mWCRTThdTc9F7WDd8rpAVvghz578igMDQktie4Xxq4seeAxRpppD2",
  "key33": "5CrhhbR53rUv9jrZedDfBDPGfJxCDDvQ61RNep7zZcmn9MmqgEMC2jf1ZLoAERjPwoZYviM6HcPRSnLEnqfwiY1f",
  "key34": "5Kbo5c3beYuFMzzWj9JxXNTjvGSfNqkugWa9ARcXxBHDuzGs1XcE69t4EoWAg5jBAsns6uKfxbYCZgXEEpZVz32M",
  "key35": "5ohNjo4B2qn4FF1apS15a3wxZT7s2r4JUUqt2n45ZrjQap4k5Mtvi3WrLrAZ1u34cCreaAJL6Q3PVhXqhShvueyq",
  "key36": "2QDKSnRLs7iBr55m91xp7cLGANXS9ZriuABdFYZoUPRpQ8LW2Z57ZJr4tuUDXCbuJmzPhydwnPND2eV1W5og4ksT",
  "key37": "3sMtm14nKjBQ9tb6JrgXDgsYNA4f5fz8i9wHVSJU1Mh5ccLKkGf1yJUWjpQEmuJ84nsAmTsUm89eUBu9GbFyskK8"
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
