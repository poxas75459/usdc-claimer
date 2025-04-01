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
    "3jdgZ74ksfpPucQnjNTQCcvSPixzvtq8xMJg1jLX5yhUiUZNEVzQeVYEi4uL7xHvKHEiWpQamqdq2eTUyuU5A7QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtTyijdQYuWXaJmHJ5vbQKByTuTyaUWSk963BM6zE61ugYqBq9XZLSWzxGsmS7QwCr4Bcx8VJ65SJoPWNCULVJz",
  "key1": "2Aq3Vt9Y4db1RSy2SV1kQREBP8AgjvCGPuUaCV4nsnRu3nzm6SmcCyW2qUkYCyMhxPkbSpgN3YjyFhgCHUevWB1Q",
  "key2": "4PaGcCUsDZsVRTKQqiUzLVAqdVh6MuQW3eDTtXKwJKiDigytnNNVrqEihscn5oSQSeDAzvtLi9YZJxNnJkBZGizC",
  "key3": "4M4TFbXVQNstVxYdhhw1hddSXkmJ7t1zWJRcSWpha5wEBPQJw2xmBCvrCeEN7Zs6nm6qscsUvWXRbRRQ4TaBaZ6X",
  "key4": "5yYxcPe2eq2aiQEkU7CpcQLHXFtssa2ojNurfg8Y4zaqLXkw1mUBy6ZzV5ADMjwRQjxNyJ1ty2qx2h6S9qPGq5iQ",
  "key5": "3GhBm35f4zfsS7vDTjrrdXbNfLSsx6KvGzXYQxByX4oaeUGgaATX646GosD7b9a9V2gb3KfSp33D8Jxcuer3V7zZ",
  "key6": "2je7uZ58p5dym2oUhCPT9hpnDv2bFKVDu9jCouUvPEqBGopGVCMqhj1FXmtzsJ8YQNCNmubbZTHj52WUjtDs7p68",
  "key7": "5Xa655doo3zhZsdAuurz1tFR5aQkLpCwTN8CLkVThuARqJxkAV1TSwySFCaNmo1325yKHvCfmw8sqrrv3Zn8PgRZ",
  "key8": "5VwodX52PPokKjBbbMHNqipKRRhJq6TFhkirZf1WoS7JrpzSFgEhYAQtYXjeXHeaAGUXnfCorTCybE9mhW6Hw82v",
  "key9": "GfbVgQD7hxSPkcKFjnYsjdjczoEgTUnCBJWUQMiagGxHEH1h1GR6oWQFCuTSNsYVuyPz9HdwizGnWq7aQjFyw9i",
  "key10": "3gyRiRJu5E4JcnkGnfJxq1VSC2JU1b8dp4D21mgaRGcvXfucfQwiAPkhN5Ei14bPcbbAVf1zB7oYE9kh7EXXWeUe",
  "key11": "5NgHvdMYNiCir5VwZnA1K81ToMQNNM6bJiu2Nd8Mh4MhFJwuhNcjYfqj9t8YgYHp7Dt66HvLqc3jJT8Xw7AeF5wT",
  "key12": "BpNJVL4iXeVnz2WbmnWreBr6nwhsNaRAaDZbn7vcRfDJ32ZSrGmFvErmocmK7cxrfitRkcqc7vfGUkp5T7aPZFE",
  "key13": "66ajCLRURXtEvWvxorU52P1FAXkgjmW3xZfsTnPAWgrNQMmRi6XXejErVgT4myN7cjjktNrpcd8Zzmixp289WnwW",
  "key14": "483Wi3mjA7SjoPw7uQmion9Gde5sjKZ5AsNfxXb6MiWsJqm2vth2mEPH6TjPaLbeJ7Whr196TvmTbnU8TbwiRfSZ",
  "key15": "4xoG7ixCpDZVbhG7znsVcwfRpbQvRNvhBfAjJGv6RsYjGq7gY5HLp2LpYe23J9Ah6FMvt4FTfe8DpjfjshoyXjhc",
  "key16": "4kHnUCuLc5Z9v4LpeFBe9vwuwP9N3fAenb3DQVXRnEFT9uyEPyZ9eiVFNFnHauTA63sASkpuVJ5NbovXohRPHLJd",
  "key17": "2km8G4u2sZm4XTWS3sFdG42LDdYbq1FYcduKeWPfwRzWLi5QihpDQYTdPtYtTnkdTM6dDZTch4FrxsNCjK1fgJdE",
  "key18": "2Z5VoVnWP14AVTSfSAXRNAtMR7LHX5AK5zvB7VCq9hGtk3mHJRvKgUpemAoFydEjnMmbFVyaZrusEGFqJom2qED6",
  "key19": "EK8FJueh9BW9NEzwcJWF5GxzmK5tz6LtekV3ZoFpskiMiozH5kHG1pkJQKFsLNr69Dm1HSrAyd6qceastnFdsiD",
  "key20": "49K79u4mkUJnfayFp4Q5xUShL3TjELVq2pYt1ZFnxMitTsYwCsDuHkDvHjE68TJEZD5mApE7NquUh5EFXfNpJodB",
  "key21": "5VfVq4vtE8WbdxGomwK725BDbiGkornsxKor1FqAwYGVhNjNP6bkyCaV2XchE2GMdevR5NxPP8BUa7DtXzYj797W",
  "key22": "5HDsSQ8JQMtuqex1SyEgtaZBpyw5K8kiZA71vtnCJJM3Y25cVwYVYVNx41GrMxTdjjE2h7zPLTMrWg3yWom2pMop",
  "key23": "4KMoGrkmqPg4TZn1vFtyLr1z7DCyQ3pzMp8uFzA9bJBALqpz7BNYyDs7jHbsnzfvLvmvpEiDcnGzD9ZCU4bwWbqt",
  "key24": "pyvBqgFz33Bsur44JNKYXjcu8Gs76CqehdR5kpiKh4QrBTz27mKkrRajG5UvBfSVxBLXnWNKKrcBt8xBc8ZvwXx",
  "key25": "2N8Mv9S7EHfmBwVSkzmyRRgUYGbWZpdon9uctQjzAHLsATNv4PcnePqvF1KsNj3hWDKshDJsRrUHcKhE9GT9eFZb",
  "key26": "4UrQRENYGqQEBBfg2YXEoP4LS4KVc99CzJo8rNvD1TmLgU1SCa1e3HBEhsEGtu64NaWCiHjxzqbWBKPU3vqpw61v",
  "key27": "2FBkmskX8oiRBj2czHM2to6erue3QEcAzBbyn1gkm44sRRK2HY34R9JXeuFy4bTC6HQvXFFm4Fnnn6SwCwShWnBU",
  "key28": "4rcya4GgdkmUCUchKPchr4vVE6maHFbPocTTVTgUfMu9rrczn9cVYUiYNH8mGXg2AU5NxJediNBLUoCScrsLP5k5",
  "key29": "3xvEz9yKeS9YaeXQMcYWUq4vgqFt6KZyf2QMT64GSvunxNsKhfaSdx2jgerQjcWTZ2vy9LDBuWRNvRzQ4KKJRTXq",
  "key30": "2EyiqJBPJMJX4hyKb4Lewe6NbNybWbzfuzqP5beu1WKYXc8H8yWHWaLivg2ypHS4Kzi7CxZ3fGi1FXtbuipgYy4y",
  "key31": "4WG2EMLR8kknh1QFD1kLgbHdUFJSx7GS5WkKHgPv9Qmnuk3jey6ETd9bGfYMqABYjD3sKf3H9hmUQVZ4Q2Pxqbng",
  "key32": "5qpm29KHnECuimK6WHYpPuR8erJ9yYzXJwzEbcCSB4JBpxTHxFdBTs7YL16Ft3wsE24aNwnsQpUgYF59SxMP7QVf",
  "key33": "7zdsLfzJENN3kuKhBKa8yXoLjpSDkrxeYPdwvqsm9y83vNmMjSnMmPUeDjKmtLf6J3HLpG3kuuqAzjiDVwTryqY",
  "key34": "3B1XggxtdRcR5WXzWrVr1wMUJnP1Ky8QEuHkg2rN7aZctwnRq3syWjymCxGuJjTCSGhG9Ym7iwhgwZAVXGoykJ4g",
  "key35": "2QzvcgaSXTx586C2YuwQFARoWzF6AtfauxKsV5cFZrdRCyCK9SJSZ2Cr6aYob2FocEpnGWmsxzidNNsbXLUpC37e",
  "key36": "3MunmPNim9NptwbU5cDPd5XgHXk6wSUEZEN52YBKNqHT7wrzHxSunPAVcc9UdE1TUS4pLFejzsJ5eWX6tapFAutr"
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
