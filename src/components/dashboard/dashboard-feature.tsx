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
    "5fMFxmgu5HSw1QHmtcTiMg7aFEaptueHPywaVov9tuZWRziZX3mEsUvoHiXhB6iB3Kabtyh89H1tr7mWwy8sQ3FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2B33Le5cVTza1RSAtVEsgkSa4wtLt22992eu2BmJodYaSaMSFHsQfmJ2mDRw4Ui32DSvbNExeU79ZJ3ZFWwnyH",
  "key1": "4yGW8PSD7LjpoAMSZnkE1aigDSc3H6ZtSLcXsRNtT7vL147PS7Cd8qVGDBNuNG4W2q7K9J7B8ZNxsbMidFPyTb28",
  "key2": "51tzRjZi3uJEvgy96vvCgu5rKhwhqe1SbhGr82j37DpAq9ootoQx37V8QXrECh1KmUfDthwQxdHPU1pkgjqqai8",
  "key3": "56UFupYWfFMTyx9weSVynrxre6HLckFXwihuFLKnE63aRRdZqS77NHS4EyvAXRx6WznM4fjzS2JZxTaSco8Prr37",
  "key4": "2n4QVfBAFfyM17e7FfbEdRkwymCWs69NNWfGYTsHZLxPQfgoEFCt2KPdqY783fojo3jRSef87yJCvJNaENhRy3M1",
  "key5": "2XVJgmJnGopzGxTPjge3gVJb14dNRL13jFn9EADEWSV4tK6zcdcZjasjq7exXEZ8EACYTYzccrw5DSnwci16o8GX",
  "key6": "TTgSrXeFFqJFnZ63pVFSyMd55ksuvGyiM22Xu2tmhbBhn9S6Q9SBg7KgTXsTqq1ZhEWEyTshCvY56UJSLUfvF4Z",
  "key7": "4dAxC5bE381eFQsuH8VFFPhCqKdC4gNUjFTwLXbVAXTYDnb3YUucUuht4FhtmxsgjXvJZZe6VQVmaczCzPmaETMM",
  "key8": "5sJ1yn9GK8kzzTiwhgxA6HM78sXXL9g8yS3DG4oovYnEMzMQmc5H4BVtrEQ2m6pmgNtW6ENfNubqkmWESUA64Lwr",
  "key9": "tBWmdcJMAw1fgG1Dat9EAgw2WgE6dpW8AwcN4bCCqibKpGEf5egNx94FhfkeZ1xpaw1FW9EfR8iZP1nTWc8JBcH",
  "key10": "4hBRxL3Wj1NE4hkxrAtBePBstRwkHqimKk7t5AkYXZH3Niqwik9ATrdnf2chvLxsvaPtx37beWLLhmhxqdjqFhPU",
  "key11": "4CcF1bofUEyHRATXE1zfnTaYrjGpqUi6EhMriVSZXDgTY3LGwyBtxbEQwDGa6sxgXy9BE57XmsSaipJZAXzgdXBp",
  "key12": "39wHxH5bZZiUjLfpufqGGxUQt3yB8Q9w6EpRZXoRq3mWhzHxjMqiw15x7bsVKsTR7ug26dAHevPN2wASrZT1E26V",
  "key13": "36ULCjeyf2CSJkiyz5gjBkyPGxXo1jnEdMKfJqqF8HaoyuLSoqhbK5dtY2Lefm1eqPLRwtz2MLpFv2GHoMmwRWCd",
  "key14": "2SvasQQ24jbgHRDmQHwWEe4jWCm1beeAUtBrgW6JxY5avVz2gLcEErrDVgpKKuMN64kJcWiG3tykqS3wf4y7TvYn",
  "key15": "3QCWaGUdqUDYuCqHQVEj4DxsfdzyhBkZi7rdc6iQenNu8dSZKyb5xqGeFedkA1baHwc7xDbSXEXyz73XhUKXFPkq",
  "key16": "ajrXRioiXHNzvpJRAWchDHDAwFZ1qYe4RaUHE6QJ9soxqYHaj7rSF96YW8SGNRB81jU5NwDat8MhNRZaFpu1ujJ",
  "key17": "Wy8CxS3zjjkddY8YJBHbrAS5kT44cN1E453ghTkM364XGahMN9sYppobqyhgyCGiREKNkdmBa41areqSt3itASz",
  "key18": "3kK18UGcc42PUpvwNEA4mv6yW8CoFk9oCY8kJZMyMc2w1XodFE5Haa3QZsMKj2r67upZdQnyjbXXSbza9txdQcFG",
  "key19": "fbBV3cQWLTLJKQqtp2zEWp8juy8HnMxoPqwqKRBuvTKrqEQ27Te26D9HVbPmhTCBEvw8NyMFDHWLRggW5KYWKhZ",
  "key20": "3ofg7To3P6JKXGyuBURqeH9fFh2BjH913PqWPvumco9kxGwwPZor4TPQguL6dC8XbpMp2Ft3epsg9mJFHxYsnu1C",
  "key21": "3nYx7wQA2J9kN7trgd5vMAcHiR3tYme32o8syh99j6fvJ5xKQa8M89rNKW5hb4nEYUXeYW7V5VZFosVPpdNMbWuW",
  "key22": "3jpPshWdiS3cgqCnCVFqSgY6iuu7EdnqRb2THw6KuBBLDbARJKnYTLaudgzgMwto6f5TSrvJXmE1eEz6SFVqa4dd",
  "key23": "5w8Fus3YAT9DZUAMaHbKNCb2wEQ7d71K1o2uBbRng4wGyzD18zJgXTymLBy6i76YGe7HBdtVEhurgiomJj1zXd3g",
  "key24": "5HPJRr34V6htjviM3wwuHcNSiBk7Yurkn3D2hYB5YdX3UDkmPPvKBU3ndK9ycQoEfSQYWEVrJ27qqNfw4hPQBtna",
  "key25": "4EZJAUF14VpuWQXg58TSk94fKBgW3YcVvc4zSZj4u2uMn9hhdBDwGb9kuLaxVgXNG4bBrLsgaPmLNHDvPFnrTCk",
  "key26": "5Eb7VHo2kzE9h2cxAvnk11BxQjH4e6t5UAzNhW8FvRtG5xBdvxGBR5veq6jkmcXBVLKj7i1r8Tym3Q4gf2aH5kHe",
  "key27": "2kRKgDzBnrQZvD3j1otbHSCxMgfSybe34RVN76EQAcR6oanU3msqBuQTzCci2hMeF3F3Zjwhw8gzkvvDAeRCbXpd",
  "key28": "4oea6JQ8tCmqwKwTg1oDK6rY4mD9DaewFJKhbVvoQBy83mYSEbgqoC5pqTikWuZB2zN6fbbmvCEwBK9nY8XE9fvF",
  "key29": "RurYd2uLHheXCbABAiRc1fYwEobgiB4YNaLD9SC4Us6TeoQiNDhPyr5yZ1oDsNawAh5g9Z6SrnuCYs4sSeAPp6K",
  "key30": "4edMWwZ9uuFNXNDTChjEz6XEam9TTWeTCpWwo28QCYAxuvgbVisqtKr6F9Y2AvBrBv9UcC3wADRdfkgguWfWVL2d",
  "key31": "4L6pbd5dneJRrTwrTQwgLstGvadV8Ut7iB2etwRdh5hew1DTudzNb8kxa7RGiXY7NPXYdVo3RQnsJjWuJuHu7sN5",
  "key32": "8uqQoeiWndXUpqTiAyHeUeMdJhFjbS2r61zYxoNqzSjDFvQPAjEdBwYwChv44iNXstzC1dxxXEJGDrDH4pmi6u3",
  "key33": "5subwjhFTekZbmFQAmHLG5VmrSz8jV88bAGGQC8m78ZnAd5t4QhYiRL6X3GBAMTyHs7169WWmMnfHnogos5B23tL",
  "key34": "2crjWzV6Qyj1k2gqN4kbXmaGBucQyN32zQpmoeo9kE1KTtQf9DfzVJkzaYcCQvhXX119MwSP5aserf6Cr8L1bqvi",
  "key35": "52c43F7HnTBGx392fquPNQRDgsmSuLoEWWn1G8UMndDGLqcrgWZsUkrjKZv5bZgXsTAekaQB19sgHkyTA3ECrhTi",
  "key36": "Upr4CjqS8xZfwgSKyqybpKHiVpcicEm6iBynb6ZmRJMXjQRiZumRHjUhpvsdjUc9qewLb67gGrSSdywWhiugkrV",
  "key37": "21B3Ni15eTJnXmzBvXxChhoBoLCeBAYhosxjHEfmnbc4iyxdSFYpXkUYBTAwx8ecvmTveKxRdQwmRhmnkCBYAnbw",
  "key38": "3WM5Ymo9gLEveW5dB7C7N7bbXN8KTdSHMYhzqniBsoe7dyZBTwAcuScv8gYmievqPBC2y5VU2JJg7Z5L1LBFEqxh",
  "key39": "3uwVg5WsZREkqrf7Z9ESnVNuy6j5nPHboFECc5B17ZoHN8n1PTfGaJQQmS1ftgLyDw7v6VxB4Zv3Gn4fVTXttHqz",
  "key40": "Z86oW7SSaM4e37sJjdMHCGUbmCKxakeUaPee6moCU7BD1DTbF7Ma6ifBrhEeWkXGSM26oB9z5C1tEwaKaSSqf8q"
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
