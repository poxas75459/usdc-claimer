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
    "4BeJTd8LVE4ZKpS1EXzLuMv32iapMPMU6EsnTSrhTCnPjZEMEnr3XEyF7hCWUvXiC3QyNPmHJ7YCSegPQ4xXDHJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEyeCZqSfseQW18rBt7bTzcmaCSHynwQF1WkJUihY1EQ54FBNxvYGCcX89uqgwrJomoa5jP6efUs1vbp7TmYQoD",
  "key1": "39vQ5a7sjGKM2rPR3R84CEkrWewC7VYs9H9uV7xhUPHQz8Cv215Jy15t1yMjFh8tJM6rNgum1CDuHSRXQh9rt4tR",
  "key2": "2ZjJt1KKE4jzi3FzSsYe6eHtzrDdfjPy3Rp91Up9JUXMUE7Pg8uiirvB5oHZTSbqqCotsFTzXu9adV66ukybACGG",
  "key3": "5eCHK3vNm6cAsrDYepgdYvWS8GTeM73CjWP7zXtMUjcq8BuVSjjVS1WkThCSuhU2gob2VNp7MQCAasujejYvKg6E",
  "key4": "3sf9x5P3rJswBNspfLuhHDGSQVAkorRaccPwJcHCTiq1JYnLzZJQJ7dPPbmEKujSmrJUS14VzuJiHY9JyfDhmFe",
  "key5": "2m2mhDrRNsV9d1osUoekFxw75bKuiYnJbYbMV9TXhECuKB6UKvpMt3inv7vxyjPYG5kfmgSAJ3JSCB46JEAGU1y3",
  "key6": "23Z6rfgVSZ3Z1D76UrnTaT6U66bpZn7Hc29KFwFq7VxtHAALW8TXDZiYvFQZbstecBH1tdP8Wt7VRVFUjztB9Mk1",
  "key7": "3MJ5MqA3kJk6isWmweZ5RFaEa41KfXbr9VoyaZZGvemRMUeEW9J18J9p3a39ZgmjEoQrmNFSnjag6U6UvRCpwjfe",
  "key8": "3R7yrQha7QDtJfWsy1c2tyWDUecSHzzv43xy4JnJL4NV92zjem3tYHSZtT3fhZREkcbfMiDgFu4AstMsWo3KWEgW",
  "key9": "2e4UefeC9U16x5rXWmraqV3Fd8sL9hUNRD6gDqNUAR26qAhZ4xDHXNw2EdcAbZHkV2hXQQs8TB3DYNtLdbuY1Nif",
  "key10": "sFPYcDd6w2VfpS2cnPpRboqw5dFVfqPeUHKGE3awHuu6Txd1Xm95dYyFt2U4RKMYdoKC7DDTUqMjeLNiSwzMpqK",
  "key11": "2gWfuSdiKVBdQrNJzXcHCe2nPtXgp3xgVrqAkxfdNN9vZh9C17LnjTckBv6HTW9bjne4vrb8VECJ9D9RddnLfiEH",
  "key12": "2eeUnGtHL6pwt7gjF5GhrJ8gWXQY77ysJPPfxsZMzPTafz1qFDeDyDghKX1EZUwi5zgQMibSS8UmDH5ueyzDm486",
  "key13": "8zDdpKgweCkkrHhBbgUuQSPtMU3o12Ueq7vv1NeBDP3xajhBvAM19Z2Q7bE5TfX481kBEXGdN9a913TBFeTTmbw",
  "key14": "A3ZxL2J54xb63ppDRpE3V2aZkQV98xbhL6aX3dcorAr8Tow5PJNoJHXeEqcZwrExNun4sG6ohk2vuuRySZYsv3d",
  "key15": "ggmsQTpvMoseJ5XbDi2TuVd3hFEX4uVVtZXYJHv2cjmebfqY3pbVc9ag34K2hc4T4d8RhZNp9hqfiKi1DDGn6KS",
  "key16": "4XGz9bB3fd53hL9rPVo1bFRzitzB9cjMAmTgduWKueVgTqMBNLprPjNXtpZgePeQKhQcgMnHKJNSGP91quCfqsKk",
  "key17": "4Vf3CqdTUfJvJ9fruvc6ESitT7645rhFDb4gxV3CmiQ7YeXrMV5SCrCFC9knSpdAK7pDDwJPVcChDREQqzQt5o1W",
  "key18": "2eWcWPwA8Q1gASo1CEW4wcyeFBKNFGg2axfCcJBnGjLNqH1362wd49bKcs7WonSdXRLG8SuSLpNb2KiJT11cgkTy",
  "key19": "6fh31V99ZcmhctfkLC1pM1eb5xuLzEwnCmLz54DV4tVi4NZ66SKvdSZ8nR3EQBW1L7P8dkMRk9F9vaDCHJsQyNm",
  "key20": "2o2FHRBMeqe7ZifqZvTTH2exEUfT8uUaCiuSTBguxKvUrFNdVo68Zj65h1rWe9mWWT6jKpu9KSHyL4WDe6ZfJVYb",
  "key21": "5cES5UCxN5MTkGfPADBACUT2mwKgdcvrXmJZp3fysLq4cPwc7Waossi4GWAqddkX9RyDpJKDYLRptcCDaVJD3nCR",
  "key22": "57oVPQUyDR3SN4MfGdAiERGSqu9mdUAmGkuDyCczqWot3U3c8WUSzbYyQzEpuPzXmKrd3Ryf1tuYkMRTz776G5B9",
  "key23": "2nihfKCPPYXGJj5jcUwSmAVRLLqbaQwqnCWahJZn9yehWRTDSXGJcmZBY9KE15GctKr19dtVod7aGTN1AfokMo4B",
  "key24": "5sKKH5WwYnjmU1wG3wgkcpKcWBigvMYw8SjP3er9eGy3AXevwQhPByCJFQaNg9aXYSAxq4hS144KruMyvuZgJ5qi",
  "key25": "4hZQrMJWJEtRnJn3zdgQQTMgY9sjEfVhaAuhem1uyAioS9rNCsycrULE6gG8MTwEPyTExrVcajTsFETrLYPbxvxv",
  "key26": "2m5jvB7Nb73XfQmw4tXe8gSamJCvWxAGGSdjSRS9M6Bi2WJ91FDAk6xenak7NJ9wcUtmjPPH6SdiwN3s1ae9Frn4",
  "key27": "36aKLeZJi3jvT8ZGDjPhgBhy9BgpGh2HNPHnz2J45WvNwFEiBPMePtuRuhPmmfFGfhGxTeXVKLjEjETrxY1GZpEt",
  "key28": "5Av46E6XCCYnSUzsttdLgMyNtdWph9wPCzqRBxNmkVDEbCVdC5eFNExPyJ8y3kwBoVygFvbuX3wkigQPJvcgsBjF",
  "key29": "5J814SxsqdSsHH6wdgMxtWhn7wUQxD8nhqY5V8AM41CC7nekMAdjkqsXytby5kS7Jz9bGnG1rnV9i4QbsdFfeXRi",
  "key30": "QrwhP3gKCrk723shKaME6HiEVxpomFa4CN9uM8GYzn8qnhduLFU4jfTGPCqDHpvr5zJdQhotHMX3ptUNehucusy",
  "key31": "UYhPcyKJ9hutiUkA9WWwMcFwQsLvRwvNvQwgwigf7EtL1YCSR6cj6dNNPDx8eKNeTRRo3XD5qZo2m2MkDvrHtbd",
  "key32": "jQr7PTo4xEbGZEgVwbSANfkDUCoSnQ9JxwASSbfhp9QUCHfn1DXmNL2862DvdBXWxHzWSBjr9KbV2FfcfH9w6u8",
  "key33": "4gbGknZ8qq58cbL946XBQ2ZEen3GcbQRdcR6MnFrn6sbSa6SMKPXKToiK1S7KH5nDfa2NJzEpyZqvQbdpyhoTMm8",
  "key34": "4xn1qiEVpYY77yidS91M5yMTdL8w2mjpJGUzveDYEpmbgjPLcXmXSPRX6C8iwME6XJbkSmoWY4e3GoppRbLm7XJV",
  "key35": "5SXySFiAK4Gwnhd9xip3K57TRMkYNnkf8JqaVvP7AjVSU1WjFdQuTJHdb56THnFVc3sCWEyVXLVcFf5SDVQY4Rpr",
  "key36": "3vNFTR2vMWEwoSj7YtX2TVa56MsQVdrnH1Q2yndawVYpqGQAZm1KSDT7DuH1Eiq48qJKu7SVMnY3sNvnud45yWJd",
  "key37": "2PBi1aEmHsVXpk5bb35jQkmQCmjeymra7qdiybqXUCEdAvZcF1wde7qtfZqDnnFqLzkNQswMZDpxGzwuXsD74W3n",
  "key38": "QFfNgkSjPAu1L6MtLqZDg1DX8C1o4WdZ5UXBoCmSeMtaAnUNcfYqdoHLSDndn88x1YyG6S2bmGeMnBQTrKdMUWC",
  "key39": "4hZ1Yaa6hBi23nppqMqgMc9z58b523XYsEezUba36n7vHyRJDBshT29v9rHf24XbANeXQabzo4Q9X5Ci4uN32TbV",
  "key40": "2GGr5oFvkfToFjogYNwH6tyE6CmuBTQbmXaBnxToGHAXgD2Enivdmg52JXGMP4isPfnDvLa1rZnfpBEwRuBKoBVd",
  "key41": "BdCF6cS2d6gXXG3deuu3dsUr9WHDyvB3AbkJUgSnLZb6rcdiwDzDEei1SXzK9PSo1yRmTaNv4xoXpM7T3X7ErwQ",
  "key42": "4f3XVg1tyNNSxsySaaJeTUSqf7rUJ527VDnNzBZsRPEnR1hV4jg88CziPSZKLNqMVUUPRSU27rxyHDK7i9WMWDQ1"
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
