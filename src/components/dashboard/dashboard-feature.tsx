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
    "3gQ1qs3WD6aJzT7eRqmi3ZkEjKpcGvaADbmwNGDqTMZUYRTiikPYbQ9xdGSCdnfXfCF61XmRzodgchSVvaRH4DcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gcrXFTzJsTsAenNQGVbYpjGXvPoVRa42qZepBdmx9Sb9yapahvQzHCrXgFnMxHiD16pmZrEHeRUbLWRV1JTNwQQ",
  "key1": "2hEUjfHmCbxK61aX25kwqzzT7yZfxx5vPVtYKN7oXbbKqmgYAAGF3m4rCDJXRd3HK4Dwo7tsDSnyXAEYNGbmRoCj",
  "key2": "5XeBLRBkjnnEUMerF6fFPLUgPnXFDeggxYP1VCPwtmJjzqimNohCqUYK41S6pgs4UQE1JRU4Zkvh9P8spgBpssoM",
  "key3": "4Rzqix61Bd3jN9VpkAoWNDgwFTzRUchsS3pQBcthWxoXzgH1Lvs5nsH12dRadUSRYVJrMniG56ZyqKQHcbkKoMfu",
  "key4": "ujQwmsm5xNDgzZzwR9r2GNh7F4kCrCrLihHdzYTRbhKXg4c9GCsf3wDez633ogtupuv8NxKEo59ewr3zmgcBfXT",
  "key5": "2Drz6GmtxPJsHcqb6Xs1qQXyqtLbqaQgzEC9q2MtjougAXBZcRUseVw8XnG9tFfhu55BUv5KeVGej2RmmxBheWYD",
  "key6": "2xwspwKvo8ENYzXBog99LZYwFwVXRVatvua3REyXLnD75HYuH8o51UR3ybskTUacnaXAqJFYHX76QvNJR9JfBWdu",
  "key7": "2pzMBx9h7Rf7Kxbq7ULTNUvSWi1K55xXQnVQYzF3X8NjwKEi8zTXo8DokXawE3bXDhUYcVb3RduGQHVeYjJue5nu",
  "key8": "2N6DeFwAdFHrMojqhjFLiUWhQmB4hCBQEY795QJfMNF56NqQvpCHyFvHJvc844kvDxzBbtk1je6LrjToXTAhwViu",
  "key9": "29dgnzYPWuDYDyXpVxnEcBLXxFYeUVHs3wfJegZsLdoow3ypg9Hdgt3igVcS5cp1bfoxSRjt45WoM5gNXWx1svLa",
  "key10": "2VSYZRdP1J7HRBGryL245M21t2n5YUTMDPRuAhrQpidQQ2N8dbBT6cAcxCofQWm7MtPyC32r8usiYjTiiEG9UyUX",
  "key11": "33AaNBTW7w72reMb9bZtUuqJ7X3b1xMhEWf2qrvmU5HU4rft8fVVJQrGqzcmDYWtDAnBToZxdgmo77F1YWXs1q1r",
  "key12": "52tRzK2QymDojW1KPeUyZ5nMJ9TBVH62BcV3r9Tia6y4C83Unx4o7BBk3cMRF5n9E82J9MZjoebz6J9XV7qpZ1tu",
  "key13": "4HxgEC4pikTS3syS85tyaR5o3w9K3mXoVfpVopLwipkD1YAfrxr4VGF5jdGbtBLZXmjzCxnzyARp6jgpW5Q2HuGk",
  "key14": "5jZGSb6PDZZQXnX3vwYQKmwd9Ga8T4VxJcLsvX8QoLz3ndmd3ELTa4g9nzuF3ymhDzz61dGnH1mPZgfmRw82C1LK",
  "key15": "4qtCFjJK6ir24H2HTbXdykUuKLas6kJgf24AVFirbywN2ufEhLfQmTXEbYfLR5hTPNsBBxJ5m3wHTgfvrz2MpiK",
  "key16": "3xSYo377uC8k65PAjr2a62XaHVkqYCs7t3m1bdkntfhvrKtmzmpqDAVuGzv51RBALcsddvR8ALtDSomPyPK8GhH",
  "key17": "3LikjjhZHuTqxUCdVkuEcevjRADpn5r5jnjZYRdhwddWfhwctd2e4NF311q55NHgDLTjWf4Nxve3zLv9a4nmTaJZ",
  "key18": "4UUWTtSviKuZ8eLnvnLGDciiSAQUEdoe6Eqs2AHkxJ46tCj6eH1iK7GsupgkDTCbzee5wSX8v7CRaZ3NJCuZLRbN",
  "key19": "4Wa1g6bZpBXoYwR569Um6e687dsHgWwx8YTLkthZqH7B8rH8BbVMzDJzFHMV58R3esh9QMMcPJjjRQqoJG9HJA4",
  "key20": "31tMiNDazJQ9WctyQzNG9gqeVM3L3YYaBCQJXU5ksWdJJ7fMWHmDvMVHotxgmvro4X5UjT5smrwE5hpyywLhZprz",
  "key21": "5acQx8T33WUAsbJtL8RMrMsqXcEgfbvtsA99o3nzpUd9Jc73R2SoPDixibFPU2uudyEngKBDPGDTnbL8oGqB4yp",
  "key22": "4w8A27TxzPCDwxGobkmAcqJrA6envacxEdhq7A9msFCjpys3s9EsJKerdKVY1QyH95KB8reCq5CpWL5pN9btW7P6",
  "key23": "3M9UbKFDZ5kYb6qmSkXwCvAfwQsnvuF8PFjRjD579wP6ZiHTc3oz96r9RSnfvKr1voP5oC3eqVaJJwnCjtWA5pny",
  "key24": "VqisUx9crTYUU1qoSRuwJvFfkaPM64iECosxKqLyv29AkKVpEPtqkRvCRtcivG3Hb48fYKjmAf2ooqsiQ1XfYM2",
  "key25": "5CcCi1ryn9hNKvzc1iUhr9FexnZH2Mef47CbocfGj7Hed9w1tomFZj5YP21d68VFJNCdzqLHtpa1amTzkk35mN62",
  "key26": "5BXf9sgSBxQUT6cjFAjBKw1zePKAK5k16bMbx7WdmCeYtTEnb4mPNqNCJXAq7obXXUGEXDXhy7KuH6xa3QeceTjr",
  "key27": "5JDDKXXj1MQT4rcKGmrtQPpsL3qoNFoSxh8GYHSoWraKSk9gKsRjan8b5gcRHKMqqeLtMXh16QzuBg3BZnrcJeQN",
  "key28": "2cnyGBucMaaatnbwU2uiNJBaDAdgJQRkLfxXAb9htaa1iaNyTw3SySNmJw8ep9dBBRukFSWwNev84BZ5Rd6Ms2Sg",
  "key29": "43CBDKVtoyiSqM3ndtvgqHsjqD7juDvL7i7CMnV4TL8n4j29VAd8YstW5cPgLcvChsdwbTip1Z5qNoAEMCE2JWsg",
  "key30": "2hXe1sSNJQukuSroHV7YwpnJg46zHmF59WpE4SXhALkH8uYRCTVm3Ae7HegJyYLd8LAo9M5ktAar4sv8ra6vtkx6",
  "key31": "3DdJrgGaG5qjXzZYux6nmKKRXXh7f21ephHjwgjZUNiRFRtfoR1yDJG8bvmHLCvY7G4J8Kx9Er9o5k4nHKhTzMf4",
  "key32": "4PaBDWjqPJ7Vh3muthuQnhTFdHn9KsjgtD5H1Hk1DB7Q7oGUNfqGDobGx2ogkkrqTaQp7pd4yq4LY1ky3egtUV3y",
  "key33": "2zFA3LiKhm654R3huCsi4YBmQDbFDVJEkXF3M1HyegnijnokEAdTZb5JTtSh9Y1P5mQFjoTfQ3PdgS6tLcvAVtHJ",
  "key34": "4LfPdK4TTbVyEgSmLEyPiipL4V494g45jFejwDHU52ZKwGxssG4bFpjh8TWTiqk39uQTi5Upsujc2w8j84u5syv5",
  "key35": "3nyETyUybQGjWsdTjiWfFsxATENfTAqVsgBg7kDyhU9xz6D7yRDp7XDai1JJZdEj8exWjwPJSRLEtBqibLphRGm6",
  "key36": "4x8Y5ZLFHqLzjc2BTBkH4xrtMaAWsggNDHwVaGapjdiiz9aMFmVeZF42qT7PXYGXj15rAjc7ULz8dMhRvgUghXKH",
  "key37": "QLeRk15KMpaamTB6LRY2UjG9SakwBVMR4wRm8G5RVE3sTLZUGq7jAr57YPszKx8ueF6T6d5Gfm3hbY2v8y8S3xD",
  "key38": "4tTpbUrPXMgYd5rQxUgK8A1dZgs45gZWSZQeeBqEC4EBsncU1RR96TrXTpcfW1HgsfN3EQNZ95mv975m7LqQ6dJs",
  "key39": "5BtV8d6k3rVWi6oYhj7dCgmw4bWpbqmAPvMNksAKnDZ4JcMCFKHj6JfZ8kfBqiyMU3USpDumGNc5CAVRFDcvxfHR",
  "key40": "67Kk8Cay82ZyCiYzuWj3MjQiNqmKxf5tnbGk7JLLFTEBi7c8AsNS2orVthCi1Qb6V72er9sC8vFfA83siCMfdLXA",
  "key41": "fmi3go357HWnbRXrzmzPfPeKT9D2YqXFP4MjNQBLo8YhPNar7L5FaG7YwTNtsZ7Y8cu9DEX7VpJbSqNxaMdqQ14",
  "key42": "5aWqV1QVhWQxPvoTKP6gcyQtNSfdDUrCyeZzPHPbrPmA7hZUnwzpa15vt7sVZvD8gzR1NuGUVVGQXk5JNMyNGYPw",
  "key43": "P4hXH2asuNZffseRrK6MsicbYvhudFRU6zQhtHZ4MEpFn2d6Y1QSTA2dKpRzmEr8Ndp7kSfK6nxXs3a9pjDsGur",
  "key44": "4T7JMbDdht59JwE6uyJH9iyZ3Y11XGeiszPqJG2fBQZPRbTVKYWC2e36rA4MjdoFuDRiSF7AxYW9P8uekX7v3wxD",
  "key45": "454bqxdrxYKQCDa4CodySxtbUWBiBby5DPhD5GDE2MM3edgbHzNqmKZ9XqVhyxdEKDRw3zsupS9QKGzk5sKYQCwG"
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
