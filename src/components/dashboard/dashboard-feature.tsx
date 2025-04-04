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
    "5uCxNA4KcydYMwsbvC6MR3zSq3aUYJWS3m97ij5KU8LcuPXevgB7nVQfNWQFtAKAXXRpMcEvteAk9wShDHpe8P5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E62bkQx9m2cjXwqhzmB1hZ7ZYhdWcRXBDWJqFe5mxv6Ld97tBZtvpxYGwEuXYG12NszGcPS9eRdPdANmw8ipg5",
  "key1": "TNHzim5SoT1FaQTFrHktazmooMxrGzRjusZJee94RYwfw9qLpZNYEx4BgH9X9DnUtKeQUVDWLsMYexzuCviqhqC",
  "key2": "2vb7WXgCDCRPUYZJJMkCkVWBkA9tdomDiBpZb26FkPLoRvUktmJeJ5sM9zFeWkR4cNja2cicmq4SkUiecsNaNpci",
  "key3": "5HqtdpwJmoR5dBaQNwA2gzMkjMM9cWtCC4hnSh61to4zDJ9cV5oyciaechS2CPy8bMPuXncTsyqfHEMozbwFYmUM",
  "key4": "3U8cBAh5VKxNSVDVwmuRL6H3e2v26F7C1QeDo2oAJXFnJzNSMr4EbPFmcdDL7aDK2c8VJasiffMCsYooJxjrdiEE",
  "key5": "2u5VUqQPeyMzmDuHjx4V7RKwpmkT9nyrYQkPXxkWm2pYWD3a6rSdX1RrJcvwJh2orAEzWJZFZXMNP37E1bFsN8rg",
  "key6": "zdKbYXCudWps55A33gdVpLS872oMaeT3szW9n5Vvbecz2WopM26JB14yb9jHroodeWHzipCgb5TnHJ4unfFDoDp",
  "key7": "2Ac9oG7SQHTuUnETxwRW3Wu9kK5PwNEBRjB48ZaP14EkEs7M6tkjKG9r94rF1kxRzXxuCknMrxY67ts6C1pHSKxA",
  "key8": "3go2NrrVKUjNLsTapxcLaQndCserRL9cKwXKYFjFMmpLD76mmcuKqTB326atQQ8gX37uH8Ry9yCwj7yn8LQV4uJe",
  "key9": "2AsJzzxqRZovZN3dhwMaRt6vsL8AWGKunFsotKhrCpXdiYSVts7Dv3ugXe1bcBTLZoJ4vFChhGxgvE3zRwxtUwrE",
  "key10": "965wratP97nNVsFUTrBp7fADAxaUswZHbNh6U1Knox9jJs4Uw3BMhDkgPtvaMCt3uZTHU2VJb4SXXNSVtGUW4HT",
  "key11": "DRFJB8qfRh6dXwQwfMsYvczbd6xoQ2HuePUV5bUUr65dwU4u59kgoDrAnZxqqnoReWV8kStwzDgTKozXu6YHMbW",
  "key12": "4P86RmyxqUipRX7UuEjVe2uBxNvZLzTBsQ8GsAC2gfLtidu9pguUJgCdMvnXDSdj48UCX4vgH5sZ5sprtRgPhocL",
  "key13": "5bA9nauCJsH1oEAo6gNygNcDVYvYa4Vcg7K6UVghJuxmEX9XEK4kfRs8TyMGW7U3HHDDn2MXMAhs121GVS7Y359Q",
  "key14": "vcWMoCKG12jyrYuggSDwJUPA9zdY4SJ18QT7juC9wZ7BY47aBKi8d1YzFZYubQNNAzin2jxR5fgN2Sbr6HwYSpk",
  "key15": "2rdLimT1vqUjNxR6WCQmW4DQe8vmauKwqvsgwaQxTwxoVwSU8er52jZbsNRDfD6iRZhwau8acEEaEmGvcNtxiwNw",
  "key16": "5tWadpgDHMWvEX8fNQ5fRENTrdnkcpZHwyN25zDyWTC3A4ditUCgcfTp6RfjzA26K9uhkiF2s8tGRvTMh8xL7s7K",
  "key17": "4EzUkALjh28bvHJPDPHkygj6jzGjtDzJ5Z9w4MsjUG8jMf4Wkk6VdWCrF3TnW2metfyqLStV1y81UpRdfVumNSdH",
  "key18": "2c2TVBYhLvEHK9Q2PxA3swFRAcA67pmqnuFq31gibnJRVRg4P6ToMefqgX5pgrnfgKttytCh4uUY2sxbYTw3fCAd",
  "key19": "5eYqZeP3ShAE1YhC8RNVn3YGZbjMhg8fxthWsjX9Wq1m1TdpnS3U5xFRJXze4RWvTw3humi7aFU8hmrLiYfD6qRe",
  "key20": "22LYLsXfqGge74JiD7ZMGuoL8vAtSaUDYtzqBNKFxhw38Y2mWyPLjPtwcHu4LDJhfXWFBwHGmqE4LLUrDdk1ibxQ",
  "key21": "2CvTogSkBuENYKXYXM927KiwSt9Q8LM3FyY9JMFBGD79kYjDV8uZrsaqG3LJAm4FJbMdkU4ZiPSDrYJU7xzeQ9Pi",
  "key22": "ffUBVm5rPxywp1aj1NjPpU4Sq1nyNKPosu3caE783XiEMjM598E3y2yxbR2VfdAR2K12taEMrRupBzmWQXY65gi",
  "key23": "5wJSLxuaYn1uiKMnfarcsKCAoFnxk9t1BH3aKivimpJguYUTdXWsf8yEHhb9U17vUhN1j6szwDJ4z6AKveKt2HW3",
  "key24": "9DVHGB8C6wU5j3QB3idrTJTNVgyhed4r5EMFQGnZv6rLCctM8eJC4yxbvWs3cdAqsY37qSVBGs5knqYtfuqyTJh",
  "key25": "jKmtYoR8ri3S8PoKHBevN6xE3XJoqR7qZjWj12zERwHMv6fdJVxfixBBgXqajhthSbs1EdZTHWDARnBKNABMTP8",
  "key26": "3yQf4tYatYfoy4YMyeCQfFXpuPJScy8De53NACMaAVW9gdkvQGcwsDykSG9DsT2WCBVtEyjHc6HyUnUScC2ZKztQ",
  "key27": "gs841APT1bVk4RMRkcwtETntaeViVbrSAUVqx5vnD5ZDVRf47C8UKtp6Xza6BG7SUfvXztZvVBtgUKPdYKHM4PF",
  "key28": "v2hnsBgn7y6mZP2RnMbSEbgaVccySm92YGyEETpGm9kF12wKWgFdk6ihiZ7Vu4vM6bPfF7pg8gSi4SrckXNvuTx",
  "key29": "3U3sMdDrdkDhHAHp9ABkvRe3ACZGWbKdPVEMmbRgzw34CJzqnCARDwd3cfBn7LDBQn28FQxPRztwv7vDmB9obGw2",
  "key30": "h1iu8AGK8t4yvakySXasCLp9geoNXcY6XcaABhjnZG51zNoEP6UP37UpDPazWMS4BTN7DoVHc1P4VSK9rKBudBc",
  "key31": "2rsfFoVfFRHwPDekbp2PMUHuDP4gzHmrKpKZRhxxirWNwS2H5fJnjFm9TQzwxneHXqZGoNYipZqpjooL4L2JQ62Q",
  "key32": "33tJSMmqxNYit38HvT2xFzNHkSqTK5Vu7VRWZmDzrh46fBCNiiV3gQSuh6ezBL2TF3nQe2GGGhruqt7YWRfxFfnj",
  "key33": "3uxMCxWnPV7uCbM9vWAukWVdmxH6i9Gv1RDejH9qZPRkBt4ttAVM3i3yzctN6p6GygPJAss7XKLU6r52cmkaJ7FH",
  "key34": "32K7rANJR4zosSpgn2oh68etxyE4XRBdF2Vs6Py1EW5Lp6ouFxJwXd7FaYZZSudjBZpHdZoXoAkE7qysPk9PyFeD",
  "key35": "2ERyLAp9es9ox3MHpFTywNCntbuUWWiuvDmQ8AkiM1qNBGcnCvWWkc6jEVMs7Skt9hYwPr1i1FqKeAqB8ALPZHHi"
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
