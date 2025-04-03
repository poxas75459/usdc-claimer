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
    "4eUUUrrhKzneEfMSTw6YPguZP8cK2o8YZnNsAQydgLpFunf6NyG4Uu3VwU2Q2AVrRkQxdP492vqciuqpM8UyBgTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ESmD1iKwEdHHZ4T7aZ1w7poaUfzFz2g8FTSAsB8HaJb34gaqvEupJL27cn7BYzv7ByoDAzzqkZLm9wtaQsvP8uL",
  "key1": "gyUCGYTjpFGez3hfqbhKuGyEAT9gd4pX8YyBEgVMvCXyKehkW8GfBzhKftZuyRDzRCDGsocSW9SNtSm9WAZ7NfP",
  "key2": "YwUTJM1mfmtVhnS8YV59VfBGn96KUyAtZM2vKjecvHzbprHLvb8mUScmEXFAQLv917SdyUVc48WAKRgETnMfqxh",
  "key3": "57oncQmD4pMJ61gdzmvwNTFxZypiExv2eE1Nt6qwoCWpePR3xUCqVp5VkwLwqKCirgFsTM2zcaAJo3xzFJAfQx3m",
  "key4": "57rBLrbZSHpxQsuneYiH4eun2sg6JagzMzzNnE9wQP7RMKer9QNba8aATdLtmpHzs7zDzEg4ACZvFZrFcNc9bYhM",
  "key5": "3xnKYu6aHuXQrXQNaAseHZpKGo21wXVwGds8vovmKzrtYixEECkFNEKnL325xMjA49iB58NhXdSzmWVmFcQiJ7am",
  "key6": "2nZoCGzjp1BwjBgpqJb9geHHSswkkzokXd6QrmYFtM7rTGQmmhuFqc3sJDbagk4vY42P4U2M1dEdGmvKfm9GWrsv",
  "key7": "HXEReXcsVs7LieJCgENWWyUYYpMwLRw5QcSAvcAutLkqc9yp12HcrGyE9Wv8sjSu9Vhp9SpFbR3arJiLbNrEaWU",
  "key8": "2wBD3XYn5VUAoQdVkCBBFDYa4WGbojV3N2WCWw57Ew9yxt96XxFzemE7dLUBq9EsSqNtn1q1TKtV5L8uzM44EfHG",
  "key9": "XnkZMPCrA884zKvNAwA7ZTF7doXPbSCk5Bi6vrWoTVsEY57t8sqt4aQUjSZHcG47PW7QijiBPEJe2gwvsgMaZrZ",
  "key10": "4q4VAHqURXGPapyZgBQnYEsk73wM6rX1fWuce9GJQAESwuZNxWD4GdM3bjjfpCj7uzj4QgiKJcHfqDovSnqcyAe5",
  "key11": "2Vv1aLBiCTNsA4KtbPieXPyqXxNedZnCood6y9C1AZ6UQJxzb2SVpNmAQHL9FkGPfpb5XpE6EMzJY3y9o91rroq6",
  "key12": "b7ZxUhShwwX4ciSPccisxvfirhR1j9H3Db7mRSrG6d5h4Gn6niB6rFUSD9VUjoSC1XR3Pd5LHxscLuh923k3c8W",
  "key13": "43YDbbkK3KRPnZcU4vv1uxYJwqxPvmKFLRTGTurxydawU3XycRMTiMKS5LHBTwFFERW2ZLzmRwAQ65pKqpn66AC5",
  "key14": "5Xa7Urb7N7BEJ9jDzf61PoCrrBdRHKkd5oiiJ9NC7mzzRhDohSN87yHNJPjaLS76B7RTU9nf4wWm6kDxPPnmygnf",
  "key15": "3J9rnzVJKEFHh1rjpCPKBYnQfqbAX6f3Y6XjGPugxq49mFTAWhC6aA14Za5A1Dsdd5SRp31QrPrAMTs2epEpYCUo",
  "key16": "4sZDuSyyWLxfYjc2Kz12jNvmyyL4KamKc9EqfFViidL7kV3rBt7vgb1dSgspdqn6a2jZw9bkcVXmb6VnoDqQ7UN5",
  "key17": "W82kwpspMJjih3wCAxUbrc2Qghv79HebzPoheVsvqiyH36rnjEgKrzUjFC1NLASMK7spFLyMhh6peeceWkpxDWH",
  "key18": "31HgZv5a2Y6ygnrDnEW9tq3j6f7WywuLyKfueQCeKU9VfAVPA6xHKnp27QwfMvw9K3qGjjTiiqArpB7mBqGAHK7C",
  "key19": "3AWY1PfXhbJuwchTxtqoTdjWvmAkEz2tr9GuXrjFnp3hj8N5NAiPtVBqUTziwApmbAjgzXSeamF6KQAEH9TsR45P",
  "key20": "4jv4MTs8P12dUdGg6fyzJUbb9vvb6BHBm7b9Xaiby7FGcmJrp1pB9Jab6oRssfs4Kz6hdYfo2Vy22ADvUwNLrA13",
  "key21": "2DVQpLqxBSBTxcSLkzuXiMmsX4BJxmN5jrrkYnn7pHcDent4EQZenWLrjz4VYRLZ3vL9nA6E98Nd2WH8txx8tWoj",
  "key22": "52L4Q6NgTcXFDNsrEKVMh4PNLappDxRh9UfezQS2bqM1B6Lpgb7KaGF3NjxHdXw2zbGQBfVHJwiN9P16cZdWHSz",
  "key23": "2xwF3LsSDAKqCHqjx47pAaofr6N4DcXeNSdo7C1ZTXxxPF8oHmFAhXWVmNuCc1SN46Pc547nc6ZRF9CFea1WvobJ",
  "key24": "2Jxubg521CU3yLodNic6spt9FBEPasTKkEHB93LVny2rKZPbuw7iKD8ewQoEGHBtGjeWF6ni37RL4ALrZtopWWK",
  "key25": "4r1UXvFNFrJ3tmT1JyL4yeACsmmiLF3M73EDHAJHoEQxVPn8iVauJwRRkF9pNbpx7fNQMwJKBhpYTwoHnwP2Nq62",
  "key26": "2zH4HZyfZpceqUW9vqyxoHu33JzKXyPkDdKd6zKHNB8oUdo9yqU2qRd7UQEQvivy4grxrNhB1JqfqNnWsUoKHnoh",
  "key27": "3RDbiFEVh9y98fBqp9erc7PvhTBF18ytZUFU5RrHFfgt4JUuVubioG4nWATLLLC9mFkowje7qjFqksMwk7rcwFGn",
  "key28": "4KLvg4y4RxwhgJYhA3ZwGKTGAoKKsBhxy8qfWbTXMyoTcT8oXoxHEi55ngi5tXH8GjwG4PUg12hDLM3VZnkinzd8",
  "key29": "44S9ZDbpmsyWjytvpoqHrZH8brDn11wPikM6oqpjYwECMpNDHhaQpQoAL2hYxt2oG75SzPhqAFqnLuuPShyc58bw",
  "key30": "aAARpcXBwC923G1MMbUJZECKd5ogxmoD8LFMumJppQ6J3rL7MLpbJoNwoDdpFEnMVER98Ms8NvsfGgCxbtCpdBh",
  "key31": "7GB9GdiyWWRLLSMeR1LV8LbHMLcdaDx8USgxDCrutSeiWcJVUV5cjG8DkvaTKJrJurNRcxitAE5HLDa5AUAGiPY",
  "key32": "f7QJw8hnXMqji6p8Xm4tViKkzkDi9Fcyboo9geUf22QnYPagDvUZcdgChd34Ec7U56biPUYSUTXkkZowEb57zfc",
  "key33": "4FM8ytc9zkbkVs3k9cmaNLtDpxade6TD1tDnjYiPoy2ogcgr82nCum3JwG4fELSioEFEpJ1YWpwY8hheTsee1eax",
  "key34": "rUY8kwxSa7UbFJniYcCtDoSgBT2oKAHBZWsTi1ZUKdGZyR7UDpn3xcUueYpKGzeaosXXGrNycdNKx4u5ZRr2Sp2",
  "key35": "2H9Q1dt5DxmvYXSgRNYvgAotSMn8KgbNbbpAtzeRXtk2ZE4E8VUAqaERpXSGYdvNGnVCN4b6TGkntAUTvkXAqMp7",
  "key36": "58kvfz9E9SJXcYPbkLwntnb2MXNdzWdSJYBjGBXYWiPKu6kAwJ3LrA51E2173DLTJBa5FBC6gBKZqqBrnS5fFGH5",
  "key37": "4VofmsXerj9q97562Xz6fv4EPZRaBBsgP4dDjxheEAxREEWTgaRgRk4wmZFGc3ETVnUmHMmsc88tNULukP7Qyzpn",
  "key38": "4VM5m9NU28fFnzm8kZn75iXwLzqWDg8h8fsbMsHaBsmUcWZnuepy5Gk6cR7XpXTXwwDCUAHNVBN27ni83TAeUSTM",
  "key39": "4dAtvC3gzmbcGhohi1Dv4j6WAGxTAJNTqRq5Em2ruJhi16rk4Mjp6MV9vn6AQg3R5gHNzqMyn9e3FpX5k6CS8ig6",
  "key40": "3CEbhUEe6rxJsQKgGazaYLWAHYoXQNdMjAUoxHNN7on19c4NWeBN6BVsTrhCrfKWeXV7VmFatPspCUjjiYJtnKYS",
  "key41": "6AQGrLMFLQQC1fYfjWbWQecksqkTGmt5cULPBjFSoxJR3AyekQUUwQqWp2kDRLPFzL7xX1u4D4n3FF1HDTrDgn3",
  "key42": "2ofwPbJZstRnXaNrnsbpGBJdk2emM1su8D3yDu8nProD1NZaGBjeuk3Mn3XDYdMUksAad8dJTyKUXM8Sobcx87Xu",
  "key43": "5zHzHUA8YV9Rdk9U5GiFW9RuppDSALoTPTXyxTriyC98jp74JWoC6WFcVb1XVtujj9wj2eXwm8mWcwdAYAEqde5o",
  "key44": "2yACeJxkCfrZ6cYj5EVkRVCgXbJLLawqYVZbKJp6sMV4NahiPTMaX6gkzt636diTG7DLwkHsSCzACqCLCnsvNr5Q",
  "key45": "wMHumv8KghC7BrjmygvtSiEwHeqFwbJrrDTmLKZnN9p8Rfz9BfHZw68BJaQas1517yMgV5TfGtQpT5rs7aX6Fuk",
  "key46": "5DYu1vUz7o3z2grsxGtNj5qSctAujNSQVRveuVVVxcHqatPtfUp7F5QP2Kkou4MUFQBtStkhV7iSB1br1GCL93rV",
  "key47": "3HpiXaGMu3qTkTQKDDARDvkqgYHTPzX9qpRLKG9iLiR2HVv2LUwxaetgSMue159JBvYJg2ejU8cmSw5yKcE7kepK",
  "key48": "3DhvgiqiM84WRgKWt3LwWgZ4ZaNSofww5BQdjBoRBX8bX6CNcgFTE3JmzrV2AXSZNWJwCbAXKw76Pe6SkuKuPNTo",
  "key49": "vBR1NG2D6Vg5Lg21NhRhw5cz93uJtJQH7ztqnHy5Fegw1UH6WXaD11QLkwDWF6pb8dVx7XNpgegJyhrkzVCPU9k"
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
