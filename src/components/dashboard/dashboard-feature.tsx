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
    "37ptGo6W8YViLm58toAk3WcjqvhG29jb231gKM47Ksc1YP77ygyK2koCDjwDYxhQfNqrRQsCV4h4TvJEkFWKtHub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rFTsKVabG6XtahAVfFvsmg1vaHwwfqp2WsmeEV7c8nVR8EpTHGW3NHSGjuNSkyU3CfyETmb34KQE9D9NN1FVWtP",
  "key1": "53zxPHVybSRdkfanWasfA8WMxKJo7Kpf4REqr1VZwEzRjFkjyQnP9xhR75pj7Ek885NQ3MYrdrpU8j3dKL4GMDuw",
  "key2": "24rMxNkejHUnevyjmKwn4BnjMaoWpfFHc9QCJszQNrHYCU7k5kA894LfoYqqaD4yjN9BL4n4bpGxAiLnXzqDz6xQ",
  "key3": "2temP2eHiPPEBtuh2HwataNoDP1v9h5tsnXq6QJ6VsMHVqRkBh8fYZE7YkyDGtkTAAFG3diuPjLf6F4TvDcBA8h5",
  "key4": "2Rjsz5srXxn6beR4YDWuShSdZSuemRCGM36z19xNY9fcotpzqTmqi8DrADEsDSRh6JF1aMF8QmfBemUecJQTAo6A",
  "key5": "5eLUvxWSo8Wy9vRFb4FnsHdT7NCmpK7XUwBgybqqiedDZAMPY7DmZ8zeSUYXQm6o546YHhWWx7wccio1Sk8EAxNu",
  "key6": "5wrhAE3ZxZcFAT3C8ThpDgQqMBuVpDPKFpx9DxAraAs2tvyEBDJWwai7qpP1LuRpiF34k3aD1eywRx8JWWCBPVKL",
  "key7": "DHEAyQriRUVBkTCXv1U9CJUgRQbTfGtpbKH92i4zX8QAT8cSE6UunYofGhj6Jw12cPQuU9fsKnftqUEvGGRpJ9m",
  "key8": "42fuire2Drt6YUgRVN1WB52U6hhd62GAiFigfZr1tkireDZaeAYsLVL8RJxcJZktYaatsHt8czyauyTCdHHdJn3J",
  "key9": "5Gkt4up9b6kqYfS5wBy5sjVvz9Dwpk84u1XkLAajxeyAsRNsxSW4Gk5rgGVi85TofjnNaeKWzh7e5s8LJNzW1q1K",
  "key10": "rhbHLNjqeQaVnDHAhUPkWjnVD9Jh12w31kqbEHokVaW1n9LTjEAoBHn3NzYUrDoY8UrKmAzfDQVBuKqw8HVkhWG",
  "key11": "4ymFYWeJ7fmt11GP7qcQQ419YqLRsKxqQ1DdaepeKf1zFpjZgRzUzkcsiGoYRvfFhUKKGrNBD36kHBoXQN8SmR5K",
  "key12": "4FpiV7jrUwrUGogAATJ8SbPzPDzXKZ9toQLdziYBg6NDM59WRQkV6YxAfr5bYwoYKQGc9MA1AZT3QD2k4QDxwPhy",
  "key13": "3s1gMd56y2ZUwY58f9SLqF3ubnuv7tYx2SLYAWGHYPWR65j5vkK9N2Uw3mYSwEoTVF5T5n9jKseUmZZNMHdFqSzm",
  "key14": "3HnTo2hLFfCZro23VzR5K7V5fvY43qUzJ2MG7rkQB9UgWpDhPJnasW68RxfHg5CMd45hHcG7148mySrMHVFRu4mF",
  "key15": "2qkeA2ByBZZUxMjYPMgKVh8DYi5HuXrVjY5UriGtVicrubBmVnrtsETD9fhN6JpFgxnvqvx3TB6DwgNFZC4iyehE",
  "key16": "5FtdCjX9UjAxx7wJREyEZW1L8uCnWQHo6axEXk6LqY2tji9f33GaJeVtf44nTxWNky1A7gbYvEWrGrjuQvFgtdav",
  "key17": "3sT1kJSpWaQZMMtDwR5dLq3uTLoWQDpKzt8ggdo9fso8F8ggpwkEfTyEtvkeNAEQuB3SBPsRgxF6isrZ9YvJMqie",
  "key18": "5BuA8GttyEtXTt4TCuwUcfHtJEzUqcKpGsCBqV62AScJTKrB9vPTJcmg5wH6qhBPUxai2uZngkMWMthqxZbpFL8V",
  "key19": "zZrfCsCqWKTcHwwX6ESqxi41YXb4Z5FgYy4vLThSmknpXBvnhgiQAqi3PtPFGVgnbJGHWF5HKYgrSo17V5FtqoX",
  "key20": "3sVRgZmsXcYHw2jHngLGiqv5eCM7GEVabkCPVPmziWRNEvTXT779EALzCR2jL8sg88Tiy8hu8LV9xjz8mAD8t5pw",
  "key21": "JyD1M51AMDaQBWPqYrTVS7uP6W45QY8oZuYUsX1Nia7oaEViaVHiuV6ZW36dhws3bA2wd3suJcYZtBMx1jyR2nA",
  "key22": "HX2tmauudbCcsc8CrMQaksvfgVf8okCxnGNX7fF5pdwkort2o7K1YfdT1KT1VwPzEyXFPdvqUdPzb8asnRcnH9U",
  "key23": "4XvZSpAYYnkjnFZrAuYAuiEejnsG1q6JUdoUSLyDCAjSUHRH76WVLQpJm1zCRDWFQm3Z7aZK3aQxTFzLbSR1or8J",
  "key24": "63QBR5VC3Si2NgGe4h7XfnA6G1BcCZeccKVQyjQBSBYXajJSAQyNJd2TaBi2GbKhgfiadpTyawLZECvqw4hDFFRj"
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
