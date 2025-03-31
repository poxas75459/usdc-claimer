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
    "5f8VoKKWz6QZZnsg2ZQbuUh9T11HSA2Jb79hiWYiw3vjLQAdRanw9xkkE1aZnZQa1c7Vjz9tmZV389uCN66WveEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q15nyxS5jdgEbKD7ooRxqN9BKSbuNrwK9wEXLNH6PtF6MxhAhYJBQvLieH9mLwLz5Aw8ypWagNND556Ert5RWEE",
  "key1": "38LMneV8984WWHZa5453v7MaHFCzdeTT77awxNUu9xGCvCvbCTKBoHtYMao3MiQwf4virDqJyLTxkUn31cYQWvus",
  "key2": "432ThZnBXqX7nubmp2XYq9JcUYjAA72LGb6eY5ji1kzhmEi345a6D9z2pvSF6u7EE3VLyCC4RQrk1w5nCtbkJSTM",
  "key3": "4mSbG1XgMd4abHWKRKex2XWA49L14coVCrasAFcLFroVfebqvy9fbRXqnNRGc7qbARSCRbyo4893CZUprFQbXB6p",
  "key4": "ok4i7NbQZFoqPeTSzXasZ3NGvfF31jKbC1vnty1o5fwnAF2qhyyCKgjw5kAceJgicXS3pyejKmXiicwN7xW7mEk",
  "key5": "oM2RxWwevouztN8GP4XvXbhRFBRWjb5oPGC7ZyEH2xUSxxtDMzMLWeETwS4aWfNuVwk9eerg15qToQMKBHHiTzp",
  "key6": "3snuAa1R2b9bwUvss8PnYkiB4q77vCpNuKoomPHykE24MmGymnmgtd2TKpK8WHTZWTG9VwWBjXPuXLHRphUTA1ew",
  "key7": "47pd23ZJc8wScFVNc6jaHW1MDDcbRGpKZZ7c4cBprYL4basFNcv8QxYoSXkJm3QSN1adLsmimhJ1jmadUvPaN4o5",
  "key8": "5ZGVyAxtiDoxtACjg4muat8MxoffWLURzLJi6P8NWf7WU72ms4CJw8SqoZg1ZEzEU7GQfDdyjyc99Rwiwv9Y9E3q",
  "key9": "2FK7Q1k7u7vvBSKMKSgvnuPQ4zXXEf9XifkgiDzY1ewSBAwbNvR7So95RBJ56eacsVjvjTz9PHW7f86H2pu1goYe",
  "key10": "4PfBc1wmmmhUC8pMs8xG9umK2WjqUfJUM1guqZMwf5xZPhP9mJb86Uvr3GTYXmuVMNgHVw3yZiJKVHx7LW9k4Cv7",
  "key11": "5a6aCNDpUhquBSZPHeTZkfaUjyqTJffUyXrdkqvj8RJmT5fbw6kNzypea77YM7gd5av4TcX1DV1b6PxV9H113pm2",
  "key12": "v4ZtBe8nbdmQKxi6wVDzWDjTqNZJ3LLD1i6YbQdqBnVwi51L2zLtqkXZ62a5ZrjMEVANDANV4fCJNfodv3H6ngA",
  "key13": "643GHPdsQu52y6a4BWg5y82UJ1aSo2tegWaZNCnf6utijw1Ftf9Dn63p2i5Y1JbSEhGXxKbRqrTudEAsmjV7ThYp",
  "key14": "VRBMC6bLHgQUkNjx7aGVZocSJRE5bBohia2JDdo99EfBgXWnn2dcrfWBLCC7DTmkFHXcbp3BRZGqS5hWAMoK6Fx",
  "key15": "3oW1uVHxd3bcR5d3qKLEXWtz9EUyDDFYzF93fxRoUBQDffJpVqu6rGCaFMfwMKiF65Jjek1YehdZTakY6EU9KBey",
  "key16": "hBC967PVDvxzMyNj2dp2u8TopDJvXuWgWfasUr7DXs64s53H2shfhnHxzTCXpZ18mBCqpfUxQUccgtn59Gbraxa",
  "key17": "5NxWavgGXs2xbjtE5PtuuiPLS7zaso3vUP4EBevWTrgssdiDYzLcRNuvkUE7oDGshSVcB3KNuQ4bbXBZk37n9t2X",
  "key18": "2UvLiMHT9cKdbhGUfopUyMC9uZSF2Ji5yUdqBdZNyXp1QUKwrfzcDETmKr3KZLcBEdKiibUHSaA2xsQJmu56MW3E",
  "key19": "4a14HoUtzmFiGReGrSsLaSpyosQP35KLq8NcjSoM3nqQum7cJgURfNSRKd2Q5stcnK8Sj4AdDSpXfGrpHJ8ijgVY",
  "key20": "3jS9E7DcT8TeoBEWzokUSwtvfszmWybptsnbeWLYWUSQZWP9yuNCyEhcQBvvgUvGqvX7uWppm1RnxfxBLPuiGGRE",
  "key21": "2vTAsuk56MouJC29hsnVdML82wQGNf8v22cFZiobQA2RjXYjx4TsD2uugZjd5Tyz1HF7WEwRLgx7gizEB48Vp1si",
  "key22": "43dUdbpAurThGv366rfrJwREjTGviu1eaXtNjLxM75kahpDmvoJEBy2dnFvuWbqokvTgsfD19F9x1LwnftfK4KTN",
  "key23": "ErHeLdDcpdwncPmfyjBWLJtPaXjL7Th1qCRyZZgd4cadpKaUEvrAngN93dTjhe1mdvn4dvZJTZCiVabxmiak95p",
  "key24": "4n85D5LqiLcWWjLbU9pUtaFyh15TtGabpuggcLK9kK1BCZYjyEWsNkbkBty7vgRvzLUn5vqZ8nUfP36Pj5Xm7SaC",
  "key25": "3wYLp7Byxh92ztahkdsExNk19tSjKb57UBvVFgTumyf89yu4JBwMCSLYSAMtzd1D9PsF2QeQZLQcZAacmMrmtsZv",
  "key26": "3AofTfQqN8bfMdZd43AvnpW62S29bXYiTSUmE5fB4xm3Vg9iavr6nv537UCN6GEHyWgNe6Tn4sMBct4wDmnAwVsT",
  "key27": "3K7X9CCKruAvPrgCFAp6awx5qtpXFNWgmxnwv2NhNkLU6y1QcXHKDC7KbArYoSufW72XNaVqHhg4Mg3cghnayb42",
  "key28": "34VyQ9xF6fRiLUHwVnrrdRyWwYrKgPQGUQcF4TeRme8Khf7vzXsahGbEvbYB6EnZEF2KjFwaQgD6hfnVQY1z92uW",
  "key29": "635NEkzhtw896zze3CFTKhFBWd4zoSsSnsQaqrKyjwLdtFrHuwEbGjGxw1bmARCr5j5kN9UC1Kr6ekAzQzJvTLrW",
  "key30": "GzoAevJ27FF69RALLUaz1fnqAPaFywn2b4QHXqqtNCFT4dMxJT9HzZKCuChs99xT5GPvwq3jGiChZkvfiQPgiBT",
  "key31": "5SntFYtodeWSJLuTGLNgUHiZCpoRRA9nVbvZLdLEtcNj6BCwsKsvSQzsfYPpaVHvogghu6UoLSVdEihQJ8M3sg68",
  "key32": "5xTPgHAmyE16xbDU8wipZAmEsJePq2oFqQma5FZn6wnJKKgxGeTz9DbV8g8WCyeYTj8jmUNGoZ1nWncrdkd8J8j2",
  "key33": "4ykrxAU6TPHKh6FkcETi6o6mkWPxPVLp5UH19WaZaVGtoc84M7moz2S7rCGFcKgfPZjj5w9WKVKUazUdLjMGvMGD",
  "key34": "49TJHv98tGk8yLr76KbDwnWEE37h1kgxPeJq98we2jNimHuhPExtFU7rfcqPbHiFiyBkzwRfaNehFuPzau2zAaoP",
  "key35": "JzMLwyiDfP7e9MkKLC3haUh317j55FnQuMv5p8WtRjnAtGCmBFt6twnVTRQxGUXxAkD6umahPqPnvvp4CmUdLw7",
  "key36": "4uUvguddTyUfZaKX6JR6xr95w5BqCJEN1XMwKqPg4RuUAkMEsVZwXEUoYwAcbLp1JFpxnUgWv1QS7vLsf5rSuJMj",
  "key37": "3PZU2waUdrJHcLeXTkV1sv31HBoa3Z768ZbtktkQ2q9EwEddk1jTShUdX1V6qNyzW2aH3DMrZwKfvpcV8CMN5e5o",
  "key38": "z5nTG8xSiVc3A6dbp1JA3oFJfgEoQMxkKd8KLqWpCkcC8k9PWoP6ek94qFu1Ko6q1DA5bYWjdX32gwHNa74n4uf",
  "key39": "2xx5MFWPV56JUpBR67he98NuDGxTD7cQQfuYNcNZTwpdPs89mApYbLq5W4oRGG36ZqwR88yBDVnEYoq6pb3hPvnB",
  "key40": "3HdFbuNYVvrHXAmcTDBBQveQjkq8oxWXefRr3KToUKstRmGV9Ey7yorTLdigvXhNBSedNotw3eALxcHJQj3fj1NM",
  "key41": "c54kf8m3hugBGkCiqofXRLBfX7ZtUnJXBSo51HEUPh7kRuF4Vn6ih32qUUDhpakRpxP3G2vz4NrPiBQeHymcm8A",
  "key42": "5jLn4bxKaQT4VHjdwfjGiyYvpvGaSPnsCa8xtUt3tUm1nHxZ6wNnD5838sTL3QQ4d32mBRhuRZt8a1SpiPswe2v2",
  "key43": "42KJnTQZSbBFJRPMeSdsNzA9sR8uHSPKeJr3PKy9wCNXCu5UrGdE7NWWAbwverkKRVM7fVzM7cfFaHP7z46hoqEB",
  "key44": "2zyVK8MzqWxsJV613YaypFdvcnTrcHnDgFoGi4jdwWG4r2zxTAzjEUfn41XCzcYmRqwfDDnzCsWS9dnN9ypXCe2J",
  "key45": "3Dq8f8YKQbyh7QSkX3hyP9uTu4ZQdiM4Q2ACxet1tNHHNaSo7u8xN61wqba24NMr8P7QbyL6WARTHGZ8HkqtvpWa",
  "key46": "owpYg7r2upz3FbjWjh8YTjt8erkvArybfEoGV2wqWT16A8RrUDwtt12rhiM2v2R1XbQtGofH5Y6E6y1d5JjQhfx"
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
