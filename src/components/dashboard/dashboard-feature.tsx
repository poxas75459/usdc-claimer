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
    "qfemKC3aq7x573Q9GyEsKqoG48vjfSbMbiLgUwa6pmtn2JSRFkUuGWiTJKCRmqipnkptyjaWbhdLHYkHRSBkr54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZmitqSN7sKyurRuMNqK4J1PWCPh5zHqa8hg1F2JvMEmwpBKFr8FcBjXDAjqrmQ7u5ivxy7PBXYVhuD22PAEyHn",
  "key1": "24HMK1EjPpg4CQdXduuV2ZbCQKrNudUmy7Q2qQdxhH7dfZZQP1JafUP6YDR1jjg7AbgF73ha1Y9VrQAUeLt7aUEW",
  "key2": "4evWHVLkRG7NB33k3NdtEtGA7Wxd3zKcHsEFqQMM42pjzQayDrQDorrZuwDzVb3LEEvjwLGSNVTHB3HokVaUFi1W",
  "key3": "5KkRLMZh23QRK7ZV8mVZ2LgpFDyesHrBTSL8FotiExPCiPrKe9sckX3AYsE4qS5pxmBzRyZPVKcUxjTyCrQi7Rab",
  "key4": "3S1ZQbQqJjXfBRdvtsHaqUv3pXfRX2wxBhSEUUeCW7auCcn8qoAmoELWiCwjUt145Xu8XkrW8Mcahwjmcs3HwxzX",
  "key5": "32zwntR6pFUPBoK5zzBWFRnjJYqUfwuATNoSXA8J19VvqSMNbGRzYVUyhHXYgVbtzuBaw7inzwmsc3MJyMVcRZ1",
  "key6": "ShzuQFWMQom6tGvGEuTWvNyNrSGpbp2jhkSBmCkB4z312ckMSqThMn1VeAFx7DapwPisYKBzMWZv4hKV3ZgXRc5",
  "key7": "4ger7NbQSJNR5gETtwTrhTPMRQejkzMzfQVd9cAYW5jC7mHA5YGM8JqpFCtZg6FsqQCYqMAKcNhZg8QqZTJBtZAS",
  "key8": "2vbdTi5mxyxkf8m4tfE9djCgRV1c4Fog1cdAASW8P3VJBTMghwR6JP7jztx8KGj24zQQ3zBXSUWpLoBnPR3mRBSM",
  "key9": "2DsbDigN1ZJ6MQRq3frc6cj2vo279hBaevZ1tGZFWseC1BdSZoeE6ScjoerbMd5WcwWBef1sxtKTMkpp14cgChrN",
  "key10": "4omjAwzmimwoZsF4hgCh5GbEQBbR2Y3x37UaXbGc9ejSzHcSP4PZvoBvqiZc2FzYwqEnBnjWJMBdDyrStFYpCAAK",
  "key11": "3dBqaxccZ7Po7opiT26RucvStGcwc7kFLrwwHMGdhzgw3bnT4jMnEvifo9HU4qer2ACGcYmvUJJqzUE1M22GL6Vz",
  "key12": "4X3ss8WecX35tWW17Ygr7w628fpTYF7jbQ9hGwb1pKreN7VfsxShzo7xbXCKMS88xe93HUi7LkktspEMFi6roznp",
  "key13": "2xfsSK1tLtuK4Ygu52hrUsJo7GqpLxRuKfPQHfHVsVoWPd8NFfNJmArCoWhmxCfEoCZfrs2RgE3LVhc1PpWJhKkm",
  "key14": "49pvzNAhDfjD6kP5R27RDSx7yaqraYJaqFiDgxJDNsG9vTysnj3SdCzWEFySusZCCYuSUMVxmrdfqHs1uggoPUak",
  "key15": "3xabrPesUKSFy5aa8DFUYPAgbJTP6ppTkSEzvyp7Prqvy1hdgGRPnPX6Y1ugGf6oq5V9Gf8NQzWVoAd3srWp9rZf",
  "key16": "7HX6MHEDEW2vrrPPqnGoHHDyVw1nYBUCq4k4euSJShXD7QA8gpbQ9uoQuhoLK7WFJ4nCPPKojHZe6QmcCYSkL2R",
  "key17": "3FN6iruouYQmLMm5z4NKRCcTUHPGPFekCkDxeUqJr1W1UyrcarYdLrXKeoXKL25EG9x25UKF4BJQQP6wuE9xfWZA",
  "key18": "4KpZK7To1XPxK6ZQo9vKzRyRdD6BmWycaAaJ5ub33L934MncZqKsgLbgaHufm1aDdBtvD9Auemd9Qu7dHZK9jMWw",
  "key19": "EBbBdHnE845ZoRizrgGKNBsiAjuVfv2s1aPjpUkJetyQptYGTpacXH6xCNGpkfx9NCgaDVQDqjPFJ5aJv5y3npA",
  "key20": "5V6sHpvbmSMd65kLpnR2sQW9wNK2jPXfgcQZtd4rGL93qiFtRpD1iw2EFP3rEh76r82V8JjJh9FUFbS8poPVgyu7",
  "key21": "2t8jqTxXFPmxGSXjFsDai3engRt4EtNnVMJWCt2No13ViW4r3hL8Kp1bKQ4FjgJWKxnvJf3Rtmqoqd3ZzQtns1oW",
  "key22": "4j71jsPBfwdg9UjK6mht3xSJrdCjuWkTfv8EcnNy5RfzptA3sZheEmjjhzU9QcYyvak9Um3SigNCQSsmkHCwHC3t",
  "key23": "36n2RryLXwyNfg87NY8LCrB8JMoGeu7EmuGrHsCYJkhNNWXZT9DyNcftRKDzZu3GKY7tY1FvCQmJnjbtxXaWpoep",
  "key24": "2eDFP1dr3VnWaDTUdi7mRMkEHATWDPs7jyU9PRbKtfsVWMvqQcBsyCJNS3sXKxBX4Z2jcnBUqSpLZZiAoSUr4UhB",
  "key25": "r1BY5oyNjhawqrtAmatBS4PnJjpwziiWFW3UnhtGEPem3Qcajz6wkLreaxymZKzWbR78VqC1KsHq7FsWg6Lk4Sk",
  "key26": "8crBKmTgUB1xAmdYEBkLqWhfBVL9Y6bxFr7R7N8uSTMMmUBaecxNgFGnx85yKTq6j7p8jcGR4uUBAHgRcCenchJ",
  "key27": "3PvDpJqotNufP6FZ13VgMhBSYQv4PnyWiFKxL5K2vEfL8MREagVJF7GSpKkMoSbmr9aVpopy9XWbWeLLqjKHBDtM",
  "key28": "3pJduQSgZGr1THcUvMz5qqoKceXQaAvG1yKHE2WbN5L7oLNMwf2d9woU4jYxCK48SMnsp3KuDefTigd9ubzJNyvM"
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
