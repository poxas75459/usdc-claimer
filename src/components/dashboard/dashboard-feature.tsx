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
    "5auCgfvmvENvk1skft2NEn7QiruPejzNQcXYipWQpdjyGEp5uPnx2Z3aHqVZUy7sVqRUpSv5Y7ak8mHoPXneuw2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDeDsbb4AwGbZa6fymgZz61duYUnYru6Aub7yp9uzU1ja19rzGn3poVckw6CCaEtNEgqLzPjBMCDpqQkM9xkc3m",
  "key1": "2PiJZv2kipGQXUevRDz9s6jieXgYHAEpBJJN2ms5MyedpMTT82wm69EHB3eguQ8CTFcd7GpJHbLcok2c2NGWG7kx",
  "key2": "p5AMJ2vQ7dsS7kAZSDfKEqNootKxNnWwyFGnedFUYt2GbvXMVrzqVScxYQ8usJMxYTg1tuYewWShg253nKqCuBQ",
  "key3": "4vwH8cRHnCeDnneNs2khsHcaHy3w25CKKREnPSeJkX79z7D1KnpkgMGu3eMdE2zr7Der9c9nQBDGqtbXYfNp73H6",
  "key4": "5MxuoBu7SWGjFEqyyBXRcSB8M13oXmFkxCjktewWogwtvYtjj8mTsnQ6J1MGC4R7U3JuAqdUTVQUwPyekq4xtPSR",
  "key5": "4gjhtBcwYgotqAKjBuQz4uhEAhDkfnMgSV3atSrp9hP8VFY3Q8dZFupWUHQFFKYjJ793Nhjv2wXFZnWCiSNTvEJf",
  "key6": "3kFbJynJgSo8HiA78gMTZ58f75mLREP3Ktbva53v1FAWs3qsotG8Uenn3dNn8eJhQTmYiht8hPqLKKCMxRAb9fnj",
  "key7": "4VWABk9pWUqqW83Da14yrdJDaSu7cPgfMkNEch9HEdtogUvgFQ5zLWMhbeom5VGpD5b1zK9MTHZdBHo8QrouDtt1",
  "key8": "44QMKY9p5ZjgxjqANdT9kWDhuz9bQucJtXmQytyLKUutSxQHVniifFp1xryEz43DwkhL5q4gZqRP3EbV1oAE9xaP",
  "key9": "4ZfuLGhYw1MvnvZwGg2vM3FmbXdxKhUrQ8MBd9f1bv9kdwSVBUMyeZdXX6a2Qsmsc6SuNvsEXCdGEz9v65Qom4Z3",
  "key10": "4XWP24P3UNiSKCJHa6H4ARQW3oS2un6ZbpQ6FR9Kd23T3w3h7MZ3ekfMFvN9ZhMeyNjJDETLCov7XqFayD5JYWBC",
  "key11": "4G72TuU3TnvX9xwrTgLxVSSh4HpfoQnCvQAFhsHJXSktDpVm8MkPwYVhQeSowmRcYZHKoZdmW5nRnu9oNiBPkphE",
  "key12": "54UhSnnrMNtUjFxEqabPkfcMnBxRnCjmN39nJPRJwtbnHx8bmDyQX1zx9AH6QtqjfSXz1MZjkUyiBzyzPS7sv7sZ",
  "key13": "5bA4BMu81YSxUMkszdoHvE6muV9s3GWjSMMi1pedFa7Mdybyr9t1P7ao3n8WLirJxYtFP5ciXSAYyB6d7bd4qDo7",
  "key14": "xqwSNtfWq2vr9fVGkpz7giLy8XqxpiPAc36ZyhoeS9V6wz2KpQ2tJSwhJPutUt9oL9AU9M6UeAom77bEjUkggSn",
  "key15": "52tQELYP3ZuCnqB7p2FgYziUQSuhsNtHXRyZb1EwoFP6vL4jbLt9MyV7cfRHmikNrrF2FZqwn4VWwYnbfZwsMmD2",
  "key16": "2kFLjEUFAjMkp6vNqsEa1ovzgwBPXGT67bDKapPCUSUWnr2FZjyBDhSc18KPnHdxF1VbXVgCC9dTvpEA1ro8gvY5",
  "key17": "3G9hc7eBDxraFQBmKYxJHjDHmdTZqnqpbz9ZE4uKxrGjuh7Bw9pKS3JwhDZewybEAmgXi1F2Bhz6ocG8jYo9y8N2",
  "key18": "65Wvs1AcbtSSeRXJDodTz1GvYxPWneHBHZdQfBSZXgmUJUXvuGcpMBYF8bK5v3QKqvMXC9L4uJDpZUDPSjeThSzo",
  "key19": "KdRxaqX5QN33dHYtcKFY2cL34AkMtMBVW2J9tD8JgBEkKFFkVgwYfgtJhKfqwYheS3YFiA2PtEREsNjRYPByRoy",
  "key20": "oA7sX1Bty55EGaRLkhQvyH5drmVkEZ5af7xYLCucec6TmxwLpvkbRvNPQPJnj7fgKNooYyhnTBSke3ewAN4neSV",
  "key21": "31YAwPULXNxu1ZFVcQUHj4EWhVHpZNmtGyh5FKz6hj91FXeYqBnfQJ8jiT9TcucYNKvnz3AtvGaEmBfr7UZ9ELNi",
  "key22": "3ZdfSkYm4EMXEUUGPFd5THXCvkDZazNDC66eUtdpNeEtTHRLRBfssxfLaprFYu74pEhnbZh4n7G7xqvzgBC2XNDE",
  "key23": "MaUmrqiwVhtP2ok7gkuTU95d2EMgd8V5EpgDEobMXqngBbwNPzg8pne7Ea31Wd9QYo9ys15DcpC4mQDtpXx82EK",
  "key24": "34mcVzjeYhog7wzRL8iRFiwr3KDHfvfCquL7DbynDXSjegyRbaDMXAs7gMhjNuYSPWriqSuZ9FrgKswNBuHwGRFa",
  "key25": "JGoUgSNjCVpzAD7LL1i8cLsd8frLgb1SDGUoHbNP1vqqT2R8an5JZcKXNEUqYjcwiv3vwvvnoNBEDPmv2vUUhL4",
  "key26": "28Rcqg6TgEcXZN1r14dpJT93yAnPmnqq188qQ1nYFxMdbTDoKTqG8ivS8dqsXdLB3onWtJNywua71CYsnUbBepfK",
  "key27": "43PRPGWKpK4mmHy6F3stRV4Sp2NscJep43izZ2Pnwk93apCgefiY43egCmrKfZXBYpYPuAmU5Km1KMmsNbE7WerR",
  "key28": "5b8Rxryx7X1X7bQDgAsaZ5ccDCZemvkUPoRcBBigrmQXDeoYCrBjuUfyCtYmDNFannFH7PEg5K8dnJDnb7mNN1Ws",
  "key29": "5bkGVgbLxTqm3j2emtCnFp6n3rMw6Kn9qcZZMW8ELsBgxkYEQ1Za6m5XTxRmDbemGpLUkzPbY88eG9kAikRHZswC",
  "key30": "2s2nEauFFds9xW6uQQzZS3xqmfSPoGe5ktNNcvaWykvMX3pCKM5AzxV1RprKMkSXcEKkjF2xfZjxuRo9VWCQ8dzy",
  "key31": "3QBcyKfo6F7W3imMtyk252F16rnAa5Pmur6xuxPmn956Nmp9WwEv6eX1jZEU43FRUXektixPTBHtUtz5HFKocHXi",
  "key32": "4orChZ1JX7H7aQm2xNhbYZFdQV6GeJw7QV63ZWZKvtuuwiTuHFbWytHtwk3Hy63RpaXktzTTRniaCZXvKWxeK8KH",
  "key33": "M9Wfz1CAV6fRksxb8dFrwD6cKnhrCLyzkjDDCBQVw1BuUCcJev92aS3yrm8Cyz7Mvb9FUFw2qyq6BpzkuKkxXRW",
  "key34": "DX49Xc9BaH4KmeWEVpgMj1PFAgbNKn4SJFRgkaCg4VBPoGPdu9TucDbc7Fy3pLWwxB8BqLThnhUzNZ71z8F315M",
  "key35": "55jMTUXmLKRLUXPkrMTGfSUk1sZroQY7oBYN94LjVDyKsdhinkrxcuVUpcELP8NxQH6eDMtry1eApsV9LjzT6ohb",
  "key36": "2MnUEtQZKBhXJ6GFGrHK7RE9Gwzbfzv4eTPPLDcW8TtfGcc6Hc4ahMaJ9aV42hPQVt47BHvBFr2BSJJsHbg82Cdb",
  "key37": "24ixSMV2sXNiLGgFTX97DtbWRmpgc4u3Y1AJgDnUkJTE2FnNGyBrkYNc4KMsnBnMS6BcBqsLHoyGh9PXEm1gioR1",
  "key38": "3F3XRPX7BbnsKwCBbpDj5xhgGdov6Yq4oKgTjidUrwFWJCcUQjWpxwsLhVouFroiH525W2kauiFpFzV2akhaCxks",
  "key39": "4L1xdxGhmRSHnXUcaaBLtYc7PKmbbeGCzw2AqCJSCxKENFzTUxg83ppxmbUUvMqVbSE1XdMBUgBLvYopQLUnnWzf",
  "key40": "5j3kPjs8RfmA3YX9SQgLFyvJAtTuTfLAZfjfXgijWtwfMKPGgnDh8ZhXy5CGFypnDWymf5EGi5jpBvLGY1CA3hJK",
  "key41": "5CSWvpjPFb57qH41MeAMT9aCxHK7bCjrLG49fuUMWeq5u1oL6yciukH6avxdmMav9vBwftQhBRihUY88rpAjJ4Vm",
  "key42": "239gShFCJr5w5s6sTffZ25Tamt7Az56inpSuTsmmXgcYSszLfRLXqwKqQDRQ8f49EYwSa5iisgXM6n38k9gCfhWJ",
  "key43": "5E4Yy7Hr8hvRExnJYqt18wQK7jtaNh53w7PuRNNJdYCWQrC4AFoifS9UBGDikaszu1ohD52CPJZCVM1hUeQtfj4w",
  "key44": "3LZTZ76z7yazZAmooyvTVwyj7M6g5SmcU8EwbM1KovmAWQTmWqRdyz7Wf59kiUb7NTwni34n49MqR12D6LjhgmYb",
  "key45": "Dtm8QdfrM4Gv7ZKK4ww5ZWSHYeFR61GmzHS5s9xvLGcThnViJRW5L8WDtSdEg21EpVmYNDnbVTp5AZrYFz6CMwe",
  "key46": "4xTuyv2ewJzTNNxyJxmbKz9HEmyBVbtxdyhdYrqNpxLn3AZnTVTfTPHmXas9YLoBFLC3KvnxRZrSayyyz67hqStv",
  "key47": "HwGgw1WVF8uAAsKzT2j4PmwdFaHuYcafUTQXXkwP3M8fi32yifSdGx6LmJgXS67zsUKzVPiYbk4fNkrUjxk55ns",
  "key48": "3ncrnYWq5g58F9mLdrzfYE5rjqEeNvgS4KVJmiAdhUsU1d8c7o1L1eFyNnRtGRPCaPvtcHaPP2DQfLeLrbgLaTij"
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
