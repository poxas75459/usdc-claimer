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
    "356TNjhGAwPba1sMivYyDHFhhttmCKKm3JAbvpHPLWYAi3wevkz3WSFAdeW6BEi6UYAgucXZrr6HN9oBEmRYhmAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67eSTsHaa7R79nvu15koguxWnM5baDk8SADZ4MyyeHRHtp5zkLmbPvHSUktz9a8GNFmQpnQUdBsrbWDozozfRnYU",
  "key1": "5JCN6NK4aitedSVNRegAsjCEsKC1vMVzeWuyy3mDGmqNaAbu2Aj5Rr5LBBXt6Y1Da8mtguLSYQLVSGa6kS7PqDiX",
  "key2": "3qLb8PktRHZhW9wGC1VRfnXdE8ric8bc7sFyzE4Bnj6M4sRbXbdnPqvnwdJu4ZHRQQ3gJYKF84RXFLj7WqTtMcK",
  "key3": "Q5rTa5WyN2uUpdd6wVfMth3G8yH3ikpTx3Zr8WUpT1eg2VnJAEt2abMLr9wr4TbT5euF9EJygtfzzNxCjPTLmg9",
  "key4": "2NT4dFwhQ378HsLReRJSJV4286dRYJJJTUCisL5zwwaEfvi6w5umoDp56EGT7JNDM5D8qJxTHaJxyYDL8PCw6cTB",
  "key5": "2p3neJhXkiPrdjToXowSaM8yEGq2mMgAhyhgHtqvK26QMTR1TqQDMZNe44f1p6h7jEsauabjy6cbE7XQa8UTxP1E",
  "key6": "4Ya1QREZyJhr9wm9eY3NR3dGQNfheDXnR4dnxXMXM3wjJ3cKYFgi18ae4jjZxehdMxfndpXMkVEqfiGpoeSRFGWS",
  "key7": "37B6sSgXs94MPGR7YC2YapdJmrkD3oY1VtCpNuN1oKE5ALT8YAXNEykb9owVWuvoEYQm8r6NwHucj2kcLrFixD6Q",
  "key8": "5apSizRjt9WwhS5VZbkajx1FvaVmvPdner7qHvtLspQYkwwwcELBizi7yULtLmqso6x2bFvj38E2JmbJ4wbhmhFb",
  "key9": "5eQvxshwsG1x57QRSZdMFrLPQhcPDGzXXdGZoaU4BTP4z8okfkeDr57uTFk1Wb2mPPkXWibF22fZshQPRb5jRTRu",
  "key10": "66nH3c69CRD7jTk7RE5GUm1mfGDNgsUf73xibhxR8QhM5urz84ayLi4MfXPYSDykurGou2ZEqU4syVBcTQ8AJZCw",
  "key11": "2dxxw8mTme3XU1PLEbEBYSeUDgDCpoe4xmrfwaD76qE9jdNeaTRX4VCjsaR4o28hDPoJLXmxd4LGHgcYKAHwv7tC",
  "key12": "64FJzRZPM2iY5YMArsBS8Cf65gfodqePD36JAsnnWqwPb11fUQdga3K6oUUKM8QE2uMuFhgTL6Xet9kB1ATseLwo",
  "key13": "54ZNLpYyVumKfWCVFRyTWtxBynFGTL5JwEHP8yezHp5C3FUgKceSehNd4sY4EceoSMqapFSzNw72AZxQWnkDmQi1",
  "key14": "wpPNLybABPshgY27k7LL4xzRZKqaio8oCVFGdoSDCnn7XL6aFyy5QaQJgqKJim6GoMVGLHCJTLazkFEcDJTQNui",
  "key15": "4y3PBDtWTw9E3zC7phH6VfVZVzVoABYoUKJkfacDJkqYiN4qW9u7bL9UZ92BSxgPDxfNuzMjLoU7RNZnAwLiJ1uK",
  "key16": "4yPzqUH442siuBsMbsZ7J4JT4NPvHHWLZgoP5owzJ6xY335ceLB5LaURafKzTnifnVzyUeRVpe8fSehh3viMmCia",
  "key17": "2HvMRPPTi7pjLJZYNWQCGxdFLWNio7uGTUwEQML5ixwSHNy8mqMLsgaR627myHn5NoymfgzDbMUtyvvdx6v9mQ6x",
  "key18": "X5VapwYFJPWVYXPXsa1wn1k9bJn7ke4GhbiaNsGH8ECx9Ck9min5DWMVNHXuEWjfgbTKUTbtZa9CaqFe8ESCjWq",
  "key19": "4J5zRyFBzutu8rEV2Sp2hxs2nwpoPbaNw37YjZrST3JJHt94KeqfVacxsqybk6oULyT4Jv753t6uabeaCp36oLN3",
  "key20": "46Jv4C3rRxY9tREWVAjXMJNct5c5Y4ekoMdYERtnVY3eyD2xRBYTNxPBNC6AKx6CXRMuhVBvswPkLbDHpsk74bJf",
  "key21": "3SUBCc82vTggpr9apzPeQ9pVQsAnWbYVE1PwffpKTdkf9zHwMR63dD4u39jv5b77RJiKDR5UJHDGwoqzV7NKm8Uu",
  "key22": "29yY1n3BNRxm5mSw3XVbkKjW35wajQ1s7NjdUWNCkNCfihGrFpG6NiFo8HJKvo9aceCGvJw6SfvNmDTGdoJnDTbf",
  "key23": "xwvcvZ92G5pjibndAWmimWyNLTtCf2kACsDY5Q37qCCkMUpXvvwxwHh7Whhqukdqj173e5svyWySpxyPZ7gB4VS",
  "key24": "2KkkKaEt7jvwg2S8x2QKowSYdHNZ9RZdtmE2GfRuMx8VyvzgvaDZTdmCb4LYPMpnwGhdvToagM7oAEANwoQoDqiN",
  "key25": "2yEMedgXJbpWa1qk9JXmJYpgBnvfSuJqWUGsUneq2XZo41HUAcQ8FDEcRmm9b8XxA9NoR7btimVaiFUdg75oyQC3",
  "key26": "5BYtvC14kcr6nwRwpv5C4KwfftVfy9d1bnquqrM3mZwNMyESczQPgJHVrWMrZjdQEjRBiSyiX1w1nWDP9masozHx",
  "key27": "25qvq6nFbV16uUSDvCz48h1Ud9ajX7SgBhmURNp4AL7RBNMa78REKDZEuKZDHJc4PDAPzeBFZXaJdJmz5z8fn3f1",
  "key28": "3jZ4miYWaCrNrCserd6d1SzMNy3T4wGq43LbrADswxaa5AiSBLyRVfq198iqzeSntfc6LsJjDmDHjJKhKSWKGFFD",
  "key29": "uzBzD4PMRRBSwGoqRUT4PDNXtYuikWBgyjYjVVxJrUg3aA91Rc3i8pi9BEwxPTQtwu4evoyeE2NPKA9gu8KWynf",
  "key30": "4qWutktTsVznS11wmc3EpwT2yC6tMY7guusJbZAJcy1fADG4sqq9G7tgYhkzcE4iQ2XeMiTAUet4Fv8piYnYag3y",
  "key31": "4mch1MKsW4J18tyYmx1aruFEkJ5kWnr4cAUVsk2Ae64LsQC5AiR9QUHFQgW6c7CBNu8hC59Nd5dypw1fvSYfa6Sr",
  "key32": "66n3p5XG85TmD4HpoxS1QUUT5Chq5eo1xnNyTAxuLZTK52fTTXVAxFhajHWLgui6hj4qTn4F2LjoPo86uDFnE3DP",
  "key33": "5HkU5q5aeeKuLznpNZxoTyiPD5YpF13ZK24MvxQTQcUZ82i2Z1xVg4pFMYHTdm983BvAYgbQ5YpeaucWqy2A2Yjr",
  "key34": "g9pcNdkp6zuCtfSvac2NrGfruZ6XZxfwmp2SzXbbSexos1EgZZxFxBLbiyWm2tfGBU7bAkPKwRBBxdcAUV6jtnU",
  "key35": "3nqdc4nmzoAy37yf44GRVqQ2fvVSZH5dEtkQXPCasP5UY4mpsuKkSpftrM7VwJuQBWhVvWg5uroebBVwd1rqbBXm",
  "key36": "5LUrVznbAEtKHgWrFuBWv7gsGL7dTSg8FoTtpPpdHq5jhnsX5X8CnCvxjLXvUXSpmUNtAAenpqofzrZZ9wuS9Fwm",
  "key37": "4FnRZ2Eiod6BFSB2LoPfUMmG8BhstdHgvEgx9P1Qd9GtyZqgnwq4rSGyrJjw8GbTid3WmDYphJbVdYMwdEPiGkeG",
  "key38": "yRjiqBHTEcY9PEQVV4vx9vsb5GgcWPLnM4hUiDPuRegZHevPAdckGKihMmJZWKorUzN5QukWegK6yhDwzWFAKqg",
  "key39": "4XtPi2BTcjPAnrGM1n5SZZzoUhD9mSE58hCLXjjymxqY73Rd65JeryU6FEHh4a83VsmrpH5G7VbG4vsVBUWQaKLg",
  "key40": "3Cvj6FhUzknLk9uHgCrV7xhwPbyDF3SQC6QAKqXBAzqmqYKEoWTW2vjSYnVrnmpzjz4oWAboF7xvLGCF8H32k4L7",
  "key41": "5tQKM5qMeiJ1kczPe8RGWVQXs86NVVKYFuBnGUbHPc71DLsbLz2dCAWQJ9merXrDihmDX4P6GLbfhMgsoCS82Nrf",
  "key42": "67CUNM3sumUQDmLjnRCMTesy92bwYzZTHjZ5BmYCnUzcnJCEvoEev28eS8MDjKetLUPNVizqFEj5NZEB6T3ZGEMY",
  "key43": "2vB2acVi2ojQSsmT9tzfkv3zLbovfcS5Rte4D3sY5pPf8sq6snc3EXrXV1mFH8MgP81iKeUWfmgtjofKS3osHQyU",
  "key44": "4RjCcToUzxShGMMgxiJXw66sbJU7cLereMkoDqMuVvoCgD9TvPfwgmpKHaRZB6tznTMvtG9byb9BKqjHsUnmdrhC",
  "key45": "5TpjUR3zK15DLXn77sNB1wLHSDimVzArbwny7EayKcjjszRrXBPoGskm84N7b8mEXgNUUSFCHx8ZbS2Y1s9NpMsN"
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
