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
    "FaraY1kqMnnfjwzAUe39gvmu9QkeRK6qY8FuAFUaipG2UeJuK2DqnrNZLSVrMx153BGCdzFGEkiAMzFpX9uzJVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzv6MnbmXWqsVnMsSseA4rjNkyeh78vv3jQDPwfygCCDSw7ZKuxx6Q3f1QPEcue8Xsmb1G8Sad2cWfU2s43EesN",
  "key1": "4ip5xJSNCTrx1F72C2XBnShiSReYYUxGJxVmJQXZuxyBRdU95SZyQjHbwtjVgc3hv1Uhugefj2DUBBb8WGBtPXUw",
  "key2": "3JV2naEVwggCbTrXJ4egMBLqmZyKyMc5Yzkf8X33jXGtNk8LgrZbViCdaakNapULHtoHJouhkPgfnkoHLb4ARsmj",
  "key3": "HcAayzegRm7pVosyaT8JyZ82Dgx8HsfqdQXvdsmn7NiSyJ64sjcYn5Xi4KLf6zxsbzHmhiggTQFGh74doxaJ35Y",
  "key4": "5wz8MYcDimUEwJVSrnpeoLa6z1DqfWY9NhDARUzq7sVpR45bJRtJr8PxWAYukvgVn8RpFR21nw3s8PbpZrkKCVhN",
  "key5": "4Q8m7SrVqhH5j6YM9vga439yPpnwkMWU4uxSjMsTZBanWfJhNCVzaLbAdsvZbPSya3pH8ZcriQM3es4RJDk42NNU",
  "key6": "4XsZb1ir8Q4ZVMCcMUbg8g6645pA4mfXxkhBS61om1FjKjecRRjF8tiEPWjvN3nyc4rjukQBPtdVAJ45yjSjfpJk",
  "key7": "3Spx2kr1toLRcf9gjDYKBGVMd6hpFrqYAug4xxPDuRgScf91Y7TPaxZsuSXynW77d1xUEs2pSVNFbQbwR8Jbj9UV",
  "key8": "8Wto1wLVADw7LYVxZtwFez2JuPLfn26HUyQgwTT4m4CfvS2PuKwzn5hjcFy2H1P6LcDuwSN23d9YwLkQhVH3ryq",
  "key9": "46icBvRWUFPGn5nAUND7XSixCwp29mL77b2XgmcsaxXtd4UGG63MmB3TtuonmEVDzAm6hiLpWkHwp2WVJcgi1NB6",
  "key10": "rroxuX5Y2PfgdQPTeUtp3QGxbTFzAayuMxAaSm94jJ2qjmAfr6iJmD2qyHMEV58G28NPnyVvWfCMVsPK4pkkpPb",
  "key11": "z7djJz65UR5LCbYfqsffeWETKYZwBJkESjcbZWzgCjfBsKTjnw1iZ8e7RCzbicBpqdULMJaLschrVroynZMaVwS",
  "key12": "5rUBLmyW96jDB2geoGKi2oX9HHwGTumyPSPRW88K2BBYHFLykU8gF8TenoWrSXLAxssLQShX9yjTR3HaGjQiyCq3",
  "key13": "3fT3NiuZsou5AviLchEA9bucGCjb9Dzx2PcqC5DfBqMYf6MNDGTvrvCsdA6eRBe8wAgfhpTQJkNubvPvd9WxvpbH",
  "key14": "2Gbi5zTkPMSmxut4X6ujnfZRMnAkTxsBmRxvjvjLjRmfD1bhKJAKS8qG2zkFmBksc1AeSpNKAgK788Gr8UuehN13",
  "key15": "5BgyUwdVBMvbG4TusB2zRxdNkZoBjkcqxSRQXiXAwbBnKoKa5XTmLhG4fBwxSu7uKJTmKsQsxjxru7yfFSBgCauV",
  "key16": "125og2W6P5SB4UgGH6rQdA4sQuqjwEQ1kKxjBNaJVwxBG2w1nh4NXYZ4gyovGAcLP2eJfMYEDXrRJ4VQ1VryGyQX",
  "key17": "4FPMjWyJc4K6dMiTm4t1EnLExDpzxLcYy4EBhtrK6AqT66uSkDLXgmWiqwwroXUAkkyQFvAVTzA5JpCPsU2xYMKL",
  "key18": "5D4FkZTzcZ1ojUpdTMHhfZsHPDZJVz4xZBkMyFrnC1sSEm2HAZDS4RaTQEmaWttfdjDHPhppj9sqwJpJ6e3aj25K",
  "key19": "c9cWJsGKp9MTQSTMCAYYSfaovLUqjUL1EDGRGTqNzGCzWoPo3e3yKcSNit5jz6Xx7zU3w4yGpp7eQzP5N8EPPgE",
  "key20": "4bSwENRcCxCR6CjAruwNLCTYBZG5nyqDuYncckjYEzPyzs7F7DXbGMaEbVabooK37BEefRz7DyWGrZE9PGLqDFgQ",
  "key21": "5oq91HRCXn4b1SE8nBjVtp2uJ6mQ3fKDQzTNC9uN7VfvPYHaTF1vNSkXtDGcmE7GhNteJLazAgcSCZeHtqCC2Qk4",
  "key22": "31Dmwq78YPzPAgvejxHb1NBudW5yR2eszmiekbYgSiFs7is9uk2hsfsnA2XjnkiHH7RRbTrGxg8vxMcu32xHbiJa",
  "key23": "5QxqVq7ZuBieumWKAQJvX8qUugpo1yX5MqoW2kv5XG8CXwyTrGAsYTrGkk5wBQm18i1RzL2gzSBPLA2iuk3JeEnE",
  "key24": "2DXVhXkxSpPEbJmcZu5igEteACdqMcU7EPYjTnnot26qrLu3gWHMcCuMDB9JzqAzArVJXJFwmAzU7YBF35Tp1aGc",
  "key25": "4Xr65ooLSXzQBgkM8yYPfurvCWAR5tmCpxgyHybU7EdPaF7uUHcJf1t3bHDZBwMLXhfwPHUB81sU2mbNe3ttpcQ8",
  "key26": "8Tqu6E45TEEDJLrDEuwuoGSAP1bbBCP92xcMMV7VQ7YL2DXtpRceGY5ru514uFEdKZGkpV9DkTPiUo1nfp1RZYJ"
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
