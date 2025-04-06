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
    "2jkDBu7v6cVFZ8xPEX3yoKNgMv4w4gsLTDPvnS7ExN6Ke9DvQLtbwpBHj4sLNFBFoyfNzwYPiRKafRWhzXSNdDB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53BfNnZ2RABTEqkLmzbyn5w4dtC2vY7aTXDCWVLD8iGpVVe2r6pmda7LWtChD43RyCD8ZbDDqPE1iBf7otUGxjYU",
  "key1": "28ZVBvtdMUB3vwn1Whpkx6F1Z6WH55LSiBoNQeJYEhfqjWKf6XkBhmnhgoiT6TGrQPrYyvYNC8mHob5m2xivFoWv",
  "key2": "2uPqDmkNCs75sxcUsWVrfyqCXYydYht581dKjuoVeuEAY9J9WtA6RuRgBavFHbL8LiS3NLTHnboXWikgCjDmgsmZ",
  "key3": "5xW7mXd3P9GYriNDz8BEZ5wvXUgKeg3kJx2QF7PwkBrf6XeeFJv92mgXHSDvhkpV6wtgk9SzdanEtThPDd8HWqqc",
  "key4": "21fcSwpzMw7uQhpuRAEzyWk5xNAryrobPTHAke9KZLWRLKGWQMaGsmpEuzQuooYWx8PzUEjAghUAcfxtsQqCFCoK",
  "key5": "5cztUpEwv4NVKWZYq4iapbvwJwcteTzvGPYBupGwXoEmn59KwzCZ4zquFv9PhrQSjDrGj4uyXvKdztSFFNyC6rRn",
  "key6": "2BzHVmm6TDYb1f5My11PGCNYKF7yUNYXpAQ9KKSDffXJxNjkJn8zLBatZpTTqupnuRk6Tcai717BJWFMTHLyy6av",
  "key7": "vcd1cjjDSGCwJGsGeHqe353hRcEJQyb8gUwWmaMDrEzwQcow2MXruG11cMX3Hevt8f11xX8wYYiFiEeeeQDYMqQ",
  "key8": "mx8Bx9g8B6m3u8C2rvzqmZNRfaAJxpYFzBcfKhjGRZdhnThyNknRgfptVBdDLfhvEDYj4PxvjuY4rZGSnxPBjCe",
  "key9": "3yzAG8CijVkKguX8tUWEzXZswmpmbSvP79nzXYgg9a5jNaqwVS8CVCDeRcmf4HSKAuwg1KvszMWkyvaERmAzDfZX",
  "key10": "3pk3sF3McLXNvAtyXwgPo3i5aDn8iKv6ies1dqxaZXqix2N24HKsnVuRuZscHfcHbihFYJLNnML9sF24mt4xSRv8",
  "key11": "3mbo3d87K7bMuTbGnVygxbRQLdRDvWV9ADaGLkfex5K2M1nt64bkG3wjHdDcvkBc7GBfwjxFWyL6N7fcwvt5aqzA",
  "key12": "5QC4XvpaV5wymr32tMBer1DRGpFUGUCzk4CEqwRny3V8TdJ9vPrMsXo3neBntCHHAsXV6dtdbbxd8dtiJPVVr4Tt",
  "key13": "2nUa9kzLM4DGdiQJyCNnNjPEspt8xBMCy3C1rBbzoGit4pqP5Mp1XRbNUX3Aaz7G7ay5yxPiyUPxYzpeMYhaNN7P",
  "key14": "3NmrNZxqah3E1Hfnzfx84fACBV2PbY6bz85TPfAfmSxzKFFfibHpXcnNacp7fiMjxUzeMA9zaxNNYLDGGkoYVUud",
  "key15": "5AfCZkBEeX9V1DcLN5gCxkyudVMGnbP3xLw6gLcxMTSA1JprSRWYbjXb4ktRfPag7TsfgYctrTh4vZs51mvZJbVG",
  "key16": "2WzEHthyACreMmP63KfHKDdvGdqENq83GoUgo2ou4GSdi4ogb3DdGdxGYUuQLCaqdsLgA6AZS1AkkbCqMJzPau6g",
  "key17": "bwFDkJqtQw3M8LDXJU9a5PdShZuATCawKQLgPx8VWH6bEsSkbTqDiG13FZw6PkhnDRA9VLsHfthk4D61U7KWGnt",
  "key18": "5Z2pmDz2SxNmZ49TVDVdwtif8V9o68EJBygbMcAE84nBi7qznbFiqoa962UcyzY69wopBTzqd44CBqcLpnuymWad",
  "key19": "FxGsz5sZD3ituVME3bDmX4rfVU1PCszKn2w54fYFtkJuo7rwC7xJzMXEG1N6eSiTK5sGzLPN9ZAMX8cSbD3unxr",
  "key20": "zkm7n8tAhNiBTYkZQToChZCzaypSDbWL3k7DywPAHCNzRzDSiVjCF1dgBT5hwSDEys6AajttPDP9odPvCheM8tW",
  "key21": "BEiD4BRTNDEynjcs5sCneAXzGbfwLJsJ1Z2yDCGyJxJGDsD2bjJoXEX8VMu2ZwSJq7Mb3mF1fuuhFfFy891cfm3",
  "key22": "5hnGj7HTsgkU3Wgd1DkuTm1w2wXghAyKB79oorv5ZXUZTfddv9CMAqojaguF4CW14AXKfuNXDK9iXzx7tQYJ2xFk",
  "key23": "5QsiSSRz92ZvxcNca4ZG4ZFbd8vHQprke8c9sKaB6JvK5aXstzSUzeTLfWzJcC53AjdahRartPGzhB9EWxYfZrRs",
  "key24": "3uKt26nvoen6QttoYvYqY35oKfwKEYUDoEz2cDtwkwCv4sXcN13rAku5JZApqL7enotHfbGR6YDczz3msHURPEZD",
  "key25": "g1Sg1qBsCehgoLvJqXaoxj6dem1u53pp3b94A6747qrVrvr8jzuYuzkNaF6qCQp44PKYyM9c9cMkQWSVBoK2VBm",
  "key26": "4TJ2LyToATZz72VKc9YftSBzxxJaFBY1ZmrexAx46QGyxQZWtgMyPARR5c6ccdvto9SgzP6kLqyKhBt6ZWh9cu9p",
  "key27": "2BWq5Xw8eRGvmX3qz4QsuvP7wjFmJeEQg2TsvdhmLCVZXwdNkthGJVWQzZpg6fwSQjNDXkun59HfrzybbJrqTtpB",
  "key28": "5ffG55xn6FemmJExzDgiNnBW8Td6vp451D2eQaCH6ZDxWncqh7pdJWSEfFqUQEjuyJMNmMpUi31VkMbLDcSA1dou",
  "key29": "4q5rTuWyGfGz4HtiqPsUWaEPEmBncD4ciiHzx1dGZGLXkoYnv9fKtPdRk4DNSnEHaWg8PZkj9irqW45uRHAKfVSE",
  "key30": "3EL5B293y4Fbrtcvk4biAJePP4YcXdeg7ZswxVz4d4ZBSAR69KFMMkpM6Rk4wVktMQrjNouv1KXSXUL8QfFY8Yg8",
  "key31": "3YnTfxszuYLoZoVyP294hMbUaB551ztooPhEye6t7PKttLcnZ2jm7rZF6xkZdesCyEKW15z3mZmHap4hMtCa8h92",
  "key32": "4zHec7QphdtbDWBi9BCtXoW9q9ho2nNGNByTMsdWbJpqL26xur5Xx23hAZoLeKaPp24wpWyimA4eWUzp6Co2tbty",
  "key33": "4maeFeyNaY25QJxnoVQeryCFi5cP3FEAFy7kYNDTnHejqvtRfR7kB62LsyAktGuYjhkjWVcwmnSZeH72EADzdUL5",
  "key34": "KogDjfeam1R3DNgQTn4oPzPZPvbsBSEhpShEiL2JdXFW3ptqvvn1htYQhjBGni3errvgy5ikuy1KEWpU3fJgG8r",
  "key35": "2BeeCF6zWXVDnMqsDrJFJSxC67D8Q8fCQaMXhSQWCdus6vorPzbx2oaJ8qEdYig8vRRD8iwWyfCk4sLPbMFL4bsw",
  "key36": "4jnaqk4KE1bJ2X6qVPXMpD2wfiZqgsC1ddmHTERA8kU7dXMGaH3iZQUWXDU6Jr5BZDFVXyUx84jSV2kEGDPkg5iE",
  "key37": "2S9LjQTBzsGXA3yhMM3Je2CnMWXwX8aSL6CY92CdbMaCgjkMQwGdyyxLXKofnKdaj89ST4BvmBNHuo8gYd7xNNaU",
  "key38": "3htVXgGQR51aa6WQqRzyWL5S7Yg79P2J52QkVJGwRXdo2UQwBCnHx8u6Gqtd18AZNujsRvxuSFFWydLmRJVUm9hK",
  "key39": "4dnAnG5uRt148UsRgmYpcDLtQH9whmY8b8P6Fax5jheyFxzk9LhYiz9SemCpXC2LBCeT7fchUCZyMugNZu9L27gW",
  "key40": "5rmZ5REP4it9ERBCoL6vBSu3qtSEizvoonD6QKtgoyDKcYrTG5SpzQerefP3A4qVieuxTrqHbF5WWHRs7WeTRHHZ",
  "key41": "3hCYvPhC7nf4WBYXsp56KXwnm42uCnhuf8Q37wyQo6v6ic1NbvEhuG4XF1nqJvTmrFsUd5FQcR1Z5rcgpKmNQHP",
  "key42": "4QMZi29gYkZa3ty8Cm3sMkA32Ur7CUsC9KquRBpwHBUmY5ddDbYxjHjavVrwyru3uAd9eYTvjkkqBGedLtLyDdpw"
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
