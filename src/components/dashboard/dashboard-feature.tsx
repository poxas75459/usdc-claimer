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
    "5ANXpXyFKMDLWfnUYMniJXqenXuwKZwzYx7Wf3BxDStkxkP61WuYgqTvYokxiKH4WpaDkd5iyKQKqwBQBNDAJSV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEHBde5z7Sc43joPaXhkKHdgBWyVwUxC4A5oJiqK9aRSRQPabnUXK6UyNMwAwgeNscx6oSyfVXJgqytqnqLNPJC",
  "key1": "2iWauwtwV8yNrsdRSvHFUS78nwKZM8qZ5bqx7ZbiYj6nkAB2UrRMAnz5oUwVNef4bMNdKRoAWrZnHx6Gf2P3BLax",
  "key2": "RKUQb1jLkyDiygKn189N6ZgmnqFW5RGqsMGmTiV6FSAteTecen4pnvxrmhBch6FhMFCQEnmLCq8aCisMxDQZucC",
  "key3": "3VA7BeCbCrENyJ3wmcgFJvm88hHY11n2nxpab22yisZwrSyQaAeYknZshZwzpL2g8gfYFBYuwCD5b3Fs7CJB6hpf",
  "key4": "62QNyzbwrZZYHPtMLm1N27Ph3NDn7bU9ZiGvB84Ew3KdzoWQBoUreACNmprbrYFKWmJowrADtHfrCoDT6rwXeApM",
  "key5": "4WJEPL9gw1BqtbZ1vZpu1accrUkHqA7qY9Qe53BGvevtohZHFEfeKSqJk7GUkbM5n3SrcYmf3DBMYXWZNqUbS4ht",
  "key6": "CRUE2b9UwJqk5oPYV35r9YNpadDH4VSmGcBaXBCe4hSwdy41QMW8d63KYd7tXZmDBWZ93B6d26wHkLLaJBK8rvT",
  "key7": "dBDiwWcPNcKpVtYTneazszMS1TymEtWk5CnXxMhzaDkvxcueBoiDqdtpTvThTaaRp8GSNmY2x6WhijAFax4RR6P",
  "key8": "4GfLqgPy1nT6pAMu4GY1nZHTuNodBcvnQUpyXKteKXeuGZaW9EnbUg4J3MN4eKuXPHzsLGTuZYLJCpJ5ySMmbiwf",
  "key9": "5xhYRszJ8knwFzrDXV7y9ZZgXBvoZdLQU28X1Z7cum2k2LXemLuWWEP8nLBpqwvJsvAbCDNBzkxdY2G3zDow7sCj",
  "key10": "2g1EnHkqBC9tHvsbta2rDzomD8sFgoadsUW2mgpgdqiYzDJtDk3qYcKbgUHN94hxaR3GC1Lief1WC7wom7bWsajX",
  "key11": "3WtQsoTEyHiWMWfTUVhp2bmF1NduZuT5V5aPAJPjHe4U5h8SNaaTyAThq8UdKykw93fYbuw23Ts6CT4bJzZt4XjF",
  "key12": "5hwRjkUHTFeVJTJXjAyxKMAi2sQfjawXkj761mqcJdJLVcTctxLq391bE9Pk1ZBuHwoVe2m85wwn499j3ubujJUE",
  "key13": "2VeMnEtTFUHErwjGQJ4GzpVLc5jobsi81g16QmvZLMJAfx7b3hSakAbGSAZacGjuVPxiFJtnfZFYSjk4g4xEuLDX",
  "key14": "2fSQ2HS3GkGuMiVWqjEFgw7CCNASLBmZLV5gg8kESy2jgdy4BFEFvZhbpQFnf9XhmHCM1YVyGkgmzttZPNc2QyQG",
  "key15": "583MFm6WAJs8nzE3CFry5LNAx7E15asd5U1jnVQqCqxJFFnmYBYkjrecRgzxhBWZDymwFruGEM8HUhPy5NL2zCua",
  "key16": "3zFiragiV3p6dZ9yc9yfP3E9AayoaV9im4XVfibQgPSBPJvGt2ugfAhGpuj6bqWv8FYbUpJBrVK4ko6UH1vdkCJr",
  "key17": "XFgUCpuFkVu1aGaCagRqtrPRyQ7qniMH4n4j6yA4FyyjW819MJp5s5e6TMtL69eucjRq2YP7a9H3aS3dJGo4qY3",
  "key18": "29jSzVjTcyEiiB7BQzyw8Umjjj94pRdGLvpLyx6NfmCMkERFVhwGCnhqRxk92BpQhFbdMatCgPWyrjZG6VBycZVD",
  "key19": "46YtJ6J87cfAhJSVJicitMx1FUkXJierBwCrqz9gL2kH3YsmJMzc4QNTFmCCF4kKwoBn3GeKsoa6V4ksCV7mKT7K",
  "key20": "3oMPwVyWgkhSutuWKqZniZ4hbZ24BmXTrf8XwXxzWHJsvLxFzgN9p1n2yDBSm3xh4GEJva8DRgejEtzjXSw57Efu",
  "key21": "u4V7YoNV352LGi3g1dbH5478PojQq7D6SF7tSn64hw3SaFcS6b8qV6YUsYz8mJy8NCo3kTZcd5qcqqYdueuma51",
  "key22": "4YnL8CX5wH4VRBgryQAeCHTxTjc6DNZtJVtjPBJb5i3JURuAZpe1Sn7bNZZj8Fc16qcMHqesRv3rSLWoWkGTcVom",
  "key23": "52TfVhSM6csdFYN1grXqtUaDQi2x9HH395Fdy4iMKjC6EohutLjQqDhsxysT9ig3Fa1jCfKwgqk8EH7TVmGQBYPY",
  "key24": "5MmtM6UswmmN5CvnFcvkRR54jfTeZKMkYtSFauLAmnpiTFDrYx85vphwqhXD4LgyNYYTS2PKZBrdFjFMeBSGMQZw",
  "key25": "3wpMT2HmMe5Xy3oPn2LcDNBdJo4Ypq7vAkpsWiTg9bdEkkqAgMXEairKvAXJo2Pkm2x9c1aTa31RuoCoi3BjxWYo",
  "key26": "3RATHb4LNDpCfDwYzpiEB8Fz1WZQXBmcRuqLJSEUmzRvHGfZdHKajbycVwXrzGNUneZ6PQoqzVNQ5ZXuEj1FTyEe",
  "key27": "3WNf5AyVevq7Fz4C7TBDez9jjrCKFdLcDXwiHhijTFvAcVG6C2ahcmVWR3Y6hsZxcx6jkLogaW6UB1t3Gtqbxv6N",
  "key28": "446suARdoFj3anxuvRsRFDQXP8GWWYk8QQr1WdJPXFMx4KQCXtdJfnpF7EeKc2TmJStDFdK4sco3WsGzW3PkN6YZ",
  "key29": "5iCUbhZfphsbLzJvNVVaj2WzchDxXqZw3VXyx2V4ULWB75TdaoVjVw3bYwo2PyWCmyzhXaeAAcZ6Gf7yHyMrYkg2",
  "key30": "3qMugJCqgGCUMXDZp9dnUBdnD7PnvUcTDXQP4CKFi27ZGAfTFNb4qYD6ZCYP39fXLitdrvKucQEr3k2v7EL2pFYr",
  "key31": "5vzRA2Rydeyckw2SQtjCmS3X15PAX7Acc4fXLUae8P3nGB2jMKYbMa9Hai2HoxYvwLWZFeyWgGFCzmxuGPp3azja",
  "key32": "67PKhmASatGMN4YoEzUc9AqQFJqPkhJkJMWiva4xzqc9GH17dv1Rhk4F9Fn4x6iHSdSyW9yguxfvprKkxh22e5Ke",
  "key33": "W8BnVFsh7vtNa7FtPkizjpF9MTvaKrswoyGCAUcreJdCBgYR92oBcVWnJajLKHxbKrrwDnWuckDhuP2jkX7GQ2X",
  "key34": "4tLhswbr1wNgeXZiErK6fCwg8bgvP71q2HswRkqtA1xiGVG8YZSZZY8sMFswBUacV7mpYUeqa2hGEKhkA1Zp7onX",
  "key35": "4RJeV3AxHZqWHCuz4AfScs7uzZkFb9GuXjb4QY4Jry5tYn2UG1XyMiCLxTociCXvae4SL1VT82AxpzhWoa4BS4Hu",
  "key36": "2LjtSpXHchuQnz6WwaoDZMioFroigbHo9UEJaWv3V8Z7UvuPvFzsmBocp3m6jiwpAG9FK3BFArRZiLHgXN4xDKV4"
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
