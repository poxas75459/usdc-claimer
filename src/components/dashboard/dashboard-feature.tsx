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
    "5F49skVNTVReeLvKCcyK2KNXYn4pqosHJRAGSXAVQUBrYWqGhoACpiKyowEvMC26R3efuZCTMJ5wae1M4cJBLuQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QDqeGuUjjQCuM1CaVEKVFgVTSpbtmRQukMSZa5QRFQjqtN9v8BbxtNtUAEWMCcWYEW5XZZ99Y1316vKt5qqipn",
  "key1": "2NJTHf7fKXYF2JtqWPcit6DE9gfUF2ExStTgxVKxEG2rc3nySRmHy6vwjuXFZFchkJDqiyvAoworz2L6tMDVxc5a",
  "key2": "ZD7Uy3b3JkXVdCGfbhCr4ao1PxNfu1cnfX8v2PyA8dzMGdn1m5M1CmxUJQRm6UGx8aM8nkMSM9o5Zrrsqxfdknj",
  "key3": "26DRdQhcLj4zZpt8QW7dni5RmmfnvKwyeers9wp2LAS1A6pKGHQBzSuzKPn1Ngb1BjuVrsnhmp71TVpMKXpX7gRR",
  "key4": "61XDj8Yo1mNAD1bctziHA6bnAzHxWQvGLoTBaqzhqazHUbp4Ttwe2ZQtrfftYTjdVt3ag9S4aT8nC2TcmW5oFMnp",
  "key5": "CwjeZ5MvJWUzBvxJuD85vLfNS4EEuE7Jqb6oxqq8gGRyWFGHHjAtTxoEJ9uFzicPMvP7xVvJa3c9DUWeQkBqF2b",
  "key6": "2GcCDVTF32xXAe6cd9UJdv8mMcJeQHwiPDyWF3Jp8KknrRKV7ndNhE4RfU3doErZhHLBFtzDHcY2aXnwyzgGPkjc",
  "key7": "35nmkMfZQENYh4EYHHWPiXxy47MAb2nQ7hoeunR16ECea9mKhbX6aohAUTGQXzKrtf4doWeiSA3JozCUeknLt69q",
  "key8": "26Nj5cYPgN767KXW7bxuJEmmpFKgP2L3gg1PuitW4yRh6MY6L72UGNdPRoBcWatSWoEUrkippHq5VTtxz7tnPaMm",
  "key9": "xc4Bfa5K5eXtcMSZjm4YcTV8jmDgGjKMYKU55AtXsagNHKwT8SZpdFL9cYQhnmbSxUfHh7br2kxccMniC1joLAj",
  "key10": "2X5wRz6u63FPhYrop5W69nbyzxjh7JmrU2CWcqxrd8TS38Ce5nRPGvV5XpiArovLMoN5Y3zDqpUdD6U8BPAPwRqC",
  "key11": "2DVvVJ6MV8CnaESnBu4x4iX7rinqQiEbogpbwDcksLfaiFRUdwk8thjPGESf53mbWYczN51eQ1G9QMhzkjRVAEcx",
  "key12": "4ji7xFtc1B3kWJq6t8xzW5MXRPiYgqafBVfyrv2Jorq9x8djCzdF24DG4aomTGUgNAdcRAar52pM1cfxzrtmaKps",
  "key13": "2Dk2gt6qJprpKA5VosZN9tuXv11semrpLTRqyfuP1PwvQ358y4i1iws9EeAKDNyyhPgbPftYnQwuageLCm28uXsd",
  "key14": "61go12C2xFcL3E3urBpc2ufbKjCu3JJLEdwSvrr4ADUxMVw4F4zUNkt3YXvCj4XXBmfTAFCRZmtDeBVhzK9pMvs2",
  "key15": "124h1DmQ9toLeGsKT5Xiq1YeUgtrW9pSmeKs1YysKYbD3DmhUudkepauS9kXoDgsaGrSt25SMqRbAJc7ShBPHYKa",
  "key16": "3MULoQBqdXm9ndgABEmNQvkryVzEtkmZqNE4hJ4a42DesSXuVDfWoCnCtXpZkARyCGiF7z8qeebk8GCGULLtXbfc",
  "key17": "44E169WhizR3wyqzd9z9w223uMS5bHNRyPoZnTLLASJRzZcoiLQMkRjBQfbFUAtn51UGh1wX3jrzLnSq1VUmQvHM",
  "key18": "2VYthU5kfKwPpZRT5TbSkR9XgNMREaP71ZxUpmRrrZoGeudi9xDkckB8PDfS68hNeyZidzcx5x8gAvZuSLvDwvrk",
  "key19": "4cVtAVKyooq3J5RjTqG5kfkamc4ctoUcP586y1CiWZfgF3oLzKnJYUS5HoDpd98yG7mW9bBmZqSXHMvmkz3iEHGL",
  "key20": "4ecbzFdGFEGs5Z4uo1VCKukgEjFQ97SP2KPQV81p8c4g7fF4B7MsxfDNDXuqGTLaRmBQjeSzoZTZiyrVf54NCTsM",
  "key21": "4AH9vS4uTYt4xViCR8JQqgjb7EhvPYHhrBd2faRtKuTrFMnzYMsrj11HYoGzQ7J3pq3rhKET7F89jwXkmEDTYxDn",
  "key22": "iFnxm3GyNzSGweXv4upSU3XYCtXfzJkdi9dbVkhATKKyDUB6yr6HSNpQAED5yNo7ah13Zy8dCE1tRQVnkMEtos8",
  "key23": "31QJsU5SXxghFiGQdKYTDEWHDUjdZJ2sDmZjhWNTwmhfteyvmFqKuHxCuzLucDjxZq79N1is47j8asp7LenxBynd",
  "key24": "3EeXAye1WN6cp8cNih3kZNSx41Lzo2w8BKni979WUaypMrHSDKvUew7udWhPESqhPP9PWd3tYhc5rGeM16NPNFcz",
  "key25": "4oGpoBVRrM1iAQ45huFpC18eXetbn35Gb53Auw8eh4E4bZ23fKXP7uYURKQntAA4UbPAKAa7B7ebAqeAk1BjvBmL",
  "key26": "DV8LRvP1bxSuDqoRYy7eaPSrBM6e71JYagM4vZsUxnice2HvftkYzCrTQknsfmTyDHefoT65Noypz8AvAKfMQAr",
  "key27": "3odi4iPjLcxLBY2jMpNpYeu7U6kDhUAjSqkfZQKxY2nMTDigRGK568b75ARKroJ2xtbcpgUfACfYZvGucJVTE9qV",
  "key28": "33ovtsx6SCbqmSeacDRSCB8mzAmJ9o8sfVU5MVWwWvpSN8NFEDzm7ZNp4d2XCK6YSbBe7yKWNgHe1991DDuqU6Tu",
  "key29": "43m6XJTwUbkmG6YmLsMGEEKX8Y6z5B3NLtVZgMpW6rYYibtwiBVKfC9G3YLniXYs441oB7KDiGtMSGAJ7fyyNXPb",
  "key30": "5JUieBsDZfi1HJgx4Nt59VxGqyaEw921BhVGv2xGsNmNXFjDthunTE4dccmmrcfeXi77qeEY7ZtGVTf2syjXPGjG",
  "key31": "2GJm1AoyXuhb4pHdsPDDrfWb2GZ53ZwJkvNW3JH4FvBFkJvVmxkWWzEs4utnf5h4ZdHMErEz648D1ridGtajCs1D",
  "key32": "5FVsufaoqX3QGRd1GvKV64YtqGtwyKo2Vbpezyaze1scwhHKgjzfYTYRQMTDRTd1GS1pcAQzkKy1v6ztrRahord1",
  "key33": "55FPoKi2WseKmCm78Toa4XAiMc1oFugRNqp3ec9RfpcSFrRAbZ6wgKi56BXLRB1e74cBdk36CB8kovM3UHimLV9A",
  "key34": "dDGRtHK7p3GY7nnXumeaeGXwdJgYjQ6xKz7LsxT4S1dyyeA9ZnSgqvbFBexq52w6G26peaH1usAjiS5hwCUr6wH",
  "key35": "2wzt7oCPwWXoT6ehmKAqt2aKAxLWk7ijoK4DHmc38Jpz36zYKmU1a1wSSzGN2bL4ytVyBb6wzoYQVCifijviJGj4",
  "key36": "4oYUfvgxEByt6kbDWNxy836jNAS4jfTRRDHbapgg3XL8HiFTpCmxzvGvbZp9yMNuV1rJ58c6SfHQLj1EbLx72Pzs",
  "key37": "5CAypYcw67Ziu4Ntp97Ln87LcL8V2KLv9pyaWdws8ZLAur97kNhiSTYP9dw7YwDSCsCStzpA7SR5Eq6r3YWkG2b4",
  "key38": "mrDD7aoxaZjf23qq5mRDACWwBxJdSHhZxRAk6vHQkpmrkpQvTxQwhTN2zwm6rSAccdSuPftnqcSeeFDK43Kxzhu",
  "key39": "5PvFv1iYFFZaFCzABsMCNV6VfhUjmNgtQdR9wbkzgXxxbamkiBfvBj1Ao5bGHcDUmgjmYrbXZcNypCeu7Db8Hgcp"
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
