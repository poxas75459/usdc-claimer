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
    "52abLbNBB1nPviKV7MZZWTGEEvugKAyPeW32J1rhJ6PhdoE4h24oJahVrfipiWcRZ5cLxjbjgnbozpVzmmRySM6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qo8Ri2UFAEj6sPfAXDu4bMFbXV3Z4qdxPQtLFUhP6kJ2tsGuKPL9UMcadPrXpBPxvtNxtpRAZP82ncJdB34oVtH",
  "key1": "4WSR6iq4Pe2X2Dn2dKhRG9aBf4aRvSYZwVR5QwUDpZzx79bwG3yko9HPzL74oAQnxnvZnNfX8g87oddsF3fkfNTa",
  "key2": "3rnWvBzVkGVXz8Q41oJhqAtDyAueXW98ovaq4k2xYsVhig4keQ7YM2jdJJn5j9CdGAHF5AB6NRQ3zmroWQv3AeVt",
  "key3": "4CWh6NABxdx22exk4LwuKh35Zf4EJrJU6wvuqHEi7LNEkxCSAMWaUpDVeqr2fi7Ygydbk7TRZAiVrL3586NM3zwq",
  "key4": "29GrPenYDzq2AzdHqSYezfFyFtzrh7imMvzJZyDgHGu52hfb3Sh7kaGFQ8U44nQesCLPQA7TdY2FiSL3C24zXBD1",
  "key5": "4JTrBUgo6U67B9AVDQkZSKuTZNxfUSPaUqGUafvnkgbGMuYtomLjBBEVGZP9dA4pUxd9Gu6wVmWNgMdtpsV5Dqzj",
  "key6": "25DE31ieLewc7ZYTCzuKi4eTRNGjMdkyVUAf5466wQGksSsD9FsLWgFxB4KgcL5Zh4EVPCn6yqaKxY6QugeveoDu",
  "key7": "3C275Pan3eLsNn2nM2u4bBwW2GPiwjCqi3Tgv6v23eEPaPdjWFf7XrZoFCyWtqKY9rBihynNazE5b2i4HYBHFBxe",
  "key8": "43PWvsXotZnV3j6Kr4vE9dwMx8PD4EaDCLnvx7eQSpTjpDxv7VKYWfCLBkdN2S1448BeELM9usagYWNcqFUKbjEn",
  "key9": "5HZ4VCXWxSeuTmGsHZgc6MmKPvgqbL5VEwzhTbmUFc8ZU91SffSFifiiT832Fj2jBZnnnvKVQQ2Fswb2BmSN9irg",
  "key10": "3ayYszY5SkQTbQWbTMZCJK7XAKwTjG8iMuZQN4NPrmBg2g9twfQmKVbjPkqpVFCiFALeMkQNw5pQCSfo1tgxmACH",
  "key11": "bfqHNRp6rqPgaxjAGm9t3uWHDpk1protjdqAnW75xx9cGKTf7j7tZNkNCzePEKm4rqzSpdAhNM8EzsjJZVRkkRE",
  "key12": "b6xBkYfvnBhypHFb9jSHaJXSgDf36sfjjyszNJngBBpZTqkjoh2RiGfArRVkMQMMzv4atHMBjiZb28yWuUTL4UX",
  "key13": "3MBAswECNaPxFdWU82U7K3svW2oprCwHWoriAmPXi89DRwAtdnn8UzDd8ZC7XG7k6cMKh3nt449rWiCJdGjpnxa3",
  "key14": "4nn4dHWb6ytLdrJeLU7UtK2yMXdGbc9nqX1tx3rxmtBvPNV2T6pGYEpczd9PtbnxpZF9w8rXaZXYJTk1r2ZQjgFe",
  "key15": "2BRp8VSDRcVYUk7BZA7vNxUF8MN8YtwzgMJVc8kjxnHwaNXU1K3XHRHXHFd1eQzt99scne7QbHhiTyNgmm21qqen",
  "key16": "2Gv9LvQKpp4wRrdi8g6S718pHzmhW6R9txW9jm5F6bjoFDPLXchMyq5bDVcm3p8i94k1tFFsrAq8wJCmNMqu9s8a",
  "key17": "2XaoAxXr9fYu8kdYbxxtX8JxM7KPJuxprg7T2cy2dTbJPdw92kNp82VEQMQMaJPZaaGkX3VTuZJAHtcjD61H75cp",
  "key18": "JbrtEcEKLETjjiYWM9Rd62RSg36psZrTWUUdUHPKsRrrQQw6qYuSYq71BYaGWFHePXZYJz3ni2dSqPBW8J14z7w",
  "key19": "4k8SdKWrTtWDD4ACYpr6wgfveRMP35PTyKPsBqwzB45LTW14TAvCinhNZbHiccZBx79UG9691eCEA9HF7sNhJCRo",
  "key20": "R6MRpTjZHcP7PSGqXS2YiQdaQdMT4rpu7t9ntxoxwEW2dqkNegFYpyxqv6EZCRaF5fPJgHNfKm97vPrN4KzVwLQ",
  "key21": "H4XWGa33Eeo3LM6pJWS9bxzvcFo8V1e5eMSewQsbGEiszhNWBm7risosiMu161DjFQBmrMsWPbhUiA6tzu8qv9N",
  "key22": "3Cay2cg3wL9a5whgmGZmFdEmmUtEzGqHMyeZTdGF73NJWBKzG1KGWSuC85EnjzyWQj8f2rNgHrzNFRgjfY1dYDKu",
  "key23": "5XXJ7aakNZAgUaAB7rLytHBzEu2moAsBymuo5AfhNxwziWE6ZiypHYvjTAGhL1CveUmja4r9uwSYpC57PNDTSxmj",
  "key24": "4W6KjZ1vdF64CbJSt5kPUJmDUhwkbQiFZmWTBn33yKFZ9Q1oGo33t2KomKNcyKcuPDjWXdu9f3P4Cj2egbPpTz1y",
  "key25": "3n9cTdzQHwTWEgWxmR9WEqcT72pRVwC2x9sXhaTgZ9tEKX5YfjWYUgJD83BUe6Dipw3T7g3wqq6PVAZMFQYx8UKD",
  "key26": "4gJHucgvJS6X3ZcRaWjXsFZ9u4jbjnN3erBzFcZbbRihDKqTtuMFBBVKMcLbJWiCLtstJgn4cQdBqQhmQQSJhbaF",
  "key27": "45mRprQach6R65YAtiUujmPuzD4CdScrmggVhAR7sGbZ5hAcqN7GtvXTy22MKTedSj7KTtR1QGFFktASjzCHWfDY",
  "key28": "5xdwHu59UbTHPhA6rW1rcVhXdnp5SdQf1z8SLatyvVarCq1szNa9mjsMmcX7dS32Hsb8xMHnWAHKmKcXp485cD4R",
  "key29": "2fcTNEdgiHXPPMZGRWn9ZEyT2xzhXEnYC8RgxbJLYXvgYMvq9rgEjookhBFj5kRL53f3cJFyzveeqHrshhnxsATw",
  "key30": "3afwVvwkPwDco7mU6Q21WbyjhA9hDTkaRcJfk56P3DqXbf6pubAQCf9cwxPCuoK9kdQGPWR1ZPGpnCLpzfgcZAk5",
  "key31": "5ps47qjHHGd75zFfmLm6DGLXhedWD7eF5VWpwqyHcKC4e2Y5PfrykPy5oVByhKzz4LGHpUS1uP4U98eDbFHXZzs2",
  "key32": "vhN4ENqYnWbVGTfG4iZfp7V5Z4PTeE3F6R6r8ATAik4rsUqkgXzZLVVpZ15KFFHVoUMpQRQVgA3X2Me6tghaGvr",
  "key33": "5X5EpLeQVyu7ZU1yxyDwuXpymSnQDnHdcsQ5jfgfF5vCifMPtPCsQfs5JSUEtXU8Vr692k8uZiSv5CfXNuEwjyek",
  "key34": "25HHjxN2zFXVW2K4o43YMp955meztnKL1PJd5gS1ZBDvRyiyKqayCaPQCc2ZpMxZbNtkV6UQRZ5PhFMGTeTfnkTH"
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
