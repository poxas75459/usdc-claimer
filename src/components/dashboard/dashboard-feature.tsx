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
    "2pkYfLy9ss4bm8LpxY1Z5ogULmDhwHttHCA9Kr9tzWP4GMb2Dv4APdEVquRyLJmAKN5B7MG7kT9bmynKTho6T4SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAmqZN9FnqDJnQoTPCy3wwr2aet9tgyT8LRTY6TLTR2zmo8FuMxCs1MpjTNJt9fH2AiBaUQYe2MAVUJoKY4WRZt",
  "key1": "25LpWEY7hykGKkysr83v42q6TR89fC9MsmHA93aoEdwuucVSYQs4ZsYbEptguNje4nwpav2kgbPtTeRaumc9gQyp",
  "key2": "8HJ6vBM3TdfAaAWbFnPbyTAxM6zCuJtihK1CfKzncKWT6vX62mc9tWGnV6qQui9ecP6vFgw8PzDfpjRKZR5qfNH",
  "key3": "46EoCBCWYhKyDHLczVGtBSjLK9XkgrLFvVQXttrkjjpbzARFeuV9XKnvzjN79YtxRVbdnkUQrknkksw48ZXnmVcL",
  "key4": "2M2BBUbhZPU2m9CRTMcVx6UXuT3LaWj6oecuYZYDHFFkEivrj1sLjDZtmcPsCAAHKJ7NssCHyS8rx8r44h91Y56e",
  "key5": "5H2t3TTrxSQ1hjTsu2s3dvRRWsCWCwCNCCsoNRQgtpqBxUiK72Fx7QLaKrmmcN99ZhcTVEEemvZCmHXkqV9tZWsr",
  "key6": "3V4zjbHX2Kh4c9CwhbbDHU1sbyC3yS55oJSLZym2dXnSwoBXqfufqudj7ZVdGz7A62nZ2371amcokNTnRyktwYgV",
  "key7": "4qMVBoRzuwby9ck3iGy8yQVQxvPFW4DYUrorPdQ4bSHN8dYVXRRDjCjrx5NDQuSvsCHvSH897ACArSezzTUen7Ge",
  "key8": "3VoLnvb3TghBcJjJ8J3khjuv3nFY1Muzdg7yxMpwWX1PowHtgyUy393nfa1YZ4jbVmkLoWWX2ivEpDRxnn9e8Uz9",
  "key9": "5hp8ghJT6V2hhafWmcoTcpakXmAZhjaCayzmzPsHtm85dYVJuaHgDyELNWMqmLVv92LpXQPAeySmFLNd8mLxe2Tc",
  "key10": "3KsGCX3Po69ejcU6xGBNRTWKUXMDZrEgCSoWqnGzARqAgBsYDvK22ggW5znk9X2VogARvmV46DreUp5JAd6o6kJi",
  "key11": "2qZppxMHQMch3CaAU7sN6qxMB6eqSuaHj1rfrGSWEXR8pq1aCipKAPebHeCNZuAyMxELyzuGx6GeLr6jV5M83z8h",
  "key12": "4QUpKk3PwsJS3bsr5GetKJM2EYZbtPf5jmtLzEFYLNBxeauLUGYpy4sDiJwWshKqLgYPEY1QFjaNuznzVWMwm4mv",
  "key13": "5gsctnkPa4CwjGSoXWCD1SPLQGYaNQnrUbgwB7ugEFP2bj6siG3UkkLjmP88ssuTtdMAWosY5wschFU4YhJ1hDnR",
  "key14": "5qq6zJ2b9fTL2jaJpPJk4grfbNJm2NDNSf9dv4FN5cgZN1ejYKUvFTVpU43DytbBEofnWCNvRsJKnhuQzAuQsWSD",
  "key15": "3Y1sJiLVBHVz9PboAvozzztaF4cxzgTSvAHHK338ryZ9vHW4vERrPs2wadcdpd8e1A6ANVtEhJCBA1rMX24SH799",
  "key16": "4oCnPho9V7zPMc4a1EsnshnZeD6j6212zBrEFzfitdFcPk7vim5rUgNVHQEsSSDCF1Y2sb5XgXN9WGXPxnQk8pjb",
  "key17": "rtmVhHiw5QEFxNwdhWUNEQ8arSLmGf4mA4aXiMHtphMhigE1975kbhTmhUpSjmV6H8xUmexcWVDvDqYAxTtd7U4",
  "key18": "3M9oqa1b3UZdmqDyEZF7qUrKo3SfzuwDVZDyP7TZ3ugxMGjTVtZ9UznCTT5M9wWfnUUeHpZAfCN3uRawdnazbE73",
  "key19": "3xzw5giM6KnVq3NcUxopd1jgKRCHVpcocp9v95shSu7gz7RaDGMEJYQqGBxsC9WHvegVf7Wq5BJemq774xhRJV4W",
  "key20": "3ZJAnin8FYwfws1xnTpr1BS7uymvTwqnDKkbXfmkoBSPM6WeouSYEU4xEkcsfipWYyrVN78p3z64KoEyJG6g2JAD",
  "key21": "zZ8GAxpVfFXkr3NGxs1iKEuYgqFTFGry9HX9joLxdxvpwciZUA4EoAf8PjP3oymp9WcwRPrabRmdkfo7po1YKzn",
  "key22": "xQyw5LRCSfLk8s3zmbFLiymJkskEYWvCNTMC8JwyKZRuv761omihorCE94hGdo1pgjMV1H4RkN5GGmLtRrWdSus",
  "key23": "5o5cHPHFi8VNkk9q8uNfx8xQLbMoA11HYAgTyURCBHENLromXyqH7orY9HcznzEUUnsSY2ciNhAwXcdzsUrMfgqQ",
  "key24": "2naP1fJLiHwVeWmHaSNqGuP8BfNzcTZGJji2MsbQ2BAGEDJ9V352HqwATj6pKDBJg7RUmMm7ySqN9XgRfMXbXYZ",
  "key25": "5niQsyyyFcpzppebnE8wdhXdve9PQDgYzx6sZHU8u7quw4ENrYGPEMUdjHz94KoEJUnQ4Dzy7vUrtssnw9j67Xfo",
  "key26": "LHuumTZqBC7fno7a4yS6sY6EVAr8qNECaCBGTyQtm6ruqPTzuLEVFTbiyWMPGv9DzgdC5bwDp1e39htRogkzbUW",
  "key27": "41pgQETGi1XAxSiDi5YzL8DerhJj49Y5QsKBx212G6MGPhB63pUwGsZ4LPKUDZLoSCUDQPAujiDMwZ4uSUAA3LKD",
  "key28": "JwrKe7KfLaFyDLU3gP4ejarm6WhHGiSRv5NDEcwPBn3kwpzvi1unrtoFvobfJHDU78KQjrqo5ZHFZ64U6bnuf6P",
  "key29": "5ZJ8PFnMr85jNdWRBZ8xqjThFVcXUaLvZQEndSmdFLbwvR88te1zmrU6bfmyhoLfvbTdbbx6toaLuXtThdJGbiJ1",
  "key30": "2KkNoHQLaZBrCHCtZLtjBUh8o8K3NvcvJYgzGg9E3Vj9QF6TsWM1mkxzvtXeKeofUBgQyLNjiRuY9Y4y8Q7LkUA6",
  "key31": "2yiRoYzM6yr4tmPKhiDaD4NX5KZsFqWUBrJsxxxTV9ag6RaTWiBbmDLMbKanw9MVmAhewP27HCXhs2FkqyieRnEp",
  "key32": "x25c7K8ZgizSkfHZq39P4WAEzKjyBoeaFXBzQ56euUheBv9XkbXeJEQvtY5yiS3kc7YRR6L1JXgL12pSWdgGPN6",
  "key33": "f4h8rPA3GPWCgZoBuJRVK7HHSUEBhjsTLSXZXytt2ZfZvUdvJsxTeqEqMtfE82ur6daqUJQ8UroZnirBN2pJ21R",
  "key34": "VESeTznqaK4sVC6xaW9Bg4CCh6Cw4qsdP9dqefvX8LZLBHtEGpb47XW7PzrWdP4fDcWNeCkGVUXD5S1FwaPnjKM",
  "key35": "3c9jZvyDK7fgKof44UWoxNJ8pVPLPhs7jHbMDumxPJuJ6kChJFMN5sSWzKiDVj35nP2pNPYhvyerVV5Cw9Jbxwqy",
  "key36": "2fCDanSxcc8h7VkfmwoSUMfC6JWPqknSqbk1Kz4MzZzoJeaZdFUNifBYKs1Rg3efZY8ZmPcLhjzYBSnKTyk5fpoQ",
  "key37": "31zgfKGtCFvRQAsqB3nLYpY62Pb9QAM8yT9NhWhmAw9ERAxiuVBudvCoqVW5E9srxQWfgKH7vZDnA2scNTgd5g2",
  "key38": "RPESqFkqNxnR7RLVaAbsZW88tSBXHWcZojapZwjGgfTL72Z8TMYcmukvgaLPM8cajPCUvWUu9Uw3rKkiBvtVAmd",
  "key39": "2NGFrYgXUXTWBZuc9JC4zbcMYy2VXHDkWe7nsCEbJYRMqViUgBmhReZqT28AtU3qzBCvo2pRy8N1o5w1c7yJ5Trd",
  "key40": "4scGNo8Ce9U7j6EFr1DfwK9fGdD91d5DhnYNAeZHkRoWk4QfopZTszXuqmf5jPxzQ1Gs1wmsTQiFhUNGZ8WyQJCG",
  "key41": "5ZknYe3woUdDwHiz4nLgbHnajBeHAGXTV67NmyYG3T62UPupTrWkZ7N69mFgWFvTM4qQcPvGXtdiGKCiq3taBCS1",
  "key42": "47muL8GC87YSDGooZXCKU3WkwrVK89hkfGzBPY8ErGshbEGRgrHtx6ry2ihA2zWxBHiTa5Gpuou5Ps15jV6amW9F",
  "key43": "5EmJRkjS2xzvzBmgwV4mzC5ywf4YiQmdV8NHSKARisTFjKBGT1GHq4kk11f7CjBfps5fsEUwerqXctBqMM49toFM",
  "key44": "5btxF937kw5bNfCVdpjALUdrxfv9Zy6XzZe6KdNpUKH3MU6Va6Ff5Mdrmye5zt31edfxkwEPYoiJHbgTaQUKsZos",
  "key45": "2j86n6a3fLfeXF5VqsCo5PgV5JwbHiTFVdpQLqHV4xjQtbtxav3313NLkCiKmrt7XdoXjUbs9Mw1TAuXHSBbQoGB",
  "key46": "4TQL4SPvuBMo99BdPHtgftUiD4fPd4JEFsQq6qNHmevo92vvyzSekNZ8dWimget5Sg9Z45eTukgjsjwEBJHLvVqo"
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
