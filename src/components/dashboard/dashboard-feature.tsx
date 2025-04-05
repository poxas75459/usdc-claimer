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
    "4jcsqMrLLcF5B9hTgjmg1w6iSfNTHJ1qYKec8CRywpRLXSJSmKHACZa1DNxp5i9VEHoYFyEU2fsTAqZmfjQnn7Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f42BpHmj7G6pHjUQ4GxoH6HNtBeJnxwiL2tHAhc43kBPN3AcrxAUZScHkNEKUqNReWhe1XkKd1SiLmeYKBUxCfj",
  "key1": "2mDN5BUH5ZirWbSuGBMws6kaJZWocZZipjWmvUxqMsVBY2QFZJ4DTiQYpgYonupjQMgqtK8gX2WiNDsCRu96V37F",
  "key2": "29LRzDom56h3VSeU2p72MJvz6UbYrn9E336jTrdGnEupo1GhAeL53a186MJ7DKJJxXAKXgSGoaTcHFn3o3RGQ796",
  "key3": "3ciM2Quwaa36LrA1XJk8coeqyH2NokK5QoHE4m2ZT8HL5KMMPFeUtekPUosStzFYf9B3h4vRzfdNqrgFoppxs36g",
  "key4": "3Z2F68NYKF5pRvmyEfjjuoen36f6uAqXUSLMW2q1Pvggz8KL9K1ujGjpp6y9LeTjVSNiBRW4vETMT1LfeMrp32Lz",
  "key5": "3mXp5vq3JM2XzWfL1MVAD4fiizTMEa9HLtLANnEydXzLaF5YX1KdsFx2AptU2qe6CdF4NMdyH4XRdTBXUXU64Q44",
  "key6": "5STNah2F4ZrofDf9NmJG9ZzLoS9x8zXU5MB6HtzKXwAHQb3o7eB2ru7CWfEJvVg7bzHMpHjt1zN3yjsJRBkxVdsH",
  "key7": "5yTDSdppKKg6VHn2tVu3GFyf5aDYAUJ7N9GS3RpJCii1LSKyh1byjZD4gEw5w5MXp2pbkzzR3xGFVERs6mdq2HxF",
  "key8": "3zSJLaqL7LEjkEz9PPDo1Tdzz14aP3UYB3JEHQGwy2Mbvt4gyXGpdP5rAPrMFfTpbe3v7W9crbt6WW6z3HCb7YbB",
  "key9": "5kATcS5mYfUbUTnJ7T5185LWYLquCPH8PaLasAWAVpaYNMfhi5LXAYN1Nyp71fUDArh3Cb7dKExYuX9XirPnataR",
  "key10": "35cS3YupjFk15W3a229v2pYELTD4FSaMQ1JBuFFhc5DnBsJHV2cRBVJGH358jndRGMyzSjAJhwzwwRc7To8zXJtz",
  "key11": "5R2fFuHE4DYkNtc83nrY95z5zY3myA3SPtc3RmW5frwfFKoparzz5pUBfJg3L1aQLPwbtv55CFjfCAFNWP4EbXQJ",
  "key12": "3m1tdRNmYJRzod5jPCA51ohaXrwJepryg4XLTtoagsv5AXZ6sNPNgFBbyinSHJQJAeBC92wCUPqWkCYuYzCTzeag",
  "key13": "3JoenZs9MMCXMMnbs4ceExQY4kQ2n7BhL3K8AKZA6WkNsi6W49XnToMtESpNR5yy4nMuNm9amEka2tBqU3zvApUk",
  "key14": "9P7jKDVcMGMpoJedXLDrJNewh8oz89J4x1QUXeuctrtm3YLJUsqYgd9oPdTq94P7L5ZLFKMnwn7NEDt3Vg4SV4D",
  "key15": "4K4eqRytTMAeD7aAQ42k29Dz8QSDQ821v9qA47qRaPmQYoji45bPJfiXmjQkEEappUyyvcZEMXrjX74hPpNH3t4X",
  "key16": "3iSVvg1z2RCoq66oTT2BMN5nxHvBKgvp6FsFMqY5C2wCBt9Rp5oXCkg77hHuntRoU7y1Nj81ziUgPZvHi5QVg1u5",
  "key17": "4C3qVgtLsyDV9wRbnLryhKUKMc3ryEBnYPMYd7dceXfwfD6XETLojJQrnxz8jF6nPc21PniF2cwdmoFJpHo294ZK",
  "key18": "4NLsmA8LpUpLdgMs58ukW5qSrraKvLmt81ByP1bUCfAFpvWTgR8dxUeSU8uXUWcqkbDxV3SfTqKmaCr3sdCwEKR6",
  "key19": "HZBn298xxbTFKprQNKDims7GMQWZbXE6xjLitgpoUShhnP5iYLTDaGi8FYf2HMFaRUffiMLTGkncK5qnkdV3UU6",
  "key20": "4MDZd5e1x5XuaZweWbdhDy2pMrTS9MdfDKeKkZvJtP6FnRx7ppNGRYXyMJnsbuE3qfc734GgME23eecRkuA4wBc1",
  "key21": "3ExUExyoiheDBLeukUyLcY4YEese1XjENupnmFi77Z4Cy5scSdNe8xZeM9RuLG197GzA2dvCBuj5xCMmioH42t49",
  "key22": "3UyqG6Nk45xgkfbSvAQa5hq8dqY3KfH8T12cGCw7aXsJ97KSrXfQisHHY6VCGPCvePiSZBzcQLy9a3N8c2AauRLQ",
  "key23": "2SV4JcVnfxZRZT5jLgRo1VUzVZv5q28vD7eUy53fAQ4GYwxbUgegQqK6srfesxEYfZxhVsXWH43jqbf9nt9fFKQS",
  "key24": "4p9rHSUsP2ct4KUqyigz2DGF5eDWWdnBgPyLTZiyu6EzYpsgeHiscTVtbirKxYxgkMSR1RHAiUvUK5TReAPHN55Z",
  "key25": "Zasc8boJuiqqdxEkMDo1Q5UoNYU3jM7RQggKfHuz66WgfFSzuDLmPg1oTzEWphoqNhNZkkcfRrrdTnp328WkKNu",
  "key26": "4K7VsGAxBLAq8mxxF1SzrFZvPU4SWuHZ3oauMRM3hKPAbSoCwkL8UW3yDEfD2cKmx4vbu3pjaz2DXYeyypBvBbpG",
  "key27": "3DiH3AyTHk5Dmzj49M41VJRPapy2EnFiz5kTLQMdHAAAXdWj8tkSmeF1ynZXc9VbpsoMza2GWBSt5C2kMUz9Zsn2",
  "key28": "36jvgxgPTmJDLkN8QFNRAfiuLJ8M7DeSKiGc6Kyz3ri9eRzA6S5JHDRxEZtMoWuK3SHpMUQtzs1pguxBRi1KE75p",
  "key29": "4hKubhyyiehaB4JM1cAhdJhSNuMe2z63fE3j4gKuDwWq6KeBjehPg1jTv7T6ZWWdzDns8dHPXmQHzsPpFzgA2VAi",
  "key30": "2cXyZviGwBuS9WJ9uVjNj7pvWcc6bm6BqsqBhp97C7MXwt3eceWex5xRw43pK8iXzf9UoT4Rrfe5LF4GpL3Q1JxV",
  "key31": "3oBi1XpYHFaEb3XbnrycTSDGPEL5XuhNhRUhN1d4wNpd3F1FwMRDDfFnSsqXKAXysDBKggJ5VPrb3wr793qytsD5",
  "key32": "2LAwWFZcm5DeXyAAGTp1RQ2Wu9P9f3SJTNhcAdYxgsbhJUTN1C6BmgecKydQRmB2WAuJZ1GMpSjdHYoxetXaryWV",
  "key33": "3zgZrXvRCks5Jsf7GMZKRHMbZFaL986mQnXZG1BBQS3cW12D8jU4RgS1zRqbFrSRSNtDGGAiDeSAPoy79WW4xzrz",
  "key34": "EieDPczkYKdygc1AcX1YidT6ZotL52MQ84AP153SeQLDhaveiUVn8aXPTfsZwh6HwaW8sv643AngDv3hbg56y5k",
  "key35": "2rchSQNxFvVuecaTn9mPntzqmh5atgTbyVKEAeLwEmdydoFMm1qTvPf13sjyjwCFb4E8VTX5FB21vv3PdGe96w3v",
  "key36": "SzKyHD821QBQdA4QbvVwqmup1mFuSEhhervEgQw8MDc6pjmesQz8ap51eiumeaVkeSJH2xW6tMdKtX9r5HzJAF7",
  "key37": "5MpJpvpJc5EfG2XSKJZuPmnDv13y8QPCwxyWv75kBFtqBk2kBHELt1jM5UFwJeQyqyK1HgHSHHCXrBHJGMoHZtom",
  "key38": "2yb6YUzMkQeZjVaEZidnSKbigsEBbUHdfNyj5LMXh1jbzNqGuRYAw8k4EqFLfieZSaRhbbDeDMWqyWDcegi6ktSm",
  "key39": "2c2YgwZt7Sk52G73vVAoaZATbF19TUCKQc7fFT2L4hnsvukNdvUhE6Bn3Qktx7Ujoad1FZcDmy9Zsb2uGm1JjcNW",
  "key40": "YBRiwcJsXYsmSQq4AkzxS9P2oYHzezrHZLKKaHk3s3ERG4pK2G1CTXEQowtpTWsAf9yC92SPJjRsqE4w5FcP4MR",
  "key41": "3YauF3u2vwweFBsm9SUTczuiZ6tRC5P8CHYyp345UpvWHejd7h4vSzFeQJShKV1c7DDhF75QkUJJp4ntMmGhNKkL",
  "key42": "43EdXDNK7egKtSwHurxrypRDYxBmff3XY8q3qVkfLPU4qoLZjFvq3nHdDFFV7PHFiyNpwGoLY5M9X9gZoTB87GH6",
  "key43": "2EUZK6AYJD2X3y4cfs8aFPmzdkUbi5MBqraicqadBKuRanpi93ADyLT54awM1HXVG5QeKzexVAeXapunAH84dNbS",
  "key44": "3d664XqM9tzP8ncW7uChP6pUsByWVCiTfhduu2kFp8tYy6J4o6wwPeBXiKrHBZbEhaDT1rE7BKvv8KdVwJfj1Bkm",
  "key45": "4J8bKcQ8dDprSUibkodWnYwutYUrUqy1BKFdarT6WhqwFfLQbyqyDpdhT2ybUqbXYMiYPD2K1HHvJsTZER55pXVS",
  "key46": "f3pkkP6N2NvZifureEy54KpLkKAQebBG9NEq5j6RHoZ6sj5cToji7RA4zjB6jGKjok4fZqTMdGkf3yEWUH99mxq",
  "key47": "53i64PmW5y3wyF8Qc8rEH1ApupzJVCKnRvDeH7ebDAi5o6Y43srQ1mRyY2vcNgMrbBddkL4kRnrKgcyn8ieQKkAx"
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
