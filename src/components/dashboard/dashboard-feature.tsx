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
    "2PjECYoUXsN9CXUenkBeqwqnaLKLL6kP3YWp1ezEuZ1K6DVoNV5uQfxosXfu1cwMD6XUHMqfgBALRgPx6DMVgjb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r33FYzgbzyYx3rSKLQhqCnBs9PKgvFt2eUNfMbDtx5T79JDnbgKeretmaJcukw96cQ8FXbLayprjbEZn4kykQXK",
  "key1": "7BZRZu4fwG5FC7k8NxHA1AGNgPUuBsonGRP3BtFFrcL4LKx14F8od77qUD41Nm9Qg7WX6SSV8A1b2XuPhb2P3nr",
  "key2": "2ytMo5UZ1QujfCDdNRHSV3RF93wdBi9dC6ro8o1tcP7AdkR75iCSqvCjKgWgvYNzLhbo1XZ93hiiCsGHP1NHBggL",
  "key3": "57VLDdo9JvgH6oVXKMFaBbkhjwdhaYFXxT9RBf8aaaB6Qs45ftp4VxmNQt6vAno8Mroqo7cryML8MSSbgwoY213g",
  "key4": "2sphrPsiqkWCqpbJXSetRyDoPn1ZBdnnTdhDozfE2Xj91FDbPa4YexUKGZmCyFEZ6LdYcrkdtoJizMsxTuP6wmnx",
  "key5": "2mHxXCyXmAtXGw6b35trVkzfkyjg8PCsWux1BfKAsFoyzjjvPPi89sfJyQhpo1tt8oJMUNPUzTsvGraDXoEuTMi6",
  "key6": "2j14GEKVzchYiz4CF7KprjJKMEn3UNTY3Kqy3GfWj2cU6bdYWiJHAuMLQ4Fy91N1tFNsMAEXASnhUTGVsVtCn4EB",
  "key7": "5vTkEpku5oj5gwPSEBoB4xH5Yft3UfEbWs6tw76sj5DMN6YLYabKDrc9nL48yvo5rrMRTTwEh4kR8xh5ggzXuJzA",
  "key8": "4kayjLU6Shu73WT2c7gEaQnw7ak39t1VR9HxvX3rcU3ch3WDSu4cnzPLmfb1KgdBQg6xEoB5xuLbEoGxgBEUwjRn",
  "key9": "3mfEKT2hGvsksqmFjALaA6bdtRMapUnyRRtPqnEJY4ABJoJ2tEZc9aqocWY3sBhueSH9nYCbyBSgpc6TxRoWm9LG",
  "key10": "2QPP9i6VSAwNc8uHKydyggbJ3oumPHF7MMiBJndx2aCkzVMmhKrKoZtFva1reiBg74ZLhHgtMNZUKhTe2FNKMrvm",
  "key11": "21f7zs2EXd7cawFujgUo48Zr9S9UF2CZ6Y8vDQZq9xDJAJx3Gy5SityW7GXx1ysBNTaEzLsDCS83wfv8EuBTHgJ2",
  "key12": "4iz3bKEX48TcsQbQHnzkHGHcML4Dpop29c56V1si3S1JgA56mG7R6rSzC3MFinLyo7bmiSkgmL54UPgNomYTBYKZ",
  "key13": "3ijs7PYj7d8VB38LpCfx8q8c9bpoLRZjjTU1j7JXoFrhruyM7GtpTCpTVzeifBbDFY4Dmh3rK1BsFZ6wTKZ4VgZ1",
  "key14": "2ccp6dPnqbSEFsouoKU8aEfPWyYc8SPoJs2xr1SZ5q6UeW9cHR4fUfTQ57tdnRqCQod4s6kMzoxyLnWTDkmHQmK3",
  "key15": "oSHLUPPEYbMC57EbPJ4FBnmJLpEerZwAp67PHMWyouJLizXyWpUYhfMyBDoiyfXmMnD6dwudgQ2Rt42F6wgoLdj",
  "key16": "3wWwn3QDb9Tz4shM324wHvhwJAeHWScQhWJmtKNUZBaEyBJtxLvMkokYMWGqGnFRR4esVPezdoqFoyBaE8Eom1rK",
  "key17": "5xRUcMvrNh5HonyfJE2LQ7692B37HxQoKvE9WXwrRbNYoG15vp3iWqcxAyJKiM8SUwQakkbx7jB2VG6f8xpzWSx8",
  "key18": "oinsr16BMh9haWCY2JHBvQKzmvs67B6HZP5AR1aGgZQKBtJJAuWwiH6BBhxrLJwE7y6gy2VaBikgs3YhzAnXUKg",
  "key19": "dQtgRBRofhLSvjpebXN2qnQQ8qazeDSzxiWxNK8ukxj8M14SUJBuVfG2p9jTc5JLbp8YFGYmccAJM535tzhqgLA",
  "key20": "5z3rK9raHDayPzzU1Mc8JUSRXr5Gsk4ejdQJAqcMJajcfGxx6v7ws8QPnYmcAMaSvbCzAZ42pct5F2UJL3XQSGQ2",
  "key21": "2EaHnfFVSLkdFYUSacb7FfTQyNAfYn9HYocJpKzhs2ePNNzS8ZemLwnF4wmdZCMuQnYyzoyrH1Wm9UjjLCAhJxyU",
  "key22": "18YfF5kaPFTfU3ZCUgYNFwtdJExv6gHTjQXgZcEqWDoo814BGNKYSgJgimV9jposMrGsMbfrGMjkq3qf3WFd3Er",
  "key23": "217jLzxA3YedTArqiLpF1z81qH5kLVU3iJhHD6cPZmsoB7SydCcgKHz9L3X9wejZBSfxwboT951CnG7ejXmaEYh3",
  "key24": "58qciy79h1uGUthsr5ZjAbJptUCBy1AjaVMV7EYosPjarHTXdi23ULK62en9GYDYE9ePjuNFb26kDSNom15k1gn",
  "key25": "WJxGacoU1yiF6CX8MjJ5GJuw2AYsagKneSskrwYpJzyn6yueTYFyKP9M5NGW5TGTGkQikyN4PWdcLkSZs8Nrthe",
  "key26": "kCL8Nru2gTL2Hk9LdjBQ45Ygf3WS3VzRr1wymzoRSwPgdNzYt5aGWXhu4WjvvLrw2GYkuYS8kctyHS1dq4HPAS3",
  "key27": "sDLyQFLgmFeFaqzYFBAem21Yc1iX4CUJUXmXqxqS4ZEft4U3iGsiFgN55EUi21e3T3S44NoyKi8NuesiGihxNN6",
  "key28": "uM81KbpFJdUxckYzrKyPDMbW36gWBJvxYTgY7fvgU44QtqM1fqf7PJJ6QVGQWN7GRXJdN7jqJf9capw3Tv8oLUk",
  "key29": "2vQg4nZXiXBrVBZ1udQ8eBFpX1dcNDUDZpyXkhdW3xz7299FkornGDyg9YhVPzuKJiqPswM81zBh7N3mEt5dV2kM",
  "key30": "5u9UWmF3mYTpwWsyZnRUF2iCAjw9qwu4tyaUcEqfVXvtM3FdvkKkLsd6A8eCG81HTaiQyFZwWaB7ieSMkFcmAYX5",
  "key31": "4siHpaJ6xWwhQqNKprihLULz9Vfz465fneUPqE1JWxUfxy1rzVKaeqhVWPfuYG4eSBAuyYujam7bpnHLcKyU7JEp",
  "key32": "4jWEFKGifjskkEdDYVTbzVawXehSZgtqpku1BuhpJ9Pt3QaUdSQkx3yr78vFTrM3R5fH4GbCQrV7CH6EuBEcXNRE",
  "key33": "3D6zCXFjhD6Pi2TYzeLT4QCaG4JXDF4Qap82tJWB4RCq9jAtWAYPBM1jyV7DJPPx7N2DJBoL5MTNXe3ZH75Fwf2Q",
  "key34": "45WjYTgHJP4Bu8CMsa9cypnq4kvk1JcpDSRBebeBdTY8tfuyJUbEq4MGJsJX6AEuBZ1yXBk54Ve9FAm6e7qP5X33",
  "key35": "czqD9oFPmq48CxqYJMKmdEPtL3PZPoJQQ2YRCG1nDq4VALeeaHwVkDoBsScA8ZbFtxzYoCjfhcSUcXjSSyfEQ66",
  "key36": "58dsj3zcW1XX3x3FCpTKxWbTEvJiiBb4vKubpBM47beGoub4ejAaxDCZsEdAUnUmhqeQ2tiUbjSBQGwcxNyFh3RJ"
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
