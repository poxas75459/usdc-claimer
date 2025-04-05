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
    "hVnJEuefYnvFw3Tg6CLbo52zjqRmkmztVeRXw8TVoZt2AtzW7ydBGAdmY2P8Et1daNVLVSDJmqNadMaXCDUuXmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57sM1n1FFciXcMkvAnoRibqnK4bV5NTt71rgm7U2FLb91Wbgon8rnq326TrDKH96nE599Epj7vofZ59hWrXNujZ7",
  "key1": "5PQrXiPqvzTaqG95SNe5DSEWCPryN7u21Egufc1urtsaMw2EDDH78cs4TpsWWK3ftZFm9aWJZ4dSUCQpghfRxVdv",
  "key2": "2E6zrcVd2CzYS9hXDgFo8cHUB7Ke28yNiPWELgY2dKLwQWPrszTx16thd9Z5XmpcmRzrfgCTmpJxKqoubqLD29iZ",
  "key3": "4nEnESYK34jpjVkGkUHtkHVvv59TyY7nZzbPitqwdx3ubPLazcwATYeUkT6zGp3dw9Mtu8yMVctbZHEkJkvvYiWf",
  "key4": "Sg5CxyeX1Zj4feygcGRFrQU1cXfH3SDfR9c6BTqpJ6VN6qqYVA3poC46FEo4scWFXtENiq3spmbT1tL3DcL1k8f",
  "key5": "WU1SWgb8UbUyxBVYKtN3PUjtgThfux2K1SsSLotihdeQVqxSi98samRyUGvpGoAkXk9R3EeYNNFnjj4d8yE7Eg6",
  "key6": "KNwvT7TycsVTqwQaKW4PA3NJAxNWDAe2wEPCvZMsxkqrBYoswszaWwTrwBhEjpNH7AeVAdDehKLu9ymXabEX35v",
  "key7": "23RbqVEezKhSK8VVZhXX7DjJFkqggWUFPezUsLSZUuJmtBD5fbmqvCY4nYktHWZAz3k1tKsnz2XS1yKUBH5Hh2AB",
  "key8": "2osXt3w9FTX6pLh5jLeBF2P8QBqWe73RGa4rXEUWHdDwwXetEW3kJcw8vvJegDyHGeBPVYKq4NjyggjJ6ohaLKNt",
  "key9": "5Z5VKbJZfifgFmQNzDkMy136twvxPvNdN5UmMRUfXwchCNLVfGWn5TnfkyUvovS1GxRQKF88iyggybMFEh1y2cDx",
  "key10": "64xYys1eNqsYaVS3AuyzRdRvhAdZwbaxcLFzGvoexpFUAuzGMH76WnDcqP7dwyhpAikTKXr6MLVHw9j7dqZsWfJE",
  "key11": "vXFq3wR9hpZudHFErUuxvt57FmAuDhuMV1G3gxkaN4crXzcx6KA5Aafd9D8NKQkFyYkgfSgGZ5FutYzwUjbzSEL",
  "key12": "384XVAAMhTzZ62A1M7pf7YSY1QiWQV94NmWnz4PNY9NDtFGEbMjBoMfbwjBKdAWfxAVpQfXTEcyhBvaXFzbQvY4c",
  "key13": "3j7JQfM6apyiYMJrp4oV7mP4dKKvrrCgZkuzhsNQTKFFb6hYV5Me6AEtC9inYSyjmtRuCoXD6SHXriFjpS9rGyE6",
  "key14": "4BcHfDbeb1NUR5d5fBjo9T7yLzULpKkkuvEf7s7MmKpp9gLh9NHucvxVGP2KymqaDLdpog4DBXpXCjBDXZAY82a4",
  "key15": "XqqQcsgmamTg7jFoHRPLCg9jz8w4pMsovtuLc79aRVxqSU6pgQE4xz2JzL1teDUsNHjcbG39Z1wsB5ZizFcjy3K",
  "key16": "M4rBbN95X8VmJphFuoegAPEorv2t3Mesp8LTwpQZNYTPX4PU8WtfVPMhFCFYAmcRFhTviQgwQ6wfcZHTEZTqVBX",
  "key17": "5SZ7EhYi6UuMf4j6mrGtGgkFdbHzEPB9454x3eWzfSmg7vERNW5tFGxNksNFPVKKumWyEq1JohR3QMJ93uke3JTJ",
  "key18": "23cmCyGFwQr8KTkCrwSgRRc6CbcTrCAZhfeXrKRFKAogsCHGtfeSogCYCNxLrVCu4PqyNbrb4KvknqyFTMHg4zGE",
  "key19": "3qNxthCGGe52tjdvU8eSXm3euJEfWfwBfoBBFRMKmcosmwiRh4RQdESReyH5zcyoi41zsn2Lixuu5vHP4FH9iuBn",
  "key20": "DmSgk3477icrzjDTKK4Sg6xAAwFy4CQaoneTgSY67oosW6NMVacdPZYf4xouoeJTw154RLa31JxnqcbF48zD5Wg",
  "key21": "2oyGkgrWjiqo6JzDU2E7S6a6dSwZkM9fjqgndeH8uJiwUeMDEQA7hZRpj2wYXYZqD58mzaQGWTvfuMrEz4YUmdFS",
  "key22": "5nDZtEtt4cLiUtdq6CuEzkCDjnYi9ytKxhzsYeKuz7TfCds3KnM51xq9bWDieYsLeKmfiJsLQSgZ9RzVmSfniMVY",
  "key23": "4NW8wgd4MwNBdhMPjFQHGZjdAuxidU8GcupUNSGRH6fDard1CyAhpUJyrwpBFNRmYrw3fw3XGVVjbkmYxCUyZjED",
  "key24": "5Rg87ENXhpnJp3ioocWGth6bjbYMgKKkkBKt9sjxzwfSZKTcM1NR7YhPHbB1udPJ6VFxqsMVDVBbhheztjJSVXr",
  "key25": "4dGEbxw7h1UUHXSU5vYXE2ub2d7hiZC9DkvRFLYtS1sQGcHtSqomLUhZWCT9F3vHncwm87VHsmvQnJksngbAphBE",
  "key26": "Mb7ZWJTjqbMPRWgghqtYNjyaR8A2wPAVdtooj4aA5CxqaY8Bkjn3va3GWSJZmKK6kS4J7ZbentJGvJN96XcN34e",
  "key27": "3WG7u4avQvHHPwQQr1VJ2ZgPZS6KvepvJ6bmS9fzAUV2BA2ouBR99CkTDVCnhiMbv9humrbB3anFEF7Kn8fjoUQT",
  "key28": "4povo9rZsHG2ucv84ihWXvm1hLHkBGjX4QKSrzXgSrMUEw2QBVV8EAVXZpExnTm8WtNceutWsF9A3n8nBzMw2Bhf",
  "key29": "ZGUuiPLWC4Ghs4DKbaepXuiMX2fNA3GCa53KTeX8CUmZfKCSdXHaL4tQZTj2BczMBXJSMayLMEvUpPkGU2putP5",
  "key30": "2Dj2xBPBxNsnRUxjGTJdtA7N9dWS9PNtbkiRGmmUVLwYSqfuQexbHaADxCDTCkVpCiwKFWRYS3QS41eiPAaQC8ui",
  "key31": "4CFZioqGhcdA1KGYJmfQeKDjbsNeKFEe3UiHNaTqBpfA8KRmBAeHtShhVTKv7zWnVfZm22jnajt44zeggE7NeV9R",
  "key32": "5aeS3aU8zUh1NHXX6zfpxN7VmDJyaCYoryHKF9xRuZJybhCK3Uzuk3JCg37SbSbJNdHLqNvwPqaT1jLVmkEHWvd6",
  "key33": "3BVr9zPm2ugMNHMugU7aWYh8kXS5AtSaPNN2Gu6svjQ7GYVtnmn5wXGg1WEYPBeU2NnZPzurJPfJxNGeVwhZ3DE9",
  "key34": "3J4f1B9qPxd9m1m36qXvJ5b4cVeSUEprFQJ9MUbWqPupPVHZo5Sj5PFZcNu4NwhiKTeFVwPbhfc4vuDW1CHqpksC",
  "key35": "66FdwCp4oHPmDweHzpH4zcuMyxtN4ZFBTwbRktqSjZNe4TAWKaRTGHKD3FCKZ5gUwvw1gxqroHBZyy1ttz17N95n",
  "key36": "5hdvYgim9XuTLt7hoHPapWk5oPAwygWkDhfXXnppsMjJEHiTVzWFegpkxjEcM9g69vx1xEQRjsZtN4auRSyKvAun",
  "key37": "52ABXpkhUThNXs1yE4czxFr5HfWMc885MbsorNoSej6zcYGEfRACqcZeGrsbFsBZ6Y5CWwKmBaRAyZRzWxDZTir2",
  "key38": "5vCvEXj4cuSnTgdbVJU5h2RZFCkXT6gUHiwXV87SmkzEmxFPTkXZWEP8pxoQrAysrona8srhphwa6jyjq7cZResa",
  "key39": "3DRkoZ8p9e22k4EGRLB3WGen6CkpRyGRupfKcqbXurprDFSjADY6Sk5wUf1pqscddt2ekN6EVMcY63tDTov1ogsq",
  "key40": "3hbjsUeKYRPVSGBhbWRwtsGKw7xgzTiL1PZHUba3hwZTJAbEPUowTMTDN2ZC7CY6PY5iwSESZ9ZT1geqjSe8Evdx",
  "key41": "5MhgxPPoTGr4MkmrpuVntw5Uxy11P731GgjFJQcrF28ZmcCRevvWyjP6Mtbc37vFkUTcWC827KkQaxkjBx3AQpFk",
  "key42": "3QxjgDEPSPUb1PSs6JSsJm2wv1eHraMfZpDmh9M2ppeXZuimjKuZFe2XKbq8WCQrk6XHbvLTnwRY6iB5YFrhrXSY",
  "key43": "3XNwF3458AU13mxvrNeCVK4LPW49v9neEi1ajLyh3xs24ZcnaY8Y9qQAsp2rQ3LoPZQbFpNjvyuLXy8yAyU4MxZj",
  "key44": "65WcuX81zKNjVVN6LLsadudpGvxAVVK8H8xbJKNf3R7vBfMD6yXUTSLhTMqnQBUD239hqYcvpyi6idcnNMg4ehTc",
  "key45": "26tVhufE2WM3JwvyPo6916QaBKXuMPwALyo7wnGh6E8ZtfTbZQHTVCCMjMNXZTVVSvWGioqfRkSCCPBgUGN5ZM19",
  "key46": "BswVu195PitFMxiHoXeJUqu9caWsutfr2r2QPNFRR9RWGNKohHEKCVVBp4v4xHUfZw68i1rRnou98oNRW1VMEkE",
  "key47": "4LbieVt9BuxWMgAeBMKxVc2bU9PQTHpgE2unMVmUi7Zrh7Ja7xKfJiyU5xYiyJWYbjLKWEYkUL9QowhZWpajxZ9L",
  "key48": "4STHscKKtjcGEGgVRuxG4uzyGduZ5CNANqMUPaRvhnpD3YkHaKw7rFoH5UMgGW7Ne3HMWSNTrTGnUNkRkv7vNtAJ",
  "key49": "gUWaiKqTyfe3VW3tV7P4dKBEmRUwZPnpJXGGFXHJFa5VUPwKMH38jUfd221Ec1SDw374S7KevMD3R88o6Y3GTFp"
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
