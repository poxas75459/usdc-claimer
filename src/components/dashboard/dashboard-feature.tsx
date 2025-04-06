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
    "pNCA6FfbKNZ3bzmJ4NjkZPMC8aLH2zVKCxhLs7Xebm4mS48mi9KU73zRdd7JKyoJJduvLVvMiZEAGA75djGL7Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBEFpAdwVBHzWNwtU6jRfL9Sdj84gCbamUYnT5rBRZYsgPJm23oUtCUdVJx9xZnAZr4EH2fsKiZjroif1QLt8J4",
  "key1": "3HuNB6A76SsDXJ9t3jWY2qiERGN1NPSX4UD36KrRtYZeeEqAVKpndPqR2xsVqBqVRHYYGvAKYNJhYirfCVLmaSDC",
  "key2": "2KCipePGh4VVSoFP7zX95r3NgeBgWTZhSYi8kHJH3y5C5FhgMAzE1ttKjqPoRs2fQ6QbBFomh38d5APGTzmN5jza",
  "key3": "wCDxgQKoaH8JZZwsx9w8UFEMSP6f9yJWmMSjwu8fZQ5SnXZo2y1TueazGuzbexGH1AVtoWK1skwwKfe1wYZEVdF",
  "key4": "2K3wfKYV1bBDepE7uBF2LLCS3teDVmXYxQk3NUTWqP7CE8HYXPLBk5bcgJfnjttLFqP6m5f7MXNWqqA6Yt1sjUoW",
  "key5": "2D8wyXrjBkXZTgkXH421goh275FopuaLHNE7NdCA9wkD5nKFomh4uVqD29uQHJPVv2hu5sdPpRVMn1YhdCcHEi4C",
  "key6": "35Q47wb1Gi1nhg8oHrT8wsAuFuuz7EsvHsgAmGa9sjjt2cKuf7wa6VhbCSk5ixVQ6xWVZJdppAmR5YEoNjTPRDt8",
  "key7": "2NdJQyeYdVyoTyvbSiSs9edZoKSqXfMEzoUKFQbQKQd9VeW8zXJXAGer7mdbni5bLsbo1pNkVKGe4du4ZAQXGxbf",
  "key8": "4twRrcbiGjHwzkK3nosH6AM3MgBgXMjXbQ5dUoQDiTFztmrQpoGcBPeSb2awWtQcPQ6yrWo2b1RFR5hTdSZKfXYn",
  "key9": "2tY5V5tMW4En5XgoNCMquiiGgvxg22cAVM4K5XjKfF4MNu7nygTY2cYhXWczMsiPSQoVh2Wb9YohnhqQfXJ5TS5C",
  "key10": "62KuHnGrdej4kPH3yY5vrDRL3u3P5x49LbV6HsgFLohYJfezwdR6g2GKZDiuDwKDhV9ZQPebjwW4zd4diowDyM8w",
  "key11": "2AgkeABYQo3xBvfBVTRscEgkGL7DULwhmnFhDHmhxHdRmmWnHRQurTb1N4ME2duBpnMHBmKLzH4fq31T3oFiTFaq",
  "key12": "3jA8Mwn1CyivksBLG98acbF9vtKRiJSCHL8QBZwDU4bF4hj8fsqZzuQNPTt5GxXjZXm29aAFStUgtKt6rxiwg4Jz",
  "key13": "agMQbRa96qZgDGNbzbat6QG8DVnojnd3V8G7Tck7gVBRJzEzrspRGrWhsnDLAMjCDcGokmxRYQ5AsqgggEsrJRA",
  "key14": "4ZzUK4r2X1aBNsf6mw6pNSLPknz3W4nUWe7QUz6XXnyFTvKwmtDuzpQPrVAztuY3S4FeURnMrpqAPtVH8TXPSFm6",
  "key15": "2yRNSczAZ9ZBz9qo1SJUXjyqfpZQnisupHFTRazMz4ffBarWuRskUhGeGZtJhwdwMBahiLUXwHiLaUcYbcAgxqJn",
  "key16": "3GqN8XSxaZpM4bF2XvqcZNvn2md8QcnZB2bwyyu2FDYRzHvwK6jMLU9pCmENsrG11vgEEoyiP6eBHPypnu4bNa2g",
  "key17": "5fiJZoGPfW8CvAVhSNfFRJT1tCyWGSZZ2qNmnGLgQfso7D6PFPYzjvU5Pds4uKaEZwC7Rje6YhCBmpGnSzh29Fno",
  "key18": "4kvDEJyB17ARNyGhmTFp5dLCPCdyDYC1GKDQFAu8CpSWY7MUiFF2TUowEEnabvVSMMeEsxvAmzDhFpbmRYPDNF65",
  "key19": "3LrxyZiZFe2HeTkvpCjTZHLXXhRyLrD968EBGKnHheiR7B4iJrSaCgpgLb963NCeNdb4kMH6P4QxW9DFtJcQF58T",
  "key20": "4d6HBRFnEVRsSKgtUKVaRwWhd5cUmkCz7ebMNydH6FoMpvYurLXQvVWXa12ZwgNKvfcBkesYmiZokeA7afjzjJFJ",
  "key21": "3fkkjWUXvLxAtSLH52MucEFcaX4g6jtd8voKb99aPWby4CJVvEMKP89Y2FAzNHoSAkePQy5awgeteZLMjSHQP7uH",
  "key22": "53wgddf6LPF8hWVSEDzdvtmdyV6SDt75vVho2AFfdU68ZJA5ZBVziR57agWGmkBxcMxGmgk7QwUZqS1n4wJX7GYU",
  "key23": "4ZBarLQkNQj8krPxWW8JX378JucfQB3KeBngSUYa8u1jPd73fj8eKmfrYWbCe1nLnxuoz2KFV9vU38vqRmbMQD5E",
  "key24": "5YGJsk5RyzjkyxXxLETrv9q2vMx8jk74A4oAAeFU2Xf4X1woPFbgPjXgeokRfUP5KDhWgnfZKdf2q2kTXE5M825W",
  "key25": "4epq3PQzETy6pCtq5cAebmhXzxLqUJjzLr2teVd89LgqLsg6t99JUKUwLDhi2gmYox95YtZuARzyuM4rwmWCSCPk",
  "key26": "5FnP4PHwrBhsMTYDCjhBMmyw1DceD1peiJbWni4AErUSKhrjvvy6m1KYEeC6gq6sKN8xLL24hUhoeAabGqU3ThyG",
  "key27": "4LqPzVwXeY7LtiUaBJvTJacWwTmbrV2N952We3DbUzaah2sXEvmhmKWMzroHbCAohrZ4T7PJiCnNpjKW46vMwDhT",
  "key28": "vuLTfQbbQPxJKCSYHajn4BdqT9kokVoA4uaJEzUPFWddBeSY13Hkf1BiSKfUobdsPvYVWLYq8CwJNhrng4SAtxG",
  "key29": "2GXbwPsiV1P7po5K7uHG6sGSSYqCKwGrp6dWckiNMehxjdoA7N1nPCft7jjQi19yjsKoWdxrU37RNs9MMWPrCXAg",
  "key30": "4aaqj2ewpQ5Qtb6jy1maj9WWNHPhnGEzXTweiasD9UzWkZuJtwmutAf7m3YJTezyhJQRqzHTLJRnapYNJb7PHC31",
  "key31": "DQeux64Z6WthyVZP6xWPeZoGh4EVNKnopHr9Z99uQ1YDSeRkiqJcNPLHfFD368pTGxBtjwi2DwEqMZDy1eyJBK8",
  "key32": "66XywGJeNW4XtjxnGGD7N98UWQWfn6uM1edWNZhCFLDCyzf2LqLsrZ1QKHMMYKj1SW4y1Ud1uWfXuvSW1WhyAG89",
  "key33": "5QVbbvbNhwjqvdyAJ6bRDnFp6oEsqV7VKCCmDJfYhm4EMymZzfa8ha6VZ1NBJP75h3Z8QU7K8GRYJ1FnfgtzvKuo"
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
