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
    "5X1DDPZBkbRKVsawbvMDgHtteCLafiz1AuXJGUtEmTT5TH3PHSoMkJCBu9RTNp31GSmP1Nqf78U8d6esbp55EE5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "629ZFTYX5Qm4Dmve4hbCMw7wqLPTAfm9TYxbg4UaoxR5KdExFPg8tGUVKAdkMfspwrgpbvKreRPXktdqzsGRAQce",
  "key1": "27zoR9wa1kLeUYnKqdJ3BCCdMXN3Z6kdqaiDWy91MFM1SqXq55NvUaHFy9cSeJ96PUwaVWu7XQMrsw6FN7zQW9fW",
  "key2": "54wDKEifD4c9xHig4WzvL735jZq9q1pSaHKxnNf4n6sXfad9GzKEJYdVsueNBXWEUjseYrFjPFbXuQbiXJfVxkGm",
  "key3": "5CYjZ3vDUKtCWCw6jrf2SjWGUNRsaBX6ps8Akv4UhBWgJ8m3uSoKuPk9PhFsRywp9QXM5LGXBYNkz2vYsRjwAgdt",
  "key4": "5UmSw9WGjwn8PcGW4zS5xYR9rAs5g5AawgTEqPTJUSstE1JH6BmXwYvajWtedLSJN4nSdQRY89T5gdyxJF8Y1p9j",
  "key5": "5mETniHRzSwa34ReqyujNzZMrXiNUa5cPhJgzJWYPbj6ibKvLW8bf7bufzFcujmjyPUBJEn3kehnzXeUEYABgJQ8",
  "key6": "5UGbmtUgtxSLMYuPwUP8uQpWzGE6Psx1HAcQHRrKxmZDES2HyojDg5mD6Mr7JQr9KPEE1jQf5oSnc7GvHPhtyvKU",
  "key7": "333ntWmeTt1FajUUhyX2P2GovGim8qxB3NU8eJVVbyQ6r9fDagidDw3VyB5SXDVZCXpgjpXxjp6QJL5YBw1Wj23w",
  "key8": "28VLzH8kkGtaHo6FdJGZtsn87hCaimQxbQWS7HeD8iVuU5KDS65U9amSYLiDjPDfteNzm54ceoddAdwnxNuydkoQ",
  "key9": "3Sy8hFC6V6eRmQK9od3ctiWXbo8GdV31TiBfNHEvRgr8vQ85fpjKYTNeZDJac6iBaqeFnfbkTf9rspq6HGcbkNpf",
  "key10": "24U6sdkm3aQjULmEKGzYzANjx9qgQ63ADcH4BadvtqkTjy7HFFSsSSsUctSjjGQh5zamnEPqTLHHWasvCVovtMeT",
  "key11": "3TyPLcLyStVp76vozELCZ42SZxs9b54N2cpzFFxBPK6iAG9qCJ7SFWyf9dC3wHh2jZ65eCQTZhSumTCx4XTYXV1S",
  "key12": "8bcZEfGbGSPSbrzoLrMrXamjzN45ndpDCm8uFTNmMLBUWtKG6EKueEwUkgQtcTEEpV8UFWyY9CbdR79qJENkdto",
  "key13": "NqqFUaWZotgt6tAdCW8xT7Fk1KvR1ode6T37H7Q6NSpdvo3C6Qjs93E2eJ588mEtRHo7nPNDEbJP5t6EFgEFaYs",
  "key14": "HaGpRpGxiPv72a7E1nzFkbfiDXvS5zSgLNAqAdXvkPmw4Gzps3VPQWWjSFMoVLcH2GRi6Dmp9uK9LZnWPdq5yuz",
  "key15": "5S8SAHjoCfwPJVM7r8DSwnF7UAqSAggWrBZRLckDik1PHJtM7K3BDSTD3kLQ5MWKNvB4KduVRojmGx7WR2tE6ZMY",
  "key16": "4ABeqfoUtbpUoGwAX1RC8WVjMbEoWS6fudVtyY46UQ5JDKBnWaeYTdvhxdfWko3SmpwAvsiQeUv428ASztxDsJFg",
  "key17": "2cE88in6hxQrPisQsEbFtBfLJSHKdZhc18MDyQGuU84DwWX3cc9tWEzYboCwgTCk13sSedbBf4kDSw3aE9JkHs33",
  "key18": "3uTQrxbGmz86ExuvkLxtsGcxvTHyvnKAGsnaPvTbEbmcHLWSbF358AmHJpFwcgFafU1iAQ4LEJuTWiGLApR2ykiB",
  "key19": "5t87fKXKRory7GQHNd2XCWRuWK93xibMUHUNmd9LgHBeRuGwqPzkFxf1wrXYCT5N52Suowbu9mhjfoVYJGC2o8LM",
  "key20": "3TGrXTiHFsX6qnsXbMVUhHyhr54U5LMPw5HUhuW7KbxyDHWQKGXHznyDKvNXSvFBXRKh9vnopzhEenfutoQo53hb",
  "key21": "4HmU5Jwtwf5Z8GGJxXf3WSBBQTRht3te6bXV55fAGsvPtxFCqCREJMyqyiHBARjnBFQzduJeWGwoLuR5EtmZ8HB5",
  "key22": "3GAwJc6ZTFkrapRYRHtiQkgNGNJchtTWDv9Sjcg9G2ySs1hxK3iGQ1W7yVcSatDuF8hZpgBUsnaRoGRqRg1H4xSz",
  "key23": "5weBhJG6EG7XuLbG7b6JFGdKF8GVqpa78kcCxCQHyKnEa2kPDyKcFdxnPNJt8LWeWfFfyysR6VEHaMvxpTEntbrZ",
  "key24": "4G32jaeZTeWDCn7fQ436LdtqmGquZs5tHy4oqymekSAugBeQPaPHmZQAivpckBrb885ki9pdp9sHhRXJjSKjRbzd",
  "key25": "2xCNmdxVsv241HwyDAEwhjPv5zr35riTveyrTjF7MDuA8WeEfKZXoXCYmpH8JGjFk8XgeXRVzb9wXYa3an7uyF1d",
  "key26": "3uHoxLAXKdawuNwyCeP7T68XirS2Cmf9s3PHGjzRxccTCwGvy2ZXvRE2cEtQRDV3h3j7b9prL6n68S14zvHtTNrJ",
  "key27": "5HSG3CBrmscHfFFetDNsmA1MW17fcuTfVFwJxaTM6bFmUsKzRgS8kJjr1md45TLWo3NXdu5MPBdXKvvpfPrJ4ZNq",
  "key28": "3sccNvaSTpJiducxvTAb9795SC13wtpj8oLyqMnKKK44Ud2Tz6VENaFHZ7mgrAFoXZj6maA88LPjbXZMHyth8CCw",
  "key29": "4fcYv8GXQ83wPbVUUeBey5RQ8A6FRb6RjLUB8DUgFP7D6e6Z1yqeE3x1zsZvsQgbXYmK4qKj7h9thVvyLBEZ73ru",
  "key30": "5ZdWtvbsQbyRWoFEcQzJqKrWJFPQPB6JvUssbPLqaUnYtT9j8MDX1NxkNNPx7Tx6DJsazcYKeFNiWxxTCLLB3cTe",
  "key31": "5hghkWBNTEMNqaRVLAnYkTsozFMqhSFsjdFBNXEjGQLo1j1TPsH6F2H7RsAm87yvTQAmnRXyTB3Fc2o4pmXj6Fmd",
  "key32": "59pFjMXzc2SWHNiou8EZjh59WcPM5e6L5uhv5rcZJducoWdPRfPq4qZuDAJfPsRtZTTCXBfkJLiPTrLpB9Z3rbjC",
  "key33": "5nBd3Ffrci5h8yt7nuPsqNhhkKbdTdsFhFfRKETERsv47TvPPagbiCwTGR1Z7CkpmiK6qJdH7XCfUz3JpJNodxET",
  "key34": "ETCBibenMnXM5suKUe8LSfE7cxzW6T91oY579zxDFSpAt1B7XFGtaYS3Qm13QzepG3NTFanQtAFtwEk76VukCU7",
  "key35": "JqPsw9dGbwMXSJm3c8sn5rPv8mpybcexXP7VSr7KempTSr9MbCreYauXQtMWsuSYLCrNnyAmCyk6AFRqysrTVxq",
  "key36": "4vfemMvfdimcHXojYahfpCZFoSYSgW8bRW3JCiNpNcxJ5ZQg2WAnYKSFPMUjotTTjCZ85mwU3usWKMCVMVJs1Whn",
  "key37": "5KfdUKcB1NeKeC2UjxjD5Th6U1fNdowzjzTb8CLrNyUuEZHFpTwzJS5x5C7tx9GAAXEtGRu5UXb8xYXXr9hbeTPd",
  "key38": "3AcseXdTZ4brSiKjdQyckNcU1dTxhiCkBGEL75bNpdR71Eh7TVwkKJickDcDo4DYTz4SPAy9JUoEMpU6znNkLzLL",
  "key39": "2Vunqvd8WNr7YrJtA3ZHv5UUYoak2VcPKDbgPUEx9AKEFiZnMzJBzQtuk2qpMyL1v2fKEeoBCti4u5TFKwzGWnrk",
  "key40": "5y7cvFmU7ByPVcZWHEehWv55MQbi6Zf39nkHCH1SHJ8sPQUDq7srsEnW6BAtpyPtCFXjP6Ba5eRCt71aA3qPTbDV",
  "key41": "3tr6se3Twovp8zvXe8AyrP6xgWFTN4AdqG5DQGhDo8BM7Hh8jkize4vyLHYXVNDWpaNizWSTfNQGV5LWSjs2Mbaw",
  "key42": "3dGyFFMNV5xipgLk9YH5b13yTW7CaTB3yE5WKzceKjmK9Q6ero4YoiQZM2roW3PkH4vQ5KxziiFNUcCwaupxKNs7",
  "key43": "5qNcX7gTouV3ecwJvpKG5pajY4Kn7s44S3fgTxL9vL1J5LyQRddiZnCt9thjJFUcXtzKbFfQhyufDhvvok83Pug2",
  "key44": "h3aQG5fAueQZd5UhJ8k4B9nFhDAJD7XKVGzZB1asHHb8xDFKb5Qiv6rCfFhnA9zYFQRxX5kfhCQiR8NsoTaLxzK",
  "key45": "bMvFkPpVi6iAuhK4ChdbCUsutjmMZMmfpE9Xa8gkLRLDbKEPFq2qw9HJYCmVsPM4cRYGhZFN942YAZ1ki1Vuakc"
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
