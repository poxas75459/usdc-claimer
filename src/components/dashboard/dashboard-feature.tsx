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
    "2jZQrGtGqbY4mpi5cfUjCkdymjgiAzZV27j1rEpDRxAjoot9yvyhZvQFXviFVNhfLL7WEFygiaGzij7K3Kpo3RfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpkatXvgN7GrbtGhKcHnWnT28iam7yB2np9GxFPhXU84YDE8H5iK79FQj3tbZwyMWEFE9RtiQkqWyfRjL8DPX4J",
  "key1": "M46Xr21yZ9zEM5BP2JRHvH8EWMWSi8bSNZFHzBfgQstpYU7nYngVpbYTk238HCwLpQBe5jofFaABqac1Gc21qzX",
  "key2": "2hcXUdDXsDEdSME4FQpCRSWxU9pJ9tCcHg3miuCizA4TgUQ6YPFf1N9FeysRRPSFeH3LLfXePTuWkEocLTkDFTwT",
  "key3": "4iASWwYN6mAusu9kKr6E5QkaGN5VLhHXCv7Y3coSzLdkEjcjGAZS9soPvy6kbt5Xzr63nqkVg242EY1zU4JCnLe1",
  "key4": "2TQntSdBYLRa24RwPrU6WLYz2CNsogSEiGzAL9KinLFCLuDa5j8XXMw5hgspq2fQJ2vL2WWVgs3NKdzzGq9P9d5",
  "key5": "2JSCExf1qcfqsvUPbGS392BLDCsZ6QwDUPv8nMMRBZwNZeuSPc6yiXT6H395SzoRS3Rn3tfEne7Uz2He5bu7KbxW",
  "key6": "2Q15f5T4cLuKCnsM6Hi5G2enTE3qrVTUigszRLvTvpCMkFZGvJK3PLV5a6JwTLdBbXF6YTX6rgpfqmVUymqaJHXQ",
  "key7": "4vTNrghfMi9XhXo4dBs2ZfZh7FqTbPpKqEAr3RH7KQAxN6JasjB5Cd4erGbuMYvGNfeBnZ4ejNobqTrDcjLe3R8L",
  "key8": "5Mu1K7gPeLGUJGLpmF2U6tPirMUm3FWJJ3BChpnyM4jgrLCN1BvEDYZFydyawC7JcVbty8GethPgrmiCNvqpN5bk",
  "key9": "SP3AitMzL5JhiXmCMGUk4ibTqASCWnFCiSZacGky5fsaudPQb9rKNNmE6rhVgyThvJxkAQJJu8vfzYhWHYcWDj8",
  "key10": "2Hy4WQBHWsCg3CHc7t5V1xjShGKDyGqKiuAh6V1oBE6v3JZMrb5AadqH4Q3s3rGcBCCTrNEyCwrgfVdNNnYsUeDZ",
  "key11": "3poKU8PbbtXHRpB15JH5yeZKDzsJ9SQHWkn9wMyuUxNobZ8ZEoMerx3CeNYnqZSfeM928Ze9qRtZLx9QrVbkf39",
  "key12": "4cixJCx2EuXuMsH89sQGSWE7viR6X7ZmMUbd59cyM6iXDA5KZSqkYhL4Fxf6inZKBWVcGbHjFkS1hyhAUD6ccwSj",
  "key13": "2npjSR4D1NjFqimBsEckfLSfASoLZabDw2pGnPkuWubbMLeNJ2tsWs7Gqr4CxDgfvCVG3RD651xF6zxZSPuUouXv",
  "key14": "4qaoqQS6KCGWVZDZ7RA6BQvEdHQvP7aNMjunQ4hSYtTiahKRDbS8FHFdyVBUeTb42GcacqW96vfZ1HWqcn6yxEAU",
  "key15": "3rUKparrThE2Eb393u4FqiBbSuGENwvhYeGYfErnQY4dEu4vNnjWw3FAQEsvD6KNoxEpDBDhwyGrkZm6cb8rny3o",
  "key16": "iEuDsuQDY4cbQ7nrJhd6M8PWQt3ncUAJhtJBJQmdSr7PQSxcok5mPSZMZ9qqfvc9SZimePWNWHh3b6egbY3Ckup",
  "key17": "23aSy72LC8bq6bzi2bZbjF1pbdm5SEkfzPtYFKSz1oTmrmJ6MqFJeyBkhCCLrun3aHxnBw5Ay83WTkgbVb85Z221",
  "key18": "5KMLfEwb1vqb5boTx7Ax6eM5E2g4QiGdUpLJp7aCrvqPq42d5zPhyvghWWWMXYvjPAypJjBnvKB1pGoEwjJS3ofV",
  "key19": "5xoKTNRo8wcCMHA2S3xeiXmXNVWZ9jYAQYhAf8VhHxPZWAXt8xKpQTGRrXQEFgMPsasHwTjMePu9GFjhTQtcNRVV",
  "key20": "aHo6DnrAKvZCyn3ESNeVA6s4n8GHSTtRL7q5v5pywhhQhsiqFm3yW1Qo4gQ5RhpZVg7bN7fsskogcSLwhgr3CYm",
  "key21": "61QZxvjB4CiCSkWWZJjWCjxjqtSkc5BBLnNWCCEJgBqPtFxfb1m9LZV3Pitnj8m1XBEXVNmwZzYb3NAik21ezc8s",
  "key22": "5eokdSxZZZmqkojqXeyci3zdg9pB9JvRXx83ZMwcZLQBB4y9d9buQrzqYjBGf2mTC7pmyZHzK1F5muaeDaFCqdkz",
  "key23": "62L25Cff1TZJEdHqub9jBAeb1jiCHV8cNJKAzNoH6goPTJA9ULiNrxwSJScnEq7SnEKS7mJqKnoHhAFLnYcJu8qu",
  "key24": "5Tv89KiiJFc2dwwWtzq8FsDMXKcnzsgpvW1tgX51GdkusS6JxkpAFgd7nw5YdtHHsU68d8jBtv8fTdEJ2MhVdWSK",
  "key25": "4gb9qC2xbVESTjv2jWyxgsiw6ns3SQn2491fdvRVNnNZRE8aBGxTvZ6JHqJqB7quLFXSdDArxs6dYJFt8SRy1353",
  "key26": "QbkChFer82aWkQpie4y8UqkxsaFhTfbBjMouXqc4fqDQz6GdiEq3rWfQSw9hxr5oCaSczkPAgi89rnbXaysk5Ny",
  "key27": "2VXj6wyyrBgbb4ecHMG7RR9JfQe4mjjrtgf5FwFXuDyCDnbgypm2a1fgd5VBqapVUssZDME1A5Dp9QtPcUY4ox5L",
  "key28": "2Dm5KNTChgyayY1CxpViPgqF3URqz4uwT8AUs9hcdGtEFuz8ytDLDHYD3pNyiLxYWGZaQtSg4jFTZgfgJvviX24W",
  "key29": "3DVeNRoCbX9uGMVA5qwB1MDJ6ZFXwy4551gZsjT74uK1DozUDa7xEdEY7rGeFwHMnxPXbosM6iuXyPZprzw7FTg4"
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
