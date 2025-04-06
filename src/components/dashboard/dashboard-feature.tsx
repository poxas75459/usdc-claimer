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
    "2eiRTHrnrLCs7mVNWYtTxt2JKyTKx4ErcrkefxUmE5L7HvbeAD1F7Zubxz9VjcWpYGZTZAhfpXviAMxKVnRWgaWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6V85HLpH7zV1t6n3qnmn7BMuj6P86gv5sonhhUoSccVqTbeAWdreRbe8JkGHhTxRV5oVxLWP1tX1bqWeezMmaz",
  "key1": "7fziJyfQpyDGWBefhud5F3dzP6MJPCrCHpEK1aDYHiUSByKPn7zYwQPttkRkKAVJdjQ5DVrEB9kptWo52D2uKKy",
  "key2": "3LwR9GJRwxRGHBtZg1L5MpQ4onW5DP3iJEacuW8bfcE6zYFqQW6oe8GuUdNLkb178DPy8pHLyJ8a5tEcGRD4Unnh",
  "key3": "4wsk2Ah5XTkUKfrhKHwAm1VaQyWsdS1LPcd7AYEjoPVfuRdi1BgUTxPMtd5AvxxrBGxqJkerfo6GXKYnVzMQdiCs",
  "key4": "2vBZcoiPnKfPitHeB15BsjWWAc4f4nhY7dj3Awna9QCbUjw98SHXrEmQWozMgAQM1VGSWLZYyvNxrHHgb3c5E9Ph",
  "key5": "5Kb8qjBkNhyYfRLhaPZJzLtt5Tnd5FxtgrPwuK4zJgE1fo51XyotPL2Wgh6rNTU9oFAQaos4Chn35Snyiuz6tFKm",
  "key6": "5dnStnHUWDL1WR5x3XobFggc2jdP3ujb7hRVwgr1UM8GFiBC2f6et4ei3MPJ67GHQbA7eYcp2uwqFziDRE35vNra",
  "key7": "5mb3fSrgRku3msEfCvY1idp7G3h4xUPhB5sSqM1n1tR6xdqEXii4dxuQu7pdRgQ2FAM3BkZZDSFcX2AmJhtGcCmD",
  "key8": "3GjvV2HSP8egMkPqoNJEQS2QcToGt4PHmBZS7K6ecSQ4PNGtaNHKgx6Tcne8GXvJ9BfxcZMFBtmBgPiUdEhaKEC3",
  "key9": "LcoxkWZvFH6xQ2f387u2Tv5p2yueCLXLfjoudF2ngiQLEnNYCcJ9JfBQHTzUZwxqLJk4epBnyGGM247SRTgatBq",
  "key10": "55vDfKCrYZ3ETvuNP2Qqa9QsUTkVHF75uMVztNtSqYKCqiEpZdMHXMhF527Svwrz5m4ChxUin7NfA7zjLWLXT6Dx",
  "key11": "2QnHisKWnpimxtSJKtWb4uaLD8wn3bo7VJ6RrdXCr6qCh5gPbLE39unngJJMHJggFkopnsGCXjfPAG4qvcwYhneh",
  "key12": "59WmBvSEpG3cx1mtkvQ8tNongfCif63ZiAzY8F4TC3Sg45UK2RFw6meaDevYnDuKtcLXwHzNwTxudv6jX3Y6vW5T",
  "key13": "2dC8E63RjpxnsoWXbLwuXVo55tjcxnfjGAXxrs4NV4dX1EKFJ1z2he9TTQj7VZtryABounvnucayECdDUDK9eLzF",
  "key14": "4aR4PxL5uvquFqRFQuwpmL7E1T4RSUtPBWwBfbS2jnAViH3WEEdjfxfTCd9FJwr2XxW52nu3G7qonGVx1g5bQmBC",
  "key15": "2pMX9wZUgVf3V7TiS5XFw8RpVnhDEeXiZxpAjkKj193maNtCvxKa4PZ1rJKzG9tFH35ukoREJswPvJZRBGJsEAu4",
  "key16": "64BVXFeQWyF8c1uY3GdqbFfEruDSmGg7DhuuXSRaAYTvg7jcyEXScYgU8Xz9RTFNuAKiihxAd4truPt4RhKb2mWx",
  "key17": "5KLguit8nQBB3Fyrj2Qpfb2KWJwoqNwAZScXx3MzwTALGgRkZfi8os1jA5pvJ4n1SthxYWo71eRRfDtTALRRTuNk",
  "key18": "MsDAz9QpUcBjvZPETTYnEvpFUhjue3jx57Vwi9UyWXdR72zkQXNn8jYrH1PtnncEWuKt1F3ArcuoKTFGt17eyZV",
  "key19": "3wS4noXo81F9FzXK2HKVocHm3hGSzBzVA9oWiEtAQTh13h38qMDSAfPA5s6uQtMyCPb4JreixTGQLuHDR9apnJRe",
  "key20": "4wkXXG67LdV7TcYXw1EHDCmoq9DCyRgVNrYjkz6r5xEWBMLKVG2HUyKAQCPx6tKoSEgUGNLEhHkbanQbB37T5BC1",
  "key21": "5UME6qSRjo7RLdhGHir7Q1oqJ7UsZssqp33DEF6LWubSdiX1A9A4xPNP7c1TynbNeMm3jFLdGrJXmwWffFJxKkSS",
  "key22": "2yoimfSv7n5WPWhEF4Rk1UNFyrGzwRH2dquhL5JUoNFCQ6nwyzwUuJvgJxFD2AgwE1MHWHN7aXBNsrMikELHS7aS",
  "key23": "4Z7hGRRLznqwurdRbFKMGrhzgH6WFiZ9NYdk4MgkGayRKcrFys4NA4kow34T3RGQFeLgucMw2LWHZG1e2dkDidY2",
  "key24": "kArk5rxE1BQ2ehb18et6yNXgipRFjvTCNNViHioQ7mXU2kpE7mjHNjJPyHLcPBJXJbmqyWg62SNANCkR3qcqQQm",
  "key25": "5GFZfkP4mMtcnYm8eV6cCti1FHwZDZYqfXvzrE8aQ1ta6hbaWU9eAoYVS1S6fYiNEraikEzPN91GgCG4fe8VkZzq",
  "key26": "3SDZPxeEEXhyUUHYzGhs6KoXWCASmtbJPYCRUdjm4efXyjL1i1N8y7UJRyCqyrc5ERD35UiGAPWhTvJ7pVnJbdwn",
  "key27": "5BwoSx4Fb5e6ay5fZapMcaxEoAWAcqaxL3FEj22QFzjiaiwUqvoN8dkdyEDvwz55PqPisLcL6X8ZDZYyYcbKJPEV",
  "key28": "3tCet1tsU24LWVha2BePMkuPoUN6X77vhhFiJvVBgGHrWqGNLm4C4ZDMAXsNL7Bryr5c551AZdRfMLL5CDbHtkFh",
  "key29": "4Jkh312bwxpbvY49NTYDiANaMV29PGHUEA3zGANDJjRw1z3u3yUApUpvptcUbGHSyiLk8H86Msw7R6S6Zqx8GVdM",
  "key30": "3jrev3Mg2kFGZ72MtghynfXSZdBPEfNJpSXnnfPyqhtYDzJzX5TvAtzi8rMuBhVSxnBWXfJBpUx7oonTBokg34Vw",
  "key31": "44sXYzPFd8Qki58onSHYujFVpTjcPsy4K8i9jvS7tXswgKB3DRkh9bc8SHU9Y2xztBeRdK6tJtA6ZosP7TkZDTV6",
  "key32": "vv8FuYqhZfmM3SxjauUXXtBz6eUkNodwyRKdVwCZBycEp8MJQUCMcggmAM2fieeMh8U3pvJwUhWsDerq5QKR65y",
  "key33": "4tBi2ZL1YRshDGHd3MAAe3o5YncMygKPsR4N9xsi5V9VG9CKUZBdfxGsTJuGwmb7DzP9y4WgycxwHWnV85gqjYbA",
  "key34": "zb5oKPazcyLbtEGNJQA9TRNcU3kYss5ZoFTceXtSAC8U655hKiE2JRZaqBwwq85NSMpm1ae4qpFT6cZVvhdPjin",
  "key35": "2SyYQhZ8mz4oS7tePtsnwaAjVaoeo5Xa6UcUkrQEZjQoqfmbHK7jx3rx4iPNYAsktQoefZCEZRbanguNeBnKjVss",
  "key36": "5d7uWoi28Thq5Ffpp9a7uCSamFhfuhr4HYabrVznqyhXscRD8urLKfB7QHZFeJbZgtiLx7d4okiHUKfQfc5hX42D",
  "key37": "3rMKpew9LdFK8US72dPz1x3YRA3B1SDiSZLAQSCWnvr7qxfrwq5WdJzG713G54u8fkgXLQpsRTxJzQQmUsfrUZYj",
  "key38": "37Qo45rGTb9v11xQek3QyRfYfLA12Dsbqzdm3SPoEiBgMqU7vqQxvc6A7VZZ3xCqJJkWecgLyBkSPDkGXsRu3tFf",
  "key39": "4mUU9D2YRw3s4gUUyQkMBzubnrREdHAcmaG1SPNUn4bHQWcRYUPPEPxR3VJAccsPQvqjyeZH4qe94Ym1eLYvtN9R",
  "key40": "3D7oSnw84YS7Srp2LF3npBv3voRLbDdmQnfczx9PM7CarAbiQKcwDk4B6Vf7ToZjbnYFyutQU3iMmrqnzD1cUzd3",
  "key41": "RTNWamsriPVwbHPvNikUcPLaVGo75rMqxCuobE9WbXLWyC9hgKW6YjbTGHGbWUUd8quCp2QfyyEYeCeSqWYbzsu",
  "key42": "vfk3RG2i7P55Kjj92V5mPZPtK6yULzdpK4PM12rf1W1Mg8LZnRg8UUko9CyrZWNk2264fUE5q7acMWWatpD7MEd",
  "key43": "5uDKjoeSWuiNW79tqL8VgT33TC5GyoN5XbuhvdV5vYZXz4dnUa3wc8diU64G31eCSc1L5xvxEjsoXreMi5po4aUo",
  "key44": "5ph6dhWSoydVjXKhdy4EuPNz9SAzM3rUQeFCHnegtwTFpzVpT4gwNqyRthbAPqGzQkXfNd8fLefks7ofjtL2uhey",
  "key45": "3xXVnv3YTt46bC4ejBNMZQGUX3xbc6uVu4qyChtRQL9pBRtcdNJAACbE6founguw2bYqYqGP54GPxAwsu4YcYWMH",
  "key46": "4FP1hDa6yBZFqvhNYhECK4hQCugVVXbYEfWDthVYPddmvAQHDtutfR1Coy6W9i8NJuMtExtgu5f2RxsxD9DbZHpi",
  "key47": "4yXbn96ELFrBRpDbm8sTBVskFzxu85ysXcRshTERc5F8QGDvc8veuWofFQKX74d4aFgHgmJQMPekmCawmvVojXBt",
  "key48": "25B9oqzDvHrAEgMp4gpA5UvDoQJLLMc3DviGfigw97xjeaaD7MbABK43bXqdFDwwS2voif8cZSG1NDBmm45dEPUo"
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
