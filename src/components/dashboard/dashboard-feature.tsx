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
    "3g51KzDYWGEHTjQfAkKwepyuo8y2fM6EyigQ713F2q8YULYuqruQvSwQxuv5u7uY8NoocRMfgAT83dmryoyacC2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzKkpVcQ6e6xZv4HQhb6ThUaqD43mAs1P95tFCZfG8RyXJmzeAyhSd5zsYBbu6FHWGAx5gb1gmMUok16rzPnPch",
  "key1": "2TRcDFbA2oCj26PmGt8fm7ieFkJybSCwjMPh3bgGiVnXvDNkgeYZoC7VNA2Bmbji7UPuw98ah1tDpD7ECgKQBJgU",
  "key2": "2hzqDyiqXxkkvdD5NNbDj9c4PBopaTf6f9JuqZLzZ6XyJUM6DTWbXEy3BGRUo9i2xmgdXnuA3yYditgZ48jx8Qjg",
  "key3": "AL4zY8XL19S8MAWqDi5Tc5oiKCjh1HfkaA83LP2s1mHuVRwJddX1XeCFc2z74TAhU4hE48AEz2LZ1gN8CTfRETK",
  "key4": "5B9mGgwCsTitC5PV82YQQBc7m1JbPqsU9pxRDJjFHvdYj5NyR9kqwU6feDyadFv5VtEEjToaGZhtjouw5tYEGSow",
  "key5": "5mdieaHoMkHEJohpX7hW1cf8YieSudrrmcc4hXDKWirfC6yLFqgMrkwo7A3YoH7VyLQFac1uqsSue9esrLkNNav2",
  "key6": "5CszXrgAcPXsa87LCVGDTfN4RkHUqXKrQqMpdu7DDj6tZtXH2utqiqiyidbm8tNujE5yfhbtr8wYwFZ5ctKrcxn5",
  "key7": "3jZdi4BqxmotEmLbGkekhyVGr7suQJo18HMsYnEVor77r9g2gs3es8gAFePnoUssYEtHDpS74WksZESTGTn87Nhq",
  "key8": "2dzSa9h2qV6SUDH6iobi86C81x32PgCPrnFHS2DPgJAw6nqUfBRw4ANxuDYqMwNETQaSJLRxkPvd7etVyzg4tiCY",
  "key9": "yKJriWRdmoxvnMxW6XToDdXvp2tMhhcQLDwot1QRW74gAWsJ6NXNX5DT1RBjs5a89LZGp97kaNeY2ZiqMDKn8Hv",
  "key10": "2fatxZTdRYaxyy3C1od7g8fM18FnzEJkMkaMSMBQZpSvE2MHwkQ8mqnqt2qFedhHuDBXUP9c17WiEogaQmcuViLt",
  "key11": "23N56qxXDUierD2gnwLX6jZB3HABrfUBeHK9768PwtQ6tjWcAurKeBrynceqasFK5BuBk729qPFvfvzTDJVHhWED",
  "key12": "4149oxEMfEb7N5c3AHKCM2TNFdDKiSKm4Yzwkcv3Wq3UPPyQ5r824YaGrJ1NmE2xRSmaZPLVEZ3mmTGqkZyHBT5P",
  "key13": "4w5fyVcfp4CcfojC2RH5a3DHjYaFYjgUFWxoCkU2uS6VyjxtdxNRXrQstRpcUXnEwofcGrfPjge4aRo7YqxCVXc9",
  "key14": "5PzR8ztZYhcPCjeTmXUbwztuvAZEEAArJzsm7PamZu4dSjAUX66gPZ44LamrZvbp62M2weFC1dogMZhAkk6Tn5KL",
  "key15": "26fnd1Dpfhh8x3S9gtqA2yVw3PNKuV14cYVBJ8grD6bW2eftBxvSzkobGMFcLeXXqoQfk71vnxz5aaeHubDySh6k",
  "key16": "6419iBQe7QiyFTLninGMPyUguid4sydFskh6DXYT7kikgFc3UTg7r25jcyjgm3CvnkfWbYrJzNGz5n5CkbwCmMH8",
  "key17": "3capiYg8J1bzc1NEJczuBPFNfMkphmWUDfdAewm4xmxXKQHiQWugPXVdz1dEzP2huBajsDF1kEhwNu1AHm59V4Ex",
  "key18": "3SsJvLNumuiXJiRjqVBodncSDC44S75JqqVckJXYkQoBKUNqqVqktodzMZVW4s25dCdyVJJwYC5ELDrNa8YUy6pY",
  "key19": "4eyFPaF62qYv4MGTej2y7cdcbN9DXabpBmGXbwVweToDS5CchXCcYWoaPLTvQatFbD6wtXW3852VyUuJs4D9eodN",
  "key20": "qVxozAJyA32fU8YYvFaGuGZULsdexJPjWH5fzZEW92JTHJaBPjcZ8rjnCocNyWgdr6Knz5xqH5qsUFQo9t211Dj",
  "key21": "4Je8BmHG11YbnYmm2Ue2JABCc2y2iSBHVZKRnoRLBDWns69Yjvn2qYvogQy48cH2FRignS5T1r5dUKxWnuN4eepN",
  "key22": "3p6fr9ffUA6hYsogYuWGvZPYTS4T875RpGGRxf6Uhgr4bJSBF3LkosgEwn3VW4NfGJD7GrhFDGRr6DJBhV3DXhbG",
  "key23": "mZaJUeaoeueCYcEaSrZgtMgKSkc4qqCtaizKGzT8Ky2RYhvR8V86xq3MWGTGybeky35SoaW6LHz4Nqzg2FZb7wM",
  "key24": "3ks6FQJvbxMr32m7oZ4MhrBqJnykduTL6Qic3o7dSSVcHNNRSgbdn6j2FpxD53vdRZfnpGVe1bPyKyiHuLJvpz9X",
  "key25": "5YGqGHRp9hY1AApTy4pf5wkGDgSL7vrjCHvJZpfd6hTEwkuGFjto2RTNqmqXwpvNCuyJcQD2QepmsJGrF6C9WD1M",
  "key26": "29nJkwzngCVWzAV11zRW82gUFwp9mKrohTaCsqJYheeUXLSH2fCQinDeywL3MFgF1CaHiSBzxaeoaJRT9REJLPPZ",
  "key27": "3EPNBMGr1qqvWdx98firNkooTzMHBv5EguK6mBjUR9cYvHf2LDVmsQFagQWngWHxN3s6eEWiaV47YepZzJ7fpSsa",
  "key28": "3zmbkPLitQ2s48m8JfykkTzCHaAtDH9yVRUnAZc96WLtx2YXEErTrHsw8H5vTcLKqnLge3oFBDVaJ9XZE8XGKoCY",
  "key29": "5D8mp7zGGWdkHsrNQjD2oqgZzdSmTy9xPsST4ycem4qsQPLvGUy1u5F4QgocHhp52zJi7qFy1HUR3nRUMurb414q",
  "key30": "5krGmeWma4h3TmBNJ8WWVYmkopem7unhSr6RJe7yKiwrcGY3Y9xzB3s1DcUiDkkkmNtdeanwefN7chTboyr3GtzR",
  "key31": "4nVz44jq5cP7FkHt2tj43wPwFwVm3kd7bLqJfNHgoMXZjK1bZwGzvcT9WTQkRV4am47wivzmUSxGEJEEfc9XjMzF",
  "key32": "uz5hm8ng7QHjs2Mn8eYQmKULWUU8GexXSvrPNi2Lvmz96yUwB8J5zwdjrGxvAJV7B6wuaQDaMenwK8QwJiayS4w",
  "key33": "5VbQkio2q8d4kNP93a42d2GSp3VVv94ng2R3wV7zFPjpYuQ6XXHD6EesSG3vzmtNbM821yeW2AqMfJLAvdoJvHU4"
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
