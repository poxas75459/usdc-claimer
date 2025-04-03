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
    "24u3mXpwMnqC4geUjwn85J9VWt8HaihH8f8PToBTgVXi2Gt9eugTdvVHZttjrCzHepFgz6doRhPPg7xMr13Q6Hn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uHCXGr6MSVdXHa5iSJKG4uiJaKRZd2T8m6XrZxAJqXjQWbbKRRd7Aamxo5b6RYjPmkgczXHtrrJhnjTyFPAoAf",
  "key1": "5yyUxSgCCZAKKvxECzUutkhTZRQ8zcJJ4mekbGCEZ5CigEkSZLAE7SLNvDSvdf72PJraAnpp8sdbCR57bwTpbJ9W",
  "key2": "3aooZCD7CzA6L5knh3R5cyPoni4FpMHtJRq9saXQeYASctVhFK81vgY11yRDk4RsZkazv5BVc8cbjCcuQj9wFZyq",
  "key3": "2e72NBiizr5LW1NkJAG1LgRXrTCQX7vMNy98rnwPQid2Sg6bAVLbJ9LER2zL5jb6y1YmD3r79YwPkP6WFx8H3RFU",
  "key4": "3UszSduXWLLTfog3eTJqVaUJbwTtsjPe4wt6ZcTSr2LDnQ1FdPEke5Vu69UDyNsjrHoXSvcBvwJW7eJmTc7ukjWW",
  "key5": "3MFKa8SmwiEwF8uT7xF82BDMYAC9B6r9pFHaoouCXaXLNtgE7jrUdYix5rW5ntqXmL5S1bJozTAFY13ztVJMRF9s",
  "key6": "61WeJZDoVwa5Bodt4tGTxsyGzkmMmVibVJrn3dZzTszQj8CSwHKx9Q88eyBsfKJKYMMDiXswSeKwM9TpYreFPad9",
  "key7": "kwTLjwaexuySq26jZjbPna4iMuqwsBoen47dR8vFEjB34S3C57K3GhXvxLbNFWoZVh8c8Qe6RFFPvrcpaCMoDjT",
  "key8": "4xEdyRtYv4M2ETuADR7EzcbXjdN6xrqXRLQYWEeCbMJwWwtAKkb1hxVCC9doEndjmLVqLeXDUraNm1GunqX7k4Zg",
  "key9": "3kh6YNfZkjSEmE9QXSW7sjLd8Z4EMxDp2SZmxpV7iWUgNcH6EvZzv8rLyKTrKrURjXAUgEkWC9epjn8qhwei5dGz",
  "key10": "4NrtEuHVxnRLy1M9qnb7mxxGX8MLCU4GT7DP9gMXQRhGgNWPqPWK8fDMfydYHkf3BxmCBLVhs8G1Su7Bb1qQcyvz",
  "key11": "5jmMatwopMdMJfucPRXmRA2ZTKjXqggxw29tBFFvu5DB1YPGzUvX4pEnYEZYria5gDbpAt5kdkD2vpGxqYmwWnQ3",
  "key12": "2vtEeEhbmMsknXLv9ooV7A9QYvkzEvB6GjoeAW3JTEWzWif7XjVVx2epCfbjaKDkhpM2migdnWnRHFEmNhmukHVQ",
  "key13": "2mgRBumwVUV8sUyYGfCUMZouQK4pMcf495zpmBhwAxpawRmkpwc5k4L6FktgufKhPo8gmd2FYYeKMHic6mbo7j8P",
  "key14": "5WVtE1jekD9SqpJGmmqiEacTzW7T3ZCf5VW4eGA5EsLjYESHU8QQggDdC9EJe8gbVqA6V8j4DGNmnWXHeW9ft5JC",
  "key15": "5xQxmdUzM4gxXhXAPqkF6dhWTQePceTJ3DfYS4RMQFNZbyigqSuPLiLNTr6BfWmW6xUqGAkUoXnB9tiAKucJjcwC",
  "key16": "g6W4W4SYfRxkxMvGyuZzfcETHxJ78Rncm23JBWzmNsMHJ2zhkyYhad4oMLsmA9F7qNWV3BYB18MQswDST8E5gQ8",
  "key17": "3WdpYD2cpFETWf1s6Rrqj8rrbAQCmHNdMakS4CEgnmCMXVM9mwFn4NxGSK1zQHkSHTZpmRZZJh3ppLHBnYBfgDSz",
  "key18": "4Ut69zykyhjZp2pkCVYQDXHjwnvFJJdXbuWUfTzqMsm5Pyw8rdh59WyW81PYGxKHDF7QjtE3DgE5Y9nAyS613d79",
  "key19": "3H6ojjE1T3L7ENn9ZpWG7YrGSoAkVmQSseVn22288k6LpthbXW8FaPd6QyrBiKRnMCmK8fRER1hTKSGQJL2keaFe",
  "key20": "3mXy4zEfy6P3VxzAwvfz7A2fUMGbZPJfyWewoEu5rUKBQ4tDUL8hvdvxdhiLDhzipbYbdB5rrN46dSgjHpHzEMET",
  "key21": "21Bqy7oS4rtANC5qB5CukmAhiayqFVhJstD28Th3CxkbbEMkjWaWFjXPGknBMwWk1HYTgR1MZag9BWUQzhqvxcFm",
  "key22": "41CD91aTgbR5vsQ59b2Nwx8J39BeLXV7A9ob5daw3zUivZhUfzkCZvzshp9YTLSTdnFWFb1tY51teZ3kDDaXA2wU",
  "key23": "2BVVXRLcnFCvfumjrhZd7EiTFahSoPgTp6vQ42fva1sN5SrBKBrWyfFkuRzQH4JvDHdHAxLTZZVRjtxun9ZqYyAu",
  "key24": "3qwVoezZ6MumrG9nERAjAr5xsvwzfVLDLThAM3CcyaqCdAcHb3Mw6tQmmfCr2ax4rVbCX98NVSKRCvSY6Q4iQaDm",
  "key25": "3oBuL33f6yERYiGLix5AYKqsGrrLTD2g2amVKiTdG564ezG4oXdaVRHCG9n2hPR1zYsek7nQzrqRfwSQPscEMU3t",
  "key26": "gWjFsM2eJeGSiAVSUFDsvs7ooiTancKmVmE1o4TzPxDqoMB2F3hvw6FiCYvqCRX8Ao3zKmmbpbM4QiwdcKAkz2e",
  "key27": "2tdnpymvPkAmEwZKABAYZ9r4ACNeksbrAQddvHBheeTkeKArdnxYnM49SgiEizfyaJohEHAqtaVjNs2xqfuJhPj8",
  "key28": "527qTsbsejaHvopns9yPJGccD5oqUN8J3MET9URoAkCSCbTRPg8oqeKdbNwsPcxDnznLf1vozHwF6deg8CKW4UxY",
  "key29": "5MJgrtq4d17KRa3mhkBwSWrgMjnYhbSysYf7CZaU5Rti5Rnz7xkj3QoY7VHR5L6pHAFujd781pAmRvAcFvgBSeDb",
  "key30": "5YbDkU6Y1ThfUSgPHrAfKmQLzgYeWUaqVZaYF8V3kXAnciwe4FdsereCmDV8rNRyNG7opEAdXjEfBHMV7zgyppRU",
  "key31": "4wqAExEbKqAHvjAiPavgT1Rmdw8GzhV5FeaBVgEG5NfvMvrz4TwNa3UwSfRTtCiWckhD8KyLGvbnkPJYpLeGhQfF",
  "key32": "4RMhoZAr1xPZ74FozJGVg5qtuGKnB3Ao42hmP4tnfwc9qPi1fiTRLzznoouFZyJTwVPx4RYN6KmT9s6em3EuCSMA",
  "key33": "cX1tYgPZDv7i4BRT9dEm2fi3ZPj2nWpRya3EyAonxxutyyrvndKCoAX5U3X6TBD1zvdvmoC9CpCwzWUo7hX3LbT",
  "key34": "2yRQYfxqHKMVhVBMshozko7SWeqkTKNyS5SfUenZ9P3LWC34d5Jvm71c7zieUwWaAyb1czqoGCdCQt8RxnLcSKff",
  "key35": "4f7qaKh3CmfLkZRLM6zZiyQX1aQ6tQexKtZTypMnK8K6CXVqjdQ3rddvs3dK3TUGxbkSEdo3HhTLqCSLF5fEqmt5",
  "key36": "3Bm5YnSG3HvByNU4nnU7SDY6ojiWPxyDbTTFCSRnjftBBxfXeWeoBUhAmecZUsLoMLrTUnaVvzKSHZNdSMsxYuj8",
  "key37": "pW35FYWTx4dUbWvVLLX6rPGuYZCJWcV6ftQxGn6MxxacGHSYXPmCtTLtErs79Jshoeaa9nPxXHzdnXFUhFzMzbm",
  "key38": "4DCiTNu1XSz8NtyqJtKBETBiVyeHQDfWfjsomUfQfUF4RpENG71CBbEKpprGcub854KWxkKGPZPgZ9FwyzxPq2qk",
  "key39": "62SBXfbgYYDzugQxGkkfisiAc4Y63GCq48m3iNYaiMmQneCWnoFUaKPiznvve6g8ZMF5buVyZMrPw5Guq9QxyNcD",
  "key40": "2Rh2Ktd6NMGMef7vSUc2J2ZPE2dvZMMqoqMC5tfn3YJrvYcNU5YYMffw9tfDSvSrdDgj1nc4M3x1gdr5tr8UAqoH"
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
