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
    "5q5SwMDxvhbWsFAE58SaMN7GyyboerayNhwX4dYU6FkTxiKJsN1tWJPceHnCtfE59Tpy5sreK4bNLFwJ9EMmdK3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qs1gSr7s3Pehkv51Hs5NLH8HCSxvMsK3svKwNxmk4jeBRKK9EU1cX1YcY8Z5EgH9tMxNawC2HwNfUVTkc7Aiixi",
  "key1": "4Lv8Jkqss7e54aLt8UGZyhse6p5b5JiwW6cgP6wxNortP9LczNGvDqhYRE7ambUubNyQHsoJ28FCV9QXumG4quxq",
  "key2": "Y4e7SMnr8uqKwozpaWWuNJsiYNauAhH8KomAQeFJqmvE8Vv33i315KXp2pNhr2BBmewBFGuEyaB7pvuVyanZwfq",
  "key3": "2P3sxhJRywhYKi6V1rdH8c9UoTgBD5aPxkCzoLPgmkE5PC16AM77igNo5r27mgFYEqM4S6oKpRscyui5FQjFZh3w",
  "key4": "4oBgqA5DvNm5Lv4KeVEabsa8Sa5paPgXcACB2ksMaELcm24RnNJKnxWgSrg7Xj3EZrnXyorWUgMnebNNJutymmXc",
  "key5": "YF8qmMpDy8T5bWSwgeKW3wPgTEZH4RTCkXd7kot6rPoWBBtJ3oyj7vYZBEgfiQuu6nWVK4H3SZzf182CJ9KsV8n",
  "key6": "3FLBXzUPYv5WJNZzktHMRYHANq8jXjjF4vNpKhWok6s4a2QcMZ8iBjF58QGk3QRPLSSDK1uNH5fje7pU499pqrZo",
  "key7": "3YzZDHQriukdsmCPrXXDRoEBgWZU79upzpSyw7hvpkBGVBfSU9uGG1hQJeRRTjDncpmB28eQ8vc7aEdZcam3rqqd",
  "key8": "nvtMKqjV2EucbjJd9rRrNhHX72a18uFd5vnQcck8qrdHNrL3FGBi1kqpEdq2eWDw7BNvaL4GdAC3nTQDXpkAit5",
  "key9": "3pLhqeWYTqNBSRqJhKb44RH8sRwAkS5DA47ouHXPf3SXmJ22dVS6ENtQ4vNfaEs8ucq7DnVoSczWuSCN38Tsr6S7",
  "key10": "3uFtEJ2r6JLeDmmLTCAH74msz9Cm2gbj5v46ECB55PvGGDjbUyCvkSyAirJhWAUAREzJdFPoH4H8tJi8jcmDZxiH",
  "key11": "2jpuaiaDnkMCD8264KzDkqTJVU5dL1Jg2kshvLhyTGRhPs8LQXegiGXWqJcAHhxMXcpCcqFWchMvTxjvHHCkgvj",
  "key12": "q4DzKim66DWpyGPwpzusQQQXWng6GCDFUBg2jV3tLtD7XDk5zp18ZNmCEhAoe9nDmCXmQkMvSy2NAT94XVwtjUN",
  "key13": "2aEcdzNXZp1ny9jRTZTBiQ5HkVLddfDLuWgYbpoBfhADcHfUQUVkU6g8PR8aXcEenN2Gjod8VHb1r539aMZVHMoC",
  "key14": "5yKzRYqjkjtRVSwoGM7ZBWmwqNuWkyrQnJmwbpX4hagkG1YytD29m7rVSDbw7BqVvCGDNnzBuaFegTkgQngEE8p5",
  "key15": "2imhkB82SWjwJY3XZuQnirfZPnCdyHV1o4PE34F7tPvtMj7bpWYtXxj9FfykkjKrwhnkneunfro18TCWTeorgpC",
  "key16": "52C1tRGvrsfzajBbcJrw5qqLYBVBGaxmk5qKZQq1KHpKdiMBmJaTVN24wK4Wfk75W6BF16NEKxfdvXjTxCAs3BRR",
  "key17": "3RLbW9sb41BDdXuZx6cwKDbrpoQsNPHnstRJGUm5FH7V8xY8AcgKz61KCm8YQMnWXksWFMtLuG93q9bZyzk1hkWp",
  "key18": "4xrTSUXYfGQmsZsUbfBsqM5HTdrkqbvxu5Wnv7sJR8sHjPzHSXQi3TURxzWCHcQUH9Eq94bvVAojj4yVzmygmQma",
  "key19": "4v62fr1dGA7nwrTbMy7u2ZJknhUirawvmHAVrwgwCk6PP48BR7hsqCVju9TBcyuR9eegScXRqy8EgZpRBiWccg3h",
  "key20": "utMVYCjou62hVSHJNEzfa2vpmfNWsdZ2iPRhmpuiDury4nkF4rzFWLi4jpToH1QKKKRcAz86WXT2VUfiP9ikNWP",
  "key21": "sk29MG83G4Wnbj8zLTBaBx9znGbMpd6bT9PE3gRqoFgkRYL11nZ3rttzACAR3M5CS7NuVagrzn7ntbikR8YUErC",
  "key22": "2QhwkksmKtFK9DDNEq98ZVjBXDd7F4ZU4mM9jVWizofVex8Y14eNzcB1MTb7T5oPowHbfjX8JSFK8V8xC91fSo5w",
  "key23": "2Ki732VhLiGPc2rYnbpFfaBLAMZKoSfK7jrYwmPjVqPwT63CCUsC1ie8L8PtYLJYaGK3ibT49DAPcA3Lk7ibFhGu",
  "key24": "3Fx4EkDJEDAnHngSfH8VQDZ32omappMtqkgjzo27fhKAqLV1QkVjTNNJCrWC4tJ6yQqzHigQtUntAnkMKKDp6eox",
  "key25": "U7wcHhdC2fJsMU9ApLSxpT6fKN5iA9ZMLPPiu5meaJxXKwFgatKQWMfM6GcoE9gdCV3wYwuaPoenFeC7GnPC9Nk",
  "key26": "4NM7tnMwVoxL4TvMcJuCHzsuvoAPF8hcPXz6HSstAnXLRDFJQ4jTwTvknbCS8uMaQWmzNrHUb9TDRtwQHZEtXntj",
  "key27": "2uE7LQvLAWmyNKmHSAd5sReQmhYfheqLy9mecxsCJa5Jvd4uT5Qup4hZyUjWHFDE8VUoSge5fpAmqobxqSsF3U72",
  "key28": "4D6V2yyu7CU8AeEGWxTehKYx2kr8HoMS7LsL5ZaFeAXEnHmjvByYBJWoh7LVgaey46MDyBZPVvME6hYpXu9u4ipS",
  "key29": "67T72WoHoQ7HTZPb6HryD1vUc838UT7GPZK79NV9dCmYcQbUq2hGHWYVhat3qT6tZ63SDtLzTcNLkQPEVGVpTrFh",
  "key30": "ai7xnpdcFnYyK84yc3xA6UacS6BgzR4j6AMqgR8mjxUmauqoxRQb8dqS1dLeYxvekawpwJABLWYTjTC6upQEvFL",
  "key31": "435FVxyCMaPg79yEnW1kApqZ85PZ8nbE7bdqYWgsBwYQroqR125pHx4a5nQ587DqApM3coDsV43NQavoeSd1koH6",
  "key32": "5mpanzKgqg38fANJHjndsSZTn3jzVRZszfh5e6sBFxj7yjL4YVLtn6gpdT2DC3QiLkqYDMAVe8Nn8gUD2syV18Sz",
  "key33": "4aqGMcwjjNQD9c2khCjZQRzwZFMiExR2iJpkseEYhUSeivsrvE5EM11FgAJ4DmZbfPh7hPEPxbbQLJXT4btUi5Cc",
  "key34": "5px7H5uDx9CcM2Jr7wvhHbwoNcTfjLbJTq8LvfHpCCTibAJfezXJcfsSFBmh95Bam5nc4XKh6zExs65jJaNhvqaL",
  "key35": "xHz5a3Sv1AiQXqUDYmdpZVBxyAwUDJ2KGi7Az2CJKV6zpXRrFfSWEzDEyF2sVJsjShawVfiw6sArasHgrSiaBiE",
  "key36": "3Pp4tiYjVS4sbdzZqEiNQPZaDb6s4gKPamCwBNofusvWT5GmLBQkaB776GVBuT78oQAEWNjeJTQBuCwEwH1AZyAh",
  "key37": "4L9WiDMAFWgjeK5Cf65jPM7HM2yNPvqKnTqvZYvLuWJs7Xk7cjmRAzUHzZdTVCPzikCEy5tB7qku83MHFYdKymo3",
  "key38": "c6PHpF8L3VWWyHmcumyabq6C5hikpZa95smxhEpbZ9xS9T8M7vJYnjLdvhGPktsqHdzzrgQgxs9HdLBK7cSzwDk",
  "key39": "56kbbvjpuxKdXnwSDaYGQKTqAhR6j9aMz5k3UAvgTmKXEuvSMRx4j5SrGF4jZapXTCVByxKvDaiPP8sg3o8i8319",
  "key40": "2ezdfj32zKQhL84qTZ2v28s3uv4LvohqmZtrsdrE88X72aSABHMfhvB29B4S5ZXq1ExZG1g9cKejaJJSpsu3xLcX",
  "key41": "5hjPmLcR6QyyzGC44soWu6wzGSGugBizfusGgiSFjxNqfUSgJPYoaNhMGxtSUMkpdEaYfp8FcdXkE6vmGqRinF1g",
  "key42": "4fhYD3jAks94DhXQBZsmAGYqVUv2rayJsjKfeBofZDLzPnk3Um7X16Kxr2Q6QkRzuhxM2r5feZ5Pyz24PvNgkAqr",
  "key43": "2iFYrgR35zFWWEJ9QC4MeTudQib2oe4zoeBRyqrtivb2kpNedPTynkCCGD7A7gMzgwXGBVMxEFbasXtjVDLrBdZ6",
  "key44": "4NNS9WWRqzzUoZhWaLFWta8hZFMJoJyi4x9tnjD1g55r5vJ1PKMVdgDVCYe3Yji2nJT3uvWCBAL2AP7BXXGYEne4",
  "key45": "4iaBRVPA3HEUB7HcYGewcErhZ6JjoppF7pGJgZKmrdJaPLi7iFwZfcfWthVFJZmiq9bUKLTkPfCswmpWvu4EETXD",
  "key46": "4YbSBxHRwc1MxE7S1GXK4gouP23m1BUzsd88Gv7TUD5zFPB4Vz5RpSHnA38YvtFipUJnFuPv6hTHiPzhuCUVU6Gv"
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
