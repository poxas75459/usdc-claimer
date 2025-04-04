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
    "4LPn3AXnEbrkiGAEZnzCRiDGk8LbezwLbtwvXSTLUpLwai16RSujaoneB5U7sJeX7ByuTqEUYB1TdvcdbEBvN2tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XhsMUZrgHKPp3RbrAGfNnPMTbMr4pa9UkGfdyCjJ78Aj2YjZPgn9NQpL3iPN7VRbpERgepErgEXRL9SreA4qHGM",
  "key1": "2A5wCEGsrfuHPT96KMvDNorCkNQc3QUncVWvYN3UM4hZpB1P31ECdFzMRWHsJgm8mMYodsx97XZku9wCWvRRiY8F",
  "key2": "423MhQjgLPbZz3jRoTfEj9FwWyBDaPEPHvdRNSNk4kjox4ZgbWq2CFDjWXVkaSADvbfAt9Es4Y3ZUsJ5FGi9vSf5",
  "key3": "2sG3JmQEj8xqPT66mpMbsjsfaGrps3aUbJCvHKCgKtSxTDoADQrMXm17bVwwMq4nCnfPD1QcSkwimkLeM7vt9gjt",
  "key4": "5TnF1ovAAAi2rZj2h9sRMBpfy7JkjN3XgaRt6z9fPAF83DhFKTpZBgB6Xi3c2apPHsaMJ8EJpb64dk9w8C3yXtH9",
  "key5": "56u6Kh696jgVtawvcUZMV7D1cmWnEP5mEGXuWMjQAqMEtFMgvbc6UGbrdinFQjd78E6US47XdsewV3dyyhNsaazF",
  "key6": "9W1dHv5HevyyUKFsqGmxkCstETMy5Pg3SbZzyznqAoPAeFkxLg6Uqf47jm1HrKAkKwS2cjjvJxWBm4VUENiCCou",
  "key7": "mhZrurjpiECdC82J1pbVc8GaRewaWkzKDRAKJpY38LGhKbzsMf5Ts5MCxEKjBA9vLC5rYdMeafQVV1U3Y2ad6Ej",
  "key8": "5KSf2Y7Cr3PRt25gbZqf7D7XYKxNzir69MhdkVfTxvUFxo3WA1KTP65PJ1UNH33QtLkR2JYhsuELs7v84UPqGdBv",
  "key9": "4WJrLHcqcd67xGC66nf3tVmb2F8oyRVTYrE6DCMWFHKoVfjY25hGndpxFzqwhuPCsP48tWTFUCjhmn2HW5iCN4Aa",
  "key10": "2BSEMGEwKAYiXWzSB3wyCwQEECC3A8WfgQLRxvSSsaD7ruwXkvriVKUBnaDTe7fCx4qzuXpK2aX2oV2pc2zbHCL1",
  "key11": "44Xga11C6bnLbLkGtZvCCFetG1HPUVtEQFh7ZbqWfLB2DJuTP5CqD2JKpxatTaV9jkQTbadmqhAHtyEpmwCd5qW4",
  "key12": "43q7Hjo8xPVkd9qYyuYJiUvYLQWuprA6K3nGSnZyBEshgaWgVk6X29a8vGuHzBM1brxC7k6ft8N5CVkda4vvJD4X",
  "key13": "4dhDTC2MfNG2oLHG6T65NFLo5skhSdFbcTCk7wEnS9emZsEnywMGZLwkK2nxcyYct51fcsZV9eZSKaNTpdV3ihxK",
  "key14": "4REF6ait9krxEkFPMp2391CQdcLhZpmpcuG4qmzSvaVsiMkJgzFwYNPwbaJHDrXQwSRkkKnTYJ5AgqF2WsiBGu1F",
  "key15": "4rQVSphL4uTqBFzHL6qNyywy3rQ2n4igWfUeVJAReWaZ8337f8gAh4mxv2CMdmYYEWisZJ9Ge9pocmC3m7PMCMcs",
  "key16": "5kCw71wC7dgaoXrDyKRRRn7jwmk3dYWZNZVT8vCwnrhod8W8f8sgjdCqCmAiESG63sJ8oixvGpRfTLNBdb7oXyiK",
  "key17": "4mEWgVLKH8oeqnyCvCLsTP7u6GCatsAkqyFdFJJEbfVGvgRNScVUq47Yte7ukPJV9bKezVwrdoNapzzbmqVwDLTj",
  "key18": "4GaHEcNtZ3MHJVBY4HCTjtBbcFjNVh28P7i9Cd6AQvSuxP7WvpbaxG1jiJuWUFFjeQxeUwnwo294S2uGEsq4zJUZ",
  "key19": "5yjoTek8RQt9PXRKU3P1sJY6B7w52fVaebQYDjNHWWNcx4MXyYYNX4AQoZCAQaXkThS9xDfgnjDNptE9M5DCHjp",
  "key20": "3MtR3k7AoJkem61FvEKRaWVHePtY127RtibKbtYi3RCEFR4DRFkSvKbsFqQVmLqBQY9TjCzGzQJN9FFNYZEZRTur",
  "key21": "uZm8HvWS5LkTZ1NPj4sVBZDKfrVfpypEecUPtxC82kreiaXKe2o897spd42amb4nf8J1UWiLmDVcs3N4jKJMA2L",
  "key22": "yEERUXgG7z3Bzsr6Wbq4q9E1Ju4R1z136AMMbFzFWwvmHB3et7unoR5w2NJXdM2Ng4MXZMES29W4MpNygJGTXtv",
  "key23": "2vYurQMsKoEzfzUHd6F7eJHPTLMkUi5KLa9oMNchQ7qRvZL3tzydZSbhgn23HCNTrB8zXfUbRLxBQEoEqbC4U3UF",
  "key24": "4C5xbmhz2X8uVGs32frLqKSqQTebPnotuhJTnPNxrJRH9QhamiDu6KAJcLtZm5gYt2jW4k69qLSKy4BJzeDLeVhX",
  "key25": "nR33oUhUUwy3ebAEFS1cs8sVvNTscUmmR5hmj66KWc8ohU6ymds7JxDD9yq9HgANzUkF8AC9b5BfFLFFeocHLu9",
  "key26": "3kYDQf6gK5QCHZbWnCLauYm3xNM3cP6d9QnqRByi7GjQiYjdsxy3LedhtBdqRJEE2qtorFkS3Mp1DkbM1YTady94",
  "key27": "31WQ6y1hEMx8uDE921fa3ruHnyxaMT38UJZsv3RNbgvSagP4KCicE43xLfF3JQt2VYYr96muG5k7Eg1YyN8qAvM2",
  "key28": "5MQJgc5dRfoXAFna6R2hMaRDk3mpRvBmqGWmSr3rwvHHXaHnwhrvhsr8wSSX8DjFta6yxMFgG6fG1UaRAvqQ7FZR",
  "key29": "Qa4siK5jHaqkNJr55YYBx3U6EKMWE5qiAhB8W7PQd5WnxFTeHTwrExLrahEBK8nmqwg8uZ5RTCMGK4oHnfoZEaa",
  "key30": "4zscMi9hqs1HfMwLQ8i4vyL2C9PvKn8M6nZBdwCbh7Xj1W4k62r1RPkwPSKfjJsYXjDVo6it9hPHvgdMT3kbSJoK",
  "key31": "4h3t9Sa7PEkvsrbZaDc5m6vUPBJDrbrgStBUqLK7BHddVhuYrfE8WDPgLFGJGNn6eGbzXhF2jh8u8LsHiHEn5YyA",
  "key32": "f3wvf14BpW3jDWDkeBRnpFCu8FmR55CWRwGKPLQyzYB9AQvbZ4uL8pGgAPB1nMjJVTonDrsML768AWKUo3qA1XZ",
  "key33": "otkVKMQYUptqtiKq1P6A79FTdU8LTCiAmYSjbfafbdP4DDhMaVBNZJjDRviXgt33kqFnGdQwNpkbKAwCtT4oZPF",
  "key34": "2nYDNNaXx5ipLSAg6Q2iRWDdixvaoeebNENusRUoXfWS9PiKr8KtTEfCdcV9ZU3DUFHQDgWWLhYLZa7KNDg5XeiU",
  "key35": "5foYYXPczwtuqcTREgDxMnxGyULf7sqYT5KLoSET6xGkvZnsfFNBMSax9YCPZ1qx72nKnsg1UggmYGZ98hRn52DA",
  "key36": "3bjrSA7sErHW1GbM2QvjmwmqPiPdfv1cWkm85vEixtByg2b9Y942s3SLbYBEWsPNktzKTx37kADRP3wwYNo8rgeC",
  "key37": "3B8V2RtrFcjCVHk8zjrRur8HQ9xp9TTDWT1ZQF2kcgVSrDa5Myg1QF6f2qEJi9uLSnektWUpTN7Ly7aKccrNQrMN",
  "key38": "1BoZen938QPo3AkLZsNVJ9RwTfTEdf5fYAKLfPQym77JxQUTNxGFja3PFs87HCtSbcnYFU25UPT6DFGd77wLDBs",
  "key39": "5rAsnjwixDXHyCdJeu55StxKBqCc8Ebw4ezfebcBPciw8gBf6mfyWZfFkHGU28Qaoh93jyzrDexgs25w7bykcKth"
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
