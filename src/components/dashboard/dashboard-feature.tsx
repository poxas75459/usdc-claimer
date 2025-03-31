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
    "5gfRpuaj2RXfYc4g7Fgax1J6sHSGYasrhKcrJKuTFj4XG6EPsMTXXMjRwwi36x7nMkDWxRzWsHHfaLNZzTf7rs2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZthryFbXf8QYhCd4HS2tejmJSDpYwtijKvEr7N4SnWfVGGmzSABSA4HQQ8ESb8ziqsZMbqVbrVsgQDmnPBPcLv",
  "key1": "4WqLtFMUUqJgsyYbcg3zruXFm4qN59PMU7F2ECiX3bPcBmQYifa7Jr2UUBcjGEEJZ6uG4q4qjbQ1mZfYqoFRMTQg",
  "key2": "RkFXiizrV22tAfpx3pvxbH5Z6FZo2JterGgXwjsyWKECWy2oUw5d3RtZC5DgCTMHkMiik6PQzDHuC5oRyGZNisy",
  "key3": "55tViRBwqgKBuHwcoWYZ4wRrayj2jmTX7AsQPy7SGZSVuUhCafEJpfgywEkurE2v2NJB9DNhHRSdiKsA91gyZRMA",
  "key4": "HzTykHodSoEfVyPk8d1bikad58AByUzVthh5z5wcJ6Vp5BegDCAJrLHy4aDTsvqr9UvCGBjHyKV9rFmXbfGP4nC",
  "key5": "2yMjeixDtrcAuFEjvMGWeN4ubfQBBGGQf2TMrpWz97TY78RxkPrCnZrof6C6bFbrqBgHKbHYQjVMj5wQCnPupnUu",
  "key6": "5aodr3JKYoatm5B3tSXkcnPDuDg34U5YmF76bpQPe7B9dGxxvnehnuQ6BzDAmmgQz7TaYjDwyXSobNmav6Tu64Mi",
  "key7": "3yofBSqdgFKqTH9WAWEBc3uCKQr5ZhtmdGui8GeMBuYm5L3i2jZ2K2J3CYp6tyg3qt1co8dpmBAQZcAJajNwsFja",
  "key8": "2oFn9bjVo3WuFiwKbmAcxgukjbS9NZgurSU4jfmXPkVeNAoWphLhNPJQbfBToXmB9Mum2ApSYchEFzgDzgmUjwN8",
  "key9": "66vbD5MVarHb5Dg9NSn8ptSaiue3HcPkNfnt8wdMLxP1JrwaG3a5CUgziS1j7Lzm7DNDuexECqmaB8PUpe2mXp6U",
  "key10": "2iJLB4g9HpBbZdeZ4DSufitYgURJRsnZBF23Np6N89yKqjVcs5D3k4BqUYscFsMkEe7XPeWfY1udY6xBGMCcLdJY",
  "key11": "37Lf5QaQskAYMqFkghuLGnAEwTMo8yfQVz4KB8g2cKajKnNNitZgRHS9zbVDrQUMRtNvF32DN1fRZFHSHbCZwqKH",
  "key12": "5y2CN1H2S7fhK6qVzkXrWSMT1AEHMKvmwYe6LefRc6CChigcyEkqA4p9D1JLBKbFEvLoDPMA8U5p9PHwQhQKZc8z",
  "key13": "2LS9U4Tt9FD1ioQEA1F6Uc8c45UYAZbDt9JioS4ZCQ1xc6JmHAAPWGwNTaKkeCgLBiYTBUKGAQzyFr9cyv79CANV",
  "key14": "3Nd8WNwb3YmF8hd4MFvnHRMH1xtAwYCrXGNrtsjjVB5vsCv1gH6mmRmbHusvB3YhYS7PREv5WVgx8jQXGR3WwoUN",
  "key15": "2ZKtfRMxcHZkQepgHYqpMvuSTPv5cyyBFbiZVocipieAFPZVowjFBLPc9mk1UZShWYevhXcrwnUrt8NmfgndWqg",
  "key16": "386QCmaKpg3L3ACTRo93ujG8kbSByiXmu9zNQQeAGsQ68LdxkkYEjan79UjwmbuifBJZrq5K8MvK3DbUTHEfPr6F",
  "key17": "5GJVQWw4rNcBtpqLKViSfgrb7BFDbWsFaMVmBcLtkUjLzBrAHDtv5e7s791EzatXDwcngBodZzdUU7QSYTvmrs6W",
  "key18": "3Vu85sHJ81BCAhTV7mCm9y3HsY51Ko5enxj5pSXKfcxQV6pKTSHtuf2s1fFBaKPRWnYuP9u34CKfSEmmjE7GwFUE",
  "key19": "5fGuUPV9ZCs1G24ZLBWo2AA4US6BnNrTyf6GjQa3x9VFxKGhGRDgcjvJUJXm2rSsYHrzg2KeWfcm8YyPDKGVWkUT",
  "key20": "2bsJ7j5qZi49yRJdgHVEjHnCY5VDf2WsTE6H5VPjtNtyz2qdFAKfETqwVHZVttS6AcaDTud6UrhH4Y2kMe2EjwH4",
  "key21": "4nWLeAHNP6nDTSanraS1D7i3zdobNhHqSVaGGshdnoQU6XtdKzkn8gpqKTHfWTAmmdYVhLiVgnoHP3oAtDg7gCvu",
  "key22": "1hBy99bkhehyvi31aST39pgSQ4YVw7RCxnMV6EUcyorPVAY31tYtxEdn8RXXGCsyD1rZ4YZ9BuUfTSci3N2oMv9",
  "key23": "2XxmHU1ruDLvX5otKMwuZi1Lpt7eEjpeVvtxW7eXjC5PWicXsgkgdT8MhZiSfFLju5xF1ekr1Tk5h6GYuQZdafA1",
  "key24": "32pxYNV8fynS7ozUQzqGHuKzHua48F7u47yEFR4vFr2jWLm4qKPZLBh8C7oTU3rRbsQ3JkxUyi8gypooTfe78CWD",
  "key25": "4MMvSFM9zu3vgaPqz1iqhZFxTEMKLjhXrHHZvJNvcr58ExsqW8KUodQRUA1idJmHC4qLT2AJRXX9PteGiNgfWDyM",
  "key26": "47dyCMuhmQpQ1B8K52hP3P7ZyE4diVvpKJTfei97t14xA6mfaLFC8dL9yvw6WVnSUZ7CzY7YkU6YcTwnbn7sSRZH",
  "key27": "4LCEBCDR7Z4XyAW6MRivMePQvtWLsEgbmQbeu3gGN5a7BNuJNy6dFpNQzYbYiyeRTFWxaSkBbDhFDsCX2NBDTXKk",
  "key28": "3gK2vkDLr77sfeSMScjvJLKj7VzFayndDynFq5aLBv3uDJPnACb6N1sB3GuzBNZNqkjjgJ2kWkwFwiuVhKquBEFa",
  "key29": "6JBwLbB7uCN83dag2mbNEvUbrVCGRmd44zWMsZ75aFZAHYuQhrjfStJavLiocc3vL6RvxqwT9v4K7Q9HesyeTtX",
  "key30": "RrQhreL42LYTf2yqxB7wRopxyoZybeAg9cFMZfmkq3pvpcCekJxqiY5HNWJqHaDustmsUXGLC9ou7JZPaCEGpYk",
  "key31": "CyEpYNtEKYnrenY743uDKnnFtEE4T9ZSG4cfNAivGc8bkn87Jx8YpCiHt5iQG2Fo8RR3GsRta6UkwN1xpg2gPd7",
  "key32": "6b1QRxuDrEf6N7UDCPUKRPFYNLyi9674CUFNJg4Pen1SgPFpQvkhfSZSx2UALtmJmo1j5HU5fQLS5uZZwQ2HwPR",
  "key33": "4Pifp2uQK3VC9PUw4tfnt8SALkDT74ojqg4CVw51h4yq7RHkhSy6ezsxaVXvnJDNPjzHNzLnRVi5iF4J2bfEHWEH",
  "key34": "39iyQnXvDzoyRWqGXNBg8UA57Wn84NC439p7G8MCNo1RbEzPrrP9qd5VKpwALxFc2DSwKtHHeqUfL9YbbTCMxjMk",
  "key35": "4h9tUsGsNUZ7BQiqv1VpV5ocqbyfhR2mcrmv9NsPJSzLJVtqQFMSWfXfvVbiSXTkJcz79h5SR2SnhqRy14KLxczp",
  "key36": "4n4nSJYXAhdAjYwAitGm4R1kRS64tV79orCwqMbpvxyvc5d9txpcjTqc2rAj9RMqEqYjWPw1sQ9HHHfKUUw7GpWp",
  "key37": "2z4AqygENfvYHDf7UenNK8YLU8Toa9EJJ7KD6fF5bEvtfACiJic37cziN9ymenWmd3BVjzbdgnt5ie1yYnUD9nnz",
  "key38": "4CbPHK9mLeBjNwh1EBojyFr6zxy5DhreGVpHgGrK4aWaFkyAR9AtPji1x9oE8e47ymfWSUHf8VaytvxaN3F2gZYR",
  "key39": "5M6vXMKcvsqBc5GgeWmYBrcnQwitjSFxn1vcm5M2pbbAoiAxFnKEdt8AdNaKd5BQfhXsebbWosYmrpMvGEEwHRd2",
  "key40": "2zU1ZKdib5dpYdJd2yjLF1Cs8NcGx3RznzfK2gi3EXBBqzB6uKwA3h4BAii6XGYuEg3okAe8f7PZmy3bhpoiLwvF"
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
