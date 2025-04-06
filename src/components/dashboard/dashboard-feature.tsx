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
    "8f3XBZQKLCv8HxhGYTLxf1UdBuTkjifJbEpijcH4PaednsDRUX1mDoBtxjroqdoJMXA8gmpQXQZYeNCXtmbfh7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HCTjyeFv5TvW2XJVzBpSPNX4vKt2da61cPyTZNvnVD1kT4uvSAsrKsykb4c9MELLiMU13gpjxD7nQejBSbXZURR",
  "key1": "2GLh6D685s93VRwx2vv8xvg5pPxtMaMdykrDm9NvBv8wpZdRZS1vb7dgtZtrP8HvzsdGJXepjGNTZeKD4qYnipWB",
  "key2": "4hupTVSavcSMFZcjCFfD7ooJ66UyJ6pRmuFbFdJCBY9vSUTzGWMkWogV3rXvNwuqoEUD4TSWdhrE2e7JukmxCak8",
  "key3": "38fk2ULCpD8ujErEjZ18iTd75zh98WmJ4YUqUeqimxxpn5R7t1qrjEraubHE6BUWuWtyoP8HJmVsX6WcaMspHSX4",
  "key4": "3oNPzMWg1rKb2YwstsbhuhHM1cdL9zxTS655pwVcpvRe1ov7E7XK89Vd6mjxLusTSFqa6bYomyGrqgBMKjqqJwwA",
  "key5": "4fbn1fmBcM5S7Lmd4U1zoLeGRKypiumMj1fXXn2fWQKwZESZB8bUiebLrVKnap6R5pKVFsLwbBVftWNQDe6g9Umo",
  "key6": "2rXEtLmfs8Tr5uZ7atdNyh5dTP3x9BeYNkXz3sm3g8hsSo3pttZNdpYu7teor4pNPY2eiB6VaeBYtkBjYJttintV",
  "key7": "bQauVrniTh1BJUgHZddshFihGh4W1iHg8JVVMDe92jy9CaxUeEXYKKjAQ8yWyepoE9rbukxr1nasd7sQVfetjEQ",
  "key8": "4jEmDY3H4Vx9pVFiKh2YpCmtGLfpu7juiUbseMKHmgxxJxeHVQfUDfmxwmma7dNKRUJaeEVhTRyPHEhtgsbq3knr",
  "key9": "5mVfh3KB6mznX7WX7enjgdDopVjMWU4X5quBJRzp7B8LC2AgRSZgNV81S2TtZxcXgT4mNzMd9eWhp5QEtZrMsygs",
  "key10": "FZuEjyEmAFQcnxXQUcmZhv2dHW3FZsyH7VV82mLBkDivCiSTihwNqthC45zrPZyEbpDDDKpepswjKvVd2h1i2A5",
  "key11": "3oNa9bdbxbs2V6uMxfFm9UZsvwmLY212HUbmh9qY1NsBQ6NB2yeeAFjpEjAAvKmALiwPEfW1hPxY996CX9FqVCN7",
  "key12": "4gKQq4n3PwUX4jfUhyJswhf4ev9CovZzedjDsUrGohz14M2zBgBnFBC8oU853SxA7sB6V33TDJAHifDadumP4wCu",
  "key13": "4aQ5pUh8fGpXrgQsT1hGdgvnS2sXJgf5xitsQgmzZ6gh8n1cGkcMtwA3BzhAvUg1HccaNGb8fxZgeCiVV1mDuwmc",
  "key14": "3c4k9EiPM91szBxWkrjHXZUUv6WqajnZYXFqkyTTZNDHnQsTGvXSUqNpMsaCnBHqG3cCXdyKEf4c4uekHzxP6WCN",
  "key15": "48zdsM4dFhVM6E2MVcUXPUTsrqfonZjTG9e6srZEWmTykuNpuL7QUdHP8UDiaf9QycaA2HUcqnNk4zHwcjjQZqKr",
  "key16": "MhdMEpadTAUyiGWp7nYxGTmWj9sf21knKUrFV6eYV8FZHQguemGJKYMS6s7pQSjdLUNkwC4CgrVx8RiqaL9Ag4X",
  "key17": "5szynH7sy5EUt8yK7sfGXcJBcka9ZRGK3PTaF5ghLxfvjvymvXsFqtMEjCNXpqQVfSQek8DE97DtLeEtzXcU1GMw",
  "key18": "3XRJ4Hr3HCbqLqXf9YeGfQogg5uvLJaAT6DYkSs6reCy65PueEAKSMw4CHebDWdDZZoZKgtE4H45ks5NGXWjGh2D",
  "key19": "3nK5C61oXbVf3jtqEBvdKVKBMTdZL7n411oigJxSSodZjzMkGK3KoXubA4ait5JKsafXugA54jb2iokSE7TqxpNd",
  "key20": "2kqdcFdZ8woZAs4raLvsge6ZVk1Fcyx6Rn7rP1E6VanZ67hoPBEEYMaKV3PFtZa9xXJLHTd5qw4TRRLvvcfZtEJH",
  "key21": "3TJBWJLQbVGL76EkzNYMPmi1b5WsdTVczGVBswGTSoTdRzrJ1ukCN32Bf6M1h6Ti9ZEGpLn9XAqQ6tyanj3aRUVo",
  "key22": "5BkeuJrU6r6v7wD5k2RRTpuiyHxgrTzYgHkxyRiZ925s32L6EZ1x5D3V3CmJ4BFdYEpBLWgPCuA1uqSjbvm2ykUt",
  "key23": "5gDa7hbNFV4wsR79NcMFLUiYPFrw8CcCT483nqpn4Ejzsw8ZY2ujmpK9R4aYRKe4Y2MXNfByRnHdk7oRUcZPTwTn",
  "key24": "4uCGZVPnUUNxTy39sqtts7Z5q6nougvXArqYvQMrMyr9ywR6f1BZiHzjHkqhp9j5YFvjSGqc1eVq8Eo7CUuyTdy1",
  "key25": "31vRojKUvYQw8B7B5mLPqWKnJWpwm3n12rzUUyc8efkWFEJePZURa9bzewUh5Sq2gGkPwGXXFgTDXFCx8ua7GZRh",
  "key26": "4Km47uCZbF5Xm9dK3Q5cggoFYEzXLZ2wjgJeYchFrZxrPzpJec1S5aZDarXExdF6wVZHaeop7hwzrHXrdbTmn7ZW"
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
