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
    "2aS4GbFUoytQRDbd92q85fkTG6YoAWAeT9a63ERLoYcpzyNuZemXp72Q1XrvPmvSDJnxSYXtHzVvHwymzpJt6nFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4auNP1Fhog8zbaUNGyckDsDyKNiSuiEBD7tyREizDffdJgn345NRn34PgaphQCWsU81MxVwrqwqfpaByrhTojYod",
  "key1": "U28L6n6h1JcpVQJ8iShxTWhcC1i3jTVmq71z8WssSv5UJyj7W9hK2nL9JAX5FpAapDbkopMcUjXZjjqHnRVQGUx",
  "key2": "4169vZE8ChSwRJDeQ2J6Rw2wYgGiin76SaoknNe26K7DVSsWQRRhwymT1hehWSCuLLeAV9x5urx7A3WFGFtgcE3T",
  "key3": "4yBWLYKDQaeCqCF1KKqakE4foMFYw5iq74s4jtH9dwQbiE7hbkiwGusPsJdMAEbygoi11kLS9bbEbwm2oRnmEeXz",
  "key4": "4rN7wjAMTDjpGXgnKKuKrFfLaT2JbSj895jANXmwrQYRGJQzRHorVSAsUEavnJ9HJMw4EXKPWY7P9PERhYW9zHbE",
  "key5": "4WKiHfAPFj6Gm7FWM4AWc5UAzZ1erTy6aa5FKQVaGC5TGjYZUvFqxHWJcPKNde1JFQaNy3Ljd595rpUNbzCdr3xr",
  "key6": "gKBcFLFY4eeDEE6xtK6RBohQKNJmWgrGSMXxzRdo2KtYXHt2GPw1MdXTCK1VXQieMsu8CpGii9EkzRhJctqR1Pe",
  "key7": "FrGzvnugyjzPwm1GUoTmGq7F4vJDvNisonCvpf3hvYm6hneMfDMpScQB4pd7MmQ3VBjZVxYuBHtyHypuJR3Nmhi",
  "key8": "3VBZfeBS7T9y29HPovjqqrRzABv3ifDJLNzGxWaVWdL6uB8yfpYp1S4h4XHG4Zq7eG4vZFPnpYbKY3kYEuGLgTWP",
  "key9": "4GXgVjkpwuCzo8z7FFJetqetYiF2FukpxRrVHZypLA6LSo6VtFMSzBCZnPsH2SnHsesNcAgezT416d7uuCa4UWPH",
  "key10": "577ZhNEWSfLXKaeECy9uvHwd8pmSXqccZTyv9Mq2Vm2ZkGwrVVgFBZbCY6sVZs9nfxxuEqQ7i5boyr2S6YFNqqV1",
  "key11": "2HWv1SL9exoBuD82DkgGriAvxT5fcTfFMAPYvHja1vfpD3suT6DEp56KKr1obXMKjjzS5FTaqaReggfJpLLYtQ5L",
  "key12": "5yqkBMYzuD11zc2ByXUz3JjTRb5RJ1Lxp9Eu4g8sUsdFoisJqyHj8fQ6ehGNcrFR3H4BhuAH39deADthWXeDuEhn",
  "key13": "2hiD71ww32sKNy4PK6UbqCdtxXHcMoAwZRw4ni9kW7SNRXaX5WyyPDuy6Yxaa3WfqTm4BGhrrFFw54UaZ8E73frQ",
  "key14": "2pNWjhi9y2gMdA31yjzJB67yghqy5FWinPw8UH7QHZ1hNu1bturqtn5STPZ4K22s7Hmsj2NqWYGaoNg3gMxAhPX4",
  "key15": "cJvXYQdJdax4TgF7LMHVjBuEXa5jSXYBoCyvuW4vYvrL4XQ6nJLo8jLGD1DfuXWGoX5uigYZ9q6zMpVwNjnfcvn",
  "key16": "2TcikgTb1fBbond4Q2vrnEVgGJYghwrp1vb969Y8dNy1cpzGDhquuNdCZ5r9ivmSCC5ujPcZDMGWzSWrJ2cd9hSk",
  "key17": "6n2odCgTaHsuL1XjezHdUGScNPNCe46SFWjpWeFTnaWPgub7DVuCHBWLuN6detLsHCURiafK7idbsW52H4tSobs",
  "key18": "5JiqWkdFry4m6ieeLrGRGvxEh3CfNVpKSmZ52Xh1EoYZ3TMGrLcH7oXGnfLpFDHaTdqqRG4yJgwyZwUV772Gn1xa",
  "key19": "fhHn3CquNHqBr29fDA3uJFF2Y3uWcHxYoF1mifqzRCzP57EXZMhBUeWFQQYA6knfXUz9Se4iPdfR2WPtqkLNtRf",
  "key20": "b5mUfEGJpLfvEYXRTdQWHQFmC5PPcvn6FTdvmHGqNMrHyoMu4JeUcoaMxbyXmmVfspqaSSZjfZyr9gYxVqpEZL3",
  "key21": "5VzH4nxNHuJqH2NMXi8XxFgW4kCfzePgzuKLc9K8XXxGB1bjDY8AC8DsfUbkSmzVAsstkfgtNcZiQYnTXcP9TUj8",
  "key22": "2xQAyQB1PTw7jp6BmzByG7UjACDSvKuf39YLj3oT6HTxyBMyBG4f6vTbBPwv69tmCiDrsCRFtmQPoi5xcMYjuRKm",
  "key23": "5bEnhvV8kXkM5ydFv5fasa3nuV2wrFwW18n2hDDLaze3VSpzinmu1rBygv3j4auMuEp9q2Qs9WA6sR9cRGKFcjtU",
  "key24": "3PmK5owtdrF3UfMe8zEfUbDKE3VwLgg5Ub3RcEsA5A3CL8SK24y8cAamvMKxjQxXj7KGeJ6DW2LvPvFWS4XWJwXJ",
  "key25": "3U5Pubn1YLEDca7PaDVMNrhVcXJMyGcaZgpFXHw1vwZrbYvxB85fZQFWwnucue8tH3WoqkBfhDMaSoHqByHPiXgG",
  "key26": "3wpbPMESADNuRcKmZREDPV5fH16Q2kXCQ7Xy51xpGXeVHaA6mC2jLXWUCJTLTte1YCxkkHwWoBHmz3xnFXndjagN",
  "key27": "46rjvMtCdfxwgigExZmKDSsNBUadfJ8v93853r82iYjtEkyZLS49HhTcH2JUFK8xvVDfwwpvZYZ4mRAf2cJv8xb5",
  "key28": "57Y3QEKt239Pow999paUDBoi58bjComNgHwz4i8paZ8W5max4K6ExUM6YAomPvWkiLWLiZcgjpCZwM2Cah3Tf6MT",
  "key29": "X3px4T41SHX4kbgmTPLUawvxS6um35WD9xaqceZ6M3teLB2y7Bd9fXVe1k7mHpqR7neCU6CWdeGASWfoby1YJ7L",
  "key30": "4kGvLJCQMCffG7w2ArFJ9oiAbrn4muNYxjRjuo1jEUrokTT2UTZijEqJrnkAsgfrXPgcqPoe5gzgnA1BvkGBJZej",
  "key31": "33QoKm4rxt1MbYfWpWyTqxMUA9XUqeHJZJ4UqXuunPn1F5RcRC5gwThhi7PRf34aQjJdihmTFuwrPXSreMJs4VE2",
  "key32": "hJuSvfk5ep9692euDEvg7jvBUYQKm9KSeTHfZF6bGRWwaabZfRDAq5VW7ug2qbL3Qbhtpz4jsNbTDNhfHmUNNPW",
  "key33": "4TvMuP7YLk2RDiH7qXtGKQtnLKygMKYz38UGQeJkuojtBsvz1yV1iJHdRH67LMjtjdFHPQtbhCLMh5MCk3c8hE2Q",
  "key34": "3cc1vZnoELBU5BkNzUFf8JKNxGF1ARjZ9p7dpW1W2m7J3uuCu9HUr5jMQjSbGA1gjgFRwAxz4aRnBjTCVsV9Q5bK",
  "key35": "H664NM3FDDnzbM3725Q2Eg3GBk1jXz5kbEMMvdYH8FLpMt3i8bGWMmaesvF4JHMbBJgd7hnpCVPpTSuafCNe9rL",
  "key36": "4tMX8mTskUs9WpAo6m57jpSgkFVquyr55Vp3ZiEkK6zR5W8bcP6mhZ8igXy5HjJ7RhFWoKGvxHX1yXXYLWAp19VY",
  "key37": "2ghuLaNv1ta1h3zLKfdCkKudbZFtWDwFppVJgk3qZFZD31XFZn6wjvk5mjQFrSbrnLxYddz4Sr7vXayff2ZZuAPs",
  "key38": "3aTy2FYjy8Kvhosz4iBc5itGYqPZseeyQAKimo1MjkHrap37wvLQhy7Bp4TyW4YYNA28vQEDBKtT7UW8k5CQWtnj",
  "key39": "4C2yyxnmvDKv9gxojr997irBeHvc64GqrBjMf9g3r2Zqxq74Jsct3YvrJ1FJPBigMeSWiU1Ux93fgzFLodPzrEHf",
  "key40": "7nHrvWx1L7DnjQ8XprxEXbezRRzajEiekYPfz8qKp3wXW6qUbhzf65N3thSkfCRQciomSTtXatZYXM3DVYv5gr5",
  "key41": "52BNCFiK9vFQtowM1dS1drFLFKhWiFyJ54uYAYTn6ma6NwmFGVSMUZaU9YjD5Z8AdQFhBxJsRsASADH2FdDQjGMm",
  "key42": "58q6xWB1RrzLTnC7musyKcznKQ7fPmAb5ds5damETWEJqJyKbUL64ujSVeyMxhy3693P6xFautwSvxAvayXXXXMV"
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
