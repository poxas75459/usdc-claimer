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
    "4dcRmRp1hD638LNSzvE3jfpWj2ggfRmMPYsfSC9dKQkBtRpUizeBXeUurLLU49AASeEh1f1tGDqJQrGFH8L73twM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgsJ4qjDBY3Qiy26mx5ZtumLaopKCC1BdSfumooL2Vd6ivY5jP4FjdXpmhheBV6MX5oik7u4nsrXf11ScB25mWD",
  "key1": "5HZ8245yZf5h5VHTkJxndv8kPj9CsbtoCJ3XwVHhAmQ4RUe1zS2FasMhZE8v8rdSJebMa6rgr9EDVZkoE9iiRQxD",
  "key2": "ZDyXP1hgiaS9ZHQSn6Rcw19rgqgdxHxXjk9Xd567YGD3zAeLK42auJXeFczUcpiigeZPNSqbErZ6xEoW7WqQ2Ka",
  "key3": "Nr96RguDJfC1XJKBYYxTFkPfXn215Tv4zzzXCu17Gjd56yMEwNJRDA2dzbm2ufQHAxqe476Cu3gEd4rsVbYyvtF",
  "key4": "49fGtVhnCGypieagFotKwsVggijgkAd4WPoHgJDa1JAK7UwPHcoQXAntjZDfLhWfcbMe7pvV9sSdshxi6DZP1GwN",
  "key5": "JvGszY9uG2sM6Yie9GdX5YtcnztPvthAFuF97BPwbA8Ah2HvaCErfjK5ZiEKrStwSEZv6tBgLiG578CDWMAjFXk",
  "key6": "hbMhxiLGMDsPXB7PbpTHDL45twN21tmEFrgNWBXcYSKYVZTb1GZyqLgjrgQ2winWXYyw7WN68h851VH9VvMcmJZ",
  "key7": "2E9pPxgdnnxM5Kjq3Tvv16v8pq2Fegg2aKoJaJfPTFVc54CgH6o9ETBMGW6GqiXVsatkk6D4moyjEPxDo8ZSJc8f",
  "key8": "33kVZCyEUcsuuyZFszMRYm6SgSrdGKfKk53ZPP7UaAyeTGJNjcoSV3MNvQYyn5LZxfUT2QMSNJ4rQfmE7z7UYjqy",
  "key9": "3hxBguyr385gCyy55YqqCJawtg7b1VwEzMn9TV3MSWHe6qowswQKCFHP1mh3tVXJAF6kHKzvG9X5xsCspg4uFfse",
  "key10": "2RwR8ki58DwpXXgDGyuCvim3jh6nJmWbUp5v4stjMykybUMBrpUxxZncB9eT8yqcjdht4Msu53zzNN9NW5gpGE4G",
  "key11": "3LkewYfwmMNNU9deysTYM2dmEwc5x85X458TpFabgH3ewvSCmYLBtiHrrix7YF6xFfgwVt2WmkcuB4XRT6Uz2rdP",
  "key12": "2R5y46B4LP3MLLXwtkLzqGXjxKLfvmhhTBQKq2TNXmEGKVBj1aU1Z876r6ytB4qe1dbKSJxsQWGXYqwr5ghhc2ip",
  "key13": "5rrG8yKxrvixCFAZJKvh3t4rypQ1cCd17UHSRVugXqzNKi2BvqKx8yQursSghs8LX9oUAbU6uLLfjkcZrAxQ39RG",
  "key14": "22ghMZhGXZWXcRw84BssqpVDYLVUyU6fV4nZcikacP7TABsWdqtVdzzmbJti4dwZVQp73FwUzZpBtLVzXScr8Sd5",
  "key15": "2m6YSkwapf2c8KWtaQDh3oWLQUcMQCzhGu5CJxwK8sNEK6bpRbNGcnBjFnCnzDo49yvqTdPDXY4JoW1zL45Tqm92",
  "key16": "4eTVHnipedLaUYa8ZLuE7MkmRCZqcNShouPQtRNMiV4i8Zea8Cs4jqZgEYgPPSioLEGdz9k2qGT7bbdoVTyCqyJT",
  "key17": "3xFUEe5F6y6wbN1MGuCBLe1oSS7ce4DRyLrE492pYs73CZUomNN5gWyfvsUu3dQYSyvTyWZFM7kkZehu28Es7XNz",
  "key18": "3SGE7oH6QUroH574HvgRWpvUNfTQiA1Ueh5pew3MrqNZLQh5F8kFB7jEJQcWbCNRHTYyrdRA2vfqdt88uS4vWTTX",
  "key19": "28s1ZUcqvg8o8sgZSkwzC1mSyTn3vrpBLrvuV57MsXdiCX7yXnLHi4tvBpQpDMks7psM2cRyUjxx7BCQX1tNwEn6",
  "key20": "4ckAt8tPckPezN2aRqHBJs4mxnGeKYyiiRu76yLWP87ZNWKeN9hEotCH1MFhyX4tVznh4cbwd8BQ7D4UUnfJorKm",
  "key21": "2wmTyMnt3X1ghZzd3YTEMhFj7aKusQHaYjosjknxAnSxxXVSfRWfFTYBmdU9zXDepMUwrW5FDguByWSpmZpMTcwi",
  "key22": "2b3bT87aqbigo7xAhsJ3ysLANz6fQqVTV9xkDFk6QgmFWuKRVqhrWZgLvsuS7Ntq4rDxctC6ekUuN5wK6RbLAKWF",
  "key23": "4grxFdyeq79ncQHwX3GYsseUb3kNubwwajXoKxs6AdzWm6XZyZmgvXXU6cPJh3Wh46JnbKvUTU2AF9jwaFZi9gvc",
  "key24": "Jg4ptAhSSXd8uJi7yp9wrtLe6zBctD8X1NYCNTKewMPVfhrDBcK4eMJjeMkdqmzHVBxfwc3byy3V77pRXWG3DM2",
  "key25": "QEgBWLa1HQSLbuMdZmhZbqVgVXUr8w9C5dsRmXXRbYo5je6xP32ePxq8PjR5pgXPu2HCZqFjTANxYoLz9oFx1Si",
  "key26": "eis2i3bS1FENTKjTKEsa1ZxqHqj1QQ6qM9bZcr8o9i2o31J4RuQQrYZGmyKgTsMUGhpwiTZZp5HujZwQ5RFBk5f",
  "key27": "4wAByHzEnfxpJcZEjTJGi9Hy3A7PjZCQBsB3wbJur7cSHsifkzfQTPzaCCsXeWQa8uA812f5y5v2hy8bcStoJuHm",
  "key28": "4pATSEo4DevXMsg18TVn8KkyVmkbv3kZoneuB1qpHYEU8EK7fabRfpmTC9jjuC244hL8kvRfx3Q6SsdUmNxUU2tn",
  "key29": "5axHJdXjVrMukMDgSv1CzhUBBWAe1P5jKdaaMjCDuHDNA62XgX8UCYfUA7GT2GWJqa64dZF2UQKHiGAMfz56bTMn",
  "key30": "5fH2ron3Ds9iUrE9RktGdTVRZSebeJJVmk8N9Js9j7RQTutc5BMGdqzAdUQ38ukpP8itM5JKJo5zZRC81PwJxr8i",
  "key31": "uf7ErHjBcQBkBUAzq1zX8MJv8fdrRLPP4HvXAG5hjeWkY5vL3hkHtjqn8ArWpCorewW4Q4cJoNz8Bk6qQXrXk7d",
  "key32": "3jx1EuovFffbi9W89VMV6Sf3nYaKDYX1hdaa5jV4oLY7ZvgG5zGZs5WUqhx6HshxuFr2c1s2eCGUHmMQRBfV4CSs",
  "key33": "5xQ4LYBvZVDCCAUH8ogCoCyoTYVaof2vN4bp4m8bur9kyfZKBwiKLUqnaLndthcnRwo2ocJsysdyoVTxCf9J58Mk",
  "key34": "38May1fYogVuErppdkFhrscJEHLccduRM9NJPKsVXFMREy7jxjzVZCLRdL3QLdcpCBJLhi3CRtY7v37oM41ZoD4K",
  "key35": "2XZzCs213wW6XdSP1AsRNC9HLZdxwA9dZY5nmwvhF6NVT9UuBLbYcmHn4tpxbaxUPyc39DyqT8ehV3fWec9fCBC3",
  "key36": "4xfgUPEgsSuAYXn6baNb5yscyCAyWzG64rodGjB1bPZWSAnFqet1B1ec6ktNHuzX53cBDBAjtjW1HcWgfnDXNu7X",
  "key37": "5QK8tNWdE4y8QZutiX9SrmnmabihE4sagur579zSc7246cvP8QdasVRqhJXCas4qKBEcc6i4t77usqK8mgaETyhn",
  "key38": "23QqAKvZQyqUwUzbpS9nnqP524Uvta6iVPQXVixJpF6qcSBbg1CiD2rdNpBhz8dwf9RBBTp7Sa3nLPgKSuGVaiKL",
  "key39": "cJXv4X7j16x8aJ5hxLWgYYJX48sd2fAprG8LoQqxtpDfHZ2QC6939MERKTy9xE2ZBWUs898EHByuvsoC98sTQxj",
  "key40": "2YtBHPgNDf6tQGuGAtrc5ckBUZePLigVezSGv1pzSeG5Lq1x8N1mX8gtKuprkiD2pYMTARZx3HEPUARPS5xVXEnG",
  "key41": "4LTh2XPLwUdiXg1hyZyKQxUCnAwF73Q8cbMFoeLwMrKxXsCac91SRdzbsMDde97XF2BNaLrt3FCQr4bL6vp1EXo1",
  "key42": "LQpm6E9RmwnUG6uQpmiaXKJ1vDLAoqzjHvPC2c7xxE9CYUN82kBj4VnoykfR6dfurvXcP2iNiCF1Z2TwvhcX9pf"
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
