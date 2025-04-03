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
    "5H8GK7RVVwKEvwb6EVWSsN22quMb7rgw8KwKicUnzFJ9C9oqxmSFSjjfEuKsEtLWESVegSc8SDyStMDVwCKvBx4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pad7SSkWMpjGBwWQYNKR591ozP7vMW4andQiEmwBEuyuvgfNTMevTkev9buac5V31vv1qQ4iWGGjd484dVKznDP",
  "key1": "45orTkbHJ6S5riGbFCj27oPteDy2U297Apj5HzaE5rGxBc88MPjYFUKU2kUK3M7zh6Jpzx8cM9tD2Wo4XoJwWGx",
  "key2": "5bRe5sBkLFnYQjFqwM5wzvTmw1WZNPuoXD4mmCHbN6U9CAUkiU6vBLXkXcz7cpxBmWg7ZnYwkuEXtjB3aoctPapc",
  "key3": "4wmd8cs3vUJDeQ1LhvHWwCZ8WQjLwkZk512Hya5ZA3PmjTLKMZizijg3zbaCEZiQJgpyYnzzEEP2aNt9wnNNWRmq",
  "key4": "5a1ofegSuXYnb3M11ahA9kX9RNozgHLvEV88W33WsxQDvbfKoc9bDjuRrFdh8Hcgh6Jj6cnPiwjs1vKRhYjkzBB5",
  "key5": "2fhwwLkZgCyKKBiQ6KLYrWyoPCNgWy1EHxtUjQQ9sPJ5tuS6PD52jDQdX4DZcpBN1BYuaPaGPPJyDgUFqNAMjCan",
  "key6": "D8hkUqLTmLoYjxoidDUfRThzoiAGzff4VjvqybjSCZsmu1rxuP9FkSBzJDwpfXj3syMXi2zBTHenjEBXieTwaYm",
  "key7": "kfpdMazFdk8G8v8zfbfU2wxT2wqXxNprcsAS9KRW3UJVZiEmvA588uLnuRu59WaUhrGNQKXZmJvkweJwRaGFhoi",
  "key8": "4heu4PhyvA1pWkvmGTM86VP3zhSmUf2c3oA7E1PF5DoFsqQS85c1xuU2zR893XwCPdQnT8WmseFyMDFdUqgPi8CS",
  "key9": "128gVPWozBoegn8RvZcRnQDX5dGBxL1XmfXgBKJdujoevKi927cb8ZvVANYqc4ApF8QMkquvtES18qBVeg4UYo1y",
  "key10": "5SBHUw3c7tDNS8w4DpJWLGntgXVYjcYUkjDBuht4aBqxvt6BHdf6nEnCju9SukCPtnTVNigAc8WEbVC8L9kwY2GK",
  "key11": "QrhCaovhgRDLNqJfPFSZXoYtx8J7YeDd4bbCVLsCJ7kbqB7AVdwpRru5KrZQN4gjccu4AvnE5YXxEQcwQUH7TvN",
  "key12": "64ugyLpYSrc6mouirDrrASFpFjTREsxhH2vwMKGcstoeyHtB51RWi7wz6VKkv7Uk37a4Pj1cYgAMB36Mv8vEmWRN",
  "key13": "yjzoR1gbGYtStCAbFUjAx8En2ruTryAGnsBuq4Jjf9h7W1pFahoyh1D8rXqVyuud3M7Vq49ZaKGcsm9oPgr5DRU",
  "key14": "5KaF5iL7GtzPjHhrm2f5sWXaHqi89FzayPEtAwQxr5rohq9fZTkHtNf7fnvCNLRxB9F7edG73fhutHK51XMk2kmF",
  "key15": "42DrUZLBhbhiqC5XAuGped8cXgDZTwJQhYkYxDJHwAVhDzMHtocMJqXmDKT2JpUU98vZqAmybRJBsD6FDNGJVomD",
  "key16": "55Ci6XgC9r7UDg1XWAJdHwbdUuXbd3nGhAdkv9TZpBze28mxpCMKyh7Ag6tWJJLBUjSAJCL4nzWniDvmN6d9SjxB",
  "key17": "23vNNL7wwJc52Byj9mmFuxTBvr9i4J6MhsTuAv25HbjGjx23G3z1ihX4Mud2QYoRV9meWhnZQBvnixGW6iH8gjzd",
  "key18": "2n315vTaRapi4nQeL66vgCHBZjZiUDBmatLb5c2PXbUVr3AmNGLbch1tEjUjk1tXoSYrpPAmfctFhXXjJepeyuX8",
  "key19": "4HnzhMiTfPiLT7T1o428P9w4RyyUxqGWBH5KT6dpL66reLp2FxFWtq2Yq3Sg2z91pNfeiHT8Lfm6nLfQkHtP57M2",
  "key20": "3A7YKPoehUWXP1CRTckVX2Jn4H7MWyoUXgBNL3DDqmJkqvvdnQieJjAWJ6XRQMS3vzv7zWVCAmd2SUBFXic6WXrH",
  "key21": "3nt2n39ygY5cSTbdeYx6n9biCNHrdjgWT6GYnAoGbt7LvvN97BpM5iUqS22PK6SYXjWQYx4Y92Q3VyzAVkouXwo6",
  "key22": "3dc9fKQMpYHncNipnWuNwstbrM4t3CihG5bmEQVFHWqLoWgY6hVWrtSkgkgD4ba468W8JHbrV656LRvGDYAzKgu5",
  "key23": "21TXvUxfnuenQt1wGy4wwaLamU8YVC9YAXBWKovoRMxfVdKmsjv4vNWStMqDdogcQBciqzfmYS1M7ZqXcwcWbw92",
  "key24": "trWNMxT4tNja44jXtWjqrbpLyjuZGGP2oAofSYM1PcGWYU2sZ6LMC3kcLSdswyh5MP9Z2e73BgHzShu899KkCAd",
  "key25": "3sxtfJg7RsStAMcwSPSVnnkA1iPn7d1sesgorppUtam2YPUoW9QnX5YeG5876sfvJTENS1aws2aPMnPuQRvbNY7U",
  "key26": "4tFpPwvhhWX4J9w3BdT412sd4mSB63U84jNSZZH59jQbV4b2FqWcAEjdeZeP1MRgpMmyq5UgVbboRfcwMBajtKAF",
  "key27": "4Lkr7ftUUvREoUjzwG6qnYeMj1Rc7xhXQhPF6cUAqSM8yYUqHpSS6kc3fJJaRVaDb8xky1jbryhnmugHJFudiDfr",
  "key28": "2uoYVNfqL78XGBcBGSJaqdLhuKRygPf8SmhcxF7sq6uw9119imBATofdDPvaUb6HQeEh2z3vsASRPQ7yHzz1ZPAj",
  "key29": "5ftLbMqTz7B5pP3xzpa7suDs7rLF18n1m8yBN5sVtCmvbE35MRPKhdwxHz92cPrjLp1Ut5APQaVNfvJKQzYgyJuk",
  "key30": "5kNwk31v19YMPhY6up7j1KDzY96D5gmpfzM5MCALtSRhiDWG5yPcA7Tb7ecpn8wYgyWL8rGDNfDRoQKzuwY3y2Qi",
  "key31": "rF9fYen7cfFVzoS2Mxiuar7f3fpKucgdZXKdWNMo5nUYyLn9K6sqs5v7YJQC6bTPS7XkVv4DGCEDWL5mx9xJs4M",
  "key32": "3yArCu9HMgxCMGCkRGBTCeWTaMPXvhCfbyJeePDoR3SDq9p6LVWUaXHHNs5Z6mqJnxbACUoZhgSP2Cay5UXGqkT6",
  "key33": "4LtmbBkdvK4hui1XGf7ZhM3pB2J7NARP7okBYHMjN1iAi6QeCXxgX7ZHXYKHYxApSE5dpnGnkV5FWdJsEWcwJGpV",
  "key34": "3YMcmmfLLBeA3cMoqeFDpsJUygK9rHpy2CTvYis9ms1C5JK6J7mGyJkCTzyCd8W5WR4ysJrMud1vqMJ5LDVZfQPj",
  "key35": "21L8GH4dpLRn728LMjtgmX4rafsqDMuPMKaX4KUwCkFJfCuoSJVAZ3XnLEZZiK6vRuCTYuaPTZmBcVa6QCanQb6L"
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
