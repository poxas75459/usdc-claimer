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
    "4P3ar7AC87yEg5bbe7ahH8couXY33LLw7bgX8DbTm4Yx8xBZkHVpxDWwzmNrKrUq3zQJqxegy4V5bW2S5TCck8CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "466RYEMsNLTWrAjF9qNVwz5s9UpYYCSarSUEyLiciAgvybSqy7HbiTkmLuKHXY1aH8WnWwBEcGQFm7C8vyxNFAg6",
  "key1": "36ftyqH2BRjGKqtyi8PWWDKvs9n7tEX4K4zUqazhgGPSpUiCiyUWVnfLvCxWVbRSxihetsTj7eMKiaCciifjbgts",
  "key2": "2QQAH89ZWfAr8B3QZ5ZyYrGtXB9kLSaVYgTVRHSsA6U1QBTkqp4AvZWwfe66cHGbRvYxefiB5UHaJ26YdnHJmwH",
  "key3": "4Jx5qZFzaEu5oa6r17U5MwWkR8nWz1EpRiNryjaP9kRCrTgWSJg8tLNa78MUckEZuv7LhKZPXzKCfDacXp5NJxbu",
  "key4": "5LFjXykyWagpkTjbRtPDeU5AYLs7488A8jwyx3bjjLQ86XJ5uLysRdKxvjM5Sy5D1nxRjdbM58zS8EVyM3Pohjhx",
  "key5": "5aUA4yRdXJjwBqXnEkbEdneQZF5RMyFHEVbeiTN7EdjoGhCcKDfyHuCZyd9dMuwG9QniiRCxnPgBeubUnWydD5mj",
  "key6": "4aSmAauucmrdhb2T8VqYZWxm23rLVRcEJLFyfvcCmXvw3QD72knNfNMBdXE4SmrbZky1qVWRcQXEUuQbM5NBjTB3",
  "key7": "35tpATi11mbUfK7WnQoVKAXbku1mJZcGJBx323K9BT9BE3apPeT6HZsWcW4vd2tjXBRpotVFhpuJc7qbcDcEdJf",
  "key8": "4uzEUkiztrzkrgUEHjfBLBtaTfs3bwu7F5X8ziAgvQJWrfrrug9KdQ4F8bNWweLieoGogd8zptsQkAms6PdK58G5",
  "key9": "5jK74Zs7HzGXNYEuRZmhoKtZvbUNYDtNkygmkyvXcDj57cz2jtnfA7fKJjjF6yisLnwEU28tRiVJXbQNC24X9uT3",
  "key10": "2UX8ypWSwteyzu4zXtHyJMV4QDwQiRuJ2TinCBQHRrzXezPrXNSy3MQ1YU4KmA8vPUvCHBtrFE5Y5fxxPcsEuhXM",
  "key11": "2sLT3kQ5k8HUaJVi7pQAhcLE54N2aTKwQCQeixR3e6WsrKCCrMZg7wVX9CPpNiQ6TwNR644dqSoPmnbuBXbkcggX",
  "key12": "66gafPtBJRYZSWbVvkGY7VkCksGzBUXXnmGZmFHrBghLP7sp3pU1yD9s8RyoUgzggSDAfM9Vm7qYqHduxirti7b1",
  "key13": "4JtaKnATTzPzdqMdrrm8qhgV22WSECX1ZnqPBxPbmepW7q7vVXDL2t8WHKZdnPkxPAJ2n1S5LdghBzKRs8P1a9SV",
  "key14": "qVmsgXJtyxv9yss72y7K9bQQzNwza5ddWXYXKuhyRYA3NXUX3DCTmKqzpN9mVLaGV1E2tZ8pr7HezmiohJp8DPw",
  "key15": "4zxkeRLXvbQu77qqHawrABP92J26SEDsrtZ3MKeecCkhA3TXjghnrwJ6UAPFMyyxD4VB7Ftv8ny3YHbckDdX4Yh2",
  "key16": "VaAetmkLWwbo4sw99M7ypggab432cUDbCEppLrSaAhq8b2jsaWFf3hu2nwqhdySPx3hfxFk9f9qBCtXVfvKm3cC",
  "key17": "FpMW38ibfqHatnp7ZTgRCW2SRWPPjNT5pRdE9NPW73UN4LU9Y6kb82gD3zJTGWRds6BCucGK5MLmHA5ExrpEGgA",
  "key18": "4DsNKZZer1sM8TyBnpQvxtso1hcgk9nJZTNEYCwhKYKF6CDpSkCQhgkCnkySzXK1cJz4NAj6RnkbBHDMdojTy7rX",
  "key19": "3A18XuukrN4j5Bx8AwyRSN58R5NbTR5cLbj57oVWYmykAWAsD3NfNYR4ub52zbNmzoSHFKJs1RXH7vB97MPWY13j",
  "key20": "4ThkJcdot1rT1LQvcD5t27ehjpD6Wr7V3SB8Zt8vnMEjWnFLVBzpsU1fYNM7kAqvYrFA8przQQ1hjFyR65t57Dop",
  "key21": "4WqNQEJhQ3swyNe1q3N7PTHNLYsx5eJE154pH1sWdShdjoZQzUZetCzT4uXrc2kisPZcJLdTeQqB59srkW8K7Kkg",
  "key22": "61xZWVj5uS5CboQ8A6GnQFdJ39TrHrriee92osgrk5sQstEtQWeUr1dTb464Q2aFKBLC3qNPuL7a1TCip1Z23jqe",
  "key23": "5Z5p4HLC6VoaZP9GgQtC387GdB2WhrpshWAkthtQYYEnANWckKwfMyFL4k7EojL8VRtWQ4afq29ugUi2xVMnqvTU",
  "key24": "2BP9U9XwNR1vgae9EdEbfEsV52koTsQWMmYcWHBdDWwm7BFtLtgqHKcyZPnxSx5njDyhYLStx4zCwYaquP5KcrUa",
  "key25": "313fq6aUuD7q5EXbz3rFVTikYZfdRvnnQK7mtJk1kZUBvnTC5ELUiDhRRpMQzCNR8mWPD13epTB2vTbGy9hNhqcZ",
  "key26": "3DvwPG5bwhmWX2LhkhzMY8oeCsLi3TETFPG8vJP3BTSsCS1ox6jV4cyo3EZx8okmRXSFi1qb7aJTP9uEpYDBCQs",
  "key27": "3gTaKEVc8cRji6s4jfyzfDGHoWma9J2wuTE6WtAfQVG7Qk5uvzD6uNre9KbMcTfZzXgH6R76ut6Q9e9fGGSDQfPF",
  "key28": "3VR98iKDFdMaL98H3sFQfa3jjYcNnTZxp854W6YL6Ntw8dZFBvsiJ6r4Hw1PfCXv1wrJf6CQGTs9tJLn3eRB1rsA",
  "key29": "5xUGHLyrvRMTToxrHMYM3z1GG1VTY6khGY9TuGABUvc4Lc6Bdvi1JLLp12C3EZpxVtQTsQrzvYSaFcteYarmn3kZ",
  "key30": "gGrPxnZ2sY2bZmr549ERDrTkna3MG6jH5gCCMnNZZAV7g5Hs9sj52tQpz7Wckda9tfmKTFaGjAnzVoEKW256Vem",
  "key31": "4cBGLA7P6q16zoewLeDHoMZo3MBEvPxqdsnZfSCZ38TirMaMQTvzfXgzo7ST8Kn7nDcHuwQsF51itRwXgacHCuwg",
  "key32": "UHpJv2ZK89tme7PpsvKNdxviBcEjFAZaMFJgTnVFFYRqATr7T2jSD6qyTu9uxMWiaF8D8CJfUagCY3uM3E1riTa",
  "key33": "5yyiNC4Hqx6FRm8nnTd4jBCg3p36qkZiCES8Lhfw9C266buhXoMPgRL4as5tDH8csPwyyAJ1n4DcTZYWMrXpvwdx",
  "key34": "5gEsaEJPpbpVCMQxXp2SKk55CWwe8yDMQdwVe4yMUTqnUB5hSg95BAf9xdVGXuRCs6zskxQVGpVGyYw724m8vKkb",
  "key35": "2WoUaUeycZbiybyJcKvdhcDtd98n3y7s8WdyqU24zE9gWLfnqJk7Pmdqvxh4aaJTEdYCck1sNx5Bu4M4KtskdwK7",
  "key36": "zFoVZ965MWphSsSfnVXoLAdSpgLCBzWkCTLgWA6eUQoCVVUzkqLirERv3FrsPojLwPiTvhUyutFemzxgivLdAzb",
  "key37": "5FSUvwnbR6NZ1CpNUv3hAXH8jqGfq5PdsKXQxm2h6uAYjku1wLRe4phDn4W92YeMxDvWHDPxPsWjhmKS4UumnYhQ",
  "key38": "28DV2zby7UR5R6CcAy3ohhsC5kgFFsus2f6Ri4DcFea7m9H5GBfVjvKb8b5W7iF443ngTsMWP6HPxRMVC6etmQU2",
  "key39": "SPGSdod7BLC4pxNCNYQuaXkDEzy2xk55yf7gpcdhu5EVVb41QuVt3k81PhnShnWeUKu8Fqu6YZJEQUyKSXc488g",
  "key40": "XEA3bZwVa3bx3uCfhXKKmTum8pc6SXnpPTthiqeCejveUdyech4qrNZPa15K6eVou5rVTGjBCSRqUutrxs5Nx1E",
  "key41": "xDkMfAfYuj1VbWjXJ5LRfVyAS4yDHGqLzhrheBpJ9hP4R7YH9GepD1xzhg9YJW8TkSEiy7idyc7acC4EGey5zHX",
  "key42": "3G1bVJ1ujS5G2kLjsszhazByS8YbUGKNwUstsUPU5SQQSUNuWt3WsPCZFt5XaHeSiEuT9yHKmD4pg4fXVDv7y5WY",
  "key43": "4eBTVzopCZYRqYSsXqF8NcjU3CvFNc3svV6LSxiKmbHFTzrpqh6L2Vt3CsbnPfcs37RC6uaRh3Fydjk8YYXDetr",
  "key44": "67kVSw1ZMmGN6u2dovofurHpwQiAyZ2Qb2M6KEJEp363zY2dgYJ7z4b8SGiy8Xg8HivA5x4TUugYSJNEGBT9irhu",
  "key45": "UMZcmpv8j2zLJPVRtJBbdXziWPGxiwnN42oZunfUcspg26gw28ESrucJxgdUKBhF2dGSZE7LvURVt6Jq8qbidwt",
  "key46": "PDuEULTQJyFkzq9cSuF1JnidKuYKjcPe89pkWNYh1PzokEVTQes9v8Z8cNReigbR3AbGuYJczDeRhpmTpRKXTpm",
  "key47": "5GX7CyNF9wEY1PbKJwHc1ngSxMjeJTSwXyV8oBHmWwS2ZsggX618skTrvRwGMxaiYRD4bnPVo2pBfjdKMaSNsiKe",
  "key48": "2xjWovYw8WHEqBxe6z3sDUPPs1B5q62z236Uk4H11gofD3CahdKS3pRskAH3BsD6NyT5iWanU8kpugTqvEgG9eKU"
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
