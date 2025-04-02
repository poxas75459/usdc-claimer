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
    "U1a7yzXVWYgN1peGWMRiSct6QYh1sYaJvWewZ6KkRiWxWHXumjHGuAagpL5XFo4bZfempTJJiCTGxbUuDtbY6gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jsCjehjcnKeR5gJDvujuQcGV1CCUjzYwLN3QS43Qf7F6SBk2SkSRBSdjU27xMWTDyg1h5YTga1Zs95Q8vKWLjD",
  "key1": "2eHY2QPXuntTuxRgAvQyDPuir7wx6A4XGXtRki2BkhrEZrswBTUaqzbsSE6Hi7jrrfSfXEcdmymCE9dA3KHrMZTd",
  "key2": "5KGFCtCoa6uTB5pkH77sypsvFEMTV4VUE3eh5NWNXck46uGETLsXM9X9aJ6xJkEEh6bjgtWqVY2XkDXWmC4aktFe",
  "key3": "4W2FWYSNphU5244zFjCoZWXVGYBnbuMEohe6UGyWpZwLxkwm5gcKXuVCaXcizPF6jNw8Hj4CTouqCa9xvXsWJpwV",
  "key4": "4hhSFFb9bKHsXJzxhjXsMeDbdsnjeMFoVRacZcePytGRGi4kdSz9PXVv5HRD6oQ1SyrdkSHtMcQv9jMA5LWHZtr3",
  "key5": "5jg64ThK7mj6MuAXPDvc7wJZx2kWFRZby2zi5qm92Jh9dmzwfr6tRftRCxyKZXGiEoWT8roeSL4VxzVGy6zPYVCQ",
  "key6": "45PuLCJdnegZsyE8oA29bQPQxxCxHuijdcMTN9XJe3tG94W5mB6DJ2ipDqVoVioJcL1qV6vU67tjZByjmuSTqEL",
  "key7": "2pRRpuDUax9iQNFJGBD1kB68qPmJmJTT6Ghg2mwKXDRhJXbrfTf6UrmZSXmPzVTMipNUwxY7kBBhjmqWj7qribvJ",
  "key8": "4SyzFCRdkjUut1TTr7NUsp6aXb1zCjrgAmpWgcvf55tEiaDN2szBF3uL6BGPHMmPbfSoyaoGDcCmGJk2pvgS6Gwi",
  "key9": "4gSveEn8e8KSNAnUv3kxiKrf9fZYuE8UQGBNtPtN4yzgbYqUsvuS1kyVFB6E9LYuQXaGiDwHXiM29wXgwvHoJruH",
  "key10": "YffdKiCUWWcjHrgmyAtq3nhd63ycGmA16L4kcLdpvAjsPxRDUg8zvwgqcTrvR7n2rtGm38cT2gCZ5ZNjQ8eh8Lo",
  "key11": "3ngfjmx9ATXbshcrAnj3FuuR7JmVMF1NeWbFkFP1Q4HvY1rhdJPTL2QXNpCDxXsDP7mA2LFUKYhggibMRzKX8M6w",
  "key12": "5vaC6qXGgPhHvy2V2McpfHrp5o2VZorELAoMpgp9eX3RA8kRtA7hZwxJUMpYm28AN4hekyyKCbka9VtBpgkBYNog",
  "key13": "iA6ijJjbF6a2rkx6kd6VYEfxj3ekYxLN1RnzgqTYwXzUg3KYUtyqbbQcAtaWffD4nWraVo3wrLyCA9DwYG749Mm",
  "key14": "4bxDQQ1Rcei6Nvte5KibJ17DwqqM3kPJebuoSj4EALRvXzNi8aeB1VK3XgE7LUoKFsgihvfdck4CuiEzLvXcu91q",
  "key15": "5FHoNMXExdKeknXxUNabU65bfU4wcbeVPJsZAjZD5tysm1Y7uvtp351EnRJdjSeKvy4n7PgfwWhGHunrFnL3kpYT",
  "key16": "dP2rGgDZhqjaRc6jCvAzsdcZesGUcftLTQf9HaeX9uxNjWQQETjRyVvnZJS4NdoC8QN6Hh3AA1qz17zQS7byuvD",
  "key17": "DibE9wnutCSXxCy82sQZuhyngaRu78NQ7PLEGHsVc4YkfATQLJUqYKRsmKGLSvtc66Ug26u1zmx9c8TYDPctgaW",
  "key18": "3GBo9XuoT1nHhKW3JSdRRdgZSj27h6o4EyHrdiUgof9TxDB6ypanV833Snx9PRAZircfYupfoazYtuRUdczKFPKw",
  "key19": "48CdBDt7kJSMG59UWa2QFxf3zcpLfux3GbsVrz1nJ5W9da6EjLhzGECPgZsGyuue6nH67PUTxmnRJGac83RRRP9y",
  "key20": "A99rwFUzXGCwPFoRPtVGmWqes1Dj7fTD3dDWPQJBvJdsXweLzFNyB563ppz9kJV2KKw4RCDR2u8nbhnfTyBr2cT",
  "key21": "5h16yDeDdefik6Gjacpba5znbcEmzxFM2W7LDbbPJQfTBXCqQHQRMxAFCWWYcxJ2DKu7GHM69teUTjEq6WpJWoP1",
  "key22": "4F2ZyWjcU6GFKKHGNHX3BqZ1rZrZyBqHQxmh4pNiqhwm5e6Eo4bQ6cnLLyBqi6dAf1RcUJcpNZ4T7pUdQzZpfafs",
  "key23": "3eREt5FZKsrWmFuKFAQ4apKiryngH5NoDsr9TL2B7vcTNqTRcFa6pJj3vdLBnCBCT3xvJQMTunzNuBgPPMBL7Nzv",
  "key24": "3YBPoK75kU8EH5zcyttU7q1ZxzzQB3EjdxJBiseaV14hyPem6bBEn9axPF4BhPMRqRNg6YEGdubcue8YcTQitrTc",
  "key25": "4fCCeEUR1SiEc7xPFkc8BjvsPMtdZ2eTBmazUuk2fjrp6oh1sZt7dLL4uuTjMf8nKxd3Exm1D2TVUZbXEQA9tv2F",
  "key26": "4p3YjhgR7VVx5Bi36AZXnb56w1pRZiW5ov4yh8QxVfLBbUVYGt9z9w5ptNQZx5CAZzFMT3yxHCmBK4KYEEN6ARch",
  "key27": "5KKd13DenpbLuGjrMRkhGdn1zNLmgtfBbCcrdvtRzHgWjbTP2YEBrWiB9eFhF3DijUqqh4vpppPpxYiemcDJ43bs",
  "key28": "5YNrJfThcKUUu5vdPjGiqU9Vurf6x9K28ttzhUN2thCmuAhtmpjm3YuAt2Y6ai9yQmSdm5HtktaYRG5yF377MWsj",
  "key29": "2xYQH3bPfnZmAL2jAKfX5fKcQZBZwZ66iUAdgbvqWXLLQuqzLNXEcYsXXMug7QNPpBvVt8jHWurJmfMDrW6VHa1w",
  "key30": "2bZXoK8t5aqmKATZiium3MfJGGsKUnXAPxMcM1XZQiETMZaXLkj2jJ54crDPVmK5e9mfbGrj3KQKUbiAjw5h47YJ",
  "key31": "2jP4jy1hEF34SFxZgv4qEdUSG8NhCwZ6ED2FSRFkKMRhGwi7pYVMp9A7dGW5uBTFpXmECYZzYtjjrUVjfGZ9K9aE",
  "key32": "3GtxDFpUBiRFukyzUo5iEBHHZjjwNK2aHWo3mDouGDELqzunBvA6zFEa7vS6HqSiVrWGNY5kquzLTTtj8CfACBUt",
  "key33": "4RFqtAkuQKciLimozm4XeeZE3VS3twdrv938FL9ev9Mtc5RtxCHGXD1CJSWrEyBsoKuHQa8DJbaHizVPdeLaQi3C",
  "key34": "242xJP5NaAwBT9LwZtypFm44YeLaJAmwCsjrmxYhrNEf8kvAQb9gJWp2nzSZ8syZgaLaR2nXpbVaPaMtqiowgjga",
  "key35": "5kY5BE1iRJAtjutaEHnQG7JJapTxqM961GoSEjsXpP6rXJfrCwmuWikD2SnV1yTPsBqNHFTbTEMjSyMJMuBkGHhP",
  "key36": "2DSg9Rf7dW7G1MXC3fuis1thNZi5ao9nuTUvNpxPFK2eB96i1A75fmj9qvhCSH4GnraFpxrKhBUKi2DfsU9kuQC",
  "key37": "2MyzV6nAyxgutubYGfC8vav4u8tMTnrh6EPPczCHB17zVJZMF3WjKvhqFYdrGoNR8juScTRWxeZyfocFjyZV3pgD",
  "key38": "dmJhWMxbwf5K6m99XNR4bghxHppvLXEoqcBSWz5B5dZfUU92efUSC8EHZ2pgfunrbTCkrRoSBgYJ3s3vVN9PoCh",
  "key39": "Zs85LfKpbrXRo1qgbP2prPpz34CtJ8tCbprev8zFGP1ZunfZTiRiKSynGTt7NKo9hwREVjahodZwmHcnu4goKDR",
  "key40": "2PXYryZXMRhAyBgTKEHU5com4PY3KswBv2Y7rdHkMS6suTGVNW46DG4gP516JBVDMrEpiatcnfWA3kkFG2m5r9pq",
  "key41": "5FmJpJt1wAaunJdLh8V88qpQBY3QK6Wtb2JS2U5MsAGWD2k6Bnh3WRZhQCyLasx1E4pswYcqqAJjXgJon14gYrAB",
  "key42": "39AYH4te2XGavEyw65M5J4PPy4riPvCX6BFgvrnALrZ7kSA6GxdFcSL8pefyNA36DToKdJ3RawQVinoVUzAuhMSo",
  "key43": "vQJVBj7J8CuUgYeu1kQgkEFcPw6JFjipq1eVtj5VRLSR9fZXd4azXww9XwWaXxVNyXHXwjS2kW2AjD1GaBRjmbf",
  "key44": "v4xb7Pv1bkbT7wSjUvixzt7Z9sFvdhANncwWbj3ELLnTpPaC7zPQ1vX5dcRM5eCr5RWpkNtX1Zyn7f4rtaWJ4hq",
  "key45": "3EWgMMwfHCqe8odQ4crsrE6deiJskPYohoBJa1wyUyrq7aDk9sp3iqhpdmoavDoRv5tgm1X3HYckZz2sLMM5ct34",
  "key46": "beQbWrgdrJdv7QN8wq2ZmYkDvyCdwURdT1BgsJjANeSfEZZyPRB1b8p5d85mpciy8uo2AFJYZBkiJwUKcVLekuk",
  "key47": "3eqGBhX2P3AMksJuDqoEDeWMMEWddJL3zJPaBT1pmRUrgvAhvMGcbRSyGjFEbRqJ1waxy3YMBoQt9JHLoGE4rfEx",
  "key48": "EiwzDcZGBgBNqTD8Neeq7VReYBr5CDQiMANPGJweUXFFGwQKrBKQZ8DGeKs2GrDXQfULa94gMP1eKFLoBZsX2GA",
  "key49": "66WgSY9oWN3jCTibEKkLsXyJvqnrG6XAPRHpvohyEJwausasoa4XhXiyY8b1apHqPvSumPrDsc5FbUfLhsS5ic6K"
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
