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
    "465B9DsrRuvYjpijhJNhZyi3M2UtZu5AhHDiJqACh4BmrXTR37zrGPf9jtEZKtKo2vY4XQYAjrJ9ic5KBj5H8nZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7cbSqkjHiAbgiYuC6EbLUekT3HqenhXcnRTDsv3U5dXByHPYGU2bALQNfhb5MHJBexX17XugC5v29ACsMtkySU",
  "key1": "5hbpNuYKtN7vjkt61Hjg2NNFkSmHGdUPLRcoVm8jVPHBFKrDZHDxNVGPWZ9VEyG9MDussgw5KjNPnNvrfkEp2FAF",
  "key2": "3Z9zMFwUmnkh9mcibLM6qTotX8HB9JEpUyTAF8nXKJKFZZn2h1dACcW4HTJw9jTMjBJQQXDGRjxoKsfQvPJp6zxY",
  "key3": "4sFyVxKtzKDjByuuu2ME556qWN1pP7D5XQHr9Nx9C9eazx3sezMU3hhW2bYgMtDMpQuN3GqtoyogNM4ZNchusPVp",
  "key4": "VMhC9hPoVyRkzzijNYFbFVqsN6qSLK7rRi8YoqHfMLV6fEahhgx4R9zVgzXdSH4zAX57HMhqMd86MKoRgXxdeqK",
  "key5": "4m2CDEk5L9RGwThW5665xoVqMut4FeN88HCoqbTqXmbqtDMzGL6MQg6ZsGoPBQPgi6Lhro2qRGhsm3nrMhytxJdR",
  "key6": "5We71YVs4jpiRgnRTMbCRR4VKbBVzUogxNk1HDgYneZ3xsDxwZfktroVEnkMH4nM9LfgnzQw2KHx3nex8HzK4sWi",
  "key7": "8jG7Ak89pMf5rvdxYJj1UH3FLijdqC6XBCfqM2XEHNoQmNDyikNXgknRsv5oxYa34EVd6KeuxyLGvTBdDrSU4Nd",
  "key8": "3f88xDF58xNHtnMGTqz1S8nr7yJcMnFaigZ5fcMV7r1hkp7EwtijPWZRFV5muHFadCMmFVD7u66VNQMBUoR91yfj",
  "key9": "2pn1JMrk2oRwrtJpqkTqXdS5d2pxvGH7ZrfWDpPRNbV44jLAQgH4kGvrSDzmHyGjV6zsBKfvE3yL6vroKHh7Ntv4",
  "key10": "3Ro7RJNyqM3rToRpE142RQytxuneEEwDEw13PK4ZkhmqA3uk9oH6fvHi9zL4fYDQzgnNcJhZoo8PQVpFy8QjJKNo",
  "key11": "2FZWgG93gjNMxVQnWBKB4BZYrnuV8vAkV5RvcKQydFvkvhwL32QnMJbxCBp9RL2Kvm8na6KwQ1VRqdThRLxqNTuk",
  "key12": "5UT1uvw6JDGj6PvGqbirujFABzmikhgZSubEYSF7oEtoStZP631kHs4SowQd7AD1mQDVeG59SwodUesEyWvTQ6Gr",
  "key13": "ehYc1q9zbhiGVmPCH4JJV3AqSoKmZEnucJmWAuWXN6dZxaVWQUWDcCyFhQ7YSEFk7FyJEMsFwbjKTyA3taei9G8",
  "key14": "5bg86PdMxcPTxUmG8nuSwjoDZ7JHX1GurfQ7mv2GUXpzm9WQjPGbUt1fJKDW7SzdpLEv4BzdRfgCMfuMDcQ3kB7g",
  "key15": "4fWdXpJDbikvcvCbgRRd2i6mdeqRrYd9YQUSX5Y2gh7g5sxNxpDRKTYS2KNfXEVuy11we5PJVWBS9yvZQp1hcbVa",
  "key16": "45W6hpQUZa6cQd7sw7H29KFB6qvikNai6DoWhGYdkHJ6SmBr2AM915gkvWe479RsyKG1CtvQPSPPabs8qFoxP8N3",
  "key17": "vnaSq1YdGmEVfTUksEWramUuA4APZky1cJKfP7YQz8pVX9bngV9QYRe1tiATzu3sEhm9aUGnLp7nrhxYiozGzGM",
  "key18": "ARTa7VjjXwPFcyadZmT7KzvMMRi9xw3wZC3XR9AuHYSh91rTsQphXEozZ52HK7cXQwQBwjkB27BDYgUfZDjL3Be",
  "key19": "42ip5V14KEUedF2vRvyEP9i7jWnKqAryAhBB8dxRwYXsfRcpym3whmxbmN12Zg4E32sPyA5TXQWVDRE1JEvzhSDD",
  "key20": "5422RKvR9qqnREsaxE7ryC38bepevwNeimPgb7HuodKntx76rUGCnkDa7EJvH96zSiPt8yFsdjfSTGsezyZXkPqB",
  "key21": "uVnrjvBvGujfnhmBVxCMvUN6bw877rD6iTgx9Yo4Chchbvcf1HPAaYuY5VQ5bxWibEq9n7iBcUQmQKSV5MMLsEU",
  "key22": "3bmeFt4ejJBZdRSGR5xvRy4dR7spjDX9DmjGa94euGXbvjbiZgt3ZdN7dQpfVfbhN16mnPHyyFwiKkydRtuqeYCu",
  "key23": "4WVK7Hhi5mYqcTvLiGRD9hJSd74sTgQ6DSBxrwQiQpm78V9JG2iyWrZkBZW9v15aFL4KRTCbEG4FWfSgW67ePpPm",
  "key24": "2y6vgGvta6wCmmZMFy8ui4a5aHkTvSmco8196KxNyhzvsm3krcMvPN4ZvrmVUt2vGWJrDjG17bA4T9th8BMZp6Di",
  "key25": "231EN3Cofin9U4nNeDE4DR34Qh6sJ8Yo535F5H6LAuEhNzU4Jdpix4aBAVVafNyQc2gYSanHfEpXtA9NDrVcxh8K",
  "key26": "614DZpZnG22o7dJsDEKa3xLiWhaRBR7ur5NJ3yW7LzZAwe4vxYkcGujGJhKAQpPnCU3tSdWZRv2ML5RAmeEcJFpu",
  "key27": "JJu9RT8LwjAKboiEWPdGErNADfcQprpDkoPQ1oXMRKLMKcrmLuBQy8tXTG65hsxh6LAxAVTa9mtU2jN8R1P3pgF",
  "key28": "LvQKVWcRswUiJ3BM6yZjAMBa5Gvz48uBt5ydHyG1BfJb1y5sWRwWWdD2US3VpP6EyWsVqUfdsRzRGg3qTqAmPFW",
  "key29": "NFUS2ie5BvRjL2tXG6EuRmXHQXiNzeHY1nisrjmCiyWC7D1ixbTTTGg9EjTy82KZ5KP3adCNYbjWyUxftuEh4Rz",
  "key30": "fWeQsv9XWGBVALkMCY4RqivRjc8wDN6aXpPQXVN3CVMakaCw2URdXfWv9QVhHYgW5cmhZ7N74BbRmqnifYBXEZk",
  "key31": "3CcKpYzZMF3wXt8498neZnMdfY1qBa2WkS2FEsDN6ZeRqBuVyrxJ6gxbWhVXQJ7CvXK67u56VrnVoKTh6GYDv6YC",
  "key32": "3joSjPpaNNhGSxkwp2wa3M5xEiZo7jVn3Vs3rJiCkwSv8Tx5LKpsKu4mo96b4UZ2rw98s72HfdQPACrT9x9nxNXm",
  "key33": "dS7F7ff7hffomVazkG7umT8NWhscRbZ8ps4P7at9noJiEWf8caoo2JcfWuX3A5Rrdk711BqGBoJFrCPZWbQuHkC",
  "key34": "3SATwVEqPvA7x6x9HP64vWYsNhvaQmrer1MefPMibimG1ERkpmQnCYewcJEhXppipAUybo7UQZKZuAhnszedyCx2",
  "key35": "5omsfyX151fV3nbaag5J57wNume4LWkkJGDdqhxarrgaUun5kGtB81ZtC7razC9XFu2E4TbuBRXomYGTGC8MMkjA",
  "key36": "4yqVwruwR2s49SCVz3zcGjD95pZwaujdAiyATAFA8xz3vmudfpAjDN9sjcD1LsNx1fjvR6WhUoFeT3QdZfDe9Kbg",
  "key37": "4jRfDTqUrmAsPhJRoV8D7fc64uZTsjsyQvGz6iodKETDYmoyXz7TpQ3hkeRREGgFYUwSBFvXVoU4ABeNSD5wL19s",
  "key38": "Kg2sxUYou8xmasQZCUNi7xLULhqoTzeNCeytYqu355qmGuZT9Bj2ra3LvgkUEUvUg5qScBdp8WhL5s3ZuMtJVmo",
  "key39": "49PajM52TkXXegfMmtsNn554UAe3uvwBg3Ydn3JXPbWZxvybgi4tY3pxEsCNuQiZubT6HKJMb1SMqDU6fcnZ3dLG",
  "key40": "4EituMyCCZEHum2dpWKNs4aJDbgz5rnX91WGWv3khjskVy69eDQjZyGud81iFasJfPmK13dEZRtk5Xpq8rDLbQ7t",
  "key41": "37heKhewB9GeF8UcRNEGHSQJeKLQh8YMwPrQ4oSkz6VT2rSBzkTvoEW91G7ssexfEqjGLaTuNBZKP7RxS5f5UTZW",
  "key42": "4sidhPUsbQc6E82jPV8szxD3gF7Qv3a8TDGVScXSTdzKWrLpRf5UJGBrnrs5sqC9MFQqCviowpphX5NLRRSYYgte",
  "key43": "2iUTb1B7mAHjco7d9QoFY1tVu4jhApvdVqeqWRegCN52XEnqCa4NexLGNHL7PgBzFxUi7fieKBBbWKZ8R13QbVTv",
  "key44": "3EUUAGnf2qowyX8k8NZdxPSYGwCcAtpcidwfyA3u9NB3KLj8o7WzsCdexCJT6qJU7kwvHMLMZX7tU3WxSYX4JN8W",
  "key45": "64LB7x38TsrUqF9fdN2YAi8Tvb61Z2Y9dpB6PJr2ps7S32YiTnNumkj2Ub85JVrmAeQwnxr3PwArr3ThtEgX7Noo",
  "key46": "YWhiu9ftyZ2WJN1kzBGpgr74WfaoKJdT8in7M6kdygeYp4MobP8QgwvRX3MFAUey2rWWEMFFauqbHKHTGfCQo43",
  "key47": "2HBxfoZDUktoNbBiFTRR2eSnJPDYRovYJ2tKbreoqT18KKU2zV49FQYrF4cW5voeLZu2j2RasX4PvKGzn6YHjUZP"
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
