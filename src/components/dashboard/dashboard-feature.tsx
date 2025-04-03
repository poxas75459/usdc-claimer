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
    "51aNoQ2bfydF8YBDSgFbZCFsN6rT6VSdFm9eDakEKA2VYJEr5Rf6G7e1pMpEai1BRCLcnb5J2pGS6drFY5iBuHTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKvpfXHkWg6rzzwAV7fiq6unGEp2vQrNQm2Xmw3fZhYoBK5gjm1DxfZppKRmhwGQQ2d8LRxHEZsebfQjzgQ2K5q",
  "key1": "2ZZnGbgVqHPBo1mxhtugWCefrfgW3notpG5fNrkqbMxpnZRY22436UtbHMTXooGBJLLmwqWa3PWBpcdyQikP2T2b",
  "key2": "3SehgZXXjHJ869bPDxqGcZdE6DHpnNeqUpT6SZcNBjT4NjAEcqMzkBstbMvQ8pfPiLWLQmriDosNw3ZLHFj2nQBZ",
  "key3": "2Ud5cBinRSN8L1c4RyQeB3rEdtJC71VBka6ixB8y7x49ZJ7dZmw9ikUCeoyMDGZW8zQcqW3cBHBEEKbYTDMT4BZ8",
  "key4": "7DvH9n7QVGou53hZeXQUj9eAPn3MAvPu7Uqf1dcvMLfkqKfU5U7FwekF7nDgSTkGgtBLRe4kgdbPs3t3CA4CSXn",
  "key5": "4XcHD7TCcrnanzCawzX7AUzC8JDpHSmWgWWkRXL2Nr3d2vKB55GmBkwXBfDkrmQGmADoEKvPcyhuaHQ2BdWx68gC",
  "key6": "542zfyjS9v94DvX6f7zzXPRo8KBSfFEmyGCXjWFWje8AH8pK33exwfnk6DKJ8ySbgT69AKpbp6SxyzBG35JQqAnS",
  "key7": "3oRpMNphrUpKCVAeHyUyhvxqYSMT2KkMFv6soyP2kSvUEMScDQvbXkTjFqKzxQaBUu78mvVMvWp7Htz9KC9XwhTx",
  "key8": "5RQtns1bQUvqqwPQGvoUwTxKE85n9tuHhY5VMiQqnd4hxXcJMZ9kGzY1WkxZHYMXuQoYJ4g2RTM8CfyUSNHaYVA7",
  "key9": "5n6Bzt9tmXX9PnoFbqB84zVJx8Az3xTBns1seqGima3kwNwEUwo5gcmfhFRUFTxSzgpcTFM9e5CMPVVZHLo9gxQc",
  "key10": "3uqScnB2fUyqPEXxHj1ozc27GHoVBbdY8MePSFtLvrNET1A759TdzsZFKRyBuyPicJAY3Mn3kKEct6dcMPm6TPNp",
  "key11": "3N8ApnP3mNRKDvAUMizMJAfGiwbWWgAe726LuBnqnvGKJ2Cg1UmkAwBQoKuKpdEqdrGRvR3LdoFrboLU5Vt3MaNn",
  "key12": "4tyQtRwAK6hbromNSF6d7bVD7uqSyiS9NE85BLPrcHFoYw91fP9AGig34BNH4LHKYcdtKXWVMAcXRhF5KSyyRNRt",
  "key13": "mx7cXe6M2aYMsUTeUrbG6aap45u6pUktYWBFJSqtU3fHxifGXH792Bgx7mH2eYuw9zVsvnvvu5x44f85TAFQ76U",
  "key14": "5cTDPJYcZC55fJXADcbUuNvWinm5SMe6bMKfFT16QavN6JtzYne9nr5jypgdYWqSvR2Y9pvddb6EsX5yTmkuQKvY",
  "key15": "3f3vD5Ee61hVYexq9pbrK74NnPiD1DoKv2WkYwxDYKyZW2DNN1R6EgEemfUKwpj8d1S4bwR64nafnuhDwJw4vsy4",
  "key16": "58PBfXY2CPh6eqcdgv5As1Lt6rsuFPVsFK1dvrep1aGUSJCH8RALu7mbSezcHn4rZFWeQQDDtXaFHMEWmAAeCx7g",
  "key17": "36KZa136MjSAn3GSFvkL6VdRXyoV64882XHt2MX4hrEwEg1GY3rsCXEdkCfo6tdQ3szSojTkkBCexryT2TKHGQAC",
  "key18": "3bZofxL9wVCRWzB38Zmms1VvMmDY5sxt3fda2oq8jT9VjWJp8EzHCki3voyyCugf8YJnnKKTv1Ez18y3a6FhDvFX",
  "key19": "3M4LDUGQJFgi2CbZxBvk1GqYXmAd51AqMVStJ77wtuoqzeqnAy8ZCYBgfTStkBKF31yfgGG9Hr3BduQGGzjc4wPm",
  "key20": "2F6GcorAmgYAyGhbCGz7S1aZ4YQuGQmcmvGLCKBgxYGhUESCefqLLpdw8rBksfRiu7xH5coU2Nvq6W2a16nCtwrZ",
  "key21": "3Mz4sJZYPZm55wsxBz6tfgydBXGC6yLxrZ4btwo94sHs6QGTH4ZSQPFQo7wTdQ7CqHMSnmLXKEjPUdNfETgYoRVk",
  "key22": "4jBZ1feLFaGuF45K74suRMopx13Qbpd78K7Ee8LHPPgT4CwEbnXtHzD2RDYTKTLJJdkZvfAV1eZs3fgBXDRNz5gF",
  "key23": "3yVdrVjZQNQGzBF3bvMfZLR4Zp2qgoh7BHFsKMv8AtNgdp1fACG97hZggwKDD5espXU4abh9us6FaReAGc8Gkfar",
  "key24": "Nz3VGQZk6cYnV78a1J4teY4yfwzqSwREA9bafe1UHWASe21WgMj3PL785FwnE2QgJPPmgSqQSiQQMgHAFBG4gnT",
  "key25": "5c982HVuf3Uq9s21creRWjASUUkGHw6HAJXc6eaBuHYFu8yx3h292C5JGoyAY4WSe9FuBQ2QgVTURC1ARxJNKrGD",
  "key26": "4MmkTP3sjU9m7tc7WrAxK7uVk2UJ1KGiweS2kbMvPKF1VZ8orN9Nm3s7TcSvNjecJPPf9nQKFyw8HmNCf1cb25yF",
  "key27": "hVKDTegpV1W9BgcHw6h994GoLNUB1a92k5y5o3Kn1AU1sQr9X2SCdkSoyEgJunx5U64xSZStfpQaf2YuJDAsPmh",
  "key28": "3C4sYYezqtFDxYo9kL6xtkbWN1ZP2odzg7cipQ4PfL26YfRgD2pzu2TndbsHM494yjUbEjJB28ffszRSvy8Qaq1k",
  "key29": "2QZAS8kRDeYds9Uni7u95G9NkPC4UoU2fFEgfwMnEsJNksFf87YgghE6Bq9FWBkgSwB38Nw6EH4AS3CrQ15oU9yA",
  "key30": "4mViSk1wqxLGaEX1JGEgjQqtCHMJFma6kSQ8sEhWTZYexj4QaJtRiEGhj1mYDs3PSPDwjZv6j1NxDiPkvEzg2aBN",
  "key31": "5uGc2vFqiirEPRJYV6X7eeRHBCVhQJZU9144EHqHRq4mV25SjX8cPzVD85n7cwFKfZVr2R7bi1WQmMiJYRekiVAP",
  "key32": "4uw82FcZyenGNJhycJxhu1PLHvdvSx68D68Ud942iJKNhTNNXv5EaTfFoC8tHceVTYuQGxpNPLfJXobdCMDa2mNu",
  "key33": "5mPKJZsyhZDwjx7fqm2q53GBqAM4cTjRRfGJ7f3P6XeiKYNJcLMJKyKoiyVcUPRHcXnarWAjfH9q8DkciFo2rM6L",
  "key34": "2RpSQ2cgKth5AvRwQdrHiu179b8w9cSZFdeGsZZDvmiQMMYcQbv7Ko47Gvkt8Da45o39xKm9PC46BFJ3hfHyocrX",
  "key35": "3e4maQCwXHnHoh7p1SKwWsugM4QFU2SJfm8C9PojoCcn8zavVfhR9Xf82X4aSqwxrYVxg3cbXcAhBh9kZZNmJsde",
  "key36": "2HXyiLSH9BfgXdUSdYvzw1vTafT9xi9JzkksAQTSvhD7VoLf3ZrFiR5xBzo16bqBbPKMVxef6TCxQUPvQL4vH5bd",
  "key37": "3LTvaoRaCCSgCqcGao378De4ZXaCg9Z1Voy6o7KC6vTtzNgw6zicGKuv9jisht4AxnEhEgGwsKkwEgJoJYFcjbVi",
  "key38": "3DSLJrFXVHv44pUT7fcqB8USguKK9HZe6SxpAK8WeHJaJ9oFeNJ8jmto7o4SCMNU7dcS5jbLjLUP5GJcohVRRKpU",
  "key39": "3bgewDHcHMA7mHHMVW2nE6zcqVgQxZWDoANorsLzXcSQLfYzsQBq8y3EsubZrxrAvpuYnJeudxrmCvR2qoanpFs1",
  "key40": "dLxqbqmHipLjQ5o4Qp2AxwoTizVLehmFaw5aHhqC1q6KnPBzLvLv8JEobSVo5PDHE3RE9kb41yVeaFDsdCFnTXC",
  "key41": "34NQeN1ASw81wFFiqa2y9eTa68JDvzjh5QntShiz7hoCvK1TfVpT8aznR2zAToeJjZcz8s2LF6S8eS31rJ3rCP9p",
  "key42": "b19g71DtDzX3Vhcxgexrm5yBvSp188p4eXC5cbbZQfgmCmg538zkyUK2wypMqPzxGPMQSqrq694z7QrFsYWK9DC",
  "key43": "48EBSqgsFvYEc9MxptXagN2CaKPcaTMdQSPB8ffyR3uCrRLVs9wf7A3ejj91jBaWFkeUVzPkZTK7tUG94EWvLWcR",
  "key44": "3bSVXcUEzLWDRp9cXP5kPTGDfVVdmo1iwAaSTQ44WDHtWa7mLXiBn6DpYhhtcJ8pyjaFkCd4MZWfhWru4noFo6hN",
  "key45": "38tZhn2NhYCs1rZpYjymaQHkepHVha5MtWrcHjMqUXj5HgYUVf1prZiRnUL3hAJh7c1eteZidsyjF6qMyCfmHyvM"
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
