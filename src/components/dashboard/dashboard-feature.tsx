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
    "Hrv1WN3HfZ9CKzdrW6AYTDKPGWGUwZb8oFzgmdjEaA3P3VgtggrzHVS5s6qVz6DpmQM1NEsoCkFJ9FH1vKrD81s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cYG1hhaonYHzt3SfWrC7JtjpNYpgLdG2ydLTML5xV6veh2onKqYmyV4WShHuDT7yDkUeeqYit3cpcpMZfWZSBr",
  "key1": "4wre6JBU1Y7spASvxzZoLybUMQYYinVSPVcbKbf6yNmdij7brtVuhmtf77EzYKwwb8odnxwnWbZmdyAfdJ5JomJM",
  "key2": "57zECxPXwo3uqoBJx2xuozAMSWKpVQxp4YGMLkNvhPveKruDELbRKGdWa4pajbNZV7TW6bePkrd21GCpnDbN3cBJ",
  "key3": "2iKNwjepvkQJ5gvMB23CmMbYNmxYHfJCMPQjYhHpUy3e5fLPowCfic3kAHLQYCxRxazWJASYwqhtryQxH9keybXc",
  "key4": "hUdfokQL3k7osQndLXbWWdW1KgC4bYJ9jSYEAVpKWAan3sHu5etgoW2iRJVxrWM5JbsgekFRiCfcus18bHHH3jn",
  "key5": "5ZLJV5CAvnK484V5eT5iWGUuy2ecMC86c1moQXJf9bzoxhuEepu2wuZT9S39yxBJv3G1e9suV4RWSQ3HE6rEHBHF",
  "key6": "5iuVNRurc3wKh95VLB2qHxrNbsV58uJqTSNPzb6ExiYZ5AEmEoqWsa7QkkDZUPxmhGY8V6FBPaBZ8a5qEJycgsMa",
  "key7": "245AxMggyJuQRJuAfXNA2PA2bG76Hbyu2T42uGxoprquLY9gWRTxLqxGKe1hEds2D5gbircH7v4WWqfoVDcc2aii",
  "key8": "5vsaPGoszwFVRtZPJJ9c412MhuetesJk2HCw8AwScHfNZz42Xyt4FDohCQN8uoTdUPshvgh53ADDUS2Lqa7fL2bJ",
  "key9": "5nkSheaHknrvwLGXq99fahsTFaepysbB7xMtGhUDx5NysaR6LR2Yv7Y1JCRKgQnE4U9zRzAtWCBtKhNjUmcAVD6J",
  "key10": "5iw88fs94duqgQXoMXey6AygqkXc22kkXjtWDuCMPzNSBLpmzecJJiY9diBsUyWgNr4H5J3PZBNENzuJSuQYQvxa",
  "key11": "2hU4kGG2cC4RQFm3iW2Df34NcbXhok2S5RrdNysRuPAkfixwfQGXx6qcU5npK1U2hUa59Dvpvq3rysEnXjXg6ZGG",
  "key12": "2zLZqKii3ahSifPYrg3rpjmcYQx6Lp18hr3sAkRCMGK5q5TbgmLfDyrxfxaHF8jbiY8cP3EcNTcdwJvNpUGKH7kF",
  "key13": "cyjVgKvYhZZUuvGZwwbvpCfT3Dg23vAPPkpLDacqZxi3qQZDrgwRL6m2LJao9Uwwpy55U8x4Rh6VQa3FT3HvfFJ",
  "key14": "yNJMLaSMRHXq83fpvgDXm9sFUmQ8jPwZbxwKN39hrMK3CxfXGwkFEiabLYP953vu5vczyDs2ZNY676FqimxCuQk",
  "key15": "4AKR8vbm5MGGqE93scQVKvAdApy9J6KzAJiPqgqCX1jk1ndjudR554rRLdqFZjGCuicouipWYL8fg3hHRLjW3TJH",
  "key16": "4mjTiv5oFj9LUoTM6bhcqFvCcUWY7kyy61RQWZitUReszVFek9zKNXVDfkA8SYz6YSDucQ3r7XSX7jXcVRxjTZtX",
  "key17": "dRu7B6HRbsPsoUaFYayCKmmLgUioUBDPQh7AmHHPaQsoFu6xZTEEdXQtk1nkKQv3wEQzpAhSBtvsgWxF8kRcxwM",
  "key18": "2Y25CRSckmqpnUgAn6Hmc1UdFHjMWPH762Re2c5Z4RMPcYC7UHvcaFHVrPWFvr9RC3HPh5EsmWRg1HCrMFr81fLf",
  "key19": "55FQGPZZTRLhMXTXYzKzkJxJfNivfoTcS2d26SN1ab71t4kdLWtEiMrhYHb1L1n5kpwVQhVAQVisQj967oiRi24L",
  "key20": "21chDPXZUQ6NAppy7vMFkNB4ftGXtWWsp4zKZqarL6jQmwncYbhYVT5zUG6KuwFWVmfdpAy8s9YB5d9vHpWkynKZ",
  "key21": "2QS7Hh3DzkqNvMbeKKznPaKXW2VPWpmkVR7ZUUrWbhrQZLrjdWwbvpF2Gjx8VaJcfBhYVsdU6For2zxvse93PCWr",
  "key22": "foz8qjF8rvE5A3TnZXzVYkAq78YUnPTeQ2nuHvjwba79DVJ4MG6BanyTd5KwELnxJsNbbqWxDH2zgxDhUAGyj2D",
  "key23": "56Whn7fH5n6ydRyWQC9PvAGP6WVCsLXCBXJJxUL9HNHmyXsauVwHdHt3wyvL1nnnvFm3RSgvRgBaviV91ry2z4N2",
  "key24": "4hcvitgSGxTot3e5kxKdDfPZ7PRUZJ9gybDFJZiBiZUdryysBTvbjo5XFfZA8GhiWMjUs5q7QeyriGfmXbERmogS",
  "key25": "5KvRXEMKhBZsKrRmX4tcfiN7UU57gvwoqvApJixXvFHVXDP3F8v7pefnmHWWAEhWqH1xBeiVxRCgwbGKtx1GvpwR",
  "key26": "2at8534Bk8b5Uk7kZcLBeJw5jpiqH2RWsatEcvkGgqN7e2DZLZFn6ntJrkWEkhkhRFqkaLNw6g4VJRbEf4tnx8S6",
  "key27": "3x7D5iKQcbg7iCNXpttdXsJkw7r95cnrCRwPRL4PtobeWbhyCYQSTpahj8yqc7ANGD3mJMpE7XbwsYVWQLSsWgP4",
  "key28": "5oBAuS8VkaqNruL1DHXtbmkXvrcG9p659m2rRsfJZZf2qBcpRqgtWuU8yYhP3Hj6bdThoVamYhBeWcxUizoKiLcX",
  "key29": "471Wy7LJTRhL9j2Aqh2WaNAJt9avWCaoQ1P2SMveKjQ63gasYvyGmjB3DPoMJ6QkRPBk6Z3dec3cw6EbYKgXishM",
  "key30": "4hzgW1TEhZ7pbUcRPoUhyvfXp4gyb87HKnuMRfcjrr1HUTcYkv7axpz9uJoWMU5E8YzVzHAvhWmUD7nrhaPeh8qM",
  "key31": "63enRBjC3e43boYNk5DcJ4GmsFMzb415SpVT33nP4ZEeUm8e1ehioGxe8jjzi9wqghPPeeT2N2d1zNaCz5LxaAv7",
  "key32": "2v9dFDUwFRqpq5eTtuHygaEp8DvMrZWHXNLWZgqejQZYynSHrHq4xHHDCCh7bbF83wjQApHpb2oPeAdiR5yYeXEX",
  "key33": "NUYQraP1nE4PrDDWGSQrjD3vUieSqucAiQgYFDsEvvoSYZXctTGnpgcRsN2a9a8VpbUmzT6eUEhagxRV4FEuFHx",
  "key34": "bcLnVquxKPkGHUWEKLVCsP6tes93c497THthKUuD7QfRmGJ9eZPcQxV73XapCFTwiVUamywPqfRpBLdXeaUy3aN",
  "key35": "38FSDbZbiYbca9a33TPsFs4tQ7KH7AY1j6ePpchyppkt2UQzbeNPVffkSN3gdRSjPh476sjCXo7bTDkvxi3rhuWa",
  "key36": "hTogngzQChX6Bb5GcL65D5wGR3RakSS2heBJSMqaP7gX3TA6A6nNmeyK5i6zGaq3TdHsRQwfhcRhopTs9QQk7wb",
  "key37": "58UP8orCgejfpFRi4uMz26v1RqTmvQSRriAJc4Lsk2HijttU8pGFGo9odyxPEovAyBMWu2LHdU2nW2VAds7svn7a"
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
