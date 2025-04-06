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
    "4vsJAZVTGgZnWEdf55BUzqT4aF9c1a9Jv8KnzJd3sZY2xf8qu56ddCKSRJTtC43jrgViSa1FCq65EA87LCy79HXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLfSf3yWLTzXxVXubkeJZbrMoZ8n6ZEBVYetZYo2RzeckrFbnQnnxEbCkLwD1sLXMCR7DWGQ6HwCj2UDtcv66UZ",
  "key1": "41KiDABKLxw1m8Pe7AzALQw4GM6p2gxqpn3QprzRWAFh7oZgDw5wd6q9iqG9NyzKajDaThvTJt1nHVYK8tXTRi8U",
  "key2": "2pyZSGXpQV2tTKsxm9NjDvtUXbrpXB5eXBXyMgwcmay6P9fLjVuC4y3mAtogpzKwGgXQyuyupc6BcG6tiww367gR",
  "key3": "S2KetELWMyk93SjAuaFpLtcKki3jtpSfognGAhTZK1PPfRCrhSWxGYzC4fqMSdwPqsdKvjKdD7UzAfxbDXdwpKd",
  "key4": "2HREuoy9E9riCTs9pCJYjZ5D8qyriUsUeH2WoJf5An2ePeiTsZZdPXcQ6sofHbfpW9YNexpxo7vmd9VEUZMonxSS",
  "key5": "3mrz25NkaPScNE2Af9cbaJw6gbW4UhHqw8n5YrcfqqwahhPT7LGXkrLibL4by2TwwoWhdhfv3xWDHAWBrmJ2iCVQ",
  "key6": "4Ph147g3jtqES4mwMmMc33Yamafn5DJHr7Ggyy5romQtLwBuR9pKmwHZuzHWqDUDZN8ed6kcE8qk2aCeyLDy6JUP",
  "key7": "hZZHYbyaFgKjYqZjnBe8RTFBqvScbCrbfznKWHcX6s9MTunHn4MetgVFoo9rcLkMvXrZzqx3martwkagEZGzzpX",
  "key8": "4aFBC7mp1uePCqJ8SmPVpU9Unk18kF3ePrMtbKatjobF4CaSnGcHDLgNDyAtLcDFpKzK2UwrCXmDaoqa39ZxUgem",
  "key9": "4J7Lzqii5hDvSRyztDAjTutXvWWq8NzYWj7SpYuQXPEt8QYvp3yb3GWFbF4x4LvJNGXhM4LoKKTrFUfKs1suwhpL",
  "key10": "2qCqM2yj41becUwmFgMun4nMZDLBDDz9Rhx43qSZGuMPQ17vfMoKbKfZ5Zsio791G9kgYojLGAqMitMdgU5oGEct",
  "key11": "5LHJ8BFo7DsgFmyeuGrS3Wf1w3JSmzbLerBmH4tvsf67Ka6bVe7mvSB7BJ4kC6MYTi4wReRdLAKMFRAiT3MZKv24",
  "key12": "27bdzQB45onQ8UXgwvy4s1v7Z7xLatNVf7gzyZ9hpmJLDcd49AGEf5Gk1ynvGBWCvftx2wadgsrJbyL4uhCGdZ46",
  "key13": "3utLmybfamreow8BuY1Zf38BNXC9Lo2AZxn4G7MfwSuHwa9NZ6iF3ocjQytYKxTDwrnfbKzD7TZYGAWKqXs9G8MH",
  "key14": "59RtRoxtvyeM3ja7Rnwb7ezDbz2U8yq1ri7U5cd8PcivRAf3sXfuRyxenJNWwhb2hZAdFpSQ5biMe8h7Pu5bdJw9",
  "key15": "h1kdM8FkWL79rGdt5UoKDju5mRyXJkYMp8h2EtRTTNwWdeZefAL53hgrdcXqBk7jyLfnB4cDfQZwH8bQopKuytq",
  "key16": "5dGs5gh9VUkLo3vcs7QfrJmG4VS1z5txCGNdzzZFhS95PMrQHyhkkT3o2TGoEg2TMw2HmveWT6eBr6Ck9Yy7pRfv",
  "key17": "5aio141mrfMynipJJKUrGh6fdD3Ag9eSYVUVLmVugH4hG5cS2kA6NjPNRFeFTWP6y9EdmBwZMF2Vt82so1maJfXb",
  "key18": "2nY6FuN6YauT376xKyXTP9SttoAQc217uqJHvre6PVWWTjL5VmzwQ3HX4dkPCZmGfqG9HWyPRUNjxYeA3S2AQFfZ",
  "key19": "525oz7bErhT8BTdgYeKZzVsYnVcji5tjD9kR3bqPZuiGBhYPYPPJj4WwLYaz1HzWQuk6EMStB5ZXJXAuJHfxs3ZQ",
  "key20": "TF2upwNQaSjtVg8MAZbKFyG6e4qS7jmRJ1TFpGEAq8xew956W3H2Dq2zAEfBMBHxDJLaAhvtw1g4T5JcuA25LE8",
  "key21": "5Cn7eQuEB2kdz3pMNyDzsw8HRUmwSdXQqdgB5LGtQ9dR7iSoicwCfQ9SEwREfkjhP9Fnk5oy749PvaG7CD5CHxJq",
  "key22": "4PPBMSJpQrCSj6rd4h54G8c1jJWDcPvKYMvUqhxCwwZBYqg17Qz31FsnHpW2yTEc3E6Yr3a4hpVws7p32DYTX1Vi",
  "key23": "tyvGaDHnFxWb49TAHdJtNw93TbV1M33CYQ7GpnRkJHpk1skPwCqzBUkU4pjGMXrqiJFqM3tBwCx3XD8joYqWies",
  "key24": "3UXRS4Ywr9ErMKRWqcw3reCFdSsgdefySMPpQhsPwY78A5YvbX75eUoofXiZNx99XtJ9X9rUrKZ47QVYW1sFY9pc",
  "key25": "3Y9t5eWTk71LEWVJ8rPPGjTnkofikKpDeFAqyum6Hpwh9MsD95vKbQorAjruuE5kSuWi2fNrhgZJnjRRSEYKzwRV",
  "key26": "5qfkhEzN13kJWHR6AcmHEBWzVWCZx2rBXnhhWQbydqNgWkCKmefnmg7WCobi1aoW2PTZZfJmp9ugdPDVGfbP5BRk"
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
