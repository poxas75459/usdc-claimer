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
    "5Zf2VXLvf7nEFwUpkNYM1ciWniG1jbGb4EApfd2VZKXu8S1EYir13ySF5TLqTGiW6vvEotz3kbgCSLh4Kta1dk7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cns8TgGK5sdTPfF5cRcGx22GUHV7Kmg3o2jC9FmrZeN5TnYog4Nd8sVoUsN6mYas1YjtgbhUZKF2abEiHwDvuqM",
  "key1": "2TNexQ7N49kWbfKpQ34aceZKVGthCweLTVEnTrZpH47SjXzKmjjucSGNFRk3ME8bgK9weVAy1Z5shoB14jAMEGrQ",
  "key2": "3B8iZmhGnjcxKCAMkBviXSgqxd7nKFRja26Dr9qo1ifLtchteQi7nc1oGjEyB5V2nsYgM9xhV784oQ26c6qcejbK",
  "key3": "3BYuyeLGd29C5kRXMs7h3ZahK6vbGzzLwbEHcHQJoig69Qwqh1kKyaXmnN43Ygu5mBtdRJWCF62bZwGQEYSph8Mk",
  "key4": "5HrUJu9sfC6oQGAwfkPNW56gMbSYULLzVaSRF2SezQ37r6jNqv2px3LpavY9zEH8uoAYCxSyeQttjd12QgyMp5My",
  "key5": "42dLNm39WUrD1DYzvYsvqXEmkL1Nmqp9RtcR19zf3NWoGCSYo8YKq6NkZmU9CoyUz2XDvgsxfWsktyaaBRswMfHJ",
  "key6": "3eRz6wQvnK7Y84eHq42J5L57aXc9JjDGg45R2Y5QKYrWGGnbXrxwyWGqYnNvoGT8DgUufARrw5VxuZCX7T4t439H",
  "key7": "eepLjYhGe2rFWVTA3AE81hXQzn5mkerJqkZaSQQBpu76bhF8TzRkibWEknWwCubDZBVYmB2ut2wnYnvaQnvWKgZ",
  "key8": "3AhER4cTjLzJ7p6wdqjXkdzixY8YiJUc8c1ogp1BXa1Mh7FqpxU8inQhKrvTL6sEg78AyZfGyuZxfE2MnuC3Aj2A",
  "key9": "eGZyxvjbAPzZ3isxycMSt8t4VjPFv6k4GmQMSUvsHqX5qqGLNtRJmAYk6LXr11TRvtk7RmgUHYD4tqpmEcmzYS3",
  "key10": "5NR5GErnUpJ15EnAi1ynHadcEzDKPJxmXLB7a5gH2o6a41Hiao7UsApW3oJWpB6Ed6dxbyC68JLe6aThhuSC956L",
  "key11": "5j9GCU97bTKA7jq6pGdvP5KVirqjkCHRG3wAMSbeb4NzEmvoVqPsiA7UwpK7oc6apSteue2T1qjNDjs4gq1FwDj4",
  "key12": "5Q8Hywk5gHPKP3cTTWdC9g13aNix8ZeDJrw3ufToWkZ5kNUvNfu6eVDWFmKb1siLkx9bKyvUdxjYF849d8PZQSC7",
  "key13": "YCFnq2B2zsx9ogqSxAbhV7eM4Z1p89X2H6brd7yTXHESmRaJ9dZu37VSAbeDqGvDYfie4usNZXFkfBWL2TeJkpy",
  "key14": "QtLPzr1rVRUWpVkgXbhzR3xXvGFWfzWyNMKDa21FdN23pN1P3tnicsxD4ghveyRBnZSvpd8AfE3fAen6LCBi1xi",
  "key15": "5k2RgcF5eAYGphYcbAQdvNurkjHnmDK6MHPFdkZwVhs2BQ3F8A8y1LmDPePZhpW2a3ueNJyGBfv2kdDtYFbAMDE",
  "key16": "3uAN8LhpB8oKUCttZaCqBekeMcYP5B7aVzxRV5UcdbFi3KVAqNidHyvZsbcAZB5QhDgZV5xqimDxmLhGz7ZgTXae",
  "key17": "5Nt7jzuLSYEYuTSf36cj5TPCvmybtx8frvRESKAyESeARpKnveUMNVPsZcTKyjhTiYoM4Gh2wZeggtKfkEcJdkAY",
  "key18": "2EFoPhswBuXbQBQDBQ1KEfbtex2EEJ5nt7EDiU2jT1c4dvvUQczFKcqbngo3ZaEqZRzGYoVArsjuXAjSTr7Rvcxh",
  "key19": "3dcGB3dHicPWtxAyejP9LRqDeJ6hHNa5t72jDenmB1rSceJTjoZ7HSn3ZWWKjcwX3bkWFYcfdQxPQWoonRKR5nZh",
  "key20": "yWU6354uYgYwXhtQxmuwCpoB5og8r9Fp6MQh6xSH6nuDTgAKTuYuBE2ABUBb1kK6b1kYVi1KbhvLcLy4b8NKtSP",
  "key21": "4xarr3VvbYpNn4JmiUgUd9AX5vD55xtyj28iyVoSKmbtYTpXT1nTr2GZLg3GBgFL4AqgmresLqxkJcYekXiTjoqN",
  "key22": "1WWLCEkF757YtoHvUttbSUCNYU8GwKQbwquD7bn3iiJRrFfY784y2t8ZJJA9aXNfoE7LWm2fgt1eDWUCNmcpL3p",
  "key23": "5Lg8tSXDignA6ZJ2v8qfoFvhLwfpHFh6w4EicYgDkkSa5QfXXvR3A3XNPQ1mxxL3AbVftmVuYxG18XxVhsMDDBya",
  "key24": "5ajjggnkCP7GpbEgo4nsqAKc8UTi8UtuDcmvgZPnrsyPbCrLrpJyuByxrsNo58GgCiJZBbLjEGFcLZN8YGJvCGPs",
  "key25": "5kgz8KW1XfLrXfEWv6WNvjTaxMPNw6UomPvYdX55XMmQVmoStMDyqtFZc4ZFG6b9gtvzDhWD6HgaGhw1Td6Wdy5S",
  "key26": "2qKciE6c6R2DkJTXy5DqC18wFmAVazVBz48UjPJxzUKnE6hgE7aocEnVvuZWb3p5fjdpVHhRju2xH7FDLgsUmjXv",
  "key27": "2cNJX7oBXS9DRMBz43AM7jn6y3MuvjvDheQC3igLzthAko7fF2S21dxiU4W92LZxNES5RX7iLxGCVcaHLWnUrXqE",
  "key28": "453R3zrhMMaFzBECMgvvvBgxvpsnXYQ3TVUvgCKptGPckGsokwtgQvXk27Ynokw5Hu2rMCoeZBj131KERqRnNjNc",
  "key29": "4kkmcAMZ8tcrw5iSumM17YqEtCVSfisSZCLyHCpdc8C1p3UiEm2ozB3bnF3ByzoVYM9RdYSA9CBFyn1N7dSocZAa",
  "key30": "3e5BKtzXunRaYfbW5oPRqpaPL1oPGeBzV9yfA1GoJfj7r96HcvkJbtVKQEMS1mwRQ29FH9UaNHvFwGyw3HaPBHxS",
  "key31": "58Pj1H4oocU6qQKX9VtxSHeXoDVaX6w7vxqZiRbqQ6SThZLnoJUNZ3nmuGT6tv2WXTENGncS28yPxEHZp5aX6c6L",
  "key32": "2saDBSBajgVfAK2EQg8vVg1EjRDvr27wLZN81c4jpfuEjZZoQqViPrDV6uF1HjJcUbJkjj6njq65qA4128199M9C",
  "key33": "5agFcrDRLUZSojaJFDugzMd21hd7buwyFuedgxmYhxmJfpGk6tLA3HbeGKSn5kMvdQyY1xAEf4xv386NeGE1aGXg",
  "key34": "3MYSbmjoEfyqCMkLsRCbqJPfE8ZLBZvcC8endJ9LeFQ6rFgTf4ZaUgTa7JiCQahanFY7NjDDT5fuhk9aJKzfn9oL",
  "key35": "5AC8x19mFkXZtxLXW8y31ddnCEVKuDddoJnP9kzuZUypuySpKUyzbVjVG7a6BDVafAZCwXJPApzo65vAvsp8HL3w",
  "key36": "5zCw3CGzKEundAPWYkCvmXvezq1mXt6VfFuQJn3ttGmqpcqznRiRbWyfUthBzm3HD1mxF5iENDtepDamW78FNbzP",
  "key37": "4ztaQLbexQgdaHiCouHC37imxNsUjCMXfBmLtxAPiP3enrrZEvnNdmXZJ3PWv6Ret7EF2hmY96sQWjLvU5VrYceB",
  "key38": "5s3QZgkTLy5Uforu7VbYHz5huMhBVg5gjmXe4JQG5idR57iwMiCFhHtnr6QtSf6Tb4gMadgkFsoTReEFvzmmGyu4"
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
