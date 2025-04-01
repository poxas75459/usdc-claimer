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
    "2BvStTQt2Gs67dEjD4DvLPfkZiF9py6jz1jX2VHKxw7az8gcepzQLrvGsAyVD245AX4tFmu4RDtQjUy3wc8VfV3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EcV3fDQ1LEXc1Pth6TNjFS7ZrJsm5GDhWsNf6brgouFfzQwPWvS35uLkKm1g1RG2K1xpuypidB8jwusv1yLpcv6",
  "key1": "2qJPLajyRpBqPtBApntwGUij1x1gue2ZshcQvSm6rJfbD99FuY1XHy2xmjWRmM8F37KH98T2ybFPMgWYEdAEpt8C",
  "key2": "3LAGpdXJLMYFPYAMDAbu4RhHihFDKBco7NNTjDrhZjGZkfjwk3NdrPVF3VFBeTCWUqi46nkzUQq4bqLdTv7vx2QJ",
  "key3": "Zn1xzU98SMiUPHDek3Y3GkNhPpravPuxzN5jDL59153CVZxMtdTfz5T3s5HLonkeVVsCPu52uX8N5yktJF35Ye8",
  "key4": "2taymZohGKfAtZvtYQmwBG9gxrV5DjeEMLeQEbgohid8b17ZZoeoh6sajemPwJ5Q5fxpRkYhM642k91k8MaDD5HZ",
  "key5": "e2shUR7Hu8MerjhdTyBuqhJhJP4QYtMLykW9vFZESxACe4T7fyitmsDtSUhNzGXjHGH4GTwARBUWErJKbnpxoXq",
  "key6": "5wm7DkbE7xnC9NYZP2i62Ddt8Si4VevWcmNYyRuAa8DRxiCCxNnr7Z4R9ca8VaAFCo1JysugzTq6E8p1WBreeXCs",
  "key7": "9qPVGjYfZVsdiaQ8kHZcnrfVUtgQhmBGuv8iqVeNVEuPWfxKHNWdJUJRshBzHSfyStANRgeh1jnZqfH9G7bq2cD",
  "key8": "3a8vNBrZwsvh464k2vADRz5upYe5o47YZbu4M4sGUECBs2CYrjcnjDT5NJwCN5KDaV3bDoyb1Eg7UAZZCvJKx4pY",
  "key9": "5MXwCBvZBpAJhd9sFuWYVUaNSuyPGV2PTmZSE9JkTZWDhxztQjD69e14rxX1mUkUcr1Zri9exPyfgiUKuH8FUZ9M",
  "key10": "37BVuHYSEG57qF9dc4wbvLUDGYXiz5x8RdE4bgw7TNiUbBgocvMNZYXRq9uBBW3qfYVSfGFCaE79ygDTJivXpoVj",
  "key11": "uqDMyWDAuZXn4gxjb9P9yM4heXrKeETVyWu3cTU8qr8DvrAo1pccs6eNCqj7Nf1rVA4FodSBh868YEpSD9K3UdK",
  "key12": "5DWw5FkckuWjEh66SWKL925KKH4WsqwHQEaVK5HbizGYMDAo9oUYbdXSL919Jcp1Gb8eE6X84BkTc7X6xbY6Ejnj",
  "key13": "26YMatsb1fF2gwWwQxYWcjRm9HgYn5tC9DbFEPZXbFLPN4kJw1FpcmvJMmk6UccNmFKdGa3e9KuNyYb7kUFLe6Rq",
  "key14": "47DdQD47CXgCcMTgirVqp2b6w7MQBMwBz9fqyC5a9VtkLWRnYLiz6yQ18GcK6LrPWbr49b9WRZtB5YdDFsXLJ46r",
  "key15": "38BoTJSUcTJS8KxhEMjfNhdhbmUi8UimB1xSf2DT5Sz7qWqN6BdK6t8YCCZqjYQmVEzX6QiRqwzgZa1PR21ZsA97",
  "key16": "3wL2yL3cQcB2RX2ZYEheRLos82f3Q4qXKZmyNXgXbTVsXKJpUJFeLHBnjLafkbh9iTmX4v6xiP1fyxaY3eqHd23",
  "key17": "5vrDPvFzxsP6f1D7wPvGnDJ3zpsWfRc6eftj66STV8oKvPLTQR6BvKMXxFGByZQkZnPZctSfgtDR7ADDipzy962i",
  "key18": "4iuPebFRppUSxjT5QiUbhGsF5BmhtniGJ3uVMj4Zi83PBnDvTgbeUJWCtHkrycwx4iaB8zcm9agycrXKGxUQWdyK",
  "key19": "47Lk8ZAheSJ7rxVg9wUTwcD28BBEFpoDuc3QM1eD2rX6o1nAib8wU9hmTz6JBjkoHJiJy6gbD8GKLodM1shYCJAg",
  "key20": "4N9zgV8Duxd4feVaNPUFViBUerfcw7WwAbetv5eEZWpcEBk4zbvZpmKDvHW2pdtYu7Bgftn7sjQghGxoMcPmcwQP",
  "key21": "p5XE7YUkZys6KQu35Qg8rKYgt4qUnppV5Z41oj83fQw2EGaWGrfb6hm1mUST1fL8mUTWmih3Wk2NcqtY6bCdrjS",
  "key22": "2JFp7anKFLVg3b1FopLGZhxdK61AC8VyEY3dpQT23JpE1is5tbus63DuirG6TyruKRb9jtYpEgBDke7WdWtkX62G",
  "key23": "5FZQYMzLsB6DHxbjHrkdaiwUYbXd88mnmaHisxNL6q6LBvFc2wm5dK98eCVZG5FtA5KN2NL38cvwVTvrUSBQ8o9T",
  "key24": "23g5i898wBvePRx6uKRWLSnf4mPwJ4YoFtiP5BMFvbEEznChowqHup68ZscNXk7ndAXMCES6QYSN6DtAwGd5ZQiJ",
  "key25": "2Msa1QFK8o4Wuw7QfekBmLYXSBmAEHYuA5D1Asa3jFe7kECeqz9ZtShSMS96zEmYWVQTzmkMkJrhr88SKDZuktMS",
  "key26": "4JEXkoTmJVF875sq6EaciJkUAxouUe8DK83pDYKqu6wTfYgAF6VXfcJQksuFLWyF5Jyhv9RmYE9tPETD5pMm47P8",
  "key27": "4fjx7fYpAPzhhdKHco1kj9qMLy2PUoCqm8MqVzXF77eqawM2ETt87QkC2ephzNeTBnn5VjvhQ5iT9pT4x83xKqP6",
  "key28": "3c7kzJnFLVoyP4ZHkPhRAMxdLRgD4rAvUvjUNW5D8tiEMsxpgwxykTFU9m3dgEhUp4EBqrSTV7nMv8i74Q3yfnjj",
  "key29": "2UEK4ZJrrWNYzn48T4b2EEV2iPXypAEhgBQaJQTdSdBrHN92hZyNANpnWBs3Uf8RhU8rEzEoei2uQXNdWVhYJHjN",
  "key30": "2NA7x5Dqr7JBHMaNwJWeLh42iPZD3jMcDNmubzuUACxiHJ9as2mZvyFiXBVdtnA21CQuKv2ZpqPowkaLs2Bmyo1k",
  "key31": "jTjkquLUtkGzKSHgHxfkCCB17CFHtjHrZYQeSnwZeFzGrEjeiTLxjqC6GJz9gDgGLfwGhAotUKo13FQRrnJk2Fd",
  "key32": "2H2vGEdtHrbt9cyDc5am2tfSDfg2dZTW91gxYFmYRq8GK4nFBd77rhUkw9nGbFaxFLq2yFG2TJHPjRSDcXTrVwVu",
  "key33": "356dj1tFU5aqg7cEsF5FRS3B7nm5A3zSZAyv3ZjSQwbUqc9xf5jHSwLmRdkRHmvYjewW8hjYfEg4LDRBwhP6ruV8",
  "key34": "4EdHgxFX7VKVfsJcsVw53zeK4zAEkiRnVrgBzMDnSzExepaBk5maDuDQe1ztDgPWoiws2TRx1EYLLFVjvsMiHRZL"
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
