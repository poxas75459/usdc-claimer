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
    "u88HD6rbCQP55bbbaQ7AmsBqD93NJeRLY58hiSEGbha9gnBVKTQHozPTVXzR5umsPgfajCRBJzCLYdmAtcDxHRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P4e5oV425q31ZcxzReDDGtxr7EthVpM68yrDPEdcZNNqkKjDBEFm2MPQ1cjbMqszGK4MLFNUKyaorvrxuP7aFB7",
  "key1": "3LK2sJugaizSjdTdxPpfzYhRoi6F7USUPV577NDmCMse5RyoQPHk7GB88gYLEEY7snAWkkPwB2XsY1umaYvXum4R",
  "key2": "5Tctim6G4EA8573aCbKVLHS3Ap7MrMnLGPxWvEdCvzkcbh3U8u9f4B3PhgggYZ3LeAyiNCWG2XT6VPsbVMm3RA7W",
  "key3": "2pNUB8BwwKdZzSr6ud6uXC8v4BfUredou8vW9TVf5K4YHyd6H6ALUNE1BWpwZyQ7yogQMNKkYdFPno81gdZcxNYc",
  "key4": "5oYWmTrM8RqdTefU9Rwk2ZkZzbE8xbq4FxhuE9BHbuPgXUn2TsXD7okv16TxYRTDQF2S8r1ajtjAVajYBDLABFHo",
  "key5": "5Nr182z2Vk5gyRyfRCcq9rDzwGuiBUbZUPfPRSK8Mxd2GBK7bzUFRKTaGUcHeQL5tvpoJxtLxiP4Dm5vbdf9d5Pg",
  "key6": "59TihYpjTEinVQU4CzLQifZtU7fJjvezNQi3NWMGt3Qs8eDC55vjAvaaKKE9x7UScQCzMCJ6smBtdQTGeqcqVyjL",
  "key7": "4b3q33MsV8byGR3tpqGwSxR8rw5ggdUVxKqX8fQmQkdUneHaNSGqKAW7UoYtFdcA9rmqmAE7Y1grKCfPPGTQP6Lp",
  "key8": "2tXGvo65Aisi4SYAjwT6EDJ5hvTPep54bqRtTgfFB3j2bWVVdi1FTn9CHRi6F92dYtndhh3baUBWfyUfQeKdpLpA",
  "key9": "3NWnJfatJWNhiGivjF3xXCvvm9ud5ayi7usnPUtDDh35s5ugPcs52YHYHHsUg32kP2joBrX39esvPQphnzSV8MZY",
  "key10": "2cBSk14kn54JJCk9GsBgxVroXjZHQKQcrQ54sGE6YEHx4gYj1LcuFqXBd1BN839wbvXqFAycw2TUTdD4WUUtepEE",
  "key11": "ZJzf6hfuEkcjn3zvmgRSYH4hePTiyw7AxvVsAaEKmGx9cFWycDU4gC7nbk1PPBjf8LQRhyUiiT68GEuRU4E6xEp",
  "key12": "3r1FQPmadpuUkqrfrj8umqzV7v3f5nh5TLz4CvA15cQqPZvAGPaEWmhQRsGYjXiLdVoXcDqoYuiSCnjTJpjLErq5",
  "key13": "5huVrfCtiUahyJ8yjcLc5Rh4nGvx2g5guCRAa9AXd1KHS5mkqGdkcHWtT5L24atfNasXAqy3r2so6DZTuW8a7AEk",
  "key14": "3KZYxjhn59PrrvzNh19VUz7KRBuPLLUpNACLdgr7WNvrkwCpDin4FiNYYtPFFATFUfuQyegaMMxF9dvSDTJGCY6g",
  "key15": "2CXzTBfa29GPM2zuYzEDmrfyrx4XRTBDWZygGcmJszkXMqUxCJJs4tcdHVkLfRqfaSJhpiYyMMpbKkypf39Arz7i",
  "key16": "53bguXx7wQrDN6rv68816npwSD2jY5NC4o55qGkYLjYx8racB9pEu8UaZEYPzyuZpA6oM5n1NBYjhtdworabNCVz",
  "key17": "5cM92qgQY6w3f6WrxUvTkeHYqespLhQPBLTyo2We2QCyN4bj5CBizuZYx6JWtcuYxH1NgPbWJgsiJJUjFMGZRCG4",
  "key18": "5NhVoPTeiwSmp6eiTSd4KcYoFxDAVk8ojHrpamb57BphXZx4iByqeAjygrP7FT41Q8fpKcawmcwgz7mCaxHeNvfq",
  "key19": "5RXLywmHnWHudiQPzDy3wK2Y9k3Qvzf6ybsDLS8LsQSuMVkPbEvVtxUfymREspYdTwUmsM11iaqur9bfU5sTnBQM",
  "key20": "2UcjACa3d59fN9GppJ6kYn2Tjkg2skUYMohodr5jRhZxnjmGbsZQ4DYRgAH9Mdnpgs2ENhfXwzyJP1fycU7FvFJZ",
  "key21": "3xRP3vgb5rodEb5M5pm8eN1PPafvCkCM9QUAHr24ZktVZgdLJRjz1XFMCdXrGWF2XXwNYhgw5cjom47suxiE6DG3",
  "key22": "YZKrcKqMR7P9nR9jwvRjb2YVji1s4qHjFQZ7JDnsXt4C1CBx1mB35gzBY8stixs3DCiGUbT7YMRFfGRmz5L5ywF",
  "key23": "4K1FRVgJd1qv2d9MgiZpC4v7r53hBYcfao5cAnfqtWs1XALFa6BGBLiSp6NKaDWS9HbfVUYV9XyqPTJydHZzCRKC",
  "key24": "4vnkHxRXmFzH7aHyCAcK42w9sbUsfK8c2isycwp3jT1Cem4EwfmED6oq9ah99zk61d2tHkdcEKv1q2oKn5ynuf7a",
  "key25": "4vUKzKooXwjD5YRnRH63r1g1fvtEiddDHoSqwmBrMnLut2ck3dsGouoLnzSsixX5sKWjBxsBzSN26z51BxKMAtAa",
  "key26": "StzobfbsBSSNaTYsAHP7q3mLY4BGjbFhZKBWYU82WsvcDByhQJuugwLciPJx4dehjUsMyQaV5KxMT6JpXEKPm6Q",
  "key27": "A1mX2HsYCcBNWs3WrBBnMn5fPDnsUx2AxPVYYGRNBEpcDffYMnpgv77wUPHA91jmpXw9jHwo8MA3vpzA1zpU9GV",
  "key28": "4DLjGEjLAchzxboFJA7MEMBG9kL7sUjb5n8LkmZ2fhYviVYduM4faiXx6dzUUQsq229nwfuXu81oktNRV94Cd9WD",
  "key29": "4rak7DXE2PY5hSGwzYpoufA8eZzarkgubrJwmaPUn95qqxjijdCN3UhWGf7tAZ6Kriypa5bBFmJyZ9QUUzQRPH2W",
  "key30": "4x6YnhRX717zePaJAD5dtLpX9qgeeye9YsignkujaYmBTjwCrmqp4oZo365uHHs4gT88KsDacBEcy5pWhN1ZU1mU",
  "key31": "36CQQyacyPmzyQaCHcx6WU46oN1D5wjbhBFR9eRHvWgPtRbDmj5X8K6rDoWBsbtAzKZUhWKGa9fsJHZ9HZQkHCXF",
  "key32": "L1uHANUEu7N2h33WWTNH5opz8ridtcCeZjP4Sv6RbbpQiXpmsj6oUvySDH8SrKPjrC8xJQH5spRjPvbsgURt3gA",
  "key33": "5PPd1WNGHq99cr5UZ5Cwb3vTTzuNwWfgpe1Vv42gEmzpKx8rUhF2faMLzNg34tQtBah6q2JZQAZ6AHi2iVMkZaty",
  "key34": "1rd31HeUr3L24APZ7Z8wDYuwaYDoAjo3rNVrQkhM2gjvgsCNSLCwvanLkKXVfswxstt2GHJUNiL6Vm1SKUuJ6ND",
  "key35": "3wB1hgCgKgizVd6NSjrDRziUYnezB32msK1F4TYzFP7Y3cs2cZLQFSkRrMWMzqpxK59PGhpBAAQ4sbHTHTsyMZQs",
  "key36": "T5uaupAZdRaVZJ1BhKqvDGuS4TiuAAf5tXsYc5ExjP8VqiFvdcFyrpkdC5NUJJZ6dtsLvYG6bsSo4CQKwPYVths",
  "key37": "4gpU2CbhMvDsRrJVFaGN3ovruve6FxQ36TFNH3iC66mGwMqpPuSQcqj3Wn6TW9J8nqpGfMM4voMXWK2rkfwEiUkx",
  "key38": "5J6gERWLSHWPNDXhAUgN6TnvpSUXZWmBfPUSSXFj9UPrVBPyCvpbSrmubHxXUmxZ8tACRDW7ur8bnu8J93Mx6Gut",
  "key39": "1PiA4rMfRyXhNAzTRzLYNk3e6fM1o7HLDjLbZEP8eNxGU5XLdbgZ2NDbSJyC7bMWLHdzKcspyPbrJkeb2YYRaTv",
  "key40": "4UvoPn5bReYEhyNCZB61JGjgcu8GDzrZEjdmVozYWPjeCFuwJYKYmCYZtVnsKdiiUEcXse5RguWaFUszMwagbL5u",
  "key41": "CT95s9TazB57SHsjCxkQwYM79mNujjrAYgCWLXDe1XEj4KKspZYecJCCUHmhVE9eps9J2AiT3CnFTdmJJSMQMat",
  "key42": "V8WgJtxk3z4y7ThTcMqLUKRXuotiabiRRTRQ6RrwukUEajPcjjcP9oKqdAChgNzYh4G7GvRqhAM5UnfqNpWGuX6",
  "key43": "4xE93HrT6EDaEQyhcFF1erAnN7yf6g9mzt1t8SATRN5qEngAkMBuGokyKDXc7vF45opQCnuYcTif78afX9aXa6Yj",
  "key44": "3oSP5vTcFjRHDc2sjTQ392VGpcrNHqKSKSQ3h6T6YQEmPST7pmDHBhG22AibUaZy18FFKaTcMa1NGRuxAiZ5LSDX",
  "key45": "2xGSm9wiZb9FhXwFZNY8Bqh6FGDPvZZfuQita5YhGbvo55Ac1P73uBzKTYNSru6Hsqhga3MmEG8zjDmyTXWpUe4i",
  "key46": "5Btt9pDLdoHVB9F9pZcnFBNFSHmWRGt2uCReivPQTyUwoQXmGUJZ9rSsgYUtA4fHcCrFSvtM8tdcRxgkU6NZy6x9",
  "key47": "ED7bZxYfgLRZAAS68WNKY8PfuGDhTUMRSmNQnfRvGRyuL3obf98SFBkr4S8m4GBR2XtKNTPsmW9rABVuNuVUMg7"
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
