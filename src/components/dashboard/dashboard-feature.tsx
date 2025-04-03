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
    "3mXSSW5FJbcziHNE95VMPc2EVgwj9tYbX7fNP1EWb8ebxQQyoGhVn9LcdUDtKLyd1bWkmsw995tsTva1d5M5CEhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hcyg36k2uQav9Mdk83LBEYX7LMHvnyQwbyHZkkPyR8D862sQqksTNPSWUjnbRvdfpGNKq5msYFgY8md2wLJha2Y",
  "key1": "7mdPyNyJmjjSXfq7Dsw4ocJAyEgoNUpuQt9h6d8KLudHCabb6JNhDEuFXBeNBVyzjX1GM5o2s5pdWnVPQ64BSaf",
  "key2": "54zKmfus4nsSo5Fp3GB3DS4ZYuXwUEo5k3tsvFT8RREfxm4y6Df2yCh7QdkK41yy7kUHV7g86Ym8FMpNZrs1dP84",
  "key3": "5hxiFQh8UJnisyJCyQYwKE6b3zeh6a9CWWfQ7ad4fVJhnkP5GRjHvyME1LMz4cJBgMyfSN5q2AXL3o2uQqqTe9T8",
  "key4": "3J6Zc5LfpiHmffhZH6ki7YFjEZNcCVR9tE7ZTzSrb4LxWjawoDBaqULeKmAEE4PY6DeTJ5sVdQ8T3F8aUjNUW82i",
  "key5": "4UWyMiwfk6tY3i8GDyhpkLF1QAjEG32G4A6z2FxWy2bhgjWS6jXgBKbf1aMhq3PtjcWEvXVv7Rx7CDStw7Az3tob",
  "key6": "2KEjCmM5NPMXrNQrxJiByfgKvh1WwPQdHyMYs5nAZmm7AYgQB9EdWC8tDdufc3fKgkigd5VoNf7Xi2dQKWygaqWK",
  "key7": "2VMU4QMAnKCCkBXoh1ui3wibH8YfxJDHQvHZcddNMm1kp7Dred44EDifyFWVqohqNu5DQjTvniiQeTvyWTT6mGEf",
  "key8": "4XxVETY3tTbV6aaMniySfJ5nweSvZYwTCLEGbDqMADWcEpNNwRDYsKyhtPfBVn34PRcjkL2be9fmyu38CYDkHwRs",
  "key9": "4Y89cTEzo5UgKJLSSRRkFG4CZNSpixkbwTubgxmaZ3WMqoFc8sbnkPRvJ5C55mPioNcgTwHoUPg9q1ADVbDsbw6x",
  "key10": "32gRuSqR28WoYdKvzqgwPCy4AkTfHDggwWoUNwK34wTbat442EsQUQBmJVBCTppmfDUcy7zLfZBmkDi6Mfbs5Ai7",
  "key11": "4dRnEy2B1gUwQgWV3V864NdQy9VU4v7bEadPjKBd9zv2CN67e2Bno4ei6XLMmNCK2GnM8WEL6tpzWEq1JYt59mEw",
  "key12": "4njXdgknSbiypnBSYytcZCs7hVPKACqwwqCcTxrXD9tCLtvW6BEUuq8hxzKb8JfQLscNREwWmj38VWR6H5nef2C",
  "key13": "4fb3J7cbDamUkhqXAHUSWKqd5YzRddFJvmLL9bsxAY2Np7PtjjLPD4NYJ3wy1yim6gMgKUnpUdTsk96CygyhrSeZ",
  "key14": "4XLYv9wujHpb3CD5aG9GaKKprXxXyduYgRec3HMRT3z3etECb6BG1B2boeKUUNahn6ciHBn6RcncacdKPujKFm9U",
  "key15": "5Tdsyto1vUFEabT747fcbMCuaLFNoX1fgFNtPCksgH3eCJLhM3cW1hCfij5VC4G199ztuAUqyBrY46LxgPRKrqQ4",
  "key16": "cBhKkumsf92t2UmKnh3XJi59Gku29hKHmjEVETYP1LYX8JgwmqZVJDXW9baGWGTvyHA7HvzzKNPaxuFjT1PAayV",
  "key17": "3vJVYZ6yGeW13gaY4HwAAnie1WhQ6Uzd3wXEkyEyD5nmCdBStAJnp4ug9QqQSZEJCbXwj5yJ6Brgjb1rgcg7aPkj",
  "key18": "5DhCjLnf5jnyyC6JzYYt3yRKNzZ1TVBd22KCAk41hxM1TAKv9d9Vm3mDvAJjTxCVFhukWE5SCNjCcff5ErbHtpMM",
  "key19": "5RUnifbQvoJYMREHwAcxmAAc5pz4eFTbMWXeuw59F51A7kJcE9Z1yRoKGy2hYhLyDkReUHUeycgs4NMkdaqoqhnn",
  "key20": "3Vy9rNafeLKjDXUWj9zMn2PzGRaL7Gk5PPu2AiP1T15f8kMMbEjHS3gmPrVns6ekqAzxKbqtPEwQEPLs6xiEn61i",
  "key21": "4k2b4RUMe4Peg6oZSX37gjjoYwXsGBLPfdpW3WZJyCmGrZL7C17cmbCf5dpGXwkyQz4Cm63oL49MDieAXV5spoV9",
  "key22": "z7SWDvXw6EojZ5xuawcN1v6Cfkvg1WSyDDaExr46rTtYbN8pkh4RM241A8WCjCXDyLYoCw8grwfEsSusDtKFgJE",
  "key23": "4Km3UVCj47CZbxSyhvpZgd3fYJWCzQ6eh5T2oKRFYUz9k3Cnt5UfNbkpbRyhJrqAhfxNCCK5xMdn4GCRqWdaAi37",
  "key24": "5YSd6ikvAUBNwgW2EcsU7RgohHnobxhGag7KCPTjFbVysHEc9ZmQTgN7CgNABF7WRcSjenuqedNvDoTcds2vGVQm",
  "key25": "5F2h8PKDU18jsE5if4sDFRguzyHCEKu2qdQF6X7JTKoX38wtbdxhtqbWWgFZu8ESUjB8Y3BgAPdEqzZ8JqXN25Cx",
  "key26": "JttpB9WSaQLwrMYSwAQrqFUX9he82cDZa4Ma21hJvVrAxzk22D9y6fQXjwmsKWhUntEo2QbKRwAovfGnt249mQY",
  "key27": "WuQ2teXjTrKAGRvuSHXN53m6NwHWZccCF5Z6zKNr8Ly4rFrj5kCq6uz5FPsEg5iVHpDwgrJpCjyzBAfou5STQpo",
  "key28": "2H1Tu6adQY375CRcXzJTudSts8uBdDuuNSzbURHpMQKzjGvWeXP3zqcv552z2cYof2bkHPZE9ukd8XoqXpYVLKRt",
  "key29": "2eFHn6L43fZwjBUCHgN28qZcLeeYvWg1EGyf8KAZ6kcPL5s6TN2iGt3Fh3N26SLSLGWE4KWUykyrNEM54THvRAbE",
  "key30": "hktmDmu8NnoonBfF4QP1QLu56WdX2nqjYwf1pQvqTFDVNS7gqTkWMMcQQq8y6zaUHHf1XZqhkD3cXpTLMgruVkC",
  "key31": "5e5njT24unWbeQ8oVE1Cd8QqFTrPwP6zNLQjymEGsPvs84kgyY596QFppUbwgiwk4uwnZQkfpKFqs88j9fQhXuuY",
  "key32": "421CUyDuFCgv9L7qp7nQU2Xfi2wjTemkvDMYW8DmfCKd2ziYqsz95LQeuYBS7d7qMqzYbdPC2KnMgKy59CWMgfMg",
  "key33": "3s1TjzBr1yr4edgGdq5bZ4AeZdPCeDEDbYp3TgFAiuT5dmmA7zcrt2Xrw7BsN89k1Qz6UHabpksCJXQ7pgsW5KWi",
  "key34": "3Qg2gvHXLmyYZwumdCfc5auzaQysCfZzvDbErw4cPPfmiA6kQTuEMuwe44QWreo49G2adfrD5WGm3VyzbhVqHjv4",
  "key35": "YM2YpU8YD9PReG3rAmkDzJV3QstnNfFz2owDrrzQxQzu57hDSCky42FQCLXhMSS4A8ZfGuFukNx5HRqZZ6mxNcf"
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
