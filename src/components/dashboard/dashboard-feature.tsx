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
    "5ehe6HxbhDTAj7cAZRvTq8Aj9tsDuXBHDBWormnLuPC44Ed1LGLGgeJk72FohCA238Vs6grQDNQjAsDhnzqX7aR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aDXv5LGVVcp88o7Xy5bQSBQckaEVABvSZN3wdiZzabaHCmp74AnGAeqyuDZ59q7DMkBKaLHfrtm5G5fp8wsycNS",
  "key1": "sxZ5vGAAiCQ4gF8jJujs2C2RL9RXQ9s7GMLSUyrY6vMpH9z5xWdU6vQQQozfiM6RcPJuX7VL9ftJmEfy6u1z5Ks",
  "key2": "43EmC3ueHvQCe4wCWBXJez7Wct6NMcKUYu2UESPnkn3s9DdvQJ7mHaCmyJ8kH8RsDbCxG1fPJ3PdQ9rWYF8ALSXG",
  "key3": "2tVpED19FHARKmwEfP1b1swPzxcseJnuis4yUrVLHgDYAqNsr3eLoaWR4aC32bQPDV68u79Am1XzCS5FwhssXwpK",
  "key4": "zUy9T6yEh2vSH7fU8soxdwMs6h1QTP9FvozEFGHDJRZJE2WGrcos6MWLFuwekunZfdwmbZX1Am3KDhrj4vnoXU3",
  "key5": "4NQCgZ69wrnHhE9oNmuWsNiExUGNGHWsVkoYBARsmV5wiieYVooT1No5GKtYWq552RsDAhsAh4tSujVemzR2pxvw",
  "key6": "23nsHcE53FLKuosxgm5NJBKmAgm1FjmfnAWgYEZDVESuatxMQrW5w4jySNvaJgJ7iLcWV4Xqe7Y8jeA58f24R1wC",
  "key7": "4RHTvKf9D9uzu1PFAKffxTAaNbVUaXx7tybxx5pgwPS7rfMMLq89XpgDUvrz1ykv1ZFP8zFj1GcbUukhdxubbDkZ",
  "key8": "37wZWU9NWZkJ6wbav7EUKET8NpZ4grkFxGSCFancUpSqVTypS8TKUd1shgnTK1Po2wHbSj3wy9CqRUCu9PG34x1P",
  "key9": "66Q1yyUDL4qWRF7DoU13kvFi56pYfJDjkLsAuTtSRNekWyU1Bm5pq9Cq4bDJ9brm9pEk4tRmWBBJ7KWFvYuE93PG",
  "key10": "LN9SiYQRNaEfmin6L8qhfKxPMuM7mxcK8sVGivSH3PE2WCRz7ENK5jKFqYifJQWGwUnQhsh82EXEDuNZkitsPdb",
  "key11": "5wTsTWVdw6i5uMPpZa9RWhAnPFEkkFLCNqn3KJKS3KNPgDRMSHy8RQcN7y3tAQfgehR3WL6PrqQXL6BiNfLQjDX3",
  "key12": "L3j296NCdmMEvfcuBtDyzsHidXJC311EF7M9LtLUGjUticHDhShF2Coa79kBnTDMi2CDYCCSLWCWYCrbjEm71Bk",
  "key13": "5bW89xoGMT3ANdpXGv5Zt7cMCjcJTHrUN7Jzm94eBhuXFx2XWih5awkd6KWL6K6VYrg724fANqb1529BHLGZVr71",
  "key14": "48GD1A5b6PkzaFoSA5kKxogkZzCZL4GGcRmjSQiG27TzQKff4EnN83r43LZ9sQ1USc3LDrbFXLF9QQoF6QATuCeK",
  "key15": "SXcRn4AWniacJTRDEHdGKVT3M4Yu2qL1wQAuTQUX9B9CqCTmciFKdHeC3AYoCmpAiL4LteyrmrdipMFJWTJ38r5",
  "key16": "3MZuzeWCeEKKDQobdBbjuHSbFZxsTDWx7rb4igcjsVL615hmviVyAxtbPg4NmQcVLwiFdP158Wmz4BVfSyTDeSXA",
  "key17": "57BDMaTES7NhripMitLr4kxDuxszyuZt7vbbcLyBXHS8F9W2JC5b6AQ7zQvQvoGoQSAHDT9zHZkBHPPdFFx3eubG",
  "key18": "3k1m3qCJvuYeKSjXVhfGg87MRJCvPBonf5BZqF7NoMX93HLCkTUVmWaAU3p1CDkgNa1cFvtPLhCjLK48RZtjQyTb",
  "key19": "4AnQPWHFxYVNP1fvRL4n8zBW8UuiYLdnpZ3EXxQss1mZKQvZSMpQcSE8P1UoBkRkyLuixEYmwy8akzweQu2VyV8C",
  "key20": "2HbMCwqKsbGfBvzxDWoeuyfTqdKQyAreRHfz3YAutBNNUHaUVq9H4J2GEHey6JKEM1ab5RpAiduBKG5MQnGu32tG",
  "key21": "4Hge9KbsCqnYgWMFpEfYRHJe1sBkhNv4ETDoNA1zBDyKXrUsFQyVMeQ3zzzxGZT9NHUiGDxHT1XEnAivjRDHT1a1",
  "key22": "4Tsybcs4tyRBbb4GyqDhcqAehjVgKHyyfE5evqqch6MNz2evCeCLK5nJVPbYk8gFYCCWjHWw4pPR5TFC5916qpUv",
  "key23": "5LK5egoCJWh2VQK2CZA63ArbAsXjpF4hJbX92bn2F4NJDnQQa2JbW8ZNXwtr9sjUkZ6cCfuGq4aAroadZ6ppdpJ4",
  "key24": "3L1LnQERq1r16y6ga7vxEVxmdKkfFmNoyrkE25zjNw31QJgE36L8esiPhkFArP9yCQNEFfiXiQderdqasCRTorvX",
  "key25": "3N944oaRsnKPNtsd23mUczVucvVgrwdEbLmLitx3WoXKMDTJwBVCGnNk31eUCRGKiCRfwvV7Ghyy8nPKzht87VdA",
  "key26": "3QbG8NeLhwYc7XbDDVtHZwvSMoSBckG9zP9AyBx9xfz5494g1kdWEmfoNNY99aBRmdq2dTwvZ298VXzDGaQ78EFj",
  "key27": "2ZPkVknGq3ib2LEb2pxUqat1pdPAhcqTX8AmupewJor8szWRh5tKXhtUYW8qN2JJEjBpQHLsQEF9EHLjgzq8B86H",
  "key28": "44UcvsJixQBxvJBjufqGKXf34cfGFCaDR2K2ke7JghJbFD643CtS36mbe8Vh7QrDVi7VRD14rcdzwuvP7f1vtQ7n",
  "key29": "ZwRnic9Erc4oaeE8giizvnBvFuT5EkySghxCjMA2Pge9Rdc5UezfxTVPhCaUFpdkKPrpgxNTrJ8FVgkHXkgebet",
  "key30": "38d25FoHiLb5CQMfD1K4LABfGUaxNTdmUw53rAZ3FcGCCoHfbLZ8ymYd7ZLZApXYwXAAeMFa5h4FoVj38GJVvfYQ",
  "key31": "59Mio9t7GEApB2tVgfZzcoZNmrjkHFGB6aP7qPUJ2wworSXip1bnv6bVyX1RsYxk8cNQfm92T7BiEhyU2Bd12wgD",
  "key32": "4tTgDDMyt9YrKENRhF36FhRUgsnu13zc5iCo9W1aUyVJKeVWcoMkd7agmg4VBbmqqUU2MUboZTi8qy9nfC6c1HGe",
  "key33": "275KHmvckzBM8bmY8XecV4ABKKi5Jw8NM6dAZzzU1STRrV9Tpqz2U9Ziz5X8mgYWXcPoDjcWV56jWAbG5HHhEfPq",
  "key34": "2yKuiu9AEhbgtMDdLSLNcSVXu1hZLM74SXgYrEX2TfnpV4Vt1rpuv8FUL5WTUXPaHic7ytLT7MsGBPA1hoTURVLC",
  "key35": "fe6gm998BwXbSJnC4N71U9CnUSgG1gCLYrA7f5NKwHCjAuYgZHvsYb9usXWR1sfZaeuTEVhzhUHPzPRLe2ePcUD",
  "key36": "5ut9nWGL1FPYdKvr2cE5nWkBXp6EJmhyHnmPHw1SNSuuf4uG523DzVZuPnTsYExt9k8GojzSGB76KSg4v6GY43Ub",
  "key37": "2fH5sukdxxajU8LBUp2VMU1aoNWx9pJKKMn1gbNaCZx5XmJBaTXdjZGbuGfMvRNFXJWbdSmhifkSwRKcdbFENPXz",
  "key38": "4TMiX7VdeucQ8HoWLuiw1X7F1aWwjeoqJA7XLgbfEPiaiPDvVCNiemhN6EiHUrG84xnaSZdJckCkof4H5tcbnLZM",
  "key39": "3TGmGMxJqfpm6m9Ldn8PVjkNXYQH2uJgSi9Swsu6mSAXhgDMq1BrvjQMtQRX89z2xDvSJZxiumG9FdhhCDVn7GWJ",
  "key40": "5XvM7MSyHUUfTWgUBsbRf8o1LcvzoqChGq15rqV95ePy3R9iPwqoAdEYwD9uAHfYzBdLtF2LiMbYR2LxBckB2p5B",
  "key41": "3wBSu33hpCyKF6tEZL6y8S8Fw6dxdSNNEFWeoNMRCnLTcgC9wceaGVqGreyD73h5mJwZPNhvK4AGEhE5w323YqKt",
  "key42": "3uJ3DUt2X8y7gZ5vAfH51neQqUmnShbmeeS4HdfM4RjjaqvUPmSwxaHQA715EvP6xi5Znu9MNWEV2GzQVcUccFje",
  "key43": "2XQyWYCfUa2ZTs5ysYLxSa7SnJqa9LCWoM69knWYyM1p3N1XvR3Kt3nJUrhTg539WY55T64HDayhz2Jt71HRRRh",
  "key44": "3mJXuLyJZ9U88UcPvaUgoSQKYFuGrnCF63FiRhMbDapj75youeJnwykeyb1oWw2Ye4oaykxumUS6FyyWpHLZw77y",
  "key45": "5P1BQ3eQg3yZnDu6sWBU2nyctGtAe9n7bDSRDJJyyjDHkuigMy6FLvZUiQHmPUneedqHGCrfQmat7ZNHNBDUHYMH",
  "key46": "vpvNN2EKbzSvYsMcY4tvySphQgP4AZZe6S5HTq5iGMFzzH9Zqbd1QEGmQXSQWoHsvMyeSS8rc4jSKmADWe4GZc5",
  "key47": "4SzLqTiRRVYPuhmrqeuv8HpxEzG66D1EjwVxkrYVunHMnNEJyYpyxfhgXupefXny8AnXvpHG6nJhf23pnofHVtem",
  "key48": "3L3XWs52YJXCnr8iLWHt6BXdaqKMPytdCRjHF1QxS4YYj2n2uif3fhtntPFWeCJJjqEYa42Wi6Dkx2NGk1e4a3Pd"
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
