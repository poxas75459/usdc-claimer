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
    "RLQeUV81TvNeLDz6sxVpfsCciScRAjQqkiwu5LLiBrpaZLGo3H5SjJATLqQhnWdQSQ2tuHMPDYYm9UqNPztNmcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TKkuNMwmGqHncpLgNaMsH7k8LQq97PhpQBFq5MyFAcw8n3pgsG8STWXJS67SEQHDe73SJRSjgQwSk14SaHzhQRn",
  "key1": "EeyW8cirTPamMSvLUvTJfkt1FpzgFz6JZ2rDKNUfeBRm3s5VnFjj6xdN3SFuEs1pEZyAGyBJYScDhQqZRESYFLP",
  "key2": "2fJE27Ys8jdo1REqKh8hsGroQqi4uTsUqy7xHUCRRtAwtufpUJgs1JGvyi8SeE3Kp57JM8VdvevNCR7s3AiprHyn",
  "key3": "2mA5KCdACMf71MYR4wFG5h54gh62yQjHnTYaBfei4fe3zdfe1ouo1TA9zRG8r5zbZXDamwSjc67eP4bLfRPb6omw",
  "key4": "3AGXcmA1vuWipE7RfdibBJuisuRec9ATYnm271719PngqaraczHP5chwYfAQn68zFiTih2f9c6cVvxKtLpcK5fFq",
  "key5": "4DB7mCDqTmhaLM2mmP8yGpQXpsvNRccxuLbLRerNQhscjZ9CBYoEXjjzWNAwsnNi9hBdVDY1cx8P6nEo7qRPwAPN",
  "key6": "3wvg6qALPWVQnyBPtnb6cL99pi6WAkf6GfFbmtZXsf5Z8vi736kG9SFB7g3W18uJ4a93xEotMxGkXJQWk5wHV3bv",
  "key7": "4hckyk5dKdAGvemYBYYQVU67aRW8k1xrdHDXhnXUTFqyfNB2tZu96k3DFjWk8f5FQqu31dUwJRuPcMQ3WeUBwLrh",
  "key8": "5tNHYwyJQcYDvvYpbBxgYHJoLXmAno82FrSSzFmfYa343V6GenERQ3XoHMifCXVwnEW2ou2NUzVuvTHQYZGPHTar",
  "key9": "2FySrVqB1rtftubsKUykuoBH3bpbeXRmmq98SDzcfAmdUr7zRyCmAG1RdbxaYqPeyhHAq8FJNbd93fEUhDTc4t5o",
  "key10": "3bhGHSJHuCBbycNoMNdrVt63dUTpZaFojyBzqGnoopai6eXaUAT6Tdi1svfE4BJKzXw1P1pEH3M25Fb2uUrrWZJn",
  "key11": "2gCw98NAQp8ybgnPRwxH5M86juFWJ89E1HguJAVE5TR8PEfhTLCvKvpGdrZvwryYAcp1bqGbDuJLqEo8CEnafgUr",
  "key12": "3m4XVLnm5PgqsJarHDRMntasBJb4Lgir25j6MNSAPYc6UqzPUSWHFDx9PWs8N9RxgkgE8usX8Un8t4ug5gB8cos9",
  "key13": "4psMgY5Q1rXEgbpeMJdMdL2is9LtMWcWq3b9isUqk5wcbBrs4NTFwmtDdJyRw6Ja2Yypx431TQmbftmF151hSJcb",
  "key14": "3xyDeeWQzE9uAxGdsX8wwDM7KbFNBfodWDUY58vcLupcWd1uhe7fV2SeJyFoBaa7kN7298SJ4CE6p5mBWxesx3ZJ",
  "key15": "2yEQyXS7A5xk3HcZTSHhgutDmpFyPn8Qks3Wtt8DUYW6RHqcVdW3H6fGRqPuiEZQWMZiHgc91miWhvujEoyV9Bu4",
  "key16": "3T3JC4c16DvH4JxkVnEw9CkmtHujspa2TUYr8f5MCjnS6cxpatDxiSQ8sJC2cAod5scbKi1xNW5E72n8Sss5sFhX",
  "key17": "4FguZnSxZQNtScRge7dLA9dFVVNUMyD7qaoZnXAtkKRYHEHRv6kACX4QCtfVJ75SSKdr87LkbZxM9Qkb6rhAJZJe",
  "key18": "43qupsf24F53nz3yRXRfMn6z5LwqgKuYJvK2SNYPz27hNq6S5efM6NcxaWLja3ZzDmDFt9HBRqLjv3xVp2Azi191",
  "key19": "5dLFBYc8BKNqQAwzPtGUYn7o11ztbrrBN5ZhWbd8LuBAR3gWteGpQNT69LptgyR98KM6LUvM4VSqRWsgN2SRsoN2",
  "key20": "2eJMwiLWvtFsBRiGQTcy7ppLJaiC9xXawr7ML8e3CCrNxXy67Ys8vsdGMQoYRiiBCkkym9QN8Pm6jYq5WPcvtuiA",
  "key21": "462nfSYjqrkKdxEjr7DuUPp3xYMNZDahgtyLaey567gVATnCqNtGoBQ9urxdAU4UZmL8bNQKKAgGZTD4nz6g1TdX",
  "key22": "RhMYRXRDcTCjffh6DdTMgYDxnvmt7D9i6d3kYVYHjURFaTPUjhPGGpXQmSubfu5BtK5aNmEjX3hTR5PCGV2C2DS",
  "key23": "2AaxD8rbWAXkxLsRDMh9Vyvphua41tPu71NFFfQSZMueXnHTU3UG3SbfSQgzaNiFAvjFSD5BrtJcR3N1h1qYq8TQ",
  "key24": "3RXBJ8euKS3AR4Zvj93nMfkpVDgpk3AoyGP8C8btQZPkAZefwaUBKNFKsyr17tAxYa3bnjhwqFM6Kyr3gGii38Sa",
  "key25": "2K9g39NaVXpzJrEnxUG9mbWwfvZT4grZyYSb1NkrB8z8gCqnhKGxY77A1qp9TEY44W5cza5AJfyxCNqLN4W5UwWz",
  "key26": "29ygtRHuq6EeKssGUJCCtSKk72sFcwsxT3m3QXRAUDxvdqn4bghjERYiAwbwTDgTuJQo5ahAUp3de1W6z1fyfJ38",
  "key27": "26WRy1NFuKUGiXkCzoZLovQGKNPu7ciNgUwyhXU2TE6Wcwap45jy49rrR72R5TSKduRzDorJQoMcr9qtf2QqBunY",
  "key28": "3j23T5Wts1cJ9cKPeJj6LkwmfcCeUNkTU9tuAjD1oBLAi3Ne67F5Yqyan7pfMK5CVEgtbuJGb65JwFkQR5cKmZg1",
  "key29": "3qeY6dV92reBdVCAoh9aHK5DZgNVG3aZDN6wSDsZCDLGBRrMPVQ4kQnw7uB4roD83UpJtALCy8wDVNf6CMQZ3e6p"
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
