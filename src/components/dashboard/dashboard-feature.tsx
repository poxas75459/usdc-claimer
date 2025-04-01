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
    "46BheJCxaekzsbLLyttXx4xQzDE7bQ7ZZuAaDzBKaNUMC572BNK3dseum5gQ8zjWbu4FqbqceaqJcG5CNq7fqnbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXRGGjBdPKSaYBDu56aeUH9985LV7Cv7cGc3gfzDxxtY4kuNcfAP8KJqeRsLz4inPDAzwX3gcGE2hEziBCKuB99",
  "key1": "3EeZ7zFzwSr6BpAXN8zCfRagB3Hs1zKtPRgycZYPAanMbkuCGcm5G3pbvh7oLF4RxjZg82uLH6xQhaGMedeFA15V",
  "key2": "29L3ZdgTJH4sLsQ7soz7CxUJ8dZUqRX2avwvut1wf479yWgjW6y7kqfyuZpkkdMcCdhFfnyRdc6XsBDoToumr9RD",
  "key3": "9FqLsX4PtPCfoABcqHVNfHScx2aUWiGWhqX5xvHbbc18yMwLZRNekPoN1CrB8915HdnBEtrmJwqBTJeZas8mY7N",
  "key4": "4PhYWfVdUHEWr5Z3jAm7d4HK3a3Gjy4JEvMZ4pENq7rk1GKDTjyx7KNPJZdF461LsK35inehPu5z6d1DpdVh2yJw",
  "key5": "5Erq9WbTzgMtos1eusrrWD9xZjsLaUbmGiNDvzUCQgFYG61pKMQQedFks8MgtsFfEv2PbQCSYg5u1zvRw3APgcS",
  "key6": "5qT2daLUSfJZZ2B2uDkZn4ZbLBy65tvFfhXrVAQDAteX9yjBnsLBSyxFa9svMbWhyKdikrR8XdeLVGQkd15ZUN4r",
  "key7": "3bcPXm5rJ91o3wUz6bct15zEtBG4fV5afN57FG5SsksLfjLy852DXRkdHcr9EtvLpaGNXQVpjvNCvXchUwWk2azP",
  "key8": "2KHqCHgH8twuCNGKGhf1JZ8KcEbJSqrz3G59XQ3kkVxY9FagKALsgeqz31aJniV18FjgcjXyLgbFMHH1cWfBxx8y",
  "key9": "5U5zpfVoYJba6cAvfMQuhX2BTMWRz4dTEKTpq3LxHVzaAMmBhnFbvmWY8r3cyFiJBirW9jotaFHcfdDrSMbQu3vc",
  "key10": "3Q1S3niBkUeFkhek8aPhuynkU6hyGQxiCXAnvwNH7zrF2EZ3jrPkeqdxGAQfFx5opX1hSWLJzaCDRjLq4Qjhiij6",
  "key11": "58eGKXbZPmmF61kfjiEV7LKcENxWamraAbEAMFDT8wrsD3xLMD7VFiZfzjzPZTczqGudmarNPdAgLGS6BjUT2WH9",
  "key12": "2GCjyf7K62vQV166Ea2bfNLYyCshWPqMFut3wT2WLnwxGbmMf8HzvpbhraGtUXy8GuRLaUp2f6RvEVXnJdASPBCB",
  "key13": "rmDtwAdd6x4exgJrPXkKXbaX5rQUhrL4Stz27yQfCyEkhaYxdAPKsBXa1dH28iHeG6KUz6MfiBY3VFChHEaC88n",
  "key14": "2816YnmCMSiVsUd3XhkJDJe8wEF3nUV8tRYYcud59mebXtoPcudKwrfXMswUBD89e1ajZSiLMoDKryYLyrxDrRgC",
  "key15": "5ioNJQoAHz1NZFkBp1jwyAMkr4gaZyXf3u4bxUXC4zTD4A34fzXNhX3wxDU53o8ASJRPh8MfDtQrk8w93qCfUizb",
  "key16": "66S7WXAVmf11MPDLLtiuMWY1nv7P9biffHqvkEiRgrjNYk5pTquXkSCCYRsXiihMbQ9SiThrZKmSzcdWHcGHuqwj",
  "key17": "2vvSmpApbAEeWUgdF8YmPDhtrQmVqRx6CZJgfPJFEQ9v1JVjHk85aST29mXSGPxSRnTuNGGLhvY7qxCEw6TvTY2q",
  "key18": "bE8XXg3V4BdmqjcwMWkPg6acGdpiZaQfQB97ywKTp8KvCZSx3ApUPSMNHrzUdGZSDn7PwpNS6iWCYQdaSPPDXTK",
  "key19": "4eFQsGH9NGYCFspNBXVyt4Fm8b6yUzF5xzekChY253hH3tQLxTPSqA7RQoyhFcMzmDfazVq5xU4HRPWvMAUsKEZ9",
  "key20": "45MXdy42vaSs6wYmwtQwkrQvgt7J26b2vKgdd4WjzJwFGAnYVnkAKm3zRCsYRjmimc8sdf3Gfx5Jy49sCiVEvfYk",
  "key21": "2Y44GtN62kxgzPrZUasBtS1KfJ76roDqiitga9gsmhds25fY9ozcpPiv2qWz1aNNnRGRRsZUPPiiBhrcqu3iT74G",
  "key22": "3SndJ9BHoqxCKtdvuTGhdqUheSuzbi8ew78XWnVZW9d5cnQQYMoExHRPKAPVqLaeWZxvHyjuMDb1BMx2aSq4KRBb",
  "key23": "39WxqP8ibzQSEzt5BFdyRWFF7LadpkJVjLX65NYrdMtFgzsWh5CVBAeYFEEUe9yx1LQwTuhHGHJ5CZy5rCViABdv",
  "key24": "224ekKmjYMYfGWfdAPtL86SdMAA1RA6vazRfGuGqKrJcKbrE8M9wLQgS8j2ZHjPSVv5L3HeGiYiyJjc5eFVvqNGs",
  "key25": "5Wf5PYQ2f4mXSwR8qxhXMvNbLwArPvZcWCNasJuGyfAtkgg8nHK68jEHXGALvGNJP3vMdXq3VP7dhU6NUXDG8hCD",
  "key26": "63n88hqMsJwmFgBt1bUApd1YvwzTwpTZBQskXzRWgogVfZW5TSSaBsE96Gpg7KsGNp1CABZBDtvTmotMLpdd2iz6",
  "key27": "2LL6gwvH9bT7fStK2457GUTKWcx1TfrMabnrNwuMmdjGVnN9ghiNGntMSwkn5mHiikmbSyGzigY9Hj23rMeHBMPB",
  "key28": "39vTGrUeaQytTytT9m4xr4d22we5MQK67WxGDnxVx2d2Yormc4BLhD8A6SS9gVzELoqoaH7WpiutoWgUKLo1ppGR",
  "key29": "UcVPj9iRJGUan9dYMRkT1poroQUgDnDFc5oQ36tibG6J9pnTJ5CRGsVr4ezFpqeMGyFa9grmvjQDWPxuMBNXy7M",
  "key30": "4EZyJRaApW91tSunLRsRac5gxrQd16P7VciqTStnmLJriUYtVLXfAYruGJGxQSd54xdvUu3rp6ASMni8b18SxuHe",
  "key31": "5AKN6Weo3XnBMkgBvmL93rwNNYj1LqMJSS1GJCy6K1w3ZLKzFgwfYrLfRR8foq8ZyGMiY5HS6mnEPPSgwTbad14Z",
  "key32": "5PJsbUWxqqEjcMYLf2p4TRcen5Q7GT6NARdW3TxjNmSxeSWmWbmDhDAKMWvjyVGqRKNUX4yzFaZKDBmMorntge4c",
  "key33": "4ccXE38fp3PMmzxLCnQ8L1u4XcTmrcguLn2n7R8k9QSzscM1JrFYkhdpYcHa6dFG6AWxpM5aemkor2nWedZLydoG"
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
