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
    "4GteuHRCChmLUmY3X3xZ5wLSRiucAkjR7DyDqFjKPy2jsRvyaHFnotVdCTk4ADNe5fDhvda6zkZRQ4pBTDU9uXSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31eH88UQSaoPnuqmBHjaKUU2evgM3t7LBStJAu7a8UvRGfJ55u1wcDRHdAzx4PN47WWeBUcf9vwttPCYNGPxDjM6",
  "key1": "4mFsA6Eyaefm31Qzb1rDhrFVqmGeTAEeBX4fAUEJj2Nr3mDMKF5hHPvn2jhMg11E2ZXdMj81FWfTgimnDoUcUzQ4",
  "key2": "4f2W7oGA7qPxat68WPNNmCDf53uDYd1B1QCrSLAvRMEyTndMxuYPKQQJP4b1C2S8ujPSkrVgbE1piec8trHV85yr",
  "key3": "3i979HTewJA8AmLmeZbpqA3WYJogKxZxQSTDY2Tp8b6sT7eEeCkwLYPvYgFhaAXfdfGaoV258KdgamtR6W8UU1Ah",
  "key4": "4ApKVg4nTS3TX7P4ZgD43CsmNqiJP3PF6r4F1aLA3n16kkHGVbq4qDKgGyxVepDAcoyxdcyazofpLFCAX5qupMVF",
  "key5": "5dH5Py7ZMjnRGA7s8c6jUCji3bqUCodoueoRyCLAZ3r7ZA21xrA9fh3BbiXJDsM8KwBcJbshtnWM3HKE9U7PbNvw",
  "key6": "3uWzZC3D91d3tJhJbE3k5VwTH5wVTiySFJ3Uzp2jHySFQYze3B8A9DnSozzbBHu4grgkgv6JyLuiUL5MmJBiESYa",
  "key7": "36dhbhVAs2A5NFcKqfqfpcjt11FY99fVqBnUvWRhAWqteMQe9qvyjChBZ1b2KDLHrfd7iu2JzuT5DMwesWYwsTfa",
  "key8": "4VcuvNhydbo3u6SEiyqzMi28Mv5neY12oHZkPW4UKqXASjFpBggw2UkGRGJKcrfxQxp5Wm88uq1qteYf4M2kcPns",
  "key9": "4tn19aJqM7bf4AopSvG9jqf4AVDMmtH2uX7ULmym7a17iYCApDCRMBvZVQS42xn84gWtxW8ft1W4e4NxAocVvQhQ",
  "key10": "d4YTzCo7pGHNqRUQ4wnGxXkfzK8AhxnVUEXeCa8oAVwyyxPX1v36UzzG4XsW5ZGZMHvNkNC3XLQfpa4jgFpPyF5",
  "key11": "6VvqKM61nTXj4phUpvvwjcBkRnWzFHW63ZV4Tovq7DXWb3TreuTqvUAq71WZDJeGSCeqThcvznHuLe9FdWVmVeP",
  "key12": "X2V17qsDZrVYMJgFBRY4Sv3Qf7iKGJmLjRca9aaSBnQdrMP2ty2WcKSU4xQ44RorCcZEzvAjcFLvrVSzmnMXeFP",
  "key13": "3kTKw1T7bb9HLvzPFesV5qucW6vhD8suXESQ4YRLdVQ9ZwwnWR5pJ1wtuGT1DG8SJLRwzVvs51gBKkax763e2oz6",
  "key14": "2tRPzSSA3pDXfv4T86fRXHGEyJ3ChnYqsqisW2ar2DcUSAzosvGHgAXRcEvzh5bWN4TZae4uWCTAzHWnmaxCXGf5",
  "key15": "7qC42aLRAetQ1sNrNWqHzw7tymNPTsdmC4wwhEBAyd2hvN24sw6NzD984WFJVPwKiE78jewd7ihyEh11iAPSkN1",
  "key16": "4zQRnewocEWGCQzGb1rCzfuQmFRFBGogeveiwJrYvK5WtZXptVthsJG5qbNXTy1Y874BuWG2eCNBVWWMWQqxhuw6",
  "key17": "HgRkmAqcdCZUVyYh2yYtiu6nsHaysCN5QFwB1Uzs18HmTv4tGAx8KzhcUqiSeW3J1U1cTFe6CBnffBpF5G9TmBQ",
  "key18": "34Tp1WTiT2frCuL5dSiw36cNUwmMmRCcY2izRjUzEnZecjZPsJc5dWsYWkpe38WCsu8t3EgwtGHhPJ9orGaPgE76",
  "key19": "5qeTbQiPG9B4aDjorKR3Un4omEjmQHxBGz7Pmfd8oThAziXwT9zyZUKjb8UNWvf4669oqhZFWECQnyb4ihjHP4xY",
  "key20": "469dfitM9JAdjUjU7W6cVNrQWtk9BkEfbKjZEmFyWX6gaeTtTTx4KHKyw89ptdWrisfC5KZ9YtfLhy254nGnSy9r",
  "key21": "45eemESKtEv6yE6zszntctgrZW8QnY72HFFaTtWVxMDgpwnopmNgD8BV5ePW6hFgjazVCPimVfXDXb5wAQsT1bzu",
  "key22": "p1RACLVnf2h6jNHgnCu1tsCBhsWuAt3sNRbJzaXCn5csLkC4rYbRJjQ9RprFf24JnJzrA7HXcUTecthGXerKRqj",
  "key23": "yeywNrXVbuBiPTpU3TPV9cZQMiLw6MJtE72cAM94xNxQsWsMnm39ntWR4viXfqrBEhAZWJNzc5Smjjm7bEVmyTb",
  "key24": "2t6yYa9KLrdsbaErU65obzmgMpsnGcLhcFiKEQTHGLN2ZaEWs7iQMVBABxUndiJswCyooaCd4m9dthAvC9eMpAJd",
  "key25": "VSafyQtjVzgRUEv6SQGUxYUQaiKT5ffbfBEieJRVfekS5nNdh5nnzGcdFGfMHNCDnVDR5KssebDWHhk7pRFqMNc",
  "key26": "3rW14Ze5QsM2SQL1o77cbjApA5noB1efGjyVMTPjixVRnzuy49ubNDYFGaQn3kR5ZeyxcH5h9v25vaJY2zexyuB7",
  "key27": "o5XE6V5q4VS4bsGo9ocW4mAxtYuoujmDTVB78asJc66vYXbZxDvKxoziuBfDKv2HiNPsvMFx7NQjUQskwVnUU4n",
  "key28": "9i467h2wQvewUifkSLhfdPztFHedqwxTkRLvco8oB5oF6nvyQTtHsMoKFhhT63VygrPeFeaWetJJZdNZHQNZaj7",
  "key29": "22FFKcwCDtUsmvuU6qVWzGz9fTr4kq9rsGL8BqJKaSSvcrcfZYdRZDV92Uap5RSgGaxLm8YiWPrnxFHqAFZU7heB",
  "key30": "58roTrH7wbbLBqK7WdVspZpaqEefBRWKy15Xp39izLJNWpRSnDNP2NKMDD195EkCv1K66izW7MsVTujJMCuDFRYJ",
  "key31": "5gsD18yBk5MnrQcppjtk8A57UjXPxnrpdon3Lt1Vj4Aq3heeH611WAyBhErDWpEBLXAjHujisGTH4rhqXvSwoq4A",
  "key32": "45v5HkPzuzZ3WHqBoruhnp997mWMpKQfPMh8yTw1uzhLah33wpPSF7pzRu8hCjriEPtQcVaLWDqczrCsSXAjeRVB",
  "key33": "4JDJjjaKA7HAVP9e8eLvXh45NrpjwjdUg8Wq1wHG8qqrb93bGq897szCNUaxq3uMWQRJNhtwsE6yD2HzDs4h3ayU",
  "key34": "5oSXA5N1u4sTFoshGEkXENdqKYyHcmiWM7LQnzhfHmomkEmnjniiTLxQgSJSbFsWwDDTJ3Mjj8LVfkD9jZpo854b",
  "key35": "5woZeuLALErZt4iT1EdW5hvTvAFdEJSKEiGZGyeAzr9Ag1D3b6bxtotjABmnWvJApNYpFuScbnAsbVMvG39swUT7",
  "key36": "YW627msBaxeB5E1HAsS561VrxDaxGfM7hRS6drHvFFRGP8xku99p8GDexavkV8fCbfVw2XVJ4rHAeWDoJSjMhx6",
  "key37": "5oCu9yyzo5HGafbCG8qkwoUBA6L6BT6orhWtXU5JWw2j4pVdjS3rh6Yqv38q8eHxDtMTeLtnVzQeCK5dCJxcurYT",
  "key38": "ZMMXcExWRZ2nMS2a9bTFe7Dtdzkv4o6ogYeJJUGXs7gzBxncZawCMQ288jL5SM3aAhbeFC2jcVg8oz4TB8ykmsF"
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
