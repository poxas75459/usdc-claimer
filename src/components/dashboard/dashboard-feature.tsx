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
    "sB4CjT1h6d5i52s5gwqoX66YtiBx81HvbJ51kfi9ZeLS96UQQ9eTYo3h4pTh7LMJxsDWGhYd227qpHMUh9LmTLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SK1916TFWvDuDVd5E6Hzr8o4Hzn1CaWxihBujUHdzz2ZnYm9So48nnqVY3s237VSLfzvMhBADwPBr1V8jx3gZNY",
  "key1": "5kws8sRFWEfkGRRJr3WnuRoCCnUivtVpwkebVywy98ZvU1Yx4kTo6bAfGHzsEku9X55vi5qsNXusBtPZziQrSiBK",
  "key2": "2bxd4tFQMqpgeHpm5bcKxi76Mbvb2tm7oRu3xWZrob1dUexADhDvaZqPmHthKzhp3C1GzQ4W3ZH38NgZgNhhC3QD",
  "key3": "5c5GvYzxgokTdA5f3b6KPzfHGVAqUoB54VX55AsxcxkSPZwfSLDDUKQmQmjY4WqbiVDBf2jpScR1JrHauqiKAGvL",
  "key4": "2MbpyBX5DV8ttp7vbGrD1LmtV8xnNQwS1XSFDpU8hvMqpWMkwDVMc7pmT9nYa8QhG4496apZTV6zgZvVRq6NTyYL",
  "key5": "2REw98JgYd5uNpsZe4oMrUwcLmA7cbTnDJujq26gu1NfkmKrb7rCN3637F3xV4UrM4YjmbhjfGsad1N4RikPap1E",
  "key6": "fFW4bjN631xq6PFdrXnrJyLUtVKafFRwakVARFnEg7XESYSebJfNjmhyCueRAgqohWDTTUJpsBtyvwyptQtCbME",
  "key7": "9mhpCCQT3Khdzuy21h3TH1VTafg5p2kcBS884AQSSUKgR2PxXHHiBcTZo3yT88G1QpzyP99vbmYhSDtwZ5ajRLw",
  "key8": "5DSSnAVGVFSaf4DC6XZTZpyAdytAXhoR5saXv2Jaa3Fa24fznBDGW6Gz2HTqi2GjRxDH8U1wyVn599HEesXQHkYJ",
  "key9": "Na2T4hk9fDR6CDXsgkvCaDPLaAh9aUDv7Znht2GJb77xg779gmFqSzwsSpH36eh9LoaNfzrVNAVberuWpwiUyYB",
  "key10": "5g6bbfVwAKrnu9596aTWwrQRX98YJ7MAL1nDeZ6Tdtfbn3VA23CPL7qmWS4KkXP3wk3h2s2Ac1pwPHp4cWEreGWp",
  "key11": "5E6AvXRkh6gGkcJW8SAhTiiFugriCyyD8LfkMMd6TK6iquhXCEN6rxKLJJFpa1jaqd7EwJuRUdgvEsb2LwEu2wYY",
  "key12": "4Fn8kCMz15qJ6WJT4YEmSeJdNwvdPQNVeDwrd3Kso2VHBxCTyph2KS1F4qjxSLMhwagjw6Ybov6WfUhAAQjnsVY7",
  "key13": "NHcE4YRqqz75wrsUFVwrksSU2URToeET6rhuS8BEx3snJMj5DYyVJM5fvi5yKDFPJnnD3xcxFm2ovpyP3PjjgDW",
  "key14": "4sMTvjUTN8J5r8Xm6atQLYMCgCGoK3ysF4zyyVErnBPXmRPmcurEz5VGA7PvBfE1pNAFXzkEPWyd4AM4wqvkMqq2",
  "key15": "gs7h5az7msAp1FZWwk8s7aTTZP9QwJVzUYVtkQwUbGJm9beCsa1AHQHoQGCH4hQVz2g2vVkgVEBdtsQeSmKfXFX",
  "key16": "5BctJpexBa3B8WB4AMLDBxRBvS5hCTAAA3ZFHcZLfhbeajJjEFNcabQPHmqPubKuupfFVA7TmNWKNSDCpNG96sxU",
  "key17": "5iZQb7wi8YuAb5eonPBF3c7n6Mh7NZyEQE9CfKbWfJiB7r1E85mviB7b9p2bxxeg1pSb5SzyeFzefzdxqfgvhroK",
  "key18": "3WA7T3NNBDmjF4wWdi7YKaMvwLwjkyGegssz4wDSASVVuN7f4kVkeeHbwfBtkt6UzczTErv3pP2cb26FJVo1DdwW",
  "key19": "5PUxSZdPGDRPvM8yix3Lc4cH8Gu3M51vD4t7d6tBVz7p7LrKCDiMfiqtZ43KM6daKRVXcMDi5XQbRxmw3qGRhHfk",
  "key20": "3K8BQybHBhMpXUfGG1JHT9Va9HFA5goQo7yymXoA7hzS427fhXzsXeDddw8RMSD8VAKTJDcs8RSjhGvjjZQ3ezcS",
  "key21": "3faVzxj4LP3T2JwcodFAr4jCht5w4EAB1JFLenQ43S2E7QV9F8F7eYx3WJsvjBx5h17HcVkd12y7utZPFTadp1JU",
  "key22": "4Lorf3ha7hLodvLaPKayXbEu6wFrKBR64GLfFtYZtY3Gvun4qoZLQRbmQVqHYdHFhFEEDN5wDiJFp16wQVBhR8US",
  "key23": "5sDpC1nR7PTDbWcyxjmzzAhpvrKM2Ld3MuE9fv2jLaA8b5MWni3HF3iB4cuGSUSvw1mCkiTqdNb23gxHmQPigx65",
  "key24": "2QbsW81DUZCnRocYXGpa3F5BJy2NhwEzDgxesdsKdbq3tZHyKxbqgagMX5zTauQYL2cB3bAUL2ttyDF7TFB1p3tq",
  "key25": "2rTGfBXBav7NMxXZa5aHyyiUSUKuFuZU1AdVBp6QgUW7egpRtw3uyYPndr7jqeNA2Gt8VYnTTeqNz3SBTGWdJ6Bm",
  "key26": "2aXbkK1HyAUPZPYcGfqiJga4rA5zynKt7SMJEJD8nUyL4ZTC2BxD5jpdFXkLYzg8aRkDf8cEEH2fwpx72WVVwyFZ",
  "key27": "2K9CzgJvdYwqUBGAPB3F5B6smyxPW98UDZx85J5r127WY9De9fVC9dP6BgiSQxeJ6MDg4iYmJ4f6tDEWv6Z4UFD",
  "key28": "5eTykhCoz1MPY5uDPr23qdPJq8r6j8ct3r5cXkepnsVnRzGxa3c7nuGidRqysi4UpgwaLTJhvDgcSekvqMdxFhPK",
  "key29": "4DGU75uANYVRY7w5uFRbpiuqZekCRqmihMHgbch3783fLqUyEagh8JnianFTZgfR9iDyYXE71s7xL7xvXDFRPBSN",
  "key30": "2JHwVgkkwHcJfRqSBoX3cuq9zyd8aKaRaMm4Njd2zffkV8ARyykCWe5fquTupPyDVjVSQdjHvN2drqn6g2geXijE",
  "key31": "5CHctiaCEkzFo7pEADGEyvVoQxdFAkZJUZ4DwXYDZS4zfFuiqKXZt7PjGTyeQYEmuUesfT7uVUYR9VwerGc2hsFw"
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
