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
    "5WrxSJRNt1sky4DFWco2KZnU3cuoNYb7D9PRftxX5eTERkHtgjYtLNiknC4CnnG88h8PRPQxffamLsvfxjYdAGAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVuPX9sNH87MrntW2ZU72ENFtXrV1MhPYG5CaUT1XBy7n3hasCV6yagFuPuHr5LWRGrkuE2Xn27oZpuKwS1Y6Zn",
  "key1": "5HG6E21u6Uzmw9frnxeJMsPvkGgP1RYTH8kv8fxLvtw3VYmwdptZPzc6hEghyrGCgT5sMMXEro2TRJK8BJYwRqV1",
  "key2": "2UAKXhxZ1JV6286eimjtfexgvnPdCn8WYH2f6ammawJQdFrQK7oPD9DNKnDFV8Yqodfn4bWUmpF6nVV7aPuaW9wV",
  "key3": "xfsZuX9ZnTCgWGRch188da1Sf3bpXNQKqf56Xwebc8s9fz8prJWdZpRu8iHNkPnQJhWePSLdsDmLQLzE7Yju8Jo",
  "key4": "3KBh1ytxy5EyQwoYEWYizwMAxQytdDQMrdGjFNKgroWvdDEw1hdFMYFFhZnQNU9HLgp1mTxfSiBoR9FmQJpKjBnH",
  "key5": "5y7EvPeJP7YZfWTXxMufA8fmKDvjGLugbw8iMTgXumXhH4h4RGmyPrCnRc8t4maoeKJS6vXaVzXyJSaDBbkGuwZY",
  "key6": "3Gj8WjTHBcFSKgF9jFa5aNVFeaDLvAFsdQZgPZWzn1HP9GTHEmf2ne8Tb8DsxJQEFQi1wHtyPtCXJKuiwuoJ5k4N",
  "key7": "5TD5gvarS1zddKTkonJhS4BnEfd8ueuZAShqnS8NmkoKbCZPjSrbBW38Vr8kGKpi5NjbBKxckAH1wBd7vbZGLvMP",
  "key8": "4zwx2fLXLstZmMvAA6HUmfunZJvjVApBT1Htuz4q6PG7EbrnpzNBvZRFQnftWADdHsh9AGRb79q1bjdQ2tLHoS3K",
  "key9": "5fP6FeG6deHXAUB2iWDgXnDscbeG6AzQDXd73M134EtP86jdS54WnvQW4jz8hcFpJbDmq6nE1763x8zVkSbYFQwj",
  "key10": "4YCzxQYACgBwsBJHog2ftHnpoqv8aS5VBmnBx2rGECYRAi5fd16EUb4aCqeFAy1r9nj7gGLPBgUA2VBMVHTDGc6q",
  "key11": "4N5moTXk5fZJAsqXKWYLLmoQsG48GSwUhj8nzWHi4uZcttMPVqna8NKBJhwL8LoLkU4o6q1dT6NzcvxjVWXxxkUR",
  "key12": "4XNbbscYLzY9ioGzVyyFZExXZo3B9UAcN7WMhqTcDsvjXJWVmtXQDUxn6sGq61zJdPR6TJEojJX1ShzNKR3UJWre",
  "key13": "48BG7q2DWWRdwffGsqWsmQYsJHmrXLKZ5TKcEFZeJYxu1oK9LDGZqWNuAyoBkX8Ep1iNct56UZ4zmRFB1yLn2CpQ",
  "key14": "5bFHxtByByJyS6fAPnpmcNQc4EDj1WZ8vv5GsCBoWXbvFgQrcEBjXB7Pw8rszMQRcRPqdw3Mh8BtTdPUohcJo1Gt",
  "key15": "5aSdbC8oPwBBUvKR81c5Ak4Kn9c4X6YxkgF5XCXkU1up6ErRRV3bY1GpCy571JhNppuDg3U1UvM8FGZQt6fcFTK7",
  "key16": "3nSkC9vPtHipo7F36oQq5VoF61wXtq7MyXMMfJwZf9VQaLpqfQJoSmw8oUFQbwWYut8bg1FU2SNEEWGvrKPUE4oU",
  "key17": "5RRgNRJVfDXwCNSUYgynG2hHzLvvhA52HDrt2QHAC79Yvnk5m634YC5kkSfvezKZ9u9AjnJqK7qGyjhgKS5YvUg2",
  "key18": "2AL6moK4kUd7QoyqaLZSjpznmXJvkfresgtYh9yEydn1i1sXXY5oavoKZ2VpdSidQsRwgRUcTkWZ324dLaBv6aXs",
  "key19": "5w3kFYMri9guPihn1hgQrgTF7nZ58PAh4tkjeKvfVhpN4PnfU9urr1wf5a8N87bNihtz2S6NLUAqE4VLg9jPABhD",
  "key20": "zmv9jwE2v1caXNMUzsfGuyorqjK2Z1mXQ4oxTsedvpqAw8VH9z8gZMcYUYRjQ4gVEfoirfR2TyvkDgifYMLtGMt",
  "key21": "4avz8nmuuXaWKuMEPoi5L5DCNUpKdohNkBXtAtpCdQTzp33zSWmW1MWySeRHjAsTifPtTKJkvHkTPhmmwumXnK9i",
  "key22": "4ScGUaBJrJx2CC8AWrfEnNri8XFn3vLhAPasnja3z5YDNfeWAFxYhUUA5YDayDsHpB4kbDWqAK6UEVJ1aCK7GZXY",
  "key23": "4j3d2JVzUgU5cqmFiw5QLy7LcCRuh2evYWz2tPFfNG43THNByioVG3JGzaFZVwJPzuMazxcBeEgKxkJHJX2xy2bC",
  "key24": "4LhEgssxHUVmq35uTY5skUJxh5fmVfsTsqJstAYTdPZdL7c9BBVSDtnRv9SdCAHWKv73zhBSnspfkeGu8JpBnx1k",
  "key25": "2rffzbLMiTJB1UeHtreNTwYnXr3x3z6bEfdgf8Bxsunk35wLWJwbME1V62rG3o3NjVEuxhtJ1bMEZcb77C4Z2FBb",
  "key26": "2DXQvLkr818md75S45J25Kt3YUjVGTmXaPy7QW25ofUtxhhrgdME7r1nX23tt3QKBGAHLANZH5VBCeL4UbdRadeG",
  "key27": "67neznvuXBt4E1z4ATsuqjdnGTA6E2QV8EBC12qpwWd8uZ8sqtAb8swtxVpnmvH1ocvqRQsm9CjXEfgh46FMQmdJ",
  "key28": "3kgDzue557A8gryfBVGzs2jBH4qp2iDx5qJTuVPQvYdCxXScFxxGYiKkJr48qhkP6HucAs5JaNtpf8kCUdJSzWLk",
  "key29": "21F9wU3CBdTNpR8W6YQqZH4ZSxYG6uvX7hGHtZZvuNat4bmKeZKuRh6rZFznJgELhLY6roiykWigPwLiZPVmqFbC",
  "key30": "4pqWLuZbbAqBTRy1JpmZpMnYRfoJbECBpARwRzGtQfHgVvLLLeJDtBVhm1eu86fDf5YTk7FkkXaz4J9Kh5DJLcue",
  "key31": "2nyzEm4AkhxLs4szFcXgFZDEs5Jn4hbHNaG15zpusRDwSGgxM4DeAzDqnyW7Ug9d2bW4dPreaxnNNuTKkQ3wqvo1",
  "key32": "47zopbuyttB3mVBkYu2ZJvk7CQdMLPYcwuNymau4azmx1w4AnWCayFezrhLY27hVu4CoEf2Xujm763kY7Z5JCHxQ",
  "key33": "Rpu3qtrWSLxRmnoUM3taBTZC6Hb6TzoTbS7zfZ44k1zKUtQjp3es8bL4mxDEqu98rVBrQiZDU384QnpSUWC2AWu",
  "key34": "2Ceg7wPWK8obdnuVskbL7NbR7vzWXKnkE7TBqPuB1YM2wYZkvehqopsKM89uPDsJryW6W2JG4me1Vv92J7HiSidh",
  "key35": "2aSmBxY9CrCT1Gc9yQCCefem71Q6MuoSiu5P4VGyaYQyMGkNwBCtZ8Wf8PmZHqphkPsTXWvMpw1VacyaeFB95bPF",
  "key36": "3auFRJehkica8KUo9ppKgp1sjYrcwySzP4u56PwqP7bv3noMsfGvbDHUAT152YvKGRueUx6P7qm8mLdDqFmFSRvW",
  "key37": "AjMAaC7v1b8WkifRZgXK8VcyX8ZEYCFr7Y1QMTgHQpCGca59S2Zi4HoM2ojGbhj129Hzd8LCwjCakyMyHvNfwhL",
  "key38": "2LdXQFV8ooNSjsyEZLaVLM7GZQeZeQ6a9aBkZX1H5U9eGtzGPLLE6jcPMNiGyU3QUMABJZK4eeyWM8CBWhUQCDEP"
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
