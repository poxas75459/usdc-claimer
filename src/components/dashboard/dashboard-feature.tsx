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
    "5TkEuJHsZuC5Jzrz3s8FmKrAqTPHLMFxV7qZf6NZ4vJ8ew9jEWynMDSPJc5rysW1ryFCnYxHp9cq2usb8qBH2hZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjhC19nRanxJqVz2CPMUC5r65cQLemdstSocAEG4v65vNWcnba4GSKcoMPqGCagZSb8XcecTcFcVTwnhWF1YkYg",
  "key1": "eTvqYodYBB5HSRwCx2z4cLyZDJYJGL69fQTKCUP1hVo24CfopEf7k25E62rqrwSsDJSbKgyD1LA6T6wdWPfMqJH",
  "key2": "5GELW2cghTqe72EqLqgMWZNFdXaRrPzqHV58Snio9VaysNUSNNmLav97R693iMcs3vS6pMRZfBD8tsRpxzqvJTGw",
  "key3": "2yt6b4C5ipS5RdPCyoFz6VHcb8anoWhbhF2rTRREeMYHSd4fCg5x63jEN6NJW9R4Yrh5LwbJetcF2NBErHwL3m36",
  "key4": "5qXLn1WXkVmj2ydddGuEbuwP6Q6W2ZDcjAqRsRyJsfGzF5nz9ACbSWmuCkNcVBqA1cNJU7FgyuYivibuTDqHrRFr",
  "key5": "4LFLDP9D7GhRwbXstjrS3VL411SPMznHrNvffcRKkxWMJxdd7ZHAkrC7QfPgAMbfBhEcwZFhZmLxABYj7EN88Q2",
  "key6": "2FUwarToo6aQqTNGsCuTPFxwfKMYRpiWjTbTr5v4C5muL6ron5QBhgZ8ipbfRuoveAFueTTQ1yNy1t7ZqWQSKeox",
  "key7": "51J1TdiRTAeykN1C66SPJaLrL1rZN1cBUw3Coocmirf3ZMU3z8n6WwY8GjK8s3P7uuVgrX1NAXBgZPjp8p4CfQsC",
  "key8": "45bqCd1dsZ8jtsbZieDKs5rYZ6ucr8va8xw1xE9CM6uWbJVNwUPUsAGxg3jkvz4Gcmzw91Ubkt8WxXEx6neJqWLd",
  "key9": "4pJmBiFrZPc4wogHkmxqEV9JVyZbUAfMvTyu8qDdAZ2eyzAzuxL5ag5qWECSwCyXRZ2SZjERqxKjHed7GAqMkf5a",
  "key10": "5qU7C4qaw6DmTGGey1UsYUSAwHsLUgiCAYkioAZqDnswqBBBWAiZoeW9cE15cG3mVYfYiXi2AzqRKXZQrYZ18H1R",
  "key11": "53R1G1MeeGPbevBxR2ra2vQXGVe4ZSdiNmv4tS16tNRZrF8qK8xh9rNNaY3kpXxVk3i4V6UWdU1zfax8MSLSss34",
  "key12": "ugMZZL2kYrZTiuj4X1iGGkboFdpKSGZiZcNGB3s4TYJ58N6uE8xbGaeuSPyWbRrdn7mv1UEoPBDyLFy9fuea9b1",
  "key13": "cByJ2ZPyrDsdidsVVaQqeBDZEfDHkZJvbef4Ko1zB1CNJmmvYr7WsRx3cnuvu69rqTZo1sryXEUQhuYbiS9fUGQ",
  "key14": "j6Fmh2H8YNz4o9FzsrGE7UJvDWvCfWQPXoTj2kEVSPjcrQhNoJNKGW2cMArzPBAungPh7YjqDEDozqDnvUksgAF",
  "key15": "4Zb3qQGWxUGXxius9YV7LzL8m2FUDBohBQPRLAug8KSkCkqUUdWUQ2V3kyTmfxaec9EUy2mrNGxo6sKHJnGa3yZU",
  "key16": "3NnYh3QLKdnH7uBELUB2LdYLXeu6p1MCtTofazn7D43PVz3RuUxrxTrCo8zR6E8Su8KLp85QXDzfBA1GjasQmDZL",
  "key17": "LCsZ25qbvorWcaXFrEv3ao4Zu42ZWaAJAdmxbraJqRt9xPGZpK4whLk9pCgTtpbngoyKrbhQkt6Jv2xz9QP3Pv2",
  "key18": "3jyBprZHTPQxW97bKc7814z8EPJFRcZLSTxYdXtzGxiRpAUswqjyvttynEa8J8VUEkdaKksCUKTzaHJ5nu7UxMDo",
  "key19": "53vtpLr6dowXbjTBbAEco3P85Yxoc3TsihsJ5u27NfEuXvF9xStJstpXo5cNGhyG85i6hupKY8Yzs1BnhBEphvYr",
  "key20": "3jF8wuZieFcUV2BosQejwpK2qVzAD2SZzb5xT32ryarA1YAXgf7FcP82DNCKn6b71RusKm2TzLBbZK7oUaWzgcMu",
  "key21": "3TA7T7jw8cfZwWYUiwtminKeScHqFVsNhxMhNv13bYCYkGy7hQZcCvs7JXDJdbjBAubXoRFnSXmkdpeyA6sAjKVC",
  "key22": "4hF36S1j8nSGuKr8dYCsAAKZqaqrPe9f5cSfZrdH5B9XsCSiyeiGsDuWZbGWXsWG1BYPo3rLxG5T1A1zYsMyCbyw",
  "key23": "4NUQiMfBd2R3Ran9Bq4zjEtLyoNbfqsfM76hqFew4RUSZSemWiPocaGw9CzCxTZHzc4peAZ13HAa6skqzgdEK548",
  "key24": "3A8LCTteMGXRvWqRJwXRb3VgcYDqQg87dqw37i5qVvuXfZFgDQ6reYJ7w34G8XgEoF7STSZHSk74t1VrVhPRJjTC",
  "key25": "3g4WoMmY7mitTm39o1ncdTu76TvXbiFnRAUSFJstBj6cfz4bzYQDyUn53WuDGajiADp3G14HW2nHbj9hyRJvDcee"
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
