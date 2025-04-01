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
    "GXMtDAGsdBLYzAkU3VNKPcdTiiorMsUc1MXomKDJ2CnL4ZwoCusyDrvexZgFZpQxXkwfh5bxJ4b35MCTxyXZ8Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31PdRkePma86cbpkYgo72gjt8TjxNWxrdHp5LrufpetCosdRqJUmLNEfxmuSKsSSk6etMtxDpGyTdeTrEsctxkjA",
  "key1": "4APeaFyyfEuvpuVHUPo14mxGgJ38pFeVPnsrj3bLFgqrZETSh62VErmb1d2sz95NRkVtoCHGdVoopmtxLi3s3623",
  "key2": "4BNm6x5S5rV18SHDpqnCRaWVELb1vKvpMJ7S3NZ5M63b3Tp8A7Biw6dRLGFfr9KVTBzcoKNQzYgCdnRBQeiWDVTS",
  "key3": "3NaVB435tYN5rFRQwmfzotJeY8YoogT4mhKSvDsT2MRi6o93hBJsV22SGzkedN5LEJGrUMoJ9uYfpUjgii8VA8hD",
  "key4": "pbTisgK7SfT1GzBgq6nchBf85ZVtFy47Tvzbe2vFy4jtHMhXLUwN2uWirxYYchZPJf6Pn5e3HG3Uiy8dVK1Dx2G",
  "key5": "2Js2ofoSBVhaK8tUNBgp6Rcdu28FAPLpx1A6pujQAUnye7yURXBzwFaNzjhMVY4izGUKc1frDcpHzZKSvWPjQdZJ",
  "key6": "2oQXKmHxbejedpUks1zDbtgKVNfyH6tf6uigD5a7wYwqm2MtiioB8qrM9rdPHfLZxmz7XcgwmLuGqD3GoqeAHVbe",
  "key7": "3V4sNRq29ecYbKy7qhD8tBhoM6yoEVq1BfxPQLfRE7s5VYuR65pLjmoMbVjtHPTmFUfHxU3c831UVN3hMEMjhxsW",
  "key8": "3YjkNqqQEU4sV4bpbinNqKNBeCqgFtNxfitRvQFLvpYSzYE3QLEoZsJ4zpjyTQ4A67vPSurAweUsyrxvHfcbxV7k",
  "key9": "2WkzhEdfZ9aRZ8DdPpb9qJ88VvUESp25ZWiQrgCqVZJYVsDCxA2jgWj1mbJemkDCQiEKjJ6yfMc4smCFqzuKzqG1",
  "key10": "2AcYarEE68LPEBVUZrPMgmorVLThMP8sodTqRcQ2k8mXZ9SezVxMxjV6te3ZQbxyjusd3suPcaww7Maqh63p1n3a",
  "key11": "4Z3vmCUEqD1DBmLX7u59G7fQ1oF7pDrDbrE8tx9W437MjkEVUjHBnz5J1ZwoqWteBdUvBpVC8xR88EvPexhUrtCA",
  "key12": "3tiucZscBCywwBA4JgY1LLpDMHefr3p5Mzok9vRvtH4i9WmW6wYuoeenTwzC2Qfyy43i62TTPL1Ya4KCHrci7p2o",
  "key13": "3L2zSEXYFFqo4kD2j1dgSFoo7eFh3FsMHZZJM6PxfWaPMZc45xXtrutuDfsZUFTh5VB9tBicgYmBD55jDFLCrZ27",
  "key14": "4NJVaTSa6ubhJTSpPPK3k8DV3fqew2MUaaSncrBVg4nXYGSk4CdoP51zdta1C8uUWZ5Ru9wwaAhyWExk4yCNNB2s",
  "key15": "4Mb1b8hxW8ZAs3mkxrNGVsVAkgz3nzfPeCqAMgmexSYWMZR24VEhSj1n9TNhfqcKzEZFWGkXjyJSjtFsjsk5rvw4",
  "key16": "5ZhW7o3jfCaNrEeotwj6wrMKcDXAbYXrY2712eJR8JedwkotkKFu2x9xpxv9wNnKTKedaz5xwxqb6d8s4BLb835i",
  "key17": "4CuDktQF8BhNtq4xDyozBmbBvnZr8hkzeniPYAqExNt821kX8zjomWgbtV6T1eg8MTtwJUeFGtZma8RqsLPiZinE",
  "key18": "4bRJ8S8A2eRvHvq4uFna3irHLm9UbuaMJRniintYen5V3kKH4rdDVfYphr3UWHrFizc3iqXyPjL9m96P9CyyYucu",
  "key19": "jAZgSSTqTztGTXkiRUfA3EEk1VgRoPat9jFrNzR75QZ32T4wvLE96WBHQpR3sncDGMheKRG8ChAX5tGsXTtoKBe",
  "key20": "5XcuUYnTvrXb1vT8MYFWU3mcyBnzoKy2eX8AFFpeDQocdrCHoqvgqhNcLXtaSayds7khVFfjsvdvzVA9TRscQ9NP",
  "key21": "33n62x6dbnPcWTfHoLHeRRRS3pHqfw1kBrRMZ3nSVnhUCEAKqbAMzgcq9QGrjiqUo75ha3wDm6aYxYTRtfuPuepn",
  "key22": "5f6W6kD53KsyBtJk8gQVVKy24YnfnbfFdFEcqRs44AzvK2teZdbdhtoxmwXVuB3UGYCfPG1Ag7ampyEmKgxaWi9c",
  "key23": "2ZP7J2DR7mrjMkuJdJWHfAHScJw5E1tsZqYzof7nB9TkUBGFWVuyVFJqQs5BBSz5qFuzCenX8FGSEUEWXhY7yPf9",
  "key24": "9KAQh9mvDLe4Pu2cKYg8a9mcUgC53LaBG2H8r4wxLCsp7fTJ8wbUWDYfm6nHM63cFw3dguKRnNs7vwijjKW4DNg",
  "key25": "42EXH356wiKWrFJmmmT7H7xbU1VVeP7YVESW1DodZLAWsRTmJ5Z6Jbze5zrzdKGP3nGxXiz5bVmxxy8Y6kvsCtno",
  "key26": "5AJaNz8E6NWZpq2imLDhj5hR51F6UUoswKwWudJqw3sZTydVyoSAPkt8mQA2WHBZ7GWF4ntzqoY25k8afhesWLFj",
  "key27": "3vL4dorhJyUp4txJbnp4NFqQuE5BiYUDa2U3innK6trEEHFGjTztfJRSNeSPWTQn6LWUMrJBmEbGyzRdCPGW2xWy",
  "key28": "4CPUuR8UtPq8MAvq7jWNMAKvjVd446MBSWceNU6Job93L893tx4rsJQCFqeLkPTBegqgB7ebTiBiHXMHXJS9FhxE",
  "key29": "35kw95yfx4pbQ3zP6CxxfVgou81TGoKT9rsC5ZnVtsVHXuT9fqFYNFBEzKVnbUCtxYBzPki7YdYtAgtVJ8vfnW6K",
  "key30": "3K3EzWaoGqBiL6YgoYa26MCwRCYtoKz3riQ2oXBwXDJSLUuWLaiCw7GZhoes9RdH3qjujLBrDE7ZGcv5bJXtp6ZA",
  "key31": "5xTvDAa7eycXv4anPTr4sJk4RJv5XjredFYoEVLYqbTbtEptvZjnYemjiHKJCzAFxvTdYihgtQ3Dm1eVM6byNfaX",
  "key32": "T4BMnGU89QjF3W3SUNJQrpv2GH7gnRyy2BNRDc2onG5hoDm7o1FBoJkPgJfRXVsQdWmqfD3cofGrLzSx5YD4BvN",
  "key33": "kmK51oNErTT1XaW9jDJWc25Zz5SQTDNYFGQVNeyy8Keu6xFdNumSbLSw8j4G4C6cUBGL7k4QxBuoCdsWyfNHvJM",
  "key34": "59VdPR7YmskmWfBGWzRcXZKE5Vm78Dhf5a5mCKNdjpWLmxovRcELTbMVUM9qDTDt6atjvk7yXGDk5pdKrWSAjcFy",
  "key35": "43dbMhBjiNhNEsbRZefCEARMeutpaELQvCrB7j8VdMFFZ5SHtdvzwvenZ8AJRgt5mCvGRQ5Bj5kfhcN4meRhFDnD",
  "key36": "3WNtfaFZY1FuCgSTTkxEo6R9yCtcqkQoos7DjS6PS9LMU7CGntdHPsCViY8uTdb7XBzztBh8c5yq9j5LeTciFSp1",
  "key37": "C6QvYqYxtHgRo8YcYPChr7FcjLdMdWSZipmRa1Rx43ikXNZUdK7b3F7LUHhasirpmhKim8p8RdbPBi4wmwu2HaK",
  "key38": "zP8JjpWAMpJ4xvHmbWEzrVmmMGKG3i6C5cSX5cmy6LCfkyL8BzMLocnvYR7FsC3vTvDi1kR2dyk8ScmDeUw4xTW",
  "key39": "5JZw5Q3hAwWQFswjRSSESbc4TdYTi3hwe8ij6QqbCFeNtY15aAXe9EjfcprNDHMCynbyivUkUEdzBcb5zcKjrp4y",
  "key40": "3Bm8wQVqYoBPKL646PTPh8MzYPaDhRsaC7yGmcotZNgEUKhPvcjj5xrnWx3g8bFDrq4K3m1nqebAYtN9rk6SGxUc",
  "key41": "51Wgjn6tc19DRtt4XRp9KftjVNYCjBDeKpAikquRCzPTZHFb56iR4bwtS7XySbV65ozoK6VRtoiSkuPAAsCtPNEx",
  "key42": "nWhJcZT3sGS4kZwPErqVPzoY3iSdaU4t7cr2F1zTqqhuV2wbmKD6VyRhZ9gXwHKZVF87kZW4E9d4xqSbBQtaTz6",
  "key43": "5DjYSXCtL5ZRWFunUyoMuCvyiNHpgbTo2KwoMx92X3eiv5QzNUHDfUAoHEjJRPHR79ShxWtvHwtJRT42MbyDBqTd",
  "key44": "269p6Be1CWmrJ2aZPiTjPSJfoDN2gmXyMjedNivhDKy5xmrAoUfmaHCHm1Lc9WZhncbqziUTFyBWkVvL36Ta1jpA",
  "key45": "49BigcJGEupBihwAPiN6uBLXnZuTK83wptDTnGuvv417eLqCHb4gg2VYUWRP2uBiR9BKrSndaKPqCWYr2dxpj9K2",
  "key46": "2yb8yCJyiqM1A4kAfWRx3e4hj4yedYhYir9dKajt9t6qRTSGuEEsJ8XrYLLjyJ7513CV9xBsBZtksZg32zLkBfj8",
  "key47": "39RkWkPuhiGSQbSfdmb6zMbkR1HAJAhwHzEJaNksySGqKLvn8HEWkS2wXcmMhk5GDhjaH4aNToomxuVPmXJADUVs",
  "key48": "4d1VTGxE44NARo7wd4XNHMspzc5KuWdYRYy3HhF76wiTpGPmDnZ84mLUz5GN9zmFxgZFbpj1TsZ3RJY6kMXrbZN5"
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
