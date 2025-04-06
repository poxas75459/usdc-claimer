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
    "Pemkcw4SLf9MJU15ZyjsquRQgxnjwS2VjMyS81NYKQd3PbqssnhH71Fnmer8DmxnFMAhM6dMwSU4XXw6j8V3q6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXW41rJiamHFKSYPZCqGTjdyxCV261z6NuNQBoLnsR13nTnqTFC572SjVoLmWw9TVF6DMBvP9MRGbpNrCfiQWoN",
  "key1": "98KPZuQh6F7zZyARP4T9qXZ56FQuJqykePmfjbYNNmtuR2e7BnrVSKscNdNSLcoZDfTiaGT7FVxY8TPqGWbDbWV",
  "key2": "549MqECqCsc7tg8MyYFshdzPSS6HyxGzVBfpnztcmFtsttPG1s1UG23pfiCmdpbwXBuAnGkcaHocY6kkgeTEC8dd",
  "key3": "45eX84xHxLpEyNXehXByMFiBvPvWhYvUvNTiCCXiu6uDFuYPoiSTxQqq486W7VLc2NqeT4pVBxLgyoARcaVxvsD8",
  "key4": "58qtP2dhtXDX6GhPbwSFPmkcee4c8T5UF9Q4wdvqTayYn6iYEv8NocJfCrazGzzZ9EY3cp3BE4TDJvpbFJ31yPeh",
  "key5": "3f1NB7p7rNKRpW7Gvk5FouW1jqy3w12kRxLBrNSyneTVimESY49ewSgJjFyAJgbvJmJBkUKXaFsCvrNZqutuhD9o",
  "key6": "3TK3egPEDj8TuKjH986r9UfB3NWMxYwBwpf8W22Ncban3Zj9FAevtFx48Sz9ziWWAMU2b4Q4jHV2FyZPJMnSdf4t",
  "key7": "5ZjRHtUQieC3YipqoydykFvnkWyj2mEEZS9e7t84TfRX8UEaVUPG4TjsSjexjVVReV9CHf3pUhK85opf4Uo9P5L5",
  "key8": "5zWz76wp2sQuXfYbv4htzkrRcWjLcKuATzMrkEoiHBzkh697zKxyTSKfrtPQpjappcXQdmotPEnbCV7Er8BDrpYp",
  "key9": "4vFymoiRHohPBnvdm6UrwbUiuYhh63wCWrmH9n2y1AaApEgTu5xZyoRCPWC4shF6CcCWB4WSuvVWYXd24cj7PRC3",
  "key10": "5JkjF7LAVN9gKZxiJP6sDnQKyMuQpHe2RwHNRfmMgpPSgXe8vKa5diQEkyMZjDTf2h4pVo3ih8YXwYzmYmaXv9wz",
  "key11": "64CxRfh2Y9HRhDaYJMfSQgBPX4t9JwHSr8t1AwxeWYYZdphWzcV9GLLbK3dViFr7RxbT6ogWyQSUTLkPmusG1vVQ",
  "key12": "2pB6gQA2JCzKL1GnvwdvfgVHJ73BZxJBf6y1Lt8wvwFM6W8yVgrGPCgZbC3o7D8vRMPaUWZGVWUwNSG7g9kUDiJP",
  "key13": "2G6UVvfv5oYJmBXCAiSY4pZ8Qd5cjYsKDnzoYgyJbgD6H2QBaNDC9w6RKmHBtGiH98vGpXXiKmcs4HRwNY7B96fp",
  "key14": "4H6Hj1EQH1gnuANxsaapgeyPYRQrQNJafy8iKcYTsFmsLFQBPP8hYRevWn2wsaAkJgJCTqgf35Y4sY4rjE6C258Q",
  "key15": "5N1hTdakAoJGpqNykBfJgh9ibK5f29xKiXGP6TB5FjoPcjagi6U3p1Emn6ii5UGvFX2io8FrR36L8qwFdRWEgevh",
  "key16": "67J86vog46FMaBcfnGuxkyEcaZkNvbfkuFxmGcWLoHKykQe5yRQexThWmkUiqqYVbmYzStuhNjpGcJf8v1aSQugi",
  "key17": "65UHDSVdJkQnRDzPn6GMMx9vpLJTrPwo4fQ6B6wx7jaxGZzBuqgGgovx8QYRRKi72kzm4LfQaogDPtU9QGFgxLgY",
  "key18": "3TXDbXnMTi57gmGCapFDGfgmJh82RNfyB9uEB6xe8siGX6riyYdDa74kvSQKmmJHpHvFuPS584Gjzhvvg7bQXHY1",
  "key19": "4iEV39mbkw1jbLxTEXcuXDp5a5mYaXZkCdq4PgYGFTcsJkhCsUeAPaGv5gtRnZeQV6imA8jPiNJcuzinrHh7gTiv",
  "key20": "52e78mGKCtMX2DZH7bGcMTGEmNLDsbW5XbH4NPmUBDin6vbZgQssNMapXa3yGvB2SqeBinuVQuxZTzXNF2WtGhfM",
  "key21": "koseE4BjjWVzwX3p65juVvj7aZbJSt1wMfv2okPVBsKJEzyeky1yx2czsYa1ca6MH9cWVWaF16WaxFXHZ3MA5Z7",
  "key22": "iqiYtUxUam9KsAXbuErjmYpkCyJhkt6DnwtcqkTuzwaHaKuoRNs2qH4irfvmQsQ4moP8UT1QvkC1mUoJuvBjeJJ",
  "key23": "32Mj4uVxhMVxKN3BmMiG5smwfbYa5cTCCiyQEnmpoU5w1TsxsX8rishKDa3HxKrJPKK3NesVXDt5QeoRKhQENPMM",
  "key24": "KY8jLTjayUpSTQDT4FRB9D1g4DrKjSnA4CaDLMuQPD2tmeHusRpouxxbJEaLkdgGQKxK5wVKsXwyL375ATtuhqG",
  "key25": "5FSVntbdFB2uQ5Jdj5R2754v1S1XDr1Kwv6zw7AiTSzAim8c3WcohiDGSy7F4KcuJnKE9GPfWS8mGPZnoXneYwe7",
  "key26": "3q421ey9uKjYwmnw92snSCqG9MVeSz9rNVHY8HnrQgYDnsQigZTxLScj2TExteEZiTdqqmwgmHAzuXiegag19nn7",
  "key27": "31Rm6DdHiPhfGJit7SCdk5fcKnNi5h47NYi9VzqdP71C7DvJz1w1yd9wzTHBgHQKAu29jrmci58ePmhCfRevHCeh",
  "key28": "5R5pAjbtZpFtv7hpVYpeAXEWqay31wReAfDnus2GEc3MQCnXWzcvm3G4AG5sxfP6gSCcsUNYqsH9w3u8z3bvdStm",
  "key29": "3BM21TGSLeam8B8hgLrmSLnRKuFMcwJeFRvbgdQPFTm4yx6UgpREDcVB2fd7S6JCgo8YifVSHdh7zZE2jrdVMMqC",
  "key30": "5hVX1rigyzA5s3ZwG8L4478yB6XQn6rMxMP1cfmKyL4bxGuh4yjDe8Mp2UzhKqo9VJYhg4W7p8NkGNi6YceXn1ix",
  "key31": "5rBBNKETzNBNiwUgpwwMVpJFCEKjyFYe1LANQLvY9HFds8KkxPNSbMbNYwEDpZRFVQDcUpJtjycqqD1V4pcmjarp",
  "key32": "34LT8wskoXgccP58ZKciCspdhU5nFo4QNNWM1xvHEhveA5Z6QXt1CKW7zjmdKTga7BMXhUtoDG9TZgLtftcJdTSV",
  "key33": "2bMr3FfWuGC1HzvvGwj5mT29WhbiH4FJoK6hW3CtYgacZr7ZzVrN4tnnxWD5ZjoNVoQSjVTRwqi3oAdM2bHRogfE",
  "key34": "4SkN1b4hyyaacJTxtC1oEr2JUhoLiWzVzSnkS4prVrveYK2mdb3Lc22aH1fyrvrrXRZQinJKdd2WKgaGyjwuaWvW",
  "key35": "3w8VWCDWzZiLTufvURbkWB5SQTyinuqX8sdUYLFWZMubp6u7StSXDzSRA1wcu2Tki5RzgGa4jumvhecXPZ3UiwKZ",
  "key36": "4hMNHuDaowgqaGxT72S4xfLFrz784BEauejeBGKchFKU2FcLysdEK1rrJnqntkrgZWTmcNRRyXutc5BJFFAyLtJL",
  "key37": "MC12NHsShN29J5RoF1cXMWRu5ojmNAx9BPiNsp4yM7g6S4zXHqSMegh5SgQ3w9nWZTzXJo6WBNuWH8oQssTYAu8",
  "key38": "4KxjiJn7ATNkkiEfqUwdexBwfQ1yvdzz7rzEBsGS7yQeM87Eue6GymCXcTH9iqfsXkJpLCG3ouwV7Tq8goCGyrkJ",
  "key39": "4Mzdr3RL6GBuebZg396rJCKepSRn1rhjUh7tk5RE2kBQCXnNCy4NdwE2iaqvszGPiZggUmEc6Qu4fg9jcXAZsoF",
  "key40": "2KSBkqCKAz3s1DRk5b9W5pDcMQZqzrizYQe9hywL7H1qEAFjBVRS3FmindrvrHpEpa3mLZuv66MfEmxvXmgUun2z",
  "key41": "5ysymdXYq8vvLjUjJw81A9v6JW3rQqUHHxgNkBXr6qcpiiDZEcxX5zt3VgcVrDXaKKvW1iapDdm1GRiYpudUcjPX",
  "key42": "2cD5oTmhgAD1NJ91JECff1S7J9u5oMzfTkqKieKcgdFPhHyUydkt8pkvEroXQFATB2TbiSYYnTGR1CorYk1SPuor",
  "key43": "5C3QLrJUh85k77X9DKn72oEQnpZABAzL9dcfmH6TPANKUacPLvqHy8R5TYPMnMkZJTrqhb1v9ieMm9vvL5WLjJNQ",
  "key44": "2XUXCsbPmx65WvWUZq6VYJYPQw9NkfTGuKqJKv7ZUSfJdofyoaZdMPn8mps6NaghhVZHXLPkJCWWCXGt9KjLzAYJ",
  "key45": "2NR44VmbdC35it4uGqjoMwuHk9EEtXJhZjoJVAvBybqSn7TedT6B8cudUQZT31Wi2Qt6UTjetbayfFm2MHjchEW4",
  "key46": "5MwALKRD6C8ayyaZ3XgKK4xWW4byAKqczzKQ2giWx2cj2dqzhyiHbnXi7vLcJWoWdG28AZe2vQWidM1bSGWsiiMY"
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
