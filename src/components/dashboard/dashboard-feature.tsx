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
    "2vtVXccYWhMRfR6ja2LUwVQLf7y1QVoxTBj7aa7PK5M2RCdP136m8q6v8VLLahozmL2NpkG6pD1vnn3a1zXnR7FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLW7aZAfYMmLWgAdi71EvHB3MvSfQV1AmtzpApLPrXFSe6p5YzKpgjjENgDDqHPBP9Q5WUd9gEP5TQVVAic4zwM",
  "key1": "3GDGSutqACjsucRBSbSKp7ScPvdkZUhzYJScnSX5BvErU3CRkrKLQ4JrJR7JfWU2yi7MrA5yXngWVYPKA9X8kHTi",
  "key2": "sozRsHMxr853bgbYKPv9XwSgf9QfRXj6zVEudAvWuMvmSiQGdixQhzdwytJkZE7fDQt6ruk7EKYzZaxjq1g7zAm",
  "key3": "5sbahYNBmoAA5eFv3Mh54qinguwSUFWemDy4xoheEgX4gMNtXw4JUN4w92125MUBHEW1Wd4nRwLx7X6GyXpYMPZt",
  "key4": "2nh4sz835hbVBJgUUeoUGi7TzoJSx31HyoeztNEz4XAgvkADBLjL3khKwDt2vDBniUKAznkkNQcbUEXADFCL6ECZ",
  "key5": "5GnfxysrFafFU9LUoM5F4bjigS1EAgJ4KRpzNCFWT77rd9iCML7pP5nosoFfximHzQ2upAgBqP4pJtWmEwXKhezc",
  "key6": "2CEAxkFSaE2MZZkzYV8XD4xeoG4ko3TEykAx4JcHbUJcXifzJqSZgxxJ3fAVXFrJPDkhmNpLiRck19NSNF9wH5qx",
  "key7": "hL9XoDkutSjQYDM4fEtnC5UZeAdHjuBDLoduohioFVWrzDZDpnXNsk13nvR6XsEKGkkGR7NFYPrTF2FV4cyUSYv",
  "key8": "7yYoKU9g2zrok1CGwYn8bR222Aa7Jw9UMLy6v9ifT5BFvijfqPjnbkPvpBu3iiQbYvor9C21zFtM9hNr8JrrGSU",
  "key9": "2dogY5wsmze3pyiTZD8WeqxPcXYUHutaFcY1dE9TosjrBKrb3S5hvKPXYe1KEus6LVwHftTwF23ZW4gihNHLCTDX",
  "key10": "2o31zsMfmdDy3AQEM9YvvwmpXDKVC81ZQ4tDoPm4CqFqGCBoNvZWYnyXQdUu2qbxF6PLhgFsqGjXn3yUFHJyyzPh",
  "key11": "2YkBBT2tE52roM3RwNp3jrcy4anTE5GRSu7hn3CYYVRwKo7YpcM4tdk7N9BgtoArqbkmtdzgveH7rexeTDZijGq2",
  "key12": "5myXrggDDnknm58YhzGxyu27UiiyRU7uvySivo4CTTFCMm8mNA5PzJKZA98NsGFQSmUvwYoRBmEG1xYGBQShtfdu",
  "key13": "EZgSX6vzajPqkyuR9yYhLCFhjQvkR8f4XVRwYJad5q9tjntMJTQYafEKtmrzn8FCL1SHp9XwicboeHijn7tTMHS",
  "key14": "4J7M9hpFj8bqgytdTcRNmDsEcmL1xU9TMnRqQMA9gjyEDSzfQNeSjVFu1st82ivWey75UURpZUbNwgAYH1nQA8TY",
  "key15": "5heHYjAonG4EWHYPvfQwjVcdp2Pc9EEdM2UWSNCWAaPq9NYcBbECHT6KY7Xt1EKcDCtPXco52f2AyLpUdSLBfK9W",
  "key16": "4W9MjCFnXwFAJTKQqRY8CtVHBw4vzvAXaMF3iY4cHKZGxarh2TGfygArL1sE1jZqJvdAyN3MuWme9BCS8LvacnFk",
  "key17": "5fTjvaHFD9nhn3w6jMcffg7DaA7oiecuHwrR5FiSKTRToiUAph3ndT3MNQuK6bG6TaP6VBhDJ93xCJhz5NnXvn1r",
  "key18": "3EFPSESR16W1Ma8FrrEG6FBHQdKYTiAMgCeWNjd2QXKXnNa2artRvkCo81oGNZC8tFjY8AFPivL8BpLbEkWZ2RUc",
  "key19": "3mTQxt2yrqDfZcerGj5hLij5g94N1avyyAVggecZY4Pw6iMZZdLoF8uzQzEVSTF8jFRWmxrVtv9WS4rnXNqSkS5a",
  "key20": "2DifucxcYAqufZNo7hSN9idzsGyACUouRPNr4X2G7wofzdhRuCQeUqikZUw7UMEfXvHzZDnyk13dYXFajadfiKk4",
  "key21": "59FnujGzU9gZU6VYPEDUKGJtnAZkNHikWn96BFjfTiDFLLt8tBy5q9ovwVF1M1dgU9jYUy535fArJEWRzNFXDpdf",
  "key22": "31eoekdvEMWYc17eja1NvkeWRU7JTJsgmer23cXgk8RDfQGKxMYErrUH6x5k9nHUH2whAM7Cq5gX78iuoKpYcq6w",
  "key23": "28fnaaf3YMW3qxp6GeHNv2MhCziM1bep8NB4QVFnfkySGRE3g497JiMqpNTQqYTXswPL1TghScDmV7aW6WejkjQc",
  "key24": "2Hk5nWbgsd6t2sX41cUetboJyNH6L3FinnsX1rzTZMozLSB6zC7mKSvr3sBN7KFMzrSAa91aigu9QDZwVk6foRuf",
  "key25": "3mgYLMCv3arugKfEtgukwqTxfySEEHRxTQ11vPNPrXHEkWcoRxv3WPb7ahZwkyzR2BokgxC4Wbg5w3HkJZfquYxN",
  "key26": "2bPeqtbepgtsYuqDrUcaH8c2rau7sraxHqLXLEcdDQMCPcDmYB5vXmwBYbhiwWrxJvEHAtRWr5zzZEGZr4ydFZTX"
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
