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
    "LQx34ABpDqRSAmqgCc1TXm8g5yFjooYBeSswaSLnjfAermQAe5HJUUvcLiJ3cTGhsjuBCY9Axq6KktzY3m2LGaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38UtnB1N5hC2N2k8kh4xGBNh2ewgDpzS4oKqTvurykUaZNn1r5ymAsMKVggNoKio9c1fVN1uwrszad1qT8yQeHJg",
  "key1": "36niRVX17DVnZ3vvLc2AVM8CJnfUDypX95h8vgSFPAqUUHMS4q6YAgvHd8X2BmTxSiPF2z5ycjhB8JNeKHq9wgmD",
  "key2": "5uhuBadmqaH2zmwodR2naUJvTVt7L7K6J8kZDh3du4smuqjyt5wQkE2RwLTfb8kwWz4MqbapUgD5UGfRNHhEG9Ym",
  "key3": "3rR3CChNb2aKwdUqER499iQGr8E32Zz7Cp4EiNHJYuqBYsjLH7cZskmnZFeWEPFGMYrxA1pmJmmPjpSPbZrnbFP4",
  "key4": "3wwJcL3kTZXXgkhM6DmwrKr465QqvNpbCDCah4mKg3XDQGrUyM7aShqmbaXzxxaie3ATzbEGNU296EdwUyjfxAeD",
  "key5": "47it5sbAR9Xbbe9TxDTnhfLQd3cJxxehZPM9ZRJKDixVxxA1mHawF6jye2MtJte9MxbFwZ674mecKU2j6SWN1wFg",
  "key6": "4o2sMQDC7JBWXMUZKhNkU4LAnhB6WvwM8g9k3mBHk9PcruAMTwNRwcVd6yGgQJp6grJkhsrQaDuRUHzf6fMA5wdi",
  "key7": "3SCXdi3EfJRTgEjgWtrBvkYTjiZiynX8zdw7B9Fns6GNYeNxFvC9vAZeG8XE3rALc8XX69hjumJv8x58GyS8cg3E",
  "key8": "2AdLV4vVbW1XVjxt2akkkKLVVBkpbjCifFGcMkVz5nNpANAwLF8RMgaYcN9Nn5heCF2HSCZFToQRzGfdFesMqs15",
  "key9": "5wwZuMPpPymYkSmtATBwyD7HwB3qn9mmPcz265Sq2QxGMrpPYHesr6pyhN1sjz3oygVuJmvb8y6EYvhPYbeyt1zN",
  "key10": "3uqxEUQpNK7ovxX5myVGWRt6LeS7opYevSJS5dG2dciSc4ERLTrbtXh7VoAeiiS7v3TBBp7WVKrxoe5ez66yzTBd",
  "key11": "4nJbFesCPP18PVe2sKxMLy8JJbUk8KPpEXerG1GaHWFJzND4ecKt15fRwZ81YyFmMQoMr1KMuoTs2FvowEete85a",
  "key12": "3fMaQMxVY66wcYGebCgjqdzF5qKpA8HJjsYZBsn3VpshNDdwyGh6g2oavLqrfb7EMxofkNiLVpgb9rcHtvYQvVm",
  "key13": "5op4Pm52x3ohdBAKoghjQevqQv3yP3MrcFSWTbz5VqqRcR76Ld4CJdjdUN3SqKuE8okLucr2oGMGfgaRG13rR4qG",
  "key14": "2C7MnrnKyW5X1DawW6ExKyf3NrtAXRcTydcUGv5NLqwTUcgktU1GCBNCJHgrddkni8bV4nggPJbTAPCAejwxCWKC",
  "key15": "4fnWqSvYmZuwDDe5nrw4e5r3uHiK5h2MsR8tuE3zQNzEFhsiumVVFFRMqNG3GUFvucBcFGm9gPdmMbZYE4A8K8o1",
  "key16": "36d7HrmxUYaPAz7raxXjTaJDfbhg3Pbot2hcyEr3sP21fDQCU2pQdumzKHHaEZSKUYKrbqyqFLZt2xUsGaxwj87b",
  "key17": "3Ce6zVSQKwYdWeqfyWzZpcEpp4mCUpQLiB1dtpUvxaX334Qzbojc9ZWJCL4vN3Sor8Rm3cT5TwtUvDihaTxo8awg",
  "key18": "43vZAW8NGCePx5vDLTLz4x5ToA5PQ5LkrPo7JzwZGFw4XVCqHL6FYgv91dpVDhqJwxNNuPhLJfvoJ71o2ddTS36V",
  "key19": "5n2Rm2GzN8HGaMggDnQek5pAUixQj4kiSiHrPDin6QJP4k5WcXEHWTfaoUnCfiqPDLiTvGUJYkCfxgYcVTApsqoM",
  "key20": "3ArEUrcL11dM93YA2VooCbkrnUQNRJQaPv6TCPAvcRBQMmrqdoVTy61hJantJhAwKtexSBMS1bb6Q5ddNshYKs87",
  "key21": "5FivmKhzhF8jAsU38vsykX61K9jFaFucPJTQuJnjT8PGyU3PfcynFzmE6PAA1nijYtLHFoPxZ887dfo7w8ysFWcr",
  "key22": "2WxYk2gaqD42GBXrxPU6fP5zdywtvaMN1DbjWa3xL9MZmndBpGtxKbDRSB4nX4eWKVdxdUh5ecL4QDNWGHg59Ppy",
  "key23": "4NWSazMavX6B8qitzbfvrt2enb7ANKkU4J1ABFrmf1AuznjZGUzL9qEHxwy3csrCCvgmSX6RFZexfBjBhYQE4cMg",
  "key24": "5SrsHxRHTBgMYAyHnDdiy22bvNaLFMvopUMDsuRiXSY8uacpTPdzvifsXPAQG3QKEqYVqqLCPEU1G4j29jq81oS8",
  "key25": "3gr9cuhuByaf2AKD8GzWRGjLK5P4PSTHDYqnDPoMBLtZZyhTkjyyMpfDhVBad7WcCvbaffDaxN7eJFDACJhHLnY",
  "key26": "4PDw5RhizVB3ipcXHhaFTPKFtr7DRpgp2N4p2bc9DUWxbvmovn9avbwvEiBrvkfdu1u1NnGdMjLNHvkHHkMEZiRz",
  "key27": "2MpFNwrxCNjPYBfcGAyQZNJg761uPGTZmKjDLQy2iY4nCXGpjWbngtEudr319V9eWwmEnq8GUm849tngZSAjndRw",
  "key28": "5zVbYmWEyGhfbLc4rXsWq13sx4BtAzHGzEZgtVvhmrMMGn1BFCxxYRMFeHm7TsvAdMp4m7CdEWG98FuVwD1aa9R3",
  "key29": "3ygeBfS56a8nwevndSFBzMTwmBEhaw6a6MmFUgmMJ3LT7FjUPRBASDny5h1QA7DqCcLLroPBU1o4bm6oCyExCoFd",
  "key30": "3vgJdWoUBw8VjXbmX5wh8FD2PRW8UDhoi1yVBz1ydRd5BdiBh6AG3sHiNDRBVM6GJhprSbXdE5qQ4pwakVUdDxPn",
  "key31": "2pET6Nbp6oPkCrK2JL6wR4Dc6h7CPdDkuxZsmtnafHGrLmXq4rYq3fvdYSN1eEZXj91Y2t5ZAMYjCUnGk6v9MHHm",
  "key32": "5tt8cXPPNBfdWLpdnhtWBQL67ubLPAz5Ej5kzpSmZFpV2e9ZXN4ztMpC6LRsyq8djKGrQ6wdqTmeEDwE48PAGGn9",
  "key33": "3UGmwS9TPYf6AN3FDbBiPBV3CVuYtRdbwLVjNTYx8qq8dvxGeGNi8qZP7rtgJCTqHZgP6gCzQrv3UJezdFwKhDKh",
  "key34": "5sgXt8Q1Yi4u2kThbZkh8gvtVhxXMD1HBfiKwPMTYHS4v7CeoHnzcjBquVy47Qjszozi5mmGoVzNWNDdmkfECGNQ",
  "key35": "43W4r6roYWnF5GdTsXhRTUc24QNVxRRQHCbt8NNYcYaevx9gVVwbdckZ7QdUQwLr2yfsfKspKsLvRJr1t3w7jFG8",
  "key36": "4BKVgJgbpqgtgtnYDKws2AzT4n9C3pvuyTTKzLqPt2WRpHqsocED9eFVvr9PnS57QA5aTLtoK5YGbnjvrV7AKCvw",
  "key37": "ZNNudfwLcvndyDrbhYvMyoEeM1GMWATcL7D9ez58VJajATm7JtmDk3dNZEcYp6DwiFMhWyizZR2wtGudss6JFuq",
  "key38": "u5UvFXK7qY9Fpdrho7bJouG4DYRAFjAJYQTfCgP5WQUtRNM7Z9MgnYEMz2qAQe1XV2usp6aECh2HC7JztYzzHV2",
  "key39": "Exe2R848iiRuhhQmDfcceUuURaBN7hYg2s2pWgK1FPRUqPpgtoDZYGeWXyBxeibewKrueHPLXbGSf9s4K2wivFa",
  "key40": "41QRSBbWrU95RHJJbhwGkvksvr5ZyBWQqTnA5XGBBDKFtY3KJMuNiUnJT9j6GNWpVLaCvtZht1CFJsiTHNTiY5d6",
  "key41": "2NhfMQS927yHxHUNboWXvNbGdJ1pEsFUtkZYL5qWUYYNpRgTt6xk5W6We3689Qii2Soo8txkoe3XtFWCkQkg8zNH",
  "key42": "Npat3iayhosQb8MZ9qTVr5H44ZyhaPRHKM5VuBBhWQG2c7CryJkBrCD18nDMqp7WzcSsv2pD7QRdz9kTQK3NZeV",
  "key43": "2eveNju12GfZ6BAKetxMjZFVpuCJVJpDCeMoRqeUxbjcCUu7PMpP4zvv8NgNgQEWkiAEYbqLZ5BmNxH69XR3Dwmk",
  "key44": "wLYBEhXi5r9JxjLFuENKNQ2QAUNPxnm57yq9kUPGUr4GUDexJZj3UPX6c68eCJknaZr7ibdxAuYxRUQX6qsGoPb",
  "key45": "2YCmYkxYpjuudLwjhRWh3HNkvRHWFrWeaTgxnRe8fyvhPJuD4xNnpjeZQb38517vKUVn21NsSBDQdmT9giFcaniv",
  "key46": "2BPktvbYETtq2RGCX5t48gqFP3mMKwT9Ejz9xeWy9YGshkYiydXV3wcAeEjwSBRPDEZHYnPjUrXQRnNjrsUbH6s8",
  "key47": "3frefo1rr5q5CajcxYGjZPLw9yjc6UABNPr1BKXwGhteEbPc6Pr8AGKYEYgcs2HaEnvvbWvRnSUfgkCq8CYQsFaQ",
  "key48": "5eos4Lq2XGdgp9bgdLXsauViA6bKKmTY7DBEFeTmj5RybJ2qfwJVNMwJuVQYXkabAarSVhEyg6a6Ca15jSskw6ZA",
  "key49": "4Q7kk4YnNkpst88FXd4nVBDPuCt7sxkCzGK8WbV2wGBErC94gH5QCCdTtYobEe42jLDCHw7GyW1FBhWX9jguB8Ve"
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
