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
    "3teQK2VogXkn8CMQDdWurrWkBakwU2XosCV8m1sRudGE5oefwwFWyBKczcKpCVCXCykwAneBLBHYvbvhyUaSd1bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yHdLqFULyixQESX7bLW6uLgRF6bpNvLZHhnKzWt9WFuoQRF1cCcdN35HwYNBxd4pafN3RCeDnCh4tFBSsgMVzoN",
  "key1": "3ocvBKCNZG74V5tVUyi2oPdHy4vGkEzpxMdifofGyuKcLpwAtxs48dwB9fq3eDHN8AHk8DRq2k8A6bX9P2GogDGW",
  "key2": "3KnwGnvS3Qi9HvHAXuFhJPhyDRZiE2nhLhxg132Ji9UMLgdJpSPWdrydvPMpV4g7WkzZDET3vqRJaSktSc171yLH",
  "key3": "5qtLfBLiJFVpg4TrP4LtBzh9ELpQ2qDMztCgekE2qttkBTVDAdomRccbAu3rJiJB8K3ouFr2et1ZwgFFDx2vNohg",
  "key4": "EbKq3CuCVMh1iKdUn6UMtap5WdA2YgJDuSo2AckqDEQt6WN6HKDxVuUd3XdnTRafwiBMw77MjF3y9TTdbu2ZxbV",
  "key5": "tPQNkbTmnKXrhp6LkkPnZdGtL5PheMtSyN71tWxTFbDnt5G3MC4BjqapVt9npDS9yL5Law85795kfaxjq9jVq99",
  "key6": "2C3diY1A9yqmSP8JEyrGKzJeNBtVkEyUQrcjeoV9EkAGvKMP7Lvuy4DSk5jGvkMVU3PbYBVwBnXLvffh6ZGkrA5u",
  "key7": "2GEQHWRkYXAxvg9vk3K4XyeeCfyrsRSJPiH68GjPs5ZwEd6aUSNwpkgnbu1DeGRLEcEM6WAg8PRVs9fLe1uZxQhE",
  "key8": "sXz2BvSGyrShoYB2qqyoxWQTCUgUime4PkaG3jcZMtdU8cEfEC6sKuC7DpxcGmK9GjyKre5haBBap51MonTCcxF",
  "key9": "3yJ31zzXzet8qpDQVfNYrZbSZ6A35Jf1a8QtL4xsmxg7SP7BrZ94awB1QNSX74dFpT594DFfMDMrkQSXGikqX3Q8",
  "key10": "5tn3dgdEp8CQFiwVtRbBwzYu7rPNQSGthf3LapUaX3hPbavqBQ2aYjEQAdwds6YC9JkL8CnTBn5twfM1Mxugxfnt",
  "key11": "33Uh81tuPBtT5FS35GQgHvZQ3QK1eheV3hygkGYRfD5wNXWRaoCRkxvatQ67J4LVoJ8ta2goHWGHGGAX2DmqFwX2",
  "key12": "4AAesRYZapP7iSXCRsnei71fBV9EZCiQrtHpmekvwNuRFpixub1hGaDW79smq5HiHKb2zNS4shCGazQ2Y9KbkQb3",
  "key13": "53SerCj6NdcPAFtqes8TJah2qpr5goiN5aiuxGzYucA4WmGiotA39o2Qf7ZQ7Syret5au9vfeQ35MNrvCjEEAjbo",
  "key14": "39T6FYGsREPRYk1rjyYsFN9Rb1BiZhwpFU3riGL8VRE7CJ8tVXg4oeim9xmm2ciPTU7Qt3CZVVCcG9aAwsa8u6A2",
  "key15": "3V8MWcHf96CTQpSCLaVeQfBb9Z2eUgJ9NiT52c5J6xykHmwyBD2Dkh5w2R3GHFykPHkoi42YAMmyi5nUfD39uApq",
  "key16": "3w8d9afxKsQSY12TkKvWPAavbFpYoXFZ34r2UNUZNXsgDkQXqAmCi4G4zL5KAUdBQjMumzh77jXoqj5jBuknL8wc",
  "key17": "5dfo5rTgG1a84UyqbUmULwduAYP1AzGiKaDEyHPaKcJFCCggZsGKnFA8oxfv9MAJiukKPM6YAu3gcxUcGHPJJcXa",
  "key18": "5aqLYjAtzSY4ebvDoC5LS1RR535LbNRxcAjTeY9zZeJHjQFTTDBgrVm8UQA5FGWmKutXrmzFuDhjFaLRvXZQZvt4",
  "key19": "5Vjj3BDVfAfAcWCqfuXQo38pZFVPatcDKDWmbdUwxXV51L8LXdAZD2CHuWJNnTWSR9ctLsxa75vUSo2D3utNJR3b",
  "key20": "2VwKuFLHuqTxwD88FxUgQL8JW56H4s6eXHPJYCyycdQVBpLpNSzZAsd43sqHxu7MuTSQdvXmJoLC5c9gyUg5RYC",
  "key21": "25wcq7LHZZAHf6EuyYiQKRvFndjC84XdfRwys6y1qDLKjiNrfYBNAPPcUwnuNGsBfzDJw1BLRor68CRQU9KgcMkk",
  "key22": "5UT93nWsXfHXKd9KmM4M4xqYwunHjbVWQif9611bdV9nFn2qcpBXZPnWBbuVQnSDhVHyxcDWCbDLoRYmDA8eQbaf",
  "key23": "4m3auQk55G6fcdhnhwW1ZAEPvNUWavenzQSR12zdyu5LSNRED2HnQDEadctGTyKdFapU5s6vuWs1KbGDjBibVfXt",
  "key24": "51tuVhadrA9LH5DHjoWzEBBvAqakmEpT976Fz628Byonp22WM6qwVJxToWy1KAmMMfFPyHnouAgANurdBkY5hWPk"
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
