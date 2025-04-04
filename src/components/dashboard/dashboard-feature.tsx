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
    "wJ6qxZnJb3XmNtF2s9tLFJznpcM9c9ePxCcMYRX7gdQEGsQ2Kwp62dovNy9AThVTbhc5Xi8FLwd4PUW5gHLhYsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ftho14vLuE14PXQA3jSNvpfKTiuvdgFioNJW4nbPXig1482FBg26sMmjVk2aFyaYvjrMNU95wftSTXeAHeYkSR",
  "key1": "4FmL7fWzxjSttLE34qtCGWoAFwnR37LNvZRN5JGG63cgaSL4JAUAKFDWUGNxJd6uVAvMhkzKNwdbr6CbzQWhChXb",
  "key2": "5UyoUxXKkTZUQc73n2B9XPnc2M8p1MHk9c89xj1UMH8Mce6j9VxqLdYMKsmGSKw4WUJDhZSZxog56sedDXS6EuyK",
  "key3": "4yeiyzoE1AUSZNGhdB7tYULMf3V3VYEPiz4soQLoaTVeVv54iWBBTiT7tM1841Z1AVnUTo2NPz13pgegmUDtdc93",
  "key4": "58gfcGo7es6wbDB5BEMdnnamgbFj6MGzmZEfR3Xo2wzKy3G85sfSRRvc127Pm8ULcJC3afDfj2Svg595tCxi79jh",
  "key5": "2KrcSaV9Hgr5iibXJJeWneSCdVLnuYViJk4yoga3BBaBTWk7m6BvVZ41vqcVudfeJjptYqRJ4GLQvpDQTu9jxRJY",
  "key6": "2Zto6BVxiaeTQiwvDTGoXUdcVWedxT7pn76Am4TFk92t2dg5XmiYBMdwqd9KG45KPnGjZS1jSXaH8g6GFoENx9HC",
  "key7": "5HkTHDJReQVKAHxhxUeseQTPdrF9F5sTg2J8FaJxUBgTeusSaMWDtrQXYxAgEnK8W5gL495EcD5eQ3JjQp3o9Udw",
  "key8": "2febN6iAB5Q7Pd9EYmWffUBUiZV4uWshMLe4xN8EvtHKKrb6xaatS4UQFS6hhXouk5xBRGAvSaFu1YfE4VK4TwTS",
  "key9": "4ahrgBSbnfbXTLFVRS2EKfX6t2XoUhSw6M4ckKU5itsqT11yhdhEwEXniVoKnjkGSPrNY23dWmqJ6eMouaUy38WJ",
  "key10": "3bMj3pEKoC3eedQPcCDugnyRX77TpGeNVg4Vo6fF1xaDUirVczPJiQ71WG1wMroUtBQ1e8BfemNe6Y1bo6LSb5Rf",
  "key11": "5T64pRwMeEib89gEV8pom9nHtsUyhfV9hentQAaHz8bwot3hdnoFW3Zvv88oCgpkYZ77bDEuNwVGTMmv62uVWcwZ",
  "key12": "5CAQmWMtFXUezZBh1fmkys4gcA8XUFhb5o2JgC9aq5h9F186Z2Hw4KKoHfz7S5N6RDG25CxAZ3zQfLFF22xZPqp1",
  "key13": "3pcoHSuUBzgVF3G3KKseCBt5kj3oTGcdLbLFYLushk5ZGhw9MTHuxPwXuzDVnQfGKUDR9x4eLF2ZK4cxWLZCf1xK",
  "key14": "2HeyfNhRsuWUGgnpjU8D15yfGnXKQoodxZ8NrPBrYSYxevPp2DwmJRTsm3yxnFbXdo23XJV8PjRrwbJmvovW6EkL",
  "key15": "5H9bcdh1kFHdNA5uFnAw1ENSr37f1e345wymq6N9C6V1WBJY6BkNBxS7edSzHJaHDZHEFW8Rw9gxkUwVF8FeapBV",
  "key16": "28KzHQmq6qAEjT8XCR9w3J1XwtWvXGvrvNGfqNpNCwN85E2buZwZXRPttbYQYaN7W2x3SXy2FWXV9mkC2MGd4yoG",
  "key17": "34fimdHGQCFXH3TtF7XrEtP9fQFBCCguKYbg7nbsNgbhPekaEMLHQtJVAjDXmfYUymR4SLm55hxPYbhkjKot5e5B",
  "key18": "4zPAF6TamgrUyP8i66yWiyBK6bcRxinQgCcB2zzvhwqQC1i3w82eJoqokiiyYaVw7keiS9SuemmxHy7Bcw4ji62G",
  "key19": "5cUWQrWv3azNCsV9sZVou6wrG2gpduFyRKSds1WNH4Y6JoSH5YmEYQQBXB5ebZgZJyXMAgrKwUG44EsEMApSny4s",
  "key20": "2ATHsFXYp6Thd8cuwhyqde34PeBo9JiUg4YwHRKnqb66JjBsyHt5FcfzCZwaaJ7kNgpag6n6YarkYvTQZ9DLhtUu",
  "key21": "3b7TceQ8JJYksvJdqsYi232Nx6zTMF7zVaWbmdFfiXsEVXUgPncHH8u6SBZx8MGJts86eM6xzXcacqzxRRExY1La",
  "key22": "3vbExHmrwjc5HY7TdgdEmMy3Kiqpok9Fzp5v3fjCTrM1T6T2BrBrJBXWxsnWgBHF3ZxuydJsUNzV9728XdZ3eCdS",
  "key23": "62AnUG6VDMLsxngq6859QzqZDmJMBTLgBnyh3uayXhx3s29tLmrHqF9CHVMfEPpav3C4YgZqekFBU1XT531fDaeK",
  "key24": "Xz8S1bR9WUQmdFTrGhvJP9rvMKSnjhGS2eHhhq8FzeGD46Mg7r82EtGy7zc6c1pBUjgDBttZgydRBZuxvXFS4DW",
  "key25": "q6Pe44iK1CqMsVS2t2Eq58GCQEejYwcQJcDAt79Q5PiNwyzndwTxxEMH5YdnvRnRDVrc278tRQo7dFi5Db1Mc5B",
  "key26": "4WNjgUKaDezB4MWjm6wxHJESyfJFbPqnHH56WtNRsZWbY3bEPPPNT4MHQQa9T239CFU3HkyosNdUPiob1q9m7u5Y",
  "key27": "5KfxNsHasDEXs4zLqTPk7iK8WBsHne5YaznhuPhr9EbAg9ccvMTAj1VYF4LsWSExuiCLBdQ6joohMRgEoYusKWP9",
  "key28": "2zjr1Ev67a3rcqrJLDcenswNgyfdhDEJvFSVkQcMpFpqiZ5vufSXSWANwstV5tMb8ZuAHZGmT9n9DCdKbD8G17Cc",
  "key29": "6k63XP8Z4dUWAybT2oCuPGcQzvKHG848BwLpvZKdCF8mgPtG1HTi6fmm2PnnjEy86bLeSorXBJtNQYGGLooNTJV",
  "key30": "39TeVVn2eYg4R2X7JFzo5aEiMvkXjPh3joGSUBgPtFrrufvMEtBFS86FzW4m9DYeRXx9Ft1oZ9vUA3tm81XgAeXm",
  "key31": "3MYxF2WV4XDyuaSN4XqpY8KhaSRpkKLC25r6uG89Utx4yMBLvB5TKwS6K9HQs5unYwWbCG6kTxbsfoE9U5tBtaxc",
  "key32": "3Ajp8vJLE32mRiYzhiwpP9h4DtwK9GQuEFJiLxAiMA9VTkU4uDtAZYhTB32o7uh6Abya5DjonAvLv3LNMVsyjxUH",
  "key33": "eHxN9qgSzC2CqkSTzjYMscA164cCjCwtsUGbohdbcfg91Ym7UjpqapDdMk82cKET6rFnSMNDY2Dx7BBqMFkYxbH",
  "key34": "42kJhYQ7yppwVXDuRBmUzHVhRBvJTf2mxSwbKtBy5rbW5vEHy8N5F2Z7XuxG1LsrxRhH6VHxnbHmx7oaiHUEzPeW",
  "key35": "3swm6sp3nNXZwx3aNzPQ1X17E4qnjtKubcGJUQYKStd8sizhRQRceQWbo596dUZTNqmFPdhJdRfMZw2cgjvyg8cf",
  "key36": "5HFfJ5WPFJoru1XeDEWxXjfAhYMqPeZ3oQGyqH7qipcVF7QKW98zXU41z9cgnHWie5nyaeUGyU6ZggRtFj78vkgv",
  "key37": "5prW7YnK9fQQrRDUTJ5FTMzkiuZxXwb6j7qgd8WU7cowkBFpXG4W6FoUJTQNkmF4wi4e25J7JTZW6KHzYSUSRM7s"
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
