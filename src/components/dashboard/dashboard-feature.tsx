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
    "4eYcZpLXWayLPcBGpXVE8W25WTEnwJurM4FHb22QEm9AcZteU2HHfTnbZUwZcpXHVc3tni8g9uNb92xzXRZF6rt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dw6UYVb15oPW834LqB3X9oJB3RexHcSeJa7D3V7n8gx1HPDcbgWFfVz6LkbFY2vutHHJQGjyNSbwEsHofjZR92Z",
  "key1": "3DHcYnDGNttzM4Tdt9priQMZe3EjyoNiLGPPCF6f7TRpuEqCuNiUDCZPg4U9QRWvAkzhBdFW1HdgM53246KXLQ3k",
  "key2": "2963BosxXJxLPG8jeWuX3k4VyDynZ4hs24hYj8AQfLce9oJS5T5VBuyLLzLEpyPiFjwJhX37mUXu7yggoPPVp4MA",
  "key3": "26h9Now5TRa8gzkNDoKYZrRn9HJ9AYjfSiBBu8b7Qda9KXpuPsPnbHLqECm9cMu3RS5QnSczYCzY1Mq8BkndqKDz",
  "key4": "2t6AvVN113FPqKQJAd4msFjo2ACBR2qYYRpwtcvaWwpyJc5279am4RM5EvMpbEBaiRaY4Cxd7iDnKb8EaE5jPL3s",
  "key5": "XfXzVUUUmi1jVSuQJGykAm6fYBSFZ5kUBiA93YPyYKtG4qLVMREaicpBXSMBnZuRHdCRn4E2djAi17qBJmdgyPR",
  "key6": "4Kku7xPHeEYLuN4e9P274kt3ZUBMuvWiR4nffytPNxEcz88PeSXxUNHScv8rP5MM9znXeiEYCAgNpbf3eU6jLfJ8",
  "key7": "zyAhPavTbfiMzhbhNu6EPdV62cPsdrRWbw2u7uM41q4KbQG4Gv4G3eQmnAAcnLkLo5eV7oyWvSvFAJgLwkJEhTV",
  "key8": "3MaxiZe8dWTNqTzP3ZttgtkxSzkpW4YJbXvTL3gG7k515j4ExSdTzLjGhxjfZmQpv1gFb2UqdJECLxzvwjRew8Wa",
  "key9": "3zBoL5mJSuBQ22QE7CCDxgqZgau66hHaAfcNa7k1B7o2zpc7SZYp7ouqz5WHBmH8Ad2LpouBNVhWpMTNPk1UCCt",
  "key10": "5cmsB23MpNsUTWBMRpzP27L1V1HJLoGEqwEgjZfeFAUaRNxYR39zu2BVDQszi7mz7KHRSTz1NgD6vsfQzcNoZ2et",
  "key11": "ZTrtFKNZhuGB5vDnSwaNoaUtq4DcKUQSESG7pCdiga4dqq7A2HWdU9uXRd7upir13zJvzYtm1ZRKy781fPbNj9v",
  "key12": "NsdQUTN1UWg4ZxpnEEvtRbE37Lb1149UtfC3w26A6a6HmMQwXyQGjX17HzgFLsi7hBDg5uVt9Fo1CWQR92S9hdo",
  "key13": "4MvK9CFMSiqv8ZaMiTkoGkKJ5dEgRragwskzxWaaW2uKC2tHjMf1qFV3xSmDwRKrYxNzLcobCNeEpfMYM3UPGPEi",
  "key14": "4orPKx5sJmj3gbQ69TJJr3DXazfPa4xxXap2hUTkMAoVXzujG1scXte4xVAs6TE6pMTci4hk6Xs1oZC3Wg54Yi6h",
  "key15": "2dxF4i6d7ezHJsiPTqWXzD2RAEjmSvmSh1uzZwFdfUoWoWft7ZvyfhXDxWu3j3tUi5hvxiNFMUEnMM32xP2fuSDy",
  "key16": "2adFWrNx21bJoEoFLrenuFtzWy8JmkABaxKaVdLGc5XmCDeiAFWEhkwNQqCJ31he9YY8TYRBQppRSdfWNrr2Swmf",
  "key17": "5LXePCfgArhWjj5Q59B4ir2GFyhTkLefR6JJvx3DjyGMSxoAdqjCFeMbotXbdLXAn1pyrp4xsxPmsptqfpWpEQFY",
  "key18": "Xgwfnkxeqd53sXYmoXLWE1P54FM64acedyF8ockKoeRZTtTnc9DFTSG472JJiS5MxMKNScVXkihbLTnAN3D9Pke",
  "key19": "2a7CvqPD8jSxCdmS4NKKEQQe7Vpsea9RudBxN14aSNgrZ1BAqpkPVdJfDcGBWif7UFPjd21LJGvkRQtuwvBNEtLa",
  "key20": "3RVwX72ip7BvxTzi7rd69tURoPPNnsmUeeb1bSCTaVrXLwsbEyB7DbCSqNC7BpWrprb6C9G7G8QZs3QKcv7Jom34",
  "key21": "4UdgCYe2NMb3CTdxosfp9GfhABUFz1GYFwNZ9yFjb7KbR3ZoHAYCpot5kF199cNJn9qhoSqMcTqmCkAmmwQMWDC8",
  "key22": "9YPKF2UQ8yxM1YfRZsQbJeNYexKGSwedzD4eBttAnCW9eGD1DD6iy4cSfcA8vXhVLFLj6x9CJLMdBvSp3kQvhDN",
  "key23": "YqEpdniKMEJdfsnUdgHpNgeVmEA5HWxwMCo2TuPKC9oCanWqShMFN1BuBhpC2tqYHyNP1VecLxaYCY1SexJfTaK",
  "key24": "2twZe3UkufRDUjLkGD9z8sRSrct6r2wEVUhqmzCxYHfqNEMKpiiRygCMtQGvZ6Y1sAy7QKNw4QzJcN8gzRWfim9J",
  "key25": "5VGACHRZTRo2RvzZsvpxfJtMWSggUWswMX3kTjBFF7he1tyWDJcJRUNkwNEUrHMa2G3DPQmQ4yrKrGcgCGZJjNPS",
  "key26": "3xxUhvLcvFdbLPdB3wuCNJYRgt2HAduysW2Vk7U2xLkMQYV2sVJty1wz2zNuAvZ1EfsvtGSHSwKyjbD6wDVtgtoQ",
  "key27": "4RKxTnCxeP3wEpaRdMTijfkrL3umYUGLgP8bn86mFNSH1Tmhuk8MqjnEy8aH5q3hXZejNyN3BZJP4kXLw3XqTb3i",
  "key28": "4o63DsC99CxRDU1fuC6EGx326Ly1vbNrEC8Y4vX2XUYtmP7LE21MdnJxyhgFMQVjF6ET3c6pXABHREHcFgXU2xQS",
  "key29": "3SwgiEzYYMiwLbC5JLckayUGNkpBQCSqGGHkVKFztDKy8KmNcicsbhUurZsoEn1qZ4fkK1kpCJHwYc8pDvWXzoNM"
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
