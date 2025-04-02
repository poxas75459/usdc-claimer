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
    "4yqzLTbtZtFdpbP6EJJhaH1Zk9PZR1dW4V68Gn4aGcCAsKG9F2NjkpSwh18h1e84pciuu4LDrQfktLBJ4VoZjGyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JrCG2hE8ZdQwpf4eZFV93kxC3S5DChzLVrWr9WRQyv6pWdvLqjigdiY8Aq1CZ2gFtJpmB88Tfod9NSDt4g9Af7k",
  "key1": "8avaT9FcBEnheS23TYPix376yZyndvbNndYwTQMBNmNMFBsgQ3rGozgTDA8PMVT4kCVHmHDh8sFK8X6swuPzYhr",
  "key2": "5jiV2398LvyXPPcip4yH89MtsC1iQtffSnrHKNRdkcnbCDdwAngJQ4JhEgqDjNJNA1jAq4Rh6CpXXz3eJ6PkzTfh",
  "key3": "5DKnTSaFydH7iexf4k2TiwGQQW63DCakrP6jpvpBK8gVRSLXRep5JsC8pGNXCvndtV2WRdcoUqfypt9AND91kEif",
  "key4": "aeBgoYuvbQNeks1AVn7ZJmD5bHK9gsb8AKDJcV4Fk4Qg4PTMqazRiNy2efeewW2HM7K17TRbjeQcLVMCXKja4RT",
  "key5": "5MPZhgJqGJRydPAzAioY7TUGJS6BAxSvNRXiFS3rX7sKYNqBQdKKcssa9ZZ8CUHmaFBB9xFw7GsWdHi5yWRtvZwy",
  "key6": "4ZyPhhndYyZxNqAjj6KTaYeGwbVd5goVqY11y93MRKBDU8o7q6AxSXhE2xUMQPCUDrUM2wi49dSm3Yfj3dQ5eR4y",
  "key7": "4DyRYnbhMzre8fVfZJb1DLvPBKWHdq6ZRmroteKHcQvWQ9kVJtQcREEFJtnnnaAGLwigrmUvKihDTrki8dEkdM6T",
  "key8": "4dPHu4fZizVRmBUPeGik4Q1EE6FwRDZdzfjtEqXDjVjufrbngL8qp3LgKg8geeWsD9HmU5JXcD1p1JX8ty7rz9dG",
  "key9": "T9g1dnT6sRgTAG5d5Z4U6wa67fTgukBuytFgoh6s3AXAZauictPo9vy9fgcqZJEKrsK4JRK3WUt8QW9m6cEULE9",
  "key10": "3j3nFqWsHMMhpXMndXn7ej24itPL9V7kLjtnrZXRUxz2BCu66U7Y9UiSTiEh8b1HgioKpg1DJLsufxRWSpXavz7w",
  "key11": "S6gfbojydi6iRyg9S4R7tHQawebE5PmGKNziJQakYGq1NNut4aLvsLjGQayT7tJoWGsz51w2Cbcf9Bzosc1Hddh",
  "key12": "3Z1DC3XScVdqxmpHReMJkgBj91vKGhPrUHikhMLtPYPyfHP873BagwvTQfw3zyzw2HAigSRdvNHaiKs4F4Nz6zi7",
  "key13": "9fugRo7koyDjfVG4fZKFWqvdsEJoNWFTyMi81UnEiqYgpmPWNTs6co5oVAKm2pj3QAXtsW22mPMjcwQApcbPMNy",
  "key14": "N4iCCzGaKGPb5ckTebMiw5RYZ7EwWpfCH3vP5DA4Shw3Sh13k9NbdCPPXoAd84QJ564no3HKicwTihZSNidQohg",
  "key15": "3MeCqThYZwN6hG3mZNwmWMkFeDKxyx2GeryXnfJnLTqR6xDxQ3JS6Du3gnUzQsHQgGVSd5DNv8iE6Mx5McNiYjcA",
  "key16": "uKHd48CgWzNFdKUyhQCqfXxXvC8zHeNyEoRqohjPk17ssMxU8r8a7igFdwEJQ6kcuGuEvazE6bSDuLNqC24cQbz",
  "key17": "xaUT6cqw9dQdmPaD8UCDVtQzig5hKoMNmeGNDFPYtb9wgrAYZkNBfv7yGiBYdyLyBRXNZkgkUZhEcXbpUjqw9AS",
  "key18": "28ECJPWq6gcujNa9CvuxdUA8q9poPNGWJiWqez1CFin7mZB9Aa5idftAozjx5kiLP3ytFX1GwsiYEJYuNQ5jf241",
  "key19": "Nu3RaoNyyW696j7vFn1n5NH2n6C3VB186S74AfcTTiNVPpQa2WC6NLvL5yCuCoU3BodfqB56srWxU54DDcMQTom",
  "key20": "2wSy2N2s9M3cFWn1U7m8YTTuMWKhA4DEdhRMhpsbtueQGW3B4SeYfshthj7sZuAW9NHBHR7D6CbsjiNq9NYXicxh",
  "key21": "Zi5YVSUBoZ11nR2WkkVGX1JkB4ghksi8i9xedLMydnrgo7NmCZcQNsssU8qLRyKQXFYd4dFDTDC5m2uoeLJ8evD",
  "key22": "53Bo6Uqp7LxgV47reDdVpQnnxJMcGa5uWEaRgP5n9zqAQpufJiuoBno87RB4qtUcka1b7w9dZ6HsTxVDZGoaQuTp",
  "key23": "4gzj1uHzUAEcS16gXRSwY2yodk3eeDmZyS9KHxFtKyUfc3kULyfaDR3T6xWiWvdo5JnCH1b5TV4dGawHnq2nKS7T",
  "key24": "5C3j5zau3DLYaX7MuQcFp3ftPHiwxe3r3GE16115o8hpkabHJv231JqHLmzRmuniqQEq6fe1URigQd3rbk8fmYYw",
  "key25": "ZSnqa7Ua3RD9RpQwCWzPnQHkzWmN2zn1VZExGPKnzF7UuXpB25FEhAvVcZEVdcMurf4vK33AywzxJXCmH1PCUyi",
  "key26": "4U36MyXhonwjMXnLMHAUMWJP8KY7aa6GVTg816apPNz7U99J34GabK57rJFbnJzGbrGr5CGJh2z4Xf5VEWQpWJLP",
  "key27": "2B32GzvSTiSVG7o3k5HKjcsYpoSJXGBkYF3Uzqrd82SJt9cP4ikhwmp1sYFBv2MTrPAp2dGiCHqyESov2jYoLiTv",
  "key28": "3FfPzPXpEKivrGHBYorQukkbL9A72DmxD7nZxJvB2ZTmqgQtaEsfkAUCV8CCS2cVpmxSxakNBfp61vkH4sDHteEQ",
  "key29": "49bvikT7dRF2aJDDkDfD3foenxjXAkJnveFcaBeYA4PJDxNHopGCtpRSNN8vjsN99Fx7MxWHe2A4v6CkfPSQKVBZ",
  "key30": "7nyni56qk1nwabUyPisQt4FT4zhub93BGFKsFfkLd1iwyzAaLR8j3jWyCxRyy7C5gd513akkcYycsaGKVP2J7o9",
  "key31": "2fpTR8YryN3sUL2U5pJTQdSgpEQkPRrgN5SA1WhKWkQXoiWqfCNv5JfJuPj4eXXGYuBTD8LDUTmYFex9D7ytWBSC",
  "key32": "28vTCDPamTWnvMVXqvyKY1gPfTpr7Kx7DZmhzSZoixZYxLR9y8RMBUB2tX166JdBvoNubwiLRqBzdqdD9vXBwzkS",
  "key33": "5aVzVvTag5siQ5jRNraAzXVSAZMQnb3emHhUNAN6RBD4oxYBsXAPyJA6qsepxKNn3xZbUMACrA3HEC1VeV2xAG5y",
  "key34": "3Kf7MB9Mq1itbD8XNAjbQEA2rAy2UWwUsrvJJKffJMj3MVPRCA2t5dRD8CKF3Gofz2JE2wkWm7x53Nhz9wYX8V67",
  "key35": "2EzTjGxLmwzLAQNKDemQTQGzbwTZqxZ4Z3b66UxooZJAXQJna36vKqd8iR6iJg2hatY9hhuZ7SJ7R3P3hkffCpqK",
  "key36": "5YDS3p4LtuJycTFbDtKTubRjvSJvnEfwwiPosCpHb9Wt37kbQkuEBpdzFyjhwzqLRYkHq4gCCoBjFWhLYjrHgGk6",
  "key37": "5PCZamp8L2fvJ2fZg2RRjQepvF5qA5fE7bqVhNdH6JSKQSjdn7NnCHd3VVeoDXsARetC8evD8xVKjrguTZgmL7Sh",
  "key38": "5aSULH5hVunKbH3ds2vXH3anzWb5oc9B2uhNHozspmzud5qYW2kqTLgFxorMNpjRdK5U2cjbBNhyC28kcJTrEnPv",
  "key39": "QD51tnQDG6iJ3oXsZDGWXsz4JmmryBbWrRVwxxTMv75Yb4jtckoWpu9vpSsnKQ1oJNjMcmQKYktrfnqW7CQQJ5C",
  "key40": "2Are2HUxqpNYAX7AXe66nja6BNVuY41Z8TXQrEUZZQ89o6EzgQEaVLx3fNYSVKAitro1p6y1xEeeLTbT9WuJ6raJ",
  "key41": "2e9RSvg3WArSsWA7kPwsCJQQLWvuLBAUrnMo7FzCoBbZ3BReascg5H5PwxHJaBqhiFjvyndnjuBjdkYPuvgJMd6x",
  "key42": "5ygB9gFjQnXxYezPiTXCZrkdJohbLeJ3kvqT1okh8WzCSCo8VMRksZkACuAxiNcG6d7wYBqHYjiST3T5uoTfEtm5",
  "key43": "5U3Fb8ruKugoJ8BVsSa2C7C9hnZkWS4X2qNZvzc2GgGVqWqVH9BjG7VzwtB8aZ7K1P8JtT7RuFrhYZedq34QFFd1",
  "key44": "mUZSSqf4rhUa5bahJbodbHDwziCrf8QCbCJhvV9v2ScYuFA9zKUTNfq2W9fhmnvEJtn2ZJUmpJzVBUwi7PfaA5L",
  "key45": "P4aJXctV6GjUGzXtW7YucwridNVFjkRRddvM2YcGsKfNEV3RA76q3JsxxWQGttcwJknErRqEyP2X926xtYNDMwk",
  "key46": "5cwcwWiABPB6PifTYCRRFhAn5GBKJCLZSrmPoUWo3wUCW2JSE9L7usSyk3YVPJiFeLp3aVgLAxWPWkf3WXFazFxS",
  "key47": "22fv3KFmutSjwJTSXBEL1gzbK3cRabjsVDK9mT7pn6CpN89bwsx2UJcJ7ejCNFixzYfjbokeR2hMuA7hus1QdJ4D"
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
