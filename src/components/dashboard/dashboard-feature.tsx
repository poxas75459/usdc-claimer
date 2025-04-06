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
    "5cgYYr7PEnC5LVvUQvttjtJvwbyrTnf3GmTXHNMBzD55QPcAKWnpaDNYpoDHavZQWF6vUXiAL2rDk3ba5RZ3mY9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kcqF5CFzoNwXsJvPrrEK9pPuH6qRSmevswVYY2u7DzfgiwGAuxMogJ3yTKd6C7ou5WR85A6bTTdKUTeBykiejFm",
  "key1": "5SeVCQ3qquTjeZvXD5F96GvV5dsuhrrvy2VFuC9vwofXj6qyi8WnJzSmxQM69BBsdM8XCXmVuc5YTSRVRUdgEa5K",
  "key2": "2D7GrzY5pP3xpcTmuyL489nP1SrPBPS7EHyxUYwTQ1RFA8v664AB5wXo4ymHn9KzzrQCsGSF9otJ9y7euz8vJWqh",
  "key3": "3ow5cdT7RU6pFFGCXKBC9ecaQ2w7mrSsSLPWjWjLZFeaskaZ9CyZ6YgzVjMofsJgeiPGEJVeNDiASmY8tH5GNxUq",
  "key4": "2UB4RTDr3unsBi9WZJaErpQj9rqky9VzMYRWnFBnAF86aGMhMZxX4SRERSpXjvYGhN3As3GqrqDZiJrECAyGwa2x",
  "key5": "4NdsjeiT1NoFHcPv6bCycJLAfp6aTX7oYpcYPrUGTtveuigssfPbCnT9bDMBvixhGpEgCjNdfvCxfCW2YFm5Nr1C",
  "key6": "2GERSSScGcKaaPWGPiKP19CWLDwNj3e7UXkjJ6TM1PLZ6agVvHqYvgawXp9fX85jBAfpyhbxqaasUscRZiNyzjaD",
  "key7": "36YyJFiKR5a5AoLRY1nLdA7P8KGd8aZLSRp4tQQZM5JxRPYrRAT1TAmGoqJ3YQyuHMLHEVwpQGpQuyn3J4SLzyLp",
  "key8": "CNVxYarMN5bHXBvZYNFAyxS3d6XkDxY7CNRCQnF5zgT8YRrvDNsrWg4L6gY4ufhMzqxjtT3bFbUaYRVFS8i6EJ9",
  "key9": "rosjixjoCc4e3LHV8V2Tr58eLrXFZCAdnRRcy2dzNWxp54nF7YZ59v6wXG9wmzwJsFNARN4L3vaDoxAwZapW8HD",
  "key10": "61v8NjXQicovbvw2ra13NYmLMpu6eqNMGL5AMp2WfM58wNwyPyiQXVUqQmfYv97QESq3RFU9qAfKVTaUufHSJU5d",
  "key11": "3EXnAVEXqrbJWmqxMy3bX8yYDYnqQtMTpwz5d7hFokCm1tYvMWkBNR33nvNsJEWDWsPDR74HX7EbaJCiGqgCYEdr",
  "key12": "5p8BR9ZVNL6bzexhbxZf3xnoMg3r91VgtxdkqW6vXHK1h7eH5mWB1Uoez6ioi3ucTCi7U14xkF1LfCK2p5UkHqGd",
  "key13": "52oKWW4KPDxMVuiE3AmCs2otgPHSbDWy5w5HtZ89d4RAX8d1i17TEJNhZuUN8tcZTmYYpEhojatgYt5LSB9AR8w3",
  "key14": "4Pr2TJcdBdR4ojSVjuZmfC1vAex9tr3HqK4qvRqepkysBi4SC6JhN3vLZJ5JSjo1tcGSyTQyu7FYVqvaVHcMJJwa",
  "key15": "4a5iBfqQfD65faEr5sWcEbkDw1KAhpvJB4hyq4TaXW9hjiCcod4CQu6Dd9rbgQ2YcCeBgE7Wyj1WZBtyQBHcqEcw",
  "key16": "2hFcqC4gMq5x3TaaRrZAoqcyaXGMthKPc2rv9Qu8xyJ8MrpAKjT68XaCWWFnADX8Z6zmt2RShf19mfqqaQHoPRqT",
  "key17": "E6pdnfR9wqbZWaa9TW1n2UzXssAzC2Q7f38eUFGzUSqWaG5TX638XMXWmqwFfBuymaK3PQph3XLxmrDCaXX2ygb",
  "key18": "25W1Xq8DvrgAc9q82U6xmPQM8K9VRHE6ZCvbuGNi4d93xJW2MThesBNrT8czH6ZSpao58FCutYFyePSka6zkWNp8",
  "key19": "3tgXBuk2jojSJ1XbTcUvtnD6rPMsDUUtK9xeK2YK4CkVC12euiT5v5Jm7nzQcfhjii8XDqSNH4VhkcYZaGaeyaMe",
  "key20": "3mHBjUjoVmyYHwfgGemMMxk8bRJkjBwKxHLdm7V6xzsrkvXjqpZqbG8KxugicugcRpqmz52fTHdpq2wixFybkYwf",
  "key21": "5iFsJVTFMBdBP8K9jhZ2wcsUw7Nu3vgm2WTuMqDB2PJrsf5nof9ZQrB6pPy6KQf9h5dZVBSZ5DFA4NQV6849pvoL",
  "key22": "2nzUnqfKiSEzzXZp1z6K3BkTDZ81CicyQ1DfWfKFzQ1ziS2QNXFvvEFRqn3g4Xi9b3Jue57yom4tXXHRySTzPnHL",
  "key23": "5zwdhPU7uEvTxaqrb3y1KjPqNjXXfwgQEhqxGbQbWFu3QWtFZJCEikehbpvieUzn3uf9JYwhAtrBCvC4eNix33K7",
  "key24": "5kR8Z97syLPvMQDbguFsLfQn1zDTtY2ukYf3KNCuLZFiirxwBGfnwaq1HkPWsTbQXv8ZkgtMFWyE65bRnW9RZDHp",
  "key25": "3XpoHg92v5nHeb1bwST3ux5jLipjqeoV13uYdVdFWp1LLrE8vjYYXGBQ2WenPG4eQq5AeaaQScpDNgrgksas2jfT",
  "key26": "2PjAGi2MvFkwk6ajM3bjv2ixRhuGvMA2QFYCpFBwFeeXzV25H1YVSKx4JbNYXewPghDQNFMJYgJAPm8DQTY8Vt5e",
  "key27": "5XYK93JNdwnVUocMzao5nB9sfiUvbyEQHDVeCLBVVgBx6xFuJcsnR2tbvJsLqXQnSZpHSSjZQVbSSGeVVg2xeUB",
  "key28": "4sGaGDkbVJ8eVdPvndbEqGp5UJx8cZKZCECLWEz21ehvTcjMRpNmkxt89Jfx5g637uEAGGbQn2MvsQJ3JjfK86Hq",
  "key29": "3PmLBWLvpW55dkRC7BaqeyJ4eVNinpdVEJRMXx61AzhGqLXUdcMcaN68KKDxsQ55NnXajtmmdUXmLvzFTh4twouh",
  "key30": "4tjQZQxfmuZXJgcKC5b6LG6emt42rEMVqGjf6BnAky9wqZEvK6vF4UofBaVYzEuKV4CSzSZ9kogB8fA6AP8MnYVU",
  "key31": "32HBS58L9AJk7MA6Sx6EZz9A4WKTDb6xmR5eFsdmLZqWSAWWTphRdnfUaooaGKDaQeH5NKVBXRbcU4zronFy32p2",
  "key32": "5Gvvi7eaWVjxxE4K5WHXxPbVDHoJkPwk34sR8gLqbCo5pmHdpqrC8pq54RJg45kjD2Qj9S1p6af9oL24R8zYhT4",
  "key33": "5v2mTNe7rfTEfQUhCXrrmUqyg5Xm1q4r9SscaJBUMjwLHqbuCUX6Zhq3PbHjmNnJiqwK8xR4Y6faAF714RBXo5JS",
  "key34": "33xs3DSKZjA29o2dQapGnGYgYEnv4ruzQE8Xac6BVDnCd1nZwaXXtSradoiXw1Yqv2QPe64hSQLu4Y1eYvuwoYNr",
  "key35": "4vVWxW9gJrjmn6ReiU5R3DQWLcbjwxcDpyZRzxsSeQYcnFteBr9KSeRNYGXStUKxPXeTUoGJqdLv5YykX65nw7pn",
  "key36": "66XfFRKu98VB7vQGDS977AUHowywEQxHNLArMnwNuE7Gt9N5AE6hxgPhXfKKsAsevH17B7NK7ALjzYsfzQWSGTLn",
  "key37": "2vAzHhvTGCXZJJ9dciNifadvC5cABtBZVVWqWL3Vt8rpbGjWUY2AwK3bduywUrpQ6GJLnK7s4NXEqvoXedGKwBnw"
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
