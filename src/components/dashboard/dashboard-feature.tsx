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
    "2vFeSc5kRbGpcTa85VPV2KmV23ZjYgQjjvWEPYExjnTu7CNrD61xCGJgpZT71otZDEDSFcZuULiV6YPb624mssoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FBR4tbq2WK1GEcTBiZxW3zd2fmyh2VM9iyqnJaNyXkGRTXaty18JcCHbmeb7s6BWokPQaoU67m5Vg14chAoZnYt",
  "key1": "4nZ1cZGaETqsBLuRBJs83mUz534d1H4wD2M7X6Wu24er6QdfQgkEwNMwhT5NijZdTUr1D11cD7f97evRcMhQpao9",
  "key2": "5avtBnWX9e2o9r2Z6qVDAYayTNuABQmAbeNLhU1iKUYLzty5aSP3nrMtt2CsePS5rpqX2pNLgBRG5hcWpMpZRpjN",
  "key3": "28iHpmePAyKAnW9qEhXpsPsuLRSfNpmM8Zjq3uxqcbbQ9ufN8vwzvsQ18PZkxDiqGEV36gKEvCdLF9UDAr4hUsab",
  "key4": "5EMBtLQU9iBNgP57mEwZTiK1CLak1LUa3FcUo6xhpR5piussoKspYCQs3YSCjeASsPiQqVtX6q7XmtRF5pfZ5STB",
  "key5": "rYNib5EcTfdqCwQisQnGeFFtn3phXWaAMsBR1w1ju2owfAjP8EoMzZWe3cy8npN4huKkYoNoKnF3RArMwSGDBPy",
  "key6": "3BtKRccXx6myEiAuybk2KbJrZAM9J3tbFEiVsXj7SgVUuin47oPtb8fiKxddmTFQfcKmNhprWHMwjeZmtuo3ycCa",
  "key7": "4DBkgxM3dbgvgEm9GGbEdSq5ddH2wvLGd1yeMV9M2A6FPhmBU9u6TcSmVXissNncw27VCRXoTwoSFaik28x6Udq7",
  "key8": "H3bzM4WEEehuweetVZWg6EoSUH1RXpYxsah6etgMLzGK54rL8SQW2dmfKyafva2snW6exDFYUB6XhveM86dZfa6",
  "key9": "2K8WWVEqv23dFg4WPg9N6AYUVTQhDod6XXtX1Gp3Ah3ra9zbJUEKxtUn6PcXF1bC5bFp3Ezz1ynAB2HoksbzBedo",
  "key10": "QUMpVZaBHGeSGLKJFg9FkgrTM7ctBnrhXbiJpSgdxwXFGoFkh4kWFZtWJCWFnynjEcQjpzjhyhiNLbXvdvP3VGV",
  "key11": "4ALQJbVn9mPrbxUwJTtoryrtvva1uM94YyaZAvFAEWBAe2fZumsjjq2193mpZvuYHdFn6LBQ7fTbVULP4X1Qi2u8",
  "key12": "67YJeN4dYwAvnc4AYDBMR8eMvSdRVRK9WbqRA4dbDU2u8xtGnLgjRMppPbTeDVcS9uUErTboy7ycUXgtfRGrcQ8X",
  "key13": "33Q5uEirTzh5GJuxQd7rCJiaBxB2Y8wZykh18E4QuLpqXdFGf37fACzjSPgRZ6u36q3a2bwMVT71VB4cDwer6HRK",
  "key14": "5XtM22kWGeCoEZB8G7fSuQCcjCJ1Cpfg61P2JiZjFifFHgbS9Cyvt445ViapNMaQDV4MXwGpU4G5zSp9UqAmLHcw",
  "key15": "LiHYR4Phk7szMpMrF8d2W6dtLyhqdkPGuN4RvL4M9qiRHPXd5Qdj4N3bQoaqLTsd7iDfvXaKmazVgRQTQanReB9",
  "key16": "39N3tWQkyAuyJeazrTKKSpX7cpCij9PqVQj53oFCqpwT5yzogk7x9DzLgj2a5MDD9P2rSD9L2j6gbekJFgS6Cxvm",
  "key17": "5AV7owUZumHkmXWQKLNm3fjKZ1k7ixmzFRC4LE8qfvCPeQosXXxni3S9Pe11E1TKG97BEQj7Jj7BptJqRKL8Lxww",
  "key18": "4F8SNmeaPsVvCdGjnFAdkRpTcAqafk9RoUXY7ydY7w7n7ZotkSShCNP2nF7LYLZBFSoeihJCDwXGe3embHpUA42J",
  "key19": "3GDwYGdm66CKqgykzSNM9Fzd4BceP99mMNCcQncEpRc138FgGdZBUL7cdS9VveGgTsuxMLVdT3NSYhGXSAt7iSaM",
  "key20": "2PnBhWfPNFf7xs4GzRADdQxhkwWvfFG6pFm7CfwkoBdFYNW2ZiDUQBgnHoE9Ux8xtvUmwBTWQvamopWmyxcNSq2Q",
  "key21": "41PNWe7oCfBP2v7kKkmFrwf3vRxBHPqPerZz9rGwecLqWgmZHTaGFxsJmgtQAAbjaf5n6Qfi8UhPdG6KKe6MiBf",
  "key22": "38p3gPz7YFJi6FGuqxLhzr1pMiE6kEVfscZry5H5MoZKPG8KVEMzUmE49icQDynX21prQk7AwYG8gNUaLKnp1C2i",
  "key23": "2YRdyHg1Q93b4TdWG9uFMRXtFsrn7dmL2mpmN7YZRuaXcwjigsdWXrfgjjhg8EshMjE1Fn3Dk8iFv9kw4A1x1f9g",
  "key24": "3iVUYkVSP4rjuperrByz1QUZ5pQbFA1FjmBmHtQ9anSPAWX2RzsTXR5YGo7PUFQXjBzVUtbisUQAfFaTreWPmNHX",
  "key25": "2XVy8dVaR5iGHjDe18SQhQuX6esx81FYSZxfWeqGyNiG6Bkko7YXTwTKs2RXiTogXiC9Mk6b2VBZbiHUbgE8HpCy",
  "key26": "4WTrEvZnjPzNL9RdZRVg6k6FQNHqqFcrUnerikRctTAXj1S8gLEDV1FQ85Hp8ZKEjDwfHJhz3Zud3humEVFiywLb",
  "key27": "5S9Y9iJK5Na1LPwTx7KsAfBj8uKV4XUq3RVrJqyDnBAUe4gUERs6h94ZAsEFQzLiUH3pUp4yXTmrYLGpzd56TEM9",
  "key28": "7D8wxH2j2cY1TDhXXChSptCqRo4JoGNQsh6iXw9cag2fJixDwMz6zVZ3DAkU8x8qbMjVPUPHdZNyRoXQMn949SY",
  "key29": "2fvuHAZCxfpK5MHDnYFGgMnPZHY3Fr5kLX4ErXm9XubydqZ7LsgQSBmEXacKapH5NgMgrjBWCh3MXecxKzaRe5L6",
  "key30": "mveysbXxnN1x1HrUbt4HaJSTEqKdkQQcG2KLbyFzHGLyBGcv8s2m1KtEJm6H9fYZ1zhBJxLqBXtei3yieUSnbfj",
  "key31": "K4tYCUFgeYwAdZgD9pAC5dg5pMfihtR7NbuFouFYbzL3yB2Gmxs7TKSMYKrTQjy23bDdimRBMK35gjYGhU1dzC8",
  "key32": "4aCsngiww8hPzY5C9t9vUzEiN96EPV8YkRRGrocyS7Gm7EmUuKmi7dEspLk99aPDgcidQMKzFitsMX7znWibGGuW",
  "key33": "2FXkeKF9TrPM6r2jwtix5xjYyoinSFfe2zHwas4xVon7qiDLSD1xAXLHYCkhbM6TqouMUMaQcXdDE2TthNsjqywL",
  "key34": "4BQ1imdhBGzrviCHACWRvfX6KsEL3c9qVwf8Ww9tEaRnxaHpyewTWPrru1roHxNAz8KYqcUdHHA6zDpWevS3gNsV",
  "key35": "43vwvnCfSAbFWYF5d9jfdwfLD87xejnvkKzaxTAGLgTsjtv6k98mxP7SVRXe8PrPtBqmU2aCGVJKzTDX8iBdia2Y",
  "key36": "2fqVqWuP4Y1bRrpCHsCLbU4DZJRiT2GgFZUgZntEu8gb64NR2eD2YVStb5ZHSjyPzG4dBUufBx7QvVErXf2uRZE1",
  "key37": "5GGCf3Cwv6MCA5hFVrjmwuyKmScxfPkFYwiqcCWxmA2KxcWy9iDjFvkhDRFxXk8yq53kJbKKdMm7W9sHxLvHBhRx"
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
