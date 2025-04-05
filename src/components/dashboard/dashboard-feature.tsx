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
    "4vLTraCrmQHucPacbE4EdMTG5wawymaXofJRkQ1qBbaPY2DBecNCQ11SqND1jkhVNsdu5fWY9oBumnW8xTWUkYKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pxwn7z5VF61ZTqHbT5mb25eSeb5TaGMv8HwuTefaQg4rZhgv8gBqfeQfi2hraznRPJcJUUD73fFP5aNESrUC4Hi",
  "key1": "GjX8j1izPTK5WG4ZJaincNomX43jzJ36Mk6MuTziCFBYQkeftTxg8yWgAD5Ea2tvVqQu33ToX9LsZTrwZf2jiyV",
  "key2": "2TZoJN1UFwRtRWdFhFyMRzdr4MNzRXNnGZbqSo9oCg1PpsQ2BkmU9JNozGvsuptXZ9oGV2V8Y33P8deUw41NFRNw",
  "key3": "2GbwhAVAfgi1aSM9BShP3MHjHJmePWWu5HSrEK4s7QYmXdRBZJF3iDXrwS8CXFBQt9QRCPH5ARjZUJuCHdniUJgt",
  "key4": "4euVdRp12uqo4GRXHd3VsNekXLhwbFS6ArbuCCbrDkjRHGhPpnsLL2aK6iib76BijaVNMAhvQEDWRBB9Ru5F1mSR",
  "key5": "B4YFE3kbeSGo9kXk62ZsoxqyKsLD3LvmyqGPycEmBRdaRm9P4C9BXCcHhimL9pqkNT2uUeZsADg8cxWHGktMB6e",
  "key6": "3GZmUBWVDxJRt9udVgAqoKTFRGhRq9ZsnX148nWHQZCNAzsjK8Vt7aXtuRxdXcWt3jFxGbhXFWv6PVGT1VkiAqZS",
  "key7": "4omQ98rQsXDi52EG4Mt2xNvCWr7J6TBQBdaoTpvULwhFPEkCCYtXJbgNU2mqCQZnZ1HeuPs81wjjag7hkg2FR2WG",
  "key8": "3eiVwGvy86WXJJ4DLJTFZhNNUr1Uc9iQNhmzx491QuqkeG7PzbKBNhS7ePnSa9WA3otWT9gUSw25xmzkvKFMxKcT",
  "key9": "54WrWzsPgNWgyqZM5yDqYUhUxXerKtVLf9Z33kQELCAjNDDqSC23JFp8PYsqGAAobq7nFRSPd5XpLrF3dvG1mGX3",
  "key10": "3A7FYxhh9V73RVqWAMML2SBpD8d3jJjpyx33bXaN2dXiUSJsRWpVyYQuefzaLTsLLXSTPeUWMaYSj63YJDrwtSxD",
  "key11": "2ZEaN19pNQpEZvSSnAMz9gSucAEvkjA2z4nsccXzyfC7CXjytBrWtxfaDvfpfbP7MwxFRr9Di5n6mj6PXFZjzxhP",
  "key12": "3KbwioEeVSBnPD36XmxZRjPZ8x5aBb8DPA91tJvG5fF9znwEKj2KPpGUPmfosYCCH7wRrQyUJx535AudkEuuswe7",
  "key13": "3HoQggB58r73fv8ytHqANwEFKtW5VuFhdeHDWaJsD5i4zVPacvnv4QzfE1g9tipbPg6GijR3dTHq7Pkk8r1XzNQ8",
  "key14": "3KpdxZLL1afMRdaLNuxzHvvT4SjNiHX5yMhjPEGUrv9dVuZNEHT5EsugiRHEmtAuoB7BNCSBorYy7V95o1Hqw4nq",
  "key15": "yqYpLU8sRZqz8U4sAdR7qb9rn5P7HXhPWkdmV6vvbbf7SLiHbZ6wx85em5VtrmRrucjJWGHqhBFr6PH7WQiHsR8",
  "key16": "cv75DSv6isfZaUrGuxSDjmZK6GzJxiVHDVEZJmaq4gnPtBcR6BxC6dKbLWGkQ5KqkgK3jMip8CXiN9ksAKULWWw",
  "key17": "7GU9P3ETL1HgPsUVd4WDfRNLEBMKYfCyrfkqkCXQcPTZUXzce8MQLepHPTogq4H8xfxHEJQW7DpJUTkXhs3ct3M",
  "key18": "4WPbcW5nx87fTRmLLvdcXmogRQiDdSJVa7cKB5aRgC8C9Tgkp6rADWs5bjUNMpbbi9NY28JJXNAMfAXKTuXBofgv",
  "key19": "45eVtFoAeEDVxChYyZ78QzSoaZhv9mtU8vkiSD7Kxwfc5xbDrTHtooG2sLHZFvetjvb9WnC1W5XWEJZCMqMwh3ua",
  "key20": "5cz4N2YPSWU8br5jk5p4KkuSFBcs7k2oE4nAaU3tpZ7d1k4Abt7u3FLUWDXSHpPXP4bF9Xk11Yd47UZWHmYEzABH",
  "key21": "EGRugWD63WSZdgcrTMK6YELwFKFbhpfQqzj2CqyYBVHCUTXz25V4r53HfLj1CgXSFW7XLQmaBVH71jtQ8hQLojE",
  "key22": "53LzdfLbGDhj6Wpx6wgXTmHgZWApdXYcTuE2ohevnqxGtXou2AciRkGyZZjyUw7gctAEf2xLkZreLNeWsXfqUhtG",
  "key23": "2quR65NSHVTW8WxZmNXEpcajvxHh32kHDYLJ8wEMF7MyU3tcMqJZvivGjYdJXjdN7K5GWb3PpMpfR2gkqTKJKVE",
  "key24": "aVasyiRp2pbKyPjQcFHTdTPJw9QM9rFx5awvFCpKCtRTSSj3ioNyzy5VbFmZ4QnU6MxPpNBopAzSDxSLFBoNg7u",
  "key25": "Qay7pdzSFceCZNgoRsvzPoDJxDF5EGJNxLvPxJitPePZo5Y89G2xwH6pozz7PZGBHHiNGNrh72S84bLVtUdJmLJ",
  "key26": "5PsYbGSa6CwoF964yemfBmzMQPnmUA2gRYJQ6YCC4SLmHeeQB48oyxGQdnDca8ndnvrccv8duAPbjnA8Lf2P5eif",
  "key27": "66GYtumdXmv2JyYyJmUVZMXvRrUpQtYAowxdWfCqDZnjepMzKVK4S1ypGuDN35XuMnJYjfVKrf3NaXD7BJgQ12KZ",
  "key28": "12cnHxdvSSSL7fKkSohbKJRJtkQcGxwjEzZTvxnaYiVJaKyPsPr5BUoiGUVu7EBHDyrCZsSKv175hPnxz7iHbfK",
  "key29": "3RUHYgDejQMLJNP35QRcP1njsVqzHZmnMgxMJjZfbTcrzZ5Jrw5aoyZMGf1WFZ4JdeFUoXGs8AaB4FgzfQdXoWoy",
  "key30": "2wAGQdEML91tsTvxFAjSsnDFm56FM3Fk9q3ayjWNyzBeQuvDWRRnHqjgRCzNBzx7rQi1ZUrgDAssZYH3CG8dCqXz",
  "key31": "3Yx3AUotw7v9UUEuyPtBVes2fk3UAKmvfZJncdteBrxf65GYjBsUgKdZ7BTy9bojB9qnLVfjRhRLbMHqxMeXcFUf",
  "key32": "UzjUocQQ4oZNCdu8BrhkcUs27ZDiGoEKYDKQqvEnJSggDCDnPhJy9hJg7LEvYoxbAaneuQf5q2frWFLaT58rpNC",
  "key33": "2Yb7hsejgy4Rw9iJxZP2v7PJiVdZcBQhzH7sKNyZffWo3vdRsxKYGzqv8xpvb2tuW8utVPuuVZTuGLURGwZnMVhA",
  "key34": "2ycUPHQngUZCocnveivqcEz7ToD5ZaPBVsgWUYkbfZU8Zao1ywKHtEdMMqHZQXhy2tDeNWqPLptroybKQcPcjvMY",
  "key35": "CHq4drx6ZFJGByamPaDNY39fvXFqxm52rzq3P4Ndnp2JkN3fWgyUYV4Aw5hvzBEXfoCvK8nGaaiwG6FtCQFDnvQ",
  "key36": "26qXRxBfHcDstSpJyv3uE5zR25rgurrYhhBWUqox7iujhQJmjwdf3fD2GzWJimK1D7zopSurxS4tfc7jo45TeFGJ",
  "key37": "3eBmySHSpHVCw3cromoVJwFHNuj9GrWFC7iLX83KFTiBfdXKZAvv1mDtYkcQG7uP71PNeg1iwbL82dnHfUzyqhnZ",
  "key38": "56sUAigJn3GR2qLj7LVQde8zev6ynd3AuF5FDbQ5hqRnonETJUMmqU3Meub1CCDFhKJCi5FyxY7sXu3QG9rLc7pC",
  "key39": "44QRAQzYti3BYek7sAhRspLspAYtMWffTuxatVG7CGvQ6bbSKroh8ojPMqp4HJWWEdmpjEMcFbvabPidAGa8dsxy",
  "key40": "51a9rUbzVBFuWEPgwQ6ZfLajTXqVMR6XGMETRuitDzyyXSeiLJpgw8G63KG8NLo93U5NdDTakEXUHzBYS5PFew86",
  "key41": "3XkMy4c4YRJU4fZAoSvwDQE6TBMRLWsVUsCzuejW7HiyApx4NfipfKMd1BUBVfj5mTJ3f9YjS9w4KErBzTBYP6JK",
  "key42": "2n81g41q6z19FByLqZznkDQHFMLAfLZQ5w6aygDh9FFJnMmdCF6ASzNBv2fQP7aH3v1yThbpELmjVM2zEep3Udk7",
  "key43": "5JmbPymAWsNiSfK8mCyZRbkmGHTnyt8GHJjCUgUiszqw4d5syeimbXcosgC5m2Xdzqg6U63risq1idtGVc2vuStV"
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
