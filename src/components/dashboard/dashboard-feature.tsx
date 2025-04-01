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
    "58rpDfikLoLUfbAicT9H6a6CnEeEsoBwi8E9BVAfvSyX9WYDfgUwVrgvoAxjaE9wqANnEFm4t9FBbaq7fNeqGg2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVowv8xpHXDymhSd2Y933yvzA9PurtxhgzPicxKXnb1FRJnYv93Kki8XquP7Z7FPkd3a3jfoNRmW1eH1E3XBWQA",
  "key1": "5pmQFUFvg9o9UR3GFtPMTQ6AEacLVN73XYFJYuTRfsQ8zyjAbaVVx6p5NfA82DDGPisrrSP1WPUrHNy3uaiUHBbX",
  "key2": "84FUqaMAhtA2i1tsn7LJJQbiy4UhcM7nzRoAZCSE1zV8XZEUgemhQF9x41ZAudCuehYjNnw3p2oweabVchEMhq1",
  "key3": "4zjV8o9x8XFTzjdKvAJonSg1s3audprNKMtTvQWxmvJmjw3VbvHBdFPoGWYQmRZAAqMBDPGFsRSFuTZTgtsuQFCZ",
  "key4": "2hk7n7kfQzeH8eArgLda73D6F9QrUMTz3HM7NbWidkTmxTMoDYy7aPm6tj12bFhgh76FQhetijYgLCijM25VDeDk",
  "key5": "45HrL1JLZe8S4dKxTst3XfH4xo2a7M9HrVMaMwGkGg6q2rHJHuaP3voqFwtD4qdkKMnxSp12vH5ytTQLpW3hjNxf",
  "key6": "3dnNJUC8f49KKzDppHZSjpdJiuy5YyhP8rB2xtxiqGnqmT6vMYDS8Jp1pjNtw47dspnBVsJR9vyvBo4gdpZhCcB7",
  "key7": "3qyLzZDf9LfoyNVAY3N1pGoq2GNMBkvh27JBY34afHCciZPSLEKXqwy4B94gq8sdzx9HLVz5SkYyr3SNpFe8cNdt",
  "key8": "4wDByNSXt2wU1oQ8upwrxrbhsfpZYYbCEEwPgs1RTddCRt5XLp8BwWCxz3rtRPo8wgh6EQwGjHrrcbphEk8z6n5K",
  "key9": "qAbWBJF1BDkm4PrxBJqhmdvFRGkpC6k4nUYcCdSafqKMiJ1VVqtMvTXNb4MEePBERAMjZvWZZLwcQv2RqbN68yE",
  "key10": "5YwkFcdBUpiS2C8L4m2RmHYzo7VdGJT5rGR2LVHrumxW8zwQmwsPrFEKgFiVRqUwYDwFT3cixExrw9RmwGEjUYgF",
  "key11": "3LVvv4tyEGsxiMo2Z69KZTjPJCCfVwkTFepok6tEwn7r11E3h868j7VkXkQcoB6TYfWrn4pwAJNMswnUTRQJzNBw",
  "key12": "3MrkjkqDZ3PUhjCEnnoEM9imd1NfCpMbeR9crpzbNsUre4PexwHYCvREnnkPsFuFrdtAiPirTXeSHPp1GXq1Jfaz",
  "key13": "5THY56HbkrmnjxPqJxyy4qbrSKDeR6d5ZsCiBDSNQe5DoK5ug2AQsiCWm95zbf5fd28fD7vVrX86v4tBLmcbUzKc",
  "key14": "Yg9YHfXkykzZK5LAPQpUNwq9VY58KRTXMc5bTZjuFjU1aiY58UjjgPBaz1E2cBdXcFJvgKBsLviHJW4hN6nGD8D",
  "key15": "5fZvMUw9Y5obahEYbkzdVz7TCAdo2vsC12PYnLBJomtPzXUsftCEqPtDkdNkixy35XoquBZ9CDFU8MVTmf6ToMPu",
  "key16": "3wrau4cJcNB6NNKhVFy1Du6ZhyPWUQG38DFR82G6fwVAGJc8dUiwpG1xuG3JatBb4iYjHGsVmo8Mfs9Ao6r8pW1d",
  "key17": "91hjjQ4KsA6ysGkTfq3J3YznZEtoXJL6KapiwUKKt3m6FtuMNjfPiHw5gAUVjLtGCfYafsHeS5s3Ut1AgguuWvK",
  "key18": "2cw9o4mer1gUpd8CsYvxxKSHzCiboWC1RkStH57tamaHRjbsehE3dp1FPPWJkNJiWySgGj6idPjz6q5hT7ntTBWq",
  "key19": "3GNSWmYeMUwQS1Rd6SasShi9L1KXDw5jNMznbNLTaqcJPNijSza51jCHRqrn7ubeGximK4YcZXc2hhJBaTYw2HLq",
  "key20": "3MZnTkXUbcPVnGu4YMdAu1ygUmwMKwXY5VFcyHNR717E4fB1B6wVsh5y7iEJfjbUqdYGK5g4zc5cuCzkHZMLH49R",
  "key21": "CoHiyAaqjrvHjSTLMwcQeWyMAXL3RroGRWggaZasUADxdiwvi1cgviEUixpkB7dJUUmpQKQ6drkN6XJsWHu8Tw2",
  "key22": "4ELoMtpkRs4eUVhdSdUFj51NGui1uBdJXDhyasoxPp2CWKetfGxUm1yX4z8iQpTAygps7yM5Uz3VJ3RbECcKEsTq",
  "key23": "2XuJ3zfUQwgfKtSvnZvEip2gqtdo7TNMQGvJaiDfb5ZxtiTAynANF353wsWHdHUhbh4KVkbXP2Y5KBc6RmesNqNe",
  "key24": "8WWiZDYPpWE38snXqqGUc1utVo4roWgE4JUqz5vH27Bv9yKtRLnhV8RNWnAfdXY2txXLWKtahLJHeSwwmeLup69"
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
