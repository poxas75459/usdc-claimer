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
    "5y7QsiF7rSkXv4RSbdzTLRo3CRz8SVttEPc9RkiV6sUb5ShJyAqZkqxSgSmcxfQT4vLev7cJGeBuZwPKv9Bufb9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G5gRLazDczb7BgakZMktd4qBS572n9PifhoVdJL5ujes8CeSBknhTq62W11ujdKXYzqWLQ4NZs16J9Hf4ugCuBG",
  "key1": "2FbLCVuxXnp8qxH34jftUztG8p9DDTWqcpJajc5te4Se7DktphV8BUU8hae85Uj3RqEdvuytTjKFR88BKZWhyjvA",
  "key2": "44MeBQDekysmmUyLSXdkRVpggvGA1U2X4YEhrgW8UvMxvy7znnESHsbEjYE18Tw5P7MhYnDVUg5ESrBD8Lo8g59o",
  "key3": "T1KPpoZgLjMMmwJvJJunRRM8kcjszxpduDT9XHcYXdaozMUisauHgBqU9xvTRb9QbLXTKrZd9iFnRLSZKhYLygt",
  "key4": "CPKa4e8xm4moe6PP6hS8oBBA51AnXVmbLsJLR3CkYAVgkBpn1gEvaAJUdqQb5JY9MATxvb4sx4FiTNXDHoYF1if",
  "key5": "5dWNbm7RbChsNTLtLjpNNpgD5zXT3PJWRND78pP6MYyFjm9ntEQx87W6oq6CcjCSPfxiLXc9gR6YDB6tSt12mU6C",
  "key6": "7t7ssdu7BxKEFw1EYDbddRuzUygYPuYcgULAhNqjxERTxBLoT7W1xVVVEiDSkakTxePSrGxBNnQ4cPv89x9ZL8S",
  "key7": "RHYiEDtB7VrkdjURLTMgeh32tCbTXh816ycHAn64qsKXYiA2LBS9A1f2cVXsYUJH6yoksHJHGktzYkt6Na69cf3",
  "key8": "26FvkpX4a2DcQ9qQKydaCW5jvSsmkLsB6TUxjfKRSM8K56FFtZEfFgfWpt4EfRWqoHsnT83h1KM6B9GbdY4PXCVu",
  "key9": "eK3pQfEcCNYLVX7iHxwghninci3MySP4UerNUPbFtwx5EXsm6oStg6tDoYtWDWoovgE4xp8PmWPfAA4vmqhrqqp",
  "key10": "4GWqERq5iLxttcYWr7jix9YS6h2aikS9tcNAoXRhvkTcZ574uM5ufTfZpTV83JtkhidTCvDWi9xQGYnQWmKrUchB",
  "key11": "7stE3Xs4jVL72h1KawvivpS9vinVSk4cE5gFmgSYk4Fftq7bNwWUVdAtKrq5K743NeEQjQpt4yB66pwiiDMctzS",
  "key12": "v1F4xXAoEgvn5E52MsiPxY2J3NgkZiR63xFKme3Ft1112sKnnfiNDf8jSjgt6MAyzh95snG8YgNY5gCTzGVYx8g",
  "key13": "36rGcg2DorGMbhLKY7eLpRpheMpoMdxpQGcePaS5JJTx475PQsPhdfVcWRiVsNSeQVQYQHGMRAu5xDT7gYhTQJMX",
  "key14": "3yiz6i7rx7ohwfToiiQtgd2N8CYuTWF6HD1xr2zyZ9q7X6Zrx5HhW3NUvnhBBY9FxQPDBVSQcnSnz2k1Znn8Jde5",
  "key15": "2Kd8T7TjkzCbYREvh9ti26CGgzN2W8XYcddPaRwGTaAG3f7byG7FckrhWiGaUVFwiqXtGYrTm2EYUFpXo9WvqFkx",
  "key16": "5Y1cTRYVtpydneXLjoUBEN4n5v56CMXcNGwxJfRpsU9zdHR9fK3TA9S5fKtboCQck6jXnssR4tBMjzx3W8wbUB3x",
  "key17": "3jpE2hj6GYrCes4YvLjYaBfg2TFnfo43YiVnCirZes1kF2QxBWf8UjWJjgviqnkntK4DUtUV2iL2M9er8CDuGze8",
  "key18": "4wiJSgtwn9Ut31vKhcHWMJs4v7irz29nNDGtMqp23ABRyxGRpo7sM4Laqu6wj8rX77DjJzjS3N87RvGYgtx9Ki1P",
  "key19": "29FS8x8k7qCriXEQQmJnXinoJERGq2MxV6a6NBfKC7aqERcBiYrJvG13hZj5wG9eddTaa1Ccq9gDYca1UudCmymm",
  "key20": "4BumJAehZDiQbaphiFJBhQ45a7prKGKUYnfJPADHxTBsWkgtoqy8CYXd3fLT5Z3E8hVZhnCbmBwjNb8wsMiyqjHc",
  "key21": "3TZaXqb9d1AFrGubNF4kiBKMMLvghHB3TWVGNs57rYQ9owbr8Md5j9fxgfpPgkDaA9pEEX6kdmnPmddShiTjZhwj",
  "key22": "5HMPdMHLvXZKQVJ33EpjVQMWJpWFmZLGZTH3WCpxaFMECbtmQhLCpRsLCsAZLQwcG34XPcc4Tnh3SjcrrVsvpqnu",
  "key23": "56XsB9fQCfTBU1xu9pcVVjjZRYSGgWwJuJ4AHquEjDZysvcuSJSMioG1cda5BgwTTicmfnPYKZ8L8FASPw7Q4AQK",
  "key24": "63emVytC4psNLBrvpTwqZnDte62FfBoXZjK6NunAjn23nWAGQjXKxcrJCjxPfkiGov7LNMQeWjrzHiLBbJ8WRiBr",
  "key25": "5RdQrMvURJN2BWWVVEqkuzWRpXTRKAUFaPfhodKEVetzbYi1eWrYTWy2t8gNmj1wK1yuxEoLviNHMojrZ5Z5N9HR",
  "key26": "4nvKdoLjRaGHVauZEX2B4ZjctsRq3RBJiaLR8qjmDGjbwBJPCHpd7uU9gwVj5UP2sPYhf2XdpyBCUpxJyMK5yvqw",
  "key27": "21vkb9kMkVByXj6v8zyX6dzkchsPKUp7bd7pozx7esKUfZdAwUgQFqR3L56i9ZQKcwuN3BKxv3Cfthp1FvhzVSoS",
  "key28": "4o7axdnMko9T1jSHkJ27SYygkPwUJMWj9BANEWazcnPEqtTz8K3U52XU4sfXv6QMSFuBVSCSF2ZKUyszdqFYPaga",
  "key29": "3A8GbRZAXKh6qqVSU6drM9M9xZdUU1dXY1JbPCSak1HNwqwdJscRYQgojsEecKydf1LWtyAJtZukmuMtfWTnXaZd",
  "key30": "5jWKQehe7Zc78boEK8TdZ6B8cmtY5amwfTvJTQEsUeE5yxdSsJx1zDp2EsHwDvX1pg9hwmDQ2NBQwbsJVqq9FQ8T",
  "key31": "2t1x3UmMV7XWaMBg3wcidtohTMJf7nzMDeW5tjuvBVH12bTtbhjs1TFKTHgxypPs99nWLxao5dUh3nkcdx1jMAge",
  "key32": "5nJrgQSb8HBFAaFS2geeyaPMGn1u3ZTL8YVhY4hwnBzLEB6eeQAPGDud2vUD46z5B2hvTiDUNmctAG1fQxeYYKqs",
  "key33": "3HCNuQdL1iKx3Gukos8FZN9eJx4vPkQg7Ri971d4Jvu6W3LFonrFNxUTrYscFumxTpCaugzDsGmNn58x5aLJX9w6",
  "key34": "4VFhdY7cPHKGAuprzAc1TwiFE2MLYe7YehbQpdxM3F79FHhyTGCcG1A8dwFHsQzSo7qHNKyTJKLVvXAbjNRTWzid",
  "key35": "tzNFSUMAkDiCC9uDQpyMPdhjVJdsLebFB4U9amZWhBeqLxijhCESEqRv1cxyPKC9bensDWyiDRTRyEUTZ3sfFf7",
  "key36": "284PxBNsWjBNyJUKb7mTZwoazebuMgSLHNKAq8oDPv8Cd1UQ5U16zCASmDMFvbwejNwYCaoNNukMJ6qG7EkLPfPF",
  "key37": "5a1Gy4gbm4ZZMWzuzPVSR1863ucEHZa8fou7fqAC7fZbA8eXCBmBN5ZHg4Ma2MNV81M4ptNpq2YNk5H1MHufEx7B",
  "key38": "3H3g66JL5GiZAny8BPAE2YdJg4YkEdTwbWVg5UwhKQFZqusM3FCMW37B8feP2qgcLsaQa9y7h2YawA9UBNN1JXpf",
  "key39": "46TCQ2koKrcMYguFxJT7KZpESdfjUZK9thprnMkCRFxY71XrgXA6jze8rgicRBKj1H9JN4SUev6gRTBngDAC1cEs"
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
