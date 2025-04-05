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
    "3CnW31SMTJKXJ9VDK4nSuY2eazgG1u76impK3zo1XaNT7byhkSSBu2ULMmGFSddTYyrKCvSWna6ehQyz4YKnore8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TxPK1kPRBVAkvdDuSaEHcRBXYfZA5rAG1ciCGTq6GMKrMCV6S8Z5Q5azGLszTc5re3skp2nLZ2AExtmPcFRUcze",
  "key1": "23xrokQp5xcy72RZi4Vx8Yw61mUyzwjvCAj4LZe23hPsuxhuQwE5MVhY1jhBwWajCEwgjS22Tamb7ekjL4wMWR9X",
  "key2": "wN3wG2vgwjP3cv5Xbydif5HdtShnDGFYKaB8hpp1sDmTzSeTjJXjNFanCcUMDcTnBuidCJuMsDKheiXPxRk3hF6",
  "key3": "2VPTeRGX3GF5dRyhsyLCo7AUpytLMveqnfW4mPMpLStZKVGCPfAxeGZgdoMhV4qCYGrfi5AUGMopom3AB2hQ4KnU",
  "key4": "58YV4f2nayHtSDc2T5Ef2uaqRQun8ANfcZ9NgNjgtwjXyHQ937FBoVgemFbbWi5Z9QNqhJv77V2dMSSa5D2dSm78",
  "key5": "4Tf45YfrpyFz487BVNxKQTGNQDmkpaLTp43H68JHyKRJHwtAdvhku6JyxHRJdfdzjkrxALcLt2H9iSjDRFpwzh97",
  "key6": "3g7JL9tz6UC3wkGYEmPaEcTGNdxDysdYyFnoKdRKF2rhajrMGFWUaXhT4he73N21dEKpZB7FbENMmavdgjSqDfcB",
  "key7": "m2RnWpRB4aHYTN7166rKk23E98isd2Fi6K8Q1v2Qa63F5uKXPKorWYbamnZaAyhbfGcUq5xDUNFBqujucitCdvw",
  "key8": "MLjvPffR23jQuQPxYPy4F8d1avgPUho1oTXFzaDsPmaDGVGBrSLUty8GmwJCw2Ux7oxTxWMMgTWUycZ54AaR6eb",
  "key9": "4VoPvmdex1or7kMacsX8UFPHsv3DJj1vFbYU3gp8Ma8k9ejvAmGLXT9r8mUnFG5HXQdT5fi47YYuNDkhdGKjPpvy",
  "key10": "4N59oRXMSR3FXGYXzU6BzPEhLKrTj2JmgvmBCavoMUQYB3x3JoLTJu6ZreXcLu7ymCGFsyWH9ZCdSe5LJ8H2Xcg2",
  "key11": "2PDXbaVMaKXvkuupCYWbWbd44fMkheEEqDZ3XQAbEfe5ivr2MYxkhV7ny4ghswPzJzY93hGwydBNB7z2bWo35mLC",
  "key12": "71FjXNdyasLAFur77sryYVGTvfeCa83BAtZvU2PrVpa8VyE62w1gKMSsEbCo5MvdZeFTECDHzkQrd1pxwV5AmQP",
  "key13": "2JYTSobHa1jpF9CS2pNManZnNfptNfNiJxAzHTjzU3eYLA8korL37tZyd7FNqRg66TtCXEviJQywbPVFiu5pxeq9",
  "key14": "3ncrS8sViUv77q9n2tXHa1sjF4rPkqD9boGxuq5oXVSqX2oWSRNgNRnR7siSKehWA1Dr1GwoWg9KEmCCcz2bZjb2",
  "key15": "2qDcqjQ1MgnKk7yzAyjTPTmqTPr2UsH93yVFSKDbswMD84qokkUb4LUTSmVVCL4KcSiP65ZKszHSGKyrrR772SL7",
  "key16": "35WSf7o7bz3EWDfrenwnEWumdN1KHF3hpUXn7PSW8UB648UtW2enJT9k8PHyPthDRoP9AxjzucY89Vg6sVDcn28i",
  "key17": "fGoe18bvfDYU9VdUnxHRjD2kjUFCpfHiVh3EgKfcnT9FfV85DFjfJu1xHxge1ZEt1T4QstSyNt9HinW7gXGDnYT",
  "key18": "5fEx1LPFX1fCjmJjXDjdm3KQyw3jfeUtFrTKfvU4SesXxucUW5YPD1jKHyKR3oMrZDz5SJHYq7Z6wK4eraKeBeAy",
  "key19": "2ppfqS7o9N9gwkgRd1TMJcPVQrLCDEJaGnfLieMUeBK6ACF9ChYwinT4icgA41h8GuKNieZrT7XWRXaC39XaCCNT",
  "key20": "Kt4k55PxPCksCK86Dpv6pVqMNbtumQoGoHC88quckv1epnYmjHWfPMWt5tFNiwQnPo8XBM35MXQ2iUmPGvLgdL8",
  "key21": "3YnDBpXknEMK7TiAPr4xnWjuvtmv9bKAGW1hyB9VTaPG8cSzRKf5UMzLWKnXmfVb1YEN89qfdgKovTnDjkfo9dbA",
  "key22": "4aZwGBvc17Ue9qWko6LHKVRzd3EJ5R5JUE1pJ669SzKp1mSH8nYFvZYMwk7KhfUMVj1pTDcWwoXfpuNED51uULqK",
  "key23": "5owfZLNnvrszhd77SEhjU2216A5kzjnLDoNJ9XxfsmxEA6wyL4QG5NweqTqUjSZKPppdLMHQavD5iZuywveFQyCA",
  "key24": "4Sod76VdngfdbYxCQXma6R2NyduXgCwMvaQpDrB8GdHUh7C2EbxH3EgVapeUFPkt3U8o38jyhGJrdzEVxhZq6Jdr",
  "key25": "38Wtu5vigH3MVsHnWkBmDwnpffXUqAj7yZgXoG4RDTPUPght1GmEdrtidMd2o9mpADPLsFcB73RVb1wnT2LTa5ke",
  "key26": "66YaQbRBTgc7KQf1F1xZxLZrAVsvbqvZA7u2fbPJDGmsrSh2Ft1xxYeHBRkmK779ByXvbkeE5gQZDsxDNmGiJqq5",
  "key27": "mgdYVfB9CakviAz7NQv8upb2cmbPKQZtGKd5niYH42GzJi9snWd7M5bWvHKNgEvcHqkdcQEVc7akx5QfSuNvs7U",
  "key28": "5Yt1BqTW1TePLLKvyvhRdtwgBiAt74CZ32es9w8NSDepWPgQVXvxM4wh6oMik6SGvHCfYG6ys4fDe7dkSnH16tK3",
  "key29": "48253CKWpK4dg9CDSSegSgxRdho5zg7Ly1WcWtBZHG2R9Hd57XYcLX3nssiGvjUej2iKTc1EWaWdHezVKH86EXzk",
  "key30": "3zSBk1rxaDCXew4p131YLN5XqoaiwtwEcAZcM4kFgYHrPtXTL3bkR3NL29bJqtWJNkr9n8HRzZ8UJ3uj3a4QFQw",
  "key31": "2XxGSSURAAQ2KArr9zg7suK63gqBK5qxVn3ymdBLpsX6Rp4JyJRiV8LuSRFiQzuHLcQouHHBy3W6KkUs4BGXYQsf",
  "key32": "5qGiADaaGCmbEC1aUSuyQoUgbBrhUu2fbHMSQc4gcYe2JucnRQnxF4UaYG9wFCtdLjbrnzaS8VLRhr6gDQTfSrfx",
  "key33": "5Byd7dcgNtMTfRECeGjrroyUjJ5dk8WgRCwd2vD8R6w6nXhvZBRWvMEu937SdUxTXpi2DHHwtx6jjRVUKHR5DcM",
  "key34": "Mgmc5zUJ73LFPyDgteFMNEjxEHeMKqPF2uYU7nfreUXJTx4EZD6uvpWSA55VTJ27PL5S6M1a7DbjLcghq6mvT6G",
  "key35": "4tTGARQCHDVevhJexziSrUjzqhgb1nAhfhbFGUD39USPyD8Yp3i9utaf2ZUY4UrK7b7uzcLMBNMwzEicEqXc2tkg",
  "key36": "33cyUAZCNPLyEr3tLimhLy83Vwv7j1WSFZA94Sv95hgHT1mKoZp2hkRxEJE5AZYWPkThMKeiTHSYfqwpwKtcmpgV",
  "key37": "4iJPA6uAwzVWpT7wZ221jp79WqaY5qTR9guNUY3fFFvKxkNrqM7vNCzDo2NYQkbgK2Pej1XdM2XTs1PXeMzbuu4y",
  "key38": "32AD4t6ae7h6WGMbr1y9Z1twnj81eHqvRusMfmKqof3tRuFhYwXeWKMQo98v5Q1rF9g9VDrbPapN8dJZbHrQh5qR",
  "key39": "iLcmhUFKNeTWJqBvXaTtLt3Bfh3WEq2p4brjLs2we7kwLN3y8cSvY8HVDkTPNLLBR7YBi2aixChBFUAgsuriFpe",
  "key40": "3eu9HfQZViZ94SQ8p9Kh5vVDm95J4hjKCTK1A8wkeRqVcnw2184ei6uWCp5QZBdfBH5iJEL6EoUwV9j5SnKeykK9",
  "key41": "5YM2MUGA6H39CZCvDiNkbL1egS6TS5MxS1fKtCUHdYqmCh8zVPZvWL1CmRczoy6gAPHF6EGFJjfPuFhDvhSbZSR3",
  "key42": "4YKHxrNT1TPqvz5jGXDKsmYxDmuCcQs7k8KKuHBnDm1zxJYBrD9P5cJSbkpAvEaXdr6n2M7VmsXRXpsWJuKQYBEW",
  "key43": "3eBLcDEGg5gsGcQp5ezM5Z6JFjYa9NTXcFS8NptQUK4cGFytu6D9gxeGQLScxSDZxNPrq4Lsjug9xsNLXEXWFGq"
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
