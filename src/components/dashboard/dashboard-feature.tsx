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
    "217BLCXTNBaaXjvsHCmq8UEuDtar76nFft9BjZBmBZpk1zTjUEQHNDnEzjf9bJdvbUCyVWnAaWMENcnnrLErvKgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiETh7DwMauVy72kQso3HgzDktSrYWFZiirsimskKzxxW47ByRbVfnmHhmHyos4e7hi6SGmjiN9J2spKTt3yQnW",
  "key1": "5U39YtxL8AGFYWMfMSEr7g4EnWe6tCHJHv6G5J1tnPXdsYKwJoBuajjR3NSFK46Ms2SNCqdE12aH272T2NMa26fn",
  "key2": "3Ed3HvTHjiXXXsndctwsGxQwAwij9DF6atLhgfKoytAh8pEDYXBPmVk2sxWXc9CPvuopf5q7k8ymAsk5r3uMsPPE",
  "key3": "3k9GQfbfSm27wKXYnmGXdfn4uYHsSCqa6BDEGtsu8yH9tdaQzUFwzKqAynfT8XTjtrokgcy4N6QsxGRNekxN2HDV",
  "key4": "58mhdPAUoYLT7VXqUnWJx2gFMjnB7zy4xowWZWuwz5w2pkmrK5A2mXhqhoZckuVU7sFWSxZN4qM8jC41DDSrCEL6",
  "key5": "2cHGA9q7YRw7i91psBjAAABg4NdHK8REfoieVUkpMA37R3HBqD1B7SWqGZUuvhbEN88mwUgCzFTsLyrnvB9Pu7bw",
  "key6": "1w8aS1Y61AzfoCogxnZsDGVMHNxziVEH58KEBvMxZC9BeBJ8xeSRRZJQFL5VYxSgBTPdPjy29wddLMu68UYBTJn",
  "key7": "64G61tpbSvd4dgpBigZ7a1Yc9igBawooqHqhQyd8RxeeonTYdYtwVS1KpEVyDkmLZf8qzpXL88DWX4geeRtF8v51",
  "key8": "5JmtNa5SUtBNj23xNUpH9sG2SrR4Jss3nfGfvKPRxveCwwxz4AVRumEarQXa34SncCrTcqpsPBG69rmTDiNu5hqK",
  "key9": "3QfWh3Pn1dR2ogUQ5Dh6DeaRguXxuCotwZuAL18rEb26F73NmmtM4UVxZxH6wUTB4mUtZ3LTXJYvMt1FPQh5BZjQ",
  "key10": "5wDWuhxLHFTYev4hpCRAvwLf7jSanfi3VMoriGbpqHbhVfkD3Kq1jMXxLjHqRmkvpHVQ4bHjgnp5iYmdLrieSwN5",
  "key11": "5BhZZtu2kqgqnof4Ah4Kuvev79PGgH11ZVkbu2gPGAYb9y3xhJTQcJyV6fQhPPMVcTmF9Z6F5JcYL67Ue3JC8MW1",
  "key12": "42HZas6urMJAWUV5i4ubbQxU484VkmpKsd2tNUQVS8MsQGTMmgatuf8yKKvQnyMsWw9Ta2EmNeHC7EFcBBfdYSw9",
  "key13": "3tnpFQfffyhfYkPdp82G9wNzy2T6pGQ81UkR3nQLCjgX7sHX7q5BpqQ8ipvexhB2cZ3VB5WNkWw8e5hMnQfrgH6W",
  "key14": "3EwRYxp7LCumncMKaLkXCroMMb9DDckc1cHAo7Hk8vHohyfgPtgx6DPqWnQM8rzzxrfrooQ5pYgYJRdsMoEbLthJ",
  "key15": "38ePfYMNxTDxHheSFzL1vjTBNnXg8hYtksJpMMoBqv6EGLPFSgtUWt7YSGztL9TnePLQWqTdZ5XEHARoktuXHoA5",
  "key16": "3xwcf7kA9Lt7HpdrbkQcGBC8qDmKfRDmSUcGLaBznyHtDJqazN3tLT2BY16GqLhYZQHXU3s2oxa7fMj3ngbCTvEp",
  "key17": "347RDx4ADt6ib3LyzLeijGNRQ5DawjzCTdK45RLLKqQGc31wkDoQydBhZQQNjZeaZXNjQtDHAFiQvJHB2j1Min4z",
  "key18": "AcuaWmPTRfd79UbGMbEvZzGWTUR4QS2aTGThNTMSfQUcG4hpsoQrLCUKDaYfSvM9ueAGWCEerTatVwHZoBx2ZjE",
  "key19": "3LSBLS7nPtPGz1GAAmQ4MwyrneddR5FMDssXNPAuM7DaicBgNQroQt8sy86fZBBo4tofroEyVQxdDfnSRDFHPVpd",
  "key20": "2PGBDddoX7nf4VB6EA3wuoymHQEmsWNn1onAa5R8tcpSC4JVdvmYdzKg5puPjHanFgj2oVf4jt7fH2Wn2ucST1Y8",
  "key21": "3MptpsqHEA9Ae6CmShkeJecBW7dAyt2ZK9NgSLr6mCxyBC5zX8j5wr7gfNHwUr6yxW5kG8qGigzqSPeHmpdGwxe6",
  "key22": "3JCHbDRRz6igaE21pzHkUm789swpHym53FApVmm4qJzep6QXXYasa2EYwphi9WjwY76qfoknwUR7v3Rh1Msbr7HB",
  "key23": "3W8PC2YR4DoEPgMqJZhcMB4KVf8CfaC132xi1G11Q6Xv1vzaNHaNWdC3heQ4a81tASbdovGY1qHtWvk2goNcZ6SU",
  "key24": "2ajU2SgW8BxCABWHCeaJ7KzHLobUiFJYf1F888hdEGZxHnXHHfvpCeVU8YnokgqaFSyUXqwKfzJWmWGkZCJwMdTJ",
  "key25": "rfiqk9q6UF6Htg8d2FRHWGwMxN7JsuAnZ1Xe1h5xG5cVKpxq2ufb4FjWjRVidonQVtvQV7yzW78Rrf6hPsCj8WA",
  "key26": "hEHXXybVBuVGay5KcYXoxZ6YZknrw5TgurVqiYnqTwLJoANxnryNs18ZT9CgmpJHLMKzSud35X4JQDvYUSwK8kf",
  "key27": "JVwRiPHHAxDMYzwESxxCCNjh9ZdaDAh7srUGnEh6xyUZ5dYYaPbA7MEeiY6Ns6v2gmwt7F2vEGtKg5mLM3PMzoK",
  "key28": "4dbge9oaW6AH4BWnzB46zHVbDwvRboptcifLWNedB2ByhSx9xiQiFgCyUEStLEARAhbDyEjwrvq8iGMLrfNqFjX8",
  "key29": "2VvJa2Nmv61WKuQXW6c5xd3FkFYU6oE92NgJzc1knaRfPfNT66ayYuGFXGCNcoehqjdrw2Hc9TDKcsaTrebjt5yB",
  "key30": "4zFEZTmGcg1SjAD5s39VnTdMa8F749K3CvjJ9HbF9kUzKXjRBX8Lv2YdbydcEqmfBbfMRFiRtGPmcEskpqhu7CZf",
  "key31": "27xukDo5UixmdfakhEnu8hdfxi8yX6JpHoPxEJaHg6xdrBt8jU3MCma2SE1RUC6WvsSWzGBXeBmPE21enHBLNVZ3",
  "key32": "5NJ525Fb5ibxKM9yg9rcYpbfGP9t6dgP7ZErDMdnQfb4KhZ7WKidojN3KyRRvi2pq3zVCYZviK13HiFxUUqtXEjE",
  "key33": "5TPYuVo56YysrTSkoDhSxqPGVDhxDh4EdgNe3aXB8E4J2nwSYcD6Ryt8FHkoNnCWojmNA2EmhyFjS6YXyaD1Vy2",
  "key34": "3QgeyE9NdwnqU5NLVKs9HQpWAtZ1oNJRgbMgwLaS45i4tkQrkySWNSa2RJPmG8rHvGB7w4Az4qccjxs9t2Wo4yST",
  "key35": "5NVunBTCMHdw7obw9dM4wQx3umEwV7GyVuN6WdQRTK7rMdBPCd4n7D7a1zjajNmGBpQzyLHG8372qmaJce6zGK93",
  "key36": "5123xP6TMZY4xQkrYBnGbD8wPJKAiWrCMPr1LSE5pyGWbGodcyERNXMF4CbeV2Sp4gXhKX77Dd8Jjs2njqNUHdvt",
  "key37": "46qQZQb52TNtF8aRyCkCjtb2ubx7ngUNWzzh9sLoZoeuSgSyeARyJGcfgZQ5azPTusaNjp48w3GhmzUnAN8KUP31",
  "key38": "3dKSaBCYm9FCvLKrMGMMF8a39xTzDKmJ8m8cWEiRzg78nECCkMetCk9f4pL5F3yjpJPqxe6C6QgcZTaKiv7W1dP5",
  "key39": "PhBEMRLkQyro1eBmSE6YwVgMVLr2k2TXum7MahpntfrFfbP6ZdGVNgGeVyymxe5ayMtsmdKggAtrx84e3uUMNbq",
  "key40": "2FY9iMNuXzfmv91w5VQiXmqaZS1pFwkdcoaZrmceDnEw82FSxxgwqFTsuePJgD9q6qgneAMe9u7RPxMEpkSdYdMk",
  "key41": "wwd2VZa3fYiPZtvqDbCdT5gBvUJMxbH9yrDX1jSQffQ82Zjfjo6Nvg7TheuhhMURGaQ25YMFHK81QxfqJsNbPRM"
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
