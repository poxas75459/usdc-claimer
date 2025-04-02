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
    "37chzpH617iwnnrSmuis2cxTe6AVdmZu91LTLLixMqYByqmwv7XJGL6eSqt1g6WtwasvFXciCLpaAQytEuch7mDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35BaDfRtDrKKQJNBxkM5wHhptDc916PFrmmH2QatJpSLNC6TUqAwDVYdBz3vBhocEA6LW9CuHLjmjQaZHumCjGKx",
  "key1": "2nBjastPR72GKjXTXBEeUZmELRJJaahJwoChpypnoY3Q3dYAZmhD9hNCBt6x8gYhnrdBiB4h4NUzKvV5LUmTmppm",
  "key2": "YdpuqH14B9YebxQJKDYCEiHH5KZmkYvvtXBvUAU7y2DW2yEkkJesbb2ndK1yfkHPpWNrCcPGKFEXqXsWZFRvaid",
  "key3": "431oSUnEdD5vj6rUzh5AGLygYsBXaLYrUeRUXYnwv1u7PWvef1sRLHb44ujqrXcaA4g3ATo9KJEVGXQbrzj9KXsF",
  "key4": "5uv99rzLVGWYvZMAajx9aNku4oNTT5eichDVKZUQ1dcQeimwpgmjXb1XjJf5qTLgjnM8iR8shjYGVY8qhvddKxvG",
  "key5": "vLhYKb2NrUV8ohquB47FQ4eBAsWktKkeFadghbL7DtkzRLn4V57GiaDbbZ23xzVATapEcmTgCp1k2UX8h3bAdii",
  "key6": "44NRzZaPnMwAjwiywkEBAy3XrUcWAFxaf4py36fqfWCitNXCL6QuDkctC3qNHSxHXp6UpnnQGGEy8T8dw8DzwTW1",
  "key7": "3TZmN7AFvo5jbmt3uVWm9aHCgWmC8udBsZYLC2DuR2Rjxj2Dztd4JcwqddAXbqPtaESvr98J8yRR5psGkvMfEGpF",
  "key8": "5gjomTqw7qVXwS7KguxNortzgK3jsKSkbzXvQwQKUgTgjNTU99J56HrBFhuJgaL9Fp9nASZAYTKXWW7SV2EGjXqG",
  "key9": "3uZfJeoVGHGqdRWcKyX53iu4bZS62C42Ytw5Vapvkb9PgFnoZAHER7eWQRK1Wx3w144JysvnfPGBYHpJZas1KUfb",
  "key10": "5vs8YVhAFGpX6d9c3cngQadFZ7ocfT8iwPnB4Y1Zi8ReNJrFcZ32JZm5q9KasdT1LLmBSsqaMx9B6zybApVjXQp2",
  "key11": "36Xg8wc9jybRV54XCsECRwn8W1gfxrtccghjeQuoMv5WRB9Jyz7zSQpCs4aNAkCMKxhrvCdN7eufVcpbDGX4v7Bs",
  "key12": "2dkKZF4Hns72buC17dmzBoeGYvPYoTs3LEURhzSDeNj9WJYQH3vdzwqJikMY3aC12vSFF1dSMuHDvqVXRGKjRQRE",
  "key13": "6crPHLCg1xdbKnA1kNuoKajLFsxJuChxT9B9qoH3eB4mMYotLtWHTKyC4uVH9ygeAVt8GG6iEPFLpLDKnrZj3uR",
  "key14": "3t4Q4EqCQqiBCY42kSsGdqUG66PhHZKTMNyq734kTsFDRuUD2uN5gRE8axJR6TSQQvPuuZNy4zkzLr1pKswfTGja",
  "key15": "3fzmL9aJKvBf1JRYftAjtEgFZ5DsFXyRY3sQi3zcgdFgYrNS4skLExYyWq3kkNSvrXwL8tEWAsA5h7dRsvNy7iJN",
  "key16": "XcRtsLGEm2ArCv8SeiQh5qhCZDt52TeobnKCNBnyb9LVy2pgDqDbKPexFDb24soN5HmxASPahUZgRzhp5Yw1Dvc",
  "key17": "zS9MCABY2S69EEQm26GyZXJjMF9tL8fWaPYCzeKb9YTr8QTPubePCCh6T2sUmBXoJH6RwHaoBtsHNiXpVzt4Xbh",
  "key18": "5tZCnUPk24LMoBrAYC397ZRrtwnVvq9ad318smXTTSuVKF5RsLw7887pwXRDYyKxEBEC6Qns4GeTnYYKwfJaWhNU",
  "key19": "45wgbwMT4aJCyBHReRiZxUXkTabtye9A2Zo7nHhHkThtKsSqefbQqjAGFSzNbNauVj8kN4j4PTcYXiQ7WDdchCC4",
  "key20": "2oCA4ZbTnmQtMBL5N4ZyLkHLRg2eZ75aoA2BLXqUScYivLR7rEERyEnvSUb4YCnMkeweJFeyEBok8P8Mr24kUJvE",
  "key21": "3hgE1MJkaXaC2NUPxqUkotxbSyMnZMogxcBDLQ1MKXjyDMfSzFXU3uyzCYLWo7aBMsQaRezAVd1e7A4at5pLNkGZ",
  "key22": "5wD2n8tHBxESf41A35XQwkGH3Wib88kLgMGPbQiA99RNdZ2jU8Y6hBnLUDUjvNFycaJSSLQDyxn7cMa6F1cjWg6M",
  "key23": "soh2y8CAJmNkh6pMpVeXBRdu6hDimG7Mmz7P7JKEL1cpv1gvgnbANtFCvikAYkivygtUryEVcbXWoyc2tdpx7hh",
  "key24": "GR8KytVVaRTaUnJAXrPqVBisbPg57jt4G9vdedLkGaTMXdXx3btspv18qXtUYT9TPMm1aaxUfCWY1GiF8DQUEwq",
  "key25": "26jCNrxN1WjXWhA1SCjwwXJk6t3DQ9D67Sezv12yYmwF8suap8xoCApD1jUmzTawZvL5mTbYAn4EopAeJAdZVexe",
  "key26": "TA2Us6iZCsz9TACj4qYuZ3sGsJMqnHM6CofMrys8wFMo9YRiTmmjTLVBjDXoUjQcZf8T86EvqhMCg2iA4xZptoE",
  "key27": "3p6mXVbF2dXpuUyaUjwYs3sTYceyAdBYUv2JwTMWfiGevfFQg2X8wsCM4JfyWeX7i2gPHLh5ozaoPWUBLY4s8zcq",
  "key28": "3cNNuG6S2WRERC5aCX16FUMgfYrAUbrRSPYfGabnjHLubriPFwwLMsK9yGupUgknhGX4HfKvobpJnHVkm8qGQHk5",
  "key29": "4yD1P2BCFJBkGdpPkBYFPaetLJzRnaTVqn3Ly18Ew4SPnHPxWLSX3Mt9KGEAhpB1aNs11S3Z1XSZZJ3V1TecMg2Y",
  "key30": "5dRDjwDbt2o9QepSTd3kBeymirQc6Nj3q22xo35AT7Ltcm2vUQRsNRubLKPdcdsLLsH8XLPbN3WZa8bEgrGxmEyn",
  "key31": "tubZw6jvsjd4S88siLDZuVQxRe1S8VDPQ7FWszDRPGBPufwxMe3i4kYZweokr6DHmEAesdbKyxHgvstZAQRTieZ",
  "key32": "F4mSVZ8ciBfETcQXcYpzoBBm3gvsoFUi4r1ffxcbMkTBiNd4HU3mdJjESBR8oYTLHqoAwtCw1ykxadFkwpne8UH",
  "key33": "4gL3sb32K9cqaDkgDv4z8R4pATmjV5uiTno2EkQWcYarvNiBvE3fcH8s7CE3DvRAyz3ruoi8uB6nmEBQnT98wJ1d",
  "key34": "2LA3qtbWvYjZS5nyUNxRQTgi1V3DdVD8j7EvSesCU2jVKxQWZgCGz4vuxsizPhZSSn2Kaxa4SMwGso41LCJe6WQZ",
  "key35": "2Mf3xYcUakXNeQ79EnJPL2SWnkTVkBBRYG4t7mazM6t7kpEmuHZmAqjG31xAKXKDyS43AvJDHGEhwKVgEw6qCMXH",
  "key36": "b9xGqhQ3Uag3Lyc8o5fiZRkXMQkVh61Fb4VtwQrUHnuGpjWBXbHNV3K1YjxHgW8EwxWm6DiaGzXLxtsCGMKSFq4",
  "key37": "2XAnMffDGn9y22NZE13uvVnTYjhd6zAJHVav7yXovTuXo1F3mFQq8mngpbpFQZUnw6JLTqEoSdKMUmG9L8AyFhNS",
  "key38": "5jz3za37RPpWfWSY2QnBNCxJM3RYzZdUU8kfdjL1gsU4hdvf81E2Y5V3PuxgbuTQQ7Q9LhWnuYhci6KkuB51Wr8S",
  "key39": "3XgkQb4vFjwBeydrM9fFCP82moczDtddt2MQDrDHviKT1ZWN7eGCCsckKo47c3KLVDaLtALjgwRQ5dRLPvheW8bo",
  "key40": "2ckfp2YG1cuKqUU3VVZgs2381PTUfBXMyNzJkX3a4XzTfwT4Kx9XeM1FZ9w9Pv5jb6MnYnXpHp8a5GGL7M9VBTko",
  "key41": "BX97Nzc3BZhLbd242X4X73ipk5WPcYnVevU7LptUTS2TbiPArHgcgcagRERBaY4LEjHRUSv3PspeWAXhq4Dc4ma",
  "key42": "3tNB373u3vpfqegQpHQwzewe8tAP2BBjVSPzJptbmWLpBDLPEiGQMcyJfJFjv53rainrcdfatHtKpWyypaURjBxk",
  "key43": "3GgU1ye8aDWmcEc2a59uiKqym8GBsu4fhMQvkgzR7CKxsabqxA2s9nZH8aRLuHAmGxC8LpjLNQD7ypKJFSCZjGpw",
  "key44": "2M5sQjFfy5xZbN7YSXE23rYaU5MvsDc8mpd314hNDrwR32oHXGNWGhEV1KhqieQuGk3yavafmJAiu5oMg33kEyeb",
  "key45": "4LvNfSgZDU62XN5FwoXTvTyQqjSGZUooR9H5NZ4A2c9RxHCXqWnwwhAwRriVE3hQKUkmPNu2SSkp2e5RLPhf4bBY",
  "key46": "5EAxg6Zwisti4szL5hjyq1i8z4C3fkwQnFi272aSALzwyww922xtWWbwvAvcEwzJwpKKFkeSJDtPqqnbiU6UQU2E",
  "key47": "5zJU9Gczq3paQmW2yUbSyV2zo7dMSWh5aEcswjwA2GWEQubgVMDPTQeftC9ZBsRQEK4qZweUr4TMjZcBGXzYPhMt",
  "key48": "3UkfLuyf8pKuyut32uZSnmdGxASg9daTKtTTfjnHDwVSS3LsVojnZJfqZYbuwQCpaAukcLDDwn8XCd5nDbgqQR6s",
  "key49": "5Csqvi4xF5w4xJsD65n3jRZQJMADDi1rvLMNnanuWVjWneThvuatoBpJFXHoGd1vX3ffKW53ehfpmUP4hkKut2Pv"
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
