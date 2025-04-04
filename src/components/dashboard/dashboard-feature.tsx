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
    "29P7VSykuNCzhgwRg4BuzFfxFa77r55wXFEP5mJDa3n6TUN1QLvuFZxTfb2uuGmK5W9b62Co3tRXQRm1uxZgssak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sDWRPXD96X3fzqkesXiHbN8kP3JYVmsZo2cMWM4BeoANmbda5RwVgemciL3x4iuRnUK6a1E7qjECVoQFMaDPsLa",
  "key1": "52UnzuAvSRCp7Y8fgyUm9J3Yg3Ph3SxxuTHPkxeGL9pQGjuKhKvfyXRBXJknJ2FvTGGJXMwRESWU2csjFYeau8X5",
  "key2": "rfj14RsT1tSe6UpD7jsrcDHyA7rby7Hi9FhExjUV4P1sw8yd8ThfUtDKoo2dMNA5iyfVcAF2UsSkLpV2LZER1vp",
  "key3": "2nTmwCaiJh4ZXkhA9V1RiD8xjtcAZ1Pro9JzqkK1mngPJjqmGNQsk57BJJzYWfoiBafdAbjDhjX7ngvGugtbch2N",
  "key4": "4m7VVnWX1AkAxUCtjsxTXgLpHsv5a8XWGEN1NTZY6ojGNJvYafwGpiZXy3EQ8YkMt4EVZKwqU5i1Nm4J21TPLVcX",
  "key5": "5HjtiHhr4JeSzM266TBwmVhQem1r34WNfqH6aMtUGKMf9AbjXWbEb3osnin4mxr4wF8BHZJa9wSexu4NTr9gvq7q",
  "key6": "qkmX6C2YJPfJdhh6zRQDnWsopNzzDvjWLrUcTwzetUo5d1e7PRkNtnFmgyhk8HCuGrbVSSRB3dFBzr4yFn7rJP7",
  "key7": "3JMM4cCnrmnMX8u8kxqehSGt1zPjPEksgqfF7JrtonAWMn72PEWg6XoNrou9Vuxy4DzJhpxhq1J6ozWqsJBLzeHF",
  "key8": "5rtruu1JMFmorYv8TU21T11XWt61Rd5obm2ps8yC8jPhxEoumUQovsYfmWcBpAajKpKyxDURYuxYhojhbcdCX9wy",
  "key9": "3aUhvRDhLvUs2CrC5jQ78trGE3Y3zfJK2sSQ1jZ2Rh1evChTc5HK5VaCEMtfroWFuqUorRAG8SE7TScjfgR9SxB4",
  "key10": "234Y1BrbFiWBsRDgvtBaKsFWM6S3QgihzwKF1Bz6BT1juDit2WxvsJ1UTKdNLTbX8jyBNQQ2zZri9pez5wBoPvi7",
  "key11": "2CLKv5JSKe8qNLvbvYvkzrwkcnZSEd7t36mQNc8X2CUnDAbEsMePbSvkgEfwjVfWQ5TH6WCPZnqiDP3twgAxXuGR",
  "key12": "mzZyQU7rJdrVnveM8t8Gffx6mEE3h9BqZeHvcq8bgbFScZSM6x96mfbDNrwWDaChCZFyc95m7SUrYTkqAPoorJV",
  "key13": "5gBkA8KvX7ZciDxQPWAMRXsQWPDwDxuo5jx7zRqVkjXL7U4cST3N3JL4X8nYBdi2yB5x96S62t1SUe9Ly1fm7uRK",
  "key14": "5KWgzY3CwU6ixqRAiuKfwXKF2Wfq37JfCpiwJg7ua3ZN2t1Dq5xmS72qVNqgFjxUenqWjsoiJ2LBTGvfTQchnXix",
  "key15": "5wToEhws8Mom7uNLACcJKcJxAbcTRN2FxNV6rtR172UrWtRJxfP9zQWMkn2NccCt3asdEQAZ9ccpALzuSqrjaWG9",
  "key16": "arTgGHV2xheRwhKgobCC12aX3gv84TpekWnwiJZ5EDyfKkLxxH1TAc4YDYaQYN8uiYbTM4NvT1FX6gdzss31nkA",
  "key17": "4a8Y12nyxwWQG4aTYe2UgXpfVNEbrWnffofdEKkzsd8YLT29UbVMKJZ2JremqEGxBzEQYMRARt2nQTauT22zb4wy",
  "key18": "4yPVgBjDdajJM78A7ALFwRgysWiP36wHVK9VPkvzKJWvRHBuPMZYoK4AiRSkrUrHqbrf29NHTxRKsf3EC7Qyj1H",
  "key19": "V7uPZMEXzbvPCraT2xuYB7uhQEJVPaoKerszd5nPtqh54Bt6fEkHge7otn26bWhBbydN8Zp9WvhBMRJZ2kXJPRH",
  "key20": "4FBFrqweu2nHhrw8zmkU3kCZXLNDRHEpnRHsnCXmhxgWkvVu7r6S6wd5iZFy6q1puJPBLRwLTvAUbeG2LDk2jzAU",
  "key21": "5sZBqAP9HcchwZiX2QBkiF16wHxr7iJaCxmVYhzZqG2TLMbCCC4rV4fPN8iSVWqdmZ2cUauZyLmEY9navWdaYSvc",
  "key22": "2q97vfSfT1KiVXfLkutBSmtTM5EJ1TCNwUqd3fQW9Nyu4WcMK9RRzR2qDUodthHdE8BeFGazy5LZNcuenGunLpiV",
  "key23": "4yHfHT7LmYDuzUgXCgksC7S9sHYhjV8iTgKHQuUVr74t97vonLky62TaUVaoKtUoJUcpndXUXUwgYsFrMvQeCB3Y",
  "key24": "2F8Kt3sjWYvUVsxaA4eBiuRCBnaQtCwZDPSHWekfGiGC1fzR7rVrDoCbdRTeqc6DDMEuSMnb5fRY919Qbahu6nq3",
  "key25": "WJAr9QQKNjVJ4Y8Bcz6uyYLo1KA7irhxDXZs5EqgVTCFrazfbgBjFX6yg5sZv7d96rroCZgZDJ73LAQ31rWSJ4K",
  "key26": "5iehMCwZrqsHudn64TcdLG2S6DRuNCJmrg1FnPPpWdMSbaeHMFvaPbu4DzWbUBpymV15BCeKLEKWVr2b3Nr5QBNi",
  "key27": "5YSj6DxWV6D9k1wXosYyenTfhbPFVH1RJ2yEyrQJMv612veRqApnS1eHrT6UJWykT7FYokcHSrid7wVfQkJEe7yj",
  "key28": "5tRxp3hdufu6NHZSUNn4jHqYXrJQK58bBd1XoMAHFY3djkBPf4UXs2xEe9zchXhrkW9BxhCPixJCpTTaNMzj9eSx",
  "key29": "2hW8CzJPEXsmDVuNHe1VG5WEhV5e5mjSqQsQZtzkepp8buibsy61xHNRBqHTWHNP7XdheLWAQK7G7zuhhnVVpVrv",
  "key30": "3KzhPHKydTKhGfqbPjRs7BjGEW9jsWz7DZAbTiSMekiUqxyPje8j45nXfj28utCSCmeZ49Vgf5PHC8qDyxB7Xmj2",
  "key31": "38rNGmPjFrJWwdMoaL3T2SHZ5iMyVTAJug5NkiAAza7q37PV6g6osCuVbN3SX4WgPrHnXcUsNfQw83TnPdTFFfGp",
  "key32": "31KZ1pPYqHZuaYQjH8no27dSfYkyAFBTuMF8bk59eUQZT4SCqJtjMdKYhbP6KSkEpEXyDPXo4FafC2ait9cVRmrE",
  "key33": "67o6JQsdiJNz7b2inE6Z2FK7aqHEaCFezayKFEByU7iAi1RvGyjCjPUda4Q2KtbPyevqa1xPWpoe5NYTHyPrnCvv",
  "key34": "5ZedGq7xgVYYGuCcePzxfZiRqCYUGa1sbzRc7RWc3S7C5NdZoe5ticVxSB1hGap4h6HhKrn4Z8JwHRw2VokGc6QS",
  "key35": "5uwSgcUbR1xkH7K7t9vsBRHAs9ztgdzcqAorXNLxJ3Qek7r1cRp27HSfvbWHaAhEuMTiTR4PU5bd3W5sPiKhgKVZ",
  "key36": "4DbWuQ1oZyp4RbPoaPUEi7CV2fkWD6DbyFqVynFPCR3sGLGTha6Z2rXstTvE6DmnphSxxj1iPiA7bJ6K7mo318KT",
  "key37": "3CrW7Z3DkaZtM3iKpqrShxZSYoBvAhsJ7dfgYqyAvj65uUGAR2toqgnCDFqzFog2dbazUKuuERxosDksmX2uV5zx"
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
