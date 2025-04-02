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
    "2g5tM5nru24vNs4knwJjm8mfdcaQt58u7GkCvgy99NKnvmXCb8DTbCPsCRp2XQCRUp9aPrbyREWHNqiUwovivNpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyNV6FhunCtzirF2LRjz86RfeRspvzkvMSu9gB3MDuo3LwtQu7U4UsAREWfK7GpCEj9GPdtjFNAq421AxY5xwoL",
  "key1": "65wEPTJHhbQmUdtAiQyP137mp3z7B4AhoJsrjccSRngLJVtY8FEPPvMNVkA7w14r3tqXAH7K94AxzqLWXqcd4J9k",
  "key2": "2JwiMicYYBVXC2av6KJtHbCrjUhL3W6hunXMoXuXSD1ALZUb1crzQfRCpVuS3HRKHoQwhnTmm7BmgHz1cLXUndEZ",
  "key3": "2QX5Ehfob9tWne8Ea6rvKscHpEzkpiN9BKx2xBnsG6zfa3WhVfY5PsgMLJ1vyuXQ4mqZ1aXe8r1xU2JYjGe6uoCR",
  "key4": "121CoP79MJzfXxiwdXbZ1evpfTXgE3e3gmbpzPzvXgSMzBidnEz3nTjLgXZxAaJDzPauK9xtgcVwk79DrQc4BvXK",
  "key5": "4RgsT8ZNob8ygabzWvDfUghj9pVuAWnxKWSGKXG7U1owtMdvx55KFgQk4fzT6QuJDtHzcaKkBy5PcW3dAvciiumU",
  "key6": "2fDnDsHc1BQs7HSp4EK8PFc7fQgrGv46RQrJQCtNa92MKqzuj87pXGcNgE78vfThawdM3uF9ZTn34KThgGeuASj8",
  "key7": "5WBFwPjKpUTM963tZgg7VJCYpUFc8gNi5nnhXVAVG1YQBVLHa6BHj3yha19E21h1jvfYnnJdU3TpuwDVxhGgdfns",
  "key8": "zPVypNDKjFpB1KR8eTbAhKad2TMQCERDMySXAPNVWYeF18oygKu8TBh9PiicwuKzCGvyoYdpeV2BedpHngpgtt7",
  "key9": "3QXdnb2b88FTtvJ2dcxFZiTSF396MJ3Z9dvgRc8iryLKqcow4Mc6GY44HJ8gQGXLsjE4xYzwZ7MzeD7Jct4wWBPz",
  "key10": "54L4prLzTa2VqR4QNWB5SUgeMEQM95MF6GLfW2pp4BhxmbZBaSgdwCDTx4rvy8rj9rPu3y1mHJUBDtHk3XGq8M9T",
  "key11": "5PyCHXUR1gPCprGctS4P3L7kktxDsqo1vfKYrgqGJfCjxcrcLZ21WgnoAojaK2miYaJShdkUcbaHjNdeRyHE7Ur3",
  "key12": "4zauATK5L38v8jzMP127A1XkCyq7tgtgGu8umf8mtHgb2WGNgnuZ8k7wZjzMWkkGCgzXwAzb9T1HaNF7obGpbc7f",
  "key13": "3Tg81KUYkME3RACLGUPW3edVcFc3npwTndJ514CKkpjKaKAzso5iwKJ1N72jEcmewmKpr2ooEt45ud1y1QLqY4rP",
  "key14": "3iqmbJw8NtfqCHw4JdHqtFG7B4Lf8F21RwnrTd9jDDhNy5DmGV46LW5meJMyL95eAX97sXiXSDLb7JN9pWNmqB72",
  "key15": "5BDr2ooYbuMq52u2iZ9MKDaAAQbFEmQEAfQtvRD8k6brjat6i5gM4d5YWdtfph1V9StMbQk2GWpPoAzSSviYvqeH",
  "key16": "HYWK65GhTAYXuu8czeTQGARgD2PayYHpXXQjyBqqRtvHxyi3uLnrsAwiTQJ8NPR7FmbMTA6cmYUnoRwwiuNGerr",
  "key17": "AmL5FryHZ9XZXmvkZSnPWheAsJBJH4m22bSByteckbgXmRcoR3Azy8QjN5FD13BKxvi9ENGLpxeggH6qvuL7fCB",
  "key18": "2B9teoiF4yhoH7bK9Eb1L7vCFMbUaHSGVvdjwCtLvYvfmEJSkqvjE3C9LoMQdZYTHkyeCL1ansEftG6hBQqR9ADA",
  "key19": "27R8d95K2REaE3mdVdPyjxsKo9faF1CvG4HW6iMGBaET9erhWQGcJtCc9GsQuqRhcLAUvECqAyRwPeGEcgvDATY1",
  "key20": "2JruHxcVBpa913H6JovJsqJvuY51CKognZWY8kanvmFdBPGjbVeB8VjE9eukM7KmqXuKw9guZhH7gfV6YELimFHW",
  "key21": "23v5hqz898YG1rycDEAj6JQzFWWJAx9fxTdovskLeVwBn3uYBphi9enDjkWsznrU4Rk5iA9knkULwgetCnH35U3e",
  "key22": "5aHfEETEV2dn2CQZWWcJr1ueddxhJ2bPFnHMzjbGqKrnUsRGxFUCCUJjFxsdSXPp3uLLsbeJtBybVRfgb66tTkw8",
  "key23": "2vs4XYGqQGpntGawdF11kYG59U3GL4dHSbK8LYAJTZ4QV3TCcwVE4P4PYKxFpUobfc1MXdQKsHQgYZTmxmpCv7dq",
  "key24": "FCBSd5uMNMuBjDL1FkpbSjAGtjLWZbp1Hbt8ZhfQeNavK3TW4VJCeSUuEeJZG2bfm4x2wjXbi9gtGaoq6zaESd3",
  "key25": "2pd8qv939ujEAAu5ZeoYuGkzXXrNgY2cHDR96cd8RGM7woUmFvyj4csoS6mMLNkb4rcpSN7nq5qc2sWSZW4BpfcK",
  "key26": "vNygSfpT3ySDdbBi9z1Nb3UNGss8Ak9NdkZyrwdDQEdQ927TKjoox8qkiVwzHbsFegA73QAx8tXRthFGUeUYAfQ",
  "key27": "66jPACUmEA4tYGhcqoMCuQ2vnYHdrSV3eDJesowph4A3kwRnh2nBRerQ9vBbKowrjj3gcbdtiAY9nyKp65SzVhw6",
  "key28": "3JiQZG6dbcVXVyXgTrqauCvVm7mjU2KAFqo8KsJMVo9E9QMiFNGE1FbiwkYWGsouyy9VbRgTKv8jjhfWVcYdiNPG",
  "key29": "3b13LJFdhY7X6LhWJAfdiMUt8vDwvFDzRZ2nvh2n3fPrpDDj1375h9kppw18uerGEe5k6JNGyLhQCitarbHBrF5w",
  "key30": "3FbKA2yEhoEvyTWwgqdBQRVam2Hk9w9Vh3xgssUhDELXSvMkCxkiLE6hx1ZrqLnCLPj7pHyko9B64hWnqMZLSJdd",
  "key31": "65iHMGUsCir91JK2TKw1GBdYTSE4nzfDcC74nVHaDa22Zm61sgySghHxnMscwhFED7taQRXWZH2EG8heQ74qLFYw"
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
