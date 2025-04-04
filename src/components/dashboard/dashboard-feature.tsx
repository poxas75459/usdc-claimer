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
    "21FyKcUAgxJWzVtVfRQLPg3D4Ys2mFCQJn5kagyBC4B3vihC7GbsM8cksqJbZ2C1wf6M2qXjB7kXwSUt8seA9erT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1MG1c6RAGJFW518ddRShJRtRvaLF8swGdRYFGwmkHqMr6kH2YEqyXfbiGypEb1RDoQz4wE9EoJhwyVHoD3xMSZ",
  "key1": "3exiY8T1aZHzsRQJSPMW1D6bQAxTViF4xdXKzr1NRrS835v4sBDD7CqR4Fiq4rcwnh6QNs8u7n3yjAz8vPyqFG6j",
  "key2": "3VZsYGgfFLHRf7ToPgfiRPLuugVLMfMDoXGwLwptPeZUpFYQZwBGVfUseKDLqhAxE6GP1zpQt5vWVkiBiVQkWPzH",
  "key3": "3dxLfYc6oau8QWKPJeb5cRnxfferAKhSKm6gZbNFBvKth8AG4fmGYmRSZWxtAazgMHVvi9U8RDsH1uPCG57DE9Hk",
  "key4": "19SXS3pUQifaKvo8mQvtPuB89wD4xWDUC8dSn4VCGzsLVENwi8CriWnbMh7jRLCQZdoYvpa2XR1ih7o5jqwMZvA",
  "key5": "5wXpqJUP6AQ1ume7iKnzWdkFeawQsAUeL5jBiUdg3w5NsXFxcAJu15RGh6TxZqkWRawpabr99QpPorkFDtyRmeWN",
  "key6": "5QUui6mmUZeWPeVKqPSziWvTzmafN9HKfPD9qGfyHDzowm8HK8WSRTUYYqReC687sZqJcBRn1c6Ff8ruBdWwLBDp",
  "key7": "3SUTZB1vVihCyGKcrPz5zKTcReiPiKMP2sJiEWxczvmhmVzpZbwiaFmKgb4RvS9AvmWEeEuYXACumvwqTLFodrLk",
  "key8": "5EwnW5k9Qd3MWs9CBuduoiPvcQFvTjTrHUTVXeozeX7XipWNrtyy6JwS2G8SKGp3GWqo7W62vkm4WidaYoKfFJsS",
  "key9": "3tpMXUZVgFQozVty4KiYmhz5z7EPSrsnoNKuuLkGBH5547zWTuMoYJfHYPv6dN5TV4oxc5gpRfp6PFEDq4J6uWb",
  "key10": "3s3rdjNRKuFH4dpxmABcieiuF6njNnEpxENod6v15bxdk7ZRAw8hYUX3moQBjXAuSvsyXJhUD6fLSgamqmqBVGQp",
  "key11": "5PWHssLCQE7T5KWHyDcveFavYAtnwvghEjukZ2RbRXi4qpbNNCt83ienkJgwbs743ckbv5ah2nzVwc4Vu18L96wV",
  "key12": "4DHHqs9zLiqFacibzKmVWPkKRpgUCsYFz5tw9wju2nrfE4kHVgy7wsiz2PyPhCQHEu5RLESWur3xb8JAQQ6iCxCQ",
  "key13": "5VUqgZ28hLBdprtPvZrW8TirdZKf6CA2BTiDYy6zfHJCCKVepRpHM8F7nHN69qeDqsv4rFkiaJUF3Ydki2tiaJp",
  "key14": "5xZfqA2dVj2awCvEtdLRxe5zZZVFbxQdTUbS1o92iNZQWasQNAFsH49KtZxzthdU7jGTVDuvAFgxxentGbpNMj7c",
  "key15": "3sPd1PfuTCEJPh8dmgstDVvSH7tcvhWRowPqo1QYkotjVDQTTpsmsSTwEiy6rSSUGZi1YuqUHjrL7Lnmk7umpY94",
  "key16": "2DR69iq2BsRvhbFYJi8SLBBvzwRBE6uMv1zYQrziFWWCibTVo1U9Awz41ATxmn9VxnZR8Lb8TbrV47giTRM3Xb99",
  "key17": "N6HMSSHMmuZMPpHs3GCNbNeaewFkXbS5zkgEEUFKfiKrAAaChgHSDDeUYh2xGP685gn2UoY664wbhUgWN5fTwUV",
  "key18": "4HbfnVhq1GMRa2Jrz5MfTREuX87hzT3t8y2cnYrs2Zrf416WogCCMuHMgVL44kPCA4A33WZ7zhgukkA7Cv3HubRj",
  "key19": "4wWC99LP6D59L5saNCQbsjfZSypyLVcsE4UPB7tvigvynFpB2WsrZHVkgu32emW3rnAZ43jWa3AmcNqPPCfvJpnt",
  "key20": "t56Snm5XzxeDeSuAiNdPb47rH37z9oFs4hsR7mditY5aTvPL9B9PJm2CTWYCsK1SZ5n33aRHtGqhSZjGBRVj2wS",
  "key21": "2mgdLwo3tNzNH1m8uyWBStFi2JuN4uaaSWB37jsvULTTh8vtkfLpk2PXWSgwNVgGRHoCDADHH2o8bfgnTWwmFeUx",
  "key22": "dqpFKkg8VdTLkd37kKrrSrqAWxacJcAJ9sFa9ASVdogA5Dom7uCuMQo6PbJ2qs8AkPm1hvBTAqnrdvmckGJxsBH",
  "key23": "22kYF1ch6u4Q4hbGRN98ouRBqgCVXjAqdr8rg4r4x92Er9XqHnwhsp8yVd2Zm4s5VabS2VuubTF3W9ZTiC7YtW2c",
  "key24": "SL134MxykJ2fCJ84HjQu3kzW564LgS7JQRgqNKS25Yi8VEVuJWcziuAyoswf4QBA1x39dXEvANEHBr27JCjZzwi",
  "key25": "5dFSYvoMroxpb2iLX1zup3bEJFP5ujTYcCnHiwHsTpH1Lo9UGm95zCiCoZieVw9K5yEhi188gq5v64MKdukkqqW7",
  "key26": "3RYB1mnwWAtur9XnPRQz4XPd4PUXVdZcHMEDhiJQyfXzPvMa59YPjbyXaLR2xnLNx97aVq5ffSJXBiPrwErZD26Z"
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
