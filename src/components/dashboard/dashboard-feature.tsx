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
    "Kvj5Uu9m3Ure33KEZUAmMwFSedvVppGeZtNK83RR83YHLmvDzRxtDwewrnFB5BHCtk5zE4nkA3UCtS19TpY9pZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBM5xrAznCcgMw6NRG2H6pbvpwNZoNnM1jsSn3okDrErWjbkZQUC434CMGwLAfG9oaLn53hkngKEX4PARkXibVU",
  "key1": "33MDjMwwfCcbAfLva5M8kWgmnigKwGkh3hDu8RqXA7gAZFHxPTuzwnJmuQeCYJWK6yAPikmzDj4ZipjPbDPTJsPn",
  "key2": "4EkYiaEMDP6iMBsFMaz6fhJtwQkuK3c4566fPnPnnwfeTXFiocvZh6uMWUgeVUU8LMXv3igC4JuLXtrqi3hmktba",
  "key3": "4dWzdS54yAuAdiDMWtTz3W1NSHXQSFctuB2jeakjiR5wBaF2dJdzrYztY9VyaefzbyoGBaGdZ5FqXwiUEbgE1jep",
  "key4": "53nLHNJbT4VNoYUZ1mrm2Q77UCgnjpbKFpxHQXre6YYuJ3t2vmQQyuawNmaJEtmb6JYqUh8Tv2VpjkNuz7c317Dv",
  "key5": "2VJQQkBhMb84BaE4EThyBoGPKFxiqP7ZJCymBu9rqBhz4Fak497KvyvPsZo3itWPjGSeNvz21Du4fPJfoWobYSJ8",
  "key6": "4yNUG6xZfHjjtm9KA9894GMkNV9zBqkbaBaBKdNu5zHLx7eyy2PWkBP28Rk93Nm6DsayDHmcRX2YJsTrcVYLv3R4",
  "key7": "3fsY2N89MZ9d7JWjjyy54vRnB3DwGXAfU6nNvqsPNTd5svHZKviCEEz1LkHfnbpwjXHJKr1vTxUNB6gEQi4VZoxu",
  "key8": "5Ke8YfVhBhu8CPSnpJjRT7J3e91sFYXwuLZ5chxPPjv8pqR7jnsuvLEXbtvPo738sPVGf1rWnw6dgtD4LsrNJCvA",
  "key9": "5mKeqNmt5QENc3eJnn5vrBhLz2zc5qZbUMfdLtGCgou42rUqkfxM8nPT2H8yrjPL9FkiY4R2nDTGcg4nDd4Be6WG",
  "key10": "5zEwsNAHHAjYPjweLc549EkKi2r35WJzPViyojhCMJXFKQMrqUJ9z7biiNnKuM1WKKAQ9YaFxbdUoXRV8LDeTMYZ",
  "key11": "4JwYCEFrNWLaJzYueHAG9wpZXbNJgn8NFWBA6FE3fzeyv23tCBfx4QuVv1S3PeuQFWsuGrjcPtacZCvw2NHQvGMT",
  "key12": "Kw2wkPjffXbYMArYcnMNmy8Kbu4N6B9YkML8P6f65v6D5kfY3XdozYYk1z7fgffrcvkyBYkSoD9Qe7nr7YuTgcR",
  "key13": "4b7yMhyWe9hSCSvTEfjnqfv23SwDstxntRv46Vbm4UYFzuBbQfQP2Mqw3fa8wPr6rpPSnwcscdHNNnqb9p2FZeQL",
  "key14": "TjPRwTYS46WW26Vcq3BidwxvxRCjfASrixz61AYBo42Xj3xNd31wLj7MCXdtqtjKzRokS1N78948kAChJh7F34y",
  "key15": "4YDY9oM3qMPPzWoBwzJt8yNEp1eE5vFnt4SrzLAovQGzNh49o1HU9mfibcNkzQsyVmMjMGZpEqN4xxCWXnPjZCS8",
  "key16": "4aEK9XmSqX1NQTk5bKyXzzXpyaKSh9wnMnGo2fo8i2ukQnST4KCeZCQk5kkoGMV1gNJG3GNviVXNEDqFMsJ9jtm9",
  "key17": "67mxn9BPhPVe1rvg7wkJznnzhquhrBxF3ULUfMTPc1Wf6wC7B6iDcEawJoLDeDPGRWvie4zNjvSKUCJqtXkW5kBt",
  "key18": "2TWjjr5xp1x5W9E8nfPMXxrLjdiYPGgh3wyFHzbYo1rb1RLUtpbPzcEV8GKRab3NNKVSSV2efWKEcWuDMtoqPmYd",
  "key19": "3dvXbDosaQQspiRLsjbNhrPpMyTxy1zwdrzQpxbKAQZYe6JwujnnNCuysnGbT6PjduwQnu7ucKj6kKRtVUhLBjTJ",
  "key20": "67JLefkjEBcMf86AKUvPUkLQEZCspRZh5qD6rrN2USMXwzFqGECLhCwRcXLGpkYnVRjvxBvyi7Eh9yJfEHzqYWzN",
  "key21": "5ZowptLxLTy3P5kfmBG75LWTuhKFzbAD4nAQhzL4zeKJuY3AnHkMcSsg4rkfJwjSBG22ZUNowhLouxKqxuSe78A4",
  "key22": "2wBb1Uw9E4ZopwDGQMeUrxbcSr7GTtsPVCXEym3CzuK5bYvd8GrSLFNTjJytuHSPKzXYW1AFJgvMktJZ9U3tnQvo",
  "key23": "5nqghQie2Ez4YiTCKTPXgy8KJNYfY1vhDqEhLFMCXRNLVFzXaJyAaPqJvz2ayEAEtCSpCt1aNvtsSCAQb4tSqDVa",
  "key24": "28hUQgn1h5DZrkkynPL5ZRpxN5wmqhNy92LRLUTGBa7Mf9iQZWVdsdbBt2pc5MYPyCouxJ1tHtCRETp9RMPQvF44",
  "key25": "5R1P6GcwZX2Hgx5G8Utzx4xdEWj3HyxeqQeHyDyQ5T4j8RYZdwSyTcas9Xs7BEbyqu93RhWMR6JYTTb24jjFmgmt",
  "key26": "32jMaTRR8tcNyPekWQnpqfEdCW5Xyyxqmy8D9ibaXdFfdpProJ1MXXhyqZF3NRssiMzgd5VRpmY7Wi8wRJWScuwa",
  "key27": "51apEF8ccGDfpPK63hmF2XDUPkX461rtuK7SpMSKjE1kFMKmakpA5J3N6T5EnAzF8q119cHmcNaCBJng8UYzJsAX",
  "key28": "UvG29uXFXyRWLCdUikJBecHn6AEDWBwdu4JrBJPQqct6NjgrLiionCK4JfkiJYtdoG7acHTjWAKFNxawD6A3yDv",
  "key29": "3GCKcYGkexJK3PB8e8F897CsakyUKnavE87NNd1Dyg9uiT86LUwPgZbbTNbKBRDx5ZNhYdxZz6LJSirfbygYGE8Y",
  "key30": "CSy4Q9pRKgUE1Ks6PquAJcdVVsrKzH5fTu7bQTuzzUQQ9fVsMexocHVWGnFQGJgLgYHRaaAVSuZb5aZ3HrHtdzh",
  "key31": "293BSiLrFGq4RqGkoaFyDvrqK3g4ZWJX7S56G3hw1UZqoziPL6KZKG9xa2AP27foUivXQNzBxXtAQP2QWuhPvZCC",
  "key32": "64ck6bmGcuXnrKL7LpgKAjrgpDH4khtX8T8BDUumU2pAEtpVLwF7CmFdTi7pmXcHpyY1BkDeQzrApsdx2ZN88Vwp",
  "key33": "3tWMjAAaQJiwDAQqNqyKGVj2ghxFUxpSPCYiNh9BLCLAKP7ZXSf7sXm8EhxHzjkpbnrJgYmNWBJ98bcsheujsefz",
  "key34": "3LZwUZcsb3H61MaHiVT2F4e8Ws9tEfvUxDGRvPzpNLQzwqpFRWaXnYye6admjRhtgNqUjzsjQR24JD5b1gnmxvwQ",
  "key35": "5fByokCZmGLVkeVjMsiUQ1ScqzRWg3vCB7N2yZco8Ya5HHMQFkrfTrjCdS8wERXL1E2DyP6EWm4quRtRcTkDapQh",
  "key36": "2UnBboQ6MNWketTe8AzN1oeGLZT7K6ju75QxQm95AuAN46BxNzcLMPgwoU3e8yNfNE2PVfWSqDjy4CQBP34RKpyT",
  "key37": "kSW52rNAfRm7SBUoo8KbNBrm4ok7eXwDj3zZAaWAYJp3b4tiy3qPmTtTpPEwefB8QeingX8vJA4C5VKfshQPiTC",
  "key38": "5PeoEG6DyWw6tT4DZf5CoeEJH827DK2J3jb1HaGQiLkbDKcDA4y536DYfR7iSgGwq6ZZUUeR3UFKwXuzLwUo5gRk"
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
