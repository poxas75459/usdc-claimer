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
    "5hj3xjcwmL4fNYxgD9DXBcmmhX5g6r49CtBecXbThUc9QK9SdDzJG7xv4iF4DKkbYULywzGYn8qj4sX9qJnJ1ND2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwykbHrcmpiqmcn3jfrxjBeicQ4u1u4svoSE3ESSZaYShvapXSiWEbpZkoNiZ6Ne8tWBBZMB6F9KNGwNfhecUor",
  "key1": "9e28ArYBYL9rs2mh1Er5VTAo9vBekLQrE5hJteY3jfcVE4ruaRZCS5iipzn4D517gBcWXwMRretRYNWJCWVLVf7",
  "key2": "zV9P9uvUDeEXzSmfmUbWpmRGKyDjHeWz2iBt6YKfAm9rf7rbSq7Wfgmhd213DD34ZeyK387bg2qgS8PZmzGxpZ9",
  "key3": "2opHDRwLzCPGTRhvuH3JXPnDPyer16CHgPUqMp31SBCPjqy3k3NQsTKzM1Syrvd4tiLtP8UDocRaeMjquxwGx1mq",
  "key4": "5R4YBaJ8gnnupn6DwxqoWST2Y7S36zEvnbkM25FKgZxZNAmz7pkyFc21DwTHsH6YkXtC96T2ATEWpM349iHPGC2U",
  "key5": "3tCo5jZnBZsqoepFp8cHvqqF1YyfUXiDiaV9ZdXsBDGCRdsCm7EuanMALeWvYBUxrpWJrot6HW2JjyW3C3zGoAT9",
  "key6": "2f4XKm5zGiLnjS3To1oeG27LyRLiqRqYRc8wEmabADrCefEF166Kdj9UADpkMNBGv8YkNrWTaCdyKENKTZS8WzA1",
  "key7": "4XNwUZViE1bVq4rgySUXKnTcGYuUd3gMJzddj1nVZbC52dNktgvweNx7uE89u1pC6yEABsvtE9EokdVakTy62Hv9",
  "key8": "5iWKLgTLZobS7gFt85MH42GsjCPwitD984pP7NzZGAypZd7x3s3zMqCPqbDo1uHbuk4VY26Hjgkc56BV2dBQv7Xq",
  "key9": "4poJMXrgrGShrfeHKw6mj2MiKxvwAgYUTdewnRRSu9m1G9Y21Ju3z675TZMKbtedjMatxzy8K6qM9DBwL1jf7Ao5",
  "key10": "3tcakC3ZcZZjsqKrTpz5EqyMRH3jQLHhGpA2X6b6LnFcuKxSVfXE7TqCJP6dYzBnzMtFXeV5SALHaX56kXQqYok8",
  "key11": "xbdT1VeAQEM8HRqWCTdEdUaayLEdMHpvW5byCuunACf5vy87CkWtZyJup1LaFMSYEd5uDXwB2XcXSu3MxxjfBEg",
  "key12": "5AyDsewK7xEG5UFVNPpVTBVfUPVpvCtGA1Jza5vwjbYEmLfedAri6DTjGX5VQoiiXLgL4ByTBuZHeRqQcxNKVskb",
  "key13": "2QepwsJgXeJyZ8j2TiB362sBChmizoDg4sBnozkHYByZU6iFJrxHqrqUwyDEHLvzFv7tqHB6S4UEarHu3QnZ2rii",
  "key14": "3XApoULno7r9t1jqwg7ZA7AD6ccBqqUxRvLhZTe2ieyJQbDsMFybTW5WJzezYuCmHztZ9QdwY8tJ6RPBk69LQ1S5",
  "key15": "25sX8vnJYUSSJ7TH9rKjWoPaVqsfpYEYhgYBKdLbK3xxcVhs1X7bfJzkbLat1u8QNsC9yBMucKPsau24ZCnVP18H",
  "key16": "4ww1MQK6T8dBKF1HMBE7BnQJGuxvsFK19EkAGqZ6xSAMb3mjGZ93mvZzyaDLPJQg9MpQLN7PZzwpUa7BdZNQRZNH",
  "key17": "QCaFPR72VipgcGpXdyuAomyvqVBZnYzNWBnLASsagMDgYQaPkLsu7EHZueZzJaos9xhbRakRMpReThPvU5ajLcx",
  "key18": "5csDvaZ1fe447VJMeropHHWB1mBxVYRLn9dWHTyn25H5dLofTW4Rsz9SUyCkwFT8QJtT9uda7rRKtDtCFiLhaH52",
  "key19": "2TSbv2TBeRN6QjHSpfXdXMaC9zEQ8PgP8bk4NUFW41kieRXuBdN1SuB1ABmpPWXceZq1wPbw9kNNSgDK17u5cB1E",
  "key20": "6kTAcCGmotWaqm7gLrFtigaCq4MVHksJkSjABtmBXb2ErUwNwjjU4KSHshx68iizfXZfsCMWUiSZSNaeh5afkou",
  "key21": "5ZMERRyatANFDWa5LiATe193kGxcAJ6iXQGRtu7rLqFKmQRjnQpNzohExBFndEdH1S779GjvqLLzYAinbnWpXBwN",
  "key22": "63mGAZhj41urG4TmD8Li3djeQ45PSLTzrvSxoQxTrTnwdzSjmFij1M82eD6mcdehh6mMtQY3M3NRwwZhfevxurQ",
  "key23": "2aPw7XA4T5YAJgQF6bYkGFn3JY28S1ZwSfBvHRKLP18oucTByvyc7KKisKJWrWN44V2ygjbAigFQzXwzTrUJ68iU",
  "key24": "37UY42WCiFAAwwHjtqsrtA42GVindoa81gdpYuUtVxYkr71mLLXiQgjhsetSeLsTSZjQ9r7VbWY5GZossY6pWrvU",
  "key25": "zFDa7GTcR1MmFGYhydwwVQ14NgQwPFdJFvGF1zVEbGrPzqwf7X1B4HcME15AV33XjKdSNZuvtPac1J15K9dMbEK",
  "key26": "5hNnCZMeAniFZHjGQfk725wxpZmskFtDkVB9m35oi18wjySXp3UnGUPKxuNrVVRnE8d5C3v8Bvn96saHVJTPwwKg",
  "key27": "cab3jeDS9r7MrftPpAXpJtU94tV9qG8i1Z1Atx27zy8x4pFeJqjzNduJQGnpStvvxrUm3SwYgnczRVp9CB7dGD3",
  "key28": "5FjbE15Uo4gB1RTVEePdqztxJoH7ANiFELT4CWKNi2vaPk15Z4wZcfBrX2LJY1hbq8kZiUxrFS8BePTuhL1bRvJw",
  "key29": "5GBKVr1JAx39nrSMdHjzLZbZip6FxBMawHtUVnmvPEUeA4ghaBDouvPfhw3GCToyUdF1FdXygx4gq3bepJRX1U5R",
  "key30": "ruSVLBbNHKLEs3JccBMUTGJpNQMu4p6qKMf8Fe8tFs76iLon1PswFiRj9bsL3ijnwPYYr4dLwdywCXZmcgqCxsQ",
  "key31": "4fNJFPbBWdcZkWDq4e7RRUXbYUrXAYuXmaGFENyLz3eBDtprd4PibtqCZpZ8bMuFpa1XppsntUL2SC3AJYuCmuMd",
  "key32": "4Bq9LbYJ1SPRX4qWfWQr88Hu1BZhFLxwEjAk98Vx1SAZkz8eUVcrJVqQKf2GkcGtpsPJ8E6CC8VC5XdJBzZmGbfP",
  "key33": "56CfA4jj6bh5orftPCU3pYrAqKJpojaFvqEuXsPJ9EaqGBAA8RsCvC4uMoEMLtrKpUQvWYGjimLh6a363F5qJseC",
  "key34": "EMNqkSKeiQiuWHz9PcZWV8Jix1dCTXRLXmvG73DWz1JHCGGCd9StMeVto6HVAs4GtsEvBVZst2FiiA3yH4pRqZM",
  "key35": "54URwmhRaC1MkHiNRZqKAg8Rb1zb6miLFHwY6bNZQVant7shs8SBSmbph8shc2FQnrWQsiUgByK1uHwmGv5fEJrG",
  "key36": "4CmZit83y1KkZqiqtmrirTiHADNqAeXEzr9QrA7HAk7TBXpRLFS7dR6vPERtVhzMYzAtNn4wKt8tJUoZPRAyhML5",
  "key37": "61oxLfqaH6dpZvchCAPowsos4rdV4VvG67qnhjkozYvKwafKcqgpjbTeCVZvvfnLhaxujxpYz5mcqpWabA7AyamN",
  "key38": "4jbTMRuPu7o38SSfaRLPUHjxdxiXC6kq8qAr1VfFGCfjXT1GtFdk5J2PdrCHxJXf9afCyaaoScP7Z4EWeoHVdhFQ",
  "key39": "49gkicgN79zQv643pdGMWC8rRkthFYncwynnsVt7ZykcYgquLUFo9ZTzdFcZr25bi86s12TTirGSmkvu24q8GCku",
  "key40": "5HW3iygUP5uJwjGM8kELJYPAHwsQd3Zo3m9ycti1s9YvPae4EkUyFnkGYwBcrWA2vjDRFwL6x8dwLVrejeDNW3qH",
  "key41": "211ATRma1UU8ud5wcTbdxxd1Tjad2iBddCMbvuxEwRhpR3p2REacTSixYm2bGTP9s9Du4bP6jRTQdtZAZCEjmJtT",
  "key42": "2nbUgGG8pBueggYFLRQWQDVH2UtVD4d19qTAAyGaCLvBaLAxWcupYxG3Hb1LyTUytwS4mFyQPVQrK14CswaVosva",
  "key43": "4r16DjswBhhVWBRZ3UQmiKYLX9bVosgNvGKpcVMj7xdGwNR8Qhh4RKfDo67V8BjCouSmbZuM1HDxw3d2vAyY6FEk",
  "key44": "3AUaMyQBMrnQrSegxftLG62WND5WPLHZP1eJXpzTnd3hhBRM9WqB722eWsndRhuphF48qqihkkwhoSD2rrkxLXgF",
  "key45": "49uYNZcwBai7AabSNNkLNLiXtM7ZRUXCd4ry2GFRZvgEjD6JejXVEy87jGc2JkkVwt25AovDggbYpgGs37QsDEKh",
  "key46": "2vt8zJ5C22pxjxJ4tfumuKDyyWTMUdrgozNN8xz6kb81wXE5GpGpZcFVUzD472XiJr7NE7Mo9vFBxPuNgeyMruhF",
  "key47": "3q29Uf2i72s1aeZkpBLdW343y8SUP8nq7DysELrnUnRGyZWi1mFfw2xCGCTA9asD5SeEt7nvHDafnCFdchrTCTnY",
  "key48": "3KWUSya1VuGc7ajnWiHZjKa9wS1GM8J4trop2V1p2bTLg4TPvhy6KzdLRW9Pzc9oLqtStRcsR6JGzpcbFSky234d",
  "key49": "3qVaa4meoLj8xK7HZH1zcbq28X7CK8jdybxAAzRx4Y791S61jvupmitFuVr62xEbXMxkBL1PZeyd9kz5q6TEqQZ3"
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
