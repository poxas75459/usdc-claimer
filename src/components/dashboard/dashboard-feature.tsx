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
    "3PCcpb3ZY4qPRWe826oZ6MD4LQF1SsTzAG11ipKJNfqpmijs6ZHKxqcpae3m9MDgRKR5dyHbfTq9WfczVHentzLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJvcJMtWAnV2tiAdj74JhjiNyswemiFVhsDmmGvpGvRdTueQVV9Pwf6uzX6FEfyZGRzm1zQpZ91mwp1gyHmDudP",
  "key1": "338b2NDGyU5dBvUTHH9xHkjxeGtAq9bThYsYRsStALhWPvo8MsrG2MCCZip1wWASF8dH4D4w4LsriVSnEB7nthWS",
  "key2": "4BFVDkkSwiLYhZV2MaWytJq9YyGyEGXmCvoHnKpMKJgMn2StieEkyNkVC2RZwMc13zf7CWGv6d119wbR6LcfAnLq",
  "key3": "2QCmMQPSfvMfEAfddzM7omotpmgg9tX7zNjJYDekiwANBbWNSoAY8oCjQmDNTPz4sv1UZGuYWfwYiQRuHPhHgWPB",
  "key4": "5ZLm5PrjyiPaX9DTFV36fngVuRyDS8SuL3BT37hyyQkTAWQD85EQGh4wGcvY3JxvjxfiC3p6FaHWyMz7TuXBER47",
  "key5": "4Udi3xWX7xzAzPzf9CfC7MKuET9nNqAHMA7aTeorJkvpBkHbHZTf9MTTXe6EYR8a9sx7rvF97sEadFGThtqdykGH",
  "key6": "3oLiiD48TPPDsrKvoYEUK5iKxrW9kjD7wN2LTAU5eAWnupixWKm9yWhjM2eUJuCkXhn7azwR16F7NM7vNuDSmRha",
  "key7": "5uxwaZdhgapqb21We1oPsYqTZUeEWkavFsgB3myZ6V3foEwDnM6NyFQSCSTUccvc2N32PWRd85djikWu7MjLVoFs",
  "key8": "5P7bVDWgNjySWH7inZzV7nnrNz5r8EA7amTg8iBdpAbczLdYwsF2uus9Yk9TSunX4AwiMgZvkJemkCRWKXBpuxCb",
  "key9": "3Urni56HR6fpuEkXRfBUSSvFcSpHiR6pMP3TrKKhi3TvmCvTENjzVNwmekstuUMoqyfvRc4mkDxjo8RrCVamPscL",
  "key10": "33MwwCvVSXueBW9qWhjmULQHcC438yAVLpSDXMKVP9NvdriyWBjFSFramKuFrgCQbRfhjRqtdfHyy2QfzV1xoGHx",
  "key11": "5TrvFsK8C47MPUcxybBAMTT6nr1SdBs18jrATW5jm6xz7D4TdjEWpST5ccLp3pyBZiBhLXdkikrqWurmk163Lvqr",
  "key12": "2wRnXSLUe68av92t6PpX9MxFTazwWhkRDXt27mKbNvE1euYbKvFgBuM6Q3cT4J2L2KitCyfU6WDTERG7H2zVKgJD",
  "key13": "QEwZzX1gFtEY2xq2HBHJXYg2XSs1XTuNq1Dzp89h6qUVLy3Pxz5bPgsaofXtXatRg5Qd3EoAAQ49ENHwxVkTaaC",
  "key14": "2io9c4yyoFwK9GzJVFAiB35NDKGhypoRnRbM4YD4hEa8WXvpByTZGfJNCeCPpzH9MaX123T1w7PVyrpu6EoKsBb3",
  "key15": "AQqaGWimt17MYnbwXReh9YVeDFAgR5drGZ9cJHUbv8StGdmbi5EUgWPUdeW3SibJQpyjzPf3Y24VfvkYad3FGEx",
  "key16": "51xnYTzjuLDywnSBwxAhHmJwwuvdKpiDyF9tMJoJ4Zz5vByLrFY2pfJPUQgxAPTsGWxoMhXTSGJegWkZkLpRqrMW",
  "key17": "4y7BnsbDgoZBF3GugwCLyzfJ6kToLTV829AuLrijxodxDMjRzE1Me68peEdEPAcsKbbR89hiwgJwqNxHKUFFtrFs",
  "key18": "6yAkrawKknjynRNuEfqUP7jrnM57L689cMGn2QaEBPSH5NjkH1izvmtsQqieQ8FNYNhmnk8vYb4pakofddtDhQ9",
  "key19": "GptCw2XeXuk6Bd8yc2SWNKwZ9RWmXGG1u9BVvsWTvSex2Ey4t8cMGACGi5BJzizxdD9Kxt6hxu3q66RL5zo8SRP",
  "key20": "5C1i65JUxojbWjSBA5vFnPv2ykJZECPRYfvDhgE4yscdTrqxpKwonG7xyZHDePeQKJg94d6PXTCYRPSmkgqD8E6h",
  "key21": "7YHonrjaWZsLKhUm8ANSSDi9MiBQcuhtWcwGv4qJXRmQffvH8To3NSQDaXCoiXz3Gc7mtLsFLHtyEgk7j1xkPzt",
  "key22": "2tTXeE2U1BeJP7Ubyb5tWcVFs7T5ewuWYVKZzSS5U19AZ5pjuGPLh7dueqyyCAhbFAH45bHFW74iN8XJKBRTrjg1",
  "key23": "2SMzej7cYNGVUnFDZuVVtLVun49A76BnTVVkJaWshUU6Vwq6vqpKwVt5FLNGUBxg2HskoEd6XtSSCuu6ygNpKnRN",
  "key24": "47wGkENboV8xjUTdE46FACijmSzwAhPsoz65RtRATtu32DHQYHwqRkLhQyrwYAmiBvha7Ch9nGjgi5Brf2R31ZJZ",
  "key25": "3KrMGLvyLCh4UB9KzBUVQXMw9Uw6hWw26xq1AxjCGu7HZC3Twrz6Dkz8yLih1czBXWdhtN91vC14ogTcaX2VHtCu",
  "key26": "4D9peCpUeN5Yqmjm93an3jLFKZKjXwRuwnnZcJZQTAUAia5dVwZqa9VEGrnjNV2hTp3wT75xjq73ZHvHFdzd7om8",
  "key27": "ipPTT1qx636PF3iB96mtpL5wsRm3e9uVYMi9KLSk4a2iht4fBU3cPfvFfMgP4kgbAkcdfcFeG2d3Ww3uS1eo7gs",
  "key28": "BQR9zYY75mk2MwjUAMeVfZj968pm5LFMDaomuM4yKo1ivL77XyzU6vaXkD8kVHaFmhjYDdzGByYvF3epwR6LUYQ",
  "key29": "5GdRDWGqxZqVhvpB71qG6biTX6kdt556dUTLsgsqrgm6TfmtnkpGnsGr2ZB3HL5g4ccB6htzwsZox2AFfUShUVSg",
  "key30": "5Z4ayZX74yfVju4ew6tATTFcecMXrryVM3MYiMjnZC3BrRvVgvNW9sY54b9GWC1Crj82kk9ByYyt2DwBiXjdFrrN",
  "key31": "Vk6kMPe2rATMUzp3sGGQeCgVaFP3855XLCMo94HZfDcx2Fh4YZe3X3VckhWof2icmvNvQoNvCKf2TUdAZzFjKb3",
  "key32": "4HwRxpH2ctG1uTKmR81sAH5VaMX6nUp3HU8jKh6UgeKQedvqmEJskeUzEZv7UiWxvxerB4oBh6KBSYSzmEtXz7hY",
  "key33": "2WDeTBUoc2oGPz5CGRKWoFxt9uuWBLiyyGfr4eQ4iNer16Y4MwLyK2paSgvfhyY7oezoe8R88QHbe8t4aZ4ohwzh",
  "key34": "dnPpBThzoWRdsQVoBJL4CYLJzAnPJyL2TvA68Z4TeSRW4JoGb9JX3GEM1NoQZiLzPfESPu81S3t3nq2YPbN2oqK",
  "key35": "2dXf5fgF3aJnhZwdy4X1UGH4vCssvrWk9UJ9DWGyPRzShZQDQ6D6xUu11t4wjxduw2XkDWYFmMqqJ5Xd7ZXbv145",
  "key36": "4P6mavHv8cnmipizoq7nrgYqQE2HxcosdPkewQUtSC6HFtSxfeCxLMfu1SEz7CUGxP6rSD3E4gReMo8dzdfewoNA",
  "key37": "2iyAE6uRhpsJHddz1fXLVKpc28mRLXzeGX3ine1ZJppYvPhYdPjxnHpEMjD45iUqZ7LqLukyMa2ZxirHSsCe3xHW",
  "key38": "57QSTjnvBtDpNXUsAb1izkBLUqd3aZza9hsfZF79UqdmwDDbEN7FD7iJVGUtwBWWB8D9T6a7DvtFskFaGFeJNZHq"
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
