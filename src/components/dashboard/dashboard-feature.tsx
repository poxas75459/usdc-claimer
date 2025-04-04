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
    "Q7jAC3W7D6UZyc238kiiAgwziE3vvBDJhnuvB83fPoQLR9vtaqxZx6oM4VMbSexxSfqvbVhp61wNr7eXYvxQyRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVKKfFw2rQRNsSuMqj9TT4uXMb9ihSoqDVbDy6kwuaSk3sLRbmHTHUaB8f2PvEZk5cdqBWYW7BECv8hG4XNSWF",
  "key1": "t5xUpLivpg6semjmovND8vjvgULJqd9nkT8YNDs4dNqSr1TuZr2Z1YbaYAM72r8xo8TDYUFDmU71QGYfPkL54RR",
  "key2": "3f6BN7pq6JFG3fRnJasKwntKCLZsFLwXvu15gQJCZVrCo59Ghs7bJaXewjXAbqC9RYDFzh4g9R13XCKa4tHaEr5a",
  "key3": "tMAUWfEi7LuarRKp1DGoofe4ged8hnx7pqQAg5goBqqjjzQBCMwhEDdkkPV47toVBzkFNHqXFZ2ie7RgDUQg8di",
  "key4": "4YoqFAw4tnkViej5QFaetS5J7bEW3ST812bvMexM2mGjkeob6W7VGNPTsCvRCnMgTE8kdVWeJHDVLXuEsyaDbYFQ",
  "key5": "4ZfVDHCngAnJ9eJds4rnr3arSqe5dqvCemJUoXTTMVChDfzKhdaiqs3yAoVMBjLdjxMJRaK6o5jctCw13PJcEMwz",
  "key6": "4pYsXuoSxUBCWGus94YXH1emA2w6cVikhY383QyeZfb74cHWgpQQaeG7ambmy4j13man9soCzeqo859hgctxmYL6",
  "key7": "2nUXLPkm1wmY3et6gvhbz2Jggy5p2Bi5SGj1v1fpwvUduK6tk69PZBYhkwfP3YP4JoscMT8ziQ952aD1vvCmX334",
  "key8": "4Lzn2DwiAdQvi6U5gSqgYFK2Kku2pqK8pxSiAQHiTUbs4pQ6PKUeYbjf5cSBZnwvi7He4bcUdRmDBS3k4bMxziJf",
  "key9": "m8mJ5Yxp7DtawFoeLjwMEWvrd68dF1iQ1zhawsq5dScWdeUxyj87DDVCPGWAvSjMM9QZgc3X1qBb5pV3xeoXZuV",
  "key10": "jRtDcyTSVCgF1kPMJ8LvLucPf7aN3SQS59eHDDiGzV1rFxQCWRNqtaQQjLGBkBwGn6UoNJHLNUyHbN4XNb9xqgQ",
  "key11": "ZJd9GVWKKsFzmaA8q5SvDADWbKmof4pwUPXYoUeRzhDwKZwtdsrLQ1Qe7pryCUvL7A9eTiq7frqZCW2fGiqvsS3",
  "key12": "5tcpAWQgfxLXhMurSnp1L3WaHHYxAWA3522A82rYkw7y3mGohu2qMHPWsa4mLKTDHdeLDrNSkHLawE8xuUGXtq4Y",
  "key13": "2xsb3XdD97Xt9iLAiB5GbdukJaWDDQSYwckjGThDLNgCJba9faeih9X7gDAD9tsKucdryNczQAQWGFZvTWMrMoQi",
  "key14": "5AgfhpBoZZvGB15Uy1y1Evmvddb8CXCV6o2cbmhtwSoy34s51cDzHn6fg7S4MDYC1cdPQG84ZzJHfD7p5HXNJ8Jf",
  "key15": "5WjHzAJhA4K1GeFH83ZUm2E9b27zvrnRDsUhoQEJ47F1fk6ezMb2ASy5YbnRbngtPWadeHq9i3ftMQ1uTdFSQtMC",
  "key16": "3SWhKz4SssfLBBjbcB2aEGHmUZbKVr7XK6E79pgspuzCwDSFDp2jnrcjdczRStPFT3uPLSngtZJn3RtkDWs3k2bF",
  "key17": "298jx8YjhPWKC9Wi8b59MSZPXUouKCLa8RVStSyvnt7gKi8nWt2cyxzucskNiDLpxTYgpjbR8duFpPt6paDTeoKc",
  "key18": "3P5vuqhXehzibkGEzMS9PNonXH9AVrwSeN4R4T2Kj8nyrM9jsGRPggcyZmWaFpzEWu7oyPnBw9Sa6GTcFya6MMY8",
  "key19": "3GsraFrV98xGkPs9KkZyVwDMZiA97r9UNzmRhgrfk9P2Rzau9rE6nLAzeTj8zrbcnWrfXBpiE2EvmhYp5dJNwvq9",
  "key20": "HmRTBwgySUvq3cQC1VwGfcRJFYoLnz497HH7bi9ggStWw4PP3RunUqNomQ1vuATtLcBWtucpU9fykKBC4zU6nVV",
  "key21": "5CakqmMh2TjBRTe1EQGu9Vz1iYkefyv5pkizf7pkuP41yVGrtuzcvQrU6LkKFnYHF1iDiwSGyKMscddg8ibM1YX2",
  "key22": "3ne1tJjMoZ5aUTxAgQseqJ3MBoQ9EELi46RkSkJEg7qdAA5aty4XDVJRfc2h5bvdVebx7CvuYHzswzNMKxUZsZSZ",
  "key23": "HqTQEBu5BWNVkT8WKWAN3yXErejRk4se7w2mku5KUb4nrbnqLz9enTEX4Kd2Ni7nYwJkNf3N2csfuuG5f7AcXi6",
  "key24": "2YAcpg5NMDY8THM11PhWqUyqHQ7XZDSC78uBN6FhRWW68LdHuunQpvXmffzDp58AtxbCctQx4MjzNjYJrCSjzSfz",
  "key25": "5UYf2fDCz2s4cddxz3FcVRHCHfKdh8JwponfMwtfL641mmcyL2JJcUggur2x1x63svmKHKezdrKjz7HqeSvBrKcN",
  "key26": "2JNN7WsfhwgYpyQTYetCAAhRsEoqkYPYiysqhDfULzdSzTPq2rzSGPt7FcyZbLqD3S6SDE3qR66GmNpn21QJRcuZ",
  "key27": "2wTHN4kiUhsDHKCoF4qNW6q3hfLmTF8yJkiHPnE3HueU7GmqF7ajLb9gQLn63xrMMAGxBA8p6xdc1Tnfw1Y3ZK32",
  "key28": "4qSrzFbufgsfWzcTiapxS89zSdikB9EQXjC3RTDFB8HvQhXfFkk1rXsMFQXX4gJebwEuUKzZazfP2fgHmvA1BMud",
  "key29": "k6XXzeEZNNPZHEuXghbjMkmN7x7JGNr2efAg4BBUweDPCqgokc73271NVsYyqHQdiuVHEE5F4eeMyGbFHHLXSZH",
  "key30": "MNt64g82DJFHrjuGjXwErBs9btjrcNNxUJNxRyVZKGVqnEDJXKLCGEKzEyUcCWY83iTkct5GRa4XqtNM9GNVfep",
  "key31": "2uvqrcsf51oaMnniRnMxTu9mNxjQXxpiZ8aKzFbFqB27jFejb9eZrNc8f79ybeCkJyWF3ZwPsJpyycC5Vr2NiMSB",
  "key32": "2Gvvr71X912ro5nV5ne5Sta1QBEdYYP7cYKavn8LYK3saKqnXjVUMHdm35Z7MKv6y59CFrAJsZzUszKxvhc3ZVQ1",
  "key33": "BkHzmcSnn54MQQZsMRveaTSmZNWneXc6fy7mVfPUeaHo8qxTyJnrrVkTe3HfUUBnppdnZ7AVuAzn5AFzdeiNZbM",
  "key34": "3sj21PGVTCi2KFfRTkPkww8yqyEPugchXyBfudg3A2N2BUwR5ujsG4YqJNKYKYQdJSEiWCTqhKSi4nTJWSGFxNH4",
  "key35": "4McC5Yfik5tujPi5WEdjJ2yPAmWXbATFCGKBvEDPKixVrXUHwQoqBr49Qz7qZmDAcxVuLWPspA1eFq6YaAY1KvYR",
  "key36": "5fE8nkZtVxWaeYma492aZ2ddQj3fmhcjeLJ63SwWUMxh9hSt6hN8hggCe6KoDGEhL2tf47sjgEaKbcZQffiCbkoW",
  "key37": "36ZNidatkuCmSHW9nsBt86g5aPPCUgEP5SwKH51C6ENEuPHJLv8JBfWtWoZXzZrjjgbQB2sU1etmZw8VvpsGfju9",
  "key38": "58gMJPU28V3y6zD9E5FBA5sEfS62ukziPU5MUj7siGosCn5CcG2fKaswRXrsRKghGr63qDJMEwfynCqkNgBJfz5o",
  "key39": "3x4puFRw4DeHkLLwt1y5qWsUza96bEqeai67iYkdzuPtKM2QwjQhbybHQr8L3aGuJie9QbWfU2sDpoTdJFfJiZS3",
  "key40": "43xC9TP65MmV7AJgqXX7F3iqrt22XxxdafxDvnshzrwiizum84xT8xjcEvDzoqGRnSdHzGjY957hgn9kv1zqt5Pt",
  "key41": "4YMdyggBX2gQEQ4K4G9kjogq25zY2Ud3Z3RkpXvMiLz14JDyym7TS1SrWya5QpEwBY1uNNoR1y2YnWT186wbRxRA",
  "key42": "5GAerZV1ddcc9vxu39MWJM3N79soHhUWCWHavLnY78EWUXbB2bBUaUkkyjUkP75BgzTq1qPSBhGdZ4wSPbmk2yu1",
  "key43": "uwyKY6y9hmjT4Dqy1hkMw8Dhg8UW9CDwvvh9yADBvvWZPPrXhj2ypRcNH439d1U9jL4PdMvYkcPbTfVgUAtDVJc",
  "key44": "c9NMuqPi5d35WY96VobZARGE5xbu8kAmaMhDSUQCsxzH1Wdck1u2pgEhbhG77t8hJNsFsCEyzYFXVNRT4v929oJ"
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
