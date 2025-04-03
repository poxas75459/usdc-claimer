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
    "4taTEdiPqT6GpHc2iFtwTbVA2uuWewxKpoKYDVTq3hm9tjspkxwtkUx48X568fXXDSssoYqKuZDrhpQ1tDyGSCJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3HQKD4SpvKVjWbrAfFYmR8zW9cKgKJM3j1nqzaYG5V1BAuiiKYnWuCnTdYxQgDWpXyoLEfo63bGXcCyu6j7J2",
  "key1": "5aUmM6fXvjGzXiq1ga7KLTjLVMNHKgDsfzMwt3SB1ZEyhu1aFum2DxtrPThCCsjBpvRsoQXGmFkTARmWSh5rz13q",
  "key2": "ccDG97yzwKjUACDorZU9WYHdGf5RyAkiprU5GkxQo4PwxaeUKmmK4zHrDS3naJJ6C2jg5ovKAiZThSpghbYQEUp",
  "key3": "2qGDPACV892JShQzacwQpU6DqjHLDEgEuk7qaFnAqkjP1yHzVedUNTh199KRnLQNQ6P7aTDEVCqbuchJFPBgdUNx",
  "key4": "W9ZmFrNfwQWxZ1UFkDdL2xd6HxjTdUBvRPzQw2r5aULYtZk8t7xeDQNuGmnfQbVrEhzbqLnN5BK28RiDNkYX7Xx",
  "key5": "5K4aZJUyidZfMJtjx4iEmMHtrzhFCxUsezLBE3i91fFM8YX6cKxNRiGKf9cwHtdnz9G3JpdsUdmMkmi1G3C9SsFA",
  "key6": "5w9XL7GkYv3M6iFSTTSX4E5MSepcd3R6uNcp1ZPPXBY2kpRQKbHnBLfDuCD65KB2Xhnz2NnBm6QAKdF6DFTtCs7t",
  "key7": "7GiTXND8fqcMhzenSDgxV55k2Hkca15P6YA53ZC67UtjScS4Z7ixHRNFPqBcWbHnMir7jZsvGUdvhdH85Bgp4kN",
  "key8": "2SKtrLUFeix3jbnE4LXMWTWS6cBwFbtUy7A22t7iagFbR9iJ2xsYbW8q36sYoT52LFZd8XywtM96h2seGph34TAA",
  "key9": "41vVMhVizB27n9nVvVtRHZWrMLd57fGYzsVY7iiwSF4xc4b4YPCPrRsSdzsLgFWCdD6XrLySxCauUXZPe69PKSKe",
  "key10": "4m4yajbXWT15cnJb2gy7s6kpYuQYgESE2sKvym9fhkFQuCSp8pLZLJtd4N4bKyZBhoTr6cZ32wU3xoJpexFr5R2A",
  "key11": "6p65gjn4QFYwPVhJEAJd17WEDUEZAR1Jqh8q9cJZfMuFj2gsZYtYo81b16MKbu6c1iWFQwApQHYgrShs1yZiBuc",
  "key12": "5n36iFmTJBtYKrSf8R1XdzhBJzQ7gaGTSiTMiYLCMQZhxfyQXchJCZbYPi8uEQgKtasmwHDDmBsUVytEGqVqCFSz",
  "key13": "9h6FWxgG8LKq6ct8D46pQu6M6RA45RTJox6gYwUSshP5VVzhy7KSKYgvfYfhQA9WTg5hNeW65CLB12WGAQpFPFd",
  "key14": "67cPhwuiLREexJ5hJ5KsChC8vdKi3ckxnDi4zVQ2cnie23fwUxzz4wo7Y73r94U25VFLvCzVnoW2V3dmm2EWFWJJ",
  "key15": "ATUETqstQSnS7dqucudiaTywEvaRN3FXbpnm37NxDndyxrGLfn4kbPYjAhEbLfrUG5LKpyEsU5L2Wf6Ceu893Ka",
  "key16": "27iVR2oajVsUNz2grCVbiQJ3df2j25rvbPtBwnoUqocAvvjvf7Gxk79wJU3ZPHtWbVhENFuF22obT3gTw4eK1XJY",
  "key17": "5i9dSZqUt6UTuCicS5Y4mF3vsY7DDu1nyYHVSUwnJuPFYzeHR1VNKYgVBAmSXft68Hmvoy9rCJQrkaSkvgjztUDB",
  "key18": "524dKy6AoGL3At8ibJe9Gi3Yt1VzrUwQpD7BR5cP5TDmNMy9CfiMRDndfZjG6C612UmoQVzgkW7p4sfHum9B7eeG",
  "key19": "2Dfdtfh8vh8DiYTsgTHeEJo73JHUx7uETMTRVDcfQfdnmQQR3zjdZYTiK7oo7FDfmPd6qL4MehBriC1GMZ1bfGJN",
  "key20": "2SJ2KJztsggxonkiguLYC3GVxTjJD2KvtMzdGRTBUKXnL4i88XKWPUN6HrpmbzG6AAmoRpQkAwrf6b21NUxEe7By",
  "key21": "4iq1aqm8oDHbK2uJhcLLqwmWW9ZpN3k3KnJwXhhtnDkBWskBWLsgfLnPe4h2bZBkPqAFedkoe2Az2CJhQvo3XNun",
  "key22": "3UWNWWfMdDdJzeAn9e7K2atyPur7dci9fbMM4MEz19PS8UFS5HexjtsoRDP76ZtfaD2qPvw7TLanM8BNP7CQfWPV",
  "key23": "ojrz5AFga5D5arHf58VQ4Ts1o54urj6i3eMeViZpJQ7C5YuAndq1hXaZLaNjMdpbLkM6mDQMwn7Rrt74dcSMfqo",
  "key24": "j8MGuLXzegoJ7dNL9MeMfvXGiQPBZMJSqdXFt7Ps3ZuCcK75Ax6nK6iG6Dm2DJcnFhMe1TmFN71QNCMA3XEw7eH",
  "key25": "YjVQKwwrvEmywsHGCm8qGikMyqD79kKxCMozfAAgzJP6MSwTn7uyt51jEeNgiJExRVRW5bNc9WsBwZm51Po4A7b",
  "key26": "5VXMzSiQUsamh4puFdCWSTDNBzL3HnVvj4h1WS3rViserrSupT3uAdB8nJnd7AXPjr7wugqJ7vrdAG89QccZwX23",
  "key27": "3baDFiFB6UiWdtPgrQJ4xSScbZDCZAUeqQtAFq1amdqff9oxREncaiKP4ZusxURMqHHkMkGxMxqzaaZADwDUXANM",
  "key28": "2aaTgNNoANjXorRhZf6LmtjCKwNUrWZRJuLgKn8FcmBtfSvxmrmHNBPE4ZabUokY93PcZ1xNLDxQVh5sYPm3S6e4",
  "key29": "4xLCYZ5Gj3YKK9KDoQykhLBL19nRg8qXkCfZg8KpDKD6mSx1q5G6us3zLpcbD1FDehT97w8zKDYEeQmxeE3zCuAy",
  "key30": "2pJN95vxEEq9YQeamdmbnZu32zQzmKmFJPdBaCg6BvmPM3CWu6LFPWRtxa5KLx59vTZ4pz9khS9qX62HhEJZQcLi",
  "key31": "4skghqskSwyh1b3DkNQPExGpdcKM1d5ijRyYBbdzQ2bAECAa1AYtNEpGaUz9zCoY3EuXuMif72yHqamueUhoE1T2",
  "key32": "3MkTvzJNS4ZY89Dp9xZfpZY1T8VqDyDgQgt5WT8Y2cmSSuu87QAy1hp2eFfE7ECrXEegSLBy6rHNQmSqtwES1zjf"
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
