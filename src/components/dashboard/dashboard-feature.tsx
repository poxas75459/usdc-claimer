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
    "3D2nPgTtAERj2DPhNyZJmK3ZWeWJNt4C5GNDpkrWZEKzbxz8WVVjeZLN3sZz7eFXc6SYXrg2R2nUBJdtRNoXEDw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x2zhkjkrqmaZesoieExZ5Km3CAmUpqjv1SeMeXYgrhUvECHkBdc2zH135gwicV81WFFPTHbznxC1fStPHBXnLYv",
  "key1": "yuNwyou1NASLHGRJVAecM4iUPa8Tt6deMxE25MwbYUj7NiS2CcgstQabfM9e54yRHDT9X4rAEdAajChoHnPx6pa",
  "key2": "49w6g4qGwwRXkoC9pf6Fa4u9mxVU12gqGnGPsANVQBqkQ2KyjH56NufNrPQpWGeZHsgUmswF7MxudpEpT3ptJxKn",
  "key3": "4XhzdhgUVmXTrhxfNsMSXooNHBKhVMcUm87VSoJVes7ei7mxhTQp9nXN2FrgsKGPwc8ph5o1q1vKZHcwWgrEobfG",
  "key4": "2RNUW9fcXLLdsYkDknVpJFwhmYy3sodK7PJ6rbYZwQrucV9gWSBxKtSZigc1f759DTpzpg3SqFgGeLVmzGXfNQDU",
  "key5": "Hwojjj9Bp7BTSf4rodzZjYhnYgJ6URZiSAhCLAVCasPfUtFtfMm3JGJve2qcVic5JLaC4DxFoCVcssnG9XW8CAF",
  "key6": "2FZaYSTGcVriuYFsMw9o9xoGgvqPwHTWbShut7vsKNiPZi3jjxsdDs2au7BKPvGMm4Qv7xDsi84mksK6Kxx5wY46",
  "key7": "r1psoZ96h7PANKNCS5866m8emsvQ2fVWQRvgxZ5RJ7iQLSi5HdMHxHjho3N3ibH2oSTKmNveehMYMpFt3mTKmeK",
  "key8": "4WobhB2W7i9nMRhKNfY3sv29i2iu8tUvXH9bqjX5kr6KVigiEGVRd7PRuAbEPXFhAfNRaRz7Xu1uuimqY2djKdCv",
  "key9": "4EoMShtSpK7u497Vidt242SLjsncj8RKU1vfxaAL32jou3cE12nsh7VAV46SMJ1ByPX1xjygnLyWPvSLxTVesE7z",
  "key10": "5wRE6vLhjGi1EotbbqVQM5BMSEK1H5nKDtFBMUhKVsHaaamLfqdgfq1VW7VbFdSefxGB2ECYiFSwJgjoiKPDgNWa",
  "key11": "4xD9smt2yzCAhEw3ErYUroSfLFXjzDbEHmdNbAMa4gyzp3KSaa1eNygEHpXnCGM2zabKZ8CGxzsmPxHb8Ws4mnR3",
  "key12": "3Rf431gytYojc4nryxWy2Ry2Mgh16t61yWpkWcZc2CofhJCM3NCq7dTx4nxSrXpfxUfcwyxbycxfB2CugwEscmt8",
  "key13": "64J72Yj9Zk5zjo8BxdXdYcPnDNYr59du4zSJvT12ydX4XrYKqUivZDqeubhEsJE3tEFQM55AWPp2c8TTA15qrwed",
  "key14": "3wqzGLC83jP6a9MFfn8cVMNmmJJpNPGoPyT7eCp2b5AW8ezfUFDvixbNLnqcmaQVar8r6d3u1P1DL27kjYSyrgeU",
  "key15": "3tjWy7Q91eU8gAt5HLHb4tUHJfEakUmeyvaUxhKihBVoBJNoyBau4U6h9nxeGj4rm7fjcyZvKC7TBEqRGfBEoFqM",
  "key16": "7hMYPxUgjc29WcS4FF9wtQeWLfdU3CE75t3RPUt8YEprGJjfss8GANDnrNnCWhHQJnCTqtXJRKPTp4DuVUfFe9t",
  "key17": "2m1iUoR8ZhFei9XRfYmvSZNu2mpBUy9P3NDVGq1fAv7yLSDijgt8bxXhJdnPLL7dmrs9cwcK37UqhLrpuRtrwFQG",
  "key18": "3QTDP1YF1czEYjDvJdQmWTxU7aQ7U2gMcBM64c1Z9u6cYDHRZB72JnsyxdFhNA8LzzYNsQVPrRyDomaX4TiygVDW",
  "key19": "2wNPYZBcCpQYCWQbRdXMPkj2NkHLuGzhmepBZpL7hsJGyykL4g6UYSeYRvdDHwo1v1Pqm2oVEsjYUBVLbGZePhBK",
  "key20": "n5XeEBwUi4dzsP3cqFir8UMnr1qPfYkFYqS9KWc9FnoKDLU3kSsVPyDbrPjfK7BUrFc1fUuzjue6Ny8iN3qRve7",
  "key21": "34oc3i4sKj28NG4d3R4jM8zs1u5i64njyAJ3dBD94yPmpxJvnZ1pgcG7o4ndi4MnxDne8W8hQVt19w4MuoZ68P1T",
  "key22": "BH1sxRBQLWKvb8SH3xMysL5vtbxruSwe6xpYpCwwSPapWeX7QvqDNb6BobBLbBAcHaMCmeM5B239W3vo7Wy9gsf",
  "key23": "39p1vZkys1tJYxN9zR3wQBdnRUF5L3KkbEzzmGDQZ5gdsnxj12ABsFgUSH4vnm8F9eKvWusMhGCPzVsLfXttborD",
  "key24": "4GNXUQnLnWeZeY7TfmtXKS27Ak92pkRHU6qZq2MCfqTketkRKyeuSypX8fkHVvdPfcbkUm5r1VsDzPU3NhXxqE11",
  "key25": "VprgbiXNBPwnSuLA1UKWd7U936edH3nr1cVSHFrFKGKR2LnzVn1BWVkgBjQddaRDL2KYWrYtqMMNxDh28Gk1PnM",
  "key26": "2NKBC4X62FfYdk5AdYjkKP2oKQinRoFcwHvwHftRX5XfTGSxRvUZp9kqJish163nu5io8fr2HfAC1FGvgjcNTPdv",
  "key27": "446qUsm2zECLgnYi64LYU168y8fVS1b5zXrEmz94xM5H2s6zSw9xxu6iSZWVAvtBJ1QSgoSNnGnJpxK4TvDnXDft",
  "key28": "62dbWxhWU4tZZDDHbPfoTAvn9QovRpeazbQGj8T3AaSWddy64T15g6KRG4iCDeLhJWYekKGboqLrGdyGjPaTzsxu",
  "key29": "2PhYBQtuqvMkNQ1hCqqiVtTmpdK7KK8M3oCfQgDJ2dcAeV5XdZs2H2zKZGxVEHEjLJw5CqrfLtWDzXxUVdb84maK",
  "key30": "3FYf4BH8zcbv1jjXBLbJFMB2jVqsLiHVND6uiUQMpLqGdgCbcW2wbMgZn2ayz3Si7NnizQP4SmgijW3gfLaoNuBG",
  "key31": "27dywtavDy6YGJg45Rzy1H2PMxkKcw8PrANppMcSEyvPx7iDyT4JVv8FgLRscjSGCtg5qcqaJFGEUumWT8ftf1mZ",
  "key32": "3odKJeuDKqZhZBKXspvgFZn4GU9JzLU8PHVcXFtdiSZfcCLSgPRuWrqE5DSmhowVsyfVaj8wQ7PbfSEk9UTDu7DC",
  "key33": "5ED6fCrLHXsjzA295M555NxNZb7XTN3SDKVGTL8TcZzdtm75Ws3B2RaBFtWd1hcMAjcYiP55xkCU9tGAMAuDQJbi",
  "key34": "3z7sm1XtZi3hmaTcfaAfskkKtiFooncuMZDQdMukhCL2AespuQKdhHozGLbMUFqmQKgXX8EtWncNtidbBRFDqCoH",
  "key35": "PYJReo8XmZ7aedh7h2sjxpE3H6uZdL3d61c2Nahq5t3hp9BBU9FmwnsCVKBfxv5EwiLdb7rCodtmUufuDxhUW2b",
  "key36": "2pcJoWfF7YtyU1gnhFJz6TYNqun2gYD2uQU2tDK2jqJ1QR2Vcx3b7CMdwbAHzHXACw55dV155RP1eCJnUud71qVs",
  "key37": "RVmkppwUtyWA5sDSKEz74iiRNuKTmW7JUcfVG9kNxeHV6rVXRsiZL8VMtjyyUxZ7EvpkExLXMPFVD3jBKd61GDu",
  "key38": "5GHfSTJypG1HX8j2fxNxE8K924D4Bm6YA5rHnMW3GXdaU3MooE53kSf1DUc7SdKeGgbLnP3gBSAj4ckH36e9TeLz",
  "key39": "5ShZUtDaBmfmeiafTSxxzRpPeL3krz8P1bb1CA1VqxYi3ZMEQgZdStej8wfFw82rURYCL5rG3N2UK7FEVqMXzApW",
  "key40": "5MKqyb9cCRsEAusHzYrfLqm29NZPp3evbZtb3zCWRg7N7qWEbdrfSGWjorigCxVU3mCBeTh4oQWBbVbjYAYcZLZq",
  "key41": "crrL9FALgAEL6bb3aeUEdyvUwytEmsNWZcByEQsyDU1HnvpEJv8SDY8FW9LNE81TJVcnUw9v7AzpyymKbw9X9rN",
  "key42": "5WQppVgC8mRpgDVETj8FZNjiX97S65iBTCboUpPEiN6rTZK4DVBfvEi2A6NaY3kKFLXefmJV1yQ1ki1bhA87oA3D",
  "key43": "62ves2Dr19v2gspundxX85uYTgWefHtj8dHCEco3pmnKxGZTzCPGj6FQmb6r7AVX39WdJ4cBHRKmMwFYxRAaKjyD",
  "key44": "3MaBeVo3isK7DhJ58USRnAkDAJwX7rLgLyyozQvXB5K2vTnSoyVoem5SpdYmT1wKyE8ihUYPVtSUBdGxKQnK1F75",
  "key45": "X5w8gXY8uQcLDgPRNSv7AqkPRUgtekYuV7PLrV7DQgkYnQcQRJtStn1f6AgxdqdMBMCrPWWSHvnYfyw1Mt9YbX7",
  "key46": "sgeb7RLsQfg71GMGGXz2meaKvj6QPK7thzt6GLisEty7dTRqfNsipiVQfwEnBQPtvSV8cZyZERiXYFzCxyAL9oj",
  "key47": "UybigLhEP8JjTecPnnFw23a2YTEyxq84K1n3Qx94Gh9Yv7jR7kJ4P9dxdeEN2a7pqavF4iMiHGVnYjpRdDvn8Vp",
  "key48": "467p91KpZdd5iY6rPJ5BVVX99u2djpBwQ9qERfAFR2NNXU9Wv2bnyetmQG7vffEVNstVnqDHptsqre2gwmQzGcjk",
  "key49": "yDFuDeaLQRL8npmx4PM9XwZ3zyu9SMRFrLpCjwFS9WHTtC4fEoMfh1EZW4yKjosK4sWoX4S7nBSNyFCKr6VEtfK"
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
