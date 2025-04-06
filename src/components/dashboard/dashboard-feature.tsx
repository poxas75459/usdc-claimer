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
    "R34J2c6CH8SoazZX61CedC2AuLWhC4zNPmveDszxLBP9cLp2jjpWwTApgmCh5HaUpWFN4EwzeNNT8SL8byEdzUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B9afyo9GJt8Suv7unGnZLRe6XEAWmAvJnskn6MfWvy4i2SuRsPwAhaudYYgiukenYmG7pbCgRoB4dkLBCYr5R1i",
  "key1": "3L2tKD4ubGYS1rPodMYCHLsMUbshP1ok2DNH5GDyCw4buJtZcuyL7mYGny9aaDKoJUHpVkPAT4XExf4KX11Y6s3B",
  "key2": "4MdMKZfGZSNXt9VbRPLp31DvLr2fRr42p3avtcbPka2NhACQsjZ9dJ5FqNo6UDwDT6WQxKsYpFsVPe4h4jydGD3r",
  "key3": "2X6oshRuZGNQRGEGAECvKVAeAV1PVTywHcEQosJ42an3M5f5JcXStJZTbePBPemDJPUhiKyw6WDJVpZzLCHcnXpE",
  "key4": "27pwebhco3ueN3etsuvbcSCSXxfcQDtmnq1jDeKDmUwv6KtgMrU2moBj8KaoZsnXwHSnrLtNuKHLViRXo4JPdcLw",
  "key5": "3cyYNeZTU9dVsG6KdTTv9pAEKkZAwtXs7B4x9vsKM4Bry5rMHsAD2rFBvnXhctZoCxr61yzGJ2zTLuJMBPUkPAWK",
  "key6": "e5HvCZGK9x38CPBxfZPnqhY6b3Tfot7Tjv5AYXmR5G7TB7YBZD595pXzf27e7MY5g3Je3qfEQAiBynJcyGPHQoA",
  "key7": "3V8PrPw3mwddRLhLAAvB4tAiiAL2rchCeU6gq5Yyx3yPG8R9w24ZiS4pyCSufUa4ziRjEjS6fcdB8opjtvyz3qk2",
  "key8": "3JE3mW9DrNmJ9ybWgVZo2H5qoXSC2ETFvn88iQW9HXcQf8cAMPKLggNuHLmMAggnkSSBiSEVUycU31BsG5kMhFSN",
  "key9": "Yc7QfgmQvuuZ38ggWUu4zJK53sfGh9ignUhuZDe7varT1Dh4WBccd1qvdS2kCMWfiAAnrbeXiDTn9JAHA2KwMjE",
  "key10": "eQYmVxMz7HSfxYHpPxRiGYAE6zrNacWtvXp4XaA9hfZvvsMLRNUxH6bXdMSHoCEQ7Q46bpiGqELfEHV1tMWnAFu",
  "key11": "3uZRrFJ8K7SqctEFDTnS4rBQy8K2L5q7G6AnbhftzgJQUNC1ZpPZnZg8pa74x1BaZVv5gV1ZQpkHwT1mbb5hnruP",
  "key12": "qFJG1KGAdkBh8bp6LKCrgKpX1Hwj8XYANGQrTT7YESrZH75kNjZuTQqcAR48UCg5PFjzYpUzwXCb9xKSyaLWkWk",
  "key13": "4obZ2TPFMDkfJqQdrWGqLsmTqHS9eaoYWz7D7z5bg1H8Ryxc4SGqx9oGM1iNu3H6FgizPezY6BT8btwVSTcgAAMJ",
  "key14": "3Py2UjKY9CBZ116cqcjY8b4X9G4Wu1w2r9YmjoBTpK1uD5W47HiZMMeaq3BpFLSQc9YknRmmwBbmc2E3dNRwJ9GQ",
  "key15": "5t1PjJjk9P6zcYH2ntU5AqZrPhd1Aa1jvriCLfR6mi9HFv5KVyNkx6E5UjgHCzTa5q5giVB6n5bYVpKghbAZpyh4",
  "key16": "2Hhdz5wutm9b5CMvjMprrFjY5Y3Mcx5yV9Bo9k4JUj1gd4agaVSXa63UAPC5YwYEXPmmYt9VqhR6fLbSehkwT8cV",
  "key17": "aHNjSFLmL1DYGyf81fPmsNZnC8BLXNCT39JjRzSn94yLR4fnL1sq2DFnP2Qj8rK8mQP51K9HRSWc16ifLpMqRDF",
  "key18": "5YXL9NfXRmw7pheu692pUthKcSdwTPszfaC2bWhW2if8myhtnVia5gcj7GyPK5dzTL6ME56gsA2PV23u3M3dX3QV",
  "key19": "55LsF6sX3t3sQDsaRjqqYroxqQTjFDbQjkWBVAxCgYTyDZyba3vhHRWtRBRTT6TYc5AdCqe7QVqhqaB7GqvNiS4t",
  "key20": "56gC9jweiEV5Udvivz38aaonjKwAzanwq3pgypK4TSkNZT6CFJY1sEnzBpVSbPzatcNuEjtvmEcJ2gJLYxzW6siL",
  "key21": "5jEdA9n5RXhfFEgh9xX38tPoDtgT3DiwaX1rCr3pZwAL2kxio9DCovSu5w6tHm6LNG4YedoxP8UJkaRJzhMyyruK",
  "key22": "57yLZTg2cYVmQNoKgd51DTYNw4QpQ6DCF5PB4k25QUhiift3nYh5AJ82NSu5vwwpdfsNvY1KHwWjeUMcZa9X2F9B",
  "key23": "cofssf8ZrciNRbgVtkC5i33nqshZny2j7GW77bVkTDa7xM91JdX8e2dFyrp657ED4YijrCwDDW7nemC3mExAjXq",
  "key24": "5gY62M69hdbzwKZVeAMFtZDEfTAVNjhQKKpwgLKk44YEk4SrzFCCPnM2J5Zctkejqu3aDsG6HncxjJV38Naup9vJ",
  "key25": "5YQHG3UMeSiL3XU3KoTy8XVtizEM8nqpYs8fYqx1p3SuzrNGcZFVNVV9M2EBZ8M7wDAn8fLhGnjqRn1mBdXoiRsu",
  "key26": "5GkTduCPHZLfejW5goe3hFMpRaVP8LanpbRz7r6et1PQX5EFjcoaTA3XUzADytzEigzYsTpYB99z1FQLmjNAJC8f",
  "key27": "3WhG5bNXLrkaWBM38dW3YeoMKozSdknCKFjoKUwukRH9PWzEpguKWBqhkeqe4jAF5Wms467iKpeuc1jdkJDyyjTK",
  "key28": "4tvZH12cmwikazRhkM3S2X6SfbmQLudgYXMaBHFs6HeVPWxDkSmZNt1XjUbjzATUhnNW35kEepMJspGRMPY1s2xj",
  "key29": "5LEz3vM34BaG5f7PwpeyzFJoR2hGupQ8xTzgutGPadQcSxHhv7iPZxyTXDcwEoFB1MCk1yVd2nqUj75N7KuNnoHs",
  "key30": "4FnTKUNS2ys6iQgDf2BgYXRs5bYoaewDxQhRbBY7GcSrpmxANVsRoRdRQbtJ7KqNjHaA4x4uJYsjQXU7aSUvk9yf",
  "key31": "2dMvfinE7JZdT7yQwkdKxwqVvRFwD2oF8nWqdFEsMcuJEppJzDnAHUKSNK8paXhr1HhnaYXz5hGbtjRVMjJFvXZi",
  "key32": "4BqHR24kswCYZu4qAzyWyjAGDnV7BSg7HwM38FTUk4LoJwkB77Upy2UbrfuENwJ9NwfWc6brcBbTW2QFj9oNPfwE",
  "key33": "563rB6VjLcRaW6BPvHQ8U6tvVms4V6pt4kkqbychkBLioc9ZbEYdhZ8kWVgE1x6ZGyDZrBq6KsogxvjxcCxV9MHW",
  "key34": "2PvhDxmyCeRJb1Kd8w65uJWjxvy1f3yXZg9tdQEcX3nXXgn5bVqoZ5J16BbagfHTi7BpiSgbLasoChqgdvsyEQGt",
  "key35": "4KTpZMa2As9zAcNDfc5aY4uaTPvD6aNdHhSRcxELN49afKKzirzxr8FfusurywiotFKic9M6AfkmBhN3dAgKgZ5x",
  "key36": "5Y6Xdii1a5Yq2GETNEJskEwGBZShCNMNGumbrSK4YyJYhSeyzqc4qP8X6VyAYTeuG7wB7LsfpkNA1PRi6iMyR6XQ",
  "key37": "5hnYLVuNeuhNFNeyRhu6SdaFEEwy5Z4vGF87rS1SJA4bTMjx7gL9Yx2B7ix1v1X5e1CdLHmHfujJFEHDJW6cj8s2",
  "key38": "53p8tydW39c41AVPG9rPvUGids9sJ2FY2Vh5ZxYPJJS8SSLGC33fh5dJcHmgGtFGDgEwZsWxnpy4VCwzbDbk3PDh",
  "key39": "5mzYjoiDG7hywV1kesUewLkL8sMrZ4qCdEoM7XSnskMFKpk8QGg4Rjg2et2QCS5bA4nVB5Gy5zV81FGMpLnLq5QU"
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
