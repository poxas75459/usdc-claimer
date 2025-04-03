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
    "54TnNw71aayFtpUDgyNLFnHfS2Fti43WHmL2zEw66csh7sZdVWh7y3SuMpVZSJVE3GPLrQNeWJFfY8raW7kRC6F8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKMrrWqBwNKP9cpFXLqhcxMY57kRk4sw5N4mDAzppVHYBTFAGqLhhpnKiDn6BySQxoVZx25JwGesE2ct27PXtSb",
  "key1": "2mWehN2Q7N5JEZCxvV8EHSQtFJZho7CfSA5C724icjX3XkMi6iWG2cm8N6vYqvRiooespAx61PTbzYmDnq1ftMMC",
  "key2": "5S7W6SNW4ucqmN1xR992qrGtVx6PaHbfp4eWYJJc6vyj22MsgXf7seALL3iBjTui9WKVNdudKCP9YFC2fxuWr1jV",
  "key3": "3DMD1umgiSk6NwmDsxCSSDhXU95rGP57JF5H1jhb4P5wzjvR4tgX1uWJ4taSAzanDtpRDAF94Pt7esx184KWHNum",
  "key4": "5KSiUefiY8qeoKZtf5CMDhTHKHA1AvsHPn1Nas71eKjs9HCgC8a7nBrwf61KSC6dzQRxsywLLZBdrTV6KgrvzDPS",
  "key5": "2Xwq2kMY8UwMaQnooNg7ARkf2sporAz7WYf9BpryoBT8CiwkKkqDEG8Xtz7ij2smsr3MoZupqDsyTKKJdHBs7FXy",
  "key6": "3cEAHQ7wz3bJKoSK1WC3aGZJRdCAMHJAZfd6FLeMy1XiMi9guH3qreLvRBoTNy7DyX9Nmf9pZsGT9ZkjwQPjr8s4",
  "key7": "3gS6QTdeu25hNkBmQaxQx9h4U59JZLdDDCxXnFzpW3fkNrZJYA4kNByURuD3YQRffB4bu9iZCgXxdYkr9pUZKqvs",
  "key8": "472hMNp3Ka9amPyDSodkTQU8GeNKmym2befRTWsFB43JGrS7xHiP4cME34WndXsmbstr5PXAaUZCE39BZRfjvRpD",
  "key9": "tkzNghHPNR1MX6uYP2DpsL1QriUefQKjzVyebvsEE715kP7on9PAuEHoUpNcYP25pNQZNJZGykeXzpYM8UMK86X",
  "key10": "5EU9LTNyFczESwoQqxhNFnee4b3NMbV7uKChW3CLTTswU2t8ehh3967H8d5MuPZCHGQ1rbZT66kJjtnbKyvtAJ7M",
  "key11": "2zbiqk4qdeMgNp3r4DjYFMa652MGwJkKxuwEGxtnZMgeUrPRLgtWG8xqk2oAXaQ3VwxHsQcEbuUcwtjE8wPJjfAc",
  "key12": "3mu4TGyqmHzQyqmAq6QoacFjTUXqnFaLnPFZoaxvffBg7x9gKamj9t4tSTuds3gVnZqTbPwJESzL7qej1hvgv3CC",
  "key13": "29nvpciyw1p9NoeKbSFCohECx1D1gGKniZY1C13L3i3zDnaL9a9FTExpHRHfaCRjk1k4wypZ8XsPNs8Zw5q9S2SJ",
  "key14": "4LQfQcTs1BJ2qmm5afr4mTGbKifcvbKn9tcHQAhJ28FZwcThBGJCFFyboS6fomByum5anvbdbBxab8esK9t1vPUt",
  "key15": "28y5iLmWDGGmmmiP5xrLgyuPNoc79C3E3P2tyFvFJUd1BJf4DjBBEhCqnnoo1UKypp9CWRYExE1mHMErs7sB7DRw",
  "key16": "2hZFaS9E1jAVNJr2A52Gu6VLWXgqsn8TChgi5aBrMz1QNv9XjwxGHjcyPSvb1u4M2CDSHZbV2y5QWzNawhHXT2jY",
  "key17": "5u3jQwRGLsNiCtf9X3Y3KMQQgL6mUJGmPKG7HTpdprwLGwAKWJfhXKuHAT6XKgfW1qsYgQY1qSGT8MC3kitFHHXP",
  "key18": "4mctDUEnU3xtus7fMWrzifChH4e7XnjcpMBjmYCQ9BjB8zf9i2UHaGEyzXTtj28ntW9WhhSZdQQCkDLetZ2tngXG",
  "key19": "4mBvsHcf4A2LdSnDbTFDc7K6uakxEUWUSynZjPre1o8RtvmeJnW7yqzeJPb53uM5cT27xmAauWhqfSFtAjQU994X",
  "key20": "vfjYRkgj7FifV67ETGCKpsyE4H7tUc167qe7FTfDRuhftz8qGrDphAJPsL4MyahcZfz7oZsiYv2XSQ4UFnkRsiz",
  "key21": "2ShGrF4X9KVKPuohLaWxKBtr4mwcfDb7Tw7m9oCLcghEFZG8qFjSVDLZBouS4BEzJoFqv28nqY1cmGUJMsqGfC3Q",
  "key22": "5kCnDoHqMEBdHvh5TjdTzEvU2fEfnAxgNxxVBndNkbs8tChxBKN64urBWMCajdkdNtJ91Y39Tob2eL6WLKdEMvVe",
  "key23": "3Hkdjjk8VZrYBuX1Kh5AuPCPqXpNbQyUC6aw7Lk1ZFHobwbghQ6v33BvkZbtSsBZpPx2JJzTw4u26PJ3eqVC7xxJ",
  "key24": "cXqzmx1FXGaM5oWNuLkpLMyZgPN1zVeYf5jgdCFFBBDNtR9x79MeY1ZMisbjBLJPCj6CqEEAynj75EHd6Y3rSRr",
  "key25": "5Wf7Rf6zPnp2MZGozr8i6K9MdhE3b9MknYYgG9ahiQ6z6jL9CSRAsHiT4PX4tQfx2bZ73tG6c9mtRytE6MfEYNsL",
  "key26": "57wCSoZLFkwsit42e54P5Pn42A8j5PMD6DJ7b49vYiL9dpodtVYEDu7KUJZXVPfWVNV6i6cjK95qgGHr3oY8FEJb",
  "key27": "5dRfDrjCgJjMgnXFttAgEGjpP6YoFjJWb5qTR2XxEBDiyykgc7sua1dCaPMcMvqefCxtXLziosNuVRkhf2y55NE8",
  "key28": "4ppEcj9BeEqL87pPSPfK7G1cVn7cRQRVguX8FkaWpEGpvQ5chAh8148TfivjdhyGSa4mRWg6zdk1ea5UET7aA7Sy",
  "key29": "4PjdXw1n2BpgoCrVjaBqhgARtco8j5fGj8BPq16bmdWguETE8XHGe5AdMty16LX4Mi5ryvhjoNRwcvj4v17tyAme",
  "key30": "2tevUiBWpAsKGaf3NicXYz1khu5PTcxgREsC8R55SsK6LZmvBrw2FSb9UBezphCjdGkmrr2wxWW9HFX1eG9pBZiZ",
  "key31": "49mFgsSVH3VySfLnXcoMY7Jkn3Ssr13XYAJTMxmR2iSQ2MvAnAJdFHgnQ3wdGAgz8EnBcaCVLPy2Niw6Xrakq99B",
  "key32": "3E5XYNJN4jfsujKbu85Gq7j7FU3x28cN9DsY5jPehq63omZq56Ywa5eaYopeBX7887iGpeqJCGLq9gv5rxVXj94f",
  "key33": "4Ew2zrSdFXT5BKC1z5Bj5VWayE9rqxq2L45Y4qkXSQum7aqzpfD2ia9eDwBvBEeaqnKME5TGyK1Bx9S3muz8acCC",
  "key34": "2X9jkqhbZZdYa1kxaNaKXkgCCsS4jybkTMgRwq6PVDuHXncz1GH8pRDBmw5Y4obUcvfEaxos2gA4h8esJDTuXX4b",
  "key35": "4jLk47c6KGPtZtEd6omtwchttAiVW6yD9EKFGaEiZ3gNJqRy92x7N85ru1WShCAYybABPtkYrA8ZCJeW3NZUWUXV",
  "key36": "3rP9sqnUdk9sggjs1oSLzngiPBU1w2Wp7kVYT9QvyThNqyrW6QBU6W4qSdjAdtDjC47JNKa73saYrfhgbZzJ3Wj9",
  "key37": "5a5kLKaUmfUcofHWEG9XpXjZ5UgnMa9oZs8dr2vdXC1Rje5BPtxrkzCcnowQf6GSgpb1SqrAyzrXKKMX7ofhU1T7",
  "key38": "3uKX5v3DUNWm5Sj6ryNZjfRxXgDGEmLwPenht87aMsWasF4LCgsmvT6LgHuAWw3W4rFNVA3Q6LK16YfSS4EtQBvi",
  "key39": "3NzfMJNT91jUuKWd833jas2FeaSpd66TaWnzenT83ZUAEMzrdNeafFWZEdPfddV58rmJ3rxTEsV7k2kiHtkbzQ8s",
  "key40": "3qEcKDzVDW4N7TZqNWfyRSSQX1xdm6PFm9Qqb6LzxsSV5pGuNcdJ4TFbQ1sSyGC3TYXzXQnCmywBeHVC9SwctAng",
  "key41": "kUubCvqW1FbZ6KMNc1V65B2vTHpZwunQXN5jK29ir1LDgXDHmxrdFnaPQatiiHT1jMuCfoNU523YxPgmWupfSdH",
  "key42": "5b65FGSdN4xnq7WK9Q2gqbPZJB9rwjkeCGEMgQ4KheJYed6vfXxzpeRgiJj56FqfFdBKEZp4CY55yhJkogmkGDmC",
  "key43": "2QuPUYwimbwfgb4mqRmzEWp3xxCJ1dBSJTP7mKfeAREZ4E2bbGFNXmNc5ijrjtBnD6dLBw6KZKDdpzofcqLJZTir",
  "key44": "iGSf1BAVddoZWgprJYxqkR7GKrdFwspqnTjenNoUTdPXZvkxik75AXim5D8xC2ab7Lv3bq3V9rmvcEP9BktPhwQ",
  "key45": "3en3GaRrpq1RPP9Rpm4z6zfzdWky34LgCL1JHiy5yHiq7LBicKJ32eD5u2D2RZXQUeAEeML7oknXzDLQzyaFDcPC",
  "key46": "5aaHpJzonPne9sYKzQNw4nhDoAc5p3W3yuqDGdXDWueyVu7DyhnxF6ZENX3d94JpSCRBW9ngcfWLH7MDc86i4JPx",
  "key47": "3rmNz45CiVHzUC8c9A1QThMWBUvVAywrTBWmiNGN69mJNqgdk7PFzzGr6aWBFxSbiErvnZDiEvBzE7FUtSN3cmQW",
  "key48": "pvfGinjLwwsTLyBSyzDhpo1Nfi2ME8VS8EhYff2DLLXv6kYT2tG15cFzYCrgCGNXwPc6TmRrGpjRwwXuZ4yXihW"
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
