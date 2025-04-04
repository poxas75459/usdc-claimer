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
    "2EBqnEHGrUzPENBUaFZ8tFHzGVbNZzt1CMNUNHFf6istuvCLYtCEstnxzMGDjP5Xa22mxqTgJTAKtPgRf283UD6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wq8bpZT1CDZ7LpYU6sqP2UTEtzyWHoC57axGrciE8muF7e81TAXX2VxrXAao7SRu3qmh3vCC7vg6USfZiwpciE7",
  "key1": "2x1krEMadLfo2LT5JFY8UbP7TGCKgh3oCJiVsNcP3teWPNE3ERs2JTWq3wz4QiRzuKHaFMZJwbWuw2gwNb73JWBh",
  "key2": "257HN2EDQ6yo9U3j7qy85AvsjcfyssaSseL1UQ4T5dfS3M2wq621KXx8nbiFQsiRx5RtssbzxRPxenEVeTjW8TAB",
  "key3": "33EaBoJKuwSQHBMyfQPZBdMokea5WmW2GJQZBoLFQUtbyegDBbYT3bpZQ8nGGi1EoxGaB2A7qoFmEYpkLqMqxvzM",
  "key4": "2eS6KMMAai1v2ipo2UPTX8tyHM7ZdQziCri6ViDjCFQwanJp5pXkUeLMwc5mJg3dBbPYBwCqoP1MaFtZuUYFYyr4",
  "key5": "4W5S7kMVSNP1QK2L1eWTuZLRBZT2mwLkCGUG5odYLeXroLcJ2AC7Jm5Tq8KRbZ2PevPQ765t61p7AtJJvf63wq7w",
  "key6": "2DjKTZgKZhhtL9QJWzn4v6thNGghZjeraotWSNHbHpFYKtj939fMbxZ8UA2cudvKeDsQ388Q7VtNAm1Fz2VAoYpT",
  "key7": "UHsRdZ3GFqsUyZBKeeADMy3PAavDR978yMDox4X1CJRcUUjHYzXhbqA6Pm73TRHsZLynRcFm13doAAghVZNpuUc",
  "key8": "4k8qaedMeFMZnoS7Z4oo5dMQbSMb4i1JguHW4mtQJ3VFez7ikaDjaPJHxSVuttr3NnF76gyzLXdStgRRMhqcy4w3",
  "key9": "31mJpL8LfwN1dQm4HW9hUpz5oX5wDSbjU3fXtM9BL2MZuMs4KxTD7pnVkwG187kx4rdTEDTyERJ4zjWfSxJrvLry",
  "key10": "38FfdrZjzetZNj1t8xh86VLSe4JBVB1PREmKAy5ocxq8RsFaYeijMHSrjMiApAwLqm1jDzJH5h7siALE4TgRwNQh",
  "key11": "2Dso2KsCC9S4QRbGUVDaLtgCvSWep5iar9ehTTojzJs1d4v3BQhUYZ6tMtqANjL8f7RGYoWTBEWruiXMCqt5pdum",
  "key12": "Xrfb3Dvg9tww9K3fnjPZXNuGpY2ZKm9QH7gB1eR3e2Z7r3xPHDgYWqgGwXT3TDhSbSh67Ht98sDp9iQM8fSLn3b",
  "key13": "51SyuejAbA8hKFrTVu7rxSpTtLiKc8f7DiwqQN2oiCUjVeKcaSYyLEr2sXRCFATfFrX3un2mDFEZXhhBCUiPr22v",
  "key14": "3MnjseS4xieAGQzyPEdX37aZPvL5XJk4Qwmot5jbDPTaghTPss1PMGwZ4joPZTxY2nPWz8hcSfaWHsBKrcPKAeQ",
  "key15": "5kK8jXxvbyFaUHbJjjf1D6iX427FZCjTjJzqcGuYM8m9Yeptr5ffDaPzTY6fJXrAG9Z9CKLW6XdKkdqHqyB8ip1",
  "key16": "47Q56k6pg5HS5VfSYUbqpY4MEvUk76XPgZajFGSXbHheRHMZ4n5gUMy2pp2tC4eBaptXUZtuZWKWDUBaAPZwXGnA",
  "key17": "3SSGgYohcWuxnRY4KWJBzwvnNXx7pgt4FDunSXeXGjLXwtHprGYhs2uyYQRegbcVoqp5uCMWRKpE7aTeMRx7WCqW",
  "key18": "5uN5FCK9WyX4UAaBby28PiSE1aH4FhoXTUntQ7KuXTeTR5oCfPUCVDa3FoxaamG45DYstW7TYeQon5V528qHHYdZ",
  "key19": "42gf255U9Ur2oBQvCypHtNhASuuq1rF9TbJ7B5nMp5P1zRc5aEkR1PKoTzL9RTYih4BCxa6nPcHp8dCHiWyYJTNM",
  "key20": "42Ededy22j6GTSRjPzxRQZqP3whJgAGufyH1CubfFetpeJFY3NTosa4Pmu8cYhDbFuj79mxoR96dtcBiCc2xWpM7",
  "key21": "ZVfC42A6UfYLJUwv9Fo6WumtkGrqVuauLmqcXgEG2iYzEQ8C5jZgcdaLHemVWQVZospxskDyYnDsPd3vUeYY3u4",
  "key22": "62r9uva5cFuWPL1b8MPskPrDRCNotqH5Z7CgMfMxtKR4qr5Mrd6MpqMoyagXvSweERmqcC7XTpmKEXtTD6Wq87Pi",
  "key23": "2fwt3cArDhdPMYWJnbnge8RYZNXKTyUbCr2XwXmtAG6ohWVhL7bhgT4Qe4Erpco8EyxyJ2fmyYAE5TNYQrpFTKUD",
  "key24": "4iNEwsRX1w3kLUMMjLM8EyNA1544DrrqgBrBf8UB1dZ96tBvo4pkK22Dm54osmLnLYr8igNyT9ZfQgij7ViZj4iY",
  "key25": "2CLRPZQxGupm2i9jjJ4CN43cHsLxX46MRASTdFMBwGt4DE4V2piTLTNqdAkQ3z1vZRpf4FmYc4YFFeToWZUfPGuX",
  "key26": "4TD492TLd898z2qu8dEC2hM4d65BirwpUNVfMdwKfjYVmHaqRMj6jKvfcMNts36tzMveihLHMkXg7EYBZjAfVxU6",
  "key27": "42rwtZxJj7a5CGdJAmtnMqvnJu8HVD5HJTy59NK22b8EYHVWVjJX1LKQv78abahvSFEr5rXmjBRFdaAsvQbHEqu8",
  "key28": "63wQ8GKQQ3j2Sb8kLFFEtZ4r4qfS1sS8t6NXHtUZRi76DHAUy5PcZJ6aRcM2QzSGQAEY1XHPytGbjyz6vEwLqvud",
  "key29": "2rpQGtmqp4ycyjfkhpQAYqi9wGGhjz97TVZNAo9f5TXRE5nLZP92g64cXmVynK5n5GNgbiSb8cEXdGYmjvLqe614",
  "key30": "36J4uGgTwtKXyuvFZFASPiHW7PktLi6zUwYWqzb8xcKrKNKJ8CNknMioepNhwgdsXh2kf8NUpSy2czZZXsAqMMWe",
  "key31": "Kn4ME5fUfvwPidzotqdk4HVTshpXEUdUxzLRG4beMXyVTsxzyXhF7EPWtHT67wkFBNShXxF3kyA1igaWEXX75nT",
  "key32": "xXH412ia9CgbHSf27TDR1NcB1yiF58H6ob9v9VtXe9b3EKpc6GfLHBJUjTWpbApGas4f3L71RpVNNmDmSKyARay",
  "key33": "5szGq1hGzyxXx8kwJmk4FJ6W8DWE4C2T8GsNbeY6dPSTG52TV7rJ2sciB1hA9yx4n7XeeZ67AruA9aoVu66aMEVF",
  "key34": "5Wj6c9gMDwDSzKFaQA8oCDzxbb1EL4aWxzSyrxixTeoNdg2NgodJSgCwP2HkfJKKRZ2T1VaH5Sp2ys92aUqTJFX",
  "key35": "5rqj67am6M2Dq3ZnqvfkQsR3fd4T2Gcm1jPN1w6zRc8risSC11eTARKgXsrxHG77q8m7atspftYtfqgXtjMBrT6j",
  "key36": "2xA4xn44jxo9eCSznc8QJMVxDhP6SiJKM8f99q4hjcyhqKuYMoGVp2inKmv4RiUZp3JPaGSV43JfenQXFt9S3qZv",
  "key37": "5qmjpVWoZJGbtAKRQis8EvRoYzUtbYRjGeDZ14J6otrSG2ovLkntXrVzv8EH3YYwoSueYF9rsisadjGmyFxzFN5n",
  "key38": "5mpDcS6pTxw1okFzesJjUGckjMqHWkJesacbELL2j9mjp8NyyQ8DPSi1aJTNV5KnwC5JFNQb35vsgc1QevVaDQLE",
  "key39": "2To6hWAbdKMXjQr9NkZyyun2ugX2m7hmChgoiuCdynEt3yDGiE6cJM2fTCMWrdnurjU3aBCM9HAeQKgLtiUtYNCi",
  "key40": "nbB9Zb6ujz92gBe6Av19ACUEQJz5hhPz435J7zWYQ1iJ8ENKeeAeJ8PJM4prN6TLsKTQ926kDdcqNUNTLCT5Mhe",
  "key41": "3hLXT3WGMkkMuRtiMtstZv16D8rGwjzdUtr5DMYon3w2gWZqDUVhKWvfsyTK4wGHZLmafjT1qZ9qkzdUBuNXnuqm"
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
