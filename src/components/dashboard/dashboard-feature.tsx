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
    "3bQcuMdxZvcJE5dAtzQQizXxWmjMij8GDbACLYjZ9e2hF8LZGuNHCTtDpYzFBJPE8WFWVikF1YVyuxN1rp7H1WEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6J76CwjaSJmYbRK2GM1NZgriX99MhucnCNwCgvLsa5KtLUscticuBgWoLwRecPgxjNUG5FM1psasP8p4iQCoDn",
  "key1": "2WKfizNjgHQ9NpVjRLgNnv3cUAyBw3P7qUP98TZQamqUJPZEMpXJcfQa3Un5gTfPQmdsQH9CfvE1guFutrCMT4sk",
  "key2": "3ogXEpG7WjhXWFmELrv9XfFFtjZadvpvsNCPysYqVMHeFBKSccGGo4fdvMcvK3nc83k2wtqSFvN5WKikiMAPzR9f",
  "key3": "5nshNz7xMNiAmeLoMbq26UWEup1vmEWQP2kSjUNpe3aMJphuHLd3YrWhWMYTddz9txUsHKeFuFydNFcD3qJ89ztZ",
  "key4": "3BaBfMVzpaPd6zJMRmKWQXLipaX5BmQBYuy3gLPThAKYnkA7xJb2UEFQympZ8nKgQn1nqohxL9igmt2yy2cNQKfE",
  "key5": "QDknHJg72gySJo1ucRrm3SBZPLySkzXn8EPWpWk7VwddVBY3SJHfVRVKhyuDzN9jjtEr24z2ZmKUiTtVJEk6V7w",
  "key6": "3WJwgCBWwVhtoXVRMVQk2NvR8keNPdKdF9fHy4CnJ6LEm66FmK25y4J4qg1SBpZnp1k9ceAGvg5dpbkP3QDH2zap",
  "key7": "485sJMBBMTwzLteXB6P3FXCbkdPtZH3qWGbifv9qcb8m8itnPFVt49fcianLP9vmZF79eCPGHHNVtmSsKwX6X2Kb",
  "key8": "5gHmSZwYy2RVxAqjRJ4X6yVcwipiojVLzeFqAgMYLv6So6X1KgTzdqcyV4qTJiVH1CWPkaKh6gn17EFwasjnLjLg",
  "key9": "5zuwkufJ6xSp84UAHiM1bfCBR7iuzyJhmBLg5WKpTK1QXYaf1aAhgEk51G5XHmmtGu9nQfrae6187VDgH36BKubc",
  "key10": "3PWFN9x4K9hGsA8LP3U2Fd1A8S9zrks6xD2CXgzbUw4u6HPQxbPaV5dmYSmqxQBYSmx7DhzRBwinZ25uEQZewvTi",
  "key11": "32zVSFDZ2gCyvwTZigq1KymDh26mE6etemVTZhppcDJJ2SHZnvw9gZ3xTXDLYmNs1P1CWAwNgvQRUBWQdUXChAx4",
  "key12": "2D5VqWzEDcdzrMGFDw14XKB9G5PiL9h1K3MNbF1cGR32MiG2sWn4WfcSpypLgoAaBxcPb8JKo2S93CBZvvzBU1kB",
  "key13": "ynH2nj8agAMpBd43c1QFzAv5DTieGw4U69yGp6apregE6fpgCzoK53o2wmMvDk8GvRbDfHSeDHsK4ubhkjxTV7g",
  "key14": "548Kq3fMnMxxST1MHP9b9EXwoormyaCTxiJHGTw24GAU7PX94TqjNTzudwDJTM8wZt9RnESro7HyeQP6phs8Y5CH",
  "key15": "5bxFh1U91RaXmdZHgLFitmojQNaXQAkhGUAfHq2EPemBHiMj7WwpcAHNtLZmXAbPai7dqVmCjVa3WkUxwb5NSJuG",
  "key16": "55aVJH4zZEKWUP9phygWbWrUBUedaxeMUP3exwPrfm2KFYFXgGfcowGK6Ld98V5TDHVWHxoHJ8jASZ3su297p2cb",
  "key17": "66uDYtBWqn9od6syaeiSir7AZnB4Ftwc1PBUE2MgQN8jDpwtpPKE2RsCUgz9NZKUrE95m4qvmV2UHhBk5uZDKcAS",
  "key18": "2crbMmfvKtUrXLMEBcUKdkRzfmzZnB9jZAeC3WfrCuRJLUjSn4FJdoYueHXxa24Zv597NHfkrREGGavbC1XikNdP",
  "key19": "3WJ9pbE7QjRXA6JSE4EQPQ8XWdRD9W68sSZKL9MWRMutTzXqVXPMLe2HhN3jmt9omcVQ5zzGj9PnMwKop23SF1kR",
  "key20": "34kEznJi3FWc5wiyGtL2EfJzr6hmxjL1eMxmi4NPD3iWQo2yJPR5nW7xeGcw4qsdZ4mPu54Fv7iyUYwQoqAJctpF",
  "key21": "WjHHjRQ5dCYkVWsZPqsS8SG8BMtgVfCoTdKUrDfBR7F7UFQfCDbnXxQ4CU9foccs9ygcVuriRxrPBRHmt7VRGeS",
  "key22": "4vNuqnWVS3qkTe7s8ubzZdJnpdhRyRhN7fnSdiyYSeZBNTKWHVUUfiRkK7WWDKNraQWQwmjHKH4wHn3JbN5gUXqo",
  "key23": "3RZPZq2ZM7n7ZCnxf2QpUzSGWg9671oTpSVrBGkdaCPWfRSuiV6X6HgeGvdUTccW2R58Lcs4XJnuoWm9ep2Pt5x3",
  "key24": "qUJdmGnohiTv9QVsj6nuFggtvc9KGZ2fasDKBRPWkwbbjVsysn2hVrCBAWY68BcsYFo3ASDfYZHr5FuXnbCPGGZ",
  "key25": "5FCHM6WuEKSjQeunyG14r5E8KG9Wwz2XmM8EKeP76T9qHF4Chfgnygp9jPE1CsvTs8gvWk3aCBc258cYUUg42h9",
  "key26": "3iGrL87jFmZFxaRMphH4tdGEBToPPeiX4DfzrdfjtLmZajkVVZ6gqZS2kxFjHsXRr4xKhP1zsB9vtctPg8Dt2UYB",
  "key27": "58qSTdCgmewR6nfzbZFciDZbQD3273dSbUhvExZ91bkCj1LC5ufMvax2Xqw3E8XUJSyocEU2JXmBeWA6kUJQhZJF",
  "key28": "2iKmRKJy7mMzDKEbYRwbdPiuZxgi2Zw37mDW5RDmaah1cE2DQ9Vikt6BoDv81jxgxz64NS7uiPbRkiJ3PcSitUZ2",
  "key29": "2bxse4gP8hgeZRuVaVHExuRu1XAbfC9WjsTYtp6k8jXLvdVo5xZmnVXjningZxLdfT33qAJEb9nx6xJ9GsPeLLes",
  "key30": "t1dmnKtYDGPBhZZ4o3bDLPhfYDmNpsZEAqLhPowPFmzY7HAPi2MTMMB3TiPiCiqsK1zXoBXUMPEw2g1xrepc7As",
  "key31": "4d5opFRkSD2ViXkuoYeP2BUZ5MtfPCqPDHd2uRMLQKnQcdZrxSSWzn6BRV8s1yib3mJYzqFCdupAAkdkhYBGh9ke",
  "key32": "4frroHbe24Z9nib7wECCr9oZKJafrGL61zjfCMnXab52X67trjTthVWSWuGKdo5jsBCR4LzEeEnM4XywKunzACdE",
  "key33": "2eXrUDsbxtAFtsPmXRpsc8nnvNCJSQYCbxyK5yEWhkS37CxDX6Taj47RrUwWKmSiDkw4s8iBz1irFNc9gzyNcFuH"
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
