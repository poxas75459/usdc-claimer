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
    "5kmorUqSjhm1zx1oE9xMgvt2bnuJtppw81MVvhxKxwbFqpzc8mUFH6FVvE8rkK8Fqz58bn78oZfEM6cLGs2sGktB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcWZu8TkWnDkLmtxtzJ5EvbaxDM3NFpPFdvPEAi45rj4WoLuVpAQpPYNbZB42U5xgDj4JQwry3AGh9RsujE5AfA",
  "key1": "5XRTQAQhyyTQtdDsn5UGP5RuuYM2ed1AaEgj4fo12LNzN4JV3HyCKe6jG46J1Wu6GWNKhwQ6wNSoTMtpehBtbj6M",
  "key2": "2UaCRkHvsSbAEYsHoyWhaP2ga7sde6CUr9Qm3n5n446hfMNHBy8Tj2V1tQ8XYK29U9QgoYzuM6HMjJt7bxYhvaFH",
  "key3": "856umeDvMNAHBrfWiej1Q8F3dwMdBHiDLoLhc5HaBzi9gMyncDSofj24L4ybGkQaMJVnfjsCtwBujQGoqjp219n",
  "key4": "55FP5LBYSxZuFJqAypRRS6NhwBRLtHrGNHBfJR6jqp5HYbFZTYNKx4C8ecXMK8wR9JHNiuzihBffeA7vC1ENUBKx",
  "key5": "4jndzwUWTBTXjNtd1AqUYugYKN3eEMLabJTybPwNBcGbcHMbCEiq3vUKSmLxfgF3eBC3Dq6qfFLePbd9MrTZyeb6",
  "key6": "21XvW6KvCQxef7mhQufReMWcBq4pV2u4dC9F7q53ankzdmRhtNrb69DJRg4NBMqX3dyfYp32jFHgsQ1gdnwph3Tp",
  "key7": "2Wjw2GJmtP8pJqm4EQthoRP7LGTasj1vdhDMqBju8qpzLTHGFWsMbHFydzGdHFDNEpjgVsfhgrGmDTDvtjtYUC4M",
  "key8": "3aX4efwuME2kNtqAwmDLcoi2eRWDeoWT6tQpNLsCMUMuw7YspDrenoWNrbVLbJTWfBKcWkojhMKuT4Dt7fzKeF8m",
  "key9": "amZySrdaeGoAoYxWgHR82EJ5SA9gYXm3wt9xyf1uGkLYWSCJQ3KSieeWetciFDCRVxsyqoafuzqKWEZmFZx8mi2",
  "key10": "5U98WmacckYUVyP3NDYWciTRY8YjYYCPqYSkDWEYGpbSEKU2Ck1gPqr4PvzpfuDNP6SUQbN6mzktb7bywmtLuTcR",
  "key11": "2ZZtEaK74UUJBMGEwnfroicBXzMt4yiznxvaCknp8yMUKyFg4vY8GDfXcz7ApkcfhghqZZcPwXqr173BtRLp6HCc",
  "key12": "4QvmL8yvvgP8FYTPfx86BjoCkBUapEdBmLgrHFz8C7GK6Nj5AR9ZgoDMtAKm5g9hiT5ETzKbjxVFz1LTfWh5Peuv",
  "key13": "2WsdpDWk3EYPGVGN9P49tPpWZmtWkKEXMEMS13rZmpkSSeYXWsHgxCd5KY6j9czwM3dNF6quXhVf5Wf1HtSDJmit",
  "key14": "2v1oeBvcveVBTirJTPAgMzBFasFwGUtCzuPUFsAhRdtu5XN9oGp4xVukuoqQXqSStoyo1FL2xKtsprNroyMsRw6M",
  "key15": "4fg14155dwj1Wc7XjCbwaQ6mR6ijfx3Gg7VbjyTUWbmAK5pHYyTgR3gsmPLwM4twoA26i61jnjEBukcF3tAGHzNa",
  "key16": "5HhGzUdiWLYpjSB8n8XjKjPmoC9kD7nqQ88TAkG1x1nnBtANHTfBdBXqqQjemRPWpYmDirbvvybgKfXvYAeL62UP",
  "key17": "5Dj3KwiLQBhZpVGfLZzHL4udDphdjHezQfNS4mDF9RDsqwqCepPiMjrjVQrX4yjhNxqoVA7egWNzth5AeiYE8dE",
  "key18": "598nUkNJWprveYazYxbVVttDQb8zmMj12BzZ8mgh3hEiXiQBSu3grnaG9b1Y7YvQS18LUnqzqJNaR8kVUfHmahc8",
  "key19": "2w983GyVJHgeHnKidyYsd7ojx385dnYaZwuykMVPyynVdHRACHzYydKwK5C9yAwpY6oRCLGwWb846NXK92wHv6fy",
  "key20": "42CgSbBb5MfCSdq5iNkovTZawzRafiuQorfMdzzDMpDQ8uK5koKSB7Bc3CLekXVSP3xXC1a8RF83KAsSDJNTY7Zs",
  "key21": "3qMqA5RBZJiGS9X6uZw7SzdcaL3j9AxthodfkycyaVXjGCQzKXme8boM59etA8NSCCNWHWMK1yunRYsJszjrbKDr",
  "key22": "5WQGCc8yWmJnULpjBYFPAgHA4q64dYbofyDpSY4oD1EnZoi912LV8Ct1VBQ9WeWAF5mTas234uWL3RU2QoDRUV4L",
  "key23": "gddcyy9pir7LDip9dDJ882a2JmyxK5K3ov4DMtG7g257giuyp4xFbpQBQuW9vaSktnJivvMNoNPPkeeWCLVbHqG",
  "key24": "knTjeZU8yHww98hopf6stuc5RbEtVZpNfabvaNmdfyMTwQwpbdFfa65KcVkZTvQyxVKHJaScGk1cXdfbvg8vuj8",
  "key25": "49Q8dXT56YKTjnCm3F7tHLFX3Cik5k48it1Lfu3f9PyUJsTdXiuHZzf9GS18VA7FzuiomEs6MPPi9kjFWsx7hqRb",
  "key26": "5vRo3JTbf4YJWfDdaXUc3vrM7DEvCozuYAW2YvgK5M9TEent2JwrFGv7hgve261GNqpXSDKjBx1whYpyX1RWZ4W8",
  "key27": "3BteGiPLJspKChwv44jVoLVQLABSkgYFDCiyYZiYqcUFaAffrvDKHjaWSLQsJv48syRQ8DkYdLcBferPe53QUSTJ",
  "key28": "4UR1G7FLL7uHRKzCZS8QPeUbbyAGAhJ4CHveF7RTF1arvJuRqTPsiYNi5fwz2Vpg88BT7xiyAfAiNUsA81aRw2U5",
  "key29": "3QDt57m4HwMeUPRWfFzqXmTu9ZfHwHhVv56ZQSrjL4ebGEDG83Q1U16WNpB2kgaQAALGZZ2EBP4JQX65bhhPRo9r",
  "key30": "51bwqMFuTU8DcFdrguaDFcErHrDYEFyqzfrxktmGjANZwaB8iHqqUNuvRqVHwzj5TZMSqYEqfMxXhqUYudEgATNS",
  "key31": "3MN43ToJ9T44F7hh1RHwjM5XLbwhfdS3QQGwBRTAToXPFF7XTK3Lb918v6qHtWdWbpsxQ79g2brBUrVSv9izkgvX",
  "key32": "2zhn3dGjcF6WivYghhEiiqFmirC4ekke1KJDgH5N6CCR5deTcMswisUV8Pdjpcab6Bq6i5XcEhUgsnwqqWH9ikDs",
  "key33": "4ECzWue24FnAtHLdgBP9SCAQFA8xpBJWyYFudqrfCAzvPsXi5z8MYEWQE2s1up5ASQ2EVTKXbiow7Ko43AV9W3u6",
  "key34": "4sC7chujSWpbo69eqxN6KB9L45ikEUaZ3Za8zraBMwouXKYNewHNeGtALhVb3UoPdSek6siy6kkMpUv5kFmhYhyo",
  "key35": "4ASHRWBZDrQTtzU6qrUYDS9vEqtZHXkxpSdQDkHqU74oqZwHMCg8DmzdRS5v4MkYcGdbjVmT9tDKvVJWARSBiyZb",
  "key36": "2Mv9jo5owHjgZvAqT8upRpAaS3cB9hYUB1J6WFpzpUKG37UeKvpaFsySYAyjhYYNykbpfdYLfWiV4PRVpbtL2MRr",
  "key37": "3PPMA5kC5W2MRcFMR6m2YkCXgt2AfgJ3k9qKMxk3vv7bQuvwwnD2osu2fohnEV2vy1W1PtYgVzNxdXkd8T2MzuG",
  "key38": "66XyHJP8MDdhdwu2wubKicC1wUSVMYAKxaHyNBDkRrx6iQuhKihQyZNNgR9WuxkG4e4hgBeH791xEQ7uY4JjdKV9",
  "key39": "47ucLCYmZrsTPf1SDxDypSBwmcaqyVnF66bQTofFR8ZhGcVGqRgxr7rve5L1vUNW8QPCS3GiCAyEh7ShhckHunQv"
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
