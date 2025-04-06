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
    "5GvwHxTWuWTostZhf1RaLvCDDRy8GFnpy1ERPYGin2hRPvB1g1RXuDTHsfMjFRMrsfJMpJ3tDD5KvZNa3xP2qhw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jv8uuUy428KXzxYXHKZd5MbGyVfPx8tSgCfBHkJorWRCQ8fNeGuFTkgf9kKa9vvUyMzgSL8cK1QMuNrY3L4ng7g",
  "key1": "3rUN2yYwPbwvNgjBBSujcX24VMPrNfP4AJnjLAzfJ68Qv6jSdYdCjkv8oh5WeRV4zbdTet28LAVJ6rr4aRmvJgjA",
  "key2": "2hMa5a3nRhqM344ufa9XxUQnbVv12exCJWD3LGYVfw5vTLbrgzqeMcitVgsBg2T2hyJMGxXKCF2var7tuPGMwyRb",
  "key3": "29Eap8bhuQCT9zPC81fDkS4zLJu6WczXnfQVZErst8ZsKuyxGLXzqexucZGgwdbq14YevCT3iKLY8te3epBJT1FG",
  "key4": "2eVFKvnPFW3WKCiqaZSU8jLB6izJWMRcbpobNSobgRqBQn6F9VzNVNYt988YDWWfnbWevfKuy4hecVAr76YVX2N4",
  "key5": "2WS8qKTTkJQsbdGsmkSdpJ5kGvnPAVAPKpVGMoWzYMQzjYRtpoHtgJ26GRZCdfYbjHHQKx8GzBonJCQLAicGyAWn",
  "key6": "28dnziowf6vaD75MwibNrs9QdWJTMRxSmgzEJf81KR4YM4V9yR9ztHcg3TueJdMLWSTNvvYbRTgbm9zkHZR2EpNw",
  "key7": "5UJ2q5MMR9Pw883BsqXF8QdWDzz21dsGJLvgw2GuJ1PxNHxMx98Q83YTBSn94DCsB3RrQXHbCRwUoRp2TrtF6mAq",
  "key8": "5d9UaLuRnks85QCtNdkCBDjQBAdkij6VqdDuUNvTr9r9Ys68G2ufmncMuxcUwg8kanEMpnEuGhDDRj4uQEzG2uyY",
  "key9": "22H7SXjb5tZoog481Dwn6y3uZAB7fXmoLzo14Zudb3riXVU1Savk9omJwJFkaHYikGwigWt72fMLMabzD4Z63LmE",
  "key10": "4WUYK4bPfuuX5BhY6oLpF8bgSwRNKw6AJRczisoZqnVeWZNVCMPcVJ87R2NhvKFtAXdktAzF52i9jZ69nEaQUcy4",
  "key11": "3QQ3xbFJ9s4qMKmCh45TbuT6XdnMtW7TbsdZmQKqDwAE29gM3UJF1QdLpwb6fKmjejMPdcqYgsNv2KSq7exQhQ8E",
  "key12": "BXJfhQCbts3eRHASvFgCcSKCpdh5tAJXcTFb9uPHaiooMGmGALjYVZwqVyZhmk8EPq3ZFUF9jiovtz5zPLtKYc7",
  "key13": "2RjWRWS9Nx3ASfcDaoJ6YvzV1wYX4NoUxNDZKHjWsgDmSjFeAHyXw8JmxXnyei8DjJYccgTQyibB9qwfWuv8Jxhj",
  "key14": "5r2YtWky8KuW4zpED3bwvddRetn5mU1noq8sACr9rjrui596MqvZfciimDT7Y1B5ZLtrpGLuuerrLnBDKPD44K9G",
  "key15": "4xYcFyzdmwpvG65RAg7b2gs9PUhRzFPq9gmMTJzLEFGZbX6QCe7JZTJN625GMpN5FGtUMtCbm2a6tg6Tz37PdnM7",
  "key16": "5Qse3vGqapdLDD3HDD5whr6TtsfB2EWFc1YkSkBUfwsgWpZjXGFHNymYJwKFgSUMGhQJmBE1nv8vmqSARG8yiDoo",
  "key17": "3gfHWbY21rnVF6X718oDcJqGmVR1j249YAXsdUEJnSLN95JALjffAh9apbY7pdidT5XpFKB879ZR3c7E6pX6d8eF",
  "key18": "rffrbPps6zCydy6oVznTx31hKdwpwxVwMy63nup9DZb7joqVcxGQbUsPfZZcgdPqE8voCwtwcNdERBdvoJxj2Wf",
  "key19": "4zWEN1tkLmSUp2A7rsSwwbHbGe9BhLmG9i2gXS9i5k47jdkpAs2B3A1QRNkhVUfXSHs1cDdpjfxz9KnKEmG3JdaC",
  "key20": "5r4MJ8eczPSSxPww1nMPqStofJYqVXJhUcxBegnX9AwfGY2unM5VDp98EyLF9KXvqRvJqgWh4jMnvvGC7Qi4wvDf",
  "key21": "2BquM3Pe6s2M8tTbsUYqJzAVU5MgHFLxWHpcJ2bSKsdqyPFRg7KuAJhLpZBUd3FrR7gZsCn6m3Z5ay3gribFxQf1",
  "key22": "5NTE4LEnjgPWdYMct2gGGUhEFjF2mmqrWJbfhwNgzPbwbBY6ifJ8HDKrU3LAoiYuT1uLy3CUqnqTGCaPUNiv89Th",
  "key23": "2LoqUr9c6q6Znefh2AjPHfWHgtXyuxzMA9WjoEAwEFpTYha76boTiLxygVcaNbTSa16AgHkyBtqLkjmSvBFLdDdC",
  "key24": "BzbdvTvVGkYCm1y4RziGv2Q6LyZknot3EV5z57PaTJ1f53f2Z66CD2PQtCCQcUhX13zhSibddVTKywmUxZz1695",
  "key25": "2rjnsmnm2ujUFW2yYKxVtUEMA1dScGMzPzmo81jpXqNAtoidiWQ9qE44K8Q6fkcweaaoCAYfLZ5ovSyiixtPg8Db",
  "key26": "5pX3po7qer63ix7dmSvzHQBLcEPmneCgTs4ST3gsCCYrAb8jw9b3PP4Ekmn6cxYSAhXVsiFcDv9G8Fbvbi6FmY8o",
  "key27": "2pXGvsJ5EQVQwm6vnfYpcnEucGn3K8FTXrVZfTNv1g9PV2WXc1QicXqKVFzMQKgX5wmG63imZZ3QjUnS3DZ3GjVa",
  "key28": "5WP5uN366tNDy2qAvW217WSZUXK3j2QnjRvWYcpyiNw9iEbM7SM1Cbya5jsPYcWDY4coeVa1paiY8HwnVHoBzhy",
  "key29": "49sDEhj37h2uh3nVRrqnV7NkRJSatrDZh7w92xkrzcd4yE2oQRsQTnUxfHezWXpmKftyVStGhxeDiDs1ahSvHYTD",
  "key30": "5TvUnXTK1iH6VhzUfn5PPHfCXpgfydHQjCacs1jGLpZNTxtjRoHAGuhNz9B23NGwp5t5Jw7nW8L4QtwARGuXKRaw",
  "key31": "2DhAqt1PTeTe4WHmUBJ9QeiriwpGzaty61GLr3LSGEzLH2W5Fmtp5emHqrYExq3Y2986Y6Jzv287oxd1aqatVx4L",
  "key32": "5DLirNH5ttQCzu5M5f2TiUvpm8kZsQ58bcSZeuhWaZYFjvbm1pzycGvfxmxhRFs27BaLKr9tskjjkHqNzkv6Mt8J",
  "key33": "2vcir7ZXpoGTYWDg5bETWRhBt2cijBRP4HLNcHMQtHtccFXMJfw6c3UoczgxVFSUHcNeMtp8wGbvc99dwvcDVrvd",
  "key34": "Fs9VU9MiL2WKLwBoCBhTH2pWUKZrD4gVLPjmFw1aVVCARcEfZfUmJxGNfLhjKkB9dwe9tbMWp9VkbTWnWN2AHVZ",
  "key35": "2gU8rtMg9W7u4NUMhUaPRRjK9XrJi9ZSvuzWfN9iyMwaF7kj8jMgQq4MAVduHVpUtUAEEQZsdkqt42Z5NjywF2V7",
  "key36": "3NEnzVVsdmvQirQ99KdZao3K71DX9PeafL1rEjJ1d7GzNCrukwTXC4d3MHXrJBHqSKGNcHrRjEH8amE9Qo8oe85J",
  "key37": "mQmyG9e41XWR8Ki5f2nGvrBQqdpu36Um8mezS1p2bkGT4c9TsJQod4omQ6bjwhyEJECvDy7WBDZ5yVFyvz1XWBG",
  "key38": "5LJ9P4Vyu6vr3FdT8jX6uL33qPsfbay82xBknQZpDtuBWAC8W9hWtPMwgJQ3fG6LMcjvBchpXV9dZ8YhHkTxutZx",
  "key39": "2AKfo7D4yLP9FUWYRTG1bnAuy8GUpePqR5jcZ4R3oFxa85X7nVcpaSPerc3d5uZzLs4Lg8wz21BRK5C84KRJi6xT",
  "key40": "3Pjne8efmrVB2UtVpVYypeT3MdPWo5jL4hoatTkazpqzjHwdMPqFsFL6SjhNwcuiJJ8bqsGaYghT6SyDHm7TCLVa",
  "key41": "wtrxqYKsnGRcVyX9EZt9QVwQuZe43MH4LECnaGJVSnEkAKYo42cvTmdmR9MtvH6AisnDbwuJu3HLG95BHja5YCy",
  "key42": "4pFhhNXYmhuax4W7Xbyc2dFqjTJYpVSaGAG8ACcj218tpLvFf3mo9jjMqb6JPg6q6uCe27ijdSDJ21GabJxt17tS",
  "key43": "3pYUt2iCVeQQrZSb2AHTA7m3pySSvUpTTguFZAXkJnedsSEea1UcmAYrzN6RE418HCgToaCCjBCtho8QFXF1bdb6"
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
