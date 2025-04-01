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
    "2d2jrSJ8E6dSqZbMkKMu5wU5EB1HVXPCHHfpgtTju21zXUHasX8eRKQNTLxdNVN7bUjHmHLLVpgwe6bCtiEn73bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V25HJh616JqkgfxYjHmDzs2L7jeDPvzV5VE3mWXnShHWFr33PMDcoHxBLVaq768Ar8d4zdBTHdR5zUqSp7FaRxC",
  "key1": "3GoNPBSGqUKUFciZ2F9fcZ7FsLRDVvnafCwNWFdfrSXC7uwe3GSTNXKJkWnWe4d9h52FTuCHdbpCD46pAD4Zb672",
  "key2": "3ngxqxdfg1DTNFaY78KasdfAkdpLsiNZTmE7cSC1YdK98d3Z4jExjpbWCGTrvs4V4Gi1NYpyBXxApKPhQeBSbynC",
  "key3": "4h2ryAJREsEEc6P58pK5dVpZosgBUSzTMVnZdgwzAHE9ymVKC8s8xwj74ogYDB25w9jNSZAnn7gkqP7CSoNktCrW",
  "key4": "45jokyievEMD1Zk1k5jSJKDSVjAQex5oKt9nDdd5ttApCeDjuUfuQUnzVeg4J9jZREiDf1WXYxFSwPMzvLjS6wmc",
  "key5": "26Uog2iS3AYRpPWZJcJjT49J52mUSxwJTYvM3feAuUDkm7KqxCm8i3DGJyrYcpz4HE6Etwchrn3gLZMphhZnH9sE",
  "key6": "4LYjvcpcDaQ8YyYuGoL95jvYaGmMygb6iRrE7rbGSDNGAmb7s1yGU6U5ZP73T2oVZebsop1MVuLzMkhNbMCnqcrw",
  "key7": "5RNGX2vQ2Tzwv7hmjtjU973SMdeXZedcwD4bogeFfTH1LfFw8WFBV23pNq9g9vRmgaNwtCiWn5iEf9oWDKyoZAij",
  "key8": "4kXGCim3oHztfoXPnCP1sTahsn5PSwnDfCveer7pqPNuQBDGcvcLe88u8TzZCEQhaYj4PqyoNkJkWvDdmsQC8t7n",
  "key9": "3JsmVSmxAAP2KXUf54DDfYqnaXmnhKc4d87HSWXKzSG3NDcm2djz1JoTw9QFD7CVw1ShdZxMS64uxdhFrW4a3ET2",
  "key10": "3dtnFE51Bepu1SXRSvjgXf6FidrNtetqMb3oH8x3jnMfMyWyyJUwMPjFFV5hRPeptbxi6KgCw2gd1XVkfyP3rRdL",
  "key11": "2r9e5Mg3riYnu6DqoCSodLG3M56nmEdikyNQBtyHiFGC3JsGgZ4mzkM7rwCnYdLrZHi2tnrY6k1rxAHYzUMp4eHE",
  "key12": "vxRFZoEpyGJJxFpjMb9kUnQyaXSuKyDfvwfz8ZeNncWHNzhBiyzmUd7jSMpjh9fFh1CnTKeQ2S7oyhAL7vfpYQ2",
  "key13": "548PqZo2Y36iAc8wYdzbNMSNh2XLudUm91kcR5A4fAkFfWYjbSTWVkrMg9KAuVehJF7rXNxNi6y4RyCRJ1q8tv1H",
  "key14": "3PAxPnBthoj74txFMHPYjiZPAyFP2nhowWYA3Bp8mUmdg49VszpKtkQ4D1oxnxrU5civyfgoHP15Fq9uMGtceARr",
  "key15": "3SKmsyhKR56oZFoy5Y5gCdaXBfdtHYV7LyVGzf1JbfaWABUxg8e6ybqmRDsSpUhX2dRSpURUhEB6jHFL7MdLbmsM",
  "key16": "3HR2Lbh6vN3nFwGun5nTKV61VKCeGiyHGZLNBFcGu7za2RLc8McV1s2xrgWngW5M87GyQkToTaWx4nZ8LTFnfCRZ",
  "key17": "5a6wfEVUUnzPwqmNTQToc1ysxBm5DpZNEdUVfhSJRfZgSFLj68yevJDpVruRxNzZH1XssTBFi5V8pG9pezkd4q4k",
  "key18": "5AXX5Qxwu5aHqw2BiUQVmW9TwPDuVDiJuNGShhs89pzYWKaqgmcSqSbtsBU3covpLbbUiYWGuTPUXyuEJq7ddUTc",
  "key19": "5tZZCKh51RpmqNSVhmmxETp1rkFeZQ5EnnuaapZJxPKa1CNk7oo6yHhE4S5iih1ng6YG6WZJQoZkWhEXbFdrvvdd",
  "key20": "3WAkuCmPL7KGyuT8q2EJxvsCiq7P7AXZWdv6F6utFdgHb5Q8FPMVtLVLFvS6Qif78iuRbt4otVMqS2PSCXjV4J1q",
  "key21": "5AzvoPbdTY45Zkmcjakq3dSVLqUqkpmAUTfDefBuozekPtAvayYwBTi8Mc8CEAp1Wyjw9pYESfWZagZyuxLBUZfV",
  "key22": "43YAPghCGT2nvw7b7aoW1HE59mfcn8JuwRLVm5UpNRKjVp5mbK9y7wN8FY6WTSufuYSZHaczxE3fDcVBh2priezk",
  "key23": "5CA1XA2U2YMG1f9KeAaJ5fGReDzoCLU9KmbtZYm6wz5rUWqj8fVqBYVJrJx6LLTEp3VKz5x1TJB8GMP5K2BTNrTy",
  "key24": "2CRWQSijB3iaHXyJnGBHTSNzXvbaEr2569H1jBdk9xc8qzQHkgj5b9WofrEUvosgWBnja12KFRdF9P4Gb1Fx39bT",
  "key25": "45erpeFvwCBsHEXtWRhxw5X44CynU9ArgUiLf1x1YzT5UHWrkJiNpdrcuN9LF5kZUg8iwNEWHR7xHUKnLwi2uRR8",
  "key26": "5MnYNt7c2oFts6NCADMgpv7pwxaDZqwvwpDStuB7ULiTeUF5q4zm1s3hTdLoUYToiXgEK8zaLZ8xLMJKnW7XJrMw",
  "key27": "4cbLYX7ZKz4HmFZSsHkyzb5tpq1CrR93DKZJpXULYkAbvKhUyYTDzdxwxkQ7MuKFcpxeVV2qaQ2PrQGt7YyS7Sdq",
  "key28": "2zTmuGZtJw5svQD7kqxdLDQAvXsE2TMazPAtx29AcSxtfCswVJS79jsVN7NvQo9Zc6m7koM1BtMXJZGZ9yWU1scn",
  "key29": "5fKhYdFK9nG1qseKD5dRgArRLwV1a7ZkZ4fnarsUXuaza5JX85d5ikZzFp46rVx1BK2pKEStReFkEssvfA5hBn3f",
  "key30": "5SiYq7FHEAEaqjf9Zca4cxSbac1AwJFUzLWJAqPbfGRCfELBXFTXCYfd1DPFyWpAMWfp8ydHnMkGQzp6y6FaSg81",
  "key31": "2a1vxZ73yVGx6HpqiB91fQfnF5zCEj1CuH4ZP3xJyaNBtaCjM7kdwqWhu51SZEhX57HkNzcVRKfB5eXn1zf1FHVb",
  "key32": "3yvQeRx2wq9cpdhFmz9yNEJZFCBt3GgNVHY5PV1xRAtKauR6RC5CfJstQWnH55N1QDfgjvjvBaCYA2YYUQGgqdHy",
  "key33": "2odWGoKkQsKga2DgPPbvAcVJzhZhuoz6QpWBhPAuma7FGjZqj3QmhRQbNcMRFwLi6NfbyM8PTBWQrUcN6GZNuNLm",
  "key34": "3h72XDCVsKQMvkpoxmDdCFkraCdRKSB76R8vPaMe1ZVUwnmYVp2DWCxX4sjrcRephHqdSCzUphTkJX3gNMYe2vAk",
  "key35": "5mVnYs4xuBLf5Qaadw3UdykFd3gPWoP8AkXCfagwRQNGz8WtpMVmhY2c9dxdhr8H4gavRKANwYRNgUWW48PeK7zm",
  "key36": "3h1H7ChTA2xk6Aqob6PyygTKqWZ5fAPrARwW5tKJSF1Jpek1CAUUurFSuJNKoYurFKeUrodTyNppF7AzSpTGoaiT",
  "key37": "3qPBw9b8PUe48ykf5hLDr6RR5qkEUA8DWrGGVJB5UD2bTKxUhkwnf59u6Z39RFbJ9qu2XafoY8phmqkgCEZs8uj3",
  "key38": "2Fn5uHA7zxpGF3W616U8iJHe4LThg6Aap7oYGmAzf1Y54ZHQ9yJYSvLdRCqcU8Lf4qV7FXRPdtQGyLygdzvuvKCe",
  "key39": "T8Wo8hpvAtK73ffVRaDqzK2j79EW1HQV4XRAxwMP9etMsLAAcaFjMjXhLoHNkdZ6Nir7XMoV52BzjiLBHo7ZQa1",
  "key40": "2K9mdmk5s9roXjjNDpBWaiZQmLe48CEgqF2yqVQDypjr1VXN7JLHkyjBxRMUxUs5Pkjx9b87Q3NzS1UPmKMwBqC5",
  "key41": "62FrW1S642Zu2q9WpPSFCFMHHg1yQadhXmB89FooYtktMmWKcuPFKtT4S8rDftqMZ3DH75o6Tvc3zXtzT3Sk4BLV",
  "key42": "26xnGGqFeGeiDDokUhScLQdNmvPZfePeDiRFQHDUvyN6tZk8ALYfkNfmzqXQP8rqvY1upreuia7chvemT4hBSfLY",
  "key43": "5xt8MGp8oph3yL828GNDtxEtVJJnd4dRLXUw5sieymDuEmXcnEKw2ABoYtyZWBqu1LyKCw5Zwt9J9Te6NzSPk5sU",
  "key44": "5kVi8mVw7gPXZoxabPrcTkgyyLZ8noUokrPve3Xgtye6oeobR3y1hq3ckh27zTPMkXQigPH6KFRyYkTDz47dKC66",
  "key45": "4Z9Ckc9veuj2e9svbkuBuiycxKnHqB9fqo4mLH7XmXBcpxa2HweGUyp6xpYnUhC6GKadgGipBmsKBZr12vANqJ1E",
  "key46": "31eiu1Q3qQa32vbLTtrUVYPNC22RXaeNcT9RFbxfTLJDs3w5oRu5k1BosGuFwgXkHFj67iivmFCoqep4mw2rETtp",
  "key47": "5QECmj26oSqQ9xYJ4EFE3Nh4cyB3rr12TekhvYzSvb6jvKXwZKF3JJfhkbvntzpSVyzuSPoG9ad1X5VTbFj8UVnC",
  "key48": "bw6aLj3bPsqREpgKELvU9PjYt6Hs9aXhUq1KnSD4HrBRgMeVm4Uiksw6J2bE2paQjCf6oqhLiVTsWW4441ds78E",
  "key49": "qfAUsHidv4xNq4swiYbWdsAg2mV2sSDHqr2SFQKYzzPEZE6nvoCY1msuC3rb279ZCPqox7cPQv5j5D4gMfLa25t"
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
