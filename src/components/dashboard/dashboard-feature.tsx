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
    "HJ3epjvb4iJzyuxdwWkicj4bRxHoGvzaWyNfNwhmqDUy5caW6hPjZCkG2cyVoYqAjf1htCH8HRFKfVaGvRr4Wuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SepDm8utaoTQkCQMud9KxzwnZdRv6nhnnoheJuatuHRBziLJqho7PGACJQxdYjMhR6fJV4nLPABwS2Fz4vZAL4S",
  "key1": "4mr21BuCGcRcd6BFHwNp5EfRR95Az98nHnFw14bAMPD1ijeUNRqH8q4ajk39YDTzwrxkpo3C3RANJYwpWCeoG7Vu",
  "key2": "tSrmzw1e9U91BJVdbS9MSHh3VsVe7LV9TizhDpYExsGZvLrxksubZNqXr4FfzMTZNemmaAHjgXNGKUt2kbXuyuv",
  "key3": "VgD37h2vMx8PNaXjek2hvM6LJKDcCwq7WmVuGq7gPF2VQ9eKFA5Lbi56dw8MGVXesuoE9SKUxe6NtZGwUStPqa9",
  "key4": "4qRLLns2RHdnxf2AZ1ynUhA265TpNr2ZDM2TcXCsE5MdnhfiLQZCvDyEGmyv6vmgunn2xEjh5gR8FyTfxW5PyRAh",
  "key5": "4myotfs5m9TPt6iwvCFGGU96trKYfp8Hkgsg67G9vgFXxiz1D7ZCNpqRoci4PRJM4JXt3YBQ9jPdWuuAqVXqV5fZ",
  "key6": "tf8f7NTL54GrHGmqMmehvohthskcu22Q48CZcjT7RfRnC6Zr1ZdVYHXVF1ikRFDx7hdVeWsCCy9petL1VDnQ3wZ",
  "key7": "36kbpH4afWWnsnMQUNyc3RKLazPDH5U6QtHhehAkd9ddceRwz4KL1Xd6hE2pPQJSWyBz98UYB9wYCezNP3Zn42Pu",
  "key8": "4sJ28oEj1cWf3MDSPZvXmp9MBJ9AEhypkCKPPtLM6qn6PKNigqVmnMBUYsjrGcudTeSuvf4ns3NLP3T1bCaSyPKp",
  "key9": "UMd7qDKNa2DttveMNqDoMAuiEBt42LeRysnbmdhJvvCXVJFNWF7YppZSsTe3g1y4QoTrg1AYUtQqbPgfMfSizoe",
  "key10": "3LTkHAKgMxjwVe89kT4f98nMJSNtwhysQQs8fq51CbWaPnzpVjAb6eSvvXLLr5CvaE4yfWfVBo3wFnyk48DuBbPP",
  "key11": "5hur63ic8srtpRZYNUYZvPmJMMJuDXHQizPTzWmeJ1yVXT9qGtoirPJWRZuzop1c1fHLoJkGCtQ8gueEe42LxU4m",
  "key12": "2G82KdHnGYobRu4ndcCY2x2Zxipp82KCUNb1kcxJovrmvAyi9WnNrZDgNp5he88LjHLkoxEvHySDNfEkBSV8iRcE",
  "key13": "4QPkxDD2rNrtnzogDcPZkGs2juwi9Kk3Lsbb7ZtyvqUBNN7GNzCaUCmMdeCWqG58NrUiLysB9786rRcMsYmAgML8",
  "key14": "4EqPDRyGtjb8c2mtvdrvhiAJpKjNSKZVCcdZmjCJ9EyTUFAqjAKEjZ3gfJZnzQBqB3CKnhPCAtq9C7HPMpH1RFSr",
  "key15": "2nQQCGdA1ypzrNeMNzFyPhjwWJnqXPUbXUy4PGh5BKyao1YnYPMBm6Ar4ewYRzNrGMKKTHRq1yCTT5mr4bDrnMvx",
  "key16": "24PYRuaA8SY3cR1YBzEqWng8HJ9kvRF3hDpypzkTBN8Nd5FarGAd6ym5pEotSKXfuivcWj6pSzA9PhWh1kpTajZ4",
  "key17": "33SjcGJmdxcQKroNdZ3tVu4AfoRpy3WPKYygXeL6uCLd6jpSrr8R5UQfE9iXSmfL1Wap7NdFoNvCo4x6v6NB7vYH",
  "key18": "2mUGtpyZt9guzCVyDwF4aspabF4NJLh1yUnK1kBwmgQJVZ6jAVUDpZx5i1h1GpqJ8ZT7ni53yHFEYpvqRG24Y7cR",
  "key19": "467nxM3h73xPeeS4C562cSXvWkdXuijAukduwnc4wbWepPAv9a5nfMPVcZTBufBBcy3KYEM6g3avcwPiaP9z2S52",
  "key20": "3UJfMssQhaS9Zc9TrjmB8J7fRdEwwYo6wus9qh4jk2eRyTJGAyKDFeL2dc6xhu7efYUib5buvWXpyuTHmAtMMbhN",
  "key21": "5m1YT7xq9pwRuXY5NJ7yEgorJBgX5p9dEJbqSCNRPYjMXmwtdqa3iQYMmtPjWXGXrqtGNDGZrUuocMsPoQniV4x3",
  "key22": "49Xzu3wHWes54FWgomV7Z28nuRsATgBwk2VKctud4AVpzCLQ83BhuanpFidod9H6uH5hyr6iD61gsa5Wdn791xiF",
  "key23": "3opBq5UzEsXUzN87trPZuLr9EWyqTvQFxFR9hD9VGwojii9ABiR6zuqwXYAf8zf6v9SwMMBaFuSKmEA4T6rpYLuV",
  "key24": "nhLZiZg8QUpBMPEpVUxgmjpGsnmbdLUoHivDFE8fb15Nqb8YNkG8K91E8Fo9bw25qERZcmxnLbdGk9qSR6tt6ZH",
  "key25": "35yb71Qiji7KKbPiBaJApEgu6S3SkuJsRZZyJ1iJhV1MPzSzLzySVLDZVMCZcvfLvAXWQ1Nwm8DzYmhmKVjKy6xS",
  "key26": "RAh5HQWiqYnhHizwCn7sRrpR36DZZiKQVmtTJuQrScpyWKPkhj5tMVtwHmtrFxSiHXCYi1UgghhePp1K8TWViWj",
  "key27": "3Mhn2UyrCkuLo9LJksw7QWrRbntF8yg7FHRpF2u7WfZHAYMtiK3zxdoVvvfLp2fWZ1qkpBDrKfSFZLCpcY4gSMFA",
  "key28": "TLTAoabpJMznxfSVsS5bYmEW1eD8j6SdFHsrdi2dvH4evEEAteCZ6ykpR89Xtnm7cSFicWpXcm4ambJUsp16WAv",
  "key29": "3KMbj2XWpDN7FnpBNiZucsEo2ismsQSSVbwSrfk44fuK5K2YPhJ6E7HuFdWsXKoRvihudyQeY75kXY7YYxknVwTi",
  "key30": "5bU1f6xCcG3SpscEC3JkptLyMmBqfvTe48LnUzkdGjSgqzBFYAe4MJC7u2GU5d6K819WYJnzkrvPjM1NftFJomzm",
  "key31": "mEVUScTd45qPBnwoumN3nWjidRjCerR5R9nVa9mEbWD4LCGatheELmscUX7HGWB9ZPYhnbU9ZrzLtBoyKwoYy71",
  "key32": "4LBjxecMRB8DRugUowB6mhW8PHmSyY8Eqbv97ouriYRjQtAFyU29QVy6dG4vFSCEhwNdCH3grmxiZCfsfE9ovpHK",
  "key33": "3oTzA8e2qqZHugGBYvaZjR7khaDshysokA1zYXb7tE66arYNyiJMRcfLN6cWHAAcg5gm26HFDgDp2Kf3BUSoMuic",
  "key34": "G1u34S4sPNbWno8uyUun9t7nNEfzUqnCXBrVh88CmdtEG8wJb4xMoqGF4wYSgRmhBreiUAvJVAc9T3KxHx1Pxa5",
  "key35": "35gcgNUzq9dqb4R32xtSnkeGiCjRMtSCrk5tpppUmJGhrepJnaTFJZffzMfMnraqcf2nRERrc3ihLVLJLJGkRY27",
  "key36": "UDpyamtNxabjx5MzbMCb6MaCcEhmR7rvsqZNNq8CUJDjUK2itL2x7NZgs4yHGtiLWeZhQ3TT4hWa2xeDcummw5s",
  "key37": "53aQbTsi8n2WBfhDLUBmUKLG2Bn8NtHjGtN1AQfRx7aLpFW8mfjud4kmVJHDmRauY9Ttavfu6p4XTJHRUeRAJJoJ",
  "key38": "2ipVcY5H5XtyfZDXtN3bh5fsvE24ZizMpu2xvJ6WPA2Xj32gfpK7jBwMipcYnUFZCQw238mvrndJ3crRhJVvTUuX",
  "key39": "3DC9APxxH6XrJvrXbBLq196uknajSKFYvvuLKZgg9uJoo57Q448qzyx68uhTgjqAsDXtBwDqfBJFt68zJmCzWguz",
  "key40": "5UziMrQNnrbCtWUMFwVP9hcujgLR1FgTfWnTKRQjkWk7sFs93DhM86JsLhj2CRrSdxjToLt1U8bQPdAXXfrkCbNr",
  "key41": "7rFfXo6xZGUiZo9u1EHk7wqo7xKhP7yEhKcytGQKu11VrSKK5FRZMvfSwZtr5363cU8oo25MZkJbDoCeaRnoHLv",
  "key42": "3xSMqBB4cAP9vFyywRVpLUvb39CUYgtzb4fzXYC13PPvFRJLVweUkePuLXEczqZzQA9T572Bf2kud4W6Em5eE9jX"
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
