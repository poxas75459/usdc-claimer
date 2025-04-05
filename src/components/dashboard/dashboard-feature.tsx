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
    "kAdTCiGdYZEKnK2LiyJAyo4pyBDi8S8BKSWJPcpt633RB6oTxtwEUYyYhZgp166Zk3AhWMj4aQsPBiWXyrnLxk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmnCr5skaQFKDCaMLDbRqoHArtnCy3HRv6asAmn9wmbefpgZmqkWHWUKzVmF7ewDmBHxakudgqFxKshLXcnD3JR",
  "key1": "48bF52NUGANYHADDyhtjsoFXVjrK7N1x2FfzQfZ26v2EW5h945PtxAW74jBWhUGbecZCEyMcfWzYTKCF7BR8QbBf",
  "key2": "ojNJubTEm7X1QhEGoaPFkn2ZnbCz1gR1BFJ5zvVATUdYNeQ27qerHo2UmvTMKVRtoPFgCn1rgQgaMqh64WwKH8g",
  "key3": "4V84i5wGh7xmyHZNQ8C7anixQ7opKdtTcsFYWLNWEs2fikyxzsDnk5hCeDTVPy2nV59Yg8tdN1stxxX1XNmZeHNi",
  "key4": "23YrGJc7Sqrum9ivgqjpgX8p1uUfdJTQAmAnwq8ATpGKwK25rykJxTUyS4ZgyqeQTZHZdCgjJVGc6Ai5wMJq8Sob",
  "key5": "2trcwsZUPdDiyXnKkS2oAwNGE6dorgGpf16qMbEHivrjzV61zK7LcwZm7yvR7Z8SCqKjaf1LMX7yoGPrDEVbDzuY",
  "key6": "j1ECU1nY7qkpZSW2aLLmFfc5NaYtAY9JiFdjTtUZ1qYCg5hnsejyXy9mYxfnMYDrxgUkZMLvZZCcFfMQdnZiRRo",
  "key7": "3GJCz89gdCBM33GgArbWpvauTQxWdWSJA2KdtPaf1mr8rGrLhvmPovmYPJN6AKFNYgq81Rc3dyaQtn3K5AfzB7ou",
  "key8": "5CAkmnj5v7T1VvKsgUNi92WQcnnZaXaDEE2NqjyQ9WTExdUpy3NJPzUdvaZKAw4vGSsTeXcuK7PxgHQfbECSz8cb",
  "key9": "48xrCSPQTywigzyE1jfYgww1Nz4r62h1cWtuKsMXZdHgGQ1X93VsqbnoMH45v5FkBgEFZooSyqF1nPCGrZf5U8fP",
  "key10": "2eh8CbksyYDmSsh67jYQZz88PoMvGQLH46o9vRzR94oyHyrYxsUosiy3NyhPvN4W3WGtNBv8Zo6MqrA52VERN1Ep",
  "key11": "2WdACkZzReJtpKH1PwUTc1ssG68Ntwm5utHhGzHdLtW9tCNkcEHnFEoxKCQWze3N7yAWkJa8Y4csQ9VoWfihGZkn",
  "key12": "3tg5cc2vKALLZKrVYjxJ4BdaShaD7Jb1cQj1mrcTke1jTqqP9634eejh7aR2kTLqwf3wFaWwVUvRVMjVaoFpwGhQ",
  "key13": "ZQ9ex95WdMRwyraUsC927wdUsvgr5MwjwZHEJfgboTYkntv4ykrG6M5GnPJMBUD7DjgpoCEw9mHiTzrfEqhH7tj",
  "key14": "4KTwNoNxuAY5pBYax5yuo8b8phemSuUJtcvN6TbMjQonSoD5AdDKxB5B4waXWPZBqs9Cvdfasy18HrPMUPAgvXW6",
  "key15": "5QLtTdN7BhRJr4pXKU34kFAsgfwAkWoR95eEFdDDTe2ohUjsHz1JGEhWxRoxBo6eF7QRSY8hqFfdKCxq7fduu4gr",
  "key16": "5eZsNC6q6oazXKgg3Y4djh1UYTZSPsLgemZAJ8E1eJt11BG2MsdJpZaEoCx7eUGe2JXR6gGAay7LBz9LMpnE7wQ3",
  "key17": "23ZAqvearoAQYAB2uMKAhv12JkqV7r2LriuSY1tnGoak4c74DTboF6ecpEN71g28iSKMgMEaL8hijYQkwPQ7XbDG",
  "key18": "4jhi3CqzDD8QPkVEAkPq4yq2rncKPvvZMEoLPEZLBBRm4bG2eWot5HF9izfiUuWZuLdgkArxXPc8xtwBf1aUfZnv",
  "key19": "2q6afGtV69ZqcbAC8xr4f9wwnPDWMNYkpaJigPeTv7hzanmMr8wAjNxXaQeV7D7GkTCF2fHdaVZHp6oAYaUbGUcr",
  "key20": "3Cr6b6nWnpas7XhTXvEGhcHybTDRp8KvSYVr5SZriFjevkiFEUi7BxeNfuCYfgmrigAXodQ7LqHt24Pzy5GEpHLy",
  "key21": "M6w9mNM6LPZfHYvLcH4tU9tA3iKJ8MwJbgGsWnidyxtaAiHsg9ghsguoy6EmNcqTkN81iKhHPcVWrGBNwPTBJMd",
  "key22": "5gtJ6pzLGAMSWPvdc3zJp6wzT7LQMaHxM3A2NrFy5Z1Cn1vaDG8Tu81r48erPXAuhPJ2nSHi6e8QmSmZrXFkQkTu",
  "key23": "ifzbdH3xX4sBHxdDH6Ao9GaEVzvWvdoQLtSmoU825c4442qSubBRhaQW4wfddwo7t8CCnbYHEA4F34SvmYAUQyu",
  "key24": "4D3a5J2fs9YA5XbUvNnbATX11JWaooPaGETQQoQGcB8iN2L9sAU5NZoSZ4KBpsksf3cvDsj5GFr8hcq2UUccvu5H",
  "key25": "5vfeUc1VXhF6CZLw9irvr2fBemc9BqzWFw5djmCEVD7fBY6trbyLnc3CJw6Kc67cFA9pcifFpzGR7Hj98NRFGtWJ",
  "key26": "haJspspyppbzqfgShMYhoLCr7fHM3FKfWGN2y2yGW8rsfJe8qK8Mn1MRsdG5EFtxW24RazTDw2ccAWkTznmk6zf",
  "key27": "2xS7TBXX6cVV2h368dwQzVsGJsd2eeDq9Duv2bnzGrciNGRheyuTBEDujfuGAjeUrY1MA9sjLKQAc7s3kT5MZgNd",
  "key28": "4mRaF61AHJcR4VZXmWFMZi9TJjjYKRJ8GqnBrkNHBwR8iQUrFXnDDAMtpmPWEMs9VJyBxxUwdwQ9KzCHnvG53Ebp",
  "key29": "XwgzGRqmyZa9pmTDBVdFj7LMWexCngRgm6fmGc1LmC4bzeY5M543NsbWVHC7GzForo9Q5GbFbvFMchFtvzwtyHt",
  "key30": "4kCgQdcWxAGZxj97bnH8hXYWsCChnhFHzNxWfv6yXckNLFT41AQoSga9T3pa7yY4cUjwjULwxVGEeyK677ULWWPm",
  "key31": "5hTSZNLQ38QvAUSxMxkNLrPUepLSAU2ALEptFgFYLTRuCJ6HtaJC6HSfUj6TnqQK1BnDoFBA8vytY89t6oauD6UW",
  "key32": "3rd5NwKQUvob8prBDuAKoUzeQjgnFbbrFNfcbSA6nksP9BSkodaFScQJw1f3xC9eYZJRYBGoqAVNx56WMZDPNinc",
  "key33": "UK1hs6nUzKmF8qx3x7xaHooWAZ6vzbFf66kfQ3eUcgUzVb4DLSbFMAMkR5XN9fku9oL6ejqFCzCh6CSe5icdEDs",
  "key34": "4t6KkN6nw63ZaE9AZXi7MfqNeAEyynJ86ATFpBZgy2b57ZU9pzSxmrNgEkTrSMkHg4Bmhm7Vq2rgxivJxmPVN2Zt",
  "key35": "3qRNP1eXNq93VgvrfU57cK2G1us8CcJSNVW8MtaoZcK39UgJqmch48jzeSwMczSEyb3kr2tYNqSThWPPqSLAL388",
  "key36": "DcLShPKR9Kmtfok7aN5B1R52DEyRxbXD9JCZ1Zdf6C7sqGTLNGzoVYnpLeCDGmkSHpjuCrDbADK5XAyjSrAtTHC",
  "key37": "45mQvwZSJ7C6DUyyyStGDHsPYjoBnnSwNCJrxBBkir9VEaKzZjzmztuU1GWs3n5Lvv1m7MNRuatMUenUK9gzt52z",
  "key38": "232Q7aKnKjhFTioeF4PnBaVqgoHFquDPDdnWgrBB5uVhH1Q73bWJyTwYXZgtdzRfHsQVCoZaRtxBvqJEdaouvmuA",
  "key39": "4aFJsSUSkLcHk1auiJodvha8huhH9mqvJBmqBDtuRrnC7CaprjQEkFqVVquBAMSsDPUAVYZzgdnSarc47HeVFAw9",
  "key40": "5FLjYDKRVjq8Jq7MGp3YapmB6cDdKGb6iAb1R87gptUefMmVeSz3fzwz9WxFzo2x3qdHywaoMvNwVxRtcv9cDWtQ",
  "key41": "3ebN33nwxMQCnwaB8Qx1qYAnfZ4E8jaqesHnGsk1z68S4Ky4DB3BvoCnG2LkuGBLj1db78ErDiPP6LEKRua29WvM",
  "key42": "2Rs82bm55iQuyKJyGZKzp2E9gMjryWW1YzfepLNkg2ULtL1kNxG73yhh9F31y4QQg4MrwsxLBE76ViwvuTm71e8H",
  "key43": "5CutHiUSmaKdGH8JmiWefSk5EYXpsBctXfVDUAe1JPLb7YtJSNi9MEqZUuengBEgiEMwiqGbKWJ4kYfZ3zAsNpHZ"
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
