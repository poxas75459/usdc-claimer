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
    "nZg5YVoBLFANbf9iFc1zy3G1mHyhqjw6kshp58fgzGhQgn1cjJSrb3fYVyQ8BZANDfNoaxLWUjRtyc9KCeRKLFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JYRqWzHyNL4GPoPvr5wyKfmsUZu6Nw8RNM3Qg1gBS2owkFFooircUBRY3Khd71nxUUw52EeQmhJrmj1KXXn9RBc",
  "key1": "5b7i7efHAWP7jeQdmQaktsUNXvMWr5hsUvjDToMxBuWvS7kieqJJSFXBvBiWTcEbzRoho3yooo41eihPHjN1Gngd",
  "key2": "5MEnkJLZ1soFpJxbEcsM2FcWvEAmHvdVFMBvU4xDjRPEWGKJmmrjhYxfEwkhLqzMqsJ2wYmtsTd6GtP7CBBAMc2D",
  "key3": "5AU7Bvi7mhswaC5QGjk9rAj6HDFm3BwFfjSgc54HpNA4Cxpz6Wy9koS1W3waZdgHuLinwyuWStERHTzGYPMRYRqh",
  "key4": "3SvXZcTk2Dcdtu4trA2VVTUVFbMFH5MCcUTA8GASUox7eQit2zWwWrWqjR4QmwcMiD76RTR6HxR4P2WZDUGAxBcG",
  "key5": "dK4CcVkN32Pua2jYb3Dn1Em41qPjGCPZVbexPNg8ANapssEFmm33mgveZwNjNhK7TNLvtAiDr7hw5kcfCEnhmn2",
  "key6": "55RPNcMkgbN9HsYJRFyKs7wczoQhKMnJcQEpQGcUbRY9wrQKLZXQy73WXM6a9bJ4tTh6oUPea8eeM2AnkfPHXsPV",
  "key7": "3TrqQhTjbfXY6pKmKbQ1LRs9D86m3DRbTAMhPeWeoUooXJ3bVRfAnM8mheyxEFTAmVWojE48jaAqcVyJADUUTbNH",
  "key8": "26bCW5eLs9niwL6496xxvBuD8TtzFoN2yMoEshFz4Qv6weKN1J6hGGgp4JpQCFs8e5vmzU2TNwzKxKf3UxbpNbH3",
  "key9": "3gf8W7vdDgh2VRyEnESwcSmmj5FUsjieFL9QcamFy2gJvo8HCDHg91zDjBgpaa2zg3R5bbs9CAUTyfyjftUJ2wBt",
  "key10": "2rNcqke6J6BvnjsTuo7FkNEfkrVSoCNP7GsRrCDzySR4jvuzSXnh7NxHA2BRjQCg1LKtoXEY92Yji17DzGXrWs7a",
  "key11": "3a2cLNbvedC6en73fi9de9fGAiabDrWvjEEqoWJL4YN4cEWzpgox3B2VmFp9pSGm5E8aJwC18psiHY5FcA1eDBZs",
  "key12": "22NdZYpomwCkPbxH37XHHNRJm3HXaGxcCa7VWzYrqmFZTqQPrbpz3H4o7CPpeqJcMb9E4uVAQ15TbU93cybVm1qN",
  "key13": "4BffTmK6TSDNegaZNAc4n8cyJFAFwtxW8HuFbQwFHFGTQsWo5pyuvLGjrZkVNNc5NX5zwXviyVLfrmnqjpWLM5JT",
  "key14": "yQNQrry1ZxHUamwLookaAXSGUxeLCnk1zdQ7RurJq5Hb6qSTfkxxbwVdJj6VZue4V8uDhke5nFGAe5vEU4edV2H",
  "key15": "2u9q89WL5CLc9kCu2acSaLGVLbV45JWhFD6guKKZ6iEYBA9ADfJn5gRB4SCbZqXbM6ccFfeyap7oT9V9J3Mt9bJR",
  "key16": "3Z5BBK71PFRMV2zFkRoUFf2SynyLJH6L6cwX8Wk6H1BCowFJJXBL8UdVKydrPardwqHiJySazQmMPQNW9fL5X35D",
  "key17": "5gn9qhFC4e18PrSjvhSyaxJ3Z5rxKqgRfSioZYSMByKXMb5vJRSctYErTshHTKeg6uvHDyHGchVU5NbmzXMBsHeZ",
  "key18": "5y2MfnXfLDeNBj2A4253DUpprVAcPY2CNKDNKqYD5gQZP1wUds7ThmU9HfN6QdWzKDVDt3qo7fEhtswVGefWJHzi",
  "key19": "5eT8uK8KTxj3eSsbXuveWFibCiPVvaf8M8TLdiqDrm7o2S2eZuVkSedtPLhwHwCYKJ8tt39TgovCZVTVMcs851DG",
  "key20": "zP7qAS5ngrUwjnp6A2z2A9qjntqn6jetStKjPQ1fVu1J1535q8VDvepcVnPgfN5Rt6ksU3JEaQZvf8qcnky9NRk",
  "key21": "311uVWCTPbyFXpC2AJBxi7ijvhKYDfwavKfDVbhXgFRiEqDAFq7Jwn7AHMNariB3CiHQMK7TLqpcCrDZHsZgJpQ9",
  "key22": "49UUzUVgR1DEjcr2itmng4f5HvUAeroeugLdWk8K7GKmWuNqu2cjaow9VLtda5zpMopMxb3WsEVsZE6XiaV1hpw3",
  "key23": "5hnydmFqgCBmTV5b3TewZAamyZYJtBb8QuWfEffjgyLDgAfqyGnkobSH7uSAyr3f1XcYUvoJUPdyr9RzRsp5u9Bq",
  "key24": "62mrP1qLMc9A2LQVw2UzfD5SSRsvMLgXEBoiEsWf6vxV39HWf13EocbXyQPUyQyK8n6JLjmGRWCjXA8MuCc9e31e",
  "key25": "21et4Mk1qTbr4U311AzYXgh184kVLvG6AtVat12noVHKchYAyZYSWFehTDF3BzxymjUaBWGokJEqQX2XWxU5zTAL",
  "key26": "quDdGocFWMyuVtDSihDLRSkY1RYmWNxwaN5wbqukRUWaVDuw9V4NY1MvTpQ56AUELf2gQYxACT3BbbbhzqvdBac",
  "key27": "4JUzfLPoNaHRtEX5XNsCtNQs63KtdYuAse2R1BTxZjYWXfDMKoFPYFHEgkBpeu6K3b5w3kxLmB4x2kiMHb57NgkM",
  "key28": "8HMJh7tZyYCvzS97BmwbSd3dBMqt49wnztjGSK72am4yZ4HCHV6QGeQRubRaN2hGYtLVSd9JvwZPBrZ9P8wdtdx",
  "key29": "uzR27DJTyouVZ6Z8i8xUuFepdMeQ8x77w7uMkNTTtfKdzwN6bqvdEbCkP7WESGvyAou1jWMtwgDzUNjsRmHi3Jg",
  "key30": "3CGVjsDC5ukPMUpNad74ahzWbkYj7UXHjzXTaJrsipPMYNThqy78n4E1x9kbmJzYNtVwzRuEQsSSv2DALgTnZUkR",
  "key31": "4qxhaR5StaWosGmq3G3fHRXnJpRB8PZ7PHtfrodhptKBKRFoW6WdHvsCAnchFzrFHLS7YNSmi9BjSZyoUAMcTc5h",
  "key32": "5csyiay1wgAWG2TtwiTZsgKNXW6h9Y6aB17GJPHsTTQwV8LBvo1xKXHG7dnJr7jZrv5s1sm38tCfFrXzZBe1foz9",
  "key33": "5N8769eJoeuqeGmjEUHxWaBVw3bBrETgUYQVHzDDPedWMjrjmgxm3XMqyArnEZg59hHZasihqfSDMHc74KwxMZUA",
  "key34": "2MhXK6LHwadaJVRUaQgv9KVepAgBosPbLwg7fU78TA5YWYf5hp68vpg5nSMBFqz8RYQJ9e1hhkjDbKx5p4QZvj2n",
  "key35": "2QypjUr6RAWSxezcZsUeLTgZWy61usBNrBB9x8ijJUZFM35jsEck6As9T7tZ58ZUcmHVwMn1uwXrHh1JYDbTDoHf",
  "key36": "2XCsHivia4s1dbfSrYFbPuypZWu2meqRiEaGwAp6rTQLbWq27i5RvyQEPGesk84zVFsHr2Wr7bre4DKLDe8UNwKz",
  "key37": "3RWgDtCDkXbeUPDh54vK7FF5xxgCnd3rJFQeQiYK3gh8spJ3LtpMpVYddgpSL6xaj1TfqmXsmKpA67k7ucUzHfoW",
  "key38": "5UBaSnseuYWpbMqsfgkYWYRFHhGsnRDi6EN6edoedDDkH8E9uF3MwkBdK2kjFZKxkVXYoc2NGidDanzxbd9FqnBA",
  "key39": "kw4z17dTF8QXy2feBHMRK5S64RCrbUamZKqkQVdPdJSwjjdJEkx7Tnu4P8a7zGrkmbo29QaoGuVozEpcjKcbJYw",
  "key40": "6TeWEoMVC7bZYrxmJTA1Frjzzek9SPERNUBUEDJQ2oTdJgxEUaTARt7kCDA6u5rx4b37jBT16Ab16Sp6g44n3aq",
  "key41": "3FWREq5MhZL62it4q4q7uQyUV62DkXrGag936BykwnBvTmD3A6YLDNqg9e7iRgnR8GgDSbQqb7uPBZcGJzPWoj76",
  "key42": "4mB1yqcBxoBkV44p9KDyFVtsE55ah1LCgFRjJFZb1oDfdGA8yy9k8qvtC62YjbVP9tNtreqBEsyP3pUk4NJvuK32",
  "key43": "tnwc6epEVWF89srqf46rCiG8enr6arNZQnAhofhm1rbcxHrBSZhmiv8Zoe5ffzb11qDLApNXtfpyTMW4mZnpvJV",
  "key44": "1YUnteQpznhc4W79xSBkNuk9J4sTLNJnw3Awiyypdy5dM3Zm5DkWVTE9A4SinFYZxd4EuVc7evqFaCGA3KkEq2E",
  "key45": "5G27L3PMPJhFfThBJ2xByHDEfa3t49pvRx57AgXgagGad4hhKjxrRmY5WvATo947VtAkauPmNzeDeozcFYbvdTsx",
  "key46": "61h9BSV6ZfY6mATTvAp7SYL2dP4ycW5HqEmVb8LUbmVN1AHMEKVfLBdLaznAFo7XddNYjuZHMXdcSbSq1Ay88Dhk",
  "key47": "42RSBBZ6QYALjWsthRsZVBNng4Xb6xAYPRrTazyKWYK5PWeRBi23KkvHAg6CnHZwKoQQiCn5xTiuRTDUruwtCgKv",
  "key48": "4xSY6GgzjAG13UMukrKDRGKFC2Enme3CpMiNHpq8R7y5CAYdH7HMhT3nfSiPtiubX1X7Y9e6WZ2ENWteVUkQfB3d"
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
