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
    "5eqYu6Mc4xXWaZ93jc3Abgvi7gErKnS59D8QZLTsXoEDh9F8BShyyZuhVi7rdvpYLasf7fD7GDKzDJCMjfgCi52D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PmXsS4bgbqmCJFiteer8S5nN8irPzMofeUjR62sznLbyC92iPXCM4Q32HxQNbRHQiofXNzw6uykhXumqwitKBq2",
  "key1": "5qJftxXH93GsReQhQAKkzujNwhRURe8RdZJ5sQdurWFZ9uZhEtixfaQFL3iWz2293CRW3TCR3A3BqC7Sv1YmmKRh",
  "key2": "rdvEPQ5nCpxUgmR5GqDqRXJc49FekbXqjtrNVKV793KbYWJCzaXR68rYesoqkoAtdJiHZ7WPsLei89bHSQc37Mv",
  "key3": "2JUttNfpHM5ZfynujkvxMxM6nnsKqLVMUSutBLWKhoAvKTRuQqBzHppHr1xtpibkX5rQnzSAg2UpvmNqBpR2voYg",
  "key4": "31BpQRHQD4uepZAtXUSAsL2Mv2LGpBtmu9uNDjrkW9ge9uktiKa2YUsBYFvLcgk68djdfN9aVnJnXjtBubK9JUmy",
  "key5": "38HH8GCLgLGZ6bi3YSWHz5qqwkiBDwnjSgwzR2AQorKwCPXKmz9LrCFHBG3k1wJM9r2ymLUFwQ9FRnPUy5Mai2Mq",
  "key6": "4WPcsBNcEP59ezHJqcL77QGpTuZvJCh4JHamXtR866qa1UnpFhnWxGxeYy7X3DKcgMHdLY3dAYxbnKvBPPtA4SCF",
  "key7": "3DgQF3zV8j1oi4Q9ik82WfjRJ4Eg2N9ijudMLmp8L8PKo4Crj3RRE5zQeGCX3J8uKFxZcfAJUpM5E4VTVaJY7zrb",
  "key8": "2PhkaePwfjQEfY9ummwk4HMQ1eCNH6BHEbg8Dkfu8e7A3KFoUqg5GMQMwgUDAVth5sHsVdCsW6x9PwSAoXUiUJUM",
  "key9": "2yT4gGbCQYKKCfmCzYNi7cfqKkK8g6Q58vSjZkoVF5t6gvXEgVRFEFdf1Wus7qUTdYZXaYnwD4HQhdAAtmMLE2s1",
  "key10": "3vUr97wb42S1RF85KdtYJAf9acPNyHLFkiZgSuchNAQix7cZfujf9jfXKrsRXHLHfrntEqyDiw5FgJnrDGKuoYET",
  "key11": "62zg3MpEZK1Nvn43Y9f8gBrMmW98jSw63sGFM4UZTiG5wQgdFqbiUeAaR6tomhH78zqkxWeTpFgEv8RDS2X6oknn",
  "key12": "wKXnBkucuZTQchBdVnSntCtAP4vadnQPRcXSFtEx9CGT2NcmgV2hwBg7i9GC2Ve4jBENSU4nP543XyvMxarnotw",
  "key13": "3GnWc1AANPtY8NYFZTXuAYKcUcQhMPqhVjfX6JSFcshAw7KgZo71DrmeRnCw87wUxvS2vbMKgySza36gos9BQCjr",
  "key14": "4YTSaqHgbpF5e1XPSuxYUu5k2tQDTHrWuohEty11YaX6jRNzBJnjGLULSMXGoHDzxf1eDw8WntCpLHcNZEB5S6XN",
  "key15": "3mM1gKkDzXG4XjxKWL8UraS6M5hBotMDv4gjqCPYgpLCQdQPUaHBjZEHzwyCv8LDfDqkQXDJpgSk5ZGdoazKFQ8x",
  "key16": "598gdNmsk5cHEwYEYKpiD4gDJpgf7nsvq9Dge3rBKUXGrthLttRZhKtVPiRMoq5PSRVymYyGZq21FphUi6iKBi1p",
  "key17": "5Kf5sjJSzwqaCWd6zBrZjTFFFacrbcRugTs444LCSvrrE1QBX6gB3qqmhTzbGLqpa1BpTHAaYZqj4QmrLkBHR4Se",
  "key18": "2v9giQ1KK6oQjKt3juRV9puieicAn2djhfrwY7QBX96LST958K46L2kn4pXTDCmjd6YScr93Mz3g1qbyPbdk97e4",
  "key19": "55akWBWKWCZbwwJgWLyM6WCjwguVka9ZfuExLP82LhiuYa4ZHdorQBYPEmfCD3R7rmR56DFFoLEpyivb8tDMPjJL",
  "key20": "26LteCzSye8gNwVjmXhYUYtYVcFu3G6fLYuYCEHDaAhPeuhJxFA3y2H6pjaFX6tLdwXgRJzsi6KCufVjKur8oDio",
  "key21": "2pWouinJ7unVT7uPUP7s1D9wNuX8RZevEAgj9yfq8PrVruGsMWGN8MuXwxvFC5EoaaCKNNfwpty89U3CZLksUQ83",
  "key22": "44oQFqucu8aFKGQiHnY3wS8jqWMAsNinXWA1C3H9F6Wa4owEzmSMA6tCj5aTagfuezv8rMYRLA2eoDMNCkPGEf9",
  "key23": "2QBz5PUAAk2qXkndGwbtkzENjhSAQoutJnz72CAMQa68rJyD9gVjM9GMHQ1o2N9u31UwSFufXrJBudwco2uUWQRt",
  "key24": "5jhrTZrZdRXtSZKuYST7T4k19Zfp8xnW8G5vSAmPWNDJQbi3eTj8j3fEPLTeDR4zTAZrtNeU3Qcy5nk9WT6c3u35",
  "key25": "2t9w58KBkZKRFWRSq48ZN4zqFL7Vz9XJc5qAXjdcFdfPTqsbDHkneM6jJ3fb1dRSGcJFsKDZncfQqEs36JwX9fG",
  "key26": "5WQkatUFwf6sUouCc96ZmX1XjQCA44GkFtUuyNGcq17dcMCt2wTNnMpd63TZm8m6ycxzTCJfyeYoymPAVeman33z",
  "key27": "orm9EAKGpYmfuWTUJ3HjgxrQ363xTtycJ94SESbjoApCACLU2ZpivBa8DK3amJF9QsrkJDDVVwcVWudZcw2611U",
  "key28": "4f6LmFdjnBywFhVg5D2Xndy17YiY72p6Z9hUxYT37qQSHKd7Pb1eRdpgxZ7y1FLcHU58hLFtDke36SQyFGzXAog7",
  "key29": "2MSFxKCAaD2Pze9uo8NRKtivgj9SyDsvXfAfQf7YKoVgUGfASyHU2CZUMpSbkqRRqeoSY2hJrGeeHy5yLXefx9Kd",
  "key30": "4VQJcff8V4Nd9cJiYAUTyEbSgJddfqdTsGbunyTiRPSFbGx1yAxpMHwcQFA8YcihsftvuJwKmLte7eAe5d5bb965",
  "key31": "2HKqcBPpW85y7pcYNp1a21g7Q6pRfpZ9XA3DPCzUtKkuAwiS9h6GYGERLWVtnMSJ2HvXYvXNoaZEsu31ktH9m2xf",
  "key32": "3yGZb8EPAQmPzwo5RaRn3QPqhhNKhE47Qy9LvFgKS4pA4sAVffPnSCYTAc87qmtTWw3jv311PPV1gbfuHA2Vwd29",
  "key33": "5jbEJQuyXS3iSkcJ4nVoXDgoSQjc6AtbQnQZwaDk7vbJBBAKvxJDxpashBGsm4de5WFAV1uPiMutJT9YGzzjNVW9",
  "key34": "j15eEqGLKbobi9ngxevYWMw3uutjXApkStd3Ap2TNL8Zy2JwKGCP3sQccxRh3BYHSAVNfJW3LZCXcrVVEpCSPPM",
  "key35": "57em2SfSsCwtojkJqJUHApqXwoKba7dXewcQtWuJq93Xtca41qijx8yG1hpTWhmYnWU3LUb8YDAJpcQYzEVVJm1K",
  "key36": "62tD8Rca5xAgJfk3Cvnag4hPDvRDDqnaHZDzEYmz1QY5YtgnMw5bMhFgejDiAiTAamtPRyCF351jyahKhdoNSnPH",
  "key37": "22cyN8tnY9dnbjDMBDduGB3n1fT8XyUtDpxNu6esrokfvsEkXFU59F23HTNa51TEpEJSY5Gy7TGmFDsdG5Cb2LDF",
  "key38": "4bA3wjs6VQXaRV1XqtrQMxwDA4wVGRufrxH1Pp5vkGgF3pARnuZKaPDnnZY5ReHsnLjwdznFi8TRr5MTwNUMnXJg",
  "key39": "4PwKpXQm6XnkapVfHLWT8nERXmw5bWmNhSPdgMvMJTw73mLSQHAaETPwB5FcP9at8KLwXkiyMaFCcziQ97WdnQLZ",
  "key40": "55twsbFDgAGEGd4uu1fPwpyfLvXXQtPgGbonJLb1G9R1uRyEStsMxe7cB9yPYsY7Bo2QUn6exQZ8cDkR5H4Prte3"
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
