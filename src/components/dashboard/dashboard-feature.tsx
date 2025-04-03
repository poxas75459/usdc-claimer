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
    "2tRoawKA3aoz3qmeR746bhEYu6PnxjVVJPSYKboGX3brsZ2kf3Q1NEaPED39r8cJeh1eJsrg7Eeaqgr6hfRk4Ptp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMKReio5QaGbHkQS7GKRhxJrv4xKYD9gyLHfr65evfhNrjEmZjydoxWjhxqBumJynS4qT1tHhcGvkiV882LSDK6",
  "key1": "5pLZPDXEMenr8xceKyFnAtFVdQbG9oQ8MBe1x4Py8gmsfBsxtHB6B565PhuEko91RvrkqARnr7yM9MhybXWbxUB4",
  "key2": "3pEVzPbWQaDmhqivLiG5W9Xrv6JS8tsm4CYccuvugvEJ72NK65NH1HsDQLozRHt2DPLKs943ctNMFnraDKXKJbmx",
  "key3": "5q7Btta83QLgv1z4NzewfSr38dgkdSrvzitZFvqyXLkYffMtwnn5vCaThQWCPVfyij3T26rSFLKCNaWhTJvvwxFF",
  "key4": "3SaAtcsaqSjWuJJSaAc5VXFMjcpfVCpLjABKDVRkfEYQCs6a43DBg5z6NTHnFCd7Q1AUyidgYS5HdZun3JNdkuZa",
  "key5": "5b3JZWaHgvTVhy6rbreu5MDubmjiTnc7qqgXKVFaps8oHDKPpSmRh3hQWe1WCCwK5ALpdEjLh5GrkQUVA3UQCDeX",
  "key6": "SEUjnzvUtZJ6h9uyKdfJPSKe5U4PWdVy5372NCgpA2jjM1smBJuiPHyBd9vF2T5GnjKYoiTFYC956xapPHccvUw",
  "key7": "5zJUoGbeBeqsKxFSSm1eSDXrqsy478xCosdFn938B218D9vZyeGZX2uKnY33u1wrMRgnEizSASaCvQwuB9a14dq1",
  "key8": "5aSwrcp5akouLCFuMHFzqiE3WrfqkyVrFZPcHSb9qEQn2B6uHxPt9586Ek58UNx3J7596re1LMm1wddm3MG6TaRq",
  "key9": "5JhzgSChJNQZBLAFgvgHFCc68584oskVLaqw2XYdZyFeKjPZHdm6prpiTwJVZA4NnGqZ6H2bY9hpnpQrJyPZijNj",
  "key10": "WL2YfBPjd7KfUnQtAdTHiUpvrmUHLj54Ry9TfY42GPVL6k2k6R3pjBeCJn8zbrWnjAHzMMRXbZou2QPYrZAz3aH",
  "key11": "3vC2hCrWw3Gnh1ictPtNzNZYUNMqF8dhkRDF7MN13YKaKkZqMnJipaGBVai2C28EdB8sC1R7FNjXfHfRVHhd5vKe",
  "key12": "DXz8UpaJKL4D2DGSKYtD6qiz63ugbo1geRbitMxUK7yztut2kdCZw4FiQ6CwsuCeXiVobdAktQLBMMm3AESDyu2",
  "key13": "4wnXrxB6NMWFLJwZDXYaf8jWrtDwTf4MYHHk7iFPBtWMuM7TAoAstMZzgmXyWgwtoYqgtDM2v1pV5ixtvV1CATtp",
  "key14": "4MnQoCEZJj7quhYRi7Aq5Aek9vEjBcLRo8wd2bErae9yMBMpPYvateebcytiT3YTRHK6YKaGo7pKnNuhxx8yTzUe",
  "key15": "5sUvppa5NJw91tDLzvFy5aAiKBAVZRo5GDEXd6dcZ3WNGEpZEKmVd7JHv5yyMMYFjLsmFrshVRLkV7d9otxJxu73",
  "key16": "5SWM6ciok3Eiw2nCPCg1JiuuUXFk5grKHja1T5D9rAjTpq4zFPTES291MRUjSkwb1GkywY9MtScXDb1NwnKYYJdr",
  "key17": "nFfz6RF99GJbo6Ctc6B9vsFxGBZdysE6KEZMatxdY7rhEEivw5dezwJjyYuvvf7PPJvSC2p7C5goRshVKYvs9V3",
  "key18": "BwfZh5hJMDTWvccYsntXVH65kNQkA7GmG6qLb8FaPDak6b7ojQYHFWZeyj6Kge4q6fp3k1hfmfv7hD7AzUzbTTh",
  "key19": "5tKTeWrUcohJKfZJMWCexE7rdaM6LbbcGkLA6rrRpjMAqFRkp6YLPyFZ3FgvPGb4aLgp8CwGjWBXXagjfRdXiug2",
  "key20": "4sTnMcqTq1q8HBtW4FiPMkP5CFuaPRQaRKgPP1hhraNAytcqm8TUDkBvbXVfyBk6Xuri5XNfsrkChehLFaH8nGwe",
  "key21": "5RojxA6ToDA4QoPbmcacAuzsGeCpX5H7qECeUc8XHRPscgjAX6RBjAo3VhfCZuV4wAvRDbuqyXRs9LDhNo6RMXi6",
  "key22": "3FBzimahGwPGvstZJjXm9Bp9akV4EynyxDS7iCW5ETRgELZWuNGMqhE4w7HJdJgHxCEmvhQkgPvnzxds9FofpaNn",
  "key23": "49hwcio2QsPTEh5bV96ot5HL1F34eUeY8AVoEySx3tc7MkEdugZpVhxnzpigU7JeQ9fdHK7fxxHkoNowg5hWQv4F",
  "key24": "41smePhmB5jnkFLRsjt6zR3pCdAhfMUVBhExNwQvwXHsPRqvs9wNEgGtBes5EUhQQuChKR6xUxgjvRZmHZQREWNA",
  "key25": "2dvuJgpj7YkRqPAr82KUdsGr8hQET8cedsvfqYdEZtAJDmyzfVfLFoZLyRRa2p7oyahgURTrp6v3zEWX242hE5Q2",
  "key26": "2vu2DKUaTrx1yHcjQj2iw1Mqv39kjRspSQ8HaEncSYbKpLdEjtK432sMD5mWLp6kRSK1sv9bEGbisBXmfJsbjHyJ",
  "key27": "WyPApQPP8prVDd2T7JsK2PZ1tEzQi6DqKtuvRZQMrUNpHg3y3ZzvrTnTGSX8rpMtt5qvw2cRXmKyjdmFzVa6Zpq",
  "key28": "5MH9pwxcAwsRfgwRevf6y9AQNiB2CkECo47tYhAQhqBgyznvfsPrEcnoerdUmcwYEE6m9tyWLL1LoYosGetVnHNT",
  "key29": "ofMJdri8D8Vx8crc2vJdZP589f2uoRbrAzPn7poXrq6WjBpyQ5rFmsnx6H9nrdxJyujBqbZuUE83njFjHq7MTo5",
  "key30": "3Hr34rzQhEAZ5naUuZL99Dr6Tg5QBSrFujBUzRGVxbh5fVDCbCouvosH9DCmKQAAKGom36vBcp7RsmTVQeEBRKBG",
  "key31": "2ECMnNNmzdrTdMdvP84NHwgiyanq3ucn4tQ2UGct2nisLSUmqeH2NjDSw7MNTh19HsD8hh6eTqHBZzbLHt4u9TY4",
  "key32": "UnxebLHZB4UE9vxMNMjJTLEttVpCpxsYV4GkNaN7Qrj4KUY7vyabLwgDjHMRpTnbEgGX83gcgwLEqwLXtpcv28y",
  "key33": "F5EAf5H55vh9RLKnu8yMRS4QSuQabonnhnvHq4W1FJrZxNXY6Y7X8pVx4PdjYQQ2JcUcX5MJywZ9cH7ykT2sffT",
  "key34": "WtyksyNgNqQqo8isTue939zhCw3yite4cCwD6Qr1dSMFzvV8xcVkQb1ioi6aN6vR9fS92kpMgHuqLZ3z9NFfu4H",
  "key35": "61ep3Vs29GKM3N3aKwbuNg52brQ1PkH4Ed41ijtsy3MRxmAUQkewP4SR173mMUKhh9nqqLVvSFHfbZVeKfa7jNAf",
  "key36": "5T1fVNAUjB5RaLYSjSBTRUvQY3dcvxNALX9MLMcYMDpuJgNxmQHunKvMBHNiAuN6cNKemTesSBBvUywyhikb5Sku",
  "key37": "34FFEf9M2ZDRAiQZ5inKhdUWUHQHfZDB5WdrRxMJSn6ofM8qM6HKoRH8aX7t8Hf5bnBpxuikbubLt6rdpimQ1MPf",
  "key38": "3enR4Ei5Z71CzGjKUm966XazS864eKBFQtM33dXPowyG949WRCR9E3uwCwMisThfoKa5aR7Z69oppZ2si18Bw6sQ",
  "key39": "4Xyrm68m9H6tZ63jCwkb42tUKakYpRnLmgowzjMTnVJsyNaBqwQ5AAUC2DpyndcsWmdBSs19SHuYLmkH6pR584hc",
  "key40": "2ZdntVn6P9dutSMAbUTCBLEC8LKjM1MGjiK1B81XS3CGLpHAmg2Hxwpqt5PX4e4k5NK93t2HMkdgwbMNHEUkA63u",
  "key41": "264nH5NdCSguSXRqa7eX3mKwbrDYQrXhxiJULtJRtZmzF3z7vaRuXsG7frJRArwnZrKAoQoPz67zy9Ld1YUcapmJ",
  "key42": "3Gb9KUWBNeufUyoobYpfWHN2gYECRQrx42GbR32S6uAKzKTNBWQRq8RfTqFK6DMjuchTRmMKuWEZUvhcGGP6734b",
  "key43": "25woi4ZVfdrP9Wswa7ckwEQb6cLhDtVRuN2ddxXjPgatWKwAHGJMXNxhUGVFbfU7BBygv45SCAXq8VVooJ8t3eNp",
  "key44": "2HJU8JBk1WcD525qZ3SFc5Qw17XFUjte78WUZBiMTqmNDjySNzgpJAW3pdNDRwRrSDjMxPY9k75bAAxaZTLSM4ev"
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
