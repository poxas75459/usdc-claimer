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
    "2K6ZftqRDghGmGSW2w2tAY4TkmGGvkw9EDtgkqdoF9EcY1X4b3bF9HCFExooHHgATD6Qt68o72ctx6hvV4nN9w91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ak2enzK7V5vS4wFMg4VJWc24HzhZzJLdzgdRsgzA37RCqWgUDU4Gd4EKBM6ki6gTY5PYBCHLKo4VcVqcezD93Dn",
  "key1": "2ND7KaZE9Lnk4ugLgRDwG2DBUFsUK6xziNsW7WmSdSr9t5TV12VPUSWDFfj9yQcKnA8CDgzR7jSAVZyVPdbEERfu",
  "key2": "4C3hhseigHMcXHnLFcMeTJinTS9MtgZT2dehuEziDFyme6wrkCk4X586DB32ACc5W197JQBKeAANBaTNb4p3ATXk",
  "key3": "ePTd8PW2H5hfoBFy9LqimstSeSvLZSytjPLW9kGTMciL9nx8dk5bDCaiQWkgxjDTRnoY93Lpm6meFgWs8b8pcZk",
  "key4": "5KgwKXb3JLSmBTCjn2US3Q3hq6eCrbt7W9adMBXhbmJN56VKfmifA1rytKHzPMWxkXf5Z4EmJsVd5w3YmEq6rT1F",
  "key5": "HN8qMTDyYPjRay7QaTwTRs34V7QgqzcEmpy47LmQpBRLq8bPbidTiynwQHeG6KPHs9QE18QpJkRNfrnULv4cFFM",
  "key6": "5eesqzrF2A6v4CUU6tewkNd2W2Lcs4eh4dffiATznRnZCGzvSUhZLMq3TuGYC8UJU3myTzHAFTMYQh5yJLWAp9Kv",
  "key7": "FJSmMkvAieX6Xir3SwLDVUt3GmEjCSHfaV1CJjist8W61zQTMkjG11DoLppZTyVjsSRAwsx4s55WuxMECbwQRsr",
  "key8": "5Cc62s6Z4zRCckyMADAeEC1iypkpSVjRsfMNHPeqW4snRgeXQ445oUgJ6bGQzQ1FiZ289Mm6FgjWB5cHAYX3vdnY",
  "key9": "2JNZcmnYDySa4akuhmMeZjeChZFwrmm8acLq1txMp1RCaoEWi1iAFBnPRMDnfFM4gTwTjQAppAxb5Nrm3icDEoe9",
  "key10": "58mdL17tDBys5GxtMwCVfaCyrKFDWaGxYvjxfUn1rZ6VXB8pbkPYHtQPbs2cERp2qvV8yTSp8MYJefjVcLXJbSHv",
  "key11": "5Nz9tBpDb49KZ8a5RHzcGLispWdDVk1x4NinbKR7LprKm3Qo6oroXgSTvKV3rTEqoQaBuaqPn1osCb8LJoKLZbjd",
  "key12": "5yWSJ5QhE8CK27qnh77yVgqWqRseRMTk8aysFfx54h7CMQDNW3RxNKMnk8McH57vMvBVT9xzxFcLAaqEMMDquMAA",
  "key13": "51vcm6vgVZY7U7nk7tU2PQa7T2CD9duWmhqsNFtqeqFQwsmDj2MACsa9CYSSXQ7feAtp2me23saaMHP3Bz4MH6ah",
  "key14": "dxsQ2cSPDrsDJfrFohonri3h3UrnjFDP9grqCne6sazfM3BUP3xcunmttNGCpx8wh2LvoT34yvtje3yZfuubq7Y",
  "key15": "2UAYv3qTQN1KtcmBz66qxbPnGsUFV8L1TvzYTY7MgdPVmcU5snAAwzpuSVrKupPd1SUfAtdBQAU7a9J7uwkedAuY",
  "key16": "5FkoHVXkiR6gdt3vknoroYUuLCEAMDFGguXigpUzSLkBRVH3rqVRnoD2Hm1ybQxNZaSB3L9gzxsjzCNBgBM8sHoh",
  "key17": "5tXzBN6dSg64Tc4an8c3voYr689HFJg3hxYk4JiaFmEJAs8d7BcrEHAQjKTnAHkKoVybZWguhWXFKeQJ9et95iD",
  "key18": "3R9JzGsQ4up4StE3XUB3SRaVsXmLRQ3SnXpALQRda9mBCa8usnGjxPoxFsDt1BUqWi4mMF1gFnCEGjfet3xnPcef",
  "key19": "3KLTp161WEFTV4kL2Dy4Ab55JDa5zdN7WVgj6JLxbmb1FwQjFHda93AoxdLFtLvr4ZZwf3ABgiDSF6i5TjVZsEwP",
  "key20": "5DyqHFdE5TvBi4cKWVJvV61cer1HfRnspcMrSsJXju65whvHWM5nDrEb3WKGHiEyVkwrNqsYBMqy4xiyiPLrSmgP",
  "key21": "h22wM7eV7YXoyGgPLK11V3yMdWgwmAcj2MRWvHs2isf5saMFGqcEuPVKcdthG2hU9UbGH1qnGhVtApRsL6dKuRc",
  "key22": "3bS4M7Coo4pb1ayjc8CzdjMB44JWqyth8FFhnrednva2jj7CWqnWupb4fQgZpk1z68AtcHRQ2rrn95SGC7LgEnDV",
  "key23": "2BG3TgmcJFFZfsLr2fjqpJ7Msd1oLkF9sADMeEdpK93wbqq6DXCV9oNvZhphaVARy7c95o9LqNAg9p5pqpvx4dXQ",
  "key24": "2dfvXVP6JNeziQ4FL2BkXUYyrKbyD6nvv56xM7by24JveBG9WVgtYuzamECGKVPAW5LGNk9zBPaarNWvwv9ZoY4N",
  "key25": "3mAFygTTLfuB8YQ5xSkbCgigqoMmQuq3npX9vT1LP2unxE8Uddd9WuWAjmFHNLggad7H2VJFqxWAc24htxCob1j6",
  "key26": "YnBPhoV2sjH2NnLxfyoz6V3hadL5CJHR1fBvbK9ZAPWAuC73SWwuVSYByc1G7hcAE2mHUGSuCd93pfVqMcVPaqo",
  "key27": "2T852TtXmvr26eEatc5rk9mBdshvVF1RpNC3YH7S455MxGu2q2c8iHTqGSAfujBTvAkhvQbNALzBUEr5RjohaVm4",
  "key28": "61gtKC9Br3QXvSgfgby6U15avxA9oeBWABTMeNJAoFMxyhF2aMG2M6DJFr2zYKiC8ba4PmWmg93vCeauXQ8b1f9D",
  "key29": "35sdLU31VtR7RpCXx228qKofiwXN4fWNNrTuc7k9PuE4Go1zDnJTCv6ohKZgCmuekKDqKsSJHHMb1gkmELYKRCNS",
  "key30": "5T5VmP1mX5q9ykF68LtZrjM3VvSHt5hNC9CiUDWY4PdewVgoi4Qgueyq3q7oiWE1fesGEjCG8tKYHRQBnFR8nKkV",
  "key31": "3qASyqnEFJfuTEfBtPRwZ6e7eyXMEaMNRaUySfEAccMJoZW5KUo6eSYr8vsoV2wXWcYFb5PTp3mj4f8bFQygGsZs",
  "key32": "4vJ2CegdbUuxyww7U5E76hLi8hHR9GM5rtFdzA1TjRxKTPxrQrb2ggQ2Si3XWziMCQD5RFBj4cQ7duTAHcWtbEpM",
  "key33": "4wGGUtr26WyPsBkmTue4wQkpt8drcAYWdC8qA3FwdmLubHTMnbNvHAUpSkBW5Rhkt39ke224S3hQqCi64RoueeAY",
  "key34": "4Smcu7Ydc7PU332wZQdNaAaKXzi6MBx2QkQZ6XJLVE6eXDSjE7N9oF2heyT28D5M3Zw4zQe4QQagiHm3nLmdNNqe",
  "key35": "2fja4hfLk1JZqdMHQtTy1aiCfNGQ8e4jc27KR26AxarSbyj4sV6dzoW4izxSAXLJafXFqBbcA9LBQ461beGigMHN",
  "key36": "2Tk9Jdht5eZs8BkAdm3io4PPdGEDevoanbH1xm6H4vCvumQg3yxhYqe8sN4uRN6Xa3rAMFH8Nkg8TSYur3HVpD3C",
  "key37": "63VKo8hdErXNYBLnNjsR8CeDW5UDNg8C5nPnxRcB6NsLQ3HKNNa31kqAd7PQWqarNireoN3g8yqvRZAahU324dKS",
  "key38": "Pc4QcAgxi5tKTJHyCGdjkJ3itL3jKnrioy5bdL3SjZVu7jmo65W2vYZVr7CjH9Tu151i2BJrYuYfjUJ739KozGH",
  "key39": "2vqr8DHkCx1s93DDxVP2anuSn9e4JRzSaxUHeEgjW9r6s162qbUmF9ZymCNFDKZxyGFa1b8BcAs5Ghqu4FodQG2u",
  "key40": "5xeFofbVm1vtvsFTs5shpLvofpMu1Kjm1eazXLpUdaWoML1p6ZdC7wRmirrJ57QDCHQJoLiRBwxu48ybHYUXxopZ",
  "key41": "4vkinisV4Rr6EdQ5hjukqTAE9fQbEq5UtQHxZ4xYnc7chKVQ3uu3jhe36VAKnjjWqzaS4zAPSJw6cukk7NkCDQ5H",
  "key42": "4DEVxoojUaJqTn4cRdx3Jrk5186u5Tr5Sw35qNP3Xc87xxV8wFui5GrDbsWULLtCRBmkLYwYQTJ1F5TaQFzMThyX",
  "key43": "531B9TthyBeYBm37e7Yv6R7g3PRfi4R3bGpqRZnQNAUQuuWMTm4jfGvSxxJxszkUyjwj56gM4UecAKZTpzB1SvHv",
  "key44": "KmykZjLMQ4TvKGtqdEGRCZyyAueMFdwLCqoVz17WMivzLe3kZUTqn3ih4CVUC36hjW6bDnh6ACdW4a3UTz4NcxZ"
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
