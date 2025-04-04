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
    "5wp8fJoJapjNMqpU6xFQGJmL5bymBkG19ccsLoNWhyzP4PtJHYeZh7hhxsfDY4pBserEzcygu8a3EAgBjdEGDStv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nd5SvzsuR9KPqKxyoKVNHUgs32j8vtsBSnr5msPqDcZP9RdnKAQSiRKyggUwggDLinQmB1aokcSnWyohXu6xfZo",
  "key1": "578bzq56sfY3Dh3rwpBeQkRoeaiE8fMMV314XQsnm9qmQe4bFBnwEjN9nzT3uXfont99FwwrU8wGX2P9TBLZzoyf",
  "key2": "5sGLVHnwjyejVsXs3KfxXGV9HrvGLQi64A8yyuNRkeqX7EVKRzYMGyHVjsX2LqoefPtCQFhbdgtpLgq95UeJKE28",
  "key3": "3suzAn4kaKBmYdYQKtsTmBaCoa9RkWeKeoqZuKFaszUx3guXNEqiwtgppDeDyhnbDC2URHWucWPdaEe1y4sBTgVJ",
  "key4": "4SqdPGxPZrqsauo6GEGzoswciKDXJaQ64rWTFdYsu6h7Cz5Pg7G2514qYzgXAuWq7qFf4fVDvM15aBBL5pNtHW5E",
  "key5": "5HePGvr7ewcA7w7i4iZbfzzxU26ECRHtTg8RWH967riuYgSHMkNfC9m7dgLRtkUzfSpJH4ri6AGCztvHqFTmMHVn",
  "key6": "5nbAHCkD3757veCYA5Whh6ayUVwAkRuHHVFfCbuJE2aJEhVX4K9sFpvtPvEp9yDQCudenauTV689dRLmvAmQX3iP",
  "key7": "uruUzhETqKWkDfXZ7bFFQ6BJ2qFCh3JCvZk2aHsWfB4m359N6Rv9BbpQ6qgUr8SnFjPtfoAhx4t45FWnFs8XNJU",
  "key8": "5iV1Zco6ia5HPFEewvKm6fRnKacA4tMfbNFoh4xsxdAyeamKGnofFWczYaUbpbrwqVkqCABB3vptcaWYHFz233YA",
  "key9": "3xg7RpS6Tay7DrJTHTEMo3Fihh4eCxJwcpvGsy2z72ge78fKqKZNJZRyeh8os9X9SdeXisALNvN1WUDacUBGUoBh",
  "key10": "4tsBbUCh8pchvV13b8dEiDURg1dCbyuCgjft3r875UpKZBAxKvLKNpPNW2uQhUcQJt5jqtWD5RytesZHyXxSv8vH",
  "key11": "66FZafsQwip8X7gZu8RHyZNqKTCcTrtHWwwNaMt8jpXUmMtq4NQFhuDGfCDmF5rc9ad8eL2zGQQ4HtVBtXJMfe7W",
  "key12": "pQ5KZwwjHWiKLJtJYe7GCtuxkFTmMFYw2FYqgRrA2a45Yjg1Tz3E48XEw8f2far3wCmweDFvsRxQY4HBZomgc7h",
  "key13": "2RHosvuNZxKieyfXtimJHCszebComCXDUVLjigWPHuJwq5UqixUHM6e38pUH2qnrffpqMy2eFe16oVvA5aDgBzEq",
  "key14": "3P8qRA7uQCWMCb7cohazrr2zueEcTi2KuskJQMbobmE9zujAXKWimQbAnBsXVmhdSKi3VDoYz28GET2wUHHGnfxr",
  "key15": "41PFYL4JLAXbQShzceTJZqeqLDyCtEju9DmDpc9GMeb3HCK3gHjyp1EDkykj9sbbrJJwBq9XGY14EiSEmxZGUNb",
  "key16": "BZBkAh4CF6Enoyk32iozxEEwMLfhM1UTitEwYgkVGvrjfS2jqDVDWhKu7Znvre1dSYnCWytFKdSwS6eTeEoVWJj",
  "key17": "3M2nJQ66BuTUdMHLHQ4UnFYjvWJSxBkL4oqAKGcfh8jbQary3HX2zMCrVsB8kD44H8kTDo84nvi9Ln9zqmXA2hM5",
  "key18": "5cWJaj85YofmvfMUAyaq7b6p1tEdubdspkBagPx8gc3xTrbkR9R1RBcETs1WazhDqGunJv4UTw6EdGtWJUJWNcm",
  "key19": "5QAbQPCs7hr3XQSXPjyAM1vPq1pUM4fXT5KGzaShCcmjVUnEMYqwejGqzHvGsfBWhYnca2ZMdSMNbbySB9m8eqDc",
  "key20": "32upX2Y9uFgLRrux92oDCwLdgTsMk32ygCg2ACrWBq3zfMcS2pcHoZeoLimAiBTRYdcv63E4AX7fkiGHQNzBAJ2P",
  "key21": "3sBYCvp5K2WpGadxqgd8kYieTbWDxdMkP9pJUSRDs3NxoCRTEKrraGsP2LnXfGdx5tHK1cHnfZwDTPrYfP8wxUvS",
  "key22": "2XXEcecUBXGUMejzL9J2G5okH7BP96bT5szY9KvZeMFqZmeoZydbaNof3qmqRbGonLm1xUSMvBfofNCNq3PAS5dC",
  "key23": "XCYjFwQJajeB4NZG7ASQHcv25EhK3dKkXj7HqZwhEmTeHnRWQocvRvxqCvvTTSKgVGg9XUbKZoXMn6T7AjY7jLq",
  "key24": "476pntF6XjRVxpcc8FfiWm3U8DG1jLzg4qC8BLiD3v7bG3S3BbN7MpjNuW22CU8rEJNfWzTc2Ysk2B7KrdQEuvYg",
  "key25": "5Cp52B2hTwsqp5WZaUATEA7nYXscP8eSGaYg62Zz2Tjr4eWfjyB5tmiMkEgoGzB1s4KsEBE1g3GW4c71SFBbNH8H",
  "key26": "2UHnjFwe7zLLiCzshB26peWj3hQLYL6VmeiLuKJH94pTb6eXMvX319WMgtyTVhQuBJeSx3rcMNx2UDJF5CnCc5Tu",
  "key27": "3xdDpnjrQ17ABwzaXuBXj6zXx2C7DofHHRoWUmi5YeUP7pwrNGZCgX7YdGBXwXgfdqQ3PkLDNCCGSTr3psqkWLCr",
  "key28": "QNAeXC5YBWLRuadtNbun8uVXmP79oj1NB9GLisUFN3T2dbeY2j7NPYkEJ12m6bMLnXi9EquU6q5t4ejDZR2atrE",
  "key29": "3e8rpErxKEGgPqtVuqmF6pfjRgfejM9Cc1X8X4pr3tCRyAGu2EeSZf6QsmoCYxkd7eyvJ7WX24d7q7nrMz9dE7ie",
  "key30": "zBnFcAhg3Qp7nz85QswmEeETvqj8sjisK63BauHjRVipWdCPrW1P7SDULwJauKSt1AiaCchRW93jvqpgq9TCwbK",
  "key31": "4LtjtAPpfCBucrdmFF8WpyLAFVWKjMebHf1Nxr2gLK7qfhkKR5xiy2S85F35qfEPHfegx2u9G6qFEneSNJQQSLHf",
  "key32": "2u6FgvebCxGmxnv73XHetF1hHZ9GJpbcFMvUSED3dCQ3z8AJ4kEhMbyGe1BivjHkuui54Mx8WCfZ68G9vh3sjb8t",
  "key33": "2DkxAMXzbvGxKoC2JGwgCQKkUeEVo12a39kigRGgvmFmWoJjdKVNycsNUqVuc13VVqkRXTZWSAQqAUSmKrKVcSzZ",
  "key34": "vc2joUTyWmt84Yp8XUvTJv7xutKMBNZRcD2ugdHhwMCVWpoCgp7v7HVgqxesfUgRdKniNNuifXY1eCQXBueMcu4",
  "key35": "5V4Vqut9qNSWWwBUkUtUd2moKrGtebxPsxRHGsHvpaReFnZksvexmrb1nwN5Gwsk4DnjipHm9iaqvJBU3hTBWPpZ",
  "key36": "4K79D7vctG16yWkUbWEV62wVFwDNj79FGFpJqimNUGHnURTibks1ZxuHUT9WhAfa4TFV2L8mYkCyoHFWLBtMSwX4",
  "key37": "4VrmNTcFYvk82AGbzAjZrP75BToawCqSKZB367kwMamTSkw1VUJY7m3o3voJhtzSZp4hdjb81U3Qz49X2ATzmmaH",
  "key38": "3UXZKzeMDXJXoFbFdt55UhqKXkzvNeB6VaciXUggX8hnhN6Q4GtAkUtogSVUhaRhibrZsWtTkbqpgPaLAKtTY77r",
  "key39": "2fJz9vH4WXpoQStt4NKTiyQyj4mb5wBogdgr8P9mEAFhtb3rHW2qUMxbVQpJm9ggLbQTJ2AYJ2nkMMFgHN9U6Cnz",
  "key40": "514hQD8UuDcgKVLikmcxv4EUWe8Bke7RCL9RKkPJFR6DFzf4oNCubnVL2oDeQyk6xYLvKe6SJjAvAhK9ZeF2mnya",
  "key41": "2RdUCywq6qwKnEdbjZMnn7YxQcMKtmS4ou28cYKgLLakVJY7UeXPk7cToXP9beAdUZJjBncKfAPjXYGmKnW3Veqx",
  "key42": "3Ez4YoPC18kVqZmD3k8mLNkKGLJLxczjkQX3nKjScTUAmN8bNp691hy4ZJsuSresQjyK8LBr1PbE9VCY7UeLrWW",
  "key43": "76WdTQSMc7jprACNf2KhhTpyCXbfSGixUr7GcuxnU97jURr4bjF4mzPyBUmS8PC8VVjgZ12rr52b6gWwqUXCabX",
  "key44": "3YVs1CgHCKFBNhUZQ7ZeHykLNaNZaqUVUBF1MipUCuXV2xD2BAVB3o5AyvAqyCq9Sv3Gzsxbpz1N6Ae6bB7oBhkj",
  "key45": "wayMMwAMtSkqx3HrbPNW9FU85ZXkuVgxeu89TiP2kJpKCRkVaoRGxih244w9eLj8tzV5fmt2dqJF7LwDZPnw7qQ",
  "key46": "4Sq4uWi5dyRUhZceqLmyfUVpDycTzn4jcmuky3SGTjwM9Pi97GeCcbmmGEjowoEB8FHFg5ESbaGTPAto3SrWz5k1",
  "key47": "5pdMCvFatzTDCc6qUTf7nLCvrEUfNd2gSd3sEa12DWVJeeETGCvZV5bS8kGhitbsDhHuN83hmRRqPNS3qnLwqh6j"
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
