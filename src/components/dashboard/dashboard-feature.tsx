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
    "2mgFnCo2rdi3N9pnzhZzVPVZzdZ1f2KRfYopCD5pLRDWzdMgTPoJMmVLWmSSHtN5nSFG1i9j6V6g1exG5Y1gyi6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Km7qpxmiYrqWqjs5NafRobuZ3211vgnX77mU2ho1tPwLs6MLp759fRbyF37qcEHHV7cSPwaVeYpER28CrNXhEJT",
  "key1": "58ZuQXNvpnTAxpLsS6vi6NYhCqJeKgyUC5cDGDFFq6LKhEvBoLt3SAYasA7P1eW4VBWGjjFkxpqWNfEmCwTScRST",
  "key2": "67GL5bG7rdXKM6mYgSHrYfAXhVTHCXEJ6aiyLVB2AHQTePwdCQmpb8m8KGsY4S1BSWLZwTJfbHVKSWmzuj1maoEP",
  "key3": "R1T9qeLPhXjXWQSjAVNDcqtsAtACoyoEpfhwtGmgNcX5KqqR592GdGnbiBoiXB8ia8WrSAenfUiNr4hzdcPdq8n",
  "key4": "2efpHpkSHXQ4Suo4pLaTSRxD3yddn9A8yfSfFk3vaWq38rx5KUz3vnox6iy2mrpgQnTLwPLkcU85RbM6MYDJpi6W",
  "key5": "4dXrn2a9b5c9a2isLz6QxpnVRgK6Rx6qhoPjVR6wvZzZv6JsY74KKzznrjQV6nVeDc9SrmiAWjtWCxj4SmomJhH1",
  "key6": "21ALjUxtt1VuwucwffK629GbAYfG5M6RF13moSP4ZSYh5h2BUDcE3i4f7qoZL7TuFjFVRVkij5DmCzuRauBMoTP1",
  "key7": "3WSf5jc8juoeCXu8uUfxUp2GbgRhpVFUktcMzoC1oaXK3czkN9tMdFB3r2ZMQeEZB5Dc8dYWYhUBJSEe4yCrLu3v",
  "key8": "3XAZVjJS7fbFb4yfYFbmXVhWcB6VYenzK4GTZodwqg3cfZmPMNea8D1Cax5sj8ax1LBqQGu765tR28xA1u3PBTen",
  "key9": "5zjfDz3URVZ1m3zTRhMwY1hCtennSa4HjM4cKhtrWU5imayFpXDJBDvFxsKTSPdwkmyQgQV3mVSZJ56DTzn6mbSH",
  "key10": "3LsLCGw1vTbc71my6LWENBb52RNTEeFjxjjrjxFYN4qY2ECqozZr9UVirw5N1VhU3xg3ikxMamTCfS5ywtF5neWW",
  "key11": "2ZqZVjkCyNnw47W8AyiYFKnrpQjPvF8oCMvURQv4cc5f715RgohBkQHrKnoEyFd3PTmZUWGgNEdFXvGsUbRVXKq",
  "key12": "659yCXdYFaPEVDhkiRGPvVBCzerugkJVv6PDhVf1LFKcSStonoc8tXDMBCEMaNJzBzqsTCzrKDWvvFaoXRJjg5tB",
  "key13": "rFU8eqjpqwq8SwpwJoVQGniHYSKVgDSCWNuqsPB91Vz9y8qULKcAXH94arZJR3ubz5Cwo7LVsGU3GMTYTDSQhec",
  "key14": "2Yafxbme2vBzDMVdXmRifyiKfeRfimRseDtPDmSv3wQVnWA2op9nb7pQNQVoZVT66uKLjra1wbhen5VUc7yv3Ugq",
  "key15": "3aoWnYBHzihq74KyQjwNtQwaZ7YvacKVfr5eWKPqkd3Sy7quM8s9gf6ssUrkDNW8ejNHBAb4UCiY692Ym1fUjCDq",
  "key16": "5Jv39dUpTXwgzhzB2GdmgdYdTYMrMYqGZpB69fRZ4iWWvtkPasiSr1Ax8czMzkWkUscjFjt8PFz4Q1KdSG4S8iyP",
  "key17": "3ufY7D8R28jyeEfBWeD5G1648biB4554yfD2DcU5eUkPT4RzL6aw8TBnnBTAigwYrQdSHh3LiRbuRyfZ8MeQCkRL",
  "key18": "2iBghYwRRYHNeEe32JKhzfrmHqQgkFguLBjiGSVkoAb4eKF6fj9Tv1UfDeAfqdrZCVF9iUdNYFoRyAvUqzDH3jeQ",
  "key19": "4NB3pFeZgHky5qy13JiGtz3soCiyhi4XYh3cFxEwsddRSg1VVAjMxTA1bS4G7XiSy6s4pR4Y98vvXmsKnTNsbeMQ",
  "key20": "3UQrZ88PRHMQpxSVrdNW5V9XSiibZniYBL3BNjnMYxuho9JUsQ2cVYwMQvZtbYxXTQrs8zxtXs9k6ffpVJ7Ksut7",
  "key21": "4brGSnUDWbsFC5i3gUVeqAyGgUp4pizdT2yQHTAGZgEyFVdrc7XbbuiG8wGTdcQwL6fMAXznty7tYtDv5j4hjBb2",
  "key22": "5wb1x25DAd7B72Lyq9PnPx4JNQVzDbqQJaHFV6HJsH86F9DVHr7bqLPP9URmq6CrRdjuPsZuJiaGyET3fw1yQtEV",
  "key23": "5vCiGVqhhXZ61iZJ6fNkU4x1WQyy6691mDbETPRaujjnmPr8FABkyDBUx1FaFS8R71Y9ryecFztmU6HEuHU6bJjn",
  "key24": "2DoNPYqGmB92Loob28mw2621mAdqnSJ4yftnyRmKi25YNMA1mgjzjBJgJvyuWb7ddSDRAWSJxxZ9LTMn4Qk6xoQS",
  "key25": "qyzgTXJ6s77dTw3GY8NYuFmRqeat31SZPCMdUhVi9HbS1F36UDnvSEPqT22dEJ1rk1NQZt5RbjUL8vTqQF6Ek1s",
  "key26": "sDTEMKSmY7wDSQKoUEECgYviRpdJmnAqJ2xt4ALNJZ5oWZmJZAJFBT6ydmc8aaKwdXeDGW2m8aanZpTdyMPn1vZ",
  "key27": "3ESMyNW4HrNEc6WosP7Tcgbcw76EN9iPsjAZztYfr1RPxHsnbJieFGYsAbGKa8RSSx9G9XpY8equ4Z7P7FJt6fW7",
  "key28": "2XrCb7KDjHoRSJNu1QFfwWKEdEL8vMpbF6WryGsBPEytWyYnLfZipMSvQhshGCJJBJknGF5r6wV7bEsvngYK38Ux",
  "key29": "4WQRJ78g3sbJcrZfE7zhBsqJLZdcaFe26r4A9oft8FmUy9GjK17fvQi5DTDzjH9QWzyJ6FAHkBHg2xjVtZM1NH9d",
  "key30": "2Kx29adtq9F43xyHT4mB6tJjPM5hmehBm35egDWTdkRCbgSYYAqmxAFjmQBu9pf6xQTiaVfVypJSypn6C5dq3KTg",
  "key31": "3Dc1mrRuyGfaM5NxvwybTW3ZJiiDEsxYy41hQGZypt3xr3qFXXxVnvqZemo5BtTw1cqNMmVx3cdMvTPvwA6VB1LY",
  "key32": "5MgeLBYpKnTDriLjNkJMJ89rzsZ21Bf4iavD7QtwzjgPgUCnTivB9d4tnA4cQHGunNrirjaPWREpX9XqsSecGjxs",
  "key33": "4qpAEehN8yf1khH6TwRFrrKvYrofXMKknEVKdoPbxx2SUGCSdNQKy71GybbPJo6mbFmVyHBpwzKxk8mHSbtJf2Yu",
  "key34": "3jWws12PsxWhxSKp76McKPF54EaTxaQbh93yrLyxzXMDGVaNLMFEvxdofb6fcqJ6Y5t8EoqN5UVf8Mrdy5b8GWB6",
  "key35": "57QMS4nSLs66KPpquBBHrYUhENUA8ddYt2zfyhvSXvxBAT27XHdWyjybdxhchzvXBMnZsXvPk8ePBj9YwMq6kD8i",
  "key36": "5EHqYNTirhdZZMsMYxndJvGXkyqocNXsFhoatDJRGjk7poAp24ZLyFAzAw2bhg7e3b7hNvfsbXm9jvyV1Row3H2s",
  "key37": "uxipbVFckQcxdy6zh76pgPhv5UEhSqXbuXoqfedU2kHnRjkCMKrd5ZrBbUJts6CA3xsPEqSxCaqXGBwqqYYRrRP",
  "key38": "5MfGtho9nj9r7f4WKtMKgeGQYSe4KGZPUS61MS2fs6jY7a3WNjEZAEMjQ5AH2D6akpagqpQuZLHtT7iKxAVaDAx",
  "key39": "v6SLYc6J2EhmCrT8F47ifN2nwH8DZWMRBHkA5seReM3B13TsJkeo4hkcFQXJGas8VARbT5CMcUKka27CUYhq4nZ",
  "key40": "5m6DSwGgGzqAztB3iGuyNu7NVuFRoMW5HqTcsipB4JF3mKi4GrZNrfVa4zURzTsfUJGdD5PJY5M2m5wChLazGsE3",
  "key41": "e65d9t4A1CNrAYxhZdZBNvxKEmZqsPsKQRHKRFdvkrVoX34D81KZcYfBXvP2bg43WUknNe2ZAACkAfPdqvxRAwm"
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
