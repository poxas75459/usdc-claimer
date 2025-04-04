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
    "4hjLWvvBRWMJCgmwSyFhVMuVeGC1FHHXaHvCiVMxFw8zZE31kEyDMcTPDiz3PFoEC8oknGX7y8mcLFxnKAYpGZzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wTHxVWqkstUXBUSqwnBWwV4CSkvvkZEvqobxtZpT7rvHxYKibMZMrph9BbLbpTPR3GRKjtb7m5EqqLXjYw69cw",
  "key1": "4vVRxhnbe7DrjHx7LhehdcjfqsgHq5R7D8PuGNFVDvp8bmZYC12vtkZJtj8EY5NHRzHGUJMD5JxvT15qe67dJ67a",
  "key2": "3pBp2HBUxTCSnajCKfssTYszX11C6uFoPRzuoRCP2oMgL8ARq3YnHyc7Tdz1dhQo1rHwN4DaT4rs8xMaUyQjGuuY",
  "key3": "3f4kMqkW5pGiiSi5LPoVCZqVu4PywA3qv4xYQGEj7MeapGWSW3mU1C51mAepUp9PiNMTQcWdXeBBeWWi88VB9Y9u",
  "key4": "2Tww7JCb49cNEaRY6eJ2392717J39y3HpSMcmQa1A5uf2mR6MwB8qyBSybT5WMHePSSgQg1BV646HP7E7DwNCat1",
  "key5": "2avuVj389yWqF1gfVffXPw9RHLgQsxJbWbfCjsY5EKL7q4vchRvxN9ZdFxzDva1d4p2LfL1A14fPLibcdQU7Btce",
  "key6": "52dWWwDivou9RiQXnphGbGjH1imkv2bG7txgMZ9Z1amk3cqUhcFvLf4XGYzPccE6rcUNj2pqntR2De6LdRzX1kgU",
  "key7": "2HbudizyEmTaAi8T77eNiwei8A79yTu6deaLEAgpAJka4syiZnGkBCGFw1NJ8T653yLwjzpZRAGqpJW1BwHsGobF",
  "key8": "62XTNZ6gN7cnhNQyFiiLxRm7vHRJ5HDkN2acZzbDU3MHSeGnAj7LcptcdXLGpYuS9cuh9aGYUQoCwLerHKa4vCGH",
  "key9": "2apxVeWZYugToMR7rPEHV1TDGL8iU2U2axo5Q48aKbkVVBZBYTtt4rzP56ChL8k4NgttJRXS9tAXnR5nwahSfhDY",
  "key10": "MHC9RY6P7xPAbKYjFjXJKhxbAvVs4kW8tuo8UV2rjvFyZ4Qv4ENi9uWbW9D3396rhtjYWhxqv8jjuCT1LqXpNpy",
  "key11": "3MRG3QkpLdbpaUonH2omgxJ59zkTHosqw3YBRR1FiTtE46pUXZRhJw91QBhvXXnJwh8pN9RfVr1mDjYok9mPdYw9",
  "key12": "4YbLeGJQ8ty1WYR25tYx9cG3yzF6K4bf2iqvtRt6DFk7PcptbjagraLjuKWnxQ9ir2qvmo3QPx2q7EqwJVty8tAF",
  "key13": "u6YWmVUSziPUQdrv1XZMVLKL9YEJyDDqiyxcvjy71Uba5aVou63U9RBcTssN2pDxbuGDgiddFNK57mpPeHhW2qn",
  "key14": "rmhNyr9xnsZXsvHe3fwDb1PUYMn7DTurf6DCTzY7XUqtz99TVz2sDVkTWCRKZwkjKhWo1tYayvv1KCUxrBHgN8X",
  "key15": "5vGWgf3bEzqyFwKidXK4JjuuxXcZ78uarnuHbrWmW1Ad71b32soStmqcppKHR4z9EMXZp8UWytTD8nxs7DaCRTt3",
  "key16": "5Bm5kg4Mu5GoMCGKvM1BSF9x6kmZ2LZFYhp4GRmZRvQjD96KfysB2e1iP6rQfWLue6riSduLMmu6rC2CHht4gEop",
  "key17": "5r3s6aBXNyJH9Xsw2vuS6CVub5bfgQXnf47S8tmyWgWw4X7fy3eXGLjm8rShGpRrxCsaNqWyiQDTx5LZP2xsM13",
  "key18": "5UxwdAQSvrjmp6tmzWaBXzZ3xm4pv1ktot1Gu22WArX5MRdnKZfNZ9i8CUfonMkodvgLeD9smfVKNVzAYd96Q3zz",
  "key19": "4xMTifW3xKSSPBebs6zwo9rSNrxZGo9VFovdtyAUgUuwajp5z6ZvmNNs5w4zhk1C6eESLHBn7ntbBdwcMZtdzEMV",
  "key20": "4V1pBMtbVkhjan8Tr4GspmNc9n6ocFPZeMmMTssdkptGtD5PaaFoB9V6NVW5E23NYfnfVpxzsJ2xWbzTuQffnp8U",
  "key21": "4XmfoncDsZ97rjZoKjUggQ4fZPwHW9WnGDrjTzuaR8nzxRHBypFH79R1umRnWRtLUkWqoe6exaMsadxY4theLc31",
  "key22": "3fmRCHTPVNk2LxHaz6gioqsm1KjGuSrDZRkTF6YkM83iMqij1xCUp18HhN2vDE4apKpbR1yDF1WTz4HEsRvvms6s",
  "key23": "syami9CXe4m4GyEw4pvmA4VTNc9TmByPFgJbD1cd8xJuYRjAVYnH4sjBBVVeE7iKhAmBQt7gj3BcyGNgPBvKBoM",
  "key24": "3R5AXoH54UZPFiY7kpii5i89HnHJsZHdHPJY6bBAVzcuvPoTkeAcB38NE2AqnBLkq6fgEmnN18Cqu2L6Jo2mNJBm",
  "key25": "4rpemDuFZbq34yR6qT1cRJsQECrNQ3Sku5E8aaP3CmfxAndevWXGdr42fxvvgkkH23jcH4cgmHwkeJNUxCUCjWh1",
  "key26": "3EbEQmrjxibxHqhGtsqpRQgJNNWMdCGR53DDnq2HoqYYYVmvV5uDCmfCGux3wHqV4zJS8JGai6ZuqRij31LKXjzJ",
  "key27": "42mgzau9WooSHw82NQCpsqS467Sb4azpbTTmJMrn5DizFG8qYUG7T8Skgag8bfyBukNQEcWG73FKw2mwNfV44UpT",
  "key28": "UdTU7ojpADTzfT1LqNZ7TSt9fgzVEXj5xf1FvizvWY5Ye5oqzSstZL8sXpQgWNxKWmi2jkJMDvPcz8qZTNY4g49",
  "key29": "2JVW7vyVR1LyXnXi9ngUAgRtRcTuvXNib3S4UF5igWRdGQN6pUK3uHdG4cBaELCo7Q2eNbBAzYQKQJcjt3Dufqt6",
  "key30": "4fKVhGsp1EJHvPQYWfyAHu4vut6SSkKj9W9mk91uTnodBBPexkitAZkCErmryMWBKNhHoBdCyGrskEyHN2B6WsYa",
  "key31": "3aM2rPdddgzRhv9KurjX1HWvA2RGznz6391FwhbV3X4CrxpPZFBGDSRLddaRgV5CjVJ932Drcb3YNWRzE8iLnyoR",
  "key32": "5r4vNVoQF6xE36xVrGwKyThAuGGpfvCagZos8qrZxHgeREbmZioKKX5whKo8yevyUDaQyYdadHEaPRFw7nC3b8kj",
  "key33": "FUJ4BxiAutonFxqysjto6KF5jVAoLxpk74p6yptD7MQSVtfGJDZ56tVR5M3vnHCJWJ1dyzABT97VPRvY7pYNjxa"
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
