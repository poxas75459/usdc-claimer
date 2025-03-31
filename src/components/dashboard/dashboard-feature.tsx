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
    "425ntdsYuBcreZMYZ2fyZGSRghLdRonPz8YnYsPHRp2moMwbkpweRS7BVZgfXfb7jLTRXLJVMJzDgsKbgeDczBkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GddJq9QFXxgjAUnTcfhn2dd7Kr1zJZxkSQHN6LjKcu1AGugBn2sr2qMcrgDhC1EYBzVWwWUqcoSBYbWWKeM6Cb",
  "key1": "3hhXVDSkt7iaHsuybwHzHxjxiBzrcPC3ZjusKFAHLUkDeRajzv1HXSDbTrMM8Rpo69Y61Jq5zcc4Es1AvABoutqQ",
  "key2": "2iLPKMmbDUNUyMiLgs1p22WeCHasA8sVfeSD7FyUen7ozRViywPzCjdJLuhEqfNqq1aa5awFsRGTBA8bsnZWeNR2",
  "key3": "W4zWR35pVofBjKXuPBg2qPfhM2VEAV4DJJmaWCGbcy5bFZaVTq9WSBNEMEBFFW4TWkYK6TSPCAACGeWiRwDowfN",
  "key4": "5j63RmRtTz9broCdZbv2eC7DCWMY2QiqzwDr4igtYbJNyLhpYDNqMAubybDo8JJ2tX1Lj1otqkRJgh3DSqECuYSz",
  "key5": "3cZx6Lvn3mqeQ2kzRHW2a68dA32BNfUAvCa6noSgBeAjNPm8SN16N3tY68BVk5DJYfAEUrdKDNPt5tb2sydsC7oi",
  "key6": "PUDvAF4BCddvUtJhR47ZfDuhe1oz2irk9vrXFyrN3bdYUmogTPfcHFNyNwGbZK6yv2sbH5uPSBp3Gqiiz8bCwcn",
  "key7": "4qH47AisbebVfVGad6SyJ6edt9YQ9oiYuv4m8N6GESd5VbhWX1mN8iwCcWptA2yJqJ757sAT8vdTm9hxNYL9PR18",
  "key8": "5ZbkskMQNFHe2cbZag5UEEQjhDzzeNhvh4hT9pSVFzaBf6199jxBEWi4rvDw4L25zj2kPcZL27gTX3j8iMrHEdDp",
  "key9": "3uUiN3zseDBkQn88goQNfyRmGPEdKVZsTYLshU1WjEFNCrLJfF59GMtfPxyjQ1L7EZZUvfkwYARFdhNCGfdWD5oL",
  "key10": "4iqR5g9vb2VUarZZNf9hwAQSNxyM6HH9LSxf1AUdU63ZaFN3BBaDVW1uFeY7TRR5y2bRgYY1Qj1CgyXtvZ2ijSwA",
  "key11": "4cCZsNp3Yh5z9xWtR8dD2JK2LNfgdy8mntVUiAodFxU1qnam1H5vDsXxp3jmx6ziuZwoiCD4UGKeGTXF5Tpf6ZmS",
  "key12": "2kEix9Ei7wR5RYBmsSRhP35zGHYTgwudifZWJB8qxoUKk74gQaPwuqjY1hmqaa2SQe56mijgE6qQomnLjs5w5wCH",
  "key13": "3brXCBeHMRzM4w81oqLVr8P3kqx9pihPP4XzskmTEvW5XLxxNdD8mP2zt3g6S1EzbjXDG4N44GzpoArCzfxWgQaB",
  "key14": "34raAqD7xs5tuvEX1Y68PncNxv1HHL5NmoaAzyyopyk4UHHabQyUPooEKuxeCPsxXdeqn6uz2C7TSDQZoixQMLMv",
  "key15": "366X3kY9ZE9NvdqWcsgZp66eNYjuJnLgqDAT5ZDUCmThWQnYWWRpY5yG49unFSLt2DXWHa8ECZ6hP7PGf1ojASDx",
  "key16": "4cArPXMUN2PLxqaVEMwmKxqQvGJGW78Xv412LJJsWcPvdXHrExdiPywpjg3cjPan3xA85iNyTF7TZNQism6msb4t",
  "key17": "2k5RbJ1UVfoZCsdAGijj5rS4rgzTNF3x7zQpUATrTnkzLtjSYX4ymiSUr7SSD1pervR85UsafMgFmVkpTPuuoaSd",
  "key18": "5KpyTiHdzpW5MYUhpPRDPKhvsLZnzwAwvfrdf48Yz7xMi8o8BkrpsmiHr1GgYkupa4uPtS8hkgrBZoFZFvdtXQEF",
  "key19": "5v5zjwEBfbTr3WH6XMNKYmc41jMvjpCND24XQEk4DJNXe8eE6gdKtX8KmzV3tpS8BtXkxfJ6teF3wEF6cmqxaFd",
  "key20": "4LHWQqp7qQP34YkHv9w9wGfvxezgPbAHoNzEhaW3D2GqJtpByioNcUKntx9DW3WRZeJgW1Gj6ucDzDTKmtVrYMsf",
  "key21": "XJttsWfDT9zyh25Kt3eHKhK8wxxA91yiF4RX79JM9myr2fnkTF6iX8nHdZFYx6ST9CSzn9KPc7PAwycXuzojLp9",
  "key22": "3G9TcjN8Y1n6pTBBbJu5M8UgsDLrGAChG9v58RSm6U93KE2dnnoEBrA9subxMR1mTjmpJRBu3UVhG9z8aeYvXeNM",
  "key23": "5tFguAyERNu1GYdbjCNYLDoCpviQg8vNdU1aK1W7kSDkuA9SWex5fzWtHwY6157uAim14NYxSnJdHgmn5wewA9Kv",
  "key24": "2PtmxxVZwma9ay8uZUNER6jktmZw3LeEpCtYY45iMFRuJciwTvz7MZTLWHbSCJEBqQpKvMFeoPCZxmXJjM2kUmxB",
  "key25": "iySsiTQZ4xRnJrnWoUk9nYNmHq3ednQewqmo6GaRMXeyLxeB3kVfyv5FW4Vx3yu2adTZP3Bfpz8c3WHh4bHiPtC",
  "key26": "5s2CMzU7qqyFtY7sULfEQi1CdF8DZrkwwQEYhG2bJsWa7jp2i16TaiE4RLuYbHhCzTZXAuZrzEKy5UYmTQVA9vxL",
  "key27": "3MCeJH5J8zvXxgxnd19HNWf2MXac1UPw6rrdkF8EZuFRoL5wV6Q1ZRi3uJEg6i7WcyKV9AiH7sNEhMovLMJNEa7c",
  "key28": "5k7fSRCuaG8NZrJH2WpuW2Se4gqZ3NhUoMurTiigdyziH6dbeaUR7jqATAGWFAhuHPRmF7ZFMe7iPcHABsCXxwhs",
  "key29": "4LeBzkyiKp67g6fDYkpdNdipwFDn5NDVXcDXDUwhQUw4YQsr87pKcfG8A8rWSWtbraKGfCDoooCbfjw6wi6w8d7p",
  "key30": "5cQhWhMmLfebAvn3PV8S9dGGf5P7cYMWNQ3MSmuG3pkdb6VMR5b39PbGp6JrNHcKoxVmJqH1eLSUE5RpJ5HWbNf5",
  "key31": "2MzCsYqw79Adv8Hi9rmP3ikqhoGSb1w7E7ah94wCqkWLt4uRa1zBAand64U5DuXUSeL5gsbQ9Bw9iEH3LC572uSr",
  "key32": "2xt9W35eETXoG35fTP8WnMiF9XmDnV6MSrireyJiFyDMBQBKmkMbBESnek6ihku7naCU87PqviGoj2twpR4PSxEE",
  "key33": "5obRFraB8g5Wjf3bSSSm4uAsDHxikbEtRqBfNQvmsAz4WqRUGgrXZJdsYcMapdNP44JGpuXyqhw8FNTgJYTUzvA9",
  "key34": "4huFN82xm49LTeXRG167WNWapxHAGKDqV6DoNrBPzQsP2RPGvMvwjGAWojiYoBgCFLXUif5BxQiGVuKa6PpXhkZH",
  "key35": "3W4vSYcGnt9hU61sPtqz2AGZakmXiG3RY6ByhdVg36ox8sQJG9B7B8cizbyYNcDbE6kFa8bVrWX7N7Dd3vj7YHBN",
  "key36": "XzD7AHLLoGPg6rMvVX9acxuwwHDwhJVpoFyeazbeSrBSHKpATXLSLReku52w4t7QdMKDryy3En1HzHotF6MwYFy",
  "key37": "SbsjVZXJq9pD8AbmgieKPL8kDxeEyfxPjeBJvwTvuvm7M8rsMLXqFhvZy3w2tfrzYkYbTP5GafphygjZRg6sasS",
  "key38": "4jKmiwCh8AJthoR9gQsLNrQofMn2Nv9LJK2uEtSxHmtxEByaBUs9GPd29Vx2HEg5GhyTw1osZHMwAxE7ezpkEwd7"
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
