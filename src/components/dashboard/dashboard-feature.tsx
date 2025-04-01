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
    "5kKPj2C274LCFrc2HtJSspkRBxAKNK5gyR6JJaHqam9PtamtfF7AwUJo2bf8J4XPTGHwADHyvmpz1XhMJVrC5UJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UULebiNFoQhHV2aJdt8SGQ71wbR8WThfxazX6u7s9M5AYaGuWKcSKsWjaFYdvXyXi2jVsPd55Y49f83vctMCc4Z",
  "key1": "3AwXwPMh391mDfFzRnGc7nPU8TQCBLaUhgswqo75PwSV1MHpgphbAA9QdFC8Hp4iWMELdwfjVQU32hB7uoL8sDaP",
  "key2": "bCGZjNp8i1xT2MedVzGEY4KjFQ79MuKQyfscK5vzWdKPrCfCDjaM2Y1WRZVXJGL4ZBtjstDoAXxAuj3nG6p8wnT",
  "key3": "2AL9NNzN67MhVQShteY88J66zXyRd9nSRk4LLQ362jZc23PPPGHeaUSxf23dwnqtgpbGNcGBJFApqftqJtHtaGbn",
  "key4": "3oasuAKMcsSUCGQtkks73fYCFdzCAE7DCfWfqs8p8He6fBQx6LDGv2AMTntYChyDMMtmzbgvqpato4aopPKFXYpu",
  "key5": "5qV339mBbRHr895zrfBKCDZH3Un1dcYPMXPrec5JbuCkp3DVDULg8byC2yF1HysFMYGCzcEENHcqgSYe9KuToRtf",
  "key6": "2nZi3JDoju4dz5iWQbPykQkxhYUs1s4xjo2j6xuBBegmHSshLStKfpMAL9vDr5aTjkrTYN4oFQFMthXRZ3VCJeuq",
  "key7": "bmLtch3LpngXVCsiBBYQD7yHyKdxD3yLUvJfEccHEwC9eCCRGaY6KFNwuLBZ5GdCL9YXzMctYuoQJtSzc18Y2rQ",
  "key8": "2CsHm1F4bY7nnJKeTvxBhYYSByH4QDFQX3WAzhRj79S7q3gsvoSQKYk1JvC7ja8eBjVXbPidNBjRP7RZUzwsvKQA",
  "key9": "4ZqRPpfveN3FKSxG55c9pe3yBhNUnAjCXtjL8Lcx6rqvhaveWdK9u9kNpEWUCj3h3KxJiJaqdq25dcp12wDMfzcz",
  "key10": "bwPJZH1y4UskgjqRb6kc1Vm2sNSYynSU854fxYCeVcEPxHbXmNNpc3yuCwp8SxyEpFQj4dUnEGtgR1nu6dYj73S",
  "key11": "2PLP2DPqYLr8dE8qEWkKr93NPqxmMbvQerKgAoR44GdSkMtUcvTQKhknoxfu7ntAFMDC57Vy4vLPWTnmmadutJPf",
  "key12": "31VLmzFWgnLShUddew9kcZc5pa1fE4u12x3bP1Caq5FCKmQtLJ4hVNfpA2AyRHeZzANq3LoghtHqEcYwWqRmwRhJ",
  "key13": "5bK6kNScYnB8Wq2iVoRiZ2BzjX1q5Vn9fH9xUDNSFUQjCrpgvZH5jKF6prkimxhUNKe4HZve8hLVFfE8Vt5EkrBM",
  "key14": "29c3EyuVmS6zLBwq96bMTsB3JZFRxSWmEvTzRbgx89b4GyhgrXkkJXJqyH9R4UFV9JcwFScVbA4cvBJzHTYyr4d8",
  "key15": "gHMdB845jkoqT5r1fzXdPB5p59ExsiZQWXPtE329FD7Shk9LHWh9iFNW9VpjZmxNgDk7hK3VtRSmDNaEAYVnGf3",
  "key16": "27mMqUdKxhuARbsrAqBEnyfVLB6LajntTiVXQcgQw119HxpSfE1h9eoi3qjSJA7RKUoXjZ7j8ADYUFKo5ux7MZri",
  "key17": "3utrgYzRToY3mkDoP2DQd6sZapi1kY3yCX3grbJgCdcQEHDQf3Dvpcn57YbmvtAcvryWPQQZjKQtv69bLT6gDqqw",
  "key18": "3Yp9TFxbnAAPSLzUT3WvKGUaddEGyqzGxQ4pBFugCGFZQYvL76jJDUL42Zxk9SaivuWwCmpvLFwvxeMDdLRsMju9",
  "key19": "2PfA11iJyUy89JFThToGP3t8q71QfTbEKDA8uKprAtAZ42iNuQbwGhh3mpSgLDohJXuqgvm7V6dJnkqxGMoiZVgu",
  "key20": "yWXt72CtdVzBJ32j4ZuJFhtQNCagGM9qSYjCTjSmLwxETdzE1gZD3BbjjkqDo9mCv7LNo96zNrKCFJpeazMs3k1",
  "key21": "5VBiCZN1uQjnwr4hK1ypequnorsKQ9gK98U9uUcgLXeqY357VqpLjf3bhQi1NvaYiZhdW98Wd5t5MgRh1zjtgMA6",
  "key22": "3374NyuqjTxoeuafZxoGEyc27yPfrJYnjuTftzLJ3h4ZkxzNkNXD3yxMpc94VPRJNyCkK6pFjeubSFys4q1mWZgB",
  "key23": "4qKY2zSyCLmVUbEcYPi98rw9VhU8qi1oeZ4EqHo5DKHnXsaoPVfvDqZ7KhRuqZKHFn6iq1msHuK3P2mpCY5dqprz",
  "key24": "5qtA5af5CLK3fdm3M7odkqLtHdAjzf2Z4ZAhXWPiJ8Q2NVz3Tr5AiVJJ9HiSAiNjSc9Mq5hAR9NJv5uJAgZDSc9v",
  "key25": "5eqt8K6YEzBqHJKTNpeiVrfMjyT1rdY49Le48oAjsdi5eeL4QUX4DKsRJTcrZa7q4dqiBTnQ6RVPSZEiRXtzJfhB",
  "key26": "2KfsmkZyaeJsvDsyZrNJ98H6Dux5atvc4ehiRdHQPbftGy5zmqA9wpy6RMEjAZcoKEpVuE7ffdydoN2M8Yiw8krG",
  "key27": "Z4Sp7dXzzfkz1QuReExZVMDdUK9a52Krx9eaFU4E5xL8BNpGNAZKL8NBaY4ckjTcgvriU5VvZBS3PfG7fnA47WC",
  "key28": "ajiKwZhDczA55MXqEMXT3P53prKwyZu8Xyjzv3P7nGUzMJ72suuSuqNRaBezXdfzRuTPDyQnQKymmVJjetbP7Dh",
  "key29": "5esyUTnJKUuadKdGuf8SY6RomGUYRSzKKTXLeXGdBLUPHvX25pzUEhd7wkXtfHZGeQrdCLbQMoJ5m643Dsnye6aD",
  "key30": "5q2hj7Jv8gLc2KvwNLSn5hsfRnrQvLmp52zojuZ2CkVNLufcZSvnt5KTYoyYrerc899339DJ86ioMf9sxVqBtFtr",
  "key31": "3xr7F8MQ628QxtSCYsdHwAVAdF3j4sc3YSVWXLyJVVdQFvSHsMX6JhESAY17wGgwrAZzWGyWpFXEdYCaaRDd5rcT",
  "key32": "3S83H2KLdLPygMmZuYeL4MN59erSzKWhseBoaXo94oBHk1eeMvMFPttTL73ZeGZYf95ddtjVnoR7QAe8iMhJYnsL",
  "key33": "4TSy2UN8NPkzevdTKzKAHNcfnpwfVHsJ98X1AjERPsC8jNpMktMS47vK5vdT1p8qpaVULjhHxGqACV1XWoMmQuGN",
  "key34": "6iUw2dnLgVjAhR3wS3Y3afGnmmvVKWr62hJxZr3u3WFMizbkMDGoKsjaz7RwVvmpJ4Dv8Cx7sgZvz18Xj7omjBL",
  "key35": "4nvwTHaiEGWpfL9jFkGYR8vuMMaq5wRqWGWkwodGGXN57Nr9tqo8T8HdKDAZyHYX74axSnsFCq3njc4weN2iP8kK",
  "key36": "4U7jVsxrwjFTWSNfAS2MrqcaN5mSjjMDcjGQxpC2saXSMFbHEosDNHJ8dkzV4CrngYKuE2TAHejqfzGJDuKpR2NQ",
  "key37": "2CxCJcQsiWU2SBWpEMqCB5LB5GwD2fnicocqA4pC5kfQgXLC1rJsdKP894Nzca93EHs4n6DEUNY5o91wfcHvJ3BN",
  "key38": "5b6739wjVV9L3VLbAYiGdbdx3obLZKDmpUjU3CnSG3jiPcvHiSccRu1hzZhj7rKZTM3SR89Swf7nyVBP6SHdsN82",
  "key39": "2c31Ag8pq4azT4QXxuQYUvnjZbZeBGPrHdtAGvU9fLaRNgN4FrtcCdVUEwaPSBRcRCryUkMYmJBTqD9cymb9mFrQ",
  "key40": "cU82RnbQZJarSm22173Lx5QQ6XE7LYaYk9bMLdwPPAo7KAjd1hZGGY5JRVDxu9zCyRgquyYAk9n3SyjbYTn4tR6"
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
