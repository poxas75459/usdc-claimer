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
    "5hSyJVPUwznzuTma943Sgv2XCpRnHAL3WnWhAMzMPMqoDK5QbC8G7RygnyNp8JtrzJ3jRoPvh3Xj7GhmypMtPmmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A94YDkG82M8FvBgbD9PwC7tcqMndN6NYUKZb5WpXinXESrUxRwWApJHmUZobNSqfd1A75JjM4ZVKRFKpiNrCVWY",
  "key1": "5PAXzo8zmevDJgqo5QYe3Lcf7LfwAH4W6Jfp2j2qk6CZ6LwUtskfkEBdWnpMbHSeSTCB9aVkxDGcXsJHrMARUkvn",
  "key2": "4Xv5Sbb6QifWBph6ur4REx9xZiS7ZkyJTcxqs6VPKUgTPqX7yBx45BPpTEQU1Caesav8s2Ecpmr7sYGvfFY8HZhu",
  "key3": "4vdyUmtYDHDAZqmUPQ6LT9ErkQmTg45Hby8pvMi6jVu6pPYbwN816q4gXzBN8CjaRuxPKcJ5WzbjLLEX9C7DhQ4U",
  "key4": "4BmiWdywc6veEmV79DcybzTazQUiDNtn3xKuyMpen84UiQTCtjiNEWNBhpkPX7US7eUcEoo5TWoQaQA4gSM1n1z1",
  "key5": "rw4K3WQEKmKjshTJhz6JojdYajFi9JW643K4YB5nFkRFAcdYTXNtKtQrAoHHToCutYYWLGBD5fGbTQfTVu46qbn",
  "key6": "aNCvCHsEw2aAsQaQdr5bB3zFyyrYRhi8yCgtkuSnznqgXksUXFobDrgppjv4fuT3MEQsn7UBhdLy9ovrpTkGGK4",
  "key7": "2z79ezbSPiV3Ts7GgH7f9oTy1vj85Xt5YaioobochszyjKDJ6m6HbKVg3YNQTjnh94R942X56ubJZ5ucgL6H9Jpf",
  "key8": "kD3tsY9QW1NYQVXJW28APHJFC7QNnYJ36aKvffLab7HTCUAYYq1UWdw7sjE5V77XtYs6zvAAxQ4W2LV8U6p9A77",
  "key9": "3A23C54pcq4TrME711Q9nb413keC1uXeqAXFuAF168hw2JSpBsJXs7BsgfhoVWsehS3PA9JHLKk4rAQf5ss5kdRn",
  "key10": "4XEvxF7g8toY2wyWRLV8B99P6ZgzcP39yjk9QjVc7hu6JESAR5WvcJcoBUnZfdCq6fXo5RW78WnL1roZzbhnQYvf",
  "key11": "5nkhhyXxkJ4Fzn7DZ72cGRKkJD14ENE8vJGQSvfUimTEeGs4kJrHhiwV1KtNian8w2TTetmDjqpeYrmYTMtZ1VMx",
  "key12": "5BMhPQwgsL2EHSDT9pPahXtiFfpxukUbEh888EyReSnAd7zcGDbb9v7HWNS8MJSFtpbeiMMze8TwLiWgjCZ5Xv3e",
  "key13": "3vSnJkxHK12ezsrCihebS4pSnvaszaxqaGHJfPg7ZF4wjrNbEy6NUPmeAuzRawP7fF413yZabVCabrrsHZuZmGm7",
  "key14": "4DWVNZiZjkVxc2BnKcRe3d6QnuesbTusFM8CJNHdnPLD3Bm6WkXz993gMeqHumyEuPtW1WnKCAUeK62MAKpJ77jD",
  "key15": "2oXyG245QEBXaQqdepkaBVyxCjbrJjxkSkiXhgVZZB2KPWBuXY7EVZDA1576bj9Ej2U55K3Uz3gBWFbpkQqejSCc",
  "key16": "Ewrt9kUpbnZdiJCFLJSpqAfEg2gGRWh2fxt7NQrtUvM3cXZ7ksJuBWKBcgG2sPrYBs65eSHJPj5Kt2vVpqyyGnX",
  "key17": "5LhCPDDCBXHwvYDt7dm17A7nKUWjq1E3WhrDVYiasEziUaypiGYkr63nP2DKpqYSPTWKhj8tPqryKjpsssigbJiW",
  "key18": "3Wki6EP84e74ZdXRnKHQ8kAKAmDddvEhrJjPLrBzy7YNhmx1kHgXZyDk47nsYLHECsAxaryYxhGM8CtHc7umdwUN",
  "key19": "EkPQTZytXnNbAudTrdEbtTc63kkTYxyGV6qLzNFa9ivHJxKEwZRtx5o4XJ2Mv5jvFAPepb1uyNELZXppMCVwt9h",
  "key20": "3fJWaMNbxGju17npeT4Nejb8QWCpuRyHd9fwjLahgz1ej26E2AB5V4n9R1W36LYcvziDR1QBfZAR1Zb4rJGr3hGC",
  "key21": "3EgtnUrFpEZFRGQ7DT5J4cF3vcW1ZuAdzdFNvZ8tKaWdWVCLfpZywd6iv9ZXLAmxZ6h2ttv1SGUJGPH3yCwpVD3X",
  "key22": "5Bxyb11zGWSJmhhovP2YUUMnfVa4Sbs4d8Y6pScCKbF2WbSdjxwQfNsnFS5QLM3kkJZi4QKzDbN3okeSc3g5YLHP",
  "key23": "4xJkV4FWRAkjV7nFowGNwV9wf3vLnSWHSpq4UPRyKPFySqUAfYAbhr9fz7K7dLrcZUfJtt8wymjc5Wveg98wWG7u",
  "key24": "36aW2bvhzmKqfizhJnduhqUxTqnEHgQcunFSvFuQcXzbv2ioTrfxy2KS4Nf7iPGGvnAa9BiSuRDppdsPhGkPzMsT",
  "key25": "2SyCm6ayiXWyfk2562U7PbEGbxr7r2MTpqjPeLHXMVUzvUFweLQf2z6wy4pime1N1zTvZWeaYRLqoRG2FJ4jrLiT",
  "key26": "5Nh39hWG6pYkXfAcebkGHVZDFgD5xppa1hjMwL27r77fFBkW744YXeC4bXBikD79MRY6zQyTA2uL6ssUuc2cpwA2",
  "key27": "5hYhAspano5ova6PpsZ5faYemVnJo2p2SR5n3kEHgqu3QbHas28xMMZkh9dW4URY7Zf2CSxnNENXLpwL4VVnL3hN",
  "key28": "5jDpqa66ZCRUSSQQS87Kv9DqVvYrFbWb1WkFwsMDo6rmertDxivmhw9NYMeQwQHG1WF6Mue7N1mnJNPSxRNzecqV",
  "key29": "A4EzzATvEX6ENLN3T8SJZB61uMkz7wtDMRrdJmmX4PbVWGFhecYUgHvaYVrnLvKAEuKcSaV23jmrJStn9NU33YJ",
  "key30": "3sekR8GKnJtbZTcsGhU9GAmfg8iyK4kNr9dZXcTMdQU4uhHJyjfWefjvCMQmGFS6CM3S1tZSouUWLAygRffAtFDe",
  "key31": "4H6AUm11ChPFvrRRLXZ16NhVjMZGaiZgh75q5Hx66WLajWKSAdNMq429wqKfCweuK29NjUsf1b7NHz6rpBDwyZK3",
  "key32": "4CdEhLgFECwBqGcSLFBeCsirMsNzK93KMDqZWYtwqHLp4YqKpRRTDENrQ4MV5cBLmSMeQQd6rnyHGRrPxSQ5cbSZ",
  "key33": "5fMBgJPAHiYroEbcxZBCi6d2PGaiPjKpdRZAdAuBUa68moQU4Xt2sDeBnUNaA4XTeLSJ8km5s8d8XEZmbx3m1YwG",
  "key34": "32bFSEvDAgqKC58DNW6zoTvBSEtS4tokAh5zaarxYXBodd48LzdJHEs3jFRraF6ALPNAk5yJLVZVNvAgV4AC6bxb",
  "key35": "3YJ4UgWxRQoxh5iFSZY1wo4m5FnKfMnVMBySDusGPuWMSaGq9kSVnN86y1rMJ5WXKy4GP74VT1xYXatfwaDz6Pxr",
  "key36": "4nRHuwsPXx1fngoQyRgiyC48ugsUbmddJDRaCZxAdfMRUNLsHKXMNqA3pghwbhSmVonZUUgcF6HXU9nLGjAPF1ZA",
  "key37": "3KAkownDQrVAWP3p2WnVg2vcYVpWxacsxAniugZ2Pd6tZ2ypPen6zaN4nDpdts4mBnKmmihd3CjhDp8bL6fN9KFi",
  "key38": "4EuNeqhDsxLUSYcSTmkvMx47XpZrxvFw6NArNzVJu9cFTyVa1z6XoVAZ42kdp1jcHiQ1CPpTArAC5kFizgVwxo1R",
  "key39": "24RhfSf5L6YfVTFyxAd1GNgc7EryW2GsDUFPSX2pkvXg6ccm4dMwLvjxiTa2NVZSQ6WPBTXkraYRrgPqtGNwgbsH",
  "key40": "31Su3rE8gGeDFySSi6RHWNkYRpJqUHG42q2uz1R7yFPTTRmcMoYe49VG3ZUZUyG9fBUQTtFEL8Q69kK4RXF7C1WK",
  "key41": "5X8NJ7aFc7EUw6fTffrbMuJm4kidLbkPoogunuu5STAohvX35PNMRQMB7T5umSM8yRbiiWJ9xSHNVcm7fEEB1xfF",
  "key42": "46gHPmXGNDBHTmugYksiz9sCbkKrAtyuceFD39LwwYChFCJVSncvFGz88iDGwbtjumCbFCKbg8YrXssxfUBXFMJQ",
  "key43": "8ERT5CbzP4ewxQ3xsujrvHUu3VZNfmpS6dNahMjTkyJqh1URrzNWa3qxQKrPFgvw4fc13ExywxgGZrB4Vmdw4zK"
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
