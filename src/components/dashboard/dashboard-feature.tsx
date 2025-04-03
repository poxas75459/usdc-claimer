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
    "3TRiM8eArgEeByeuxFP73eobpF2wimgcXEwckmZS7FjJXWh8adTbaQ4UfvQCNQ9dvMagNhWCtcMmZjsB1yWCHmoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63rbV1sBcvjzSRexkGDsDcerRv3TD1FYWgL91HZHuy25zX63qLExYF1xZWAXjebsJvivwpdDSpggj74ABwDYPyaN",
  "key1": "92Hfd2xPQXceZyttB7yoxDcn6qkjedyAg37h8NQJDxoQgfwtvZrnDCX5PvBTPceCSpfNSe3xRek9k9hco6QSEYX",
  "key2": "3usVZxNj3VhQ1nPMrrs5sqFX25mXQS1phRaXPBpywDaPcoxTLJSH2FvPpTp7f8PTnQTNhcsoTuNEjoYZ4oaPGmXA",
  "key3": "2NtTBvP9ChRc9cLVanfmvTw9VnjJUQ7ESKSgXYL5ZK7nZtpycqN3sM57oAkJtYfPCgjqcdLWyB6VXvDQ8FdHFmgc",
  "key4": "2dDN4BztsZ8vTQaDKYDdBiLzs7s2UT8TKak8mN799PzvqwVx7oAq7ikwHypvwVHxgN4fTifS5ddb9J4EXEU4o8Qt",
  "key5": "4otY3DUWh1iucENGsV3dVz5PLXpdRw8DJH2cv5DUUPMUXxzx3GZZRs4wqt8vzBscCoqCs9WprzTYQgXCoKpvBxjX",
  "key6": "5P8EBYTsXHQ3Ky2dmoJfnvVgrw5RccSfSVaRivcae4hnxGS2nMAqyYCZqyXRD9YmD7ASY9NmkwcPhNY2QKQcw8S7",
  "key7": "GDptBg6jxicab5nnUoapbuPwEpb1DMRtxPGdbd79FTTtkB76pD1FKNHSKFfcqa4kFF8VQoy5DtV99iphGFjLAWp",
  "key8": "5wYfn7DjfFteogr4X1s7hU7sS1ZTnL8sEfo6maoNZgJFT5rJMbWfYnJyJZqYBhGNc1TCuFnixYp3bYcchdVHd2wL",
  "key9": "rLwDHEaEmwcJAuAKB7eAFxUf46Dmph6exb6hLXArWsHsbcT1qeSXNkrbZpdjKKTu2aok8Psz5cSjSbihrQjQRr6",
  "key10": "2vvRjP7GyEwDXUSZrFG9rqHkH13NzFUGoodDMSzL77RSZ7F5jtdQWgotE45PFkbh9B8Rx5knRpC41h1BVxr7ax9k",
  "key11": "439fXUUDHKdQXLeFLdqt55FXoazHQzfTEVwMkY7jNWTdqpZWSGdi25tCYDuHoZ6choaVWs6M9LMwaJD6cmSKdTUK",
  "key12": "3EKakNQaHbkRLiJQjpHMnA3P4ysdy6h8kpzgA6vmnoBrBgDzZz7AcuwYuBmsXs4CznNSzYtLjkZDynSXEqvRB2rE",
  "key13": "2DViLJzv1yUUShm3BR7nWYytxJdEKLLzg2qHEBkPBSh8CELombSGokia1UWuywohBUiBsU8W5VEWNYrAmUE5QG1J",
  "key14": "4k1DHdnSP6S1KKeSnWKZu7vrLKk5M61ziA1114XqEqXPWvSYTgAbMF39LD2fZHYQmzXioqUS1zKCJfZurDtPZ3hB",
  "key15": "445S55adwL85gdQ4SqQzmk4a2Qz1wPeFysaiaEyi3BRWvoUSwwxgPQB5x82qBqZ6T4hfDodxQEunWzGy76EwQvsU",
  "key16": "SZyNhTgE3rSE8GiazQjTpiPHYgJLYbQkVn56JGjoe8JDzYj8MHQHh1dFqDHG4XZMisubRJVebGmYCF3nV54U6gM",
  "key17": "3T24tXXL42mewktH13mhejTdUqazK2oEy971gbeSGmVytYDULpWPqrFPBansok4x4nX1wcx8CzjZxBndVihENYE7",
  "key18": "5V7C8mtcRmpo9DLVWiGQQQ6iMtdbjEsYbn18Tcpxy3LyaRviVR8SJP1DifrqK3w1jKymcQDduFEkfwntTeMqu3Vf",
  "key19": "3BaRhPtpHHcVr5ZUNUZ6mhXMG9N5i2Hy2sGtcxfpAviMe9jPDtT5JMn9oUkX9QYramK4FriTbtwAxeYW69UZsZgU",
  "key20": "3cS575ZuMDBCAKzB5zxtudQ1xjc6c8riKRnq5z18oJzMEUrZupk4ausnTpKEgi5J9McD42Sq2kZLdwFx8XRmdevx",
  "key21": "HxVEDkutuxPjUS4RLuVJY68QCKdpYPFZjohit68Rh3vPGUiAmUdZ6ShYQUFiHdujL545G8qW2tBqGKkfmNXSRKY",
  "key22": "2Xnq7gVR4DC1x8Mjc2Uxrh9DUVK8kos18R5odzPu5NxFg7dnTCdzoNbRtXzVyQFMGf7bxA19FzmJRB2jBwRFNVoS",
  "key23": "dAQ8P1iKppZNr8JXuWmHbN58CDXPqRxpBPcDinkqukZtfBXELDbBF7HMYBTScSVVbmp8QU2hFy1AwpCnAvtze1h",
  "key24": "34VYro3jivZMhEmFxCDasAT8GWJTy3BS5sJQwenzNcp4UknNehgRb7w2dh52nknEL4AqKUpD5s6zZHREUzAaWagZ",
  "key25": "4t6Yv1jUbDZV2sRY9TdXJUcuRuTxJjMasRvDXr3psmHUu6UBf3REtado8xRnNumdfapR1ycB4NJVfP43t2tAtuqj",
  "key26": "3acd9RQ54orZrGXbRxaYoYWF1tqpYgK3eBMLP4sCd9RScszj7Rxa34vHzxZarSrZHcGDP9sn3Taa7zNpwq4jddQr",
  "key27": "feUa9A6n5KNvA8fCBXtFvted9uYiuahA87JJp1PdxTcrMTaNpNEMhLnMqNH8v2m7eR86uvwriCX7Bn4sEQpG1d9",
  "key28": "4QPtfboBW9TyrVyVdjv1EwTAfQg3Z71ZjU4EiYspLW4xH6utJqchvxGai5AQZo8VCqodBEHAyCHk4mNXrG7gD2Nx",
  "key29": "35WVSHqzjbCh95QBkyNwaBP66rVPVXQg1qDnEoHMQeJzewrMfEwdC4ER49Xkxp3nc4s5MvQYLYLfBHXGZPTcDYts",
  "key30": "26317M2bVe5Sg4iuBFi9rxAzUqJuiU1hKxrSp9nAX5nQPKjo9iLGKMhn3qFqhkZC2Ls1r3ZiQS7BPPYRv4MpAFH8",
  "key31": "5mtpXEkDwN9TxXZDh5311Ki6hQzHzj6DCpTKi7CRrHYuudaMhU8TqzZp9Ve7Ga7vP62Q95be3BvnECY6d73h38Fn",
  "key32": "43Fnyqyx4pfviZWWsLGXgDPcUD8DdzfRdXVUnc51xPYR6MpuhkfFwGQpn7PzsYoGpq4of7jexynyN2g2K25Wqyqd",
  "key33": "2GD5ybPFckanp4e6D2oHkbpfPxfUA8YjbT761VE63d6bs21fayxbME4Cj3PRF5dvgy2ESnb8WzvccC32cdX1Aqm2",
  "key34": "61hRuzKiA2yPzDA7mrq6jGxcqxkw8WYxEYqyLgu9WouZ7UNPi2xPbTPwfKYFDFWmDQz8FjhthtA1UN23i3Hpb7p9",
  "key35": "sgEh3HerzNZ2n2VBMAgFPb9PXYbGa3Sg7LXLnuNT5yMX3h39mHpMJUaDuvRDGjFYtLj5ZfRssRbC9ybpxnveDo4",
  "key36": "4LB8tEMEPcurwbwH6274JJ2Ma8VKDMkPvXXDuFHi4U1Yz5phE1TSKnwP1uUJB4hXvu9qqVm3SELeERmBVg1capCA",
  "key37": "2cRGBr9nDhxPHUN1Y5envfKbEw3bd6BmcTfpAhkSyQQbQBZwtPjMZjNN84xreyJmk1EKb1gzhAZxya8zWgWBMMCS"
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
