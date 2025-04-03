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
    "2VkpvhNzUAFVTXg6AEgQY3MAA4Nmsid5hpXRQwjddRh22eVjuMTwwLNb6ctckhpHBrnp92N2wMRWV3aUGA8AxuRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ej1kCCKSz4BJ4DFad5qGmf7S9xPg9u5u6WcytGP1DoipRwR4eEKFLQ9N9zQkzBjMnisxTSci3oZifAhtWzuJYN2",
  "key1": "uxjmfaC3NVXtdc8yerQEDzQXWcGnGw7E1r7ictLHrdDh254sLhY3JoME7pLHxEK7BznJEYXzBgsTBYYt3YxF7mY",
  "key2": "4Y8fTiZVvmi8GdmMTVTkbfTGTcrEcnKxuXC7UDGs9Yr5rEvyKzPsY6sos23dwdKfT1KSRHVKUZEwn4bh6fVgByEn",
  "key3": "3WF4WqKxPs5Rn7GJwGSMf2td9v4h6QTSrm4m6cbvuwFByd42TyEQAgmpNvpC3ZUmWNpQHqSStDwnx4Y1ZMBgbm6k",
  "key4": "bENfMCqfwneztNwYt5H3E8gmPZe4NZPVVapC6SPb2FiHurtJXzzs597TS2uQ8LqWp4BVtN2ngjAmKhzq2BAK6i9",
  "key5": "3MuUkdAD5rkdmNr611EkDnsWF86wnahXgJZsYXUzjJLimLVj2RTPQ6P2VPAeA1UFLYAu1syXPk4Dan9ikkcz6V4p",
  "key6": "QsZGGR4B6E9ghe9jfMzVXuqe1xAW8DCnEJJnwdUEce8WGe58q1KxT8f6Cic9oKKGvZw4jJmeaDJ5D8CZhDY1nJo",
  "key7": "3HUpTsKzhGzV1RjkqVo7GsULcch7DuqQLiPiXfyyhNwSqzJWDK5yYiVhwRFBRbmyxHrTyNtBiY1fsnZoUjf4GfMJ",
  "key8": "4tMX2TZK9oUgdNBHagXHaBbdakAzj3pdmP7soexN9b2CQkgi1dwiKWgWS9DCMvHNE7v7wvefQxS9kGuQQaXKrJaa",
  "key9": "Cgisp38zqEgGcv7SFiqnQL6be46KiwHBWD4AqKDJUMVEGPjY1hievwBhfr2DLRowBVX8EpjhinLLPpFLyVQk9w9",
  "key10": "Q7k6PQ5ndobtccUmgKRvifPfNwS3fTe5qYKjeqmTVv8td8vqvWwudCPcTAfVERcsa5GmPhdxLc9mFAtSzRAFbsq",
  "key11": "59jTbWNoqccwwiZ5HRZVx4gxhs1SQMfbQB8zY7ggPyijZDj1Du6W9yC4zyUNAEqfK82aia1g3ZK8L375gWBExSJJ",
  "key12": "55jxa1Cz6tnd3RN3kExnD1fhNnU6iqffv1P2qL1SCSRFnhR2NgCcmfLWdPWBiRgvpoPDAYUodAAsGv28c4azSxzW",
  "key13": "4h8L4yCoDjs6Ejts8rJnDHqYDMGiF8pho1Cxvv3qZcVNoxJiU9r1K3KFsqFAQeji73nNQj4mgvK2JszdwxQ3xS1",
  "key14": "5LegJdsuPzfoAtkaH9YE5VMmc6gDCkRDXc6A48Yxn7PCcDVrJdfjCjPoDGfeuV4Psiihz2jJ7CDnadgBdJjjTtGX",
  "key15": "3TNLcyuT4GcWium4AxroFiK5T5PuxC2jSgVhix5UmXmQ88QCt2tWdSp91aMYLSrBEYrK4f8EPyX953s9jQ8cLQuy",
  "key16": "j6cnWTzJZkF82qxgM7fAMAd6w1tDSdgPwNzg65JxSZbvBNJpvM2CmBCKrUCzymy6ZyuduNLFExgFYUj5y23WWXz",
  "key17": "5WWFH7SfHwRK4G6RMCLcwxXsWYkoKrmb7t5f9Wf6HMxUtE1yRPHHvWDuPf8ywVcSqEmfGxEeooD8yLrRnVGNcT3R",
  "key18": "2HMJb9jZx6Jd4fCLdspjomcZmC7mhsuggbsL5MEhRKCHsCL4rUMWVo1UnsJLZ5kwge7Uo64cMD23EV7yMZXdbSTf",
  "key19": "Cr8Nk7xVNoAX5L6sfQhrix8SjHS3UBZGVCTfo1X9FWiPpTfEWF6r2u82uARsYmeojsAkHN4C83jYtCiTmVA1exq",
  "key20": "4E6Bcdm8UvwQ9d4XZKummvKVKEjyAJJ36ipUZTGu4q5XshQ6e9cRy1L7rNJ6BsWx8yQNwtHy2oYF6G6bWAik4w9s",
  "key21": "3qcB2UckYzndkUVqPBGF3XjkDYCgWzhJVJvXsViEy4Ly7PodAQrv48AqHVc34jEPsymBPVFJRcwueogJ9p6rBNCz",
  "key22": "4oLYpNfE2XYWL5NDG1hVzKFasEeqfsDnXExw9HtkQ9dCXNwP2yHU4qVpRH9JdkMj5VcCQZLaXW7DuXR1RdUKL2tx",
  "key23": "5rQZMyA3Ut9tMGrynVqxavAvZJKnWfwqdQMLSSMUMrkC7RunhXcZdpV8paa25NYtp2ttuXQHF4GULuAHXU98JRRb",
  "key24": "3P7RvRzNqppKtNyZwz1yaUdPBsXaweH7DW7CKLTCNRHJiair7Q55VUTf26BCEqS9kFWTt3At1jhLwXtKcyds6pnx",
  "key25": "4jDf44AvRProyYEW4bn8uxXZBxJCRcPUPR9itDPZSjijgbwTSwge4JW37BcMWpGfHoFcSx5QcUVavhdw2HQd3nxZ",
  "key26": "2jRNZTHh4n6aPfqpRNjwxf1tY46A5xyTrTfEHnsmPP8VA1LqjsETt9aacNMCH9SfSDAvyPAGejy7XkqBC4AUk4Gb",
  "key27": "2fHq4xURKCFudNUSkmM8d4h3aJCxMFNNbSuPybz3Rh4zHxRf2jFoAi6FKTpnbT1R8o9YqDs1muAPQLLLJffzm28T",
  "key28": "2gSmgQzoXfqLzqwFLA5RTJ3FMMCeaM5iPoqKTWNvY14yBd1QUGjjWY4xvEuzQDDep6yUbSW5U5VHduCyP78uPHUY"
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
