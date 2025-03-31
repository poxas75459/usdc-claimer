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
    "58uzjeWhG8bd4gBmstZiuSBjK9okETuKz6x4Hc2u973BCw4A6s8s5oQptoDiDAZf6W5EbSiGZtzbkbnCiPyGrjK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrgbQp9pecxk2QhaQ3JS6GoqveV4i1LHLJfrLbySBaypZeQSpoLtCY8VyXNw4JsLrkLB221AhDhXZdFPBRzBEJV",
  "key1": "5qHKfGTY4eKTPYvBe4rvki2X9D575yid2EZYporGYfWH8MXkjbaJtQw7QjbYnhAVWWE7c8GZpPR5RmKBwBZxSpD2",
  "key2": "2eNTYFMnxjRa3ghWTEmYuxAmu582Y83BAG2abhtLhCtFgGw4kbkEUBdRWfGmA13Y7qG4d78SA6jMi3Jhos1myjUx",
  "key3": "76i4viYZBAo7Ehe6B3SxvZkaYye3QGaqLhrSFqYKqX3U3NstjFsL9qnYcAtuoMGSYesMb2pCRXYJfUBQXS1japf",
  "key4": "4X1F6z7EeBzVWfBbbjLZ5XpyWY5zsFWHhPSQr55FPZxpFNzXKwpmm3hrMx7EQ33k2bjQGSPK2PUT7T3tdxXqr7MA",
  "key5": "b7NrhxfWcAjJWEUU6dVkC9zFDZFZJhCwdVRRUuFoTjGa7sA2rrWtY1sxcm9MKcgTTv2v5i6gaYN43vuqFZv8N9J",
  "key6": "2KmHctsghw5fyNK4PkkNc2DRs6AxjWQ7JHLgiKgkjgSaqBhpYjWdjmtKjZ1gT1cH7hrZxL5qyLdJ1FavSYP5Wyhz",
  "key7": "TXEt6aft5pMDRrr5hTpYZaZGfhzRMMA7aaD48vZmo44FdUQHoXZvCoz3DeEJ3w1UNEFVfFDmxYzQVibMZ3ug38c",
  "key8": "NAGHmCj6n76L47RXiPp4AVkxyAGbC4L67aXKFYxLW6yNPHyFfCZXgwcQ1ZRP1MiNi1uxBB2GyjDktWM93UPaGYX",
  "key9": "Wgh4UPLLpwjiHNaVPwgzHW6Z7S3JNT4KjvV91TASQtqN2MLaXsxuMmuF2aQQpG4AwJR6mfs1AivCBmf9Y36iWn7",
  "key10": "2QjYhmQYr7mujvsCzGQ6xRSF32sHecJNBf3G1zkWR4wbGCduU69GtSwGjvNupARt1LT8int4YkAWc5cHBkTwAKVy",
  "key11": "zSF4h1BK8eQbgTXMByYrTM94TumfbteiJeZkKs7FPy1vUhKhL1c3DjiXoGRWmuisqcNmdRmefcRDU1qhVFZNiXH",
  "key12": "2NfZCqkkQjwuFm1WGQftA3sN38qF2EsFcZB9r8evmKJPkMKPxD5hnfiQ9mrpcYQxfYvT9m8ouUv8FTzpTiARXks4",
  "key13": "3V3D872bBNJXKxkJCWySz36amwM32LCExV4HvtmTCEbjaMga3A7smrCsXG5m5XGkBzLN6wGJM6SBkzJcUpnfx8gD",
  "key14": "3ua6GtmiwGeCkiFng8sh2sEmWR1kaCUqNn2oFqEQFsEEr6qkaHoRta9jkHgBRK1bY6TryVF2aAHwaRR8SGa6ywUc",
  "key15": "2apj4FEWXscPhWuERcVgzyVqqJUVjQYibHtCLJ6hMTRRdfQ4fvzkj5rX5RitvQe8z2Mde35ieTuE3TdjYXrz1JKG",
  "key16": "2442ojDyiovXxrsRHCVmwmeKtvPM2Gh5HxQEeBRYKe18nw4MsXxQ5kp6MQiQR8JbaQQsu94NPSCx3HLUtQCsqrYf",
  "key17": "52iu3tJUbxUoxJkNjW9CrN9N1gueWwaqVGSeZ6jTvfbJRJ7CAmojJkm8BnSvBiVWX9z3UkyFoC5EqNHjcRaaS6Sh",
  "key18": "5tsU3wR69yWn2uRHdt1sfuAQY8rGSYF1gjHM8a6tLzKHAnujQ82cg1x2MEqD3hrmgkGKuWXU4BwMjyqCAUaSpDF7",
  "key19": "3DwwBANwvM95ix4WNjzZhLF949oUog8jbi6VGxahNENnWvdi8U9TBB4qeY4T6H2D3j8EWV1eRtN1yKN14Hhs2jVJ",
  "key20": "5yNW4urzoCdWXjkGJFYQEjkksUQnayrUfEFP4pcNJHvXoHzKYRHc3spshsnvkZRDGx4w3aKNM2mRThgdPvyeGrXS",
  "key21": "3FwRnp4GGPM6y5yqQiLaBUKHbfSGJiuaR6AXqSapvZXLKqu1wXELhekBwGhToZD7fNmvCvNZjmXyW67hWPwETKsP",
  "key22": "66HmRW6DLUZ1hDeHqUGocLSsWkiebvv8JDqpFjoJ9BnzPzCcTDajvFf9AWBH25wmKgHYhuSMv6bsxh9V9PMrhQHx",
  "key23": "3LFrms9iUeXbouAiZjieSmxS5opKbScZyiLQBxJHdCjo2WCSoJGER4SUcT8aMtUTnPBjporLa2cG8udA4QyPuj6E",
  "key24": "3uqArpWZZe7N7wqATFfJ7YZ8jDmjRS865NfdhsZt2HYKidzYNc3hpTqFXXgaNADWqLGdg68b9B1wCLU4aJkhakTE",
  "key25": "2nPNEVc4hrhKphGCRg4sN3unwTVmHoDrKdNymGahcvZmYaWivBcyD8APN1VCG2RDbqnmNRCj4V9n5H7UPwZXAMRT",
  "key26": "2rMkJnevqVQrwuevE9t3tjNZZFvxTbc9jdAPJo1ir6afTbjhrj1uecnRMzYG99t7Gvc28XgMLj7CvWgDzEgCYPad",
  "key27": "2gwVvo2fJmC4sGkgET8BTCyuW9NYpsG8fSgbJ4TebvTmTZNHh64MH2dfakLrnee9YBcgWuV2TufnmvDt6v1CTBdE",
  "key28": "2LFJMHBD2a3X1bf8kmHRFnrmsRdm5HqjYX2YV4XhkvYKC9ZKQ69DxNdESnwVnbHcXP2NtFubVj33pH7EPcK4yfJj",
  "key29": "opuuWtVAU7aXix1nFPnD31KFpcWdsL5UikqqDcBFPMda9e7RZUtaym3vxpy7C4ppuzFMrqm314sthU8RTeT2hVq",
  "key30": "2BbsuEQ8GDU4LYXHZJLMAtyA6vJEfb7kaLmqFDeNsnLX1hqVEGqyaCCKzxVtAJXcUsktvox2avQnD6Ywncmob7BU",
  "key31": "5fybT8vsbqeditvQMbhdQyXaXXN1cG39HPSFND6KUKUJSBy561Y5evfYGEiSBT4KNXt1Nrh2eZb3TPYSjCFPPnCE",
  "key32": "5ke6KSGu6byLeM4oHosSm2YRVxz3XqgxGuaaM7MkpKf4TGocqiYBxh6xSfHATAMFYPS443xmnL2P3WowS4CeLq8Y",
  "key33": "42L5kRSyMoYJwRpDxnTV8DoWXzPeq37g9UJYekm7vPLt5Epp5mUFs9BuW4h1oYadTcAQ2Up39Utsw3F4Wa84TR1",
  "key34": "e75xxaxGi6o6M4REkoL5i7vmDodmgDZpeYm9p7aCkytw9K5qnoAH2oDU9wwzogJj8dgU3Y957yEWwG5UeSu6LJF"
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
