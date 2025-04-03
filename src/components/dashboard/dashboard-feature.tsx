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
    "5412CBbfHuFsoWEVtKBK8SL5ek1zGbz29QBhLPXb8vDqaruEq5YMpfCQdvSWBTGBUmkaH3fsJPSCU5CPQpdCP7F2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCT6BCVRKerJbxGRk7RTH1jhARyz5VYvQZeg9YBGSnmY4bq5CgBfwij8XiR5R2wXL8KJjWz8H4HycyBZmxhNoDW",
  "key1": "4bFCwvv5c7cHEJFJXAEUgKhxwZPv8LWCmBCVubQeDzpFqFEQjiTS5bV4vZts3fsfpDsnvnEThodEWKHQ3eVKLx1c",
  "key2": "3ssdQzqtgi8Ngy3rSSi4at6Gr28a26TdNn7cFMGYLCMbLirFW1zEddyYepHv9hFpyA8GviZPWK7JHYpBph67u48s",
  "key3": "3JQrmWdTiU8MZdfhRZrsVwuhAaFv3o5NEjbec4YAkfXNEywkzyGKT6xP8hgpZ969nQ57AcbVocPfugrmkW136QjE",
  "key4": "5MzpML7jg6uM3ZARmQjHT3U5rmaPZQCECpqy1F6v72tezcpcKPiiuwZ7sxS5tmpg8PKEqVYXs32af32xxdSam2Js",
  "key5": "5CPSSeGPoohP5EGJftSRdAF5RSQfoXggG6FyWcxhVSD55siqF7vJq36TnMKgvSnFbSXsJ8Z84WSS7QKDPX4UHBKY",
  "key6": "2AFvxQaEJUXC4dfQPrjFTr4qmgPMoKmMEDhnVcweLpB1mqMfRd1bx35e2ZUaMK9R9NpgXbSYLa1sVmSM4imXfiBg",
  "key7": "5AUhyrL3iWKQbESyXNMVNZeAN9g7we8U4RU9eH8GEShVeDA6UMiQ2hfBcQu8X9iJu1mJQRAxGWTDTaWmKgBrtjV4",
  "key8": "4sfqkqWryzhhgTAmu1HdC1Ukc9LSBowh8H7fNi2fNB7FuY7Za2j5zUH5givA5sMNWjLbFjMHCEhxuDur22SLquup",
  "key9": "2gUgp5pEyaKVzEa4CS8KFQL5TY4yWgUNUteGyjqfKkL6Y2kD7xDzrjdaZmUCRZ5DcVe69CXuwMT6HJ5ATDAcnuAs",
  "key10": "5DtpHsmTPj6odEqadD9dW2QVTb6wYtTpdimkEfmpu7B4vxvd6yTsponyLGDsd9qgcdZjFShCgDF9ybqwj511V2ch",
  "key11": "2sPL1V7xEt9TSaufjyxRUxU6NboAg8HAKXFNSR6WNbvjfQGaEnyDJY7zsEUteYmYfimR1LxkuZ2tyXQv4iEJd9mg",
  "key12": "613pby918kVswJLzZzARB7zS6kMV5R1W9goxtNPHjewcXzCnpK334vLQQujdXAM4FK4vcRouPEBgo7vpcF32yiBC",
  "key13": "5DpMtTXWFFgY7VEmA8MbGRFyLKS6gruCFjxTUsFLYofdG3UArTr9Gm55hhFxZi4uP99XzVyu7kJ8rKnVRh7ur2wr",
  "key14": "2rmNioTjsKyJKY2JkXpabsDYSDF32ovce9gjGjf8ZXcALqg8NNtCE2HjA8UV36Qd9Z8Uj5MtiMpx2rWLPPbiNAX2",
  "key15": "2Bpx76zBr3rvbybmmHPSYQqMt7Nzdbp9fJLLD1chvGPixEvaq3HaTXa5dh4p2YZdYomQkZCzxH3dyBxBKhDD6VEH",
  "key16": "3Y3PyMGkCWeLMQfMqPjepc8asN9mRinnSjs9cg3g4fUW8QdYr57CsdETCoxW3meHaeodabQA9crfJ5BCRDZEpFno",
  "key17": "63j1MYEGb2nu85JxvVJqv1ADhcWcyTUSSe4B126Us9KgotCEhmd4Wqp4uMMMH4hbUfZgPgC13BQDK8op2P2NDYYX",
  "key18": "2sbLWz9uwxTQr4WJBQs5V6yAscEYBr1opDHD9P6Pdmkp33ukmKn9xYoWQeUvf7AdYdQwJFHd3w5VGxB7mBpor7b5",
  "key19": "fK4FeUzLrhzX7pF6W1qozPgAok2Q4T7HNZEqSQnbKjCKMRrhVMjyMU4bL8kB7wVJP88rNs4CLNJcAHMjtWwNifp",
  "key20": "WqgLchdHRTD9He9fJAbKv3wdX483KtLjThfAhxX45rrnkze1oicqQnrFWfk8tk88Ty9TyJDpZs9zwABgVoQWUNG",
  "key21": "4Ag5jPcNBEVFaYS52q6N5u7VzqEawonaY7rnqkKusToi2znnzdm6FE5aXzcH3VbczfTPUSb7zRvTqCNgG5qzETTa",
  "key22": "3KdoSzboTTBWc66KGYBTU9egmCArNzoALnTaXKZMnofzyZdrH3UG7bScgZnSnN6t7ZaCiWuRKSQufbZbKcH5hRmM",
  "key23": "3BMJ3FEcG86y4xJPTYSJ8EDFAacZUXGxb1A9KH7B1h2sMaoLdfE7PJ2FCK6Pqn7Ct9pnLYNP2yE6trG5L82gLTKW",
  "key24": "2upozkMeKYYZZXDdptFnZTuHToEy5TeWWMFY4sUpWSX6uKQnxPSNZR5bda8wptYF9MRBhtA5pPq8qvBEjARQVueT",
  "key25": "3UpTvN7fwjuT3ZmCkTkhpbQyee2XopaPfp19cy5rUBkz1Qv3md38uJngEbCZ3qxUzdLigafzJ1ypj7NuGcgNPuo4",
  "key26": "GJ7TYxp1dpAr5bBgrgKaBaZ7Av8AJdRZ42zAFWNo5gYNo8aJHyHn2SKs3DCF5tFVUtRcB6RcrLtqgcvpTodQ2m5",
  "key27": "2Joa8eJWNER6Xup6VzvC2byCWLaWWkH8vgCNz1VeXm5a4Y4iGT8g91KUFfuWUrd9Vu5v1gZYiqDRhEC3QfhV5uAD",
  "key28": "3gtukJEUse1cdz9CXro6TBVJKmJ8GpeT3aqPbx71qxXmm1jnrNwnCZhJ9csabrWBXqnaEU3hASCUV6yPoYn4DfLM",
  "key29": "5qNRhaykks3kP3AhwBun4iczDs5hfrMPbVkeFpuRWmveGELQYpjFUGqCrQNFwYToHNo6w1s9nyPjozc8Zwno8TpR",
  "key30": "5XBcgsTc2jSmT3E5vFxN3oMhDsKXaZGCd3oGvE3n8yh7eVeHYkbzLeZPAMAEYzx2mxtnw3bezijeZuGTzXH6m1Nk",
  "key31": "4u626mctgu1AfAp26C2nF13qxZQZuMadY8JPQkZFkVd9dL4Vs9scXu3d8BFvy9X7Gkt8qzxjXNUrzDCSFWkVzp1x",
  "key32": "2dih19p6tr8n6J4BCv8wS29gzVvQ4NmVmEd3KEw2G8p2hWCdJeiDKqmfVp5CUFpscJfh1be33goBJnSY8hCYA23k",
  "key33": "3u9DzakZ17Ue3wnDcNgthmGaqLknLN7tcbyNMx9XHdRuPVsgmv3dUg9KLa7HE3kaq2iwDPLeTuUcvacWDwTVVNQs",
  "key34": "5LmHKPqWu7fcZtacmcXAtHE1h7eBSVujXKww3rggHmucqt2JcWcj4M4kRkT8YguNZZHwnDoBfGopJ9pSL1gwWvHE",
  "key35": "61S2w2DJmtZSvo62S9ZYatshdyqHMYGZcB4Ji1Q8XYZ6fzkrAHVUpu5HUDfdN7gnV1XeczxDqFwK69hzmezeB5xW",
  "key36": "2C8VCifL3HL5ST7PSAeWjWNfwDmSCz4v6tTAgry2xNdsedX3mecf18Gw8aXtNikkY6piXadhvAZxwWXoX89E6UeN",
  "key37": "5mLQyEMJdZxZYt64sCnKnMHCvgXMstfZdBcX2gY24wUf7w8zBroHmvhHENK3fFnMK2gXjTiUB67zXguJuqnic4DJ",
  "key38": "2W2XnYUEaGzcmbp4cqEe4MCvr1BJxdUFAyzx8ofqKiX8EHZgJo3Pki9Unyo2hGUUGDW4M8X5KLr8R3YLtU3eZq8K",
  "key39": "3RPqcQGMyjdx8xwVEKfc1GALvUu3t5NjirLEoMdhfUSX8ARLuY2DWC7AcWDj3GBh3jQK1CXf3dQ3iVEcoPz9Z6P2",
  "key40": "43ycH4Fg2pWmh2tM3xnJLvmmAAkHMbMVrkSr7aupn7SAGhbcipwcRfbft7DhrKLY1zAYs6zhTkYgRs6tz3SjHMPy",
  "key41": "2aboCCLqkvwDMUwoNvboVPzq4Nwe2g8p7SyviLA7D8ujEQeqtyDr1fPB77yaKMTKAqK2V3oHq4sdNpnMZanrpbiL",
  "key42": "4unbJdR7vL22aSvNFi6g6zmrzx58HYBDJzv2hgHbbs9BEkoG7VB1jAvuxADX4Wp9Dt43MTj42ui8KYmpEtnAKFE"
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
