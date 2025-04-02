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
    "5KzV5sVQQUgBQYhC8VsdbRRdT2smbFPjnpA83yL5wKTBkL7KFFwfUWh2TMSYnfScZJ6k5EQANFmLTt5LNLHEskPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxN3th3LN2MuhyksFFBR4ybeYBCPV4Q7JYvUTqWjnR2ksX1qk1SfA24UT2GcU6j1hXLnNeA5TJFK9YBBsvAS5Mi",
  "key1": "63p4WdLzKkRyDMWpmNH2uZ4k5fzWUYQe5McJUfCBpd8GguX3GxzYibZPPAMyizpxxch7D5aJTEUjdGn8ZoztMqBs",
  "key2": "2GDtJfhUNNzeUVmDzZeUQHPjVYeLDyMBsQCbdkKwUfqLa93Nsb335RZDD9wvhKAbwpprTMqcV7THfATXpvc1tkce",
  "key3": "4QcMgEYKL9cYdv9RzcVeecuf1Kq18jc57Cj63S6E3HfyEmiNdMiNevBseH7zZhjjymYaXEGXaPztEUc45kVDqkjJ",
  "key4": "2j8jmW6RrUL5LnkWYyYGb2hjk7NomJJEGhMeBecAyG5PF2qZ16G9XdpDsxNQ3Bb4uidfJaKz3NSxUq8szZ2PnKgG",
  "key5": "5ginxdvRVbmAskFKGPPUWjGKRS4Y1ZCxKFhpDDYTfxfxC2FM5tP9rVVTNTvTBsQrAaTK3bwZv58XkVaUnS8QDdDv",
  "key6": "2D6Wz5aJqNkF5bYCpDKoxvVNdB5RRWSfUM9eG34ycvfESA8knbXjZzLPVjodMcHMChE2igNZGsfKj2FnJMMdbuDa",
  "key7": "KGeamDKc1FsBxvxJpTD2Yjkb3SegHxYTk3EP9av6Xmx4nAxYunLA1RnsEyFtZksMArkqzUGFSvZCuioDQ1DTpqB",
  "key8": "3Kfzpm8uwgPuk1TDM55gTF7vLXBdNhXSnma2LfAVqtMYymGjdZM5hhov6wFyBQHmMqc5yFkotYCgpXfWuZCbigis",
  "key9": "4dMJJQqkP9bybxw72SuRXNyQU2jjKR2G44XUmifLRkoK2VmEY9tU3hxeVSnMtf3pjF6xXNjiT9NXcaeza92CQSQC",
  "key10": "3NuoxdM5Mg9ZGP5sAgowXERZ6rtTiSjAdvHhvGDXA3np5Ge2DwXdow54YY8VegFkXoBZq4EYYNAEkYq7zgVigtgG",
  "key11": "2AjBLhWHPc8eUZ3NEn6PNuGbLhZKr4LqFUerTccVgqGKPfiY58d5JnYgdWyh7Gi5vqHxdXmpn5yCtDih6CnpdUku",
  "key12": "4j4BTNssuz1xt8AEamkKjkvWYf5eqaCdwnZ5xbDWSPNqvgEHBzLGwb81QAG4i2QQLAmq3DBaW84sQ9yoCsbLPUUC",
  "key13": "2UMRRhywjYoX2CbmyRxWfnov1eyT7BFUhV9bK5EBicfR49UBGU34we7csZuaz9oQaYSiWgcWzPepT16WEQ7Jifdd",
  "key14": "2fpkzmk6J4C9boBL9nQvMwxqTywzztrzGtHxz4iCtthn8C1LJPk7hSqVg668oU4UwjgnYA45zHgqLbgTvwJZxbxp",
  "key15": "25wBKu6Zg1Z9gf9q1EZzZDEkuZiqyH9qvNueZR9cD2z2V8nqELLyH7FXU7aESbZy8p66ywSekU1AABBbgMX8RRAk",
  "key16": "bdnosiqGyWyagfGb3uNq6cyp9SSy8NvGrRVGfkKTSVHQtkhVrNNMYCB6sV6JkEGeETjw4Vd4pE1iiJ9LkmBQfri",
  "key17": "8cE8mVq2iXBwcbqdDHxsWJSUHMWueLAGaUdztgMAyx6VeKYUHHyGmkLybwAaZXsBDCsrTRumL161qLyXs9qkq3r",
  "key18": "2tvXEUbt8cwGAtDTM8uXz7KcXnwBAG9VbfXVuUzmjeBkaTgGZvaEL7WoC7c6XCtvAvuexPrpUqmdLTYydwHDvvgk",
  "key19": "4YbSeGY73pVfaG4yzM8rhSUE44GQ61Vk24EwPH71muJghejv3C93kAgdxz8Tw8K7vAPh3LZxTcVb52zDnMs1u2Za",
  "key20": "6XBjw8pXUCnJQTgU2afgZdLrHE4Rj1h85JtHLqRrERc8ByFPuKVgZqcrsdZJqSb1CaJjHaSP837Xj4YCLqJeLgV",
  "key21": "5c3aCGkZ1xs9HrZX373fYnrkgL34tfhVBTW6uoeEtjWFCWpn94oUMN2gz8pnvWQZ7spjf76wEdjyZp6mvLQHgpB1",
  "key22": "2Uxi7d1LjUQS4fJiMTj7nArzZAWei4TuwRdVv196GCB8SiUkoPpdJSAJq9L3w9974NXQDfQ8ghenyJ3FVSFEJkTG",
  "key23": "DmjucuTHqoxqoUm8fyaFq8oxx66SVrLnNnSDHbL1v65R4n8aufXxspRL4PzSJ3ZVcgBfsW17S6mveGzZF9UzYnw",
  "key24": "waSCGCaSBvKxWtFDY8EN6Qi45QsKq6rn3KDGYVpMqpAyixCPsdQ5UCVamCsJJpkLya4bjnb4QHSsjixcF27aAZV",
  "key25": "4BPd47Wy4XiP6U6vJrgxxCR7WpQZZ3dh7stShtgLwwHDQsMqHdaDbkEsdjwjgV7xMzshLEFGKMx4ugkXepc6rNaq",
  "key26": "bjrSY1VMfnPwCShQxjZ3LeNhjrzJo8CtLx14HHUjJuTYcPWTr5XLfXmoZh8xSV1yDmoagGNtuaC5vW3Q3ZUc4iq",
  "key27": "3X8KpDLzD9gL1HX5uLaVgRYbKiBGGuf436PcNidL4EZgFAaLY9UcQY7rMXNGQARV1RHzTbGtQjLcZdJynsChotZb",
  "key28": "4vjJ6CdYJsxjgh7FtgdaiyhXya2NY5U3cvaSiW4ZxiHrV48g6J1shotEyX1dCcD8MNVrbNLXvbNMQqY4eFaSbnQX",
  "key29": "3Nt9C3RLeA68qgeATFkzWJ7oz6fw4qJtvJZi6JazxRjZ728z2EfWkMxPqHiC5anxenLrXdA3C4F3Bc4SCo5duwXh",
  "key30": "4F8gKFq4WFRzMUuRtTCFM9vogkANEgZPqHRUcMphaNizVQyampeZJNwStKP4Nxek5BT5TzDLFdjvjUtcdxND8jyD",
  "key31": "hZ6k66cy8g7eSvGCoF7GoxYAKmuT6Vz115PNj2HKe6fJPEjah82NnnazP2b5GaQvwaz3nGv9PQ7bRfjxMs9fTCV",
  "key32": "23LZuGPaKxQy2sPytQfMxmbXL23Pg6dT6nKzMpQPYqrhiZCYHw8LBMPtswMUaqVozYzfeA1pTn8wWaGcCraPuNMd",
  "key33": "2T9j5uGUyye38y8Lk13APEf9DLUrf4s7SYLL931VHmiqMTn8MkYNpQKHQw7yJdJjPCnNH8GGQu3FMkxgyqvGCeZG",
  "key34": "3XrfuWnmGTVBGvtdEbWKSgNLL3tT8KCQC8tXwPNttpS28AnUgMz6BbjLqWUP6ecsZewp8oW9N26wWJH5qPrqYx2m",
  "key35": "3U7PSt6n1ickcnrJnjmaZmwKxYwSdvKSkiEsH9eonH6fuFcVkBNJBgWUwY5Dckxjg2cpYjrraT3GYYzKWpPhx672",
  "key36": "2qsUu22CRchv4xif2gD7iMv7sgQ8LJwBdMWTz1H5VAYzkAj2XUb5zMkPMNGdPypXsKBwzcVWx32Lfg42A6ZtWk17",
  "key37": "3ZwYPGLx26vNMS3SL3ArLMQLTjj6LrdX8GtRLTJSDrg5LStd8RYhoBQm3UxXYF6QUL2CinR1mdC7B3YVHenk2xmQ"
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
