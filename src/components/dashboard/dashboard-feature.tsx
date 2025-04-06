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
    "3Eh2WpkH9YJ1FKWYX7cHVxFCvDa2eS7TM32UYvX2gCcNmkC3wZ8LwzJz3Z2HdHqtGmdBmxDDDEwpZ1XH5EwMYBTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbEKSdjsSsh1ZzgqY3xnKmepr8mxdFZVPKR3GQfQyFfZW4UZuztvoHu7TVbbRytjrBPuiQCPha8MN35HjGunqXi",
  "key1": "4DHCTCBNVSNzpwRShLvH3NGHW5cA83ndbFgK5j6a4RhoKrrVczFYgDrrycK7yhumEz3rU7tT6ZhoyGLM7PTZjTdG",
  "key2": "3vV1kRGKx48SPszFb5yobn3da4Q1jrhat8Exbxg4DgnVbPiZvTrAwrmHrVRCYxtmFA8ekkQgCBttcxXn5PXyLsMp",
  "key3": "2b4chGpAR2iawXMnVYqtcZnWbTGR1xkY63grmTVzCUSVPBahxjPPG2u36yuJXovrR21ugohafdSrE46UPP71gaEs",
  "key4": "jseRbrVb31wHhfjBQBbBVV91pvtXyvKHEAV2MQUCuDSo18ALJsuyv8xDu9VYP7RvJqGn5cmTo74FMDrMNUhqFtp",
  "key5": "2CPkkD9sjn5k9pztyxo2pnpk7kogchjhHvNm7sTAnWZfBYB94S8g4fi3msR4DTEg8NP4tmFtN4WU11QDTEUrmWFh",
  "key6": "3DdUUk2GRhjwJE6NJ4XRM5cc4gP11ihXjWdMjHsjv5LouyBCtmiY2or4QU9ZyaSLzcXfHE3C8RSQpZMe7vpXzPaR",
  "key7": "32MdHsBfESStmHyU9xbKPMGA92SBvuLzKxqVNASr8gh8pq1KTn72Mf9Fzujk1kK6yE2rabKyyUvwXw5pkvGaUdYd",
  "key8": "VwGyriJSJZuynmvr6WDfRtC2aSFdKHa4HRZtcKVNbuKGVpedwd59juBwUQdXbihT7Bf8ubrwaBp2UEB2X31ykRW",
  "key9": "etvZof7jVrpXPvzbreAYmQmt1gkmPad5xxjjrSnrMDzXEpFNRxfNVnxto131u3BAJcJ9fzjzZxrZrqhYZiGXfWf",
  "key10": "5bogjCFPt73WR1ybKFuHcmHzv3jk5WUs44oXT7okMG2Szja8DM2ku3qH3DLy5aMNfD4Up4ehJQB2gphwohrHosQH",
  "key11": "3h7ZAVAH8AB7oR9khvVRPxFSpxzHGYYbKEqCgR4mbAV5Rz4JXB239pnJhz3duzUG6MnSzHwvfcnKHNWgdS3Jv45",
  "key12": "38RF5XiARRVLDPrkCbDCiieT1zLztHuUErKr6goHAEmGUKKWaQdah1LrLV4QhcvZFnghXM1gMr1ncUM6SdEK2ga5",
  "key13": "WWC3CcBjFoJytVPZNEx641dEFbeVk3E2Yxpfb2TNWPDGD6XUAbcT8ia82R8ivSbkbZG9dMHy8afTUsA8pKWtQ9w",
  "key14": "mgfkWVtz7Ys2AtD32cCRo14eM4dddCC2zoc6VfhhLNbv3SjLvPRWQXf4edkfhpENdumbJyY1BVGRNHbWtc3eV9w",
  "key15": "3SQDXo4EmCSjvoZU1cD5kimUkjSR2AetEPaUA2nd53WnzHs2cLSVRryU2JyTdEdZzcx9dRypEC5uPNtEJXCV4Yxm",
  "key16": "1vNwDtds8bxh4m5Xk5xxRRFvD7pFWcDXTw11KyQ4zVcbv86qynMMPVZgV73YmAC22K6ww2cV2JkoNqedRCSJxAX",
  "key17": "54G6UeTtvc7EC9AifQNrN7GgvS8NrVZdUxPzDn5Q2J22zTGyF55VBMBaZi3DyrjyDWwa2jUPDXZYfaqRpy4szexA",
  "key18": "VxVJJn69QENMid9jTfWuahGojPiadLS8CNuxqko8KgcuBTZEavn2bxgJhdU5jgq2ArSkSh6vqo2USc8ydUVZtLD",
  "key19": "57pSEh8ddQnFKDC3d5gUjcYCusHrixHeQVaELuEYDZJ3Xs7Q1jSMwyU6fLPWx8ojpSwn4fyYWunNChMbvZQg4wFc",
  "key20": "2fxDdPZAdXJbwqUngzCL8QRYLbC4ZQePGcQLWkM2b8rik7cuJ9pQ8EHGQmWigsAHyC9HqHkkQyVv3Y6gFK4AzHA5",
  "key21": "Mc15sVxZmxNufTrpxPi332L5UuXjndKhLyECHQNc9YtUhtVb16cx9pVgLecziqHRB6UBnhcc1cHpHdDbN2yPtmM",
  "key22": "NTpusDge9Ee1qczRkZCQ3LUTcVSj8i8KFey1g7LQwAmxURMGqXBuUwxSvb5SydgPM4HCTNKaJsrTkPdKLfvpgLY",
  "key23": "uyxmH9KrDHs1B656TGZiqvgugUxQiPV3SabELveGRQVQ1HmsuQdnbc6BJa89RMu9xJJUV6JNVQPPMDaBwUy6X9D",
  "key24": "3Z7QosifSw4jhVyqdGLETHMzj21t5iaNDqAUZwSrC1vsYZTGktGZtdkYQ3Z9xjWGZK48UsshVspGKvwY7zR22DYt",
  "key25": "9X2QqMrtSe3r8ErjEVCSDZegQ6vuCPaFhV18S2Ltzj2KSufzn5qcHgdq6ixHK5L3gW6ChC8Krh8Kd6qbnYf3V77",
  "key26": "2opDmFJGtnKMgUHB41KifSdoJFztXwEH6Tfu5ggMUuAnSFZfFo3p4xAUzZnRckMJrqoK57LrzibntDq4KrQb1Yn2",
  "key27": "5uZbsiBuTw3JzRgwz4LSqNjyGgXLdSCYQrQf1k1cDhuJVfxF2WBossjvQCiA3SiWmku4sYd4KsfjpZMTo6PFjNWE",
  "key28": "5PLXbBcreuMQYBo1rsVPgQbi74CeNDgShLQaUk18TYFAA9MPRGa99Tmyh12NwuoEqfsVpGDdxf8kGeyJyGozQc3F",
  "key29": "34kX66UtfkCqwTk9YiCvRyNpDPd9PkTNUMPsPMApMSUx3fVDYaCmXmktDhVvuuc9UfPYz737hGtX8h2cW46c2Jpm",
  "key30": "3eaAnQXcRcKDSDCzrWDC8SxjNdK3QGdVQQXtsWfa3YpZfKkQwKyNibr7M6mZd83tFLKX8afsSAWPn7AzLcHUWLPG",
  "key31": "s6b1FHgjLGqQeBbX2Pdn6y4ipDfVudZYYqNyUJQ8v1SKvwUJ6p94fNPbhaGfSLeJR5fJsYFpcAeX5v9KCXraE7P",
  "key32": "3JrRW2pyARjPuR6cmogGRoDrnqHybJt7LWtzFJ735h9oSqLLbFAhEgpLbEAmvdqoPZzwQwNe4XwaVU12UNQ6mb6G",
  "key33": "4KXddJLjbWmpLCHQBHysooC6dbtBDnJV6G1eQ3SR2ebakBrXQzZJNi4B2pS6aFrzUFkg2avyKCEEtR4cpPKYKftY",
  "key34": "3u311ZYaEMPyDXVLT42kgGCRUbnvRmcsMeCTbBfUFp4yxZdJHenP5eYwHuWfHu1yDP1FQXPR32W9v8rVqSPjuhWb",
  "key35": "5SQohdw9to2LSPpkHAVjniWBP7TSnwtMxnNUMZ6AsK5A3HNfEXJ3b8jswyN6tqWfMyES6pFLwrB9zwq7uKmcSs7Q",
  "key36": "44cVkxQLqoHAZLECfiwv6Vp8cpZik1HxhDai3BncyTMJ3Bgw9YjkoGgmzLQ1Rfybqia8Rtqv2JhWNAuEpsSrrnhp",
  "key37": "3WXGu8os52WzsaVW9zktPHVrQoNUgaKCGkKRvxiqN1rBorwwSDwkoiYDGVLrN9wNAvwDkTDpJzuDJsn487M55yrT",
  "key38": "3KNNhPSDeDtdFNFsHMGZGZQt1R6hWgfc5mH1Fa7T7QbjcDjgxYn5sfBje6KqfaP6Q2meKpGt91gCqVj9Pk9Sd6VP",
  "key39": "5VvEooHqVMA2QdASM88WVyGEbaVo3RvvV19o7z8ujq6R5knUpxWEMF4eUoXD1FCdZ1jo4hB5kwqXXDoYWxE27uBR",
  "key40": "2jybnzK1MrU1ujzamD21GF9Z7hJCUhQUAY3doYWpMStoWdhh7CJ56guRdWDSbWhQa25cTV1633FP3xf6djYL6aN",
  "key41": "3tJTZagyoVLaXwCTi4vuRQaj91aF59CpHgFzLBYnY4PjVrV9jxPzFbeWQK3DrZqamHHUWHpWA16xRFEHrPasqXAz",
  "key42": "33QwVRhCw6qoLANdHEk9kGuieEMzcBVVf3Fm8by9En5RZG3CY3vUtkKyo8GA8kp6rcDCwzNHyvcz1cqedHHxmUxF",
  "key43": "2rUrdHtYVHMqeyaDU1ynGmF8P2iHDDQm1CGHrd7gzkTdk54AwrUCLjwLVQG3P83iMSh4CQRq4jP4gaqBLKfHBpTa",
  "key44": "4eUpKBPPtjayXhHVY6NjYYfLuhqP63YGMMbyqrCVf88Jsf48WzwhKjWCMKgDskDJoxJ1V6EBuokdXo9tMVMnG76Q",
  "key45": "5qfsaksVgkZDBuKAMRSppjs1Amqq49PCquRw3nVnCJsLwMJvwEqcHg1hVFSsq7ZorfkN97ApFVqd6MXVAfLapC3t",
  "key46": "64r1rMxMkZXaiXVxGJYwyipU1dtRjKPkve8RWys4rA5TTytpLZ6KrLoi69BmPRVxLBREJiEhFsM8zNmSTfGmZ2EN"
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
