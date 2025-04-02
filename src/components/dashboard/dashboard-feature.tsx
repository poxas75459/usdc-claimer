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
    "4Ly2xCeySmPo9HmMMrSp8kJPtEqQwmi6o1xzx7Pha1SrBDfHiCdjmAq6eYiCQhGPf6dBqnn7reBKZGgsC6R21xBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cH72swWstpseFejS9pvtChzkQBPtipTzR5tkpBnV6ck726zLoEtuGXawjWoP5nfYimmajAuzURnFfxF76ZUGvBm",
  "key1": "CMHjqfenFRkirmXWNtXso2ZdPVz6tPgytj4Jhzgq5kGrUGbNwfXJD7rfac3d8gQTtshBVhzwC83xWDz4vdD1j4g",
  "key2": "5ibmZrZNn8vytBpr1cJNXWZzVNkgcwhiHka2M79Q2nNWpWBrCLsWxG3fgntR8mPLgGrj34Ep16gYwWvobXDTLE9p",
  "key3": "5rDPUrFh8V68Yy2wQzcvxD62YHqbvRL3ozCmCiVKpjXmv9bvjQcXDoRCgjZpaubTAr39k9atEWy2RFeWkK2j2xFY",
  "key4": "54YDvgXMdK9cnCCY9N298mDKjAZ8LacKfsi8SLHRRG5aFRLcHywBEQaZoWTKgmaUZSqJ6Bffa748UiAPbQrkJrEn",
  "key5": "31PPwU4xcm9LZDeRNncf3RRMA6BSC2iSAfYrjwuiUQ6x5CE3dEiqP12Y7aeWsk2AsQfFa639zupqkEZhQA2PzAhK",
  "key6": "39EySjXcuCs5tKyFosF8r8CzSahBi91GtBLrXZDCjTj2cDX1Uq3FYhQF3tqpLFdCpiLkKSyv4G9GLn7HG4csrUbM",
  "key7": "Z37znMRrjyDLT5zkdDpoB3a9XHPAdaqy2nSQfzHsaJkQnV6STDwJBXJaDZaRKg9beWqNDLnG8BrUq2mPUX21Kbq",
  "key8": "3Ecb73ozXauDjw2UMdiAD12MjAcS2T26JHexnMnkGM4YpbAxmvur2jUtABF6U26dbQLSexx2jmHop2Pe6jZknYjj",
  "key9": "2AiXVkhdhuaPDdDBvGWa6rACVBA7LZDaQenr14yoN1duU58XWux1kgm5jzPkEs5TiMPzQhQMZYMqW4frYNUUqA1g",
  "key10": "3pvkjzzXuq7zbwcqpCXf1SUD6NoBYsu1kAKJrjxWMXaE6C5ACm9CmcR27cegBZtgAPDDXc1vUWZb5qrV8FiwE39E",
  "key11": "5WZmjto2kuWSbcKPLaEUeCcJjSMuHHrBWAktm2PitWKyJZYNYXELphVj91Fp16XQeYen5qRZ4PyUrk1jWY7HVtph",
  "key12": "5gLN4NTZDzWq6JtCrJxxgpbioHnvt792x82d1ZMu7TXkUkNiJ4fUhR7N3GWMk5bDfDRER6egH1BNp6zY1fPW6R26",
  "key13": "3Cf7jYoeFZh2m1kXzncByA5ez1gZ99Y9CGvyDdumSuuPaHc1rwqRKMMF1fZpwnxTn2ZL8X16s5wtHr6vaMooi6bc",
  "key14": "37Gw3wM1tTNnzStwUo5TPPQwtRPNMeSHFX7odu7avTdLou6jBjQQdoTmLzPkcMFnaqNSNg3bzwiV9vUfumAkvidA",
  "key15": "5gUAFdKinJ89gVE3FYb41hwPmwyiKVzLuLkvAPdYDoH2HPZZ6rHcAtmANJgCdnJznFy2gAy7dvRATQSifWNfyHvu",
  "key16": "5C4Qo95QbodBEEn9fVAXFvfkRapxMsnJ15nR7UPEX4czKoz7QmALCcrMKUhUkC3h9EkiUaundaW2k4ztLFEZdPWf",
  "key17": "Zv6YGoo7veejzzVW1s8hU5bAmbPFvMswmD9B8rr847cFtLoxDEatcBcK4i8n5beQU1UDccmMrCRfnnMXeeR1VqN",
  "key18": "eUkFKwEiQnYxMiKMYvwTV2SmKvK3fg6ZLdv9mgE9dFwwWJe4yHtvwGPZy7gebUxZzuLnn8fEKSZ31VZeyumwzZi",
  "key19": "5jqPPftNXwrAFQ2EswyYqgvctHo2ZcKzKoGKjwT4cd2LcUFrwWAo1fnMSf9H8dvfhRFUL2qtRFwjLT2fHJ3vhhga",
  "key20": "59AD38JhQWTJQhCKnN9vUEdEQZcQhMmZzQ7q9ZW6UyBr6oG9S3TvkMRUQYxh3xuq3ZDD54zfjxPhsbBTAWCYYxee",
  "key21": "5arxqfBg9ca34Tx5CCeaRCZe5MxCwtC6HoKtCeVfHEqdoC9dg8Rtfp4NVkBGoQWsBDWePxzaQDxP89KFDDFvix8W",
  "key22": "22nx3Fncxgg4SSLtzccXH4NfMXqkHD4zqwBSSrKJbPvqZCtFEwVdwveV6dhvD7Wtv1yBtpdzCNDG3J6HcMywPvHi",
  "key23": "4cfQxNFNd5P5cES8fjQHJCUPLM4GAizJKhbbzQwZpNLJF4v4f791q3ZaViKpS6xbjJFjeMpgwCnuBkrTg7fquFtz",
  "key24": "3bFdJEXesjXact7jfAHrzgfJE4Q7mswKCvhX1tWo7b1Wr1vjCxNY7cUUMUbYAHKc76y6QugQzJgb4pv2tT7noyW1",
  "key25": "65sGVfAkupQCfSqN9EccHNQcxzFHpsCL6PhCsiYxAvm3pTYa5SD86zc4D9VzCaGJVyoEqBrsT9w3rhJ4ZptVSrpU",
  "key26": "3AJ7kF6hEmgFsisLWMnc5mURgWiyaGYGSsvscSyKq8HaS4ju7uPWhyYkA8kfD1V34GMt9dzvTYdYHEE2Pm8ugGk2",
  "key27": "4qrVSwdijX8VWVcsMZiHCqk1iuASbTg5DP1eJZSvWG7NkVDsBUv4Bg5UG8B7iJ13KspVFzDWWvLotjDNTMrvqnEa",
  "key28": "3j8YPzcSDiqwwhkLEEroNRiSiCpigGUwbKCBP5kFQuNWEkzXSfLq9qswg5ALWxrw3kvgfKr2wcsEHVe8XZWC3FvZ",
  "key29": "3FGN8ck7W5UZBjV4vYXEDBiCxQZPXRoPf1cYYFwLGZmrTyWZ5QwWgsojKDav4tDZRciEciq9oCbouRjbdmoGvaev",
  "key30": "641ZA7ccTrfwxWUQb72hC3Jxh8mTaxWPAWqjtPiusvDqUcpQLtdbPKZxuH5s3dy6tN2SfdSE3Cd7kn7Ypsi1pruz",
  "key31": "4wx4EN2vVYciaA2CBErcYiU2oyt5d6ShT7sMBx1NviJDWAbcKpN2zaviRs2GxQFb1YjnbTJPrHwFD2Nds32ayHnc",
  "key32": "3ovUUPzz5PAdqrEDhCXdMSXpgEM7Ujmn5pr94XnbePpTXRJ2j61Y1oMVpFi9rUTPEYchZVXq5GDDqh1hZD4rG3tr",
  "key33": "5zmRPQ6RFD7zMtnaUR4LRyhCMMNFAKYqHCBHaMpkd2pu9ERvbdaBGpq1uyFF8KxFW8332BiihiBDoa4fcpFPCCuV",
  "key34": "2ZLgQ9Dx12oUUPb3AtdBqNd9dNY5VBw7SUTmkKyxR26P9rYpohZR6Lb8hYRd7ig2WXg24DRVb2R3eU25kwcdf6tb",
  "key35": "bkWCqiBse86Lbri6gJhs2andZ3aqH4mfcCm4pUSAZvX6BHMqFVMeoSTSqsG2C7FhmMRXaWC7ZqWV6HZkz5antAJ",
  "key36": "4H8C4BRWfq59wgchF7utE2eExQwJXPjW4qicRA4RqGj4bLZ5dHNNWESmtym5iXjm8qqW33wPP5YhE6fYvNBWXmNT",
  "key37": "4A8jvkkBGmsKi3ZUoQfwEPNaAq4RrDMQFRTTggoinHkx1UN5nwysjMYKiHCnbLaKDxUgB538m9dzE4p69k86SvoE",
  "key38": "5xhPbfnwtF6D3dZUEmgfbAQw9aeaL2qpPr7dKjUMWzg53rKQ3Joez8bgLXWSrSBZN37XSAttjxvdpTL7usNENsM1",
  "key39": "35jHzys4kDpSZhuYdYjgLXSCu4eKjMLhyw8gjmvvSXMC9yNbPEvASeTdGKSFNRhMs7Gq2LWMRyKqwzruDTg3e8Nm",
  "key40": "4y2a5K7ZQCWeMfVt8HVZwzgGXokMEbEtzXN6D3fTwv18FGGbkva6mG71JneoeZYvEHGGAcodDtjA4LFrxNSZ7DYQ",
  "key41": "o8rjrMFu2yjDcGWZdQqqYcbRuFKgYndq6T5rpb3Na8dRuH7NdKnKisZMZ3ArktVfHYhXQtZXhfD5u1Dzbijwo6R",
  "key42": "4h6BdMaqTqTtPgKojtAUvTcq9up9DDwJ7ErqqnFjd1KhphdEw22oYUrY7M3QEiA9UiAcckZck66gS3WibHb9VAQ2",
  "key43": "56hj1tWJBynpw4VZmNrCAcGMAPaA2T7wprqYNV6FvvFZ4G46vHiJJNxYfcYtYA7PAc6eayZ5LqfMingVKexLKkrn",
  "key44": "2p4CWJ5ryGpBspY3RGaZLfnkzAXu5M2CvCiLYgkdKRqzMxETsTJQamdbjsTFaZpXQ3PdTQA5gYMbeihAP6TXCUSe",
  "key45": "xA2HDK7HM6yZrhKjxBnsDtzBNeeZEJgKVNGF9yTbdgcTW7zscddgZFwzo51Et2Gz6nu9HkDC1Yj9Ke7AHeTL7Zq",
  "key46": "34FT1dr7kKj2CFkzNjeBNNRMi89pkGRcsSMCRzkYk5RxhiYUR4XyLvkwT4H4hhS29Hsezvb2DawjsZN6wCX6M3wE",
  "key47": "4KKrtYBXLUZRcerTtBfbf7xtAwWN6t516hiaSwjk8T5GjxJJxjg4JK3ASk72qLhm9Qf1jyVVgwkiQeHZ1D2SHTwC",
  "key48": "C44VvbxmBAcd41K8zNWfsAkrwVvR6WBfPiZghbvAzd9dGwCTvQ7WSGtcXHsntB157oUCcraeySwGXqqetDGjxKb"
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
