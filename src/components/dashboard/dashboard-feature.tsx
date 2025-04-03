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
    "24oVGmSh4DsfMkLSGM4L71H4ctwpzfoxnv6Uk64G2U3iZNDsQwMNRCkg4VDYk19fxSSDTER1DTFEmLVEBRfcdLXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtuGBPQBCjt9cyQifwjsBchCR6gSUkUSSY9ADeucTHbdBbeNr7AnVCcouNVyvZr1G6AVeTtkBFtMM6yBS2pdgFK",
  "key1": "5U4vNGRAeHwv23UKeiwwcJGjLKqmA3EYRBu3wisUvKPnjExpKTTyhTkUcSHkERQdA3n9Bs7p9hcRw8n2iJQyJXh8",
  "key2": "5z5q1S6dohRsL4Uj8Z63wsJm9qZBRwbPM8u1VmpeSV4wivxCAx9wzjjh9BfiRk3JGZimdwcKKYikMhdFcD3XK5XH",
  "key3": "2Mf8jPcAnfagUaxhPBe2foLyeGzufSibyxjU37edb59JeUtgXyZbstpDkHUdBMmdEYjnkbH17Yov5ooZSSrBGWYg",
  "key4": "5gNXPXLwf8WJEwSrTs1rpYxvdWhhV59Wxn4vHqne3qBviCLX5vihwWYg26Xw6mqShntrm3jC8sSr6MLj8w8Mw57S",
  "key5": "4q25XTtwKGYR7pnpnpixBrXjHdbpMQ7tMrr2WER1JsALJwHbYoA1GmBUZb9aB77dtkdp8G8gSsHRg6aaYFdeb7en",
  "key6": "44jUWvUtfJqyCVCSriD7pqvoF3Ue9NG8DVewqbG3X1taQQrP61xeTaJ4cp4qHqEvqS4Nxsnm2tyHJXknWj2oRRLE",
  "key7": "4nP4WnmZSbgUBL1cusc5rYVFodwKy5VyH2FwMSWRKuyrLY2qNxeuitDn298g5FfgRzvJ8ujcC8yuz6DhcNWANiQE",
  "key8": "3y9eb6YvBgywcrCHkhWscr2PtJzQktcT7kz39MA4BVKMXxy5uxSEMnkcFN6qXktNFWJqSwjsCHPJi2KDyxZf1yW2",
  "key9": "3dzUTdgxABjaVkEBiRqqix62pYQHWP9n7tn1jqh7NDwJ2XMd8x3VenyYWSvRV7xw1SVohzNXN4aRN2aBwgF5RnGk",
  "key10": "3n1TYtTncjfT58EpFRVeQQWfbTRQggCUQFS1HsbX7ZsaBtje9ja2bSWy4P5HjycbZ2PJnKXzXyEzhQPmoZFNZbeW",
  "key11": "34Hk4WCEbZ3m2drHwcxCSWYzzcH1baSL4hEoMmhPa3oasuqyAc94k4ui4HEkvYVwwoEmT7k9YmwyKveDpHc7C6Uf",
  "key12": "66s22SVbqdZTMK6G4vtdJuaVuM7d5rT9n7SBR4AT7VX3XDNirmFz8E4CXFTyxAP29PCjhAjDcFqJqY6F973zK2CL",
  "key13": "4tKnccdtqyGNSuhv7hGQzDj4hBVfGNSWaqBJ6hSpsXw6dtSYjmWo7vmAfKRiLgvedBfnY5r6K2PSpaxR6qmDn17t",
  "key14": "5Du5ypfiHA64bYSWxMT321NTWChPnNAkSDu1vKYhVdMXowiGfHWM7np9HYefi8GTqJjN9v4bzxHBBezs15AxdtGy",
  "key15": "5BfcdCnjmjnEzpLpqv4dD1jSYQzRUNXobQYkxBP8Rji56ZHJFw6TaqjYm4jFkLyV4M4FZLvVKBPe9fgGmMLVzTPu",
  "key16": "j5niqsQ9fDLA56SpD4GwMzqwURSk9ezUEefpBM2oRZHqAQeCfErtER1cQh1rjEyMD1XchTGTLK1UGpLQNCgDsfX",
  "key17": "5pv6vttffzQFP2KSz9ta7sc6a4rzHrj7msLa83FfsedqTxdMVzzHSTpAdKvysza9KG6ZEzrLZm1Zujn7nYMYfM4A",
  "key18": "2XaWyvmJcGsUAzXoUqEa2zAnmYr9NmvLcQJ3gztx488gLr1FRRdubuHAT1n1wvye4e3GufZQKp5b26dN8nrHbhTP",
  "key19": "4h9pe44HAdBzTTPmfCSazzeVB93sWDwwmLMHKQ3HdYZmvRrZkxmEre5jGq3PCMv56XFEGSGvBfSjJH9YhcCH7Mvv",
  "key20": "2HAosqv7yKBL6WvupgTw4wWbzrBAFLqQ4JngyPbCoxF8TMTdXtMZU9XKt1wVbLfi7dESBizPjTvKXAf5VenCrBTB",
  "key21": "3Xq3KWnZnKAaoW53S152nJUDWqW5L8SA8utPNcdbn2hVg1J5LztxBh45EHpMQi8Qf7ELzTdL4c1NiJtfZJvJdecd",
  "key22": "JFghmpWhKc5vQ2H1AB2WBoMg2cfzEWm6eBZcCGGQdt8sAThoyTCNr23xuoXmWxCxnv6ovRveujCavi5QRNcBYJ6",
  "key23": "7sKxhniWAaoJ5LsAFn51chgWa7Fznkv7XfzaEF3XCwMoP6GjYka73NkDQf6ZdN4AjYmdSGmpgTuwnYC2avwMYT7",
  "key24": "4u7HiLuh6VgbLJPomsYJzwSR5cAnBv4vxqagZGPeuWgD1ULhmp3EhBZp26oW5MKcDYesPxsQjDJSR1y4NfbUQ9fq",
  "key25": "xsgDryZaFc89tiDw6CrgTSbhLezEpzCKyFcWBi94b91ootSp1HYMbA6VEnB9gAjkamYtJZnEoWTFyCWvdeD2LFH",
  "key26": "5fntTtXuUCHvdKqbVHqYpkfzSEfhFjYCHNRxY9PKVeWmTyofwbq8PosxstyqVAkH9z74JDBdBb9uTqm1eomodoh1",
  "key27": "YUdgBnfxTFb4btci74mQ6zNSeffa8usksFnYK9YSjmLgZD3jStyMCkMHSPStbWJk1AyPAFfF9Fk71LmJ1kzW6pR",
  "key28": "uRacM1e3wd9yu7WwN4ae5X2jPc4fZPxaec8Lur8gtEQnnLdZuEGgKB1qbrQtHD6V7ojxEuXF5r5c6TdfE5ZBiVo",
  "key29": "7EFtRPZemzvng512bnyDD8cbkKsVWhDrux9phZU4xtzBeyoi5Q3bz5xhMQu8GFkPvJQgsKXZBXtBmoshxqpdx7Y",
  "key30": "3LAGwWZo6ZrFC6FR81H5GwwUu4qFJpGWSiPKhZJNgaDLwk2fNQGpws1vbxt1izmWeaH9soBJSi6PnsVVjqupzxzG",
  "key31": "5nyx6m4cSXtgfBRGQ4xSjA6Y8Zowjx9jDJ5btk4MERQY6JYcrp714WmsqqXtmpBUthT6CxWjfH5UG4oBNrfCjLyP",
  "key32": "4e5LjrLVS1dg8nTyR1DKK7BSogxHcepGrD374jVnSeCczcZ72qbqvEyrpsxscC3Ym79HTs1naRZoAATp872UUieP",
  "key33": "5zhfmr6ihBQcLvc9gMXLqGb6E4Sj67dfJrHMxpPiRvtRSa6jwZdtVDQWdMk9gKG86ZsoPyJnEdD6zGrmarWbJubB",
  "key34": "u1xjBFyCZxgfV5mrvFL7KZRDDZKU2Y9jVDZJpC82QbkcKXLS1to6jknYHyEmxxffSbydbWS14XGUXGmKCFbroad",
  "key35": "5EQGTtTJVCrsu2k5MBZMGWfcpnVUindtGZD6iSwmxF16fv85s2apqYXZ6ECgmsrdz5M8MnJ6eYkJ8A9hxVyEUooq",
  "key36": "4NLEzaE53SyJZXmyr6KfX6pJMnEUtc11vtaQZYQJM6Gx66sv6wyHvw5q7hnUrmMjWTRCvPCKbv2gFmAZZwAuCYeQ",
  "key37": "3X2Xo1fUQkstcJXVyboBzAsnqqk8HsFUXWt2jtnhDpTatxSRfEtoHz18ppWZ1bTrPoMwSiPdHP9QwNDSiawprEkC",
  "key38": "cgdn9WGbggqfyeBrP8dAf2djTMHTvhqPYs3D3sLSsAHGXquswrtR3Ec8Me9VwV8WQY3DejoNyNHcM33trDZXzUQ",
  "key39": "22VLsFAgzWNBAsTtCwiLmHcandZvGFtWZwEBniQLY1uJMqCCgZAsNN76v534Vvz6WaJdhpJ5dWdhGmUQfNRjtvpf",
  "key40": "aLqU5fBs5GLhmjPUx4qceB9U1bFZkSfEW272LT63AkSurbzUfyo22yDmNfoPg8FoXXvSrifrkD9MYnATJCJHZM2",
  "key41": "5E6TgUEYTd9K9rYZTVcJFR3Re191nCFYMTE7EPpfgZExo1dmdWRsqmcFnrhQExfnqksVjxiXEQWvapZb7FS4XXGj",
  "key42": "2xPwYbdTBW8sLgrPwu3XFJQWCUYzSfVouCxiwFZgmKLCMCYpaATwe3SnC9yUvCDRJvw7xGoa4J7fQzc2cFJHzgu2",
  "key43": "2ArYc1fuSUGZAu6dCDYyTYTocoQuwSZg4NHkSD95EchXvFrjuVqgzfXdyKvT2FYHZDvWkLfi64RXniUmHVY8uhhV",
  "key44": "56Ue5TXfFfnpDqDaNfAJ4PhzLnWY8uEeD8T91aKbQ6rD4SKaPtkUHwMPHJmhAm3vkEw3fGa9tuuJhUsapbBTWD86",
  "key45": "4MTyzdVrdfoxF4YNtRBogo9A9Yd3SvTURxuQ6C2CtcYCUxc7HN5cemC6a6xrEDzsEVitRwRzpnT56oB3QvKD46EP"
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
