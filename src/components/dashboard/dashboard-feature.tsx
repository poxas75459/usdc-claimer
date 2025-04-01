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
    "3oytWAB4v2cNk5GD6G3GbJSUx17neK8wGHAdVs63XUpPErffBnVi2VJmuNKNSfpLH1vM22LrYvsPPUL4Y5RtQj3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dgrcE1hexw41oazRHppBWpNtddQ3qwuWbDELLVoZEJJubsLTGezS62p91oxi39A4dpj39yRmjy95bteRj8arf5s",
  "key1": "28Laya66hkdtBtdbCHAxxLYjoEgMAhucrVYtQ9ydBPFmm2FAPa3o8xqdMRHazqESJYM7qn5mW3XEu5Bzkg5Vpz6K",
  "key2": "3ymAyXJeJCcvgsHefBvvkXJ5UGn7rN2mLqDnaXCv4x5CayQoRVJvt7wNo1b7w1QHsc1hYKv6ex8f8tNgNsxVpRX5",
  "key3": "32SaVrutNS3iZ3rdzgefHUhcTGWy51vMnQ1KPAKYRBk2gyABqweDEBY5KsY4mC9hSMWaYJ644U4W4wNUwaR1nH2Q",
  "key4": "c5Mt82NfzMKjG9JFxi7ad6bmidJzgAjLiNZSbwRFNgViLqDZUHkurhTVz37o19aMu39HFexpKwUqJSH7iLEa5eG",
  "key5": "BuLFre7ecZaysaRJCGNk32u5ERH3vjRewE5PAGTe2NnCLsCAbBs6n1NdMvupgTwBmRG6VaU98VG4DUZsR9c5KJT",
  "key6": "5qpxUSXU6Ms5gRrGhhEi9rC3ju51FYoKuuyG4uUuTJvfaYds5zuhDTYY8o2nu9RApG6f585ugmCmuukm1bWAZMXP",
  "key7": "34mVPsbnyQChYUda2D3PPWGyD6Q7TjySaRVzGKuNyQ4s7d7v9NRycUtj4V6uUFY2RPTgoybNhvLDutfUDux6MkpZ",
  "key8": "4JykkhDngQyRjFjeK9npGVg4k5xDtqtTASHQqetUfC8rCkPYEmtWV84EPQQmR4xPkkxtRno8RzMcp1uiDbtz2XUP",
  "key9": "2mQweoZM8BSiopEPiEVTwZbxCv7xfGavE9d39c5wsPrFjTfKSuVAd1jB6A7BMu4peB3xkNmVcpZ8zSVxCM4aYNnx",
  "key10": "442Fn8mnhhvK8iRz1SNYp11pB7SN33puqSxv4kf8Z3XBytJNQa2QoR8nZM2uhV9a26Zqc2v98wL7chzqrcYv8jJr",
  "key11": "5BvWR2zPDS4yh9dBGqo1GUWLyCpKphSGgtTxy2s3bzKuhxZWVhZrRstVqmaBGFa1LMUJb2dsvokNcZKugxY7ntiS",
  "key12": "4wFHJtySGGWtrjXS49xmjt5XXDWobuUuA6hGG7kd6ex4RnoE4cXY2BSqSiUfbgRQ6ckBekhWpqMn2o71PsVEd56j",
  "key13": "37Hh2W8EbrTYzwgZoyi4dgyYuLzb8EYgzfA9bxHfVi6ZcoSzUMDsqznWbs5Lgsn8ttEnMMo3B12EqGesCZBPm4X",
  "key14": "4XDSmcXQ88ZG5x41PPrkLME5o9sXaa2mWG23zwoMuECptMfgcHNcEKutRUyJ1HJtd3tBHMT6sSj86isZ8QQ9BLD8",
  "key15": "5DCG6w8raGJ4eHnTsqJHWnmzJyV5YRZy8DZZd62gPZZN4GWcGp5ARzCrx3goFXMXc1RJuxvpYnKc67Vq7jqnUhNK",
  "key16": "4zGChpWVf7sE6WELS8sFMaaZgwKi4FbKimcKKgSs98CY2wd5wjckZJYwhKKJ4duPorPssBFkY9eJf1NLzwsyQaNF",
  "key17": "4msJkXNnkDdRTppLQdhi1m2gdVCQe2xeyvvriQbiPgaVmM8FkKaKhoQwagMWW88gKRXWkerm9d2NEDCBd1J1wzsF",
  "key18": "3tzaREW6t8tw8xy263bdkVssncC7ixeA73Z3YkEaXzVRoZhiXNa8C74Y7mXJ9i6tstnjxcibXVuzk2DaWzcYyb52",
  "key19": "RSEYpk1Qayg1w6LGpW8x6fCNo1gpqjCqU1fkR5uaKkHtPNg394SWmDmvi2ZD2hi2CnLgMGVEW5zLbktcZN9S1Bs",
  "key20": "56D2KRT26sGk8Xq5eZXUimZfJmiT7avRac2sXQQx1CUpGv9tvS4XBKHQom7KuA9YnL9EGcVnHcgkeENjcpvoxnZK",
  "key21": "1Wv1iiYEFHwDNBEsyNpQudxaLx9TKBWQsrH5GxF939FxmtxF35ms2KQ5qbzV32QCQbWaAdowjebzhtNLT5f1Jby",
  "key22": "67RsdUmsjdgEw9ugugHePzQ1wPYgZ5XVUJqugKVWbmfWpYYdLxMX81DYgKKrbEuRbpD9a3yNHAXDjTeJtJD296vQ",
  "key23": "4RxUBAtj141g8oozALEL1UhdKFYAwpAHSDsLc28HnXBsxg6QJv77QbNBx3AkGnKsajRQWfMmN9aPucLM1anLmAu1",
  "key24": "3exRYxEUAiz8Mc4duD5DbqJ9AdmKKVxFSKyKXB7SU1Gq71HpyAq48pKwSc9gs1NHgBg7Pq9XhuWgQxtFGUR9xe4D",
  "key25": "2QiCxXJidPXv8QN2XT7aT1PacDPwDYTTzHXJ3PvJAjrTrwLbLqCPcvXxow289psQbx1YovC3Jw7HNYzzLXmXhns9",
  "key26": "aeAVN4FVbfchbyqjgceBeXttrdcTwP4uVQXog9i9WEN2oDqCHZaTmmKx2Zz9nYj8qaJ4HbeXtb9mYD52uxh5qp2",
  "key27": "2fpYuNpkNMctE3ok7frSZ6ghUMYmjF6ndgzxCPEg1n2NHgdFm3Ftt8zL9v7pWAmHCRcfNVf38PTfBcm92RM9ty6j",
  "key28": "EDsUHvbgyUFW9WH3i4iCGTN6Est4ugu7582roFvvMpsxt7ECxCC1D9hEWiHCmMMzSY9UQRoZGVLJRieJyPTCx1b",
  "key29": "4Qe6q3oRykG3eRMt15S7rTqXtDdWN3JSY4ewbkmanRXz4sBYF8fPWAFtxbwQdxuBP5SdREYtrMc8YMmn33Pg4Lsb",
  "key30": "dcxNGDn5vXNNBb4DuQNmCU4svDJavNXfiFrMY9pgnkJCvYYwYYqz6ngA6deYUFZRkgmowhWMJb67whB9jkRRo7E",
  "key31": "64SDHVBXXP6VdFk7RrES5my4GLbj7Yc1JmdP668p5HKrBmN65vi5HzKfMfY6NcoZ7vMz5TRP7jPs585KxcUPq5DE",
  "key32": "552bJAwn5RJvkJgP88vJApeVSUQBjaajPCHaYTrWGbNvxWeY2M2MWG1NxeWg2RnoTXAf9Tjp9JxxdKn96yMyCTGE",
  "key33": "4TTrTtZUr8vGzR4uwEnwzC5TxDNbqskWifzgBEqgwdXeMtvdzGrqe38tu3DUEx42oCRScyrDXvbuEcg34qq769ao",
  "key34": "4UeYUp1enXnb4iVSfSH55mx4gFDk3wa16wEcwaRWDey3DFPi2ziwTcUqPK1UXpRDXA3cVrB8SSGzvGb1wejCxerN",
  "key35": "3h5br8jqoTkHB3VgF9CCriUFgJZNhN53WbWxdQs6bkY9RL6RVaBLkpgXzyPQiiFHPjqsYcke3YFfiEWm6cgKomEc",
  "key36": "3z6Xj135BDKoZ93A4xZkgPei4qfsNHPBFn5u1DU135QhYkGrdRJrXw8YxvWUqoVQaerXDFztCSenwq6Ad79GHRzR",
  "key37": "28Yt1DZaNbt5KFx2GRtVezt9cb99Jynw77HsbS99VudbmzhXe3mXzLsPrVof3cgzDB4QrddKnDnWYrwYnCJa5Caw",
  "key38": "fcqwYxKvJ7bm8DW4hPKN5U3SZ8P7RF55gr3YeVU6thoKqRALjP8NekuzWe6oHDCjXRZp67a2jQYXQFG69zgYQtY",
  "key39": "5a8Wn7eZ3ZUyrDEp8VXnXd1DNSAPV8VMRxEDVegYhwyy3EdvLmBLp1BgYkD2CzVHKttCvAekpaef8YgNWj78BwxJ",
  "key40": "4jt5zsip29q6T118UtYg3k5UncHPo8GzsC3fFcMZRS5RQny3hpzcSamPBsYr23qApxDcim55gps4VRLAUjzQyDJt",
  "key41": "WhvmCmiQc7BgkhqyWbtmgF5QW821YEZdZN6Aj3Ga2UiBxmJmHLHPFNQKuXJgxEBT9KfARusr9HrsZqRJjYwEJEW",
  "key42": "5Hw8fLokwWgCSXhS9bQRXjs8RZp2yz76ZGmsAZqKCLMZUfeGREk9QeSSEcB11LEUma9FbCe8Cq5WPL1Hawp1jBeK",
  "key43": "2wbbqPQ6seKoCXrWsiCDbUDXVGp5xkwhLfZmg2ZffWfhZtB8BfDATHBD5xfBYG8YnKiLVJxEpwNWG95jb9nYg66D",
  "key44": "5WHokgwmr86iRHZ1Lj37KP6ndy7yVe2ZhxrrYe1mXT7XB6PvVS1G1agvR2YBQKFuBeTX6nYtgzeVMkjmJ2k9PLs1",
  "key45": "4kMpYytjSm1q3ENjGmdn3PxwargbDA8yLzsb8a5ccsGEfPLMonruEWcYXnN6FjKENvamVMLWrwPxcA1W78rEdk1Q"
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
