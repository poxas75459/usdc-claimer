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
    "3cr1QiKj2TZW9D6mMfLi9UjkGnEEJqfF6LQk3xxZwooDZb7DpS6eXNd37VM9CCEn1qRcRnQSKdnLQtyqVQFzJPqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLwEoVhBMJdsKGV6TbJqaTVvbzB4ALBc3iJt9mpF41wD7R5yCEcvUpJ7P8sjUe3dMueM1utXk2sRxEg1wyMV4bw",
  "key1": "XQ1UuvmpQzJti5j4iZzfJf9XhmFc9eCB2Lyx6SSBfdLjJBvwzd5rRoU4FEhxHBip3CUYnEFTkZgrS1FWncR2gu5",
  "key2": "5dXjD6Riwf21vAih7ZoaYZP3cGYVHdX4huoevQnSXWtiB4kMBQZEVTuJk8PNRzYf2jTnVYopokRzA3bVwQmwFE8Q",
  "key3": "4cSAJWxgLGptC8dEB9PNQCdBqbeZh2DQjQAyQqKxgFy5UKNJk7NpLZbFo3UmQQ6xCbrfiaaDo4PAgqQiRkPBhodA",
  "key4": "z5fZysTvCq63RTHxef5sszvZ5jhyJGWu3Y3wLJPEchCY6SUqs5kRGUJRMP8G9TpFMKmHRNfidoWiHAQBqUw94dV",
  "key5": "3Pg3tZ2rjvb5dAKJConrhPgni4TAwELdRnB8WXkYpHAG1Vd4Lk3wSee5N1uXnAgfSew8rbxaaZ4nbzq1Ap1cpLzY",
  "key6": "22TVV5BKVfXUhyg1sFvGP77RAAcT8551vDkK69ssxQVegP2m11PHHntaZU2zwR2qpnpLYj4s7keMG92ewMSMceKX",
  "key7": "3PThzHTKJCDmAeuqSyZTSQHA2ed6MTXBoUcYszzCRhcLgbiKDD2DYoVoCwqzrvezFTEhhvcHxWYuzCm8k384aE9q",
  "key8": "2yPE2GNkZnmSviEQYYyxp2nLfuzbsDoP9794xpZAiNuuhZjomcGBA9A16wz5wG3TAAT2ex6WW8ebUdULbVQrcFqA",
  "key9": "2HbsRLpEphAv1ruP2HQd6jVUBicGBeqXe4FaPEriUA7chUcizVQ2VQ2LKhbBmdTuA6V6SGtRTCk2DqWVNhKvpGzN",
  "key10": "5wrbZkVXdpwGHcTWMzW1TLiRyrV7Y9F1DHHzajtwkog7weEvVRtFjP1ohdhHtooyWyZZvHrbuZDHS1EK6sUjLBoc",
  "key11": "5N8VCyTZSfTaZA6yUQceQhDYz8rQHp4kr1nSDxznaFbkMUhvb1tMU5LvkcxvmM6R2yC3ETvKgerGSv8xgQNH95m7",
  "key12": "3coHxMHG8csvTqBA3UudoBgrbzWkauX4d9LRQB2JUq23QFb4Eyq55ZcEGAhN2TrXZF24mzvDxnrfNBfn9wBa7bfi",
  "key13": "444x8bBnyztZx5XtESE2CmfsJ5rXZr5X9VyNSLmcBumq5Pik8nyqxzAZWFm4d7friCaBHmqzgr5mtmiYUti77LLi",
  "key14": "5XVZYVwAxHDeRtwpG6BF8kTkhY3DoaZgCJ4tbGjCsojipBMFmQ3BKqBg1bxdPW2pEFFtrAJjEjazr3JakcurnDpD",
  "key15": "4uXeRFYsp1pCcDu2tU4bGMPNrmmuaAwJjEoyAuUxay1LRCjvWcDvg6H1DVFp1dZCNWi9EemZ6p4y4DDGDKEiwXki",
  "key16": "678zvDd3CEgYahNNtMR7vwiE9imKEBTTh24yiaQ92xcfUpdTayYhrFJt42NkVSLb7MoGPtzFdMaf1ZsAQqqDj5b3",
  "key17": "2oJnUYjN2GN1joQ52K2doBSw8TwTjaUiyFW7QBYLh9FsLhn9oXSZ582Rydai4oQ5YXYahUj9naay6VWtTUPvhTsj",
  "key18": "576PgNTe1SjjbJqi4GfsdhknXhmUJqZhWgZeHtc4AUgeHCZC4WHYMKCgzytrfgFBvuaeoHRnSwkqU1wNKbpkxXoa",
  "key19": "62jAHryu7JVDMmmKDAdv8CWDoJK1T1ZCasizgENuxWH1D6EhVaGoQWH9HGZMxaUSMHBRAoNkiSS9hZH2mwVxeow5",
  "key20": "vSHBeBSroHoMn7h5wJbd4nWHkRr6ub8ZyYALGNeKAudeVHywBfRMuhQPNpGiJqtSANtx88aP8JrpeWmXnCoMwxr",
  "key21": "ZnzdZo3C13gXmYmNsjUFkmupdCkFhTycuG8gAygvf2gaNogj4SdtRNy6Eqjt4WSxNYst41kMCtpevpcTJA4poAP",
  "key22": "SpqXFyZ1x8kMYV2PnpQ7hvxQDQ3UZEXJGNeFp4bKzvpQ6w779pk6z8Ub9jC8Knwtx4yAXpX8Lkw4G79XsjZJ8qm",
  "key23": "2aQj7JvoAbChShEUQY3Pj7LhyjJR5c4tqES3mHwyPMEi7p9aCwS4rvxxr1szDwr2Fy7Ef2AHTx6mwRHgJuUCtpdT",
  "key24": "1ksrYxzrUuGRSSDbMCnXfZ3JFyDkkRP6a6pQPodfeUMUfcbBQyYs43Zk5YZeHB6ta1YhUdBPfWShJc9pfweNvX6",
  "key25": "2PX9orc888QbmmQbkrU4kBPXnrr5jNtwXpT5wpua3msYXteYXR6wbnGTHWMCjxy2SSDq4QpN63dz4hjaEjMim2y9",
  "key26": "2dfUHt3WZJ5gfmGMykXYeB3cvNn8jKXFNEQ5ZhgMXshDqFQUbnERd5wakYNZbB8jcD8W9L2UY5nFS9roMjf2rfCE",
  "key27": "M4bVed3qR1H7DATVwwBtkim6H44bR2qQno6ZRqZxsDtTzZDhJaXv6a3jmFX7r6PFoWWJcGcfw5MNP7hvssH7DRE",
  "key28": "2kSsvVpXVRUXBrZBXwEjRrXc12gDvuGUH8PpW2Cc27aYLoKKuGzrUMSRoFajUZzqgohSkZEarYJ7ZoAbuj81serg",
  "key29": "4znvGfWfsehfdYLUgtyPRP6aXzDyeh1PDhTDYGpueG5doe2cEq2cJD64jQioQMTzF5joFeK6PD8Q2XmNQCQugHTJ",
  "key30": "2eZkyygs4ec1UekfSwvCWzuF6SLj7yia3sHh2KWjAD7dnf39hJD2LLnRJdndoWWF1GzTpTaFfD5ggi5UcgK67MTf",
  "key31": "2uCUL78Ur4LpkXDYnrYr3TPPN3wuYSWi6Eqbn9RKKRK3FRsut9dTZuNgX9uy4YnVj3K7ac2GjxzpbxzqSsN9aAkP",
  "key32": "3homctynGbHmbEB1Z3qsxwrv58JAPzjzuaLEvhrJKnU3zKxkQnRb3X5eATnAPShtNgQshn5DtCyFq2aKaS4yhwFh",
  "key33": "3zzWzXoF7YDDpaPqRzGea8hbFK12G4sFkQKa5oedX2FMB41evxr5EAbPrUfghgsCBJk6TWZ3sHCZF6WYtQvscnqJ",
  "key34": "2729jqie2CTFF26nDsGuiLWZn39eVpj94xvBDfbvpzTY4eLAXWt6nGnuuivFSoqjkVw3FHuTWd71uL8sn9ZUw31P",
  "key35": "29C9edP8WKQTGqZzm3Ng3boRbG8jbKktGpFHjEc76nTB2FrSAL9x5xfjGp9Wue1b2DJACqwXw2PGNd6trWkf3fCn",
  "key36": "4Uk1GJz8VVsf824rr2Q78U1eVpoDY3zUnwcoQcMMu9mebzmRPHc11i5MXkuU2JGi3oG4MnzP8iRRvNFvcaFJ1Lqr",
  "key37": "iRp9x1S1GmPqgAoZyFYo1yB6oeDk9Uj2eFVgeLq4x8NjfkhmHVVJcjFVWQN8wyDr5nNFcfd5suCfepBUxsgqo82",
  "key38": "29XcgvRbjqkqFdtzoGh8L1cLpBK8FwvK5ZKeBnDqjSS1MCGsUdnMSoazhXfiPuygigvY1xKu2yV1VmZLBXBjQoHC",
  "key39": "4kQkatLULs1FHg8PTh1GkHUcwnZSp1v4mvidaGV8ZyiuoVPRXKbEuoPbafD4JZ7DEUor3RVFKcMWTetgjzeWn8Tk",
  "key40": "3czSc2TJPgs3TAfzjuajXVm8Xx32on9M9PVxwkywhGuBwvguoVhJYGBafryEoZ1nbK7JDo44Qr9Bh17uCtrtu6S8",
  "key41": "5FSXA417dxbkN8mJiZgML9QPWDFoNgYGDYLDDBk9uSa6LgcGqjw3MESHKMLcTuxuH6uaGKxsFPYUw7NK94ny7mS2",
  "key42": "21GpZXdNLpfS3xBvowuwamXSC61utbvvrS7wmaR7HgYN4m2dSAn8HeMdXaYFNTEh6m5cMRbra2HBGF1wWAp6LWC8",
  "key43": "3mdgtURZVhvtwUaXHRuZJtPg94thLW5c4h78J1GP5RvUqpSVsXoiwqJW5Ld41ecfxCtdMAXNqVwbbbwHTyvxEmTF",
  "key44": "5Y2YKTSenkN8zKUXBm4tJMiGTbotBeZnEM185ZAc84ytJYSjbhyNRAkgqGsyapjsAz59G6rTNsrq3aJEqL8j3tU5",
  "key45": "3pgXvRstzjU9JKHv2D4fvVxfDT1desHqej4PaScDADxzysXtoYLjAz2bErqrqUsJN7tvoyVgrLVdwvsY6q6eyE2k",
  "key46": "2sLQGwaB6zmDyt1Y6tkFWqag4w4JYrEYJ5XSX4cZJYTQm3u9tZD26JyteoKgTuKgmJ3Coey5CxkHLqLw3cjYXmJf",
  "key47": "3cEnNYHqHGVUsrkKpLU6cCtEHtj7JMX5hSHYB77PS2PMt36ELQHACuAAjvrde8BivcYiiY79UwoZeH6CNNKBw6bR",
  "key48": "BkiT6RfZZVYafCJKZceH5pzc89WZnxNM2Qims5MEbpHfZuyRvfVvHTQAveQ5s3iXtdw3B8zYRLaK7vHDJZmz3yz",
  "key49": "bCYokA3Y4aLecZShfomyz1PJhARfk21ctUbSePE1h6YFivfkyUKvE6iYdPQqP8ECxSJsnBFB76YSU2hX29g21yV"
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
