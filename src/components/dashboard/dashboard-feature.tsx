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
    "w6X48pzD1eJPiqnXwuzktpqRSFs5Y7ydYRmEjQL1gryXt1tqWVgcb8p66MPMp8xsSqdJhhkpXL29ytV8M3kKyEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mezeW2gajFzjQFpjNnZJCbm69YMJqAbUibptvGxTbF8WBKtVdaMFr9XyDU43MFiVBZxyvB2foaoKDeDTWzj5x8J",
  "key1": "3cuNvqbMC1L42zGziNGJvEY68CCEFWPzFQEqK1cVpXCYVmpKkUT5UvMgYqjckwGBjzkhBGoYy9bpdEPdMDqAMddq",
  "key2": "4izW4a5gkGqhkwfxb1hwrgnhaGR7Fzj5EnuYNCf6wDgpmPjApAMoiVdd6rFHxCihYNJEtFuZo6n9xbDXFjLiVVR3",
  "key3": "46dsffgoDqbYez6yfpYmjFehEEUDZKi1jz4QW2et94vVmSzDPwWuyLC9prdGDuHX3DRWb7H3XLAAv37AD7KJjGjU",
  "key4": "cvNWofB4VG6QgC3e87ze97VPQ68W4sPdP4YUqWiZxV7vYAKgZd3E8xK4cBLHRSzphJRZqX2KaCiKfS2N7TkAbyb",
  "key5": "U37okJVkLbNgS8yN72PyRsFhMcSVPhGP7e9hHGnq9CLjnmyWgW6twJeYfjAQeN6Dc4umeQ6TNNjtJNKEmDXKXwT",
  "key6": "3UqDi32s39WTLEAiXxH4AEuCKpsYXDkGmrW8KuAY392bX7FoV7p1o9RgCBnn68S9ZDCNSjQTrQHDJKoDd56a6uLd",
  "key7": "4hCMCMHQRTM2EzoVV6aCyRt3r2SpDbrYuowQJRyNTWaaZh5R7a4GGoWJvvBpN4DnAj6bU5L8eNNX3sznWpEcaepz",
  "key8": "39dGYQiMY9CwccbEYPPKMtUtCWVLCSRzCcHqV3Tf34ATBnQGVfhJ8cvcZk9NZ5zxQjzkDxZgFcNAvY9A9sB3q9mk",
  "key9": "5LHyi2KRUg7RdC6vABaWtQDQG8RMcybCpNPmnpPVPba9GKuuhK3V7fRjEHMYfVuHs2e9DtY4YZMiYrEgowis8d3w",
  "key10": "2kHk2iPWrzt1LG126gdBrVWgAFQ7V89zjUVegfrWae1pD8eqfufAaceXsPoH77196ZgDjYubLry3mrLzyXvqUrLh",
  "key11": "5NkDpxqymiouU6SQbZ68jP2zYxRKZ3sMrYNHbcHtyubHgiQANdWV94J5MZ25StdvJS6RpcvXrYgDurjcRpgWK3CZ",
  "key12": "4Sxe3awUkVH5TMTDf21BB1WgHaCm1hqc5zhHhnv2KaMiun8LDQEaz6ZVigHBrduqYfFRxWfoR3U8cqtUpC3nPRZB",
  "key13": "4EnMKyz7bEs4fGzZpJyAJTrNPTUZFvA4UW54JPjkeigAtgd9hmBLe8Ao4ssvgQJDgxPGXZ8HQbn594XYM2acyTwX",
  "key14": "4htdSfn6mPDWy3GkBmWQJbvnjpSqSanYbzDP38925W4318BP38S9caMyVzP6zTDqKdxQxyFmj2cAC8enwoDrbqob",
  "key15": "62GNe52b9sXSvZMCN4Cjow7VWPdD47UGrucp7BC5C8iknowrMh8WUAtcQGiyUKTLF1rcSPZ9DGF86p3qBGBYbFPT",
  "key16": "2iXXM7Rydz9yHTEQyMwxRPdpgnsaDGbzdYVrQr7GwtMnzQBCosLXQ1gSQvhtyPwDc1iWmpxsqsSn6Z5G3DfUnSJj",
  "key17": "3ppFbPrDKvSzcGfcf2ogTSw8c9cTTXFWBMNDdbAuyu6PWN8hcHrtD8v9W6i9xh5CxhCG8j5SWJPu3xEt3aPzJ2eH",
  "key18": "3fBWqQUT6CtCqNPftQk5wftzj9yW4BobbVRZFzdzC5t91nKxhXT774TUSADe5YjWQaU3AP1LSr3LReR1aKkhyVKo",
  "key19": "4Jva8F5Tp5av5Us9NVySwWCSJPhZoSnsapNsGZne4dJDp7MD1M9NgMQDcb6SQ3oBK2JX3y4NFmgH545T6zcZxtEm",
  "key20": "3y2pXvNetBikFJRhRHb897ar3fhRMk7u4zJ4uhQGhvqi4tHHSzhafegt9YHhvnTgojADBt4yPqGtJvasZUFbmZkq",
  "key21": "29JnEPRKkxmhSJDGgKAJEcKAYw2GiTALyAtAKk2wcpVwfcqQWxqQdPHuxq8reaFS4LtZfi2YiHnoCSo7hLq85PWd",
  "key22": "eGBVNDXdUA8MM6NzB8mLLV2GnZpmTvFEp45K4xVifTKLYLyQ6cLhBPGgc6YgJhJZJkZQ3tSXKxy76pMN77AunMf",
  "key23": "3cSSomZRwSLbsFhfLiccV9L9HbV2V7YtUnwJBNHF11r83HWf9L6jMfrosoeqEgzCWhnvkussm723L9dduTpkYbop",
  "key24": "4BdYRsgWkmHToRMC7JBnNihxYEAynAeMvRSArn3nN64hn9cgrN1YX1HgEY2VgJ4QunhM57kgB1rGjGQhzX53VDxu"
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
