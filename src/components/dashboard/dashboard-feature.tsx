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
    "S1PDpBirewcta4QuXa8TSMN2Fr6rSdKgydE6Xh6CtKNwX32UNDrePDqrELPK3S4r6g47eMABKyRGntUTmKykjLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wStzHb27kHJfGFGWBM7AKpVkKxxHEXMBs7cFAEcHKzqRNKe829SAiZ55dZ8ihA9BiUMBdmMmvEwdH7qwXgKP91f",
  "key1": "V4rUcphRqGhhX75WnqpteQKdhr4DJHFCuLjdawi99EqyJzSyX77exdZxjZmkM6mQi2sgi14wAzJyX6HGGDgcoaM",
  "key2": "3itCFddNbfmYeUuYkUMeUouSaCq7t6iuDCxkt8yyGxDHogGVHgjtP4WKwpwzkoPgCjJeWPXX69nSURqBCEM39aT3",
  "key3": "Fj9GFP3mrFJBYLnDH6sQH6uL45pvchxyiB2YtS2uJx4PjByKwt1TBJ9TjyUjZTPQK47Xfj5KJQ8Ksn7qLb42ZEG",
  "key4": "4jXowVktww2W3zKatwL4YAzuvijqY3jaVmFuMFSH3hrJ2ffLxyV93N5j1KXaNhzHxMN196GgnfXanNMesyE3uvRa",
  "key5": "TnjmSBCGeDXHk1qxnz4vqEqPPYGaJo4ea49D1cPRX8mPaerCeRDYHT1fuLsutg9NMTP2YXeVnY9RJNeMwP6orb1",
  "key6": "4vUkYFUXju2VJgyLnVBbeqCSchNjSvuHhYweUJys9ZJyAp1E1NZzbDjeaxfsHKbBpFTongp7ZNDgPoztyTaoua5T",
  "key7": "3DRMjnrhEbENaveJ3Kjf8p43UEhjSuL3JjZc7Lfiz41zFjYyHmButeF7a2xe7wY86JCzKEePhRyvdF4bDpz9SLbM",
  "key8": "2GQWLgVdfffTKiK8zQHBmU6BFDCQypZZHKhFEjfkgpn321FQ8MkcyiN2SkEAp69fUfuUi1y9r3KnTyYZi5eAgBEv",
  "key9": "5p1iUHL8WwkTTPDhoQDMZqTRSmVBqMsWi8MLCcm6ZSJrz9U1kNUqasYiZaFkZWs9mPwjEvvcYCDnL9SpefmF2raS",
  "key10": "2nVuqbucjidzkfifr4VqQM7DLNEV9F8B9Ey41wAKbXN5qtrcBCVVKmDrFHVMmsqqKMxanQmxBqeGvULP9cBbqs4o",
  "key11": "AaoVgaVisvCKYLi7Xj5GRKxk8Jqt4DLFTTKCAv1zd4rfzPFpZRKBNtam18h2CwXHm4ZAyAZ62BvaA2qJCE6yvrc",
  "key12": "4jDXdGjHMnH2tUpyVjJHtKRCGmqFhCGMMxNBExV2ShFHYda23DJ4Wb4gPgHV17n9wC1BqettsVYZDF3VEtPv5AYH",
  "key13": "3mjGLQFhp2ieNEF1XtEgUuNDr3JUhaizVqM2yWRiivT4mWE47Lf1mDjoUojj2HfJpTBuLc5vweTktebCXz2s3iTr",
  "key14": "4PYBpo6gSA9HvUra5SW2YEGB49xKo2oZtTtm4xJXmCFgNQ3UTacQtPrXYmRYLS5Pyae5r3YgiGipessuEjHGFLRe",
  "key15": "2fQLTRcTp4Dgpr8tdRnGLnTTuaZezThh6iKSzG1TZLF9KKrN3EQxsZhoMfJ4JczoDdkAJVfaT8MeFExg3bMSEjPH",
  "key16": "5nG2rgRfa4vVaDLDrHEHaco8xwLKbDHYQj82otexejd4zYQFspwYH1kdkVnDa4tK85NSNZEu63DxWkh6a4YJYGpd",
  "key17": "wEHR56EmWByR2zxgb3QBBvjWiKk7toHR5dmnsVrRApLvdePFjSN6we1UyDXd8GS8ypoy6F31SA8hy71JMr81Hwd",
  "key18": "5BAq47witkCsGXKTqqMqFMaYHtfMRiKBvndZrDt3gQVGD51y2bEYnYwkQjpAps9QZVK4WLe1Kx8uFVp1zijBxSqQ",
  "key19": "31ccrYmUjhZwSzb9dD3ucd7fz2kGGXDJSVieoeZp8VF22e5WnEKG6uNxEwWbP7am1Q977BqupCLZE22tyUYNqkNf",
  "key20": "2PekuTAEoKhXfV16xnxbY229Yg3ZzJu8EFUrKPc4aGvazNyqvkjwcdvZ1qShTLh7B6osxvFGgCFVtQ1jvjCuWKi6",
  "key21": "4AH9fMWheJ4ymyZhZYAaYtrGdyMAddTdaR72M42tLGY6SuQNZyZUvx8jKFSaoHuduAFD9G8q7DrHWTExKdwGLZre",
  "key22": "4CsW4SqFmp9yVhC4JzkEKXKrLa8Pm6vZdVbmqtnfzebCuQ2VMNd1BFKNJRBJvhTtxVDqbm3jxtpVqTTnMUZwLjgm",
  "key23": "33L6FYRzES9g3hrSgQcndjzSr7MqN876oSk5nC92PMZ96fBST5eRS68CtNPeaxLSbhWLesbQuqVQiRo3NHRWmSVN",
  "key24": "3TZdb2Pd5BYv9M8N7akvmuBVRBAeqtSgTPxUEbRCXSejjWrw2nM2F3FBUEC6qNEiqT98cjJSJP453QWDBeg4qXGy",
  "key25": "65RDcuLBNc5akqp2R69NzrZzQcFqbxGJsiYcaabVBPd3orGBfmrTcJ8nBs4MTTJHWC65PKLZpSaUZctMxWRjyrn8",
  "key26": "4S3sYZ48AjH9sBUEo3GbuLuT1z7QV8R3JmewsT41SGFpiysc12dLyzYSttYgkSZxuezMAVoxA8m1D7jTT9Na33Lo",
  "key27": "2HSPK89VikH7Go381zACq1ng3VcTYBC8nykNHYJnefR5j53ZJmAc1KpeRK1bLwDCWZKFkuy3a1gQFRZ7qTgsn7Rm",
  "key28": "5Rqg1LR7x2hNsE1TCYcK37YPJqEeMbd2vdSSVDaVPofxvQVT5o3FQNciPStXYuzUnTHpf8L46SND9GND9w3AccAP",
  "key29": "2798yNoWXUbWUMDXMQkgP8vccKofLic3EvtxuAVpiRqpNDTHyat5qERXYv1MeohefgKprxaY58kDLG9uf3xRxkN6",
  "key30": "GSSoiNk6JHaP2Yk6FM8chwPrtqQsqBBjAR3QoTjto2DxKurEmT9tYsjbYos8DB9DzYQFYzSp4LaspnF3PGbx68E",
  "key31": "Cgyw4pd1oL7w4Xof7h7hUyGLBnnVhE4Z2ikZRd63JF3jigyJhgqmLbutcaePteK4ZRzxRkFFe5EXE69tUnS62R2",
  "key32": "2wAR6XJVDLmAgC1w6exeS5dDi9Xh7Y9KUg8MUpKLM1BWc3fTKffQ2toJvd1TfAvgec8ZUuVr9huYRYGHzbJTzLfy",
  "key33": "3dp2eiGGRZ3jWfo9LYekJPcoPxgtEQGKbroQNXWrGjmHCCijAwkaRWd8d3KZhSBHpL3NDEcCzJGEgFvwRJij2WhM",
  "key34": "5WMTZSBSA3YvmhapUAm6rEhMRNNuinQZ2NB8NniqntQVzPf7g2354QuYmC7J7RjnuEC6VVpTBXqNfXc6U79BzHWf",
  "key35": "5J56M5awRhD7iDwDDB6CiM85gyueEpBWztpbhpWZHVvdogoroZFrM1HF9rBcN1YfDfDdXGRRCNGEJPGe4QGjiSts",
  "key36": "3kUXoWM56Jr7DmXCUj7rRWo9fjH9rRfM1htKwJvwtgU99ZXyJ14zwaUAPHQVyhdr7BXSK53S74zuMMA3pxcysZtu",
  "key37": "3TvRZvX5oCKFJHgcZ4WpT6ep7FhThhcijoDHaT8YsXyuq4eDGzQzWSJqzXavYZidfBeJ1pc7MQk6VPUSLRXopwR6",
  "key38": "1GLMWt9wwSJKfo9b4QNehLUBoN2mizz3wYZPNXQwWBGb4xsD4Kao9LVtdkfwNuhbHmEJSEGxmUpB9fgfPw2AXK8",
  "key39": "3D8hYJ3m76JLH69NrQE3WUkrmPoanvWkDQPNUSbxptsmnRjyXiLoFhs9sPcykCUUpz55YQ9y33VgcZapqE81AvhD",
  "key40": "31GCvHqQN4qMHtTXvwoyQJpmTaSZc2fuVVLp5dsiHXRPjvEp67Ztmxqa68FEp5XuLBaUEDZvAwUxy97qewurDzAt",
  "key41": "5vhwyCyzEJBftq5ecTCk5VLYCuqNXQwBTw6TZH78qQzLmf8fE9eLKQTD3fsbnNLE2ibXsB8dJbJDSvm57qQksCYa",
  "key42": "5Dk6MLseFvyeKvLcyFkWNUzp39L3X9sJLVLQHo62YmLdK3qHpqBTnsAwjB7auX7Cg5S4tYN36QKQrF2fsqWhjiTM",
  "key43": "5XFoLdFi7Nt9jG8zcGsh9eG5KsAE4ByDR2is4xHizFn7j7CW3wT11Aw7kYj18c221CZ8NpzT3QnmG1onztagdKek"
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
