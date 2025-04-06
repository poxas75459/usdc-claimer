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
    "41cpJV8tvuY7o65rPjNrRz6NgP4AaAzLRfqstzgekKXe4dCbN3iT7oo4iDLKwT9Enj7yvS8eGhkLksaP8Eb9F4SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CA76w57Wp3X4fRGt6YaLW3Dr2FCRXnH9Zu7km77RcypxfaDGetSumVb1gWDjUhcnHziLf7mxSMiyVBmaF4fuoyQ",
  "key1": "3EpDBHt7n7u2g94czXgF9d7gyGKCEZGmUdwW3vZrQD33coP9JFYiTPv9JQoAZVbeGZtGgoWyPdn6wsdw998hjqpT",
  "key2": "5MWJJ6nDDjp7jeMZRrxVqPFGQdi9GHXUNUzgRQJ4dWxtRTfJDbjH34MgDXV4FCo9yVFNxLmTgci7U7r9eavJgwfM",
  "key3": "4JxnhYrmt6phUCG2rFX7XrgCFjZY2BDqmXpRRUAFm2SU1XZS8cf254CTguiJ8nTmFpHfCr4F9zTdX9i2FWuiyd4W",
  "key4": "5PDPBU5J8y3cL6kvsVvMihHKtGUMXKZaqeVW8hSPwE4KiEu35dV8QNZK34Jm9LcBNsP6W7Rq34dCLGrwq9Srs7ej",
  "key5": "4UQCLsdbaGz4Za1MXrtCVy1Mpgrzu2gGbR1ywnp7LwyAbFsZw1aCvWV7YaijN8fEu3uoFUSLoRCSDTuGFZPwxSJ7",
  "key6": "4AJBxywkLPJ9mPsmzqRMbHn7wV9qmHGh25sGpKs3DU9kW8p2f7DPkbEUKKAy5Zvr8YPdDg62XLurqU2wh4ko5SDZ",
  "key7": "L7DCFULxbmXVvCBSgyp2mBb7NAjmKDdnUJddXzt27Tsk9vPxdyiEfW1vDNWAeaZGJ9JrzPYXEZRJBfSNzZimbNC",
  "key8": "3sWjCWyguYD5T62sy7xEHGn86yVsPzvjfeqaary3tEjZStw1GWjzuftGUmLgbmg72gZ8TARreUTvBXHUyuHZsvTQ",
  "key9": "39ZXA5NF4GUFaBEvKFymKf44FT2hXFcJTRUht6eoF7JNiXWCSQfdmjzqCHQjCYMaNL25GfHN3VHCbcNFMQ5brJDo",
  "key10": "59V7fTQSWiUtko2PR1ynHKRbCnC7xXwUGokieK2jiqRezEKgRowYccpa65TYvxauE6XgomicetwmFRunzmgE6ogr",
  "key11": "2KrK7DEwwPE5w9czNn28nvcw5YWxunkTzrKWeubmP62TKVhEwkjTFnRDgefN228tR6rgFHBKQizY79mrhQg5NMyU",
  "key12": "3h14Q666vTKPKDjWVrsFq1SGWeef3riGK5vwLqb33PcZd9ETABkw5FejFZBvJvUbFuqwhkKW8KYTTTm3Lo6u9F5w",
  "key13": "39DNvm4rufyRoLCshXWikSPg8C3UHAv6Wi5GhH7Ckq9FMgiiEEwfk17GrMZHvzjPHie357rDYm8qDBBjyotpAHsm",
  "key14": "3ZeLdHwju18nu2wgk5xPBnh5Zim5rX1QS5KpgTMY6RaTUYWoSDJmQCsAsTGts6zoMxsdXsjq9wDZEXq9Y9pstdKU",
  "key15": "25vYos3VH7gpyVrM4Ftu7Ey92A2an4jVcZQCHagQ8yQTTNExFCt1gY9T3Mt8h4KbMXrWXhqXMAvj6WUbnZJ4ARLk",
  "key16": "6746NhH2haBuFE8oBsn8NpsVvbsiH8s8hZX2JbVjYatb1Ha49pAfhroTA5gna8FdLERgYar1UmXS6v8urRDD7P7T",
  "key17": "4nH3CqKodbFSyzMUJUxhfMHZmTDHHjvsgWLXaYfzM5ppqPsBD8k3gsSVf4QywjEggw2WgVPwdHbABEuq6i25jkZX",
  "key18": "3n5J4XPNVSg1EtRRpSFTkhVkmeMwy5Kzp7Ag4WqtXN9jmNrJ8Jp7atwbrDdGTpDNzXKoqhjXJTh9uxBBjpFs12Jj",
  "key19": "NsdVWzL6FnhhaADaaWtCRhTr7biWTJGmKXqygEEyfwoTmAyegkFcZahmq7u542oUBcVi5VkF1ZhU9nXA3zxkpwC",
  "key20": "5P3j7iJuqZJw4KZpcr1w5KRMvwKag37B8ZgptsUvjCgbbESTVdZMVYPaiuzCJp9FFg7BwZ7zHZFB8fKZanboUWbA",
  "key21": "4bwKqF4ooKVNo6vFYt96tWMqZWm9kEoYnoh2MWDCCV5cZoAk1tEzohd5MbvAAkfT5by4ftTs6kzGbtX55s1dB1Fk",
  "key22": "5UGztHs2XMUFhBzbjJDukqhPC2d9kzSaZefz7Qi95e63fkfimTeULFQTkRc8W7w3pzV9aD2Kf5cUib748Qgivde9",
  "key23": "4tSD4LcmeXo3LRkYYJ1EKDMABHLG8tEFLivvMhQHYHjUTngeExkMJXD94c1AgeT88aZEKREqcHHzToXCE4CfWAV",
  "key24": "wRUiVubeRNMQtQpPW7Q5y3SuyjNBhp4wQZhqLNrHFe4BHHHroSBEuWLHK7NWtBMjD4bn8K7WwFdVge3g4eTJk18",
  "key25": "55mXiZeEbg4zSVv4x2qNaa3mne5nf5C6WggUHvwf3MrMvSj8JEBKxpAAUWM6ZuYuKLu7c5BeLmu5pkVG3kmoXpv3",
  "key26": "2H6BjhhwNkxPkw4Fy86Ka2P1hFqhWsuQmx9Y1gzKksSMj1hR4tiVnfS1joaGod4vdASUZQiCXPF9CduGKEhjiUHK",
  "key27": "59E4bGfTttd6Ry3iEsGrVgFpRw76mWt3eyMHF4UpZRXdU4x16aNc5Wr6EfvveB4kEhWWkKpWaM8HNWug5mWRnXV1",
  "key28": "3DHPTKcKA7K1iBHq6pA6J1JxLDFNEhsTEeiGR65fpYqK3qkSqGWqztcxp6fQ2yWQsnir1pCqaMiQgX5qrHuRfNZm",
  "key29": "4YWWNpZ8L8DSsKWv9r4nZeB29HoSfxP9JM5LzyQNxU8JrfQgWq8EHvQvRJXqHHSPDRXs4yRYRB6jr8aU1gsZnM9N",
  "key30": "67pyHtoV2MKbbhu8TmrTMB1FPE71bfVot9WZSFbxCb6vK1PPVqRm74maUJTmXEaRXuY1iH7sTRrMvQhgJdWcF9ak",
  "key31": "3VjPzhuNhgDsy2n1myRcsypLd3jtb3QZrbjUnUrN37YRX3musjdS3hgQiCnSfm6k9wztcAsmagHev7AUsocT2q9o",
  "key32": "4dFyuZTcg3gMti6TB86NGBEdYcP7Pa59UvBaFwaeVWcpZz9BNqjRhsXgXiHrF91kkFhPM8VqBUXVPgX6jaxXZsYc",
  "key33": "QCjkyWir7rsed34ETwKiqW2hwXwU2gqh6tA67QY9DSgjGNEhtL9KtrH4sLMG9d6VvBJe3nYHwvFLFExfQCuEMmz",
  "key34": "3xfaMefbCP7RmHBp5Ko2EJgREPznU5vcZbeFZUdWbgfxB1PihQwsyg2riVTFj6pJ9kBHdvixnVdBrZPNArAaedYC",
  "key35": "4WivLtxUBQ4je8BFthfELadpUN4AtDzsA822qHLbGXMdH8MbmFsjYCukrZPp5CXnb1fEmk5RVRywSiEiZ4oF3ixK",
  "key36": "5LpNNNoohopSNfga9osMyUPDTL8UuF88JPT5m4A1VfJZLtpui5WDjGbQ2UCsZ4dRaE4w49mkHtP4QiZnqHqhVknN",
  "key37": "63i752cLeqRDkU1Sh32CRL4uyQyjkyT8NxfH3ZWPWXoMG4QafihXB3Mgk2uavwYbrhaHibG1hND1DsBduMx6eTp5",
  "key38": "441e8dKKheyyMeJaEMqHJFKxH6cMiCHBNpGSyka8fFU8pJeV8AK6frQ4zHJ4YxRNgAbx97H4TsKGW1jct3Pj5VeG",
  "key39": "5nsZx51oGx6CTCmy2J6REN6ncTG4Ym1mzG22yKBBWi8w1QbxiW7CBBWFjsXoXW4YoDvGoVJGXmEgFVisGTr6hUMo",
  "key40": "3aHD8FtKVBfGMCKBa5Vti6UoxiKUrbrTdXtqKptmsjYiCGMrkUfG5ZUAgh98veSaqEffVmqKTKeyKSgDWs4kYthq",
  "key41": "2LFp9oJVKUzpXgKY5yhgpP72Tr2cTRvRdqiAubdAuvxsDdWSsaUAdmJvi1qTYKn8xUtmfu5UoYvtNdCJcpwDQHZ2",
  "key42": "4TGnGS5EZtKwcV3EsMDUAadx8eiRHqwth87zv4ctxFUkbWa8xZ7HofuBvb2mrtRR3cYCc1mo73uJQ5JVmLQYuoMu"
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
