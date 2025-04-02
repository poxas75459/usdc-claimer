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
    "DqZ9gZYicpqboP6W6bTszmxja3Lbm12USMdzejt4CG5HEiN71fjmXmjjMMe1X3aMkoaNB5tJAYjy22a1j3rYaTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dHpNeC7qyctfSRiCGtiWDt3KwXbptPRWk9ZZq5L4S6CMY7AEJLqAvouVVbRGbdnrmkbCMHDNr9fr38xySMcNc78",
  "key1": "xe2L318Kp4pN8y1XqDDNYSGvn5c6dyoAsaaFj8zUwXxf36aQtnFFzMPzaf1AQg2QcP3nSZAzzfjfcvbZAS8Kq8o",
  "key2": "2WU71FwRAqPfMN1boboJ3FCnbuSbwurdinoKBHR8s34QaXVNCkcrBNBLRXowm289f3GHEAZD6wxjXTgUvg27SG5W",
  "key3": "2De2xuBGTK22VUni4yvjWWvkddooeanXTMqvhrnUgni4vyXtBfJr6kXQwauQuTjExg23pvWN1gWVWShqx9vDMDVi",
  "key4": "wGDtxXBv6NnZksnRFp2aJd6aMJHUULv1XH2HSBQASuGKp5hDK7Fx4gP9S9Y9U9kfxFrxvFCKDTDHJ7Lvh6rJ4eU",
  "key5": "2sXb59kx6PuXvTb44Ga6eCDyCXbvwn7Sa1Lg1HLwo5fpTtaUwsVNrteqxZdZtbfEKxwQyTQtfmzdvDWoVwE6NpbM",
  "key6": "TSDPrR4MeigmdSD3eKk2DxRvnYt7QkYV2s3jMSBgha18EkezKoDhPvuPUMs4J2Vojo6HLGZQLVQRcDMLJmMVASn",
  "key7": "cw4qAD1rJe5xUbTehPkHSwV2b4jmHPbbz3M187v3yuDyciTHziz8QxqR4RXbFzsGM4s8HFJm7y7csUpwHAbwayh",
  "key8": "39Q5tmG7FEWg4CFvtWjccpjQaTPzy3uBAexUk3W9Fgue7iciVRchp4s3yemgwBrh5zTggoXxLgLmT2d93th2ZvMV",
  "key9": "2WvY3CYCFPtGKdxbpoMeSuFZ2MR68PaLiSeFqj95uBKC1wRCji1YFnwot3v8x5NmMrHHXhU4tz2VBAyZwgE7DnV8",
  "key10": "2gLjux6Skx44dVrrAwGjoNhGVSpxpnYUKivvhovF3BhCK6hUphJtxv4pXR9mj1yKSnpvexkqmhVSF8vgZ594h83g",
  "key11": "5xyk6s5oqKuY96PDAXiy8CAhT4RVrd45L8vw9mDusbvsxaWYZmQ9FfSKBntoDFWfXfYeSjigw3NKZQX7F4QrRrEn",
  "key12": "3hBv3ouP2DPbo6rtmJSXpd7wFREJsXHxAmDDvTSC5t9NGPR8YsVtdPgf6dexshUPUfGUaNZ1f4wvAPs82cPUGfpu",
  "key13": "b8eEh5MhigfyCMgLRvrfCCphVCGXoER8RdjDS8EX46N1N3j7mZWzjDoQuaD9dSk4QXaCYCivpcWoJwAkcNyJSue",
  "key14": "3itTuTHvLegQKqPWT3ajRp1tqEsZrS6hEixkGMWkrckDpAaGWoLvn4E9kez7VqLhMMN661XGpT3vzqj4xDywFnPc",
  "key15": "3nvxXBt1ykyCaQGnY2tD2MkFbHgZUtPP5LdpQc7zqHDF1V7S5RyS6C22bQRHwTEpwowX5dChyPU6xGDYiJ3HbqUm",
  "key16": "4zEDvz3gDYchww5NUfe1jBxVQ65Yz8yxyTcRdtiAkNkSvVnFbiEEEHeYh5xdcdS9bX8yiQJrmNYMqsYqmZyaviSv",
  "key17": "5aVRJ4NkHqiQ25YbRFjuL2STra1KU6WzhBv82nynidq5ircuYuN1pjaPtZYVwhbgujMjxLjTzqQU9K888oyas7gD",
  "key18": "4ZnLLg84muB3iM8pQrhLGbdM4BZWXjYTc87fcAxMqep4Vdo1ssowGLSN3zYQAfFxfLGb6XTSrVGmzEoQvYW39jc6",
  "key19": "38javexnsvzJuky92CagvZgbRfWCHkwDtKUkspLSWA8mSUqCRiuJuyuvhCJ6YVDUNjFJyt8bzJF3PJbGx7YcCWik",
  "key20": "28jFvEgW8pRNicDuXPHjwvBiV8BqBgsEfVciATPLmyUJrxpgz6aW45wNK82Csakue8LBDQ1kU9fgaxBg4aTcR9es",
  "key21": "4ummb6Qzw8XARKte8ncxGDfLTdGZ7m3pTHCu3sr6wSQ4n7ZT44t82hnLwKQVqdczoBALgqbP8c6dmFckZtgCGKks",
  "key22": "m12nGuLthp4UDuJnGDqFcQ4xnitXtpSvUXpLCbUh5dSi9BtsZvsMUE4k47htsPKvoU82SxrbHFd8kxhi5Hy7Zig",
  "key23": "4pDnNWEfpZuwrUMDY92BavPb7rguKzpiANuFxWRYnyqDtf3zJ5vm5WZuQzPNYVXUrsrgeM7ndJNxhGHrVgnqqiRr",
  "key24": "4bQJYQPjB7iV3Ni2Vq4kt87tfFAtHiRH5q7L3MRf3hV7rLpYbuQ49iT37RseYfx6MgURiu4g6N3EH9LoSKTobi3e",
  "key25": "2tuWg8VLFT6ftkuGC3CcEFCCCj8tmGXonWP6AZyMFKDH5LrrB3QqjeY46deapRKHDKhn7aMCU8xxkhmmq3jpgAbG",
  "key26": "5riTzatabd7whg3Ncu4PF97UJrrFHh2hEtU25hNw5CXE34yqmSso7ygsoT4ij5dWVW4Z3SKW47Apfg55swtpeEdT",
  "key27": "KFADRGvzUSyUxKtydJYArZA1Edo8pNLKMrhDnTQonbPuJzhidZyoMLS1NDHPT3EjcFvATj6J6b9gYSzQzo8CJK9",
  "key28": "4brKpQpFbCYvuX4PStPjmYzmLVoXoVoy3ngESLKBwenAZAoqxcCnGihRCVx5nSZux4ppwC2pcVmrDm3cUpFgJB33"
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
