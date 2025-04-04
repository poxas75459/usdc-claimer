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
    "2gm4SBWfxz6PZbvJ4kkG3Cc9jhYLRpreiV7r7aKVcB2r3Mgcp2sHovRXso74fuSWMnY2hEGLxoCzyfMuFskHxaju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595SNu4xrgfgqJzQrBjyyi8g2vX9Ekdmp8RCswicFU5C61z3BAoqUxVyBuGqEL53GXTJxsRy9yHokoUWhAi9TbUP",
  "key1": "3tP5JmaehzGHkS9U2WHR9Mxf6pRWULJBcMvComA9Jj2DiiyWe6DqU6KQu8aYycxryxB6urmgFStmhj1nXWabrZWs",
  "key2": "5Vu2Wh3qCdTb4fqA94SsVnqtE1GcJuMjVq5UEQj6JXSkhQWoErJzeyP2ysiTKnEc4rsss7H6AvDrTBw4jjAdmtB1",
  "key3": "THdY9kKQPWtrGYDPmhdQLKwMsT5rpwVaHQ1qSwrBa1rfwjKnu8BywbuLmD2ErADsNfKjR8sPDZQigpVhbtC4vJU",
  "key4": "3dzXE9oJBPMamfViNqsKznfW5t3m3cFQ5epbKc6cu2zrR1MiMKbMtkzhSVUwp6SFE7ZXEWkDgb79ZQFVdqBq38QL",
  "key5": "pArmrk3nS59fqzWhzjieN63acE8YQhbQioqfBfLSFCj6es128FrjgiuY5B3JRCyMHgb6WaGU9QfjD1WX1u8CKek",
  "key6": "58Zs9fr4NHo1JoiKQtWvZt2HBNPKfdJgjXAMh298j7P4dk87pSiVpTcqncuLYxj41iT7rJkM7MYsuF2U6YTDNk86",
  "key7": "vPjvKxBZB5qPMxKgacJmDo7zaFf7kZcsfsT19vcnaq9qawwB3rSRsG3fB95PoavdniB4yBR5EfhVs6GCjRUNwmU",
  "key8": "3qBH7tZX71Nm8DQRGymHDYhox3q1KZHFnFfnSi2rSiC235QtcE6q5MozL44Vbonv3PcXdRgTGejzZnAbMFRhov4P",
  "key9": "5MeDsA3u152NFE7UchC9YmVS6Jn3x6S7CGtFdQGa4atCamvCDCiufzBieC9YAcbdeaKoPeUXELU1n9MwhdJ2CGVo",
  "key10": "5J6Gq4JJfahtFuzxE85MQaJiRZAcqXFeNFp6i2HuwuvDmebQWMcRh38sbwQPCXgX4fXj5cg7sHdSb4zm2AdTBHmm",
  "key11": "2VZHE3XJay8DkHywmdYgX49nFXyrE9WJGSV2H9XxKDjXZWugynPoxjfuxdMhMDyZ3Vfp6s88AJAf1VpbxVLGGozb",
  "key12": "5yLBYRE9A6JkNRapQD23tCH9WRvWwrdCN4X2jzUHHApa6kaZN4tUppjRE3a5iVWsS4oZ3sn2i8YM8JzJy4pLGnox",
  "key13": "2Yfjyz5WJXBUGKreiJCwCdQ338GEzGpQ7chxJSK2WKvc7UtxfQMsKWakuNfoGsUA8n7b9R7RySvGCKdG2qVHNqa7",
  "key14": "4g4kyJW3jwGqshh4xvSioJFR9g6Xcrt2tL1VB2dtjYWwkzVoUShgpJGnEMrDbyGrWbuRd1oyKYwQqGeSYcjgKAJ4",
  "key15": "5ttD8BstVLVUeAr5kDjWWD4qE8eWNK4p4BiHNFGfnNZipzLVX4TvpNGsXiGoKtackW8oBpeV8BvDdgWR4338cLdP",
  "key16": "4pXEBh3HACzSyyeSVV3pSfTurjDaETEP3QFsqsUZN7EedNDYjmnWFRwrQNa3dpJTJsGd6VqeKbB43nGTMPtt29Pb",
  "key17": "4hTCBAfZiXL9TnwDZ5id9Ew9Wr5FYn2ZZpRQ4UP6ZtM9bGVq3B7rbrjWZSix3qNWqLPppDdeFnYo8aWMvgGWDYYX",
  "key18": "48xk3BCF5mJmKZQ9vA6ifkugHpRZP68TNcZwfQwXqosXjSBRvQTRudC1RrQbtZY4TninJ93dKb6vcpAWZa99Kk9L",
  "key19": "fN2Gso2VuUTBrHSJSgd3jeZ3zdun8SrLuaVbBwybFiXHBP211p17DTQ2TCCRXja2zceZxBpCkZwkfV1UAsjL6NK",
  "key20": "4A7VeLpXvPKuetY8ayn55sjKzwgUawzRFjkCeUwtUVstRpLQARDLBHoVWkBMExwzTF1g9ybQBjrbA3C5fZzKnkKz",
  "key21": "2yuzku5jNodrZk2qPMvhN24xdWb5YFUJcVQQS1bQCBoAXFb7gaDus34WEPbQYyTyrRooc5LbofVfpxC9GLkVSBhf",
  "key22": "66y7vWVbk7riKTqU9c81LFh1iatES1oNJvD8LFeXJSbmZ5qyn8dxGGpFGd73c58v2B1gRkAFNZZzGzDghTTQPCu1",
  "key23": "3FPFjUkA8VUj9WsPTfJdhMbRWuiRjrjeKbir1ocoRZs2qGmEiDer7PvTQ9D9BP2NgcEjMXdST3Lpp8ZmuppxR5qy",
  "key24": "4bhbfNk6bdnThvBRf6Y6xX8eCsWa2FCW5HaJwT5URdbsit5QtmXySTP2HRiez7TnJGXL3nent3KZvNVfdEbgCD4e",
  "key25": "2S48nBW9d5XRdxPW4ABZ58rrtob6me2ndrfvLPC1BapQyXDfSVEvNfra9MBpR3Kfq2zveaD3rmbXiNDnMS53iA62",
  "key26": "3UGosxCMizFweuhHHSy447SnKWqb2aRpFnXKbVVJZNz22ZtW41ZUhfjdXsMQ6TE529Kf6RFDj2oQxhn1nU2iR57e",
  "key27": "5AxKWTaZCFL5xKdKGp8rw28MNz4noH9xzzavfa1fh1MFoR3q2WsYQoGXvV7DfwzuQP9uaRzFNzScFftQm7s8beQn",
  "key28": "2mwmsPLcGDQnSwhhZJ3AtWuwLMKQFdc93ZLWiyzUoMqAaYV5omxKK4C2bPL458KAWcYGrDHBoiY56gnfbmoy1ggN",
  "key29": "45YuJtJiQN2J6KiJ94NE1V9udreRYB1Eg813QpGfApYvKdjdT8e6dXCpB6CByj8h1B6CDk1fFrZCdkiFJXWNAbA5",
  "key30": "2zneDVacVQ2sCdL1YnLPUaVrR2c69rG6j1RHq4mqiPbnrhtaT8xKXX8uovUQmghB7SvwwMWiqc8pWrCMZo7cvpw",
  "key31": "4EJJBAPyfZdbtF6ggcdSsdEyZYbpFd9Dq26JP186FPe4N3RMrV4BaGjfQv2DPF5dfELdryGBYGzmdfN76T8axfyL",
  "key32": "2emQGSz6NMcD9EfDHGXSKL7ftScCjBf9ksbLyxJoRnhJNfDJq6wDSsQq4A5v8M2cnwvZDB4Kidk1FnCTHsxP7K3R",
  "key33": "2obrMwwg3v57gzCMzMEtVzAADrXnAoZdkzFJ7GEZs2BWdUtuM8VxmxDfL2NQFDFJts5chxCacg4CwwqNLWBRuG1T",
  "key34": "55ADVwckvJAij3tfpvN87PTxfqCcvWwwmT9DogVXTaKWb4ockJc7t9k2cURge7A2ATss75BV1HGrnkJvWTmjpbpf",
  "key35": "4F1GdVWRucnRvbyKZiprDrcZ25EJht7EF3nLd6oHZcBKmFiNPf3WABEf5v3fiHeXJp66hFahV3vRjJSS1aKtLtGz",
  "key36": "61BGmyJdGA4JvhdCEqwDAMLnttwkVozdvDtBnHMuRcAkHYi5UiZmMeuhMkLE5WZqTnK5mgC81DSsjMiZLPLix7iM"
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
