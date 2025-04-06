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
    "2Hf5pHvb7pebqTs9gkF86tEu4MJMgHchVPJi8VunyXQCV9PeuyYTzPW83r4qe5jGbnh9iQ1V2ueSuw2EfMJigaNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42HG1wAwJSSVMJQRXGpJba6EzEpPWhPfUnrnPG2C3tvdgK27ZGtJoTJpEfcnisouSfnExTgvfwdsJhyZ9LaEgvkv",
  "key1": "2rYB5dFHCAmcat75yVtXjMK4LcX2f2mi7K2AGLS7VGyT46bD14eSNBgK6UaGSzaaHYVc8ce9JJ24RxHnf32o9GZ8",
  "key2": "n6MX28YfDBn4AwSDPHCqexPKYtgp2c9o8yX9EHA9p4KBeMNhAK52QN4aKh2iFXTQpeQKUR2eYquNDKd5S6BcETM",
  "key3": "UakVLguBXjLbc5psvTFVYuaD38oVSZMy69GqfKjYEFu1whXZHPkcPYdzQ52k3vbJQy52jBhz6GgckDfoGnLzjJn",
  "key4": "3Jt3jRJZ68xF5cuMK6x5oTewGdfMSHRyCBxMoB5TtxyKSCnrXJmTN8oSzsFrSb5B4ScaGhvYMZn7bs1wCsQVWiUc",
  "key5": "4d52WsAeuJx18QDxaKBhX6THvMhGAnT12S2VUEWWWvgaSHWhGKQTL7VwpQwcSR26YEZTfkdKoc2RVTbSgvm57SGS",
  "key6": "5G5Mhvt9Fu7Cu8QuxYFJ5H5B5M2g96s3LeYgK8Ae9dwKru3GucDvcYN3x3xjTUfr6iugUywQPDxJj6oRgEUkWNPE",
  "key7": "5CsxViYpFxRGs6SyPEdgvGL8AWBSxsLdHetHg1DB869BzNKhGA6WGmnPQQufDKtDVamNgiiP4nQAqSSxjUFMN6Y9",
  "key8": "2mVcAV9N2ibs74Z2Z5TJ8rrGphYd9pQvV86X3Jm7G5pojvf49efxjUAPJuLQWuWeiSVH95ENfKBHur1Y1VDkY946",
  "key9": "2f9tStKq3skkcL4hKJa7K57Sh8CDAHjmEVoF7VPsM1DQN3Q2SAtB13kWvDVnLrZucxkLyYzC1MVRVcKaDvK6cxh8",
  "key10": "3qP121kEFN7RCgGVdi2tmPomCfeiYHMG2zBFTiPcqbxmwN3aw3pJgt3Nx4CARJH1SEkRN9S7D7vzdFXJ4hvqhaki",
  "key11": "39WUkX6WJk9nvVYr8cNfRvqXfJHEGfzFMvLQdUbDzHn5FkeLWmdsdE118e2XQf1zjuvH2eMm4J8mZciXgk7wVD7K",
  "key12": "2FBG2FiNKQ3A3AJqWuzaN3VKipMjh14R1GqAbN57ugGt2EaMquYvLprguq5wgi4cX6MTKJrkixbWMwVgvz84hTw9",
  "key13": "2LQm8wUkAsTMwzGdAnHibXcjcn81FnrVEmn9cX2BfNNSqCDc67gkTd4jTCeJYW1X8a2m11qvCrnFJQxCMWuT3cuc",
  "key14": "2R3CgAtyMN5dTw17vtSudTFsdAivUXUa45VBnCyHsburrDtvMjHWJ7S5QZtKYVgiBq7X513A2ormeAN47SEM4ew7",
  "key15": "5MkUi2ybgq8rDzCVcqwJGa8BNYoWYwiWm8mWrWzK1nJSrnKC2K4XD6DtyAof29Znd1LgqHvypwkioP9xMiMLRac",
  "key16": "2S9ABDaBQD7wi2yzLiGX7iFBpbZrfebxkQjHYnXpKLbFhJdDHwgnsEG6e9qP1RdQbNXCodYPEmqVW9oKcfuBwHiB",
  "key17": "5Y1svoTfy8Pb3H1KFQwKfjfdSzpASq1FGmQFgR2bKAZ5yTRVJYUpz4c7iDGrUDVd65Nq16VUzif7Jd5XnVyTzJvC",
  "key18": "mn8yiWGfnuLi5atV3MDV59AQj9weqstZbAoxRuo5zmAZuDAPu5Vm3vMEBGWLSyEXMcCv9SXk9HyLfZqioWiYVVV",
  "key19": "54FV9NB2JWfgM6ErPcNeMam4QKJhYULkRcuwKSa6NwoQ9WhqG3HXXcwWj6UkpihbjvN7LS6D6ouvrtu2SevPw58M",
  "key20": "5heYVuPWzXaC8GxpJdjdgFbefF2eogBzs1ZD9PKNiL6UwwiNh8ew2wqesDudWdkwNhMsKz66n2Q2rD3V23nDbfDg",
  "key21": "64JN4KZXTH32cbGTq9hNwJp3TzRrKkRckgdZAVrrN6K2QtAySnxD2MCrrqctYnRaLaD3b2csdXkw15dWTNBTMza4",
  "key22": "CTGoaL8yU5EGoLowibP8YyNLhxYFPxbwq4M8T84dWRmKjaWv4vSJ4eBtHS8ACEsa25PJuQ5W7EDG4825vgdWHmi",
  "key23": "3waSeQsSaNSvz3z1JqoDBCDayQrZSU2SoxbKQV3tzZfqCDds6toKUhvRKCGfEZKeLYoLTxNjhEDWekQaQCkespJu",
  "key24": "3YLWPjXMUjuvZMU12uRxireWWUK39EzcCEpmqzjH4ikeGXwBy8Kw1xA31VnBxDbnYtH5m2jgvSmB3ur2ibx48fqU",
  "key25": "37MT6UELgVEBZMWCyaB1dGfgupikPpAWsp7gQgiJYa5cL84JdHvDJsCvGjCBJwh2cR6N9Xh3XifXpZuen7Tdgksg",
  "key26": "4qoYDhfvvc53qnpCiGQUkknabBbBvrzr2KoDaxyiB3Vo8F4nQY6eTv87NqUqhqu7ga4381kMi7v1i4eGVJimohhT",
  "key27": "25w7gVLNf33FvraB3B9gXWuWLhG5i4TDQ79z4UzLJfM7PCsD9ZXKHS5AwvBonPFWV3WEiDSGcgZESQxfyxcJCwX7",
  "key28": "3bZsMc3CFEsNQJrUQorM2nJg4RLFqUQybYReMP6nSyWJApjrpSdYxPmsJWq4K75RGtv53DSGrpYxZfpXSXNUXAAK",
  "key29": "5SpmG4AgKjnC2DBrEbz8pofoXWd2Wuoz5gkbWzuNrF9ZjuJLhQVRAN2AVVTAXXYLeWgqGj8xkXbR7EsMWACTpsVB",
  "key30": "43jeQsJ3bAstqTkTrQbj7iUmueo9kDSwMm9WfVGKoGYVnahyBxRPVhhhQJ16jPGJNvyGvPQzjj3jwvHzqtcFKyuw",
  "key31": "MY2Kn2r8j1F67NtJJU18NYxGjTBYHe9DuMhsMPi8HfKtAVA3krpwS1t1Bvq465DUUBbMRyPZWkquegyupm4nX3Q",
  "key32": "4DgwTaQeGok6GDtt6MDfmaQQwa7Exry5kDaRRRTa5cGbM7Zm43Y4L88jwN5S4FMHR5Gf9u8kbGjYPYVGF9nj6qaK",
  "key33": "5UsmZG8M8oWZEb3xae5HhQfqyX3UjRfFxcb5L8fsHTTdwkGnmuwfcaC9EaFccr7GJH8YYE3cSu9c5fuZGW1M4L4k",
  "key34": "XBnNxN8KAFDG23TPbC74FjAf7H69KVJXn1fy1XuDhbhpmGDB5DCAr9MQ3UDD8qfc4wkfD7vQEkkpyKSrCsbsHPK",
  "key35": "3vE91QprCugcL8qzQG1m7wCbtStgxSq7Bgzym8oaxo9eTU1d7v5Rd4iBtn3Thf558uU2rgXUXuiqv9o1fEYSsDk2",
  "key36": "LzvpXBL8FD5JNtHpTMx8itmN3q6F6J7aFv8nHGfeMiGh5BuHkNpsTMuJFqwPFk2BL3QQCHi8xjVSR24DFjVuP1A",
  "key37": "61wNfRRR9Vmz9mGqcsdsvyQzhiNwSBtnK9K1b5jxBJRQ34z7KapMEkMevZUuwQKZTivwvBypRtKrioPX8vM7Mj7L",
  "key38": "645pabtmUmKYxJa5pP1Z7YZq6FzXKVuEff1D7p7mXNKeoMfYxMmcvjsSSG16Ph2JahizrArd27CMDSe9yodfQj2p",
  "key39": "5bmB7fH79jeo6hUSwYeqa5ybauSqs5sAXEUWUWBLTLngo5DN8q963JoDFihaHagSDy5L4VdYewvikPTJiH6VaxSR",
  "key40": "5XgmkVHd18x5zmikXhzkyyqoxBuEda134VB9FJ7y5q94biAmiR4gpKYW9Tri9YifgWjvUDNwYWFmA1ta4vYV3Z1V",
  "key41": "39QFU6Xk6PBVjkBHCNMEUM6N2ZcyiWgP4zyrosyamiptVP2sfKv1rjh4ZRriNmrXv9FojM4HGucbvqF689kciPaT",
  "key42": "4vvq1zbbNzvmNETuJ5FRjKZNo8SAeFJDSM3nCmtF7s4W2dXcubdL2SbRkd7gwUU28ztZQsc8pUZjaa3WNMWkgs5x",
  "key43": "4LnHYkh2KWfbGfp7aFkA9HJFEr453pgR8XYDPb9KLWZPd4VvH95A7GGktSbDBCbyNTK5whR5Mz7Swxy263vYQ63e"
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
