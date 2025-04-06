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
    "2jTXtYv5P5H2kyUSiD8AFA3nigLALosnAjrs6tJpDWQxWZRMzWw6jJ3WDYVWW1gANP8cLSZmwTTamSH1qSo2A6Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVkeJZ2hYcmF54kr8C6Vu29jtiKkNucyWvvJfeuk1n6JmGmVs9w1hnLQywvnE2aLvMtMAVU7e1mgDCq1j5EmjmB",
  "key1": "2tvw2jqwxfGTxny2hQEcNo26XFDYwJuL5eB2zjVmD3Wse4St2djLtLifmaTaDYFftvAKbNADroqQtVT5THxgikya",
  "key2": "Fc3unbq7jGKMgudZJd5SYH3UT218sMULXBdckPTzMdJysZvKXTin8BxyTQtuPpoF54xvKt7uproW8zZbtHRvGjd",
  "key3": "5vP6uJ4QMgpBUAcm4dkv4dpJqwMLb2W4f5tCZdvJRUjcvdzguzrnHdVPtEjjwr9wVtRadP1mKqyUpAtbGE8W6ZNK",
  "key4": "3g3mz7Wq7t72P5dWTjKPz3NaMxhBxkeErFq2aAHe1cwiJ8qrqUJwKacTJKQt6QMsQvc6NmieCShgdbZKwoaYHdmV",
  "key5": "23aFuAPGWvw7hHbsMyW7aztia9V82u2abscoaNDUuaSwTVAkUSdB9ah1RvtapeEiCJUfzv61e6Jo9G9GKD1dfPdA",
  "key6": "4U75D9DUxXZ4gJmNAoHGTD3MwvFHS48g2pcQZtX5jdfuBrD61mfmUoA3rVyVvEiRYQCPcKtccqsAMrwfuuXCaLo7",
  "key7": "5st24X6JzAXCiwk5zZvkWRq1dpvtHv9vRNZGSy1sDwQQQNTP6XkymWHxw5npvBTPU9YekyBLfLWjzrprHPSA7jzp",
  "key8": "5dUAWrdsTLmVcQwjxqDcbbWymkwo5eb3on9Jorhm6hbLanK9cfV51RdeAhFMvUKqgERqkFjXPUmWUgpTfpp5bgNJ",
  "key9": "3WKP2j7RBuWLfyxq4GCqHZ5X53PVE4XC9aNPFhiWywCtHC2FBhQJytADjCTag3JdWc8mz7au98XpoQqe8GhECBzS",
  "key10": "22PSogi63tNEoFafh4NT6fsdxxDtwFSvaqCD96LXcK5C29aNV27xKueTRHDyY6yVfpYXhZZYpUYvDFm3r36GiAsp",
  "key11": "5ntGQcM7ovTdp77oL1XRBdqJemoonUnBjhcgv4LygbGCrnYsSemaKz8tdHoAA9WPHk5PHBVSEinjWDKXXjsVWcY8",
  "key12": "5r6zaP4MixHcHKZRDqrQ46EjLR3KPFA1y6kYqhNP8xY89dAynDeJDxZMH9LupMZfMYkwu9NFPGgCq178fZN7Y2q7",
  "key13": "2d1UNYZGcLNvbCFDGkHakvV43EqGjE2cC3fHttYBp4bvDSSRJQa6y2kdvMprVnfQ7oFAC7r2UaTeNjSi4LDmYET5",
  "key14": "4Qj53eJU9kpF51ByBs5re1jvzz2MdwpPMFfRVrwSJw348vJzUgqzeyC3fa4FqnPBSTDweJ6AN9N7J61ALDRDMVX2",
  "key15": "66HyqipfFxtS3tEB5Jtb1TDqgnEYKFGia9aswWBp1rDG1oapMkbAQ2SnyRnx7Qk8jwMHexXAB81ueRAtoSVKEpjF",
  "key16": "4bqGoTtNkYXdoToc3q2NSsfcP6qWbzckNfY9F3NbM3WHmkE8MxDcpjkSq66xFiu956qz47QUvFVRfduvMgpXws4H",
  "key17": "3kHjtAQzagyb8zWxy9RDpy9wFLbv1YJSsYw5zP1p91YzL5VvdhZWvXhjn7W6x3QaFnVG9tKtuVV7UcNVUuw7Fswk",
  "key18": "5XZ5CJkYy1dPduYqd8MMHM29WoV6UJ3AXkVybVk4DqXAXZQNU56nSrF4vFDU9FvdL1EpMg1FKzP9RFZZW9dEBoYN",
  "key19": "5FZe3PMvhwt892VXasJorm3yZes6b3N8HH4q1bMLTT3KhsmjRZCPLHNb8rvT3pTWzQBuhYxjRwGj3yXyUiPi3nMm",
  "key20": "4zDGwtyZBGA3LfipVzvhJtNgGR1Fy4J3RPgZ75Z4sQA1KAXoTZ9cvMx8tRi9eVCPXParzSKHyncu36gpD2f81ADS",
  "key21": "3zsrKWFiuXV4i74C1FAdD1TcupxiSwEZq7PHYfgFW1NThnW2prP59jbTHtP6NQbDCveErD28D8ooJ1YitFeXKMLC",
  "key22": "3nUgFg6e1f6LTtdaKQJdKVrq8xe42FyE9R7GEC3BKW77Jbbq9a1LqV2ZQqpk3nUTEiG9mpPYs4SeU8BuJ491PzNu",
  "key23": "3t1hdyNEsmNg3XBUTTejH7ZkA87JTPdRGdFHuo5vzpYNHHXZ3LcTBtNzJnC3tNQ6uTE9uZf7yjSkmzbpJcugweCb",
  "key24": "4F9i7szLTtdgJjLnPEnynV5dAxeLNobRWhBmKWiQ26QPr9rrAZrn9qVTsZyLbo52HwShdebaECFbBeubMWTzCRSS",
  "key25": "49CCeVYwmUtkGyDG8hzqKqh5oDN212LLLsonaJqZtoDZ65vw67LeUYE9ch8PrnuDXhDqYrPj9vmQqZEE4V3Eq5CS",
  "key26": "aSFwJXfSbt24g3pZ5YhiNjrVYABNrMFtNbngcKXBxrw4VadXjayM9GAnnS4UHadv548eW7phaQMyzNNy2ftoCwR",
  "key27": "35FEm6Fo6S7dfXRo164nmqN6p16m9sh3Kj3hFVSTdpb6DAuPys6SWmGehGMnE6rmSbvhqwJXXs7pYxFjh4PBvfi7",
  "key28": "3tUESj1w4urEBkVTLaVLL8Yb96kqrGfvL5GoVR7DyeGYhc3n6Z1iSXL2QNnxiGTACBhfLXvzJFMCz89MA54rH54E",
  "key29": "4hJooSUZk2SBNpGucJXuG1MqvWDmgqrjF3N4CByn2kCBgQkpPTWbXFmNnBzQxYPajLy5kVUfyoEND15QdP2MpJqD",
  "key30": "47QhuHMaEmKGoPwa5sXR1hUgzpwsLFhJ6fkhmXu54ZCt3qnms75Zjran6WYNPHvKuk916LZV1e2n1dMhAipGjVXp",
  "key31": "5kXDd2sHDkD3ipNhb6BT7Y1AcUQzJF8qNxdNW6R2pf1fQUBsKdEts3PMV6A8FthZGAmE3RLw3ysKd2dShPoFDe7m",
  "key32": "5DEiX3qz7XcF9QQzMVrKgbeAQkZ6mkjnuVu7KqmWQGp1zpKGBGbtAvGPvzKNtHoMn7bMucgNnXe4FMvr8MhJXcYj",
  "key33": "52bJWoMcX7wddhTRwaX4Q1EEbbB6XDHNtFjvYVTP3f1sQ9qgtUccGh6YF9W6SH6Qu7acXXnmjotwni7zsjE9yR8x",
  "key34": "5UnWhh4D8B66idgLkYSKJiVevYfbet1VzMbfPGaPeQaj6TaQRTHyDiGV6KxkX8YEQh8vLYYbTrPFNQ1mecQ53mDQ",
  "key35": "3Zc8zcaLUpjU7tdJ2XdLg6Cj7ao1rXJckGQDXATjHw4Q2wgXpj82XVh1TgUR7uRp61c7KNiK6GKsE2Yuy4836Dhm",
  "key36": "jRj439kcpeh9dX7bgok2yY7LmADdVQjnqqCZh9MMv8PPFn9i8b3k9LrKRFkckDGjapfiBzE6e9NXKTcjjZtS4mb"
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
