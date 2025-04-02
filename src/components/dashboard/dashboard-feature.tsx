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
    "4nQrbZRzHFwBSk9aymu6KsT7QStscVNEHVURt5gQiaTyScQicZuKor5x5FjqJ34w5Ct5tpCMY8yKUjmjkJWNyEDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wBpc4Bo4EJhLwYvFMR6HaF6bvBrJ8suPrHi4dJfjzVwqLxaNsFS4RMe1BATV13nfJj8ukAvA7u3jf9gnP7XVgv",
  "key1": "2QSuHMczLUXTYGrxJZfeyTMzYTKejiB1ib4dbjpS4RrjEpkKzU7DJWLTVy4MengyiwwDLz26MmtZr7JP1xG1XBUP",
  "key2": "4VaCGPrGjYNBU68UgAmQPHn9YNFumLHKWF6ARyX5mmGr79ULq53SHJqN32etuCUmz59uckSEwRAuqeRGXmLoydJc",
  "key3": "44HYGkjVhAHPxipq81VACCGyh4HNBMKHRhByCG1vCRrWk74Notcv7kENDc5Ex58YeQzWj3SQxtnSwozT4j1N9HiK",
  "key4": "2cgATecAKXUjX29te36DHSTaLwvjT4YBvvzBPAMA6ZRpwYAH7iJP5JRVhZUq622u4nm31vvTTFEZFW5u36gXp3Yz",
  "key5": "3SkSdz1jzuYWEeDbqe551Amx7U8RtgRKKdUf8ekzn3wFnsr7a4vyhoFHtvZ4n8826UhiAopf17g3N9E5XRPLemrt",
  "key6": "5wCaq6MvSHATKeWpt8rUh7XXcnYxaQSCUTW5naLuPRphgeD9oYZXDUVujdgWRkHQBHgK8Cy2QfNaNi8sor22Si5P",
  "key7": "3wYe8G897cbJBsPg2eRA5S1gSxs7u1RCeFAtimokMpyqTzEEMu6rXZf7E5cteouWmti7Y7vQ6Ev2ufVSKCZnQS2Z",
  "key8": "3QZjAKAhs45AcEEY4KAJAdZmE3DAgXyByxpNT4SyaQ7Qpej3v7YyYrZ7PY9r8e3gBvRYmBERCLRFuRSSFUzGtnse",
  "key9": "3EADEyLmnRqz8yGBKhQcgYq7U89VDd8AyxpxeVJNmPEyqXpNMdzgJ1Hfd7Uo98fJjoH4NdxaFFD2gZ6Ur5Mqs6Xv",
  "key10": "5iAzD9TxNANNeoB3ZH6ZNRSh93ajiVsiG7ZkCBmUyXUdLF7ve285TBb82Vac4BmTEQ7tYrg6qBTSkYBEpJi1GAkg",
  "key11": "21DJDXUsTaCtN36C6ZpYvtpzoytJtVDB2DWaagrQ8LP2o96F5oKsXQWZmfo7GSMczsuam886Y4TsKGrxJa7XNw3P",
  "key12": "5XsHxubApvC3fBemXecfR5CBAN6XNeLUcBWw2yN5oidzrH9YAaUE3N5bAeCa1mpfiBzT6MMzbTRd7hAB9bN5Yq8y",
  "key13": "2M4jdYLhnQUD12Voa5UGh3S8F5dsWL2gHsPNh13NZXgQ7p9uQwJydSLM8hhekncxSLR73HHUhjycET8FpyzdcHr",
  "key14": "3Ekwn5TqHAcK1u7b1pXCV3DoyZ2e41c6ed527zZ4jDfjqnrGS5ujkuyurx7ZsMMa1yq8zkTPXrJmRdj7wctVRywe",
  "key15": "2SZMr1nEQTiQEHQqWcfRJysALGZNFCDCBnA2MsP6qh2MFjCRmGcySk4f2kukwdEwpTGw61nK5RFxt5uD63cmJ68W",
  "key16": "2oWNuS88AT2phDtBJYLjJ89zX5WVehYuvaYHT49mvQ7iPxRH4Z1WhrArq5VjMCci1ywmdG5hk7zwPgvBrc74tRtv",
  "key17": "5YiMrpowzxvUr1hrYuW6svvm249NxvpmfEyagdmmAXZ1hNC8vt2Wj4m4ctajQwGicsrhVmmM4YS7ntcPEZgooRxn",
  "key18": "3si8r6Dibfzd1UevdXd5XwXeeFNqWCsNzrRvFwjY4mH5wearA9YedynP6rEFpE32pMfWMCdfDxXYKtViHkabmmqA",
  "key19": "4nriAwqBiPjm9Pr1kkEqWtx24C14fR1jrDirXFkxZdKnDT7vCK2bbKucG1VZ2KZrvqqey743PzAMpAWSseK2WjE8",
  "key20": "5ySGQ3ScwmvMmwhogsJ3uEfkgxSpqDTp795q5untie1NhFj8oPseFUDoR7Rt7u1PoCN1zFkdtVg2ngyoDkJxcE6G",
  "key21": "32NgnRwFJoabLvZRkbYVkhgZjD63vnruaTzRVd5asufi6NBFtZXADSC8EZkhnWHw7oANEAr43qAEBv6t48p7jerV",
  "key22": "3UAAmoo37PAs4HuUt3x2MMX4UvcZ8emhcvqWvdJoGn1zBjSs5jgbzHtSFhoTgcoGguKExn9Rk6t3T1nBtS5F1fPn",
  "key23": "5gfh1yLrHyQfr3MAEFDCcjrAo2LfctaxTbaXohSmLy1B5ETSjojGW3duLDeVq1a5RoTaGGsxhRCrSDVeqyriZKPy",
  "key24": "459mfbKRs1ZDa3jxmPdXFWNRPLdQTSKd5esrzVSbeAPdT5BZKZmjAzbPmZ8PFpUTfnn2pvQeJdayxWVsstQfmDuF",
  "key25": "4apMptNmZEhW65K7gE88mVoAHSb6kaWrFATcUPLW2w5BuryYyfaM3gJnrba1megua849osXdjBvVCTQVkLjGDXCZ",
  "key26": "4SMuf5aG8s5Ko7k1JQQ7WtoPfBdHP3cW8UehnyoS8C7p4wbomqy9EcY7XCLmdazAgBhvNoYdKZRhvdYhiNDwb9Zq",
  "key27": "5bGTaxGkjaf2meV1PYTKrRecpZmgNTikrW3gVGMWUqgmvyZKZfepEa8HqP5PXrXDnua38p77QzQVccpy4evx86Sp",
  "key28": "5SCNMzbGTaK5tGhcLp6yv2M1NxyBaUPdBm4qr4y3MpCh78f5Y439tZbd5kwXGyqpb8rccnGwA3Zaeb6HqqEUCVxs",
  "key29": "2Kxtq2bit87K4H5Wxo8jyPxhCPjZraHFWEcdg1U7Z4nfUpNJLPr4KdRNZQWVYCYyF8V81Qw4xMpPmtvkp9JyA1cs",
  "key30": "fsa6thvBbEXP9FidBBDw9n41eDR5XaJsE5cYB89GSz6RFh99bZmgnz7BzGa6DbQZf2qhPvVqcjU3CD6BebFKJjQ",
  "key31": "5NHwzF2bQGWt1nwCsr2WoGei1qK8ERx7Z8rwM6s3dmQbtzw8At6qDEDusWd1wYeGtTaLHWwDtwfWHzJ7BCXiwyg",
  "key32": "2YXTQvVAWJxGaBKyC5XgsXoKJRZvsa15GQ2f2oUT2GAECm7sULybchxnzUm72yo7sxypwdXXG9dMog5TJezozwK7",
  "key33": "59H49GbgJhSR7478dVpwvm89nqvUAASDZex2f4JVP2ej9MwVkeXB1wrKu8RUw8WzsXJibzmF9T12hiqPQYShoM5K",
  "key34": "qNWdAuAckRREZDAK4awU6MZ6VtXxLUUnj75ZHbpSk4PpestaVFTALwKhw2Z1RyZhCPxaNLRQXQ8TfwhYyQtAnVX",
  "key35": "3cFsUq8ZdfPFnXNWCqjUaFVcNSydqLoM2F49zNrShw78kFRgxEGYe9fDSwbuhD6PRz4cRByUw2X5HHYptuCiNccb"
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
