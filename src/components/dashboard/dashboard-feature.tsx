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
    "4fz9nWw5BmPxBwbTwqFdGRLPEWLs7omd7zNXRLTN1TdgHyz3SvqvMLtxcuQbUPLNZBvvhfiKNBr2TrtSiaM8cnyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8ETKXXXKvRDvz1es8vMSoMrg9xBpGyhpgCb4Abz5GXS4mGhd13Tc3QFSy1Bz5jbsVHPgDzrDoWT1M9ArphBmwf",
  "key1": "C25YgJq4z8FydFYKgyw6mCfZGNfgcABhbzk52d1tS29fmTCyTMdma6VbTxhvYxth2gLVvV42fFgXRrvyxBR64Ck",
  "key2": "vjfdnGpfeu67aYtU1LNSDCsNv4rm4FgMdSJs5ae8MK14sN8hZ9yoBsARr7cUpYX3zfAQ1eGkTyRfUmpr9xQMNXz",
  "key3": "52QrVswck9E3Q1QeJZkK2FnZH1q1SLv1pZ47NJLKRLB3YK1pe9ADNKvfq7VEKUW9xaNayRv5zsmQShujGA1yHewD",
  "key4": "iBBBXp2DgjsTmGx39RwENuVZbpMy79NsaYTPyz63AnL4mZyjJSRo745ibCJtCqP32zvgYNoi5HNSoLoKFS9VBEw",
  "key5": "2aPA92dVrnHVjpMjYnDuep4B8xswAr7jy9T4RA3dtm1bZbCE4bXTwWqh6GSBZQr2LyximYVNwtoPk91idQGDrepZ",
  "key6": "2bvQNpU113czg5Y42yyz1G8iMMHBm67i6rJSkbU31wD3aHQm3zuCzAttZZLozVnsBi58nf3nkLtpsSE2Avo3UqAQ",
  "key7": "uae7cAEQcQQEAjF78QZrSqTpWDn6L13u9GN9HVLmYzpP2DF1MgrHgDUQ61aQ86QBEgd75bb1nmHdtstSFPNNpHo",
  "key8": "mFDuoauJCKPrrW7gUVs89zS6qfdGn5EC7i6hjnKARHKYZoULtviprV9h78hcptAMaybZqy8gZYo58kCqfaBDAx6",
  "key9": "5TJe5m9dk7CwPgqxEtUgiQxMskJRz8HoRHJxWDuS2LiTQZQrDssXbDECzni8wRDw3YhD6UQgzHDJmbqpe37wGQ5j",
  "key10": "6G2H1P4fspWx8JLjVfids75UNTdgDybBeXAvZJWCT2Veg8VsPPxJwDEbx1LrkaBY57ckNThtgc5jZLGMw7uaEnd",
  "key11": "4gY7fgMCrHhMGrfxH79PXtqGMgv4nKcTSE5x7ohTSVG3TeB4zfs8DrZ32bqfc3gAGUUTh4eYPcNonovnsPrmeuTu",
  "key12": "2qnnNNPtbZjRipkobh2rRD1dJuXrUN8iGT42NeX5mWkEgdfS5D52DqwwP1CeWb59abcB3azCnLDx5CoeJRSXmBbo",
  "key13": "wVsMVPbc7L1HF4Stpi8TSLbXu7MLxwqUhAqzTcjoYiB62YdrQ8nW16x4ti9y3hfHwqh6X1AKdEiV8Etbu44Nv86",
  "key14": "8NK48Gk3ybDK3epNrz9rAnVMVHfFWtQVJtnMjPc6qfsy9Bx9gZzyn69HjP3df9XPpysSiAuHbPNGE1jvpaLk5Uw",
  "key15": "2q4gsAnvrwPe9cgaNTL22G7NLSivRSt2PmBAiFjFVfXgQjMsfYiLyfQZ6wMdGHNW88Y2RPKrkQe5SkDciFStmHtm",
  "key16": "5ti24FQ7CADoJQ3ofxYzUr8zto7WLTsbj6ctTWTL1asM7YRnmDukCphGdNg7bPxjCDicwjBn3GN1ZDZmqftdTckR",
  "key17": "3te5SvmnbvgqepdWdL1pB5LY1YLuGLTNw7ow6TmUNthAqp2UiMM5UaE6akwFhKGjT5dfEwuR4fXVVf66pxNWXRH3",
  "key18": "SDk7WHaZ9K6JBYJzofaYb4K9s2eRcLSneTUMiHTY3BPmphTzB5LAEUE8aHLidXZNJ43PzsjsDuW9KfJ5YzWEMvF",
  "key19": "4NCiVQLkrC7jQ4BxzMDFH5BxWfHUGUbi7iUF2LcbdNFM9FtgDd2kxdL2dwq2oDbCUXVRCdB2wLF8yAFw3nDyDcWe",
  "key20": "2PuUqwUvwVemGxPjDeD5qCHpxzQw6Xwqsa81GfGedpYzp1u8iSGtoe52Stx2vdqidjj7SxuV3XQtUPxTpb1mM63Q",
  "key21": "2N9aLuaturcVuEtzqHbDmJ9NtVBK8XSDjpzUQrV3tiEgaCUv57M6T9vD2TjBZH42QM58JacZcMGwSaZJtuneRGQE",
  "key22": "35VgpFFMva2TFAvqnKZb885BijAB4U8F4avCzwF9swn6nj9zskuamPgEGsdXRYFYWNQ19AnNCVTVtzGFyAeZRofS",
  "key23": "5enBi4Nt4hd4WMyDFHkb7zMQeK3brp6PLbVSkfuecNGmsz8NZ7fT7stpktzrq1X2PBehc5EpuPALqExif9pXB3bJ",
  "key24": "2gQjpm3tbpHt9VB3bbDmkf3u1YHruedbzoahqyE1wcoeKM2jx1CcbqBZmtRdfpqU6jYf3KLcycs2bLBuMVSTFJT",
  "key25": "2vpBoiNzvqUWsVD5ny6Cdwb7YrY3kM15ARKPjuLBHkGpYudZrLeWBzgzsNEdKpyZJzVU1Nm1Y7tzHdPaFhLb2wru",
  "key26": "5VUhXusLUsQsvn8uq59AAPs7vnERdvySK2vF7TGSGo9GRhR1my5ZEGJ6wY1qxn1jWX1Bf1MXyAtNEcWsvsdRzNao",
  "key27": "2reCPHgC5JmJWnBVJMWTWb7LVgesL2cN5RUUR7LpCwoWDknjb6Kej9MZq4VkWTrRuVSzzWA4CFeA5q9r4o1FQrbQ",
  "key28": "2nbhsEAQ7hMVZn4XzcuJZFiT22Y5gWknAh3GnYne2XtR5VrKhqBfeQXwN8RARGHsCUUWY9BZW5h8c1z9sQG2kAb9",
  "key29": "4ExEVGqYwmZLqofF6CdcBUECH6ZEg9MnUDSzcsyLXt8zD6x456An7C8zVb5Dq6EhVcerExmgC6J24VzzzxVk9WCq",
  "key30": "28cgMmN6qHEW6q3ehNc4KUS7GowDR3PUD5hUwdcmoFKTY1XT9QWxg4R4vsCbgfmbZtWURXQk6zLBVJX94M1QQUmA",
  "key31": "23FHNogb1nTRoQV7dvp98Xug9AHdsAeWmXJNcq6tEB5Vgadh8996xNtTB4VTsuwKc7ZZr7LQGgf1GXLABaw9Muia",
  "key32": "2mVS5hkkHRdr1VHDPxpBHgFRKv7zhYXsvDHGjEanVVMMyMHRR7wB2agMPBq9ifMdGaQPyLfSrcNbHURj3gYKKSyY",
  "key33": "5f8q52MeaNWrn9pnXHem1beZqdNXeGrfZnUN9p2Fn4SF7YM4A6pQaCdnB73Daw9eaX7hKZqAtDxcaBWqfYJgPLoy",
  "key34": "4P4DeTPCRPiFyKKLmATokDD5rkaNmuDLqQvBB4LoR6A4Ts9v8ZGgQnHfacf7fiUsqr8p6jFnDFcEgG3hucAnj9QF",
  "key35": "31ZiVAC6qLfG77HvjBPfLQJmwDzLEtDjR2gRXh6Yr4gbMD1pnAePyrYHUxVtcHwYoKvi71JjB4HKxFJkUy5DR67R",
  "key36": "3YGxSGtceAoxQuubR62qcmA4RLZRaWkQjf1XEWewvuzT76nqmGGhvaULW3rDCAmkcvijN3i6yZaCn3YHEZTSiM7L",
  "key37": "5eLnkrVEYeCTqZNQ94xf5oqsNqM81p4b3JdQk1Xnne7YhHRDJUaXLcwSHLcWZRnxqNQEULrxD9S838WyXQQ5ELHj",
  "key38": "4mzbiNoF5BF4UkSvkC3qFjJRPt1LLtL99awCndXdiKXeiLbHRL2bdYfYg6oe9G6SWs3ZHs99GgVCqUEDfCWMbdi7",
  "key39": "3ah4gYNKkhCcXLbTspai5DNwmNkPGG8VAVXj2GQLd6uJ7GCe75G479vghdnMCBnwuqtRfdoN9ZNR3yiiLsXARrWa"
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
