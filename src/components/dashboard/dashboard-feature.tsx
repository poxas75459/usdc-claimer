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
    "3ikFoBUhWUthzkoDhW6S7cXgM7jf4F4FkZLDgT1SmpYsV5DjNq6VuaV64ha886BhLRHmn5gbzkkx7myYppKf2sAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyQL67CvFurMkFsRLizWCfCZhb9VdWLS9YagNHRJ619kUV3NB6cWkVyj2tySaCbrkwLoFT7YA6HuiTUV8meuaEc",
  "key1": "4uHbLEmUnmqHRdzTgfB1pEaXjbDU1KpQv6ASu7Bs1zVa9S5zgeduL2mAsEpN6JKHBoDxMo83EYA2N1Hye69jypo8",
  "key2": "39UwR3pQAmRoiDJDyCxxyp7AE7W2KhkUHXvCM3YLBm7Ezm3ub2ApmpPGRQ6itmJNDKQbZbfHVk3GU7kq2kqTPMFX",
  "key3": "5DEACMvmdTr822njpx6RCLC2m1JzJds39Hy6gGwoLmHcMensgZzpz94TSuUmZDwgxkCNRW1s8WTgeC3QVQzyq8Lq",
  "key4": "53hNnFMvBTdktW3mM84qWWjZDFcKBS5c7fkrD5Sw2o7Rz7SAqee33JNSLUkRz1qF3depR6TzUMf7NmXfCfKUabnC",
  "key5": "5AtcWjoeqLvDrxJfihWFZufiTGfTr4xDPWKhmNxR3XsqoQikZqMBoXKhP1zfwy71HNcn2gSDD8d8DPmo5K3yW17Z",
  "key6": "2hTdVQHxQowgkpEHFUddL2ooFujuq8csU7BBkffZ488FGm6ytoeQCQfz1A2orLKAVpKB4RAgcEUNSN4HJbRqjiQ8",
  "key7": "3yLcMNtRbfkwuDo2MoB1dLSmqsZR5ErRvjby5Udvu19nvsetXybVq68v7sbeLwZzH1CLSpvnycKDWEo9ubRrUF8b",
  "key8": "4yXrxQJcw2UVnprMckJeGvbAMT5ggi3kg51nLZzNEP63meDpgpxvHuwhyhiUGmSBhSup82WUiXk5TxmxsXJKD73U",
  "key9": "4SozC28kCVYCJS8VW9xkdxpMFP82zhqUL8rnVX4qCd9iJUVUbJz3JQaKXrKE847LsKSBsirPEEqkMm7eeDYjcxdF",
  "key10": "3tbUDPMkdbszo3quNjdZ3xrj4HguF181WEZDzJoWx6kxHXUwN4ubZ5SwP3mJC1hQF5ggn9TnDbzcYu9t5Yp2ruK3",
  "key11": "2jy611dagp3y2XCnPzoQR8NhucJGSBGZ1sxMgiS4Hd1yE1AEPqv4RUSwagVzWHnpdpBKfVWyGrqdfQ9mXK1UL8Zn",
  "key12": "3qQqDDw31nKCfkiWAcwE6E9kwW17XmXSX3hqR7j7XmyPQSd3KJ8SnqRha4afpvzLxSxNrifhZ9KDgXxEg1SNaBAZ",
  "key13": "21j61gcKukzqiVU7JADkheyxVMSdZxQN276E8GFLTxtUswL3cVjniKL8CksFhq2D3t1uxH3jwMfRHSPJVHKP9n2Y",
  "key14": "S5P7YNfiT6W7au3Es2MZGeYgUDPCBzteuUQqEcTAFTLpLhFVgtUT7tijZPnPWHseSesuyQAhVQJvNTQxF9P8zsF",
  "key15": "3Am8PY7rgsYj1vYKSM1yoQNUEWTzCZoKurR9mRp1RwJbpvfcVbt7rRqh6fPa2vKU1uBy71mZVu3Emft64sv7Wo2y",
  "key16": "3rJuRn3FdngE6dbfCe8dESyyGoNHtRcvTpEyCPzNvshCDcFei4sZAgd4eLaCSo1oUkdNPVy3Yg3KRXegZDg1BcpD",
  "key17": "3Z5TVt8zngcmvLb4xZiZ91ex6XswuvUpFnqoEmDtcPqq8yJGLA4jQ6VeDtSmR3mjtdNvniEJHgwc1z3RY8Xjy5Wd",
  "key18": "5ZYoj7Ck328EEAb4MLLAiK9VJ41bH6pPoPdgDVjrvwjRswQsVUiaEiA8VCzSxRoeuKtYQfTXNvqshwNFmcbcorkb",
  "key19": "3d8LoEmNdCK78oA8s29jaVsGxtLEu8wrP1dR6e79w9nu5mcFeztKHkkboqHeqwYUMoajtbpVQCoHgmzzst1vozFC",
  "key20": "2aJZBbdz2nu8JQageK6y9pLUVQN1DwCc8GYKf2iSPuswhCVywXo77SdVAyAKNZceJzQAdW79Po3DEogtjGwVjjKK",
  "key21": "3chcUwSmJBvgmEYmPpa3Bn5S3wLbCtmrgTMDr8CfWvzCbxLeLB7a3eJf3D2nb2T5X5zPJQNfzz12M3b7KeQvySvJ",
  "key22": "3qWSEYmAqsCNdxT9EJH6qrDKLPWP9uaJAUxNjPNADTgDgm2t55MRXsvFMeKovtHXW2LoS1Tc55D7e6nKd3dC4gg7",
  "key23": "2nKu47ddwVqBxR3q5pwrAqj8vi1K8wdSDKvVookpXXyuRAokGFXkMthbBcjNk9eA3c3A8WudoiqfoX5GymMCqe9w",
  "key24": "5zeCiYTVMu5WCz7AkAiefVnWpf71BLBnzwQ4ztC3wZy8gKcWhb6tdRb5uYCJ1YuvdGTE9oRLka7XmNeC9kWa3WuR",
  "key25": "tRA4ZKqCkjz6PMWaTzzEBBX1h6nc9Eu9Yaj1vEew5KftoxvkHrQ17Zc7wEJVqPMBPRPENDbnGNS8oU5CydCRhgK"
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
