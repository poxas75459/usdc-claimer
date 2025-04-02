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
    "2hvq9hmLerTZSXeebdbjvawG47zjCHyivLbfGKx6EyzSZy9FLQEY1MnYm1aJPPx6EQBHHfbQMWAs4AMqibAuEHbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36a5HS2REth5vbzVFBezS39iFk7w2k3oAooY2KLL2n6YDyYrivUYAv9HBHB1c2kUggo33DVwgtA3DUqVQkJ9vjwR",
  "key1": "Wdsdde15dwKtCsfg3EfcGVzEjhZkpqx9thJio46FzcHCk86wNDwZu8FbTrUF2ArdLjFtyToefYPxbDkezHqqCRo",
  "key2": "2Zp4A9LM3PBMtYSkkpp9XdCMCJMSvZ9f9BSCDzjswdyf92r8bkbzQWgKvxruijFwSTMV62MX4ws1sqhSqWJFKMWk",
  "key3": "4afcGPHF9trYwfqAq92ABVJXqgZpN7ZAhgyuC6RVEKyyUTSLFimT7YShqB4kqdnAaKPyxsiekKSnG1n6D3X2QAmA",
  "key4": "4qVKbqmATH3sy7yjDYX6xrGGbFGSXMSYvGeYQB6eAonEpHRvZa68NozsBo8U6s6coAAZsANjtjcPhn444QZJCBjY",
  "key5": "3sFUzJuFmdA3NYtrmtTB2CmXhSKebBuqiCj2eHNek78dAx9xakLdyNToGSg8UYs4NEaxzztuKTNN1jGWxsLP7N3i",
  "key6": "wy5aQo53nwZbMZF56yh1s4BquQ5veyRbuWzXdXPDyLqKSG3G7sVf6gnAARMkjTbpNcG8n8JBKzwpSAjs1BUsFNf",
  "key7": "2Qtoi52mM2Ez6QanqjTKDVcEy1D3szbY3VMfGTe6pXEswqYswptbV19XPntEdmKHhjDs2hFJ5sHLmv3ZcdsdWsqj",
  "key8": "4FBi6utDxntfMXhtZvYzSDRgCXUELrCsJb3kZyZDtVo4o2N4dDsfY7En8t5Y2E19JHH4DnycaR3K6pC8n7zdqCLj",
  "key9": "37wdkRFS55yoaeZDRya8dqxAdKYbActJp7hCqZaBi1QX9WY9mgQ863SQq7Jjewuv4hVTrTV19pTNApFhTci2HZw4",
  "key10": "BNXqqF5gAGF9sZZAfcq8mGBpimAxmfGKwCNifLg2tRj541cckQnMZeiWu73gVFgepWSojM9KQkDTanWfU94zq7r",
  "key11": "4owj5Wz4UdtgWT2Dz7JD5RfZvEAtA2dBqmPEe3bMQvTSH77fvE6eiSeSMveHvBDb5qywXqXp2atmQvbK7t14iLdo",
  "key12": "3LVCoodThrQjHmgFHzMpKJFucxX8KvX2eYPyEUn51kFfKgSdVY1PEKUy7Nc76L7gSx1JgVUCjZyzdS7TA6RzP6dF",
  "key13": "2g7q9WFAn3MFfRu7xBXKvtL55yA4oDdb7YK6UtZ67cLNfUmQxY7FmgYoP4cPwpgMo6rMsSayW8PvvnXzuLhUHNNm",
  "key14": "5cG4mh1iHsYYLUL6FnJk4uoMSTevx8cui5yJtoeJtMYPQ4DPeQTMCjcNE33fu9hZGsyrTufNxkqnmjQucW2t1kx9",
  "key15": "48q8G4mwJu1Jthmb4ekU6qpjzSkU11FHqQCUvYvsDKr5Afgg73MBp72tahpirDMVv6LWiaehVEbXZNFmPTdMkyHs",
  "key16": "4ptLuLkkxiXtvpSWMKKV1X9xgoK2e15QAubVpWcqreKm4fdNNmGhBLgiAaqfFr2t2SwpnWV4j6Mix2hrkRX9hUwH",
  "key17": "3oB7tBJVWScARZkgcqx45SNex3w3zzSRNsSKkvypnT6Hcez8Bm8Bzk9AEvsTx3rLp1BmPB88KQYhMqWStw9NeguG",
  "key18": "2ZnqeLMnB1CcpZj7bJgUbZYqqKaZNJeMjQy2J846CQD2zxqKa4w1o6ieFe199y3s5x2T5f8ggwGckWH51UXSY7s6",
  "key19": "4Rbje3VHc9bouGB58cc3H63vKS59X5AGfS4efisbLMPSKhH86FYsKTKQrPh7YPj34VSQTzpX6nyfmtMBPxX6DW5n",
  "key20": "4ZHShFqQwdJCM83GoR1HNcqZEufgW54iYSXAvmEDdzL5hC68NFULw1SSMGV2zypy9kW5voES58fswma2PEzr4RMX",
  "key21": "5L2TjQQPNaL7aiWeA9nKmKr47DDPemyt732D8jo3A3gqDpUFDKRBfMRjPc8uGsDSkgDQ3sKLtZxw7YtiY5h7QQR8",
  "key22": "65rLEN7j7TyBXwpqRupWzp5P53JZduEiW7m5kDcYCgonmR5tuV8jiPe7LX1FmdAuyueXqg9NNoBQUs7L87rqWKMd",
  "key23": "4AoYoirqPcjytGXjYVWoqoPfLsu85hSVtEgXBDQFkeBA6rLPTUyXZrH7qCN7JNaR3Cb4dzNser3uebvWqhVjRzYf",
  "key24": "2pw3xjEAHV1s7fpYenLPyTvpJzHPUKeyRBcvCZ7JnSTxjvHtvTfWBJ3BHqR5YTCeT7b3FoJCyaquFWonLDW6afSX",
  "key25": "571dC8akAUBG5ncU6xmUAmRsusXCBWuYbg2HabArFJepj5z2t26FfqbP8Y68mM9PQ8nUrDXdY4RGZ9JYafsNQKvQ",
  "key26": "2DZuLzQxHetLWNsvvMPVdymEqTLpaMDzn1ByCnavPKk28JNcNhfGUw4XK39SiHZaNTzq9Trqg8dBZ4nbQQ7NVKr7",
  "key27": "3vqoC7X3fhTZN4H1aSHH5Dgq5iP1JJa7D5FL2oQoSwq2RojywQpryMazf8WQhqUK1ZhgXwHqKUgxHRSAnufP2PNi",
  "key28": "36S3Aw62z2Y3MrnyQVbcNg6pt9zEA7QGkQddraGab22XEnKUiS8Y6zJTbjBjZmuH7XRqkZULBSh5mWntc2F75s9Z",
  "key29": "4GGXjHUH2BRqVB24p7hVrouSqDD1qEUHP5y9SHKCbqHvNjpq1YNjDaAckFraSmfsuQkGZqZrSuAg9rkczMsuSUtn",
  "key30": "3vkV1FWTKJAGkikLftwpovExxGQ3G2HFjccrRETFjzHWX8s6odVbrxMZ3M2usQivQ5ue1UTUjJhUkZyGwqrkiNtj",
  "key31": "2ZKYfyDhEHaF4aNNGjdMMtc1YeBSvX6nQDyVQeVQyfBzRFVufojUQ1zJ8ZHBZgXQnZtYctLd7PA39uDgWtuPwknD",
  "key32": "2eFeDnbEF58mhB5dXe3tPEj6DKvWQk2U7gBdksUQJ6J1fCNy8rfNjJsXPVVb3szyUf2LebaGiLrqJHCrTLoUGSqd",
  "key33": "3fAM8itEJ8xcKi58JnLPVRtjkrR6ncaJWuRptQ1aVUbRDJfPJxaNrsPKTMrW7Yt215VZkzJmYTRmmnYNhvAN5Zsm",
  "key34": "4Ehnmjh2B4uJgR4r6rvkEJYFvxptZeKt17Htk253vvBBKru4uU7P7TyS559QTt2zzPpUAnnc3h15WzLFdShgnEty",
  "key35": "LZGfZTSF5UYcVdQQGNsQY1QAictJ5Cp3L9YLB9Ro4wzpucCVpf1Pv2Vde46hwQBtLos6WMK7rRDEtR5hDPdimUL",
  "key36": "4bcfqfMmwy6itLESC6mABRK7YgGNESz7Equ72EtPLzCTM93VrxJvpwS1BfqQroFnXqZazgFVFR4ML33eUN3uL8W2",
  "key37": "5RfiGJrRn6ig1GxdFHFGAHAnpCgapbed34TC6kdyiuXkkCNC7ZZiC6MR1nrTgippX7ydMMAAiVoYTs3Z5iJa3vfz",
  "key38": "2wajw7THKxZVrYp178oZSj4z2y2P9vbLEhQ27FjsWGVbpV1QxmMHcvZz5Nst7GPGZbPkmV6fb4vzBaqsrdMQNf8v",
  "key39": "4zhkakg3HweBdEcJGj7tCiUkZszvaSp6d27EysyvQet8YBQs9cnAuUVFzNL4brDbG2JQkBzEnhBQKY4zWQ3KWqfk",
  "key40": "5uYwwYpRKKFBSW8NfTiR5ygZ6wyTZz3g35DREvpV7sDTRJ1w8gt3t7TqcmkgQFuAaQrvymLeTLEADutZ8obr216G",
  "key41": "vtXMKevpjLta24x773D2RPN4bTdmxZjqESMotwWnMH9WoaRJQgR4t91LPVMSQ847VbSY3Luf4WNTQ7GH25peeCz",
  "key42": "Td5r87Zhy7vn8hYPUaapiBXoHu6MUC5iSLQwkFnSHeBaQXdhUg32DHoBwiEbhZvUZ1388fACWmfFz9JFsDvtcQ2",
  "key43": "3RSGMa3RUM1xy6f6UkcFp2murKppCK1LpBAPyJfV1LHY6hNC2VnUGovwe53hkAe2WL2shNS9KhwLivFCfaenQkiT",
  "key44": "2HFeyWkZXiL1GNPrW4JY312Qy6Gg8ZJCcAjm1eHPSazq7zPxCDcLdVDDam25KdktSDriuG1qPEpy6S1fLEKxePbS",
  "key45": "vUJ6dc9fVEVsEUf1ERdCEEv5EWBYkMqAAJAajEi4uMTu2QrDzKgib5rUCkk8hKGX434amYbB8cWRu1Q1W4TQ8K1",
  "key46": "3Jo5Whd579PMSSiS2yQpteQRH43Ku48jKd86BB1A8bYAb28JG5mrakmf66KAsQGSahkJuYECcVpgWJwvKpA7GGqC",
  "key47": "64QuJLsveUHDAhAaL5cwr3oPYET7f7D8n4DX9g2fVh2dK35CjiLAkMSBMoCuQKtgpP2ySoBmzEeGbq6S4RfqGMe",
  "key48": "jtZhJ9VcZzCQVBXvYpedShBuG94dXHDUabCzEB1DyVS2XmYfEWwRassNdmuHwGTzsEhM5FvrisveKpCHv13YJTZ"
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
