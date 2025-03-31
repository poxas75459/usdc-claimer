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
    "3AaBhAFYa8hpS3gcFEm92xiFuTrLiqdY19ZQT2QHvdbMPRZpqS58U51cFLkFjYThDX66YGqxSkjg2vcUnk9r7uxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDoBmwcm9FEbq7cwxVWNvG15Cq6hFWrE3rCnxXrUg76j5ESwKwv5XaUXmBq6gRHY585oy3eGJ6i4u46nY4Q3gZh",
  "key1": "4qHTa8Qwb8T92EENLoRD6uRJnTVkTrMSK6UTogKPzRzs5gpgsAHcXTC5PiLv11U2NP6PdFckghyNiaKcArzEHt2K",
  "key2": "3b6dKEWAmcxp9otc8DSJnKhR9B2sLoM44akTTz6nejyCkexvhXYtsoAjXNnZGGjZE31SzSVSkiLgxfWQCkKVc23k",
  "key3": "3Ver1zUmVU1zMadvv5bQ5h5RbDGwjZ3AjMECo86f2DkTZCFNgq3CnGu7899GnMRkKZNSnLzumFUymcVGF9Aa8KuK",
  "key4": "2cErHdwau5Eoc5oPx2VTmqnWrDfiCYkbrhQd3dVua1vqZZB3nKhXihemHpQr6NgCdEN5rkJFyEV6XY6VoL5NMw5a",
  "key5": "5KKD1WnffaCPdjaGQMW2rzzk3zWk2dnXyyZPtixcXgkWWDZjCKydzYYN4mxiae5jQ29jY2eww1K5aDQ6XaV7EWon",
  "key6": "3dRL1EmBnf6JSxTrXGjhnkzhtwijk7G5NnMvKPqP9V31d7noWiMMwWbwBRJn2Ap7QXvNNQKff4C85xzvQc3UxWDk",
  "key7": "2FAmeK6rvgCYK4Vo59KsnRLqjQfWQGRmYX7CVb6QH5629Q3cSHfKRr4gtzhb5uYabqx1Zc2jA7uyRKuct9YkoS5g",
  "key8": "QrnHCJ3ao1AjAPvgjt3SScxUyCd8LGe8pxxYYMxJ3CeA9QVetCoHsPNEbakuXBsi3CoAa68pKrAe47B4k6uvKCf",
  "key9": "2uCEbjWfBR3fK5KQcUfqu1aTLhQozN9sp6EQCtYsXearK7v1fyv5EPf1ZhvcCQy87y7tChrFJva9xX2V5rHbDfR7",
  "key10": "4MffGPsYPdLEoKTbJy4JA199gFhihQ97tcFYyV4aw2T6h3BJJCBkJVWUfLePeiuT8q14wmBdn3v4Gs1LadwgJmgN",
  "key11": "2eou24aNVRbCZ9RhbvKjCJiPvSsDXDGtnBvQ52RkhKn59uJa4A1WRsYoSJFchKTWk39vW4kSotzKY26a5V8B7CAX",
  "key12": "3Kxu5jV9XSCmhXXLKakGV4HZAhUhZ75gCavX4wKpfT7ekgrMfQA8EbSAfYX1Ks9XXVrfsL4fHVHxk5f2dRa3az8q",
  "key13": "bZFPGwbfV24oKxinhgmxjnR91kNm5op1jHNxLN33frPMNCjtcK6Qs7hbdA5k1qJLvfGEfHZMMpYFTu9u8q8RbCx",
  "key14": "4uWD5geh3bJ7kEX3NT8zavV8FYqzpgAMTrmttSZTzL6xiuPW9f2UsZuTkRHmUwPe91NfAqbwkEbmatTRAaciMMhG",
  "key15": "3WyYq63rwenumvzfVqTBMdLZjQMZfZGCGfZFaosC8NafXreDQD8e2G8B1qLwE12CBhTHmsne5yPzY79mFM8vwQUZ",
  "key16": "4pZengmj5WEU34dKtsKSAULDMjgzPEuj19Gm1dRvwe4Q1PsrTD2qbegqaD7Lv6WNNjX64L5Jq7JUzv9sBuQbKM2Z",
  "key17": "24oqAJFMRGHfLAKfVcxu8m59pVJqJSNrwfp3oDJU4cmmP7iuexB6WD5wpG6WmfAxTf33TkyvkSjCYSj4iZzzQGkV",
  "key18": "xvQFYhiLYYD2GH4vGKjqT4UcNe3nKnGuwEFJfCFj9ysa6NdBkoJETPp1wYBDzRxPaAS312UrytRU3Cf7bStYobE",
  "key19": "2kYvXDiyNPuv9Lm8De2BWED9MDFu8PLfZ6YBVBF4y5fZfhfYkGCCvhfSG1mzRagqMx4JKPySSpLeaLjzFbCBMFQm",
  "key20": "4U89ZynDJ93i92vFzwHDShUxgr568SjBiZ3nv99krbvAVKQAK6pyxGW1d1UR1WbeDip9VM5LGNVcKgDxWBoGyTnA",
  "key21": "3uBEUDxvRSVpVqv8BK8NhT2dq9ZQ8N7uduHnnzZKwUJKW3iN6KY9CjAuWE8Aj1aB3Dk7NvuHY5QwGH59jmMN8FSh",
  "key22": "5qtXszo9SCBFHzJhdu5j75xW2Gu5TE4tsporW7RUAbUT4qmmGeop8CwMCuPH8X3wnh2Fhgu5sA8rThSQJzRKp1WS",
  "key23": "4NsXLCRRSqWv7vzCMqNfG6o2VM7MaqZqkNrXUch81mRhjM6it7m9EU6gmKJbGEywPPyjBRtPmCexXbQmjbLtLjAt",
  "key24": "65XUyizwRe7wyQjnUua3wguPq222QhprbXkKfu7EeEvsfBejg8spk1ten536tdzPCqC3vppeWgu8XnRVSie1Hwge",
  "key25": "2GoHahNbgyqv62DSJeQhL2dcxWjKfyGwRwnxq3k3kNW2RaD2NNnbB11ZJ3nqeijwGkEVJbewJhthocbebCsdY1Pn",
  "key26": "4Xj2AXvQQJ4UdtQ5BgkzekZ79mrBwJyDFcbatJcLEkTJ8cM3buwMHqQPyzTtVewxAVtm1WkCDEHGhWvPLD4BWo3L",
  "key27": "3M8J9MosgkxiBSiJ7WcdWZ1BKh4VXVp1zqmHQbCPTMz6k6kZe1bNh3dB43bujrsCHjR9kqBy9UCi3vBgHmTiNkwn",
  "key28": "3qDxC2bBiYw8L5sVdhDpvCrFywT4mF1hbVornwDeCFzuR5uxssmX23j5pX5Aduy6DiFTgeNEKmqkVJ8jL8874yYr",
  "key29": "5j95d7rtttxEFF7MTVGuAj2se286PJSGcCkt4996a5KQ1Txovaw8TmHP4YP9knQy7w2QdFj6dkevL8xPgyA21pQc",
  "key30": "ZN9orZc9F6GxhNY6Jad6kzDufTSRVsxxwf9wAEjN8QWY1eVa3QZ8i4HgbSUqMGbUbxTUkrVTscYx5NauhJHEAj1",
  "key31": "3vVUwvChWana1FFJ9koza7Ndx3TzNyehYuV9pYtVtYw3zrigDujRaLmyFs2xS2sAiyXe4FqrnTmdszcTPrJsbJA8",
  "key32": "3W1YJXCpzuFxaH7p2kRFfSf7F96zkDCPKYdmFXdXBhEVoQF3eatzNrE6tu7ArcpAGLCyfBYcbbh9tzvFdRLoHHY5",
  "key33": "5VdgZ1Tq9i5mLMoSoNmwjdkasw2vwTYwTy21mur5WHKm9LewYCRRxXXa23seh2ieACPCo8QREJaFt1wNx3bGksYL",
  "key34": "chEEnGfbPMajsSwVtcwL7a7UYGhbMTooztp3CRVPgGFkniZpkE98yXCoLNepxmzLR75Vb7Ao97821s8CW8frBwf",
  "key35": "3Lb3wGkSjkoSVXmGQcDzJGMQY6NFR5cXV72DsqM8YJi2Rq38wdbfqcNeF8QSF6D3mPH6vRemvLQmdLJKgBSPWZaZ",
  "key36": "3dk156BB9VEY5bF6exgxJdBYThequvA1G4oeVpLkxdX1mRhyBuBMQBJ2aeLDvh1yWgPzcfaUFLJaxZJxxyiSDGax"
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
