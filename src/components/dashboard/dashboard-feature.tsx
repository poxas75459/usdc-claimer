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
    "3DW26oc8bKXF2ugrax5d3MYDjHGKzNhoDDTkkujwXomeF6DFspgTVjdHpTtUS2pqEpBhJMBxYFJ7hcvJNPiVJQs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jdkTcdACSLLvg2r2qzKJ11Tg5yWchjNo1jTQw5xhHk8RwtWQtxTitSfNM7Ju8XALwdJzHhLBH6nunSxgeWgmCVn",
  "key1": "3gT7Cvc8J6znXqJM41Vmi3Y17DeJwnje9UMi6zCw4Yn93NqbdyoFs94XQQcDwcGBPgRkygFxsusS9NxLhRYEyn9N",
  "key2": "64pymJsd79SLhqytAkccRNnE64k3jbMkDr1VDARJLcDrPnXk4fTzS5eD3F2EcBaYb4GhuCHj51eA8arZq1S64mDL",
  "key3": "5BKgbRPjQofhNZsrXsK4ANrw4b1YMKVhrbaxuqsayy8svEpN3P35Zs3g8y8TEiyiJ2pPzHLw9HEoy8yoEgZEqoLb",
  "key4": "4PfYkSpZ27ZZTuo8JePfF265sUycSrXuXfFdkgjUGP7JoZQMK3eQtgaSuwcuyz5gi7FbaPmwBMJBiD9hbDx5NUCF",
  "key5": "358rh91TtKgtDdyqhkqLNkYK2JDqnGMvVFNQ8NYhaDxiAkQxEP6Lsf6xrttB7LNa7rHLfVBAY1vGAGYDotut6WjX",
  "key6": "4VfinoKEFukh3qefBryeYPCJquP2aFKQGuw2nnLttBWGCzitv8PZtTLxdTSoeqNc6uciMhaxCEX4r5A9uxFfxWfR",
  "key7": "5r1PLZ6PGpKPbkR3JoLWUPjW1HeBTdBDr79XjTMg6vf9soUsaYuYWBDr99UyXvMafBwQiXvCHfB7vvJEtJQzi5c5",
  "key8": "3hugKuYSsKNyKaTK2QzbhjSczameqnVod8gaZFi9DwC4mfp2Sm7yQ9sHEargrnCdRf6s9UQbws2mNoX3YFpTkHyq",
  "key9": "4avVLL4mnGFeyX1Cm8Y9Qxxj4eCukMdZcHzURx91CP1yKePXg6TwocPQ1QuTNr6qwgtkjn9yHMpERreQAif9iMFz",
  "key10": "67rgddohTYvaGJiyHswpzaiMnDon63ERvqQDedQEV63ea8g45caBqcTbG8CmyWy2VtSp8rjm7N47wqoWGtbJWfVD",
  "key11": "2ao3HCEuAxYHkYYxPMeJT3K8iaGRn2aMGgtt9mYeTRx35AuowRJcs225nenUdQ4kvowPo9sXpKhKmQH1XLabzJ3x",
  "key12": "4GQYYd7d7NTPMWwjzUgMN2a1oWN34PFa8Ss2oFxevVExou4W5oAyyJCx7FSAXCZ2JfoqsueCHR1qeMHeJbBj5v5g",
  "key13": "53qDiCCU3dxsXeLYTjNQRYxmAk4i2a6DyUuawxThW3c8kRWfkaVhQd5wgZvtzH8hmLUsTp4JUwFsUovFM4YaD7m5",
  "key14": "3XstwE4h5uMH454yvsUotKmDUqNvSnV6BRJnWMBKTH9DgQH9htwBGzBbDzWr2GnpDy4fmiAdsLCxo3aoDCH1rztS",
  "key15": "3DwiSTu6DAkuCgUUhxJaSUWF9qcq6cGPY1aq5LojJxgjbon6M4wasYAs8NYff5j733xx76FQmoXcuvKJzMVUWPau",
  "key16": "y7MwFKFE6KRyecDV4QxoMbbWH6ipTtLwKdpBKkM9Au6sFNY9jC5fiojTWKcegQ6Y4ptN559tFxa7aZ4kzCQR4Py",
  "key17": "2QGt1RyUj7CBCJDHXUEsNwdfapHaLXsziFM5cMnTyHrsZi7xSfvMkbHaQL6kadmZpmfApEGVvK4qzoUiTMvq3bK6",
  "key18": "5wQ8kRmGVnj8sxZhkCi2wmCaniE8YxVm1ujnVXmbd2qLQb76KQkFnwU2ZUigVnHi6CxCfZFpAwszB9mhwJ7jYbuy",
  "key19": "5sWbRF6gvYf3zLrrtPxfVbc4sEfptMmkE8VBEZzGspjTL7sP1fhTTuXQ7Y61kt3JSCmBDLL78HsGFfF25TfcaGMV",
  "key20": "3ra48cJjF3L6wa5TdZZKhsyRcqAfRd1BMgwHVVqzJE9zR9iLRhvaXaETTauBnQrhmkE7vYGLvVPFkMvjhbYw3WcE",
  "key21": "4ejZ9uZj9Ad8HnrQepQCBuSaUXawvKiUL41om7gW8JjnPASnZ7bLQp4xguvJDvGBDgTDDL7XbCcqUhqtZVKVWP32",
  "key22": "HuXkgee7FLP3izkHGckMXpHDCzCn2sST51KJnvrY1k5KjXYh48bDwaCLN1McZCv1oYHVCsxcLwCayRQcXFavyWp",
  "key23": "4apD17CgoruCK82RWg2eP6m2kSYqtPqsEF1nxj69jdLvtYCyCBfqiqiuad9rVVF22c1o3HNnjLJhzFk7TGEBVbED",
  "key24": "53gwnCbrWvXQUK2rm2jFJxFMYSyJrSp5FFG1wUT563Mq4PUSPpw8qAwrWoU3xYMmtLntv2whZhXQsWEhzCg8JbPj",
  "key25": "3yh8iScqmkm8BX4CfvSo4h36T3wNMEJReBE9fecFdsbYWRhPv6YAKkC5GJ4ryESVVkFPjhRh5Y1JFLwj6bSjazF8",
  "key26": "3cunA1pVX6Fxg5LCWhTRYXNfdefAo1qaPGgabJ5LMWHeG8W6qGv2C8Af66VSPpUW8Z7JHabrfmKsZSvfRGbyzpat",
  "key27": "4gMRbrvQBog8aVdTawrW3eGCYZ6DSxPxN4r6yrfUjCpwDi1Kew8tkrMr95XgFhFNGDiP7SXxXNTTuzQJRwr69KUb",
  "key28": "3H2FnoZvu4Vh9vMKnpVqZDvyvyXczAUCvTPYzeufCk3iLmALiK29hRRt25NAesU5qxmNEhP6eqrnYakHXY5wz3rV",
  "key29": "45Mds2RvYjdCZgG2HL4tLKE5kE2CdvsH58q5tzfV7yP6ka4QcY7QeV513PCix5iCwRfnMFJYK75w8yc6my4fLntn",
  "key30": "5a1kwnj2dvs1EjcZ2uquLYDGAY6us4axafBNDrkfM43gCPep19pKg5WsoJ6Y9dHygy111W3RFBFJcJLSYhpPFqv7",
  "key31": "27vwhoLvPjnroREpjMReEUnj82W7VsCV8mnsFybj3dk5Kj9dwhDs1QgyXshhXn6fsyiVjdwaT5k3zt7MRHsALuSy",
  "key32": "xNJ47FFRYvTyGRTUJt3r3XpVBebVVVMn3thLYn7H4ZvCQvWzf9kWK3Zp9aTfjgXzknu1dAP4FMK7GR6qRfbcAns",
  "key33": "2MjZGTq7HUKBF3TNjMnMjmD2MRzvT4gfkWsU3M9aNfNMDJNgMs2DZkNwSbEL3RBdRA5LsfU9F7Bg8WtFuysW6TeB",
  "key34": "evgHyp6EHsHswTZioSFe12dtKhZttMNEAXX7WcyZ26RMYWRe6uN2D1y6WN8aRoPSXrip4h51PXQkHP81c8p8PJ3",
  "key35": "62KccBXUYKbYYEXtdKiLrxXAMXMX7bjGKn3aYT3eAbm4UcWwHHNqsG39xbfLS4jn5cekJXv3cJ7NyL8vMLZEaa6L",
  "key36": "2v2eoys2NjKjtLtm45vCch7JBMXuRnWUKTxSga8tMs1fAmk6N5CuCTxtNowaQA5gZE1zQbjGtxDpQmvLUPxJdL9C",
  "key37": "3Vu86YBdD9X2Zo6ddeNdVGRurump11meqSQ81truYM1eje9nHx28Cm5rQhnpPZCPv1rTcUGiN6Puitt9oBJyHj6Q",
  "key38": "4FMk6Yp9n2WzJ6qZpLVucSRpJdwmPbFL6W9F6TJ49egwo5xm18qpzhybVSJoFm2jHcSSjhDf4pwe51n2pJ2Unv1K",
  "key39": "QLHfnCVng9MCWKhfWQg27cidWufgg6WiFs4P6zJiddfCf8Kr93zn9ZeNLoX3VykFFZV31TgvUxBMDvGwAdLuMXx",
  "key40": "2As9cKfXqgY3Bubd6UBXRac8ndTGQePJsKMRQGSo1RGmW1fBTu4Gjm99Cc8bCkH1HeTxHkTAoP4LtDrxFVg8n8R9",
  "key41": "5E5XupwcfqT9Xv6hxufzQ2eo8HdDH9zJD4XBTe4vg333mfaApVUkj5cbMdpiJYNXPTsnXTNc4NvAWVWdAkSkjQ2M"
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
