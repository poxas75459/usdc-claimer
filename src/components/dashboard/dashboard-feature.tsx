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
    "4X1RzAPAdACDHRsXKVvR19EY3kTGvER4xBQxjqwZHXb3pLxY7BXH9Kk8KUo8f9VNZj4of6ZAzA3vpJ1RAHMwEUsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1z7mxg9MepkKTpgjUAnQCpfA1ZCf26uRNTLxxAfzNFfwhMyG75LTz4v155ut9yq39Ur81MxM8ob6JchjWUyqLH",
  "key1": "4tgC5PUAjT9KHMgdXhFxXdSFvsuWibFQgs83Pk91NAmQfmx365Pd1dPLFNAPGE67BwY3edoHuKAw6wxyqzXuK2mp",
  "key2": "1C8iuzytaVznu54HjWbANFhP3h92PHvzZgHz1UANQvbv95xjcfLEyy6FRU9WRs5iYa8pEfZt8yjAcceL5HxqTav",
  "key3": "3YCoHntgwknDCZEVt8SqS14YedyL2HT3hQi59QDGzgmMB1KjA2h7hyEArgLrN8ND1SE7JmCbymBMshibsUGJfjHQ",
  "key4": "Qt5cwKqZKvoD28ojAAKwrqMVPGMrGU3eEhXTDMNFKenp3Pv6YLinkzBeR4URc6qEqqwsiaG3wrW1BSFSUVM7pcz",
  "key5": "4KtE5bi413TU1ja53dr6kT23t7hVT19YTeMW6WyAywp94kbdEtvPQzVqhYnAu2W4NekXpyDToekiLZHW3ix5eRTC",
  "key6": "2aDyN1YcHmxdZWvuuByJUZK5qszCxcB4RtgAVPsYGuLTcYTNmbBjNVamZR8tbuwbMvwFGY9BwD6VFJEXoXjAnpK4",
  "key7": "zj9Z7YMpABSBHWUEJmKTRtJbBWBMWtd4x2fGwaX156B9HGLStDqGG25fTY2939tLVFK5wiTDucS5TDXGLYuTDsn",
  "key8": "64WDuQR4knY2rbSuq95EcKTP9nzbmPsVMyD3mja4ZSJaN5f72mTarfkSStfohphraBvtJkFnQjxBpQYhhe8Nyj23",
  "key9": "kof5W11xLjP2VGRbKbrAF1uPQsr491nXYNeRwP3NWVyrEYYRPMkKsEon7GYhErrmymzYsvN9nSfc8aZTuJT8QVn",
  "key10": "5R6EKZpWqFPXDXo5xKXoSuXXmGKSYBFkZjpjgbPZfVsgoATX3na4Z9TwsRxRheXvBboquUFoU3FkwyyS9GsjNQfQ",
  "key11": "22wpfD6mh1hadpE7iQFnNnLS9du9bzcQZnifrF3dLcMauSaMPtWiUpgRzY3hS4nG6e5hXooox2GaVHtj9WBRUksM",
  "key12": "3ym5mNhaM9D2Uh7k5BXabTJRFup3mxEt24pbwrbpjSPM253k9rCZ4TCDR91TGX6b6HeUKXZiDLNPJH8SEwmdth4c",
  "key13": "3VbtS17pqWmQ86XkwEf2aiQAw1c8nycAZyKFGtugkXnaMGGMDEPFhifCXkhZsgDB8KB2FgxzCNJNeJiuGfD9nxUb",
  "key14": "WNo7cWmnnh8JFDcqbjmpeyNxjkmTk9DdYiPEwoumVxD9YugLdfXtKDStzUUxT4yLMJAmYXf1XDXY7H9v3cJ1nhJ",
  "key15": "4Lx9k9jQbbAWuNVfnpiFfChijYD8D3WHJub85onHzGmoJwfUGBcDGus1cHzMw68X6QSDrmPbNoJbpJR6nFqcmJgJ",
  "key16": "dfyqDXyZa1jmg92V914mnUCntXqnbSTVysDL12Y45h3TNY4M1TbaxgCZH9pLmEn3jYFtuvJ3XAUvdtL2iCdptoa",
  "key17": "5udMdV9sW1t73y8KnxAWobjddaJkjjT6PGkwU9bevzRSX5gw1WEjUkjAwcbWzngpEA6iYBsupvukre4jxuAHNpxE",
  "key18": "2EWLyhGKuRwjTEwEt8TgQH1LW98XR5AHVK8CobNnh9gAr5Hjp3n3T1vd7TMo5zgssrBpfRZTTX8G2BnsdiKgqqC4",
  "key19": "cS3bqH9VudSRGwH6vSMiqAURHx4atAzjs34wjZyMsCvZT3KmxBWT1TaDeMRMEB3uSBogRDJt9UWdVeaR4Wkoch2",
  "key20": "2JBnwkVdaV1JCZ2TJcYERB2Knk1XUXxSJgKbAj8k122A4Fmq2616ySfMgqQMHPeePcP4DVfFfA4Vf2gtcnJzZJi9",
  "key21": "4Cn8KgjxMgZwccJoVoLqE3T1ocW7dF6eETvJJdnPXaMBGJGhVUMLCcVMD4qh845GWDqsLf58wJ4kpqKNKhQTGpVG",
  "key22": "2fKDuj1KTJauzeP7F8N9kJs5sFcGuDqqf5TVSEKDBaqny6VGKU71MPFdeqv3eNJYzqtistEuewPmimJj3Ki2NZ9J",
  "key23": "3mJ69A5cQechvDMnNe8XjWn5h3K6FKrdHf3RszEiKRLzMbk3qTqgxoNmxY4UZqR2Mrv39wxNpLPtiu6mJQ4RzUo4",
  "key24": "3uWxwFZpyCDN53JmHoZhNQZED8MjcBshfmnmrXQ5TcE2EF8P3ZpHguE1rRzoHCE83rNYhR9VwpM9qVEUkLDqHH1n",
  "key25": "5AiZGZuXyYPvySDsPeDrnFwDSPbffr4xCVUx2VmzbhLdo3LLHak9eepGyAVLKvgMDqy4dkwLtt34AP1VVEkn7wXb",
  "key26": "2SHKqZk9UTzRC4qumYNFTJr6CD6YPsEGnshpkmmGwNg9WPXnN4YmYSYh9RtxQsTkpQEZfWinjzkjqRGPB91kU1mA",
  "key27": "4guyPYN32itEBbQoeqqqYYjamFDfoNk55SpSZEmNnFcV2RXHB3SiPxd7SEELRk7hwZtZNa5L4JJHGei1FifjFjeV",
  "key28": "fdqRi9Z1iGCcRrFJvfyEbFCKZRocVoyhTPA4QJYArXva6mDdHGqzfwGAH1mUQ161HRkyX1YVjEkgj233ZzgH4jj",
  "key29": "39vRL27PH9k8uiQ2Gmz9Tdz9R1iuTF5vFBAQVyoCJzjerjHgC1JjNTvJgP1TJiAwHJb8huifv1JLPCFxBWKyGVyN",
  "key30": "j2NBDhrn8rpFjd7cqDN2MghWDcHxnjZnrnz6iQpVpnvqy1Y9hUdDMEemm4exB5q4aTXQQccpxypUp5iEsJZKuNt",
  "key31": "5mTVkgFi6QqrgEVVByPtm6a5dx5ZC7qU8aZYzWHA85EhituRFUTNZ6AzdLLMBAYDbEgVdHDjvyDuJW8YwCK42Doa"
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
