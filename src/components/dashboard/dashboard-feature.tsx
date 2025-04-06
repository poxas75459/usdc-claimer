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
    "3xr9qHjLrwok9KrNEWc13Fh51WGsBy39MYUNxXtswNZEdqp3n327JQvDgKgLQKL74FZmoHUKaqkDfiVWm3iZbbmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DEkR1h1wbATx3Txpi1Cq4EyvSrLE5P5HLzRrji99dbt2w3PaPpgY2js5rkkn7tYMqswjSaeDLLycmGXP2hRNsXY",
  "key1": "j8r76kYvirf6uHUoq3moCWmvZ138NWE9bahKgGvNizLr76ncYmN3bveyVkcdXH4uhPL5aKSnzTaWvqrWtyDL988",
  "key2": "31fqHuXXbQPNBym8qHnBT17Kps8Ubh3yZ7T8xvBD91D2z2ek9AnUA9KXqk6PpmEeqAtPhC2b2JpjxWNdBJGfqLAL",
  "key3": "4tgyQuTq7vNwvcjfSQpXSbLvUnaWXMbMYrsAQ7cQV1Zt1QqDC6BePD3UFMaUzfGJ67tMHDTSA8vQm3VqvTW1T1PZ",
  "key4": "5HchhYj1sB4CQswnWyqq5yciAs2NkBoiQ3GivD2z3ULQYY6fkSorVYzKjedDzSEuXzDHnJGVGzxtBVBK1T1hf7Fu",
  "key5": "4P6azuZ2aNTZA3etJDo4xarSTdBCMkhXB3gLTcFikH5KaaPKyHbpD4wEjGgMDAMzLtdTj8ZFtafQdvF3i2puXRK8",
  "key6": "3H21YFYDH86KfgTgBREczfs1st7d3s3G2BDxv5LDM7wnQGFjkw3wBARyLf5Kd3w16nPfvwymgZDqi8HG57Rw8u77",
  "key7": "2vKyRk2t93q3xcSTCoQ2q9kVapATfajwbXz1rtFSwsoKE9eVi6AaBw5dWVvvUXthNUJ1XCE3X2EqZj869SfqFzQC",
  "key8": "5YAzAKHsptDNfYf6bxpEKmQRti8K55SJukhbum37yzdQcXe6UrA6uiV9uqCLesyqg3Ue5A7smdLpoGz3tgoMZxKr",
  "key9": "553ugwE15DpXVZxVbjbdtBWaw23YcAmnBtf5i2JRXSm6wwvVD8ubL8oPMiamGyYyNXWznCYBBdCYWpBuvyDwtyzw",
  "key10": "5FyexfeERQuSB6aB25Yk9hmcSDtNeJERZqJfVgYFzueBaiTvVQSUgnbajSLDZwV6e64ndx8M2pFpSSsDDeXmse1V",
  "key11": "574mgGq8Gyee34jEuPnPG2pXKMHoKHrzGhxYGBdNzqia4i5n5op6E7PFrRHvCk8BvV7sfFAHn6bW3JrqS8WjP5pb",
  "key12": "4LRS14m88vcHCQZVVZ6S5EVqtLn2wwc3picu6uGZeiCFWaQc1XhuEqhKV4r8soF2h6SQxo5wHL5444CNnUjiB2yr",
  "key13": "5CTuqjSWuHRDqr5ygzuuC7pkbT6LTpaateihGUn3zubYXxPmm63XzenUZkR89seCv8wKhMJjgXHqGfNdeK7MG8WD",
  "key14": "5GmPJkCHYMPAjh1mUmvPrWCqBsukKMZEWKYhxtT5sBokU6AJZy4Yjxx9tc5SwcGLjtfSHfSSnbUhGGzCu9LTSEYS",
  "key15": "4NCWLD9xqgN8PAHYRrydzrTUkZDpXuFz8FQvZE4YAr2S9M2ArBkp6tQHfQkL89diCkiDqGSFaJbW6Agqw7WAN4QW",
  "key16": "5JTRvWANdyHjPPbsGKiGFBgkodXoQjzb8Fre9NeJVi29HyPbYj7WVX69Xqy7QPNNukWf8XqzZqeqfo8NcRpdG8nD",
  "key17": "3MFqd1nWUCHs2CY8c1decBQCF6Ypg8CD5jcwtN24vHFFV2cQgM2qN3t6PNnzChhyZYFuh8ShRoHViUMnucCh68e6",
  "key18": "36hgp2y85p9fvLG4k1HdjwijW7ax4nWcsygrkAPhdknEFbfJuRKbCMuj6B1n46bTL7qdnFe2NegRXu3t9jiXfetJ",
  "key19": "37SvjTVBWJDchmp6KkqYix6EebSbEZZzas8KKPCdkEyfYwJn4hMy2gmdtM7RDfzij9avuiaQ16roUQmSYpspCbe7",
  "key20": "2grk9cw5p3WX4uAa7AmHh9Q2TTwDRpbbJzFrjQ7eH6DL1whVgabkH8vL97cJdZEu22Gh9ndrhzRMq3VXZ2AgmJqm",
  "key21": "ecT7tfr9LG17mxUUrKmWPi8aoZ2usfBUELhgNJ6qA6h4s3Hzj4tZK9vpWRSfx1GcBJPQXhhhe2k4fv4SgfMby65",
  "key22": "SGYKnYGh38AwYWynnJUbTQXqE2VGLGnQQf14rVqD54jodRyuV6psyLmDSb6NRWhcWu5R1DvzLb4bFcM1VETyxQQ",
  "key23": "4sBxsAu6dWyMGBYne7WcBWn8b2tWvU6SYS6ZKZU7ZC9bKJd4XhfxYTP5SFp8V1ehR8jxtiHw9s3m5XJ2J8ScY5ya",
  "key24": "wMhp1Aa2CoGAYYvFzYd5nCnhEDvW5fAw5tbr4DZ7nVymMWRQTgUPCSWYLmQuNLARjpbJQgMyj5DXfReZeXFKVqn",
  "key25": "3rnKqFVCVHPue7ZmmZ6AzyWBQcBZrxinUUtvPinTvtyJ6aSy62TnWuBNCB5UHK6GAmDEJ2TNaSQ7KdvbDPqGCqjE",
  "key26": "4WxV7XBvbMkC2sC5cVKuQyABJDNQPEf13oUurF6FsXMUjjgraE94VAsPefaj8qdUk6XaiXjwaafMzrmhR8WHPphH",
  "key27": "dMfbXffTFH4izznBDTauiWiyBHx7ZFGrwm4jiu8YQS5DBCkAYSDkT4D1bvsMbbZBz56KwmnBesGgHbpskvLmfsV"
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
