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
    "34enQ9yexU3i3ZuQTqvPD7wGQMAcpheFbopJA2ttJC6Z89LidGHWU9mzuFeqFoV9PPQ59M87QDxVD6xNreWs5dbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Czw6WtfRpZVcAnMFoX5NT8gtWCftf4934iE6ADbYuAr1jguyUCnFKX2bmFV5WkWxT5K8fLDbn6TyQbR5KLQrB5G",
  "key1": "3PfmeURn4RScSAVn8KFMY9n23PjKnMYz2v1qQdYtarE9LG7JYdGZg26LjSy6mLwfZx2jCUec7Wa72u5Wkgyk1Hgt",
  "key2": "5sS53PogXhV3gSH6KK2hYDmHcrFzqdmztDaixCrsyF7Kk6Gj1ME8Yv1TSuJ2kZdURGQFCZRU4ZMkbB9bqja776fT",
  "key3": "4x4XkMHEyAmfzHBWA4zCTkbgrhwUcdGqE5h7YN2TvU23r8XazheKHyVd8saFMDNZGju6UYCGW3Lzw1Q5bg7EEc4A",
  "key4": "65txi6rWn3AMQimWqEjuV1akL1KZFRDD8pM3WTsTM2jmpTJ1tePNxrauYynk3AM2RYmkzKXASamRyp2uHpWiXP3A",
  "key5": "4xDxYAY5EBMQPwY1TeKFQBK8TJXkKPDYmQ5CewXWBvC5TuAoPvoh6cL4P3yQPf6NmqYnrMTzsAEVoQ3QZdMnTcSi",
  "key6": "4R1h5DUTgrXKpsa6AC21Jqdc8j9x2Bo7jrosqocohrtzvTJYKWx68FxnXCaV9nB8959sdrTpYHi5kHjhJVHWVDqE",
  "key7": "4qCGXMLw3hCQxBnm1ZfxBncy3pWeAtv7hDunVRjsnmbf37LsrJhaC5AUQpKs6Xi6bUKv4vWxP6AAqWHab7Yg9ZwP",
  "key8": "3hxXUPYNJKDGqoPK5bLH3CfYPr7YH2r2R92kumXdE1bZjKNiPdat52n7Lb25VkncuySRayaqaADcSrmh37fryqrH",
  "key9": "X9qwiYBjXMprofSpdPuD4gF24AH6LzghtuCcG7YUAyH3s85e3iGJeUTnkvpwiz52uFG5pvPnrvK8BWH9n4HYBtk",
  "key10": "5uUiqJotLQ9NwY4gPfdfTiJLmU4oGZJTPjCFYfAwW1AgZ2M2twdr8JFbMrmKpNd8PHwwraDEQH89to5ZihdzKAkL",
  "key11": "JVKsbwNW3DKVeexBqd7tUi87s8Qti2rz5zWY89yBFfzZkbyPKLMdMx1HnVSEuHCDWqK2WGFQF2trD9ma9K7Nv9w",
  "key12": "W7x9Piqk65Nb7W1vM8p5fwu3sArdDrXxwDvqJom3cFmVB61iGTnJXopBn2brwjsaenNLqhZk6kkG8tpx6QRfX9L",
  "key13": "4fezt4Kk1GGGmemXZdEfF7wUedHQZkfLTMKoum7XB1rDX3ZnH9puoDrK7oj4LB7DY8e5RSnxd3vC8GPaE4K58Jz1",
  "key14": "2g83eRqRQDvFcE9NXJ8W1hXR8mctuWh7SCNMZPSSfKkg5Q43icwmcCYQkpezXgJusiULdkUDwKqjadwDYUtmckim",
  "key15": "2G7besb3zjt6gGrjD4hbXkBXAqNJvRf8jGnBZcc8J1ETByGg1quecdf6JHfQPD1SA6dbm2d4462A9kXy3wwccynq",
  "key16": "4yg5xLhHgVd4asWYo1EknzZbPSfLpg9j69AJPQQqHUmvnSAk419Xx81xcANXNbWd1fsKbKx8oGLX3qjv6ahwYkEU",
  "key17": "4kTkzToL227QMAcrJHpgMAcgDzij6iXUhS7EsqjMXQNyMnPQ5hzGvHD69NrFU7ZCsN6xNiZtbezLNnnGAQWBW9z5",
  "key18": "3VZBx3vuP4cFMdnLgapq2vB7MYvmeb7gQuovoLodmgfo6s7nvVmkm63FFqC3VgjGPDNQjakLnXkUtBfEV5uUzXz4",
  "key19": "2csC4dPJ27CH3npv1Tn9gx2EehM1625MCYo649Hz5Yf3h37FJKUsiCEfXApABej2RC9JdWUmiJ9PJ9DvBfobPxB3",
  "key20": "4H5DC1pPLouyVh3cFH5u9GarmK2TTFs8vrjsMQ1TSMpCBZvM9YFzEGFMsXtxkjNbh6LdU4XHPt2am2H6SN2L9EaK",
  "key21": "5WKWztyXZ1L5s1C1DxBJrgo9KPjsnsdH7YUUJ2ediJHZJQuMmnhQJ14zMQrRZUs3fyCKANVdqm1sUARz9BEW5Tds",
  "key22": "oeADkXVCV8QeT5rGFJQwueaPJsGgAZXXr71X9fJ7NGotLZz1SU75QKVWAZFErEJohLyumdpaXH4yvaG63d1wxED",
  "key23": "3F72UHjEwv5qYZLafGq24zmXZvC79wqnZkcsYSs7fT5aVmLBe7ZD72JgVX7df9hXVBkL5c2SWvrXWrVP6nDL3XjM",
  "key24": "pANVtdZdRsm7d7u6Y9YHs7vzakBeEZz3K8xcxaQdmdmN8SW3sFxn3Yi8qDbZVY3Pzj1wbqqz8Rapw28GccGJQ36",
  "key25": "SwvYkZksvfY63XbQG76jC4Cr6rZS9EKbDSLMDtBufrmFHJK1eD4KeTC14eqQY7s9U6quiy9hWMMF8ioKkAjYA2B",
  "key26": "4fJ59bKBDzpa3urUp4F6eJhjfYZro3QHX2PHqs12cDLu57SPw3XvmTRfeayZcea5pAdUwpHoXLZJZZ1vPLPKMczG",
  "key27": "5pSWDXaQTKfZWKVbsdBGVmmdiZZs7wZWXzTTeJsvKoSDMoVYPLyNcK66cUqm4jKuTA5CWdRM1gFjbK7iup5kjUTR",
  "key28": "3YXX7xAypJiw2Ljsu8bygEeHXcp1pKaawzyJkfQUtWpc26igouWn15kMe21Ptstw6QZgmDgXQuw43U5mRh6Bi8Mr",
  "key29": "3KXb2d26RFLAeSy3wwmsWiVzuhx5FsvDRVhiN9isJ5ms4ZmmNMYeBEYE8fnEBZ6ov68Fozhg243HGsJfuA2VEkf3",
  "key30": "Eia5d7XrAXvWBX4c23Qc197pR8JXhSMA8L19qLCYJx2Nrw9b7xkb6QHBpyrxkcb7MrwGYogiLEYvEDQEbkJReFM",
  "key31": "3VzYZsXkVWy86CokSK3P9MWKA5AKr5vXFqS7tvoKsReurRtweFFRkfVCrrZzVzXA4cLK5qKgaLABMa4LAJkruUbr",
  "key32": "HNLsdJyRcbUeTzaLFWxhYwsSnYGBC5qYVuxMwDNJWKaGewL8X5BbULDnushr6t8cGiutAWki3FvuocUNRS8orfw",
  "key33": "2M8S41mwXxJdRn6KB1dECZ1hWXPdmDwY1jeLnkJtV2951NbpWRXhrJkbY7LH75hsyCiRYL6QsDbvNjBQcmTuZKAd",
  "key34": "5DcbA88sGifQpRtM2UMDnFQSs2N8YhAReNr3XnnEqLQ69nThE2GxdKpNSvbhCr4fE9SJQYYi51vMUudsnxdcrv38",
  "key35": "2UHjxy9QptAAUmj5niktvUwEJP1r4PzBFpybqCkqxneG9WuGgoh63FX4my1PN43ERmC7y5rCbvv6QtvgyqbnQit9",
  "key36": "3ZwMxsBhG7wzHYPL9N2CdggKLF9ZmNVgJhTfv69Fid36AQbr6e2aTDaq6nfvUP3D1MmUAYFiHz71SDq5RBf9J4eT",
  "key37": "4fy9yYDrjD44RawJfF2BeSmLUw7ocSo3T4d9VhTDC9AJ7nhKrsPawoFo53eSj2fk1bfhnvtXHktYSrWsbTj7cYmJ",
  "key38": "25BVXidtrpYCkfDWkr6vKwXup5WFTxGqGTqzVELSsJBmEqmYKF7vLEjztfF3AeWdFoi8CB8cFXYYhKwxKMkecMCH",
  "key39": "3A56ykeN4KUZxRN6CDcYs29wTW5XH2TiyXg1vz8Q1KcPD77pR3rrA1f3FFAaHvCEs9cykXQnLoRUCByBw3HaobE1",
  "key40": "4dKQQXx8T5WHBntgCyXsSCfR1hS6r59Y6CXEZPf2XAQet8uDE2DLFMAVhNqkbdR2RyYdijXsmUPQsLCEfcX1eQpC",
  "key41": "3joA4LDgtpEVU96Cyu4riwf6VMB8CTEt3X53QEn85HfToTe9mNEtSFLHY1p3fw5jWPVt3KCnCHTQ7KXZ8YG8BkXV",
  "key42": "5HzcyyxFo8xG1fJeWW1EiRj7sxj65Pessk44V7aVJgtkwptQQfwH4FfaUKC71vciNoLCagWDLhawb2rGLricgMth",
  "key43": "2KuEwjDFVMgGkwTQdw8uyoWcQwWV2sopo4oVjZ8tfRuTbAfv1Jc8b31RytaipaPrNdqLV9N3VdnukwehQEhEE5AT"
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
