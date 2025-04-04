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
    "uxwWbt8tXN5fvBHYMe2ouszPeGNmG6xMr1fUg86PNS9gdB9iWJTVqaw7U6v94rCRG8uF5p9mYJFyqcmt5ddHXeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVNRFinowDXZQuBJnAsh5mUomWYp5dCo11QhS7qMnvZtPPqtSH4m32VaLA6mnPTtDbayG8iwKTDfLKxN2d51uu4",
  "key1": "2rB5jRSf26n8bhXPfaZttsevkk8AqYP1L1kJXFjTB3wtgRoQbo3svScc9HrrdonE4HCSZLmr7yuTnqh3d3bM2ick",
  "key2": "21odTnqdarxj8G5gKme8vJ5riGDGxafvBD93xzS45xyE6fNZaRsF3Sny3wCuGjMsiLczoDnuDsfhic94X1ZxKwpH",
  "key3": "5rqrJcaAP5bBLswjRFv38wTe2NfPUtbNZAsF4qtLTjy8uWDKU3egsXmKYZL8NCoQ8fb4QFyfGEYoiW7cZ9LNgfWS",
  "key4": "4yR1zBtb3EX2wizTwxvY3AR1jnoZhi3JJBxguSsgKFbLZ5Qs61EXGpMDc959Fdbao9p8mXGUB1CSzuzFfknRSSmK",
  "key5": "5ZQo61RLxTWmPKgP8bkfcT8GH6mwhLcuXkrw4RLYpGNYNG2SNnLTkzwiSrkHBgTZjqsmDaztXd1GstP9e6kgrFEA",
  "key6": "5c6RrTypcDySnKWZR8w4Q2iv49SHuueWH5YSyvHCzZqu9Uk9kHvuNmUzuSw1WdousFppUZuLU5RJjibAeAhQsZ8d",
  "key7": "64VrTDLVnv3F5LVARzwa1yJUm7KUwzR1tiXzD8tixPviZjZQuZtfBQBmGaqUY1MAbTpkUQdFiua27kMvgbZXSnno",
  "key8": "G3Jhkim46ZPArxQHNznXf42sVEEDNne5iopmrbthvCcJXUyGNy3b6yxz98Ujazv7YDVZruNDTort3M7tfZwjfjd",
  "key9": "53BHJRVCGbuEnrPfHSUP1Kt7Q4iN7XBnaEQiibJXw4hXFEgqCuH9U4MfjDUtmCgT4r4MBiUNfw1EW6YT2kh7djaA",
  "key10": "3rJ26baNXea4nmjtgbzbJicZUKkHxwUuWKpi5fH5TKRgvKviFmBYNwTaSMCcGczHeYTkNoXDMiQETzU9JquYhUHA",
  "key11": "Mo7USpMxuUPd9We27ppfCbdnwS5so1UTrT32tGk5CnXUJyPT71jCtnwi7nwkGSUG4gkxVBkN4dhHMu9AjfQpav9",
  "key12": "FGQyVQvxgijpn8ntvMUriT4HtVM4HYWXPfKn79qXmuhhviCNUNXcexEsVX7zWYSZSg4vqJtJwSDNdG289uACL8k",
  "key13": "4xQLUCUwutAtQ1BdLHZ74BynmKD3AUFQX68RznW1XpHadrcKa5vpTPMNLYQJbbzcEqn2G1Fx7FCK4wcKt73QM8x4",
  "key14": "5WzhYdEeJdHjA4BsFBMjagYVNXVPi2ffLb11tBo9EgZehp5Jj8uzNuH33yKx5Y6kwiN8DCMKGivbTMbxok7q31tN",
  "key15": "5T5SMUPQA1gaGDkjWfrL6J6meSsU4BqDwJMZbUJvkjLkxhprcVuYUQy4PF18fUqYgBPN5Zh6RRdk7Kgs4gjfF8An",
  "key16": "3oEGGckY8ptrdP72hKCwn6NFTzropdyCjrxiGWJ3NVA7pPLW8pHc4e5B7jGwxoiwn2yoSXFAWYR6yME6bu15aPU2",
  "key17": "2nz7jdKJQyxM66xZdQydh5LYYGk1NtgT2BPBcFern6kD1SseAK1cZNnqkebFsCE4ArTbZuN7BFHhYMXCuwfKLNnz",
  "key18": "5c3Wt5uJk3JGU2fCMBez7UZRTbbybacukGQbfzcWGNBHzXghqDvPbKczQhASgvvn9LvBi4aae1rjuSCUjq361JMt",
  "key19": "2FnXVxQ5VmE9uA78Sw8dnjLCJwx9esPVcGAnMwnRjn2VMEjo28Zbb1JhbZFHKbhcRaQn4DvbgqXXvz3XkxJ1RcAP",
  "key20": "43C8kkauanuPWNeF3ebPsj7XuVa4yYTfhSWpq36qZgFB6vDKqtgKEZwBtX4FRwmJyUEfB6NF1uJ8cGXX8pyV3iqB",
  "key21": "2j4j8Chc4jJq7Ud9dkmNTBv4EMoJuuZfDAX5oRKZWSsJYVLAwkzpGfzXjpENZmkFBQ8QKtRAsBqud6XnV5KHYtyt",
  "key22": "4MjqW7xXbi4uzebRhBhsDftDdon8rBsqrEHwX81ZtvuEyXisZ61jG7MtEZtYYMbkxjcYG2EYBpLPAzPDuGBUyKhU",
  "key23": "5ufEAeuYK3kpq1fFWiHaMc3pW7Jzrbuui7XHeJemmjJmDhvwgQdAFpPZChZuvfhfabRB1YKp1xk8bHZxm7u513MC",
  "key24": "3EcZab61eGDAjUAUWFUwQqT5yyXXHAC4CPWfF8HaNKdLg9veQb87Dy1TDx7XfFStcNKjmnKGM4oWBkk2TLW4Nc9f",
  "key25": "5buiXGREy6MfaA9UgTAysTkALA5xgBRVvCYLFXnW5JC5FaXeGFktwf2CgTaH431vsauZGN1wbZxR3Gu6gMMCi2Mo",
  "key26": "51raDyD3Eerr9PHYZV2bSqWG7WctqW2e17c6HyRSXJ8r7MZ6wwunbwqctjVJvoJLBynh1bkX9xU38A2meDJC8UdK",
  "key27": "55K2Zh6a4SVrGY5TU89x2LEiDCBzthaGTa85rLffsU4uiRiYqCDkdzKxH4RFtGcdvcfAZXDqArfAHDUtSrZsi5gv",
  "key28": "JBW5swhbwFvqe8SMiRPKZSgvhHmsPrAEVNDRvRJ5Q3S8gFAKYUSNqYUVSzmLnvMmutnHyXGYn1Qt4VeVsUUF47Q",
  "key29": "3LrMeWjVAKGU5LBPhGehdUnyMS1Ug6padkjsUHpuqbkcyQf2AiEvboUtnJ2SgaFSL1iHCNL4qgJbNdTYosEAZv7E",
  "key30": "RkuM2rh6DNkDuz28DWDFJGsv1EfmV1ESuS2r8nuseUZYubxZwpUD3tEKzUmEcHudwgjxPZG9pf3CkUwWDym7ycw",
  "key31": "2hUpu2xePPX334chivq4DGaKaXhkgrx76CcHncMnY7uGjdAAcMiRu8cHXtPonhUxCVAhZNWzMd2pTzSnrwRTve16",
  "key32": "2UxNJUBqEKQ15wYRfMyhjf4zKhDmU3C4Wf2WD3M5oQ6mJ7QwQg6pgAwHcZ9aYR4sXMiPMe91CHEooMfB75xn6D8z",
  "key33": "4Hu38MPgBtdkCV5pScSJDSq2zyj3Ri8Q7szzBFcmL5QwmP7S549QSuxAszsej9GU8tV6BeiwgXBZETNqSVpAbv2c",
  "key34": "5A73sHZRG2e7KFFnJx7DtmDcKjT4mJRw3Vt3pEGPj7Zpg5vamsk9mGHeY7tP2C9Sa6WEL31UGD8ryRhVnuEhjZ3H",
  "key35": "2fjiWLZz3KbrpcsGbmkovhaagMchiWy53K6eY3fskmcGt6nwciaaT13NRiSvGKvD3NijGr5y7jNyVEmJWofLeQXQ",
  "key36": "29ondYK4MQ2zTrnUBRkPQBT7epMp5KGvUFJkP1vUrHUcyXLtKLr89WHgHEBN5Q4wDqHJVPWs8bVhJnMq8etEMruJ",
  "key37": "66YR8aHm1ug2nUJLrMeeispvc5Nopmxb418rtycRf11reezLe6kJhgmjqQUpX8q4TYgdFSy4G4SYm8SttLrWLLWS",
  "key38": "2H6LtqNSKBXJA2aV9NtpXUCchWX1Yoq986qoGqpC82NBgZmZicLJR4i1N7zbKG9uhGWgZSNUYrP3nAE5hwPSZxYb",
  "key39": "MessiuUisZo3MV75zLy23AMYhv23p2FtRxgWvDTe6CCWHVVPrUs52uh1VNH5Zks7Doq2Q6iZCgh47u6kFzBbmzp"
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
