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
    "5F28YAfkQdBf4Le6vh4Giv4JyPTsNBtM3QbFHcVheE3htDYXcz7AkjKSTExyjAdYKSJ8d85H3A78qUJZ2T2412eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63gfQCSffjnuqm7SVz5XdpARfsLqBrt8LR1WSfWF2GZPcjN99g7PqAJSK1TpAzAvMYfDcENtqLSDBDhLdSpJHZYn",
  "key1": "5JUf1mFU1TgKEB8YbBTA8FKKE8pDreBKyXwqC6CVNXfgQxhsViDZM4agJDRyXH9NV18LE6nzQABt58z1khCxnYVj",
  "key2": "5pRf1bee7TtsGKGXTQyaXF3SUJF3SpaLSPBnMMp6PuGUp8jaDJxXnX3M8oM4TQX2aZu7G9qeFx2M5dm9VbXagNEk",
  "key3": "66qq54YiPN73veqPqyocJZJ9mhosLfBo7GRMg6yQ5SYbzSZitxK2AhUAboeHsjy7CRnCZm96h6K1pHxWR2pZ6vx6",
  "key4": "sFhz72G1XYcXqrQPD7eUgsFG6qmZqwH1yuoS88SHcjCGBKfPL53a8VbutFpeaPoyfjbFvJTL44SP2fwikPYrYKK",
  "key5": "mLE16v25Ww8n7txC9bLHPHufR6XET5nPRuDaWtUDouwT6fH5U61Zasqsqepma7RFW6NmLsHRhCuN2qCRS4WbqWi",
  "key6": "jVV86PFkf7MxVkh9H5T8zGH513kfoCgcVaWXhM8EBfv1VSKy4o1XjUKRvaLkLkwx2cziWKmtSh5pVuYq1jsk9oq",
  "key7": "26x66bj1ShdnVvRMtputudHQmkivAwAxPBJN4HykLjJqqVRdtL8EnE4USCU9yLhiAKz7TFesvcjNoWHywSaHMvDw",
  "key8": "76JvkNnKX1iPhGYryf3YUesLa2KNbNDpXAopTFFBbpcVniMW2hvQknnMxa26wdRXJZKJeSX8jXUUgiZpxnvPgaw",
  "key9": "3BDVzCSpA62ZNTkYAszhjMMrBNKF2wNw5eFHhpJcqcga7FCSdCQJEDg9RtQEWTQzvndbK2ev19iyo8CPCp4TtLKW",
  "key10": "3c8zNLT7NfC3hjHX9YgkoSyoihkZx8fVJpyJMcoGAGzrdKJUzXMMUBxrE6xUFos1rDeKq86StwqrJm76Qqe9VxkA",
  "key11": "4tCeSb2Dy4n46amxxDX3BWYxGbnAZXdCya9Pw8WkkDCawvj77zaB5xR3nKXpLva2cgwXmPxsjt8tNWTiQSGtc8oL",
  "key12": "4ksFqprt4qQTHKL8eodyMc9VTk6vi2VSp737Ehp7pbfMWp1Moajmhyv6pKUFoWXE1sxUgywvrqSwZkGiz8obK8xZ",
  "key13": "2WNQp8u7uYuUfYE9bAehHSk6F6cbtURqvZ7jxzLdSEBRXUhCVRNknJ8VY8GHrqTuoEaTWLdgupc6TsG4jPD2Vz9d",
  "key14": "4utP5eRaMjVyDJcMZW48BS3sat3VkWYqwSxkv5RwRfwHARS61oRi7RkkzLpjPaqh98aa58tkgNgEeGmdVzqHYci2",
  "key15": "4sfBJVhvjikoVfCRjApEBuZcVxxaWZ2a33uGzumU3bfETm7f2KbqgeHARhpsfo4zLpiFzZtaqKRnXjogUCWxXWU3",
  "key16": "tkRDJTQZgFaFBzBsp97ug1Qm473jrWyefYrfDerEDewRVvF3Qq7EQp8EH8uff7WFpRsopQFMWohppTNEN5Y1e5o",
  "key17": "47TC4ne91nobKB4kp6TTTWuX2HWnKRAxAHSMo61kR5AR8JfjnbtjQGnNYYn3yTbrFpBptW9wK1wS9eGtiDcpeM5p",
  "key18": "5jTHLF6FA39FN5DUKnEiMCT3LrC9ohpGxTqpmDd9pWHLh4cisg4CnD78mQCdR71ZbdN4nkPCsydUNhbidwiBx7bC",
  "key19": "2yoZx2fXHs49sNoLH4UFvZqVHQ2cSZPTHKKkZByEXDnFKzakkDCYRaYDpVFQsYZo3LSkXYvqxvP7w4YW6ukqyPev",
  "key20": "yqTUdHRbCMqyEwwucJLz2Cw41EYmWkXXH1QTxymwuUfDiB3fmsZg3rw5WEWxGiA1qSdhXcd81gpdX7f4Uwg6YwZ",
  "key21": "T6QQ1JZ3EgU5ccj3jwYi6LjdfGkGd2iS1GVSNGHvofDdTvsr21C1ddE5gQrbHT4PosEBLmsNfiKQQuzmHmGHkrW",
  "key22": "5NpjE9mMYvFz6AETWbDFmg2E2bhQxqNY5vLyqUygQbuaHs1fRgowKcsMo8BFECTrcsKGcwWypv1T1Tu6goqZehaS",
  "key23": "4QuGyoCAesK2WKU5BW7ucNkS8fHuBvN7pZ5EC4xuGwy6TP7TXH4HPM7QKKEXedqZi1du85AVDvp6TCaHFyi59cmp",
  "key24": "EcVrywKdVJUfkkaBZ8e3AgUHNbKy1JduBcWQ6nZAhkvGpADXyKigrcurZzFmpCWJ5r6uVRKyAyc9YRV2MVTYSqv",
  "key25": "3ZZiFqv8ADxaSfPFUfHYFT9AMxnayjiTw1HEFBB5uw8awGyb9jNtXtzW7up4d9VdyCGWrFxqgvWfcnu6u9kJCyzt",
  "key26": "31P7Uu5ja3Gp1DCW9d7yV91G4KoaQxP12e9uL6UqRiZ5newivowg5djda8Q5wo4kQpLNNpLhW6dYKkHRoBURufTi",
  "key27": "2KDuGPS2SB6yWJ5KFdQrJJSpMZqyNH1ea85TN743unBR6CkvkVJcCJbvDKo1rMxPNwrEY417vVLEQombGaUoH7mq",
  "key28": "1ADTTsqkhpaZXjsrNwoZFjLMmsYrj1UzmydbjSh8UhD5j7sK7cJEEREcgvMKBvysH25vRH1aZMwu7Qg6airxysq",
  "key29": "61KZ999j2JkZYpTrQXDu8aL87ebnP2mwuxAcXEiB5VTAyJgNWMJZ4cJwgzeWae2h5HVNBsKQMAZECqjukESH6ZaX",
  "key30": "yYbK4V1TkJBeCYwDXXXxbL6kiNe3JAKHkkK6BUd83zukqr8Qmma9jf2vQRKpaoY1M6f17VZtSP3CADQVvXfNnBD",
  "key31": "2Ne6SwnZiymvV8Jw8o1uNEapELupPxdz8FNqqESm3bNiQGM74h133UMYkRZkh8RMZfT8m6AVVYYCjRnYi33SMGeE",
  "key32": "4qHHuWCA718AJThBrKXHvuPvmJt1qh4B9iSQPburh9emBi6EQGiJ8XEvm9n8hMFG2RbnA5sh6bGjZQyJdb12x8YH",
  "key33": "3S2aqEfECXvaQ5DVXkyfDpKeHLKdzKgYtPwuNQzVU9RDjc1QiV9x3NwzkL8emkhhYsg7ZfhPRUqf93He9BKY1DrE",
  "key34": "23Zsq2MzJMTe6Huv6SzYmBjat9ayZ4GZp2qLiuJmSrPg44kpxr5QU84JR6ehHGJvq1Rq2bgcgeXFWmN7wooHmBQe",
  "key35": "3jMF4PexQjxh5bxyDHRxgoVWMnqZ5eonFREvfLKnLZ22TEYMCoLzj6Cwpfh7MU3RDWoJX8JNAXuGj6xpXxpE6eZE"
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
