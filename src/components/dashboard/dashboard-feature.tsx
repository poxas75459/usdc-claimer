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
    "Jc7SBBpBLMY22J6mQmRXu3fkpWS29fs5XWGrSMY8Mdq78zxhAoitqgqRcmPc7SKtyTPmNUmf9ZnbZ3m96HqpWvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8FJTJnBpV7K8oQDhBRHCXzP6x2qvSSFZ7BngrbAWs6um9peCgATdSpZVi5TPGxKR9iwGb1QZojZQyfKcrQacS8",
  "key1": "4mHPU8WaWJEwaJ3fSNipN5rML2P5PGon2nrkqXQpCmQMf5xS5dxbTyevRB6bhaTDg1js3Y5t9CbKfN4U8TA2dyrD",
  "key2": "4MyjAHH6YiToGryWT4c9dhqvs3Utp2o6Q4HZ1xsutfiwJbSQAhKDcyTxBAGYa8XZavwG7DM3tM9LVbxotyi44TL6",
  "key3": "FtSVPvUTdpeHHqWMZJR1jwDx4tXKBhub2qeS7vxSHdom3Rsh1KGgdrZDYFU9V1y2Mre3Ww73TD6ibArGSr6mc6a",
  "key4": "3QijTRJcoidBjkr8Cjsb7px5CkMbwNDwtiD5jKc3aACgSdP2r7ac3vsUeB2jkraK38oPWAJuGxBQW6WqLAv2AyMG",
  "key5": "TrVBscgQ8A1RjY8wp2d2yVXy5LF2U9ShaHi7ztEzmhKrFpJ7vG76rmMDJ3nvAo82gUw5J8XjUMn945UoFt1SBpN",
  "key6": "4qVHqqosoLgPo18Y9PPLdQHyGg9P6REJnHwQPd4Dcqcts6E9K6i2UWvtKJyK6VLUNs1YaHzkduTVgQPNUPDRZD8C",
  "key7": "3tKjf6cfZU2RwHaCFXG4mwMDH3uaoaLZE6rXg86A8nnZV8eBHpv68SgxXRTjHWfs2Ac4u3cE4oZpKmiDdGTXJgd6",
  "key8": "4h8LbmomVT2tVLW3pxNo64ouv549YFG73h4htWa73DNASyhHPKmdU8nqcctMA8WiDTfBnSFCohfuhi2Sdwyw5k2T",
  "key9": "5LsAQ47XeCxgqbHe3uynTWmxzhBF6X46sdwpqigcr6rZQn5kctM7jZx312xipCF7XweXox7DbvKNpvgxh42QuMnj",
  "key10": "52GfJtpfQ4GLqAQW7nViQdnLcbe1fBBNBfxuzheHMC2NBaSdbrKgimqkbJ5bemebiyDZSNTvEjpZ4MUhvzzwbeLA",
  "key11": "5PnzCkRWuFxVF8P3AqwgNEifnonAru1de7DicCkgxs9NW5FGL2tmx64PD6LKReNaVSrHRtursdQbzCjABpG5Eqqg",
  "key12": "3kjKihUtgQ99qYHojbjWCbWuJiwHXK1V4Nbus9SjUPfTFHkyHzG9wtifqArpq4yvi2BBq7ySXe1s2t57J9PHTMBc",
  "key13": "2dcumBNd1JfcVzfbsNmTf4TUCbegZRQfq6xqXjbPSja6PpkZXJkuvb2SHms56XDKnAfmP4SWAG9Xbt9VDM6yM5KJ",
  "key14": "5Y6jdQvbvPSEzFahp3KrhEiBeJ9SyfWg7jbbtypxvHMEXkoxqpuDmraSusvjqtV15QXou4VJqqPRRcCnPp4KGjky",
  "key15": "2ABpV15dC9aSfPzmvtSp176zqVWzZ7NxuirLc6V5XiWvLv2LgBunZK4AJcUACGQq77N5iZU5Y8GZsaJHhUof4LvD",
  "key16": "3WbUmfv3auasFvehj1a17BCvDXiWBuHa589Jj1EEMN3ptXkNqZpgRHBqfgYYh78RaSwcG5W6SMFrcCrPgcEpJDB",
  "key17": "454PNxbpNtNDtp9tMfuzahWXh1ieYL9fAdF1VqySD2vjnYDjasQibW1E5DWz8x99uiwP6RnAu5JYDdW7aRH5Kv4i",
  "key18": "5zLf6fYn7ntLu2rmsD53oCZH9ZbuxaaP6ceWmbvRZswBfQwTdCSuo1fb3MH4NN5tf2r39VtBEemNLWGt9iGDFmPx",
  "key19": "Ski8piaFCkKjs9QwJZ3AD1LRmPHEe2ZPYaZRyFYdCpcGiUnZ7XDo4bqmn1biMbWErKgF2ayzo7ACun4W1zMRwht",
  "key20": "44u9rKbYcQ4KH2W1wSG1LPArN64KBGk3uyjHqNi7SkgwHM3EtWUsXTJCy8sSGkmxYnVJ4r63vJZTginVt6aH4VNd",
  "key21": "5D889qLbiYBrASM1TJmpn6rPTDPvg4wTLUKXH71MqF8bMz5GtFXXNG952PnHfLS94V7dk14Hq6p8b6kwiQveygEp",
  "key22": "2EZwKYwMUZewEdH32xuv6dTKP5yKXKJy8t4TdvdeLx3gh6VXRcvPZBcxLnokopsF1b16PDn19zxyDAa2j9VHJfYJ",
  "key23": "513e7CtXrgN7tkYxnUT4cJ4dGNCiPcWhpiVTfQBWofbnhofC6Ap4TTrN79q3T7BVXKY3xaBJ4vyxS93Com2v63w9",
  "key24": "5RbXQon5oNZLw2eCZD6SpQLxYb33sdyMVrRgVGTau9vHqjjf9Rt6T28EWuBMFjsdYRYj5DyNZfLfn3hPqCkFC5Zx",
  "key25": "54GMH4rLnxZieLnnn2M8w3JiBDDJ38L2tGmaWrkuVqdNXnDjbPtfTWQX6cqkejHMXP8uuyf1s3pHo12B1JEDcK9n",
  "key26": "53cPwicQavBcezDjaUC3HZ5mJsUU9BJUJRMajfktq527g5tZRu2Y7wdTUvuaLWaJHqm1LkkMMtbKAoLWAasgvdZo",
  "key27": "EF6zXM54gs6veg11YEhzJaTaqq223ioNQJTtjNmB3NrHGBwT5W4qZuno6cqpJy67PqXya5iwuGsMVAPRndmBu52",
  "key28": "ru6uVxjFY2YhRUiS3XhrPrao9ouhGTScRTsVDVcfbu1H3UDkWChtiY5XgeCQQpZnPe3whnUMRWSYgqjN5VGZ3Ny",
  "key29": "3FvDTc4uFv5P1hRgvqcuvQ3ASvm82JE2bo2zX3evsC6abrJ4EZZVZPtkVNJpJo8DB1pN9aSZ7iS7Z2dsb7VWupd4",
  "key30": "5SX3URB54yETVetqbvwc9ykQv1HphMb3x4AGLqDMVmFRdEXNU1Fe3PjKobdDB9DsELBzsMeSyUH9bM88EmYafZmX",
  "key31": "XMG6DkKHsFh5FHbQ1U5Rv3aGUQECfnyFiCFVSH6FpVHtfFDmejzHFERGzBnapZMYnEkVyDL2Ri4xN3nrQDvgEfM",
  "key32": "A6znYrvgNiSApk2DdCcHG78XPMX5M4eCJuDH82oCWTKX9Jm3GZgKnmsXBE2hXP5qbu6sKF5oYiw4UctxjP9N5VW",
  "key33": "KP7kXm8G9WdpYvGbJZJ7KwhNf81dhSybkm8TZ4tNQb3rUbbVgC1quEevLiqvjrwYbEE6eEUBRr6vLPxoDwxj5yg",
  "key34": "5Sv3V5HXkQPveWVpnV7RWGzqSNG4wuuUTKzpbnJVgnqE2wc5DRemK1cgdcfPpysy8ATotJfT6FYH1eNwxdJnZDPX",
  "key35": "4hyPGU9pgpLX6sA5YdHbkm5WEAbnyDsGD6mANHa3oU83Laroq3sxjqNbcBhVjNjSv36RPWTv97QmHA3sGDqjfujQ",
  "key36": "y34rv2xHAucNppi3REd5wcjMEKrn7GD2hETsNJMUSxxT691yGZib4kd7PD4YQM1f58uwtUaKsJDMwvK2Zc9QS8B",
  "key37": "3c6EdmAwu3idnTBvUDosArMeA8Qmf6e5PmQHFiBJU8Ur9SBZUPcrWnHfa5hvU5uFLb4ZyUEMnWwgJQPGVq6MG325",
  "key38": "5VqBpEVLRYv5LCoDbi56UFqDuy7mwi4oRbd8P9anTKsWxkUbDmLyLcyqAWD6tLzz2CEsWN81F2ZuPdcctfVpQz1b",
  "key39": "LqqGq2g9YDn8zYqBH4NLxHMPU6w8NPjuYkeRqFLjL4jdwaDrpa6xv257WJugziY1LwzzriAFRHKYjPvkYvmZ2vH"
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
