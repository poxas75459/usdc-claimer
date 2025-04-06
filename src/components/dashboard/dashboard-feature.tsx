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
    "2kQVqVqrbcAC249KE8VYYQwprXktLposAhGiuXis69jawZBF5R8kDLd3qSN4xT5dKStKA5aFh7bv85AD6Ljv1fbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37DanknAvwN9BRA7JKczp6RzhRL4K37quL6JPzdHgqSVocmgbeFyN9wPm8zjqv88YcjAxzB3oGP98m7nCamiDuu9",
  "key1": "2TB5GxvjH3VUwfyrfgyqjhUDorDdYs6dKjtXJXWg83qgkDZcKAeq5NdrXuNqLgMycQ4Cjh6RQc3piys55Z5w7mw7",
  "key2": "637ZUnzhfR21nPrVuB5LJqjDr9vJp4o54cMMHvGAuFC1T73uoaGfyuf2GtaoQC7EBLfmChhbdb9XGGt9YtBEc4kF",
  "key3": "121hKVGCUBvz8MbS5YmbAsYAEAupEA2n3p2JUDd28pfq5HMoXRQTbGAD3CFAQtvqjkTM6F1NG21gHwDq5FKk2WQF",
  "key4": "2xYPtVBqJePXDQwo5NsdxmwzPWXxjmrvBVxEYYmj9n4JLDgCGvSYFmYhxL3FHuuceUyo4aP3zfQMhyK7bMN43BSY",
  "key5": "4pcKjUwnE6kqStD1jHh3NT8PUdA7RZ88hKidmxCMQDRV1i267oHhVsaDvpq81ABveFwTWfVChzuJJRSy8onswwbJ",
  "key6": "Pa2fRnvWkRbxAjFEK5M4XyBPoLeCpbcagBDR5EbFfB9tu9SMZ6Ag45nJSWaQAyFDBrxTD5zpQLjD9uAs77uHYsR",
  "key7": "479hVZJZd6fPG2C8PFphQTvrAf3DvBtg8LvAzB2LmEaFWv5HE9W3nE2NYjg6drmMzEdYjfWR7uaLjqThF8TFXD2e",
  "key8": "5w6h4rNsCHe593PVZLUAjmk8Wv2wpfnwU1c2PJyG5rD8dsb6Kp1GTUs5wMG1dpWthV7bJfK5XvkHpbDpkXVHW3CH",
  "key9": "5oHqZzQY4iGaUzqutW2yHzi5ME86auc81n18rovSjhQ3bxAxE66p97qqaJULLraXEAHb97FFSmF2jeXU5xoZFacW",
  "key10": "3nawPVQRAA4E1EECPcfuLLjsmAWK4xLMd9WwafTCFTRkpDU5DpdXedG4VbfP9MSib8EKU81AwNQMcuzy3WLGdDKF",
  "key11": "2RFJfhTa3zhCoFoNPgwfxHwWmVsh7Spgb5KD7GFdubbDvebMwQ4MJBn7gL1ZkGamZja9ABEMv2rFJMH7BRmxdo68",
  "key12": "3E4fGu2pVjmMDLcWMNUYiWCNFneQrojayoywgAxkNhZoB5mhy5zsGSLLEw8GWxWd5J6rydPZiicmSCgW7TGW5ZwF",
  "key13": "3CddFbVUmj8FDA3wiS8gXLYv8T4ZLGDVMVs93rt6QDf5DZfhV3oh2ibu7ZJ1339nsXxzPpjJA1F4nk8ZnxAJkbie",
  "key14": "5dBGuGKTvLwe4bFLbVXGf7YLXR2zCN3ytSsM4tQc9NpxbonDFN7vz67JiVkuTyYo7rsi4XAnRzf9cn5r1BtGgk5x",
  "key15": "2JspSgq6q94sqehdd9YbCAsVxbAVeWLUoDzyp5FZeKWH3xfwt5J92Pkrff8AHFHXw5hkz9gFht7gYdEQw6Zn86mp",
  "key16": "5oy8RqfBRnZZCdxkWZkZ1hnL9x4sJCFjTGYMGpUxf8ogxvze47b4FjwXZxJj568pKSNnnjqzNv3ntq7UKycxMBty",
  "key17": "46b9ehJwYsR43aUDeE6Q8nKTGLyC5VNsDYK3AUs5JzDeWKA7MtjmhC9hpyXTEw3zGXhqSqsxiUgWXCP85sbuYz7w",
  "key18": "64xBZ4diCc4wCAQZHAQbfJX76MrFMaitQ3aBaxmx1GPFzZdW4oK5gceLeuDoPa8BjQx2UbSra1AZxFGzKYFV2Cre",
  "key19": "2mv6H2hn3CNm3YSBqny7mqGXuT819gLemnWmeAF7go29xb276ztpJDPDxyu1K6ABsHgQnFjqNCZATp6vBvLaCnib",
  "key20": "59Q2uKYQBRJVhkbowx7XoMKfhioBGQyBun468FXqnMSqxo5Q5hgiJF5YGusY62tqVaFsRtrhNQn2pqKkJHoPXjgC",
  "key21": "5BPMyqsSDWTmjJe9t5FJ8c7DxmRhVqE5tSDLfb3eAHFA44qbmsKbPFCdDgs5Vk6aTWRg8pXh78ZXg5zcZL68TM1o",
  "key22": "3utMBpWAZGRHJpuHvQKxA6qJFmQjY2NDRa3wAv9XQFumZyHRVnYPXF8xFgXUQ5RTD2j3wknfNSYXJVbdkckGXZGS",
  "key23": "2MMdFS2Ky5XPdcvRcj11veUzwYPReWcYYzL7NYfVrE7vMdGiUKArsWXeNsGnzkh2G1gU69eVmMkRoBJ7M3mDouGn",
  "key24": "4VM8LqhonQDsrjhGfr27p6tuWEeQkLUzGkdxVXtRi9tDoUyZ3qG7g3woFELSZ7Z3rLSJGVnWQRTfUKqypcpYgEzZ",
  "key25": "5bZvgWSShHBh8jqhwJjfqMiQ8vfAG9Xp4ZigF5d9vtySsN6eraQ8B5cyzZc9NRxML5rbfjVCKPmVosh9FQUv3C3T",
  "key26": "2VQyr7RG7mD7nLBCQXZGDXiCmKEi82pXrS9fCa6aunjq9dzVjh7RrDPUXkZSbVDzR3LoqCtP4CR55siKMTcDyxss",
  "key27": "6ECKfonRu8G4LmekRQsv42b5yFRdZQQMmkBEgCggtLVhRexDURpHPEeeEWUTMzSQcHCsrFNPKfY3MJfwpTBcaQz",
  "key28": "2TaHTMbuZtsEaJY2cuAvp1zvZ4Td91XA5gHhWyEo6nUmGnjjob3sRUx8jDoy8c6ucDvfo8gh2XyDxMdMwjsA6wrr",
  "key29": "thAsWiVAnJgq9txfLprWoBLP4ki2eo3kvopinnpqAFvn1JS3ERfmpLT6JT9RtavDDSNy6NZUcew61d7RJ7z2Bs4",
  "key30": "64pVXsBhQHo3Zmp57wwaYeQtTfxTnEoCYDjMJpQnUWqf8hnbKkdB2jMjvoLgaU96nsgkBgeFu7QNXUkF7K2m9zHJ",
  "key31": "2XJ9sET6UVzo4NJ7vmcQZz2oJC3pKCEJjdRGEppTTr3a38qcSEGH5cNwH9kd5Tat1Scs42vh6VCv6eQQZ8CsFKM3",
  "key32": "2Ze6opiPvcrxKY5eme7rcq2pMkbCiyEBtZTa75vEsKmfrwTTZvSkRQvvbw6DrdJNNxUiZRVCkuQRV7yWr1oFbHH4",
  "key33": "5TwXxdv7PERJR9BW9REzMPhgxAoNYypkYwX1rEoXYDCw9d4Rx7R4HREoHB59XJVv4J8GJREXSFMD7H7SiYELGUHu",
  "key34": "58MmHA1GLvdBb8G7rEEdcLUSLhAF9Ww5GZnSkxb4SXR8KnTkpnV6S6Df2zko9jYpELBFA88rFBTjEiRrWH444Mbu"
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
