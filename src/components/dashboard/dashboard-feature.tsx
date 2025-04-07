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
    "2XyLFc5dk924RXRjj6oZBurNqq3KorVi6VUP4CSukSRrLLZ2Npr7VMtiobp9k6JhPFp3D17R9P2xd9wyqKx3Gsd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4maQxMGxN3cifBvrJrzvUrPxipHqs5Cnn1QPNxU5PiLhjfvCwZf9X3pF4srpwADZ7iEx8jKfwfrpkPVqXiL6QC89",
  "key1": "rR2dtQwFkhN485FMkWtEkLefqY1VQRvxr8XS66igHGG3YXnSFX6n7ftSB3NDoUUz4oFb3Nm1eEfoeaoqp7j71vk",
  "key2": "2RrBh889iwYJofVNxgVtd7HBKFJioRkWVmeLVzayBY43wjPhc4jJJUztaFeT5AyaUeJUKFRU8rq2zJM3219FyBj3",
  "key3": "ppz5o1Q1xEbRgrJ6MGPii4RzjxpcYF1d74QonhLQXHwGUx2HVFvqowB7XpZiuQJ1pEoPpxusHJL4dX5JKxbbxwV",
  "key4": "5JDUz61wfSxEYaaCJo7KbT3seBFM2Lhaii7udR9R5ASrk9MY3ba1B5fsZxsxys4veoNKnz89uth1wVH5tTNSu2jm",
  "key5": "3bJywYsQcftkQxmyAsvVPJdJ7DfzniC4tZ1Us2exhSVCR8RHAcE4Xm3sPdVDZLENNyQPvpHjiJWt4NfmoQfHHKky",
  "key6": "3WXbKujCrW1d6WEXDDrRLz8Wj3dFR6L3GGviH7AaQkCbFy2gVSSVuWVMPYekpJxGpsrHZMF8K1nFhu8teit2ENMh",
  "key7": "2mjZyBqM2atiuGw6FV174s4FKopy8hLDNPsev3KqcwwNKKcwxmbUGJwDzvmSgNirBty8Wv45kHXWW87mv11ab6Nf",
  "key8": "5EYuoZbmPB6XdCuUXLggPP7oJML8FLLFy2HDwyd8bAmJ24YfHag4Wc651CyjqV4uoDuYKo7NEoWSsVnK1aLG5buc",
  "key9": "5bWGEgXg6GfKdho3ieGsSksvuCfUzyLT8xrpvMLjTJkVaWvru1iAchEmqBQc1Pq9WB7r4FjFspAX1pY83ESANVZX",
  "key10": "5Z2k7MNY3z6XUMJ7WxHYgf4RTzy73mgMKMxUPBnoxYCi8PQE3JDQFSYP93tp9TMQLgJ38dP86XTHrFcYmckm8a5z",
  "key11": "66xXP3DUZUEpEmbrrAiWKHYVsZgZCpw2uD3DZXNRLESVDVru4x7uEotMFdzGgkncCCr7AQywQnvH73qxtbLQMYMB",
  "key12": "66XESya6AzKGHFFQ3W3J442KcpdtyBUYU9CK5ix5TMEq7Q6m4PYbRyE7iVM5mogCCg6ySKvqfaiHwrLT7DExrmFX",
  "key13": "3rtEqv7eL2tBXE1inonnRHPxUfz43L14pYGQ5hqZQ3WY5A1R6zoAHCd9HaNX8Sah2autRXKpv7uafdxZsJ5mNsWw",
  "key14": "2vUooSgo9uY9gvbnxYco9eMraTKYDuEKmLAu5xJghVkn1CD7c2vtnfA5nDMzCMgFMVGJ1JjWVUYjsuLxLUD3tpgr",
  "key15": "3aSYNqBb9KiCdVuNyoje6BxrGTFt5xnnpPSaPxmSNmPZP48y6sQjJJxAtEsA7ZpgQbMg1B1A6QSU5jBkPF4vve6X",
  "key16": "qp5sERdiNUV8t9qaHRuemuLBfwqMVUuiYx4FkZzyZAWhNmYEhS5pUr6iMBXHxRyy5FbbGUY38kptScPdHzjZuby",
  "key17": "p2adPCCr8DNinzQKQVbK9i3tJMJ7smX4rMRs4ttpqZikuGTGyPaxne7hnt8KGzzLTAPBAawf1TBybsj2huYHzPb",
  "key18": "2GwyJHyuRnoM1NQtaGNsXNVAnxEvJg54rvkUf4Z25YnPpksa6ayv3qDykmDDqpW3wncAGEKaW1hXh7pFLJsNC2em",
  "key19": "2Um9vB2VjTJkYUHETY7rAApgLzsppsbh5CyNhjkWN98CPc5SWziaGoEoFZ2EqaxHMSx37npJPP8nEBH8WAPcjXio",
  "key20": "XKivPQyYmX95BM3KLB94hNjHqLFvfmM7fURynmjJHP3raYzFq6LytFrYhjDpdt91PBLp84cNhCYWVR8sMZckgra",
  "key21": "3pwNLyKERi6CX5SeJbj4bD52Ayd4HwmLps35PyHpUuiXsdLEXDjTwmNgMVGntM9R6snGbdtpemrzNr46PnEfyrns",
  "key22": "4nad4oMAxTY9UcHssuBnY3rqkorKcmgwjcmgVmn6m6CCVJvbYZ2hAUrhvaDhzy7ke84AojppftHkQVUrygk323Hm",
  "key23": "59KHwgdP821bkSg9Zarwwr4nAN1Chnc4g7qhm8kzhyDaDhmNoGH8XZQjs4shpgCze4k8nH1TaZZaeqEGCfcred3H",
  "key24": "4jAXMRgQyBoVCajkin8JrrBDtyh8mTzv147mmNqdn1SUF2DDT9EFK5aawBd6VAeTukQs2wQM2W9YEprf2YLtzApj",
  "key25": "2BGeJSEMmiQZJ6kXQ9RoC7Q7QMx7zFqPfhVcWSd3zLVaVQEY9HRAL2zqEwefYw5mLs8gCoqfLXCWDdJU8JVdMxQG",
  "key26": "2KGRokJroRFd1BmrdaTumAQW2Tt2WFnqRJQVWQ6PddMcTzeKTHRTsAWqmJu4p6ktPEnmCJMoVirF8ZywZ7jmGFZn",
  "key27": "3ktCwGUDtZFCSppavM1Q2z3NfAL87XaAp3UYLUintV5R7u2g5x3EPDkbgNFeAXQn7zhrLPPJqq1vbPNX8ZnddGTD",
  "key28": "5FukK9gJgqk9S4KfHxTeqWfwMcVqJ7JMknhbPbdfvjti9GomVunewa1NWY4U58a6wNw71pe2BYYfmKC1d1cThYJW",
  "key29": "4DsouByad4HBSHPaGoEERz83zBTUUFjbm6cFn2mbaW8stBNkdPz2VQVwpvvzMURgvydFvPSwHMHz19Scr5Rn2AnL",
  "key30": "5KKNnxHDpVMEJt91PBGnZVCC6DWGvkWy6UYV9qdgxhutXnbEsVXejvBewEJhvt7eiHAURxTpdAcwKTbtw4wuFecw",
  "key31": "tKDfMtsMAPBECXd485CVHYqnfWLnwjxqryCqoQW3CpfjquVaPRDtxvrVr9jdby8PNXfiGdYdyQB5s2A9EFoCRP3",
  "key32": "5brgPLfy8bYrMj3wJHmfPtXoqEA7fxcco5UZ4yWJyJa2U3ndFWwBRKVfMPmDKo4AS7CEJrfaDmfwUxRoxJp6s2dC",
  "key33": "3q8xEAWhwer12Zkm3VPZHkcLX81mbXUV9Bwkmy4xWPArvtuG2mdChQuHw3XqTHoFPeEHG9URVpggf8i5YCxd3N53",
  "key34": "PoDZW1pFCrSPYvLNrZt6oriEVTkaR6fucrLqscf9rodoi921fsYaxZCNxV4SUoBeh3YzHUAfyBx5pz3zHWxexSu",
  "key35": "UsmWYmNTzVbsJGJsryJmazAkUg9nDyn154j5PrNjpEXAQGLcnNfha3PWucZ1F31WFHSP4eAuTB821eq3Eg6kfng",
  "key36": "3RtjaVeazw8Q4pVPJGL7Yxx2hUHoQaZFERbwSSrT8eXaC3uMoL3AAHjktmz82v5E9Ustkf7Hdnx3Y9ZX3QNtPN9G",
  "key37": "3NCR9rgobJYKPW54yza83LvRqZeKmP6xgFAAUh7Jf5pbK15tSGhfcuvy72U6aWDzYAUDAjSBNyvE1z9DoQ5EsSqc",
  "key38": "6bfPCYKn5GMAKnNYfzdXzqtgtJ7jJaP5Kh3qr8bJTLspU6jk3qu6gvXvAgQw9f6F7vTpZuXwrx6N3psW5aZ33Ep",
  "key39": "37Nf7bafEwKQr4Q7fKe4gLkzc9qfSPdo7ezRRGH3PNPVoHBGXsHW8CDg4UHCrtewWQxTeu3RjGSiYj3BMnojEsuy",
  "key40": "3M5sUVrfEuHdpZb2WzcFuWPNtmbVXYVSnAK8FTpFiL6Fpdc9dBXhs5eDewVYmaEAPFRdppkrjD3XsLgHceZEQTS5",
  "key41": "25QFZid77TYTmkEnaWWQuFh1JNQoXPbB9vFar3iDZhF95EgRkJjAWd1seJxnFwCpjKu9m88z635PfbLMg6adpodD",
  "key42": "5ymk3GPSbTNsvvGDCq89CU9f2ukKUqf7AmYkc1wzyatuQ98X7EQtYRLymnZ7Svy3FoKCCymmJEkDoaSnB96ofwkK",
  "key43": "2bk5t9MVb1pHNS4rdeFrS8qY3b1enyc3Aez8bYcCKKr9bWErNTvvuhsraAJWzPvWHvVP56ACQL9yftejNrnYRvfX",
  "key44": "3f7DG5sieEWpLaHLbuGKgSZaFM7VjpzbEPde59tWigYWvJvUmACk6zedxh81WmF1gawJJvMvrQXtPmjT7MzKWYiG",
  "key45": "2auvEaYCYaK7u22sq5wkkBDqN17vx4Z8LT2W6uyuBis1jbtewd5kbwMSjS2gz4pU1NQPL92pjhAHtcpCsj6gjajM",
  "key46": "2HxXrk4xuiogGPxtLLfYW9iYwY3kzQEQhMXg3aH2hyQtMR4S146Dmy9UbSdD3PBDomXNYCtELrz9cwAsG7QUzJ5q"
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
