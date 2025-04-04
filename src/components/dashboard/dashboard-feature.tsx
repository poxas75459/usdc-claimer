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
    "3SC3xiwuQ5mBFdUL9FTXYpssxpjuP4evTnJJRspjBYiMtoDbJqEfMBS4k36R9WHcucds3kWQXbzH4wgNCzGgn3b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nyeg88LHVTLVB5BDAALwjpbSHttvRoZQayouVcXJVbbk9fs5afWboMyn94nqGHwh8TQ1HkjZQMaJnjctDb95mYN",
  "key1": "2f4hyXNqByp1BCGJwyLtRrftbCH97WQZ8zg2W9zoR4jcon6P5Uc67Tui6mDsmHuw8CL4JvAF2jF9XNuSaiuoc9Lc",
  "key2": "47wbCUiz8fKDoe7Zw65MaeUAhziTvXrHeNpfH6SgLnc1frLyJVFDTvempdtqJZi7o5eVaaxhV8Gh1hcvV9v8EuVv",
  "key3": "2WtvAe2MBGuu6xJgwcphWW2FjPNBNnDVoDeHJd5hR4CLowTQqfPJhQEiQZ3KXnLqjNGfa6E2sgg6nxAXcjeL6wYA",
  "key4": "KsAA3nMNZ1gf5GvhYk8k4fStq4JuNH3An3tbE5X3JPncyJuCCzVX2pTXuQrbv43fj51jXD8d5wvQb7EkFAg98xx",
  "key5": "5Ctf5KUmagjj32Lwv93Ffnj1U89UZEC6cdtX2rHDHbTbWQRzi2Kxp2CxR62ySTiDxpQneLwMaBtjnsxeUeftLs3C",
  "key6": "4kP8HRJZym3dSfcSXPMu17pbfq6mazDoc4z7vb67wzH4Pnrp72J2Y12jnqeRM3YwPRMrjFR7n9PX8rKAapWtYhc6",
  "key7": "3V1S2s6kvFBcG3XXkEA5rkj8oRTmpLRam4tHftWoBC83WgChEwqCFy8NoNCcD3WQWVDLu89LXTWcJaAWCixaP5sd",
  "key8": "3MJy93xrGQwcyetSQeZHh3A8nU2YCQytrwBieW1E3VVUsoAvjVa2BPLP7oefaFiEeX5f1WDjvtPtHa7HqFcScno2",
  "key9": "5yiwA8NUMQUBUvJX2DdTfBfCveAJ1pNUz5EHv2ukSbLdNW24yq2FvxLcGigwgkU1wNjm3QBjTB7qxHo7VgNqdxFK",
  "key10": "3j8afLrFq6qEwYkW1ch4cLTKXUYrqkYUfHBwhusj9FrKjXAWaQhAsCNXP9DqHvWf6oTy6TjhhCNDg75dW41rE8Pu",
  "key11": "2GQYFtsQ6kSa9FyBC1MQpYjHCmR3YrYWbWXrqZdbvhBsyfXyuhFoU5d3AGbNCfCfzFaNzwAJZxGHXutACGUbNgDW",
  "key12": "KRR5ErowTQYmV2Z1EVeac2ZES7XbdDEwnxzY33QXPcUediYnwUgd4YPVsxCxSGiWkUsCggBdGbHJrXqLNfhaxRU",
  "key13": "31vXxYo9Byb7PGvEXkkNEcRgaWvCXQ9yrTdiU6AQQ2isT2B8gbzAmThjGygo2Bog8mWcNm5TdVzVTxnNkgTC4SCn",
  "key14": "2YkhJ1hpFmJtDicQzTnGKLXoMB2x57XAvDo6oT11XryKUyqy6swk99iNwsuHogVqjeJcc4QXHRSZSxi8s7qEhMSr",
  "key15": "5LtvBBCw7vxHVRqAVsAQVaitz72ATkrgZvncgn1QXNMmqWcmrGFps4rdmB87ZALNf64wdxghbdYz8Extbn12iK8a",
  "key16": "56dnkips7J5q2ZqM4fiLmeF75YSm9J52pVnSQzQFLFh1PgDadXt6bwofwfZ4Symf5vZXgcK2q8GAQYiJMZa7NN2B",
  "key17": "3YVYHp6SURgu3htj5BpyFTjmUWxtVbZVwAEfDr8oRyoLKFsHXxNJgdhbnLyQwN1ineRazdVcdWdFqufSLTpbsGQc",
  "key18": "4dnnzbLwNLtTbbCBzdjmvGo6DiJyxKdBXR5sm1DXsUWxoKxs93ZQnEnrf5ydp3corPz8SfFkmKcPtNN7ToWjPEpY",
  "key19": "3BFW4tnqcyxtuix3Hk4B22nnTaomNsC3HrtQtWfUtAzqRLXiuQBXyA5ibEhnPH7b5uTvUM8V79kfkVEcNUaJLnrP",
  "key20": "5ufcAYpRYQFSwFQ69Q88GUdzrA6jRzk8KiEbVok65LU9P9ShGxxCjhiJcbiTUGoStTktMLd9q4PkM3v1AWahadyj",
  "key21": "BgCQJz6fFj39ssrPRBEi5czEhSnyV3zAo8AytJApv7MVX7qWZp7G5VFz3XAVd5KD6Dc5Hz4gytP7DhYczBJCNvh",
  "key22": "36TNw8Sbq3t7M93ZXRvs1kL7riW8PUUYLBKWk5HQhUuAxEYUbeMygVEMbFPEa2nC2RDsrgkoyoxXGgcmpJHLv9nM",
  "key23": "5eRKy6pL8bWnzpJNVyBfA27vv2rGeJf4czyKmz7dbB7Kqdf1webvmH8bsn56vZYPpHY1NGHVU4U61Md2V3UezL55",
  "key24": "wsGoZ6zCCT5grhiuzhKtpnSyB6aMVKuJWyQMVGUhurAupYdurQsguC9ujcfvPnAwLGpCkjobzvNGVupozio6MLW",
  "key25": "31Twk8yvo1phdwZ319T6T1R4sf1JZqSHZWZyzYiLNrgMEh5GHG4fjGMMYq1DMzLH5yTDGGRWnRibQnpQt3yF1UyM",
  "key26": "59jVAoLQwXFHerqqkAL72a816waCAWHERUeHaSm8paaAY9r63hSEPskSS2NL1ZFa8LBG74SEWRvUhPkPNbLSLPkR",
  "key27": "qtFLDTEvchAYwzEN9gDdEsymbdhDemLmLJx2dAPWseGcNx9pZ2nFGnZqN9SKmZ8jWmBBSgqrTzVuuCJuSdKbmSu",
  "key28": "4qT85R4d53YoFk9RkCmeoAPgBVonrgFbp5UNNM9UmDEeE78VHfvEhxaxRk8JeGG59zBeZYv59TqKBFehShrtBzbJ",
  "key29": "35GfsLH9CUYSDDQyLDjwchB4AMyBRryWsv38oqCV6URZQh12csVfv79N65FfSwzSb6b2cLuSd7EJoWHXjirn49qS",
  "key30": "4UQDR5qkU6sMhYdj5dkcGBFuCcGmwdpTq581HmDtwqBAgAWvmx8aBdmZBEC1JndinshFMCTZ7Ab9CKVymYRwEP4z",
  "key31": "35CBrKV1MHg6UGVr2yCu7jdLN77XNEpqYHKtr4vySeJzXet5uGB57BbsW9a2XtTiwi7qv6mnwU3xUaEVh1UqQBW4",
  "key32": "2tm8RVHZvV3yuDArztRUBowbet7te2VniPnxTF2egnSX8vSaS6sBQRvsZncqXESTkqhhPv9wVtW1ZCv46DULspk6",
  "key33": "WcFvoWwTfZtacSjhKjHrCSaZR1tHLykdyDqef5XLyjAJdPmYW9ZEyhuc9LRmYsXNSsEtettf78kfG5xiar6NCuT",
  "key34": "21jjD6XwcruDZNMDxCW23BU3Uby1qNRU5g3fvFwXdUbWV4ut5WVBLZHNJCE12wKn5nGKHGHKhfBuTGXkYBHzFEuJ",
  "key35": "2W9x31KikGHYq8GRYVYu5PiL2Lpe3gHgQsWVxcqpvZbPfsiUcDVnA3Qkx6R7jwYPwLTHPWGaRJyGHvMyCiU3LJLq",
  "key36": "SLAZAWUaKqFj9S7etEaFRpAWU8Sj3eAZk6q1beCeyooq155oA2g5aqaVeYTAwnqfmmXzeCQGGwZ4TJxEGvNnrvq",
  "key37": "2kCimxhrS8VPrUWCtN7PDfubyq1NKK57oXv5vo2LQACJ9VnEbKSrwFmCvEUu7qL5H5AFXCBR8iR4v1gZhsqsPzKc",
  "key38": "5GfhjqUFMJK5ybDCvTjAj8HS3EabjCL5gjnNCp3QFvu5HKzX55QSQu44hyTYkeeoap5yNtdkWX22zAnDMurDNb3A",
  "key39": "4sZ2K78RSujYaw1rybj6Yzj9B4Zkyrg99vtbdjux5c3REf6uHJ21ovzhA7XehgTs34Bq6JkucD2jj5Bk7ea8bqid",
  "key40": "2cDAAeS5NHWeDoY6sbVhasfLYLtQVmURD9vzvYw4BhNjMA7V8m5mkbrVnvK9ACYAvVDbEMsDYxW11DkVnPMZpUX3",
  "key41": "fZBSQf57PZpSvQQ6LMyUoY96CvSeuhHL79bmGMzxp1t2NMkAtSV4acb9tKyTWixPpnA2GH354X2F8t9o2boG9mi"
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
