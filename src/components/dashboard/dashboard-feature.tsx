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
    "5jGFf7EkNvGHwXtHyriP8LkCDxmNcEykEa2wq7iQBZCXruJ537KoKQw2YEXC68j7NqHV8UqAnGFKo5C1fgVTphWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqYdBMZbbm3hvpBMotdvAzNg4uNTQqguZmmgau3F976XizSNLhmKg2Q1LMqCNXwoWsV9pznrXz13ERtjovUEWF8",
  "key1": "2LEDLJ2Sq9ogRDemw2ZiQCk4ViwbNe9ZbQviWzZdmdmoNoRw8dhwd2UgfooX8PeWVmpfSbBozzJW9mwrfZKERV69",
  "key2": "4F2V9qgDhU85pG4umkBErzcJ5N8ShY9iSnvBAuhm91XS7rsEn5MrXsetdB3cRJaeYygzTtb9BzrxqfFhQXLr2EqX",
  "key3": "gKdS6FZLFBLMeWvbV47CGZbunwfh19YF1Aa1KpyJFVdqf4pms7hqRYSWytp7KD8fasuk379Kd3KA2UHGxcWV45S",
  "key4": "4dzLhxJ4x8fzvzwENmp3BJTwQXCJ6iHsRN2sdQnz6C9gwuWppCoZzy4Hb9nAmsXfB6pGU4SSrfNC4FpNoBGziwL4",
  "key5": "5uMb5nmuPsoXiMLgA4YyKBjNrUSw5tiJV7cSwvNaShA75ySWJ2s8JdxnsV5GBw4ofnWJ6miSPiQReruVaFUiH7o7",
  "key6": "q8Yf5eKNjytNNM7TXstpFbmMQbE6kK29QNL3MBv6QNyGibiq89Grj3SksUeJcwohGCUF9HGFVoBFLkRqXejkqRr",
  "key7": "4BbFt9uLqrUGy4mrvEZx2qDSWWS95q6cJxXexMQxFiT928VBUaERQXVC7VT1Jq676ARnUCXGb8K2uBfncuy8PZAx",
  "key8": "5Goa8DzWmBXRAqn1ukSUVQRLQHhZpsHzWvv8dRzrYcPKPzKezSyG7mzjkTBhZzJtPqjoYzMXjTy2azhELMwmU3G5",
  "key9": "4oRhdX9gZ22AxJ4WUwAJ3K2iRRtJh82y7LA48RPipwQmdGX7H3eEKtsRQFWm7ZmxrzFTtZRHwvpnyH2NkYEWLuZK",
  "key10": "6P8ciHEPhyy4GX6xruHPA1Wv27R42DvepAxSbYgLd7EMsyAcXCiSZ6ChADXbHzFc7CEmfBRm2VNqeN3p5tGm93A",
  "key11": "4BVRZjQCApMzndk3TGz9EysTZuvETVvPNqbSmctu7bgATkxMmZAAAhfHD5Lp4YCf7wv6yKqcSVu1LyrnaBVKToSP",
  "key12": "5ZXiqeEexhNtMRERDUi2WCcXMGj6GV7p8cNmeZxiJk1G5jzBriqR94TkRMqndLukZo6mmEVAaoQBZ8EFJxFYTR8N",
  "key13": "2k3i6nAPVpACVaTwsGAbb7AWP1uWnpH7FRpx6Zi2d4G41UfFjWtAHMMz4Exc9HHbfXEqW4LQeStYpqNcLKPkZ7d4",
  "key14": "2CKcci9rimPnM4LKuAdQAHrSFFeH68ze5TF3gRdRLGDEbpA9PVocyeviAh46XV9owrr4yxwPfugBBH6jkXuxY6GT",
  "key15": "5CMFraLa7CtP1vcTNVFTGP8pq27HLvc6AyXpE5aMavQ9tTWEVsCdnc31yBet47uFNrKx3rCpBzkrJEfm549xiNgR",
  "key16": "5M1S7BRqAc866VGf7qVGm7KJJy95A3mE4vxw5VVLcFzyzDFCPQSsQkLybJH47wzschfxJHR72uLHHaPnak2UgzkK",
  "key17": "65DX8kqGPcEAah1XroFN65hSKYC9n1ABTNCXqmXGGDX4WpKWcSSXQvnKrEtjhUenmDkHLeKmjnSGfMK2vr22WV6g",
  "key18": "3xyyxNzyG6L69VXUyDMYpCrpddBYBY8rqqYv9A9RsE8fhzn3fE5m1mo2RKq2AVULczVAPtMe6mZLJfZKocszRgZU",
  "key19": "61Q1JCEUfbJjLQ4qhfGyLdYsqsfQBq4oYRrWdso1rpt5AdsBaTitFAJZb5i3xApnCz5h4Z8XmjDKA3hfdEJ6wp2G",
  "key20": "4HvVnZfAW2j6JaPKTPDJxJzYshYvcGVM65EDuuJGbKqWZ81ZfVed313gwHW3yMKt2WQHMbxnfudTkwX6M2KqMvVP",
  "key21": "3U2dWLnvtyvuH7bokEDBzK5WLPW79r3hj7cXUT3eKJx9oNqthNYxxuHf1AzrQyrejHYEykaivBJWEReSqVjbqbvL",
  "key22": "3ZZ3R34GQZ9XSwmpLDg7xNvJYcGy9hmpm25E4Gd5rCaVbnA9Pys3uA2HaMYmA4jRDTjPBJnbnwRy4oKYGCZ2xzh",
  "key23": "5NU6A3xQzewKubaopAG7eXcUNg38noUuiBG7SbFPE1xAVcetMGPGgGfXtiNkMUTwRdZoiJ94BxL1oon1FicmGXQk",
  "key24": "TZiH9rVg3hVgUtWyK65pRL9JSswDMcVkSssUQgrzuubayKBRZ7VWByvwF98tCbCEUTy2BVWFNDMqpMNRaJ4HwB7",
  "key25": "5rkbf26U4XBGX2qfgRMMDJjU3aDZf4nmUCWPDFauPrkfNA5e7wLeMRsSpKj2gFJDQVZn99cQpQ5fSaeiFYjWAxYN",
  "key26": "Z8S1eesqNrP3Q8ArJXwzo8FtL4BmiiaLWrDcihE92CXASLyUv6pnjEE3G6iXUKXgrRBoEYpY5PJBgNchuT1Y7cg",
  "key27": "479odZie4kTfNCECzRERiSjF3Eossq4rjkVmbWnLXoFDqKcxcXUP8SrRvGGuPiGp8XKcCGnF9NeGH8gqYS4nioBo",
  "key28": "2X42FeBNBcSTJReKTWTvN2peGrb99unFFqai9KYtw1KWGwTMGPfMAM1YCG8mN28rcJkHiSADikiYtae74DDvsVxf",
  "key29": "2ev5Pe4Zs7Y4WJ7q53AgbehGpuQxXNaFWor46UvCaJ5DZiysMY8hweg4YDE88oGRc7KqEnVmpdg88UxgyfkaDkXj",
  "key30": "3heatKeJH3QVSKBB24CC7QxV59tLYpD5SwFDB7vBXHSJvZbXgqSR7o3ovxkJ6gcj22eGezLEAtRSmJM5w4P7JmaW",
  "key31": "3Xn3W4Eg8QQkHvH6UVENkbPhGwA4aY2sqsrsSbyopj5qUCwciYvW9pnQMwK7zz9ufrAgfbuJzmWRiU3B84GABaRH",
  "key32": "3RV5dsqU7qCBAdesmqcpoyA7CiBtH5E4W7chK5ddGRQAPBBJ3zQt86LBnWuN8j3h1ptz1zT6NAppgKdEQYFr9WeW",
  "key33": "2QZmUW76XGFEtczmmnwmNEKWMLvRYTCEJNk9QXjF25KtcAfu7UDq7kuF8xwQNFnCjzrpdRxPod2WpxF7jqdayMRV",
  "key34": "3YPYQFBSVCK3SZLCBoXZ7NDr7eHLuYKxda6dNnhg8RpTWTVrDR8cceAzE5NVTZTA2e9fA2Tx8N84D5V4HKkPesyc",
  "key35": "5GKHHdiXmqekJxsp79eWp6J1az9A2ptuRcsnV4A5dkbvLLc58i1iRLLMFPckazQM7TdA1Tupah28f7GRsKpuQf1P",
  "key36": "RJJRg3UAGFCoguzudgLGkXSDdpdfgsd4zMGf1ckVwUUEY5vmg3WNGsNrmyixWyqNZBKohkX6d7cyhSStQ8zb1oz",
  "key37": "5g3qD2cdzaWSPjWi2y8dA2v4M4y7ZPTyu4xF8G7zGhn3K9xqhmC1qjXevbwrwfDKz2e1bT5rL3eNeyHxcjCQmnEp",
  "key38": "66JVHCxHQm1a8UyEtrypLFo1tJiY3FfLkh4YeYj2SBeYN16yQCXCD6EJGLTJb9py3m9xU1oKnbSDZxpsWEgkWScH",
  "key39": "37DiDxKSxBY7cNVFYejj46CZs5Km92KSSzReF1WzcoDThEG4by9yY3oocy71W1tcnHvFy6M2qRohFUTWAebgaL3s",
  "key40": "oq5jRDgkVchhLAWMdmLvNJwkveV4hHjoBGRNRY1RMi5vfkUwoxUJ9ZSAT279AEbh9ttwfJtBUdqMhMFWGvkz6NK",
  "key41": "4sy7PRc5CpgAaxi76rNgS1tXV6WJ4rBY7oTzMNiFGXUuo76d5KM5PY4ZE8nMkQmw7m3WK1qY2tRnNiDzXxMg2Mrx"
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
