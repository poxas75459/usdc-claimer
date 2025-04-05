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
    "x24Y5GxjtERnUbkjWYqJXncCp2AxEMXgvsYb8ped1E9W6aVdEtD7BKhQzDRUapC7poygrCaeDrjPw1Xim83ywmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fapJKxxG8zhDX94NcnLLtAVfCiMJ9yutMVzPL7oTsYpBYAQ7Amj1jYEca68jMR89nS77253FcdmtSM7ZVbdy7Qq",
  "key1": "jZsGZZdwAuxZmhiCRfxrbnH7Ke9VwrNs3Q4ziuRKXaBFsttzfSipEqgmEVyndZUTzDhVD5hxUHFh5dKGDnJLdKC",
  "key2": "3zjLtukheASdnFePHfEa8nwhZtzL8jmqDL1AtUjXiE6SsovC29aVaq1fStUnAV235UwPnkzfsJ3zAutJG7v85U7J",
  "key3": "3nbiASnSsN7HBJsP8xFvGS7zU9VUjWbuGb8p4qWNsJCodtT4wMDnDZW7VWC8Bt3kYqtV6NzBvZCskeWqTmA1Pg4",
  "key4": "2gPtBv41BFqRYccu3ugYN3an8s7dLUZeDYFuef4vBhTK4K3z5dpxQXnNd4VYPbJ2KMxzYLJmd7HSycNVhR57oNFJ",
  "key5": "2Akrd61x71Gr8i6TWYsiQKZRzecgxAc3gsv5WsCxDcbZZ66VJfVu18xPV91UPfP2fzBfMwvrPhA2gn6iZYWQHX87",
  "key6": "3SpFuCC6BKeS7UrLPLM2cSrkVbtnGkixXFLbZicWuiD8Kcsk7EpfbjrM8da2mzwPEm7jTZkQzuGD1H1u5idqDEDy",
  "key7": "yspWr7HraQJtjNtFvRudAZVkX81byUyZrtEDt5HvxxYgtfVkBbEyek4SMSLWuj2Kq9wYqtzZPgxuKXkKeTeMtnQ",
  "key8": "4ScgRLDrWJ29wcKgfiZYWfAHsrpzqoT65uQQ66rSn9nAAm4cNimsWFgnANUzb8gDJqdr42daMzd6ypX3NGWHtmLC",
  "key9": "wxcXRL6viwayxmZypk1zFZiB1fmWWuUFUBRaCShNBfFhdUsonRRNi3BQYrnFv2qYouhVrtnQRzzrXdt6hUvFUvx",
  "key10": "4LbBRSE4aKqDBj3NR33gMo3Nggp2AAMsAnYW9rosW8E9ntEodxE9pjRmzLyvoKeyCnoWvcq1ZXt2n1WxL359g4HL",
  "key11": "4nMTLTx83RnMFv6HRbkLYkh21BzviNVeSMGqLNCNvtJ9kHvLA3TqW93V9HiJ9kQakz3vT9PKkbN3burbzkNEoHxb",
  "key12": "2rd3B5TGbcsSU1jUt3HG8UTNqgHk4SaAf4koA9D5GyHZLi26sADKBtNDwEdfwANbfAjg4XSZD4kL6w91voyibt5",
  "key13": "4ZxZNWdgkMs3qoh4ocBfqwh7wpqMz75xxGfJxm98uFwA5aGKnwNycAZsjWNjrqbRE6ZxbU4ZVbjjtShpJYXZgbuE",
  "key14": "4WtdVRzVkxMhn6vBJdYh4rcBuWxpqS6YhFvPKzjzbEeX7Ex1xbHr3xFyrJ3Eg6LJERyGz2m618fsdBhTxdhU25sx",
  "key15": "2mwwhCHGrK9AKJKt5AjhFJSMKdk4npLE3RdSStNcvcoF2pGxKGFJ5isdqu7UWzfkhKvWeFq3P2b9guifT4RtSx7q",
  "key16": "28woBA5JJA7u8DE7WtcpvyH8CjKL7CFhsyKa4C6oFv2H5cFL4sZQz3kPeekG6vBiYKC5bvMxqPSxmhaUYJ9GrXiS",
  "key17": "4SYUf5UTacGa3WyrUX4MaES5QDrGZKnLX4aij7WrYK1Bk4nifZC7im5YgzfsarCbbJJvqJqVi9Q5pA3kMUbEPPv1",
  "key18": "2dpe4iz5pPGddmRPJd7muvUqK8xx31vjfzQiJnLyC5Le8qvqt1BBgQ6cGNvVNZGVC2WuefuYZPZ6ucRsoAS2b8J7",
  "key19": "4z5qQF9EsbL2gzGeSvbQSGwDkwQsQKQhyDgzSALg2nFg85rXXxF3grj4FXyehP3AECCqnJwQMg66RixUYyTJMC8f",
  "key20": "rcqPtwF4TCz5EQGgyZGsuf7KZRPAGp3FEnCsPvYBLH27vN7WS4FEcA7jWFiYiXtniDwX16gpo87yQtB8m8LAHM7",
  "key21": "2SqkVMMW6q6NnhfJJ4ARq645ozkmubkCVWoLBuJ6He7QphGtebV8yLY9H1ZdHDEangfuSCGppnWzyZLi8bDiGNxg",
  "key22": "2VQ8o3Zjf6u2qYXTmWexscNpp9341UGEMDYy9f966MzBKBczvpiwseJzdhdQ8riy8u2VGmmC6z2KNeXfvjJ2Gmzm",
  "key23": "4F7tbRdHSAUNEZ2yiqPJSi5KkjcetyfFZMFKTV6g6bKJSotjVK3VrDJmeuKFcbeuM7AXUbQj3G1xFVh8XhsUuLh5",
  "key24": "3hVMc3eJVScJvH18MsKfZttdhP6bUFtiHtuc2gv4hdrqGXRzcAnNme9CjYXZk5AXYS6sMz6ag4i8XFL9beFmC7Nm",
  "key25": "5igphvr2RkV3ra3ouVtVJKmfe2Y5sYaQ6gnnfoUJVpWehnfa5XfcwPk8HTnaqqpfWfFH59RSRrMNXPE81pQBAtES",
  "key26": "49oyBr4Ed3nhKZicS4DBWdGjissgYd8P8HAMbumVZ1JMef8nfdkEx1fbxcbf8zDktRTeCjBxWcwrJSoFqgLsWBqq",
  "key27": "5geB8TPXFSDgBDq5fNouvKHgVssdfxRaQJyA4tZHkszUxbofeegng7gb2QEvoWcvAB1wzi6mDa4V4fDTgRwttUtf",
  "key28": "4YprPWX7LW32o9KqCcrkySztTEG98eYUgJq1viz6Di2TKGGSyjY9gBQS3CZQSQaRu5YnzkVk8pTXBi12aRMDgS3T",
  "key29": "5TEsMWvjoTd4pykwZK2G3KzsgBpdGnDx4hYD4fr64EQ18KCf7yPdDZsrQRzBrsjdw29V9PPKpT1bkWGmBmh7exaM",
  "key30": "NST2P7s2zSbMTfk9FMksKFGnvG2C3PnK4SY7htmP9QaQFw497NCQKZ8ggg4E5Uso9j7m4jWaq9Au3YewY3rmo4m",
  "key31": "3quWGCr5565zwVye1HWr9GVqQfXbzzy4HTZ2tT87yAhNpaV8QuesV6avd5Jm1gYwheVhJPSzpYGnt4uQ5F7uXJXt",
  "key32": "okP7vZZynrQFccyVMaBDPw1um3mn13uHLSEqayNme1q4nYPUerfhVHyt2s23eQUjJj4JA3zaMsifNTytW2sbzd1",
  "key33": "57WrqVqvxWwZdBAaPRnL5ThFXF9LeSttswXyGgsg2viCmAyW7CznrcJK1gyAe4Act5mvfSGPL9mbMMoGP3x2oadm",
  "key34": "5boFdYKNnHThUn9uQ1AB5CyBzEd83sn6b9K9ymng5ce5eYDZVvg5JJXnxs3xAFHV5vVYYWVBtnvMXo2LPB5DkMXJ",
  "key35": "3TecQ2e66uNntXNop2XfcfDjppZ2sXLQ67ACu9rc7hSpVvyyHi6rhuAKDnjcDDMNFvxNPepih6MvboqXGJ1vPEUG"
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
