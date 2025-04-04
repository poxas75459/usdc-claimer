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
    "2Sn2PsjgKMTMdYRxGFSntos2NCiqRsthwnLkcTiuhihuAXcm5EArzFcv4hrwFyYyhxw9GyoGHYJV8X6GHTnnawX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqS4W9jqCzBTpsvLkTFTSuVuTJmEHYSWUheD6MN3BxdNuXF51BhDGHKRcstqmLbTLRnmujhV2VtHUfF8W4JUTqN",
  "key1": "5EQUepuSt3MWPZBA6TUaJnTT42LNzN3FHoTV1Z3LoDCfFmKXWqYnbG3WGyBMWtWYHyvFtZsZd2vUV8WfwCTVVWXg",
  "key2": "3vNPWBZbmmNMQgN6ks47KoLutcNzFqyMn6nnaPHpikb9emEFfGyAaECj7eLUoEWH3nQuL6iy7kiwnUDiQSs2KPTS",
  "key3": "tWqZhxk4DcfNKXQUW1MXGhhdGuPiqhutQTzrA6LD1hnHXFKvVARy8qpLBfTLbvLmn3Su6HipafeVhvfFS3EnQv9",
  "key4": "qaxTbY8vZK4cLmno7BvHAKAitMpbrgFUhbhhyTk3kGr85yhakNNXAFDJUm9Dm6u52WzJxnMghyCLqg3aLVg4sHr",
  "key5": "4UhhY52ZDGZhMYj2i8Hxq4etVPNjpeL2de7tTDV43Ue7DBsEvBRL46ZeHj6Tpw1eTf1MPiUphNM8THysiU3bMVLn",
  "key6": "5HGK8xUK2BTxju1dNKhDV2tWqtwcRWHgo4ULbVwiPmuaVqPMjYuQVAoKnSfonipxiYEqc8WRiLc575XJjvjPDAEi",
  "key7": "RL34Cv16M3YSTh9wrqTfkTcTcgXehEbHKXsgmfLJhoCahPXbXmNA3ba8SQA9KiWtVRnXKAnTXts3H3g56ht8PXT",
  "key8": "3suPJG5wojdAwuFyQxHRUSACzewLHPTKqbrg6JYGCvUqDeGsU4Y6E7xPZsf4Efv9G9wm5hQf6YSz2xzQMeCpFozd",
  "key9": "cMuGh1bJY8KSmSs9WgneUpkQFpEazu2BEDPoWorueKMg3c1dGchdkwyVyGe4ApphPuHa1CFsTqJkwBoZG6RxSYv",
  "key10": "5PJ4N5zbHFhxv3oX8oEXhhFzT6buw8aqpcmWEXgrnuLKLYwXgHZCzbkktLCqt1UysvVQcHbSFuLiPt4nb48uj8ay",
  "key11": "4VJ4Z4g5Zbqgxgy2BZnxHxwwJ3hLVDkjAiTs48t6cNeqTnGZ5k9fJ6TZKTinGk2Hb2Wko3C2QAYYVKxwuN56tZBG",
  "key12": "5wS16RQ5JU7qY8EBgJtLQUSpyj3bE6SVdnGbHmRWfpmZotGNqy3PFioSNbGawwwZ35i74bsL9nsMvMkcdGUP5yQM",
  "key13": "5ZGQC2BPE5D9GiXS3j7n2URM2cEhhTHHeL265JJPyBtjjpqs1wnmTvokJjzMqmAiuGj114znwmXjMFy2z37AKpcd",
  "key14": "2eP314fPdM18SrYxgXP3ozbrWwsnPrSKmGyFaGHM5U1fi1La3B52Tv8J46Y5aQcwmbt9KfE39MBPTqikkWmeE5xu",
  "key15": "2bVwqfd8mAzZPCvgQfVLn92fghoVUV8ZCBcP7s1ZCpvoPygRFc1c3qYzEvGicEHzvXSuwjC8Y7KauLoGTP86PCEu",
  "key16": "3fzPevfCPnzeQGMU4XwTfPpPCG8tQGBvKRYuRJTe8NSeZq3VhHxhQh3wUDGZYWkxG5Qm5aRwaJaEvXjJriJ62KrE",
  "key17": "4xr7FB78GerGwaBcKKGPE55zaXdKyPrnspwePCADdVk58EN3WUQtHgqGuk2xH79M2fe5UVPsVKrfPhR4L4ZtRkAx",
  "key18": "2Gni7mKZ4QbfpwEMtoQZ3scFB4HQQaiCL7f7KhbePxHuRRyUQpoVFv5TqZEMyzXKw4icY6q5z3HRvo2K9dX9rqVM",
  "key19": "4auG4GPo86EDmerqE1q7FfkyKejBGLAkCiYhBW9ssExm9id2PzLiXdkPP5fB5bh8LuVAmLQ81zztjkPKhCbhzpVE",
  "key20": "51uFV7mcQjnbXrWpdAc4oAotqHa88HyCJLhjEeiAuEUj38tMQiE8egrzjkJv5B6cPJLB7AtW2pjBB5gtFfnkofWJ",
  "key21": "4wCmiDVzVwtLpXSTUHottFxiLQb6k2C3kXxhLNAMtbHo1obCT88dysbn5zNmVGDFAnENAkAwPCUJvuMjgjcVsZEX",
  "key22": "2fuAcuLksY5iAtWYBmw3e2ZCgFJEDDMxf6xo3fqQUULZ2MDJZh7HA8BeSh6kppDtXW6wLeaQtfeAWVjqyctDjr2W",
  "key23": "3YsBQuvHLP2Efc9sHWVGjzZTRTzDAtxt5EySDnFoJaYSCFfxYXfVRPXDwmnt5UELa6iEcuqrdEbXtbwcVAda72yt",
  "key24": "2b8j2XYGBXaqwyJjisgrAGanR4LzbnpMnATQGB58RmoHycdef5dmiRmn6SQ1oDU2SJ9xtYTuoDxQxLUE4yNXbdBC",
  "key25": "5bXnBjjdudzutkq8UAufvWSwZqzvdpuTRxRTDfTMNfjcJ3gvam5jP13RV74wQ6CwRhiZv3iXqhBtAekgDYCUfvTa",
  "key26": "2eA1jSiW8AZPMTvT7tSE96B3Wi9TBqfCfCWJu3KGQdKS935orKudYJJR6BvNxskXW2LowReGGkdQ1LJghsgT4Ux6",
  "key27": "vMRVstvWvKcvayJVmD6ZwhgGNceM86kyGXQWoz8yN8iyN6JZpS2iqPPQ5ajiKmzsgic3uk795fVg1bqqUiNR66y",
  "key28": "5gHBdeSjryhXDdC7KvfkuTM1mLs2BREVauHNZUpoWbGLuDXMqptfqMFa9A3wpFDfjJgtc29z7fXhoueve9Few2Pp",
  "key29": "4gzeiqCJyFJQhHtKo8UXRwxP7bYP5brAJVMuRHzuXseWuLxDAGgcUGE2jHqL634QcVE3KAtYtgbhXk2hzzGRZRBY",
  "key30": "5WFibbt8P9rFnnzJd642t4Gbmidzw18VdLVt2mixYZifuFWSDq5FahBB7cZJ4mKWTtgvnuraytidWAYX9JKy1wbB",
  "key31": "YSnYnJyYAfEfVM7Gbekex7CHLZ8fy4AzhQ6Pv76jTT6CbC9NGpyjqgScUtiwPF1a1GXTetEHqL4awG48p9522Vi",
  "key32": "5QjoWRTrUQhFrABd2rmG95abzLejQTKfki6Qqa3byNEzReMJx7Ce6ravSPkaBUH1N64NBU1AJhiSaCCRXGJkCVM9",
  "key33": "4BDDyK6dKESpEK1925zE6tXaaHq9Hoy3ReURKoqiwe2W5pqvmAQmkR26UxyX4f7BD8npzCTwrMZMyBhh7tY3XJWy",
  "key34": "527Q57CNcw6FPcMJ1ur7fG7KenkjdBFLbcHqsD6oqNJrBk18ZCYjCuUgLu1MFiqGZHbRSrtgt3kUx1J8zaAh55iJ",
  "key35": "2cqn4NJr6sXJnZsip6LBYY53kbTmRKdNdPUJvQGbArLZnJS35B5KDMr9BcdKxmrHtcbxgJbJJ4eG3HD5YXAGhjtX",
  "key36": "4JPsHyy6ERWNwAsqYeqXWBe1ZEgReqMKURcpm8JKkjDgCdvThgJkkgcTBz8WRs6ZVnSEq4673wDbhuNHrCysWT35",
  "key37": "TRKVGDfLNoNNqxuzZoDg1PrwnfpBVbakjfDytTN6yFMHv3bcFJ4VWeUsXStx14rJRRUeBMTS8Rjik4LMcLZ4Pzu",
  "key38": "2NXfv36SCYGggUfvpD1TTESmksoZ2kkJk47MgtQNG54f29fRyHJVpHQCmd1oTTv4B2mCZuDjNByuW9YTmxV7XMMk",
  "key39": "2vRcrrWP7n7v5UyVEqBvUj2eSDUrp34oJ43rA2wZJjtftDoxonrubWHEx177FBeGR72Kzjg4hZHhQGuQbm9VvWZD",
  "key40": "39aZcM1Y77nZDVEkT5cPWPhtYqVTKaMFjaAhuLuQpBua9k5JEYwDSnzmZNrgCKvQerP4JtSZUPvn9C4Ued5nLFMd",
  "key41": "3KQHpqNwYWbHkmhzDsTGumKxrNKjEk4oXiJqRATuHL8h6mvbpV1B1UyuNoyEQs6C5yhX1ZWRWwRuibhRQWpn1v9j",
  "key42": "36P1zLPtSV3sSX7oC6Kz35zmBQdbXMemFojffvjQtYsPJYCSppie8pFwBZHJ6KsyFBU3q6x3jaByPENXqBpXsvTt",
  "key43": "2TFbMVq3jptLsnV8BPG19iRVGiN6NzutbQWS7dVRD1pHzCSJXYMJzFKQNqo8s653w8pvfF3VsBBGAYjqyXaWzvnH",
  "key44": "3NnoXCujXENH6uhRbf89cdwe3ab49SgjDhzfJrjBLkcnpvCa9rMB3Mmns2yufXkeVbS9pr2CUk8bHN5K39wjoCyY",
  "key45": "4LApA5EcUH5cnXpGbcAjKmJbwEeb93cmZqCxrfKyhoSYkzQ3Tz2cDfPPc684BRA4GQ6Xy1ME4YhyZxr5vwk95yKJ"
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
