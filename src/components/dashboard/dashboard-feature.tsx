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
    "kGwNFBxEJdb7W3TgKFWq7dt7Camnue14Hh4hPZ11NNLxj2ypxjkSnk2uhBmkxNfWU2z7cQB7Xaei7CRnLQDCJjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44oWTRpcuBM9QSxStSgUc1Lj923HNieHyRmxgEiykRhhMNmZRKBNCd49jMynhsqCZyW6d2hfmsXF4vuBjoMzJUNq",
  "key1": "4Ph7heikCRmpDnRFxPEih1XuRhCeisNNBdmb4gRa5FoNGYrxz7jcFYbj4ak7CM74KkC2b5t5pPyNHFpLC36cZiJA",
  "key2": "62j3kywATZQeFd6pC8JjnB2QuugRk7rc1VnhKskWi3pNGiFHHj1Cdc3hg6VotQjAK8KMb3pUuPL9WWiJAsAaXeAx",
  "key3": "uKP7GCFLFFarAKgwJgyTdZK1mgizbmcZhnPyCe4KP9FZx4a3SFcKxDvToGHhhnTncRh2RUcYVocmTj1CmBU9Qnh",
  "key4": "4skopXYoXnyyHVbR3GrRaDjRukpeDYLtEyKguAwRVeLinBPjF6sHcQmF9fJvNUGZKWJi53Uy1Pz5JzQ6ZfvA5qN7",
  "key5": "5wuFFc4MmPzkHvvAWVm3tGf7UXQcSuHtfKtP34hjebLQ8te1xUk41Wttcah6TgGqiUNtu3xrraTtpzwq3cmTCXDL",
  "key6": "3Uzw7RkZqMXMtvNP3ZXQ8z1bgiRDKyEocVwZoFG5KiZZ1G67mspcSPfcgoJ4XTKyFKT8cRa8vUW6yUc8VQeWfda",
  "key7": "4ubJUJT2VS5WjvgfQpz8Ecddyh6PUeX8ccHQoKRDKP3v9amc9CdAxZ9fAn51JkX5HxNd92Amb93pBvoFVHNrqH3R",
  "key8": "617iyX3H2fGCZtDL1jc8ptGnuSAkr94ma2Xcrh8Hc9sr9U82n1djwAfd13h6hwfU5ED8cHUfcMRMpfPARfhW1L7g",
  "key9": "49snLhN8UPMc1mqW2vLMxCZPgQG6wEeW4fcJNKK19BR8gNmh7JJZ7CiCsuS1g2g9AcP1fHCssZqD5BmrpzabGgfD",
  "key10": "28BecMxMRqE7382456NZsLDfPXZfanZ8natafFBKLLjZgXj9MjUkFT74b7CEucktBRQRSZoeHG1q6cA8KJ1zAQcF",
  "key11": "39HMCCQ6kdvNNVWjYbSmvTwZuEXzttQSwfgqogbggUSFdFoz2fuAJYUe8yeq7hgW8mF2KwMzsJB1zfWgS9Wvi4Be",
  "key12": "4WvEwgohZ6bT9xo9AjK5uAaGKoiPNci5wAx8AsSncnshou2DLu4kEkBY7PDj86PD87jBnA3F2kaYYxJYeL3ycwHM",
  "key13": "2urVwYBDHvx54grwjvqmaGhbARDrvvTmPDHBoGW6RyNt4UnVomhDgGwZEwNbpeGyP2VUgfsADnBSWKbdVrinkkfw",
  "key14": "2j9FhbZ2GYzPKW65o6xMdUGRcEc74TKydwd2H8yoLykH3gWuErTihYJ6PNpXH5ns9axHdJDeU6Qjj1xvFPi9P16k",
  "key15": "4mqqSWvskfaEGXhkwFXzvaQf452AdfCqb9KDTVNHwMs55HTymubYtjEL16oeuz6wzQUfZLGppn1FqwbYMF8ZfmWq",
  "key16": "2dcvTANaAasxDjVGW3rL89GzJLwq1R5AUDC8S6B36ZxKjuc2xvNKfo28ig8WRx2gGuRo5t3bFEsQKjjUgKPmcGKJ",
  "key17": "55QYDEwJXGLWMDPnHgv4UmLtBpbgSHWL1KxrmEbHPkqdb7hUtk6W2V3yL9SCZM5HBB8e95bGtqArZK53EUbWCRNs",
  "key18": "2t3GPMPE9wc1BUb897sBGKVGtvuZu64zM9NuA8LXjYuvNcXD8nXpRAJoNb7MDmS7XsruQkaiw2QevtAAg13Jx45D",
  "key19": "4uBKseWFYLyXhJZcjd2b4ZYxAFrBKn7oW9FydetB6G9wTJm1NaT4pLLoJq6FnmnLekw3CAfirf6jUJKQbDTfcsHW",
  "key20": "3QjYbgMVqV3kAAuFMEpvjJkUP3g8RW15MGrVYucVAokDcV7gVq3u5zYJV1hunNsyguNYeUKuRyGb6z8DLDxQN6Hf",
  "key21": "4aN7WiH1ig7FpcL9uN469SMn26xTXBr4BBvLyKe1wkKAKKt6mjQvtkGexybyBLdkPrhLGuHN7ygsVFY8SJ8FmSSb",
  "key22": "3dfYrHfqmmWeDVRx2mNXFqj617xfgGF4HhyLDXpx1DpWtthS6tHx1Ko162nJZzv1cDBww8S9fMPc6HsAwLhzMgJ4",
  "key23": "CorxhiRrEmCbBuJghiDkznH4DhKnvJrn3EqWMSgbUBrjTdoXw2ve2yzmEmn1mxiReRwkVBaasJkkrgHJg1xEdfi",
  "key24": "4HNQcbUKpZXeiNa2BoA7Yo6e3WRkphJEqCk4F244kVE35h7jE7QbQHNiaWZ1mCYsdSKu9ceGzBnxKvHcQG7K6xSC",
  "key25": "deZUmi6CDi3oB1Sswg3kopu9UtehFexiCnHWT9MKcEovEYyyF13sExdBtiZrrMziq8jmgz2naB7uWaF9eAaMHpx",
  "key26": "6PDkQ8fGhzB4UKfRgNZ8mLYUt7fhxpdzxGnrSXM6QzkN9T6SsNs7xoNjBSffHykacQPRzFqXZWQYBm7GSS5wgge",
  "key27": "5CTm8L9QZvB3ERrGJDqFKmVbRkXgwt3B9KRp1aJ3SKAsFsFgwsEure46y3hPCkAZoSaF81mfU15LHY5jdh5HMRfe",
  "key28": "5C6T81Jieevj3BxPc8w7U8VgVGyKn3CBWofmDdfFLjXLE2DqNx86w2sSJJSz44QubzLqHAitq2rX8fTJAH1Ti2PN",
  "key29": "2qZPq7wqLZQVb7SuMRBLoS8mKSrwPNzpRA1r6z8F4JL3w5ZB7gvatQrBb9RGM9yvdPVztv89nVrEgjDwx7QXXeDc",
  "key30": "37NhNWyhETaQoQsNDamjH3Pyrbt14UA3px1uGNQTKmVDGvVKb78TusW5DsUc8at62DrpL4ffsh5En9xm8tWz7rvq",
  "key31": "d1C2jSLCNFT1S2zZP7T7odweqJcJCECg8GueyohKmEsXvwPyskrkjdHevWw8bXUm9APvJf2aqY9zTh9rT7AnrSB",
  "key32": "2CfA6fJAfzPtUHej6CC7cjJdXDAutzTmeJSkjEiDqDASyAtwioSaCrYRvLKZf6PiR4qUhD7vThEn4AmQkSYpUvAH",
  "key33": "538CzAKHSZvvMNDh83KXRYM42QsxHhMw1MYNhbeDCLcgKZ9khrKwp3qS7jdGXgdLJ477acuoSHoQYwcZ7SdmLfMV",
  "key34": "76PcpP8A59iunGmwUxMyvAKPvYaYMHB2fKV7Xx4RyDKUKiV9oYjXAT46owPMnwYPnUw8CUne7NEmfqSZAv927sn",
  "key35": "DQSrPBQrNVMhZuJdhxoaxfrhJPxCWRjYSguyd1juRwYLCDt5Q3fccAB8XLSuvY6jnbJy61jbNGVcFJQKczCb1ed",
  "key36": "3ajvr5Hs7nBy3QM9cVZGF29u1bjCqnEfXTbyULYjgsemwPuK3EWz9tLoyfXSjw9vkyvRfeqjba9D9mvUheTUKKMW",
  "key37": "3J2XNptR9WBVzQV8ZZRvPQ2vVo5impQ9XjZ4ERGUdzijTHCTmnbYL76NENFeqPSU4suXVq2vZWunhs1FmiMeLG7q",
  "key38": "3RPkZe5ivDkW8Dyy6hRPYtjpB6mirSubScFNwi2tfn34X6LfUMkrx6KGdyjw8AVYsHep4x3fcaJRH7ygou7fWZdF",
  "key39": "4Zr8tdZF4JuAEmMZwPHdWRR1hSfrXYCSLSzCNkrcqsg6dfK1zHBx6md1q7KZNsi9TWpZbMAJifDb5hk5NUc52MVw",
  "key40": "5jCxrw4BErEzvUmqdggqAvKQWRg4WdpSAFrva9fWKQ32ZDacyQnrWwJUUWebsoP6zJYBbBWZ7CrBtjc6f33Lt7WU",
  "key41": "5pCiT1faUJxyCrrW5jXiR7o6uE5FoVP5t9UDzj1hHBJMLHtp2DTFSgCVFRoQ8kXompAXKkDH8ZMpHBq32VbrbYM7",
  "key42": "3cmC4HwFVejoeisMXpgeHPmN5T3UYgaNSan5KpiY67q7iU2p9ZMHwtvNhtP2G5ZUZBsDK1xZuMY9661XYvDHfsvA",
  "key43": "TXGb6ZFEwkPgUaZnYrHdACC9auUmzod114VXAUwKA4BCZ7M7p21wVMtTTrK29UPhd4sU9YCepg8sCCG9M8zdfx5",
  "key44": "2edrawFqtLCZbonfUN4QZSgsbzWPFCUZexGE4Z2CbMwKuhcG3Jb4YmwPgvFnAc8KfB5LhTijQW7aV7Nsgi1rpQ1c",
  "key45": "2kPad1xC1vSiMVNJhe12FAhqdauY3sgUHGejNkRKDx2JApZM21AkHEPbx6x4ox9k9GR129cBpMeKdQSJtxAj7HXR",
  "key46": "4VDPMGmW2hj8niRCumCvuuEtQcyKJwVMN6GoTG5YLy7LLnXksLK8aAjiVQvSUWfBtK7mmDETjzALq1HTdxgtQC3M",
  "key47": "46fffrcMQXkKb6KQqdD3NA7y38atdVbgzBwhtnLy8K6bF3cRMq7nFyvTb8N2rRQ3WYZwbqepLfgV3uibzwCozjHU"
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
