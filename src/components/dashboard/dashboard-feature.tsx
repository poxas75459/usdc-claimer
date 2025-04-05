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
    "53jAkW2jmMUZdL5c6PEh3xn4A759MGh575WUe2fwWBrDKeqJYKHuUEEfT5vbUktw5C8EU2chTwa4TqLxmeVSbExh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwauKopqGX6CKmdF1tgB79N7Yxe7X9J4QXLoLmJaAuSjphKn7TpcMPZLTjX5T2TbjPhEskPBFCUzeFv1cPUHdyW",
  "key1": "YNMeFq4jXj6DKZPhXZCgLrqburDv1qUn8e4fz9thxwZCUkzziX6v7UjzvJTxL1WZbCeH5zCsEYH2xSgbpKvbpXH",
  "key2": "3DacyjGViZsgChpziuE9pf3ZzdhBhhiWjRWNs6SZgDddcGSUV2YhFnCSfv55cuGLq6zV1PKbHhZH5EReiYuTXu9v",
  "key3": "3J8PMXsTZE4Xy9b6drCdArN6Tb2WhNrM22iDmY51g1mRuAFk384KtaDitTYPugpJtuBNePR9NaMTv6x2tUp3T4XA",
  "key4": "5T6HcXTKuL9fuvAPMgvCwwJkah7MNRkNUk2SLhQYjWGEz9YrZ85QETA7Q8yGhJXa4HT3E3hjnKiGCEraZCYytRUe",
  "key5": "3AUgrVjxyfj3mRBTMWaxANSGzBr145ojBnbBLbxsSrn1h4xqBtHgVmPRMS23Py4Ur4iuLXxYMzhgW9cBny1iEWMk",
  "key6": "29QxbPuD1ptWAqoPRHKiJL1uxAvZnFLqhMqinRjMLftUV2PVvfLJSf7emmHe45C8GBJAoCrZw5S9kLMDz6vqu7Lo",
  "key7": "552qj9bTytPm66tNp2Uxp6cnXanPdX3wEoFyeYCEaCFmHdGizjEALoqGnBXx1fLYPNFR6g89cZmREEa2jHz1AiX2",
  "key8": "5UXimJidyB7RVR8HFfjL2bX2V33ALnqx7FTUdaqwAF8LhVoEMs1oP2ztMQtKM9tYKv4DrKENNc6crt8rHJEiwCyf",
  "key9": "35W3vbw3ysjKSo2K8hH3dQW3Lhdfcrj6PL6LS1beMMCUchYMUuwVUcc5YgCfxm7HPUHMpqFx9ALgSob2sd6bi1G1",
  "key10": "628iNGr1GZ7s7djEw9JM6C59EQNjiSG6oLn8XuiwCWca6579zXdt1BzWTjWubYA2qnTSR5nHLfYCd1KBszg32hAF",
  "key11": "5HgTWyeRmEQ8VcAoPz3o8qhRFSXSfjSoKvVe92GNvUjmjfy5Bzn7dASkSzBeWYpBKGDxTtdkKV2ZXJkNCC5DoVCi",
  "key12": "Z5ZqU2tGVAjbaL5g4B8ahKeJS32et4QejPJJscpbK74DS34M7JdJCjsoefHZRAoX9bN99DgT1JvVKAfqQ2X3g5Q",
  "key13": "5Qa8GSuGRnkCB8nU9Cpz8mErgS66Ne2uTqHfFmiiAyCpTnWXMFzPrRrK4FB3PcxJayGQCuPxspB11h7pg3Kt4j4E",
  "key14": "3rXDdeKrSxNriWV9ToEgFoDCWMq9D5QmifNHU3z3qqcU94N3omLMeJuvcuzRartUdTqt8n1yJ3VN4VaS9Ki9JQM6",
  "key15": "5ndMg4HNvNKysbWXhHwVqXSh8EDekaNYMFfC53q7XWUkLdTwZGGzABuk5bGPGdaTRX4MjhCnusy9iCvmHFeCLDaf",
  "key16": "5viEP8GRnA1zsm2Zca9WvwLGhCaZw8m9XfFqFGNsx5jnFrXsSWQq5GDqfcWftQPSytCcAhJhgseehQBqUjSS3epr",
  "key17": "3B27BZf6VJd7QTMjoz5iAnFG91uGMcQXNoSKMfddVro6gRKdz8cvYR96wsfbSQf9VFdy567d8xKbKbDVqv59TUMz",
  "key18": "2KeV8FubBeiADbe2WXpBzcSiDu71S5vjCnfwM1UTCER1Wjskz5CovRBH1tvnxQbGitU2bqhwLSAAjgv6p1oTAYp9",
  "key19": "W8Q832ZcVdaPkWJtRKjqJD58yJowyo2iNS8AQz4yDmY1s8VfT4r26SvHaHPUzyrtN2s1dAL63CCNHLuoe3Q1DjV",
  "key20": "5jWcTNvBJnb4rZsLNv3LxtuG6z46SsgKgL8zWgbNiqpAbQxJft6ofcA6brwSsnY2MZywGV6F7JURAPYQTVzLazyU",
  "key21": "2SoWigVe2RMVkpGCSMTsNZ48pgV3QkZzZD2hdLyWimdgmNxeiNRD3AyzsMzdDR6rYVkGzqPdXAw5Ga39Nqy3PsGc",
  "key22": "5iCC9CjvvmLoTx9HWQoc8fhyuyCMD4s1b31YzHP8fgxeAeR8k2Lm9NzTLtAjoq3m1ztVKxwpWWmD3ePwVoHxwDqf",
  "key23": "55L2xWuzGCx8CqY9SrzZJG5ZNJPgLxue5xgXXbokay9kYmxyvVPSiK2XKf4agp6XPWpf7QrMrSnyD1i2jG8NL67J",
  "key24": "2de9HRzeyxV5PX5CZxrp5BHPczcdBEHHvfTjSrwnGC3wHr2DHbqbnKqZcJMFzd9nZkESg8km6Gej384Wxm4aAzif",
  "key25": "gamSZVWkKUNSUHviC4NmPYUqTJoNEAzCKvbJrQfZeMYDrzt3qLL5boHqbNKVAQRaqD5TcWPyhCKYkxHAirmkrBJ",
  "key26": "47vBGvyy1vjpmzBRYXxivtE7fW7gRS4DVfeyCJD5sFXHku5NL4eMsmP3pN2t3Ho3vdN9L3ij5Yfs3bWj5Fy8ZtdK",
  "key27": "2S1rq7ve1JzPoQ498XExyt9pbhyXTSkuygwVBm1JdeuTYCuari8qd5NoSxZWEi2gqzEcGTKFNdxaUXq2Q7w5SViF",
  "key28": "3wjsqgYtxwsdiockbaghQpQ4QrL2TPys7kVRkhwN5knwSBJ1WdYtgGpgJeG7PreDWuRahWM8eHQuoXtF1CAWgywt",
  "key29": "3TMvuEcgFtvMzWnQzXcCfJdPYf5JFhasmhNT4YimEH9jTBkh3b4kBtDFYEafJ5tsZ5TSuqgx77EBsMRWfMUc7z4q",
  "key30": "2bnx1iYav9vUwYiafjCDDVQHekjJF9hX9NkWBH55v4VriBJsfqVKQEVdCx1g3Ya6zX4incttCNwvPWn3pFZGvHQM",
  "key31": "3BQz1nv9oQHAmciffkKmWegZGFnjUXxBeTUL4goesajVP1wzXERESvqPrJdnJi3epTcvDM2yip7BQbJKHYxuuT7m",
  "key32": "5t6TGWKiFDEw78QA9aid3XPCCZ5F6AZP3WeCdZs8xGGEc4oA2hZvXfa8FMAH8iuZ8sA7DjzS6BLsiQ3aFXyKzn3U"
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
