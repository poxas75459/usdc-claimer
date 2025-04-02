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
    "5Zt6bXZGbXCraE6NiHH3CkZ9RQmi55wdzFkwbvJ7FCeztxUUWeBrX1syrg9NyKXiHQpMitYZHGvy8fDfChbV7CUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dw12AfguuiNRXYmAKhwmzwppzV4P7AbhrbgtKn5EuBP1veTBWogPqSiNJMTUiJKnhKFnrCDAZPmaNdr3CuM2Ngw",
  "key1": "2Yzx4gKk7rPKnU18zHEexHuLZyTCpWH4rrd915tiP9rTyNpqQK86uGRxkyMLNUhgnBzKWHgcaZdWHLcpXxPveRoN",
  "key2": "3XjQfH4pahNUDqcku8KQr6unC3RPp4LGvQuuhUe4iGTW2DN1RfgJtGU7qr45gpbm6pCxNBsWfopKeHefuicsV4Uu",
  "key3": "3sZGfkCHTCZRcbRwdbvjsq7KD4hT4wcdGbsazs7wJQdBK4wUpdPH3uVd8VR4pGtmEJWf1pKa822UerMtreqk3XPR",
  "key4": "jV4HFHYyYV77tKUeDcbUT67vAh6sDqL1eaxhhvJh4nH8y9JbBgcHez5nE1p3jA6Yx1R8uMhhoh7Rr66qy5JkTpm",
  "key5": "5oyYxotFh1Lki1qUQ6ZR6mMcua2fpdpWATPVYxSXvfGXr7uxPEg7AYLBx8XDPMFdZXYqprrik1m6FHifu3HNQi2T",
  "key6": "5gdQJrtwXxP51AogDQvqMHMquYvjqfVKZ9s7JrMK6FrLk73Tp4fXTUb7Lf2kW99442BbzhKNdkB68MT2RW6Bw3SY",
  "key7": "6iFDBztMnQsE5PWYGaWkfcstENHViHxWD7v2jbrE75BbAnPMGi6Rw9oDVRku1rmAwTdhoCFAkE2sMQikhhTgjhD",
  "key8": "49wfvWz3fp1MxFnvXWc92EUhzFYzfq3ANap94bG9u3qzudg4znaVbtdeZz6oXsBCbsLHgKHrSjTjdRdj9NHJCrqo",
  "key9": "49qUphJgBnqTmvMVsbeSdkTFEsZHgSVJrABJQtVek3QcYPBMmn1DxJbMM3eAoPQzdavQ3YYdybSwChGhHwGu4Y1q",
  "key10": "2uXGWX6TDrfEuT8L2aqyeUfdCeGyBUFotQXD1L7a419vDxL6SYu5Y8oEMcoAsgWSS4nWnbpbEZ5yoAJH9Dm5SPGq",
  "key11": "3mowLmBWhiaB1MiCjtqqv1CSrXkiJ24gWKU4BGfBqjGqXxKXDx5DSM1DxhFoc3gjAnmFW467N8Dvbq4USWpt8Qk4",
  "key12": "2wfujhANxRBsjtp5DkKm3vbfoJSvynkngyQaJ1m7DXHeLvNBea41nXXJE9YSNTyLPJZzSpaLPNnFrJ8mZ7ZTuhE",
  "key13": "bBzuqUJ7iwow8BrVcHg4NVLDXjENFE5ytn5U1tN8a4qhohRPY1tcJ51VJgDJnE8VnkTUMSwPLDWFDY4mexT7Azx",
  "key14": "35CJYLXjz7FzE98iLAFmbBPRcZJQCAQuCWGBeRAbPXCnudn4Uo3G88Qm2pXHoG7hp7322v8wGbadqq8uTzwgcGn2",
  "key15": "2tTjT3SkE1iueTtEHsRB7nef7JwG4pLjQ4JXD7RtUC4PFE8xPCzKgadhQUZgEqeP8piTJSqGgaGAEPKXeTT47Sk8",
  "key16": "2iFvYvhaFvnpTs56SXQUzZY6RqQ8BmnTZaYW1GCJ1VTj75TRWVy1fVuYvba83ZyXcs7mi3Y7qJ6ndPGP9nFwD95a",
  "key17": "54jP4WtDt19YgmCjnSdUF3sUzduBFSRyxeW7hDjpmQ3BsVpyJgvsdkerLp6G4eF3kuVEzQr61Y8AbNutf6FzRW7R",
  "key18": "5zGEKT71fuCSnq9KFEaDTmLmu4fsuKE3FabNBVRurtE4T6QpnPPETitk1NHAc1KtXrGSqd7iybKotJe14jZMdiYY",
  "key19": "2kWnUmKi5ZYtX3ieCo8hSrDgG6rj3hESJf1i6PYrPGCU4mxReAerEYGcsZR5CU1FnASeVbHF5Rbe3jWJNbV19cZR",
  "key20": "4QTm8veaLVVt4UuL8ZW8MUFSKfFYY4NNETu2C4JYFHDBhec8LkPcmPum3yD8ubcY9YF5xfkEAdASa8XjuFtmQ3DP",
  "key21": "5ehqtCDwNVZNHj38XVF3BMwkCx7AXp93ccURVnRCCJokdRCTHxPtcjQyETByYnXHoQddt3gsazUai8w3FozobyVA",
  "key22": "291FeAhHCJfdwuE2Ew5nnWYwQ4sQQt38P6o7R38cF1L1fqLBoYjZ3A63pMN2QwcoD3WtnKtJT7XVcuM9Xv1Bvdqg",
  "key23": "3NFUTvvVoqp7EBAgm4YzFbMXKzu8LEhexGPaxHFZUwuMkmnR9Ymvj9QvKibwPr9izFYzmr6mMW3FmuVq7DSJRLgM",
  "key24": "31jTPm7135CFz6DygU4wghtNSUDKfS1zStWbqe5oDxLdcR9ygTdYLswKPoQZMczoZ5TTyJKX1QtagxNhyfTZzzrM",
  "key25": "3v5FKWMrA7xjnkHAvQtU6ADyLJLHBqttDrTLUXHRaDJnRkMhkWzXgJpT7QBU3SyExDzjF4mNUyViQhHLdESpY4LR",
  "key26": "4oRjhFNjCz2HQ5bBKapHAPTMSYPDofKq6EsLFkKuMtMcBXTYQzXfYMXWFxARtumPp54mhkSHpDf8e6EggAmq3py9",
  "key27": "g1nhHTR5vjkZaqVWtTxc5LKrghKCvB1dw9YzTkFRNtCyzGWcW3yogTNsq23PQ2npYQnzoVaox4qNrgnV9iUhraC",
  "key28": "57LXY9FCYFG5QmX9zHkZvjkzEK3qMgSGsQUAX2ktU6veZ2ZcqJrWgPTFjv5YaZM6xRpz5zk4K5NE6WUvSp2fm1Th",
  "key29": "21iYWKgKhdGVed8NRMhNJbnCJ9UigK2a8grX5XdVnr6NpmbsEo22XPQaxqaLrSJEp4X1k9XrfmJB4dS1EDjAWnrF",
  "key30": "3ULkibCApyzdVfyTASom6RUhFURkdCTPgk1VVGVzphucr4ynZUxHPjPz96MsfaYFq7gLo2VREaL7GsgSeXf5Pjjw",
  "key31": "KZ16UHrQu69eXLtkZ2izx2B1v8xkHExjfNFPkMPHa1kW4DMfobVX9JmUoAb6prELzi9vPcN9uAv5cE8CsAp7hg3",
  "key32": "59RB25vBPK7puf1jSJiGmDJpziaSRKKYP5S9pfEoDsEvG6WQ5VnLqDSpjBgNLBhcRxvVX8PkRPwf5LtF9zpjXk8x",
  "key33": "59TUTrtGr46wzQKDawkRzphK24ZSc4LaafutBo2MVGGgfTJ2qP6rsKRNqhWodWYHxCpZnft6L5Uey9wMVRHeYxmy",
  "key34": "2Ub9FiXR9VLkhh9qMjfsucLWr9dasa18qZatypHZ95ZkCHzupRCRHycTCANY6dD23yGcD9KVQqFzjmhcBs8uw8ZT",
  "key35": "2fCQesghaWF4bAt4dNpDc8oeJr2ZAPwFXWABJ2N1jhyU2UDn8dCyaapL8zTrXKHehyDamWdu4SMMSRJRQzwKGp8d",
  "key36": "2XdYrXeGvAYM1AF6Usn8ywRtK1yjviT2VJTZM7SERRwYRMoR7MJcVqFWXzc5yAPncGG8hQ8VNXjNGMDxUebjratg",
  "key37": "DFZbrr3XLM9gS6REp2B112iauiJ4FBQjF75ka2umJp78Gh3xTyHTvUPTXKwhaRZAwtKaiXc7JcGTqzC3E95RN7y",
  "key38": "5ubRMxqEJg8xnqJCbnHk1MN9LCmFk24Uo5iKx44E3Es3J723Zujii648tDvRZnu8Xb5PtMRjmFURVZhHFRKPWUdb",
  "key39": "33ov6WXfMkp2W3TjRnK6ARDnHjdBABLY1ZYo6AghbVbaevZjQYFRdvabjGuDTVP8F1hotY6QxzCdnhdaDCUGhVCm"
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
