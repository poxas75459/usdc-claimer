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
    "121n7TzpNnH7bhGwBJgVGUUG7Sedc3TAHJ5XWBDHX6fc2UJrHRCuy28R3BJ6iSD68js2fjGBKHVxoN2Yob5tAccB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V4Q5xwuPxi8PG3Qec36a1yvE89YeRK67HtUorUZFqkPqKnHWLhoRbzwWnPRhwYckytCVdKFfsPUBCUBnNJQKRqT",
  "key1": "3XbZuXP4bUTQLmKzypG6uzR64a3WsaqES9oVytEhGzk4mMiJ126sfezSAs4ccuz9CJCuzZMp77rStcNXyswsM6VR",
  "key2": "21waSdUKXFZAtxgAkp9XxtZ1Sr2RyVHVfiHxZk6bX63u4E2A3xXXs6nWE7YBNrNHCk1FQyVZ3K1WDh5djxGWq4Kw",
  "key3": "5qHPK2ka5zuekcDiTRbPFSW7Abo21dJMYe5Knd93owWJadVyP6kFAMsHdaHFarJCp3wr3GpCgsyN5MhhMFsvuqW",
  "key4": "38PhatyMAysGtuqpW2axj3XUeVCHXERSjYXdcsH3rYJSqJHhwhYdzdFh73rUz9Lc4TKg48MmPkGyFyP3A8JAoTTz",
  "key5": "2b5nmRai7Tyx2TZqffZmcEA3Y7MmvWEKZ2Jnsu6BDdoBcuVQqyurHGNUUQanKC5833d4MDveqABgqjHKcDb2AMnM",
  "key6": "4npGyZ7P4TcTwDQWa5rrsdW4U6ZVxt98x6TsVVW7sy5PGWa2Wzz9H5GMdsi8CZShXCUDzeshhYSjTfwTXWKzLqoH",
  "key7": "t6cHD3gkbFBgyeuC6MdniFscX9SdTw4YFcvokaSb2NBoxPduPw9cRSX1ZEi2iCGFB6Yt8QgQ1aktEDJYimqnNZK",
  "key8": "c2HsdLz4oPsYfQRxRZQju6SRh781PhiyKyHbKW8vtsrGtgcuBwtRYgeXf3xYxuN54mhEnuSn8SrbxgoLFEfyzWj",
  "key9": "3K6gxtsP9Q1TcVg762wCJ5JctLoX7ty9kPuWZtHmcw2EiePSf7efE6Jo46TvqsQfyzEaBT5hZLmdYdxwhX9mJUfy",
  "key10": "3WcsnmYbESPLxSibLZSogCvchyPoR4Q46Gi4HdDpRAdboDin3Z8NhfEn7gZrJfkfPu7endUbo4KZ2abnxbDGy59x",
  "key11": "5CbZE5cdfY2tqG53nWZCcztfQqSF1kuxoiodV4giHFDyz9qtDCMbxfuGJeoKjgpo5MZZ26A2Bkct3pJECzXWHeXs",
  "key12": "2SR9D8xkB2W9fCRm9wapQucdeH8TJAmqiXJLqW9G57oJiVd1AnFChNswmWy3C4EVaxTruhJbTdyD829HeBLazj1g",
  "key13": "4BvTXCfpsi3iSmhoU71n7N8QSCRnqrSqEvwQV9FCxUB6vCPt22KKXnX47x9SquJQZPZaA5Azjff7U6wxTkx6R2Pk",
  "key14": "4ZFkMhF5JBJRYWVQ59fEoo4vCqLJ2b4F3KiSYCgXcUBpJmTzLdRheASiYvcwGjSkv7YRGv7Dy49zM6vxUtJE71PQ",
  "key15": "5g5ehaJGLeqqTB6H8srb5rGkaAPPyULDL3ki8yh8L7Ut2SXFSGPB136Hn59uj8VMyhAYTFn3VwzLhK5AgDrsYCLB",
  "key16": "UgZGSr3c7uFs4Xbwv8ApciNoQHjEFWSbzNQNUZdn4jMxkREmwvbPHVX37m88nLDrt5Jcu7gjQCuk8fmFSev9SWt",
  "key17": "498KvtsNM2axLTLeP7SbCMgr8SZCG7swqpxrTiwtTUxA2y5sgNxRnkbyf7s4Db5MZyHMKq1gjStmwG2pGxxNStc1",
  "key18": "4rniHxeJpqu6788grVqo8LzEuGJVMe6FdkkFmNcmxb9kpA8F2GCC8qrF2sVUi8yDgYRqBTzNMeWJbe8SKeYEngo2",
  "key19": "45h5kyN5kmry6CdjiFN3vGkmEkaGwGrG9KDc3RsiyQRc3Ch9EQvs3dDsqNCD8TEnbTCiBgDTcpTDFRLmHbNYaR15",
  "key20": "TatnBT9tbjFWyzwTCaFab3Yk8aRCVRexjczzmE8p8fFnpUGvE4EkAEEVn4fSGj9msfTNYychotM8Dmbm3xDReYV",
  "key21": "3MajM3hcJLACTAJxWb3yHcThJC8rA7S2KGkfYbd6D8jvHPjx7WQNbTKVesqPFUpsNbx6sBZ7sFTVHAeqksPyBKuU",
  "key22": "5GCC6EJQc6mFzwfvYYNMKT6yiC52YGFgja7dtzQonhEL6uYfCkwexpVMHheg51dRCkw2aqJFDBeqYsq1LXXLrYdz",
  "key23": "3AwyvtZaJYNSxdsgBxs27yozSo2dMsPG6LwdgJbgxw52EmyHkC4DYoJ37bJg3ZL5Vb5ZX6FZd5jX95XjxPnNAbB3",
  "key24": "4VdMWtPi3z3VEJVsPUE79usvZMZUiQ5w8KeXWRXW25s67embCrq4DYZ9Xos5UbGGQNuXbGo8xfEDQhCaGQSZ2qX7",
  "key25": "f9viDZMKWN73Y1QgoRNduJYCkSf7LDpw2ti1LgoLn1cXKayNHfhs5CfxzfsmaxV22C3wJ1r16CqULqt44MMfyeh",
  "key26": "5LqF34rf48LDnNC3zk2XJNt2tNVkFWQWtuUdaq8P9dRQ1nxepsFLVtavpAhTMTxa3sQCSCHrfFss2rq92epMDwv1",
  "key27": "2TCvzx6AmLjPTzr5eK3wwh1yjEhbENEGqTzoDSiAT4o9NK9Jyk5iigEu9o2fmtBb14pKzEEVzvDjKKrs5Z9WtBWh"
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
