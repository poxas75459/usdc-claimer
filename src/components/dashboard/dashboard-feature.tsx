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
    "4jHegXtn1SCUs6tG2mZaZhuxQfeSfvTKoR4cLieXGNpjVSj4CvSUahDUyESvz95WPJeb28BV2Mu6BsVWpxoe1G6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ogWUhc8ifcckcxbb3VEi69bf558ahsHUzsbWsyxWPbZAgsfvYLheYSVqCUzMX7H847aKjAyep76sy9UXutVcTf",
  "key1": "5DKAY4xrHbfe8nbFscJ18KtDFhJJCCrqDZqJ1tHSqDWoBxsKL4ibrf5V6KsJMzf7U8udKoa1dpEXJny16xiwLspv",
  "key2": "5L6LwmHTwde89hz92GXsn1BuYqVQKcWhXTPAskTLhNy13XADPHrG1QBjBp455uzL17SHAzsFNLYLA18KnVCvsxWg",
  "key3": "oojSbPeWDJdWuQwqc8AJZDqqjmEmjAX8TfcvnyDinhS9h3L6ognr4MuWkCeWzs9mswuYE7YAjtYiYBgJM5i88qX",
  "key4": "wM5sswPyMeWi3785e53epUjUycKZBZQSQUJpcnGMYvAgTdr7bKWpVhchZ3Y4Erwu9FN9hUgeS8owMTgL5KKaYP7",
  "key5": "5qPdwPCuGkDM39r7mARcrzNjnmkRFgySs36eL7ntfkr4QSRUA68Yh22XGZMB55zwzcV2cQE8Dn9fkK7oP8Ayg8HW",
  "key6": "5PeD38w2wT4CBzQ7diqWQMT9nN19gSMcKkC37rkW5sQ6He1Cm3uzM1YTAiwgzZi6AymLbPAhefPcEWpcWL2tKn2c",
  "key7": "4ARsTg22mBrDUqPc3vkNrcw7mKhUy5A2D4LTXEZgpkrqZ7oeu7f42FM5NQmkQkNcvUrEX4hRYVyukRY4zxs87fX3",
  "key8": "2woaDu8hnk4mwW5b96pdR6svEcMMkrJ9zkBTSM2PDjw5SX16LTWUQmXAGvhNmBSfqGJYpAiY7pMxwPgPuCYccG19",
  "key9": "3ap2gyp8CKeXcHt7UQN2uooz6zWV6ciwcp82z88XXMZfRXGsyqYY6NwjhTXsaZ2rq6fEVhpCf5zMcWm7tJPiWAK6",
  "key10": "4NvXWtj1jFgTutZsoksxcSauyG8RJo6vstZX81BXUY6gHiRL23Q4Dg3KmF156dHyVbGRCdiN49vhKiDEZNk1Lmtf",
  "key11": "4pR4g28uRtGasHcru6TBTFNZdJ5yNG35DhDzKzQGqZ5iTrjPzEFCiEt1YFX146Cd7Wony96pnRczjM1B9CaBieQ",
  "key12": "538zu9Loe2jwV8PFyDLhPxm9SYZtAgr9q2RnMkubw1LzSQt3ib8mjcQu9PLtSkWriBkEXzUB2tuh7ojJ2V94pcyv",
  "key13": "1284nF8pp4RQw8eWB3kEYVmBc5mfvvYjGcmF3MEEkMsH2owBaFJn4BV6riLXqxKFafTC9xt2ypvM9WfwKiVSmaBE",
  "key14": "3cDmgoAEA12uFduUP781wvd8DhpnHFxUR5KjoUMgHSLN3sUcsePkhiBfJrkMfeN7isucHSStGXftqYxRayf4hH9p",
  "key15": "2p7MGkz23UnqYJQZjQfnY2N6WvtHsuvFB637PKLXAhindPYonUtxo1HmpvKAeL7z4taRPmMqnhFCFCwtN72knN4W",
  "key16": "5UJ5AwUeiTKov2EpfAVGjz1ChnBEiA7GJAptEChxpG96v5Qmmr2WY674QZL7bh3DgEzJEN9FNEgoWSTL6SV8u6mN",
  "key17": "zk6e656VSeZ6AutymuybvW3UGHuJFvc7G9vdNm4Rw6BDu8o85jmqpapgBhXZbJRhR7oeXgYnR1Qp75GofrQkhAY",
  "key18": "5ngJ9j4Nk4vMaBnLpWdY9HyUKzskZzVet7UL9roJ3RfBFKJBFTG8ufqutfqSDS2koGKeQGLQo1gt4VC1gX2HZBtd",
  "key19": "gCFvW7EfAM8APyKctqFtGRYc1Sh1iyxE36FXEbcWsbuRRts1awWQLMeirL9uDDJBNo9estqKSCzD8gk8bPZxoAZ",
  "key20": "5FxWCpuLGwPSj5rSWYZDVCeCZvM8kGxbMkDtkpYkChGd4cB5PHqHAxdRyhCT1iUjvivj5jS9urvbtm5KXMYrDQRw",
  "key21": "3Ntt1awu28QLzszLgYgE22uwbBs7cQCYcMMgpndFBZZrN7QQxRRk633BrDnUuQnv8GttBuFR3pPCVxbEScFJfxKB",
  "key22": "64AFqR4769PkP57b5svQwCfsDtCEDYuJZP8rLfSfZH4zsdjn6rbHZVFf5B6ETMYMvXgrmZMJu7HJLygHWBszcCoV",
  "key23": "67HraPnn4XxkF9zq64N6aLB8cAQSX42hu9HAWC4jat8SzDygFHMihY52tvE2Z3v9xWm7pgt5HQrhPTxwKSxCWw5J",
  "key24": "4nZaRj9bVdnbwcXJyZKpYAdmUPyQJMz8p9i2rDsfTWAYErY4PSi6QDer9GG5jAR7eL6SwzWC5uXwosiozp2Mr6q7",
  "key25": "45QRJzY81Hyt3MiMpN8e4e62LspC2F9eXqwtGwtbhvkUYKXipAswTy2VRMSr7tzdqRpD9tj7nPGCH9zqQHqjWceD",
  "key26": "3CM39bNiPAVQxyEywaEQAQ29GB2fy261UBn5JiKV8HDHZCgACMvvGedNjB25Pfq1BYzwiWTSw3tJ2xqJZxLYpTDQ",
  "key27": "5nsE7XUX9Dz5uNkvhYr7zGEAzgHQYmbrM6iY9fHn4h4vmF9AQ9HH52ezJQvvmpp5pzXPDYiu3wZ6RoYzux981qMc",
  "key28": "joSLvrycamSYqyZXtYi3trQjwGf6x4eMNhAzannei7om1LqBrzqJNPACcJ2pgmkjeCN1HEJpoeKXbsUWpWAY4NW",
  "key29": "2T2WLc43DhHJ5sC1hyEaQXQY6t4hEH27Z64xvj8kbChUAyCMAkejacVkdxSr9UgMe9aScm6tnNPa3uoN8yky9q2y",
  "key30": "2Jh2e5jjKBW7oKtAjysKV7PWsD9YNzGucCPUizpNtgNkuM5NnXPjKhbAUeJaCCU51AoBtbuAPWfBrLRLPQu7gWhG"
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
