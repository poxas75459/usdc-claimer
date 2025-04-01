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
    "D5CUPqLjJvXAUupRMF3F8uDT2JC6bEhqcy9STbVyTqrfxUncAo6Nm5mAU55inzRfXMNZ8VcFJDZYuZzQpFXYYYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSGZ5PPvo1sc46n7Tt7qKCF2zTfnyCfTQL9U5SW6rLtxDVXTUnY11ijodRbLseFYGnh6VkwuCe6M58nB3n4RmnW",
  "key1": "5CHFAz7w4Z65jnLqgABvRv9nucMi1VtLRXWD8upCZwoKnFv8ocnu9CP9cfWhZYnrKjbYE4ohMbde4CQFsHY8fYUK",
  "key2": "yFdZAJnJjryMhuQuFwvLxy4enutphUrqgxGwaeomJ2AatPFg8WXpY6925es6XAnhcnU9jNxcm2q8HpbugvhxFvH",
  "key3": "3kPqzPB2hJ5WUvMHzPyzMp2NxdiizBtvSCQxYw83M2LHsDgssQyFziGZuWbFdyvJkdDw7ovFDXTdvXRQG6rUUNbZ",
  "key4": "5XE6BkCNU9A1dbFPnDPwGRVR2gQTjAtnnaDE9XDYEaDBDBE2NKVHV9EhoUmgf5UyGxUt6qVRXZgFBMPbGABKDpzn",
  "key5": "4ehxcf3VJrSVq2DMc9AaSB2xSnSY56ta1Dt1taeZw32Mgr9j3U28j6n8w7V2jAewsF9mE6Nhd5MMAbrGa5Y8zkoX",
  "key6": "3WVMnrBaGrjRBUAejkPqjv9ufgbfyPvFVCP4VsfZrDQMaKD2oxPphQMzBzTTmL67gC1NmUfAAtC3qxNcTDpQSUhj",
  "key7": "YXxEWbVX95hBSHHoTvREJcxbgmJM8iXLbSsaARU89iK47ZDtzdEWJF9P4QUS92FqQodjaBWTxePRAxAe7RSoV6p",
  "key8": "4EePQQUN3QBb8XmGXnqXch1fx3Qurawk8kJKd8D9mrbC4V5aNtkem3Hy116eaVHCACaWb43VEFwDZuXCfgdSEpQi",
  "key9": "4bf5VgXx1XJ71E8J49EC3v53MuzEZV1f3t8BxowAnyPT1hVRourhrQAEJ1eK3TMkuiyXmG3ZBfLF3mvc58uRWv91",
  "key10": "9RfRHsQisWdbHQueuWJhDnaXztfuKbKwifqaKuSnHf7wyvzSWc9r3hB3LAQVX5iYGvdYFizqctJ3tCg41QN2bLx",
  "key11": "2qyRYDhHmGgDPow2X6Y6CwNTcYGChkDY4T6kR2cgf2j1zMD2rv4xHA8x3JxhS3HwUNTUDR6mNVGVhcLpQ8NBRPG",
  "key12": "3LwiJymEs7NGkmCFZrZLNYWnyVtNANSSamcQTShexFPWMi8Xx33N2c2PWKPpPT8fSs4JRNeWowS87LiVjFbJ23iN",
  "key13": "38LuhEXVcVbC55yAgQbp6ftRGWwraqrC2uA1oGTrKtUjwY1Sm79FRspj4W3oHNc9BMj7ZhHugFJSuLZWzx3dk3nn",
  "key14": "5N9GZahbqJif35h78SYE4nyhCSoY3N6h8HZVD9eprCQspeFoeJ73Cd3rbTuawHfVjAnBbHsroSBjihBZpt2M4BWb",
  "key15": "59Np9MXZmGibGQ6BBqr49R6DJT2uwtdJLpZ62s5Rtx8BA86TfVZryGcj9nZoZLCFtH1NQ6HoXx4bdNsiYxCWfKG4",
  "key16": "2YXXnBcRea3zcTPwe3vTq8ginCzoZenzrWtsnE64GMz4yiHJHMNmRYsYYiqHgaDUdp2YGW2Mpaqy7krtGUiHLBG8",
  "key17": "3gmsud5zXLwXnxuUGQS49B4yAE7RaJDspAfWE9ADs9iz4GYpbr7eruSMYnRfmR4KVJ5zVcQhwTB9PPdWrVY9ccP",
  "key18": "3eo8nK9Bzwea8hZqnchmEaL2upnLrajFYncLvWNK3d8aeMhSfGPmhVnY28GyXtdm6tawCccmzNXTAwq35YCcd356",
  "key19": "5deq4SdY1K14Aurp5HkmCXbgypSFVp3p3iN24P1ByWy9qvShaSk48Nj4pqusYsEVTzGm2CZKhXpf7UEBRpRGJtUZ",
  "key20": "28zXaZnubxA2BRLJGCf3cdJz14QKYdgqmWGzBYWzjZ5hHDSqVA5RG5Wn6bENeNpi1C4HmTSFyhr1uKc8oQtxo88u",
  "key21": "5yHTARtEgZr1Eez6ZtQ3cJyfqCa1v4Tu6jPdceFGfospVAH4TtNjnS34Nm19szFaB69S6wuiV6KEN9BC6PV41kQD",
  "key22": "4qK2c4xLJneWDAktDVQHgvuANjrHXp9AVZza5gA64GHvbNQSz8a5q88aekECbtYLEnEWAxrjcVp875wVFFRxbxUf",
  "key23": "3uWtH8k6KguQTjyWUYofveS7mYD3bgfjMJkbu6EuScqEyv6qFFVy2Ru4Gw6Q2nWAanHfAdcwS4kUnbq7rNiAq9V3",
  "key24": "4d8Mds1p5eNCZ6hawVqwMBrvZo9by1jb5Lw68FRUbyw5AdW2ZyU4s1EwtGwoKCtLVLdnVUANZPwB6WWouGf1tCLs",
  "key25": "5DtLvbH8FUdhhW8sTqfTo3KPBVzgV46PCT1jUXqHsmS8EZ3z4ETKgHjusEwFj6jPbWh9XT9d2gyNYwZ3tmoXqqgN",
  "key26": "4dv2xk8j676JBua5dLSkW3XuuaXZUp5RTXNWdH7C1K2qzBD1g9Uw2PYMLvu5weB2eVBcVYecTKYAFJrDbpGcpCwx",
  "key27": "32RMUUfeQgXaTFzcacHgqJVyhdhgZY9TNRQYxwW5gxhfJg25XCfqCmNxUGc6K1KkGmA9AnFcV5gk2tWaTaPiFDET",
  "key28": "5N4nqJowejTQKk7StDv1emVc3iW3CsmHVv2VfTBMpGKCMCYPbd5Wrw6nkqvtrXz14fC1dyj6sEb1KWeP8V6UgZPo",
  "key29": "3ztjVnDAc5m23wVR2VBPq4k75dByVYbd6W7Y1mMCyWPgaYDXVdsL13zEnerDPAAWKaeQHKGsdt7oWQD7B5oMeFdj",
  "key30": "38gbeAeywu27c51ALXQjiNqWBjyHfuG6CNA51DhW4EcgkNSQB9BawgB5cCYNqce6f2FdQVQLf65u2krzndS5Gt3U",
  "key31": "TYM8LuyYnxQsM8atRcEtgjHDzMirQm3tyr6aYopcdabMiiu29PuCFXXFWBDvb4fnnJMeRR5JPFhGqhaDmzdgp7T",
  "key32": "28BN4mBtoB15erwsvUh1efuwz1qwWEano2paz6aF36zLTyuCcd8DhubXy46fw4wsypejerzCAcG7SgvJvMzAjkmS",
  "key33": "HK7m9fgK9C4t52MotXiR7KHt5z1sgqJV8S21GgujewcVeaiLiZXPGKfPHmyDRKu2iKauw6EvfcdgayiLdfKBN6N",
  "key34": "5P1ZuwPbMwvpBG2D1qNKQJxRXVVvfsuY4MUPAj7y6NGSdGb8VLDPNh66JzDhRyYvcbk8bDXCMJwRT6sdpu9gF8Dj",
  "key35": "53Cdv9ZxnGhPZ9MXvjmRfmkMVM8QufNt7Z95MFnWiBmFayANzr7KDUMGHcoeiN2ypoZdNkvyzKB2ZrfBjZG43WRS",
  "key36": "5Egy5zDDgJ22r4qbZ8o3bit5dBGavhgpFPX3cEcAdi46YjLKG2Qgtjb4njyhiREYeuGADwZdXbXRBhfT4PPM9cL4",
  "key37": "3VEmTmAeAmA1XXRLgAuETZx6FgPvrDmq951FBgaR1nwHDFtWJwQf951YofTgQPQZsrRka48ubMxAu9MHWPEnm3Hz",
  "key38": "GS2qz2W1wwkpuP1JBt5u3KWVYZfpe99wVHjY74NQPQvS8gruejELBPTLbHxZtX3hQkkRYnQzp5PELUyAcRYcKoX",
  "key39": "3kLXBa6T6sRxUo63tFYBMZS7Y2RiTDuTbh9zuSr27a2Hd1ezUS3doVHFzEXTWU66E5Uy931Pv9WFUPF6vrnaVxHT",
  "key40": "4YRY4TuHeJRYVG53kt2Wgwz7dZypH4GdXzuiDBpmDzECFZWh7iRvc8y7tyLZLZpAmPki5cmua1CwZfgxaV94g7SD"
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
