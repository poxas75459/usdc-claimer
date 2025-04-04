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
    "3dZcFpLLbxvGsNQ4ypcu5tvDkN6WFj2dZUqjEDvx2mBbpq8dtuXzxhMdgnGKyCRzcTKgXjBGWR7ZYzq1G8f6z91x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38fBrmjahJxRDMkcX2ZkTBGq4FcfS54gzWEfz5FJB2UULvngEoX3ALpNex6yatmZzhem9FfJb8z8Q7q616rzuWxK",
  "key1": "2BPKGWxjhzQaiFfEww2uGk2SEKG2iNW5aSz1W8jRanvqyHqkcjVhdoB8y6VwEkfcUraFNGKueub3WgugLZquJt3V",
  "key2": "3ovsBfE4wkJSjYZ6jC1Bq4cBTP6trCxfxbdbx2BSvrhmJFRNHnaigVNMKpp6HGnJnFx6o83mBvBbcHPMBn9Cmh3S",
  "key3": "3pNZcbDiV8C192dKuyKSts9nG72T3qF13aw2LqVsPR3uQiDqDPmQ2pBj2Go65H2QUH91oLLmowLxRPup5Sg14Rdu",
  "key4": "53xENjvgSAwmop5n8hyLg9LBqxH5zJ31GPczGs42LCedKMLetMTNjcjzQ92YSb4tazoR56Td5tGYnBQVtnAvRRuN",
  "key5": "4xXLhM4KKNEr8KW4XhRALLe1S8aXtmPJC2foVZrJkKWCztukzKw9VVxAPKkwfCEyMq3nzoVWLbrEkS7s75ke2Vnm",
  "key6": "GyH5d11Dm1AYPPc5bnEvb5XPaUbWXB8dSzUdJwVxzszRaoNZLb9pUrFEMM5Kzrzpa3giuViWyrZCxcL4yFfMj2W",
  "key7": "3RzBCYvfW9gwguWLf8QbYwtnLjqz3c7bWnYXv48coks3hUU3bLbFryiZy7xYQKFbjrgLfp4EDAwbvgacqV2LEqqD",
  "key8": "2V2RGjuQmfsGB2VD47aHs9r3vdeda5tozNbqDr2zQyFEnHPW5q2LeaRUWUVJ173xYPC7es8JiMaUnPcMfG7YFqYV",
  "key9": "rmjzH1A3TaRnWQYiC6b7Qa2UHwwLp1FFXbdsSRBUzMySbr2rX4uN1Voe6v6XKCCd4B3cTLroZw2o3m1eSpC5AzS",
  "key10": "3KjdufAWkgr973t5YR7qUQ7ZaRPEqz3tR38b46c8EJ3SPvdwi2xpWURC5xUAYdYHmG6DrZ66ovWVA2McexUda5Qp",
  "key11": "PPT9WEhbevxunVpJkLz1EXeqFL9gBpR7DNjMMjtyfzV2uXkjTmK6pCru7zmdf424kYo5AXDezZkFKCvTbVjYM9K",
  "key12": "3EUcvtyiaK7vXmW8jVFPPtayLcLCey69pD1WgQTsRwZRSUG1jmM3HwnG9b7zcbkrN77YPERmFE1jZ3Xw3a51EHxm",
  "key13": "4bkVto3QhMTAjPfeSx4R7dfkw3sD8mAKRfKNhaybSKt9iqaMfyvB6omp1xmwcZoBx2LpngKWfwaLy3vjBaoFgVtL",
  "key14": "4NTBUs8vN3h5zkgkEeDxLUVkK9F7oiWm9Un9EpoBUaqmPfBTjNoBUPrBqocQUkogBjz8xDuQPQPFREpGwmoFMYhu",
  "key15": "4CNYNVgQPv7dGtN9XGSuv9GY8gToGmSzuCgnESYkz2zqF3YxvQbjayPUDdfbZpjHAxgfWza5QKnZeLcGEKx6wNjA",
  "key16": "2i8tpY8yzpzDwZ3pEvgiXm16KaFxkYmXDNkPt8qMNCH6jx8w1c8yuP6uDrKDUTnA2KmPFZM62Qi983meEosho66N",
  "key17": "5RRrF3pdyzUbyaiRLcsKXFCEfsWLnRtEFxqutrYtbuEECsz6hxpTrc9kBgJ7LxddRFCvBzDFtZAKi1oVi133VmNx",
  "key18": "636yadkjT51svmiTsAT74CyXFJDthf78cSSCXCq1xtb67nVrExY18rKL5nJBNi6tM3SBcTZgsdfieTGzx6J3WCLd",
  "key19": "2eugkuPpAPsLmrXaekXmAwtfSo5CH15h9iC3A5uRbXA8zQDu4mYnK4PhFcmBFXumRmQUMJNVc2Fb4i3zvwzLpBaA",
  "key20": "2WeYSiuzkLvt7PJcbV1cYFXCWwYJSA25Mx8ugjBjsACyHjV8VTTy1naJeTw7K565MD6hW1UseBihQjgFvG2No6bi",
  "key21": "5jUTUsin76MtT2WUST3J2AEk3uKFcehwAv3vjM3Uf1JBNr4tBvV4ShoydBPi3XC8jZCCUPK6Rttps4WyxYHkymTk",
  "key22": "4M7WhED6nbVFWc4wUb6a4DoCRS5r4GGRGpSYBVwFY7NbqTGtdkmdy5P7U5Cm2fPJHxUpwiK6cvWNX1dananwDaeu",
  "key23": "67fueX4kqj6C6rNAedrYavoUu1jRzmhokHrG4ZujeA1rkPkTBrM9SDsB4nTrqM6t4DFpJcF416Wu8sK3BZNBia1b",
  "key24": "vobDpoMHbSLnTgvNXXwd7JrkQnpe3uR9qNc551RV3Wt5exjPyqgDUi5Jr4tdj5P5VRCvBoJJcLNCJ9oKoyrB9ia",
  "key25": "3hjYzWqBdGXtYKsLN7LdLRXGKMLNtZzqawaygWvsZua7M17dG6kpFcSfeef1irDbzbUwF1EqyqmSCHrsixxye1zG",
  "key26": "28nWkSwXvtPDGFnhg7SXXyDdRVfr9fZLKSxjfAhcUxS7hrTVhkw4R6nP49PuSZGSCUU1FAqEfRKt39UywaJEWqvz",
  "key27": "5gm2fxzTHmaxffZKB1jmHrZmvq9z3UaUuW3SvCeBThNNFfqfbi9ZVGa4Pytif5U88Rhdsok74snyQkM9jeQxGTQq"
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
