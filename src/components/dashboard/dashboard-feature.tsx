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
    "5U8Cxt9XcZ6AaMfbLHQsCF8ZXZ56vnaFRFc55CQTtEgdJjsgFhZe92kJ6PDX4PAc8kp897BadwkV7enAQ8cb4EdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ScBHQG3mhYrs9KBh3se1u1UzWoC5E65WTW5GGyStQrkHfdSfTtgXPkAzj2nxRPDa45rQpAddidECXVeMaGXyNJ7",
  "key1": "3YYWZA63q5TFd7b9H5LJxJaruSBE9m4DHgXTNT66zbFqWaHqj1hMyVyVwsKxZWryZxRAhoRq2PZxeVAQQqnq9PjA",
  "key2": "3qnZaoedquWXhHBMwzzLwoC4swSuToM2xf32AL6LLACx1bmCTc4QkUYxmHAXWvKJyn5t7chdLWyaBGsom9uxAwQZ",
  "key3": "36U47ZPEbA6UnZQZoEUtP3ep8uHoFnWkL3epaT34KvyJZiZ81TuvYn1K3CZL1qy6atCAKGMwZCUMyTacrALf2QyL",
  "key4": "2wcCq9HGGmmpWETCDoP2xC4h9zbLecip6H9B3yJ5e7frp93dKsuNtCmZjFtzNbQrk4SwHd55XyB27FAH2Jaqkt8y",
  "key5": "3QFyfxLqh9GNxF16dAYWq5cDaL6xptenwBJ38DyTUdfpGCj9SHS8VCB5EYk5bFiPqwUJ4WmAPKTiwq9DYEALJGGN",
  "key6": "2heji9VtoRKuu4FkwS8VC6C26VQhVXHudrpwvrZUqiVn6BJfs476McAR9rfGcEoL1xB13gHdCtsutTZhLwDr7SDj",
  "key7": "4svMR8eZ4nCeVKLoEqBgpDjM8z1TXdmChkgKG8wMky9KhsBiFAcTKr3mPx1vGgBcoWZTwTbQUAKw9aE7goW8tZ8U",
  "key8": "27MzfcpugBaJBJ7fCkncedHk6CVxjHNyu2FWbkr1WX1s3omwbahZuvi3DSXS4frSh1UX9VtDonfoFmmFNfHDf2sT",
  "key9": "4NbaDignb2roTBjKBWR7fKQoKAzVNqi74AQ472AJQp1Lc1UysTEvQDRGHGyf1Gj6PGVTHPGaQ5q3h5uk6y7cTcbX",
  "key10": "c8PAn3iwrhEhfhfp7Qeqmp1KM3iM7sP6xkk5zzN2v4DSsxnDezW1a6qJs9dY4bvTdejQm1FnrsYeApJpLgrYNiM",
  "key11": "5RHjSD5GrW1zWvKMbcWtmpTMD65gFBAnq9wVkE8fcciMfe2SHz7jxHiT9e7jkSvZBJTnWthqx9Tnw2U72ffepg61",
  "key12": "5du87ix5NRtioa9ppCMDESMAE1vtrbDcsMEhc8bGNKtoEtvGPiVyEcNkupTSFBp4HGWZQNCi3aqqHvDWFzCHDFFQ",
  "key13": "5ixzdLWtWocVzc47ncbJ9Gg92Wqmb21QsMqkQDLfiJWf14VyijuqM6RLiRiqt1ietBtn6v8UW2Hgss3EswHE3Pov",
  "key14": "4ygDdrkAewf2SmAqUDhHxTTvbsMgCs2DrkinPgEZN32goVm6Q3WLim4wLpSc3BeQNUUKM5HBB5WjDe5rmeim7TDT",
  "key15": "2sPa6qMHyZo5NfM4wRwLSjEK49ySb3oM1Lar8mnm1UoHSD8sYQ2StpQK6pLpC72buAuKvjtSivS3FtV6fSRu3hvt",
  "key16": "4qDr7ZZD8o7M8tYEKuiAqsNSJT3F7noFUa5aGnDBGC59Ez4shTRov9ybwgfKZKgVfS6mmeXN9ekEdnyNd87davJK",
  "key17": "uAiGSGXcPTVSj5h667TRMvB55LdPWnWAFqP5k8L54GbXqfkhzSXrPDKxXtUfsFcdUpvQxBrujAuULVWaFWwf1UN",
  "key18": "48gAKKV9CoGGygbv6zGF2j2d25ho1MEAhPnRZRPbLXSLn9tTn7Us4grh5iRMf9cPUz7AGhtNTcwT7zm5uQrUCTRQ",
  "key19": "4miA7kVLCMmX7McUqHw8nVWKfxRZtyVj23J7XyVkRaKvEMdvAw7hehALus2djMSvd14uQAVUrEYQo12cVh5TS7Bu",
  "key20": "3hjib5ACr4p5EVwbEQmA4f93tqYjG7Ue7AxQTHUoBykBVLyfLbUda9aQeRj2Grdwu6BzB8n7XsQreF5DdEvbVp66",
  "key21": "5gkg36q4wu7surbzCMND2ub4GoQu3GA9jy4oZEm3J69G66N969jKDjpp9kFJ1352WubjzMFhZbVLW5ZLyvAFZfDs",
  "key22": "5FfRziPs9q4evC3rwxJzD2qK8WBCeeD6aCviEaqh7bZnHJhYKj2NKq7veKU2UwguLwoJqBKnYySrqHUyRVDSNKES",
  "key23": "36SVB5dYWD3zvMtszZ3DRTXxFzqYVQo2SirGgSGCquL8bF9aKvtBF38HGvDPSmYtmQCtBBsHLrcYYGo6aB1183Xg",
  "key24": "3c42bgw896zXX7xa7Nu19ytbgRq1febvgfckwJAotmxMTXpC8rmxY3TpyQmy43ihj2aZgu8EM2YaKdNvayaLMFPS",
  "key25": "93opgP6iEJbBxnPShkFcoXbHYTcaZyQ52mYhNjwsxrqs9uLADTVKr2jprghbzcXLHMkWuihDhVKS9Nyj36ZMtQ5",
  "key26": "552aDAD6ZX3aRzEdJZ5em9Mt5G3efboQwQgcYsnVMkh2TAqCrUH59Ejk6yu8zui6VBUMQLmHVxyGLUV7DrTb8vB1",
  "key27": "2GR7ueTWe7CEEGVY6Q14t6wXcjpBSUeL9QRSyjSpsnuGLLvvWzwJ7vfLfUXNZcdSfjoRpsy3J7ddbanSfvUNBZPK",
  "key28": "5MTW7YBRkWQWqwHHgpHtF3Pczy9ZgsbpaUH2KDVuoQweR5hZxSvjm6tbrmZMbsezXDLWSRSr3BSkjjhhzzFQsruW",
  "key29": "3UQU1qie8e4pNAcHm1on5TVyzssYYqCAUxeosyTP64mhjXeD3FXsqQCchRzRFna8fWYD8smgX7rsVdCGCn2dZZUe",
  "key30": "7wj4i5HkbVNKUyzu5gY6BB8FBesVzowXfp843oeC4XHtDXsmpDuMBngXYRHwZ2McanEQetDY6b4UWuDzWrmQCPR",
  "key31": "3hfFAAGPZQ8LTKBrdwJK3h8CjVgs8885v8Jumiz4VTgfzMgoFb9CTas1RwgGzT5aA3H1nyNczfvTp2awhYiTYSht",
  "key32": "5GSzLwkdgqGPLjqcG37iMW7qis7gFa2L9ezYXsdi67gHkiHdD9norQqtsAvZphCSw1tLNiqaRgM4wngDM7ajtdWh",
  "key33": "Neybtue5skJQ3mg8VaMsGWDo5kXjTseYbJm1eej7mHkj2mqCgT849tvqCV7sTpwF7QWeP2cNtaRRN2zbi1GWLNf",
  "key34": "22n14muSQC5EHijC1SPzs94cFMDwrE9TYynsgs5JydQGWzo4ExdvJ4f3ua6mdANBf1mVcwaUXchZAqu9WdLMzvc8",
  "key35": "5tp2ygEkoHzngYyyTv4XF1PFY8qMQQC7pjnPWxExjcy3DdVDWEuUt6JXh3aJcy1eNKZ4rjLRcwtfnLWXs7p4JUM4",
  "key36": "4ahL1jhkPFcXax3PkaD7EHxaTS865yqoSojxVxMG3vbTqQr6p2cYqTMJCcshcJoB71UCkGW818nq2XivvbR6nzB",
  "key37": "4DhTZsKKeLUem5LKozcHSVevgi6G4gMsPPuAP8Lv5V7SBYiDTDEy3VVFHKsjVKCCVcGyrua6a2DcEmhsATDHQo8h",
  "key38": "65JQb3w1odhK5TAkuwfsEtAiB63ny17ycSm1tDY7XvsBqQAeMAxmsQWTKfDsobtcYaBwTBsk8KUr4sncusZA1urS",
  "key39": "4yw6BTZwzLvqFXLB3Ns3oNgDvad99TVA1kgRURiHCMvv2M7ZrSqvSxA4WT3gpVktgXTbubRTiGEoY9ED7Z7Ptq9J",
  "key40": "5kd5vv7WrRn8nwagiEhFs8i6CtBh6Xdao4CnPhp7E4oENJ24jNTpw7tY2ya2ASDZwFr4FqkQYMEzKRdxQnWajcUU",
  "key41": "wduXCYBwhcG2foPugaC1ZbJ3FNd8CwM67u1aiDvq2yNzesZRMuud1bwWjKsbNx7JwvWKDdK5L2ngnRLgKsjrznn",
  "key42": "36UcwcV5kgfbu4Tg5eVqwMfYXHToReVYkjnTgQ3BVZNXperDF2vyNBrNCiyqkGC48GtPNeVGoByr4pf5mc7YP8gS",
  "key43": "2pJhb5mcXo8WVsedfp2sbJh6kNNBTLeH66txB6xZWsfVdCTSrALxWR6ESWgAgQB9opS7isotmH629oVLYqBQ5Un8",
  "key44": "FzLZ7z1zHC8gxRQitffkg4tQAkGNi7Kqwfq7kEPYQVzi5aLFGuWztrHG65TWjwMC7Ygn1YKQAasTYEX8nRXYNk6",
  "key45": "UkFY2ajQsvMW6v71eyU4YUuL9spJrMgUWiNPaPqPLCiTwTeCry6prVfxiZEHN21zSx2n5fTfAHf6g6L6fJ1kHgk",
  "key46": "52TQfpffcaSPcaBfJ6Bxo1XJ8hopBaWBzMwQFxDvzRN6t7qkKM6a61iZWivAbpoFHv5exoM4z8ufnU4TUVJ9EKdi",
  "key47": "64A16qjW1UqCC6BQiDbeA1h2yoxPZcqoAjcxRUYKi4qSaGvq4DaSLr4xkbKsrRuJ6tKbLCtjc8EDwEsq9XeJgX3d"
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
