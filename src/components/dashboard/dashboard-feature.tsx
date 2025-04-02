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
    "2imKY6g5osrruwrDYsTbxYtFa5QGdXAXHKTB4MS29Pm847LubQtiMhzvha7ULi6wirDvk7fqqPkXimGiSdbAnogK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hiGyWZidhFKNWCk4fAppvnWxDuAt2rWhUtVf2sUPQ199f7BJZP6GnuykmT55BTvmccJAmY6V1jwcbmSgrSR9uPe",
  "key1": "54qqJNcjFJQtQWi485eFr2DFVFpqrZ2d84vDAnwHthxrg9UxUDz8FGr69EYG9xQViKDcSYHyWgdXma3DvgruSc62",
  "key2": "tL9wykzWgVhaxKrV2LKxDZczCeD3e5dhckKhGX91Aq5HGsHBu5XsX6WnGf84NnhGTAbE9D7PXSXBSQY157n8dDx",
  "key3": "Wyh9cjyes5sDWMtzjK1V1n3cXreNWBM7J6dwEfMVwd9C3iz6mkjPBGY3LGGcHtjtVjA6LU1bcQJnXao1QKWEdtB",
  "key4": "3PKxKGKZPrjMtwXKDgDDKS9TUqCkmRY6UrpetJS9E9J5AFxLxKifESbqt7sHqGzzVB9ZzJ2pVNsFVsx3V2vCjftE",
  "key5": "42S64GT8w5vrK3snrPp4beFWgahKbAgFHJJrAfpujQCEcnx62UwjGiU9m8GjVshVmoYvbJY2kKZnUrMKkxrR6zVY",
  "key6": "4abZ6opeB2pTQvzoU4KYBmH7YE44dLWeKWdYiYhPovfuAQyASoaMWZgpcZ8fEn9Rx8ia2w8pjWX3edDdY6ZeV9NJ",
  "key7": "4nYviC5Dpg2U3PhuQQQRA5f2ZW4bdwJ5uGFTfVz7S6iVus5muZVQwct4GCVougsRCdyovXSG1N5DzJUbaoJvrVfx",
  "key8": "24UT9FgLqHqB9NQGNfkmvQfhvC99CgXCMmbs4LSgEmYPHHR3y7aqUZpAGtjerUd99UEyYfRprTC7ecyhhemEmkd8",
  "key9": "4hp9VVTzeVZE19YtXmb35vRk193XLDkSczy6AGuc8yaisDNMKbdrStScudq7ipkAtWn84X4NmpQ4WTq2tkEqTAQT",
  "key10": "55a7835fCLzbxmLuPv4F6xkf5gbk8D3G96na3HVgqzwRP6ve6TgQh9TuyDAb93GhyCJfoLj42Rty5VC6XyotWe3E",
  "key11": "mFyZGCyMnM95nPKc13kfTpk3st6xEFz7bxoWGQULS1pH8kXNedgJAth81NBcKN1APmXwQuaaCevYjRVNA1htbjq",
  "key12": "3jEr2MkFpdDwdFUgfjAo45XMxxiaggSwRUmVeUguoQE663AmeKZqafAs9eWzXeNnuFmgc7shysEvbHh7eYR7TR41",
  "key13": "QxwBkhBagkZeqP2utVEVpw8VLFcL19CXU87Ky3ArGRH2P2TjASg9AiE64MN3JCUModr11nk1JEF9Gw31vnAdKod",
  "key14": "PuGPGshiHY9TsJMzsS4e52UDrtecS1etyNubN1cKDP41aoaEsK8r7vAnKDEXVCpbto5KGiHa7nrNamjmihH4eqs",
  "key15": "B3f8RapXfBqDgka8pGNokMxFyPhV53A2BhwsGzayiH4UuTEP3N4UY9xcvxyLdvkPqQo6ctUwHRuoKNeeKeRg1HM",
  "key16": "rPpQdNMApAfhKGnwpnYadFwvWvMhsbkhYBWMiWNLqsmVkcPZYJayNk3JJhc7aWqBYkhXr3GHRY6iQzLzd7L2yX6",
  "key17": "5ZNc6hF6qPqE4fvY7wJPj3veYVxQuFJwQJWkjpyyoTEtUkjc7yQurxsKwn5xQXCWjgnFMU78Uguh82agrgKEHiNd",
  "key18": "3zLC9LwVB6N1q1RB5qgUgJt6WoUQBh9PCGMu6geRCCRgNoSMMtMGEdfba4zTdt5Go89zaqjra8oJum4mA346J9HL",
  "key19": "qdLuhB4bvhNWQSasaB3gc6z9NWTqRw1cBsyugjGFQvYTqKg2Ld86PgVLuLDXA97494AsGC7vQZtm87zRpkNKg5P",
  "key20": "4kB4Rb8oJYHAdohgNSD9MhYHSmGsLe6CHXHKPehzX6m9vQ27PzBQWZMNuxWDYMUSKjTJQxxzXS1FPkUA4UC8axXY",
  "key21": "5YXa8eV5Wdymps9KwhYU83MJjxWZMTYFzS7mXhwspW7qnrKRbuSKWbxXnewgSzSnPgVjkc8vZci8YWiy7dsivkAh",
  "key22": "5uiREN3ZbZMCMG6mzEyXxXkPpxbez5fg8T9Aabnof3W9QEf8LcrdzTHeV28jEc8mnR6DGqpZzJ9Hxu4mJpRYm9YT",
  "key23": "3zdsvKMfZuPMqxvZLaG3UavVsLcP1RqE8rzxDJfJUiKXSEGBesN7ysdqmyuDsNf3cYjdy6s9PKWqZ3n8r4YRTAr9",
  "key24": "5JVggcfduzXZFrZpC4wZoVRSHF2NptEjB6XjBbcCLpcZL36WVRbcKDhneZPS7wEMHSYrnp1E6Z2iFeM8oMhQfM6u",
  "key25": "3JdsqpChxgdQYZnTGFH672fUkEjMJh1o89MKPSViLzGK3Knmu8yyx4bji95Z15qBVVioN5QL88nF2fe76CcuMhfQ",
  "key26": "2PLbD7x1z6sVgJnY8wW2Xenw4Rn5QrGjqa3GQsfWiMghQwtWQ8YLWCVJs9M8UBx7yG1HauqBgrHJQWBpdRLY7H2k",
  "key27": "2ZXRSSRXKcGTgxKSu1e8ifa2ZD9cxACQLtNptzma1zbt4fybNEynzmhvHcKQhgv8qb9hU3LH62Q6BtHGTJprwsaj",
  "key28": "1hUYNBgi49SEzFG4vfMV2YShAR183vdrJ4McYNU8vkjV8xDfFvFvHwEfbLY1vN2kZGovVde4gkHasPHyrYJHqRk",
  "key29": "iUhdDahAf66b25KPmfgg4h2ysGjN3jQ258KWvhVpEaU7WJvPypidbW14LPnf7PCaCekdr7hKEDKWRsrWgBhi2L5",
  "key30": "2guhJJUnKK8BZTuWt5bYEurjhhEQkF2F2JP669J4Gp6e4ZZwQ885oscgibLzfVXXL834wVpYfd4KSkZDkH6iA6Mw",
  "key31": "4ss8oj2BeuGPtaFRDgmznWE8s5fpRra8t8CYJJLTfs5xXrqvu69vk5fn17czL3EDmXhAs2hqpgL57ZkeXxdRWHhH",
  "key32": "3LtwZvue8kWDog3PxFfsgWc4BsNVCDXQARXAzNKoDEdjEk8hKas8Kken4NriMRjh5w6k1QE3GubWbStZNf72j8o5",
  "key33": "67CqqMECRZ37mzHRSj5W1SUqgrZodGYKHudTjgZQVqznrAm5LdpYxUeAZEQMEdwjopCY4tL2VJb78hn2MnHJ1zdh",
  "key34": "mmXJpntypmUDcujYtfNyp5AMVTf7Sb5Qci1rEXn71zHAFrkrJJgbTdwfmuYQdzppZ78xraWva5nzYYcj8TVt6x4",
  "key35": "NbEaVznT7tzEBNRsKSeYnJWH43uHxnD2uAJDQfCtCDxzSnasHbYZgahfeEu5u6BJw2YNd9x1oFaBn6uwsNVKpWp",
  "key36": "gtibPuAB897BbFuKFNmfZZ2xR5GsQ4PBgNvRuu8ZtG3xik53C2J3pAns4VM866E1NyygrHNGuHLjj86ncYrsMXj",
  "key37": "5dZ8cUY3UQJaDr8KfAbyQDHoY82ZMDcLeRpHKKxzwppyA7CuEdjKHSwDfudSMU9Jg2sfBsePjRtGAn8h31Fyqc11",
  "key38": "2aobKZpPDLJucCnMrfjrWNhoe2WSjXGWfMkembcQSY4i7NoZsj8eVHjWaWsaeyrqBWhLAAXjcT1MjjgekvYhbQ9s",
  "key39": "wzoFJLUJ89zCSJugdNLYhKKZF4M421WnkxZFaRzwzDLc4wYFScyBzjJniHst17N43zSNM4qkZZEFtTHpKZcrm7X",
  "key40": "3UyCQ22RUnC5VpG8fEEfBChpb3DbRnQDJefyKjWrzc87LW7pyptXGgXurigMFjczCBLEQS4KjxWAdwKoJ4ojaSzM",
  "key41": "3UcHTzcyfr11QehbhUnDaygcAFz9QHantZb6mqDxzGtYMQMNGgRqAVvnPft4wtz9UdedRFfM99anr6DB6nQ8isyE",
  "key42": "2babLLwTvhj4JEMf9nTGbUzG7ayKGZZidowT8qMopHfqwGdTgPuFtfCRAJey533Egz3sjgYicK7bY3Tf19Gw2czf",
  "key43": "q9aU4L7rHA9cEf4H8zGNzo1HjHkXSje24BFZRLV4EjbVQ4axTW4eg27UGspHYkmaYgBRSBrNfRw2M8eKFXy21BU",
  "key44": "GLvLaAnFoaHHfPbEcaGJKE5F43k4PbHzKhEfbWW7VkUPySbFjdyPTQmZ3dRx5u6HcPbXN6zEUXe6ALoANHnxQaC",
  "key45": "4VF2dfzfhdHNqWfdP6fp4GgMvry873gWayTMGsEJChzgrjQbrVACf5e4n6Jp1afwY7h4UDKTGAtqEqMQV42WLyrE",
  "key46": "4EDWruauMghbYGqmS9Xj8N1Y9VRrTN2SDCAdeBiWeBaCLsDT6D6qiobAS5zeW3ovG9wkEpJ5vQYX67qZkS2Yzoyn",
  "key47": "4x9vGYRadESPS64v3Q6pMfZdfc1tpYodLQamFpRcAS7t4bSQpShNHhE2GyLpQVMCVc6HR9zr4MAVaUsG9Fbkx6qf",
  "key48": "RECGcLWRmeJ478j1XuNttETsh95x9666kg6J7qRu1KvTfVPCGdovzdXcpYDfW44J5hvXjXzbW55RoQrkgRRuSqx",
  "key49": "2JnbRu1rZDoyzaQaFk4m1eqseMmARnybw1uZS7M8i3PB6Y7xkb95FQCcN8E6bJrWXQTdehUnbtBLNE4FmHaqEAWX"
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
