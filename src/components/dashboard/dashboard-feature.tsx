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
    "2TMW4eiFeCovQkLz35q2gJiMtf3myJSkiQpnGoaxPLp4ZxVYaWeX1Y9TFbfqpvf4SUyyPkPhm7PZMTmPDiPNdUck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TpSaUNQhZ9e3G6pFuobfaCgk5XLtmBELZ6KcNSsukrnx3DyvpMbxeBVh7PANzjuar4vxLKoD4uD7WdjgrPd6WGN",
  "key1": "3ChXaESSzGA8CriPK9AbAY7qf7fGrvop4yPqvRDGd3hEwooJuxNCZXDC1vtn7QQm4BGukMxAjSmVKyYozney7DC7",
  "key2": "2zzZZKjiQzvNtt8fSZqiYMGiUUgiREDYAD34ZsKEueBTvHzM9bkM1poVR9xtZHHkXg57kar3eBwCgDK2vLj4pfc3",
  "key3": "55REkMQ9WoKKtaf5Ep2T7Qj3K4cFS8i2hrcaRVQwDoTYf9y9mv5pxBUGrnMkBXgZXzM3aAw26y5v6NSQMJ7sKEP5",
  "key4": "3xMXDgoNEWjyGYf3uYvtc9UsivM8ztegNjfTjGBt9gsxH8SGgdJFLA2aq79HezeGSQzT9B48KsQCPKyBsWzdTqE4",
  "key5": "MYjfumbaKH3u4fVPu66tvXNqsxmdyuGkAdNqcBvHwvh2cztqUg9GqxYSRgewDx9sCJuDnjPy3wWRRc6CmmY8Y2J",
  "key6": "4VZcBQoNgjH6gVS3BabTqdi4VXPTLNBpy1cdgcj4TD7WddeoYqTT7UTp6MRkE12MiRDxbB4A1fPqibFxRyj7vYDB",
  "key7": "64SSGwAPkrNXDeNgRh8ozaKaUMgTS2jQJeE1RiKQGyzTRijc2tLSRZetJaNo3ce6G5EzfwTe6YsRpK86dqFzo7pN",
  "key8": "2ZMYWK9Jp7BYzeZwXh3JN6aBKXYpN8Eagy1kiC4vzVukor7dotS3gWcnzYWj2NSY8C5mZsCw5TFQU3k3zyQsGJP6",
  "key9": "57AJWbfdCsEdAFVs87EmoXi631h5HJNdeEGTVDmQrYZhuM9HQsXRd2b3T9TXYoryPt6RqEUa7Uh2QkgDPjYU9nrb",
  "key10": "nPuSKCPoKUL4MJbtnY3BhpaLSQ9GeALvCNPnCPEUjxrEFdtoTfT4xRrnxWzveSTw3DDVyamU8bVtkoLjgXm4anQ",
  "key11": "3vgfn7CQPpg8RFwKwLgf5aZmU9AufYTFtp3nKixY77DbhoLZppaFKJ9TLfJJ3y9jDGPUB3GkdyrwXSKASmQsqdBA",
  "key12": "58LZa5Mbds2y9w1vTXB8xXws5gGuDBknXrePr6QHb1w9k2YHDYsmmRtgsbjQayxEmr2AMv7PkNHTDzWDoUrcvP7Y",
  "key13": "2yr6PaMnZx67VJiMo3az2PDjp4wTmKnRYnEPsQaFj52qcQAyro1rYCjoF9YFKy8q4kGR98RMxvTs7T12hiJiL6tn",
  "key14": "4Ehi2mMcXiAQ8qKAEpwN7XK428h8jPdZCQ15qiik4yaHV6yvL9Cn6n8Tr2J8DrfZdX7Ey3nRifCp6KSeRXgUGybs",
  "key15": "4m61quiAjiMVTzzNUKofvYebWR6E1pRoZubgsNUSfM7KWkAXVJCuTR33mHExpqkXwnKMCNngRcFZgh6ZrQkYKueK",
  "key16": "2X5u8msZZZqQBHRxjJTWvfFi9mZeaS7nGrj5iD4SYJxAvicW9L4HFtNgNQSMgCuC28nTpMTsf7EGZZdSJw7eudbQ",
  "key17": "2rQAYkEZQg87caX78MVyDG19YP6A8HfcW8WBYG3xR111FVqM9zmf3a3K4CJtuBsdMdrvTZtDpgXfyYSezCr2SkoR",
  "key18": "2FmH5uFgdhEsQ3KADaFwGgbYUd8aupKrLCzn2jBHhRGF18G3yiLznnHnTZ5Wdxx5MBYRLgAEHvKMTmz34fLW2mLE",
  "key19": "3Mjo339xnsuPvsehBUQ3wEP75q4achmJdZ2MwzUbpSq673nuec437vKEC2U3vMPWJ5h6qQRuDEbbKwa1tTqf2TA6",
  "key20": "43bMpWddJHGjJMXimVwAzuK2x8qDnp5ZVTgjstNLUtWzJoYwnWnZRXMYrUmMgqeGgMb64QU6TtX2qPnUavn6qJSJ",
  "key21": "3JzCgNenPrbrDJr9oaYRkC6URmd4t4EfUaYQGgo4GNRyTsgA7d7GHpjeryf51cmqLnnPkkJjeFBa9gk82CrPk1LQ",
  "key22": "LuxG3UtwWoUbizrKCmtpb8oHTTTPz28QYqjWP58JgSAjWiyhQehw6xaYCjuEWSX6xRqqnF5q3naTmeZ3yDLtpUQ",
  "key23": "5F7gLDzyfmNnt5xEsUBeVshGvx7Hzh7uhPNwgi51qcTq1fW1nnFc8Y4z1yMqn1UUtdUNLnHCPzS4YDXDGW5jaQia",
  "key24": "hJtavjTE6uu2Ko6zSQptjDSF8LhJL5i32Vwu616FH6px2qtJ5BNMT3ULzqxSYK9UhfJqZDjvnj5g8sjxHP8u9nS",
  "key25": "27dEYfs5iZZLqbj3uefZZdpNbYkexqtonDtpW2E7WwQxq8w97UzQMEmUpxQX7hqNeatFpjV8j5QtXZ4pfQKLFpAg",
  "key26": "4tCJCbcop6xzaA4jziumCDzAZFwa7DGnU1TaWzQVEEcTwwBsV9vT1fFrgej8rBDGvWP4a2tCsQ9BQjQAhsbNNLnq",
  "key27": "3ap1xx1RnU5cSWHCwaX86KWuyLuuEttwCUSRkwxpfe3kS9JnAJtmymTa4TZWHX4qWs9ss89DqmnuL6cxXSEMv9rQ",
  "key28": "3cyWypm3UciZ6ZUpgnfnifZxsRePjmM4ZLxuos6MjSKtKtYcu4rW9ssfSxqAhC3eTQpSRGApicrHYXnv31QPPzGS",
  "key29": "5BkbvSwfDgGj7Vcf94JV7C1arX1QWEMhVt48vafP14R6qQ7K5MkbH4iAae1CaBLZa4ThY6kqeUD2QNMQru5tDyVg"
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
