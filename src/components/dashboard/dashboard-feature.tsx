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
    "3vXT82KdzqxWphb4QrksJYQzjKdobvEhd2ntsGsARz4Q5CVHxHTsUTBG1ZJr1AcbKBXCGSCfR9Qo18Rcsh662aBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYjD5F5Fe34rGng9eB1aGqiySc6gLiMUSH7bqcFueg72SQYJxMViukN7ikNaGRh1P4W1AyiWnW6Q84UCjNwtBUb",
  "key1": "5FpdHz4KCArfFvYZ6XnGfbqfpt7UKWELZwnweQoQRVBVwzewb6PVmsQ4xw6C8UahmRJQHLhcxjGyVnJWe1YLGgZP",
  "key2": "23xwhEjU4r1WbBbeveWBQpgies7PoytBe3WKKKzs3ELj54JQ5PwY19EAM9Vpsw892TWtw61R8rc4raffWrUhWu3h",
  "key3": "5Lj1kkNuX9Dcx2T5qVEHK6DaUzufLXpuF3J884SsAmEafjuM54jaV6vq46e64TQrnPgJF3jdJr7uM1J2vk7gQmQ5",
  "key4": "4Z3q6npCZdBUMx4kmURy9QbQbW7uey6XXnCtnysbv23B9ezX7vdy9L4jp23qff3GhGWSw94gJp2Md7YPfXtHYidh",
  "key5": "4tfdJpCbRSrnKB8WfKP2Kkin72taguViqMKBUm21aYUBhY4VKMs9Jf3Yxr8tWyADdDfsTcR6EnMGaaMFh1ybEW4s",
  "key6": "3qBdA4AphVrEouEoAt5HgoJBUm1uYa7wLWAbenenn91NQzBUhhssSMWsKrDVEUH9VYru2WB7kY3hTeTB4pcYaN5r",
  "key7": "5cWfuVRfoqRV2odmLZhubmc6Wm6hodziCGzz96T4Krb8comwaimY9YMfbqSQLZMQqDwNoZtMWXQEEvdH6yFmD6nd",
  "key8": "4oNd8LXJxNHPDtJiNXnaaHgZDavUjPYRYEozPf1eHcpn6unDbEQWbepBqPqvYymKe6V3iB58xGmcXf2bPioZ9CPZ",
  "key9": "dR4a45LbHrEvQqLcYFw5YRbU3tNSESXPJyLCzsNRfXCXRNB6ouFK43eBV4RWxwSphJSCDumtxn1sdE88rF448fG",
  "key10": "3tZFn1X49ozz6JBXiWhFX3W5CnAo6DDsxRqxYt1UH5eSX4rAE8mWithAioGLoCAddKUS5wmR6FmdLnH3q1bLbC4z",
  "key11": "2QBmq3Z8RVSMXGWKcwaJ5TjYv2PfuJaisePVxWpmytA6KZgjkPG4fz1CBrSWDvPVseooLns7hohk6Uvhw7rWDWSa",
  "key12": "SG8g6T9Z8RBGpT3SLyujbM1b5tKX8ipEJHyJLP3zCwCeUv9c3dnvPRdKvThAYcw5w3bJArMpGZ3RmWtnenz9AMz",
  "key13": "u9r9Ac5FqxycMGkKRAkaaDgjSQcR3WvFzdqrWma7FDcvfGAGkLVypKxckPpmsdPL7qJuBmk5D52VYE4RXRs1dvp",
  "key14": "47FGMut3Y7dS8odBuiXvadhbcfEB7RzQTdQT6p9hxvJvejcFAJr1uohhnHP8s2YBViLqUKWYHKoBWFPqBs85cGB8",
  "key15": "4ZdBfSgp8L4ZfmACPjN6KbpKwdxywN7fcipKtppenNJW5QVqK86zGCiynxmNzHd3Vd9RLdjnQqj9Y2UQWHeazmBo",
  "key16": "66QCJriep3MJ9k8uTxwPDRyWwo3sZh2yiVkEKva4qLEv3EggtFFrj6gWCnFfNuwkvVZ8fG7QbDLCP7VVQ8odru5o",
  "key17": "2vV8QwdfucYY61GMHQU4BrZjZ5ug6fc3maAaKWeTxRhNPJ765jZr7mB69qrVTKqahUdwzd5zyJXnQRkPjfA33Sn9",
  "key18": "2U7y3zM4gZAABoVcG8RuFiESpH9kYtHLkNTcHUyrUSypBZ7bCWymes9gKKByRAbFA31VdWc9csUwmno6wyzBzEUo",
  "key19": "4eGm14TDmDqdLbNQpUjyH2MUuYiWnn5PurphPGqMP3E1hfe2XD8Nc1eq2GpW5xYkcxfLn2KVJBAisEwmhpRKava5",
  "key20": "3vNQjvrYPwnCq41mg45c4TuVtj3YPtvygRYuPU4XQHrQQ4FNVd16fdQGyhJs3sbxkRDcgYodkKJif65yncvh8eKJ",
  "key21": "37qKCTkRVFx5nrYPus1uFjRFRJCdEYkvfDdX88Cz1KCs1HrmfRGtcHy7ZdksaLg9DfkXo1ykRzQA1xkEGppUTTMR",
  "key22": "34moJZoQNVqSNWhpfVu9ceymf47S1vjHU2QjxjaAgfRih8nkVW7YSw6u46H9t2CHFPE9J6agRLwVVHcwrkvzihJo",
  "key23": "8xuPKHJxuJYUWAafA7wEN8h1ZpMyaFmtJJv3EmXBvKug5ciJG78mbzYmfqtsrf3oS6xjHkLbRHERT6ko3t4LPY3",
  "key24": "59dumppKyjQwErt92bQqRJmzet3qYkFx9EUm6WRyc6tAM7JJwic29xK6E3dQSemYmbM49pvk5mhECAPYNNm3PHbm",
  "key25": "2iSFTZW9ZAa1wSNh9NWrt5gAbDmxQijLG44kk8MoUD9i2A4Dyoa25cXXtjMmacBZp9CXRymByUMvufnqQuQ9vSgh",
  "key26": "LF72eqqo4YchZmjd3VgDTHPohfZ2cSAuxVPwjkkLbC3cj2ExD85MJq2Jrx5MsZLjeQD7X6iKBgeDWQwBmKGZUz3",
  "key27": "3yXe8NgBx1aeiXVBTayFexRJf8kqxsoTB4ss6mUeMai3LR6uEDEdfoQhssGTCni5Fby4xdbNKKVazmkmBCRJJ3d4",
  "key28": "eGEWJre3zzXKNVmrZmJxDWLuowMwQiVBsDqj29R4sWEbL55nHXbXU9qqRpR7e3Gss3ZFuHJt368fwpq4bTtMGSL",
  "key29": "btgTzFYMERbRg7vyQTrs3vCvFYw3FBLkrSpRRH5kgy4BEAr63Prfxg7hFb2weheNT4gye8yQdmvKFrUtg7DzXwy",
  "key30": "4ccNqMMvp4MoFiYfUmDJveinnbur5VH6fGKGmXusSn4mwckkP8J2X6Jnv6sBbemWkgFE5mQBxNrC9dHYpbM2RM5P",
  "key31": "3gUoPkJnMkBEKSZUVVx6r1VVxWYGjDQHGUCBhS5DJKgY8eE8TAbVya7YfT2vnTBAR8QZQoMXi4UinzzT5xoN4Qv3",
  "key32": "m8A6gdUtkjfNtmMhArq1WypoyraQEqScebdvqfW5WDWrHKZ8uY2iwruqfwDC1HGuVZk2Y8VKUkAZRfVLLpkUgib",
  "key33": "4USe5QiYG9ZiYhsLJrHYJ7Kchcze57uBbGkS875rQpGAD5VPzuAsEitt5jghHu7Wk4Jghx3B6ED6DjUnFc7gYi5f",
  "key34": "5rogBivBXpmN3KzFW5cGUPRMuApyv5nyjSaqSzoaBmJuG2Hu91mhvehpZzCyT81Eywjx4JTcxqeb9RefXa57U4uv",
  "key35": "4E1kNM6CDjWsYmxFyo1XjPe1EhxvoFiS8SB1tQM7VFDJ9mi1GUSxAKqNpu6m3qu2eabMeHXVxSPoC6mv7XtinCAw",
  "key36": "ZG4DAMY2CD87bofKJB1Fkb6VyBguEQgpyXiBR4YNVCPGk7ST2gC53cLkgprRgQggDsBmBcY2C3VDyVLsHxXWHXs",
  "key37": "PqbuEazaDJH69JQruRCTQtCc47q7qNZi8KA1snEs4kuGiFFQ9MmKrS1HK4gqTyUQogYcXHG47YRVRghcHzvcShz",
  "key38": "LMgwsqxwcS5KBVCLdsjc7nGDFqdjb2hsP7i36oFkLfgVNnjbytHVBKvpED3wKTNVr8nn1spVLU1NVERQALjH8ox",
  "key39": "3QzgsB1p12EEpoaS3xHYH6FaJrfcuXWYfaxB4TAzquyWkQoowNN5NQULVKFU5rPrepDriSLprauaT4sJC6EUJwwL",
  "key40": "4gVQp6C6Y3a87CMFoxPVcQMmhmcwUiPfYeTuDy8aYTGAWTZgpw6YhANtbrUqBWrKkVd25hMpHvzHj6jta6Jji2av",
  "key41": "LHa17S7wWJxs1GC1ZDB4w2zBaUq93keiGqAqpoMFXrjS68mcuWZ7e5zz2N8UqHc2qjqvWHY8qMHsoiWekLfwBG2",
  "key42": "nkPm7y37qNJDfthbGHHgQ3k9Voq16Ct6MLxYUqgfwzD9BTquzf8QByXMWNxMLdj6LKk5GuLXdmmJmovqFVN58vM",
  "key43": "3iELiStCs3jwzvLzZcg7diYz8nkKdSU1UqpA8vZVWavojSchT5us8xvMPXT7ex2J5ZyLkMNv9wazhemxz3aTEQNw",
  "key44": "2RksdAxHhmKVbzux3tP9398kHufZry25J5FrhmGBKZJtU6VdLbTQfuKBY7nnVU6GTRWvFWrZj75FekU2RSciVPTn"
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
