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
    "3vGwL7V3QXaeriBSJz4bdwxoJWtxpRGp5fAMe8sQQUu8SuCHmzPtwFmXc7q89ZHJPXWbdgaCJrnWPSzXW3D11DXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mifpbvG5Mgj5zGPoG6KWZ4e9Lc3B35T54v8EEQqfeGyYVXFt4ki4nDv2z6Hnpk14iR8bhRZre4aLdqCeuheLPfB",
  "key1": "46A5XSGoLjLs8V3ipmvPoXLphNKmDqHMGDWzwS9iWWgqwb1C64D9bXCgwvAeES6yVv2ufTW1HMSZgKSFCtNwMnKr",
  "key2": "5XbVmMsvAPd6XFGuH1NZZuf7WrbDwKnDkLrfy9pKknRynMBEz2w5gCo4AWvTc1i9HxEf4aQ81YGXEXUUNbcFcmR3",
  "key3": "GsXtj2RfwnHVdXThftEzasgXfG88BkusMYnUojcTiBUUvf23vVUCYqpjHZFmiyqWEDF77oxWZc4TxPKGoTKpRBq",
  "key4": "4uXGpPQRfmHFujRYnZDWnyBnwWdeg55ncQaSEbQg6x7fYvFGhVK7Yvv4gn6Pe53GT6U1kGbEs2Jp8BrpZ6Zsuu8B",
  "key5": "2VVQh5FbspoVRiwc3RVYs9xTB4TzsXAHJDt9EymPPTZMvrnVuhqzyanWxr3DXeesto7oQA9cKJbsP2ByMh2CxVEA",
  "key6": "3opACr1PHxbpUHSzDgQ1g4g5WtrMDemDeVnC4m45vtJjrJSxhwLsCKLZUK1bEXKA5kqwhXErBXeW1nv1t99fHMLw",
  "key7": "3bFQNGK7ThoobLMQrQLnnjTq2EwFPZzMNqp9EtFHgKzLPnMSnUsC9VbY8iwnWHFNwpi6FxG1Q31C3x1v5PMwWBkJ",
  "key8": "2Mg6CnMfz84EuV3bNZbmDU4MbyjT7WBGX6z682VRphg5KQgnuH9UMR3XHSBh8FpqUZusFkgGKWtMFALh6qNcDfiH",
  "key9": "5UuyBNjGGjgkghGrC9TvWWKS68bedyqNoH978qjAh9qaaxqqmdeWY8TC9UY4XWVncxnL6n22i9ei5EKr3YZdcGnG",
  "key10": "3KA7ujFd3XQ2aqSyT6Nv8Q5NogACPPi2mBpA457Zhby3AGLzUrst9EKFw9cQAWmRcJct3Mc4G5f1SvoZYGswwiYU",
  "key11": "2Kqd4nA1zwAmfitccpaXsbWj2sMxi78tDKrZbyBXPhuFTQ2dwiq7yitGdwokjWaaBwygSrn29wpSAEvXA1BKe2w4",
  "key12": "3d1K48RzPRx1WGeGGfMru8efkhbHY5c8fMmsXSu22VVA7hZ9fHdEUTNBkvAiotjxxWSQavCaw6E72RDCq9EQgby",
  "key13": "2eNbV3XmFtjfpPA8VctrARHraYax8zrhHZKTTAPQYNZbyL4bS7JnBAfKRFtLmtiydQBUBH2C6g52yLPQMykxCTij",
  "key14": "5PXFoRPQu5NooBt5w9DupcCsZkcUJcokoXqtGuduT2Ny5KWA8n654GKtaZr1ru2b2gMN25tPf5qqEUVSSfxQj8oT",
  "key15": "2R2PRNgLF4DfVRrSRomR8hdwx1P6wJ1m2envZHoPBbMeVDnGTvtRcYokaNNeTAuoxkhrJ4zzF6h96UqFstfTk1i7",
  "key16": "32cKGqv1AARQcSvM8fTyY8spFPV8R19bejWw27iTiAryKhhU6oWMzAxEB7UvGvHSX7W8ww3C69vofTUsevdPZzzv",
  "key17": "2d64qSyiisEVWLGcu5D2qd8JVkmJWQZfauPw7oGH8d2utDKfoLHpJTuiHmmczCVt2b7iZpeft4k8Ur1A29py8bh8",
  "key18": "4dJWrogjrQzQe5sxZRqvussZMthmwfVEzbwfpKRRjx7DCeRBdK2NY7x5pkCp5s5YUB8idiqe1NjVVdXnoditBJmb",
  "key19": "kyb7HqZ9gfGnfqNqxzskwqB5f7EscdmPZZs65rD1pULAuDbyypNe3jSXyfdsoef8TsCitK6jPT2kDR1bzv6yELv",
  "key20": "4t95UHZRWMJ1hrPG2B3vt1gydASGo1btuxXyQvPWF3Ht8QtwWU5UmY2DXinx8Fb77v1Yw2fVRoUdWQbpZCEujobM",
  "key21": "4mn25U7dDHbfhCz4zB3SuweBDfX3kKR2ckNyZY5UJHbyXxKTRcL88DFs5psDMBeZZ7X7CpDwJSpta6JgMpoB1zCZ",
  "key22": "5mzGihH7jrZ6SsptkZ3fKBHoxwGksnNXH9ks6LjK5rks3ru2zDg3MbWFaQU5aQ5PUdHvXaVvKgiMr9SwbwCxvvaC",
  "key23": "59C3tYzGbBAg1xumygEKBPH2FkW5u97nXiw35j3TTy7d6Kza5mZycGaogWxapnjN6GeuzPrLFf27eazKzWAZEJFA",
  "key24": "5TR3oZGJ9YNgo9BLTiSzjeRvQ1QsFztTHxx2udEAR5FZ8ad3Cx8UgNUYWDHTckf5Tj31YTuPEi3NZKESiMhgxQ2m",
  "key25": "5dFpfa3TqnrTjnHXYj6WWY7ehWJwFeZr5rfoHc2rFWrt9HJ3nDzoGC57W9iK3pyzrftTBxKcbxbVeawqh2uhYeMU",
  "key26": "21KgWrAMPybQJ1zi15ZcKMYenpMoQTrJaycJw7iZqGAqiNZQbwAf9nHu3b7p7Kdy69e81N91eRnRZQtqGMyuyNte",
  "key27": "3cKsu2vQAgimjiEeuWuesRVQhTtNViU6PhcLEfon4SSTokP3Msf9k54TJmMACSYnC9RrYeWaSrhc3NXyYKk1Zt6y",
  "key28": "42G8Bq9RtsHqFaQLaNTV3jeZa9ZwSi3gyp5DKCsar2aw1cfHTZw8RBgMQ9YrqPALhEAHSJXR32GBgWKpq6f3DuXs",
  "key29": "53vxjRtn7SBmi2wVucaHzxouYC5MSp69kbt26dKa7PBbhggLYpwkChTuKciNrBzyNZBV8PY5vEqETj5U1qBdUttQ",
  "key30": "24s2CQ2SwiaXRn9BCG81K38vQsYqnNtmZxt8WzfGahw2XRbUx4vJz5iBsPH9b9YzJqR4J5ovzEc4TTQiTsMXzhDB",
  "key31": "2ra6wgTxncCMSmLVCiUGpzFGT23fUNamGyrfYiAyVViANBdqpNrBswDnLAtQ12SpELZJMa8R7ZrVDsQH4p4cyDoM",
  "key32": "55yJZz63yhSUWmxw2mNf7KMEfVf4ZVoNmQsi7oF8EKLU8pC6iLTUsQ7p7eMAu35233hUGwzVqB9Beerhsep561Tu",
  "key33": "3czgdgD64GYNxztW7fGpnKGetwoAENGNGaKwjLdR8qV2iedZA6XExyWaaK58GGi6DywAHU66HWVGgAoLRgCwXiBj",
  "key34": "4bRDLnHwDnLCBXFpjFXQBaSwXwX5uizUYC6VzGLPQoMSLzTueL1JxKSSxXCuJYCVJwWdnupEEtEBYtdp7rPAuqJ5",
  "key35": "qoZq4gsa4kN8HXMk5bKQPHeZUdanA8cdseWSEzqBKmGxNXzyr4CcSgJBEbHQpp2k9xsz1exwUsY6pisTLrUHF2n",
  "key36": "5enCVheUBqtT8zVeibTJkZ6pBjkRRVsrzJYUM31dpLdjteyWZ7gW7S1nEkDiDHLb72tNwM15PAqT9iEEKFAeR5HT",
  "key37": "3uc7BFyymNLzhehfQNQEcuNrp2DPJiEDqciv33D4hm2yBetvT4HLkahYatB2wuA2mv8p4qyhVgc6Wkg8cqWvqU6b",
  "key38": "3Tnzccw3WknDAJXvmySDPgiPuP5FdLHjUZNPtvZAm1nZYywFJpvJhpWrSZ5QVEm1xaTGKZHRvv7miJY6XKQmH8pM",
  "key39": "5VKyPrRqHX3oXccaNaRtCppVGLxVKEtBiCVD5QjtgHbs1XNWhNZAJbeeCfGZDL13b9sJQ3ivRpLrK7pSMp4xMmdM",
  "key40": "3tyhZfQSaEmJQmWB8V6iBuUR4CRwWstehT1aEvpfWGJbDVbVZSHkACEJzJuLP78woAM956UJbFnYPWLxQXxnf1Lw",
  "key41": "5p9ZjihLaGLDudSHfkmpqeoxnzRs3MM1PB1XQ94Fa5WLYSpKu1kH4tVXJ2Xu6htrSvZ84qND9x32UmHc2ZiTPFnA",
  "key42": "39qBqnu5CD3iTyjenJtp5Szx7toaLKQuKQiu6SDFUtPz2Peqm7rsKA8fdJznFQ1ksVSDWkDW7ER6vLYvoMRxwSoZ",
  "key43": "5Ud1VsfbCorn488AtjhWUe5JCUWbfcUBY8Pz2wWKgH3mFVq9x85yiSRaRAA5sAn54FkmhKhvvPHg7mdo6Vtgtwmt",
  "key44": "JbMuNG29opGnmJ8HkxkUcLFNfuSwCAdU4gyYth4ho6dQD3eXZJApUMsc9Rr7PxeZwNi7DsCJSwagbPXBLAUjDrs",
  "key45": "4D7dWUBxtk8ysMxW7TYYs6pwodqFT5YibYQ71bP2C5izk7Jp6zNewns9cMzeg1T8AzjDZRDkt3YLx7wo2vqc7UPW",
  "key46": "pU82ZUYHBL8eQ6F1oxCXbyzKFGeSkqXgj8ic5bNrfLXva5b4F3zEabuEo1SSbDfA35WvMqMZYyAwyAwRz6mCySu",
  "key47": "249dxjKGaVAqeeiYww7dniy8RSqpqRQbwMu9vv4WXjMMcaaFWSx33BgnEEn73hqeXCd7T6YD7TPjKu57NYYRRcdj",
  "key48": "2JBxZArk59UZRtk8gbAqifieAfUzStLgu3bxvUew7kRCKRMnq4LoEuKJcNTwMg3uTfXJQ53Kb6KbUeyTYbQ95uA4"
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
