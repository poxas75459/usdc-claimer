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
    "3kf6L7bWyEaqyYNZTrRNHYHa9HxEKCdePGK25a6iQCGfwwgEPTpqqdpUnfZD4mYdt7TYUdGuTLxitgyWixV1Rcb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFTKwSL8hZ6QjtDCwUYXXQmtM8544xZ88KdWU1Hp1UGRLUbjngL1ZaEzic9paszbGTv6qBGzaFYkNaHSPUhNMMH",
  "key1": "MRUiQJboovoQvRhPgv82kGVEG5SdqxgWTEgVSHLY9bRwUdDPWs2jFpUSWvSC8WLmur1vJYFvcBuuDkurwEo55rZ",
  "key2": "4naRy4AqmG4iVmtLbiDrE1wwwnUFJ2T7bRz1en2LH8CofwoKVwKUNCThS8GAnPZ3qTiA2ue1abq8wQz76c5YtDv1",
  "key3": "46VEZHNf7LdSxS4snWvXCEArxu19TgXW8FU1zVEWYoV4w9jPNnm2S2saKDsxRnxKbpraB72vUgFkjMB2WcT9edbH",
  "key4": "d87VJFWDLFPwwFNHh7CLnaNey5MtydU4gH4RiYZAdQ652JTXwNcM34R2HkshxKQ5A44d7He6cEsUEPHb9oFmEEN",
  "key5": "59bnWU42eb4Rp4Fo7WBWtJXDoUG7Qdcro3oihAc9gJ5HrJkRFyoKV4QcQEa3YdzQtv6KU8C9AzASmNyNdFdePrdU",
  "key6": "2gPrWixEKCbjPo3wXaEjDGoFeeLgbVpSV3g6GUBQLwmGMnHJm4ug7dsa5hxHEdEfHv9HmKLQzMr7W2bCnthj5auR",
  "key7": "XuwNjDspzwxA9SUFGp1ZRFf6z6FihY9greH3NhJqgLZhk3jgvwgRmpPNk2yfazNFJw8VvaRKD5jMZNCgx9Mjg3P",
  "key8": "3HZk6gtKzKDY3h3rYSjcUbGeNM6jLPQLSupLtwdrqpwa3Z1PsuktScdwogdNx47vHjmjeDyw4mQv7cJTQ6T8Xnjd",
  "key9": "RJD2XipAmmCHBsx7otEGMtUZezwa3X3QRYSM4JfVxyyDAquQ6W5CA3meYjDeseBVdaKgtm5CetS5ScVkMVNSwRt",
  "key10": "FZ5vTuuJUDMZZgaLMsdqEE8Ad344NJUMV97DaEPjhEGPC9YTV7XYksjoZQp5wLX9EZ1XWgtiLoEsGt94vzbybjW",
  "key11": "5mkUGh628qk8eHqRzU7hMiVnEPVunXRvQtZgShR8CUX1QcCTVBYWPUY3e3vbufmSkSsP4mzf4FimcU8qq7MhT4cV",
  "key12": "4sxyEsnfHzDVnfNcXuBGE5TkfjZQhcg5o3mJ5k4ttPMMkWXmhFZfQkSH1Etmd7dKtkEsbQzos62DyWtDQHvKc4jB",
  "key13": "2xHEaVmDSFwAAJmLJ24SwVwf6Qzmx2XT7qj1LeqrdcDkdh1iJMHJg6HcxqcdJjxg5N3EgKjQbaxrERtY6HNDV19E",
  "key14": "vbuTHMi6djTeq1Soh7S4AnjwoYxbY6berzkrjPa2r7XTkypA66sjiSumeUepw8ASZEcofNpyr5K6ViguZbMQF6t",
  "key15": "4x2XnE5N8253q4s3S8BVhjsGJTdJKeQtJGCUZ8nnQer6eScjYkBXBJphSpF7c1951JkmURDmD1T14yKwuBWgGd1m",
  "key16": "4FpTgiuGbDKuEo5uxAzsNEemTvaRGLGFTqM5BnasYpd8vWre7DJSzFQAuvoGkc2qXqQytLGuREfwmv1sXgf2UU95",
  "key17": "V1W87ypJu8GbUBxZFMjtJEY2uiHLVDmYo5ExsST45C7wvHFk8jLQQBqWj49EAhNzRfXjta188XgNs83XH9NK4jD",
  "key18": "3jWJK7YCS6MDERNcjAPXtfTFkMn5kn66rs9iNdzhMcS3Mu7euPKjakGnUaMbduL98hrULYFE6PgR7rWxZJeARS7s",
  "key19": "4SjiD8e7JRkgY5r7xDEzUMFsDgAd8Chmw84GLAx3ojfxHtGRVCTtE9MWGgy1uid4en5zRCJYndqA9dQcyFmWuFgA",
  "key20": "2MmPBPBQN5R6dXo5dYxycbqZsX9Jh8wm1PjACfKbUFdgSFpxs2KAjP37QRVEDYh4CRojpNriT4AHSHjT8p3jESK",
  "key21": "2fiwpn6zaPszXLHHQ6e6CYdeCigAVcAkiXdL6NyYULApC5byWkUyydyD75mD9FUBxmP3WVLbCSDBnm17Hu7uXqHm",
  "key22": "v1ND8gBUNwiNk4Jhi97PprzR7eBfALnugtgeiMTVzoaT3cwxZoXCprKZbro14f8KEzCa97PH5Xmmnm96DrYYcuH",
  "key23": "5T92QaMBRZWGfxeFE5eBUUD1quRD43WVdsNp6uF1a4eQSBQKfWYkYPVcC9bSaYSC3UjMe64v1ueR3a1PB8GBAXq5",
  "key24": "615FGrZpF2fPP8xFaDsFJrqmji8JofEQBExCWurrRJk4DoXXkBKGypu6qtRLzw7LepwAMNRRSVjx9JxZpN7fkVib",
  "key25": "4ahUxJe75sKR5o17Esxwju5gk9hNcak348J47GR29oFx3MS6tzfQD5VcmtFQuMT8rhenB65U5Ad2NQbJtQZQwuoV",
  "key26": "45xzAoLfx58Arw5bBCMnp8zTbMzuxUYBMvXfStvYJrp3v3Z15v4rGXR26w9wfYLR18afKEWXyS7A4Aa8LNEDjJ2L",
  "key27": "3CMWbgNbYJKeLRectLb5n8Ao27xq5mvjyep5rJBJpFvV63xMrh1jBNnVkb4d2Pq34JV3LNHcxr3yxSRA2SYgBE3i",
  "key28": "5m9v6xNEgrFkXJt23J4Jofd95nniKgQj6KUe4acMyK5V73FP77b1dRmaXd3Qrev3Xco2HRsH7VQHDoFRfV1GpELW",
  "key29": "2SWdTVgE92ggdY96nRgnR7zthr3VZCWVsTzgtwhp31M5VZcGaWmJjoYbqogUEccic6CN6d8MtETv2ZvsWCfkvRzS",
  "key30": "53y4AtVdL8SX7S2j953qZub9gT8BE74bgJHhfKRTuNd7wASNaoCFm5KJnvsNPUJnSRKVH8b5YWU9XVQSpDsaz1xn",
  "key31": "5eBQdYi9UKL6iouxjy556Vy6bxAfLZXMPVSH6JMFJmhDyfipNFjz7r7gnXMNApYiLXQPCLb3JReRN9kwUW7uUcyN",
  "key32": "zQYcGwh1GQ9XNsD8VV6VmkUuxUqUqYKTz97zhZXFhFR2XtmUpuE5Wj2QD9zgyrc6qvDZqFQ5owKhEWFkJ1kcPNy",
  "key33": "51xRWitGjDZRH7PLP3eA6kcsxXnTokMcLrGpoQH8ocM7nypGVfbvGLZbWzPFMHM6PKJxndvKREAyxQ17NBYrEmZt",
  "key34": "3tKJePShvKLbty7CM6mG8Wvm4mbks6Bpt9V85ih9KyH4qAp2iJzYH57xr6PPveeKAhEkajnu22E6nioag83b2Pov",
  "key35": "2fBqPfeXxhptnFWCfyL1MBdLG2uFGVw5fZhLMQRNfio64tcWinqguxgoEHrz3XbYj38Uav9MDZpyZjyGwgeg2Qcp",
  "key36": "4N1cgKFEguvyWg6sG2Szb7VHyxGChG6PgZ6oRxuto2PdYNPa7asg56JqE6AKmNMeknequChmbWNJJD3WrU1o7Rea",
  "key37": "5x87tvtaUdCrb4xqEKYq54pLCvsdTSSzWbfqyGPPBwMB6dBzJKAPtsXDFzPxPKUYPE9DHr2F8DP1UeAYdqkQ223u",
  "key38": "UkHQQCpGkf32pmDhNqMMyJc7ZspWMsMsvGVi5XX58BbLpQYSJMAXCMru7AQ99cMa8qG8RV539KLaPDZZobD1pD4",
  "key39": "5sioTsZ3Xb3GTojwoy91gn49rU61PwToWbTqw3frrWVBTCrLKEvba19v98ZBJTsLbd81tJSVquTzgLEcu6skKWXq",
  "key40": "5SuVfkKvoTSASaoYS3ky4qwUgWtbTBor52oaghbsPq5NZ445mPgYZ14moUK6m1CD9pFcLaBso8EJQ1kYXhHKUJho"
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
