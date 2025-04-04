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
    "wJWAoeu2jfrWPkiWS4GsWDmwPCuttK635uHoVnBDnt5qLimCwGW8xXCwt3JHNyYi7pRFfknUHgnrSbP4epipxBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Npe6NujQKNRZ5u3UryGnENrbQsHUZrERknN44xL4Rznn5Uz3om34MaWgB3HrJkgu91TTYNxQbnudFZCANQGbryz",
  "key1": "5Vxq1AJrPxrAfHghELjTCwUEUkJq64VukFkg4MTfAqM7qtyAfo1BSvbULko6nuEd9gZs3L3cmChSxF6YfbXskKdi",
  "key2": "4yfhzFgR9pvScZKsNP5jGQzQPSUzdqHPhNwVRxf4AVz59AVf5nszBaezCufTqgUQi7mDXi5CdTmHbLqrjYBoANtM",
  "key3": "2DcSgqmStZx9RdUB9XbMi7xpFEHA121N2Xs2QTmGhy5q6MukCZ3zjfRPYncQ677qzDaBFXoxstj4o8wckgLxo9mY",
  "key4": "zTSJ5jBwKVByTUPQhg13Q7FeVLxfzt6ai38awYqc6itgWXoGYqtDGVqEhvsSC5v1xQaSBfYVxoTcDcWkY35654m",
  "key5": "4Jx2FsUmeup4N3q8qx7tAw3Pmv1J6mCqjDJKjcM8o5bvBrZPnDeXSqtoub6qB2oVEiVWXnigSNEkTbA2ZKB6NrHt",
  "key6": "2R24p7zDaAP3swbCPyhNTSpYe7BSSMD9Wua1oK7QiLn5RRdxYV38WutN9oh2tsoVB7vwbd4dHpo2sRCmmeuvtkCW",
  "key7": "4toM16oujCWD4wtnuFzSAmKVeg9VQB96pLrUVz1UV7nvg1i46xt6iYLTXv6x12e8vkeoyXyEniYzNookLKH7z8od",
  "key8": "29pEQ8rHMhKARQ99PYhGeMwuWXysy5ECzk9avVPeeynMga2mz7fCPhKQK2vyeRu9FvQoFcRttEgVf1T1QNvhANrT",
  "key9": "2vbEwvn2FpfqdFUsmWKkSLKxguo9iZXCbVCLP9eJYg6gdLa3EJEma2LCH989Q541vbQVpdW2hd4gvg23SLVohxN8",
  "key10": "4jPJtrxN9tJCZXMJqCZkxXJEeXjC5SkYweznxVZDpTVVD9r1r66CCR1z1rB4Ar9VEM9hUCCTErdfxiXMrhK2AQKu",
  "key11": "66QJJkYBby5PU9cdjbdxgbNNzJy49yUhZAQc9X7x9KM24tBg915ZJFWNU8t6menQCLHmfNQ9RSDdbwBeyWYJDDLw",
  "key12": "w8ceC97kgbuE2zBtKFiBuYGzYc3JDBwmKA2Qy6UdKAvTVx8wG7Va5wdLtxSMhuhncQMjrdU7v2YBEXVgeQYzHFM",
  "key13": "2vJZwZDf6NXUeDtdGo9mu23p6xYawmSxy1TGENVexm8KkNkNHcL97jPn3Z5rDn1xfXqahPjUkwYZ2YySfoANJEdt",
  "key14": "51VL8V73WRYhVKh5csYGhGXtwVz9t7X1GnUwTMJ9r8GH3eZkZwFHL66kdmdRGgDBpat7YAkTKhLt4VT2ZhhrTJV8",
  "key15": "43X1JtTahr5qMaCGde4BwckY1rp5D8VQXJYRdUPQojM3RqKHCH3GZ3DKNPpbxd25MKKLZHh3XFhTdz2yQKttJ9a6",
  "key16": "2ExqCbTiEERfcP7rbqRpqG9SJ6kByZ6D7oCjjN42rWKtfLdFmnYFSqSuvsDkuJUmK4PdvWxM3URdRHhXMMZ5D85a",
  "key17": "2bbaGExLnnGbkXdreR3an7tNW4GkAGJdFnAnfAoqrq63y8V1BeQRc4dSpw1YmF57UpgwgiviQdNTSds417Xg3CtN",
  "key18": "utVB5oW6Fy9uZ8KWB5xfmogtSNUZziaiKXPQ9gfWc2joeqDUHtjxu4kUyTiiKN74EQJiuD8wyTE3WxHuG2WYUYP",
  "key19": "gqAxqiDUyVpnCtW6DKBHpAPcor7h7Ke2Vo7tUC4zEch5m2wuYu72UD5jezbmH1s622zHNART7GtGmFagYgg9uGG",
  "key20": "bjVNSPSMkvYLrFMxgc1yZeqkHruDFX2J4euP4GcAKq37bHLuB8d5Y1Lsuch5MJh15foSo1A1pARak1Zmnoh5RFE",
  "key21": "2zoe3pPdZGgk5EdECNSXdzVihS56ef8ugGJRuvRr4igwTYFYLGLsqG5LqJ8tCiRSRVpQEn6HdhYWTp7DZNQNbGQQ",
  "key22": "3WGFPv5Bnt5xpmvgviENWnXwDayGjnP4fXRvDF3wFokMng3ZK1QNQM4zm1ZBDepLg9G66rfYSj7vSGYo2XWsJSe2",
  "key23": "3RoYfaEBeRLAWX2betZMAbtZFmwisU4oWNPiwGyURuHNR6gPq5Y2vepcjcWdJoq4yiavuRLCiRHA5NJfJg983h2x",
  "key24": "5gNy5rxHCULVA9ykF88a2h4SJ8s6YRbnvZoKkTZ2z7o2jY8wCJGzyiJkRzgYoVKAQBxaUeDfDV3zFhN5nHaHUrVq",
  "key25": "EZeZm4EjJZVaKCMWytnVxQkfQNeSUorJCSjS1FQUs3sGFredVhz5iSLDiyCZvMVoo6ayA8XADkZe8Ej5Xo3y1P8",
  "key26": "eibx9rUwKpNjGdBYRgeNgnuLBMD15hqcEx18SHudmSFWwAsZmfdXBopXXP2Cu9VtM2C682bWPzsbGkf1qTfGjDW",
  "key27": "3RpXvCckisGJv5pHYXnVpYJkJmx3Pv4FS19FPn4ecAgU8Z7PcJ1ETRt5xjjx8Bbwf3iVCzy8mLE4nV47Pcnw5PxB",
  "key28": "3ynad5XuFCRoVQJvKvJZNazqxeJvJt5vcr1ogV3LsEKuQwWGxephPZjNFK9h3aqGFNaGRaFyZLL3ERBpMRRuinz3",
  "key29": "gJ2YUoex9Dzxy9nTuhA8XaMpjqenA7n3wkz9HkWMxJSVJhFGZXrZcX6CSLYwWiVu5pquDMq2HEbXATuiUw4bUw5",
  "key30": "3FEudCbXn2x4Sfm6EyMXj2HwHS1s9tcRvmQrU8oFvsekSNvcraGfdrdaq35ALjnv1P8tfWLtn5VsvaMFc2zzNuQs",
  "key31": "4DURmvicbAvjAksFxgZNdkPnj93DhUuNKbNLzAZeLDpMd983TqFHqzyJ9VgWxSRNVev6PN6M4SgmFDDxywsGfvhw",
  "key32": "5Wjdh1KEUfscQrZAvMqeKsYWvDUvbiciaYFUWCyfTccAHGMVqupdybAfNmo8Z6uzPNzTpFtgbMrusTZ7A5m2Fdsq",
  "key33": "5gK2DNgBwU6oWkMpByLEtGPXGtn3D9Yqd6JjeuKB9fwo8uNgkQUHcWRtKF3iiHqVJQurP6xy2N451aeBYMU2Q6QK",
  "key34": "3q3UBS8GFFxHkfNkBogNgD8hC1pcVhgJ3H2HNrmWaEXvpVU94w2xkGGBefQm6CY5nUk5oeG9nU1LsJHVnqhTeAM6",
  "key35": "nxTyrFvWr5ef3RF9so81o1Ga3MxPyLEmwCv9DRQQJf4zvvmb3QskZczmukM3HLQeqDE6w1XGGujcuLAxxLxEftg",
  "key36": "5z4rGMTxBnJ5Vp3YXU8v6chQmMdGcxDsXrukPcp6iq8LnLfADr7U9SbMgKzTEirgMEWCXxiEskrBbvQnwQTn93Rm",
  "key37": "3DrqGHKBbrPgUYQBCzW1EZJeaHrenzVTHsz3z9iAVEzyV2KvXMNwABx6FzmWduedtXCtpRt5g5zCYDwaibckDbVr"
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
