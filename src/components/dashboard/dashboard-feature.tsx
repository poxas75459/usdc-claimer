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
    "2EeKegLxN78LQzvpXiMSaAhvRfG4icdUeFRVEtiUUnf4v4RrwTTkHQsYP3ht69haYc2hayyx2go5rKsLsVuJPKMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9pe7zPuB333LZCBKgEdg3SqCbrXmfr6hkEpXJb4YUKUZXQf9LjTTPfUPu6F2V3B4cETsMLn4kXPtaabDEdjBpQ",
  "key1": "4qpE1Aar2nVCGD1WChnDz6UpvJBamvLvfuuzwEn2pb9yxZ6H2MNh9SJCCX2LgWuy821zjwioMMCn2HxBKqGUiSqt",
  "key2": "3yY3jXv1Ln1wGSQ8ZT1pGoAy1GQT87Uah22Gves1mgPBVqiwcruU3iK2fPPpS3Z4hT72t5epcFFbCJwM7h7eCgLh",
  "key3": "4gRNTiGJriXuGMAdjScxBWfVk2rGybYpqt5oytsStH4UTmQTRTcYMWaYaUgGyubAYgTQu4cxbe1y6r47two8c7eC",
  "key4": "5Q4BVEARogqFuFUrX5Snbie7uwXuaU36jGHGdwU7p2gPJFSJKkcNKC6F5HQcm4esnJZZXjj3WpfAXWk3Ank2ewWk",
  "key5": "2DcYdkmT5DstvPbyuFfRunXZukAauD4vNRV76BjHk6gL2bniNHnJ2TvSGQS7Qcp1LnEaGva6ueekak7dTWRwao8C",
  "key6": "4KsrdZKk71ddd7xhPCF6Sc4N8LoTu6hiHu4sec5qkuB6FMbY1JfafyGzVR9S9VfPWneH9CPfDD97hUyeXsrFx29P",
  "key7": "3DoRvwqVvCBqhHPKHDSC7rfHAQFN5fbD5s9JHNGDtP9hFgRCuXvJXwFLVqjYiH1ubzTCTMHdaBEKUDLmKyj6wD7f",
  "key8": "3zbEDPPHfCRCPBzDtxgzohAKGA9LxT6Lyx65vufYj5ZKEftv9eXj8ktWz9Uj9b85CZW58LcPWcHk2RuNG91hK346",
  "key9": "2vWFB5YVMLuZ2yaKN7Mr4G7pXUGEschWS2msJqxGdWJWv46CYcSg68qynkGbJWVBHkgJ5GFJkDGHqh2wkY2F6QqV",
  "key10": "6E8vJdJxcUpFNj2G1DpBgaxiSWZTo5iXjUJUpnyyVyr6zfRqHeWAjB3yezHjcehBN2WGnaEJvoG8Wc44VFAp43F",
  "key11": "3HvzPNcF44azDw3zX58RuBB9owjnLen7HV2V8vRMgAsajqbSRMDvUa9EDffmXypUBrZGDJtbvmyQB4reao2nKp1d",
  "key12": "46hYtn1WXVmuW3QCw46jUuwCavGLnkz5eLJyk4Rko87sZCbpButuTRuWoDed1HWkU6dwk69TjNA4F6ea4F5GtP9D",
  "key13": "CiheeLmVbjUyJf6MzG9RDZvgdS78FwgVzACWnnz9Meh3BU9ARsnVR6iPdnS3SbTTsXr2hbVAB8ERam1eqw9JwYx",
  "key14": "2qdGcq5CSkZxVgqhMJjptrq3gKwvzqsL9cL7Xwf7vVfovneQVMU5juPj1ycnDzTZrYgMgS8SxksFAixRySiYGCEq",
  "key15": "5qGFmZyWnkhNiunSLeVT3J3Ejvx7rm1hkZmrc7Dnx4MjrAZ9W8VwbcQYo5bQgQYHmZfNXrTyA3X9REtQApe3nkWa",
  "key16": "pTj5R1ztDYxUHqGxmY8ntmHdeyMTdMUbQLDewM4ZwPFKpC77g7GRq9jEviXKbqNnHufaiaEHDkKF4CGQCNVXJ3c",
  "key17": "2rBSLWNHhCAZA2XnUEq83vZLK1DeNfYUjqKNdu1XH6NBcU8KGAbJt97WdPEcMVAw7GjgTXY3TSXqYDyoHe4GH6vt",
  "key18": "4DuDvQtmKPg16PGS6sbT9xf1zLbM1mGdz4oGWrUHPrv86LtrSQiTyKBy4EdJVPAdd8mbvjh8Z126ncKNjLxtuo2M",
  "key19": "evAyEwSDXouBQTaZF2yAYsZL7m8fw1pmQj6UyN68bsoQryVDDoqQTisYRQQqGBbciYQjcEHaRmQCxn9jCqojsHs",
  "key20": "3myS5jNPHdNB5h97oRgpEVbhhjJcFVusspbMoKNoVX1xh6xRLsdJqoX5v59NDHnqyvHKVGtHf8rUyjDtG4xtMc9J",
  "key21": "3Qj2YoYPrBRCBn7Hghy4hskdTMQimMikyA7XF2jAHRXS5W4jmNgXG3VRag1CEuai7sp69p9Uq7PVkUCBA47oVGoy",
  "key22": "t1jqWxFQ4qStxHZNQQCzidkXc3xKgt8JvdCioeC7BYHFYikNdYfkWB35eKXchoan5yNDo9pMDiPNhJb8z6spm9U",
  "key23": "2iYbqYoJCfDHFc9A7znuP7Kmz6cRS4avbeq5uiK9Jve3VQtaWjwvWdvoMcUhX9ASmqkteii1nEqnCxZen3td7Z6w",
  "key24": "zC7t2bSS38aJbwX4XW5fNq1hSmqQBbkUfxdtEqZRCXVaqDSFT4AbupeKPeKLDTrfdEiP8xpJdi5Rqx17t4mjG1M",
  "key25": "5noan7jeaDAfUXrigHmhcw7MS7bhjqgqjiCen2GgofvYDFHnvfLB5zzPV6FtqRirtGKcy88xnWXsZWtwFkeQWHxq"
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
