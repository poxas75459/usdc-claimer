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
    "4ozCJWuxazuDuKpanLtLCc4mXNbetm5jbtqM6H8jcJP3KWFadiC45fANNuchAyXb2ADqDDW3NxSniYx8eovicPRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A8eE6j4Qy6a28hmX5BeE8dKN1EWYasp6yiPYk4ENmo1rYySMWKXnxfF84eb1qTQUB8zsZXpG2bFC3FKwBUhVcZ8",
  "key1": "3VJAZmbyoBzfwkbXN6jauUeaBSgpmtsB8C6MSeajEAKhMbyVPeMc3tGPgu7bdSSGuT9b6dMuCfrhVHKzNovLZosn",
  "key2": "4rZNdtp76TSPZEe9cSE5oxxA7jdBszY2hCAQNHfxrWEbuuvDXkaE5LRRh7kCuqMFVMaYPthCSCH31u8ij3ndBvey",
  "key3": "5bViR27a6NqLZL2thNecH4hyzKsUFJtbs25YRFxUa8n5hdyXZXVypfA9dhvYLsxkmCoZ91pbgZnA3mpXbPjWUncn",
  "key4": "2VkcE9AvfzEmUS5CoeuEhdypUeVgjVR82MXYSq2D6KcrsqCd5eWkuk7yBfCcJEkP7b7TQmwKfRsXxyKs6ASshcdU",
  "key5": "3QooTjMmUvVyD3jRhaWwQ4Esgm2xzN38hXuEN69bAz3f2XC8QY9uJbZiwtxJLikakEnMwxYELUhzDufjQVPKSoaa",
  "key6": "34AsS29GigcAnaQGBnCKrvyqhqpK6pABrxcRp8TNLZ13hs9KqBX9pQenFY76fwK1kYL2DydxcpCrrVyh77Nwbi4U",
  "key7": "2LPQMoeuRZDm4xTHJPvKzk1CZBT8nedDsdYimYFpUL4Qyg5WU6grr5bWV5ciL8fR3EYwahcfifQGBRbKBGthShQw",
  "key8": "5m6T6fZheURmu7bAk3M7nmJrZPX1p6hFQpNFZa36fSnowJYTDuTNzgMRqq3wVgdJ2fQo2HfbctnyuYoXXBF2gMNX",
  "key9": "KrNY3jr5qkW5ShU5nbtDTimLx3Ejbo4D8cX36yDTk6FLejm3LnYixamXCRuutcQC87EjMFnLDJwFmUFDRYtzZRp",
  "key10": "3JWvP12ELVuapsK1RPTpRcgGcu6yLTEUXkaY8QdCH37dxBeM3vzRYGJRpeY2Nk2KNzk3W1fRL4NoV4e7YkRHToTe",
  "key11": "2Sm4VVrCHkQmWYGUyY8h1f2jgziF3SnGLHtEGkYBcjrRetwV2e6bsXkWBssVyc4tV4P4mxZ7cAUJkddpvoUyBnjm",
  "key12": "3zoWV8TQgyrqy5Vvs7yARhpzXBPLompQ9YXdCRLYfixqssoxit64eKcH7ymN44vqtC89nrWuNdA3eaQmpD3HVAQi",
  "key13": "5goHpwES8LGdrDm5cATxnSNsQ3Y8RMBUFuDR4u443chyYK5ZhwFniRgFc1cz12TdTnY8Tnn3CMUShtpy1m39JCch",
  "key14": "48hP2q8HKYhdv7aYcidYEkFLjBExbZHDMcYur3ztFc265BFKcQtVBQmpe2BjRLa8dU5K6AiFAyX7KxH1sFUU62qZ",
  "key15": "2DVUfH9nN9QKzB8Nm4EVgXnRBJ4p4uMgkbFMJGN2LMX8wLNgXDYgQco4GuHbDrHg5GdDe1mhHU3uUyzV11WUEfyi",
  "key16": "3QRTCom6YajRvU1AUvGQbfy2dT6sGvQcX2q5PcDXUCuPZJeR5XJEuV7f9PhuU1q5iR3sp1eNFsYvmhAR8SmrTkcq",
  "key17": "4HDpM4svvNH947u8VE4schgaWwAsDG444q66NnSKksMaEUQM2YnzvUk3SYtnPZyijU4qDunz4b4N89FZ7ya4B1NY",
  "key18": "3pDZKSYMzfqAH58ywkCYKAo8HJSzPa2DUPNYC3AfR3p13QVvpNShBuc74PpUt1Lk22VCVXKoRcyXEzMsYPKnC39r",
  "key19": "24QgkmgHwepXbukv9ViPv447ZxVYYXisGnS2aid8G9dZANZ44fqggc7fHEPx2kU7sdFNhMn4Qk3hC4jph5JKyRdQ",
  "key20": "3Vn259kCiMbgFTzdB4QNDqnfaBMSqokbQFc7AKVA8fr7wzdeJ81zpETe3hsitgTcrugDFo9QX24GejyRPCznVDTb",
  "key21": "2vSaiw14ZkPhqKLLn7BBZBwm5mCSs8C1zhvZqjaFi3prEytzDkxKR2QB4a9L3TJaNNKsgjV73h4zuotefBA9SZoD",
  "key22": "53kTKDvVv4Y7tHfLT6Ab4ri4MdYmJMG7jyzco1QCSFmDdLSFvSrSpJLTEEWB6camU6bjHm82CBH346gDKiprFQVu",
  "key23": "4ysGndKuPZjm8XSjGMLvQNjCqjwybDKZBAeNajS6cqdx9jsuMdE87wdzoBKbBJLZo1zRqAtGwvnciMjTDhWU38u2",
  "key24": "5Sg5UwwSmTNCox5maiWpCZrVtYGTrqmpnwdbTMsTR8psk1BRY6LDqvDXQn2ueMg6jMJ2fsp6u3j5Zgmwna9wNtn1",
  "key25": "5sf8Rvk2eRYN3fTPktzsApBEPgb6pHBWjmpAts3jKBPquE4LLHg32vW61ri1SwrJmD23A8RoePLtkBnE3zDnEsdr",
  "key26": "2h5Gp9qMzTiwqsc2q5UFn8iBrvEEjjWQY6ZiN984YJczacmZFRi7dQ3jVKHhfK7GcfbfnxDsv7FFtxNf43K6woay",
  "key27": "4tTZzVfqioFQ8kPxt6GHbpC62Th33m9H6qM6m2QUB3FuQGV8Q8X1iMLsxrePc2s5KgC7N4FCfZX4QWtKtFrMnCrG",
  "key28": "36q5UrqzsfpyaAwEkdjihYHAAPae4A86Ky8MJPeEvczA6ZCvKgcrJmYqwTAwYN4pyLmcst5AqForwLMa3J87VXkC",
  "key29": "rgQHKGv8bYdshuSoBYbkg9WwgGET8ANht57XDXSuPxqjyfSeKq37WKBZUxcPdD4RYM737Bbbsiz2nAAFkRu8wYL",
  "key30": "2zrvTMSYJ7K5HLEdvuv7i3yzAvKs9qWAPn3xDsryCD5S7fkhGc7gdF3FsBQF2zUuGbZPuv1VSehkRnDziY1DUwj5"
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
