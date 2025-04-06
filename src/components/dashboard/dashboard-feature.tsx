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
    "4CaCtRncLmiQQJ85itxLABm4Bpr7CPfBfVgiN5XiH8vJhDGRNbTRKrix4ArqqBS3jMH8449FJwCvnWUH2XfgJGZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3unXQwweCNipDzCqHYog2S9w5NZfWRNHzxbUijcZR9bVsKgqFiq6zVftgdgmgqYBrSVqKaGpNHcXhjDKDGXztF8a",
  "key1": "3uhuB8A7xXW4eTYqwcbDHECuSceSvGRKFUnC6bKRtY23RLZaYdU2GUV5CCFBwaEGhnkoYtNP4cMgTf1R8jEfnE8D",
  "key2": "5wiX6se7LmiccQwNhoTNxDzs9xtXTnfsQgQ3pGFZavmyHqBbEdRjgSvKDyAjPE5mNA2vPnK4bZrievmuWJPmZGeV",
  "key3": "2XCUJ7JRotw236peGdK2ZKycYSXBDTHtkQUSWsgZ6CeLgUhh7gFFT1DXyfC3zFympxZGC5i5pD6vBmTQ8tyMQovt",
  "key4": "ZLRLUXELky4mRu2AuFLy1uCdVvNABryjNwFqMgvFnZjZqA1BFpT8LLX6Njr43qnsque4PV9Zx9MUgX8Z7DPvAWV",
  "key5": "4VwmmkYAZbcXkV8URSpBws6V4wMmLmVMjjHnVfgyYrNPPZaaTysHBgign3bUaJHmGzK7bEqKMbB1dSQ5SCDkSKRQ",
  "key6": "4aYXZkbJ7WKXiEVJM6YMzkqu1skZCsE3aZqsDpb3udDFf1v9CoxdBg4hfeDE2DVXcSLgKwQg7oNzarR3ExfrtbMM",
  "key7": "4iaG77Wm4Eb7BMTPKLdqJQqUQrp4yU8bAC4HJm74QHGF9DcFRTK7oKvED7AMW7i9y5zkAxZA4CBuahmbnbj7NuiL",
  "key8": "3HfmuShTGoeUZre8p88wqvska793NbxZRharjYmvLb9537BsMD9tMtsv5utijGVjbr5g73QwKZC46QK68Ay4H7yJ",
  "key9": "PZjWwzcyev8EawWnWgTQNywHjC3yZQKFgaWgpDdNTdZzdSogz8CR7uRJMKFLJnq9ogrjpAePbqKVPvJRAmnLPWb",
  "key10": "3D5e3YUJww9w8i9RxrE9YzvXdbXArubTEAEu3o4QzqZkjpqznY2mZ6HGD7gKqZ5HDY5pZGCm5pWsC3X9Nk7BpCG8",
  "key11": "2CZcQjxPirXztWvMbhjNmTtjNWAcp2knS8XLxFJsmogcYYByiESrV3UZeu98jugVF5P2dNgLJZAawFbhbaBEp9J4",
  "key12": "mNUM6QSDZRv8Kn9u6n57QPhSBqcEjPuGgarJ766AnGcij8Rmw2m4N4RW22TKomEU2pJqjAr6wtgH6MrpjArQFGB",
  "key13": "5Wz8CFJVMbtphSvPCnJWFPjmTTjuUCpw1AJkbyTtMujboZ4fBQSVhuYQW3jEPADCnaUbPaiyETcqbPCMhSKChTKw",
  "key14": "2DwkwSQZpKnad6ofr6x8DxDBjrt36rK48DUomeGDhjj7Vh9WDFX8V68vGr3UZCvvqteMHunEEeuNtB3Vy31VEkf7",
  "key15": "63FNRoQnsaYqmnLEqnxzxFFaAxzDRPS1qgK8YhbfgShgDXMfcNrSAQejQESWjes9oK5djoxWRgkmmQZrL8JcmrpR",
  "key16": "3V9kZArrirXqZv6LZEcfKLqckU4tTHCiHUBowkjb4zcLjcuP11jjjhpvkTuvunypTYTdgnrXuANrkeUk6iP4kHaW",
  "key17": "3ZfKFimibhVwQwGruHUZKBNWEv2o3cQSRwSkLpE6YeQTWcTexubB45nGt1cZ9BUJPPWVtmbCdEDHoY5k9TJRoRRr",
  "key18": "59d9wnJYfcQu6BFkoZVdmKBYeqAChAuYYaLxuUEeAyWVJReo4qprUq5zmNq3TsfDJNQc9AEhC9qfKk794CKjPjY4",
  "key19": "3DEixsS4puX3WkYsUmbkigy8Sndydfr8phK6t2oJk4sgHQH4FTKV5rqYBhBXgCf8uKqXpbbSJSLguYzr7F2oRJZM",
  "key20": "4kkouXfE1ZFoYg66aQ6cRjEWZscNWSbmrryNCTCGEBNcUBv9GVoGMiAzB1Dnubpmo8PFkNceToYt35Unjyfzmx3B",
  "key21": "N47Aeh7J58quJ45oArsEnpU6p218MsqbDcPPHkHZv3DFXDTDxMNWo2AtNPtQycTZ8PQ7x5x8WF6YWCF2vUbPvwg",
  "key22": "5S276bXearRZpitSuAvMCG6m9Kk7FvXBakHM8ppEYBZGhf7sSbVTvJLJC4fLDtkNE4uYjSb8aRRc7CQ9jvbbQb7B",
  "key23": "2B5Hev1CAmkBzvo23RJkLBeu4fknATVU5v9VrugViS1daUnsnswG9ndwJa9xU2FYJDsu3a7DECr7L9vV92eF3psP",
  "key24": "fbfcMEcmXLo1PCWL3YjbTFseTZhqG2LkhybbUV6Lkfh7jRHNFNGBeVY8uBednC1LuQdhqRccDXVbca2jP4EVQ7U",
  "key25": "2DJ8kwy1zqXdydPBbazrAY4GK4Rx1hhWku1G3r867rLQj8kqPPZQKDQ8dBFinH35bmUhbyjVX4Ff29ZVktNrauVz",
  "key26": "4s2FN3mD7qZBmnebAowph7w5Ld48KnJgtbSGhesoDRjb8MyLcQCJ76tECY5d4j4h5wHbsWYULVvDzSPeR8pRsNRU",
  "key27": "44ninuFaXtRiLF1FDDLNDks7wzU5EqzKBJi2CRKmqg7CXqNL6hpjs7YtmQpmkUFUVrzjq7aHxL617QPqXXNz1kYd",
  "key28": "2G1kG6iZcaiAFWqDWXno6yPfSguezXwwzDbGUK1qdToGQHLBLZGGhUfhwXxhfJTJu9yDgq4kxntRg7WtTVH1ZXWN",
  "key29": "26EMKPJCWJ9aNX62vodR45irQVNpjPs65oHEN3eruPyYp24jMfGboLPbjCoeFk82aWA3XBhJSEw83Fv96V6g5Z6S",
  "key30": "2VyFh6pJt4RCktbv3NKxn6ejWbsTcwPo7ia5o2TyBJ7iXyN8jPwb3ugLpJJ5EDAnkuSfmzYcv9VM7reaxRD9odEN",
  "key31": "Uex6BXLNh9rim1ciyYbrKATW4Mce7FirixQW5fms3G9knyRjCPzen4rP7ZcSdcS2DVM3fsxa7nPc7a3wrGoYMqp",
  "key32": "39eJ9FYV8EdqpLpwitWyxNsbfxJ72yeBWx7PPfHyXdhoiUjENzosyzPALi4nPdABNb4iaaZHnyxs9iSUCT6Q5y5u",
  "key33": "666WXvA5vHqZ57ZDasjEWqxFuxvbyo8Za4kuAkstTX8njLJx7R9iQ7uDpsvoQTq8zKFAnH5HRJr5cmdT31RrMmMW",
  "key34": "UrbNKxP5T5iNYpnxircBf2RoCApn95p8N8uMFhquHbt5zuLDdWyUGGv1rJz4h8pXo5pTBPcG2L4oYicfzZVerWy",
  "key35": "56u3MVP3Q7k2SGMkz8Vh74JaovtbHx82NtfxHFGv5EJum5HYNeZdVKKvBAFLxLtULWERdWiPuAqpCucwLQMuEfQ",
  "key36": "aoP3S9CbKZfqpbZbHxeb13owF2YBgYFTwnBBwBYHjUGrXQqRPmP4Xd4iTp4yDcSSq7Nn9K8m8Uxv7fFFyYBmU7K",
  "key37": "3aXTVPR5ZztMggQasJfgipy1wf9BuATRbCG5RL7gLhZosb12cEnNuWjsAcSwKdM7JuZXEzfst7r2A47s3sRH2JZB",
  "key38": "3S8ngJwVanFN4ogNrVM79NAEUusRS6HPZnhVLoYKAwVsXsMwhwsezxFsCxRPTeDogwGBoo1Ch1yxRgDSNbcYxAte",
  "key39": "4d855w8wAmhnaqma65VGVPbn7xrTmfiwQPhGws3gxdNWUeavvPidBZSKV5TBUWQf84jQ3PRD5XCaFJ6Xn9ban75N",
  "key40": "5dyCBv4tq3eTw1tpk1hzaJqKp5AmTvdMZqtvsrhM5v2mEAGFo2335Z7iCUcKxrUVBHaRjvgDPvAS28uTDjnzk5UA",
  "key41": "25PvvphWns7Gt6eM7hTquHNZzzfJMpwPRVzBxaPvZBnL3n473gYGNiE7W3dw9KZvW4W33iePBDZtFxdeyVsb2aZ9",
  "key42": "58XGZsw5yKsYRtfaV9FCJUqzwYkxQorQ4QyP1gF7FYBgCpv2txfMvinWFKzLpy8KdoNdPTVtjG69amPgy5uNQuxv",
  "key43": "3igaUyM86xNyX2w6VNGJSCPNQNmhYUST7w2Hsyt5mzqcBJ5XdELywiDzAq8k97DpDgYxaEeWqwC7f2CeN3ERbpDV",
  "key44": "1JgnhQxfVRvx7X7DVXJYSkgafjHojn1tewGwC7PyRyhuctD9sqPUiAP3qyF2xVQQqCNGCw2e5fsFZrnjCsyeu1u"
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
