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
    "3ukxzZhAYN5S2AAooziLTx6BSPTB8gjp1oBgDpRVoP3CkVaC4yNn7FTs7GxUrbfmtd3MxhH6a6q6hUU53ijmGGNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZChP6A3ZgZLJR8cyutfuk1L9xgFyoTfPG1hJARQsrmxEaQ4b9thauSyY4qh6pPHgUzQazfoKVfM89xfMtABrRa",
  "key1": "4Cj8fPNbBeipKpRKf34k5a8YzvVXkJzU1cppqui939WWg39yypyd5bcweDFwwUYtTxhmMe92QFNbEMR4fuEDToDd",
  "key2": "3ZkngSVGXe1vC93d435jLxapgq88FBV2J3YuGUUREQWD1BpGDUtFvtkFCuZ7hQghndQra5jbybzAhf9F77XpmRC4",
  "key3": "455GQJ8wxxPy3Gib6BkRcYXJfgFaCpmsZAJgeiYMi9QVSTSupRqXErgBqzuy9RrAYWAKU72CU9KzLs6dN1DX8jwo",
  "key4": "4dxqb7F6Q4prUNNmPVDmE8M5oYjBbEkyqsboY5CKcdE41mf59gYTUWkHZ4rwXfvxegrPrtBXgRAAhrJAE4ujia9x",
  "key5": "27vs1zwAJHpuM9dhtXL3hCZJdJa4QVinAQRcpsspRBB9yewSY419F75Mao45hqsW262QXbz5o9TQKxT4CEJAqMQF",
  "key6": "4o8UjAW5hoKsarAcxHLN4xwckFdq4RacCgXYEuSJZnHbJdaVDKXwB9NRvMXgzqWKgckvyvEpLsqmprmyv8NbJc79",
  "key7": "5ZRzrVe6XnC5WgCfpoMfrkCXHXmS6a1AU21tbYhmHXxtpPF5fEX4iYKRjtPYZfeBmsRDbRYqzA91D6Lp9k4cxSXC",
  "key8": "52bicYSDaLYKakdjKAxXchxV9oSPxqSjFMHZrCuXh3E4fgQiWumUimyToLD7VtCkjvjzcAyy5kC6DHdtiojiMBuR",
  "key9": "3BykDq6Rja2Van9TYtdTCpyn8FxFrAM8KEqGW91WDsf15uYiWvxgZUESNv9WktuW4HAqwq1CEByBjcgCNGdBGRD7",
  "key10": "4NcSeXPTGPPbzX17tWGPi9mGikmrAvR8YhkB7wzwEau4cPnV9XLK5KWFARwt2QELnMZBRYYTBLNfhToaGxhNDGz5",
  "key11": "51PWi7RqwHdZNMHm5j48dS4tD71rwYZCGLMg1wGt7btZ6EJBVfRCpe5tbAmWH1MZrWriBFWE6f8jZ5hUfjXeFFZ2",
  "key12": "5TS5cxtHH4FRkwPckxkaqrQb1B4RZ62HvJh79ATFSdjAcXzjRNQ2AiHiMXqz6htLeqBkipUKwwWvSTkcCm5xCGcM",
  "key13": "4xcpkek5DJH9GCz5k4f8p4You2njQ5jKgx7WB3yEGLtKGqpeVP8mQhLZt8PTsQegRJZqwzmufvah1ikwkyyH7peN",
  "key14": "5SQcXCzvPhAES5QvYMPVB7gca6zMfcQJMbupGgW5txLaJaDUSeQgVXGUZ8YGnrfGYxVA9vkvW2GBhB4MoS5r24jK",
  "key15": "265HJpBRkve5adJbsuNxpXY7DHzvJvBR7zHg11Rw9EfmrXgiFsuh6tf8gUPNcqqVaSMNA2VECREYC6YhjUmZQ3Ti",
  "key16": "3o9e2ZAjH1EpFwZvu729QRY7MKqv6ibjoL7JkbAvLxX6cWRQsXJXj78WzXtaivTxZZp8Z5LEo998Zp62yboatVmX",
  "key17": "5yaLdYg58Zvdv4BMJK412QfDEfJrfGWExDMLhN9MyowyRQHGFqimC6DjxtXywrKGMHYokyARm9Ed9o2ejzXoheu6",
  "key18": "37ZrKbAhWixwyudeZLcM7LjnJuWeHnd4eosA5cC7FudhmN8p362aTSJr6Gtko5DSEYnTxuaoe4Z1zWyi1kvcvkxp",
  "key19": "4KjAnyK6fR6SVgmK4xukThs6kn6erpKxs3RKmSDSFcTkjPcxeKbp3p9YhTGxe6aQyguRhLBp9RLuMAbjus8K7Vaq",
  "key20": "319XMMwRhjBoTgcHkmZHysDoWEjAbu1uUuoSuW7UfiWfqXNk7h5PbLMNXqrLRC7N2eTYEvtvRyA8FNhXsEMi35rn",
  "key21": "4ZCRRxmmJtvzEJA99LkmRsqs2GKeJScw67gYeygc4k3VuHD4RDTFZridxcXpgejB3LuwyE1LkTnEjrQPfMffm5f9",
  "key22": "49m8D8QJSkRe8FW86zbpUGnCuX5FdyGrPidWiD9Yb57p1yGEAXqYeGtRpHe4zciZf9Rkh2KZsA11cUytK4xYvsue",
  "key23": "TEG3Tv8zhZih2tCHCPxFwLkANTPqZFZF4LLAoQDQcjBFR67Rk2BhMEJbuL53s28ZdoVBUfVSkg8UpTEa1V8XDCT",
  "key24": "avPBHhgvWL6FeRjFHUKmhnzWP31bWfdfG4efxf6QeGRtMXchbhHGVqaVfRQRUACzhT6FUuzSPRc5oS7URYfmiqD",
  "key25": "9aNerKrVYcessxgUCVjFBT3nbLT2Q3zqWygB4cbN6hYt5NsnUw8VxeSQNxNjytsEKs8GESnMHNoVp1XvGhcVgwC",
  "key26": "2wgAA9xRoxSNwjt8rMsfmgD31kUMj5PXm77J89nFHThwBJXz4KhSzsWFyKjWhCpjxfeNL7GfBkksYZga4vrdhbzH",
  "key27": "Af5jTV1CHtVPRb97NrdLHNdWxd8N7FYcYyweBF7z4hbVrp75NoJxCEy9MCH7a6GiYtc7i4mN3L6pFe6PsSDcFv9",
  "key28": "3vkoG6KA1RvTK5Et5DsGpFCivQu6JNNVP5BjpCHUKAYhmqazpwi81cpyNjjoERiUy37mm2vuc6QMikMhuXdjhMF5",
  "key29": "4a5CpSud2Vc8pDqCCSUSMUDm7TkJjwFZHEgonW9Mf6aaENiLw4wXXDkE5HRRMJj5APXyRHagSrcjE54MSf1Bs9bC",
  "key30": "4sdjrQWgRHG628aX9aUvdpTei3Pe8S62HGxtyFmqwtuvyGWN8VLi6qns9riHzo4nu2Za6SHKz2wA7QMaygwd4xo5",
  "key31": "35WM8ds1LaDdK33k3vQLrPx299aF4UUUEqSWTJtGoVVAJLxqHpa9w6vj2smNnU3SmeS6Ks134tNES3RWgBE4zDHA",
  "key32": "4HRFbJapdxJnhMSdZF5ZTsXjHhMEXkbQYy6zXz5xkUVF3oiZYJefXY3NCf2sMvQxXmxq34mQuP4mkPxSgKsGCH3H",
  "key33": "3YLmDLAJ25A8nJqS8twr9B8nrBpoVE67ZMtn815qWrtkZNE6F916xPq583Kmzx8vfv1gJeVZxKf65ecQNfL2vFNY",
  "key34": "5gpAfbQfkHaqB4NftZDtqGvxG4DDQdv6X8hssVV11JdtdA9yJ9S2uMMxQ2qoZCSsETQELvMnqiaGcfqYf8rZvgaG",
  "key35": "55MgPD4PFsw5fMbyNotoyprb9A4jypAzXsewzNsVFUMMEdgZnk6wNJRkhYoAMwhzdM5Cn8gHVKYPykB5pUbMxWgV",
  "key36": "2Ur3PJk87C3RoNEDTPm9Vx2bumvUqK6Xo9rJvNQQbL2k9rrucLr71JqNBnCDzejNbLaAeiPzyDPCu9yJGbFMK1fu",
  "key37": "45QsUyHYZ1aZKfRpKHrJ5xZBztnraaKKAjYMLZKJi5Nb5MG1Y8JQ8LqSGkDJ5DvowLUsNyXFHPtvVkQHnXsFojS9",
  "key38": "3YAAc6hwKvYTZKBm6N6yB8Uy3rH7eH2u35S8e3MNzAAHjcBhUVXNc7gPQ1mC3LtZdruLfHDYU4wbN6H14dThpd3i",
  "key39": "2GFygfTyQ8bfYqtzq6eSSEt9gAejjmJsLsv5VfThGU7H4QgrMQj56eTpW9eFC344FCzehgB1AUdEaxwbkS3kLQ3F",
  "key40": "67fMWVwsLV3kSAK7Qygac4r4dYNMGuV6HDcehw4CVzZ4Jd67qpMnWAXeNR2xV7uHkVus4wrtBivrR9BrHqGRX1F9",
  "key41": "47mJc1DegKtM77Dogq8dJ2Sard3k3Gb5enDkNKmMxnE4RsV8tVBLAUSwqW3RNe8LYLGKN9Fprkziy3MxsMxwuSc2",
  "key42": "2btTtjecmEjYeNC5XR5i1vU8HLCWV4DccTFnYShcJx8P3Z4x9Fd7UNbYkpnwr6fBeQJdqtfU6LaGiCCb8TXpZ6ef",
  "key43": "4CVuVbwhvf3vKcm7q5SPv9eSop646eiQcKZVDCQigFf2Xc6WXaDYhG2SedJ1eC1GZCc5otZEaQFjtxGM9UVGH6v9",
  "key44": "CuqnnAtcPRTiq7Uk3DnskaxhSL51AhQuJ6JoymSSLFV8AzebVfj6murqmUrvkHVjka9qFKeg6keFbsU3qNJ4BFY"
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
