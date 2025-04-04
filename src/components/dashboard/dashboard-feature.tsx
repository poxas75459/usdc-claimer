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
    "MX8dh95poGKkAtGM8JRSwHrEz1JW24p3xUVL8doG8Puz4cGkA3fXRKY6UDFNvDRgoyresdMeHT1VZL66zyRpC1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKc2rbdi9nsHZYgsKg2n9uGu5U8nmZy7Cgog2SR48syeXuQ6kwaeDxdgsoH6SQGHFVNhaeK39bWWKsdYaqhJvg7",
  "key1": "TUcPSL8YzkapimcbDa9JmhsMhk3ZCRY8gQ8swt4WvN1Yz9jH61TMVpLwiU2indepUGaFquveVFJyaXbdwbSFeXo",
  "key2": "3Jbs5ox7PCXpxnUUnuQm4snp3XCDGWGa6SDqKYpsZZ61Bv6oUFfgmgcuQFWSnszmBbBNRWf9kKEGfupuUDmhqv5y",
  "key3": "nUzQkwHBShTLiE34xr99hZ7vn3SdxUxcmpM2XWmeCxN2E6me4XRr3rEHJgbBVuu6x6APonKGqBGKScfS22DGu9G",
  "key4": "DHPAcABXnXu9WKMQzxLowBag2319isVxjdNsTzWL7b6BekcAmSV9T1K8EPxepx85wRvjXrGDkdAEZLPYwZjTUor",
  "key5": "CbTWnjtc1EpZcxz6nfyZYhXUyCrvyV3eucMjUqmWQTJjFUYGk8bkcML4P4zzdzSHaR3X3MEGVk5LmStRHGsYkg4",
  "key6": "3AfMmzDzjsUXqZmuZHpH6oEGdjgi6UZkMP2mZP11eTHwY1qwRDKJJ5iucGqW55qcTVs6DQPWWnvSb6AAwieDdcZN",
  "key7": "Tzf9CYR3EZNgT83ByutQpx9Ns1xsQhD4MzQF46q4tUEcvK4bApzAqwjQWgDVvWt4ifpiWf3deNdWui8s2duSKvX",
  "key8": "3vKVU48JTuMbD8rCXDAEH86KMurZWaRKbyLkkeYBmbbbkHQf4kwQ3Fpozorr5SKHAbDXUnpND6qrb39wianbtQUe",
  "key9": "VasD9gSGcuuaojwHBiZCAYnvDY4jyTirKnQWwDsvSFy1XZUqwkj3TwkoMoxRsBhBNF1Vmbthb3Bg1mgo8iwCTNY",
  "key10": "2ZvJWR5Scg5GiasxP44nzSbHviV2fRnYoz4gJYMb1iDN1jbjm8RCqhjA8AMegJp1pNpy2PtHU5jcBvDWTFe5yXDB",
  "key11": "5RvXNDyTg6HmHEKjqizXBr9Z5hVtRzXddabSj9tLiYdMWk8xfovWfD9mMzXop2ShC187sVmyR9Hm1Ta566im7hHa",
  "key12": "qGN44hw7XPJj9NibGao4SKG37M33gJ6evEoCSdrruNmEHU8iGEyJk3j7PWWiMfDBpRag29Tt6TTX8HE5U1i6Mx1",
  "key13": "3y6DHT1N7KAGh8Vi9Yvar6P2oq6pJ6ySyK4JjwGdu6DogQa9NsB4qL4YH5uqxFrEwed7BED1DZJZns9dPUWNtnp3",
  "key14": "3fNzxG2ARjRypLRWkJZoqcg4zbgp7hGANs1dW1xmYm3FKjuX1CUwLhmdL3DACTuankwYcaEAvpsPyMpr8EXtEFZP",
  "key15": "5pJ2yq6hFR2ghotsoKrBWJ1y6Vz4SCeSmYDb7EMeuLfheXdAJXqYCHmQg5EjXadVK8NLg5BQ9hPGW4MWceh7HQNk",
  "key16": "Qo5ttBJ9UAwQkaLs4TVZGpDifxSWJvvKh4q83DyRjVruQ5z1F3TLgY4cVEz8awpgYWaZnYJqUiN9DowmALjT4bR",
  "key17": "3oqSwVhUkMjau4sN5Tb2m6taKZfb9YJh5xnfPA35CHRpXaAd2qsC9bfBBM7kZengrLGkVA2kjzUz2QQuXJHyVo4p",
  "key18": "y61tecgkPJGK9eyucgZ2yG55vs3cDQYXyXp8GS6D1f1MqGVtvR2vUDgGTbZr6AZEfZmh6odHPhnJ9iuZYxAP9Pu",
  "key19": "4vsMhHNvCpX6KaeSrUZ2zvpKa84dAPpQ6ExRFvB8VWwF2M4XvYdxEpCzqaJm7AekpzqyHQyAidPPUJrZjCxxcWxv",
  "key20": "4LYag257tL8LGZf43Akakx3ZHv1mre5PBviQD5uGeC5R4XhDREkayQDmtc5jpbx1SsAbu74QMZVbCC1iY6Z1jTcE",
  "key21": "2Aov8HwH1jeV92LF4TpuZEsFmuGkwgYXM9B24E5wrrkM46NpFvkhKqapVjZQPth26mf6qiEfPjSoFpADZM3WcnXt",
  "key22": "4gNsWgktmH57KV3ytrSR3vYWCWp6KWqhNCvqeK8Wzt2VMfH7RTFGsgwGt4B4e2oa8ABRBUPTJEzxdchCTyGMDX8z",
  "key23": "3ytGqodJF9mxrvfe5Yyxsxt8upm5hnL2hSzEnRftHUMVxjpZKwB9S9WJGTUm7mJNB9L9eyn3vMRH5ji9QZsmu61d",
  "key24": "44NpAa4hAnnjADrsKYXiPUfyZk6qBQxZUyL5cWaKBSTBK5Kikajfwq1YEzGnaYugUJq1VVbNwzuiRJaqLbr5qHBK",
  "key25": "4haesAFtecAUGzKN1Jjyvzs1UNQFEs4Wvk21hGkybHyGkQivbD1tvioKCbJKNhx5JqVcQnFyZ26ztBWWHBM4smcc",
  "key26": "3tk8uNpi1b6XQNzbTmygZ1WK7S8zCK18nMedgQnDxHwy9Q5ZaGeZctz4x9gmqkxa8suAzDsfqjocfLScvin7gdCF",
  "key27": "3fhJQYpohxUG5rPPC23eK4fGC4kuc71tmz7sxzciueNic6PRwPXamosMinxuJ2XD4zKp4GeoMsbWrgzwWc3F2Ftp",
  "key28": "43MgurDf4SDMGws1WjpFuayrXFgizZ9DwUuTBf4h8JbuqzbRBC4RtVrQu3HrymK6kENhU1NpNkiHZa6du1kLMWqc",
  "key29": "62e8mE6ySuN9xQkhop3vRpJ5G68aUSTpHHNvSxruXJmS1ukPMSaDducYVBBYue5XZthbYYCSVx4smXdhVjJTKhMV",
  "key30": "41WzmCfEkT6ivCgoFUAfnZAhJTx9B2sxJJ42cPXyvEcc7Rj8VqADJ5WUKUE4bAdvXPwiU5NW9FB5FdJmkyPRv62W",
  "key31": "7VtuaQeEichVwCp8B49qdDZBnuqCWE8t1tNYXsnd4tp3aiY6jPKxsYb659wPDTAy1fUXoQdcmogmNUrp7DdJs58",
  "key32": "2mRjFoVeVg4BbT3xMTnAW4mvpyXJS3CkxeKfuDA4gT4W6aZDKtac1qdYrWcE3qdcDpUFC7sRg7uFj84jYz6avoA",
  "key33": "617rgjf7CpDrKxFS4Vmyn2VzcDkiAwRaYhSS6er5WsbGUwHTe3qa6pASMu2dsSDfERiBNuAXqUrQvobK6kjHrtBu"
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
