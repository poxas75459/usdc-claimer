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
    "4Lj6VFKE3XatZCy6KwPD4FWc6G1ewanTU4xKz36Ko6H3ieiwURogmdqEfW5wtTFmAwRVw9cRRXuF1K2f4M8BmTcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iGzr9VDv5yErVGv9G1B6oSNrLunRjnsv7EWRnedZe1auiJvHLBEEDsx42ZCok28LEg456wvEySdJaLcLdQbbwAV",
  "key1": "5iS1ZgLGunvLPUkjg3L4boJbF6qUiS5RvCx1af2mgzqd2QXaDwhFtKEJSxJujtw4Y8ARuQpKEgnW7WidVKUrDnej",
  "key2": "3SSaKhydpeiXYGZXpe3FmZ9w2mv3mVe4HPsWtbtSDZTXMAMRYX4WSCUYyhsqJ4NVqi6JsHorEjVPTcJWDMbjbtUe",
  "key3": "5V7Tec8x2SbxNYi82p87RmP9kwhqGanJgVjeMjr4EcdMutvg9Yeuz8w4NUVsG64z21Lp6TQX4VyJZaELAYAWjqfY",
  "key4": "2QkveY8nHnNYWfuBqGADeomXfRghbdQpeepdRkNorJ7ib74mACQ1pDNjatqeTwp1MYLwmXxTABZFhzkRJvsiPHAq",
  "key5": "4viTUdPmcnbCQhCMC5evJATyuvt4LTXrpVzq8YhFmpfomMJqg7cEj3dzdnHN6xs8gcqZdtm4bZPeyVru35ygdpEC",
  "key6": "5D5SJUsWJWCy7xr9ohy5aYxX3zrn87RkJLWRyw2oRmgtUR1t739LXfW4Pje9kT34A6At23wYR6saLr8vszu7mGNc",
  "key7": "2ogCdb1CGpa125HwboRsGyVycfANiaWUPmKcn2w6HJRN71DfnjNCk8ABV8MCk1Ma8aePWb2t4a1ZCSNcqMedLNHW",
  "key8": "4gN2v6ER1hTpaS6QG7Bvvwm76mo2mRpnXceQz2VimozMSa3pVAzau5Q394dpadFVmxm4kPdcmAWLLMdC5EZHRze8",
  "key9": "Bcm3RwCWkeJGWtg6A4YQdGM4A6tG89bUpMEBYR4b4LHiPssHiUNj6DaS6Vv7CVW6qrBFHDDvj6M1ERDcRmMhD6c",
  "key10": "3Fe2t7wFeExHbsysUzFDrZnjPMtA7UGsQzCAbWsdTjujnGaLLMxnKXgZkALujVHSEQEb2o86J6QNBdLmDupMbzdT",
  "key11": "3PtoeaQJNQzi6BdKPAgcRbRpLAtH7prpfGNybrhMxvGrahpREvddbh5EPB8wRUWUwTgRU6k5TGZcbEuxAQKQhf8k",
  "key12": "5m86xPuZfjKXG8BZuEFpyeK2eybtAPBK88dLcrn1JPNS1H12uaiwBEgL7N4KTr1uh61NrwNHpXZhpzhX7CMvkTrd",
  "key13": "2LMCgoy6WifYa7XnJEA3Wvm9t3ve8tWiPKbfJC5PMxR5EHiAv2CZLSxkHPUufgkLxemPJpkfkpw7LgHAyZANHiZ1",
  "key14": "5VnzL9LBS4EUqhoX4THWAZEAUfVMwZeRKgL4LGc6TMKvB2h6Dk3vDQrWixYwDoMXcSkuCo1fY9gBjHkXKK17gdAz",
  "key15": "3V4aMZaehYLcXaAkg7VY1FdeQVyZaHq6GeecomugxkzW3CE9bfhDeKyrCeba9cQViLhm5gCuHRsu7A7P99Z7tCN4",
  "key16": "3pwMT7RQP963txKAu88HRvNMKEzz7zB7ZPN1TSf24HpXHaRAgVFVfbDze3XCDCEHTdNmKBSsFuYpPa2gMApGhX8h",
  "key17": "3FZgWswDazAaKuREb23indoV21mBGNpPZWLyHm6vyzQQsDZdXdUM4k7YLNSNSwfesYxUd9qdFUzM51RP5ivDRFAB",
  "key18": "2JyBBjzsYF3esq1mBnwu1nxWUCcGRZ8kGTvsMA7KQ6cg2x6g1quEzANei1XWoDj138BLqNBSm329tgnL7Gjmm5k5",
  "key19": "64aKhPRPoKwsJMM4AzkB7fDRY3BUHJq2gjeggTQvVdgH9zVCdXSCHUqk3kMGeWQAhNaBoFGMdjTVjPkqMsoTRTPW",
  "key20": "2VBL9iqTkjce7VmRVxiR92LUqrZqePwQJph9xDtm6e3oW2xBXRrk7b7F4cP74M1gdoWfkpA3SjRUDDw2mvLyjLwV",
  "key21": "2b4SRUGRz6rd4ZTk1iq5pM7JtDuPXSvcKJ5jRo2cq4D3FnE93XG6Yv28JkLz3bRvUf55wLRA5rJCKTMDCeYtr8U9",
  "key22": "2JWLtES9Z7BBmEp3mhhQfRrtSV4iAtMgML17RYMrvPXbJvz1rkrMkS7FKR2k91rgywhbx7CnfG3GHcXCaT67mgTN",
  "key23": "314SqmDnQZBTXNJBseYV9sZdfwC9rNhsJWb6PUJxT2U8hE1oQLARJr9XoTtvFjEi1FQqJBKh8kdwwaZc21325CMB",
  "key24": "5UjPxSGXW3W5xt193bkFsEuaBiAysbYS4q2uajTk9JCFQNA31u8xCfv9rc4R2DcbFWfg6SPvRo6SB5omjseBfXhw",
  "key25": "5gYU1Vfb4JkXy5zLM9uy7z2LkrDksfRsTDb67SQfVPR3DqRnP5X4L6FNwjjHYhndYxdqKzDbmWYGC2AwB1s9fvfj",
  "key26": "5otVqW71Bj8bEKwiMBNyYwZHUe2FQh18ARFb7WhtV8Q3SKWbnizp3zpemLUvueCuz27ZY8EA2ceQwkPQwok3j8Fq",
  "key27": "5aLLRNCzoXD1mz6fzRVaPFaT9SLoDPJnG5j1GDifNpMioP22yx52CdsXkdjeaGv1cuGpnFU9L1BoTsifeKCKewsy",
  "key28": "4bNpm5FfNCcsPRUAuEJQ5H8J6ZkBJ8hycTP2qzVanzYKASZhm5gBX3zsFgvXv5wVu97QWMm48W3d3i7ZwcWzskpi",
  "key29": "3exQCpNndn8gTQ2XBBnjSQgEFvL5mpNgDHe4aSF7ZmWXszqnWv4TdMkfhkgqXMFHnd5vPrwXc29GEVY47yXB8CJW",
  "key30": "JGQvMfr1oZFFbYKv3XQqS48hVr3LBZdkN6CcynPZwNsHMjXsnjEEe4GbFnWqgSYwD34boErZCUnMnMRh4dqv8XN",
  "key31": "4iKkj1GAbP2yHBh162VqmwNhV2MdZ9YNSUcaiuozbixC3793WFjvYbL9Z9R19CX4C1fbvAmNoPFbjnqMyzcNUSNx",
  "key32": "4iM8addKvhL1yEYRKLngCoEFeQuYWBbQCSYJ7Rxxice9jPSbdYLmDRGQj6kZE9rAYabLwURWfjtk4jupup3FE2w9",
  "key33": "5a4sXVGqq7kSQMJYuMkUDAh61nuDyYrqMJB7oKFt5xBbJ8s5Wrk1opJzDbGpuUpsjaKC6DpXY1ctzDzRypxaNTvw",
  "key34": "4G9yM17KxomHyJNjHUkC39zDY3XPzvJy2e1U2A3S88oVwQ9d892Z8dNHE2qVBtYLcEANJs2cTnUgVtzBF5qBPHMa",
  "key35": "5bfHGgxBseoRSxBjZuht9WoMBM2fDGa9g8HymTvt2AVBvZU5x4caBvdmG1TSrWsLdqdQc549arVYgqGapzzWtqza",
  "key36": "9QV1pmwEfWCJrGXTsrwczJgNnGSNe7q6L6CtS9LVAB8EYKSBQYPgPbiZB5KVxEmRGXLQFM4mFrjeocdMtEdLhgP",
  "key37": "5TgqePsMeW177DLQtqD3JvYUyVjMMHpzqoo2tTcdnQy3FEax7xAeHHSV1HEch7941VRHhgVkihC37oMEMxrVjgsZ",
  "key38": "2zUhFgWVrd1ShZMzrZdDi8cFPiAknr8uLgvJhAY3N9nGqPBozQXwMPPfbaxWm4aP7rAyLCQQn6baFcCUdCLZesPM",
  "key39": "N3k8saK2pZpnZWwAFquyKwHcEGpAnovxr7a3BGZumwwgTqEMLMKrt3Q5N8TpqrmRJMQ1s72qd6x15EHehF8pGbD",
  "key40": "5kziVNxHYwZXUrbY7fLjihdGnvC5J5dTH8mYaxkHK5EnYa584xi6gNNd4p34WRv2LKUPaWx51ajU1KFm4YNNcqs1",
  "key41": "3EYa5U8QQr8D4gPhMeZVaxYPDYPjNAcxyAmj5u4da9d9G5PmB93dhomPKXSsmhQz4SK1CVAZjNxJ8h2ey8A4DDfm",
  "key42": "2Wub6UM5hMxMx1LahvfKbAGAF4gyhN9NfBNWh4iGupUtdRqvKybA9RLXrnPBWSKzVztmrQddYG5xrqhLK8ty1oSh",
  "key43": "2AY79ZfMwxxBsE73aDrAv1EaqmMJtgpQ9jtjVZXKKeSoytYJBa5Ye5irLDu18L5UwsaDRYUDqpc3xxvEXmpwsVXG",
  "key44": "3G8TCdGpJ2cB9zFeSThbJ7HxBHF1sD7G8dMsLup4PPTVveMsw7SynpdrmFUZGWJFBEdHxvJYxjGb26BtPuC9GVFJ",
  "key45": "uKwDUY61oFsc6jJJePsxeuLArrRZygyAjYuKdadcyE7DB74LaxfGPhNHLqaNtLsUcntNsXHAD7BmasL7vcvzKAr",
  "key46": "aFQ1MABk2YVFnBXJtYEoumkBUWZd2qNB9b7ntniMxTTSr6nbHHwpcddqB3ovtfQ8yYnBDxormNuygWddbxZK52V",
  "key47": "6159fMsyKUPpfXswKcH3QGmpfXBVSvDUjbNeLBjovknh1zXuQyVVLX7fGHKmWLrgNsQYzkQFPwUjGTNZqLbdhWCY",
  "key48": "4iPze1oYH9JqABtVFhqLuCQFDJHPygQ4vZdzgQiLXu2JqJB8yQcYwwxbWzvHg9MzJU856FUPu5qvuaxJV2iey1Hw"
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
