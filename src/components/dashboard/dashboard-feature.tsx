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
    "4Ucw2MmN48zb3hix3jLStS15a8JxFjUNSSGrUNf9XT7bERpvYAGvgCa6THpEC5z6KH1PtaoCLaF5isV4rvSTAqi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NHcxhxoi22JyLU5oXThHVr74wzvkttWw4bd7QU6PJTbu4bD9jQzzP692hai8NYVxGUgGiZkCQpnh5gHHxqgQD93",
  "key1": "2U3A2YnKVSEtk2osipHxhCT1t1HDbGFZWtg7yKLtmEbkS6QTGqco2nhXPs6CMkaKs3NvXHmve34ncy4CwepDpdc6",
  "key2": "4656nUwBWNjjqHaNty1k7UY5vpciYFMaGKUaZrqk3h8A9EhMGCupVfrM7XfPH1wZYi9gn1J58ZRQj1nfB2FN1Q66",
  "key3": "5xwv9veDwQSR2E7jcMMSRaPeYqTQTT49sLRiZNBrueodP5mS2YWGg1rCkdNQxynU3FKXvyFHK9cBNTzmmEgZPB6d",
  "key4": "4jSKFUjN74E1vv2ACh7VNfgxWpVGbxWocmbTF8Bq8ebREwEu6pvQacaAQrHKnb3grRvQhw6QKLuctub44oSVhmN4",
  "key5": "UCkD8JsPkfEqXUxq84yjn89B7r5ps8n8RQf9LSZD8t99auo96LRMoXrZeTPtvgHXztpa2rYNNNPgWwYuU8cuMGc",
  "key6": "2THkydUgGZqpj3Bb6Y8dnFMmDaZyQoJP14NkXuvs4ZwcPtvFZWTZToSRr6P9FPrnNj9T7W2Y17AR6MCyWMGzTANB",
  "key7": "2YN2sbM5cbX3RgBfWqCk5HuocNXL5Cie7dMn2Lya1wPJXFShQdPspCN2EB85RX8L6Am3e2CTyMbe3KuQmhYbT5tB",
  "key8": "4vciE5u5HcrM4qn6i8mWttb128BSFNjjbGpTxaZZwRoWLTNcj6XsnMCAUJUic4UtMRwpEAaPUCA1ppmP1JY47VVB",
  "key9": "3eEGf9fVgFwTJb6jGzjvLvkQamaffTx1moSiF8xhPGmBXr5Q2JwuVszYNGxVhXRw84wCe88zqetJt2PhHg3CgmuG",
  "key10": "65P4SVHhZ7urX9CTrb5UehhruzyVEBuNefhK9HHVhMBE9Mqt2jU8ktsDZVksagC7cjBXXwNWM7LPabuE7Y38KCpr",
  "key11": "4H1Ze2YRMYL1gxDSTQ8MxqHZxLR1uk6SxPQJVNwHTwvphKtNq7Xn6ghePgL1DKSQ8GWEN81V4Pbj5asM4TkDADcD",
  "key12": "Sph5Ji82NrFoMzWz68XsyJmZhJpx89TpJVHm1qWCEMtRnVCsSwbxSvsZ7qpyqayXdrhh5eeL8ynhRAhnEMANthc",
  "key13": "2ArBWecKfPntRTstTQaSbFPA1KQbAo8LET1BqS3v5fgeWoBpu5DsJ9LeatSSmorrvGfVJiVUdfiwypQPNvefpmG5",
  "key14": "2SaDwU7SLPysiMfL4pVsv7s6Pyf8cuSSYzJDJuNgRTKGriQmZ9uwwVKwijcUAdqGQThahG2z6oDP1RM367hREfob",
  "key15": "2EUh24VR6HYrmSokq3mBZftW3Mp8EDqrfG9MA8st4LaapQVTscZqtiqMet453HHYoEYxJDt8inZP8gG1f36quvht",
  "key16": "3uyhztymZU3eaqessgiHQbDHyf4SyH6LoJbvgFMBNJq5YwdoSo41pcLVvm9oeDP8AgD3eQxGzFNeP6zDKkEnFRP6",
  "key17": "2hTpEW1mEALGCXQfJpseJ4eDQaG7jbMNsmSv7Q2NECFbqebSSegJMQJMAEbwh3t56Nr3widKxiAMHgdb4afhsGbC",
  "key18": "wyaVQ8a89P5uEqmxJ6iViYaUzvJUPtLMgF8LhM1NuvCG2LSt2A9bJfs7EUurNbhPd52CdWFqoUMKHVQapTwnczN",
  "key19": "4BRnpPKRpQWCB4H8rrurmioyLHbxy32xyqdjUFZsW2EShonJWoZv2Ce7inP3MKhtKocCQp33AB1PT3Ww8bzyecqB",
  "key20": "qLFQcPndaXYFFWPoRWAZcVPU3zNVmtdRXNJQ1exFzj3g9W5sgmFXeqf8KUWanGYzLbcWWf3w7xHxsNffKy5faLS",
  "key21": "66Kh5joe4VVhhHiJdn3kkJ5q6n6q9yDYyoxRsfKzirogR2qXjehn8pcYyUNPREkfxHhrmbfRwzPMMC3AvJNzVeS4",
  "key22": "3p5dcqDoXaSj6J9jt1QiwXLBVWB5GVty7uB1QM29fFdKG7WaYtY3BNNJ9JJXrcEmG8TveBhGAbfYA1XooU5XcToy",
  "key23": "5dkCfd6rPwEZQFXUa7pXSg3UaDw4vbzcCrmNzCavmZcyP2rGCD4urBbQNdsxKUo7bJRLthhxVe2KiBTroTFn3Phb",
  "key24": "3vBu3q8yyEb8TzMHKa9NaHFCdKRRz7hNC6LTMZ1qp2Rm1X54hESEdvWqPECpaG7e2EygZ6t1SyHaigHAhgqQfDyT",
  "key25": "3Cftf7TqMv35wyFpWjet9Sb2SqzaiEMhrcuGj9Gqmi3iZ2SFz7URt12wpGe9wXahpNrrWpd2kuRcatjgxFGqn1Aj",
  "key26": "59VcVSnb3LCqgbgSeajGhsKgX3tP7Efhe6My48YpEY7UNQwESyjRtWz1JFvSLkBbzUYgKgFT9WRaEE5JkzrMWMPR",
  "key27": "2tUX9zwD3urEBxD7KL64fMKJYYWTxzwX9sRTs5uAVSzFmVpBgrCJzYBtCQ9Wb24xXzDLhojUy16Syfj14AAgw2qS",
  "key28": "2orUBXtoPz44qiCV97Yd7Z2q1Dyky2Xy3K7XnjWpzTZnWNqa7BeAkXCdMXAxaxWzZfXj3vMFWHuqFAPXKLdvMgqS",
  "key29": "fSCqMUeB3ssgRWmWgk8QW5harjU78PhZ69uvAWhNHZnTMb55BvXFtZG5musBSbnE94ti8kYy5yBA5Be5zMMxzFQ",
  "key30": "5tcKeLDJ76EqLe1DRy2RatJcohc2hgx6pqAFzPyCS1Y7CuJVSJh29Zvn8faXAUXyskQQf6idSnYEeXerEMaxAzJF",
  "key31": "2jafe8gVpHhbyuohCJWMsopf19ynLVW928mPwnrerWU2aa6z4ZiwgeorDbMigEbn7jkedTg35o3inCpCUgVvpNYU",
  "key32": "JScLwLZ9iphrsPnNJGqnhUGoi8VWUyYkvZ7c3PzXs5eWLJY9XhQR7eYxZVfRbh6VAYAKX6xZ81UsH63aX1U9FpJ",
  "key33": "2oPjU2sXg4xFM9YikbWT9r38JLXMGcSpatksWMdBbyKNJ7eKMBKsVv6YzHYCchKq9AEKmz87q1Q4JkCpDzZBP66W",
  "key34": "4s7Byec3egnDRXeRaKfUtkGqyxqqM1K7tDeG5mjoTeC2XKs5T19Jm2PTpgDwSHEunxg4qJAYvYgAry9gCfzGpUM7",
  "key35": "4pgAnZdYTZYcPZsxSAgxaUieXqA8btSFSsHrAqaLuCVDoP8qVG7npA46ctcEEFbw3T2p6uUiD5ggpDTGV4zEfXmY",
  "key36": "5nYkJQRMxwP6mvPFmDkd55h5RDS3tya7f6LWmsaf243LRTD4R739rUNJppCwY3HeEAGkmfCq1ZZUBNdF6XSBUNZg",
  "key37": "31DBUCmDMSQCWtF9Ucfk3yE7zcrRiBw5umefVWbvDqJpLnDFSYHkCqsjfRiu4jWAvWF2gYH1JjWhbU7qDKRX8o1J",
  "key38": "3sEAvBEg2HeBFBwtute7VmSWGxgaShkBJHM69j7i1UyBYRMkCZBuHi61yQZkwJkvJh3fZ2ZfLJ82ihkLLwZU5y1Q",
  "key39": "5drt55CDEFQoHSXWHUPH9oPnvdFVgyA13VM3MvnXpc3MbvuykrSYuJJowy8Tpc1cnABQLdur6mte1q1RWq7nGrRS",
  "key40": "5ve5CtguKFfy7hbpqzKHyVWh2ttDRU7qXFvP7FzkC8DniyfkqvLgQWx8p1rMbeew7Yeh1qQnT3LBL34kwroediMR",
  "key41": "3CvaaaH56tybBe9q4N5QzoKwJE7ayie2XL8MdDSmYp25bVsrSr5odL9DaD6PTQ9sMcYCsdi4ec8ZypwUAtRhkzg5",
  "key42": "3Yni8APBzcDE1erRj47e4NDZAtBRytw68TxQgVfssKpw7PH8bREfcmV9J94cCh1acKugs1yGk9hdHk17msMr5S7T",
  "key43": "HowqFkHD3rtG9sp3JPYfTg2G6bjwNyXMATrHrMtc3k9qrVMwWDfWYR3ANneH5pMhBsmvj7FWUDvkuS4BEAXvWxo",
  "key44": "3cLKBzRsFuiGWWPip9KF4zkx6LDVG9dMHKWXo3fbRPuB1XSdgWJyzpLtEx61UtWvPFi6vmvg5CyuSQ9MifFNHcJn",
  "key45": "2EYFecc1pBWFzwRm8fHyjDcPSuuboHk51VJdGgTDDQfEC5PEpJeco5CikpUsSyN6TWPi14DggNVj39hAE8rnbSTG",
  "key46": "4fvUKq1rcVX9C89sadnHPRi3sNwgeoss92e7N9WC5JszLw7M9Nxh9Y5reu4E6y7KpWUTYxeJeB5ngt916XTASVSe",
  "key47": "5PJUcmRu7Xyhm1p2cfZ6cE7CDbpqqERuSkAV9TWyW1FSCnX9H4wYKFvxbyungjXdzLSbdQmNnD312Pi8ZmDTTqeV",
  "key48": "2LeXhdWFc44jiZQhx6MHLsGmfc6EfXucVXvzhC9HiHGMe74bDhxCUeCgvAKUSoSQ63kVGzpXjzTQrKZTWUkSTz4A",
  "key49": "3aTdW577P68QjBJFHGzDgr2uWCmUGCaaHuEkVkzmQn4xBB5KJUzDJdu1BKZRiWfpEYVUhHRBPaSeE9nyh8ecYxBt"
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
