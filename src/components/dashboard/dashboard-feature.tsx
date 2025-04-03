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
    "3S3CA3UD6TsGnPum9HE5pbdHqy2Dj8oYvYXdAj5RUQWJAAyUKx19UBSC5oxCJoc1HXjGPr6hsKEYMQLTfZGTzQX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dzukq5BhRjHcnDDhodGKPZq8BeMBjaU6qUMGgbR48ttsmxPaSPBmNXMfFWhQ3SMAtkT7Hg6UfQtJMT58PhU41a",
  "key1": "62Vow6GeSAquiq38Tsp4Bh6XuD6nKcAkwkygsd8FxYAZaV7rroCVA2FZvhpgGwzDCEF9Et5iUKwKeFL4mCXPiTfq",
  "key2": "4fwWUxvChQxRGmUCxwKHNx6WL8eL1ENpi4UrJnPBLPPU7NYXSHZJPqsPqkRyMrXiHjr8rKz23VGEGAMP2K5CttfR",
  "key3": "4DBuyxEymeP8tobxr5vaqTPMn4UwSPo35SKo3s75MfPREDhb25oBCmmGJ7v5JfNZGF8yc8qZZSvjmDfa53dR54Ya",
  "key4": "4JwJgVis9zmcXfrTSRhRvR7yDNfLffdmDzqzaq4NYN9xbBoHLnWy1VEJhnYnYzoh8MndTSV31Bu5Sr8piMJM7oGp",
  "key5": "54V5PSM19AobqAwmGGKQnNMXRZSvNyYuqqttoK9H8riFp7cZuBQaj6aNLyDCJ5g9oTLEDQyHj1FzbMaF6rTXN4Hj",
  "key6": "4jAxRGMpeuRRG89T7birzvFsF3CkJa6S2hpgUUDmAo1LtirK5rbCcmCGRL8fY4aHPc5m2PU8QHRkeAe88hLjEAsP",
  "key7": "3HAdzkBNWUoHzzrVhGUbV8ALrTjiozevoweKvv1jtCi7h2WrBEzCNQX6gm5jZ2HjwBmXxMvWCyCMkgW1r5KFGL8X",
  "key8": "smCKnV2GZLSbG4qUZpa7ZVeU7MseLcmvWqpH4VHgxjsyVKASES2D8EjFYA4fkqTYjdj9cWTwQx8nJWZsMBytfvL",
  "key9": "4CTzwwMG2pj4juop2PkrauobiB6QhiQTt4MEKpKZRLW2NqSxWQsb1ZReYn36a9zHiYTJhj2yhBAbP45oTEGjbbAU",
  "key10": "28R3MfKW5aFtr3V1JTvv7APqdJMhXMdYDvysDdNYuMGH7Pjwu9Hj1JsPhRENcDR6FJgmCPEFaXqNCCHQBwgkAVqY",
  "key11": "4CMdx1BfDyWLPjb5ccckjfpH3QfwvunzEhS1tYaySBbMy8ynkKZ2H3a9KgN4dwQsKPCbY6hCV15CgmuqkocKFAx1",
  "key12": "5UFcDdyhHJobSfWrV5szw3nfNkyeFWpJTn5ZLME3hFvS3XuNqsZoxaaDW5WRGsSdYcqNgDHNzfmn3EQnAgpFrSJx",
  "key13": "3c52mh6LvrCJX92sKDKuY1DxKucxjwZgQJkLLTs876jF5Xen8dAVEt479wCfBz2h3ZQXkQPdm7MY6nrN91SRF8pS",
  "key14": "fV6aSg6qvv2sn5TcsSMvsmjbNG9bdWTjD26AtLVe9q6DLpu8BAF5eToN5daL9WJcXCLnKFQkHm7QcXyDCoRvtTN",
  "key15": "2769Wcn2andWnwwkAY89qVMk7hjPD9kSS9iwbRs3p2QuLM7mfgPMQLsEaBQ9CqpAQ92rD8EFQBS5aPmw3AWjjgAh",
  "key16": "2C7jDbN6avMeZv8snRqtS9JkA8f3LfGr3dGD8AN1vVMo8wC1wavx956mGfXU52sySus3JjtRKgoh7Hcai99XhvxD",
  "key17": "hWZafGT94Nrd8A7DUXEVJ1UViJqbSgVSBoRtCHXMvfcbgBHrU46c6Z3hhBUiQsiUmfgad9HgZYzvqdTHkPxSafb",
  "key18": "4yMkowdi4jSKGMDPYYzGWYc6Bm44xGq53JtxEp3it6bLoNC9eXH9AJBbbAD8tbFsvUUNVqbwSKgPXvHdmzhgAJm2",
  "key19": "3ihohRuorYddAny4Ky3FFMTvvydeQKd3cqNT8K3kzkDhL9HdPD2s7yaDzyAPCp5NYkvazUTi6g7tzja4riiz23Mz",
  "key20": "5kk4RoPSApsak8ENvWuztcbk8ZVhrJWNxDkRzzyY1wk7aadmoWDSpSVMfp6rSDetdoBr6TKfWtnFHBZut8nL9wFd",
  "key21": "3odqU8De8XbiTuKnFtEiSK9E6j5Z9X9BHX2YfNscvP9RczJSPLNry6fyy8yaEYi4A3vmWeyJ3FLp6G4mapgiGVt7",
  "key22": "53iCDfTuU6LCwsFXBQmp85JUcbwU4ec2S6dhsKkLbvh8Tw6eUpHQXn7dA6KAawD5ejABMKaC92r1gWhWRMpcsmEe",
  "key23": "3NKsnCZCN6dd49usoRonsURpq3Nt88Mbt2gQxQr85rSQbwVDo9QfwYqmWHVUjCYPKFvMh2p8xetDXtUJVDTiY43T",
  "key24": "66NyDq2pbFWCm7YnznDDMcggU8nSFSedEuhuUdwuTwWVUL2izXwZkvhEBCtbe1mmYnMeUP48yDgGiximioLRQr28",
  "key25": "5Eo9TgnrxQDGc31Fk9rbKWw89CYo5HvXaBs3xWq1yz6bESdDBFszUYkZG7t1z2HhXm5DB2i6Ft1Tc8Cdsb9y4czn",
  "key26": "3h2sQXp1oioXSKi3R6aesGyWok5kPm8dS8f7AcBtxTdz534GTFJfW9D7vmosgrePCVAPX8sekAtrRR8cj4m59D5G",
  "key27": "3p7rciFgBGK6LeMqRFFKsqAbp8R6A3382Z3STifGBQVENSUCkRFKxWYQyn4Pt4ZaVJCWeXgvhL4VYVdMqJnTWbg7",
  "key28": "2yHWQn8P3ZitwctVLwb9ReQcUTRZUR2dGq37bG6JirAmwFLbNLAgsYzemvMgtrEsy3sx8p1UxPGSdCkyetyvgDyf",
  "key29": "33HyJGpnrEUukBaGKs49gRphqpx54mTMX4KuJvJDyfHP5ukFM3Po855umTkULXbrWwNFLYEHNgr33wQxqvQgvhHi",
  "key30": "3p1QMBPb2Gd1BEFy9SQj8PDmpYV6NH7Ezsfv2PMQvKjCeLjoHHFnJFSwWH5JfyWx73qaBK2YMDnUByCRaxvMK5Zm",
  "key31": "qLXWV7ogBZFBzieu5uQv91MfbTESjS4C6NsSgUrvsuHNrAWwNzMjHCGhNRL7TtW3gbE7CTgm9iWkiFkMtFvCkyZ",
  "key32": "385P1LH2sZweZTkk6UrxVbhXX9r1yzj4GUf1MNAT2JsRFoUpENNW9Wzt4NggtThVHq1cTrK9LX8x3ewtKdmpXs6X",
  "key33": "4HXWgKMh9jyPhrsdt3aAD18qMMygPkDDt6cSLadV3kaCRwAQyJgxqCgfshaDdM7sjSL4PCbmHEa67j6kMCQx8PTG",
  "key34": "3bMgqS6JKCRLJqBss7RttwMYcQ3YBgDRa5LzfYuWDrthn4KtbJdc9enPyAscJv4L8X6gD3TTWZinT1Gzx2yJAa6N",
  "key35": "5GCQ9SX9u56Vw53puvxEg2c4bqfJgzTqdfBEAdEoHppf6ivZoMVsxQiqPhw4A6Xn6QB4injgR4xJJ1RuyUt5jfyh",
  "key36": "62CXgFtGMkByqFC4d8jrWN5SZZJx8EEodmPfLiVQeoWDxPVcTLfu16WzVWh1MDiLMiP3WJ8CQCRa1yhV9xjm3t8P",
  "key37": "4Rbvzhcr16jHJVPYM1viSZHTFKB4dxU8ZFMCA5Kzij22hU86XympH9xLiUiLB7ZiEBQnixsGn8HBJTZFgQU63TCa",
  "key38": "2ZznWp3snJ7VZYvkphAYvsJV1r1edJJi85aRC4qXhgFC1mVptrrb62S1bnhbNk28hifJp88SK6kh9jKLsJkPhEX7",
  "key39": "2ryMLzBo7XDXiPBn8yN8hjgs6PMDid9fLTTKWNgSxR9GoTiJJNTxKRLQCKyE2soZPmHLKEvPT1GVwL14GmZvAgNx",
  "key40": "4EQSrGbLiQ8U8w2M6v5G3Mj9nLXdp4WFKtev7hSaTJZXMUVSxxCzTqDB64QfWe121KrUZG2RuFLLcRVFG5gqtzaJ",
  "key41": "5Aj2zQKdKTe8KKufKCMrKmxBi7jUeJqyks67KxFcJCYYNwunCZ8RPhv2KiKeuztxY6BFieFiga4uNMKqpHMXqz8Z",
  "key42": "28k62U4pzjg3zhqJVsVTzs3dANdPLpEm24C7Ca8HeaTYw9pBKSht3yEXHPXqaBkehjytC2g4xtSAXTRttmeT1XTW",
  "key43": "22HMZBZSmQdGe3ZGP2JeG7tVnpfwitADfZxVvyRGKTpNeoiN9afiKvocbHEBnAfstgC5E2h54vNHzLmscq5cPKCQ",
  "key44": "4QDiMr8z8opHV7zCWQWE7CtnzK8uZzd7WMZLaode97uMAwhicFi7Tp3d9L5oagZF5VexwpMmx6DD91rBwyF4RKqK",
  "key45": "QxhrXN7BRV3AgTUzkogiSCXHXUnrfj5yaA9uSd87eSVJih9H8H5UZdLAvgvZDQHmZgw2zreDf799YX6LnfuHxZs",
  "key46": "3bpuDZexqf7yvnfn7nUZkDRTcu6Q9wVLRkp6pCoScymmJ5SU4aTXnhniArjamq97btnEz6Vu34Vf2tqkiJEGaMD5",
  "key47": "2CiXSH3q9btruHkXd8PVcPKdYAVgYBZJZMwUYkKNsfXRF1WLQxU7JhsB77Kpw1mgnQnfZoUwaRBSbTNPWDcDkHCy",
  "key48": "4D2WcyG5U4nojT5Mm52XJNVmVfyKNKf6TrdR5tjNkiBvBPWs9eYhnwxRZ3zmihpcrDLJJGQhz79Sc8cwdfXFJT88",
  "key49": "3d94b1UAofXcvPrA4rdgS1BM8Y6qyXxx7vYAAGQwhNZ6Nqd4j44GYuYRwF4e31cANHXZEKVctUvwVUH3wuY1Ufbz"
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
