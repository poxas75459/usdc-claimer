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
    "3TK8eQSdXzstkMVeNAX2sYdJ3KWksGsmAYXo46cP4MihpDshUz8h3ciAiJUAN3YJBM2MYHVpnP4iFAFSEMbnQxKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MECf2ofjscS6efkcPkM4ZgzbNbNjTFzEM4gekQPU3Jc5jEExsZ66ns9mP2poKQWDTmYGBptP5WTQo2bahEi4eoa",
  "key1": "62B8X6sTBL4R6RAFwTWHZGjskZsurcjTnJ94p2brzPdEYMcTVW7e8S5Az1pEVNF1EXJrsTLCTM1dsVkX8KW5PKps",
  "key2": "57kaGB3tiNtoSPycXCnMBzvxzJpM3qFmvrSfjy9wcJWKYMnEZjKDpetski1BdeeDBmknVB2nrDLgj5zKXwde8z83",
  "key3": "4gXtErcwjgDmGkXuvTUo84WfDBpVcYfdR7FWkocZHVtwswHXk8fxTJS9c772J4AbZQ34Zn8qNr3An4uFib3SiA1s",
  "key4": "5mwcVEEw84iASJxciE9dRXk3JyHpGpcC2TMxmrEcZze8deaQQEwNPNGzpDuYCN3vMMwhc9L21nfq53MvxqJqY58K",
  "key5": "2rVgCcEKKGskBoKP4x4QswVENZ4syjxcjWJGBRXbfnPnw8okhoHy1sVhYfmztGQnLsQDwDSDFR1ToGrJZVP5Q8BG",
  "key6": "4g2F4imVYsQoQG2gMauUbcRmdnWfHSv7FXJhY8aegFE2a2Sk3zB7YpZBjCLLV3ajaDhTpBFh7U6JEcihgbLWT243",
  "key7": "54cJW1tSY2Uwoxy9JwmkvgfJ3twfGfHzNTgnVPkRrkwHv84eWi1PURkuoqccKWPmGkndWQW6RTYphBzseBZuAz1W",
  "key8": "28vue55saG5LCCpFcwhWxmZ2imfb9QQpSJBcttwPB9C8paobXcYLfg5anAKUVqQrAMDBtyx7UJ8a2gcqbL2f2D5p",
  "key9": "5bV2brvhNLdcrB4UWBnVfz7euyiTksPx2Z8TrGkwWkK4yw37uLrHpFc2ghMwncQ6DhxYFsZUuaSjQMmezfUcY3Vj",
  "key10": "8TKKb6hKHLFHTL6tcZfCfg1Cey5Wfze25ot7zR2UXW7R3qgKsbyhtdVryTBKpevPtmX9gb9vkGHiBFRMddeUwro",
  "key11": "2cuSJuMToqQo3K47ZGXEFcdW1qfBq8BMGvgRKTah7p9W3bVqN4Nf5VsYEHoKVLt11RvBWuZt2LmQxd2HVc4BFgbi",
  "key12": "4N3RkoYDpZgXAVWgKa3otvxNmfGGHGShmeXFiqp2uQ3qqULwqoVivgsLbBSjmpAxcQ9pFw4GhzYP7c8QFQbvDuKu",
  "key13": "2SXcTQmie7Qcvw2XcG1qLouWE3LZmfRwcgriL9iKUwGPTHAPugEizb4AJ4qb8pcqu7YKioRDXaD4KWvmgzmU9MEy",
  "key14": "2qK8heLVTZSzLiTk1qAt11sf5xKUQjvFFJRwFNkYiHi5jPujfCu9VcgcXMDDnTxnS9V7FTqyx7oKzP1h7iCmvhy7",
  "key15": "5uzqiTp4VHMebTbvy4tBAiUMSJijGcpbzZ8LfqPwaKUpudkT5hh4j2PccuCPB8EwnX89jGGYGjRaYxVFxrxuFgsi",
  "key16": "33JnwPm5YoDdNEj13BaCpH9bJdKBdqpsiwXzaA9ouN9B974ocsDnP2zX9wvykzLCax6d3fyWinujG2HG6NqtKedP",
  "key17": "3pdWsUy7iPna4E9AKzyzMTDhzCwZ8CD8JG8bLsdxohhHX2C3PP42KESJzWaxxjR3mRiyzf38CsEWZFvWjkhdAjyF",
  "key18": "3eRG86znmNNKRqu5q9akc8qtbzgdVNtZMtdNAHDZmH5MUE6SEvhCjQ8Uca44zjvhs3ThntFtKxxn3ZCHCUv97Kib",
  "key19": "2YEJP4Jzcmk3nGEJrGGs262qwraTNhyqQaN3VxM35tHotNgbjmpgvBFdVc4GAg8G6J8n6VWqCLCAk4hiLBMB4oGv",
  "key20": "3QAnbiXr9mNRvyqR6AjqMKL8rzZDTQQnwfA957BUAdZKkKshMveFU9Jo46ojs6voMoKk91zrYXJMuBEPqrQbyauG",
  "key21": "4mvxvFy3nT8TkeZazsYKPfNiPwAxCvXNjCTZZfwmMKQ9mDX4pJZ6wfu9x8yv59mWoLWTTj1U3tK2mkdTaiaPva2S",
  "key22": "4ZqLsZbBmj3RhmsTuj9f2mvgtrBpHpQvLaeEzoGEbcTKsUxuTAeED78xiMoygzcyUAyC28aophefgwWu6awUdhoe",
  "key23": "4HoVeWYTPSvnF4JHgDkTN5NJyDaPnVS4Cg6fd3uvpRBSf9skQH8nJA2FJrAWscWJzJCjYUZUbNuG1EXxS8wc9Far",
  "key24": "5fJf3Xfhobf7tUyDvbaYMPqdafGGPfh4LVKni5n7TTMsj7YPKkaTtKMeDzhRUaKD5mLsmdXjsBpjMpZY1pQH1FDG",
  "key25": "2Kj4hNEYTjvp9DALFTLZAVrcuvBV9v5AkWW76SuqnU98UuzAWA3hkgz8NxAWWeMw2BbwinzvMnv92zTV8Zqq9DFx",
  "key26": "2dtGECtAE5AzJVJZ1X3GVFkbYS2SjWfvTY8i66oXvehwGHobwtZkfvJy7K4fFDZxWUE6TXz1hdxJjkSXVkEFtFpC",
  "key27": "5ZfcNd5Xnrfr7abVUef874thAT9oAYRmRahsWowuHv6jEQM97eQ5fFG48PHMm4oQnL8f6iPtWY21QypvDba7rGZj"
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
