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
    "4QFHvRJqPWmYaT842GxyNk46mjrfosV9Dv35nFvBSJLu4CCxCfb3PWzQzspKebaf4TdS9ybQs9ZWhP1qgKTfeZLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGNeht4rEzsH5obuFZkYzPpv9sTNhwEPaQcxSbV4TKhd3dmhbYxiPfsNTAGJ2JQEmAuYUtAJBJsS4BYAjfN8UWy",
  "key1": "5cGRp79oZGFshthdCAK1G8DfTQm2NmAfLE7dQskrWpXGYQSvdLVs4Sm1skhSAu33RQoUR5kG1qxXrZDecDH5gvPa",
  "key2": "3Bp2XhgiKRHsd1QMxxUAYfKATKhAn4JmmwdBc5WqyCnUqDS155SVmXjqis6soDPMjExLbbGxTNVa146XXaaazjUe",
  "key3": "5bkpnT8oKAkJVTbUACf9Yf9NciHeYamXrjuMDBPQd3WPY3hB2B3AusQt1uGBaiNBxmvJ7bSHHMCf6DRNZqZmeeWD",
  "key4": "3mnwFo5L9ZFQKTBSeukcFZ3vjxGusCAZCsq5BC8Ct8gZDXX4v2FkWJR8Nk7tJuEWokwT78SF3BTzLSoTeYJZpRPV",
  "key5": "2ZAEmBuHKwaQWWUz1bKc8MXEPqNCTGhmYJuHNgjs69Q6iAEn7peiEmiE8gckcy7HsjkLiF6W6YNqjkcpdZ63Z1nU",
  "key6": "5knsEPWrKyepRxPxBkKZk9TctPbnBmJVbu6cniZtFrqnnkWaZqRAQQQfVxiukFhTsqsRQF84STb4xcohc6mwYa1t",
  "key7": "3SYnpQczcy6aCMp2JtC2LFnLgf5oimaagD1yxWkGuJDEqDFvdfd8TTCZ9e6a1R1JR5W9CkJKJX2cPY4aNWo3Y7Ld",
  "key8": "3FeQGsSL4RvxfD9QrHWvay7zvffHPtSdVAjts3c93rDt4tcXVikKavAFGtJbttaBZU28MjKkm4oQr2taBZ6fGMEw",
  "key9": "4rszb983tzLSNHCTR8wy6atfEYiX2MkVcmJu9cQwBBTkBa4Qz6gAzFs2pcKteFkRHT4n5vjQZx15N8nYJ7Byess9",
  "key10": "3BiQVgpU8RrSZdUzRVKwE7Vwkamt6tcz83dGrFtk4ugoTLC7G3z3rGTaU6PUoToMfAJjmBPZNQnEhKJ1nadDBVne",
  "key11": "386bvWafrHUNEj4a3Y5uxMd7djFYRdhxGr9tcy4jqhYTRXQGrdLgcZg2K5aL4U2N4ne8oDmUFQck3878dupwj9sX",
  "key12": "3QsiWgcrbnBfgJKtjs65kwsSUxFUboyVtH1GkDDxkTcDJZKEooUfqL7tiYUY5fGWKMKhswNtfMPYGz8qFwQKpCS1",
  "key13": "5YxNu4EaQyam415ZUHCDci49WaDNUE3v6hyyVJvCZ9MMq7yarMt7cSFXqxfbKWsH7niBWr5JdxZay1A1NGD5DYiS",
  "key14": "2DwyKgkptEDWHP5kegjkef2Cjp7R8uakCH2fjuZN5dZvBHX5JAENbmFKN1oigc7EDaVe9rDQEcTR3QJWg3q4kPjm",
  "key15": "RBZH9hcbRvLEy5z8MEpNHmaTmP5daxwcsZpAKGHEhQnLdsu6uzLa44ZdZcyTSnbD6NNGjMu131HJH8A7knYrEJs",
  "key16": "3fdvhThgWcoQUZ2wvg1kQPXni5pHq9tjjMnGd6gyYkGQQDhgGohpnGiUuN2HCt1N64cAA47aWdXGiW7fA2Pas6gG",
  "key17": "2o5Jx4gxdDShWRgDQC4KuwQUfvP4sTz8mQzP12Wb6Xg35Uxibrc5gyTmKAH4kqxTzUmU722D9YbQ6KU5q2SmtTTL",
  "key18": "yDnR5Ecpc2iRo8Tg1QsoNcPSr2E6tJFqrBCHFYsLZNr5KPCMybGq5GQzJCaqamLFFpGabrSnmZNtYjE7JDaypPU",
  "key19": "YaMZbyY88KUzQkwxNGEH9GJDSgYPGZvgrxUoXCWfE9bCTuXxV75vGqEzPappAEVyECXsXwK2AMZcyuHrGDyzdLP",
  "key20": "3pj8bC7jyAYCxArozjrFxqG5XfqkCFhp2jmgvUqAygR1G29MnBLpQ43UfZnQPpeS1c6SLs2umAJj1pRaQmsDhEi7",
  "key21": "3rodisgvin4fU7wpyjvwPXrqSXmZLC2kAcPDkdeJRRgKzudJthW4gvecm2XLXHuEG9CzK2c8Ernu334cFpA7mysx",
  "key22": "2LUmwpQyjX1phVoT3SYLtgbqp2Hbf3UD6dJnGQ537uB7iYUuahFpBMS1ZHjfn4D32BVqij7zD23CmR28ei422SLP",
  "key23": "5imod8w7XD2PuSSrFuVLEbZ7zHVpg2WdYvhEp4tTafxP9t8gVAaiWtDZ5ajSWtmk2wDC5bu11YMYxdrdpz3P3YQU",
  "key24": "3Db1nXGrpWR72jogkZCThb2ikW48HXFvTJz1p6F9pTiekqYR8J9NfDmwo873KoTqPgAEpvKLCLLpxAChQVb19H5L",
  "key25": "b4jSsVVNCak44TWhWLTvoK7BmJR7yVDm6GYece7V9b62TLC13Uw5q1TwCDAjAL4PHK7HCFqGFrvp4sSWSa5F2ew",
  "key26": "2uSopKEEwiwNtxvYMWiPzM2ZA6CbEjTDyd4dQQxY9jmEbeNVLJZZJgnRV8evbKjaze6L9eVzpAzTcdjhRFP6LQnX",
  "key27": "5V6nCTn7hkERiefDtMasAbPji3hgYRytQ6xdfXZ5A23CTmWSgaPccUe2hUrCRYFvQE4M95F4UX1y6skWPnvDK5y",
  "key28": "CipzwkU5ccTHStJtH4HJVim15WjZKm9bH2WBKgpNbfCo9PBrEEepLCWoQm4jj9fck9gfnxRyX7ZsAJVgf5CP252",
  "key29": "5LEk58epS9nWtXPZGwzx2Ww5kdfgjH7XbLTiSQZtiuPfme4qyCFgm4GocCYDBMJF6E3yX6Jevqg3EheeyszR2E6C",
  "key30": "25NSXXfm4kb7ZsT5NcAeHBoVdbnadHyRZFWiEunJnpCS1YaQdmU59st828L6p8nmGhopSNrZuHRuQSqeMyDkQyPe",
  "key31": "3WppYJ5AxNSeM8FHhjh4DhVAEZBoEofwctEXoETDy777KCdoBiNvCLuErA5zF7EhFKkoPw2WNuZCWcLpia4uEiVK",
  "key32": "3zpnH7nc2Tcw77EDmkAQUrqo6sMN8z7CvHCFC1eQzyBWidpZWxGq9m6fVYh2hKAWwwGj8ezV92G5sdcxDdBne7cY",
  "key33": "59M451dqBRhfbeTJP2XSKyTS7xTCGBGq4bQiBkzyquKiedJCkjV9P3NvoEb6esQHxit2aERMRdfVbwz8YRWsEkhJ",
  "key34": "k4jYPM4TohLkoK3sA3WtMSy1PAohWe1dRmHopL7yaGsNfvHc9bTKcGN5kPY3bJkzh43cYnX7LykfKhoHeEbeo7g",
  "key35": "4RmoAZ7YNHkpDWiyWbY1fiLgDqd3sgRahiqPxxyJVUxLMZQpY3h9EbV5bq1f3Dd8FQVuDP3iSBPmRgVwMt72LSTN",
  "key36": "36WUsYj8u5XpVrddJZJRynEEbwnWPPytitrprQv4ESkoT7VvoEc4S6GQxCqzpz5K89rMrF44Mo9J7dmj9y7GYNXy",
  "key37": "bxf2KyjfiMRTf11gFzCUmwH8YbLM7JtyBE4sbYmD8qEBYGhoKkrx5A9BQB6rR7ksWV1csJP54TbA2F8Hx59JGAN",
  "key38": "e9xVLPLEiNFY4cRYEhijPyBMX34y9Dn3a1knqizHVcywAqA2YKcbCy6Jzrz4tCjv8LtWJDB3fFsxYcPcn86bXxU"
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
