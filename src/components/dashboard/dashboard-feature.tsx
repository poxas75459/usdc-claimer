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
    "qR9XYxtvLaKBwF2o3h9kGKd92LrwYuEQcKPMbFEkxLSqCwuJLLo3RpNwxACuABumk9cRgumrGppirjFEe3tZ3BC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KoSZwfJgvjRK2wPwHQzKWinzQRC59BntuEy1BWBxYiWEeZXfLaJy6GfrX3LL9t2xcwcLHwfQtEmtqMT1fmGyW2F",
  "key1": "58AmSDrCX7KcrRCFiVbY2QgwFKrfcHeQUUkW84GcHW7ErvwLbF7nDp9EEBt9vGHaKAmzEy2gEHnQgX2HRX7NDmQ",
  "key2": "5mM7aZ82d3gAPsKd2dbm3v6gwWhv5Gr3YEqRidoQyWmbAShtWW9p7nohznV7cpcz8iG3DuWYNdYQ3BiCrmqSjGgj",
  "key3": "2UEefeiiHW2tFBxQoN8xoxZLL68MNUoTRs41zDypY41dDmCcKrFD5fXZFEc9QVdJmwRwjCLTeHdnDJgSFUMXpbPw",
  "key4": "vPBRPh3tHVjhbKwEzpSdWnLsTM2YNDoxZZcnKjXxg7qrSffzki1HL3hCDQ9DAdRivgPFMiugjmpaizYJ7fMiJug",
  "key5": "297ub2mUQdqLRhnabsEDDegz8o9w1bhkE4JVJv9CHWyDc1CkUTXCAVhEthyrQ3Y7Fwx6Yn6snuoDHiioC5M9WXL3",
  "key6": "AQnDZKR6iDTXeYDzr8otoTfkkHJXNXBk32kqDN3Y7PC33Ls2iAVa62iU5kmpmscjFNVe28ELq3cP6SE17dfYfCv",
  "key7": "JgunPQSTWNcPxVfopUB6dQTXRCfmSc65HFUZtvU5ZprTgiZC6qzC1yUFgm5kZ5yh5vTpF6b9M8RPoMPbssVeLRt",
  "key8": "3eYCCzAtJNZ9JcWjwT96buJ74S8LZoMbP76mGt3kLJsLbYUjg61wBxGz1cA4ftfBwjcWfECQFC7ZRKUwAgnCbSZH",
  "key9": "2wPQvvDfc1fpJvGkfnyHy1XaYM7rkht6TXkY7Cma1Hvw6TWdRvYa6WGxsyCAwsptiUHb8zq65fYLTSR6XVeXETCA",
  "key10": "4B5ZeCisKc3fQDEXEnenTcnfUSucXjFLZovXM88CgfcTuAQpdHWq3kBHfFvExZokTBb1DGikPDmEeH9C99fDBieH",
  "key11": "3L3P7GzFvYmacHhgcDQAGyD6t4bGQKZKeFcJFj3VkG5echi3dQeYuXQPzZDeigjv5g318SgZ9HLnR3EXRuWnQPam",
  "key12": "3grdJF76vvuwa5Ha8Q7SATMRabTLWbjAr1WjVKqys2yuE5Rx7pLBQxLMSz61tSQCfPEtw1gqhLPEP1CnP99V8uuR",
  "key13": "3dJoaUCZuGBmqViHS7KjcuqNsrKmzH5rQyg8rJcJptuGvKkrm42TQgMBWEk8GXP3SFcucvTAe2RaQZ2TBSLwCPwc",
  "key14": "5yUSUEHLxMJXLoQzWDEnQHBhS8smsLj3P6ovijYkWHjTSbLPuXSmUoQKz8HJMoSN3KnbSANs5aEp7hD7DhKAunck",
  "key15": "3sCtcPXUSoKfqsjuj3qhS2sYJ5JjoPnRnmAHVtVm84Dd9jBtq4RqaiZ7ZxpXSXLYZS6fx7tqpCn8cwWAWkZRRuE3",
  "key16": "4iuf8vSMySFGbkVp8VD6e5x1NMcRtyEThFnoT4orwuWjGxuS1XB5MautedW1LR7QiCuL9r3YqsTAiz8ujLVcjNZz",
  "key17": "5o6NDjWG3ek2smokuLCRdn7jQ1xYFhGt7qARUhc5YWkNUi4fdSAvnHUAyzJLJk41zEiiTTC7hGK9mjCqqt5KQMqe",
  "key18": "3QGKdUMcG2R3TZiYJahCs6D4jQVZRCnKveQZvaezLxJWWygeyejgMeEWydzMZf8FcTUTsSD6XrRHLwY8irz1H22F",
  "key19": "5xpQRfTs9ZmbEo22zxNzGZwDjFfgLp5y4L4fgBDjZVK3UHQcfRr1bKZJFbR9Q9PZ8H25xpWvYGScExgW3q3ufkjt",
  "key20": "3ZpJpoG3apzeJRFSsfYpynDB5keoi8QrJW5gSwywZ5T1GhAiw5edkfwucGqr38rkHTrsAPtRourSaiW4iSFG29Pt",
  "key21": "4D4apJgPvu2UUYvCThkFFSEakjenbdd8UbiZcM2495Yj6LmkX92qi5R7TN2KfdXp4HmtUAGNRT5Ka4M6Ryvm2uz2",
  "key22": "5iZhgJgRRaQK3L7xWZ8bsxVJobcriDpcNQJUBt4wiR7ZXnNGaq6mP9BsMSrriSFFi23zEf6jgyGUaGtKFpK3mrWP",
  "key23": "3MH8NsvxRgNsHu7rZMnWjr3qSLqWKBfGmtcP5QZgpFzujsahcxqGosj34w8x4VoJHSvWDwJjS52itSHVtZEmo8Dc",
  "key24": "r3SfqEsBPp31BHPqGL2L9WTWm8652LDVZAMUq2N4svMoDfzPhb4wd4Se4keBELBwNFpv5E2TB7m18jPp1fEkzVP",
  "key25": "3XcNP9HdmwTg7szgTpRAyZYqigXNXJUnZCmUTkJivwma9BHozExxCwqutx5ZSfWTJh3jw3v5Vrtgchq8dTej7Xs1",
  "key26": "4mGdu5QBsamFraR3zgR7KNiUJQZ63UGjQoxJ8SdwoK1ZvSqiLfvtr5afb8N8cSeBGaKxKbJx4ro7qpJx6u4NEDKq",
  "key27": "qbKqVUDZ155yf2AHZzdmNdVNXJTLCTU9JgLvZwudD5tNc9bedPzvJcj3VFn78Sgzdf5kmoVgjjZTJLZzPHjYYvD",
  "key28": "3Csnz5o8azuec39VX3Pkos2CV7G4H3iZfQAu1AmBKzfNomhvFghmPw9A2BihaDQZFapptn4AZcvRTT73KwMhEBjo",
  "key29": "45WKEctMXo4cewrYYu5V6uHYwhFuf1Ny24c2qEQd3uMjxDswuh3RPJKqeSmfavUBDUi35L9gViSWfXxP8epSv5oQ",
  "key30": "kE9qodCWSmjq6mXEfbctutQMUiaF7QSJ41beymRS5MvoWH3ppB812Yma6iabCkqknTP8JPsdhGQQQSvbgbBkKWh",
  "key31": "3q2oXW8LZ6cBPxiCtnNVvKJgj4VbzPqw4snVoHWRYaek21go9v6AyTQAR12wprbq4B1FAe8Uiirs8QjyZo6L8wNL",
  "key32": "2LmUGJM5LnDQaLay8juaf2jpEY89hzX6G6J829aRj3j2KV1uVZ1Vj6CFWjhWNLiCkRdGTGno3UnkDbGuiYisMkje",
  "key33": "2NA1XHvcDxJv3RiiXw7qzFV7qMn1Y2jwFY5VjTmHVq5kbx1L9yJkDBwngQyTqiWCHbRPhu8qXSFMYgixD7RqsSKZ",
  "key34": "2TuSZyTuybgMAQaed9oqZD6TgEcZJxSmRUMRyE4pWPEmxGauXpbRk8axRtiQf57cy9oUAPJxmzZwWdNF3ux4ySD8",
  "key35": "3bf6TUC1wipNAFdKU9fyM2SANSzfScw6jnQTiDw5xC6ZYgFfoXoS8WRS9UNuwj9Nv83cz3MxeSRAMDyyqUZrwzkB",
  "key36": "5WFnyVgnuiwScAdeujSYTgm3Q4ZbsnGPyVMkkcqmx2QzCqDxBwAYyCuCSAAT9ZbtaTuKATefPA1wRDcCewzaSbZ",
  "key37": "4sJxXqSZMeLwCtkXsMvpmFcazSpxQwbdY2NkN2xYkenUh6jnuWP6bVhoMKXthscCmCjyUgHRwamFw71Lszy86LZg",
  "key38": "3bNt3gNDvRP95KGCxWtxS5zXcufq4t8TYsKHzugt6qcd9WVBUeuRyAT955Y59UzVvgzPoX1x1FmuBWBEciJ7v66t",
  "key39": "teGsfkF4zgqbcFgJZex2YgHbojGBf386SMipj53jpaRwLCx738c9FcjbBbfJd9HaUUDVTRyuDhaaZenSapHi1xJ",
  "key40": "rEPzw34U2dD9JukRJY3z9a5WSom2dDUeZR9GkUsxirs6r2pY7CoDp5nMrMAK19gGzo59g95uAENshKZ4be8enxD",
  "key41": "2Sbuop59XB3xPjTW3KrPAiZArYxLx6A49Mcb5wnRhVL6QSGcQBzCBPmEg7mGxGY6qAMfwGpwecXk7stXrxjNLiDe",
  "key42": "EJrvp29CLtiWRpffTvKJMt5oRSkBmwoUs4wXvgyLVrvUZv2aQjiWMgmrEKZEJidVmtzwrRwhnswZpwLEFBNczkZ"
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
