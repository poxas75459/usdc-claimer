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
    "2fX6qwhaiK6ua6At7MvjZ9zV2tUi1KH82CjwGySZ94nNboNUj36fJnwehLMsKqDiDEvwf3ipShEKH1uDyTGmnyGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "474NfhGgmgXFBnf2zUYynxumm1Us89BV3Rpsbj2qJ66ZzkgDDwsmd5Fjwroszs6pxm3sXQmmFPxXJtG74E7sf92f",
  "key1": "4V8hbEAHumzLDTiVWfYEuW7HAc1kkCYjDqgfXX2miVjRcqxhG7v16tMNW2AQeFBoTyGu2SZovGbSd899wVG9Q9J1",
  "key2": "5U5z4Te2fGRhsSYEDn4MgQEZEWG8s4MwwPcg7NRo8VefiXc3aengWu2KqeLmWqYK84VWGA5nai82QZdrwj4UmaTe",
  "key3": "3tBHv9wMJt8MCzegWJU4cNDrWzNA7JPM9BSPBrNhqoe8P1BdFgpeYeKkFDKPJQyui6wVmrnfCMzmwrN59jKZroHU",
  "key4": "2KF6dLvkJNK9Z5WNScdkFWdewSbMXxRbk9SU4aHqSSGzzEmFDAoB87uaiKSBN4KVYfweqzGtSTAgZE1YZD5yez4M",
  "key5": "1db2KLvZ7ystVKa9kJHsdZQynu1UReWyVEwNUD6htWtVcnohDg78xHCNYhujhku6jkEGXssun1meWtk9QQmRD9J",
  "key6": "4NnA6mbuu3QMNv6ty1eagnvVvZnQjL4Kd34txqdVsnyw27HuAvzYxrKdf3AQJr8YvQUaJ5U37zQMNRygeFG3ucoz",
  "key7": "nTLN6uyrYrXbR8mNLMKzWXjctY4a9GGisba88QxTQpnn2NPeCWMExtvt6aPtr3vyeFkMGtAMWx9bH9WDLFde5AY",
  "key8": "96hUmmdCwHs9FR1XaJXVFCdEKHoJJKbHQZAuybfjshNgstaqr9LD6fHhcXxQzRmHubZnnpz4KCsYM7AhYXRsUFH",
  "key9": "4TTjZueZDHBH6vyYy1CLooTNZCYmB3J3o1h8xkRf9YDQjgYQUf8w8yuwq9znbixnBqY86mSZhwTPHMjRhhyKm8V2",
  "key10": "2b8vEaX2h62D4KjG16cymobQ8p4PzcrfdkaDS6soCF837NShcMXuMxfR1S9nXY9AvqpLeDi9S3jXNJamEM39b1Dj",
  "key11": "3J8cDa3MFDBg1w2nJWccLYwn5wDt2Eh7om4RkTYF9YSRd93f1YrL69B53d7cXcKXDnvd567NGWjJqy4Ao1dDVEyW",
  "key12": "RUiJA6ivDfgxQcxbYBrZVHMdvkirwrirMbVejKoKBUB6SuqQEPXdvDTtwYvYgyeWod31NtfMmt9iqSzf9K3MroU",
  "key13": "4j8qh47Nuvy4B1upxqXx6nes6FiTRqtWYGC8eecwfqi3FJe26rm5h7K2mrcduAz28fhMLiFaYKV8Q6dKXaje8Y5e",
  "key14": "65KW66pPySp1f8xPVMtMvrWSqhytuoEKPMHtYV4hAAEqYwSDAZGuAzP13gC3x7rPyo2p7kvmrMJFdjrt9TpTJ3KE",
  "key15": "468ArQ7dW3ab6V6XGm55RCn9DT1PpmEyN43c9EvhrYGLhYkUKaore7k23CkTqwhWQ4dUPwYtcX7ZnCkcsdoSEwCd",
  "key16": "4sv5GByLFfcCMtQYCcsP9gN8mp2Cm6U7jXFvE4Xf9tyiwp5gDn7vnjhvR2GToA75pYZy2QKvxG2sUbhueKjzBScN",
  "key17": "5ZJoPhmoe5r6CwCw6C6EsL85xk94khroeH3npd3ixc115KCGXsdZnec9tY7SpcHRj96tHxmfwFSjnLPggAzyZ23y",
  "key18": "4WEnjEbjbUnoRjEzAQFGpmAej1UqKvEtpz7etdo88nyoGQkxsVKjnV1huniyZmZUi8tSsXHAoUYWnRUFBJtkUMUz",
  "key19": "2ERzHyFdNu48VMWVNsGtMMNojcNM2sxQCFwi3aXfFzAih8znQfLbFUkCBSnPzenZey67XhjCuj1qaU3eYSMzEDNi",
  "key20": "5xxUMfxRcbDvkyDYZ6LwLLbUhpmV4TCNHqR5M4ySTV6R4AQpB5LVyjPCuwk8EFerzSUAU4nXPmNoSxEhGVgVUiX5",
  "key21": "2e5Ckw2r5N57go8QeKox9F8F4k1jhMw8BL4umUJFztM11LvgNd3HQsZgKTw6EnHXQyW6fFDgfEmG7HZLSqQZRbWp",
  "key22": "NqNJQnDFD3Z9SsP95PtfFf9gYmyA4qAHtajFEFjDBPJVjFz4Ho28BnFSFBahN4D3kzZnpQHD6wJSoxayjkBn4CR",
  "key23": "2zWqDskgKraqZcymweaFZt6Y43Z1QGjCAK52TZaUwHmXcFsrWqtbeHZuMtusmXCgRs449vadDRqN2sXGLQP6TgjJ",
  "key24": "4RT4SKftzygUzL1HNEFMX8MgiBCDkYNhDp1PdUXAeHQSarBGRWEphuCink44auBNhT2qMSFuCWFjQkB3EiAeJRMj",
  "key25": "497KregvQF9bfPhjzrg6Q6Wr15n3dG2krSQZGocgFZzNqJSebK7egWfkDno5ErcfZ89x7Bp1c7RZqWWuubGGyPH2",
  "key26": "4G5gb7SpjQxZm134WN74S1AyeD8T9JcXpgzGN4n4S9e8mgkLTGgWBEnLMABswsnoE93fhZKs5RvtCXXujQ5zt2Uz",
  "key27": "4EEXDf881aohRwidhVeG3m6SkwUYFGoPhRLvmfcmgHm5Mn4HsYwFCkn2ssVp8AoWHt1EoWKSeYRdB86u934uFre6",
  "key28": "M3rUdVJdefaca7KW98Ee1LKwPdYb6JMTpmKEinFhgk6edBcsf8gbTDWyXJZsV9pwx33jsFG9VxMRnfmuNDPgP8Y",
  "key29": "3uN4awyhnN9TrVAZT7edAAhDAJf5xM7rSzFbQbqz27dDk8hKqC9qwoLeJdNz5c1C6Hrh91HZseFYKBEzauWpTQfS",
  "key30": "3VsfWpRCKEHmDvH19LVZPdYxvj9XDcZXvXYsuxYShM69QnVeSFZJubbCWTxjDSwGuhbZnanKuFX2mLWnsnv5DdMc",
  "key31": "63MvbfxH57inrn4iR7xe3tUUESG1ujfrHtBBmDuietd2EKgvjGwsKu6wvNfNgUKRTv95WNvwxQPruVRxnqdruqE2",
  "key32": "qY9y7pHydsRjhLXWtYGyp5qh9GP6gmVKEpxKjznQ7NKQ9FXJNoJgPnAJjmrnST6XKA59zUC4L11aMediqVPFhN1",
  "key33": "4JiVMULT5uMmMCdu7cdKRbGss8tTLqa6vpHcqvPHUDFGxAMqvheuUwopL2eWPh8SzeuKXD4RVkC3mU6BMdy5Q2t9",
  "key34": "4Ec1yV9DMBy4qKAmH7Stk6rdRDZXQjoXnRE7ns4atnsgU9bfvazuqrHs5CdN1GhuNDwBLXoRdHb1WZY4HYLbremE",
  "key35": "6dw4UcNFfC2wFmHWRybrWAnSgBEsT42p4VpBnn1C5L427K8MbPTtKrkd7yhAiWLJ7eZJVo62TPP1PgDKDhbeoqs",
  "key36": "py9PsqXxS1F13BPCjfRNY6iQxUT2cGzKkKSx5aZkkVuJzPHGGsTqCuAM6ZDWWZR6WehrrpJxaRXq2VeHx2fWjKt",
  "key37": "PXMigxgQ1zQD9RfNc8u9SpUc9Cmc7E4EM2zdd3LB7zPqfesJLLEzcAU65wmPCtFczrDn285SQY2EaoJF9jesWNu",
  "key38": "3YL8FA6a7KJQTiPzqUn8ptQ5yZcsN6H7i3SL6zqwaqgQJguU2TbpUaWCAJpRbUwuC1rZHieTGpiK7DcEosvkeDVe",
  "key39": "2T4jt7mr64dbP9TP6DHRTozTSyxbBnoxJJZEUYFVt8Ekz51gKAc9SLZRNfhf4nFzvzL1jXUPbkyvoh4ELEMfsKxg",
  "key40": "XUT9s7U3DG6oU2MHhMZ9krPmdkX69XMJqdjHh1oH286TbF2NPuLMVqP6b76XKdaXQ4BSxco7FB3AKoK1kqKLe9q",
  "key41": "56Wu1ioDQMnz86qPMykBiKVwcCu7u8xkqdBMxj394tAUrtNS9TkFp7kQfpmMw9FLk6gRJSJyCegHaGMWgt9ZNXyY",
  "key42": "2gLPd88oCf2nBMHYDte5U7jtv5NtN1fdiy5giLoubD7DkAGScFraBfAWyvbKmbgMS5Ys9hGp9woGCyw6WPti3RAS",
  "key43": "5WvdisW6DascX9V8rUCC2ykA3uZtwcF5FZ3HMzjBifGp956m72v7G2PMBPoSeytfkz2MzQaxANpRPHQWPUQmVB13",
  "key44": "2MahV8ywwVfamRo23exeU1AFuqL679EXTbVKZQ3eJRFmJkUVvBHbksjTd5kX8jKxGBgyvj8oPKdnEGfbd4QfqSHs"
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
