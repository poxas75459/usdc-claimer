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
    "wsJVwJTPCipdaxn5ZxWq4NKBEVrpgZ7QmygqDKFSGn94KSzVNuQwnPRixysWThrsk1LqZ7fKxZ6r1HaN4mTNAyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEZSbgfPPaCyVjrNAh969WSzh1xVDw1b4z7UfG2wx4P5iYPjjRwZ1s1E7wR4AMntEFrAFo55wnm7cEdhdWt2drd",
  "key1": "2YorgUi4ALCdz2YUtkUznE3RbJaQpZ5d2xF5RcQCzUXsEEXEoJSC3U1nbpgfLAWXqC2oG6ERVko9C7XogshLCoLz",
  "key2": "4fPXErYnqmTuW6DoB14fPbGdVH4iqaZgeDDT4BKnvTRv4D39Pmv9UQRhV9gzia2Q2dctkfWsevsmKNdkvkSs95km",
  "key3": "44EHJbBsPs1VLJK66S9wJUo8hRDanA4Ma891sqC5eCe1KJDJa983nCSnwhsAEpLDX8oyACwnsfP4htLDaViN3FMC",
  "key4": "46J8uYhLYbjWeo7wwNUeLVHJcQYm5518vtkumt8yVLE1Vyn4PePrTLxVmEvfxMy1FeVh1fNzPCxHpXGsTYLqZBEn",
  "key5": "WZHH4sBFoPzqiTLLtEPfibLV65Sw6WXFAZAxjSaPFqx6dWq23D7wp9fzn8FB6TgAPdu1RMQFpHpfV4B5DgWUdhp",
  "key6": "2ZCUPDEc3Nqs5ZBxmrihPsoDzUkcPzdC6LiQ6dhCtY1ST72MFdCBf8DogcQNA7z8p3f3U9VJ281n1dVv7NQwxw7Y",
  "key7": "4wmRcPcNiBmizbF3up1u27sbqPc1xrvLDLJFpox9NhxGekT8WfcuzpjTeYv5J6dQ22G9BJCmc9GsiGjnpZAda1rV",
  "key8": "51F5xQRAet2Eg6yeo3pevAtMsWiXi4wzpdcCbHnvRXqtC2nhN1aVGfc1p66Vq6ssFvdBYoX4TKogXzHpxmxLPxfE",
  "key9": "sXqzUFR9YjfvjMcFVZHpGSzpQKyDXkEYY6s1dsA2oAoEdLK4Sw8CajspBpbyrRmzDUn3TcJMuhU5fN17BuDGCYs",
  "key10": "2NvuJYWqXwfSxJ5gEDabCBLnHckPgZKiVkrEcGx74UHVgJoakVMFADcAqHuT6iajAgMjXGSdoP7htxGpnHeuhHtB",
  "key11": "3tXGjUDNvaADpwANZo4qfJuk1yjbJkUDFvwe2ymncPmv2KX7Rx2y5gz7SFHfqxCtRWBJem5rs4ZgJxgrkL64Vong",
  "key12": "3227WnTEQmv9t1eT9teKKd56ia34YhGmtrTudp7r13pjckmBoiUBBjMea72S6gBtCMSGDrN7g8ey5WWViY8x7WSE",
  "key13": "3FApB2j55XsxHNyG7KK7zrKx4UBmJECn8SVg2rtVwjkptVTrR7as1SHtcYNcktH2EfMZaTMyM7wNREsxc1U4hbz3",
  "key14": "bxs4UMuKzhRtUznf3DhEc2sZ5VDabkaZf4Nb3bcqzujrByC2ynes2fm5jF3BxrdT6YVs7XiX4qo4rwCJzVvvDCh",
  "key15": "2ZDVp99CXdgvM3j9FUJy9zFirXa7RSpGWuWji6LMnBkQVCfDPtCKdmETZykoxVtqXTEgrZ5dErMDop6C9954i3Yx",
  "key16": "bG8tHszYmHkmincCSkQaHpy8mu81Ej97kyqeQodWyCNhhESxh6i8pD414DSibwyeiAQxWwMn3DeNv91wTvSHCsa",
  "key17": "5aZiJ36BWNW6mmiPFQQ3JPncbcHaKwMqKm9xqPbYKMxYgGBRwVdF5kT7fYy95gxgqhuudPLcuNeJpXQ5xcHz6PP9",
  "key18": "3V7ppTExNW3Y8ogFiWAF2m2DGmbgDNq7Q1iGvTBXaYFJReP55CtpoPV4UXipkWPCcoX2nBdgmCVDJvf7sUFduynt",
  "key19": "3RYA9TPRH49oUFFSf8RcdmRtjL6M5RjxFBA62RV35C7ixi2aMNDL1o4AFccGKRBrZoiAaLh4QYcVypyNVKWYHZEG",
  "key20": "PttdMtjNTkBC8VQz67vy5pyS8SQe2wPBMDFbuguKkSH8TKgaAyPe6Mj3ovHptsoHkZsGm1d2C64dbEm8sgsgzY6",
  "key21": "2po5vZij2mKYaVLsBnBKPDak7uYESWqU4mkoaDXWFSGc5JPRPoknSb3xy2LAPJL83YjLWKwoP1pUkFpNGa8i3Jjp",
  "key22": "MQQCfe5iLdtHYbEdje4zQRLumSaZGxXgVn7aEHwJR1deN8fs5VcuhJUoRbykgBCJaBBLnHLLyq59cwg9iJrPo6y",
  "key23": "3yWa31FgCTRwekvZnE4Hy7LxGSyVUVeAWL7yX5KD81EkjTL78ozRnWG5MFpgqViVwb361NqfynzCGDceomsqoTaX",
  "key24": "3R1cjVLFwQyhac6kfgtF78d9uptiyhriQjZeLJt4nHiq6ryNmVDNGDjvSEavUooMCcXhunwHUU39ZFY5LKTpBqwD",
  "key25": "5MYscLWkxA1RHdUw2vo8Zfwz3AhiS9DTmFFHvmn7mJ5izqWtGcQqN125FvEuYyWgqTVCSeJKP1NJRxcAXHHWEQG7",
  "key26": "3kUmFSSBLERumqaG1WT2hgBCzt7nDbKHdwf5ifud1pWesJPR9M9VaWnViQtZYFmMooZx4JkbbXcBgJqvsrSG6Y7Z",
  "key27": "3U1ZSZQzegRpUdK762ztyiyVvcmVbKHTEurCxwy7kE7M8AkKrhvZwsftLm5aM4t1kxtEd4HHBoXf12P8btVxd1Ys",
  "key28": "21q9T9VcZSciNdXbw757YyEtQihv4LU33scZYbWqRAqMhcXG7sq3XR9dAmxReNENkA4wEJunPmbuCNvMmK3gwzKS",
  "key29": "5EezmQto2sdgragGpRP4AHrfiarnoqA3u423fR6TEoefQjF1JDiHbA8B8WqXgY9e6icsGgJwAp3iA3QAwSq3nAdj",
  "key30": "SQRprKiFqdTYMRQx51w3yZrBrRwtHM3bmJRpMMn95fzYE7NnzfQLk3LBHdTKcYESRYBoAziBUCyWhGzBVX3ePpT",
  "key31": "43vxpLCDcxygh4uVXnuKDHcTruqiJRpasgQazSRaG32ZDAgsXjvyJmdziVR5tdTsdqdz5Z6dkGSnz5SoNoEHC5zs",
  "key32": "66LuqB9w4BZAce5mv9jTgm8J61d6FXRoZza6hWjERNF2YW9PbSYFoi7TwQmU46VYTpUbph3dFPBtxTnj96mmk5mZ",
  "key33": "2vwrecQ7yUEaagkXocHeFVwFZYLPXtVvWJ6R59yhNozQRUcqyLb6AXRdQWqJrrsp5Wh4BWQDCH5pTJms12utCbK1",
  "key34": "4WQP7ww1siVS55Hn9d59xwDYe3DSR3rsFz5Ft1s5GKfA2hyuZhAT54LsU3gdZe5xcyTQ3jpaxzpQvDLoqqKWvyNa",
  "key35": "4u7NmAZMpMnkoTbxmhaTwAb1PQL6Hh8Nen2m3ibEkkivaTZ5ZWaviXM6KtLihGQJDfVkaqJHetBpb7miVabhqfPa",
  "key36": "42mSRYn3UHNiyVebEiypKejuPhbiXGYLFuSjAYGHxLYFhsLotJi9pUz1UyB5M4pL9tQLs7fEpkMmXt2JwrVu7aLw",
  "key37": "aJodhbK3NGpczNfekXL9tzaM19E3RmrBwjaBjBYz43VArPa8DjAjZXadf24crZpeBMmZhpkC3ieoD99P2trkJ2o",
  "key38": "3thYqtoimacBLzXHQS1YM3ySrQ58zt6K582nNeAPokRhkbgkD2AGLBpihcyxZwrGLM2EgxVwV2EoYBzGLxNb3FA6",
  "key39": "5JfmMApXtUkb6Fus6AysT5PFdSF4h1z8AEW9Zsfarnqf87ZLSQacHCazyUBwwZB5TU3yELyPQxRtZo8k5qa6SmZx",
  "key40": "mKGuqq9oczJASRR8TpaHiDt5d2P8xxTVn5vJAfYwYU5ZmfxNVDg4SxUXbPNqPpsJNavZjUMsfavMZKUePoAi4cp",
  "key41": "sck39nMKwWspgwfmgZBoyaXJCKTT3F3yjTUhnNVvzBQjcrzC6KNNKVzwk7naWsL9M8NnuWYx8fhGyziYfDKHttj",
  "key42": "5AY7aWfZACLBjnoBubFHQ79LPgqLyYFSZ5js8ejirqm6Nj5mxzj2xgR4TrYc5YTZo7a4dQoJqiVhBac6Bqa5BNmT",
  "key43": "29MyFWJUSiTewKF9KmRedrQRz2ELmo8jUbDFENhXd1KaUkHihxh1BD8uGEpMXqXbLq1b7qxaJ3pqVEC8cpAwBtjd",
  "key44": "32qrHFJuS5QanrpT3P3Ag57hzxecPnaed5Xy1hTvdxg9G2ShsKDGCjnYP1NfkbvXnfrKwYLxC4vz3kt455DLXcDX",
  "key45": "3FCEr4RjTbqxHXn1mDM2gw8GhgxHoVoqcuiCgSLmtmX2b73BXJnoktTPUqEni6SLNwJJGwrBwNfQ6BeQJYZH8QC7"
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
