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
    "3bN9CbFZDwwAuT1shf37KMYh1uh7v28uXiRNQxJRpjdvCTNNJxwCetdq7m8VXUNdaqtwcYzeh7KMaSjsYvKWDg4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQEMotiAU1g29pho7XbBcgRLN4hW1UHTVgeAY6GqDJfaBpaAQpYkEz4x3fZQ4S338r5YAYijoAos6Uiqt5S64Qz",
  "key1": "32FwaFbZnLB7vWQDNFQ74GJf244seV1WQbiaoi8tdGw7FJdB2t6necUtV2mfcvbZ8zQxg1Wp5KzXEL9iQVuADntA",
  "key2": "3aFm7aatLCshH2vVaSMWuPYg7P8dWYEmK1H5j5eeHQ7WH4qqY11mHBoXni3eTHeZLRhtRifkk2XoMM3Xrm5RBCh6",
  "key3": "36BC36boEeBtEpypX4sCrnQEvfUmoDEuQCCBefW63STkTQutE2pj9conwMvBN6ywZF7AcYBvxsXbzLbpAMLvufCf",
  "key4": "4MxJdJCWzSdskjoXFSCbfcmvHby2K8EJ7A997bvjXifdAHoruPyhKoUMe2ExSpQ1TGp1W2YX4WUiuXzeVr4Ez9AH",
  "key5": "BpuhaEGG7eMp8zq5cyFWUjDGt8t6rYCqHhx2HVCYNh6bUwufbtusSSZWGBxwVLbDCjrvofiggMx3QNaC4ADv89v",
  "key6": "3tW5CSXuBdcQjy8KLJeTJH9uy8oQTHsDQuriBvrrVXKnPR52RppsubHJkt7MNUa2cEmvxrtfwNpopHTe3GviwxE1",
  "key7": "CaLe4BdM2d6FCis4gTPyb5wGTy1kDbmzoHmFTZyz32tQmkW2v3oph1soovk3GB7su2pkLJDCnfjfSMjQ1Yw9GYp",
  "key8": "3TrzsVwNGnEiTPpnQXkAQ1rShxJL53gnzzyTVWUoAgNKccDgrftz6XuMoVjA8n6yamWX4JrmacHmgFds2iS1DEm",
  "key9": "3sjhJNKKj29nithEy5v8XAPYy7soEk3WpARNnSqJywo2egWagYSYQbcJYiQL65pUgW5yVifvxhTckMYR9sPE3oN3",
  "key10": "3BYsL8WYm4ZfvfUqBViHyiTgBqTfWH4VTTFhYATfgSVhaTTfEjGepVa1Q5B5LEzvcYS1qwuJQZSbShsUvCx86JKm",
  "key11": "4w9mSkbtKiLDt1SdVfzkdcLJNdBYnfMFmCFA3BnyNqv29q5DNQgtnQCFreBsnNL5ACFM28fc3jViWmzL12L8LZhP",
  "key12": "5qDS8DygujJddKBQzD9RmdcErEoss3SxDATFKgc57Em2XUNkyPLkdbKSPtdwXrSinwbWFFKGcJqgVFihgF6nvBe4",
  "key13": "4z2Gu2oQEb6RKLZSJB8jk1Fu2aSpGmn23b3nShUNohXU2vWLqaZqzVDTWjZUpo7kweQBzwwt33H6W4wPDnRFZP9",
  "key14": "3o3SZA5DSrsifpCHWHmRJkuv6s8zi2WwzqQgbae8UmY4excsVsK4kGn9kMqJ7p5rC2UWc3jQjT1yE679g1yBMqUk",
  "key15": "4g3q1fy4ycafnTAyGeXZYNBaAaLHhiPsaGRPJhcHx9ZXrqjdf7RVEiHUpaANMSUuRYT46WQc1Yt7HkGv9uE9eeoF",
  "key16": "5HLjHf1DgfSXnCUdEWKdexS28pK6PM2RwfXcWJ3JKQoMuMpN3ftiP7vXuxYyuLUrC23YGVnQMjFTTGBX3GwkddHa",
  "key17": "5MUdQwMzBe1eHcHC93THst4SEtASmV7n4Jw8wEUXYvD9jZFa4zRdKEtRYL23Z2FeLM2MG4jMRTVVdpAcESkcpg7b",
  "key18": "42dYy7XDPPfEEXEtoM5kKEGyaCZcdLthe7h4oRuuZ1CzEowxb6a9NiT1h7BYuNmeEvHedKS9ymEkAbsZJmRzvqr2",
  "key19": "3JbbaYm5feF48jgeZ5hVSBs9xYxdisG2hfja3J2srzf2koVjRd8w8SvvJFTeX7TTmngUXtGJj5DnUKj5X2XNy9Ar",
  "key20": "5Z1DjKBqewM9en5ynsbC7d4DqDu2GqbrcC4fvhc449NzgPXRNQZuTURqt7Vq4Fzsm6F7Qvr8XBxrLNp4rnX3iUfh",
  "key21": "3keoYqa9wU3KV2nuJ7PZzmyt4QqkgZmomv5w4wXKGtYNJ8gznaKTASFGRPPtk5ccWjS1nvRWyLRznmtYEHgw7hW",
  "key22": "vrhxsFFJdVk9Cmqr8sunrP2tLdwa9MB2hVSHhRxdj2GuhVMrbWds2Nfm1JN6viWXb52yVs9C8rVzbEiu8rVA9Zt",
  "key23": "3Fi3wGBeMdt5eT3zyZKQuTE4kxE3a8mRDxYhdqtYfhvQZvv96NcQyBAqHE5os6hmhd4jLR9VrVwbFAiK9WTk8w6Y",
  "key24": "5JhfohNqRXDz56X51tfpFkzPQ4BWErm6rWmiRZNPnnNJ2nyeAQEcVTYXo2XWQ7t7ksLtiF4SZSHqn3ik7koFYdvs",
  "key25": "3FznHkJGeUVGsE47McEHDt5F2QGHzcfkgdmZu6vbXceekpQVUsXJf27dgojpibodX31Qjpm2EHrHJeFrq4acMLzL",
  "key26": "2JYwFoaTwJkJwxCo4jqyntD4diiwCsvD5pvBgTq6h94xt2vdtKeAJRQMkfRoRa2JuPrnxQAYwyBTq4dkNTwV8Gjd",
  "key27": "5m99muyMz8ouHVbdFd4f8sacY5iBLFio3dEWGj9QG2jDquPhSNcXwWuqSn2Zvp34pwx689xSkC2xZuJcQKuKtecu",
  "key28": "62TQmdjPqxczTDL4WTBv6k4kt89TjpnTDixPXXSL2dZDw6ZfTfZRJ3ocnTewjzYwBMdLCPLJ31WnMmWcw74HTnUm",
  "key29": "4hmHXRHgnbutgeBJZhKAmiJJuiQeSLQ9umsuT24iLiJS8JBH52MScGkhfR1H2PXMpPyzcGXBTMnQr8e4QzWdMvm3",
  "key30": "4AFht3h4QW596bUwMnoFtKo23J5NzDZS1zdt27jQrLL7Wepqq95Gcwa4pRhupovfmjoWN74ZeoaGPxJMui31XDTK",
  "key31": "5ggoU2PZP9PeoJGd8LYjV7geb7xSgDV2nynVtfXts2rahYdHcpYniebshxWsXtb57cDF6GGPR9pCjJjLbNnbSVvW",
  "key32": "67HydgEuVFezNb9fnBSjUDzEHRTDonQAL32Hkkg2uQgW3YVzPMaMAgirmbmhhSbUSpC7xZFq1oAe1QKGUrceHqpu",
  "key33": "32YuE541An2AufDxz1cFuiyx43HmQjTE8eTsaStEbtrQSHRheYWLXr6wjjAYMJ5DhmomYgL2m97SHG8uyL91uYar",
  "key34": "21TXG2XgRYxaUe2c9gVMu1JbsVYcJtP8uSn1mECn5s6qCtZxFy6SKDs1HmdVdhwWTtNYs4CppKaqJWa2d2EDzRb7",
  "key35": "63NqU6y5sjj9JYRKqCTWX8Ry3NUc887ZvabnV2c2ou78gBnZtJFQe6WgzqKo6ipZwJySU6ke8qfVNsx64Uo4fX7j",
  "key36": "2YEQuP41quR1jRE8DyuCXRMgUNvXdTc2Y8iuPRsPTCryoMvGFh6trEtyrctQ5wfENxDjf1mxvh6D37iRTSEVBerr",
  "key37": "59wEXXHJFLyaLe6fn1uzaTzjymtLDg2MbmUDWCEG6wtHQS173xwaKpbwo2p5c6TYYPeVMsqoLuffrwJ3m8DAfMny",
  "key38": "5vsZ8zPJidDov1TckU2bQXGDu7qnBKyfpp325Na45xAK38psArTMNVG9VyUcGn7q85SFjzzQiRZWhy9yQgHWzBGY",
  "key39": "3kTo5nT5ci39mRn3k2hgmJbiz1iHqPWa6RydkoEET2LvDUtkBUvKTU9xTjjUCWaVKoFqstMf11tFTFurRKe78Wdy",
  "key40": "SsQhvepKyZG7LzBYTkPDqNNXV9F4MJHVxyjaaU2drHZ7YKiNjhQjSS9eG2EPhwVNNFGtuQ7ZAbffZZe2MHjnAwm",
  "key41": "2hXjY3ge62Mp7UBiXVCpkH2KQBahozhAR2aw6g6L2EYqrQRw22Cys2ByEC9NWJnagtYAGLgTMGwo3ftTSFh5SRgT",
  "key42": "3osfUEGipPid3t7rcRph5snsWhzPFxdHBfJbfNuukqzrqqJ38TfJfu3bej8eVFRs5wWcaVQ1hXWg6k27fVaRYzhF",
  "key43": "2EHGa3C9aFMyxDhNURBKnrftBJaGhQMintgNEmkZSRrdz3VKeoPFoWkFfCYTig5MCL619ZrmLExUtrFsnj5PrzBx",
  "key44": "3nbxbcZvGFFVkbJFyrAZFk8GUfyzYc12mgp8ZQ6a4W4SiuvKCUDh4Q4Wc99wx6GnV2FotWGKHKeeuQLiWrJEBygk",
  "key45": "5zS91RsKpDWbReWND8sFQnXJkmsF6s5SwZshioNmbdMGNqHzFkvCBkFMCKkbE7GMrhbi1BK679uRk9qZu3ekL6wB",
  "key46": "5tNrrGy2yCT2uoDRzRSN3T3neAAj4rLoU5DgeXi1F8ur94WnGroBBAnRA1dL5EqtxYG1BBNUDrtTvG1DQoZgUYiG",
  "key47": "3cqfA7Nb2F1a2LGgMCreocTRVVPn9HSetQ8LyG4eh4SzvtuGMD8rNmQ4FLCj1QyZ97ancE53vu8goGE7SUVKs6Zz"
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
