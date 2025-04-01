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
    "3VFXSnXHQLnYn9fhqdeU5m21sBZGni2BoqBeSDBJK37Ecxj5Lqyram3HzikcbQ8PB9yZ6sXQPVxNMzo6fg7BtXiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2boSTPppjnLwBShqmopmUFpRJtiFQKFwRxVccfkHLxfew5B412ry5aAGuDnz5LX8EUgY29Y71fGrK2CS5DobvwBh",
  "key1": "3pUE4KAEyr3p5NiAySdr8ds7yLfeU8ARXmPb5nQXhNyFD1ND1UCgPFzARNWFoxtLuWogQ1954KJv7KJgcjjofe9L",
  "key2": "4wa3Y2WQxCpyH85Bw84ue5dfPDgFFknHEtEGkjfLUJjq3ydSC2Jk2sg8HcmaXAAL7jt7UyLd7SmWE36WkNxYC7KG",
  "key3": "4c9MxCs5MQZzk4pRCNnWGZhKSj7Q9khZhNWE5CLj1w9Y5iw1iFLy3zT2AryfrZXYt5HUCsssyuZ8zNBkH8c59Mfw",
  "key4": "27AwfukAJyfL81GzsMckfAYwMxFuzkeWfBJMVeZJTECFxVVeF2SD1gzu8ZUx7hHcjLgTEgfxdNt82rNp6E6KeoHi",
  "key5": "GfPuUndhnUJEY3YrjykFm5x7WyoRaVzTJYNyQRoqAYfGEe7HMyTBJ4Zx8jSCnef5PVDUAVgvQmwuQvTDaf1X42F",
  "key6": "5G9CsbgyDqiTnXji5pDr1ng27rwetgs7YWV62wfo2BnmRhUxsB5gVvHdoRW5bHEAbRevDEKByGnMS4By2JL3eyNm",
  "key7": "NHugaJ1e5F9crGyJbfbDgpokatBidsQN5ZHb1WSjSPoEKahYQiUF2A2eHXEQh79N4HXR4WFhp5v3BRNY8WTtHgP",
  "key8": "3d2qvUVhZ8ZHpfi9cDP3J4MWeiLTWEyGFgDAb5rQehEE9kBHUNqKjp9HxRHnBwoxsWCbtBGVvERVHFHBrkgdd3Cz",
  "key9": "5axCLRqpDvQpyiJKkJZTMKnQ5RtSyAA5jeXWvruvthW8QzvykpEMh7AyhfuFBrH3223qd88tqVZgd6EoZvu2Mg16",
  "key10": "5doTtvHRjvfnbhV1erwmvkx31gyjMAW9Gxo1ycKs8cdMtBQUhqHWQhjwXgMGVkBLHkBe8xz4VHwhD2gcdh5X94hd",
  "key11": "2AuHjDudPDv1AHJwbTCb1b8tHjg2ocZDKyZefirrmv6encmtLAnaGdsFcKiCQBE7JrpjVpoenrUy3YYnQ1Byp9WD",
  "key12": "3XHuK5fzaZKq1Ct9HcH3Mj6V5RHobmGiBd9QuQ4jWjVocRfSAX63Ax9o1y5tt6uNAZAJUqK1W5dtZY2T7W1k8CwS",
  "key13": "4JqjAFrE39jXPQbZEJdafHvJ6ixknbqwkPdSxny6xGyh2AuRUEBnE4rJEHxyeZx1tmVhEuMqwh6qdkTzHAhWKJJs",
  "key14": "1mQMJ3FS8SuGyWZCGdGf1YnAHEf3RAfTRzk3jqR8mB79fFXvikjyXCPwjefFkTFe7xhPorZiYstt9G9mcwtmvkD",
  "key15": "3ed2DshMM26mFMx8D6FMakMa7RXbmBkPRwTGKvpUfyH55CtiUGdVwqscgu3n6H8R7jRN5LRiq7mqhue8sivzhuaf",
  "key16": "zhfVzp6K4q25QsRYA9Dz9ab2bk8Wniah2FJTtq4tNE1W3wRGg17ig4jGsoDd2vnbTJpt29e3yn1aBJGLUXHL4bt",
  "key17": "4iGp6NVXMh6tijvaL4dtfVeXTZXFTpJdQf5SAY5VEjZGqJr7S9C6A6xe9XeMUY61WbD8zKqnWeMrBNJggjLyLwZr",
  "key18": "2YvVuNXaB1mpme7MxikDx6ALPMqzrnHx89FyTmZJ7fktEDkkfhTGdk9SZNWahWRrh2yveEsgt85m2phSCaf1JTWc",
  "key19": "521wmt14uZnJaogRGhMrusJBqabcf1pfSJphfjn17bzKBfztsVrV18h2XsutMj6fnFeoyoc2jcf76viVSDTKFy2y",
  "key20": "4rLwe83Sh4jR5zxN8AMwZYa57Wi53oJC9PkRh3kHwrHwS9ZzG2XUWMEzp3UCHRKVeSUpK1o8GNLDjW3RM8iHtFLQ",
  "key21": "4GLLwcXPEy6isWpLVkcW5FEEwxSYCf18XEjyJM9vspmPYXiPCT3mRGWaZQz4ss1RWF4zp8B5LWZ42zF14WsD6CiK",
  "key22": "3ANMG18dYV9rY1QfWUEKdqB4YzCmwVjq6t6tNKJYX9TXmNq29uA81h8AacdzXjDydyXCZQsto8mAwzrBBGtp79r8",
  "key23": "5zZ5rmL6yp42chngD9ScHvJqK8VY4CzB3Kr7oQgvtUke5MvmMEASFcocua4W1o6xdw1afHf4Tb6hJ6YB5RDZ8KH6",
  "key24": "2PeNr27XHH5k5ryS25SA9WABUrCEgHq9bbAix3JoJLfXzYZs4qykSmkaoH1qTc3hQ2kxVk37gytM717n6henNkP9",
  "key25": "4J4nSgYe6kkznfkDk7Utb7b8wTbpep4VHGMH8eKgXmcZfVpmrpP16pCdwnF6ybN5Byj5epg15ksNEcHggVfstMYX",
  "key26": "3hghJBXcnf2XtDqwM9BR1bRGbLVBrvvXzyaY5J2HNuAZzzDLdzbgBtLMYBUWj9thnDqZHLrDYPEWyhQevecYwUwC",
  "key27": "5Aabps17XtoewmsCyRo6h8QVZZ4rMhuhM1hx2h88j4PBvdUy4wLkvCUdoWHaU7g2DtVAq51N7oxs71ebGcFv7aW6",
  "key28": "7ufLKNDzrPZmkzSnGQUz6EeYzd3kLQvG7Y7Z9GyN7Hnjrab4aBT2iGbW6GQtEEjA77z5pMSruzJD2n8Y5rF1coU",
  "key29": "4PuTcb5f5sciqdiniAH9LEw2i45WNVYVi6WKbqaZzPEMELy5sz3zbVx6tmtzNyjCu9JxMbinhW9vfVkgM7T2NjNK",
  "key30": "4gxxWkDhXtL5hVNmcxZCZaAKgKNuDnDs7541JaqjbyJbzsoRzKuJyfq7b28rxM5ziwSXa7MhkKP7RMkrSc2Rtox3",
  "key31": "4HHJfD72gKxsXannhpdrcGUiP3Ne3DzNhGU6Sa8GzFyosyikcjZisTiTgFePxbNyWuUxVN9KkKHGKjUw8mcth2xs",
  "key32": "4UNCugiFDMG4zzsCjVHWSaaUryRZdRETWMFT7TYnrfqK7HKamDzsXH1NMcpSfrJ3FyUvehDb7KgunsoBbPaE3piu",
  "key33": "2CBzhxqUJFYLu6kKZnePNBVUY23nGCydJmUh5yHYrdwxX3QseXSDexcjz5fX5UCSL5qLh6hacj8spgn1LPoPqUHR",
  "key34": "2TpV1GZCbuNHxvLYFKTdRABLMWfQKeo49kSTmGvymnpLq8kqTCMA4h2gjCwE3K7DKjFVyZXUfADzSqF8HaJuXYo9",
  "key35": "jsus9tmBoNcJs1u2pBqYBNfihCBZnXQpp5UZmdXbkHc4hGNSKocJoxSwcAhZsENxgKJVf1gCFHa69MLvtJwNFMr",
  "key36": "kkztdexjSTVbgyEwKGK5j1rTNow7Fsm5UpuHXZrKJWuGMFW3XhAzUwzLCsv5fQL1gBdu8SakeG8AtYCJFFJtPNk",
  "key37": "3pzjEpvWSeKxA9kh6kpFtXczt98MvyLn7VBeAovNfHgQYVoDpkDdZHi4CbaiZQDcScn4d2cC4aJBchoQ6oBphB79",
  "key38": "2sx5HgzzREZP5aFDzUKdwmGg6fvVsQkc49x94M9Ex5mUVSzhuQLtnPH4ykQJURKoV2tfU5qzAFLpPoYnESfmmRRR",
  "key39": "2VghqyLCw4T2dpLvc2Y7S5oi5upYMt9EzMGRnfCeUgv84yKjsHjfpxbyZEhnrEPiCtyu4eYCdSkLT3tGMCHRDEeK",
  "key40": "4fAM4m6CcVSzERwDMkAVQsRz661uibstGdgKETRB1kV2nS5VK1moTuaWi559zH9dShtMxDYgw1sBjzzqmyTnSobJ",
  "key41": "61uvsEBnYM52xBj9BJ7YYeEuevJ35ZUP1U4gCbgYHPL6jopn5YdPyP19dNMSjSc31NAnMFh6NjLmEJS1NK2MXs8D",
  "key42": "2LRLDqapY6DLnSogbaprCXDHhxEQPJ6anF1VAd9GQBtBwPP8F5QVpor7z8i3yYL8DUa1V3jxaYG5Vr1Fpg42jUNg",
  "key43": "vSz59ehpxMfQEEUN32VHXodJx2rC9w4ZBbkpbAFP4P91CD2EWVypV2xgS9cgCbAfsitFEs6vJKpdcG2ByqCXu1n",
  "key44": "33jKd97URzV1d6fRPhSHLhrDa9iZRcxyMHrdidkAcMTHDCW4bLUey5PJerJ6CzsXByxueUWok1bLnEczLXEYXyEy",
  "key45": "2ZUff31A3JkWe2Z72hq9kCrhZihitU3LvX2zPVsJzJFc416NzTNtuvLMtsc9BSJA4TxMVxNyqCKzE1iYVoMD9C67"
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
