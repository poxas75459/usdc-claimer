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
    "8DzL2jrLAmxTXBXj1K8NezKwyP8DMK1ochAgYTCgR3SGCt24DtkYDzSLj9YZszbZ2cdKA2FFEQ7jSE9ojwdSm8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2kcsrATCnTBt3xggo544jz8z2oCyzq1sWAs4DSCDVHFbuKFqK7pnCAsNoQP3pBHBKBGs9FQ1JtCj1we4sAY17V",
  "key1": "2iJ8QX2dAVpQLaoMN6gsApQwobgiAt6kP87t6bF6cRkwiuT2rLw3sRnLRK4mGCuTceey7KbFVWmkDiK4gwrnBrAU",
  "key2": "3iqfhAj3aAZ38XEoLEXxkJACyk6MDZopSq4Sia9Z1qda1w8jVAyqiwvT6KbkgjpaA3FLfXLCbUPv9RG8nKtwJfS1",
  "key3": "2FGuWHwnGfkFgh7EUABBmXTf6mF2NeHA7Wa6ac8Fff8iRqabzFfP7ZQPexUtrA33ZChA5JawLTF96AbWM8gjaWnm",
  "key4": "AwXBJ58ndQYspk8zLybXNx2gvqLd3MVhXWUcD1GqoeJ3Bz329Pgun4vNxdsy9fD76hgFXdVk3JMRKVrcdbwDREc",
  "key5": "5iUkH8oEsDAgiSwVteshM9Yan6Ua33fdC7zVX3r1tR53nKXpJrqdtRVWBjbRcieuPNQjoyos7RHtX5j3kB7UDTP4",
  "key6": "4aUEBvnQiBSYS78sdfTV7SxZQETrPjLq9wSzMjf7N1ahxT1a26qUd7De9tY3nWkzWdjfXEnsu2EY49tUmjTJuDUH",
  "key7": "MHXXQeAUkfkRyVEnDpHLSUpyzJvfzj9QXEX8UQkZeiz5WV2sF6jRURBiQuj4Ai1SESz9Y1WnUXXzXa75pX6SFNV",
  "key8": "4SKrXjrnVBFpCZqWpd9VS8asdYEjbE6e8zWjEEoHj4sAbP4r6qMdTi9yWE3qeVnngcWbYypJ8QrQosG1LT5nuNCM",
  "key9": "3QdBdRuiNYoez3p5ZdJ2rF4R4tmJrDV8p63M71sAf9cBhfYCBThn2RHHAeX4qEDsh3161ZvDzUJhdWtjXXs217tn",
  "key10": "DjG5qpnyWz93wH18MfZoTsERb8PAKxsJpvy1kntJdVR1keph2mMcjvSfmm4Q6rE29yjCzVgFMEnymSTKo7LMRkJ",
  "key11": "2kVdd7eECbmwCi3uWR9tRxnfSJRGWVQ5sWsScxufQjgfyjuQTjU7tW4zgebrXNHeuma12rUhCwLyRqjvCsxT3cPQ",
  "key12": "4XdxUDkGbheqFYvy1GEf7uTk5k2MbiVqXi7Yns82x9uHAfBZsEpsYEiSdQ5XsFcAMSFz8r1JNa811o8oSnvmYc8P",
  "key13": "5zznTon4rSb7eqPXyxNaWAftuMGkE6SwZP3CZH7UT9vhwmNkBPwQSEmJGCMFq7Y4t23nmGnRnuKd8VzqkNBFBr6F",
  "key14": "64SqgxBdh7drf2JDGGYgufNs3uh8UPXFgz18YBpf6o6C53TBR1JiaoCRA1tRbQtGC2ZGT4nG8smurRK5JMxSsKap",
  "key15": "5TNvWTpqQGQDZvk9uK12zEfkMBabZp6y34uGuVQmBcS296HxbbtMzGEZjdanez472NFqZVpTUhwZHKtERjkHsNGK",
  "key16": "4pFKhcayxjL1MSiVnq7j1vq3jEgDzV413dFZQcne5VcezYqzmUrbRgKsQQneE3pYW1dMN7GrwhjvHL5CXKBeqQs2",
  "key17": "5hc3FRR6Mwm2844qBnKGfKQHCF95RkxKQ9dE8jayYeM5dFy3JcQJgyovavvNF8xDuQ1MZ5RXeiJHG3HynJEhouAK",
  "key18": "3USY6xvM3ASACrjnqnzN3UvF9xMSCDKXohez8uwu53YuNWdt6fiLtHedfL3FMfyTRKhnsKxyePFYespSPakZzqEj",
  "key19": "2dWshKYBcxpM9fptng8Snj3rLwh9i7cEmM4vwfFvWyAjv2k4KfMMa7c6ZmPvoNCabsPZjrYbdHbpKtJbS15yDbq2",
  "key20": "3Eq92mEN83xUHXa3T8Tjp7kv4eTsmx2Cqdv9M5BtEXJ8UNerqD9dVK67aDog8ssrJJgw4bCETta8SPrKgaPjTS2P",
  "key21": "4XCZTxrCMxBz8fiBEE9z7Si7QcSAdQ81tXaWw96Y7RD11B7yk3biy6F1Cwog9VNvZyKcLkz1G4ZcTLacPauSHYLr",
  "key22": "978eunDxb4Kpvz3cUCoRufAuxSZoxiPYXWHit27fcQgNSzJLdpEPCRUbik9Fj4LESudarqZfLAWDKU6UDU8qdnx",
  "key23": "3oXin9R2t6wEdEhNSd1R7kUZHRiqDFgoXXCssJZy9jNEwEHSLmKyGQh1ZHXCYSsjhE2KLAwkwmvbpv5riYwbqSy5",
  "key24": "3bTsNxtxvxEmXg1GeYapvVtnHuzTG221rfG7u1ZxDy2kxVAaKTvkNkGkcynicPnfL9GYPA1i7qfbXDkAgFuYV5ae",
  "key25": "NFJZJ3Sot6qCxfutEThxjUSUf1BchZKWDUC4oELdv4WgLrj5VsjyM41az1ea4BcMCXXWS3aWLPj5eDqucwNYnJW",
  "key26": "3GSYcqNmpbYWRDF4SzdEL2XbKX11yPo8YKkw8HaKQarKN93gTgW3Wn7WoVu27NYsea3QQizT7rvYUSKCkCExZD8H",
  "key27": "C3GqhUUZpHhrJmyF73SUsnC8EmHjBkYVF2vxP93t2PVyXZj54acWiEhMnWj4FoUSnyAY3CJDpkZ9ktyXh1uHwUG",
  "key28": "3bg9vdACG6xXrXV7qW9RS4KSemWawfkwf3pfBrZjfre9qA68VjhJTvC7gEtPFVmDbGfxo3iivMuFw4gzuM7tURkK",
  "key29": "5494mq76aCrsA14iCnUrEWxidSJCNzgBzCi5urC7FMAPNJzu1FvdefTqQnV2LXUTkNrdSHRK9knxgjT3veB5DkuZ",
  "key30": "41thYCGF2PfNKupe95tL7DjKsGwWQBHeES583KLjrZYULTgAjnqeZUqAz5EoMgpLsW6SbUy3tgRgR76wYJN7odtD",
  "key31": "2d69QLfTKA8f45Luq6sdbgyX8MHc2rF2v7yopMnEoxzveDEuDeXiehT9fQYrNpuoVkYsHybwDoCdEABqthi6P8r2",
  "key32": "3ojHaXGEYkmvE7NSddcwRShByyENpxPod9dT415res313TZd5o9KRUyBbo5yN8TEWEM3g29cYDZL9gsAWBDHutDv",
  "key33": "3wi4j9sXBMry8ioDF4dys2MiqCHsjTYgfPQTeZMoK5gYvTidTGoZYmdL9MutCsaYQxNL8gxUMugCeou6xquMj5Q3",
  "key34": "2qFDnyTRoY4kZaVSKRbUKmiHy49jLHKRqTEbAsF4BcB33Gqip4vRTq3oyH7yKURjqssxXCJrr7SwdePodH6KtYCu",
  "key35": "h2vLRXg1WhPUdbScwuJXMDFjXHeh5z6NYQL66oRWUyeb1RDMETDzKWM6KueF6ipYg6bNYEcMd8xiHiJNX7jgZ83",
  "key36": "yP44ruSyrx9o2VdxdyPzSLHGrpWAKVqFcP1dWiU1s8f7jKtk3Gswkv42jf6P9rU2Ka53humhhtGxwH1diwFQLsf",
  "key37": "mMPNfUqtRNw6w1HHzoXKqt3SfcaP8eZuG2iWN7WGUVyyh4vAVjPETqYjMNzAPc1RT3Gy7mD7NFaoCs9YfpdxtX4",
  "key38": "2Gd45xGXUcm8nLdszfzVuyLHnJiW9bg5G3MBmEd8h2Se1HU6vFWr9AFSKrVuAeTCVh7GYSwGzDovyMyRisbMeBoq",
  "key39": "3fqHErBWgba5ktUi4VpsUSqSNvSh1HYcngtuA69T6xjazGDWbub6GLdFKP5wQzb4cSpGK6YsUeP4ssKHWEEdxAht",
  "key40": "GJk2oHY78KaEyV89gyaNRePphfoYWSAGUQUE94pnVdLwtnzTBXE25B6SxKSmdPna5qnHKfGvtnbGTF4X5qQAgk2",
  "key41": "4C1ycEALWPPMMw95PCpa5dnDFSTX5JZFKa9K6hsnek8uKUBZzhNusiALTxvoYtysDftPqA2Spn7CphJxtUatHHfm",
  "key42": "3jbQYW81YDm1SKnHECpkqaiTGjDLoryns4xXdMXpAwuZDbD1Prnn5gJL6USzypQDRx1Hk8d5tv1vEB5KwtK2JLEf",
  "key43": "3ssUYMSTq48HLVGeGqSEDGWX98A81jQxAVQiXTEMmxnGG9k9JBdmZwKSPHWm7hChoz3JrTwQR9Wn5UDt9NNWUECx",
  "key44": "4QWVJrbWP7jCYzyR1WeEPMxJJc4CUUZ2fLsLyRsod1oriiuQEcWT67MCSDAC4g26eXjNcz5vMsLETkHXQbfuutZS"
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
