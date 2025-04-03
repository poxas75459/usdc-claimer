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
    "PbK6QWUNUyMGuozP8paghU6U9JcmiXT8Rym6P1DYbZ8nmFQGfjSCRGuaBGLvyijtJrL4FzLnKPoqMnVWBS4RAes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EgMDLaWnQYFmpqH1rMjKjAbPbMqcTTrgXN884mTu2mpuAzTLnaAzoP6FrrCsreHbjaZZWdD5989AoiuqXB1r91U",
  "key1": "5GBtDfMSKZVbdKQmMn4c9GJJbxohHV7L6dq7SjrWpEafnZYAGq4LXiM6w67ytJ4Z7KdHn8anau8WzC41yt8A1N6p",
  "key2": "3CbbYBrC3tBSryshbP37PvM5xzyd4ru5Ge8ruS1VYDWnZbcm1RQq2EvsRTzB61vUtsHqzsT8LnXYr3PGjk1uy8d9",
  "key3": "2EH3jphrzzjMuv1KCbY49PZjf3AEJ5YY96624E8kmLvNFyVhVF14iFPPdSFZv6HSUHdn9KX5ryaFJrppGuzfjPLs",
  "key4": "5eHiWLfaz3X1Xg79NJuK31LehDFkcEqTvT28gXQVYZiQbxKuAdLXo9izpGR7v84vvNQTWCv37PJX1k2r8u7TMHwA",
  "key5": "49cqsF6Sfvq5vYiSQQcDNQVqg3djik1gYSwH9eufgJUt41t1SWaczmbNoApKSkYwDLC4h5Nw51SGULacgrFYrF7q",
  "key6": "5ihaWrGdsD9QBxjNfzL3ezpbHj4XPWGLtaxWNLx8AjzrLnS1kEj4wAs3K284zTi93KMkC7VFnAZTeJUsJTkvWjyo",
  "key7": "2jem8fw6RfGASNzjkmHqxvWt1zhdPTwjJFKPL9yY3Rb3zdXF4PLA9kf2wtubtSE3RPDkVGiR8UEskcoTCHQrpyDP",
  "key8": "4bo3zMtwN4NVXq2z12PxNiMDWkgvDuJfq6LuTiZgkGH2Zv5PQhxooi3JhJGXPLEBT8Lg8cqdH8Vu99byX8Qv3gJz",
  "key9": "xcsBCMAKv2zLfRQEarziaTGLpp3jw7EcVJrbEmzVTpDJBLdynMY4oSaue1XRbjMVFUibUKrKiAGjjMuSeZf6nW5",
  "key10": "3YfZrmnLvTujcbQKuRWjupRS8qM8XwizKDeG4HopgZjjSyCJUjcbdYmrHDjQQ4bdnyrLqUqJGff1y5Nd8V3ZJWcJ",
  "key11": "62C1cHG4ZNHwoFyfURhGSLzJduxDbsB7bqqy8fzhckz65NN7RZv1jy9qgSFd3MgN4BwFaVYB7kFtKPrxUQuyiDxJ",
  "key12": "9SNmdxDgnmNKiaMek66yduWijKVcQEjYBdiCP14htPbQmL9rrtr5HgVC2fZRnLnqqBELcjHTQXiWtKAtM7VicQE",
  "key13": "2HuAyogpoUjUubdLTXTZcEQ57Nkz5Q7E1f2t83KnwZ6KRJRDpNVxARQWxrUNLYCK2vNnW5BbnBy2A84gct4dfSCJ",
  "key14": "5iL7K8uGZMBzx3tk1Vh9EywJe12kXQekeAq7MPHKtwQkJDMnPTHUwPyhnnbm4FD4ypjWn4nyBLKsRTiaEk5MPBYw",
  "key15": "22XNaWyHZh7iEjsaX2bcZh6kRNHNMN1iuprRxfJLiGQ1XHtejVKBW6QmC73N4owtDXjwjTv5f4nkzravN9cRXFHP",
  "key16": "LBhJ99aiW28hciQdsYgLiT8wBojJ93HxDtJDoG18cKMEQBECrHAvvqtGAULBajbhkNegRyRk65sHZS4W9UNLKcB",
  "key17": "hbDXXMPVQvi5aNDvSvn52m96ip8PvGjfxZPe6BtSuxe61RR6oic2PTqemGdNrtGU8JeiBQYvT47UP1i9bM7aDob",
  "key18": "4uidrXHKmzfGXc3RJsUx2YC7WUL8yrWosc91sthsQLZKLae1iZ91zSH4gE3PQMdbjnQxuGBa1uEuikMoAGJXWMmX",
  "key19": "5UmFC73BdGZdFR63GxbGtrm9z6GLWXbgWkAWaccNRgxPED72Lc9pEghVwaoCvHQZ1cJXUiKVVfzBhpqxT7pdDA3J",
  "key20": "5aBVD8CzBDo6RWg4LqqbXMn1yq9f1XwBMSfZEtoWupVK5cNfNBLH7hK4mHnLpgsMqbAy4LXvEsUHvXSjFcKyeVWR",
  "key21": "5pDJNmFkMijHrdd327qr1YfF726a24tiNkGdKnmEC4nkuESuQBF4SBWaeGTSpWuwx56gA2it5zDQqbc6TdUfaank",
  "key22": "TCU87djnbsD6oBrw8CkVVyFXVXYeGcB7NdqZghwcLkUVbeReAN2tw4xJ2i7qrfmZLwuBKp9Tga7LEbsjJExs7Zd",
  "key23": "4xAskH9KSeUGgzMdq3T3yNP1LZ3CFWGnGKodcKm1eoaT4yrLGnrPErhbT7pVTWR2fmJ3tWG1sdszaKd1eadKjwgV",
  "key24": "BaiXpQh7838Lv6KsyHUN6URC6gqBrV3XKwMir3T8jvnLko6i3m1s46mrcyXxuT5mvzNyJwntZKjKS2sUfy172Vp",
  "key25": "5AVuVHai4wAyUCeew8GZcAqDJxCekMNqfBBnvxxs8983bMAJEWT4ffrYruYR2Edo6khUn1ZBTbWga4jwRRtYfvCz",
  "key26": "2iMfmhRg9SBPTVac3XV94rFfBNAQwYc25XMZPFMkwzPrJ75rATCawnmh92PwWx77jFa5BtdL7cpCDFEAbb168wRf",
  "key27": "3GqArcWnno5DZuanq13n6jEv5VHQdJRWjxwDu12w244JiErwz8cd6Se9q9dgTfKZrN4rwprPrXQRFGctnQHPm6vG",
  "key28": "sxT45mbzkknuBkgX7JpHeoQMKdWHkDnB4ffWajX7mEBXCjb2FHBFgoxKEbFVqHDT6Si1eSfH8XeyFGYcdcrSKPj",
  "key29": "NQ33hmpVGjomgvdXyaWtY8qskmpH877DF2h4qbJAx41mvyAQSkcUEWoCRHPCn53P2WXVJuisGpmbH9FVkn9joNW",
  "key30": "kY34Si6GNY5XkF39Sy2Tyz3vXGGFttjwoZkWhJoJXUgD3cnG91aK2tCwpdzBWm48vQwNVVU9wfcrMAoLNjG5F7L",
  "key31": "3SS6ze7DZR7h1HtLViNypgJypwiYZ5B1cogxzQrp37BK2LXQ6JtnifJhTXiZ9EHnFmbsMHhZcieXKS4XrAjH1dKZ",
  "key32": "4iZMSvbG8XbE8uBepikprrw58D4yi6kBphY1DCHugxRddoFKqZYj8QGqErx8fBx7YfJjaP6vDcBkBnQ11FS6Gh9o",
  "key33": "MHSoEFmZnxvwPWXAYSX9oQLs1cZsZbfgDGBhUctQjYUNrB91AFiVo15aJBVF9mtCMRfFvAWJdDDm1CdnLAscUpJ",
  "key34": "2hWEioxnC5ZWav7tCBHXujKD6vR59ZiQHgnTFi7BhX8koU3vhxKWScEhCU14YW7SzYefa4JaTu2Nkx9pkdBKQFNX"
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
