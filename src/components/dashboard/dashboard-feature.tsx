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
    "39heRsRaCfkmRFba9jjVkdeii88T9R1e7ZWvUT5bHP84TTXMcQCXXBkUmjhPAkjNKMD5YrqVyMB9DTVDqMxPwkTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAsbQXE4yiaWap3492rRKgBBhTBmxKL11E3Uw7jHsQRveZHth4cYD6BT4sB9zhqs7hVcVcZUP4DdE1zZ5ruNWY5",
  "key1": "3RGJRKHYJJmxxFWmHgJb4kTpnzXip6URiqx3gnjLadBKw9keh9pRRRVRi3kkL3uUtSjVvFSRrqLhx8LnXGXszen8",
  "key2": "3H6Drb7UKdPHSLHX6SF74zDZUEbz3Lh91KwMnpfVcZvwyv812YteqyA31Dd657upNyFw69GHCiSjv2r4A2jjG14s",
  "key3": "FjZ9b6CtoajcK48Jk4AM2kEyapgkR5gca6Lzjeoom3gev4cUHCe7Kv89NU6DKsmdyknQxUx7Np3MVqRm9aKtUCa",
  "key4": "41SgeiQWNXFp3Lnessd5WvAKWCMnYqGzQ3JF4xKJDUMu4QXrVGEq7R1dCHzTAdK7g7BW1vWEWU1ghD7yBtUSuFJv",
  "key5": "UnVGJJ7SwJdZhCEzoiJps4N8Zv3MPvNaD5BVUGFnvmNDx7M11xzRV8UbEfwjCLsKynP5s9SSqJZdWKj4qQCmT7P",
  "key6": "2Jxrs5a9e3FKnPnne8rYDR8fZLfRxcvTN6W2koY6cpyXDeqbBjUC8G3EfFyfsNUybgYPZnEnSy3VQoXV1DdmJA9r",
  "key7": "4tDrUkeANChjwYThQGq8dSsz4iX4e8GiqD1x7dBcs9Lh5iFCZADxQLMpzPV5UxBHEjbpLWzD6cHZymYAB2rm4WYb",
  "key8": "FcyMWGuoxAHFEbBVLMke6G9JYUS71195noNvzGTWr9y6cCYK8j6indnRR23m6XSDoKn8pVBYpT5Thns6K7WWnRp",
  "key9": "2oz4CMXn1MUGtVxyZVT8hLUgujbKKGX4cukYoRiQ5oQEfhgqaQPY8pfs242T8GhxiBCVmVZSfuS6yb1AnwaDUH5c",
  "key10": "w7qWfuWydZXEB2SserndT4bGMnezVRKDJguwjd8kVRye5v5WRyySqApp1grDwTbJXYMmcefjmydKQk8CfqNq7n8",
  "key11": "86vYjEsXmtPo67pH9m8jczH6f2zVXodhxmwGjQky5252CBAHH1GzRXDf1wDkRbAURq9eZSfQHoafVYKjeY7geqR",
  "key12": "4LBWPFdJ1CxMqLytbSAZURCnzpegMs94vHkHuLw5HPPceZg4oiUeMcA4B9C6np3iExv6xmT1FpSAqG6MUf6kExNa",
  "key13": "SrXeqzCw3WBud5HAKq7S9618obekxoDSttkiKkRNp6Bdpj63zTzLjpwTiTKBM84BqsJ1rE2KeG8aUY5JfufCx89",
  "key14": "5XxVLFWLzWTCyW5G8LfyTVxora3gLYvquVyeZtkJpvP5H8fTJXm7S3dkzinr57WGuQSjCyoMjNc8H2LfFQ4CmXfi",
  "key15": "5XMBVaTD59voXqmjypW6QW2anf9nENLeVboUr8j5Hx6zCGtTsqvfYuXGLmWjKekqupVf3MBGSaSgbR9qP32qZmey",
  "key16": "3gmuEk8PQjhvZ1CGE1WxqtBfyya7Fm7K5FnhzWbz9wJ8dpy9oZ4EQfALGWPph4hbvMrdxq4w8XBCTJ7fDqHSkkXA",
  "key17": "X2H921YAni9pz8TMnjxQWEQTbmu4xXfJamhJj7myW7S7hoKzH6jJzgNEgJWUQxzKSbxVt4hcGG7jwXcmowSsXqr",
  "key18": "YQnYXbFjUq8SRXshJyixt45We7hczipxfjNRGvXWLYXV9QqFYLTuzjFBFDLwBkJ8Qcon5nAaF9gLzZtz7ZQMBet",
  "key19": "5xeeyRLn1J2k27TDqn49i5m8QhHfQsXU85hEtnoANnDpN6UnNJ9sRE1VXfcffgrEsQcVgMk22ZzpsZaBSMpocShP",
  "key20": "HGKCcCHWzzrAxi9oj5DdFnBcekAeSxEnZEdKzsVhHREiu4yej56VHYJRxx5xYF5UK73GgwvCrNM6fFHQJgnpwg1",
  "key21": "5zZPYPgCBnyQmdxnm2V5YeYzkvSnoYvhhCM2DL7Vx1MZFWccVzsE78wZs63mR4dvAZwnuDLz7GRcdykFLwZt6sbH",
  "key22": "3hdoLBTJBNHW4yp5xVm5GQKQEWvZp8bWk5MiATB27rQ2VNMWV6sXZ8frpcd8ZYbYJgw3ujT46b1xaEdsa993Cuib",
  "key23": "5JTuUYBWsDnoAkvGecbUo3gb3zK6eh9b1em8ukannzqCBE1oyZvWKmPF6aHke3JuvYNVM3g2HWJuAHVGtaaEdvnm",
  "key24": "3wjUrSr4K7iuuM9EfodecxSNXaEHRQBtDSWn5gXhhbiRZCC1z7VoQgwuCwf3DYGGwVocWPQHw3MBBo8EUWgyuFCK",
  "key25": "43sQkDMFq51A6Vz9wJ8jo9V9Zt6ijvHSAycfKGr5Bc49KyPTPXv6HjBRgAzrqmH6nGYx1LhZ4RuWk3Vv8Z7pwTj",
  "key26": "3EGh5rB1wYJk4ZgzFSftRo8HkusvMEdmn6VSYobCqr3W6qZsJK59LwbeD9oJRUb4zXWWNuNR1F1uQn4obUT1CbeJ",
  "key27": "4QbqKUomspBHmvaWErWj1N6akxH6SviVfPe1TB1JgiHRBgry1tdWeJj7ADm65WJfxp2Z3h6THdHy4qC8z4MYonJw",
  "key28": "3vRaPb8Ty5McuPqisxLjG9KcZSL93sKUcGYG6YVdDa2VGxu4uYiduhEPBE2GW6txRPFqjPuERVqDJKwVpXuHzRzj",
  "key29": "7PgHkmMd2yNy2XcBz8P4fhzke6HpRPK8NParj9aQ65U2VdBG4RYsWDuRfDgELfZjp5avB5KMzxiP5CMbhH4GJRo",
  "key30": "6fV7agpK8HU5XG5YjSjukfoXn9ytRHXcLMD1G3vTV8ySyVqsPUYBcrjsBddMuWpZa2QvR6CCF5pPitswvL2D6zB",
  "key31": "3CWdoKZMkfkbBhysUaKuPTYtqsscGgfidEQRrHYv1xkFUffFpoBsGkjkTHRUapuGPLavr4wYxVcSTmFJYAETLmxk",
  "key32": "5pBaFFPaXigSVP4qfgk5aPxJrAdH1f3k5TXPcbEXorRphW1769BYEsKQNsH9HobHPxtzDwVmhxbbnRG7ySE2GUtJ",
  "key33": "2TFtngYw4ePxvAZZZ9XaVv8rA1M32DSaMG8pFZwWSWBr25Cy7qZANoejgJtpUMDcb7ogDtwxCnp8fXmZQHQwi4Ru",
  "key34": "3jW9qeTBc1AWGTSQqZ7wx1dbXjR32ZuNzMt5zqDcmHSJsJD4js95VMMYeEqTsuvBGRZ2aRB34WR62WTb4XbbJdzG",
  "key35": "mNbqfm1zc52NA5qYVCPQ5mdQMEnrDYCR23GsB4xs4VVhK8JjHQACN5EjE8RHWudL6RgcQ3adzXB4c8S9teGexEP",
  "key36": "5YoYW7rPcUPmFcen8Eu65zRGBE27F1nNB4ZY8FCumGa9G8XcV5h6A3ko6YzEBx4KiUoKamygRnEavB4spuEEFvR",
  "key37": "5JbvrX84tw7esuVKzLtNRnaftYdvXVMxGMjx4jTFq4NxxfXpVsSPFDJRy8oa6z1TvKKGshNZaZdofckHuM8fWVT3",
  "key38": "3Hp1PbnCghwMQrakyU2APBUiAi8JjfDg92mLVUUmthrruhJsZdNvA3GgnDZQN7qs3Ryp2CsVgKo1ULXmdjLMXSgX",
  "key39": "4BZhS4cETk6mNHUVkmj4symK9qiq1iaBMWHwC3NiHLZoJ4WH6TkPGfGupRz5nNXbmeRWkUNBZRPJRtkeQGTb1Lgv",
  "key40": "5SZ3u2C9HyahEuLPZhGUop1LRXZ6LcAarc8U7F6YSh3tECVeuYcGwThfnAyrLnvMfC3GaENC8DuoGNRdNqMjbZYx",
  "key41": "5QgbusjUjxxrj1432QKP69GqPCMMcEBFvco8kRFER4TtzwEwkrJaPB5VwnYCYqwwcsx73J7hPUw2eoBzB8xjxczm",
  "key42": "5KVhffkWJAo9zJsP15ir6r6EdYuqfkcYVwcFfoBwGUokUdni9hdZZp5nVGU4VcaLroor7Thf7fY4mjXYj2eNzCGX",
  "key43": "3gqyH5eAoMBVMSG6WVYm6FwbSpevFRFWHTs8SXNCYtiB4ucur1BcGihP3ic6p8SHEYrftH3c3Gf3cyNS1adUK22q",
  "key44": "3FQewAcEtheQ1Z6u37Npa5eTVRMB9k2qofpaaFCh8XHt2o9aSgAYpGeEMhPQAnoWN2yudERGA5tkt38vat59XQeU",
  "key45": "5o1gKQegrz5k8hYHLXusq5fkjzKybUpWid6gTT4Fc1MkBHFGCD7uLSy4CJtXUmRaNjGsRqe6wop65y492yP5A9eP",
  "key46": "5wheNjicyo7Y7uZLoeC5BnsbVyT6xdMoKzGxd6PVikN8cRUWYrTBpNPGn2m4X94LLGRfJyrZca95jsZu2cqAoNmZ",
  "key47": "2vWfQDNaLgFw2YgZckNhBN696TqPFhAkrkMi8ebT8NYw27FxjfFDN2t469qfwZp9SB4jvqHDxLikFjXtBfmAD2J8",
  "key48": "3JMA68S4GJa45WddbpV3GT86eA56XtgdaY29qWJ4zevV1zaypzf7XMX1BRE9sLXQx4GHehCixLPzmuwT1VnFCgrk"
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
