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
    "2uCTBGq9HrjG3ubYaXNgMrgdi9TcVyfBjf44PcvFkhjBMYwsNWVwjttZnPHSnDEPHp8HaUHyzFHqi2RtpCVcFPW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8ZHgzfC9w61kLzPWn3pXRxf8Jupa7YnC5vJbquXfXYRgJoje53RKniWXaMhwgZmLjqTyRvWkWbHoR5rJhnMyDG",
  "key1": "39CCSouiG87bHwzM3SfbSKU2XD27y4aLZ6Wf2rJUwEoiu5oQ9c7UKHcmXMFCtJn7tazjNWRRiee9jV3z4keEq7iP",
  "key2": "45g41sw9sP2AGJrBuf3jfc6Km2sdfvaUAsHp8n4fTSrt8ioV1qCujWLkA4iYbdYSUkhqjVhnYBfFLQGPrQurjEdf",
  "key3": "4AFofWGrts96aowXEgNiXyyWZfSKEseeUyGUrX1RChJRFo8XchkfAy7jhXmPfvsm59uBwWK6Drja2QVXekEcmUSz",
  "key4": "2pLk6YbdAazyr9czP44Apvr5vsVwi2Rqj8kubQ8h7X69zpRgbbAXrqEpushbDcCiECrkBGSBj3tuduY4xFGsh2bL",
  "key5": "55tTFvLoVC1knX9rfaKkiVXjYsD4E4sUX5je1VcTSZDGmzfze5DZUN1Y2MrbJQmzJG3nAcCKW3mWkxaWn3VYsJ7c",
  "key6": "8go7Lf5CAKHrJqanTcstzLAEunCJed76w8HeojKX6aK7DudbQ563QFnnnZXk3mkXDFt9frHyvi171iJAHHwHZau",
  "key7": "5s2pfzGuHM5sBpd68tRD3rJXyLTuw1oj24QhyWALb61it8VNyM8kXdb5sC6ZGfZ6iP87F62Nv8qTp7C4XmhDGHTA",
  "key8": "31dYS2nwJZbUfu9wMTK6sg7XEzsQAiWSvRnZgvmnu1w5JKWGT3uUEVJv7hT8X4uxhXcYmzwitbkjybo2qJ6Q6rcm",
  "key9": "4vFt6e45ayMxpYUDYvb8cQjswEnDf24SmwyAQG4PWU3CrDAeNsw72ePiaWppZzzzFJrRkj3tDg9z51CG2F74vFud",
  "key10": "NPFhGpSBEhGMm7WVwJs4iNVbiwpsRYz6DV21aUw2pWSR3qS3KucS4Aoo6kNSgpsKg9QusSWDyAcMK9o3bJC6TYm",
  "key11": "2F87j83SoBKXumbEEAj5d9o3X2mzc64YGUKU1Nbi6wZRvNiJ67KF1ABLKuHf2gGnmzsx1RmC5q8hmfQbxv62HRxh",
  "key12": "4wASFhVLcTVjmb48yjZA12QXNXnUcSfSoasX7iBBugsfSzMSVSUSf8UqG6qrMHoxx2kPZ5X1ZjSTZ8WpBWtjzVen",
  "key13": "66zaMsnsWRidnz6qKbrQwYDtfhj5Vn3NNPKvWCRnHD1btZzFyMh4PzsdPAQ1WVDtTuMCjwPqgaAmmqqmXxwT9878",
  "key14": "4WnUZz5uyLJo3GwnERQL4k9X7kBTNgrzB5ChMPZTuEGeCwDVqY2cNt9J1vHQc4PpevwusRNkgGcVJSNmCuTZBgWW",
  "key15": "2S3AqcagbnNv1ViXcE5cEmMUqGP3reCPG14pkHjTtW14nwHHC4rX1biNFC4QAtaHgtuPLSQNBwywvp3xVLZaXUTZ",
  "key16": "4YUiozvggTxSVNBKKvEEFKUBAkYfr9Sk9VepVB69vhhg34zxBfasvCD4DqUhU3PYUt7EpWyZKtUnpoHgzNtJii3q",
  "key17": "5wkey25QWwkG7ocASp9wav1k7oT5VPYbAms32iuWHYt3BxqEks9jiHe2RCzw9Zf9qUq2yCbQQrphNx5ewwD4vV4g",
  "key18": "45DpLFA5Nehr1aL5QmsKet9i6VtKE8xSvUr2P2S79TCFdtMJ1RFj3ixuBZZvPHwBubJzMNxXwvVwk5NzuNbh444o",
  "key19": "5CJzp4HG9FG2zyis6xMF9ChNbgQod9a1uukfHw4bet5ZqbfV65ZPAbwVQR9GvJJMWSkYce6KkfKTmtVKiwYwWikG",
  "key20": "63ERLTAnBV9vhD8KHtsZMAgJcA5m8JgfqUQfxk23tvRG2pksEQtz7xtJLQjDWe3EZJvTBGDkcG1uh2DW1o5DBm11",
  "key21": "5TsvQm3jh8d3eH6QQpbxcks2bX9aRdzSfdkcaQtzCgkkHEBzogju6hU9bjkx5VvYjEYNGp9Tkp5cfsGPpUrUPfab",
  "key22": "5hNAhSaRRThk9s6rLRmSyuQFqzJxvFQG2wU2D3NBo2bPY4P4GfykzxvT16ZVUqHW1yxib5MCUYBCvP9t8PRkMV1R",
  "key23": "66pDt963BVmnNqsqvKijeu1pvz8A1dC7Kv8hVoT3DvzPe4iSQ41CD5XDiK8ipjjZF67inhEUKxpAGRbfxZH8uamD",
  "key24": "3YxYin2MswxS2c28Zs7257W3DcsRFi7yaAs8Qi2xwvWisT4Te766pPScBvWcR5g19C1xBBjuTUL8JAcLnqLGb3Jt",
  "key25": "2ZewR3qtNtpXLQTJ2ob2mEZiDifTpdtXCxBjFUtfBptTwNRMTFWRQNGW9jFnD54FcNQK6vovbACSkfHt21ky3sFX"
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
