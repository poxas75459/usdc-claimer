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
    "4j2EkMLazoZraeAMr6UYn5ahZxnL5rG6qQdd12toWtEEwqr7ndJXpJ6TtFKy7tnMPEJ149FEJsow3UomQTUGnM72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61yEjNWsDsdTdTAKV2FDpJJeUEbboqASipWkqjuHXwbtL521T6kPPxXT1TiRK1xJMm56hZ9BGksfY8a3cQjfMyKw",
  "key1": "58B5ozMBV3QZNGmdCWR4NWouBWW5ZCyW64cz8gfGYhnLZLvR6F48WFwAHWqkwFCCoMWZdEjMGmj3x3emcVUKCRj6",
  "key2": "45ztUaKbjgA7TkWv1Q4TvdgZJPBFq4mzLSW6WWvCtwajMxBhv2XDMtQvTHw7mt5yHMAi1tb6PJJqq9uYb6qjvcGk",
  "key3": "2oMHjg2MXFgSWqrE6E5c72DQcCnzvEZDb6v2QxSMqKi5YpRqgrVrS2WFDJXPpMgBTFweXcEBovAjy2hc2J14P9sN",
  "key4": "5JEPW9sN5DQ8nn6gakUAPefKQN1ZF9QCEBFwX1Xy8aqALfZ98iaBCggiKfqC7khWynARYN3gs7Jnzb5meqLKF7HP",
  "key5": "4egvsaBgWivkMFooos8fJFUHSG1aP83SBG9ZrrzHWRG31gjit2SbaS6NvPoc1VYmuCAChYHi2TufjDjht9hGs4Qi",
  "key6": "STADDkokwvMXAEDAXh77RzLNzAL7YFdgFgjGfZLnFByaSQzWudNaGnRaBZzTCmd6yHoVrqYNYQHHWhLo7S9L3ZS",
  "key7": "2VQ5G9i3BAg3422jJgCSKtq4qTSsEqhHiBmsXov8gnmzYxHUvythJ6MEmQDLPEDcjXd5QhdqRsA3CzKZPFhVdodZ",
  "key8": "3zpCpctkYZpPnD3gr1win58LhWmsxV3JZwipg2Y5Ys6obdAQ6vWvcoiUedwPnMHdyKqK2jyRgbSphVr6oCjBrzrP",
  "key9": "49LEDzUV2MWBwQsN3xiXNTgBjSQd3si7KZuzyrijrEWyHiPSqtdd75ABaedoWc4PpZXMaZcdoUWvkXZQc4bp4imm",
  "key10": "3A6U2urVfzjfCc9cggE6r3oYj7ePi8aUcLk9UKq7nBAnapS5EFRbETNEXrtYdBii8QnUmLtpedHuh9jRTqhzgUYX",
  "key11": "2xn3R84p3MRgdCBjCbwzDFEPzMrwWiwcimjvaPkmoZHZPr5tUU6ZB19RwLw5jS54SqXMNUjjnrE715ABnWMWmyRL",
  "key12": "5ZBJvcrVZF57n9uCBPwECEBUskGNmyR8HFp4VgBKyfQPTX4KTSeDoh1UJUMApXDmpkDz4fUAZt9E2HZt5NaBfAxb",
  "key13": "2ogepMamZvwA5oHmZQRhb4o66LEktwmhhmnMpKct9TDCWXCTLq9PLitGUzDmbNMhJ4vpYBASCUqGXBcopGpiqxrM",
  "key14": "5YVJd1fEeagrttmRQqTacbJXu9yCimyTX9Za1EoDXkSmosEmfTaGyDj3Zry2NPYkyW3uRnGMFZTWte8Uix9NNjyg",
  "key15": "EdPEY1u3uB9ZvGpwRxsKCoyoswmNcYvvwUFvydVp1ztfasiVPxWvJxJPQCU3zUqJxjhjwxq9WJ1NDMpyTWcyTM2",
  "key16": "3JBSYU5AAiSKoZzCMKTxHbuwZroM8XwSd5BMWucjU5dpk9VV9nH3ZuDuGm3gULS9VTYPjs66xkhyNJif2uM4S3td",
  "key17": "5jwHecj77oYzA17E1VSCBB38N2G6bUYkun5TejBzsByUBbGiQ7iw7cjLEJAKCLnz124rfCYWPZSbpiYUP2TVMnd9",
  "key18": "4GRrpnWYfcFGBwLJ18R1Sd4vqTfwSQd5J376XtsyrraXhAa7JrQvxNhMY1UxmXYEc1Ke3ruDJDxuR9TfZBycp4Ej",
  "key19": "5LTDPSRk4MUngzv42Nj7S4329ZRp1ESBxpzbYM7g4zUfCgKuRVfGwaN71zrFXJ4pWCw9pLnWsaNXNFExin3SZrtj",
  "key20": "3tT5j2dLe5dEJoQ94tUA9MnU8FAWt9i2wkgZ8MeDgadXhM1NexriFj2yPngdG86mrg6yw7di2rdE7wgsXUw9apWp",
  "key21": "WVi34JZCGTBMFB5WFSTTwwXDAPM57VMAs3fvTftQR5f3otZGiUV6BTkwZQqLit78j3AvooLLkFbL4KUGSTokqMe",
  "key22": "5bUZtq9Nsi2WEdH2hVhXaFbVwLH2S3LJhwnx6j4AsnG8vABnHz7WcpoHN22u76SpcQ3pxpSeAT63Rh4CEFw7dkPx",
  "key23": "2Xv3X3bVMc38csCFQ7T2XEgPW19t96tp93rBFmESapu7DufP3zhaHLsiFzb3WJnxvrmdXZaeMkdJBp6AKoLa6FCF",
  "key24": "4xhyMFhsXWjzRuHC6anHh3NB8XcNEQdBzBTH5vvVam43WBWfCmNsJXC2D7VnMQyvSApKniUGACPgoyW1yMV2iK2R",
  "key25": "2amqktMh1SxmbCJ1FBFdf8LQVDpMwvwQjf3SiTBcwAT6nKq9CtmuWFYVzqX8zLB6c3RX9EhEoPKCoYYigN6VcqkV",
  "key26": "3BTCsYfmLPGnkhdJYU1ncHaVAvhsbHRuKN1Djm5hR2JEHvhNffu2nxPAyZ3VaJ62nmCG1aX4vSbaqkAxXFQASX5G",
  "key27": "4jK1ehpXwoDyp2TFFi1zQCiSQ8EBnRVyM39vUhp1kaczhzAkWMjWxSEjFiB9j276hwXV6h4iUkDQtXx7nyVEqBNc",
  "key28": "3YuCZBz3uzdTRCQ2c1ScjbHPoLYNbhSkQvCBbVv6LCeAtasyDb8A713HeGzaq9QkEP36X9K7WbkgD1fMZYDCsQSN",
  "key29": "3fjLpHA4CrkRm2ScS5JSiHjxAB98EqtDr5AWd9CQk3K3Y3z3dghseVE5kTW7HMmCJUFMnZKhSxm3y4Fsspu5uE6j",
  "key30": "bA94mverwv5zEeaYktaDc7xi7Nt7i4JWMNHpqaCAo3FjUwSaKaGFoH6F1nQ2awPFHHSMjLjpV5P5s8e1RRbwnmU",
  "key31": "4u3XRZHxeJ9GjUEwPWWsE8vVDQpWQxkWiQdweFh5DDwXoC6uVGrwh9N24EUUZwJD4nCoJGUQiEhSi6jWbc6Ub2ja",
  "key32": "2fkGJ5cVgjLoChyujiEisddKoSRwtQ1AkvGzmQCg5hKxukrsRTxYYtsbNMcgGHuyfTKZE2MNoapwwq6HQa6f8Y6Z",
  "key33": "c3WjBaQgmwi9QTvcToyNL48Y9A2Eka3LqupvFFQUWxKLeDAyYwgC4ofLjoS9vEV4tZfEas2ZzujWUdb9yGzk3mp",
  "key34": "4mXjaxMAvukexQZ7fPunWpryrQd3Uwk11eNpNgPTGonJ3H96T4LrxgB4dkQ8TkvAWQRjT2mk1ZtpeBuhdWtypkyH",
  "key35": "66dTaQEh7nUhJNJ3FAh1gRoASH488ZkJ5KNiNhZ3JuMqu3ekvoKYcWuxU9ZCx6yMQ4KMUq3A4e62WMer6u3FPinp",
  "key36": "3xQDkPjLSkZuoSjwkctvFPaygeJvFqjJp1U1fXusXdTJSKDQexr94ugFUEULiYedfkeQ98FFa1GjpajndGjkcNL1",
  "key37": "2ro57zDvHRGKpnx1wp4DQFbrEa5oK7WZrePEGPmgmoxiWHT1cV4eTq2YWqkzurKe8fppgUNQ7JsBojHJ7e8akkyT",
  "key38": "4W58L1fh4UVNwYfzG7Z74nbeFQmAphAkximwht2obwfSzXwSphdMTSNEacNKAD6LhYmvL7WHhnE25mXiXtFKp4og",
  "key39": "5dUeEyYQ4ZMPsNa48ZcFhr6VqMeMRT4JksjYn1ksar4B24eXdQsWTiim7jUaRJSvyNfuGh7VKzchwiHpahn32xLL",
  "key40": "5ykrjpWHtbY8h3SJnYdb5BAJB8fpMLLoSWv3Xy4vGoSNZbSWwmbw8NLEzV9qVY2jcQ6aiuznx1PRjHo5fkAVmSUH",
  "key41": "36wmNfT57wJ2HKnmGzr5sNoJcjbd11F7ZGQYJPxTzew5XtH1Y1SEDxLgUzmGkGiGLB5mVwBiExNrB1szvMWUdTwP",
  "key42": "5Dw6jNCAaqAFZGv7iaAF6Jx1N71NFA3dihRfH2pLYquVS4gmGwGnChWBuDEvMRiDz2t5jL4613Y7xTkPkq2j5Cjs",
  "key43": "wzDRGiGBxDJ8r88YTELM57BoC1JPR83fZcjKToGJM6BhQwF6Wr4o9obSZAbXwzYhe8bMZx9Sb1TJoysH4kMNHgd",
  "key44": "5jfuzKwvnKY5YS1UCiGM5iTWFqmPFyzhNdBG1X28BsmXKP8t7BpLL4erybXyg6nfHnDu6VCkAXmE9oRWCP1huaJ5",
  "key45": "4jL1pU36VjXJYjsBkKVEN1REzektXvbCamWoJFVSAjFRURg6gpwXdAapBMjBkRzyFufY35hMNeRTWWr36MWx1C6t",
  "key46": "4bKKH3VMfCJusTWT1MiGxy6XNYQPLgFKDthk72TFBHLkUF4T2dWJag3VwohAu4w5TWYifrRcqEa9McF23jFahqPo"
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
