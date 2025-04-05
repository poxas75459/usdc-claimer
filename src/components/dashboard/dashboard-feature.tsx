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
    "61oSiv63S4UkXZkUYHt6sZQgh4HG5NmsnwyAdaqECRpVYXqjFq8e3Zj4dD5KS76kF2ZtVFAh4674gb5yYtumTfjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKhHsorGTqBxN3dKLVMVts7ZUx3S6qzA7gHzCVdUtLNoRcgUMiapicoDZKpyHpWJs7cFQVX18VNHjAiAHQ6JAfv",
  "key1": "5KyYDKx9PbFLF3wZnn5zW4SwXYQ3sygFaqib1qZ5z4paFLfxkr43hNuLLSUbWdYczdjm98meSQB9FgH71CGDQWdC",
  "key2": "5vjmESCw78ia9exHTSi2FncBa4cwMx2L4M7BxKWdQtNk8NuNFqivoErkajhbJMv19TEaJEMaSSWRDd2N1tGznPtP",
  "key3": "31ALkaoUnNSJKmjLqDojfzFzD8XkoHm9qvLUEz4pfd1S8pp4Qh3h4YtmiMQgjYCHkopkFBmvuG56d9K74LhL6fxN",
  "key4": "35s3ALx9RcKonLsJ85xavCej4KTfhmvQ5e5i3MxkfMbBqSinkaditoRXANngoCEAiub442tDXwyU46xdNtLAEXu8",
  "key5": "2NoS1XU6ycLFWZwK8kXRuZ7ys2HmgzVAiWCxRGWVrAqQtMRNyfRGatGd3o1t2LE41K4c6GDUcCqDBtMwLyr3C5i1",
  "key6": "4HQzVFhJbxSDcWBd9aN7WzcZtdVrAJnjhiDWtmCSiLExs5Ugp3ahArgU83nBv4rm56TvnQYvrcgHqzrJkR3QqVZ4",
  "key7": "3iEqc59z6YQ6BfZXEcL6jq1a4gFjAzqfS9wBcCojW8PTVEmmSwYaeJMjzAScLTBH2NLLAjtj4HDXC6tU8u91vGC9",
  "key8": "2SMB5SZPapZAGiJ5jze3ymX5WZhUMpmwE6h35zqd9pUAkGKcdSY6THzYoH2QxdP7gAGRLDGVTtvNU6qec81uo9NC",
  "key9": "2Q9WiY42X3j8AGGMNA7nrAzMYc6ztS7jNA2ru9amoRuWn77Aj7VDmGxiEToqEBvP9WwTSfwC5AyjpiDWFWdq3gzi",
  "key10": "dRydQgrhsiURmg75gXUhyn4FmQ7mKpsbRLqZguuZPZm3LZoF8YGnz1eBZsPYt41V4zQMEgJfAcBMppa5CwMfarF",
  "key11": "2izr4GkcmMHbeQoKKqgZBw8Cmn9DSRAy82rshZLzdy9iAdzHNuoiFPSxU1g4Kq3YULMCAjs6JwaVX9NvbkVZ56LY",
  "key12": "4nDYRhYH8p1CMq8j546XmgZWpUvCPGrqguj49bEnPG65PthHwS4BB4sYQ4je7LUn639t2TY2iRXGtjSDGNDpzELW",
  "key13": "2nVdTzqXigjME4u4ZqV3EahQDvKchMTHAqwF4zsXuLQAqPdjNBiGHC338ZKP89SJUHQDzGxhoiP2Z6VjPpGf9xV4",
  "key14": "3LAcUgVDma1MQx2a9GBujNrLA9njbhHZi9LD4GXLq8bKhECWjwVcX2GAeduYsYiaqzBTtxftRdwS45Szw4rNjfps",
  "key15": "2ZcqAtYyyvvbdbn1xqZYBbpk8a9CGcAFUq5diAxwRHvEwEEqPcjuhomE6ihpo7LiEwwbK4GtxPDgs3E8ExxRnemG",
  "key16": "2oAq2CCcdGyXyDtgbj9z4uGHSqkD3Vx3pkkxXxDWba2miAfnxyQz23BucwhyrZuH3ujF8fk4duc7EV6jsK7LRy6w",
  "key17": "5dCxfgfsrGG9RTzhp1M7NyFWZSVcB11EtH5sCNt8viiadSfwm96wZn2Z4ShQaEwJQs3Lm2JeMeZJeydB862iEoNM",
  "key18": "37awbRHSZTTvrfZWVbVSfUaGv2qCFT7iDbfMaTs26QqKP3U3hBRZu6BPKy1esKSwmygw7ramhs78LxUR2AXNzYQC",
  "key19": "5BpZvJYweF4oVQFJdFePxH26KmNqRXwJmvPzCgUEWgUmVokGmEqbUFUdB9FuDYayjeaByUDUV7k7TQnxyA2m6wpT",
  "key20": "dsq6Sdr44gYCmBRuFcZKAf8nMaFW3KgMuqfZjLrtJXqhmqZ7f5zrxD6HCHLjqZynhsfg7yDMihRYowAShYdGZ61",
  "key21": "4wXJcdzBU8ChSr6vUfptKX51s5qfxm8Yj8yMReu8EGF7LLDChBXw7Aww75YrzCD9dT2Kj7tWJw73CEyttkK87mYd",
  "key22": "3z4cLJewhiAsNJg5K6ingtFVd1heDyV2qsP7xgbAGXz2DvfpKWEphW7rrA1FdcdpSBMEnbxS8qj2QUTsgkGckHAf",
  "key23": "4zni6o8i2GwQG4CVirGxgNv2fZoSSUMxBVwnBMZpw8JaKr2HthySyCrYCQX8Hw6vx9Rhye5BBe8N5w2tJn4v72Cs",
  "key24": "4V4uDFFWMS8xM5gBoEhfFnrFZepMkZustN9TrwGc4iWJk5RC35hxvLMQc77gG4MRe9Rbz5ZEeRVRfcxFFS8xo18M",
  "key25": "56WPDzDevHrK4nxNjmH2oJnaw4T1PSzbGyCXmvj6PApCXo27seeetNFNv2GSiW94454yBpTyS2Lke5AdjUBq3Be4",
  "key26": "5B2Sda1HMXMnfiYkyD7eafxuwefiWrXQEfNWp9rp3sefcDNffmHRFahnAbi2CKESmqMPThMQ7LdYPi4RJyaDVVXu",
  "key27": "64MTxKbh1wRGbPmvdK7jMFGVjjhTgRhXPsouSHHHix3JtP8R9SnHum2nfpqBNDnR1UP2Hq4DNwWMz87adANVgT6z",
  "key28": "5GRkPBNNUmiDNpoPsEZix1sPNbi2Nk2ZRHksSAsbhQ2Y6i8LGc6EYj86EGJFCbcHDVRRtZ1ShUcty1aLTMedAfBr",
  "key29": "2d9mo3oXtagiMKAHK7g92VPHoNwAdWGa8T9hcwhWewkJzpfCpACR8krx9yPsbV5A1AoLhwJa3EkFgxAZ3gaLEJMn",
  "key30": "2f28KuSKkTB7svTq7WQQr2XDEz8q7ySZQuuKD2oQ62hG2yWeS5uZXYoYhQs5oxvaBkBqaegB2qQg3b3RMvMJgRB2",
  "key31": "a38PpeKAYiZgcf69fQUVr2ExSw7FXc29pJNu8xob8fRqPVLkXPjvHfgSsKi2RPbKEcm2mnKPZGMib7Ar9RRVN2n",
  "key32": "4YaDBodQ3fy7YGSudAJY9UW4HYpYJSPdjppk1bNQx6UxeR1gAEzy7fpHoWgZXSq7MX19w5ZWUHMhEtfXqFBF2P64",
  "key33": "2GbLpNoBCm4McbLHUWHZkjeLSyPYWSXLnp7PPhGsZfvvDx5ir2Dsjr6ZxBM5wAdLFJMz91LznMsZNUMQi8K2HdjW",
  "key34": "5GUEmvLFMHLBFwuvvjABVe591r3YAZrgKgdZA1KP5gQx8kVukuLjC4oypD4secHhoLojFg8vnmeHhUcU74ZapdRR",
  "key35": "45rWB89hnGcwnn4DhEh3fYhbRnpJMk44UZ5z4qJb1dc43YHd6Qtg5w2ir1Bwx7fTWb3xAZLY4GK7t1wRh8JSTYJB",
  "key36": "4qyJbmfYcCZZh6CZuFouk3RVVTtPYyMNmrwHZUCKJoWZ7rNzc45mWDXjxkGJYdCXKag9JeUChWEXKD5vvCjp53j4",
  "key37": "55LcJGFR8fethw6ZeynNc3dZQXbee3Rj9cD1Y2GAgaBFuZQjn1m2D2MpvirQNkLCtmyykp9fYyBBwi2zHCXnLYkA",
  "key38": "4KBazgriDkMnFPV5yNBrzfNocbHezgRfRZLa9GXgZBT73f5iajLqVRpAVvpYgbr5DY9e3ux6chzSXmif7agMksus",
  "key39": "54pCaM1D7FpW8BbstjWhzeQbPsPzc8ge63GgeQ6anP7U5hDe2kpvSuhjxhggztHv1zQE63KgsQQmEGsrTZD1EJWD",
  "key40": "2f5EVTALbKrJmQ8znadgqC7R8qPfjVnaWHSpUyHf8KGSxniEGAqVhYZNmmqVWi679hnMQLTCkowP3o3HbmhLCZck",
  "key41": "pTuJQBjZ7iGYhjV1NvgQfhGA2wKDicbe2KVVAxjmnxg4xFG7Wby7rLiTH9oKWYu74Hir1A7Nq7c4Gqb6gqh7VDX",
  "key42": "3axCo9tna9rWWeX53DspY31iFyvtBb7Af4SDdyCGvoMsSuPfFtmsq1HqDBise698phimGWiQkr64MXfv3vRmKAc2",
  "key43": "2xmJnbpwEoEbDdczpoKy46qtPdsKxMyp7Zaqc3qvb9PFqtSN23Y5icNapNBvBgD1BXgmnUGeEV9EuQgzzLALDct9",
  "key44": "4xwNXJBvLaeN3WnGeZGqEoVg6oN715zyMnykQXwoD7Jnf1Fqest58BBk93WQyxHatgR8LuudQ6xttXxQNd3kfMCt",
  "key45": "5PYVCdSekWq38pPkAmVAXmxXUwcBqpxxDs4f9dwKKWHQY9FNsioSP9gWMuamH45qWwpCWLLzeryCH77ejgj1vyr8"
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
