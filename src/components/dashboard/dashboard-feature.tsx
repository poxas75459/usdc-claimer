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
    "5fTPNionbxTLs3GvbhtzpFFZSP7Bb4VrcGxaCHwdQkvX9ZdPrNHrKxEHSqZAmaXU3VTS6p4qap47161zuvHzVaJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RkiqRoiMfUcWDdMfg9E4MJPBj7SeLciSSsEyhxg4fCLQGUGjgfnmsVmHZHEGUdoS9sJUxJ5YThQqQxsvv2LbGGZ",
  "key1": "4pvUUJE12jvv3dUG1FvNqSW23CsFdgWVhWfBntBzR8SsDVA49UWgJEMPveBEq3TJFaFAURpfNoAcitM4F3juTyEj",
  "key2": "5iJnvA96WKXmXod73S7zJrK4gwhazp8MKEjydy897deNtp4vGY1DZwbjZrRn2J6NhHKEPZTFBKjPUR8RAdUTL988",
  "key3": "3TtJcfphCnWpoAgCav6mdEvKVNyogQBWu8rEVc4EmxThWAjrSAcmUJ8BJrqDbymQoYSw4fbyb6sA7BLe2NqqrYxB",
  "key4": "Me62rmsidQMF1jKhQxNVqapdBKMYBUivApsi6Lb3jsTz7LBQf1DKyz2X44HhXBqeLFpzMQEhRU3tpGEdL2XkXDb",
  "key5": "2MWVSQjnA3BQkoEodhi5DfyS6qQdnCfd4Q6KTaCcs73TLv6tkcAkf86Tb34SxJ54cizNZzu1HaXzCKDfgQGZZvr5",
  "key6": "3nJ3QpNrwLP4Z9iYvnBdsNyJhXMAHVGbdQR83c5x9b5QiDXRJ4zMSJ6V1qowx5p3nzuSXTD8w8ixJ75RChjXn7RR",
  "key7": "5sAX2JFXJYTYVoUjruEcfFJE5144hNkGf6NquBkJStZ5dUuJNETFE29rj2gyWfE5sGnQwoLXdj1yQXkCeGmbfLs9",
  "key8": "zzu6hAz7pszhyeU25d7CXD7m4CGVKWHgZXLbesk68qiSLrnToqPUP7weUe4mXNoRCoTG9kJC6Uyv9d9Ne6KZFhb",
  "key9": "5Cu3UtXtk2GecVSxYUHtsyLqbkBV54SbfkBPrMZMMHVyiFUrEAq3CDxn1cyzNweHJD3VeQycNUA8ovwAbtzWk3Ki",
  "key10": "5oVMgaSrgM32MVuLZwSZsRjbL5Mwx5n7BiSJ8JbpAUpEXSJSXBjuNz2UiKatVBkA3komCVFAQGZfSGAr2cWi6F43",
  "key11": "283nbBRZrTUX9h5F6KLoDDSP8mE2bR47EUoXHACR7ruwCZrVWZD7dds9ppW4W5HgSwUXgy7iLuiWznfD1WBnvFNz",
  "key12": "4n3paCRKNZ6dHiypPYTvMwAZhKVN4JrZBpenynFKB7EF9aFRe4KrCaLWSdA4dsp4bUwaytFvLNnfMvPJQuPyBj83",
  "key13": "3dVM4bQFysB7NdfCqhXt5dUpnhhQzT4TZbmqHPH4B4qvgsYPd5C8x3trhZSiDFWM3Bss7ebBwPDRBTF8VVQJPkn9",
  "key14": "4CrRJBm7UctWGKP1yp9Ro9VaM9ottEATAEgctx4zPiLn2NiBSkHzeHuP6pSz21RWwCAdZucroR2qndNkgmHNoRRy",
  "key15": "3ERNUBsZWkRH69PEcGhBrn6AN6Pt3R9y7paHD12KGu2bQDjyNewjqayoWDMJ2sMfqMcAv9g5b6DJPxfTEmh6o9QW",
  "key16": "3EbQiiZBXthxZQcfMTEG8MMoeFzktHSGUwr9FKk1to7513hVLp7oykKQZ47JrAcdMgN6A84Pv2enf7j8ySXb9HNL",
  "key17": "42977TzwrGveuPkxf6oMb3MADnVQWYJ27KBrNZ5h3jA9A3wNQoJ4T22AZzdvvCzkRTnN9eMGTA5Cbbg8wXTzhGQP",
  "key18": "4rCiZEiZTvzCEjCX4ysXzajrYAoZrbZVk8KPnxVAfqKu25ZdUr9oZhT1GbTxjzGGGaAjVRjwGpLSGqAdDThRTCZZ",
  "key19": "3iruMYfwL49QXc219HaDweztymM4ZNhrbecrGt65ehkzEEPXwG2hZZhCXS35fPXZRdFxv3d6VQ23oMhNi6iHTu7u",
  "key20": "2Huw2tiqssNgCLAu6ao99CTsZCTubGcZsNL1jXRVpDtuKPqWdWKoekq1NsX7qtXByb7rwTqJkPg4Jv49UAkQMVM3",
  "key21": "5Ui3gNKGtDeVVfUwed1ES1S7MUV7Ty8CJFXWBABwgPr7efemCLK11aGt9feb94znabnDkwYGS3c1bmMqyf6jRsZJ",
  "key22": "2c3RvGNbZekqGjWnkqLJg11z45wMATHKRgNKUmT55SmcvSXY43RruYjMBvfhboHrGijN1wyaQDW2j1kxYhJQon87",
  "key23": "9q5LBGcAgaRNRpi3bhGdCXtiWz3Nt3RTZaESb4PnCy9a1TSgpwt8m4TGwgAEDzr5APGWCh3haCouJihRzePpU24",
  "key24": "bwsRKu2GZt5Dxm11ypJW5dQLkd2uySJKUMT5ECgKoBonNnVUBMmj1uB4PU7P1F1XeD7NPKMrpFv3DCSfhLQHM4U",
  "key25": "5pQ8hNkiM1KmAtujbXb1Mz9tmo7rYemwu2ih1LYyfS9znLrBVMS9xFchRkGwAsUgExRWa5bWMwY2zYcVoyayaAw9",
  "key26": "3jzZStWK7DoZkz7dKmCnGbaYuknBh62DKhW4779kiZLgUpWKmoBNsn8YWSrQecqV1yz2P9VCRvXR8HsaZ6ovRCqn",
  "key27": "24ZWBsk2xi1BnF7atFgZnZgQCggmTYFEfrX7RNGHPQL8eDxpnNj1JtuwKnXLpeAfbVZfp3qPcbZSnP78bLmHvfSK",
  "key28": "5dBtkH3tTMuDjNPo7pX5Cyq4UhucfQYu4dL9H1ysc2aWMvDAzxdkKvF92N9aKtB1Fnhk4BY6A1o1Z4dXi1jzR7SQ",
  "key29": "3i4vdy4ZzurSMCtknWqYVmJTMTqpAAXMHUMFjbiEScss6oTpkzJxzwMR4PnKLo3WHaiWJFkvdcVjTDsSrXPvjURd",
  "key30": "3E2kaUgBN7eNbTWRb9Fi56R7tzydJQWDqfUEmNoz7cG2ZVNChS53SEa7qAZSxfqRFq5P3z8M7J1cNLhW3i681Wx3",
  "key31": "5kEfqDKxFoBjqys5eaES1xsCahS1MxD8Wv3y67fpzr6bbVW9ETffAbRT49eGBaH7ygpkJY6xYgSBjmdzuM5ZPihf",
  "key32": "5EF31aCRvTMGy4FyW1z2k3QqjJixYPfQ9a3qLcuHNsQardbPpnJizZyxzXvhV1pBrcDgf3wAz4AjqdVEXDebKupD",
  "key33": "5uGsDCPjM3cR8r2YjAxj9xKiL3rCZbzuz1eR27QHmZTwDZS9eA2JFydypUDXVjg6eH6n19vTxTqCbE4QJdW6y3NK",
  "key34": "5UxC1GQKmGmjQ3vdKQV8uwb9vujtWd2aZBhr8m9U8Wy4wgShGqWg71y8Z9cEER1LyH6hzydVqiRvR4uniEfoyoA7"
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
