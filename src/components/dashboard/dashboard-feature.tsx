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
    "3aK4A3onaoioJVDiowi6TPhVVU89pWpAinMpxU4VLKJzVRGRwiobmQi3s965441YQMDtYdEZwecdS7hb671cybJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "354tUq1eWTg72BWRqF5MwiAe3cHGoAvvRcENKQZ2PSMcHbdPA5YErT4s7mt8DjtLPBKS4NovNzgzhA1JDu7aLdGJ",
  "key1": "haAuhXAoWk6go9ZrMiiEhPuoppJCzUAnfxZ3weUDhicPdk576rZhscv1xDMNSpfr9UhcDraKTnTHdn1RZKvgDki",
  "key2": "3DpdnENpLKKeg9GuUwYykCDZ5UdPFSDjmQPv2HLy5Egj8DHzcBdbm8MC5DwZuZMWwBdtABp1wgW4Kp9AdQf1SiPB",
  "key3": "3DZvjdcwp3ADtuxDuA9HtoAcTX7WesLQH3PNe1Dvdox2tn5xHajVeeHyMb271LZgRJ9gxfCZEmUQcGP1o2FzCA9P",
  "key4": "29sxRKbH364cpPHq3HdhimDMQh3zBW8fctJHXSeBsU3HWFvatzR1tJMVQtX9GfP4f7onJ4rJzaVjWVE8A1nw3RUt",
  "key5": "JGFvPW9ZB3MmHAkvAiWeojhLcX8Cv6znUsKm5PG1eajTw5L6eiHepbCrKxMyRarkDiJcP9pjpQmtmpwN7UbeQ9u",
  "key6": "3VZUaCtTEGMiU6XuYN6Az8MnHC3ow3LpxCXQwxbjjVNRqsaZdoqWRXr7Ri1WfpWpEazuTrJBQh1mJQvifcbbKfYY",
  "key7": "5UH2kVNNqDZ1aohnPFY6UaSU27EYyD9fz8gqLGH5c9J3GGe6Miar7zVdbmbMmndGNDUyFMHhyj9QtN93Jptv4bss",
  "key8": "rVg4eA3XBrUtuK3tsVSpqKQtqJxFtporZ7oprLDt5MmJnQaLJ8ULUsNuy578eZypbSN7Aqc5snBxQphFxViufti",
  "key9": "5oZciBaWKudPC9XeQksybLsw79xJSPu6nxf5YN51LHgmY1vTW8iD534pJZ78GepVG2oDqERJGiqFUjawSva6pFZf",
  "key10": "5DPBZXqVTVv3nieveVjdxYrZJD9cVdkZWeME2a3rLUvD2pXHV9QUMeX8BqcDEYxxceVHM2BDsWA7PchLqLj19u8P",
  "key11": "jNNq4Yd4Wx5FBwmEF78LNm3TaDF8922MDmUN4apg78o5451k1hkgzwKd3sgRxz3ABu5JXj2GC4gcPwqreSvzaJv",
  "key12": "3AWXZbPsh2yk1tmZvgUXxRNcpvFCs1A7H6K3u63Kcg54WYiafmLQnuWPBoWGQZRbZ2hAyKZMqTaeuyXM5nNvirz3",
  "key13": "3qt6VprbJpZEabW3wki2duuZNQrMythyLynjTDQRyCoRQ5GxfUepbzpJ9cDsFjaZhBZRRpo9kyKojNUGp38iXXbV",
  "key14": "3dxxuSy4ocmFjp33gTFoD2BeMNjFD5WBhLV5TQoigAj2ewEmBdzouU3WzhrZEWyZwuy4EtjdxBk7bpseDZ9iS8y4",
  "key15": "xabkgYVt9eNqVF4GLmYLPa1wipx4fYbzqwDbANzUL2Y3wr7p6QGqUwCVgCBoHRnbtT2kAY9JvUHfudpDMM37mHn",
  "key16": "44NS7T3qWtRUBmTC6guvuw7Z8JaNLVCGnS6JfxK1gLvX5Sec6vpyDzyQcRGWxdZaj6MU7soyBSwn6cUAjnU6eg31",
  "key17": "4cg6K54nPnNSs8XXYHBcwZEVRNAtoSuCALb9G5mJEA9h8aGaAsy6CJMdr2kz6rY5okgVR1hKd7VgiTPBDNEVT1a1",
  "key18": "3JgNw8zci4i7v5SwzN2xyaMBHwZnfkFTFKb5cUFJE2FVrGCn3YvyeVFA3EvJhmd435Av3yFN6ymgZGjBdDQw3fmT",
  "key19": "kVCZViGVf9tfxkyWgRhFZPFKBkwJktVMXeWeZUcVs4e87dKEjnGFnK2QT71BMiwQECghWbxiYLX9wbYg21CyZe9",
  "key20": "4fQunbfNFsyrnfn8Sta5jNMe211Moix9mVaGr7dA8QLvFU9KW3vdS8h7UKt5e9NWiPxq8DHVF5hBnuppKHFZnRms",
  "key21": "5ELKbB9UV8Nv9i6eivV2drWeS3gRbukjE6tiZinwsqgPLQuK4uvYQXYjcWp2GtWKYdoTVYUbapqXHwyB9KXhDyrL",
  "key22": "ZawWERcfpjdd6th5zhnQhngnYHaDgyfBMkg6qtBzQTbNrrkMTtTkYfusYxGBWs8pYqQRPNTY8YNhceGRbUASbLQ",
  "key23": "22xMdBfjwwkCjT7tLgvVsKwBuN3NQCm3bw5dXkFxe34qzMwcH8L9jQYetfNuZJ1vsVUNTC9GCBZfrhqyRNbK2y85",
  "key24": "3HAWgRxXQzjmqgZrDz4VGnLqnrAhgdutPekB2yBsxMefK9nwrb191Gu2NhQmXE5GtxyT5mGSKnzHobxx6uYw6uPz",
  "key25": "JtJTUMD3k51vFvCNZtXsTf2bbRDUdQq5rbCe2U2THS9257BpyhhK8kJBkKm4zYPzGgAKz1zkT6uoKQ8SSpgbZWZ",
  "key26": "5SLphcXiTxYDYKksDazjPUecioYYEK7eyuxXbFA7T36yzbjn3xij85DF6xavG9kD9Es6GS67anw1iwrpwWw2QN1B",
  "key27": "2BckPRZhCudNbmneQatjQNmViDv6LbbGKoet8pdWaoASudCi6o5J6HuEdtq6jjfTHkp3UhEba1EdHaENTijqoQKQ",
  "key28": "34b8a8UhohX5ndtVJC6DEpmbU8AqA1ZBaUJVscv9BQSR97J1FvqWhErUD1GtdEj8qbBBx3jevxcgNqLaMHY7voZT",
  "key29": "3FSE6rfFmGbkA9bQFgM6Y95jDHw9NVoWcQWPkuvPe17RMTRjUCbnH9y5ysqQAGQ63pp3MhNSfqfhkRJyf45vcPWH",
  "key30": "2tn5RH8xiJmY4WZ5wYBjbmuuUgQFyByBqDw4V26xaQuM8QKwWYsiEFtNDRcWnf4PFMmfnqs8hjwQKzSZaVpTXtGx",
  "key31": "avsn2mAvkfgAGUVs2sqRdmhRzyyJ18DpxCynhTg2oKprHjZGU4HC9MNi4BFJST2N9iEtg6SqfCEnGFUYHroLXP8",
  "key32": "yT5H8KgYhdGtJGXKE9qhRWgC53PQYTiyS9NfGH61e4L1gxCgKKLaZ2hhvxxNT19HKC3ovVPCJSuASoQ5UGSzia4",
  "key33": "3Md9GqKJfXXXdeAuFY4juRmafutRahqEmBzKr84oGsGFUENp6gscEMWR9tWXL8Dqux44yzCLU1aPvGngggqX6ddF",
  "key34": "55DupfU2dS8382cD9EpoitiFoYMndW5FzwHmM2JCnd4QFdinEKszmV7VFVKiqdDubrq3fkC8S34FZc4hJ1yyELR1",
  "key35": "3au4eotxWEoKEj6nhGdMbAAuyu9Kyz7LGt5BX4noFHMUwPF7LfNCzvt9St8R4xu91RvzLGKY3jeVi8nfsB5wCzZY",
  "key36": "5LGG7EpUZ11KmsHqBmXef8bJRHkt63JP9K7xxYd3kGmt5F9SjAJUF4DpJcSZZh3CYVDAX8QE53d4HKy5wpWGFShx",
  "key37": "4jidtEWKYUwPP39b7SuHFi96AvkK9fyEa8nkLPUiCccAGxHvWjfmBGigVCNeQ4ChqTbphdGk9VJbRZJ3Y3ktjDaz",
  "key38": "3kUmX5mJWeGLcEZzZ62j7bgtLzFdcEzwCyScUDhDreb7fXmSDq6ctN4eT1AKTFCppFx47t5p8rd2rX2N1xYXXurX",
  "key39": "2hfLgTTQj4vJk6YeWFASwz5D3iWV6WZxzwVosi6yD7v5LEWwgiy26fqg5W7WdBk32gThPJnYPb5k8v4JogZd9Ant",
  "key40": "4nArcW8gi4MxmYD17xtw6cVsKc2edKkoaQXs2HL53BVLbaKC9roAvuCdbb348eYuv7nQzW3kkRMr8KnnNQdexa3B",
  "key41": "4MgEfaPJyzAtwLjkasf7skAhfDtrNTAogzJG1V6LEzPVB7Ju6D9A3Kd1cvsgeEh1ct7wkkdYtxchTipBvLRKyZA2",
  "key42": "4ZrGQPgLENQHWmLGgqLHB9pwB9foZ1HhZHRP7MZUyDFyXn8wHgdhTBJ8vCtNsMdcoAPxnaR8gLCBCir8ZyKYJeA1",
  "key43": "2Dc39m3xK7uh4PnF1rkvbvK4my4Cvedtrgfm94uk2izBBF8oXHHQaVbsFF1KkJwZE2MVMgg2ugt6A1YY12QorbPj"
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
