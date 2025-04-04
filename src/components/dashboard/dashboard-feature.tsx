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
    "4JBXHng4cDUwu7jGE9mBQPMirLATRUQMUAp3cirph2VpxH3wTwtuw9PofubrzPzAkPrL5755jDiHffR664dKRt8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHqgmmC8vYHVQZTvzPTuRzuqHvPnG1e3MjVXJpbRmEHwG99h1NC2q6ecqYdYaNbEZC9Fax4y6nFU9teCqJ4P7qp",
  "key1": "34GVBLwfTJEZc8Z1Ye7KAAqb6JSuBLhXc9cu3eCCwqfUYaqBNFzSuSkV8kyXUo4w5DmkmhJyec8YWdjPcpxQgZ1o",
  "key2": "2Q13azM6bBeMc2afs1TJBFWGJ6CQMpSkRVThkgt3ebti9cEuWiyq8titBmzd3ynPvfLRWw8im6AJzys3A4nLTBhd",
  "key3": "4NQpxc7SBhpjNNjvUBWzjR69VJL8BYcQuZXJofRUKSW57CjWLbgqmZnv3w44igGyKp8xuZPBJ4SDM1XKeQv7m92S",
  "key4": "4s9M2UnByen1rVeAkXFzBym6rSZgqaAwBX9znZHGX6inqUZw3w764jsMRCiS4b5c1G8K5gykFADRqaou2rmg2oUS",
  "key5": "mgtGa5ysidCwEaLL7HfGvd15JGkPxCiA4KpekuddqDKw74vjVGXgn1AtZxpk4w9SCcBZCMqQJBmDYg1RWr9zznS",
  "key6": "DA9CSQWZpa6ZHUTPRK1Xr5s9ZiR7o3spe7ViS1mAEKBoYNLDv4M4TJWBD6Es79SBbyeTxkU51GF5y8sUk1PBKhQ",
  "key7": "5V6fG8oh8RvZGRZC1ySXNqF2JjiLMSD6du9jThFJuLF9Fn24ihJRxzyWn4i3Esn4HRNUsuvbvuqjhy6Pzb4tGJZZ",
  "key8": "CZdYyGyM1kXXGc8erEc8Zmy3HmgoUSAx8fwEtkS48H6SueeosJeR4q5TgQEJPmhki68HphU2311Bq3ZjAaaSRM4",
  "key9": "5QFRFjSxDS12BZbBJY4RrqfogzepABbKFgqP8mxALxRKTuQ2XkBt6gLLBskAdx9jzMZL269oVjF7WDZfr68GdXD6",
  "key10": "mzcLfUAMCA66E7Pe8XyExKCNzKcvVDCAHkuQcdZwrFUYNRSUi56GJGgG1AwsQsasF9gHKQywkYytzLZgR8C9g9U",
  "key11": "51aeo2tCu6xzh8pvTk9gvvCHLn4CCXkXJbAfQvLKF97TZM7mBxkv3fiGqyYdxn16y3p7Xu9hMEPbNEart9SJRCAQ",
  "key12": "8FZc5Rgjz6wC2cXAYphYZzxUwtPoWkM7F42CGUmhYQDbJcKVQRBb7BDN2hhFR1GxUc31J4u4Jux2XgFUgkdHvWi",
  "key13": "7y6TvgDFJEYSKK7mTchWnkzLZcqV4XYcHXxEjMREnB7mtCbyW2aLDcB5N4LgRgAS1qdek145QWnMtSriztmi7Zw",
  "key14": "4myi4z5TWmhEtN7BkSReTDt6reFcCBKSzkNQ47Sk8AULZuGq7RjkwFLmStrKQ6W84tXN4B92sD4ZfuNexvMpYXSs",
  "key15": "63iPmmY15Dn1sBPPMMcn1QECG74HMcWWdpoEnzgxEY3SAd6zeawSphfvG1uKw1VHNHYZ6Q5sKfdWL9J1L2xfCrv6",
  "key16": "5AJfjKbFB75NXmq5wk2SFGEGypsxq82SM2DsRZ34Qrtv8ASQUtuAQdrFHUSkcvfpTjW6gcoXG1PXB778wHexXp55",
  "key17": "31ddsVZHT7GjJkr6na4KydxvfX7QSeiKsFJcrc8ezkq4mUQzLeZWFQpFonPZrTYxEtBXNVZsEkRV9s4gX5AaXwFu",
  "key18": "Ew6BDqJ4diG94SVTPshMKKMtvPqq7r5XnowC4c5UDrvCxbpgeKpHmMw31LTipkWYQZa3HQ1QrKz2hJq5ZdW1PnU",
  "key19": "4mmXJb9GVAtuJjGWvkEHuPe1Lk38bomKbQnamaMBSMGskzsrRGcPuymKFRGCNK5ZjmMfMFttHRhHWCRYsuBXzAKW",
  "key20": "2KzjzCSHsmNe5n8KNSnxYKLchNtwapNLtpMtEoo3TQoPAtdw72zPvVDyj3r4eUUVgeC5oYctTkRMNK7onfeMe77p",
  "key21": "2Lu6mCMboapVdPSzSxtVeqrcXmyzokz4WodvFEF6ngHQJrnvMbfRy5pNmKT6yC72SaDEY6zoPp4GMEP2RqHU6BAZ",
  "key22": "2Cq4477Yok8iN4Y6tt8gAsjU8K9v7FjL7F9thnvF4usanpz9uwknqBt6LYByemyWnSQ5jcZeFwafNh1yzxSFCG2i",
  "key23": "2vZdWmHMAxqSUPpo7iiLJaiVa63Ri5QXsgGtDcv8Mrmc4vjBhhmWgSsATN5Jz2bMVDxTV5Mu1oNEgBWeR3npYMqY",
  "key24": "5gCfgkAgtXMdjVVLe5MKYDLUMrHa8LNFodWBsieTstfjaNMnKcRBAWZhAaKMMsr8JTW5aD4N9nvybL242Ac3jzTS",
  "key25": "4GotJA9cuunkWyF7eH8LT9xxV6qCcMVoLyLpS5QdPxhP4en5TdcRsipsCb2p6mPaTBGJ39FgvMtbgU3vUabnEtAp"
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
