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
    "5D56PPhD3iiDa7DAiuqMbS1MoVNot7nNTmMdBAWQWboD3Z5AvF1WU99HNm67Lhfxfkn4uSapsRjuenZ5WFENGzML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKYKTE8K23n4GcZ3L5VxFMroEmzQYqa91b4AdMq99ZRpFpb4CAmpu3MD6BD4K7oyVovor1wrr6uZozZUMgkTdWj",
  "key1": "5jrCEbDQ5YGBC1pMSkZd5uM39BzFvgn7oqDJ8HDujTqagPtjSYswNjnr3ozqv48gKJrv5WxuKEW6K4xYpkNNTdPV",
  "key2": "4x4MyTe4xbmBiFcFWmeb8FBhbNCE9UiN2UCE6kD8DW53ZLfHtb6AZYmAmwGt64esmcqZVb85rpyYLGg5xDdibeEZ",
  "key3": "4ayDbBrhhBkJgnAqx6BUR83kwQskacyJr24mMJ2qeYXHX4tAY5HY1LU5mfz1z84RyYBkju1qGj1UG5TihzShoKGC",
  "key4": "5anHZ5Nwea18u5MM8YA52UpAGhSruF3SDK8TeWEvyHd8oRb5q1ku7Z6DBeeSbdXSoMm656Qkqhx6Fw5qQV28K4Nc",
  "key5": "4uwH8APY7WYipdtqrT2TCWTTsQwzaj9mSPcTrhHnBs7knzj4FjyVFKKQwwCgLb8rkEAmUDuzKiKq4AaQCcK4qQtn",
  "key6": "3rMj7BdbWVNCG5V35SDC4RJpdGcCdajVoPoVe38PNB32AmPnrJLnkoGs7aCcR5vjzzoByt1y7Lfhyjov4v9SxxZc",
  "key7": "3hfz1JZoZYrigxKDaNNTPzY7ruYyCGKUeKUpNHTmSTsMHvwF8HVLQKHu5XMx6fW4kpd7n6rRSVU9CKru9J7jZXTa",
  "key8": "2TExtSoXyr9Q57wUPCXJeSAwbLc1BWQAgWef7duhJmqD7BsKFguPzqakxQCvQodsgCuxQ3ZWrdHzQrmLRjhjVzpX",
  "key9": "CynTJxXwWwdV7zkE7PM7x9EwmfHvure4HNJvkkMuv8QndH2JDSykDUPj5euEvvvr6umWUL8ytQhxJpNLVMB6GET",
  "key10": "3nXJeUTfbf9TEiBUE8kAj7F6fdmxxQGu1QiQFJzMRfD1rGa4G9uNcMbb19gBWTBLzPghmtAWUgNSQVgLMYgsR337",
  "key11": "3GsCtHCNrRHTcqvQpQcjezRY9veoP54Yi1etuq4x8eoqfJQVWWpWn7PeSYV8dHML5SxWMwzmRjsyt2upKkd7bWEx",
  "key12": "2L7PiaFMsmyyYuL4jUfhMcMfGSoXWgG6etMKmGF7Caj1mKTbYnjtLHAQACci51LcrJiB7JsaVFSZZYXong4krHyr",
  "key13": "kUNxo3LKVxFpQoK9n8gPkUrdayoKpW3W336EZdj5BSGgpWgSdGgmLbzLqcifK4e3nxreKyMshmSihSLHogfE2Em",
  "key14": "4RPEbvV7dZD9QRNya3WS15pvfYYrhsPjuvw7cy1LMyzskMiSDQvBDUZ5GkFdBmEUuMvZ9fQTQyHXsw2Yiukq76XQ",
  "key15": "4jUYW632GaZ4KGguSNK2bDmqqHJdzLebCk5cqkhcH7YH4qdNw4xhuavnJhptJ5FrbHzFfvZh335qs4Mgv75efBNp",
  "key16": "2QhtzQb7CKTe4W9ypnEAUZ4bm7MDQDxYKCYbjbY3yruNTrnAEH3KV6Ncz6iWSHfNGxLbryXApDa7XSFwXJpXJhXc",
  "key17": "3Zm3ef7jj3RXXLa8nxtZ4vo1WXHAT46v8fhMwc9z1dJXWbAKsuvpAWUmsYgzdQY3wJPbD5L1jXsxxM3M8YSvszCs",
  "key18": "Hr2McmDymXWv5zxG3exprTXDJp1Vp8jSuvPU4hTARQ7cyurW1iNH6bitcZhXHrgH1NRbSN4UtDFr67VjghHy77t",
  "key19": "5ye6MvXy1q2G3xvzbjsxWkFKi8kKGsyMjjiuHFMSsFecaNv4pAZ5nKfGS36RvmzZfWFwjTXGpiRLiUubJa2zCHPD",
  "key20": "oq4Gtv7MifixmuZHnyQDYQaFHTUbcAx2bjUcCF4S1pFPBQV8MJ5qEmdU3bjBpLmYw584sUkhVgrU3Y5sGrc1fWB",
  "key21": "yMtPb9nWPjqEhVF7wgPTuiTLWQnoDQMcTikqGYq1XcchV4cs9sqRUg3Rdm3sWm2oiBDDTTSxrLoFbxJYeoKyARY",
  "key22": "2J6T82JFFnU2Nz6qpoKii9GAd4pN4x26VWDN7idoRy333edp218riZbxAUWSoA9QZaH8bpwshiTfm6KoAmLsU8Td",
  "key23": "5JtZFWjd7fgQaFtk7ftSqsij6ZSXZqCEVcmy63jiEuRQjEgenNmuB9nTJCt3HKpUvEMA7MRJ1iYRp71wujY1YnFo",
  "key24": "A7HkT1SfKbuB68JuUtz8hujpdbjrMscSfT52v5hXwbsFrfzQ8v5JLry1WckmGjkipjxwn6t6EvE7z5W71xnWkxy",
  "key25": "oMdYwq7MBzPhSJ5mR6SNqVpXraUgi9mE2z4mguaXdQPfzhwCqkq2ia7a3suwiPen9gGXVTURfpZmz6dZY9kbUoF",
  "key26": "2obAmQXnmwjjd16gfEus6dw9oYNtsYKFMGCaHmNPLVnvzPsRE5kU3Shub5pzh1NFFxSbCHAu8wC3wzq2VTpHD57m",
  "key27": "3r11iBzPZTC2oqUXBrH2P2Lxeac4ZnbqtX34SYnw1SrKoyKSHcmih6Jc3A5yvJJrxo12vW5iEW8iJY7Lb2xeqDP2",
  "key28": "5pdBHki7v24x4DC2PQFxaPWfdRgGeD7QczjJngi3NvGoyj3on7M97RjTcobE8GkzjykUcf8jzHXYMKojbjoVqFE5",
  "key29": "oPLwrraozqwN7KEMcmjAZpmE8YPBuqwDKTRA6xQnTHMGTS9i5aF527jrmFDYG9cAwVn88y6WQFfU9gxxarBWGD8",
  "key30": "5CykKwaWVJRy3vSHk7bPn72YC3WCY6EQk7v4x1Cp3ftyqPvRSpqfRS7FmMSDYRVQSGHqJ9KifFn8gtYJwhPGsiRm",
  "key31": "48YeC1dGqYCUy9tN1DtnQYzyEBNSuhkU7jjQGXVFHoFRXTu6X1TvesBj7KS8Y6TpLX1cKfEZtxWjqmpSGUZ3oxSN",
  "key32": "e6DywSvRotEGcf19ytpjU5pZkUnayYDYYo72wpfvRqJbVdrpTVTSfyxnQXSXfPPamU1b3FVctw2myuoJMf7mqUi",
  "key33": "6595tS5z7UszXX2ToSvddjypNKwNf32KUWbNQZbwsU61Jz2dzpYiKKA7rvF4tZ6N3vVuvHCzjkdtCGwB4AhDhaBw",
  "key34": "2JfrFYJS4bm3r23NNHUzZwFCpmZaVdWAZ3QMN5hA1Exu87U5yK5KmE1pSXRkPQhZcRrPYUtdipzEV7dwS1tv2KEJ",
  "key35": "4Ts9FqPKfPp5j9YQuAU2LqgW3DXKuS5CGYUx5fPVkR2ohajVRhGQvpGyEbXGaa4vmDNtBmtCWTcwPe2qGieWPbM6",
  "key36": "5qNKYuUMk8eTDXkYY9MZagmEWcxeXNLyy7V6sqoAb1yEiuArRs5coGoYcSBV1BgZXkh1aAjPJDtYkdKSjSZfWQVP",
  "key37": "qEV1bUACs2E6xWZaS91LkhFpWDLWheR1Vgs2k7uW5rG5ugkr2DmoynAc2Pzph6V1nknKzPFhhmssj6pTEv9X24U",
  "key38": "5LujZrELkFe16HgJiGKBptLPdiYZ8WLLniNdT2X3QWkgRC2Ye7GA1QZG14aTqUGZeQeoBMrrWXaj1CQiF41AyudC",
  "key39": "2QiE9cNzYCYf5qQpUNX2LYvTD1XSrsDBFU4FHbwVnckybfqKwMCBiGPr5oEqtfUDBxxf8tN31A7EpF8NUQEF8a2k",
  "key40": "vx7LD3rqrBkhM1tKvmwtMAY38hVZac8b6aMqqYKbTLBQNQgeHjmPM7MwdKrrozNSZr5RW5fW5WUxH9QrEwiwgoU",
  "key41": "2KsWE3vJZsEapBzG2AjKbqEeBrbp9YunugbiwtjGeYTrc5CoJwdUjtCxkfLnT54un59j78pvQnYm4irCV5LhLCfU",
  "key42": "2ZSiRKhuHS6wUfg7AnLAdJR71n97g3164nvXsp3Qra42G8xKAu5HKAfPk65gkzqEQFRXaBEJntUEQBxRZPKL57eR",
  "key43": "ERZti17bgyoqngsP6NVcmQQNBVk6h6o8MfsnnrqgPoCBzYwzA3QCDEPE8bmeCmoUGMbbyvRzmQNQb62wZRrxrDt",
  "key44": "5AFsgeKU3TzYdR8feXjtyy1vexVqbHz2Znk9Z5tpbRCM3g7EaJhw565QF6qcTGnpWtP5LDybS24CJt453eAhGNDh",
  "key45": "kiA2b9AYJLREWxxmUC7jihqTtw4otwiL6PE9x9urzNCPLnM4Paxm7NuZxyTzeY2zgaWceAoKVtxJa6TtA5eE32F",
  "key46": "3Rjoj2oRELBCkSK8AdVWSvBzSjQiVfZteYmWTsU3xUpMc9ge1BNckxgnTesQQEFA3v6b5pkxq1v56HWL6N7eCazx"
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
