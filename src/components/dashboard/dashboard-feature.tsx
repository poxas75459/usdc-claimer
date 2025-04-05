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
    "8q7nWyFHvkgFDd4LUVM8PRhvL5FRtexjyM7nrsNMGShfDprYboawFiWhHFcQxAs6o5ACTh9PrsjrViuqoMGKfAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULqpqUEi7gGLNcymKGdavoD5gqzSrGCfrj8fWwTLJkDBzTGJBTD9hQh2HSH198YFuF2H8N8eT91FAeNeya6QnQi",
  "key1": "TBAG9cBgjqsgpgoQfqUGj3RVM17myLp529q5qDuCXfrN93nz8dgavhsbLyFmcpaWioa9AadMJcbVojGfx6Qcbk9",
  "key2": "5MZHqv6eyZhKgmCr9ZMShVP8VUcbm79yeuUGNgyT2RvA6jFNmp8z8UTyfrP6W8bnuMpd1tsANxhxQoPhiAhPr3id",
  "key3": "5BRaQMDPPxPNXZB6oprgfEhEYi77gyvA1fXTwYN1FTtQqkuovQ9oujkbTUbbCwfTagZfing7ksP1xE2zRUEHpw5p",
  "key4": "27uGj9CokpimjyoSkzsZEuNUkt1L2awJQ3zcAzqL89eWJeiHbx93d1t6TMZnSb5L1PGoGUnzrt7wWivgcgemGWFE",
  "key5": "34TZChUtpZmcQy6tFN55LdZHHjm3j73ur2qViLx3eS3G1ce5fcJNX9MHGKSBxVDFHriPcCKbji4SCcgPjUHY78rv",
  "key6": "59yPmmdWehf567JyRdF6GcYgqTX6UKttTFXSFL9qPZhbhyZsXENzQuBSQW2eaSV9Tt79AsLrzuX4XQ89Xf2edQwm",
  "key7": "GPh42gWbMRPPZegYhYsuMJLca7op8UcCDeYehNxAmRNH7zhwwZWdJkgCC3c3Epu1vjXpkQ1dvdhxQCR73sD7SrT",
  "key8": "2Kq2PnEdVjUiUJG2x3b1u4iKwtdbx3LPEncEQ7wArRcEWqNaqYo9zDbCGYtqVi6RY4R4uur6BVZx7CZr7EiVtyCx",
  "key9": "3KmcFZ137SNDnwQ9bf1xYmg32YyZRFQxmDiryK2StHQhmHWNAqYAT9gm2XSWjurSdyNndnsLmf5QWq5yoEPEojo4",
  "key10": "2o3kq6JGRdt5zmgNErx3Zd6URD6MDGcjqidagPNnAdNqu7ubrUzDFeq5kGyzEG79Vh3H6bvDK3UNapGrDKAoaY5K",
  "key11": "5XevjgNnNsacVujANmHVx1hSLpEZypWgZYJo8fy3sDxWZdB87NmdAsxgBYau1tw8tcQvsLsAqZ4iXwQjbDP1uGjo",
  "key12": "3V2B7jqHYMgmDZJRrNzxqnLCfoJJdrtLu7h2RnLm7Gy1yS9DT3bemxpXSFB7GD3ar7nVbHWX9R1UpUp8XmDQg37i",
  "key13": "4JgyfTB2VKbVSSGdiEkcMmkgWCu3qaHwW7aE1NmN76KtAHhkfWNG1Y9ckYi7RFFUf8oHiDjozCXJRY3LcuGsHiim",
  "key14": "4aHbVaw9iqKgh5ntdAt8mJ3LVe54aV7bNHAjnsKGmhyWNuLgr8FcUt8AjCCMUJv1bS5bLyJuMoBvuXhmmRUWVvDK",
  "key15": "5UvNqMVBda4TTmrfBjx9NW8VEhJMBvDGWM8Wt2rd5UFjJYPUKRvk7vSETRomkfGocQJgQhHUyBoQTVVTPoTqdZZd",
  "key16": "2BbaLcbHYYDsLrG2mMvUpkqj2ZGesnr28TTwXGfv6Lq2pGdkKkcwhhA7GGdywmPcBy75WjgbHLjXuK1YRcNVtWs9",
  "key17": "3pcdaDCesw2bX6GPPu9p3oRnr1D1aVVK7VMFsZhJVi1sCsZWjeiERsh76kghpALdYLxRecUd7UccsanziXgrJPHP",
  "key18": "2kc4CHwWyMgi2AWusSKLroYdz6BoNWmp1LuGrSdHMYuh4XxKz7nyp3Kv8PeuBLF4S3BRGrDQCYfJsfUCEYuXeKnq",
  "key19": "4SBiWMgDPcLk9pR6b3DJVN8T64ZhDaLXBpM4BiB1ohDduFJjSgPjcJHe2e8Ch28gYynQVmizQ3SshYppAacZeYRA",
  "key20": "5qb1wBXqqTiigS8jymDk371daLvC5Lu1c8Ua4UcR185UgX6eAktx2yJvaav2aJbPFFYj6B2nStzSm3fNs5yJznAJ",
  "key21": "3eWgimFMhEa7zmKk7m3hwQGYwmnairNvLa9MnoVjyESk1XF26WWFkyL7ucehM9U54quAnM3M3gjq97oyKiTK3Z96",
  "key22": "67JsnywAneCRtYdMJQvu4wyFJy7m4srtWQfJ91dKVGvyb5xEpsAMC1FixHGecr9DwtV9nMXPrzzx9gY1UhcktfuG",
  "key23": "51RYRydEdXFmNKA8mhVaBYdUurKLKip3Zff2oE4BYNWWkPofhY3qXMAfvTRmNa1kZjdX1t4kfh5wQtZWKSWvAYL8",
  "key24": "2ZdUS3YPicYL8NyjpQMezHeofRXTEaG49oBpNrVJ16r64eXfKc46Z5w9dT11hmHoCH9BrcjwUYfccm4tVFCJwk7X",
  "key25": "zVoABL1w5Zxc911rya2xJFqo56xukXU81snfaKrGqwDpZy4Y8b5ifdhhpd9TZikhSJ2ivMye14UcdcNQu3QoYYu",
  "key26": "2KR7hHtSbmiPzNPYZRFDzXD5ZuYg9EoZxTtyafiy1TB3PuPDJg9chMc6sc8QcQiFePv7PSiNb5cu5exVYGNPwnhU",
  "key27": "2tMA54XDJQmgtWEqMhMoyxcPfKSnUsQjPSAadsrPeuZTjc1XYnZUr1GUpGMCfP5xzZeukw5Zx1hQpuX8N2bPzoQd",
  "key28": "61K1UNLrBmwjLNVz6HTbvbZD9TeeQvtxuPWiq6vciAtshUkLSBVw5mTq5V6RHcg1z1L4B8XdHkaKQfTxSRJvdW4P",
  "key29": "5txYMfichMKeeCJfzA7sWPWtt3bH1qiED6p92bhoxgbKdGqLKUr4oXYHLKsZBjR9xT92GtrUyRXAijJamTjczTpw",
  "key30": "Abta6Grt7JS4VwgPbCmP7iEAXa47iBjrKn4d7z96UzNoZppFs1TATBzeN6DrDs1WEaZFwxT53z4FdTwe26DyzRP",
  "key31": "5NuJvM13gLe2ofVbEgVbmHs8HWZRWD2BoggZ4C5PzCTaV9zWPrQ6qM3eV7S5yyxboxypQBi1upwhVAKWwovrLfCL",
  "key32": "y2ZobwUn86CeENjJ6h448fp9Kvi2gViEh2GnnvGMRVrSTQjSxqNAsJcBZxj8UJqBKn1TySNRA9cE9GRga5DzQ3N",
  "key33": "zHYPLSMKddzor8SnYnt8z2pFLsAai5v3wrHvVnGUwdQF1sCwHDMtR3H22xXWBpBocRfALbYe46MmJ5ZppBtcNfg"
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
