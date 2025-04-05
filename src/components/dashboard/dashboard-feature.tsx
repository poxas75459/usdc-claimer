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
    "3gttW37YtpbE2XYEnRHTCtR1S2MotYm529xEgRApzUKecnMXJyoTbuakH1RM2rjUBzYRhCuGCLABCW4cTi4tko3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478Ja8XiGHdUudrF6ceeJ3BrKJ812vyPU8zoyikzKFVymxdn7gYa4XR3ZEDxgnGYwedoiZWY4sYiDxkG5UdKLeDX",
  "key1": "5ZNcVmg2qkYxDzNXLbixJ3LhaJL6WQN7Df8zK7LhmAYBTaeWYxAsykSfycRqEasxb2oqkBhr4YQH5hXK1CpyAXfp",
  "key2": "21d8MH6YU6AsVCJq1ZgEM37cPet7yNBQEuw6CCLhEuaG7QaamHD8g7hsDzyqLKBc5ztL9C7yqnGJMNMnpmvQawJW",
  "key3": "3Dxe6TT3wposc68cLA2mvAntnCNr6Nz9gz1SPVL4X2pXJX3nE92eyqanScnurVik4ntHebotZfWDUEMEASPMPb3J",
  "key4": "5qFVYNVzZgAiApWFv1kjTzrJdw4TSt7KsgBkDcYkERz4gLASkrckxCXt4zi6nw6KM3evcgmhrmgPc1F1wddSZ1rT",
  "key5": "3XM4SWCVYHNvsLKCZXAVG6PNPmE8yRd9ssDWRrMmrTRGrpVzVYbKWZ3cyULjhrLxg5n9ArKQ8rCry9xtAAYv6nqw",
  "key6": "2AmUT82jEApaPrrbABAtvwEvieX3CSokUQyccj1MELzNQRybJf9eSV1gGnrjWnrQjTWoBv85oYYG6nHFwLe4xhua",
  "key7": "2rXYxbTeZZRnmHWCovqU9ZeUxvB6YThTieYCjhDRhCMdzFNZcLSXyWfnBT3J8S71bPXhGsPncfgiDCvN7cFp5qRy",
  "key8": "KKmuUWt2fJYW9qZQ8SowDMGGRPyvZCaQb3x74HvH4oJgZrXEgEuJg7TNx9GfHNcrpKQJKwq53HGVEUc8919w41j",
  "key9": "iS6dxB5uf7QcXanZmRQvB9Xo6ftCRujQRY7E8w9NvF2VbZX8SvL5gC49pNvH33EKQ7zEjavbbgdSkTNPFMfp9Dj",
  "key10": "jcBM7MxzNYNsfbsZPjrDehXQ38efUbH6sPpjzoiCZergTdDqpyHmdwPYG9MhvU2oMuWTN6DMhMdafUkLp1PAk4N",
  "key11": "asKWWZmsi6YPMJGSWaVmKe1pXzBayxdnY43TAKCHkMqJJPJZq6iZB2CNuSkdnj2TtBQuymhEHctuudm1U2kftNu",
  "key12": "5iUUkLDyopcKCHE8v9nmu4Wri4x1xT134GzEJH2gPeKRL15ufArR4GbQ1cCxAgaxoArL5B96aDT6owMuJwfXT58x",
  "key13": "2KnGww99rKCVc3tkw5t3XxPuHMEJhYNPKNM74kuAY4xSg1EfvJyWhWM7PQ76VuKBbrU4xkQfb7KgLuJKxvu4zJUC",
  "key14": "3N8nSq9YeEN81YhMpd6XC8aWweFE6gQebDq2zw8iyR1mXrznfXaV7xyFJUXqU1dQ37QXrHbzbvaS9RXk6DogqYsf",
  "key15": "4MGF2FU9fDrMn7hRxg7UgQTKN7o9Cmg6vtdH6trgxn5A9ikXrgSmFuWVZc4e4ygrhDm2igUMnBmxu9EBHDF4FjQT",
  "key16": "2WcjL9XeCVdfMEbi55g8zr7v2C9vCBQGQ3UXAw77gT4oJzhpnZEb5PjNtZFtkM5AkfH3vbc2fkJoPHGJvxjjR9Mi",
  "key17": "48icueY49h9ucqfJEvpWhvEgbYMfsoWZcbgMhksgaFKEupCcu6ye7is2zRtb1CJhNdGJeckNFS9CZse1MDzqNcBG",
  "key18": "Y5WLJDPqhgmTDJMzAciDyHK3MUCMCQm8uFqxm5yKsJdNw6sP1QQnmCdhgE4crnmq9xtAVWeBbARA1HbHs1HFvKo",
  "key19": "2te2s5uyw6tqvWpH4oSZbQAKW5CCyUf1emajJpb54SBcS2is9Ld3usi3M7v7hMQRGTyZAEevHrZ2czczDAGMzF2",
  "key20": "4WE1PN3VqQUcYJmVMmqUhHbw35TEN2Ljo7nrRVBRptJzvSfraujn7LcDpj2sBPxxGwZNDjUYGmiteGj7yQ6uQX9b",
  "key21": "2U6Ee9ESiDSvzjCByBMDRKEVwhNUJb6E59fgjMkhCo2x9X3NoX9sZYbgq8PLdhvaA9BJLjjXDETVBRWFyfZ2ojvz",
  "key22": "4UfeWYVa6kqPYSkBVXyzzc2GJogpEYiSZPJtukJi3Tm5Eh3XcA73WFMpeePo3QyDNFibAt5MZfvVfVLN51YvCrE3",
  "key23": "LN3Jkqn6WqZbAzp5vAXyGQbCvTVBFEkwm3fu8K9widRvbU1yRLxXACStZm5jrUKSiLaxQ7fzs9CBskKJ9XutV9s",
  "key24": "2qNLXNcdWFe3QNhrnmXfTyfDcckTVToPauLiJEC5idfRAWxXzPMB7CQoB7eAzYRJ7u7zjCGyLn9avrqw7TRDt5tn",
  "key25": "34ymEtuYUqE3PJADQ2zcyWZCUYVR2EaoXrkRE4ivgyyL9w9tVb8UbZvNjGLGmLvGAyEKGBe2s9ZDzKKxVKS7Yd9R",
  "key26": "6yQrH1XbTU5f7EpVDfK3v294amubf84UDNKVLugrAciZEGaM4SCbrMYERDtcMpVidKGYpRBdiQWemmWfvP8u9FC",
  "key27": "3Lw4sTqQmUY8GU8dq7Vie84njyWJan7AEf14fko63CV5WDWfb5pQoEvUsCEyjua4RNwwZDmByMWYKAe98n2Y8Y4g",
  "key28": "3YP6vh8AfhocPRR9trRaPU9Ft19oJD2bEfFovnC8STW3idNZtfn9CBx9W1Dr92au8cyHvCPRQ2cqkG43C3DXhBjH",
  "key29": "RvgZsFeDtrikVrDkc4oPnTAs91NLd13zqAR6GgWYqX6HjnFD8uNMmF3j6necwbMmDBthvo2XpKfExiwSdNv4StW",
  "key30": "5xCGbxkpsCiCfLvN9oWENg9sVDJDedzCQxzb23SSLuhsCa18cZdQLTf1HXTwfp7uLHDRU2XhLjwk16nJr166a8z8",
  "key31": "41aJXZBNEA5zBaWhU9YXZyuP8ouaBLVSkGbWMhR72BHRe9GEVvbuepW2As5Mc1C4iR9psqbEjv2v8Yx55r8c5BXJ",
  "key32": "4fU4o6Rqnbtw7xSiCUFReBZuPXwQsVFYMLQvLVcbgkzdDLNQRZykp1kRwQ4xa7CgvWbpMBHy8PjRHx6fiCS6sNfb",
  "key33": "3YYeBcY1p5W1Ukq7ZhsXPzrYkkPm6GNwZgU7sE1eq6tyqFhNcmcUTZaYwBUfMXu2hr5uNj1GGBFKtB7MAtUF1Bdq",
  "key34": "5J7WcshtTspDtt3MqvfocvmvL5cYT4x91WeEnBd4CEEoGKoFLa12AdfjBuQksSRjqUaAZ9x2Qy3WnPis18ZwZ3x3",
  "key35": "2pEE2E5NRfe2FKr76WiWRX9eNDhW19JBJGyzQ4MvkrZs8VmRWsvuPPU2V1TGuTx1Qx9G8hepHfBmFTdzX9uTQydV",
  "key36": "2G1zrmvpTAtDeNLdWr2J6iKP22Mugd2MbLDw25J5tVTCuF7baj5z4Tsn7GvCjezjMHUDo31hFHoGwCexXXC9gDgs",
  "key37": "5ZnXGDJNGPXs9swHvYFqHtUfgryp5EeSseamWXJpGDmTQTzBe1a7JncbAvGUheCHqNc7wuXoGgQpsiyd5xa67Vzr",
  "key38": "NbCncnVxCp6aks6bZwdyCArFWDFuMmWMVMKurkry8D6uYSZRmKFHiyKi2mYNrbWPaZfbnxnpjQL7P4yrNKeEUKg"
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
