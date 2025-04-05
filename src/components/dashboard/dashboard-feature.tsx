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
    "4p87DxSUcLyrxbfj73BDY8EQgCUttvcX35T4BWHntLPjukAjBDtQCFp9oKt8i6WzSZBDFGhcQLTEcFAsFDfduEML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVnc37PSuZGiFJNE9e8ckTktvHDUNXUFkAxFhQgwyyVrRSXL1MEtXGm7e4ZS9JNsjxreLKBCUVWH97mPRutEN27",
  "key1": "2T5fYdR9bAznMdt4jLxu5iwy2BoTWm8oePRyn6KPwiWtPqXiFbRwiS9AgC4Jd3z829JkFAEvnn2AKCksEeoHp2WF",
  "key2": "4vBZx7EWFXd1hL73AaFa2yMjSUc1eCG5DfGZ5yWhkWbFAhZapQSxoAGC5MsfDDPdZb6EHovqyhnoM5wYjxmPQU22",
  "key3": "2VkRuvDxW8ygbs7CEEqRq5vchg86knfcuZWo2ab71rdvcCNiVnSK933hn92KAfSFhjJZYmA6fXpCM4UUS1QEdqWZ",
  "key4": "4ox4o7KYEnAhmAQZHh5QgkwqYA83JQL2pTxjDEvKZb7vQtKc4hjFbTnUJHCt89J5hh3kPKX45MbJq9KfuFpBTYoV",
  "key5": "rTFf1KS3CrAzaWgWeNZREBCRAaDwPuefMiZchwfsKNunTxh5JWmuzx3skXtYwqzEAu9UuBKKV9ZiQByyRbM7f4a",
  "key6": "5M2D2DGCL95et3Y4fXp5hrJwvgZMAEpRTBc9wfhc4rA1jzGUd1svWk8kNenxCSjXT4yC74coUZdUrsLzqddncawE",
  "key7": "4MKDsyJvUqLQjc32mFtZXKQCfnUuq8pgxJf6yKQbicg5nWjTPxDUawSLNiUZdGpKd2ssY5A3yhLc2GN5vuvnV258",
  "key8": "BnjaDHqhDbxYAK6nLS1vYFsuNmWreFBS8W4A7CGeg3nWj6Wtf9dMPdCWFbyh2KyEBWmAnPZqHsQF1RV37jR7Cxu",
  "key9": "5Q8VbQtHbxmZak3jDoKBrgBPaZqsJqCsjVgbpicpnCkkHU19xwFfqHA6c5Kkazh2FzriTHxEYY9f7KBpi4TrfWzu",
  "key10": "5Z5hyzc6V43URtfNU3noqkSgRsijpXd5v6KDm4rrfMzdLUE93p9kCFKtMVJNSLfvfbTFriCzMjACgXbNd3PB2kqM",
  "key11": "59tT3YuoMpbNAdJWA26t9cRyvnmTtkjNbKHTbbQLzNQHdQhtwB98JKd4EdWCaaidP9Ah1DrtMjrwBr1MbgmtVKSL",
  "key12": "4cwceNLSFxXQUxBL2MjTw7LNAqGe3z2h1jJ3QBRfMywNrg3LR5SA9cxhbYXJ8bHrpXmfBqjaHpFEbGmcmJNJPw6j",
  "key13": "5RVdSgPNdQAQ3bpxb73sMMqvmRvFUjm4yscJnSzgUXoDyxFMdifTSWMJbJ3Ju5RFhoQQVndim5CSnmASuvNWatJi",
  "key14": "5VMcAEqcfJjCBDw5fo3vteDw7iU6nHZs3JEfvzB592wRH5yMPhz9NyxmLjctmeNRx5j6FLSaMJY1RFAkQkDCxpij",
  "key15": "PLuFfroFpmBAFmxi3yHpfR1o7rckGHKx65Lm1NPA5tLZsqcM8oVG9X6bcwv2r7U1sHscGArdFhfeLUEMYxSUK2U",
  "key16": "4MvPNX6cHQA8122CZMkhDCimwtfKHnV6bsnJybtmt2WY1GzpJBGv6LF52J9NgUJ4jiaBJZrtxmnWCQLExSHWTKJ8",
  "key17": "2FsY3sEgvzzTvYjszgen5DTuXP99A5C5AmoWeFxxL9tkqxMM3qcQHoXbE4bix21JyVinHorVHkdH6LTvX6PYhcKr",
  "key18": "2iLd3Pfp18NAWeUFvts8LbCL3Sby3Cn8JYT3npfBVKdqBaemg6MTZgQ27LQp6CS594ZQdcWaUusJosLNw3nF7p5J",
  "key19": "PJALuoNZozfXXWQaKRWCsD2H6TfR3BXBmiTxJiKawRbnGmUSnMoPzHtnjKWxhg8uT2Vqk7WBY7FtuzoUHoDeT3Z",
  "key20": "5HhCjzm6ftvJx9gKtoc5ysVWUGzw6bSScvf3Wtf3QbnAhbEuR58ci1jh64oQDgwB1t57zccJWUtakmjFMhEcCyAc",
  "key21": "gpVxHBHQyKD2z5EfmxroahwQN5SJSyr1uWNWa3bdxAwq6AbAjy7fwJGUxGodGMJcdXjrg9BAy23ugXWuxQWqRUh",
  "key22": "2x57mUHxed4noSTeBb8BoH9V6QpgXwvt5VHevNkxMvr6pe1T9nLSCaKN2QzE1pF6NuMJ82agzCq1aSBvBPgB9U7j",
  "key23": "5QvVLFGbwS7iL16vNufTQrqgUmcgkqUNpT5UkqT7LVe4VeGniJ5pJrNDmiwCJtcZxguEyZo3b7E8hmqwaHzg5nGV",
  "key24": "51uPbEgdNZRWAyPSMCS3fcNVuRYJErkU1Tb5VwT1emwun7ic4MKi3YoDChkhEF7YHDrDjLFLzdTn9UmKRJjxMnYB",
  "key25": "4xUT3NJHAvj9WQVZxrYfKFjY29s8sjKPnfPym7LyhYgdv1nmBMyXVGCdz6Tg4UWgP4DseCmmf7ApdqcwCD9dGDNy",
  "key26": "296aeDr3B57vwQ4SRfswaW3wAqMfC6arcEm22DVpS7DzHzr58DxCVsTk3V2AmGMhgfio8rsxjrBV1xvFZP7p1FSx"
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
