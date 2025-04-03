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
    "kNU76QcwvxUdzNei8rzVj5dewz3Zb2zZX9Kw6LpuU7DjA9eUVXSQqpfWzrzixSSriWARqBzqrexni44uoe5f8nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eD5NDQKnGXME4DBFV7S3bQq56sYzM85S2sg4EBzafisWkeTDsN9dd2wE7ZBYJQ85qZiSweEd9ZeNUp9gRJLsnC6",
  "key1": "53bmv6Pun9R9n7Y623x7uw9kaDPPRMB7QUkFPKHZvJpb2dwGXbBNGAr2hz3ZYVBftMJqunZGLTCR8aMb2LxSH2uP",
  "key2": "5uvqBqqyNwU794kXu89VF7gQMe5sCB6QNccdDEeshXfNb3u8TUv8EtzMuwrRAEjm3CS6yQyPbMLf1dcgsvhhzVfR",
  "key3": "JjJAe4NXcZqfjG4N1bUver48uXozYLLCaKwDKMGyLsLiqnfm96vBoJLXirScNPDdJxUWW88v2mPQsuPiwCHmhUv",
  "key4": "3YBTZnzoALJZbXqMmSzDNfAGhM8Y3XKLKfC6Nqg9iATErgmPjiQoCpDE3saQPjmZdzEo8zMpW4MFx4Jz4skMbDwP",
  "key5": "fEFDgviMtty4PqagvxWDPqBdKrjRAvPzUnHikrHcRj3ZTx7LLHw2RxNepjJwDg1sPJDQkt6ph9nXd6pyqDkMrBg",
  "key6": "4pZrCSuaapiNRkY1GxzN3UCejNm5z8LGCmuWXvSStXzbo6B29GHbVHM7o7mi3WA78WoTeoTqwXrLnGa4pvbhYhgY",
  "key7": "33Wbx3wMzueSpc9EEayzh5AfjBVHbFYmgkit2gYevqgQ7zDRPvQmr2fBgV47EM19E884kXCmhyG6MS9cD69VHyy2",
  "key8": "5ntdsX5FFKgFYpvi1FBaJf1q7JATTGb4RNpBk3iS6srH1mbebf1p1j986RtAzZNjAtun1J5su8sMKmQbSEvJqD9r",
  "key9": "5gUuDYGks7gc1ndancQzar3xFgDsT8MAL5wPjR7NNxKiEjyewMSiWWHF9xdJCiX1M8Q49NZbVTT7oXKFfhqqbRS5",
  "key10": "sYGYBafkZn2e1Uo8UM9ymGq3AxFPx6o9kRa8Y36Z7AmJPFT1h1yVP3T8TwZbbTuSjT6ZYN9rMa97JBq2ep939Fh",
  "key11": "3fFbUhbkb71tMXcEc8ttQ4XTjpLQQ7Li3VnEci8f3j1SBbLMxnFRTW7cCgJm4DR6z98ET5E6jCGpydrsCGBEjuEx",
  "key12": "3uDw653cRJT59TqRDQaZwbECgYSgmH9fgSZsmTNV8DUyQUNLHgV5KLTkAdSDrrSNsezqC48RWaTib9FX1qe77MS7",
  "key13": "5GbZ9cNq7LbmBd7mAzfzvLHCYUJxqao3dx1C9UPAUYXYdBmhwwTjgLMM2CBn3E7M3X6fsBGw5jRHGs5xyRJhA9LN",
  "key14": "4kWTfgP9Fu6rMnrTdSpUgf6ny9AV4BCYNoKAGKpNgAvfyqcbHGdDsuCJzwxBAwA4TtoxQZT1KRy4j2DxNakCc8Ym",
  "key15": "2mvXr92FeEBEFgAc8UUDS3cVppDmUsyXAzSKn5fuNxeBfxm3stVV8GXMtNm6WLBJthJZHZruj463YJ4j6GF4tRry",
  "key16": "4VvBdzQ7x3HEWfZddwwTMAi6NEJs9gJXTTvyves68Ah9bL13K8yFgy35cayEhCaNiu4vReJPAU3nbRhnLhkL2s9g",
  "key17": "5DKjJXihk3o5ujypN5ctuPENngYvkz8TjXzGQJqd7Ws5FKkrxDbG3PKQ9WaxTLxZPgae3YAaZa12pX8H42CcwY8m",
  "key18": "5SRbeypEkt4nLUKz8S5EQEniHVqwVyTe6Beoq2QraY5JWwzbHJKHq3NFFdExj9uKhwouVLFr9QRAdRiyWkZiJUki",
  "key19": "3WzH4m7NuevFkJUoPBXNqaAvWfjKxybSsLLnum5z7P1Qdw7ofevaPC9teUuWnBDJcoJQFDgAM9DCqEnASsuHM2yE",
  "key20": "ryCaibnN8dUPYLMgc2pznwUQrh584iF8v1qrLBSwzjqTBXPXRCY7dywQHffHrjV1YiRRBH7PhDhHeBCGnXwGrmf",
  "key21": "2EEaBoqJvZeWxN6QAJMmehxJD615b5BH4aC2hsdah5LyqZMeLKuuK3jKd6Pyov8WzTUetvxQQ4g8m5bUCp31JjJJ",
  "key22": "6HCDk1t856kmakup2ccweWrJUwmFbPDykRfqJ4eDQBceCq3spfk9pQFgEu8NEL1Yyv2V8bqZoafdtFrpX2P5ra4",
  "key23": "4KJjLL2JhJsaMw3w8DigL9qyHu358TnNGYa9CudNScPZYpbcBHYeyvoZmNjVfsWB7enRSgtQmFxhPk1WC5vhy55Z",
  "key24": "21JSLfvNfatKdUGacDAsjcXZKFyVT3rLW6iMmWznTjwpNRHs8wJrnPtvCThZPuqmibzZksgde85tZMNFgLsrG8ZB",
  "key25": "547sfu9htYr1z9rrExamtma3hnePnD6LCpPPMHcicKCMmk3ELtUW6L7GKY1pCevG9CosMmqewuzaXpoHsYYCbbc",
  "key26": "5BMWNLFUihStqX17qVGJGU67Nra5SBznrkQ5cGKFVq6oB5LAzwwfDe4jZpSkqAjJE7S4pFvZVSt4iS6ka7dJahag",
  "key27": "5u5HoMmUw6sSN2ZxM46QhZNymSWWMSwarr6of6T83F1KVGubFLghKcpYNoX4pk3VbRPBKTr2W7bXPD9FXhQQzBfz"
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
