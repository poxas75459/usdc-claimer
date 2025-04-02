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
    "5d5NkLbqPQyb3UZAkJDbp88ekArKdDuJBY8bmNf4zsQfdqg1spYnmBxP81mr6HAvP6Ke1RYpjhBrAmsmvuzye53S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLhSUqwa7ojRvn1cQNABvL5gRN4U3goiHFmxrsHAfVWvgT6EZSK2Z8wBEPgZSSyDqzg271E8f6vRcmRWme7cEou",
  "key1": "4x3KYVVD6rVi5nc6jzDtdCc5Pk9g3zsNujWNW2Z7o1jL2A5Jg1rsrh98BJuJyHtVmy7xTf1ayG6ZuaSrrmFjbL46",
  "key2": "5E2hiiRqFSqsW3HXWqxkMJFoaxfASb6Vx3iQYzDLraJMAkJb1GoFMnHqCive4FsgNFnrg5mT2PXo9huBStiqdRPf",
  "key3": "344ZKBC9iCoGp9NQeEaas7Pik1q3MyBrkMrKZv9y9ECJyytFB5GGoA7jBZR1niY51KxubYWX4WH76k9U5TbH3bvZ",
  "key4": "5aJ6rBuj3ZMS2UFLSs2VYBgcWdceTBbNhUUVVHfjTqBansQ9TppEteWefbSLYkVbrKfMcMmr6z5GMSN8jKu6bR89",
  "key5": "4tqhuCHXFFH6tmZCeiEyqwnEPy9mRz9QC8BxgjvSWbh9BUiWR3qmFQqrFPn3dwpqKdPJNmq71ihx6EEggLggpu9g",
  "key6": "5U7BkZP8NVcd2thzA8w1FFVkZ3GqPVMB6c2Eim5vSbh7VsuVzuEcZ4WJ9M8fug9AV6CjtkejJtSbXSmqMkwz4bP3",
  "key7": "mu1rrKCZhH26T7NhFHcvDysFoBim2em9QUqodpdcF34vspCnFA3ZekVkMhaWpFFviAiNjyqG547eSy5AyyWnCcz",
  "key8": "bM6onD76Ez6iKBkkPMNX2qNssPwhdC8uDQgspBCXiZwh433HXrWJDQ7XZ3CEiGp5RHPtxy3LKT6gfiaegBCJfRX",
  "key9": "3es86Y61XBGqZ6dw13DPNnNYBdzBvUmZi35mKCm4bFU4SLi6Bp89WgfK479UANnhr4c3nG1Fow1sbgR6jkUMdJu",
  "key10": "2y9ZoXG8QJHTkBWqQxTq8WdPC5bQqu1APoxeqRBrT7prdGKLfAyEdRg1CqFWAz1UUS5jCkaj7RZwcfdRqd9RENH4",
  "key11": "3Nv9xDu3PcWCV3ag5ERjb3FtD3VwDwj3yDyQYjS7jvZJAz1AuWMZ5nDM2wWJxa4XYfCWLyQDmM4LqW5xsuJ1yKvS",
  "key12": "3pcyHHVXASGbdGFjGZi9mfscpg67w2gYkwNqp5rW3fhYvGCAZ6UkHsRyxjaEZ75qofycgo4etYUTaBvypqzijGa2",
  "key13": "2WFF91u49ee9eVbHMecdydVWWfDtDjBL2x8JPzsDnQNXstc8c7XLCL4n4Z7bXyVVyqMdpVg77FyMyaVtyw8sCoSe",
  "key14": "55jNw72qamLYNXoz44WybRF5zBHrmy9YbPN48YgBu7thJ45bumSxaxrdhokpDi5SBN3ttvWUpcSC7uGudSfE8opx",
  "key15": "5w4eLNcd3cdZaEC1DBZ64wpQjRXkjFTFnvmmWkNpXyJJtzVXV2mWbsBeqEJ964Wmguvvu5oKndNbKfnrk1YXJi7A",
  "key16": "4n36HqRHtVMRwNwMHMs1goAkNJ29na4StBF6fTnmEiUurQmxZap5UNB5prEHCjfS6SXQpKRD45yETyBrq61SgW2U",
  "key17": "3neqx1TzdLgRoAEV8RMz1z2hzMwtQvJZq7xccxbfZrAVgq5E5GpzWGaQPgXkjcBuvEDtrzFewpiSxReA5Uismp5m",
  "key18": "5EpfeKW52WxCLssYAbXPsT1fnd35bRQYH9zzLD2xHRGVWivE3qd61eVcNrBuF7pFCjskMA2vf5iVZBxBCCkw5LTS",
  "key19": "4Bia9CRtiCBmxW7x2gFbAuxXDPVobq6rDuD8kEWGgPzULenaM2DG1t6Mdz5VQUBVxfcDRjijKjDTF4cGhWFRmXEg",
  "key20": "4GbKdhCAomtN7emzdgnTveqJydUs3SmLmUW9s6XaxUAafH3By542AhehFWSPec8RyNPNwGdT3GAHCqMxxwxpLXNf",
  "key21": "3xgoYmbWQQY8y4V1d1tDvGF4r9vRJHkTxHnJrMRFEFUwXcfSWmRwt95inrjMwnduc5wrqhnAFetwH5HjEFENQirn",
  "key22": "wqSQdN7SiNGDnNtQmaWgvnyf6jvthtXCanKzgLZpNwXEyoAGg6E1jRa9c7FD9wfBczc6zVqg43PLo9oxwi5oaci",
  "key23": "QLQ6aHb2bCRoGF5mETg4maZHtqRncNjsVBpPQ2yiPrKRnUYJFZtpkmTaPLpLjdeSvKSXgkBgMKemvuC9xgbGT1u",
  "key24": "4mNyUohbio3bYThM14c8FA3HUkfAHt6KUvPKo84i8hDy1Z7NpUanyLXDtj9ttC86CN6qn5ZD7ueAHwxbsAqmX9kE",
  "key25": "4qQkQZwUryTnRctuTw4hcSRJfNu7oQj2TFEyALuzSZUf9rhBPRsbSvAi1v8Bb7F4HPvi2ThMAqfYmvrsUkp1hUdq",
  "key26": "2sRoU9bHAeZZgDHTkChzva11MmMEM33yBdgQaoPQLmQYjZwMX2FpRhLKzMtBALqcHz5f8PPfoMecptzNWp9Ugg13",
  "key27": "23o3H18Rc2uA1JE1rzxq5DMP3ZR6UybDFbQadDdqL8AtWGYyWszx2p656gj4Xx8vE3CChw9Je1pm2uvkSoJuwHjP",
  "key28": "3TmmDsn5MzV7nTZQS6i78Y1tDiwmypyjBUHm58TYXcPgmLQ59wYRkACypP6kzxUTGoFdZkxXZpPHugVxawiJL3no",
  "key29": "2czK8JCMVzQJw8bWfzPF9XcbZka7t33cFhBL76dW2vjr3P3DGBQBUHSmxASrvmnWqdZ2XvwQ2ekffxubDVGmkFNN",
  "key30": "2Z6WAN2vA5o6f5XTSxpKmZWoSimZd2NooYJ4xUhDc4MxAVi13Gv8UkVrRGcV3BgUnisgXZjR2JaWkJ5ZRw1RzeQa",
  "key31": "37pibUcAwDuJUnWzs8HJjNNUCWgmYqi1ALB3WPAthYTuFJ3zZi2vrj6fZekUgVkupsoJnS5PyNuJeKFNEAH3HkM",
  "key32": "5E11ZmCnA4ypGg69KApMUvWNvzP7wCSBP7LQZHVyYjUXnYB4CTdUR1HKNgtpaGjaWmgHnUEPDjVHm9oRLPAArxXt",
  "key33": "24FxDSzRXUwnUiGoEUtHzH6dFdCNZnuGR7ugyPmBPz9kjST9Hy862QJpBcTaKp5QgytrhZaJy1QgPTqANnVRYouJ",
  "key34": "43K1WMgkpLsRQ52vaMvogBsAKQ2hu872H2WJwR5oe653MkWveihEAvh3ARMA3SbwUyDWc7Y6AGB7FTmLemEpmccM",
  "key35": "61C53KwXZEvkVkEaeZT1tXqCvkkfPk7TUrrUrJT6P4hL37DVwhGMg6ffuxxa9PNKDfdsgq87niPVY4eyWh7eJS1F",
  "key36": "2ucV26HvgwzupVbwnw9JNVFtDHhKJUgQ8qB2FUGTk4WMEMKxnAmpLVq4tcNQGxiVnxDBvcsgCHKSenqb6DXGFT4a",
  "key37": "3GKgUTmch8bQMyTFCHfPyP2xFzHmxxnfGw6X7oUuDyhpcV3BhDgQXhbpsTJRSNiXz67cAsFKRNwv6wDMARPM2m4o",
  "key38": "4QXpZLoTyXFoYxgwcLPef59j45L5bBBVvQguYF9DghtMHPwZA7R4JKXRdHgVqPDQz7HafAiPv3uiHv7VMXqtXfCN",
  "key39": "4p6rdDbK4mjMpfjn4uH3zNVLN5dmEGLmK6xA4TjJVP1pFhtvTuJESMcvHiXJUAFMHjzj1Wtbu1qDQ3y9eo9t6xQu",
  "key40": "3ENQGmF5Ttj18gZLC8ywxXzX9C5cBHWBQG8jN2USgHkoHJszWNaBp4M71zFwXJL49kUdpmmcha7cVqgMgD2CXsUn",
  "key41": "5ydNMYvugketez9KB5oBXXdGQoTwmYWu5iCBj2195QUBXFDpae55YnUQ9zecrL7PHe8KW84GHQJHyM9vrTwDYM5q"
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
