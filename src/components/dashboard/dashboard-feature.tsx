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
    "33zFHkavHhbLMGKFy4dsWQ4TygjCn3niQxTmuExAy83PHDYqfxrNQPnDjA6ZyE9RAHQVEQKCGau8BFsL4TSzB49d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXW7dDFjcH5e8mpYzRhY1GyWrC2dJpbSaaD6ZEmmaG65NVw2jXzMQbqhZrESvurmDbYQ2iAPQtDcqA8DSH5a5AJ",
  "key1": "5XsL1McrJFCY3QXgg1w397vJy45idzmLY8My3MhNKroD32nLPFjF44V8AKGMUx6g5PWf1MTvBAjxqbsRK1iQZvpA",
  "key2": "7FcdVpaDFKqkBWvyLMq84baCAoEy3h6CKSFjEEuQ1UhWLBqgDPCsZeQ3menyYTpk1moFo6tXQmrxAnzkdYr52fK",
  "key3": "2NJx49soiMVQWPZa4QY2cfR18VRxK53cyzvNjWX2a7Notany51x9burqqC61JaUJHwh9s2Gxv2954DL1LJGrPji8",
  "key4": "53WQmembaB1GcG7NXxuZiD7ohNKhxQJtA5UCwDHweX9EaGvRDA3RJddC8detPUohuJ2K9UdqRYEHXNY6S24BjLtB",
  "key5": "4Lx8pDN24sMpRuyF3wVtPcgStd6dvv3pfCjELfWk7yT3TmNsiStpy5C4uMnWwkEnMLd9EK2yWhaxHCCCB7L1gGDM",
  "key6": "2YfDFVYNJobyfVB4XmKkU93sr6AghfmqBCMLnzbnzXcmwvTA2JKAGgU5dfuSWunN3GmqUSsWYSzV8w8V5HMtkgSp",
  "key7": "NAuhyoLbm25KwxtwnNoEHeo98Pv7kk4KZ9fiuxx7sJREuDuMovmxSJGvULdec7L3bwBB6A6KVHaCN4SbVvVGrNB",
  "key8": "58qyeV3jnEgV8sbxKPic7HkmB9L4KydduRUpfTfJ5HYcxS3VRgniK65Dzh6qdNPmN3ghNyNbkzu5TwK56rFC3rYe",
  "key9": "4DxK53T6RJs1HVKHqAweeo1U6UQ9s9KKb1y8kd4uSrLLFJQ6SNcLyrbvKRwMivtFPkC8EnE3uuJspSp7CxyyFj9c",
  "key10": "7PLkGhgx9aQRhLNMK4psC34bvFNKqRoFhZgn7F6hTG6RvAio47d9c8V3SC6wkWCi2LkKhWAeF57DZgp8kCKLLYD",
  "key11": "26kG9W1WADw318qjgEvBr7DDuRbACQWUb5pguvbRpfssdTYxZzipGWP41n5YqwojpRUViVfKdtDYnaExtxhBtTfE",
  "key12": "3Fzem2nVaP3x7Mv4ni331HdNrJSqAznny1e7DJATmdPMcZnKqbaeDcdNH4HJREkJaLK2mWbF51LrJrMQD1WGTPxv",
  "key13": "njNj8ZMimGsSQ4aPNzDgyxJhubdtRv6V87kSUGdY2dbxJYDPdYFJ2ixgFfVmuB1KQQukLAKhhQmLCojfrKR7NYq",
  "key14": "V4nNUKxeVYg22arGX2uUXe2W9mvr7FLc6VXh9MdPDiyK7v1QrWPgYz4WYLHzDcNu8j51KThRLTyHkXBbqjixsFU",
  "key15": "4RHwR4z5pfhhzfgNLEMKTi5tuwqrd8K4QFnzcAGU1kQDR4XnUHrczcaGYZRubM4MVqV4ebY6UBnaB9pt5CuxYUi1",
  "key16": "2tApfLG7RfjYXixpZMcYeUGwsegqCRowFwcoMA6VLCMJuBdNmaMfvh57BUJUB5tboVguf5uyWHVwBN78TT66dCy6",
  "key17": "aK3YBsMQeTACLzUvKrAq1jq8TC6kiuhPQ1gsHQKJyV3NogL9wDigRa32WMfunpqW7EjDjg9CfV4te44QRh8VwiF",
  "key18": "3Bjxc4pUnG8grV6getco6mPNvoj8Miv5aPQ4UFr45vVMEjFqJ1NYeuFDuSyeKCp22Su1dpBy9UqgKi1jfCCQzU8M",
  "key19": "42ttrVHPm4kw8sZNYYMhVR5uacAEus7QrVQzx4peu32ui7Wh7fVwRtEC4LvdP9HhViPeGrS4hCHEazc9A1EP7KrC",
  "key20": "3vTiAqhjuYeQeQrjSPGFJJ7G2jAPpD7PUbVpp3xgtK2gWECUihwwXNvCphHz9pZXLmGUfPbgfobhzXcwt2unUEz3",
  "key21": "We4k2ikK9hkKJRtSf2jifNaKNYekq5XoaXnzRWAoekHX5nt6hpSQWCWZcw7LP2RaHpsyHjCndkDdcJE6dUFUD3n",
  "key22": "4TGpHpBwrujQHiybCgcHXa8hz9f1G4H7y8MxnZTLKGht6ARtbLGJKV2mG2U7LaSBHJmyu5XXvvi8J7dQJtkP4tHJ",
  "key23": "rB2TwKHZDmD6AohMzfxacZoqexsJkEQ8ZiyHRibFqQMuZqSDVZqAp7vudVnMU46PqqZk7JYFy5EgRTmWopezL7R",
  "key24": "3NbpHmav9NNcDwSAmRJJSUWYJNZpHLnbiuFWMuWVvD9wCV6fGizHhvT4kN9UUgDXcVnmoQ9e3qxsNrBEbv5XLUUx",
  "key25": "2L9KsvLsVrGZSzEL5hujchw4HqZ9Nswa8F2HwFcVHkCKvctZfLBMSZGzKLhtsQ8oBbLzcoC9ju1usxk8HepJGXRZ",
  "key26": "4zt3KwCFAXPgByeUtgewHrYbgf9GFqjFtUNvkMzz3dQGk3RnKpUp2scRTW7f3RAvWgrYyzJ8hV9CmyNtt67UGvMS",
  "key27": "48phKHeeCnMdnXXTxYLanV6R2z41qxPnSXFYqndweAVKDCbrrBgfjZxA9JfVSM647U4g169nf1pGewMs79mMJorg",
  "key28": "2PmDXJzchoNYEnFq9GUgDQhrPjFZYTorcZSXYfM8jzqvVdcoZjzwDt3gZG3KAt8wuP3cVwbXUXkgYjXzWCRMeGrn",
  "key29": "5g5bsHocL8YTNZrZj7WMY4p1Q9BQZjzSc4eHawVdfMLM82bDBvD5Qrgav2wBL1sKBLt8DMQ2QLX9yFdgwtprDW8g",
  "key30": "3MD2r6oKYRQuSXsEv7Fw8dGb2RBU4y8vmckvVVUH25BhAtAbQscRWWs2nw5DPxM83SeLJo3hz82hXGFr34eCEYWc",
  "key31": "4Z6CPzA357VPcw3qdaVzWSmESvbN6ntJbLsNMpUHPDjSESCpVbr1zrNsSsNy57L5LPpctc7ykHUyi1hRW4ZiC4v1",
  "key32": "4PVqS5HXbqBtAxK2Ku4k2TKQ7eGAuNEDCP5TCRDo4PVEhyThMJuodmbtyF89wYguaSGJtnDB6F6VTJBsaMQccenA",
  "key33": "t6dTVN1QRXBtCJt7crGKVUo3BB3FvN34zzAEL2g4wKdH2ShiJZTBGUGCVKQz2kV6DAFvPR4diZ7a1V7xCUozLS4",
  "key34": "4wyDGS9yin8qVZZWfCcqHjdSrsQdcmSZYmAjDHjP6qFYsB9AmGpKtDnTjN75m3xmwnpM9Pwmd4jnNwPnQNA4b6f8",
  "key35": "3Y9FG6YHTGSKaKvmuEfFgoDSSBYeAXXZ7XBYok9RWEKVYegqLxaSfXq8sQdXV4doXPG8J9A58jnfj9LcJw2Bgcip",
  "key36": "3MZ9Up4Lr1TyFizmKFtTdx6xSyghBvdLpG7XRaL5GBWsjjYocSWeKH56TH8fb6rbWjRqUj4tyCE6fJ8thBBqc2qx",
  "key37": "64V2gyiXMVNGAdfAcRyguxQcdEnQkecGXXWLxWbMLQeQnN9fgXe4J5T7GpYz5pmsam6wHgBuiVQoCFrgixsuE4kV",
  "key38": "5BEbd7uc6PLk4G7L9BSAPq6S2Y3u9DgYg6heZr1fC4mqjYK5mzeEiPA7thNybkKqNURFRGe5pn6pHBznJm29NVBw",
  "key39": "5D5AMkjPnFkzrnXLFWSkkNosajbm98j1nAkujfciN3u1GTr8KZTkMQDhFJFxpAmx6CjVmfDrT6t9qdyMTBEEwh2v"
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
