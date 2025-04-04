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
    "5c92JrFf1BWXR1Vp2TjzgKkFAZ1LgcJwgW6KCqZgqACUebLhqnYREVmZLoNpsQ9kHCoTRU9LbQjQJHn7basL67k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQUFpB1ezLbVd1kUjvzJjbNvdyCaWanq1owoMK83WdCwdbodsLivpPkbFnMxVhNmZ4ToNc3chqYigM9ZeDZGKG9",
  "key1": "5go4s4sgRjk1iHWtXDPJBEscZAtdZ4XjaG5Cuu7ubFnMo9J1epXMyMRsR8SQdvZjgfL89iXVryiJiLdqcEQPWjkk",
  "key2": "ZmWvBSiaxefkffBBCzBSs5NTGdm7b3bmDPehVZ4c3vE8FP9imY2P39141d2rGjWDcf5eLz9hGZ3TxzLPh1jf2aN",
  "key3": "4iKkuPV6F7xRwRgmCMmQ8jh3bzrFTbc41NT92h9swYRhb9aN4ytxpVGKtXdBQdmLfAwufn3jHoiJSy7Hxc8nHBmB",
  "key4": "DXqRz46r249EeuZ9p5RDTbd8FEdmtAxLfnZNsDjCCvJCWC4ZiAT2TWgY1nnfRdGjDoCuUXa2EMpZShTTzWzsDnN",
  "key5": "4nnX2dumHND2hWQiX63K7pGGVPp4Ad4jQUChffu13GaFWiNpVWqJsHsJmNCWrDNQtZ9aAMPSoe4XGeXxk38o6aHj",
  "key6": "4riUWUUAHBkGbqzbQixDsEaktvsza2nKVkzhY5PWzmvWcXTiMuKfGbzboa5QQpvJhdXgVzRkAV559rpGbSjpshzW",
  "key7": "5dgctmrZ17G1h52yZ7tLC82FJzL1b9jofgkjJU5QhZyj55a87UUeCmq7AZcKtdvUsjaSSTrasYjMxD2pfaZ1Eu9h",
  "key8": "q7ioaGeC87hpGUVjDzp8NH9QXWK3ZcpUTXGAEbUpmjDujZR48RFTks1rfj51ZrWEsJGwmnFo6FwgxvnVpLnYNxn",
  "key9": "5yEcYsPnJF55bTktEpGL33rYpnstLDNkWj9D89e4AMR7uCoQyKteAK2zLBQhDNKvHRbhtjV3AVKUeUpYxTD7jztV",
  "key10": "5exTsnz5sWAJuZ5ABb4QTxbopeXMpe7cNminZNLG2LYyFozHLDpRUK8rfX9Gzf9y6WjeAo6sv1Uo4AURfG1cxDCF",
  "key11": "551j2hNud5Feqwdg4XVM2o5pcBut6ogy9y7rXfDDKgPdx3gn7kAPq4D5ASVaqtiai8NwBDQNiUWk8d5Nt8h4RPr2",
  "key12": "3MhmXR8r67EYYrPGLZ7WG8phWebhuXzupb7xWEHXJDHF7XXPsqTA5v2X5EBuitVJucbfUHsnsBqD4vqMF7ba8nxE",
  "key13": "4R4eidQDEzAqciDhHgFGHF3mTRmPjNdHVD395VJ3SppatnuDpTcRwnmTWSQfoGu4vJkQ5uAA8hCEcc3rcE9hTwoN",
  "key14": "2U6txWquYUcsdxWw9rc4TWrTuUdJAUjJMcZ7i7xoQoMPuG5frzNxEmFGTPjdfcWEN19su9z8VHBwPJ5SbZR51Vdg",
  "key15": "2cLUhTovwgGV8KaRbCB1Go7jJzwazNiM9mvmo5gJUHWTyxF18XhoySmMVbYkGLLqWykb5cC6P1zGYchYZo8VXJz4",
  "key16": "2h77TbNQw3CTyV6wwiTRDnZwnzs3AKrwoqCBQKYGcGwpeYAHQssWQiypNtjSiPqJciJg1Uv2WnKRM2E1qRKqwANf",
  "key17": "2PtXQWqskjcfZXauQsymWGata3bYNXbPRMdK3yS5zz42Nez4PPToJ6dHrjjQ4DdYLP3DgJMULRGzbzTZYX5uNNcw",
  "key18": "659YZeUHDe378dRHZvy5hhWsKXqqUZfy2ZcdrJKhQqMDCHojKKSjW4fM2SrAAJejMc2eRt7JKqQsYCrj5YFnDSj",
  "key19": "24L4dqTFiKhPDWLcbicMxVsB9RamPDoQMqmmqMf1qVHmQQwwmWDpMg56XCeSKNmvJ9iznWKNckCW5VLXEr7H8pVH",
  "key20": "39KH7DEuBsHoe9V6TpMkZy9xiiuQjrxieNfbk73ownLMAaSo4aZMga9U92nVaqkiYU3nWuohy6uVLeZbJ7eC5kt1",
  "key21": "4QFZT5mL1yAqFZ2RnwMzTnhDuXRqcCSgcU7kN8An5ToRKZeVbeRhezFLtryBYh9Da655qgKkg6YBELyQam1BZ5Ad",
  "key22": "2HnLjL1BBpUFzWMpV2HxiiM8eEoNCc69aLqyYcnVFEAJzAgnQAWmJ5cAN7LFMo6s9opNeU8ukyPTyDLaqWpBykAJ",
  "key23": "5zV434fVfc1k2FXs1NdJ3bW18C45nXJMD2jkpnd96B69ZuEq5xAAYUK4hQ1eWGx9ZKLQwhmAiU7NL5XAPZ2JMb11",
  "key24": "3sQvnjw2kdoncvAQubGrqs3bA2Q6Pf6vpyCT7LX9nY56znvRqXux879NU144p1u2wBuDBtHJgRdLuAMhAGu6b3yN",
  "key25": "4Z9FKQa2adU4RTger6LoVWgAyUrVrNzSKa7u4Q98Vvf2fRdUHF3ZLNtw4G9Zo9jr1aEDWLF4w9TU3xmDjvG5ThGg",
  "key26": "ztiDGDuBDYtsEBvvibc8wGZETkv1irdFv1XMH3xEE9a3sKhnSQStxpkT5QiSUnmEph4uMaAsLw1A4WF2Ssbir2d",
  "key27": "3LizfVe24LCHPbBjikWJMyJe1X9ewpfphV3RJjqBTDP9Gdscr5Kg6sTu2yXb4dacLYThHPkaFp5WtDevRxEHY6V4",
  "key28": "5XbErYhyRYEST8UWrCpitKi25wLF2KvwydEWW4A7Pigfh7rVQQAE6tyP2CwmWRcG7a7TjfeD7McnDgVQuCbCccaj",
  "key29": "2mwi1hroDwZEktu1EGrEbMoRZeThfRT1jvaUroSgnTgdqHJVGRHVLhCaJ1jgX5jBAQ2fnPUVZA9YfFKKjqoL6a17"
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
