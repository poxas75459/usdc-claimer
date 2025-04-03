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
    "hNMmY487SutdC5Jcw2dyU6ADCVUThZnpYD9UTe8NxGVCQUu5sDqovXUn1TocpUeDYoRTJxyZoCn1rHoTtoDSW77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5odqGoKnWanjKtYrwutQJAUedp181aK4WsDAnoLYyyE2zL16NWknSbkv3pPkwzePmkJ4P8fpmbgvCtqHRSz2FJbj",
  "key1": "CGZvvvwyn92cXatsWdMt8NKqaGAQjfk77vT86ctno5H6cdJvnSsMvT7NJXFsZAMhycJQwTgU1ybqEirYaFqizBt",
  "key2": "4aJTnxB4DKqSgJn2ttTsqzhweyPhFC5XWNY9nNok3mzATTAecqXvE5sArcHGHQvb4hBW4voRW6ich4dsDQuuU2rh",
  "key3": "PHweb7neGBxeEQqMbhtCFeCrDskSpUx8HAhmGUmBu9nDyKcPd7Ls1L4SdQZgFQyDcwHUy5mwjUjB6fanxV7jCn3",
  "key4": "CA3PXhVW1MY39CSGgkPaSZGzTBBBYeWf5gUNY745qEvZcQxvFmcVHc2AzG6yweREsLS9SsETE2hk7S4SDaDxwUi",
  "key5": "2x57WcpNSdpYiiVoHKsAswuQxME7K9reFfQd5vxQyFPotwL8NcFB63nHnD3y6KnGTJiS5pXryZdv4ykxy8FcmV4y",
  "key6": "FT1yYMscz6AB8fehpcHQj5shLB4yngYASXzcqDc8r38tCpvJRg36rn2r2oDPt4CjRkwgnKUGH19d5Fn5eFwZZjf",
  "key7": "ia1Nbv5tUaFt7v2EpwC9hmgMsCcPs2XnjF4MvcASVXhrxYf7q15N2e6DPhRQADi2XWQiSB7HHX4eq2eL5vYDbHy",
  "key8": "5tcoDNNna7bdqhR9HZsNJcHkGSP8J1HtGiG3Z3xugi7HHM4VxcCbg4DmC2uHKVSgf2MaMxAS8nqNrrU4UrerkhkV",
  "key9": "UV4nVtRLAhqRxSsdTfcjCFtFeCVEZGdKohSCu4ih8Gn3ZVrKS2zXCsQjJK1fvVejiXWNBUZKcfY8xbLxv9tckmU",
  "key10": "4W3dnKvYveznmXonbiCJ4YkPfyx6Pgx1MTENry83WaXMVVWi2VVbRPZihdypFFBpBG6ZcShx7AfPaAcrbEmQPRHt",
  "key11": "5oz36yv1LG7A1SaoE8sfQxz4zwJSjPyKhAAhwoKiwuwCjLC4iNAp6tnDyG6bfBqNsvcfngkJdXocDPQwX2Ybsf3h",
  "key12": "2ke6rhaZtz6zZVj5CtRx5LuCoXfQE8XzBr55x99BzrHzxqqQZMAyvL8tLthMjeKh9fHDfLMbwQUp1NArW29oTDrW",
  "key13": "2i76D1o6FK6LXaps4b6dLcRQRKUbCLvRyjHuB8W13mGDPxBXb5BgVyLpuP6HLtAEb5zMuz9y9PRYwd8qxp2jhJoM",
  "key14": "2m158VgsUzNCb4Ln9J5MMFyEbEfVAPkf5bVoYBw6GmQnE2zX9j3Z1X1HY1bGWYhqCyVnDBxXFw8MujyQ5Dh9P7wq",
  "key15": "4tbKHDBv4Bif3KVNicpsqyT4Fb1t8ZhG9wWJvwa96HCDmrYHzne6TQc48HppZR8oKbGyWy1B6fiHsA5RHkin9zVX",
  "key16": "3XvGS3nmsiV3K9a8WNbDX8BYqqMrQKLxdLNqjQAf5KHrNuwkwprY7ZsHw7KoHjzHEHuYC6TFccL3K8BJH7XurhUM",
  "key17": "4w6PHA8tYbFUJmwD76MQ3hwWYHDUDm6TRGrMuV9QeCxBgfdvuvRRZJ7pXtnHUwnBCZMnvG1ZZFxtL2HqNh13zhLV",
  "key18": "SVjoDRTCpBHnAKzhySDyyYdX6HcLdnvk5UZkLqCarZje1UvYmmuF8h7ertBHSSyDfxCW8QQ1xsSp5mtcNsPTmga",
  "key19": "51k4hggnNW3UQkNgrSh6ymNc7HcNWgYHBtvBxY6nWSa4VjvNzssWEnF1JdrGLRFhU7xH2DxaBNbNToY61GRD7ThY",
  "key20": "2WKvz3h2NwKTHYDiPnTwuqePnFzU3KPbX1YJNpCntBEPzHjpr1KUQ33C9XQygcNDciUSbvSoEbBLAAbKx8Y16TdM",
  "key21": "5hXueGy4eQpQz2Zi795nMmEURMqkCeLBKybHmof74dnpuxNhvXbvMYf6RFYPUyb1ino63WpVmdMriRRHW5fBPXvE",
  "key22": "bHaEyFaHHHJr91Kc9c2kMrEZ9eAUEb57GHp5RLfSqFYq3AwocxKjwce7Z3Fpq1PsDLi5fCsDXAw9HuU7yYg8Z5e",
  "key23": "5DewA1m1RmorPvkKADBbHnLfYLL3XYrm6RCRo7ScJ8vBPBf1iQJ32gKSZzwg5dc8ybvowSz9dCKwZncnUk6uXsJh",
  "key24": "3W7BFYoiTHJqFBm7AoaSdARhyM6go3CASBKQNpbP1dBku3F2YuhCmwgRcEGjJuqAsvWeJqSFwLNLRbyArLhoZFNW",
  "key25": "XSuQxjcmpbuVNMMXwFt8kvJPoR9WXN8Z5hQwJnjbLnwaqRZNPeQ8WSXeavLnx6ESV3F1oyHGwoDGt16VG8nbRYN",
  "key26": "4aV9UvMXN7qtqp4ivkB2BiVgQHyJap8Fsb2SyaoHxWxsFjV3aTckNhStNqD8rRw5ptbz1U7LbJ2mZjc4rMnnDFbd",
  "key27": "3TMiYRMvyNnuxKr12k7uTwLaZdykicKiGHjUwuWaaBMyzPxTAArAEesRe6C2tyF2z3w2YpQDeok6b3YvD9e2TtWh",
  "key28": "48n5MX2UTbf6fjNtykLZFBuY4banq33pUpo4j4UHZbw6RkLqXvvWthxzH8AopeJUUps34kh4FwouzjCcMGiLmH7X",
  "key29": "3kDpBvPQnBEEbG1GmWjL2E8rshsj9YGqUmXEWo3LCBCz5TvSBa91uaV2b45fEuhf3HqBn4xhmcPHag76cr5hfqGN",
  "key30": "385g6FEeqsrsgc5zjMmLTGBBUvrS8XoTT4NYKN1ckoDb9E44gBPndJGa3abbdSjHueBp2xJrxTVujrH5qApoWxCv",
  "key31": "2uL14XbyQhk4K97kbg6AP6YrQKqQrceYo6cRvbuFMHJ6sieWBE6Qgh5VMbmFPqSASzBh1ck27djSggbcFu4mQjCT",
  "key32": "2QuYuRe9L89gmrHJK32pSF9Vs155br86BsbZirZRoadp7CZq7h42f48YwHn3AmytwjzbnoimY7eaNMNzEYZjiAxc",
  "key33": "Nw7xFE9J2fCNW1anxGoS1TPZHQQa2P61fmpRAkMdcm3E68xyiPX2s9WTe1KAbX8DKRrtaXGrMuFVXmAsGivGW6f",
  "key34": "5xoMWDvocrtQcj85GB9nfDxW4bMSbpsL7d2LA63jtN1DacPZ6QhWC1qfzYo6gWQMbepCXKCK8VxFizRHp3cH9bxk",
  "key35": "2ygmBPzxvdXFcnkGxtkmbDq2T8XxVkYh457u5AsP6xd3qadBJ8tD3XW9BfrfuYHsXpXapPUUiB4Dh7vwf5MxwtLU",
  "key36": "3H7thU4bQXTJDrCStjRrM1PgS75f6Yehq2BabBMrK2vzTMHo1HjFUz5jseBYmHdMZrFN41xZzFwBbXQDkJMUa7q5",
  "key37": "3LMQMT9y5tF4LAE2qDe5imeCUz5jciiAtB2XKwJxhNy68qeAXqDCEv3ZHtcjibYKWQ6cCe9D5pVZ3C289fcSScj7",
  "key38": "VaHE3txydch8vGnnVkjWhhTLVSKukwFFcpVviGSKojkpaGPwyWRSccLPHw8Ytg6vDHATayM96LmwSFtjPR9YDj9",
  "key39": "61hkJo6YKtwqH6vPjTcyorLvFSu3QsqfRXTXS1k2PHtuegxMg5xhkCXfuHWdgs39QfNmdqJ7nnzyUZypREBXrjMC",
  "key40": "2SQ75RTjFc95st5Rr4aCsAuZt1yuhJRDZabxjnS1zKbrgUZTpE3VDoTQK9DQxjdHJ1AwjffYEffrokBmhJTQVxaF",
  "key41": "3ipuAxzfSMqeZz2jQART32zsoQg5GyBKUJAoyHY67CeXgKbxxTLhykHV3P81SUkzfFsqQB7WbDbe9KnKSchac1GV"
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
