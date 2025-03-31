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
    "4RTKEkvh9kFbRScH8A24bSP2ERPAS5pGnby8UrNUrq291gyjzzDdfZy1AW8ufhEm25G29nw4q4d7XPsN4wEesTde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5qerA9jj5xfXAP88BQ7pXs7NP6scwchQ9mu4zncqGoV36bDH4iUgNYeG3QAXKrxtbPsFcoHM3Qt8Sy3FuypiKV",
  "key1": "4y3iE4vNFWomeshLzqFTrK7255uv6GG4b4zuFiNZbpw9YfkE8PvK6f786GrpZzaHAfn1MyEWf9j22Ttwg3goUbte",
  "key2": "3xFSCfAdHMMKiVj4ERdrLQgPLyKSZXAWHxpUNkAUEoiETF9ySuJaaa5hayjDJ3YYtYoVR6xjBMUihfvdJadLcFWg",
  "key3": "5xfJhFJ8w6k4xGzbb661ZVuoci7sW86ytQGUtpzaWJT1DTKvwdMtycBMHJCYhrERBM16f5Bt12PdwaW1kLuAeCut",
  "key4": "3BwL5zA8YrQDoabc4oeW31cYDw9caRH4FbyduLvuphpwJV1KiM4xiiqs8mwhT66rwJnCXFyzuiVzDw7GFDjaJcL",
  "key5": "5Ej7yr4XqQ5SUu6TWMZzHJwXtuWA2kM5fYEyqoxnFLYtxvMy3AYiBBYjjatVqzCeeVDDKgwx2T6gQ28h62mytJeY",
  "key6": "rJA8j9KQQ5ZxHsRhWzmHjfXhb1YAmLDRTGAD9WjdV9oSFz2UXD3UysaYPC18HubZexAeaDKaW9hyJLyLrVyriyb",
  "key7": "N6TBHW4NqhiuF2BMx1J5MQqhyPXvuLjE1sR5w9T4VtDiGAFxKXiS5hLKWxrKG5PCvpVk77q67gMhPpkZfkDQ3k9",
  "key8": "2bNmDpMScVxpLPYoCLiFaxrv9dn2cd6XQUjvSvcq4dZ44xfDy56YGzTXPnZUggQwny6vQ6QE3p2UJtodCrtR4fA3",
  "key9": "4PJY12Jz5t9ywGjFZN23WUYhWmLRjdoWEAo8KLSVwTS9o5VGLixe1amEyH4iHhWEMMh9D58L3gJif6NgANLZnKc4",
  "key10": "4uxRdkp1GGAuodmv8HHuALe4ucSHnxpDE1Z44jan7Hz9xHhY25uHM7DBSctpGiZ3YgUbzQtbFZBLacPDKDQ9QWGV",
  "key11": "4YCgaSwvQw2LvkUANaePmzPmYj7Dvur1HtHmcRBJFgyrt7aJNV87VCMgZ3jLAF4tTtszH5tvjaMwPxEg7TqQhE1Z",
  "key12": "8DFn6ALh1eu5KGAEXnyav32PELve1J43KkpTmTddVxpVagvdq8UCM6eEe2CQtqTeoS3WFaRwoRfXg75bZkf44cn",
  "key13": "5QPEH2UbPp9wyVbZZFz875U2bVUDydtZN1i9Hc1sE9TCpB2iLPLTu6BWVkJDPNpe9aMon1HbRaZTY9RArRy45nT8",
  "key14": "5tok4qFbznBDagep76mhpfKYUUQa4giznNuJPkrGMnpU6JpC1wXM34WmpKroSEXUjJHXsznanqoUUgYtHxkFRMLS",
  "key15": "3rsf9LVPxA5UvUgpwezuFJSUQfH3GWkikdbzrjCe2FbNMyxkke6PPXDeAgvpTqVg1XsHSBP7ZS86AP5AqdBAkToP",
  "key16": "4BezbJVaQvRZ9QTHZwkFtiPwUfUYoXG3ygXqeChxWRVdDpyuxwgLNBaYtLZ7YgbvbW2avHskJQ8bVjdJbC674X3g",
  "key17": "2KvGbJYP5s3Kp9ZWpzDg8pRUmq2weWSYnc7JmyVaUMkniXSxqoL1ndmnEqWGwtNHdt7a3PvPKCUVGJrKunKKtYCY",
  "key18": "5gLvbhigRKEjVdmKeLYviQiVzd6SZCEQ6sSdHifmuVV31YowzXjjSCHq48LKC1MAMtmVkj3ZLPGJLBgX7TTxJdRp",
  "key19": "5XAbLUxmuTmt2bzFzfC5nJW96ewqGWufvUw3RE7H7ZspmTatDhFuaogBfaxYa5ECdwwTuYxo6uZtGj1WvGG9r3Hc",
  "key20": "4RPR6YuWYSUvrYtfecw86Egb5NwDGT5rbJp8j2mdTC7e8QFHECqwLJQaXmxxaqn8gzjC4dYc58bFkLYFGbz2JrQ8",
  "key21": "3zPN8aPuPTaREUeVYCW6f6zbj6knJbeUYc37LEKFJsPkoHifvz751YJ8gP2qkmq7gUQ6KLMzMfxrK21cpsPdzA4r",
  "key22": "5fcKGgXWufmjTRtZpM4457abMYMVyRfSajbHwoYCErWJsKkgnyw9rFHvvBqtw6eAGXmeeJw5LENQSXxteXDtFs19",
  "key23": "5F6RtnaQDkDGcVvgBJ3KUqthnehUJVXdsYekTJhFDjqeicvJeW6bZdoHgQAKQ5CEQ7UXumkY1rD54hRnAjtQuns9",
  "key24": "3ywBXKjPP1FR42Vfwi2b8Hjw1fGDGunXS8uACAHLzaznrHzfr5DdYecF5oWaVcN86Bagu4b7R3ptcVT3MfoKZx8R",
  "key25": "3HrCXHQk3akjxyXfsAnEjhxxkyumSjssfbNJgc4uhcZzPhmCR4mM21JjNtbH8FiU3SXxZPHLuQ9MkUpMW5vKrB1R",
  "key26": "47Cyq1LZ8yR93R4LWZRpabBUaW2DYh6AtZwUiQ1nZkvkpBJbR9sZuBCM8itHk1c7J6upeu92auXYsFyHGEQgEcva",
  "key27": "5PEyRnnuNTrJ9jV9zGaaKZL7Lg2hqYhMWzYcjeUm1SXrgCmjhPKAufLTXXfzyjWCta6ybbgWF9w8uffxSZWEaNEE",
  "key28": "28uxngTPWvo6ZMsUhFq7dzymSP4wAQRsJRQ1xhBwhsLAzg2cBDvdaTzECAcdrWebruJcLN63FE2U4ZoanesQQWkF",
  "key29": "3XEpLwe6ZU9ovEz7HfPmEK6S5RRMins965bc8PmteuEnKUPF3oUJwNZrZfRTsEGtoEfhdCNhtmyUjYa4BU1t8FaA",
  "key30": "4gk4aTDYo5fv7UfPxkZJpcBuAQ8egh8fZxFouhsKKvjyeAmbdZyLf4VDrXuTnrzujdutTHFPGUzHcZqtEcqqr81B",
  "key31": "aTsgtGW9mhfKyrXFf14iduEeTrBXb57Bgxmi2PkqDQbtJmVhPTtjVghKwfhRqg7Yw1dJwfFVmmN3uvUZm7JCrtz",
  "key32": "3DoqMh8PjS7v3nc84HkHMtEjUiMHsXHGyPuSGRkHsqJs641X7BZ6bpBL8QxtM1Ydh18TJaNmU69Kd3yUUfoGnwUA",
  "key33": "HyMgjT8gojU3qQfevU8v4ZB1MEWGFY8jeEiaRjCp9TneiXxQq9QdxFgJQjpeWgjQQLNookX13YWPW5fY4Kbpsxa",
  "key34": "5gAYH4VYZgP2b4YZBUN6HWnrG8UYz3FoExpUFpeZyxNWC9Gq9MgkgEXymDvPyQWajF6MpUDe8GyjACiVvLgcNeAa",
  "key35": "3feT25E6p1jwMGtMWj4MMFZdmicMFJgkLvGa71NEa7tdb1cRjF9kX61c6bc95guXR3ZEf6o1dmfvHX9DAQQDCLeP",
  "key36": "iwuJfcAkGuq32XLxnkQgbnDN157RtjwY6JxGyV8PBJQpSgcwgqHR29nDxZoYWuMAzQyCBZGCFXrEE2rjkD1Zu3o",
  "key37": "2zbmto2UWmiiyT2gd21RCS7PjK2Xgzizc2igbf8qnoMoPMvb9A6oki7usqCkYJ6kor6UHpJbQRf59mfq2a3w65Ke",
  "key38": "67JEDAnGiFuGUQqEuhTxTnzzE77Jue7JqFRPNapNKJzNKj8ebxHQsBJtg5qtrW2TfkJSiLWskrpEudYtG6VUXrJX",
  "key39": "5j1fUjhuSGddAaoVPmDYiebyJkF4nUcjnfDkwWKJ9HWgZj4o1rxXWryumdrc4yfzKznSJ46YF4YxSYnmKnkhvBC7",
  "key40": "5wqV1AZkQQCa1zydU2yDCK1C6XF5M3u2dZY9TUJnUxSYbpvZcgFutUvw5pRkX92LRhdu5xdiDY6X9PQjYDdscYVT",
  "key41": "4C1Mmrf41qs94YGeF8uoBTTXRg8VgSibfvfTKER9boC1o9wL2YhvwLrENvfADxx4pSnBrkkjPeK9CbFS26FhHFhp",
  "key42": "nTWvMJFR1ej8vsA4nQDSzhjp6uyej11WDgbTDKJe3gs6Nye8peNfixzNFHtFvVaafcCJoAT2iJ6hS7WCnVrdpZP",
  "key43": "2yHMZSndzazbyLuzzCYtcfwStP8QsUMmTvjsPXqRZzddsruVgRuNEmDL2p2bHHcsFeU1ztC1zZUAiJ6sVbkQ2LEt",
  "key44": "CEEebxdugy3vtqmPeWfyvALDsNMbp7DMYYxk3teJy3nAJjhxDq3KVgTQZdaBhEv9TD6eiEuYB7G7CGs2i7sb5f4",
  "key45": "3ucvJguH2eNtrKwQ1hZfkjycgepFTCJAyhSKoZvj2Xw7PT6LC3ouQy59Uvhxed43Azq31XrmqEZoU4bdB6XWFns1"
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
