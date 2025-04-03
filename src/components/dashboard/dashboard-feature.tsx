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
    "3W7TWpkdXvrTBMCUd9HiSLRo7pC6JNkfxjtWiBPERmxUvbjb9rzDWWpPAwL6z6yZ74g4YdwPGiVVmYq8rhKQLHjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PZuVL8BNyeLmkFpNMtgK74SgWcYWJFqpXRyHVwcPTepahSnZ9ncdqQ61V3zMXqdK3h95CuSY3t763GKv1MhjsxQ",
  "key1": "3jEwgJAS7wtHgAR8kTQQDgEx8jv5KWDc43qqpPr9nBsH1SpkTRzortHL2c72xt5s48vZJMVtjkdCzrAc2twCXYF2",
  "key2": "3frkmwTVPNFawe7L9mxNiWH2YshYHaJAAgZKz7wNWwCqMYVFB8wXERaoCr8NswZofFQnGYkXmArxunbBnqExUPEy",
  "key3": "KDveqacq2as4seyahtgLMKmHerfRpvzT2wy3xdGHNxK8pj4dfVicWCXsMVbaAVRiWzxe6KZCA3casCaT3nzjdsB",
  "key4": "3kQbCepVcGojR1kybS1cRJjorPo8WeTE61rLUweUJ7gWschb57bxwAVqDN2r3abVb3t1WkUtYqbwFKq55916MG6d",
  "key5": "35wKSiXQzZaomJHgt7cmKE5GL1S6NUeJZFxoW4kKRgov3yZsWvYkXkRJ3Z2Hy2BTSYHi5F3QqyigrEnguthsCiDT",
  "key6": "3jgfyvtDgvfbnaxtdz9ubbfqXu6WVM4JqD1RRwWKDziT553mzPPjWWp3SGpqagWoQcpPRT5D69fgdpYvafBmahY9",
  "key7": "4M3Gt7x3kZTfb6hQsGbyBVxh2oS59mUhVv5amsZ4jXAQ8211axjtgH3yAQi4SnLFgTM5br13ZJiSMfUgowFzNBHH",
  "key8": "3QGksrxdq8RoB1huKoYesaxETU6qN717UbRFjaVz5ovu5cgbBVSn63n27s1MsQwcQjoWBLG8nzamu3YrUXrJjGJE",
  "key9": "dgCy7uLMcUJ7tPMJMrQSvqAQ5MwirdjxjvwuJuDZWmo3ayKbv2QdyPyZMCT37Kn58XtNeer9k5YViuB7kC8wufU",
  "key10": "4CmDXCaEV5bkPo6MxFMrfZUeKfvcvLHjJKxj4Y2nhT7WKe2biXKXZDUAXCtARTZN6tDuWBTEh9sdhHRQS8AVEPpJ",
  "key11": "21JXwXafxPtfRC3mEVJgRzJ2ZT9xpMgPdMwphxXArKTFZnFgyBLmZDP1NWrDNxCkWE4ssLEiUqxNdTx3PG6vr4cx",
  "key12": "3k8thtUhPaTeaH39nAVERSyiHG8bFVC8PHrVmBsEjYW9dbwDHMpCVTMe4knMfeAaczHDj1AuEV8cxZkJVSrN9Mpe",
  "key13": "cCM2agvR1wX7Kn8sjVNWx134UuVkH9BCkpoE8J5vKkJhu7PiR3ev27XH5t3vazJksB1EmpoYDqwas8jaEwYyS75",
  "key14": "61zz7XBMVUfPTbCN3iTFv9Gnsz9H8cHLkGWEnJ64xxTJ3A9KKN48JvFqAcS484o6EReFwoTNcwvybgtZqT6f2KoH",
  "key15": "4516hFmP8jrLYrnkXLk4UKuf4xrjCrpN5e1K4EnWbu81pqn9rSmzN4KxtZPoSKN395oSpfrcRZNEBN54fUGuw6gn",
  "key16": "61v16UeM1JZjDyuGcVErYunRUsVrtcRRYYUWu1ZuQUXHXou9BH61uqMCGr1nKefRWAWinnndhyLGVy3xCMdoULXe",
  "key17": "2mkCdDotVFx3GQ4fnvF2gNGBKJEe2PTYwKSQzWZ8GA55wpz4e5Y3A9Q2rqQUubhnumJKfYmptrtNSe2vRd5mNJ8F",
  "key18": "wmBE8QreZ1GMXbXVq8nSMC2RtR9NF6TWXUnNYYz79qvyvtV6TgLZKmnkruLGUDFQbnLujGrbKX32aA3cSSRKRCS",
  "key19": "527szv2yaq9dgo2YUaudMUvsEwob2Ae1Y8q3eW1dvJxUECMVm9TNKpyuym7a7HwXTHrgyX9X3SpMjhaYPDp75UH7",
  "key20": "46waZXtM4tyzJQYi7E3GWPBEWsLAqfHzuJ1sKuFam2cdmfGPRg6tYbeCjizbEpyx7nEMxjfJ3LRzJS2MgskCRcjc",
  "key21": "4wn7Cp3BJsSEhmiQa1S8L2B6qEQyDVUxCCH3xhV3U3YGDUfNFCcuDc8S3u9SzbpB3Y3dikzkSNrmMUzZdXqD6Y4v",
  "key22": "2MGxAnMZT4mbLjoc7FY2HozJJwEA3HRihRiXA2Ux1J2RhDNiHUhsUWo2DYVTGyccdG1iaV1BssXrjgikvbZtC4nD",
  "key23": "3xDsJbXXBsjqbAk1V36f8ujRvkMZxNghKv4Ubw9DZfWg75Ym3AE8RLk3eX4MsAQacPDto3kmghJwig6qH5nZPihJ",
  "key24": "67jDtCBdzBppNZGqAZcW4zu95znPBEfMvubWrrctB2fweJidhfiUGzWQbrcWBUz14eF4xThkngbd5fJwBqvedFu4",
  "key25": "3QxpJRtXANaEjChmYGwpo9z7HV4y3Gbxowf5ML5U8c7An4tA2cYxi3BVPN6djrjXEpZPEvAJuzhUD86C8orTtjxK",
  "key26": "3fHZEiwsREjjvPK6tPXjS4dJssigongNE7v37N6XnHWSkgyuXriqFNYxpQtdqQLts6VWbWz3nbvdchGruEn8r2V5",
  "key27": "5RVLfaMjzj4b3VoyVNEst5M7J9KngdRskJa6YgNmB3C3HFoDgKZXALYLrxwvuXF6puzhcrGyEK8VrftBtGvZ1HDt",
  "key28": "5vx8kR3y6yet7xzG1Q2xLoz9yMNnWXsF6oN3WZsQEfMaEA9CirDhA93BDq8j8f7BFSsiFifgvLUTRGbKZKWMNjHd",
  "key29": "5E7LatpgEZg7Rw2HJrcuisC3ePKtZG6TpW7fQtnhaJ8RpqUqabDQsciqGRDSyzJ8f2kwWMXnqM3Xng11HNyHKDMr",
  "key30": "DuXY3zZwpkMXrGhWVBt8mxoZ2sAN61EFURN2gFuTYuz863hYML1mE1QzhW4z4A6fXVYtYejFLQHG6SfuZLT4ew9",
  "key31": "3LYrcaJqydZjoMjroygVNrcFNt19Gnr3DmMLUDE5aGf3Q566q9EkTbVAPtt9QWNVWkvqXLewJdgPUYFg9LizF4Nt",
  "key32": "2Wn43CczTaEKg5GAUxqQmZRbCGm5Xu1RbkAv8CcWuhtAiJnuZ7N3bRjDVSrvyyeusmBTdk2jBjWV8J7s7nXiuJ5q",
  "key33": "4JLgmuMmm7jLxWidur9okWgMVCCDWiRporDJpSxxNTf2rftdycrkvZesS12FCvYzwaAc6YpzEu1pTu63oNbLFbJT",
  "key34": "TGYjQHzygVkwTf4uTmKxWzysTXqnRu6tDWDRZztirsCVy86ALq8PNRTFUCWwZJranqYq9S7jDgre5cqZhZPTphG",
  "key35": "26SksCcdcM9M49jHZTSJErznwShKHuXPidukRTDjX6TB1MqPjPgg5ygiKrqcEcuYeWgrciueYg2zHvZZe3YHcF5G",
  "key36": "2D27CeHCkiF6wDWGUqkiQnuaeu7iLc9rEJJuEAS5gLDb7rB8GZ3Y7uDTqV3pxABSCY912Lun2LB5KwSdBVdBp7i1",
  "key37": "377QawEejeQGM6bzuDpnT5SPj3xktu7JSyA3w3H4RVHkapgNv5Th25Uyuph4JHSk9isdWb1ubXpKnFCocvXtNovK",
  "key38": "c575Hf2FmTY8azxUUazjx8jdESbbwR1C1wQS6XghrZteB6F5sFR7J7UQCemzyE75rqu2zPAQPodX8qtyarqzRFW",
  "key39": "3sjibFuFga6Lfbkhw6K7yDV8SzivQKd94LZTJErrvjeTotvrcXJ6GpiNLuKyVKEUzhpiDEm8N8Av4mLstKV2z8aY",
  "key40": "c8P3h3UzTKGxp6NQtG357fwEYqAsiXdJR2v7zFMbtB6Ndat7vabzVwH5DphiYnYGRMLMP1oNeiZ6Ye8Q6YjiFQp",
  "key41": "2tQBJeVnwhykLeCjZW9p9VKtx8eJJJBHm1rGUGszpBfSWn3SmBzN9XGe9oBhKahfAYcbhzQxEyL9RGMkEPAZzx4Y",
  "key42": "58nuinqwhAdGNWSiweoVDJDU23VQNSwTn732MatuCT6oq9spcxM3DKrXHH5u5yF8mL7k9HF2N3qB2KR2PLQpJuPB",
  "key43": "t9qrjiPiy8fNm9R2kHJsqBa1UkwMuwugr5QtJsztuEQBcLqg6oirvNaZatw2iWAMG3kykdsoT8JwSdqhpXdd6N3",
  "key44": "4JmCcUe3c2c7LBkg7UWHBAA5Ke7yqWWbSpcrUH6Sip2gk7v4Y6zaVXoW6rbqar3E7u1NoEirRc3WNbYf2PK2f5xk",
  "key45": "cDAEXAV8CjHz5BhdcSUw64PAFKPJsQ4tq8X2WjtBRSosJ9ajPXZnhP3SCoriAmKYeFkx33KDaqcUVEqtZKc2HLB",
  "key46": "3hDbrVScnpaguiuGLx7TUSeWz8gUe7WYp8pdthbEpKz5zuwF9rzLuonagLB9fq7K4m8VbYba9uExc5mMZZoxSfgn"
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
