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
    "5jRGuzZtYR3cGfBsJhwNvzKGhArRZWJYhuL1egVK6jcn9PmPuMiVUKjM3EdB9b2emcnReZNGrBXrKKN7DqhuC1BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTXSnRL8581VF3XT7atX3SCCXH8ei6PwQHLf2ASVofAnkDom2PXaj4ULgsGbkZDGQPEWNWEPoYQX872gcyVTPQK",
  "key1": "5E3SNW8F7ZcmRtngyN3P736v68amYuU7d9df5gbreztJC3muGfiPYvvYRSAJqudaycbGqfMZ1vLuJ7VtJbZNb2HN",
  "key2": "5aPJsf1mCXgFPjEPjKZaVsN8uQmTTevAycVLPP2JxgjFF9v8WbJ2t6Yaq57PPKjbnJvq5wHWAtjq6SgSnT8MiPCu",
  "key3": "2VUgLuZPL6fmXLdMqmqE8H8Pgvxt3CnXfxzpCrt1CJp2KbCYB9gjj4gxeaQxsiseSwkco2HTJVXJcoFXpsXmxBFK",
  "key4": "2u8F91W9QTeiD1hoRGwwDAGjgD86DwcCsRVyq6xRNidA7ohEfo1Sfiis4KNruzEcDKKxcvMWeQU6FUMn7krQNfod",
  "key5": "2n16rPm8R413UCerJ6WDDHeaeeQvqY4cKsuP1hH89XcmDqRDtmjY1MvYFAQpKe1LfVqM8oPCeZwukUKKUYqcrY8k",
  "key6": "5FbwdgDezaX1gRpocmbD7CqxB3sswCVNcNThWimYU6PSGP7ix1QviaQTCYiji2WNd8LPej5xJXEHZLcUNLgm5WTP",
  "key7": "2eyDAfjZH8MqmZS5tuxfWXoL6H6sM5jHQVf6xwefXM7j7CUXstvsRGLASEwgnkaRMXHEoQ4kxDUaje3C4goFynvC",
  "key8": "4Af4f7y1WDZfMWnKrXsfpVoKdpLjqv5joGc3BpUHxGc3PzYSy18dYNJ9js6xSv73fzpvbRyZVzueVtv4pQBXDXLF",
  "key9": "63F6g3rf2h6VWc9fYY16c2NoyPX29a6Wxk7qp5JMkAZwM6VwgaVjeR6iPhnKYWQBeJnhcsUpfUXVCuE9AhrPvRMP",
  "key10": "queLr7pnfMhmiHJvoLS7T2f7XWQAaYcGZKDZc4emS1yen6BVbHYfAsxjc94QNWbm68w1w4DDD3kEmXwsG8ethgg",
  "key11": "p5BbLBkXYTAk6shLQkotqfVVbWpNdn9tujkE1UKDZHR9mSpe5bFrzoCGDSAvg6dpZ6bW9ZadoPu3sgHdE6jJvCz",
  "key12": "3T3x1SSWjZoLYX8hQKiBwcRawFpWerEpgnJos5d5Vc9nsEDFgzCueYiyKaEjUoVNysYL1FjG7HTifuUrfYCSvZvV",
  "key13": "3jsqCMd48A9YPXtYvMCUwqq3D2TwHpnCFzFnhUVeEBDrXi9kWTsZorgRMrLcEzDNnZDwBY6M16HYAq4G9HXNMAVg",
  "key14": "3UoiRge5Q79uqioE8nSYYQ9gj7xwQLpk92iUXbeKPMh24uHTJnnu4XNksiGzTyMbcWNvjv1nofy7RPjobmjrDWu9",
  "key15": "3d4w9grCN9EHsqtriXbQruGmTG1o6S9E1yd7cEushxxPEamTMtqaEo9Lxi6t3kWzffLvrJZnT4jQ7fUty9uk7opy",
  "key16": "2zWfoXEGdqVFAzEWgHRtjQxQUp98C4b3iueCRi6gqbQ73gQttwKFn4gU7xe7sHjMuUdi1UV24PzyaieXbCYNQ1q5",
  "key17": "61t19HLh7RUhzsfbHih6HSxpi5GGJRBRjMZGD7ZvrEwJmAvCVUs9vTknZM4JR551UFkxn6z5gP8WR1kC62DuZMyX",
  "key18": "4gq5kZUqfbfbdZLoiVGQVD6KzP1dmBh9tAvbbcgfjJmsk1FCG2c8KVeqUuD5cQ3QgrikjUknszjWFNbXVpm6hq98",
  "key19": "5xjsT8YjDhoJmJFmJ3U5bLDqDPYCJQnmzGZkidhnk43gGdLqXCDdTmJQYc3kgNFVJPTip8utNfU5NDYNEzjR9rPC",
  "key20": "3c55cTgJ32Wk7L58GThYXgQ82LV5ugWRSGrdFGXUUFqJ4eurJgE42HyA3v6SRqB4QvrELGpngcpPa9971CorrQ7y",
  "key21": "6bUH9f1jRBajfdnZ76Q1t85b2ex1a9Wj8jRcxZS9ysHq9rh2pR6EkzQrBDEpefqpWFkGhAqEGbMJheQZ6Av3NYr",
  "key22": "5ouidAMPnxY4MLKdV16JVYL3ugFi9Zqxn32xyDNmrukMq7XFFHPXDExoA8uLixZThDWPSLjVtK71p598aVHBDQQa",
  "key23": "2Nm7cGpwXrHGkfFwJBT7XQuYHThS7EfGEZY9ubTtQX5XgJXzE8DjWKkUDHKa4sjLpwHScZZNNoqJTWaCDeqmQojT",
  "key24": "4qQ6487qTm1PyTmxmGJEmi9z4MgbbnJMcrDP6Pw5end2pwECW2dKkDYdf2yGAZuBksmemRoNeBmCGxksDcQPRBzD",
  "key25": "2wLDkjRd4bnt8iWni3tiURGByTBTqS3JqNAcWjhwFtnCBWxCjBUBZc3EfuTVt3vud8AnhzzcBDkXPKTW6aKUXKhf",
  "key26": "4X4m2x1GpPphmXS6EsjiTKEPRGRJ8fLCz4mryAGGKHcayS5Vq8DQvmJTWskNs2Nir3NmADE8LTThuPf96c9bdNLA",
  "key27": "4f3sVrC7MDNuwuxA7EG3WotgrPVGSZUd3SzF6rScEsTcvoTvYqdodnzk4Xg5sWFMKu6WcS27uXsX9Qu8eqe51ir5",
  "key28": "4wj1VC844ARDX7FpCbzzyXVrTbLBYwPTbkg8GRXCKEQghR5ZGAgUaqdaeMKNCwbTWSny1fkBHfsQxMeNw7Yja25Q",
  "key29": "4N3nYc8LS5XuaTsspJKvCpUuJzYuLRdZyjndN3aGREhuR7ActhJ24oVm3HycGEkKsJKShR2aUCXCACg8SDnB5XpA",
  "key30": "4J9oKvNaJWkVoKQsyR7LzRZSBeoworfBhRXet4yaU4de3vrL7XnvUWoE9Q4vE4uVVjgzMRmGD5F5xAN2AFtaAbCF",
  "key31": "x6C2ireYvthY8Ah2HfN7BM9WW6ApY3L9BrhbYYr3Ewe6Zq2u9DVEN7htFEc3dL34CZ8JwcXrmr4hPNzTMXQ4ZRC",
  "key32": "4WJ5rHVn2wa2FTdbpK6KjJFXb9YfkdajVGg11ziUravdWRdixnbJeWJ9ADSqeqFyDpDBFzQrvafbe1MQfV6UKS3n",
  "key33": "4UYkEp9LGGxc5ec4qwmh1XyN66Fur3ToYVauok89ZmFxTdJhf1LM3kvSMCpsVj4HQp8nngW1RGFWxNE3yeADF61v"
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
