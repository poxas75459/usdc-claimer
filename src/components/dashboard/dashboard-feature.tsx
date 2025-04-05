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
    "5nXbHwDMa4wNFGKgWQarXg4YQG6eNj7bdqwuWBLsbq4zhDYJNKhTCYXZgDtusTGXmBUcA1rJ7UpoyKCC6Qq2GVcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MkNyy2LRpgfD3nxBGWY2H1fzbqtgYBz23SfeWV1wpWEhEGc5Ez3XfFw2UxGpfMT5MUm3SZj5iLkRen4Nf2wBCUA",
  "key1": "3sZQdXJaMNeb73KtBv8BuzYro1bT3RrfHAX1CXbpmPrpyu9pkeojTW61WDPi7pTfnrTv7ELoRNiKg4GDVxe7HuFC",
  "key2": "3yYwjKhGAvTdiTsxLsayNd7tNabnwe1RVnuPdJhPnZpGadk5xk4PW83w9Whnqmm86oqfVPWVVKKAS6ep4s6KMafo",
  "key3": "bQcXguwVS8bMS81dKGBnnzNKj2ZkCKwfoQcT2yLf4tAsmYt2j9tzg9oHpBLui9kZFaPSEmy2WzqRfSmQUtRx9pu",
  "key4": "2o3DS2Fc7aGf7gAivLk7Vmjg6BUH3mFcU86noAUnwCbaFwu1Deq22fwaLjQJuh7jNqaJBkm3h55JECifXaBR5xkr",
  "key5": "31yDVbLjqKLXvFQVq9fP67hvDYRnUbtTWkBb1y4nwiX7z2NLRTgxHbCMNhGSEGVczSUh13q8vvbVgVY691enwebW",
  "key6": "2j8KCHGoxfzSqx6xZsNyu15m8581GAMyE8gspQCVs3nvoCudLsXeGKhWZtF5JPZ3ntygmxbMt3d3Fh6VHPdv65UD",
  "key7": "5kjrm4aRkLp6YSKSwRLahhs8sKd5SNAc66orMqNwimhM6iwz8rroBWRqn8kpMQnnjQKmDEeG4QfcduK5Sbmhi3U3",
  "key8": "3afzFVzbzmMfffmLHr22q8pgUVhRhVkHNujcD1p2fZbUipyY9UrKL13EvE9iwEnLE2JwNGPH4mPeV9gi9hBGVNrK",
  "key9": "24RLz22k7crRG4D8EusmwFRKjTW2ZcpJQTFjk8x8yCZG8WvBdH8iDJ7rkmRGSLYY1aQxB4WcfB1LEscxRV9sdo6N",
  "key10": "QUwEMjL4EgXnGzCKgExdd7rBN1YPApVtNyEZjMM6hLX9nPUDUJP7mt7pp4Cd4L1dG43jQsWYk6e8TsssCEfTo6K",
  "key11": "2RaCM7pQpCxjbE7i5c14pAYq7sUDdP2Cvc2zHjMEZNE6xCxuv66K5Q8g3cMwhD4nGtqHaCgvprkSmaTaDLWj9yZa",
  "key12": "AxhXTueVkbWqhudHHmBmExRksgs9PGGf8UF1vVorMdWAASymKbSUkRWTZ2ZuBEHBHMoePAQLhusYpoTmHwWpfZM",
  "key13": "4vJTZ2LMUfPM8wjSKjrA6vAjxjk3h6L68aDhAuRfvZJLhjLswVPVYV5VJe9jbzH9tAQrqJpcpS3jBdEgaQCAwdVy",
  "key14": "3iJDKvAc1N14PTcdsFKp7P1Zhm63fNfEkuBRsir2dJzupCu8GDfM3b2fKjaoSut3NftKEQJjTz2i635VesjPGo9A",
  "key15": "5CxmwvAUYEpWy55rjHfsf2J2UQrmGZKJJo6ZNubayNUXzjCsDd6Js8Eufd3wYXy6gcdsdxLgjxuTmZ47FNgKBNmG",
  "key16": "5EzPJwbs4ELwKN91U91MNHzgHtrjj4VZCndu4WXBMsPuFRGd48vP2qeUDUHAKtep4sQVgAyQdkFcPtJYcKQM2Lzn",
  "key17": "4zh1SxvxXtJkmkiBEPbqoKbXEprKxZTTqXY6obF1hQjms2hEdE8JePSQGC9q7bapfg8LX1hNzGnfgFc9fbfVqatt",
  "key18": "46dWKpenS9jdbrfKmTMJpaxyv5TYTKiVv3VXg5PoPPRCMc4GBrSWzFuEzaodo5xQffEFf2hLVkRzVVEN1LUW8Tek",
  "key19": "4X4vWADNKe3AjW9CAPkodhxundBThVfhjDq8wET5mMd6xAZLACMVGggcTF4Qu6VRdWukb9ug7j7cHnKRg2hjbtjk",
  "key20": "i7fArBBBZzfNUEZKuegkztykErrcke66wegr8mFXAyzkaaSFNPKpXCHJsczCqesUakqdRwzeuQL5Q78oga2YgrN",
  "key21": "46w22jtfs8A4juLwEob2Dczbj8s7CB8bCyEM2ap2npAwH5LgorogeG4VzoeyFayFfVef1X8CGGbomJh8haUM71UP",
  "key22": "rUJrGUhv63C4UPUVZ9KShdmEdcUW21S89LscUmxviPHHh5Q88cBTjXjn4vikzE58zZgzEuh2vpW4ckyMeXNTSqf",
  "key23": "5WA3MiZSoyaVRSofiwRUzuKqY7VYQFYQhHuVpZ6cfjuYa7fUqNNdXQNW6jzA7jQexcVFqVZwjkHNfQ2wK8Mbki4T",
  "key24": "2zamhZsViXrosrsTSSiiS5eYCEBNGPVZmiNs6FZeH3pfttpMccvz2rxTAdyD1LLLGctT7Zz2uvKkcSuEWiyWMkJy",
  "key25": "MDauRu3uho6n8KKE8fatA6ZiqEEqRvKfoZCcDDVC58bTjtXS4rSqvBLtP8pzg2MjdoHEUh5xyetQGCDbsqg7XgM",
  "key26": "5w5fs1TPwcYg6mMCAcZj91gBxFX5Yvyn9VBCCtFgyJt38F4JSYheNXpnxvmwQh9WxepCE2dP5XqccbqfE17vs9M3",
  "key27": "5KFYeQxrZJqpW4Cw5yTRdLcB4KSo1UZEUdJyPAXbDagF2e8vFkN4sDU1E9oWw3MCho5nnjrKZAV3agsL282Dpz9H",
  "key28": "214AJ7UhimSj2zygrAWbrhJ46VqAC8FQq46vJoqzo17gfFcWJ2iA55VQvpXu1BbQ38NtTQGPw4QVRasjQjVo33hP",
  "key29": "2KyAZmLbCtQ6EeqvisakZ96H27JygHu7z1qfmdWmqihQvMCZsHEcDvZ68fsLMDj3NmMY9qXzx3pwx9pk9tTKUFfM",
  "key30": "32742bhX5B3WVH8ChEgjCP7A2iXfRWjY893jLrBAoUvhfMJ5KXyG1aSKp4Zwvr9ssBRyR821GzP57fmFTJtPEXsW",
  "key31": "5kAtPeUoYsNScvnUdgS44fEaR48Zrhs3ZrqSSMMBZuRACBomVCfCxgB54vVFVSnAtMsbeRoxDrF2EQsZGy5gzXdo",
  "key32": "5b4ANn14sNZun4pUrxSKwNkwHgxb3AmXA5KqcP6suKs6umD4WJCRicdNJGNGHQWEmWGHNHS4shRqSYassW85RnAc",
  "key33": "4mVv3VyiUtA8qrkvi2WtcUKk4jnvT2ThshtxPa1AH9KfFzjyfFYbJeFf3HZLnDpKJRiSpM8a3Gxp5nhWPnW7aWcx"
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
