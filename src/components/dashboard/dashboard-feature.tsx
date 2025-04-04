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
    "2itd5CcbapHcDj4W2ULpQ3wVDz4nVdYSPh78yvCjxcehzTK8uky6dVkMmd31ohzQb4QBtrJKAv8X9zBLX26kJ4mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTfbdqzviCVc6ZunY9xBcvRXB3RqY5GhPKyy79QuatMALzdnLcZy5nUyZdAuuoifi9ZsfKJp6E225Btyt7UA5Xx",
  "key1": "2mnQEeG7HncBwSWsD2yRVXGukyAJdjTf594SHWG2wBr5voUmNveBHkfPe9P1DBVkEoiM6ADcH6o2icyt3u9xUD5X",
  "key2": "4T89vxuKYYJFMUm77csZm7oP2QwajfA3ZPMRrkrccWRwhDf1qJW2dFGMgDYFarXh3V2pncaWYH1ipQmmnmF9of18",
  "key3": "5caTXnR5WabpDhpnMAtj3VsAByPKU7Q5e6qz8LCEPTtLnSiEp4NeYJ2hvNsSG2tEALviH2QbLD6Zw1E969MrBWF4",
  "key4": "5dtdKRsV49EozDFccupDQ7zCiT3e2cQyQTsUZW8K2HdtVc9McGpdWBGM2iDwr1tSHU51XJPu8eoWhU3bPjVPXNKQ",
  "key5": "BpNELeEURKhXE4iSQDzuekLgs5d95BbtMaUNURyShbwnRhzXhP3fqm7mE97FXHqXrXSgzu8bJufy4zR8B2GF2aX",
  "key6": "iGhaYSsE2pjRrwffVs7hZ15uP3AYgPxG3rJ3dVziehGu6UmdyrJt3opP7P91wAohP1snmfQxLGj9yTERcaYENFq",
  "key7": "3vHesYCsuxNVDwJftJfyFckrnDZ3UfJR2FsWZ6suDipUfX7nBKu2ufi6hfMNqnrJTkEYmgoYWv8cUpSpbE2FaFQX",
  "key8": "4Cziqd8kVZbdveYPQSyFDcnH9kUrYDYMpmpFbgeJvN72DEkq5HGEU1LFvwfYbF5VGp9M5WvsjdoULKxAPxjoP6ZB",
  "key9": "oRsqUjmhpvpWDDuGyBd21vZRntPeAWcLU5TRE5LVtKGhciL1frjdDeKyGXPWnhRrw7CjJMVwRQG1vgzvmCyU643",
  "key10": "u7L9Mq8Z745Vu587q9EEWGRFCpL859F6pq22DbMeyGxQfcF3BbBXMGfiKM6emksXdcoY7iYkVdzhK5mknAtdxvm",
  "key11": "4wuKpuHGjxHWVU9EEmFn3hoaGyzA8Yvm95nCGnNBtxqHMGPgLuy2eCCYstncfYvYm9ZCyK7x2T63Q2A9swHg3Nac",
  "key12": "3fXt62yBFC294J3mmSW5Gw4Dk8E3jb1shWUQuNGdGuiYieiyi6ucXWueBUZmkDAoNAN2PHBQckVqdZGWHLUSV2yH",
  "key13": "Mp7jWyWqKHRLoL1LxGqHo2bih9MrZuJggno5Ej8ffCrkF2M26WLNKVNYbXjuFXCqUcaJJ9jNCNbQKgix46VW8mk",
  "key14": "433iK5wURK4dbGc2rntzyDzThnKsRLyAvxLB4TNSTZBcDS6NtP1YKFLcU3q63Uuj2bKnMZz1JnKNMEJSapyzDNro",
  "key15": "344zWdUBtPTRjvSr592RgEjAt8ruQVCeUXTW99V35yWx6QS6SvhxzXKm9xeGjvTTkqRvPCzPdyyzPCiQoQVA6z9x",
  "key16": "2e4gFXWotGnAovhD2zbDcs6LEfNimjY6AuwMBtZWYitx9BY2Ce5ST7kQVi1K3temfcV3hTSjJcmBsoxbZtKMuMDk",
  "key17": "Ag4KRzKvvfbKvdJQFb8T5phNNcB6b3iKsgkfh7hACf5Sd2pWZ2kVH6bDJkjtx34XcQga5oRPL1YnGtvGRSse3i2",
  "key18": "FqQxkGnKuAnmnUDM6zGCVj85nDpSXXVyYfpisxZAaCVG9qnkcbNF2U1CqgNjraN6qjM77mJovgHEhhaRryKYciF",
  "key19": "2YVryNu1r9xjhgzjGGVssQo7xa84bZBTq1YQUh44B7m33YU3MHyB7PUiWChvEy6K1PWDYSGgJMRC32GZSqzvJLat",
  "key20": "3Cf8mjyf4nbaxjpAkqodiTD8ZhpiZQiZkaAtU7wXdfwyU2xBHxAh3S68baV6svXCA2jV8KCgw9wLY59Wcw9JW2ax",
  "key21": "3CpvgxjUmv4Ph7ZnknVgGkoM7KDYDAYNPsVay31Fehjdkxpvabn3jMqY3Qz4WSUoAs6FaPJSuSYUbTcG62tcvuHn",
  "key22": "bxqEQYEWFDLAyrzttPj2jEXsMRwyaciHGvgg6c7zvH1g25ayMv3GPv5xskYGm6ngMuLT6c27Mw1By22c3uDKRxx",
  "key23": "5Tk6tPoRB1xYnacX4fdGJHZHxXFdK4hsbZZSyrdpGFVtqDcfBKZxmWTMsYBsW6xv631kXamva5YSng6nyPV9PJVu",
  "key24": "36uFZEpTNamznudqFEsuhN4u9KayraPxdFDAv1h9d8NcPK8dNQkY5sUHHhaxv2HyPg2xTEYqDimLwk25WgepgcHj",
  "key25": "292Yb7KNiALtWJwf85PSpFaLq8CRndL44sA2UE5wbNQxahkSSiRFgzT3biXyBYvZx292gMzEf4haW2QZvKmt162o",
  "key26": "qteEQMtLV4HHXXyW7vBTqNZKBq4k7subQQrvBbL5ds46HdkBs5gQHBYf4bRVHvZhp9YzbFKzRJpbGVmuBENmVzF",
  "key27": "538NAegozV8UE9TKFcYA1CdU2nosfi8STCTkXCnRJn6uSAtFF3JNfYDyFN8DKqfUs7zAFT3EngmVaEdBxHUTgnVY",
  "key28": "5GFK59xoQAMKqLXuCrxNgRFCQVGD2PGaspZCYQUHb4TaRkixhTX7zu4GheNU7GSLBDC8eRmvKC8JoSdA12Uy5NmS",
  "key29": "3iXvD5ibhLepb9vyijC84T8PGi2RGiXbjjDZodAxe7U1Ftj1JhHpGegPpXHEjsJKYb44gZzevTf5EuxQLWdH8M6H",
  "key30": "5bskzySNvJLYUKq9mcPWcf252BnzbJvMJA6refZt87uSzkp2iqSRcSG21ELeGoXSpRdKH6u3eo2Zw374cvRLousD",
  "key31": "2AYL9feAmYaaCfLhxBs232K4wuiogLrnz67U2CMMjDo7MMVAvotHZChJ7HWNyoiMNwXcMfbqKFVfkHEi3wjYoRwk",
  "key32": "ovn7g3dkmqTEBafhLaQPtri932UkdPo92eTomac6eJmBRHWvLFv5N9pLowspGPp9zjUWtgi9juUhQMFWjzdoRdL",
  "key33": "3u6hwAT2vSsxWCFue9SGNYdQiHrrp2HAGUfJLFpGrARRSbMZ5evz2AQFQUXApdGzf34cA4eQT8vBwqkYYX8Lzq7"
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
