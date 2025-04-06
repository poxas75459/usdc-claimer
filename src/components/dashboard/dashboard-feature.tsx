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
    "2f9b68661Y2cDDKRCEvE41CB42tj8r47GUfyqwrBCdBBMQ3wQuEbnakCo8WU4ywUB2rLsmfFyUAF2GwKJeGN6fSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6Sck48TmeuYAs3pgS9xLLAZ4WAbt26gEsRVS63jD5MeArDBdTjfCcUupY4vhtQicbB5PB7Hr7Zx82BQktwskmw",
  "key1": "3Vg2dgCvQ4t8x3k4UgJ8mG48vfi3QDjtR1PdHCJqWN3h7jgU5Jn2AGn7QRSN2YfbqSqmPLByhZbLLT9qCfqyjdZ2",
  "key2": "5dyViKDHaR4Qd7oN7ZjN2ogKkDrLnLBxAssDg7Bo4FXPWZFEEP7wkTNLy8gLY85KSCWLSXM16uUhNiNrre5Pya8Q",
  "key3": "bD9jiTe6xeqQLgwDALxCto4zQY73MKZygUN6gb3M3zXfJLub3JQ6SvKcNoLm7pNDk6rbK8GWwmPvWJHykpxXy3y",
  "key4": "2V5VYvmFqXwQ93akZpf2ZypsawYAJGMV1iC3QPypuCpZ5j8G33kNyx3BvquT8QS8sm5dJvVZfw2JLbVeZyBG6Uhv",
  "key5": "dVQqLzNpYFFsFTkbr8QEphhwqFgnVa4MWHh7cbJGKVuchLeozXqr6EcHVEKyPvSswKuPqq9k594kd1oiWDeaiiu",
  "key6": "3AMWb7BJSWCkB1A6y2VidEUmLkPekW2sDvHpu5EcpuCtNQucgqDVUvMpDZEAmg44SjfXyjato5dPbFir6UKUfR9d",
  "key7": "3Pn72jUzyg2W8hrE7pkgMZBxwWZ6X73fQRuDgNgEYT4KYuB2xYG5fa6FL6tFvjWCDpbGoD5WSGB3ZdGP8DFpR7NQ",
  "key8": "2YxZgVgSFCcwapAScsJz3JvrHeXAspAaZ6sMGNDSdsyyx7V2UF6FBHKiCaFYgU4sWn941fmgZUDHGxNnsqUBDmtn",
  "key9": "56kTBYkG8yQdGkpA4XfSbAR9f13mt8BEi3vRHLxDJVB9gyCJLoCfdjCMJPHYkVem4fQb5VGV82nVGqetqciQXSpn",
  "key10": "kF2BVt1LDTZ2KezeBFMN7eDW1oxdLTi7nN6YunwKXXRjZWGwV5ZEvLBVRWiEq9wWuGu7ifjBHr2pBjGi3oJEnua",
  "key11": "3DqNGiz7pvLc9dZGj8JALizZqQH9QuSyXFhbSqPTGn3BPZftZjSLzuNHXZa5DDEZgQiLqx575F6yjLm9mXvZww2j",
  "key12": "5XbjSZgDJMYUQPgDEjY9EffFnhjKT7fLVE9YCM9vUCPKzxHZriAPTWxGBeK4Dp3r1Xco5iFH6hhn5Azq5sVeLiC4",
  "key13": "53tYBMCUxVJz13dNf3c2nz9vjhLAdUmJGYoyeEChg3uaVdqV4qTg5Hft93Ls7yUZUTvMZRJpoSMunnvERWWo98wf",
  "key14": "31EjRhUK9Q5LVeVDM2gcZUSz14ZuX1ZUQq2V8kD7uZtyTtFMsg81EwNdwGvrCyk4J2GAma79gAeEMp9zdRkS2FPL",
  "key15": "53NZp1mDauS3Y7YkkqCWEEursaRvtrx8hDEZ55qoyyBuLTfSTMVdp9z8kdsMxAri58ZGvCkE4HvHnrdVv3nygKCJ",
  "key16": "2YpgMmcTfPNbpRiAa3bCoFRVGHd873Z6tehBnnuo64L47iznroRdLEhPgPfpAPgc9jAo4TDPp1prwsqsQpmHmdwL",
  "key17": "5jY1Q3SD3VNZoZ5QHAJkdo2YA6Q5U6sgeHUZa4U7tb16s9wKA3QfwzsKuJPvxinJfF6qWB9B3gESR3r3ffnEKoqH",
  "key18": "5WwG6dd7xCiGkgJkvN3fNwZozrdhLsQ9pohxopLEyM3pUX8CMMqWug6b9zX3vLp5YtG5ScXsY9XrTRVBKNraTCAt",
  "key19": "5BE8qCabN4xBSUadCQTWmLtv7F23hhVvpxX3qm5b6yuzi3DAfmNbux38rDXWTZjXC3RQ4Vf5ae7eWshZLvqiEGVe",
  "key20": "42hkxtKAqupqcnwm447EKHnjrbwAxiNBCmuE5QsfuaerFsczCzfktDhvWWA9fMXMYSK4mqeiqggTe7acjt74Qwuj",
  "key21": "2Q7xPuKnFqDdfWktrfuT8pNDtAHtNWnSkfRpSByNu18Lr5ZxhMQQmUeBdrPkYhQDV8TVa9MfcgpEtBXd81BGFo7H",
  "key22": "5cvjaKrnu3aEKTw7fx5VQkSbtsERPobPg4AxpPw7gFdosqDXnfGTdoSqGmyGf3mZfRtjjfzb2gWADyy5kV5sgfgA",
  "key23": "waGfjwN4K5aAE5VAkNYb3U3yNT3PvhVEaCPJjQJEwMueF3ftogATEvgkuuFcjJaqZjWxCKGoPfhdYunFD6wh2tt",
  "key24": "3TkWYzzLifS8awjo6MstgKVM89cbh5NftoyQx2VbbuvbA6cWBBMg7UhR7VwMtSaNBd5sQJ5v1hnzy4dC1o4twR9Y",
  "key25": "44BFcdNwSbJMatdij5MTjWYYmEGS6egxncqPQy4QTgzV8hHwniJXw7fVpPoGwZPk4Xpd2GjBTwfDq2irvMv2ctDV",
  "key26": "kjJYPW5zEFW9SSiKD8yK9RgXVcEGEng7xeh5KcnJWhAgf1cTMAaGEG4CDUnzAenVvL5dZJBak87ceV9dhacY2rc",
  "key27": "3unxPk1mvgSoravqvNXb3mWVRN4SQe2TipmHAFfsJo1MgsD9ZykG34QApjPRWGVFCpbPBnyitXjXDFhmw1MGprLZ",
  "key28": "3DFhedYLB2X5e6ouY1MYpwtAyS4XTUcHFB3doKxwq6LoZBop3guX8RggXGQ7ULpjBwrfZ19VuykoXERWmdBAdUzm",
  "key29": "3fPBN9q4h4iVdUQpaoPHF4WAZmPakCMxrQhXYvfjF1ntzA8vPizybY6D2n2HSiDkD71cFdU94gTbxotMiFuohDzh",
  "key30": "63FGWii29rEsrZSvTkAK4sSNuknYdMCvkxXAmbz7k4z4Si6igBWg6YQnSqPXCAjQVWdDgVTFeG3bXBV8UiK57Cgt",
  "key31": "FBbgJiDFbnGJDaYXBkeVYLmzCqgb3gYJukEvPxrnyjwNmWY477hTefeZAujZL8DzLUEEr2pmxyBvaHjsWZZxU4Z",
  "key32": "5r3D3VB83WWEuoTCEzKbj2zCQtr4MEA8EeSDctcqEVncZ1i9HKXSfGo6GNtRiXP7Zw43KdToEe1LTDBMQBxucJTC",
  "key33": "Wg9ZXHucAN1zZg8ztUeo4CD7TFkZmEv5fnXLJecmd376FinxzE9diGGUhnYT1TsoMFzYaKRtso2dCqxMZhszK7X",
  "key34": "4zzvCJtjUjsY996u7t6wotwa8EszrvKGSRpDMPC46D8QB9nd9yAdbhZP6r6PCBFasku15KtbmpDcZEwg8vAjBDmd",
  "key35": "5y9tR9DMyueaaDgB87agsSVGWsmDNJmEpaYyZZYZLgMZL3ueoAcMi3rk89HzCBBu14vtX1jneZnRJM5hPi6m5PgJ",
  "key36": "HVf5gNFMwNBSMkrVsZ6Nwto2T558LKuY56HBDoQdxXHWBv8hrYcpaen5tbdXfjinbejCJAT7mUAyyCa88JgmyRA",
  "key37": "41nk38iqiXxHP2Qx9CyBMQn67UjTu1rmUASo5qbTpnepEE8Xg7K7qBjjH3iE4GtyVih2C5b7WATQaHJXpZUDRh9y",
  "key38": "2awayBXHnwBrSG6pqzduhpArEXbVDk6PZ3pUZEiicxjuMsBdFRELKXPEbuvFNE7HGWuKeN8uzrw7LLBHn9WSB8zb",
  "key39": "NpD99GiDu747Sg1s1DZdUyhkBPj81pHxoJ6xQDxGtLo7dHtorkcnJ5fKfMFjWSoFapSvVAtE1hj2oZgqzAKcdn6",
  "key40": "5kX8aJg8fL15aDSRioAC1ztucNpubWwAD7iMFSB763SGgfeKpcDP1XckmJYjbf2Dg5k5uiQvc48yYyf4mCxLYjtv",
  "key41": "64AqKK3rGQg2TXpqWQ2LPcEEXsKQ4zyaojwR7nibn3g3Zos9T6JRtAqNMcXXvKpE6VRaC5RDtpd55mjPvxz5Ejqn",
  "key42": "2RnxLm8VJGKwxZXN9WqJnhXQF3ENZn65sA1eqwhEfTXNagLZg4KG8xS2eWKjn2HJn1f9Time5zyK7emCEeTf1uRw",
  "key43": "36Udabtw4xvE6gscJFKj6HaUgQvamujUVuCBtuT8UHnx56pNW754XNe4JoLSKtr34a5XUQY5iDwCah27ew1edmWj",
  "key44": "49qbHYaG8UcJj4kBUALg8sdGf1Zqh24CzToSUtfyyD7qaqzqHCpnZNrY89FAtnRwU7QqEiL9pNaYM9zFzd3riTx4",
  "key45": "3qYs9VMD1o7bCEpdJBX7P4HxF1FUfT5VcG3vxeMNYuv3uiL4twUKoSDJnTro2K414RfuBZTg3ukmYzzVTH68gQCo",
  "key46": "3GEsugAnFg1Vn6erFaxDDgxkYgddyDfyGP7pkWVryk39SkVmhDD2kJDj9R6ci7LM71PRBveyTLrb75fQBB5VkkC2",
  "key47": "QQeUuouFXCasypJ1GKYWhiEpVwboi4qum9L5wmXk2qg6gm6vogV2ictHcXYtv8kX4S6SPxyVaphmjvHAuaYQb44",
  "key48": "2dWDCV9LDB1rcfpTEH6SBW47JMtoP1Wvfy5R61G5vjkqJcVc7GywvAcc3KbkeALXKjJCdgYBrQYwVZVQeS6pM88P",
  "key49": "295nhQyeCrgDD5CyJHeX3u5gzZYhFB7zSQbPNVjvHtQYXVBofqSKkPX5qTVHGzwo3Xqz6YUrsU8qnqSXsg1deVC5"
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
