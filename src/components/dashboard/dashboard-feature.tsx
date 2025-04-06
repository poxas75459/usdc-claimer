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
    "4jQ5Mcdx9YgUcUzGrJ2mJqjxkNpErmitCxqsXeabBqyMbwiSC3zqqiGGEaNgMHNFeGCP9tiWHSAXXCbcuZJit7pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvY3mG5pu7DpbbHNcdpKoDqmPGLzFpEaL5V4qbHYMcmy9yNTEHuyKNHLe6qCphcAApkQWjrNFVBrhGYDFZ8zncU",
  "key1": "53pT1hbieYJxSyGmAiZA2NEigXrzhhpz9oNk8BcsCGhvSGtpcPdmpQHwStmXqQTb1wNrvf148SQd3Lx3p3NQg5nE",
  "key2": "jSSAbvvzRUoBF5T3YCbDMuwyPtDGNkpWRXnbFiYwgrvmA7FinpA3Len1JdTVeoh7MnMJMGKCXMKXZp6RV7p6jDm",
  "key3": "2LraAYAUmEok2GpTMVLe8SssLnpZcEm8mVCQnjp9jzf54HzgAs5pq9FZ9UcfhEeENBMpFDGYSFX15ovSZq2yABs6",
  "key4": "61dMozHy2ERKzf3cJ2y1U7FXo7juFzGLe4LkQM3xLRByLmD6wb4t38NwBBFNTMfbMLzeGpA3WKRPhtfzi3pGvbYT",
  "key5": "32989NmCVmqLzuEMAgj4dKy3Ey5BiQFq94dicjxLFJR9q4tci63aJg7doUPjQh2XsUp2zn14VLbxTugRfm36oUsz",
  "key6": "2LUsoMtfa4Q7i7ULuRBPoJu2UWTYVAWiEaWSr4VX3tCAi5aKcHTComsW7F1uzVWfkrBExsadaszsXpkuYczM1xmF",
  "key7": "3VwtBb9CJ8qVNeAHtieVDz2z9HXqLssyEi4r1yUAhR6WcUrYMxNRcXgk8btRgfEf5rWdYhnRQLD5LaXgDE6KQ3WB",
  "key8": "4PqNpVgjfz2hFBemSH5yLRYSwyTJ79qR69pEY9K9KXFWabxz3JSPiggSaNghi2WDwSk39i99fDRULHRMUmZRgBuT",
  "key9": "ru7VDyesKtFPfSjKocUv9ZqdRMoqHGmYXb4T2CcgQBht6wrbpZ1QakF3MtLhU1s9vXnC6yFQ82D2hnz6AWFTt3e",
  "key10": "2ruFQBvVtDHt9FhzENrfyvhg9UHym9aDYbjkFtN3EtJzZUR64LAx9t2Vjo4xcv7WtWTQrLjRjWecaR1UHAPjsgg1",
  "key11": "2MUPub2SLyTafcrFDfcJ5XNBt7TfX19fgCCdZ7qYsVLY48uF5AL7spgWKf5cg5dE3tQL21njJ3kNQsGSoFofBJo7",
  "key12": "BMGmT6oB9EFW3bQ6nypA1sTiJeHo1dMJR1jxPefXDywf2gEq36QHZyu36wveNkQjnNaXkPbRrKWrYCYEjRdSw3y",
  "key13": "3MkwwxUyqr3HTBa6c42KUS987QeUqjYTzXfo2Ce3HUj4FueHJeJxCEDJatgf3stHaiz5NCajo3dY6H2QF5hFXwGy",
  "key14": "34SzqfUApMkbKB3g4SJUAAFBCPGhqGb6rUE4KNkFSPvQk1XBfp7XuSb4DudM6zoyZibjHck593GvzAaF42Trxwyv",
  "key15": "MBs7JodyUnrUyffKkX9UbiRKXXLs4UDjTBZvJ2Ueuk6X64U7ta5jJeU8Rd9HPci6LbLjLnwvcc26PivbffCrpfa",
  "key16": "4HodaUhsjC3FoebWScVFG4fmDE18vYatywuRoXumaHnaAPoR7Qkcj4VWGp71wEFEaejPtnbh6xqxnr692euo1nFy",
  "key17": "52uMwdoT1tc8ZqNGVvC6FLuMVnJiPBABzP4o85x972PZSWosx2zJnUCzL2ZPAd3VchgxKm9muDjAdqaTKkgjDJUo",
  "key18": "3g7qwawGGgZyh7Q5mfCwL9iiuMTVmx7vHGnxBNj7fdEq5b7fF7LD6Hef7jBUYq5Czga4h4ajYoJTUSsXdzFV7ENz",
  "key19": "3ENciegKHCHA9KiRtar9XPmhHwuujiLaifJiUqjenB87e1CSMmUPUxyVZSTV1exM7uKA7eBGpYPEWwE3Jq34MZ4B",
  "key20": "2YSsaPyixV3nxdACqMi2NAFJTE7bdEHzsCEdqxGEFFrYwiJs5xkhoFdezdoTYKbT6dWthp3CiK6VQ2K6pVgUuPyu",
  "key21": "ivXpCtQhRDGSZEaspcA5os5ZUeaNha1DGy8SyKMYg6hMBZBEBRe4TpYPa4oCd1DWaz2B5xaLkCqk497L6LCwQDq",
  "key22": "8PgiwRrjtyXL2dXvFpJQzjAhoDSqkjXhbtybnSq39zvAwHe4MKEZ6Qg8iH9avsgvA2uSPgtVmqjqEXTuBrsxecr",
  "key23": "3MbN7ZzNfg95GzW5JLXkTuwFSmobwwCE6AJhS1VRCtwoL7SL5gtQV3gaJYS6dwHj6NUJ6W7vgBi8RUPK4yxpUrkg",
  "key24": "2K5RqUvL4CPsWGDsLGjN5hpAuPfNqNoeMygSDYh2uYGDxeo9vWc5n3Yb4VAxzEnorQ1mNNubMuRPaW6DYfTb8Ge6",
  "key25": "3XTohePpTwqueYLNPSYTyWGjJwGyZjUXJtsNMkFiBvDLBwjXxacheWPbiinU1Bcj8geEJFJ498aEdtSK6tkZn621",
  "key26": "pghzufWEA9peeoajVbLZSQQxqPxCXKKK3qi3UDAHQmYVF3KeN5D9cSeEYo7zBjcvbkpQLBpvpicdxDcuG7iHCyf",
  "key27": "3yEM8M6ZxgUuGM286m5QjpvpvRqvVMwFy4ywECSAHsuKwUEbC6qaP1BwuSLpprAD5uTqQ7fZg4ebTuxuoyZEoPTi",
  "key28": "2JfMwc3Ftnynp9FmpHVc6sCDBeSjpNCbEAy3C3XP3WKDcJ49c3jpMSxCnj36rop9XKiyC5EAwaYuU2CwDTsThrqK",
  "key29": "34FUvP5e2GmUJThfQRzVKr7eE96BwmCnFBJxdirRdVs2CDpDsVUc4q5RpYi46BoCrt7XGCy5kCHD6FyUe5LLKNv6",
  "key30": "3HKBQLM6dK1Cvfi8v7wL2LqrCZi3p887USpLe8AfcEN24PmyALW9eMS6MWpJoFgeydmgJNJcgVP2oB5EJkSXkHsz",
  "key31": "4sMBo13yQqAxZXff52LHveVigwSz27tuV1nq1xxo85pG23U926TnV4NznpGsMSDNKjuorY6akpN6et5Yb7GVhhh3",
  "key32": "4pRQ2dEqJg4C6xFczu132Mz43XrpmdxVFvRNemap7cDMrn5aRqfEhMggaoEFcrwxmjtWFg18ng34ngHAz1WucbBN",
  "key33": "54453HCUjhe6PNCc3hrbY3ShgarsP4oM2bxP4B33QurJLFxkWssgYzoS5LNF7LTqtHfUAMRiBeqtNxrvtMkS88nK",
  "key34": "5fDZ5pPFZqsrfrE18tSgWVpts7PzqUs2AEcseGdanKKPCGuuevGbgjCS8T1ncUdFUfZ4c4V6mNLdNp4Si4n8F65z",
  "key35": "4TPCRGeSPF3pvziUsDKGegsrmqQPjdBUiZS5kgrCE8MT75MjdtFyK788VrQQcCnRrCeLnreuYJog9AwmMQqwzkDT",
  "key36": "4hEnVnCJLFMDYBMTAi5aJ775iHAREq1hSqyknqxVYfaPR788Z4MGrgxqRbswDRG28RubRcKYdiBkk12ic3QUNqQE",
  "key37": "2iR9NJnmu9yCz9UvhXCDwiRXJPvirGRvTycmaQhxLJ3G2wLjSSSQ4faBbxJsy6sqBTfivL3kzgAjt6vvS9wsJQWA",
  "key38": "28huf8gz7FwNms3PkrpeJn9f31ZfctMSHPTthd8wyE5URgE8hDZkG854TSHpxBDRj67jo6epVEWunBNSctDEhHsA",
  "key39": "2JCV2orv18B6KEBEQh8jBa3iEGw74p7LHPfstXzeZrBqnwKKPvn3wfGhk796G8evAzeAsGeYJYMy1j3PNLsstee9",
  "key40": "415gFmyiZefcfHFvy8VeVE1oeZjePTmkQNXozuFYuDgZBc2LYGN83RcdWEZVDTPMbivJhi3bAZZQoCdTfLPA5HZ8",
  "key41": "4SogvTN5F4JBni8GqyREamyw7aBSc2LeTYrNgZHc8yr5ejGZNpHxdbVdMxFafcJtfUDUPpqCooJhBWhTmXNgCcPM",
  "key42": "5vrRL3VWHkgN7cmbWHQ1GqwtLFhQHbQEwNCEKSgLyrAwaszG3dHFXLW1tg4TmfBo3wr5sL5qrRgZkHu8AbTrrdqx"
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
