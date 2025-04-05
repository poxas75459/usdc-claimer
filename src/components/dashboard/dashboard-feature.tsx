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
    "4mEMAYLnMJpiZ8qKf8sNTEU3HeGne9hDBdc3wGyQzKf16a8MiLAuU5HTDqtu7BqKLsSb3D6xq8AXfWDuUZkKUpkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SjZ4J6dAT73H9rf9UTXY2GUm9EYPxTzZagKAb3nTpdGsiBxb3DosyrijLojfFrRms7Qy7pppYdSkPxPTah2cfd",
  "key1": "5yAZnSxKpi8YD1sSZ4GaHEYbeZWSQiQYp1zFrzNSJJP728Ys6gPjtc66G7cJBZ3L5yfxWDvLQbDLkJgYU4FyyG24",
  "key2": "E83skzrtCKPe6yvyjJ6KSnR9A1ug8y9Ca4TRDmrwRKv8Y727dEpy9WjiEBuX6QNYUJpvhnFVrYRa1Y4v5zf3PaH",
  "key3": "3E38T8DstGFcxyfkuV2RfqsaqjZ4Xs2JB9DMEPjJkNy74sRCNu8BQk3vqsti6Gdpva9TNTySaW37z8NfuTQDa3nu",
  "key4": "4vZAE2oCFiismMMDHB7HKYSg6XDjdR8HGmo5Jv6RJgxh69Nn5La8sDYLvEY9xgSZGhNRKoHANMwBffvGkYoDoDHk",
  "key5": "4K71osxCRmCaosPUNT2Qp3418kKoct7jqH3g2CXMtdNSmxvwo6HnuYvbYZSfPXmdzQT2XniWWgsgqFmVDiQb2x7g",
  "key6": "3f7aU4wcC913QQ87aEhn9E4H6d9n8ndfC9dgtxEQkSF1TBJp4MoJanafVSmrXDB2F41cL7xVPiTyggDohy79xkqp",
  "key7": "4g6cTCPgE458t8UQdR6dkR4tGEXCqDAuUxsymEuEsirrZBti8LjPiygwGPe8QqbDZ6fvp3YKadY4GxhZdJVZ7YLN",
  "key8": "4aw5vSVdEv8VnJe5qk8ne9TPmxvCTm9stAJn2TLYk4o4QtA35jsZC2XE1tfbb5Zqk3GWfminvqbpbUtUJoAsjHK1",
  "key9": "wDBKPUguRApZKWPC2cPfgpJZqyNKfaLgvnf7rmVse5VSwBYGWkALNnf4Ztf7eYcF26QwpyiRLhybApEf5tBLDpU",
  "key10": "5xueZwRt9TNNGzaxZuDhWQnKRdT9Ek1xfcuGb8xUMpCz6y3w1c2Ru6HJc8xz87RynjLTptAdmzEofacHaQY1ehvg",
  "key11": "2nUq8yMaD18byn6zaEwpTT9uvEuqvVCaCDbkak8HMs6hehygUV5ma9ekWsnPtefnKZMxRFDgUe54nFDNcUvkXAH2",
  "key12": "4sAKvhFAQrWbkEkaQdbcQ4wMjwPKyXhECJXM78QniDkXPU4kRmZ7VxdP5dHfCaxg2bnjoPF1rwvCemt3ZXHq7DUi",
  "key13": "25x5BSdZpcwZ4umiMkKpuCjugVqksZbkER3WCRifdB6tYYzhhjkDFPGnjEb42aUNUWbXSKSBi1BKVAghrvT89xxh",
  "key14": "3xpgvwJRCxoFVCoNc3ggX5Ze8iuUs9ofB69VwCngnLQhFJLMAtQ3aoSTQJc6ajBSh5cKPnkJUButTuFwHBdrZaKd",
  "key15": "4Qf23kYfBRb2vWTJTPedcperunENBWc1bFoQjzguyyShmdgeSULQYAuLopEEt78Z642W6UwJXVqPY1Cy11mRa3gb",
  "key16": "4AGWGYapMb5GnN3QuuEg8V1ey3imP4TR6XadxW1iJdX2rUnTzHfZ93faffL9h4M5rtCBQsLUyTGVNKoZkDZMK7Lr",
  "key17": "3tHcme7MdxLjecBgqif9fhRwzaE1kb35EkdmwkYQeX7izBQZQFz5DGwf7z3xJnESx1ucFZrVo8Qjep5rfAKgYiYc",
  "key18": "jjHA1RoNP1JZXYeayFA2JMg3ZEDuyf3pZTVhnKzPvbgGQdfKdQYkpG8FpChYhGKF51w3Kq1FTUBVnaCkW312h2S",
  "key19": "2vcw6Vsy5x3vTUXKvQ7uC4ouac89diZ8LXHfr2vNx6rz8zj3ZauXXrZ58aF9KQQ4sfLi7ZBEpyXo4tPVnVSigUJL",
  "key20": "34CqbbDqziJNrA1Ndj2X2tkhwWiEnKwuMY3GFFqsA9cwUp6ExscdoyeaQkGmvttDs4zSZMEx2pQRoehE8xvQSdKK",
  "key21": "PPFWWwYsRRoqHHLF8Lw7zkLpfE5JgwaUr8bSShfLWLKnuoV6ggvV8EL3ctpennBE5MX4ZKFgBmaLWDLJL9JpArj",
  "key22": "5QEongxSvNijAhiMC3L9SiD7JhFnNZ87Nk9mWCaCxJCEbE3Mz15FBaQ4N5M62HuoN3EJwaDfffrJfSkkS4ra4T9b",
  "key23": "298SvBAv2zprYxY28xE6BJ5E5f8wqH6zdaUkVKrCB9tgpvkLdTXRzRBJw68CdFvYEDDPnXU6QG5gkfuTh8RN6n76",
  "key24": "5JWzstom7ufdsjU1No2nCgSScS9LBPDW933xzzpn7DcSKc95WdYVNd3uSLRFr29N8CM1v3v1bqfbXsDCswUr8YfR",
  "key25": "5ZpqMuAqxP8K5C3oQ7TmNW6qnP8HZALxNjm2PoGyvq3DBjMvrxAtcASNr2AThNZZFf6U4rZGR5HjxoY7njoaVrZs",
  "key26": "4T35WDdfiSTv9J3PECFCLQUXtTt2yDod2KPXdfw2mkBQqwJUUk2qgW96yJpytQT9wtdhv6RkMjhajbRGnnYRnrgL",
  "key27": "hrX99StZvNwxBSGUMMt158zqzF8ve7FqdtGVqSC2fsbp6AF9LX7jmNHqKtEDBZYzZQFPSMuACRqzRU58Q5dfcyZ",
  "key28": "4t2cb3snBsXc2iLfLupzMctvh3pHhBVaM8xUcEfQ3nES7wwYP3xUMhpv3KEAFMaeUzAzd2H14TTvexZ23JfYuUFJ",
  "key29": "2neL6iPdf7JKyXGjriWy2BRScdVLkzTrZQoi5bjBjd2rx9ixDjouZ7c1qNBM2zRPjs1X9e5cE3EBJSv8pXjQBUCy",
  "key30": "4Saur5h7XuLVrUWEyspwLiwEQKa9yA2tk2GavuyfcdgjBGSwRnEFqgxHiXWWuA3BGDFxtNv1ZV5TsCZm5hcyotBL",
  "key31": "2mYiM7EJGgZGoizaHdrnRTH7fTZsVXToUWPpHcqWtrrXuF9mwRer9MxH6CYLG3cZ6UtfLZCwYR99Egxav1FJ189S",
  "key32": "3KXkWDe2oYoA716XssLzbPhN4xdn8WujJd6Uc5JKiQhT7dVJqGMb3TWyizJDedKdQbeYiq7ZEE216vcBv32FSNze",
  "key33": "36unow2FSHURnntPE8fiSnrMXZY4P9cyMjr8bFTJRPjGZFi6688YQiKZpZnUVjfp8D6GBY7mUQi2UNfLyyH2EGUQ",
  "key34": "3gFp6E1u6nhqH1m3WieucF3JBV5cGcU7GZ58t4H8F8VFFNuqoRT2aZF1phe7iibL4vg6tQtyv21htfbuVVxxcyh2",
  "key35": "5Ji7bLh6KdCWgqNKZ8opPjVKdjoKViFU7nUmy2cgdn9XNqFeYqsibYyC4AQPhCkyGhuT9hfRm74FsXtQfZTxnoYd",
  "key36": "278otPSqLXm9ALjSnzW8pcgrSucCdyfdLFefbYde9odvjNsumENSiPA2ZKGxSs4RFJ6CSX6Exq1HQNh24qxGD3en",
  "key37": "2My2YW9xSbfXToB5dzxY3uSa1ccEJZAgpMctgzG3ckWQchdWyxPvKZJVVZNpNfUJNM4XiTGcpgjLEMQpmgCSdweW",
  "key38": "2rbDvux3xHJDMnsc2WNikHp1cK9gASX5yXyDsurBNq5L8Cjnp1ejyWA5ti8dSGADqdiB4Jo5DhZYM52xRNK2vA5w",
  "key39": "61osxB2ybBzMaYHGguabG3wWJYu1cU1SYmNxDnXKgA2caeKtrwuFVotwFXBVtWZvr3gYKrB6EeGwNNq3KjUc8Ly5",
  "key40": "4dHC7zrJD3j4ZmQHaSkQmswFMf6mH5UDsGbUjX38HXRhdMAgZUTEMofMTUF956TUWkvKoJAKRiETKkKFiq9TVBKj",
  "key41": "2L8Wgeg34at6RYDUSGsp86k4zVfYENHbDNkMd383kBVvsx9yqHCq4Ko5FuViuj1b5YnKnAoswU4JAUtYqiTX33id",
  "key42": "3nx82HoWdrPwZ4RpUQvHqckjEjAvP8zPW6GfBL2JrhggAGhgDNVcQopsbCwLrnEebQcQxvs4kCnGaMyStJAfL3zn",
  "key43": "4d3Qs9vwVBEUEvTPMF6bfpWJjwwSVM6YMyhWF7XjvVufEsmrCa7AU75NxHRHNgbM1wZhUvv8ecEnSbvgjYxeZ9RQ",
  "key44": "4iBpufDVXA2XsH6gUsJbzFs1VeNjdBttLXvjRBwTaTkzUuWhdhm7zoff1geEN76sC276BEqeFvWTJcS1VKnPtxb5",
  "key45": "3nCZnJFxKg1EEU7NBMQXZCaeZp4PyZeF83uHot3bWGsNKAKFXer39LB7vWgnvdRJozFrAj3QT457mexaprQ7taDk",
  "key46": "5JhvGXpGFT8ZZ3T1SR4BdupSESamAbSobP4S8Uq1V1gVnqPjzpcvQZ7EJHe9aphbu9LKVMEbEUTKqgQtGargA5x5",
  "key47": "4jXsdcry4bXTqsdHuqCJvqxHsjnh94UuWrAEDokgN9r9EV1gQWYHduggtTQUdERMdUPyFwHQ5vE7mJE9iaYH2Nbg"
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
