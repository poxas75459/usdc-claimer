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
    "4ahksmupMhZvncjaL6cNY3piEcRz8oeuY33cxHdtu7EXNJu5BAibkqf5C8qeTpTMzqvmxDv5tDfKSMhZSSR37U6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67gTncPyAbwvZ23PFutEFn8SS74oWN7JZmxU5YRZNB1PZ5s41qwM1bcYBWHYRmv78niazaQouUB6ettu5Dbi2nsb",
  "key1": "2QCD14GKxmWWgBHcngBjAuxxNDnBXKRD1nMksjh69f2Ro91Au9zaKB6tvztdrCmws3ZSQsBkiBVGgo2856Jr7ioi",
  "key2": "q6zXjii1umq7G6gnpaJuDT1wvPeKf1DjENoQhWqJC4jidD6oxbF7njYi9k4srfpj7erXLKiXYGWbQFYobXhpdDn",
  "key3": "4Ev3xibptuyyetcYPJAvevj6Qfmx6unfxMksDQQvKt2bK9aT3PheioGvG4U6NgZbH9R3rSZj5cFnUK3Kn8Mt3tPA",
  "key4": "2BCFjuBCvaFpQRN8dGqzPofstU9o3Dcb7KACfkRBEaqrVmMepuPNiWvu2M5ifW7KxwHQcHtB7qgZud1FeNsjUYJg",
  "key5": "3FrKgo5ZZRpTH9aJzcEvqTBsLdti3XchPa6fLodGW2876BuThZeuVr2AZjs5UBAb2mRWzShT4dkBEGBXTXHif88q",
  "key6": "5iGLGwyTahDVPscWvFhkE2eQL8mSyGkJCF7LPM7YAg5m7tUQNiDZ6fyxCAKiMKoANp6bXSrtq5jEUqUmFtaUwZtR",
  "key7": "44ty56XtbsrrdejjGB5PC1YYDANBxBySfFvVq3fAJVP4mmGEpsfGfeY4nmvaCFWW7ur5kfpbpnhpiU52D59psVVv",
  "key8": "3Aahh6bb4dQpkhxrwVXEfHmbyuC8JwZ7AiUU4i9zFJ3Ro6EqHraFq2AWz3ouHibYGKp8i1VPJ9wbvKNTBGdMmMPT",
  "key9": "2gUj3r5FP6ELNQmJMABiXgpaaiGuAJaVafz5sCUskp9MWx92PX5m1QWXYZFDpwzQ1rP7AWp1reCjGTuCjymAbrhU",
  "key10": "64Gb8Rm5WvX2SS7WBnia5Gt35FEiFdkWaqGVMUa54UEUr2iWUtTgKwdBYLHbk1NPdEjJaZaftyX2F17UU1xDs7oA",
  "key11": "5uyYP3GQP39dFEXTQUp6Mb96VxUiJm5FotqxfUVE3hPGrfZ9TyunS7gxB8kio5VsWjrhsifV9UgUDD44fXtG5T6y",
  "key12": "GfVgsPK9mMpFM8GiUiB7AF69gx1rhqBqU8H69pa6Tab6qcGuekfJ61szNUePTvgiH3xFKgJ2qef4ZX7feJiV9my",
  "key13": "3DiZPgQuDoG7fCVpaU46t6aBdS7K5coKRHygoignFJxyT2ricGnb7Hs6Ecxqn8dNBt8j7mibajSUDZXeYzarf2Ff",
  "key14": "4A5Gn4GCrDEey5VhbLqrgzWtsVjvjhmq7ibh3r6eHaxUiuo4QHU57zCQpXZVYhManfBAHkWPSFuJQBJyozDbGVhH",
  "key15": "2sr6w6ohDREe9yBnDwNAkyh8gVEi146upZCtjsoRv8xS56bYian8f4fSbU3mgoV2aZFsLSXDxdeQ43YnSja1doKk",
  "key16": "3f2M3uTw9XLoM3mKG6oeKaGNtHTqk77yPGs2cg9tS5ZngJ6P3U1st7ijNCDMFQmJghLgB94ShW3HBGTwyQQDdiZ7",
  "key17": "3Pr9Fa8eCKrQUoimMa7nzSMYwEi7gsEP4C4qvzpu6T2et6atxqXsEVkTRxptJ7XVQL8BBUsVGNnXgZs8pgYGDWG2",
  "key18": "5QvicCFZ71tKW3x3tXcJzGaeNiVExDX8VKgECjxoXM6LaAFZoKyG41A1uWxnTCjvP7KZoizGXdg22iKUy5nEd6Pi",
  "key19": "2hJfoH2K8YQJcmMdT97EZXpxbTRAnyTY1skLetbv2sBwnXDimhe2Vsah9daYjBFW9791wVU7naTkj6fSso4fFBiY",
  "key20": "3Ytcs3hh9c9qnrwqLBLpd3wjshHYjAVyEyCuquX9BEwn1aXpFMdih8pt1LXPDfHw2Y6J19Rptr2hivvHPW9TSEZR",
  "key21": "2aXsd49vAMYiSofr9j8HziChdzocgnazza1u1JDjfnCYLtWQ4PWtGB5EAgWGpJgmPnjh9qdxKY8m3zG6MbAEUkwD",
  "key22": "3qMEp7mUF1iowN4bRVbQkabdsJL1JqhAQaMUJGfS3kmUewMR5o1bPBjvUDbSAuE4CQxVEU2nrwmFkRFj5F4brDQn",
  "key23": "5TyQ4DQQU146AM3PKnr52Xj1jVkmVnQfNyBdun982ogDPLDsEP1e1DPaVL2uHC5xZwJH9PdQBGgqocau5X9qrgGA",
  "key24": "5w1AUMUfMoHfMxopigk1eAJSDwhXNTgL6DC3nAfiGgTKckVxqyqw9fGXksQk7prSxRCZ9PiXVSvyi4snkfqMbs1G",
  "key25": "4qa8cdpazPEHGuw5k7ravJKEuUpYcMFzgfVFxrDfTavkxUv89txPpchTjinY5gAeoofUZjwRPp8j1B2SMUzvzCxo",
  "key26": "4HgZkpUHjL517Sy7By8a4nCHrri78RxkN6UYgWayPeYFN1rvG4fDoZ8LjgpMrhaTYo38niKsdD1f4WKmLyphDPms",
  "key27": "XZ7E2UU8DXkMjRZw1WnVjvTDtuJ4btFh1DYcHZknJJbRg1DjKCfBKE2bscLPUWU2Fh3275z7pxSuxAgFeGjSoSS",
  "key28": "4RyNQRz8cHY3gtB3ohU674hmYz4vHYLeQhMA2q8tqr7QeVhJkC9LpieAHq1kBE3HWvJuD4ER9vqDbLUAb4JXWuea",
  "key29": "dUAU2JTHGcCJuHc8vGMop3NLm7zXKWwQV9boY9LASEbygsRZvt6wtpDWLHTU6PqEzHQRPg3FpFfKugQhzYxmojc",
  "key30": "4iiNY2rtJEMAan13iyrQzQLvWmVEFz44R9WeMAPFydxKqrSnEWj9siM81d9GaMjby98W8XmwGTrieNXuqKv8GBw",
  "key31": "3Qs9JnVhGqRDT23KafBHkWiHvqvDukqLvD6bayob969BqRgSx9eSS73QekQo9vg7YSGG611Uzfs1zYDBmftR2gZY",
  "key32": "4PLN1mZdj5DirKrSuHaLyL7wqX9pQgACCRPE9j52WdmGRrq4iJeGTk15Pt29gbDUjDf9GxdNVFRCFbvR7bBHSyrn",
  "key33": "3M4ZpoFWS8Sw6c2KPSu5wb61z4Be8C1S8H95CEMSNu78qWe3ynzKDiB5cacpqbYFC5U9CUTJP9xP6WyAuT9W5dqe",
  "key34": "5f2c5CRLirpfdNcr839d58Phbgcakq3T7orcmPXe3Td3b5pMucjvtwemzJ1ix5wA9bc4fuFNGMCVgpZPPfNLU9Jk",
  "key35": "4wh3mUcT6Ky1PNZkGAVvRXy1MYQE1SU32cKyRwTEcR39YXnNE3neatwS4TV3S673T5uBcKA67cYue9XRu8GwFUZv",
  "key36": "2WfsCoqt2HxdupUbKXHfDM5jAvCnaHcqtJBWWwHLj3xUnmSfisjzax83vuWgYFfB24zv4yMuUvnSyMXN6zuncEGT",
  "key37": "2FfLWLhukK9uWSwkoi56soAcUx27FqmMPcQHGnAFeF3Bw8ARRCh4Bhpb1MJaeZAgXj8er62xPua2vmgyE8sqx5Su",
  "key38": "3NfQNjTAc8rqKyAWWY5XLPTtG1jxUzGNPgQFtQ2fgFodvTxV6KZfx2jmej56e7fi4qeBb8jWp9nsjqq3quL2n2JU",
  "key39": "3jQbPjr7oTJ1QyRrjcM1uUrio9ToV2Dacm1frqMZsk7Fuc1HxhgGMpgvrRrcd3UAqjMAmuwKAoANeZMem1Kn2P8N",
  "key40": "5z7bCkAArCzLrYNFJ9A7MwpKm5AJSPDBVMViw8NdghF8bGVFypGKgtQbi6CQG3LeKcy4aGi5PX2rTppcqA4Xtz6s",
  "key41": "4KaQ8qNZpyFuMd5Er7EGCw4nxGuheVCfSYpZVTLCigiAWzH3JbqsFSrAEyY1SZUEeM4Px7GVwCNjNXUgfdiDkgHz"
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
