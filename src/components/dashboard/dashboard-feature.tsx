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
    "5mhF2pUDoLPDTC88yUz2DoHakunqLWLpxDQw9TFrcXywnVj7eRiERqaoXsE4kXzvLJF2XFC3ffMjEfWMoj1tUzbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPeesg9QwfQ9qH62zuX4qd5VP6qiyNxvouCT7RDFRqywQc92bSnqsXT8ajoqMY9a5hNWQf68iCTZPVbwV65swU7",
  "key1": "3vywPwYKmXMhoTo41sXvqtPEVJeUCzdfZVae4NSmUagcLC9CYRsAMhPRjRViD49RB7aAt77JH8c2BDBSKRvVjnFZ",
  "key2": "3D5NapnDW6owjcSd3jhFjdNjV5zg2DisR9JDSA4L5ciBEyN6AZtvka8cHToEqZkAHwEJTxPo6YTFZ7MrpeWwoQK1",
  "key3": "4kvB7J59wauSNszxk16LXxag6bVoUqH3NLm9JqgXHQjB2vkM7R9NQi6NQ7NqVugdVESvuZsNAaKpYb4yKQEPwj5V",
  "key4": "3jj7XNXahn4yRQ5D43HHKZPBaDB8FhEXdv1jTbvEDDJgGCFhVrVQ8fE8i2ced8gobBiGbwgNvHxQ9mVAN9utiEyd",
  "key5": "4HueKpSDUsQAGrSHhoEsbrk1pZYQLHq16SckJxDntHo7JQWovdQKgEov4td4bGZoo5TkCCcDPAYMssYuB7oAjtcV",
  "key6": "2ASBGj4rGC2pgSyy2hVBAtZNF6UGkN3hgjc15dq5Cz1EuWZ1nTeT2e3EWt2DekmELG2SArcmaMN2a4m2JeX4DyNQ",
  "key7": "7KfYimWUDVKt4DXLJV81waupQDpSqymbhDNzhgmRz9rt8oqqtHxHtkuPdnrEDEEqy8H1WBC928HhHoK5NCyHgMW",
  "key8": "2J8bVE9b6WZyVUDdyFbJJUFCPUet4VUooFcddPhn8kmSNyLZaLwzWRSubEa3koZi8YTFkuZFMBSocP5LqeU95Uxu",
  "key9": "4JvrZZ2tzrXxndUWfcYD7SP2QU2bM22xTuDomA9XgeWBUDYnqkKmhYspvPBvXKS3YwTpkjf4ypM4ikvCwFzsjU3T",
  "key10": "2j4wKkzPaB2uo4ZvKrSanGPXt4jPY48ZRLn6i41JsYgNf6kkWPUXEEQcTBWQJFzf9u7X9mw1xcZ3sFeSZfNowmse",
  "key11": "5sRfv8a5rg6W1X3kLjpk4Vy9obBYKj5rH7SpPiF5ZA1iAggRsxv5dG3AtAFfsMDt8FP2ZASKdzqqdhhiTdzuVRfs",
  "key12": "ujAhyujp2JPzuzNY3g2SxsEvKPEk5LfWiEQuiiUbqr6g3j6BnkKjczKnFYCMsKkv67KqVj3bdrQjmMZyinWbW7E",
  "key13": "3iroeGo9JBs5pg2RiANC5vDZLRCZMBnxPW78pBAKX7mwUUAz9UhutYB2E8MSs7DiX5TgkFVLgaVmiyKdUEzdBwUr",
  "key14": "4iUJcyYuFpLxdcQa23e7y53aev7SC9ZJ5AN2Ya8YnpEGNGSeJfAZ7MUdnqapeB7JhVscgVnG5pAEs54krTwxGKVq",
  "key15": "3RYKMvotQCyHoxy8UiSrVqhPtbDYAP82HCPWgNHMrhv4zTuoWZdq4kTGAeS5KsWGDExVH8ktya1CZNDbMrERZtks",
  "key16": "4fDMw1cYEcoscTvLpionCm7NKJX2VvTfsXz9V1GmPRhnF9Qy5yPfCRyRRCCU6BYEcMnC9U1cH5og73UbH1FAi42E",
  "key17": "4kJ87n4So8MY3Zdagt8zUHAqSbfYJT9aAQjuYXjSPw1w1dM79ETZdW8GLceL2ntrE4G3uTgCT7ENCxVLiqFqBRWq",
  "key18": "3wa4RUa1UGGNdJwUPD3HjK7johRGLCk4QGzPwoPE2SaduyH1YkEkwnK3M93LcojGpL3rZziVnA7i9YYKDYWxxPFx",
  "key19": "4XpeKuGknp95bvMUgfpWDnasnwCBFhJiUrAqkczwFKLbT34e6CP3yxBiukmWBbkryZRYpuT2UJkGEz2FWHBqSy5",
  "key20": "4DRpBQczCYd84dcawhnqATGeXN1feGqTyf3cyb89xERPQ9DogDh21dLyvKPqwvU6i5nKz3km67PUENcapcAH3zJ4",
  "key21": "5uhKrJoFu1ZKeEp29TVgmAGK5UkiDfr7B63v2d7LRpj34eTfFvj7YdbL94T58bVmFtbKTaBpYpXjRaG7aa9F5YTj",
  "key22": "4DDyAKp62UdnHoLdnewbKnGjLvw6DnvgCpZk577pigyrnPhANUtMtEjbqtn7mLAmEFf7eBZn4ssSdxbhtcwYUyH8",
  "key23": "eYANVXEYroQyHEPPFNfd7x7sDCmG8uMAEfN9nmNaCNLJWXAp6wrw2SnRRY9sjN8AvJcCTvibmK8BX91Av7Fh4T5",
  "key24": "47jpospZeZDVHtZJjX82VDA8sFgu2QEcg7VBAK9yrVCjpwAPcy5deZUW61Le37NzLpqYBfNPznKAeGFHXqSJcdWC",
  "key25": "39iL4XYLXwdkimthk8hXJJSf7rSMi8FD8ScAnymg7HkzYa6fLMMKweWqWqdKo6ia9WmyyKgLfdWBHJc289ADW7wD",
  "key26": "4Ee8uEKaswoW4gTjaDKD3W6hNu1eiR4QahojutVESRYrtfTerNdQH1Br5P6bZajJQmDJHYa5aMtApWHAn4HRsfXm",
  "key27": "3RUXhPp482cHUBmZoGA7ZLc3PxQX2mZrs1R5ACKQxdSXaNS1ptyWVDUAmcx2EpvJe3WYPKT8khh4cqNgeASPUjSQ",
  "key28": "2Sr5mCg59Ug2uHi2tLUyCpurdaU1ydKCeR7ShkyMQ8rJJcqo1g5jmiZYtCWhv2bTHfmm25kjw1Pq1oYMUxqbjPD8",
  "key29": "PxMvadsJjQpcYEKEPWKPQGyaow9WGicD3HgL1B5nWScNmfJXfiv7u8eSjvQUNTFtSN15HY34wrc67hfUtcALQgA",
  "key30": "kaa6bz4tM3dW8Uycw1kjY4Z1j6rkTB9FM4o2J1ZdqbcJDeaMhkxiiL1PAykXUJoT2yp8AoBsBKwKmemiKgLFCFK",
  "key31": "5B5f4Ha9r19sCZQz6GdyuYEYJQX4sAz3uPm7szdYvttpwgfwPdJEeEr8dRUz9T3qR6GP1jMRD3US9ms2FvTXVv8H",
  "key32": "4TfLZXVXk3Ang4YmE9hRAwziyUdXAfnu1iS84CRqB6EuxFiPJXx42CWxh4XXXzD2Nqd2FvqKWbLLEusfFnSqkW4H",
  "key33": "2jK8g8gmVB77uoZ7VjXDmvC4QfV4J5QYFvVTzY8ujRcBdSLFsmqNBmiK66sBFUVqRtssgkjcY1XMU4RCBaH2XxKX",
  "key34": "SvKiwoNMonocHThZKEFCXBkXWE6d23n4Bqh3jHsfbUvFrtwkLG8HarN42FqX1pZdJKtQrZ6ERM15gbEyRNwFr7a",
  "key35": "4UwgyGeMjP3HysH9eVCLAT82FC2fqukoZ1pL76efpiCAYsohPjz3memtX3k4DMCQBV2GmNFLknextf8idRF2HLjx",
  "key36": "3D5mNxVckSMSdxXK7daS6dBBCi8Zxfm6Q1KmXbAmVsfkUMbs1uhyxvrA3SFmmuU3K5gK7YCqNDJgmdMaVoKCBcYD",
  "key37": "5iaLQnBSZygvb5aZdUGsMYwdjLDZKsBSHHTsqYV7uMGoMvSfLvuoW8J26Xp8KUUMGzWKXZqJnq5kp3wVRj4eXQ2p"
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
