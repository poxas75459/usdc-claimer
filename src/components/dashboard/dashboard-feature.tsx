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
    "3oRBW8HomTgQUD4Zjbdqf1Z9iPyJiZUe7pTLpGdhS37nLARowvZmTw1x8QVWEukpKVdKHnTmQHMJ9WdXb75D9mKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49guyQD6PMwvtHuUv8hsCXu2x5Q4hb3qd27XLaCasVwwvKzcQCABQF56SuLCojgxvnwEYzHotjr3jpfWJE9wd54K",
  "key1": "5yC7MkQLGXC7eQnAq47dGFmeoujRRadz8Px2tukszp2MwPTEQTjEhLHx2uw1WQ4tp8njruphEY1T6uUCXmmizp1M",
  "key2": "2LHBbJsxHuVmZSiZGgHyVJJJnDv2Pd4Y4YQ33145cfCAfNYRWnyifVQcpv3ZghDRKnrifuZjL7rd8kocFehfsKMY",
  "key3": "4HTxYykeJFsPgkFzeq5zbzV8oWnLHdjyLgvaX1uJsvzoLXbs4WCzbRfB8LNHpy1CS82TpnhLKpwtdNsGXQbABAeo",
  "key4": "3HvVQL4q5Z2Ak5MpHdqgmmG46BR6tpjgDgzVDAoKFrtsyDkq2vq4s5kefx6bwFFsaV89dFoZgNm6VXxXA4DXkmVn",
  "key5": "3Fb3xBEK4ZvG73Rc53WxQdCNSpJVVwXRLVZD4Zcv2q7HN6j4vjzH4S5K4FhWsqFTWE8k5KkFF6Vva15hPyLzxAHQ",
  "key6": "fcERvXfZ39VCH7jhyYfjgZcqd1i4TbpYCe3yazoS4oUv5jNPNePjepvPqqqxbmnmcCiM4SqXMp3E2u1Q1aaarNW",
  "key7": "5NQtGig7KRJ9y4ee7hkcJU5EdSuVb3zRhmsjfREsp3hBPVUp7cXZeRwNwjc391U4yZX4oBiLN47uv94Ajq9JWn9B",
  "key8": "McwH8vE9qG5XqouvRwbfwQm7P6Emppkr1pVpujRYbXqTreY1NePequ5RrcbWmHoqqn7QPVTtTBRGfUAE1hUnKCM",
  "key9": "5kBx853MwRwHhauaUQJt2VKifqNacNqitDxQ4zTS5rtBD7EsZ3CvoFZ6343gNnqLPtRgREnu1ystWMoUupL37gMw",
  "key10": "4UjvavqVDcG7i1jK8TALMUMYi2MvUVxQQwUbQJ5S9UwHLmgttp5USxCU1rzpchaE7vMvdAcYv15JdUMXdKkz8Uhg",
  "key11": "5KaLd9Wm2vCPZvL6VabLULBVGwmQTmG4m9ncj2pNfSsy2XRQiT8d4T2Mc3Rx2bgfZoz354wvSbDoP8EJhAv7te73",
  "key12": "rcmYPwJFWocZ9pTJ2pRn6yMwxcMQtNPssihbsssqZST1jA8FQhRu1djeNZtQW4Pjr9vKuuPZh9JKTCG1V8Rs2zz",
  "key13": "2SjTjiwzNPEtQhJXFhTZvJ6gN35RwEF9wte3SFA6ahHqFmzuyudJ5F4tLdMuTc16r36vr1AwZWK3KjnLxkssvBMS",
  "key14": "2EmabiR5NZV3ZVChhbg6hudxgKznKHGyoo8H6LFY8HAc3TXKwTc1EJe2u63grfWQCrLocTa9bhBvmZuhMLYEUdK6",
  "key15": "2Ber9ATNQ26cNJRvppNk6ymSyF2TyvHwZrKK5Du7V1HvPhmyjLRZAVPCFeGHk34V7DV2yCkytfpofjCZQmiwNeGo",
  "key16": "MGhsW9JHjpT4S4iafMqf9ENyaAaENpnTjRncDfqYr5p6NkG3EdAh7nEvUeBZt1QeuxMEDS3qFokLkpS8TjBXnek",
  "key17": "3SfuHVUhjB77GWMScoZVsMoLuY7uiJCjfn6bipSDUN68mFhfANmQTNE6J4hxehiYvE5p43EVvEJSwzh9PMgJ3X6U",
  "key18": "2Y4p28M1oWDrcxpcet8UsksBbqxcJUAdwk3VDWHRrP9aNDt6wgNg5wz4L3Zgg6NsKUBCTkDGMkEcrExUyLtGuh32",
  "key19": "63NhdFE7kh8kZ4Uz6nJRQQRUyBU7qNSTggvsx1hBBscJ4sYrF2euZ42WYtk3NfC4vwXgVWXVxfpTXmorbnM3VVyW",
  "key20": "jsxfF8wANtGQP5dW3cZH489h6wYB5NS3BTHULvaAw4hPZsHe57CfPxWsXHC9unwmVRiyZz5kD3iLqpLnWE4MC29",
  "key21": "3xWcUQwZLCex8B9QyQNrFX4hk4BE7ohj3nYvwbWgki7P1JzVxq9mqWnaZzJREt7SJMNQEqfBhnY4k5UzPayEMTPg",
  "key22": "4KfmFXZXiRPYnsueNWAqRWQNkiKTPypmD4dKsAX4Mujt2BEVXnE9wggZFM7jPBruKrpxkF1tqjmkkiw5WyZgGTah",
  "key23": "4Z1Bp95d7DF7BiMHCj4g9MKP8yYeCJjDyiKk1ruJdRG8AaHTf7wQ3tTDhmHAMhXJ1dbUccNadZTuGUgFPz1UYhVG",
  "key24": "2ixxEQsveZSuo71evxGEDvyrD3XeTpeFb4dUyJ64xvkUi4Zyt2RdQoHDegyULvT5hQyMmxKwARcfEPvubb5M4TvN",
  "key25": "5uprEwxF7ih2KXddTBMmXz84LSGBH7zAa6Jp44LYBoPa44gYXkejiW7UbNmC8Kf3KeuXNCEVTM3fLQownZNcwSG9",
  "key26": "2Z2sGprRKSXMgndyQBuvMdmcYCx3aDJVLxTyf1WpmRJuTWAZnpuMU1S1nYY9GUVe6uWMV1JdVW8qWjYcyGxDgNDK",
  "key27": "5e2rj5mAzMiunWFzM1EeRXJwxEDRa7caj5zy6hYaDyGcBAXVDYEQ3C7xMq8426xAb79P7VrpqcTphn8P2y55f9yu",
  "key28": "2AxDEr9QzgsMV29jngUXXggKf9WCUbPDJ6isd642eUX8ToRwJzbLBD4j6RPawv2LacmEC5JEMQQ74FFFCCUo2UTQ",
  "key29": "4Y8KHRZP9gGsg4tqmUi8ymcTwhieDPwNgf8DcQYLG49YK1Rd38xKLh3MBMae2PiqzkGf4TpTjp9AeUGMUFh4hHsY",
  "key30": "5j53GwbXEjvXsxXn4ZCRe8yWQqEKALmqBWYExBHnuoFJkw4DDxp9vSxxwZFNyWqMDSb3tGFdNzN99VhV2R4ShsC7",
  "key31": "3FkxRyXXY3zWJNBSb1DV2yUj9JLyQpvVH8ZtKicYDXhKW4YscnEaydSPrBRsNACkq37r8b38QYbHRi6ngiAvsU3A",
  "key32": "5C6aho3MvxjuQXSUbgRUB32QEVm2jfuaMJpfw667bxq7iY4oerS3NFCCZdQg7CQrzjQhkqQjC3RJnqo3H1T3MN9",
  "key33": "5Xt5xA1AD8ZnizBM3781orzf98DR6xAFuHYdzxDkotKA13XaqntgRdEvD5ufSrnce1SyDdXs8GoW3dKi7QeLipvu",
  "key34": "28RHbKFaNXYsW2BG1cmVLkiqR48EupoEEMFnYb99QzvbzA8vHQEdwwtqcmYixLu3myZUEikqKWnHzKC8d2EjXKjx",
  "key35": "89YxXLfE4jWwk9ZNp2R4CoMCgPw4sQPigD9Qosd8qU8UHnrXpdf2npSKHW2tKEvPwYSuwWsT2V6E8yXJrgVHhHP",
  "key36": "2bciUJbi8NTypCSuzWLWQtLQvvpyeTdnKm1iXYhWLQhpnpgWU1H4J6dt1dmTozTd6dnzhaxBxQYqg6hYX1dJNYBq"
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
