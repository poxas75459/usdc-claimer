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
    "3sMTAAf7q92beA3uwJtkJaeA5zd1U3hW3SZ1SDa9EcUMV1uu5M6KsJP6nDBYGrTN2TeJ6kYbYpbzY3WG1USF7WT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MBzSyuozgMYr8q41YcrDzdhAnyCro7hKJT42uqmGVdubTRyzkYYS2TUy5vsaJ31k4RN5yDXLm5ALPTES4gqCsd",
  "key1": "2QQQdGdesuxXwG9bdRgEQ9JD6QY6ciqKHeVgrP6WTT6YnV87H3grtqsPYf15EVeBWusz5TjGpwfx8vd7Z3ridjma",
  "key2": "4VM9vrqob3nXmmnJV2WS3hN52iTb7HesHthdJndgvLiH2FDbaLFrKhLmd5AnoYECJJSm8fxajexKjTa2z5CWwvDM",
  "key3": "5rqh7N947sSQdUF4ZQrox1WP6mXtjirXqsxUW7zrkgJUT1qEs6gEWtHVoxtd77M11m8u8gWDSw4hokgFKUyYYUnE",
  "key4": "4MkE4JpDu3sVMpML6UA44NQnvP5UUymSBe61pfzp595zkLYZ97KrnGW91bcNyqrRw8wnuZh9Hf2tJbWEprqJnfq5",
  "key5": "2yMviF8KBBUbJMmJi71wXqKBFNihcXLcG7Ra3wkbxvbaR5Z3HajaMW57UPAR9fYoeDJs9wdmhLfcUkFMNKJCQuba",
  "key6": "36LQ77eygPeNRNvVXky82hRVJCbpNya3pdm9HRDp7rMDMKxrtDSPPcDZfXse6LCpGENZ9PUtnKxjzxwtGSZi4Ccz",
  "key7": "4nrcrGE1e3CY5436uDfrT9oBKbS2YUVm1HQwMrtkFvpNWhvmcSgXSViLakwfJuenvqYsxMD7qetP2bCcocUYpSi2",
  "key8": "2N8FqJzL2GgfKSW1Phzux1AfUa9NpefSbmakF59qo38aZJt81SiVVhLsWesbhjNqPmj8pQAc7EGTezJKaC3ZVjGj",
  "key9": "RjWmsLjNAzRHfivXo1knXbreGTe3eLLtydqnmVfGRkDuvkzCJBhu13UNcX7i3LRdsTfPUSJQ3twSGT6FCcnre7B",
  "key10": "2AeDoRMLKbzDjEV4qKYA4WNV4wjHssg7RMnRuzux9xcLzGu15AkGp6baJZWfQSRb8tebX8YjegkFBiWdAAfSNEMs",
  "key11": "3L29aLFKqZrZFfXPmUnEsu5xd8GVpzsPZxHaiFiH64pwkZidkBJM5aXqUWiPW41uZEojEMMfUkGNWeEx8znHYGyh",
  "key12": "2fdgyFnNnpRa5jWWLjk8bvNfGjDaMp6C6MpBYPNcY2H8vP96rWVvyKuXJiaFeHBnEko3CjypCHRGH2oP3wbB2TUk",
  "key13": "2nLBtw6yYtE8LnY1sZnZCYMoWRf4MUPm3pbDvKppHfUdkAytPWyhePx8sNrxSqppMyQoG3Dn8fq3XVm7f685hNPP",
  "key14": "5e4qkc4apgvGKg4vwRFsrPE8H8wLmXuQAY5hroPLgrUJEHvWviwwVhPWJDRvqfLBe8wAvwfXmiLiyDvs3HQ8HLDu",
  "key15": "CrmHTvQuNggXWEfWzgatfaPhWa7ipQiExhKqRCE7y9z4eaiC7Wr9tFGcmCh469bFbSLKiV3Ci4fUvsjwgrDw658",
  "key16": "2iYt7itk19HJFHYeYsm96vJezpWix5mB4sHiiAWQ65hkEESJnQvCwtPNn6VoaCBMsfQD4FafeNpNDVGPqxdKivCy",
  "key17": "2NGanofxqiaQ24Wc6KrVb4AmNvuR8hQiPhCaiD51DPe1Y3g5cCQVB2EkNNDKqLjYErERHiuFK9g8Jgw8nvjXqzov",
  "key18": "3DekZcWQJQCZnxhhuXjJyVhsMLUKckUhJCQT7cyEitbb2ioQxSnSgJSznCoh9yGqJ17Bpv5gLaoZt7j5fyvAuRok",
  "key19": "49LvRsMjEwwMKG6pdsKz2HWzyxQXP14odzzc9XRZx7oGsXZpEDp4LJhj9DHvkrQKaFyijPsFAagHnvLep2FNT5rd",
  "key20": "3w3eaV7SvEDL3qwFHCTbeNLfrcTcBmH4DMAkZ7Ccfm8UdvJnMDhm9RWaXMcvfiTUrBUboPJC3xSbg28rYuBPzDqt",
  "key21": "3eEdc1MCbP7jP1gwhKH4LpNMgY467sZ9x5SpKf6FCNeFPfWQREYfQUBksVtjEY3EuKf79NrUJfXz8uYKfvcujCAH",
  "key22": "4Q78HbgaB9k89nDRTgBeGmM4EyDPVJQcDQfFX5nPeZFzA6JKqXKUTsb2TT9ys12Cxs1ctDhizxLhqAPacgrpLAAu",
  "key23": "3Fmv4knnQ4iPTrYzHu5q71FbMm35BULox37LwaRXNyLmh1sgmxp5tkUBtSaeLngA1sAyzdDqQpMCvpTscudkogHa",
  "key24": "3zq5dXZ4W6zK3KYf3pUb81V8qkQ7ba6G3MvJXkRseXQgKGP2n6TqFAevWEaXKmsWKo4phSRreYRhu1pVBwUB2PTV",
  "key25": "zwsgWYRCkFDi787yHDCsk2WqbD1MUDPHNALysBT5cct2XHVYMtk8P4huPhjAYb8Pe5VWrud5gNZywyQ3PdzByVe",
  "key26": "3QXXghtg4HczQ9rhCNfuJTkNJ7JwSbuS2sPkUezhHoZEL9cDDBuv9gk9QppraoChgeqWYMop5d2i71P3LkjcVNgG",
  "key27": "3tFGxEmEwbLrMz53StNepi4BAjGzcboxt9r8WwKgZSwALAB3onrkhmSo1fH6if3WqRVs7TKJz7zgG1bWGAnEMmQY",
  "key28": "46UAMZPAKaKBv5BZnvnvbcTgFZtWhdpFvdm6XZsedAMopn7cMLTjT8RDShu3VLqRaZgUfDTBFXCcTuqdSkLhnCxN",
  "key29": "3YiMHAKuC9z5YXHTuaGAx8TbSH5BhSGPRCEAbVJE334HC93yVyBVN8J5Ee6E9UkirmH2KaNXk5xZFEzLscosur85",
  "key30": "62K2XPfAKGtxp7yjZhuYtxLwRUG5cCjaCc9FPc8MPAYC6HK5vbzQBqN8xTECS3VusxWArPniycP3uV7BQ3gWWScd",
  "key31": "53cJcHrvCfjhnTcVcjm2HF7LEa7w9rCb4yakpgGYYhGXnRxFJbM9bE5Q18FMjJuzUPwDbjw91cmj2TevA4xrG7SB",
  "key32": "3fDvFvTaf1iGSC8MY5dUYMJSrCA6E4FGCBD9nFfTCMaWHckXMRJQHdmwXqMyyyQ8mRQyD425M5bCz9rBcAmZnpJv",
  "key33": "3DT9tDttCV19MKRsQTFiZUn8Raztbi3tmw34PWeryBXf9sdSZtsQkJshzAGM2UDDgQaM9g9m1AtJm1ty79hcF2q5",
  "key34": "2bE2iAToWZBP6Mm8eNMbhEvYyWhY6GtztJryEmbTdajotgJkCJREBgnCYhMaY8LqUexwysXUaGi33YN3Xf3eMcGS",
  "key35": "3oBjYpSyrrsZq3trqRnkTAQE383h9CsSYcQSMuVzFqZxEUfNUJVPJRHVRQjn9g7vVNk3tBqdjUeRYPi9h84mehCH",
  "key36": "oGmgsbBuGYEsGSJYYJ9XQ2ZnnZtHWcRyc4AumhdDFbPdHfsLUXoujWHgK7yAPagupUbrhV59vFHq5gZxLcGjSsa",
  "key37": "2qMoLTcTwQQdbfUCHH2bt9WxC7Ai2K9uC4yCYdcy2Nhqh52fBfBRZepdsv8QDvo8QN4rRtvvkvDxafgC2W85iPwe",
  "key38": "4pxwkKt9qPZzapwqmRfAE6knmaGeU8avgjoisQ1F8md54NukbPq2RjaFezQFDhHytSSTQGSaLDRevA3AigWtv9R",
  "key39": "529Ve6h2xHEomZ4jtCbNRLuBsyUaiV915Z1PLahoaNGrJwM1ECHeZvz1TZ4q1FfJDfSTmJt13Th174XZzvnmzt8U",
  "key40": "kP2jwbUKSwQ1RC63VfhM4gbacLFzWts7LKLJUNgHE5jhgMZFRtivf6cMgQ3ENQPHoZi2SHWrqenPyvVUw8CJvhB",
  "key41": "dFiTCs5emSykPuDe3uiNX5ikuR9w1cpgm2oHZmLkbKD4WaXjW1gXdEae8sqYkEJbzJm8zznprJmTxqaZfNN7eAp",
  "key42": "UKB4YV2g6CGBrw8w5j8KdsP6hkPzcV6unnDQSefSv73vA8vyt8Bi8KZtuAzJkJ7P6gS2Ae3YN7pSbDbhzkJimF2",
  "key43": "2uZj4QfRVukdcWa9EvwHYPc4Nj5auWxpn7MNfeSbFzFSzbcvaN8286KstNTvEvHqJn41uMRcWgUNMdxCBr9Hg3ys",
  "key44": "3vp6z7seuW8YqvGbeCeRC2c1Ywq6oLoUF2ndEwijeDinffmbVGDbFexczLKG5wyhzRweXDCCPNMvTs5bApBYtAfg",
  "key45": "2puau4bExEshQdN4UKBGDgJbzN6igd7EC9gx5jMviB6rLs8GPcZShsTLSJ25sxffBJUyfmbb9eMKTNGh6AL1vcAJ",
  "key46": "4UQ3SNJjttCRLqhX7UapkMqmWF6JdMmr9yCpKUkLReZVKRGxuro5e9L9NoF6tJf24F1NBcJi4wU3fhZNC1kEMbDX",
  "key47": "4DTQMsf7DSRusAcpqqgEWqQSRVKomPAZfbqrPQrqDbdikccHDG6QRp187PqsYnpGFMQmZsPsGyFvjkvDMrLqjzaV",
  "key48": "4UYGTXmWkCkuS1fygbw6j6FJS4DjcudvuaHLaze5v5iceMd2meTDWaSf3ptW3gyAReum8cGDCwBCArcWWXGhoqMH"
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
