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
    "2zWLwJD3YdEmyLxGCkWFwJJLihA3fYqXU7SWaNhDCqZk84eeq6gvBFFTQ6x8JgHyxCxZ5oZixxSU2uPx2vyxChJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AmJUNvhRpwoZvVBEFux1HURijDXCmdaPzEs4u43CeDY16Mehjix4baPV2b38B71xyAX4hLX44qD1D3KGySJu9EP",
  "key1": "zwTxNeXs2kfdEJbENYGH1EkAKhmsDYq2KtieMnBkB5FgTxiEtKFF7i5f2ZLJuBqyykzw9UFpCFbcvGsjxNDNdtd",
  "key2": "5TPZEdAgLtEeDVC9LCttip5C2RsyAtburC2hyv6Xti5xU193NjedC9r8DmJyW9xK12hvANeAErNBvHVKbTQ75qFW",
  "key3": "3YFGfkA9f32PWgA3CFmt5sZ4Rs2GjM8kgVsn5JYc7ETNr6RuHyY2nV3Lfd8wCeW6dhqq9hMYMTHTniCAEKqz8mvg",
  "key4": "39iWHWQFNkWE5oP4nhFpyAKCbjFMPhc7CfH2aUsYm8yGkADXvK4bnQwHHhiQz7mfiFATkYg4EoST7QS5bwN62Rdn",
  "key5": "3hjfbSkCYQJR3KoLuvodS2cSQKEngWhNkLkBGnBZdxcRcLvyWvVUtWXGGLuQG9N7tyMgZJTdsn243nxMAWJSpiv4",
  "key6": "usxZyCeZAJgkWdB37cPb6xSJaW7wd6CWbZXvxKQu4TNSWmXqG7sdnAzSW8PR5hD9wXiehQkZBh1XSURLg55BTnA",
  "key7": "RrBDkQe5CUyePtCcnuZ5PDwo4WHktVQSixgvyJpQv66oC8nWKk8AUx9iPRGWvmUscbhVKxCC1Rypa4Fz2wU7Aga",
  "key8": "57VdF7Z4T2FPM6oEFApGBFsPfdBD6W23JyB1B31eSv8AbQUy27aKtDQb6n38QMdkNYqqMAiVqjFqsgbkArwdGjHR",
  "key9": "cChC3rs6xfHmMVWGZ5Fe9EUV8LAbLdkyJWqssSwXnxd8mnsCRTxpBu9TYhWwkfrPY1qsEVguxoDiqLTCvPkVaog",
  "key10": "4Aj1HHpVSLxH6FoApjpbBrMAadK2XFy49ncgapuZESh83eCn33VCuZj9o5YwxwrH5x2kiri3SciVjzuDhTVkqsn2",
  "key11": "4gzgfnWymnaBJMZVxGUk4Mi63pApGiukPf5t5P3ZiH6UyWxDgL5aHpbhUQiTpF23xSXRLhEAq9PqHC6D9jGXfnQN",
  "key12": "jRBcUikiJjUejFJdzuDSyz9Bh48XqBhzDBGwNoWQ5n4bMgdABk81MZmZcbFYLzyZXceCkKXwK8WgNhmTK8T7fyX",
  "key13": "4DRTUcULK4msvAX2UdvM91goZsSMY5kWdUuMMN7QLGiRh1pMgchW3FgbZgCHQcsotJJEEhrzQBqkq17DA6PXVH9w",
  "key14": "3fEur95nCknRG5vp9oa2oyGwkeQgpzgd7MLsU4aS5WDNNm8dRuFo8kd5ptAaMmcf96yR9vGBa2V6U6KQGWNPiJpt",
  "key15": "29Hd6ErNK8FdJbaAZcw1g7CpQQP8Wzee72ovNpAD8aoV1rvxDFhZXKMmTQcJGpGPuWSDmkfUuvDoKeS3EhKevdvD",
  "key16": "2akb2zrYyNLFuLeimX3VRxK14vpjHxR73oiM5Ceq4wJdgQHUnipAhq7osNTiMicvnZbbdTXgAHSqitVqfgzTM25U",
  "key17": "2LrR8N8UgguhD8sf6hG4jFitRRLanwcciXF3VRhZnHi9rBjHcTWU5fEuyE1kzZjUL1F29WgWRywEsbgBfV5Qd2Po",
  "key18": "63HkK4qXfk2twUfm9E1WkGnxYzeUkMgu7ucGf93WzbjSyY7tRBMCAtz3hPsKGaFy1xWiBUstiuBu4u8N35ssyWHB",
  "key19": "3sAfegSq4f5gaNJAnwR1bSS5iaqotpBJCqqkVYvjNsZcaX7wM8as7jcWZDCbvoUsSjG2jGET4gM7U88MYEqdrYEB",
  "key20": "3E73r8Y6pQSFbefgbS7NEVnrUpgbF7Gwa6FLM4hA9yr889owDjn1KkuCWvF2PP4vTevxJbMMoRcyfYPrrsL5bX4X",
  "key21": "1Qmy1m4FU5Dj62X8Bidpv4vvT6DDAxrG8bzw7eW6uzbdyFXwcTYZ9Lk41DWiBvpwteezfHWFKqk573v7ecygivu",
  "key22": "2wZ4PAEfcBfo5HuipvgjyWLUeWYhJLKzAi8L99pVJzwu9oXtkA1jndr17hzXjPxMX8cTL3yA5yxS4Q43f6pPzhVz",
  "key23": "3hfXJCgWdGqANGgK4Rmzi66jAQhw3m8dPDXAgJWUXsHsHRxiDPoPNHSVmCtawy3TwBg98MmwFH6Ynbbko2hYUBKS",
  "key24": "5VQu9voiYCXXiZ27C5x4gE9SQwzY9tfSE6CwcfQP82rbzMuf1x6tWEhj8SxRfzvKBCjiy3mAiTpVowDMa1zYiGRV",
  "key25": "2baokdqtnu59aCu1yqMeXqpn2SMHANYE9oJhZFBQQMUZmyR2zLHRoT7ybaCVMKtYkHTGkzP2HVGzKQ3YFbCJL57m",
  "key26": "3tRAdAXwggJKfueyTGf45u3QEdSPiwxbzqsaAd19LowSMftEekcV7adwryhxArwmBqkgvWxkUDSQsWrXoFG5nhu9",
  "key27": "5aSR7J3gYMahw4VFXhz9xnMNraLvUTVgRSmJmQtDAVb3cC4aT6ifEJf5tr6EUfcCAGBTPqzw5G5wXMkPs5KYK71k",
  "key28": "5DMGL39DWXmLg9J4n324sdmyNAc7yTD3uY1r18hoaFNWw8SWTkuqDRcZbdkP4vqvP1728viJNVVmyDoCLrJw611b",
  "key29": "4MfuwRVr7KhqCRMsEAekCLLja5f1QJtJc41WV1vpw62TYhnmCVRB8EfzH9XsuWLmsi2GjwMyUkHaRpcoZEQtCZVj",
  "key30": "EH5Az2EB9ZRM1Rsto9upzTZQxvE6sUytQjbApQ6GyyezAAkR89wHopu8TtQicNW4BTieR6rqmd13enNngCge8fv"
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
