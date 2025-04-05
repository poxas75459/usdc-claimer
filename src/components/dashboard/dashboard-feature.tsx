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
    "4L7D4BLY2zNp7as2ySZPntgx9sz2L6QK6YME2fuUahGUYaci437izeMJJKbFhZTcBfBZm6asykDQtyR4EW1aS67D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4raAEAFm43Ccm7HayEgokFUzDR6BvyL7LrVXLaXf1eCJEDAru8kHjg7p2RzxVuGmmfUA61DGjrJUANtnZESvQq78",
  "key1": "2Uy4GKBiEbG6qKBZ33iHZhn9HcjXohG8miLsV2ZUDxnsEFz66DjAMJPGkae2fA7GhkUbF2jj3qgaPzd2M8VBruke",
  "key2": "7MWuWLdvWVedGEeTgnDKEwVHhC5DR31zoA7ccZTxLEKeT8vNWhxqDMMUDX88TPTggMYe8AuGH66c4kFLpNwJbM1",
  "key3": "3WFD9ouWBYdoL8p7Yd3dAL8E9KnjzmW2uqrYEnyJjCMUXU1UTvvhGzHJrm2KPQbmdAEoXbJYxTJmr7LMBxREMCvm",
  "key4": "3jVubgVrte3KAfnedJLKNidFvsnD7inHvFBRrtiwSQ2z7g2fdkhKZYtgepZuYpW6VBDJ8NBxRR38sNfzTegAXgeK",
  "key5": "29yCscJh9u3YrzCHKMcvGR7eFBctgsVvL8pVYworhjuCmhUCvRKzkaHcAwaQfuciGuKd9H2pEuhKbxnrBniFtqtz",
  "key6": "5g63EhU7j4hjaBKGkCPuWc6qoRNWeQFZZPSQNnFf5bvT8qKRfKtyNFc7zbL1F9baBoHxCkX7Nr6ndSMXvYmJSUUS",
  "key7": "2Dzcgt4zcCyKXjDAbkRzgCD3DCqom3WqzjK2o3NWN215wigtWMBYu6WqBTBTvZFkTgBrSoUwKNBMBibLDL5vxsyt",
  "key8": "675z8YLCWHZXob5fEy8D3kCQRsuNGQbG6uXHQfQWoP93aKCiBusw46uaM3apbcavUQxLVf59bnwoNysPsxmWK8gQ",
  "key9": "2q2hjnEvEx1SwBB3Bi2zqMiXgGaHP9tbGLSVmTeMoRGY1qfK1E8ANxwdL9Ake3tb4qJthVqL7gKudPXqQ6CCW9no",
  "key10": "4nR3zTay7TnH5bT9ynMw9hkiCcya2B7q9nMqn38kKV1MzojUoYRuwwYgefyRHsVEgzfuHvrnBQVSSfKUmDpvNMV3",
  "key11": "nPJcQYnyp6oACkZwp7wWwNJNNstVMU9riasU8xP9rZnwmZ5EvGckCFKVXo52AajfS9NG8UbyBFwsRwWwiFLPfHw",
  "key12": "pG2i8LxTa2u3EuJ4jnUf72NRWFXxVRyZr4KATVx6WmghYM3M7yMdGkBEekbptvv7mVWPw2gzSuLeD8CHBGAhUiw",
  "key13": "3B2kykHtpwqQEnwCbKzceTquGv5dT8AiRHS3Sn9y3ceccWnxZcjgsQJWFUsM18hVTxfgVTJ3mRTPUfnKeD2VYsQW",
  "key14": "3sLWszYwg2JZQRNgx69iUHs6tHzudnPoFjgVcHVUocKLtojs9prY7WPiHM7WkvqdFfTDvZqrPRahdsoXQCUcM3WC",
  "key15": "4kKJK2BA1Mu2Fr8watvfzC3E7urbySJ6xhJCsiUYJaXMuHZZ65mPVw5JLpN8f2mez9uc9MBxDG4RmbUsyEP1HBMV",
  "key16": "2eooTQPFgiP3E27V2ANf1m8bqBoaDP1Lh18UNnxw7sdNmQtH7ichie54HWF3JFZ2BzQAoHeewyCbkzs1Jfz186QP",
  "key17": "dkhQmdHfidbxzhsEZnu9k364kwZxmWU1HQ9uWonygppBjrtEdGHZADNb65CfnzqPQRceoSv2xSvsdZJbG6e2zvy",
  "key18": "36xJZ6xXAwRBWDq4DH85Vf4Q8yu5cw8VjyyfduJq7vH5wK7hQ9vWMVxtqNSEivqUBZdXMHdJGWnYd8wguRXqEjhe",
  "key19": "5kJEKL3mtJBtLEYuuTsdpNRWxPaF9otFeFCWuE3XVZHgZasUKfBAyqZVjviGQ3qpC6286D4cHK3T5pHaPp7BNYnX",
  "key20": "4wNfArHhbxiruuCzYseh2ZBSTqr8op9KxivdY3GXF6Q41Sk3txmQ6RHDszb36EEQ4JoMkYuSFtGizmL4LbFrfYi8",
  "key21": "3Utgx7Doj5Ja54CF6Huwn3dJBAi4VKq3MAgLhgPi4s1bPUYqPL3s7j2aRFnEYBoagfAbXuBUdC4LCxsbpq5o5gfs",
  "key22": "2ga8PgF69G2bEvCeFgQDroTm5sDLDFppPFce9drvusLfPHypmdLtSmJ9VyF2Sf6MVMeQGHAZ7U9fjanKDpMPRH6r",
  "key23": "4QB4aLStMZ4dRkBuEzZ5Hi2vLw93ro3X8W6SBaR2HV8zk16MTDRr4kyiMMKFG4miRxCnfkS23bkgXdS6JDmmD6yX",
  "key24": "46ydKQYHEMgiW9KP7mkuGG4DVZ8z36dZdzA99oUq8XJEUBnMFGgsaKPoex82jaR9kaTT9j8YwbC7Y5SsHde4mmkq",
  "key25": "4GGFanvZ9eB79UvGJbMiSrZWi9MNmBYdJuvQYjbryTo7iZ4HN1MtwCRc78xZWHKsXXJ2nVVqbvwMGA3L4X6daHhe",
  "key26": "3yGcpPw6ngi3uEo4GcYg34Yy3DKUDTSYPp2nfkJGjgiTJUZLsorkDXcuhiu1tbeLreKTnasjkzHJdUoaYvagJem2",
  "key27": "4neKSDXoq8pdNaprKcCMhVfJGkSSCJGHnkXSzY8ybWBVqFSJ85P5GLfwrEBnmJRb6c5od8UeVfqvNbz2evTMfTso",
  "key28": "3gawN2hzezCykQK13UFtg79u6DTHuBbU6HLzgLpciKadYnuNvmb2963Jb6q5WrZa84cAxC9Zt6z26VyvToLjQche",
  "key29": "5QRknZHWDTqoM5cgGse9JnxWQhjnUWMyVTpGe4kAwuM1b7ukHnU46eprQPgtLzMqd8jKHfMjGReFf5jFSGeZV9w3",
  "key30": "u9p2wBvgSCe14uVAkbvyGjiNLPGV4uKggVmVmkBFkf2iV4vhSaEKZN8T4MpHi9xEsAVtqrsPzcXibZpWsjz9A19",
  "key31": "2YLp61b7YeUMkSzfSTiqj4HmSFMWwpUEjoWyhCx5jc76fcqanZRjApyPxQDZ7Vcb2YKdyfec4LefQV4DVCs1BwEf",
  "key32": "5UH2oTNQifgsc6EGp94JnwB2ngur75ViRKnSqkmMUqBKuA7phPiJhXwmwe9JGRZok9ryrCFjHtu5UMJAPUqfpMQn",
  "key33": "ooUCyiNu7SKn7BDwaCprVo5NkPBztqwytMLTgVFZyQXfnBduCsfk72jTPEegf3xwUCk889cSPWXwdHsBhNVzKvJ",
  "key34": "2DZajT3nuZnhwUAZ7XXva3S5Xpd6QgcjF728223RNFpd5qH46R5BHkC5EqbddS47jJnnQp8v2NvXFBRFBmPaUDo1",
  "key35": "3PxMJz9t9Kr9Veg8Z8KFxchykXCyhRdUaLbAGYBtFKM53kchu5WPNaXnA9WJXKLEkU36dpEqixbXJEsrq9XQjiRY",
  "key36": "432sgntSwTjwfPG2S5B5Hgu8jGMFfDju7eoSHooe5hgFYbvrUz9hQTdwX2d7hV8z8swuTyACeRstxtTK5x38SHU9",
  "key37": "4M3QttT4ZBLj8FnrZ4MQBYDnVgqdCs5iQtMG37sUyMv8n74m9oo4LSCLEPP53Xipq1miuj3r1o8gQXdcrbBjKroB",
  "key38": "45GaYmUGV7C1feaMVn74u2XZzu3CthVQWMFYY1Z9yKQFpVWYubBjaj64h3rSC3x9Yi23KCgzqTBULMDbAfbFsFcg",
  "key39": "4n5pHkgwb5KYGmnnNc5MddoqzSQewLoN8JLr5YubSpnnGhLeEb4woWcw4PZBz4dk2WxXRtMBHX9kzscb2cJbm81a",
  "key40": "3mN616div77p2mCuK6DoSZJoynxXX8yh5vnBkdi4mUkndhDXAqaj667sEN1wDayAUWoYVxgjvrKY6w92ttE6nKEC",
  "key41": "2kP4cGEky83ZQkQqswbeY2q1AYZvLQVBS999kDAFvxHj6YR2GAoehVPCNZQj4E213YZ4vRQ2tybBDQ8Rp7qvD2w",
  "key42": "MhDXuLb15NhbaSfKHfU91PPXZMBc5tQCX5Ubu6Ko5HH21bYA1DZ6pPgcXC4ghHLsLM4qZ9TDZyHrkfiNqCJhSqC",
  "key43": "5LCd2X7cGFsV2joPKpxiP4mriTd1aqPg9XDATMQFvHe1wzWB4qgsaFbtNhF2wVjC1S75apk68d3wjVAVv5ZmQaKF",
  "key44": "2RZRWENz3QakKy8J4pD6hu6nEBRYeBMzMMQDtYZhcbS9HUYpgr2NetrW5wrEDsgKyUmyQEEXCgpXZ3T3QygzFW1y",
  "key45": "Rqjryg3qrUUwojB5tCAi8uA3TnoENJFr93NVuhEKfA7KggvxmynQteNv62x4DurFMJzZqrL9bWP7cfCmby6k5nR",
  "key46": "2MbGc1KsQNtn3Ffbof4DN5taaTdiz6H2XqJq2e7dsGRRVyKkVM1RZq4v4XuEqqbQo7FMY2fR59x5wwgYyZkjH2n5"
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
