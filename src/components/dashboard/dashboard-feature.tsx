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
    "3iQBJXS8kzXyMbLTL2Q9MsQmJKDEEGMnEW4hTQpyh2Hetn174FgtR2cAFwX5u46N2xNNQJMSAsL7X2RBQm3vE4bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFzoY9hHgr2a1tdweJZfrcSMWxoh56PWHvGr38phSS7BDQBYpQVdgnXzJ9WHXosWxZm6DS77QSbEsLNc82Zmfr8",
  "key1": "3fMbkrxX2aQ8PzXehjCUVXwmDyKXtpJdztz211o12LYUDCaEiwee9p5J9Nei6Xs1rn1jA5Kcj9F4jvzLSbAzwM64",
  "key2": "3si94XHc8TEEc1gvCN1oPwkCnHq9NVhx4ZX3JxFzvTe6YrwDajjYP6qSQKnmKeLb8Wn71wsUWHxCotKt4bMJE9BQ",
  "key3": "p66APSVa5A8muPRuf81ikCVwcpja6eV7d79WdH3k8swvijzhjzUMXnj46rG9QQYDXBSbv9F6G4TAtnbRRJQuDzJ",
  "key4": "4bMNp224EM1xucQi4Ct9hLra7iM5KFq6Mc5Y8DV1KGvME1qXseDq9Kf5gG2y8RDsqmNQFzZeXLBXsAwfLg2C3hGH",
  "key5": "3tmdQvVMv12w3haMfyAet6GA2UNxggaE7W5TQwikr8mKgUiovbeVFnbVZNXgXMQFZie6fdnKSYMLWs6J5bWBCjSK",
  "key6": "9MBnYP4KEmf6mYBGiMU1Xjf5Rd5uKcKr2mmaMQF1wTCjrPbzqY3TQPCJQmTT8f8nd9C8ZH9Kct2afkJoLzBAekg",
  "key7": "3KcHg62pBVx3WDD9myv48azwhNq8WK9R25AFoT4LQdUzwtErZXc6uhogFrPRLL6fnK7MjxZHzm1DkvoLe9xaeF4v",
  "key8": "31uNZB61LPVsXDwapu6jY7TR1BVeaGg3kLg4g25NGkvsoiJ44o8t46MAYLj8b8cF5hxcpP4GReLqkW7RqpgUdwQB",
  "key9": "55WC8xt7Zvay5BVoAf5jy7PYWUQxJzoL6ky5fgi9wPz1g3waGRALTYHEhgyjVJcHrYDFY8QAeZHRrfsRKowGnhSM",
  "key10": "5x4nzvSpApXnSnTdsJ3zB8Xp7KER6b7BwtPNcoSMrX4jLuVPMYwo4dBQbETpoHB4CneFfGQeE1kq4CEcNQFWagSX",
  "key11": "6aebibBmzjKpDDB2ZDibjiuBk7vhGqfitUp9Qhuf9LDhBFhSra5oweTtBPkPdXesGnUiqCBcUycuJJNE2XvFpz5",
  "key12": "5kg7UDs5pwMN7NrR2k1DXSQUV9EBVphEFWrHJvqVhCkyT7uya9H6fKThP4i3mv1RUsbvTRaQwovRXmxMattpc2H4",
  "key13": "xG6AxcztocVh8JivnWZEE2FTM1BNwK1ERzLRfs3gGV5CrrWm7wNG4Wovt1zL3cvM3eawgNWsLkLWcBAYFvkSWLJ",
  "key14": "5ByfYFAxykCL56zN39EuhtHidxn6qSw3NkMknJTMhEdJKWLEGUV4YZsQtFWBJMEN2xFJgMmikNwarbXEDXNXHeUJ",
  "key15": "5a2JReJ3RRe2V9ZyctLqiKTiZgXwZqR2RFk5B6ZhcEK8uFvS47Cy242wGf5eLbTpj6oM1UWxbyeiZu9uDpuXeSvE",
  "key16": "dBprqvZsD1xe8VdU2431cV238T96AGUbKBhNkqpuuXWYEKkrMQnieVt7w35bRFGU75rJ57bymtFhxskRzywSaMT",
  "key17": "46i5F8WS9acaqFMtUkU5aF4vDDRg32BW8UGSu92VpR3JsQC5nSxxUNJrKLo4uRLFpwK8jxCgkoQqNxsTqvy4LuZF",
  "key18": "34UBhpGevh7za1kP9QSBWSbqEUGke8ZQvHWJenxNjSDqeQjxZCesUjaqSo3b1hgsp9buTGgEtsi74zNW2uACfbtD",
  "key19": "2CDL1TF6tRuB7izHKiPGYFqyZwJppnTdsjZRdVp8BPTraG4vRuBPbX5qW2n6A9mFfdchoXNjzhH3m2eU2ARpzWTn",
  "key20": "5LcyprnPz4ktAQyaY7xAs9rKLuhKTYZpMp3u7pd3Tok7Vo7nFQL8fhrSLC2zwJHqvdQY1naBMM76riGJ7ssCFgwq",
  "key21": "zHVA9QvATuUi3y4aRLQt6GS83JwwuuLYrLjK9mTZmd85f76VJtgmcRd1A9bKS26RTJjBxDAwqu8G4FprVoVMQzk",
  "key22": "5uZk7LJHgRf2EEHsgRthVJNoxwdGBkLHWU3QY1r1hMB3JpSK84ChMZp7V62caJDvkv8sxqm5AQVM2xcX7Pitd1xa",
  "key23": "4WLqsQgbPYzNZVuGqFGq224c3qPz1oixNpso2BP671u9RQoAG9w48pmfjK6TSdxhD4kJqcGUKtnqv1yFBB7C2zz4",
  "key24": "hJxTwUDa1sEbFKPqQpyt4Nc3Jh57yAka3kAvFdkFitF7b7nvPfjJKKgJtrYMAa2drhgtqEAFKvrae6hWsqAnpdb",
  "key25": "5Fb9vsqgTihSAEhM2Bq4qJhaoxuv7MW6L23kKPj9FGrT2YBBEQu6uej6B2kkwCWpPFQRMNpx1DDW2MnDGz2LD8Lh",
  "key26": "5NPK8xv2YU5GChPjcrQ88wbxxx142iScqkHmzDmCfMSsYQjmUvLNAoFQWQgkxJifprtLwfLcQFy718B9xf5uHqLF",
  "key27": "2ZFqajTGQHQHotNmmKzP8sKmAAh8ekboEzGzjVAqvSJautdHQRUdTX2SQ474qNBvqvxJvimLwmVgXf5asiabgaL",
  "key28": "2ia3xcCcoAKAhjniUom8DrhwVU5GDWahciJQ7tGGePZpKSEQeZEVqWeUFFxt71XqL9UaSuG8iAc6Pj6XYzzfJv9p",
  "key29": "5B7ntvizGrCPziNGjRBARS6jxaCN95YRPAzcx56jFFbJv3dLtxKHA5skZKteH3EQtRMkhdS4eHG3ydG2c48ke2D4",
  "key30": "4GVFWM6whH7aecAsFzvzpV94Co8RGm3P7cSVKY5TTF8ZE56USz1HKNpPj2LRbovYFyWKY2XXDhEGRwDAvVNVe8fZ",
  "key31": "4T4F6KK8Bw4pbQSy6f5TKwvpEUaTxDmtqvreD753mA7Qo9943y4Fnr64LNueR2YvKtLaqVU1a2jcnayMvPjU1iVe",
  "key32": "3kBw7k5ohMWmEJuGBYtk9hd1DJDAVcJd4rwLxXcmr7H9FkeNZKwdaeShUVS4nBQnTW39wFBcTvG1VEETDniS2V2V",
  "key33": "4vNwNUrCXXqqBt47Bw1kwBvkMhj2DYrVS3TvyXAaq8erMyZo2FUhTKxah15EJQxXwikMKAf2EKDrrS1rzrSmXfKd",
  "key34": "2tf9er1MW7YkM9zpHpP67hEL3xVPk9MbVfMj9gQFSsRR61tPteJU8Ak3u5ts36o14LW1SLwA7ZK75FEXDZW5Z45L",
  "key35": "3MwGt24eN1rGa58hQReJdWwGriPGu9DsAeMDpqCPmpumfkAoZQvupdU4UStWRCm6wcAVXcurqUJXd8ZumiTpgwvJ",
  "key36": "2E1tM2hBgfQGPPvQoN6Yg4iYf6EPeJNp943cfHimmXgJtRnvKfdK8fXa4Mh3jzkpDYUGz2LeyU2knChk1XsN9Dcf",
  "key37": "5it1zgjjcgpLPABYzzNbn7A7uE5kkcVvN53YRvZSVQ4piu4fYmgMAvhVwhv3sXXjG45vAPW3Sqq5EB5yhg5Yf5rg",
  "key38": "2cLa9ZKgtmsjyj6mdGPimsje2Wm5ALpDQvjPRevFviSxad6uvC68QMjDtjUoiEbyS6gddLYZqmMYmPKLuaZERRa1",
  "key39": "312YKyrY65ZNX3TnnZyRCjCazrwLqjZDY3PfSZk3NhDnGagtP6FJTNx8iRZe9wfmLmfsbYZbtLEjPp4g6S6LPZo3",
  "key40": "yzoicnqj2ETHtjR8AjVGWCwdvGrG2v8aPmfG7g5tUdRV3zDJtqVAFNDWGPiTWptfxQuaMHtFJdyR87yCSnSDSUy",
  "key41": "3zid8x5edbjoWSm77LnTQg2TNg1JDXzS2rw3Y5n8TQ22UAr38ET5BGVXVk5TCrjHhthxoWdNhMXguRUrsD96v1p9",
  "key42": "3L1hNHd7yCPUeAwTmEfT3QHATiKCpUgNbkKXCS74vpL7UmNjduEpTDTwqPnQut8afrLdp7jVNnh8oNWkfc7wDE8d",
  "key43": "11CcJGJFZCQosMCQeTrWrFdPTcWxXhg2hJgD1APmvV1QYgrs6Fv3oQomQSnKa2sBAAzEF8efY8LhWSUcFTVQB8N",
  "key44": "65PMKDLYq8HBRQL7ZjBLYrcSiAUTezenaJXckNRizsua4CQsrPndVfRTUJp9jV6hYRHFUoSV93EmDhucL63aNNH7"
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
