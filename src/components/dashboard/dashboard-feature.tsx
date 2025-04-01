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
    "5Z3vt4Egp1fW21kbg9DQBdeYCfeEomSwNesQNFL26hz7wCiDTxNWXvwBFghXncXWti4xNX9ibWjWYPhwH1uTtnh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fywSV3fY3s81srTTBEJD2t8ySyRvtHviQYihGREkBsgLPS8Uxn3bYbQhd96w1zzrSE4nWA1nD2eHi5Ybd4XjXFM",
  "key1": "2TfYkL9rCE48khJoUmKcc3w8btJ7AA9CsWG4ZpV7FKadS1j6txMQNxVnVB6ZAQrjWkCLd1vKVQb6CsLasChBS8je",
  "key2": "4Fgwj7XTimRPefmxM8uFZDNyAzAYoo43mtAT2iff1BDhvK1VshMjJqhtJQXiNE8W7LF1X5y74QrxCanaDzmG9vtE",
  "key3": "5eTiN4E9cURHEtfbYhc4FK197CFysZ5ieB5EAAVpQvYR93Q1pv9wKcPQzyiKgUVgU2rwzXN3WhbBXd2dUwcuDZU",
  "key4": "3TewiM9z26sSb6cwWyKfAVTCiQJpjvX1aEwqSgyu6RwiJ6xiMSXr1FDAd2hQJEdLuCEE2fgx8wA5tuSNSqDYDrSC",
  "key5": "5QxtACFG3eE8Yamo1pUCDYVDKfhDs7MwwCPii2Zyt2sXoNgEjnh8eHLQAkqba7r4KjeyF7vkyMBm8cVmqpgTmzxX",
  "key6": "23aSX1rQYrbR81GCuiTndKng5tEVKzDXdhqDB9pBvkgkRPMviPKPyr15BbWY9ecVftyJvnGeArUmQZJfztxRurEq",
  "key7": "4dwPgSkNJ7fveGHpPfVuodaA8Em1pnHhk9txSP5wWe3zycu1wYf2UuvWCDTS1zK2ymzLbRjrfVMW4xt49kmXC1VD",
  "key8": "3r9UjUPM9UcJduBGmi57tfd5aJ8Qe5FrDeMxMqyvxBZvv2yH6B4dbwN6TG78iHuf7c7xx6QRZEYUPBpwWaLZkP9E",
  "key9": "4xfVserVkzjFW6D9LeUJEEdc9BVb7bFw6UZUWBSKH8mJNyxWZwjfuCuz53RR21UGd5CbM43v3S83wWbKFNr1UU5W",
  "key10": "5McGRZiUzmLsbTWvmZrGQKWcPZAV2n9nHcFi7FbxBZTiN6rETU5QxjvNwNm8v1oxt3WUR3LK7Fz8JNS1UNX9FTwb",
  "key11": "Fp6TTUkyr78zjwRYyD3rZugJs6F8MaCAVMcm4LVNotyZjAGVJBfvD9J8YBA6yQ93bztnqEPmfc353hiLG7GtKXb",
  "key12": "2GwCbj8PiyigeaPMee88rLQiAsXZKc8CAa7M8sSTQMSRE5Ph6xDmjkNnQUz5zXE94n6YXSQ8SL9jp9HfjSVZvnao",
  "key13": "5Acku3eCbgXqvBwCBzwagWGux7YrsEJz3LApMsAJjUoDsiwYQYKe4sw9TSKK26fruJxQLpE5JCZD6ZPEGs36XvmF",
  "key14": "d76eRsEqxEgN6cGHVBgpSpsWTr9syzHyKJsZ6ZiMh6YCHqFvzy3iB9XJpDSWqv5vgiywYh1yL3heBXediJ7iS6E",
  "key15": "3kbjoE97gffkANRURTRT7GyNEh9bBmHno9uS8EoDkvg1BEbNHAU8JsCL7s4T3Wch1hF7pXXecEn3zn4w64u3owZ9",
  "key16": "4fnXwwaVf7b2DZ2mho4nHh78CY5CCzSdkrHseuAyAS4RDPDYFcwKo4F7w3EAjuYFmsNo3TJMYzcgQ6XFMPj6smmJ",
  "key17": "gbDfQQh7ponuirZ8RtRKKaYHwyh9CMSRzqt3VuZxQRQxvTqe7SzKxyW1LehtJxVH2tpZU265ju9PjFypa7K5gZ6",
  "key18": "3k1c7QaTd9Fyntdvy9JbtYKxXCVyymgAKnYrLovoDef2iSa5Wtpknixf9FXKhHTtR6aR5QfuLKaRWx9AP6HgF8Ps",
  "key19": "CCd1wExEvpYFpc7zg2hvTFN6RHFok2AHAcKhkThHSm8Pn6gb95WstLx1aDj7E6JkACA6XhugHzbmgBSuh7Rav6x",
  "key20": "w1AsPNJWff9LQmXZ2vh4U2HLjyhxPuHJp19Z5iPMFPrLMHhoqmfjoFbBoGLrpXAyC7wGvCYcHKWaSFEvXud1NXc",
  "key21": "2WT4UNbjMQy8iewJksV2QG7D2wHyBAVEQfHhBnfTi6dba7hjbz1dqkmNPyeJB52aGV8HW1DjdpzrPXezo7aKavzv",
  "key22": "yEoWJRwZEXdd2exTs3cHjpA6EzNZKxhvnPYwjf2Qf2CE1ps7dPDReabBLXfgXjjbgzFwUbjm1PQkk4Qw9Yse55J",
  "key23": "4TtgeiwwxNUiM5pQvpMQ98x2hk3LhQzL1DzDooWV4iFJk7KTTmJnQEU4NY6Mc64vjfgxYH4AeyfXzL16CtoJmEgg",
  "key24": "5vuPcWf7RkKT5YEeSRDvGH4AFzGSfR7hoxN4TnhJJge2MSpjg2xAZ5uBRKPCgNvP9oqzwT7fsy7uUaqfvYMDtRcF",
  "key25": "4GvGvpcQB6K8NchEijZr2MeZfZGQZvp9jq4u2BhXEJBgXd6mZ8YZqWnsRWA2rFM6Bd79Ti5HfhsjEShkfcAZkGs",
  "key26": "4uYj3aJ7kmja4becQMJTA78Mm3R84Fi1iRSxySnWq3hSErkShRW431k5eMVNzaMKaHC7kzrG72hADbUHaWwzydmL",
  "key27": "5XgUHY4HqhtT9nULcwhEpLAeuWhYqVMXmLZMmjkot7W2YENQ2jYyRjgdmVYJe9vdQybV5qxo3Pxzs85ovYcYWX67",
  "key28": "GnLMxgq7VZNWANC1MRCHKR1jpgoWp3FCp66kgYaLPXiVjPeAYWAKhkTKfNWyMGmBdAh8Em7HEVqMXZFxJT9y8jZ",
  "key29": "2ipK6dCxNzYc1VTHYtGKuUrk5cHqvFNL89fkczcU9cXEzrC31cHq3VvSp1zbpLLTxaEY9m4eac1R6D6LrdHfqS1W",
  "key30": "2Wp7v7yNC4xR9dyybfBcDcwQiPyqb4noLA7264EDwhkwHys9vAQByTWXbYGyi18kY3kq6sqtoECsE3YJmJcxwZMv",
  "key31": "3eFhbeD9w3qkVDxmv38GJX6H7B89PemyHxXRwUJZuE8YpUevAKfYa7CPyzTZGp2Giw3mEr2rzveBanasHdtaEBP5",
  "key32": "4XodTogPWGQV4anArbePtHfS4pingop8umHver6gBjUR27VNCQYTypnS6c4aydNhCxKaUhsuwtvLaohLSSqTuABE",
  "key33": "42iLGrPagSjvPMqhxdpZ5p7Tw5LjSE6s3td2u9ShUwjcUHH6a9hLwTH3Es7N3146He5FuQGNw8ZNyxqftvoLci7i",
  "key34": "siceEiGZt9zL8fUnaPmbJ3tWHPkgYyTQJmaKCA5QLRLDAaTkQtvrtxifqHpo3TbHATfoaztuq1RgQDtTfT5hu84",
  "key35": "2wQ31o2CTi55HRaAbw1cp4Hy73oFBrxsNG6mUoz4UgQT2uBGFGMKpjD4sqePQWHr5D222AERzkzgVXWVNpHyhjjN",
  "key36": "2quzzNAFRJQTnVeSPYY67RK2i2ZMxaj74T4XWbs3FkX2we6FkJjivKaEBTrFiE8QWkt9S7AHX7UQfLVBfZ33HmaW",
  "key37": "5AgQJHzQRcLr2K8Mc5XPnLWN4ogp9jyTHGW3ujkZWRw1MFjWAJtqimeZjAnxVpXxEmTWmLYNrzXMV2KZpVf9L8kx",
  "key38": "5nqXrUepaDrN1rkdMc1NtTbCTzT4NTsPaMUwamR2tSwRxNJUZWymgj4gXJP1TaS3tAZaJDyMxgnQ5ZZLuuR3Dxd7",
  "key39": "57uk9WvLTiD5PFH4uzdTBkHSkTRyW8aS7KFkb7YFjF6FCfLjNA4iFJ63PLD47TedNo53iqZXahhmnpvq9wkjDPhL"
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
