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
    "2AVfy9HajPGhWPT4TMumtQS76pRzAXL9NcwzozYovhwfwdBpx4qYcnyRTVbgYxokZ7wh7iBRGcDqWSvayKrhSjBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaSDMwPLGQUZthPoSgQKqueXPQ5TtAqiPZJxGitXsqiPit8TQrjFQauyAqABkz72gAev5dmKYuXuHszueJUrH8X",
  "key1": "2myb3YAaLYWNd1fSQVGzRfwoiYxz2TH2wkwFWfwCfevB8Sm6Kt4Cpoot6oqQ152UUWd5fSsWVTkeFqY3ssz9mJb3",
  "key2": "5AoHi9KLT1gAGsvypJV12a18AiSBV9QLnwARGr3AkFcqfXx7o1x9TdeLq8k8Z5RfsMo8zJEXBd9GHiaQVTVVZbWG",
  "key3": "5ERGQ8imU2ZcheLbJUJ98dJH8Zz8DTK87e3zSAr3Eft33NeVTmWxbwGv21R9rCugDp19qH66vA9hyFT4ptHoUjRa",
  "key4": "3kWj9SjTjzEom8mQYxGnttEvQRPsWxo78pcYvzNjchNei8mBTNjQ9msKmCDp8o6fWyzGJdMj2hsfSFnao71quTAo",
  "key5": "5EezP9TR45LJyVuHSycBfHRJFoa6hsahLLeb8RV8LaUBtQgJFzgF5d38knUdgnakjY62UFmgFCvxD5D9MMUmhaLS",
  "key6": "49RcTRaMNri3SZ9oCEBA6NrYq3m4SaX1jt2sEWeYAybKu4hESRDhyKEELSHHijvJ3tqnQF9d1amwngcgJooHTP3e",
  "key7": "5NE2rUeLNWfq1JMgBvTzqB8GtuvJ2CCA21CVrPvzQZsvwjS1umvhjivzrafJK8p2ss2bbKEFkwURUWbTvpQos3dR",
  "key8": "4PSi3hTLg9EMsQcH5j8gh6zuhvCnxFDwRaNz7u2TiYZHAWFhDJjg4EKoiDipMhyffHQVqg3ktGhfGD3TmavcQkJM",
  "key9": "5o5RKZXUr8Ftz2knUxryLKWKd2KWp7V5EbCeJvnkojYia4BHdtTSYAE8ftXQ5H4HQNrUNsNvAAkmV7d5JeioFJML",
  "key10": "4vHRVYUjpPXQhhqwpFHc8yXW5ntMPXz8ZgoW7VGgxHCJjaNbjnRDG9Thk58xfCCmVp8yJJqN41VYVJhm62tCLSrP",
  "key11": "62MHteKnZf9dBUwnovN2LQqq8TsnBZRSBBwDjGxJxxYNcTVuRiNK7U4nR7dqacBRk8vQnWiT1WeRaDf23katS4s4",
  "key12": "3KPZohgsZFPj42FaxPTVRyVx96vRL5qp65dJnoeUGrWPQVcnviVASPprFJ23Jmsqh8QCvfLk7VAkYEhptrGj3mHF",
  "key13": "3FR4DMJqV7DbiaRoGqY1f842P1Eufxw1Nwa3u2cU2WeLvNdadXsDrpJ4mfuPjSTG8Nno6bzkvfJtXtHYsFupJnwE",
  "key14": "4UgGy1fva7pqUzin2442Cv7KTMh37JfP3nVWsmsAjWrLe2xb1nuYxxStqZtCnv1aMCQkdPCxpvcpbfa5NFaotZmg",
  "key15": "RBdanr8RjegA5U184LUqr4EsPe1ynQMir2DJWy87cEn5qAsvYRgw61rTHXZAmTLzqNwFqXjzgvAUoUD8puNQb1s",
  "key16": "4GNKERDrhExbnfEZG3CbabWiXPjoWYEi6jtXiMJbxMbjFYvp2tw52MPk2GkQEyRzYczuF9LUEyGjC2zyJEfMSoMs",
  "key17": "2zrKayY3uMViwX9Rj6LunYpRYyKDamJmY27jDnyFgyxb2z6boxUKLeZbcb1CmhmXtqwNraE7kyYEGXUAXvFhcxye",
  "key18": "4gJkzYzwmGAWbKsbNYTfu7Qnt2HgMa59JTVjqorWuxXBGhXaQPKgPcSX2y88eQhGVnbkbCjenavPDaU6TYe44dhU",
  "key19": "tYpdcBLxEdyYMV8UKJBYSE73WKav12MZ4oUyTN3r9CNTKL74v9JGCxxmRTWbhTvY9WHKc1jzAnx2A2BBFSxhznu",
  "key20": "3kz1vzRxS6WdWNJG2WY1MrvKu46eapukTj51ZSuDBTqrX6yc8qfF1ZHKikxDoPnjpbAAMQ9nZDQpiFKtvxmFzXWy",
  "key21": "56C44m7nt14zMRiayoTfTyHcxynY27HJCDhUqs3wPhvyyQBQ8oLR1cC6xCe3nrKkG7XovLjKvbyLyeBAZ6CQN2T7",
  "key22": "5fN2Fh3JsxYcudxf394iVYeZFFyDvy2fkGfYiWcoQ5meJp2h4ZPYHG1SC6srUkLRfUNSQ7hKLFUvQcNmeeUQ9Jhk",
  "key23": "t42Q4he2VDCmnsp6Zb8UKjXmn59DehUaLa2nzh3fB8v2CQMGH6MJwuNUMWgfKv8qWTCsTapuPtNFHvjenNxQmnp",
  "key24": "5g1f5DLBsm1TgzpVtCdEe2ez8JdWiczxJTpgxTC95pnJz1F1vuZwdjvRUnVSMuQsKrRByykM4W4dEmpTWc6zAiPJ",
  "key25": "u5uvxdWbi62S26rhd4tRjsLZWutgpTCoVfirNu2GrVgTeQfycNP2rEuXn1LjJjXP1wH2buFGJgzGYmgRm4xjock",
  "key26": "2KAg5X1BRP4t8v78THzCvGJXBGbMEEKMyjrE2dWpQXN8YufmLyy51imi5Mb2yyVtTsM5AzQnEQ2pXAUb4sCAt2Ba",
  "key27": "5s4CoJazohuakUXEwHngp7JAeauQ8GARa5kffZ2H98yBdHFN7oet1XEbKx6YRuqLP15siuXZta9XuNKwUB4iJ4fH",
  "key28": "5htknLnd7vh8CH1wipn2UgVGQk7LmodaZqkzqZMwh2tmVYF4rgTGFWUGhefMndpidt5rTBSPH4SogiQ7hka6qq5J",
  "key29": "38wUUGg2n7RXRVCFYLTBuy3inXxmLouakV5b8HBuqdnaoJ2tkwX11kwLG2LgtjyMiS8BJWPHjjEj6No7SSPqgFFj",
  "key30": "3dE9jCf7NaMVRUYSB2nGCVUwpoSW82Xt1HXu2YbbJFc6iW67pUPAdec9bBHh3RkQ5hFcaHWvQJTg11cTmfsjXiS3",
  "key31": "4nEuJRUyKdrdZ9EHbqLzQ3GkyKLYaif6GLCbrshYkQabMann9y51vZHh6f1NdRtWjLXdLwWhQohqsYeSDcJyCuUB",
  "key32": "58VPouQsj2395ezCdUDb5BcBhEzja4CT742STSyJo9tDQAtR6ghF21Jx2mKspDrQdkfQZLudyJVUtbEQQ4YG86rN",
  "key33": "39YLrKyWjmCKJfY1C8ft446KNoa8aqqKtma2Nv7VEcbZdgJwigNNkFza1xMkr297yMxA73dd1eoCGetsiotkWc2g",
  "key34": "3JZ38FU2ve5XDVKtyEp2gRxevJLgXYZdidH2nmRhXhD6USUNXebrWCdzZFfa4MFX3y2Gzvit8fq3nn84gc7TmN48",
  "key35": "3rK4UEgCusaa7MqyAiPdbwWvEiknKku1m61XTVTvuHPdw71j9mgp1N9dX9oxRrTyE97ERYniB4UVA2rw4DmeUaV1",
  "key36": "2mbKLcG1vAZUHMW6oCy7VUEDeqkWtPEprGauXxNvLBWTpaKDCRbW8tusCPYgv9QrNg5Pfmhb4HBdd8DMJRi4cxVT",
  "key37": "a1jvZyAtd6eEN2hftzbCzXtohyzrR4tGrZPbtqtaqVtjjAYGhNo9CpEiC12Q5tM5Q9FTE4mxiPZXPA56rEiaddY",
  "key38": "3HkPrdFHDd3VL9bNM4MZFFDSzATSNQdCAYe1hcDcHgQN1Z3nieYhoHAsiodv7REHuZ46XCAZ5RDTqfsn2kb9XExj"
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
