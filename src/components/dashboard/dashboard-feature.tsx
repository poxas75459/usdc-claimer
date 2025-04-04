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
    "E5y2Bdudf9sAsBw9WDwhTDwkGjaKW7LNu7btmh76aJfT4HgavyaZXk6wy2Ks9jgkcxxtFg2GH3MmMepdexYpPb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jbYN9pSbP971uub9nk1t5djjT1wuQSJpkqKG6Mw22QwnxQgYFyR1sqrg7Em82ZvA7D4Eyh93WdsCf3NYMRAs7f",
  "key1": "5rKsN2LB7sh9nV2iyqyQkHxUJxhAyXinvEpWWwYRZGwaJ3myiq7GnNuBoKjWvrUtYBc7k7YY9JK2NNR7bJvFC9em",
  "key2": "2bz7LhmkiMJwCMSXDjkw8sojxByZ2Drdn5W77cc5p1cWmgTx4oaaqkZyPhZpw9LyBMygyZcWMB8XDTHHpaJu2Ce7",
  "key3": "595W3c2iRTcP7hQZHMMkC3Q8gbPaM6geyGtCt4vxF6WEUxwUAmHZdTSKPdDJErktBHbu3WadkfeQwdQngjtDfqmF",
  "key4": "4yedLtasnYXHnVfntCMP61qtvgFdfBz9ZuMMaMyYDbuFfyhiF2KktWnsZBgeznxmAG5C5ahN7dRj6wFfU1NVwxod",
  "key5": "4XHrSvDSPBT5UhuXjN5AdeT5LHdM5dX7Wf1D1uV33EK7Ua2y69bEMcvc9Lmh5BuwGFuzNx7ad5FLC6cB6zXWoyix",
  "key6": "4vuphunK4xa79ofNmCYd8uJv53xbNhXGPCnJkKV25fb9taiW33yBBp738DoZYTVQdFuJ16WgagucEe9HJhfLw41a",
  "key7": "4b9MSvkBg49gT3eQpbe54Dx9B6cQH91T1u4nyc1zZcWNtcT12ZZXAuCiQPcJizFSeJZzhMhTfkDz9JoUTfQCry15",
  "key8": "3yE2HgKDMsrjWBJHBJ3ipiP7LyFyQCs71RJTGwov2pGE4vn1ZXbnt7GiuwUykqq18DnfunTApnbu6G9mivDSX64C",
  "key9": "5vvmnxANVceDpnHXnuvD9C7SnenRkSKAUyETPncNm1eQQgqtbY3de55rov12X5pNABC7wNUE8HghYWNcLLJuPfdB",
  "key10": "5HK2Hc4m2B27LUbd7yN3rd8YKqrW4SvTGic1zYfGH2foNHfHeiYnSUccNytFszNc85KuZGRvyQgp7F5MgqVDLhFt",
  "key11": "451DHTh4ucAJM6ymxznXbuZ4Krdm3cx2TtV31hcYGmcnofFiTZLKexAYGBULevKVhhHfAPX6wBcfnaetDZtYvRgF",
  "key12": "3wgMTh3smiXBLvm2kYQ7uhRkbUQcRyEHnFAQxmE1JDDFNaMYXGmU15JUgQgHg3beWQhSfPWFAbMED5QNqTDx54UN",
  "key13": "46ZQHY6UZFL7fXNFpHdyvSZn6E9TsNANHR3QBAXNSHNafcA3nVic2RQshfBoS5HpomUwRCVnUoKnCVKt1H7pTrGW",
  "key14": "3X9YUCfQrqVcfeyKRj1at4pN8s2iPn7naoh4j5CTeZbtxAsrcZA3Lka7khvMyh1Gn7pYHuW9LKc8uVycKfYzP56j",
  "key15": "SMmBNA8Mh2JwJnY9PLGfjeFCRPjD269FLSPHQ2T8LQpCzHW9uUrH8NxDQJTdzHowM7Xui56A12fftjExJeRZaGp",
  "key16": "4S7ZgJV5DWotVKe6cTuABnbig37YGXnDjoJSJ1TmYswZqkPd9ReT9TcGtGNrW78bgDKPQf2uDcthhiLRrYhPs44X",
  "key17": "4NW2Q7Zsy89ur1JQZSf6GUY5oF9qx1Yppa4WvACjhY9FrBA85XYP6cxA7ffq8cWmd5in48yNvR5pMX3YrEV7vkcV",
  "key18": "3KyzPwdoPne8rMggqoRtUAzYQChzwxycE4vszLzHz5hoFqWKHW7qGBH8ZPcxgvngiBnwDXasg8m9Yu3rdgZtwaKw",
  "key19": "urCSqt4r511RzC4B3CUHzcubMHaAq8qvijuG5rYHwFs3JdizS3s11JyWRX18Q4Ensj8ejCPMQBJj9WdwxNEWmsh",
  "key20": "4DbdTttyPEfh5gqrTKUdeHuKSbEQw4Rc2FwTBxbBYbmHyhQTsRGZB7XRbusrwK12Srwc6hmyjLgfP5QMbCzHMELg",
  "key21": "2SWKk3NGsXJrXxXAEkFTFuwcnYKNHsFuZRwgRpkV9gAxSsj3WqJReu2NNpi8z9Ug8A3F8ibwxCtPF17jcMMSdobC",
  "key22": "c6utT4gWchM7PPivDg8sSc3uvxjSrMdKG4M36erHe9wCVygsGcAhz1KtUYKQvmqEefuv2mT3ELk2HaWZj6yuiNW",
  "key23": "AtjrVtyjMTNHjzxRwTVeqNYJra8JHV7PrVTEXd9cgRiSrVvdv8Ez1nhM9K5e3oa7f3WTKd2RT2gXvYUzy9nv1b7",
  "key24": "4ZmvBEiQuLzvjLhVyRVyFNGBh9TJk1SCQuhHSKpFoySwZnHFru1wSe4BeMUpQYFWfVeKZRhaUBwYkq2ozXNnEaiG",
  "key25": "vLFh6d1TrUCdJGWgTUVcbYxfHe3cB8xpYEH445LVdaGQzemetMug8XvCoLMrT5GHkgfDCsquZwsKL1ng1fqkpnX",
  "key26": "3emN1QJnjY8xYUANTDtCdWpUJhGxPzwiQrcjpBQEe88NY5qn7c8LyPaWjx5NVZLpD91SvvPTnyXm5xVRjeiwxkyT",
  "key27": "4SpB4FmG4evBikt4hxLZvyJUsKJE2pvBQrFoeaAp5dNEW9BhsiJvZ1np67Re7BTizkx5ab5jRk3nkKspxiKDWNWN",
  "key28": "571Vb7RQY63fB3NRKcUxtFTwMVKginqeN66rUgvB7NSpG3gFR6DrZhoqApcMroJLSL1AZTcK8CemzGMRCJfM2Czx",
  "key29": "27zpcCCnZtJnjrEZeAbHJY6aVUx1RjPGizyca7htU63kwAjRVqePr9sXcHiuqRVWC3n1bxU9hJqGsU5pdQNJEouk",
  "key30": "3uxpi2tQwfmys6QUNMs18crDbmZnW89rk5js7ybKxLDbxG7zfhKhnD3F5ocPCtZ2P2aUbVY8rJrxc77Snz3RtQvk",
  "key31": "2ousJKHSvy2vQ8Y2NUJdoN6uv88gLs1KH5iM4K4jadHZjzAVHSWTwT59ErXoGJeRxuvCFJvwVRUyb24Aw21Djdk",
  "key32": "5Q9fY7LFQAaks9Cte2Y2wLQVn2RojXMbqQHih6WeLnv6ZSJx57gS8MzbQg5uK7ngtoi7W6UTRyQxC45wFEhz14PV",
  "key33": "4g8huJn9ctSns5iQRw6h9n159KNotdke1UGVh15wHg9ygU1AvR4mpkGKJQjdg2LMRSnQgyF7ATodrDcRm2JHwfZa",
  "key34": "3hAmyBkmWcd5LPTskmFd5byCFQUL3F93YUCqVyZce9Q3b58GMicRJFWxV4oJfSL4h7ctNPzbqLLUEoJSaG23BKo1",
  "key35": "b9zpLzuUJH1AZgLc4D6fRtcoVmyD4HkuFC7PTS9MuErQuT4UcffnJfFtN1D4Zi13EfNQttGZxFH9ptRhXgvV4mS",
  "key36": "jJfro6ajTMymKHkQAdtTnHEhhGW8R4mEsbquEBrCWS5tfuWEG7jyhdtfCzxjL1LMg2y53gjRrs3LqJHx25Hwfvc",
  "key37": "2UQK3MiCCviedPd6FqVRXNgZjTLnjyWitp97xvzVnY2gUmkFQshN5Lu95bZAoPZktcHaFoXsQuXGGDffwDLjnWjj",
  "key38": "4Go6Hn4CmdS27xcSeqCY5xRcbdu5HbXCf4TcudeFNBoWzJrKs7ZxwVnJKvV6N1Gd8vvWPH3RDJEd2Ptf3RTwNcGv",
  "key39": "3h1WAzhVgSx2bxv1m5e58m8GecDdgucSyuD7PFzSRgEN8zYPhrK7V7MRzY8idusWG1EwoqSf25tpaU8M5LTaZ8L",
  "key40": "2ZFa7Yp448mHjj7ZEyJea3BzygrUi7wVkDurSafuKxow5Dd4eER8CpiWwMrb2JxBDDyX9Jz4Ar3dazUTokriFb9R"
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
