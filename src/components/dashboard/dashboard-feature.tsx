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
    "5uNC8hnT5J86fK5Y6LpxCtnv5Jy9uzoQ2CEVAYnUKGCdDRLHFupVe9bYoxp3a5UhbJhmLXmSy2a5aqHgWoAmtjpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7yFLEjS5Hvcs8LHq8C1EHn9yWXGMZgukk7xHbuH23qvnwfBX4HNLHy46Jp1ayTQ5xkivn2w7NvWFwsAthoJ9kRF",
  "key1": "zrNgviN6xW78LXZkCJWCye3DJnc5zRj4Ryomq1RxhYjv1LFcVLKpL1audkPqDyqs6MsAZLFQU5Ntrz7wq6yEavN",
  "key2": "4jmWzTEszNjysmexT1vGwJyKW4pG47KxjPKgdaguiooSCKopctUFcz8gw3ZEEtkVVYmU3kCEggziNuwX5vkMLc7o",
  "key3": "3WMbBtpWqYDMTL1ShKGM9N9n3HdmJk6Xf1NYiEx99gJqMhMrzhGEpaMndChVUgrDeGxwKFLj64fKDmSZHweoxkeq",
  "key4": "518oaHeZnHQPz7xcZ7rFLzMYhNW6Zfo3DK4uJyAScBEqZiT22XYdqXvrm5S28ukvykDnAaoVjCEFvio7yeFrsL38",
  "key5": "3nyQJExXjCnN63F1uYFhG2GswGvH4MN68srXXa6sAzKfx7Bm1LFPyt3aqz6vka4WWwdHKFW6vaUs4JR6QXxQtDC9",
  "key6": "3MHR6XZguLnrbCekxZUKSq5pdeu6sZdgF7neytxnvrdd7VAobEURRxp5YPXnCz32raqURWPKzkMZUQxbcy7EdmiV",
  "key7": "dF6YvM1kA9tmRUiaFi2dTiWjaxu94eFzQEGQb681c7gjTpymqWeQAzXGNNbCcfNeg5AwnBRVcMC8teBK4S4yajE",
  "key8": "65W4Xa9vYjgveH8nR87t8LkVVUXW6t2UCpQkPD214wuLyNPiv7PAA2jQxdWVNmwfMMr85veeAqY83KF264qDVgxA",
  "key9": "3TUhDjvFnre8xToykLBtHdue24qZjMvSA54UJN2xUsZEe4YU1hoyPA7JyiJfcf9nm5ZabKqtdtdNHY9wJfDQQhmm",
  "key10": "2umLsH751dZYJVU7y1BBwLzhAugJ6mPdaM7CKL1mAFqSSSnddDBY1uiBWRLZmLRtKDnKDR3KHS6gnJ32mwvPvNdY",
  "key11": "5HAtcNoyyR5xqGYUnhrnzzJzcHriVgzXkdmi65TvKGhzADLqsro6aDhXTaWYvSRrDuQupchPFPwtyBLtm2jPLLWe",
  "key12": "4Mtg95kicaMzrnnN9uVsCddbefSQn7rDxcsvDo5eWadEpRVw9SN6y6x284cpEPKJdmsE5kMkqhAmbRTzJZG3CbgN",
  "key13": "YvS2cor8R4LL996Azwt6T7UpTFoB4jdw4hEUEvvAH8eUj3Pdn8bofr9hm7EswQBYT7igMeAwU3cjCahNCkP3ZeW",
  "key14": "4KLTxgnWyZmL1Pt5CH3YLp4epXDhSFbNJehSaNJ4vUNM2jkJVyTafN2VGPdtsq4xmrcnu6ZCzWPG39EFwFkCjXdP",
  "key15": "3es4btpf4q2wG6U92ki7u5cS9cb4ptMhnZa2EDSeWnjDVtdsF4zye7byAXusKTGXSPZMqxUbRH2v91VZQPC4kwkn",
  "key16": "N8DnSqG3827bbd3HyYTnnLv9cazic7L77gak44QZ4KbFvnLMikHVmTD698rVWAcDGjonbUv7CJ6Kn6eWwCFsMZt",
  "key17": "3ZDrNmHN33R96oysD6pVuRCvqGmC1SZr9WWiEmxtC2wdio3YYP6EvTJ6bNU4LabvZJUB7hW4eJkH6paFt2h2DvRZ",
  "key18": "mFXFDHcJe2gEv4D2fy2CJsJtS7n16sZ7JGXNmGDzGEygUp673gJsapLPekExFZCr35XKjF7mTENWidTPEoxxnTK",
  "key19": "5XrjbFsD5RZka6wdf5vTdd3Qk1p2XX6Ejd96LLw3ASeYSd33MWnX4wWQEsG8QLm782vRH13nVpa8zBypenfhErYw",
  "key20": "4dMLS92FBgEc7R1QgbCUFypcoyGdhVnVbuvBGxv6ngWbhLvXRqd3tr7PD2LdBPn1JWkak9iN6tVdPAuLNowLKvY4",
  "key21": "2mgsDPbyu6wED2HfCLVcGwKCDUHZmKWhwaa5S9JcNe8hEQTbiZjyxYDuhx9ocb837QGLjz1266ZrH5eBGdBnjbhR",
  "key22": "4Tp8Dfnz2JaB2kLBWBW2zbnXiR5x25TVSotNoHWFLLb9kba7h1vBK3uwVtCDyd1agJo8PPyfsHobzMBoEQghBXw4",
  "key23": "3wJSuDJugkhYMW52yNzuD65fT5ozoAmtLdwCqDYUZyDEvLEx3kVyrjnrDPiPw5S4mJqdunYAF2dYDwbaZb6xQK7C",
  "key24": "3eh9wHDYyEMR3DhUPsifcyLUsReGsofiQDcgXedYQSiizpwUhvQkuNMEYk1bwsnKfy6yVksmL7wqXFACuM3zqWcb",
  "key25": "54fYfDCw4ZJ4dZUps2gYAWjaZfiLCw8GiV9XUjLjhGfHK6qADSNuGESq2zJuKEJg4Qgb7Cprk19hgtQL1BiGBhXV",
  "key26": "57tybuFqd2SwyNNCuL87dQ94q7vUZ2jq5cUwXHSbm5sWkbHK5EUW16hiVuAXwGqJM2JNXNwxVuao5ov8yQsHSRJ4",
  "key27": "5x2xMXcFRNVvp4iqZqtmiMqnuKYpjmwsJ7rxDHaH9NzJ6YXwPKFYDjopFZrEZBYYgwzKKESSJneCeeZbWADNvzkq",
  "key28": "32qhmVG9U3L5X6DptgeZgzEjsVYXqD3kiJnHv3YVuGAEsaXuRF93bpPpoJRkHiuG1gscNH8hWYqrmt1nRv7FBXA",
  "key29": "428w4e3hbVpSrCDME17oBonxhUhwNJotmYi6Eh2SM5r5dAbxHwJmKkogQdtBabdVQwkft7x9G5YJhE7pyt6Tcomb",
  "key30": "4syhhwrUfj4XYxE6jzJedhs16yRVcxh7TLaStXxurXwrjkxcqsTEtETikr4Ckh3K3NGw6ZHwZQDLGuhk7H7j5bhW",
  "key31": "Z3UMQqD6YV1DVqnkELFL6ngKVxUy8h2AF1wvfGR9sM5TqtYEaFHGXN6VkVQ37NNm9WtDnwujkEPB6f75LJz8qsA",
  "key32": "3KUV1QrYoitAkSYyZcDWvRQ74DoUMeqTLXxJRUDcSwx29iyu42KqDjzEyKgQWYraA6Ce2pjKTjdMAUyu9maUFrmJ",
  "key33": "2HBQvC3zP6Qvdwn6SASe8RtTSJyfEJuLJLRAkXExX1xyd6wnLea2nhCXG5YUwyb42TsUXtw9V8t1rmYjAJHhdvg5",
  "key34": "2wzfvbJVX6BGYmLzEHbxtJXnEaU7mpbWK772QLAzhTMVYrX54xEtbZDRpnXnd7SrwcYCfYXEpkpbmEcTbUF651qS",
  "key35": "2U6twf6C6rLYstqnWSwMuYH9YRcYnobmmZ3r7ADKBhxWB4Ks2VcnFxxxXKteBoNidi14cR8XD5DeQjnZbvDQz8EU",
  "key36": "2pmKV8VKRPy2PB9WXpTZZXz8vVYmMpL899Uaq3smRVqtqZkVFBACK4tTSKzkbNpimrbCrZXSrLLvmT4n5JEw993T",
  "key37": "2JHZQCiB3DpCwkN3ovZ9Bs7Lp8PQgFCvf3rqn2MpSj3Eg7yZH1rePvFfrEbjTT4XCCg9kiR4pHeTaLWcWhn4Rpek",
  "key38": "ydM5LvNY4AvDRQmgD5Lch6V3p3CrtntprihPDPTh2e2GN2FVLfQXuXBvw1hAiKQS51hEu9cqpGCr4XUVBqJ77Nw",
  "key39": "5Nc8GyZUUNHAtyHfEwUQwzrceGimDicRXvozaUMWxauFcbuZGWUVGWntcoySnk5X9QgXU6NxomE6VoGWjiTrNSv6",
  "key40": "3VWPsqfbCmNS3YxogCVf7nTYM448uSzwpXYwGnKkxpZwgswZJsvxBqeNUaJdSC2PTqi3HKz8MwwrNrV3R7K1Tmo7",
  "key41": "3HfyJVE3FcMVmpNns2wPKGYrHfhS5Qs9zgX7PfiuBsZSVeqGyaJvmMKwGavXYjx9VpWXHiyifxPgtsRSDNFr8Etu",
  "key42": "3JtNEuNJR2ZpnLws7xbp5TH3iz6soLfZvNZ8sZHLkWLJCYQbkwJoSJ23nv6UQBdHSyKheYUjdPFDGm55dkqRjD7Q",
  "key43": "2LHez5JLs8KJvHXgVHHEXfb7yAgXFPVfhPEPx7Jt61fPm7Uoyqn8mTcFGE3rtjL7GhDyENkMfPYM8s5Z9s7KNh8N",
  "key44": "3mhpAWajHpmK28SyvKyanH16oxveWip3aAT9qC4M9Vg343mf7GsPmAsNAvN7wbbJVseZTBnyJ8d9Qqo31cBujfco",
  "key45": "3P6rqMwawk3GEVktEqYpvF8vTpTtN8D6JVeEu13b8CobgJ2RZrykBjgieVmKYFd7aPyX8jnrWUHqsR6dcWjbPFV7",
  "key46": "3qjpo93B3QNx4Ry5vtNHqYiXXUBkZuR69q5Bu4oEoyd17F2zzjHHjjyAVg6JgBjePybj1wbYVz5cSnsJciQNm2Tq",
  "key47": "4LmNvGr8Rn5d7kW3Qbb749cro5bYtoSu3nJvFe7uPsvYG9qqNpGHcJusq7bKV9aMcsmdf3YLrArSmJ8Rh5hSPdyB"
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
