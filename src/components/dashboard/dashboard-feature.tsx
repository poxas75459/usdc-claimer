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
    "3HL36ZJygKxRwLkmTnRVEZC3SBjzB8LHVXHQhmiScEmZEfxp5C7xuFq2dftwSTZNzfWXXGkTcavVx6SiGcUE5RFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVSDpot1hSckRqPRNtKEmaCsBSmFMm9m5ekeseHzspM2qN3HUjVYGTDU3t7zpe9rRJtSwzA298Q4nEKMR3UKBG1",
  "key1": "39s67GLtXfQgGF5SeDYN4FbrjqZMMved6GZQZr5GZZVGpseZbTHpCowiumyG9SREZHmzo68EYSqC7GDwpa8Utkys",
  "key2": "5tPuZs57n72FPQKvhyuMV7seLzeLFKZK2EvMehV6z4yomrSo5JkAqiAsEZz85PkWhTWeR39xRHiLiWHj8cog6ZoT",
  "key3": "3dK32NqhrfQDbProuQUbSygLk98E1rCKpjHMkNsa18JcgWboVkdcx9Z8cQyWwjHNLiNBdUmvjNzGH5ihS1tZSb3d",
  "key4": "5VPUEGRAtP2CfvftzFre1MV5qLvjx5KT4tNmqFtSSF6i6m7nWbFYdXrS33vRCG7sWuRd9XWXN4XviutCfbm44bB",
  "key5": "4qZ2dgZhtM89c3cc8bxt8fKjP36NZSR3E837UoGwBjb93mifHzLj3Ud7N62FbVPkasCehiJmsKUuJdW4jYG8sow2",
  "key6": "2o1XPXSndi52RyzPoDwUFMJjExdoMfeNtWn6Mh7q7eEhtXEghZGf1Q2RHJWXyGeVGqdqRhWPnRYsmFgzvH2xk6Ge",
  "key7": "4JEeuCamiECWx5KGBMzNmbnvrukRGmrxUDoAxA6vZhUxdVCXFVF2ZQEa2NpCJ7kH8ywsCqm2KHDW6iPfQKTTNS1e",
  "key8": "4SQY3JR3QTpsgGbFWisWM6Zqc2tAc2ZbmE6SR8ATSNr4Ni74DDsHkN4TmdpQEEe593C7LaBxL8trnnP8av3vs5TX",
  "key9": "5FBSaszZZAamcjwLGiMvjyJZjvMuvxmNHwzYnVpooUSR3gM92XVpbuV7URyDJgkye4oEeitPB6f3MhZ2xEKRyHtE",
  "key10": "468MbbXsuoKuwDpAdQ9wo7ocMSJ2fw1D7bFH2Rd2ont1bQtZLBLcbdDpZp41Uq1pyX55Nu31uhYmQwHfCr8Rjk1X",
  "key11": "2K653XEgfPNzcr1ksHmjM37QAdydKxrv1ZXzWsBRWrDsSebbLVmYC4bb8t9UfZAGEJ783MTjxg9Ym5YPBHCUMsqC",
  "key12": "5tP55KDxsEukgMpRD5gYFPrig21mkBjX74nb9sovQmRF4bgrptJnzy5EdHZ18XmtuaQ53wNVooh24vpms7ojgzYU",
  "key13": "5Nge5zTgtmXJ8ChiBE8M6xxMNM7L6b4co2JwDd4SoFJG9vUDYHKcNweM73NYrEMrAZeP97tAihQLauu9rw5D8KB8",
  "key14": "3mv71JRCiDBnyKcvrHZqqP93ebbLhtDcUrBAxhhS2hL4nirada3UTd7jhUcUmVshvj7a9WJ1R95SrFbEf6x1gRB4",
  "key15": "4ohGNRAPFTST46kPYP1X3yq1GisdZKqLWEQLS6GDnWJtYxuDZ2X7yjCtN73zedjm5RP2ySwZiTZGsksx288Kkdv1",
  "key16": "4s4nFMkj4jumSv5GT1Y3mf3djUUuxMGUcXMHkMhx72Bsg1PhKgRpmBJNnPMaEZZFf4hZJeseHSmCVCBpUPvFxG2R",
  "key17": "525tShf9ACSCU5pruLxm2rDz9f6Mwxk1qXnP7iaUU8gRgnSQW1Ptaq6Y348DbtTZ7Myvw1cepa3f8nUiNZe2xdBY",
  "key18": "5NTVEHF5D2bKeAfiB74sho3mByXCVohnXEcYyBks9oQRvPS1JEy8z8VbZsjYRxfvV4iHu7QZ7pUAxhEHzgdXaurQ",
  "key19": "3oMcotqY71pMVdiMQJecg5sNntsqTCzA2Bd5AKfM6igUnWk9rkcyRrs6enhCuRxzoSdbY7RzLXdvWg8FqwpDGTFZ",
  "key20": "fmFBLBFdYtdoGbsDJuBBurXzxYh9KdcNqKa87cVCGA5HVK4GEr7VNWveCw8Zu9kNryyRJhfjwShqHfWbDUVHXex",
  "key21": "2XEPBiTaeU1xbWihRedEvWw4vasAwQsyNFn4uteEJFyCng5W9VsMW1NkyTHX85a3wr6zV6iXaGSe2e1UeeorfQc7",
  "key22": "58Au75kRAiyBfRS5dnUrinYvC6PNcxu5Zn34v2H9eq4KS1NptTeFU97RaDrNjb96sZYCwrUHWRYaGwgZy9WJfKUZ",
  "key23": "2z8WRonYtCzfn9TuyDBvxPWWvFxH7rmXJQo3JXRmLnAqtgYR2zxFzJxcH2UApXGAzSs7vnDiwEtmjtFFQr8jQ6uj",
  "key24": "2rEg8BgrtnSQokWXXs4dmcrvGrSG7dfzvnX1eUStDdSYp12qnknW9nYjD6qpMacA8JsE1F9Th4apArTySN91NUXA",
  "key25": "dRkbC4ifCVEyivZdxnbDZq7zYaaT4ua9EivcZdAccNG6Vw5QUtgSfCvDLe2m8imJFFxX7jw5xJ86poQ1ujo8j2F",
  "key26": "3wdEtDFnqs95oZUosQuR72ctPxdoBJfqsCBFUbm5C7GEzYzwtEMWyTJdHEmx21ri7y3Bxp6mWeTtK7N6myWrcH9W",
  "key27": "53LGcqFtQvJo9tLNUjsnR9Z5ML7neRkC6JvbkSJv7fqkNWzHrdZ8rfMwwNJCtWcWWNmxtJf4HGNx2FnprKWJ9F84",
  "key28": "QfCU3fqZ6sUrf5D9Gep2CkKvDbdxaP8nhRkzzSvicfVPVN9BHRMaYLX4XW2HkdCK8Py8ygUewkhpF1EvmVc8biT",
  "key29": "T9pyAAfZfyHKR2DedjX2oVtJsL4Suma9hEnNqjMGSfmun5X8TruvU7TkHZYZLNndkWxVHPAuznnDaCXC17XaQkF",
  "key30": "4T5WTp8gcmfAAkmoYwoZu21tXv379GGN8xcV61QAzc1qdDapjo82BAvSD2ZXTS8WVrmBACML6GJHown2tapPfZRB",
  "key31": "3PKgdCJPb6H7noseJY6DU2GoUNPgYibs38aFtYp8HXtcxs7yYq7wxYZCnxM2yNtkzKCxc46jNZ8aoKn2oKPXZTbi",
  "key32": "4xL1bQ5sG994YVNzTkHh8ABwyE26Cp6JiNWBTeyV3rKzUgjpRymzvPCjy3Pw4MmuwYtpzP7V4vYTAASQdBky9qdU",
  "key33": "SvqLQer8r7sSPuRm66Y7vb8DUHKiQPSEFpV8ZXconyPUeuAyCzW5SLbLNWjscDy14WGZwFEXcg6FA3xBQQjrVxs",
  "key34": "4yCiGTA7xUtRZYy4JzdaaqLuBSGZjqEW9ANzHp3arUYTwqnGWGLForBFuJCThN2xMKb1LFz9ZsLFbrBwCRK8EYDG",
  "key35": "3hFKNgCdANrLYkRCZSc8naRMSoQ1CkqtwiSDNxiaFi9DmYVprYJmb8vTzS3YcYYoJswgzx6qftmrPvo1Kxp5ZoDg",
  "key36": "52FScbYVqUzPaMa4iXPhJgHSDNhtzbQpLxqDUNQXoxdAfPRiPNgLfoqoZoeLzdh75wKQ92sCnkRADNNP8T72ogx3",
  "key37": "4wigYrBHnGaL6KA8pdo5eJQffsLhDngYvUUekGWWKeH8V1WGccQcBjwn3VweekuvNiSwbTycF2LnSTe4XMZiixVf",
  "key38": "32smUpZVZiEMdwku9MFRtPErjQ19UEjoRMu74S1gvcGTs4veuN5YzMPx7Cfkau5DrxogCzgbEFVRkJCoiTyyRMaV",
  "key39": "dcdbQWktAxPa5nPzETC8tnY22n5qHtnvMscnyPAUiAbtTkcLpDrxc6VpbdHNhGDShjREjE3VgRcxMsasnAbQQMN",
  "key40": "55wfTojrk8JsDWYcZS4uszXQQoRwEPMEJJsD9tuZvkysQUsBGcbMtJPdPkF4sripZcapkPDiedsH2fVBYMQk8EGo",
  "key41": "5vgJH18paYVBSut6woJ2P1DykWXRXqsNdC9Y2eoHtx88ddHwT6cwwuHp86GJ2w1vNuDGMFD5VqysanyqpgXqGb6h"
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
