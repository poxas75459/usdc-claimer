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
    "2VRvo9cou3ZWhyExtuGukRBu31wJTUufA4yC1nNeMgjkm1a9PwL893rV7Xyn2Qg3CDoVLn6Khu2fEcYCYZwSRxDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nUrXtRHRcvt5nrhMwGD1qSCRJ1TJwzoowSvWQGWZLH4FhYPfb7SbGzy3ShDgfCDjrVv554Tjf3qEhzufY21kr4n",
  "key1": "4pNiHCdruYZ2mrKy3oFtpYWJ8KcCRfdFZKYuvZSgtgvXGE2CU95w7yi72RsqwvEKqodB8KgVEWr2w4WCHVsnnjv9",
  "key2": "2HVEeE1iu17TJb3dnJBrjfL6cekQy1McXTpoD2LvhzKU9BYnX6SGJvmZJ9Yv9xKb3KUFErHNZauy5icwZ2i12PHn",
  "key3": "2gqUEvyjmGmb7CySsM639H3XyXnagSuZwvtDKUPk6j65jCPbf88mk6whFhSj2FGq4AyihFDd4NR46KK6xk11pbq7",
  "key4": "5oRAM16wJS724y8KdPf98brDkuAHk9DWKpxwzXh5CBYT3wqxqx5ikJJZxtNVQgrpKYuoKHRB8YRgdSGXaDJ6VJTT",
  "key5": "5rSJWMJpqsGFj18bpLkdYFctr5PaanqzpBjaf3QEpaP9oa5XEUbNZzVa7U7yNnwKyM5sYe3ZuqXSEh7tcQMi7zzo",
  "key6": "nbc9GTGavN8aMiKyRvgo9zcQLAjauHpjJNNN3Zp2wJH4Zy1ZTyG2m5W8uKRC5rTC7oHHT2zjjX52w2d33jEQUyr",
  "key7": "kUSUNoGgJLdwdCxffrxRrSHboEeq7xfkJpLCipE4uNPseqhJu2yszvyySqMCDXz11s7sQWSHq6B99UDT4WNycXV",
  "key8": "4dna6W6fB5JPzsTT6mR9CmgF4CP3UFAsqR8UW5wMSS7YeAsjJrFtyDRKmiysALAVmoaH16CHNoCtGbevCBNm7VkU",
  "key9": "4FbP5P3RACMbw2aS6fxdR5zDaH3GBqRWpVvFZqFAxdn6dtQKNFRdeffovsdNcvrwvQXbe7kArRRbumtQGSNUumpc",
  "key10": "4xBmNJPGhcsUVa5KnLeQtTYgVk8jcAaFYrZQ8iccWLjmQtkN8qbbNqds9zEPbuo9aum7Zgtsgn6NVx8BJaPknYif",
  "key11": "4Eg9S3tWh1cVgE8a5FohxdUZkNFuxWrdz6kmTFQx9Za1Qp5dkDJfrhcqbkRzWbpQoJ8XSUcPhDEg5gJbupGtFuJu",
  "key12": "5tLfXFPda9jiAFwLthh8KZzj7S6jnGASWKddD9nHbQJW7MDGb4x8Rc32dLv9xvwQHiACKadJbbFrWzLGm7PWrRp9",
  "key13": "2bPKPx3UvwsstQeyEkAcFJ9K64nUnovTabqigtMnFi9yuXntfjsFLpx541gUPPsitWiTYYTJAp76CktUg5amwsbt",
  "key14": "61DeuAuCYcPxt9k1bWN6TFb5uj9wvSamZUY2BDyt7G1LgBFEnSC7jH9q5cqDhGCB84h1PrRWgTXL3UcYBruiFRKK",
  "key15": "5iqk8Hnqqv8qfCfkoFhQV9YofAiUdnYwMcaa9Pto7f2izfYFeiQxHmEqokzg77yTtbt8bXC5sd6aZsKUtzrvGTPg",
  "key16": "UstCrK9ynFbGDnw8LWpU7t8HPcNrPNn2vLbLXGGx9pnfkKaHiSfU2tSeW2HLjr7bEeHLBzwPPPtmM7bPaWv7Uja",
  "key17": "4wJHGVUchQzF5F1kmfe4Ced9wCNrimZtSSWjTMq65zBvyvJzVQgUU5rMM2uV4jQM8MwFKFZagnC7uUJm2wWdq3du",
  "key18": "26HpLjs9aQ78RcjiwUfpnTYdgG3a2c2zxaW7wdpMxmgganTt618WhAYMyi8CU4Q5KT8EWE8XCC6PjgdwKj4PRs4t",
  "key19": "2B2c4sDSdXSKV15HxLEEZCYuLbgoMdmq1qQr34sX2wSsDEhi1K9DYRWCP9Xm1paA77B3WcSq72YQvnE7jVQqpYUQ",
  "key20": "4uwnmGo4SkGCihRrZCqaXoTzg99P4zKwoC2gHZTg6eJz1xDLniGi5kSmrRqA5S2rKujZDiN9fT2c8D8wQUgbh1bt",
  "key21": "4XDD6RWCqLDCeNkzJHxDWR3qb8BvRUoDFsNVGYDJkorrsvWdFj4pEVWESvzPppJgbHPeTMEGWthxVLMXqU1BAZEn",
  "key22": "3XuWdpmx4TzFtgm3FSH3vS5e3MXvtoWtmMyZ6zyc63CcBwCfRMmATn6j2eUnQGa9GmVJxp1o16Fi2EqfeQNCK977",
  "key23": "5N5VsXx9vG1axKVZjMuXQad1SinGfQGrnHfPNFr6i5jK7EoZ8kMwVp4Xnxnw3fpw9wzrtkX1eSj4aDzAV2hP5X72",
  "key24": "3HyrNp3bZk8Ugpdrq6LEzt1DBvXU2f995bGN3HvxchGQpZE5ENyBp2cBmLgkEVB2CCR1mXQDUym5oMbHzuCqQmcH",
  "key25": "41Nc3DiMZ1tjjzBvzanNJ2T4yQceiemGDQNt7yF1Ty2JxsKMVUuDWvWG4Gc4iWvFv14SsHsfhgXknGjGvEXBFvW9",
  "key26": "738FHkJp1MNZ9hC54FCteQoFBPagS6dDLSr3xa9JTBnRGtsSLqJpmjsPdiHnPnSdmRyZsH8ES5UYn7MU1VCX46K",
  "key27": "2t1yv4MevePKsc8Z46bgKWCaCosLDgPpGjgeMELkbB2JnjqvJFHbjuFjE479yLSm94oWEku1v9Gof9sU2HWDFgMm",
  "key28": "251qwAV2QJSXfr9JjdJNY3Ka1aVJUa7gAa2VzNzZdJ8T7WgAs6hCoE1yJLaQrxfeA1LCZFqGmgWtK7VtB3b4kcAU"
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
