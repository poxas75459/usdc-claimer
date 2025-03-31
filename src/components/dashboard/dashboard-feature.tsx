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
    "46zsAERVnJ8PV5xw3wJbjpgvPYnGSmZN8tTE9HJDk8QE78R17ePKezcWgiYR7kw8Zr5hAU7zkkJrU47cKXns4hLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27S12Dih9JUDz5KxdpyqNoU5CRreBmm5SmUAFQqamErvecSx73hKCRyVBLaPVZopboWEBhNm2mFguoFvnefKqAvB",
  "key1": "YWMDGieLbTHXRBX1KDvMBewz87c96Q7zNEHy7sDHUe6EiEXrXWRJnbyhUogHbxiCUr8owbSCB5T7MHCSNRvdwPP",
  "key2": "2t972wpcf1kBDGsdyybjfmou3xaVwANMSKTootUJWHdb5Db7j1bBM7fdkbbJcHPmPUW2FzCCAWPrL2wqjJ5aBPdM",
  "key3": "5hJga7DzYJ6WHx9UEMdyyLjVBjPNvT4QncHqAnquiQ7zXgs8JiGEGP5x1ZGPgrWsYWYmY9q9oJaho7JFAGQShVsR",
  "key4": "3hGN4JDyvSL8mP1HyACQMX67nd33zGu9q5GB2XQ2F2vdy4EodzBAHGpC8hX4N1JW6eVddo2qnn7jtJevzwMBMh46",
  "key5": "3uSpwmPmmeBQ3159Vfnp8twc2mWAB7MMGVKtyAGWjUAnEdR3RrQYBjwq46B68xNBjcC5o2Qu63kjKZY26xZyVhcP",
  "key6": "4b6XKPSRaAGYPHw48cWLf1SU81AQbBDGLsHzNyy6sBXDkxhRkDEt4NXe8q1R1ShCpQ8RTrY1wtfHXTgHW1MUBjyt",
  "key7": "5SzhmmasPcArCcG8HKuzsxCzW9wZb45Z6oZaqXva7qrEzZEtJNrs3ApRhKq8oGa3zN9ySR5qouZ8LpRaqpm33jeR",
  "key8": "22CPJXATZaArBGXBmbW131fKsiwz5eDjnD483cJbMxmA6A9q1Z8Z5zxa3y2ZRHBYmWMc6jazP5FadAf5t7Bb1WdK",
  "key9": "4WPkhSkGM6U6eNLPmM9VXm4zLLobGRnM2eiKq9WbRZKUdjU2dSt4RkDtsA6YThGHjVwp3ZD6mDo2wxPDMHWuK9zM",
  "key10": "2dUicMNa56f3q8D2e4qwyhqevTGtvkmxDE7361k4z3Qnz36djCwZJnMgBdrGMKXYz76wr2feKtpyeqoxfeDCp61P",
  "key11": "2CQy933QnQ612mEESTe4okp6G89N5m9qMCH2z8pftEHhAA1RsrvcnbmRiiiDZiS5hy7qXZQwNcHgfuGLZxSjKczE",
  "key12": "5zCVVq32tVktELhc1QUsFYsUNZnEpRUHZFLKmHY3P4VYEH4PvqhEU1qjRFxwxqnJgNu4VRyKLvkkTchNtwh3pRiB",
  "key13": "3ZmCETVPjdTsirCsTxJt3e8CYcJ61LGAihLXipqUfW3wJcjjFsT6PMEQnyeycqWUXq36XFP3XbSXKBcWFuTRALfg",
  "key14": "4uqoNt9k7kywc2EJarSYVZTv4b2mYtz419Lzc1VwgFY1uVx9Qbq5Gjb6f958rfQZU18gCss6mPUWhJUJyo3YqG3T",
  "key15": "4JAw97W2gSB2Wp9TNd5e1SRcjD8fnQLdZTZvdAtvbtW5wkYZqmiiPcJ53F3H6aZ7MMgi4vHrnBx36v2EjWdqbeVD",
  "key16": "59zbr5JnyJBULx6tKwRqjkjjwQAJrCtbrkmPaLpdVcPtygSLxiQ2zZ89hWJrYZZPfAvYMidiyFSfio5VxWe44o1B",
  "key17": "nRN8Uy9Lb7Prs61VMAs1pAXVyD2jQjafGQgzDyGA1WDKxuqvsHcfiLfCskfUDDirRbF4hVoEgCbcsFSKyDMQk1n",
  "key18": "62Jdr83F2fhgqdGJg3ZwQSVbZjWbiooB94qKxhzDzFbcdUNjbFcNSUQahijWQK1fdWCZbAuimX6wY17JSfUxR9mF",
  "key19": "2ouEAvLV6NTNn7RYfRa7yMkwQPELf2sgRcgT81J5X8g5FJY4sJh4TahJ6MBHwm7WSTJgM7oUZkRUpF4XjKzAPFku",
  "key20": "36KRSk5w8TZ7CfjUoavQyPnD6BhTkC5nLEdtR8fWdpHoT2hmGvLj4w1jZWA7ueLgTuDJc6jfwaW7PkFhuJGCBnZL",
  "key21": "RsYThUP3cqG5hZoHoB7hqfF8sAT6eHSBHQcNxx5EAugCZX9wAQmTNfB5bS3JK5pr4guMBh46SZasZX1ZFMuVGrC",
  "key22": "574DczKxDX6W9HYzrp5mpYGaohMoxattkLadDRF8fY9uf9PeUDNTST81oJySA4jBVCcbvzL3BCrrmbBgK2QLmVE1",
  "key23": "3oNvpqTct7BNs8ewKyiqSVtRPSAqPwLMRpcwpBcCYSioveT6oL4ERek8a58VgH5wezNX2fUVJ2uaFWiqddvNfxtK",
  "key24": "2h2u2jcGu8ULqF8R31pVXCToFsz3JKdCMEVnDrJeLbv54bHn4uFmjtPJiKVnrEhrYASbhidi3xvEzXg7Dkc6gHpu",
  "key25": "5J7ag48xC27uULAjATeEj9SgPRNRjBWTPwYD93eGBNJEYYLSkfRpDCsX1Rx8qzrYsJyQPPKY3xhYXSfPX86oCAEF",
  "key26": "TEBGWQMTu3dtdMDCEq5DRuU5UfUKvmxkvJsC7S9W2hHYZk3To85m67yLW572ZWAh19q8FcMMbQFqG8QpY2Rih1y",
  "key27": "zVHKYpNaHnWiwzWBtNuwLrkGGaLurss2ouyknwwxM82qT8DkBkjETS3DuaAthdjPMp8jMqNcfTjJtd382UWkTwc",
  "key28": "5R1cQf7dvzN8GS7EbjAGB6L9YVqgWDJu5DRsCWm82B9MEaKFaJzVncMqRjf9VWQgRyVhyNaK76XJMak8vu3MuR8v",
  "key29": "4U9st8md1VAvMVfLRGFUEyZuWfraKisjxjKhMKFKTScGHMYb5AdMtsQPRoXvbSvqLqNcnZn7TWUQ9hUmChQ19vS7",
  "key30": "4JQBuKJoY7QjZRpLvbjSnLyKJQt5fCNsGbv3ECa5pnGfVf4Aag4fzEK2m5BMyJGZumRvnPoDnSb67bMxpgHaeEaU",
  "key31": "4rLPD2xZgm5RLu9itWBMYuHrFUAo8Q4FU9RgSHECeyeMENkv1928sKMkLkuSYU2Ah62r37EKcwYGXPWiiYmp9rvG",
  "key32": "2ZBakmupggwveZo6gGNhHUGmHC2XUz2us5uqymUrnjF4iH1GKxt18NDt2dK7iToc8G19nUR5LTa7gbXPCBTs1hkb",
  "key33": "67PGWeEJshkogk8KbyMatEgT4vgqYgsGvRM8XJVbHFszvLcWsi4yLWiG2jh8NPRhDLR85bEgmkKY83zpko5kmCWh",
  "key34": "4XYqZebb1A7qmhgaSMXhGHNzuLXRSfCgZjRbi3NAQzKe7vCbYLdESm4Y8xDWmUxaA3oi3aMaEYBN43XwN8ZvEs27",
  "key35": "26HLs9uFyM5jx83RPcyWFscPg2FGCmgfBGF9E7ryPVCWYf36MffQGiFp7RfK83gzBTd9VBsQnE3K6znSHcLLtoPZ",
  "key36": "4HdHqT1m25j8FQcBCy3cnfKJjW7kBnB7shqfzf4GwoGPZwx6yAcAwUzoE6W6S9pZCKKTACJuDSuRKbFbtcPwEHqo",
  "key37": "4weV3G5paDUs97qmWqMaVwytMEfy6NFQtqeg6ixUdWWuJVpvjTtXM5Q6xLnXPLDNCiaCqG2BwwF7eRFvBSXagkSD",
  "key38": "3dAcAkSDiDWMiPv5ep6idf5nav1xEk8X4Ppt2pzJQcdZaimGGgNgx2wmkazXvzm85yLxM36LL2dPi9i6zCHSu7FD",
  "key39": "5UhHSSuaw3CEJxZF9qzcRWYXNz12rwB8h5E9FoWx1Q3VaF137x4EGwTqLmQGiSPdJhWdjnZZsEHcpDiYTfuWkLun"
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
