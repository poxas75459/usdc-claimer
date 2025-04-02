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
    "4H6qvXojngNz3uMXXeZ3fAHfT5k8mcJAnevEmg7dDqE4hruRHxsKpHX4hQ5bN2ogb2ppsvrTzWFmoy9B6aQ2cRtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3epPujq6vSmxHjmDZjXTAzhb6imNjaHJ3AtERKqzoLMZ9GkvAs7uvHDEgosmYWECkjVkfDXPb53JmzHiUGzK7iAE",
  "key1": "3pBzLrsaCk44deY9YJbpy4ZJVV3VWy3mNN74bqeNkh6k8Y4rp5LjaRAhXqzoPmicXavWMbGWDuZv2xMrwoqhupPm",
  "key2": "5r7fE7BLDQ6UUZtNBRBCtu87pr1BMr7R6ApyDsqpxAwtRJyBBY2VHPti63wA41oib6V6SaW2PrDRjG7RdGa7iuHV",
  "key3": "4rNin9rnZ1ZpCrpD17GQihuNBg4ED8vzWjfi6mLTvz9o2ThufskpWF7QoFcdV9qg9ZyXzasDHiMkUzotMY8ikADs",
  "key4": "3BNfGKZP1TqvfrdicLHbDkisEnVXwe7moTXyY3zQnoAydMSuFDxGWdsnhnoVmtXy7xyg1RH2uSUed7fFuuGc84jy",
  "key5": "5GFKR2zEBoWiVj7vuCCgmuv9zD6tKkuTyk7HHdAknedyP2KgQf7kUHePCktPbJXxCfLHZGGtrkB5fCNvkAwzyqaz",
  "key6": "2dvwUNQkJDrP9ckaz93UGjWbiZYh4DLZ9b131pLjmQDC1nyu1PmwFK4xbbNiLk8Mu2rooeVZJbWM3pwp33hbRBRp",
  "key7": "57B9SX93UxoeJZG2D6KJrqkoLDMVdS3F9FtAZ4RZDWdxhsmz2eQJE3xGxg9yB15EVQCemLhuqS1jDb4ztuu7AFbx",
  "key8": "3heLcAFHCcxzCMFHeJpyV5QFjGYs3CKZQXMExKr6KdKo95geRRfM8JL7yrKTskgdgw7yY1meKMdXvn9s6QGLZmkQ",
  "key9": "4UPrhtZmEng63i2LfiRSmGHMw2wL9YiJ984eiBLQvwTy4ef3gQkP2rD1DGVdCjBwAK59w63vHnNbL1Mkcm6vzhKN",
  "key10": "5o4jTSHNfR3D1LcSWfpAZMpRV95pVBPxvN17oUgiHaER5CuNNv5rAuK8Cwq9jXGQtAEySWTKKnh8pdJUhzm1hNKj",
  "key11": "25XDJZC78GJQjujr44Ee8n9yEpPHyW6XGCCHhEQJ6NjDXSWXp2JDTdoxHKV5J5quG2UrkrBzyhRGG4pq2Uz24eKf",
  "key12": "4qutxhApfpFvdhWJPiYiwxxHRcrdM9MoPyTw2MmeGqg8nfSXSsbeAwbnBkpuoUcpA7JhCyuLUSkKkJXs3ES7Fndn",
  "key13": "2HBQ9UmG1w9mNGcSrB8zBfeuZtAxjV5RYHx6HjMxGSetFF1mTekRD3r8cwDWyvB6ZSffFzwbHna7bj2RmepFhy7i",
  "key14": "39hZNeCTQAnE7fqrDgg8bFjWEZ6Qr6Y66t6u8y8HaPNXNEGXgtcGhKx35rM6rXk1KBhTKvpuCUG1jtZdbQFBRqm2",
  "key15": "mCQRvWAAiZA31dkK2hn7V8jEBhwVBfsv73TxQ9ukVcFc7D9LtVXJKgMiLjADZYqyEcXxdd63rms2yEM7qiY2nSg",
  "key16": "58jaYdSRMoppNeaD712d72yfJP2LpcWQP68K4JreHpb62kG1yv5hEfWpEKHdEpBM7PWHhztJfv9vD2SKt4m1Q6kb",
  "key17": "34qNiyb5oQu9w3RBybBV85NP4NgLmv2ywz3BcrFK1nV8hENRkEXjoRuXzardkCH2BqaD7N3oBzFX41MNrzJyToNh",
  "key18": "3jSDgPpSzz9unAQMX4LpokfxaXTWuQwo6yFa3oCE9KL2x4sCxsNHGDjRRtxyizchcGHRSqchRHRAMAUvfeHGDeVU",
  "key19": "4gyxGLPPBsm25msFez1JZ5Kah8aFq4ZDU6NU67YB4NPShaCzDyvJmFASxuxaRndTTp9UmhkdkkuGbFyh5457rjyz",
  "key20": "5HqqbrtAEAZ7SkEC3EEjBwSvzZzPZNr9uKWJxK8EqcMCXx8cUadAEVYjaTqyu7eGCrX6eNv3djAPc1ztNDHfTZvG",
  "key21": "5UX33ckzPyNqBMeeRUoBn32Lzk37bjLkjA2Y2qVsG1iwg1twQcsvWRHurE2CKiXBKKVUTjYDM7MehsNLTajrroyo",
  "key22": "3rKb1La4ohTSWHDHBNBmLAVXrAsxBuyHZrC4GyMprT8yVhrgvMT2Y8LeZQxUKki5oHdHPtMcXo5UbNjLrXJmVbJQ",
  "key23": "4N5YGMo6SKvfikEKVZNkXcnKURZCbnWkYduLXGXrMqN6v1ADMQzL7AQa6TUBPhqWLEVqFYxW8RMdv4XrUfKRumau",
  "key24": "2ay51EaVJs3f8GeK824tGoZLepPoxKZevSRAjG2o6QrkoKPNaHNJQU9o7iuZE6wksQaRtfzeo4GC9E5tccPFcscf",
  "key25": "BGpUcBV9LKLS1zStwWgkP2SSCvCdFo3iU3RyyZPd2o8yRdCdPvk5fCyf6JxK9Le2P151rYE73tYrjQ9sxLrDruT",
  "key26": "UN9niGX9WqxC4LPZpUSEVxzsKnQt2yLPsDFDpWUizrk7Pvweqsb7Hvnn6HhiHrUuv3kfehgGfo7tJTA5Rn8k4og",
  "key27": "3roeCNFZygpZ17cuSmwkxkZeBQiMVzkDprXJGj83Cr6j7kEf3Gcn4usKYbwJx4aNdUsiFFuS8wAjgMpfmLYRNqzL",
  "key28": "4ty8RQNfveSg7yXJhTcJiXv22zfBhRwt6YMaZ3PEem6hQNPjj3uo5ggmJFVBcHXi1Nw2mBt8NyhPevbiSE1q6Tkv",
  "key29": "5nWBRiAN7WAFJhDi7bgW9ZzERWe8Ttp6LDrcVHeB6nbcPo9LwmGdDkspQJSCYpHmcYtiARSmejvFbct3XKVvqCux",
  "key30": "5Vo5NNxmKvxhg8Bx5fRBiwwSbVBS3uR7EnzhVL9ufprCxM5kqwV1SimuNNnsK1uozV9FCPxqYWCiBruYyiPjPWtj",
  "key31": "DxGaVJ5rHbCfdwYoFh9CPQ4kidqeLpo9Tjp1WpEjcjT6EdbjyMxbDG5AEVYgvxu8Yei1t7qERggkAax5gjFkDP4"
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
