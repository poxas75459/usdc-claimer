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
    "HFsvmoEFmqzRqUJ9eYMgLmbmQ2PAF3HYge2tmjF9vqcoZRDyNkDiBsWXd92GsWtdGycNTBfba8GzDHmUjkFmX3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PVzxxkUwP4rqYLxeHNB8HvLYLpjXgXRqxCzK8NpSchjsZDbah16wDYviD41ypR9tudSXfJFm1P1gsaf5s4PnXK",
  "key1": "bxh31X5YEvkYuyWwu948CteaWxtXk55XWxmuGpmVXemm5QMoQyt7fPDcY2jH5xY3MSoj9gAwYPGFX6AT7iKq3Fm",
  "key2": "5je3H94qDYy4dL1jzKGS4X3X1xb8sSLcBJTViupYCAG3x6uCbqEgpojAHzNKtk8QqS1f6US9eZCuJ74WurZQjDPq",
  "key3": "4iTuZfgyZGbZHDfLb8G4c2fmypKKqNACgFkRfkz67rMNjLYKhfcTs1gFQDH68DhnjfwAjHkGL5mJaSLTC9Chuo3q",
  "key4": "3jeq4H8hkMKEpj2QKvTcnALEw4F3MCPcLYbWPoRpUCoWrXLWwvZpZzuT3NuDCQzgvxBhK7D54hnyDcyL3XG3xeMK",
  "key5": "4PLndzeVDbFW933aNwdJyWZ74aqU6Veg6d39jGV98ccNv8YcT7LKYprathbNA5errRozQfFEHNt4ZNEPKRzpxmvr",
  "key6": "4UGhm7Dr19Sdz3DYnQgrwVkKF1otgA5rBBXYjboBFgfiNUkpwAqR6xm72CWUAbYT7w8V8U4xrnXLVoKY1wR3CeJx",
  "key7": "5LF5R5ysufphQoHLp24ZLoGgfyQQARUthai2Q99PCcGzXXh8ZKPsKDvyXbxGBFU3Cq3LaEmzq4Wsz3Hq187j2uRp",
  "key8": "LMYuNUQgVNq5J6HPRqbYF9Qk1VZ7vkqBKeSQQ9n5AGvxDZLjWU14Arwjw6P1d5aXHo5WNdcyZVf4Jd2Q8kveF9X",
  "key9": "3RjyCkwreX41nZrbDgQCi1p6HqZzhyyjcAhQYqpbtQrDuZUeBefJAZhbFS7xC2xinh5G9YdWSYQ9TdJAhqV8n1Yu",
  "key10": "4e8prkQHrXUXLMuy7QTSFWiCnvGCpGHsGAZEqX8U3zXUhvUU9JDFMiyqzp6nQtrPNWCD2woCa2Jzi8RHfn6FfiJR",
  "key11": "2BsWWGcBEr2QumBWjhBzdXS8NjsjPY79XqWhSeysgyNihHgz2nXDahn4mUoL3vmNQbtaVxSFpefkgxFQb4WvB6UL",
  "key12": "4XgLCpbMwxDP8gHFzPLybRmLH15RHduTKd5fbDiv8794MHHQ7u82Kzsjx25RaMyZGRZsJfTjCmsrW37vqxnpNPA7",
  "key13": "4qdn3FHVVFxfmXo82kg2ecZy7VYry8KCx5iE39zp8AeqWAf1oDTjhK5cuwM7bD1q53YreakDo4FAbL8wr94HuSxA",
  "key14": "NquTqdnxQ8keURKyLoJHCYPwu3x9CkeFqAESjVAAWvyVDC2h4kTLjCzpDurpWauv321YZ8NjhZMyFBxacxnxLqK",
  "key15": "5YNLiz31yeckdwCSHokmCrewYRQGYpAoVvfKq3ekHzkQtLwrJ1oQSXJ82D18a5VYtJ3KooRb6CqMKLhCuKvVid9q",
  "key16": "3L9hEgeHZn8VUZVkGE9Tvc94m2NA37RvXE3t7KMpnVUuiJ2TkTje7CrCaZ2DnSkHPGL9iWZ8iSDsH7jJHNg6u6pu",
  "key17": "5r1cWdjyBnsmEiAy4din9xFmYVYdmNCwRxkh57qufBJRSWtKXh2nXCRVU1SkhnLNpYv2oXAEwj9y8Bo8qxPKf4Ae",
  "key18": "4urNQq92mkNwUFwT92y4BS41PBzBn3eBrb3NnikC9shdyRCSU1JVJTvpXJ41uZvdQfuKfDNKd5FZa9Kx9CPLatA3",
  "key19": "2ntkj4nPH1R4gP1gBr2YF5SCdTLpdSh5bZuodwXCjCjH451EgrUV6DNbspg7XYvbinqbpZpMu5V4HSo6c1hwBGCG",
  "key20": "3fpq9YLX9brvSjkjkNNzDVgQkAAxWzH8YkaJL9yzAcxfz76vjJgcnuZu1ZCFYnJkxJLcYXNCN4D514HFQqV3nhK1",
  "key21": "4PwPat8F7TS59L2shLDaznqRjR9ni28xGoSrriKbTvzHQHfCirCiEQjJvMYU9WDm5tMCa66JcL58uNzQnWpLBqq2",
  "key22": "61QrebnnBL6nZ9JPxc4wUoLVHYxcNxLqFn9gLQXeFaD5SdhLB5kRF8FG3XfGvHF8uDSFPmZWR5ZHMiMWBfUQZp9E",
  "key23": "Rss5T1829mWuCU5UjaVxzsJ5BkLegqMeUkKWtH7Z4MePujhxzqjsWL11aCUtHDvGo7ijyc8BG4kRf9P4X58YkDQ",
  "key24": "43fhjJ11pF2PxwS4WsDp89JrWpFnACppRA5Wz2vAunnR4CZmDMetAcjXh91v9pW6JaLdXzTvPrEEFAMUfgitdKFc",
  "key25": "3ovBocp2chrqo3YErKTVbNaNRcr5hLG9QmCqP1hSAEpBMVWNu45fy6mt7eXdXaxG7xoTJ7jJdnKVeMPbsa1eSE4B",
  "key26": "5hg1UMKAVLsdpohFvEhTpip3bDDo5UNVYhydtrPEVcaJaemD958zabntqYcti29XQGq2pzHLztKGQdixon1mjpqv",
  "key27": "DRC7dWqE94ueHxwuJtTDK6tsW5J8SLWNbyJYQ3DStBQoNjdmWqLnhzsCEJjNSPYUnVziRkxsGLoH7phC1scpLuy",
  "key28": "Fe9ASdBCV9QUKkS8xgLzUSyHxvQVDUeGTQSx96n7cpNNNZYVzHtTADdhxWtZ6bKNj7TnEqG8akqYUji7CAsh4nL",
  "key29": "4p3sKrXPJfVufWP3V5ejAQU5rtbM31N6WpiBRf6UppUm8YqiogD8hRrmEDXvgFLjBdPxXUWRRrMo62UB9qvtY8ES",
  "key30": "2KXjYhKhQdFUjCzjKZbLHyd7Scw92twZ7eGbU1BuZHcedNn67AFBKyeffWfAjtTzp7xju1CEWiZnp7KRjm7QrRGV"
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
