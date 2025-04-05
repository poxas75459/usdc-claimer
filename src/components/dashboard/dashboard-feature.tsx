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
    "54vqHxhCyNaHwnHgiub4gQ2YQTmBhNaHf9XXSrqccBxRXYKAAJzUijogRY5SDk3NmCPjh4wLckJEJidoM7FbFFC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qMSu1DN6ugNm4wo5LujQ1stUhGDYAUwoZ6thwfeY4d1KGREmesVrWfjEs6Y6tiNZfkZt2akJ99VnWWnpBmAzhC",
  "key1": "5HXMFjpD9pzdDLcTkqoCGhSaQw6aZ2AzrMDHB3rBiRJfDnPpBGLbw8TUMgiNJ6ntxFMXMqbwSeVn9J666CvjHXZP",
  "key2": "v5rwxQtJsFxdJvFQqsxb9DrNx4UHSYH3Gh5CJwSL2Ed7f83bJeXtMpiNJ5LB9ZW5TDrMVWZQjUvme23CR31xxFy",
  "key3": "4FQQV52HEugFU7g57KruJ9qz1jkYAAgiiY7sJmq3yL4QVvZw5HYUEsbHR1UXBnc2YTksMPeK1D4dXVdoW34mX5mn",
  "key4": "egGB2h3D6xGA7T8m3Tmj8zBQcVig6KiCD43T3GANd3rkTmPJVRQzYJY3gy3tjHsZ4sd3cHSnikttuekyK8MZBYx",
  "key5": "2F4dAwC5QSYEwvKKUeKcQi2KRavXYwo8e6cwoVb6tWiMWAp6Z9t6jctWiJ69FCWYfuMJb6gr2UhaJky4fJEVqXrs",
  "key6": "5d69dWrLZk2ixHcQD246hjysxK3Tqyo8AcMMj1mLYPLWcmgfYEPGWvGvA71axSsNMydNoSxi69uVeSsftCQn5NKR",
  "key7": "3Q1YiGPUUKXoVn6goZsMGCgUeeiHwnKyXzNphoSFFoxJpshUb9m9tRaJTW3hAsufQvpauvFdMqB64LCpKTgtaqxp",
  "key8": "3Z3NLR7HRstEL3S7fb8EfrkN5SWcsguehcecZVujN4KuQZfm4Y1yiiqSVVcHJDkNezpT8aXKkvp2UHHSXQ7Jo8L8",
  "key9": "PWT5NnQkcWQgS3ZVyFrTcAhqa3HFn1yZPYnZ9zuwkMpxr4PxcwbwGiuLvx1bMCDtbkm9hJez5jRYYJHi3wsHbV4",
  "key10": "3Kj7zjVCxZXY9LQnYiy31f5X3GU4uDX132XaGPcNhFE14WwfRowje58qv3THHwd69xM4FmmSUyM8HRq27b2jc3Wd",
  "key11": "eXxdHpsgj26KTuFJ68JZKHskEe8bM9DTexh3SC3JBw3BaP1gHfiSue8Kuv85zJU43Zgh1R4xq4FZ8A8HpZffX2t",
  "key12": "3k1hSvtckKbKQMuhZroAi1P4CRFSdjPArNKuFyebgUsdQ1cWfekfN7HTX8H8xgurhYLj6X4CGrBDQnPhUp96xtUj",
  "key13": "2zr63PHasvCu6xuqgHzMUT5oLqBaPprYLfgDb3TM7HNFKXsg9TFdtJzJm8Ebn5kW2aUUiovwuswXksyVj4hNLiLg",
  "key14": "31Dz52LYHwvJqs4UCj2xfXcms12KR8G6dEJkADhfCCkWx618s74gPXhCBsQbVqzKtLEHuAJgcaZEPYQwr6Q8ySzW",
  "key15": "3b5Lo69HBTc5j5U3ZdV3LgRdZS3Qj7HHPo2WM8RG6n44Z75QkxLQNokYR6Knihy4dGHtAAbukhmKoZ2wdcHkAgfT",
  "key16": "5TUwiftY9C8aV5mw35XozZaarthSHFT2JaCMLqXQHJ5kmHPEH16wvJovsYpt2ZnWsbfCJuCU9yEcbE46qUHN15y6",
  "key17": "61MsyJhAy7iL22mUN4NrXCoZr6xBoYPcotphA7J562T21baS4f8AGQ6cwTLGppFQF7pHLUFjkxKbNwET6HYeS9tc",
  "key18": "5mELwkycHCfyg7kqaPKTjAimUjyBXQH1yFyVqkkWDyjPmCmooDP2RHM37dvU4jrUbJq1pYyXbEDWt3PWCfeBffx6",
  "key19": "5HRppeDTVxvpvrhaus5HUiwqdYbo8cevURu3uaSvEGBKUXybmJ47q5gs4yWzsSUcJir1CeozF1H7arVprcaNouAD",
  "key20": "43MQ6TdDjnsqkrVJTznk288T2QjtazsXsoT8z4M3qvksV7pYTBnkdRtYYFiazjpX9z2p7ZrN7dBexBsQ2A4DtzY5",
  "key21": "4w1Ea6Zj3yWFg782PhBDjyYFz6iXJ4k9mZZ2B42GXt5xgc3Zx3nNzCUBiHaTpoNFDCD2cBDatjSFmbfLhQ9Xc9hV",
  "key22": "46RWKqigMoc4hiFYux7oNNnqta8yed4QHSyjzeH7poMUKHP6mWdQsqu5r4TS2fFyz4dXcPGwp1He68Ei8twGGWLx",
  "key23": "5sFnSoCWht6JeEZmo5MS6vqgDoG57yyAs3znASeyz8jaKvAT3pL3qgEmpEp3JyyZ4yXScjk5fCQCNUeXEpd2YUpY",
  "key24": "5JangSqnmy1aJLavwSKEe727M66ZfPLTAX8BRmiJdeWUXx4kUhXfxjg9npNzCXk5kWUrZ9YtfAJY8L9niYKUhbUx"
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
