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
    "2ysUARC5snXJQxuv1sAb6frddzhyN2XLzgdHevJohxYYSJXwKYKwAQnAibTeqnRDq3bXgKAuhcPwinisg7wPs7ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WLsWvVWptQ3oAgNbUmMHLTYVHfNueVPmA9GN9m3FdDAKCQHNFr8yrpxTbYujjuepF7TK34KYuQyT8Bny9RZRarW",
  "key1": "3537AxPFYirVyQWXrJjibUHvMcWKiACMR9nBgKgn9iH57Xq1PSZDudqjKzRjd6k6pNWNxaX6xGXkBfSpGSb1y9sc",
  "key2": "5tz1D4PzVqS7a22Su65XJR4fE4dKhiyqh8G4gaDq6Li8VbuG925JXhySQjCQPi1p3xH4HTdGk1WATXDzozBSRkF4",
  "key3": "4Xek54hNXH7giKrjJ46XUSEEtgBuNFjK2VBNteKRsgsAoDvs1ZFb41HXCTskYKDRBMdPMKfC1jeDnJHneCUydpwz",
  "key4": "D9wom2JughapKwQVwxKoEMTZzyAoBThrRsMc2BiKtDe7kcY2XtrVC9qENquHBfnqim8WjFjGjH4P9r4TuWMbBCH",
  "key5": "2dykMocRS3arv4KXCVXqUhNWRtt9QvAEHDAhmR2VpZfpY3hpesm3Yh6CRsv5LtnVV6FgCMHgaXgiRMLZq7PoMMti",
  "key6": "4g15CKAHPbLXvN4JPWt2Qa1N7xTg3extUHD4bLAowjhHKWMwqiX184vyyrsniEcpSb3C6ncqhoe1yarS91pJB1CX",
  "key7": "4bggwmUNUqT6sw4pekiCn1AvUXG8qGn7h5i53n1rexLbwXrfQsoNSzT8b67FcJKCApj8AzeSGGyHePYGsQq1HEng",
  "key8": "g2VbRKrC24vRhTNgcuHSnCNahq8naijmKQNJQZHVPCwGjhVXTUpp1FrFULVjVHs7afoRDR3naVg3Da4NAufKC6U",
  "key9": "35rmXFPCFpjySgWmrdXMSsnSpoZY6WR78VwS1iWYuyoH3EM9mXCTo6U55WqiH6q8JJtiTMiVf2wR9KWwKgsb9T2v",
  "key10": "UW3LGEUXktXTovCEy7AqG1tBsfnD8NFXAddqu5PJFhK1KpcTktmpciPbzhCQJBvuerToopooF2TbLuUmKiUSb3C",
  "key11": "3sfyCcgoz7Q22gRBmvGWdqNGQy4UeXiHYonudZ1MW3kpjbUZbfkHwdRSqXhGKz7PChSiSnWU6sTdoKDNkzdPzkdm",
  "key12": "2jtxuMBJz2syfMVujgrW43y6UTfV7X8NzxPqMJqnhnTYn1fQzJfBJzjv4fc2TGDXQRy2wtz2iG9TXvDQioshiCNM",
  "key13": "2RCekL8iwygA3wG8gBMkdxVc7BgEqghs9ZrTkYXDwU8sXUt2vbG6HyBSd1x5bRYr35S1se5nhTNkFDQiPKoGqnoF",
  "key14": "2gEdAZjzpXWmBkCDgmHLnNwREHaxaZXbnLBEJASASKmAWKGsbac9HtaMfq6JcXiNo5g1KmGRDJat5YEbAVMkMb1p",
  "key15": "2si7c4KYc2WTDqnjwVtjhKvXyvYB4oGkUWKfZKGJiLAN96kz4aNcKWrUcg9qSM3yKe87EYyYSSvVApTy2Gu56chW",
  "key16": "4uwguW5Kve7C4tsF23Vo9t4ztLD9635d7izk2prqWivih1Gi9sWDQ8eniYRQ2YjsX3TSHtx5Sa8VZjAGbVS1XL9x",
  "key17": "3pAE4hrDkK6Mr6eriNj99abhNg4gvmZTPh2PzofXo1nanrcNBY57NY1qR7Zy69Y3Yf2JcgDq4tEjGQzNzi2FcNbr",
  "key18": "5e3NHTqB6Vk6jgDUUy5e4z789DiwUaPtnUvXJZVrsGiZD1mWD7JynS7ZPUTmxHTdBkqPZqVKbsLDvvcLmo7747Rz",
  "key19": "5jiDYqTTHR4kFhZpY6w3nTxbSZz3uhe4XHR3ULiMg8TJkViLmTXVrmDAGfRhJGQ6KH76jEQiwS93MyVnFWg9gQ2X",
  "key20": "5ZyLSjLEZHg7fHq84Ca6QMm1uHNBJoYqwYqJVx8hr9FMwJKVMgRFSAw8yzEz4iuwuyy3eki6ERQXoB5EbUG7rTKY",
  "key21": "5KyqHpmD6C2Y6SMxomHdGSHWf6PTR2c4zZZKWH3hXB96MzaddPSfJb5FawnL2ZgV7dB2A2ZvYTRF6btZkEpSXJ1G",
  "key22": "4cGYyooxLZ7PkKKdVaAAqdVyBeAbPWEhDjk6RWPU5x21NkA77xWUTGaNvmRBqfgf5RigUZgrZfM1RZTg2qofKo9w",
  "key23": "62zPY9727GUPe8Q9WmDCQxH9jk1ipQdwwEgce41qVwfKW2AXnsdPfe5bjUD9Kgw9RLGcdEZLHP2JWvmqpA1sm47Y",
  "key24": "4LVQuayxDrMwDpE3UCeQbktJju6zfFWjuWgPbM34XKNmQ3F1xTzHzYdTBF33EKHSxo6er9T3VeLpeEr4Yn27fL2r",
  "key25": "2xua7Ezekoe8FH63pobogRZHC2ELPpGyJiqUyfoeK5vhA4224A2gQv4g6XJG9zSJyAz6ShiNUoNGzoSy7xkSWpCC",
  "key26": "3J4hpchJbon4sjM9pekaudDU1C5Kus8DCKrPRNSAX6jktD6VyV29NSwz5zYiGB1yKYFG62yPF8dRVsGhtpZsd1LD",
  "key27": "4uLd9mfDHEP4UfZcU4emzg6t9UABDC1iLqNhfdduozwzMb99LxAbu9U7CzZQiBBqg9YrxrBrNPaySPReN6uGDEC8",
  "key28": "Soish72ykmavAhJhSuU1nhVQYKbTdSzudAbFK4vTszR9TjjMF8DHb5MBHECP39vuc6cQbH5CLifTqUSvxaStLvE",
  "key29": "3fcszddLQrhEkC4MPiR47hCXAK2Qxq8odqD3xE6uURzn8b87FUpnnL11VDCSZMGXzj6iKwt5f3AChYwBuSDhxoNH",
  "key30": "7v4pbHDnk4NGXDCfXEzPx5ETphb8RSTeCPJMmmAGqGprjFHyEY3cfn1rCXdxA3oTUBTULD6t1i4UyLiiUsynvL7",
  "key31": "5JCHQMfHEyaKgqZcftZK7XvbnNS9HPcjnVMJmorzMZvKhPKFc8AsHuNv9PyYJw9kzbeMZBDxmqg9jSaLwHvThQTM",
  "key32": "3DAp2YRc2RSNitcG7GxArraGQqcUamw7hJvR2wyHmApYw7BRGhQbvHs2icHqqxcvowZ8xk6bTHh8bDYGajBs8TxX",
  "key33": "2TVEXZcnMfyBd5txHbTMNTap9vsTMy4Zr71G3Pv8JK95JYGiFjxwkALqP1XmPux9H8pzHVxnjcqaVR6FjkmTAbrQ",
  "key34": "5bouwd3syooFdM5GBLqgVUm27Vdbwr38UVdK5mPnPDwS7sz9zU8SD9JpSHnnDDrSmkPckdQys5mZ1PNxxchWvNqu",
  "key35": "57G53MqG7uAwpuiwxwMXpGuXhmEw6xbJdgyx8Wm4VffZKyAvoS4cD1UxoUqBJEJkucdJu9Z35FPfTjqf6FtN8RCa",
  "key36": "YqEq2oCit2YYHcSFYq2VnaJx16R9TvQwWHqCS6cQJZJsFVUZdDEdY3YxVF4GpjUPtV7QdUjRo4VvdzFFuWQpn1u",
  "key37": "2EbanuJntPyVoHaXPzRK8A6QXqNRWECbpmL9NUmEAZASUJjqpU8rYn1Uz8E95DMCd7MZtGao2roW6zW9iYC3AsEP",
  "key38": "xzKtFEEb9fkA6YVxJQ7sfv4XPQgMxgv4Q6d3ebnGSxdUiEkVoiXunQactnGNM7KhYPefJP7xoXU38zaXagnvH7X",
  "key39": "qnBcCr4sDuaqNAyMvmrKKiQbhGtUWD8UpKygDESFRTeBvyZA7SFhj5kp5oH6mamHGmj9nHffnYJfgqfEdRowmE1",
  "key40": "D7njJdq23Qzc91xr8tH7RoBx215f1YXN6BQCiQ5n4aojWEBfrrnjHEFvRsm2y3WAu7RPoPtovoVg1LLLXzqBvEt",
  "key41": "4A5vQdjDQVRPGQKBfenkh6Kd1Az7EyZWXvxqRYV5Ydh882YoKKbQq67yWinwgk7BexYPS4zN6v6yK5cmMD6vy78W",
  "key42": "5Jka9yAnZmUozSVeKDvQYZURE23KKncxjDyYvhUvg7ohARnoPLemw3qKRQmpLrtx8x7uuRUeb8K4zrsa25YgXokZ"
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
