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
    "rYTodMVcLvscai4EbkCmPp4yL3NcmrDpUwaqBe28meTDmhEK8eqNX5ozFeafW5qkbHghXKyoK59wKk1eM62M8N8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44d2vNgR59qTvr6Tzi4KLK6iiuUHZHEDaQuQuYeRQYJ4Jnmvmzqwe93WH8gJHgtf3BtreyJwBqmCHim6hsx33rNY",
  "key1": "3ZSvdk4AxTQAnweRNX3YMDS7khXV2AthZyvrKTQCsNsJGBN1gLTkV8wehDWSzkU1DH9heuujPaREXANG5pbcsgTh",
  "key2": "4mtqFn31z8vzqdwbnr1fJ9AMgKgnuofPwbPgVeSTFsaNh1ZAELv5kJRY3C9pvdhEagJMexm4YqUDnTL7eQSfKs9k",
  "key3": "2Cx6FXy9ATKGzYgossnUaJnzWSgfdvivizRMA9wxGMMD564EdmVChFYXZK3Zc8zUY6GTpzKRAfuwqaUXRJ74fkzB",
  "key4": "3K1EpCXx4ANvTmGCw6vH34N9UHoCkUhhkgwrwoPHCKjveCHFxU17rFQt7CqDUW6M4nKdfDJ2NqMPtZZetbZFNkXF",
  "key5": "3uLqN8D722Fvew5gyRyY9dRJdjNb3zGAyQnJKYEy8FB2Tjhmsp3jJkm3GH2jaaLjxAbvyUB9Ky3oeoTiDEbS3jZC",
  "key6": "3BRevWy6Y38WXKpM7hUrDyeyubVp9tk5G7zDPxiUgmL5GRss1Y9d8ARMnjfBWTVRD5DApDW4qKrS1BsjQ33SiNxL",
  "key7": "4cuAhHGQ8vLSvCzaj1jV93KPx6XtgZmfFouh9TdvFPT13LuTaN5YiQt9mQBA8BgBz9e2PrPvJajPiWQdNexvkAgM",
  "key8": "3mFvivdUhs3N3ZBP3qJZ4stYxSxV7c3EE4Cnp8dEdNX8FYLbBUHz4Mx4SyrcasSZkr57Y5yxZiLTqBrBXdbwTqDw",
  "key9": "2JQdjErW9PYe8KAoEKydMk4YV3mDuDisUsngJuT18bvmhxrn7QsX6qJdxhFRrLkC8bpdLpJ3L6ttWdm81NMGtW5Q",
  "key10": "3GdiY45kDM2T1igs6mmuVLqes9ufep5rGkXZZSkEjBkYspuKfjxX7e7MfGBSoPR44FpFv7QvQdXD89XDTQL6NUvA",
  "key11": "2HkH7FqWsHPiGzGVkwwKVcbE37xumfhHWQGKtZnMUkvqepZMiJzW3A9NbRwXvTSVXEtUDLYUumPNouJ9zMi6LqYB",
  "key12": "48QUMWbv5cZ2eddDWq6axsK7g65DGXimrjFz1Mcq6qZ5ihqe7utgCQPUg71UJnZVqD5vcgG4afEyc8QrgT4rXTNd",
  "key13": "3jCTssLK4CP7pDECHqqbDFx89NeZHRd5vyYAmdb14fTpLdGbZvbNZrgyeJGN7Pe412Q9WbDGf8soQnTb3QfRc4V6",
  "key14": "5cV6fC32CGLfbP2Y9uHcBgJ8XKDeHrpTwh2KqVi1f9e1JvrW8MDmpZA65rBNB75K5eGgYz9efRQNtFknxaaQrXPw",
  "key15": "jqjsxPyNk8yH3eyu63bhord5AmLa7r2Bq9HbmY3Wepr7gcwK4TqL15kvdYsUyPY73vvrKCXPq9kU9G368VNoZPH",
  "key16": "4VqGe2WNGjenxpLPX3KmtWvbLxRNEnnAwpXGwLikxNWeF4oPYEhz7Qx4idf8ucypRhocLPCRduByhFuzhLp9YMec",
  "key17": "CD6dyLZ7yD9jmmCAXvqpeUtnrLpt23AKy5PJSw4ch5HCQKp5LfqaQGFX4wT8pAJRh3MUYkWT2u75HZzpqibffD8",
  "key18": "ffGa6G9MCSAg7pZuKkUFynkFgbD5hdS7nKL9chSFRKjxCJazYejT9HA9E6bRrq6gmXCL8gxgafbMz42em7z1oY5",
  "key19": "4bXhryM5C8SZszXy5t2hTBdoGFCQu8f5PRk4VGbRcij56QPVS1Ubt6QFMYWLwXJwLyFAQsAcH2mgDErMNoKEPufx",
  "key20": "VVdRdp1w8ry4sHGRKN9eg9aKaFdz3cTWivwWisghB5HibHczw2fTG4yWk7TuXAdh993TMkUcFQjmYhVEH7dQ2We",
  "key21": "41HTofqncMQLFj1CfZwvZ1cwb3LaZexiABF2EMsqX4uNUqfue3aQ1xo2ps4AVmEZGfwEXrzdV9D6pZrtuiMAV5HD",
  "key22": "5E7mqpmKoMyg9GkjGdJBMHPoXctaMQ6sPgZM8jJ2iiDcZDtcyQ3ymjXzr62ezFySdm9y8YRz1WqRsumMAZvb4gkd",
  "key23": "26kfp711urnB3mLKnHBxCeRA7rhCsC2mLyvsXhFCUdHqnQViqwShJgK6nSJ5CiU4LuZfc4bKPXvageCijU9PqLd2",
  "key24": "4mg8TjUTpP9b5vSP2cjrvdoBiJ1t8h8yrzGoJUeX54bgnJWoaxPDDuegjT4RgvQH4YYxZpZZQpGzhfvMxwr1mpPS",
  "key25": "2ntLYLUs74ssDf3Agk5rE4NiEyBLDAoK48abvwCeje8xZqTw1HSvgQ43Ca6PymnPEyFQj3aX2qJWW6u7Cduwvua1",
  "key26": "4NL9iggpT5iVYWwz3sFDURCTEmW5Sku3KQbQsi92oNcDpo8z8v6AxKcC2puY82V49hVVySfseXNSA5oSUJQZWo9P",
  "key27": "4tSm2pQ1Pgrr1nxLfHvQhLNGoqAgnyjegpJWFQUHgbenLdpDT44q7VKSLNKEbgaXFRwS6LtYvZDKthKGsaVUVAD4",
  "key28": "2nHSvCM5VYrmccRCX6swgiBQUqopNhNezFoQd8bPGdokPRdHedTmNkW32nreebJMCFAfaazyEeRVrCW6ChPDvMm1",
  "key29": "4GtngVY4KcApiNk1C8BRMYva7HcUBZSmwZJVRMQWPWJHFBp16NtVju4aVwUBgtjp3SvToFYaTs2EWUEQAYEgfz7g",
  "key30": "oDFWpgRckHgWKXQJ65iWFmV2s7VhQ8noyT1HBn2YJmauugUpT8eHrZrNbwLTEY9LKRwJbon8SsXErWyqvW8hifb",
  "key31": "56orPL3cxKaDqRqt3q9DYKBUb3d7ELfUHoMprexw7khviUkQvfpzcVQWFxym4TWWnWrCn3gbQb4VT6gTeD2jYnwk",
  "key32": "aZjB1PsBZRQ5DCye6KKrp3C29kPJqc5ZPzrerv4WphLcJzaBqhVzDrgZrnuy2RUvUbDcExsQYXSysS9udeT32fe",
  "key33": "fvH1aZE6djWpmKBWnFUHaVTNTiCFCdxPvxognWAkqx4CH3uRtJXSBsz4D72JNoZRedqahx8EoSCtWUyr9uPSwEj",
  "key34": "2FAeji9KjJrQ2Xmir8Kt4vfsAwHPcSmcDi5tXbL92sHnW3LFS2yGdkRg7RTZutmao3iF9R5u5ZCe4zfzpjmJEdoC",
  "key35": "2Jn3DhaMRhF1pgmteJzJnh1XzZ3kj2vmYuzc1465xfjgQaRELp51KbhLvnFqCyweBR1SVWmZxTnh2jgHaFnjC3uC",
  "key36": "64hnEhGJ1eKhSXfTRwfVUharsnEewjqFRiPSTZWU8djMGVw64mJVDEvdNg1UkSz7VxkfFBjVnAxzh34x4bT2EW2N",
  "key37": "5NhVtveA5tf5bzCr1nvXQN5LPqBvd3iuUuguLeacHsijXPzt6CHFmSkjcrKXNmytrAzHaz2gqDvSvAxSSoPRhTHE",
  "key38": "3Unp8TV2fff5nafmxsKPED1dmk9e5RCYyCidBCfQuqr1o8HR8gaLBvkc3ndnY1qD2fLdWQjo3MSBfKqUHzb9DUpA",
  "key39": "5LTTBrBDmF6QFLsm5bdfhoq81P9d3PFZjzhfQRe88TsxJrvh7PfwLBR71pWhKzL7TwkWnSxr3Zknj4bmgqfzFciT",
  "key40": "4nTSuKc8SX3mowKv5G7s5FzYgqfFSwKW9TXEwyjWoW3YQSCEqEaBF1tjsgMuhMZtmNjqJySwBefNrWxsTuZZNuvL",
  "key41": "wU9Qjdi2qRpvgNAX1C6DUko8re3nxEsBEJ68dHGQByXa6oBpkqEaRebY5GdaF9AEeF59JSQB9Dj85fWsGfuWNRC",
  "key42": "5bvenNR3SzCQif7qiTarnPu56YytLGEi1Vqh9jP8QzZBFa4A3dekJhLv2pzzmBy2LuvhxXTcsVgDeui7WFozJa6L",
  "key43": "36zxd82iVKe1D5VW56arrTH8CYjsNEE3kVXqKvFid3tncpjAdH79cUhtAop4RM4XFGvN9QXGjo2TWvBXq8ZfsfDY",
  "key44": "5faAZjb4FU1wjGsSHvAkSj1AmENbBWhpmkTiWjFa2fxApbUL85QisV8gRu2QG3DyoNbZhs4mXQ9wrLk8q1tJUrbH"
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
