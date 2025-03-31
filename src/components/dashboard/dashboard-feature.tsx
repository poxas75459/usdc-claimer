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
    "2bdgKKoB9FG9gCWB4QB6eL9byhiZhJC3mxxTgmYYgE8kWUrePkMwxJdrAcBfhsosMcKr5fjKwxBixrLCs8MgVs62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FK7GjvbPkvTnkmYAG96iD9k1gQ2uV7khYkmKrzf1RUQapApnYxv3ZnCeKYBoGrkH86173jygZKhMBRnVCJxFKLo",
  "key1": "3igvzHi8BCWvNy3AR6XtSfn2q5N6wChUYMqfHeh2tb6HojP4LuFfUGZaRv1h9LahkxG7oWSpH3WCS8h4GkuePNC2",
  "key2": "4YKHUeCPbePjRXhj3pyBZNXXd23soMk8VsedheVHQsfWdPotk2sd7Rc3hTKGWdqX1XkadogYJ2PHNjXrJ5YrD6Zo",
  "key3": "Bwrmcnynte1fQcJ5gLAbeQtJGXfh94gZGKV2grucH5V9JdLLxRLjbyEJetvRjxd8rZgvXUHLRESaFHaLes57vN5",
  "key4": "3avJcpaQkL9sZgKDKR4w36GcmVuxc8ajudPPLS5rM9jeSsJr5Cd6UPVarsU2gYpSKuwx3RckmPALrnTF9B4NJ7M8",
  "key5": "c9MEuSpbS1JWgKFVRzTwyaSB1fF3etN9d7vcXXUYvmrG41BboQ5BST86VkEUwZ8fHGvd9L1e9Wk5bKmbwEsPvHk",
  "key6": "2pGDmnbNWYnqGKQeTCBzWXM6sksMc3cGf4Ksqrb1ecmAFaVb6MbCokkeTt2rHgfgV9WCtfr4xvk453duFmo3JvBN",
  "key7": "mM1auXNxf81aEYLBU2DRVgpRkoYFWwLuvjfNQrBQKbYiY6K77fJAfqzFSPqiiANtwjYVZu56rXw1xBqwjJ3JUmc",
  "key8": "WcboMHNUNbJbKX287HsBSJNxQ2mvDQbwP6WDt9yE1eHTVxVRDj4Jkfj8hjdobZQo9uuFfttzqsyMByH7Bn9ECGF",
  "key9": "briTBaSDorRg4ERY9hUXbD895Eq1KGQGfdUmtCE8m5AueiqM2eiQpHhZmyoGdScvMoVtAEkxCzLGQS1JDnCNWhE",
  "key10": "5er3FHxcXW3PeW98hGWbyVGk8sSuj7dhqMtkhff6mLjPZhpNQRfzukDiBqzvuzU4pu7Jrg6cr7cbM7pMQCPihY13",
  "key11": "d2218VJ4hZiTMPdS8YMXZbGSCTfutN3frUfbopSzs5cYTf6NX2SbrT1AGs5FDYrFyTCrzxJE1eYZfyGg3kqhLxN",
  "key12": "2sEfT2bytVWLEmrwofthn8SkiYkLftzUJJM5KUUJsmqFFtFDRMcQPzFuQUvVByhBQdQLzfG9db4QYUtGtRZb68HR",
  "key13": "5yLqvwsbJZWpY2SJwrhNhsvj6wM6yjtiqpqxNaKE86fASGM564SCgDHRNNezVX59WHQoH4fTfTGRaCTbFkeM3BJd",
  "key14": "4mA5g3WkaWgL7hWaZegWjfNEpPLsuGAz6ruGeGr2Jxa4uCkHfdFnxJs1VgYjCeHMAxqH8gUFUFiNjsw2FTA2NFQU",
  "key15": "HmF9G5ZD4JFYvVXSXzqhLMNvwLQYmq8EPFJU692HPsPvPKv8owPFxAvr7GPUfRthjoYF2yMao3ab4MsvqB8ViD4",
  "key16": "27N1zKJLCeLhB5vLMcLncUxQtHSMi57sDgdiuFPT92eMK8uKReUbcqR8vJ4S2Ebubw1UukhaMJism3at8WZzfNjY",
  "key17": "32Kie6tjBuXnVZVxP3xUVWQfbZzU5WtfK8spjczFpjHFkxt96VR32T8E7mD8bYfDJN2P8zPspTQoETEVAVTJNKQy",
  "key18": "5Fx3WT3cNCMReWqBZsYweo36gKZqQhWV5FQUs9jwXCc9NSq5WVNhxVJBdwwAQLVRSUYpcELA3LPZ2VN5WHaQ2YBm",
  "key19": "wcZYGTgcVsd45R5DND3rbC3zCMz3QHS6E5rSp4iTQUxMh4KmrE7Xa46Bc5DQV7R9NBq4Ly8gfjzwG26FTSxHdas",
  "key20": "5LpJCJHVLo4hun1YetBjAb1ftY39QzNRwDXByE4dJJ7aSRWunMHLxZQpMgRipu9jvTVS3TjcGwXe7QXd7kGLNpSx",
  "key21": "4g77N4P5bjmf6we51aH8BbHzFqT5uAwZb6esP2oH4Whz4bovZYExQcNYP9apuG7EJEzz5BWZ815cuTKiF934E3Xj",
  "key22": "3fcZ5nvW6fysThLE9kwW4AGpsPM2x1yYcZRXiQFGB47m7b7zvAEo3ZhzDjWUR7qqzWVMu4vqEgNUNy2HzYBKMSJd",
  "key23": "59BeatEcVKfF4ww2CeJSeGpQwBjeDP514DpbBpjzVsUopq71ew9PLQyQV8GdEmWEzFZAmb33pwKmm6VgrVBceUJd",
  "key24": "2kf2KtNcwXZ2YJ5D4sDKtVdYiiuvNBzraxjgW38YcmAM3W7fpSVc5MHGxw15vxQhQVVCHyxCeX4chD879wzUKDGF",
  "key25": "2SfoJ19dBdJGWWExD5N1AioEBxb5ohJig7zFvvo2Yx93bFVNQUZqd8sx9rxvu24JB6tfCw9UM9UXZ4Tiuf9vXAYA",
  "key26": "DKHKL5EHxzCBvngX3yHyffXN61uWKKY3TAsVZPyD8Qa4abK3wxfyRCbMVJ4kDhRkVgTkSqgRfCyVUBjLyk9qxpT",
  "key27": "51qxZEzNJPR3b2TzUABMXfKsq17mGumnB4FBeuhpKutBhTY5an4oHMXB26XXzh7HAJFaPjqUMB7cMVpUUonUpUUi",
  "key28": "3yzBrVPq1nawRk5f5QHynGXkrm21FxhNhovxxL3jrf6otPZUQtHumcSGDi8r13AF3msxCEzm4jFcrM3jaA4cA7aW",
  "key29": "4oLNSgo32pug4K9oKSVyurH2qQHoQSvV6Gh4hp6LF1E7FTDunrR2r7Fav5hcxbrtyYffnj3csLodyW4Cinrx5nqq",
  "key30": "4J9rzhMw2swh79hTdTQwrcCaLgEE3oZj46CaANNpjn9ye6v44BHu4HVQTFsYgca6GVHg3JEqZWthNWXpsdYeWFky",
  "key31": "3HGfWrenzq5RghfqxCZtqinbKXuh6gweiZiHSVD8obpzD4DDr1Zu95Eb2VQ7bHAUQ91aKycLw9GKoQAJ9Lh84wni",
  "key32": "3MiDzTvgmAE3fHXCcNrZg9RLZTqCW54f9S4bSLWh3feoRuYu7BQUc12aL37CxZYyGZMvU4fTnw2nghpjQpSGY9Ka",
  "key33": "4RHgVwuk4WZhdNjNKH6VGJrPVdbB3RdfPKYQ7C3wFnAhGJZYDC9AFivKScyiT6rPYgFYN3frBfiTMyoZ4c35tkML",
  "key34": "4eh6xFBnWVQx3ieeHi6VAtCvyZfLWUA94U4yCCmph3E37jpMbmPBsonUZC5o1P3q4AaXLZXmWYsbhn5hQDkN2nay",
  "key35": "2CQPwAVgnrkkQFf3qj8mkAWAmRG4DDx6MSZGoDEsWq5yey77rKsSc9KbRC9gPQFz7xoX4ME4jFSUVXFWm7yWnrF7",
  "key36": "3cbYTfQK28NLYh3xAXL8mKCfWidxnMtFBMVd7G6K4MjE2XZL4w3xC4d8E5uZShn5Gbjbx6gEwWuY8BCSaUqxu5b5",
  "key37": "2KezT1Jn4vx1h8dFj6p6WbautJccnHV83ipcQdddaoSxjtUPKgf96F5cnAHxY7cm3iWBwkVFsUBDUGy826aD18MT"
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
