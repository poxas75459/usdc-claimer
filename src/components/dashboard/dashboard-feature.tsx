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
    "3AYLC8QcK6U41EBWrU9y1e5PvVgWHxvHZdrvxF6s1T2ektzz6uDAEEvCxTzCPAsf66aYWSeSvusX5Vc8Kp5mck5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJUgYiKopXuBvraHoiTzbHwTQxbm6PH3T3trb3aTERy4D9rDTxcmsboxs2S2TAdLDFqnxCfM1kkEL7kDutgyguy",
  "key1": "3q7t3w38gVqVJTE4vbXsQguKobao3n11ZLexA6VwwSAkfTtDa1Ds4Li32tP6KQ3QmDaFLzLpW5FsrmJ8HYKU4NPr",
  "key2": "5jke1rvjcoAyCzJPapk59MXWjQDh4kDE97duzqB6ngdYW26xR4U5Jkjxs5rfjUyBXKBsekiPiWNWZQU2jdeGULzW",
  "key3": "4Qzyj6zgtshVMRj5oCgEsSZL5Kup3SoKZi4ta8C7XyuYUcsu8QBtKEyhwYr4ziCGS1L7Lsw6Yj95F8s9gs6yqaCF",
  "key4": "2EdHYWMekjA7waCZqgKSLLmivwP1Drqnkg9oEjYZkihJfHEciibh9zH5vUbzSzhLz9LsGHCe5ogCoN9fbHiE8bES",
  "key5": "4KscQH37aEZYQ4o7c8L9RbhaFm1xmoakRBp267JkkVuBALHfh4E8YznqRAoGHFFjvhxL8MXBYXThqxwNZJGsPiyq",
  "key6": "5eTdVSwtbwj7oJg9E7ovckcw4NkHZA9kFyyqGUqitsck83g7yv9d87Hv7LN5ouHHB8EuJPmcesWBotaHVTyw2Lpy",
  "key7": "3CUQRtLAEgV4eTSV6cCxg19bKSEeciDJ8jjGssiJVtKkARukvigeJ5eEk9qx9pSK8qjDRdptXPJRqgQN4pyAvDTj",
  "key8": "5tpdf5ec9bwJEYgVAtdb7uux8Pb2XSTZxUH6dNHWMKdQVkz73zBbYuWQUsbBCDquaqp2MJJchMrxZTNP3gHoHaGD",
  "key9": "3exBxS6vzLpEivhGKjXq6fx2oMdzc3xKF73xuxjwx8YM5jNLxLs8sGCC3G65dRjVxrbiDQqc5CM1494jLjBwE83c",
  "key10": "2GvbW9KjzkCuEVyk891bA68xuVGB1qqhQG1MDNKMGefUG3LnXkZZomex69oQ2DZispiWTABdGLJyB9N1rfTsFdRc",
  "key11": "2tp4ZmtQT8rqcJHby4NVmxyxNT5yrpTJ29eHr8dy1s8s3JxuZNuzqiVCkjZW8Rnap5Ujd21S4W1b6J34rTJ9ihuK",
  "key12": "5RYMuUgsrbze5RedRXnEu4FpvkMz8bkMLotySrf7pX1nqeW8BQASiJwM55Wf3ydr2YxiPNERaabZ9NqvubhMJJ3k",
  "key13": "4wPUGAZeb3q9j8cD1nbcq92UKUGBgWxzfeL4SdsCZyjNr8a9qnkX1ghmc6zL1xt2WJ1CdZLBf2zWtjLATSBExoi3",
  "key14": "28fsBQNeaN1NW22ZFJqHvqLxaLrdugmxZ1CDpnXXai2sSZHHkiKPbBFmo8jnAioJJkAPyCHMwfkgGmrCFhfEaTkV",
  "key15": "3HzYkiw15zAT2HtvZzN24GYCynK95qyn3cJESWDjeYkfC8DFxpQfeyEHkdr143ySmhNagPQSEje8TtXiuCj3NuuU",
  "key16": "3P7gzGF8Bi5CK4hj1C2mdgcXhH5BCj2EcwXNh4YpNhZGw6e7QxtN3XcqYauapa63sm8KZC1vFciazjyik968QiiP",
  "key17": "PDnEKPu9NCz3ZwR9qpsdYeTucRd6zGZtVB87ANSd2wE7bPQhUqt6JiwBXN3DEHzGBeWrHS9E6W5jwAX9a3YLpXz",
  "key18": "2C44T33NakSDNvaaoUAF9NRCR5Buz6xXSA1CR9zdMU6jpdeyB7iDF3hhe64TvBaichhKQwjD9p7gkZADzjA726EJ",
  "key19": "aSccwbU9K32P5xm6aJyt5XQG8N3f2HJj69QQiir6GVdnHvUDmcsHhKsfjUvGCJ2V3aM9YkgTCYinsDg2G9VwGt7",
  "key20": "225m9FWoWu4ScAMQCoKjm3eSwtTS8inkA9s3MrFgf7v3T83wRgPgh1aMRccCMqPGxqsFgTfWaCqYnEGYr97KUGqP",
  "key21": "3bjLtd6Tewr4dRN3yHUv4xzzMsLn7DzXLA1JBKw1eoWtiKLGGq62ewLwteRktCNzpjaqCDDhKFUzsfx1RXDjZhiD",
  "key22": "2ZLBtUJnDzLqDRBENEqK9zc4NKTPmbKAebF5V4xFBDiUk6Ku8odrkgykEHUH4uMHyzf6qJaJABHAAhVfkamGboRC",
  "key23": "5yAaG54cBqEHvbTcukoLoDxLfQUVrYJ1YeLnSTtD6L5eXq6zzDAHtTQK6APbEiz9UkXn9qu7QV5HddwPNrco1Lv4",
  "key24": "2P71FQp83Sh1mCG3g9NU44QjyKG9Ghdn1nH7szWDe5Uf7bxpVuQrYsXbMxDD389jMpXdfYw4zm5zWep3p6HAFfac",
  "key25": "67owoHBgsBtECqWasCdLJYwxQYVcqBYMtAWJn6AnfcEk6JeNDFza6SQcFPAZKdnW1cGZU6WSiU6B9HSoYVM2VdPE",
  "key26": "4iXaPTa4zedNXucMoYMoh9Sm8Br3Nv65pw5e9qs5KNAaT1kPeuTqp8naY4k3rbg1BqeghqAYKVJAFTsSzkBPTKAT",
  "key27": "4PXjQsMHinKdzbuLzSrWyTuCJ6uE9YBHL8LYen6fTcHLkJfkqsvfS1oQRKN5QGisVZ8ZpiyyBFMYJmQTHrhoN6Vm",
  "key28": "3Fj1GxnjVQ3nfRqC2LjJCRqoEuY2PxGwqPw2WsRkgvdgq37QbeVWWA9XUGUiBQcJSsScWNmEr49W2DSU6Mhi3b7Q",
  "key29": "3cZ4nYPAgHVqaQJBq2VDaahbMxXS8hAczsSwh6T7BVEMyS38nF5pkL3e2oim3xiXdCRUyamheSUVuwej7jLtbRM",
  "key30": "5LaWjkAUX8cDn4mxBk9YvtydUxCmuQqqiS5QodomTFaYv5k4oQYNKiZHx4QTSjZ2LCEKi5spk2PQTJey1V9BqtDn",
  "key31": "5r8q8tEVjruZHUSAHXejbjuFkfJSkyXGbpb1LmxAH6ZhsQ354Anry1kxRB1yiJqoGjhBFojV97MMgU5Fa3ZvpHZ6",
  "key32": "3iQafCsvy63fF5hSxs5PodnBHidTXkT6FdVH57B9UHQPNrvnqmDWovwGywHkeFX3uHCX1e1mc9ejAJUDgsbjJn6j",
  "key33": "4p2CiGPTCp8USJ1dDydc4MFUQUAV9HCUUp7csuj32ZQS9HcfQPdAQYry9M7KTbFagMp5zAdwcUxYV7t7csr9KuMF",
  "key34": "cScxXT1396UJk1iPCK9fGp5FS6CppE9oV6yBkWspdo8Ws8L8mzzjv2LDC3j7cQfSthuXTzJGjtb1FMnqntaoQoA",
  "key35": "53R3cbbtmfkVLoxytY5KZ6UUr6N2GcBALwuMF3m7JiihcSGZX3Vu53AjBtterSDtSrniHBQ7iENnkBtSQRsycvRe",
  "key36": "58DbTwWzkRozxH6njTfy4kyEN2DesKM26fFPNbSv2tDq8f16WoVtEP6n6Eq8ttmWmFSbQLxQcWviAoCUUYFCLVgR",
  "key37": "3JP9SFKCXfEcsxoVjZNwRWQVuZzMqoX7isBeEj1G8MnjmDBJLhpiucz7caSYiwdQo3DXYNo1kJZvMq6o8z8SR1HV",
  "key38": "4fZhq9NT5FZDDLdHTpno1G9tzeb5ugRgMeVckpeCFcuayBiwe8b25jiPQT6MQ7jwfcDEhRXWE2weYwvZEw4XuZd6",
  "key39": "2id9TC11hG2JNm4nyigPN52QAwmJC4WqhNyS7fSEb3A24g1UyzZVnarQ28wCC6BmBey4T4mkEwXZtQpRx4HcNnQt",
  "key40": "2kt29opkGBqVPFWbaoG8qHYzQKa96XDxDqpD6UsCTKKkHoQAPZZxHmZdP4Qp3pbQB5CcyAhTmmmNtJgRGUmaHKDf",
  "key41": "381q7DJauRd6rZnDs5BtwHCzBcvo46XCwjkArLJFG6GaYm9D2W5nD2uuF3PxJiHuaSZLSh6kV8VXm2A85BcSA2Qn",
  "key42": "2LmwSGRQezgZruuA7T8ksBkdsqTp68wwsFsddJobHDFciZgmfnNsyr7JjFqyJRxoKhpvipk6TSS8tyhcoDz8t44u",
  "key43": "3zX5SBM7hRyhQWcfHhjniaXpPuDUZ4VwVsoWu8uWuRvwxqUpGWSa9GZQbcPA2UuLDkFFnYqTJ5fed2mSehEb73sX",
  "key44": "4eB2gBmCCrBurCoFNhNnjdqkm6DJos69Q9suvCUJFjGUSfU3ABLafKFHF2gifLPL5y8sV8LWwv4bGcr5N23A4CQF",
  "key45": "3SGjxohGbcuxEk9vPeLsQnCNdfmKn3ockNDorVNpUhL4mcriX1zXMpqkiXeFCkSf3v3GvF5vJehBRAaKEdvhgx74",
  "key46": "5V9hCGidke1xbVf8MMZAG17td47qwhmkmaYvuY5Rs4vPvQQnRzLpoaFxCCifHeHCcqppgRBQqXDsiUcUy85UMQsZ",
  "key47": "XSMgbDNpooV7GYjHhp46EQZC9BS9FHE3pBPU3k6tg8HULGcn1b7NQm9roFuXZJUHsxRfff9THTHtZe6Cp9hUc8f"
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
