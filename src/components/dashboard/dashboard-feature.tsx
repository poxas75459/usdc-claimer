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
    "KpeFmNeZgXJLepnw8U6d123Qi1Fado5pZb9Qh9DmCqcoqintARbSK2ti7545JZkY9pu1zgTBXs33bBDFWGGXc1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFAVCK7oZ4EVJumD52mY3XTisdsYD9Bq145n2w7GCtwdoyQM5x2znkHfQp37RdnCXPFaHVdqT4UvEwTfo4qycsV",
  "key1": "5XfmtSuCqeZmLWXt6SyVA2iRHgga8TumktwpSMnMp3F3VqD5HkdxfQAHuz5HJ7dnRNEkdiakjESJ7je1wsCf6aw",
  "key2": "2ikRA3PZvxJvWw2ncPeYzmZRxVKZmLA7QhSoKAQdQTJ4b1zCU4C3NCzHUqe18dCqFq5ZcmK6MDRex72UmSuCoazD",
  "key3": "4aY9sUCqCXDVuediHLuB7dwHjfmFo9Gebgf8C1ofnRSztrToKZpXmnWEkasso359QcBYRxtqaAPLcrDKQBUiYdhv",
  "key4": "5XFg223MTx6Y72C6aZ8ycDeasWiorJts9UugwBVL3iKJ79AjJxz6TQQ9rgMaxYynLcGdNT7NBGEnAXsuUticrNC5",
  "key5": "2n3TXWwgPni1H9fRuz7Lt7HJezreobxRp37DzkXzbVTrLTenQque14QDXf91m6vkf5cVihggkoN59AUY7qEjkXv1",
  "key6": "WQyykCYbT1jPXNbDdbYGMgBqEDFvWbvqVDp28d3hUp1tXbPX7LrKMzqkE6EETRhJBU3rzksbeTTQLethzCpWgMZ",
  "key7": "4jqitmD81qxm1RgVezLPuewctFNHMq1dYiMGb9YxxycVVsFV6UqnF4PiaLpQH1vRqnQmcekaYXDxK2ndjNkJbRMn",
  "key8": "2JCKHCXaKqDTL6QxBBFsS1YAobniVZEE4WPjrztBK2e5G6Jxc58GfKP6ABpWfWrZReXPhLUDBDVMLjKrji6qeLN6",
  "key9": "42eCLwgWLuhFhYLrVS32RpVzfYq8XB2GuJCU5x98dJC62L3Bf554aKALugrcKX2cz2zrhTbqtCCJFivYrmJT1RkR",
  "key10": "kp7FrsffcCHn4NPhuxTCCcUmivqtv5BoWfYPEcsbr7BxbcGdgmxW171fMYdQyvvMogvUL2X3KtPgC7HmmxiGaon",
  "key11": "54xhez2KPUX2k1ewSAMEWYKSnjmCunkYakGtduSauqJo3SzchCKNwket2cf4QZBrT87xyC8ZmvrchqkQhkNbSuSi",
  "key12": "2QyL1eNKNaRYafBkQgYZUUQJLvJHoHW46xBC1oBEkHAYTv7zxbxhsnnVoW1k6gnkroPeeMevdkuSJUx3S71zz3qo",
  "key13": "9bNmDh1EAm5y51dRHBgXZAz8pTkHaCEHGVAcpWJaaAqFL14mYuSMDJ25iR6TccPnrbqx3DH5VsB5nUCcW58xthQ",
  "key14": "5Gj9ivCrdXSdQ3N1Pj7UiMLpTBUJwAsCgjfoRJkAe5YGtV32WgBmpsvun67ZfBuPfovU4ANC7gSdmv5f3rC6SGSB",
  "key15": "2JTxwKMn8mXmVG5k45WPbSf1WMsK4AvLvZuBnMw7nybXRJZLvcCZ2Lo5mzQXiaXmEk2sd5cth4ARB1T6gMnzbVWf",
  "key16": "RUvi8BxbmagAKv7KE6L3xSrk6zWuRhfXzwQb3oxqLNULSB1KTgsaigH8X2xTi9FngHSxAvZQPytfxbHf3PngJVk",
  "key17": "2UQ1DmN5iT2RGPNj7g6fjRCKsrAhjFjQBVXJzZdXcr6MLZatErnArZJDZu26hphpjKr1Bs2WDxGqAxGuuqVDJzpx",
  "key18": "3fVZyCjLPboirnzV1ypRWUhvcBPWzxebd3aYxXEP3SVoobJykA97CQrHqV46yzQtbVezCN7niuWoQG9bxvMrQfm5",
  "key19": "2iXq4H4o3U8jCP66knMj31WpZc1NkoBGN6MrXLiHhSCj3ur8sXSsmzhRCBw9hqfJtgpf4YaD22ShDX9ZQNDoUJga",
  "key20": "4bJKuR5d6ZjPuoBUh55odfG37xCYpP1h9yB5aEen4Q129krhbpNnXcFgbisd7ECNCRreQxGnpz4uTAM2PXCWMxYV",
  "key21": "3txH1wciskwxAEzys3Hvkf4e2Xi1he9uTV8P9NhyaqzLuawoUt6G4WgDocADfLmVvvBKJCtxgeEDhVJn3ucXmvyT",
  "key22": "CZmYNLapaZtSiyvXxmEjwM5P3BYWkEpccLx9e3inQQTwKN2VsND7hx1KycMCZzNCU9wgNd9DH4MthYi7rv1uup8",
  "key23": "5hXF1P8czJMXx78aPq5sj4ziCFJu2Vp2q6HvTzmed2zHszC6YmPEYMTWgGvUiBRFnvpUMKzVTEYQS6d7gtQXyhhZ",
  "key24": "35rb9RKCqSY2tynr5ui4HLzQYtNjodhQqnjgYLra4PiKFxEjPeXyGRcpasWYWYJdxJ23fQFpKRUJ6gzFy4rS7Ms1",
  "key25": "3TMqCMyReq7JyRs1PgbrSVzXS11pTyEowrAswaGSYXh2pK9xoyAVFZdeJz3h2BRpLaQmhcAWnsQu18LLzNLFfs7r",
  "key26": "5XhCYpWQR5utvxHVgvEMbL3ux18oDMmMW199PC5ZXVYYVTfss1vMabHBHKRTiz3R1hpobC1Br1jgDYXwZYZcVDgH",
  "key27": "5M1wLYjypDiRK8iGJFSjW1BH8uAkkHdGyTS8iLyhQbcFeSQkdctSEn16cpDBUCGCugMFWAADZG13ih4tDmwtV22i",
  "key28": "5vqA78xnYTGHo9TdgAsZxFdXqJxcAjL7AheX9Cmw3jf2KkZbh7agF5qLP1EsjdX5aci5dLuW1ZYbBn96T11wrqgu",
  "key29": "66aLW8HvR4uqDdTdyVpNiDCaMf5Ywxi3QR32hzbH7VVSQRfLWhpVxqiwuTCgKhinky4dE93rDPmZrmVvMJ6TN6aV",
  "key30": "2th5o7NJxaqmauD7VGcBRih1LC3LZy1gYp4Xf8UvyNEhsLeD7Jg7WFGcjUBK57hUyj5UbMD8TRDE4odmMdkU6i5U",
  "key31": "7wE7vnf6ceK91QxtztqFDGwqcDTcC9woYRtPuEiytfVQ9LthMKe7R8TWpwZvf6aksNjes6xw9Gb83qrEYh6ER7Z",
  "key32": "4xQu1YhtyvvHkpRZsfTxGSSoYWyQRJFEkm8b3hLb28dGqAZeDwM6zyb9R1u2seEYdkdihk96ayxLVmFoz2w6Ej2o",
  "key33": "3u65wHGKD8caBxEuZFw5ty81DzjwJMhTG2HZtYQcGGmwF8EquNTtVE6inJH4UAjWBdshDsbSrPNoVSkCvSn5n5Mo",
  "key34": "1VVQSi7K8KhaNGweMSaBtx6gb6TeJhhc5YgTBjfWqeAvoseMFtvYakQrG2QAfeDBhNM3FwANyRhbR6g85zeWxMo",
  "key35": "262GfBzPhUdmRAp8woJ8uCSDGqfxJGD8NY6s1qkcXsTpVuzcfkxkPz1hnC8A1w1sYLwbxzKVcruickEB17v99F4M",
  "key36": "41quoMCVnAn7S2Umd72DwjBiQEqPUjeMkucg7VL1n6nRrqLgu1nFWtZDPUhUZztZvPYzYgdsFE5ScSLFu6LEzEkt",
  "key37": "5qFXMpaxrB7FhviNdohpV4XJ2vwsgfWnGrKVuesidzZ2BbgUjPo2YqHEA3fUGAzCYSKx7iSsXMrVVnpe4Cn2nKiC",
  "key38": "3sAXHSKpdxpkhA6hhwRQTmoXVW6boodVP1SMKtQ7v647RAuEap1cYJ3pDnAZT2JT4F3UreTuBYWiXLy9pjtLtX9B"
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
