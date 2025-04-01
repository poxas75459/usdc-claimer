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
    "2zhwzN7D14wKnXyPVGzC9z5HpSQ9C9yjGaa1UXRiVsEyoaExbgtx54xjHuo1fARJ7bpRpYBEeo1Nbyu8vsyS8J2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zn2xvirVxAM6EKsXLfbqgMeQ7KPLSTqEUxwjFTHkZ7RcYt1SmPAVsG7yy97PReE54txqawmfCoMb8734JZgMHzk",
  "key1": "5Be48BNBDWYwknwAVugFVKMzrKnAJecWQ2V9gq3j4MbtxNDHW81T7gGK6SavntSCKaZkRy15tY8tMJtY25MPU8Ua",
  "key2": "3msNymHJqhhj9V34iJzqb7kwkPynoxSi7Zc3NL4fnUFVst1NdySjGqhsGtLtETPBRWUzeSk5q3Rqh217mx9keW8Z",
  "key3": "4dA3T5zuk4RN77U9LRMTNDBoE5UeypompQZer5Bvf9sfh2L8MqCZmyLdv6nZKfEKagnUxqUJzoMfrbQgMtP3hos5",
  "key4": "3ua35og2qEonjMwSENoFMZTLcWNJtoFji13V2nTXUrxAzLhgNcsr9HQJYQ4171cA16ttT4ZJFo2bEZzJA9hEngSh",
  "key5": "5aqnmJDVUAU2EJNDaXpZ8ZG6tYvgN8kYwqPobQyEiQpbhSDgGeiaZvfVqFa1JdyiG9Jmbyi3t4FXdH4s2gu7BZX5",
  "key6": "5mejZkcyRFEzLGNAy78bHYqeVWNR43C6XiZXE8M77yADwHZ2QqPA8Z2YVH2GKqwWjZgcpkLiHiwMxjys7uTpBxk",
  "key7": "5E55eyKdXjvB5uKTUx6YpsV3emVN4t9uSQXwdFARkVKipcw2oQJE3LNAGYrmtGumzAUbJuZMo5shJBspJ2qoufkx",
  "key8": "61x4vBuethXW33rC1eJv1rPdeyEpuDLuYaKzLoRXYWjJqR6Myu3sBmptJenD9iDK5f1PcH19Nq1Ss7QhHbMJCwrS",
  "key9": "4M8wmba9TpYi5dH3oeVRZ7215b2LnN72PDQYFEmLYFxbxjTBHtwanfgjhmYbrjtQaXQ44yYP8qnAFDfXbtMg5Lpr",
  "key10": "3gySDMU6ebEKRqFwQqavUPKcn3LeZGsSzQYuP9de52xgCh9kKWPcLjMrS3mj1riWP7JnbcQGyAhmSHpRdWaagwKK",
  "key11": "2JNcNVxpdKJ8CXx8sdZC7LxauFA3ZHMoLBe161mxxWmquGoHHxGjDLkvyFenP448S2i7urAiaGQ6pKa3ypSER7gx",
  "key12": "5jNixDLx2vxrdpgL1X585JmCWEQ6FbWCJLeuYJEBKrXfiHvfpLNqZffdKyiZqAAdQuULJHpEYvjbEX2JLea6GV55",
  "key13": "2Doay38qm2RWcLuajQpNNXH3cXbutJvRdrEPN2EkHxk5xLtJETScBWRUxV9bfE5GBpQBpJN3oFWAXrPfBzSvMc9f",
  "key14": "4zxPxQkuHqMeuceiXPHnQM24cTxCpbSqWeTFm7XzMDS8V5m8qknRyu8FyUoXFfDKvzjpJXRfCqQAK6VUk7uS4Xut",
  "key15": "4DjxfPfdwteGyEfFmyCc2v1DMBfe7uGtbZbKFsHsfA2ACttWKhFTz7QKrWqeghzQs2RTtyEEnkaezfvJMKWKsiPe",
  "key16": "3tiWvfCE9CcdzLpVtEUHkC7KXFDMpRrkD5SJXuRcoFWRkQLYJ2cGcNTbvLV7YLG3pHuHa9My5hFtw5aHkZMH3gha",
  "key17": "5QHrUPJUDQmb6vuAPtmstASyjjNxGbCh53b5gyahisEXU4xWbstYDa8b5ApVD4D2qnX2sji2D4wWePpWNVu27wH5",
  "key18": "5wiwyRcgicJpdA3PTt8m3omVPmfft7KGYbUuQjGixpGNJ2AErQBcNZup9wDiPYeqnBz48LTxUEVDhsdhb8rm8M4E",
  "key19": "5iFwE9yQqEx5wzfDaozk6vvAugsq3tZzJWzn1A6J1v4WLTA3EQKGsdw9Xqdfddw2ZZLVapVqaAi4ZcSLpAy6xRKF",
  "key20": "2NjmFf4pTecsdvkpmp5vPTDZtZotUgpKAd2gwh4uzbrCBtq2AXxUCZorToB43WLBx8W2yLXNTyApH5CpvG5UTsLB",
  "key21": "XV4p3EQzFnHimPQFe17cfEqFTXCZ7ccTW7up2estcCmj7kZxWxmVfu9Uik2tNck8QLB9gmnTRyGuaiFAxn1Wrfu",
  "key22": "4jgd7jbjqMfaqSSqb6KCAGV2ramWMdzH8crzZH1Qj7cJAgnosdV29PSvCyevGBbDPVs3tKXb6QsHc9nskupBA68t",
  "key23": "41VyR7ZbqWiawPf4FQCSes2EuRwtMdmK6s8T2Rc2RVG2B2Ys2sULqFbBFXseHB8T1oDnfNLNM7xMNZt5iU1SFCqo",
  "key24": "551UiCGChJpzct1MFWzBUYy3cphrYAuyky1EEDxJvEEJixseUZtrB6yw5FV7RQRooN3tQ2yG3QTkfFnEfd5qbxrH",
  "key25": "WfT39zpJ9FKjdWUkVREsF8xmbgBypqJEAvQLYq4NRDWXMzdF2GL7ydx8XxQStALYXhwTQ4ntXonZAyB8XFsrL3k",
  "key26": "5w8P81AFUgBpGp4pMptosDBGPJQ41YUQh5qR4KaAqVENnVn2ZVkjdtmeQPf3UF5HhGqY2dCkeDSyvzodNi6aogjh",
  "key27": "52jUnz36hvnSVvfv8ukNmNUbEmSJ9USzCxsWVjZWgJ6uMAsCQvyU3PYA8b2htZnuRVEdRmYhhwXKmiuUvfUcExy8",
  "key28": "3xj6AG5aX49Jvv25GhnCgUUWubCeuokvEhdFG3J2AYu9QAhb1bihDh9v9j8EaEbYLM4MsdGdYSDHknjo1KsUqMnm",
  "key29": "m9jCrzRuBAcBF5kR5GzHftnNwSPjpCRtsmKkD764tbvLZL9MrAJPBpBTGXmhZNnuyWGVzMs9bVpaDpGwagtFyX9",
  "key30": "4Yy3nVC8uJCyU8sVTdxwHy7Y54pYamscrWM5RfhrzXyG1ezySFCXU4ZM89jnXshBrBiki53RRGToVMVjXQMNAUgY",
  "key31": "5HSJ2PhubkEDpXeUUQtHzkg5nmtwfmXGREX3qG1wHDHmsbrizPPPxTaZNJk8MCHmCbp9Q4MxV3hxAhQ76Musktaq",
  "key32": "2p4cXxSN1pFQf8D2c7uV1k7r4qE7tL9pTSVGbXW2cU955mttzzNZEkCERB4aCMEogQUwkGniQgCenPr3LnZVbZPC",
  "key33": "5biFca9Za1qsUb7gnrrhjdJY2Vsn7ozTh6iBETbu2PuGXEJb7jjNEPtiG2Kb2toUVaaNcGJhy2fPRcQrB9t1tdXr",
  "key34": "295dVxv3FatTe6V8DmNtbf9ocBuakJbJGAjMxEbXxQbJz16e6RYyGow55DdEDxhmEYg3wwxaoeqUJGAvb6sGi9ce",
  "key35": "5et3quAwGC2qEBADJPH78pqm6wpf2AXuf9fNtoARQ6kw88SzzofGmBUwd6DXeTz7afMJdi7Cf4Y3PzfNn4CxDRoL",
  "key36": "4E9xpa2vZGznNT3UqNB4yx188z5onkxc4fVxbGGaV2uKHUZVKoLdrM6mFpfJWvpACfEa1VytG4Ue9bx64G9B29aA",
  "key37": "3F6ctnNCAfK2VTYrUoVpMzthRHSj1HPqicfZ89yMNpUY5u7GmZYVao3jurQYDqDz1VSUhwoDWxeKq2RGect5NB9h",
  "key38": "4CRWBxb3vS9jQkj2Bo26rrLMGnDHN3LprsoDwq5AQSyEvTpFGb97y6jgnWEdADMeoeBAUKjSSswk5dzNYDcDuked",
  "key39": "5qVF6AmoTvjEe1xTd4ethsz63uQJC9WAw85pmQ1Z6Aopba7ptCF8NFVfFrq4dpmEgDJrZZpHF2PN8JsZDjaDkReM",
  "key40": "w3r7VGovRUUmLCysMzDQJCrLmnGmXUqFMPP88QTgZNrPi17hdwVk9FVrTZ1C1SgagAyUduNLFVEHiddpPThF4t4",
  "key41": "KF7vADYutj6kseriXTvMcPSzhBNVEeES7jD65JLj9CU8KKxvRcsf565AkGtWvhMCp828LtnuLs2BEUfKi5XRiE4",
  "key42": "3i2RE9m6UxqW1J1zCS2jsquGthY24KCcbEMmbo113XdAoFHeCMTvVP5fX4fdsk2yANVVyYpp1z853aiqXXkcFmVN",
  "key43": "2umZk7vY9g3xhpWqo9dscfpoPGtJb1jA1SonZNUBHFn68auJRweg9rsTHGqe9t7XLTTsE2zHpPGokkQWhrBEYpjn",
  "key44": "5rbFd8hs2kxmKKRKTCbuZtwz7SytpgJsCcFyqrkrfrR1fsgWYjmvzQk6aPJth4aZ8SoRQC279MbYkCB377VF59Tt",
  "key45": "3vT9bFowF9ezbRYZx4aDjE2Fot51e3dgfK6Qfrb5mxnTAEVL7W9SjBbBnnoASMYjqfTF1To3fjSjvJprAGHZZ4dj",
  "key46": "4k3NKzFRJixEx231zWz8UiMHNhPx8ZyokeYXr3UKheH6yb1dEsPdN7daJsRmPJrpDxpCSzqqiEms3XFUVFzhJ4Ho"
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
