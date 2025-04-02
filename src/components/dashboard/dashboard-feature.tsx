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
    "YkYjWpRhVWTRhuvTGL5fMcWq5FATJSJEXurbi23YEqFkDbo547whNuvvJgy1iZqdm72Rct4UBE8Pfmr4JtA3psN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4enU2HD97NF5AENoVZwzxwHURXyBaScebaqMQaVCugHRmkWeqMUyejkJmpmKoHz52KxRDcxGuveoGoi63SJH9LrP",
  "key1": "pwsCJfhKex2BrJj6jRsDXwL6FVLykQkgc3JijWgWxEXpigAaqUdM5fqf4PZipBCSPAEQfxQ3WNHZBWWxnHkBdxf",
  "key2": "5nosdh18Sng9c4zmKY2nJ37QT8ez74i2yaqvQCPYyGeByG55sWJnqi8uhVnt6hEM1FahLnhUwhLPhgevgrR6YMvf",
  "key3": "4mXzaypL4xZYhDV3QibER3VqKPy2d43Hc4g28eRPrQfBEDEyd2s1oZiLzPAG4rePGswBPQsZhiVR88CfyLSZZFLa",
  "key4": "2pwB2egSew31FctEhttZnXHP7kpv8f9Fq1tTewHUdRneR2LG246hSGPKmbwKob2uEsWL2Py5urAMjeGbVx5c16zE",
  "key5": "3KN9QwHwCYKBHbRPotRvWux3bKXf5FC7FTejfrCFrjjvYmz7PvNRvWhaxD1r27Rj5iStCurNNgpeuB8weWz67nXe",
  "key6": "ZSYPf8VmxTe9S7m4vakyrko3s4PPjWb2bCrbC6gPk2vRYxKXGebmupbPCbd9zkbanDEdSDnBHz3uATviMhT2kDS",
  "key7": "3GkQMX9imkTJdBG29rsW59tfxw9vJP1usnye2mz5kEngHuvhW5dgzuuCgcmbo13iwQZnNSJB2zvY12qmh7h8TyoA",
  "key8": "3WqdbXVsutBAnyXHBgW2Qzy8h4ahokNqmZuBm22g4vXaZAeCPJhiPKnKdKAhsqnEmp7BDExrYCTrPJ42tADx3asP",
  "key9": "5eYGiTujjHj6yeEQkJ8PYtBwoWb7JAFXEQ5a2p6wSh1XvjfHmAVVZiuPSUQdq1w4qBPo1Mh2oA5tQ1iNF1z3VgCU",
  "key10": "2hoYrHo43XjfZ4GoEw7v3bfefmoACym5d1Hr4Srh9bfehHjwuvGKA6oZZTfKeRMSCjbCzCHFFCgYaQMZkVj5vbG9",
  "key11": "329LdzxHLj3AxNWpW9ctfEj9AsLaDoRNLiXuki5RDaFzz9VjJ2kT5oGF3PxoVBFq1h1zTZcusTP8m899K1YiBDKJ",
  "key12": "2A4DMWxiHi5wZVXuqTrAsTQvF2i2ht6ovc9x9VzKPNLgWfrmQKM4M61v3rcyFPkFewaDN4rme9Srs1jgDep9xWYJ",
  "key13": "39WdfkPxT35pW7nnJ6nCdy68pLPLnwg3ohbVtFNuU2KXreQNUdWuVYZcDRPMkPRaaEekE6ce3tjS6anihPGF3y7q",
  "key14": "4BA9hbBt7JxWfEBcAYF6AMyR4xg8oLvN8vyBria1YTrG4eAbizPymT5y7fXwi1GwZjJDMPHf56Umzu8y7h1NkvRA",
  "key15": "4nztKPAs9P9YEd8MrxfqAZGYQ43oqnLQhoiUoBJsLBv15DDkRGWVf3K6tzMVFL9ZoeioNGmSruMjfqZawKjv3xPU",
  "key16": "53wbNMTkBjUjZeJRmB7EsRJmy3c6XSkpcRFQ7mAUhnrDNm7F3rBhdp9cLxZvCwPBfVoEjNV53tMQ1c1hdycqk9aN",
  "key17": "5Au7BH6zLKfGr8UPM2zKfWA6jtashzAqgszNRh7Z3YfL1ySCFhNXA5XRu6T96x2bPyBMKkgLEyXrzy5jy1USHrmb",
  "key18": "3EZC3F9MAbjuwV8Eq7AYNHoqa9gepR2bjM4ZETFGCfp6BaNmMp9nCRtVpbMTn2nMwxZyQ3Ca3wHsfjeYameayAnN",
  "key19": "5Ax5ZBepv9aF5R6dfNeL2TXAD5vtr1QaHLGyZM62y3zSHJquP9WsvsPrjhKGNpyBxiKvAp25JyKWkFb1PwDxLd8t",
  "key20": "58tHKFiDodwScstY197wnPMZ5aRJntdNd8C6uwVWQU3TaXTBBMx8cKjjUfbvcgqYzBUoRRudMkE657fDZnowRsf7",
  "key21": "2XTj28u1mGumvQWACLz8JmPY96FsMRibCK852TJELy7NCCZR3wgLrU6ED7Sx1Fiy4qcYzgqaxJd7CCVN4ZJpkknP",
  "key22": "2p6rw864d2zVBLcJTUcLq7ax95umuCtjaLdQMHz2HDZKfWhqqqpRDLDzQz3q6TsnUSowZuGk3UnsS8VN4rdZYvrz",
  "key23": "3nyUveaZCPwg6KSzqpD9orBVAzSC67oEVLsa872zXPxwS5fGNoPF7Q5s2wGFwxzLBwDJgwkX9vR5cSE8QYjjC6H2",
  "key24": "5PHcfimd5dHRrJkJrwWbLDp3ZPU6E8NeGL95D5mvCMxu6Q4dW4fofJE4EE63V4GVW1fiGsymLjddeViR4nnGT1aG",
  "key25": "5DCsW7zHeQzrqV5fAMG9po47f87EodxQygRgj8qc22sToMUdjm7SDK5Ek7NdQvesVvt2XY1BNNbo8k4zdk3P9p2x",
  "key26": "4tqucZNXPeEZN9EstXgPDP46eGTAEkWmte54y98TVkUYTnDrSN22rCDM3u9TMXSCmW64Q3UjU7UtGXrcSrjxAnMz",
  "key27": "3VCX8Gw1Rm2tAYjLuJn7N6kvZ4zfvKTaHvdt7TemTpv71B1wR4Rr2BMMtD3sAEN1aL45Dv5fw5sRTNUsWsiA8EJe",
  "key28": "2grJY7S3jXt7Da3GXrsoraSUFEMvtkQEaRaAC3eBAaTFFtextGLYcgCdjk3xUbTjnj5ohaoADBDRrLXFtVaCUwvB",
  "key29": "3CyZjLpJk1zdkACsQ5ma88K5nLfN1X2cEJBbC5rjAzuSsskiL38SP5FHW1LXGsATHnG5mvhPNUv44nzjxJrEDgtX",
  "key30": "5e3uMqazZzW1mNkmiDLCqHJfUKc4ucNzpfAUvn2AvgAyKSwVXaM1EFcfiCNb6mshD3uFYoAW9YLoPeCjpbtmAcTj",
  "key31": "31ZUpTfxSmoapwYrkTBr8cmncbDvJQvzfJ7B4zKinWMGSkWZAKuB2hpAHgShht3hXFBMp3XD6Grfng8rTVHmuXgL",
  "key32": "3sbPVDzi4QA45ACzYaRhyh4EjnZygki36m1JhWykAMP3Hv9U8Fb6HVo8MsvU5ek9DA7MsxnvcryDJL3xj2VT6hQC",
  "key33": "32gHjNrkYjL3Ajo5s72P8geHspmJ5Jc142WBLA26uT1yQErXuGsx1e6YiGVnsFELLN6WoFMQw99aDw6ciDefXnio",
  "key34": "nFBJvYQ3NARND1hbY363E5BuyJPi7267P3X37RMv2iCt8xZw26nGnZW6d2mj15aMdqADv2rgxFqS5cgznWsfZe2",
  "key35": "3SdACcVwqS3j1DiUQgHid5vC2CLAjDS8cgJ65jVhV8H49QEWDwvkRKhspj1E5otd5Uh167F9k2NeyFfNbhw9gZvj",
  "key36": "2ZU9Qw7i5DgnNzjmt6cFhrEC9qJBZX2JTf9FtiCSLWmEn7MoaQANPV3pjVkfZb9HAASXw7RXHL7HxNpnPvTLGZdG",
  "key37": "ym9vMVirvW8Ut4L2rmnw9Ca41e619GG3xFpo2wcjaLRea8DTK6EZvGiH6r6Mfee7j8MxVnPbcFenTXZDq5QYCJu",
  "key38": "2QX9KdddMnhf4rx3egGk568FfqqNi2PQEoT12neJ3TA7nH8ScKCMxRCEDqNEvMT2P6DyWJ7o9fh7whx2Qy9kAWLE",
  "key39": "462Ly8f3MtCcjYJrEK4esjDyFhTUywCMzJ8KdyQaqV7wNdiV6XSkwNA8vt329c1zo1L7M2no5kmfKtTVw3LfwhCk",
  "key40": "3eTEcYJFxZCwh9aWF1FEWHhKJExT7CP1cdq5QcMjfgXRMrVWpncC3yq84mmLycTDprKbTjgAm2kEfvDHw5sC7ZMp",
  "key41": "3UyhrkEuKK9e5MnCMTe7a6x6jApDMQeZkf9K7kHcSqMf77oPCK1o2HgNi2K16RfBKBSsk65ZGRVzWcKhmjR3De1T",
  "key42": "4WEZZDkBx85ftnPRR7gHLFD1tNNZWUxhUTn3n8KHWR5zH1KmiwMdie4QJwzcApUk9Lj4hwzJZfvErjdVJDYhpKyT",
  "key43": "26dnRbTscmu3KpL48H7sSm63qTSiHb6sJoFJxrNZKt1hxADz3qoGC1DQNZdJX1yHYRXfjKRWLdWhPT3H2TAuDhjN",
  "key44": "61d5af72dp89LV4usaWXtcYJN7t3V96txdLAixhLc4DK5J8awcfs8XN7FZ6YJtyWzp9o1TogQqY4a8fMbwd4bUBt",
  "key45": "3crC6gjdHNfuRz5obrzFvcgxUf1c6CqCT8h27x1cH755KWvE8oaq7BxkhAzTstz6E4WdfuMnddWcYvuNCNUMUyCG",
  "key46": "5h3xw9E3DdXz7mnBhSjhfAx2h6SawVE7wsEBH5EDYJUGyDKHH6244CrVhPfQnTzJMwpKoAiA4GmDStRwkbN8dpML",
  "key47": "sd9JHtu79oJumnFpvAuH2sUT7bEiLZgqZ8XEcv2rNHj35fZCyooFNsmPM6dTEUT1wZTpwMs42dGpNh8ZKiSB9F1"
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
