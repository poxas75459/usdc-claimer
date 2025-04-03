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
    "3QfV5HNNzBZsjPmR7a3c8W7qmPRWND3hW6LySUAYHqG4VETZwmrwx9Je3yzHKPS68U6U3g2yJdNYSJLCh2wHF53x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFBPBrtqCm4E3UguWgmgmAzUzdkAErhtr41FrDrDy4JWQi1js2cJTW1LUeZS3QPBqvGzFteWSS2FAqzAtof72dc",
  "key1": "4nKZKzzgUwqtcvF1RKjvnsojTVH6HC326rn2f2Zhuz2oang7gAwbDV1kkgFs8zo3zTvYgbarYUcYp1BPVb9LHrKb",
  "key2": "4QPJjY1Ky3Hx6huP6v9orYW6hJw9npk99FxQXN3eh9piMtu174Z9TggV84ggiSwhnwGATbgf3XKVzyofBi4bVyuG",
  "key3": "4KkyK8MhiEmHEb15BUw8kvMaPPciJCGyhe5cugrhAL8CcG3Xjy32SKog1THmLUbWnmErKQbEyVBkDRUyzZqAvRKK",
  "key4": "cadVACrDrhZCzV7zLytgt7uJyhKca8J14HEgeAtia6DsV4GDpqW7Guh3TCvbRQQpFNx4CUYtymjmUVdGT5eN51r",
  "key5": "36e7Kz2WAkFLmGD34BYrBW3wNUyJSTXY3of6WVVuLRCnpNPhAU7DCTjRWhsgnBiHTiCJX8FYbTTi1Xwi1YpsBJeo",
  "key6": "4Z8CHh7BTfWTYHs2LajXogcQGYAaMheZNxTEPikvGoCG3A3iUr4Gw6te8mhjMiDmPpxWWqpkRsvcwhTicm4fTr17",
  "key7": "4c154mcM56ewFFUo3XZZ8hbs54GaQzn67t1dH1Tjxg1sCgQYKX93QMLujJTt9neEHMatqvWB7s4j5moXwckPup8",
  "key8": "3MWRoep2pLcoUSBfXfSVVbvbzAw1xvEu1Ls2o6BYnf7WGAgga5jvgzqwAQsEfeiBLLyHzUis7Kybq8NhFjbaCiSV",
  "key9": "47WHU7QpQYh4TmoHnba11vBif45proAp14MLJSrtAv5H7gmovYvSjkSZrum2Ygvo9UuXd2AyaXJHaED8qV7t2Waw",
  "key10": "yjB5Nwiw2x2Kmhsut3fjfwPkCXp1jCko6T9zh14nDvUxApT7mCA27Cq8Gu4dE9qbAG5oBQBGcvLWuVCyiDUztUw",
  "key11": "4WeUT2nsjMJ7KRDgsiaf43yScUy1AkbKKCH4GVG5jb9Z4ZVtNDm5qiR9XPYQraMEyt2wRQkDGe1TBP1znnDLQwQd",
  "key12": "5cGvuc2b9HugcxVP2nHHgXhv1BCjhHKFWxgjeeSsqKxs7bvuxfHSAmyMAc8BhGHZeL4d5RThHc1hp1A56TrSPwaM",
  "key13": "63NzuxZicnmfLjzf7NTS8m5Rx1Hw4Kk4YNAozjXvJ7ScscHMg5M1ndNmjb7EuNw1de6vMk119sHdmAYtGCoziAQa",
  "key14": "K2eSPCCy8XERzSAbNgh1dLYovCnTqWiJQKRahQqcbcwmXmTD68JKhj8BrvSmdKcsvciokYinfivWWg14oKeYJhf",
  "key15": "ahkjNGEcfEFpLWrCfnquVQpioRBTZtTrWaktKJXzKyUdpuvywWPmNz9x61GsxGhooHuKEHdvAFae28wZh79LF6z",
  "key16": "2HMR6xPTwEVRm8iVNqU9t2aHEaZgGrMmKw3LeJAafinpdwuiTvMf95Xei3fLdoDfn9ThrYLBKVQynHyug8Y7owzk",
  "key17": "3KpKnRYLUGeEBs92yTMMKX9LPYHpDLUifYadLPRn8ysh7Lv9rEvdLWKXFUwLPCcKomEFMMEs8Sn7Rr64FDaD6zUh",
  "key18": "sinxrA6WaCuKW3k2naUumEdx7CdVQgqjv6ZphLNrjnmwtFTFvueUdAGWp5TLX4WhCvF8gehLAVTMAzizCfL85ii",
  "key19": "5sfKLCuJ8GYKWJirMankywRLYVrH4fshkAS3SAafd39h5oHP1gFeWtQSHUC1YjiEHQexF9HG2dcsG9fofEJ8XWaU",
  "key20": "4HuhWders23VPLesQMfuZrEe1ZRHstUADoBtPyY83kqbj7Msg5uNwdXUohneGvMzw6c5KiytWGe11wYvkY6hjwKh",
  "key21": "5kqYMGSUVv68D3HJ2incv8sMUoEkygt8GGxELKiJgPJUFnTXVckqo9eNQ6sQ9wd1WBaLCFEn1Yejmy14SkSneouL",
  "key22": "2edcS6eAxenF34Z4R3GQK9KTDyf2VpqrJvoJCM4DjPvox8w2UCb9aU7hmSZFNiLysR9LB46m5Ec7mAPmULQXP7FZ",
  "key23": "36nfXmbwZnCppugLqLZ7T8xKg8gDz5X6QsXqKbwvfef8AScRfyHXHjVCtGSVrR5p8SHGdWwhMYz5ArRekZ6oEKu",
  "key24": "3JmY5gC8nuYnyTzpWKzCfWAT5dc9mQYPLhpYJ3bmoi8qHfx6yAv8AKCiQRz276HyXaLDdqMnXjYJzrN8581Gi3gQ",
  "key25": "2GuC8QZX1qDLUen2ccaWKYbteqQae1KPcwvf52mCRp7zksp3yUdLzvQ8cPTJEBNh7CoZa3Bod6nMHtWCSiVfDkcr",
  "key26": "5an7dakQY8D7tc3A5ALM67AVEdsWkaUDXZdS5FPZ12RxKfJNLbhva65nym2p1RZtNbCXud7LbdQ19kGSyACARXPq",
  "key27": "3ZKruWCDHFx2LHV4zsaisPC4SdtcT1XmAaufk86cN8hsCpTrCVFHiYAyFGJ7dxSZLicChXQrtk4zTLMbNGRQzgDq",
  "key28": "5JmnRcKrr3bGhfDXyohukSGnf21n5By2MjSJgtGLMrcFG13AnuJ4bfJHXt2ZwMtQv7LeZ2WyTMTQwJw9K3Vocngn",
  "key29": "5YUEd1MAVLcqTeTBb31xwBbQuSZJSiz3NsFCZjEYsUtpUUVhzMtgthwCPQSawds6A2Uqo2TGKmWDn4cCwEz5t97Q",
  "key30": "M6dmmgtGwECehZxBJx1L5CwDCcY318ywkWvE6ALEp3uTQxCFQ6T2nKnPrTjYMcgq9whXdqQi68TSct4wcARz5rq",
  "key31": "5W83Ab8uUuBYyzZGyKYpDnMftwvS2wy6hxtBXSsbDtzDibFGnxpYwSswUPV9k6KCxArHyTQ4Ghyf4MCf5ycjQHmV"
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
