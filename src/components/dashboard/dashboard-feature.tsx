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
    "QRjMhRisvyyCtvdbmubSfGJug1ja9Gdu4Br8bJErTESSF4K9s4Txk7DEntvjeeF2v4a9vtKVydJuGv2e8B6KEqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKUnYmZtEURiUuSAHDFU5KuTMZtN8Uh2aMQ3eyn2o2v4w4yVi6EgsrrGKsspvMtBso7Z6VNBepVvhxioAe29Bva",
  "key1": "3nrAgWenEVRdpez8xXNeriQ9yn9hVp9arswkfPU9e5tdZBcdr5zK7K71gagufBHEX8cJstDkx2MRTyBWEL2Ne15d",
  "key2": "zyy2jkyYqsV5z8Re46hLDArQRHLetnanju75yFUo3EJFwYgEPZACFjy1kZYoet4e5F17ehn7fN4pzRiPY56Wohs",
  "key3": "4xiD9ZCYJ6Bj9CTjJj7SARRfv9mFdk5xGv2uWTE61MPfFoPiVUjXdVJcVyzbAKz244DHmuokb47vD2hTAocoimkz",
  "key4": "5UTNn6uDfYS9DhDQHCYPPK8K6dgYbNE782RM5nutCX5acHEjsQaGtToigz7ysaae8efxFyKpcCav2kuYpz4TgnHB",
  "key5": "fjtJMq3y36wsUqNfEBd67PVeyNaT9n2GyaAXNokhy81hDzTd3DeXwM3kq1tCrsPUz24FEoNSDG3XT2nzwDE7TUM",
  "key6": "5hjC6ijxXjZxd5S3nWGQ1PC7MFaQe9bVHNpVCEM8dT4KzYy1RMJyzhGVEJzUHqNbGw2XA3c2NGhcxFDhwkF5KCVq",
  "key7": "2wV45qJqJfJTsjvCYwgN2C76LNhNCJYi1ZjvrDRRnxSqy1E9u7rEi5Sc3fpGiy1yJ1Dfn3tDUB6BbkgjSUPbMQZq",
  "key8": "3r8vK1cL9beYB3T2njUv4dDvWv7dfAaCpFaqCq8AZStVc6Z6rfURqGsouhthuEFtXK74dRZoD9KWB4RC17GWCSZV",
  "key9": "4npxTqXFKZXxnY5kDC5E5EEzUWPLdaWMTKPEBmZj1J1E9fRxBtPG7JJ6nNPGaWua3FiLTnhHubqDdNTVxt27z6sQ",
  "key10": "ryVTCm2zgtLw6ayeiWM9QH9r9vBSogyHmFt9obGEkACE1XNuTrWi9ijR4KHWtCtL4y6TgYyHS6Y1yQFghjURmAj",
  "key11": "4y7BwrC5yTZ2y2vyrbJaogTsjr9zUuRpHYFg9Sk8JntMmA4RMrnNWECfmQgPQ74hdmhXA1BbPhD1WdfWN8GQYW9Y",
  "key12": "hP96PP6snfEiFBnK9hrvJu1QdTSufns3jghV7iy6nbkUgvxnSEL22fCnGwioJyh1tzFNX1mveKW5oCgRyU2bkkn",
  "key13": "3xCuXGWsGjqfEM2Fr4XgnNE72w65B5XTtjo6XbLoRsW2kNC9sT3eSFDqyMCWqDhczKn64Kq3QnzVzUE997EFDZc",
  "key14": "2t7u5MUrc4rWWUZCwTSdbim9XGu69em3VAWBxZXAv9WNeCX9AMPR86sccuTBufnFfTn1jjMF7ENrmDwsZ6adDEgY",
  "key15": "3FEjwHWJUjrJw2fp4E3F4WFAhreuqfVmNWR2ino6iE7hJ1gdXdRtRdqXwUzuVxxXtDVcwfnTwFphSiPgV85iXfXc",
  "key16": "3gdRC2a7VALHFmStvV4oY1LzvQJvoE4hL2GHqoHKCbAipFRBRjd4U5tNk4ep55ERsdE1mRumGdgvbVf1q8AbT3PX",
  "key17": "2yNqw4FQBgVM4c8RU77XS9q7MgTXwD3p4JmUCPfcbny6zdQW4ABaHBuJAn6yURT9reykKahvA9x4ANMgW5Z3HtkP",
  "key18": "3tU2ey8xa8Fc4r32kSApwmkoWtC3w9gZr925zHUXd2hHqE7yB51W2gASgh1xiQNg3gLKaozNCDNVe17BbbLSk15z",
  "key19": "2ETV8EmhpKzCLMvCNwQkc8nBQEfdH1LYSjuDU1yFQS2xvW3kPh4NogTdVZYgHXAC7132VtJPbaGSzHiCJpeDfGGE",
  "key20": "AbDM1N6qcSJA9icb9rjms8XjPLFcPniQmicJ61bcFP4TopeMBVvGoV7P9xc7WNjuJKfdN9TYiE2aRGYaUctMiVy",
  "key21": "32PEwZFFejz9gWWg1ef3mic2biLU7JTQoHrqzKnrDh7MbqksQtrkTMzSjBartRL3mxUQ3d6PMuWcqYQPeYNYg927",
  "key22": "5ch3H2x2Et231AJo7LcKXi3VJJtsTXz8xFW3JbEyCKGdJPYtPmyJ6WC6QN61btP3xuNV984uMfUR9hGfYMWDeDLb",
  "key23": "2ByDfecjRZsfAFdYnpTMeWNodSX7PacrN4awne3Jy4cZUq2JB4a6dkA1URpQiqZXJ2H3FMXFbxzbE8LR3fZdSdRb",
  "key24": "2uyAuAhGySm2xZ676wvpke5DWTMJji7VsryCNC3p8NAkJqp3D4buMXbLJ2dPx36ModfuqEhSUZ8WeRxMesr8F9X6",
  "key25": "2sw8xW4R9qaqMTjKueZ7AwkamegXjUNPZvabfNtVyyoT8HLponV3Zry7NGK1St5sNneXY3YwMRsfjyN1KxmQeGAW",
  "key26": "TdvvUAhquodV5ZJAYmxbfTee2cf9GQSMVVNbJieSZFKNJjaiDatAfDGPFLctiufqEgCAPJrVigwGz6noMdp4MzQ",
  "key27": "51wfK3MKwtAadSPusA3b7GdrsFtAG4t1rBTtjcQjtU8BvBwcxAUhXJtNvHRDxAksKge5pJATzma9MrDNRwPYGSg8",
  "key28": "5sadKncZkGoQkeCoaqxWfL7jMkJ9E3D79DfRYMtsxGPyGv3SbkN7wGejXc3UJTVjeskwyR2RevPfZDaBpeG72vvk",
  "key29": "5nKZqU4gmfnKtNk2HZH9heNNW6PxJGu4XmSwHojLs2QTsjVdGmELumE7KD7GLXYbT5QWfLFNcrXNBjJCYKwK8JTj",
  "key30": "3Lfo5BigezzeQE9KaiRfnGMXpeGLjMZFrrqHpGZqjk2XMK8xCaADe3zGnaxaVdKkBncmeYPZG8az79DGnVPkt4CL",
  "key31": "nU7GHZwkVyBrLyPrPjiB5QA6w8pMtxeAs9Vx6sWu6UCGny8QqWaEwDmgThe4f7Nc4ogwiGo6CANLVRKw1J4rEz2",
  "key32": "2y2Mh4UvqtPCGQjWGsQtNsD9PcFwXAJXju9qPEf1vMH38jLBj7ZeryD3bmazaXRR7MF1PZAy5z7pN6Ge8ur7Yvrh",
  "key33": "3tqkQHtxMUmsZYvU8hUctvVCM7TzfvT7GkWthjHdrw1AJKgDeF7PxpcRKxx4sjogTHRHVi5UbmTrhFfcHdkQSxha",
  "key34": "2ZQgY1XkvBQ7khJ9DBafu58zSQgqUxxg64dfnzKPXnbb9SxJPmUxrrUgWp3gHGtSHohPrTkJFEUQjsBtyAL6hSiR",
  "key35": "ztiLez8kQCi6WtgQNR7321py1XTi5T2URvXoXgvvqExcZKvb7m4oEcm8W1UukYkMXEwvQhLPWhkt9Hc3SY1gXrW",
  "key36": "c4f2bnvU2wbk5kBgzqB6bFHeCY4norS4aAWTRMKwJgmBzXsbXLoQ8ougkCb7QbMwudaKEd2vgJZS5ThB3DuJQSv",
  "key37": "5kWdu6rwdJUqpPNSKewA69HVUrFDmZWvxf4WGKQvwt3yYKTt9E1PPtXGfYsu2oosxU5GMDCLCKvxnLySHxYeeXg7"
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
