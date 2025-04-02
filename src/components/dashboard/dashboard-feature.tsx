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
    "5j7NWnFYd39NaGyFjY8s1v117b562ypcLtGafuAw8TCjeBAH35uT9Lp6RGmkepjvrkNSk8jJhLGYk1p5Ug4TQUdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2piCStBDtLuYysJNthziEcnDqUhzVg4EngqcWqxPvPxq9bSmZ18msuM9kRjYjBHBqsaUuaZq3wdULJjwADddZh",
  "key1": "5XmKnfQEmcX2w5Fg9h37hogXtAwm93x2nHFy8AZUhSiosNye42DUFpZsza72nMREZGTSP9rqUUbCQF2seumFNQaw",
  "key2": "hpKxc6P8jfAC9aFb8d2hP5Yt8CXohHKgz7N7QR7eTanBXrBL5WtMGFLSyZ9mEnrQqDJ2KnUCai2xi1D47KfcaXd",
  "key3": "94RdTShb6fLBNy2xapjUbHrq4XKC4MSwUb7NvDKurcE4sYhcSzkize2QoJ51stGDAk7gmZmZQNnN4NjVyyyUE7n",
  "key4": "4Mq5ihGrpL3ewa1u13cTdQYRaZByAhnNu12dwY7FF5k3Q1SwYnEFhbRYRoS5RfHSv12VeKZ97iWHA7iLg4dbipMb",
  "key5": "4LbRSTx7tUciEs7eW9JTCZgVSZNp8Gg23yhENLe6uzsfPLpBcNbfjYQ7mAeNUQuZvBGdH8mi7jaGek8vGpW4JktE",
  "key6": "5ZRyQ3qtY6RfLCoEmcbbHgMPNXHacMzCvKyrCRBSkJmuwW7ftDTJAmHh29nKAMb7pxpt1w7iV4jk6uALe3AaNrv3",
  "key7": "2bvAVYDvzv1fNmTZM5nxJG8YfhiUGMPj5ewTy3xB2K3t3qFCDP3j8sH493yARsVY1Hrsz8n36UdSdGKfAZfsZvBT",
  "key8": "45mHtNFJiZcH2EWJ4xmNVcXZcKKESfQGdDX4VMP2p3nAuNScotwpQYLf19wiZd5J8q9BSykxQP1QCt8HeBXLtx7B",
  "key9": "3FXfUSrVZeaPnTMvhr54vfWbCVtyxbRYMpXGKqBaKwfqDWtn7tvDeBPbPDcvm6EvQ4FjYhHfwrUhs7q24tBGsa7J",
  "key10": "nt13FiSSd4fQA4PGCftMvdiDnYYdYTEYuHoRpv5qjSBTXTYBFpYxiWNdTkZvVx7cgtnWmRrzWYdc1aLb6LWrkwa",
  "key11": "pumLiHJj2UTNPXZLromK3nMWH5ZDNsVrx9R2QfyKfBQFx9rLaw1wxtd7NjHZ7BmE6TuVCCbPRENkZwteYtven6Y",
  "key12": "3vZa4oDWD5VXg78LAVr84wqvhyPotL5zw7TovBazqGve3WyPfF2B2yPDqJYzsNppJCcHpkx2fLeWWqDE8k8Rt954",
  "key13": "21Teti9DyHG6c7tacMEJ72GHgTmDeDhY3t3x1K6iU2MCh6QFaepNJPWoQWSjp6S5VT2z4smErtKQu7Mx7qfHHbbF",
  "key14": "5J88gmHwhDSirT9Em65y6EtgPLbbZZpP2fQfmjZrvEYZurAMGWMzx97yGuJoNVEYM2pK2JJhQasZD7FUxWHkPFni",
  "key15": "357F42ubZGp3VDnUVL1KVFyepvKvU1wB2CUFUJQM37Bfq4s3nQY7cw3LqvCTq9Hnwu8cJmfyE4eRBn7txRw8tADt",
  "key16": "2hHBVjr4h5AWTUuNqH92Ti3cc8HAgJ8Bkk99M9Qzhro3pC6uMW6XgX1gkowYbJP1AeUfsZSphG3hYBU8afSAmrRL",
  "key17": "5zNqxKnpcaSnUnDWHujSVBsziDUyc7MReijpApsU6bKRSGw4kHPt2L3bHTFgczHqPsG91edJD6HPwBnyi5KBHnCA",
  "key18": "kU7qJgTg1QPi1hujjNcDQwfTJGnsPZLwiYeUdYmtu6do9o4UoucZ9ZEXnQ9Xe56AeFuykvyzjk1jp1AYiKnT4HJ",
  "key19": "2vjEgFdrARGA46U2SXDPKg6URXGeCqk8QGSVQ7R9BPTVtog3stkfNEdSictxgSLohCmxzvvNoXWbSeULKCr4CMFX",
  "key20": "5yZZ7Pbk5sdYq2AXMnnCbLa9WbqqpTw6xNra4ciUqGCnFJb6DZau6HJnZeeFvqkcW4ZT5rjhxSF9YiWZJNNMWdDu",
  "key21": "34UB1sS5zNEg19EYFTJX8QUe72T55Bwr8fJfZK4rXDa9Gtq76uyRaDQyqp1qK73Y3Vof8JjFm5fYDqDKBbyTr9BX",
  "key22": "2SvYBMZJCkyqqnZQAi2LVED79SpN4HeEnszuLnxsjzgHVZsGcVGwAaBKdiW5LvfWQMvR55HVJ7facjsfijW41ohh",
  "key23": "baXV3Pyw2Vtit8aEdpoFmwASUYnyH9cqTpo7UqFYmNa1ECMyjHZijjmNcxdp6aZiXWJMBDKm82oFeeLgHixZkZx",
  "key24": "3iK9pwL7Bj35MvAXUGUTeT5uQ1TBvtDHjp6hMsEjKYfdUmZ1W9EUfi1sdpR8a8ydv84E2Ksa4LZyhJPDZTpdrHc5",
  "key25": "2SjzSWrHBg2hzK27KiJKjMp6WAWB1g9tQVJESzv3uCKKpRxBYYpd9xE4HmRqhEkkCkgRKtzjYbPhB8Fq2CJ9zqNo",
  "key26": "46pPEtwaWyhpTpDPATeGpNbqmTTmPCH7hYWnYLGRRMmD4QmjUvD5jXS3LRfGLsBt4qiU8ZLWfoRQLDhjFbEbq5Vg",
  "key27": "35jVeSTsEFcbqSi5eTi7Esf6R8mRsyffkbU8wHu8ZixnML5YTey7RHqth6esL8b2amXSjT1GtykkXiJQEPhikNiZ",
  "key28": "3LNoX4YrhV6ex4s8NjNNjBsdbYaY7tPvXrBk1mDqUvq6k49W5ycQc6WGHiyT1qphJpVBPvHMg8z4VDkjZw48TfKZ",
  "key29": "5fuaGxCThRNrXryA8BH6S7mgrKeSseZHBpKJtToMASh7GsUF3njFjLuGQnqCbPYdW8F4JGupJg8zzpsApdiu45PT",
  "key30": "5geFcRMNN4Ed2ukWFHVZ3m232zVdw8YkdffCfAD3gj3wfLUpRkHLiPaPkULvbYxVE3KV77h46snfsC2fQnz3zNzY",
  "key31": "nXSvB3evAgJcxyebCiw1hHd6wmEsQB1uQRTsGrriZYkRZHknpETECeqdLpvnZpGFzr1p4Ti9XehnPkyjzrL4rp4",
  "key32": "2kXzY1YSjBDogCmMbBAY9pDZW5wC2iKntdcLXjNZQ7HxWUoLB4AyiuvJb9jrApWtDyAdUZCzyA592y1hUeDkUSqv",
  "key33": "vVzZVU1zib4SW4zfhs5BNqo33hmatHc2GhtrwTyWd1mHdLbEQVnjVwZdrmJDxKR1sqm7BXGr3qikwykQt8kW23S",
  "key34": "2DdT44NVLntqnWthqFdrVZQFHjGavBnjo9PVLMSu32TAscYC7To1ZhicQwfcYqMs1FTQ657UmnA3LR3MG3KEZjHY",
  "key35": "3FFA52JKKaSatmzhCaaKR6GYaKAvDRFNgjxkLVBSqEmB3gQaUpfoxvC1EsP8LgBcHuQVGdvpVtLDc2Zr6c2Q8pAK",
  "key36": "cvSGatbLhxByGUSJYoMZrPjGm5gf2eHGhiw1ywR3zLvnidLTCM8UkEVwjypjMdPqjcReAABd879Uvw7CkGQb3cN",
  "key37": "4K7s874GyEcLoytNrhrkF9kWVaMxTicpczqd7ougvqg8ar7iyzFF16eNPsbQnD37i9HuJXsHYBw11JKCC6HhYZnY",
  "key38": "4XWdu8mdeGYQPhncmKjVrVuVCPohuJhKZPGLCd1FZRSbAEpLY9tEf5cXxFbXjXQ6oQAtHq5pUspVxip9TGpdmGcY",
  "key39": "53kgvijb44KQxirFamRhX6hwJmd3VfrbKAxW3Q7CZoFTxdKXcPHaG1xgQU9gzCmG8o9wh9JRzTdRbYj9d9x3WZ56"
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
