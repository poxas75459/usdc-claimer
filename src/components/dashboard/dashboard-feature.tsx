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
    "5yNg9NQMm6sZwTmzzhQGR9VqfEeGUnjkGYGMhbZRseJ4yCi97fYQqCniHQz7GLJAqH4zAJMx6sua5o5XpZYSCi6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2HhpKRKwazR4rAK9gKanpJTNPzr8MDfwpqxwrTmsCK3GEmXLjV83mfAmecxPaFHLxB7qbv1Ch6qksyjoGcXXPN",
  "key1": "12AC3npHZJRKavJJEi2aopVXx5v42irprgTxMr4Ny9xWKfLLUeUdNghWhqep2sUwiCnTdfqKh6khjopKNh9BD7ko",
  "key2": "5g5X6uMnYdArT4GW4buKCMT6fkHZg582cHPTHDpPyrnsGxYa5zGA4FcGKkHByRiBtk7yawW4FfaTdDvyfgNBxkfQ",
  "key3": "5NAkZ64bWNNsTb324M8g4ZpGU1dvp93HqQYcowQa85ZmbevWfJLj8thX342cXH5h2wS6uDUyhjdiLmmib4kEuzW5",
  "key4": "5NHAwmpTgbNU69JxqxbHYBe76mVUZQxrDSw8oqoaJMNbDZvsd9yVyAGXi2Ae2uWzVCfhRULHZWXDwS2FD6WBdXYL",
  "key5": "d2qRJZt9Zv8cN79fGCkdzniFyvExgHGjbCSwCz8HjSweWGURpNXAigSusGdatGD77RWkVXCnqRioUwgXPaJ1BR8",
  "key6": "4866zaJ4xUoyJGVB96wcsv9Nn9TBm8Bk4xgUZnN59CaoUQbMgCXAhQVdRBH86CCAQD9CsfL9fnma6sJTv6fGyYGW",
  "key7": "2FDSvVkKWAGMvGyMuvsyoJQNUHbVsxAww2RCCZtDrXQNbgEKWhY6PNTpXRK9TMMJ9YSYacSSTM8EwjRkZFG6sqhg",
  "key8": "3uo2DWHDCAyefMWoR5k9uJ9g8uZ7UVi2GbnCP6hV4A3pKEA6yj1P6rSRUf1mRk52BaEa7xu2Sqf8dZbb6H1Q7r2o",
  "key9": "RAK8rw64MG5qswShJkZKA1cTsPvaZBuX32UDTf5jLnz446X2PX5B6madNFoPh3VKLfFp3xSC5Rbofccqyb3AYnD",
  "key10": "GmKaRgJeYH8e1uxCGRB2aVsLG9Tpa8oEy4H7C2MLkkSvZV2paUXWrXwhtWjmbKWT3ZJYLEtwS6BjcBZ1SsRUHad",
  "key11": "5xQabsfwAJG7ZhvsDwbmdcrCFZEW14KdXN7GgYqdQVaaL4efyAGy3kTpHYSQJ2eycmHYZTS4k5XAa28kZE9xc7U1",
  "key12": "5YV41D91ShJehDCHhkYH7RBfWFfbZhtiyfWvRaHzKzSk3N8QqrbczBGCps6hQME8sTLSW9Ut7uAQnVZ2MQUeP7wz",
  "key13": "5dcFv6SgJsHuEjsQG75i81Ty6u9BgG7bTdf4q3qFZwEs4haSUk4oyp9QjJoK7zq2xm7J8C73kL36rMjPyS482MEi",
  "key14": "2eA8AKeXYAdqQTJZUDNDq8AXW7dekJVw2E8Lq96jksna2GZPbFcHVjgsFw43PvH1fApRb3nenFJEzoDTqsb9P9jM",
  "key15": "GirLQF5HsLZh9152DxS2Nv4GVi6LWDXkqRkLY1WhvR49AP5sdYmWGgNERTKjZFyB7kgFJ56Rsn9H2KSdGk2RzCG",
  "key16": "5nUJuvmpqoQmStwb1FhUNdZBqnS24LkotvgvVNheFbSciGfMBSuD8ZRWXwRMaxH3XQSpER1iAS4Bx2tNkTcu6qJd",
  "key17": "4Hcposp9nwQoP8Fqcp9SDKXbGU7kh5XHAisGnkPQLdrPfWfM1K9GvXDbcuhCn5FjUbhisjTAh4jbVtsRGJUESK3u",
  "key18": "3Pda8NJkSq8hGNdadG5oemn36LpvBJQSQu92korUonHnRe9um5fJN8GC1i9VEfTruUkZ58zxDgZXAcaBx5fnHJb1",
  "key19": "5AS4oFjpBMxdXVkPzpY35AfrzjXR855ovii6VpsekH4TFPVevBfb4tLUaaLNXainb72BQ6xrfe6yDT2wMky7c3LK",
  "key20": "2vJT7E5359LvAUcVHSXzFJneG9KvGjFjKJDMBKZXLYa2k4F1bLviFU8Ftd4HvnRrTAtjhLt7WhkMDpisZT9dTcH3",
  "key21": "4ogLRjSKay7YPbmZPZjZ97HCFJdHUG2qhi11XLAGzNdurmERcy4mhwbgPpxFSoyr9eW7No1Rfz4fbwR83MHm2ZbN",
  "key22": "5t7vcvr8GQWqqwF7zgJRDUNXotUjccvDCcMj1gqmirwLZG16UkS9zEhnkqD9wjSkWGfwbyUvBFEbnbS2HAbXqi65",
  "key23": "2aQtM8fCLMeTHhMTXFZipEjqwRSdWJypbhRuc41bcHBNHC4G67VD4j6aZufNkq29ztyJgPSDC9x99qNBup197Tt",
  "key24": "5Eqhj7zyQhydwS8bqwrKDUY9eGEtSBJrPcHkSxtxkGSYhAtm99yotCpsK1jE7AuhxdoR3pxHKiRH61rgF4MLe1ht",
  "key25": "5njWihoV6z94aAxieojn3TLdW9S67KRk2a3Lhf3ay9vPgiBcCvRf3YxQGY5YyVJMcCCQLbZDFCQ6kieTjgMbbdAZ",
  "key26": "5rBMA1tEpgSMHWTWdPQUVe94hD1bDDGkvP59FtGDmwAa42ywUBSRYXXcArGT65WKuCtvDw6exwDvNeHPq6iiSRY",
  "key27": "kGZdjRifkFmvM3cTMiD7GHFFy5Wp3H4ooLX7mfNqRGKSi3kq7C1nhTntvyvtxCTq5L5CMySpzbLD9UuwRtCphyp",
  "key28": "2srug2PF4JWcQD8rcmP1T4YdzFVm3zWx1rDHKEGbdWFWTRwG675cKXi44B6NSMTY18S2qyX3cLmK8659kiEAD6CN",
  "key29": "3AXBnkCrQpHcyx7mPWdcbPs5k19ducfYwFRSLdVrsVMQ7AV9PwwzNNiJYpiHi2cFAScD4r1pcac6NbySFMutXcrT",
  "key30": "57uZ3YTvHjzd6WPDQAFGk5USXPQJkvAWE3F6Ub3TuFEU7zULMXtfVJyDFWzYwkiSqzemmiJeWpCos6q6GPmFaLrV",
  "key31": "46YouqijjLoCMvM9csPTdprHhe1pnhevV1sgdoZBWkGErEKw88mgA7tbfSimVTPby8yUy262pZxQZrQ1WwTcxULj",
  "key32": "4bEm9LRw7coRfm3JmpTveqbbpboS64oHM2WSug1fBszYm4W2RtJP8nhjma7Ln1yaq5GKsnA7mGfehteDD4qDeJG5",
  "key33": "5NjoguYGY8PB6nHVkKVA1VdegyXGHanHVhY445pejcuK3CU4KoTb3UH4wmNiuerXQzSfuD6N2YCkghE4EhkagB4H",
  "key34": "huPfB1PgaaGcjVEWGBvsxWTg8fB3GFi48NrWBRJR9iE4RgkN544rfmNEtNydPug7YiiWVtfzDcaxRm8Mar8tJux",
  "key35": "5PGKez419TdYhdFupszT1rwAGP8FuoqzfSn2DTg7BbqiSexpnwx6zeGiFGMTf2YNLDzUJ2EYmsPPf5W3p7em7Tds",
  "key36": "2phAzqy35VNqPFjA3XAQ3t5RTshwcBJPYdKfEvD2rEFPmkYkQsBskLEZ8aRKBp2fLQz2pzSRzykpwxYypA7iPw11",
  "key37": "5dV3Kf5dEKU8RRQdc71H6xRb2GDCb5P8p8Qz9R4qZu76cg2bofYchzE5PojHcnJHd9Rg54yVeauMPofT91d6Z7Ca",
  "key38": "4NQEonXR8aqMsxsL2gub2wyrXxtBzbMeBC17cVy8PLpDwReAibhUaLCLSn8N2743SebGrSjnjhvkLBhfcy6J73Fr",
  "key39": "5GoJB2FcDudvr4Fj1neZ2VxErgq4Fpp8Y5XaSUvUWVoQA952quXzBbzHC9Qf8vRZQ96raZimWzFssAGX51M8SgtE",
  "key40": "329GkNjEsvEt5ov8qXAMu58kDuZ9GrgDbpvVogXCNxSPt8EfJHMVjkmChKoEVm5oRfq4XDqEML37UxVkL7AzUQ2D",
  "key41": "chJBS1Gv4SQrHt12ahdkNAhFdGm9YJzovoDVJSGhpZoPM3MWc1k9T3G9gEAJsS9vECHpB8vbKVVvyYVCBbCEec8",
  "key42": "4aj15KuiF4GcrFXgvTnzkGfsinHMnWkVav9F5reaENFHXZT1TNKwnBtwetotUBvN6BFugyD2Q1bNNjBpL6edAKNh",
  "key43": "5WLaBruDigPDadUjp6MRoUSj9mxd1k8CQqkXUppFsfe4toGgDjiiwdFgxEa7T3u75wU4U12xAzq6mX3w2ku5Y7PR",
  "key44": "2feaTQPPtDUMAXwCbuR38HpJ1WjhDotL3DDFDWuPdjpaRfAVumjjNuxMRcgktMYy6Ygb23MPNdybgEn6PW6v98ku",
  "key45": "3FFynnUdgUvCoEjfpwcP6LAtnckAjoA271p5eFRiDKjNr3m5xWAxsNjsTcNbiAk48HjHP2TndtQvmXjyrVxomP1M",
  "key46": "5VZ3wNYAApnEZnYKLwZPjd8sfm7KqJEuaRxArNfpawJd6AghsYdtnNpDkDiawYemqU9AfuN4dCYWr8YwkphB1FEA",
  "key47": "2caJ9mArRw2kjqBE5reSudnf9b465FkxjFZeEEXbEYs14zbR3KpckkqvfPhKGcCMVeJteJQzoqZ8stTCD5mCJ8Ym",
  "key48": "5m6V6GUZLLwyXXJu89a1J3RRkNDDHz7jWJSyMePztw37FRgBxTtWN2hCGcxSrdKKgzVguDLrX39dGUtVQqw3jHrc",
  "key49": "48EM28x2KEQaAaVKu9JYqudqndzKDNUPtDQqFgiunpTyo2fmRXZd3cA82CHRsS6mWr11tPDP6nSQZEuYmNvTMfdY"
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
