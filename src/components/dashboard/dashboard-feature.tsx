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
    "4PjQ7fm4RNHQmdqnKufej8Dfkmmsayftzqke78qUp8zHETfNwNzEUERTiYNRJeZ5iSoRuH6iv8sVnDG4MQr8bSP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEqvW5dzc5KSsdSjdrLN4ZF622HA3xM7mE1FncLPW8AimZ2VuhSVQURCsR3kbUBxs7mG46Lq8wXTPj5sUPDsFfQ",
  "key1": "5GYrQBLuwWHctqfd7meHhm5fvVLC2zCvr6u2AowV4rBFVzwNJyHkcXC3QGQ7AHjjAi4wZG3pndVPHxvtFBJQsbLc",
  "key2": "MZHNjdHSSSYvkVAMn7ZkozXyvaRVfq5FZ2ipWTZE93JqeXovByVE1YLkn3g2uxvtr5Bb9DkEmLdyXrKM8UL4jTy",
  "key3": "5dbxCVmHtCnCDB94VT48BSX9Xo4jqYhrBNeSwiXJVr3SFsTUA7CHJU5o8xB9sDjxqzT12HGkgsq8fMPK8sPhpcVC",
  "key4": "3DdWtTpZ35CM8a5JwFkLGZaQxnbcWUfGbYdto8jQunNH5Q7nyZL6PeTVQptUetSS5kTpgrkdA2jjEspG2nTaWf2F",
  "key5": "5hQe7HWSZ5Npe5LNNho5RG4mgLWC87ApLr7xETNBoXjLV7LUaumZa5omyPvuj9P7ukRsxzNooAi6qiWNyvnREPJt",
  "key6": "3HrGYz92y9sprLLujkCMgKwv1Be1WnwiSGkYx3rJLqC5Kc7xDb1jYCcjpGrmbKajihfQ59x4skbbYssDfxSKi6fp",
  "key7": "3YReHuRyQ4Pikd2de9X4KvtvZf9eeTSbWGgzb2qpuAw5hJDMU6Vz1YBRdAZ4GcUwXFTQi9XnUBRzgx8YZhq62EY7",
  "key8": "3GDumChQ2J9Z6iacp3iLu4ZGAKuKffM3uwJmWNZvyDogZjKkmd88pxD6iGZjs9Y27FLijTGtfZiMiCJnzCXhna4L",
  "key9": "aJvCNbyY6U5hNi4ykGRkbGXjkm2udEixAEBzQzWCWEcRmGPYfsJCStFZiWrBBLaEcxXoTDwBzYvwBbXZaTbNNx3",
  "key10": "5XjS2Ebae9jXsu2GKsKti8VDrtWYSJ6xzGy1qNxK72E1XoK8QZS9QYC5UM6sbN2tnMbTMUavnPXEQUs5rzXVnSW8",
  "key11": "4fAEoLkeSzQwewNmJzsy3yuKiE47nXYfssPnbjnbut8StDfq4TykWUG5z3QcjY8RZcAKSrv8iovDcwzqpxNpTU84",
  "key12": "4uSX1A5du4jMbuTXTa4iBHnTKRu2vVceEmMz28G4Nm9pw6Z5s9R5hVw3euhnnVhBSp8NZkn9FKENhQZsqpx1ak8F",
  "key13": "3ScpK1c8NKwSCyCtZb6djw7KJXbGVDXq2f48ENuquPcJb2LCjj5gFfRuqS5mR95w1ySzN621Cwcec1LAfFdc9s7p",
  "key14": "5govZQATrDAhbtF9qDFp1y2eAP5DAuyBp4bx2CvJAnea9o4aqbexQBpguSPeututxqjDcxRXnqNAmH59AUoB7AYS",
  "key15": "2PUUbCk1RpWeBA1F4bC3zc9qN6AhnF8mWVzQQhqVTPyWLb6ii8g5VkEz3Xqjy4b34jphcwSZDPUcQ4jJbHoWY21X",
  "key16": "2KjhtzX9VD2d1veYRNa8eBrPNnkeKx7tFageBP41mAwYn9SMunsfREfNSmnN5BynVTSFgocto5eNB9M3hKpK8EWF",
  "key17": "TuaVSj1E2mcPFyYT2wg8U1y5qJ8eb9Yv3UAqaAgCWNX5juXKYhfB5tQV8EM1giVg26kUtyZ52GnVSbkyGqB6P9e",
  "key18": "4SzRqJdQvchUqAc3XxJkA3WqAQn9QD6FwLaB9NS9sUn4FT3SyikByYKXMjBiSonK75Tg9iLsAXvPhnwUETfr8bwh",
  "key19": "65aQFeFxDuWmorcfATjhxj7w8SDvAiESj3UUF3YQdXrNP3bjEJqLuksJtnMzfeadAncsjxoBSPDPT2bVMq34w5m1",
  "key20": "46vsUVE12j6hwo2Q1xetBTEkdHmf49pXQ2iVxzFFzFPFYYm3wdCLsPNHMN3oxNPayf2Mg6iQXNot6ANh6E23sixi",
  "key21": "4HV41RSTLpZa8huoN91P5hGfjN7zpvKeAGz9tHPk7LgbuL7MqXyYujHVpM94XDK7EvVfFmUN98nbDixxA8CNJewf",
  "key22": "3WHZPfdWgehHh8DVDyqSJ6hoiGRp4LoSqzBsZc51y6GAVYmHPCoVPvFBtzNnhB6FsDGyafbqhSfmiMNCd8bGdgGr",
  "key23": "5rdAS2ybuy8hjBaaxx2tabAmqAR7vsxz6nKXYEvpCgTiy1EnXzYf9eRJyDCf5HAwmtkuMdppJP94JvKd1F3Qz6GS",
  "key24": "2aAkZdhoTTYYuxQt7PgmuoQYDBbiY7GJD99FC7RPXThe3YrAgpJcKavBLx9eELjNKcmZ4WPbA413Ya3WvBL5oQA8",
  "key25": "3i4Fdb4vpKL4XHwNKQsRATP5brndgrwfBdxCaPnBgEx47m4f5z2zXJs8MqwQDowQrRTGg8HMzE6Sxui5wE6fygaf",
  "key26": "kU14rGeHuG7wvyru2PJJjAQVw1GJwxEf8e2Kd2JGAShGFNpnq4aL6Bku9jBKL4Gc8tJZoTcQJ4TvK6YZxKy1AN2",
  "key27": "4DSACKRDbF1xqjk9JyensCJw5GS8M9H1ExRZPpdPCi9MQnYPFFKkFbGrtzeC4zXQfn4BMUAPdbYdowYfm2dJEZuX",
  "key28": "2KokEcxHH7nGJdvQvqY4B9ngGTkTHWXoZ7jhVdYNbfKGjps8b1auoCsHsesPttTUQJQoXfmJXEKPT9yKzueKaioF",
  "key29": "65hjF3AeH5bMRVdKkRdXpuNvpRAuv6mohjX7ZJXiJ3hqjVijyDgUAye6SuHxk4PFVpRwrx36fxJwNEGhTqTydq5F",
  "key30": "3CY2bzpAqiuqaSKqXiiQcD16B7JAU2MBWLeCsJjug5QCjPcz6Ajqyf7gvsMC5MsvEFcXUEvLXV6JNTfCZa4oBSwJ",
  "key31": "56dR738NE7RnKmBHVCPxWX7d68pfLKBDCFEPR9Uq1hfasdHySXpjdRruERxapjJsSpSevjC1fJUcnaWhe3EN4kt7",
  "key32": "2PYiDsrHTjH5PwLviKqnFnnTBrHFdc8j52PU5v8J8GSSLLmXrffps6fVZEkLLP6sY9wc8fkBmBZ7CHJLp49FepSr",
  "key33": "2XH2Vsud2982Gh33LN88LTHdK2Tnmfvoffp1sXEDJw8JuKufEorBStY841NeYVaAif7pTdLD2bZwZVWT4BSfbPHP",
  "key34": "22aRhPqivAxTPmUwiTmBivD1sHW5dLEKd1XJGk7DKxdRbRV7oUjVv1arZ9G22uuiRvifitwH1gHFVKn2sH2VCCvZ",
  "key35": "2BtCnBQjBeqiD5K1YBLdXgabYNi1Qt9p1F1bLnyyHL72M3kfudWm4tLyX5DoBEvZt7ghcst7GE8biwdGiRCky3Z1",
  "key36": "34mAmdz5ebDL1CLAQQHRHPiJnrkiMxUTSDeJjE1pvpyxtYWuMvHfgWyyiHFdE7Ta1yRXvjzne7aK2ryw3TFixgmV",
  "key37": "518hsVAYbwkn6qvMCzEPXnLfqpjdhR4L92iB86j4ehvC5jQPbtoqATsdUCefESJU5zWjNUgpexiKv2NofwRTipw5",
  "key38": "4ZVBkvjieZctoza7XBZr7kYn6V79h1Qx3wYu3jgGDb7QeUiddXz4jo8UeeFQCJpAoDgafUnU4DTSa6HhuA3pEiow",
  "key39": "5yXecsadZRNSBhWvYhrxz57KfT159fwbFCGwbnyVa9DbVuAqnb8FBzpDJBmYYoTogXuA7BR61EcpeM47CTiGJ9k4",
  "key40": "5a199wddvZ4124hTCSPqQoqAe8inMBnzCTKSDgtEpVLSCo76iF9roR7CQLViqy4tqpWT78LSd5khcpJXiQmvX8As",
  "key41": "5oq2tHp9URnH7ZJLT5ifF7GZ4SGuf1y5VB68K2inmHDWU5Mouyw6Yhceee1GMyMzhGMfebsMyDVBSGZ4Jqm4WVCU",
  "key42": "3m2ymtuSinDRM3RSYGuZY4LB9w9QfowhvApxhGUTcDg5iY5rcKk4sviCpjEuxE11Gty4NcgUHARdHu7BCN2jASWL",
  "key43": "5C1Rq15mTi9vg861yRmf8YtnWqZ5Mskuu3j7w1sQDzFaEvScD3ZjJthJ7aujSdSv3P151yg5PZXQkbvd4P5KkZh3",
  "key44": "5AXNe512ooDo88w1kNNX5XHzzY9rAzYugN4ckMt6KPCXwnyXvtXGVeSCjvnX9her3EzYQx5TV1sVSBb3348xGNP7",
  "key45": "3r1G98NexeMGySgMxwTASBrbNFBm9riSPgarreU2CwzdPJnWerT5B2L8MuTTKzzdT7D7CEyvDzxzL4UvLDaAyJky",
  "key46": "4i3aMynagviEqLtWan7DkRmSe72fbt1jtKsnG4qwkSvzxQGX8TcYzh7Nuj11pfT9ayi3d1Qo2QupSDdHgbtgJEjU"
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
