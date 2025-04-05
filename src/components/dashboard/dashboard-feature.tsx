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
    "66EazGEjEsukeoGrrRonESPfym52LpsEU8fxcvtLhvErhDhhVxhGC4rryxYUXQ3rHwF2EKvMC1EdpTsVNkCFbsz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dvqn6AtLv5UZkhvye1ZBQaeyWs4D5FpzDWHzZ1bAzSzuefj8qLHhYcLkoLNnYwD4yaidneVzJ3KHWnVN45kkRFa",
  "key1": "5wrQgjfyd6RofeySyEX17aNqXVV1LZaM4K9JabUepUVDGLX4vH7YtL8f5p1xXdXJ3raUKJoP15bU7obLEragD3MH",
  "key2": "K3SijCJTLQTkknxm9Re6mfQkssFUHfjAGAH9FHm8sXn7tVTZ1HUr8ZwHARA16PocmsnvHtLy22q18e6K2wGh6zJ",
  "key3": "3XdmMHshYqPskN2j8DwWvcdu78XhyqUnZfYEuiL4vSgUMAnUsFHyxEJumiywkHew4yuZYpJtgMhhQA91NgNt6iuC",
  "key4": "2rcEQe78abtyS4DaC8kfjgP5zRufnqitfWjJjMhRyi2Ys6hGAQEtPHVRayqWv3HR3xQt7Sy5YkC9ZeGHx2asMuf8",
  "key5": "4hAKw3j7Ft7YBfpuRfuSvnbV2yizMGepNAV1sceopZ2E1AtxZkwDRQ67ArPR5YMeMy2NoZoMpgv6wDgqTxVPK7LZ",
  "key6": "TNsMspDn7qxZxH8E9fvAUC2XPSrouCZGnGYsZHWfjA4GKRWHmn4iypUqygDwu3urGnBfVgPjrmtpABgXummA4J6",
  "key7": "2d796u5pBVeBpzwECiNtgZr1n1kJG8ehg7jxADCnG9KB48KqUmWMVH7rseT6HAYc1XiwMrmf742RCoroJdxsHxWG",
  "key8": "4LSFcowqc38dHM9mK9zKc8brJFUMTm6x4pK4cjubxxnjK2obragV6umkkWtyAgsu9nzBWnwUqajx3LQSxEomBBR7",
  "key9": "3DZEH7W76f5g6yghYhBCZh8PVsKTrSDGYxAtg2bm9BVfw8Dtk9gsAATB4QyCuHvTNBbZU5T4zzbjsKBzxtbWCxv9",
  "key10": "3r4xpnfYLhWAxsRj389UkmMCeHDCsJFe71dTfjLgbjSEcYoPHTwqiYzVpgsckP18gvQKiKXzaaAuJFkFtpYMxpwA",
  "key11": "3PrUf6Jn8DdP7XM6wgGLYxJz4vUnByA4TetQvdXMRHN385UsuTHapCokXs8tXnMZGJhMBJiinbKTTsEwMSTBVHCZ",
  "key12": "54k5BxhYEozCCw1nbWGtRTZbU5ozh5hkqUEMGMGVofGaQwh1DrFJ39Gn2XYRd7zFA7bHEoZnwAfzF7osX6x762Fo",
  "key13": "5JsG1NMyjS5Aq7EMCVCr92QKbfPiDzEQivwbJVhuu5ieEYhJMR6coZrcqrJmqhT84EzpeMkFfDDZWJxbc4Gb8CWD",
  "key14": "22tncUGb4yRbac6WnUGnjNTwT55wuhP29jMU9eashvcoumnH5X5DJmYQjyrH9Q27nXYSY3cn3XYe3aUNsF4Uwqpa",
  "key15": "5yfaqQJcbUs9rYzUmsf19doBEUcd72ctZ5iAenaA9n4Yx6Brf6jZba3N1K73wSseehXKEXWQcay3B5U1BvXhoBSd",
  "key16": "kDWgXcTiuePLhyqoPzsZgd3mDcgGvBrDwAPuSRvrZZEhr19vngAiYa4Adx9ggTYMycYaQUbuUx6h3NW8n5wjK89",
  "key17": "3QzWvdjvU2oMhzV2UMbSpghZNJAtTywNrcpZicjGoANqeN2HGboCJMzP7oAHRursTpcuuyf1a7vnsQ51L4yxxyWG",
  "key18": "23CxFdYQCTNHvmTC8nmX8aks5HP4dAYvvCENHgEtvmpy9iUEsq93mKrgfCrBCqoyHsdPa9BcYcRRVUczX9Fbxs39",
  "key19": "5QGk3QLRM6VsBVZhPyzJK8xm9mHzde3jGEJatMoVwoQFCSbLQM2hqwcp7EF135MzGzeeMfRy41At9LjrLcxy3jc6",
  "key20": "41fHmVz5aDHZPt6ruW3bdE7HtKo2UYg147zhbb8k3Bvcqs3zwe5FtMrtNwR1SmCLjcVfHkE3yjUgv5yvvVga4JtF",
  "key21": "k9CSVmvSFfXgwAiurUYvCKRRx1r9hTipA3eMb56WCMNnBM42MixkeGNnBGMUy1oEX7gT58wGacw4JXGZ5vBZqmq",
  "key22": "4w63hRdqg5ys8NPvFaTm2UrtyHgubSFz1yFAASZUPwkBjKFYzcr4goEMYwaw7dbyAgnjRNsfwudyzDkvqDHdgXNJ",
  "key23": "4bFQvo9AM8XnCyPHLk6crUnsZFyB9QkcXfy4nbpkiDHPk2EhAbEkPkBZB5UQYSuFgp1628A6TjdGrN4QtVLSHze8",
  "key24": "2QnZiz6WzYTUg6APNk9LrQCPBX8NEnFPrUY4KFeWTbPgCi7w5hdaRDo3YoQwsUJk8Fwc42GeVSJHpVejMmBVJQCJ",
  "key25": "5YDq4Cih8yMM3BjZa9pNqsqPBwHotMAYV4iu7iNW8ZCJRfZ67hvZAvsLuBrvQKWVuqMgmJLKgBBMAahFfuQqBsMB",
  "key26": "Z5brb4e6R5yEMMdsRQwei8BHsS2g2WpPePsMV87NnShFDTHSKE6hBYaWn4rneua5D2AFynuiTnQCqHjSSRefKrh",
  "key27": "4NP2S3NiFfVr5c2NTJ7g5oj6HivtqXg6D5qjm6X4htMYwmWuN7z2PKcBmmZoQYJKdgDjhqRznZXh7pgynoDNRzjH",
  "key28": "5S4VsUUS6LN8dTaE7A61gYevb4NzQAf7Tz6pkCSQo2Uu34SxNKdXYTKJLL943U7d4dzaSnanJtv7DrXjxm4HKuff",
  "key29": "fdkxHBb8cx6dwV12GzN1YVLaSWvLKkWweeUsCrBaT5vgS2L7LpAAvhmJMCiK8Rb7LSm1DMYPEJ9VFM6i5xaFRUu",
  "key30": "5Qc65mYtMHdeLwRfzCjUSpf42LoagPBPwBhoc1PE75mifivjvtHV358uTMVtXB3TP7YKkbEhoy88P9BCEKfeph47",
  "key31": "3FPhQnghTKazTt2vLBnn9GS5CkuTWHX7W3Su6tTZxgZ7bsqkWVCycrZoPz7CknaY8pWsr3cKEpzsE4XVPRNNn2gE",
  "key32": "3Wm48noZmLtLJpBXiBLrouyJnem1ae4pPY6dSChVHawg8k1zPzT8DM4DvJFCXnbrGecWKNGQoyAg1SsqAFTTt4sv",
  "key33": "5QHMNpgpJiE3RZ1yzskjcjkxxVddFEwfc53q6qakx6vaGjVKdoxSE6pvLhbqW6V1oBXS7P4n4mrby27LFDTTLTsP",
  "key34": "5NFbhhuUvgs6PCMhb2s6tAo6a7YjuNUH7Gq4YKgmGQoi1jPMaVppHBeJJehXbsfxPUu1ZVBpNR5HPbqiYK96CsrX",
  "key35": "4MRFc3bLTw2c8pu6DqdNP6FPMt8rkuj3PtA7WPoeC8D16zKzRHQcV2c4zmccGbaZEaM8sHLGdnAgsu2on32FL7ar",
  "key36": "2UAHx4kvjKWRoujq5QJMzY7kYQ5VFnu1hwXxuc2dUJRacVurzYgApCLrrqtJbcBiVFemHWUiSx3pAPBeDUfFZEyk",
  "key37": "5woXy4kPqjYPgKkLbk833s8Jk22zUj2bF3h6g9Qsq1DHVpxQrqzLoHwmY2vRDVvpSXCG5Nw5shHZFLBHT5FkhtMF",
  "key38": "3e6vbuNXtsErhzajdYoJZZNs1uEXgVvJUqSPCGGw8GxY57A8XHRPmydhNWtTnCUnc59hRECTHwexTDy9b75i2TcU",
  "key39": "oWoZysNY2t7VcAaNfxsb3mkofHKK4iA5aouiAbg9opk9SWwTZrNw8Epwb8kPSfBd8T4vSoAtJEAaDZYN7bpfatQ",
  "key40": "5iFsoAkKiEgtPfNES8yonqMzmcTiPJJegzsdjMGru2AUo4nYYRxsgmhYLQBuqDJfVVoxvdH8vRNjKLgCejttcWnc",
  "key41": "3u9VZLvVF9DH3X8VhGqpudUFAUKh95gkEh5cXHpomLe5g7aBauzVwVSndF1VBwMNjSU4AC18K6iULVeux7Az7vHw",
  "key42": "4nPgogXTSLQi4fPip4ZtqiH7AFbY3xEMLMYXeExoP7EaK5SfZop8dY8E6Eh66kRPrgCqUhxGCSBY8vGcsGkskNMz",
  "key43": "43Tfd3qEA5kUh6m5PxVqQQtpffE2a93KR9EjRVQg1zDDKxnHBDRUSMaAXEUyrykNG71rcAC3BvAsh2os62eULFmZ",
  "key44": "4QrxjUVNp7LP5hyhHCewsJxf1G5gt6D4436YEExc4X3UYVuiRLNN2ixYpMh1BLzNFW3ZgbEhdtaSCHKRLqCbsCgy",
  "key45": "229WECj4zjfJVLqZrWWfsPpCBKLbEdhZfshGXkXNwKkbqhMVwyeUYcpCnbrne5jF7PW4CNrYE8knsxEZGLLdMBnv",
  "key46": "4GHWszNzw5LsPH2mEFEgFzq2MGYBwi3jWqVUn1EGRZCDCJp4NmnTTpAns9mE82dES9pCZasFobktzMQxZick9E5f",
  "key47": "4mEDST27fpJAdBBe5fktpM34dseNQRaah7h17o13xmsQs19YApw1UDo2yJpbir2G8SFQqXUCQRf6WEs2LHwUPNxx"
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
