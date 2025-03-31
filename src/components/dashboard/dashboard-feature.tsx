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
    "VcdK1s9nJWspWqe9wDdCV9LMinQe58wfF18wa6BenbhvMWFJ15VMXPdmC3gyrr89W5jdLKui2MwhHi5vtJ1Hwaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RMpmTBbiwS1bujkXyrtQ21VJk527RqsAMf7xB265emSKpVPmeoRd671YZrzPihwpVq2sWn3cKxhkMUx6jN9SCu",
  "key1": "2oDKDwtaWbSx8kHYVY85hvQi53x5of1xkFXqn2YLyiEZoxLos3NYfhuDYkJAxCB4E68Wr6CQct7doBm193bmKvJq",
  "key2": "2iR13zaAxJNdmJkBR8B5SA6MictzCofwVCaPxyyi4UvvbxvA9UTvSK7PsFypYBGjBYzxsXqwoAebHhXdinqBcyGU",
  "key3": "oNrU9MXjtLUu7LQFf5NoLNJQUnYoSXuTLwAH3EyzETvxRKxVrLsCXjuYJ2jyFf7nhe1Mx5FnMvyvyBWvPPcv8C8",
  "key4": "2BDztn8hKHNncJ8MYy5ezb7UHtjRUcpp7jFinwe58XmzxGzKHBxE12UwHeMafDWUss13WRfnMZ71TNUbeF7qGTtk",
  "key5": "4txUGTyH6x5efT5MdpGErhS5mqHf6wC45WHbZhWnUVaP1R3gxc7iy25eyzZWsaDZJDw8xkGVyxiaFRm4oXxwZo4M",
  "key6": "4a6WrFVhLJx6D9w3t6mY6eeizyAc3Wd6svep2auV2N9vpWDaLe4giw3AQNL144XFw7kbVop39GuK7ZHKnLQBgNaU",
  "key7": "4WbXaMiCBzazVnih73nPwiAzrQhc2SNdMB8RsQ492WZy9E4LKjWGWgvboTSYBuJUuPUiq9p5Cu7gqAusX7aCwhZm",
  "key8": "4nrgroc7E56DXuk176YJbX9tbyBPsdjnieeqTGtykimJh1BEyKWwYyLWcgGvCvKsP8DCpTy3bUZ8YCu52HF4Tvow",
  "key9": "2H53feR25jYvrD8GUD4v9QBWxShYjH7rCqfng1YJeLb4UXDYoiFL3dikAgLrBixV2tFcY8VHNvCTJuJXLDaj3Tti",
  "key10": "YLuXhehXfbk6efMyMhYxM9vqfJHYXhFwkpLTnNxhGRogJJukwgSexbJLvdGKwPGC52ANDEJV98aTi6kMYhoqaAK",
  "key11": "er1eYxQbenpxDAu79VZmZubcAKZCNf4sLWinynosG3gtw14dyEEUi79roJ4CTLGyTiyBNAZLHhQSKykVqtrDSCf",
  "key12": "34yZ5GjeYK2bESLpg5QozWmmdrH3F2K8quPiq3FpVzXBBVWHvy9VExB8JGts4s4nZ3sYqdLsja637Ud8kL3RWFLP",
  "key13": "5au53NuxmLnoRKLQko1dH7aDSLAsB5GtsMvEo1QcXdS58hABjmSBUoa9fH3gm72fHXiqbow3SbfUZiXFBq9pkwFG",
  "key14": "CUCHaBsd5Ap5t2yczX9K5C2NZXnAGGBDrKrrFNyFYNphe1XxK8iiqBwSxAdBbRUxdnRnBV8zpNNWC6RxsaeTYPV",
  "key15": "3LA6edboiXmetfvEjAgTbe3ucujKmZ4jqAtxAz5V58wbmzBVCMWmEExAGyDCQowViJDcPrp1qYkFJJkgexCvcaX9",
  "key16": "3cGH4WPkpJQJRjigbyfzSJaiZVvFXF7vqYiE54RZWXASrMzP169xbmtRwgqb3TUybD2WeZVF7ESgmHpdJ5ZGrU9b",
  "key17": "5dBeAqvfx3ZavKeMEH7Ha9pgGwfDHF7syQvx7f7zC65gFty6vf3VEz16XsxgVeyDT3Tnkn6iCSs8hBwRsMhNXzjL",
  "key18": "3EWex1n79btZ3EgGAbmok2ubkGYus9y232BJd3sLrmr8HBEpkfpxvP7e4MxdEa2FbcQytwNFphMa6NceFVzCHb4K",
  "key19": "n9wqtMGVK6oGQfprSngXVXok5KdzydvnMcuGuvvZps3EU9EChmfZLDrmhwHwQnTZWf1MGd1mf8ADtD7LV8XLY2B",
  "key20": "2UTnzJb7LaQfN9NDxHeY6WZRSHtBbKLJKhLbnKiwECVTL18ywTW8wWtqfNCpHQFsrEnPULZok93e87XjXs14bLLD",
  "key21": "2G2nGmH1ANztitJXJKPzUGJWfZZwxjuwfKxzthsXrETmaJ419ZgqX5afg5QFLimkVnoUjr1tXzYnd6Y7YokZi9sn",
  "key22": "2mwjuXS3hr2sYgAL2DfufhEri8hRhErLB49iJrYbVWKD9mMcHe9iYUes71W9Yu45La8YTRVNQCUPfFBRu9Mk4844",
  "key23": "59Lr8DhttCezpwprGYh9wjg27MuPhFWew6E6Lk2GLR2hmZyECByc1tmtSvxgDjR2vKMGNyLzhR6xovi3cJJasc6V",
  "key24": "5qXzAPMeRpM5aeTto9XJmFS6NzmLgGZgJ6MBhkEDVVJNxob85YwrSu4LcJT5BLPepyK9eKgDxgibqqf5JHERNW7u",
  "key25": "52Q8emaMdQiAKgLLQZJ566wrLk3YhSHLysw3EPyynyexpSNN1Y5twRVQrbhcCAp9WbLt1HWWJummbN1TH2VjFZPa",
  "key26": "2ZwXYVGhzouq6hDmyENGziuYbgenzxKPoE4bFZYkCNCDMnXF4uNXPrFV7TYSCJ5Td7KgK4t6h4rJ8zPej8oV121q",
  "key27": "2XjccN5GESb6TezRBG59jyCvM81iM6GdhHv95JeeWGm4AvCVzmyL33kWRAuoN6whcVtWbr67YmQJ6vDLh7sTbn8E",
  "key28": "2HvYD45bPd81Px4WKEvTftke4BDZi7X8o1mLKDvC5ZnTzTgGfPosePjnXSt3nDib3MKmt9H5Dt1jLeghoZXR1LNp",
  "key29": "5dfGAG5bZpDBy2LcLK976zcHTaot4SMdowGkuZFjC3NVLXgimcyW5XRcT5TsjtDY4tQ7dLX4Gui2jeWMeGBsypf8",
  "key30": "ndN1LTxo76kTL88d3wHvCd7hgAQHid25zNepmZs6PpHhkTJh3x8yePnX5cX6WMcqFczcge75RzQV4QyNMMSLwUi",
  "key31": "29ARbvrqnSRfoyyXL7xHxHHhVU56QSQQw3b5GgiF61MnMXLBLNb33frumJCZgLLWDv5Pnbbn26vQFhV4MakPmMEC",
  "key32": "25KkzPippN1bvJrWny5JkDN9ZoDUcUew6vohbFVqFm3sGqfW26i515FqVTDzjMuqrud1hYAvzbWUUNjK9fymjiQu",
  "key33": "3DrLQuA9PFo36XdTGx7cRiUfd9xuRUwsFWd7K6df5vLkKPzL6GLvoxkBBRpFbbomSuQMsTu823FWD9Hn5h3X94NX",
  "key34": "2RurbGUCt6K22K422teGSjETdWsRWUUMcBBmhP2C1Ditwi64T81SXSUBipJKTjbjS6rSaffgnsgUmCQ979yVgiUH",
  "key35": "h4X5qy693TUsM1Sbxych61CbgChaTXtJRfnV6Gt5MnHoLyMeYypq6A4zUkWySvL83a2BgwhXfe31M62uuWXGYGG",
  "key36": "k3LNeSoEK4wYgCUgXoqu4vE18iemkCN2DWfBfMQJh9ZfrsrrUscT3zrg1gSuLFXBtdTMZYyZAjPjf3yLvwVpQoq",
  "key37": "37SP4mBRMQc4o4HkkNy4WnxVSbb4U8MAv8dnZwYZKEufoDSDkY6w9y59oAXHmMgukyfpEi1VSPzwUigbygKwx9AV",
  "key38": "8552kQJG3Utg33j4ZMtAywo96Ukr8F88ygn3sWQ8JKoSj7RyAb6vVRGQ19KkeXnFuTVRPmLqLGP7REQwYyU64z4",
  "key39": "2msahqTtSuN6HACQcE8MRcLAB2TLyeK6eq5Xf7QCsjmSVSir6hDCM2GPAvJYXNxvSAHfaaoFf8Q6FLjFofRmVhm2",
  "key40": "61Jsy36sfyqTBjTMdFdggDqR39cvSQMkARaXiMMhCEUUYhfiQTbLwwJqpagqJKFor5NE17FLq1JX4QEKmJDZJXcc",
  "key41": "3ora3uhpaJra6LijLQkeHTRr4yD2u98CpL36ELhVQLEBLhmyMu4R8Bu5TSqf9kGnnSRnX9crX8H6tgpxVYoaU82g",
  "key42": "5RRS8qSBefMCzXTB1nLJu5Yy8h5k9SbCstkHRzQXpWjyemAovzzbVwHsT4npmjpD3pk3L7eWya8TjDk7V1k33DWU",
  "key43": "392vRrjod6aiuNxbFATwJXBZwJUHMgUYPQH1N1ahybFMpwWfXSEja5Ugr3TpNzY6xkthSiuvVgEPPYiem2BCnc2X",
  "key44": "55HxY2r2AfvdPFGH6SVUVFW3ugW9LHUMF8eCr66QjUi9NPyzKenrxRy22XHr8NcAy8XCCFRhvRuWuphLtL4aSunP",
  "key45": "5hm6ngdgnq2B7tEp5iX6Qf88gD3qScaTYxQHr3y5abfDak8ER9GurzjkWdPhTPigQo4tW929YgrCEd1N1nWffX3G",
  "key46": "5hH2drXPtSx8ciKCaNFTHS8d7EkkjzPBvydmmJ684ATd3wfcKEh9T45xzKcekZ61WREPnJDjHNgu2Mk7QJGVqzMM",
  "key47": "35Bh5h7p3YVjxseuUzF9b5VJqoMQFBYGVrc2scPRBzjaW77GG8XzwDPh3v3xJKwMoX1D5dQGTGYyT3SQNgkMfCW3",
  "key48": "4A599ESTjNarVFfXJEhRm9kYMtGCf3q1q4aYwzPup3KUt6EjVzeGDDJ4vhswvkyfaMNzkSJhgm7dAX7oo4txQvUF",
  "key49": "63AJnpMZSBviGYSn6wfYS6hTxTNXhKBkoh7FDjzYrwPrv9JBxPBKQRqBAH7JExUDnYnWDEr1Nx8p4iV6FvRHF1nq"
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
