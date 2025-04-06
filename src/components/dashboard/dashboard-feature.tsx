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
    "4yjs34GRQtFpktY9gRB939mdNsZ9eDivk8RvW7o8rCQFePZqZnVJpb4YgS7Pq3bW5PpYfbTkykuXeuUWYxkWtiJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzAEo68N6DWxU5k3dVKFYfWhVcrC14yJUMwSygVddHXwaTA4MmPqNrxqB68pcZD9qT9s8bwWP8QcPaetvUJsPEv",
  "key1": "35s7eEGuYfv8A3fcYGaazGEBx4a4spkbntrUPpuLKNsGGPGG9QuaDBD9Rv3GM5iFpqSQEE81sQFaz7zbeDXRY8p3",
  "key2": "XKbMKb7zMs8i9vnbEe9twe4mpnZhMyq1yLmNCha4Qpj4Aae7G58drrCmHK8mRCFCxhLYXb54dKLbFkveyL4T8N7",
  "key3": "62eWWihwREsNtWkM7dFk2dsA8dxaVKccsvDSGvgSpTABG1mo4VVRbqokQ4rfwDhqmn5HLyvBsNHnTExJk8NdoUnJ",
  "key4": "3ckhUNoBsDCAZ4RATU6wq8KRvHygnqtaxMo8Ha86iBB2rcaqoLVd1rckm8XmkQJaSZMwnCF2HjFKgxjoENWJRrJq",
  "key5": "3CoSmKs6bttzuRMQhcMYoVCZcy4cyhD31MogqjqakuVQmeFZB4wi4LKtL1aAhbWtY6qdknwdrawaiXTsspTvHz29",
  "key6": "4F7T1vxfk2gN6CjBCk6qLRCQunQs5PYeABHvDHuCEc47B3RTCyCJRz3eJ6UyDmRTFwtRnqZMrAkYNBFezY1FBJDS",
  "key7": "46WKKjwqTi8gpvx8HME8Ck5D1dgGkF5URNmdPer8CJhiQbn6rne7DKnvCDDHuuEemTXnZ8Zs4DuZujMCjk1VJ7Fq",
  "key8": "wXd53Rov6YuaADRDSHHeAnYXR5hqDvDD3pbQPt5SW9hoDVrDxGio7EFwTWGnohKUZATNeaTqNe8L2Ed52zNEGVQ",
  "key9": "4r4a4NBRJHT9Bd4gYmVgVE41D4f3uBTRB3DFivyuhU57TCp7VgoiYkuSJFSdpDAgvi56En6bWBURNiURBsNAj3AU",
  "key10": "128LgwVMGhUHr15tqhDD2fiXqyZvDdWJemHZ2m6GFfy2DUFyKfmmusS7oNYtBqwASnATi446DT3n5Bqh4nf2ofCi",
  "key11": "5RwVRaKg29nXFBe1ZguJ1x35sG4M8CXRV8VVUNNi7qVWGQNA8XbK16qkjyS3oLAHXtAibyCt6gZXV1x7c5pRefyP",
  "key12": "2hLSDw1346Dcy2VBFULyNhYcbwmxBYXNpXzSfJoQzGyyE6SVTpF1Q53D9YZ8ZMe8c3S9ZF3d7cW8dmzXeMAmHQhV",
  "key13": "242Et6BkQFMc7KzdU1h4iHsqgBr54mXBEv5mcRDJjbrmRquPxLxzDHiCVhCkpD8K9rk7CUdg1BhuxXmFWNeUG1v8",
  "key14": "onYMgxzZjJmJw9cMddg5h6m94nMGDkYBQTCSukjNyJXssVi5xcrxKjBqcpY3LvLb1amfPC2PsdGofTwzTwjZQGt",
  "key15": "63mXANYQPxiGnfGJxQikQYtywMZZ8YFD1k1ET7RPtUE7fK9N2njvshehZe3bEi2w2Up3seCACYsgx5jLsCbgUGGg",
  "key16": "5M4CR7TGwwkgLQcYhA5q3W8BiL2V5FWSfSEqjzjKrJYHkXaTEVmdUK1cnZFDWYx6Vn6mVuNydKSyTnC9R63ZKcwZ",
  "key17": "oeBLQ5azMUUvN9thydQ8Da5Qr4QmS77SjXVrMFw5apV2qB3iQPUM5Px2D5ZfvdjNYJjBPa8egs5G7hijSL2mg33",
  "key18": "3WynQUjPTFF3E5xXt9yrtJFUuMEKWMRCrZgR7rd8623vN7KqqsjvLLicLWyB3vSCkyWWgPAjhRAK4neipj9j7wjK",
  "key19": "4YLKfHmxwC8FfcF2kBC9XEv9fSxHfnjisJP33ZSvMZpDEMdZjULYgJgb15jkWdePA2ZyK8xtFfojZ7NCLBHq1pxu",
  "key20": "5rVcj9NHgUNuF3fNQbQvCtMrXxxgKMoU6DSLvqmyNLKNJk8Q5RD4B7V2y753rt6tFT1NqDpVUj2m5QAhscyiHfmQ",
  "key21": "4M2TcyzeafkdnQMsCn5WGcC4geidMsn3P2uNvQ3bgSPaYBts6wvgT6DDS7D1oQnz1d128NuKWnh6kaFFtNdrUdR8",
  "key22": "4EzBEwFrzmUJ8fwv6Uj8Uc938gQQ4pouaG2eYd9hpcCge7RF2AgzP97Ey17eFxmebgki7AeAgh3AfQP3boaQL75G",
  "key23": "2bYnmBUiGHphU2BwyGLRGR4Ve9temSj27gxqzWYzAD17sTY5oaABpvD53aty4oK9FCPz7M5ziYCyjXaFhKgwb7VL",
  "key24": "3yLTJWyWm2mxWKeDR238m5qqTHRTKG1mjY4zdSZs4zZuUCRda6t9zTWHR4Mr1dDYom1iV3JNj6pgJi1XqrxZDtWU",
  "key25": "Kmyqw9uYfPALCbk4uMsS7FE7Zsk7wvbbnVxXZUsHsWy8j9d8oSjSR2xF4NuYYnU2MUBmxqJKKt5pa395F6CrzrK",
  "key26": "3YDhfmGfgTqiR882beKqybecS8QEM9Pq3uVr1VWhXuLDR4Ymsg92VrUM8BLr4qCYpiptatmLYKskuXqDNzBa8MVo",
  "key27": "5GKD9HfFhvNHDm8J4sgV9kxHHcW4NaLd1ZGucsUpdohEcGo4R5SG2DKpYjk6VCtVTMqDf1WZPvfesHiRu65pztUF",
  "key28": "4aKVyCxNA6uQa7uQ6kKQLpesfdBcjePseowB2B7ExTKKuNsJwKNsBG2dxwVXpSoLJxD6MVEfVhXfGePoeyuk57Pi",
  "key29": "3SwZfpfdyjz4sPr53s5A43QmV218duHEVv5e3ffDxKqgYs3uxAzxyNQ545h3sZm8zFSZkCDQejnWNCUJ1RFg7HtE",
  "key30": "AsBC34ZQCi82r25pkQ8P2MhDbdeXNZLR54oHUyy6bXTNtVP2daArNSXs4Ed6XqeoaywF8t2eYfWhiFMhV5e3tYz",
  "key31": "2UhTmV8tv5oAocvgfaJxjHfKStFP2SonZSDUTxJ8QArwh3hGWEY11VWsFPADmnuwfEg4AWvmFdAnwF1vLHAH2o7z",
  "key32": "SfvexHyXuwm4gq6tBMLGtZ9YkaQEJSXH4CA8Xb8ZGBvC7nt9XzvnvM5Npgh6MRWxeg1NFcxLoLfykkPPwxEzh3A",
  "key33": "262hsF8eqCNh2dGT7BojamoWp1gVE5o9DDWDQuf2HfuPDaXoCQ5QCaB9V1NMnrMJQSmwxh1LiCpTTHDW9BRsp5oa",
  "key34": "xfNWRN6Wd3MX1GL8kTJVSLrwiUVy1W1YGjjpvx4LAoYmk6P8rUBCLB2CMMptQxBsBP3mpdqAJMJF7JEj7NXyNUj"
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
