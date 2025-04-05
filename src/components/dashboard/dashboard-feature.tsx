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
    "3YsdHbNQyU3dq5NnzwKvmkKdNTFUTc7FepzFMuFiS2zJ8pMUQcaWSENFnoUEksgSBTMV6WMBNcJiafmE61yyBZ1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cxPmd5AKwsjMejz2xqLN89d8ZmvA9bdRWVfGb9EhaDK9ood1CFR61mAn7PJZ1BQDKE2efTEEHdHhHbENgULt62f",
  "key1": "SiDVTLebTkaEeUKu24Bs6gTN8DhmeAMv5ur29PYe1PL9FhepoAPJyNtx29zsLw2snCgSLFJwPhX99zC97YJ7QnS",
  "key2": "21ABDauoVWce2usiucTBDBMfpd6hJAgtkKV7UxZVg6QsCcqphDvKgMLvtfZyfMkp6TUDtn86uV3PFfdNKv87ayk5",
  "key3": "EAbBiiNH7sJudK2ifm2H4g8KQ1yNhRurTvZ6x9SLz9aGBimmV2MBDFPXAz3QwzRxQqZemPFshRwcUeoZQA2YUqh",
  "key4": "58wXyTQhaiKQ1XfKb5RQGSto4hHhcs67eoFEAgJGgjLyMKjKZELV1dzUWFTSdkBZLrgcLfgWC8ABZXDnkJ7N6RrG",
  "key5": "3dErLeHGqxQpSrjp8MM9dqKBbF4ADQpnHQ6x3cMQk3xWoH5Q1dVMvJp3jnGYWBBLZJp9L6YHqFA67nhr3E8fMPgh",
  "key6": "389jGn6gh2PTF4EN1UUk5yxUWKiRrYnPNzsUPq2s6U9kxaDfqpicnuFExR3TqYQcRBksVNQpxDMr5v9fQrXEvWmN",
  "key7": "3UkLpTaJgrymcEUjEtGmmT7xuqFJseamDZAEhDvujFGqZdASUUVdMZ6kbLYFQJUzuRzNLZLETpKcpH1u4FkDGBXt",
  "key8": "oQeWVxcc8jk1ivYFjNNWf7qhEhZV1MXzvLgT4h43Kb4fapPGAVpDYFiys7F3xQXaFQoqnHd5VawwAhz9iqnGQGi",
  "key9": "462zPWzT7w4KEgm6JL4uxmqsoug7QUMWX9DFZi91dd2eCuJsG8j7Y9eXSy4A59DUm8Gfnmj39yXJ1ZHquprHHZBU",
  "key10": "g7EcXxVAgaMjNrHkhgZTWdXzJdM4shUQNEjmhbXeL7p3E86ZRVRQ8tdxaVBMHQ9HqCoWnTQRa12zLCM7vtwM1x4",
  "key11": "2HshBNnnH7v9kUWDTv38BNL5nLYJ5UEiT3MZJmKTGZRTZ4aDyrwiPGms3MBqHx2S5RHvgxi53xPPWYoAWrhrd1Ag",
  "key12": "4sK9sJEbrpVfGfvNNVAVmuoUnfZ1chwMCGKRRu17zC2G8BEdQ6rr2ybzYyrS1zH4cJyr3Kn3WKh4R2wHVrs6hUYu",
  "key13": "4wmGy7KL5sH3Nv8yx7Dtbhgqj7jeaSLEhM6kgRvst1WUgBp24MC7X7UdftPAjhZWU9YJvJMDN4AoAmrxwRRNkpFH",
  "key14": "5jhP2ADBtiDFPJpowFHfwi4GbjxYMYqr1WQPCYRWC48ZJsyn8FmApjS9ga3oPdhWQ2fcG6oLD1EzuDM2J5ncBG5D",
  "key15": "42RxSUdKBZPRQeotXaU4mxshqzd7Tkv5hHe49EBY7jRwZ7hsFqKCH3PKWmvrh4MNRMwcbGHeEXAPwoPnhK8qFwi",
  "key16": "5qZf6fNwkRB639nF67fXJnXYefGQY18oJbcQN1pN3qC5MDzXV7k8UDTE6zQ1YkJiUPKnqR2wwX6kyscFCXYp2ZMN",
  "key17": "3bV2nhZKNB4MFLHhU9So5UcCdY85D6SJjWuzvVpzwmWR6do41EWqN96wRdKgRkkd5PUnCkBrY1PdTvz67msLdrxR",
  "key18": "45ybMPBitRAUuc2EZTtZJ2cDRL2DAUZGEvEeyq62ihc6dWDFqQCe1BbnxR2uBdRHNmoac9zqzL5jZUhy4L2bRxJF",
  "key19": "toFnpw24sVnuZiJe1NnmuouYinPgx6TpA8ULw1mKDZzoGoHDBoDrShNwAyF72TyzqsNctQNBh5676K8NhRNkcpY",
  "key20": "3f4ydj2xEKnSP5gmQZwRTpZ9DdEfXWK7FChm5RYYLURiu6XNvN4PWDxNjJULTPak3MY9aDoq1HhAncNyZ8NC6npg",
  "key21": "23jrJjLSQ66nBPEVWA7DZxYyV5RMCKJsP5EHWa7ai6qWRNECjpMqsXqqtmAhmSxSceGaXvkhCXWduHefjBDYZyn8",
  "key22": "4mM59zRkYCZf2zU94eYRF9XF9nCttHUfKM4CwUtTPn94PN5bmeMFBPUBjJ5CXfdtyZYfRRsrno5Dnqb1aMyUcHfn",
  "key23": "5NYC1juaWmd8pSj27k9rhHFFNUmu8MdmQb6K93SmgYAzmi6gAamEKdNNG2JY11BjT1o92YnGc2swbS28cXPp6hve",
  "key24": "3ZCAfg8YJY9Cuqv3LWScJNRZQdgs1E6emWpzSg3rMovAoy82h62pg6tRYk8tGhT2xrEApa2E7eN17QfDgwb8NYLF",
  "key25": "5U3M7yfeFaeT7y2yF4aVcyJxUvxRwvdyvYTaCfZNAhnLBZTEqdWDwfhzccCrVdSDtR4fnKrXYRhDbGo7XjewKmZd",
  "key26": "4xDHAQWp2pW9BLAD7ZodfsEFGAFs39X5Nt2QWei6oHd2G2VnBWpBKJE6jvcQ6ZWCcbEp9w25G1YDkCEcNBtZCrfA",
  "key27": "4Hj6aRQSL4MEfR4KECn4ikfFzcnx9E5qgqAe5cTVHmg9zVkLxWsEbuJ7LaYHWjc5yF2LRZRU8azugHsT8YM9QnPc",
  "key28": "3s2KJ2uQtVx7G25Wfq8VdQiUBkfkLrmVMkgdrWLTBpArWNX8u4MQFGTrZQgeXvAPmn4A55BnXhpd1WPVVGdzmfL",
  "key29": "4esTYNMbbU77KojXNS2s6ood1bYbiaMacYjo4i2sxEYG2KecLQFmdyFYqZPnu4EJdYLA5WmwMP9wE9DGstApBh6i",
  "key30": "5FrosGNKpzHr9ng9R6dUWQzCFYQAHpi7mCN4mLu2aaf6cBaQFun8DNqEnGTscf1bvnHevZL19Ne1pC8djFYaVQ2R",
  "key31": "2iRfUjqu5s8GNX4gpR9mJU3CjPs3Pw5Jq3gFSbjgj1ZWfkur5J8E6dB1mr3FFxT3vGx1twtTbSa4ZPujwAUrucer",
  "key32": "5zxhiv1gamBKpkQuFywJwu2iQyfWofoh2SemBL1oUYQosudTGuifXCQ6tN7Rm3sfdbtpseNQbUSoV3rL4kRfJx3K",
  "key33": "3MZXr9ofij9puS8LMvDDAx9EX8D64Ar3zue9qrnTCL42kVmwUmcjLFAmLabDG8qU6so3k3ZuntqmBPZ1upxEk2QQ",
  "key34": "tNaupQDiy4qocffAwd7ch9HxeTmSUUseorCzTSaXS2mGHvYULjZkwGdtsFTFabNeeGVfFV5wcz1ybgzhnAKfiMf",
  "key35": "3ZdwDTME4JBw4JC2C59xgSBPwjHGNRpj5uTWb1J8ZX5cfXzsUXJo41fMzXv7V1wZuvJYZNyfLbbYTR1heCcRPSQV",
  "key36": "2rKJxnsWiKGkjfcPaUTV5Minh6fYTJYqEkk5SKTDiKJ6474suvyBqmMULVEEuxZw531VZA6ewUsd3avPXLhd4tUC",
  "key37": "5CH7AugAoyZXLdRy4y2BCSYSC3eFcqhQdTyNbyXUEGSibZnqdkYkBLsr9ebgRfsmtKsTTdYopmy6TvwZHp61VkNC",
  "key38": "4iBBX7F7Gv34DTvxWUufKWbANxowjUKpxGFPgyTPwBR6TpcgpY8FkRuRvdEVaszpYpiHsJnV5hzdbtiEFxSu6Gvd",
  "key39": "2VvpGrBJu77yNfNf5edADRkUubgYJcPgEdFJd9SxRzvw6Bjgzrxo3vp3qv674wan8qWwmFF5gxCJVBM3odQjmhKe",
  "key40": "H3CtrHMpX5osyuc2xVVVSkMLA5hFFd3seRLuLgen63V52mFdFp6uAHjScmM2toNzvGjLqsh99YkwvGnmxWTo54o",
  "key41": "hFndKHzsD1HzFYoXk1Fx46SM5TkK4yxquNiU2xF8Zy3XA6ukRYECV8nYTvnwrPzCZwEqYkeL5wqfzGNqGNBLqrs",
  "key42": "5pDo1mBjGtETxCR4E9hB5tGA3YL2wESK8tqyuuzUNmkXTq2LDVFKuQSMjD146Bw4sg3EprRh1a5EBBMAVQVVf7Go",
  "key43": "5kcqhTBqKuqZoykMsHJoDKWuVV4BiQMuJCpn7dFqy2wmmjd9NJttRqshKY9S8gardZydeRGtCf7fSx7srnEALM82",
  "key44": "6iBEa4geiNWAhAGLyRJyij56kPW4Q8YXo5hYHFbDu6eeEN1LHZgo5gbYGRukCa2DVh8wUYdR4C2z57Wvyhrz7Ky",
  "key45": "5r212aCy2m9csVFogFq353x2VDMTmgij6GeeubUbrp9aRvGAoA1mBbaQxJmNPkRp5mQznDgRi9wzbPBxisB7nLyQ",
  "key46": "62cEcLYmcarivvwKcP2wFftj1GCB7KSnNKt2qytPbzJT86SuLVefG2eB3ssTNZJZN4auZ7FmycvGTQeYZM5u3wuB",
  "key47": "3FGoQu1toWWQumjCaVMiZ3tfhEdrAnpFtqf8gesFqfBh9qZ5tqjqBrkgKmMxG1TCUv6LEb9FcU6GXF128SChdcpA",
  "key48": "5otJd78Gx1Gi7aWu2mvtqxbBAXnLsYr3yCDpA3E7Wpr9fcL4W4SfxVDrVGJesnCJa1s7dZ2JUY4FkXBSMHV6dmss"
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
