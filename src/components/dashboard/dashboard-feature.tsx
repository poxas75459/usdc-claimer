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
    "5n5WmbzA5HLSEHnr8xesxGzcuA4uGZfJGaPtisMdD8rTCLZoFC4PVc2rzgp6KDDTrmAA2DZHgju1SzAKxxbEvYJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ML9un2VvLAzms7RMVwTAkV7fKrJdwUFdbWFqPZjMqSC3RotPuQRt7EeHAPECywBfCGt26Ckq1M9X1WszrSejefY",
  "key1": "3nMjMHQgCUDZvxLYYY5DRndsZKtLey1GxSoNK48ar67p76NgAfkMQZGyBbRMkeAmwtp86EGX6iFJHVAz2A6JLDnH",
  "key2": "1Z6tzzyr4nSWc1xpQhX8A4JKXa3qm4YompdFGwaedfgpbWEcF9rc8DFyVRgDxQG19McX6K3bs6UivUMVbRcotHF",
  "key3": "4EnkeboDZKEZ1GhKBPmm3JV5LX4z5MBHD3kMekbYXHcSvSt3AyCmZgM6g6gQa1ame9e9pFRwT8XnGRpTjnZNuUnC",
  "key4": "5ENMdJ8eZzVJnvS7cR8sA7TAsz3yG8NBUCQXEiYcBWyTZvwQRKPatJaNtLZh7xduo66VkX5ciR1CSSPuvxw4wDCj",
  "key5": "8PoHugqLUQPBu1duQLRM1mmQuj58EXHWsGk1XYGpwF5gmwc2nxYfCFc9PTLEAFMtEsnfm6v25hVHE6ag5EnA69n",
  "key6": "5ayKFSw8p6DRQvczG92Z3AmkGg4YfAHBNKASqNa12i3pWHmFxxAnxYx3GYddXTHARsvydaArQ56jrfGQPShT19jZ",
  "key7": "4eVtFx5gFa9F2NJFiYNFQspVvqeHjVXKgiPW1iFgGXASc3421mwMVk1tbjqDQR8yYjNTtmZfWsR8kRo28Y1Su8DB",
  "key8": "2kNPspSG1Xn7kXYaeDV2wTsNNHMKdi2HJEhBac4tJZEeVxu4LrJHswNHKC5SeXifimRZiHbQmkfC5tMPkupJJWFp",
  "key9": "5jXQoc3AoDbpQ1VUXyzPJMpJefsQt6UyJY11GkQ1eWzW5GZveEeUoESdwZpt73m5Cb5YUf5mEc1c2yG1uejNBMpB",
  "key10": "Nwf3XzvY4DC5AXmWTHLMwmJvV1wPUZxhJMNjQ39LqnCXHVFWqJwFo43fEnTSTbjWDByKa3dNFiKByiJzMHCZjKS",
  "key11": "cbNZvrWFpbVD87Z11Xkozo1zG53BwgCtvgoQuZ5KrHj5Uw9CsPMoRHGzCCmPGqp67ZeSVTYVFoZZY6NQ2R1LdKL",
  "key12": "4uvSEaqZgm6hAuf3fYNpuZpnnGZWtnBga33uF1cNbTJu8snNvoTR7YB882o1rL37QLog48B6Nkg159fMyCi4P8kY",
  "key13": "3bMHwKgRXSHwzNKiGqTARsgQ642ZTkbgj4QfSWEhNkuMmoHgfUYN7LW2qNdByvn9adZRXgJ5GesE1pEMjD9qDGCQ",
  "key14": "5vqTsuyLPGfy1D8xaiC2BBdixToLG7foh74fcXUtofCb5TWznZ3upVWBqKjmGmcygDkwLVWLX9XpZ2drMQYgfCBs",
  "key15": "519qZb7eCk4R9nZFX1Qt2NfdC2Eq1Vu25bWkJQba8ygVczUatk9NkEGHnKmGmrdptvMkMmtNWMVrVgnqx3aVnuNh",
  "key16": "4dHtAnzRkT8oemuBA2QCkAgrhE9itBmT6EbQ6s3JYmNjqFmuX8gfx5TUp7QY3EPSL1fUzTBZWRH4u7EYcJ5boCAy",
  "key17": "4qLPB5S3GG91xZ7QmsvcpsSmFT4oYXKqGgVF8XWkfHjY1Di54wuq3paiJ9L8bJQoLe4UC3mLzkoD6xcNQMgSqJcL",
  "key18": "2wDZ7Sy4igMekyUqqbFM64hyCwSz7A8aKovtBb6S9yUDT8nWGxjG5ebb8VL9sAJheaSXStbo4DwHs8N8LMjUAmYc",
  "key19": "2AmnHTjCbNLM1X7cToNAXjuHiDeB8oET9tnUmK6tr7HtPivQVCQr3mNQyhJLFtSq85DRyrE2KhgrBsVQYJedwMsy",
  "key20": "sViSpDAb4EP1Wbnmv7H9h47Wza4CzVuemfxVDGCjxiCzogWNyg4wNTguD3NV5DkMTLQHqvG1oe6rCBJQq6dx2E5",
  "key21": "XCfiHh4Hv28nCGCNuk6cCYJcETA8YaVrq3sZx1ppmigERiDTTDvbC2DNouDZG8eguXvjYmM3wdPEfZWHjFtPsLm",
  "key22": "4nkYQekdaFLhjbAPEr1CaBHN55XJPpDpsadUR3yhNqwsgbfCP8TfgsvFwsciVQ6wnL4QpSTuvpw4tpBGDQYeQkPi",
  "key23": "5z8RRjWpj8TyscmSEYJitx44rXMSRUBnuta6JzWpryro16xtSn2khouXve9Z2zUrjJJvD2x5HYpawU7Ex8rpSqds",
  "key24": "6DEhjMrYQ8b2BatGEJcWM9bCrqYko5pTb6cAbLNKZ12fcbrDzu5PFxjrvGWRo8bCNEP3xYfjkyT47vB18YFe6eK",
  "key25": "54NkTAQ4j5Gsb8pa6C79G4hbKDmYmrX5x94k5ZDcoZRHmJCS1L9NeUvCwVpq7qZ9A6ae8jgxSCUJafDvqfQ7K2Js",
  "key26": "5yN1rSzmwgWQ2RanQzo4Dz86owiX8NHBJbtrQi7b85uLfsK5Skd3rJNdEjfxrJSZEuzh7gZJSu8fi8Ct9pxR929t",
  "key27": "5qS5n9HsXWngaAtzvJmrycYbcs4zQVtLHNP6EUnQ2unqti1dyopFQhPvKg5FMuJyjcsnEKspeiRQojCyGQCsDDAL",
  "key28": "dq9TCUgmYaffif4QhccqVUksUHpUonMaassGRvZLDziD7HzDTfNfbN4xmfWebtB9g6zuBJHwL4yw45uaGKi7bTf",
  "key29": "3zJzXxBkwSkzKU4gsz8EmZreD8ZoFa2kJgMUcDfgbVbPDn2cnzJnZi7ugNB86Gs4qr2WW9FgNCnHPoHyimEHja9o",
  "key30": "5Qbo5bUgEgJj7Fc5GHEjrNhYYH7XhBwJ8CC399TkBAdVsiXYkFWCdV6Yoj7x7dr5VTYridweauEx7uoHobCBbj13",
  "key31": "2aRCvNhtLP2YifohycTftuF16cpND1oN24jsnpjkHFxGj3NffGec5CD1MZBW67BburbfQwSCT4jEaeLtH2TZdiNo",
  "key32": "4vdD8bYWJ16pG1JhPEKnxssduXwkzmZ8Yg69JmYRAj6PpL4dc2pCDextH4NL1JD6etwXJnV5DjgYSJAJduoua8zT",
  "key33": "5HVESBHngJdt3WQbefZ2CtSmBHR77WSSt4dFkMGHggiR9qRBNiWbUYieRi8Cv3kSGRQSMqEaNofKrFodLqYXtVYG"
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
