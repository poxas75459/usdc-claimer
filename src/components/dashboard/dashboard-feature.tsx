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
    "4fTKSocfZNto6hdzfuUkadtq6i2zVXdFnqFwv5SRMeGsNMEjBTMWMNrX9V9CvPmECSucPTW2wBPrTRXZiVJcMPWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fFkbmZ2zaiop3kJ472u8vo87QcJAdXcacUfJcLdQ9w7BTQUhTUKH3ub2s1KP7KUizzfg4RK6NLW9uDypTKap1xx",
  "key1": "5BKS8qJ1AcDRfQhuwPZ115pYKprD4JLrZ35CR5ayt8Bv6Pg9BnPteLBMkhfZ8KNtxmvPx5Esr1D1ZpXTq88hrvZh",
  "key2": "4JQZxW4QvV4YoV3TjqFfycigbv8SH1oeb5dLeznDNmGXjcN1xyo7ghCt6d3513HKqnzCsMnHwpsLjVrqJK3sZRaz",
  "key3": "5UCrkvbuzcsqhN1UYaHifrSBdRy7yr72db39L7USrS6YDfhA8me2MGgYN7AxD9Xsnr8kUS5HgU5giskxBhJ2vrGu",
  "key4": "AWsriRufvwdr4iq8g3tF2hFexsrPMLPqRgZKBYCDnreKPm3yVQgBtJuHeVjsUSoYowneSqVZJeY9HopSGUbHk3C",
  "key5": "2Fe2Ufv2tD9nPUEQqCJmRz8yXyYBQZjXwpEoXhpSJZjLznWU9e3qXzpQnUD4STQiXrBELWtEMAoi6CweZHD1tc7p",
  "key6": "31bFf87tQiaAhDc8p7WxY3QLLQoE88yL7gWDomZMvQ9AycvR7tzd77NXwFSwx5rRwaKP9ecejfT6WNVa1zSd7amz",
  "key7": "3JsbMr6h43J3Vw6nga6mkmFPjB1NFLgWaTNADawDPoCRaLaDarL2ceBrqRyVbtBUFVr49rjzijhMEAY4PYvwq6Tv",
  "key8": "kEMqS5NkUfWZ1NmRoCzq4UByNeNRVAvy2VJCtyqza7AMgtAU4MgSgcMeiTEiPEsRjcs11mXjs61fSTd9Rw21nB9",
  "key9": "tBNdDMaPpQUuiXrRPUEX5dttKi3XiaHKujzeLY8tpFqQgjSVVAEpPemHztZarPf2AhwFTxSyYChcceus8SxKMkX",
  "key10": "5iDXd51A8MqqG42UeNUVbnLsHm9SJh22Eq4avwqxZSTw6t7n68apYRQfFbuKhq2yb6BrF43gRc5qebi5EGM9opyC",
  "key11": "iRGW5J6uPbj3nJ1X4wQ7JyLJoQYhyNKonLmN5B7rsfB6jJYjYYfBMG8LRfXDLq1LyPKM92gSacBrjDxfwUcy94k",
  "key12": "3wSc5BYNQhFYFsWHSXPcgpomPRGuAiTjTzvC3huSwQjs9XtysEs9TBrrFnEn2tXCUbmYxFqTJftmg7bYpopM75c8",
  "key13": "m8RUzjApe7X1x9jMmXpABvxJBdf1tu1AsWmKG3iHYMs5o12dn4hoBXj4Qgjdm9Ad62AiEieco283vG4nrLug972",
  "key14": "3SAWfWiSBBbZ7h8RH7kZ4pC7wHZ9Ny822Yb6T15QvxdkMCtBQR9RQsiM4n6UCq6kHyVXLDhEf4nztpBiAN1APJHb",
  "key15": "3EgFxaE1wwMCvNfLMD8Z9ZtY7aRdiy1kM5HiHbD8XnQz36gthJJ7pSLsuYXWVPvmEprNYD8NhXDF7k7PeqWeBfHx",
  "key16": "5DrQESFw3pgDedp8GHRKyemwxNkP1fquDwBHRrzSRmicdQnNMERPurAv2GBqCV7m2gMm2BUovnQBRyRuu1pJ8tTi",
  "key17": "frWVAWErTnVPYzjULWifBjY13wMKtcbLXL9qrFFo6rbZLUdYxFh5eRFF887bGJUj8xdXHjD61Qwi257kqtu7tjH",
  "key18": "8Fa96zyt7YDqaFgMw6119KCDVCcX924jVhL3omFzKFruSMbAFUgQBb6ZeodjBk4REZnApJLmSU1cH89A92gBVue",
  "key19": "2udXg4rwy2cuDvoBEQp3WYRuka3C6m4z6rd64YNnduaDQvwBSasRjaSKLPe6UQ8Ktn2tVNMkoaUtmF8po3YPVyim",
  "key20": "3YxqaLHsUy5X7oSQy9irHXCL5Usktu9myskfMc5BpjqZstk5yL2D9ZbW98o96e7G8ahdkCGEDJpqHjnSPS8UyGDy",
  "key21": "3MsAmoZE7etGbeeVy4XLxPEM4xp7HmzhRFniQLeEZ9uDMWvgvkM1raa6EaVi5P35kYERWBUtzaKnobq7Zwvh7bzK",
  "key22": "4SP7m3ikQqLTWJ7JJGxieZoKu98bxj3Q9ByFgBFwTiu38zzdkVx7mcjF4Fqpptv1xyLafZvcZ6FUBALZ1eZzqvjx",
  "key23": "4CkvGXckbWXoz3FS511xecZhLP8fNPLNmQ3jpvKbv3yaeWKUFt3kdHLQt7uDDKTDgZEZgsrJtCeDBMQ9CTF6afgm",
  "key24": "2ezr9EZDkNgXNAWrV9bpKzcZUuc8jzjnfemF1qy4HYBV6JFAQvUEV85usPrk6gFTnSwehAn7LCprr5MPwzu6Y9J9",
  "key25": "5E6QBfy31aPYNVezfwuSGKWy68Lt2XQSPQNRhB3Sk3ACCmZyPq7NFWeLQgUYLAxtxvy6DvC1WG79PmehwewdjtDV",
  "key26": "3QQWzeWgvj2NEjZVVMVxmCWM1o9WoXj95hfghLr56Mxufjkp8aM8kUfAK8x5NrQBJhF7gnqUpVvF46qLMNsxDSpU",
  "key27": "fdoczPQ7ueDy8Bd9tUjrkgZdSBvHvqDydt5H9oGw1rzTBn7BEgdrhaSScmeFBLKJRkpgtqmBHFUWwbNaGF8tKbg",
  "key28": "4caXzjeUuomEC3U12P5JBJ9otSAyPq2wjqWCPUUyMypv9PpKRbzh4JskVahfaDCGHpHwUjWKcT45abT83pBjEYty",
  "key29": "2t4KNLG4zBV7mheXgsbb8m28MCThAfN1zrSTtnnmnpoRChkKdoRMuR2xMQR8ashMD9tnquSL5m6shSCkTVVtWD5q"
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
