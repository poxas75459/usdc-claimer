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
    "2XYFvFfUDRPEL9Gy746LBFVSVy5aRusuJgp95E7QttiYDU14sCb513itqxbevG1hUfkrhsBM2DZ97bg7p1vFK6eM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgU1gkTa6fyJCEuQ6j2P4t3ojpgPnNTcga5mUNAua6vktox1o7rn6M9gyvF3hPzoifVt4Q5zt798BXBy55LMy2P",
  "key1": "44Q7Twbt285cEit1gexVRboNMkH5pqVCdeQsn2an3QRrejNUiVmFQztpYK4P2oMSmbmrBWzQ2RFQuKnouPwzbPDC",
  "key2": "3Qn3kVYjuWJoD39ccr7Lk9bW2FeW19RbBQvKi9WqPWx1gxGzuhyP9ZAJNEBDAPhHprKYLu8bUjLeFX3Qh4wpS2qB",
  "key3": "5k2kFgxKyLVmkL4CNJB4VEK5UomhYmTHioHERVCizT9Btm246keGs7CzsspDQZiJPZEDfpTtDrRTE2DM7YF4tatG",
  "key4": "32B7N3ghfs56BFJN6DRUQNBEwMhccVSXD1or214J9itmkymRoLYAbXvZ5wJevRTUmsWtAERhAWwxAxXppb2eTM3L",
  "key5": "4K2vahTBFosxXFCMxwpppKPY912PAUFxynF9zFbj7uVnnPzCQzinUNyerRWyUMUGe3U5AHUGbvhCrevyyMusQXNC",
  "key6": "5Ac5aFFjjJBZpiLezWXo3wPNeLsCKQavnjyY8A51ACXkd1ACG3381pVXNCX6zWsa72vJ2SHpBoVLYvZyy9yL2e7g",
  "key7": "57xc9Y7jbhXrjWKHjRCgromvVGUnizckHQGNBy267S9Y43tv3urv38eDLF54uxYGkjJ4By2cpYjwo8A3BA2YxsbW",
  "key8": "21tLV7hMencDpUj4i33aBfTNH3BV5Vij3yoFz4TnGrZq5TGadfcBbfiEStts1dZeVzaYGANr2PFuu1qieaU8TNmJ",
  "key9": "36MHdcHdfCHSdwcYGQQwakSutRf6hKbNtistFgzx9wqjmthS1CkR9shCgPr5KvKrTw2vbxJ4mNpShnqLcTjpcnHD",
  "key10": "2BVB9ZZ3AynzoAqkzVjdYtjx7xTas8JymXLc2n1KiJJYMcveZ4NJafC8BkJFZNi1be18WDmAp9qRz13dZz4wD9Yc",
  "key11": "4mFKxkaDjXTwYSd3Us78WKjxRjVFwLcrzaQr58pi5egkA6AxPowMBoxMufY9MGaBFLgwwK5nzeSbiWypGjZr5fc6",
  "key12": "nBhwtsxgtU175tMFoarUh2ict6fxcuS8JQStmNpnuSgNFceuNpssifM3jBHr2h4u1NNoFfWLWBQuUteDomDRbDN",
  "key13": "e2a63YZH62Ub6U8E5HHnB3yVbYrxmHpTKxHir2BDJk2YcYWbJ4eGdHw8zAXxvw4NSHaGvv8Z3Sn9JGQDHXJBa5p",
  "key14": "65QAn7uT6GrXUKgG5YgrbTgixmJ9rJyaXYfbehG98wtaZ8ySZuNX4wsAhB2bsfyg68SH5ghJoVQFCUGRNdr6JYZT",
  "key15": "3w6eNdcGRnjwdDKDjCXjKULGxS6YE51VjCJMUoawSQRtioBGGVHMgoqWzQSwQ8Eo9VkGBxNPDYAe429NPfxDqT9Y",
  "key16": "5upgLVaK9cwgi1NSYyi4MK6M7yBG41RNrssWvCs6pRdTxXY4fpjFSsnxfs8oSZW9C33yYnXHD9VkfZ65AWLNdQDT",
  "key17": "AS6ER5RmWx85j56LTyWAbGnPqaqdyYNj1R8DMiegnXruhrMvBPt2ejHtmpmEfTjErKybPkTJxcgfexL5gHuaAtB",
  "key18": "2QT4DdEk8NXidQwFJUpyxJ7FrXWaQVrpBELQ5w6mCDs3k2mvL6iPEuzwE4NHTzFVYDoUdj1AzA9eUejiLT3mXcD6",
  "key19": "2PXwRALtKFMdZvbXMG4h1kcHw3YZRQ5QZyYGesfRZDwfvZJeMqAKcm6ov2oQY2nqkAwcqAZy2DCLtnC8VnsDo8mE",
  "key20": "4t5FqmvjFty22gNLnH5iEu36zeTadbC9fQQvKTTG4C3G9183PpGb3TrkPeGo9tN7gGuyDjF7nAbQyUZoSbH8EK9R",
  "key21": "2rKoLUAyhN8uywTJBVZyswq7SPCf3CE3PxZjKrugRWCiGvX25ZFdXFFnSfeAgZTSXdQJwuNU4vKKEQKpWkjna7YE",
  "key22": "5jzVxZ37cSUPmQZ7Wowh2qEbCTk7Pntyr6MKo6x8kCtZYJ1JvLpGFJ96yjCSnocv8dakkY4qKZpMo2BnqrJEsgrp",
  "key23": "59WEphH54LZ3ScEGyWN1FmttwmgfsESd5qcKAfEBvCbZTwwyRj6A3VPWKRqFsszqoAejJYLLjn4AyB2ifd3rSQ2N",
  "key24": "umpzwiQsVBTYRarB8kiGxbg3bzs2pxzxxkcNZBLV2Wb3WfUpmtx82SNXRFasTZwNoEgUXrfVM6g9VbphR3Gc4pr",
  "key25": "hADiuHdLE7NHpJQKDpDZ3CzYyA8X5EH9nky9diKYFsJ2SNMsZmvUoNcuPV3kC8FW2ZLXMpkGPFTzBD23Dy2aKJU",
  "key26": "3kJ7jZQWngb9yX76MFEz4taCV3e9mAiksQrrkeydTAS1jbknFygEuHX812Q3JiwRCVcG1sU4aw9gpRKYAjYHn5np",
  "key27": "3rnzHqooQ4SzB61oCT7gd3Y7VpFUv8365Z7tmRRXfAbmBCQLmR6JacBrdQT4AdTVWsUCs4GRYdFDpV9MxuiUisFy",
  "key28": "4Y2L8NFNyNPU5oH9shwrHBJ9dwBwLaaGXLhzVzbt24Fxs3urbWwxteHwCuGmLevwZawDvd2DaJhWPc7UEPFrDCx5",
  "key29": "5WXhGdLTJTzJqr4uCdFvAVAcPnx5f3iGJfMhLvog5TMXLpkAs9LifDb7H8tb6Kia5hwzNwaykMJnbtfhT3GEXWcq",
  "key30": "3u61nh7Xes5x1S5d9aB4k2EEwS61ChAxykdvvNMkppYz4M8pg4HRfyy7DDYGHFcQNeYUqSKjvgNh3eQ8gUqa3QBz",
  "key31": "57mhwWwsUCPpVHhy43G4fossvvNYp9Bk4f4jxqiU9zrgUPdaUxbRRR5T67zv9Br6Ykdre4vMcHyUzezU1Tgnn1o1",
  "key32": "6782fPeiXDKV9pdfDBed8ENJ93CdBHxvfwhqS4Xcn9tZN5FqfUetBhWqck25NeRWz4UmVcxRTaVUhgYnxB9F9BMX",
  "key33": "4DSeDA554xPMudtAMwKnLBwZfCGXEM9h7W4kvn1wxGjteTRtJGiqCZhEDTFjLsqsGmxKa7gYtUcxwJ1MsWP1fTMT",
  "key34": "3JRyH725MD1xiVjv3onCycmoJ29NkF3Z9iAJN7BdbgryxRnhUNkaPhPc7GDS14gUHbSME3MWnsYeDZmS7JLv7jrQ",
  "key35": "3xTctEX95uXWMaxQ3FhX2RpoujpsTiR2TTQwDELa2MnQgujCG6ejRArX2aA77HDHsYU8o3XrwMHmTXfZxX6rcKTT",
  "key36": "WwLf65GiJjLnrWft71xyzyWRzKmoyvoQUsQtn9k63DcTHEGjVFPVpDzuc46PEXKVJVCMrkehE5Hpgmw73SwBpHn",
  "key37": "2noCcuF1jWEWnnBb5aUYqmSstjqqPGhpqtv8zC7FmmwX3euBdyff8CJn3FnBHqhhFUv8khD6qbuze8mDTTfha2D5",
  "key38": "3w6L1YN1CgtEJnnVBBnWxXPtpRuQGPeQBqTszBHHbVMuy65wFNe1VcT84QKP7sgD3j3rmNNrBzCawqp7QBwUCrHz",
  "key39": "3XdQWnqAusUD8yNpZsG49SQtnfucYymyUerQZGXCQry7YibRNsvhV2nH5v6PVqQv2t8Vd3D8dwsTDNxbYseZsrcT",
  "key40": "5rfTyRtgeXAjCnDqZhMUa5ELYJ4gwgaFTQQXXDRmye9AAoCJunzdkpD7ASuDckFgqcQo3acMwJAKzezbDkPNNemg",
  "key41": "5MWXofJpZcLdvVTJtXdMUQ22cFGhWBhgP9bkeUty14RP2uemD6Zxkt3fScshgbquVuVRyHqeWFRRRssmXjujVMFh",
  "key42": "5TXsvuKwq7U7wYnD9KJoBZMLEAH2dcSzVuDBcJEwQ8biqf1hYH3k8xvLrCus34eUFvszDUCiCPv8k3dbxj1Vmn2Q",
  "key43": "3zFfV94TpuULneiqWVtBFcyW7HH7DFxLVMaxX8GpLS9eSLKmiMJV3YxfBn8qfqmdAXtaQfXzATnSPQUixPPTuRZU",
  "key44": "4q1DKgCewWBQ7mmgoYvs2aCeBadZdSeBAHGMeY7GEdAnh8hSHMW5xM1K5QLLCK5Zu5fML3RUTyYQnCFKF8JtR6pD",
  "key45": "53MKwi2V5TkWNM9qAZPvJDysJSccMyTvPfG4XnnMPeydRYUzDqMZZ397xBmc1CNJXcqscbkiVzEGTFapNMEiePpu",
  "key46": "2bbHgzNoz3LtyuMdUqabqsNuqV1wFBxPiLuSLumMT7HijTmBAXG48enfwkQX4DdSYeMbofBTv7LSKC1DwssV1cPR",
  "key47": "4LRfnwNkUPqn9JhTHbK5h4unBfDJ6XMeMXZYJCAm6bNGcnjnR2AE4FuhnauLtbgmeZrpxt1emWJFh3ULiaNKJBFE"
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
