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
    "3H7nV7FEWoU45pJtNoyywpWGhsRfQLAq7kBvn49JnbskijWrycvRss1HCZw3bS1eDyWRLdjMbwRzJhTBjURfkweF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRZ3imLM57zaLuyUapjmBnTBZq9R8xmQCz4fiy9UDmQKmsHAPHFG7dcr6zrTafRWGL3BPhjBXcXAg2FiPyQsqAr",
  "key1": "2ArnqnmoS5GCqrqR54rxQJfAVotTZZEzKxm6WGhc4fjezfJyKGiKEgJRKL7x9Q3rVLXfRrNhaC4Hw7p9NGFXiwXC",
  "key2": "2kzHr1q1FvsMiuHrTjVZSJEij222c2Ct2P3U3ywfKYTTVVsy5sQoimxuEZBfTAMkzegJ71sMNW1tEyc7PVFvMni1",
  "key3": "d2FKkCq1BKDzmTTfPTeCrKcRXDgfTk9o1pAzDdZGbPFUiMCJtALms39c1oXp6FWF5FSriHgr8GnfZsbxuHoXk6C",
  "key4": "3r5SBsV7ami4s6VLowxRAEifUH48hRxMoN367kGZ3P4JAXikEDkrqSwVQ4aiHmJTJp21nvsWTNUPF3RnUXTqoj5",
  "key5": "52WPG5Pa2Bobjr7ktWBEV1qfBjCVxgcvS4djCjPF9TsdnQavssxGMMUttqK6sEMqwMRLagWDtCpQWvEfwEXqD9HE",
  "key6": "3FMh51zcQbsabHUqFbtbQd2PqdbpVcQ3w6xdsxGN1ciMnmzMhHiSri7GgBVyZyUKLhFwdg83ku7uVk45C1uxEYAH",
  "key7": "3Sh1LeEdJ4eGgzVcosiKZCYFs58UEoGwqehkBt2fyuNyfvdokYRbpgtmReUwdLfrrBDkKNqNTcx8qHxb3KvCCzsc",
  "key8": "2cTEFwmcfUBFxMUrTYmmNHF7UJBN38riQ9L4eTqXJzjwsDfGBLT534Nfa85GKAhTFxRxPUTdfXRL8rWfwxTZxNUz",
  "key9": "3X57mGutvYDfc3PcE4yxJwAnX8rkaF7SrdGK1rQxTbwkpX8UEKVDQMmzStASMCuBiXyeDAvRKXvPbBGmjPAEosGA",
  "key10": "9stBQHyvvocCBnyrKRwDm7R9Bx26vwe8fzdt1zkUVaGCZQWruVLiDXWzpntoYzBhq8RAe4NgSjvrW8JxW1pzFUB",
  "key11": "2XVqdEB36EVa8VNx9ergnC4DsoPoRqNAKPQTFhAEkJhq3VaN3JNDaYR8hAmHC8Ssb91tJQxGvExxUgFGGHm9cNwe",
  "key12": "5CMp3ZycTk4T3S3wnA6wFxMoeE2QZbTnudVLNb8h4Q5ihYacYMPhxsZ93rGhKng2o3PYyap3mW8derrGab1rwGyR",
  "key13": "4QQmVmTMhrd4EwA2FGRPX4ooFP4GnG29nW9xWB917duznw68vwBf8dKVh6nCgcEZ4ouLmmBSnSVyZXMsdyAewsLj",
  "key14": "3iaSPmLKMj4FMvmeJfLU9j11SQmXLYkoZza8Y2z9ca8t76dSXvP8NBSWjsDv61uFKzLfMNUArjuzwnUiRECkotYn",
  "key15": "3QwToLQkpY1FrnqQp4Pt11MJ4fsx6RHSHjvqof5jRhcN6h5vgKiXJLVZYMiktU1iM4a5azDqYjJSb6NoQneJH4sE",
  "key16": "3mNw1dBGeDad3udREA82hhikaq1dMRefkywCgorChYAfSmdw4nByZkmr2j4kBwghTMLZ998aAsjK9USQKVfXKZCh",
  "key17": "5ZzGwyFZmv7vGo23MrMTit5neSubABc9unZXdbhDhGHWBj4sGbMrkruUkjq15fRNMkJj1DsLd8R3TncvEnzKwd6v",
  "key18": "LMPWFKtFu556Y4NTb1XALBzwvbd1VPgToGuZGBs5qTYqykVkxr2tzggDKUyEpw287XUVocyoL6LhNUZtHv2MHTy",
  "key19": "3tviCGhUYkaybBPhxLC6WeQ7sYEtMuS3XNKdNkbRQ1gy9CDVcy9jK2fr3XjQL6NoKXpmvpsNp1abes1JY34HZ1mu",
  "key20": "39ByQwfP67rBJQ4K4iicjiRDT24QB8xi3eVygzNebqWQLs1xKj9jSfhNUamESkQeGc7vHip9y2AVieiucCMdoq35",
  "key21": "5muRfW77WEHgEWkR57FjLXuCDLX1ESHF94uRNFbmdF7sttW4xzaATPmqFLapJGrtWkydeyGzyuy8w9o7C7mJMoy8",
  "key22": "4RREk2LUhQJidReJBej4fu5gdKdzCX47yQ7j692BmtmYKgjppCXYmS9ouCReeN3xSo9mDyyWx1G59LmE9byigGQe",
  "key23": "3cdGttrWPKGhCuRcsqEnGMozwhjuucwJR9WmwJNYcsMFGtqnQv8J1yrQWCAUMg9RdRyz3Pr6HLLHz2f1kzDKh7WK",
  "key24": "xAagghFhuGJuo7xAPGvWkeJJwv42FgsC4qCc5frM9PosSVsWfB71nMUpAfdFopUY11eUT5BqnbjNFLJkQqZbLTo",
  "key25": "pQEYqjcboHGdhfzaG2xP5Ud8ML5VRT9QMPaFgxcqvqQs4SVNPZ3TixS7fTUJhQvVb84oQZ96TCEs2iAFRP4aqJn",
  "key26": "67LzwwyAL3e26dcv6mCFny9YDsLyTPoRZ1qD4rNwdjmmYF8qAnTDqvx8kcsCmgfFGKNaRGyvqagpxoC4VFFo9UTw",
  "key27": "3ZyjbAQ7EHSVruzAgZmwvFjzgmq4iqhMQRfn2immdGWDZ8wscMtVm2oPTxRHcccbpoyaiknkTjSxtDGk5YtyC7Bc",
  "key28": "4Uv2zALRfYc3zP3TkpVbUPFgYLbsBkiuFqBz5xBUeps9W6X6nc2cQ3WBumMppZxqodN9dsiBH5rorpLsNpgiJiCJ",
  "key29": "2DVw7WQ9GQoDwn7DvcutsWRJUwNYuZJRP2VsQRdRYd55DwLaMA8ne491oVvnRQmZ4acUqWdMGdz5LKTRje2QgjLA",
  "key30": "2SkBXKxFJE32vT3ExwB3gmugTWg9dVPb9ss5GpMSCgwXKYAgrDLj8iMmAwFg6XBPN2fiAe4MmfE3ow5JGEFUQbDE",
  "key31": "4k47P1B3u2dhAY2ZXtihwWwtxsrQKzbGy3ymFLnLXY5gkiqU8voP33FS51YYfG5RNDqenX8wRAvGkZA9rijtvyPQ",
  "key32": "67HAvQDRn7T8ctba9GhrJquyZM1EPTP1YDwD1rqEPYJxiBgmhYEjCRUDjXTQBPzH15cJcQ7TK1q6gmkkrmcjWjPc",
  "key33": "2Epn5nQMicfEongP4Nvby3Z1PjBNEnQqX5Da1PxRmmFvFAgEpb2tQKsUoisCT7aZvJbkBAAoWHGCYnzTuHfhYSFr",
  "key34": "4g1d2788CsWi8KxV2YMxWWhiWBDc3sWTtY59LKkYSqDLRnX9AHFAkFgLoga9HwgzppwPN4XugkmMzxXY16T9R65t",
  "key35": "9dB8RekWYoPwFHsaLAu42z8QDmTsyV4pLcgAUyt1gRn4geD4njWFDEjquhmrxeG9VjQMeqS4ePdNp2m9zPgGRgJ",
  "key36": "32EWLQm8eqiGDidopRxLSwryoCBCsUUBckm5HjFE4MUjtvTBVLUJ9f6ca9kzghavfjZj837DtN4uWeFcAThRvtPB",
  "key37": "3vEoCbw7PDfJ6HekqMzJNYkm6P44s4YbT898JcacJBviaMivdPk7xcAj6ABvFuMFKz84tLa47AnbSP7VfTu3WFLg",
  "key38": "4P55fv1NoyXx3bLifECcAXQtmokZ3Sy2Mfz9StjneKnHuqj32XmNBy6pQEJyY5kLQkPiucuCUAAb6oWYB5cW8sHR",
  "key39": "3dbSRiYYyLGQ3sBg55M3S1auDdXMqe9c8XXvNcVB3KnVynCLRTuxQ9bjDXaHZLdq9gGfMxGKNK7cZx1oUCC3sfFa",
  "key40": "bLrbGS745QPYPhgnwNQrSduvsdKtNc4dJL1YWLKndTC3StHNPtL7b344gsGqhR5UeX1cfr41bxf79anCPNCRQ97",
  "key41": "3UVj3oZ52eVu1cQZE66gLSVQgSVsq3G2PT7pmyDaouiPEoU1miE2FEDQ2ZxPHz1Z5xUTcmcPdWic9aG1Cqg6nedp",
  "key42": "3VXX7QrgMMLFXjDoq8K9Yd1ta242mFSdwL644zuD8mobQJtRz15SAXBdCy9rDQAJUtX8h72P532eagK3kQ7DDJrj",
  "key43": "58wyQKtTpQxnDfGXNsyEyXVzhWPgQebTnFF96R1zZnDrYn99756cCFFPS6zbpwhcPjSZQ7GvSA4gpcSuf5L2jUos"
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
