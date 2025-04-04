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
    "4ZnZdo1ENwJNp3bLvxPKsdGjNrMU9vLSPEmtRAFp5aFAqbFo4QcUqHw7L2KnfoSRsMeuGWi6sdL7oNjTdoWYDMkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NH4APQ5Lh16iveEs7X2WDnKPS4gWjiwuFmeQqvH68T9yoLcWsckFoM3mdYXnfJkGVKMPkQMeS2A1i1PCncTcMxi",
  "key1": "xiC7KZjgpzTG9QBwErTAxpMtEGFZL5qGfRSLFg4AdQqqcYPciGYAEAhFULzSxXknuuSkmh3kbUZgt6VNfXuQQZz",
  "key2": "2ZuTPfc4yAwMwMD9gY17nUKA6wyhSWJrw2eKtZrqZEir2MjxYYKDWNZxqEGmTKLhJa3xSF1a2YhH9MKPFqxA71Ur",
  "key3": "t87yXtPZZoab62bDTcZaiS4sZMxcnQvBmBjmtxQ6zsUCEaHrAFsfG3EcBxXRdz7sjJmpESFMpJLRiaEgSZoGC6M",
  "key4": "3UozQDT8TkhTHHhWkzNvMPjeP2Yrz5za5rsYgC4nMSVY8F46KR1bNHkR4jymPkXJCwANUDV6G2SgXdgnVbPDvSWT",
  "key5": "4suNDD1nuVzGYPpZwHrzAQRiDJoogZycQs4UvDZbHKvpViMqTrE8rg3jnF8ZzJsnSziafoxU2vs55pXF1kVfFPzA",
  "key6": "3Q4WaEpXQjQ4GYehdhxMDWWLZ4XSF5oFnK1SwEKTZCWypMKFxqcecV3ZATM7vN8AFEznKzgBqQPJ3bPzCBZc1aiW",
  "key7": "r7HK3E36vGPeFMt9JEMAVenpk1XnH7fE3QJu58h63EmzUAPeKKQ4ankj7wMTj4DYvrbCdEvu5zSjGkVvqHdQRBJ",
  "key8": "5zg4GvcMXRaPgb2cMzFoUBm1nGHHYvPbrdR4JMvxBZfJY59BC9dbneTQEa8WS3BbuLWSMAcMDcmSxWiAkmzdUQuJ",
  "key9": "4R8NNfHFuHUkRuNyrJjaZZPe7U3cdswQhD1qAS4UfwRw7on8eNahUknmVvDkqpywwPXSEcrgUceUHBqHhXEuj3pU",
  "key10": "66jE9yGegbEZfkeJ4LihzrwuQ26LK2asByKoDS6e1871MH1sC4z8FE3yXEcZGCK4oDaUvf57S6Y9JF6CY6ah6wgr",
  "key11": "3AnSmXcuh3deNGkXr3k7tRx6gMEV1VwiHYSwowjKij9Ut7JoMJ8emSc1oaFMp5NScT9TvtD9YxRh9WHaRn1ZkZ7R",
  "key12": "5YofnzC4H3cajeF3Z9kiLu6RK7FBXqMewePZMUx949wbUd33i2RSJ8najBEdx6BujGM2t99HogWhgEfwWFVGHr4A",
  "key13": "3TXhFfgdC7CDYiZS6veGEmfTjGcWj6AkyyaHaeYS5EUkKrrL7f6MBYgdPBe2n9esKztJokk9hrSpkF6iEVZQogzY",
  "key14": "5BUrb4CwwgiTQvqAaG6KzGWBqPox2mD7P2xHFoxeBcTpPJtFZgawBSvsJhef6HqXsJaL3eKX5PQygpvbPYszr23T",
  "key15": "4BpjcAfYLPqtAXFLGnZZmY33hbbqKXkEg7ToMMyk2CcgUwJ3zhVzu15mu3pb9Mp1D8oqYvT23oa6uZGwehDKduyP",
  "key16": "2F5629qhuV6UstzwBWe5a6zLc8Yafw1BcyeKin4p2LUzfY8vmpcuyjkDpb9S21j25BuFuosk5v4QNUGHe8jmPqb",
  "key17": "4mTsX8PhgQTJJGNtvvuRR1F9ywmX1ufrNrGPXhMXC2PY9tXyBrE1Uj3Dh9W36ipkvCXH7qgdc6sLLsW989ZiVVJ8",
  "key18": "5SkKC72cjqTb5hDotG6qGoY2Fs1zHYHoQyZ1S7YRn6yjEfdL9dRpe7jT9HcDnRa29YQmR6W2cBs6s2jtbwc3K4ZG",
  "key19": "4iZaQHiSvBwPEPvGvVGxdm6Kw33zj1RrNDMQxi6q4HRNKPSxVgkQUYy6PqhooipqBr8CrjG2oDTvq7NvCmdBnQfR",
  "key20": "43cNP4AbkPEGuw66MH2LGNKD6a4m8pNWPEnpthA4hv9ykFrcmzQzyL2jBYMCBaJX4Q7CH7nqS7dgm6zx1bkz5Qod",
  "key21": "24ifTqddPZ8LwdEXsvSid7xk4uKu735MDzxmn2Ubtfrhd5dxpqGXMDiwvDr6cfH3mu1XqTVrA6iYk3X4owmBoWr8",
  "key22": "5cB5vTfnNDDm3ULvaSBRh147LpTiRpivbsrSuGqoU95JNXbsc99YiPPvUppbSV5wZJRD69HSrgHM2braHQM9Gqw9",
  "key23": "36SaNXHZQiXHCj7kAAtUZhpV1UNt7P4amrEPaePc8uozYmtGCda3YJzuqANk34deWP4MD28fZXBh1WbiFHCTCfDh",
  "key24": "3YTXWo4DmFs9D2Kp2vnacg6YNqs3a8bQNYkYoZmWRHaJc4g5Hp7AGnng4xiPMxTXp2fzQxfo242JbbyFkXDU8HUJ",
  "key25": "3iv2w9f8enxEXdWadMvK7aCk5FjqgKqGCKM5coFd9Yoz1GQRBYLwsMfybzvDx8QjQLwFTy4UeT9QBK3o19b293hn",
  "key26": "4wjLhpHzxuDksyhoxzwFmEzNRiTiFhxq2JXJh7av9WRLZPErZfdD4RSx4MnmPFZ5Xm55piQw9nbu4Z2b6HEYiDRP",
  "key27": "42Yw1hehy2rNa4v3rLMpDb2wC6dqqCL3bZecew3VbsgPexxSRGhmJbGLQnuzc7MA2PVupJeqR58gY2xfjEjHJFzu",
  "key28": "5UkPEwWMs4idNg7M8Q1VPEuaECs6X68D8c2pSqLw8FWH3ceefzjU4YkqHvrWz38P1e4jFQTRKEn58rZ3rXCxyhZB",
  "key29": "k2GybXCQfrBqQMzd8iiuVjVR5mCtWY3yrUYuPHp3m23GJn6ZsaVH4FVYxBTNz8mt7yvoMXdGfDnGtH7ZxSAJs2Y",
  "key30": "5mkFaLmkSGeErB6qkPhoYuW4ZKGguLfZRPJ41oTG8UfeXy7Zczkd3YHuNxLRmDZB4zd4PXYU91RvXocobX2bAjP3",
  "key31": "2Xysta5vkd8Le27itmMS3HT2kHL7mgFCqHyXHUBm6cCgewMK1M3tAQ9wBGZBLK2gQZK3gnzqpv5AuGxgrcbt1Vqn",
  "key32": "3jGJZEr7ty7kLQ1x8r2w8imAJBE3xE6ZDxDvzuZsn4zpW92CnzxrHuw8RtgWmjY2RxSh7Wv281F5bMT7v5FU3QCP",
  "key33": "ixkuzHhyzBh7Rd4xeWeuQcYziZZJ7oCUpkkdYLvU5iPqVfPzq6GhBwfbrfi84kGTdEqteapqPg3pvkq96CjBjDS",
  "key34": "2TvBeT1Z5G2RzQikR3c6k8CkeFJLckbgSHncpfGJF8UyETHRLyNrjYSj6rL3KotJoyE5ttVnNqtS3KPkPXnRAcQY",
  "key35": "4HzpxvWidUGYWPGKs3TuHqBLBoRxhF9my6vcekMTob2o1KDnWyzMVCq9D1yBqHjbwDepoT3kx1cSCYAy2WZgBWyG",
  "key36": "5MLSMpv88GgK3S1BfGQMir2L4MQgh3qhDb2MbAviHZnXJt34s3rEzWMVq5ivqc1dZDiwsXvjFvDCDcJHLeSuPFkT",
  "key37": "5ZPkrrCo2PbLrLfzADtbm3WP9HQN69Vf29A6iNUdWYbFNwpQSyA5EyZRAzc6pfov2uoyYnc5hpbiSztunCzsomxT",
  "key38": "38sMarS72cb3Z5pAT4yfZmKxRkC2uLftQ4JezLBg6iMavtbXzv77J7MUexPvYN9QF93rYifNc5uz5UvkAAKpFxVF",
  "key39": "rYvsBz9zHs9haiMk5SW3mrp74256bDAiEWrzvr3Gti5wqHh65KxWsCMjTKeKStAY2Xx2cD1NseiuUPf7nRmFmco",
  "key40": "geVypL8hcbZGqkFYTR2PjLLrVQsc41MqFR5G24LKX8eGFkURBxoywzzdZzC74apcYBpijPoK9PLpj9x5EbG7Aqe",
  "key41": "66GzEDvpABGYo8syuiqeMghtG7vVzEQkiEcQGpFFUp8ZbMidNRMTyrNEaVFmNenF6uJKXmThUGXrfffUz1ir8BLp",
  "key42": "61ehvQBKpm2PxuGhN4ZV6Jx9ddKfKm9fUn6rK8Ck2YqxRGemCaupFPYzFsT6JCcr2sFKsxrvYTZ41ZXRkUpF2YCC",
  "key43": "3xZqjvAGxQff6ZHTspgFaRk6LZ12qzzTWmXeQ5wbVG89iLeMwiMQ2dHiupwJipHdj1TjSf2eUxUonTfUQRUDxKJ7",
  "key44": "54bJt1zeox33VwwnKwGWHwduc5VPCxeWHRyCoE5FFJt2nUWPH7TATEUuXP8cwb8KNkXbPrzd4fLjq6C6DhG4bEZB",
  "key45": "5mWNbSUWdR2o52Ydx55ecB1NGdomtMYwdBADMj8MEMizRMaFu1JqBfYmoszuVgrURL2Ataxd1MqbpB4fHnakerqg"
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
