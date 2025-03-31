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
    "5aB5khRb7rQCP28xKCBRCFARdQSeWjkCziaVh2xr3DwkjUvAsnP9ctnHdfBCCHHb5MyGAamaxUU8FW3PZPs9S3nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQWawMxbPBr2ckCctZDR9cDtSv2A1WFzN7vZ63KTPe4VWAFvgFqLjurR1Z991zh34uGdQzB3oSBusoc3PKeX4on",
  "key1": "4H8wKkzpsnr3dyDqW2KdDLZgPWKNKdhFsMmv5JaiBDPW59YQ59YCgs9pjLS1DRc7FSf1dRv4SJdSoCyN5NJujxrv",
  "key2": "4R6DX2BWvTkpCbopQJNVHmQBWdWhcA9GA449zZ6Ty1MQnaQW1tD3NXXb1FU2GKe7k3Bq3FDGqFYvsCRNi68SWzjG",
  "key3": "5KHkXfy4uKr9ks3iMNUGjDZjaaqj84jV4NcRE4GJdTetWAtBk2QusNPctRV6x5QqoNiLB6TALFbfviiGxWUMQswd",
  "key4": "Rjcg1cvZkbcYWf9jYLw9JQvwpGXz8Es2h6yHdGLmSURHm8qkSMPjeat4GXMmPN3bvtYR7ZpLGAbt2iKDkXMKRb9",
  "key5": "3pD7LU1XKoQz1ufsnGF1Zxwk9dvEcQtr6sV6LaYT4gh9T5uWsYpmtYKQeuPV3a6ER1KiBiN4LwD3X5rQKEooAEDm",
  "key6": "4EBbLqiqtYSbckdRHPosByUk6q7x21WVEaXdXPwvq3zR3M98RhFjmqqhVp7dGQefNJrmwFuV2uvz7woJ6VqWx7HW",
  "key7": "3sJ9iLnkjKcWZFDWkdYp7ZhPGRdmgnSPCJbNGiz8E5yqTEYmLkjkBdbaUZKJCSYBmuQSsDH5GstaQucUAM12Fwsq",
  "key8": "5VyBdyZ4h3Yn6UTV6FVZvvjTNaGnPdmu76ixuNsN2pBfjJ2TjGd3pekDki23F4smindMxw3KfPSwpyjrDMSydXb4",
  "key9": "65eYvLEePu4FXxUoYH79uDLrq4otfK5jbFwRVZi4hAx54TA5oo6ao4Jt4duFAzN2iuKHhhT5Rse8Pect1Xyqaoj1",
  "key10": "2RZXrftgHa7cu3SJU4WHVxVjttm21gWdd2Q2TKE4P4PrxBT43VAcpGc61m8umgczwyzyECSbkr6MtKAVcHMnBJ4W",
  "key11": "5E9AxBs4GWFi2GQwq6hnrNwYEKgUbRnXSFK3ETh1nnRFm2GAxpEfU39W2mce8LmVpnqswtXiC2RFhVyBqnrK14BC",
  "key12": "2CfKLM3ei8oikYYGuuNScvBcskBafLNazF8TLQTmjivVgh4nbxQRvFvajUMoy4YMNbQHuzCG1aYJeP8pP8yzrVxT",
  "key13": "3BR8qaHdL2zV2rRN4PmDH7smbFi34em3YzJbWFaQ7KHDMngiCCar6i4hk1mgyLQeMvK2j8vfwxga61GpSCie9TC4",
  "key14": "mfySiC3fdUxyyTzuZLPJ6B2cTEFBb9Sw2U6WrUQM9g2XhtfgZwKvgE46CFdFPJ7R2jjwLKP4EFTCWwY7e2pgKAJ",
  "key15": "4fRXGjE738ca24BAcNHeNxeyknRJ2RgmsAkhzNqiRZRyYvzACFLRaGq5oxeZQ62EUsP8bTYiaPE9mYnf99APaBJL",
  "key16": "4gAe2zRJPLrD4vawE7rFfxBCk73BjErPaSeEBuk7XXGB4aUwFd2rTUxse9BVSVBLCdQxzSVyHnQ9Q8xD1JzXGLtY",
  "key17": "3GCPkbJ31Y2qAQQ1y6fh8bhbje8XNhLRiFNvPD7E8bqWLcCV7K7esstRsqs9mHvRSWR7azC2hxbAZrxYbdmN5WKR",
  "key18": "4Fxah8ubZ66DUvc2dZ77mdQey5CsCNFw2VhvJgRt1ay3SbahRfHz1uRQ3ATeuhn4Sx1y2E84ySngJaLNcxyh4VBg",
  "key19": "5vErVEwxN4fPtdWusNqjdDarBnQysxe2pcjUhLEDaSb2rEVBrvqCEQ96bHnQ9Z5qobQNa7U2jvp32E3ybm4M4wq3",
  "key20": "h2fdAwMi8BG7hrssqA7iqrHaWB6PGk9H2BBEEC6ogqQt7RfeJeoLwKB6ogpbGAjkSm7qqWjJmLPdh8eHP8MiLkJ",
  "key21": "65aKAapbzYaZhGg7sPprhzPSYet1BvtAqZWdH6jkgsNBa8vAs3dHt9fxEEkZQAUM8sR9QrgkhkLAkJ8k5W8Mfwds",
  "key22": "5UwVQTCR8kyEau44HY14cqpWdUYAb1AatL5muUuMo3mykTaWmV5zGnMjKqfaAqpBA2Qqcm8SEHnjPbDeLv4DJw1W",
  "key23": "iLf8Fu2UxQmoFLPH5yZxJnNd9AgMCFLLHUt54azUtJ18K4CVbjv5gFWtDJp8FUTsQHXet9Bn4f6okxtj4LKdT1k",
  "key24": "3WaqoY27DdgY15ZkYvFUFM3e64D17XXPBenqGiNos8UDVSEtVnbD31d69aUcSivmyJ4pdyByaK4SyKu5rFgP4DBo",
  "key25": "nP27DjHiHpn2RTUCez2vXEj852i127pDkJq9sMxESPLRfVH9895cfZc8tJefHopJNUtTLbAQAnYNJ9AyeKvG4sw",
  "key26": "2cK2N5pn1pwRmNPxiG25EXJPqfAzquLTNSQLpsZsD88eYYFx84fZLJYbAzpNdYZrq9dV7QnpmTnnRpRdUtM9j629",
  "key27": "2juEtiNs4gMv29M4TvZ4qg78L4c7nBPEzf3iAUafWyRbMhg1PzW5dsXMxvx3w1QRtxvpJJHZp5ijXrCx5ZXwE8v3",
  "key28": "5BXHxpppCEZToa2bPqGWTsJwVPEifXMVAbhoAKuHC5enP4uRWvrsrB8VRThHpRqMdZbNB4nZxCSZxtFQ28PfHgzQ",
  "key29": "5PmFCdtDGtTvbSaCGMVHnVfjFPrqB1KGYhoG9ipLo9feyDoTw7z3CXFmXyjMTNsB9f7cKUBZEa5mYbpBmeoRWuRj",
  "key30": "BwXt1AYQqGhFSQNehCX5qx1Cq97dAp4LzCRSk1nKpUNBCLWkuJHuWM2BwErLqAEo989bqDAtZDRLGQRFiFRXCLj",
  "key31": "5qy5wwA3gQuaSLLVgyQTLgaZpcFvrLGgCBqpk3oDgvD7PmXPJJ3JSaw6ESG6dcagALMSuK9WbCbnUV7gGn2awh6G",
  "key32": "3uTiJqQbLgAQjBCnHnkZkyFUbb5yTHFW8tibuD21nmXjoAmToFPbDhR3bZsZ1DSrXvCkYoUAFQf6J1ufvawavTEQ",
  "key33": "4GXiWxWSnutycQbBsniRgYmyNpk86BaFnQZE7Hx17h94pbNcXzhtwKWKByXJqi8gkibuaDNDG7X5xM8ndPKQxLzM",
  "key34": "33YpZNx2uNMdsqMCmtVgkq8by3qeDHZPYEVCpnBPumDicnC1uES7iUnru9FywDoN2dYXH6Cx9kpevSXZj3xu5iNK",
  "key35": "VAYZdZBY3JRHpdQQFkvuERnV97FKzzm9NDYguXpYC8CzvtYKFhUQ5fFmgkyRKesXNkdtxTp3raw3Kb7TJqnR9KK",
  "key36": "BgHTZiw2uiYVTR63ETgjH6emXrXhNs3HLpDLTysjZF8UZjd2k6LwCxgyGTksSWSZTo8r11tCKxASefLaLmunM6y",
  "key37": "2mKm8DrK4SLngnBwCQriDU32Zme7YzryFepE9n23m3Z5wesrMzaCzJH8fDHLK3coBdMN37hX9QRDwEtVau8Q1fGC",
  "key38": "bDKCoF4M8XnnRXcXZatfouHvmSoDxYvvsK17x6Fx4cWhnnbtDi2SwDQzaW2GByuADJ5yLA1m51XPaaKzA643Rmq",
  "key39": "4UKnryMdG7hhh1p7finRDWKH7JUMY6J43KzzZZ4e3fipDRPm6kUYcZVqQHV8syKEuFfMu4HDdkVwwSQU5GdaNky",
  "key40": "4mGYpr7mEaZf7C628Hs8v1RcAo2zAGMvZ7ePsftmYFFrpjCvWSAxX7G29GxsJpkXg6mptbEyCXEUS5APJmeHR6Ru",
  "key41": "4FBVBUzA2cEnKTq6AiVuH5NZRRfHfP9oiV1hMhzz2UYEdd5nJpJcgUanVdkxfnMruUwgSQbD3tJ2EUsaGpHwX5mP",
  "key42": "4Tz3h6jdLh9LW2tTaCfn7ctvVKWEXzvJ1JJizrLMyWNMgc4688QPVm8A7g5ydqTepavuaWcvyr4pYsvokqA4wvqi",
  "key43": "2SCyseLD9em5Mpu5J6JrGcMBq8LBf2p72MZmLs6VWaQFwkGaoe2LrJDS5GzKUy8Lzha897PZiuR9QZEYKkKTLtKj",
  "key44": "2uXf7a7t4NQ87nBZCk6Wj839RRYSigEiHn3PTXSyhq64ierghxnMYHmLSj3oN8t69AVdBr5po3dXdqhGjBN5AZYs",
  "key45": "5pcZFaQWXT56rkT5S6vbVzQukSbQNeunJKtPCc4JNVquo3N4owEtpMC49RcQ1QQDfHgWtpLS55oFeaRYjFfZMVuH",
  "key46": "36sDRVhAHLBRN7UmzuVhYQdJeJvDHBjwbV2BHZUxcbhD1B7UbjxrVW7Law8egWCYFCg4ZwXkASPBpTM4bP8GjT9X",
  "key47": "5fzJLqz1w8rfWfN8e4iTjYS4Qo6AkXVtR4ZvVkjbFKELhNPo9XyqM4ryiaEWX1oEN8Yabpun4t19pgyz8Bm1o7an"
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
