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
    "21bsMBfLrFpkmKc7Nk2FqhYUUQFBgY8tMhFYVNSL2zT8Q3w9xLTCJBpM4zQpR1Xok68vuJBUzMbnxYojyCxCBQXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyLKpYCCkv3NZEgH5xi37HNQVSDh1yZ6rooM1oHwS2mFhP7SDHSieFezwtSwghomopQMZ3r4DEwKsQsuWB5jPr1",
  "key1": "2e4bENt1Tk6LKwgSj9JvcjTbChjDv5vUPFMSMQSDF7RKZMwaFYmRZ7ZMqVXMuiE21hdDMRRNxAjhBJWsD2CmmZHb",
  "key2": "3REg5yU5sxh5B4nDYEgfrHTGDGPjcSFcmEyQpKmyALdc2R5eQvcQLHMsvwmLTRjDAgUvg5z7jBF8YhVGSU44Xioz",
  "key3": "ZRB4fidtQDXSvsDoM9BR8qXXbDgrmzwQWkxZPfZcYznV254zvPJcBDDosTUB3omhhnR33Y3R4zhABxK2M6b1odN",
  "key4": "5jQ3XzHgwUo2AzHh9XNwNEg3UXZcqpaQcrFguxFDkyg7r8L41Xk7yPCDNFM9g1eELxgPDhRZPSbqJQvymJToioDr",
  "key5": "49VuXm86LoGNcaAJ9LGHnqeD6AEmVCWUzBWJqjAQvfQL7GvVaBUDvHBuWbds7otEcAy9x8yk2YzpGjqzc16cterS",
  "key6": "5krPS37NENrMacKjP8tjxMJUotvffhDhh9pzdmcagNgQsUC6UFQC6hEJ5sjDMphWJmLoEfWDRaKsT28yJiwVEBCY",
  "key7": "33afZXZEmiyVw83yGYCg4PnhHrou3HN4fRwuckYLWMTAAxLajdnhXbafb2rwti31PM3tTNQu5QvxN4wsiSTifGLc",
  "key8": "4CP7iV3raMjVtHTjwkMfXmMEXi2LqR47dS2fwJ9YbGn7qZGvVXxdxM7LyNafPaZHGq9QNVfXhuKPpjGsQGJmGHUy",
  "key9": "4GBABmd1G1EWhPFPrmHj3K27KcLnqy5zozwieXSfBPzatgPtVzczb3MP281Emb9MdshW5ip2E2sMtczrdjYjDA9e",
  "key10": "298r2WdDcUtbmRVPwa7qVBDAbHdPfFg8pVkMVXVph8HbLRetg4KtmtDfRyZaDHZGUUBLFXpaWDdUkaDgZoE78fQj",
  "key11": "3Rh697emA3L9s9m8bo2SPmurunE5jN3hYRbgfmncYhuzpavQi1qibEBep8wxRZ9aXJx811NRo6hLrobamDyfZVxs",
  "key12": "5K6uKd7zscdSArgRS2RhSzcAVXwBwcfReG7x6jxYNn2McHr2YRPP45A2htX4iqUpTHa4S8eGx8iELXAC94bGWE5R",
  "key13": "j5mP8GSUp2k5McmrSgghN5QqJa1R6W8bbEWvR4pA4Mc5q4oH4P6QYp2KFN5uFwPGzAbgcYYK6kDvKdAk9vfLBbd",
  "key14": "2yiATZjZct5j1eBn4zWTCAqXnTkAA5G8zCiH37YNC6zXUKZk5hdDCpSvAEMx6bmnBanpVY6T6WYsTPsksKUAGz3B",
  "key15": "324S5YYsvmj8MNpZgPbxBfM7YVqgVF3cdnRTusZagQQdaSyoQtb22vvUgNB89i3h3kvE3zJLBod54pMtH3MELyk6",
  "key16": "436J2gfMihGFeegHnQHXy4aJyt7t3GrrqBqfMpnHxkqjGeMWfMrhgU5GpbqsVGst1kdg8pBd7kRsq8KGLL13Ccci",
  "key17": "4fPFg1ieuqnoUYhAB3hDozRSeWaekLu8KrckfNRLANVxAiYurTNaaEDeqhUofJ3Z1Q26zjfWA4xPjCFTcbLYwXEm",
  "key18": "5YgGBDJ3ocogZvGcqoTJqf61mWnnGTodnSt5nwC3B7xpdiLh2jRi44EqhY5xQxbR6UGXNs6BzyjgFYyY2C1uRVtG",
  "key19": "HSw1gzTLXbMceHdNGSBfGGxCi8syKUQvEo8f1RTHZEZqT8YKZcfM7wwkNYMQFoEUfTEQTL1BwuMi5nTWmmiTspT",
  "key20": "5oS3mgTyr3qUiicv8Dyq5xfv7A4MLMiFy2VcbRLcXioMEzGwwSDfgVmFBFaPjpJfo3opANr8mokMyC9zSP1LAA81",
  "key21": "3qP8X8xX4L1juPcHkQQhdtT2kZZV6FvVu76f7LEQpWh8UfjtKBPWz9Qj49XDU9cQVvgZPrFXTE446pGL42CQW6kE",
  "key22": "3HWRgWpXExFu73yDsMauMHxLXYVXSn6Z9X3TtSSkXd8mMSHZELKAjX5JxTm2f8kVXX3JxLMDGAigYENu1mdKozkZ",
  "key23": "qxEnUkqMC463DsKVbdkmtR8JWFgbTDMBLQ3hTj9VhkFSxa4gk57cn6CRga6qTDkbA9KjQwJnW5rgVJQjc9KGAvS",
  "key24": "5DeF575dpzhRSDdT6VQLh4JVoHw4hopuRrgxwSnXmuGC58hWfiv2NqMY6guZKtPUMqDHBan1sDYLWZSorTpYoWyU",
  "key25": "2PG8Gmj55vnhFYbPQrKtpyafjevxiacoh76dcmjJ4quJ4EZud8bTMT8cnxoFkTUyxQTQHkSoYqi3Mghtp4e4K9np",
  "key26": "66Te8sNCyj9ARTPH5b87BJk66mzpMoUjWz6f1oznBqGYqmWQo6gTc3UNKfj3GiFh9L2PMYeDUcTbDrtGS7bgVnmf",
  "key27": "46qSMdi22XpqCnFUAoDmy3jWkgQ54h127w5eohXW47Z3i7NF1Tkjz7jSuoH1fncrc56jLWSXS9DRw4T47dVnetr4",
  "key28": "37V8oeMZ6YJvK8uVKvQ8s3a99AH9uXSEWKjKPmiUPxnVekJRwqzdNCZeWS8eopJJnxnVErNQVNfSjHHmfAX7H8PV",
  "key29": "259tHoQXFPFwWtmjDWvrXwZGWLz8imQtQnqjyDwZBgukPbLCWKXZRLR5uLhujEiTze1vkFYFLGuT7Yk5KQWyJW9c",
  "key30": "wG7YbqXuqsXvNBeTsjvvsaYqdgAdgSnVmAZpvoH5v582BiC4kZLWyG3H1QNyxrg7Qq3EwpsZwoCHL6rriC6USC3",
  "key31": "2y6h4oLjkkJbfsMWi8CJ74D7X1NV6zWjuntL57NTCfXzb4h8zTjRzZhizYqRvpXhaSUog4TLku5cZ2R98mQpebUu",
  "key32": "SXwntoeCrWeySJprNvwAVcMNv22taY6ATRbwn8VBr2TyPkEA6ez23s53Y2PHiLJH2fVx3NwZ2CmUbmQqUou1Sdp",
  "key33": "39UUSjhTUJmb8N6Zq5NHMA1jUjQgCC1WWxFzCguN2tuxcwSdyTVjt8LfH3X94wYRwfr63qXaZZwxN6ym3uutz7k9"
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
