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
    "5hGaPneVPXLUCZuVfzDVefX9HD3hxLk1qNDEGMuPr5yn5aMooAnpcouFcjErAF6js7mcXrwFTpHRTVWrtxkxmxEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKc9EeL72xYdfR635qP3f7Nehpde5MMmoHQq3A5mM7fnERgW5MueFh9PnBffWWezYQ8661kZeVZMyJNuCG9818D",
  "key1": "5UsR8uUE2MXGBoqvHfnrztmaABaHv86NtRfzTbiDN8oTsnxVtEFxSayZZudCahqK3VgSTPsUkaiLbAuCL5QGWDNH",
  "key2": "1zsQiFUKH6a3HkgdeCVpnq5sgupdFr75oWkChdkvpebDvH7WSwfJ8icc18P5JiSrPFvwFrjoNgiZn2qaNZHYSMa",
  "key3": "4x6cTvSjuMVtYEnWfTFnLHUVk8YWHshT5TAPqaGkKw4Nf7tGGYECfCztv3e5wvCDYpBjVzg8vGicthU2mHKiCxpZ",
  "key4": "2HF2vMHSX7Br5Xr3NiSKMBkTkDPAdYRiT51Vj595aP826eWdLN6GQSCG26FggevvkhH1eDSckVcvawsGZFzzK5xN",
  "key5": "2oS2SxmkgqpuR4J2u7SxFJBaZU1pEMe4q9nkwKephuEYES5tyR6K4gNCayYFweHsce8yMBJ7UFUJKRiHg5K8ZgJi",
  "key6": "4f1s97Hnuo43LGTRBmKs8V3QZVLNxCqP7YNJDi5vdNGyPJcsTnWZMfGoKmpaUsAK13kFPtPRtQGqyPPbhB547acx",
  "key7": "3BHTiQsQs1Ek2LK5VGXkWZSZN67c72yfwkxfaAJ7h3iZawubiWkcoghJnfU1Z11xqsRRLcTaFGUgMhi2rzq2xAVo",
  "key8": "2CwWfooHsMCcQPaAZqaChk9AFHAVGZe5cV5411efTAJUsgD8S6NksFnNfJGWc4L1jQqv1DiN8MTMCehG1ASeyUzW",
  "key9": "mCjCCDY8qN5WaPZFuVfctjjKY6gZTA3TXk2Z7Dz28STtNGUCvnMGyNEWpduH5ztFiRdeCgbqMi8SJwmBA5pE8kb",
  "key10": "4BBsgfsdkcjuzgGFeECww4miJprLv4GNDu67GLVZP3nv3mbHXFAL4XM3tcqjpadLNe9FU3Phz48sE4Tza84y2x8x",
  "key11": "5YxMKmreypyWLpVjCnAeBDyUctBY4PjVCDnVFPgzAqooCZG2QE2umNbN5TCQMcY83mHmCxUpUJ8FYeA52ohcpQ95",
  "key12": "3XpjViKCktfo1BwfBe9vKKCpWB2xmxieYcS1de97QW1ZQoRBWgib2yHH3EvEoveWAGSpimVg57FVUqSoUC9FUGXx",
  "key13": "4Z8Yau7CUUjPcaTPyQv4Bw8mJ1QiStwiVpitHTt68fEir42Q9AgnEXi263oT5JtTpGwM7e1WLcHzPGABqCGnsMYX",
  "key14": "2bv6jCD7saU2eVT17iyUzyGx4jCL41LCuotkiuFcUVbaS21LzzqS73gKxcH5mqSCbRpMPfoNJbaaY3qNF9Y6gq9h",
  "key15": "3zj3J1vrNnjLnW48BWB8J33eJbrAhzouw2vzrmMh761gygexVqN7TKSQ3QXKwT962k8zW23hEU6f9iGDokYP8HNG",
  "key16": "38VePpn1KVAjnm85TfaEgK8iDgHwqNrisTTj7wHmL1SUbccD8j7uHAHU5htTyzvZnADCQdaEjwVrSQb9DyHN9xRe",
  "key17": "4HoYg5e5H9LXwQ9m3DA44KWnSBjLS57YX8HznK5yUjmkv791zTWVKQdfZzW36UL4hbn4QwLo7To1rJXALz61W6rX",
  "key18": "3GBWiSC9AXk9HvXxvZ9kXSqy2YqYpfrQjsinNaSv5a1qWSFa64w4mY4aBJQU8dav7gNC9YmZr4wJmZgEpcBg3CdK",
  "key19": "3m4bC8Wiim3C8PvWq7KAGed1LUoDTJe5tJbDJQ39DJUhgkZw84fG91xY9AM6Xfg7MqfYPew4UNYNDFP9SUyV3tmC",
  "key20": "3XDiBV1ApB1jJvc1FVJ5KYNAwSRypFZHbszYzepfBf9BEkgLDdQmcdHQr9MKwYPWLHe3fu8jGDbccZ1PQQknrLqd",
  "key21": "5Lsbi5z5gurtxYWKbdMEAwW5ni3GJXaqVmEag8JfUcaXZz8YGxVnwcP5HYeUgzgsE2LGAVFzTgrGNCQA54Rq9myT",
  "key22": "26HRRNoJ17nKGogEag9gGqvc3n1js9Af7mLGvrmU5zS83VtZc7muyqxhwQUYUs5bibLpvFtdCaPDUcmzjhX87Ba6",
  "key23": "TZckzC7ozhPm5xoVfnkeB6sbXbAnRCBBKqfp2qeNzEsYZr1cPDuUBYFfLujnhikgbcWVVx3nvE7x8r445UymD3n",
  "key24": "5evEtqd4mUXijBQSgPhPnT7qbnv4L2WoPkqSbMoUaciSrGP9KHiMGU9z9xeogUuGPGi8vfNUCS7urFQaUj48pxAw",
  "key25": "5zqR3NpVAZErf1Qwr1x9fmDQGmgMk4VXmSvBfniKmhFQfpHZkrXcx9cmbd6c9ULB7eSf3FFC9Tdku6tdoypLKkg5",
  "key26": "3KdqubrSQGuWzk72fDCYxCatythA353jgNuViwaz5rcaLLCwrpU7w3rgVbXXr8TEgun5bHpCXGFcQU9vA3jSakbb",
  "key27": "22RN1FnqqAogNcADYcZNR1q9L2W2Kidffu6SNZsjpz69VLZLpoLhMfcMVWi4RGpu8zjcRCX3vydcWwsdRVDou25Y",
  "key28": "25fDiDbJqmAAEDRfctHd7UM3w6MirYjF6rJuJeKJp32QmLFSG4mwV6fUQhi2VfHjVSBV2nCMRCs91KvEUANyhKRn",
  "key29": "24KehzSJ4MzLWKcbgHazJx3SU1XRbcX3ZgweAaBhih6TvdeYfYaWAMeqQsMAeSRf4etxv97E58J9cCL3U3BNyHt4",
  "key30": "3ifbiL1DHXS8hDwBKjVqxzjLR28FBccBpmUNt8CAu7zAiKUkLN3cfjRTEJk1LiMHeHwj7XXXHw5j9RbrM1QntiC1",
  "key31": "wVhN1UAD4FebEem6qQTNzpedX2oFW4xT3zW4PWsuCZL3kCPefz8ZsGk4HqY31jzVjSo1KVfbMPqG9gzJLDc3HVC",
  "key32": "2G5HWAe31q4jGBBGKa1dGkjGmctPvtoZdJs2ofLuyvrAfsFgGhk1QCPgxDpTZFwF4aGdAs1ZcMvVxv3RHm5zWyTp",
  "key33": "26KYfF3rErVsLzE6hVeLLkurD7yyrWQdqk9B34L9wR1wST9ckpWcsbiQagMYj9Q6q7812fy5M9uGkNpfKJ33FYf2",
  "key34": "53F2Zzhp31K1MZtDuNQLCF6j4mC2zVKtC76WJDFbuHryTfNSH1ukePgbpATS86xB4GfWggRmQz9ttz64URsT7nMC",
  "key35": "2iFxmJuK2NnxmC2KjZ5CCMXyvugn6UoLh2941zLCnqC3xNDXLRffYW8ZF8BAB3CTPYZZpE7GjmEsJpe3E2R85Gd8",
  "key36": "iMEvzBtC9gV9NpDoXRtGfsAPCkkQF6HPVi1P4xBSXe3mxNzhsuto81xPfycQf93PF6JZ5VvA1suutCWpAfGVMMp",
  "key37": "5FCM993Ksx2SYLfZsxSzKQg5RZDmcXxG6DBVnDVJwGWLWHcfKg6Fbb4eKDwhpSP4KMTfJePtUxMZwxLgHqPanvpA",
  "key38": "46NQ9co9GZXUStgGAKpANaSHCEk4GL5oDyTcixhMwAC1XxetsEghf5C2wpqVkSQ1DkeVcqogts73eV5rMggW5892",
  "key39": "4NUYrtg8GimZiYtwraUZ2hEKs7re1ZYsyNYUSiFL8MUhHgphcKnqPZdK5eUBhtoasP57NMq93tLW2c2qec35p5Qi",
  "key40": "63iJ6cPQu39f9EkXuoomTwsUjFjSp6ZdcMJVkGT5ycr6FCf8NoT3iTh21iXUymJyTM8crUQ97TeEu6upiBFEXadV",
  "key41": "52hqeqraSGtN1ihcXy9XVQ8oAQRBvqdF8R4HVfbXaNUX72bPxzucoVq5fHjyCeWk1zrYJE3Rf91aQ96GbPLC3JcV",
  "key42": "SH14YV2buG7Ng1mQedCvFxtEA921pVL2VQ5fcWAxE4H3XQX9929M2F7wBDw8bREHoPYZsJgSHAv1hTDJwfFawnH",
  "key43": "4oHT1eiAaDAoSqy7XzshB2zDpN6B1kiV5uKFNBA6N4BMV4XcaRT9tM3i2ZTwXsB9pweDxuedMrH6LUJcKMfdwo2N",
  "key44": "4xn148cJogNiV4QL2ifhUfz7TegUwQFVfRsioV7pR4w5cKKsCEnyYwDBAoPkbkfp8BDTnACUQunkLNi9Z8vZw5VB",
  "key45": "3jMThfxtY8ZYp8iSh2Gjam5oevu7nusJwuo422Z3WPDdjQbP5iJwhnZSnw4R3sDZnmSdkvmWFELbcxqwvVLZFYBQ",
  "key46": "5zars9R1Jb7t1XhCchb4zNoij6BHZKMCAvn689BVCdMNzWnGqD67bYq8ah3xwf3KhWhAsDB497HpPxVxVcChxWUn",
  "key47": "3GCYs23Ht5dvoTnMGoFiScU7VtARH2tQvSa79E4xCbyyBd9iVTAX7Mvkaxbe6cUus5ftpjqYPVfFUiQfaygNqaR1"
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
