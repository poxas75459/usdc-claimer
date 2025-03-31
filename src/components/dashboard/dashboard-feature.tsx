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
    "2VuJy2uDViVsYk4gSsx7Yt2Jbb5ybLhmXDHpegXq84HWL3audWArBJ3QcDq2hPRudcW73Pn3NYnNt2F12Lh4yPTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1ysuDhoUZbiEZXZFwZRNrKqp1ASUSm4gHfTdHUnNmVD8HwP8WFc9aa5LLKTRjRziMFZZhJ78Xtd1bTBHW8sK4N",
  "key1": "65bRGbawB9dFGVuPHrdRwriXqhrdukV4aMDLyuu7pSq3FbfQEqvCEkyUAkACZ7Sw7p3gEER9n4GtdjQFHrgdL9XR",
  "key2": "Hzf4cFd8DopnsgwUKswwuNz8YPyBpc7v3m5tzf9uCVST3QZSXESXwFDxhoBMHE8ZU2oGKTg9fBAnKUYATAzM3CS",
  "key3": "4hJH4cY328qPqaUPh1CDtt3haxaSRSb7NLKySdUcvPQnzk5mC5RVKGxyxPpBud4PmJ3NyjXRcjaWwuDiyYrJXTeD",
  "key4": "2BVC4JCgv3y8se2M6f8VXbkR3rB4fs9LXp3MtrgcvHmVqX4ZL7QeaduuwYQodiYDZcPdb6mdoFGs5YbsPVr95Ypo",
  "key5": "4diqGYuvNkT1GkGQFTCSWi9rooHUiDBJZdm6ZL1oA2CUi47UiLVV8ZHad7WAgvXVuNJf2QkZYwmJTAk13L8sMrcM",
  "key6": "3Qvvhmf881GP6ZmCZSX2RL5gVLEG4ifo8pqYZeEuBTApYDguLkaEhHsTkuF4K8ovqqGQ6ERwXbJZcm3hxq8GVjXL",
  "key7": "46dew7yZxLAxSoYDftX9FQLLUdDgwDmPNGUvV1HLjTgfnnBAEdau8juukHXkBzQW3AYJ8XRcLjPVUaDJkpRcU6ha",
  "key8": "5uJjoz2cf4roLbbdDHhzAhZaTyaHAcm9rkFh8g8oxisztq7in2QiSGrLjyBHZZ3SpfMw7zjM68Fqaahxv6DhA4F2",
  "key9": "58tvZsGQLrfCKMC2xYXiuz5LozZTKabrH1SreE8qez1mN846rJ2p8uam2HC5yLgWF65MfHBeLXsvwRmWbrU2AYFF",
  "key10": "avf9b5cgieGuTEMVd7HXgGGufpvSxzuMv7zTpWE4dLrayQE2cJPXSaN5ZkAbhXiq3NBHhXuzpvsGFwyXkc7wiLu",
  "key11": "i8uDjpca3BTbbnfg1dKHWrGutMU1K2ySaDR8oLgfZFXFWrLDQDbyq5AgirqGGa33HaiU3jZFXNYRKAVjfgSSV1c",
  "key12": "3VHmVqzohTqqMhzmPAF6u5fGe9z8c9s2YaN1oBRqugnZTXVKHVmTcUWHGM4zP4B5xjSd1HUXmUqMA9AXUVeoxe1Z",
  "key13": "zHRVZYVtsEFoTYbpwTWYZkFJbjtbD6XTbma2Pd3xUc4wmbjRGdD1XSERxakK2wMBRr1ghH5GpW38p2SA94LJVVc",
  "key14": "3rkjXcxuAE8hRJ8fMxLuzXJsVXuEXG9GE18kdB42Xk7rVyUbfwkUK2N2HBKrsrU1VhWs2XF1z81NdS68zLiej3FV",
  "key15": "tP4NRxheLqt1gzfqak2gdnsDwCdBMEAuiUF2re77wqQ2EdzzY7pYEV8sYN26kuBygBQAw5NkGtQJ9u5kBQqnuDA",
  "key16": "5dq5jhgdPdfgA2Hr4oJu8AUw3gT6TRYNKBnja2Q2HF2Nu96EBcq7TWbpWqMwF4BXBx1qXtx1TGCTbnW9p3c2SbrP",
  "key17": "7dWxt4wdCjkiawNKAH4MctCcFUdcwdvi9cFNcgiAec256B6vL6kdqj67h6odJ9QjEiQKLJDpP6N3v6w31xvYApf",
  "key18": "4yPuqyg5XXhBhdk4qVLjKCFREDc3Fq3Xn91pw3vQjJdDMF66GquiYp4wTmeFeJ6TN9faMsJYiiwdP6XBrDWoizXp",
  "key19": "NfHnas64yRyNAQPPpiJa5Zhb3R92LkTiGR3hUv2UH5C6BhEmg2mHNoGfPUp7cooFciTiLXuwmD87h86xZvBiNcX",
  "key20": "4UFGUdLBKvVWsBAJD3gDQ2hBJ76qWLbPXZwqJudJk89uEQRcUtWz2cnxQU6GwrFbZejbsJtNiutUnwP6JrTeBbLN",
  "key21": "CQLTUeLN6MuA8neSsgHQE9ZWcXpfoVM6QnXcxV3Cb8kz9o7mBWHhwcnVeeZ6JmuBiUoS7NE7HTdCQmMBPPvL8MG",
  "key22": "6VtZC4XMQVbp8JmUJghnYb1ECdNKvAVt48DG4KX4rVicdMsNid671xmjQCDAqY8uCbv5bbc4PtnoRfz4taTaDRd",
  "key23": "4rADPJMV7BwQCAF4rvnPy2BYDJTgkAD5ddPxjMYfjxBJWRwZRCHtGVBhoR76AUVpzn9cvKwyKfAEsGnXU1Rc4xi",
  "key24": "5Hv7rC8tjz8aBoLh3dYd5U6cZwZmZgouZwDiA8WcHtZLvcHmexPifjSKp5WHsJv51BMg72u3o92hqwUoDqK56aot"
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
