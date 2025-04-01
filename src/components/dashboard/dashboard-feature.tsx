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
    "bTfuXqA79km1qE1w5BD7VLHYCXBX8ed5Btud92kpqjRdfmsJynm89XWSuwrGhvQk7E6M9ZM9bBZn7kRdtYY7SJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGD4NDdcFMAwFJv1G7Wnia1JM37wU8dkieuAoKhv2PQuDoHDcEr6a9bn8hS6gekZjeFx85sSL3h1NTF9XYvj1GE",
  "key1": "2ApPAvMmMkvRCTNnnYQwMLpqLw8WhkyEWmxgYuLpJgXZa2ULdd7WhVxdaB486Z56o8XB9KJmAZcQJ2fQKQoTicbr",
  "key2": "34CxpA67pwJDq4QuvQ2HPqgXxr1dgaXSTbAztrkQeqhNarpm5aP6475XV4eqWbxzy5tg34LiSFjTGF4n43ANtzw",
  "key3": "4sYkRsqtMutoG6RgrZQDProAPu1CHExE97F1Cs9xoLJCVa6vNfbi9t2V8HYD8PcBpdjgmLPspTbnZjP4yCEVSF89",
  "key4": "k3SuwvTCiw1VrSK1kbZjDwjNzT1kfQ7sT9rjKurLBjvx88vFi3AYA2tpqFT87uJkaTgmjQRndC1zWFG711LkRhB",
  "key5": "4ve4Du4FUyso6xKfdWu2J1NrQ1PJcVk9VYBeb8vMFugLP9bHN8ptJzWunFpcqEfMwENHntx4ArijXEXdb2QsexHx",
  "key6": "5LxMmCnFvu3H4nYDKyzBZTuJq9x9RLTkWukc6Gpcd8nBNZaYx4vmjKkYpuanbmt9j8DiHAb57MvZTW36LEzH4gye",
  "key7": "4V6oCn5i3yLhEsMSX8nhb4xUXShvceKexwRm8vyfrec6hqCkDeNPApmVaUJTJxJ1DnHJRhN7WSWpMV6NKP1GXCqa",
  "key8": "5tg4GyKw8w62yCit5wEF5BSeLWftvRNpzogfDhG1kYh1H97fo9jZjcyc6FnYK5AfdKx9o2GhjY1Uz8V83vrLPJPN",
  "key9": "274DXJUVFjVjQTWgjhFfi52KDNT1TJ14NB63RzNip5rC1YEMQouy5gM1e7DBDoBYFN89unJEtXdbh3mLLsJgaSg1",
  "key10": "4c3kbMBpJpL8zRwaGorsRgVnyLk92pnb9oF7EF3JXXuz7HXYjvaaJAMitkntJtUvf6g8Vtii9yGAo3wLY5R2VMkd",
  "key11": "a4PrEkqYWXUNaW5sT9s5MRFPpkJmZKSd69gxG3mUJbCk3ezLa7RaZ3z99wMeJRhxrmpq6eEa478dzu8E58K5UQd",
  "key12": "z7Ev1vzh5MjsuudPP1YGuAoECrTyGMGKuHZeUPMXrpYzKCyDHPEEGHbA3nAtqPMW1cvD6NSQwUJCG7MWJcvDDTq",
  "key13": "5yFvxxwoY4mzzAKmGe2TK81mdXF58NvPt8BpUiXzAaMywh3eTB62PGTkvhFTrBpJGK4VdgeLQfjk7MUADyhyHcVT",
  "key14": "4Hn81zRhGayoUXdd6titwWCQcxh6D8E76NNZuDNmchHt5rh8zuJQ2qnJmT5JoR1ozVFNFbULwwMZWPWfNrArJ6X3",
  "key15": "2QLnZLZZNsSzWcDZXPg4iZ9MLrTYWLXTyM2qAwFfd2zWHmugFSveZLVM9XM4oUp7mVq2UxY91PcPxp56MX9gxUVK",
  "key16": "fFU748fsxobS56dGDL4QGVZJ3mJiXM69zBFoKtbgrUJMRRx7QqEGqaWsJqVznCx4SAqDMiWfHdU2ogwTKoFbQV8",
  "key17": "3uvJLRYX44B6p7yEigYgRubTZ5PaNq25jHeEjgaLYwMW2uqYf7TdPskcFrN4LyXNDqe78ioHmB7LkpMzV5qHym3q",
  "key18": "5aGQTufpwR3fqCphfgKyhG68BSQRNNJBQbp2qX5vxSwN2o5e5MC22rWuB1NN1rAEhjE9aQZ67tSA54DAmvuDgk8H",
  "key19": "5H4ScwGMgaNxNtgxnVtkKZn3ei7s5kb5CZZL2Ja7nQBG6yLGf1Z98Jbas1oKRssJEzPYwU7W7ASthzVzPPv5tzEo",
  "key20": "34QWeK4DfVdVV8SUdTKXMbp94UkJbqGvvuZyLaap1vNzT4qsFuji3n1WXYdPAQ1cQ6QiyrvNGF49728nER11rEXk",
  "key21": "5C4aqp5tdjX2nPQtq26eciZ5qCcy6YMXHaKq9t33TD6RyJpwuSxj4jKExvZk8ajmUbB8EsWzWL7y8fua4PCGZJum",
  "key22": "3zxqdCZNNXizGBjFApMFCCDN8Z9jvvSjyrb6STouKesawpV2CfyEm5X2e8MNKyTXAhh7myW5a48a22P4wn1YkDDJ",
  "key23": "4r82z6oxV5n56geryh2SVrrGYidEhhiHAcnmwhhjnxmNzHs1WRsJ2M1bgWgnFQmmtTfKtbUQaWsWXfnb1pPZfSMg",
  "key24": "42nW89vhVEJTvdNW9VwsCrd3Nuh1GRZjpGZxxRXG86pa3pQ448oEzY4jLVQB7Q2S46Mjz2HY3Cp6SrkA9vfWoswB",
  "key25": "3tJHVYgEtTKriMd9ZMbidLihZwnsZDx1wRK7jPDdhz75HJd3S8yE6wp6daQDeGGR1tdZqzsy6h5RxT8zYnmiSqpd",
  "key26": "5pVmvKkKTPydhEkAdy8TpWkTQSvHFQBBzUJPnLv8TMy1dxwWPkUHSiqjyJ1sYJXddv3kc5R1Qitp6vm6PQqFKy4j",
  "key27": "V4hmj3Ey3RUS3DedQh3uvqnvrayrpJqRZyD4haLhtm5NkpuFu4CSkNgAiuJr8BGAqP72Jgp3u9Ea4LPDDtEV4gf",
  "key28": "2UnkJtXCwC6dKD9oVLDBkaXJa2YZT533F8SixX8RCK6EwWKWQy79zNtMjh9s6PJeAjMpj8kfgohunQMCbUwLVTK",
  "key29": "3saQixgGHbWDdU7gW5j9mPvaiQLFwpABdnn6oHdDKfeJoGwrt7u1hoTnzSm9z6LUdA2idTVWMbMQ5hSfybyoZh5C",
  "key30": "3fsix63cVNHrgoq88rKcQV5awD5DqM1DVTxqeD9RHTCu6rZzeNAvef1mNXW4bgvctc5cupGyarCLZhRFPpJpNfCV",
  "key31": "3fSavppSezmi9zcCSHD2sHQtq2TtqniiumRtPQh6apM4nT2rnJpPu2Xbs1R5mhE4oTe6qbiddgqCeqspkuwUpvX8",
  "key32": "63PGqTt12PpQkdTy9HzEMnURgJKoRLrGJf1MgwdBxtxzFhaRZXaDNhvHs8gFJj3mTo7LX1DEGrPbW8TvTqeAmU3W",
  "key33": "3WZ6dvpfM5R3dX9As6deuPyn4rsyAodrifVYZqpeUeqKy92gNg1YU4cGsuG3oqKX1LP3dnNm9NQhwuKeKAKfG66",
  "key34": "nzW2xEjkFAYW26s9uHTDYfQbFGMunYuPKYwmFh7P6DxvXeQhDznHSsZZD48L2rLCy3C8Fvjkb75wZMYvd6PEwEY",
  "key35": "2zZwnqZXhy8Vq5ckHzzrX24mxdN1cKJNXxyQ69KYAxGQGYaasuSMbpNtQ9BfjzAjLXV2TSacr7NEd5E1bdUL4HyK",
  "key36": "5D3kCUfUk4oKDchoWtjw1m6DvehCLmZN1LDEaP7D2QU4VbGxExaYGWf3WbaE5SrBTZUAa4E7uySjvKrTwK69UbmE",
  "key37": "2BqaKrgxG7h8VCUb5ZWreQN5bkGjTAipzsjJNA6WBCuzXqqD5nhGA46pvzWtRkC84UwpT32W2ZerRhzaGc4cfYGd",
  "key38": "3p1T7PKdYB8ApuEa1GcpBmDJnnKFE6UkuhAJXQPjzVbpmqQSsG3RZkyyX7x3wLeyLHZAw7EVLDrPv3BesjsNMeWE"
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
