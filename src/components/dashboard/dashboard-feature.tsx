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
    "4wsxEL3anYn1KZo7yCpXNonpiM4mV3NUTK1BCr83GoxFgTnHh2G2zapYGTVsPFSojUTZyFC98dipB5ehwvSs6ce4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAE7cScRoPNiq6bvTkmx18fTipxzi452suyfua5tQvcfEsDqDJj1H5pHmnkNX43ctZNd9kFa8uM4qAty7dioJqP",
  "key1": "2diLaFBVGKhfAyjpC9rjUXULFYg2bGzfMN4mYhnYQ4fzBs4VympGnxMyp6Lk1JMCq31w7SKSszur1Xb9mPmd9veV",
  "key2": "5sARh2n6ewdGPSfVxHR1yx35pVeLYf8SSy6sCRjL3cup8cRCD3dbpKcgF1aFHGGrVDUZLN9nYagJhzv2qjMTnWxk",
  "key3": "3Bt5zGhgFTDPi7CcwKELAuHqXqJQuJyBPeRQBcjzvv6xjUy11GxG5Mbgbn3tJR8SPw9tP47Pjh35wAnqky17C9dn",
  "key4": "42mZocJLHAdG2XEZVhxP4SnLWzBF3S9syCSrUuFKnqBaeiDsoLQ7u4wLosNrrWZX68mDpGJK6Jpy3TL9DiZwR5y7",
  "key5": "236CnpKUDQNtFiFBdjfJETKk8fJRkmxMAxc9ViveVzbpmou9v9k43TjGUhWE5gUSo9wgVogyATZPJ46Fkfy8TMKn",
  "key6": "26dyDx1VwK45Sjq1KhNtPu7vZDBKujAw1cztJWVGfNTYwy4kVFpxvzdQbKwVfhLErmyxLfxhqEt3r1qFnYYGhuWh",
  "key7": "pFHka1TzyPtRLCuV5QnBxJJgmjq2QyVNJUyeyZy5aktQUpV2sRrTik1iNGY5HiXjuqmTMLPRCZZExYLQCro7M7e",
  "key8": "4Kf3wGWweqSbeQCYBzHFgMHyUhZTi31pEqw56AePXQdSYSVn3JS53KBvqwJTXtcwDvP74wHFhARAmYXVGpk1wz3S",
  "key9": "3NxNJz5HNdQB7RQeaucZVTK2VckAzhFUnQtPwnFWSYC7mLyzqEwoFUpkGRsLvdvUe81MneSGrWxKRDXSNY6eiTWS",
  "key10": "2Tviic2AMBwALom2v34M58wBo5Bd6UDDfjCfmxjiwzt4tEwJMmYQEN3KYGKQdAX94YfZWphyGgAtPhkmECCWGNGv",
  "key11": "2Yn9D4jTsyqN78uWagU1urYJ3HU9e1PUgnV58j5UrbRNv5BD9mnaV8M9MnDp3abeWEboJvMYb45BivppKRt6mToK",
  "key12": "NMcom6VnzyeU2csKrT7kPCa1wVM1g6q4DB8qJBu8q9y99ZmTAkfbnT8ZGCLLg12fpCECwfDNfUCMaHqfqXx5WFz",
  "key13": "4HkmVjTgNkWbLDEMzuMsoh98y5XiovBioz6oaUeUeXQXf6RZSMQqEudwSN2vdZ8QsGm8tpGvsAK4CbqgK5DRjkEa",
  "key14": "5MhFTZwR3TH2MhRFcx48TiVoaFdRGMkS1pLrJU4Z72oy1TGmeamVHqbWLFmN7d99gxr98Fo51MoCwf7MfweT8GzX",
  "key15": "UXRGYRcTu49DXE4nePhvyLfY6vhVehR13iG5VCkvVFUeH2FKkSrLeNYPCqWpFu4DGctNu29mLocHdiXVpmJGnk3",
  "key16": "5ZRBZu2m4inFZoGgy2a6kJr3UUdAfE45jHnE3a1ksQzpiHLsFFR4eNB8GJyWrBtv9Df2BktjzMtHRQzXY7EwenpN",
  "key17": "57WmWNqp5UWwYXNPp6ZXzP3MBwoo3wWEZ8WMGGwBBK7XFsTDgYt7cTDG8UjLH8ngD2kaSAffNVWWup8wx8c4zgfi",
  "key18": "5GLGEB9ToBeTqSmmBwGVQbfw5Cc93xdP3NF9RA7GUjM6CpPULhyFkkeBFSQ739oJVRwufZDkzC7DoWn6cWs9k2Bh",
  "key19": "sRWtQpQnYtjD8aQJC6Uumb8dtcejwFQEvkPuyUtDBYnLuGf2e4E6TG7nD7RLrPTzveS6bcJ6U75pFeLWg6k4iXS",
  "key20": "3ssXKSJzm7ftsH8gHnSjCMqEsXkgev8LnPBeVQsdW4TLt5AkpEXKyy1PytpURqVycyJTsRrPSRN18ua3vQA1JdSc",
  "key21": "4abgxhiq6JbXm84gV2jAY2DyHVGSN33FwvMVsGbsdLprjRbEFf7ppNMHnPqouMZRNBNrvwPRYCUHTEmFW9Mct6J3",
  "key22": "5xYYgJ7tGsenwzRL52wGjcDFsEPgxEoNAnHfGR2HoW51dTQegaAhqDj3nEi3sPJVSrHaRvsVtV8evx9kF9Ko8cGc",
  "key23": "4dwnHYiNgMEzNBeiirTuFVGmRXazf52A2EY88znsm5yyFogeU6SQCUVs5he5hDVoyUAsqd2PaWYxSg9t1TgkRL8t",
  "key24": "4FzqeUBCnKVjLV8Pktn1ZuhoJzfq4JupWjs7uAmoXLMqR225Qei4S3SU4haepbhbBUNjNARAQPFhhBKoS31ckvhq",
  "key25": "5SKQBcRJXXUXBL7mP5BZjzfbUgEn2ZsdXPczuzs5tWRtkcjNY1SnNiozMGWUEETJbyS61fjZZAULiptSi5cTNq78",
  "key26": "513KUByAHfcqmUPGAfCqfs7kcBD2wzmkNr35ye87Jwd41GEUDZupWZrayo2vZrRTVs4U1hVuGv1NmJnTRNqjXc8s",
  "key27": "4azBg8br4NAynHD3ExSSYdVNuyEFcxHLfYXE7dAbu84XbSbSD5Vs1azmBrU13V1tS17ZDppr2Zkgu2bEX8gKjX5m",
  "key28": "59x6DNxRQ5JSJooiewWbXDnh4aVNgzzKpVSu3F2AthaHMZ9JRa5hzHpgsbQWWxGRKimaKUETmWnxz2asVR2nAtyF",
  "key29": "4v5FUK9rouHVW2chrRwz4nyhijFVgg7PR7RJtJbjbtUiqyK2262L7vspnBzw3aBS3bRt8NTE4KyYZVvkVGG5eaJR",
  "key30": "3KtCp8bikNKZ5PV5TgasX8B3FyqW3Tms5GqmnZGSsgWE6ia8YFRCyKPjev21ctWk2ZhUCmtocuK6j5ZBP3qFco4D",
  "key31": "3i6prNPpZLpJpus7jgZtbnXuG3oLL6FdXoADeD5NrrFQMQVnWpAhQ9oxJ8jE7KKVR6DZWiimYHwXcdS4jXbPoYvC",
  "key32": "2Nb2BmUFTVDT4TtkihCxMvR1xFNvPUYob78ZuqE4ukwKMBjZyM9rj1T4tMqJiS1uvYnYT5JkK7SBnZgyyxn8YSLz",
  "key33": "4bWVDJXX4Ch35C3zPxY492RwpHLwWA1WV9GPsaQ3mjQ2oXg2tVLcafBS96SUrcSySPhdwQeYWxiG2NSmMeYQErxi",
  "key34": "5Zi15Zb84zd4LvtMhZybdHFSXxUbG5sr3iN2aDqNhLvQpHYRTSkCYu4bpYXVxs3MH5YKzh6uE1Re6SjQfmSeJZzL",
  "key35": "4iDsGP6Dgi5LN6rhbLUiBUWcW5PktFWDLzNBb41p48Lf1RFd1M458apVpJiBTEUZvrNheSLudjjwqFMkbZsQrTV2",
  "key36": "2b6bQNvQ8reFZub2c4Hq7EA1wQZdVupTGvh4NGKxeytrGwbwnMexfDoL43sL6187nKEPXV9RdfZhc7owDS87Yycb",
  "key37": "61sLx2ZEmEEG4WWutjachc4cNMsNdcgNLjPgR7ndFaEtTQ9rPf3hD3w7vdXCC959oqA3rjtTMKXm2tbchTFYakJ6",
  "key38": "28Dd9WwiE2NXuFGgdbyrtQESEL7vMXG572syLZwxJJPXKKRieopEP8gR91xAvyt5SwgYC23yMPsAYXvCJqvByxay",
  "key39": "2D5LfzPZ7ziUT6SndF29hMBdaohRrXwcv8YfAACMp8UbhQh6yz9BHHxbC1SSapAichQYrDkGc8vFQy4KpRTmmxpK",
  "key40": "5L6QXMk4iiU5H2WyUonUjxw9ZD2kTd6FCUjTLeigzBn56XZLgqS3ASTfy5nN2qLzcWuHeajPjkRE88RXSBJ8fGFD",
  "key41": "2ZGuodziWrxdZxfyg5KcnRHfADcZX2r1awWTaYom4bzwsh5gJLF3QXCd3u7razBqhjgZfXx1vwjcGSosjfBztcMG",
  "key42": "5unbHhcVzCjLB5TCkogUok8JqBYc23L17tQZe3uNQexhKJZ1g3iBJJCt4QhrayZDxqW3WCcyZRQxgKGit1N4sxRY",
  "key43": "cPDMnEu1jj8iXErqZWuiVaY6qK8yTuZXUDb5DAuiKzocd1qDQSxsmaBkXws2YyG8uSHoAJTpDEwqiAtvpPa721k",
  "key44": "3S7ArWwypvU6rgWTCZRy8vP9AnGiu3gNMHsM7rHgBp8cLZznLpuiFHDhe1gmNMwqedeiN75NVJ3tD8YopJNxN2mz",
  "key45": "5u2BAuAcsB4bLLH4EoPZhjYsLQcKxwFBDzdKzMymjtEWyCgrqvTRrjCxVyBGKECqvJaadKmuVaADdBiPQqgrbB2E",
  "key46": "ar5db163kVjDXCgXqoadBTd11HQrgaTj5gybpDFT89Fz3w85kWcafSK8oLasbVCbXTN3EfLgYbaKAeaFgzv5fok"
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
