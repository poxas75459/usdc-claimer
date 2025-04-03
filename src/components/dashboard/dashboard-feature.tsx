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
    "zFrs2WatjHjFxv6uUAfsaH7b75ab2DphTTVRHBCPVXiCm6qxcS4vE5Bq4XFXW3XKMS2FiwojgYgJMVBup4UESBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gWfD1vrkCUWJn24Gta7MbhpGSfzF77Rxy63JUQxJExotnmjHEJc9mBevcBUuGVf2QmFWGxhMryx16z61AJyeXfy",
  "key1": "3No52mMZ9wm9XAgK1WvmMA5Ah7RXRt5v8SDsSp4tPz8kzBf7uwtLucQg7ei9yVm25qumbSZixjqzHVfPr5jM2KAr",
  "key2": "3Q3AUCjmvrgicHYAyrfigYQzi2gLFHnKAYCQnrV5vMxGFc2GEag5rCwVfmfEwpo7m4KdNGgndjhmVjUZNdW7msH1",
  "key3": "7R76Z5ZjwgE2cWN7auBsSvqRVRkkLdvaiPmv2gtYhoizgAJPmRHM6H9ecvwU55MbyN11A5tPrQfuWTf4vsnKUMm",
  "key4": "4Lc4JubSdhbqFmukBY4wgJQHYm7syJ3ve8m2i6aQDcW1CfrnAYTerHkETF6eth76ciXmwVMxJyveLvp3r63TpF72",
  "key5": "UdMtpJsAsX8FH35GXn19HkXTvn6muKKBNgRSC1PBaSPPs3pyqC8shWNSZS2t2o7iiRmDFhXZzcG3kLjchi92Mhv",
  "key6": "5dziEnZkeVKeQ5i4CZFiKVaz4zX3eudPzgBYirCi1PodyvGd3nzenxmaG2wh8sNTpXQZotueRDFcwXF4eUC8D8Fs",
  "key7": "4CkkbWkcby3iDCje4LtDFAYXG7SJdaAcbssVxEzgvjrLyr4isJVvF7CjVjZTxYDfbhVRvBhe2B4xVKBZoWrjAxEM",
  "key8": "4Aip3uXSYzoaHwshCkJrnLqM4TX42kWksFZWkdGZSmqiALtZ7QcHKhKdN2evXetDywFSgwL85QMVbfP1U5Cv1skh",
  "key9": "3Xe88kAh1fWNdA6CqQr9q8zPmRptWDn3B2xDdeWcBpZ6phmRX1aMiQ4WiHNsHUYUNFKq7KrtCZZwnvwNw6xpGHZA",
  "key10": "5TbjLaJ6PfdBVtAuDeEzYo7rW3SN4VrFUegTs49fjGmgYn9D2mmzoZJMuMo3toax5bZZLhVKdepsHbXT6Fh2JZUi",
  "key11": "5PjZh1EsEVsJTYurFzPZbSeNPem58pRFxNZp5ckwmuCU3bWFjuBXvSrd3KgmvWWaooASQzcNkVgbZr7sEeWWH4ZG",
  "key12": "4gya1jfNRVSz2tiPGpKMNp52WZp7KFYdcJBfV38gpemfECNan8WMQVr7rwRv2716T3Sqyemkp7j3Awv1yEvE6aQ2",
  "key13": "33MDJPeYmdeuuMnyKXwbWLCHN5y7XgHg63jXnTneQTaeSwKDSWduBnyPXXn6AbaPhozw5MZ3hKcHqC3GZd8i2Ry7",
  "key14": "2uN6jketzBR8e6zqLYJos1TQKs7RNrw5TfJZLu8uJqkWHxp1unfKFcrfy7K6HYK4Ca558TwK1dWHMYtVEFDUdZum",
  "key15": "24CdkH9yTXqDWobJQhkXTs1ag3Zq6qwNMMvyGac3rP9sDh48fDKDas1nTVXoWvfCiKimCArtHoqe8Q8yYkZ1BQK1",
  "key16": "BvLQmX2roWd8wVyzXATi4w6gfvVM6ZP7NR1UHVCkkvPAsKrmPkZ4AEqCqJTJDUi7F6uxQEbbB7e2hZYUFPb8k4v",
  "key17": "RTJye6YiHaJc4eg6sQ6G2EDnMv37q5hC8Xjaa2sRcqUW5sSPEs2txq2WVS89EAUGHg4dJT1XnEW9oGs7P1vpgMR",
  "key18": "3Fk8U3WY3P8cJ1zRdXy8v7uZbBMiajVo56fqNWK8Uiw8DHy2vUB7YJwyUfPXzGRfGL6kcoDE3FQvQD6FRAyeZde",
  "key19": "tZv6shwiWb75maa5FreVKjt4UwW3dp88vZ9sHFrzpGmWQipWYB2kc3i1LRy5yYpoTgP8fcoLhkCG5ep17Zggvic",
  "key20": "2w3ayQSngLJUu3RaBhVoLGXuFZ5zVECL6x2D4okXRAWEJgiA9k1rpfvBK4TbMErZ4vCPFeS1EXBZC5jSjWydqN4i",
  "key21": "5wiv8ZUCWXmGmKnQmwZJV9VM7bJFv2d4mMNWK69cZrdM18op3o5amexBKEhxGGS8Noa4i5sVXMeApro3cxUh4W7N",
  "key22": "A8BPLMUZ56ssf2JVQjFa39zkya6w6HXwUoePazmL1qbV5YWKqgDKshjFJuYHG94P6QMzcLRC7xmnQyANzbnr9m4",
  "key23": "LPVm16ErqGsN4tNLU6QXk7PR3SYAja6191K5msaWkyBBBgnpnwnc3qP823Kxo7uQdLg18RgnjyxgRw6AiwAsbg5",
  "key24": "3zkQXPMst45vC2NS6Gf2bihcFSLzqBTUSzz1w2gEBeQigcbsXhB96f72ygUeRwDEKSYV68VyRQJi7QLAQrTpEfcF",
  "key25": "3FGxGjzkPsCfqUwVbNDR5epzgCXBP2pAsgeXVuGRgUb2h9DSuRXLKW8Usrp1NoJzg1rys1PyoBFiKMj846aYvvGD"
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
