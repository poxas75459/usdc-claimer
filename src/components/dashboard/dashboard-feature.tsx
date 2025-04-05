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
    "4ErgjDKep1ZVQndHPWJJZHboSSSV8fEew2KnE5jz2q3gE3crRx4mzaWKgx85fZwPQHvVZqdFJADY8ZirzP7EY581"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRyL1ApsqRhFwQHyS8uA5r1cvRt4fvw2Hg1purAX89gNedtiygcVRDB6xvfTPdcxDEX1FsoDuxt1ESYGfQVzb2r",
  "key1": "5E6PTYigAw5egTHFw2tDUzWbxDudSNwrSkKDd3WQKwdxJia4oLj2W8s4YtXrTfb1vRkJUpLNgBv7FMaeZ1zxSyPZ",
  "key2": "4XCgQbHRKhMSsDAE74KqimkreB2YdNR8rEJmYpnx29KUAyg29iXXpeNyGGhuq97vt53mEtGbdy5F9CAe628TT5Eb",
  "key3": "2VyeQ5GyWibk7aXGtt2PWpXCQZk4ibMRfqFNKHncyPR47DFKzcq725uLwWs3DrvDhDY6ussPoBDs5KyT3Be1vnW8",
  "key4": "4kdEdER4mXQMi5RrrshRZxwnLxd3VayaQZh7m3zqSYxmNBydWkB9SXpD8p1bjboLnUm21zQT4mTFPXGFYvKPf86A",
  "key5": "UbrjrNrGQHa7dMVFVt56vY4kVheCVa1TSL7xiM94FaqcepTWxi3eaj8fPTwx9KwrNNuq5NEUCgMgtogteoRYyPa",
  "key6": "WdG6V5rW6efJPASTGVoTEfXUpH4kScZegBHoEZC1gYzo48P2BZZAuV4f97QxbexDqqYXJUimmq58DtpLqj2Bc2K",
  "key7": "3pCQdrhYjCapSJVthES5VDRbS9xqL27wiPCnVoxNEhJ81va55TFnzc3nWDGWz3yJtTHe5EqSVBk7yZiP1fRFuTW8",
  "key8": "3jM7umcEnQSKNRznyjQtwHfyJQUfi7PMsusqnZsdRNZSDQe9BFV6qhm93iHAw9RC76kJwSFQLW4XTQU9jGze74qN",
  "key9": "5otmwsxXSZFe96B7Ye7SA1LZ9nEZyGqxGpFSz8A7uhRHRhz6VtXVrppvpj6sJvvvbdrWB3n7Az3c9hyJtf4tFujh",
  "key10": "3KDA7iRgdNq1RKwbMZt1xTtRnkKcNjh6JduRMKFoogxQMEAirStPaKfDewhVaNmq2Z9TDKLpB5FBXUHp3BnByFiE",
  "key11": "62PqxmmKfrj6xE9GUskiXXoBNFdN4JBsfZmbBzTLPMPtTsNE7NrmRjGSfhjzYV9oF3uP8tR421Gg4T3uuzo7hRCa",
  "key12": "3jKvY56wdR3iHjtmdvru8PeJkqkvLE2gK4PrHWAM1Cb2y1g6tPXv8Lb6FyJrHgdnxTRoTCGd3nPYKe11ftrTPqxR",
  "key13": "41LgFuUoP9dszQXbybXGiRs1XuiX3rZHRDRfiZEkburQDbTta7seFYVmt3iT7cqA2Y6DTTTk6ULRikREBHV1FR68",
  "key14": "2Pbsmx5Mc9yn7LpjPqBD6WHmPqSLVo6TVqVGY73hw79gCMeXGmtbegUp4W2Pvn1cVkmvRszKtXSaaZkzhZKkz6Mb",
  "key15": "36f551Ei6gxvueKb2vKL9t52j3bSKBFESh4j8iRN9m8onuLiCmHuXyjXjyxqkun6UHbmDwmqsrQnTXEqZuAYzn6i",
  "key16": "ubouU7oXQqXmmp9zN3Phm9i8bvxXvwB3eMB2UHDNWB5qoHJpQR8kSP3sNLh1vc9DANqTFWVxhRM9fgNQty5Ft2c",
  "key17": "saCUZ24xE9RqGRVeD4xBCGnvsuT7RSDETVzCwLxjmfkpz6ao46uKqtM9jvSF8nZ4cGDcHiFsB39QzGEjUhUCzFW",
  "key18": "4cFQw4YR5HeFVokLVdUgfdQVqQQbhcxJpAXbsZ89jk8cB9tnVaoea5zBGxQBh6XuBfEqPUDKRRs9krDmNy1ccVWc",
  "key19": "2FQqkBK1CcV8PggLuyMbemnGui3MmF2GvaTw4e2L3K1SdN8o4JrUD3AXNDky7AVramAhV8yRGMkGPcn6wkxUg9AL",
  "key20": "3qZ414vUUznrGkeLL1xc52GDAr7geFSY4PSBFkxat2AFHqDxNAvrrPkbGCCsesAongxKrvtMd28CZ8k433RU7rGT",
  "key21": "5RBaV3Uj6mdiGQwKTyK7mUAuXidw4gookHEVsoCkPYB8fQb4zVaoZ68YXhifBFv3TvY3Qg5bkHtticB2j8DW4n63",
  "key22": "4ftVAg6eqe9b3Hfp6W4ekigPSBtxd3fyodnGyPXoDd74eVCApwD5qxHB21u7M95kYvNgefzcStJsanwo7vuFR6G9",
  "key23": "5TXCVL4yqPgrg95tJJyrfisjFk89fSNeBYCRoo8QX81G6it1MiULmaB6UbSFUdizGMrwKrY2AoDYDA7PeybLrjDR",
  "key24": "txQUy3Y34L3ErcTurFg5MF1whZKuskfpdWALHuZ4ZRGzR8AGHr7nZsbKhuastbAssKW8v8jzGxSqRDSNiqi4e1A",
  "key25": "3oiEVPkjLbW45ffBKR9gzc7aS5yi147Cjv43CiysBExQYwsVZFcPXGYeYqewGKwKiKamCbfnXH5taMmqzjoxstu7",
  "key26": "64ZCktk29b74tifNdnXukd8Uf9fuzg5CoLdKS7tX1bgCk13yDuUW8a6eMct9kAefcTMEhmvaynY4QspmRfAt7eSg",
  "key27": "5gzXMwKjUhLa938msxJyDLxZkcLA2m639gjdZDyuez2F594VQcL93stpAfgbHGWDNtKUjxefshLT6psauFPCBADb",
  "key28": "2snAjNjPtEMJDtL5qR9B5v9AJJzRnCHYcS2cMgPmGBcVTTf712ezACTv18uLbWfGCKMpFYPwEe85CLH3YsjJpC8V",
  "key29": "1QAS84yGq7pxAMt5wVY725jsR5YwV1UuZ8xZ3w8bNFdAB4qJ57LWFfzbFNpzKy5Zv8KawNnKDG5AhqXrHJMfqAe",
  "key30": "3QwAQ4tAGr5f7zfuBt7VTadBKeMrbZHV9YyWWEgYDqCMKp8SzVzA4u7rfjddBL3L4btke8zRVwCCrwd8casqm6n8",
  "key31": "4eSetaR3CQudN6N5Ai8in3DcwETaLLedDdFbBzs3hmNXJEqp2xaGBwRMBC41qAVjUs8icNgjTiat7AjxJDyfSTno",
  "key32": "3BiPVgVsCEonLDU6Qzc9hC13xcAtvHbyA72nRJwcpqGZJe4CckjM6uRNRyo3pumc6W8DX9Y9nZuPWPo7qtTBi372",
  "key33": "KiK6N8mC4ts4R423eyjqDq8pAbcNf2dFyagTJ5Ch7HKyHEpf8RKWWMaJeDnZURC9JC9RWqKZBRpbsffVYEW23mc",
  "key34": "3pNJnfzDXLuqyH2EjQdqPkyy7CXbgWu6HWnPNTKKNRdeCh21TTDok9pFSLiDK8h9KgySa1q5RJfTVhwZDZwDK3Aj",
  "key35": "1kF8b3dzzuQ9ekTqvvNwfzjiowZXiqWru953JZJe6k1X9eJ9GuoMe1vg3DEXsJWkvkAtpT92967XFp867itFHZ8",
  "key36": "3twPbrS8CNqiuXFYm5t6p5idy7Qj8GtThRDrmJmpP3UUjAo1MPMr4pmbZoVhjeU98E2n87sWRKBUtmdQ7JGkGthh",
  "key37": "5iiNdRoGR5y4VswFP3dYP37Bcyp4p5bz5BvQ6BBcj9H4AvcabYdqJ8ema3DPWxxZKXQB7JMV4wYVV8d7VAGzdM7h",
  "key38": "5mF8YdqTcjHiRxpb9tmkGesbj6nf7RG4ruMqtfAJXRg9ddnL5FeU24dEwbnxpHuoABjewDrqfPVH7YBMQQTSLwiz",
  "key39": "MQFZDF4mg8SwxX1ssdbD4z6iarQ5vMAQ5nCoWJYVNDpQXEreZCdfY2Z86TRZadD29tWSdkoAthWahV9oZ1bzJsv",
  "key40": "2PJYP3nEAPgQt3vJmUhQergHe7CXeDQDkfiicWGDnHxJfghGUsWwKrUt6WfyD289CLE7TSPEeVU4KXAd7rw862V2",
  "key41": "2t2DbqvGdKtfkNm7658eR2xhJqeoUCkvhKzAwHduzb5ZxB45RYSgWnZxbDt5A3JLoh1FAgF3csBVJJdY5sa7UL9t",
  "key42": "2sA6aPpX1oRWJwBvSPUunWFCgiEn8954NRzHQkyNhbEKr5PmcPVLS23U1J55t7jmaYkwBwgVHCyEDTv8YkWZMCqw",
  "key43": "4B8m51Rk7BsBwxTrdEAx6z46ErvoaiYNtGPPzSSgzzQoNwtGdqZvoBQKWwYLtdJbiWUUbe9M9p9hP3feE4uZWV8G",
  "key44": "5Fw9boBecvf8Jn3yumnMMDhLWXYKRnwQeCLUYLcNKNSoDNoDEPEqXXc4K4shJ6stVp2trdThUFEsBPKcDa5hjLPa",
  "key45": "5jH2uXjg9iwieoR7AePYc1VS9EK4dQ5tAqxnR9z7CfZ68QAvzZz76SfZ7vvmhVVkjdqEYf6StXNtcFQd1gFVTzNb",
  "key46": "5iKWGEFh5Kz6GZBpABBkeURtsGSLTkQjswVSeca7tout6QCccpa6tdxqrpwdWEHKZxefwfJh7sFZpkaDsTBKG4Gf",
  "key47": "2YFThGMSbjZc8H8yqS77sPMe3rW7t913evqv5xxc5aBMQJey5C971ZpKzbNER4KjqJp35uhLB4MXT3wxcQNRUcRu",
  "key48": "3TC7NyZiNFcijc7vXagExKYSuTkkJjgRuQUFhLBYPJvM5TfxTZsFov9kk9qHEwQQid4WzVMm23cZpNW9af7icfzB",
  "key49": "NFZ7hbZU2Vm94JMAd1vb31f7c1N9TxXZ4BPimRptwzRxFnPyB3s3UQsd6VgJfnQtjRnbzh6Fpdi3vhrtejJBnRt"
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
