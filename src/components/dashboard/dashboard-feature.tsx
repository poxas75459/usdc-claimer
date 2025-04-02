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
    "5gtr6GYg2Hhh7xCoh4hJM3qocz2hJtMCADeF4pWw6joTTidVQapNZ7ccnd31kgan3K9C2dzWmXTNPmX6rcpcMj3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vnvrv8mz7FvBVFs2M7qRm8s7QKWNZqpbnPk5QqsfkV92iyfjSCQwW6h1d5R3a3bhJ9LzTsookDYPaWdE6zC8jCh",
  "key1": "2hNAWvCnA2nG6n2E5SPMPuFkdbb4BADpvpgBdRnvAGM2rPAVS36zdxojANvSy2VyC5Vhoo7HRm7Q8h7fPc71Cwxy",
  "key2": "5VpVZegttgBgXCmQVxhF2hKWqLhgEuAADqerqwHYkAhQE8CKttYkGwMfX6KvqfQUown4ZYLe7DqUgBg7wqTb3cUp",
  "key3": "2pf9HkbJQLXUntk4mLPu7xGbLz3JPFrLUe1Xec7gwFF9Ri1mnfBfRh8uEfgtQCGFFFZW6CHXGsSqhQP2VxJWBxes",
  "key4": "4JJEy7vW37BEKbJ8p4XZr84W8CBrXEgBvbyeMGPMi5HaSPZuKwLV4Jm7QrKvndeCPuwLVpkyhTqgEKpNTanPV4nZ",
  "key5": "3bK6C3iD7XgSHe9W7EpNqzbxcdJcm1DW7Rea14xrgVRpRpvwPqWNjD3HCz151voNeZnTR2AcUWTNdCQZFLYeX8i7",
  "key6": "5GpZRj5PhX2kzA7d6B6PBbU89ihCYV2RMa4H29MNSq4z69PuQWSTyQF4JRWbbfmqeS6NCEhSFiZTAD23xssu8URS",
  "key7": "5SF7pt1Xm5t39mYMTDHZJ8ojPTN6RgxSfyFypFJDom9cdNGC5mfjVRhsf6sdcEjr5Pb8QiBoJHTr1KLRmQjgR2Vc",
  "key8": "4fBKaajgyYT8XK9vY9K8Q3c5QmyXmDQFUhMedSmvjfj3yLvswwjXSy5pZWrisf3RSNNonuQFdyNb7ePhLKeLyZ7Q",
  "key9": "whfk56NhFddbGYaQZrcimBwdur2vP7V1ubevHjGKav2zcw8T59jS56r4pnh2P8XLXpPhk4LMRqzF84RFgtqLSEY",
  "key10": "2TUEgaa2XWTU1eSxUxeDZRfsb7kMWu3dQwitAyeiWYLmGPuN6wSLembFWgHvLDA6oi3kkcEKBaebhxDFGJryKQPR",
  "key11": "5rJZPN5wzAJ9P9BgaNKXymHUWPiYcuvXKdefU4vF8UWVuw59woEKXDvNpexw6estFDFjxihG8Wstc7k5NCPbK5v9",
  "key12": "3iMcrzGqvYjH6roBT5UppraYtmrtYBnQpQwkwUVGkv9koh8KZAaJXxJFJXmrYrLjv8Y6YBNM267mNMKMwJgN4BSh",
  "key13": "2h5XC8t8Q3E3rfZ88SNR8EyD58NwgVv8zmdTT5xCyug8u66zZWRVKfhNGrGTi5ZjAhQ8YGwMPj7fJPA2n4gqnXoz",
  "key14": "5mdWS6b6sF93FCzw7n3csv9DCSjkafSWRiZMjXxW6brSEy6kTYvvM5UnwzmdLF1VpasiL2YrY4uURjWihUsYvnVA",
  "key15": "2RJZoKrZnVZip2CTFYFZEc4D2aVGQgDCwyYSFMXE3iAQugG7dhZkDCP5wGQuSa2pfCjXaULwJWSWJHg3JekHfioZ",
  "key16": "22wKDjT3A9yYS6KrH4oVQYr54FFddk44PJXYm4ubxz3E4i2qZzPpDD2HwtgW9kPkpL9EgVQqUaMRFnUrkNfLaWt1",
  "key17": "2PQQe4Ns3YwJHykhhbP7z8oPbWditJSTQrXy8nTXJ1sjmoNptY54uos2Pe5J3heyJqxnFRqLswGJh8kPjmCrpH7f",
  "key18": "65Qg8tngMhLYdPf7tSFVZwc87wWPvYgKeso4m6BGj3cZ6tZxBuc36wcQLBZqPYRX3DpBVFUCZZ5WWqxgNTi51V4f",
  "key19": "5nQnxAm2fs4BG8S2hfMH6mFrU3whLnwtEg3GZWg9odiCetwZgt9a1qamebHX4uJAVQQsRzrowezFysYdntgeBoXw",
  "key20": "2Bi67bAN7xgHiU9SdzdC1aNzrpGZw2u7b78fYEsGHRrgUutWhToqrjgHJV242BGrd26UuUuBxaietnhKAGhv4hG6",
  "key21": "2aecHgi5jmmCbDjB1YBCDAtBNZ3BqmfFpCLZptWpewMZt7vi2PtdBit4Ct1Tghnxtcc7thECSUbdw3v6UBbUNPFf",
  "key22": "4ZrGiKBz8WzmhQA7YDcXXkDUcuKJZNXn4CuvD2BFHa8U6eENpUv8mWbJVhdUxfStLcqp8bKezioCGpERNZdMi56q",
  "key23": "38bJUtGY3zoBdinXqY98oPghGunErSv9GKG8JTNjpx2Hb1FsLZ1SKd4CB7YV2q8GgdyLavg3qvPr99mSZjAbxwym",
  "key24": "3BMU8nPrZfyNohkUiepoZ1G1yvXwN1EUZiwkiBTs6ksBDGYbhDAT5PkbhjM7Jb8u613JpeTGcrPB1YRgbt97S4zn",
  "key25": "2cygnLohrsZP2RtLsVXENJfY5eRU3s7jAcW3g1RUxyWKugMvtSMyEmeKBGGrekR4daoKSmceua1E4Q1gxgbShTP9",
  "key26": "3RGewxPn5pAy7bqt7gMKLCxttAhYRspmur5EuHNUo3ktNLsQN6rK3runrHwGwdwhtCZDML3UZ7UpPnZRL12WUXXD",
  "key27": "4rpQasMMP5HqUZhAffay8Hr4XbRCy4RNQmk3MgoKLMuT9x5VLjh1oZSs7LbXbzNv3dpvxbB4QBVG3SVEENHh4x8C",
  "key28": "2WNHW3cXczm27oPebPAQwpk9HyR3MN4VuewX7iSYSppB6L2RaxJEStqMkXhBcLusWxdk3XREzvHQ9DT7jm2X858a",
  "key29": "4wRnbzsrp1z1zxF31HY8guYN7rrWiYrgJs9M8brhtVFUBZartmMrMQoZ5Av8sHHYq54CArqGMC1ETmXzo7YXvB2G",
  "key30": "2mgRZRntuzXH4usvsg7R5jiC9Fdp7WJDHv7cbHpf7ZAP8hPdvhtZwYzK5JceCDpvm2VTJHnqgSHfQCfkmVQxzkik",
  "key31": "593M1oETYpfd2KqX67xYFvjPuzqxTVUqvjPYBJpdEtCGCVQcF38D7VcWD1S5VJQTV71EQtQRjUyMJmAhZYvaLhC9",
  "key32": "5Fisqr1N7YB2j6JEeY2Wd8tfD2wXsB7D6HY7PM8YvL836kH4KokaCjGNbSKUnS3oJkx6isW7nvmyxgMbKUVkWoPx",
  "key33": "TMbnC5XRJ4ppxbwTUx8cRbRAiYXiwW5t1zffTCcV6AVZVK91S8tvRravwapxXHtYhMG2Yq83Yhi9PqpJHXBiBLE"
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
