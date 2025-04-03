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
    "5uZtKoihg93R3HmPNzCVH19JVwwJckwdpPDLUC1ogFC5mNQspW36oxzzHm2kjZRnj4rtySr96PP1z3hngTKenmg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFunQHzVHCG8NMB4tH4iiVTUh782u1oY2oRKiqiCGTmJFdounUXomNBFVwUNQddJYbyrd57qTdKgvxgUgP8Ybm3",
  "key1": "5LQshszNcVc52r5G4aDJrEuikJAoCRrtY48D2oo4vyyme8oF9xtsvjkMrH9i7nSEiYpjP3LBZQPgfNQTyTYcsTjd",
  "key2": "2BiSTZ9PsVMKVQXrwYWSMwmAmBkQGaAsTbnActB9DqzArETv4oy6JysRA2c7u4LwiAfwXwbhziNk2PadSDu9ZZCw",
  "key3": "2w8z2jj86BnNESUsr3ogF1zRNqyhzPAcRNQ2mJHrtGDfMLzdxAdnXDzrMRjaQChzfmnmm6rA2mrKRFL2i4LANYpP",
  "key4": "3suvLdLT42qaAXMdP5E6RMThPgXRksk2bTXqE5vvyNVmaSpoJNn3HGhPjzAAZpqJEzWkEockYhjheiWsuYuxqsq8",
  "key5": "59WDeENcY8dhaaL6dXDRuv3Lu3HtzioLdR4ZhJJJSVnm8xPpPFAeykFJ5z9SfkvCYtvUoBCu8Cheyx97UtwULv4N",
  "key6": "44ARaammon2ZFLoS3TkYkMwf1d9gJTcqjY9FNxj58CNX7Gw8nBqrryJh9dePQ7ijmvxNheqCBsy4UhQoK3qvHJk2",
  "key7": "51cTw5idviX9ncA5oQsWeddReNbRD6SQE5pSpKFSVgiwuAdFfW23KHms9yAsTc2U3u8CdB3CtWSmanuwyX5f5Cq5",
  "key8": "3p7ZdRJ4x1fbv2nyLGHdjeY2ECUuQgCzYWivjCZwe51Xr6PHwSjpXEJiijw7bW8TtJaehKxGCRw2QfCcDFrVuCXo",
  "key9": "2gTpmdP1ZRFDqpoNvHx6SWqQ5dZaNDqsU6ZSoWFWP98iLxeecjirbCzgjGwCcqBQNjaRHmNLVFJzHmbwiQgkUcZf",
  "key10": "VFpnn8MVriFSPU3vrq6k4hnvBfepmHhFSRtCa2cra2JMfDeHLsFRBx3c2379XCvWFQwFnAGn6Q5xT7qYmv8c3HM",
  "key11": "3gdxgHUwmn2UsxpuRyS157XU7vEaFqkJUxG1DQk6UyCwveDPB6TzEtWa9z8VnjNEU6NZdGuWi651nwXbigGCL7Fb",
  "key12": "3t3fBeCoiR1N9HKSWy7oF6mNyEiAGZdKeFQjpVnaatNdjPZuMVvzsYWctNJfAMSRCE2CAzRhMZfSTxUiqYhzgEn4",
  "key13": "3aYL2d9dvCWRo2fD9fJPEgDTS62BnJGQy3XqyJzuHEGE7WuLpxkTQAYhBf6sYhn4chzk61UNvmCeTF13aaTreRz4",
  "key14": "3aTNHejb3HzmJw9S5nCedTpEEu3R93oYbwWubFrK9DgVCFyu29CVPbqZL75R2w44zCBJUzi6zcZbm6k5cHLvSLux",
  "key15": "3zUx6cQHnaikhKD2x5cGDfZPghPE7qw4YDS9gU6TBzeXPV6pAzvYef689juP4j6BoprCM3fgFnzbnKs1yZFMKUG8",
  "key16": "3u5nmeXgvpBrSfaDXx2fV8WN3HVp8VacxuCLe7L47JqbkVGLi7HcPJ7DVjUF2EYwd6W2vEgJjMvDSDhy7EveBvPP",
  "key17": "4HPw7btXZSxbXDP7fMe6w6BDCBwheNVTju1nN3S7bb4GopsB2TvkCDAG4W59boV4Adg82ctdHcG3SWueF6akEgV6",
  "key18": "33jNreMgdh4VMHuk7xub6KBoX4fYfYmPuVxHanReu8hfHUdcrbGt4NMtXvwbYfYuKdqAyYix4RCrXb6E4tza1DiK",
  "key19": "YAGCx9QFA4jNH4DL2kGqiNT99wmr2a8WP1PP173HGCLweCo8hBpsXck5tXa72PKfXx8YK8yngKCBFsdVF1guEXu",
  "key20": "5tgibynV3ZRNxBxvpwwM2qAjqmgW5zYDWoA2aRJ87q1JvxWuT5VwiqArsyXCKGz4u31U3yDqsNMF8XZmp4HVkRSX",
  "key21": "2v3oMzbTirdadDooDCBoHBW5GVGaoztzyWKJrGyLgABtxd4Te9f9ZLixAMwj5KP3gqhkCdaRFDH1NoeEEdUEVChP",
  "key22": "3eSJdcKi9YxVeFmV5G7oweDaWmXoCUm6qEmEByk8dJEziQx8BSfGE8VhJdBKYgDQ9YNhUun1Q57Qn2F5q5VJwQ57",
  "key23": "3iZ3gaYyAHV3CiFhfRVH4hbdrJGu9fyjhyAskWb7eA9NhyMz2H6XVpzDPBC4HA4NNXDN5uvAaDnfyaSkEmNHuC5B",
  "key24": "3MkAWWZcg5ny4AczmcXDm1rXxJPfcUAzR4bC12W4fZA2Wgan4ghfQxRxudshLw4CnKJZM3W4Do4ykANxMt5rsEbU",
  "key25": "5QoBBqRUGVkEEtikLnJBQTLuitkWwbWr54JRpid6mSML1mTqRLp2KVUsm3k7Z6TA7s2JhriFTaASiUHpsLmmgUab",
  "key26": "MGyukqUi3qYAAnQye2M6LtSQ9yK56Br1DH7TNbDJat9Eyi3FWHFMcAevfKsJa2JDEnQgyJF65b73uFQJSE2toHD",
  "key27": "hrTFRySZfsKswgiNZEwBCiTdGdrV8GDbw7FHAyxtL8KLk7zEizFvGa4TfFoHr8PA1gNn3dvf2GfCoNwVp6wV7c4",
  "key28": "4C7964mJJXVWrFx7qVe6CBZFiVceAMnhEdp1epAGDqUGBkScEquHZDABm3WZdseDCg5wxghvM9BnxLzGMFMqj3St",
  "key29": "3kaNfP1ti8HtWxVEZrGzULpuAWRkpdh4x8qr15hZ212xWEr3HMTMJABpHja3k9EkqDrDQG89GBdM5qM25FHAgVL",
  "key30": "Vvi3zSBrEwQbD7PypFv7o5p6z1NKYe8geakfQMpqtbswMzwMQH25tDpHiWTAfJQwCK1PnJpu6vqcxDYmV4FLDp8"
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
