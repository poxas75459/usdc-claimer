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
    "3uoxx41kEQ11FXQkEzusPzn6o48hJLNjjVfjUsWRHC4t8G4qEQb5uwbrwqycAEnxXVqHynZbRWByNFvFBdJx9UXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8s4AVzJeTLzADpPgd1x5mBHsYydVCkXWgtkJhUk9hc1fGR595yLTAdKfz3RiwgMibaErAGsJy5C6E7pfHNLJak",
  "key1": "5zCPgbgZmp3GURk8uzWuqMgM3SXgcunm8ktGMZv4z9wHXECQTZQxT5GVQ1nSsVCLBsGhTGwpjbwe1Aqnhx72C5xx",
  "key2": "2pnsRUFwoMFMWEKum72SskyB52nB6rBxokGtn4aiGbVmzurhGh8S4NifqCN3Zrot14S3xZSgqrYMi6NmYficN73U",
  "key3": "EjNLQtQrbFYx8eVtu4qePnA8cFuUis8dBwjR5YZRQtJGj5Shnn7JwueTLSNHNw2XHygpomXX7CCeqKpUjVXJpeq",
  "key4": "NbWkj9jmoGjkYrjmAmYqA2YeehZ4p6pp3qtkDpHsYcjAXd3uEZCVQphFYTutdWqGW9H3Rsb8jEdj8USp5Bayqt9",
  "key5": "3NkMWrtDniJsBz93Bc5hQ2KDfixhFHnbyuZvjUHYY5gQKR297DpShyimBrPNyHX2qhxGfvTeLxuw2DWeXdhwfWUQ",
  "key6": "2kiPdogyFmCH1gBry4MwHr8yhQAXVyenu5bpi6kXvqz4k3uV3UTf5ieweUpfDnPNzQbJthxWUsiL31rBZRvV57t1",
  "key7": "4Z96nK5iXifd3aVTAtnSKuDozU4sSS9CiKxR1GRBT81yBiR2u4aQ5RqC85DXdeA65MdCKz7Y5xucjtYbWsbg8ggc",
  "key8": "26yvQdqcghosVEeSEcgJaEgMw129SKuYkNZjS4Bp8RUX3kR2S4t8faVwo1768CvnqM1fsK1cJQhyPDFJfaMkrcQ4",
  "key9": "51izG7pkx3bemBzyLko9gNt5Rp8zwfttvyXjHvnukPvJYBvTRM9ihvyaph7hL6asaPxjXSMkDYCN2rbhGQ9uyTw3",
  "key10": "2wgtWghPq9naTQGAo47Dh82xsfwB4x4BeBoPr5EBepvYsCFVz8GqjRgouX7t8dsT9kND7VjuBA1k3MuWBX85dJy9",
  "key11": "zFignaRwGX6pFAAsrHhhvv6XLwWJzuRjNCfYSx3Zktdo2mw2AsRZ2n9DV7qjUF5RJREKzVQZTkMrbE17fwLXCk2",
  "key12": "Ygt6jvazwRYPRZ7DNEPyGDBzY6nLdagycuuuZBWW4n74pBDM8k2PbyrCP3gX9xirrjS3ZwiosEUrWCJdGWr3i84",
  "key13": "VpuHqff68TS4F9NQ8nrVsMJ3dEno6jv1DoZTtbY3dEeQeuJcWjtcuT8GT4YSn6QBNGzwxMyv7iHo7CB8oWTbhq8",
  "key14": "3FpwtbE1jLmPNsyhBhA6fiZsPgBZjYbB2bj9h76SazMJiQCb4FJ8efBbKdgV2F5VXPga25AvziuZbB9neS5DmmFF",
  "key15": "4vY8H6JEXdNUJEidESnTRQZzci33TGH9c5nEbMLtfDedyQvgBagaQ9xfv1pTEzpwG5HwUbQBvRBoY7zeibJfhAh3",
  "key16": "2TJh7zNnXyro1K1Bw9MQjpdQpZPb53ADrXDbTJ2ipbdzYvTamuU7LDqQnXfkjiCfT9AMUuu2oQLeqEpqUFVZUDtd",
  "key17": "2gdUkC2VsNe9okH5usTCwYVyExYRRtJ6StK4VgVNkfcf9vooGPV3GuswURbZhAA83F5nzfBAzH3C5VqjPM4su1vF",
  "key18": "4s4EmBMqN3yD86jx8WA2TVNw3RozyFr3o4wwBUr2JkirkB6pHHPCAVHqsZQzxt2sERFTybuLSwxsyJ6P7CvQveWR",
  "key19": "2PP2AcmKj7kGBHqAUykaLB2QypiHYs67fxjmhMPddmeVK66wMqE8B1XkJL5A1WdukojoJUdcFkhJkqGc5QULCi4H",
  "key20": "5ytPQDYQN1GLmdt75PAKspKNatNrsD9KP9B6hXfUAupqEzSiPE79G8bkiu6PD3MhRsy4LLXkbJMa8d8EwY7UKem3",
  "key21": "393G5iRSQj9ipBCdKcCuPiuvW8hKNkcFX7TXS1KqoMpv71SNZbjLccieRbHxmAEc13DSHhqMgz23PXWfvyJ7Y9Go",
  "key22": "vh9zMKogkm3kK8shmPb9PCyoYiACor5m24iG94zRBK43JiazwTTD6z5o1JQxKt2FAeVpQoPpSD8Zkg5bQpdpjRe",
  "key23": "5AEbZ9dj4qmtSW9dT9RkjGtgs3ghfmYPukC6b8N5AZ4PvNYkSPmkLraY6yRsiLfc4U6PQuDay9aLeMZN6h1cTS4P",
  "key24": "5PWzZSb6JkD9na6v7VLYb1ahmf7T8ogk7smwyjNXZWA2v4WWVk6WXfhooGfuikjawnJ5fEW7tu16Z1gnMocg4ZoS",
  "key25": "3iWTmn1bWwSE8NL328L6iNh3hUqvVwdhX9YdTiftuhnFKvWQTZbYG2YWbXDWyuzH1LKcrmxsfrc53P7QwT4hD1HW",
  "key26": "237qhjY5smco3ZL154mzWJjmCBZts6SqdbagJKxfGro9L9JhjAhF1hNvHxf2FKPxRWGGRuxmEYs23RMZAjmjEiHu",
  "key27": "65KEACdw4Hrvz2D78WGU47hBhQmL34V68KxN7jcTy4p2E5cG27zodLeQCfYTMVi1smSE2HE9czQJpBNB1wJt99EJ",
  "key28": "3BwJTZ3NspRrrbFks5qW4iGiWg5JUYecYxL9BxzDLJyUWagKNMdCfzdo27hYXhxha1VLEFzUwykmYn6vGLoRtRCV",
  "key29": "VLPZMx7MAjVjdMpW27CVdBzEojWycUxwkXWNfqh66qySwMV8pV7k9czL78ACmgAV8zhCx3bGz3jTzVcwnpsQeki",
  "key30": "4GZSBmuJPVux2c3jVPMa1q9mvyEwByrP98kDURL3gTv8Xs1QgTYziiMJt5SQiQagJnyCoZsG6u7re4DJf43UYo5P",
  "key31": "5e46kQ1ehtnniWvjcepCRMBFs3AzodoZC4U9C9kD2NWzVX3vAKZ4v8PGk1LrBGmM41kimsEjsbzuYpsKxVQpiyt",
  "key32": "9SDokCrFze3iDnhYkTVsK7N7nZUd3S8sj96SuEthQpHkk2nGTs8s2bLx41LZ8QoJV5JC1iAAmMKWewVVRBczKC5",
  "key33": "2HceD4kaVmiCH6YJCBTNjacszpeRMRMzWa9wf6beKwZMKQvXVmxWEYaBHHu4CKKnqYmiAxUakH9zjzx5wEYjZ4F8",
  "key34": "55m64BKcrmJTAMd2h7Yrwat22kVV3maU9XkTAyYM5PdpdwLDBAZVqFDoYd78MQzgA4VJfzakAQzUjBcDTbNUt75C",
  "key35": "2BdKWPt7XKKUZMkZtn6Q9kEdybCCGQP6K2L3wZ4NBUieQWUN2tget32hrFHaL4L9dcSbAKMHxxMXkrh9MGc2GXuX",
  "key36": "5uRLWwuSa1qCx1K72wMc3v5MktFk9cf5jQe7gexWJKwRAmRGyc1VfMtS78Xnb12MG1yTQ8Go1QHzi6sV19b7fgnE",
  "key37": "4XbdoUqDkATX6eqLswzDW85zCkEizLHx19W4a7KXq2DMLTtdLGXZP6YJDXW7nW8JuDjSdj41oFELEeg3aVRavRYR",
  "key38": "223B73WH7aVoMtzoDAeEiqe2n8Eg4U49xdAdcNTKmXdaJiUwYJ5BxNbFqxHMQxSthQbhRzmM7T7gABvcCTLNinJy",
  "key39": "3phgkVu42xMmEYmWxPUsAcoccf8As8XWe2KhGbM37nXxwi6fN47SY3W6GYhykNYTneNUbE7uXiTJYjTjzDMQBb6y"
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
