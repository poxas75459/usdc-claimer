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
    "4tgzSYhYE4t7mCbVvv3zR53KyL5oJWZ1WD8ryP9jv7psQUoTCbDGDXmXAcTBrMipxxFDHJcsbaJT9BaTEpskwSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axN2mzrBpWBFRt9q1CecxcLimY2yH1BRwhNDdgLMGZgNirbrFVPpsdVmiGrh9bJPrVCqaVZqRUfE4aaF26cyens",
  "key1": "2MxmTz666rfTVQQUc5rCoyNZxE1QP1RHwfPNXwQviap4LubBCPLDsKJBhg8te7UdjqpFPdac6VChdfeY5v9zk4Ki",
  "key2": "4BPVAb5oz8D9JkpPNFa4CvXMvwHNomd9ETQmx87tX12GHwpS3cooHFLvWtd5yfyUYVY9YJbTKe54UUfKUMhQrnCD",
  "key3": "5mXYwwk93tThmGeAsfEnmFKMuo15k7qbGdRhG9G8BEQ2vTTV1haoviBKtfhVnnak65juWJvpGNUHKqfJ7gWb5Wqk",
  "key4": "33Nw4u9N8aqqmVgYQNomTLgEgGY5G1a9CTNga9eeM9faym4fgB5HGZZ78mgYPW5XcB2adXbDDxqvrbqFVsfBGWEW",
  "key5": "3gGGgTv713qTYFCoVfSM2pSAr3Q3Mo5zGwpBQ6ynC32oPH2VC9dga2ucV22pHC9mJsqALd2wDWMcSdkUb7UGCibu",
  "key6": "5DufbZTDR9qHDezhQ63ECsvJV27nnGY8Qgu2UEVGaafxH4DEK6MaqL46B8jKw2oSPCEaqFTD3QAZ8tCAxy1swwMM",
  "key7": "4evBmUtkDBCnygWDp8oymMaxy1EK4VZq7QoyAYUtNnYjhLBi99iVvX96DNNst7JWUnRhwSJajwUTWUCm4wjRDysj",
  "key8": "2yGgUBmFu4QvUnpJctUZgD1ND68h6To7GiJ3e1dtYcQckcdxfzCnfCWgP7QZu6QaxJLAvv6kggrUWtarZqV1433i",
  "key9": "3CTDfVRg3XFtYEQsu6qUrwsf9eDx2m6dukC82pAiZytCM9utxjbSNeqZTStCmPVM86tmeGdiscqqAPHWN9yHuNtD",
  "key10": "2iEwrZcrnDzCnWamCs2EUiQdRSJ524MdFnW5ni3p4Z9v4m45Uc4kuStVu1RB6S9dxgdtgV6Zj2xWdMx5dg4aSz2m",
  "key11": "FXvgpkQna4ZnbRUWjnxKnDmYYY4qSgm9ADWYLeGQSpTf7dD11e3mYAuVHwgdSZBtyFjt2Y2MAxMW84tXHkpTQNL",
  "key12": "3kYrrRnTeXnURKDWXnHJnHbnK8L6scnors7MwpiqXPE55YQTdB2UZbqPNfyWnSVvTLBxeJ6iFYobxmpCv2axCYa8",
  "key13": "4zpF29JRZ8kPuJsncQhpyR6tzRtDSm5ScJRFqP8nZeg9uRP433fLGmQeNuE89QEGkf4Eo3nrKczH4WyXX5Uet7rS",
  "key14": "3rw3Z7BcAPCGU2HvecxHxZjW4HtgPtU2kRRKXi6GhDxPp13o2t6PVxquwAefNDffo37aZQhptJ2KFd8Gx4cPsw3j",
  "key15": "29r2nRGu1UDzRfEazDw46sGi2hECwtG4ntby4cPeuFzeSvsNcM3GXEhzdcnaM58FnFfTbFX7dGRKzuBRCN4ikKNN",
  "key16": "4JUJTyJEjd7gF2UVX2sMzLfzPAjHTcSAVeEsxGwEuVyXBkQiWC7J2fXjjFx851xr3Cj6ocGW33ReVFL38Dcz2pC6",
  "key17": "KaGPtJPumz1UUbxyMt6YvxPi9TrxBFbjz7q1NcaG9CmDECRp4QemoZeN6aPdU8QmertNcDJdTz1VNy1k2STCv8p",
  "key18": "5MCESJQsN6TCkqSj7XhJa2AcHRrgE2qEDDz9PEohqVq2Lo5iPDgG52qYRr7mLcMncwfCFJgaJQEj93PBMWBN7GYt",
  "key19": "5W8mufJkB9JrvLVEXSNoLBnyZWu5bvzwNqJJDRz8NKPdpArHsND4zJH76jaVtsWSkQZ6enTyppyDuPwCV43ato6t",
  "key20": "5FsquJx8yCR44Ns7xaW7ooqf446mSoKwejdR7YtLq4jb7zegn5vvMdNPPxzZwRTQw3TWKgFxL9BVYCcinQyt6xL9",
  "key21": "5ykLdQrucMyTQbHShAxU45d6Yzrc3Lon4tta7EpbZCeHgxiZcLEQQie7sF7d5SevR6gXwFKbPA4osnfCCcb9RgbQ",
  "key22": "CC67PZiJpsbQZYq1YcEXEHHFVMFWYKo8zRwq7Nsjrj4D6Nw5FaXw4T2EC7i7pEtraWb9xjFuPWg4y3XQdq6GRpK",
  "key23": "1Eig548K7A3FLo5BxS9Xgu9nzUTEKRn9VwMZHAMEi6hcjuPaFJ8HLrbbTrUFTXdkw5q4mw1XWwvXDzFnqgm1doE",
  "key24": "4EfU8BsTxm33gLZvqZPchpgwA9UFetkC1xjGqm6vbrAnEVRTabYTqsEfoYsrZPMLn5Y4KBTzcKhTPny7NsRGsvim",
  "key25": "9ivf6tY5Pc1w3FSJnmB4SXZv4CWhSXekpbxRBJCHr6HzD4PwW8fH9cc5WmNYXXXVh4XKoSQJBnuKS9uowBMAHZK",
  "key26": "2KV25ZArJ4xWvKiNranCCkuUvU2PsszYJv1uY9RfQgcR5g3GEJULq5nznnJVeFBhiSqK9WMzT6CAQkX9wsURUdos",
  "key27": "5vmcAFC8BFJWygX9fDrNJ79cD9jFtpJx3wMkmDsQNGtHsXLm9B4EkVdsmR8UChpkKRytJC4SqWedCXNrJKrr8QmE",
  "key28": "6BVjPmt7NiFjHXfG7hk8cnHKWBpBj8ov3C24goGspAXyezchc5QCbZUEeQAtdyvSH4t3m9BQFeFmMxaFimyK6LX",
  "key29": "3XMwqTmQtpivVRZTYKoqszLrdZWTjSvK6XB8aypuE3Lwnke2pgQRpjEDYEcPN5BGNHwcrV6d7e5QvRDuJNYbpB6",
  "key30": "54j8ZhJmtNN4A3Y8ErjEA7GxycvH7ydaFpXSXoJ1bSiGuhZoB7nTc2arHpEwNzY2hHLjPFSrjGtQVfkKfQhrVXrp",
  "key31": "2GXoMvN55Xp3VBMtjJjYKPf9PiVuazDHb2RraG168WE2QQ7VnM8nnao13adF4EWof4KWY3GDS6r5R8gFSRF1sZqP",
  "key32": "3httQKncPqfpJy7RU7S3JhXRtEeRWwCSHSgFxDnjAboxN3Z4nK2xWpesyQnMvcFvVCFzoWo2oCAdCL1W5zYWMEXR",
  "key33": "2wetf4Tqihrm8khZqwk2AMwo3BdUywVuMqA5FXfCBtT38t57Te79WWqFS1XhseehpQgbnwraqxVp1wtvuSQvBqUy",
  "key34": "4FzFbrtkCyMbykVg4Hn5Dp3s1gWdPugfqbeHxkoMtdwoZe5ZKxm4SaVuasy3qDfGBnvKHmuPXhjPMz3r6ehLuKqf",
  "key35": "3dLtbreynK649VgFwDV5h3rtkuUY87EC6GqtEHAShpE9gasVhV2vJnfaweug1qvQ43UqZDFme9c9wWiGi31mt8Rm",
  "key36": "3CWCe4vCm6yNq4mQmv8BR2CQoXzBXrwrwZKR2XG8qi9241WYgDV42cc4vHewEYfGeoDp997jhMhaAsoLVhWhtVDP"
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
