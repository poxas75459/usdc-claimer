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
    "UR9pscHMfk7VwSgFNhGsuxShWrfv9jJSLpt4nKW5MrVruHzB8NeFiWKwekGg7hMakQdHChPVSF7UDhVW7mdRGWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fajuVstfSiWQhAbKDFAaJEDrSocbRkq8EhihSrpdZxAmeqWTK58qHkiinJ8Ppwgn4X63N8x2gZyNQL9v79udV3M",
  "key1": "2m7LZkPqT8HKnfYnNytGXcQy62z26x6BUimt5BVGCi8XoPcpd6a7DFGmsCvdTt9F2drp5aMiJevXyRhmX1AhR9U4",
  "key2": "4qiyQZGG7e1JgkcAa2U3eQ9SCWsBmm2EeU7jHekoCJQGHUkN1zpuj8t89HEsk37ZxdBMLaJUJn5Vhnhg9QJzke13",
  "key3": "4wN74CxScjswbmQRnX7KUU7ZxsYQTCL89dqk31psS6KkSWTidEL5gaG5gFJCUfrF7EGceGzY3GiEmk4FfNMzLkL4",
  "key4": "WSkDSxivAEUUkgG2sKsZrTPFKXxQWyRSWPfwJ4L1U1whdrSqvrbPHQox4LaWUosHzsBQpZ6g2LVzzjQf7ytei7G",
  "key5": "3L5ckDnc7rqq7YtcjxmaSWbD4LmGsMrqhdhPsfiFt34oPd5SxFSjWt6gmjPYaBmZWo7JpRdcsZHfMSjvwXnZSPJM",
  "key6": "5swM8pmhHa9GX1UpsSDazcTRqgWD41keJsvi8jCqSBBNGqUo6suwJe2MqVnnVUqrsC2RL1EginSHQP4V2ed672nw",
  "key7": "32L8TxC2AnLCaVpMWjjoZ6uBcxDA15361TERWddYZJepRPsrL2W7tgnbACexLYpF6EWpPDbybsMyWwu4u8XgLP7m",
  "key8": "5KnknK2QeQukbu8Rux74qVZENvtUXBqAv2aunzQg4ckcGPxRpX8wJY6QTtiJHasf4DhnXLWdrqKJJBMqetgRMUJm",
  "key9": "2myKewHWLErgQRyaffvNkHuetmH1Tgj2hDTEc3cn3cfdAEVYkd6FecKsBefgbQU7u1iFEhJZ9iANqrbJUkySrcSC",
  "key10": "4iAZnzTpffJCRCuxmGpRuNoBJxh2o93jSfNXLkCYu6PmdNioqCepT4gWuSkpkQ3y2VYhQ5oU76EsZyLhf1GmXHkJ",
  "key11": "44e8KcDbJ3HtEXHJVd86dwCbpm3EvMYCK1v798SvomvvFSvxSAXFmdjYD6YSyD2x5enJ1bfvy1NYUBMgGgECX5br",
  "key12": "42ffdy5ouwRBNbACswzV7gModHD8j7KVFFUwV5giv4U8wXnmQbEwRkK8cd34iUFaftwuq18xZ8dVJQ17LMQhV1aQ",
  "key13": "kJrC8uYxMKQLJbfpAeGhbb6cMrrdTeSmwcA9kJitWGv2AZaTgfvVgfuGg4V3D8ByRSoD1PUtFi8hLjjRsmF1AJJ",
  "key14": "eQe4i7bQhs663Uo8KbC1Vw5FxVZvW9NTTPHWAo7Q3DKYaJAW7jr87K4ipJBc9XKN86oiYEN8SEnN9dXQiKHysLU",
  "key15": "5M67Lyk7C942sCb41KrX1VPvcdMkQ5VrBBaLUcjhuZZVXMwLxHMy6Jjy35U2AoQ89cQpnuauqG37eZdgvXdfCvbb",
  "key16": "peJVeYZUmZ2Vx4uWZgtLvRBP6JsmPJTYvrm5LioXopp9KoG7zKAY3ydNPy315SvXN1f62Vj843qAJdiJG2doS4k",
  "key17": "2NzF1Nyt73GmqQyHK3CWx6R95s8Mppwepy8fcpxuJD2zghKvcedY6mpDUVcFGvL6tn3rcB38TBxwppUnbC53npv3",
  "key18": "XV2DTiB5KUBt2AkknZc8E4EJee5T2GUVqg8Hm3Y2ZvTBmkYGAmbqx9XqZ3uK23vqU59YUyhDypwChBeyjamfNjG",
  "key19": "45aU3DVSL9YqzqyaA3NM2p91meYYfNwBVLA7bRPdg8o1CBEUNHz5VhgBiqGKP8K3RcuworXcq3xLNPw3eWZTpEnC",
  "key20": "4zgy39nti966Jv7McG3oBDimt8cEmcxb1cStP1z13zL7Ra2ZNygEkNii31YyvchND2SX7sSPwhGnHdbTLvsrZA32",
  "key21": "P82pMuyFaTN6X8nfUhRLgZRve5NkS8aG8abPEESFKGbtLt3JuUp85FAxP3htiqz5Quyzrp7ARwNUgc7djWb7xTs",
  "key22": "28b3sLd4pp6a3baqm3yHeLrpzfvMoeThM5qQuqjYZLjvLXHNWHk5RmqM5e4Z1STmp2rEC8M5duj9Z9D3KRgU9kij",
  "key23": "3DZVLLKDr72MkXxKzonVEoYSgJyB61Jd4Etz1Ato76jS3Zh3C13GJqCxAZJWwU5EPkxrxr8CUMmgVcQiXwDRHfWT",
  "key24": "WuQffy2eUFUE5jiGUdbvQTDXFcS9d4U7GWp923D9DpFES9mGTUyCh9BXgDUEYM5gyXgt2hgG6hMwZQzyZmJY4pw",
  "key25": "2ouHxYVXeS5D5dXnh5FiMGeyNqT1sZvifBHwXozNrb6nMTb2H8LDfJ1wLGUZwV5rHmvn3JoTAqRrDtGBq2oDWoJH",
  "key26": "yYZobc9E5wNzNRxDpGUH6y9SHHTbHw4VYSSCmehfASP33GutSmD7B3fDSxyBzFPXMhxtsyftP6iWf8SFBi8xYqd",
  "key27": "5ikhMeiVooSQjmN2bHUAMAKuRunHwxMaZjq63wBcwxuAL4ZmtexmVYDVGPELfYiPhwQjfAYDhsTSEwp5V7kTfeVS",
  "key28": "45JqFFWXaateUeHfN4cZMqRG2ciB1ZGTXeUVB1ZzMVcPBGGPtwTqs9qsHqjKdc6fas1j6p5w9w8y35Qotsg4RSMH",
  "key29": "P12ERs991tAewMaPNtumnKRaD76mSJpFsC7YiMkWo5WSoVToDmDC9wrtPAp3v5uLQ4HPuStk5oGMsXDax8azJqf",
  "key30": "Zfnn1P7uq7RbXT9D3txB4axzco5pDJBNxjiDM6wMvE56TUfM6p3nZucUgSVYcsbsuTxW6AtgZvJjQWM8zdxbN9o",
  "key31": "4zM63Rdkoo9Dcn4CePFTfLsg36NfVK4fxPtBuwGipN6dff1aJBt8N3kub1VDg4ZLFFwgVRMaS4J3dG3nVjtAcaom",
  "key32": "4C9k4ocYM1TGu9DmQPmd84xu6fRg1bKZMQb7enqcd6APwNLxrydKK2aFW4jcheEfnD9eo9mVcMJWdyoqBHh6jCcE",
  "key33": "2JYjXzmoqLzWhzkK6pnibYsYnuNYwQYfGzgg9VFZqoG7im6gwchXFgqtoXn7NDT5ZcBp7uCaDDDJas27E9JHc7qW",
  "key34": "5dyAbgpPSiEMGJmz5tKDVwAmipTxTaXbF4E4jigeSifatFzmmdKZyiASdKXv5DmHDDKsVqnakND3VJNb1pxb7zX7",
  "key35": "5uv1d4zT6xjRvLWWD5ivbuW6vsgDG9dUpx3GuHcd1wzkUAHssZjvFzQXPFurncSizpaKpk2x9kQAifXExa8PKHGG",
  "key36": "2Hg6sk3hQUKxiyzTFFm1jFG6R3WqZUpn4etj9uUF9Hu6h721EdLLwYV7wpGHwJj17oJ4T4Wu1tFBTTBSfqdijm12",
  "key37": "p1uggWveKgNYTFnxdUa9sDHifYJCnDdSLYVS6roBeC7eKEXPwhvBMqm47rH5e8ME9hWBcuVV8b5i92pmem5KYvM",
  "key38": "h65tGBtJ1bVUnqYehE6zeQmRZ2V6zVKNphRsXbcmDgaikSheA493uogyif62tYh44HGu75sapAxU8Q9H4dsCeH5",
  "key39": "2a2GsmD4Z4rrjxHuMqXwPtu23Tqrn7M2vuEqSWh28XHhdc4wqtmuuVUTPLwvTqXxBWFCwjgUrrE9VDBYwKdXfQdc",
  "key40": "2Hw29kzCkbFL9avmyMwvzgLyAjUw17NqZbLS2xaJsE3JteQBJAY82ux5JkHRzP1YebSjDm9A5bvwbCaW5M22jtZf",
  "key41": "4sFbmfoxqob7cQGrUGEoCAYBBzUZ37cLZ8VbueHWq4fueSDJRtaut5shSKkGhjPWgtswkAWoiU1YAv8BbPw4Ne7y",
  "key42": "516G2WoGKB8PcQ8KgsZvvcRvPJnGe76NSbRFzsjwitAzEgDuXYoHj4kPb8o6xA9nRHU4mxnWe5Z4gPz7VvyPzAxX"
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
