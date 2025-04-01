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
    "2Gjh7mTfQnP4KQFGFZ4huvshTjBUemEG6K2idvQkTewjjeok1pcGpPed9RX7aZERzm7PeyXV6fRFmbJfBeVdHz1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hfqv291if5Q3e29zRTnJfL5VPnZCg7JBD8aQYVJybKhiW79TKGwWWayTm7SXaMbzAzgq6YuG1Tq1n5ArUHbD8pL",
  "key1": "2eg9VN63pQEx6Y5okCEx2hsXUsBBjHA1jfbiAR6TbiCtVTHSfHK2SSsAXN9xS7koyqxCdadUuqa8w2hFX62dBY3G",
  "key2": "52zzPHRM6ntg2jZYXqFnokEAveanBt3TayfiswDhXjFgDZkKrtJR9aHUenkkHg996VctEjy8PaL2r7GVaga3RSRT",
  "key3": "3imU3T4PgZwQ4oBrzNC7T88zv3vasJoJSzAQbrkMj6pSN4XzGdiKregR1zNAh6w6AHKfxPu8uAPFqCmZzSoYaDBQ",
  "key4": "2vR9TKCXEgPjrDEBcT2zvPZYueHi3RUsGpmpCrudMFUBAqEHgqMEfePvLWgfeLKdYqLF6ksTi1buovtRQXo8AK5P",
  "key5": "zFDfR54fC8UtuECJ6336hoDdTWeFZSMvsjhpEkBkTU1WMJBgf5qriq12fdsFCjQ5VraV3ybo8AXUBY3tmrkJd59",
  "key6": "5y9EcF7HxnyTmjZkqrmZUq1bLFwUgWTsRkFXoMyeXJ7vNonxbgYWTfvz9w9wG8M9dR4RKUNk6BheooWYKHJFWiZ4",
  "key7": "3tLqt2892f6qvNF85Dqa6ggitTsTiZsZ3d8o9qCPFr9pL4BNehwFQNupvhavvssGhH3yRTe6vvkdYsyfFQEhm228",
  "key8": "2FvCJdWv5voqNqseuBggdbUqjbkZzsmzgKkenDSVAdRVSrAuJRN2tQyxghHEBGCZHFc8qQViAZgQfpwRtmsWHBdu",
  "key9": "5pXTDxHySqV3xGShxj48CKJS5iP5HDbsF4JSxYn9xkr31ACjWdhfUvYFutJgQ7uWwLz8JGhETxwkMTKKJee3D7Ac",
  "key10": "q4p2QZ4PjWX8GqsYwx52WeMpB1W1VuR95sHRJHTXMp81ngmDFHBmd9ad8vh1WAECaC7eXUMaTLDzeDhMZoppv3g",
  "key11": "5qUfiYYV4swP14am5XmRebN5t72jgStT3rkKN7YK9nWYHpQc7owhKhCXHezEWCptmaB4TQkuoYr1BpDgBbKbcT9g",
  "key12": "58YAr1TJ6pYa5DKQJREifdYSubedcbbehPUM1YN17EKeDgxHsf7FwRAb4zvergesCwQGCejFyc4qDzbZAFeWnQsZ",
  "key13": "63Fa5wZgvYxvB7qLdQzGVjDUg12gwjNZDorjKtBcWyfbnWkSFAPgA73Jzhj8JP1KTtMGWALMRV91EeXYrkcCBMir",
  "key14": "4FDFLZZmSASXKwhcSZScQ8SgTfWhyTuFe4GCu7mY7WrWcQmVnLf9FfZtujUuqr97hBSGXkAf9AuZL7h42tN7RB4V",
  "key15": "2iXCVdxgs77EuPFxcrodZQji17cpxkTeqELsYfG8vpvnCN9AHGpdU3jES8mFCNUUK3TchxLV1AMsVZTpSKJvBd1w",
  "key16": "2t1aED7ExFF4hbQJxeiAvyKzTveDTdVYyZdACTMLN91w7ScjGNrwcQ15dy6JHrhBeThqVgggdkVKbfkbBZuXZPf6",
  "key17": "3Cn8qhMxUVphGxZxJQGAmamSPJ6YLgRWnTivwuvUBtNvA99EnULAPepASS5cRudz4vGq54QBhutqjCS54oih61eD",
  "key18": "2qpTwGgPE3rVWuJciur2r2eRBZvXWjnJ8m3bvnaeGSrQfLiAfPpRhCHrtsziFq2r41pYg5oTEg5i36CnJTBYuNx",
  "key19": "32SkZDqh5AMYynqywLoKzgCBPAnBZmYuP7TJYktVzaPDUy1XyLkUWirKFdtWQikHZhrhBG13beqe4gaYpM4Bkvc1",
  "key20": "zRyGd2b59DHzrjCWULZF3pgqv943PRTcTQd7Honmz6SENBnoUGW8sipp9tFJe6GLfX4Sjqo4pZ1Z6UhfdCWYTbu",
  "key21": "5s51R5iX7uodUqjyZ2tEubGgA1kLYA81qfnYmezgAMsLZAjBzD3Ao8Wsn56nrXHWy1QX8jDNNyNhwRyE58SMV8cA",
  "key22": "3PkAdZGQd5KLTk7SBVgae5EZcS7rTA243WDVjfCocZfaw4yWVoVgYYhYbD64vS6q7biLG56FkKG1HYNzmvQeWZe6",
  "key23": "36qnoc1cgi13sA1DnY936b6tEHN97u43kfWQR5UzEoHnoGuL2ykhBqYQ33Lhc6VVTHd8NvCDuBR2ej3Jf7rDcZrL",
  "key24": "3gUakrpiYHMq67foTWvaAPBBCcGQkR4vTwMVDixxAW7CkZG5bRmNr3r2jzGtNGsUmgPVgvS5YAU8Wk7FAvEd78Bj",
  "key25": "64N9KqyshNwyRA5wjEdFjXeTYS2DT4Dgf4K1rdxJRofRomFhuoYmPJEuE9DqFiQtaM8am9Ee5B9cmJceMT3jkioN",
  "key26": "5FzE4nA7zWDBCMkFvhrya4WbNd9dsdkDp8WRCoUwxDDxcenuuHTo2BqyQ4jk29LCuaNBmVVhWeB8DcdUFr51A5bN",
  "key27": "3u16EqfDoYN2uoxEqDDgVigcF4Q1j1bfVzq2dS35PZbuQZ6QPGguit4c8rCw84dg4LjYPRqLUxUXvysqkYeVjMXQ",
  "key28": "2FnxZ351LMim5NJikCQEdHt9YZwMR7E33Vp4qfTbLoyZ1EoiYk7qpPK13h8a2gdRBpTFy9ersn5fGoEzN6quHT2Y",
  "key29": "zV7Gzx5Sst9aMFYKCzfeBJCRi4jzf86rFjfpGNDAAaFQrptUAZjyNJTF7pG1GeBmqhYCxkEHCAvSGt9ivRAGDHz",
  "key30": "4aC3Zp29WjF7rS5rA1LNC6kWtuhQjrA9obrT5MEaKymKEqUyiXNWSGaxFKMXjGtpTx9WGaA4oh9a9qTYuWncGra9",
  "key31": "2oW3qev6PPynaCa5Ub61yK7mnbmCnTrkcN2SMU6dkHUachHY74J9STh45pFgHgqVsReSWAaMve2PdLJG99BA8hH2",
  "key32": "2jfNg989ntp57PBquWjUxQ8z548Yk4nBo9b7XpA7hwsbiEHqCxoZBQ2nhACytGHmduWBjVU279aG6V3yprfj14NK",
  "key33": "3WwERRj7pseMBBBVs9wPrPWFVdJF2N9AjK9GUwf76HRbEdRVNpQ69zr1nWWNVYxExpkanei9G7ewgCC9FK8DGhng",
  "key34": "1mX876c6fDZwRb9musMagj76RKrCuRA6Fskm51P1fRky2Mp5kkUB1UDe7gz5F42RkTxKxnNbmUfJFse3XyDAp5r",
  "key35": "4MgogrGHdNA2wQzkchrrMoygxZVuAXBW4jgqdgvhLLB4wwcNtAiMAKuh6E6CjugkH4HxB6exxJ5DzNj9WBAQnHMR",
  "key36": "4SWSY2KL5t6a7sFXmgEa2HvKGA9Sko2DDTSKuSKdaLZq1efJNwx2G65brT7xv8X2dtKrT2TfgNE4fAqKRn92gZUh",
  "key37": "2wnGqvcXzHzogQE1VhJ1Pt6QYUo7X8P6fQphaNnpTbuvnXexkja5hA3mQbNtjgr7Lo1zg1vCP1h6Jaa55xgzw6jG",
  "key38": "4SgNXrf3JwF5fPhqsuWbzRhQfaeBz19U53sgh2rUTfRHpMaNgmBVv6uHWUGd3GwWrvPGGrcrmHrgbLMQuuffrEw4",
  "key39": "5f2RdwcnCYiXQiXC4kXih1eGE9Pcm1CAK3KqW2HaC6yPdSEfr2ciPbryD6NstBP7KFkduGa9FsMP8NSbruXAkPN",
  "key40": "5NK4KJgwb9xtmyggSHauEL8Da8EmNWvoRZcHKR2DMoRA9rAMGvNddjHcrwxY5EEJ64m6HKC1Y4Wu4FsTt43YcDJf",
  "key41": "2LuMWE6rxaK1oTun9VkShXXpbLvE7voaXt8e5KTxhQ4EQUrdF97F8iRYFEUG76m59JzQ76MzAj8NZUNaKE8P4aGK",
  "key42": "DWGFTqSnqm1cxbvn3Yoqaz84sguvxrG4NYq3oYgGgNfLKsD6iGYw5Wu7up8jbcPbb2QihWzL6yFfVWDVs37TTZg",
  "key43": "wfRZf48ZrCgUL9m2EGtmx3PrzPBexk1akeWcxq6d9a8MztuZaUT1Q1xsEjseonis9KUqqkS6fz3C2s8eYeDBeKk",
  "key44": "4WpB9FDniSdbvVqJvpsS6ucyv3jLgCZJQD8CeDkRKrMf55o4deQyurg3RoLMNguCF9vDYy8pkwAaShPRbLBubpFf",
  "key45": "3X8LswX1kAFWjRSzEzngnUtGkf5rXxjFdfi4gBuaXssQo55wxtqBNaRk6QXCJ9CDa9VAMv1odVbs86pdH6dseBzT"
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
