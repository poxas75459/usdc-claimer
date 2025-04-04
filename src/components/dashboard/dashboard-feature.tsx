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
    "66f3vPZRLstNw8ubksXLDK9xqHrRGciJUrUvdgp5SEnqK2AxTNfV4symT7ynqBS5rp4gWtHjvGbN4iqa95JztwVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4daG1CTn8PTUinrUQuFyxEseNVEnhngxRHKwZ9Yyf7KjSpS42Wpo84wt6Y3qid3vytj7t2pW7JDDcAHhUMghjP",
  "key1": "chdbUwc3kaaqp5ye7WoFzV2x4UBY6qwBiBBuuHcXsVTqygcjh4m3gkQD2E9JsS6GcVpGsq3XA9VYJcSeCiVMz6Y",
  "key2": "3EPsddGQEPLvQ21pM2KKe5ababpYTakCUDztbipDCE2p4PmNi4ecfHDgdWQfSSp2M9LXRpJv8ejnffz7XyAfvMmt",
  "key3": "FvtLiSxD1CHfDHGQw1xD4m3uFCYQYN3pc3dH9K4LPEUXCT4Jtezo6jRJ8J1NtKnxTab9fwKYC9SPcnqyoLMfT4M",
  "key4": "27juwYguMHn45aD2aXKuMPrQ83NKwSa4FG2MvLJ5KJkmAyaGURkPV39yLiHKcAEDG23FBE6CdpE1AKaVcgTpWk8V",
  "key5": "62oM5dxAXKXuDpTSB9EsoRJSWifjDVcy4hdJyTtfUZyKqsUz2W7WEWvTrvesx13WzXa1mAZ36kbj79BpSE2twgg6",
  "key6": "3Fxo8irgToTuN4cr3Dc13dLPzTRduMv6nLEpuWcwCWztuEDDzuTkUDooBsJkQV6bMCu5YACJUJjMjHZAQ9WUXCxP",
  "key7": "3uQPNwpcAjVLAGkwogXrAMGEZZa8KAutjcgsRuVScK3YYHHENva9u3nVftMvwDqiopnpm2Dq5j5QRTh85FMHQsE5",
  "key8": "5PozdjXv7QYDcHEeZEGungU6nDq8PZ2MV2JJwoBavfsxJ6Dup4TyHmpZoZ3h2fHYytpTtGD23m8h7gGZ3yresMy5",
  "key9": "54VJQ5sNhddsWCyHMkdFK45ymW8Bmf7SYUZrQVgSaAMkwjGoPpQAzCwCPk8HnBNxduFoKhhhuuDCEcZ3dLU4nVnB",
  "key10": "2bUB6ZK29ZzGBf6S8s48PPS8JfkhZmHaXm174niAxucPHF9YUzp7ycNodu9ZX2cBLw7As5bNaVs45Njk3eYybNme",
  "key11": "2FbvVWyzku2by7SwhHQ8hSHTpHFoT6gLHjWU2PEYuEjWxLXVyEpqLX1YxJYUEU4Xe1wepb99p7WcMjFuvyqkHhvq",
  "key12": "414Mz86GwcKD6DdzToExfeyELEbCZDwjFNVyQWBLreGtE9fJqpcfuH2LYrwtkaaKTx12aszjFmVGDGz8V78dRtbC",
  "key13": "5qET4iszijDMXiCXUMMEpcG6uiVQMZCSpjjPXVNhQ9RvYn9pgqbFJ6VX4Pvvxi23CrzoifZKAEiU8DrjV7Nq8B9S",
  "key14": "3jrQsjpWmXgaEaMGCcKeUwkSa2rWP7PQsKjPxVyNYCmQt4xYu9agcfR6vMDZZFgkTSiWv5auS9xSV8Z8JnnET8A7",
  "key15": "x6vvRBT39WXbqGyvZyWqL57pmoL7CRyGHGDwMeyUcMsv5QyqtoRHVxLcpbmhBa7rVV5LUguExCN8VLRgcaNDawA",
  "key16": "eby1jhZayB28k7iLcRpeJ8Dj6Enr66ZnVxB3rxqhtQ4UP13tBh4aqx5W16HfY4kLhQ1Pirvhi9Vk3VKKxvchCT3",
  "key17": "2wFdL9SwpLqDsWhdaU7n8be6Gga4BZiN8C8qPtbiTTETREMLthsXijcmrX3SNfTPsh86wh6FpXtsqvRKFKrAhiHE",
  "key18": "2At6JYuBUQWUB7e9LFeES3orkdsZW5LcWS92aRoqLNKCovHJ2SLbfwuZJqJb9tjmoCtNVb4iDYZ2EtzHVkSw69Sg",
  "key19": "5fYPTcQmvaakG9XPVWYxLzqE1cgQbygJpSWXp65xCQVUwFdsrPCv66Fxv84vQKQQo8vvwBVaqyu2DhGwVSK3jNwM",
  "key20": "29LZUcJAK15dh5tFqLHs9LchK139DLQTzWBXKTRdv8X4fkCfQ3NT23xkeJZy5kK1RPswq66NcvJJQPe1pqJzz52X",
  "key21": "3MfkJ2DH2XbBAfpK84dNNHEuTPrDfsnZZ28hb3twGsKR7uuDf4tBfP2x5Ks4tBsaCPDJusC24ErWbj5zbgUbi9Mk",
  "key22": "3ECgfKM2fA3AhVP5xNkjLaJHy2vWDEh7F9B2nySU7XTzy1j9kTn4btfd2RkYah6JXrTmeeQYqNMoKaDmTebv4HAj",
  "key23": "65BKKMQekvRmbG4rsJYnscsrw9fqUm15GGwecRNdPTgkHB5MvJKPqU94C3svvpCJqpfWL6tbb7psjdsYwp8q29cK",
  "key24": "4Czxq1tHTavr8aqQcQz93zUbKxB2NtKkS1i5sFk2a3HZYnuRZV8h9DJ1V9gxJKoQsBGm8rvDVW3ESKW1WETTHrtu",
  "key25": "33kdFMhQif6pirgN6wA6AFCqca764yUm8bAvAEi3crsizGqM5xWrWjGR34hL78NSEptwReBL6KXiCQ7jqsRDdqZs",
  "key26": "49kMosrKtrnFz4tQRcrXZNEHf4pqUSP1mmyKJwrh7Fo83GsDuW9KiTbZ927HkEbBsz9EF8BTRjxUoeAjrRj2h9Zw",
  "key27": "2sAbNzrGvb3jEETB65KmSpmkQFt4B4NHJnrQoYj8T8gssNC4PsxoRChVq1BrRjH44UsvqaKkHe3UwCoidPjNzf72",
  "key28": "4VMgudrEZm3kfxu8xvLY75okDpzPTwTKCkMgnTKE9N4KWwKKvXPqp9XFQtXiAuR41aS7j76e9pjxMFLhQpt3qXXD",
  "key29": "5ZGPybMmaULQsoyJujKUUHW7J1nHFhPrThUEavHxZ2GamTipBVR6DQM8QnvLHket3zAfDKqwEDqo6emJHFRThfVk",
  "key30": "4WQmhx15JE92si2oFokG6Ya8XiLEKUexgADLVg2pqhd3eCn8DH3srS4WibM9D9NgH6fpLY9qWHKUkj7GFfFgUrQi",
  "key31": "64AqxHqYKYL1HpV2BpVKDFzkucQCHK24zsVnDmxHW4HVA9ssrToitnRKXrsXWNwrEep2ZLSHmCtgRAWJ4gb37J6y",
  "key32": "4eEtVz9h3h6AzzZAdVAwDNawfvGuFyduKd1mUDH48CwHDGu2QXzZ7VTvQihNfkAqcSZYGBFa26xpPytamBfEHGEX",
  "key33": "2Rf2YgPJzDB4sLgEqLqAaCoMoBpqunHFHXSso1CG86ZbUn3f4sNoZwVqUriL7Tkpw3e1Sk3WWb6xE7C8RKB5YTdW",
  "key34": "57pmFoZm2MJKR7BmMtydW9uoRkEMogkFfAnYxWaeK3MRpJFtw2osMq3bFh9TCvoZp1cQr93JnXScEK85khoyiADW",
  "key35": "5XK3sUAqctpdfkCHuAy4NQH4T9zVMNNsPp5HMR9Lypmdrv2wgKKpBndgPRo3KsCHErzH3uzHWb5S9VH8kQphYsEb",
  "key36": "fMeCMfMGvnTFdowZu85Bd1CeatgNFWoqf7atWxutKYPZRSX8qewRXW4Goshs7DcdZVgNi82Jdkj1R36J6H3KagS",
  "key37": "4bKvoFCpcFV8rYuNUE2ZabE5izd3gA46LwTMB2PEbtA8ZyaLYuHX8w5K7Z6erJdY5PWoe4S7jTzAuwrk4sqVLonS",
  "key38": "4ShcnRya8GznGEGKdihanASzphogFsFbFk5yUWJp2ykRistoAwCEVDSMFvj9eoTnGt4YjrdUFHaybXmuqR5Bojbr"
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
