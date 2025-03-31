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
    "PxiErT2Xu8VMtLooyKa6nb6qWuKqpHPwiYWdHys8hndwfTWf3z6Cupu4udjg1QAcZ95qkNHUAchC8iuBcJZHRCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJtkksh8NxycujmSSTCrZdyy9i8hKbpjf7ZrGqF87GwUHFzWLxVaLAu5UkY9tswUiHboyJczU6NYDmg7kph9bFZ",
  "key1": "3X3Ad7vhjnMdyuGadL6o6XjZxmcZjn3kWQYCcH2TKc6DCbtjN4UBFEXYsaLz4S1s5rnJoVVMf52YxTN2t45CZfgd",
  "key2": "LwAB6CFv6KcM1Qm3pUeSbk1BMX121g4ReoBrGird3793HDJafeAGzRwC4swvACuyfKDokH1nodsfkqL26GAGNzc",
  "key3": "53EuUKdJXBfajVERAVLNUTwy8PhMGCf8issRsDzHMbEvzRBoXGkLJekssE8bvA8yyYz4kEf2iuZLua1cvSQd2Bi7",
  "key4": "41uVfvBrCBNpqArPPUBokXVA6rFsmHg2rTsLjeQoDwsQLakAWF5xE67pxLdvbkwrwqRYwLdscxVim32YnCELXLpg",
  "key5": "3uVhEcJhNYXYjAMawino8ZXYYv3K7SFCzGswm92QBCU9ND4H3Rh1Nn4bsN56x7qipgR2nuucef8WZWtSi92PWa5M",
  "key6": "m7sTo3BNJXJiKcStWE5tQfcAUN42aVqCPPwGKWc4gBoWQSvpbhQHKwdhiBWfHibSFn5YDkmCBrwV6TFU5k1Vixs",
  "key7": "5X2ycvWtCCPPP3hAgUNc32htqMSJ7P5ZisvoSXLA39cfswD3pgLuok5AS7XUZKFtyXWMZD7LicHBXH8z39QLNexg",
  "key8": "5jqEQaEUYRMMYiLWt2zSgt7Sn55qaHaUkrpzHHZbaYBNfsbXVZknKbX42of7AdZug3r3s2zm6ThDxLzyjk3Tb5a6",
  "key9": "3KTzT9rSLeMVxrZiRce1GUiwKW2AzANHcBwn39wUUTZAknYsWBHh2YbhYU4jb4jvtXLVaxynVcaXLAQA6YpKv4e",
  "key10": "2LEr6VMa9d6pfZJkLnv2m2piSQa5BzwEszmScHZT8B96cE9hh12gvf1T1np56pLWE4jfYzPUmgXjnFybdt5b7ohR",
  "key11": "3nFAqxGYLdL39rE4XxVoWd7DrQivDvRufTLr9BbqNSirQkTffVv8bidCsyYBn5f2RQfkWavdUfsuYe9U37Qob6kc",
  "key12": "3MxvSL7Q2SuAEPAHMQSGHf3x6m8PAeG1ZiUoULxK6m7cbAnxHTcxgb6Fi5HKtarjaE5ZFzmMiu2vjEShaBU6eu2a",
  "key13": "3g3AwgbpcRxfnWExTpnYMbZJTwKTzp7hzKtdHZ3rhtXxN9XdrGf4Ru4uvEZAZdoreg86QhPGrtFbwUSfpnYq1pYS",
  "key14": "4csNuDptiCn8KkSVv88NGVFEPUQiqV4P9T5LntwJsy6wL4ekiadVkzMGFCUHEKPMmvGohf1KVLyY8UcCAyA46rwH",
  "key15": "54a8bc8C8i3EqLJcM5uJNetJ9G6u8xMbKrpXfgjJTiBEL9JxF8qoNoVWxCWFZkufAXjRLQSgoQyjEGB2D3zBrGc1",
  "key16": "8VSCkZDdNL45ZYPBCvb2xWXQc16Bw4gm4dDoyWk7JYAdsPrB4GjVYg5HJ33Tj6XDHRcPQWdWPcDtwSbyZzUa6NK",
  "key17": "MzQwcyox3UkKBnf1kW57ASDqoK8Lp7JLnci3AYDCMV6mm8Prkas5Ghr6F93iG2ofMWDFq2Vr2s7V9BN3eXw8YLQ",
  "key18": "25LphnNg4EgJz8mYBL1MARb4n3mVcJrcSvCXKNr3NSZmYgi5x4Mjc2yTpbY8Pe94AYTsjZWjQ9h3Gp72hGzsoAJp",
  "key19": "53RmHSvP1jsG7vatXUrQxH2egsPYzwjm1hFpUMTppEGVh3RGsqV7kaWrdCGmZWwV2StWCVRDGGKQYCpxKJepTjjV",
  "key20": "VWEE9vVgYzqsDU21KRqRyG5HJ1591nLeuVu5Z8DnQQ7GJpQBLHZ4BMmP8xnypnoPJWtTy9WGyyYJJcoTq5oqsNh",
  "key21": "3UvrYvdjZ5bTyjKWjtqwuxGzD3heG5epf112c26pbeKkLjhvRq45C7UBRiRmF93ZgXC3D7dedcFz9gEvLdbF5CU3",
  "key22": "5SuyzoYE3AYsreP6V85B7CWbtT8x5eS1asPxsSNgqP5RLk3V2DHb8DzkCCoexdpTX3pwRL6vcZkXnHEtTuAraxHE",
  "key23": "58ydeiYZjVUBHs5knz5chzWEUR8ZxVb2rADGSK6id4Hcb8s7JSo3YhPptNZubZFi6Q4bP2oAwdswJ6CSuVcEJUmh",
  "key24": "25kPDJB18LpSm2F5jDFMcgy9SNLm3EbiWoY2mx9xrXg3v95TJBPi66WgZyh6GF1ALYxg4iBiz1BPrZ8dBpk1UqKo",
  "key25": "LcN3yX5TFZJqcbUP68Qp9dER2RHKeSqAicJ2pWDunWirrS4zwLD5yJvEvFywj7jp7Z61jnD9GcA8SCmzn9iqB8p",
  "key26": "51mjfiZXnSkaCJUWHbFTXBMNQcVLiTJeQKCPdnQKXgVraPGyuNY8zgo4Ppyhqo2aEj9djFizJiex9ick2MPcBRaU",
  "key27": "2qjKSkDSNADUYKhbFJ9u54es7aJnNrvPCpM5gxDAg5sMFTP4KkB2TfiQfY2FmmDudzxsTukRw9BW1h2MRiXcpCc8",
  "key28": "2WT2d92qbBEo7D5ousCmZrJYXM49hA3bdRpucXuzLLLc5JreUiAmWgaH2fgybhvmr3o2mfPBnXQTD2N8bir5EsLs",
  "key29": "2d7FhVZWyiRdWQTfjya9DnfSUtQzAShwjnuo9i1zBKBLjCvRELDeqVKGDJtNwe41oWSTSuGJPFjwW6DcNLcXxDpA",
  "key30": "34XcE678ydMgqW53jRzkKk8aSuxHVb4fbiUj3ohDRAM2k7DLB8fGHPKhBd8FJnEKA6GHRYPse5ogKTdrzRonCyhG",
  "key31": "5SmEvDL7XFjZKBmss8auSjmrxcc2ba3F1gc4ECN4jqgRCujktiVUq257qS52ruWHy1ue3ZJ9qUvRjpqzg4eNNLQs",
  "key32": "2EUbv9xn1dKay1gp3tMQhF5ga5r9aDD5RBWzQoMEcs1LAanqfvanCiFtsmGyt3zfeY8UFuaH5X4nrX2SxKnADPCr"
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
