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
    "53LsKPkdYb2qYpmPL1znh47mkAEj9oeiufjk1J3gM5ic9tbgYxDjFoWcH5oUdaufcSVg5SJKf1oVyLjYucoLkDXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TX9niTc4EacUX4eKa843EfqiRN6dn9NdKMd5k1K3ms5KpVevkfLdU8FMsvFVG1pvCQh6roPrPzFZo6p9S9BySg3",
  "key1": "6XybBGzifDK9dU9TxS1Cf1Z3tUdSEF4MEaPrcwgVfdJq8joQTKdgwsxeQ4nKos8PanHpkGirK11cJ8bpY2qUtao",
  "key2": "2fr3mqT38xvM2AX53pUmLprQEmXkuXGEaVCMWxtCeNNCM1FHArVWXa2gKhMVDZfaC4SxkzFkFCorSKp6ctmTfRCm",
  "key3": "34GjjGKtY2EMekHatwDhvHJa8G7rWY1sicpRB99hPg4mSXzH1o3bpUD2tCR9PsK6UYugDCkH95Y4kNU2S1Fmd8LU",
  "key4": "ptp1t45qz5N7ALowHcbbNSEdP1HkrjsiGVLWkJoTtzfmignjgvgesTGaEcXsvC8PvfGnasN52QgenaoGjrpfsdG",
  "key5": "4Y2drgQ6wNKtwUxmm5csn8JtgeKu7NbMtyzaWMkdmeX5Lu4FK1JZfp65MR7yj2RV8dWWz9pesPYRJhRVwYetGCDS",
  "key6": "5U789wGe7YHNH8T9ExknrZxUKe9pvEHQpLv9qQaA9kk44EJUpEu2zqzPd5UWUXrZA3RZKLqrCXmafg7zbfXvQAuJ",
  "key7": "57csz5cx5Ks3r7MFYrjXpdgr7ga7dP3CwEC7f9aLhBkuLDp8inMiB3sg3LxY7s5jVjdz7xET4UUFkerqAiwXhGLa",
  "key8": "5VJGaVswWAb4xtQ5qNc3bCjWeE7ZuUWmSvhMsfwmrrAbHZatxk1eQoBesxNSST11KRc8DaLKD3XVtbgz7NzFqb5h",
  "key9": "3bUTyUQwec9zXPrxdycbZT5qTPXXhjrT8NL4xSYAbgTsVs9moYpwFPLvCR6rmjsjLgTAiQBfm4HSTTaUDrR86Qn6",
  "key10": "4Njh6EETQC21An6syGfogQCq86P8TSvFPVCKqh91QYKLiGLwXF8rY95FBGrxvpJYV8htLQKGhShZWu7JAPGXV3Rz",
  "key11": "55ynBiEjoTAjmJAW7ukTiog5QKMHDQwXv4JCfHY6g8qc5uukmKgQsw8tXvPiYSWhLkT2tCJpVNBb7W4Q8t8USkxk",
  "key12": "5V7WziwNmvgamjwBoSxVPjvFTE1TWsTU9asLyHoaT6tVkpMhJAZuDaC91JPK2815sczRabWNMADv8z5M4yy4dzPF",
  "key13": "3zs9FjLbtVCFrzMHP5yYG8a5sJZvqmzvujuwJiq6MDfFWZNuhdVzcmu27yJfC2tZL9Z2wVygn1rCqmi2kyG85QKV",
  "key14": "3iDLYjKeWUpohZo4XjGqKgNKH1pBxcenXWv1HQoLgfc7SdK3AyYd7PwBB134taG1YFYgPzszUgNVpk6zswHPyogi",
  "key15": "4HeAcmvukEeZVnwNYttCfHoKzTxbFtr33L3EiKPJQ8yBWAwzkB2WUcpHkpJXrHbbM1GFKUqVPfYFQqDjcAQtGuFB",
  "key16": "8Etx7x1cxqMF4u2FVPFaPppH3Bdg35murF1YoiTqRqkDY3HcGQ6SMD7An1TDFhT721qkekDxAoKesPnNfnarEMz",
  "key17": "3GYk5Yj8oPzQFL8w4yW7CDp8Cy6jujs2BssnHU6RPaz8LJJqkKi75fAXNLsYfCqsqBiSRTaQ3xYAH2ZzaubDdDFA",
  "key18": "3Wc473TXyHg7MCnb43MpvC5D1hXv5qaUSgqDHxt2X6MiMe9oQ5BDuJNcfWHRu8NWj7KwEtqtd7DkCzbyCjgWfJ3W",
  "key19": "2goGA8Ga8UVsfEFJWrkpVUbb5hSoBy19kjBZaemNidReEbBqCWRa8titbTisUgm3dxBWZd3DqHR7hKJoMQve4xDf",
  "key20": "5TwzX6NBRXq8zcLWNBD3taQJYV1hUhcutG26bSGjPfQscBNz5CgKM45952PXYEiq28aPgxofdjpC1skvVTdTyfbR",
  "key21": "3BojTL5cpc9iYJSgTUi2rdkRjZ4bk2tsoCHeX9SdRiQreafVtYDHC4En2y2oN8jDEhxUZSbgEpvTU4So5HTZQbFL",
  "key22": "2qdvdQ9yocH4cqiJQLH56mWQRoKs3PUg3fLHeensPmEvYTwJy4QK9Kcy2oc7m2ZmBoLaMj35RimCmvkT5DeyPjA8",
  "key23": "2Sn9DP4ciGc8TbtL8PTzzetbnrSLqnRDNAMZssZ3ZYu8puSD4RBn7HweLJZypvX4P9sH8TXjUjCqnk6tkLXNZ1Mk",
  "key24": "5hfSnzxdnHkFwzSU9wsycXuhKt1zaBKpjFQLVRH1MmH7Hq4TZ1uwj5Gjx8dYXN3NZomAZsY91A4DGLU56h4xEgeY",
  "key25": "HwBwmfAizvGk8s9M8HMb4cWciFjjrj4XK5GeirErDxJn1tP5Gr8QkqTArFr7phnFYYaWWNYQpS91Z6UTY5V8RhC",
  "key26": "5c8CgeBBe73qg82ek5SpcJ37sP1odGpsPpesfqp7H5zWBM4vMnYLB9Uf2KCTbgHhvbaxvMinakLDoMj3V2UfvPWD",
  "key27": "CuKQMQaFgN8LMNq1PSjq87egx47DraBmCYubzLnLLzoJ62gK7c1NwZFbTJjY7DpLpZ7Qjwr8LwY5kA5K8Zkic7D",
  "key28": "3L8CcNEUrX7n2bs9bE4HLUdpho8xgLnWTSQh6kgmN27uCjBitCgHRyFX5Xneforc5tefP6PFzUY38oZzQvZpTt2A",
  "key29": "44QNLpDQ5PB3SaFJ3VgRhuQifTv5Qi9KMnXBnkwAgzD3iaEWUDLyxrKT1p778h2aZV57rw4ECEuT6q9WdVyi4C31",
  "key30": "3eUXoR1Qis785HFuDjmz7zWu7FHpy3v2KTxyBnBn4pLTGhPRLnFu28H7dbmh7V4ZkdhihyeMNXaypJhsUW6aRNr",
  "key31": "2TXJJvtASs4PPbW8kgZx6nSJ4Swsg6WKjFgpFiBSNvT6Xkz2PoGQWaovUXtyjrDYbKjDaXujyUswz4ABXaTqWFrf",
  "key32": "5AJ5t2wQLbd8Qy4RE6GYiWGGH86821m9LTog27HvSb7uaUQ7Pi2eQVcTMBjs8AK31w1yCdrW2PS7bxKggbd32YWZ"
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
