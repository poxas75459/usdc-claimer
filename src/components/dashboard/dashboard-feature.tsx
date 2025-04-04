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
    "5DXYBCY4Esv55UK86j1xRbach6xamspsAZ21dFMZ9KK8aQ8krFAMA2yg2kjaobF5awV7y4LJbp3KwfMw8y7PMVtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wPQnRJxMjX9grP77osbhPK8eDXkL95KFJGkNvaWRVPpWqprUnY4vE43BghrCt1JScsHEZYdSD6TFyJbRqCMTNA",
  "key1": "2jmU9K63dCsmiwGkYxdtfMkYbE5Gs4sztttfmV61FRakSQhxkNJVJvVhLpFBrtM4Wdt3VKcoxwo9RCMvcQdUzWBB",
  "key2": "4sJBrCoZxjwwAAYQYDMDf93CJ7UE8MPQ583GabBXREKxCBGR9qofV2XtUGr8wpNDqBcdTGX1a8UznbbtdzgFJLxY",
  "key3": "9kjvfiM3yCzV1qU64AKp1DfaxtyJT7qzHkXha52Wqf2tvehVH49HWjehpuWzpsJXTxturKYninzVStzQXJyTndQ",
  "key4": "4Y7k6AQGa1esWaWQqHjQ7nmaUkyS5gdAFEomNqRjwfGrd4odiKKRbkqxPmN5YZiV1kT1gFpZ3pMPKbmp2SdjYZdV",
  "key5": "JYji7Q9wQQ7tfEgk7VPEt2EG5J1U4BnfNVeB2djdE8LhYfjZcW98DPgV1h46UriWAgBLco44axue9Dtksx6btRB",
  "key6": "49fR15sU7LWkpvH89281Hd1xii1hmF84LgANCWFSHjHcYkCLjazD7du1ZuNtXcf97vyD5L2tWE8DENQ5DEGjgDod",
  "key7": "2GbYzWjpYmw6CHnEA9MK5YgDuxbpQws7qvcvpeYWbK1xyopU1recjY9dWjv1o7ZDcTSkZLU3XKCQaMBkNKfd76qA",
  "key8": "3rBxYzQm9n34Me8hNytvQmH1wV1XQJ8DuiM7hfnjWAzSyG8KX6apZF5E3Ph1NPeSPzK7cmpbMo3oRG6RBCW3HvUm",
  "key9": "MwZnZTVJrZ8CLzAfYur6cQuU2Yd7cCigGTCCa7N5AHMfRW3CLFEsvDmav4LwmXnyConJE7byApD7bBTZcW5XNzb",
  "key10": "5koUiCKi3SQeyzHUnUH3awqEbLz6hrT1o67bHCDYua6bT2vg7yKuW7dq32auCxtYpKqZz8txuhPcwZWQXD4wxqR2",
  "key11": "4ewmHBARJwstn9mmDKpNhjpA2DKzuHkG3zgSXuiZFEGhSGu37WWjdp1zGBgw5gnQvjBKWLNjZSFUzR9GDgCtWwyi",
  "key12": "3SBuDEsQng3zSTnx4SezwGHyeKA8HSA5KWxVLPSaxTNd26utwjEgpiyFfwfumbeHJEXK4jGVetjhGd8HDT1hxjs5",
  "key13": "4kU3fAUJPpCvTA2mjJMaZHk27vG3G7jYdhL3feQ5XFsvrPJ94VW2dqinnGnwG2JdhoFzCHCQgr2mK4DnGZxJCKzh",
  "key14": "3PuvesCuLBHVhRSW3ECifpQS7Kq3edW7TALpGy644EaD7BBBiKyCu4a9vayL1aEexvr3i7DeZCweH9ziLyXoNYTA",
  "key15": "4eaUgtq8fYsLE1La7A5wJDHNXgfo1dvdGbwMoVA4bVsBNtraV3JWfbCivzuicekb2MV293dNUcjXJA9SLtYdoqkZ",
  "key16": "xzTuR1R1BMcD7qkrTX26jDin9J7V954zYXMN53JDLJsRyngUEars6sVxwKUG4BKSBV9pQXsHF6W2xTuno6729AH",
  "key17": "5WMMs4cbxeDdK6k1ZnfYykrCU9dtJjXfJJ2qYgXXjhrP6MQ5rRSWZVCv2vEgLqim7XLnVV6WB3LWfFEUW6FhhYug",
  "key18": "3YsFaBwecU7PQ7Lx41gbwvj5eqb6FYZCgK2zXLC8XjsovHmG4azkgMAEbYyXw5gR7yB2fgmhUc6HyqNzQETq8yYf",
  "key19": "pQVa5qT2znwWwW5FFJActqutP8NhMDNhQx3wGSP2ApvAuPxN7CvuwaxMKau9seqq4PL4znuSPhMjkN3ufCqvBNP",
  "key20": "3UZLoVvkZFnyBrczYdFXtcz25wDxhFsD3Ep1hmYb4fAhmyj1LRouFunipDeT5Ee1njpkaZKBrsHXm9mD3LKzpg1b",
  "key21": "3jFj44mKrVFUrornavshKPgY4var7gLQ1tgMa6faKxXukhxwvd1WcjgqWeG7k1SzztFLGsDCju4WCNdeR4fcXSLL",
  "key22": "49Q2PuLvEERPpFx9uDNyjY8kQdhaqn55gmFQCmV4jnBYvoC1TxY1wTDhGF4hN8Nsry1G8xc52yHz2yGEaxxu95oh",
  "key23": "3SnZsKDASDJAw4g63Vdwmtv67ZCWniCcagCvyYjsZvuXbtx18YopoaEZbSUK5GRzWfb22BQhiNWt2t2yAAMrhZ68",
  "key24": "9u5R9Bp4zTCfvcD1gx9Sq8vpGhBp2NKLbWL9qyrT9fbNRwWvbpucSTDCRQW3r2ouRHbkzcjMKexaiez3GpUPRWe",
  "key25": "3jngaFujNc4k1G1xFqKq3jZdcxG8mE99JCif9z8GFFSVS6zZVZn9iH6b5ByDLRV8aDLSgWPWcPZXHgDHY6dUrZ6s",
  "key26": "263vWXE7VH2o2Zu9eMQy9djgjBi1Bg4n4ko4SfNeprDZS2s5Zt7Qwv8roXztsadvzJBrxAnd3RQd7dnYoeeCkenj",
  "key27": "56EifJ5sDtSZ38uLRan9NFCASiCyDmHjY7PkSPKSQMkUe3B3P7vF6orDBBj575Lgs6NJSSENwkTXabncnVn9shfu",
  "key28": "2yMSAJBL4LYuhR4nnnWD83A11mKopdECCTvTfqbhVRaHgLDouocuM3oiVnTHcNJrJ7Lrp8T25C12wPVTwa683KAk",
  "key29": "4BD5MADpEX85evtMVKkVzxjsbi1nvocyNJkWHSJyrbWhrVPz611EK3q9iZv8X7RCY6V66rhun9jaHLpaga5fbJbe",
  "key30": "3Wtdp5objYEc5kNCCLGZjWYEfi38j6fBkyFdFZq3hHE75gEcb3wv86Xt18DVGEtbujZ4vNrZv4aHdQSNBsjvtixA",
  "key31": "rpUBPZHa5vfrk9L1tMJ1y56XWRc8zjabrwT3H4vybymXRXgC9PLELXhG6pkYo49qUgMTiMnCc4hFnGCyySWNsmd",
  "key32": "5xtyBhdQHjEAWAS5PDpAd5Lyf8DkfxcEjQRgTbagMTWU8PkTWZ3gH8n8wnPFqac6SMX4G8qyyER9xrB5PVBdBPC8",
  "key33": "3dpnAPJZbUnJN8SFdmdpg2L7u9ov63wa2V6oEPjUk9kNccfzxJbDUBVuCxNvAuGzq2BHSQbpg2dw8qEEmnXT73pJ",
  "key34": "3L3edjq5EWafA3jidUa6aSUWqmLYfz26CumAQ4fbbt3x42qF9KG3GmYphfdP8fkAKDaRLRizN9jrkkWRQQPPoWpf",
  "key35": "5R2ZmfLAQyPMdA6GhHfDPafHhwoirdRQ91VAEdKq1xPfJWagaAN5qeWFwC5cQcmDhiLEFU5Bfu3aUoEEjtNhS1ZW",
  "key36": "2Z59pcwsmLgijYYVsqxKircaCdwba5jKrr1Mtsw2aPRiUYrxU3hMt8AgBzDxvrNv6PnJ52AoN82zyJKVTbnmpZ1A",
  "key37": "MtW1vH8hz2GRuhPvmNqfYLCGEPKQgwdTDVWD3EdeNfHtuRtozEPqkaJLLccCgvYvph6UyYmJAgZ3ED2E2PSZtcv",
  "key38": "2tgNcDXTebSq8T7sz9EZ9CYdLxVoy7vYZvBwKqe1BNcSzdngSfz5VnQBWV2QBGYgy3M5iq56G5CtqqGKEHM7LPn",
  "key39": "2iEQEV1BUKuVwLQ7P639w5v9RZDmwnuTGTYhokrV4LBWLPN7R6hiSA1ou97DbfYHtm7XpbrR4u434uq76TYMdVwV",
  "key40": "4zeeFXnPFZDxuNmFA6nQTrJVvfMXJpRpoG5xdiLbRa5n8VwCSfAuPpQ9x6aXtZZphcyoXMF6MmDRLKp1XhFWjyE9",
  "key41": "5beseRaTim8T2gcYM6d5WwnMJYUXgH8jmC4ZVtHV2ZzqmsAXZVD1Wwb4UaoVRNsW8sYrx1Ee8ComPD6Chi7qj79v",
  "key42": "jVyEqf3njNgF7eKHTzHfgkQpKkUiuqZVDN9jQ8ndGMEk6YuQ7z3KN1gbwLzWPyxT7Sy8Rbxcvkx5FDK1VXCJgK2"
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
