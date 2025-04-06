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
    "2nmCFwuxcaak6E3HUyDAGmsfuTKeTvKwnkGLt2Fd1P4mxYbzFKi8uCemYb2RmowcWfwiTF5TdRkuqmBwqvrJootx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAditmVdsnrEGogABpu287jvxfCeMtYmKgmHYmUcs4kY57QUjoKhN76q7LzBUUH6ZAJqDcG5GLuKzZaFeTayu8o",
  "key1": "4G9CqqJ8trpi2Xt7vSoN9tqiQeSbcr4yhmVP5c9A2Z6LMutM37zrCmQsQomLPnkBA9rGU5JVSgj3SMSK69sL4zx5",
  "key2": "2ire9pRGPUgd3mMCYQMGetmiEpTBVW3ghRCTKmSxEcW5QazpSzXBcZL8S7V6trsBqrz9D2d8kW2jETnzhBSjz2VW",
  "key3": "2qiobwBWaCn2xXMoGRJnbiAswrCmCE7cGAhSBAm8MSbyeSHJB6WH9vv21JBJjnHsjsGWwGsMYqW1zL8vKMhwrW8J",
  "key4": "2fngUW1PmzjVjrKSscTwgSMvA8AoTRcKeMPwaPYvMqhvK23miGQVKxUvPtwu5fs3DMqEeCNrwsr5PSRYQLinDuCy",
  "key5": "3w7U7PuGJkbV4R8ancjmUbPuCBpwaLjVcME5KbMy1MUpGc59DubV3StGD4WGAbf62nGmDTCAw9cdo12HKnXftbSU",
  "key6": "5RJayffotUTzuJFBDvD6ouQD4Fw7nXFfneNmJpBLqopcPkyUcaQv9qNa3EdGMWASPCG9rpPWinaMBhw7bWVgTyUt",
  "key7": "62ECVh4FnEJ11zm5iQDyqHha4ySBFskTv9qfTWeNr1htwiD1ZK4rWx1gM4Z8RbzSoTgiuFMGR3rEe8Rm5NUkPwvG",
  "key8": "4Ym9kdvgk333pXZw5uPF4Lcmad6amyg9BUNDnxRrk3rkWTwzxNrStKgJHFfyQA6VCHu2skwjBzJYRGCmpJUv3Kg9",
  "key9": "4VsmxEZTREa989zF41j2XZVGtT9QJsPJK3xDXkWpkDwsoNPyPXpxevW2jqkyaWPkM5EVGGVdVzoo98eCAphivKcB",
  "key10": "24KLaxc5WXWzK28NT32q2mb6T6SZ1kgwD1xcPnzoXCcgjr7NH55snuyJ3sn8Tacmy96Hh7est5ybFfe7hYVuTpBw",
  "key11": "5Hi37Ycf1pFP29CV8zQ2Wg2vERcuKb5Y8EgRzgz7usidg5FzK6QYcXsmiNE32KroiRQgNzffgzPuNJrFf8bou5DA",
  "key12": "28L3FPADWjhPqWP6b8mW682hUCEixMoc22fjJfSAChu5JGxCcPrRDhGnhrESm1ZuxxtyqvynDALKeEo1DaQ249J1",
  "key13": "4th2WbozqoCZRJeqj9ifX9u1Hfx7CFcKgiCJvy6tbRMcScW1YerAQQF3X3HByoRkt67FjMwwjTnMaPn2ZndxqQ3y",
  "key14": "veT4YRtLieJsGxwetc4U6qhdxHTPMgQWtuVMRYSBbHtqSmMBkQxZ8UyLVvi85JG3G9FMQ5HkZJAvQELpbWFsuBX",
  "key15": "2m4aVku1RhTKQGbKaQr89i11wDTqMcS1gLc5z4zaNmAhxGPVyX8rHvaMsVkMfg6Bk2oUQXkJ5mWf7maukWXNTc7V",
  "key16": "2asj7dqy1jAoFsgaAGpVGS7zJk7vqu4mYpauQLS3mnWdqrgSEWPut9bL1peioiS9NfpjCjiHsBVJxp2o8RrvSa7h",
  "key17": "4z6eqDefZwdHiTYuGSewGdSpD7M9dtqpP9rB61edE1fSNj4B2UMcffTExP6dedAuXfN9u4aX8LBswYS9JCeHP7qY",
  "key18": "4bz5RA1cXadjH9D8pikVAE4rKHeSCQuFYLR63JZ9QadCyfdKPWPu2j4BJ2waAWGWqWCuF6X1JKC6drAqknpyhMHW",
  "key19": "4Y6vnQVZCaH4x2Cm1xBLedwSxGhebzVbg7juiXjtVSDbaCnqS8RgwpXSXLs6DRsPw1zwGKnwn5KTU2vBZSzNa5sd",
  "key20": "2zpgAztmKk7HdyJvPsy7KAUVVRnwcQFHAWHqMmWgvD2VrnSVae9vVmuujn4RqyXpCK8DjMha2m5tXzrp9YwHxE23",
  "key21": "432Ky184mzBfdwJckev6kw4mMVNobC8ZTivum6Ygg3GRamLzrPB8q4UKzeRiXna9FQbZwBZ3MbL4W5S46i9FDvbm",
  "key22": "3q1iTrzqGtToWL9EtMmSafkmsXLeYix7wBrkupbR9C9mM76ikx1DB7iU2ciKEgZTmnU3546rmY5Qn9qpaVz7pWAq",
  "key23": "42Qpgw6jDpRUXhvm2tc44RcBx295Vd4LQWt5Y7t3XsBGcUi9nc4i7TqLzMArcoGd6H2h6hsSZDj8RamEU5y9DagA",
  "key24": "4Dy6be2yXxS6RQ934JK2okxNUbQxvWD4Uc9RyzXSwXu2y141gF4Zyib6zoSA9NRvkQ18WFtzeFcBxSBfj4Fn4LhU",
  "key25": "5StxsGnu46YYEi9UD1Px1Egs8fidSBtkmu9gJHk7WJ64NWVzdG2YpXTBuwaLBN5oQbSpvfbsiizAjh3M734H8J98",
  "key26": "4qBP61KeUSWrM87dzmiXWTwBZjMQKnt3hHjgCkVos8zHEp5JZ6BeSDSutu2AL2Svgr1w2sNDZW2T6v6Y3w4qczyd",
  "key27": "5n8KKKSrXj3aubMsUV7GAyhKsEsCCFS8mX62zqtYWbhd9GQpYHyjhZdZw8EYTEbZG5XneEJi23upjcL7wVAGv3c3",
  "key28": "3hQMMAc24RzrnGNpjecXMSSxUFAKwmpkw12Wcm2v3UgZ25BMe6GW95eGGzmihypb1JTpsgswSuHrdZEXTpH8xWbU",
  "key29": "2FRgGwTYCKX258ZA4618MGViWLT24EGuJgR7J4h9Q77CUAyRZA7tq5sn1gWgSgpJLicUrQ17hGV3hjHD6z1QXijy",
  "key30": "3jL9jt16qkGdbDHM5QLiyp5FKttHzjMz6ANDcKrRxTb3Ftax3RZRicLWBZkPEp2a1cTTwYsykHFMiiibaZbsig9E",
  "key31": "2bTyb9hh2dr1h4fL7epRzBxjhrNYRXn2m6dSrmX3gVtdKFHXNn5LCBBUMMKr1DsvVMvjSS5RwBHz7QwdN6hvyK81",
  "key32": "3Tacy3rr5pv37iYChQnXT2pbbFmtZmXwLKo7WPyndp8b3N2yXWcukBCHZqaaYfiLoUberUVwTUYfAbaEXLa5WFtb",
  "key33": "5oxhzCY7iHHU5gJjMxPhp7gDgHf7eZUoUMaGwwvJvzPFGyNrVnm6o1zqTgwVd3PgNR4ugbcTewAwiZny5GvBAaMA",
  "key34": "2kudiqn5nHTnGCqRHL3X6ry9N6aBXT33e3b4oemeuDK2H3JVFx2wPUtD8RowZXMWWRP544vMgSU2D6n9DQKWmmPn",
  "key35": "4Yv7au7RVC8KxZsZrba5D2jzeLAp2jb6dQZeK6TM9s5zE429Kmn9uPj1B9iGR64uKtu1CBMAgdoTxxiWAFnProZG",
  "key36": "yQymTGJpSLoHuDRJWhPGnmaxhJ4xqT5ZAWCtiaDDAsxVp2cK4ZVH5Uew5TXAuFzkzwwLvenqCTKU2TqzbAW1sRA",
  "key37": "3XYNXwYXrFYdPLaAQXQ8VDP5jKUcRMjf17qGxYfVMqUgf16N5C7kaBJg9qSe38Q1LHSa6TuoBJmeiDUHefTrZSZb",
  "key38": "3KuBfJr7TnrBvDcwgNFSGuLiMW3MKByAi4aepyuV3XAWzmJWyYBA98Mo3Hrfy3YMsePuor4E2VRtcPnKiJtr587y",
  "key39": "3GEnzh4or4j2z3kD7cd8UbnS6Vjr2eugxWXRPquSP8Vyf9dLLWUReVmMwcSET9o1Wjie7imeirXrsnMdCvwjvPz1",
  "key40": "NUYYuU5ZvetmdVRhDZtw1o7vinCRRypmPvFLbEJbnV1PBdYMMQGoHLm8bvcGwj7W8zvXoQmZbyLGMWTez64Aij4",
  "key41": "35Vj1ry1dR3tP54uCz9daZyH6VVPz5QR5KvTcwMzHvrrUVg1k7wEBecDUFwLXR2WNSyh5Bq4eT6YcDVc8Q7FRjBP",
  "key42": "24ArhEZn4bAXqzkeBWTtvPo3sfLbRaeFRtmoMVu92yNiJ8n1SJBsuUAxtvzku6Yn7QB5hWcMKobHqkZKixCECnfS",
  "key43": "2HHXe7AGoZMQPuM1oL1MoESTNLbmxB4d98zMfEsQjteivKFNJkptrDLDeHkxdmqC3XpQJg7PGsDUMcBV3Dariy16",
  "key44": "2ft5oWJiRDDsQFAffYBrX976AiuwavHsGipnrf79oh4RAfhJDfLM5o6sEeKx3PejkcdzuFic3RTRzCdr8CgpK5eN",
  "key45": "4VwuvWkwDZuEiGKArYuYAL81vrpc8Ch2ucyBV87YXyceFKtEKkyyswBxNdsHmuNKNCHboYgARKtphWK8GtzwnvB"
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
