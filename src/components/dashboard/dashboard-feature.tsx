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
    "5tjmZdSUs5H6TyeVfF8b1v7UAhvny4nZcs32Zmn8yR7iVoNMzAAYnufwYrAt22HWf9HN9mB7qWFgnNeWZqCUM2T6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNDzWviS6vxqGZsP7AaT8oHn6tbjkHi2Re77Km9yVNtgck9e6z71YBghXUtU2ZrmjZfotmZCvi1oFxAxRkHyncY",
  "key1": "2Arm6ueJ7uu5112nZG8rhcTiuULMB8edgW3aTd9VKFpf2p1jmGbxeJkDPF5cGvwsEnhbfwe3iHmAafJHQihCmehF",
  "key2": "qJVMdNVsJS8cTzFff7X39fjncHVs79BRmxiaV9updA3WWUf739TahBwYmwVa2NQSZ6jRyYRp1CzmHa7KPpDrYWB",
  "key3": "4P6swj9nCMS7JUTrsJwGkfSyq2kMPVE7bRdE5qCHJzVM9qudCzpFYAJK82FmWppS9JG7grzhoB9geGEwThjz2NaJ",
  "key4": "3zfDPNTtbeW7iDRqsg6Z45eZDs5NVcSvFdu4HmYEfFEchykxv7jKxaYd9kZZpVBUMSy3LpDJQBeRrMxqt7g3g1WT",
  "key5": "31okQQoggU9uWYisxunk9CrDNfmmZKBpTCPhz9t9j8v6Ddoc5es7tgJmy85KmBnFh2ck3T9CBa9wTmNMZWaAFLwz",
  "key6": "3xkvrFL4EBU7hJhEzew97zqjZFURHLuVrGHEhNx1T9JCtXLwnNxNBhrCYSTRjg3xdvRLruwjxKXpkQbXg6LSUJhD",
  "key7": "bGGzdwMiM1XFtqUzyETRXHFMkAeepgUorJZE92d3j6WGTo2izKeB6nFTJhEzDy26N1AqWj9RLRtYbFopnBwKH6h",
  "key8": "5EdtppBKmJ1jKnWZYTmD9RzgggdNwz7sS4gLEWykRkZpDDDYLUeC7mMzeoUgK1iGytaTXhxAVTG9XvMoWvhLKJZ7",
  "key9": "2LuRA86WtiaS82iZrDT1x8wFTcCSRWaFB36AcmcJKgCz33dWc79STBuQfKVe9FuSDHD1EN7UUbMTVPxbR2yoEh4F",
  "key10": "EUWgpuCiTR2XsbKuf26jQUPvDUgJTm822kuoP1FARidpX6YsdZiMw6VPH7T2nUmrQdpJ2H79rPSdJwYxkWk7F1q",
  "key11": "66YnrDbf1HhNvJ49sCkRne8LtTUoSnW1ZJtU76hi7aRUUo8t4yUpdjvkVzXPGUvfkD6XPmzwYT9yxQiyHCSVG5K9",
  "key12": "S5VKvH5HosLKRf466XK8vYBDvr6ZBu2y44XuWMzbRbk4GpXc56oybVuUWXaiZzhJgLbn7fUu8oQnkjiTZz2Dwg7",
  "key13": "48VGMso8VAKWDLpqPmpWp3u6wLkytTeE316vQ75R9ADC3jLY7iVkvKPtQsr2zNs5PaAg7rE43maQQiBaA8gSDsHw",
  "key14": "exESn2nFLdnb8rgMN8vpeLT4eFpdWqKMydKDjHaw7uQ4ipBrZjVc5UcJU3skBofLfWLKnzEnHPNE1rJWXvoiRdp",
  "key15": "41pCBAkf4xHp8wbbfEsje5ornKXBfUoaSEmcG2pLoSzsutcj3hniZ8FDnXshpAFRtXihZsdNyqFsFcT9s78so7Jn",
  "key16": "4R34xCgvUStABdrmNb2gNAmvYZLjTsY7Z6sgpdM3dFCR15gZK29atjvXfaEyAEswL8PKwPNGd8tzwFejmhdRMjcN",
  "key17": "3oBnFY5Nn3ZXSt6UwbhgvUk1yXx2uUjtQQhRohF7svRQs4Tj3kFwfHMEdWktcnF6dKCbdY12gwipxVqcfrspYQxF",
  "key18": "5aNyEs4VTNYZLkxw9QBBsjPwr5pNdcWXquJBa3d7ywV7eqvGV557hB49sEo4KPDPyZz1NoiMxh5tcGqnFVhjizGm",
  "key19": "24jWiuZyzHHt1SBsu52xYyf7eWP277g6GnV1wXpzodd1zbCwzGKQEYNbnCzLZYL7sH2tRbVoWUnDCfA7ZLeX3pNh",
  "key20": "xNojreKG3nd8PWyyMteRj6xb9f7spWMyigRsX9QZNjc3TizrbBTZYH87HWkwWsryM9dzMrPdNQPe37MjCN1ayL7",
  "key21": "3m2ssUk6S5HbWis9qtigoLS1W86hCnM4fjYoCdWG2WnW9xx9cKGxvvgKn4DPi8hLPzRLNaUKqsu1GzDAtLAbPceN",
  "key22": "577Q5DbH1gadjvTa6MzHtazwt1DycMSoUUeqq3PJHWdMvWEwdvsT2K8NnLjS5Q5YDjd7nEd6h19QhdCf3x3qSY4v",
  "key23": "3FFN8YZWfGGafUb9tx79JT3EYEWqvTVsEicEjrDLzPepJz93k3GWKST4sRfrJ2ParQQwrXJfLXV6kjSde5fgHX3X",
  "key24": "RN1FU8rD6NBQ3oAD29CjWq732s7Q2UGxAB7C2FWd2ptjTDAb7sZtj1cP8K3dBzka6qcwKPpy3n5PUqFYrdhC5YS",
  "key25": "62tbqjksS3o8rsRdPxAHUc2MeRcvRxBNN3cYLr6qEPpUxCJ1VMAj6qeBJFDXrRK5sb5QHNtCaUVCQgYYN5tK9myk",
  "key26": "3iT3FvKKSWBkHCHspTw4Ca2hTgttAvvg9mYKrqVnCEuYdppMs2WieyRmTRcZYqmzPQ5ZXtKmmGzPciPK7i5VDF75",
  "key27": "4x1UPXQqssLq6wfaa8dvMwM8qLeQkgNMkBbNnUCwHFWtUCkAoVMV7m9jvK5xLrSnmxCdNZjEpkCkWfXMFkadRgha",
  "key28": "LkkdEiwcMykN8fX7p6Gk7K5jDSGigf3vHYeoHm9nvZdrddFrc3e3S2t7CeobPmHBVFTgvzkSrTuZ3PhmmbnoaSv",
  "key29": "5TQC3MFprzh1Bba8ZkJfhjSddVdrZb9MGKeTZuWa5vfTGaJja1TFPwUdyaJKLZL2dweMxddRtzpwQGbhWdqBGXvh",
  "key30": "3nXbFLcrzojG6UKorBmxhUHEe3NdhEacQETkzqcBPqpHK2wWKcEREQqY6THRPrPQFfQn1NGTZgR1mhVmTXw6eTPp"
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
