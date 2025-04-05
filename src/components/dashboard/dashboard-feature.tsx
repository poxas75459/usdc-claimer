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
    "5RFubzPrXJqXJU8cvQP6pvAJp5n94N7v4Kb58Zcfi5pU9FU9Cxh7xrSifoNeYjvWwTM3fvF1Rcofmna1CyCnFZpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a9N5sqNaMnvYhVSkRB3TRxtGGWTmMDduCqFUu2LVV9hoUvq8d4wkbQ3cKAqsistsPfrW21pjcHdSfbgqpow1LUN",
  "key1": "3GEHQ2qzMaU1nFPRDKeLogCqt3Lv1LoW9hFcrPgPkTSMTzQrWaTST6o7kbd4udMUah1fGP2WpnmzSgBzDCvbZRW4",
  "key2": "eTMY8TDxBTZi29kJXXVJVZNyGpSdvqM3kdKkvH3bWrcv7Umk51kPj1heLZ8Xsu3AaBhxCXxWnXxT1gVaasLzJpz",
  "key3": "7AVxZDbQVb1w1APrCgXdQtsjXg9Ngx6fc945q2L61WpiJ6W2y6Y6YwhhRSNu62oXaF7PZC1SSRCdvkU2Ve5eWe3",
  "key4": "heKMjrkVzetHjPZTqeaTejYkou2ZBR8WQwi4eRomjzL1dPga5UWcZ2DWWYPiCDZ1LF6eQpiH8r5n2MhRS2FkUMC",
  "key5": "3aNcLH1FZ8mHLrycamxssgRsazHoGbymrvtoaXZ9NpyJAWZaqK8YYeFMYGYyxtSyvKyXHNZ84gDzmkyyXwYeYpCN",
  "key6": "2V4efCqJsjQaE4VehV1g8RknmjcvbDHAUitzqBMd65fzWCo9iU43p8fqRhXKzDzmzWeYr1xoLvnnDAeM2Ayi9zKt",
  "key7": "4SnhpgppSahqLqyPMGVwcEqSDF5t5i2ZjPn3zDWvdgCA5Nfaqnu1jEaHrAb3HDM6o6eeN8aQFKkQoz8qRGoBaMDs",
  "key8": "4xUqs5odcURiYmFxqAmmTPCPomdaRDbzXKcy5NnfaaLsdMWVnfqfWsvv4GyTcDgUWyarbzuxo5PWTG47BToJgJf2",
  "key9": "4ERgkocEAzcYJ5S6KMs2wpRiLGgTs7EHUS8v7yh2CMABSNAsJ5dXEptj8HAaoSiEhD6nSD4wGuo3Jg6bbQktMDcJ",
  "key10": "3L3bC2mt2GPDZmoCZH66Pm49VEPDqxsKEmDUsxAqJDdtk55xZvjydVVTA3mxb3rvJpf1RfzFPkB5k3WDPqMpBo4w",
  "key11": "5SusiyYzNkGaGousikBTNbaDL9M9AMskqcRmX4vnfH1tJHuWBFwxLcztrou3DwNF1PmKmVK9T4m4ds8aLjAaH5UJ",
  "key12": "4xCPmvHf126EFnm27LV2aNqsy5u4MWQoWpnZc9PTXZFq4pMAdzvJRC7bpMurE9Yzft1KpePo3chmXrxBwKZomkDT",
  "key13": "4QdnL1ejcVbjZxgZcYa9pjq7Q1aDnLuESFd7mjQSvwne68qu2P82uy118w12rNu87dweJB3o6Ly5eZbTVJuQR1nA",
  "key14": "4RRHi5QsHbqBL2dXcRLSi5JXiJUw5Kb6aXKpUbJFa9672HJTZd7MFq3zbjvazcuxqLKuQZq6aDBS5XFcQrKj1Akb",
  "key15": "4j8mQGdGjFVMMWjn7aPMMSToYNG7GiUT15FtsYUkoRZfinxpsW37BPdZs954jBw137rxTjR2RTumvBoTdLn58exE",
  "key16": "5qyqgDnKWdkCEji6KZcyfJqaTybhk6qvc4HcZAXGoT9FSAhMobhUnCXzU6k8gkTr5xoKbiB2GF8V8SMsYBcwNcCH",
  "key17": "4wnUdhn6Y4WnjbcAxhkxeTJwXhRjKAb1SrNzET7YdvBPxL8MQNUCg4otGNCLG2ALLipb7YaTAPy9FbbXSNoWSm3r",
  "key18": "211kV2ANU1BXf46puRHFjpSdWhG9WrFGZnPiJ3GaGbhsAsWK3cMoP3M6TW1zGDxzRy7yLfV6gWFPnGKGcgJ7PXMs",
  "key19": "4rmPyuoCzV8XfSzgcvUYkG3uY3EDLBMRonKVVXCyeCVb9uYXMAxpW4q4AUiGaByNWwrZQsmKA4fqNdqDCgGjBB6U",
  "key20": "5WCjZtNsvsSy9wXijcVSYukjLarWvnQCujTMyqjWtk8NqJSHtSXPJPH6TWL1x8aW3Kf6TN8SdNCqT4wPQgsJXjQ3",
  "key21": "cREMbL8Wkp6QqEdVg7b1X5P5NHYt8irpeu6p5boxgNhHP9tj9vyxYz6Y8jv6MPnCJgMJM7AtHUQSuSXBRYfmDgz",
  "key22": "2mooeMVPSPnRyxycpNX2EVNjnRogdak3XHhg3ZgzWtXishD6egq2i6RaTCnuzUqTCsooptZvGJ97R4yQFDoF8xR9",
  "key23": "2GKjSGS4hKzg9eySFuEbTpdgv42tWT11BUaM7LcfDviATa43Pfa1ToVhVeYj7TbPwUP8d3ba4DB5KDWihQj1HkEc",
  "key24": "52bRhwNtZcW9tfPvMLfAqPVpkHxht2z7hJNPbPZKpeBBtekNUwRSkjyBfbDTY34mma6KHgd1QuKEqkPiTU6M36fP",
  "key25": "4MP8fVhzDPr1Lo2HsJPHVG8LmbHqjas2vgRxCEyQF4pF65QnHsXeEyPbp4kKVQs4PByfem8tgpvN4BRwe5WXQru4",
  "key26": "2cYDbFEwB3hRmjQW681Mwe8JNMan4pX2GgNFrjJZStYguRDbEN25PLTNoc6pjxugE9ZdCy75fvnKNLLyMaFS5Z9y",
  "key27": "5ZQ9dUoifQSJsT8Uxuz2CZP4o9rKLBLjzy5Er5FHWfMRkZFmmEa7PYYDopKJg1oPFyukYNtYz1GUFitchrZXZHi9",
  "key28": "5nHYLbvGizHceZTVUdKQjTDPq2t3ANAe2zDVq2kue7CJev7eQEpnf2nLbYnaFcKs6ntgScXurW8PHjExxiDofVwW",
  "key29": "3gBvDbiKVatDhhsQfeFdotbeBAu3ohGeELgd5SAAMoGjtP7WEH3Pw1WvpwvvXbkQgb7T9G4UMS8bvxynqsQPGJ58",
  "key30": "2ey77gPaVw8TPkYuSE22zsVNPsuH2fab9iLsoakCECjjpXBW1ZvAxFxYtQfUrpHQygCpm7LAaGsmKb9YZstrvKFW",
  "key31": "21GtRjeZMUdb6PDdq8fLgjkRCXLCY3xoVTh1idF4o56hv1SJrSfLHo9ZpyVqGMctUsyTQG7WgHxHuc2NmMN5kL7D",
  "key32": "rGWpHqw6Gp5CS8d4yJZhphNq2RCdPMfr29TZXP4YChkzqrzzqXoq4sekQtgsoEQUHpd7HuZjRuFGXY1H7ZhJYSv",
  "key33": "3NdYiqVAP9QzwEkMWiBoz2PtZZwXHpALKgm3rZxJJ3wp1XYsfjV8zzGqxkj9XyrkwAMxXxy76VcBrLfrzC4w5rS1",
  "key34": "2LZ9bRnDdEz4Y7VN8NtBGmUCauY9mVgSsirS9zv76Fhv7xTYeGadat9gas6SMLeB1M2sYd7mXAw5qCcefTnNN6GE",
  "key35": "61p3j5Ff1vZHJNhwhqZgQh5cznXTAHnNJqCRp8qF6u61s2ZpWudJzy2aPBAQiDXFkuRMAamvAqYxaUiJejiKtAxQ",
  "key36": "3rBCHLtA934KHay9ZqDHVJnFh7gezWtK5JBo8acgfx2ZzW3n5A3EzNsoRRARG6WtcLGJMXSTHfQ7yuR21ENRDRyR",
  "key37": "51D6fnaYwYZ8bc62zCqoFdRs3pqB3FQdDYraGcmDMymk1LtNRvncJswSQx7sB1Lj89oPrRHZSFtzbggXRRzURZGB",
  "key38": "4rrqBsHeLMYNQ4CHEUb2aTRbYH8h6EyU1rC5fXTb7xtjp8vVD4ayBfLwpC1R2fccrizUN897ngFpQnRzakDSTToA",
  "key39": "4cCBRRgYrgtRw5qj5qB6vRtEDzijjTtpvSkMi7fkcjCX2JfRDbLBsscGmjpK2G7kYaD8YM2GndesUvHTaBVyLC3b",
  "key40": "5qqG9KAic63cYFeuJ3x1i5XdzUHyfC3nLsaViTxq2x8WPVtDCn3cSb291H35wmxQW8eXW34p9KEypCaoH4RZ2efZ",
  "key41": "mjKPuuA2ZhwpZvbmHiKxoeR8e8N5GVKuhVvyGfrvHdaKEbjfnqNZyQu1KH9yU73Y6gLU4qrvWEfqNa8FfgTDzQs",
  "key42": "2WYMG2EuSXqvTqzdSDDHAsoqEx9cY51LXLc6rrVGkUenH93CeBDaKVgW9u816CSj7qMadUMQkPwtEGgyvQHKKjT5",
  "key43": "dvYVTGTnQkGNwFfTK52UC6EkyPhXd8KCp1cQxzp3YvvT1QsBRgxceyuxwGgtV3AkuGYN11oVtRHJt3Bu3kPvzPo",
  "key44": "5JonJZwVuAwPpCr5RERmjB6G8T6uUzaXSowKkTk5iMt9hLRRiZKvMcBRS8zCagh9sL8RbprMzrsToYCBFusJyitk",
  "key45": "5kL8bJmWpWMRciBduoiGXifS8z68TA9JpkTXqgn2rtwiyuNjasxoj99YHf6tx37aWp8yCWcsHvaZmy9NWg5X7Vd8",
  "key46": "3Sd1FJeYCC7gecs4dRRzMD9ufXe2hCPLRr1mepEcrwzpvrYaEP714JwxoYmAWgVh6KSKe7b3QfZDSDa22qXFzpWq"
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
