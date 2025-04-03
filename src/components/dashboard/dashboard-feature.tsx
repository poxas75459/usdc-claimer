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
    "3bQ7F939jwEuJgH9WMct6SvmYtWSQUJJJt3uFsDGHXNW6rjr3k5EsWwAUogXfX9dt1d3FVVwVYcWMst6ym5wMQ6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3PNe4RB9qNBkm4NLbin6gZwyzUtMmpmmwW3Y8rWjAFZExAKJ7fW1C78kpv6Hf9UzNLYPhEhGsNkeZNrizefGiK",
  "key1": "2TaaMNtQU1bfcULAdHLfdnVmf6gBuc2H3tD2yPbGPNJSTWDzhCdzVKNbreaddyHG8z4KYm7ExuHr5MAc2bDuzpz5",
  "key2": "2Nr6m6TvDsLtfVBrgwQoAdjtRgLgBr1vAY1VDcWk3WgDtLtiXwaSTQMnM1MEmiGeQX6VT944mNZeywEXdtq6Lmjy",
  "key3": "5YJqSZWmHqQv24iQdn7cxorY7Uoi1e45pnmKFBKQvew3jydJhpzo8PAyBw4KiNZiykuybhtH6Mg2RCZ4ajCjxHbR",
  "key4": "2WyXh8etzxd1Y5pZXkzVjDctHJqYMB7JcDPvczogZQM3rQbq1M2Ek9QnXHZAt2mnNaTnagif4h1iwVqG6u9sCdH8",
  "key5": "3F4Ny1wdQtXcw2bYwthBnvYodo578gZGimtj6HqbwB4kvTi9LHKcNmYrm4rpe5byD52bEwfnAd4Zp26ADzuicXxw",
  "key6": "UWJe2UUWyX4Q3sUkd8vtakEQmNP26WJfMJr2ondexhCRtBfE4AqRnuXABFNSTyRhJiwufXeWQ24rGH8rGTLXgjr",
  "key7": "3wv1x7uXzDmRFriWt8edxjAfX9poZfSFZmDUyr5DPm6Lgt4XQwr2eiqnYoCQ7JarNSx9cLBzLRHQQtx9FjMbk6zh",
  "key8": "2Q8BzaU7rQc448TJFwiaWNcfLRQ3YZLXzDsPhDiYEDdC29LTaSfCSdopLoqp7XimrxtfkamPJqkN5d8zSyeGeXXq",
  "key9": "3ZX2wMH3Q1i7djniaWhaXViYZFtZS1YdA5LM6LTC9pTXiXDx1qHMejZYBmJYo44knHYLBaTgoHzjyFRNV1qNRj8v",
  "key10": "4RFC3HtaMAsY385gVsdDaFtjfSHArL13tg6mkybQX2dW684D6tAWzWdv8R6aEFqWA1GcYHvLbw4Z3tFLqhaG6BuF",
  "key11": "SjDd2BUR9Za5jiHYfFr8oXw7pEYaEaYRErz96L7hNgaQGLNmthrCcsYLYGkyHGxkv2WDe2g37A9QqJqCH2Dy7ED",
  "key12": "3CknNXgYjRVTkxKj8ty5akmV49fQp4xA46xwueb647XXXARvzuGobhWcvbrpNsCVA8JzJ4VjYemEcKT656btVjzE",
  "key13": "BMsskhB6T8253ttv3RKqLboMbjhBunNZd8AcSFgPin7MQtc8L5iLAb7TuoNdJj7w7gMY5FfPr4iEKBhnruipur2",
  "key14": "3sfYgNPYLZmxHmhSqAJ5jHtD3q1pVT9C7UG5oD7VYTrgNEyNPgnVMKxhabvx8zpdJuPeirW6D5Y25CdAebBqo26C",
  "key15": "5H5dsX2fznvXvjLu56o8i4TsmRs6qKhxik745LxecEPFC8nEXWoWbC9ALRTWmh3q28rUkhWFjhwYkZ1nnBKPUTAE",
  "key16": "5NEmjVox4c2TJQDisrgDV2MkJPdLgjVje7gqWnTn7fNxXFF3cWmgx568z8MzQcFU186deAahY1kv1M3eYN1d5U1f",
  "key17": "3Cyzk8Guz1CBSk3ggmzADSHEGmzDYD6QTkmpZ25gQyZTpeJVaXPbvpn7gaYo5oQabJDZdGb6iHNVUpnvtDqhtfy",
  "key18": "3o51KgGb9E46Lv1sDAKZH3TpBpC7WVTNLrYqxM8DCCRAJTNZTbdFRMMD54wky71QKrxK65aHp1Gz5rUF5bJNCC1Q",
  "key19": "3cAsgWjxeMWrgyxTnvkreknx8uPoYLWHufwoUNTLeK2krxnQnfWJmFQVW91LgcEsTNgLuzdmqvKyigC1wGYr5KEs",
  "key20": "3H4BZMLtDSnGew23fhKcJjC7wSw82GjVnQ6JFXjhzAu6x5o2xHhnX7usmcFG8UWixchnggC9QhFq5mxeCXjGCiQ3",
  "key21": "2vvU5U33V8w8Py3VoGfjZidykAHSLQVqm2N1jxrwRKu2L1pVLTYzVHPHvf97bokpwova2FhduwKptZKg7zZpwFg9",
  "key22": "X6db82Pz7kUHHkbKVX1LmtonM6cWarh4Jwrdvg3QNQfooR7Scnbpnmt52KXbwvuExgQNezh4eb8LBXdXZxfSpGE",
  "key23": "4nd79wYX9d6Twhq2tVgnuDK6goGX2337DYu7kF7Ukubk7RAz8irnhAUQ6n2hbScf1wDUnJv9i25C6FDdZqdE1MJa",
  "key24": "4dVGwTEKx9EJwnS5gJfaLGMpDyAdTUBXArGMq6X2ocLsJZxMzR4HeUy19eEADJenCNrLBPZEXoTdW9aSYUPBLemY",
  "key25": "3UePBqHJEY18vxyAzzJsPcBdHsc1ceEWT7gQsSZwvp6a9ZkJnngt8WHaBfrhfvwXPUZtLEbKD4qEtTU4L8msEGPR",
  "key26": "B9w3c1qZ2h2AAc7bzHzZK9rUiCEbEyyPKvBw78xP5D2e8krL6xoiXmf6d86ZH685ui8LKzzWJKpKcYkCEkSw1oR",
  "key27": "3Rvzkfhf79nCWqjTt5ze9J2a5RMru9ijQ6TbV4xvsmNVtQLgbyiPjwTMHFgkk36nbBUxYLy5J3UqPHiLTuj8HHoU",
  "key28": "43JY3N395cmwqFeJjh6UJ6uapCuPr74bNaeNkJtHVBD7JmiHqAoxLkqnAKAXjdNwZ77UeZM3zt3HgsCyLLTE7sDo",
  "key29": "34kS39SwcuqMiu7VqnjEboAwbs1rdVTxAbnQPh9w2oTLJCK51KPawhRKKTNTKSzB6yoo5xBUxwDGCwQ3nzjqtZP",
  "key30": "5SxmwpRL4HKbSDxeows6kiP8taozTyboD1131FuEs8DF43FgA8PTb5t1niUpy8NXSoVBcfAN5Uohr2n59XRN2wv",
  "key31": "2XYhTsyVxU2r3aPwAwv34h5yChN9Vf9Xw4GZc1gSjSSuGLWpF2jWL8c5S6Fv1c4DW84vVfNrFMvkZLzLrmaqCrmC",
  "key32": "62p7g9jGYMiHiMiLEKo4bAS2hCBAuNg29irXeMYzkZ7dUV7zdPUW56424iFywoN77iDcXuHGHA6V1y7SfVmeFsvt",
  "key33": "2JQYJhB8KQ8TeH6i5ZHjFszzpY66KMjmRnLgpX575txxMkDbJk1arCqPttyBRamGdH1RoFWiwo9tfjPBUk4wJLdG",
  "key34": "4raErmRLJYGmtzmAsJ2zsRqN3imrbHBa3AgKSF8iAFpxG6WKVTSKStXVUNZ2XQktGKTEqawJdBcHdKaWwGmKtofQ",
  "key35": "oED9X5XXge3ETzrCuirfsUCgVV2sBnfbTbHk8mYLdFhjgpu3HRRje2mt1KmgXDtUgyinuVAosTjQKckVc2KcNGp",
  "key36": "RhWXuJivLaZPk9t26pZLoddZE6oWJWZQSSAoZBr7yvrNWcx8uMHvLsgrBaqQQU4chyPpRmq9rVLbht5qF1eu5fS",
  "key37": "4gtJ1TXNYLV32DUfd2dABqhe1ZiBb5TMDq6MEVmNXfsm7mtJmyF27AJkCpWWzQSBLmQwNU2eBtnaWi9V2D46SRSx",
  "key38": "4aqr259RJd6FyQ4fcjbKrtV3zarj76nFPAsq1erCyN7MhGvXppuhex1ajjNEGBsqCzpN3ksjLfdmAMjakVCTqKZd",
  "key39": "55AK17eQtAjYJXreefT5hH8oK97c4oMgSP2uQRzMRNiZYwoPkpMjqXDUehQwMWcGvh7MWk7tKnYxVxhtXJsxXnBT",
  "key40": "3L6ttJ3jW7ShanB4BqFD3i23c5hVrJfNif3mge1tacgmCFgmyPrRuorPdL8Py869nouLKh788Quc3biJ3nmgQLNA",
  "key41": "2svaQY1do4BtNjdY83uw5hri8GxzKZfppx6QdZmxRGAhdnG6BLWTuuBcxXsruqXNqoYj5javs2umo1fd9JMCy2LQ",
  "key42": "xBRwVNp1E379Thh2Go5vmKQHh9oY1bKape13rUpKUs2Xz2b4Yhr1kUNBoE6Q2jWoquPfkjpoKJ1qzP9Evtuw1rh",
  "key43": "2aVhgzPS5pUG5nQQfrczL9iLXs1LJd2nsaB4DSKP6XvCygifNFQibeEAYeB26tFgu2xjmY3MPjQxa672fLxLs8js",
  "key44": "3FeQu8hqNxw1odLNjZUu1q5tkRAR9C9zfudQwB4k9mhBAv8oapisPDkFSmhyxdxCBPikBSP5SXhZ6j6gpWTm4Ws4",
  "key45": "4BwHdxxVTWehFJ7Vb7Y8X4Uqt2wax3QJ8fy4MqP1fq6hozaETjniEvLv52pLYVe8k9BidfyH6SDzuoJLvv5qtiSR",
  "key46": "3Ad65ZauwG376LTMdQQoJsAZZ5P5EsC1AxqijN2Ci453upg1BPKD2NxTuKR9fLk6TSu1jReBgMa4kV98KLxwRHq9",
  "key47": "388gm6hYbDdDeDzyi6Rpnx3fKY8wAPxdvVSMoC5sgXBN8ULZBZLctjpZjaXhmqqAeoiqBhaoWYHn6c1heX6LGzcG"
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
