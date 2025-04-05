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
    "g6zpwUwu8AhgXiHVYaW75jufC96RMbgppG639qBDdsR36pLT4SyhfNZKpS3NiukZGXvED7sxNjm8CNG7xMY2noo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QBgqHpAkrQSJnhthTaCQTciZ83zdcqAxK8P9Hypc3VhNNsQTBmPTK7WvBsmWg4xMLwq4n7MyRTAg9kSbmqMstmZ",
  "key1": "4iC6zCsSXZGXW9L2iMtkWcnE88aT99FSZsCU3j8ohD5QTyj99pRq6v2HafpFjKzi1ANTcg5NXxVG4LQzF4cQKRTo",
  "key2": "2hPAtWDzYfKXzDjwerV3pGQSmCfQTY2T2H4zuxUdFo48zCNsjLAiWjVjsSi42akpSe3wBKk1YzGpJtajm9DjYYGU",
  "key3": "5Sjiv8TuGUh3JnCBYxFYJ6p3CdjyayUDGvT1edJWh4pWCs3wAMC3b4dpH9R5voGxcq73BpAtBUhjnmzayyahjGkA",
  "key4": "36uJmQrYKhcXe1f96anCnUtnFNyxggrBqbV2JXhd16Psq9qtJbDYxMre8pXFvU3GSng4MK8kuXMm3PRpGjRGYu3E",
  "key5": "5ZGen8vcFRfoQooyEoUbsHic2z3tg9JpVoEQKr3k3E9kWvVs1Zw8HjiEE5TAcPJJtJwR6Z9KPjHTbbjsPF6zuDZm",
  "key6": "4R7hQghKEaiNZ1euHdq3b43hGqEgYfUYJKoou8AiNqGCn3KH2v8tY1sB25ZKMEQX1EK3L1NVUnTHEva6AP1fjkiG",
  "key7": "3AYpfdnPLwX3yYoKqWUGJvvsEpd35n6NpXj6DC3sT2ezKzHgYLn3WA3WT2v9za1DMiLGVn8BQ5f6nNUwaBfmpipp",
  "key8": "3aeW5j75hDbLFD11ZAsG5C1YezoLNgLF1sJzmGbGDavdwM675sUazrG9bxPTRPgjJi2CqgFvUXTe7wRFBmW7nCb5",
  "key9": "5tdssnGhgcmXoyzvoLeFMfBHDc4XNBNmyphzF2kqEn2ptKucMvnMjArWseAYms6cQMDgr8rGxVH3H4NiqKkmy5sp",
  "key10": "52r4U7qPT9dNZkPr9naP2fHKhrVcmdJNpEknoUctjSUmxU3mkrdyhsDtaWMPec4TDCmWAPZKszR4rZKhWsRRVPue",
  "key11": "2kmSGBkrtfmYr93bJgWEWztkKnBWrQaERZebMMU1x1whkPhXssydgxzyrsf8sdwxDJoCEd9nAnoxq9p1EwNgu6iS",
  "key12": "5G1LS9XGJai7rkzf98E55F2AM5zoJpqsiKHNjt7AFu1XYh7s6Q1Hb5cUXxYNc8ohmKSEXrn1VUJ3MiBmcCZQGmz6",
  "key13": "3JFdYQ1hK6aUs85QmJJvSHF1kziohdSowdqhfXWLCFYdvu8AEaCrYBfDDSNfBdr8qz2DAx35Qk27WFaiArchQJoA",
  "key14": "25xHhKBYngWCP8qgUn578QTn8xTFDVJ9Ek3QQKY7xk2JVCJznxCwZhkgbbb1iPcwev1EYgiCyYWxCiMmXhLoherq",
  "key15": "3wBA78aNBRbBzv4kgz2MfTvk3GV6VP9CoMRFzKAgDDzh2iLiNoSsUJGGUPz61xYfQusGQgHddGzuRB9rBjodLEqb",
  "key16": "E8UnkpKd39NegbCz1iuUFxjYgRPF2skhcsuU7LYTqPToW6BvDDHi6oNhaWCHtwowto1CoKyvaBPbr63YkDuR73n",
  "key17": "3Naxe37PRsCGKhWRSHqyw7dQd1Jmeg8rzqTJmELUazVfc7kNZU9H3GZqsTRsJ9rMJ1wyHHnVKeajfCfZ8bZjwWAH",
  "key18": "2CQc2YDf6QSamQxWRgpV5unLKBC1YWF6gtxzVBTiTZA9EiGXwLvZfqJMNkztrBMxKkR9UQwuTW4rhtW4Mc4hDegc",
  "key19": "5wV6BJmG6FKpieEYrt55Tsy73YeENJXEv3ey4pbfjh7Z9RwdLG8wQ4ni4AD1B9ZvB7W6kdVyQXE6M9uk7a3MoV5s",
  "key20": "Fav2FMrwUEAcmHbXhVwCG9ni9Su5ybJ82dxTfGvTAiDFhSQvLNx8Nrs5WLEkiSHANhuz6Cd7yARt7VaGZLkB6fH",
  "key21": "65jqxTUScLw5qCtgWuuKPuLbcbwbJHsEfVWVZYpEY4XGAV7BC5WuSideUoZeuELCLdQx4Hyna3NjrEcAKdjSyzg6",
  "key22": "5xLb5PgCoPcaHhWrBehpYL4PfYiafUnjpgTipyKZZ4vQikvLrzQighxwqxKzh7mDaphFeFkPbEaRJRWsiQxRPf7h",
  "key23": "2nVsUL7no9yXWGUkaFQK5SxqFm2GFRX6dtorPrdGJkhZqnq3VxmFo19FKeMkWrMLzmEs2ZKjKoQAWc8vzzYMgVa6",
  "key24": "4uuTr6X1rq8UPDwbN4t7oDkCAhVYSUmoS17TKLAdmXSkFvKhU42WWmxUjsBojRuj2swCQbi6bhQrPztZS1tJ36Hb",
  "key25": "ZYdtPA6HvQDE2LcG7LarBCeCTKWnSWSQU9osGER25QXLieJ1kVPvzwvby5T1zCyHbqcLZpt98PGxF5ycu7FT3Lt",
  "key26": "JRNRQQJAnUfp75kFsRmMDqut5vjM5TCcwpK6JhvnQ7cWcYSrLvd9nhQSTWi8u4acX1ntxGwwWkrXL2iv2usnXV4",
  "key27": "qWkfxzUhg7f4vMRgjok7LReRqW2VUiZmFMi4zwVhd34CyDiwDwuMmPUtyJoE4LKgUTo1KHFTrGFhpftmvrEDAsL",
  "key28": "34iHwz3JABeqacZjtKS5LXyTCawAEkmoQUDYYQ7MF2aJDjaaThRhht3b3Ds9FQu71ACEh5tTp93kJUfX5hTpNsHs",
  "key29": "2kynozgAS9iBL56Xm6atLTC1tJ8R2ndp9VrEQMVQtPjaYRp8u3mXu7s9CryuY4uD5XuUAMPysQHVvNaCQ8oSyifs",
  "key30": "4Nzu8jgGoZJcNbQJmaDyqszDpGezm1FN4xSzjPDNcVVK7fJBuCgbHTBzYNoiHgqPFCmk8pcujueiv4G5cBYaSa19",
  "key31": "3j9bNfpktMXFqqdGqCcY7cZE9Q3JBSG8ybJm3zU53F89nXLV7VEsstt6pQkg3o4HcZrC5aZiGqxWQFK4UeGohyPZ",
  "key32": "2Cry4c7EqqrVZp1aRGq6skmTXJVHPYsXm69GRfo82cGyyKX7DWZ5ByoJQ7UZz8CztveQ64C6XJ8nMQcrX9X3rh2d",
  "key33": "4qAJtBqamAKLnEUyi3Am7JJHaDuZDqsasuAU9fHY2fjh5wNC4RrbCAwpan9gSVt2xsFaQPTsNeMMxc9amRWQaCPa",
  "key34": "7B3j5KBEFitC3F6XQ1qYbScgyVT2VxsBVxHnih9FgW2zs8jhD1GHmnUP2vhPTEJEoDtUcAwNgn6qcxp3pkbvrsp",
  "key35": "8yJ6LShwHTA85yL7dZtGCzih1owwqPKQNqC6i6MqJFZnMqSQiBxjjFzF6ndEyRHEi8ZmESLk7M5jWwzYikWokfW",
  "key36": "3Geqbm2iuNz5fUdSVBvLdYq6svFhWwNSLcFqAWT7it1qkiV1J8VbTAHArVraeqp456sfHk1M4Eesmw1cQJFqNHQV",
  "key37": "3tgHwmwSnxYcfLpYXWQZTQx1tB1a8PB59ZZLjmq1kwTXDbMcB5CeKPLY8xwYL9wughssbdSridTqnoG43PHF6dMQ",
  "key38": "5Ukp4dfg4mSmNm73yK4bDZ8TKNN8nFb5RS3Zw7a8Jq2NvRJajSPxeaXZrR3YDtQ9KA3ZpPrUZCQnW54NYB9dzMwf",
  "key39": "3vGYJxcC8xEhFyXutWZLe16krdGARDzkPtTaLiMtsS49z1zhy6QfqrQSaVeKgzwi316HrfbCjzL8YjWNZLptNc7j"
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
