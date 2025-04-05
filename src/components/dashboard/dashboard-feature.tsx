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
    "3pUc6rdkMX7i9XtLnyyYitDL8WY2dU4cwrZ14TkD7XhSdpLvPuzfcZSu7BvC1qJmBxbujdaMhmDE7HpoyfNPcCRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Zak7E1CDFFefGaVmF4kVGgwHWwEP9CJT14paeWJbi5CyhH3HoN47EyYMVY2KrK4pSBtsWg7nydPnxcmckPcFfy",
  "key1": "pFvsUGR6mcBamAPnN7gT3Bz2CcZCBQhU6HwoevEVb976fJZKVu9G72g9TKCPvwq9Ague3xRuVYdA8kyL4BrdtJT",
  "key2": "4ohsvRMN9MHPJNneiQVYA7WsnNrbZGAud4Q5fhJezLzNys2wUBZ2SiPVtCiYMJUBsAsCjxZcPMvmDMYfzrzUd99W",
  "key3": "3FL5jSqSU4GGQ6FX53bSFvrfSfDqNvDqyhZbtn1vkMXZbSBRC82ALKnYfX2RiXQRzJMTRSQLtL7iSRdtNTYf4g7R",
  "key4": "3zGAqrxcmeZuwrX2UYeLXzraNFFuV888K8bb9rSmh3reyWdxAFQxAumN3jNaM6KPKR1n7EJySmVHhaqQzxHW2phR",
  "key5": "47JkJx9qY8jCpUBXrssF8cFGuLgyPcudAweB67qrFQHEZmGrGWR39kdaGk2Kxi5Z5Yhi6vKPgrN3KMGPxFhKSB3c",
  "key6": "46JzKTvYBjYPphsMLvvZznmpnh8FHXqGAdL2tMdd2PKZEy4vsU2ouKM8BG7Cc2UvCDJV1rReeyLQrcbiYZk1FYCa",
  "key7": "XfAiZUmsmav61WvLgxjy8CM8UPp4JbsZejewUh6xZGMow5Cc2ztBwgexqF1e2EPjobPGx6Xwy9gLgmiZgBKyg8h",
  "key8": "2kATF7PATmAUXUvizHm1iXyzdefk1NoZFDad1kJyJB3L3M3GK6z3zCyVgpA34b7krYYxWZDipEaXnmx1nv9G5HHS",
  "key9": "3MQjd3fhGQ7VpGc2Mxi68YeGrxdyPwk8NcVKxXQEXRqzapLdZWKQLKSNQPH9vrCyn8mywcA11Tt6cpeRkSUNDTpm",
  "key10": "4AVURsTQAU3MghC2XdqxJM9AcUh6GUoxHHWcKSq7sai2yuoo68zDkiVoj4X1VeD5gKYjs2gCvckPji8yNTahcif1",
  "key11": "3vaNqBSNx5cy2xxUsQWFCkt9Mb7XiCzhTxSa7Bh6Yipiu4aRXe2tVaxyR53HRjBtRBEpfWza6UX3wYFMv7soZi3a",
  "key12": "21owNY9oaRcvikEa1LZMAo8T8ZytDzEdtrFqFDKfC7erbv8mNDPbiBVtNSjyGhuDzKzX8sm7gc4U9atWKEYMuM7Q",
  "key13": "5bez9ixrXTagRGXMwhQjiXM2C5PpJiiFiWdJsRGYeJ9qaWyVxUtUzCkJekGyhEVFDmPXcf7XUuKYA9ccPE5dQmtB",
  "key14": "5WfmUUicMEhwxn63ExmxRCg1VMwvT3nWsNKXb4v7Me7t3U1FRKkPbTvyGvSX1m4LLcNuR6zfPvtx93Wewnzb6c91",
  "key15": "52in1FJDJuXrnh1uQnuB5NASAbu6f2opx3wFQjUySi7LPfoK7MXpuW1RADgnbGEzLz6xFTJkYcUimmMMvpBau8Mf",
  "key16": "3oiuugaa9bkaCs4LPt9dCrp9V2dXuxd9LqAjShVfZ7Cwzq3jRazv69KhxPSUvRUYLeg5MpnzAAVxkxFBxqebVkpJ",
  "key17": "5zn7BjqAtsDLYiA2uAn6gDVgGud1h6vRCrTHzxH3kBKw6kvaq9EFKQcJ9C2mb5vQRZ6DeFReF2GF6knGPAyDHTdC",
  "key18": "3rzpSQmCUi5d1ARfregku1QXhxT3LQAZcyC1LCof5xBLQyL56q4qS58XaB7Hm213TxhPQKWaSsGgDV3TztagbDDi",
  "key19": "4nep88rreWJfYrVX4TXvE7hmfTJSaXfAHq2JZH5xV6UiGjfGJseHi9r6o2yzSjrzYJ3uV6GemfNHCaa1nmv9GDv8",
  "key20": "3ny9QYmRP57uKrCbb7dLiPH87hKvcgdYdcXwxf9zses39cLfhCqVmbRknwKyDEoAZJYqaBcon2AWn9dvPFFaRSgP",
  "key21": "2FQ3P5U83au6FeorvzJpMwcP6GDZe1sey7e2G1gZjQMSn9oiQsmmK56vWEDwPxYSYMdBezs6TspmwC7pZrTqYUx8",
  "key22": "2JdXdWCxK5sdSCkRCR987N1GkogTw4ae3cznJidbdeJ44Vvaiyy8X4pzLyALknwc9w9iW82tkAoMJfpquhi6qwNV",
  "key23": "67B7MDmN9t9MKr7h2iQ9rpaPJuJAKkJxWsTphoUXyCfne9ob3PzQWqUC8fjMAh2F2cqGU53h5CrV6FeFH2beuXqJ",
  "key24": "5XEeYVdgEiXXsgvvCwZRptbNPjTt68dez3pXr4bGLKdc4xu8L3hD5YETpwG6g6nQvjFBeMvup344GWdYhms5HRay",
  "key25": "5duNeSRFjXKVpZQ2KKMYMuVzUEWVnEKNdFpH69W7yQHSapFhfeMpBYLxA6gF4mVD5Yn3NvMpXFdAMkaAq6ch1MoF",
  "key26": "39JGKdv3Whrs2chTgjFX4L3twQzTTn6RPL8pfGDBAa1ZKy9RkKiR1RAPCmsqtstX5GCDfT3U6G4WAEEMHK4HxzDc",
  "key27": "YXHJXkY3yRpXPLhAR8DsM25dnUdVXa6Rh97EN6mJCNn9MTd4purT8NfebsCtKYmZ5p51yQ2kim3YmiCbkrT1a8o",
  "key28": "2GwXu2AjbGtjYggmwCfjeeiTU5nt3sXEqvHBW29xRGQq2dCuF4mJ5nyZf8UArSLAhqUqJYf2fKNkAWAPZVH1NTNz",
  "key29": "2AaJVqfDXoXpMiJpUniz98AxWXEWVPqRNhGEsXGgtyb8VSCMoxZKyCuv2K66SHeyNgCVmoejQcfAXWssvyxaFU4U",
  "key30": "3qw57qHkxAP4Vxiz9ADEPaPC1KjHexAMfcufrE4EPyw7gtM14Uhxxr1efppH4eQ6BXRCP6KPjV5tHhUsj7AXJYCe",
  "key31": "5UL1mhe9Wri72KfeuT9cMCQgjFkCYKeCyzUoL1y8964NF2VvWNVHFNuBJpmLh9yzQh4k5zMiG9CRN8ecX5UYjh85",
  "key32": "3EVWo3XEj6dM9m6ZwUYMSTjAFG2ia7r1zLk38NZtoNFApmHXYTJWuqoix9FUtaVagsAq4RyxXhW5WECDQzkojqLP",
  "key33": "3fDV9RggugMC49q7eoBYyGTe8QcHSckrczYi5hTSXwN83caZggvs6rZBns97AcnFfoGqbV5SysJ6hTTbMCAKChjA",
  "key34": "KVsybNqu6X3gJJNhSeSnRx325wmv2SpcY1bnb4JuHg9DcR6EPwakXban1Vu2RtTisJLsXAHggp1KK9xVTQFPB6p",
  "key35": "2fLZEJk9HGGhTzM8uThedf5S1DB7tRARuwo6kEiALpxoLGkQdsK19GHrRq2Bf2e25xtMyuc78UqH6YTkNXXS8XBi",
  "key36": "5gRXcnDmBMued2y6bzyTjcQB345DefkiSnm2yzYVGLdC4jozeURwueze3JPzp6KMk72WvBFuTA1WQATaJprEeBjD",
  "key37": "5NZirxY2cJWn3Nc4W2w4DwS94gyDji4s4ZSyoNq8jgMMkQ6aAPG1DFVbCcuQreozUfQDNr3diivWjqLjaoKELpva",
  "key38": "4vGtws5PZVRLjSewbWk1LYjYDanq7g5cwoeEqs6VK5J8bxe4DB32HrWqS8Wc42Kqn3EzukNvFhnDJ3mHGqYNoDHn",
  "key39": "53hnRCoxta4g1M3LJw9pgwCVW6d6oJS5UPcG9PiPzPx33kfyeLHwHHx1yEtyiqekDReoDJjUvQySUu3zG8A5JdGv"
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
