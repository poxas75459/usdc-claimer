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
    "4FiWfY7dtGR5VdYTuh3sSZxqymJGDPXPmfMxjbLyzASP6ZwaMboYbVkQBHJ5X6WBJFnkT2JtrRPhUFeKipLD6YEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Snpidjj7yyHU3jUXrPbKvPFBTQLNckYGtM6wSf1M7bwAmnCyaZrgZnRjMPib3ojLoDvMkWVK1ocERtZ3cSBWo88",
  "key1": "5zY9S5L4RYxTnDgZbVxH2wMZfmSW6mmsuwTZ1LGqH79gNgb3pCLSzaRP2avi683LLerQkPtujCykj3WiDd7PPCXH",
  "key2": "26fpc3Bka8TLYRtqGzrSx5q8cirnFNufKeVuML75YcCH8ZVtzS1GGuUKfM7xovbKsXSarCYGxrymm1AGBppJWbH2",
  "key3": "3abzMC5AJ7Fn86bh3nqjcJJPbRDMNhQNX9v4tJ844Nnih7E6T7835hjBwRx6wCQWvDNMA9YoUCwSMjJimk8NJsyL",
  "key4": "21RZV26V7KokZwSJwuncJUrAfDamqAuDT7DLQtaY5dFbFK7NLprhJcuMi1JjVRho1LiKWmp4k9XzTY5EGtrv7B6j",
  "key5": "5bohKw4Rxrrm9me75qVS5Nu98H3F6AjNYXzxcevEjc2Rar98Y3Qj8G958EbDkgJYSrpTjmwrD138VXTi75qnfcYH",
  "key6": "y1YujRRGLxEKFXZED2MfWrVWiJrzSFDR4AmZKiBFb7aR2Bno6P2D3prBYupHbELQmWHxgTo2inv7AajzM3qSqij",
  "key7": "5AcmjWnWa14xdG2tdrgFmVfHN8f6CYQQUqYTSs1Uz1sqbTip56REHpAGyM1sR7yAzRQBZa4NybavZcxvKTVwYVD7",
  "key8": "2CHsTVRA91pAuuP3mW7UEiw1zMqRGumep1QywVzJ5EN27aJZuTudhXpBmjPCC8TCcyyzc3SXCyyS5RVqB85WqQo1",
  "key9": "641gcsJorzCozNr4njspuoct7jd4sXWcjx2y3w3nyj4VWRRhVw1q7KkomBEzWjDoSr5miY3WUtAWMeBs3rtrVtsk",
  "key10": "4LQf8CLzwuzJs8AS3si4Tgz48673PX2p8yCsdsc3CdoXsbFUWNevCo1fqbEi9a3jd6nB5Uga71QBwJP3wDFpDDni",
  "key11": "5ZeHguweMseoTan5nXdqaqPTtZGakCvx1x1KoXva2dRontvjVcXV2tHeFBzziD2TMT4j76ZeZWdptaF2P3EguvgA",
  "key12": "2FmLRysF3VLDUMhJgsDXVmy1wceph7tphcJYS6rrcbVZZ496au2DGG1gW8hvPzVTp1jsFGQR8u6ZGcMJCE3Evy2B",
  "key13": "32XJosCgpn7YM8cpJNpHv21B6dQMcnLy47QwB3MEX4wJMV8iVzccYYVCU7AyeTeCPeSuUEtFBVJqvNL6QCx7Yz8i",
  "key14": "QutZttMKZJZRMWSyfw2HZCU6pTQZ8xL9gVPsqNTzFSYJNRtzvVQBypddgJeidvRaDGJRfyQvHfxfqtBTtcg22fi",
  "key15": "4fEMHSSiw6Rga8uJjM12xCGMK7FcTugejBTeE5Sp1WzqM1V91ct1qEWu1G1Gp76beTpcX5G6dHBjMQbx2qKww6tt",
  "key16": "5qGfx7gnZd3jkrengcDXDTP4qDJDnuw8eHMXETv56u5u6jyfW4RKGAV29xZJwfoBFrVUwLhJ5h4kMywvYvN1pF1E",
  "key17": "3bNuiSRT1W9GN9aHQbivNhgMpXo22XJXJFHe6LFWQEAqdycVgbGNEdJLAUEYkDBMBqfE8tXbrL6Ywu2LJPaEL7XM",
  "key18": "37DitUxotCrPZ3VgPVAmuqnejy4V54nxggUHPaggtN3LZg3BDGCASrV9w4NWcnzGF8genZLjxjj6NhRt1DSR549b",
  "key19": "2TcNdjJGKPNJfd4L4kNKixgrzMgpGbFPcgD9VezeAzj7gE91gc7PbAXzHhHpg9dAud5X3TL8p8Hhtf33w3r6bDLU",
  "key20": "4KAY8GXmyt4U9LDWpnKUYDHSWQdnrg2h9FAe177we9tPo88pMws7eHLSDh2aEXBTuZkf1ESme5KNM4XxiBMtqYm3",
  "key21": "5ypJ4dThqpkAP5MhYhthE61Fj2aSh8rZQfbFnhKoZzPmK6gJ9hgw4tcjPQDcVj32v1UtWtXw7opxBQBsnQRoFD3E",
  "key22": "2atdxF4S1Xw4DqmvdTpxyzWyBS9Amt2XL7ndAetmvbGC3SjzfGuvtoP5yiBgx6QpMKumSum1bpqc6F1aAPWbRkyw",
  "key23": "3Hi4vN1pTC6UfAsXJpEhadtQi1iDYiyWmTeyNvfw8c6ppRG3PtQsaycB5sZ4AbCSeshgpgaRRGDirYJ6ZTGt4ArX",
  "key24": "43WBkXtNWzu36exBVgHhxHTcJat5JKZYeU61tWkvgkANd5gLNsNvuiXU9Qg1dv4Zu7XDphqse1pA51Z8rAZJncoa",
  "key25": "3tSTTF6i49B8piCSyEtZm8QX3FwJYMasCh8x9YGZodKdCJVVSHQnFfsi9ibVo8nydE9ymYWFAmJBM5LgFmssUE4i",
  "key26": "66zWjxBSarEqNCVzdqamS7dEbuFPTNLYBzzebnomARsW55C2WKAZ6xpzjUB5GPkq6CvRdmi6oNz3pgoQd2RtLQDe",
  "key27": "51jkVjg1YYWjbgWq9HFfSwjKQBmWX8EkHczdrvuwhw6j3QrJ3ESAwjAJsiYhynsEvWEtGjvW1t9WLy3sAruX4xrV",
  "key28": "JQwEk5Rh7cSTSJrmRDN6bRyqcPUhh7EkjhqRfRnX1hAc8Sa81vaof8C44yFQ2xN6r1mfRsAjERe55bUBJwS2nWX",
  "key29": "3MvjifnJddMCwteJujonNo7WHAEMdQ2YDU16YffhTywANvC3vExe5hK8qbPqYm5d4vjbspCJE6vzaAJgyTxt2C2X",
  "key30": "5PXjuK4fQbBw7gJ6Rg8MkqHYV8w3wUw5p7u4nBGT5gLNiW5FgqeNQ5KwpLU9KPkx1dSePrMzyCXwdf5CRKPPX1qQ",
  "key31": "4bYsMRVuijPDRpgWE2xfDnTv9xd7BCnbjKjV2mHsWNjJrBGXTyA7TXHM3rvXdZt4B1px9ryuMaW7gmu3oLV8MzPC",
  "key32": "27rKHDsyZsi8QP9uLNWyefeNCsSsLvmSrQAZ85PX5fgPx3A8zwuZoELsp3tV46eK7Bs3St8egYYFFLaqR6q3uNLw",
  "key33": "iQWBzFKq8C5xYnwteBJfyhBNpxEjt1D4BMdR9nEyKyyanHDSTXQGtvDdYr3CMehTzkBBjfeZaY21wn1W7SuHvdP",
  "key34": "26Ck4b8pYAtHXvUSZnnveHyJ1eZxbxjYSCUp2HNBnrJ6jPdhYdvVQbbBP1tGGJZaRz1ZhvgJpZiVUnEzDhna3hjw",
  "key35": "4SrEDkfh7bwg3xmEtmf45LLybysd8rTvvj7z4owzL41ERtM1UFbdFBdmGL9Rmp73W51s8fpNeqxFTiienKPJKcoN",
  "key36": "4rGrp43zFgGXf7d5CHwiPpTKAim1bRyV8tqXfbFdYGjMJFViMQrCAoFViEz3WQGQVXnGxN6mkBY8g23wQiPNLHVB",
  "key37": "jc3kpfBLGqifEDotsHvznHcmVzFAQbZw1kWXiZiaxiHjSARn84Vk7fmwYvYyAPgNkjdMFV8FAriqEeYVVXBJ3m4",
  "key38": "2noQpAW9dRXTRfLY2uUb6AsJTbgbc8uzZJY4oQJ4YKz9M4wXCPwfJ86TyWe1KnMzufnxJG3LgNhUdRN73PiGhShB",
  "key39": "21WQfWNvcq1mmvi6UtHQzEf9z2uYtpYAduUXD1Tn866213cLBJDubMgbHFSibZCuNULRPcRSaYaX3T83HkbEJmmK",
  "key40": "6S6t4MJZpCrk2svaTrDkKJi1oxXyuzreUGnLfmYT3HN3Rf3NCGNjpyqfH7PXYt9ZLkveCFFsJVnzWGpatZwteXu",
  "key41": "5r4dQuksCVhW3WdrPWCgmoZAyKrzt1tsf42UrJX6kTouxdxCw2o7RZx34LgPP8bu8L3Gz5uvB26b1KW7D1mUMrfi",
  "key42": "2ieA4cdbgUuvJL2YDXwhf1WtyzkVrQDiw6y5rTU87fm9BkZHPrpKx5V4rMrBKzN5126EFjVbyXGBwVS4nSZt3bBJ",
  "key43": "3PUrkUf4pgAkNYPokJahyUWEARhmxygdxghP2T2uAzGTH43eUDJvL1JJPs4khvGV6aw4yUbRMvnyjVWNVyUZ5hrh"
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
