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
    "2hxi6wsHmudBJmZKF2CggEEmoZ7t7M4HuSSz7KLZNJ6nUeH6wkw6m2C9FcV87z4dtZou8PDAUxcdLPqZjjebF56Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SzVqFinNaktouwPcR27yYYxFUCvWQdRRvdopvTm5g4FAdq6ifzGP9iUQdfCm8r5RhgKy3kWQaH8NSHaU2yCeYRA",
  "key1": "2jYDzT786RUd5eMA3hGcoTjLbonUAJKaPDQHrbrX7Hu4RarQYZRjgxRxiYAhiJZfyHcZvK7asqjF793cbGyAKvDV",
  "key2": "4BxhCe2Q8aWBYSbJbat2hqb5KjJJPmQMutmZN3uLgSksi1t9EG9xAMnWb1VvmCU8jJZK2x4SR1BRSxJZPPic9KUW",
  "key3": "63ZyZW7dqxuRwmHJ5asbvidFnFU6pHGHLWPBSPuRVM4pxFowqdcNrFYaN2h3EbX25zb1pqZ7L59coLG8RJxzyAbq",
  "key4": "3fS5ooMT1DgBWgbgbVeLWYvG1j3861kKKPrqNjNmq9tJqo3nUsKrdeBmtJiqD5VeD7ofE7TViuj9XHAaAgRmubpf",
  "key5": "5hkuQbyd6Ya3FiXbf7F5JfUyhKsXNPH2GWbtzQnNMHEkphSd6Ea9r6CoE3AEhSqYVZgvtvEJfvCZnbzsyGUoJDiG",
  "key6": "5CBUwdDU7VMWKftj9UybHJh43SXqWQAHB7SW4hdHBYnxNBfDktP6ngX1GqgUg8bViyMiySjKeFujUVH3DpUpwEGt",
  "key7": "4QE8ZQVRARcmbN5S9YrAKx1YnjgbYroTGfrQFQSHEACaHy2pLEwHhK2wEeXxgdkrDDSyX7bkAGVeQSFHFXg7xG8D",
  "key8": "5Qs5aH8bckhubA5Vn4EWwyBYrYe7AiMhPPLG6EjYQDPUtSR6FsCvLboVDpgxiRoUR28JUSeqRDc3tY1RhBMSEhXn",
  "key9": "4TiBXX4mYGBxJD5HaDAW7dTAt57sAvF9ZamgKnsibTbByTpAkmbGxoZWk3S5xmLby4VJf86FDhexrfeKsFtegWjK",
  "key10": "5vs7ftNJs7mGXjETiLHHbuj28ThGQqY8GDc3w8gwKK4yP85DwU6QTcbJhX4hEQVSnkmUTKpt4CmNY6YP7cqJGbuz",
  "key11": "4ZuYSptgkqDKpCFBsmr7NawBmZkQZFQZLJUzNbt1c1eNn8vFpAQhKfYGfRgEcXZqvCz55yfh4qBeZGdbqhkhWUKw",
  "key12": "5BojM4EtNfa5aCJba6JgRc3SFm4dis7xRSkU8vfnLtaQ4iVjZtXHXZiLp28GkzbwNJvJe1LCEUrCfDLYCSVPB3eg",
  "key13": "53i3fNGgpKfUnVQedaZ3Ze7o1xDVUq1TuNsk6aqU3i2obHqgi2kbM2hWPxsSujxT7VczA4CgmLrURhTppTpzt5iq",
  "key14": "4KgKGgbXSVAhZLxQTPChaZ1WDHBxWnDKuKGbWJiejtncFzTfswBzgrisBjRoddyTfPD3SDTyBfS9t4Sk5uJjAp1N",
  "key15": "cCuqsMHR3n2jo7ZNfr5FLqTMNsLBGDE1R3CMUn6ikZceAMy9z6nBXoz2EKYon7izijfK6o7aTBgBvaZDQ1iEm9p",
  "key16": "5C8vkB7FMXyqu9i9rbtDN7TaE31tRThZjug8Qk6WGRyGzgafn29iZXGk2hbhsR3NisS3R93bHHMpR4hoTEiz24Fi",
  "key17": "5KUzyfjnxu5CapquU1TSvn119N5X8xFJCakh7zdVgrPbu6d1TMSiCmcfbrcDAskBp452gyKjj5k2YLtjuYo23YWJ",
  "key18": "59Q1ifB2oVYuLViq5ssJg91NcyvMVAz2zRNcDYZ61TjpqF8CUMyer7ie3cZSXdEy5GTEnoBnrAwKi84fqZfPgi8T",
  "key19": "59Rgap4KZRiiH5wkSwuR41UQrifbzKdUz3TT1S76pkNYpCjqHSzAww41vvdtvJ9CW1h9ECs13rg43WCYzLkzd4s8",
  "key20": "4N5rmC7mEYUb6kKuHs4HVaUjCAE5rAs6EaU1cpUr1HnR7h7epGbgRPHbRTwzg2wSEN98jY2Q3s3wK2YYFypkrj4R",
  "key21": "39LHsntLfTjuoJy4P993veRRGYUpgZFAyUS91WBhSXSNwato6m7ywd1fDRdgjNxqi38JeMqYtGKmJztuW5KJqu1r",
  "key22": "2KtLb35qv8pqLZDwxbmHweYBLmDFrgUcNdobH6CFC54WR24kz9cxtFeB1rH3FcZAkVL1Y3YHq6vk4x5X92SL6SkT",
  "key23": "2NNCjcwMCbN2pNoEhHxpf7G6gpbku7Q9KZZiPocfRZBLxgDAB2r9642f64AVQyKeYgX7TgabcuptZWVrSDx6jUfo",
  "key24": "3Gk5tHuY6KqFFmS6ApCHBB225xYsHRjFqcfjviGhhgQyrUyTxfTh8syX8yvgTRKmi1v1LRsusj8K6xqc3fXWrDmn",
  "key25": "6547aiboetStoKgw3vE2o4ngzbQgUSL9LUetQfTkoXhP12FL6ndLrRtsCaBdfUAAJe2u1YpgYctvmb8cFfRq8C2z",
  "key26": "45jsQ5gnMRo58zrEFECN5fpcMnNRWhz5QKX7WsaWPvr4H2ow6mdrRLKGvXhPdRGr9hP4frXYhRZBHqYTQKESZxvc",
  "key27": "382XaHtof7JqxxjCKNBXPk9nKp9EYea5mLjNf3UzLN2JRpmTdn8hURs1jWpvM5S9fRsjeb9scPqNujm9HZn9C4GY",
  "key28": "3cbK1ZteWn9bJ4GE1poQexmvmYEERvw1EdbwkUE4bKRA7hUvnX6jRGrFKmwmhJyB8E8Bqtju1Toh88sHSCyYUpoq",
  "key29": "T4ipjpkKmWNeBH7dPhEaG8bhTEt9HEMghupnK4BDoTbY12HPLt8Lh9GZcwLXWhTzbQQVwrZhSeYqe1sGStgojWi",
  "key30": "58Myyx3bNj9xsZdDfJcBogBvWDeQHQ3X1nk8jtmnaY9MTdabZnTyU51hjcubCEosSRsghcvGj4VAimJSpaTxf3qc",
  "key31": "g1rm9TCpcyQY97kGFW5R8sE2jwkiVU2fgriQ9wAAbyRyo6KqbyoLQAVaYRrqJVTDEymRxFyGqu4QGAMhm2GjdND",
  "key32": "5tuiHmfq2K5cAUdBB5599njmHi69NqS8Dc6WiG1PjWaMNoZbXLSzZZV7kaCQ4SJq32bp1PGQiteywJHp3gy28e6c",
  "key33": "3MdiHRbP8d7ejRmNusHs8gZNPNkP4LaGkLiA7Fek7GXuKQqXpELihyy8vQ7zzVKJrLtdipyfPiK1dGUxKr3RaEch",
  "key34": "5g1oq8fdWwEKfJXq6Ge7PbrdDBa9SdQq93LWcxZfhDrcU2cFRj3wLYkYUqCqbpW2Pqe9Trinkm1fy7zoGBni6m9b",
  "key35": "v2ze2syu8mTU6YvdfyqCac5YbFfbWmEbsFFAMJdLe9dEfTy99MtzFAWZE3nSFQ2cwdcmtkPna1d3BSgEg1p11Ya",
  "key36": "2chs7kFcaufDMW1Ay2DhmBwkre3Kefu4ZNCorEyEoq9DNnuJTfYU88tSekEHQVu56NEFXVC3dfSDWbCC7J4EGwrK",
  "key37": "38mJTmdShyhbeCm8MxHDhxjh9U2mrgt8Pk1bDFy78TkXCYHhdHer9KyvLVKouwT6wD9y221c48vfNwLA51bNpFMv",
  "key38": "nEp4WtGhx7oQJRxnnVZTftRWiib6vUG6Ewgx6gbNmDMYiJVig2f5pj3tjzQDpZMX84o6HoTBDdUKa32w7e8EFbj",
  "key39": "4PrK49L53hJ1UkxnXb564o5YDTi5QUQ9B9YJ1AesJ6BmE1mxUhFjRPH6B5FewdTmdidJaNmKo4LVaW8Hc68X9Bbx",
  "key40": "KGHwhHWecGsYhzCVQJde4vwjJ7A4PTLutbp1Q7TcUDyevFFJs7PpedZw93rhb88khTEhjXJDkriTEiR2GMp9jUq",
  "key41": "2i6ptnatGQz69i4bqwt3TdzWXoZjUwWoyX953Y7WrCkpzeGFrxFXSLhQDdt8ov72m3mNaav564j7aGmaHLFBww1k",
  "key42": "2swRbKPMJMiVMX6r7gkShshAmJTWaMay7xmiJaBVcyXGLGq484AP4h3yL3NcDXUnvKQq28XYAiRRhX1vhTgGurju",
  "key43": "QMa7LzAxiUyouJcE1yp3dumCbvZppiwuFoUM5AiTxpioTqfbJdztqWBhAQQb8SrR37a75tk4fT8STPgPpwpVxZ6"
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
