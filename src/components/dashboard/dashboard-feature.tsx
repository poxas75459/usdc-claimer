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
    "5iTDXx881BCx88nDMnR8FeW4eHnnbvcmkjJxCrXeKwTuZEUNNzwpXZasjNnNyt5rbjjX7vNn6ZQW6JmXXkbYQXVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5ZzDyQSbqCknSH1yHJnwHG48zBNVSnJgb77XVrwZ2Bb2ZkPfaCe2bVZ5NubWERWBSqjoZY8vRtHV4mjnBescTT",
  "key1": "5zFYbV5qnB377UwWQKg5zp74bmyuihsWS7ttyzNMBBKRt92uSXramT4E12JQWPyPfTrJNGnXztcVKaQ3JSFGZea4",
  "key2": "64TJhcP7Yu49ubmqVXS53SDs4uYtDjB5Y3eVsXHwNA1Mk44zr3XJehJZxtn64GSXNvEJnvYAu2iTGqpQgtxH7LsG",
  "key3": "3GajiWLXrfdAaXU32JXc5M5HKckNdrLVqi2rxDN2VzKCZb4AoDn4tntYfvS5iRQuX13UbhqqZWudUbro5dbuPn9t",
  "key4": "2NKqyD62TwqnKsNBdjxgTQ4SKWmJkNbVc911Nyfe94TVvrQcMgxX53NPexVzRRaRVQkZFzXmMFS56NpacNrQ8nge",
  "key5": "2NkMygX5GpiyYarMd9BScqg84knE8He5zUaZbLD9HwPrjWxBChEJ4Gwm8cTDwKKEeybxT1tsvtEjQVgWucenTYmM",
  "key6": "2WqPtKamA9TVbrcGBy2gcLJ5GnCt61ni2YLKjGg5JNfEW2WJh298avKpJuUcjdUbHvQkJPbY6jZ9EcqNB9gVGGVa",
  "key7": "5F7Yd7BPppeNUF6a7SsYqvUo3k6Gy9PGXtpXUtjYt8sQJENa6LdHtUHuRKsYdjQy9zxxG8EKTFHCXsBMSvqapiiU",
  "key8": "4orQWw1wSt4QkvTF3r5nsJwim43v8NrHYqHs3RrPRSs8exA76fr9RkaYjMrn4rXEda4CZ53Dcsbiur2kf3LcYWYn",
  "key9": "XchT9uSsaVtkZw7YLLo7QNv2uDW5F6KQkwT8m61nzSXHMJvpid5dFwwsn5ves1J98fhTx9XTCgHcQXiu3MzXtGP",
  "key10": "4YrPcY98Vi7hQSRrEAu92e4aESRUX48gh1De3L8CXAHXu9oiWv8HFSyQ8Lchy5cmnBrerM9xghTJekV6qxc576PH",
  "key11": "5VDikF52GUbReNsA6bhxhsss5CAwHJ3i3FQqnqPLxjM5G8GsxoMUcuanFWR7ToYJjAknn7GSjbfyUKbvStBe6Myr",
  "key12": "4pU8jhMrDrENVZTcQDuKYZoN5RBPZewf8eZem9yFyoihcT2dE2XtMAodqao1h9UqofXbVhBYaSnbibcTj8RYYJ3v",
  "key13": "61cBQajxxKRhL51zTE7mBGtUhkcFqsUsvne63Qs1nMEdWrB3gwCdZij6DRwTvv7XkL4pn1kEFy6gMHyjshRrsyzm",
  "key14": "FEyXsC2pbJwwWRZ5LTuRyX4BtdJjUZHBoUvtwBW6p6NbZ9UH4mbHMq62qtyDUC43qFjUruriLPBHg3JoWA3rLn5",
  "key15": "EqyKvrZfX1CYCbccCgJbHJFRHMhUjLusUJTkXKxpDmajLySBmnPc35oNunhyJVod7NW9xqf9G5UfbmoWMm6mwVA",
  "key16": "2Z4Y1UcNGcemi7UWKc7WsizCRLpgthG3mjhnhWPTz5RChL1vdKdceQNAbuAecjt7BuZya5uZgwAYcSaKwSgQoJqn",
  "key17": "2JMUozMH3P11Z2D4CFkMQ7sAmLHKnzzLE5yuiPnRKZtL4JJgaMf8qyTmynPu9Gr2PVAJpMj693SbJ2ekoGgQ4Gwv",
  "key18": "2PDP1af2gEZbiPSYudpRWM5GKkTnzzt54Pf9ds45C6Y2naTE1D6EDCaJASRUJNmvzU8ENvjasnhtcuUT1LuLmihm",
  "key19": "4hj1rzAoa56TZ74WbszQGk4FiYoX4sUjw6kNRCTAdETyAcsMvonMoix53qu99X3FTjYhsU2gcqdN3B6jaXQnXNMQ",
  "key20": "5rN3yfn5b8kr5BvxWckz64TzKZTTggS9TjV3v5FvhwuBJ8VjVhW5NPrsRYr8VhLyACMdhzapnjbLRWUGahvyq5ES",
  "key21": "48aKgutc8wYP4CN6NVjzK7D26TZyt281CbuCLMZS6DoGGUx5yJkrSVxc4NETEfTbtW3t3vBkNjocokR4R3YohQRP",
  "key22": "3QiZYeXnmeQsJqZTtENgKQYXHWrjH2SH1cFQU5tKEKQymzKwvSw6KrCxoMfVzKTUkaPdcQhNNdkoAzBJpYYf6KiX",
  "key23": "cz7fhrCZDWKb87UrnLw8wZh8pdQi28CniXXkWHeF8NNaJdCzKrrdiUN33hQ7VT3riSDLYSBiwufvhgsYvgaBNFJ",
  "key24": "3P38UMaVgd4knPBvkgjxp1RV6ErXiy8eCw2K7c2PsZYSgAjLiy7X2q1VbxFkqzyHzZAsS1zLidjm4hfvqBitHreM",
  "key25": "UHrdg1NGZZHxfGFsbApC9e6P6RS1WfqRymkdAesrRYxyuC8mWFLRZ4AQZ25WyGtRj39i6z4SuntNJvTn7jWsgRQ",
  "key26": "TqDdefYHL9vhk3msqZNGvjNhSq7WAF7q7cwUVCau2TgtWfQARjh7bW7Tpd7ynZpHbbbVHjXo2NmRvJAi3XJBoGt",
  "key27": "34sfVAjSHExrhgG5U9xsrVH5jnVcbJTgvRq28aVMYnom6Lnv7FJQTcAGYse34woicTudiXgdpAhJLntVnHzWrrhk",
  "key28": "5Y5LY1kmYaLtvM6n9wrfVeAJK2ArWajXKvUoD5j81iv6Ug2dafsZmbKToAxQkfLiFaMv5RpBj2VwBDZ2EGKcHCU8",
  "key29": "5c8tim6Pk5APWY9x3tptkBYdtqoFNTBZ1cAM1W27EpYkBc7Bqgg6AQNvDeP1Tz1cfoE2xn2NKwCjG7UyafpKBoS6",
  "key30": "41UD9a8iKggS5jApRhwwC1z2nd1C5H28TcUdDz8EzqE83EyuDHvcjzAvyPmySmPfBiYhYeCknjWygPFPeXCZHu1Q",
  "key31": "4t4TXcM2eoYSnJyNnGw17imrbLgHRqAHrqkNqTad2BcypdaCJ8xLyfSShrfbqzSkwj4CLTHqys6DJ3ijEmb4TNLY",
  "key32": "3onvEAyTt8f9i4mZeCAZAESG6kkcz7939CorHotJ9qzVYp3edFkY6C9eE6mqUvN4Wtd3XZ1AmxCM9gBYwDR6XhLQ",
  "key33": "4z5XPVzUN3asWf831mbARMGQwt9Nz4TDtmnfKhM8QLpDijZee9FhokWgek98GQH9LFjAoDqJsuwuut5J2rphhHam",
  "key34": "58ifDjLmNhhtwgWhpreVvjmNEmzGJtzfKoPLfo33suZDfiFYDwryPP7awAr6JwFNVEHXaad4SVNbJPnq3BA9JabH",
  "key35": "TenS1Ze7Eu2RQw16BBqurFJUBDJe8WYDKp9vdQzQd7kEUoHvhCRykrMmH2tKgKCfcgzTbjuAHUhwxJivzhM68Zb",
  "key36": "3375YybcdBYU6iEAgrGbvwTvpHSsex7DmMpGC9cAKrhiw86VfcKcd9wCz5bqc1chjVsG8N1DoeVukcyB6u1GLrVe",
  "key37": "5ZDQCF8zhTrSMsQfiX7akgi6cuUDYKrdJtDdcc69bwyTJJ2uu2wLEW7XHbCp44maa8KL1b6vv2VxEf5JNGKqvbV5",
  "key38": "38tMPUqcgvo5id3NgrzGTyfFeXNco5LjXqRjubgXFk1rpUYVzjhuCYWKmV5CUFDBGoDCKhSkkxvZy6AzZqcb7A84",
  "key39": "2LARaEX9bvoYGka3vQstSbspyzP2FYTAig651agfzPjoCWNwM87GHdPLA3gdjiTQC4SXHSGAq9BfuUzGAoXKMLtM",
  "key40": "5X8eTQaVtXoEUC9x1bazn3fE9bdp2ZvsinqNueUFs4SYbKmCF4qmCTWSRBDnbvLa3qx5nCDr1UJ9oN5QNmYn4GDD",
  "key41": "4sg8wppJsmcT1G8gSQ83qKVDXDvXNue98JHdejMzKpSJ2YLriG2zr5w17M9AbopmZd8URoWG5cyRrTyhf8ciW283",
  "key42": "2P3sACDZXTadoQvW8tuZJyC5LpftuorJEaaeyNpFa3ApwAEFwY7D9Y5QNrzMcjQwX1ivV3aRAuQs2DBqHokTTPUV",
  "key43": "33aSEiY17q4iBKcYrJUe2x2jB4qf7oEmSs66VaFGLN5aBZKQNiWGvTngfoqXrPta5KfPnZC11NGArX4QrD8Yovno",
  "key44": "3qCEsxLG94ebDJPUQ6xEC7bTTTYPgF56QCsRr6D9y8K5NqyqFL6rCxmzknUdZpv6GnuBstbQ48FhMF4X7aqiLvdt",
  "key45": "2JbjQ5rybfL942hE6mNCNtUVt6RQsVCosfZ1fkochWqxU8uJp4a1SfYVNxxf93fz7CAvXor3VnqnQ8Eg2bXXSyYz",
  "key46": "4wnYSZVH5GarbaMupRYmQQeq1h1Kqf4y9MNB32iemULrYMU1Qnhe7V7ZDEtRjdYsU7Lmk8opNHbzJLLMAJfuGKmw",
  "key47": "3f5CS2vb2eJ2bBhkj72a7g3hJFvdiVX3ymNNMJmEX2f8Z2XBQVVGYp241psJWax5Ydb2Jx4JKnHzbdkj5eMMreFa"
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
