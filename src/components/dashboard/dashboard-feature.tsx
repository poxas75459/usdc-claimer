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
    "5Wx6bF1XdAdYt5G33SqrUJABQtu1teFq2XSbBpGbstwZcM2jBvXKkaRNC9pW95cEZDqjpY9zYC9kNV9giCn94qfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAPV9apdLcUPEGpXmapwa7XqpNBDhYJgj9gdNFgtaWiBRWKMeVH81EBPxKxkyWwy68RPER6GTLT2ES88HbguYg6",
  "key1": "4P6h4wYzjKWacM8vYMshkMvbStGYT3oUT3dBCLdhfFZteL97v6FZeZwb2y1c8g7Gz4d8vUgRsdMbPZkQQmbSmU2R",
  "key2": "4AvxPVojkV3Xju8ZHqxSponYpNFS1ZwXKmtTxaa3ZwoVhnVy54eKdVykqM984w85gX1JhpTWraEKaDY5JSSRghAD",
  "key3": "2XnjvTFX2i6DJ77ipZgw2DKcoHhQQMMwVzoVF641C5bSXiFakWBbxAo3M32HhavPnJTbgc4xYqbmA2pduTwoz4k8",
  "key4": "5Kf6YLrFfAGfUEECxYyUwBbK6ufkix9FM5188TonPnFBen4zZdWGnJoMJMbDd5yReDg33tw1McG1HRAcJRENYkDi",
  "key5": "mrp6bdKiDjaGNtRN8aCZ7WGg9vtJNpAqWukXLsGkw2uJhnvUESurjbnxCX9Thd5DkTWncDvrAJhSr1MTnAkGSqD",
  "key6": "3NbgkaQVcJ3gQ98wxhb5RBK4CbJZTeKmuYishrBqsKrCWsvbrHktzztJJBo9tt6KpCU687Gmd5PwQSZ6uKfDApiV",
  "key7": "387BEy9U1XYYyRhNTyx9iWxLF6v5ryUJMEjwbUzbLuzC11Q1gGBdbLrCoQPTyHHBt7y5aqbz9UCRMv4Ds7B6jDxG",
  "key8": "2WVtEdnHKi5MH3nnp5mwr8RStXmKChGKkQFAWbocb27w2fa1zULYyPS3Za8XwSFDo4dC68uBBy1wKaoDAVCRjKsH",
  "key9": "2rFwLiaJ5KPCLDve67SqqpjoDW7QAADfTs8dbmv67ugM6GdkJdxuvrqJZvSvPCcUb6MtM2PHL3nCd27B56sGAQgL",
  "key10": "21oEt69hzLFStd4kzZ6VkMvgUJFz3WMZZMBvmPerL24EnYRBVfth6GerDB8iVESHWPLak9cbBTchMUXMV59mEn9n",
  "key11": "3whxnGLWgErFW1q7PNzADbLtZy8ZXStRdtZ1QDSBgKx6mt7a9HeWwF3CL8dSWDeq531xFVHjnqEWvJBDRxVT8aZp",
  "key12": "3HB3V8apeaWSXbDeCc8QgjdR9Yzh6MCgxYRZ7LvchhoWrUmBMtZ2zQs2mGFPh3yhRFvgBAdekk2DLdfBY93ZWqXM",
  "key13": "5MZxLuZuvKp8rZTUzfPLLxP6oTezMzfFNFzj2bu98UhdNndznhPEA7j28xA9TwLLy3pD7Rby84hd9sL43z6m8vRQ",
  "key14": "558UbA19ubbK59kd5rKNwEC14DFVmS2GNiAsq3DDjRLvBVw5bZc1HDX87R31uLgsXQ4117sR746o54CtWk46QTva",
  "key15": "5vf5WLfhYKu5MRqvDaPxCii6HnbFkWssrrXZbXxU1pijU35rVGAwE7v9X7SVjgB6SZou8qXE6TSKEYTiAJaqeLAr",
  "key16": "2qQXHZEJDcMsxPRoF8bcQW3M5MF5wbeQf4FUiiJBoBMFPojR1NS6UQRT6UnaJiky81tinwDeohBkzHjYDCtUJdzs",
  "key17": "yoEMbLLX7eU3NqccopGPmHMC56YZ2gZofN8WJyJc1S97FfjPfvsniECbgTNKpkCWNq4ei2qenAETiyfbTDpe2cb",
  "key18": "3FQEJ7XiyCAg1yR8aH7mUTxhks5r3dMMNg5DP2fgU7QJ6oNMfD2xQVtxSgiH2Mqj4b7k3p5JBCJNKrX61nZ59GQf",
  "key19": "2CrYBxsGTpBqtWxDYJTjo9ee2Zfy5cz9iP3r9Rd8ybfuvEcYu7jaUcuZtJAYoW653NFuhp4pbz7LR4JPFUBCmfDc",
  "key20": "3BM1Lte8JSDiDb3PSvgws7qVMx7uv83FPAR8RCGKxVbq6wrYo5P9nHXUfg6EKNJrZKAGB3z8U7c2mbbUtcoW8boa",
  "key21": "2pS9TmEHzNu8K5uoaiefDyNwLKD1xWmhoo5D8c2uKBrHTdU6rxAhGv33WJV6i5pedA7t4yn4cRmCcR1GeTTq9y5G",
  "key22": "2pmNKR7gizLyY54NjsuxmZBJFy2wc8czmon8od2dJT9zMgbAVpRbBLVxXB1CUpnAutAt8VeuGieuoWc9SToew9Ft",
  "key23": "4LAj8kLC3AW28LDWcozcxBvCcQUuQrKcm6LhrGrC3zW5pi6J34FRpC91GwwG8uNv1rehLbNhqXaDgskGUMQTdaXw",
  "key24": "2ynG23sYwvZFHnurefZSgH1mxKaoSyTToWDvJoYCXwhzDNy1ui5g8Z8yJF5euuRkjs6kJu9VnLQm9jC7HnQdzrzy",
  "key25": "4HFMk2Jf8Awk2pB1JetKiA15ySxhwbnd2EJJiwfRQcMJ2BRXPhytSp7W5CWJK17FVPYSBituoH3qpQC3j3FNMGTo",
  "key26": "5eUzyAwFTJyi4VfZyDjWtrWkygNoRt6uzQ48BWxbRfjLtHHGp4tR9DXCn6GpZkCuhVtUQ45YpPrWm9rSaem6ot4E",
  "key27": "5L9mD8JxNcVdwgeBsnwSTxJTP8inrg343gDRr7TGPfsdXPAbaFr3DRpGzdfmGco15K4AvfVr3uryuBsmnmwBPxUz",
  "key28": "GNRRueGJ9oaVirtkP7EA6mp6zkzQNuohLimuStbERxJisMptX3tNLMnKAJ4WeLFQgGX9edzX5atRTTT6ZLSor26",
  "key29": "4JCuBgE1Q58JcvxDvo7uHFB6iKjPLpe9mB16Es8hFLFwcTJgxo53XVZmYqSRd24DF2zLgjiq9fnK8LYT7Td9Gfa3",
  "key30": "4Vzc8PaeK2QF9G9aHQcQCEhrdCkrw5CjeP9qiHdSWWwTwhuVnaTAYqMWrRBR6h7snA4kz8SJhwwyc7PQWHXH7ZJ6",
  "key31": "3NU6kNhGG6CnXVjVyxUyk6E1j95supfD6Lc3xDqKj3Ydb1vS8NrEQP4hJ6Ld8WqirKbNan8cLpz2MeTjcjim2D1A",
  "key32": "3mrmcQoBketA4Ep3LZzHdbA6quDb1gS8WJk41vUfu2UQgC56wtVU9fMkKSkFucx5ZvqTNLuXBdBaSrta8os5WiFY",
  "key33": "zFfdUjymWEfohTcBFcc2tnfwKEVh67vGMtwVgrzPLUnY5dWHHd78Qa1X6Nwk447SqQpkBkbPZZbdguKXb4L5tx6",
  "key34": "5Yn9bB4pvjEshqtZea4wJEoqCinrxSTvd8nERGmGeyaiNYBnaDieHKYJLFTKASQvCLTkhm96sBi7bc7mhBevwvk9",
  "key35": "5p8UXyCm7So7mv1FnERcUpWXFiSqtwWJ2tYVFpHjZvt8Qx1bMYB7WTeSbczAqRtYzVYQ1U3zj3ZJ85wmc4VRdSju",
  "key36": "qxTUkGtYbkPcagGFriB1NiYDjFCAoUadRABasur55eAoMb25LNc7mskuBAJPKRxT6yWjK6tbU5qT8y9fDZFYNB7",
  "key37": "u2esANJZaNnNETXzvHzqHRTRdrRNjmJ8N8BVRzGP3Fud4Unr6rhj37t1yGMsKNBqRwy2yeXFgJZRikErTzXjn8i",
  "key38": "3RgxDQ4dwLqsoybBStZfjg6nHFapYf3BwJ7Htmue7G4mYFkFYSiVvVor5vi2KSW1Zg3mxYVdr58boyJdM7UepM25",
  "key39": "52RynBFhSW7rUqnCjCAStcGA4CpweD88Ch4opBCCCGw68C9JaAwwbQkzZYwccAmSCtc1jDow5P8e88obbjwiZ6Xu",
  "key40": "3kkCA2cgaPTfmAHaT3q4u2V9Ggn6HRF7FYj9B2f6P35xVtS6ZmUmNHgG56a2SH4DjTSA611qfos25TvjavAbZgGf",
  "key41": "4V2qLcVV6CvcW2AcdUre4uFveZhpLnDAuqKNiNMMawUzqFCTREPL8NQQtXbfb3tWyMZbHFJV6Ar86QuHLSX1A9zM"
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
