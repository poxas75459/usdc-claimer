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
    "3ZHe8svxzRi9gxctbKGX3scGFXwQGufd8BSshH21LpXCTq4YnXchR6LHbirQah6ykbqwykXEYyMg6TcjwnBGH3z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YnNxEVeYk4sVMwthqoyZ1LiVVxowm8sRRZQ5d6yoKxS1czbk76pEWYngATYrjMHQu8WKZoH4Xs3r47oQUP9bJQ",
  "key1": "5FPmig4xKD9iSMPGypEh9ifxBE3pJk5hWhWwJPU8UbSvTR3ZKy87JV1GJL2S8pxifxRmgt4bLWDA3By54XqX6Kuz",
  "key2": "kwZ5gmJDdLfbLhnaNDvjoG8JBMFLjEX1GTBDUfWKK6jxSu7YDY4cadgA37xyopUboJoELyaRWotYXQLcWuKRgqa",
  "key3": "3wRXu11YrBBtFv5rBBEKAaYUikvwNhXnPYdEwTCRzhDehrPKS1z2EDKkHNXsf4tL2mNToF4FXDuGcgwkG6NrTijH",
  "key4": "57yVrMUFYLaauqAH1YMvphFRghivJwHQvPTxcfrtjfQepPZwfvViBXWk2uLQGrFuAYKjxZw8fukYGAexocVSfKSA",
  "key5": "NbMAqExWKcVea7w8DVpR89yet93KvvoQMRKSrwWkJASzUHTLmrgjY6AJCMpJQ3WN3ND6PEq4CQSSuWupcJfZSMF",
  "key6": "54XSixZWuddnoPJZyFMZjgNesUBtRnojtujaGkX4b5HV2iAGFEHYT5BdCPLR3DsB55cDov54fBLiqEie6LW8CV8r",
  "key7": "51qRPcXAU6eRuC742ek4FW8Akmp7cietufrs89h8Na9ySW5mmGDmbT1Fdz3E36pwyS29UhwFqaVZuH9qJzh92mbS",
  "key8": "2d5jTEnE9DNQGiZAsdjWbJBxRxVmULHMa9EseK1jNDpgwX4MGt2mGUcRX9N3cjoafBu5GgP74q9qhMdWBjjoe3SY",
  "key9": "3UPqXWweEZMMaJjnowcd7gPKsgnRRrXDTLJVs9zZRMQBteNpmJBNss87VYf6hRHiKJhoAP2bj6U5d7Drs9BDe1Kd",
  "key10": "1ZboBKqe7iX5bnKBpDaVnYfpDcXt8CHrAQEzKaoMLGQShmoBE273jY6UGiojJSWMtQqhd1C8qXjbUqo3wRh9uxT",
  "key11": "3RxgYbU7JuZHSznfonNYsoxqUMTa4dMhLd9V6EgGJt5P5xN63ek5iphoDuWaxL2CMTJzJxML8c3kgkxkFeahAwAu",
  "key12": "4E57by5ejvZzp9NqPyy4XYEWgV6ngFgrMJVibbCJS3zUARCr8ac627QyXPRxQGDC5Eufgdict8gW8Z8jxP7TCQZM",
  "key13": "5qRmQchE2rH3qHfjEnEjLKDEnHtywC3fTDMpPrAwfFazGrfS6kwEZicyb9PjZFwcRt8eBsLqorYsr8Si7d8uuhZA",
  "key14": "4R5WsaatgbcLuisJF1fGMhdChVHLAqyXrL4NPjEcDF5qx9Xinx6caUsd2XJZYUNZvNm33LBFWtYq7LTxQfYesuVS",
  "key15": "3pQG7ir4npwwXpqkt2DHpqsdDnr4tABYaaf8Gjx4NWaweGbinNNipuuhKBwtgug1uq6m1tJw9rhMPusWA7p1ZBxS",
  "key16": "J3YcdMWsx4bjGfKsceiaqg61MZE8kRBqZekDxcVj2EXbCaLgsBowTnR9TvTaJVC6AUASqPQcHn7hSaag6NmHGpg",
  "key17": "37CLbRepb5FRoWTfiMdFJpDpKbkvFqTGb5nzp97JuqdWvPHUhQgCuqv4iPQy4C8zsCxD1z6RWKt85xnM9z6wS2UB",
  "key18": "24kKpDs4UD28rnqK6nPSsq1SzLEeU6uBw9oG9rGNcHCzvvH7SeCH4hk8b7uXGyw9ksjBABPodEikMjSqK8vfdME9",
  "key19": "4FFiPuceKqU8tVvsMVD8ar11gvq5HsTW11VKSw1kRQ1AkKNh1Bn9fpXvpWt5AVNmUxwtFN5Cq41XSj2XyChWXzr8",
  "key20": "3tfVpYxckzQuc4avFrfeDWVCVQDCGp2hXK5LoFUqMhCSmnQPCNHcFGBMkxkn649mp7zRoyTcWunxeXbas4NL8dZH",
  "key21": "24p5SEN5WtdPtnmbugB4SD9QK2SBeMhp4yAQSjF8cNciX6AJs4EWRDLzrfWsZU4nhP4mCMurJAitUFFGRgeegp9w",
  "key22": "2CxJTX46J63QTQgcKZou1CtFrCuqW1JAjoBpmYAsxVy8VXm39PNACg96p9maJempjCEP7yGWf3PNpvGkJicqou4J",
  "key23": "3SsA8Tm55RMyaXnGL2gB8b3C7CEZMvNhtW7Ru2ejWJA4AyWfLNJWcshHGVDmRQoc1LD32fTwJBLvqYhVAPsagXZL",
  "key24": "J6ryc2K8L2YEUiCCrGPHuWTHC6wUM16B6SbtKnFvnbxL3ivhUxCWF5APHScL8HW82Aui6dNSSDZRWVQKBSWwZ2q",
  "key25": "2bvo3ih63kP5yeyaEb95DddiLwwpfsbTUwLLk6Z4jiSqfExsqaGqhFmMGmus3P4zZgB3gAB7t33erpobqe9hGafj",
  "key26": "3Mo9rk22gTPCqzirvND1uT85DmAik8jzgFTergjMto8v2SBtT68oKjMLn68s3S3iCf4wu6hyqd5vbPxZQry8oSSf",
  "key27": "5kuMBMQz2jiA69GgNDYZsydATnHMs72McFQWpfBkGdZ4uMqNYAprfvXEzPsZmSwc3TeK3Z1ZewQTxwwKq3BABMS8",
  "key28": "5F98MFGc1KgAdhYZjEMEx1xbbqjJodwTtU3VAQ2oomQjWZHjU1x8zxntHaxDjQ8pPJyco7PsXNYdA3FLk6sLLPTb",
  "key29": "WYgTH7fpBsSGHGTF6iosHhim2DzV7xaeYW1PAiQxab5HJw8qDgrN7JAzfMewBCxLjNRnMqmVa4pS5B1kFKczcLT",
  "key30": "4wAdiw8TJZTpvYZK1SBTq8ekB1V7zjrNrtfRKe6B739BW28bXvWYLF24cTwszQ75HdMQjwu8azLTzaKA3NbR7zk",
  "key31": "GwCAvgXN18NKWHhv9w2u3FwwvSQVo1DDGgrDtjGrQoukvJpxeB9CQCmAGbSGW5e9jjgz48WaE8Ti6QBG8oVYYr2"
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
