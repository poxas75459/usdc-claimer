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
    "3B7JwhPqMVsVBkHGP8rSXPYSHHcgCFWFKuN3goKxwjT5ZFYBE7hLxVD9QLDAzNErDTkL73uZqUMFb7KbN6YCVf7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKxtHj3jJrgmZptNdF5yRx1zLujHuWZRbjmp4Ve7Yv7XSitZ8NE2y7V6k3nBJ3DyRD2CKZfZqhazGcH4wwwoJ6W",
  "key1": "26DLvqHQfdVhGVYNK3ZNEykwAERQ4WxwiYtRUwDN9MPDAVwcuMM96v4q2d9YirkcjDnMu85LKzK91RFntrjQoUh7",
  "key2": "MeEtSFmq42YArvwHayg57uy7fJ4WYu3qj4xb17Fu3uNUv62C9GAxJFWYxTun6mBEFf8o4mUjpKkxRovons476vi",
  "key3": "Z3rThc4A1mx3HniJkx9qwAa5g4ycKc3F8Z2jaEKmr2prL1esDQEYXvju9TrP2VKQFgaddDbvgkqsHjnR8hF6DsL",
  "key4": "4yjNkzi6kmp8fCyMJw1yp1h36V8XBRozhjERqLp5FMeRs87dCCs4eu1yhGQmaLAqRUAdnUrc7SvsCjKJsXxaGoYH",
  "key5": "2nNbh4g5bt2Ddbg6WPTSSPuinqvgRwKduY6apsrvd6g9tGiGLBYFozivwbyoVX5ct1L6UjaF1GyDWekroW18wg5j",
  "key6": "5oihiYYC3RyqqgtB1TkUw24TmKuUzGL2bArFo11tqGbrYqsEDFyszoZ8CzvPEM2uuz9rY5bCS3NfFEM6JqiQUqYT",
  "key7": "2zBsbXKSDS2wxRdyRRTYGYz3spRtjBugxSZUFKAik6YLp5uyGyMDftZ9PvGpEKmsUEdYwZYCDEXC9Sr1UZTn4nFy",
  "key8": "2ddy59nJK4T5ZFnQ3SYYzDMVWEL54zwRZFEbRxPNMTqEBN8jaePxykG1kX9Yo5pRKRk1Z7VLf3LtRdZPuKPXQKoh",
  "key9": "3tAgr7YBknZtPn2HG9mctZmQDm68FJujAtL9QG1JFRVvZaMq5KZMDK9K1ZQNUxQzuSrVcsK3rRJhP4VW3betj2uc",
  "key10": "3DAXTvqprhQLSg3PhkxPN6A8sPDkk2ja2VUPZz9AR8e5r2TG6axfan8nzmiJUneQd9TXZGXVM1PFuw937wp6CUjv",
  "key11": "5X9J2FYNBnAaGyxmoiP632Cv8hXvTRQ3qpL4oYn6Qoi7tncpQyw8sdifdEnBBUcBvtvRepSuL5A7CMLvkKQzt8SB",
  "key12": "4Ep61GcrjNtuQesrQ4wEfxEbPFAHnPxeZz2uELv1pbQRavfMTJHbgcoz5iTzvigY4F4UoQFqxh4MkSd1BSaFYGHL",
  "key13": "d1ALisMyJo1ZkUaBDkfdKm9jBzBVn9v231Dm4BUZifZbEVf1XDmzUWjb6vMwtPboqKX6yss698wFzV2dSu9qQAo",
  "key14": "2gCkyntJ9maEykdHtMV6HTpCw9GfNSMCC6xn9FY3qXbPw4CxfpHRysbYYn6TKq7QcT7UQSYHr8wfjCrNKuEzHuCa",
  "key15": "njR1jyLaQkwbM58dtzqNYgnWeBuqUKQBCLqw7S6aCeBRJauuWJRckhCJy56cTNgJ4PbYGggdWUuy9oNcB4f3USz",
  "key16": "2Sb8VVSYbYH7gGXgXNtzK9k3WdnmQzpqt6aXjg7AXzFj88pd87BRJtDdR3n53RsRns8cLZx5GNBqgr9DHPDPD2ik",
  "key17": "4L9BfFH9P5jwj3RNTCZmFydHoGDrfPbALLpwAvrnJ4b1LtnGNHyBC1WUzciP1Qp1NGJZ9ZCoVDKkVX8mEWrNcyfS",
  "key18": "4bnSvhFeXeKLKfVwzjwsh9ZznW3RwALRHZangSrknSzc4HRRbqD4B4X289eR5bbxH7s5apjJiSpJwfcRTLtsPgyY",
  "key19": "3hLoMSRjVHX31W39TTWSVcq94dCrambPd28Gq1zUKeGRWAiLDSZAKAcu6ZYfWsbPHQUzoJBctDDcVKfW4rfpfgFh",
  "key20": "2xoLy6AjS8rJCJQRVmNvVAmKaR9hRcSFwiwFLgaWbJXiP45Q4wZMHnyVm1H4k38yXo8UfRSmqeXa45Q2FmD87NQM",
  "key21": "5J3u77NnYgbMJH6qpWKVYxACpUjtGVpghrBHA9xDGJDemEMagJJ8H9aApqMVXffR2odgrcLvdS9Et7FHdJiuCH9y",
  "key22": "4DgAV9irpMcVar6pWr6rzPTXDrVuGyAxBeXf3eYxXPLdeHDDQEYzt97AHBTgnAjYD4fK5FEk74vUDt4zVG8d7ALH",
  "key23": "21hdFukSHeVcT6otXHGbmFNydk9AGEcUTk5yf17EZWhkdPZAaTJTegKuFLRxL9azjFvE1UyNUFtQ3BZQWEtpGzCV",
  "key24": "3Afi4V5ASjocZcf9jq1cGg8BvmXerA6qcAHLJBfdDbxXetHgkqPXsk6Pv3d7Em8mfRP1nTHHCjkX9Uth2WXPfFHG",
  "key25": "2BJLwhXSdswDXaRZRxbFnkm6f6K87Yo63FVrXtcdgVQcULUCj89oMVsc1p5YrRHeSXc4wNUtQ3YYbafH7XTzyykR",
  "key26": "2X7CuhKQGwRFKdWafum75cAahyFDEECuEKg97CwDz7mVfWizh7zTFyvJAyz86MyxX3AoRADENmQu6iMmEXerJzq6",
  "key27": "42K8Sk3YjeH3Qogt7UjHk8ENXYUAzuKDTiJ3KQ4Z9vjvXZwsESfxqSQm1xSS9dHbca4i5F62WeksfUi27gcnKxfb",
  "key28": "Wa5iuDoNpes1jjSSsLAofmTACmuhJASKAUBWzN95EKhFE3NH37wt67ZCgs5dEEyMVLJKeyCGKhqtZDz4kPLJWfC",
  "key29": "5fq3pJ7k5rQiS8L3NVgdH3eusXkPkUPWVNuMvQjB1jgVMDLLH7JpLEN3qCsL81c1nPKXVXvEYUXk13X3zKMDbETJ",
  "key30": "3ViT4A4iF3tUv7JpyPgSD2BHivkZkp35DFJY7378TDRAKixM8PfHfp93QzEAVu9roENcAMNkN3DaxJbBpmxJQyEC"
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
