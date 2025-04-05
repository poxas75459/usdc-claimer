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
    "tfvAcZt7kgpC3PaMfpTAgg5nMTND4JrF8eG8WLZPvm4HGgASgw8HB5f614tnDW3j74kvG2SygJjocaqa7FR8GUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65BjTYDraZJFck5dTDFMKkJnZr84VCVyhzjXJxyEDLY4rtwaYfAiLLmtZkF3h64YpCTRYUVzREz6M8c1ncSC4wS4",
  "key1": "5MeEYPsVurXyJNcyDDf2M51QMCdradCAQFfyF29pu7fp9PD22gFPUVe2GJwtHmj3nkTsNUrEQfnzNmsHc3bQVkYP",
  "key2": "STHQZ2Dng3V6iEUoLdvF4ALpYNrqY4Rka3pY1v737568ehex2BrLHpYkeHgLc7jE9LSxMUztYZs8Dv57xSQuq9v",
  "key3": "2i5V5JLqKDMQjA6TLd99yhP7xmaXNXc3XqSi1CcKeaPbR1XddcfZoxVZD9jtM2caDdJtQgQem12jMx6GfwtYxPTd",
  "key4": "4Ykixz1Mi2rnfnXavwqCFDYy6c8ur2bDzxw7w9j3bftZHyWTSNouY3JxhtVLmxzCzWwGJYFtrD6h3mvAeRM787ZC",
  "key5": "5XymaoWvwrzJ1eXTCsM9TWfL4EyGppzA9irh5KEnrfH8oe1Mcc1aAeSUDHxUcApiZimQjRC5PD4DNpT8LCSrnp2K",
  "key6": "a2QoaCUVQtfKGGkCsfqGCh1cY7cuCnXJ6ss3J4hSdamHzNYfW6Qb8DKTGQUEaP8hGvptiydtwzQiWDmVKtzaRDm",
  "key7": "5Man5bahqZF23XBfPcj9XGddu9byj6FjVZU6KDyPa2j65RX794saKvnfwC9F7dAig6Ros3fX1nLbrCqeQnvEwHVD",
  "key8": "2VXZjRkr9ECM1wtz1n918YrGDyBq5anea1Tnd3Dv21tCFLryxg4Li8tsNzubCFN8VnSif7keonFwZwRGUrqL3wTE",
  "key9": "5sWd1Ym4PCJcPy2kPQPNg2z8d7ER4zB4MZ7niEpPkQdWFaPaw4FS7tBhZxq5pa98huQuFmqWuwE89A1CHvuPHY9h",
  "key10": "5aXCMYqbnhNgyurfg6UDkYJdL9fUnpRYB8bTsUXssPbvcu7PeZHw1RpXJq1i5nejSDMRSK6YumsQqX6naLqKutMp",
  "key11": "5aRgq49xavwPqG7w86iK8TFoRt5TfGfkYZ4LyTy1jmEMf36WRqhpxfBJAmvAwKejihiswWwVv6Zf6pKje1jPTwaZ",
  "key12": "43chirrCUBPq2uGNAaFJdPRTj7ujocT7b8vPvoPQGAWopejvc6o6doC88aLaYiMiERoearoErwVkk2RTqrJzFGYr",
  "key13": "3zbwqfMXMtGWLVixd7DwDyuty8t551LencqNzqbtQeLua3UH4LjBfT1wV5KhnjXjbDoivZxwEWA6n3sAtgTLxK1R",
  "key14": "2D6EDSDvocBnX6uQNQwC5SiSsJrR2uMFkvYVTNhMhAwvejyvjHrXQw2b9EqYtcsB3xiNS2LbKpgop1DfB9CfDpeS",
  "key15": "Zhbj1EHKUJhpBev8MYKtpUkb4L5YgeTEGZ2Lk9JVkPQKw1ox6tdKnAvXZYbXsvDuCqMDcbJFfuwHrPU9DKtbXNp",
  "key16": "ZChiPhiUqSD61mzDDsTY5shn4mXQUB2cw6BJ5yCLtvmqHBrhVtTqz2iq5F9grcCMBy8HQWd1xhMYPJ2bMkVPRr2",
  "key17": "3frYeZ8VHmMdJ3FK5D1CPxiSxaESArMuf8aibSML4ivjKE57E1AxaBLGtvELXLjQcAtZoX14E4Pt87t8ruqcjTzq",
  "key18": "3QtLhgU1qHszx7rSXhFLuxUvFHkUaUPfFziM8Yu6sGiDA8TW1Ge5sBaXb3DdCrLjvNsgm26gCfWaBi4EXPFBV3Lp",
  "key19": "545ZkAHtjpoeF2YfEz4stkmDJjh1kydJkmucnza1gcGVWFFFFdWezVcBZuDmfRHZWPDGYZCbtJoojtZL71PU6K9t",
  "key20": "36HZh1MUxftBU2BooizP23rBJtpV1Xoq9VNddV7TVYZScQvcfmZEwnfEmzLbAZcgwuLtiXG17R6dM56arbFRxRyt",
  "key21": "2tgRuhNLoqtUk5hh7nEZinuXixzv29GBP7xvUyoE3RTr8qeEdCrE2Rd472SxgNagoNk91ntUjKmMobxmEiRqnnvn",
  "key22": "3LLqMha2zNMcHi1Kbs4RPB8VF9oiF4hPgvzP7TEqjZYoiY19Sb1TRqHqw9suDhK7jhemEPGn4Qs7HebmtqfzAUmu",
  "key23": "57Si1L4snrcJQymX6tVo2omqrZLHRAUSw5bz1fdUQ8XDdigoigPBT5fiENvjvotPHvAN8FWLacXqaQ9E5QdhyEuh",
  "key24": "3Hiejztkcq5A1LV56n6gWgMzCkmK7MHGMYpjwL6Fu8qUaDUYB7Gz5MQvEpifxvFnuVfxpnE6TFdBMTpt6KUHiSbd",
  "key25": "4afBfXErYPsRRTEJ7GRzNhNmGyM6zQHLnTNkuhSbyhkKrWuvV59VyijTRM7JYuFR3Nkb3hipdNF4ecnhRQExW5zb",
  "key26": "Z8QerNKbrSQXSBGnGaFaHVY3VxKWnMPg7gaiM96YTP1EG8bjtktzPfyHxgbNjDdK4y2X4sN2SeBwFmrULtLfHen",
  "key27": "66sFa3MCPDokoLeH1ZMt5dwALWxJtBWtE25fZyaW4cb3wzNh1Cbb7Gqtbq6NYgZExN6qNw74sAPQ7M52N9D5Njiw",
  "key28": "2VgtzwfQr3bM1H8TDdwzJTKY4f4ebpZZVt1Exkp7Rizww14CKYYhqRfgjUkviAgG9Aw68brrbr3zwcAkycYjAwBf",
  "key29": "2CEkaTGUK3DSQZnjvktW7ReGX4KioVU15Vw9njNiw6keoqGFx3aQ9m5UjtTo5fPf25DZvVUmZTFj7Revd8cT6oC9",
  "key30": "3v7fBisWCa86FPDAXpRpqbyc1RZXRaAQEMTZuGDdkZVVRJZdAp3mrSCsgNMkUckmReUCYNYR5qrFf1TE5FNfVrqb",
  "key31": "2wF7oSBHqtJDnL2m9XR4CErQ6jR7eYQrPVMKuKbY7pfXREYoCENXAdgMVf4WCVexyKtfK7WsBZsWEpxRPyCd5uZM",
  "key32": "27KtXWmwNqCJtQiaVkXjxhBUercgLUdA7rKGnU7sZxk11eX37ewVGT8DiUhq3NY4BqYuZ7DkABNoe1FMVrGYzr3k"
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
