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
    "3kWppBwcdzUrFzkKhEqwjiMFoPkxTLdtx1CoJFxSJuUAk8KUdJwRUiBNaCX4GnTLSARR4HCFJWBy7mmPTXpGTiHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d416okX3pWayJPpjxvMNNJWxFWEjcq1AJRAS9uTevkudaaMunq7KYnE795GgT3SgVg7SDAVQZqL9v3zwX7o7HQ9",
  "key1": "3gGJGyhX5vt3L8FS9W5SiEpUDbD9usJBE5vttYWfK2L7wGsrVJyLhRd4ud196dHf6wg4fy5nAZ2AktW2CwZb9uP3",
  "key2": "51WdEiwn8At7jhDPQ7GJGaytY9ND4AhdEa6pqqNLUhDvNp4AUfJAH7wz3NeuZAxTfdVmuMy4QPoEVrGEZXGzZEsu",
  "key3": "5sD75imcswfRAguQeP3e6TrQoyfb9exwzxZh8t1hqtmX8nSvS5CuWhEeD3XJ2vdiRpd2m9tQd2E33fcjE57C5coE",
  "key4": "ZtE8btqcXohSLMGLYX5zMpr29RJU1gYuqjbyVQ3GLxR81atNjd8z2yDXD2Gd99HMiYgkxYxz38XSAnmcCfuUZRA",
  "key5": "38yH2cAAs1DdiCGNV9CQLSKDY6z616gjt6e6siLGbSpqdCoyxBgtmYUzfN2ysUqRndufsDvhkiNE3hgm5xTLGjMX",
  "key6": "5nbuoWvcrkNfh2p1HoKUMMCk7KokNiwkfj8AZ5pMKEWwWXpvb9rjWUJPuWHiTDD5cALG9X96mynygrGPtVVEDMPU",
  "key7": "Y9qeYxDxjTgszsxKmP5koiyqQVxtTbWSdb5Q5FURdm7g5FYcZUxeMtHcA94uJrBMvhGRu7SWPZJs8LGFn5kyTTR",
  "key8": "4APNjUqjC2q3XTaCLVczpk5rLUEMbrC1EgHMAi6QYxb7pXnoTfs4bL9EhZC8uNmZA1CSXYFH3LjzwyTGKoCK2F5f",
  "key9": "PRfnEpcEfgmQ3L2vXXYnxidtMNz9d9G3qTbKp8parF4uVHaMuSjfPyjaSS66kJJKgPchXWU2ZHaadcMEEjDrGo5",
  "key10": "jAsez8Mtrtnx3vFdT7khAwB2dgvcnho1DDkGSvZBLKp3SkDM3N5ZqK6U1zEqUwbNyLjNWuBsfWuTGbhuLc5WXku",
  "key11": "3nKbwAXU9wX9amRFWnx7zGXx1fje74nMr7oJtym5Vd6YathzWtmeQnke4aW764pztckarrmbL9iBDqcGaxaM8J49",
  "key12": "534RR1JscRWLVc1PAowS1Q2UyAQ5zTbfCKNmNnj4r9oi1fqf8C4j8QapiFkfn8RSUaZqTnqEwhXaciPvYD5BYw4S",
  "key13": "3TKhFANnUCFddZGFQMB8zUUdzehdfJ24H4FxJWXEEP8jHAk1AsYZ4qp3MhY5e3JW8RkrC5JffL4HsCGom1ts63dD",
  "key14": "5WMd9szfquMaNnmoqhc4mq5WYeyk9ep4YHzQLrA5SqCr3929e1z3BmvW1z3H7jnzcNZg4CKz1k5cd22RNowpFVrE",
  "key15": "3BEW8GqMYrr8ocD53PXyp7YDp24xUXd6Wh9mvw6dvWSHgyciyBhWJG3UVPWqzqXK3Z759aeykHykToXdSe5wUtpp",
  "key16": "46rVqNkgU52UrTwrq1WNZig46eMj4dYwNiSCUkrMzEoeCA96W1DaoFTyiU9L5oNpHgutbPGdcHPChTbtSErtcbs2",
  "key17": "4hvK2SFMAd1TmfAKtKeea5EEXZGxZgodmJNdgYAip4HCwLVaNGdQEKmkH6eP2f6MTVRtfyaq494vVMnXPKTZVhFp",
  "key18": "5VuZta3pE4bX3e2zEiDv41jvp8yEV2mYXscymA9B4eTLTxtX8GktqhozMiQDj4gasbjBAw3f2S5kfXUej6pqN4xy",
  "key19": "2yogyQL5F7PUfUPXb2TGaMAKZc1xGSwUztCTD3Pjoc2FedHZPbSwaAzezJnKKuZjzeszMjdG3kP3gdU9VjWwR9cQ",
  "key20": "4q48GgoSiCjC7u4Yvb3suRqnpicZAJ4qAuZMeqvrwE6q9be3XNGuYQ6Kxd2vt6KKFrtDZTT1mfuDxoQLoV6gDGCe",
  "key21": "3CXvbD1c1yBQVucjKgkbc2CENuikNgtspw3oF8ZL8BmNRy7TN928jcPLeoxiCHzpzsDVgYzaRc5VeGuToihgXhGt",
  "key22": "4ew961qpQkMmAVjPZqZFT1Z92SsqfEpCua8Z9FxmqkeXSJiGwbDXE8zjwjJneuyxiFjP3zuYg7f1vMdJ6a7zgDKo",
  "key23": "L5FwthSnLVRSexcexVTBtS2KrQEWtSEBSEEtwpJuksd3oJHureAi1z3GSRksDKxFSh3hRZuuUsFa3fSULQYqSXB",
  "key24": "5yN49jNULSxXmL8WUso9q6f1RRXb9Fn8Pr5jxaPiwWBDiwVgvJcPAfm6ChjrpXXzGrFpA4YETDUR16247L8nXQKB",
  "key25": "3Kh7ptiz1QyENjMKkjzDzJtjsh13cmMBUe9etEpNjLBfjy9i7vYq1mDkd9S5YgNkq84mjYmT5dpEJBnGym2uqZeC",
  "key26": "Agjav7Ui3Tf2ynzqEmcDGe625AE5tGyVNtd7R7i2g8hVNQtW6XD8kDi7Le4VaYoaGrwBCu7kjmwEnYCU5qiz1q9",
  "key27": "4kA8M2rWNP7bzcZAr9KGKtwAXnKNUqcfhxDZuwHmQn7ypmZnyhxQh5aYDv8H28ZtspZ61PSwX6qS47sNrqD3ZQ2k",
  "key28": "4wrqpXv1ToYfQUenPiwDvbWKGThozyM5YirDcwxwxiCGC29Kbgbzkxazp8rT6Nb6GXnkSdq2iCZyWvkXrJcY6yfP",
  "key29": "5JpgrNBZtPQFBd7SAgdLKhBHTYe2D9NtaSjvvn8CRJJoC13Gd1xAMsdQYzB6CBu1YdcQrqMxczedwBwYwJeiNFeC",
  "key30": "4MkSD6RYNbSYG34gLh9vVj48pcsjZHViiJfAe4acLLb9XF4MTrchMtEWyhNC3F12UXuFRXGKoKnWRmzADVDaqqz4",
  "key31": "2ajybGb7UkRDNzuFC3cXXL1CkQQjR4psrV3AAoukw3bPpmaXc6Vp52be3MSUkxzVEpXJNtR1YmUrDmvH2XxQqd49",
  "key32": "kx3e7SwCskB23iDNMc23towKKzEccf8La8byfZ4ZXmVpoA1jyqhWj3r9AmQUyxf8PEvKuMTvzvR8pAJ9PziyGDd",
  "key33": "4Tr1sTNmR5qmKyMewThfd6cERiucKsVnyBgYGTg8gfqviuCyiUNYE5ESnYqTdBJzEr62jPPHfWwj9xG9SUGMwA3",
  "key34": "4mPNq9kZkLk5ENBcsooJfCJWnktA8R1EHXhgWa89pp7WVHJT9jVjdi2Uu5KAhyB8KhdYxdBhX1YEZRQi6X22MRMh",
  "key35": "hpzQiYKdzkUmGjsms99GTAg1MfNXdf2XC1SdUa8dW11Vi3PbSJLbfWQ6rbeeS9tzp5PivESb3t4rt2zu5Z9iVaE"
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
