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
    "397cUGVu7tBifRCDJhRFaFHya8gM1pVkvr4C8X6YMgXq75bnUq1MTNb5FW7aHvinsGJJHmf7pJXkmBoH4zcEKPLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEWH2L6aykN8ZkacdQZL7BYtNG2WhJLGKNxSuH6E63Daoeypg6fYC3prBWUyV5T3zjJjzCyagnNtDHhta8qvodT",
  "key1": "4hMx5iV1hndBLLtbhJ2gHZkE8nskJjvU6Na8q1roZdboQxWqNSw81xqq8GNdmQyZAJ6fKVxYWWZsUynzk96v1prw",
  "key2": "z1aAvdUrzk2ZqNixkPxSicoAQco35MkcsdKafUh7BRyGgYktVMd5axqKceSXMTKTyCmECrsPB8izWTBZXzWTJoX",
  "key3": "5RsUFX7xkqwUUyhSJPZUAfYtZW4YsxBCgaQVzWN9gmJ5JAtUEeprYFmzwnnR7uh9mkvycMezNbcopuRuytf6mVy4",
  "key4": "2QaTmmr3Vrw1ecyhnjxg7heWiWBDRtmiuDM6cRLCnSYQMp8V8HFmehxoB53jzfZuDXW2nG8Cvejdrj9C1s5bLAs3",
  "key5": "5wEXUbjTbtTi7nkegnzCAtBfr5FpNjiyNmvgYw1npbG8rfZD7UtMyM528q5G86iW7dkSy9ovbJemyjXydfBMUne6",
  "key6": "4Psp6EuU7z41fnGQginLhfwBXvwGqFLdG3hzedY7nFob3PuvsHDAFiebRuDBjqy8KnT1JrwkQMGwgkyFfKDstqaN",
  "key7": "4tkoBXH3xafQ1w93Ycohf83iFAPtPKbpD2jjQ6XTd6aNGvWb6RbT52cemUen7mmLgV47BqMVpbw1RvwDbPdnqT45",
  "key8": "2ayEG946Za4c2fDCELq7jiVDmivCie3EKCsM6T2ASPbng55QtM7CijSy9cvPXUmgFaKbbxWkKxFJLa98drpoviY2",
  "key9": "5voMhk6fpaE8ZJfdsf5juhqnW4Hr63oixnyGmt4bjnpZiSR4qfKRVNJA8bM3VoLTvAK9EhWrYJmWsC2AaTEJLLN7",
  "key10": "rnREcmk2ixh9UYVCz1Fgh9XHYSbcEeC9U4AxPPHcEZVqAPPvq4uCqGzgb1H6bZm7BVPjBXs2C9mjKaPWahaGhEQ",
  "key11": "5ZKDn9D7koyC7CpoLA7RethxNpGG4jqF8n1LdD51d2xzEjZ9VbZQkrw9XZECMfrhXaak5c7iD6oA9b4dpzB2C91d",
  "key12": "2QkWJjhKCy9JCU25dgNcnuLzqigMzUNUbJKNTCxwBUSsB3gDcpwvm6TZ8G1q3aeVmabKLz8D7B9rSD8Q1ezotPMx",
  "key13": "2pCkBkegtsKTk3NfLc1YCKzSwW19zYqk6TLAyLq1BRF6aieXztZFnMFCS5iKcy8KEnk4zbvzaKv1tvrBaeewkkg7",
  "key14": "5qbcS4qVJWZqkeRida6m6CvcaW2kawiLy41V2mx1XPvZYR6aYsAdGsUiyBDtuR49dtBTwJvTLj7ubdq4M4rSwBse",
  "key15": "43suVnxZRDqoETJzk3rpPNWnqkeHYRZrNMxwi9SQniAiTdh5cpKL56Zu5XggkiR4sRDWQ6KVRSaTdcHCa4fP1fNM",
  "key16": "5i4ttb1jKFPv6cS7CenmpASg6RKzpae5bHZWGcVvMd8RZ3ag2in9bgSoPB92aJGr39XS6vw7uTp8PV41X3yScJEA",
  "key17": "35SJYq2Zm12nUVoVdEpxrvuptdBM4wJfCUYfeaer5YcnCtwkvYR3j2ECFJxC4RS2buxRHJNjhfVhUmPLEprqxjiw",
  "key18": "4S63ccn4fAwxSxU7nDRRJznoj77PwzNb7FEfMgWTB4WQmQGAdBRP8YHQQoa3orJwYNUbWt8CHnwNHMQSGUM9H8Pv",
  "key19": "5STAaPKSgd6opVHenEoULHcNaZeaCVWNw2NMsy6KqeSdTYTdZQ7JuHjXttZofdS8bnAW4vJj4mbiQwv2pf8n2os9",
  "key20": "wVg5vvVqBmi9MWT7Deyjq8pWEikuyRschpe2D7QKfCX6eojEWiCf6xGEKM68b5MeW8bEp7GZE3axm1LzVWohPAV",
  "key21": "54fGsCRcgSaoDCuaK1Hu6tj8BnBgch5cVhNKQQGzvhcoRf5bYQJjhCXwRowux7uMuVBNyeV2SjqZGTxh9iXuHPgT",
  "key22": "4CZdj4He7MosbPEjBNAZp7LWNCynyks34ME29uMqJgn5TXWqQ3wh12vHZ6P9dYNUMUEtryRNqBsHNb4yEVQFRSUj",
  "key23": "65kC2hnyFfG6S6o53da73dhkoojzLyr6ddtesdMf6xMoue8GxgHzhTu6nN4jJNqrUAWbrvPanzyZ3dqE1owhXJ3k",
  "key24": "356XFtMy15obKJXxHBk9Vy5VjCPNpSrwAZ5M6ob9CBVmay4UZQ2ybVryKiwDCSFcjkLaKYj5gE1BeSRdjDYHiEWb",
  "key25": "RbLdPh6fXi1DUSriWrm8kjrkGeQbxQZJPKNbEZDLB8KjyVwLDxGBUBXZuKWp6XP5K2Ro12GsBx2qnjuiq4DFQnG",
  "key26": "51zsVZ15GCUijAM4oCXLXdah4faWR3t7xBrRJvaARYGkQWFf6nAJU3dCVX1x12b1eV3SnbEXXzj5JMVxRCg1BSeK",
  "key27": "37XHY4742tDuFBkucHTTKPCAbruDBDpLbvgYkC1nHhzLGur48tyy1g5KcB9s46odKBbg7Yb9RauLMoY4KzrtuGqA",
  "key28": "3NBrNsrfReEtShBTWPDfF68frPkvRo8NPZTduFUP6jQ1RErL8bEqnBCLnLKDtmmeD1VgddqB4Z966rsMP7w2ZhJv",
  "key29": "qsBFqcHVLzXxUsMY5yDJkBocF7rEoAE9EpXxYzdyqyzrCFova8h5dnNd7A6sVozmwq3KntC3RedVAu4FvuDRfsC",
  "key30": "58RiQXzEaFoe57G2XsaTRshAEX7ZY7GeNNSv9ARnXycMHny7GzjjLLZsmwvDFVYxkiNCkgubrENCYApikLwbPDHP",
  "key31": "2iCaeHzhZ4asDm3v4AfpCJfv8gCbdUm5FJz5qCfYkgMSr8vM7TtnMTPRa9GES8Lfbojcnef1mQmSWb7955p1rE9b",
  "key32": "2gLdQwvyJ3M9qt6BrySUXwNscLtuvxGrYBSxYtnhdGnWF9PmeZx2JTqBZAQpnVEWf1SgjS3fzkQdMvnWXgbR2U7j",
  "key33": "4hrXMCMSuM6ZYaKzYRZKEF2mGVpzAE8n1EmcSU2EFyCTxoEQP2hk1WLAj3wm6FWzZLHd8a2UwckZgSaPKEsWPqUz",
  "key34": "pnnTKDZnGCr2CvzmSr5DHypqZqsoXUmQRjyDU95sg4144WvrYPXv6X1k6M9C2eiu1owpx5Ue5DuwFE214CvffnS",
  "key35": "2rS8wEVrE5atzTRPL3GQ7n5GDmmRKfqcrDSthKNvuzdkJcCHW5MzNLorgYBJ5ew68Y49nW4zg1L5ptyTN7dUb5SH",
  "key36": "4GgcGLFQPWUynq1kgPfPJGVbWgzvXf3nSP11AbzsBN4TwJ3pmMCATv32uV5pApNY63WqzSNn8hTt3b5sfnsnCHsz",
  "key37": "4CTfNkiUi8FRbowswJur26CvDCkVX3DARaH9Uftbu1k69jPnmVfTZJBh7XzuhUxwtvgLUPka2cvdDmvkhTYc15rc",
  "key38": "5V1N2sMQK1Fhfyh6pVy5Q78eYyqYWBTKD26TV6awz5piFfAP7PFJJPrjkMpegf4S8ecnV6gK1U6Do3iEHv282aZ5",
  "key39": "29XSNZerCxRRnjpryPzN2ComX6WjLXzpsda6iNGpmEfV6d3niRxhh1BCGsJf3xNnrVjQCywU9MUMsBQHq9ec8PRV",
  "key40": "5RiStaPiPFToHJmWkiDsPWzV5crQXwN7V6mae52Nz66tggkCVb1UdwHGt3DzrNWtPowe3mjUNgAw2uhh3XGfL5HR",
  "key41": "5pdULqhDHVKaUv3oMSdAkUnA1J6n2HkCbsbZDThR4PncHczeiYNZEaQL7zpckD2kdvFBJmro4gpTGk18mvuxm2zb"
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
