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
    "uayLUobXuBhot4RbGmThYPS7rksSXA3ecLUpM2poYgY1RcEhxjhMzcyV1yXvha5qnoAVqJcJBHw4SnMUWysfAPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ktJFKRqNYhfZwEWmqQEHhfwpoJxtdv2oJ6QxJpudmpKgszjy8a2KmQqEBDam5GyR4fJR8WGzjaZDzhvf7zNYUyN",
  "key1": "3WKrezQ1h4nFPPauxEW2qvTr4QD64NHDqfbs9VLjHyi5NodgtThjkt3Z99vVGHZTNDde6TGD4ZmCEnCqEzxyBLMi",
  "key2": "2ECgM1aLhojCbCKMLy5Z7VGK9ioTrcpMdH4btDDAkzfcZorvc4y1aDZgXXqwcnJ9VGkUPuaJYrXTqjkxRTKRGdxr",
  "key3": "PmkRCB2G1rKSBwTwS3XCYnkoqb7bVop1DEG3gyaHjtbCtsxDynUTxqpWnHzka7VZt3ayJACxySFFGKRF43F5XjA",
  "key4": "5eomYpFU4quwxkjyMPUGkEGvEBNUiLvoRYr3nMqvJMUGDy9XZaFdfNX5Q1DAcoXZUACM2iyx1QiNXsJ4eTXTVqvN",
  "key5": "455uvbKU8hNJVpdzXxsyKP5s5N74Pzpi98m727g4Vx5juAhBqnXw9vR44ErNx1HQbYjS1AUCptwxaHFMCGookCEk",
  "key6": "2rks4g45EJtZuQM2Ao5uRf11oAst8xPFxPqgfmixrR8t8HNYKeGQiSvhP29kWaBu41QYn3mueCakBAd2xVWwLdaS",
  "key7": "F1mJkNXTnQUmFA4Pp92VG647zC1w354zvJwPSsx6JffTQt4GCw1xV5w5QmjLBayUuDP1mXczRmVF6NMp2tqnBGT",
  "key8": "4SJrcwXM1d44jzYK5cG366bWKrdscEGsr3NPjHqKazwKn13jTPVoFQ5obs2NMzgacMe1bipv4gMm1cJ25QkfEDDV",
  "key9": "3BHMussEwM33wA9CRd44k657FE6T1r4NSZvnvZmbxCAo6DgmAN6ZLkAi5ek4jBakturJmHP3XwDrMtUWp7ERk4qM",
  "key10": "34GSWxdvhBZ1yhE2MqduFeHEEaZd2PBsMaUnoJyDFBwQwxoGWYjd5DbG1majnfm6nFQp29auP8kr5jPYL9fYjVZQ",
  "key11": "3BywshwmFVJrouzv8MkownqDRLd3PjyB8Chdk8AKXpDbmGYpdJwQKroyLVXS3AvXasZf9BLzW6UsB3hfBmvnhPX2",
  "key12": "5TXNa3CThA3XG2N2F69q82DJNiHJUSftTfdyx2pnydrZksVWcgKsfueCapQvzNPrdp44LK5KMfMF5kVQzzi7QWRC",
  "key13": "2piTApdZXuY66ztZipXQ1XVihvRMZWZMpnRSu4KrKWvBc9j4Hb5dVF6J45J1drgj1ejnABuYZug1CxJqCv8nNgKK",
  "key14": "3mU43dLkfdUu7KvJTzU9T7w2pt1SkpB2ZCqjcg1k4ZvYc9cgoJTsvpypNGS4sbDQU3jc5jG8amqM4Do7mygAwEG1",
  "key15": "4Q99JALhxa7okBsc1q4rxoYEfy9zSGEoX4a5NazSTFqWMftYkDNjpcmvkbMkqgcHQpt5uUuCEmd8DXi5SWSw5AAt",
  "key16": "5z2Z72Q8YNXBvL9toTr49E59sVUDrWzgPJD1fKqi45d3DZh8Sexef1wdc8yRryQf676sas5f3wjEBcvxRbgS25Rk",
  "key17": "32LRcgMt4Y7B4WdAiShFfh7dDfyMbrhhuRXNw422tZNvX423EbhUJTVrZkVbS8EWyVFwTkhTVxF6sSFaFV8QVBRQ",
  "key18": "fsP5SHASe5FxMDv2QMJv2hiazTW5anAoHgvwXzWXcTDU6YzRfz8xJnLisVGvJzb9CztjWhZb1dVaftt4ewjANyh",
  "key19": "4xyXThpyaixL4dh85QKSHP2mPv2cmXtUDzXs7AtNGqoFS6XkvbKu98rMHVdkaYqPxyppGxkPM62zzRsx8Cf6EZe2",
  "key20": "HhHKsYLc12haoYRahXZExHdfNstQUFMzS9konNrV8RyRfqf5rDSHoEfBqSLwQ2D7um1tWH5sRkv9ZWMSbFcSUYc",
  "key21": "5bP5kTzwRWhL8ZfxrpC6oScocLCX3ptYMwkB2DKjj16dVmWB3WWJnd97hJ5tesvxZTJsPzN3FyEoFvP1SybFG1nS",
  "key22": "67XSTcXKsyP3Pf1Ytjhqz8KKcGB9pr63knoWWJFSakSpFwYvzFqWfYFzkdsb6KGU1jDi5vXp9TzivnsptMZuW7Y7",
  "key23": "3yzA6pqg4y8rujd9Zmfm9L7byEqomuYuSDPn9RG7VUBhcLjwofaWW83dumizmYjWJGkh7An2t4TjXry3thib5fgY",
  "key24": "45XwF7gMUnYXChorSzU4qEjHBwdgT2Uq5vrwh6BCmPkJg4SEpUSc63xw31G9w52Pi2rgMdrDsjhwvJjqxPRv6eG8",
  "key25": "3GSiM3x8kT1ThcibmbVDAXrLmpqAwLjxgjJ8QQnwHcNsrN13qDJP8PCqHYif9B4d67cXFT59Jv96XQFhSpuysbuK",
  "key26": "541NVeQjjReDDRo89dNRpwGLbxwt4bSufhY2pcXrPX4gMoTGFhrE7ick5d39iEN9GSMjtgHENVReGBEsoqHsb6rJ"
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
