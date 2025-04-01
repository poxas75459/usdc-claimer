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
    "4M9WH4jD6JtmbwHUQE9hEnSYcUGPc8KbEaMQhyv1NsjiP9MXES8D9uAv4YJEwDbGvUTZ3EkKRTBk2Q8aLNtiUqnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nu4spKT3KeYfUoQEwUQECpx7Rpxkdyj7Fq3VFZfFfmETQMVAmgwTPuj7vZZhGAzsqpfVCRYJjj9CwFmPphQYtMT",
  "key1": "5pBFoGGkdpAGHP8YCya7JoYT2qgK8wAv6AsdCG8yMBi5Ju5zHSb9HcJiAFrgxvxVn7BExxKF9m5LCdNsrAMSfQ3b",
  "key2": "4acgrN9BthLYVzXJuBtT8zhkdVekjDtuupHNzMd2T8zrsAmWFHmDwt6CSfbmf4EVZ5pQ74GEkdmeoBnbSF98pExW",
  "key3": "4VhxF7Cto7KiuZ7eWrMuR9HJKE7zssroFtPXnmbHHNdsFyNzfyHC8LYQkYyGoMMhmbwWyKgGfK85ohT5xHfbiaq6",
  "key4": "NeELoVNbKGywQW5c4JsZcq9jqyDE3LpqUCaxWMB59qLuvyQAR2eCpgyz2GT5axkgAuna4xhaqbSTujorgnawibg",
  "key5": "67ZrWRQBK6JbKxRToCcsTysWpxRiQgwQNZR6iGAWmX7NifPdHARoHnx3z95oTmpGpvYcsnfCG3evSH51vviCYPvk",
  "key6": "37HCHHvwvUPqeP6L7oSREa9NK4LvHF9kgB47rwzf2jw5i85cBuUpQuAAxwtbBUqnS9HeSobhyQU3fQHuKRPsNtRA",
  "key7": "39454qrTDm5PFbCL4zRcTvDNnLPgafk7iq7qzRcMPHrfGbrAiWVX6yb6gRHXNc15GmRRNRqfXUp2BSbb9kyAmr14",
  "key8": "4UwPYChAassYy8nnjm4K7JhYdH9JBnJDCQQnLFxcGh4PviJUCKKnwczZd7CEjU8KCdwjoHYmFiUMEgs4HYA2uDt4",
  "key9": "4qyyiLgwsHTUBH54uesnnrV82sNNJcg8nzCbL27Czj9c6PNVpgj8i1VAVjf7Zg4bzmoUZSsFJeZprcPXYBdQe2z1",
  "key10": "qeuYiZ2bzdajX3Ts6uqq1KYjhayG6VEgzQRve5zGFf6o6zGLsZa2JnnyCuz5T2QK53siAmN8d7LeG6d8orpuJjU",
  "key11": "3S3VXbWzSaYQHVRJCZag9eeYpgyw9JsFbYf5B51u69HxZr4QUJvtcX8Uo1VVAybNpF1UMwunjnN8NNt2iwMn9P7T",
  "key12": "365tYsPQ2RUiqg6a82KSm9BWzqAnHv7vY9Jr6pGPoZfbiQxoTS2s2JWnZRNo2Sep88Zm9mzNp4Ksm3iR4jjKA7Ps",
  "key13": "5oc6hPPJABaFpBDnuTA8w77mXXXubEXZVN6PiWridg2HtMQQj9ex7M5JxdD8jCTU1dbTt8bPVdpjPWcrQbYhFAgy",
  "key14": "dGHDgF9BnNWgVd75D8pTAcspw7TaXXmezNBA6CFnwP3qQc9pDhRhPYF4QqxP5MHyLt53hHWZaWLg6akPW98cEei",
  "key15": "66aG6JQLBs5uQStEn5pjPtDEz8fGcJxR3B5pQyHvk65oq2oVkQGAH8QZdiuGwnXU61GkA1cY6aWU4yjNrQAvVDL",
  "key16": "3VcaNHqGZAE4sAfwCNTh8aoL34UZvMk9RuoAHfDK5o7kQGsWyK9oVQP7EXSMmKwpbBAoeKSginn3xAsc5hsB16Gz",
  "key17": "5WWuWEnSt6QZhhsi5ZT4x1opntrHfhahgeeCpTq8Z1oexSgmhVMrrB8KRuk4ygcXFun3X9ACfUBvQVUcBBRpqcJC",
  "key18": "4EorvHUqYmwb8US2v4gYWffGMyKHtNxYwQgvFEUuiQc62P5N1MQUnL44LopY4UtXMk7VoxrCrXsG4B7vvtwjGj9W",
  "key19": "2yvvX14gJG489Y6ippF6j4fFBtymaNFi4SvLWFuU3XaPYtwSt2yBhXCCiB7XPuP1kyhvk92KXjpSvWyTBBf6cs9H",
  "key20": "4GvFxuuMT7VsD2Jy8Yy47sg4jZ1bzeMT19YWyKkBwQNEfz9z8yB68uziPWVNRV9Ba9qoq2KLbZqPazokJ1Fuga5u",
  "key21": "4VFWHx3kTB5YGWLMpRqBHwNv9GE3x5aoJ1LWGF8cMiufDyBvAQ2vCxHX3Qua6j3jopGZXdqmSczE2vcMYk7szFjc",
  "key22": "4zBCvPuuPweemqXXdhi7Xyj59wvQEoWcjh1UqLP18rbS5a6GSCy7neMGdaKVUVh7FFdRp8L8kTnC544LpV7rCXth",
  "key23": "4ZdXX1jd8fpr2vBua7brMjX3k4x324sWomG77vMv67bzPFbka1BrUuTkh1JDkVUEEj3RaHqyJbm8FGvUyxxgtxkV",
  "key24": "4hTMr8qUv2JEyAMthHAeEYsqsWaZcoUE56cL3KTjxNFJubyvTKK2NgHYgGuBFRSd2uX3Sa7kxf4AYPPkYJTXoMnb",
  "key25": "3AEmYoJsFY9YWepN5Z1wgsd1p2Xavup1TnLg6JGjy8rAGKU9Kfrsijx6YkpUUdPy3JyvKWfU7THEEdHZGF2mwprF",
  "key26": "2Ajmt5X8b7wRzWaoMJ7W6aumAR6Siru6P31TkHBfLuUUZ7HD6NDd1d2ubmLbYsFH1PnQY6eHANFAKXZ2qwi71MiZ",
  "key27": "eRuCa3zn2AQHDECsQSEeYcm8FEbfRmKKjNKyghQSw3GqE31T6gchQSjnFLXFUitQLyX7htUoXo1FgSxKv85hBoN",
  "key28": "4hunLbkuHv9oBGnoxSBWV5UAm7jX8DpNmAtNXc7fTQ29EBNrCenordafJoRFrk7XXj9T3EcAiWX8prjSHTX3Aibv",
  "key29": "6NiGuFVXnjzrBFeqpPfvCRPz28PuWYfBvXRRRHRC7Yd3oieTznciz2rcNsvKUDCtLfRqztKg1s1vHG5T4QVbRbx",
  "key30": "5jXz5hTH6yscBySf9fZ8gnf94BfTZTaKi67q6a5ParE42rfXyPreowogtDRwY6h28gWFywU35HSLknhfA9PQ2X5r",
  "key31": "L18B88cHu5AWVGQ6LEDRrhhEi3gtoKtzPJFuw5uzSnSFQt6YxLGjNgm1GF5Fr8bJ4KzJunU1WnnjLoM1v8bBbbK",
  "key32": "4iLLgPwZXKpfvP2umemqwycJVdrxHXZy4vBKdipRrv32W4XGQokvN1QnQ7rGR92XLSnL9v1Ub4FFforE2o6SeetH",
  "key33": "2DRQDeJhXzRfu8JombuHMuzsMkUa7ZZLMLnFAXK1KKASTLjEHPwc9qG8kuBw6i22fZCxNi8yYpeps7JLzayBiheY",
  "key34": "3XuTCUc2VxuZghTU8yMBsUn2x1EyPyQeRNmWQ3dWX3ctuikXTn9aZPeje6GuLQNegdYAV2U7dKcD2zx7c3GN4YHe",
  "key35": "ywKYzU3ugUvfa3dZMTZHQgo47Y1zGU7TxcfQ4SGJ49qVcQHBz1CNHrAoBzMYzPerCBXPwHkaDZmVyNgzz5RYP8L"
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
