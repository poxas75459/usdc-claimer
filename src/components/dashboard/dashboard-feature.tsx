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
    "4LE5WqyZhhcfr4QkABGRET364n7gES6HJoobb2kHbv4Bfs7vFYQyNAMmyoexiDSjj9w2Svit1FX3oPmZD7iWNbbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B9sSf7eyLqwx8DDWTCBwFPd1TED3rATqoRrt3f6cSUhvbeKpF4ZDPingfSCWNrWhdB2JD1nRTnMJN5pfabMQ9wM",
  "key1": "9RcUfGPA9VChzztSH9kQGPJNudTyi5NtFs7BSPsMAoYbwykfaskBBZtbqNnLT5t1VSbTLHfHrCgLfPUSeNF4EUs",
  "key2": "2vy1tUcrWKDGfSg1x87eRQbunzXweGJX9S86KGs68TK4fL5nDQwVDtzjV6bKYmDnxWCtDnKjPwzq6wunVmoXWZoz",
  "key3": "4TbeZT5vt4a1GSQuyJ7Hdhahpui36duj9xvGQt6fc4bqapeT3oXXdbGFHoSpVbur8LZrWmRK4Cnhc5QLPotSbQxJ",
  "key4": "59Jq49gKUUEtGVwhoz36zopkqQ3Y6ZSkiB5ErQCqtgg45tD3coJYsKfNCTWAHAndTRCbeCq7EsicKPMo4DfPpxAy",
  "key5": "5spu8pQN4qWF76ZozoSgKPRaGx32aFENXacF8yzyZLEJDt8iUji21TzuUvyQSeCEk6afwLMYf5B8pgYZXKR1p5KJ",
  "key6": "5yTbVdeMVU4j2eD5dw3xT8xY7guJgk4pn9KatjFLdmw6tMtY1r4ok7iwGpMiaRukL37WUzYe1PNdroz7uafVLLdw",
  "key7": "i6bB4VvjW2nKNWD1PQTpMsLPxzDYuXEojCLYLXtWrfdtkdEJu5qtgeuQdMcoNibCpnJMhBEVH7zTUic4B91BTsM",
  "key8": "CnywPkFZdjJzRpkhggT8qAi1gJqZPUZkRwg7cSTjmeuxRuqbPckvzNGtz9bfeRCuwRAAT1YgXs8E49QkEAyTfZ4",
  "key9": "3BZMxPCWz6R455BNMP5yx82Lr7zj9M75caKAcQCqUMeURsUjCmndYhABMr8njWjWCZC2nRoocdeC6axuhAJ9EoHf",
  "key10": "4U8NnNp8qLJ74SFmAQ8af7FAE2k5qUA5XqSJfwCZ8aKcmGRXPutmaFB2NgEqjnB8st4eCAdB4DBniSaHTp3t2xn2",
  "key11": "A9cqMe2siLYdbT3zkhdWpe9TutBtxPNXSrqR1zQY3EyZYeuaipC2xgpPjW76fWDUgmPh1eM8FftGpjPJeuxggNj",
  "key12": "D8TdxM7gAPTHD8hc1nqtXaePLYfwxCrKsQn97wkzdzCbRa4Bgi7BD26gL7GQGn6HZ2WFAtgqz8LRrQqU9h2vdTG",
  "key13": "4Z2ier4UqAoxsPMjqUhcu4RWU8YyA9WqBFJG6RZqKYHuxRCifcqzE9mDyF836DAaB7H7wWsEj1EkX7g7KAEhiCEq",
  "key14": "3rYch1jrX5uyHJ6PrAiMENb6u5XLdxx3ZdTLiiypPwHxcE7tshZYgBNmKkatGk5Lgfh49C2HqX9ChLRxGrz9aCvv",
  "key15": "3ABLX5qPvaRVasZmrfvHh8GeqTioFSKMw5S9XF34QrgeGNh2ifjmCuvYe5msvThffeiz8mxBiY8yGvPnHVCvGa3R",
  "key16": "4TjpHDcyowc9Ax1iB4hJkBGP1wskjf4eFrJrPBq8ys2c7t59DiuV5HA85R9b3tg2BpTvR5ifksnn8tHjHykJ5P73",
  "key17": "4wChQby6VSLexCWoKsxcR2uWHvRGU88vDrta4BN12h26LNywkF3HaPNFMJRrisjApqhf8HWic8JQZnCEH1KcNEWw",
  "key18": "2eM53EfWuWidgpGbGeGkHx8uuDmzK13tgfGLoUPW5WpSXNFDSiVT2faQFj73dVU8pW6c6Eew3u6GfSDGwoh3Z7t",
  "key19": "47K4Lx5EjTRQJGwRXcvBBCQFWqcu5iVL9BXfSFuKHv5mWPukyTD5Azqxy5W8mQNYE91Ld1gjZY2ZnJCUUkHdJME6",
  "key20": "5bTtY4JpuPZUsDpKhg2F1GL4T3diUoX6dpvsLgYxfanvsWzvVAuntEQzfRJiy15YD8rjUXwWsqJBtNf9ue3V5bX5",
  "key21": "2NjLcu8HW72fPyh3X96x5MDTwWrShr6q3SMBDMmCm4wGBgb6YqadakoP9bpmM9a83MEkMx53EGADwpZTAbPUvbda",
  "key22": "1aeU98Bf5dS3LtwiCz9NWnktEKQPs5YnB6hJ1Y1ocLtmDmrbSLMJgn4Tc1eoGBmtMGQctrFuZS6g2EUjZhUR8Z4",
  "key23": "4PUbmUBKRU7DN4biCCvFVgbdjB4oT2JTtSEe5Fiw7it4yCWX99GQmcaPdGkgV4ownMnAigUY7k6yNsrAyxMW3NTf",
  "key24": "37V7QJh4jsVcPkLfQEEPvJ1eARv5BwJuyAxjk3miMJMgicJMPuK1U8Fx8BCSyaWfcaeJx6dnVG5kwiC1zHLmG21G",
  "key25": "2w2dqAj5D7VALocCjxmwwjrxFLvQy7iAYJau9e3wrBdkGmAsHvxRMSnNoiyG9LjFd4oeWeRbH2JUPYFrn8BUT6pV",
  "key26": "5BBKBuqiyxrcHPrJbPnGqfUJjTnnRaJGEKj6FyNceJtHG7uvFjQLJgVMYwYzzwj9iVB2mxrYn9GCztjYmx1Nodrt",
  "key27": "41vjd12quuzeTdJQGXiK1sh9roJMP34gnP361npDvo3SP7YHvrBdaZArpn5uFV2Q1aQUE9YAJyS7GsVTHGsRZkda",
  "key28": "2XaMqs7nmjMgjvXEHvGDaRFrsGS9sv6wAq7xHM3kciDCLcuscR9wL5L9dpRWv8WZc2JcTcosRrLDyW1siq9FavV7",
  "key29": "5CvmoUVMUc32yfWo7fv7JxsSEBJCXaYXYDXLg9hBHWnButDRdpdHZf4STBWaHgFukwFmBq3sC1unviGrgvuhfUy7",
  "key30": "2skGPtRAzSqB51GiECcRiWrT6ig7SSuhtS3gwLibqPa8UVSy64ET5Z2wJJt7UytcSH2xvd4PM8LfyGwLbGTebDLm",
  "key31": "3amUMCnTXZF2ij4dwMWxgy12jDpme422nYYwvYNNMp5ffxJRwoPLbTqAh4tG22bFmtrKqqDJ1Kebz6Hro2q1QGZj",
  "key32": "2LRxxgnuyYHDWEoLdSdHyxSfG2BF28E86gMWZrb6HjYZeMFQXBV7VQUuT1Ak8mJMRkDaWYAupWTGXBGt15c2dvVk",
  "key33": "5hMvgUgWVWs7o1MaQmfm28G7q2JHwbpyENnean1ZrcSje687Bo7Mq85HuXxrdu3xn69Uc3ZLoGxV5RJ7UbfJgvk1",
  "key34": "4RSjo21BEZ8NTaeSXwRdDx6QZjYaJPy3eBafmXmCvDQC9xRpqNLcHuoucCbKoUvcuf6Zqw22AdLQwtLqKHHk5DgU",
  "key35": "2yKv6ybWa7DMCngpNVk3npFs7q4FhNGxAZrX5Lkk9tWMMPKdzH2kHL6jk9zNnSzdqdZ1yv7Gvhouz131qujg5AqF",
  "key36": "DRAgFtBA7d3JvqJoVyBmxFvfSY22Mrzrf58E3STyHLjdc2poVDvQqJuqzDUqCpSXRWjktp4s9rVCpzKe1PMzVfq",
  "key37": "2YyF4ZZv8eR71xu5g1hcU7FYat4Ndb6ZaGPeC1wbUHXt1HvgAvAjumdsZ21f9wnvYPUMV9g5JgujoG8KEtBAw5Up"
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
