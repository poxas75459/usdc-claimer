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
    "3BEokDEYKLVkTFF1XFb4qhpYfsEgdV7U2j7t4wx2fwKUtWEBoCMeeDLF25jNEEgzuBZtxEYHnAtuVxHSzjsdJ6Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YTu6K6TrNDNSa4pdiqar8ytJQiKryrZX3tNixcXJPktHzKzUjZaT2FGdHLZq1d2dVrZbHQk55J2Aexd6BvrncaS",
  "key1": "5mjDgGYwwmFtqA67oYURxaGf8SHzA8RW2DSzCEmZH1czACcVnM8yDPaJ7B1spCMNuFnv42uzAZJEkdUfk5tGt6SB",
  "key2": "oLvvmvsmqB9RReEqp6EJaUeDyfYQ2CveCzo1F2HzURNiSUyVHqe9hnKx7UZaRT1SYzvtg8GS1jqXR1LMwXMrmRN",
  "key3": "A3E6QrJGZW7yqo2ky8uBfkkFSBwTuCWzWo1ripL1522YKYfXJxoNoz3nRQZ3NqiMAqGxSh25KoPjgPpzSDRtn63",
  "key4": "479UDuRmvZw8wj5ze54HGuv6VqpF2jVJWfSiaEGC8ZVKcDZLnyqgyjHxqyuxDRjmUQ5xU5885eevt51mW7htdCE7",
  "key5": "5uGMi196peq54AjFGKRaVgQR4nmnJL3ELcY7ieyEZD3pfAaFcNRzWSFe1pmhNpnXb5zgdMiXwetqudj7bwviceRB",
  "key6": "33qff8HU714fxZqJo4V2VL8Z1y86Z22rs26TUWW79Sx9LawzEhPj1oNVx2ydrhePRhpcqJAPonJkQcGfrjF2wrFZ",
  "key7": "5iJkUgT73h3K6JXFixgCY41gFJJ5KzfscBqqwFpTH145cnmqvozYQ5WUN77iaBajt9GwFdPjji2qFGMAjHpUCmX5",
  "key8": "2zfnHe1CThxKinpgVveA1KazB6A8XXUCeFokYBY3JedvGVr192ERz1ziSCDL9wUNGJYXWwsQ31tYyB7VXYJG4UoF",
  "key9": "G8Edtr7PNz1azQTauZMWyKy9gY86QTkHZiE7f3nUFjbDtStKPFai121DUBGuLrqfDroZiHTCsR7DzLDQXSw53Ch",
  "key10": "51rTvH8YKXnaxSQFKGNBo2KDd8AFCbu5QXVRCHySyz1A2RtJDiaE7SRXS8Gtqqr1QLnykUC5KDP3gq9F4wnZtSfL",
  "key11": "3Reov8gk5njLLGxX7cH2KWUmptpiAg78RGPPtYQzcewhrjzpeRmTmyqANu3D5KsVKpA69Kq878Q5xYf4KXNmtRU2",
  "key12": "uHLLMiHudytMBjjRVULZ1i6SF7m5jpbJnXLbo8b4Z5f3MJd3PeCC487SbrdgLp7n1WKLRpLxiyA5Qj2y5pnPV64",
  "key13": "37TU97pHjtzjQbTmfb1AyAZyJEdhmohQxqp6wkwSrH5JbYixAthb78BkuT9pJiKNZDQabFzcwtJL9CMavjFg3xz2",
  "key14": "5ZEwv27knhmyAR3ZvXGThnL6L3SezpUBsLExsXbSzHuDfZzStQdgQWteSdc9WoBqn3GGXUSgxnBNpUngwKNzxQGv",
  "key15": "4bgKg17bbfeChUgenNJ2Phv44f37CuFfjVQKLu5xVwddfUUeDxBDVRerbXdqt4Did8tQSboiQiuS29zmVrvNoGhd",
  "key16": "Y3XEdqhSHpGHm4Qdi7qjnBjHmvmMvd9f6kTAsUxpUv6kdd9jbaN2PSRBEabGuS8KVNc4eYfbaRhksnTvqLcswAk",
  "key17": "3MUzahNV2F11gBJqrkc4hdyRRacP5zxj85acX5Lmkft823kwVPhdM6MZDQsc98VE3XTbBncq96mmduGVo3jGKRzW",
  "key18": "2unxtSTSKBum5mp88XPENq7EJgx9wDxzDA2Y8k7irsY51YNLks8NtzcuF35tA4cDntJnqs3YyvBpUfmsrmiDSLLq",
  "key19": "3PWPeqezRR9CUDPjBYmiAT1A4PbQ7cXoKfeNX2PmU21AYtNLGdgoBNEL1AWWJ2XVXkRpBFU9m9ePYRsbUtzBfpuV",
  "key20": "4WmiF2cEosfTwFkmJpWy4npQ8QXqoqLWiotTToSATzshXTrp8SLWSGDa4Pd9pRsC91ws4ZtmFbzis9SF5ThVWX3N",
  "key21": "3Nvka8Eb3v6J7qcvL42xwpKVMBxVdzQs3tKqs913QhckAezYvk2q1SuGjKtkws3N3jUTqFtEZcAvcpxdaK8NDqWi",
  "key22": "62qLxBmNmYgn69kat2WcZS3ekJWWmstFZz1Kj527tBh7Lgiwt3pyVGu6sME2VVbPaRbEtS9fcqwqymnKRTuqK62Q",
  "key23": "XmAnyBHzKmFTVmqUKJfBNDMiGhHjyB62ZZqrcB6SLYHAKYkHrNPwEW7qczYQFAB5F3CXN4rUCdALir63EFVGJYm",
  "key24": "5BWcw4fgVTzTikxTTmtGaKUTJrrzsmFJDUsKduEbAw8N941cJEgcnzSg1x1YGyh589snrNVZRXZcVS1E14tA4mmk",
  "key25": "4WktekQysERYq379aGAnvLg2WweXz6nuiYb5i9trUqsbQv5UqmaFcPBcar7N5mazUr2QHR31vjbr8n7t8f2FP2ma",
  "key26": "5FeQ4pmGdgaypEMnkCYqMEsM9nv4o8FY3x6RvBnWrB33BxTYFa6nDcDuC4Asm85TJSYTUnWcvgkG1VqUrPWXXZJH",
  "key27": "67K6U7WNVNPRCGsWnY8tRq8yWFLFTyShfo3AUhgbacYXbTg3QVu1KxWwngKMF63psggkvxbX8S9eL8v5WoP8qEgu",
  "key28": "4QizYtCmE2rUEpkyXX9Hqqs3dZXEL9nwzNCG9Tv34MagSGHZBPYm7zvEzp9tbWyTrCfaFMi45EVmtKjiGmPaWTbg",
  "key29": "3T8vDsLjVCyKVxKk7yx6dhRomt6La8pjnknKockFGcMiZ4sVHJcZG1TvBMe2Z9PWFdKdXwveEpVWJaim8SU5PkDU",
  "key30": "5fotC7LSoqAdU6vaahG4UhL8hFrLPLhK82D6r117Dcg5gJCsbPuy6eU5E3PYDj8KH9PNK4FpHgr84bxE26qrxe5g",
  "key31": "5JQ7Bm1ji7GC6Ja1NNwpHoFX8ehA7VKuPhxS9y7Hzs9oe4HHmNAbMZAbkd7dJteTpTmmBjQ6aiK8dfUdyW4TDZ2Q",
  "key32": "2dUMnNpLsZa8DWmHyPNsYRqjaX3xjmw8nYWi13Aj2J4xernSy1tQGZEEVGC1GVL7ZZzTvJLAG1KfE2RPKe4UaZD4",
  "key33": "5LAwHpzC6tadWxg3uMEpbb9LusdTn6EAeeLkXvEkvaw1qiGLK1VG1jQR7R7vAUUHN751idEh8MjBAnDKVh53hwZi",
  "key34": "4UWhCBii9weLxktQ9QaRYoUnbmNtqiPzjY7TMp9ezRxqzyJB5EWzMGwhyyn4D984wUcG7c7esotNCYBmnp4JKcEY",
  "key35": "3kB8S8ZuJcWKpFZsjmmxeb4NSwDBAuXh7MRVi6eCpWRwnRXNpSoTTNf2uBmcWEejZ5wDdFuweBhbR2gCPTpmGd8d",
  "key36": "351vtFTM52G4Zu2eCkLzg3WDLsEwpbQtS7vkiUcCeDLcUt2Q8hbjmZk3MzzmhbourYmPtYFurHGtsXTQCoEgff5m",
  "key37": "5AZRZy7ELj24B3fiMLhYcbeu4vgFwb5pVb7aGW2K2CwidT4nCvityYYsJgAsQx31YyXoyqDH9ov8Ke25ABw1dh8j",
  "key38": "Gzq5SUagp1PC6M9rpW3osLHkCJpPGEKK1fEKC2xfCN6xnFxAnvCZQ3D64To9AQJ4ip5ooCoc4uFEkJST2HPSsX4",
  "key39": "ckFjC9PoP4mgertUY9Bbr9WMwudCig2A8ac4GZrCtPyMEPJcHx6x5SLKe59wAJyoqD2tRQU6ZXVUbfRLuAjfxfe",
  "key40": "2JPWtC2fn2Xx4Q6YJ22oWfCkWtSdpoNeG9HMNajzfirC5M2Wh8NcGCGyEPB3AnLtaZq47SSMPrKbgXszjbfPNFeL",
  "key41": "36SiFYMcoc1Nb9XBWeNq8fwpR2zUQuTwnnEa86HY9cgwJ5JFsg8Uzkkxn4pHjLYTCuAuWPGFtBMGnpgsp4vPxuX6",
  "key42": "4NMfery2KtrUHPefE6TSD7kgrBc4wRDtkXBUNqMXbRXJtusk8NMGnc7wzymKCLSBsunqr82bu6KNmwxiXk9HgKoM",
  "key43": "3xR7QuwWpoj3JePj7mrGfURFgHKgMx1XU6GMpXs4Z7mkNakNGKAGkG3AHYguM6eRQrfCDUkeBAiSnKJVJWEXTkJE",
  "key44": "5dUfXeUYQ2K1TGJnnCfNqjyz4BGYy2hAkrES8geGjvtMEUXCmkhwQoBdBnjrrLt7U5sU7F6hNLsqDRgyhss8NLLW",
  "key45": "3ALVUfaCLusvQ19wJVJarWJWK1w6TggUJcDCmsJdo5hxJmfvvhrkTteczLwgaA9c79SfHgXksS7wHnmwSAaUWUsA",
  "key46": "3u7p7V8oXC7968iezR5Uw7gexrzjQqKgb4CqTfQ1iRnSXMez8EaMLdi2jXjDU4oqaSk3xkKkX8bDDapZoTuwsAvF",
  "key47": "62KjKCPGm8iiq4xYZe55zutYswXkNLqYtzNuTTgGmCSb2GRP6wCrUM69LWNWhJESjSwTenLRJfv74vG8aVyuqMGL"
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
