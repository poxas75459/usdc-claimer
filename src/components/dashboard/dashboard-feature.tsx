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
    "3SP9ZEAwKn9cv3NM2b7yamh2vQYzJUHTEm2pFiBeGFngiECfHsYZfiKnBCZr8j58BQHprQ5trLdzKcHpwXuR1mxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1AiukTzxfagxEm7HwmDD3LHt2ChHGFQhW4bUyJcVDxX1Yps1tSDrtwtEmfPr1oL722SbfBsUFaejASqUVnMvZa",
  "key1": "2ssqHfidJXmpAwe2AbBYsWR5bUbRjEd5GiBTvbNtckoukFsTsS3gC8hhmgKeQjEGitcWgrSYvoAFJnveuJbDHfJB",
  "key2": "2Hwar8Ka7xuzH8iB7U5koUdWWgqPqMsQvd3h12BCT73e8zjHB8hqTABnsjtY9M1ZxkQXedce7NdR8W5fXGGbtt4E",
  "key3": "5UaALnuFvjSG6tgwh5g125Kdc5XYe7uxTtbwbVAHMmR1vgsNZ12LVJ9mqq23FbXpfsLYCU8Ze43ypMjN1oRNrWQ4",
  "key4": "gTPYjJ1e7C9jpYiLPAoSSjnAhkSBRUe466wTaENy12Y5bLCaQJ1fAQ2AmSCxgeRv3T68YfX2RFWNTZ6Enrxnu7C",
  "key5": "5rBufkcBYmHD9mUJCZa9NZihfDmuVoAFW712HP7heYV5XsiEAZ6zsigW7HR8NrDFjcgwT9msJ6u4uxEwxYafAsKf",
  "key6": "3BFWHTjjepuW6MUXnKynTqVuQzuD9fCgk9TUAeo47XjTgRJ5gyAT6Ltv2zsuRgmtmBtygcxuX5FKti5pQdEgPpcr",
  "key7": "53DhpmhYDJ85sE1sX56i3eUym26k4851N8fnmP1rkyRMcT1gpRPETPJHCzdoDdxZ8JmRWDFyCE96cs7LLbiAjetd",
  "key8": "3DS4MCqaYYHtiHS3UVFnuEPtykYimqDK3eAYYGy2JyFEJGWgZMkbgXvRyJrVeAeWaEiMe6fmnDyCB7wUqd16LDi3",
  "key9": "WE9uR8fUE7xn8TxVreNt2TuGsBjeD2czt3EUwsXMAnmfJDMrGFig5Bjop1qvCFbat94NM2aMdG7v2gdQHsqQ4fu",
  "key10": "Rb4bS9613Jbg9wa33ctmPkSrxjYBwfXV9cC582osvqZap381SzZ1xM6bcaD8x9hsLirbbYGNiJmfNwdsUTCRx9E",
  "key11": "2U6WURmscAd6PzgGzdJK9koYQ1qnB7VbTrbqZvBqhb8YiJbtCHDjgpP3i8Rm7RWHGhsBdcrmB68TRTVmZSJjeHM5",
  "key12": "26bLN6XNsHGKtUuhcTr9XuCARxuHfK6862gCkarwrpQWbU4kYS3XMPPSMSJTQF4SJuKHLK7y25n5TD7MCq6pTyjX",
  "key13": "3tQrBcinvpek2nKpNwhXJ94Sjbypj4a1PCUnLqW9nWD7HrWpXwvLNkNeBKqr9wGu6fkqqJBX1ihSkmHbtPM3j3uh",
  "key14": "4JcFTQWnZbAFTmuy4Q6X8r5XWg6YAzNysEp1mW57E4dFZTu2HwjMFfNbZ1rnapjMHZTMPpYKGRL9DJU8dcZv1q6C",
  "key15": "65dfUN8r777ZvHUu7edFt8bTXdv3jhKstavNhtmLZFNfXoSceNhX6XUneJ53UprYqzECFhsZKC5gCHQW5QcXM195",
  "key16": "2N1ngSEQb4um6oVFz6cf9QAD7bQUj3YB4bVKTVAnMVLyE8YHDzQgu7FEP6AX12c8oNBiwLLnBnEiztNDutLYsc2D",
  "key17": "3Vwwj6dxZmpRwNpPSuBi1J5ZkciCFXVodLEJ6FKW7wTxfpSFHoa7Cb6DZob4RpEfuXB36nAb8ghHn6b7U7twpGAB",
  "key18": "3dfUrHSDmoGKVt5eHbVnaxyLEjNhSWg6wjVFT4CSYgMoFd1xYFUNX6ZiSsooNzqwjAZy1pgZNM2kytG57nsJ6Pzs",
  "key19": "f6QJvFzzF4aEnXBWx7KNwju4BYCaJ9WEzYRFxpYe3UjW9K9xLzLU6C6QvavdMemw3PtHZJuPv4y95X9baRhwX2F",
  "key20": "SnbNaC21FR1xeYbH3aRBo9xKzi4UJ8XckAULRESARumAqrSkARnK7qdLD9NAW1ryK2DkU6ZnQf9g7dLTXQEVdNk",
  "key21": "3MqgZVrJS59nCetys84bcKzL5ZJ3PLJYPydeLnissskVEkDfbdRdk9PVrjxwcS3v9cDcv8H1GU71PFTEGSLG5ofK",
  "key22": "4kU6fAtrxfs5oPvGA4XN5uDvypJUnq7TNZUgePkgAwSpjWEkTZTPGGQYXbp6bB5beN7aMSXHesLsmv247S9bwfHy",
  "key23": "2NTaybr887Hhw8Qjwr4JVTCMcsktmbTps7pwRWUGPCLmJALU6XH6iQnzTMPPGFqXtRsHptt5Dh3y1PhsvBKyr5LA",
  "key24": "3z5BoGQKb9vMzPM5Y5RyVt8kiEvWXkTFGT37zvFpLP4S93S2fBmMmbVtx2zEuFNyWRUnpaot6Xiacsf12gwYjVpo",
  "key25": "2N75oGvf8khMovWen84w4QMiUszKcB8XRPFAqJA7SAgAjvAMZvWF2ZNf4TEWM4UJ2uySTcbSSEkJq6uw9ST4k21z",
  "key26": "jvCofHMAiNqKeawyw9CZXcYTASZaACdCzRJmyFZyUjmZ1NwYEwc3TRzrnxXke6AoYPjwg95cnq89YiESx5CmG2F",
  "key27": "4smDkBuB6jmCu9SWriTkiRVN3HQhMcKAtNU1TWiqZuovqK952jCYHsTLevhcE1fmHeyn35joxNmgqYKPaz6HAZYD",
  "key28": "3seicTANgyByyNyiihmwmdgxej8pyrb8JRERuJnw7fPexzdX3rSBe1eRYqLbWDvLhEJBrxEwP3zTKDQCRbkZpAwB",
  "key29": "RMbVi1isYYdFYd73LuyhVmwbjXJWMy7NSRdbdt9d8nMzqAzbF7mNes7ctgj5ZR8souvVT1BLVW3SknhAVJKBEEd",
  "key30": "3af9eKEYs54a2F7oxeHnHLGJC2UsFLHZhcq43LWenyDngUCmt9gPu4rBzf6293KRwY7RJc9tQQQTAw4qUQiX4aZQ",
  "key31": "3j6Tv5h4YS34hDW52dGgciQ6kTt7jZbo4Zj6ffEx9nxBMvEK9Z4BqbKSrPqDRqFspJxAgtj9Vuc5dhF2ZoJND7bF",
  "key32": "4Wrw1eBzXrfPoWLigaEaBfxtLhxkybFNch9nngCV79EeYjNU1tTv1WS3Zu6sPfdzKSgtJyDD9JQzKhSWE7bTsFVM",
  "key33": "48Bi94FAFfU1EkBBBj8RvLNph1Bgt4Wpq2Yd3AJLiVHFVT1SS8JaHtbF1q4dwJ1zsaMUuRYSS5fg6poLLG4HmcPD",
  "key34": "xizDkoejRFpRLasySfK36wEB4Xwv2W9KkP5pEq9V5gbeTLh5mxDBecVH58gmsy5Rbp8QnESjTxixuAH1ygdJh3h",
  "key35": "5HTz4HQvj4cGKUBqLUtywCfJAL9nP9mZ9EsUqbSqFujwKJRtaPSiSBmMgyaDjkuYHnJSvh7SHPgcLWSUHGcdSzZe",
  "key36": "5TXwrJZnegge66SVMsychpHGdNxdJggoDTxgvqTsjFDqxefrqTWx5kDa1TGPYFVyFWBWuGfZ1CPUuYVbL9gHyCBd",
  "key37": "3UBZ9Qco3doRDngqTTewRNQWX7L2TNzmPK1TMd38FqKHGmUYKAzJGa5UR4i5VuEm8hhmJUS1dt5vSVCYumoSeYzg",
  "key38": "4bYhYqYYEUyxxVLxsnAYGLrEi7HGB5uqiZ9hWYiqChcb8RJazNM4R5pn32mLw96cBQZX2L8ZXCWtamvANqXeisV8",
  "key39": "3ESgnz3dVvmwC1dynvTvmqWmFpNCJarzc8ndRsNoC5MboWG2ApCEcS3U2KS84FwrJYYb2MsDo1NDAVkz7ve35XN2",
  "key40": "n1fRRDqzat58KmuqpUHV8MDv92vTpHgFpSPi4UFrQVxHmuj65ETjJwsVtMYg4s6Fw6n2LQhj8989JTiCWMSMaWx",
  "key41": "4aDdzRqamT7u2hkux49qexMB2PuUh7jxkUCjrtb4ToPenbQK8t18g9Gj8fhuYy11HvcJB4Pot9hWcL3Vct1gchoF",
  "key42": "3dSSkcCxdEj3e6BBNbUhhHKZ21jE93gjazCEBLYjFquHzZ4fEwBuwVg7GwrJ5x5ywUYnyn1ZgBjR24LmyehbZYHy",
  "key43": "3X8ymnLi3D1DJQWvfCAhspJsJo5JaiVCxwX3nnQXGw52kyXfnFfRunZv62wk97ywoToPsRLgUmmkgA6KaoEEGnjj",
  "key44": "5vwrEGHHGhGQhZeJCJWoUZMJ29RmPYKqveXNLrQrtDgKXbsoHmQfjwQvxcoEaJSczMyivcYs6cgYsvYpntAmvscY",
  "key45": "5nMDNWCmQ5AE9ycCACMx4BkCxvbhQhBKMUB2CePSGhMMYSPZ3pBe3bvEib9JfC2wY3uR8VNK91eywuZrxfWKMe4Y",
  "key46": "3yX9XauqdocCJBUF4LMQxUvamTLC21PKfGEqyLVEXFTx2Ym8VcND28DDtePe6wYAwbCX8EGqxTGLQ88cpx1AdZHQ",
  "key47": "2bqV6kpJQanmdeK88YPkrFX1Rf1YNv6vPtPiReNUReZoNbthkt4UsBNfaJtkhTMLjSUv7wZi73vjJJ3fmrnbZyUj"
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
