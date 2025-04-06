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
    "2Asfi95qQd5ZgdF316Yu2snjJ1vtcGCiepHboDJmcpMdXgQaR1E3jaWKuUSUacNeYndKcx9rcAMkMaRPkiBaGnt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edstkscPLXKkXpcf2nzH3qXSZPvjfjZDAJ4vEoUD8UyKme9HHBjqRgKyv7t7cUR8uwxAg3b2DFAAX8j7qW4geki",
  "key1": "5ruJyWgPUrthoRLYapsSE2bcSLBXdhEvhboZvtkM6hHJZ4PSLi9P4U3FUZg6Qj2sxB9sWpzxcEQxHJa6Ctj9Zgvo",
  "key2": "ZbGZCBRJ7Tz4mxSrKnzZmiMMfDafUoWvDUD5pkZr62Lq2SHzHR1BhMsDwQzQ8Fa242YR9vohUqwPK7HncUaqnUQ",
  "key3": "3GNswXbJ2LeeLvZejwtcaWkUu5gkUqAyoZycoupGhgvGsUDxQTDUCad5Dx2sgopXG1o274ZJjG1ALmLKiQaKRuu8",
  "key4": "5nkVN743bgs6QL7Ade4BrTkwo3WBhxBawjwuGfN6EZfGLcXXKKzRcRLFX2Rg2rhWbH6f822wdBSBVxHzPhDAmzyb",
  "key5": "4LpErTV768WgHAZRg59rkmHXN6KQ1pW5y3ykEaaxp6HeZofBUnyUG9WZQg7Ux8aJK6HtaWP1VyMhcUAwJJt7nTix",
  "key6": "2gtvEctdmWBLUM2CxpBAuaLmhvgytNJsUMHtKw2PUqnpaXV9La36PCv7Rbu7W4cWwspZV27hjGoUnQFzr4AKgVgE",
  "key7": "k2KypfyMxj8Z1Nwb7asqBY1B7scV2R9QdzSmCndDEUBUewXJ2HupCEujpJdfTHVqvA2LYExTKX2LsmqXdoi29C3",
  "key8": "4rod5eyMkFdVqnQED31fvRczzo2aiYVobEuPr3MwAEngL7DofNxw2Dr9czFmVkHZPxaCPBLtR8wJdRoCuESKD2T7",
  "key9": "4kHiRQ7e9iJy72qoCTZoGM1kbZ85KF2mK4W2nET5tAYEcnMSCSF4qnoMn1ZvjM3pwsq9WZgEwBssrmimDLicdHbJ",
  "key10": "rTXQfS1RnQQvdaDj4TJWCAqx9LomNfww8ieLkwyagdd9kDrUJwyjq3CG1LN4AQJx6aVSaJmHvYAZADgvjYUac3H",
  "key11": "4mYNdiYG6gaduk64UasSz7w4ivRsT6H6tbJVodz1L8axYjSVQfqYQZR6bCwguCTVEDR5aEqt4tEXa4mhL8gCwMBY",
  "key12": "VRGMTF29h8fvNe5NKeQhQ3pSa48EeyNr3CfzePVePDaKtkSi52u1Qvj5mxsQBKvTnhZZhFfYLUGDGLJ6k9p9NKt",
  "key13": "2XzmJWDAccMquywgQKsD6phZiGabSv5ks8A3pSHhYEdQ4jgG1CmioeqTGQB6FpZJAjJ6unYky3F3VB39NzR2nggR",
  "key14": "5nXTtHxRX7AcpJ7JNjArmjyjgTwzUsPV1eR9KrZeJ2f1SBXy14QzcXotUbC9UP5Jk7pdXFi1LKFgAEbU5qq9Nn9S",
  "key15": "2QFMX5MZawrLVonTNiJmfbssJPRZHAPo5ukJ369H2PA5KQ7csru4hyvH5hPJHT8Ce7hxPKYjs3Lz5DqaNHd2otKb",
  "key16": "or6nDjSCPwWeHTEdiqRKNMteW6z4ogooHrvYbQ8LddGM24oCiJr6JGNrcWyNVVcEgjTdMiXZ7smZdS4i1fcw3HC",
  "key17": "5VmbuScPQDTL1TN1on9zdVhVWHnBnGPvNSiGz9jch8HkMR3NF4wRnC5JKBbQh3k7tceiEEpH52ERvignYxWXojHT",
  "key18": "2dg1d4nuutHLvyn44FeS9YPyg1sKA8BviTp6SzbvFGrKuErMoUrW61UoUYkwL5nNLgTm2PheWfUeuYxwDTUeWxs6",
  "key19": "3JPeggtnjW1Ks5aTkJTiwGyg7KV1cyq1HgnbPeh66uyd1BRMhB9n2qTAsqMAHe7QC1feMwT6Tw5tPYmb3nbdfsgu",
  "key20": "4tw16WmYY86fH1KsLGFb9XBx6CEvHVNKDsJjqUavRsWiZm68A6tpUUceJWqsADN8p3jRrjfcjWxPv9UDHWqTVb6X",
  "key21": "4tnR6fk9YtbNikBNgZGeM7taXqpKxZPVjgMh749VVUieLhLm264fjgNCdBTfMyi8VwV7m6VWz3FxZivttSfdKPji",
  "key22": "4qEjvtJPF2tMHuyZ6HRoJR1jQHpokjproMfNH9hUc23nQYQfWzHEXMVYfRNS6qh1d4gajEBLvpiqLQCFBN6Fc44U",
  "key23": "4EAXEETPq5CEBcryMDWomXfMkMh2fY82rSo8UKRSugDhqQMwiD1X8wdvcikn1G85ukMcLsZhiJYsGiCpxvEUvEa3",
  "key24": "4XF3DjB6fSVDBYip4VBQrkipWuSd2rJJ1rLFUy7KgKytM5NJEvWNKF7uAxVq57wRrGoGH6r5yjyhfKj1Zw4Kn1qX",
  "key25": "2HnYac5ip5qPw8D4a3PGqZ3JcfF9YEDZUg9YdQXRoh9yNcp3YcJBm2zbsAeBe4cZJvZohUVaGkrkqecPxG5wdK32",
  "key26": "2imWVJiGopRfzBj6e9fNGG9nWzP5X5VQ5xds61eKTswWSmgpmsRJ4KBxvfyubK5WE88w5FSbypncgeZPLFQShvZ9",
  "key27": "3FxbJuNHk9s5f3gwdbLXqtXi56UowbQ6NLfWvuML8cfDY29irSKsWbmQ7AQQMUDxmRVFZjuWddRYSYfvRVEKmhVt",
  "key28": "4qgnk5RvVvanZMbuXsJRHsFEL94o2JMZ6UTBYg323phdfbjHcDLQLPFTtXLVCVFGYomfStCJ1YbRoZrXvKyvGuYD",
  "key29": "4Ujmeefmj5jAjeFAyf9uYkqpkpxFkGZfRi3Yi7HMP15fe31cdh6xgSW68eKTfPkEATX2MrDpFfEpaAjXDroa6Qti",
  "key30": "DZR8PBJvf1bWgadEuJsEHCECme7zSJrgoSssL5D7ahB8ubU2VqPjioZNF5CnhqZADZz1tQtsQZUt21F1qTbw47R",
  "key31": "4Jgr8SNJ3871onS2GEe7pnrhCaJ1MRqJKX9ukVv9V9PKCsQv4bG92ncbhDBw9Jep9ngpW999XBLXCEh4HYNct6x4",
  "key32": "3yoCeGT7uwaHT6NLho2R5xZnJbzinfSytbnrTyhqF4oWHNpFUEbSVwmZ9f4yUb9vFyXuyUgQ5bE3r6cD1eR6Q4QF",
  "key33": "5G4hnWaYBZ6ePmCTE5ZaZubWKD7XtYnxrZP7kGmsXHGxSEh79ZwVCwS1fniLgJXY2f8MuYsbL2LgYrBA6TpWJzhG",
  "key34": "8XMorJ1286uv13yPAPmEmMfHRtfHz1cDKUHnKmexhEz3bgPPVSZkAApLCuXruHmvJydSrbzcHEgBNYixiBbDKxo",
  "key35": "4kvmN6F7q6CizuRK2PQu4SNe2NGroLwhcunnc6SLRKfXR9zo61c2g7SYnTBjLJxRtXkf9fd6c5yJ7w6Sx1pHKxgB",
  "key36": "8RPwnVny6HgTdnxx6h2jyjGEH4aGD6YaU1o3H2EhantknA7WVpLjMeJX1nHZ31MmcUJ4LaLSjo4EDi2pb99wsfF",
  "key37": "5ESVtQ1BkCrG3GAxFJ1jhtKyddY4Lz626cxKkz2W1k7TLV5MzhPQURVe1SJG7ca1prNV9caUrwnPK5paknrEU8o6",
  "key38": "2o8npS7Vru6gxKhvnHzMNzUH9PbccawwWEF9g8TFyV354YL3b5sh9H6Sbay3vrYGAwpoPUmn2MujDScTawdS452Q",
  "key39": "tMfApbQDmZ271H2BN1JCVGqXzGMQboGHpmQTMn4MXuB4qNT9poHrV7RPneA18rRtvjE3VwgGmicg4WJkTuCmfpg",
  "key40": "ZdMfiJmnbn7TbUJDhDKBytZ6fDSRrTyULYTh1Jp777r3UxrvBhyvSfPdisWcDn7p2gTcMVM8pqKQAa3Gu6Ztdx4",
  "key41": "2qkghwpvxuc3weDx9Zdk1U8xeRS7oo6USfBK8yrLLQUDxyAzzQiTrXqM2jkfAPbBNzPC7xh9WwSce8m1xokxtLpx",
  "key42": "3hcinzrb54CrmMEXyQjiCxVWMuDMJW73B3e758UTe4g3wcTsADwMGU1C29eEmjYx2zsn7rQgi8z3uXbtS8gFYXMZ",
  "key43": "4SYGbZEqZaexAdScKm33ympjtRDRGaehRyQ2aFrngB94SvLwkfeSk9kHb49RgPuG3fZo8YmkA36H1ACwuJ4SYbPC",
  "key44": "RGs4qXMHHhxDip6i19PFx4ZERrFZ7xqgixKqH8pZSWGy4JMk268BZv9BubNrunSDiQdk4MV4ihwquE6N4vxusfY",
  "key45": "3tciW6x8JMKjtUzfRuso64tKgQoi6gR6iQPNDab5dGQSZzZmBoiRf2nZMkyCqmLK3GWz1kMrv7Djw6wnjGQPzg5W",
  "key46": "5CZTqsdf2Kc7uUbyvTVaFBn8qaFGBNAVHUuKQkAYpBhe8biQRaKPYANhfCguweoJjp79zm2QMKDRJatxf4tVqWfY",
  "key47": "emRMWgJFGdqC7dzFgVF1DeWea7Ctpc7wUr8SPeB6D7WDuWfNqLautQAuCmqZ5gpTLP4ZntjMYA3BsmDA1ejfsnV"
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
