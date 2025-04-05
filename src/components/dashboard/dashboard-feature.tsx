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
    "TU8mxveLABYMetLMEVvXnMNKrQjg5uWmmazLv6xowxjyZiz57NHvioCP3QLPkrmyrmD47V2XcvzUyHHQmpJf8ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkrbLxbcKLC5N2qG16VebHkyJqsXTPg5YvYfApGtw2Y4BcEynoAQEgaX878f9k47TPiqUDPpPheno35qtqdC8jL",
  "key1": "4w9wuve16QAZXtqrnSSGgtaQrVjNP1eVek3KBxCVJfMRTA3EMDZquKCNMohwunN275vQxU5TqGakDtDznMwQGnjX",
  "key2": "36qVL9RvYLGvBLfBUmPSejxUp9weEZQL8TTKE6UTDvX7vmGYksbGXqzoFWsC8nsXx67W97NKFcbPXzpkAy9tJEnu",
  "key3": "3BzAQ8JFwqpmnjbSumR5jpWa6vRxPRkUsBu5jR9Hzn1pfNuCm6LDGpCXRS6cDdXVyDoxabegCjLtxRtHGf1UALLZ",
  "key4": "2UH8hG3n4L2ovkkUNDDxHJWhM7FrDyJbXP2CvwdYavznwBdakoGsc9N4CERD6yUkokW5y2FEnTptzpGcUy4JdpwS",
  "key5": "5zQcFShokoAP8AWbjzf1Ai5ssFSoZvQNQbVBZmarfhv2vLhYpthFQLRR7v55xHNpjafNzHSNRxfVniGrm2TWtxNb",
  "key6": "4YJWtDMhpptH5NdjGoE2pzXG4bdwLCt1JtDtbgMdJZX1UJnBWLDTzk9PtzPU7PnLVWT6CzBKHjBLdjoG5xMyYo6a",
  "key7": "2GiqLz2aSxnQstKMyWTcQU2Ep47C2aMnVEeg68YvNYpfLHGDr5xPFBCrSNsU6CddKPreEzzSW1eXdT6qiyGWTENT",
  "key8": "4JyDLRfUh8ZobTyVKXze8v1ZT7meRoNYPvUTQyDu5sUow5o2qpGLmRtKLWaQi8jaXboRXzTq9Kv6Xhidgdn47ie9",
  "key9": "56DHAfPEJgjtuadScix5hsAKVsqnzzP8pV8arhqwB3y3MX4geAzVFcJqxKg8rpNbcsh8DiQsgWQNR6CvT5HXPn7",
  "key10": "5wu3zVsYvDhJYDiHG86XwYVJYrLSHhTo6KvxLtSykPAqcwU5jDcWf3dFtcocd2s5CayTrJ8fqEbSNoyFbrMP8dPs",
  "key11": "3GQNzYehQZLfEPq76Nut5r3tGYejyZJBQy4aSmHdhdY55aCPHs9KvYg3tkGrQUMd1DitEM63HMMNe2PzpYNYRabq",
  "key12": "2p8MmNnwTuq6DXJc3AM8K6BMYgfo9ioKnvxSb9L8kcicq4FQYcWLgtAY9TTEcNwd26ZHUR2WBc2h38JDXVnf5TDS",
  "key13": "5UrbWEtM2zZQ5aT5thyixMi8Pm5CKXHdfWWyNuo6vzxtBJfpKE5kG7z2hQEuAUELETqX7C97YTo6x8EUE9nSJ7Kx",
  "key14": "34QETi3q2KRLrQ7m5WeQa7xjCyXfhWQ71SyTS6ke5tAqnVXavuuCAZAhk7fiWPsj9jHyc6xCwuzTbDTEbWuyiSry",
  "key15": "3Wu63E1iVzCm2RRkBSK95NTqs3pCMkCQjdLJ4UDge4mq5zZ7xxXJdNqXssMUwbb3mwi1eu1ntgjeDTAQyiCU7Nd5",
  "key16": "5vhT6cxRHcVB3nW6fardt43YJ5zmZg3ZLpvBoupNLAoRTuoiuhzMe2VZG4nGPQ2QonQdE3iEXjzpVjuYuvhWdKLm",
  "key17": "2vnLqYMEfBn4ggs3m6Zq9D324q5zxLohpV2m1VqhTCH8RdQ9CmFh2xMgPV77NvBwj3VrHEDYukfXY4rkMxmhSHmb",
  "key18": "2WC19dfrkSg78Du9NTVtknWo4qpXVPDrTiayrsMXJg2r4xuzCcWS1U9KKX3Vmj1Sy26zh7HbLtADXZGyZF8eVfjq",
  "key19": "TxpVLCey9qSjWWmThjiCNMYGFHoGGEvNmxjHvB3aftreL38XTmSq4S9x4ydz5DSRqXfXYmsTH5UvsFssLqZcqyy",
  "key20": "4hTZVG1DYpHa71pmdSoBLfoPforBPgsEzp4mPaWprsUZ1VftNJvBes6GhSuURhFELP4JtVYdvKDWDj61L554VTmE",
  "key21": "3PKNGjdtEswFZJGbczB1iXnUNZaeuUcWLvUY4mmitsUkRboxZxwKkLt2QXqNdeRaEadeRFz6hfknqZBWPUnCp87M",
  "key22": "2srtTwhxe5Wx32Jz3vHi9RhqiHnFUUhfB9JL2h4NaspHtTgtrRPHWSbtqT9fLycf55HXsCwrzVhxoU8UCziDRRmc",
  "key23": "3f3UrH4GrK8wRcgevPfwuDGw6rKsdFmJvr1hRD6HNKuMYZSXp5MQcftT8AvEZdcqc4axbAmPbDK6gAF5RLf5Wv49",
  "key24": "kngyC4JbQhoGscEMuCCKzB4KCWoxBDJSyPqn667pWFHMBuaztHF4ezetBc2iK8hxsGJMnBFoXkvuA59LeGswJhy",
  "key25": "567pdF8cRHGYSmq82eofKLSvd3o2xVZMsHjJuCG4XXbS5fQ8D56TonrT9mXjjVWBfwGsnhSSEhxHmGgQxbr5gXd3",
  "key26": "4h4P6kzL4C7AmFufi2iwGgh2bpQfzQCmU4Mq9rs82q1BtdHPjVFp9u1EzYUPDdvT9kHf5eiVRfWstYhZWVgXMrsW",
  "key27": "5DdeGKpEitrA1YRtpXDMRdTAHa17QXjFYA7ZEUPdcdKxdoboWjMkbGirAUwPgqpvi8XRrufnCyVUfaxLjLWUSWv8",
  "key28": "5seoh4vxecc2vuJsd7FWJfUQn2Vv392d8pyQF1cXsjmgoogiWGYzVFLAskLxeG2Yggy4rrUKzKD2J5dUbKsFpN4e",
  "key29": "3wqHGPWHeQngst9Ba7GFcQMKSmZDZBTYWb5rcG4YyLvJc6KdbsGUm7M9HX3gjZMWiZSFr1BDZkVUrU2ptnLTE773",
  "key30": "3kY4FaaQ9rxyjbhZBxTtpft5qXotdRbdpcj9HrcQEEK6bL4XbDi7ooWFpPSuYBwq6YSCvVjEdYTNCyWeEP2KZSwR",
  "key31": "kABcTwgUTLgaNrZKKBgBGcauECCnzhCyYGn9sCJiqAcwVXrcHBDNVVpWkAHSvhSgYBzxcyPc5wWkoaMiEiUyAnS",
  "key32": "4Wt4bEoNSsVG6MPEQh4uYCFdbUR9NjZed3D4LxtejeqbKdPCrM7UywYfiu8gxE8sfQHjt5q2D23NCdcbzNssHpJV",
  "key33": "3ijDmuS1jjgtebXE65q3KNfhPf7Tyj1yakygJ1pVt77odk7be6fASLsRUDN4tfT3vv969Vh2PG7Q16AXvuqrGXmJ",
  "key34": "2msW9GL3ExWNF9R6RMrhPzXsB3M6NPG3wZsbgPDTSZQWf5GgiW25sZKAF2AyRsY5rd3v3KGzk84iDk711EH4ydxK",
  "key35": "4mEYcRXrUFrZf78gvrMmvoM1G58MDgkKF7pNBxMyomftMN7SiTGEEvRYJURSaYnZ4SLYnVFNPVAWkumq5bzhY8kk",
  "key36": "23CP3nMuQ6jJWDsZN3U9RaNGunM9TQv7VYp2yCn5vkpX4QrCS47KxM3NQEdXBFGtnVesQXyaSsQUQjCcAgfGGnZH",
  "key37": "RwUb7Z2jVzcxajBGaxEeetgYUQPgd6gvDWEEeJyhDpSi1PmkJeQ9tnaCfgFXLDRrGJupZ6cS2G8GY4x82RCq6fQ",
  "key38": "3Qvwe86ymGiGUx3zkx9FyHn3ZdRbEHeJoZVdMDagSgLviq6rW4pQqh7fY5ZXgmRteDL23rqBrwT8hevM6Aym3AJS",
  "key39": "4mvWwmTXBxwfvwTrCwjqELdxGEi3S3E2yVSZBnp8xJWJQ2j5WwtfanoAxDGfDfoGQzdjoDxWLSPZnj77xXWbuLUt",
  "key40": "475Yn3NaNmZGxx9s4d71jv8F4NKZj2naHG59NKNcaeFBnR29X9LeJwz7ux8mHaQUt3ysPtTg6ivFMFbGCrPQCDWZ",
  "key41": "3bQUVbBxyHLSxJDM87SzeahaQqurge5Dj9dtnqzLYd2capZALFZPNnPWdvNhPiV8fMC648VghpU4iMdtQt9Y9QGH",
  "key42": "3hwRivgcXUDJrk7XbUE4GXVMu1Gkdzv5Wko8jmbrZZjPnV9F5VnyETtWTB4wabp6nBcpBSWM2eHidqhRoSFoeLBf",
  "key43": "3wTmNzvtEptoKTVeRLBeeBdUMv8ixsttii4dEcE3mei5nkMogtfe7bdMEgt6WuqM9PnK7CzkpKnRgkMTRvf4KdPb",
  "key44": "5y2H4X33gwJbadc9CNBSsjGduT3Yb5iCc1Spha3LVibBe6H1WazUoRtgW5asntkXiN23THGVzW7gnKcHzcf7Ejf4",
  "key45": "5gb6862SpVYrwyAmwZiVTynapyBN9Z6ifJbAksxt2Xz5pEbMe3kNE4rxaBoGyypYrCqA1VKoAkEs97TUBUkhvthW"
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
