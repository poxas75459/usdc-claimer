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
    "56Z7f2KW2WRWTbAm9592cJqmFbrgV5Wi7mEkZnHjHdtuAKiPnebg9v7xBzt5QoGxFWRcyUwm1RxxwgucJwi43geD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kY6tUNQbdYucNi1Z5nvYGPiuSiP5FffoWej69S2j63gAF2X7C1nneZDGfDm5hU6CtjfPBu7U6qEtsKWTd4KKcPs",
  "key1": "44AnzschRJCdqhStzSmvduAHa3Wmow2mZrCtMUMsY789WidsRJTGFf44cn3pp9AxS9zV2CmojuYJw1TxzqjPXXek",
  "key2": "2fQHpGdBbBXNxb5B6uo4kXzhTjuBLzH65e6kAUs9gX2TmR82sRnuNKywqFYozNaG9ZfrnfHRjNLTmaGyTD3k82js",
  "key3": "4NJnE7x57NxZByYfv95zkhmRnYtiGSP7vXb7aC19TLRjjJR18LPrvSWjSdUVTKuvd7ztCxJgrZ6jpxXJA4ab322s",
  "key4": "4S1zCkBcyjBHP3L4bhyv3bpNKnpJ8expkqR7eP3AGWMx5X9qfdcR9Bnrixhvcqss2bcUHEQLdHnZxVkv8AnWTgCJ",
  "key5": "4ZMxu42zfg2vVSxgCCwFAgeyhGd9RH5iQnMGU5ziyAEDpKGtTyoyKaprzAY7C4FfkFN4HwM5y6xEY1Mpwr7ABWFd",
  "key6": "47qPCjMMEtSUxauxD8HWqXGq5grfcuHTXj51AmddmeiqAhZHZ2DfMFpJMfpyLhodzY77snS9q4dYW1NRGUnwzJqX",
  "key7": "3wPgCaWMN1r8RS1WYyHPunV1SpHenD96HWg3DpHrfaBLp9zrM6wKyQVca1vk5dhfu1Hapat93KSxu1dLDbHY9fLH",
  "key8": "2NBoavAfDzxxc1QawipmKZBmjQzxscCX1xrChtqMoAGmChXNXhsW5xtaT5G2n751cB1DimycudNbrjZtxyo79b3D",
  "key9": "54F6x5YdQzkJTarHtqXpRwe5FE3XszsAFwjcmQBAmQuTeLJt21Ac8T63HqVCxeY9D1ebj2GVFwMynn6LhwbvijuK",
  "key10": "5chv35Wmq5aAmxiQy4o3mxkMBrtnzD3t3Sk5cH4MFcsw8uSKpNNcrDA1NUX3FH9DrMFmwGEKcBWsuHQ3emT74WWu",
  "key11": "3DcjiynHB32MWY8kdXJecF2pMszRzwHCmp3Ji2kcAywKzwmaYbCxh12567dLUm4bCYTqVwu7GRYEqNmmWShTpWNW",
  "key12": "33zNcUe9mKU63q1c9M3xbKrtto13DR5kBAMq7N5commJ2wni4JfHWMeZNac3sgTbU2ppJCrn6kwmb5GY6hnxFEeW",
  "key13": "mzAbd5mmboPXD5E2SYBuC1Dx6ro1BJMZZuFCgDPe2BFXr6MNeKMZbr3z2hzdu6uvbwmSe9kHPmYHq8AkeW6p7y5",
  "key14": "BqvhxVXuwdbXv5H47CWKrk3fmSuQJ1971V3YKr326s3h4cKjQVDRzycKCCdfVBJb5u8GbJTNmCTyUGBzs484HcD",
  "key15": "5rpwdcBdkWJDC9CV7JFWic8GNz3z1mB1SMoAP5UghzDKtTjYAL26WEio75f6jM7qY53LyKG1yZtTrMeDS53vUwsT",
  "key16": "gKxteSQmifxMWdjxDGSchdRzQApHyzizhZuULpbC42P2ddERxkcn3hQiEnFBtAkQrSC1QCUb5YXGuanvoxYQbdW",
  "key17": "ooEbvocv93KwLnRWTTzjaeE2gkFxRM317bbvguULZjxjkwg5qQa5SG9hA7JbavEUfJaEHBWFv8yfRKDGacDZiMW",
  "key18": "5upyYB1MmaqvLpKiMX2f4hAgx4PG2M4hrYEfSX3FCNkjhUYqf5orgdB2uAgiXdPb5u9C8UJvQtjcTBWYL4n4wK7x",
  "key19": "5JysbRUfc8ShhyUWCEURFksT3c2uASSEC3YnmjABWt3t4gUg4BJRYkP2sGSEqLZq9RVPCoNR7qCsKTfVj7eCZNWd",
  "key20": "Uqrbh1fJfWdJ4NTNvXGnVBRSBfnSktpoPf4nVSoanXwy2rFUiuhTYpAGXe7kCph4MJKQsDpX9SqA4w39iV8m6i1",
  "key21": "5WY9xnpCoS8yAtAFuUMSqHnym39hB4EypCLhnpA8QUbGWZAc3TTkazGZEVfnyaKVpnchnjCMwBJdmzCWiP7GJFK7",
  "key22": "YnrPe1eLCQyixy4BKPQC8BS5KqosuTzeoZUgnVXmtzTM3BQcnb9zUq2jFaSMs5hSrGYZ2zuKGMYnmKmqt2GSDEK",
  "key23": "58jU9Rmr98wzx7BzGhWmuLvnzxhQEvNup6FrGmdfGAqzAhU512WTQrRqSvLD41EZCmu8ejfpthfG1dVsFuEVfRpW",
  "key24": "2mm8w6WbirLuASKBpbdyd15CSCWq5QksTt29otCQtrT5ZarR11cnx5d5RdNHrWDni5faS92ZWUWWbdpSPxKZaQgD",
  "key25": "43CnSw6W8jAyzL9vKnXFcGRBoCtnvaDHMwjS338V3weai54L3gW6v83Rxo95v1AkgJofLpcvh7jGsnvcGEMd2Lca",
  "key26": "2gHY3utLumW9dgQmMb5eegDTuFMRcbKy8b2useghzeDBeCL8fSugW7g82J8Mtg6WUGinxbDJv5NsCgym8VXERVzr",
  "key27": "kJzLqoLEsp1NdzTHpKcowqE9Z3ktQMUkifsYyobbpLCfECmZh3i5RHtea2CoD4d4wwx9XbZWpEYALeqsvMR8mJ9",
  "key28": "ZmhCrL9rNSEvio71AXvmwqPz3n93w81Yz2ZhgsEKqBYc6KTgEKvkgbMVreoNhRYoZNxhF9yhVb6kFfYc9HWkznH",
  "key29": "3nU7XB78j2PHqCQvwu5GCdaF7tqmGfkHQf22oB2Wib4fP1F1YHziHHbSxhQBDkAUKVEMhoer7M5R4vA6VBkqcG9V",
  "key30": "3Boht6MQAXPGborT6hV6FtQp6GrrUgGEL9pLdfdred1KHijQX6KV3MaM627oS786Gk52BxfDxrkiJghkzKa8BghS",
  "key31": "3Qubpzvt8fi4s8uLuaaHFhqZSFzQBKMjjd8GXwvBwJyxFjxmUtYCMAWGjMzNBQWhanc8qMKHJRVZpfzRPGxBksYS",
  "key32": "5N2cbBEdrB2M7xui8jYiaEAnYqSCALmJ6b8TY1vBMNm718E7JNvMny4xSWtwkHrGg8mZBWsMw9TiDv2t2ca6SqCK",
  "key33": "4HuBMyQGtdrnGdwGVrdrXphs7uYDxzuCPkFuKZoK7Ls8W5jtoEG5yZfwvSfWVzoWRuBxaf9wknp9tonv7bS1jBix",
  "key34": "ymCgr8FPU4BLv8e9Epow5CLLMyi3Xg4tWyN1SZufPqKS7QQMRiYKe33DKgHVSWHN8KF9e3Vah15dPRMgf7tD9CN",
  "key35": "3uKsS1uMSvZg7frzivEcKHtZvnSqvfuvCGSJHXFhXf3vzPFqfeWCi9B7nDknqJtaVefSQYchRkRFvf6nWTD5uGFU",
  "key36": "48Uztp5m7vFpxKuZqB36Qmqf82wCSpYxDRC9RyG4JYQ3UmVAKUpfSzgiiQVBQeo9uz4AWjTTXUXBww3CedNYEG4f",
  "key37": "4ivhuLgGJxK1vjHFWStHFf6hcGEo53aESvuZeFSbWBTXipDjfS3uf5ybXfiKewRjxqV9Ypq97FVHWpCei12fnBpv",
  "key38": "4haMwTWKd4wuGZbxCp6Buq9sqWx2LaMqrFUGLa6VQwHDA6MtnjsojVtqYskMkDnTcze2AcBG6uBycApVVUrRndY9",
  "key39": "TXXL4uHXDK8w6Vb6FPNNestGRDvRrvehp5JiySxZVR7JM1bbtdmoKJP43UNwUneSNSuUQCFjeKseogWpg3NFZAL",
  "key40": "3EPAfVjLXCJ3ERFcSgCzghHyKKZYPHqF1MXZghAUEGEZA7EgXLsKBt4dcPdw7A6znHZmB8w6KNPeRZK6pWjoCNXw",
  "key41": "3S8c4GGhW5nJ9FcnddjpYV4YhYei2nM3skNUPn63yNntcZC5qJJH4HYRoEiY6Rh2VXosGZhFVyZ2foEMzz9Liyw7",
  "key42": "5TLS6zdviBo31eT6bs9P1cAmspUmmSK8Fft5uaHSbvYAjEt4itwT45z9E4QMD7v26nH8xJhQroA9cGEDeGT5ydhw",
  "key43": "3Jg7XxW5hCAvrAzuqe7dpH1ULpaW65x22hed8JTkKK2hTG4wNKydyf51dYntLN1HV5tP3tha1kQcWmYh7uCGRTDH",
  "key44": "3eAh1Qu4XyHWV8gDae2GpZpgyRmtptKrzvxLsHf85recrcSDpxGG6TMnHU7qAon8bKU9GqByARhjD5VjMEKPhgBu",
  "key45": "2uinndK2U45BuPeobZLHU7FCU8ezoMXptnruuo7QNZocbmyFXERTeJ1xGpHtgALHpMiUp2JJiE78VWsjqT22nSW4",
  "key46": "5pHjP3sWSU9Bc2eykFi69utXHdHkkfCzXsxYAGDXE4hDKxx6obUewv2JbsxGtdSTZSdYQMQgt3hBPn1ygHtzEDjb",
  "key47": "4xrfhRjqkWcQZ7xBqiL1p3BjAtbs2nhGMEnG8xz4jCMHRGtBBvpaqhH5CpccyAtuyuubpvqTinxHHrDDb43ehAk3",
  "key48": "4xJhQg4f5mZWkJxju75xEAkaUYQJmFndV6hZobd5sfR8hRLEf1fsYRuEWzCg2G7oGt85SZNrUzVSFwsiLibhPNEc"
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
