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
    "5x66gBbuDD28PgXgkWfhWsPBfNtyGQLTbiG1tkE4FwwYC4RkoK3tvqJHrsSRWKWUDSteCfhwXNNzMfgqXPKctW4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QumKV27G219qhi1WKSpr89XeEUzdirm4XRjQhf15rBH7foNgam7M8zkxLSeW6nyQS3NskGbjbD9WYRsWRjDMPB4",
  "key1": "5LB97Vpzooy55uNfc8uFEtDxJg7RTGZQTwyXPe4bNeuzb7tMSobe7PdG1nNQBjtyKXdy9ufMs5M8MhXtj6zSKiaK",
  "key2": "37KNB7f7yG2vdaFPeMmqyeXFRbhtcSNRRcnjSS1NRa8ufZk2re4hFZ6Xw9hoxdpCykeF58Nnxy3iz5oWtQCagBaJ",
  "key3": "4DFjmzGJpe9vxgWWLh7rNhUWgQoFeftBCLgZQPnfZyE75SozXo9dS4JmNJtzqA5YofbaiLxCFJguR1PBTypKQZNc",
  "key4": "PTBdgJJDca6XfdbebBeicEitkd45Pe93zoKKsrELj1dXh24KGXzkYfZc6zp5QAHMzfv7ezWwr5ES5yCn9TpojBu",
  "key5": "2AFsLj19AGN8gLS2sRmbY9foLsRpEYcEP9bHuGJhup3mPohz7Ym1GHQvCkWYdg3JotPmZCFxTk6JEYX7qcad6Mkk",
  "key6": "2gNkLBomiKbBRGoNC39NWkYyeirrK8Xcrucqk3TJoLn7t3fFY9N7TTgSbFiHSibnU4Ur1W8UcJqm43AiUQAJFirG",
  "key7": "jQCzztVq2LkcSJk5ji8uDn1e3oRkV1CJXqJEkjv8eqdg17cUUhYrukgNyHV8UxMGPbyWz9JN7fg1KAtUBHYv9Qg",
  "key8": "26847VXtjLjqEbECAHqzhuQ1pk83Luaxu5gPCmsg8RrwGq3GXzBy6mVmU8NWeWNbxcun1UjvSizba3DPA81daej7",
  "key9": "3WsaotEAu4dDRwHGThjerb24489Ndbir5FSAPoA4hzfihVFyYfashGid4jxgDZJdVGdkDEFoQgHM2xyX3uBJNU4a",
  "key10": "32mLo5jdTh1AA2UQJoiwifZrstDhHaoVS4JB7jXdTBrceaFuf8QbdvHUmxZ2sFG1inzcDDTPhPngbEmpRbeBTbAU",
  "key11": "25BASTku1mPgiEqeC7iUYcoUyWHsGYDLTcVYHLCWSDJAZyBu3QPzSVpiHdXgVGDdj5ckDRvMXLquShNxK8uBmUmm",
  "key12": "4D9CytJp71NGmUg2jStMMDt2yRs9M6QQytp9t6zyPBCoc548uwUHqZKr57quQQrhKZDhmfH83bpd9Yt9hCCp92S8",
  "key13": "BttjwTtn3ss7JTkfCdjEALtsvcfnFJtyooRhMEngH4jcCBBrv4VbDK1ivByaGm4ytGSv1zwK5r8Dm1CoCkPeQ2T",
  "key14": "27aEwATnFE9sMnsUGEYJ3nGMSJFxSBPkibu73rNNzowd8pgqLaEBy4eNXEHrnUtGdShLxCccPDg6pMtGGwaytHrP",
  "key15": "24c3DV6aQ8gCMznMUbcQTMXzZWqPNBwPSLznTQF13A4MRt1jMiM28UKHTSt7CdTkirTa4KBAEuHzKwNTVA6YVZPY",
  "key16": "2LB7NkayFzRVd31UaZM2gbFWQmHbS2dn9tBZozt1oa2VKyUanY2BLpSBuVmorKbNofMeA2ipJyKGaqcaYfM7N3q4",
  "key17": "4yzBZW3LifmH4Q9QwMqn7qaSR5cd6sBAsxsBT1MGoVM4aAAa5EW5J1YMTqQByjtEXqkawfRCJejZa9PLiRJKXL4z",
  "key18": "2Mr66WcbLqX2fg8Brk8jLJBDJwqnJVmoAorMJVSci7XX1Z3vT4eMGLbW3ooX3ksmf72SRfeMDL1eNFofLZdFSZzA",
  "key19": "3kqmn13YzF8h928Xf8VsfY7yJcnSSBUru1YTyhBNKArs5XBA3rHnXZYvirFfR1G98Hbbo6SNjoTXjzvaP3G9vWbD",
  "key20": "5rAVFRJ1f94ax2Vcvo9xmjmbjVYr2FrQBK3uME7rKib3tmkouPi3iNMmJHUnirV8vQzmy5kEq7CEbFhk2orLzTKZ",
  "key21": "63MNgbM3g2dWpp61mA9ZSgQyKfKJx4znCVLAwiUA7viUwZsbSF157oxJ2MUUbaezZ7mWjuPfFVqgoQThAexKWjtR",
  "key22": "2Bro8GyoYWAR6zdeuj4H3JNfa73JPMPyfzguMrLL6FLYLeeCR8ibYTRPpFnNYbJXhz4rHzhSezDuNmyqCiGqV9JH",
  "key23": "3GurnyZA7bzfs2BXvKcELcFGSFL7XKhe7uFLbULrZCqmAXen1Dz5fQdhSR8ZeU3eNHgTNBnhSuhkXy2L9Qmo2urQ",
  "key24": "4Pmk7a22FGuBTBzqFjVdWtHMBhvxQYvTaTBTHcWYSE9ryzZsrxgx4z5cJgJW4VDJB4hLuAfTnkdKQeWuw8GBhb3o",
  "key25": "2y92f4nZGvFu5yj4uqkpMwV38Q3cuXYrmQeXxaXnN7tCzur7iZcRfebmmvPZWXaHQpdNJgeBqfhvc7RJfRBrFUDX",
  "key26": "541GsMM5LtggkTdgrEL7XfBoxZ2AAVao9qtWAgnJtEHSZXcAWhBjsS9erhnHJzSNcqeq9B2hPc82CNFsC5BiUb9T",
  "key27": "2nhGfacwLRcSxHqxNk8vykCQF6t57GGJ2pkn6d3iTtC9RxFoNdKv53nHbEwMLMoWgWo6u3KLntuXU7fbkCyd3Mnp",
  "key28": "5TXFaXVr4iPMGKAPoMLyo3rjJGJ9iKGMrHQ9Fd4J73sVzRmwrn8mkG3PY67MLtX1AXi7BhnHY41DH9S3f9aBZvsA",
  "key29": "4uCcv4xCf9eQxPfWJwqQp5VGrG9eSiWRPtWZ2HxuL6ZySg99XgR8d6Eeeg5QNv8xMg3uTBfidpftFRbZBeJUZoRA",
  "key30": "34hXp75DHzq1FyRy2njvNz4sp4bXiJRiMNsUDvg9FdRjzSJ6yBmtxvUH4uNpfGnTSiAkg3ivJpLDexvU7ctB5dV2",
  "key31": "4zbuacGwLjCatHSuCkT6znVdFkbn1Xu69S8u4ksRFPk9Vp7wSKA1igQxfMd8HKDThw1NCufm63tUTzjqdBFiT3GJ",
  "key32": "5dyKDizkDcy7V7VSxefKZeZe1K7AyrVDJBiv4Zre9zcq5FHKk9KEsUQzFVsGUhw2LfhZktAxynWa3jv9aNSuMJCj",
  "key33": "otNH2ZV4k9UTArrGcTSesAwRnzi4urQh5p1tmfoqAKq1nMXUNmGhXCodN72KB5W2miCbiEfPbqfFSpjDnrYrUce",
  "key34": "4iGcMoeWmaHArubpEChf7TwsfEvACXouSE2gzEng8chd4qK8NchxWfCPZjpoXiLWKd965pRSuEeDcQBwEsXFVjuk",
  "key35": "2645sfJ37ugzK3rgjgqzjyB5cyFFQUDUHR8HpNrfqhps5pfnnyeXaqVJhNS4DNpSmmZnci1oE33DMUsYkfJaLFtB"
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
