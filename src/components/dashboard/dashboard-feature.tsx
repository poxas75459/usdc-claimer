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
    "3pvY2SnGqahcdcfTXeBsiFCGdmRdrRzbNS4KSpeETkhpd2qBB18oFSYn4FK1nmLpsGdiYMCtY32zehT8s4Dvujux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pq3oJYddnW7rkkTWGBYaXeuD6CKuPaQX9HrT1MeCr2eH8sdAqEbUtGjJtt8nwMskpJRa3VQ5V1CHoJNnYLU4MHQ",
  "key1": "5Gk8iHnvargqKy8vm6CJVqwEQ6Hm3avZQGMVZsss7vi4R462ftaq4rwb5J5HrnzPJedrsioWpvZB1Tj8zTBaVScT",
  "key2": "2NjJ9yBPDKYxJtHQtKMEuT7WxyUPNZJKByRn3rLG4WHJSWbadJLkbfr3bE3r2UW6RrCwhxeYBSzyCGiZiQbkvvaw",
  "key3": "5SmDLGLazh8iq2XVbzCQvhayzAraUdiZKTAh48N8mWNrR3TKjAtCqbEnmGWBWBMUeWpVMh8ZVeYqg9PiGLWZMMbg",
  "key4": "B2AGuo7dp3qNDvEJYLj8StQV1EpTKXw7LZsZjfng9q8pVqeaKtBC99hTy6NPRFsL2uJsgaUUNH7Me23J4bH4FMY",
  "key5": "rqSxJkaNLci9L9uvEBfXG1L4sEbLsf7Aqg1frn2CrxkY7CaR6oXcFP7VSk6pfurVH8CRDJpcV1fwheZucUsUQ2h",
  "key6": "2UsDFsy7RXfV6Vn2YT8shJKX7GikJFCmcrifPiUhhNfGDueTWQ5KKqY24phhvHDcv1DZCT7drLCJJELicLu5tGnd",
  "key7": "3LarRhbjMmnoAfCG5cZG7ait2EjxN6Tia4tV4Lap8WQcseLaDSHUbX9UEJJsAASGkFc14DjD76KcD78Vn6oepd8Q",
  "key8": "2DeJn7YfEfUaCzHfkVnaREbHY7hDbB3Bt4JFN1bMQjrFLEpG58WYmV5uZNmMu5do8msZSzBgnbM7LBPN9JgV1xPD",
  "key9": "4Gscb6NjHjJNNM5kz1AtbyDm5FT1oYvw4ioTxaqU3gZR6MxysrbVtfi8nHEs5Fr7gVkTeinqqZMJZJHP4EbVL7Vy",
  "key10": "aCBdYNaChpPUos1PSEFmoGVq3ieDcT6CDosZCRF6RkYdmjpsm4zvqARfdcmJrCcCTyLLVERY1ujdUFesqCe9iFy",
  "key11": "64rxWJChxeqjc7rWbmC21VzDbecygbHtrQJ38pshcZ4yLYBFhQYSoCfEo9pR2nbpgB8CoVoJtuESjXAUSPApYAn7",
  "key12": "2QvSNQWryK7zta8TPJ4kLCi195F63BmrnYXHtEvpi5ZMVBKpsuEbr8ZUx25XqjZRBA4H6avzbAgfkQFqCdyUToiE",
  "key13": "2abMyyuYsmAbFJKn33oWp2QLfTZmZVMTzGYr3yYNExfQUUcqWZdP2afdSb6G6pGngJK88rx4M9HScSMP6CWQndSU",
  "key14": "65mdWrPZt9729a9JHeiVNdPB6AoRR2iVeZSayYaW2WnAZzUocGs746YoRAkcExcsW3QPcP1edU2szfrhQpjYe27o",
  "key15": "XMB2jyYUkZ3VSQbcrbduApRXwQ8qc2QeJUWmqZA8WHQaCryV2WWjTYHzgkGBdseA3JY6ro8kRNDeT7vDa9qWb7n",
  "key16": "2ex2KS28JsVp3895cw6CBZ2WgwHooqFGeZxgxX2WjJEkwC2c4i1vnUSrp4NqUBMLFEiFVrpWZ5CzsrCN9cFd8TFQ",
  "key17": "2AjfpThfAQGFmzJDNZYHvEeopbzuHpYBz29CePWX4gEgA7pXxQp8i7pWwYUurzC8RG36W3YhnRXvgx3rvftZkDEz",
  "key18": "5c9hSiohZJqVu6sVhnCE67i9Wjoz2wCUdzD1ahxE5aWVWYXnmhZaco1dJ8kUL6AL4BvWiycS4TjszLheY9x92YUd",
  "key19": "gHYeoEs54PbGrcRT9R1bC27EsfvB9kdSaCNmJLc8D57WRJ9AzgD1ZgVJGRgQXYPCem3uME6TY5UQURvQLyGGmA1",
  "key20": "1pYLJJFxBkyuiBtbHrWmLSMvtejSeEG7atUe8mZ8rYLUzV59JDVDjpNsF8mnSm8xPFLbDnXn5d6LsTZYYNnNyGd",
  "key21": "4nHaaRhDdhGALMoyKiNeSTfrMPVDPMGSRAge4pcKHXkXGr39eTsVSpmjBzHPyFRzce5YxdgfvawYZ7bFZW9g3wus",
  "key22": "2iYXvB3Fa1GmRpy2Yh3B9U2GCpYWMtjj2a8JtRU7u7GeTggZahMFgVbyXrKP7Xg5s4t26iBtyq1mzgMz93uc4pik",
  "key23": "4H7T7EscEoJ9xasXibmx4GYU96nWLEtSZoxH3URWHbaYCpkWrv7QrKeezdWAnT51GnNzDARAGMP56qsnWdD48t4F",
  "key24": "2VMH6iUaHYq7v8dX66Dg8x2M1Q3xqnrJ1x13BhSV1WEMP1AKAqfRRX5P1LLMV2VjPg6NYYq46ERKDPuP27nzpMN6",
  "key25": "5g7Jo985VWPU3p3N3D14o92EJDz9M9Jc4DZu7EgE6AvBLDumznVxcpwTNRbPCG6tL3RVMLuijEjpqAAVmXJs7C1K",
  "key26": "K8NmKj7mu6vWcnazJwUwYxsAn8X563uZENc1KJmNNXpEbDorxDgWXKhhTWRjpfpzr258s8B2Br9wQR2UvVYyMft",
  "key27": "4P6F48nAvy2gsYixrSycmk13PyXCVTR6yNdepHMxrYpunEh5A5RRb7FTZqgNSLYZL2zJjxDzRWMYGtWYeGvbJBaR"
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
