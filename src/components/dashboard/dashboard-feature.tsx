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
    "7QZZcyV6eRHz4xAVQtyvBVDAuWL5XYd38PQeM69mr6132N5v5caiY5LAu4do4iY5dHifxXEBogmcijJZVWvwQww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFcbPKefCbDd64kVQRKb5XASbcUFsPEwh6pVecDiL6Ha1mAUEb2KVVcTvnjVigdg9kgujX47GzsbBNPNaTUqtDg",
  "key1": "4pXeYKvZX1uR4WPJJVm9WA3Z6pKwusTcYfquCQcM2jdy9VDMspw3wWguHNEXc89FZcqAqqLAmg9gpjAFTtC6Susi",
  "key2": "5PYB3AbgCRybczfosAQXJ3zyEdFipFMBoYPmbvzKYKDdyhQbCS4w27hNtHkuC59MyNCRcir8MfGghHa3jxbkB9Sc",
  "key3": "56KnRsrhUwNJiGgGhyy1E7wtojUdEL5SShbEdp6q4ZzEzuTAT7rzDbse4kufMNS94nLTVogMiiYCJS8wDdqszUsK",
  "key4": "4iMmGCZ32oG171eCdaTavgQnxPzqQu69wZB4KQDJfSMf9QNR2vhiXAQk4Qf6C6rfJFdUnAAf3FqdYE7CfTVVw9QQ",
  "key5": "n2xt4AZdNJ78MspxQGMNwozRhXCsGvHuicv45Xy2fQm9iPSNsCXRW4bZqkbA4nJiE6VYxCL1yXScW7jLGHbNC7E",
  "key6": "2CdJ5zHEBi7EcA6UmkQ3RGqVgv6o3rR4EmCnftzxbbd9e4aDtLGhoR8k1SgYU6GjsiHE98RMu2xRhZDV5BjtChju",
  "key7": "4uY4SHw5KKEybeW2TSGYSeo7kjvZd3vU6RGozcGAwn6SqkRWhejno5Qs1n7pM8GzxGnSWFHA3nfGB93QFaUT22Aa",
  "key8": "4dcfVQbqQVizTUMPt4WhszXikVBVxy2Fng7GFrASJBeWf8b1XowmY4o2kTVsUDJUd9zAsK3qH6RtEVuL8x4uhnfb",
  "key9": "2HGtcWQvYaQVW2MmDzhyRhR8wxcUV2ND5gtPEwXt55ByPwtaP2GCbU6HajjyGBFgu1yrG1uXEKir6Hjo8wsNDjKw",
  "key10": "4YxtZ1NQ7SozcHfjf1bPAjKqRw9QHPHxHDSikyXzbNSa2udsQyp3SHpbvWd2Y5MJbKm1DH8KRUGSd4ecqVPS4WR4",
  "key11": "4kYVCFsZyxgz8J2NWpQT56WqazCQpHZrUXhyQgR17N8ocPRhMticozXJkSxQZmuVXoJAaYUBA8PGj9ryrancpsoa",
  "key12": "5wf3BHWGbcgVtetR8T2PY3c7tYGJqGXN2H6FZaAHYnE1CjaHP2LxzFLBuxnxHA9cPUNuA5YAmZcxqTqfku3FzsrH",
  "key13": "3sui5LwELzXUzN4WqwWyFvq4SU4AFbP3htR2d8hQyAzf5x5ewSpPfN3W5hEhP4Rbn2nmGchDp8rLNDWoQRV8BXSr",
  "key14": "41axedcDJYP3PcxneBypLU2LRUCk1BSM5jhtGsMoa9yENwucBrLrocP391P5zi5ndPKRtbKiZqysjHLgtV73GmeQ",
  "key15": "2TLddMw1MA9aEiuCcnsfHHvPHQVf57CJoigzRqYQfH8aVawPgJktUuseU4zVsntNNt8eYgPx6J8CnFFgDRE77ZJ2",
  "key16": "4YZxFRKBuZ1NaVDdmybv7EmDj1cZSMv9aPmfhHiCW6XBJEsDzvk5MpdiR2DgD9JND6A8QotteG1Tdz6TN4DZ1Gk1",
  "key17": "5SCiWgVJ9q7buospfxKWNJsSHBZgSS6WEs9EnEoE8wwvFR3h6qbo3Dc3FTwHQezoS2QVGx7tC9kNNM8iXG3byGcE",
  "key18": "3zFtRU24iDRCAhYXwH24ZhcmKpsS4gyH4L6bp87u7hpeFka4BeiX8ywfaWQypUhw3CdanzqUTtWf8SvT7tHeE78m",
  "key19": "4T4tMiS5wYDKaWYiFodTrdimxe61G3N11MqAWmVhKpMKCSfyTBV89E6Ct6cJShQS2wHg6n3teS4LspCrabx9g3Jy",
  "key20": "478nQjDLoYxUeu1mQs5wcbGKrXEM1TAMen4YNjKBDJPc5DurJySp1LJ21NXtka9UJ5jGfVZkE684g7gmMwUt9Jy6",
  "key21": "N7XP3PhSRS8rq4E7mYtzDqUayiQZB7y214CiXpLPZZRKetpRGEpQSPTbj4UfzmDz6y9Tm2zUw8z6yRbKu1TS311",
  "key22": "3qAHG9ydVnFcNyFbXs6RLTawVynHyMikrUEhWJNgZa6F1jWSsQQU2XthFGqxpiDTi8JJHZMcgmvj6McsycLZYMJw",
  "key23": "6ghoNb1T8o3uwb7WHDg5qs9XQZPzJGPMYTiCn8FnnePx4PJBn7PAAa28qFPAAte4H2PMqjNcU2Qk6Kmu11Uyn27",
  "key24": "4MNbMcuSHHziN11u4qWKuqrXWhVtWd8WLArJDijhcFyRRQDW1bVpV6o5o9ZsWnWHHLTby82QVALwembK7EiTkYco",
  "key25": "2HTEkHMe4mr62oTPVQ3Gnu9p4kSN2WNFJha744x9zzvbMjm8z3o6BaZ8fvzU9mBbLmrfEEQv5o32N8XtkCLYe8XJ",
  "key26": "CvHM7vEWn2uiEhkCkgZtA9YSAgNNhGadasaeHUHBf9qx33WLh89QHGgZwVuu7zCr8Jdn3kxv2Et3iktW2CuWrs6",
  "key27": "ZEyP3a6QoQby7HqBCuifysC4oxx6DmJvWdxkTvdHej4yBMxcK7QhRBZJZkdGyb4PHiEK3jL4FizjKVnv4uMpDUS",
  "key28": "3YyG9baB2a4Y5hw5w63HSNkDvQMsXYWp8aBFFDBQz5mz5VVdSsSVbdWZYkm1NBxJnjMi1GhUX2dKimDsSCHTSTYE",
  "key29": "cQWBTrUfjXtvUypZa9YjvZghSPgYF8ovR24rcdbFWBUedXkRyfL1a1dJ6V78epdarkmUHvBLKJ1YcrEECooRZZr",
  "key30": "236ihhWXkXESboqRag5gVHP5NoPC27nwS4WCiTPerHencWwvFoPDrbtubPD1BTsf51GkFrj1q79YvyNJfje5j5mf",
  "key31": "3t6vzXiCRoBe6NHjS1PvwaoGLr9RpP2tWN5CbRdS8HWYkejVue1opuU4R1s2fU9uaywjHKEera1E61US2DqNvcGn",
  "key32": "31LLVEWJwCyK648Nrg1LAkgd1nwiVazJxqJiwZ1R9afZViW1d8YciNvdKCjaxXAcbgqXon8czxk4BfR9zXGcedXW",
  "key33": "4MAR6BxzBp7KHSwnUAzHMhexe7aNzxmf2CTY4cwJYt3Xcdb16moXkEMA8UD8H7mGtc1YHr6fxaQBFmEM2HxemLz9",
  "key34": "289esiQNXa7weqDGfmfuCZWafJtTXnjG17CP21Skj57eUZkfPCFhTpSmzRbjvAtcCeX5aETKjBXnXvaQrNL8UFbH",
  "key35": "3jNhnD8awLyqi9KC4gTVQLSgMRFFBhd6kRYQA5T3n71ebask38jttYneSLBdCkdXP5PcLSmefQp61uuov3zd72A5",
  "key36": "2xkv9ud5Ffa3Jyczfrq5uZ2SnxnAmQ7x4pr1w3pGRjnVgJQb2sLVMxdGE1nB2cqk85b1z1D1N11KmvjbJCtTm6qG",
  "key37": "2Qa7fkkFYSqEdrXbexkEwqWqSdVHX154sWwJiy4h2i8uwXt4eK7Xt6L6rmNf1WkP17pgHzsTKwnNgcetnbrnu315",
  "key38": "2YXxESyboea75UGqEDU5Zb1yGphAPPSpEU62UvVuHS9CwXv135YSPu3WnQitYzNSkAVR2JDm5E4uH6co3wTmdWEe"
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
