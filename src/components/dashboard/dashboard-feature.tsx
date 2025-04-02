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
    "M3JAaicrutXgDusEbymHEY3A1TJxfqoThPveSxfY1adZMSXdtuevyvCnccvzVY2ADSvHogSBKFTEBJrP2RGors9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pwBRFktAzh2rzhut3DeR1HyvedQvsUduCtRVTYHRP7JKTvSkyzKpJkKHyWwx3RPGxkSNgJ9NK1UWSThYYxuVBX8",
  "key1": "4nDxYsjHGwEjkuJpg7iFfLR4vEmueTzhrbRfZwxZZbvjeLWYwHtJHecs5CDAWGi97qBP1dEUZJGy47yfLtpjR9mw",
  "key2": "3mB5WnwPrQ9s8jmRcE3JHm4n77Q7ka47PUCBsdmY5DYfjvXDkfvUtYMsroBeMjcWaoiEJ8MjrX6ttB7VLXMZmnuo",
  "key3": "4NLaL7J7hKCqYDgiHZ68BPSzHS4WCM7kc7ASYzdPnQReH46UfF2MTyVGUzP53qpToz3xcdRiFUpcCKDx21KRNCJu",
  "key4": "4x9LJJkKDzAauDedKySbza2Qu4y2KC6WRWZfCAWxChiSLi6r8f8ifm1sqsDMQgJL95vjbQni22WVkKBZWRENvmNB",
  "key5": "2L21kJSk2eLEayXgFnoATKwqWEgs54GH8yNnAhN3Azk6NPkdTLA5LeXehbFfpk4EiofbhKRKR7w7J9AjjZFtimFP",
  "key6": "4LZ9jmauLYyA8Bh683fpEiPg9zWDBhDLEgwFo3RDqi5uB1nq6GmmPoUdxS6Y3mjKKmoeBFU4bvg9SBpYAmWFJj2U",
  "key7": "Y6dwEpJYE74Mk7pV8pJMeueiFSq7BNKVaaBfyJfHFo31W4guvEEHTuJF1UM8tkRf5VsvYZEa4Au6n5GyWPoT7MH",
  "key8": "QUGMx9YPVjuMosMhKkLcQQhUEq5Sa2ANnJuMqyfi7g5bQ8fNG7MZCRYPEYMXE1t7JCaCYrMmCwGLhtutCs5s4de",
  "key9": "3wqe8SvoiiJcL5p74wj8VCGe3Q8kE6o7YtiVebMxLi1FqhyM913KxbEa9D9qDukoPAmMH5aqushSua41xw7pLM6o",
  "key10": "4VVg4anpf4R8CAkmAkGFbcrAU3VHkVJXsUTExotPPFvBTRRZDncUBLFkp6M66FSxwEvxbk7Fmpv7u2PGin4a2J5k",
  "key11": "2ktVjrGXLHPurhBxmhwjn53ntQFbdkXEoaA2YYmLGUWpSPTKo8u1kbfaxbjw5o2no1DDQCcnYzfmahp598c74TPo",
  "key12": "55ACecbqX7JvHPbwz9c31GwLQmbCgz9SjJdWxpefQAmSDRFZexYDy2KybuAKNvke1qdc5aH4j8AsoDkfvRgkNSjZ",
  "key13": "59RgRntKJ1YijePUL9Y52juWYE2sHxWsua6Mz7RVNqRH2GEnoq4eBqFSU5Qgu7KUSZqjFpaMZzcVxcfotN8LzCcM",
  "key14": "4g3PimNAhYEajognKt9Mx8Afg7jMwHoNekgxCmkZfeTdbZMV86pBFvhe37zkW7MNDjbG8GxaxUW5iZLX9q9AAVsA",
  "key15": "3kLHxDG1vXRzJrnapE4mQi8mTAET2qAwr4xAcrpBnMfMXcceYNXQJZcyhcUr3inm8TSt9Jt3dfgfczwKeqEru1vV",
  "key16": "2CwrLV1AsGeGwhCq5Z9U7w45YPz8uh36iXxsESZWg9ZA2dH3hJNjqWdtE1kEq66wExsq17xqrFHqTNBMHbr5ufBF",
  "key17": "5fRUh4WYnmBuSvXmSoQbdQ8UtFdoqPL7fBYqgQnMrej9bv8NZJEsBTYi3ECAYt1nSPoLjjwPC1ivZZzdCvRKpVyE",
  "key18": "5QoPGSmsvnp3zfzJJAXp1ZCePQtsE7Rsbs35x7EQVzL5H3bhnXRPQtCMNvDL78neRsPpfSvTeHKc2TX55ubnMrn4",
  "key19": "4obiRD3tDVQwPPKd34d4ex2HAnBevdqJtvKRk643aJynVyC4wNKDfTpizNW647A1M28NFHUjiPApxnmwTDG8eUTv",
  "key20": "dLwPtjxfp3w58c7csmXP2tQFDVKtpAah1aYjnnAkM9rVcW5m5csBJT2QMrbETgGhQ1qCTTqJW9xUY2qZcDV8pvk",
  "key21": "2qn889oCJVsw9k4GzZW23Q6piAAfjb6XE5cTgjcnraWif8SdKFbv8T2dPBeRs6f9jYpaYz1RuU3ShAKTR8i8dta2",
  "key22": "4X8wYkuAh1QBaBTTDueGztqwt5JGLeLb8ivUryjCbU7T5UkF4XjDGP87pw7Vq9javSNpmHrx3QNRKCMhVnoEiqV3",
  "key23": "39LxjmF8qfD2t1CgPyNNkYkVU3eGhMKhV1S8R7imUbUA5y69TWSPRpkDVX1mMzvRxrmewvxXkbjBC9HkLf1YtWA",
  "key24": "3fdx7riVPsBDj3cN3tAczsxMzxvReZedLBwNwStgkSEwCDtASzeyCBtwUS4g9ieT8Kz2iTyjVFDm4FCNwQ2xEcuC",
  "key25": "2Caa4ZpWjMkcufsZGau3U6SXsjpEKrKvgS2YVusYmVVHfadCFAThuThceuJg1wHzBJoBeGTPyKN6YyEsLrCaJbxG",
  "key26": "2Lm1sFRHEyGpDHHPwLdBEfTavc3imNgtL2hshfSQ12g1PERBHzgptffgJuN7tM2zkB7WPaXNjDhJVBCY6Ng3v1SV",
  "key27": "5Ci2QZwcYtHnHNkS8V9xJhDKrPtsWgG9xtijRsx6d5inRcAGGr5SYYGWiVzVAwkupHFQLMi6fEKPyJWJfWgge8Wy",
  "key28": "5vgm8FcbCXZ6aMRpuSUGnj4RzY2zmTxKZ9TeEo6ue8QiHvDvVXm5CDt3PetKtAw9KGvHrPAXm5VECmZuX6sG8hmB",
  "key29": "3FAFwGqnA89u4k3orGV7CS3L54mTK7pUvX42FgJ7UUF3w5JKTZWLFjJkFJntmazb9HUHLwonJo7ice7uhfj5SbG6",
  "key30": "2SkbtxP5y3DW3mz5Bzz4WLsX6zpqSJQHmL8ZTFRN7CV3v1t1hQRtVSsmg3PLZUEUSpeBsS24Jyb7gUAE3rg1Xqay"
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
