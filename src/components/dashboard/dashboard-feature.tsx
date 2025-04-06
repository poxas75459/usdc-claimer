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
    "5PJZ4cNZhrri7RE2XHYnWqajQgRnpndbx8ogvsnUGZFWH3d2VqnoEXjSutzuKm324az78f1DKdvCx4C7d4hyQct4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scMmaaSLLZpzk8FFFfP5wBaR8h7mbwMW6Daytd5vEHD8eoK7qU7SZh8UZuARc1Chvih2xK6JUnG3UYwiAt69Vhi",
  "key1": "swntnsjTwFL61LQtkxkQsK5iRFQuqzvn6KZPgBhzhvz2NUueJ5zzo2GjwZV3RKHvAikvQ9dqjRs8k8V9X3ikKyQ",
  "key2": "1gPdSghG6RxjV5Pq6J3qzfYzwqV8RbBP9d3JM9C8UjEdSDr6pd2NVjrojPQeNzj5uHE7Bd8A2VtYhTkBBGSKogN",
  "key3": "5nMvinJjRARc7nkH8TE4YRyAawy6zm6LwcyjzWLiwDqUaEpYYwfjNS7Si7thGEsKALbAoeoatPW2bB8WGir38T8K",
  "key4": "oaTDXSyZdP44ASzDC9x8YckybkVLqYuTs86f1cxm5A1x6DUehbnxE7V3S1t7gp7hzU9DExwnbyDMwY2sApEsTRv",
  "key5": "4MLUuQvMQtcC9EgWVku9yhPRzCrbYioNrsGTqYfFaXNmw1Bmkpt3z5tJRe3dDtHYUxDkZoD6PSMSnm2WE1zsa5UE",
  "key6": "45zSsuXcUoZCCC29RsvGt7yugf9x8ptsjrQ1sA14tiMTm2AFWm2Vw6MkG7a4oqG8zyQ6tDqujRH9ye8Pv4u88PT",
  "key7": "uyjcsDpxJ2ch1wUg7js7Bhncc742HWYwx3XZGtmRHiGeonnxcW8NAoMXma6RnBJVq8Rkq21Z6FG2uqXrRg3mRDu",
  "key8": "4rz8sd1cBjePuC5KxZcX9mdTgEZo47R1WxFCvszP7bWk5UVUzfJXq8twVz9DXEzDTe66Rx9BGAohK2wCuFzm1L35",
  "key9": "3aoUg5t34BtnvT42CoTWCxM4optcjHtJq1zHZZ4LFL8CFLJQvAscT2rqwnrSJbfTWjA3dzi7oTgDkQu5M2qipJPR",
  "key10": "624yaUTajFqZYwZKnvjGL7KtRrE2GYoCXBGyteYkTpzcPssyizujH253894Jyp1ZKQMBczjof3zTeuvQYfSXNhY1",
  "key11": "26kQrQHwRHiTebvh6ZqvFWVdKFTv7JCC9uS5C6TRBjPU94cZfxWEiZQYnUBHqkMvSCkEGNTjqXQq648Fq2pfH2PX",
  "key12": "2WxS84ow6gmpuoCfaaiLBpjteBGcg5R16F7LxAmrC7KURMvWiLQWu3ydxRMriVt9GxrvdhL9Bqe23hJE91A6WK6X",
  "key13": "35ZBK176VzLDAkNm5uzSwgXRP11KzBA2aBAcNYgvwZh6BosKEytYVZnnNvSXDXptozTaXxrGABpZQg5vYCCfhuMd",
  "key14": "5P2kChQmxaQooBLKchKVss6aK2rWz7bWui35eVTNFzvGtrUnT1UEiP2YKmDvpBdCkxeQL5EXzKDM52pnRsWPWBU3",
  "key15": "3USUfsa7aPsMZkYDisMTZn6DiobbJmm7TrRU3gZGMkviDaYdPGZS5XLgGGeHbMNvMrikquti4FB6Ps8qd9rfiH43",
  "key16": "3idUE1MZu6mSj7K8xFVxabCHf9rdoBXpoZMnT19pBHPCjNjG1MRNivSSpkEwVupPvubHAY2w6zKHgxxP6Cn96nm9",
  "key17": "4jSmhoWj1XLKDjZubAKgtikvoFzVtisgjYNpcdnhL5NbsFyduLirmTwJakYmUrorAnvCXfeSCXGtxqKxr282seRM",
  "key18": "478u5SjEA8PSjTdTHQX2iRWYZy4N16rm3nnhUKnvD8HvbHxghjhqo6kUAszbHpoTdMB9qxpAYpnxwQHuJshEZeW8",
  "key19": "Ck4VanaGjbiCDE8UJyEAxUDFKPwbzFKYwVqTRGGPpabhpu3nd4bsmcT85ip6oRFUe7vMddxVuJVtnBffYUL2zwc",
  "key20": "5AFct284Vvjm7CpzsyDsP1booUj47XMx8aKA36gGcfhrEBekyRDuaYwxPHsHAXRSJgUZhGrEUjdh7GYpoEvnEosk",
  "key21": "3VNkcvm4krpwZFrAqCGQr7Vv2vTFpyygTdUP3DRHe3QT7PG2mYNbx34UoF3kXMY4gCfqn4uLnryAkyuPree5WsFx",
  "key22": "4BTXtT8dbeLVEZVr2D1Nkhj8qeFDioXYJtEuNtxVxLu9HJFMTFfjDUydyiKcG8pFqyA7PWDXmtzW9wiKiQRFqjxb",
  "key23": "3FQX7uCnEP9CTrPsiVyoAHr23FxZh4xEFABvfFr1dqk9iftiGJgsmw5C2d9cFQexypJtP5DvZw3wEDTtxJWYSE7P",
  "key24": "5pixKy2UgdQ5cKVHZ4wd6p8W6jqGPHxB6xXijgAwanX62U5vPYdqz3K6UJFeqJFHWRLVckW1JGdZpmQ1gnGCvadH",
  "key25": "4GBYeS5TTdJu1cn7sF26K2SiJqujJ6bs69R8FkeHh2V7ePRLggCJhiD9g6dYFnytCfSr3jqGFWrkptW7DfCJi5Jy",
  "key26": "qkafqu71pfAEyveNHoFV5nfdnK5bYR1iyFo5o1cQBY9VoQYzn7aERYUaYEfYucMVWfiV7g3Sb6iAuJGbEkXVvHc",
  "key27": "2dBDvJfWK2hX2tGPzw2kS6ZbyyszwkAnRkUEqn5JoGyCYzaHFaPkcFj3bS3jjSRk2j8aUrJtNbCH4F5TWKgSnL9K",
  "key28": "5AcP8kaDeoyC2orCqvJz6Y4iZZkuwPYhVDAYEW7c2sAwgDL9XTTXdFMPoxHXbchvrpbZnp1hrdR11Li9bVfoLURg",
  "key29": "2P5Ygig5Z8HsPjCvUE8y6tyevXpW8V1WGN4HFcQ4HFGx4NSqqdD6fghcFvitxzJQBmXXxHEKsWnkphVanquGDg9c",
  "key30": "XsgqP4zcrjKngssXfjUsKJadC6oAURwqLNKQ2Rgvs967emku1CBSbbYjJiKgabz6DSgGDBJeb1y519piYJHT7gx",
  "key31": "TimJpcoLo5aregksASaK7Mk5jkCwkgzkFxDWqChMaHqjz3VRYwSWDpgt3Trr1TnepHYxgD8XbS1AdN341VptonH",
  "key32": "5b6QtfW9zfR1JS9JFXQxyJnrzGD49BYKgnX3wEfGqWPW6jLEWk3eATjBkMhVY4QFV5ZR8Cf9gvtV5yRfUfCG5KcM",
  "key33": "4mztuTNZ2kWxzCCsW7v4QxdpHX3Ry6qC5T7KsqTQNtqkqzbDyvVuPRfSnCtMax7eV1UpkuK5xWtGTrju5sGgqBA1",
  "key34": "5TdH6TpgxvyDcu36nMnHLJh7e7dQKfJ9TtRbNdfVXWx5bWeUr9wKHkYWoS5kw214C2Cz8p2pSVC2HyWJeQ7s7xiR",
  "key35": "2fAqcuseJSJssqhNd8NByqKSXm7XZqmo1uEdPqT9U9hdvjMkyPMzAQP11Y2nKLKBSEGAtB65m98h8ts3cQDoK9Uz",
  "key36": "2KxVfJcNRQyg81PHUQni32fMtEG7Twcx3pdRhZmCeR5yYPmF15u6JcMHJoDCsJKkV1EzfR84B5C1PgLPNAQi4Bjz"
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
