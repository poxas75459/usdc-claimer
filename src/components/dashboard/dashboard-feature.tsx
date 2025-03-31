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
    "2S9Vubkgkmj84t3FTftyYg3snGARkZu4V5NyRqH82AvRx977cMJS3S6dppLAqKSgvHqhaqAzzYc3jmQmHHhY2vHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n38bMmoSseBvMkra6C44meLicoV4sgUJLB4d6qiVbMXboBLHu3viHWm5SCsoiEHQNyZr1XrNK9jMK3E8K7JU1nJ",
  "key1": "4QFPZwNXW1WsRshBJcmT2AnVfvyAHWjrM11qZ7n8sE8bdqceqBceepPXdkxGiuC6jw3iWr2wnQAJwxDaetvVwARv",
  "key2": "3aN1Qe26T7CeTUd8aquitBEEeLCpDwAiC9u6aA44JzD6HveCh7mkuEJr95sBV8rZqoS9gAMEs5TtBK53Sh58tRgD",
  "key3": "wScSvN3m9C9fFUgrsjCc9N9V42LyeoDpLkWrRRBNYPxzbE3f2ToQ3CVtCbCfQw7oCsT6KA2anP1EfDCK3Ns7gL6",
  "key4": "aPLfw32TRR9uzsupytrGivXMHEdEi1mBE77B2RcbMuGPc8n7S61Gkt8KAAhMUbznKLwWD8UMdpvFJsNmofLfJxU",
  "key5": "3nn1Z2Qm2U2p4yQ9e9p9vtVepteTSrUkcA9oDXqjnvCpq4pnFnkEYZh1JTzi4ra1qAuTCnYKP7WwDKRiCDNgDUkL",
  "key6": "3bpdhKcTJxi3dt2zG12jJzTAjo7xwecJ9ZuL7UmrrWQVXLJSgSSqTp8YUw3P8wRRj6AVGKXedY27VjsgzSVJbT13",
  "key7": "4uTEjfeSdhgbuYafv9MBS74bd1CGrLmd2mD71dY3ee39zcxEPxTC4d8evKPbL8tTFV12svr4dhJxPaUzpgTqdo6k",
  "key8": "7Afen9cMtJoDVvrAzjpapNw48h1vGGN6YdSDWyuDNF7MxtJ9d84qj7RoKNNmbe7qWQy4bvocWctMVc3fpUn6h41",
  "key9": "4wwgQGAe8Mu3w1y6YhrWM254LtTmvQKKtikXDtBk7pqhtxmxwsCkmguRVycfEXYRuDUMrzq5ArGDZykGyf3QpkFe",
  "key10": "v5rZNFB4x6C1wsEwYSb4cpM1fRYwqzx9Au4VwQLonNaRCuMyroAyvRwAkjAPszGjjMSEV7WQNDo2xQsxAYXe896",
  "key11": "3iKPNGUCr1Bpto2U1X175RGSXeafWVCdkUKodhRoLWb4YA15RkvvcyqZ2u644FvVhBGfA4RtxJyqj9u4PAfJGYrx",
  "key12": "2JEezXEHdKQwmeuwRFif3tSX8t4wAJStff6vP3SVUTaJk7LHHkYWE2cKuk3PBU25h6of6aqPYXnQ28rSZM7TXhHL",
  "key13": "2KtAtUpQUC8tsQB6tyx4BX4mX5zQfNrUzV9qXxwevHz5SzDCLy8VQ8uRLcXLBTMgnXMsR6yn6k2WWRx155L3vpbq",
  "key14": "5ws4Lz3hewqncChSDu2hcqXF7WNAsEh7fdje1eTN9yZDWdWag1EaAWw16rUMuSugcHHBXR6hpFdEfBvvferQifd1",
  "key15": "P74bGpLUfaw8XD9M2hgEXpeV4m7P8onfteNHMhKJ2Vg3VEEMVoLzQHXoeHMKEVwiWThnYpUTXVHSJjMDohbDAAo",
  "key16": "2aTX5QBg2FLP3XLM3Ht4X78hqHp2bed5wdWiyaRtfqEK59Jw2yc2JbGBxwA4ieTiEULz29bGmVhxSZ8XyJrNChFw",
  "key17": "5GzExrswburDGWTDLNULw95quDDsbTnFZ9kXNeJAwjiCFXssHGa44JDcazCf9nofqWmBhyJg2zoVeL8LK4HKevj1",
  "key18": "3AF1Edr8h4nXrQSygeacZV8jBQfd8vpcde8CEUzLQz6EEW9rY2SYcZ3T36C16fhPfYhyJMqUnQkBsq2chTfZqevx",
  "key19": "4aLCxYs5KdtcLCvpBjhX3FrMrg4cSAjsPDik3cXDRen729i169dywiFRzvvTqhryYNGp7xsjneHChCZq7ue9gCPu",
  "key20": "evpkopPxZB3DfFQ61Dnm9gX4W724aCwJP2WKchQ5iZAv9ur6t84aHKksDt9wBbdz2sHd2eNq2PDaqcptCuDfSe9",
  "key21": "31msgf8J9uqWTqWpnHi2MUFHQ9TErNyRHoNLhmLV4kSyVHXZBNk7UFXNa1X3YXkXQDd9uP9pVKjAVuSQThqNaBeP",
  "key22": "3cMPhQAL4fYv6VF8rJKb6dqZNbMGAejy6WRAPSLj2CMawPknxBvR5QjjLwNBq7RGHVGvY6QsMaA4Gv6sFFa9MUuk",
  "key23": "VFFjwNhTCADbnSzrWnzRnphcagd5i47nnycsGkfqb7VkgLKGYqZVyM1LoBUP4L6XhB7DYhDE7n9mgUnCNa3FBfZ",
  "key24": "3niVRhZkgkef6iDyYv8Hx9kXnCxUKzBXsZsfmPUPdnSqdqs8vcctgR7Sg23zqKZ3wHBLqvpdnfqz9275qd8Ekqaj",
  "key25": "4nTz6RAdCvg1DcGoAhyqiZswDtfusausbY5rZC1yU7E9BPSsaFnqnaRwiHBArNgV2uk3Q79vDMQrsWoKxQvc69dc",
  "key26": "3BNFLi1RJuSW6N4DMVsEcHGtDpKXV54x7DUmFVXNcAurgz4NewbVP5EMHu3nkmFzZZQf26PJrkpSCJ4nU8hoDEtP",
  "key27": "3uUSkyYHALeEEt3AM12iAcJtf8s7mKVWDVsQzz1V4nYwBqshahNiuuBi8vqBa5sY1MtCxjkr228zSS6jtseo4do",
  "key28": "4mZkAt3UnhCrZkUJ4wW9cDhanpCAca6VsyPFSy4R4SmLy3EDp25KUqBY2PSKoDxSExGBg88WxG3bqUuSn3aKxLBd",
  "key29": "bwVXjUPGAWKoN7tMarUR9AWzACiPqtDrzDQj2Grq9dddYdqbgJnt7DgxCKdRVaS1QmpKKmUjm32ofLqkfDf7rxF",
  "key30": "5zUrou93ebbvKXJdFdut1i7BejoyTptZ1warJ9osFtaLX6rPnzhaAHSX3JQFr9YrnUzyYpZWk6JbdXmQ8kpeBxXh",
  "key31": "3h6wQkBLiuDrXiDqnhLrqN7zQLPumh5pekxLpDR4s5opzPZRg56WGir4WBtat2tBK5z8QhQpXP8e7nSRxdNcTa5B",
  "key32": "62ziYCwqC7Ygu43QDSEARuqANRF3VgDboVi9VyqLYQA8uQsmdoTWY9aYB5KTwaPf41cn3kkSFUu2oGyxca9gJiFU",
  "key33": "4FtGtGiB2R52VQaJuq9rN9ipeXjJT72jaQTgoZsCYwhoB9wN1JzscuG2J8vjbyoGg2ffp2QQsc96oFp9Rh7vqVT8",
  "key34": "4UbsawTKU8gMnz6peVUg5nt461dpeduXoCzNd48RKDtpwgrXsiMsN1rGuxG67Hr5hA1QJf3yQ2VXJ57YhLe1HS1L",
  "key35": "4FnAnWoB8m5oCVDFn4SkxTH8kumfqENhcmqL38fMnADGiJcVooJMNC624cjacHGrMRrPdcdoTRft9UdUjDA5ZZ38",
  "key36": "4pmEdZuNL4iwe5zknVfc9epUzfUKHYcN3Gtoo6LUXnndPnuq3ZcdwCYrP7NhdZhD7zqNpEWYyKuUe2xqxY3xN5gc",
  "key37": "4rgeDrzB7P89miUtsJRDQJHSQ1qDh1H7DcDFUg2Eq2RaBJwnSAYbcGrzZRA37xBj1cy4xFGtyk78VMpKG1P5bruJ",
  "key38": "2KccQNtdhQKCtQeih6eLnxzdwswuNoDkKtUknaxD4D2Pm7cn6sChDZGv1YsZG1iiQc7EQ5TBNBXJmYqMCptP7w3Y",
  "key39": "4eWMuL7DVsnCtbGJb1XHV7ZzxW2vakmhWDzuUSVJNj9x6JBWdU3ZczYzbobLz252pyYsLanhSssUXrGhFhkd5CJX",
  "key40": "5djMxnHtEHbmJExo6jcHDCDrVh76hxgbHtNmEJQA2xBadSTQ44Rs8D8FeNaGz3zGhjzzL3uf1ETHMWZy5KTvp1Pa",
  "key41": "4aXvH8siEWCSYbaSNuteUNN4v8wf3A4cDzC6wye3qNqURnnmPSejwnpmBx4YKizFkHrFy1aFb8puYBwTfWbcRB2N"
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
