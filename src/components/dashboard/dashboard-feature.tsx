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
    "4osQLRjVW9XErweej7B6NyYWkaPsBq1KAGVmhNCyFR2QHCbh3tnDgFwZtHsm3m8G8e9F5htHkr2FA47WQHhGbaUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5mk1eh6nmKm8vNadF6U94QZfhgSe3fbaVNr6ALd349pc7wj2QtycBjrdSPMsbrGPcVtMEKZCrxx2DrMbJt3FEB",
  "key1": "4WgHXDxHrXU8JVyZpzjraKzSqFFXWwZHxUZNnLWstgg1rPXTfYx3jkzTWUD6CUX9ZBZGSd3jLNLMDiG6NwbAftWT",
  "key2": "5NC6xykBVk96eEqLoXzkaA7pqLRVnAXwdsiFLiu9eY9EKbDk8c1imcyTBoorjT8kjwLHEF7Qm1xjgpawA4PL3iV",
  "key3": "56KhLETUh7FenWvYRxofVp8JDp1RxvCd7YfFjm2KYBtXSWCbYuqh9gYbXP6y1PwQtSCue3VbJBkHSKRfcYe9XC4P",
  "key4": "Lbpmt8ZZ6rZKHJTgMaqZTXCu7MjbVAnehmMCkYjRwn9fMTLK4dV1KGbBZ36ABdfPbYdsDZGD7QFoYLhW9gwbnr9",
  "key5": "7F5NVpaShTzHzkSTZfgn5WJssqiE7w6iYrMKfMJAayorQRdFKuXN38yck2TdZfiH7zUsedYhZf7RLACKd27uG4h",
  "key6": "4W2BBVjZ2H4PpDNNucBqWJDWZ5D7cuG5ubqCDMTeQ5WeKqQLHeV3DJo3WbnFf925yX9BgLH7TS2daTayU4gFcdaU",
  "key7": "SNbtG8MnUoPnJmL2csqYin7dv6vJtxE7xZZdy3TVHrdtSH7Ef6GigmXvApPJAabL1dhym31aMJ7VW7gDx59G4gH",
  "key8": "b195ypensxjSK1Xqu2NrcgNffd7vvvNZ24FSSQKGYNw156hvovh73WEGYiG9KVFtLAtVnd9cTacNTrYmSELS9yS",
  "key9": "29ee9S5RJ1Dp93cBbHbRnL1BptfDfa5jJvv2WCtrFnW2JcP9muA7WPjfitS7q2VUVLmvzhjAWdwGetftuEtDGzXG",
  "key10": "d2AAZHqK3fkhM2YpKdiPGobFdecL7v5GaHM2FNbYA8P5jLXGmSxMzde4E9tzDa7vePS9mKUUVCLGVTR6VDaU4Ws",
  "key11": "2xn3nSNM27hYAbuZLqwCNymfCRKMd2TCbP7eK2LhQHxMEh9aTPkk75imFkCVQrM8w121R3zTrj3Q3962KFaW8SQe",
  "key12": "4Q2Qr22VRkaxt8rnx8fPJhaM3JhTpbwRjsXTkZ3GrWPjmoNC9NZuLWad4TF4LggB932hHbKUQDWd4EFQHeYwFsro",
  "key13": "3RyBajoKKUxiUceQV4TrYWZdWpiG3uLqC729ttLiZYF83QLjkK1nNfyyA5c7JTCnNR8G7YanaFmUadMF2SURwTsj",
  "key14": "79wohFeMDW67zeT5uFTa1YLtsDADyv5zPSTWLEgGFBaNy2A1QjZE6bSSrAd2UghSmik27nrzS9FZJRsTCWGg9VV",
  "key15": "3BTpM9Wph98cVJ5XoqMK5aLbbyWpnAtkK52gurYdiNwPw6KkuxWMELSinZ7f9PnEakb2Yenivifeyd4SBWQPizv9",
  "key16": "PvcCAmw3tLRa65EqdhEFfE3mo5fSuqbDu3Zx5Ae4HgoFLp8fWXw174F1XHqSbYxMMkxhUcNzYvt56nmbNh9g6hj",
  "key17": "zYKLAwRLLbHSeQetgSAESJ2d2NfLz4sAryf1BJEJfU7WPiXPDKKKuaXkevXYAKsQgpovNMAydJhbGeiHSAVxbAe",
  "key18": "45LyhxWCdFbXSDBGUvD83GUxPDMcoN2GMgAqqvZXVHu73kCqVNdLbLzeyysKS3hGMHrM1EgnNSuZ7cYKvndyxr9R",
  "key19": "3XUNtTssYHW9SgNt5eb7twvhhVfnkewinAcb1UuheZSbaQoV2txWasgfCEnvXmpQ5DhzEndy261A7wRi9Nbe69d5",
  "key20": "54Vab9BELgWidpj8RL8PkPNbEqgcMx6xNqj2EM6kGnNR14sj5y2qFtYqu9xw5dm5MYoJ9G4TiKR4cCxC9teGw39L",
  "key21": "2QJ7Tm1bKP8wbbXdi3akRyKBrjpcjrViX1CyPNCNmYHu48mEqgHQGv5AqNMJzA5fUfDFsTWd1vRok3UrWmYXub3S",
  "key22": "3xJN95WnpbqpJcy9QdhFjniSBuDVCEoCu7yjPPGkgjCBqeXV8ovNi8vhCriytiFWsxuriUQ7MADYvZgxpfkAPcm",
  "key23": "3TtPU3L9B39TsriAKo22y9pMBVzW5upoKZumMiFV5vVsus6gRWNVFBpJQ3k9T9n5MYcvJJhBjehnR7FUEsrbcEjY",
  "key24": "25EGjLhqMqmZZ8efgtWEhcf7B1ayPs3pwctboWaHnLCYgosX6NB8aSszDqTYESDQ8aAUDFLvtxWuyybXRcopy2ir",
  "key25": "2XPxhjSudcKXZ8WDWjJ5EvEHQbPBiLALDqc9XBPAZ4y24YmwDoRnapZB6QK3o8155mzoRsEB6yx6osaiWymfWLDs",
  "key26": "3YGiVG4gapfFJNsh6f9vyJzztz545HdsEf9zcD65zVv3sRfpP7mXRt36uDoikuSpNBEuagk5LnEhihmNnirGY8V6",
  "key27": "5jCapQmwVB6wqtfCxTNWKYQ1S4VYo4BHTDBjsSkNghubE1phax1VK3Pi3xsMreQjQKiTNy1qYfieBQgkCNFENiti",
  "key28": "5HybFFSdXRM2mELughJy6Y6BWDqGVfvHenoszyZw3CcHoEL5EttuBqbfBoJKCis4dX2TsXPRHbMizz4cJ4Kdqjbp",
  "key29": "24HmuRLsziqTfQr7FKhnGEkp6Xmwt5iFfZQ6rrbzE8ZfZkp9n5AdvBkGG1rveitEjwfWFpiFkYmZjRwTfXHfJyKy",
  "key30": "5PBxUpnFLLnatkmetiGncaukFCrbDNbHCwcw9ytUXYe72ekMheemsaes34u96wDhc6TE8CRtAudN1EsDscw3HPMQ",
  "key31": "5MgzERwaQPssotLrjjvxMxJWjwYCTCzKaHifSsXMvVCaYofFHvzonBLv898ALi9bdSgx9PHSn9XxuKHS3NhiUXCx",
  "key32": "4oH1UmkpTXq7McJg2eod9BGqHHvG7JrC7j9ikJcNW4EfaQBzuJxNxZiMsjGPGaCQiM2tfhKfmSAfBUXv9CdboqfC",
  "key33": "2N651CqLYaAPQrVMoo1Hwb5qerERJC9GFyR6P3v6uCYQ5fdgh62sSnARVb8HoQa6ssSzRhwGnwEybgT8n9kngBGh",
  "key34": "5idY2do3jy8Qyi6D2ATEJLdEnJkyQVKCtct7XyjMqgRS7r7qmwzkn8iYWtNkudHUymd4EZomcodHWzhCX1bs4uyw",
  "key35": "3KufRPtGhoyaPtRawqqCCMAnkxeY6hVnZ2ywuMGHLXgKoWcEDW2PtERvjAhYMgLuhf4VPi8Gqb1xnwR9DaopR9zB",
  "key36": "3kK9VbScyPJLzah4UYvJfHV5UMwGYJPFcoWNJYeGG4woHLZRwkSArHZRP5Wk5imtk5pgAtVWdgSdwEWRSEEffC6V",
  "key37": "4gbA93ZG2fXoKa2ogfB66pbBsxDpRSGxs1m6TfN1Mh1sShxrWNs2WrDaapu4WiU9kfYSBtD24B1pSetMNijaTFJc",
  "key38": "WFB6Yi5qVbgb5vUAaCTL2sbuBxnuvQkvvvp2QVxEnr43G4WkkTKwhkjcBdpg8sQwt8PiasAEGkrhBj3BprFHV35",
  "key39": "5kDXvUsHp5cSN2i3AXAnohzFg5KwMGbo18YSumgJLLEr2j8WLz2pZLtPw1BSiPrgT4biT4bB5uYph2V6oeEr23oq",
  "key40": "54G6H39nAxBrnXf66xAnkmwyzTzfAQTaJ9pXoXX1xRyMJCGgoxd5SmbKNqhbDpWQzCbA2dXceqtss2893oWc6QhQ"
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
