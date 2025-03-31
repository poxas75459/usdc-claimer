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
    "2gZz35MuUYH72UwgnAZ9J35r7WyHZbUMg3YyGY1AMTNnixiLcdjWoeDjWyxMnJpjeTW5vAjJMDggWRn2J3Wua2VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWah9Qz8nEgmWnMmdnFTBKogNVyRvMpqCSjgS61dnaiddLRmTHEXqbQSYmDMYGkRyZrsJcTPn8ENgsHzgqSPJ2r",
  "key1": "thZdkUh6hHrYEEjqYMZaXcNsi8veaVjMCoL8NDsTUsx39mj33q4BbcNebDg9mwF1hKgEtLvwC9aEzFDwe6EX9MA",
  "key2": "4RcdXPKvn6W4RcoYQet3pe3snu2yMiQxvFHo2CM1HbA6PEQWP9QH5NgvYWBH7X7XArMJBAmYBfJW6cEr3vKAnEKY",
  "key3": "5wqzRLddTWFmgLCuhmjweZPgMuetASe5GtB3tQyh5SB3GcEuViCb7TCyRyqumrvWSDbbcFEZsTrLhJ4qvQ882EjE",
  "key4": "tSZfEmV5i2R2Ez3kwQWvJvgBZCzTak4G3kxX5ZRzUnWedWshtbPu1Vdddwj4gdEEHg9Ky5U8yb2iE8jb7TKfS1t",
  "key5": "4piKLhCk75ZRU4iMH9RLTPFAuFSfmTSzZDU4t8FmK4bREHEm3D7oQnGASiqdnhvEUcqFBsQcXm9q7gd3EUwHpoms",
  "key6": "4nwEqJvocC6L8nFULZ4BTDML5559nVP61YWCQysrmScTkEx1jJTaSTChpGKB6BndWHHaxWsEXMUZBH2K8rrQ68Hp",
  "key7": "2byM5CmmrMHxktCeeWzcxhRnYz8QFFioSUXdHAvrnLzAuojnqYtZ2QXiSf28kfrTyHWkWQDXhgCBbzD51PW1JRk5",
  "key8": "3GSv4Di94yusXzFncWfEhydVBBND3htFQhsFpDVjWHMQ2wpe7gT3JXFyrKAsZf7LNEg8DbLzpgBYNyUW4x4RUAL4",
  "key9": "3EZtYpGmwbkU8JhLpf8yJrcWogwjWj72f5YnJ2maqYqeJgo4Zj8gBh52dntCuBXPoyMSLE9DnhoUQxozLB2j2zQC",
  "key10": "2qWoTk4fdaj8UxjgjrMqQiDaPUWJJgdfKyREhpdthpbargM8rjeBHrB19rhiMMeCtFxfaSzJNBxaTVG4kCK373SJ",
  "key11": "3EZBZEfcS7VyewzHMaSPjaMH8sChdKwR8uUbDKWy1znzyvQpebtNzeCnxF3moRewUyg1DXjbJGHizYZcrLnTRZe6",
  "key12": "2g5CEJRMtyVYegs9pqCCei7taV8sc8SSBGZ3zRZnxQYeE9vLZohGxgZqbMMRrWPpD7g65du2JGheys6rV5mQu8Bp",
  "key13": "3nJigogB6hEYoytQsBMD1ACeQ7xAeLGGJenJ7eU7fwekQcQgUKccUFQA5WmCqeBC2UWdbvp1YuJZgnZJ24CFYmLH",
  "key14": "4gWLWhQnrFSLzNpFNerCwrmqfpcbbUCchMrWtrrvdHdpGXq5dsvkxK6iB1QKSuwAEQC1DagAK72PZmjr7yLUMMFA",
  "key15": "4dPMxbLnV5JpUpxie6jpGT3Kgho2vrhghriWzpKFpKypU1xLaQWjeYsozEBHhQfAi5BvuG8Vkx9iMFPALUnByje1",
  "key16": "5RAXKSYfVPkNjFu3o4rAy2KtzP65v1JAiEmtrh8qnW85Jm4w6aqLQv8qym5yGyDQK9de7LF71eub1LmZ2QdH1v2w",
  "key17": "5GD9KMK26LZnwPBQWx9zTzzDFZ6gGyLZs5hsnmn7FnbqWVEtSm65aK8xGQbZpgbB2NofYYHUeYvoojTL7zFH3RzC",
  "key18": "CNBBLTqjAmheHrtgg7twxyCikPaDGC5GdRAFptHT7JDHCH7JVFtaCWe77dr8LA7JtfodP36PPV8LmqyRnmWYatr",
  "key19": "3zsFGeeAywpwtk2yFUwoyARzaW325W1tUDFxpcPSNncFTZzW5AnoFeVU7fevT7gCuSCghkHgUqfFRHw8y4Dt1oe2",
  "key20": "DdWU1z8ecaGyWuBPAafeiEMG5xUygkEnZCCR41PQN25mgcnnjZocHb4TxuFAv4jhvbmLdaYze3GZBgij4bbHvXL",
  "key21": "41eLke53hKxZLZgdTkMRk3DquKeKwh6Vasdj1Jrj9TQJagjoxjLKgWCknvUPSSZWGa3hCUGFppe6dMocvm9gDjFh",
  "key22": "2Lschut8KZsW9EkSumUbkzgzJbESM445sbwr5VthUJUxHyN6oNYb8824mshoRuPoyoAtNugHfoiDK9qY985VsEjv",
  "key23": "5Ybvsw9SnanaKL18fTaPa7wB1Avcrihxr2HEavb3DP79Kan44N1aBuVyniG14i6YgSq9KbLBcMvrdH45jwBAvNHa",
  "key24": "4JjJmk8EJxSWQZ3hFXEYBi43j9HRDupTuNoTdBgeTLwgDePftbwbsbRVtt293Wkgb7HGdDTjDxWrSZdg7PGHQn3Z",
  "key25": "59TWUN3rNM7SWKPSNuJPULXt5RwbfQVSrnrA1L7ab5ogFE5tDD9GgRM7HNQhyVYJtBDprYVoB2CxcG3dDCGMxkDU",
  "key26": "XBuhoWKHRTVQ1g55QznjiwhxFtwdokdW1ipCGSHAd64j7MeER8wtrY5CuheY7hBW7K8sFNSHyqDXqvaVcr9HnyG",
  "key27": "3dDGyszRi77CueNY4ueeQobjWRmNVoMESTebiUnxmkWqqnnQbiWnEQxdpBwc89FM17ExUFYg5cTvLPsEF8Bgyxxe",
  "key28": "4badQbzxcCuUMXweoJNKCSA38Wx59k9DffPEjjDgdjf3Zs97FgQj1iE72bYGumCGCdXE3MXJp2TDwXGBe1fk8uoo",
  "key29": "pJUaT9QUfAcUWd5ozEhYTzMmBKN3VoTyKT11GKejanYvtPp6HH3jnwPQFTSztnK5YsuDiFCWcbbvnwjhJEErzA9",
  "key30": "vxZHTP2eGnfS9BK8Qh1QQhXWdUE3vmk6QCWAMcSwnfJ4f9rTX5xyXLWmYD1uTMnY3j9CobnjbiCXkJrc8EFNwAC",
  "key31": "52Rxos3y371qpV5Nek3ZihaZ45q7FHfDpz3zBSYB6wEgmciUDu2i8Nh1rBxtaxGgUxbZvHa7BKtBQVCU6vrqVtMW",
  "key32": "3isF5mvz9xdzHnJ6CyuNHZW5ntBZVmw6K2nuTXYpEnMKAAe57yb2nhb1cXsSTQs4JKHANTUuZbGDKXiNksytGdzV",
  "key33": "24obZXRnGWfkLYFTL9N1HCpnHcUa8LZQygsBpSamzQRAmb2b7bMmwCQbgT9F4Bzzzg4uWk7K2zWFPY9EzEP73yga",
  "key34": "33Z81f5hiBhwHxmp74qE26Hm9XUH9R1dzQrhHRkatVfqzaSd5qcNmJhdverm3cs8nqc1ECEocBhSmn4kGWaHSe6",
  "key35": "3qGSZYvyL1MtatRxFwcRbwQvvNrQu2xuPfuGzdyFYdbFmm9RjbtcL1a9tvzWkRikcCCVWUQ8Mr3mfwWwUzJkFEQd",
  "key36": "5CDUF4RdBmokzGcXwtk6cmPXT64J9yspBuhU7zLkswMTy3t5dWFSrXg9QZNpvGj6fWYQ8tAvV5YhBvFQd4Lo2YRz",
  "key37": "3Si5gHLUMrGtm9zZpYPTnUe45roe1ajYjBdCcBcNMNua2Uku9vcoyE3ausyoqs1EHzMp65nz4TcJ3m7187VhWafs",
  "key38": "4b1TQqxhRgveZ1zXovwawgjCfcVD4xxrm4A1ZrdVAJjRjPVUJ2y7qLa3siPFnszZqbB42xytouaJSr6MvQiPMwNS",
  "key39": "2gKRRXa7tobvtdy1ZMrZVTjDnE4bBAi6qL1XJ5KnAG9xQLBxgSDGsCDUVXfBsHnst1QkhmFMRFWfZdPFQt2tic8b",
  "key40": "6Wbz8c7SZ5CRUAmTkFGFkFKuxEnMwMt2Acr8nUaajcvL2jSUmaECiozxrA3pd8U8orPN2sH7gE7bwCsmpS4zqB1",
  "key41": "2nsSjuurvvcvVXpawRptjU8CVsqE32wrqCjJFSQUFU8zF5WkRTkWcAqc8njtnszuoLSS8QcharwQGrMGi3t37j5F"
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
