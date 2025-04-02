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
    "4uoVPb8uTdjQd3c1yL1KUs2eSatA7UreAV61Gsho1oM7iGh43SHEiCN2Ws4bwSYbUR1NnrqDUwwuGLxrr9DNDNDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9jipWfoVktz3MxyVUSYYr78phsesmicr4yxiG5FxdEXggDyrmfQeRnDEeqBF7GXdKqYi5SCbM6umhFRyu177V3",
  "key1": "jHVZhdoh3BXgrAMDvWqiA9mSjfVJtxb2U1tLbDqhg9cfHKxUcveQTD8J9e6LBfX8reGDah9NGEyc2yMqSh18U6V",
  "key2": "2mtDKydqd724k7dHR2yDBWaNQnvFgNVkdKDzpB6DyfnXjBADVuCzpKvMwpt8m5MXQKEQxrA1ZmNk2FAvm5CoVMiV",
  "key3": "5wWnp8AZuhS6Yiz8QWJQmPum5ThCzhF7wzVYWGsrKSzeTnU9oHX6SNNTtBCHob9nQaitvmWYneuFYP77RJDY1qFg",
  "key4": "3yTq1v64GEQ9QGFa3iHGwwhxjUJqsuipS6FLfFRaSh9U4HUVo4kAKEfiFwrf7c4ued4K3p5dbcsSYgnwAAHGoiqP",
  "key5": "5iHhN7BExmkoHVRLqEAEYWLddreRBVyzi4wANJHZFz3MwxMMELNgc4icMx49p7q6tWme26Ky2NCVnL8Rbpe6rEtv",
  "key6": "3CExX4NiQQUYkJYjxGy8iHUDFiNE5ggrJzjMffJVbVTUyFzybkrTWitMfPmqubBiQ2NHhpzxepoUqP2PT1AJhVoU",
  "key7": "4e8XAoMRyX2iredNxNtxBg8mGXMfT1SQ8zLodGn7DB3aZtBuVa8ZpHX6mX71RSEvArotmEBQiMWSLg9sq65RGoDH",
  "key8": "4AcfPx3zb8C7JYWMYDpsxWonstyG4UgXmmQ5Vonra4cQUs7RX23zKiVBUTdBE1wya3SouNmikF1RaCoRBzbE9PCP",
  "key9": "2jygcoFikpQDcheSnMccPy9XgFzfNwJNSec4cdi3arbox5AWSyYHBzL1AMqwh1NFvQF9kQ6hwSNyfdiNbKa4Smt3",
  "key10": "ABWMP8Dkk8u3nNUJEgfhPiNd3QpeGUghvXZgoNSrTTK3XLPi4WGimQFL3o5GQWRgvvSx1BRoqctPVv6xPdjVdbA",
  "key11": "2Yz1cM6zNZiuQVNgFiT2HzvJ93okJU4GwkWXKbpt8pJG7624fXWbxDKA6omngedEfBYurisuUvZriNogJX7YMYh4",
  "key12": "sYcPMfHN3BeAmdaLDTGGubKP43aHTJJTF1oJxHyL74DH6F1HtKpZN5aReWNxStxzM4Qdh9uAqGnPCVzQeMXQtxZ",
  "key13": "51RQm7gCHQy8fiKTkY8YviZbj2tMih5TsayVGNxDYxp46XZgsMGtFiaR1HiCJ2Fxq9staF1CVLm73z3fxwgdqqG",
  "key14": "5X7xRs5qZTBSwtnyj91fTF6QB7KiRF6gjXvv4u6ordQ2Pdj9mgdLgQbwDoKJUVpAtg4A2iQPZpxeLU81vRkUBk3j",
  "key15": "5pDEPysgip1wDn4jsBtqbtCLP4mv2fojaZJKgq13ghjih9survgsfGMc6GGPTQMZd5Xph6EaHFhMrtgyQaHU1R5s",
  "key16": "3sbCGSqjbp5A3ahvtaTjKdrWXMCTGtgxgfTY6Tbxso4uJmuvJ9t4p5Ac4NxxwQB2tYs2FzuXSSFZKKEDGsvnnSAi",
  "key17": "5rn1XEB1u6sPmtvZWZry6sKbnpdCY4nPp7DzE5sbSFsbqUngCCXbmdEayNzw7t7Py73H8hFiuo2gdTNMtZ8vFPL",
  "key18": "LvyqCmTFPxuWdwkFcKP44VTdnikEotZooEbDaFVvhNgr6ByMNAQFwAczRCFPD6mERpNPGPkekFDmqCPNie9c5nX",
  "key19": "3cjs9aEuS9PCmCYeqmH7RWXdi7fWfE2WKawrEcBJx1hN2URqfdpiwXXwCm7YTdaGwu2prWZJ6YhfFvRFa9cvPesU",
  "key20": "4q2XW5Miuce3NBuWyymacPdie96n3ks1q2aPWeSn9sCQzSBPHZ5U6KkHYYpsGBqzEPy8Jimzd4uJKJU5rnWRP7cM",
  "key21": "5dRAc4cfZ9QHX1jSMiTsNgeL1EiVpWTAS2s6eLFh8JLBz9qdor1ATcNaX85FPndzvqPGeNviv1eZM8ES1Sy2R67c",
  "key22": "e2ZYnSAPZ8jfuEEobY9c8xQ3mswLZcr4Js6s6eKCHYF84TimXnsEbFACTfpt3W53rorS6sJXRqS2sMuzUXtf8DT",
  "key23": "48mpq5dCDu8A2ztXLCPj6tSEBHGBbdDD6bUd4ELQ2PzbuMQnnrPepV4MMj3Ax11coSwVexigTqssThzECGcDm8zz",
  "key24": "5Jo1y8SH3vT9eNP7HQRnLgkQfq6gq56fg4Ff5TXGApPoScapdS2pzaM5KxofQKrtgUchH1kZxQaAh6MCjRznm9bW",
  "key25": "2FtzY3XmYPU45QDFtnMVwSoRks1PBM5PJjhatnRxq3f2GqBg1e5aK7KpykEJeWbYBQrPtWgBgKpCAcekkZDMcKPh",
  "key26": "2mdWz8A6FzDjm9Tcz47L3SfkZRKzSU5ZxNNAJ49cB5d9HgfiiCBDRcaA8R8D1J6JrnmhRixowPuEXcLwUduAYtsp",
  "key27": "3sTcEjYa6BcdRGb85y4DDvxCvUgEHNVV3wq1fLJqvQQG6tbyjiCnNcKsdVKNRgHCMP1kPGoL9ycsyZKH6Jh7Jspc",
  "key28": "3P3QzgCwsZN68bkzZBnhesRzJaWpgyEr5im1yJ3diZ85ftXZPKihovPEhTkV6HFW3xpTYTvysqRDxV5PAf93dH7f",
  "key29": "3P6SHsdbAMFZ3LQVXg4XCeNAcMHUjB4iuYxUUJSzxBeru598jafHtCfSq1knLEbBEGBLWceYCfKNa2pDPtez6iSi",
  "key30": "3donFVLNNnJyBK6qKe885QGxuNgNjk6pnHAtvL41EYz6qyoWdRXLN9wbXS3b8nweFxKHd5sZs3Hs5u3wJwGeLkCw",
  "key31": "4ia4VVafL59wJiPuqNsJ129r7MQDVdsvYuUuq6fG2P1FbsLZoNB7rpJN7Pb1n5BVT62sef7P8MNk8Cv7n4z9GBe1",
  "key32": "5vDueNsSAUzc72ukWMCNxteVVnYu2FUqQXV5tdcjQudhweCmuM6RkkP32BDhAboFiYNcfG4rDNKw9TzkZittaZGg",
  "key33": "4DNtKnzJ6vxf4KSLhdJn4MLHNfg6V2ZG57aUZK3Md8AYjvooB7KYU9gVmxBZh9STZBZ8hHZxtTWoTFgfayGTmoCT",
  "key34": "4fgGMQrQAg1usQUJSE1c7vvJKStEWBnjzuP1X1ueLdn7W61rAQT98DNpqFAb5LoghpJtgQ9rdbTY9QjDYVYaBdfN",
  "key35": "4n4uhM7N54wtPtszn5aVyXKFgKTVzqxwDsaeN2gA9SqcsHUwvrUk7npSxNgMNqEwD7tJUhzd5ufzJK3e11P9xH3r",
  "key36": "2zmZM12YLk2tpmggkygGH7dYRfg52mGcY4XmGSqNh6vYp1MimrJGvjuK78pJ7LyrvSMDPKD3i9RdcDYRVQmStNGd",
  "key37": "2TST9Dyngorfb6r6YqdGMXUTLdG8N4ySkwA5zCxfYqr3ydjtJhs5WTRs2RGGwRanK16JYXjUELj9moDTeQfvE1x1",
  "key38": "2G7DCfn2crQm9K14sbdtAQzpwAbn5sag2LDc8uTjrXK6Tvt4FFcKbJw6Znxa95ntun6kUjNQJMTvkS4H5WXFkHgD",
  "key39": "5Gv2LPx4nheSWADwxtQ3my8rhww1Bm7QTua4ktT9DLdowRRsReZaGQpzi91X1az6UrnQjq2c7t4e3mN32QvVae2P",
  "key40": "xHtpNuh4TKEbr8ZqFtjYRpFrkLWR21giEgRwqTth7r2hXFyvMoVBa3TDYmvXXdNsw8vpdYhrahjLpjk7vUhGyBL",
  "key41": "2wD8kgm7XH74ZaYQB8JSysdwJAcpY8NnfKzuEVVi141AfroSEWLj1MmN8HLk5aHesGSEuKuufYRy83UaUwT4DHaz"
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
