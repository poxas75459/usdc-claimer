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
    "3BresE3ertdAcuS2wZM5gmDkvcQdMeUpPBnyVxQfRpUwedfPicoQsSCMB7y2pThsyA2Hd5M2pzC4tpfn6yWUC5Aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nAT1NJ3Sh5fTH765aaBfKbtNHEfX854Ue416fhffEDb22ycXbPAVkjfBPrbnbLVCjG2fUfGKrW4RmS4Mj2k8C5e",
  "key1": "45UFghigpwWFaf3FZm7YwsR9SahAyxEuphWd6cUqFmDn1eGrpvLsx77DcfXmoPtX9j2eMirvYPEgwS1wD397E5ZD",
  "key2": "4ePvk2pD14uvKrmuJ8GzJrVErKWxEr86zP5YST1xhuNNeq3LNX53Gx5EyJi61TaBgrT6ZaeaiXfppu7fudvEAzdz",
  "key3": "4jcTUcJXAEnAmCXXz3AcBA1eNg2FdX9xVHqsKBeWZ4fe1iFKj6SXmcfbE9z47uQCx9gLAp4KtYxZEDM5Ssh5CKYx",
  "key4": "2mLsEiKVD37uZH1BpUZ2LU1yexA1uGbAitnkqam2oWSugPWx4Cnw3ubkHXPFQdgoB3HLseot8FHpB7j22PRvwoED",
  "key5": "23dTjmpPLcbTQFHMaMyZeCh4zRYV3g1tMG58UYz5ifNG76S5ac3qJid2yWP3ck1VZv5H6nTdJDqFm48XWFFqrmdx",
  "key6": "3zQYhn11uKXCNgzTFkszszVPvd3L5r7BwEpFJD4f8Rvh9cGAHGftMGkQmTxb5QV3whvFniJHRtvLZMTVDdgz7ZYG",
  "key7": "5hMpgyEXpj9LpN7g8Kdv4kPHyPBtT15GauQ257Y4j8etvVb9gZM84SqWgyvNjq7ewQsJZbLkgKQmcVuCsxoeizQw",
  "key8": "vkPgCwf7M8h8SjNepfZz31R7v52mqnwZ5vamxiXgsUEdCEWJSRLJcohiJ7TAtiN7f5oshXcvrnTEQmxfRgSGWZ6",
  "key9": "5arzhiLKmtVhWCCZEoCtJew83JpEpJJwZj5xPqB9wibdBb5tqRmg7ioeDMSph6AzDf8SV9fTLDSXC1zWVgnw5yb6",
  "key10": "4AfkUSSu4QJkZ5ckYDA9nu9APnrVojVbC2sCTumC24T2391dzcFNNA8jnCWEcS2wi5vBvGmXmKvz6YRf1FgnYrT2",
  "key11": "2n9rvHoxm2KYsag34K8AyqySyjYqqMuDEvJKbLjnbt5wG7YPyVZjnYnRaRx92KYCTK7qHrTGX5bYUDuRLGY1JmPc",
  "key12": "29nYKVCntBJR57guEixRga6dyuvKXf72RGZGBFnLCsa3kPbg11Fe1gvHQ7qWyLkvUaEje3nkQB3vkytA8wY3rKpp",
  "key13": "5PbfgPLxjK6suJevxjBYXruWkd9rzUCfFjLa497LhGB17o6gcDPAMhMrJ1qmHR66795xLC97BQicRvavHpU9Kyf4",
  "key14": "e89ZqBAMMVCrXaJnVpWsdPx27jGpqLqjb4XUjamcw5cRiUNwSWDttwWEm6BDGZFEa8zwRB2CduuTfh1WDVFqNB1",
  "key15": "5N9vUCcS13duAk9sGryCDN9rQ1ZGGueg9jVgiQF3rorjWTfa8R2TkgWoFiXshrnTsyKwG9nccUSBe8FYv4XW43vp",
  "key16": "5y1K2HDsgzjxyBhDtnAKyfSWfr7FVP5j8Fn74FcAysttXPTM6mRNB3PuPo6v7MKcATiQXtGkvECj7mqa6a61Lh2p",
  "key17": "vQfWAio844ZJFBYLc5CQWGvAPBNweB3GdYbvDce3pSg52DH6BntGnJAzy3pKbCBeFNWWUWUoFZY8qcKoVggd2ni",
  "key18": "5roWLWzubrBe23u2H1NeaFteWmPRBCgE2ipSM9jkMBf1DhKHY36YxCbUatxM2HnCzbFur6Pyhd6EgxgJbDKNkBTc",
  "key19": "2VyJWFbD4DRsAZMXB1CKtJ7zkSvRTb3aCcEHVzfv8nyWd1RGdkUA38wiHJZSi1CHeBpUxHFpkUeoSgH1Zbgqk2VD",
  "key20": "2iDDoU7RxWe31BqLjgT7uLDe2jcPHCmbxxvFAgVDzSbE9GCCFowHcLBmzm62G1xAN6mW7FPprkWSuzcZ7pTGYh1e",
  "key21": "3n1FTdtgihNq9op8K8GNev4ikhJKHPCyhGxZwo7DtEPb7eFPLvfjcT1KAqH3SEwxYxfBxk6BFhUrZtET8mtq95gq",
  "key22": "4Y335buY7WQLiMG9C9nQQAqyQjqPtmNFX8joLbNg7fvM3LcXGs162CxqethRpBzfWY4kCnCnUDtfRZnd8BdAGD5s",
  "key23": "3YV2qwhtxgMF2RaSBXa1Yc5cZmuUyhkv2QG4KYvfj7s7HukGpc3ibZKQyrghWus9hyVQNs65eRtDDUSVeEStopRc",
  "key24": "2NfqcY66dJppDGLMbeEzFhm85mR3SmkJWxqs4Fx2ZdEMagMzrfZTUhBPJXsdUwrM6BrGjcuCeeE9JBgYk1vpRG9w",
  "key25": "2nN6bBXi5Dq2mA1jwEqhnPGkWvs7doxuZFxbJz9KMVrhDuDQtdXjXewtizeFY7rkUK6wM4wDjbBwsYeaHmcZfRnD",
  "key26": "2fSb25Btrka7asfQbC9m6uhLrC5Vx2QvBQ6DY72ea4SGzDVVVkt4wAyszr9TpYG2PrrSw13eaQom5J2AfXWqziCS",
  "key27": "2J3Hauz8eGZn7hNRjH8jQQjkg4paLuhLJTcYFzSMvkKxA7bVSyKZjxBumY2nm9uNGAjdthPo5q1WrU5XtUcgPKA5",
  "key28": "4HW2TMPaBVcZsTessRDSdMvqaUC3RYhrSjnWWtYQGrVduXvHf8dKZiGTtgrsboP1BzvFkWE4nyiXqt1i1kDx41W9",
  "key29": "59dms6W3XSzh1LqFejCnm8EqogbJpCc8VDSrWW7pvqRypm8YdGt5hMakcKWLXFuUDqm88SekZbi486gVN1dHLYQH",
  "key30": "5VFcmHyAoNDppGHWkX4pJkPpLwuYscqMrcPF2yBZtVtayctAYjXk4PXXTchLtmcxUR9xKyYbPAwaVKu6HpfiPV4h"
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
