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
    "5nzMmk3Mm5L6BRqRJSnxudD8n1mZYvjp3SKvYFTz1XvrBBvKr9JXAypGCxPa3rJHzishzjx2eNXv4amD2vQKQWwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6SUsBzAJD9BUdyQUxXZKGDJUSg14P8M6uwvuU3d6Q94CZHtF7Kb8WzRf7616pjAQdoiviWJ4czF9y7jYyAz33C",
  "key1": "66eGJzjyknwihuzyb3fGjZRBrNDHmXX8dYsuQxWMfBKjZGtdoMzCKv32vuJwg6u8Md3V4cfP4zQH7yU6ywSELQcX",
  "key2": "5s5a8mvo9dUcWbKhiCz6nbxpdayF74DPd1qcN26jsXQvgBHN357bv2JaSuB9C3QztfAhcnBPVWUkCTHyBdMvFqAC",
  "key3": "k6KiAZvCwgLVzXWg91HnrSYaYuGdrSMbp1g71WcXQmzZsiAJNKbkFGoWDoaz4eh5g1HufDVUzoUrnHgm2LsT36i",
  "key4": "4DpW1quW6kLmP5ynrzTmc3jd7B1bKM4mP5tmBpfng26fuTzjvwN6Lw38N75WAob1AAhX1EdX4H3XAAkvSKF3Abgu",
  "key5": "43NrwpWuda9FyXPzAsHe6tr7ZGmfVLUnzSfTfamfhDcSJJWpYzEEf1ME2xkPMDucKEVV7xNoAH3bKs6Fdq4VCvPF",
  "key6": "59FhbcWBZ2T2aJqMaCuPPLVZDBZfM6KsboUhmBgFjg7vy7vivobLzEVLJiTH5qSqr2EXSaG1n5iV7AvpQxphs6Mr",
  "key7": "57EiE9sox8KVjct9iMHcEbQgELDfESDxmVCuwWphMFV93dxTQy8zNNNBT6RxsjnWbkogz1KAGEZiWJXL1K6M5dwR",
  "key8": "3BBzYa76cqFBssSinij24fDSbLgLoa2rQ41AR96GuSu5usyt8SgaPveeVhuXrLGrxmcH2C2h92CvDs5jboMDbFTb",
  "key9": "vrJAoU6A99itDZ6Kw2EFQ1jgdTgKUWAYmUtdqAscpRcGudLdgHLCG8CGguWkJSQwNK7zSX2HHh7EXuuqWZ3u1re",
  "key10": "rdQzriggfQq3JeRTQXJA63pTxFVAvBWwooWPVNqvZjv2Emr113GeNZ3YydFybvP6vEnfFLxDxm9yCxfR2dARsM8",
  "key11": "ZoLtfivF3ypmAEvB5sGeCkKjekb6ksSzBYF6jvv7n6XGdbgt5U83kn39YcxGECvyRgpBjotdY7wYZeGsYnd1T8s",
  "key12": "3yWcReqcuT7pNq722pHkAcyg7pQdjrDN6RmLjbRGo9TYkDtgatfkx9ZLPVhxj4QgZMsLAwo2fh5zCkcNtU5g8F4K",
  "key13": "5ub1q4BDDfK61A3mAFhpeUCu3p6nr1sZXgZYPVc4WHtNkBupQyeLMKskHFhhieDoZcKAWW8RLz3f3AovQ5KgzEeX",
  "key14": "4Ah1ExXNt7QwwNPNyEQwReZS8z2MkpjUcKWh2sZYVeueVf6m8oh6c46BXLje1RREFfMREzdNYDrDCpy1zoFDcDcD",
  "key15": "u8AiZE6As5wuUyYCbLpN5XznPtazevEXLbVt5dgQL75d5DXAdbUH1AJE2RmieRJzNQUmCkd8fZG4F8RpHHq8a4V",
  "key16": "4rvgksWXHmq3Mx6eCg7zNXXREWePYgoRRvRHB3FAA6nkrsXAVSgvNFMnNKdARtW9ssBJpHBAKcE6Q3d8pMVBfkJh",
  "key17": "5SF6siXs3LJverjbU9tQzD8JYTz25c9qqyganX7yNdVW1Xz2JR4Y2ZA6TnrhXDhmRJsXV4y9VMeUrKf8yASRrSgU",
  "key18": "323R32GMjqjTsM6SeB1Pi6idMbDXYQ7gBtXssRnnwQ615M67hAmuJz7HtpnRLQJZskWtPp4EkdBvUvK5yA2vAtCT",
  "key19": "2f48BnGnKEYavNNsp5n7e9pWGAEcvXS5LuoS5GaGZ14tipKBJSQrGgbm7zJMRckzsvnuqKWnuVHA4v15wm5pPMU7",
  "key20": "3F5dcTZz4iidjpm9Rxmh7LGX7T1EcJC7HJELEX5SDZyjVKBgZXsnZVz3HzVFcP11jgdYtRVAPwAXG1QbEYbWEwSj",
  "key21": "5rcMoUFuccLqT7CT3d3XeBYnBUgW3QjHHeCcNppveQtJKkAwTx4Ns7BZiL1QrEN4BkCcxGjZGnmigAy9UPivvtzC",
  "key22": "VePkHgQkj1ca7oT6Ru7KHXiV25FmoYK7X1fRdLMRRW1gQgkckV7hzYfy5CVwWQBHxgtXR7WKDMYaJkembwPYy7p",
  "key23": "HaA498pLLSQqUMAx43y3QMNAKZjz6bGfmrUdL4qTDnhY7QsJDzgvqH1NrcZtFEmxp4CheManSi6pRtecksymZMS",
  "key24": "249PwYiq9SfXjzvU46LUQHhHq43YrbgwojqPpG4LVEM1uJ1PoesmqmBrJGkRm1NhziGSUjHdFrpR7juEJ54QZLV3",
  "key25": "4irxtPx8jkZFHkxYggRt88KUYhjte842omZH8VNkQpE9tkUd6kFF7qr3DLam4oD3nHoQibDyGJ3kAmjVyGMCyHgp",
  "key26": "3LJjg88ztghKndPFJZ2dNXdpBKAEgMFYBiJJUpLm7DGhuccPgro8quEnKaQyVdf6Yx3yjv4TvTSbmLCyqe6rCS8j",
  "key27": "4eF213SdAHEgJHARiYp9d4ffD4G2pNEMDwtPR6J9LM6LCmtxPYkT495DDq8khuWRDf2RRpBRyqs6fZgXYSceM6g7",
  "key28": "22wy1doERRd2dYkFKZrZRikya2hhe2zPWpWied3tQNPsKYbMChZb9AAG1RZw9gQrtgd3nYNjjmBnwNgycn6fH5ss",
  "key29": "4q7xXwEXKtEFTpv8Sm1gcXC7aCqTKZMg8r2XCLDYGnPxUFpGnZuHpkLpzWBgqvaBavqUueb2XyCGKPrVzek9WCqd",
  "key30": "eGyMdBp6kdx7V9b4gCMQyGdyMPSTqA8ji1B9Jo8kVvqJXZv4W2V5AYFPEwdjnC5coFWDXhu6X7NnybisUiax9SB",
  "key31": "4aeQbaGHdsXA9qEqw5Aacwsh3W1oEqYQfsYGPhCTMYhu8Zji4e3nEo9hYAj3RWBpSgZhtrjojhD5BuNUJGqgUzsf",
  "key32": "5bKeMePALajDmNzwaHtGt6s8Cs5cN3g623DV3AN3HBDqz7HxQC4X6qR5APUSsxCPwdy5J6dfYZLSvfwdpuP7HzEn",
  "key33": "3LGTQBWkQQMwqQeZ93ZbHhytkAc1rXZ5WiakKGiNrGGuiaQ4EqnjnJ9Y15GRXocb3exTDtVnW1Hby5HcX7FAyZZT",
  "key34": "5zjJbr3bMTY2BtrLqNGuxtZobuJW5PWA4aR2AwgVhPashsByUjyFzw2n36xFJ2Jfkm71zbtWmrpn1mWHEF8SCJvr",
  "key35": "5oNR16a4epzteEit6dUKhGr4hiajcBhZnyZnBkD5FvXK7y6vBC5ZgkYF2XRHq1d9o4Swf4TJQPaxyqH9E6jjkwP",
  "key36": "s6qPwmHu75k9yyebPAAS87JzCown59KAg3uULXtYckVruV1huMRZ3b429uB2saFyCPV27K1rN4A8o8wFXTZLGn8",
  "key37": "kKrmEd7NMLHhAk92xsPoE3g7MvD9RCTSvVs6dURuoAPMm6dZKuDcvqtXAXCJCYV5ysyELiXMf4mBY6JugX4Luhz",
  "key38": "3Ytar5reW3NmKwHDtdT2mzdcxNLQ9kyu27s8JckiEi6wwcP8Nyge9pFzuzpov7x3gUpJpfMSovWJ26MqLD2Aekgz",
  "key39": "4AwSgkcEi3mMX4kTLZ2xfGDjXHSfmTyosEB7p6Vwwanr3PehcSK5RsdZbR8AyArzD7TuZkojiexpGG3h8AfDCLMH",
  "key40": "vvkeM297ZAqLom32eHXFko82qGEb73Rb4x8bVNdYSgBCDst4CXKTBQHBgVELS4iEJUi8FE2ZQKmesiqXHjMFR5m",
  "key41": "2KSQSJjURagZHLYxwAuY2fsSbXxeABg6zXfY8Ag7ao2vTvMAZkzkXvkh4kp6Ty5WPQYbfbbp6XVb4ocyCtUcj8KW",
  "key42": "53Dq6Ke94rA2EFtnuqenfmTqUB3EAm2QCtyPMjA1fwjLewPvttRgk95UneuZ7WaScFJkr7FChtVnLLqGrFdb75CR"
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
