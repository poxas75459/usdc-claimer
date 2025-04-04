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
    "2HGfnmYv3dwAUwT7UrspViE2LRzTSSH9XDgLXDcsqmVyfPnpK4w4KcrG8mtBS14LUBdfLfDiXvKD26W9DAuBZrFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BwrVrPaFakcgCpvDCKopWdssA7ey9BeCPB2u5LqeLeFSMKLkzoTfPEj4tTWJ9ZD8X9KckPS9Rtn168cfFWRmLu",
  "key1": "yyeHLpAWPSHjN3T9brLHo7a3oxfh6mRUs5mraguxpiu6P5gBGMkhbZoLCfqcr6uL5c6434u5F3hLLNzjXgqBqpx",
  "key2": "3U5VTXZg4Vde8w9xW22ssEVAu3XmANXoUVy1MZSANTPBvsFZQgjpenV4WHivge2nvvZ6MRvfaqZsVBneZ7AUmAbH",
  "key3": "4Wr6Tp8BhQenwEAA33ftciRJ2PxPoLaS7ytDKFMhiAo9n8ovp6KnPBvHW59R3Rm6gtbizgPUvJQPXyDKy6ei6F6j",
  "key4": "3ETtfQhdYeqMaTBj1K9srgcuWnR6arSvtqYdMz6nNstFGi4RYx7nkgZLWX1WYNdAeVWTK8MvhEqEZDUvn9qAvgUb",
  "key5": "58AJTzJc1zAnHiuih4emSuzYyTYfrd7rTEji5K4ZBapRx7Yk1sxhgXv5oGvhaowwn1TNu5H3n1o8uSRFoe6dvG37",
  "key6": "xdnFum361JEQ1fBLsevQSngCeDEugn9PEffqNF6r7ZQTAWTCoAvcdtNAYjBMwUrDArW8NQEcPutDe1ewrJgudFq",
  "key7": "2GMJypfdkBVjxsN24m9vjQCsUtWj4bPdEZGNjC2dPA3w4NENB6dN2GLSSuS7mbuUFYMNPMytWxuv8gaB3paqCZXc",
  "key8": "5bziQbBh7DeqWJXRcmGXPZ3SKebkQQcqoKAW7Sh3jHznmUabsoN8cDAN3CUECKMkhacez9xXLKB6yYiqQ88jTvCv",
  "key9": "4RyYMTcqhmiTMbVQReSsTCsyA2QoyMRJ5Vzvzh5owcWuiEqsSsniY6mYMvXSkj8ojyfDHu8H4JakSr6jw5b85C4c",
  "key10": "47YKVzFauFN5LWsYZedjpSuodyuebTydfuBZuG1hoojym8hKU7rSDWecq4QHkcBXNwrHwwNTuBn1ChjJJBLd8yJZ",
  "key11": "chVD9eBrGCQpzhiGgxAPaauvSTH2bWUCB6qpkkoX6tegPtzdUYoo1R1kQkAdvPmkuSmXuNzeaWEkbgXLh1yyPay",
  "key12": "H6n44yp4ns9Dinh6m9mdw28U2adssXzdHZh1r1FJf6CzAQD4qTxwNrLczQZyUX1PgMQyUJA6ZTkDLzT6krw7tKp",
  "key13": "3jsTYH7iWfShzD1DGviLzFvAEbv27LP3hwjGM6Rd1YwR78ZVNuT1NhYM2sCV6R2yQo58e3Ujc9pJeYDYiWvtWzTR",
  "key14": "3HgZNR6tCcbJkRQhGDPp2cvUswD8P74d3XC6wPtKMcTrwqpiP124yMTJNfoooK1DZguo29zFYUkadzwUNuaa7DBJ",
  "key15": "2ay1r81RabNnhrkW3pVYQv8mX45bgoXfGgwQ38LumR3HRucbhiJXQ3ed8vme1eqxn5rjYVhnE8f7dLdMhAzidPbV",
  "key16": "2NFwAuqeCKUMYpd2ns9gk4nCgVn3urbLrp2DXfpoxZfBZ62ZdH8DDU8xqDxsVWQs4aQdrZZtci3tN6EpZQZHrDos",
  "key17": "2NZHNs9kbVkDdghpSgGZWJguSi3d8KUhe43NgJRazhZMhjkJ49sNRrw5wbzpUAJvAxWvBjvKTyciUQqDCDWmma6A",
  "key18": "4E7WfqyEPCG8RiDMd3WTxZJXdGa3tgfhNqvN31HM2UKPdBapWGsGxadAWbB15RvEbsk6zTZkbQE1cGdcMnc3LGPu",
  "key19": "64b1nv4Q6iTpBZSBSWcytiNsNJhemeXdnSyfpDLDr6VqK5jkt99tC6RjVjdQV98m1zJFv7sTuBhRGNKRfVugzj1N",
  "key20": "4nemFv8aEwCuudVgU6hSZFaoUaQfPQyLN4dbQfMW6rjQiLMyHA1NuhWUJj2E1WzoCnZy6zQRBEdiWFJyF5K4aKgy",
  "key21": "52DhUkpZiF2LVt7W4uMCndQ3xzJzS6B33RtLfC83CDozXC3cJUzAeumDkwPoFGfrtayAUkAq1zvkmcBFFjDxj9MP",
  "key22": "4nqyH9cV5CuVSdUL3TypTx3eg7yU8E8pnUEJx74GXkS3R7FiUgDUfLnQka6HFD9o1ps9YCDSVEyg4Lw6Zi7fyf33",
  "key23": "5ZszNLRqaxnWAWWi3JMLfpymzrVhmCLytprHKiX941QvCB3tWL8SkS2M5grbQHhjkkh7H39oF4BrovB4gJN4Ne5u",
  "key24": "37Bnv8Z76n7gHoohA7JcmuJpyeLKPiH18ZqxgidKuozSu7tMmrncxHSFRfZH7YepTqoRKgiSKXEofbJPta6nEXP3",
  "key25": "4LBJCq8zhZg2o9kxB72CLQFRUijp11nWTEfDZo8N2mnehQxbrGWUtox9y7CkgXkF4fo8gDLJPocvHJUbYsfV6Qnh",
  "key26": "25fbH5CiGEDv7AGfkyQCEca48wyvp55ZrwHUu5emWyj9gfCHaLRknzCzURimL7ET4hKQSEpRF42sXFLaauRYcQ8g",
  "key27": "2hncKH6xN3C5ifaUhvxLTNCtDqDYU2V6erMTtxXRj9qUXFiPspgXaRs7MzittSADLE3Ty9T6HQ5FHYiFgqgPfEfE",
  "key28": "vuqZYKG7wUZioJEFHN7pJwwDKEAEp2sggB9ZEdGDWHU2sH4n1k6kwxd6qqCHSwQHgEWZKeS1SpSnLPXTN6ouyWS",
  "key29": "43DWgmrtTp7US7i4jN4XbezuBXSrdbjbL7GTrsMbvqUE3cesbMNwEMm79MqBKFKDp6gjcFDAXjEKNY8R3X5AbThZ",
  "key30": "4UiaiYzeyKW8YvKaFpPH3HiphiGdoH1Xz5SU6izHX7CNXqfgBX38RqCGR6dTVw2QnhKPfvcVqsgRaoKhqmGPe3y",
  "key31": "5tc8rxPyyeTf5vZKXvpHooKS2W35DAxvfwVXPyTGwr7tdf6n3RNF3U2Zg4Z66xyryo4R1nFxG2kimrAySakVxp5E",
  "key32": "5nL5rKxh8uxgkC34N27TifD77qSwa7Nykr31cLWo8FhN2641DUTzGMFAgeEg49qz9LobcTEnub2s5JRWaQkA1q1w",
  "key33": "5tftjQXW2GhiaQ1j2qN4qJPNfMBeXtJVNZiUDXZYDZEujS8YuS3FUmDwmpqurXTQs8CiVJerwuFaYv2WsM1nq2YA",
  "key34": "2kAjDc2tYoiBU3AnD2CwZRSTmwjuqaiMYpLqobgf6F7ACBLYA25N8LJYJ2Rvgn1hUYYi3iMCzsVdaiaqKzL5mNT4",
  "key35": "5A4dvWHcLe2D3XXnrSKs1F8t7wzNA1KgXRsSJ218ReRmmbCfBBM4BFoL7mzFfToA7JXt1FoVrMjuTMcETLNerNmM",
  "key36": "58EgM9qytDW4dJR24G7Cvb4JoAcUDz5Zd5hPugTeKcTZmWVYqTYSyRvxB7wJeGLYjRg6PPPtW3GBCBZo5W2bRpnF",
  "key37": "48pMzpzcbDGAj2LxiVfSJcnEgcdoWd9G3E3NkfcRCg9vtjERn9DRkJd7L4uwGW8XMJyK9ybWos6M71vMpZK35D3L",
  "key38": "wno4JWzd1qgFwovHi3s5p8X9zvAkwPtwZ63q9S6eZYPBJYvr8tRu62SjqpFegQ5z5a4MkAimQZ8sz2iWeNY1L1H"
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
