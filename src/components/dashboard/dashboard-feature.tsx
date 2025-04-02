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
    "27619sN45JZ5Fu1zcWmcChFy23xZkgUTtZNFTEqHw8LtV469Ebsq77kpDEYHCCDyKaK6oKNHDD1A8cqD853zyFRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CtaziDWbEWYzRox96qQYNyzFBq1rQekieFWC7428PAeueUJNjT1RzEiYBhjJHJNtGnXfxDviC89ARfgVT6LMQfB",
  "key1": "3qjvZg3RCoAHSob1jtvpPtxCJuuivCL8fQSot7SZJhZ1AoxSp3ngbWgFJSaaDnFyesCWkiMTjZ1NWBnTdzCHS5sg",
  "key2": "4ErmQrWHv5ZWnvWg3M9mW3GkfJitkxdjujy9NwjARcppydo7kjwYmo8GwJon4enKp4Vv4izy5197brf1ZUydXfr5",
  "key3": "2iWRTuhqkv8H9MBwE9QaNqKSCScW9DpLhZprcpkaDyuFGT82umxHFD7gRpuyw5KPPso5cpsXTsXzgXE4p5LA8nY4",
  "key4": "M7uH67kdMFLWRQ5zb5Ao8XNRZhdXVfpscqCELYHBQmUck4t5QwS8twVqhVSdST7bnFLbAsFWRN7GB6Ww1FoyooA",
  "key5": "34YyGhFGgkhN4y2dk7c3sDukx8B6g4cX4r8RAiVFpmK5B76yPP9BU3bKvNvvioPmtwG7HLAgXmCVtL2eQVQZTPWt",
  "key6": "4g5Wp4Mdn3rwYUM8k48arntSfwKhavoiyXYmYBYKV1H1geE7BC846WbGQnYYy3txBYFWAQPnQu4Ufzrwdyvd1nCi",
  "key7": "2rvwXKGk93Az6JWYiHt6EGJ95hzDzfy3UMPJqKGaYq1UfJ9WW778VYWcwWxRDc3mKSNtxGcZbP4ewtxPZ4PUipX1",
  "key8": "4ARg3EdzKbWMEmY3ZaSerc25S46Dhzindtp83cinUhe49gvM2SUgcQ6Gj8PgrWNRy9MtPrqzEeuPZ5Ncq2vtNpjv",
  "key9": "5DLLZWFYndZzZog4a89c73PkzkDzLfByEcTGw11EQxYKyFwFW72dCiSkwiRiEQwMxNnSdM1NMRCq54JRcdxXgojf",
  "key10": "36wwMCG36k6hmcXMfU4rPJf1CeJX6WJPJgcenT5j25HW9o1dd1KD7PFUtKCFHUPfSD2B5J4jVpNLcq64YVn6zGjT",
  "key11": "3314Wezsdpq3b7tRU7sfkMvmcZmJ6eum3ZAYHAhC2JarUud8gPSG4sy5xqXeoW1TA9zQrD5bveCNjpkxZBzSuPjb",
  "key12": "2CeP493EXnvk5AYqy9ZAQsEu6vRi2koE7rPMuNkPoJvQywAwLybsNCEbfn1iimRMiBDa8Ko1182kUebvJhhWzYzY",
  "key13": "3mBSgMdjHxYR313SNE8x5yRigfTJffTSXb5jjMSnekFRmSSGyWLGPjuCgaoQUmb8LFeRYjRBDskTnjQh6tmypbCX",
  "key14": "3WWuYwiEz3npXukicQfaQNx3kqbWEVGwRyqv9ZLWRPDMQi2K5by9ou9x6dAAWsB5nHbPr53NUJvfVLBF7356dxtA",
  "key15": "3weGkqtoqmx1GdthE4uKU1DfPpVuWrtHo6GeCnoLVheQq4Gk7FyzoMTHHu4pjz6QqPo8pi6FPM7ohNedWELCuNDL",
  "key16": "2GkavKhPrz7QS6iJor2W4wNE6tyPQiqJrtbomdyH5nCtWJfTmHtk36DB467w5aaAQ8xokj1MYXDUAYYm64NcgvkJ",
  "key17": "azUXBxEUvTXCTUKurXVzDZKhXB4mqqgw9Q2XcueRhiLDxoKPTq6iq4PzRojTU8MHP6i31ZVUsgjZNWh36CSULd6",
  "key18": "29HXYyeoPypmaNaZ5NJQsnb6FmoidtGfxrXM7zqM1yH7GBaq5QzwmjeqnLcb2wfp59ZNs9QZcAQLcVP3PLuEKhFR",
  "key19": "ySSmQAFNi46pxRhriuiaG3YNEgUdKmq1qRjsbCUPgNGLHWhJFPTi1iPVZ9sNreZrJExwTVQv3vGE1pD85DAiWEC",
  "key20": "4i3Z85aDp7tMD1oh1nbyUv67ooKHCrpFm4YptvCRQx1QT2soM9xPaVEAUAAwNgnuffu4FYcSUSeiQc1qDVb1ET2E",
  "key21": "33PL4Q3DfejhXSSsqrTksB1ZpDgeuYTA1c5dNQoVWTDZquurR5cVVhgQbbmK7364crUM6NxMsFRf6FcpyZNFd9h2",
  "key22": "5tPjBhtnKw138HgKk1ErnptM8rHRuew4EVo3PBxqpfGUjgUtLjDpuM3qRsf1hmnzVCNM3AnKMHiuAK5i2YDLVkV9",
  "key23": "5xdv6bAeBF6MPi6Qwbs7xZRsb85aEDYv1bEbH2jqkN8rPvad6mqvVeysrxQwVysSE6LgLDA1uAxbEvJhbU4uJhQm",
  "key24": "4YnQEa2PSNaVfCUmv44VXtRrFMpXAopxiVGw8nLoLUWHyncf8ceHiuPqSbF4kk19CtKxZ6sWBN2Fn8FarBFcYVMZ",
  "key25": "3ebmDdLrsktqcwSjgkpQn4neEC9nUfAdfTBeJ6XmVWMPshyRgX89CjicuNHK5CbbekQoA2cK6nN5cKpFcy574df6",
  "key26": "64iQJSMZSwF43gWtGAaMjBtXiDQXUbZk6qz7U9qpNW6Gi2JUqk4TbrxYuLD27jHNjaT42TgQSUx9dTQJ3ZeSq4TX",
  "key27": "35Bh4gEm6hKfrZAKVbb2N9qGC2GWNSPH3qwWu4czDNjYfL97srrFezfppcy3d5x8y91fFZ79jSfDAQq3PX7E7gqP",
  "key28": "2N3Zb8wC8Pezkdx3hw7Fv9hMWKabyE2ZGPMcoJVeT8gdA6nJku1TXi3Akd3z18n2JAxKBPqnJALVwkc4DgXbUYYU",
  "key29": "4RBnniVnR7MxCLwyKo7Y1jWhNRVMjXSJTQ5TQLCon4tGfpeQbE6Z2L999EqRG3pSm5rETqfrAW2Ydq2pDVuAPeew",
  "key30": "2rVEkNBJrer3Qf4omzJjvYKyCAzm8oduJqegw5qDedSUPNDh36AMJPivTsmiLkxhujbpugUcyBMaUTcgNpXMUDWf",
  "key31": "4DVEaXYNnrApY9ZSEWuesRjhePgbtQsimjs8ya2kkY34DgxAoo27v65b7fop6StraxeeJfGdA4iY9CMvBqKg2xyM",
  "key32": "2QH2a81d4hp5Eh1WKB4Pas8548Bfj7kaBMiCjsxXj2btjBSMe6h13ddwEUcC8UJYCrD65oPzeAtWiSxCJMszFRTm",
  "key33": "55k2DFbcrmM6dcFZKVsDTQtwj2HNYVucaW3d5LwEmSByN5U3EMSJBitfLZZCbbciUhXUmc6svQHZTwkyHnEEgz4C",
  "key34": "4KFkY9jxg9hQsLvTsbZPyGy6NndWue7BXAcfDLzrqmXPgJH85JDWAh5gNRMwAw4RCAeVjnFjpw1DD4aPhuTd2ocv",
  "key35": "1LALxwT8G9L21pNEW2U5KNnbqtADjxnCnXqLeFT86n7pFPpcCXQ9uYhZkyRU3u8CxL4WHpCGUMvRAQtt2rqEoZR",
  "key36": "45P7s8wkf3jg9R5ACzUHqpiLUXMBUtsnRgN39wKpUgpydm5f47gdLMp8pEmv4ptaDaEZXuSh9ZNv4gjQFtwL9Aam",
  "key37": "2wdXULXGW816yghbMzbi1HW4nYyshp3hysLnbTN9NdVrs82YVUgBMy6cWs6NTXRuidUaUiqeDAU9GXyjnQzahP7v",
  "key38": "44hU9oSn3AM1evtg7cKqo4MMurRz6e1dSqBYXfjytQ6hvniUoNd2yZJGGZkB8Hnd71ReWjbJuPHJi1FfjYhJijgZ",
  "key39": "25Uny1CQmr2UbYfCwg3fL4JzDsi4c9YZtK9VqYyXAmLSa1xinACkBMRpX251LCVK9q1yyAVKsHm98sNJ1YMSnBo1",
  "key40": "394UyTzd37ySTzYpKnwjNoeah5KKLzun1QWqNpJB6rGqaeQBP2cVex352J8DgFTM7xsjop7dizeuCdEVScP1CPiW",
  "key41": "5innmFnCQzqTWjnZsixVYj1GfkLn1kG64n5cSSq9tGoNNDvNiKrPmvGLGs1C1j5D7UdNksprhWxnNh8dnLKCK6gQ",
  "key42": "PLaJRVXLohHLTSEDUBef8NjdfbjLt2UoF56JfY4HgayKJ5ijP2q3nMPg5GuzYaeTR5xn4tafbLLPd1weHjdDb3c"
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
