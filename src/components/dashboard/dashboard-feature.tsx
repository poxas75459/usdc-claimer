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
    "3xZuXDdVSPQHzBNNkEvzDz4RwnCv5k899Lhs8WTYh2pMFXUs8Cj6LmzewSW8vCuiz2nLuyCaXfcM3WMw3nLUpNKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35oWcKx31tjrCsy2aYPFVSSKw4adVWbfKcB8ytJj6UtGKWSVho7x6vkKTu7VNCZoegALBruyTo8tfYAAAPwzya2",
  "key1": "38BF7o7tyTSL6Qdr9vv18PcXn2QadNoVu5oUzk2Dxxto1bfaprkya5jsxGB1w3ouDSUmAyeApVvvMNaa1WmCyzXH",
  "key2": "MyZ1nxbgxzfzHShHuFwEUVUzt4ZaFRyefqUBTBkqqvJdN1DRLjAYpYXXT8AkEsTS2jk2mv3QFZUjgpTcu2ewRWk",
  "key3": "LHMnFcNiAXFHHSuBaP79A6bVF41CCeZuhkvLtCaHZ2wbobAghFVcpsaqipLvLtVfj1Ne9VDdc4oVAfTq4qtYbRr",
  "key4": "iVucfJZopNo6GXW8eQ5CtcVA3mZx5oRWUJLU297dSPa6dgVa33XyD9U7Dfi8KZj4bVG8wvf8aCT7FivzYpvLxC4",
  "key5": "4atDdLxDPF69Ei7gbA7gkRe8KBNrEx6qsrN6EPidkL7cG7a7uwBwUmNB59Grfw3hUzccQ1ydhghibtrGgCKLe4Zi",
  "key6": "2F1B4iyygUbaYtKUFDvtpwq6EVL8h57ataZUBzFbmXTKTPH8G7XgM7kaq4vVaLh4NykpAA2jfWwF7kMw89G7GctE",
  "key7": "hYhRoJmqQaNpjy2rS5tsocmjknduSL5FHCT8ibJ79Vb9UeRNn448pPFfEd2R1SBmeqVYSANMSoWszyT3Yh5b6ej",
  "key8": "BgxHGu4QBMSLKWk7cW6FMhMWXysqpFfABPF9yg7PjReXZc7vQJFrdMMCodL5BRbwocRVZynqBxeP5sAcYyExw5X",
  "key9": "4JebZ9ZtycjePVH5Airz53AJrXagH9asit1tvExSR2YFSBPAnowZNN5TyV8qhgRvjtPTAy2M9V8vesFbtGstc7oy",
  "key10": "3xMGf7xpPqEHDfPT7N38sRpCQtRsnadMqqqJWSczBPAxVn2noktXva4bEAKmFw4jbjgAYtiW5dBXXhQnKhino5gz",
  "key11": "rL4s4jfAouc4Sx3qChYaghxwcjWjZsuQe3qrvzCHF39vYazp7os7LVfTYMaD3DZFD49KR8Ysz8fpJnc18UcRkgz",
  "key12": "2z8teZPdKVrLDHqEZJhjegzD3SJVheF6KaqYsJcWvE2YxkpmE2dDRPaqiCh3F8q6q3o3fXiSCNJFLZfP6NEieT1w",
  "key13": "SruH8NpG5wyp8sqHoLGP8gJ9rDAcoLc8QudhPHRt3yxB6euQLt58ZaLfJt86TCpVuY311DAY7xwrU8YGShTSuGM",
  "key14": "2vnAe3nnHBqmuDxRxYAdvdDxXn89BJAg422g8RzoMKWx6yjD7aJGP6tzcJES3ULiaGCXucKP9EbDgccbTDeWL7bK",
  "key15": "3rgXh8zcGVjh2T7MtaNZ3PH3Xoq6d5yjhv4WuT3zutA35QVqvqYz38433V2y8fKpu1F7CmSJaLv6U72zs9frTVo6",
  "key16": "5ovpnH88hTyS47q4qWzRh1z7SmZwqt3VAt7epkrVc8Nzzkj6veCxCb4XqQh7MjEUrELbgWKK5TKmzTgXfDpKaLjm",
  "key17": "2SuoAYCsTLwokhzg9PDGk2pByMBeZf6Y6C9CBPBFv2TeAMS2wBZKkeQHzVtG3ch3t5hAp5MWdCGdFekTPQtaJ6mX",
  "key18": "5zf4dPvQqgmArAhEEAXzg8rznRWDNGWNcz1Ybp7ZhU8EYCJYoL5YypBdntoUQV92KTookuASXuUhWLFWRqWzGpV6",
  "key19": "4ESai8fPqiCWLy2gGoj8QoVRgn4jtKVirhp4gdrxcSaYjqMgyrvMP5LRLLJb4G95SY3dVC8SDqr3TWKmyMhKckrR",
  "key20": "HmauPwDZyMzp6xR8F9rc7bA99rr198ktQKSvGZ6frX4DnBqgo4jFHdXbN9myF2VE2dkX5Q9TB5J8LQYXRc8BRVg",
  "key21": "5TKJrz4RCrvWoFE4L4MojDYRPz8Utyxwu6cmMnbB4EZNXeRK6kqpw1t4PK4WYfzXqyS9YmDs8FuiMqBejT6Yq5j8",
  "key22": "4nNNoVoZVMTBkFQXBkm4PVaVH89Gg5ERH5QTfgh1wnoS6PTp6bAdXBjMPfEwHM2gMnQECD4A6812HzJXXyaUFsZf",
  "key23": "3srALpbyvEhGYdsPW1wfeorfHXMfobjePoHzVbgch7h8g2XUEufsKzowqpatTpF8RG63higV5GyKq7oPfRLoMt9e",
  "key24": "4y6D9s3KUh5dFpBty6wNoWe3LF5UD3azQaRHgjyAV1SDmQL6rkNmbHobqs7SkFu1pgeHPiGBThG41e1hNBjqfwhs",
  "key25": "4b9xqSga9LAgJreTBmxfUMGvdW3qaS6Rs7dt1PfBDXFvhRvYLoVENW5sUAMRUwwyUhfsNbWTaF4JQXFCprRTLdGa",
  "key26": "NXR5zGWnivdaiFX4CSAk3PbZKBzg2PSKkHsB76Y3NpWp6PmNSVd8JMTJmzn5ZWuWobMhkR3jdz7yYk9RKB8mLUJ",
  "key27": "3F9QRodvA1LoK1gdVGfEDNE8kW9ysLW8ZUPzBuXK6j6z5MjRTGvQQLZYybkrzDYTHDbkxJxYb4Y5jUzzjreafwbz",
  "key28": "3J3FdFpWYD1NKk6itY9fPZjs7ChxTwaMFUoiDtgA3swmRQjzudEtmNuNcJc84QsUumNrnuoS2PHFB7Trewu22JX9",
  "key29": "2idQ8e72eQHEwQT8A8xK34855Za1qPzF4YhiGH6vLiiDG3JsEhxZP36JPWrkNjvCbT1ZdKxFnphSDgYsjBsEJMfA",
  "key30": "2NmAQmZY3q8AGRNiyFa8YsqxZu7rURmor28zepcJTSpJeQuyAeLNBXn164NeBTQFFwjyWtLp35bLHDgK4WssebaF",
  "key31": "sptxWCfG4xMQZdqPkDLufWtHZWkNHJ4QC7KuCYA44T7caxLpKXry6HaQrVP1iU1rLTqsKdU1BKmKBUptm2ZuKf3",
  "key32": "4XKfdhWbnvGdWuWTDmgPgREqjtLt4bXoTFgiKDa2ZbKWX2vmxcG3s7XfQcnYWeYkkRLR2AoM6pDZyKv8DRBeshQ3",
  "key33": "3NQzmkUip7wGWzMcMQfjc9Wm3v3vxNiq46u4z46MHpgA4yhQb94vM3k87QbeYmXuJ5SjV9UZ6Vh21gGozJrKhQMD",
  "key34": "316yCGPSBLu4TV14bYJ587vNmASL3NayG9YnKKuoPw8dTZfwVVJGyA1v2qBewkKsxXmfBouY92EwbCQCfwREugsu"
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
