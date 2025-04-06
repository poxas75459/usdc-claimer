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
    "Jg84VSUtY6n17X2oa9CZaNJCGwXBXQFfoB9iANAZozessvuRt6oG7i4ZDYAFY1XiULVqVvGeFsEhacaQqMSeED7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bxpe2hh12AyPwa8Cbs3gapxEA7FcMjGmVJuP2xtbyg7WR84z6uJjJca5BV8yGyS2ir9ZeDLujsJQyF6W2UXGwxF",
  "key1": "3hF3TMXBxwxW5EDqErR4LaikSofkSS3YmbVej7g49a5LVfE3sPQrXpNfn8ZpEVLK2JgFbUBdEHJZNAxMyZEnWyAx",
  "key2": "26wnKshZk3yxJ6f4TPg6MBeoS5WFP9kFjXZRz1p6NoWjj6FWqpKcyJouZ83ucqPmu1SnpXuPcxr8DfU8XegyA7nK",
  "key3": "2m1joHwfEXzEdqrVaBAfU2GueCacQonqopAcY6jSzYSovzLa49vHH69PKGjpsDDBccn3gPh4rxrMU1gda2SQJHSi",
  "key4": "3pS3VEQKEoaV9MmrMjdXURrakYbKDhFmhCdfKTKwY5RsVNw6gNBUWzuABrkQbwwjGZi5PdHWBgAkNVAXNY1QTZYV",
  "key5": "4vNswJMhQqGUjdSd6m5GapAhVFGi6s95fGnLwsku76YzFF1pZkFReyrCKeKraQrKyshexRW11ABCib6Y5sbtL1er",
  "key6": "2NyynPfcxam6392Gm7pFfohMCfDnZbkvGkQCm4ZH4SghB28Q3xCSyYNXABHkQFG5Hkvci9hmb8wEwo4CeWWKq4BZ",
  "key7": "G4cEradxN9foWyPpT7397GTvU12BEFhMZvwm4zesSiGyfd9cjNu9E3o6iY2WQyEn5yEAMTmUWfcoM5CpfFoTpi2",
  "key8": "5LfHZ4Zad6NGGpbXX62v3nJ6K8T4HyYwDq7Ujz8QfjxduXaAC3orpVGcZGbuZWmuvo4mqvsdHWygFMR4jgkoydqi",
  "key9": "3MAphjiNySNTta25EhVNGC5DEyHhRHL4xpFafzNjeJaF9ahbn1gaaLPAgC9VtJRY7T7CyiQXsrWBDZz3Sv2qkuTx",
  "key10": "5Bd3CcSadk6aw3GMPgSzSMUv9ujKLYzsBPAURi9qshYRPqFfB7Qxax3QtPYtanQPChcHSJ92jSjN4v52BS5jsMKJ",
  "key11": "2ghNgxoXuPSTb82e1HsqQcigkazWPpFSPurGnzt1fhNL3Su9RAVas6uu41TUtRYRf5kqbcodXnnFvvXCo9kXDKx9",
  "key12": "5NyLnNMA7ekYqV2GVwUAN4wbRTYh8o4RRvFoJuYGPd1RQpn7xeBpP8NhkSBTEyB81ZqT5SXRa96d1EagnJH735vW",
  "key13": "3ZFbKkitL8FfxDdZykcMsBK7mQFNL3Pn6GS9oPjvYXN5DxUNQ3jzaEmnHn37e5udYsANBmz8ZhT2r826ejBePRQQ",
  "key14": "5ga7ZvTUE1pt5LmugciZk8UaqTnuefqgtX3JtogkL817AsgVjjQjcjvDddwQTDPjk12r9T5iqipKooa8UJ5nyAsE",
  "key15": "2BuGtDPDJCp1W3sPcG1Sm4MoPzyBa3fruts6oZdm4RGo7caPEfT9vEvzVxA5a3JyTMCTYwQd4UmawN2PFcJo71x5",
  "key16": "3aVrPnRN4NTeiGLwVnDymrMEd1vTVbr2eAk5cYECSRoCcHxs8jqaTcppfYPy2aJYwgChyHu8Mb69QX8CkcK7foL2",
  "key17": "4NmuciL3tQgii4u5pkd1uXdfpafpawLyKQXJ8f2gD6zpPmzACdUvHMeUpFSxZkkVx4y9sSWnCpr3zJ7BAQmzXE1j",
  "key18": "2wDhV8asdkjvHa7Bexk31rjA52nuQgzfNUYrRdonU9yiRwrRqmXQoCpyyC4BdzNdHK1JtvyNfiXzJkqmUaGsMcdC",
  "key19": "3mR97MpxJKYFhMVmrjnEjd2LSNLRiCpL1g9wNzPHCuDrvkrr91Uta4Dj8pyUQHfjta3dJvQQ49FT9y5X6icL8Q34",
  "key20": "5jbWVt887PwZpXPkpsvo7bd9yxMbyE8rg1uEC2acMfSBrRbyRLHhxVgnoYz5hrxTiUCGNBSj9364YULk5TkYsFjt",
  "key21": "ZCvGSFu3ii9X8XA8k7EZwSZcB7mzvSHidxzDqt9n5Pt6Zs1ytdRyzbv7bqfPLWnhqV6Ppm5iqe3KcZWnuoREads",
  "key22": "3RGUjWFfwQoyzsxvYJ45hwnpkSvv4FJTMu955se2X1bT4FVvZ8snJteepAXUwo7KiLWQR15ZiesqhCdti2JBYFvn",
  "key23": "2Kcdgjb1PmZBJ1uXCSNZocusWsXppExYmnm8q7xWiRXT4UWyEymT6SQCUbbxmDwcfbNrU98yHrvAzKsSJQzURXDQ",
  "key24": "5dBTDg86pNcu1S1jK8EECCuYcotcoMWTgXBCyKiuo4QG3Q9NcdmindWchVParcxEDF1QnfYUfYEwn6jLZHFsCmRt",
  "key25": "3w6yQfBBWVZCxurzU89yN9aT5C24AVBeFKdJRTGovNPSffUrDnmA2zVJaS9a573yXJLGcyvHH4WBsQZUKgzBXZmy",
  "key26": "kiDSCaepjFDgwEGQHn73fEoLBqGmWrrbkTgTwS3VeRrnhsKVkvDRRb7DXpCw1LL2Y1HW6rZE26wQwNP38CQ8Y7o",
  "key27": "5TdRFKsCSirqq8FamarYVRjUP37jfLh8Nni7eBG9g265o9jb9HKjtAyo23wzx5Ln246WxL7ig5iS64y1s1nfpG74",
  "key28": "56GM3Ycdyn4iyJiQnwCjZchA7vtBafxL3FR9eGSTnr3gwvjEKJtvkSjyJhdhbY3uBKz5QW1E7nZygPCvHEcx1jA3",
  "key29": "4aUiLvycCujpJLXM6sXPDpmLAVg9hqEL5DZBMaejJiX8YQuayD2L14SqLgVQY9d46D16jtzj8dRyJnp6K9mEndb4",
  "key30": "2MUf6Wm7o9PnFKoVgDm7CHHxFZTnVGi8XXvN1fa3hQi4CZ2H3PuorH1zUCDG84JXLcfuPUYspTKcHa4LjzgR8qPa",
  "key31": "5ku5W6FxwuYk4NaAroDhonyS3h3DbBRspdmP4EEXBNDMFqBwzYqn9bdhDDZvwvDnsRY2rbHjc2jiMksWuZmyvHue",
  "key32": "2Na2DKmeZ2bjR1UiMaGFu8NxKctmxcKrN3jeMu85g8sSjEf8kzVkctmKuRFRMNcbZT3YNV5q7rDbZNt4eChQaqtp",
  "key33": "ukEMAFNrxYxW9JPA3U5vUpbCiPMBXFj8ReZhNvH2yYgzN7byX7NRBuqkacTKTceKxKLemwMF3u2UGktmU2sNC6h",
  "key34": "2DaZ5jVn9ERPSCX4C1wrctBAuq33zoGFdo8Ledaf78ohFVgbUrGjLmPr37tqituG1fu7iVgBrQKjrgcv3t5dco5X",
  "key35": "2sU2iUCHaEwopgtY2TBoyHKZESt5bBtUDfUdKjsmUjY97ezf458rrV8viwhsPjGkzM4d9gQJN1G2YgiPnvHKHWg2",
  "key36": "37tNR5aJZyYNHerk6DAhbaQmhV69d3EmA9FERAYBX8HvVqvCLjduKNheYMiQvhqKr26D7Zq1nrhuJfZhzXDFksY9",
  "key37": "3NnUYPKhRurfYkj79i53sHhistzz1cPjyzXpULbmzxdNCLAKLdr3qU6vuxKLz8eULmLQUoN2AdMegT2fXxKNsp9m"
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
