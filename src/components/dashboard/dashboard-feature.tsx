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
    "hoqWZfnPTXaFf42MLGTHLMqwueHGQMurSXH2L3ujXvjz3s9Zw3ojtSpTPRc3qrTTzfXGuU3YkYrybjscMVAq9yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rFXufMEo6n6Cqg4qJD2uZiEBwBk9vVZw1uxkCK8mGurNM8q6hXQxc395cP7nuTmLuRFyX9iszp3gHxKxmFXasHk",
  "key1": "3udZGQasQbEDaq12DerYv5D85DuskrxRBLVW3BYFiphHFLUXvvZm58kNTSixqaUwHBdGEJCMQc6Pe5yyeq6ehd5A",
  "key2": "jsGrAEt1yL7xVjp4y9A9sNnvT5LpqcRbMj7VXToL7c9nbWWNh7933kPYczLXViN3FWfCz31wNST4PNutMGiEBky",
  "key3": "35oVEqJfkAoQQkmvNv96urrX2XMkwUUQYUYrLFHVJiS5eCwGLvwjoxEXFKDMZxpi8zEtfie4wACNUaWHTGc8G3Fu",
  "key4": "522Q5gwQH3rxBdP4zuqsiCym6KCFTTceE81yKQp925RgqM1sUHCFmYZ4hBNsNfELvum44NDKZ8d5MgjDv6U3JqvU",
  "key5": "65nA8W6Xtvve9kJvjP1iaeHCDyfJnibRX4eKAJhBUeKgEqn8BVTQoEVsYT9KU48ywj9Q1xG1k9C8sGHb3qTQ9iyM",
  "key6": "JtMeU12XybCvRP6h7K1dUX6zUGt5zYbwNCVpEvCagF2gFQ8Ac1ievTqorW6Asws7ND9Mz4Eh54Drd6vqH8RoToY",
  "key7": "5PjbfZDKpJtkEQfQUt5gS4en9Daee6sjzoADLf8v551x2sLbyXGjoMpBDTQ5fFY8BbNyAuXU2qcTsrNY4n5PZQNq",
  "key8": "5JnsbeweDMCHREtg4xVCMEoiGJje9q8wdAuJUJ9cUK8gKnSjfg4XhfuwYmbZ46rQ8B3ux22fUUJXbgPgpoLRY6e9",
  "key9": "4Qd3mrJBguboSi7YQ5X6MtYfEBqqdAwmWJKT8RWUfZWhF6UAHx1z4ip8u6v6WUk8WKdAzZceTaoP2e8oANjewPwj",
  "key10": "5LWKWNNMyA1MS8Y6DxoGAvGLU2miwwYvNib3P5yPWNoGyuErBdnzEsziG2suXGVgGrcPU1CYjJrHKX2RYEqxpqfu",
  "key11": "5qoC7FRNRXMZvTZzJMwA7RK8ngRGUtemLeKJ3z5pLCdiwnoSbw22dDk7LnDufYPLri49uRWadw89WcgErB1Hpmzc",
  "key12": "52mfWRD2c16FCnrVuAUenLhbHnADpaNm8iNLEKy3a2PEb2D3SUEhC3bjXAHuXG3R8Cvpwb286KYcVd4fbFe1ZDM6",
  "key13": "26W2o1KJ9GLVcdFv1TX57kUo9cDhoD1Sc8WKREEYbZcEhkKr5TKEygaxiaKDhPaXfSC7Cr7ddgme8KGCWUYiJTai",
  "key14": "3tXV35vg8wNT13k6JxaWv2YQ6K3EzF9X53EYZdn76o5jfQHWdtrKzVgRKTYKmyA2tTQ617fgMe6zbhrvZuzy3thc",
  "key15": "ULDeNPZDRrJvsTHEXwyomSZGF9HnYvK7Df4yXZ7VB6nPxNqiXyWsFj1wPdTUv5Xjq5sW43C9LngeW7FE5YPdFcy",
  "key16": "4t6g9VPJXkydCCoFXnqMi4D53nyseFmSQ4RyRz15GJoDAV86mZXd3uiQC5BJmCRsFAHaLJCbMoqfrbLQ8yEiKd14",
  "key17": "5J4P6kKQbJ6WDpXtyzDmScRhXbmHnvSZ64kzi43uSssMXWoQYP49DAuRFYRVSjusfzwpPFxy9FUPwDQLJ6dAb2cR",
  "key18": "3G5kPg3yiMFmSVhYEprJMUPXsNHcAUSU92WNATxhTzEyrbr9LG8vFxDEewpdbww9bkiVf4XLqu8qww2Z66AnSHb",
  "key19": "32CZbPmN2D8X3EPkFPR8p6MpRSpEJhNaxszMoGCXHyYfkPpNKGZ7uGarqX73CdNjVxEygM3KnUmLzAFBcfrfRsR7",
  "key20": "2DVGPysNeMCazEKDC9QKyJchn2YLhCTV3SubYZDSDhsCzXW8o7kURHuNNB285rs9pUiiP4mMv1nsRpbE79WnrQNJ",
  "key21": "ELnKCckkfxfrhdFuC4aCbMrXya6Y21TacJ1hLMGcyoe4jqsCtemvtUh8qjrpTvw24LaSfEoEFLFstQVqEAnhV1H",
  "key22": "3eZ3M3dzoGQdRGBCgugnMpWTR4i1WnfLWYRyDbTZKHtqnZCkTdqMB41RxGyEQFGiMGrKUxyyAeT5SQs71gSWA4nD",
  "key23": "4XpE3Wdb3FQ4EE5fKafyMowwtgPua7i9uWsiY6ezWWTaVVMWzi4rtmhU7uxmGHy6j7zzEbE9uZC9jYgqPrijpMGE",
  "key24": "5exsWQLxZaLNZuZFYV9uoyH7WoincMUpxh9DR9W5HSuVDvZRmQPxMUB2TX6CBoCNG5J4yrsFZ7xXs6ZDN4yDx3Sy",
  "key25": "5fw8uF67npinVwmtQV9ArhyKFYkZoFJjQ1UG4kPb3Pwj7M2adu2qFkfwSKEeyYCxAiG25vgBqL7hCjDreaeZYGzW",
  "key26": "22FLXz5d6SUhHP5TZ3RLSsG12zeQ42e55uQ2ikvvp7XoX4NLreFN7azAmDpS2Z6tDpdaznX2VyLCJ7yWqkZufdoL",
  "key27": "2NJcQGMPLvvt4Licxz92LEKmgwUeMmpFfCGkSaGFRibeYVMvhbLbKPMg8pHRxiA8F4eTJCGtk8r7CBnWuXcLywTC",
  "key28": "2xtjomhxZBuadvt6vbeJFfKtErbB3H8SAPR35fcozjc2g2GTHiex7Tr4MomCV57oHqRXbPbvPycFzjNjjkt6AAEo",
  "key29": "3Ur5oqz9RMhDkeX15kge3MgFMeqS5vX5qmfJAxMdy3LoEwVAVTYQ6P1KaMkR2RjT1kyXBSQLEET7F1we2ehqusz",
  "key30": "GL2gNXcVegneL6pPUaB4bv7EHi52ufxJzvCJDDs2QashXxNyhJTGo93LJUmXmewLMyKqPYGjaNiRif7S2MVjZ4P",
  "key31": "2CLyCZjMo3oouqjTjyzE943hiZ2LKuPgip6TUqK29kJSSWHF5oVPPpCb9mmmujT4fL6jQFC1F7pPctVgnf94EmoC"
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
