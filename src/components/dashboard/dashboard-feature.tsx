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
    "5nwERhta9tp9511Rzzx1XGSg91veGYvVnBXbA9cdZCQwXesUDfVH7cYfeFhNmaWiJdSUkZV782dCE5QnUL6Pns3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66m7wEQhwJ6eHe9gyv9LprMwhbAp8tvGEPf4MmdaqgfETC43zuneu71Ke2B1nEjCpVdhS2W9t4kSinVuLotUS8Fn",
  "key1": "EGgyHY8aYAMtjqprgkWDuQP7J6pdqmVEianbNWDMhTwE1MLfZN5g8R2xnWAsbWW8v3enNALERXYErtcKfnQef35",
  "key2": "5jCfik8uUokD4NmKYc3yPfgWSYNr99ebVXqi9CmPYy4gzGsdrov6P18x7Xx1KDYSDABcDNspvxeUuL7URhVFG3ha",
  "key3": "ButgXRudjKqJTJdEjV1dNjLeRJJBSboQophzSJEDMzz69foxd2CoEXX7sLPPE74VdNadrNd95Y3SUETpWfDCZrD",
  "key4": "QULhLCPfWprSsMskfir6xYisUyTaVHeP2rnHv5im6wPNGcc2zVuQECkQYQYYf8fe57pcjRyTYiHwFceLvqoHVPB",
  "key5": "4sVr2eaA5rWCx4LYwNykMQy1H4MVwq8rjmwWczBcnZ9BeqyLd5T2n1k3MqCEfnYhbdeQpRCfVzBJ8hBrrdy4F2pp",
  "key6": "zgTeDhAFaCy5NUGfqdS4HqwS2xQo1udcbWTKX3USyGWmpSSJAG2ynSiB5w9TFmqXi8oyzfFa6YuWPWu7XqDUymP",
  "key7": "3xgfWp9TRWbChrZa6Cyp49rxGJhXmosdu6fw5Brj6pZTBEZnJUQdNv6c1tU5JKw8RsgiyhTe3PKmgeLiQvY7SoqM",
  "key8": "5zmHmr81EjfkPn7t6Si5SPbNVFj8ujkG81WjDK3p9JjN6145F7ALnvaoE7tBDDVnqYDW2FyJtkScMNvmmBx8QVWi",
  "key9": "4CWDg9Q3N68MrUAYXqnPhFGnDfaSnw2X3xZqnqCivSXW86MSrCK3dLZNb5qXAbJ4QYA5bgC6z3cn9fhhqN3Juioi",
  "key10": "5ewC3VLv63VJT9ygx4SddCQYTjAJhbdwhBuxubbTm7fQ5CyxAn9HbrcNTBhAZkHVLrKPDqrNFErHUZQa7vDmpRa8",
  "key11": "4QpqmeGDivovKFEVXamY6eDp17YrMsFGzEEQDJD6TH8qA2kUWSBSrxWvdZrgkWp7bcterSHomrGcdBrVNDh4ZjMn",
  "key12": "26bJ6DqtXhYohfwiJSDFgbhjPh7eMJFgF3cs4zY7dsP6G44wCwaNQbyzwbzjqH6thh2eB9fyN6kuZsmswKf2gYb7",
  "key13": "4574ykBvidxfVnDEqvrNmhsJ7yd4zDgqx3n84MmGjWzCjcqAchmdDFDgTcMHU18R6TZvgzF88JmnZ7KAE7F4fmTa",
  "key14": "63fdZVtcnoxzmxuC17JpuLTLYzqf1oqoRcYJN1zGRLrZ43WL7tKbKLMmJXsHEpEproJmpYkvrW9YcYJa6gtBdGXp",
  "key15": "42THTbE9YVjjt55uyNmyHzu4nJBgFDvXkyAW787mx6usszwE74uK75RV7n4zzhhNrdPgWR8gMsafkqQYf587Q7CR",
  "key16": "3Wmzj3KsNBWSULMyf3BkB8ZD9sPeTTj3iXtpQrk2hEmgG91Nq6Xf1FBuAka4wmanqiSFXkU7jv2tq2knXXw8unu7",
  "key17": "3xVWFugds1BZruPpqcBosGUpqmdxuok5XmjTwVdSJWfvjCC2bca41zXotkqRS7nd2QYMdGFaYEoqHMuLkwcbyJ8Z",
  "key18": "4P288Ui1aeu12i9cpZmfoiDChjtxHPNtNnEesJPfZp8LQ7feWyvVJMGkvvsGWT63eVtcFL9oacc8jKNuYxcwxh6m",
  "key19": "5wym7xuX6NxtthENYQiRHEsBWu74h3rfBJ3EoKAXUC7bEh7VckCS6Mzcez4RmnJmPPNs9HD2Sx4oDcGQMLeCsLYd",
  "key20": "5zyDfKDCYE9UxDhxfUuADUdeKzEKFFC7yQxBLPR9vSnThe4hDkWSamV4F4QMy54wriKrFbBkDfu2j4PPv5F5KmGH",
  "key21": "2W4qtXVZNKovQ378L5XgjGJLFMw5Cq29EYRssoQCqXtvFH2qBtJHt6o3mysEjPMSEPqpV7xJKEQ9Qg7a8pwC7foZ",
  "key22": "2fAZ2GnhGH7muMPbY4czz19wZZ7Fvye6SbdfLhMgEdVTe33HvQRPLP9CpdF6yVFpTvPwjMcHfxpFfTrnVx4HupCi",
  "key23": "5DoEvdg13qYC5XDuhMCNTWAm3t5yGs1kkQVtRgpUfpq1EUkjUNFkzu4eJysVCZM5gBhyLcy1ZVi6TM1eHwRX5ng6",
  "key24": "4Nv1xx4URqGEjdRgCAgkwTf6s2z9uxVEUBWTfmq26rFQP6N1bgBvYugXJfYcDr26yY6RE3CouXhnSgfcna9tXpWc",
  "key25": "xDF3ie4LZ72vrMZuL7nTJFkbW5zDqa1faX28ioabQK4wmcAbJWKsdaukxMbVJZJGCUWMu7FcbzFQNAgcWt7GFtW",
  "key26": "4jXzyoyeLVeupDe9HqT31SuP79vrixc1nRyAVq1W2X74GAv4Xr1PXPomvwAJCLqWmrJPc9B2Um6HMzcmkoib4gpo",
  "key27": "nCr6mTDsxzYjpmGsAUbiiopPz33Jpu1jJDiApvB2rS4JM6MCkCESVWJYsxUZXE9AJdrnhc2xmCtdXyMVcoxfhwq",
  "key28": "4ND6m2iJpZX5YC4p94dwd428bD6DsJY691HD6TXZJY9xMFqwwrzoyMd66wcE7QtrWk7zszCs66TcwUvdajQqgYA3",
  "key29": "2hcqMCtRebx9R6zR7BVvgQss3bXxyNY7KGHcBPqTzzpdUxMpBHWkuxxqxVHjRMczmG8tPNQQwMDPrR86oiKGkNVc",
  "key30": "4krmLDS6iyBnZw9oFyKizzD1v3wHufQiSJ6U1vxQjHbBHs3fNLSPcBoTVPn7osmEsFiR369XE7y5T4vFAWtM5pPj",
  "key31": "3T8GDRC6XGRsezzRBTDnf6WXRBKjSC4EsB5qEpTrsq37WBGGRmaPxbN7tuR7N1QTLtg9x7WMs4i1tXJpPJsJBAvB",
  "key32": "66wB4Ueeq3jZzMoMBZPqu45G2dccjLh2uyB5iJX2ZWkX29gAA2kmzKVrQp3HJrf2MUDYUN9bQsg5dSaMY49JxY9U",
  "key33": "42eXCdBb56QrcRjUsBq3YptrK9fVTqswnaASB23F8Aim3LXuy3Bztgun4ZxFr3mNhhboTdAr6RJZ1c1P89KNjvxv",
  "key34": "5XPLNSmRvyNpCVajS7keoHjgfd8kyTqQ713vkjPnhz3Rqbr6UYToUd6C94oUYBmeZNuEn5ATwaoEFckZQYcFY8Q6",
  "key35": "23y3gkQXvGeEcPJ9fGTJ46LBwyHGL57ads4UxEihPYGaY8kHi3xWbLEHc2ox3J12gczUbV2xvmgqYFuCi1sZ6mVH",
  "key36": "2DqXfA3zkPL3L9vgJLjyapXWqRLj7k2R1NfKcKwCLY4eKWphJ5JhU9feQqGYhoPkRNh2zSUQrgPCnPRkaR21WqvK",
  "key37": "3B43KyEP1S4nxYjJG9ZzQ8TvXjoka6W2j6HN4RfVpQN3UySQsgL3Wqm6PJqC6bcptHBa8mufxfs55Ygxy7prtoBL",
  "key38": "5MrTs81WtYX6kaLMDpqRKLiaCdsMFn5ZCbcXYr4wgan6ZQEHicdGWvXYWZWmhiw3aKp4foXycXiPf1BgqGuasAJG",
  "key39": "3fSSP6NWKtBWJunmGhbuNZAPQPCtCwhuyxXudmEwpywetMUFBo5CHoLvexSamZAQD97WYvN8tJrQcAHz4pnY1Eyk",
  "key40": "57U2oGizbKgFkG44thuAX3tjms4hEkLkLWVGXheUgfvcwUDjLvehzU4gGKyyrL79sjVTp1vqiTbKPVXzQ6uvYn7m",
  "key41": "424A8Bp9JfqdMMifg7SWZbd64up6WfBwXRxHpzehVwQzAYin6qhrpkXMB54ktmcRkHVWCBVmAGSWXLm1diuLP4mh",
  "key42": "3y7F45kZ56rTxgTfzpm5CrwbNiobvupcYwkSsrs1mGL2tuz5jaBs9BbiEBbbsuj6QpdYWzACnQ223RkSqfTJap4W",
  "key43": "2WyChyAYS3dC2iQsUt9AVvZRzCy9z4svBgqazdPRSG5jbQuy7Jz6Na6Ny2GMxqEwa3mmCyx62HLs6uUKR7k38gA8"
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
