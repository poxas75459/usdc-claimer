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
    "63TN2q3UfUMjCcAebkHJTaeCxRf7kP7qxi7rR4ff11ALdJ9zz6oLYXWM29mHSZHtd1FRtu8Cz5CZTdz9HusYaHWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axWy5ursyCHQ8Y1QstDzZ96pfUj6ChR9s5BKr2RfpD53c4f9fh5Hgjus4JhxELW7Xu3ukRjJUkZ2ZssqZ3ukx5M",
  "key1": "2MLj1wURgWKtQsALrkVdqGkagdm762c2cZtC53aKBfTiY4b1uwUi2vPV8cYbme8oMmfZCktdzKR2XfNQULU5NQQM",
  "key2": "26qyZ34CpeX3CpSRQad8wF6duMG8PXSXhME1fK7dFgZpJMcoyJi8TJ2NWKcUgZ1xfticaCyyyWDLZmgF1QcDA7vB",
  "key3": "5TShLe3oLnCNCqb2qDGi5ywjjXgZPYkztS46ADxMP6rgcoZM6BmYDKdigy6fFHqweDG3p2gdMB6AoY4CS2meJPgx",
  "key4": "21R58VhL8ZVkdNW5yaGe7TBNruPvzWBhdEEV3k3bCso4nJiQqd8hV8szSauSZC4525mVr7ZPkDfnLTJCX2dW9YxX",
  "key5": "5UXFdRc8Kqf7zHeEf7nmQCtfZ3epDADs5aiRYTgw8n44soxjNcoA63cZFhqN7GWx5PDBKACmWJHSSpvTXCaUXwjd",
  "key6": "5f8yFqQ6iMnYnTaAmLxjqN641zFunxjkAarAWfXLi7TSJ6cZLx9NqpyXv19U32kXE9o34vsGvh9wJhQvJ7k2dV8o",
  "key7": "2iMLB6vQT8EDNE8PbF9XSZBoWyqGNFeZYTeYB6nKX2Q2DBSGR9mmtXiVbm1yi8GMu7e8VAT4RVktoqGEQixAtKWt",
  "key8": "4TQiBjw86aoKw7STqTG156HDa55ZCryQoSridYGVpLycuosCywtnjd5psUxAHjG7rMzmCsq9gwnwi8NbuEVdifcg",
  "key9": "4KDCn3smaC8XWpp42DBJp6LJsGqLEACmCb6Z3wxJXH7vCWx58G3PCoK6QkPpccN6wDLD9jKuKQi1TtKaL1FZxnhL",
  "key10": "5nUbNNFDxDRjtQoC3af7hoqnjFmTkAnwiPAp6vuGLmaWQ3KCDWrcKpiqDuLcGaB7xY4HrU6EyMXaF8DNSQRY5d5Q",
  "key11": "35Wyiw8hBigD5h4VRaG1MxvA3KkVEuE1X7GA8e2e41wahqNTxQuk4wNNbd9rEFTjmFEJJMTjn745Y7sixgJdMrQX",
  "key12": "4FEKM6yXZ2E4YLKuyhKGCcZ9i9qrL2srXwXGGoXq9e6GUQUGk8oRPLhHNkEcxk678mQk4w3zzbubACxA5W3Yc8rQ",
  "key13": "3PJXDPF3FwrKG2BpXs2mKcPQ78NdCXsKdmk8H94Dyj6swNCvmk7cvQcUtZ5NX7vt8o6nBRF7HfUnYFvjub8vG1sk",
  "key14": "4Vs7rTLzDdLYKfyCBCDM3YMMFuqJBeGnrEGGC12z2yym4rpFmoHgqtuDW12EuPgG8fGbbbBA16vkU6KGR6XBu5Mc",
  "key15": "4fPdJujdeDgi8PnuKJXJhgkRoJdgB9Cc1SNZ3nPq8PGJ8RCLm5QCyXGjBZUT1XTGi3LjzVz5LT1ZwMSRNVi7ugQZ",
  "key16": "4pd3WdnCSZFvdFMq1CEbAqNv8vKSTdkytNBrqe6JtmRWhWegh9ua6DFGzYRM7ajC8rk8mtj3L78SAKcHpNjPJNn7",
  "key17": "2BkJVT8Ly2KrEtRUga1GsRDdwxsbNb5VftiBcncrfajTVsULcMCKaj9p9V6YhZaAbFb2ZAzcKfay3EHvYFLdTKEW",
  "key18": "4hQkRnqKLtTFdhGEvUcTYqhqkoRwfBPGDqS71mdrPBWNd4B2EJ4QQv7k659BaN3on5kvC18dNxp6hE6gH7UFRYXe",
  "key19": "5F3woy63AT3cAz4PYs28hsTuNvBsf2JzgGqmGekNU7RiYH6WWjjg9y6DcKY6X3ZUPpr1okVUnvsj7VVTJemtgKJa",
  "key20": "5maUMZSATBtw8RZhm2v2MhrLQPHtk5Rakb4xthoJP5DZHhzhNPijes1xRstJMhc5bYGw4edqZQry1pnTYhsftZ2W",
  "key21": "5sDNp21JWTZ4sS3urWoVS2MDtb6gcmzcwt62VhDL5ZZsFAwrBWoTyBzYCU1syToB7p7NFvWgDkTkwyR6n6dtviqc",
  "key22": "3ADMCJDmTm7ZvwvUNeCZ5YVHgnVYQF1Ag5o8ikehCBb5iyoBdeG5ivkC4uiTJTns1ku2DJgTwgKmD7xknx3j1yYw",
  "key23": "WNXsghzcmrdJFDDyjHp32CZVMKk51Yz2LDrwMQAKKLpR25owpkad5qzPzLqvjAuPodYqSYUCU8Rrn5Cbf3rVTtF",
  "key24": "2afGsdEruAbfFQnxVP2DSv77sMN1mv4vqBrqDSM4oStahdA1JkQ9G4j2WXkZuKgeWcBDbyfi6JJRFhQAsPSR14A5",
  "key25": "3PefTUCzumb879FBH84CJqS9fBP5Ga6ES46axUtAQPnSDGBNiuCK6TjvnqjgggCPqWWKxdwuxiWbz7gAfS2EEy8F"
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
