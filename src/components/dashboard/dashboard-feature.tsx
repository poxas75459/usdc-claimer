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
    "5wSKFfiJUQG4EX1R72iUnExYfkpdUt1cBMKxyHoK1awsfFuUeVq7K5N5eRaDDGKkwgSAuyXEyKZdnpnYuwyszuwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VwFA6itYDjYhEb2xZSeYVCiW1cMQ4voxYbb6G9QpcTWHadr3fjf2S9QnV1iWugDzjJ7obWYqpsDxGEgVNohgFGp",
  "key1": "4Rj2eB6nGohgnZ4QxaMQuhqHLTFeSCCDoe5dofr43ePCad7VTt8ngGz3MBFaD9ALnEa6M3DUUueNsZC8cuvoDPYC",
  "key2": "3A6xUrFhaHpvnrv7hg41d8k9Ws2WqnewAkcxnD229YueDz8iZNWbYbWYGRPQHq8AYnsVsfRsADmUZa1k5fNQLfL",
  "key3": "2pcB1nvkwGKBpX12AAxXUsbRJ93Jq4jg7kzhUmtHEXXBbbk3WGKxbmXLdRZKj9esSuHqBhmJ1JrU1CshvKiY8r5q",
  "key4": "2vRFB4EgD8F6kRfFxaDhiP4vgAAzJGuhEBcyrttAQjyMxctETh5k835ad1PdgASzhN7yong7NjTdxSTA6sJ4HUae",
  "key5": "4j6GdYLhoRdVUNkWwLGaNLC57DLnXSRwbPZLgiE6c7TnGGmChZbCHtzLFicjUXuhEboxQ1uV6nAwajZKHMSeHo2v",
  "key6": "5ccExdYY9YooBrMq9pwKYnds5H35UwJHTLXZ4x62HKE6CBEVcBaxseUHe4daFpMnWzuVjEcavqx9SKhuLnsjzMLv",
  "key7": "2KSgToxmPwsuzFMPffNQDFCawopEVSYW7qxfnKy5WT7cQEQvZgXAiGZVqhGLibdhUJ7rR2ciMqRxakCUyYvHHJbS",
  "key8": "28ybRk16mKYMsW1WYWpDCEJaPd5Re4FC2BsSkn43umzUfQtysaD98aLk7aHNh4feXXCxgbuRDUHb4KeprXgsPxEC",
  "key9": "qSu39XBYzhc6t16Z2dq6taWHus24y2k6vMipErLUXHKdSbF6K73txWuUcYhGVc73oBa9jDoQYfVw7fZBJRSEn1r",
  "key10": "2jMu13AmUmH78zwWntscFuj4kXMev7cMLNsVxcd3px2G6CnBSFiTrS8h2he2rokST5eoNL68tiXW4dEx6pektZ1A",
  "key11": "4aWswXb7WjaWg5L4wW9mvva6f3puNM4UpFmLqXhzqqV8GApa31MENixJr7aSknFjbHnQ9Q2ksfkGFUbLyKhAcqZk",
  "key12": "3HL8caUvsAXBuYqLLtegFLYaCyVReGqmNnSwrHkigh8WZFCG3gMXNcxh7G2oM3TzH3gp4KXuasgdgMmvBGpWCzcZ",
  "key13": "4M3pwr6YjcC3XRpspXYZn8pQmWypoMmmZTm695oxzCh5w2kRbrNFokbC3riHWYgUPFtVMDnfgujjJ42iedWKbU7D",
  "key14": "hm2EwZjhA46VJWNBSDaQNoHQQ7Fbe4EHabkVjd5sZT4c97yoitWR2mckd8DAdrmUD7g7ueKAD9kcjdhFzYm7b6t",
  "key15": "63Vi9zw6MPysiBdcDsTdxfw8xij5vq3VBr4rgK8nPUhGXfjduQDER1qX5aPifx4t3oG65t95vUvu6Fc7JejFdHVh",
  "key16": "2DSpyWpRX9MH1JVQWjrMaAaadi3GnZxjRrN7FR74T7u4nnVuipB4VF1xgMJfAjfmRun9R3s8aSuKRJJHDT6ZXiHk",
  "key17": "4LhXorDqPyznywvF2K1ixjw1AGJr2UQCy84hu4eP5ApNw75ouGFV5xTv9L6HfpYmEKr5qSWWC3fQTjSsXc852VmF",
  "key18": "3fJoip7gxZFLJjdfGV5mGH4Cvj8vtB165xe3pRFABSE9LSaebLbaU57Wf1paE159X7RRCMvfXKQTNmVroEASruWs",
  "key19": "26LSbzRsvN1CV6XTHCJa5S9tBUpY6HJwvTJaYg3A9Dbbq32Mu3mGh1CKJFG5TPwzvyQTSwiKd7hda8YeDmjny5nr",
  "key20": "4ePPRaHbr5YVz5k4GXgcjr7xpJoTnjQbY71WnzSmnqURSPKS9NwB1WjvTsSqM3kCqvgWKZ28JJhRxHyw81j3PBp4",
  "key21": "5UzsDL9QRKXswBRsZv6vUi7Pw8Cww6KgghbdgBu3t6Fwc1HNPTDoaXPJFuQA4kAwkhsxsCKFTQaHjdXSDkxVjnUo",
  "key22": "5urXiuRjTBABF11opfubNhzJiimKEPB1iLTB9Jir39EoZzLeamFME8FsEbj9UwEz4wLubMpNa7U6AVDQSLnB3ody",
  "key23": "3hi2SgBBv8ZyX81GD2qA3rmds1Zsfk77n72o7Dn8oQEL6GcPxEACoLPbaFktaytPyaju4tJjkB5qrth8RakbL2DZ",
  "key24": "5myKxWDjbyhcCKtrQokcxXxCvSV9FLuCWho3DUfmVdXGKhcKQRUW7cKiQzxVRo3PzWc1pSn8YkBu5b32Ygfpt8B6",
  "key25": "5SPext1HmCnFfvYEuWuwtQN1auANhA5DJsyLRXauvuETPAAmm1xsmWu9qUssgDoQaVPuh1igR9icB6UfMFRqcBTX",
  "key26": "4zyhYrUKL64byFvGfjBMfhb4Cokpg77UeJNteJicpe6sUygJfSVKtAKVjwsbKRgJ8bKpUNoRm7vUVrwWx1aTKPyV"
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
