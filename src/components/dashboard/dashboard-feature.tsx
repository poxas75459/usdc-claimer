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
    "iLtVHuaJ6yeCB3zQWpVdrA8LR3njZZLKphDRrr6yWojTftspZKTgL6LkKSKg55k8fgGKG7TWYwTzemr1m58Le6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PXb5qd9fxg8m2XkYcW9Ax282Qc8oM7BSVJNd2jVtJU9a9EsNFV2boW5uw7T2X7zvgqTEEiy5uAVxBuforxXy8Cv",
  "key1": "5akDpVA7pGsbMbB3XfHmC6QqDbeqS9WWBNg7P94zjvDq3Woy75L88UKAGiybUHMjsAUKQXw8AEsjXjLYyKML65VE",
  "key2": "rKnoQR3nNSWwccUWWsbyezBhkYhPJYBitBiZzRXkQBvpe1YHxg3WYozZcuyxJ9ztRhyWHGYmdHRuKBxVFoF8mWr",
  "key3": "7khrES2Pdy4aAHtMezygUYazvSGp3rMm6vX3EWnk8xTvsjAdgDJrCEDEQGjxpiZBvSkasj6PXfWjUbq7nvyozbr",
  "key4": "dJZZ3rrgt6sudz8PZMFAex2ZE29R3pxAuZYG4BbqL1gosDvW32nY7nGaxBazBnLWFEQRxaCbh7iYZ1AizvN14zj",
  "key5": "NNPRYfhFnWo71AaG95YZvHUSUqp2pu3o7r6qerqqA3ovQdV8H8taE9GRWUbCowTSBAtZqrK2Uj2VeYSEpTjWY4J",
  "key6": "3CKTbJdYcY4jxVm5jVLvvXbSJq1WwWEfTKi5MgFa8tS9XAYdYDfM6tEEZVQSqZjiuvc8pioqNgAQJAEpFJ4yxQPr",
  "key7": "2n3joYsnWzVGAwxniEYJ3dWFLjg1jQoKCBuVRGDE296xp5EuLNCzgE6ADDUkbnfW8LuZwvurwhD3Yj3dBDpQgVcQ",
  "key8": "23AC5dChs9nBGWRL9iE9GzZHUAog4BK8v92Ftfj3Zk1BR41ygacoPPestCMYCBZFLFx6GPciQypED1SqeTokFM3M",
  "key9": "3kjQkqX66S5MKYbj9tBLJqFsLXSydk8HPEMKtkdFActUewqPaL1L299ZUzmHD4A1nco4oaNweo84R7TRNfEqYbRQ",
  "key10": "4ackgNgEjLayn4wMiwUcm3RJFRvtKNLmcMXs4PoYoTv3qZ3fK3f5U5XABuZs1EgLKRscXgrNkLR4xj9hv6t82jwn",
  "key11": "5XZMW1zZ71o4pU332eoGiW4ZE991GPBWdXVhZUUQwLBYEVCz2e8cFv3w8k5wDCXYqVHnvSP6WNTU9aApDQkmFwke",
  "key12": "M4PKfYUbeLincuNzjAciRVFDiCLBsokrV7fEuG5zqj55fcUEEwAz6cLj1nE2tdPEA47LEhgbZNVznAPcmCfuhk4",
  "key13": "4BM2kh4z9WGf4znCtHarZwn1GLfAZ33rS3suQ2YTh9nqkhKNNWwhckQ6ht2nEu6WZaLBPnKShU4Swqm3uPWQE8WQ",
  "key14": "5e2ws9UbtqHXsg8Zc6L2DsDi26UAdEJdyzzntYVn4vBwYZEdTEL6dzcorUBh8CFqnb7AFiAMqLC9zKw7BxLqTjkA",
  "key15": "4BkeNGRpHVi12DXBsnLCCvahSDXrLw4SaFD5ZPmcFrnrXZsbd5pWg9dEdRtEA8WM7J2harNoz2oC5aoS3kdUeCPS",
  "key16": "66JiwhhCyzcahLKdEtaNiW1fBWA8X2MJQfkmh4uD3e68fRJGYJ1zeS5WW1JqB5kRN3dLPS9BRodwtz7rL21JCAKG",
  "key17": "5tJ59j1qZZKY8Lcqzov5ehuXu3Q1nSiFoejjAs4UYifKJaB4mp4pyye1KdV5HudeR5Jw9oMYfBPNpsHmkzfQqtkz",
  "key18": "3PnKgDoo192YFzjCGst2hgUmG7yA3E8ksc69dbxSmuprDN2CGnXRkmUS8nYzqFfwnrzbHescTfFKfPHzJ2Q1Hwpg",
  "key19": "hqtzHKNv9gdmB6EAaMm4ZGGqHseit4csHEhrXvt26WxchXngcPDE84rYfKD25z5TZ4Wbayyn7hQYQp8dAgzxa9T",
  "key20": "3Dzb96avFHgwzyBDo9BK93TFfxtg5QqAtcZ8SPTMVPs2LuDD8TjzYT91je6rrW552oTGbg9SUjdozhwBCdWRfg51",
  "key21": "2rVy98Tz3sofg6WWLbQqADtakkEH475BpMu6bSrFkuJVJ5M5fWJw4ig2jrhs1F7BXuMJ78oTAt9WcFipqAxi3wiM",
  "key22": "5jVoTMQKxgBc6zpDLpHHkYhREkCeeHqadc1bUxTbR9brcKXVo1WmbT4nApGcxYqxLMfcZXqBpzq5FdYyBevWFT8x",
  "key23": "55DG5U8hdzQYue9FvSLc9acCeewp3q8Kd2fADxzAZktVDYtSp7VxYA5X7VLQTZU2TAfT9fUuHYYoeTd8BeAMTezP",
  "key24": "61RvZ5CbdtBy79o4iKiuY8zUsjijnRyLGLgdB9MtCQWio7XfQQwWVbWn7PqoH44JQEbH12mDPJiUUqFJzN7RHJuA"
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
