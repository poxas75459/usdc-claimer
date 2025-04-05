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
    "5RWUT4Q7AP78ky3C7onMi5o5XpPZKC3Mt4mGMMopH5zEE7N6R8NERV4VZ577HMkaZ9uRneaUqXQfyfJ2eywMzWps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKeg5uLUPZA4GZQ4Suk8JNSq75kALX3Ldod1iZqHdnzUMxAPpubWBPqZsLqpZp18VagQ75SB5abiU7xttgGViD1",
  "key1": "5LZPcxgtEMQkT1oGRsEnY8ct7ikDTFUXj4MhzDVtFEbFWkwm1iNUpHT26JuU9bS99MPpbFfEVRHWgA4VffgTtLVV",
  "key2": "jo3g436u6e8fsLdfGRKTE6sbDyjBpwRyJF2hvESPjVCh4JPTyj3FiLUhivMBgmmPFxMJZumPRLnwsnXuyz9KrCX",
  "key3": "27GueM3wMWaMyeHFjUdQYKv33HstdFFp2qhB3ZJyGgmcLSTb1u7CLBzmw3Kcz21PFSo5c3i9gHsox9Y5YmrVNuSe",
  "key4": "35j4D81TR4eDNu8VZEuXJF3J5TuRkLZaVa9mpWfRM24hF7csC8aQ7xVucT3BhTwvYy9dTrF21LkatZfWq73KRZKS",
  "key5": "5MKmYqTw6fsEhuPcn67JmPB1WnbkXEeDY4YDQuY9HW84gc112GfoXUS9HMtp9QFck6SsLhLFVfu7AB88HfQPao3p",
  "key6": "5oEpQ8ExDwU7xAuSRKMfJ93egGWVYeW2vB3Kyo7YbS8YJpsNgtucwZuVQKNozFWWrP1QbZBJSZtL41oNWyS2ZCGA",
  "key7": "jwCNcRU3TQ4yRircgF6YezXtTt5mSCjCLQFswiqM2VYX2osV8vWywyowthzKiDTDEyMQC1o5isQoEN6MgikLksE",
  "key8": "3ZGmX84EYrf7wsZfVRskwwm95feCs6h7s2ZhUTShsuRXTDrL1cMytNLcHfRHUYGak75eNFVXg7sET3QQvjJFPPyh",
  "key9": "41jx14TSftoxaFqtCyBBY12aJzq1hjkDuzHvdFBB4KbKAPdimvpcPTXxLvyUpzkg2QnXK1VkxQzJWyuhrxFD2enS",
  "key10": "foGEs7ZpSjZQ2WJmnQbLT3cWNjAUR2cN1M7qfF3CrKtVK5X7tTFRnLrFUdmoZjk26nwPUzViaTM7oeewTs1FaAs",
  "key11": "3j2z3X2YWjEyvvFoEvUdqPzbztFxta3duHLvXj8y3u54PhbCimKL3tdFtnY2xTSEW8uooTUcoZbR8ERJrxeZndv4",
  "key12": "3fYu6TSGEuKZPott4ZiBXrpKp6cR1XzUyzPwnUowPJbabNaosoCvYz2ZEpd9cqTt6eqnW4Jky3hPC93sLattWVSQ",
  "key13": "m1fujjbDCifp9GCvUzt9kyYqh2EaE8Y89z4DhWQB4j943aSTGtS8oR16iNWqyvthZYJx8Z7yCMr8DAb6Sin8ztY",
  "key14": "5J4brFqe6zXT9BUv6wxSWoTr6EVRXfYCH1j9M62z5RpMTgbwdS1b8ZZ9FjqzKei1VAgRNp4JtzCnb1cyhkqDsvp1",
  "key15": "2ZxwnqoEo6NZv4oenoyVc21cwt5FZ3DQA8W65UDGz1zaiHsbGLcCy9K4StFBdFc3AkidKRev4Pe8nMFwKVbUEjKp",
  "key16": "29ySdTLmQAzZ873iyQoYoi8U1ondBraiKwSncXa5zH6iSezL1piz3icHKw3cF4gDVatZnLoZDrgHVVZZby7YVhPc",
  "key17": "3EcgeRKfw8uUuoqCXLyChjM6ojPRVphNALj6UbTscYzjq1s4HYQcS7NXLdK3tVeN163KcmypHtnwL9gkycL7SVSH",
  "key18": "3pm3rnpPgVNc7YUtF8cCQhWD2zPBYUJooTKZLMJthDx1hFNEXTtjC71QWCdv58eWDbxLJs1GQshaXx4XQL9TXnD2",
  "key19": "5yrMChZDSn6YpSPY9AZTxoU4YuVn1Y99pu2HNTqzKvGq6qAKKvYFUqTceFZ24NcHEqkn68AJL5dbuRt49g6MjwDj",
  "key20": "5N6qr16ZXedqTDak1ymB1DEQG8yGeF4Qv9fyefqjBZ95sU82C9V1rSH6TVhXYiUmD3gGojmkxtnx1B5tCTFTXMx9",
  "key21": "2M7c2TZsC2Ts34Y9vE5zEyBC9S2QvvZKnh9zBZjw1F1ivcwk2mCZqKx2nDd7JHUXbo8UWHkJWTLY3PiTZathunax",
  "key22": "5Umczuc4oJsr1Bv5ybahGUnJHmfTeBxUkVpRmvu8HDpZwRi4qhNdNyAES3vaqpBKrjGNgFr8BK7tCnNpAJjooq4n",
  "key23": "36bq7wdX4xTuXQqTKsiWxeJNH4QZ6wkptixTnBuDiean2c4Hhi9UouPDGBBKDpB8KSVhSkuKMkCJ2efMiX9Bocjf",
  "key24": "2HQgcGvBQ4u8rJMn3WcuT4T6oaGRYXmy7Et9EXCX5au3iEnMckZEUPcsdq4eAT9e9DcYrt3oKkuJh1ZyExFuX4Kt",
  "key25": "24mkRHeKsGnHfHi4jSE8fpptG9RYYrY4GHz4JwnnnGP5Q7xDDotqhaKL3Wz6pP6BYEiCkajaf4p77WhSHWBFqft2",
  "key26": "xbJpmpYLLZ7xFYqjqtwm53t7CQck2NWTYmZ1xpFqGcgZnGWCuG9einXu6FMXnFzQYjQAji2at677M7Jx6V1yiAu",
  "key27": "5Yuy1abU4DcM8UipvT5dFN6jptP6h6MoaTGaKUxCLbzRqSFnmPBiXgdzezHHKP2C4hYs8R6VD8861wPu4hjc5M4q",
  "key28": "47jFQHWWH9VQysiLaUpgQWaZfUEZhbyLkRZ3WXn6c3oEGZ9EEWDvwGxbLcQaQFEoE4aybERzrZuZwd95nRWK5Xrs",
  "key29": "mQWDS6AXF7X1PvxcGQ2n3GDeudB3N6nLYvXt1ZfDCcwJWiND7ep5imfgWR9MsSvuA4Up3ho2mwwgrxGmN6WU1Fc"
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
