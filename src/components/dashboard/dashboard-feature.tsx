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
    "3mGz5366oiNvVvGRQD5X6EaEXANEApncxaC8Jy6kJr4sdR22wiPfE2ZRUkvi4YhpVxuZi8Y28SRquPLBERaKp9vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j98qHE83u7cdz7neRYAn16k177zHE3DF6PzV8sDJec8ZNqmZEQbf9gDhj13Prdcq5iV7CezEwjhe4F9DJETzA4t",
  "key1": "3Ah3QkpoQJuvFjfeLaPHuLNmVVEhmRH7hXjUsWpsNpcZw9nnCR69Q1YUeARAE1NqWP2GQC74jfuWaqKxZ6qtdEfa",
  "key2": "1Km4wwBbJtr7CiChTF31qpPr9vfayiCB2jUAY9VK2YvdBV8DWwW7zqJnx4G4w8JBhJR4zyitaKkNqttDtpufTJw",
  "key3": "3mwxFga9pKegihi5dJ1PjGwtoVaTKtMRGfCrr9b85g67MhrKEUPajUzspR5WXkXNjyq55pg9EvMVmZYMzysdtUCA",
  "key4": "2AzVt2kxTFgARB3yBkd7hwt5KtdvkkixXQsrxNVg6cVguRW32zTTuc8zsHGe78eJ3CCHZ4mubKjZv2JNnCqVbh34",
  "key5": "wvemtgjSeJNdt7SW2TKVKfsYzvcQdQkhi1EQFqyPtZkkhaHq6cK2DAjH8p9APrbG7gozpghrnkrK5niEesEbFb4",
  "key6": "3YcctDrDd6MaQJLCV9LXjgoHnQ82JqtEYeDpMYxUikjHnkvquNEpU48pfSHq2ybBbZoVwPKtL7uapdAx8iHnSb6q",
  "key7": "5t1pezPtCKXnaG8s2SuFwYzJnr4hWjDhVJ1hgn8CqyY2RiDsQHr9D58gpK1yi6NHViJazKPrgLzSX56rdqy9jC4g",
  "key8": "2oTvk8Uh3tH73sm8syLFTkhtpj2f1u3aZashebk8svXZhUcHsCHFwSXP1ASroymfWSNhefEvhyi6CMW3tngEicTt",
  "key9": "mAc3yMs9JXftJMHkbV9LHuwRx9UVTKgb1LouhrKuJ7iHdPPJpUiq8Ei4LkUQme7SQc375uos3WCiC1Yte2BFAy3",
  "key10": "2fL9CZ6CkQAAq3Czn6P3AAhX5RaKSaLhQiYoVnyb6PBmg5R9quBCafVrGSZAXyrcGqTWEN8fQahzsB9qNMeYfzgy",
  "key11": "64hJJ5kyRQ4GYEcu6rN4dXYtuuE2AjaiNxbLo8SwQJx85ozCK8iqDF1FbdKafukLhv4fwnMzSotG6kgHdNwRnPxH",
  "key12": "3YVGp54RAApXnBYmTUJYFo2qcKHfahGuvYQoRdC1FpQYyHNmfL5MZ3WkPFSPnkMUorsktUADcbnh3pgZnvZ7fGxj",
  "key13": "33fEonLBcayYSSMRhkFKrssrEDuYeideLpRvQ2kArsTHM68FbJs9NV6zwxi82tstgeCiPCzQcnopRTZ6sTHbzZSv",
  "key14": "8yoBTui4CC9pJqhWiDPRsESYEBqzoh8Lzg1HjcRuVQdQoYHTY2QwxpNrPQVQwrid5GtbKVb5chGvM1Z6pKfjVZ3",
  "key15": "2VXCfUUvF948gHKv9tUgtSUx97RVBDw5MrKk7mToW8jrawSSmHRkFs8qRFkDn1tRmPbpDWkVmdsDX4p1LiGB1xFH",
  "key16": "4L32GV1M12BrWYJv7gyc172EjoGDkDzTWGznsgXTzhRBJroV6jXCGYVKrfyXHSW8BLuv8oWu6m8i7U1fPUqTuu34",
  "key17": "25ZhFs6P3uhamP34tRxje26sTKjjTbhGXEhFyW6jVhwqmNE8J36ezLZYRybcJWss5DuLngqLveuatbuy8rRcz5bQ",
  "key18": "5Bc9RijDKpbLVkDwqMKNAkvrrqLtuwcrPpKTfpk6j8s7Pt6SWMZHuziziRhor21vx6rvki6ynKmD6HWw3aWtwNXC",
  "key19": "vSQuWdfqr1P5CP4zM5CQsH5278PqLQC4Gj2VNXYbqfgdZuP6S7TPkY6id5qAiwFNYgX39pG1ewk3UZEkAXuiRZC",
  "key20": "AD3h5eN1sQeLLjc4xYti84pofSLeXxaupiaHFijqucBZQuSEaTqbMY4JxSsJzMUWreT1eXkRseCvzzpjAJbjQKC",
  "key21": "5xPBfUZY7BAhChS8MgcdcsYxDQwk2iGQqvZSR7gbkeG9k5oa9rCNepMwG6zKwGBciApAuTQA7LSvt2Wh4gFhmRgD",
  "key22": "38BfaRQjhVZJegurDNeNieTF2sPTv9QsnEnCcXQcEezdQ6vs9wEiSCnisKaa5yjiwwxfGdTHgAauzKMZQ39uPXA",
  "key23": "2mFGno68mbrFVcwwo4PHM6inQcL1TkQvhkD46JTU9KjGHPH7hg6v3HM1XkjX2tchv9VJWf5AQrgtJGF9L8nKkSUJ",
  "key24": "3iRtRL5kbof5x4CsxfLxxpYNi4nFqbs2QdnY9REQKKyNc5agL9wsvQwvGzirNd9EpS8j6nNrH6fNiPyTYD6Xq9Cm",
  "key25": "3sWZhNF8ophTxxqgwwYQHepNZS5KA5Sxo7dyseDuQEZHNXjFKNwhbb7ex7YkT7VYWu1zD98Xk21ywtwzLaXv2xEk",
  "key26": "4wNBMLkMgGd8s9KGsA1SW8o2dQTnpxsJ4nAY2W3xNiiiTKGQdSbkcqkHH6C6PD9KLdjHeYsBvpdQ2j8Y8f3XcaRV",
  "key27": "3a74B3ckdeSbaNDTfcATC6BTTMhYvdrHkbLiUQd6yFu2wHYM4VjbQoGhi2Jn2hVRXNGow3vvoMLBrQrrkyuHNATr",
  "key28": "H1JJDbnAtqG91uFMMR7kuoDiPnS8hFZMCnG7iAnLQbtxPgnUnCLdrgzHs7SdjPJcBNedVY54FMSi6uaPcsj2W4C",
  "key29": "65Dpt248GLujdqf8VuFVzUdJtp7xTYXbMkx1rbepWzhwsL63S8ZpCx5hY81x7kxguyQnj7ig8F6CGKQb1ARVAVti",
  "key30": "2VronH5S2t5UYheeQkpJc7RTiXSPvcYGHEW5LTbxWJoGrUgxjz6XDEQWknM29vFji8JCFWg8d2hbHHtU3DzBFb7S",
  "key31": "gQY2MAAP6JRCeeij28po6Ano6vzX7eTZ58kw8NUQWtm4evYuiBP9xcUTYQQSu8Yov5ca3YtGZeHeQcJJxMQF6AE",
  "key32": "5PXnxfvbcChNb9fe5QjeTRRbm6vab1g2BFueivRN6pX2htVKof36hojbmatLe2y8jubk6MNnrqJDKvZJURrCLAfM",
  "key33": "23HKAbRqjLPxY5fdRZ4CcWGR9ewQ9nM4oFrkamHGgYketpuK5J8jphLfQaAsT4EDBKeHq8jYQHMLoMQK44AD7hhz",
  "key34": "4W6scN6ApH2WWEmmQ4CAcVEhTw1Ku2SetiqdxSXjubjfBJHj4QMoC7kUGXWiUcsFMb38qnWuKNGS21a9U6gen4UK",
  "key35": "9u1uyRsPnsEKiyy6AarvjpjUZPyzETDbo914nrQ6PEs9F45XmUqN9RzfqkwSsE9xpASzbsGdq1FqB1R2C7V3hs3",
  "key36": "5Nupnf9Vs8kFCBWP3yw9pj9z1NdC8JvdBMg8zug6ZiP9M1DSLGNaTNGcKvr1UTyCQAnscLu3ssg5YgNu4BAaqc1g",
  "key37": "3bUtVjF9cptw3i5U4gpppPDi9khcyLoruvH7Uar87Sg1dyGo58WzUHhxx6xCbqhY6JmUWxFVWuJ3jmDz6CuzT6gJ",
  "key38": "2P6kETj5QVjDojnyR3a2HYLAkiGchoiuhwnPz37YXycRjgesQAHcqaExPRdGic7dCnRAGAqZAwsZb3sqeCY5RW7",
  "key39": "4FtMihGakJrKiEHo6jYfEg11xi1PZJRC6Map9q1FfJtdVW3ZyqiqVZUXKXpW8MGjyBp7EB4os7aUSLrBGutAWKVU",
  "key40": "4CSntJoY6hQUCKA4RmB6ScaqLcn8Z4mmgPMTFK5Wz2yZHNSFhreZ3nhEuW2fqYDS5EMSAxZDBPn8nu8ap69HS6v",
  "key41": "4TYSqLpdmbu8agUe21typCpZ83YH8cgcfd6XZgQvxwGz9bDV12e6k2dAbD2Q564R69Y6wDvq31MxgMiRrVDC7eHf",
  "key42": "61W9WpYuHwu5HQPqNkTtSkwGSUk7yDLxY2NjwWZqB2JpPTnmv5FuHiVMxRF6rN5jnBXeqnuvZ2dnGUHGzxsgVHsB"
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
