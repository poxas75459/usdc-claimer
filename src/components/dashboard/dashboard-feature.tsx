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
    "59FPb21EmF5wyrrFn3ERbM5pzsfCf5aUHmsJZnDHvJepcGbnqS2FiDFBVWH7UpyV7i6rBbp9aunS9NVYxsSc14WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nUoHdXx2XQt75oMAd3XYeFN8UQX11kdMHL3GnUyr4Sq6H7fU1eJ6oih3wv3iJk3GtQcZaTA6TH5n64v9nQx7pqS",
  "key1": "23zErKgnCV3uCThCqKnozwvUZTeHbyUiNZFeF7FMMTputnkYQ8p4jxwiKYzrynjLrmSWwEEZrns3cw5UCJgQNzqC",
  "key2": "2kypxbCgwnq6Ah8SUHCALEF1JSHDrgA4D6AHMaT3yAGinjYoFVdz9pedo5ykDs5fkiVJQhUUa49DfVjKH1ZUfyiX",
  "key3": "3eey7dLEUaTcDTE7qerk8qYJFBtUgpdvpaqRTwK6XFGRr34hAy6SWYS6apUEHP8khjv9CtPVkfQBVr1G6xXJ7jSb",
  "key4": "3PYHQDis7ZTmwWckGM592bqfzBYu1Agz12Km8nWjJf3YTbzNd57fXTwqCVPZkTqAwmbTwkeQWZBzZopiaSMuSxCW",
  "key5": "4FxpfK9w5CvvKMz2WFee1Yt5sSFMmHhcCVhj2vVMXErgd4oAtvcoxJCqfb4EtVdUkjtmDWY7itzE7yFQ1rH19sVW",
  "key6": "5Zc4AF2iRnSnnEL6C7XYD4ZAfKtnA87fFSBPhGNpqwUmANHK45zKxTmUfqwGGtCC5nVWfgWM2BRUQR1tCSwxA9Hd",
  "key7": "4ovkdWunWNUAqc5fCtv4AbZDojnVrvaEiJ2q4VahsZK1yP6f5H7TwZ2FpMRRnQBvbtY4jwkWdVGjVhEiHGzsZ9qq",
  "key8": "2H6pmZEQFW1DJKRJt6z3XwJXrKG7WQ84hQzPEdmqLmxCT1AdmehpA11WV7vhG5sN1dV89TsqkMmZCEcCf4XyZSuR",
  "key9": "5UA6wVVdBT3Tp5o1DSdqLXfvW8VnepTJnMaenh8QDnoZdBDgDZueJdXFAbWpnpDmuiYkWUJwHU6bFuCNRB2pGJh",
  "key10": "2Q9edfTMNHgnBZU5FBV3WRhg38icuNVjTXCBfQn4oxqZ6TeKPbPctDfVJ4xTM5iHhKwt8GvjASenmtW9HE8R4swk",
  "key11": "66fr1FnfQjsGwXcmfNA6gf9KLYirZDhzwFrsybtJsc9GShMoCidM5mTFvGZaYJPZwYifkXAmEbKns81UkXKkW21h",
  "key12": "5T27SczeJG69TsWvHUKZAjimF5wvVAKejKK2XUsoJmTf9XjofzYG1dvVeHqkJjepGwhjBpG1sB6kySj9Tr5BZymo",
  "key13": "458SumUSd2Pq1fSpfgNQW3cR9Ksf67kLNkX3q3TZqfVSDvQAcavTiwZ3PW99zYE7J6Phdcd4u9bLPUnvcgKbpDaA",
  "key14": "4bqpJMaCGsuGv2pRPPz5MTyHWWjTWwmD7k7cvmBon6fGpDZUxJN9LgNwgdMKyfLcmz2tTuNEDQyCFghJfDjXT296",
  "key15": "51myJHkf3oHWvaE3CmK1mv1jLpbQQgiouqZuKpPrvLsRw6baUvqsCsTQRdDHCqTzBYTLhksbmn4wd1x1DNU6mod3",
  "key16": "387G7rKa3wABf9hRuQC72ewg874y6U1XSQNiUf8FASPKxtWRYMtqmbB71GJmgqALkFfFC1t2TwpqPp6aM8oB34kW",
  "key17": "48M3XoGxsUSSJnjgshijbQ8ewT8DKAtsDySx9P94iFHGtzdeyE22vtjHQv9myoAPZS1jFBt3u6p5Hr1qUaS5phwi",
  "key18": "67kM2G4aGLeipg56cWY32CNUoKFjkNdJePJaPZaYn6C3nxAkx5FZQfkswJMHPvdmoumjgCrUnnLVArBp7NjYupe3",
  "key19": "2KtJK5RTGWvzSbMEorory87fv8EYkbWVjgfBrPHtsbFCpzG9232JxBu8ToSZrv7LJW4S4WXzu2nUoovNFvM21Yy4",
  "key20": "4aUA2GJzmz4wyPDFpntY4EQ7cAfe4rTXFZFDg2qG1vuFG5qCvp3zhokh4gJ6tvMVdeAU8uztnYhWyrxh3Jo2qcz6",
  "key21": "N8SUhvc4aMnnJGZHZg6LqNYkADx3SRxznwBu4jRviN8Zj6tkcsWGcXUyzambrwNrVKZmLJ9HQk72pkWjwB87Q54",
  "key22": "Gw4GqzdB3VwwzpKQoRfLtz26q1ptVeJgWzWKuLvrut7EUy7zg3TDCdxvhD9Eeak86zsC3qRhJZee9UfBRcYGGHD",
  "key23": "4WQ7UghszhqmMGycuiyTMkKoz7zDcUcg5TRXNMgboS9coYquQiDKy1W72wAT5YtxKKNmdxGgczkECZpywQvxANpp",
  "key24": "5LHqafGDfwzZs171g4qK9wJKbCUJohQm6HpXKgkQ84qkWfb6D1oUjp74Gfp6udvzZ5sdnx6YAS1qtzAEGaN7j3h7",
  "key25": "3qGd5Hrs4SNefvVnMbD9FyLNSyfrwYTT8QBaYfXtgTc2g1dPM1iDVUJsw2jQsjRZ6vhZoXFEZWf8PeUDkFCtKcSf",
  "key26": "5Y4MSpUQUNjhVZsdfn4jtxXdVJutbJKTbHHBcrFLPjyaCseZtHqMwzMtVnq6zrpoPsQwe5kAC55Ba47uQoxA6uYq",
  "key27": "4dUcrZ6PV7U1MeUVoAQu3r99tjLdZFFXVZUy7oE2UCeC9Th3oSdc91ZBQEMEUQ5FDdgoG4HVSvTUnGBndWLVpKoC",
  "key28": "4qhxGMvcg8kHka6DDuMHpLRvX5arRxcf8i2afgMU6ZzWBVKX6quHRqM9kLXMtKmBc2CXBGQDnxg7tjrhXWuCZRxK",
  "key29": "7yKbjszkCqFR5jfDfAM8rHGnkpumfxgNEgYsJ5DXkhHW8hUdb8aw9RFXFiFTXfJE4GUSUg82qSKFBtaKRm7XXVG",
  "key30": "4Ejzyv8zGy4q3RzWMGDgMhdAnEKUjGaEJx7mrkmc2UW9i63RazLhHjt85gRpaW128mh9AKmWa1v4vRpTLmqGKbBT",
  "key31": "P9P1tkRdpZa4dnfLsq36P5ZMKs7avuBBwMPCd6XTpCArEA1FQQnF3BQxzwjjuYtSV7kFwvc541NkyGu4mLJsZqP",
  "key32": "33iafSF9AYCLgsGtoYnevt29mWhYHsCTt3ABErm9v4BM6NoGXPqAbTupt1hDCNnZFm39sNPFYZfhATDXEPzys2w4",
  "key33": "45BvYwAf37PjBxKmLav3SPYZdZEuz8312TUQTbM3Fd2aQZ3k8vmrVst1YR4jt4kfqhg7CpPitw6pyw2G9u6AukgB",
  "key34": "2DhxNaQ2kgTTroHopEHaaDE8dmQkgcn5sZG74Kf27444uZaTbMFpbY1fTktorMpJK8s52t9a8t7QXNKn4mEty3jc",
  "key35": "Sap5XAXFwj5pUg3tWx3u45M2arWrE97tdmZA2pxFk1s3oHRVktrxW8R6eUwQetzh87Qro7aBJsbBWWmxQBP1CBu",
  "key36": "LApM5VBc3V5dFowpMhUYNMZ3LLR11z5s9CXuMpr9ZtVWPs6hMqx8cq6f3VyvB4a4TBak8iBTNzY1AZMhbnyX3L9",
  "key37": "5hYWZmCxs2LLFyyzt2tygsgHdEcRF7jASXeCoxe6Et7yd95zLSpPEFMJdT4HBWbkTDVzNK1XyeJhhCdAXNVh2LFW",
  "key38": "5W2vdibwY2zhYqMCTVxpXd4usS2wd6qRBGUx7acVUbKDhvVhubW3uLL3pUVWNK9L81LT84D6Bo2mRTrBDVbUEt9H",
  "key39": "Jk2YqMinsw6aRa43GqJBZMg3XWL53L47NheYYj6AqtA9fS7e2t6yb4FzbqnGYo3wE24JuhiqxKA2Xk8zfnHbngD",
  "key40": "2SwJEBpLWg1S8Hpsh7CgsEJBFBdRvdKHAKaLUzSrroGNr2qEXRbNKj4RNspJi3dpkBaJwyQJtHeiAymZvY9GvqPK",
  "key41": "4bspRUfKVC554b77xy2yPwqyBtDHtKqZBMoJKCaQE8pX5mGTCWHXCABf1bcPpkNP9HmUaSi2vQF2hw8Svs4VCxC",
  "key42": "5zyoKiBajk746mDWHSwQJcz1mKneDQR9bBs4ahdHc6eJjcS2v82Y2kL9MPR7Q9ZGUcLhBCweVEeevX2BZmVwPArx",
  "key43": "2ibUZZyrXC49pGjCHX6ZXsfgxnEZA1WzsdGLpzcH1KrLLVVmYJhPHB1iYthzg3zFuETwjZKrqwfvvDnbnpPLj7U7",
  "key44": "4igRaYRfWab4SDLnZZ8iyYXbzDbT4CYaywUR6Wg8bSUgRYKejxEFyWG2dheHR2afgnDpEMqux5DuCXrFibD4enjQ",
  "key45": "7wpYFS4aZPYgjuqRiKzL1ByjPZzzM9VFM5uAWqzxf7YEeqHSYCv9YWdqN7rV414KFSTS7nsThrFgpQJ9ymbMAYj",
  "key46": "28m3HSb35f77WpRY4DYWHPVmcsAHNqsX4NGoXprPcSpmnLPXemzwwL6zjQhHoNusBeEiLazxGws524ZsSkfKNPfW"
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
