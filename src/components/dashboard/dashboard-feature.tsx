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
    "htzcqJTWFFXpwKde8Ki9r2w8eRm76ZuLTW4FLTzPJCZbEPNavWPCeUyARk6qgXq7RxgL3mED3774YyVf8CdtaQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vx9DtUuFJCxMKjJt3pQmuXM9KzhSTKJPXcQPcUU9tx6m2H6PxANoC46PbrbhAB9XAKZTauqJBfcDLLgL7BZS9xZ",
  "key1": "4i8sDAx7WLHVrVpxL4L1Scpp84iisaL9bT5TCoTpW7a849EgikvtvG3k94WDutZ77PcUBevzKah4atNCy1696fv1",
  "key2": "21ZHDXPF2bcqdHZAQtWpva4WG2KYkzA7MqhMzHYQKMgAoCD5dLo3LivYZBHhiQ4uSPVnmKh78ZmKs4X2yUTm6eMr",
  "key3": "2JkqdfNm4nzH8iMuhNt4HhnWEjmRHpJ8DgpLaFZvT6meQtjdw2Ja3NXWQobcsr6KfoC2FGeQQUw29WQTaMVkid63",
  "key4": "3SZDsm4pvZPDfGxFtUfFdYu8A9PzHpMQHpe8NkxHUaChA7RStETU2JHMtrFJ2osFUByuvk2cdh3oWBDjwwKXcJYr",
  "key5": "2439ddaQ9FNgDFdxMipcL82ypuwujGGTAEQ352PbGAmzrAR1F6XnqTgdoyxeEVmJEbavqu96TeLgc9RkGKM7LY4M",
  "key6": "3MBLm7dMtbcFd2MCWjCUvcaH9KiEFZA785zNtAfz39EVxyLRDLbuHPhrqZWhqJmtJUHYJognYQCmQjXu22aqtYFF",
  "key7": "5gP7noQdLZbqwxBpPvYRTLbFvppYjgKvJznLfzmvVnNn4pbm1HrkRHki5HN6pDDhuP7Erzt65SyRaU9wfFJAPwBW",
  "key8": "5UcjgXtZvB41G7MH41E1qojVd5dhmXHkPweFAmZP9S4DKpn8BFHtBDFAALPbfmmjbbHcZ1WZgsujP7ZZ5UftTHc6",
  "key9": "xpENqyYfN1AugMstgRM3GoVrRTetCM6PswDtqyC2CTi4tAwdDAuvJRa7LKWbbGhMFMG7pVKGTCiZrGB79KpG5Jh",
  "key10": "2srifj6JNEWr5NF3qypDiBGGJ4cinkF4M4TviH4kFpVLTbVt3FMVZc1acZvC3wmnUxxVWfopwbTZAnKSPN7KmpFd",
  "key11": "2wyRFh31YH8CrFhvav6irz42pDAcrbHtJYQXSQLAa4JMx839i1dDByWawHDr5V6g9iBGLXX7wN57ibsmkDvNUdEL",
  "key12": "4XxqGEzqeiy8Cn1sFFQufwPwgwszyCk85dtM6DU9ugHhVP6GQtsA2PhS8iZEyV6J8Bh8ghQmQk8SgPf5q5PzhB3P",
  "key13": "2Ho8msNjSdDt6mFYw4BRtbVinhMsgkhFs5uRZ6MRES19ToYQ9c6bnZjqT2ZpBj9BWMMQ86tezwXtf7bMjbGmrGzQ",
  "key14": "2WcN5xD1zoV8kxZi66WbgoYbXkhKepykEXpW2htwKnm8AfSEEnBgsvtxaXw1HgEbt3Pcp5uMPy95eBLZT7N3j6MY",
  "key15": "2NYXp5kqqMTeL43X8sMq2hAQMhLJRVfcCWhxnvQeYGZ5Q5h5kJQ5XWN9AisVtSshTu5QAjgFw83wfGw9EjeSCkxr",
  "key16": "516wBMTZRvQr7xGg7CS4GT8BQBWHfaiudNjjhCy1fu6UoEaGHsykeKdWbDQvFna2M8DHBhLm2vvXKxfJfhwYJ9r8",
  "key17": "63jq7xXoc4pdW9wV5ZVWu6QcckTyYPacxReKc9bifq26TvkaNhsWfELzXeH9pXx8JonSdwUc8mfqH7zSwRwuAMZu",
  "key18": "4U9xPEdcRzYN9rXgQLJzVvXvsbWceDURBVEAvrmBPCoXwej2ddcbXiRMsrUUfm28QuxhNNh38Nvxr2GjQ9WaLXiC",
  "key19": "2nR4cypvTGcrtvf3g47GEjUTXjd6TRavPRGh17Pz9XyBQCEVhnwwt7DMpcJig1ZAAZyJcfdkabXBBA5FfSwFwTnJ",
  "key20": "5QTo9w63zxoSU2U7KmPn4oTt2mx6yDeuHiy5tvAXgvWTCG4vS76VoUZjQ9xuMP2BLuzYb1qVfE4oBCt1C9bAkbKJ",
  "key21": "3m3Tj2yY2qEFcZrMWqbUF7rK9suWkCFsHwD4XYKmYxbBSvBi2G3oKJQPMxkBbmptzQBndg6H8Pn4mLQWoUQeFSvF",
  "key22": "kcgSm7LnQaFqzELc9X3MYaG9qJcg7uzGbHfRySz6yqHgUGj5Wxpo5mFQoyyDDBZVmmbaFBJkXMyAn72fDFmUGLs",
  "key23": "4a2PWZB7ycoXP6Zd6rLVFEz7AdkHTsuodQH9r989JfuRfPvK2htu9e624NFwpGhdsD7qcUihkUqd5vzri2U4XwSJ",
  "key24": "5id3oW98fXhVoMeEGDe8c21bJGcfsicpYZqKN16tLYy15cjR4rg6nseRNGp9Ya21W4Hmv6UC7jh9UpUbYWgVbetv",
  "key25": "5k69zQzxh1weGmUpsYyYqpPu1qMXZV9KesskqP47k3QHauDaUdHMSRxgavWPCTpcjsGfPHZ3JYo1FysRtNDqEJPA",
  "key26": "3j4rn43J6u59y3bx8zyPJkdjT7kF8ZgvGKX9zQEFU2TnqD1CBd8fPZVCCMNcrqUsDNYtApJVFHYDhG2by1ND8PMm",
  "key27": "5abtrK9n2ob8ry4UPbViL8GJqVyrhJXteC2m57dBWiVSYifcE2jkYaf4jijyuXaLh8kWoVd3dqJZ7GJWE3nN1qJr",
  "key28": "2udUGZ4JWMjGcGTEkQCX8RMNpcmxAtbyNipohXW7SZ2QriWNW1m3GjskkEm48waLnTbwi4YCcKD9RRg1SXftqtCf",
  "key29": "kbTDTt87GWhf7uE8hBoZdaCjmHNmWHVfJAMY7Lwqogn1BJC53WgVw4J96eeW19Nqc54wKLW2kP5sjNmYVKSLBA5",
  "key30": "3ZJTiwhW2yeEGpDQBTn2uCNweoWHp6TJHjuE3jpYSTx4zzmEjHgi1KCN3vcSjWCstafkeWDKtGQo2oaMZtChBsUf",
  "key31": "4h9RUJoMuYYRjKLziUcPu3tvum8FX6WCanoebHbQ4gAErovpE7D9hoJoiJLkES47NguFH8A4EqPFgT6Z48num1Ee",
  "key32": "5V4RfsVz6iutWVN9JCMHtfZmwhdZrycbT6gizchqjjjCKQcpu4jWUXSAA67MxpTzJpiubQnutuanZFKYWHygowFu",
  "key33": "3g3ER1A8itxgXA7gryNDZWyLR8SJQGd4uninH7djXy9VeujYiwrL3XA89WFdnFHT34ey5gKcpBT453uo515857wS",
  "key34": "RRhLj5hLvbh7hcnpAhWwNPaiuLwokkuvz8Uca7fsXuF5kW5Ek2ZPQ7eY2Vadha4cFJ9LRzZWsiBP5JGuqLb6jic",
  "key35": "4aZNanrzL8WhXyrrZQJdrEVr92RFmaE6xoxKX6Fvr4s1N9JkF5W9GAu4ZdfQeTW1DYcSgJXxiK5tRWnRZxtvRFRd",
  "key36": "2wVgmfg7xZxg4zMfbBg9YWFbRXF1J3sh6ZMZ4jRaQCrNWW7agYCcZivyAuGnB1xjGhD3DkAxmmJvbJXUhoFYvgvq",
  "key37": "g13joKCzFZ3cbwqDm6XgmJ1G2muXHYiMQEtXdHzZff4HVGphoTQvUGR3YjiQmWRf9tbmJXYG17F2EyLChjQtEKh",
  "key38": "2oztejNqK3ouypLj7RThLqwTwkjytUA9gwByiWLVj6GnNFEBvdirTxUybkYDQQ3nughZKVAncP3ChmexTGnNRDz3"
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
