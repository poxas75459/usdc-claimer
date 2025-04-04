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
    "4rYZ5As5qHWyb5aWbJSHrnDY595NLhMrgFFW9B35gU4fgqpKRtUBLLmVsZSrxLLsZSqEKyKN8y7W2SkjtHMCJKJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggbwzSCHXHWFaoFxrgk95gnFqoa6UL13GFXQYkR2jMGN25pK3nPwjg7knvweTz9d4m4McfSZCZ7bbYVFfkMp8VS",
  "key1": "2pgkQ322RoKeKzhmG5D46BPxSR4x8VVTM2gpPFufNozx8wLLcEBGNHw9brAQP7JTTi2cdHrumQR25rhydPjGdmva",
  "key2": "5oWYEsjsKNRRbCDgjZaSGrPYTYprdN3q6f6gAwiN1P5v3TNPT5LZdjCo5w3dWMnVbzRs8NFNQ9qW16GySTsaoUcQ",
  "key3": "bY2h9xJ5hSvyyW2KioKkAqBnE4y7sPKqU6owXpxJBND2BTuicsJDeDV1XjBrs1McvwWy4Se6xH2RBCpz2KSc48T",
  "key4": "3WG6b5KYcGYj6CstQjDnLwTWf6Xrkktf6G5U83bci6zDXnzQUe3hg1PsAxEcRVYwyQFmfiD3kC8mEjvF9SDhczvt",
  "key5": "2Poj2366rgmNDNTkufwX5RMfXcsryYQDHvFToh9vkk9CMkbBJXXZJDHQ91GKyQ8PTHy4rmM9HC3QaxWzRAEJau6G",
  "key6": "3pk7iNBu8q2B96GTQB5QYAWWe9mr9ytAwgHGYfML4uHFpgLYxzciCsRXtbLbtvrRVWjPMx2ZysGSWxnGVmE8DqVr",
  "key7": "1NfBJ8tFH6u3c3QmfguGSw3qVCqgPsP8AtqhYDwd1DAMuV6su5YzdW9myv5KcGQuXzNHPvUx1HenqgePt1jeiER",
  "key8": "543agYWrYkwBXMZnnKnR4pAEivsYY9nA6jrngNk7noeF3FgTgXqjyg4iQkCi43PMXLGHGvXJKn8xLKzG4GcoWenX",
  "key9": "3KGHGhpgq1wLp2MQYMLq61YbRm7cV6AgjKrAqNwgHbPkjPV4Zrbb5aH7Z9VHMa3fRjzjLXEMWNpfFEzVLJG2oBDF",
  "key10": "3YkEbvU597KYvbzV81KTorLa65svyQcNQvvvKWgY9AHWzSoq9GEioknmcF1DeoSfxs7ygNgd4qGiKbfsu3g7ZJYS",
  "key11": "2eBMobAvmLuGTgC9YKKPuvKBM7TZaxRaECrHP3WWs5tNeusvk7nvrxRAkQ6SHBy2J65FKDGQr2LcuVeHctqp3zHR",
  "key12": "5t4jFaE8amxmry9ydcJarmsiFGfbWpRFAssZHGv5WGFaMZvDNStMiu245ymPS3PxySWnu5hoa8UystKCMz2Umeii",
  "key13": "3TksVGnKybH6PCZ2YPybf3rv8FZ3CgEf8A8aTWctLedzymee6oyinfZXNaAFTRLCNTJeFA61ye723tHKNw9jqut9",
  "key14": "4iHHpF7JA2cRnBgQHSJdNHATKgsKkSAGjnZbpoMTr4dyXm6LkNKwjLhEms94xmUgLFEeskBxz3MtYECA5AT75GZ9",
  "key15": "4K8eUJ9xo2Fjp4md7wdnWrqRk6We81bz4crKqx8RPPMEXx2d7v6Hik3BqHxxbT6vjTTCP3jBdyRdnMpXwhb4RAHx",
  "key16": "21xNL9TK3MX38MpH562XfqpdJiG7QAjtDQCakpFae8dzYAwHQcdBa6q5HbBP9xMCUhzKeEYbyAjKrAGUNqH1TxoQ",
  "key17": "5Aq4vb2hCwZyyVLPW5wRMwi1L3UkpB8T4aSgTG7UCFoBeMNbTXUiHCPqFbr1Mn4qcV9epsNRLHYDZq56aK41KZ5V",
  "key18": "3JE1yU9ycd9KL8FdarfBvavB1wnAMpH8zcYkMmy63rnn1SLeAuJmkh8VVXbu2Gc5MZKVT48jwFCUrWpvzMFUpQn2",
  "key19": "2g9F5B35DTycKnS4Y43z44HWLU925jfPSDSTVD92UFRRpcxDxvCcGo7DFYLqsSh1328PBM32baDY4hvLyg1ntsMm",
  "key20": "rhPaMM6D2tfcUrehxdAqpLU5dWwJJkdLS1KaQvrVHoxZNnZjXKz3QtP36esCFt8PpwacDVoF37oaMDfRiv1ZVxq",
  "key21": "hQKLUL7GL1ZQR9PMVdT6s7gh1q1zFmeALJHEg22kNjRMCjepzpKLtrQwn8NCeDd4DiDGHDuPA5E1kYrjVJMJU9j",
  "key22": "WkpDnp7fSd5U7mqBN5mQZUGkGyqiHABcnF3p2tyUHuBQEgAoFhnCnqUdF8T6sj7bDmSgEp6ZAqzCuvUb47YYcFz",
  "key23": "8sVmZG3F4A9bmVVX5XaHarAsFn36Ljffed5p4LxxntJwp72gQVkcsYPveeo5xqV6FTSRFvCezJCynqs1e1KGYGF",
  "key24": "3W2a4T2fAhwGcU1qroWH49Ld97m812Ak5ojndrPZ4XEsv3TrymuQJat9hsBosypg7rXEMRUpC5bQbbKAoaL492Mb",
  "key25": "2Q7kgXCeYWBj9bv2hhT4YK7nu7fbGMwZ5TioaLEk6CsAEw9bDc9yp39vX6p6Z436Qg1YFjGRoF5CPapJWycC8V4r",
  "key26": "5pztk8ABtWHCcSFRDRNXTR25Mj3vedN1NiCKrmMhca8yGqAHuwEVDXZZm35e1vwQBP6fuSh8b8Y8sZ1gLGCjVuhq",
  "key27": "2nQVZCA4YpDLnhYtRYJKSNG7xENun1Gf5uMuVNdaRa9HorVxDvhGdf3HZ2dAdvvDzUv9YoSaGWp5xJGFWwWxCvzd",
  "key28": "4QHsob9yeTrvW3YTVe8yM1MdXmq7b8JTGTYbp9ifZnJRr9PoLeA158evcJ4NNPJkJQMCJ7iNQVnzfZNCopomZifQ",
  "key29": "61sPiTK8G3cacga3PXYqESDVqJBXEZ1XuwupsgvGAmwPZLgNoxUt4L6VMLSKEtroj2rq5K41CSnkbkqKt732BirJ",
  "key30": "5H3nQDhzRUEJjrQZG7Dd3NJoA42yh6oNS3MvtpwRFY2jfHMDjfXTsB8Z65sPqqgYEBbCXr5b8WrnfqzigNV456eq",
  "key31": "4qBWwk8JTzmWokCUKwLWbhj6BHQAZVeqw59KDDUWmj695conbdNgHtgRMmFd47gqCByZ4Ecv2pzVyuYTKH62aEb8",
  "key32": "3igYXrhA9BrryKm7mTXuR3r8sBCbV8ED6BBZhiv7ZSvGLGmvdaBPU83xhoW6C8Fr9Jquc9NezxsVy9TcaS1HcTSw",
  "key33": "3k8ixe91p8CJdt4xb5gTKxi7L9L1CGqzzrtzFyYs2pux7EEJ3NXrCGANJtG8q1s31RVygCRiGW3UrpTVByQFGZPs",
  "key34": "RteUuDhRLhHJnBXUDe9oGUmkt1uJJccjCFahQ1WYMxqYnZBBY7jiJF7k1vApRRumgpc13K7fuLY15t4pRp12aUA",
  "key35": "1QCm6mdBiXkfHK8V6cDgT98VDzqyE89avhoqMu8jhU5Gf9C7NyVE9iJrVKzo4uLuCJbb8wvtaPbxxsFhNYYCG73",
  "key36": "4f5vmcuvSgGesT83bi4vY9epufHrZ2PPTJDARSqCUSmUoqJS7goBR1gkAnXvV9rRLjAbBUxzb7Rzrg493ChSXz1U",
  "key37": "4mUBvu5Hdove4wMQB5bih5XTEcjSvodFQMr2RqroZqzGk9sTiU2UBucLvuF7EWxk7ijhurvNKuk5NXVC4MC9xZqf",
  "key38": "5PYW4iZcG9Hsn6DZ8tm71WtaseZTweobFwJwH8dp6ao6gqnS4MQCKKXcjgDCwRnZxffw7ukNX3sx1ze6ZokbVKF9",
  "key39": "5zfBUTuizXg9tXwqJKSEKeB4JGr499hAvbFH4Ro1RPwwi4BTS21zCSBo9AxQn3paHGA1dt4MaZkJ3TJxG8TiXD7H",
  "key40": "UZX8NoXd3iZUzHvqaeZDLsBaMnxJZyYo7DwM5yVCbWYTqNNPLBt9yYEpwTf8bWiC3BPAoZSH2AqiG1TVXUm76Zk",
  "key41": "2tn9o9mWqE4bTxFwHerAzPS5pEV7xMp2PZfzwdRL7717UNVJZcMxDQTsxR4cSA96KKdfT6vXN5mSECXXM3zP2MzN",
  "key42": "4wZma9EyauP6R3xuxXkTAZ5yCjbFC5cH5nykSburRgkRZF7Y1Jhrt12EL2msHJdvvZbL8LKkqcNoezJ6Yetm9mkD",
  "key43": "5pUhNYMfDcraVsCCvGjB4b7GuvkfJSctN45HMvB9L7z8rkZBtSorLBRYqDYPL4zUcovcZBCZpUwGYVbhFhH3aycJ",
  "key44": "qo65KwfACsfRDPnSrcvLtGRnzX1sQRBW744AT3ShxB2QaTd8XNjBCLCXhAdVtb8Hk1ktqpHm9iijE9yAC3ZrqUe",
  "key45": "4e2rcwa5xvdc9F41uwEJR2SQzEqEHY2NRviVaYot1eERewfE2qdLeTGe81RmKNWJ3JGYsV8oKU1964rakamKL2xw",
  "key46": "4x4Xd3gimXvsp4GKE57stLuEnZcP8NbGAtAjVxBL2zqrmQhDiBQhLU53vKyMz14CQJvpEvnuBdqDiucTFQNTSG9L",
  "key47": "4c3HDTxWtLVDsyRjVxZAJe9tDo6Z6SdxLM17yMFVEMpWxrBdSTpRYkKpCkZ3AYMcVaibtLVA1qrBpV3Jbeq6qEWe",
  "key48": "3d2UKbHHZTokbZJJr5LQRQGV2a7X4ckMAuDWyh7FeJWZ4Lk4wXaJ4nXpLetznWqdpACxLS8SHsQR9pVHCu1HhAww"
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
