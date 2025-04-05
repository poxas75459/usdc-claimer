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
    "2cRwjjSxvhREZ6STbWBEncvHyzGNfPnzvQ8QY8Uxwmudvxok2MLxQtUe5Rum6yLX9vjW9qVD9atvqmiyM3T7nXg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQgHrdEgYDYQAddMjf13EEknUaU4NEuRa5DqAqgcuXNzYXSDBaiaA7LPR2VNZmL4p6FmNRvaVgh2amZWNw3ztGf",
  "key1": "2vBNn4ERHZDicqCMu9zd7g78kCv6pMi4cLPeQHN5GRL3Qk8a9aNMdDorHtCvaX8xfaVcg98SjxNiGRFExvmZZfMJ",
  "key2": "5J9eNvKtsruvMbCU2FvfPV8qTE1EDmNrdq3W42tQedddLNxwS42acLPx6p9WFXhqkBZBppQa7NHhomHrSZaX8Bkx",
  "key3": "ME2qesvYTjexFmqPCb5RsKCTGNPsgeGX6e6kXiMpB5dkL47feooMvNpYX4Fj521ozPe9c5gFQVwa7ZeXmDd2L9o",
  "key4": "3ikjsc3iC85ua2vvUBkV5PuyxyBRWx8W9GibQ8iDHjNDP1WneEKdX112QwxCizHaheCeUUxxg5h7xJzeMt5TZpkh",
  "key5": "5wvscuTAZF81JmaoFZNWBNDgE2rMtZr4mq2Rdi4R7yoVZhh6iQB1k62ia1wuaVaD4sETXt5mMdnZkjt1FXGbdarZ",
  "key6": "472BL2YH5ZS3FJHenWb7YVNXeENwarG23ycsrA6ZMgAVrMrQg35a3mzQiUf1eWa8tb5nc1XoE9DDjHcD4EebTPmT",
  "key7": "2Gc26qUUshzmSYjYFoVck6Gq8io8dM5fFw8FdRTMNiKSvf5EorkED2SATFjQtEjtTcUnjiM9RgZSxrrz8Ed7bn8n",
  "key8": "8o4ZcRkW1rG4DJvyHgS5LtLsU8A5ymP1g2pTGoNweCG31TGuaV4PdfSrfUHxwXo3Trg5uuUiDARZiZ6Wir59JbD",
  "key9": "3fKs43UJMCGsBbtC8pJpc7a9U865dV4kEznY9N8nAUCfBz6PZs28HaTjg5YGVDDG56JPDXK2DwrTSX4YRVcE9VU8",
  "key10": "3WwBtyc3KF23DzKz8T3BPYLbRMbLkrDHwtcHV6ZnpuJcC6DvEsceVfsGUMoW2dXCSQFzRtcQq5L7r3M4pWFVXxcN",
  "key11": "3paJgiZtkG93mPLHNoyqpYFpRuQuqHZac5HQZ7TNiXLagmaWZn3Z6aHrYuARkDWffqH8F8j8QHgF85d6PibLYib7",
  "key12": "4hQca7W4iJdJQv7wAKnBWWw37xiY6cJpKPUsdLtU7h82dazH5pHVxAYRELffaNZVMhsV3WL8PtKjA4toAwFD3GYd",
  "key13": "5JX3vHVihN87Y2sfJQELu8K5yxS7GmZgb9UJbBRiTf6u4PX3ByfBNxzRvwrHwrrqrU79jx7CUHFJz3jeiSWTs4T",
  "key14": "4WH7vnKPLyx4tXMEpNjG8jm2rvEXw4u5UsbX1JRz1vhn3cJNHEtuA4BRu5tJXTSNBDiub6mwyzZWJRJXJSHQvQaJ",
  "key15": "3pqixoP1bubEDAYBCpeP1wENuF4WdfyYLd2NezHWKhBHmAjiRvxuJR3BsvhscynNBTdhnLo5DLU5ccQ95XXRAJv8",
  "key16": "3HSugcSBh2AGvzRMi6BF3v93CB1iasN5Ei8VBoRVjEfqgbrifpWAyDkXQoHCjN9uix7hos48c56CTmHbfB6sXbRk",
  "key17": "8iBxySddRoukGUKKhvzVKAuZP26BLtwP1idzRMhWfHuLJj22V9x7NsCQM8HuSFCGp3VQNXS3omJpBKefThHqrHd",
  "key18": "SJX7mNTRwtW2eXVxwLkvCHgaUX9PSMqJgFn6THcRCvbSJGiLaqP8wNoo2ouztYugpzXUy1fLJ5RxCrbyMWhBQh7",
  "key19": "3stWRDcM41xZGKAQkXSGAHdm2et1rf95wpXLxW4QAP5r4hmbPuR278iW1fgZgw1Y2npsBsKwHijnXjAJu7cTysQw",
  "key20": "3V6UuuD5HPe6wgEf942kyzbZftLUvyUyxA5JvCqeCJUdACLaTGnCDRSNcmUvePqbezry3p5vw5NjMwk2LtyCjLjR",
  "key21": "2i33QQTykbeStvC8NJhQTh5F6k5Djo2dLFF91b2pGns1TbUATaAG3GGgReMvoHa1RUoW4U1Rt9ZRNALi6bhGpKGm",
  "key22": "2F4ScGDMxjyQTmDCU9DnLNUw7gozgtAPA4X61PKsjggmPbLDKG68TyFBCxzSb84gAuoQkrQmb7cMmhMFdGAQyXka",
  "key23": "48m7kDedpBQYp1CnVmfw864Lqkd3LsRP95FUJtfQaT83s8vtWrvg9iWsnua9na9FAfYPJsRTjgpeyNmCEAzsq1Nq",
  "key24": "4kVPULqTHW5WBrDGp584GDL7FYQQiS1T9cazH86hKFjVRT1fRzUCBtGrjoZ367LVq4LevjzNWZcBMMbQaKz8dA7P",
  "key25": "kvRouyoV6LpbKpGaC2nwLB6qHqfUDcogUQoSKnaaLKSg8LL9CN3RauC5S3fFAfT6yi8FmeRR66kxuvf4jjANFES",
  "key26": "3gugLSDQ4SfXf3y9W9G3FDV1xK7EJTbtbXKL8dPffuWavGuiYvs4aAAokcZad3SEJC67SNd1gbN6FNqgS37ZR9tS",
  "key27": "4mXwtLtvT3MLqd1oLTfQdGgjhiC9PT7Usg94THKJ7JpmLt8sG5ggupq8v7PM694Egawxv2boYg6DeStMjHgQjMEN",
  "key28": "K53ejyEcetScdPutBJzxY4wCqM5H92extm3V9Fn1JGaBfBAGtj8Zot9FgPTK6NetQE29SsJqQg6VxxYKRBigARD",
  "key29": "51cXK7m23U4mFtH7KHrWeu7GyF5xXVP8ComYx5om97pXK2KQECfnm6EGcc4JSvVw5idjPUN4uHenYghhqSPaDdsw",
  "key30": "3X6955p6R85nr7ZpW2NqJUcByvQGgKt5Jjm4Rdb9ZxGPZ41vWiPQjUmaTcWCLnfVbhrtoMdq8wgNgZE6yeJbrdek",
  "key31": "5tZpB8cyGTusMnFGmSec8a9FVhmtuTHdcKsmh7hAJw4caUTarxX2ratGtqpxo1KcDRY2F7qPC9aMR2rzq4vytiwR",
  "key32": "5PLJXKWr2XNNyTGujzfcCSNmknAyBVfboUZ2NwfJCt496BCxCzRQ9PNF3TkAPPYPtN7r96vUX5QKXCDJ4fPGeEw1",
  "key33": "2JHJmTnTiouh4b55E1igmKUoWUfFeK1erAUKenNWokQEBe64QQm8HoQxZdDEX2NjFQkTcE5faCPevK2A11oLTEhG",
  "key34": "4Tf5apiabPU43czyZ3kQFdSVAvf4JVdXYKo6uhxJpG34C8sb9DTwLibrwoMVp9RK3zjzgyXS6E2TU8jtp7X2xX8D",
  "key35": "oc6PgPenmUX16vZnnsAaFjLQDLKCBqxb6YxUbon29BSjWbbJacX6xSDYNGy6KxXpb2Lb2fk8Fxx7qkNy6sqF5E2",
  "key36": "3Z8prPgFgup3rdi3prxP8eY5gBhunkXWJ6Zun8VGfYcjYA7DX8vLgN3JHgTdkrcGTtpr3xXQGqL9fT8GUWZMhU8b",
  "key37": "2QMWVQSsXka2XTxqTkojUrAphFq4ERAckomKmd7Tt9KDijY35LWZYqVdkL8RGXVimenD77yQtadqRjr4U1guh6kv",
  "key38": "49YawiwuFS1hWjaGghChWURiwUhkMMuc5uD8ffL276myhwpxyginbTJRgxCYTnH6iBY66XTPqZ7P3kbxH3hKHFSa",
  "key39": "ZMPsmucDeLGchnQvNzqYiSnLSMBYdweucu5fpPuEf2jiHRzPPiPAEjvSxBSW54g7GZk1zfLuktgthrE6yVJcv5Z",
  "key40": "4bZDww4uMcEoqKmCtq5RRJY4ggmxv95Xr8v7b7yBJodGZnAUAt2VCvbJWm5VbtnQ5sBHRB7Cjn5J3T9Yuduhui8N",
  "key41": "2BoyDvV23rJ3z4GQco6VPAePkmh4gttfLR9Q5885ht9FoQeHB6dLEgPXVD2f9eyUQZ2fajp8JnZacQ7tzsEvMnTS",
  "key42": "67NZbcuJcQKEr8gYu5UDLRTXiZbwFwGTUpDafYpByGTnYBoteXLXtQAwQwPy3YNVTaUGTfMTGJYLu34kaASj5WdS"
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
