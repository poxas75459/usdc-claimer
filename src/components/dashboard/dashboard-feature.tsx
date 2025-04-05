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
    "42gFN8G6bddeei8GFhH19Ha2SzsZ9uf1vJeAMySSebdvBLmoMvpL1gRwobpkJdQCP1GdnHk8odz8rc5kEQvQqwaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLpVcFfia7PvbYsbAbsJjTmgqMrGG4WDnT2UeqZarNVj971GeTJx8CtYHdWgotU4zuKTdMUerCAgh9g4wsMLwqE",
  "key1": "2btjsjjPwh3QgbPmbrTBqQg5r17xzUFYWCQjtx7qgptWvKrQ91FpZR76KWCs6EHjwdpczuxP1x3bA2va6rhBKdqx",
  "key2": "2Srg9Xzy6xt1hmBSuBez4abRBwVZZ2hKenpJ9pLhqBxaFQBG7uxa8aHnnDnTzBN3tbBEPVSmXM4Uk9LDLAekpsmR",
  "key3": "5dssT8K1pWtVrJJUEhaQq8h2EENoKYe7opjScxUR5vVbZpcjeeBNZsMa2VjMoqGREm386AsGMQzpQprT767LwARV",
  "key4": "StNimt5qMDaE7m6jenswmY7YF4E8F7PVC7pkHqaqyQ12jEMTRkbBkeqUPWWqx2WSrtFtrcw46CqQzSckV5snYbr",
  "key5": "5aDunh5QtrE6Ndjge9mj4UQvuirRDCaWthv2FA6mzTwh1uC14UUFjXYHbj6qro4QAvujwLCevs29fVbqkYQ11DYV",
  "key6": "4EH1pZybKjcwbA58cUKqmXoppgdJc4oU6oarfkNXnUMBNfdhvPPJep3AktyW6dE7s1dMwHfN2qr2yLR21TBJb1Zy",
  "key7": "2QQJnSoF6d4tsVejg4YH13G3rbHT6ycHXij3YMm7BzderRnFUN4q7Jy4LmY3pNqPzKr7VmJSqMxQbaFrz8xBTrJH",
  "key8": "T8C9YPaagqS2ddzyakf4QJasQRPu8hBnnKxPVGFeFU9jGh65pZUGUu4b7n21WHSXjoBeh1zHK5NiijvE8EBzasd",
  "key9": "3h8RN33FPB2bRtm2iwbw8MotT5kyj163KpSXvSJQgv5hCrLutYMGcS9EYPWLCuhshPwwpnqX4TihGCp2zSEH72Nf",
  "key10": "32uVBt9d5o1u51ybMRuQMFLKPAo48YDobmc4VbLi3GjBMHFsYHYfisu57G6jDwACjZbcWkchY6u5bCiD7Q3XJvVM",
  "key11": "6552ffpdgXpEBkZPV2knBZZQgFoBZnxMGeGBgRmCK2vid6zzr5Siw3NaBgFJaBoch7N1Mjq8LSLdEC1Cbjae8Srn",
  "key12": "5hD3g6mJhA1uy825jLvqx7k55Biv7owdnHw5XR6W73PweLSi2A3Kf13v2zxpR1K9Gg1VwWyHKDNPXdSDAXqFE1PA",
  "key13": "cSfKHzxKZZWFRtB7vpHbFtrZN2YeH9HK99URMVdHbV4fjEwsRiS9wkRLmhwqyPXi2gvjy7FDhwfKhBsiDe2mzaC",
  "key14": "5KWMKiFmeLDnEUQLErUEwFH6eYsYWHMD6V17WaLLrNgJ5yTkUq1RPNNeVrbtmwoC3Fz1GPMbQGL5tNp3Lt8C7gCS",
  "key15": "4cHk6xTasLDh1XaU2RBVyXvH5AU6SGXkGKZTZTpqqTwnzsFmknGpzT1ibrYGKN3wAUCrNbLmfqo5zGc5mzhJASHk",
  "key16": "R6UdVBps5BQ8s2hbwCiDR9KogRfZw9Yxf1deiwCQGaqSjYSM4eLw6V7zLA8xVZkTff9UzhFyqkmZCdh2pr91HNi",
  "key17": "fVr25hvnb23dVzjiksU1HfMkBQqLUJTT2YoWrAxPCJQCyMjzri1cnG9tRmyLzriQqFYBFXYApcFyHNGd1PtxVjj",
  "key18": "3rJJ5XgRyVtYo6qc69QwYFkXMjbsuMMu9UrDSfBZWdktoxxVFBzQFGSj5HYsrDcMLXYMw1u1oRbEqKjMLY7cmmqa",
  "key19": "byx7upMJ97mQjpDdHiymQmJxPQmCM8bDjzJDj3CWGbZpeYzqR9JG3ieE2GJUYv6izCXfuCLkSLUxkb42FZcvreP",
  "key20": "A2kvqr7YqpPLC81RVjyYh5hec6cuct6BMPs9LzYDprX92rDLvvwyAxto5KXELudVPit3fTWUrtXSAdYHMuHW9ec",
  "key21": "zjdZaaVNGmrTQp7qHVXrRazMcMc82YNpWBjPu1Q2Ad8yiDGwQSVbdF1mAdwJgRg5iHYCNxearUmaS9qLkVV6nvD",
  "key22": "32sKiugoLRRXr6v3gf2rv6yGkbKM2Z3R3XG7KD1SBR3YKCN8fXwNRDqzb8LRY5MBp664rSARpMHJt8bPH7v8hgwc",
  "key23": "3wK7pZmpjNXhKqYEX7UVeWPKfgJEjyygdrYB4fMkYzFJnAbHHimxHMBewFjofC3poJnVu9AFWWQ3ewvQFb2dC2Kf",
  "key24": "2fpPQomG3VPtMvhHY6UmSWUSWQnYwRe92RKGC7tT75pHPXqcmsokqgfHALSapJrXcgAQANb9UJ578xAbnBqLtyut",
  "key25": "1qZrandFfTgPS859nKbNgKMMtz2NV2LnvizBeNbB4dPCVNX9WiExw34RPpQDybkUrcayd8zFgGafRMmc2FDBj6e",
  "key26": "4Lyd8927FCmA8TLjbQetHcxu57nXRV4LgC6VPpF1o6UFETjXjLSktiGmBjARLPBQLMmeRnq8PXNBrkeYSuUoF7Cn",
  "key27": "3CdWZCmzHgpHUXdgDhJ5AALkZdycPfZrtiQKMCaHw3iuj9ys6nRN1LC9dNWuUrBkCHE3YdbDiEsu9DytJXDyL6dL",
  "key28": "2sXdz5utj1B5T4XVwaLjX6ZQbcbJSLynZofnyH1ewtzRQAPa2K5Pxd7uPpJjxP4AwbDR423FZBpYgfEdPDwNhnvX",
  "key29": "4ytYKsNeWj4CcKW7WqvuGhRtC2FBY3pNypHM7z3hQogHehJVvX4FQLxSsdjxJLpwz3rNJBcCGWjho7H7ahcwE6Qn",
  "key30": "3hy2xtpcR3mqn29Sw9EztdCL4keHPXkgMmi2XZMvRfuJ9S4xqkWQrLGJinV86cw4gKWXKERWVYoTMHNXwzCCGNEf",
  "key31": "vhm2P44oM9u5JKJXEJBHv46KKYaXQAXZKHRvsJZcotaemhHS2PwL737s7NKRSmCwmh3g3iA37ALpguMEsMzF9gR",
  "key32": "4X4B3YJ9CiEA9JiVYMrkJJzYxp7Z4QZCVxyTLeAc4CuU5mU8GU1QxdKDRRKBwnG2YyE7w9D6wjeMdxdwbuSzwkzq",
  "key33": "4fQkkgyvxXpfz7BmMGeqiNqwHSYKeXVXxqgoD2b1YVXUtupPQrs9ToPm3tdeREu39r9iQV2PLP4JP4vxriy9Gf6v",
  "key34": "5csUDC4uWW286mmtLqxo3g4hNTzmbqFfVzCDdYMGkKoAajUDd7MjHyxaL64mJ8Jk7PeiRHPPTPd6yhU6WsDYD4TC",
  "key35": "2QtySDRhg4u4atP9Mna3wwzvm7qWRaQckcJjFrLyAWYftXRuvia1TQccktaCoyAnr7SRLwvcNp2qBs5owafQosnH",
  "key36": "4RZZKmmS5vrc32YR3pUp23kNuziBM8KfJe8KugQV2jJnFYYyD6BkyS7yvxfEVv5GHNfKZCHN3qXbwPS1iLCJZnBn",
  "key37": "3PKgZQ6gDz4t6TvXPYZNg6if1TKr9DdSzZSuQ8oboRb8FBTghvhbTccNkMSb13LP34VTiz1hJp6eUZsKMrMKSbtN",
  "key38": "2hyZe3ZhFotQ2zk955ZJaXHZ4VRGj3LvCmvCZWyLYjxv95uJZ8wcr8afBVHckQtUXsnDveWtmTfXpmFaT1DgB5co",
  "key39": "2FVyLgxp1qxabN1JnV7raLPcRqfVWrYLy8AHFF8QTE6wAfsjuYjG7BLmbe4fWo1PmC8o6p7GKy3MqFzXt85qjGUn",
  "key40": "4E3FvA19AFdF5cwkAuADMaxYHp8gB6iDSwkxm5LAmWigeBc1CaZx5Q2z5EUE57erpDffUYit8AneUqUBa8H9yAxp",
  "key41": "5zXCBdckNayoZinMBDuLU4vKAWv8NqAVq2b2nVPTDayGDtfCKWMxhyB2HDYKRk9mdEgpzrAELcHKSZHH6oY1aR7f",
  "key42": "5gnjLgBCga8RTsNcbyDQny6MwgTY2DJbtMf33tYpfXGQxm5KF5nwrgFX4ptsmsUiiayYeZUtNWeJoEa4eGmrq5cv",
  "key43": "2ztBz3EGqmJjdVqG5QCoAz7iHuNL5Aqfigu8kEX95Y8rw4PeHCsaJ2j9Y7s1Z5Auhs5fbhmYushydceo7pKqjeMQ",
  "key44": "5zEcDQ44sBWhKRmHiTstYS9Raoypx74yHzwxTqiZiFST6gDaRZuj4n5R9VYMFUMRE674ozNe4TA2SUVKnuzJxJXo",
  "key45": "3wSUNPJazVoKGs75dYXsti1hrLq3tAxokMG2iX2haoZFQNDAjtw3cYNS4YNwiADenXEs5RHHx5xa7yMtwiDfSSQq",
  "key46": "gQLAvaNsUSHU9WxUuCjUaBvygFXmps1hvseYXBSGiud77q1BDY5QHgavJftWyyP9aYJAhA3EcsJV2rrAHFVpFXj",
  "key47": "5UH1VTQSw7tXjSfdWRcKPPR5c5JdjruagQn7R7EHKzKfoKLqidEwhCJrGDg1BWbtpCtTfvP8SU4kzVtkG8uMmKkG",
  "key48": "4m1QsBicDE4pG1SHM5PB6xyMJLrGwHURXdcHxVNxWaMqoTzYMXpYQCitNdCNQmPmX6U5rHcrCzCYSLbT94v186wH"
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
