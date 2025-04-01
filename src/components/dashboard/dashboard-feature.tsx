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
    "5nTvARLfnfNPEZASTbP3DmhErrATEQsLKd13WLeMbhk1yQzjhNMNmgwhnDH36hzGtSEB3eQocmEqCVLP8hci2vNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57n7B3ZYsNNXrb8kHk4tPzsQP47JXQ51X1drtqbeSrXttwBa93JMs5rctVXHhfAN4MkaCeRJg51jxE34vbx7YW5V",
  "key1": "5q1oshPsxmwQcrrVt8mad6x76TzMZqEJAoMcBgRG5fFtf1RTM47ZQYZuANFYxAQgHo1QtLFXggMd13cGYtAvxMyK",
  "key2": "31synJkYhZ5o1u5fw7eMwh4HVmriFW5jDzgnwjRu9gaLVCTct8kTsJQpf5NutECEkEacWqpntn4q6C5AKsMxQ2tH",
  "key3": "6AWhxv8LYth7JiUBLPTi56Cf5XwtGUxgrdu4WkSUT6FcAYLeS36hWkisLie3nLEQ5VBzU5EBj2rHNW5jgUu9QDt",
  "key4": "5pQeGWKQGCEHHD13A6WhHwZdMTNSW9A5ciQyE9uV8kHNbHTaEeCaobggyQfJdWqULxyxkwStV3JVeuZodh2bbgde",
  "key5": "28JDZJT4CB7Xbhm9Zp2Bt4vSuFgPicdAteSpCGzB5grrRXnwcmJkVCPvBv9QWdzhA7WYuM1RL7z3fE7McXZLQtxg",
  "key6": "2TDuUJ2XMdQeDMgqmFvDBasvuNU2wbU5B5UMdU4rueUz4fhn2u1nM2dkSpsFSEZk8BnotodzYb9eTQcjf5tBh94A",
  "key7": "LGDpa1TNT4feAstDBpiSqmrkbAyLaretKcz75zxabqyVkawxMf819BHw4jrsN64Ppu5hon2buFbW3rwk6aMub4N",
  "key8": "3sYHSEGW9AkruofowNokaJ1V7cCbzVinV3U1JfijCrFpkyzytELkcL7R71F1iUMiHt4HNY57pBikW9pXFTVmkPgH",
  "key9": "5cYGh1uUUpYWy9g4FvHPUvGkY9kDFnxRYbvVNW8uB5Pd4HoPFg64CrUeMCmUpcHkWuoUs1VuZf3t5DkR5SNEtx94",
  "key10": "buyHa7BgiuyAr1AMoCy3h8dQebvCeafS6MEJkUK1rvj6fvBDCgWQRa791AjHxhhLr5Lx9cgvny8WVxuofz1Fhfn",
  "key11": "FwoqLjuv3Lemd1f6tHVGFrmi86gt5cHdpmTe3U3rC71xRH3zhZaiRvwxdgDnAYKxsqDPuKvDMS9aPREfvMsLpdN",
  "key12": "2j1r3AM5LD4c97aeebNyYev9jN5ALLKqwsox8yPw1hu6E2fHg8QXuuEXAUfNev7Q7RHMoC4my54hmNWfNTshbrp5",
  "key13": "5RfTtJDzTxcP4L6fvJLqAmNdNPb1e3LN9Xg9pXmix32EkGmeLxrbUnsVGsASbsX6u326XZt5Lfx5wUh339X9xbeU",
  "key14": "3pBAkotzUoVNkHgno5bsyWhvNsT2mdkzDMWu3Xensx9m3cbjBeo3okt1iNn6WMZG62XmFZY7c4mtScUWnZ5HVBPJ",
  "key15": "2W7tecQUaLFeuiT5W9pqD6d94bhcEiA232WafnLcXkVfYaXqVSbVvYe4c4ikQzqKgq7JSpAHEzf9RwfnEgpSi3pE",
  "key16": "4NcQXRjSx7HWhRRUzgBhs4yxhWB6kkLwUxPwKBBwVyBLfKU54EVKR8hgqLDQFfro7TSNQqzvtAf9gMe1RCDyg9oV",
  "key17": "3ASh7Wcj9wL9zFNqnzBnbm8YAcmtKLbEYfcMJLPUX89zroWiRrBmcotHuBmz92qPfYhjo4QJGQKyDFvhwakwcxRV",
  "key18": "3pwD5UrXp5nEauRLzV6Sy3ahbijQsSoYah9Z8qDjtqqAYxJifcJwBsBJXqNwjQyC9b3ogePPJ8F25sqGUzCz1n6z",
  "key19": "YTmaDAuHXzyH9bmo7zvsCBf9SToK3ULEtbk2wnq5UmqEggWD4P9UEieyENn2fsrwb3gjvZuPqXqV5gRo6snLpMX",
  "key20": "2fpTq94ay5QqX6ZRbL5e1Z9ucwmDL5cvVc8cpdaAi74fwHKdxm6xojZpPiGuostKSKT5APCidnhav5ygGa7pYp7o",
  "key21": "4gytkftcJWcErzY8HhZUxYtyx7bLja1wzFhbNsBb9koqcMk7NRNqfb68dBgSMB2iGVFKmvooHgq2SE4uF3cSqsRa",
  "key22": "Geo9npWLdrcUuVHd67kGKKNyLL8sEnmSggoaBW1ocraVYx8YrLdgxyPdmkh9JQQgmaMf7zoJ7xKwnWGKRTWiwFz",
  "key23": "46UBbQE13Kd9rAxkGJqCjuRxYU7Kuhimd57nbFTGMZxqH4M7Kbc71HAkfJcFAoWzzPoTeQp8oZYNmd7YUFby7qxY",
  "key24": "4DhHBH9xFYPAG9CrJJv37tvG5UUiEmuJwHhjuGFjQ1Ayh6jgBoHdwbTEjn5B2BS7jvXMJEpGxKSfZYJuicwJES8z",
  "key25": "4fARaTYCLzr3xXt8rCu8y2ac8b2xysriGpcLgqgTZUmtNyGPHkz49kA8k4bQ6yepm8NagU27qRLAw2AyatRfmNdd",
  "key26": "3RzHPEQmq6xaGUNs3Hk9C9c8H5zUo9SVjJ8R6KcP1ddL8usok2zpS1Zmo7x4Dm61gub5et8SAufcuDNX5kEo4dk1",
  "key27": "5ciLgtaw9t7CJwNAKBpo5rTtdAADRTenKSQYvpySxVf2MuvzxngKjsKrLkciLXrRT6kjToTFbemKoWqVmnY75Tfr",
  "key28": "29ejSQpuhhVmQX5i4FxGoRMhDFjwspYS8pMjtvubHRbbd7RmPsrwo9fEPaEDBa4Y9hVBBNMwBhVhWisAxJMuX5TT",
  "key29": "6a258pJPpLDf83x589FrCGVgCzw68WwD6qXkPW3hAPvhUyRaFNDvnhBX71fSA1JV3X2H7u6xB3YeNTeGXgECgjC",
  "key30": "2pVZ5jXM5z9SFnBYGmM4GnU56hL5ufSTEFecBjhkkpvXYcGspAVJGzjLGSz6MW37Z5chcVnJ9SoGTmBww3QG9E6K",
  "key31": "4Q7BsbyiqU3EZR6b1Xvn2pztoaGqYPUoqAdbHDqGckfT484tF9qXELKTLvcGF5pkXBtDYgrydo1TvxFftB2SdPwH",
  "key32": "5XjaQ5GPVqpiF9ppUxphjZNDgDKRAZA7NE89zKQo7jZf1M5Dp1cMSajf2QWZZZc2WV3Wr1JZw4mpcFB5sAsY62R5",
  "key33": "5YiA5b8opWgp2xqin2smw8dxsKpwicNjNEurYVPfYCh5mRm5JpfcRzVe9ZrQr5JALjUEJigHLxPa77qvtism5aeF",
  "key34": "2swLRUgghbG1jfz3PkQqb5BcVyxBuLg4NRSXMyYhjZwHSdumh7vSsSgffwFu5AaatRzjEPVsZ7SNHw87cYwPsCKW",
  "key35": "BYPga9o6cb2rfPrafHXtSmYX5J2bp2ZRcamXgXJmZaXf1H3MpEwyohpRaUsjnL3FfyQWXqSHLSfuomjioxPvex1",
  "key36": "5XSSrWE6fGoYz79vw5RWmBuo5JfNYXTTD1jTqJ915XK7eys7YsEGoo6BSsDHBqYSQhNUh32e8xPp2QFNsUqkzNSy",
  "key37": "5umQMdkwqU91wY2UFx7mXRY3HQ2H1deDnzHHRqbNuEuRX75mVz5SNiFUkayvCJStvQVpx7Dh4Xj9F1VLqLTncFmQ",
  "key38": "3j2bwukUgxYEuC9ZekrNUswaQ9cyur3EphdVHJtwcfwJTskqCLaJTkTPN8qs7AbEoeoWAjG8rpRmpeQpjwCLHHxL",
  "key39": "bqsF4UWxX9oxVXK8RiB6QHXrmxezKambjJHhScAMdWMogPa2nftoZ5ce59psVfePecgVM4TjbkgGutqiix7KAWo",
  "key40": "5JPBjbJhXeaVfhMjUM87KE29ChuWjUBW7jfqTU6nCGYtjwUwxE3uWa1ydPwtEHA6s4ezgePF2B9bPRnjhgyeVK8E",
  "key41": "46PFt8Jw4BCeXcJx2jR8v4BL7AHQ52dhVTc4YzVnBJf4HdWkiQoaUAMBZusnpRTXL2mBmxdw1pG9E2bLz1wYoTLf",
  "key42": "5NrA9Y72togyQqRdbh9YN6q8LCukpzuhrbAPeL5dVdMXpffCiAs2iEXmezeTR9gPhMzoc84JnPZQobaMAgRfcHHc",
  "key43": "2R8dbTTTG5bRxDN7WvjQFfEhPQAmKtgf3myZDxQFkZLboGBvHCj6udYbGkdP11fqDSyJzBxNB94W26RkPagWupso",
  "key44": "47ZBL6NZMfaQ2NCbb5ABCAVygjRc8shPSPaj86E6XJ4fGE9C4DSwFuqxztUVaAJCwcN7gwizcHbvkmZEwhWePQwG",
  "key45": "2h6dNDMeqPZeRTSEQWrmHh3BGt9rZbRbFvm2nakwAqaYD4ya7b4i3WFV556EwkFBG9ZsG2BkTeTuyV4ogHUvsvWi"
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
