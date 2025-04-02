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
    "5ubdGrRGvZ2q9bPAnA4ocvHVLo4XSPvkfzs6qwXueVt7xPj7LtjePrXQZN1R8RGUNRK9TRQqtD1GGjRBFxgdwZV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DfoBYAuQjMNrLDsfM9TfuhwCuj3PKL1GiRzdfCATXxBZ7xRyDbRGEmLTHTerTu82H6ATjc7cKBWecaVChbApQD",
  "key1": "4sysPDGgsbjxHF9Wd8ziyD76CqJJELbYvqLQ6u5bY2wXiVATnFzLYUYyNpWVAsRpYMZR4aGVxQTh3xjP6erLBPq3",
  "key2": "4uj9mk6SaqdSxfJium4RmVoBBvArH4cxJqhzCwBCZqBfjWjY4rPHXUDh28EjzN1NYhrupz4rwLs4iS2eLX9J5ua5",
  "key3": "4Hqxh7fWyo18hgfS3zePfc3Mg5om7MweGxcWxe9LZG8Mauer6Znf78cVWLDQ15KpTFhv6YqpJCMyJCrTvDPv3a7p",
  "key4": "4d5ESqGoCfRJaXE89SMyRJR6HEaS3j5y7jXY1HJyKd4HDt3iBGtd6ttKqWGfusrXa2LGmeNR4Hg1WkaASu2dEQRy",
  "key5": "4xyQPs28wNKnWHLGpZYnRThg9D2KDA2uYciQV16RyGGSxkfNBjZha3tbCN1V9AYCMutvtWNTFMvaULBm34uCX5FY",
  "key6": "3RWpexAbeHttVBMyJ4kc7iGvibTZpsYwi7EQjyR3XJwi1sLakB6VEQUYi5uzAWuFv74FtynkiE3TJsu5PKbz6Bog",
  "key7": "4Jq3x5ChGv1LwGe6BHTsHzaeghjQF6MEMTH6SfLvDk2A8bESyBisz965zV3rp8xumxusTPLmNn3KTSJR3Czb1oAB",
  "key8": "5fmwGFXk7V7FZMKEhk4aKmDvuQ4ZjkNh4G9bA39EHy9MT4ei1segDgwK2Bd4ae9ExXfidoP1Rn7CjxrT4vfGcESK",
  "key9": "5VLX8tT7GHMBZixzhGwSofwQoVRUniYUW3nyW2Kz3mW5tXfmqdQ3cPoJqBBzqPSz8ngRZuWUgSeutLVXeQ6P3p9T",
  "key10": "fMpGMU9RfkpPpvEV8zuNCNxWdhAVCM8Ae797aAiXoWotAvjHgAvhjadY7NP5kWvQRf6LvuPaSAyAPYSAZxofti5",
  "key11": "2LLVQcc8gM9Zf2suPfbiB4LuQdtbWwz66v9H6QJPfbbxcWRaqXVZCBS6wDGi3A2UW2qE88K9W6qhVXMbczK4Mcsv",
  "key12": "WhCqHS1u3gTUfEvPM2F9yeCFDjyB7eyaCosupxQUktMsGEZJrvMPZmVc4ZAaLyaaDGTVTNrN6JvCyJZ8oWSowiC",
  "key13": "2oVSPCyUxV7Sre3L9k134a3scQ7ofSkEg2GxNa94rAjTputftA9DHbKrM4o1Rbz9W3jqKmWp8dNrrNUBDethfsQv",
  "key14": "2w4eXUHSzCmAzLfBgBHBwUWgnZaPi7zMLCJaKHUDK17yamKLERGdHAHSTJy1Djq637yfAc2ihTV5knpUcrVu2kyx",
  "key15": "21CZb41zWLkADbRJ8f1wyC3ULrzyHeEN6ThDRXtU8pCigGyuAydik56cHYg3r14wJ2DQC6qiDJb24wk9fHHSa9MC",
  "key16": "mdGBvNDVmQJpbhUdNvdxqM5kgNCy7Kq4Hf7zKHcLR64DqT9YYGaq4fy4whi4S29ZwexFk54Hrc2jGPcyz6PVHCG",
  "key17": "3kFsMA4WX2K3YTvhDP4CNRTQc83Ay4D4z31qcLgo2hyxQAWUckKnMSDB714E41q21Awohy5CGEg15DsZrqFR9DuF",
  "key18": "4KLtUFFxGqG5WxikzjiykmbSfUd4KeBqBfbip7Pky8scTRHZs7HZ1vfSauQQXWSbekjqGjS5qZDi1JmjVhZAKiuD",
  "key19": "j8DrYDYckBzfFnn4AnBjry8qZbo1pyhFMvcrHGQdnyAGRN6SaPvjBDzX19aCVxsrtsivnrkBeFqFTabSeJhtsp5",
  "key20": "XtDUXf6NAu8HRKjdCUyGjxhoM6BzcrmKkG4uzwjqYZfazGDgsRmDHcp7aQ7R5ReC8NFCfkCH6tLwCbDUeN254Q9",
  "key21": "2GATpmcveFsJVhStfQXqBcA6dCpqFBbRsq7Siejhr7V8HJdkVmmufvvD814X77pdQ8uPEaWwfT5cUkNYwepuTjtS",
  "key22": "5XRpUXbwDLyZARsDujZ2ZX62Kk1vZaG6Xqr9UpCtP1cD8zRKsTjXtpmbDH1Rz957zTwuRcLrNPsHWWGtopm6nMEQ",
  "key23": "3u7EvKJw7ppgXQD7KX6hKefuTSkuCSnzKAUdsRMV7y1kNfvYFd8hKsHjBGLDcd9hvDCkz9Sdh5YAaVzWGYnwQZGT",
  "key24": "2ZtVyqH39MRpknt9qKwBLC4bHgcvNtS3kPS1gy7ji6QPfrfpe69gyPczuWQhEifS7sHFU2oT54D55gwfbgtfvRMe",
  "key25": "AhTZdk12g4WPxgviW9J8Lb9cLwVRh29tjA6S34B4HDgqdbZJJGkWCBN8CGgmcR8D7ZyNkaLM9LftRKJzxsc5TQe",
  "key26": "2MHSwHmFRxta69FXoNEhwE3pK2jSkbJfpwEcjVU41ZTwk3DS7wPBzm9b8MJA1ymEoojeAPxpABcY6jUFHMicf5NR",
  "key27": "AxMeQMtmf5WB7weHpjQibzPdXGeBeoBUMNPkM3rSoHRxG6jspJGh5q7mujDSe8VPngh5Q4FLJV1U9Bpy2PHaCPe",
  "key28": "2K6kiJ2teZvtGNCG9sASfdRRVT6J4LNaNn4LCpjKFMgKXU6oBQqHx8oSJxJDvahHTZCXYZJpuddFQ1tzS1CrfCJT",
  "key29": "3zGuumxQobDoE1wVEQpmk5VW1htuhGjZ3XwBhqmHvdRZ269sAXzd1ySGVryr6q7226iLTPtyBaj4GanyVjfpgft1",
  "key30": "5nZLVpFQLaqgMkm6pcXaxrf4bwuq1jQsaDw1TuAy1jJmCnbYhRS7hsmEzirUxxaPCA5HWxCecfzXfhpGwncL4EDz",
  "key31": "RqJk4i76LQaVe4v78meAiEDZLrKQ66yibJhEJdYyayNWmap55vTQ8WsiUYDReTArJDRTcqsdf1Qohct7MffYykN",
  "key32": "gA3TTVdpd3TBe9kP5PKUBxHaMBZAbjr9hVCM94gJyak2fEM9VPLmh1BzgYbMC13Dy6HsSBFP9VieWuPSjmLdyq7",
  "key33": "3gjdPnPjjTH4uBqfYNKfXjEe4678Ht4ZXoTp3DntTYBmjPETZdVkr6TsAGLbnB77E7unKMS1iEW7UJNowR2uJhaD",
  "key34": "2SpM5WsbV77xRRchTajiwQkmA2CniZJuZc7YGmfkuJkxvocm8vf4LG9uuGCVhKNKG5JPS2tk93YoDWdq4MBXkQyc",
  "key35": "2ZVSr7AM7pC6vFT6cv28Qd5hcgZ7ZBZQCgQGukMDjRfmkEBPHcrj7VEvwcx35r9A3MwtNNmMqRu3pa8XWXyeUEjz",
  "key36": "oNwFjHWqif4LMEvSE6YCnz2RcCoTiiTNdoyiDtW253WZ4m7oaRzpeReooSs5c3KvZ1GGZrwMngvHkGx6knh76FH",
  "key37": "5SSj9kkU5yCSWpWzGiVTNEparbVd2ZMaaffNxgWnLavijv4JZTYF4Pg2AQPr1E6fUC2uqGiHKccs3NGsKz4W2ohR",
  "key38": "ifed3Jm7HJRrX8fHawvX8HySXT6S8WRA4jT5L1jtswaTTbGBo87YjZRU6YYxuFYxdmsn7Zp9PH7rMRLDe6Z6Pae",
  "key39": "58Ayv3cXhY4shEzyDJLzxdRyWy1YCdbtJPDnnbmHjYFMwHjcco6ceby21si5hXNJf7p8qWYgfEHGqnGoAFsk1rVw",
  "key40": "26UEkXbUud7PQAZG4GqtS1dqiQrnbNNoii7S9tSE376GeNwhLrRRzMv9U1UhafdvXwtgp1VK2DYcAWPCEpUGS3cB",
  "key41": "4m4YeVEDeT9AodvqoHu1g4o4RfzJj7gzfmip9h6fTPJuU2jaAynvYHWXS6NQYeavyGsdZc1GftqodwrXceTqVg9g",
  "key42": "5LN41Amx2jEQy8uKu6NxJsKkm9Emc9wqAq7AxcwGVHw1f229i8toDx2aXm9yKYQwzwByY8osf6PcYBzkTXLsjM4C",
  "key43": "2hwbn7B3S9oUfR7wHp1ADtgz1NR7h8eTjCWbQco7sZyrxeCMqj7hK6wvMyZP4P8pA6CQGRyVfTBZH8RqrnkfP3z9",
  "key44": "3FgsppvTSkTHwNitsK2DV26XAsgzZuGWAzbGLBjH8V8kACiB8sWk7DJiLoDhxCo3yPXwNpSeWoZC4sbcreicd1y3",
  "key45": "2kpQ99JdGNBiVaKS4mhrZcRcd775k3q1a2PrJmLafqTzFqNpwLSKPS9cDP1R3sKeVWVFQbwub5Fk6HCEAtAmRP4v",
  "key46": "51yUD9z7ZGGF3p4aYJzU3r2sf4zHL9iPtYdWdV245hqKm8BcAktYMpuGvxJwztwjGv5tUWiJBV9ogeaC98nDXxFk"
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
