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
    "37S3duwZrNUFHcwdxD15GKxYQQBadcD4ZsNicgFBWotoTXqbR7pshqLJ11aSgJcBseFxf1eQsZ8jPmDy16bFj4tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CDc4e4SkdzNtSwEtuF3h8f3AEB693vzrbmVWfr3Cn7d9aMCcf3NjM8xMWpqJWbK3ouDuKU9ZEHHzt6UZyw4WSPN",
  "key1": "3MSUF366yYQZBCRh4otqd3M6By5ZGxXhkVXNJMGSJqf3WCCURzY5J8vx5ZNai2NpimYBcuUxo42x2PLLriM2Sjv5",
  "key2": "5LxyFKhcM6RcsoD8G5DxBpGVgxnPJbnwcctFYcKbdqzSJnoJA8LjEjhgUJ5N925t4pQtjQomemqK3FfPCJgTZkbH",
  "key3": "4XJQ8SSDi5h7A4Z9JPzYVh5picTXxTq76fzUM9B3YRFLGeX14JSG1p6k5KvB6idpwbCxGKEu8x8NuhL11qMfCQdy",
  "key4": "Zkf7hnarch1qGyEZnp8yqHzCKz3L4dQFehUwkguDqVzXKYZ9spPpa52Yiv1jqS9h69biFDpG9cqYSQZtHgqQ67D",
  "key5": "67GDzmfXC97ZPuAwKVK3zjT96g3627sngcB6iE6AgmSsxKgtzundEKkmJBN6Tt1C6HbLaXv9zrE3mPDVZrnJgpmr",
  "key6": "53pwUrR5dAmhewaYsQ2WWHmgoJxwqh7NAgSfi3qZWucQ53hNu9a17Tc6rgfbGRWWVQ2PiJC2gQk7Zt4BTkXurAfa",
  "key7": "2iWmwMnCCDXg4AV1VJTaS18SArFnfj4EupQAzXTqBcutrSGCcadnpvixdjZPmC82k2swUy3oMNvGYFhJ9NHynaka",
  "key8": "2tX333C1iueEAKEBmqvvXoQGQ5xxwoaJokdygNH4ACZJfrKM9G4jBA5YzvwthJ6h8LJfQiXq2SxVZd6KxHsSV6YR",
  "key9": "5Q7f7R6tDKeWZFbrbtsSRWshy9joxbyL9SVLKxtBcdubAGbjYN135VHHEPC4zjoN8rVyMVL5JcuUAGGMhGFHBuKS",
  "key10": "3bLwR7uqwSdHvcPvtwpU9Eqp7sgWNiGA3L1mJy56SXjnj8YsBM8SVTpodcPw7gUpyC8KuXwprgsnPk3s7yACq45S",
  "key11": "42ohcRG6bpT2XadxL6eaajvtQJoWgCzQzi6nW5xr1bhkDfAcz6sRYCxPBoJLEGrGjXerF8uxoTc53Dkv2hj1AGmk",
  "key12": "5TWoUSWa7fZSNeeH4LGkmbyG5K9wnrxQrJJ5sbYNmpzEJqGJZ9Qy4dvmhVZ1wHiGZxp8kTmk5hHbBriQJTB31VaE",
  "key13": "5KF6XpUttzFbmkL2S2GZy9wAKPNwaot9wnEPmHmuyc6kgSfwcmSUDZM5NMweu99xRp4rvcN1sfRjUU6JpfqMvAzi",
  "key14": "C9wyMkcQ6pgumnoPABi7BZvCtydDYpahDJZYi4zWd2JBTUmHewMuvK6eRw94zX4vqJZVQH528RtWUEgt4wyrufh",
  "key15": "2Wh6SwUp54p7Seq7z5Rh6hcritU316qYd9h6CS2q4849RL3oj4TijxtQcVM6m5H6d2brp4igroHaauREf3MTLqVr",
  "key16": "2upcrLEn1jwcz39xa8tK1qTYznKdQkKkPdi6v788CagTja1y9gR3hk18S88h9sNj83k2RepTHhZujtJJgNGdK9Su",
  "key17": "x1ST74m11wE3QV82XNjFk3dA5qv6ADE31rvH5PQEPZr5U4qaTsvGATFjnHiNrZy3YMjjuJERGqq5EPZrhF3tWc4",
  "key18": "2mmNzqL6iS8Wvy5k8XT3DQMS7kiBLEW4vHHsZ45Lz9bXzVgwwkRh6FT3CcaPb83tGLXtUWdBx6LpKAQi4CDpQnPC",
  "key19": "3tPcjWeq85JP1FUbHd1EbMYt9jF5ZqZi8Zgo1GyiFPYjEESk4RnnBbPvKGqeYYy12duZHhMhY1zjQnecUSEt7GGF",
  "key20": "2MeTcogXb1xY2kSgJnKSFzsKPUjVZ5e6AFDWSpEVyP4Loe96RstipBGsnUYurA6QU77irNybmAvYGD57TV6DsGHM",
  "key21": "32W5UpTw9uXpjJeuvgWAcC9fH9JTFenRob6qdaVSSS24uS9tygj89wPajQfXYtw7cXf9M8udaNhkjMJApV4kp19k",
  "key22": "2iJjvvSYs5t5EeC2cHDTsebe56rA7fFAafnP6S33nvJXQnHi92eoaZMVsZqzYA46MYMA5AVfa4s2HUY9w31yFhBE",
  "key23": "5hi4eeBid5kTsmEETFBhCgpsx9YCVETPfUndLmGykaMXXC1JQi4Tykh8jaVxcmejm6KbUfqMhbvrbCwwExG9Gwji",
  "key24": "26ovUpw18CUSyuyum4MDAm119ssWQcHioTC9ThwEbucyx9ZRgRKBjw7XfpRwnbBcxBLsH6426qJVhXSMstLwf8ys",
  "key25": "T7ZdgdDsW1jUw7V8bfxaxujGpa9BFjzVscbuPsP24Mf4i8a6pjTCe2NYr3mt4fHXibhupqLUbTvEsaiHPXK3pSV",
  "key26": "5bbHU7wzfBE4SW4nJft7SnW9tuUGpvsfYSmxcAuMQjX7FTvYGVyDWWHhCEDX39XKKcjdWW7oirdrUVAVwQ7uyhRX",
  "key27": "XxfxXGPYykRQV8C2wCiupBhAFj514UT2r3YbwREpSGeVbMrNdWqA4HEZSni8QZXkbDamCWzJgPctQGR2yXGLEgy",
  "key28": "5XDQoCE1nzzaf2dhLLgM8HpPLff77y5iuksxAPEFsujyfViatDLBE3z72RFpQKJ6BrJzkvMY4NgZRCGy1VNP89fT",
  "key29": "6V4haoMbK2DF8GzkjzA7wZ1e2C4c92EDsiKMa7sXAaeNHWe2CRSaNPh3wSVHyT57arEtR6MyhZvLxyxfmgDKq5e",
  "key30": "38vCoE63MpMGduygxTpZFAzgZpEU12R7s8DSJLHGSFJFiYvcpSWuAPqp7HcJSFYeYDS9zQY4nHfLS7eihXg9Nowg",
  "key31": "4AjbzteSvWDigfTxfFkYvTJjFmr3sLmVVHkrC4TA8SyiiKRCBuf6bcsZc9T31V6ikrHGQuofkMj4Q7DnQGqqKhGe",
  "key32": "62qBH7SZqGP1kzrwQaAiFvkb52H9sQuu87v4bHj9xLfC1DnVUHVnYAAb6ZmZ3RmN3bNUPsgYA4Dh73ADMZZGUdsM",
  "key33": "aWbquZcV9vJGVJP6bGmjLkxzkyGYmQEkniDRjp12dtnwLk3FQKVUgAhCCA6qMVA7u5ZtFSrAswsTdFrjjLHRYNP",
  "key34": "4pgseCxVjuVE7Zd21iuMyf86icGxjNFYVoxJBmr5zjPJZg5vck3fq7s9u3fo4SUyb6PL4rGJKB7wcp2v1o6WvbRH",
  "key35": "4ahp9TSYUxp35QvPrvQj5aqSX2qHA6CokxTgUWRQF5V3FbE7zuj91zqYBC8SrwWSJ7Qqd1uDHXcQgq2PzrpBbHf3",
  "key36": "5kk4ZU4hEK87U2dSYD2cQp8FP1D1TSTrBtjsHc3BYRJ54LZS7rXtBH8fb9A6PwXfRR1gG2kqHA6wiXDZA4pFBZ57",
  "key37": "4mPY3arCyvJirMauQNSopS4VyXmoffEmiMd6iWeBpLvhp8ZTZpmnK6pjvW7xhSNDmDqXemQDJSDozJq7KGSn5V6X",
  "key38": "2mwztbvQJym73xnLybEqKrfLMiddBmZreGDZkoD9MdgYjX35Q7m1RB6xgYbntQ77zy36M51meiU3bxoT6owkW669"
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
