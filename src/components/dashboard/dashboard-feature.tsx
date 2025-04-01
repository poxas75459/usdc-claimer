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
    "2fQ6oK6fN3uvYLoNiJmgRhTCWXMtYRLC8Y91EUxhuGFUYTi8uBrE1cL6EHRLGuw53PcT7d2ghuNj8cezw9aEvBcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nj5TYCY5GvMcqitccYBfDeFaDNFns1JKTvB6CXiQjAqUb58YJDHpyRYeCWvyzpvUqHNV4iTL1kiyxxJ3d7ajWEN",
  "key1": "5AWWp4sekD3TEhxTfpWKSGtyDwaWRSwFrMv6Dt9qBWirE9KyNo35Ps6RQi7NeSBxU1AkJQso5WEQerGDav86G1v1",
  "key2": "jVtKXJgCuHMGiZ7Shrwwshy5ZbxysFo1gu7VUZB8JnqiyEDALS6k4HNL69ZE4pN5jxXgLnyrv78jjBQMx3EqUVn",
  "key3": "Eh4e464q1wr5rKkPgg4WK2em5etFwFsU6T4cUCsHS9bx7E2QAJvJGxpJD8vGAohH4cbcYDtMgSbrftLbhbbfuaa",
  "key4": "5BMmmJzpJg79s6tsfTuuw6GzRJkeFWY5FGgyMT94THzjDuzWwPCp1aRUNioZ4g43S88wug944rYnB7Drf6qiAG9M",
  "key5": "44cGvq5rDSwcL3SZUmzeUfYeUNepkNpe6bugdqoBN2yXwnABXQQSQTug5wgNWbcNUNkGAwtLXBtriJ8CHJHMRUjj",
  "key6": "5XukkN42oVaEJaZmFHq9iaYHJyDJoa4TSXtv53fviUiR6e6qaxk4Tm3b9UPYyBQcYHQYimyiB5WwxsW1WrKTu9Sv",
  "key7": "5BWHwYwMWNpYBHipUo7P9kga8VAoiasxmjcFHEByxmgaSL7wrM4EUBjaRyXT9eenRhvekwTkRi3bAs6xnjLWnBzs",
  "key8": "4oQ4Ebzn9dVjox1bmuFPgGASN2kCW6qGUCXU55GWb1o2EvTaB3zFiFnbGBsbnv9QFXyMvSixngpSmuJ7PKinMDBA",
  "key9": "4HtupUYXARHjzyYi2HywqQqBYzdmuZGy9y7mCfF3WBdc441NrivtcstgpV6q1WL8S6Lpi7yDd6yG5W7jsEsvi25n",
  "key10": "4N9XXMkLye7TchbuepdbMTeujcbFjHZa9UELywJcmkpaWvWFU7iQzPjo9oBTmoFaTMpVJjR315mNXzQoT1jaHCN2",
  "key11": "2tWUwuUEUp6ysbL6e26qNi2gG2WWxs1RSM5n26uyAGrgA8fKMAc9Y676n9QgWdU8BnTcgKfs5Ku5o7qKDiaiKoPW",
  "key12": "2xgBPaVAEweuzdhuotRjy1vRvN1MJwq19QHfGGyGQtNLvZ2nBPkB62AYB8kZ7v9rQk13awZMxr7yTXxu5bg5qXDe",
  "key13": "5mSczNdCua8iJ7VGb7A3d7cCwuHo6fP4RpfwuHCGE6P7tr9fFeCVv8reTvJjJAt5gcuyY4kutPJQhWGGEo1AeGiA",
  "key14": "5Qe4y9M7fsKpoJq5eN3uo7aNxrGg91m3ofNgseJ92wj5QdDqjjafPuvaoCkR9phEVoZWRWoE68DaVyZiFMjTqqQC",
  "key15": "2QaXtd4W4o5KpQekhHUojoz89cQvQVVYsjoZFjds7oh6AcDMx16JaGJchTUStbskFFaBEnohAxAdUJKLw532kRBx",
  "key16": "wBE6PQ6Xrqbau7U8MrvDrErjMyHn2BLfruWMCZrFpeGkoo2Xxbzn7GvDVHcYD1CUc2d2mJP89faf2NYD2fgQycU",
  "key17": "bH3DQjaT1gkAg16wC5PLAMkmsF2Y7GRWYgDQTgk6gggVyYoXzduEXYtMYAT33YgmERJweBJCHRNVUQQBjkPW5hL",
  "key18": "4WZyUgfPDHbVAhrJC3AaG9mAK33n31GhvxTzBxpFLgDfuA9e7FPYjHzFkvGHjaE5R13uaDcSTrZZvesncogi9tyQ",
  "key19": "5SDc5L9G3YUiFJdXu9XjWUH2YHiuDhmys376Ry21RXVfCL3cJoAmbsYEMoe5mPxEpWWGtYFnqx7nshtM1BCgA4JH",
  "key20": "3i9MmpBgnNHYW4aMHFmvjVtrYBmVkDmAx4GifjaeKCqUzwhMxAAUy47GBtqU2htgzuoEnamHtbsXJzxJJw8pxUvx",
  "key21": "31GuzKSQpj6vG5PhKxepAFiWi52RqmCRqFzUcYE2i2RsdiFcRcnCQexLHemFi4CCxb4CZeoRpgHJ9J9psbPxFTyQ",
  "key22": "45wQWMXkDZTnfcXT1UVjae12bXHAV95GJrCurGN3T9erU1Qsr5AZGgKvNxSz68HEpUYmbQrr4orXVBewCZD8qjsN",
  "key23": "QCQHB5rBZnMhFVxbqWZMjJnAqL8zMNS4zSvgPeB9cBrrbdrqqp9padd1odygMTohxKV9FVMFb65LyXtzL6YRP3R",
  "key24": "XDz4cA9ry9ADw6DV8AL6BqagEB6shScTK7TtVvzbWrv8PK97pv13Bw7di1GAxHj5kN48TniQi9dq6repVw1rMoo",
  "key25": "7tLrxTzTMYzjk3v1PaoEMJNEMTPjh6Zco4oJN43JjNSePmxD54y3TSDo3qayZJbbSfR5VuMNwE6GKmnwDuxm3pY",
  "key26": "2yH4g5kRPNeFzAoLr52McC2fvwwXDmYHzpBapqh2kww7qPeWiEzq9FeMhzuhxs3VYUvhzpgHZd5NHF9wfKzAHXFg",
  "key27": "4guKpRwmzc4HkmzkpYi5skHsaLqScFKE1BQXjz8Sr7KJRRaFx1xQ4vh1RsgEwCKBuacpwiLnfFGDsugbsrpPthwt",
  "key28": "3VNqotRRHsTUyQb1yTz9xKzDEqCqtXEH8raMTXFtKGHK16D668YRNNBeHCbeu2vACo5Vm7BUN1nmh6amVYRmyr9G",
  "key29": "5ePEQtWJos7m37BFFvebqX5fcBJCNGuSU9mGpPUDnNBnJ9X8pAzjCn3zB7MgQfwCB2aAaaRVoHHWUwDvtcHw5cBo",
  "key30": "2jMTSfp2RzBy5N4c9q9z9V7xeaVeKeGnia3Ro5duFe5hagA2dXg86Mu47THLr8R9kwfqYydMJAqBcR3tiozcNcH3",
  "key31": "3w4pLHr9bdDNEy5hY1devA7E8M8GZDUyXuv5XVP8CVt9XW4kmM9HJQypHunQqp59EpnpX6bLdkWbT62i3QEpg7zn",
  "key32": "21hhTgdDRHFRBbL8UJDWBfxGoH1gTw6dymWUcaH9R9Es2oDJLd5A6hDJjEgQjvdpCdjF4xkechFt24puiT87fmJ6",
  "key33": "oiWatffuiwSSc8D2aNzcd1YdTpVquMYwwJ6bA6WcynPnjmtrmyaSowfhe7MJZb5VJV6CmcFToaUwKuvMgw2XMyL",
  "key34": "3pNAr2AM2bCRmDbnaBAXcBW4F29qhJ7ZjoyLMVyqFKCDCyWJ7oG6WWtdb4zsEsWsfZJ5tmDNHgzzgAcUusjF72AN",
  "key35": "4c3VdaGDVKf8CTetnr8o3Jff4wUBtGQ4n2R7wrLErevnWkz5UPb1XwVsJ79CgeM2dkDgG2Ph9vNFTUUEwaEc5CX4",
  "key36": "2FQgzmsZV6ggwhFNQjnZu7Tdn6DRbfyvcKMVbqDDLVciRSTrQwQsjmShdg6uKz8VLJndmrnhHJ38JdzUywXrPwbe",
  "key37": "48ogLgzcc13pwKFW65ji1aHWhwYj252y6UKrUJDT2x9BgYAP8TrSf7YJ2BE1LYiVmLimtLybvU7o4wgmTzSFK4rm",
  "key38": "PCubMMBn9msx5kXukvSFyqYPo77MEWn5uiYwXQnYEW9n6ZVMjzghqDAwDMb2bzH1gbBGtcsdPGnihfQJPHaD9h6",
  "key39": "bKfp3C1GBDBNKmJCFfnk3jw4zY74FLouhPrsVwaCFoZ2u1igd6B4GihL13sQtoyTwZcWU33z8tk3vGjB7YAdt6B",
  "key40": "3J3g8DwdC8VxbK134nZ3YrvYF6W8hkvYCwP5BbmCXuqSyCCSABZCynngXZaZhNh19kuycigmAw5hjSrnNbqZYX5w",
  "key41": "26fV3R7crLxRzW1HwtNtrA23ECMssQHYHxDr6T8ysqCm8kBuiaMenp5pvPr2AQYf7Zn8djudaD7qy27bd7ooTdrd",
  "key42": "ESkEab3aXgkeNqYy3gqvuNRMeYTB3deNZWmXc5SGjrcQ5XLc7pQTT2rw79apLhuRn5uNEpxU6cfns84kVGSJQe4"
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
