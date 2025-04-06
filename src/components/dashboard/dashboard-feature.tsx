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
    "4AwVmNvaDKLuWPw6e2Hsa2yhkJMquJsFWcm4uGkhUuDKSmoJKXEfj6pmrsoymrxAaWtJT8q76r9c85HhQN34iAmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FVvtPRVKcrQjiZxDyjKKFAYLn7t2SX1SHcgCEBQ5H22ZciYsNDBHMir1DXmFY8CgYhVUnzuV7trysnEk99Xsgne",
  "key1": "5hTbydF63eijDmWj2XnD4f2JwhTQKBVJYVysyP5iw3JWMp7zECQQaYJNeGZmtBuGomoCc9gQSn6JZTQwSgG8koj5",
  "key2": "2uvY5MYj1VvQNS7mm9qNfduxk3jKsUF4h2BqJxUSgaDTnVycNAJqMFvWYvPK41i339UHyGrAuMHDeeeSxX3AkxFs",
  "key3": "1pzyBjFUWtQjqwdUC5taMVFFvXUB7DKzGVwzanJwijD2LPUhgydeB9rgNmzHoiJWSv8xE2AWAYK93VyV9weUsk",
  "key4": "3RxsRvAo9ceGVNYhnpdwTcYMem49Bwqwurjmgwp6cS3XzDenAvNmypYj4dpKQ53ULpNwPxtFfKw6Bfssa3bJk6zk",
  "key5": "2HURsasL3A5DRN2tj537SsfREbk8yMZQbgTkDKWEUFahLGEgvu76mivesR4WM5EvgAdvtZwW2gNd5hUuTKgJqrtp",
  "key6": "33FS3KrPnPaH1mWbGGDHfDm18DaP4KcfLLR3MXmZPHXgv6x7opfsTDZgFrCP78we4T4JLCnSUdkL4kj5yNRAW1qd",
  "key7": "bhkbwpT5FNKMyAr5EqHZvQQ84Wsht3FbV9uKMeZb47zYgjCDW15hcAFuDarLzqi86NJvPmx7sttkJdozVuE7ULR",
  "key8": "49nXzBeFuHu5ZCsugbbb8kuuJqubLrJr1BNGmQREGbjuhk9amtBTG2hkpj5pLS3V9wXRhq4G6uty7aKjrxjwq1bf",
  "key9": "3T2HTax5dqCWpQh1G5NDoPLcd8qFoN8g3Q2CnU7k3t1QkMwfBYtaJmm4635fERDPKQbmTmKgMfhkVuzR5hbRihvy",
  "key10": "3bMcm4oGMUdaJDo1pFg86FhQ17Co54HxrsDWn5Sgevc3w8uxUkm9fdXb8AvuY3aKHJoGPCbou4L9SDn4aMxh4ocV",
  "key11": "4Yhea3v9mtRZk5dnLnPYeC74hKbFmjZLXTL1cVQPwgMQEa45LYPghMumCiyyAxgaaBxjZ38YHqSSLc3PJ625WoSz",
  "key12": "321s1aT8fQyH6nHAxDyxcHfsmzqhk9FiEp3BdkKW7N228Zb3YbMxQzHcfXaJdwXjsmrtZSezPhoJYPsdZFqtLtNL",
  "key13": "5bDvio1k1zVuKJRwiKAb371oRbBxKj9JqWqvcLfkxtCkkH4CPLq98tqfCmzp89uN4JZGCnEeAnyadh9oMjTH7Zbv",
  "key14": "4pwr5zerFGnxH3YArhHNUarT4PfTpEpPhDb5idhvKr28cK8RzXHSKs7ibPbH4XCTuyxdDUGCZCiS12xeEzqRPSDM",
  "key15": "3yYUi4t3hTtiBR3YQi2dGGvSEdVxpvVZ1QLvKQEKeN4UssZkU5X5XPT5ck2Db1EbcfTyt2F4f9Tx8GDwLygbAXZ8",
  "key16": "3KCxyAeze9NFAjVrWmJ2EureHetJBX6Hr7coWCbLELjaNHEdu3xTQrK6guQAjAgwtp48wdQ47R7RRTphQRhwApr1",
  "key17": "2nyTfmff3MVHP3vMS9ZDdvxcmAaAt5WtzCPg8hMYkJSpBXXWtVt3fqMdELgjToWJiTigjPcXGnHqZFyQyfSpuAkP",
  "key18": "4pNkvubpYcVqUNsBZYJiv2JCBM8gWL9oW7cbbE8Vr4Lm1EryWHQRBwfMTjAJ7TtLuv1dyYMVTXuMMPuJAMYyxRpX",
  "key19": "3iEGMzYc7nHfn9cgcLgj3X7Gp3mRznN9yrV1DBE2SEAzRQc5Lo2T91mfCyXBfJjBGsR4mnH9sCx5cxvSsiEegPDr",
  "key20": "rZTxi2fo8kmUWPu3ySzU7g3hqHVqxwKYvvMWDo7gZzzeYvYtZBYj1yQ2EzAXK7evsokwqBBaUYfD3vSBDaB3pWc",
  "key21": "3AtDUYi1bkTRdBJmPWdaVUjA87PxXPTqUTJzoL29uY3Gq3oiepFs2jUVkNT6YKyxL8ydYZhBhqgrtenWLvpFciJc",
  "key22": "4wCA6nj4huxVk1zsdRwEQEiCcTWPXKrDMeVwfT1eu5gEDvEwVkEcXQUdDiBqbH4HpAnapoy6Pzvoup8Ex5GWXhbP",
  "key23": "4YCFnXQsrGsgogBq6UV2T3NTF6HbY13bbSH9LAoF3VUTBZZ8p8KDVCyMNc49CSTCy2Ja61wS4gTpfXn5Un3vw9Me",
  "key24": "5qe4EvoNLzscgcu2B8qTb7Q5Adj2fCFNDjebgEdBpCE2rCjhJMocUAo2QDbT9m3ePJDxUUdiZWuJKYhmHAKrBgd9",
  "key25": "4JB5nU6vzNpcGU4QoXXKvwKszUfwjTcinf2tJCYU5fw8Ygy1CYJDddMyR2D883k12LR2WaSkXy3fBUgA2d9Lcpws",
  "key26": "4FoYhtcrqzZvYMnLFqhykbe6gAGMdEe5vXBRjjyY8mLZq1m4MGa4zu9am5PC8X344DysnQbQa8RFTNwEVRGGB7J2",
  "key27": "378bVQNadmUN9gB4MFZ7krUXrPZKrc4NPR8r3REjoR5jm5dL7bJnX5Wm5zAAPEYZAyshB2SvK4VrVT4Vfj1PS8Uo",
  "key28": "uHt2f4kJBSBrikSo91TZeSqxRtYytpit7pCqscpuk2LE3z9g2S3p4atkfWRqDxJXVSXrrb2mNeSQEWhuvXs3FF9",
  "key29": "3Xu7Qo6WuRmjfuuopYQgvj5RkdF4HD3Yryva9zQgHQBTwMhPq5oR4pheBMVkPHZEFmMynJS3HHXRwk5fHUZeUSHc",
  "key30": "2Rjgh1MCZPWhso4n5cN6NtnhFz2JrDXZPi2hDY3UxZo1CdZoK8qtcJvU5yG8ijahyZapYprNiGqktg4UsssnbqvP",
  "key31": "2tXb11z7AkhT95aaaPjKBhBvneGFRuUPuRubreLPBXGejQ3bsCHZc8QBA7Zw2yGyrBqmEb3XsPzqqacqQsWbRM3T",
  "key32": "47y88ALhNyPF9Khhi8E57WcMrTZ3SqT1yx456jwTySJ3wrJUcksCqnoR8NV4SEZmQCZdAgXTQWEP6966GpLvfmVe",
  "key33": "3TqL86RY5zi5UQG4TNdPsSJWsqHmhpDP3UV5tpLCjLeuDQU8xMP8PejcbhZW2SPS9JkrS6fZwCe69Kdbn5LN51W6",
  "key34": "5ywYiwb49qXus5HvsENXevHP7zNkr99ABHFiBuTmtWSfcnbsY5hHetoWLaCZCxR78XMDkvrYqKpQ2gDd23tye1t6",
  "key35": "3uNzQCzLNrtubna9KQ37tzuWLeX8uixCjhLPg3jWCZZ3H2hcEtQuMZdjU7hzGpXxThpcHY2WvTuxiLuHa46E28Nr",
  "key36": "3ZBKc5ViNr55ovfXwo4cPGCTspK6iNzbQADtbKgnDy25CMeTExweDWrXhiaEGbZEhTn8wtU9kLBQ8H1uzQ4NsGZH",
  "key37": "3y4BiHCsCV7HBEJnE2jCbasiC1ecVMEtvMFv32HnFQ5AHYMkZwCrLso9N1hA34paFQpThB7MEUXDnsmsZFS2tx19",
  "key38": "2NpVSYbkPFYNiNgTB8Mh3wSkw26BQvxXtaNkaHtZispGaFiS3U6qEdT7ifGBheb24wwiD7X57qiuuhTLVYG96pfP",
  "key39": "3gk7c6Ksnv8S8oXtaNRQPp8BjrSkB6BzFad1DKFHBi7SC8NYKfXjE2WEPQCYNogvv4LkAU9XXfXHGQrsV94iYTx9",
  "key40": "3Yp4av1TwNoVTFDwJHea2tKRb41jqHWUC3AjVojcWZB2hrErZohXVPm7uu6cEtuvf6v28KHD6HFpi4u2NK98gPHc",
  "key41": "2AybyF2SNJW1Xye97Z9MiFh9EhbEZ9qepmHd8GAHQMci9MUJ4FdRiz2mJb3vod25svgF9qfuUVDhhsQdFjXd2h43",
  "key42": "2sFsNZ7YvuMGZy2132jaN7ti8FwkDkZTE2U2SGQxHQtXPPpj2BRtbbWYvpHgNzZmwDhP53kDCDnUZJngucFiHBxV"
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
