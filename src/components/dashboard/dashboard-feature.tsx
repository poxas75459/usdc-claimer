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
    "2PjKxJFVhW4uXNENxtRnZ1p66XbpD99zHm7A6uJmmhNTzMgHnBAVDXWUM8zGRwem52XQ6onAwjkBrjvtoV1BUtqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEaJs3bXHDguyVmz24ZRbh96NhQ4KRQS3jZnDFNBzo7JJaMeBBLvJEMnfkvz2KgPXwK7wJvFRShDbegyDEfMxtP",
  "key1": "4Y9HFxRLhVGk2hKBfySQ16d8Uo1arZkuCoDrdJG5kC4dHAPfdaF6E9dPX4Z2nDpsZ2A7ZTqrNoDQQJP1SGKA4Sbg",
  "key2": "DfwF8TybT4TyNJ4YBuef3CFFDsShtxxub125d8Zw7CfoSbRPQLM2NBmHJeB1wJfjuVCn7cNRXbCdupRz1KqDLW8",
  "key3": "3bRdJEMtG2BjWmHTPeZ6myBpAdqMUpgxKpgEmFNKB9zUXvQkj9aMecmi2zLJ5n2CVCFriySv62PTco4RzJSjcNmq",
  "key4": "5E1QPERG8hUpBG9LDLtxeNvMma3zcAVt3m6mZqLHz7tWkyjwrSG3FisejXnYd5dFJTFbAGKrCfoad7vCN4FGYkAH",
  "key5": "4EUkb81b3frDiWULZef4o2a29Po6jbAwesv4ZodyypNJqSG4Vs3J7jdErGJD88wDouc1Zfqw4orq3mVvX6SFhA57",
  "key6": "Bj52XYWRMgDwfdNskKE7YXoQi8AQSdKKurSoCg7tLzhAYj4jsmmYxAZsV2R9HVHdtej2ABzePPxpfx5G86FfmA3",
  "key7": "4Tj1fxfXfomTwcFJxHXVddUcqc2Nt68PXD1Tnuuyof71KfMKmRXBTAcrAkUPtmUeMtjeXBDZzLoAHLv6amMywxXs",
  "key8": "3rURre5J2H8QVZbWQ8aZqW7yrexbi57omR4JXFJHq14v8VeBtf93Y7z6sdHpe9t1QuNaqQ8tWNVY97TLMvtnuCrr",
  "key9": "4fMZLkS33QRBjauWMRySqR6G46bJwZw35DNn3NSXwSQXYMHmFRoKPxAikm8n2EMQsY1YjUXiFGMFyMnRwcSRMgpU",
  "key10": "628oqJCNqnJgScd98HNVLDvTHeCGadsQFgB2sBSFtcmaJjCEhsfVsdk9uiuEqZsDuDCbzN45ArTBFk4WsafQ6D8c",
  "key11": "61cwkrMDf6Tw9cUWmXYj3UkqxfP2KJ8sDub3fRRBoTPpZai2e3jV1ydTL66CDYKtZk3NXYc22mntZUjpCQpRUsSU",
  "key12": "AdpSkfN9q4xWNDPjirFFsZ5zzSvJDN2sie8paZ4pLq8LrAEvYq6pkrHKLYEwR8XLAaM3iBiUneap5ejv7mesvCG",
  "key13": "5zG2joxUcPWEaXJXukkgoowc9Z3FrzHt7qxuasdUZvVKFwtCfrepEq1shddJpFZNH3eCvNNV4ahpR5eLz6ej9whN",
  "key14": "2EBFocUBZ3WAfMqr3r9kGwVihd3Zjv3zvS1z8vpKcDbRrggfvxEjUanKEPiuYDhsgj2NGuGHUPEqVR5jwVhm2UMb",
  "key15": "3WeTnpBH3G37m3obCUj4f4zsckvsaQWtsZdBNmiZnUkb4Vwwq7uD4X2B2wTuNpZqGp4gkocAUftBoTE4uwfUAn8u",
  "key16": "5sttdtkudTTuWmWKjZuyk4b2jfwAdYwSjQ2FrHDP5EX8WBPcuiKsqK2tdqzH6ff3EqpLNUi7n1juDAaeByEveNL",
  "key17": "5gtabV9odryrmRpkVAjKK2ZGPc2QjkLMw3qPriK3oCM3C7R2kuftSCpkyaFR8ipizLgXXXmtEb1M6FyhEFZsjjt8",
  "key18": "ndY3una9o7NwhXfVaD9CcJFaT9h9shxtSYmJu9Jnx5comZH19npVct9JwVnA54kVan6YESyCuAQxzm6dPpQBbaE",
  "key19": "22KDiLh7eJQzFLdSL2ZeKbM7k2JrNMcvXhUYr3d1xjZaQdFjnhDXbqGYRLVeHeRuhEre45DkM8tEHTyxwxWxEhxg",
  "key20": "382JKZZ7C8XV2sHF6aHHi3WB7gbYuLTv7JTEq4Y5nQQEjC2M6fYWk6ES7b22zzLTWikenSrfpuZWqnEhnTMYYBy9",
  "key21": "4MXRFCywiowBiimiDQUN9uhrNoKVtPEagTL2AyoxdBRP5ubBQTzNLEKCGg1xc6PtoJbCLQrJY6MXVcfnza2mupYc",
  "key22": "2fmmCq2oLPDaQYNvyvSkaaCweQmTAdYzzaDW4KvJNXSvn3WHe8ez8rPD9THh2HPHwBjWqGSGTqJ3PRXdhjFwJUGD",
  "key23": "4vJxhZ87RPFvFdzLPdZis3Qbmdqdcw8iwFKAjeWMCVhzm2GX6bVysN5ZEbr4ZWL9d2QCS1zsVbqmd3UgBKiMBN4A",
  "key24": "62ckQz7Tbpu5Uvoy4ica6RiNEkZbuEgQr79WEBKenAvkaGFp84afokxJ9xBhVE2kRH1GMZS2gvXhWY6ZbqwPBvCd",
  "key25": "4sw1K2Q4cLkatgA8yauiJBxEF6oovT5keQXeNKuZ9ESWWWRGX8zuWpFyyv61dT1pzX7CScGZVKq7P1ziFVQprB6w",
  "key26": "5PXXd61HbUum5LTiP38N1XLLazyit4KxZxzjUS9hzxDBTtqkPgtzy7TXht7RCydzwBxeKmBqDE3dtYEe81qqRtJr",
  "key27": "232biy9aVUSZMrx1WePhhAmRvP2C7EJzbRgvn6ZzvrSbEyUdpVbMqEusk3ApS8AbsRxjBtTsKNHLombzi7z43QvS",
  "key28": "jasQgnYKzLJaJ662ocgQKJYHiKE6xDQ3VVU8NApafCTnW8RcrQWdy4kjE15BjPCv13avybPLL1PAh9qx5QAk562",
  "key29": "563MCQpqAtYU25Fav9LtrgDwT5wUg1uV5SdfgaFG8ozgcELBhDsgmpTFn4xKN4q66ChTKSHp8mtRG5VtiUqT68AY",
  "key30": "JpYj8Ngxts6bFJz75FWuFdNHdU9Q18isQ5ioDa4k9BChghDtTiSwfK227L1EfeXQJ8NuMydBgZmuj7N7oeLKxWg",
  "key31": "t78Y6zrpivCkKGXafxSPp5X2rczuX9BU1nLCx71hCgrGS9PAwz8WmxyB3ndN36gYwKX15iwcAKYpYrhMohx2rSg",
  "key32": "47urvFZpdaDZ89Mec4J3s6LUc5uruqJp32UZcMpHBBE7o39hEJh4efQeFc4aZ6gq4QRPj5Rky2MwaED6pN25njnm",
  "key33": "y4C1CS17jiDUtMzHbNdREMqy2niJFvxFAM7mYkHcqfwpGMXHSGrnjMfBQ4jtWDs3Fay4iFy6tumUXva5aac4B4R",
  "key34": "2tjtQnD1i34G1o2abd6wZKgmfwsTkoshFtenNPnJ5HSxbSsC6aHExM15kqPYY6M2bkiZaxW77uBFMNqhMh7kZeba",
  "key35": "2mTHxYgjfeVvjmeCSQ17mi9jh3CvhYBNQ5rqnM3ZvctyTp7L8K9kAr9oLhFm5xNUnXC4xuATWh7eCJyXMpFTyUiq",
  "key36": "zK9ATeHYpYfipnCjjU3XMy8zHRWHVQ7XE5BBioTUvA9ZeHZop64vsX1bVLJkWQLkvh318A4hR1nFSyBmg95uaJe",
  "key37": "66JpykqZgL9emgWwdjWLspEUJD19aeARLQvgJp9LpDaYzscr4jhgC6cLtusCSFJW99gc1Rx1TriwayPqFpAPwkbw",
  "key38": "3SrexRmaUsARXbnhMTKhG9v6uBpE7MRZChxtaijQApNVSoi6v7agp3U5wZd9ToBkcxAQB6SA28rUcYySwJU4oVKS",
  "key39": "66TNhXdvT1SNgY5GvdUc826KwrLn3CwRDTTc1zFHj1H9sTuEjTuGcQM6xsHU4xScqDejdnendgfVChERQgo6jK88",
  "key40": "4EZmTJtx4L8zerVpLi7n4RhWi3uhrDQtcEbk8bwRbXW8PLruMMTK7C5ChivvrzazpmnrJpYqHhNAsHkPLT1BtfDf",
  "key41": "d5cSFuHW41TsBdbtDBHgs7PC9jkXjCbaMK7xFopKHTT19MLWNFyuyFbZkWrmurjF8kBESVTaEWU8Pa7JskWHn6R"
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
