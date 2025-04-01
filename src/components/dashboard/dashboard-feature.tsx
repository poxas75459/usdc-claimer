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
    "2P5Qdo5s5uxerFaz1EeJsKpSsGAezLDM1t9LTubgkV5Njc7xRWEzQdTM7yFd6jUeoCNUMBSkoWS3H9axQAeVEyKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCJZJeghUkHwJ6WqFyjrV3b24BMrX2Pz3co494wssqqTt8nRBXN8yWX7zwDrGxNYtBMjL7KLvMH13vBcYXTsyP3",
  "key1": "3hLrgZJ2Sygsf4sRiRhiQhUyCUMpD6C2QDpxaUmdCVTfqUB7LdkaB693rd7xPWdtyGXGH9Stjut2WMTVhQz4GstQ",
  "key2": "2gsamduKy9ZC9vUxamF6AtSk4DfYixotTZDeRkenJ8Ch86Nen2X8uTZaByfWNAVvMSiuyMxoSAT98FgojF7pSvGk",
  "key3": "u65Lzfjob7asMgsMK8iy8mnYUwEYrJ2e2pbdf9u6LUT1VzZinhWAT3P6KaWEUJjTFh3UvNBAVARvJ7bQL4WAVBy",
  "key4": "4uPjxuvuuNrMiXTKsC9qVKY3FTkdxED3uc7KF2KZCXuJC7eSN2vWjXz2FiZNohWEg3epuvr7JeiPXGXZL6Sqkyc5",
  "key5": "2EY32Tn8NkKEaavUkhRDF5UbVyAT3bs5SEnX7ZpTg9Nbc53j1NziGkWShFQP4DwSesBHR2FrDdvxnN9wcuVyp415",
  "key6": "33TsMo5Bnsn4oYLTSbfnBBH1jqjjwT9xXsmrte2BavKVp56UQU6JxBsA4SWu1ffBRTsEcLiAGiYRsMzaENw7CRQ5",
  "key7": "4Wr8iab3y2A2GUnUYzH8rmPTqjoqzgGnGaDPTF4W5g4LViGMqxBWt9mFi7aVHwupjkkMyjjCEvp4iZTWpAehc6Bb",
  "key8": "38GgKvaXMEoJT6BW7MZPeRFY9Kvpw1uHsTu3GBjFYtdxKC8yPnrteamUNvyVwn6NK3fAAbnksuQXNGERwxNka8Gv",
  "key9": "5GpPLiDijWR6pGvWnW9GNzmJR5zz2dYP4CDk9s9J21QH9qSYr8zQcrZr16LCACgvzsih8GoKE9biyBf8ghN85Syz",
  "key10": "r3zZ2GFpyHbzEY7Q6b8w6EowUdPKCryptq1tWmVqRYn1McsWeir1T4XbR49fGsnMorpusVt2fQgyof5kLd6QRRL",
  "key11": "5iNmH77AYRsNrJKZtoPAgTpVdomznn7V7iX2SJGKmNaxXFx6S91mYKjYrYfqUE9jbJ7PtdJyvLFeAfZKWwEgd7F9",
  "key12": "3L39qx2XkuG2cVfLmp4h213UZuzGzaayjg8QMKDy37Groi6ujzhwDsGFmnaecfZ5X4chVcyC4UMgDAax93VxbS5v",
  "key13": "2nu5QYoLcj4mA9guKB5QwkQz2VLz5j5pN5rZT5Um9qyPEWgp61imE9DZBcSJDdve1m9dd2g5A5EjiEojaYofVtZP",
  "key14": "3omLCYEutu35NFmysdk1B5SBgjToKZMCumAK8t1rX8JDpcoWW6yNfmvPuZyZjQJ7HRBoJ6N1YLJmGG3wWqJBFEAP",
  "key15": "3B72GmLY212MVPrXmTZxZhosxM9EvPDaiB2WEyPzjHPVjBKELK2ShbAWVSmMVfnEvVyS3sndMNk1JepjhbXtUw2",
  "key16": "4kqyCRNzgXktCroJGabroKxtTA2FirX9rAFVMaNm5KPPivKRZ9wX7JECWP2NctKwkPmgsbMVxGrDMBhsTxPJRLNt",
  "key17": "2aBEZcUeeFtdGodJS6fKxHiQhtegVqCXSGvH7eeoUKex1xLeQK1WbCdy43VbsKiHSnBjUMuupiE1yYtp2meBTnvP",
  "key18": "5h4R5cXkCDXoFM6tP1mLF2CbQj4niEUAPyke39Vsjazaa51FU1aWTVbHhMZvoAYnXretwHYctmvETpwLiqo7mXge",
  "key19": "NgLKrHKoFZjUgU4UZzx4JdqsDd9KGXX6VZyUDbtJVcJT2hqGTff8gJTqaf3rQ6aH4H1yT2cxLS6rMQuKFNfuyVm",
  "key20": "5BJehktPSTonXUkNfP819CcxHYDr9hJLrwCvRCgaiAMtdpW9haqGi4k2cA49kwXqBX28Fq3FMg9xoQgYcfMHMxRY",
  "key21": "53BNqrvYGWxxYGFtvPQLsR8XwKG3q8mKrimP93vR51J12R9knJSVMuE4SYz3a5CA9prDLA4b1rqPM3MsrHr1k4yb",
  "key22": "43JYfjuBeUGLmQNHoEfG5okAPzZTR48rmwAgBdkFywSWXh4BtaxyDvHXRpHUPRqt5HyjBxcygDokV3TzD1SJxdEn",
  "key23": "4Wg7UpdN24V2oS7Cy7yQ6ZJsoe1a2MFx7ZM3UZetQvWZQnoFDkXFtLuzR27P3uy5QnW7UzrwyoyiA7nai3WpxFBm",
  "key24": "2LseGQakacBvYeLokWQbi3LMmhJDbSS7jcdQiqWDNfzEth4BqGuEManVC1pxDTQ9983NodF1N8sSnNTGeBE1qtBh",
  "key25": "4FMhqb2ArPegjoqCaEkbULkqaUt7XQ88XcszLtxRNhbTjRXpb8JUzGAmgeYcMdYvxSyR5Y1sHv6nH6xU5GopukfG",
  "key26": "3DoZ4nCkM1VLuTxc541GTLqxEbAzsu8mMbxRfvFUs8CPufwgMMUz9fW7Me5X1z4hyjatotPHAYGZizJBCP42SdLK",
  "key27": "2zkrLhnPUo9XTU2n8xe9MmCNgzGq3n7oNkjSQuCr1LawV84NLuRN5oLeN8JQL3smN1vTQ3o2QerZiorqtV188uqc",
  "key28": "63EByeuR9C3StHGsaCfCHGrNqvdaVsU33UZuHyBMdReZchmymF4Vx7GBodtvAmzhjHo4X2hC7djk4x6y53SSrUz2",
  "key29": "5gkuH29yancDwucQLme76EVGdEQHFcbLmq7Y2CwjedbCwQ2mhkAdiGEf26mL5S9Qznj58VT27msf6tt5V9wvrLUV",
  "key30": "cro7LrXBgzcpBMLmBBoLMYSnFcVXj7pQHAweDy3viJz6yXvGEWjMnoJQZWT6HMuz7bikyckA2hS3TSr5sY1nGZV",
  "key31": "YhrqTi9TFveSUbw2rditgutuZN83t3kWFKGwSv3JaEJxto3mcPAWaNogxVcpTQwFX8YCXc9vyXhzxzSQWvBPVXF",
  "key32": "3TYbGfGPG5mQMDuTajM6tPkXQf4AZNgSPAhSmYhtGrmHxnxcPr5KNDPexmyYhhjkCHHgowQ4yGfNFZSjtpVCZkmH",
  "key33": "3wedAu9eSQvcBMvQfFQWs2cczFJjGQJwMVP4ifahpi4haMmpHeF694n4AUnjAnGGxM1o5pcwVCQiqpnNcyfE9KYj",
  "key34": "2ey43pw3fXHEKDk4Wns5hsvEewGoJ5dXQRmweFqRD5Hfbm5p8uUD9Vv8LxuHCZNZcFz5jXirGQiRVV8Xt2dpnpYx",
  "key35": "3DU6eEVTkdTPv2JqBj993yDcnn2ALRRb3LtskKsRjc37RCn9YSpSwX6NdeYuBE386MiZBt1sQKhiaP3zzRKhcNgm",
  "key36": "2SgxVHCbsH8hyp5hJeKmkj6FJFhaUatBrfTxLHQANLDef2658zab52pmCCVka4XoLAGuDhboUZcpaVtDCjLoKb6i",
  "key37": "4XxMAGHzBz9PSwgSfxJp9Bmzb9FV8FXtPHD6vAsNyGmBwM6Bq77uaX9tqGFoMM9AR5Spjb9Ddw4YZGhoBm3syERT",
  "key38": "2UdL1aYr11zp37Bj1D6NbfuWaq55yCKwT5PDXAv44mJ1ddqQ2WFT9cuSLBXj29bU4US5PCRMkDoaKqRdioaKyGUR",
  "key39": "5ceRCsmVfZPAUM7sVdWKS4EEKKn468orJ9ZgboAp7WEdkSMXxJQfEVkfiaMR7U4PvqNo5XZSuRHTCUz1yLUgkJMU",
  "key40": "pJDjFDaS9MjcMRXWDD1JixwHfEd8rmeTBkFkEpAkbhBCy91S3RqYBDyzjTjQaCgQfmreQTHCvPY42M9y7hXXsig",
  "key41": "73JVJvHLddagHY3TS4y5HTPEYA2Pz9tonsUAytDYGKvcZehL3PzfY3kqxCevhkFnQ71AQPUt7wBGkUBrNhkyUnD",
  "key42": "4DKbm7aKLPfEDyNxrRPofhJnAeXyojVZRL5YPYGe9r9oBHWbsQJQEnPgWs8pAWHSKtmjSVtUfC8of2Bw5fHx9TZ6",
  "key43": "5wHAihJbCtPHw97rdkirMWt3X3YfuzCZAk3hqg7wPsafasuRTZCmJkbvhed36ty3PR2okvEXnRmfYGTDQsZzakVf",
  "key44": "5w2t5kKkopwtg36fcMYvhhG8U8E5mErJbJycB6LfrW5RRBwjB9UJqtf55r7qUAvM2k4Fe7AK7qXgGRpAQEa81n8Y"
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
