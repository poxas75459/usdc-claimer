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
    "22YcYYFv5M49U61VKy5wJ6xqguV5uVziyP9KRMzgVtHFiUawNeSKrq3ESAd4iFcCWwroPv2z6qvEeS7rGoFwVHnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPTBmbC4R2X7ZXrEBy9bpm9rouoWXL6UnjLeawX9HQ7p1f2PYMuaACh2UUHihCqbP5jTjreLbApSkpCCyUZCgKQ",
  "key1": "5gmFUSvfpzYXApnWU6whXRTCsy7UWrqzr7S2DeMedyNX8KhASXGogFkpUTDv4ymV4KKoE74zEb11DoHoR18DM3vL",
  "key2": "RLuz18bGXMW8CshBNpe3PtY4zbmDMv5XecLJxa2ajHXsSSQXLp9mvsivZtdJxjVHk5TXoxJwBYtu2ohGZ4BiEDM",
  "key3": "2sJDQ6zCnbxMPxT1shtsaSJinbVWhmave1vNthAhC51N3HEGgFoq6Ei3FWKgDugUrRDoacfidNab6tHsgDSwnPEu",
  "key4": "48X1WubVjFWQgdyV8ho2uUKoeF9gNdBQ3NNsSJhvU7BTqZB9kFwFzTesbpWGVvFN2HPUEwkfDofXUYbPL37QQYuT",
  "key5": "AEx7GAMm9kV8v9ZsZP531mso9QoeASZWTeoHbe7MpF2WdWQwMWwbJNxgfWdqFDtE6o3V9ekALFRJf8uMk6V6toD",
  "key6": "FNehEpvy4JdjR3CPmiZa5eWMUAAY4VGroMvVkQTEpFm6K1js1QcoHhsnkCciMyc7r3Y2fcV3uhJrTw4zS1NBWxV",
  "key7": "3HXQ2ebn42qAuD6nHr18jYrEfVmvgxMynkUnBLSb1BT4WLVyAcdU83HxUMVh2gZnN5EsPmCGKSYGZ3x2nrZV2jPg",
  "key8": "k6qv16pzRCsZN2qGrtDJF4QDeNVqT9CRh4FKNiC7uzkKTLx5FPdHdB9pAht3fm3985jrCJKNRqM4ad2SuCuJ97T",
  "key9": "2teXxY42fciwXnUV28ytMP4uJGSiLwZcjNbeestGXoUzT57Gzo6hBETWCQXjsPw7s6tqZgmAXsDSHnWdtZvEv7Dy",
  "key10": "2zv3e9hWCVkuUUBkJpE1BNLdNu9e7YiLnUxNfrvdwhKfX4jBiYLoer12s3W5s83kQLe6G9hpoSrpaGVks29B4JbS",
  "key11": "5qYniDVoTDWgHVHGzDD8ovf59DP9W4HGAbJcMYCYVcGLAHpXjj1YDkgsesidLUjupHdDkgBQSvQU6TMZSJZffqcy",
  "key12": "5k2jedXsZKAATkScEnLTJSj2NGXYECpcnUUeANU7M1BQUm1nRUkMAyx6d3YxhLxBJpUqGDCMQmJvcYmjQ9iJxotL",
  "key13": "5gpZzqwg66dGmt2mGZorAy8enuUcXctsjaXeq7265793qnwqZG7pbc4rpw33Gd2JSYRsZyVkyD1wmgjKGFCtNeUq",
  "key14": "MupoZBuyJXwxW5BP2wUurAfJbZZwwzLgLKu5y5yGpcFeE7ynG6rVXKuNf92jUuaggntJ8zdxqPiAuMXreLxLkEv",
  "key15": "5nesDm8Pv78xd8MisxwkYAvjHRMiCtSerbtg2qV7WaigedxEwwxeRK5wHXg4ymUsHP5ADnBnBpQ5SP6vNzDtbDrt",
  "key16": "EPAZNaMVcetA4jCLEZZZB7QmJpYhASYe2B6s2Wqud6GnahUoXDTEFHwbRA71mLA4FrpKRrmpq7L4GMQ5TD48Gzw",
  "key17": "4QD9Cf4Jfimjfiw2FeHpPnEB9DmyQgStL3Uu5Lhjm2ZF54CcCgL4yMXuaWEi7ZMJZFzf4d3w2x2p5THqbrSRoRsC",
  "key18": "4zcMyua9eFjHzRBdJX8E2BwDKUrwuh7qwJfnjsMQEck14eZmigTRUMbiHT8vmjCd8jvJaWfbKeMPqihySMchCj92",
  "key19": "66fkXAhLif9Ab9RQd2KuirJQocN9MsWr9Fr97ssigJfjnkgtgCNMEqdYTmJgRjN9SuTmWnxA8cMk9eSifW278vtp",
  "key20": "2NugcwCcEjfkjkVKuGF4mYiKnDydqduPZkKZQDoH2gEhAJ2T7F9ukfRRN2J6WmSp3P1jDST1uatSrfFkq8HVGLhk",
  "key21": "2gdEWGZTbbGv3eTroHNBXNoJk6dnhvBDS25DoJ8m8SmUVeGemLvzvbJep9m4RRhAzFnsw8Lsu5jTgk3at3Mtv2TN",
  "key22": "4C9kHJxXYA7q8ojKUwgwoumiwShNr4zUV5PQGQwkjGdryjHjqKgWzLnCAMMoCANgoH7XbbH2gMfG2QxtrmHbG1gh",
  "key23": "2d2Jqx7duL1GAN5nxHoJEusB8uPjoGPG32nEV2am2WMV4rMrbik4QRgMxyZUGYz3Y418eJBFxuif9XhWrSENueXU",
  "key24": "5ZKKNHt2o9oEUnfzeZidG6qtECDbdHKggAWYFJiMwz3qaGAQn1psa3aCJmxPQUYTWw9orHHz1ipH1TVdp59UiH3i",
  "key25": "oKKCNi9idSZEGGmkfcvwxuivWpLtWEn6eaBYrm7PtofVoqtGrWRr7y62DgWvfQgESpiGjgyD1kJvhu98AyxBGgg",
  "key26": "348c3H9s3ETvZC4JtXfrrAhpFzfLaNrnXWcjhDLM8CFqr8vcMd47V1fg6yFsPnuTBkJRd98HR2SSkUmtS1GsfvTA",
  "key27": "5TS7GJuJDpYMwVW9gmfCcoubN2J8A2R9XJKL9wykxyWgCSYyynT7NSn9bt5gbJTLck3UtM2xXg6NSW75GaMYiiov",
  "key28": "38g7xHtgzFsvyLSgyenPCVwCyZyLvKHHRZsr1eLekiCQiy84Ck16MyyqkGBvML9mQ2CvSCbTcr1GjMcZmZknzAJh",
  "key29": "4NHj4dSb4Z4Sb48wVSbfUziN2p8xuUYcEYjju8p8toaSyugVXEEBrp4KRwDhs2tN6diGhFnEqWrUzw2hAtHVdfzb",
  "key30": "3tFECFAvGJyhLz8MucdRHKyJcrr114kfb1aPf47mLzS4uTX6KsWzVwRw7mwPMvAEudtQh9vrJkqYQiaMTqHLmp2b",
  "key31": "46G3iaPSwavPcJQXFZjZH4nzgVTfMRyUNn5EMRnp1mJEUMM42PLoXtHQwKHNRF4HyGGm8gPqjNYHnFiyy16MytP1",
  "key32": "5QNDuy12bZn7vmCgvZz1zJmsXZ1yLtLLugiRzVGw2XHxSdhSNMzUdFVKvTMH3ggYDmwx4buYj34HvwZ9MDdh9Jhg",
  "key33": "63QJzb7uJEgUkcW945bbjys788jM8JYz1EckG2Tkf594MHLUadYThaajbUupz2fXoMmirhtxFEL1xJhpTdnkKtka",
  "key34": "5jU9DL8mKFYLJpWEj85ysusGyZDMz42CwLJA9mMDFSksKQdssxQVC96QgzVzTutCHSmPPkn8FiAdpf7PQcE6UVBe"
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
