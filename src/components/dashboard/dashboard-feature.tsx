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
    "4gMBZxw36fUYGCvnK92vgGCZPXdQ611Hh7h8r5qUy4CQf6psr4CvFnMEE8SYHKE2Q7YQfjPwjDpQZ3D2NHULUbnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vrrU1G1McuABepAeFWe1Syqyz8tatKLcuvSRERYBNQ3foZzMkLHjBhwXn8CvxtxreVp65UYABFSYtm7yQztgZkb",
  "key1": "5MTtX6ijYN26dvpxVWYh34tsTWSrRMGER7nRApsSVPvsNzMJspYQh5ZzZ93eiWPdbo46b9HPd7WeLmVYpafb3gom",
  "key2": "a5ZmdCwy6nyWibTqmTjzCTvgwgdfT9UVMKt1sy79Xrt6cb385Jj4T4pxbDMysFDoZdKV2dcv45dCPKoa31LFNMp",
  "key3": "36QhzniedoSNjcAiMnFbh1rorab8sbo96ACZHJ26scQoexEoqx9hFWciJWA6Zu4ohoghwNgeEsJm2GTyq1hCcStD",
  "key4": "5KsXhvRFXSsYHry54vmz1niLRySGYTgTivhg6pqeizsGzCJrrfijLwYVT5Wsw42KgA8QszFALbeRSjUH3tcD3Srv",
  "key5": "5QviJ3WXrxQ7GwKwRiLzdAh1SRgPQwi1YrciHyZsBkczP3bnjxVJEuAsFpnsdpqCKxWMLL9jDo9NZC2j5yuTJ4JJ",
  "key6": "52g1KSyzfHJBZJGJbvgLfFTmXADSB2F59BGpvjYGy1PDA2qfiaWqXKedsNYFvuC4XPnAhor87oyT9eyivKxY99hu",
  "key7": "b5ZPcd8EfKUYmFQ3bKvYCM9eK3Zv9oHsyvdL7EH8kM7wP32rtHQrXTAEFF3uvEWSXTenSMWKp6qWsUdNzLQ9gDA",
  "key8": "2DivXjnLoMWFr3HznazpN6CRsTpZPuoUE3i82DAgi24FoHYAMsNbjxReAznYxSSNbCaRnbzbJLT5QJsWRe6y1aBX",
  "key9": "vc7gASZFzrN8viZ5ZpF1PGaoN5M5y4VtzrMM6JXseMBc6PfZsMEN96Rihuy1dGhzEoeyADcYddJEFodQG2WXbjr",
  "key10": "63SAvo6WSFv7BHyctaS4GrUDqMXhZb5GAugR7pzKzZeC7N1dJqPffjAS24aJ4uEBcf2GVVppm7Zd4j8P7G4HxSA4",
  "key11": "5KtPGSdVkQZHLCWrTjZzjAiQAcHySykzNgc6TJLCr5fwG1NWopR2qkH1QYXzY7pe1KzhZEZgrgxZ3QncakPrukvs",
  "key12": "HNmEA53Fnje6ue8R4Hg1xq3sDieRfe3PUXT5wjAGMf8jURMwDrpMBzomdvMe5Y9ho4P3xuHmceXak9Voz6jbYXo",
  "key13": "3PtUzhUtfEHR1Z1GeL8vok5Nhm4owe6kq8BakvkKYK6QvK9ZJKeWnEFWJWbJRzYUU1kjefFRVkqMCBC7RPKiC3GQ",
  "key14": "28LU89FavneC7UzRP4wVoQdpQUhC9FJpfnBRmJJXVnVdD7gm6xcdQyHtoqM739WwWN3MaNVKAN6HJNeRpVHtaJ6Y",
  "key15": "5vm1bVZnWwdpUvGRVY5ZDzhbVVJhNDaYRWwmiboJkkUSi2XhH2CmjU917icEQzxSkZx5AVvodtRJtwvzVnE4nSe9",
  "key16": "3rLsJHD5Uyx83PxggJYf1Ccvg375Qf59GDwL8rA4v4Jbs2jXpFRTCzRF2ENEuBK3g9GECAZMui3ENfhNxeHgc9Ho",
  "key17": "349PZSB5vEXHCDbr3ZeGejw41binZBqJkeHuYSvR54RRz8366tE8fzsj6oe7YJ2bT9M9HGwAppXKNhVnutdtoRgM",
  "key18": "2YYbBvGEiARX9wGJbncNqmEnfE8ty6diSZuNssgMfUjnJ6RG1WAJBeeaggSdTB7mYcyM38bWUkGnA4RETPJRAcg1",
  "key19": "3VJSaFi24m6zS3sM5vvsJ3zqgG5Xvs33sw2j3AmoWiY1Y3ZJGwM5RcyeHAasugVSnEyVsXNRGbrrFNvq8F7grhFp",
  "key20": "3Fd7gxmRJRvJNPXMouSEyR5yM9XTK7rWZ2fDCS168WJGpLrftWy6dJb17LgMQWKfVW6rCqPj634v6ZPR3xbgxebV",
  "key21": "44JWZjAsh6Uak8xfJcsMB4GjGBouEggLXeo8CjMVxdFevJz5Urj4qdHkwTxmBCScsDTZVCVKaoGDcPmcdo43zCJA",
  "key22": "4dbuohzR25gTmyfVVQQuvFQNhVwK6SgsDwv4amFYgjiTSNeYLwgJ3YefmpBe6dLBJh34czkH8CdQMSvhSfv8v6JA",
  "key23": "3et8CRoh4SuXERC43jMy9fRpzCjLLwGNiyXtYV2xso3UyXN1bE27BkH5Sd19CHiYuTLA7rter47ihycnWwEuDRp9",
  "key24": "SEmQNtkQ1qofwApfg57fEFoBBjh5cKwpsMVk1frQK58qUVXs6yNSt7Mzcuj6F8gUw6CkjUS3BSgrRpwzHbQD8sq",
  "key25": "N3VUvA1MrUmbnZiwKkAKevuM66whCpe7SzvL3tnKT9XPeiYmEwGJfnm2MiAChFoK7q4QKrYePw9KGLHuViWGRDS",
  "key26": "2UzEU1w6WhGs88d1ibk1FrcbUxriGWzcHfggAn1UintWzhsK5PPkkX2ybozwEFqb35hayKQedBFgTUnnx1yJae49",
  "key27": "5eaFJ4AJabCnpzuXVTGWE2GM3sUL5Rt3sxxDy8VH1L5NXE5eog8q6SRdzo7uUwZiMuemsuFq61oztcCES5edN13Z",
  "key28": "4omGWYbFC1pRuANTbUF7oBwJTCevS1dbq4a5BNKP9kYsV9fjBqvd9ymtvonfkyjhWdAhuyywWKpbBUm1d6GCAepU",
  "key29": "5SzCJfpGsbzu5vtLW5KhCVfqwdoNDxvFBJBuAHHxevHFCZW6FBhb4nsPJrnsNpuXo3Dmf8iEry92vkzkv1iQDtjT",
  "key30": "2ZNGZ1sVSeicNkj8pzJVqxc4wEDHdLpzYbgN6ZcnmJZvyY6TMb1LHqs2cfDxzA65NpmfY2rD3rxG5Bxwv1VF2MXM",
  "key31": "3Hk5k2JbfEVY21WeFQpfx59fzMnPTm58WpH2U36akVypSgApZyL1DzDB8hW9rRicAZXnLQGvnicCvGmy2kasnFzR",
  "key32": "38HDtGAHLsB5V3CSAQudFuMhuPZuMV1dP8WZSS2k5JstEMQQVWL83sq6ehLjnBSZLACCzawbhWFApDcqR8rwFQ8b",
  "key33": "3ZZuRbF1JNnYC9XnZzvVrJZh9NZTHMK8HaBxUSt3cgb7MzuTRQbj9JttvGRxSL6d85Y7TTGjqiwjuNp1wBW8BU1P",
  "key34": "5xdDdu9Tcih4E4RU4GFDpHmSnhUKhnqTQc6NPrun2sZsNC2g4GKvhKGvubvrk21iJcrYG2ZRpnNohNrNFnGruuVq"
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
