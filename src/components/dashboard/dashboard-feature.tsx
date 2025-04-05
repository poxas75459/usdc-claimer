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
    "28EoM6GTC4nvzLCPM82K3BZYwgCGdyMZccNHbzhXzN98tFjKXk8ckqgyUWavgtJYAJUozhQ6aF9MSAdkhDxgPNQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PCvDEK5TPxUAC9FCen6hDH9bL7utJvtTRMcLNqX1T9XdSVCAspuXvktckkYB7S5dRq7fF1NcczgFDXDEJPhRCfV",
  "key1": "489YcCQfHHEHDWRixUEU6yxn2QKBbuZwwZVq9jkakEeXTjFpM5rKsAuRWZb4TfesCiRVvJ7ULVRHWpzSnUKJQ2Co",
  "key2": "3H3MTqUQg8ZF5dA1cFVJxppryPiuEea3cgQVY2Axpe9NEYpo95hQSfJcHj5VMoFnbnL2cpmdmbMiW6yE8gUGZHqP",
  "key3": "Vc9Wt6wEbJwpQs8HE5tC6zNWoppLQ1tVtuT7Zx4TvC6663VhFTWsxxpRxGx1Vpq3gwUW8SHnouHoz8fBs9Rpr4L",
  "key4": "g4Qnnp6GdMr968cg9ydf1N5YHTXXdxd6qWZhpPnv84SQe7AnYhXEZoLJJEphdnXh61v4qr1EUcUipZ2SFzMf7SY",
  "key5": "4RoW3TDVQRN3Yr2oqvfCfBYkfX9LoLCycm4qhxfUuzktECk5xE6BCAVYut7AWxPGbqPqRRgJu3ZmVQxem1LoNUp5",
  "key6": "2qBV6ip9otLmBYfEXcBqXKqpJVNkqYi8yyY3hZADBKCiypynQvVWcgvXaPKueRMtPrERUS5oFdXU4hdDH5iby5Kj",
  "key7": "2aU5UuAVU98RqsLKEUnvQdXNwkcjdYF8Tm7fDAJBMib5c1U24BsjBzPuZZ7iGxEycjGXSbf14hSABe6e1ZuPXwEv",
  "key8": "3mCbUqLH5aqmyPNS5ZRcjMpJQh3kP6PZWDLXcsSrYwSfDzLBZVwMHCb4nP9Q1xVZx3Y16kkYsGaJgMfjQqAMMsFG",
  "key9": "4GKuxaBavuSBd7W8KtHPVEvD5b1MUGZtVDwzJEjQAa4AZogvP4jKGxMuNdKcRvHe4ecEBTcUrx7RtReLTVPRYw3g",
  "key10": "ghgP6XSd8fNki9Fo3k3ssDu7qmMiMBrLwdbqj4yvzg4sTzaRFVPVpdAR342K4891374j8CsoSUpyemafeFHesaR",
  "key11": "4AQJ4s4aGbYmy8sFWGUdAHMPC5Snr3L8RmD1Wq9nNoSjQrdMpYmy5M1PGPrDHNwynpH6CpKtSmqeNyQvLZj7DJBK",
  "key12": "61pbdEAqqD9NX5twssJmqcAz4wGACC8kfmcH5iCS38utgMqHKeW52C41dEoGHPvcYvohawrkcUwCooSYDZWWTXX2",
  "key13": "2mA6Zfzt6ikMV4vjtZs31VyYRb9FmvTQZdGtaSYU8Z4cNXNK2pusWhST4VgrQYEtToikNrddNT4JVhqK2CZMmRj2",
  "key14": "35xRKBmcxd8erYfnSCpyA1qi8KP3zrPQvZrr7YCtecEo1PLraPeXsnx2vXnoatMpVXAQ4UK8jC4w6VgYyhxY7SeR",
  "key15": "4Zx5AzfZEf1STuPbyi2fuGPPQG1ghr3g423FVABo4qVkWtow7iofCY7DDLenxACD8gLqBs44RFHTVdp1rFD8cdty",
  "key16": "37zMMC2rJfWr36X8wz1P2iBwzTq1xdFYDownSGZzh3CSKMobEerVG6Hmd1jcJNVz9ggjMvYFKTQAARZCkk1pmnbt",
  "key17": "47mCbsEzKZEbyjXZAi1RXsYrBRKweUSfXWdrqCE1ZHj7qV1hspMJjJ27iHx5cnybDJHCrFUFP5HPT84tpDhhauc6",
  "key18": "s52E5s1ZHkSYYDXoQRYnHzPodH1F46CuT1Rxyn7zfYu2vwZLHkiTLBMpASBHxztbyQ87gWdEwJUVpLw8eUHsRtn",
  "key19": "e9CL4LGHEqW1MBqdLaYytW9zik1MrM4VtiDChute6dLVzhianvCm4QDUR8qbVHX8ADaoD5cCX6Wmu1967QqATRR",
  "key20": "5GCS533sFDNk1tuiW2ASR1s6wZqCq8wCL7mvS7y2r8zURwyEEMESbHdG33KJsNB7y2zAxb9ExndxPHCTA3ZjvRep",
  "key21": "2MtwKHyzVCKRFn1VQw27QCRoneZDW35qZjyCtdrdBHdTtSoSUzyki6DC17CNNbqZB5q98Z7uBDffETyQdwKJVD43",
  "key22": "3heJZuDJxFA6oerCtQXChFbN4TrpUV24oZXEdP2qv33e6DKLxF2qF23gDZCUsZGUvsPqRpMWJhrNPWgCtvzVbXbh",
  "key23": "4QG8FZHaLm6irK5uv1wM6qeoUT2vL2z8aPVvmSVWSGQDL4ToStFFaYFevPa127znmvpSSmUvQerT7RHoUbsdNBM7",
  "key24": "2k8pNhtx8XdFjoYmcwioEX5yuLRMMHsxGBSgwfBbW6Jw8NCibueW3KqPc5QJQpB7CjDLLSVJ3w3TqbZCtv8VBSzB",
  "key25": "3QTCXgxf53HHGZmStXKWqVCjKAYfhLUZ9GtgcBhq2w5ZB2hxJGZ6CCAwPTZHfeChZdcWpXg7norghVLSDPf86iS8",
  "key26": "27r1Qztoy3PW8bAPkLsB13g5c5XZajn7L2Bw7AZRYKpyyrD4VdHvPBXCQXpuHAFdqfzbtu9UYXn7PeRVpNu98EqU",
  "key27": "3zy3xGEGrZoKdSbZQqvYmFvrjersFJPTWJScpEsZdK1cGNw6m9j3ygWy6xPek7qMHwmn8fuJu4TdwYkP9XKSw5z",
  "key28": "4xw7TnAinC7B2XjH6r3gc7fzqDmQGsEAHe5pEKZUZJRn5z9yy9VX3aaWrbZQQTnDjFKQT7u37sTWYxzoQiPtm5an",
  "key29": "4gHqzRSCTPRaXubJZb5iCrm7stshFR7zRrYDNEaSUYZwRJsuWzLqBvDYHKoUpvDXw9FfjVJVT1AN8ucQvdEU1gvq",
  "key30": "iFuC6T8T2VzCguDARpY4wY3hJRYwYrXMaP2nqhNNS6UN5A45tXxkn7PWw7TZ2erHkzqEW21ydbCTPK85kpqAcGD",
  "key31": "aTvKpGF8WSsxqnxgXQrUapsT7aThQmUyv66KHVAse2Q1Mv1LrRPq2NnLmFXv99jpmnNAt6y1RJDRxvSTryzGExX",
  "key32": "3yv5Nma6PzY21wSVP7KCqRVsp8HkpcwvezgZwANAtoFvNcTrM4j45doPZDomemCbZgwgi8cVZ5gC9mjRg5jN41ix",
  "key33": "22S47DnhYRvePTghN4HjvKcekhvpE96we42xjoAymDtoo38Tpr983HwG8Eiow2e4Enq9HMrM3zUTNG1B3T2m1UYj",
  "key34": "3n2m2ALp2eMwMyYBJzs48beXG5Dfns3Hx3CcHABzPmimifofFCmo8kZsyQimJy8ai2t5X9mMAYQmawP46Vdxov3K",
  "key35": "4DdmoDdpsyj5XpN1HYJvF5V4Xho1uBoyZpKoTr3yTfpRfpZddZQFhq1nXt3PkUFgPYV2DAHbu5aMPT2Zk6RC8se6",
  "key36": "3EkxhsMm7hkPwQ7gmwmcb6KFmzBRawWDeALoFRuz3BZr5KSMzVZua25hyZCeEcBtFVXg9EY3aJPx9o4uPJrPbCbP"
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
