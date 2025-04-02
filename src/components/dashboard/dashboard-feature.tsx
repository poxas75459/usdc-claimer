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
    "GCcKhy7PaUcmC6ZttccjgdADsJV2VPNH3oUA3BMV5ndSxoEnu7pjYCmcaaX5apqaxHpRum1ZeEnGhQHBoa9qqAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgPjgzsPDT5tFi7je94z6yCvqTSqNsgw8nucjRssUdafsGfRwUDArALciyKnLQdGkAoJtbASAQgsVmzPewaVLF8",
  "key1": "5p2VgeNzadzGi5nJYLcfFQGraVxULWgBh5KQqdAj4Se3xLK9pa28cLPfd8QLRH7vQVc3pUruXJKe5yyiEWPs3Xss",
  "key2": "4pkcxQui5kpJYnJnnx9K7kR7s3o5EDjzq44XhexnDqxey5b8WcUuQxpmdAKRGRcoSaTbbPiK8eLvnqRq3HzyfH8B",
  "key3": "36DFxsZxh3Pe8oBCZKfWbp4vZpCQha4aV47SkHJYuyYF8M2tBQWswzL63UV39JnqZEeDmTCqWxcjUw1XPhqur6HW",
  "key4": "kKQiEvihKvhzkjdDeHtspdeskVTrfPpnFgr6wfrZhucXa2kL9tJtmzieqNAubUJcqGmSJbBPiBi5CWhL7fyo1Aw",
  "key5": "3gJvJHnZtrcDPvmMfrFYDiVopoxRqK6RdzudW1geEi7nBS68fp2ywgYP2vs2ZQTaaMfRfwYWRLz3T6warc7u5GzA",
  "key6": "89ENiMUEzN1UjBzQMYxSVg6hGj9FuNjEMbz4GjcFUuURrdyidcDL6fWRmfUwpquab1zwYKHEwJyWumDxkQLPhGQ",
  "key7": "2vqazgrewjFKgzveeUUjXcCWyMogh78drPjBbwrPvLJKgiGbhxKdUq6QcW1YPAuKbHbJoKczM1XbR5JumPzPC5EU",
  "key8": "3tZdCcwXVQMCn3wEZpHf77TKzGjsg8QcdCWCxqkiDzm3UsCJC4CzQTvKbiuMq4H3F1RtLwDRXTt6HgNs9Fx3v4cg",
  "key9": "2S6476dXzcS8SobjcxwH9dTkemNHxopyvq7qKRwcEfMfhH5gxUxy3XxpnRYPhb9opAjqnyi7RH5kPxGenZhyr5X7",
  "key10": "42QgfVS44wTTBLGUuLmNBPpdUARPxFN3oQj7AsFLsH8DzwwJX35Nd7StJUrq6M7A5pw88wGv7jYn8XJs2FQfaUmy",
  "key11": "3xa3vR3b2skV5Gi8r4ExzQ1a1fLSUsz6Thus95sWuqJFkaJmvh5FyCq5RqwDWbffB4hKYvA3n22NyW4vbGXnSzCF",
  "key12": "qcWFnZ3fZRsf2gLhveEAxFJYMmYc2zwnXiERwsBBRRxK8zhuajBTz5FNGFfWL6sAJRe51nYar9sha36pDed3f9E",
  "key13": "5Rxxr43rE3oY9CfQhECykVxsfPYWH3o2q4grjCeirpYiQ6ZNSdQ5k7UAWoTjn3EH6AUUZCboAjBPmzHd7uWGBwQn",
  "key14": "4Fh51v9BQRyARMHA1oQUCuWZvC3ir9dLL8J33JgMbQnkTEVNt28TEQWDkDGnQQLYeJD5ak6ngo5oDke48wsaHWq6",
  "key15": "4teayZNvwqrM1KZeNjiG7AnAVsLBkgzCXfmhkJz62q5XyF6e44zmWAL9TPqej1K23h8vwaJ5sfDaYDDRGYjKr8Ms",
  "key16": "5BChZydPgMwQwy2UvYopNRVnPtvE6HMopq4Vn4rF2TrqWcziacQryT6vS6z7qjmQUPPL8f6BsafR6yeaidDYLYMF",
  "key17": "2SX4w926kb6AyMTpTq83dVeFfykUs2JSWG847b1U2r5YipQ6QZek3x9XYugrUgK86bz13vpEhWsyXGKJUSv6PZme",
  "key18": "3aB3vfFZUzCbjY5BXLCiMua4wjYdbftsJ8csynkV4rTqvvonaiN89U6efDud82r236P1ZruaojSWT46PN5i65MyV",
  "key19": "3VuqGbar3mZw6EHZsR7mts2on1AyJdTYrDkz3wHtdbsPx2NA9oXv1eSbLWS4VbvXsCss6zvY7vQz5t7a6wMwsaLE",
  "key20": "2JaWnZMgV41gUoNYoBgkS6uaC8hNcK5sJkK1ub4cECP3nFn4RxjcfwXxcBMvXoH8kYubDaWvzpXPF1HPhqLprA7u",
  "key21": "XGUjfUQpH1ZnoKMZuskyNZ2cEzzmUCjB45R8PtgxZLgR6xMUGtpvuJjVhXwz5pcEcgSCVYaz4ASM9JvxsShyM64",
  "key22": "2CaT4L3PrBJShYevFGWwAsnPCdn9yLZrZTvmWfGcrME99hgskwejEaawba9PLaUUZBJQFfe2scAGeYaxgajLf76g",
  "key23": "2GXxA5y4URRo4DXzC46r3Uts6qnhAHTMfrib9Z63dH2CzowbarKLdzAYt366fnYPGuKVuHZtCwtHVdeYt9jqXkcR",
  "key24": "4g67X9qKuYXQJQeZy4fDEdEzFvHbuchABKo6b1AowuXeSuRoPtinMC6NaXk27NsVMKFDdkKopNM9roow8Y6hQEp4",
  "key25": "qf8kCZaFWqr9gHQzekCdoNhXC1aCwBD46c3kACaYLka7JuxydKoPCCUPotNpUCYyDMWDHztrb9sHKHY1AJXaNwK",
  "key26": "3pzpY3SKkEbZgPD5AirvLtJBsHK2YwH8PxS9DDqthUZyWE1kBdj7aiY1eyR3eVPujiDBjThPHkoaXQPyiinzpVLP",
  "key27": "hs1JGm6pqZXVpjSBptrZq18VfqszeGMLFBFSVhLvqVqjceBf2DxxBhxcVkYovXjDa3Ln98fsfDiED1yU9Um5VKh",
  "key28": "3uEb3PFGS8nv9ziF9HrmKbr8ZPB29omyiPh3fyWsKzCUG3wQG2Up86cQax3UYYwHBnRts8W4AHNrCgBLcoxccpE6",
  "key29": "52rwYtWQYWRGp3MmYiFTDCtgYyZyDBBtHvJPzKQo2MwPjZ6oEYF4kXz7v8J35SePJCwoUi8WouFVXauCBz3DXCMb",
  "key30": "VXaLEvZAW4CjX7iJ3FJu2NpBDcJbMPksRQ7KcoKdUtCPmfVag1BQrNXYd3LuWAGCqMh7cukAUypkhQdU5fgrU2g",
  "key31": "43BcvSoHZjnKvBoa8G59DxR7HmuptLifxJWPNK8aUyLcaRmKBqcJH5GyVXvwSMXr4pM4o4jH6upaRRPthxYtUjQb",
  "key32": "2AHCjC4RFzdALxqsmw5yYEMLP11XkeHz83HCbBXyDhzDzJUZUWqCKXvTcJhGVzo4bHuA4vuYGG19VcaETgSkkWyU",
  "key33": "LRtcu5FEcNtBKtEe5ZsDBujpa5MKo4eaRKqvPWdxKd4sB5yBH3SgNGCxtLon9PQ3E8Z992Y6uY3GLEuRPreyNJN",
  "key34": "43WZoxwHNZVLV5MKonKT3oPZ4t4iVkkYECPXrtcSpLhP4aHLhZcpQEXAb97BamGdawNvh7YPKfPT4rvWQae18h2o",
  "key35": "Mg3WnSZ1QuEj2BbCXPJXcxJCBoZHLuxTMMnc49tZtCSnWuuyGD7kPeKCT7VPNwVjbUVLH9T9WQ4yKF4mskb3ZUL",
  "key36": "3EhVTQGfHyp2fTXpRkr7giDNMhT71vj2wSgS3QWKL3x5E7Ldv2zGMa7VxdUyT3P72NaWjoJVhmhejYSAXtBCgJUh",
  "key37": "4ndPTjd4tsUrwtU41sPEYAUHXWrzRk5ec1X8mDJKKMxe8QEkwdugy1wHcaCqUWMtijxMjRLQuKoNxKuZ1o5YM7YQ",
  "key38": "2WPLzGbMzBsxF62iYYC3U6aratYWVWhRsnEWauRNGHoucw6dbeFwavZ5jskdFPh5JPcXmC7x3mdAWiHBPceHZmag",
  "key39": "4ThmGN8B9vcMfTtJpv3gE5tqsRjsZH15JVGgfQSjunEq7Lm3LduK5gt6gjRCujayetpGr1jKZyjr13j3aZw4qV3o",
  "key40": "3HTVH4fmiFPpNhoACWVKjVXyrQee41HBVQnQRhBX1PB5phKsDWKkybd1E1Xj9W8GrPjZfX8tWHRC4nL5bgcAmuU6",
  "key41": "4ERJLhjY3XJxhS6x3trxmGMK4vBXm9Am3R69sbYAFYW13649KqiuNLbqDK6QQYBvqRMoi2qMvYgMVBr8SUkZUDPe",
  "key42": "62fJwbhJgLJ272jCz93ueyNaFABGuqg5kNDmbvCSLt6K3Ur64SWbKUmmvgbZWJJqgszCGxx9kiZLtDnpgXyLQ4PE",
  "key43": "4UiM3CpoAb12C4bE8niFNCHmJzRxxZoEKVQyZTVJxN5Miw5QTCnAuejkHd85bKU1zwJbsS4duP5cTxEfqiZuwhzX",
  "key44": "5FpEbzsuVoTHEX2ZzrgUy38ZhoKKAG18LQdmEQMLDoWGXjBm5aRmYuqXn1iwMCNxjpKwX2EZgQVajVMUA6KJwmxW",
  "key45": "YLu14vPaRm3WVo67rhuW8FvESQXfa7Zphw5CY2q7FQ9j8vzNdL1cr5kpHATUwJZD2QRpoEgJ3E28DcMvysoim8R",
  "key46": "eBNP8tvfawq774m3uMEVFbAePedyytZFevJh4LmQM1uBSmM9G5ebEqhKVL4SJZYDctprWTvx5DLPPGSpCdrrX3s",
  "key47": "BgUDMREEtutYK69GXdZ2inXYv7hWPcjB54sZEtKqidizSUmw9G4EpTNUxQL3FQ9bU2r8bmpFKpFMTZ2BtaUeWhA",
  "key48": "hquz4xynuLhhzpaEdnyDiV1U29gz6UPXE14yY7QE66V2bNTS6EJ6JLTGb5chYEQxSMasQHoVxZhFNeXDznMNhde",
  "key49": "239ZPWLGCqY9XvC8eJL1pBSUQby5Y6yMMSovMGh95JsfokgbVVkhh4g5gT5gnQxMA6FtYG6kpcJZAWNGhtHk5Nz6"
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
