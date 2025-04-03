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
    "3bktmyAhHqDuWUphESQYHeTWfEgNGh2UdPVgSwqN9QfEiRKpSjZwCHkxkRkNUCvvBmot8qE4rJT7g18mBiafvL58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmVjoPnaJsfA6PPPBYF1Szob954TwmM2UsyhjVUgHn1b4X1YqDKggbKa9qaDdArF8SMwFiaAnGnDYV6ghXykCWQ",
  "key1": "3LbJcReycNk62jnEzzPLafXZzqMjSGEw1sqeMv9hRyj3VJ4XkpXUhXXUM214rMQKfDMbGc7whbgVFFBN6TRgSTMu",
  "key2": "2jFkViK4HZzTWHyFWW5DFTAtB6tXWqR9CYsrVPmHvfRgBywTK9xQjrRpCcsqHB9isDXhxsXuo81J2pMaonQ1CU9J",
  "key3": "5k5K68S2F2t7tY9qnjNKs3AfWChRwCVtmaH1xCATLCHisAZb4vGA6qmuSpHM3SDQhyyUMYZPx19wCsWBvtnZxSW5",
  "key4": "2UGzE2dKwNdxiK6KLrjGiHUPBduKtCKqxLUuyNuuezJcNSvRBR5hQks6EcWMzjjcCWd6Afmybi1hs43eN1oKhkX9",
  "key5": "2rthtpfzdAecFghNMnDy2rHP7uchoZNZ8GeTNzcQ11NnAtAwwCmy88pL7nRLij9US8TxebpoAEayRUibEMYpfS68",
  "key6": "3Nf5pMBCc82An947oMSGohFKScokLdLP5PPmAwc2Lq93eM1sVL4EzCxkfrwp5njDJSEG8yCjxCEH31WmMMRx1MJJ",
  "key7": "Ft6yoJEcwhsYnfu9qpmMpPGBwYMdBz8EihMsmNh4tU26fg9AUpeFifi9RDzNRuhRye93zj3PKbEtq4CktrvzVeB",
  "key8": "3Y5fSfwzBZmvRP2n46puq9LVws7cKz5ewFGVo6bok1pdHYfjH8VneDsdG9asZpMHow7SXYjY3LmRvHHT8Z9XQ44d",
  "key9": "wiJjFGYS425kmJu7aDJfBpdEGEh3img5X4BUfPcsZk7qjQXM9QKZW26ECKM474BHSB26t77nfy66qr2iPH21MoJ",
  "key10": "2Z2K9NhUSWZgPMmfbT8zzLuwnjF4GeHa4LErZFkGUwSUQiCJZhZE87SQGiRQqRRX8syPy3PE47xisnBEmzzyDgNS",
  "key11": "5fCXX64ca5RfVs6JoVVVvnzhG2zqNq3X4wVFvd8BnaK9GZu66YtmwRVyGVfGQTfpSzjJqG2RVwvaJwqKoDXhFyYg",
  "key12": "WHcoq7HFktGcoPnF9Wn56U3CiRB5xHprpFuNi9XQSi5FJiWVfF1GQur3SPtEhRfhj3p5PfwNKz5CKpZCmFBgxrU",
  "key13": "3GxQP87BHDXx6ybXQsCHiDptrWfA5U6hFTMEceDJt6L8qGbUcVvkrVsjuRMTXQU1dgeWeuFEM3ZuoUnzhfihXg5z",
  "key14": "3ViA7VW9Zx4PTR4icTGjCNrByBnM5e83vTnRLJuPQn4ThRCX3qNBQTMgSiJ3xEVG2V52Hg7zPP4aoAn8WQmKmbBE",
  "key15": "2QTen8ioVKBqBa1cuAwXUb7bd6dFpXauTKLw9dt1zAX1wA1WygDCeJ6HYRkspBZgpR3yo37YVxakeqVGsng3S7zA",
  "key16": "4GWYmXxoYPsHgitTqESYLEHJU6q3RuqZRd8eZG9dS7nvaBghvzhH4pryj2BddQmcR71suDmX9bLXb44QZyhh6WR",
  "key17": "5dVwPkiUYR83Ya5ME4inhHuM87o1mcvNXP16ZUkedjheYGLLDDi4g4YP96Lf13FKAxCwgKkNVZgz13sV1EqRtSx5",
  "key18": "2k9mK82qRRGK6tJg8jov77pP8h6NZtEhiRXFAGBkWNq9KRsyiJL5qBnURKJaZjh4crPQXXoCAnMcgy1Xk1tjn1iC",
  "key19": "2GxyGTN7rd3WopZCwW28RyTUydLknSUUohD1odnRCoue1TxiVRZ7qB94oLCcVm2s17Ya1UN26Cbvup4YpxDxddJ7",
  "key20": "4rmJYHjG3x8wHLhhGwWNFwGBYCjVMUKQ2kmMhfgPM4Hg2McqEN3CrykDB8QEziS5e3wGUzSP8qNUA25YTtih1XUW",
  "key21": "4MsQj4fQ5p9Wbge61td8jXN592PvVaqAaxsX9fTKbwSCer5ZQVThBx4LQCju3csPZMbRqRfLDoWn23i1uPQgVmuw",
  "key22": "25Csd3aVmj2Gv5YDZmgN3aTuh7SUMGT89tP8qJuy6VR4uTSWJ4PQDEBoPRk8M4zk1haQBxca2SXB6zk2RHHnTbHh",
  "key23": "34xhEZ16PTFuwNotw4oADL9XEZz4qLJsG2cWaoSiqZsCPriJW9PtMr6q4GaWRk5XoBS8aXbCmQWMdRsJpDqMCzBj",
  "key24": "3C7a9jkAwh5SXsTWnpzQ7QUpjpa8VSS73SeTFmBJoBQfxc5kKfM7MF4ygCvR1B2rXH5wJ678yvhKYMkDAhs8JEJj",
  "key25": "4Ew6JVxCdyZU6u3ET4TttFDG29aAoyDJRE78PrRXomWgyhHPEcRKW6C96NwE8JJAcRjAEX9gaKSxczCPAXogiZvf",
  "key26": "63NYUFgiNV3AatWdFYP5iLvcUy35EFSSPBiC6FFpdcy9uz1YP6Y5ZKagfSmdbrjZkYTrn4HqbLAdmBGft3uemiNb",
  "key27": "3A14Sckzqbg1wLuGDx8cYBrCMzHQQwHgkQ99yBe9McFM3cApMf6SMDz19tTMYiwhgxM5oVBVKm6zpVNEaHvaSdeC",
  "key28": "4cS19n4V4YhTAVX43mFpwtEy394ZFfRmGbLpUCTZjS32H31yChzgiHQJiy8MTYdhvmnDaYYP2MBHwHUwdmwUMmWv",
  "key29": "5z3UBLLKCfDe48aiWsS8iW98dSwY7eEPRFPo7A6SE8VdosZ7DayuSykiaLMTa3pqm7Ec7NJe5JJZfR4KnX9ajLV4",
  "key30": "oUW3EssV6xf3GUhqMxZv8xq2kUGBGaKQxfXsvEU6WUajuSt4LjoJrupmFt3vovchxKcN23qSPfx96MkXUVAL2dL",
  "key31": "4FnTWQH8fdQau8x8y4LpjpKa4XUaDEAKWYLmnTvj7AmneszCYi6LMkEtKvXNc9a8dmX7mKq39zN37f22UbKCroKo",
  "key32": "3sfR73QD836ywdKxJSv1dBTqm9kHKYqXBQeY9eD9iuaviE17MmeNz6r5XokZ5qVgAxZMzk1GzJNPsxqqa4PLoE6j",
  "key33": "3sMB6fgdAD2tm6pVko7o34yLq55jM917ybzXX65MykKmMZRyqZuMZoUrMyozTgjqA6mp84h1L6YuyBapeG42fEr5",
  "key34": "3BzVMCU9sUAXT9BwQghULnmVbjcNcQm7KeYiASkmqMggqexg8NpMeWcrBa28QkPUixeyq596mKXFhpRNnPiWb78M",
  "key35": "37DbspCo1NBiK16mJXsmJNvLBY5uwfxREXd59PSgiabxbyNZHrfQpLHCZNC8qWQo8gbwtbnbZiavuHLufVkoLa4N",
  "key36": "42sMAB2JHjfAwWmefpKXEpyx7DaAkv5osx4FfqY9Znq2Fs1Ky4vYsLJs6cf5TZQ7nXYzvDPSPAst6GfaAt9qxJsD",
  "key37": "59K37Z5wBcV1MceYQu9YVeJRze9waX14P8Re7ZYtzefZDXqRZuWyxE4fCRXU813QVByWMy2KKbgvSLP43RJAMaX7",
  "key38": "cdu2Aa3GryrFHQ7sFKPYTMfuCVt5S6D12PQFWiVbgFQ17q9sUMMSxHAHbApePB1f7z66rTMiYtZKvap1QF5WEHJ",
  "key39": "3ap8c2ts1KSJtcSfR1SZSP49o86txzF2Caid8YeqFiME2ktMR48tfN4j2qmr9S7qPNks8bmh7pK8m7zeeLBoJwYN",
  "key40": "5aCKTcsZ5RnBea3fKD2St1hkLjq6RDRhoCPPcTR6ut7iVLuTt5ZpLWuCrH2BRbgbmXvWgUFywEcxNEehum6hqJ4v",
  "key41": "5BcEqqH3H5udxJ7Y9mr4yXmqr6DKE2FLoGzzfP3HmWGtgb5mVUusHBsPoXJsJXRRLSuTHyL2emgcWFUoGTCk3Q3A",
  "key42": "VaFrNdoaF2mKUAcu66k8EieqyMyKBicom6WgMu55vSJ6m1JgzuwTtQp5fGhWy4ddqDsCWjqU2iVDYFezXPndtHG"
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
