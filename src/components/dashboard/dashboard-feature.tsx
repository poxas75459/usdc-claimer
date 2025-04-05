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
    "3uYs77HkkJYSTvy9D2h8ivgq9gkWgJfafmfDnr3MTmkH52XspM2PrTTKydLtKs5GEGCY6qdQ1KnfN4jcZbvU6Nep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zskUvspUrbM4rJxq1XRR5b7mryT1tZc5JAzQGV3daoBXr9ZJZXXdBUoovVTfCATkY2W12d4U5CW443Xhu4Fv46",
  "key1": "2v1Lr6XQGjCXkViFqVJHPJNWxMpNkr8VJyYxdQwMgbnGV3z2pq4WbqUV2nnwKwQF3m8XuczD9jWDHEtqsWF3fzJM",
  "key2": "558yU7MNmC2eA6YvRmgobWJ1KPUcFivpGkGNodUJGWCciAMWsUxhjJvZWsvm4JGLhxhkhzyh2SD7zQX7jPHc3kSL",
  "key3": "3YM39fugDinGbXRRFcifBMS9kjaF2FenMoMoBRSAD1ET9kpw3nY8PNASij62fqPbyRc6hkksmn2sMCzBSxWvBVqR",
  "key4": "4Z8obdHRwwv7YKbS42g3uzrP6DKuPq1zN9KrygbZPw5yEfXv7qoLUhKJDzr1iMMxi5urM6vHnik7VmDHaKARd8RG",
  "key5": "4VrQ92RV5f3wpsMqREUDrbXrhAiXYL4Cic6q2jTgj1haWa7WdogL2qscc2GEJGRsK6Cy2e9mzyJunEBMK48H57BD",
  "key6": "9GgepEvnX87au5eqqox1Yz3E2YwEKp8orBVdPbN3RH9fmydJ5KfJW4ejed4KLTsTDhcvJnQyBcTRX3jwKxKNUBg",
  "key7": "6KBPqcoj5WgvkL7FLFTaTge6aRN7x2B9rRrqzEHppS3dg1NQqRmgzg1YTB4TySxqnETgnph5uiquaywahB8oCPk",
  "key8": "5EMo4K4J3XascLaPqh81K9fBCxLbqX2pHY9TaAbw8uDRFqbNWRtwAxeo7WhHfgC3XfXxgt6hr9mMHZcVrRyecJy3",
  "key9": "2rpcHvBHZg8c91WQkngn8SbiX1gQE8CsWmyZwBbDPDsKyNcL1PXSddPmKoCmtevj6mGhRJ2vtiTrim98DCN2wN2B",
  "key10": "2qkzENCUZoo4bkDZ8qDURH4FuL6PghXAPTz9Ly12wsaB3qMXe4G5yznBfAfSEzCkAa69sRtokq1FwZCdixPpgMed",
  "key11": "4EX8kgQ9aj77gzxZs4SM9YdufT2Zudrm8U997to8G5YcnVqd5xoGd8kSEwK8dTZHewizr5RDUcxrSkGHa7ecHyNu",
  "key12": "76DFWkLYDVmBhUHzErtMxRmYbCvKnTdZ2mwUnveaLUMeNSHhF31EDt7r1bSVxmi9zp7nDkpKR4X6AtRmTRgEfZZ",
  "key13": "4LGU2iMyxBetum5LGk6CWGMwc6q5ySMmJUgmFu2sJhynY4JmxKrHfqusD4otysZiFtQA7W68fmWnsHJsY4hd3vqE",
  "key14": "4vL25HLzd3J3HUs8M2FNywi3KotYPnE61W4KCn22ZjwVKjwM4QpvMwi45k8rYw5qK4odEaZRcgrtMBC9Ggti3iNi",
  "key15": "7ynkBPf7ff3RLZ9ciEPHCANDTZmGxVWkzzTzbyWofUXhyfzgyekHr9m4tU3CpQv7ccEYsGoBvheWuNE1QQBHppo",
  "key16": "5yUVLeSxbT2nB4RENB9AGTHXaBQs1Eadr2hkVYVTLXGPaeoVa5ujKPhFeVRU2VnbaEo7wvKQW7rtsFFcqyTmKdKN",
  "key17": "mUS6kW6AVAZFf7TLCahCH7PVBAYVyvtvozRyccjiGQhZfmnipLGK61qjWsh1hYKN6Cab7UoBfD9exaqq2GMKMV5",
  "key18": "uLxPRZur3o6juQGYowKYiiEkbufjkboyZ4JSAcxBLcCSfNRSaRtrb1KZ4UfoXLxQDN6jv8vGxnGxLDaJhhtRgrW",
  "key19": "4f3cJbBRoSaJyJon34hAPgB9aEpEuQ8H5w8YCcvC7iDbsPZKRpVstASTCsr3JGBsjQ3ozrvvrW2Xp6wgFtZaFmPV",
  "key20": "M6kwfskHbmE7ob9kmCGYWwX3m7dyn5uaeDmwFmqcRzbCu6KVjcmynTrDbkdZaoDYYSmHjHQYSdxi1n818ZGQwvA",
  "key21": "4D2Cgjoerf1f1oQna4tP9gokaghiDbNSDAecPsN7ugs6JevGeXxazHeQKUHwsfZvm9Y8d3LG2FcZCPeBze11M6Rh",
  "key22": "2nKiVwMyDP56C1VyBj6pVL1931fkw6jHz3SP1vyuYvLXmVyLCq6GVsrVKa3rwe9C1HgdR7kXfPWFhwubXxeW9tQM",
  "key23": "4TPeiMvFapZiLRWQ4J3r4YxvX6faASDPsFKg5TaRu4NyLgTH8SDJFFk2FpL5zRyooQMJqjL2jmMV2XFtxXVjFXQU",
  "key24": "5suU5NquG3dsJpNGUG4BpsxAqdEnTWsFNWcKJYJEUSQGxwYP36sdKd7EddEE8AhsT9hUYaj4djAXzSZAPrQNryRh",
  "key25": "4EEWts2vRpbxE37B1Yp1kdX1oyY2iJk2pcsDbae8Vrnfi8WpZBVpn2ZmG93Dkjpp8kjggAbxh5zAi4iQeh7rm4yY",
  "key26": "3UUsZ1jKa1FoDC3itjgjwVcW4QRUodfKtX6J9CNeGKMk5LakmvEBXurGk4RsbPZUouaZTrbChSCeZ37CvTkQAbMb",
  "key27": "3UVn4rvwyuzKB9jFWesq8jHZwUtYJZWU5cR3AK4PmzMhWjtw56tor2DkDqMzKJkF3DBhgkrJHdxrJjxkL22kNiA8",
  "key28": "4Hmqya4FWfhedgY9EJEkQCLVkCDRKmVYMVdJpFTJLsJBhrjPKk4qXbCFJaGVyQ813VHEs5HKGPpXAhXfqoJUnqru",
  "key29": "YtmZShhPFn4vQ6PVBM87gn3f3xZUV2Xa4QsjCzvnML1EMrhPsUad3rm3xfhxTkcKB3XKEAPFvrs14m53B393NLj",
  "key30": "3YD1tq3cBFtitNUezZauiwoHKa5ETwrYWDo2xrzrRAeYSdfCdDih1bmwQvTFQAkqbnY54zovyvqJghyBmcZHzmMw",
  "key31": "5ud9nw4Yma6iSVBKaZDJeYv1rkVmW8X3Ah38844q6vgz3CqWtwgcKBkb9s9LZCmx3WoZkhixELxneR53yjaa5RpF",
  "key32": "4ExaKkM2fHW6ZUiBzeV4XnmWvAer2ASBeiRAHA9nPre1hcgCjG6AtNQ7XCZnGttxxd13nXE5HGHEaPZpb5u1umzt",
  "key33": "47XAVL1mcoBbrBBy3KYxTgjUmoz8P1BSoRQyfYmumwnHx4VBfsuMkbgRCNjVoA6SHGamf58g95gBTZ2wAeKW2rpW",
  "key34": "5yjGMNVDHLyawEE8wkZzWnNJvH9AHh3FpaCDUmG8z9i83dVkVPVd3eDxj67rNcBKg3td8VnAXVKEcNWCsyvstoX1",
  "key35": "2WJgp2vxxbdSXYDXV7TQs7qMuiUBEj1vsyrDqUaEe7GYmgiPV9szJPqTb8JmaytuMrtB7j8YMmTWGnaueivM8vQn",
  "key36": "2LENB87aJU5yG5qYtMWpxdrjhEJBkw3ANxs4Yo7U6cB3CHGTduhHXBTVtVRfoxEgjzVMcky3chtrFZCF2i37VuZm",
  "key37": "2FVmatckDDUyinGmptFzAfLxu69AdxcVqcwT5NCkQJnxFtEEtKC4uWzh3k1LnVj7FaEZ9nCCqPZqrefkmjqcsK7q",
  "key38": "kBiuMZcZKngiM1Kr3iPD8yjuowRmQmwcU4LzxcY7wTH41QZa8DB1Rywd96zikRpKu9L3pffuQ1RYcyghkxoYPqP",
  "key39": "62RNYBq2cCVA3vGp6VNFJyDeZX75ZGKW5Vp56cxYJ7ikuksNtjBrZdi35Dd6wTHnvrxzS9RidB27wzWjbdJwuVuC",
  "key40": "55LFehnbuQz3ixq95uGzpfdEfpjix4stVSQ66Aj4KryrHRg7Rmub6MaHeRBZCt4xGyoALEdNxVbpMUxmS7cobhzj",
  "key41": "5dgcG9iXR8A1aZ8ZEerrCqZ3B1uVhat5XR3PhPeCD7mpnaWoJhibjkPbcKWKKwcNhBjRBZ8w37buH49X1jPJ96KK",
  "key42": "3x5EDndhfgosrQN6be4YZrak2QyeD9FP7GFn7gzF9dWr6dHJMHn94TbpFxRysg8hnJym6ziXZhWypzRHLFSdk4TH",
  "key43": "4AYNZXbQ8wq9mahMP1b48G6nGVFBuASDNdrKrJCVmTnXuJv6Ckv8LANSsQFwZb4uPnoYZgdau8BZXhzuBQncpu8k",
  "key44": "41mGhG6sxCLPqTkzDoe1FMVKR3i2aNKzHW2gZTqpJunWFAcCftvhbmZ5XVytD6wxEtQfyYVSRCWTpCbahL3b8w8e",
  "key45": "3SnmqYYKSXrshPidxy4w1PpaviygzhDL8Pk6wCUWyuagaSmxWS7fT9bz5chnaFcWgCLstU4PhFQwUBx6752QWPYy",
  "key46": "42Hh6G6bsBBQ1ax4NXc43XeVmRkxr9H2JKhCAmAtcYX9guqQvnNZCcQqE2jVAbDZQwkWu5Jo4bZ3zHkp9TZQGbJi",
  "key47": "yTzYMK2bsBUvJqotR38T31LF9SoGSRXrenHB3DMMzoWJpW8WUuGr2U1GhzFYvcGpwtxE7Y5WormzocRVJKZgbwG",
  "key48": "3GZpDb8GDyZnThpTSLmBaKrZMqEdBg2SWBYTN9UU2dZxdopFcP5vnQX6y2EMZjRDDn1veUhCcg21EKt5CsSPsVxQ",
  "key49": "46Gq917MjuKKPVKhgq2m3gZKGWzxogAP8R3E3wpFKfVcamtTBhv5qSp3xLB6soLT4trErm6ochQf6UwfhbUtqotm"
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
