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
    "4aEcYRDrDqAo8HA65469bCDTk5dhUP3dpQCkHcvmtVsbp1woR6wqjctw8tgPWb5axkQKRwrJxZ5rnxHW3CNwdFXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSeqTBk8CEoCujEcrQU5m2ym2rmFxxoBd3CdrSeBJb5hEjxAyXtz2d46KL36AMNzeScbKjq3ngxaY4eEoVMvBVE",
  "key1": "4Ygms7aHy9qjMK2Kv2nZ8UKcatMbhDQ54UYt3YiVh5FMMugKqQVVUiBZm23dLu6PPAmpC88TgoZJC7WfCbESMHb9",
  "key2": "4D6qnbdJMp8c4TtfPyfBV9mtodoGBEPkvLfymGTLAyQyqeVY7sEzRnUQhb7WaaAKdJqvnvLZRHgcs1Lrbo4XM3E8",
  "key3": "XMzKFZoJBEDGkRqET9QpciGx8PKqKed5Ccgkr6QZa6oVqic1gHomnXXXWsjAeo5szgJtmSVBaAKZmiFVpXZ4ZJc",
  "key4": "2zTHn7uCKFgb5zLCngfpwKeTKBahxdKRA8mCqw2r82NDKqekwsCNPpdhRhds89K2cFZekcWFYnRgxBwr6WA8RY9R",
  "key5": "3aQh7Zy95QRJWJruz46Gt6VyiS3SGX2Fp6R6XWcjLuRHkpL5cEzqaVjqJw6nm7uWU99Rt55N1Zq2FH2ba9PhMHE",
  "key6": "D9g2xAnCqEDjSTi5batS76a3kA5EWyEhrN6fpXEyPByCctxgTzKnJYuKzJBPgrcjv1cvcMQEJCfw5him5ubSV52",
  "key7": "5WKRuc9VyugJedJoDChvnPQAZfnf9REa6BcDmL4QoUv1oZ46LRw4XbL5PfGoD3fWTY9nakgxfaWPF33eWEVbejA5",
  "key8": "GZaPKd8uyTzyndCJkEy1FmD8Yd2jzkFbALeN8VtGYrUJeAEkwhr2bsfQr3xuxXg4LfoLMEuGyePqzEhywfHZZLD",
  "key9": "GqUdgsQJsmro2zi6fafUoasaEhkqEfNaUgw5wt6XhdBkdWE4v89SCAwJa6ipBh43QbbhqW2WAMSR1bvAHTiqiXS",
  "key10": "4CYLmoheGoDbbkMWceinxVK5iyNGNjahoHxVatVxsbjFkV3o7roaAG3TfF7xfkorExhcjD7aidTX1RoNZiazHeJK",
  "key11": "4Y2aFjkQurgh4Z5ArYPu8EJHJbH4TrNNGjp9oPqgB7tA653aHhEQfPVYXtuFg767UuJNkp2xox6WNMemvKC4mAKT",
  "key12": "2mN56ucheVKyDKNkGb8R2mTmkhgQRLHXyGw5psrVYj1FMjyYM7e45W1xWpVDq7DSTXedDGS4adtZv7BzHNNvjMG",
  "key13": "5yEfbDLjGLLbY33tdRVxtKmPri7AANUAmLiaELNpMSDF5K6sfyG1yUJLSLGBQYgCnVikrBWcMLNvBoASU3o6ZD8v",
  "key14": "qA9qdnHVWzDUQ8R1Kjt1Hdsqq88XHr6ogBCQmxDu1AoBV54LXzUeoC3f1mb1SbR4wgzijaw4JDRnKPBzPgnpi6n",
  "key15": "35zLiwAGv12cBX8xvoQ2QxyUaEV3R43wMnKhzs8SufVHcZ2MEdxEu51LQUBDtBReawSGWuzapnx7g7QYmSXAbJKq",
  "key16": "W8zLNKrXbYcoWy4Gdv6susKwwfuXKd4nHeZsCRZ7Zp8FbhyTgVtzJe6c8xt2nrpUmhTG1WxdGaNJSv9BZEUaq3H",
  "key17": "2p15BMLgbmXUkYSxJkuJfu6iTUdmvGKWgDQrfMirRUnhPgRAyS6xkMF6fDtCM58eyuUR6wGfxGPipcWyXrntWVtg",
  "key18": "5qxZomo1JWUzJBoKhe9F5YsEQmt2xcDGmWkvpVxMVzGgeotMTNxRM5MActi9vMvTeWNw5CdRi5xK5JN5TEXy1um6",
  "key19": "3416VcnBsy6nzFbDrt3BGVyb2k3tzC2kLpPGksZE8kYcVHQ3Bn81qwbQmHraLsbcpejy6B1xKR6kaQpP2b7PVc16",
  "key20": "2xtN2pXA3AUKcribmNetvrgVPTvq5B6Lq4cBbn13d2vUveVXrttaroRt4ffaAN4CNafak5AsJk73VhxopHk6YFm",
  "key21": "4jSXuwsSiyWnnow4UWXK9kFC4Txy1YuM7pwgwFfPfN24Pm8PoTXqi6C1Jy9qsh6m4QBjpgcZr3qEWSY7q7wsRq5F",
  "key22": "47LLkrCjA7P7BuspDhfE2ZvEXQ1J7PdD1cmhfbJAjyPg4ANDiQjb2QZ9mJ6sJDC1dciL4qa6c4NFi4c1Je8UYz8z",
  "key23": "QAHAYmbaNvL3M9BYXSWC2yZuv12U3qnW89ZAJKPRKAY5Newgn6dtfdvM5TNs9LMhKUvykMkKk9hPS7bYCN5U94Y",
  "key24": "3RbBueBDtQCYTLkkQVeGeAc7Qby1Evo99HPsM8P9UUMAS1MMvc8n3Mn917K7vobEk9jEXfUMCzwSV7qw7f8hbcJN",
  "key25": "3sxfFptEUAiDKiHT721xEQfKKyAPbgRuL9Z9eU5w74pHgB6bjZXLkwfL8AZ6E4DucKgkyCnEC8TeomHw5ribe7rr",
  "key26": "Pz4Pj2Cn4KQ8ezvwZVfpQBCAKtWkZ4BRGHXTgwRZKm6EFXpYrQQ3dKC5C1yRgQCN5YXeQPRGXZckT3L517aYyX3",
  "key27": "5mfoYWtH7T7ZCNAxw7sjzHBAemENrT1EN5gsB7UvKzVLhxLn8nwXunChw99oyM8eKJCpLWUWfGw3h4gQv2Pm965",
  "key28": "wsAQv5rRF1cV7L76waaZAwsV2K5umKj7jaXBGjV481vRCrKWih8iCBWBNSs8qb75bjFTXqDHkCiNpzcdSxL4tWP",
  "key29": "5rHe95jjH6EksZrrArPLXuQ4ZiryVRBqJeqxFph1BPdDJs97iHb7E2YdnDfWMEYnzA61zdLTvQd9sjWCdL3Any7",
  "key30": "4zdkFAgYNyxby8jAogpg8ztPxtM8ZbkM4UdcMfoPA6t3GvzwVtV98H7YwSDSWw33CWEvLCU6tftxbUFg3NgkwyK2",
  "key31": "BBWpcJLXMJJc44J7Za2qfaY1hrsPu5rjwcq7TQbxmDzGTLdRFUTTHWHD5y6GCF7Yw5BqHStmcqVG5wwNnm78hPe",
  "key32": "SBvqXKtVPqDfdaKZHrrmGVgxy1LfQtDtCfx2FSNHvWj7brohbJjLscPAnUXBrsyZwBNtVxw9mVjcvG1v72mroUP",
  "key33": "4LPCwBqHiK7s4mVndHJoUmvNd53aXitVf6hee7VJxeRg6f13YfyW2xJpigokXbxTwHLHrETrzKc3cCJsZtHMjsEM",
  "key34": "8kMHtrDsacNaPErsaizgKJmZ6i8hFHybepbx9dYcyXJxEZD4QUtRVzH8kQZ4fWT56L7QrN9EUizPkMKF5zKahfx",
  "key35": "NVMXm6Jg88gBpBoZwHHrdAb3Te2dhbk5owxFj6MHbERup1QC1FmmTDZh9MMYHE9JLZSAfFaTdJQNo919VEgpjzH",
  "key36": "mou3282Vs3VcHcH9KbdiuSnCQWKfUrc3ivCFyjPboJDYz4Qt7DJDpzM89j7YbBR8X6QQXexX5pZgXUJvQ8ErYgg",
  "key37": "4GqHbbG3BSJghnPkrxUz9N8tbfBtZJWcuTeUCaK3qsT8bPwV57R5MaiZgGF39fMHCnMA9vutEEFCHuGHgptstc1X",
  "key38": "ftRSaPGaYMycESraGwBSaFvUE4yDB393UXTveWcGGJyKGfZ1fKQJ89Yu5u358JNq95QjT4iGWL7JMR5b6K8gbZH",
  "key39": "5S1PUSATJNSgaQPyCpdj49ypfS9q1onmAW8jVmusVtgzXaiFxNZQaMR4qgCssfU97zZThWvEc4cH8z35m2Hzm1Cx",
  "key40": "C1FUg4vjTqpGsBbRu4cABdnrtDcjAUR6CqqBHdQtjfx6CmoeUG5MjZAuDJ3pKEVMgzJBkq6HewTM1GsjV4cxPLV",
  "key41": "5n4uoJArexmbvRZ8iweGQnXSSeyimVfSWvqEhoZPgKsAXJR1ub2nBSsC6LybTurvfeqFnmK5VJAUaarXoBZf8s4Q",
  "key42": "5qJuoupLUzEbxt2pjxyLHi6p3HgaJgWdCRqcjDfwQCKnEGGhy52PNpGwsmNJi1m5AKQ8QTYzTUCJmSYangg9Lhk9",
  "key43": "3JsG2xCBGkvcHabcbg3VHzCzD9xQ9pmKdbUFPzNsDDorv3qY568S3rkJeGsGNxXKxDQdHfNfCiLjRfQx18sgSubf",
  "key44": "63VdZg5TbW5dmHco1hNY3aKLwpH2fLwFVamYSMS1ngrymU8eZ3j2PGH8jH5AuvYTkobwPocVhkQ2xV1bNPXa5KpX"
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
