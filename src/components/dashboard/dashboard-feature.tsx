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
    "RpYwTP7FysCnh8cnGYM7iD9jPQH7bYdYZqL5s6AFpPCnqCsx2LQh4fnDu4EnPM34vbo4ZR8Kp7i2DieJynjtHCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpUPCzam9Yup1paz6xQEi17jb2Z69SVTwctCYopEXiWQb7kQuquCnnYJFQih6KQDQBst3XcVkbq3wBZmymJKobm",
  "key1": "4htfCrcud5njHCnWcT1CrKRaWSPq6ma7Z63qaqXwrLkPdixvDfSuNYmQknwE4b4XVRZdtE5LHSHzkD4So1GS5ETT",
  "key2": "igj33GeBtryDdwCVUYfgASh17as2Y8Yggz35tRQgxMAqHCxhNMpK5Xcag93gRbvbGqVojgvnCpWXBxgSuvPFNGS",
  "key3": "5TospaTnreSMFk5g9waRbxmdG6VNyjMQu3yBrin7DVv7sf3JZRAh59kXYgcZRrXvPLt2zndWTvY2F6HCTUC4v5ae",
  "key4": "3gMwPQXAEAizYNzUDMG1CQSBPfryMb1qh2o3mEfktwP42rnsANb7kXxiJWwVRJ9gxLj4u2JVu8WRMEhmatFVp1d3",
  "key5": "42SKBRqjUHjAwC4j5Ux3gzRjom9npW2YTEbnpNTHmzM25P4Fm28sRY6jxEHjiUtTDeM8screV2yXchUL4wzvb6pX",
  "key6": "HmbZLLAh1RfYSQdgUCNJn8DY8Sa7XRdtcNGntrhCqBp8LRtaL6Vx7U6EaoiU2ZxLL8ySKvyuUbvqLRLMKoavust",
  "key7": "2br76cUfEXJy959XYh8qJUUZeP4QcjeDuwzpCvFvZ3zt25hMCb9TKVs5unDKaqdfPuR2mQwzoafA7ex88MJ9wsz5",
  "key8": "3V8iokAoazEmKoXqUKMf2PXW3BeLqoKmjmZMqdkMSpFbUW5srNE18RLJwexvjpm495T2m3QPxShqXCs1riTCQ22z",
  "key9": "5cbauKaQiGcK7XSKqtaDdaeTixfaE4GLZs98asXaDuJQteX6qY3CvGpZasGNg8hbaMJLTNY61J4rtMttv7mTRsFz",
  "key10": "3CMS8Gay2uA4ck9suB4aZo39p7E9AmJENzbHnEtTyHHfcy3jnWmgP81G3zrudaFmNAAj58LnXq38sxEwwXuHqjfg",
  "key11": "4kSTCwtMvhbgd1RkqEcdzt6npMeTgZmXSpHcHfafuHyfpSCRzfYuwKeo72ZTooJFY8otzt7s12rVAQmDFJwizzvn",
  "key12": "uGwmrdEnM7bHMjPwF4toTGY6g8mXanoTFrMHqv1XAzfFTH5Dq2YPE8H9PzzneNMPZjPsVhdqG5tQur6TiMkqkEx",
  "key13": "4MeJFCAV5r6aKh5xVkHc9HVcDNUMPBZZAhwmEiQfAX2gG1KKohCezeMrCpW8WXCzHKbo2NSTJVDUtt2RFbwZUqSz",
  "key14": "2AqgmE5xWZPT6WCyW9A2FAP3MUAkkQwwAqimnXTCesYRkYEau8pdT2RjvWTJVWTSVM1swgAwqH3WKDzHTD5zHWcj",
  "key15": "4tnnULEzFNAPJ8meumDcJBhAZHMtHirnnnhsYAChy1e6VK4RZcXreKDi6Lizdp8BnMC9LV97XcQ2Qk3EMs9ZTgNE",
  "key16": "nSXyu4EWFyooV4fZA3PZ7MuyP4xjdGDiQ4TwxFgGmYQ3svjUkY5rxAhZUwPBKhHwuGkcddWpe4kTF7XY3fefMdm",
  "key17": "4GERzV9yCtdYqh4J2M6jNHQPYHW15TmxqFFMCTyrhJ8HumaM51WWbKYV4JRmEu2G2dpmniCoS27JAxVthXfSYVFf",
  "key18": "2W784WjBVXa3sLpB38WeFmhGnKdij8tgbo2BQgeBpdve8hvGoHCV2VUN8uLyzF8MfG58fTd7gdpQoYk5LaKdoAY6",
  "key19": "629sXMJfRsGP4cV2HPuBi2VbCZwVynaeLsb2Gs6LSHeyjNpBae2GK7y39Y8LKvkPCM9MCpFJSmbsfM1uPLykNyLU",
  "key20": "4fPA9ceroJF6w5692zgNf8hKrHDGcDabz33pZtDtZ3GNL1DrwA9ECxc5HwoJS3oQHgKnhVJ8RJvaDiT75jhfLsXC",
  "key21": "2cJ1Ecak3kH7PuA5YbJgDPGoJgXsiW1tz5yDgANeR6va45TZWReBmvYHaiZYEmECX5Tts2dbw9TT888Yx6czmRys",
  "key22": "3PMmCBuU9wnRWoejffddfrLqpqELD9ho7Hy3LBSrVQL3u6Qp6W2GAEaxF8i88V7xTMsUKeGQw85kSfDgKbbCVger",
  "key23": "29hPf6UU9i7eV629e91bFND95nfBZT78BcgaagjsPa9kKX5U4sxXbxWbKjtwoa2u89KRopfQrJf4G7hEJW63C9qa",
  "key24": "2W1dUnV4nfan7vZyCw2npTgUoYSYdbGjYoZJ38EKYhxypYgsbHC4neeebo3J8rmZwRFGrJAkdqHtW82tkzAhiSpC",
  "key25": "3xY7kFF6b4tMKSnt2HQup4CmUttEikUg8WnkajT3zRm7PdtMpXHkX51aA56ic9pinfdLmbvFEF7eS5TVNWPofJgu",
  "key26": "4CPstK1zF88kdsr57Q9bwjWtcM49yf1byb9xkP3qbFYH6jHH2jvSL9yH4RsA1JXbRAS3TyibEwrN4gcSSyna69xq",
  "key27": "2KMhcwxK372UManJRQqnDZ3ADCAJEUpouTVLHrPFM6d6k9kbkXmJ8JLSp3VEDZMxxGCSCZtBrKax7xCMqkfFoJDU",
  "key28": "25aRdkMdBqFFJX5jQaedi1PgGrzm7zDYxusLi2HiAu4jsi8iX8KHfjTxLnJkzWoP9sg51EyBzxgd6rJ58itoYSLT",
  "key29": "3TvFHzfBrP88KdotxNxGruZPhmwPkHrBFbFahUdGk4rLU7RvDrrivSNG19ZR2eKEhxNaRHY8J99xe1Rv5FyWuThC",
  "key30": "4dHpmLpd5QyTPFyr5vbW8Y8jYFM7neHjN4sXAERbFhwW5f24didaQ2YaxWsH1hqayPTKAMRudMag8bw61rm44V2D",
  "key31": "5AqLXXPLqrFtsSY9SgAYpQc1KpvN6BiSc5XMgmghheo1dYzNXFeVGhqTyq8P5xLoEAivSayVLF439G5odu8iu1b6",
  "key32": "2BHucjav2Pqr3vMcJj2bkernBMbRX1t6NKBqMtn9L7TDXyb7eWwWrAwcuia8eXMEsVQJT7dB9eb8rxfR42vDMk6s",
  "key33": "3w1d5PxaAiqB1Ds5qiS2uFSHGHqjLhMQk4qngVtGKoeDfsJkkCDX4cJjBNndy43jKt8hH3W9krp8FU2hgcb2gmaJ",
  "key34": "3ryLzFvRU7fXGjrGm35Z7fSPFg6JasjQ49ve6LZ5qnJWNViUPXydN2D2DxfqKDq5PUTh9mu2QDiNcA8BNMvcm3cK",
  "key35": "dxPib84ETkoDKESGTxJAdt6Bw1aCv9MaSZFn8diuBWacgXjVbUEgDPKipzdPy8Qd7qXD5jhkP8hyJg9hp3gfSRy",
  "key36": "4wd73nu4qmWaDSGCmSD5CMMA54W3ePQoPwbhoufUrEwWMaDYYqY1CjQ3kyA5jzbe4VLX4BPMMYDs3Ti5KP9vHzqN",
  "key37": "2NFLbW7gjNGm9GRR22mpvXrkCZa6QTk3fAuU6YyZ1q4NGbPUFuWxnpV4pMXoyraSCuPokYbBKo39d4P95BTU2ZMY",
  "key38": "4fdquuEGZAXMvBemZYxqPmY2RcHkxuc6VcSnro4iwTX44eT4nqqPj4YJgTqsGAyUSF6hgae3zTQGYfwVcFZr1qUJ",
  "key39": "5ds3xYFiGtfvjSYZiUx48jg9GMCEL5zHhRxCzJVKejfqTTMndUdU4mEzrcJKdX37rKQqCLp9wmSS9gRwnh2HNea3",
  "key40": "4N3dmFrKDoaBsEqrqYxoEvfLYP87RrLpKfu6edr1jAFmrkxpZFDhCPB8HtQ7pg9pV1XCy784V9ikugeMFqi1cNnt",
  "key41": "5MHcuGu332e7579UiQqbLtZ9tenEgaFnVTPvdgoKqFMtsjxM2i6XHEpZYQKkRXimYDJHSJ37XYpfEQUgqvzn8GCz",
  "key42": "2ABBStaUy7VwqPdgEnhwsZkWmMpqqFqjKGEnc2W86AxTDy6xJXW85ScNhnKHqcHPopoWYd42ZYWAfsiRqPSEpTxC",
  "key43": "5fFXSAjqSjFSaVYjLa81L3AKzph7MRf2Pdud2Qt9c6eSxydNFknWjT1zzysCWVVHkPxXEse73zLFLZ4kNXAhFQPE",
  "key44": "64hXCRqUzwVsTuTgTjWuUoprbJArgw1p5FFpfYqv2tq4Pqhx4FHtywndTkDA22HMeonH4bHyEc1tpW1ZaUWoQ8Pn",
  "key45": "3fXz5GxHVr47FMv9KsfG7KrLpEFA8QPmMS4qmFkUNXPt7xQun7RkVw9qutQUkt224VkCi31mtbLTxWXYPVg1r28z",
  "key46": "54WySRh1VXgd7NgKYz9rADHrFiMV8CZNQsMW8ibd1RzYTY3djViMSjs2a4QHjrRQshyx9QkpaWDYRjYV5NjwH8zS"
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
