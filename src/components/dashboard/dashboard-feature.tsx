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
    "762GmPBnT9xyG1pF72ujh4G8CuhRKVJfwrFbZfCrbEP8VJ56ruLR2Mg6WCtrh8itKRZLhaYgZjwmMBdJncBNiJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uh6pyBHmbPKSHmAPyuoSCkNL9vzRokW86m4tjj75oSNLWLx5ZD6Ea1nTRH9QuqQ255X4jXkrANiyV3eUex8aqjG",
  "key1": "2BpDeqmTuXwpbaRJrDqTHeYVafKkWowUg3AdFPNjwC81uise1VviLaijDv3qP3TNqETAYbxuTqcwA5eEkiZtXzh4",
  "key2": "VjrR8Z1Y6Uy7TrK11zs6BbpW93jZMc7inpdKmCrueZCCbARgiAUmawSQx3hbUVPyqGozEELZUo98LJgArEecUiG",
  "key3": "pc5XZxozJQtXYM6A2Wjec8mVsJJQuidjtKocgEBQibsJRMq4XSVwaZpTjRVDikPxDVWfdDBN6YyHC63U5SUjLNQ",
  "key4": "3B9F3x7iksSVVmzjgJmvMcnxqm9brgnVTsfJaVXrqQKmNnnn4P5D4NGXMcVWX2zCJxkS4rWqCVWevpkp8S4pP1by",
  "key5": "4nbj987gpmvzkKECc2RG8EZXdtKu8FARmWnDCcvG5oi2wefRpAHz1SWo4P8YSCfHKTPW8XFaZ83mYQGrUh8dbcz3",
  "key6": "3z6kkeuYUPxanbGF4Y5eKrU4mFSZ64WWFEp6CxrHPDvSGjz7rrM6tdi1m9PcN22iCzyBM88FQzPrhHkmcMcCnhn4",
  "key7": "3nJvSnoyDn5Gv1UXQfS2iMjuBUXkXDU4qN3wiy8WuRXouFnqBue1pTsNKwq6kaUvMMmtxgqRwKGsVAC1C1xqcD1c",
  "key8": "3uCVepqy7P1zmWMmAiDNigMAsd7Boc3puA39Qn5FoNGySpYnihLfe5hB2uCHqeSo3gk2Twts6h9H6fdAAC4UcQf7",
  "key9": "nMCHeZM3Toeabaqh7UudHB8SJfKDogyLSakApYqzfYpitVRN8ojm7K6fqDdnfdF5GgCxTX2ivDr7FB4QH8cBcAj",
  "key10": "5SamWfdC2D7zMHiShbajzL5P9rsqCDdWmnmUzTP46iK1WSQ7D8N8JLBj1A1AGNdVwhayhpPyngmHbB2hPdVHbTjx",
  "key11": "FifxoyXkdp9QQERPtGoWdiCuKKLTRPfdRBZoTov6nHTLdCNmcmxw84YENmMqqLuM5UWGHXZSSBWSrf32V73UtFx",
  "key12": "JQzQguz6YqaVxhUpJWNDArv9LGYzZ2dMLgoXkJYoM4kiYho32Uqspo4JHVJwUUu5f74H7DYkvwaupH2sJBrbuA4",
  "key13": "64xANskuZoAVJVvGNcx1EfQQr1iY5N3EBHC2zj7DBQ7z29usVnqAAoCsd85UHojvbVA74YZCiwF5cR38pt8gbX3Q",
  "key14": "5LRTyrC7hHu19suVUyLuY6dxtvqDPSUw93XFaWGgXQQvhnBAgc96BuNaTzULTkbndU3aMP7WHe42ZZxGsrj3h29B",
  "key15": "YUE7E1dnJY6BbGZ3jmSAWtK1m4oemoewfwP1d39mUumZxDhFtF9h7C2DsSugh8Ho9X4f1LEUF5ytLi82HLouF86",
  "key16": "aLbyTG1wZiNFPFC2thWmeL5SuW4r9mtih8tAbf1tM1yXYobzDngFu93nEFrsbx7K6uZwRu2P7Xd5BsEyJboVg79",
  "key17": "p7YF6q66vNb6hUnkKFM1fTFxCaLEYwWmPZY151dnfrZgdifv5b1Fc1ic3vutXxZ29J9Bzk7kKFtNBfgYsk9jVRw",
  "key18": "6138N8p26DjVZ2cHWD67ZWj4LpSo6pcSCoMp8n4mG3DyuYoDqasPwJYggNbePgQ4Ybus56FXB6zdHThcgDhburvs",
  "key19": "2mN5WeUzYJHVjFDEEUsUGPya2NMzzJ88qKSncvdwJn1SXELSY2TsocWnMNvzq7QfHtgjHDvT735EqiDy7mCLN7wp",
  "key20": "5T3kzfQnzvbQhtjAnSBBE3447sY5KMQKnoRhbsmJUGzumvxHL4GbNSZnjSHHbeVNDc7QY43FKgBk5njFuTSdPwHy",
  "key21": "4ydKARFnGZDV33LJGJPWFPtZ6yekwQBFaomXCZeG3RTH2UiKxFwci4Ab4jpxVJnK3RjXMXkqBZAcu4hZGdPUcEjo",
  "key22": "4J8yTJY59VNGWhn1pRFEDFAjSCwomqkG8VvFfje2mcXz7ovbTf5qYgLvkGvcETo2KYJxyt1LGNAnogLyMAs7U6fX",
  "key23": "3WbD6vnXZnRXA5h32hyrm2wWAAAtR6mVSeXgVbvstue13KQnAhizhQxyK7wHTNu5azjb3Ukq7BLrKZuVfkNiCQ54",
  "key24": "34UR6RVYSSHM8NTJSL3YXSZiGmqwF59ZujN2VVAH6GpS2F6mdtHEvHF1s7K1N2NshPuAns4rbP9Nskdt5jDFVWZB",
  "key25": "rwbuaUcpaHXXmVYZ7WyMZp9mpEw3hqHgNbwsVcrqXTizoxQKF58kSq162nqoCe981WJ2YvViDjky2bwEtcoBnXj",
  "key26": "4N6ws1axBYBD4qme56e6hWXjy4CQKbw9YeckkmR4ARpc5ZUiq87e6jsHh3zBzvg1Sti1WRFqWnMwiMdXRR9qipc9",
  "key27": "2WVdNMiKwUmaMk7WTWAKZAEVcNLtRzQ4EgV1Fg8DnkUbwoNWXSmbw51CVxq7qvxh3D7UQQRT4rq8qYkJvALdcJwd",
  "key28": "2AgJW37h8NofFgBKm8KD8RRtjPemUU2oznkeSQhkC1bSaEzwMH9ZrTSMeaKGGMf2hkat5QSnxyKUCbWb4UwB3hj8",
  "key29": "42JPkDmw4Dcr61evDELjyr8aspWtquL2M8GuJt4TpMBk5ypSUbizewyPUWYAjKzHN7rDzCyTbziCTcJhr68wEUWU",
  "key30": "3TkA9WbAJ5HqSWd7SbaZUppGrrXUKnsKcxWTmjhsQpLqucY1z918Qk5zFJrdKiGuGgvaBEAnRpYUHxrZS83qpEZH",
  "key31": "3ENfdbgSnMct4NvEmko5yfq8Q5pz26trXMCBGSi5dyqT9HWGTDaS1Qr3WKyf6rtkdammDGn4dEp7DThExNRjTJDC",
  "key32": "5FS7KbD1Fo5kTgHtqMVTtp1en1gwVkSxCiZrpgDhgtyFxHHZsPmqQBE8AsvjBeAWKb4R2rJNKLPS61zoD5hDeDNX",
  "key33": "5z64aAC7kDvwpN7mS1HMQSkwAyp8Rc433i1u7zQU4vZdKyVfcpY7ayxV49SSWSr7xrGB3Hm11HmXy7Qf93jHjrU",
  "key34": "49hC9YFYayko6Q384GGLnFFNTGag86nXY4TZQigKo4eHtjuP7C3oq683qXrSVqTnXzhkvHQH1BMqbypSibKvyc1k",
  "key35": "3Zrn2341fa8EPhoc76NPqKUY1j4KMqWbRYKjpe6t9ZGvZbKKKa9PZdX264KojGauVhLN1yfVjeaZk9sRwHo7rxtw",
  "key36": "4PCsN1MmdZuBrFExhwqLDBfgF8E2wmWqb2E3v7LKeBPcjJVqc8H9SLCMPKUmNpVY59ssY3wBAJDWiqLbbF7C6VrR",
  "key37": "3s6p8As7exAesc1VieR9BequPtZgDe9w7nhiZtG1ZFYXxLxPRXitHEzC2nps5vmKLgKBjaZwy3Vw3q7BXK54TnF9",
  "key38": "DGEgV2ici4C8hkpSRr3JSfUTtoss2MXQXdeadnQmzz4bDvMrMMmeDkdkXDVF2xWfLWp14H1piV1mqqojrFCPi3Y",
  "key39": "3a6MCjJw9vjYjKoP6ZARDxXLoJ9LRPtpcfN1zkP59YPUsCXt1DNnveBUyoHgTbWgt5R7mBDjeeWwYP594jqxBJgk",
  "key40": "5vfZNc4NaHJa1nXmasGKgErgPeJSPpqaZC9VvEvMpAihQjk5mLmoiKyZsRvSY7tyAM9EBua8uMuP9GMLK5qCd2bS",
  "key41": "5ZZNLwbpBEro4SMwGbxnXcu7pKywU2BJKAz9aKWViiqYHEvvrVCMNjLYHvwb1MCkHw6opyDPmV6gjnBtWTmc1dUb",
  "key42": "5o7Yc5KZu2JUz4rkWjs9ehSj7tYWxyh775dExTDypigUwFhnQrzLxUggnvtd4s4X4k4ipnGCJqiKRvTdvFztB7Tc",
  "key43": "27NWNhXcXVegadBWszbAj2JtaDW5AVfHh9k5Pxcc9Je8rejHzDoYEmZJRcKZiAXWEi81CzFCn5meVQvJqohVGBvX",
  "key44": "4zgzvaX5xaHN8L5iP3hyhN4WRqDMA9u5XwJEKrL1gUxmoBj1Zw6BFTBouS3yWgAUB6ymDVSE5D7qzySVEKxQyooo",
  "key45": "3DvJ8U8ioBnp7nBYsk6wUeUSFyvf6YPgRHvLe4TJq3MfPXmroa2FpBDcJZ5V31zhcQSg9gphKBASvsfGbTGcb1mC",
  "key46": "2ZcbLBa3epDPEiVsxAqJEKJz8XTXhnoxrxwCDvXBLthKhGKxZZjrZ3FewdrGWSeY1BWVkrf5iBJsftjWenFfGkzi",
  "key47": "4gF9RpjrPy4VkXGNZU98qF9LDUefmx56QspW33b8nmrD6WXtNsUJzpJkJRnioXnfz8g2ngNz5RRRRArWeEUwZQoj",
  "key48": "2DssqbcPzoYwZNjzWjGohjndt1hXxWEyLLWgKVNmisa9ZhMcAy9omD3Qz6msVdUAw1agZMVHczZdKZU7n5A15k21"
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
