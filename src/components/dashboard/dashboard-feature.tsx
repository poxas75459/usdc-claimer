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
    "4TEdWeaCAbNEuKC2omYVXDFuRUfDLZuGHm2zoahi8pUUb77r4sVXdXjAVL7UPB9LuXoPYyAQ8DhyPjKwJabf8Mu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pe8RWfuCrFKmBF4UUyRwT5E7itXAfM3d3noP2hBcNgurhuzpRFVjck7qAAUvc9GENUsGEdQHvwcEBvajGRdTH9G",
  "key1": "55m5nKphHZk5BxVhqFiJMJugRv2643Hb3AxAuAPmZ9oUan2nNpL87eMZJnqfaw3NjpVgvHVFwXjz9J364FcE4f8b",
  "key2": "5VMZUB3nkzP2U3nzj43hi7zS3RYK3YNMS3h6eTcqt4vfdGxNwV26gpCxV36H7XAHnNnLyNwDpwboKsWKxkGEyytG",
  "key3": "54yzTxZXjktSpSm4NVuQDUqFhRaSMcUNriFh3c79nGBKN4kaknNoVZNtb5ehAKSE9fvtJBaHxc9pcVENRWtYwFDz",
  "key4": "3KrWCx22qGNKmNVMkSMf4KSpuDK8Ldv2mwxvVkvPJ5cnX8VoCsiXqhu1d2S4voW7k2N5J27YaAHmmexBgiM2cNT5",
  "key5": "3YN2sqqNTnXb52ZVxrCgrGwSMVYj5DgtCpDPLtjXPKop98WhiJQbL173SiPHkUS5PnsE2fxyc7eWKdDzoi29QDoX",
  "key6": "5f8REAC7qn5Zei3eDkk7R44ouea8635j6VkAndtyMdDBCMwswGkSJ4h1iYxVmQeLXxisSeWAio7P3ohdjKoN9ug8",
  "key7": "1cs4hEJpHc8Aq68AfCcWGBNdo7Ahn9Q4Jjgb8biwNcqHTRhNcmUo6VEGEddBwZbwpBvQEmdDRH4Kcua2qUSY6XX",
  "key8": "2SY1tUAKF6SC8BifbRzDyKc8cdgMQmRHvKib44L3yeAPMtg9KFZaogPHXY9cJ1itbXopvbHPC5D4xsCS7wnDsQDu",
  "key9": "5wBj6vHNR9hWHPB9w3iJYtX1zHmMHkXaxUMFDkuk996trQ78JRjM2xJH9gjF338xYZBNhHe6CGpHsUYmRRhEtQMQ",
  "key10": "PfDCXmXhr73pMh7nZEdsRHzkT3L9ywCyJtgyGzje1NQvPtkKk3t7RZR5tLgqiawucmhs1jJaEzCvb3hAsL7zkm6",
  "key11": "BoyJyeQxeNYJFkeSepWkbKcmkQxn6GdULy1F45rNvYXM6cDUPo8m39bVZTopedTYi5cVwJmj24n7RtC4c9Pknwt",
  "key12": "4bJKY1gezjf2FQg2X6r6ibzcN9rDbhEsonyg8AvfUvhD9hGfa3BckKJGxDdkHPKvQixJtRPLuHobfCRAu3oQYUhd",
  "key13": "4EHitaEWNULhYEZFjrwwSeP4mCwu1Xvp29U1BXQKXPyDVAnXuZQP6EfQrcmE9vrkiJWRoK2ztHoo52J51zm77ksC",
  "key14": "2m6Yi9nLZsC5qxGpu1YX7CDPCSBRKQhaBH4KAmND2zA2ZqxUHhnyvXUYgk7jyoykHkWHX72VPzeavaavaA6PeHWu",
  "key15": "xUXpj69tpGdyZhXb1JS4P39ZnzpRXWBz4WvkUMJhUGAvZb8Xu4gETSfRxzW21gdFG3nYyHV2qYh86iBVhrZq2q9",
  "key16": "5FNmTvgAWiAYGg2e22A53x6hbNamQvLWcFjAZwoJvN4Vthg6Wf16XjpopS8Dpe9iB2UQeSPEoBkfpstkBogg75a8",
  "key17": "5M7SnsGM8o1ngSe6hy9XV1L5eFDkWdZmSEaQT7ct41f8HAWjtbCJYUZzAo9XsR3fcWuWTX79n7sC9YNqUousd5Xf",
  "key18": "Cqv2myh7Wyon4bzNu94mn7USjJpCAFgrFLb25nFM3SUmVSNneWqSHP3DtTqbRDrpiE5cc59qJ3mptqP7Ez8z9f4",
  "key19": "3jjpEdorHcag7UfJ3dCdBMYzuggQJUTvW16gR9DK2822hQ6LTJqCTcYUAA91VRXgBkjKZRCbJRGwBfyTWjezWaDh",
  "key20": "4cT8YAD8ihMNjvqf13995q2T5xNroZEA4nAdrJNyb9Pcq8Y4TRiftjzXBpLrga83MMXcz1ifa2vdX16VsRU4vt3x",
  "key21": "bLco9zhTNJ7boybaxFx6LDSk9vyGrGHgHV4HJp2mbWJwfRtMtEYR2YdCwxjbgC1sfhUNr7KwiBH95g3Yj6ugNQd",
  "key22": "5Pa6ku9eVYLstjrzXHJ7GuDjBFcYVSeiz4ErzcvGvVLfU2mnPmKNTfe2P4LySitQ9KGAMhfTtUHbMRssGFqRiwSJ",
  "key23": "VWbm7Rafz6ckJcGKiFYdaEjMCgQhMLjMbjnAskXmuhELPhGJ5JuynbZrbtxsnjcSNDesHNg8bVawp8XJUxAKH3G",
  "key24": "NxwFXQwpAvrjhPWvde5jpwrWwd8kVxU3zZUv6rBGWkmtGLQxq3ium5DDGq6dvyfb5pnmJxmu1UDRLpsRGPtgUGy",
  "key25": "5YxybgBFxSWewcxinApqTdgqP8vrfk4oKU5xa3deP3dWxdfjv4tMZ67Xh2Gy2dXCSjvTe2zfCXVQKV7nq3bnfrep",
  "key26": "AboRYfkuMwtVdrnbRJ35gvV63kfeS8gK2JxNst6VfHMnHfnZmTkC8MF42farS4XcX6WNFJt34gvVC4E9iiL8gNm",
  "key27": "66uuyycge42pWZmunBzg1ViKnDC4hnu7UD8pUV3YE8DJ86hz2nhVSESH1cHigChpiEdXarV17qFowoYqS2UCYAoS",
  "key28": "3XiCo9yLYrsV76GFnNTaepyZYG4jutQYXzUv5zBJc8h81VSeJpYnKz8iLXv5dSWeito5F1XPgksSLkDYN7tvw24c"
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
