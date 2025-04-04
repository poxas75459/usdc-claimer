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
    "3yGKMo5UP7xYNnZPhFEBSbz92zMx6eTjuvUJ9L2dm3rSNcz9xqsa84pGDX2jgtGBGNEDFMFP2kKKUGDMhqKx5sBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aX7P6EKJcFwBwxSooHH1pKTuAci5a1K3UfsbGs2ui8U9dr5ymwvJwzxKZiDrYAXjrBfqaS7Lp4CzNJANqoameYF",
  "key1": "3GN2Rz3hGtMGPh5fdn6R4e9vbRmgRTZTLG2kf1cZCGDjDy6UeinHUsvht5Yst3hXHK6P3y39hboPGRcTgTDkH8S3",
  "key2": "2hesnTTPKvGUGfgfb1TedQCZBWdiDgeStP9Mx2cYpV4fApnSbnyCMkwt13xVakWKcRgrYPYJapYQfegVkDaLvUiq",
  "key3": "4P8YH79qyCFpX7xPKtpimKKAArEM9Ekcfr5U5ox2GRxAtDNTFaVcaY9nZZD7Jv6Un2HxHn5P5s7CfWgA8buFmdfy",
  "key4": "2YPabpPN18SXVN1KB84DyJDMx8yhMqT2Twjj4D5ScyWhqtcBqtPpENPwaCEyYuqTuYCSwcjoCFiQ2wUqWFUbgFpJ",
  "key5": "36sMALn21R8kb1gJ3sLZZ69CnXB3AgF7SixtBP1bvdm8ctvANxvsT4UoDimB8jh7UDihwmSEE18kmQfq58MGLJUg",
  "key6": "2itpWFxMd2tQb8aaj5nfdRpADR5hnD8zJGs7xyGjnVpfPRLWKnWy1KXoKmcXhvd1earafC4gbx6VMyNYRA3NXmKL",
  "key7": "5ZFHBXHE7BgzEW4yLjKHZHk4tjx49Gvjje7qcuinpDifd4NK7scQmmB3AbqSNYPg2azzD6zKMCQUKhguoAdUL4j2",
  "key8": "5yQrDwTREUBzE5sXkPjoS4zKmvAKPkydtzBcgQ75NKjty7Lu1XtpkyCM8PQoF2XhTMseEbbDQ8mVDQA3EmGBN2bj",
  "key9": "dmvSGGht3oP2o6ManzoUgyS4XKaemGRAz27h9H7199GnLM4mKbupmbPFUaz6MDwCAQRnLbxtYtyHyfLVRFP2YXi",
  "key10": "XkgHEuxQGAR5D5KybPh62C4nQYdu1VbwhcpuGiwCtKWybxYxjtnLcwVe3LNznjYd3c3FwKRUXEJY8GpuUPeQUaZ",
  "key11": "4LoYqxLSq4vYichff27zWNLVix3BYRhWvBi8ubxpVYtgcpSra818JvNC3xQJiBfvTdyevRajwiU6HxoekUsHhGhm",
  "key12": "2PVAFaejvPEfg5gaCL7fBqJCuFE2ExK2V7hg7LyqYenHhoGaxzd8zJRxbGihC47xw6xadQMrnhwtJ2msYBM94A9h",
  "key13": "349taeQwbNQVnyfFJQhY3icb7BrZjvLeKDPwVaZai6yiMsoVYmQ2RFQmXTFYs8pmh1WJUNZDn37vSuTVe1F2FFDD",
  "key14": "21ZG9Ahbj9N6pS958WbLe9uvPu3u1BbZDZAPtqBxqqiAP79KdEmMgRaxcgR4Vx5QrzxqhQGa9TsB3btcJJm8QirY",
  "key15": "4TpzH7h52r7hzksGNTt8Au9oZctBZF5zfyziTE27tDb5K8rGCxkPUBr7t1mV74KD1JHFYWGUaoojrTivcg6RDnZD",
  "key16": "5VALXLpWeN3rq6djg7qNgkxSABGv8fsJGbSH3FrVhBrzcnPRfoZvYwhTEBZ1yfJ7aJT3mUZP345uXqSo6MEL98Jq",
  "key17": "4mZoXdn7aKqCDfjS6v5VcGtggr94puZpb1EQuoMSsbBBTdDG7u4uRgd3P33v338jxgqeNXsk53qLrP7HfparQSFQ",
  "key18": "53dzP3KQRGqUz89oCTRdSgoN67M8QxcUgh2Qw8gV8f6jJWPevhwrTjRePkhpVSURf6dQj2E1fb4dy7nMDUzmU9y1",
  "key19": "5ysvFt19iJUjNCpXJUq6A6JiviVNsVcUMWktML4zeL64AszVQsg6L3uqooCt7SjKLYd9k52E2KZ6bTdYah2fiQQ2",
  "key20": "7mP8tng4L7LMCko5Wjuvc3kDjRUU4MPpFCGPqXit9dv57efQuBYfF3wArP5xGaynqzepfn9JjsUZAB7GVcuDHYs",
  "key21": "28ALmQotbmf9M8XwQJsH2V3yHFo4mdJ2NzQsso4eKDAkPCxGXDmzh7oj6FKo5zM1b27yik6srdZmnTrtXSLPEtcK",
  "key22": "qWc4tCGzwAedKVgp1z9kUnqPJVS3Ctpe7rVSBCpTWFKWeQc8mgaqYfSf867jTWgjKxEfkYHNzrPGbMKEkDMWXqs",
  "key23": "4hmZkUomBERab4RWv4nDmQTiB3ioaQNaUmq7WxJ9t3FXUW1nJzdzAx5ygZsptyGM1UFgY6N6NA6bBpr7ahteqb9x",
  "key24": "4ghr3VTbZXBNK63bEkBNxqP6DsdcHQHsstWNJZUm43tiJDpqnAgmKkHZ9Pj4pZPkJSQx9abkPijeCE1bMmnXTZcm",
  "key25": "4bPPefZU3YkMXaFVpkyE2dXNdXwSTGTq52bomuzb5FdhNQchNKYrDge759kntTSsw1PtFBaiDivwHWqj9CrGiWB3",
  "key26": "41PckA2f46RCjWLwCLRTZ9Aw2FQgiAd7fZJkdX8BNA5aHBmzFxd5roGc8MEwmTi4WvHZAUvRpB7juwCPTmL8FCYu",
  "key27": "51L46j7hF4CVrhucEau9ngu2BLoAqNSPaJvmKH4g9amWTZLmoSaUzyzYzVzAGJuFRKDRTA8KUX1DXqutQG8B75Mw",
  "key28": "55TeHofWQacshGGxyGjRc3VZVhknJwp55hT6fSVzAaQZiHR2rTsYkajm1Lu6TF5Fu7AZvHAa4pnLxie3YnGc4YUE",
  "key29": "pdsd2c7RkeBH6FkNNQfAdv5m3YCuCMzzXx3oc4rW5fdhTQzhQgpxSbNjpM3mqTcBZsY15BXBvBQXpH7c7vHXS7p",
  "key30": "254fJ5p78qZjnUEJg8Grm7ttKFaDbPEGxj9CHmxUWKKEBuELdiL8kY1YoKGFWi6Ez6tYUbF4f6k7688PWPgV7Pez",
  "key31": "2WqpVs97qAevB9HHfqkYQftfH6gjd186YB7seGCfz7ehtQkJuQkU3ppMjCyP1oftKoinYuBaXBJWMajKv2zukQA2",
  "key32": "JS48zjcwQZZPeLteE3jg17EcEWX4RgLacWA7L4f68b1zdpsmrUs6hoWcWF6ZKoEAKXEj1wQvkSEDJBDQ2gTXWDV",
  "key33": "DrPmSDup5XXpft4fpJqp3GXUZX2uwCyRwW9cEtucv4dyWgy3SfhcXYzcHjeAhZopPfrKFqHUvEWaCac4bbeHs4N",
  "key34": "5msrz2pdxKE8xZDtcyH9BjBoYREqwKBFaxbhNFKXipcHFFQ6wHLNVxsxFQ4o7QP2HDw2V7BGDuLF46bkR2aCVPnv",
  "key35": "gKKCBsRFNs4xZPisHeeuNMzwgYYWzWriYVhqWQP2MJhRewAR6WuK9VVJac9qUyko5ZLt8ZMgxiBdA5bjVQbUoqG",
  "key36": "4U8FpLDKXDGEdr3YxUe2NjbMpAwjsuoSDtFiKzMYSMZ4M3omWauzyGDqLqfLXw1wq7S5JGPMQ3yiEwLM5GgYNxtU",
  "key37": "1BPketGn1MmZvANtHmR1w3FATi95s7kDdoygsETTcuJD9GUjtyVZFvjY5NgwUn5DbCGxcbTMNEZavLvNCoicgTC",
  "key38": "3t7B2kSDrSMMpQsTNFbfMrGHtmCQRxBbRD11U2pdbEUMaksDYzqA3e77n4ZnvdrWhZLe1EKJGrxtjgTuDc1E6fc2",
  "key39": "3A7fFYmtfmXgZgDyy3WQNWMLNHfvArWET4CNscPYo79Nq232WBk6xhmHtKCgXwJAK6sfdKfmdJCxk5vZUFktcQHd",
  "key40": "2GGcmHPL3Z2harbJgMcKseoDCvmxWAKUDjpz3NGHt6EVHMag4GNH4jX14FwwQkMv3mynqHXp61u238TXmLe1AUFi",
  "key41": "3WGAyjdnW2Z69aojtTiQhY3N14uxNanvXgZ7DtHzjtbCSfMAu3NskdCmgZ3Y8xbeFEvrtbgiC7SRxXhaUi2voEXs",
  "key42": "5C9Xk131sfvHoRjFVgQPJenq9j5vhSzuX3EkqVqGjtLgYkxz4uw7cdWEqhGwWumz2svjkUUXCGiunJ4Ct3akRJCi",
  "key43": "3Sk7EHggukmMKswQ4fbKa8CFkF9bKfxLcmtSG8F9JQLfbGq8rvjCQ5PxwS44MrMyenxWfthcRPGneFHoNydTUYej",
  "key44": "5SbGg1Te4MhQQkEQYNU4PPEAyciZU9hJ9gV8vZyEP8KEF5wYY6bmToxdwCrAQQbRT98DdJUd4AaS1qhZfytCZUN9",
  "key45": "55V2fqhLACHFtYPAwjHbZBrwybFhV6acYFCHJ7GeMJna2gebrM8qpxPSACdyDJ35utxPV5F8N4czEiTKVpju8Bpj",
  "key46": "2NPcTsLZNahhn3j9Ccwn1yDgEzbAxuEdzALjzC22AxoHKRj3DRF5dQntW5LsPWaQ1C64ipqPUm366rbmv2g637Kq",
  "key47": "53yapUnYLZFTysvJcstcH2sGsNDZ5rNLK8Sa9Y2JX4yDLAnXYvbs1dBvig9eaz2uzbHgQZ9QsRfgyJsjC3uoA69d",
  "key48": "5dPsfzzEWHeCdft9FwRFTgHH3qKShpkjisupNemHhte1TNvXQq7MkLUSypm8EQa7LB9ejRvvZ3S4eypGnAaFKKNM",
  "key49": "ExwrmdrErah8nDSJ2Wk4tpi6NDrsQUpkHu9xPjkFzt9ZKkaV9gNxQwT4RAyw8crE8kYyrwBgLcfaEYy14NFvS77"
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
