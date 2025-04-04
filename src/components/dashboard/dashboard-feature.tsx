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
    "2iwxdCpB6GHuXMadcB6JvTeYCPAMyc1VjBJRpMjSQKpgq9LHgeNiSPHD2nfWMesJAVYHGEVRKhrWRNtb8Y5xjXw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ye8gkTDLHYD33TE66NkGh8c6ESb6jyR7r4Jz52QfdNAR7S6WQACB1cXHP2pqVgxNKhXUvQMyL4qYcA6xiMTZVWC",
  "key1": "3HpBG7XzkbCrL8dqzqZXQLSujC3erF5jVuUdPHmX4KeGCUxtfWWb2fPZtbmFRrRvDUg6MUwNyX9nAWR6rQr8vRp6",
  "key2": "4rmKiW8sr8njRJPv1jrLrUqs7GHizJSjP63GfdQkbVJupFur4Qo3sLEUo4PYtuHyjMfPNFN2iYnEz2qDpDSF2Tnj",
  "key3": "5piw1oYUQ6jx8XeBtvvSBaPEV59TP9qqitFAoEn6MTFomGMsxpa5gB8CmrR8MVqTumW7HHT2NNGKdmAAXNjE1fAZ",
  "key4": "4Wb56iDPNMYVM8vwCxX7ZRaTi6QH7uQuP4dzh1oihrALEnpYqMzdDkf6S5FLYNNeTwSagn3WeiJK9bma62DmJwhp",
  "key5": "cPuBgUnzcRpaZ9kjrChyqiTjQb21nbugrMiHNyPBUZh9GAKTvm4HbHCirYnTgG1Eq8KDCb9J7cXqhbEoJj3TSAi",
  "key6": "3BK9HDbEZ6ivFzambeHd828tCr6MyBRAU5Wt9KGWx6k6hwHteWkfm9bNmqXvT9MPa9HU6MAztTK5cg2Ly1TDaUAm",
  "key7": "2hLyc5FQUq1GdveFco97D7Zct38LAiyRN4n9NowB4S6R6fRdPv5gXt2XPw4DhRU3oEKJaiYeZjsgxeJaqT5DdPie",
  "key8": "3ngCvW9Ku4yPi6esGgEygtQGVboHAMM3sMed4md5B4owX2v7UFppf5j1FTM2oGVHTUu2U7FgW1Q457ephUHZJebA",
  "key9": "5Ls8UehaGGX7TpHoyqMKiHBQaU1J6bXrcUMPBCFyTu8ekPywApkM6m5EzeZLak5W2Q8jSdMsNJRkUkQPzxMUJSKq",
  "key10": "5DDzUc33NeL855mEa4X4QYaErKjSBjrxYtqsBaKddR3seLavkJJ7ZjF4TGpyGectcgbVYM5ZzKtVTLBTm8xpDbzw",
  "key11": "3h1DuhW3QSC5JhAT6gGoQunXwC9cw4MZui7YhDuHeQQooEuVQLUaJFb36VJdSp89CvktVYeYrCBsi6DKShEFAiJr",
  "key12": "53kvKw4fi2DbMmKNCuVA7xYc6Bbz3TxbnKnmKc1CKQBsg1u2KTN85cKckMAaW7SQDkHst6HTsUqwaoFaDAjLg4Tq",
  "key13": "2w9mQ478UhZnV3EYJ7PKUCPhgGMEgXdie2nM8h8WJcCTQP73RNGuzb8v2hXRqiWadJrqqUesfvEwTX4qcavibmK5",
  "key14": "4hS9SUic296SiAEyZQBrNyqDQ2oYg5gEZgtLMxocRrLza7QRCiJRPJApZzQfwWG1ptEEn9ZogrY7rij1yjg1GqNN",
  "key15": "2eQRAbZLQ8Yc6N5SuVLVFbpxK75sfcbWnJsRi1Hx9CjmLbeCCXUdrAVf6mqTy1fonhDcTSAU7VMhxFuEh8wgRAs2",
  "key16": "5awWqkpCenYffvbHaJs4ZLC3Nc3oxNRJZi3V6nfH4couVcn7uLe6Ejkmwt9PrLKagty3g9iBibYzME6oT5ifUmqH",
  "key17": "2KUMBGxq3HtmqR112bvCYNye3N8g69LNe56ta6NqJ1Y4newot5jnCc5LnBwK82F7PjKc9547HHtcsWsJ1NaBr2Gt",
  "key18": "m1cq68BYW3rwnVHKHy7Tn2oTQoth5JhxtyBe7HgnpL6JSmMnuAKXMoTxwko9hfdJYyQHKqtmGPBzaBzQzTT2d7x",
  "key19": "HZC7QTjAxz6dE81jeemnJdJ8VC7n8JMmfiC1UKu8f4s2nVSzbz5nyAgm2WEHnR3TwZw8dLxwAyN5tyxK5knMk3L",
  "key20": "2N4vQUKt7WJ4t6mSC6CLaXBuEyJauiAsuGH8MsLCRqJP3pMSLNmCLP6JVZvSQceEhtc6ut12nzCB4zuTaDt5Ji1d",
  "key21": "fvZ1fuUVTjt2vLGaxFXbUoYTk85mWNq4HzH5BoozNJzS5uvGiT6Z1aghR8PCWMTjVWdEyDd9GiBtWZLaY7yNx7M",
  "key22": "XwfaZvSTP6oUVfJZDn5GV6Ckm7wi2w8z4QAcLGq3VndcYXk5iMJLohhC2GAwRwCZzo6pB9pKDkhXdJE3wDvPk5j",
  "key23": "5KYR46L3h9cgu7b5YDFW6cmHqFzsBvVHfhFaXAxi4LESoXTpNPVXjJz4zN9kiyPvC2QNEDyHjUn1eZiWZHNbNN4v",
  "key24": "rgHQrqQCAUipJVFH6fPfr4NVPJXLVA6Z6VQJSmPsBq348nvfdERvDkuysb5LMRFckLmXe3BFvSbcpDpu9c52DKc",
  "key25": "3mCZ4u6UTqipUvNL4NNBypWyMhnDuvvRwwqjMWzcMMLo97rQk4AD6Wy7S4oUybDquWfdwEx4YoNcwTy6TUXQiYxW",
  "key26": "4AVjFS8f7aDgmdJFAW83V8gLnf5mx8AhzRLw1umkNnKBHeYfT2cVwhnG2mix6vp2heKtb1T7Sm6UjGKzGWazDPfq",
  "key27": "2vJRnHYosXRDSkmuK4bgW9eW42Bt1nWT2yWapbaaaNcLxxvyQxkCH7FbaLLxUACGs6yGD6m7uHpNb2mubyhVN4dE",
  "key28": "3zb4oL2b4bVD2LadNz8z1Z2pEdGQBxweyAq8ZLUUTRd4YF6VvCoWcXywQnMjEtUkA4qgeZV1ZPtYsnZ7yL8VCVAD",
  "key29": "39y5Ga3wk66m2f3YzbdfHdYjzbYmGLMhbF9cb8vNor8AVFAh6gmNWA1VqqATbePCkz9P9R9F2xZhfT3D7fXUKdGE",
  "key30": "4pSvML7sDJotApRAQ6M3rwVRTYbavTMt7QLagvf2CpFDMrredvMaiwoanKmKMiSu7TJtJh7EuCh4kVHYnRmaZADW",
  "key31": "3UJWpuWyQ1DURXybLJACtrJZypC3gGdEUrsn54tb2Nr1dyCW9prZspRtaGNpKuzA9NHASwvyjgnJxWc7gvEEFPZb",
  "key32": "2QcyRCa8GDgUbVP7iGzaQXskJ2gBFDGZatbUQKr197KNzoMDHY1KXGXZTUeowR29QehaeecDBPRsvDerStzf7Scs",
  "key33": "65SSpqxALA4pnJWUELvJsxoG4CucvyghuSCxZzkWLDMhSySQRMfn9Kde2rM9tfs2ER8BErsi1P2cyyQ7LY9aR3aN",
  "key34": "sj7ndZo3RorVFdzUbbF3uTzj8XXxVpLx9AcxUw3opjzgz16Uj279no8fFkzLiLvd1cykiGbtpB7iGSJjWwj7qny",
  "key35": "3SKbfqxNBr2qQqwGUYeJ4UmY6bbSbqgBw71tto4PTyVPmrzDKkfg2NiPZhFwAXsxXA9QvpYBF3vrdRg1GfKDVomB",
  "key36": "2AzLvvm8jYBW34PRUXy8bCDJLjtpnyx7w5xX29AtmSRhyaQS2o1F9au77c1gXCwKR4XMzx3tVmWi9jHBXu4mb8jF",
  "key37": "4hsBpFKzsiA3mFYwKx1jwbFtXYfqTVrX1kziqgCDYHnbPgBRYdnVUU1seSs6gdTWaQDKoAy1SDAczSZ1Xv3e6bb7",
  "key38": "gLTTFeBfvV2kadtZpcYAbhDuU2koG3rdUwfZS4iVCoY3KeYP3WU3gxyvno7qD86C2MLkHqEmskVWnHnfzkWCk3X",
  "key39": "BuSwGNnMeHNmn1wVy4QyrZHpjMVoEYfoV3SGtfg3di1ksEsPuSsccViTrZjg12sWFTKfHKxsqM7ejm3VNsBZVJR",
  "key40": "31e1hnKqUkp3Ecqwr8NuZKGMPVfjTTxVEeqmZGaxEKkBrcHDfpzap2LTTWieFLpVDzvnvbHcXGH6GcSqcZHtz31K",
  "key41": "5SQFPRxmoPNc4SZEJ4Uz16NWAprQtzX4H68nsieGYCA8iafXBgmKT6TCi5UUkyTGnuiD1sxEoA9ReU7gAnr3EUDt",
  "key42": "37zsg6MNyAs2nC7n5q5ymv3dFRPM8pJAMBzRJZAQ3hpufaQF17wLWYu6vxEQ1xiYJjtTWzWu6ng5otyMPg8tP5dw"
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
