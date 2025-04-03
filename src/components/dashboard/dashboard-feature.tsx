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
    "4dn2xPqorKZCxnNdo9hbSjmKoq94MyJpt3RJuMS4H5GoJBkNWUvoi2xi3tTgZcCSJ6HaHqEKpeVh5HxgknawJxDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wx9mTYULWpEuofpsKECxKYoJrLwW3TKcXjeT55Tn4zuLoxHBsAh8TdZf6AHSCQUHMhpKKUZacp9RtpNHXwNFUpq",
  "key1": "4LcAhfcHjhuMWUscshUkeCVP7VnJh9VKCFf93KhTQjznjdKjg2jAyqnL7Z84TEf8TpNxjWwFDZgiC68sa4Hdmef4",
  "key2": "41vUxZhvvKZjEpep5AHLU6rfV77DMLwAtcZUTceefkW445NevjZDwYUumYvCb37qU6MzkvRButY4h28BqBrriCpi",
  "key3": "5fJZ3JWPQTgvsywVWxD2JUfV6ZPfWA3UphL7T8hnLTBV3Y4xoa6hfjEfFCbX73UhiZJWXLrGfMULHYLmT6H6ferf",
  "key4": "61xY42QJPzbMkzXRtbPVW1Qkrtr71wFaX7RrNq1NdEqTTciY6YjB3kfjYVByFQW89xi8GTNTwV95sHusfn5RcW7q",
  "key5": "GN7TDPMpV7WzKo8t59fcBuzgmbRzoeWHSrdkzAXHiMDJG7g2teshzBMjMegBSMuTk2CpijmJuNUJsxSuckvdTCJ",
  "key6": "23ufxPnN27uzJNUSFtJ3Smc5ABhA2Pc8thgnMQpxRCdGpgNaBqiFReuYr5Q3Wx55zN3GWz12LhK5G6oW1bMuJA8o",
  "key7": "2BBKwotBhKLPk6KQg57sExh4tucV2gnyzwTSQb75bf1H8YWN8PMWSTfa43zZK98TM5c17fAt7RRkmWZRoTV8aaBf",
  "key8": "5DhCuXipL5oatoWLUpGhB4n9Kp6xDSma62ny43wCEkQKKkcNpGBTqF8Zwrzed1tdFTAUee294gvyKBEKAUue45Zr",
  "key9": "2NnkBtWmTMNrkTkJrzBLnLPgvUyvW2ooWVCG1soj4w1cZxdDhYD57bnL9q3RxY7QaMQatUgEho2WBNEN8fsCdLSS",
  "key10": "3Z9sxmRefLnrp61LNJEFGtU2FQFDK6Pt8mLPAjvaBbMTpYfm9Mo2eoGKcaZPpzR222H4a3sMW8NtPGPgQouXEfK6",
  "key11": "5EbWFNFgGo3xPEorUqdJttzdWusEMg9Aixtx6RFRWd338tyDxenUapn2MNa6a1LM5nKWr3LjwfG6E1bJzYq4U8XK",
  "key12": "2a8rCGvNfeEGgW1fFHCLE2Xk2maeTcbbCRw21BE9QEqFq1oqoL8MXe7xwYs2uFCsouj81RkofFAeTjEd6TRDK3iL",
  "key13": "36Aqcrkk7j3Mx4EgTx8qh7rwRZ6JmAKyATcAhFvvA6GZbAiXaQG5BShRz2Uz1YxXuqoK7RTYg5aenY2DNAGbLaFK",
  "key14": "2tJSzRXKrG1a9r1iurA5WWziBYDftmkTNihQkQkxTxfn65ZxTH6wur24nWLt7uBxEpvDUaQsmw2XCfhRxAsAVtsC",
  "key15": "3gmDokrWKGYeczAb2jDTmuNTRM1FRRWwphksA8wNJxteoiavg36WMx1mQp5xgNHARmWXGrs9V6kNFA636LHRadME",
  "key16": "2tnSWFxiPY571yhNgUV1wDVrjs5mhdGEwopF5ZhxLXLH6xnNbVnxPckMMsuDkuxapkYMj9KLBGbqbgUeYeh6ueMo",
  "key17": "E1tUHSVvh36WV3yaPRvNMsTNJpJxPkVm66qsWV9y6qi8tmNjVDNm5Lbw9ahzcbkHpbAsnAY2TAuKvKLc3LXYUb9",
  "key18": "4sGWezknoWHYpoA7XNrSWnyjWmfmB32SurMKKURWDpNbfymnmzrcmbQ1SqChUrs6rgxDgeLiPZzFwVnqwRCLKE8p",
  "key19": "3x7LEbKEjiLiueiNuRFvHEpJdenFyEPgQKBMti5U7a9VVQKhjJwyPruasrBNxib8VS8h854fHoB8cYTK52uMG5gk",
  "key20": "x3Pvjd99NusTitgWHBuALqySktLVee4Com45Fca6bC4sU3XhRqojJ8jv2JYYvXDcffBMEgoTUPNHw1EJVQwWqgn",
  "key21": "2Dsrb4JRvRpPCLsAAKkaUN9gfPnZjhCkBXfGzB2N5sAHJWeGC5kah6E9neR4Aot5NbRRkNStzuX412QA54qXqvWx",
  "key22": "Q3EGCy5oJE6BeHSocJ9cHYh3xGTL2EtsRcAeXC7sMcx43tFbB69kpxLcFHPx7uwFmXbzvzXu5CquB9jMF4tmWj2",
  "key23": "3nydvA9XfLvpixs4yzSxDbxd58KgyJz15CbmTdf7Bzp9e6Z8SeM9mqgVggWufpxPfn76GY3xMY2NdX9nfL6SUbRS",
  "key24": "2MHHbfQ9mU4gST6v6jzUSwpQkpVcaLYPkLqb4YzRf8mmc6SC59XA11cEzcRTaDipLyZodwnSXZJ15Mh6P7CBC7XV",
  "key25": "zZCRack6KnCmMvWBC8SzxZyJrfymMPXP4LMHs9EmG9oPWkeasXJ11qSsusUxLhvNFmyQ4zVHADVMQ97ubRCY9dy",
  "key26": "3UoUNgteYgnHpHgQC43dPfhVqEkgfW3tbq5w6EEZeLGHZqtvk5NbJxnS56nWdvkE6bGG3hcyZvRhKXj8ijTqe1aJ",
  "key27": "fGpBpDLiomX6GE6g5VTiC5axzwSu8Uq27a6H4zDYeBgvz8dALPJctkW9E9QsjE7iiQ9zD2jUvResHmMZeGjVt1h",
  "key28": "2gqayHnS6WsXb47aid8U3q6r5RaPAy5FQ223EdfnDU6BgkURzKF6H85a9KUGrqfRbT9zRiXJPM68aFRGwn5FFdA1",
  "key29": "23m62HQoKowY5Ww8oWjMZVjv9hjDEZSvgbw2B6gAh8FfMcEhM7SHnZVVyWsSxPR5UyKQAn4ZLQvMTBrSuPWZjz6g",
  "key30": "bHRj1v2LiP3H6BEJmU5QZqnHiSaESqCs6m1rUTATwX9HDWtUKUkQVp4cjVwRsvEWrDzy6RboPN9DDWLkUXq9nuA",
  "key31": "DjDAYPZwD3z5viQSQat6ahzpVsKTGgJNomXwJc6gPAsz6JPezzvZKc3xWqiBf6SLT3ATesETux3cwPEYw4UvBWX",
  "key32": "gxrso8XbghtaRJ6hD34Ry56oPtedyqqQAhRpb4NVpPVRjTfBYkxBqacME51tf6DjRDqKtYmU2xNF6efjTwS1kr3",
  "key33": "5J5a1jACNmHvhwct4PTBg1pVye3WGDvnVHPCtBoDDFN3RfuM277aAxnRpwiyRYaeppj5rNaRJhtRhaU5t5qzoSMF",
  "key34": "YBpSmXZ2mQqmQy8VkszARr9b23zC22txEaT68BdffriJUHufMKttsy3pzgUmbmpUu5geNLJ7PEvvfN5ZeYsuhQ2",
  "key35": "jmx8Dn6xezfgBckFPy8A3GuLzATA6MvsVCairFezEb8nqhDgKjiyUcWuCuSn4RoqZmu39dsBx5hX3mc7hGvbJ9H",
  "key36": "3424qQgXz5AQkNfwxS11tUBAvqCw2PFXeMHjLpnHBcCFScpZ2H6xHdEPM7k7tAGbjiJxHNJAg9128CbtEQxyxGWL",
  "key37": "4GF9SAZVY9vGDnfgNHF9mggdAKCdjJzHwoNCcUepZLKPbRb9MpKYom1S2tZjvn1VYkAMe67XGru7cRu12VGQrvow",
  "key38": "5u7fEcditvkYjVHRCxxJ4qq8DM7gviaAi1irKwMVwtYNuaQanSXK2iWbPV6WPK4mnnG8dSwZCXpbWbHcsdAxrg1N",
  "key39": "3J2QB9J7ofMwP54P9YrfdHxJmmPT6Usk2JBipWVgTQxbMAMKzqwGQELedVCCU6acUVLJaiDPvyC6MZCdxqP7yCDR",
  "key40": "3LbUDmX65dexNQhFnsYKeoR3A2uJLR3dVsW4NXHcLvj3XNaarowa2spuaHbNDA3vMkAXkKhFjRkNTaZPo2YK5obh",
  "key41": "2R823pPpYXuuibUhLpf7fbChuEHkzodurhKsGYHeWnRoDQ3uXVyqwnK36NBZFKEfk19irHPJee1ryBQQmQqawwgr",
  "key42": "24yttz5ZfXqzC928bWrgEm4Y8NMtyoBDriD5qWgZdicwS7jsDgUWrazCGndweip6rjUyoMTszV6WKV8mK3zZK7Cb",
  "key43": "3bauZMKWwWVdQbqtyWgwnimT9aaTx5NC7RxEoK3MMFwDWu9qW2aEtbqgX83Len3Px9XDFP9Ya2xdNrjaBju228Ga",
  "key44": "4Zut2bjaP6FvVFb3PLM8hZzcp9BS6ZhqDKgqiHzmNjZ7kCXwk3zsa3UDMh6d3eS35gZik66H8hVsjvPN841x8JCK",
  "key45": "3jGwQoYPbpZvnRUcKGVFks6kuSZBvXpHK2ZApHsy7jv6HnbtW4otNEmcznhixikQZpCSHDZxmJJhJnqTzT4sEBUC",
  "key46": "5g45BuyWi5ifBbXVuYAs9PFcfJxnCCvtXrNBdK1tQUJRat7B1yYuqjSjhnnZDXKCxxJgyFKvun1XumFkTCXtHqZr"
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
