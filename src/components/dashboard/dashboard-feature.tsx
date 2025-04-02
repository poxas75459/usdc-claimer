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
    "2jeCseL75CnXNmoDhqjUPNh3tGkwtpuFbiCUv3bFg4JFZvcQthm2FYUAMv96KmXBdwNizWYJH7cz1LTjqkzwxQ4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTyJ48rkg5Tosy5zv6by3aTC65bVDVQ8wS4nUQtaVhv4j6GBWGqNUNqLPun1FWoc1p9NcfhKQ9inWNd6X1weji7",
  "key1": "P6ZXVA3jHNp6FHSpHTqiPurZuUmcozDAXgcFT4GkZHiEKXdReMZGo3xqKgpAkq528s9fpGNznrk1uyvgQ1KZkem",
  "key2": "3bLx98eYh9HK2tq27fP7QtaB6gYdB2fB4k5EJbC7XyKZCN2YhPDKRKna43pMSn3HFa39pKbkxhT7jpDJ9yoCng7K",
  "key3": "5Raohkk6jnHuGMGh4jTMcKJhZDTHdCfG8p8yvUDq8NJ4tEHiqn3jTAjghpRhbEaLMjUoeixGYkqhWNXawoizWmUY",
  "key4": "5HpwzRCf6Vv3sybn4evc7jEE2nHVuLgt9q5v3z625nygkCdGMsoBrjxnNidYcPsuFcdScQA4vtyqrvU3FPdF8eHg",
  "key5": "zUdo6osJ3oWJjmRGjyfTUoJPYGpW8SKvc8ca39b9ZivZicN3BehzesVEdxcge36kyhg7NyrnfWiUSRUp6zCDoe3",
  "key6": "3U1wQm9Na86DQzuGJK1LxZ7FnebtfGi5aYpd3m4G7pzR15pfXJx87K1Y6BLziqkzwqasj2uzqcpgqJHKtWpgTJaN",
  "key7": "4JApgyLMKdEFJsgT9kBYqkmgTS5pYcWCTzzJAspsHJvee15WecHH3PRSJw9cFqVoXfXgNFMkhKFMNQQLkUdyREkR",
  "key8": "2DQaBGWFdoQBuBQ3HdUrB5t4pueMUehyfWFGBDqXUgN39CFTk7TMPsAiScVPfTooy154XzgkucB6ZN4NRHA6vc1S",
  "key9": "3ECZnycrPznVLJ63t8jvhN8CcyvkBPohmf2tDxngmmGFCGhfAffUSdobFz8wrFX8gTCiLzXQWJKUFoZ5PqEEm4Xe",
  "key10": "3qiRp18yc91UTKSa57uYH2VGDBtwvMoN6SEXNLnkUjZYFxHLnuyur1RaaNsBhjmsvUuzRNwqMjqBoB3dwZ3pjrwE",
  "key11": "5zawbMMeJa6ZPj66WEn3xHJB6Px6jgxpapHohXraqW6bb5xge3pzVqLfmPCgZj41w4UTx4MWp6Y7wkeNtsAMJq6i",
  "key12": "46j7wKeGqgL2gr8dCMT9sq1b4CaMTWn4g3XzcW1bYGeaZRHbzHgTUZwmcXGjAQ9ttwg2kt4gPoZiWqAj2ziuocmF",
  "key13": "2KMbBQDJSChmYEYCVJQjvnkK6X4AWpGQjvNmbwZ4FMbLUoNUd9CNy9SKKptVN3V8Myj2gMi9rS52zpnDRFVeVes8",
  "key14": "SKY8QcVe7G4BRj4EjKnCxvddpKd8cBiBUxHzYh9p2ew3oaUYez3yt6QtWV3cK9WD48RkK9mkY1mgpzf88m2bMhv",
  "key15": "4XCojd7vEhVVB4LGBm3RuLB5zUNYWN6LmhuPHs6j6tzwfWBWiNgGc1LrJKykLovc21g56BdjML4RD2TF5px9AW5U",
  "key16": "QoCMKAmvPTotSttpTqNDCdYwceyE7nmr2zKYT1hLvo3yyNSJDetkXPmmKWUVzxp3yqYfapmCYqLEdzb6fCeYDvH",
  "key17": "55HPFpzqGEPobLd9s9jDMnngFrd2GJN4sxg6SRNfXTgUuZJCUpKvstB61Hpu5iGGAapkSvqqWfGzvZD9zv9ssUN2",
  "key18": "4Shr9E3WTUYKxH56nPiRz8226szkUcxwrC92GzEbyiU2tDfo9dqzR8rhgLXEMZbz42GqqvQXgVGUkDYzcnDcDpwx",
  "key19": "5CzTyUDW3Sm8zNVffEStAUhuVRZSoEjApvEjrnrQM8LHs4rgKjig3mxUgXH8bmjdKm6H26kJ5KzAiRsH5uvmJQUH",
  "key20": "5gY2cTYnfabP4WsUrfanj9fJLLeysW64VAUpoMyBVEvHehpbGVmjXj1kgzQqJGCb5zfLD9xLpFJZMt1G748b483r",
  "key21": "54XZg3idfwtPjHQkJvrtLJyVaeuGPXsmVWXkjDsYoPEHd5jcMAdvGVyP7nrgmbDg7byeU4ckNqphdQFzwaBTgJT7",
  "key22": "4GuXpKAsk9XroGYx32MDLqwu5k9NjpnoKTSPder7Swc3WQtX92RU3XmAmAZnvqbWJwTqMdcaG5oD7QtdS4DFFne4",
  "key23": "63tHRanYkfKoy6EDrX1YqnXpXt5eGQrnboqyUCkjyZ8KTLwYDTWuY5ZDqJH9PsLHaE5m6Yn9r21KGor3zYyDWgBn",
  "key24": "263XeZpvWQR1JYcGC2FFeprqCzbCyMAQM5HYYtzspfRb29RHZAPmUQWD6Erh47KB1g8rz7csUmCJfjJoiotdHWYJ",
  "key25": "TmZPi4bbJ2XxXgP8wNyFRb7GxoQsbeZnfKUFpDN8M7LhY1kB1vB2wh5aSrzfEegy7dyKn55UPkaNpQP618noShF",
  "key26": "5Sri1eyyrpW7eL5tj5RHdcWPbTVFQJ7f7CWgXpALbxEJcupaDiKp4UTb3gFpkPC6H7hjTYa8YGmA9CdYZyofeGZ",
  "key27": "sUF3xXNMpbJGDyYPrBoMnofadjAou3eyyzNUyJQDB2FVAq6VScwbsh417N1RPzZ6VDyEVEuPXVsKRjxumKYXqtZ",
  "key28": "3cXbTA234qA8gibLwK54V6hs4cq7sviv2TjLnESM8L8o4iwBJzqnMuUz6ewExXvVsj6m7j7X7LzDwE9vXKPJw9Hh",
  "key29": "YLjMVQccmSv2PdkA6zHZgVkLTZwLPo375vCJ3fNkdu8aY8pkUPKGLWrd684m1xoJAo2RrozKea9GvLTFxed7Lrd",
  "key30": "35fJubfonuHCoPac7vHfXJsLXpML9ugbjnbgEtwCwYCuduSk1zX3FjGAosq32cAbSfZ6rjoTvm8PwnspnaoGRsiD",
  "key31": "5tqxJhmbBr6wMExnhiZRfknFNXMmrSaAxAo4fS1uFckSGhdDUHdEpa8GoQ7Swjx7TsTFFYm5ig473Y7KktVdhpuV",
  "key32": "5b2rWxef7jLRDvN1D6YVHTyKoT765GbagzDZNhbRvHeDMmjQsB847KemAr3ThG33A4M8TNDunhLqzsLMTsSKqVKp",
  "key33": "5HuCNRPfToL1LfcJMJ14sLP8bx41ugpaZGtZ5tDyZwLcxePnRMekMfvcGjgBxzGAVuMncpUQ6YTNwHjysANTEzpj",
  "key34": "5eiMU7StksMa4793Sn4g39Uhayp2UbhpLLGGTvfAn3hzybsnqSF23kjeZht85atiEEXRgSQMUy9z27H9AcmvEQ8q",
  "key35": "2vhnfxrmkEEWaFHhbbKqJzPS1XUG63SVTQBBbuH8pohoCsUNgLniEGCQPGAh8ZYANnvhy2bZbigUea7EB4D5Bp5j",
  "key36": "29V3Md9yc7FM1AgLzKzX9YEKFDT2wT1sPensWSFadRtxwwJwu67rEWukDWeHppqqNZBqP1PJBRwYvGX9JuhPe4bq",
  "key37": "4FZvS2gRp5afbYPjfJ865jEJ9U9wxVYCozvt4ujN88CEPXkLZg1mJ7KU5z3Z31LUXi1npgtf9GGj6rkwhpzdvnc2",
  "key38": "3hWxD1bxy2ZxF7X2DGuci7AU9wJ264VQA6bcLna6tuF5ZDwMir5QQV6wvdqgbu3Vz5YYGHVim27QafsjPVArExGX",
  "key39": "5vZJdMSveWFUuVWppVMtJGZJYUqTZh9SNz83y6CMR2wZPN3VG81fMaECTEQh2BWQgsrrumqJEaau8j3CcBsGRieM",
  "key40": "5SVYQFJWjqkmcoEYtrTqkoQD4mVrHfPKNdt4yP6ZEwQfnsUTBjMJjfLr9PRWfRKHWMYiXAFUxMSCUmUBYw14fbaH",
  "key41": "RhKmrXHtWjkasXzUgaByc3j9rMqnRBe53mLKvtLTcouyN7XQxLp3QrtPUz7a2i1qSdaqKUSwnaj5KK34oj7mcnd",
  "key42": "4uGNf2GErNPHFYUgtDKMmUDU7pqVMbKMLFYgyVB1VJc8Uk2bqC6WhpYsg8Lhnb4b7AMspUgDwhK97MDirFPH1hzG",
  "key43": "57PtWPnUQBctueRojT1UXsGvBgd6tGWMunXcDhEZdQRosdkZSrYbyrqs5msJmR3FPSKwihP5Z4Fkh7fTa4hHAiH2"
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
