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
    "2y8CntdrpgpqVsWDZApxcgBxXrpbAs62gjNwtdYTowiqiHDKhK5fsW68SKG8h6dUYt5oFfEmcUSxdcXzRrPayC1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CUrsqnuQNpFz9u8W9gySUw9WtChHAneVaX1xGjkTuv7XM5NBaFYBxUN1hQDpqAe4hrd54gGSRCFK4fedDB352c6",
  "key1": "2SagUJrMmi8N2kiMqVPGhR4LBoVKKU8yMD4kokkXHYs21h2MT2vXtBhdRFoAVeoHiQLz9GkHWuodZUucrbhHRQCV",
  "key2": "4aVLfi64h3wWCmpNJZo97fJ1JfeugHDsrkHgxvNT7pnP1nd7a2CEFiKog8uXEgvGwEcB4q3rXhzAvWtawS6auUUy",
  "key3": "pJkNYSrGVHQ53L9x9Ge4cgUwrQJoPRqZ7GUuL2QDGq8MWXNjRK7zqrxpCcboajkZUZLWjo2hC24FHHrH8N4FqqV",
  "key4": "3xtmSu2oRj2Nhwyq6SFqtGgRJKtni8A7hv2AjwhYHvK4iN35v4VJVxYQgYXGVdgF4zPViQgunQdBS1yCVGSDRja4",
  "key5": "5mowFBcnbJWuhedGnDcQDiCAtwZ5kFhkkYpNUAnrKAa9E1WMoobzZivKE984AoxzVtXXnSSXv8auVsXdkpusfaR3",
  "key6": "2Xtjpxxko1UBLbVfWhgSzbTvjWaqWMMVyXdZVHNdUJ35esaSFEpCn2FWtJTjFn7N1NnQ83mRSz9Jv7ttedmdbDaT",
  "key7": "w1dA7D7tEKstT3tHAx1Ve6kvR1fgQAFbaH78oiVCpRZVgHhrS6txtp3icqh89e6AzFb56GSYfua3DCwrQrrHpqN",
  "key8": "4cgGfdyE4opqDLbkDtCYooXdQsAsLb1t2NQVq7gLPtV1TJuJ7vqa3DRYg6ugWcMQEJrZvE9V1YS2boP25yKYnGhV",
  "key9": "44C8oZDcLW4fNY5vLhMoMMfFjdhRP5kQNxSz6uU5J1cNKvpwpfdSjp5a4VDuG9yR3MfcWGhXvXNuLZLHBLgSDDpa",
  "key10": "4PTrLU55ndhTwzNWdTWS71h8fPqcuL7vjSP9pxC4gb9mkWSN8bt4SPpXsswuaWmwWBeUhEV9f3UGbdda1dX7HsJQ",
  "key11": "3dtyWMp7hVz1QCtLyTp9s64weHKJBqtRgCvkYEUsm3q1zG5sixcT2k7BtwpdVmS8RTAXkKk4SRMCYxYtC2dk8g67",
  "key12": "3XRMqdWMYqecjERoRnp5N646fLwVuueHtJCQbMFfeskMmQQsrwgyox6XCStVVvRBfNiPvCz6XTwf9XUtohdfx5L7",
  "key13": "2iW7kUkzRveAMDyg6kipqARaTsrt8tC2XaZgpXkbJy6SHR1ApiB1oqV1gtjmKXksKvEnsJ714F6xEorccXhpRCPc",
  "key14": "dKyaaAGFv4aM2VC7E3jDgNxYBtfc98Exr5gFeugmiCQZd42tn7mGAn7WUJ5C47ri6vj8YVL4w5AUJ2v4KV5WsN4",
  "key15": "4NEM1L2wAYrg5ZVFCHHQXNW9xvxWg8iBu3DNL35CVmyVAPH51LHeW5wSPsXonKESHBnWYJQdrkMfYCgNxp8mKDga",
  "key16": "4nMtEx2EpYcKj7bEhF5uV5EUJbb3qUTbgffKH6TS9PWbWWmtmb7MwiDaNzd4EEV7n5mqjjdgKoj2qSckymP8Tk65",
  "key17": "54DhZur78UbsxkoPHcTN2f1xJf9m7XaKnHaxuCWhjnSiRBMj1r54QLaqimGCXFYm8g1KFGUEcVBcDCB68XArFgpu",
  "key18": "4XbCQ4V6vqVHWEMJF3kYPqpiYhbyYtej7m6gTQ4HpehzYm6prCNXJLY2KeRXz4qKbGZn5MHPM9gCiVsSa535JuHx",
  "key19": "4B3sQCog8mHZ1LAPA88t3KUKKYe9YJ1r8b9d4VhVK1Xkdy1WCpXjU6J441Jpsnd5wUVYpBnN4jV3mEGDcnCaP2Do",
  "key20": "P9NZXnNWP7dD96LhiXHAwcja85E6MQWcxWcUqXaiJH8MdPvKh4UfBhMwTQsLVmJvhR2sF7WCY6USCaiBk2XFvDg",
  "key21": "5GakFHHw5GDzUGzPjRgeuxwD4xadu7CawMrdzkX8suqiGXUsoY3S5cFphXjS2TBAdwV52F3uKvi9hEPUQmcEztdi",
  "key22": "2Ds3VZffFEVsxPWXcaaugVYuMcxEXSEXpdRTz3z7eEHsEAWW21hjM5zrmDH5q3peam7mUV8u8hEJL7fnhtwvCaTS",
  "key23": "34cn6Lskq7MxkFoR6rdJ3EfNRB1z5XHh3Txct23ZWC5pFtKJZJQEz1xsCAtW32aWQeqryicJNuXXcKwh2KwLxjUw",
  "key24": "2sEef1gDfPkqktufK3P2Kv39vpvcPb1Y2EZFZAFWQAud46PYUkSWHGFqD7kQyTUk1oFe1C9YPWH7vFHMUUNzydnQ",
  "key25": "5oo7hsfiLGZtFGuCnoQEVdZj53aGG1wSWYhziAQyiGcSrzVvHhWTyf49EWWftpkYSgbnHF8V1JN3iGxHXvdQPDqN",
  "key26": "3T5rbDPWGNKsxRovudiHvhGHnaCxBX6MsBQwCm658pKa7XsxXeazbUmraqYZvihj6Rcwop3FV6bW32k1vmQtmeSc",
  "key27": "Rwy98iCcLpGA9fart4KBZyZToUNACtT3NJaEN15113Hf9bNGfgAgNDK43yM1NFCsrA4FgfhZUVruaqMSqgwvWqn",
  "key28": "UBrk1S15t7wNuedPZmeWNv9Ap1U3p8WdwvQm3WEkRCFdAiiVDUEG22A7NPt6DiGDyN6eynWQEwV8nXzffXKW564",
  "key29": "28SJRm918pyHLW1KVuuKaMHEqXzdRYM5CtxjqN3mXVXMyPSYztEqd89JUm2x7ovu3fjGnyqB1atdYQEmJg25ZsHG",
  "key30": "4ySeNAVhCsaQGhEdjkyBQ4dcz8bSUegKbdE4EVN2FweghJYQjoPY8PnPnLebEaYyyNjzDhB79BDy89mMtXwf1EfG"
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
