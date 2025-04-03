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
    "4dtxLe7BNKgqXxoDkF1W9KuTF1w3xRkACPTybUkXcE1gL9xyRDhpqkyjeow3oCbmkEWJ5BHir2934FFDP2aka1Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h968rKah81HHWjTMUwazFybKSsNsUy5knd2dKncEcKYufvhx6eWGtdXs2x9SxL4SCVFoPWimM7naUVtRepRoMGW",
  "key1": "2gWHZhpLbUmRgv9f7mBP362wWmpUxmdLuMBQRbqFn7MdheicMcYpPJhk8wpLQWCDCdcWZm7mvnLWTcyjUkMZLtuu",
  "key2": "53UoXMyjorcsq5AFc98LAXYtkEd7LNNDEv1xUiNp4ttY2KeiugoPUCMt4mXCeyLbNhc1pQjAfMk1h7y9EF99nzsh",
  "key3": "ZA6Dme2sbwEPGgt3NY222ZLGvxutqfoeEm8azktqEc99VLUZwLa5G15NmB6GF5atitWTiTgeFEDtTWoPAa2ZKHt",
  "key4": "5FkYuHYuY4QbSVK53d2h13GaJfqEViZKK18uo8uwVeS6QetxVGkPxdZvPZaMcmMNQAAuftBiRwKHg7dw4DszjYaD",
  "key5": "4FQ4WhvG4sVxZ8VSYAebNRF4m81G8LwRkmE6cNyHfPtopxAAiwyCfJa86w2w1m4YzNVpbYQhXFcxV8SbYhGsa2rR",
  "key6": "4dHcq9yxhm42x3v9DSNas6kzz66czkiG6TNWGFDNzfAicSHzQmPGGAdJFMiWpeLC5uk1ZNNHGTqHaobiHant3NnA",
  "key7": "2fDQdya2hfRX48fgtgCxE7jERd7NPeysCJpPfsfVAhFanQ82F2inN1dhDAxqBfk4GA7zgQiiaj9waLcVuWfeB5a7",
  "key8": "ta4JJzZjrNFcisrdRrf4c1oLrNLeDDq5ubgYhany5VMg4GDCXqwoJfRfvekih1AMyXBYhsV3y3aZLEQB8wJop5c",
  "key9": "62YD8FKhN2YeaJ2dh21qpd2HgNaA1MLYjuVvpcPBukhZWtA5nztW7F7Z2FgT9f3GZU6ofpsLZx4pNVoJb43Hcbv5",
  "key10": "37tsprrpxs6SBNXTUhdr1ZAadH14PNGBDF8SEn2NLiLHqNeZHJr3dAgoFrTNYdMGMSH1wa2WonVWZ3UNufRThiZs",
  "key11": "5WjoBxTm9tS1kyb95FtywUdVxnopCkveK1GxJSUWaZBdpXUbP5MjH7rXZZxe8RGNzLc5LjxaVUWHgcTKLd2XtD2m",
  "key12": "3M49dpjFfXZnbSRio7nyQucbqFHdMh2rxY59qpPeYNvEWn8okZv3ASg9S5c8TW7k8YqTWFMoZYBpJpQnd9DXMVHM",
  "key13": "3EvHzKL5qTZCwVCWbn5aW3QFd5EiaD4ABuWmFcBABaYacgqAdHTgLat5BebmLKS2KLRBrqSc2FVFUuC2PWaGx8CZ",
  "key14": "xASLjAwLeawsSzZ2ppAnUH6GpihGgF12AEXS1hj41yumjH9XU3aaFVuUbE2pCsSsn3Ryxm5GPEXgdVFjKvcZUky",
  "key15": "3VFTTnFs8JGfSDkb5mxbGdGWfFLoi1Ej7CUrKgEdMGFS4mQrq3zp7oGjgQUhgdfoyk62S8e9Z43WoqyDZnEuLj2m",
  "key16": "5jmgTrksfC9zFUaVG5GGYN2Z5fHEGs17AENGhdsLQkNWWjZy1TJ1xkwenvtLDCsi6G8Zi4ZtdZQT3fu2o8Dj1JdY",
  "key17": "3YtcQcMai75msAxsHpXTErdT3gVbHLWajqHzn1UAN73vGUNf4ctUrm64zwCQeU2fK7vFzTNLFHyDocir1VHVkd1o",
  "key18": "wSsi2efiZNXtowYHAFPV9QEyYPnQfDBmErFDTwu2fB16TaV23EMbPHGtXj5g2xapnFbbSiAV5Ris2Yzzf37GuZs",
  "key19": "6184SouNXyxRKeCE4ac4BhePhMgMMpw26tWubBDXRcCgg7usxNH8PSNcE4WsXuo61BXQhN8TMTCvbHsS8KvzYWAN",
  "key20": "5PKVtyAS6Qm9VTdvLpuo5AFtWVHPb3m4cdjBekDBPd7dQ4ynuQMDAj7Jqf5rR7uNtm5Huf7whR2KEco66xpCNQoP",
  "key21": "2TKyPeRNWrt7K5MEWGqcwdsYkUqv7jCFAiT24G94Uovzxy3wJB39DsYhEjpxtfcvcKyy53FbHqwt95RkVjP5m9D",
  "key22": "GdGKAJi7ofNMTYJdMWcPkhR93oxGbxQSs7F1Ndm273uzHbj9eGZGvLDuS3VCw68YkR5ZjXjbfb4UABJoa4rMxgU",
  "key23": "5wDNjvjndc6PaeZqCU29m2AdhA3YngB3febALfE7MJS5W4GpUtp6hESiUWDjifX1q81R9gkHYwGDimBETYLY14Pc",
  "key24": "tzJsNULvvYYCqu1nTeRoFPC2bTyk9aFpauBSu1YPFEjAGTuLtBHPdWGRU8ugN4pb5RCEShU1dNyFwGp73SRc9vq",
  "key25": "3uydtuMNQjwdauKoKpjjwMH6uBqqMFjMDJuNCwCWMFCdvTEix4C9NygJPxLc69r51uxoTP7XuHwwZXhBPNf3ENxd",
  "key26": "23e1nUcCJxwnWyjpmy5k1D9nGcnJXQugBsawE418hd5bqW8wLskr9oH17gvXVbrNnrBvhpQesqBwG4ZAZR5JbDDb",
  "key27": "2dP7PLiY3YwDgNDnf2kVJsPiDoJ66Nrg7d9wdTnQQ6iiLPdNmj1CTSzHSg9GFBjvqPBsYoKJceE8csz7LGDi87T",
  "key28": "4UFRnrS9gGwaRJCPKdbCUnQAdpXyJWZSkZBdjfeZbCshN9Ltog2CkaK54PBKbSWWjgFL6k6g2dbc7CXi2QzqDzas",
  "key29": "51UZWU9BxxCpRsXejxqqo6tM3H1biK76v5iVYsqckzWgwD8L5qQKPQQHzmZizs91UYcQodXHUdx3JuzTA185ZRT3",
  "key30": "3BFfRxQMaXrb8BoXMH8ueYF7v8bwA8MBpVm2mZDLtpdPSC1eqD2mUqFjMisysmUyuqP4tY8GHY9Qm2WrfsMLm52H",
  "key31": "5BcYqpVrob1rj6n8VEnhDYysvtg6fExXnLpXoWdK5JaY3aozagDs35p5hGHzeLCTsiBfCAUZovfPnzuvpPuYcxTA",
  "key32": "JKcmGQv45PJSHcU36LNbpKmMJCSPQk24D6abDKPR6mrHffrnZwpwnTznZub5uTaPKkHSrjb1THxEjqm1i28wx8H",
  "key33": "2j81fSrPeNuTNvDqsjtWTtcyipSkUDh8Aa1hhjqFJ8VnYw3fYegznYbQXtLvkUYDGtsg59hSaSJHY3BaAbFRPr4Q",
  "key34": "4dr8AYrzkQADKQTZJKqDYSEtB737yQVFEXHcjcMbhYra56SCPeMgb7EgFihTxZwpowuBq3nya3FeMFkC25xZ9EZY",
  "key35": "3aMzCewT3J7gYmyeHGECuyXCJWDc6X576eX44H6N3pYSKHBf9xmwjzGQLtkKcUcRa5EoVHnN35hdUfbXGmiYjaU4",
  "key36": "2bnR6WXCF8yGBoBj1o278DXJH1ZqyiLnCFbzSrr1QLXW7ByQvkN7CFwFHpsyA8VKaSxjbcFhC8HWJ8fLRxEaYKjw",
  "key37": "mLrkUk9d682zdk8wbv1Tqv8pfUczR7kUS2DvK6oYJo2ahyPfvfWQVAVTPjdxbrgVQjnQtxMahbSU9RmmZ13waXP",
  "key38": "4D9yEESyVuPK6qxP73qZjt3qhaSrHmfTZZaWW7BVa7nY1FGxCnqavv2Zch9Bvpr2n7XdQQAkF3DM1gjTguLuQ4WH",
  "key39": "2ZXfL5oqbQM37UxYqgtVEUZsPoAw9eRE5Sm6Yxt7RDCa3VozoFFX3psDnpoyw3dhn8UkfGN5j7qnx6se8XR7CGwG",
  "key40": "2S1VSqzLvZw7t59Co3TEAAaRjJfvABAKx7zjGyYtpTCYogwN57i3TjCXBFBnUwJCsExDZAYWK94rGztSaiv7vFV6",
  "key41": "4BkvK5339YNu8jaYC3inMafRLSb7DkqZQ49rmiCPbesVy2wtjvAVBEmqqKGC1sY9F3nBie8U6rirkRRaxko1CPDx",
  "key42": "pGbQaF33iNgVcN4aT6qByGoCmwSScfoEu4dHC1oE5odi4CN3G1FvF56wpwQuFj4aCDgGUbNbNWj974zqe2wCoww",
  "key43": "24HgjDspuWFDSw1sR9yiEdn8uVekz6uPLngZfXSsPynNort7NBZjyGBcHC9uccL3WM1H1gjUFkeeyZehykEQQxoT",
  "key44": "2oghTkEAJL5uKULx4Cc9Ysi941y5wWGEdGy9DhnDcCN2qoQvCXkHS5FyP2njQWt9D3AJRLePiuwoN9sRGjVVZ86o",
  "key45": "3mYfHUqcAxt4rui4tniYS6TBd3o4cgdBGHodAc3H5QXbnnNJ25AB5MoH5NJLGdHr7txeNrxbNdggEhfQ1pvJSJWL",
  "key46": "wsfAZcFsahb3mL5om2185bVhdtX3AkbCAARDJ7A89EFJoEbPnE7e4cAGjB8E9kULiD1WZHuEPsNZaRyJKvEgzAh",
  "key47": "5SGmgkbAmQ54MXEuaaURP413ovJc4ZKycGG5wn2Z5QszomwQdWRZ2qzDFLmBpSMUUwmBSgws2KF2qKjhZqii9mfc",
  "key48": "4GwXnuXMjiTQCcGv6xVBBhA4WnsYnTDMvwvJCGe5T6Szr1YVNZhoVpKLnLE8r6okmaKpWZK8FXp14V7Vb1Vf2Kj",
  "key49": "4BatJvQR4kDypgH5dMqZTfAoeVC1MK2kGZcVjuhTvN6g3tkWvNRh2NNfXiumMbqhHnChn4qq7FgRKbePe7LuMdk5"
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
