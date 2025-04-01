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
    "4VG61tTgYzoAANfc1By8Lc4DnVPkxheuDMUVkqeGixGvtS5xgPjNug9xJ9QwfhQfAT7bMcqoFat9nQZsLBJywQfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQkW9s7bTSqQiaAXhQiePLkLyW7SH3z7RetKEgWxnTn4nvJszy52TKcYN3yvW2LR4svbpWAcrarumTDwdd4d5RD",
  "key1": "4r3pMgiCQiCZVBVREm7LJWrATr3hEug9fApGd9CZtJQA4m2jvNk6uP8ZWLjvBnzPXotbanhrQga3nThcoy2k8r4p",
  "key2": "3w9TwrmaFTEKV4WApBFVQEDhQ9sy3V7X97fHWJtDtPUhGPvyCTNfiKjWjx7GAtPmBq5Z8nnWsZg6tXBP51C7GNZH",
  "key3": "4ruSZyNWvdokFdG6hvPfDnGk2ki57YtxgejEe3uE4YdeM7PCcX2pudZMyWzMesLfW6L5aLNYFMdJHWE59mH6qRQB",
  "key4": "eM3LvqcCMxsW4fvorLLyYfEzNyfviuhwzrCdPyQ5EnNkDs75ThVun6qKv9mDxQhrN4mfLTuNH1bMJJS6X4dXCkk",
  "key5": "3cv7MM4k2wZe6ycruNDNKgvUaAka21gSMt7hSVicCNsQb4RBVddsgiKU3KcsgAX3oT1yFZHf4zF9ufoG1EUnvxYC",
  "key6": "24aNknDeasji6wdSfZkzFDk9yHNJPdpeFyiqiz1f1B59RNcwT1KTyEN2brR5otCGkBrYtKeQkQBYjrNLphan14Z2",
  "key7": "2Bp5oij76JStMVWAZHNddvKvjCkyoicCREvaBKZrjKBN2Bx1MwAdPzMGkmBAvotQqZF1rJ11AXhYaqVF2KF4Z3jU",
  "key8": "5XA25mG8RD4yC3nRMo5eEu64Uqjf1jTmvv4WCoTjPVLKbnNSpPVt4bWPH6BUMA82yZbmMUF934jrEa5LGgb9NZaN",
  "key9": "kQBCk2rLhadHK8LBNV2zxcrMFkuF6ZyNETn1f16w95xscQ1B2fNfs3KbCM4kF3YSVP5m5vkL7xff3vkWn98q4YF",
  "key10": "2UDFA6abdCbtFuELWV4szPpsC1cKLq2yLaVw2ZXgvTvKnqSicHfVtPnTnH2jVHyisPj2ArQwN5J6J8d5nR2ANF2T",
  "key11": "2LKQ4rRYAY6XEXGFxdgNkemVc8FUvPHGrykigs6V1CtHKu5pY6Bzcd4d2MQ9fkzH6kYeP9jvKippAvDYWWnQyRFo",
  "key12": "wDH6MWKSSVUhyrNsgwyfbqtHSPHYr57oNss9DazrcnFzGuaJ1wG1c2uNEYMD7qJGeMr5yMxT2wnW97ycCTp1svo",
  "key13": "4pM34tBFLQm4wbMjXWLYMbFWFhYRbmJaTauvWY1SnEUy83qDAy3fTtStC6mmgApnY2rkGT8nFeTuqdLCUYq14oNv",
  "key14": "FUx9zYg91QkaXVFDHrETh6Uk7FkwGLCFm7QqaNX8ja4Js6Ziq1LKDMtDqrBgyzktj3hviphGUxN3Dy8Agah8S4E",
  "key15": "SoTaGXBBkkG2nZ6BkStohKDXxAvJrDQxu3XeAnftzyuxCRfw6yKaG37x6aP8RBYBiSbDWoH6gejRffN26obbWp2",
  "key16": "5RYPXm2jUUij34GPBSGXZczpz8b3PLgZfTLwm3M7yrtrCjfb81CrVazfxSspFTBJ8pJPgrcREjoszBDLDTWxiw4B",
  "key17": "5AFZipqAYMYFjT2CfFwswFfgv59eFnoGqQTWGB6e9hUnnsTLqHRpvn9cdWHhapRU7EpLzFFo2JVgYgtmBP7jPvpF",
  "key18": "htL7M4y5zQNGVgzYtXmVMLoPDJviqe76cGsqiXTH7dKMjKvtravtY8kpS5VXwxNd5Uqx7J7iwMrGSGBhzbzn788",
  "key19": "2hZmkqP3zpa7JGypTKppUfV8ztNAuNrzbM4c6uzFjin7p2NNKeVQutKPL4tBRV9jPjm8MQnrvj6iGMkqkL7rizHD",
  "key20": "5LkPELS8Smr6unqn8wmVanZN1EJZPcUajemVR67PTsRHjznNg3kUVtvnHrmg5ArnWVMNzCSgqZqKKyqFfU8n9YDw",
  "key21": "1X9DSYkVVxd78Ex2VMYK4amkzrbLwRmGdoyLJDKJhrq4D5ry1XUVNLTvkwmGKLzAwcdVZeCWJKZ2LZxk1afYqeJ",
  "key22": "2cYhMkQx3bvcM6S2TMNr9yiqy6KduS1486U3wrjgiFkzuU6gXp2Kg8Q6x9dw898QTo2L3ReNGi1gxu7x2SfXUxdG",
  "key23": "4iaRXkjcoCCHz8ZEmTYLFKE4veCrk5XHCo6DNrnAknMyMhSStZNLcRhAFcxJZ5E6DiNMMniUKkb1rQGQLPhfrkdZ",
  "key24": "25hnu1GunC73CwjFsRt7DwTRuDhjdoUwXzsvVoXqVifXZXsqFQ8adCdJ4gMcwBm5MvSbct1YWnmtgcaqmnGNEdMH",
  "key25": "4ntZ3SLVwDvjXckRwnfAzcuuHpDyB4KYFWxVdnpT2C5mjWkfhcpxfg25b19SaFUAWe78gk8C65Q8Zjq1FUFQDnJr",
  "key26": "5yJ8B9dPFr4x6d9fYnE1Wwa6E5GYyUu6HtAaZXqe3QW3TqotuD41eP788dctDyh46j6aQWHbeGoEAE5fWCeifANi",
  "key27": "5WxNGrkyPfxFDZNCN3m8Lt2egiRhwjMycye13K1BLgiXbiFHMq9fqUuWkUot8RtPQSCAWwb9TcTFGjLu9Lhpdyft",
  "key28": "45LDpWrCnnCv6brM55Cn1fS7cCfbjWFd7AEmVkggHvhAsYLQPtREx8qYYX9eq9ULfEXvgpPJ4XoANyq4GGX1GFjo",
  "key29": "4KTBq7Hy62ZQBdwmUR667uEM2xNST3TCZTgHSdRG656aFAuQVQfnAVXTUEXunwbuFxeJB6rcP2r2dzV1we185W8v",
  "key30": "5EBCdoWp8n7VctjhvnK8WFHL4d4gRqKRpHBP1T6DEyfNpKUV9KG4G6CujAxhzThWd8q2Z8kriP9egY5LyXsBg6Nt"
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
