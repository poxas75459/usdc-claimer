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
    "26yMnLbXKNUPsZ6FTmMvDUveXcLVfnFQSWPUYwyypZG1Dumi5iWb14pTgJKDYkoLfcuq5ExZDixfPUu2gvrxtD7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1S6rCPj1nT4WnmyXXQYYLSYxajyfoBaS3JVfpZXQf2yGtzom9XYBnNhKYz4YRRS9EFGAJMQJC9QK7K74cMy71a",
  "key1": "3HAZpN7xQb9VjX7ToEL8vwztV57hj1L1uVhsX8rhaxnQ7DR1N3rUNZ6UYp19wPEhNKnQpAuVJjqnrMAsqoJsa5S",
  "key2": "2dUN6xiheKYFnBizBz3Nm5ffvGrh3va1NyeKxLL4xBRp5PECA9yBjuc8ypDQFNyboXnLM1JbmhuD4eRALBhwhGhW",
  "key3": "2utGycdTwwot5wEiRtcSzZsjnZSy4ShfeVdTajskWtZB1Sq24HFTgwpxWRt1zLCoPsyePoRoqv23isWVmGnVaPDE",
  "key4": "1i6MM7gP5cMwy8UBX6jrEJud56v8VwzwLtzkQvhp8fJieXdAxNwSEhdjGcJQ1tQ6aZnr6fuLJagkdQM4LpAVUHZ",
  "key5": "3WFxkGkyChPE84h7Vyyuu9vfRCVghoUJDpr4r1tUAdBE9itYejRJomdyGU6UhVGqx1kwYNXk57kbjxc1xT2J4fcu",
  "key6": "22Nm9Jucm7YmVVzATbWCQ71an1RBmgWcrKjB6dSq7yu3sDDsSyKgD9ErfxEJfunM9wM8iDXc3UcRLGKftJD4kL2J",
  "key7": "2cgN5PxNqycWQf9PTy7KK6Cms5k2jr6tksYb6x5DVSiSywZS6SEF4D71tpnFNNdSsce4cikFKMxKqJQjFWrsaVPL",
  "key8": "1nnS7VtLxhQtcn9zPVFdKqEHj9szvAtSUTS4iVozXMBkTi3G2ADJpjE3Ymxuucvadv6CzKyjrmYFx3tuSzu654r",
  "key9": "4Pmw2VoqUbcDDwdw39i6tv9y285989WmpFH91ys2twUMRRXUA8ewV6hLoqyq1bwN8CpSaoLd4eWyHScxwKiG3Fjn",
  "key10": "392kWLn9Uft5okUSNyyfxSpYmofUZsn4WXg5hRuFj29Gu2XwxpRYv2nHskkV9AMBaMUtTcQBpaaxy7ZVbqrhpTub",
  "key11": "DLWdJ8vezcTWTWjixLbMgRpbdPfGmznrnVUHH52PCokvu5jVA4gp6WcMAXeny3V77Cf9xhH1xfBVQ7ZJ8oLYW8d",
  "key12": "ZEAC7kgRKbzcxQNr563xAkev8te3DzKzQbV8DC27sxVqxJVPny7y5uSeqaE7PuTzZaUK1p6ukt6bZ9aCpuss4xJ",
  "key13": "3dcQ9LZw738AATeTx6DPg1Eb1KeFK4YawWTjoiYG4w3cHoasRcnAvjaHjqVNjgGHHFhtGK47kK36NZaeVoLWUsAc",
  "key14": "4ehC41uHhBns7pFvQUQDaMGBgg7mgzom99Cg3TKLUHdqhZwqQ4jvW933FxKXVdcUGJPFxQToKLvesXyrs7SZCo2J",
  "key15": "3jxGJCFzskdTuzbZNt7rmrtrHzFp82bKDkAtryMp5vgCcQbfVQibRwyCHQ84tGcGB1duT4mr8GfoW8NzcNyvH8if",
  "key16": "2pkzWJZLiLR5B9daZUiTxfQL9biN98Q16xArFq99QynFYRCbPEoTrib7MzPgHgWTPLjZ7HkDKadDrMWqR9ePhqyA",
  "key17": "3pNVEJa78DVMh1i7vJSopN9DECRpnAFmZZvbMiunF4XfjsXTov8AujuVk9Wzjf6MroH2VvsAXw1Z8YfeargLtWhJ",
  "key18": "Dq5saFnv9SyApH2aSEcpwEb2McgzCAjrnqpyouaStjVbpni3YZuPrzZPcVKNLEqt3cEVGFtaNMJrv5gSDmMDRUj",
  "key19": "66g1VrTHVSYyWhiLVgBMNsv1W1EDs9oZ3QNt62iPU9DkFcsAcjFnq3KeMFnxa3NiXLhPAHjKrjdy1hZ6soYxsbaA",
  "key20": "5ghXCYzz4jxJ8Bdf4qh8yJgcwTvSbnSvy4j1sSZY1ZLczthE2RecktyscKwFih9E3od4hqEcAFPboj4Wj77rAX1P",
  "key21": "4ys2fBkuVDNZPWTPA3sbdnWE43VL2sxzqBifWRNxra3M6hZ9ZhZgxrrZZbzxcDmK74G5a2RTWdnkd88akvtJqxiN",
  "key22": "JA26vUBQAjAG4qW9izgKUm4rv2LxKAspfp9rDJFKJ4HxCSW6tFwacbRUoLBBqbXp1gQ1gfe5BtRFiaQ5pHhc2kU",
  "key23": "mk1VY57omnCJVxoQEwvtNF8KHCgFztg2DX76V1qxgv2PjKSnB7Bb7cR6gLSHiYU153nUc2gCJfvfQDzfhK2nWTH",
  "key24": "5bVuKivJfv1fSEQ8dxFhE9B9KDbCctT4nGvM6aHUTAuqbWTzwrdJimu8cRdycn1UvpgLjP7WbCe68KRYzH1PcZgW",
  "key25": "S7G7r1koL3kGBxV2JN72fAL923PFyh2QfNPb7nxjb512qiA5bvwhHYpVagQtk964aeuTTvjgZRNoVsiirBenC33",
  "key26": "7AEhQHZxqoTm8utA3KNZiyDM7A6doj2F9DSGVxtWQz3stRDd4gyoH4Vg2DKbQXkPypXAZkphCtFofYEUzEGdaBP",
  "key27": "v3k9fw5cR75ikkVfuoeNCs6Lkby3DqMr4jkEm8TRdu777BvaxiRfckf2T48GhAcW3neGiNTCf5nucnWUqqZNQ5w",
  "key28": "44FSZczSAa6GyUBTR6AicGoneua1HffbN8BsyZQkriKN7SxaQkwqBtuQDXZdvejsivUhspwb26vLtQ6YgxtTzdtj",
  "key29": "KdLb7JjgPwnHvwuozdRPCnTVuW1quBQkVcioxshF38ga6Rsj6fRtsoA5KxtYcV1NC6eo7bnG1qebQnhvXSneir5",
  "key30": "3FzfqNmFYmvoWoPURJx6DgP26dapzKRSR12hr9riTsbxkbubErBifQtyCXy46Akk7uPorC885FsgPTKvp415rTY4",
  "key31": "2SxLckC5c4yHChiK9BHwT3zq8pqSiUvTkTJupbbeRop6VPFAa7spyoEZbFNQPQ1An9AhVcLbipSHWWKVKQyynTra",
  "key32": "4R258PpGoNnP4kNUGuSmwJ6c55CQLUAQJaibiyaRhnsQj6fFdVMdfgthXByfobaXWBC2xmh26DxqaSFeSHjPnMYs",
  "key33": "5kNs4KK6Uf63ft6X1w6frcGsDs8yDk5XByPvESq1dpr7FDHkgLJfz8L7UHnc999ZmhATj2RXdToQE9YiFt6L3iw2",
  "key34": "RpNUGAVBg8KzL1GcGsUhWMoXdfviQckqp6fBT7Q7wZ6ufFoe8Q3yvbYugkU1CSKNMVRycbT8DS6RRvfFvCSQqyD",
  "key35": "5BJ2F1T4TGQvJiNdoD2S5tbAKw9hV5MLnLPPQafLAehjnxSyhnfbbYx31tmRhB538vbfHCyLAZhUx5Zn4o9sW9Zz",
  "key36": "2HVGu2v1U7ANqZiXNFFnsabYdd18mcJdnxxmWYVGNLS3YsYWjU78xh4zVbknFZVW8EtXvri1dWickmbVNh1s5cRc",
  "key37": "63jVnYLfGYg91oeqecfsZjDUZ3KViCA85J3roZe88n6XGFxHrEA7sdiJiWkmhSYFVsf1Pq7r8MDLAggeVibvtGbD",
  "key38": "28Z5YyD1VVEtSDWrYV7iMak2QVKrUm4UREDzy6VqnqMSMUiGi74ZqfQw9qVBXyEfBaA5d2KW3VVBcCJrMwGgsjzR",
  "key39": "3WQ7cNWbz6u9jVyXxDVowTxmUgMvHAimJkRwYfJUb6yoAYxDcYyTpoSDVG8uzktjvDYfmLZ3Mwmi5qSn5iLuiyw4",
  "key40": "2Vyr1qHE5F4opUhQBYd9vFckwzKFTatXQyRfFu6Dx1aczKJsMpoo6hGBuKS5fxfUV77f9rgmghqAUfXrTetkmyYq",
  "key41": "3A8cQy777UeAv65haFDoP73n8mSGXxYKj6srtzAFxAxGZDYXaLRCLjHUE8SzgwJ93dK9wToZYFiRo9zTTzEwnUas",
  "key42": "4kxwgQCcA9zUUJEAFb9jZr9FnvJw2Uos8XpHvCZTDd1bkWX7auWLpVzsiaxAdLDL3ggRN7Rp34hgpSHGbLF7eojo",
  "key43": "4nttybgk7yhr6wtu1226epywveKeZPnJ3MYV4iZhcfVkz4VTwPNWgv51MW6TKuPjmG8hMN1PHBCYwiq1z7tCTA3J",
  "key44": "BP5isRvxNWRXdTTHcz23RnCu3p6So9BYSifxqYZVVzgjcLMBwprBjXETCyrdT4JmErXRRrsTavT8o58Mw6ygjju",
  "key45": "3qZQo5nHS4uFMPxbjjPqRemViaskijzaxqLF1HFioEDx5rFg2WCQvMJFcwsNRihvJH6GVKb5eJMRJz8PqKeX1iGq",
  "key46": "s9xhmd8LUFes9gAnZ9XZ6jpWQ59ALKHDXhgc6NkbpPkQ6oJGCE7KxRobrQxfRA1h98detvows1gttxvjSbyh2u5"
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
