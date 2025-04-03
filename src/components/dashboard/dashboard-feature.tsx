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
    "QXZVhMsYDmAT3gKBtketbQwjv8eKjndCMKDMcJXYivHaYTjGDAZ6SEbNsyEdxVCUnpiVeV4ArKWugqpwnC9LpfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SjmS9TUf7rMaVkjzuevM5H3CvR84C9w6GJgDzqwJUzwwfML5YJ7a25Pvwj5BE1dWM9qjx7bTmjNZ7fZjDmqcpWK",
  "key1": "2YRhpVee5XKtChVYxSCVZisLXpNBSS3UdBWGfqoxu8xUNESYi9SesebsqaJ3547qPemo49AV3dU3YqQ1jtuMn7H3",
  "key2": "54HYLZHaPrvH2TwFJ7FVUSD5PZVVVMqZapZZgbFH6sbNtCT1xHBwcaVMev144fsXtbGmPE4fZc2GtniRX8RCiU19",
  "key3": "gm3bFCwNjFWq8TQUaVMr6eW4PQE5jByzUFsEymU1ARDy2Ei3KRwvb4mAzwxifYmwY1LAxNM8YLoXT38Lq66MSbv",
  "key4": "3pbvcYcmNd9aTZRVnupkkqg7zi7Prj3B1gz4SCKNr5ycYLedCPT4bb8UDAh5DMRXapqnBbABTZZBrg7Ebv9UMkv7",
  "key5": "e5MWBYFo8buPmPmYHxxyr9shH9Ld9HfAwUU7vqDV8KL4HkYcsdxVZeSd6auTxdJDAVoUbWmAdVXTNt3Hzg9gqNh",
  "key6": "5Pyay7ACQFvaJwnoTZr3HyGNc8NJvVwEBRi13N5d39N5vdtMwKCPYFJqBksGJ9TWSHNRsY6yobA7WmEs6rveNzNj",
  "key7": "5w7QuYDmmc8xQyQugYR1kms9jbX5GnAod65rhdw8QgrqiVgv3eTiwGmDuE9yjsin2EgG3VGqszBU2ZGGUn9kFUr5",
  "key8": "5jsjwhwMPWNUXdcBZKcgsupqgFnKbvGqzKrmTHKVQMbTEq2mMeijvmB5duWFxFafZrmbTUbqttACfjbbG5eimdM6",
  "key9": "2jEutMKANxpFAh1tKghXKmiuXwQHuAtRUunJCTULY92FEoYw1kq3vjQsf7UeiUubgTC52tFfQaDmSvwUeqFzMyuy",
  "key10": "4ZuXp54ZJWAu8jVB37HPpj9Dac8XvVCz2qB7VFVAfdzE6tcq7ZvVcuDeQ26YQsJdC55WpMDYBpaqwEcyAEzThpaQ",
  "key11": "4XBHd3JhrfjyjZwe2nhz21MejCTWAgRTpXRD9YU7r9u5dep82kwg6yr9CJ2GkgTy865xyG11KGyWzyJn4tQLHckj",
  "key12": "5RBD56RgRPJ1JdR2PNvLiW7Mbjcqhjdy6FN8ux7VCD6Yv6y7zbMsAeTkr4RLaSSxkL5P9WoYurDPtKRkcoR3RdDx",
  "key13": "5gY3p5heWjmWafSQVwaPKs549VG8wZnf7XPfTUaAccGuXZ2ibPKdTrqjP2Kifd5yQAqTt46FP2y9B9spgYZ1rvB2",
  "key14": "3rGP5LRvc3gRTnLsT6t7k2CqrkgjiAntkKGrchqwjwdoHBQ2wchxmtX6HC8ic8AEY9eidM1uCYMAP6X2y4z7PJrh",
  "key15": "64DRAv4sLGgQQ7CxnTHZSn6UsQjeKJZwepSjDfoAWZwAvoMaY983qMyp1aXLiKqsLucqpAng8RRWjnTt8s1hP6ha",
  "key16": "5DNnL8MCdrQYZpsLyYttVJRkWkfptag2tDMnp1PzXKUzTBL8Q4RVoUUzL1LZgeNVrrxxF4to4s4fYUabt2yTas18",
  "key17": "5frri89PjJmfKQGNeK5SrdeCvB31VD5RYka8RhjydSgCc8vvLVidkr4sP9viRieKoPW8zfgnALQcdgYe29txvX6z",
  "key18": "3PtmBZQpWMZXga8qPAexYk6wvCdaZ1MeMQttHejtweDMLyjFtYsdCFSezY6QK3Ej6cFu3KfAgqtd6LRZmqngvYQS",
  "key19": "4LEEk6thHBrZT4SENQmxiticn5i6WDcaeiEJkiwq4V9ewtGvvRduieNULpVyT9PNGoapafKwp4QCHc6Tar4Ffoyi",
  "key20": "3KiVzrba4YahVPnxJHvAzQUhwcq2i7CKNKCdWWG6vZ556tdseJ45VYgLpJZMqHR7QmBKxprPwndanmgG7eHVKAci",
  "key21": "5qcjDdThCRzWEc3GWokekg2kEqzaw2352yWzc6ToACfs8iCNKuFWEekMkcrKzieh7LzrY4krsNxdXFUZpPP18FBU",
  "key22": "3qMymRRVhKBW2AE3Yv6SDTfxjEKe8YBBiu1tQCJUk5ffNJ1VH4thCTrywmmFZawbZCnp6PNxFXUELBWxFLp8JFYr",
  "key23": "2PsH8dShKE53oA9QJFGkvhsiK66QkTuEWcfcGVLJsa9o5FwYHuHn81vZGLkmZhAPGyX8s5dZ6E4cAuwpcVvMUua5",
  "key24": "mNzX5YvDLqJLzrT5oroJRHxM2ucv4Ry6uNe433Rru9Bx3NQMe775RPPYReFvjRSZ4raS3AngS6HXWFue4xgb6TU",
  "key25": "bTpS7zfRbzBCXsvJEXGvFXMrEWqfpcALdM1zUc2Xf8zZEg1FxaCEKUYRP2wm8ryEo8q1xavkPr7D8xwcmoVrELW",
  "key26": "3sr77Vk3mFESd8C42kr7Mvgq9kNAUnKCp3rWzcGTuwp7qEjnN6peQAKHPBUMv2Z7kwHUip89gfkGTTarBQBYeb5g",
  "key27": "s9z3MRfPy5iijGDn27UteHLTh5eW2os1yJC7yxGgmKCPPGaavmMXggTP12o8BwA999HUfot5HFHmb7BUTKe9sBx",
  "key28": "WdpyfMypPeyJZXevzVYL5zrdALum9yRctfgYDcdvQCvxqriKNSuJQd9Kmia1EzJ8hosdWb9Cjsz9Q9LruJXxRou",
  "key29": "n6L4Lct2udGMGkJv4Ubqq5ufAV3XhW1Aus9HhQchMT95hd1NmJQxhVmW1NmG2kLWHaUsEbAEj5sqJXw3YTq3Tw3",
  "key30": "3CCnh1nFwCjbRSDWLMaWTWpqQAKarAX7543VAdd3EDBjRs53Q97ngN29hVQVUdZTfCQaPQYuadKAnPQ4mHH8T1xk",
  "key31": "5nQEDfapsovEhAzpfLs2abBF92PbbNv5HpqkjnjP4Zm26fS2aoVhF7oku8BEadRavW8oUSdM5dXTwYN7Yd5W6jYe",
  "key32": "4yhZCXe1g89Vs88dpFLRLBGhVE5VVmwJbaVz9W479EaMbcBRfb61HFWeLF7zhpaX5ZQ8vrqH1NCqGHh6mEsgR45Z",
  "key33": "5vui2gQCU64fBm6gkUvtnWNUbT3k9HY7MGAYV6F5EPMvy4Pb8oJz98i9XZ1FG7m7fSmuWVrv4oXZjyDRiS7UUrHs",
  "key34": "VG6HUcRERjJpDvu2U4utqifcLP1Hg5usGwVDwHDQSzAkrSAryJzXqVj62bd9Nd8j11QhpZfY5NwkX6GHoJnDJPk",
  "key35": "Qwwuo2sKwYsmYSz7DogQgPA5yPKS88s5YhGR16Cu9YmgR7zniSDpjk2oS4xbKjeFKHMMAejQHHmSJonH9X5DbeT",
  "key36": "4akijcVCn4QfctRWuXLKmTAdbupaJuGHMnMx85ZvypMBKnmi3N78PedC7HYX65vXUBi9swbEsgWLVK6FvAYf6HxX",
  "key37": "3qAcUs9kjCRJBKgiQyhfsstV8kMLHDf6U3FmGorP5UVf6WgMpLGnKpUoBDwzvgG7e4WDqw7L8yz6Twxi4gsEsNB3",
  "key38": "j4cVpadYCvHk9EsnhATLxssGxBroAwCo7isgqV5eyDgJJf1pTCBRAhf58TpUr2DStR4KhhxVJX5mUrYxBEBjWUH",
  "key39": "639VEQxjKQvLQadyTHSTbGXeiwwCv1L5A5V9y7tRENJ6rcvfF3PqHLZYVBAiPwECHLAVhLkHNiQCmkEuzNoTLMWM",
  "key40": "D2XnJABSH36gRShWHXfL3mE17hDNtnaShE7jGZup7cZf38GwAXXEjTWe2o8cu1HDN4HTWTDM16buKgZ7ffQH4KY",
  "key41": "3VFLepxGwbGXGm35XHftrGfC3BMXGTr2sL8h9poNtv4V9yzvp9u8NzT3awNxiFrAUyr23s5hZ1forqYfCq9qv9Be",
  "key42": "2ZQ4Hc3Gb1BxAJ3gvppZV1X6vtsxdSnNcjdy8RTkEknC7mLs7A9aoATU1f2PT1oQB49LL8oZfHZYGzkK4RTBYQyN",
  "key43": "3QgPDUZUFh7feHMzgcfMreoXzwPdLvoyezEvXJ4TsTny7GiLMWfHzdTLRazFEDQTQAgzKFmQV3ZYqrh5FnhwFgN2",
  "key44": "uUCUpEjkdEqoxRvK1AmakK1amHbUrcsKg7BgAXvUxE1nn4kbWDw1iQnRkRaFYmght2vXqJf1TiAXDmaR76a6kYd",
  "key45": "5EwsrwmGnidyoV3WCjzTYo7p8j1QYnJTSKt8yAahrYGVbvDKFAeYGTyURN7AuL7afUzVUFWhdnhuBqgkuUnakCcf",
  "key46": "4hmsTvAKBdkmpwahAR73BtExBm4caw6waGaQieuReKjnzfjELTL5Mq9qTayARBZEmtvk4AB1TBUbRV1GjZUVRHUv"
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
