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
    "3zvy1WtAtdVyDy59GbwNA2WyR5Sk5NQh3UmFmnvkHDDo2wK5RL1VLHyxwcWhQuguj9Li8GBFwE91c9ca8kbXoFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62EVcQtn52LB7cGyabp89DD82UnLBgSMUA4z7jvqyoW1XrfGsNuEd6WPCRQWgDJGRyrU1YWBxNEMmu3wFbVWEB2Y",
  "key1": "32ZbP9sZutDAvwZwUiTTqQTvqPwLBbHUj8gZfmsB2dGVqVZBx6Z3kzURhYoWy4UDVVFzKsLQYFkV7jXfPECmDS8B",
  "key2": "2WVX73xjvWfcsHKqCSDdaqJkrDi8J4p7S1sQdbBHdGy6GPBnanBFNcRBedL4ovUd7hC1Vwrg3zW3rDsyus8voJZW",
  "key3": "4j3gojufao3ZqHQNVkqJZSXgxMxDjLirzkTqD9wdT8DozjLzsaH4fKqU7R8U5AqzFWugM9qEcPW8QgG6zTciRHcJ",
  "key4": "ZDvfsQNv39UeT9gK6g3axupbpcRZv25dKrqg27EKftEgcUv7Jzy1gbbvNFpNqge7XSpeEYNGeDPz7pq7GtZMjQ5",
  "key5": "2xCi85jUrLB86YFcj5bMXfzYCG3BRaTqxLqnkDaaCYmt521f4bsG1WpJRyAE1UUnanM8UTG1Rd5CuCMZmqurEmBP",
  "key6": "kjHJNrUzb1YCvZqduuVweZy2WybdddrRJAWQviX19YqWY1NKeRenuhh4bJdMDU7qpggFYmZge9thYstuYGcTr4q",
  "key7": "3srtQEkz5oWKSgtr6i7gyBYPjNLWwxZe2KNe4rji6axyaV78iJTszkkNqGEbBHyXpF3Xzw4famZG6vNZjjLZRUvz",
  "key8": "41CMNg7bwaMKYzYx1gYuAkwRaan1RC7Dm3K13SyY2JziobD7uTjzYEwCBL7NAQ7rHp7CM34s7CLqEan4LmsMpSb3",
  "key9": "4ypA9VWXqemsaBtQUPoGVGwVgeY4ZMFBkd5QXPoSg2xQCFVAq8BrrDkSBZRLgDRx3mhBpTfj9VfJRYpa36i6A52u",
  "key10": "4J74KZ8cJwAAeAkrhQ254H3LK13rz4gTHzawjZquKuUidyKd3xcPn3dFvG4YZDQuyiTAXhd9VqGYTCz2fsuUWgeA",
  "key11": "3NVRkpejhKRmvwxdBtDtJr6kf6X7cL8tCCaZ38pKZxKsUSrLKSU27YHB4ztTf9Ygnk69GEQhyVzzRzFLFCibwYaZ",
  "key12": "3ZqhbDDa3ZuaVttU1BhYKJhzySAryeitndexkUaGaUSa9Abgidi8AzN57h8SkqNXucXjnSufbF656uHJ7eSdjf1J",
  "key13": "4b6TFubkugSznMy7TLbWKi2VhUfdM7cG8EustmWhS2LNQg6Puzf6LED3JasQtfqeXXEeyfSqhpU6zfZKAMzeYrHV",
  "key14": "aWCELGz74oP8jr9JMqdU7fw6bw2d4nrn7QySx56JkqrDAegfGyL7o5S6NLXiYicjNNntqJ46TsgiAcsq9dfuGW8",
  "key15": "4neotSwpjyuPU2t4CXpsZYpjkCN5Qy7dZidiHwGMtpebn1UwriznEuX5Cic1EkiWjkuQzZENAPn3rmzwL7CZFTDG",
  "key16": "3SbTQyCdMMWHeNKZd1grhWQ33UKhqRoMnh7Pe91C9vKSD1uNXndXnSkRpCaihwmS9bPTDPB1SCJDX57UJ5hVVG8E",
  "key17": "5KUSqH6cgt2i4Un8NcKw2FGcbK6df2SVNs97cN2B4UK8TKECKHoQxy6wjC24GPyM89awQu5Wios5DkA4k7EkSAEF",
  "key18": "4cLLr35mTx6wKSoUYpmP5y5qkox3t4RxC9v9oX3tx8GeFecYrw5FmUPq2MgD8Rr1tgz4hpaR7EsrH7AHhy5h9a2F",
  "key19": "3BGQQrMcH6WqQuBNCibbniTTPFjsu7A6UdcGhQPmrju4LF2a9YT4s7cUBdDYEHsa7k7KhcdnLqMsPDM1rJPdZbzv",
  "key20": "4tCKDcaK5gtWZTo1F8KeKd9eXpsembiDyehDuYRVw7TVUbMUCws9tMLzwNz5v36CUAUmBP6kRLWTfGEVKFMfPejb",
  "key21": "2ewyJx4hgPBtM4K48ppZshs6KCbX3UgLYfh23BQoUCnDpfLDrdpoJh3KwbzHTF53CT53GVioPrSBYeZ8fnFcGpWh",
  "key22": "zRf3KPc52ZVA2MvUG8PLGqw5HQY2x48f6xx4EJCq4es8dEiVviLB3oEXtDLLryquAJLwKUYi2zyAArF3rWncak6",
  "key23": "5n8S288cFJb7DvywiFTu3CRrWQ1JDwUXtEZKDzZN1vwiAMWmTNkyWFMAt94YxPiWUKrV3X4oudZ2UqR63Bx6QET7",
  "key24": "36tkDYJpS4EdPKeRs3gsNwroj2k2hwGsmmaKhJN3srRiHw5F1DSExKiKABRyuXGUapAkzz7x1QyN8dKaFEEa9vWV",
  "key25": "3LUhMg3DuBAjqG3MNK899VzZe9yrQ6hhENudkdxHPBxnZZLS2UsuMUZ5wzv9RcHZucwJ2iig45jqWCZTkXiHakNg",
  "key26": "MbUm6CZsQzQZ3gZXj6oYj7Eg3bZgBGEw9Ypa9HLwumL9mxsbVK9Dky7VDBSvLM81qkCLRK5pFU3raqxZbAsnjhq",
  "key27": "3Kaj32XaiWSsCc8ErFnwMavPhsQCN3TJMJm88FQH62XhMuH7nuZEJv7QEL9u7BEugyYKPNNRRdXmqdNsqoWNKddF",
  "key28": "2QxJZQYHcF8Mb2eZjWT9Uuz9TQBCNaBTCLf3BPeBQwUvRaBvKyfyLRtEYAUMNh6XC9ZmHs3vRPK8BiYkiy3BnHAf",
  "key29": "4zSJqBdtT5hokaMgN9x9kSQhopTCUYJiiqTg6mQKsvuP6chS8vNLDrLSSf5R5fUAVEFhoqERhsayC63BpJdsiYXk",
  "key30": "5xv8nxVeC5wpB82DP14wkHirFBwxfQWUBb4EsuzjE1AXqtH5GavZGEvLsb1TPJEwZ8ymAaLFqXPi8Q4mWMA4eiwW",
  "key31": "2q6esACdqcdyKrke8SayEtj9JVGbYrzGAiLNSP93pFviu4DWJG9yjNPEeVKGxqCSqcQnAGxX71HwkqckvCho6j4Y",
  "key32": "5JghrXXBx2pfwYfa6ZJd7L1z1jvKzjh5DA43NKCoQtf26Fcvf9rmgzRbU81cAxpEcG1mHU3jsxJteoUaHm9e8YL6",
  "key33": "4dn7jrREb6UxRRR7ZZstRAq2ztZvBYTNoyqK6EFtpJvB6qasSGw3AycDCHGRzDFjQLLywNwYBnNkfoaCT8q6QgoL",
  "key34": "4QNjciuuNRBi2KQjfcLddJ2JYRjYo2nFZXX6CyZGsF1NWVow6id2xES9DBuRtwG59Cx9rDXwbhMj8tvMtPMTT6Ks",
  "key35": "2mAagTH3Nf1SEm5ggzdBRVoRZv8B7PtfS1HMa6pVR53xpHAcVrrRUirhzUYMHdgyNKJ9UAsnHFxk2G89mPk43VTc",
  "key36": "3yZBMF3rgGFX1y93DodM3CrvxfQW2CTTuYLWNNksyUaamKibeCVdGN5zmnc6XBGFGLZZYY5gzi6UPqdreEQftdcP",
  "key37": "3u6fdAcugHf9wQDhkjtEV1SZQKr85PvYQgitqXiWTm1o6xySEwYaogTpcwUeGr3SwDwuyYnc7rEzcPdC33BT6BBf",
  "key38": "4YdgixCX26JuYM5dYaJDbJjZA73MJJikUDbAEC9M2259aFS3RERgNqZUMkA64zPzkEu94xYCNmxvoW8zm7T2nZCT",
  "key39": "5Q3ky6ymGVsBNZwQb41EE3AGwXaoJMmGVq9PKaEPxFtutTpmujMwBSHHE934GNoZVJJGjNqjycJ7fez1WghrTzQo",
  "key40": "2YdcTnJp3wM3dgLwXALHkQwy8d6idM1u55bdgydmwe2V4GNJLBchkVJQ3k9TEDgxb8L4FS922i5tvVJUwPnA1rC2",
  "key41": "4QQG3zkLuq4moRv6bo6tCJykyTYG1KjLoP9mLtRe2X1L6rbzUv33udQanxhz1dxqQfGQVJo57GiXinYKjrgFmSAS"
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
