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
    "21gUxwcRMfZxGbAbs7vxZNzbvnQ1beCeigvaVptbvMWJSjCfiGaQpbFdXFXDVXFg7uSSHSGpW9gA3pwS5DRuco73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSvQkex1PkmT9AwQwFtGAoA5j3Fxef84n35VV5HtCafoG5LdSAaUWyMpMuAyZxeKvGWeBkijWt9ziqVPmeX4b8W",
  "key1": "eat6b8RfsWqdnqjCZ7d8PU9X15DPfjw2gqrEvJKG7isFScxN8q4ugm5Q2sL8n9zcqutZUY7HYrBqe9mg9666DND",
  "key2": "5ydMuLtNnmyurky2LRxtfw15mccGgiUcwVKqzc2KgN7p4Vj3ERtkf2AB5pnMYcm7JT9rXxmJ9a1PLML3z9oQs8D6",
  "key3": "cXUW2Qv76jr9cLN2x4bPG8uVZwEFPEA7doJ7JhJ1WuhAMou8EeSj7Lnauffswdi7WdpzPP36UiTWEBaGFci5m1c",
  "key4": "2zXaGKEA1vMQD2nCYSoB3jdWWsLgfzeZnoWYhdR7BeudKvkXxp2SAU4gfiR4M8pqxWZYffHECVvk2eEk7NroG5ZK",
  "key5": "4doNQG8xqzkuG2c12AWHHqahcEvgFxFCxUXPbfPGM9JDCGXP3ekjLdjGSXo74FAHmt1idhTgD2zMRMRXnkttFg3r",
  "key6": "2Jj3wjBXjmqpr63B52Gxr1DvLggTkTeSaiMRRZR374gQGDxL4t2BspxSj9ZgVjDtxtfoVE62XspYmf1ubQvdhsRq",
  "key7": "4E33KuytfBVSsj9crDJYJCtQPN4BMDR2XkwYbBv1aun1stTvRwJWbGTQMYyfsAKpfyt7hEEmrpY3DLHLnjaVKxkW",
  "key8": "54DNzc8S1oy7FNjU16A9P3DGqQjrMBzChgv9BjLdw9URXEbJfK1PLLAYfVhUsnKUaDyJ4EvuugktVz1Be18mLmyz",
  "key9": "3u4uSBjV6LXmCcGA3PQe8WDdARkEY9yYfxmxnwmPrsvt3XGnvenbCkuoLNGXAVpLMhACa1txSmHjHCf7XfdGvR2j",
  "key10": "RCWPSafy6yLvSqrrtSVYJMTdjcEtU4FH64Kqtz5wVNkLMXAxcPFTo63WvGFrU6K7Dc99QS53eQVuCwV3HBkvRTs",
  "key11": "6UdvJrtuFsSrHSUR8Gq23MPoeVB2AXD3KDZmDDanMe22FxV4b66LwuXb2kJ6tPrTGiStTV6Z9DUStJ4Z4Qn7ZsJ",
  "key12": "4MgA3GjkteaqyWrjx4kXpiK14m7gBBH5dK7Nxwgxu2BxwLewWm2TQ7B1eF2X2DBGk63zSaeDbqfLsGN1wygnoDN2",
  "key13": "TuyuPfjsHVvMhatpN8UrusG1x1CyD6q8FDNYLLL9d1t3BMzs63iFQXR9aq6bXz9XhyWrxSYTCTXYWomjf5tPMhK",
  "key14": "25uW2Kdavf1TgquUDX6cicpZK7x1jLWp99ApXvA6Jy9HSkdudm9jMpWrWHMDVUL6y8Nc9VZH2Xe8UUveW9SKe4LM",
  "key15": "BGVhg4N7vUUTmPUbwhhQm1fouGAhC1EZ5XhWm3sBiJ1YmMkxY5kGL9feEyWK1bwnUZgynuCH3zx28xvRq66oQBa",
  "key16": "4sbRjw6YSUUPuEwY4MhVKFJtHuM2YWD9nXzy7NySBdrqpGHStoV2eNaxeVbxeD6i4hBBxGcAuRLpgVoAwA6Viasd",
  "key17": "371kiH5KmYBZBJroKmhkByf4DmihT8fbimmRTocwbusZUJ6QJrMY1sbJWUucpRmJYKpbWULeiersKGpTsKZSVFDj",
  "key18": "g2GzVLAeUSqujxJmUTJdK7VdQryUM1GLvXm4H7ZAgNVkFjCPaycDrpX9PF5TQJAR2QusPpU6aC2AodCf8XEKBmf",
  "key19": "JiPpDYT8eKiYRqvFEh7tCJrREBRWgA17A2TpcKu9WwnEV1XtgFMiaEJrFee8u3MbzDDqEJh1L98hoEU7uJAggpQ",
  "key20": "5iA7ManL16mdAH5Spz8nGenWrTWLUCQqwVQEsE7DsAXbf9qJM6nyMCq1jGmuchMSBBMJDvWVbskwcm4AVa2vjU3G",
  "key21": "2W6VmpuDXi2gzy1wdLWhVBURGq633Rbv7YjLT5BkrQHSHL46yvMaWjct7TqRuqjVVg4wF5nKCWHBosUEjvmG3FMw",
  "key22": "25WzCUbf9mybhLxQkZi24vdLY6X5U6z9CQcC2L6zf9A36LN7rb7vF3MinUC981PiahtskU1LMEZoJBuPtJGpqsdc",
  "key23": "5wGF68JFfGDBQhdFjePmeUxfdDju66B7ywEPjaxSdbkBLqeeeRFPnmdwBGJ64tnjQ5mVykavfgg8e3uxPpBSbniV",
  "key24": "53dMXd1mdXkjzrLHYHLSQUovN2vRSwktGxYQmQLK2KQXnXVmVKDFh6SQhSKtn6pJBT4cSb4S5x6nSaZ2RzfMDA5n",
  "key25": "tLbdsuBEkxvGamM8R9RVsjHxhJDNLPJ7gJ3vg2reXAFRXrE6e8zCzRpGcGQcvGgrkfDh6fo9QbKGn3qfZzgb2XM",
  "key26": "5vALhcV6dQ95xxBLNVpRN2v5m2c5SoYdVjcMXaK88JKrQfLq5VgGCAJF6emAeur2KcToVHkvj3nwQCfbhkyyXDRM",
  "key27": "444uTDEUa8rWnQkMUKvXU8zaSowJLm5qEGcRWKF9Xh6hNdV3yLiDpmzE6Ywj1HWSavz2Q7etRLE32ZG9XenVzJVR",
  "key28": "4sHkPULuLji7o5t7kP8ikEJMnrxvobx2kcLH9PNcd6XYx55ZiFjb5VQcuavhPQbMo8QKd54YVzEa3TDEft48MhT6",
  "key29": "2b7fmRJaae1r4xbJ2teVa9PDa5KB3TAqgUxD5SjJNDwCjekWMQ781HV9XqAhUm6xkMZWGt59jYYzfPvsXtX8C3m4",
  "key30": "2SjevnSvLdFqwPzGbUyVmKRuUFwXSyYueGZG4NgUQc9uPDxpvbptmeAGF9K6Gfz53MKukgFx7JS3shjHaqL7F4rK",
  "key31": "5RRRFJ3ivC4nBqeFPmW8u8kX3pNobEb63JtPBcmQZsA5gKy66D2C7rT8GvAjbSyfpBpWTxpVXr1Zsmw3tiSJpW2x",
  "key32": "3oUrJPCBc4H8LcHez4xpz1MNRNrJvpSx3QwJo6Ur4ieyY39haGLJaryNsC8m3AVNg8vquiynyHCo8zuhkX7BRoTQ",
  "key33": "5fe7drUeuW18kVokyroCmLpXKTwrJ5NxTGQXJoP2AwNV4ZezL8uVoifGLhdWH9M82H11YbZRMtFqVYW21dTGCCyA",
  "key34": "3pQW9ebzZ3YDKxbWabhEKJariPUkrSHBFetwqTGfx6Hm7dgebGzyBf6w9RpAgW4SEuxVutRqQeVME2txhDp5vYmV",
  "key35": "2qiq6Snzh8DfWMEWYZkBJAaQ9BWthMy2MmgGHvn6mHjNsShzKkAoDqBMA5VRp4i2w8Py9h7AgP8MPKtQ7jtb57MM",
  "key36": "5aLcUryEWbkPCjjFABvzqgJJvmMeyTJtYKd41NCgKzs4pHCGDkhEYdVDkTZ9dsnjL7YUnTFdWw7JGWqTb4JYGQ91",
  "key37": "QpnQj7w8SCJpUnKzeoxZk9UEqyTTD9EeReVDFXcU4TC6ryaz687EANqcqv5s88K2qo6iWEFL7T4RucMFMtiy7Cz",
  "key38": "39qFfAiPECcZXABjv1jD3vhs3reE19mDFyzH839JukrPK48YGR1DRetN5QFAtScSX9rCnt3m5XNj4ie1g9QgyWEa",
  "key39": "4xVHTP2pX2gvv1t8jwpLi642gEDEc7bXrMiwa7WpQYxkm3Uf28x9Mz85KZoTBUL2JYgyyf67zoYQf1XC1VXKTjVr",
  "key40": "2GpS3da12jw4qJgvWJufTBLqKV23bVNb3PRKfKBaG25oUtwysTsZTy8xMi361p3vYyo8FgEAXcyt1jhNz4vJEndE",
  "key41": "5sAYoEUF1jn1P8QzgVcvEjCREngoKA62txHgjbZqC8uB7C8J74RTTByXqV53w5nfC2ZiL7NoU2bFDL2WzffzxWBX",
  "key42": "4ug1UXbxdAiPxBTkKCW2q7wqLiyMFZH1y2fBvySTtZMUG4t4a5ri7pFpocgrp2WvUegHTyxQxYtsAyYHKHPYNmFe",
  "key43": "2yytHYy8VRB1zUutVpAY2kYhp19Ary8dn8QDSXAYXt8h73rgyar7qv44VEmvtEtseydDsCHFRhcS2rPvgpYkKeoU",
  "key44": "51yLGkbL3Dvag3zZHjxKaKLkwcSJJzMh1MGYoZdx4tCdc2t5MYFY2Piik1tKRivJmvs6w3Mjfjo8RF2w9BZjY7Pp",
  "key45": "8b2Ss8b1n7nHromBJmBDy2CSsbY2Kd6cBSfPWeFM5bbY4XYQKbqKE6h6p9j7xEhHrSm643BeWV8L4iQMG5x1VEV",
  "key46": "2Z7zoqGDepdDzZqwuDoa8ie9Zwatopst9tRfEh1W4yrhniNcMqTnW9UQpt37eChHGmAoom4GCscUH98DACfax9Jy",
  "key47": "3kU3U5NECRPtr1bknWi7ocmVAKGpLU6tz7b8tiFsQJeGDq3iuyxyjXd3UcQV6A9XUm52yF2j7i1RJ4CFjiEtYNHo"
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
