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
    "Cp1f5GMcdZgyFEkaeAcofFAmUvLybLMC3A7J3Skgi1nG3nMJ5WMmYnNxNKNYCajj61nnbvPSDdvUSjMBDqMRNCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5arDoyLPWGfq8CCFjTE17h75YqH5e8LUbABybGhssyfWokgoXyJS4MKqd9CFyLQWhgrEAKT94jztJ9kYZnpFBmHX",
  "key1": "4LqAGGtNJgjJzR1GPmocFRzJQrVBwNJ4NHop56729zM7EfZwXLuBP7gEqy8C5noFQtt5h5DpBCmkemyQKAxVgXWU",
  "key2": "5k9eQpjemyTF3Pyp4yh9Ebj8NraX4PnYbCw1eAB57V5Bo8gXT9TE3uLjwTme39nssK68nWVUVy5EMrQyA3QaV3ff",
  "key3": "4Eyua6jVandNNdUb5WiRU3HdZ8xAKMLmokjgyMnaZUGFq596XrwpuuVuyZk6KzSbBNq3Xf7oqnWVeGgDTzPnQr9b",
  "key4": "4aCHWNHeeUozbUpuLYriErFHn1yB2bydKhPctMiVkvGW4vbMEJECVy6euqJfwk9vzvV9nic7Hc23MCqAoeonRQzB",
  "key5": "5tcQbqNZaYqydCt5pQUam5d13443dD1SwHpu6Xu9dqStmVFEP3mVMd9NHWfEofJpRv25wGoodwfrPDWGQ5nFw1Zv",
  "key6": "3pq77hfUS5GPwgQGMPTbtz911AAEdzaNBNJN9ovzag63XTryq1Sw1ve61aXS7iVCAMZPGCvkH5qaAgpsZGVmrVjG",
  "key7": "2MAH9o8t5EnosmMx2H7CcyMpXz88WXHcUphn3HNdmU3f3LhALyrLCNS6UyCQ5G9yzicBkU5azA8dMGs2oGQhV3gZ",
  "key8": "556hmqfiCpRqYNo9tBUxqyAzriGgdPJ5dg36peVai8HDWqqzVjo2zSC9BVv5aHiAhCa7FkRyM3U3DcEn1as2zFQi",
  "key9": "NFk8KvTBWdwtZtsjgEkXMw82V5K9pPATxuNRFF3YuX5NmvRm5rYbQnxtQEgQEMh7U89R8CUoRy487dGrCGe7ve5",
  "key10": "6v9outDKkSZwrCdqNwQ7PXrjUJjztrCwkQTPxPM5XBP7pWsQFUinj48jMB1oF9yc1KurU6aAQeZSXQ4brmW2bj6",
  "key11": "2YfDMLFUtfoPiaJGEj8N4CmKMvsiiyyaCJ1SkTSg5TAaLK3c6zqpfeSx4qxz64bSvgq5NEkbSjjExxrgdWWqse81",
  "key12": "3nXmmZ8pdbM2d7Q3iP3kAjfB2MqCGfZ2HD7Z6MxtkKXqbt6FYEmaA242iKgXWAByGzgdA98tSUdnj73MUhYWL1gi",
  "key13": "5yfhGr3ZDe2F9W3wv19y7fwcFanSmXjmA1Vhpmm4sTGhpRVyvDgTUbdcH95Tg8yefiPWtCiScBbVYBmGWbbzn3ky",
  "key14": "5tr6fMAXgxDc6MMRZWAUqGuwu57r72p25g2cTFuAZpbacGs8rVqzRM21LziKMKzTrMqLsxLzEZRNbUMbLLqrrP7T",
  "key15": "2vg7JuX3SNWReWWGxn3uhWbqvVv8sgLRfcjBpni195Yya6pCoA98k9SAigwP8rcH2sUT8kRhJ15FyyjWqThL89iY",
  "key16": "2zoqUTWDG6M23jBeZN9pPREed1Umxnm156CVFULks9qXp12NUYDiX2R2AFkzJYRJ7yHZ2VC1f4kRakuCmiNY8HCK",
  "key17": "2iKxWoeWgMffepfHbUMCFuwMnCuhDJsEBMZWwyxPFRh5VmXHbpELraUYyF47KWSRmrGTDcp5LCtMr84XvknbiS7N",
  "key18": "5kQbmn5YVHPa96yTuErgymNtn9ZdwYmNWizVYYch3F38L1TKgF5v8Vy1vkkL92r8pvqhxdHwbnJAo8M3Eo1vJGp7",
  "key19": "dYEy8yKDW3Seud2hacAubxEaacvLPWizquahoXCnLHcxSND7P17FNiDJvafo9fetc8pcYmpS6dHGTigEC6p4bz5",
  "key20": "42aYh8ejidACsDfLSkubapfwomJE9pzxqxJtweQqx3bD72UjDYwUTmgQD1qWbhk2dM3PMNq8UvbkXsUFJCiEEgrZ",
  "key21": "542miwUnhDq34MceQ1zGy8jfGve6yVuEy5q1wUQBstgtVJ1uTV1u4njBNYy5WqAgcKWa4jEnAXAn6eLM11C9xBrD",
  "key22": "5wn1yxG8QfRtnSBLP8EtKkzcWRToQMCz4vhNvG1geTvS7CkVC6EsmVpwoSGMWErCM1H7FLoNKT6X2qXWMWsG4JSj",
  "key23": "qr6c2XvPmFhF9c96xcgsXEnjMBes2riyghGCSiaLiUo7aqJWVY4JTnBKqK8Hmk9bBQFPjHruJfX2Nt1fBZMtA9a",
  "key24": "2WEZrrTQfCjpHkaMGyzv9aoRQeKjwq7tSyqh5PKHN2ZQzut8BGPh3GFeEwmv2GL1Gd3Y7ZVqF9MHuSisKEzKejYs",
  "key25": "3bRtVVTh2PXtPUMfniRdLw6yCeYtYxL9XkZwyiYPsEKXbZcw8jjuis7wnbMd5qoc5dV1uBPpYFNuogBe934zXgnT",
  "key26": "3RaV7omYF9eSX7vjrMCyxmb7Dtndr9j8GATru8SG3NrjjTDnVvpbJLesXKFJW9WoSbEo4gqUFmXU4aDuE6w79e4e",
  "key27": "sNLaXoZT894ZBxa54BLwL8sheXhmdRdkmce9wFgPBSTi83eNS2ARznFQmos3gcre5Q9wEKV12wc7DAr3VybxHk8",
  "key28": "3FmmyfiLBeYov8ZL254NntvpC317pYXsxGhakFXGw7bRunRMDuwEct5z5kmtQ1tHJBddkrvXB68VYx57shzTnqY2",
  "key29": "4z2uybEtwfXSmTaegkFc1cc8X6w5YoXWE5PtcEZWCsg8fmVpHL1G369qCkWkdgT1MFeyqxywKcEXwbvFLKsuDM6s",
  "key30": "5RF61jyVBSAAnqye4wLLfXMvBiJJzyEfBCKQrnhJZZdMxJfov1PFT4zAPqNMYFzk6aTgoqtb6X5SaMk5QnF6XWZR",
  "key31": "5jLrjjXzaTdDdfTpWaNqZ2Bh6fu2vqnqNcEWfFvDcAg8k14DDaNFQvvmDoMVSzrRJX45n1QSb4tQy6TkUnatms2c",
  "key32": "xRcXi1CdNf33mEhd4xbG6eYJusNyCzVmtgmF1knbLrAVvWQTXC6A1vGXfgF7XmkxM1XLYWUhqwbWfN17uFW9p9s",
  "key33": "4V7t1tyqn5HVhx1E8N1cLWK5nZPyNphpuQ9RnGBpxER9gsXTt6yFdHBz2rhsqa5ZccD57Tcjn7NuspDwkvsW3NzE",
  "key34": "Fn5dJB98PgGWQ8X8TnWCFKSzjx6hCRrNko84SHo3NNHPWsVcThpu9AKJUvrNbDnb7vBSYbcyC4NmfUSuc1nrsH1",
  "key35": "m7vyqRoxodjYwF2YoX2U1XXgL4ixikMet4YkaBgc5i1AJKBvpLHrJnSrsoPiWJD6BLxpbczpUmX7PPUfE2b9uGR",
  "key36": "3B35KSoGaHPKi6eAG2Lx97mNrxpEcTavh47jc9fF55heQyWXAFh1JNYax5WAF2igD9zcMZBLQeB95b9zzjQ1ME2M",
  "key37": "4k3n4eqfN1fn8oW1Ymiopws7shWy8XcQLMZcpy1LthMRk81WzhUKwpiTDimDdaNxyY19opev7spp3FzmB2w2LzDH",
  "key38": "4U5bW1qFhGctfTeswgwdoiVZiHmLUXtaBsyjgrad1L6cYEVyagdSMgSMeb4UEp8yyiozx3RfUjfSCRuEtvBtL3d2",
  "key39": "49V7LZWsZjKtRacyDbcSCKP7tUqztGdRpWXkfXH7V1SUneXTsk7uifdJTNzFz2iRaXg46pkcPn6rrhjSvm1yJsQB",
  "key40": "4GXtvVfwd6kQuGLzcMPvevo3vrzoEd8KxBmjYJgYh57hJNZ8ruheUcYnL81rxkL6GvkAEDxQ9d5t9wrXs8WTSzRo",
  "key41": "3H97bgvCtQmdfEhQ7ZywJnqAJta1Qg5E4qYa5NE7fL2ABnWA67FsERLgV6SkhVPa9GNStmoizEFcf5DyB94DoRKN",
  "key42": "2vsUQSDwP5n8PfWLh3jvjKUww2eT4HVhkJC5gc6hcZzX9awQcJhHeb6ktbwjQ9pzWEaMddyspaZyq5ztruXYAAe7",
  "key43": "5UnJLvgsDBbjA57Pvw9pDyydLyYkxmaXFyBccPSZvqnC4ZS4WDwQpjJ4hZjFGhAicy5xUkbgnbiqF5WyxeiXkyBn",
  "key44": "3X6b3oeYwV449Qf3A8VUe8nGywPD7KB7oDsPsT5bPJf9EdDaaB2YG3g6N6TwaVreVrtYRG3ATjcYJE2ageQaA6Uj",
  "key45": "GfQ3qvRTpUJxzEcJqRLAbdZbpdqwvSkdmtEbYFENwFo2t9jXHstaDBVHrAJPwsHczhuHe4Aoqreuh9iG6PHMFnG",
  "key46": "4MJTZgwkjueaZQYGBQ3qMef4sXSPqzPJ4eq5YFZNG1ZogWzTKr97RJK7xDnkQEwNJCFKvcG9qGv4P37sS1snNRRY",
  "key47": "2ai9EkqBmqU2h9LnsYqgVv1SWNC1RB4Rgg6c1aYcakhPdyKGQWZL6bUXKt5mvaLmCSAQzRuyiC3awrA7sQoaWAHX",
  "key48": "4FqRDy85rmrda7sz1ZWDbtxRvGrdLpz3Vrd9tckctTcNmJjDfTCZMm2vLj6VvSZseT3BEhKTeuHtoberea6gV6Cg",
  "key49": "2Zq61qAiCBK1DuLoZrbV2okpifSgnC7dXqsaUto9qRn4aZjCoHwUGizpN6KEeVkW9ZXY6RTgz4cngWwEeJu6pa2T"
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
