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
    "G9QwdkZpcnEdT8sJJPuU9u1M1hLJcoAWDZeeVDBiKD74D34xqE6NYSiu2KkFqTKsXWgTp1ikzndRCwvqfQhcbji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BgzSzkrXikMM7WBxsEoEJW5b5T4hoNZxmtdsNPvApWCGWWo8kyju81TyK2R3LxmeaCqynWqRPX2kai6aNaFPixT",
  "key1": "3ZVsaPzygw5T9BT5JazB18RZ1XB6eC4GcNcPYxiFVkHrtqsEPXKAeH7WZ2QsEsDw6PYWSFr3mybtUpHZrKgRbEpD",
  "key2": "VCAMyRQsMfamYaB54pkE5C7uVX7kDMmJxbfTSh1gKENyyd7w4kBnkKTjfHjuhENEhGcu9ZS63kzLJxR47WUrLQP",
  "key3": "2hqzRhW38rzdTVeqDLQUeMnCtnL7hmvHpTY1xBPmWh5kigf5veyciE3wbQMoxVCZRFdE6hKmHPPwc1RdAvvZ2Bmz",
  "key4": "62MmLqiQBp1NEoGfHZ5TAYTBpRv4ZyDtVohsUa1Dk6tEa4WH8fv82FEoLz43ApeNik9ebZGuc4xWPTRYrGgQe2iG",
  "key5": "nXg3LTMP5YmrWERmvbSEuZJkt4GjA1vJFHt4nZEPVZDcN3mhLgnyhjZDe9FvcT7zPGPfDxFQT6ckGTVFJQymWvh",
  "key6": "5zttDsVWW7rG3wAy8PnA73GFRaoUhNC5Nx6yY797HyTXYdXq8vAh4xbsDRqMqm3EpkZogvQCknqM8AEatwzTV9WD",
  "key7": "3eG8A8Ujfo7UgCHnxws4LXMiCxg2c7Z8XRhKPKsCx8NEQnUMjDUqXw8BcPneE5QWzfQus6gGRuCfiRsS41FBYWbn",
  "key8": "3EzwdoYD86GT3tNiJoxWWwSDwVm1ovkmduomtMdTfw7BZiDDMTDyUyjZA58X2CF32Exp3mVjtFsq6s5uJqzuJMFt",
  "key9": "3raLocfFitHLceRDv1ApNLwsoBpmLVQf4T8gCcUtr3futcyJ6jUtwnSBf4HCJuRsrPN55vmhCcXmrUAGP2rpPMWW",
  "key10": "2XHrJ7yfTftW2pgXqRhhe3KketHnxkP8Z37DqxgHgTGD4XAGjUQ7EDw9JTmQsPoSnWCan7ZLHUsWjtnvP4AXKaZG",
  "key11": "2Bviu8CBJQpPG6RtV4zmuiGmBYmtXUN1jtauVzHDs9ir5tWVgW7Y1t3CLqTTJtsog4T26hExvmQcvwTwqFytRUCP",
  "key12": "2jJHjKL2yJEMJkZf5vYFCan5xDbP4w5Mchi4m81BduXQKFYFDGCDsFdSupMwEpf8mMr1YBihadk4CppSFWxFmsNg",
  "key13": "2jV1VJHoiHKDgdWRYoXu8mcVQoscHGJuss8Apy21mEX52C1NJfPCCKGSmG65wVdtSr4LqgirWS9RmoAE5RPUfff1",
  "key14": "qWWgRFDMdhdNZSuG4sb4rMSfiC6TE8LenNPH5nyXwt5RfMwQBydxLgdXBoQGsS5VpbDCqj7PMZuyNr5bimqLd2v",
  "key15": "c9CKFfZrHamcMjn3MJjVNzcx4S9mgbeNtuAxWGAgAqT4DdtQvsE8KQaZeXdmL77uup8qxaoPmy6AyPfFqqNWhHV",
  "key16": "3cpzBjJBffXbwwutSzVDbmNY2HoGNEBBFQNXp4uJqLqiMgJpseP2sUwpRN71VugBa42bwwe1uNeJ8Yc1Ff1tadx7",
  "key17": "2LMEkXT2a8Vm1dSZ5rL5r4NsWNmr5zUiWUwBsrhxEXsFj4xypLczeKRhzCkxJq6m6iCB5cqoFoQEGo1m9BvCoZGn",
  "key18": "4AL66XNb42JJFNVyoGvscxaK2v8dyP6hq5nmKWXy2iPty57UweneUXTCkNd8bQYdpsLKazsggKnS8NVFNVjij39U",
  "key19": "4jH5BokracMR1czJPQg445HM7TjVGmChmazYqGDNaL1yKhQi9u73fe2q325Ai4XY4QQM7Fs8N1kbzGS54KNQ964b",
  "key20": "83uAptJqYxMcMhuig4GErws9fToBamqTp9xt3TD1YdB4JP1sCbVKUvKT4TNqNuTAhbUKXXqtb4tGQGpT6h7WqF1",
  "key21": "3w6HJnmZQdZTZW5RLsVpaehqqzna7LZLtvJZyfWHXoGDXDaoHMJsqwELnamm1o7XSuADVU4UsZxCkPMaDKLhVANc",
  "key22": "5vuxx6yhe7fwzCUSTAVDSwK6cBYR5LRqTtNTdjcJy2dGmzrc6qxRrp6SxgKiFQgDsGDNKcbyDJPmARiCyxDAnDXz",
  "key23": "2QQhbuwpq6xJHsJGT5uGou9KmehYyTzYrjSf2RhC4iJvLVnwzjqoCVsL6vKEKYeBMyoQzbakRnshZxztDe1PrS6V",
  "key24": "3i5KDoGpaf3PgafewcKSYVrPmLUhQKeqRQ1jy2DNmDvwzzNbs5hPcZnXobrsDHEQtiuRbxXRLgA3GtHjKrB5iUzp",
  "key25": "2dxDchK74xYEnPW6UZxrEgjoX398L97LgPK6VWq5Wqrx3RVchw3WBqVmSeudaA6VoZFNStMBGgxZqost2vW5g4fL",
  "key26": "5qB57ybDnemMnBRzJYsNq9RPErGxeCgnNhHx4R59qnGwuXs7jWTbVQcTyPo32XjeFcwKhnR3UDuJxiun6ygWj5WE",
  "key27": "44jmQDfKkU1kN3Lbj2xKxeRzdrmPtFWTJA49hQK3x3U1k9R2fbQafBMiGMkvJNKrw43nLtmkPxrxJt3owAdG9MU3",
  "key28": "5TK2e4GJLeCAWTsM1dR8ytP5MNEzfghTB1uMmknTojjPThe64DRopwFPkokUTC1PFFcbyzzmQFDpLd7ZWYQQatn2",
  "key29": "3betmLNC4L43xvwAtX8iZL9yan52mgSkcWMQyb725qptoRNXJw973noi1SumvFpmjP93JKHwH11wP9aXKbbfxTWv",
  "key30": "22PV19f71EqkW1hriBaGrqT2zSV6Qo9RQoS13oK3vc4LTF7gSXNXX9motSqfLgx9g2tea6jPQCuSjGw9LJhc1rAP",
  "key31": "4NqVn1w6mk7E76UfLSrdYiobigG9jY5NiZ6e2Tb9o5g6tzGbaznQCoM5PATyQBnHDc2KLgDbN8AqowgxjVYv5mCU",
  "key32": "3xpszdc36MGvmpgBABHC1y4sUtuNCUHcuCbjKoDahJgzLRnagoEARvVJeV9HSuqhv98EYFc6h2irSFvoiBrLsk6c",
  "key33": "3FrKmMsQ1JcJAapvkB1iKzyHEhXJTvV6nFWBKpNBvPppfzJF1Gt5sBMgWUiXmQiN3hwAPafBqq6NKzyso7UJnaKK",
  "key34": "4NxZ1QFuJ8kEu3BLUGTsp53DWMNqMiRuu2nvRvQWUrHAbkKuWXa2rZxrA4GHwqv5FgAfxBmeHCDPDy5n3w6WcevY"
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
