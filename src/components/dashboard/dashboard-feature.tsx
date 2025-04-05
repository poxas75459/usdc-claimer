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
    "5fEsMkTH5SFeEbBytoEt4NjBjtCSAamcRN5EhdxMWyigEQRg6JUdjnU6UUYvKHo8qNwDuKyAwV1y6zbC621zDKNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62WxTJtnBa9uhsx5En9DpYkce5GUpt5tg2EUzqNNTWMKiW2bXXLkRWCtuykVXyGNr9X55zPkPhJozKY9E5P5wgep",
  "key1": "4KzkerpAtkYdHPs1et86Qdo2Uie5phptKxAmw1fftSnUKyKLJhKy8NgRY1hYhxNr4SQ8p53GiEZQuJmYabNsT9ZL",
  "key2": "5d1Pd51hvGTwM4TQxra2WchtT63Bn9qiRw7L3YqBHr5egkAPCYYKtUy79WHfAEeDvXSyuc8Ka9ijmWnLJpDPGiNb",
  "key3": "3skjZe1kFU7SfiWfmR5LW1zjZ99E1X1UyJYi5qPRKn469Mcm9zWJcuESa2uvMYsnLejn23dzA7EqVJvjJJuS5VJj",
  "key4": "5L4sZc88yPaxJ29xJtvyFJSCqrjUbUKJ7ATvZGAcCM3oV1gpLiGZkqsmeEf2jF17atsYoed47hKyNgmJfQt3eKgR",
  "key5": "2KKAt4EHuvA5yFbXrk2U1YoVCLjZr4JndW9egkfnxbmC9sm62XUMajjN7kMN8PcZVQcUwoBAZK9nYgyWFxN6NY5P",
  "key6": "BVUgjPX8jymeJc4ATibmeG5JGk1pudR6XR9Hz1TU9CHDgNXMp9rXT8LMuTAxZXFa1nn8SWbaxBZKkbNKzYwuFy5",
  "key7": "5LB4LtqajiJCLGtYC7xbei3TiatXgRvspDx9u2EfAADhGDXqR5DwXZxLGS9uFfh8hG7SAJ7r8vMXPGNDXXaCuSv6",
  "key8": "5ZQd7LgTtjTt1egijvhp3d86HPxQjAUgacmDQnoCYKMDWuZQBKufU2UApeKhUqvrL7RfKaxZdueoa1caHGfR1rtH",
  "key9": "2Ln8RSj75KUyMVQjjZ49CkZfKeLKCyaoEiPihBreBvKuoDetCDmPCuyxUH4gugmNaYBBQVYaqNT9ebbp2Pse8xZf",
  "key10": "5nfsQ7Xrkk9GQkeEmfzRXnrd9SooyCV5bL2faaf2fMgPXrzZziJrdxt7NFxuPgEwvVSiYxkv3aSHUrAwwKoREgYH",
  "key11": "4h3iVyW6ucPmU71jWWB1ugDfMMyWVXX4dzn4fQriKRnkgxph7EESSmpWbjH8cZXyVKGtTLUq9FwBdoZR7EFEvJ3N",
  "key12": "3w45SS22eBJbz1U74rSqhakBJst6DpTYdUgxjUa1fZEVtLsioAy6P1hvXu26NsBAgmy3LDEr4rTL7BtgENZgDuXV",
  "key13": "24R45R7xq5kDVfo6vmHJ7EZFKamgAShZUEoiZHaomkGDL9942KtA7jbxFAQ3XMpGpfAcoXSLvW5YDkum7QYE25DC",
  "key14": "5JhzFv1YLwAdACJG1Vjk7gB8ESunTEffaf3MynKcb9EVqU95GWEhuqaSu7rjTPZiSP7mFVctogmMJf1fMKbgZdft",
  "key15": "2HsywojGjo6R4XqH7PtsCeJaVQzsf6iNXNQSQSD9ZGwiA53FkUkXDD8P1PB6GYkHkJK59pdvrESWJdJijxFFr39a",
  "key16": "2q5oeUZbo9JXDCVkS8x4WQ3AaksqSkVbDaD3jQk36S3h2XiAWY6fcsQTKjRogN5j1dWbYHt7pseNmbKT8178F84X",
  "key17": "EP5t58duYukJBjBT8bt2s9E286Yg5aqy63LM6M5ZuJ6X4qrZY7gPTScF2hJ6az5nu9uGNZsoUG5t3xhwgi6rhMn",
  "key18": "65pmG6qHZX9ysEovz5t8GJwV7VVsf4HtJaFXa6CTdCHcs5Wx7f4RKsf6WVTapWpZmKozpKBKLmpoXNHFKdYjqn9p",
  "key19": "1231uHjJQ9JyFwHmcvNnTTK7wizY9xPrmQKRBx9ShfgYGtWgW6JThgANXKHrtVLWzaE4ERsTWzjZwBFBP6rUjNNE",
  "key20": "3DeS742za6oah4kj5LAJEQ5Gw3Pi1EYFCn4yqTHponGN3TQ2x2aVkdKqioDUxXKXf8mgveHpyrfHqyh4E9q6UbLB",
  "key21": "4LdwLL4xZMZSrdj7zQFbjTBit3dCEkaYq6Cq2JqAdhfruawboeuJDs3TqdncdvtHXCaNKcugywteRuyiFjTMrJbD",
  "key22": "2Pq8Xz2N33b43KsB1B7EdmagrZDanfqEtt4obcYYiz54WgqzQoeQ3Bg1P3XuoN3HFGmVJAbfHchuiZW2kv6d61Cr",
  "key23": "2EcBwafFZKx1rNvW1jS49qQ9vVVJeaSoPk6p1ecjD7VApRbyGz2yUzjzE3FcyKgK7KUvJroqH8bECWBozzbMUSYo",
  "key24": "vjC6v4D5U6LhjEzhXSX7z4W4uGxNX6VtnvJAdqQmVYC6rv4A6sojutEiwjNiLskgK2mMK8NRshB9E7xCi7MsJ5s",
  "key25": "2mkPZkv8z7qZpQLYHKtKg4FJpWXfpNSs7ZzMcFn9N7NNCWi94XwS1viuFBfreNVKcFJqcsGSqTdQ76F2s8Mu7UmM",
  "key26": "2KrSHcvRjPojp89XzroRsdyuXtBFq6LiSkkNP8evjV1K7k9gryLV2hx7bTvYHaf3fFVq1MMxuGN5NAwKbbedT5JE",
  "key27": "Uwxzw1Qv5h9Da7Qtgm7V3r18ru5qR7rzHySrwTsCbZnX7DkwtcSs6AsNBg4m8kkbaiHZukpRQGUUjUkCyGrJw1q",
  "key28": "yaWpRMC1JDvpSzZCfnH8LY71icdqyYB42dj5cF4LDeAE8HGLhLfnTf93Jiop7vGGSxsT4LsLSTaQccu97MJH8tt",
  "key29": "3sBsy3pqAiPGaaevAzFqDuEzLwjqAhyUvNonKQArPKPUWCWKrSAtYLKasKENEYxiS6hVaoUxLU923fCsLDgfaoDz",
  "key30": "3GjGzDzpnXcyFwqNE8dtuCAKnewGdiXMi5qaXmFgbqaGviwV1jcgZ9ALKcYgtSiyaS5Ufe73WYjoC4AFawjXFDwy",
  "key31": "4ANNSzaL4kqWSYoZHwwbsy3LrfeQtxmCKH5vqHgGZtMaQaLJDSmHxpZ89Z5NqU3JnZHYAcH8ZJr27QZ78vzFjx8F",
  "key32": "GdWW3KAzpZh1LucozZd5Bw4Qjd48LUbZ8k8NLDWkauec3CH2bEuA9qWNW6khSY9iFnKGPPNMQcjZoJSMwRAy2Kv",
  "key33": "5beeWY6vWKMtucHNmRGbmdtu9Wqkgn7TsxqciFA6Xm82nLN4CBp5XxRjDDWVNmLKMavYAZF5tjEY94RVo3KFWZUy",
  "key34": "3A5WPfXmJNYJPoxS87C1nBj2Wtb1gtTJnCUTGuu8PjaZ9MGQfsW7yvMU5UxgnBPk8JS9JcKgfMM2QLsoRA3KMxtP",
  "key35": "3zZG1vQSxZ3yRFjJNVrqYDVKgPZNtM8AyQhEm3jBErL2uUr2QXpEhU6dKax8QArGS27vX3KgjLQteJjW9zaMnCS8",
  "key36": "u2dzfU3xpdxbch3LLWNbQE5hZgi5GXsN6YMRFDPgKSR1w55Y5F1dTL7VLcH2YR7uc64xJdHRQS8Rt7Lkrdzfdv1",
  "key37": "Ao8cyhLnpzqcapUbwDG5a7HBAEPGjTQRTFtayL3SXhp5NWWABRneipau4vpuxNmt4vSzTuE1aFqUaezDFMcMBjH",
  "key38": "2E9G5Y2q8j5PKBrQZfo1CcVJkmbJAzMdrQtBVcniqpZi6jiBMWgsCELFXH2yVZicMShs26GoNM6NynPfgdPXRCt4",
  "key39": "4dgo3vuFzdv7BZR5ynioaxXcVXftdHZtvD3rihCPtjgWhy11GVrJgk8xWiJHV4M52QH6ra6vcLNC2mUtaNHuMRr8",
  "key40": "8dXViNS4DD8dGDmDPZxZgzQ4B4vjaiPk6PQaUwGt8NLmFXThxseTjvkUQwVDAjWXPmGUzujU6pAWgEX8U3LYSjL",
  "key41": "4LE37YZ7Q5LpBsoZw8cTyt62ncRk1Nidkhcg3a5LMc31J42qnk5jQciYu4jXqpCTAXQxYeWBtk3ZL19zGa75YriX",
  "key42": "4ty79UNrenedqimznjB93ZzsvwQbTtw4mNRCjSYdrsscjFZ7dzP6VUPuSvEddCLoBtmezmYQMMj2NSkCLxjrAeNH",
  "key43": "3Sn6PAoDEk6uAqJz7NoC18PWeL5ZGMkxhm5WzTwXeGS7N8Vw8oXTc7Em4dwifeoBMNZKHczQKidk4bDQjGnrBCDk",
  "key44": "4DWNq43tb6gFY6gohNx6rZUaaaJLcqHUkLj3znupopGHBM9YvjFg8DrRoBzbg4jv5Bf8ddcARsCpufDQKfu2ocXr",
  "key45": "28cxox3HUxaGr2sfx163sem9eEB3mbjvQMWfCwVEhhvo4zREKwScW7XqipsSyYD6EhECZY6ATxZ4Ev2b59aPzJXQ",
  "key46": "RqYn9QB5ZTo4QwRsqiM7h3wZB6SySgL7Cr4nRYm5AVQqBLTaSbqXRov3zPkH7DkSdP3cq1HonCtdMDSZD2Kce7W",
  "key47": "4L5wkfyKq3Dk3XeMsReuKHAnFuCLavjNDwGV2DG3dmpqNYi9jci93pk8UY6pENW31mo8RVzp6erFj4WwV7Eezomj",
  "key48": "55Q12CsMCp9FZXyyNsZ9yZmBftkzs31Nc8q6uGNciGQtuGAyjzVkWLtxfaLwHAJhmGbQaZ8Rx8hZUQmMQLQS2XLA"
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
