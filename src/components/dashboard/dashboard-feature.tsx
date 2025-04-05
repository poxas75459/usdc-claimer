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
    "FRovs3gdkeGGEiQBFmHNSmMHbUGpBdeCyvYtnCNDVtRqYcD4ZKzYqqcY9LQs4dkqStyJWx7JdiU3ATj8DpJNwMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isjfdLjD6T5rqKPxjNP5ds99BP2kUgdssi9epzqK7nA73QfzNSgQ2ffBQ9tDsATYaVHb4tqoutkgLumpgq9t48R",
  "key1": "4BTr3V9NrpmkLRZHhgo6Z5vfJasFv9v9rBehyJ2AyL25SKHFvSnE9UywDqZ3dAnvsdQw1LfetbMKevLWH2c6mxxa",
  "key2": "5MvwHU9jFUBHMYRtyEw1GgfghfZhdB1yrHht3SPxeiuQosF3ND2Bc2HvYbzCEk4GdWsDZemegNmVnwYWcG1wzAUM",
  "key3": "3m7YnwMfvszaziY825z1upKxtBUdsvKrN9vj5N96LwVeQiDjmvrX4pQ72gdE3EUMKcudVdNqQwNBjBXHZtKU1PMd",
  "key4": "3UdiknwbKhU9hXaFrPK1A8sEuhKmcsJEtRrh7nAaAiaLU4XVKsBbQqncDuJiHYGeYLiR3ME8exHucXQHPKVj6wyw",
  "key5": "2Kgw23yd4wtqNDeRTZZNTZcRXbZvzgm7k5HDCnkADaP4bXGog6mD3vxCVmwb8XkAWQFacQsko1UZEBLWJK7w3231",
  "key6": "2aMU7Dt7DL3fHNnpHnF1zrfeCXWoaPSNhTdZtUdKX8CqhyKu5MsxFAhXnDZGuUjuDZbvR3RqjxpiRY7wLgKcHE9P",
  "key7": "5wkUaUDuqoYei4TA1nAeDhxuzBhV616yAvLj3tngoipJ9TS1iTmtXVcdDeW51s7Ls2dt8qvA2Gehrh47AJDSRxGS",
  "key8": "2Ctxoe65uwPJ2mgJGGGZLweUjFbTNno8RtRxNEgYFLTBhTMSUogGgytze2LjPZYDSjFejT9AsMnycmXRBvrYRmp2",
  "key9": "4mJPdEUvJ914edW3mTQDYXT12UTCfzccPcr9QzAVh3qUoQreEeqD5cE76u3rjJXkNNxW4kwomTDV6VofXuR4oqE1",
  "key10": "4rSAk8yx2SKPXr99Ax6BrKwNPk6SY2avo7yr5d16MUsmpuzxjHrdgnjgxcG6KhcSV6o674dBqMPcZnSeMzUHS8dz",
  "key11": "5qj9cFDvQ4MPwMf7SwSjaTuN7AZTxTAs1F7RgcsPzWcrFws7uQ9xZvdKDKGxTaXjdjb8MBYehEpZw6iBceZpVMja",
  "key12": "5oo1eKv9bga92DCuPjthFcbzn3zxMrKKP9vsEAFcajgbJTs2gHetLJJVw159pDqhwsWsoRjcwBHevmJw2VfPWLF8",
  "key13": "36SML6UCVSQymocRdvETdCR23KhjGapmQZCf9E4TRwp2ejdHHJBzPG2ZJhgeQjVCxFnkk8GapqnpDjHmErgyyi6k",
  "key14": "4imP82mZaFxnx9zdZLAfZFm4ogLbUQjEV875YypfCo7bJShFsAiKm1BHeTCA8eGy4zV5tGzdbWawinpmrmt4oHH",
  "key15": "3qQs9SMysREXGPE9wQTsryysP9xrtsvGvwaU89iSzkWyjeifC87VqMNtzLvKVAAb66su8b9SSqi3Pj3eJgS6kN8C",
  "key16": "5J2k8XUsZxDsYhBC9L59sEWBtHj5c8MnERNzNJBvxgSrbYDAzB5CMUwMZ5a4zfsnUxNrofQkbvKVXZkT8fhjUFUZ",
  "key17": "4qbnxn54yTYfR8uKzpdTkJmdazGvNyxFPnucq6FRCYk7X8p4kNVKdUSGrHon5xBFvYxvMFRQNBZemZLE9pZNUfer",
  "key18": "MnMU6hXFTtdAsUyMKq1ERoNuGB62ETyQG6zVjnhfZVtWYySfbh7687Cz2Rt7ZqcycderhWpWpMWH4FTaishnuov",
  "key19": "5YvtyLDMpoyeyu9UeXt46QBPJsu8eX4VRYC2knpmtshokhDjL6VcR4kpeWyMH4ztfZ4pgPBhQEeLAmVFnp1EULx7",
  "key20": "M5mWXYCTPPjrCvAo3cnGfjiib5F4QdPv8Wy7xp3wnREfc1JhWQfAdJGQhHhEwPjMYAbjnZTaVZSBZfRorPgjchg",
  "key21": "63RyZDQSVQXzzv7XSPAxnjd4Ux4r9geYmmQ78pLoc9pmepMdroBZWccuLg8BqYsD1GXzQjVAbL3eSHeaLNHXRkkg",
  "key22": "2njrbAMC6RugrGkz6wjKbF4xfACEL5JPDqjto6sZBqUVx3WSV4c6wLxL5b5koZy28m3dKioo5YyQsA3YAxC9pmiu",
  "key23": "fw91ExbUQgHq7H6e7afT1KtQNKMu8CBHdNJ2R9tv4N1gpg4p3BnLDUBWG7KcgMNM6o9JtCHEM4pXCrMyD6B4maA",
  "key24": "42p11UXUgxoYcXc9HGXK63HRbbRdJtb2qPprDGt78jDBA458eEzzEKPuH3wUH6sHgY2BitZ7KngRfdgj7hDpuG35",
  "key25": "3ACbHQBqa5KSaHrZgUZ3oY3hiw6o76F4sB2aSe74ym7i1XrBASJyTGU7MQ4NimSiqvkWhZwNSKPTSL3T5i65o3UY",
  "key26": "3G9YgPKJ5XFyBNeDR2DVN3hnfKJMu6fP5PCc3PeJoiMVfAJKu1HmdKcxxtdEDWuqrAJwU2JCG6bR8k3GZmrQQD67",
  "key27": "3fKSpdenkHpj7XBHrXUcRiqUQQZCnFWu7LF3Lue7bsMj6MXmXJ6j2sZZ1mgEz3wC1ZUdaSQ4GPt3LQwWj6AZMumY",
  "key28": "2dEGRC9koFtt1Qqjuv9WHBwuS2CyFoFFEtbCnfNUWJgZAfFPXNP2MQZAt5PG3ebWHnx6DooC6q6GXmnuLSbaxmYn",
  "key29": "4Z81QeVbjhBnKkh3XBT7wVXbm84vmgT3JNp5ZZeHn6c3iTRPmF2UKYNuwrVtyEFKf4dZzXpCqGVA6jEFi8rHrY13",
  "key30": "52UjRAK4vU7vCfLbYj7WxGL7hMSj9Va1s2jkPNEwWU7TBQHmV4SD4D3zbxohKyb8pRYgXRuonUHk4JcfaPbYJgfD",
  "key31": "3HME839eKpQktSgiJS8amLdRhY18DZa9Tg3QtUXB2MSvxPC72NgjyrmWYKvoYTKxoKkRDrk8U6oEaYK48KwQG6yd",
  "key32": "4qZbEfscSsSLHaEgVaKKPgutTvFoRZkwRPpMey4t19fu4Tu4GzVsJTf3E5mRjpADDCKXqBMqYxqkCkk57FuoRLjx",
  "key33": "3mH7H37MpsfPHEZJmnbVZcMBcGbEo5CuKduhhu3UgfWtrT9yAqShNc8hrZiCaoHwJQZaABS79fd5VwqX6hwPEhjk",
  "key34": "U1UMTsFEsKdE2bfpsw2dPVkyvoV3iU7KpJ83NHjAdvTJvTV2naZfABMpiZFcvdE6RPyji19RuPyDbR4NMesod2V",
  "key35": "4DVYvwGpfxLFCB13JT8ucfK3BhhFiXbDDxiRycaK9UmxSV4eTBvept46oHpHTGcMqkdA27a5SNcf4auW7aiGMnjq",
  "key36": "3UaNL1u2Ph9HkpeWR8L6YAQAP5nHwQ1QPn5BTRs3wT4yQuUHtSUuVn5JkMWv78f6N7sapTRHyBkt164Ti4AvBGY3",
  "key37": "5VwNds54v1WiMQZJXDRX25WjfZMX8Sg68k9BgqneYt25gBobWGnbNVJdia6AsH95ingPeDciZUfRy7cwbzvCsWQg",
  "key38": "4XpLudTLmq6z3w3mQerDsAPE9wVCRDuUwf1popHzPBxRsUjA3CrVMZPPTUBpDKiGWdsCXUtaDP8ButubHp1rr4cj",
  "key39": "3GH94y83fpMcaDDF28WmJ1HfRL7SV6hTY96qYo3PtVKdLqaVjZnPBHqE2VjtExQikXJ6hYUacqcK4Hd61WmXXUMh",
  "key40": "5WrC7ux2hbSjnRCcHangrNd9eD17rsHNWP4JNcoymRJkuafmk2xRAuL9mpsp5DwBheuohD2AzJmThvcueZ7ks5m4",
  "key41": "iCu6A55d8tiLjA3rWTqCA4FFXE8e4YrM11QZYyk8quqDg6Bf6VcZDf3SRtmpbzL7cca62zYuj7x89ZFdMBKDfqa",
  "key42": "3qYoYeCpPUjXjYdFa1pNBoRF2kSBGHUrir28TECN1MBaJi1tJRzwvZkNhZ2rJnKxZQyAze5QqRoYFvjcx4V7Rtv5",
  "key43": "4uTt6DjxExMGjwasCRZE3tJeMgrtj39k9RKeaLHQnH1j4ZAzzVRXRFYaJYfKd5q5o1szBB4pD8zYcQji9hsnik3f"
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
