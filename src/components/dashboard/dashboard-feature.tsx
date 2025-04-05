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
    "gdDkBjz7Ye632BfEn5yXLSXSLoo752UUbwU1njxUfmA66JHx2db1a989Q6AeZJN3bMcGmMn9UPQB29gc6iXZWeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cummfx1ugbunEUhvFqYtR2mez3iagAwmYfKFcFej65nScSHjvYVc4bDXKsoSZxE5s4wULkNWPCCwtQA1mCfiRBT",
  "key1": "m8zV54XJtGsuPsYhNuxtcjjPBKpPCcJVs8Ja7XcZYfhBWd4BkmeemjJfsA9zYAQzUyD4yjGDTftkq7dyij5bY6y",
  "key2": "29NEUS2ZHr18EsLrghcp9nQtiJaRyvgET7QA1VXTzG9TLFhoSF5Ttc11YvdKjfrCb4Z5HzjQd6jmQx4vNiSujEG2",
  "key3": "4uPK3PfZmDD4LAvN3ZcbJ914EhTr3VUXmhzYPfezjMyfRYt63uaRVG1iBg5CXSWyJXMw5BNkp6DJH7f2hYAduDUs",
  "key4": "25iUzybYwRcSTaFM8KxBGzXn6VSHAw7mQscu98Ez2L3Z61ssKaEqeULwvDJnD459jBJ3kzK64tiax37JaQXJSQAN",
  "key5": "5rjtDDyQddUgPrG65oEA2JFoA3Nz7yEQ1aDvt2iWm2PmJ5QjsM1BsGUfhy9pqBGUJ7sZAgd7dxq9GA6JDNT1SYGb",
  "key6": "3Qm4gWQ864deBjevVuu3tXBUD9aP3g67t36jguSyTY4NAXu6mLksTwZZjmkp4BasSP6KfwMTfE5oCFCrFEzJFm3A",
  "key7": "28BrkkLXJVaydtTk6HTzDqdutP8NLchDSm16N7DVy8P5rk2ZimuU7JzAK1hg8L8iyEPzdLHuUmeGg6ZeqobcCtHG",
  "key8": "5wkXCjRwoSGszs1Zbv891rLXAL4H2anogzMyFpxRvyDDrEfVLDA48qgQga85bQBDEBaRksRqgRMWqttdZE9sSE3",
  "key9": "3m7xoFz3nmLN4Wj591BLZjeqzteWxP5TqzKsMBArktrX9b5HQqGf4JmL6822KKu9DTraVsFpwdMuvh2KD2bmQhiy",
  "key10": "JzhaYdi2yu4yZANDoJBRp2uUSVA8hXXNk5go3P1jcAao7B9EpuG68LcgpNsJVpZszFHrbqaKaywFKmB4p48VYEz",
  "key11": "WCtkYM396F2wqo9FKtYv3FaDsdkLC26UJxHmvr8CseCg4YumDQVcy5Bj6WtL4ePwZo4HKMRN6BXxvKrz3aiSTpq",
  "key12": "xBPSPnjjr6xUhtrKAsJ6rPQZDR4LsMTqxG4b4fPZiwJB7R2GFVrpCY3AjZw3RpxaGNBAts9pQrwUKp7VEegUJ1W",
  "key13": "3t3VYrv3PVjrjJXqTouPBUGZJWVRooRRkWRpSui8eTd7JsaBt44gU7M6d9LJopfCwX2StQWdNJ89AM6F6kRXTfW1",
  "key14": "4sd4qhVgiQDqS2tRzQyxofuATcUrXwnyVd6VK7eoV89jpwcbd7zjzJE328VwPj2UbLAEScpGSpNR81hg2beqk5Z5",
  "key15": "5zftkjDLcPEHZFhU9WcyuwBJskpxJ5j3jVyDdUbpYaznUG7ihH18PQ6hbxZJYPynAn3ZM1NY7CdcFWzr3NrWLs9W",
  "key16": "3JhSDeLJXGS6DzFotGCAZSwYq4nHiWQtSe7A8oxiJTyJTFevTTzHspEVL2BkB7117hmmow8Lm9m6mzzszS3jDLzJ",
  "key17": "57T1rigBJjK8ipw1ZwZhmn3g8fRf3WS5DL6txJ9QXGqRLD1Ctn4bWMET44orc5XyuKyMRcb9gLmGJdp2BvyVqnqy",
  "key18": "62pmvoPVghwCJbjVnwNvkiBe86fqKNkd9tUsCEWixtoKRvZ8sM4vp7oPDQwBdY1rjnCQwP3iCJswuuKFUq8xsqn5",
  "key19": "4XsgEkPugDbXmGYiRWx6GSNXYyMBkJKvRy8WbjYwJCcAnBbAuKddVsvG2Ck3TYbMQjHQRSFaWpYQiYnn4zdZmsb5",
  "key20": "3Arzd1xfuog91axzxijuBjJQDvCFZZBjMhdgearwmtkMCNoarYYQSWz4t2696ZmFDjfDuSCuKj6bSGjanpAzbCvB",
  "key21": "4qaxSxaiHh4zSDqAUx3oaJqkW1ZAKs4BH6jCQVQqTbfgZDmiG99rx7txHVFrZUPkjDrS2p3CWKcAge2pJzAvskAc",
  "key22": "3fe7jqRcKQUCi75J5jWM71rkQJXDf5iQs6bARVGqPoJ685zCVGqKd6q2798KLiizAkpKd8uHNvxJYbkceR76MLME",
  "key23": "3yS3pnsQby6tnqnAqwJeqhgd262WuzfeajEU5D7n58jPyqnHYqTLPh1LHs2DtpimQcKe9mSDFxCnTMbGyRLM3MeP",
  "key24": "53VeEQoTv1wbuHJXX6mAiP9PNXTFoFAHKjb8PDLsE1QbrH5ydwnQtL6eo16BmPB1DkV8PKCpf9bxqFHsEB3dK3bx",
  "key25": "9Tif8r5DFkJ3aPmGXG81dJp9UWiG7GjVVwaU6WcHuT5ihnzbKTYAkmCeeAQqSbViu37gR31GLqfkM4KeX7LUUQ8",
  "key26": "3UwnRXzWkgE56g6NQH5PP6gdNXgqKMcwTazyqc1iAyuy5bx7UNLzEwViTf5XjooGv2VvH6oh4TNh6TPDPQGajuyg",
  "key27": "2mC9XS2Ln5hykhzGTxUaqeq9HqGZFuQoBr4gwTcW2aWv891r1cYtsSoniH2tDa7W6brw2d5ndHKp9ebdwFLLSFeL",
  "key28": "52ykkZbkkDPJgGmWEdzoRT6Bifqb8zdsJ9NHLM94vaFiquV2mxkyytQYmprXURqbVHScVQcHgnvuxgAhLfVqigBS",
  "key29": "4NPzCASzf4mpDzZuCtqaqvDMxhYUicssnBCEq79R7Xw2FLKGBMjbvwjNNwGdKTeLz1sFF91bmhVtwiLxCuDjnd3C",
  "key30": "N4hXngjxb5Xe8YjxvWpZDWHdtGGk22zqg1SND3tEbHkx4YPedhC8c8gTMwdq54HxgaH6Kct2C1VHeZeVGAsKR4U",
  "key31": "467b7fWuUKS9MJbaj563ZSoB2oTchLFqWisGLJEmc2cqwka4QHdL1ycmfyjkaD2FmdURwQbkGsVuEfNktFYws2hj",
  "key32": "4SwZhVG8XiuaSTVhcvQeSa8xLmNsDymvCN9uBvqg7WWRWKTFvPXtX16cvVWzk7pTZP5eVxvYc1UBNzPmtUNJfVsM",
  "key33": "3CbxcCqdEyxd9E93QpbXDifgQCmALAtx7TDxcEwBQLy7cNpfnjGvCAVnX83WmK7DVKvr83rxNyEpFwPYFQfGSnKd",
  "key34": "4M8devSZibvGS7DKNn3BPfpKcVEUwDT458Q3tp6EuD6dDiG7EEo8SvedZ7korXZBqsGB3ruUdbr1UXa6HtexUpQv",
  "key35": "4RHsrmHU8edycLRsS9Y5pEkjBBhM2fexKTwKCpatDaB5aTV3c8t7EJ7B6gvQKqcDsZhyauwy6SygT1DhXA3o4LWe",
  "key36": "XgCwrzKLNYLoftvC42doC4DTrTckCcZHLGV2dmc1BpQ4Xkqpq55BBFhBy3npH87rwh3jW36BVT6kfMLosfe9wiM",
  "key37": "27cYFtffPZeuKVjRRMthVrH2ohKagHQb1We9LwJjRAM8GbvtT4Zvh3NDxRs17nTu7MajgUoXCwBnVaSnCt1rGWQn",
  "key38": "5uhLTDFkXo5EYfJCWwBbD2qqsq5h7YyjfvZ6y9sBSxRnoPiMEYLuULMzgaKbXBVqJmaZrFzJtaZWQLGjUort4LmT",
  "key39": "3nYQBzSxfiYMVUy92DnwMDp6SyZ85u2nEmKUb8U395EWqBb5mQ6SGmv5YmsMMw1L4hxgD68XS7tqVFT5LEZvsEcG",
  "key40": "e47KbgJsCyZ1PwdxZcTMhWSd97yRHbmBWYrGDFdDzWAnzYxgd1iCnbAzpTuUNEWUay4cH5e6Ee7VjWStGjXDUAm",
  "key41": "hf7h1r67qFkZUSHWZjRmCqTQUUJVtR9NVuzNGe6yNMFG63hnJkvWYeqd46D9P5mvZXbiTGhayNkgL9JsgAuTWcC",
  "key42": "3xSv9xC83KBAta5mP7HyqjpjkGbbzSRbp38p7YCJx4RX84JxrBK11uTYCMWM6sfdLbfVUtbcuhSxevw7mwYMZSoz",
  "key43": "2wf2N2WeQ4TaHnsQgWpHpVKUWAchTpLDHeJTEvdKUKh6wmgpvvA7nPjg5jmxzXSMZAr9rk2gTrEvQmfooCJ844D6",
  "key44": "4RoP6BZsFdKJXHnek9Da5wY6Y73aWTMd6PPfLfqxtqcKqcFYnUYbWAnZ6dtW4viiWb9fTqaYdocxaHHCmHaDq7kp",
  "key45": "67AXVLMATWkGbL2KtTkRHRfrF5i7TiH6AbgkzqfryLeyCVRf33LbS9QN4xxgBbGWCEy4mSpoTSV6mQ9X5Ms2Wwpp",
  "key46": "5H3Qjbs4ppvSdqeBALaRyrrCG1854xTm5KPU5Pf9tn3tgrx4dGxkR76MgKyWsKgFnHoX4sq5MpuMZPqkDSR6RsPt",
  "key47": "avjnqijw9c1pp1rcLbRHRzC5gvMuh9xKX8UNhi5oVqtzqUJ6wQmtMJQVgDGVTSnp8Tz6JPXhHGtvwby4CB2VSHP",
  "key48": "pnkFDE4anrdDWcsbCJDyxub3XSpGtV1N4g8RnSiE95Wa47tWxVBnFcQfMVbK6nqH2iW218pkegb43hBjuswyvP1"
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
