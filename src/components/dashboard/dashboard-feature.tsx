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
    "3tDc5J6S3wM3Y5PTJ9RXvyL5q7B316xVGS4wCnbEkhZsKB1jVQoLns7jXmtRKkobUKa9FWs9Pk9Jfd36BXDpxquP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoYaMo68CuvFaNmiqS5HAuRpCpzqJAg91caSy3oi7YNr1V2sEYfx1geE1ahLCJZDDq8Ts32BeXn4nVqM5RbtK7n",
  "key1": "4kt12afty185QcEVTyKvTFWZd1iri9yguuqGKnmSkCjCjB6bAYU7jL4EsKF6q7UEvM4SsNyNCN3zLY2ep3btHRm6",
  "key2": "5JYBozTyd92iRB44wxQt9kNUogz2TMpLwVy53NZgfZXUK3eujdHSMrH6LYZsLRQvEEu9j3kfkCEGcWEuU7Sifu8M",
  "key3": "5n5fEbDcowd87LZPqgYXpqSGXmcEK8cZa65GCskhxLxXrozES2uunbAgMJ7Aa2RyAr89NyJLnYZRoJ6f5dcXrwSu",
  "key4": "3VDJXrdbAn3JqGGDzwtyUZerUVSxX3sdeWrgZrYDnzQJDuWp6QuEHsLXkN6VDs6LWRhYmvvi7a4enMq7dC13kNvT",
  "key5": "2J5johEWe4wZPZjSVHNSkzFQ5DwaK6D6D6MzcVXBuRgTrabWHZ6kWY9UyqodNL26LNhz2JvJr8pXEbF6j7Lc1AvL",
  "key6": "5TgEhFnaU6j4Tbwxi98C4Pn2CUkiJZ3jWgPk86jz4rK7cuQVSk9hKkYzeYKPbyoP8XVtNqGGaFMkUU2CFS4YxLeo",
  "key7": "5xt1aSA26ACSZwDSajFnkZ5QX9AVFdmA1uBiYwtX4x5ME83ktrwks1UmJctKZwMvrSYYVcaNtaid8WcwR5j66s7V",
  "key8": "4NyTThowj88wnZTMqvh1hjY878R4eAjxscnykjg2Xn9Td3vwNRtciNZupyNJ2dTjrPoFbyF5SjE8KmqsorsirSjZ",
  "key9": "38wC1ZW8erZ6Mbrgy8Q72uNi7GyKrnWn6FCV7dTw5WVG3Fydv2RoF4Z6mScWKxf7EYJdup5xeCf8xwh6JwcAS51M",
  "key10": "58YFLkz5TRA7YtAhnC9Jp1fhMt9bvvjutNmx6Sv8j66eUjzuyicZDUjozX9iAiyTeoAygXDeMnycaDX8rdgjQF5X",
  "key11": "289ZQTk4SBm1ZiTrB8n7vyKU6WgBxfZEo5mcnDZgEZZMTZd16rN9BycPxrLnm8euJcstMdHeq3qUuHRGhuGS6ckd",
  "key12": "266zta3bK6WHLES59osiCgqrm684QkRZynbGZt1TrsRzmhw441cy4Kr2XRbGqX5s73ACX5sSbtGS6gS4993iEBEJ",
  "key13": "5avwyyQj7Q2JXqWrKVoHRXhoL4p1vKdUXzA7VUTmHfrKhQ8kSvJPmoSbVh9mcjzVhRgv5dyc5c6q5d7AvPsRkXWU",
  "key14": "4XyUqSTzv2Df7jj1mocvMLeJ3NnfW3uH6Tf2y18mpp8CR9TQWz9so5AGBQ9rmeCEtB4JGWDMXWJJgenNMLpKHdYX",
  "key15": "2PnDPcj6dfEHJ9c6SiZCpKysYcDA73mct8XnjS2M2oaJAMKm5fbTwG2a2D3Si1gmbghf1EnVx6VNhYKZmZE94kp4",
  "key16": "B2dVkCzNKwHAJk7WmusuzRnSCBLy3aDjThMskB7SXNQwHMyhiXvYE8Rq9M81pMYrCrSZ3BMDxP2oAdgTxndL9G1",
  "key17": "GzbcdNJPZDVynmDyHJHobZ1ACscqsVidyiTQKhbB2tF3aFXescHAHXrhRpyXYN2VkSjGamfKqGt32RJFJgfaTfy",
  "key18": "2fEZAh7ToGhAMej9bJT5Vuyj7XD7GXfkHSLAg7DWjQXxa2gVEu8bfPAkmhRjg46Vak3RVdynjxm2ww73c3CPctbc",
  "key19": "3kAnFHLJbVcEsSQTz6YdRccTA5wMbLgNaGUAQ7DujGBYbDtr6zQMhEY2bTkqWJbBJVi8GkRFViSwS2LriRizGEKE",
  "key20": "7tLiV7kj6meozGCu5JQj5GzLHg4qcwe6k2YgCBaQmkMZfZqRZym9h7FkSfvp53yNWWVi1ECs7Ye4TKjPfZUthaX",
  "key21": "tkEnfXTszbDuvikMbAKszVQs1oh9XW3zZ1dhTWWftCgXYGRbVCok2LFJ6P1GS1sqfJQEKvoUfRfbWutjr5VBkyC",
  "key22": "4xvnQZTrJT3DZCaEBG7zwX9rJdL4SGnyxWaD5GGG4v48JDi5bxphioY5RpNaMTAD4uWvUbxy9aaCxjjwPHRdNXea",
  "key23": "3sxkEXnR7XSXPndwZRHbhPK5BT7odB1KP2Nu3tDdf34vhQFYYUyM8apibE7av2DMsv82nPkMigb46JoGXDX59F67",
  "key24": "2Jhv7yyrLaCjQqu7Ur8zJSPCvsikm2yR9WpLELq6G5XFmXunn9fEjAaJ5zdDTRYpXDoF7CEhUhnvof5hTZkBjR6y",
  "key25": "45zBpiqxXyuGgjwz6nnAKfA1SW4d6kty59zy5pCUwLWwgjR6QTWtFEgsA7ZdDwFZohCnLLAgZzyC2riKchqJAT8A",
  "key26": "4ackbTehqfhDpJFy48X7gv8SyQZ1E1fF4APoX9wrb9nT9RtMbtZf3uh6oECbPoFZS4ebAj4BoBtSiqWwqFsPnQTW",
  "key27": "H6p1TgyFPcjna8z7Kx5hcvNMbw193KJhiMQnKGFRFbGwUChQh2nVNu5BTBJMEeGEtUXLVFXRkuPMLsvLPpPDP3X",
  "key28": "64UQxgp5LWZz68tHs8rqHaMPXcGhtQtu51rBLb2o8rGozQgo4BA5xnZNgLrgu1uPxYvFXaX3edtHaFbvrDqJHed7",
  "key29": "JEWgb1vp5cx6Ew3QvPzUFUxmje8xxB8GMiDtwrSquzJv7ubVJA9BAhVP6M4kCNEaTFpwGoekNkCKnCPtiycugae",
  "key30": "yzZYVgxqt8EoU33udnLKzgcy8Sx7G1za5NHaVvCzLJNPw2UeTXkrwem998MVaofvxML5H9tzEEk8rNviWjrX3bA",
  "key31": "2uHaV54sXUDQUCCscjRyLNCPCipqYL128YymXaBcGrPpKQ21TNdGLxHNETM6QKRCNzBwf62H6MjfcgvEjRB5355k",
  "key32": "LF286JD6JwszP4yDrocUbKLoUCxGQMMBAxxhdYDTSt5duqwdPPr2xoxdbnGjDSVt6FHdV6uZMWXfRyh59dADBwg",
  "key33": "26c9FPE1kExb8ivx7R94kQLLb98RT5WKDosjKHFak96SQwEKCEWcacESBPZY7NKpnsP3W8M4qkhG6zevWpKC14nh",
  "key34": "3cUHR7LXdRx34mTQNtRDivorW56msPTETVJ8wqTsv2d4iQhb569TAHJwyWxiWc7fs2q5R9ZBc1dt9LMWXe9UUNAC",
  "key35": "3p7pBL22fsuN7g8WrYndF4GAr4MY6Lz6mHAojvT9yGPJ92Agp3Kn55CMFm6HDQFUs7YFJcmoeH3VjyYisK6rhPX3",
  "key36": "3faPMtd7n3YNaEaoTpM5EDGpfaAHM1WJ7ZpMYoqnkqxEvGhNFhCsdcRkGA2HJv5s2QdJYygEBf9vM24N5AmgG4Gx",
  "key37": "4hrUq9YiAVtQ9G8MhBy2Pj2CQWacBiXSJ8PPVBbRBCk8J3zhuL2Yt3RJx5fbdGGnmqBSEv5HprSYWFDrKuZ8ibi4",
  "key38": "4HUeCCE8wWeqgrcAoV9FjsmJqgQdDeBqg1bkc8XVqBvLkFRzSjynH9G7cwyM4WytWkwh93x9TdNgNREymYAvKQSm",
  "key39": "4oirMQEyf6qtsTWg9FXaFDqjTydUXGmHei7Y6CZrrgntyffMCMV8GRdMR4pogTvJTJwMuDDq7sKG6ZMvRpexU9qV",
  "key40": "2PMG9TTb5ggUvdYLgQt6rrdS3fzbSbEFHDPHtKvRfJM5zA5buogqETUMPHANa24SCmpR3sVvfZHtWLrEJaKb5arN",
  "key41": "3DEKiRxDf4SKHgFsHHiLurPgqYWfK4sTKLjyPyUxsorCcMuFKMos3f9beJVn9hTbkaXaH3Rq7EPo1ggsAQcikDVn",
  "key42": "qatPBZaDfahPjR8uGPadfhKq32NwZUF39KMZ5fD465wHmeVssTpERq447HtNj6r9zqeCKqU7kNb4tqkrAa3iuaK",
  "key43": "2xc5RLyMGJNfzc61NuUDn4Gv5pMx3qRwFQmUxNH5s9JcmwrUbaK11JfaKdBpdv8EfKqRkgWnNGhiyhW9aurcek9P",
  "key44": "5xZgnLAzdsKUpQR4YnNTzuMN95p34XcvLRDQejsHXjbCWpTX31kneJ2726tjSY4hDDCLpW1AK2kgHnGC9DnMtAKW",
  "key45": "3B49mvfBKUYkWab3nM8bgDf1pMwnyRVxRsqhV3MRpoUHR4WRWXakWAnevjABRSA3ErDMCwBrFCd5iudBfDXS8oE5",
  "key46": "VWvWQXUP8JEusqKYLkt6vJcF6MuAX7H7zEan85tb16iQac9GZizr76d63SAgRjPrXDNypvYi5VKbmXYBKPkT3zq",
  "key47": "VA5fSio1pr3hTRVE4koviXaq9XVw9o6UtSS9VZBD4qu61XcdGDWuJRNbxWkPH7utfGhkyNugFHSipmpdsaJY6fH"
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
