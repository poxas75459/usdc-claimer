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
    "kK23VKm9EhmSbRmP2dEGh6tAkJBndBnNLtiSBFiscQhkaY9JdhsRhvjW46jZ87mmrVV4BFMLCQRxXt1ssX4jCmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbEDxeAdJxTMDMLUSBTGEZ1ZGFajiw2UjUoSNcnLqcL7iYnNKrDPokErNKGDjzefkj3YSD6Cz2rAtc7SG2dC5aj",
  "key1": "Pm7Qmz542H23QrPDF6F3Jh7QFHiaFGfiYKtYLbLPQjFoy3AMUda2Ksow9oJnLhM5wJPCtDS3SNApeVh9XgiTFN1",
  "key2": "4bq4sLUJA3i7fWsPaS61tb6ufKaZxvaApk9NtoK6tLYqM1TKm1roBNq1dmo8heZRvAgQy7Cn4C8jBgq4aCFvz4nF",
  "key3": "ocBnuVVdxLtT83tyLGrnjTf92dEVA8gMyzbfxdXtiCrxhVVTBH1gYAPnV6UUCTaMEPdNCVeqxziHM9XydurNvVA",
  "key4": "2fvkkz3jsAxviXvf1Ct5NTAe1UQZCFpRaGuouKMqBET2hs4fpYP7jqJh2DVjWiagF1ya7L9AvgSxe5JebUb5FmPx",
  "key5": "3jjaaxXq7NTpfvvWqbFyYwcp1VDxUWDyU4yRXEF1EZ9nmrKmKMsCe1oiBPtE632NoaXdFtgY2bavYg5LwpoH9Veg",
  "key6": "5Y4iy582eVCJesEWVka9cQtXksF4V8EgpvuzCLva5NZuHpn8dN8qY1ozGGyWBRFfFPo1sceABeiAmKSakXgiJf18",
  "key7": "5qz5Vfp3LNjiuNKSUbWBgSaCqHtVy7vj5LHWuei8yVJntm4xrrMkSRva44ujU1q6qRhWynenyG995niKd2hdCtWS",
  "key8": "5tDcK5E2ccgzxaUYC1y3eVZMyf1gDGMebCe4tL9XR6N8deCpkbRS63SLp3Ddwax7GtjSsp1c8FUCGxu1VS2VUuMC",
  "key9": "4fpYsGgtzfiMEHm7RgN95h1JqCDs11nvDbeTM19b17Q1UbmBV43PXVB2QsYHQnqMYBB5AGe6xGHCWfXMYNsGrQ9c",
  "key10": "2q7hUES2Nb9roe9cfzq7sUxBhNzQyG2TWzm2p6FP4WBV8uWeuHkSE8cuKHqqEKy9Jxpe9S7iFwbEFgyu7JsUAWBR",
  "key11": "2hCp1L6FJG6Y1HxWipc7zpryzx9n18mA1jktDnhzNA83J3ZqLH3wVQRZfP5ss4gHmjw8VJuFfM7Jxo7aNVMiSkK2",
  "key12": "25eotVHriHkZjAA7mpMt7rJB3EJzvZqJJJumTBzvp75jsRRtUWXBCBtqa4eLjBwZFRbAuN3EJRwcYJK7gnBsdKJ8",
  "key13": "3rAbFrajQQYDVd6dQd34CpuZxKviyJSGbi9LLWXkKcrP8fU6iQVoMCuVAfwFY3xUutHuCGt8bNMZKtv4PFog8etM",
  "key14": "5rzsVV8Bokrf5VqahbeftLwSDj37FV9UhaspjVYLDKkz5UV76JHSDUpFy12fxtCK8LULyz5TA8t1vyqVoMGGYJVb",
  "key15": "5SivBZDsEHF7SiBjTN1s4tt4KhkErFsFmJcHXkSyKL4HRfGgMA5fxGUqfvdK8eGETLo61zyNj6xycNAm5bRewJQP",
  "key16": "3ARELaoo8xfo9hVc8EUGpffPPvsFt2W2kwCH1UBxPcrvZkrpJDAed4tun38SAk5rwefWJukvSySrtNbpLJgcoUUN",
  "key17": "bkDys2C296RfhH7AK5bRoHnsxrVJoa2BAGoGkSYMsABjwNmqb2KyaBp2XL3L8Pxkeh8fG6mWro7gzLsNz7BcAhk",
  "key18": "2goDyQJv74mR5WAr529QQSg9D5PWwwdiydkyPfpUQVym2YsH8xnXSqsdtf9e1dEegYyPP2FrjhYMzB7mpURSrPwV",
  "key19": "3tjNmCFwCvrXBtdjQQJN3a74DbT5wpN33vX4pra1JWSkCSRAhQhU5TzWeiAatefic28pQCYXJ4aWshNvt2e3Ecui",
  "key20": "3BP7ccsZhLjrRd5pQUeJHDFoNN2iw2R2URXjPimyWLc1LxG7BbEPCYsvDNk8eCePZdhUXYioJ1V4Ww7BGMLhSZUC",
  "key21": "5ueuG5FmTKNLvAb68s8MY1hqQRQJHo5sf1KNDo1LpkZrnCAnhFeeEkd66PHxjJTZ5NFH2vcfgvf5tUpAqtg1KGmF",
  "key22": "BroJtVDq8oYUXyZBYshWk6TqcSdbA44U9jbiTBYF8nsU8uxYV8uMEbMwcAgJrNNBfPb2yfK96sgKEJmPAa9RRDa",
  "key23": "2teyVY5e5n9GAfAZPFrhSbTYAvBeMk6qEdm57L4CQ97YLcGuaKhGipsDwTK5SpPtpW4k9g8kNB9jUnEV8iVWCuYd",
  "key24": "4yrYXKiq5gDXJoGMpVAoDTiTqJF7UqTurftdNdL7WdggY9tvcfRhYCowY5iyAv5AtxxLpfQafQU3etjNQauohJjn",
  "key25": "3ruYfkqeEbQh99aXTPHqTKkrEUKFQTdERpKgkHsfMsyuepH6H3nvAeoxp4Qnc3rNQcoTRoopk8Kym4Y2DaAsqZxm",
  "key26": "4a5HmDVDspq8vyyriWtk6CBDLSuRfhUeWnzm916Y2B4f5Ee7W33QuNLNW2HAT5aWJuVyQQ7Bp4yj2jc5S98Qnta4",
  "key27": "45kxhRbhXxAY72ipsSh4paFcsN1pYdL3jrXrXGVm1YJvLQY22DpkJg6wJUt3BxWX7CW713TQvQn1robMc3qX8S7K",
  "key28": "3Uc99ixLchJJrzXWYMjU94qGzp4hZCDaMdTy1tobUBzYXKMnvxwdWXGyDNULQJ3L4RfNRpcD3CvYDHQvhAVDHjYv",
  "key29": "3vzqhUeY3FoqqfYG8JTJNdXzKERg7r2bHhMquBBDKzbHcnqra2A4kui1e86FnJNVR7bWkVx1xZgQycnpU5S5EV3Z",
  "key30": "2bjicqqFSvbrtceDkxLH79WYZrFThbihgZC5dkAYt95BnqnVXmBYfuZ1ufSZ5L3nToygre4An7byJdcsATmoQma8",
  "key31": "4ZbntGEWXcLuK2L4YgUPxcsa7C6rCwzc1nci9Qsn3XkYiANFViXwcyMTjbjTQp3DnP89KP5vEiqPyrJhj11biZbG",
  "key32": "2559MFwemRuackmiCLaa7HdFWtSrfyECFN3BDWVp6KX2ifajRjMos9Xqw6RjJH9nTDEkyFD4z1raAzGY6TobPK8f",
  "key33": "ECX5EQ1uAsfBUrwgn6q7VBvac8qYrXi3JDHM2g8GNVWyx21pNRLusNm9D4yodpViZ263xd8B8zUrsiQYL3zuRcm",
  "key34": "kWakjsYMKgGPdP4qKRgZFrVTrpAWfUCEbceG87SoTmaEVRVriUecfSgMRKZFj1q3bBpHjebKdd97tqcTraVPS7r",
  "key35": "5mAt6bHvhwbLLCBgGHYsPwfxUmXgLiBWHUooqrzyYrFFUZssWFnCuS6ctYLvrqJD43iZwLsWN6JC9xhyYYPTyZj9",
  "key36": "3WDv2TQrnquiM4NgW3V7BCBf66Rc8Zo4iYkNWGWkTvYbiszt1fpA3DowpxeV2AowhJKZQtHsaEi8n6Se5ykCwSpp",
  "key37": "2X8m6UUHNXAtPQERsbsq6TcxRok1XGZCBDvjvxWPe3ewNnCuSy6rAKT3cm66npKXqqgk8cWpR6vtzY55ocaRyUMb",
  "key38": "2rJMd9bmTGw19fatq8nuoL7Gv7gah3ELs6wTvfUww2XsHwQ8wH4s16FmzGZTAX9wAPkJ7UtLtqPhHUjuL3Nm1yiy",
  "key39": "44Anz9PmnnpyEqq7x8KgF8DkayQwap62h96UnAHzGYVbKmmD5kJZEjR8eFFuLzhn51gixeegYshHb2tg1B9mmusz",
  "key40": "M8sNsBXqxPwfyz1nEf23HsDJK85k5RkKfv7Xb6KYZbricytsXFnBJ8zz724vLkoq2S1deSuQX3bNkGqz47jjW3q",
  "key41": "4v57YMpya6iNKmbH6W4RrBCVbTu3rR3uwbKVRSkZ91SuwNrtWdRHCq7pUeBCQPcs2pYpxzpURcnqQYHBkc8mfgvR",
  "key42": "47w6Yat3PtfhpFTeR1fr531QNDjsbqmYfgK113tJDWqTPNzttHTapuDyeV734iYUoX5GbdsCJbVTfL3Z8UhMQtLG",
  "key43": "5PcYAbTsgUtUj1C1uqJM3mLKSLZKvHNTaxY7kdA1QF1VZbrH53kfQm57x9TjUApYiWtY7wJKTPCRbosSbsoGN2Me",
  "key44": "3czHf8QtGRHh3yHKnnRAJRTmtgTVp9wheHxMMVEGNQzvCrwSCufbsYpsvo5DJq8tYp6BGrFcyr3T6rJ8p3wLtweA",
  "key45": "5TuUexY8cm6WwjnQSvn37Fcjwut1QqfMZAjQRQo7GoHaaCvXu1hWTEj1TgYkJPAyBnkt66z5bfQCyg8Fb1STMZ2h",
  "key46": "5muaud1zkUMQztgZ8AWmSEhGUW1v7pkFFimfLsjAx92SBdGytn56fgQtTMD6QSLSnXonJC2sNn2EnHyPnT4rV5dH",
  "key47": "2ujnrah9J1dLg64VLVVKKZSMP7DQ6NkQmq4ZBYoDbKH2dXi7MRSxeGRvQMa5zsYDuSQS6PeBGBBBHkMQpHy3XAav",
  "key48": "5AZ3cudveyhVdxvWVyoUtTEV1KLAGpzFAT93xogPmgXLFyknBTMBeCh39RK3K3tsaBJxL6z4pmNUr1kVk2kroBxL",
  "key49": "5Kk8uN71yuuV3mCfTPdVvQLLBXELWFNEu4hwUgPdQ8kmKa179SMxifKo7NxToHQjfS5sMDuwT3PHDYiZtt36SjDu"
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
