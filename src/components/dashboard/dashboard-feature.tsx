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
    "3AjGnUCRqk61sYafHqNeFZB9Whe3Gu1ibmfMWbQawwMArEk1n5u75uR75GbFo8yABJKrjs8Qq6xGMGFYJmLotB1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2N7smr1UigbW8oHBFBCRpz3joeC1ADmvQ6mJKH2R3Y8xwq7tphwyLyjB9axs3tKW7ESL2Gc7bvVNsEWptm1vVp",
  "key1": "3PHfNCXAxsv1yjMYKnzqWHXCjx28M8dxkNA5zSGAPuusuAeHBYpprDe54dHba5YCPayV8yh9F94WnWL7RQB2oy2z",
  "key2": "5BiWr2sBF2BBzNXEUVbMMpHcrxtfJ8bcWkf5H58eaXfFonHb2TkpK8Shesi6wmDutUyhR5WeXvQNFxwdEy2trEnD",
  "key3": "2BEYuh9p78Rcaw9HkKhMFGAmPHCkTb3NqKztBKespfo1P9zfUrz6EDp6QosMoXAmMkvjsKGQ8hb5c9U2FcofSHUx",
  "key4": "XaELaqcVZXPjgSsHb9aVff4mkVMT1ArJCPxC9bvevYHbKHUpRft2U5DiyvDNu1MY7y5hNyfME4ERvFStbB9w3Ja",
  "key5": "3JeZpVdg8EmCTz5F2xEAcWUA9QNCnkwwUg8ztJF9GNFQdCDuw6KRBoJCLedugBuvuui6L5DETwtQUDMWfVQB2MkU",
  "key6": "54L7AC4jn6yJU9FpBXS52RZREUvsoJUdYSXJhpgNxbdDAc5QUfZyWdVwbS9YEdcpZXfsNUHnYQZEWEa27NKk97ab",
  "key7": "yL9u4pwqh7PTvsBEXvDJcgy1KiPuHTak6EPVV8RYYP5tdrRwBg8XR6uhuvXU4sg29bmAjhiHy2ui6yYZ6FAwwkP",
  "key8": "pYcGZeaGT9iXc2TG6AKRcXZYMDih2yr42wqc5hVuy14ra6VPg7wsnfnVsrA8PfhxNHNNQL143g5NjvYh7v8Rvt3",
  "key9": "5z8gjCJ1Fe9E9Z8H32TTgKXKf3ddpCBaMJtXTz3fFjzUgFhLzdn8LiLVUAhkDHihXccqVCokATgG7i3yhrdMtHZD",
  "key10": "48Q5BgMVzZ2wdaakeAqMroiVvMPJmnEqb1PtzAMr5yJUJ2X1JBrVxFiXbaZ8YqWQzmgviToCdJaqLY4h2dMcffWu",
  "key11": "ksh14YPdecLBwgC4KwCUmTYSWcUy7nUvrGnntp7q4dsh7kR62TEsM86KAWLxgukfAbbL9ghBrAEAL9gsae7wVPE",
  "key12": "oV4EvUdPLrmjw8KkUyuaC6ACxN7EchssFgvsBYTHo4G2LjhMKutQhkfwiEvm4eGKd1RBnGht9KE4N1TLgxcBpA9",
  "key13": "3SidysshVWk3HPJNFtgA7ZYrkNdrUtUgZBXY6QokCYQYBDiHDQBsSeEMt2w2dSGVzYGvBMBmcFTRLXB7GDzCXvre",
  "key14": "31i89fYQuvvHH2ZmQr57QFX1WD8t5bDrhHTfFeFYDtUQ6yosskdoc5c9EHnYUurxAewysdghNL6xywAfGanq1tyG",
  "key15": "5UMAQUiBe5YQw3kTyvBNxRtcXCL9a5xNQhA1XiuZpqNoBMTzbufgM2Yqs6VwoxFdNXT8oqtZGY7pQmksLHCLGXMv",
  "key16": "2PW9eanw8cPN6f27pUBGfxHbLqUhrfmy7MyeraMAXD5baDwszUkKEce7t8q3BJBroz953oZRbUKdpbHdBeGANE9D",
  "key17": "4FyqbJiC3UTgDHxBsbHjTsCSS2NWQZfwbR4vXcSbX4UPYLHyaHpVg1GjB9kFTEX8xLssQLy1VxSdGDfvyS5iPdtm",
  "key18": "4H6R57gCdQpzxyk94CpGGkeYukEaeqtRhp7kSwgpRxfgYfaEbK24KnuUULDqitKUNTXPRuyvhxXNP7Wc4LyyrscE",
  "key19": "3xERctxCHQqcA75dAxsNXzT3tJEjosDRbgbcWYZcdi9NEEcds1C2SfWmTjjKfNnTGVMKsYgaV44m6MyYu5xiRMz4",
  "key20": "5ZWvjmSw6ZdfjTgWC5LYquaMer4Ch5dAAzDKybyKxj4UqSyLPFzskd74vwu845CHTn4H197fhEChUGHhjfPRu2Bt",
  "key21": "2Ds143Pi3FJe6EWwVq4ebaytHqNEWgnWYEuRDL7Tnsf4U8zu8RMpVZiATF9DF1u6vt3rNfhq3Z7BnBAB7DW64biL",
  "key22": "44dp5KifHz42R7Yjym6bxM4ePC5V2i6zNAcg4jJ6X3pizMhtUKzxhzuF3qJirxth9zFjhe3zsr5XPnSwCMMyz397",
  "key23": "5Dm1sC7dTKz7ZTgZRyLhoByuLJm7FcsowCh33iVpHxRycKLVbPcajDxZ5gj4ZmifYNNLspd8SxwBJm3bE7Rzaypx",
  "key24": "3YEB3z9Yq2N5jBe4DFfmqt74L3RBf7DibEAs5X7vMqEh2x324vWcKK8v1BMMqtZzyCGB7Ph8zMoxoAKKzkrhoQ64",
  "key25": "513QBkGWoNHLmnLJUpQRsbdY9mNasZxLhTe172Hn7trBhgoA38hqZYc7g2pVz5V5qxS6tLdLGcuVMsjgBp9AtQub",
  "key26": "3wqmuquvts2M1NNRd3doE3X1uxbuWEMFHQrW2FVS4h5DTNUg3X2bA2ZcfsfVMsswy5NJcsGhZU8gvxnS2tVmWAhm",
  "key27": "3YdfHJuPJMKL5gKoEnE9QC1cc3X6bHmvqapnseZuTyZsAhfL2eET3C1CLjU374rDdBFFvsmQ7waTw62wjTrT73am",
  "key28": "3nk4cJqKeAiL4bijfKuZmtKQvfFoeh9x8GttJCF2PtUVpgHuMc4fqWXR4DrqV72y2aGFJGavSZvw29mEjYoyJnsY",
  "key29": "3w1M6EKbCU9jbCPWGVNCj2eBJvRidr65sx3tUEQzmCapTECuGYE7mDqB9SzoGDrww861FRfUQVnjnGzn89Xwdkgw",
  "key30": "x7eY8HfYBuRWanjKATz5frEMiMbRedbsxSSk9Qg6h24BJasU36TC2MMws3dv4UmHv5Eink4P1KLN6uvAVaqnQL6",
  "key31": "57MKV6ZrYYJiayb96T3P6WrVqJYe53jwjAtKPdXfZwTQZZ6KaSGRG6o2vSKa6eUQ4qNDQsdjyHxQRzCuekaBqGcE",
  "key32": "4Zn5SwCEqk5PtVrJ956XRgsETPAFBVNxJP9wywWfTYR5Dyi1gMa4wbtV8QryA2s4opoV1ngFuFPFHsq4taxCpNEs",
  "key33": "2AWMqFH1WAn29QpKmaEmdzypcGsiHgd8ahzW6Cdrkw7XeP6PnCXJKtWcqAbed8Dp3DbiTZZMCTybzhP9KP1CMnnW",
  "key34": "3EUdzW1wsXXAdhSpog8E2o7um5Z3yDyuf9Ka2xYRKpmUqGsMm5wAqU5oPHnDaG1UP3XqSNnzNeQGR5Ciu9CxbsQK",
  "key35": "4WLTaHyZFir5Fvj4Y3hAEEZPHWR172H89MsZ2VUU8xFN4oDEkMtFs6iQXJa9Yx3PXxHHT1jRf3hxDvCwJtcLChNr",
  "key36": "2M4VBspcUB67L9caN7NA7Jx5VLFNeDxCSVU7GGQavXS83odMXJnzuaSyJgwPrh74VYVDgLMmZsjhYH3FpEH2tEFJ",
  "key37": "4HhPooiXipUsn2upRMra3HzPoJKHT6FZ7cDmuQEpDKAupZgn3aWZj1LB6XFWfoLfTBL3KwnMVmji5nC3jtigQnWZ",
  "key38": "3Xk1p1vXP7nFCBUhAgmJMJtRF5uvr2mkBkUw62nw2LmqgX4Ny5rymdQon6MLAsB5ieHS1dk9aKB8CA9P6MLgvsfw",
  "key39": "r2w7nbT8r66YGqcAybkYKAsqfpsf8vnn4BE88EZo57RrTuQtQjNiexvC723CtAY5DB6PqJ1AgjvkpsYGvNv4UB6",
  "key40": "5rEsywJmHX9QtgkipPbexsxJUBVsRLG61QwoqWnnw7uSegu3n5kdnfN9Lw5EMmqawNLnfHrQ5AjCjNeAC8pBczbX",
  "key41": "4TiAAMF6io3ez6r7163QymbUW8ciENMkyzZuE17NRqGdFv2qVGnjd6xS1tap5oVDFt5zFwPJKstVfJQgTwxwYLBP",
  "key42": "5RsfAAHbiVejQFGLRuCGpToxATZibPmWnqWdcLyE6DxUE2dfBi6JScTFChA6W8A4tYEyHj6tqu2bPsfmfpskH2o1",
  "key43": "45pqKGDsgdqaaLKPPb7QV2vgkEf26gxAJ9K7d4cb4w6BQyYVqMdydvJnBCJPevN5jjDxBCSUXpscTaTRy5EtRits",
  "key44": "2sHxnxz18qEMakitgur31xFVL6AhS1rLPSMRkKPpM921VWRLFZBcekd26qSuKkAFkzS9N72JLcPxUe5ESPwqY3aJ",
  "key45": "65s1xYUUameXp9BfYCtpjXtU3s3i33ssjVNCcJpQB1HHmpBH42qhX1QwjXKAcm6qMfrpG22w2Tjf7E2PffyzPYg8",
  "key46": "5weJYwHJ8wtrydsUKps2bQMYmWVTZtBh2GVq4ZZkeTVURbgYNuCwUCfhi4zNh8tP4ng9HYrEptLmzFM5N9jLLg1t",
  "key47": "24ugoiwBai5uYTrEu6DRB9wySoW4Zub2xQWj9DsHjfeQxfJbpXPAWdKwsAgfLiLVCacoKZVX5HQjRVMNtWYb7qPU",
  "key48": "2wjjA2wvtxdAT599uvVXdAzs5SW97GLUW7NLSXeWGbNqhERHgGERMsQZ6MkdjDHnehvBcpH4x7AB6ZxwPGRgvwfF"
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
