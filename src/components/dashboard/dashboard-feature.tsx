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
    "3dmUN6CvfuYLjcHoSGUYQUKZynntBcHwkEaCrZenNErfEiboR7ssUvoE3msYQRyvTBEfSsVWtRGVqkhJYxbFZj5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhzH24pPpVTV6JKPb92LwRXuJeJYc95zgTwWKksg1gMRFDtoGu1eEuq99WQAauGvJHx85aPHDBLkoEDt95PzxFm",
  "key1": "3gEb49u9G8nnECbHfBnfdLTxKspRTicCGocWQ4esq4tjSQNgVMgjfKZ69DYPmV8LJceJd6ddPQmbPEa3sGAefrth",
  "key2": "ABAZkVisNEF7S4qWKfQbb5rpDMiYWKsVMeRjmWkp6whWCkxsy53fGfBNbWH4JdrhVmbfKmaE4xBoiXFHVrxRxz5",
  "key3": "2gBnvMZJXSWvqskfyFoNdDF41fkqHdbnxfBGT7Sz1fcTfH4fTfoBEsuutin9pJMeVfd2DAHeNuxtkDtLpTHN1Abf",
  "key4": "65cNeTuhMovMwfDqnVP4J5DGctWWgEbG1sLwQ9yCY8AdkwcZZuQEkfva4rwUSiPRPGQK8z9G9MmashWZ5JPUz6BE",
  "key5": "46LASoqA7qUReN8uzzfaoMbf22NQvmwUGWYshsnUkqYLXkDuNjp1yce7bEbpDafjwrFz71e6X8hJBpgPHKD4hdU6",
  "key6": "4gcmLNPy5YgrDcXptjXQ4XHGixh2GjZXwPSauXWsR9GUFEKoWx21DqpLMDFkReGXNoEhHX6vCkCdtzHKSufKZt5t",
  "key7": "3WMAr7TXhRtsKxF8hkaKt5PvhUbeFbQ1gQAiWt55cWkVKDG2cvDhPVAG582LbWPeJ15fGGDTGWHhHP3mjQMSdjA2",
  "key8": "53qrKC1AbfhC7ZkjzH5yBJzJ6WXqejpF1kqC5dVwnR1QpZYCZxNR3Zsy2H3saHMCdbd7e1ukRunDXAdFHxs3TnQH",
  "key9": "PLmKUCGa6z7XGArHLSrraeanbcL1Bu1NmFH48PHoHWQc7G78zVmFNvxNZjsH9F8mfTkHdHbfQ8Yc45weon2GSDG",
  "key10": "3u26NQQRtjRR7NUicsYBDG8NPXpxuC59dbwatQjZcogPRmt4KP9MRTmz5fsDGWNMzdUDMqjWwAzZWVBT3aXoLgVJ",
  "key11": "4tD861WPeVoskx7bNbXkvf7YWYvFztHer42FmsTBUZtUxk41MeaF1cwSL3iLjLZa7CoixKJWUYdxFu9oLAUUhzNN",
  "key12": "Xby2vveuGYdcbhLetuphvwDHZh9k7hu3qD4aypbf7i59PRyKapcrZ1zB5Rh5pkFs754jkaScQcYzUBpC8vjjHz2",
  "key13": "FJw6wGJfein6sL2cVBQaeJvXEwaCaBAXMUAEMayb52MZE5bCCJabz1gFBaNswsmHcPgRWhu1D39D4oDjx2sT3cq",
  "key14": "5AXBCS7UF2NhFaUZGZk2NBoTVFLLqAQoV4HN5RHvzHWZHR2E5eRKkCgvJD1xewKH2p84W3BZymfDa3HXrZ8LNVMw",
  "key15": "5LrF9fq2HwmWuZ97LJJsSb1cq43byqswtuBT5AdQRx7PGjnyxwMfSrUwGaxZLq1dbrWAQTDthQkTR4gzJaouVL1d",
  "key16": "5VhCvKFHsQWMER1NPXfa8VrsFEZ9Qkd7NdGGJ96BnYZ4Ps5pURzfNrs23n1opWiwjkJ3hG8iM9r9xh4fKKpdJfbF",
  "key17": "xLoa2w9VWg42LysycRLvnNsYcLTPr7zkv7W62v2CLmJrjrB3quruQRR7T3RwgkNGPnD3dCMvF8Vvk1jLXQqJM6P",
  "key18": "5UvvhUa3csohHgYCBGh215TcE5sNdHgw6BesmEa1aMGHn4ATyaZ1mJDT1NWgNhsTb9Gus55FTD7yHQFNeBKxJxYW",
  "key19": "5nfALJSeqh6rpqRMGNqiBdgq7Hbzv9YjWwmMQMJcQzXNJQLp1b6VsGFojJetDo5Qv19BFEvf5domeuPZLKQQEHsW",
  "key20": "4ujoTsTQ18kprYZfXtVcNQqqgMgKN8ZyEm6c6NLssu1Bfiagoeju8Un9zqgHrxHN1hZwR69Huwb5QX3Z4PfM9KsU",
  "key21": "4UfR6k77hAhsDmMSWtfwDKmffZsFQ1PqJ8vEx3crZorbZSkkwiU6dfSW2sca7tiuTk2J6oRHW4bJxqJYEAzwiLdM",
  "key22": "jZbKRDnqYCyiRA35XLcXMzfJ9hW3pSVKRX5vHjcrYQ72nzGKmaUtU9WUw3X3Ueng3kRqqxo2zwbc5C1LRYnuYVm",
  "key23": "2eBP6M7cnJ33wosokfyX6TDGwHWiMXasKFatb65KayYR5pkHCJLnbyFGFuorVA38QK5QXhyyNVAnMYYmyVq6NPyk",
  "key24": "32ivagdn2YxjrXNRsntWaeyyr8qW43f6iYaDpfgwxjL45ErQeJJH7thJhvMHKM7fs62R7DMJrNw7SbMb6WsqPFhA",
  "key25": "3bSA5H3Zd8YtBEMZZb6v4yxFnn7LPbNZaxmb7qL1WvASwuwTtB1BS7zrpXR5SJH2wtBWkcCWi9YKax16R79syRCF",
  "key26": "38RiwFmLhq2ofwhRe8dJAY1ZZksAQoDEZDjTgd7tD5kuN8sJsajPSK3gnx2uPRFvFhNiVRRxiMfDH46mpCgnvZwv",
  "key27": "3g3iu9oYSAxH4hFrJFkKuzkUG8LLLq9gt5c1cxpGkZUoBnS7DswViU1k6WwBij9LLjcXpi3TFocDQkczuMKG8bst",
  "key28": "2NyEFt1HPReNSDsNDAThqQAovmFaacd1sNYK5yBYsbg8hJcVDNg7kXLaMjPwNYaNyddv44H8WXFN3cUQ9vZ4ayLL",
  "key29": "2UgznNfeDoygfwqtxKqC818qcPNYGwLzrzRrZ6AdSjzboZeQYqu5JzyRDeX3n6oN1sG7D3rSS1EVKsvwoCET5dgB",
  "key30": "2VWXAAzgDoqeFnCb3rJGASSE4D7rk4s8h1sEJMUceTWVCUjvDq25Wz5TuWREq34oC14MmuVE3DE1mkoRaEXd2EDd",
  "key31": "f52LGSHHPzpzNsDVjt3nWhDKcDhrpoCzD8v27uvpg1uDmU6rEHECJVjUsgHo8F6kNE9gvYTy2KkvhA3bAfZaBRu",
  "key32": "3ecto41bg9mcRFCFvzgeva5AR73DqCFUFb7SDTsxUk9dB1EUixV1oY8m1T65TwuLznGxq46mNzbZjZz2YLrYkzgA",
  "key33": "2TiSLLuqATG3HUfgh4MAot8FWNo3grKuzub4qsHqELhBY4JPvZFNQYg5MDxRjHRNfidXjcxvJWbcmK6Lvac5vLNf",
  "key34": "3nNygPBnW7TGWkL1zUf3fxfkUREW2r3ddyb4Kwuvw5S3Nj41dod4516qccBvxZoggxpbbPmLAX7e1ScxeuLaV73R",
  "key35": "4bpjZJFqLbkQpTgZEnsmTns1GYpE4ZFDvv4d7W3rrpFmFfbqigwB4o5uj3yZgWryUwpLywi8YTqakYoAkMFatk9K",
  "key36": "4q4FoCLicuHNBBN1tiPcdwgEdLbH9LmQAZVJo5ALdjGHPXb2486bhkwcJJEugYz9HPNRgPcCjkUsG95WWNN4ttMQ",
  "key37": "5maWtSPz3QpUdC6BraGeR68MvM9NsYHtcXEMERrU4ZiyJkSESwbadpH5sXCssiarQYisZrX4z6o2SjLuTkMJgY8w",
  "key38": "3kRFMvt8wmgyBdyWW5C2b1mY5fV4eAy2b24HrxyG9ErCPGx8ouPGPEsjqqPttt8JetfjJhpZd1k4GaRBRwe7THhA",
  "key39": "2cs4yi8WeyvqDieqQFcRusVEE562zhp95f32PdBPFArLjJyTQ74WzLUKgj3aqdbTy8F9Wx2kAd7CZMsNf9kLdGAo",
  "key40": "47usEemQBu1jcs9hKbHHbE99nfyH6cc5ZHsnF21S5YE99HLsdp76NQ6yKAuMqrjCTWCAtN4EiJKrDdQyXghRP3oj",
  "key41": "5Gm8AtzFABQXi7MyvEFUL2Y425rT3gbDJXKSMzDM4UowXorwFGLPZJzdKa1KZTLo8jNRzAvrWVdVZFLQM5qRABGX",
  "key42": "4hH252u7FTmwazx4AnpS4k1CgRGJ7t8TPdt86sHzum1fDEWBYVxkonc2rogXeZoxU5CRzoEBQWCpYx6bNmzvgLEA",
  "key43": "5rBoeL9zW3zVRXJXRPaTAYz41N66U5XchJ51BPoPRKPPveaeaJPKJcvxhQLT3HcpgkqF83AdcjaZHXRBd8GgP8Yg"
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
