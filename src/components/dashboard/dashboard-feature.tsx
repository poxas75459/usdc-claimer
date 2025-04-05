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
    "2ZJvThrrSRnD74tikJE87byeW8o6Xgh2rm7o8W1ZBL7JADFizHWAAkL2hNdMeFkZDVRibP6KgNvmoL5AT6dCSyBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49uWsVs63eTdR5C4M3Z8oUHNAeygqiBzrGKEphjhPM4qqm6jxPtJwBjo35E6Wj4ZLa2y3dn8eBaZowETHiMWntr6",
  "key1": "4RY8XSVi2ocTzC1zf3yhgJ45FDrzSPU2GUxGaACSZWWGyZ4NiGokexotUA3EYBoVDGeaVyHTRqYo8aMCx6yq6kxx",
  "key2": "2t193LEZAG86AcTvK7feW6qNLoHF1KmQwLyjwrhgMYGeY7WQ1kieBtU5BfAxT5s2j23Y9viGpEsEAosJubStXHSY",
  "key3": "KHi22D6jwqNVwNj3mucBJfDLfjYJnRtP6oU6Mw5ikSUQAW5ZQPhUtRLkbCrvWi8QqpVatNwPhUYLiTHsVdXZJW9",
  "key4": "2Vg5h4s8G1p6EHEBxtPUBmPk9B6f9J2fyB57Y1qDwfqzkgFiUq72wv4dVbMpXkiE6wX99fTfyryPT3mAXqqAJiZZ",
  "key5": "jmKGvCYALywTUPHKqsejKXo5R8QLY9NnF78aUrCnyqsn3KD2TN4HuqJk2DiWKTv9vE2dgU9YuEpZ5NTo1zqT5nX",
  "key6": "5JgHpDTY7pej6oybGKVM5H75pJpFe5fwSWmppjnMQGv6VNKEGcBFDEh8GsG93uh8jH1HprqHocHgkwoW5nHBd2H9",
  "key7": "UqNyBNzKP31hoVy9cMNDRDTCJKpLBDrTSif3axbMCUb1TVARTG8m7cX7KEvqKdRByPZGVe9E8WjpoqYoRhbYrzy",
  "key8": "LMKqtWhSto7KwT5PPdamh28JHJXX33HvvyXrfPui556Ym7zPHDfzDQMGthqKRHTKrzMkrg6Mtq3GKipnGzb3q8R",
  "key9": "252xisDMNKegqcSqmaTM55nwkwEDyE3riNi7UHxjDFE9KEPKx8MUhDwj78Rr5yhpVgW55iNhiqsqMuxSSuBij6dE",
  "key10": "bmmrTvmuavR2ReYVcqq1yRax3Xxfe5hvk9bkY3QPCbnVaxqkVk1sG83WmFrXBd2WS8k74wXhVyuRty8yHPMnuPD",
  "key11": "5RBewjzopBEZJCzzBmBK7Kp6ogw3euc2HNkf6QimioATau5zg27sPzvKmMYhxjFrWc5beVwnGEame9mRX3zqJufv",
  "key12": "eAics3ZHJdsh1Qngim96pHfyZ7kkfmjqKmQojCcdWBvKcVY8Ld1FeHKENnR24RLdmHvteLvbC76KUqyVi8bLc5h",
  "key13": "2mar5oaejb1yLKhVMLQc4mFLrZ8Cm6dy7nDNLk7UzUt3AfA7MEzCHHUh4LyVL7aXSpwUq8o4nbVocFmohmBgf5am",
  "key14": "3RESbewPCGaYeBsb2GFbE7s82kz2FK8fuQLvqG7LcoUiXUUqASvDjRgoNMsqEevBRHpkufkfbkbRyAzwkmBYtTh5",
  "key15": "5qgQKKvnDCupJViymkP4pbbes8DoEaTp9JZbXL3GS7mbmHqKc7dQDZ11CVdE4oVWuqoZBxktkroibCWKXxHxbjyd",
  "key16": "5L7QauoTUVMxc7vnBtjJZzLLnJaD1eH2PJ5Y7Bi8WHCuNGjJhLDdJA1oG8GQJ8zURzLinsCcskYbHQMg69iV4U4V",
  "key17": "3UCmkAjst6T38kATWsm4ShhttYKN7SE7rsb6M7JVkudoNDvqxU13jy45G7qu1eJz8mZ4mL5HzriPtp2xkVoAnMyn",
  "key18": "31fwUhAHAZpVjGWaWxzRzBBHqkdeBohXht2e9FizaHSqVUy9wU9FkiQsXsh1sditgihgGQqqYTKnDdX4qoyC97rP",
  "key19": "4hQoFecgxeKKP59FdsdB8dxbjtyU7KRUSCGniaTxfDEL6ago2p1SNNriJHFMSjL4gXChEo1ANvixSwoS5SfHGNG9",
  "key20": "3MXmnDp2bcaqjMmbnrvviEqDXqSDU3NUDngYJr5JkfLUMmwSkvKgSiWHQxA4qpniU2y8iCYxcQq5eZyTMTVYAj9W",
  "key21": "48McHzB5euhioVJk2tmAVPyycWXLtdJ17CYVZcdZG42t9ziEdp4pxMNuseietRt4PnHysfCXQ37hx9JnZPpRFnXo",
  "key22": "P6onoyY2AJeeGfK2Z7cDpiWgSQ9kqYZh4qpuG7xEVbgpkuPpRePB5mPdA3Yzb4nuKFk7BpPNY3uusdoXhjPPVay",
  "key23": "iKX5Mz3RxBgqwkMDB665iMFxp88bcVKBZ27zK6M4bNxPew4isoSwmsmTbd1Lxb2kws2NgYoJgt4MYfb4xXRKnm8",
  "key24": "2e5yKkdZZXjYhZJkTAqE8T5SU2w1hxXmyWnXEJncBX6Xb9VzNeHXiM8d9rvvxrdBpX9vgj4TgJuNcNgUmW8uXpqn",
  "key25": "JqwBoMUNWv6FbussVxq47ruZBwHf5Pffeos7Jq59iEcgHvsPFv7yRKKv37erTQHDBfdF14wc8tVrsMVEWJsPXLA",
  "key26": "4xysxYsSmXXoFD711yUzsNUWhnnuumT9BREvgRN46h6TnanX1SGRNeZmo8XEPzQ3p8aUMfxab7vDTUG5bvAJsidG",
  "key27": "3d1GWheds78uPZjHHUhTf73fZHq7NhC9y3ZJVvA6jAMAQ2hydD2WMjTZoQ67gWg393U1oidjYzxvMK4ZLECF42P1",
  "key28": "43juQ9KSJ2ifihh4htRy79m3vg429vC6bP7XzCMTTxxQXk2QCD3Jjfxj6u4iCw2GPddNsGaNvagS5myujaMmscgZ",
  "key29": "3i6udh5hWTY2MsoqWUA8mpTivabkpXdBNzJw7Pvv1EcKYmDLHihAkCM8PpCTBuCCySKAkpvznqowiUrCg2TuCaho",
  "key30": "3KxhyWm1tqsG5VPErv4BpLr2UeweKnzjZ6jhGcVDr7nduyBUCUabefbYqaZ96AGy5w1GxB5SwQCWPZn5YWMaf72d",
  "key31": "2RuH9f62DmPpExJNGHWgqbitRn2KPRH2s74wvxscdViL5d7mC4bErePTTA61Eey1ZMJezN1ckLjeSG7B8azBDySX",
  "key32": "47aNXriBkabyf5DgCfjbVr2RCqLnuwBVEPr85ubwzEecgDe7LuDJKQsCFZNqVo77vdzSG693Wo8Mq3c9z4HDxy9p",
  "key33": "2hMmXpmFQSCtPs1D2tUmbZwxr59m52piJMVSZCygiuUuLsDVfDq53gvUK3A6WcvSfMzX1yaaeCfGo3Gp73HaM1UP",
  "key34": "PUq6sEaAWuNFWAfbPziJJyysJ81rDrH2U1JydGaobkGsPpSVyfUZjARSQCc5L1hHVZu5VXTPMptqwC1QrMxX15g",
  "key35": "GT7i8bjzNiJbPvhHWTFwAuCvBXnAZetucWLLb5ZhNVzu8KtpCN6bWn8UDexUyWRuzWXNVGvaMqPqWxHZnNbnvFa",
  "key36": "23JW6FTD6D2FxNgt5pMsjoxPibkCk3NTaoou8YnKKca3jV7TQWYEpmTn3SLXZoDgBBJJuaMYDdeeuWeKxBsqh6aX",
  "key37": "vMGVbp7qe4aVBHCcpx4YQvvzxnZbumQdLVGuk64Ak9WSxwJmPcRLt3ygGvq4QpcLgT4U5troWeFtA9XuiK8yu1S",
  "key38": "38SN8vYyZdWrKzgeTf2MmNrsPita3TFzdtTemsXUBz8GzAnH5cNaA2wDTgoy6QRTyPLM87WoGME2kGixAbCcWox9",
  "key39": "3dAsRY6GEtKFUE8Bjk7UwvAS4At6pp159GvSQULBkmdW7gb3L228pWsiUs49Tpq835285FWkzRcERHiuLuD1U1nW",
  "key40": "2YdRPbRDJYusmPdHzoMGNbwBoVFhPkm1bcKh47hEnfXCt9fnSJVNKiitwFPmqbschPY9pA81mSLHSxyCK8myq5Qi",
  "key41": "5JBMccf6m1G4K7iB8S17BQPGcCZGUHmhJE6nB9UKzgKUMcukdwKP3tsQEtTqre3MBqu2f9hJ2VihvUowrJP9XC8U",
  "key42": "urAnG9NykkyAmyttHgQePSLJ8dBjLAJq84fNo8y2xJwtDYD5Wa6KfGgSJ9eBQ9bJEzPrSNXBmLM3Kj7XgVMvnh8",
  "key43": "47X2kyPMBW6eze7Ex2ik3j8ySgLeA78fLhaQ2ZRENnwP814dkBygckKBGNRZxLbVJXzrKha3KFonpsYtbV4qJaro",
  "key44": "4uxMK2TwThyhpCZsSpXYwdE9YRsrLyGfNT92uGTUYSF9nRcmmjcoT6umWNhmd6zu3EDA1tP9GoqKn1zcoVSX7Tg4",
  "key45": "2PeJUkJaSWH9iuMxQj1AmDxzGECiJ4sdX45b3EAYM7Ujp3BMm42GU71CuJF7wy2vj3yCysk8RJG6nsb5zAUT4DXA"
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
