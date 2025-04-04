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
    "5brUz6ao98LfDyxdG1SzbrjM9jqi3nd9FMizP3NugVP2awpdahfMzAQVcoY7nieAQv6dpre4SATpBZutuiUPmg4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBrLqpBdSdsNwHgxSXFVudZUduBYEREu23MrB5C4xGcasFXQ7SqzHY38cEy4MymWaRyDyAE1ryFFsa7jAmUxitx",
  "key1": "iPuAXdFpzhnESw3GtAGg6WQM7Z6AqbBr8QYBCXcWiaZ7MZ1svA3rqqiFjj7QcWarqG6NE6g4RbK43g32sa49ALt",
  "key2": "NxUDVHUD1j6ywMaLJknaMygwLRd13xyEb7Fz9e2wT76vwe7ozUN4joPR5WMwJpGF5kSQ6W1pj5Tqq3UVPWGAZbz",
  "key3": "wkWwfen52dTaQkNac1qyX7p7LnCMFP2ewm8aJDEKcNvstMyKXoCXNy9gNpwEfQmizUkSXhUYy4tYJmwPzkETzpV",
  "key4": "24f9HeTF6dARx955tR1KxDvqTaoYg66ft7fsL5AzpTBpSuAZJxhGY74WAqamKzvRWbA6xfpekYVYY129XqTrysDi",
  "key5": "xMZxs24aZeSZAx43jiJiXM7w6wstDtbPtzMyToHoJoJQoNdJRRkxReuVSn5VR8dYSnt3SfagziggAmDGWomGDsy",
  "key6": "67G2LBfs28Xk8NdZNacuA4vS42jm8xTDEg2a6DURjWdg9j7jZXcLqpYB8V1MgYGP7HcbxbqYKpgVSvgXty9MXhDW",
  "key7": "2XK1ix41r69AzMAegzcrhfYd76zp3VLkU5TZXdVyHcPK2nycMPaE9NLaWWEnubzsNThspUDZ7moBF2DykJWxsK8V",
  "key8": "2SGYAGq8tdNhxYB5BqnNuK82qFW9WU7ueTqMMYYE8RURAMH5gwekf9ZoL4yCG7cJVzRUUWDbx5KEzpN2Eiv6oKgg",
  "key9": "46zjnTxRvgGCAZ93A7uEUWnjALXCdaxgeZcvoLZbxHUJdTvPPvmTYeTmRmgC1GSAxWYSKPYr2Uw6YPCdh95uXXb7",
  "key10": "5vP4oadvqkxYmeyejTadznxN6pV61aesVN9y4QFWmF7KQDXVeJPjPNEfwaJ2CgCmqDRUAPkmhPmBAXrbRjPsyd72",
  "key11": "3bBiHC3TQgZ9bfCPFHDVSJTuHompJZdTdwERPi5tMvXxncxQjT4SvN9X3z9yjwyQBzFFaHkqwwiynHewPmzDTQpX",
  "key12": "MUoShvFFKbwof89ypesMCGLLes1QSUDwRZSPVxSJMy1E1XawT5AaoxewVA1qBXQqjuXZi199on4faheWnizHtcx",
  "key13": "2bgGo9hy5SSk7AiVhJ5zkd4TBVki92WNd6j2xDbALx6ShL9kuKGYjbjv9UeokNhcTy9xLg65dfaRFuv2i8AJ6jNv",
  "key14": "5FMr8zrKRauKr6w72sWuJCvePgyW8hjngUFKQ7pRzNWuqQSYfVag1ka3EWCJYKKu5wbbsfHgteAgeifEiFafnC4x",
  "key15": "3yWBuRrFynDTcX3mkw8bXyZw7kDbpw5jCR7GQj2Y97F9ScHyvt9hjthQSMPLbBNZR6j95QfGp473nJRZ7212tZgS",
  "key16": "369177oXSJdhUixztPCsRM1KPDnM666JCX1PwAusDgbi978dMtayuHAmz8PvYeJGqbMRLpkutiynDZMXXMtbg8M2",
  "key17": "B7bRSobH9SbM3EUAnNGepwtAhoCxZfTHnZ2EoGyBjMm6Qh9x7DpLkUh5iHi7freSVgX1xiE4wAy9xo8C1d5vf73",
  "key18": "4xrXa17zHADewZjSyTvf5eUQbf7Cw3LBLbq6psoPAP97rNBp4DhSofDyrzABVDVqfDEznvJUerFpnCM9YZKf5gnd",
  "key19": "5JY4oJ4AF9zw1T5moh7RxJ8T4Z4qHGouWwjhyDwuuhQi3j1M3cm2whk5HqG3M6LBAuYn6j7foQiEpFYKwCPwSKsu",
  "key20": "52uKihoPbG3ugXEwox4xSTDP4eiGA4QAHLJBXZBSbrWES9JgCG9WFw7kGFoZT6ccC1gVucnMCcasE8HsLeJepdN1",
  "key21": "SSg229dnyHUwGtZZQpgv66ebse2Gv14T5uGQYeta7v4EJQJ8eEBmZb7cGEWXbQ18HopoH3n74D6cySsGWzWeaPb",
  "key22": "2yibS3ThKxkwtCfSAAeCS7VWy9sJNpYBya2pcthSviEcUAN8GVQSQotqwxpmWKe1MZqoNQ9dYnGa7DaJx1z3148V",
  "key23": "31xCkGm5N5Q5VzWyWpRjJGanQNJNwcNvuFB6njrk2zfz1iCnEavyX4kU8Zt7pxB6KE3WGbeYGf5ALt2poXH4698h",
  "key24": "4c5tvk2QfvNKo3ZovPfD6tVAFTR5bGnKdRGcSmaT2xXvrhVBwjBXmKDVDozSYpEvXS6XcGhwoTX6jEp2nFPrBeTr",
  "key25": "5sQhKHWReL4sYX14qy5Sdozr5UoNMmVXYncnK1Wwn6ZG1Rjy8DLXPUY67LfgJZBy2sVExXAyv76t9uAzS2nEsuM7",
  "key26": "tx2SjTPnbrWAQWzEEsFnQZEa4BBjfFgihia3whvLBahhfVadP1HyTXRfJTCeCVrokG6AiG8Lk7KgoWRXarzEU2k"
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
