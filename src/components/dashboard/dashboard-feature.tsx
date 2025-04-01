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
    "5AwMXN9JRzeRaerTCnprd2ZfQu3PaxeA6vBiPHfK4bJGbdHJJhvUWsDfN2R7L1ZpxUBXzeX64x42Zv3PYwQ8mKtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHXCU25MqeHyASopvBK6tvvtqp2Nee1gpW8fgptBZM5EMeXDzoGGmAaaA6YjtjDcT2KV3zuh8TBBLJQhYbppBhL",
  "key1": "62P3DyfjtF66pghdrZQFHg1wLYtcbpsxyMuY7b6QCMsvVpZRn7x5CXTGZi7TumNvgQsrrxjJnMHdE5MXrx1frx6H",
  "key2": "5MW5Zuyx2BDwQZYqJqnW7ZFqK879HZomjK7AXUa2Y8iywTUNi97BZKDABaSxiEycnyxyf6BzkVipCzshwHxFCRqi",
  "key3": "2uCV1rDNFp1Eu2NcCGC3aRgTpBcnw12dUKNxRiSdeKUFCc1aJazbAUecGdfdYAqRXPnDXJnBW3dH4QEXvdxjKomQ",
  "key4": "2WTMUx4VfjfaRogoTnZXjNWwf8XqrpE5rjR6bNctpLYV9wKvnKfi8u5jNGTXRg5VEdd8KQsc7Jap4spdt1iuC7vv",
  "key5": "5PyTGEpr7oUc3QpbzfP1DQ5wXmf3VtSQqcKLs8zkNzjs7c4S2T4Ry97jxYxy5KD4VPfD5Zgd9ehFp58f659Wkq2t",
  "key6": "2XNckvU6FGqzxC5Kptsp8aHohebcRf2P7bogv6x3QXu6qFNHXkpyRs4hmeh5iP7FNTUhd4mkCjc24zEs8jBjnsZh",
  "key7": "5AqUcT3P4vCT7VVt8tzzABdj48xajbHu1AqcHv26ApjSWEsWdA5aFaFePpPK7pbMVQigeeK9QShuKDwmbfMSUcTE",
  "key8": "2TSGP5ohmjsmw7EAvGnw6ywfRcuy3iopZi3Qq4So61gEKmvxpvmhN45Q4uufkGS381J3tYqE4f5B1wETrK1rUtgA",
  "key9": "22CnJzVMs6gxZ8XkKyiY4HYPYv4m7QtvobEdenDCASvuC1KjV3FWSYyXCQAfXVDS8wNY2PDArJNLii9JKbbn2CNz",
  "key10": "4RaYv7mUPAg5XEspAHocrEiv8Lmk6ZWm7QHPCJEFUrjfdX1ityHt92NKoYEPjgiipRjvh3o5McGtBaUq793gh79",
  "key11": "31Mhrjh6e6kEuQ7yyLXhZurQvqQEcL5Ytn6ovXyLYVqHtyVrUdxbdfrYWPqxGzLPqi7taqG59YyaXx9E6E6De3wF",
  "key12": "5bNPQNQnRayMVbJoVpYzrUVYuqmET6ytADF6uoiq2LSgAcj5kZUbhLcXcgohCHzjEU1QRM7hsBXaW3p6YMjNxd77",
  "key13": "4zXqootXk4hBHKhQUfPv4mqAcJ3w78c5YaDPumzkZrfX6wmBuq4xBtnmHL4fz9Uao5oQmMr3mEb92BQVqoviUBEu",
  "key14": "3mUSSPQd7d9p31n86T63sPiLR8zEiALG1ANHbLnSaSD9zCZ8TmWWL32hn2ModfXSLfS4RJyg8sxdMSj8KMrB25hQ",
  "key15": "Tj42nSkAF5akJoLi2Mn7vu3TJeHZ4NYs1pYi9UzyCEFrpTRV7u4C8MwVe5tNfZHakVQWPXK2qLBSTrQSa92NtqT",
  "key16": "Fs9MSmgWWwgdF7qtrGsg8BuJCRHAzYgRnjuJkhiZxi4e47RHfY4No1AsdXCtBKMSqM9Mdw8wrfQrxPPrs5sK69H",
  "key17": "2PPsFwPnY46R8Si661qkkXTk24vWvhyKzKSStLc2h4jck5BWpkFb2LQbpxspZS2WpwpT1Mp4AzEriMcd6odreZfj",
  "key18": "41kAktBXHY3Rk2Ug9h9Emxo9AjWtsaB3G5gsxXFj8JnL9ivPKNaVhnBj7QaMgfwGaxfokFD5L1mKtkN6xpeYRkk",
  "key19": "4wthG58cb54FMm45hFnhwd3KfqnXLhjLNqfNaDqSSPnKe9YUAUJidN5LJrvgtX6Xf9TH5LZcqpFWHg8W48ZtCYu8",
  "key20": "3Q6jE5avpwXNxnPQL7ToKNMtzZpZp1BzNRGNHs3Q7uTtKSb1LGmH7nY8UQJHFKTkZNE6faKrhvm7sBw8uHeQP7Hc",
  "key21": "5WdAEuguJjw4AeGmH6VUDAotVDt3QjamjheaQAAzik2bkfq5mBy4Nsk2nzrpMqephBcWtTqYWipshUhXTyyMCVDd",
  "key22": "3qNjJg4rto4VzCszbjb45Ck4MUmGMkDjiwP7pPksRWsKLHZLcpShoxiF6NrzbHT4GuYyPT9dYzefzo8XhKcuNR7R",
  "key23": "3P9Ycwf1LdnnyTTyj7gks2qDc8UbJp7vRULRHTgUzmu7rU5vEMspRcF5Rfz54g8vU3YL3RDiQaSBZgfGwPkenAw4",
  "key24": "49JtW3V1DBKKeqhQzkDYfhxq1Jf6zKvtwRQDgCDuLFEPTxkT4ob3qhJBrtLw2DNv2c2aNutZenxW1XnVG5uy3NA3",
  "key25": "4FJD7a5YUfC5tBZRe4E16owjWK6ixvcANgHDKqQ1xTepVicthH6PAKFyovuiPU6m7ZN116weyBsQYzh6Javsfmu",
  "key26": "m86oKnQkPmqhWVWf5VonXW2YQfcimg3koVASFMdmWtkau4vDAZJQ8ZsiwjX5gYQZJ8kgtxZ1rjdLf65WGysWhz2",
  "key27": "psna9mNE4TJtuWh9PUduow3M3eGGLKNbZESPrUxo2KLfMTNLXFgCB3fvsbnVW8TY3iVn3DJ1nBwju48KW8qcsn9",
  "key28": "gAsVPhLHJTXERLQzebUf6VAVuGim8qEp8qtnZdQfLbX6F6EKar1VuM8bn77cSdzMWbBFqzxazzGr8258vWtHND3",
  "key29": "33QqheZM5BU9jQniyxC2PYsCMhQGVG3TNtUeQp7LTEJzqvJph2qG65babZ6evqpvHTJ3GjmMUW7E1LwhZ44YwgCQ",
  "key30": "ygWtwBthrWZ5wZjwn5wtja98Qxh8L7Sadz4wNUjyx2EwrMpJ7bF3QKrAKE7Er5YzaSzDYnCd619n6BYgg5Gttpz",
  "key31": "3VnxUSq8ETPGdunpTd8CTobHeL8GtrzDDh5TJmyfJXWrX9FKb3woJv5dJ5CvjsJRcSuX4VLYCjbX1RRxXsc7cQJB",
  "key32": "3h9rwQs7jNuKCHJbz4iBaMBG4LV1dWmhR1u6N19qqP7jw3JLu7PUwggvnSverdJneHp4Ewi4NpQVVe8772e2zqQj",
  "key33": "2yB71dqH4KwG7w1k7PoXpaPBJcbqDcTHxSTpV4cRxSQBFTMGE82vU6CfJdDm5EQTZGw8ytrRhGcGH1HmKMLgknSz",
  "key34": "CZhbzaqXckRfY4FL4HDigfvazTruTY7wENKof8oj5pxUH61PXjLfdQD1Tg58sbXn8Dt3Nt1nG7cpyJU8uzwXa2N",
  "key35": "59fRCNXAsvxoKYM4iB5yxpgeNfY9TZx84qN4kmYHevUTJLXoVNGj8Kg1uCpj9jXNF5dGemvE9EXf2VHn5hHxX1Ui",
  "key36": "25DSUFt66cGB6uUtVjR7h4YRTtDiQvGNhU8ymUutdpKf5r393MVtazs8WDxmfEdCpvvqXY1ghgiJBYDT2AmAbNny",
  "key37": "5Qd6yjdodTPU5Nbx4YnSr2QarxEDZWmfSbMLp4uThW8PC4FcLCjEVwcQmTr7NRHYvPrxUVfkkQSWYKWCwoAvxXRb",
  "key38": "4p6yd8siqwi1ZJWGCHV5WWHaHmhQaKQYmKQVr5h4T4nqY5URWzZgsErhdHg1Z2x6629dEErgK73d8EKAx3bqBgEb",
  "key39": "EHBJooeq9DzDR48pyexrD7RRz2fCLUUqyojnDaTTR9uxphcBWSRdiCbEijvjeKxnMvSVXJYsMgek6SbZh1y7XbY",
  "key40": "4UEpaef6Mo4ZxS41SdmqAQSY9hD7XCExjYpF1KZxdg5TaB6sJvv4xTixpr57YsrPSQYDqPEWXoZNM8xtbU41yYNw",
  "key41": "5Qb9vz25uLH4Tt1hT6XeKk8YXMhxdYZuLYiYEq82TsK4S7W1m9hfUGqYKsWApuuACSPWxxpGFLh4pqSriEeMQQHd",
  "key42": "65HcbdThx6qAxMbDj9ta5jpSqUHGKbnrunGXHQTntJFzGf9nJ2XnMeaWyeewyNejdKjHyy7ZnvAndgnGqG38ka7i",
  "key43": "5xyie4wf87iET9dBxBii14dDxE4ZaxJQjc5ZvTJcaxikBhQxtm1BZnquYRMKTQgLDt3bGAbmyA3jkraecXUgxUVt"
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
