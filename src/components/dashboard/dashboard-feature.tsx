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
    "2WuooHtJxA6Gr2JhjeAZcrxz9NdsLYLbXF4f1J68mhe6Ehrn625mGEnT6UgHYvhySBtT3MykMtX1EDkRA3dQRUQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egY6qqcFyy1g5g6n3eWWnQ9tQyco6JjsHPg4eagaZhUnpXumZXMDBjY8JJb9QD2ZVDJ22BNkmqEkarLCNNVnpZH",
  "key1": "3wDbc4MZtUBm4oPavPVQRjpf4DBSkePhz5WnYwLccSd5CmJ7NWqmkFFJELDXxmaboAB1SC2RJoNgU6f55ac1WDgf",
  "key2": "33sRWD2XVw2i29ShPsyiznRc1CTGWFooxvL7x7UwJs57hWNhyRxa8EdLzZ9d1wHVDcx2gZR8Aoy7S4DoN5F2FVfS",
  "key3": "48cWZ8Q5TpFmRQWuNe7Xuiz4PPoWgCSXxBezf7zNJcoHBi6vJkWGhqCB7tE37ZCfobM49GHiXPRY1yL5TvG3kXUb",
  "key4": "2gE3KEj2DL1i6uxHwubeuXUzGp9cZtz6qoPBT6SdtXAGBE8ww2nKwXgV62SsdP5bTRRf3pmb11kfVhDgsPBs3WvM",
  "key5": "41wxKfVxcQ67pi14Xz3SFStjP7WVvtuCYNzoqPwSc5HvCK5LRnSjitf9k7MPmyWAAUW8X7JvdPNzeLbJeujZLE4u",
  "key6": "4vbhFW9ntW2os8iYfzcvcgexHSTJgbvfWdWMimBMRBnMsYe3zHWt5e9rnqRrf96i4diHbgzJxyWq4iXgE9DF4QS2",
  "key7": "4tHndvyCX4qC8QiXwv9FpzhLGQjbwnatKjMy9iwEELVNsxSN2t4JCXheL5h4s5QC7kscuCmaSEig7EUy7BWvWBLb",
  "key8": "4QrwZzHHu5YwMgnPddHChF59aMH2hsnKzR78ChrWvTKvgf6Vb1qit3FJLDvuyMy4y2b3excoQ7GaTHhSw8LYaLRX",
  "key9": "25KYWRibpLLHjsEmFSsojRLiLHf2XQ2PvoLcmbA9PpR7DrZuVP8iQ4rLpgHwPzyxrhTLCJFmSF1PGZ9CNvQAEkkY",
  "key10": "2mviRoyudY193MWZEosDDTw7GXZZUCF75y23zo3qxL9q34iNBfy4M5FpSE7yv4KkMtHzBwtrnv5AMawW2YBhpZXu",
  "key11": "4mr3fEJxqjPy3wakNkwmXbXEEHi4fGW4edDqEANRcHRCw4kZtW6o3tkHPagM9MwhS6bkc8dPjxdiyMGLzQQ1CQwV",
  "key12": "57REGmhADnajwsLoSe65EfCVz36upzfYLyU4fW5RX4SG7d35fbHQft4EvAmMDTnXMVmGnGpVk5xfpUPeuDCwjP1r",
  "key13": "R6Txi81rA4WrTvCMD8PNArARrnUQ85RVNUUkgLMUU3KFrdBDbfVFS1YyQgCLnMvM84GfcPmqvFAHk8VqbYDyQZd",
  "key14": "FM2Zma4Qs1PnmfWfSokyNgxKqwmZkWgx2Qb1fskGD2NvkUanrKC78wutPXY8QcrwhmP8WtnK3gmmXiYZzmgWr99",
  "key15": "54yqXJaxdJ7UfeKdjt15YZ3zcjEx7YTtpJaHgiv9cqBJhevit8uJvyDjhQFa3zKNinFjD8ziCnsrebm7HuKGACoz",
  "key16": "Ek2aXb5PXJvW98HGxLF46xY3pZbNndrr8PGmaLi3U4Jerhg4ZhQUWjGrdTKQrtRPfzpvatCcixPvegQjrQy4mH4",
  "key17": "5MHDdLZfyQabfCr79SncHBER45fsLQpkQ4oCUTyNeiNpEcMN6PtUx2uuPpU28vajwG4RhFBr6nkSS9S7aJmzkZ6n",
  "key18": "LZb5wMLVDt13xkkF7Xnwg99bdTsVULvZ6DuiSJuATAAfp1E6UyLHj33zjNH7GbT93P91irpDu5nkyYzn261w9bQ",
  "key19": "4UX8ycf2BPRmDp7S3T1HmTPPRx3YKWkMuqpRxd2zoscPtiNxKwfEWt2zcppJLBkm3VWZBkNrnHA3fDJb9hLYuY7q",
  "key20": "5Mt3PwHKqSTUyUdD994nwgMaN8SZkVMQ8nmCao1d7UvyZ56yGrk5Pibw99cSjo9yLGzrrN6zFonvSaSxfVWpRw4G",
  "key21": "2BTdVvMqY4J6z2MP3ssMoFxBRJxEwKMAY3m7VwHNhFX8Ek7ZwmaLbrJGByAYED3S4qN4Lzoz4aChQytobpKztobG",
  "key22": "AdLfpVDfzhTuvyJUEjkRQwZ9DsXuyUUHo6zUk2vNktXwbHHLYhAHcjBRH2zSE5Gc85ycoHiM1PAxCurdfxfpXcq",
  "key23": "4hk8UqwSG2ZxVfKHdW6ytjMjsyLVNxVLcNkL9JBxXTRe9FrM4NfCqFARovNH4tnpx6BVs6LraxaDVt1VvDHchbCb",
  "key24": "2kKZYY7NLHVPNWuUHqomCV6vDR1Eqy6H1aDoxpNaq9NNQpiruCYax8screLmoKbhzmCNSG4SXk5JLjdobrXFBLdJ",
  "key25": "3VwTKJpeLQDRp8rMsjL1NYLsS77uXB1c6iWQsPykfc2M9oeg7VzDogN845ESAXwfwSvkcHqMTqJUvtdmYiitppHb",
  "key26": "5K1WxzAkLg6dZvuLjqYcmLjwtXyVTvzY9tN1s6fbZXwrPRN6TMcLLWrWQhfjcLNLkTuW1rzUrTyrf55bUDixxQwR",
  "key27": "u6uZkz161BzgSLKNTGPM9budL1kjX56aiwb2gzMWLVczeqe99B7zjyW4pQgnroKwCTnLQ1nWkFQLmWmi4stqwjM",
  "key28": "BtrgvRWT4uT1mMzvaJisstYqDGMRbq38xduE6BX2oNs1JqvQGDGGrLPWW1aiqfY3GhnPxm95VW9inGz2TrsCrjM",
  "key29": "48mBaLeQ2zyQA3SYLkc981yHiiV5zEAPQCraM4EGeeZR2epH3HzS9gk3qk8qW5NxHS4i3mVHYsg1swFMJQ3qPni",
  "key30": "A8NJYddLheLXSiyHdj6hgxBwNBaCn6NMAVDPNmhNuATFGh1Es7wvvyWWomxEwNbzLg6VvACaYQT1R4DLK1ps8HM",
  "key31": "9KyD9ATsivv8653KHz7Wj5Vu6eAmZrrsC19hZF1vWC7ZEmF8b52hbe3UafEBH7aZktLGte5YyvvwqjwxvPzsgjm",
  "key32": "54hajFGipabojfcgwVNUtUy9pEkVvW6McK3kW8wtVH1ftZNyzA2UUTbKWWSTGZFtsgS96gJ5NqUzAWbHCZQ9TAhC",
  "key33": "2EScvfowCtMPJaKdckH2n9JZfFSQMNj8Qn8Vv931TdQW3Y8BVe6KQa5zUk9vy5pwbJ46mGFwUaHhyBK64uaEdvbG",
  "key34": "5ahLChucJzE3izadRQZUuzmXRAcH7meqmtCqLMwJNTnypgpxCbo5JtH9zvVuP4ZvYnLasWs47uk2nJJTMpJNsp3S",
  "key35": "3PP39vSSdwFpTBxSEwJ3jHNxZXQo8uUcFnY4NwYyPbJZ7ECeKQuWYHyFibauaixGscxUTSBJNHpyqHEDouBcdjPk",
  "key36": "511CqZ3dQVNPjL4ug8eg3BZsYBzP5kdD7nvCLS3iYMjUZicMCD2Hw3iCpCLc1pHiyShrdKmVvvA2faEnSgFDzBe6",
  "key37": "2ZaAfZP9uoQEe4mhptnqWfK5j9pFyNkC4tEgk3EWqvBs2RukQtQBHrcJ25Q7pB9nh5r8uun1iQktpc5PQVVSeUDW",
  "key38": "3ERDnNfUxE7DcQa9GhMVKABKCSa7HWUk8zDrs5WMns4RvaVUvsrTVvbYYPvfESQppfjhTHXK7Ej9Zf9wxi3aE4jJ"
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
