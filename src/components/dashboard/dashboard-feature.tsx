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
    "5XoEVoBBcuBdEBsVU2NinQakGpTczi7o5cwpk4VaMbJesHKVUpi44NC7D2LBoaRJ6Rck8QZRs61bSBQHvFc1pnhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uv8SLpEWNqC9oRtcvT6tpRZrMk4jXH3KsseqojLbDJ7WzemqZ3BCd5KVhGh13fjYoLWfovKi3rme5c63zDkrGvF",
  "key1": "2qkPbtxDYLBFYJ94AqyvNrsVVsXfYunejRaCnXRr7wxh7VnXgagg48LhQWudUyFR8jyo1rn6fKZRD5LJG6Ra9Rp2",
  "key2": "4A2pPgoDFtNwemWU8n4MGFxzCwDahjkPVahAZYK5b7zHMkEFRiFAXhVec2NSxDMjgMasZk5RjrcU3yYW34G52PUC",
  "key3": "4A1dPpDEnSPpVgdG116jYnMYsDKpsZyRaTE6wL6g2fQB4yRzsait9aViTk6zsWr6s1RgLpRSqJX9cFNaQxCGACc5",
  "key4": "3UXsAHJHoUd8ta3kgt3ZNVd8orK5KBCqgj5Vj6LRrKK52TPa9nPWrB1nxGKMtqAYxhWQu2RARJvVwmVHWNL338AD",
  "key5": "2RYA6UbLp9TBGMhSqM7DymbmZKKG9YEbedasfGbFSUXDDJK3piLNY1vqVZrFEBN5jQkKrJJAg69XeYTL8egYwUhm",
  "key6": "RVgRMA7mmqf6VQyM8fgrNiTam3qsseQPS1dyigQtY1RFe6g39L5x1EWWxKTfMaXuV7gbEs2efkDauDuxP2Ak4ra",
  "key7": "3opeLs4e1gUYPe8szzEDAiqaRxoYGvD23VWujRL2FVbHFKC8A2Ukj25U27LaFz3rLHwBWPuqNqhYKkrwD9fLAEAZ",
  "key8": "xv57aLhRUSZJP8oa2cGeCjDiVG12CxjtQcqP2Q6hvNUTQbimcqPwbJEhMo2F5ZZNV5ikFCPwLSieY3Ant8TXtL9",
  "key9": "5dzrC7v2xMKGeH9RH4okbxrfMZXQE5iJUFbRSnu7ScTsCJ489YZs3dXBkPYREKnaUx2gkCCFMMvPZkucWvXAzLpk",
  "key10": "3kducKFboXXdDiHxwjXkLWZ9g8nLkhaFRGXUBwLdEgnEwgsFTZJoMwWooh5iYcVEFFidwbMMN5BK1onQwWy8gkCC",
  "key11": "3hdW53iRo5oT8irWfXXLiyWPRjQpY7FrcD74Lv51NfU8ZmTFjrpnPoaYu32utvLS2ipzthnLAzXy2YTtFPNTYQTh",
  "key12": "dAWa2Rhnx2faGYDuc8ChLjhrgJpeoSu24gTxyxRjzG54ncBefXh5zoxQyyhhp8i74psLtc6zeQLtaP7CkVwDaHG",
  "key13": "4eA2NJ1Uas8a7JtSyisY1dCgekik1i6fS52nfby8aCE8o1XWzbgQU6m115ys167G18GPPZZ43DZfGwcbjXKzPViM",
  "key14": "fGZibRB9GLU2yuCNBXWZTuiwUq3Qr8sgQabpBmu9XyEy4h9t3wCcouQy3EGERPepS6MXmYCtWHhQAGBRA3qa9ZD",
  "key15": "5DV8q2f8DCEcFQ7EJ8F4Hqw5fasgEx8MtnAccQ4MmTnzxQozVoCbRdyjLgyeokFqZBQS14XafKvJ9NFVC83WmySm",
  "key16": "3i3MboLEu6SjT725Y5ALGxmT4uZ7MkAZq7fNnFwB8B1HFu5ypp2Uyb42BWN9qbFC2ZbbYVHmBF7tH8wvmntdYSQP",
  "key17": "5CoDzjo9mhGseyvWoufiP4Ajki5TBsqfT13YfwY4wKVTqsXgomGaqbDphTCpztPJLqC5ARxBcrQBzK7jNApyAoG3",
  "key18": "ZFYEuXFuPrVrty55ATzVPv7QvnZo65UjF3DVqfwLFMZKTMFffhsx88auuMw3QUvraGEN1f275wgJHk4Frm57Aem",
  "key19": "2zBjbmekjpu8aZJNThhy3uz6kffX8bBbfXkLQ7mXvV1KuRmaGC8pHuUTZMuwbdCEqUuPeXcQUxQuWWR61sMHQwfd",
  "key20": "EGKW6bfa5FLLD6v7QtjkPLMoGBkSrkdrBhVmXZaa51uhoE4Gf6cXqXR8daT98xoFu7AmX1qrgpb5KYnHEPQgCiL",
  "key21": "a7JU47DxDAS4kD21WJzf25mfgM4E4187tjN7yrgUU3X5oXqanisjmhXsoXMtDe6DMTRddHozCCc3iAvhHmvuMr8",
  "key22": "4GhhbfefS6DnLFr7dkfq5ShgMv3R6CDSxc6nzmuQ2SVHN1aGDc5GNAjmHW1wk4KXCvcSmVvcodvGK1Y13Lttqpe",
  "key23": "sghGD4mhtQzbkCbyPrzkmBqvpSFZQbFN11Py7b7U68muUNoahnu7MxQxtvxNLHntG1dq2hdWVHR2mUoLkc8q2yH",
  "key24": "4BPDzExzukaZu1VCRg9hsMES5yjmr3A4TV88CYPKgjNyHuQ8qrkNAkDVv5hqofzn7UagXY3dGozzj7VeYoifeW4G",
  "key25": "qT4wpEhVSee2XuK1wVVxSQaqdVgCmUVezTNXyhuYMNaUJ3pMoBFUuVQvsY7xhMACvrj8r7t9DRpK51PsiqRnS2p",
  "key26": "2Bso8gbwYcrs1NjR23cxvPphnbczuDYrpaUFXCJzwJ2Cj14aTrpF8z8eGRkCg15LR2wrR8JJJZgJotx3KUni9v5K",
  "key27": "4ofjNYjhmuWNyyR97NV4mozj2DrBcxnNaajsv2WZzMtr2f9uSGUMtWgWuk8DCQQBEYKg7aVCVPKdL4ghg6gkHaD1",
  "key28": "46iTZUyhQaXrhUY7ToKcMr5AmopnQiq9EjVno7QhfPJHZ1m9Y4QvroXEPbXSWQvKgz5wPD1RHD8YZ8e8D5t4jJw9",
  "key29": "2B6pSa1ZUFkwS6yjNkVJgkhS8Kp2JRvuEDNazXEBnuPrq65pZsGU7qnuKKaf94UrQLujtwpDgB3BcB2azGT97teS",
  "key30": "3pLKUboiuJuPE7tR23rUpLGWLmotFAF8hELPz1vCBXjtZZWuKFPgpsh2taNczTWbxmwx9wM5mRZhDh84G4nVNXyk",
  "key31": "3f67ownAowyTt6YQ3ivEQySH46ZTC9FDoCZhEWTdFkH5g4EiKG2orkoFR1Dx2ttmDtVHRUZfobig9KViaY65MP4q",
  "key32": "BYeSLAYg56fTpejTsd7zxaWCfs8X3s4e36RKMHMxLnpTCvfkVqBuPLJ3UJ8zMLWFHrR4ZLFsHpxAbNNDCWgLrhT",
  "key33": "5csYJfVC1sP2cbNNUhPeSYgrJjgpAo9Yi7fJzS74dN93ex1r2Sch9XmrT79so1S2jx3KHuqi3CSig6bY25o5rMHh",
  "key34": "3hWT6BtvEkRqqRfAr8qziEx9JJZro2bot7VWzUCRMbNL23NTGa5sUCuCGjXNtPNLo2AEAtnHCwrkSvwJ4cFT4mD3"
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
