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
    "49vkRicNJ7WakpZckL16sbY31Emc8fz1bdVdC5udMcvKRqoSrdJ6pMzQXyiyTZntURiNqiHu2r2ru5fTW9nWeXWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEEDoTRvBw4JcjFBLwFaRM2a5TfNkKSHeeZtgQ9HbnVBKZMzjU1TFjqrHKNGgRkWGHkN31JhRviUTTiyvvkNmAn",
  "key1": "3BzgrwHeiMaHBDXp4Z1VGijB4KNpQx8qxSx5CAYoPv55XPSFeZLjDaFvRjWnoqFFRyiruCs3wgCDDEgMvsDDYoUN",
  "key2": "47UhT2dRNDmqj41en7S6d61RNDw3A2auhQj2vzigXwScd5cRsr3a6Y2HDJDVjKNiPZWQgeqRBeD8hrXhbthbEMqA",
  "key3": "2VaVDyZem7XvC6SJf4dsJx2VsUDUxAtXedcGLgLP9ad4SY73gz6ctgZmQH5P94MCQwJHccusWMmnuYJ3bRo68Moh",
  "key4": "2FXTwD2YfGgpso2xBUhH5jNEFqVZbF43kkc3CMUJEmEpyE7n8xLCMwgZnNpYeHdRcevnztnZjhRr8TM8jskP1isB",
  "key5": "2WGGFLj16BGCCWZxPC1AvwJmTDUPN8gT4tMX5s29iHvUzTWp8NDqGfNSQ7EeeL4yMbSrbVpnLvoiBeJcBj8Va9SP",
  "key6": "3jqyRBTPEVC7BcLkDdsEjXFoUPpCwZEYps6BATwyif4LjiQGwbnFNu2MDKTKgnk3pXRPyAQmxgGks27bbJzyF3Vf",
  "key7": "3gWtBW3X4xTNGfJU7ciWCyLWj2rjJpULFscDc1Dk8AKfNGLrr2FE5WPnwZakZF1c4Krbpufqf2LFZnauNXtP9LEE",
  "key8": "5kZFE3u9iMbat7GyMK8tmEELaFRdGn8qmbVNHDf9SUqrPTC6BVLGHzQ4EQSPwTT4Tv86T6TPAZzpHs8fZxwkz1AU",
  "key9": "sM6ukZ8HxrfsZe7gEBHBphwnnE7SYJPeyyJmvff8HvunwRs65GkLwWwBYADGvFiNSbZJ7JdfADRvfHpFQLAKNJE",
  "key10": "5HjZ72ha3qhQWezYZ1aCVbQTqSmWAVPDPaHUeqVZmd3XYbtA44TS6D2C68eAjnpd8xVCCeia1HrDTx7F8SGM7ANP",
  "key11": "36sxwmuQHeDiYnLnxyL3r7CtgekoTFKQxKvoEuEZdF3JV2rUjKfovEt4MxhAFz6QGXytH9T3WgbGhjKtQm5w2LEk",
  "key12": "JSipL4vDUYDJyiRj1sPHoBmda2KictgMrWvW5yFixRoyEvCkm2xtAoB4p5qQzW5hTmvS6nGCqBy7mcHQ24sNRbS",
  "key13": "3MPgUjvWEB25FB5Wmefrdq1ggbLK5VXzz6NDXBePs7vJMSeKkP5PViiRenmY5Fkspdk5jzNsFfepgyT4jnFnn8r2",
  "key14": "3LZK2PBtKVBj3NSdSWYa7WbKNvkDNaUNahEqtPBpABXKnRRXQiJnwUYrbwJMtAkFqDyXG1QDGNpbMWSqGGy7WPqr",
  "key15": "cqLVjoLvKjAH5Xb4Q5K8rXSeCt6ND95HYZ3c35y9gqEP48adZJyor5dAE1uEpyaonKFXqn6H3mVG2NDm3x8kkc4",
  "key16": "5nSYuaUUzbRv7W8TSTN8g3kT2bQCgCkAErAVM8yZNYNKzvgs3fZJH6oW1BhDb9DP6KhSFZBuv4pKYCif8FDj1VD7",
  "key17": "42JJevEtoqzELPJxQwpNXVBQNx5iQcN4JuQjL1vLM637fKTYWDwUnQr9vPZTpPrhHoL573MGXtpwfqRH4kV7ZRqn",
  "key18": "4KocryZSto3raoHBVxQvR3BPvMzJRdtfrf3BfB6RSvx6bobuvo6QLwrwE2bRsD8TA4YzmWK9EcejLmssRzcahQsD",
  "key19": "mT3soetPEXSgdhsXUyEb4hDUZwzoRHDxg8CHiTPQZa2BxFwEiwTTjDvdEuGuEHSkHiEQqiKJbbvJ7xfhet5fSvM",
  "key20": "5y6evMYWBVDfaHrbqHkUfjsTGZyVmPfWBiv5hzLyfB5YWogbhe8gPHDNUPg7jbsrZnucM8ZUKLUHeXao5L8hCNEC",
  "key21": "PznU4Km9nAHYLwBPzigsJJ3VK9FaiUjhYKrazjJz3bF9nu1XWShtHLUZT3p41kvxsBS1Vs59Evjitg5ystTpooD",
  "key22": "3qUeMppTBqMjSKUVmivnhWKt5bn3LUBwTsWhHHR4vHSSFv8QDB28i6tb5y8faeVWru9RBHWKMaLNpTVmfQunLnRj",
  "key23": "Rpjxtk1FN92dtF86dANXVcv8jQffMq8jGCXUYQFdzbuSQnnEv2wXNyjtqFdxZpndLshvH3hYgybe3sJsYsgv1gN",
  "key24": "24YdN5t5btw6mtJoHLjxEAm93gQJZwFrzFTWPjL1bcTeKwv8tDWpS3v3Xivcwb25kPCzx8aN4KfvL1XhgJp1LiAK",
  "key25": "2Zd9fxT64vbCXb1qF2knMs9APgNnWVbdDiMJih8PWA3D1DZvdW1jEK5saRk55HMMATNfccyB4Z3bpyt5Uhs8Sx9B",
  "key26": "67Wx9BnN4AWgTsMxuMdZses6yxahFEdUV1tzuSGhAYsEsR3cA3Eft11uctxq55gtcdfar6J2qmFYRq9yfPQWvpSX",
  "key27": "5CKDJpy5899z8AFsoeqe83HEMkHPZqshwbdsFpCf6v6BUG5oa916MNW6VfN7St9ioL8ZtFwwyjaKVSHr83Z9qW7h"
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
