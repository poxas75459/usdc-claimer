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
    "2tmhdnCbXW75F2tvr73GXsMU9soDUhZCpwfbtWSN8smNp6wdaysEdxubKuRvmhssRgYRwHEA44oiJe8WqjRtnqq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdXQKi86xxcmCu5HiwLvzCdhx7MUAQ2vMSnXCgmLM2VfbxXfjic9YvjK5QxXU5Z1gCFEE3RVkoEYpjPLLXy4eyz",
  "key1": "3hzjyTAhrsRXb8UqUJsszn6xzSR6L776XbzwYJFzk7aAyzDgYh2WGSbmKiCPCSnmei4dkqGkWWWmhLDCCWfjHiAK",
  "key2": "3tC5afUqJZe99xEn4opey5qbN9hBdSrT86qKjhBL4qf6HC5CXsrWrgHNeM6g5J54mY7q843TBEsKUZc9wFY82vMa",
  "key3": "45gMHsNGNVvmHzd8BfAeCRnyt3oJbfpnWet9W6EBBjmGhx5hUPJt3uXeHaj2Jotw58dNmiaKQQRQo1tdn4z5TEbr",
  "key4": "5UqHVKSaQQAWaVaEC7EsGJJXvBgoFKUkgGCLLvPmG7bXenv75txyEkeD52U6nS2sPwuAnLq8vbTdMsaCnQdzGwHD",
  "key5": "4wYME99AjdS686ncvUhw17UU3r6xsFRnjF4dzCiyfeqdxNRZE7XKGDQCn7fdKjtYLKUdvUrKQiUUREiqi8GDjd6u",
  "key6": "5yrWfcqA9phRtk3HEKYzRX43bEEvC8PqStE43W9fJftmevAeKgd1idskEvjLfE3GuwDoWakQZn2tXN6wx737RZAj",
  "key7": "5CTQzgotEjXMZvsN8jjUs5KocRhpkfughtMzrQKH41ykTS9ChFX23zcdDipDq7kU8WAbxvde95aXN2ggmz9ujU8X",
  "key8": "wRrZBequkYkeS7RdHqSEYjjo13JzkNh9PLQVwtNXjVUdqH9fc1Szb2VLf6fTPxCPWPMDskyZ6FwgbCsZtz7mKGR",
  "key9": "53FExXQhy5ssXKFd3WV46x887NGxUViL9v5bDCb2mzLsmWJEvHoYXushpzujDYrmiKkHC2w3nvvQoG9ZhJApq8Jt",
  "key10": "43jFbX6YQWv8VDbk6594Mogjg2jkrLuB97jXBoPcG71ux3mCsXRfrRsgQTv1QT98wEJbK1E42igKdXGzpdrFhU2T",
  "key11": "5KQCUcQZ5vMxUqo2UpxE7mV98NZ8nVayhvGxycNiriJLz4pWLJaNrvL16ubNpf48DE28BwFA1Ti1DpxeNzJi2U2A",
  "key12": "5LU4i8cTcjEd9wjBV1FBJYH7TsXD8dg5fkW3SVDkFWFyXMmQ8dSdYpcXA87g7GTEdn4n35Aif4Ari9i3vY8SNErQ",
  "key13": "5QAYWfYKdFEdTu1QcjXHuQBLnQgrkewYk7pBHy3U5GQfbt9gHZcbJ4m1ZX3rupQBK3ugxRQgk6errXEkPajLQ9Eb",
  "key14": "61Jq4kXafYRHCATLNMjr1ae7cfou4abum6iEtkNBYRh5sCdkaKGEynRH6DPqD9sYZxpKNxUZNYf5zPkdF6iLStb2",
  "key15": "2DkzZVXM92Xi7DguoQMivQeruicLJqRty65TN2nPRSyHM2rN14r79omMGkrTjiKBJJZ7p4RAGWGJCPhC3giP7dz1",
  "key16": "2tfZL1StULMspu9ZiaS1HYtHmuxJCUNSGgiQKJzTbTGSV4Jt3ihZ7F7Ez9cUxjYRvJwnU4dm4wpujSJg1uRyDZrZ",
  "key17": "42xniWods3W9urLyzGWpWj29edfRJfQAfRzLstX7nD719ZKUhEFmYjy6uCuMZ8diEwREwdnyrobkknzKMyXG3WmD",
  "key18": "5A8aaeYxAizRNpdHL2HADXKD4RUMpcsVKQW9w3935tFoBjPpcJTDPBGZw5jbKUFBJrXksA7sm5LAZdRMSaxiNjv7",
  "key19": "3L8MejYLrfVdoqvaWhunpV9aJmF6z2SwMbwpTRTyjpkHHcEzMBzKa2qhpHkW8399PcQmo15PdTRSRYghKBR2msGb",
  "key20": "2LmEPCgKvPRDJsMH1WgK8dMkLfpEgA6cB3GiWhvic1tJqXcKN9X1N7CTqJwHMutwkxMFjQ9AQFTh7tXEYa276y7C",
  "key21": "2o2vpgkNMNkxCmqxqCp8B1fskZzmb3UqvhmxLmQZJVA8TQFUPWAdJpDFRYZVUU6LtqU3HxNa3nXF61miA49U7Tdb",
  "key22": "4c8ZrjWEifwXHQzaYgpEtrUiX9LwzXUkJCTTATDTECVxjcjvNny51bSd99fx5ZqQPzdR3B1CugHuxy3KEcsFRFzw",
  "key23": "vrnbUxTDyhjCSof9CmMRyw5V669WdLWiXTkrGU47qBcUxGNuGfMB6Bt3o8a29dBftwNvdMbbLn4tU1NMZuBVXaL",
  "key24": "7hnuLYX6rvyz9wYAhi4AwWzDrPsdR4iyEYBkrAnQjMYaAdwBcs4eFNvguRHGr8gvCEHLKh7ecsPttni69zM18Ua",
  "key25": "4HTGSozYLu1mrEpBFK8Z3Y4vgjnyNL7igSJCgZj3aAtPk3CkBXuQ9gLeHtQVG5YrqW1RoVfJHAq6CVvzWnmmT5q5",
  "key26": "3FuRF5s53p4SkKYFFMJVSFywWHBEjj4Topy3CVWDGMnLEjntsmpf6sHwyMMSCFDr1AZvU3mnsbNK9huwuZFy32j6",
  "key27": "9PFt61dFpzBqGWM7JHuJakg2sZC6VRukmGCy1oVD2AJ3oUhQpyaWcnw2kZeNwkK2XfUbUGnoQAkJPghAbBBzs2J",
  "key28": "66Am3yKrdF9M2T6bauJgk9RYbkwSvotwh4dteFqgTVrmK85BV2rHFLGFnn7gipFBKDjkmoQ94LfDV94Nk9TFqKVQ",
  "key29": "5W7KpzBX3CyJpGVeuBV3fmPivXC4RwECkGMnq86wZon2HFXrXuuqNTXjQfRaz8JqRpay6AgZHYxstXiUWqjKcMHG",
  "key30": "2faU7mLwij1JGYAdc8T5MnYz9iEvYkoHipmRTMPBgg215CVBREmBnoqYfnfzzvgAV9JtYxNDAxMxKGoUNfGjmG7z",
  "key31": "65V4M1Q8BmSPAG8XRt3rLuDCjnwNemutezbZwm3yLxbbeYmBggo85n1kSKndt3wiAv43TGsQUkYKZ9jikgUQSTdm",
  "key32": "5C8rxR9pnp8P5SQmEhQUjJKuAzrA3v87sdeKJLGDS2URvu2vtCTj3wgL8h524W3jxg6kenLmV7e4LsNYyGsYzMkR",
  "key33": "2DSz8FbesCUeWeuM8omNQr2v3xGD9u8SCJbjVW4sopSVishBZAgAuM76D4AKVqKfqULaN2zAfhR3q49DA818f8xU",
  "key34": "qCx91TpuHwCmofLGS2FiwTHGZvovxH3SLihwwKBeyBC3bo7ZxGoc4XGFiFkFhWdhwGGcSoZMuvDo9JaY7bvexdq",
  "key35": "wZDBVURGxjfTVYcFfnsFz74EnUqKEDmEevxaVQTgy4bCwUNJv2WU36Ft6deMHp48RMT3GJxt6tYyZEU21voVLzv",
  "key36": "5Wffb3s9g5y6ZQ3cf6Kgpuqfms6gRjLBwintoMutirwh5mSfPE4UdfAZprvhGGdbUBiAFLYbmRQgsVKNbNYcBxjo",
  "key37": "SvaSk9ecL84dgqxxTL5Cvz4g42nunTpkvkHVY3TePFPaqr5xcM3GsYuyDa8GaAsALmSeH69TnRDoVeGg1ma2bqo",
  "key38": "9F2XVaqCNCmLagjNnyJWyMqVXzxKJtyfGdJXjb8L2Yf6BH47X1uGhPHHF7EYd2oXwtzVDcB6kAgsvpKaxK29YAx"
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
