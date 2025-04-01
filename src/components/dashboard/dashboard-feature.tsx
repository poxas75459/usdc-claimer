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
    "u9GgrAvPTL4Fgnyv9oqzn5efKHXfJFknLFcZF3tRDQsvcqYsaxf9aeZN7S3ytPn9nCxRZBMpU551M3tvJyyxpKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpwJ18Yw6Nj5biUi8ripStsfHTSooU4zabr6kNEVPhiyuzXoz1cxQsKF7e4ic4KFFBqGPayjRC95ZaVmqH6TAi7",
  "key1": "4oJUwg88s8kAjXMTsBzhivpDZtQcrqzTzjcegYFkb9MLNBnGuYnEw2XkAbyAW1TB5u5KtPnMARmn1xwBxjv7BwWs",
  "key2": "3MA5oDGUqQJ92vNKJtvbPFYvfG8podj9cvPZksZYBN4TTeGgiPqx5ULFrFhQwervCBnVEudaZ7LEg6yDJbvPUYZy",
  "key3": "2az8XDhQYZC37SWTSZasQLfwZr7NgnDnSJEDZnXZcHkXSWFhmJMyVhpQ792j1cJUZ5ud26VdwV6i2ojoKDFhJAuM",
  "key4": "2Y4nN3yjs83PYRDZqJvBfNScDFeJrkBxyqd9SR6KuoWXG6hDrsmZX7LVUtvNrYiZywC5sCoocxsCyVgwTN9jmbJi",
  "key5": "VMnhwf3iXE4U8YQEw77v5eohKguQWZXJHzKRi1XNwuSEgKYxcnuXw1uRXWhAdEpFVfs44yvWVUwvAKTpkL6uL7J",
  "key6": "2DEnB3Xo1bKnH2odP5KWh33SrKSpnHKqKsRrJZszZbFXvYEsXdrPf96VoHtKtZb8ENF1How5J1VKEWCUkp8JepzG",
  "key7": "2DMQzZoUTWWAdrezcrobGeiFm3cavixaCs51PfyvsjYmzf5eyiBHG61MPETDCyhJJEqKVvxJ9j3bQsxefg5HAApq",
  "key8": "3kjzN82KeZL4GjXubArvkiscFnyx57LzX6RPT6jN1xyuXK8WuGwusAEC8pu1PhphyRW7eWofrHkXEiA8eBnsPpwC",
  "key9": "T3gsQExsYp4Mz2HNkhh4imEcxh15Dgs9Kxf627uxx97ZKrgxoJTPSGfHNSqcBrBU86XGRgYg4hrninCEabpbDu5",
  "key10": "2Cw9F2CuoTF3z7Ap2RKSWVd5CWJ7rc8WLjnmbyYKPHmLWmRDBUauNkcLfeyKN8cvbKxo3o2hVrJ4Gi43BBvNQa7N",
  "key11": "4pr2SNCn3tgeraxTr3892keuBq47JaKwa37iZ44uVKHC2cjmbJBT18hPxHkJWi5jCrjgqVqouCLXKyfRfaKzAuWV",
  "key12": "2QAKo2chWrKJiFj7MEAzaC1Z2dNBNEBBou3z3nf6HjFugj2ZvcRrAJFf8mKEB8H5KiVg6MmsgxvsTVugvyzC3Qkb",
  "key13": "46aiFMAJyQLhKYJD4gRcojo9vu1ZiCqMnSq8Kd3Tkqz4CVjqP4RxDzqdtyDesZ41sMKWtBPv2GH9AGNPmjqd7hkP",
  "key14": "5UCionefgn1wtKV7MG2uf4NVBWTebsxa7LSBiciiNY2EShbewc3TY488nrnRVGbiVmmqUeaTVbjRANnaWn1wPdK6",
  "key15": "5vEKfCZbq7HHK23WJbqXM9yNrbtW18HgLDraLaEcRQrSc8xHVTrTWb2Wheb4aXru948d1Sbh4RBLxQHaVzKMMxez",
  "key16": "5W1FPLqrDKBU3vozS92aoMx8VEVjuNmRMhwtiqjdNkuzkXC8vc9TH5G47UdPaZ5ii6E63UQKsMc7JK59kF52CRro",
  "key17": "5qMkKPuXraqqKRKRQ9Nn29XrtWavNiJHrnNZpgrkjsbep6ST3UrRJav31buKZBTeARDFuYk8sEoyHQVLQQj66JgJ",
  "key18": "7SVaMEJDMRvaNsafNfefHFnK9cMbwk54LRDnapd2oabDE3jKgzjuTG5qcpMn4aPzsv3dGK8HPB9KFkDkfjnfvQk",
  "key19": "23sUJo4ssARMprKujN4bWE3AMdLrG9Aqohe6MF3zQ72k65QifRnenPdqYHjReue2YUP5d2KiUbeXUoz3kjWoA6YM",
  "key20": "5rb341bKNGLcuhWSyNQ28vbm1y5CGrKcpBeGQudmo2GeeuLXgSJe7JcJegD2SXFEPs6Dd5bHAS4ub8jmaJQijESz",
  "key21": "U7uGc2eJ2Qhy9thSXLzCb3JPdB9SgGaTLNuNYVpukX42uTBHdbAr71Tb83BfwzHjCdgnp7t5JtK1UGrDV1bZhvZ",
  "key22": "4BD7DSrTEbNc1SVj1FACTrGfcJNR4vjf39bKw8Asj8RydbcKiZ61ta7zYye6KFFL9YdAduqTDK611Dn4Rp6kipeC",
  "key23": "5yjWwPsDcbRoNDS8mpHJko47UsfHXZZwFWnjgUjedZtT2dSB7ys9amVR3saQDer4cj9uYwtuNdMCYK3ThP35aCwm",
  "key24": "5LqaqfHUwsNjJga4EjjuXXYANGw99wjwqtVAaqVRuCHVf8LHQRnNrVYF4TraUtUYfCaKo9rrmUfSYprZ5qdE6D36",
  "key25": "5NcUZBbjqeamomxcVofkgcTrQFfaXhq1YoPHLxMqUBnMXZvMoi1r3EczvsuCsD8e1JgXnCDTK36aPD8MTJb4gB1K",
  "key26": "p9tCKCuaLSy63GEyRK7Xbcp2StXJnLYBqa9nKs7UYgt7FURxpCafqmYmgcdBaMCiPdqHKumrSXCPjFbMGPpbHTA",
  "key27": "J9NLGJAinx9RS15GCyRkmP9nYnBwQWmAedQWNCLaTk77YxTPaegHrcQXWXA13vn6excfaH19DarEbQNCzZZ3mFH",
  "key28": "5CEhUsE4tQe1NqYFwHGrrCiggHBH7mXyaSQ4aU1T41EqJivZLiAbi5HX1Xfudm6umtGGLg7mXK6AcBYoK3x3cAWu",
  "key29": "2gd2Sq8qAemGXg5cMEY7HQXBsPkXUKCMNskDee9qYFjcrKK3dX2UghroUAmYSqV4jk4EnkJjvxkZqf6kUBt9zqXx",
  "key30": "3WeZGFJD8YGfLWeP5qPd6NY24sncpsaSEV3WC1dfhp8Wod9RNoS5haHSh3CJz2Uk1mmciNnYULrUzdTH34zjpFmo",
  "key31": "28MzKAZbckVZPNGUgZxwcTixRvhUsG6uXfMLSdymiDMkDH5BQbjUQVfwGbAnwN9jJyHSxM1MvLt3M6r5ptLwB6i7",
  "key32": "679d3K3S38GTvjTEEvFmRQhRxgPoTdtsJKr3aed8MGN6DSr66AQJtYV39PdwHrwjKEqVk7MqWJ93Mx8rqVCPncgJ",
  "key33": "26thkRPMBE6GcJYL4VRkteb1v5MGnDgo9Go6RjbkusYw5M5VFS1DMrCxn86x6mU8e13HKnyFJn3CAr4yLH5hR34Q",
  "key34": "3dXPeyoqTwHfVqGYfaQswSJF47K1CYRkhBeFyX1v7HaqwqVv5XnPjbY3LN9g7wQBLBgkdLuJD5w7CDCXEGCHwxSW",
  "key35": "32bjubuCWDFK7DGsHVtM4H9SQQ1xtPGT7uYdkTQFWQX28igJS7wAmHS6Qzo7eP7UEjHovdPHu48pWE32dXWPTVm2",
  "key36": "4KTbWZDWCcjTb7ttFhgki7GCSeKRqj9YChaykBM5Gt88whCjew74fnWg8KU3uRRE24SVWeiS7Y8zezBEhD9F2fjS",
  "key37": "2Uy3TqYB9t44hFg33pycHCgDQgUdQ7NbZEQUX7cdjCms9bC94gos8XPjrJ8kj6uHn4w9AfyywRe8S8ScHhqLbeKj",
  "key38": "3zofqsfXbG6ag3vxJeMk826Dse9XADqhw56c8Jsf9tAnjba4YtnRitJ6Eza8xt55KQWKhCULrA7XnQCrAPqoG1Us",
  "key39": "28zNbHSJ8HLjha4wRhgR9PEUgoJF3TzM2Kh4ixJBoCnhQzr87zwtYLsyuo4dqQ1kv1SPQq9uu9XeVbF63qb1swUs",
  "key40": "3dTcQEZPvfEGShb6S32jKkA84a4o9jQzPPGrbM3S21L53T4nMs9zespW38kumjEAm74wKbQiCSHpz2N2UBxbNWcA",
  "key41": "2RCRtH6CPHoMbd7aMRULww8ozF9cNA3AVN6ntc15aVqrrbmiqQpa8nVBMAfgvajy38bJ89KN6fYUHYsk7Fzr3jJh"
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
