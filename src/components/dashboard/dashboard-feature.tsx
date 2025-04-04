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
    "279W6FoPsxBxF7aKArYM7jcf9HK7Xq1whp4kfLLW8ZbVkaytPUz32f4t4xWpX1BBpnWdx89ERoaRGmJFiz5RVqP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vbNXkkx92tn4nw1m2qKhhncDTjmYx9mWUxPsCN5UuhF8RaqxnuUcRFJ3r4fRbPuWMamQXqedoyYcowr5EocUu4k",
  "key1": "5HmvUih5gcFuQfPpZKRug6ZoF37UEAfxZ6i3bj7sfHowKmd6VJsMGrXt4iKonTmdR9kJYo33pZvBCukNjg2Rwr1S",
  "key2": "gTdd7SSCtw8GW6h8ft68k3vrXtHE1u35a32VSzEa9As7T6sy2kDa2RRyxsFfY6Sc5yYjgyX6Bt13RKFxCtbp7q3",
  "key3": "ZTDSJCptWY6F2mrwaXCt9q1cLKH1xGE2XbsCzEJMUuimxNXZ7f26fgS9e9MQgE5Ucj1CHGv666o8S2Qa8B1AnYf",
  "key4": "33okTrJjCuhEtVhr2G7QWp3AaAr74S23dStqSG1qdJuoq2qFLhCYGR861AjGwUcXJjn9XTcWMS9NgpqqiiTD6tTc",
  "key5": "GyDXWTRSnRpPpH1hgiWZhJsebxk75586XFZSDQHscRTSDsMfvkNe3hdnqxXuYHyapkc3obNKnUTMSXH3Mt7No5V",
  "key6": "2dGYFEcKkNRCtPpFpoaro53oUYBL2G3RiwUpUG6qhNZauFbj9uBEwurAqDtcDS9CGTi4Ztru4BgRnBEkiRcjd5hh",
  "key7": "2fkcefgBE97MPpZWkWairPJuNjENv1Uto5WyqfQmgmU4oZVdUsc5vAfnjtK7VQkjcKN8wyy21vGcvqy51yv9TEce",
  "key8": "HnwrhhDjQWbHji1wt84ySW5oWg8mCYz3VGrQ1usQy9mmifB5qgHteWqeyct4LPMDKH7vDRzdVPWCxxfGpYfx9vm",
  "key9": "37G7UMZ9wynSif4BWjjLRiNBnZMJ5BKvkeV8Yrq7pPCidm4exvXAQnwcYngB8MLZuxqrpK6oXBe34JitEcQXG7Ae",
  "key10": "4ycdvs32fBZoPiBMRhQBnF6m8C6teY2bfYDwy5Jb6nPC3gW2FYon2E27cUzU2rW9eXwpd5uARWqcX53rCz3SuaBR",
  "key11": "5wDqUnKNr3Vq4xjXkakQS4bWdp6ZXL6KHtRV448aj8HB9Qb4ZTjKwULPxXCNNQK3YPHw2co4GvdXQzP5tqjCwk9i",
  "key12": "4kDXdX11AamTknks6u6ayoeNUaQ2TMrLX9jboD4qpaHeViNBWMeF4kzbphwdAkkcyUJcx1KeJGwPW99Q2buG4UUU",
  "key13": "5oGxpNAYCj1RYdoQ9on9q1FqW6AtCr7wpCZLiSKCu6sgF2LNmdFvKgPhj6yei3vL6kDC9nMmP14o1i6PXbnF6Eib",
  "key14": "2Qwi7mAzUWaY59QRRjgHHqKPbKGWbioNFZ2W5mE1kNiiAvVQZoabVduHKExpbHpJ5wtg9TbWryCWLvqQjVwynA6d",
  "key15": "GfWtwcqXjvjMxcZGL7qViBB7QEYnuNU7fxwDinLsyV8dNUs2YcouWWqbTDoHA6viwrL6qVqnWk8dERxA2zU6hnU",
  "key16": "2RnReTHesSayofywwJu33YebGCyPJnNZi84sJNYvbzcHHwsXBqF5fmdWAmQBtJRw4jMhPnQjJjCCPA6iWHTpbQQf",
  "key17": "UjNJYkxCmSQRrCQKuWiP3k3SpcHjJ46ptytPPWjqeofCoFv1FuLdLDiYePRKWFiHeNptjBykp6okgfvKnW8b5A6",
  "key18": "4tReAJR2VyGFPvFR8s6XYwgeZxhZrUKKqe15dDaPJ1S9c94DWZRQTx4KDP4d2Cyo1qGGvrDwymFJibTdBKzFG2ih",
  "key19": "3TuKYU87iENDzK31QofZ9LYKBEYzT3fbWtB5nowTMB6hxNh56a9NXTZB3AQctypHcdak3FtD8311Cj5a3MuuCd4A",
  "key20": "3mgsowefNxTt195s4vCEyLXsto95obE6GBXXWAEtqYyysURRTEDKhe87X1NVuXviMRcVMdA3NSaFxUrV6QRHkuaK",
  "key21": "NezSMUS6bmSd51PQnzySQ6x2yVtEm4cHAVf1cCbYwwfoEwu75MukPzydbGK3mLbqXSCx6XaoCJf3CVVBR7KBc8e",
  "key22": "DAnTSYoZuL1JRT9L84TfhPcSVh4ad32T8Ju6cAZRxh15VxHgmZRVoTCybXq1X1jXFfghQkPzMAebPAMDn1f467r",
  "key23": "2nvHi8LTpLKp2scvWuko6YexvEFvN23Bzwi1pyBkrDrWEc3MbQNnncsRHeQcxjrE3Ae8abPtLGcipymcgxY3VkeQ",
  "key24": "469E7QL5AH2P4gqgJFGXivGMj89t6d9S3qaWWhqYpLBpsvR3GDHgu24EqsbXQAsvTCLVnh2MDqY9hU6c1VWUv1nt",
  "key25": "5y66kNkGdYikTNa52BpLtFK3wc458hDxrgXX1yB9XbCGLiz6CQTsbGKHHaPJ1jGsKe3UrNdoG7wyGkHBh8EWf3m2",
  "key26": "5yYBuEtHwrr8t3stecLuCyCvsePfx2g6KgQgXFve7tuXfKv6jWrP4nRYmqsno8A8ko2FpjaJu4JvWbt21YZWtbda",
  "key27": "5hWK63FiSpu6TFysw4R5aqEGxuxckeaXto5ptSkQNh3Mq8y6Y2GHax2XA3tgk6fCW2E1jP4fB2jdoCU3MGmSGEm9",
  "key28": "2tuW3yUMLYLSeEGfeksZm4xBChvrPjUWraDeRDvU8pZg3FPAJAtR1XZgukatwttBDxGerjGivRcr9w4aR6u89WWq",
  "key29": "4ngk6qYVyANGbRik1ZybcdQWPTM2pn3DusSiY4NR9LRXhFoC5qEkScjLHpNzSAQtobFqZrfqR6Rv3Kemcei5s5qc",
  "key30": "2smXxRvi7Y2YkYcjfNq7vpuwDP9nLrUDgrbDnJTJMhHNsBLKL9et4vMNPmCQb3gu2Fme9apNEJuX9yTBRRxHHy2",
  "key31": "2Yt3Ctz5X2iAMjVYUwbimYsvXtuHPGoyejxLBaJPXgCNvVeZcoBejdMXvhc8HBGfd2gSEUQfdNvKtAj6Noe6tTdF",
  "key32": "VoLVmQoQmZN6zqZrRUn2rPLCz7SgMfctPDVHRsdeB7EELyzGuxJmYMae41iEx5rbhh4SsE7mwX2codfP8p8icHB",
  "key33": "XXQUxERVNVeSuwhs3wEcQag3PLSW2u2jb4U6XRhhnbYx9CVi67Vonk6tDiWoQBaALd8dTF55BumB2KDhDHTec3Z",
  "key34": "2hs56FEGTMadQ2JMB1KwDAiq7VPCGCUvYKbQrhfGvoQYuiKNq8DXRfW7g9AqcAJLPuiuAWrNxNLBK4wiqJ3atHFu",
  "key35": "4tQD9tdEzqLbUroRjjs69P6fPQo29F9NUrVtc1Zw6eo6TnWi9L9zf8QmJ2Px28DkQsnAQ4th63RW7NWmQoJTQ6xN",
  "key36": "5hEBKhnc76A8kZEPbhoUH83hpwFSGv2fpGsVRyeiMLUH5vTakXBi5DXoeLp9mJcczXkxP7skBFsw8t8ABrfKyLL8",
  "key37": "4wU1nNKSdN4pdSQgXB1CKZYKAcg5MN7oCkQhq8ZsBY9RXLXVN8ShoMtvFS2BMnNhdMyuZWV95vScvtyADG5Uckyw"
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
