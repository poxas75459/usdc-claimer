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
    "4xzLsGcgm5cu9Z7q4NzQvqfTf2zdtZQYducBFAyGfmbXaQH6aqGstpKurxecrebzgTJk8jsbMHJf5bcr5ATKAEPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwgZX4vncij6oib9AbYfYnTB8nkt4pk6aR3uyYErGnmPF1xMvEUHWtQxYnLGywtR7NpVkNk6hVN2CxgZadFUyAL",
  "key1": "ZSY9LEcbEqqaPNrxom3qQPSxiW62SM2GfLXBLM3ksUwS8U2dBuycgVs1Ly2MmcWjAmyYhMoputqqVRynNVXVGHW",
  "key2": "4pSPo4SswLXgRkpiv2mU8RZxHUMhiyet7piNRB2GA3Ptf5mNf7YeBcM7PnwrHGscQpMLPXmG94LjZ4sxgmX94Csa",
  "key3": "5JtW6kJYkRYU1tcM3wMF1VZhdK8xcYzbqy1Q8HGkGY2ionMdEXANMqrtBGgnrbMxtVYGaRDTgADMsTnCc1TpGPSR",
  "key4": "2jJwAEVs55FWhMW5zqbJJvZf2Rcx9A3oVVQdrTh6BBRwrnjnwyQrWZ9MJ8gwBs87ygngkMfvUb7d2cAULon6ve2Y",
  "key5": "2zGhaKhgEuUbyPJ4UgSWQB4DStD2W1njgUz4PT4wismbJCdYV5MAmy9LWVuGXqNxm4RBmZL9NNt6bnPFQsaTEc6f",
  "key6": "4GkmpHXMYHyaGfYVYGUUdtN2BMXJYK28HsxQ2ojyhmdizBurCXUxh3au6DQxxWactLuRv7DxX7CuskDweBTDRacf",
  "key7": "ip4HbhtqAA1BLGdtWQQuw5ygyhqWPrb6eChEGNBQaC341RCM1bG29MxAaqFCikd5jTeSGRyCXz8Z2isVdnviXX6",
  "key8": "5NdSLmo5asztenUh111nKjkkDDax8jYhETvzc5b6wY4JvTep8PXWLJFpT5fkDfd6fQMpqHiBSxdZNY2HsEmLxfnt",
  "key9": "2867bD46nwE5omMYEwo9mybkxX7YoqC72Wurv3bWG5Gzxxs2rruDd2vZfaFB1e3iuLWrc4fPfxx9J34JWQucX7jQ",
  "key10": "XZnXWXwrehFrwwSrVVFQUmCewYGHYyP1sndTz5p1L8PDPbvT35dgGGcVLSe4RoS1ZZWCQfFTjsn8pxXLSe9S8aV",
  "key11": "54wcosznukvYeP79bgQG2KXNz35tNuL5yzW6fm1NTSaVUMCUjnLgLpsz1N1hUcT26sWUcFu4H4EvNEUmE3WBE4Hu",
  "key12": "2setiXRA8SkRkzYV2B6CzJLvLqTsXy35xJFUmiABp22fKViqenXKKWXmNPwnPDS5TwQwiY72RmJpPF18ycmuFpd",
  "key13": "5Nh8x84JxcvSgFP1thJ6a1PHE2N2MShe8xDGvEKdtZ9nxQXMFabP3qS2CsuJMfU8JauQDF9rXtmm83sceqNyTjSh",
  "key14": "4SxFMhddjecVowk5ytrS7gBwUnCwUKUtyH4SBPgAQur6ZMy5DF1Xpy9tFmZArAzphFzvoiKWsx8ymtYCTS9f2u6G",
  "key15": "8wbRg2fZA4Amfeea9nPySFuyLyXKJJJiCJ5iLTVZKYisRvWqdS7G792UE8TQXGDShicmayz6DpHZp7eFSerSa4n",
  "key16": "A68FGKZETg7tebFKFwH9RpKX6dbdH2DwgNfbyMgXkBTjmgbcytQ8ySFU6G1mxwepezS95YGfnBqQAi3EDkqfCMJ",
  "key17": "3nEYScLAavhJH8PonPCyutUfoviyZd1yeRx5hfTSgxdkXn3aR6SiV94LMkZzEgJ1JKxKiBhWhTAFbL3h8kaWDJTE",
  "key18": "47fcUHQLRfMb7ZSxE2jdet7TeAC1TzNBr4wpsnBtyZqEZSjRJ63peYdoYcFBjA2wvbz8JPP6Xh1t5NjnnpxmaGc5",
  "key19": "3EbTWQqAEMugFJnUw5mX5wu9h5jThvzCRUuQ99QT9BhnbmyanDRwzQ9LBaLmNZjuMxpEgcMhgWfcnfhaa8QiWDV6",
  "key20": "5gksb9T97cZBoy7XSPuxvemScbwMjQoXWFQ5VajdCETPjW2bkoE9Wsf9zTmj4rchZg8tnaKiTsbo3VMHw3fbX3Bx",
  "key21": "4nxtc3n3aSrvvzAYA7z9AhmM3JcXWmU7BeXXJCNQAd8o94MqC4gnB55EC5TdzFzWpVfbKgtwokFNCLwruQ3EaBye",
  "key22": "5k8gJah2SvBHa5U1LPck2U4XGiUPKDww7LnfCCmTtmAhKM3iXkVPkyHA4eJmwxyuVRAnm7G5ddVetw7SoFHkkE2o",
  "key23": "563YCieHaDxeZ19ADJwj6UxCiNt2T1DwdTBGq21qduvhLBgEzujda2WBvDDF2wtEK1x8a7HWMVcFPwFVpfrmrvK",
  "key24": "41ZQep8wQuVDU8avKV4YGjtCZWtuveZJbK4Ff76s3UmxXij7Rzpi9WzwntJ5YFARaUVihXK8WT2V16QEaNJhAGC8"
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
