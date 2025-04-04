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
    "hH8DL5s7ndGuah15PUvVt5emL2fPuEwGtrM8n8GyBB3HZzwj5wSaYSMtXzL2mXecHfPn2AyVgkFgFC6hkbjCrZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yx6HK5AMENKghF3k3rfbMDkX4w1xXusUKuWF4GD8hueaRjeinggyKdQpTaSpMn5qocPABbjTgLKdHrXQG5iUuta",
  "key1": "2dgVAvP5rqsZmfFwDMfJVERNtGNzRaqAb3X8mq6CyGtNeWsxG5DUk9Xu4mxrWWtdnHQTNhp34ABxMCGaUHWFzv2n",
  "key2": "2BMx6xC7pd9crn22zoRMsYDig18D4j63MJnpWMxppAkhRsSianUMBYX8JHo5uReTKgmaA65TeWbP14AWxtcL56eD",
  "key3": "h1h3GXqZ9W4fQz8dVARxwQazoZwKMbyeCqA3LSzVXoVo8ekPJbJhwuAgRhttqj5Lvm8L5mj21zKP5m4yPKAu23P",
  "key4": "2TVGk427RpRSFVgoqJ2Psu74kc5Aqo9no3kNDQfdSp1bJ1Tg9sWRZnWRqL6FU758vAvbircA9QS6KYMUPLa3USBX",
  "key5": "5SpVBGShPeu6qYPUBnfsRmqcuqGYh1qJh88AdkVSKATdqQNWGikNszznUqWbEh7Eo9JfqyCSYy1EifA9zmKwtVKX",
  "key6": "25wEVaAPQhmhkeGvX9zVWmXPCArm48jcJXb89rA12i6Mhsbqo8qzqEQ8wqmyGuBHfe2qtkyyoJmb9i28RJQC59XT",
  "key7": "3gUstu3XYfL61rA6t5wTEPd2Wpqkg3Gcbmi3Mjsd8sYcfFN6NVPtxWpSpom3LHKHoBT1NwcqLLzYsh2fPoFCj6fn",
  "key8": "xpuwRFaEef7dCcZL6L2p6XhR6Nf4fatZ2QQJ1sLBtKLqa24ibj4PrVZ7FA44faUZRV3a6RbUyzDgxL2irZ2FL5b",
  "key9": "2sSFhEx6wnMRCqGgZTKHnCpeqfqoaVw2qZmXBAftrSxnmyvdfqj4RaapM8ZKZjYZxfvXpCFgzonoP1WzbaRpUJx5",
  "key10": "5XPCvKjhuZMeQNgJVtyxohJCMFJ2t9JXrJAFt5sZQQzRyDvbfVCYuPx261HZgJuxguhdz2UeVv4Hpf3M7UqX8VXk",
  "key11": "4tP6yQtLh7D7edDTeYoHBw4GicHKiPVb4c7V16JJhbEm8oz1Y8phQRzC4DJw9vfbagYyScVjhGZ9ZPFDUCZm87CR",
  "key12": "tMgpAwVUeBwJW4XkMB75VXjujZnbHydPtminbid851SVAcF94GTinGf7PU2iDpmjWghjfF91z2Bk3mGoirpEdsM",
  "key13": "2FqXgAAcvwR6YLdFjZNpoHJ785t5AP1nqx5oN248GJihW61tcxtAkYEATceLL4scs9GiZoEiESp8MDTzqSYof7xu",
  "key14": "62VYsjMimV8mjGhCTPFp5HyaL8v9GfhWGYUu59cS5scNTJbnKcDQiUDx5WZwiAwB6J7P3gaTwaVsGG9dFY4tS6EL",
  "key15": "3A9godTZzLL1BAsFN789wg1LNbRQpKLJEYdkYCM5fTUYu8iZUgwP5Gi2g4pr4xoJ3tRtMCKyV3gbYDTMb1Dg5PLj",
  "key16": "3sEEp8SAhdVPw9ontWqefMETqPjZDMJerMRfLBqBTi37j6o8GwgN7bbZW9AvUDRhm8oNkAbYDJ11zoX1RCesUfnJ",
  "key17": "5Gna8na7vQuMJL6LJh3zvcdDkyfz4H5fu1RzQbYbauoTe6kDGBnfwJe9qwRUEB229m9o75YzhUbKe2ryKeHjSQPb",
  "key18": "2tt87kfMdV8Macc9TYnMZNHjBNWnBLcehZGisc9Gf3mHzbsH6Vv5xbP8mSfKGTZdQhdiFPjMLENE8bGfwBDoeFxm",
  "key19": "7iRndLjmuXR25zeEK4NVXJqAZ42Dtv31T1yVjEmYiKRN6HJxxDRSQR4tyejg2YvokkDnSx8LwvJjzDzBmPGYVUU",
  "key20": "4wnyp3MEyFc8HTSzuW16kd3V4oMKcnbq8FG3dTL6VEtryVdDp7QLmE6nym1dv9Az74dfu8EBxo2MsQr6xLj9j2c7",
  "key21": "2Wm2Qo3NWhCLbBiRo3cVT42L6QGuCCqF9N8x6LCuLcYUc6sTmWLVVkcmZvXStDa2iuZQwFrDY8pmzH4njbQjxT3Z",
  "key22": "4Cmp1WrjHh5xCEmnfDtZhbQx8eWNb1Ji2YdaSxtPZr5fEgFhosPhNbgyx4ZxKzDqJsxBJ4MGZ5cwYTsDzLovDWAX",
  "key23": "5BLwX6HUsdKwmSH1FQRHVTdVvV3bEjCKzX8S3uYUFnduRiWqBgWtvZUqqYwk1Nt7EGKY6DN2HNAXPmRnY7CWLEzm",
  "key24": "RagAFBe57VAY4qFjuck1BTAoeTYUb8zHaLJpguq5PkEqwkC5jYKTVAzwak1aYTfT4Tw4YQLhbsNpZr8fDyecNLY",
  "key25": "378a7fwPNBpKsbPL74pDLFWv9uQy3oJ2mznfad9t6JDbyviak4NKCf8Vm7xY7oEiJCXpAZ5hQaQDq24ee8DxhaZ6",
  "key26": "4JTGVFeQHg7oWrKjN8wYG4qD8w7bbRDi9B782USmgGh784qUFu4nwKqSyrF7czzxXgxHaBcLvS9SFPzvZV9cVFjN",
  "key27": "4RZ14QgSdiXsqJSsPHAnBWSFdbW1HXqHjBtoYH2K85xij82xNHGXEr1r1HXyGp5pQthVvZUDxETttvhzp9TQ8Xjd",
  "key28": "35fKcC7nHTNT9Ut6AHG2YkBuso76K6kmXX8XWkRvUqhdDzUJcJEN16LNJntKd3Kec8kbPbc1ToKPj8YfGSV4xgNr",
  "key29": "3zYW58yUxxuA61oB2xFgQmHqu2LV56KAfeENvjHv27Jd6JBGNUDvG8REpPgomFy2vnCtNRnDPnXrXfWKXWouNmA8",
  "key30": "4zFWqfCt1mSvETZiXzd3gBsbQJSdVNwLwWJPAt6oW37wQLhX1M2QypbmnuPg5pdqEoMDpYErLX7Q5utavip9ePGR",
  "key31": "5xMFDvPYZq2UHtUnNVK6t6SdbM6w6XzTuJqkeXix7uvhMe8et9yhkCsE2bYjQsUqmW86biAkbT7et6Z6voTMCL3x",
  "key32": "5atb2vKM69JdfZrziYyrPGrC4rgkzHMcH5ZXsgEKpn9C43hhKjLjTBE3sTe88k2KKfRyRBNYjrFqdKCWB8iV3qDb",
  "key33": "2qVqcBy1msDpnicJg3SJBKX27ySjFY7ZuubiP5uQpX98NULZmQv3fBFgettndE8VBDQ1MP5KKGxe9WGLEAh49S6q",
  "key34": "3SS76UbrZnED8QHGoV3xRqK6mezGmsLyGUSicUro3FHiGd44AUZpY7tTgNTAE8QzJhgqAQ1MnoJE15H6z7NqpmLK",
  "key35": "3fjVCuPLKDPgX3hh6arbwLZ3ZfPYyMLoxcDe8EsWmFeBmo8sjso6L6pkomfcZxmAvdYWWDBZbQaGK1AjDTQghfDy"
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
