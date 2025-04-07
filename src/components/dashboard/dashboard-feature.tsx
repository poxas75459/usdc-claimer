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
    "2C9b3KPxfGwmRH7wQBMBH5qYSCKCsQbjQopwzvTJ9fSiME4iNLekEN54BGvdFen2piiqXAp7ZyUSTBVVUAQ2wn7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Afp3LFnNuwwBX77BEmUumPnGDaU4tsfVi6Fu4FwuwuwiXbktiqiXbgGgcZhqEv8WrmLyY3jhjHAstKWVTa3iccd",
  "key1": "5YkwS3YgvBEYAgX9BtKgr491SSH1PtUs3jRidAhUz2vijZCnVGKY1VuGHAsexXenXtPVJuEEeiohRKRTgbvqEjgv",
  "key2": "5PTM4ptMH8Lkn3AB9LyGjq4R64Yr5ene3RTg6QNDa68FzM9pcVmXQwJujSjfNj9RugC7x7YDaaRoHASpVAXxz4fg",
  "key3": "39QcbzhPDkvDemNLCV4UAdHpBdaQcgE5uoCBx6y3FvhBwsUMVoMwF3XTuH1kVJgEjtLiBjEXjLUf5CwU5xcHa5k9",
  "key4": "4Cn8M8vtR716Q9KHqUhG8zdU9ezbHrJqqCwQXAcRPnkxSA39qQ1Kif3oF1YpJyUx6oFJCx6pxY8zaMrDP967oYRR",
  "key5": "2ibeRm1hMRoWKdDawqZS59uvss1BwTEvdJLmXxRHUS4wa8MhqvKQ86g1x7pajjkjPrpfb239xf8oXSR2PiK1Ty3k",
  "key6": "26bQsdtV3TWzyZMyMdwaht3SAKhrX75FLkkjzxsETxa76DCyvxqpPwWZe4beUYds5SUEkxvYCbbubXu48hxHKUYQ",
  "key7": "3CvuGv5iSnGhxukLthB3QY1Z5xJof2bq9bRGMobASBLdbPjNyLbFdzwUsJqigcrkHWWUE238X9BRdsUJTMCTF8Jm",
  "key8": "2XDmMeroaHtSksPFqnjrkYf139eZayjpBD78PeAsTqR7TvMu7nUHyHkbQ3KgnbAC5ffRE2i1ZFZD6UwjC6op2gQz",
  "key9": "51qgXcSynA8pR1DUbfZXncUoL7U3EpsiWJgzcPfSAc2Z4XnJahfup3FBVRBAk6dXqsm2qPzRbfCba9Z1ttYiXU6q",
  "key10": "4bg7bMZqfoWQKGihEEY7eHzzNbNkZAfJqEJZsNhbv9nFGhwAHrakna9MN5BDpoHA2mec3rqRanWntq5s9dhhCkMs",
  "key11": "4wDy8fLncBSrE7fpFNYD4oRC6y1FsdhSzqqfPGXev1jpYKjgK4JvHhZPuPK6WaTZHgzXkF1qp8WuS9EX1QJ9mLsc",
  "key12": "4JqBZHnEom28D5AtYgfWsTvwfABHUQMx1AxbXB1U2qgwRxHD2WKPK6VpD1DbqvDVHWHsyZv9PGUfPeeumHgL45pp",
  "key13": "McSqyJgZg4AZxCdUdmtYem84dkf4x2iBj6NEGPkQ1XJtsqCADV7Wnj8RNDZZGFUDq1XmNnWtibuBxpsjPF61xMc",
  "key14": "3xGqyk6WecD6cv7RaHxaWDofdR2o2GiXDneg5ZLu3PMm4AGjRY1N5n3yz7YFD7Cq9k4Gu7WxtXK9iUniigtWGUFr",
  "key15": "5w4j2yZM5YUz4cwVAfBQR1RRyqmgzBZPbGr7AfTpeMuNmsth5SNYVdWoV1JjMa8yWfZdGApwmyid2k1J1xR53EGT",
  "key16": "4BSdqze4tkhDspP2oPqBZ3DE1nEvZDNPnv8YJH8F6QcD22XGLMJ7XBpCCNUmrjukZGKbHqYmrq5s9jDctpgwdWZe",
  "key17": "2nXpNFt3TP2gjhHn7LpRjecdQBVJRE64GV25kmwk1XMcLky88td9MF1s82H7mNgzd8dkAUbtCMyma6j9N1hcG9jZ",
  "key18": "37GyUu7RvbuZnLTPuhFEVQswxbGt7eXDBLjg5aYw1CNouE74wJWrapzgRMHWUmSLAK9SFpZRSBcF5DXEBnPLVYid",
  "key19": "438V9HUATMRsyTcrcN7fGFu3SgrjcqGVA5FSS1sQH8yKzHaNFPyTWLpAT5N4yyi3TvB4pDPKnhJDnxd93y9P6LXj",
  "key20": "2714jjK4kjaL8e3AEsWRTXtWszTqW2uptTTYsqLms5SP4nLtq9YTPUR657EhijPiDUS7EGuiSWg5RK6BmXaXmgoP",
  "key21": "5ne32aywG37Dm2Tn9apLAC92QucNxYkr8Y2wS4ZoUDLwFwXGWsjkZoGKnqDq7zZk4TseNYLqihwGT7arCjLjvako",
  "key22": "36fQ4RW7rHPgnpY1thJGW7VFjo9gpXZQraLGnr42K1QNFHy8k2QUHfGGebQ2y8q382vStTWAagwUrBZdv7bx2s3T",
  "key23": "3652wHZNVLY9HJHN2rtZS1Ft7sWf3oCc3CwL6JzhKzYrnLaSxnAaLfoY6AuA1PhPRHt9TQR74kQnmSErnP78UrUg",
  "key24": "RH6QA2dBhRD1G7idcC2bVbhfrXRFcopU3n5r3rcsMgknsWhCCMiVUjJDHuvMWNQG1ytpZ3eGcuLNGmu1M94du9M",
  "key25": "5S5meNB8sVZeNBCQgrWP4FnM269ozhYUhWMPhXTumyvAW6PNTBLKWUXnDU2nK5xFFQBxSVW4NQd8K4FotoRTxbns",
  "key26": "6kK2WEBPupfGTQCWpcURdewC9eLM5kfgjB1nn5WQj17i81yyDJ8d24kUdvBb6yFuyCm98fDgsgf9o6rxh5Ruqxd",
  "key27": "5ek7pcbbKJbRffuq1dR1EigtibYU5N2hMuPcZ4hTZ3xseiTRXNbC2PYwvWdgroKAvqhhSSjWUz5ZJ3PFbbur63Nu",
  "key28": "34cPJgbtMU5vJ8X6nupjYvprgM2VgmECZ9TDH6a2RWxPvQcTDx3Tatgpda8b6TbtqW5RiqqZqNprVgWveqtPkoG4",
  "key29": "49shS5YU9XK4UR9vL26ftp95apjsLBhVxFPdZRuJNxue3BuhYCMJDDtKwduw5cyyDi4FzFqqx5Y5M8oWw8o61gtM",
  "key30": "3rcEsaKR4DSsxj4Er7QRjSrJZ6JXf7o5egzqCyiwoKngqZGDnietVgkHAxEQWkZwyYLvjBmMdugf1BZnLn2JZ3wz",
  "key31": "52voRUCrVGsUgmCrMvF1QWFXKwDGY4YLnrJj6E6trvmY1f45hYLqQtr1TQyeJ3N9ayzupNftsa9QTpFtDC2sxkEx",
  "key32": "24YZPfujHdw5sqwy3bWZJ7g1zdzVAkSYmH4TrTw8MtwQoERYzAHKrfBsFrgXykEp16xUcAXBQ1F9GcPcegN8t2TF",
  "key33": "2VYqJrJrtSQb8HwsWcjqsukBEWRcZyxsmpB9K2d7GWE3f4Qendf3Vjm1ANnxTzxi81TYvgD93L3BD9TKg8dsicej",
  "key34": "32ergPWK3ut7pR58344BS4pLBXdXWBVcrXxAdjKQjbAhUHJEbYjwALvDEjJg8zEgQRsWpybod4VdNWuUh2b78vZx",
  "key35": "L69k3RvZK7LR4iaen2Uc67DDeHjAGR2nZcFuY1H6Pp9pPTg2hrv4Fcd7rwesxJuRnrsn4Jpu1DhHdLjznvHPX5z",
  "key36": "2qcvu8vXtcq5xatzsq4fqxXFqJB17Z797x889kpgvvgL5zMwn56H3UWDWUPjtC1UNKPAmAMT414raRSt839k1SY9",
  "key37": "28wY33yjzBqrN47sCm2wZ6LvYgQAzfdz9T9oFMoJ5mc9RCSkdezD11uc5yBeCkcTWUiLrZtAs46gxdjyNZPxzkjY",
  "key38": "58haBitTs2faJzfNQLMcrqKq8r5E8FBNFNRkpKYPDbWP4ndCQvkHSWuKUbCr7zLgrkmikiZmSUMDYe6hoRZKawNA"
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
