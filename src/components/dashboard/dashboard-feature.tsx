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
    "4KbeJoV8jFo5o4obaeT4NtbccroAHVFHdii9Z4ZbzDRaq8XdfcG1P2WSi1EXPbg3NJrvtqinPqiCZEffxshzzD2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeYKPKKJv895xVRZvryfW8cE8QwYj2jR67cGgToF3M6FnynN5qSrYFf6TU4vJcEMFzqKCZ1AJN51eHGkpXLa752",
  "key1": "5gJCoNd48ZWew9Z35G3CFGEDbnTBJCgR4V7YLvHBc3XLVmM6EjQUYMphS9SDruq3vTKaE3dDuoFWu6edVboVd1hq",
  "key2": "39yR1FGGxq6nJGsy4Pskgdgb6keHxzdzFCyY6fcCLFt4awjxfbFr9yYXPDmf8KhsHKfr2p5SdpTo6EhD3EpqGvNN",
  "key3": "5bgrTzCFnSAfwQtej2G4WGuYLmK82c8tryKQhQEhY3oWKqWvmMXTbkei4zSDuyqGsnAxjHbV9pGCvTYVKwRMiZmo",
  "key4": "2sJ2uui2EA3pvxxMcJ88k91dGsjrCLfAxnKNkQ2aZBKhUQ3nVoVB49oWNaC5T1g5eo62zQ6D21pWtFPyy4ZRMGo9",
  "key5": "5NN59WVKqck5xTq6pHQbuUkAMbN1rgVPa6RPAz46wVnwEQxSbh5rkXWTUB8H6XCAwDq4MySpsZZ7m3GKJjduDzS3",
  "key6": "43VwzN5Noy9PazMXRGRh4iyjeYeiPDJfvgQ7y7mTWJTDfDPU9vGVXHrHHyQdu88eGdFn3UCeoXKWThCAn7akh5db",
  "key7": "fdJDiBLmicTbu6NFYpk2cQ7Wm384T5U8mWRjXfbcsWXXFA955ruvAyiZNhBzoG4VTsHVFyMucjuERHb6PKZnypU",
  "key8": "T4MdEj31uNGQuykqGu73WCcFsVazrV7CncBvYiSGTSe4CdsYzJofuiFniKcapN5cmC6yPjukEeTiR6ffJM9bX46",
  "key9": "3U1BkgdDi9nHUccij2jRKoPcUX2xF6PupeCBWKVRz648Q6W2RBKATYpgQZ5F5a2VE6jDDtwvyK8DzbGy72wU84ny",
  "key10": "4CgshPhS3cLiNfRUvRjXBZy8ksp91V46Pzwe4yvisCCUo8BA6Lu3isgQNEwkUcfu1PFSv5ZQGSFigrUS4yqy6hLn",
  "key11": "2HfytvqNJfA2vzpubqzHj7sFTQJXcaVorRbsMp9RUnY5YnH9mkKvQuso1rPHk8iiBzfwVAXJQBMvWzMWWqLU8E5R",
  "key12": "4ZdyM2m2RCJAM31ormcQ3iMw75RBcc5MSPeMnuoZnsYL9v5MJLEKyfm8oiNSxXtCkJGjQMZBJyM4wMm6bVBkWqgJ",
  "key13": "5jfxjSSirR8YzQ7J37wPKTdLS5q5bPVxP5R9v9zaTWkjJR2GjbyDKdTSh9zw3MU3RGL3esnqHbMAdxmR5TKk1p4j",
  "key14": "3WdXKunAtbdDwpjVJv9rRDNSf38VwMrN4skjHeqVrFKmwAn8PBYgHpnPMoxUAcmZjb5PsVDMSFiVLiQqBWTNDXJ2",
  "key15": "3QWxkKRtM6P2zhQWCimwdAmtap28uxcezyjVVB5kqbvtWu3YwXtCDzhPnrjbSYmUWAzkLB1Hf4UXc3j5tjDE5vSJ",
  "key16": "KdcRGMAwPgwJkLm1vHBsHZeiYG9LU3PFKeBQa3Vaxdr5uuUB8TagTgmtuFuKuwfueDn7NUEiuhWTcGTyeFE1zeL",
  "key17": "4BcCcm8Ea1x64qNvayoja56bvFZnAFWEmfQ7KG8GmhJUspuyEJM37j28QoCJGmEDgZWxQERhVz4EJD5YVbdFKcGy",
  "key18": "36q7Lbfw6rPDx9LXnLRQh4cC8LQhQEbCVSaHfwCiVYZoVAv8CwzXkY9iyQ6p1BL8DT3tg9V7f66b5Vk9su67mtEw",
  "key19": "yD8QvWugrY4nRVkFepyv7zLq2hm62xmVf4UM32m9Fh4S4G1vMjKF4fUBBrgY5n6NFygGebUBCLZcr7rmSggJk1Y",
  "key20": "32FBT83tcG5CjQgYsZJX2nb5EpXrJjQkCPunQcPhiLBddXBTbGakQaErJh9abXWBvFnGtpHg6HGpTiXXqB2fhrU6",
  "key21": "4uPL5x7PpRRw1CNFvU2gPGVPSTePksMtW4RKLhis7y3WDAUQ2iniabsMsTUjDxZNvcs2Z9cMfNnxXtXfo8Goet7d",
  "key22": "4MQzTBfsmm4TmooANGvV3dXvapuU3z6Ab1uKbvVkK3vK4nD7VKjDVjwn1hMYZvLpWUBxDgwRKUiqTRsvP18fAfAg",
  "key23": "5Hh36ckGZ3JK8H4mL2FFLW9LqywT9LoRGQwbw7L7d1BkSKnCaMubmDVPX9Z4uQjRzePakUBmZCe5HjG4NtsK8dtQ",
  "key24": "4gx1QuaB4Gic5GZ4VmvonYRBaqPZLC9RVD9hkLbTTteVDnPSye3AAe7ZftT8sfgfu3Jkg1hgJonf5QALj79Avgkn",
  "key25": "3vPJHdMVK1XdBiYRhphH2t1iFbFAniUYMzCu6TP16xHGemJ5QaDoqBjeqvd7RHRv1n9XEGwVq3AF5jzM3n3z3icS",
  "key26": "WDP2Vh2FKbixK84voHXq1kMRtXYYLk8eRZT9HyXMc83LMsDNDPiPi7mTSqx86grrRrh2tzNZh2ef8nVP8zAPcVK",
  "key27": "67FuWEgvSZG1tr79LgSFYU7W8bPib4nKgQ8R2sA4Qg3aJzcUTjewzNL5S5sXpbpdGCC45BdVpPgv4nxYU8Ct6Zyt",
  "key28": "5ogcUf2ZXS1hQj41s9CSrXu5qLmRaobL8UU4LdTSqt4YNd8k8xcqjCZ7m2CJZARL3oE1r8MdHa1ffJtgYe4i9faK",
  "key29": "5nemCpQmX5JqhNbWU9rYTDSmB7WixHGJDSW1Fb8Wd36yDj7tQgv6inXorNGTmf1iUbdP4KeXXDEej3APFHWV7B91",
  "key30": "yFPoGPfPcjFpw2mv1dq4JPRFLnVtWHUVwtehdCXerfck77AFwmMxJ5ARFHtMzo61U6TUQ9a2nfLWNpPMQvtv7CN",
  "key31": "4srFTjL4cDjS5wsgSNsd2DNTynTah9o922prNy5ZiQhLDddLahjpb4P3mvBLRxaT4h39CNVmXhRqdV2dx5Ni32NS",
  "key32": "2DZ7ygTxhWhnEfctMLRRnJbg8PXZPLxSCcx6hnhjscsKPiQfDhoZujcN6yrkfHHs9c6De35QfucQ7GjtZEvR8zTh",
  "key33": "48iTckNv53bcqboBhBQaZ661uNsWeHQWywiukNmjXsMJPczPTBcCzwCPEeMKcniCpVdwepKopmxqQjAPjoTs6kdp",
  "key34": "4inpUpPUbqmN8kW7VmAiZepD9vU1DVwKZtsqjuABcgD8CFrdwG2T3hH9L8HB2vLTy669i99q7vTQCVZzX8wbVBTz",
  "key35": "2jLWHMaCzdkConpHZw3ryr9KBUzcJAbYimdUZjCq1WHvRRfGkNyuHcDikLz3UBZMbMwUWHj4gyNkd48uqYV3rZtQ",
  "key36": "4vxVXBZcVKy9n8pkGcuTAZRzJNXQLAzCiZBpXGQNWryhLJLpqR6ith5M6ciEw5NaEEnmT8onngcwEoJDagBGWWaT"
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
