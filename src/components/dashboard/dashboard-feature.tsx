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
    "iFCfKDDzDEZon1ez72Ed7n3CxdcBHSRfvQxWF1WynpTNLqQ5WsSXCC17K3HxdjGvHVtL73gHUU6gruZwEdoGcNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWr6Av61VztuhpYqFVxDtvkd9Tcf4iSvMf9SJ6bzGw1fFpPsS2DmmCcg4pMZfkmhCrwk8PfQLbVvuArYvF1MYyd",
  "key1": "WcbRtka5pnv7vPUXb5RFssATaSaoSRAbXCrsozDki6dThfCfEREx9VXGkjv3hY28FGZTprTHpus9DHRzGJWesz2",
  "key2": "5LvCgKxBgtaY3dvzbFoT8ibYYFgpMgWoqrVzfxxyjEsBcsw5hpjgpooVoMHtCLSJcZJ2pbYNdtKYHTrEA3wfXeeK",
  "key3": "5QgrhkfjP8LNM4UxTjZEdbiNaotJWvCzZYxdkt8iorV87iKjkdc4M6WDqt6VMAv8hYWdwrQgWZ9FexQ4XLqqDjkm",
  "key4": "3usv9iWKJNYvpJUGdXYXFakRhKXKqL56BtfePgkfidFBSMsUSK31UMbYHwMtSZ6Vo79KAGyp1cULE4JpPJ4kBtQf",
  "key5": "3TFwQfLV5Y9FX5eG44EHzuV7xKTS4c2uWDsGETFK65Rksh91kZe2gRzVsBiPMCaRC7NsZu8bT4W4wMH9iVJpeJLy",
  "key6": "5wVZbBpPrxaTG1mHC7PTzVzM2RzbUe6eA2sm1P8YTKiwCE255a8zvW367YrGZMUU3P9pYe1uE7iPkKewWhs84rEx",
  "key7": "4noFms1dJdLRXsV2pfr1Fba36QPZKSGkMUhENiLBm5UaYUP3Jg925xziXF5vLgVGBPJb3aJGZVdjexW14h7tXuBb",
  "key8": "44keBUQLUZix6fUmuWV4KtqSqsLcuAXqFLBM2VVnwr88SeeH8FZsL5VP1iNL5hhJaBiewEfGyN9CpdhNkN8HStSk",
  "key9": "4RchcGs5HAFcERhQ6zB18sxU7Cxc2382FcN7yMuK9XNurkfsQPunxcWvzW6dzWoLQdghKHCZSBcuxjQpLNkPz5X4",
  "key10": "4fB3XJj1hnvGU9Pw8gvVu8irpcp1YKhtY8A2SxW8MDVTN2xizddWmY7qkbWR5VdGJh9LQ5UGQStNKxtfyn5VaLfZ",
  "key11": "3S6PNxz5w4wXuG33GqGuparK9pE5DQ2Asv84kq8GNKqQQFJuH7ndT3hSoLQXG9kxHH1in6oivGJaoXGBcqNyovao",
  "key12": "2qs5YJcDDqan8WzGS2PDbr3izCqNwrsq5D4XiCAjEJdFoZpfNzRQJMDWNLCcRqbuRMiMaKQEBquP9A1U7d5meyMq",
  "key13": "2Bd6Xcz1XrkieEL9dYYzY3MbGYcZyZ6sqDmkic1bZxaYSouwaYow4HDCG1XtznpTM79QBvszwrJK9yf9e4Jyfn3K",
  "key14": "43bnCfEEf9qxaVWTHCKJoA6SzSVHBFr87U6PNY9KEwVUEAMk3LPe3VF1EJwcdUPmDSsaZ7bNSDTU3wwQxCN8K2PE",
  "key15": "4EZktV49x5ZriCNsWuaJq8q9sFqCEYV618hYpe7uPozm6DYEDExq3N57qj7oWjJMPsUbhgwyQovC9Wrtz5ednJKx",
  "key16": "4seYztoEYK4Q6D78DxAbzjToYz4RiThL564ztXPQWB5brJ8DXeJyCpMrqwdpGLCB1fZXN4czoVcanRuvcoWdVwji",
  "key17": "3QtzFcCsaJSbAv7LLpVHjLCHunv5DbhKpPrr7osYegCmtb8YuQzvMDBa9Gb9cg9hQZPW14k4GLyfxEnMV7qU28BK",
  "key18": "5BzALkjNgJDcvoSmHZvBtYGDzNURRpcTYCDnjheyn6FeA8Mwnx7Z7hcewhjFGsG6EsQTJmX6TaUzmKPzsUQJK5Gn",
  "key19": "3Bqo8SVP4VRBV81tHYZVScgypWStWLQJpivgV7V36MPcR2UMX2M4nHu6wYThbcGbAo1Y9zrWz9mfnmc4XoWHPzU1",
  "key20": "UT4FF9wBub3gmh4fSWeznSEzPPFs8swYUfmre23xBmkjtAHb9YR3SEUSaCCXvDtdSAv9VTbzbegpoB4fesMCkdY",
  "key21": "c7jC3wFKi6aXPGgtzFkTFwVtUQ1GtsvzUnYULmEvQY9LiS9h2gkhXst99487rkX3o2yRPnsKCQteUkj442SGWbR",
  "key22": "28vmmgfJVQskxD3apimqscQqiaGnr839gS7cQNqZiMMwfjYM6wAXLZ2ukGFQtHEJeXibFYqBahA4SezBJ2qjpiP4",
  "key23": "414oWogSqFewR9mqfFGL9JTiQd7cBR9Bvg8xx7keCq4MWHqCbFBuc1Vn8a4b9v4oN7WfrwMg6kDrCdXYSkfYj873",
  "key24": "DPcTNxq3hknjFkjVXAFNxH9Pao3jTULvWXuDLbir3mCexBpWfcCRmZG6XcuJLzBL8P6T5v3ouY62eHatHFp8YSK",
  "key25": "39PRYw5K1TQ5p2CFC5bozph1DYFTmUg8xpepkHqHjT1dnYvvdYuh9KBkE5opp2Jtr5Fxi7UzLzDDvH3JdZiCK97n",
  "key26": "4seusx2eTUYk8wjE64v1r68fRUyn9BdGpZAVmrWxR9wrLCXv6QZPDnwfbCjVq89LL2Tq8Ey88KkRSn8c8M16xZy5",
  "key27": "41zXtCp5G2LCZHnuoa3vALJSDBPkMMYumSEvXmmTbSUSYLCgwfxm5A5q6rgQCnU2MmongiADrsJvi7ZNtW21enRe",
  "key28": "2FjPydyY4mkDXghJEJkeV4P8BeBi5FqCQc68XcXXirmFQYXDncCGafjrsuKFDzPij5FnjTzuzA9MJPMoBaSaDbDm",
  "key29": "2cMZcoWSx8BQpRftBu51JmmnyqvF8A2wAQoLdG8zFphNxKd21N8MvcyuF3DkQpyZpBQJJyturJj42xrN7uXZu2hT"
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
