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
    "2T5WCZigAcZMkviCKvrusVJGwEP5NovAiJhEfuyQ6sxwUJbMdBB7dhZ3yPA9APSQwoKr1T39aHAJC8aXJic3JPKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64SbsNahk3ewENDNcUcJN2qz7XB5rG7Z18phQTk781htu2NAtzazQrzmafgXDuZMAQsNra85jfKBnrPNiSt52wWN",
  "key1": "2tNX6o4JbAPGpvDAu37K4jJMHnSR1pimdWJC5jrLVVZJ3tajrJi4rCei5xJSKbxsxLGBkQvX7VQ9yZkmQb7X2EMM",
  "key2": "2JkPJZY6dTT4qjJaEhxYHA8MBvWU5cVkhZc51SuTLJaTCnweCd692ciJt5suDqhFn3AYmJWb2qG4yhSrV55cJBUx",
  "key3": "4xczejGQzu1s6y5DMMXyPTBFBzTPppFDSi82xMCE9RFepCeQWjJwYY2D9QmjEYf1J1cWbkPfs23i7idL8WQG1HiX",
  "key4": "kAcZPegHa9oQ4QD6rdkPtMWtwzdSRqzYbsjvwmpzQoWzmYkdp3LyWXgkano12Ka4GM3j1RtXaY9J9qVE6HTCwVh",
  "key5": "5ceQPRPgA3w88TEuhf2xRBqijTXBYfTEfGd1XyX2xnMHfdoEsiNcwWw2H6XN22rDgEdvmQnCUNd5mzrDXWXR5vp7",
  "key6": "29DAxx3UiYLx2KSL3Zc4aNrcD93ysiqARB4QVY5owXaUwgfPMRNSuvUcXDoxeBd7FeKzF5KbuwqDwhZpFSLj5vg1",
  "key7": "61W3hjjLzJyKAJfYRCAuGksj5kdG2ebpiT2ZZa84oJEKGTgdeFy5zn5sFdX1huxX2YjDEeWoS9SttBdgrJnahpzK",
  "key8": "5SMGA2tbsSRvbMidC4pxdHRGV4kUZkQfZLHqrZevFZT7ufAFViLrUmT83sWSvvfuLH4j7dS4QUNTz2D9vGMy3xrH",
  "key9": "3Q4gYVzki48YVGodz246tXnBS92ZXoiEyDxfcbH76agveGfDaHAEaMKy9T3ixLeXzH8ABzHRcz2WEQT4j6YXpL4r",
  "key10": "4dg8XzF9px4eGuXVfG2o7FnHkqcJokszGbEyuNfpBKsvSXdu2cfUWvZvxnhjvuwob9eNyHZWrNdJgmr8wfeC6wjP",
  "key11": "3JV7LAYG1eSXBGymycLx1tgbdH3uEuv9yXdmxZB2Y8X6xvz5Ac2bGi5QMqy7xHG59YfJRuUxHkWUsWVeg2oYMe7c",
  "key12": "dECtNLvA5gUbRBWGRktAHv625LX6NnUVNuiz71NMyj4FTM4FrQDKELdpAwix4r4WenXb5b7toLYBiFDkm1svrVv",
  "key13": "9Uo1pKe1EeJ2dY9L7rA2sVgAKU71WT4CXtP5tsVA8DcqvqudbUBMLkdLHbRfqA6ckJHjjaDgmz97GjERtF7bdGP",
  "key14": "5bLM8ibsWsnCeeymsorF8x1YDgXfhGFKq6GjhRCfTtVUK5f2KRqDFkyqkFgJwUKiYCfFKyywpHwNrwCRmriHjTHX",
  "key15": "5GjPomGKLdZ54e9mGRSRnszVb6xVddpn4FsTmUz3E45Wu15hqJfe3fPUzV4u1mPCFJGTqFwgiTEqJBMSFYQGA1oQ",
  "key16": "5hXuMi6XzFVqiqMnaDzCYjGnHETbD1xWQbvmTpVYFEFuNvwRSXYtKMCqopeCLbn6MGP6y4WCqWnGBULT1bq4kQYv",
  "key17": "4LsFHXtcS2XzbCFK8avCNNRhGGPEXmjDD9AdjgAQe1My6aWMsktJhrkzzNqh2qH2zKSnHNa6FWaChLTc4dmyax3b",
  "key18": "3viJbRXnrTfzKy7WwuJwpEiQwNYwFGec2Xc1khEZadsgipQJWE8gACrVxKNjGVDanv4c4jzbQ4Sgy4YvUoh4StMB",
  "key19": "4QJXHxCtFuBhYtVdsPkp4d2zKdCqQdMC4r2zpNiGAqQrYyLU9bAPZDnJG7HRxwK39uHBybN8eqvg9ePRmUJmVxfv",
  "key20": "vkB99en5yTWLuy3nomGSRRFezS57ufGueK3QPLkrnxbvCsanctYveqgmMJN7CQrexpPDawHqN55SPGyMDj93cwq",
  "key21": "5fVSgJe55FCSfHYddinceruVwi6jJwZgpkVsTw2NyXPBWWr52zpXpNBb8F3JKvVHhHx8zp2QdRhruuBcgQ1ti3ip",
  "key22": "2jXnoj2UVep4qMMyvem3AWzyZPu8XhdoF2BuAAgc1VdRR3v1mDaQuBGPsG39CHw4Xqr5pohNsCUFAt5XPrsFiag4",
  "key23": "4YWtSD7MbCJiP3yfjVhcDkjsdJFLNhd45DuBGoTR2w8TcwsxqEes9thpwmgWV8mVm4UrA4PyrWEk8tcNpXCNpRqE",
  "key24": "4FUoGU3GYaXFSwwaFUgXc3r3YhXBpvDvMcmJHDZ2AbSQY64fAWtHPBvKhMWMANnGZVGvR3XwVWwTj5qQezVsBZsh",
  "key25": "5u6XADQf6bYGVvYZ4dwjqwWtreW2AMq8N43WfrgkKCc7yC7jv2dF5X8scG7CjzKXRoAvwiTy1mgq5unWVWK2u4H2",
  "key26": "35hscf2Pts7um4bdM5JFzGNySWX92uoAtTw221cUWueBBXEjTEnZCuUjwS7HaDSTwsc4USpDDmmBevEFEV6ocEQh",
  "key27": "5DjcyYMXmL8ARZgxVYaFXeDeKQWYNjUstNZ9SrB6RqdJmJhLqgu63t78n2MZSVXhsyexuTpUWuhH4s2z7Qrd5te6",
  "key28": "c9bou2WYexHvJfoRBUvUi2YztDJ7RFhGskSest9n9KuTt2adG4jJMGgBzT8Z1WTuuxoUQ6zqmdeFYgGygh1kJVZ",
  "key29": "4dvhTDoC1C2WbzvsLC14EjiD8KzKt6uuRQ54Uq2V4orXWRH9AvwV21MZwfabLY2EmKw3RhjJz7K2s4R468jp1ZZg",
  "key30": "2bffizyiFbwvLBzPB8WJu2k8qvvJd6DnzpQf4cTLNf9SP1GNdm5p9PLb1vnvyJv4yLVsD6Q9GgasvnQJxvF7CtvJ",
  "key31": "C7EkfjQRr1DK8915vUSnTXEoWtvk2a1EqSMxWJWKyKzzGjaxD2FdxdHvC5VQd1xqtkXR9PzBsMxtN6a4ArBrheJ",
  "key32": "MJN8N9BPmToDQUM5m3djYZDAwUkmbBeq8jQ2c5Yop97aZTboBWCo9BQafuQ5LKbLYDUgMpWTjh22etWLHH7NbQM",
  "key33": "WPpFJdTRa3YrBARTSu44BCAAQfWkitibMtHAUHrC7r1nSCAbUALPSQnbpzfhwjdVkRLMKs5uhYALyEkNtJj9zd5",
  "key34": "2jzLRkPKEVtafRZuetRqnXy8MpLye1UeLvjv6dc4LDm6QCKNvoaExaQLHYigWY83U7bPtwt7NXNNvKWXsZ6BjKuU"
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
