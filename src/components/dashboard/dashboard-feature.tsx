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
    "3nyPFQikMuiAbpm3NQtJQ61g2YEQy9GKBc4vJysNRS8dCh9FWrQiADZPqKDeTtGNLo4CF8m8apcy6zSEtaJ6JnM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUVicTB9Uvgnghu3xD2CoDkbYCUiGC833pVpbNHHn6tycAN9RFz49iCbFcw2KrZvFdiPjbQNywF3uy9rNdidpp3",
  "key1": "55ojPjp6ycgKqPnaZ3kPEif1PiuQvgcH9RFXcw8kHi4VSGAVvqwbAZUXdPpZ4dv4NjepewpRPbQyMSQazTAxZUGP",
  "key2": "24GdYkE8Yxo1b8HiQoiLBkUaMJSkQd9J3mj6N6Ev6eeL3AuLCr6Zs66Axp5efeRiFPgdgBJdeD3k3KLNY6R6mhWp",
  "key3": "2expXpCtZuMnpXZ6iiKb7LBJivyTLK4P3gRu3UTcynDvBbskHHjhvQMJ22mJUoZYEK4qcFwPon68ovjV3smKWEsA",
  "key4": "5dPHVghWggQrZUnTWiZLddMZQKeHXqPJU7CJ4vwzwSSAV8eCA5AySydLJNNNNtguBeXULQ35zHhhfqZzuqhH2x6L",
  "key5": "4B4z7zCSshVVDXpx7i5WmjUBFWxsTesF9ysB8DxTy3gLZxCPx91gE7U7esh2ySCfYqUauvFP17ngtgEvusKcEJoJ",
  "key6": "5DLEqS6ti28qsW6P348v2xKJzRRsWpcMzqw45fjZLYkJ5Attm6AsUKTZyc1FA4x99ZcxqrqM3AxqbJGBB1de8Wvc",
  "key7": "mysNrzBPxenrwD7ksrJizJGyTVGq5onAQiz28NDFZf7mMGFvDuxzzoAyWbCE343AYHxJwovkuRwhCKYELQU5gKf",
  "key8": "4Nqt96NryNuw1NyiD87AsVQZF8HC99zT7V4wwCEQL5LHP4q5jmYcCjaARRrZ4ije1ftrhSjWPxgjahQt7vXNcCj1",
  "key9": "2DzQpqfUaDixxRAj3jJ6mgDqB1Nh6f2s3wQQErHX8rCSaM2vdtEwx1iFePM6AyaCtGG6mCK8K6CFmX6Nw5JmL1hh",
  "key10": "3fnvW1yPSoVi7DewupxSzDw2kM2hUn9YDFpiXMBRy6LKwddQMAxRn7sfsFG8sE6YqPaATT8d94r2ms1bwSho1NsZ",
  "key11": "5oKR3MRi5fdT8KFGHNGKbEVhygZ1yPApndX9BwfxiyxgvnjpQEyaTvYiyuxg5MhQViWGpWoZAfcjTijgovV6PDLF",
  "key12": "5GEHQroe9GL7n4CrcQRZCWDLLe5oaqyocKA4YjWsrvo1Gy78zExrDcUzeqCcnQHNrZyYkzLXJkQo7PEmezZnqCSE",
  "key13": "5ExNdkfYBoEyYvuVxcpsK2Xz4fnDZpoX9nJ1qsb2dY7Z4V8UpYk1noo1YYdh121p1j4HsBGFSJZvD2bPcpDF5VXN",
  "key14": "4MmCEorcNBgPzdkaF9W8XR5HbaCihqzhp4XWhr5GLDmRRAdpTLQwxVHqFVsWkqqAkCvcWBRJqZqKjDEyuB98ZURe",
  "key15": "ob4b3driyJGazgYpZY4iLCB3QeB7LkGXhUs3cDU5sWmb4TN8F6wjM1BiYErSYeJhJP9UQWcG151iArLTJrBRqka",
  "key16": "3HTRWgTvX75k4JfiFehyv9bvfGCAsUvLHdn3PdDZYTtpGmKAQKCrSAmd8UtFhKYQvQNFDxjSs95BruHht8TQ6bjD",
  "key17": "3pfBA9uV9noE7GavkyVAWMNtoxUyqUuFWu5D6NE8eCsu2R9oHRHd9kwdaGHEF5sLfUxoojJyF8GoZxaxr1xwboJf",
  "key18": "FzDP84S8c5Gh3VwazsDhZtprMkWwwyb8rPNhRQSzUSeoTepuwn5nsY7ypwX96XAshyFfMVRB9NRX3aBg5B86ttk",
  "key19": "4TNKXpecmAATUD8NyvvDNzGibitSqyYV7frratFrzvsKnFLLmkWMxMjmASGRSK3BaLVTLvwG5uvjaVFLHqCHfe12",
  "key20": "5d4LEBjL3aK6mKY3qxesSRrvGp5CZUvW9F8TGewEGzhiNp5nMvX5zWYnj6cFmK6HFu658at7herCokQ9LFdoZjdY",
  "key21": "52ZmmwJYMs1JiPZYM7ZtYR2TYR8W67d7YqG85AWtCyM8389GuwTq1gqASai35nJW9MGNDhRmM7Bxj8JY9uFU1kyZ",
  "key22": "5KxeB278jziKt4Jxpj13f1MR2n2kL9MZKzGuezn9Wmx3mdEN1ajmaRYYB7BvCkbLQdpLJBj1n719joQzWkT1UYnY",
  "key23": "3M6j4cFAGNbsHPN3DaZfXnvqzmYCbM4K6TiKKdJn3Srfg6vawpMKafoLzGr6n9VdjaHNfn1PYut3dXFFpY8UiC1z",
  "key24": "27oZL5o45wnvJLbMbwygFemP8dPPukbRVMdQtgHJKjfrVoTKNYthbrf6e4rtoJZAFmChvikapig2Xz5FHAkSqRV9",
  "key25": "t5zfgH7HyZFfj9uWdW9fMPBD6ZnNS4QATizHYcBSY61wQFkGMUNnHa9bEt98yg4NdLp8gVx3HCAiCkdmz16DZ37",
  "key26": "4vXoKk9ZzPieSMHLS6gmm2ozD5SVuSNUfsjosUKDE3EZi1Cp6m2AyENZ9Ke5REgk7ABaMbyxnqzsjzoL7VMxj1Wt",
  "key27": "3hwTeUHz9PDn87LqGKS5NXAjwyG6BYmRB1ftVULmAJhDPrSQem8P2FNGPFveeQT32chL9Vpnh5RXiXv79NyS35qx",
  "key28": "u9fAtSyZtSik9HmPBK2JpMpbkjgNJ65bDRY7ALuGveMh6DauNamEuFgSVMUWSmS42nBt5C9soFt8qtDhHvWbMZ6",
  "key29": "5y6TQGLnWkTxcbaB838UY4AEdxKiEuyQgnYqYHhKHgTfrtdWMWWwTBDoP7aQyMEjt5Wn9PVpAUDKuvHbqaPyzRSG",
  "key30": "3PJCN6fqLDAnkd2vUmXeuJY9FBoBe3Bz7qkzYxqdRofqUUFwCo6zc9rq5uGNmjbsiqzjC3whZedM9oBFue7CcRT5",
  "key31": "5oKHpiUPFa8MQtafhpS77NZ5XvXahC1tBK1inLaGcAfJbNDfPWHVx8ARL9xT8ag35cuf3rAd79hmmz9MTUyUjNqq",
  "key32": "3en5oKZV1FJBG5xZr5Xv91FLDyhhCyFscGnnN4jXerbo5jXEuG1z7RHLMXMyAmhoA9Di9dtbcCj2uN5nUjdMFsBt",
  "key33": "yjwc8Uk1iREt8D45Fwyqr6U14LFFctee7Be3drGuXcWtQtYMWqc7W12d5nf8bWpqVihJbaCC5UUVbVkwnCwU1XD",
  "key34": "23LiJENZhGFeg8VQqZQsxn3TNunnufqM8EbanMikGVjP9FnsRnTWCJ5J74skpQywmpiRhUULnn7A82fCEMk3yYxR",
  "key35": "5Vso8JQ5JMUJhM5pMRoVHokXeBJAzERpeTKWMCv1brN1xTrDxKFvDTTSarnK5fgy7rb2YSaux9qaickm7dvTz1Ym",
  "key36": "2vUUwZd5UjE2Z6eRjn9o6YkDLFB7kjXVEpNsUgo7VyCBSzWCMbX7GVC79GCaVDpqUU7tQ2Z8xWM7PbnfZer8sGR7",
  "key37": "45tVBtPD8dma39C2bandBqPE9F38KcGnoVD3w2viw8wPoa2sc7tmFLbpiLPTPY1Mtiq8xmjyRxVQGjeYZeadZjBZ",
  "key38": "3X94z4UoXZsqhGQcrNAkpUrm2CZTRorShWJQ2cB9Yzjh4JfARqE1GQFwCsi2CwnKn6mTP1UjmKppqM5XYkvkkqiR",
  "key39": "5R6iBuNAres1LBUyzaYXBKEh4W34u5ygmajceWsgHixqwTuXibV4iB5VARQAU9rVEUWBkfevv2DehiiZZY285QcZ"
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
