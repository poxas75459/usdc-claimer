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
    "5R8adUB5qHXxkU3kmkc2mAB9PofR6abxvhxdVJEiwxDTx83TfXSc8TA1CdteVpuqv4sRWB8fA8Ssq5S9sbf8HJDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JCNLJts92gsKr686TNJmK3UHqe6CzZT4oixyo3wSJsctoXXcMquRqzxkoGb4X2D1Z1Xxc2bQ6Toxy7ACvSBY5j",
  "key1": "R8umkR9eNt8fMNPRXw5FVFS7mTNC9XHq6X7isBhRTzgFw8vX1fuRHg7o8YDbt6DpJf94Dzet6BvqtS7xWJ1QqYg",
  "key2": "J3A2utrggv25NFG8BpS8EF6kFmqwAVcLPQxfznboipRvnmyxJLPcsmEDn93zeTsTkFZNrEhCZZsNZtHQLSzRDKe",
  "key3": "TikPYAEg3cnakFAXocbm6LWuZGhrhvjnP6MC2wbfE2xtu493UrqKoNsCztGiux7YCfgLFNZoAVs5RzvkfuFFctw",
  "key4": "3aei976gyNL2ttwKVBRa4aUTqHd8Y8xh59mehfgYaXVJVGHCw9ANJuvBfDhd8q8uDHF63z3HVqjFqoBjdpCkbwWs",
  "key5": "wuRL4SWRaV7GcFp7zoGChNviSH5S5hCESq7GYEdKXxtMQYNKZK2PN9fkVBN2dU7E9fHwv8sSqkUQn4tDugJ18Je",
  "key6": "4rW3bWaKUJzxAkmim1BrsmJnMNXpm7bKHcNSo11ZVaM7EU4Zirj9WMHtauSritNjDN5dD5zKrjFqvGmt3nQG9Xhe",
  "key7": "5HayxCemyqxiKYSw9a7q4Kdcn66rTjUPNQXnLtXoTbEudtxxHZQ8jxhraSYUAqyMhPUBoGe7Lj2z5FLXbN2ThFkt",
  "key8": "2JyNzWYZEAqQwVdeYXCmNeeZquGu9hRBmysnWrZoN76ZaijRuEfctLCbjBF1gYXKrKSZM4xgrEP2YF8VifxSosew",
  "key9": "5XwGqzGinngfQoQqFgGUEDw4csg9sGcvz4vfg5KyZzJKkqigitkQ9vWV4UQpEMnpy4L9M8qkX8PHREBUwvE3Nc1p",
  "key10": "5HfFLn7tHBPP8n9nwJ5icBfpmkM62ZjP3frZq5fomqjGHLv1GV9X5ao1srQZ6zSQSQvbvtHdBdk56MpxHW3Foidz",
  "key11": "3SH9resrtPN9sk2ARL8nmM2Cr9JNarwHtjVcEXhvt3dBAa68zCCJhWgJi9T4LwEhjuHghKETzGF3AMFiKTejfe1b",
  "key12": "5qMptbeSKM2hYZN8qAnHxuTnqbEwZrFxXFmejzS3ou7RFqsM6ns4P1DYsfn3tZzsUNzhYDQ7FoXkA7GGvhSYomtw",
  "key13": "3K8TxxLvyRBfE7LyJ5D8if7RGQjLkUY8ZqNT3eDdxvCWyS8td7hbsZY16uEbiNApDzZg5paz7m8rnzuXKDQikre8",
  "key14": "4VcLn3f5tznT6LFUiKPoTQc63L3YRgHNNKhFamufj5HKKJSH3Loou8WAF61TYvxGLnXvBhjZdCsv7YKNNSMjh47B",
  "key15": "5D4hWyumaha5s3xE1sXMtkhgkfWapn7Bb2N31ka3rJwuH3gNtjfqLwtMJDyMy9kv6DVukSs4m2CswdVMMEczQny2",
  "key16": "xy8GWebEzk1viSoD5t5kr332Ka4hKP7RbtbHvdeFY5E8nCk3nZKn2Qs3mmywqGxt7DGEgF4omZ2pbDtHmA173mJ",
  "key17": "3Y2DL5rLcwHjM2fF8urA9jdJADnecyTAHDXLwyfv9YEuekLo7jRSuvPpaMYzT9cExbvuF8Qdc23CbsJpMapvfvBq",
  "key18": "5mAYwJYTPNieczoGUFiFhzHnjy98oqH8aUKY77JQcQs3pxgcez9nUMKpQa6iemsuD1vjSQrkAks8DM2iAPZgmUZK",
  "key19": "3Pjgeh7sAtsHZid6VRHM1uBmxZst8Lw6iMHJMg25LSPz3aBcz8UW1RpkNQs5vh5k2hTsYzH5ps2JGWbTTqbTjYt",
  "key20": "2TtZw3hMkBMBF7jsjzNCafb1F1daMdqLW9XGi11dExxyu8FYnRU5h5wJyBKLrYqVymedcu2q5fqmHeoKHMbVzarB",
  "key21": "51mMZXhj1cPLrQ6aAKNNnUWNJmJB71x2dpsCyXXVLaPWnyTz6GGCjKNyaGXwVtSvjNdgJMLLZF1ZedhiJd9e1ku7",
  "key22": "24kNGAdpuoVCbYCxnMuxhtbdkUtzVq2qv3dbU8x4Jna2acBVdDt6hb85MitzN3pHvDD8BPQS1hx1ZkTzS24wXpWu",
  "key23": "4JsXzqxtuwVR14yeCfFTBZJ2wBXRNBvzS4LKr9YNv3bcjz2Lf6wYNQD2TV7aQY8zuiJTGUgC3M2ebwJDKS5xxhm7",
  "key24": "3Z2bcq22n7tZMhdzPg3iq3oqmGsqdL3omvkKkx4t1NRVFFRQgFNuk6BaRA6ALrJUHis6nKdYUSMBuBXnHP93oimm",
  "key25": "4RooGhVYd3kEMLmiuXWoZKFG5FVerPZjzHg4PVZRZkn5sLV4Woe84gcHQoVaPYeLzbcia5vFBCJp3JizcV55o4Po",
  "key26": "5pmUibfjP2MAZ3aJiEcXdgpRJBPwwFJd5jKaFpFuiSBdvq84v2uxgejKsd7tmvZgBojPAX3F7uv3CWsKTqozeozM",
  "key27": "5ZNygLQDC9Dq1Fkynz95p7Z6gWf1fiEg7vTDjZwDZr5irmGjX9HART3FoR8fiTkf3FuLayQ8Qi8Mdahk1YSf6CaK",
  "key28": "fQ9ms3RyZHuvnXB1gXCnJdE5PBve3aXJvcA9mRCiHCXvfojMPW5BDSyxmtsYgE3UY2uZParzQ8ATDsQ37MCrosm",
  "key29": "5hDj6YLGCBW1W29h2WMhJw9Eqsn9fsAqchtVkWH1XMg6nk1w3AM5PoUe4u4WGsDXkwjTJKE4uSmo5vgZ2kNZvYak",
  "key30": "mcfNPTwa7EEze9k3F46e5Cnkzh7ovjwDoNHP1RzTUiajbdwPj96gPHgaE6uckzhwMmT8xH5qiPnufWWbBbGkKwZ",
  "key31": "4oXShjVLQrFcULfrTZg7CiUAmavuvVZzYC6PQPiMTtDV7HiHW6bTL6UJYbKgpYzqUKtKwmrCBL8ymTojba6hmyzM",
  "key32": "4jb8pRL7KFkFkd88UYpMjYD9Tn3Hj84FszDWDyTJobidXCmnLfa8VjzB6mvqWNCvggBYjeVEjKHmgydB7K9pM68b",
  "key33": "Ni1CydgWVDQHAPiUiZTPBZVagfzGSsCTraBEiSTfTJttL4He1jSD7NL7ebDf4D6MuaHyG5s1yvm5FWk7LgkawMQ",
  "key34": "5NVvkayCZQTCSPaL7HvFR9E5PgTYUWAyiPBYpfZZd3PzqnrpG5i7Lrc7N9Xd7vGCLaihhqQ4pkCrZmHXNphfFpaS",
  "key35": "5M8ft4vaqat3C7ELz6XuB2Ai7v7Qp9bSygGuwdAPJKJdYngxmbbJrMhZKWCXfiNtCnMaJ8ehAZRbpHJ6o6W3RGw2",
  "key36": "3frkSs8515FZQV24ePBzs1yXQBd2iAcNztPt1Ds6kBDtjoRDSVDJXvV98WfdjxHZsHRujeBxikL5fKF2xHFWeNpQ",
  "key37": "4HLGiRtJt4xqM4SNpG46rcPPYSAmhd2Pbx4grw6WVnYgbYndR2ZZFEKqSLTheP5saxdgNPPGdpokdrKUF9sQnRLw",
  "key38": "4Te34sVWkzgSergTxKZnw4T1dNp2ZU4XM785sxTY938NTT8AbhvsXtn6yHTji2isEc3DxtFu3LjdqX72DhkA1AkQ",
  "key39": "eQQxdJT86aGabQ5Dq3QuPLSuuGgEyMVALxHyHVUPs4bJdRTv4o4FsmN9LomKkqSy5SycsZdA5n1V7GAbpBEfGuX",
  "key40": "3uJQPuNEHfaWexZGYFTuw2F6nforFvANYTToS8NJHhCGWtagBHcmhnLoo47SspJUVayjVR1nDhDuiLUifhP9Xff8",
  "key41": "3C9XUPWcM8vfqH8SXZ7tg8qqfpdbSqRvJhdA6rVmSkcjtHY1qhWVJqUrnBHyRXeNaPRjh78twP8bDGWJ9uCUiVxJ",
  "key42": "33seTFdPXSuT6rbLNUU1wZ6RyXua1oSS6Sdm7Xh26itaG3SSEsupgwjk1dYBDWs9Xkt5TEFfUPjSZvaaMAc1DHd5",
  "key43": "3HsK2YLBmueyhbsyZef9oLUCLTm1mSeXMzcwnmTUtCeTHHrx7HTQZAcijvRUEgdUBt5YKkPU5gFXyZWBaDwys8iR",
  "key44": "gbEiTi4vPGpsr6W8uDXmBFUK27qGCSK7rtCenXyXYD8847e3t8aagiq7hzaUrtVNGdkJLgWNkQvQG24DuinkmBF",
  "key45": "4c6pqN1UF9UeZkK9KNzsMLR965MZL7isKwyj1otubw4W7AdN1adbixJUykVtoJDvPkpse7bSjavHoBRchMptJGC8",
  "key46": "2XL9QRfamQ8oenGGgbZKV3pLVwgA4AjLWknVHfhmrTbCVXXCoruu4XzwkEoY98b7UEHXVhsjQLvJ7GfMtSMZGmjw",
  "key47": "22D4sTptCDWfvGZ3jdeLvRfDt1noF7VR8DQLmN9BvaiLqnAEh1QzyFxKKXsSM5XUVSm3wpmBR6RN8miY9i3x17US"
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
