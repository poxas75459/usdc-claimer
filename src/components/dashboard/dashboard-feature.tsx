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
    "29B6PNmZMkpuPpsdcJSY7RuDbJW577ZF9dubtah4hxDyUDHYTTHwhyivgvVCWaEJRnaUCgJxGUpDPZFv75goXDv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoAzQpfmttDeHBikc3hhkdxuVEcxp7f6oLF7B16cwGw7rZiRNEW4bgs9U7ibJg3NDRNQ6ubPHeuRs9Lg3Bzkd6A",
  "key1": "235LWQLnXMWRAzAupfKkqk9YAZ9bgLQ8ee1N8s2Hv79TfSokf6TY43HwuE9z2p1JLwUnaL8Wg45HP68Uh7u8TJJu",
  "key2": "5cu2R4YCk8E8qRoicRJY1MC8ADyQr7qNcd1j38tDQg8UtuStESPohb7hDXGHfMft7XSeBup4kau2gLQnA7Nm8j2X",
  "key3": "5QHkZJGWvi8Ujvo5NHASMMm1NNjPKHGgU3MsdGTuRSN5VxrHXL7sAoBV6t3N186GrdU11c4fHDaeigfAPhgbAf5P",
  "key4": "3GaQ4Fgb8KKhLvi2yBSVupibPg3X3KNsL7aEXRnbTUTFYRVZXFv8u8GRGEmniAmCpSe2Rr3j95B511m96kDNVdC",
  "key5": "2QUPJgWdSMuLu86aA852GtytJ9aqi1Vs67msF6uz5dqPqF3WvZzKzA65rYECu2j5gpVWj21xDbT5vrKj7x9AaNYp",
  "key6": "4zVtiWipHj1r7i5WEBMBUnEbHQJHchmk6CvYXATMbU1nRJmLWayzZqcvjmhrh8xNTyvRhF4TeVmqRuajptPskNfw",
  "key7": "2Fu2RtA9MLQRQ5uAfQ7J1yctG5ao8eYb8LpdgXRqu1YcXoYDJ9SkiJrHLN6Fv7fVEiibW5denz6PwfZ5pogfbZij",
  "key8": "UqTYzyV6pSvRdUnZ2RBHFNY7oYfdjVQkQom7tbgMscbdMP1CFFyt42KbU78FXj2oLopGJHiD3as31KH6VRMhgq3",
  "key9": "KbD9PdBBvNqhAv9W5mX87jrAj2UsRgCQibgy99zuD5yLkyS3GNk4mH28dPEm6hKR1DixH4GNPBWjVUC9ALbjB44",
  "key10": "2qdGXnA3XmQd34wqgpYv6qZg9pji8CoFjsXSqW6HpZ1uYDG9TczArLgGDsakHdgNv4mtp3QzYwUpYhvvQoxqRqsb",
  "key11": "3ZVkswUpyHkuRkQMwajxxBDkxyHpGvnUc1zdQ83nYRxHPLQB6dw52vJvbz8WEVCRjQMVKmYYterQ16HiMdFwwxrn",
  "key12": "52UsnMvYJzxNGqXSKRHEbWngG17fFa4X9izvoLmzSuUL8NqWut3PvzNTBMwx8DPqYQWscsmkuh6DMmxnUBykFecS",
  "key13": "Ve36fUM37VssLgraoXf9cHCvpd3Dj3yihnRWwDbdvvz5SqbkNvRyorRxk6NotRkKJyn18VnABxULowmFmLmjKJk",
  "key14": "3s7ddtQgKavYB97JJYiQZR8QrZWstGzLLTYHhUGKbcaoTn6hcrjP93u1E4BJyMaAHT2vHQ2xY7CYD4RS5udkDL1i",
  "key15": "3Dr7mEgYEzUpujPX7eRCfbFyFpZEnZnVBHEFiedJFphRmCG4XtZBaMh7p6t8uHaR3euRX14ixb8mXFux3W8qXXe2",
  "key16": "5VHZR5Unjkf9S2WUCekEY9r5scziLs43FnNoyrKkXbwjcQNSZx59YmBNv1hktwmBdzhWkx2QQLsryVuyNTJgiQQq",
  "key17": "tWm19xBhPZxEQ5A7gR53iAeFuJZEiYMbvwFawyGs5MtVTYMXYAgvoav2d9U84gM2EVNuRen9nChmXzRDL986Hi7",
  "key18": "xCUkgTXZtAKr853NGDRpTNHxq1m2rwcHfgpbBRC4BFjbCg4egag6w85UXoeYDQ8bRocw5Heu1mnpSAHFk1ZtR9X",
  "key19": "rVSoXo4ZUiZuZwLy7i6F3y5ef9SDNwYWBN2EtgCy1BLJDeSysVDSHvjL6PrrhfPWN8VMpgGY1Xfo6ntd3drFHia",
  "key20": "3AHvAyD5adfzTVfNSdB7nT7uNCX7y3DycMdALPcF3bKsvSFgEU9bLryUfJ56jNFzscRyHxvMu7GwXVV3k5Mh7AnC",
  "key21": "3jaNUW91F7ciHYh6CLFqUWSCykEpcip4hD4tijTZqkRuriP6wFXNTvEHZkGEWTdAhRA4Wyyy4u53AtvhsZ7rxVcV",
  "key22": "28Jg7fBgXmTM7gPL12a2qFPaF3BLN2WxS1ftGYyN4yYYJEPvA9bZ33vp3ufYU5QQCFJ7z5gMWgLajHm5ohWMg4cU",
  "key23": "2mCM6dVHGPJN9Utod2d3Zcsa7CKuNA4YDSGRYmjpzZnaWTWHog922CG4cNFL8qmXVnn1NuxF3f3SWFQTCHNm4xwR",
  "key24": "5S8WyYN2eGdTY4QQQupockp2gCAp9qQ816DYeZXMBJvrWYvZHChuZsq8jvoQUiKUAmciNQyDhWLAf3frgdZUFQj6",
  "key25": "2o1M6CyN9nN9k2BSFYgvWzxXhRJPS3DtY459R3r6eYd4kbuEsPXLNVBu7DHFMo6bnsHAE3DtnMMnu316bbPZY1n5"
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
