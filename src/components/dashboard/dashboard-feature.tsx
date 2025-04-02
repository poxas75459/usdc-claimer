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
    "uhboNo4V3VgoC3cCU6tKbgVnoRWd2HmJahM9p9MJvcCm3gcGxEPr4NQVvJ8Xdq3jgPjxmakRcMhmzp1SrzRxspG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8qUmMWBfmvskuQxLwqkDzmxAjSvnAQpEzPW5yhRmCspcH34Zdtw2PRqmNETFjeQ8KySBsGEUa3Gkkpc3oewSvU",
  "key1": "3EAL8KrJwq9bFN7WtWcj5qG6jR6F8UFCyGds4G8U46uyun4FAxXSEmQQ6GJ72RX1E7LeQ9AStwSXn1iaaEhcRDCJ",
  "key2": "5mpmJAfN2Cs6k9y316m3bcRTk4Exz7DirXdu2E6UokcJ3nwE8FRoDRPL78QXGvN9u4kUYpyDahZkwrXrQLJ4ejPg",
  "key3": "5vaU2akBT7HZVXEmxksg2jJoNLcg91PkCp8WiySNdmLmDw91zXdVBk5xXfxUmHsFCMnyjMXgzLgjShPGH9pPwNKf",
  "key4": "2gwjjLv51pVCLsh3BQ7sRuSG4kJkbPBE4v9HLavScWPz3cok6AnaYxdftFWVWKenZJky3FmdnVkQSsnf2kHGMbAZ",
  "key5": "indLnbVDMATb1SAB6rwWVBwoJ6ZvAPz7CDQe7apFJ2W7L8vVfVTmioB8uJfVb6qXAYcBQ83AxBAi2bYggwyeqzS",
  "key6": "56heEetok2h2TDcVAxhU1rnxa4Ps7PzWCpRXHGhAdn4atxwaUUkd928bdC5jyefWL2VJfekpDs8yDs84eYcAGwuH",
  "key7": "btDX8V4jr4mLk3vh6f76tH2XLXYKcFdot4zERcAZcThYUY1quTM1XPKPB2EMQivea8KJdWL9vtht3ZpRdD4Bhtk",
  "key8": "2bXpWFcT3WmnmXFHTpDWEEeouC2AXVBuxvGCoko35PwvQswxY9ZWWz4QwRYKTMNkwdxeEx4n4675QXEF7fPoxAY5",
  "key9": "4eLDc8G2jhdgyZut4KE6Jd37yunEKfhR9RtEo1cv12mtznWUgFKEWgLACXmqGVeyGC5gNPLdsDrgxpkK2qeHknuF",
  "key10": "44cgP3x7sSEWELKjp5wTuKtyevfvfLghXvdJaUGSmpLR2JpgL2YLvyK3L38LtMKEYzR6xcWfE1hxKGmCAnTro6L1",
  "key11": "4LyniLvT5xEkZBxK7SwYzM334Wg5e9eccM4Zb66YTLs8ADqT5YF4hSdMhLXJRMfUYbfN92oaFEvWLSmkUJgQ7heU",
  "key12": "5Lgy9xog84KnQnwn6GXxMRfAT45CLeb1kfUL2jPiRMX715dgcqXebGE8cZzLT2fZxVksz4DKFA3S9VACZvhyunus",
  "key13": "5DTnLr65yncmmm5QfFxQuURD99x2d3jVJe8m1UiXTwaEXt9mxH3FESvswjQsmgeTnNikJXeEAKv5gpqpTvQ9ywBB",
  "key14": "4hNCpLrW629wFfyZ786vFkjFDRaRPEdUP8f3SMq7W66L8iMC8NVVFnZ2xm7FP42eDYs6XYbdviQiwrSQyyDig4Et",
  "key15": "eDJ7ZeoqV2V7n2Rto8WTHUor8fH3mnTAxXVNJs3XsXwjrbBLZfVJbpjqLciMoYDiqJfv7m2sHaaz8q2aGeeZAHK",
  "key16": "2yS22sBLs8YfjMusY4iMoqXJUXsc5f15JQE8dVBu54XUHkXbFXPjWMEGLjN1FtyRBvapci3StVKr4VgUGmYcGyDx",
  "key17": "3tjLjHwEuEKpiZbwQqzLQvzdebrJJF2fVhhBxpQGgcwSwDwE5Gb7zooGxbd8eGw2QgzCz9Mi1pEouE9mHb46jKCh",
  "key18": "4VxwUWuUAYofp6p9EhdA41TaBHzC1ovDvg6j7GSmRupay7HN2dzZoYUaLsp63wSKw5bP2v6dATqELPeQhnoYBKKA",
  "key19": "5svbwdH7v1MxakyZQ8SPBz29qSRZnU7zy7XSvbkPorNPiNffy7VDzjp4n2epWURXn9UDKaqA8yHpgmqar33XiHWt",
  "key20": "3T9WUmPLdnB7GgKqWXyhrbohzqrMQ2MDQyxdg9jhKPXosNe8Uxxvibkm7wibhiUFH6aVejReE9Zc8Xrd5H73dDQQ",
  "key21": "5BGTaC6sDduoNmbPdbMVMKKi5zCZ2Nk4jvRJZxBysWwwsrzS81LHcdn8p28oPWSaroqFNaQmzY2YYMdwH1pgt8cy",
  "key22": "3H71D4S7de1U7wv9LGDB6X6GuWuZ1yueDY1d957hzbDFA5aVMGoaD86MiAodwshvBHsBcTewYAumJi45vFmQWafw",
  "key23": "2AB7Y3oUBqTamy1yFbLJA6USLfH9wdMSsD8ckaK5o3pjU5oRPTWNRQbtdMqPq3ddMSVUwCM4MGKgjpXfSS4PP6v5",
  "key24": "3RvhcmgVt1qqY35pdQFNQ6RBPCv2t18qdrp6TuNJZ2KBov6x1ScoKDTcLqDPXqELNZD3uVWZknBKidGX8NE9kXWA",
  "key25": "2br5wwR7P5Fx8qkcoHzNavoToxaXJp16up3it1A65kQgmtzozCLFGbiG9jFia8A5PooDYp8mdXbN9jmNKrhfQKHQ",
  "key26": "3YCV76SB1X6mdPF57oKs5kJjnhWet7kYd4i3Mscg71ozbrBPBRx3drRN9rRvJrEiYGg1ZR49TEe4FZpoeXpr3wp7",
  "key27": "2mGJ9heqqGcdHE5XgbBqMphBGfPv3mLbN6STBKJzqttTZGABC5HQxvhcwh7euzLhj3sRgzkvdbPMKtgoGtCAjNf",
  "key28": "5NgAd9s4hVssnnma6tTSsUfNpzb7DMxCji8vqimZKKHSpYg6p7fPHpYX6qd6BxDsQjNteHZHDuSXu9JKnwavoyvF",
  "key29": "22KvLTM6WG9jRismkciNeapVyp44ifPSV9EYWnog7XboDBpE8rkyDEv9TJSEdMjuM9wT2E6jWEAKrCmiFpdRRPhD",
  "key30": "metpD1uGiSDjHcC5yqNkizfds7eDUtFhmda9fCBM6Scq6iHp5VMCJTD81Z4rfkmwrwmkYyjiE5TG2oLnhukeo8S",
  "key31": "65CaQQNZsWdU4sLakFssr9pvZJxmhCBEJGySLE6dtSeWLsZ2uQf94bw657DzzxyoeWkDNUtv4LuLVoYHkPvz9Gav",
  "key32": "3aZsuhCE7CXvtLP4PeVsiRLuxR9qfEwFPSuUdqeHRqGGAX9hBpLHsgtMs9FTokPe6ZiABN7kndUKBugUcXEaL2Uc",
  "key33": "4Nm77TbPkEYPTNNiwjKY8soZJc2UBLdUv8ipzwm25ucxq5FPhfsgm6ZTPZCk8CxRAKxacJpRCFndesWy4BHGG6cb",
  "key34": "vmCM97n1zahjhcnZy5H8bba1sJKF7mH4NfPoYhDbbrkxbBbz7XhAR57P3ZVTAGcjdkUGSHgTHuA8MgZUxKcGtFx",
  "key35": "37obTfQqSGwAh7L6pr1qjx25J33Q297E4mwsqNy8oL8GCs31EyZXnrm5ejVW7yU9c2f65sLA2BbCcUn2KQ4cp2dU",
  "key36": "5Zv4NXVmjLKEBMByaYrhwzN4FCcDpXkuteQUJSGSJUBoDJRvgb2Fj4SBjxDxTRftRjWEyWcSvbost5vE7mhkVnww",
  "key37": "5iU6GYayVWYkLWEwEHTiMoAdF54s954Q25SSzpv7XVDHhi4yjQqppkTE9tGVot1HguLAvnHbNYsk5RbDD5aSjRVh",
  "key38": "kMeLVnfUif9dK2pKnzcyMo5ATjVYQG6VWYsFmMkJFG8YFLHwYEE8s1yovFGFtVj5xDhoktJv27JPLurVkAP2G6p",
  "key39": "2qJ988qWcGPZonVwVfu9yVpHs7ctRM4TLBnuTVfHLGtfRRsiyXj49PF7V8zaDwAfwC9ZuftwuaHdkxc48LZpYaec",
  "key40": "46VmPwrkWgFkz55wjcP2WeyGK7mMSZCpWGLPjDFiEu9pZ37CFeF8PYmESTRtTeEf6naYfM1j97pfXbRVWnsNUqKV",
  "key41": "2sohNh1N2Z6XC9bhoYSJx8428FXNhtSBhcM1DMRU4NQftS3ZGWd7ApqeKMskE69ywxBKaw1FTPDTUC4P8FaCQE28",
  "key42": "4UypCArZB2vkGq1vfWK378iL9ppQ9ySPmGVwPuTgZH1gYe22P9z5rpfYBWdfW8S5iFwUcUgWaD8kZteZ3faV25Ub",
  "key43": "3LCQ5HcTqo1xy5ex1D7Jdd3PenEUcUzK6Nu1u43b9SDdX2zur7ajg9H4XGcjjgEjTXtQmX9ML2ueDvHHWpqUNCPa",
  "key44": "22Mg3AvTh6mzBH5sD98cgyxaePxmVbbx8QsoYRRhxpyG19KZrKtybg7cKnQw9kiXhr7Z89pwkrtiQ91TjAGLn9uB"
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
