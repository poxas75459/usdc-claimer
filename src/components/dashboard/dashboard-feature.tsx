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
    "4FbwRLXe7JL3hZkRETTU3zYzZF2f8zfXZZTkpHnzL6m4PnsthswTrtPhJhYhek3rrCZ9fgkbXKZPFZaaLFoFwaMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WUGdnjtQM4n23N4GHfMYtuHK223cyxwLjSxPVkuTV3p1CzFQ9jRwd7GMurSQ2dHqfpnnq3XGmEEUiMZ2m4duWeu",
  "key1": "3zAQN7gqztUbPhi4HqDeSQcbLRCbDeHcnZBYXQpfCZYQnN6w2r45bVGvEWpLVpRqGyan8dHSDrgNeqiwKFZ6683f",
  "key2": "FYbsMDE6HarpPwfp27rJJ8jxhkvfZzJvxQNbtsZnfGzedXoqemmiiTJfaXvVRGxRwr5RZS3joUxdrweuwgsXgXe",
  "key3": "1kqY5Sw4xGPv8KXgZDK73mbQi14XhQeKPVJzKhoY9g6eEuyWkPK4hVBG8zFbevB3YU7m5BFuTLnYkpyRQNtRuh7",
  "key4": "4jvw5bAKaacdL73XsmRkR9XgpdBFckdcExpHoMg1M296rJvwBw9cCta68eKHRRfkwb8ShPoznjLAhXpJUi68VPUW",
  "key5": "5sZoX846qBkVEGh1qeAA1Kka2K6WWT6jJf5Hr4bocazzmmVC1Eqdjep51iqJGokiwdJ6ZmbPWNFUrFrqBuSUUxJ4",
  "key6": "59UuB3Kj7pWVtFczXTb4sB16VcySMs3kbEK2gBbhkdRgjL9geHk3VAFgEU4Qc3UwXFMKNU9Ez9pwevH3kTTgRSCc",
  "key7": "3PgfpGCzCRc7FjqJZiEtdUTvN4cYoLAATcHhVJTavpcuE5CX4pY6WmAXqJTNYbMg1vHW32BhyhTQX9BLAe8fizbP",
  "key8": "5X34ybVRJ3Kg2bqUKkc6Awxmw5XXxD7yVBDkLEz1vEmP63kQz5KbKkiEQzxhpdTAwwRHqsQq5o33Tk2pmjqfpvKT",
  "key9": "36ZEVZ7iodQR7NTPrhbTcLiFb7SJS16QD52ExW84UX9ipKk1CZesbchToxH6QQHogmCKf9bGtcCkpBL3cqpBDjnz",
  "key10": "5mcQ42pxuFs4qTfeLwXaJr94tRuq1tEYC6cUAZDNPjDzE7bfQopdbPgZd6wMNetCWoLrNqtM2Pi4ENFqUzipxCqj",
  "key11": "99jztdHzwd9egXudUCgrn8Ly1xoQALa94qYf4MzpvzjHbghZNHLRMZt8QpuHEcK9SXKC2hpvoVTC6j7E5QGbAtL",
  "key12": "3PGxdN35UJqq26xRidSUYEH7VCXKLr1WZzmLZXtfLBFDPQ6KydgXkvMNEarwbv5r1LFwGy9nVtQGNyMSu7sYgJzS",
  "key13": "3TpD5NawGvTX95cvoVSg2Wzb4ATxt7FgudPS1Xq1GHZ142b2u1Gxw3keKVLmWh1szKZDVqBvHEpsC6k6fXdXHYkh",
  "key14": "2ARzLQirh2U22C6EHtxNMdru6pn2DVXGig4rh4sKeT9ZWjze3s2NtW8yMMTgGfa9Cdu7bHBsXXg5VcHLitzTq1bw",
  "key15": "4xY7dnLjLaVmmkFRNDasYM25fQ1WCBXeKy7Q2HeHCgnhNGUMnJ8jA4DvZP5r1dcFZv3LEALhyGW7XSbsypRfYCH5",
  "key16": "4pGpoyBmXFA8jAebWehJC7R5LPKRYBBWWTwwLWkagFzt4RNSVn58z5CdS3sVxMiN9oNgTn9VjJJMfwn2GoPyFJcK",
  "key17": "327no1cyyjTcx7AJdVAu7WUbUikgbFsLnMjFMML6vnNBDWiiNT48sYk11ewi6rn5YdnqfQTwkdN1CvyWVjLP6rqv",
  "key18": "4DiHbJVtKdqBaWRJh11YhpmkGySk56k2xCYrxKQnpFNaTc6CqKgtEsmagW8WjhT1BXCLqjM3q3se3MFWH7kgCQ8h",
  "key19": "RwTwxsDR4E3wEt8f8SvAsqPXXjYLxRZ4p3ZskH5zmiBHBsVtEiMQckTeGXrNeVjqH8ZL17wVQcMT48P7TDb8orx",
  "key20": "gpdnQmajvyHwK3Po9h4H4fyaPFh5jrHJXweTGBUiEtnFczdRLSe4DkEWKrg5eCASH1EG6iKmVaK1wTwmvqvN1Bn",
  "key21": "3wn8wYYfPTL4WfXA9ZT2qFmQAqfzk24TZtBxK6t7D4nhor3ZrPuJtNyqgfo3nuuNZLgrxbDJQtCSpys5CjxaGFj7",
  "key22": "a8vhV1Q9mXNNsFaCAsdh6upiHSLH45tzaxfiZwDJpLDuvEAYQ4Gfi61CJBP18eB6nkyxm5ajcb51UTWVKnHncj7",
  "key23": "WmjCVQoNZiAf85Xrp1FdoLNaZ59PVirSEhHAQ3HnMnfvjHh571fYoRMo2brcfcYXxBWENSGP3Jfr2jtQksWuUBj",
  "key24": "24jp3Kfp5wpsMxQg1TaSu1Uha3rLo8TZ21hhwoPc9vR4e7DiXiWxFidQeYwpiZJMMNt11VRVjLNkGSCqi2pPVYJX",
  "key25": "4GUiz7PT9QYCDC2ks3jFyQ5ZARBZgCjyRBiFVMv4o9iKV9Y5wbjHB4kWmgRywdKg4qZy9oqz8FXrfKsfSFjAuyZ4",
  "key26": "JosSkkJFAH3jfXVERLHfmSc4oMXRcEhh25QQAAM56d1gk9ArZvqCbcEqmfPFEZ7NEPygyZS9r25hTWUiTsfUY5F",
  "key27": "sbPeV567rqEobmZk5stvHGH98y7sKtgmAKNTpApy47PzzNL7VQE9ZTkB2TVTybZUfF1yjS5QdLEGXXHucw1gtHZ",
  "key28": "mpFyQY9YqxSTHtFXDaXSqoYoRdhbeEKGd4ZuE3VtPztL92U9gurUqe9WSJbjMtP13TmgoTDGJJQsnkrRCrNrRbL",
  "key29": "3VFVRf4R1VzvK7PZ7YkyGrVZs7HhVc3QCyd25fHjXaLtHp4BvBwsGihA2okog5zWGFSTU2uec7Mp2SDNiZhaeLjC"
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
