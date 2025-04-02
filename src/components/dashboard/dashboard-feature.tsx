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
    "5nKwRUTRTsiPn5uS838u3SbZ1ZTJZRU2sjvaVPRC78uFnA55qxXm7TksAZLuk4Yv8V8a9f53x9ERXrakxEMaSu9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtzZpzfi88TmUCipUEPaXc9EqmgGWVBwmLskHtJUE9BbptEvjMuzEbYLaRR6BBq3yNsLUK4DrEc5T6FeQZw6bTK",
  "key1": "5FYkjAAGwNwdH2Z5k1JN84wrwSMieNfdNcgsXz69mxWeVBwcYzrc8GoSJ7uE9hprK1zTSQQJ4sXF3Pan9KYsmaCR",
  "key2": "2pHwhLSLSDHK6Qh2x3Li6MvKQ7xafphHwtdBjYW4LuXZAJRTvRcAqwykMAkQRyTuPajWrgRKDH82iSfg4C56QKq4",
  "key3": "4LXmf99xuz9PiuaCrK1QTTNEN2WRncyXsps4hDz949noLpTMD6dMLHzt8p8vZnU78nuBVP6bq81dk8MwgnoTC7tK",
  "key4": "4odSGdirTbYS3Lg5Gx47k1ECLy6M4MHcN8vJa7xxheoQEb1QQL1kJbnRBJRp7451Fg2pZzwR4SfStchxHjAsrKoa",
  "key5": "2i1aViNihhajYkVGwEwknSmFojLdbyZPphNmBzTig3PHa8Z6pCRW7UnR86khxg8SnX61ppbKUDBMiYVsrMZfNTCK",
  "key6": "3Fi59MRnCgp12Z963UN9HkFiTpv9yhqhbqj8t85JRYKRKSniuHDhoRofp8oi1otcrswovUrLuf6FeM6zfSDXqtee",
  "key7": "3Ehkm8WyEjYpoUegpGXAN2Tuz4qJGD7ens97ouWkGgTGgT7tnf1kifN9KZcTfaLZyCW8FMRVHxGmDs5YqWNyPjtE",
  "key8": "4WzYnhoazchgfAwYP79XshsC2HwM8aMvLqZkZbfVHGFfNPSpwvvRHcmro8VABKF7jLMMui5jCxzEYsuwR6zbP67T",
  "key9": "5vH3ggk7Xbvej6LMzji8PKGWmnBUcwBdVbjcK2ZMCbs3AUzekH5mA69hYXGojNcUzj7GbTAmA2jk1tFGMmmTrB81",
  "key10": "3nfKxZXZjRE42zUY9W2VpxRYmoE1Qqy88mnDZfPfoD94wfQvjuRPrJtEpqQABHE7trBSEftTmdjnZPpmnDUW1GB9",
  "key11": "3tw4Ls1b2LbQiw7eD7v9AfPgiHH9JbwvWEKHgY7otuW8TYEia6cUGsgGayGbYnagVQLxDDu6Uw3oKR7A7BcmTgtV",
  "key12": "dHWVEVLNNESq6gdzFsgPS5entptZRnyL4A2YpA9W8wx5J1S4p8HcMHMKS7HsLWgG8bFJ1AW2d8u81dMmy2cjaKm",
  "key13": "4zeuYRjitwTukQKoJgaW82T24NNo3zisDecmAUbmGMkVCLgk7yRBrrcPs2HH7TTE5jxZH5HyhNjkG2jgrVZw7UBm",
  "key14": "2e5BoDPXKdAyrcK7qc9SGA1eowAsacmk73UxZuxqSZ5Zka119sjXyBXWoifHAMbgopXG39zuXbg6H9tZVfYyy4dc",
  "key15": "5LsqkqnS4uH6diUP9h1jodAAsAMhpKnrnaoBTJWtjcmzbRo2thfwVN2e25YkppAJ6qTPykYPC8ZUaGKYix8V5Zp9",
  "key16": "3Nv4UVwUBFkXDLAsRkBGQmREZPmgexiZrLErr9VCGVNWjM5TLg95yiQi3wkfsTbjrjLMFvaXBfrvgHrbPR27iYBk",
  "key17": "5e6r9SxNGmY92CMXwabzfmYuwFVogpRQx6HRK2cvf7QMjiWmH9asqKUtsWq9k3pYGksKXBEz8Jt7ut8871qmx5zJ",
  "key18": "5fWWka6xWk5FcVJAGE9AGxn57xPw5Q7NAHTyuxwdTaf2inVn1gQNEMZN2tTubTYgagH3o4KnBjjkVViV3zZNpMHn",
  "key19": "3b7TGcDR6K25yAxvaUdjA9TJSn6ACT98M7aZxwFBonomwRHJbzhJrqCEiNwMiVXqBgk9mhACeTzF5w59w2kiuNJe",
  "key20": "2n71iV6vDNXt3nnr5NYDX5kXdCWiQxCU3ymstDkFRZoC5MCLmD1yfc8nLxprhYstiTaLpjiWed5UGGa8hDjKARF5",
  "key21": "3CNQepoVBF6wcat2HEbjPwjYSTB6SjQDTbR5iw4dJ4LBpEG7Wi3X5NpHxxvfBLFtRzPYmgZmPQonevsphQJ2e5A1",
  "key22": "2Y8uuDMdHDPDVcFGvQtEkinPZkfG4RXU63h4aGMmC99entNNYALKWpgB4v6dpaK6U1MrWFfbpJKT8p1HwE6exvR3",
  "key23": "5ZH4PM3JMnAuvEo57Mgm9Z4WLdptvgAZYA4mQpfhRyzQqqTn9wXtBZ2NvTUt6gAzCvvc7H5yUjGPKP31Pk6u3Ytt",
  "key24": "4PY72Gv5ofXXgVa6umqWtzpsLnHnuiAUb48pW5nCCixFzrXoFFiJ9SiNoTY5ZzBx7msZ6z9L5ENqBeuR1PMjwWbn",
  "key25": "4G2QDJ6vCbKMNjL8UsE5scVcZ4vUpSZ9YZ6vVttqKRnobaN9FszgnZ8ANfqKYSvhsrQuVjmtzhEeCXiDsW8JFwZY",
  "key26": "5qnunzCYNwTzuATCSDdaCcga23r67N6c1XTBeXHsgkfQaRro3GJY2jg6FZfdJ7WiEVWTTNZd7nXSXLhTBXcmSdx",
  "key27": "5Lujfg3eaG48WvkuYtApo7LBK2dxGZg56ui2thSGnfFD1re8v3WTroEqje6tpJVe6sKxDvtDQPjHTiyEnbae4zae",
  "key28": "4M7tTzRdo9nH9EtyiUNNZD9FJKbY3uoxeiFhMLE95QDBHvFQkBMQSSgZuPyh7xPKhRaAFsTP437Qr7yvbfA2MmEE",
  "key29": "4UECRnJaU2CGACRhHX2N6Q3g8jMyYZfb6purcBvWFrU3jtGEv2dVp42QhBokvY5Yt9FyD7phiHhAbkHUJwtdj9V7",
  "key30": "2BNjZwKzFR7uJbedrAG2EAzCTZnZHDZ7EjwYTbueg45dV11KSCH3yyEdyAng5dEWVhDSeR7KsKKtuUZbpqWWLtyb",
  "key31": "4BzYHKmT8otzsznW4QrqQXo96pDzPxPhJmXzQfd7S2iHnAi5E63TXKwRdNB8JoSXEq92koTagFMFy7L9cUAoWujB",
  "key32": "4MyGrijpft77f1VNa4dvyreUYjsVUEAQvtYU76gFt6e7UvdF3e7y68G5BKxrsivtykwAgbBMAa7z59Niv14t6o85",
  "key33": "4Js7adE7HUs6RiCaAQ58np42HYriWXcj7g873eJuJvkCsSFTmj28e72QVCMgVjpVGUXjbgMTfwzXDmD99Q86UDYg",
  "key34": "aR6BqEwy2V8AdGFrqRRKqJtbVgSiuJy6KPtamNEPAKP8Be9n45wH4ZF8bYk2kxW4BF6GqiURejWijp5BtLuE3oq",
  "key35": "2aLuEmbv7AgbMPpQ14W5yccXM5HSjSGbLBRkkr9K1cjSpdnL94CGUouuPYWsyDjxpfBUNirzsdbLRdRt39TTReM6",
  "key36": "4xmtpV9UBsfU6JRe2NVw9cPcFsQvvMR1VbKsn16w3K5yySCW7vBKdqJMVHcgeQPtVARRSvZ6RPYHRny3rxgHNeoc",
  "key37": "5U7H8EuEJzvvz29sS68f9RhDwTPWK6Q3NHEuA2ckUHpeZXNi71MUSWiC8vE9tyToJUZE9i3y4NFczQAASSAvniJk",
  "key38": "3gCFmGvMaSzFrR1CgcSzRv5ZvoXtXHxiLsLUNN4oMKBQsAYcmqijQNgkgRxDFNcZny5AHxYuY57iyBstmXizB2dx",
  "key39": "4oTE2P4gf1erb2dnuKGpKKuhN3er5fCgqcq4xwe9VETAYZ6RYBDnNACxmttKP8WCtD548HSruPQBgBxQYxuGs1mC",
  "key40": "3rKNzMvCfmKfnBvBaakBSxAjrpoR4DP6P3aeNG6CrDVjsnEVvaycmSNGUpvNJmhEmQ8GbBSsfuBFQVHwi6n486Zx"
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
