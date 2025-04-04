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
    "5JYqvsEMWXmYmJ8cfX7C1ghRwXZpQrYZbbjyyCX7P8ftNiWURukAZEtkuFMcuJbU8KZLdJVyp4TZ7EDbgT77dA3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39sBm98DLfuK2ngLcZSeA2gx2mtPNsBf9V1CLFx9aiTxjmfApW1Zocj2w6uWuXLPSEfWkNiHuWu4hBSGDwfhP4kv",
  "key1": "3NBKQHk2Wemirq2es7SdmbYPewmEfzoLubFnhia4E9CSdmWwSPFRuzYzgJHRnFjZHHk7aCpc68r2EEB8JBMkC7Mh",
  "key2": "3nyY5VyhGZMUkcdqCL747nMPVZR1pTE3xLEJwUsURheJBya2ozs2Q3gaUyYCAKLbxyvPMQG3fpePcYfYYP8Gxmp3",
  "key3": "5Ld9epVKfptSibLStDF9UtPtH9wt6j3dGnNjHF5xYxdiJQrDma7UGgmVFujD2mC9HVaa2jHU2LSd2baH9HfzG8NN",
  "key4": "teZsEdhwKQbHydwCwzuhqXhho2LGWod26A1ihxLaDM4upZGNHUevosQWRYtrN3nmpBT6dpTtZEGPv6SnTRqGxvt",
  "key5": "LDJcXo6NBhnzr7HNSZpZBpWVp3cnn7MLu7Ha7WToszrpWQeoGwBDxEGJLiEcEtZVG4bBwv6zVFoKkxVHJhLbC35",
  "key6": "3CXVMQfBvR2apX5ouxZWiu1Q2ujaZqGywjmvenZ63qCRWp4xmetnraB3J49Vx43aqPwVLTW7Z1w7iWJw15CcTBWn",
  "key7": "5nyUncX5tmhkGChEt9NV16qjkMraTyvosae6fVhd2tkPLYEN6q6xkKQNnauxCnk6snrUP5q1zACmBmEcDsdGuFEn",
  "key8": "3qxeDMRZ9sxxfRj5d5BovNnMTnvtxpdzihbJ575hhcUKYjqQ7VinKJSxdVyDP6QPCJDvpz5XFgDLYau5aMGY5vX2",
  "key9": "4MfD7p5SrqcQPfFjq6KQWVi6CiAH5VG93jRgHj6sAqQ29isdnAwSWKdwy6r3vsrBi9qXzkp24a7sALWunGrQGGyN",
  "key10": "4HhKGg7aq6DF1K5i8J2Sfg9BBEfDTiwujwZE8kqgmUTj8h4f6Bvc2Zj7rDn7jxFczZKhhrbSKTDg4iBrEDJ8GC7G",
  "key11": "gnPSigbYdZv2cQRJeCd3zwM8sAneLrRkzt9y6RwMR5WDsEZHdZtf2YxymgqHsNWPUfeQ3w9koXSgUyULZd74Q51",
  "key12": "zmp3HJAg4xsqLrkXmFckzWAWJ3fiZki8dCniDDuMo1DdTjSBYqWud5fhSnyUWyAo5pamgVqi28CdpUhNij8QGMa",
  "key13": "4x98uQcB96KnptSkhKGEpc3ZQsdBXRmsjMitPJf4g7cPAaWVXuEFrnLtvydHNzJ7KcaoE72ydtVhz3CpSmS98Cbg",
  "key14": "2aMj7GLHV9DsgjA1PcttGoo9h7WTmf1NCP3zpvPsrS5rBfNDZhvYcjei1btbQaAMWdWSfbKRJRiJbLhaU1WbJGtH",
  "key15": "5uK7a6ZmSuxgMb8SdtXtxAD7j8Zq32UP2dftvCVPMiRh63nodA7grNMiwrYCvXx6s1aukYoCxkwFYU9RzgraZ16j",
  "key16": "5Cb1vLM4w5ZvQxY8UkzyQx3M7F9PZQAxdyoFqebu1DUaEoRaPyCn2b5CF8Zg6u6mJzkoTPgMbJsoWRX3JGg6z6J6",
  "key17": "5fhsYX4KFcVNWARuiiSDNHrUHPUqzeL2ZBojY895Vmza5mUnKweVQxpYiSLBTVC1ybQuw8j5Xnpc72T6hti2AZ1r",
  "key18": "eJ8sW1yfhGCpBSAknFuRSKeYxqqovncLhhpQsdVNn1CZovkv7KKNABLG1aS46iNoSA1je56hWRz7b8rp486zxrm",
  "key19": "zY45aL1u8iMWowoydXgYNoR7jtZ1LKX7cSNwz4wA3sdQB9cppdBP2jsr1JemgeicAjetqLPoTTmjwPfrgcSeF5Y",
  "key20": "4pvTx1Nxgsr7JtBnZ4UjWMgCaV2MM9RMQXC5X1cYaiXsJhvMNJ7dkvBjB68YKn7ZiNFfg9Pz6jnu7UXXJiifPpSM",
  "key21": "58JnHdYYuVTQ6LWq7TaCJ9PX4wGi1rTnY1UvXftfnx8SKHyVCzH8n1vxA85Fz3RUa7avm2zkY5f9DsZGY2cacuaf",
  "key22": "4hKhHF1cUyM3uQ6kFXAxNUkQn2L13KwpDmTNbHZ1dxz4h7KZDKFh9M7eUKxdkXaqMkALkUoyUqbxKoMaqFr2GnA7",
  "key23": "nddM6Bi7HKPar8udxxYL6SFjqw3GkxxF6uR6PxMW1jV4Pcko6DZAf3KBzeBXrzrr1DBMEKthq2ikc2nxFBMrxNS",
  "key24": "3svhapQVemy9mqW7TLRtJmKqk22GhpC3T8Sh9uUz4cceWZzLshEXGEgPZvddhULYLLn28XeA9tZvtnWXQhvvd7zT",
  "key25": "5rC3GH42dmj4UBd2yQ9t89F7eAqQJtfqC2ydLrrdRHGiyraY7m38MWpdWQQQwAcmYVnyCyrrbG9WT46V8RKTz7Cj",
  "key26": "4f8CBcQusaECnN2B1iurJAuF5Sr5sxVLECdQiaA7XWknXh6HkxRgQ3VLtPpYTqHEpaNQdgTdmQ5dkcJde5YWqngH",
  "key27": "2Pb9nK3mRKvddppMb9tDfREZxhrhVRDJGyjM7K8GwrqrrQTkGuhWCVFS4CJzwLi4hsPDBnUtj5oKUW7SbzYBA6A5",
  "key28": "4PYP6KTRLC44YgZQBShxrVvaFGsGK4RHchtBMxmKwhiHDJaZBWAMWxiSdZW6pHQyjXxMF7muqvTN6hH9WJaiNimc",
  "key29": "35gsryrbQxbE2eaUcZi22Q84opa2wYxeT5STv8VSKfBRYbSUnF2tW7zBSns1xAWitXBzjtijqocg9AsokNwfgUYC",
  "key30": "2vkWNWi6o2kA9MLHBPhJhSbw98v5bxBVDP8qHjRvQkrBgmVxSP39b7DsfkTonNe1f61QYmYbbYrTaSutHyxUJ3ep",
  "key31": "2qZGtfXwCofcuty23DamgqAc3KKUhkP9wRXVjoGXLxKsCMPjY5oth4V8xR7xYLgmkupNRaQ3zQAEkbTEU6WRyr2t",
  "key32": "3upJYCLdn1mjQHtJbFWreRN7NjHyCUDSB7LBVRzbDPRQKcK5uxgEa6j9wkPHXM5oVQo25AYpkmCVsRrWfbg6BJGq",
  "key33": "2KDGDQ4tDiK286YoagtbWZf3pxdefJMLyjBfxiHfoHq64rwgV8uQggnfVoNHPPR1xR7rGveoFArkGFVYi5Qxwo5F",
  "key34": "8DUhYnYJokkKZhGpr4uPXN1NymMBPomnchAzgatMvyZ2u3hMTFtFFY7Hb4fnUbkzzjetrTqnqyL91798An2iNbz",
  "key35": "66eBzGRHhyCHzc1sCYkkM7ohedMZ7h4dSRGtHqMFTwZtTG8VQWiB5yYVeH5vjgUTQMYSUZfRYDUhcSmVZYBxmmvb",
  "key36": "A4kUimeEdwGMTKKiZVXTGYD4aYR4azAB33yhcHivEuNQJPYU5jBrJPZQUGiFQZfZFnSMEozqhpqWXW4PuFR79Uh",
  "key37": "3NxQsJTEogncAgWm6tkYSGLfbJthTS4CFhEsLJ6gLb9SnR6odkNHY78Gp29YJRxDJxMG7VxBrHdB8sjrsKHKdcdz",
  "key38": "4soYHxsuVePkVRKCVkdsCztXegYWQgzoyahDKEbjtx5vVNghS9tmLU1fiDEs722U356fdAfuXwHxX4AQPH7ScNqV",
  "key39": "2EBXiLppRUxF4ykBY1CQG32k7gD3pzwGpijWRzAfb8YJ8K4s5WjkPuYc2DyDaAihWenqEDjfxvUDoRUovLWpTxHm"
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
