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
    "54UQd9zAozi4HqWtLB5K6SUhMiSANJNUhsk351q9nCerwFSkRAWqYXmvjDLXtjE43sh1H9Fop5EdXwAa87Y3HrRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BqwMYUC5Z5R6cn6KExcgKozb4pJTUfBfYYpjtnTp1vjSbGmxmofwQHcCQGG1iSBR4HspKCcbGLXqPxmCyMcMMmc",
  "key1": "j4wFvaMkYsSnydHvsc3DePbRPomkZcwJ19kQ6e1m28z23AcwdDvtETa3G4zUmSsVy225nBpWtYapPMc8NMj2avc",
  "key2": "DuSjdtA9zBBLXwdH4EK7UpC9fywPcjbE4fapUm3tPfLqAzpw4L54UFwivD41fJrxgR34F7aAp8Mc1XPCbFSNKZh",
  "key3": "5VTW1ut5mEdPRP4xdom4pi4r4SViGNcCHekhu61tvdn8aUPyUDWFzgAa6FjG9reFqLq3SpDGYEDn6qpfJ7ijeLAV",
  "key4": "4GTZSpC1SHWEBWCwEa6b8jX8GrNT66ufPf6piSYHqA57G7KH6LoG9oKpKWJ2ZMzYqTMBnyA6MYu7hSW3fk5AeAcw",
  "key5": "29MZogmUwfsaRq45PN7osgejFEWDKWmZBAGsuDd5c6mvf1R8WgD7TkxL8x5JT81ANbeu9PFtdv6sPND6LcPgjXYQ",
  "key6": "37vpxLx5Xcp9jVPXiWhDzjHKTG7iJ6nFYcsVDHqAFp4uuU2XBwYXp5wRMGziKX8qkQh5YQqiFYpVUhwgCKSiAn1w",
  "key7": "49zraDgG9nrjYbvRLt5vJHCJceKotVxCyVZYmP7R8tDwichnMeaFwFaBHsqupUbXev64NdS4PEzUSXpHW9LCW5qr",
  "key8": "3YGVaMDdjqrpDDaG2C6kF8mfBybqNie9umESNp4sX6uBBXXrMSbh7j5Wf9YHorAjghXh9Xtjwf764Gj5zUNWPCWU",
  "key9": "z5pdnR7E7Rs46VXX9WmWLiNuao1nBak6wudVX9cs2g1ZEGjK4kjzVz1iem9HTKvNvFviygnkzDRkreK61ctjWYb",
  "key10": "3xTtJatEv5eENDX4UVhNZ84NJi7y33W13LvsxdJRBt8CjTTv7anBRaWPsZjNHGzCR7kGgTjigJQqWhNJJwhnF8Nc",
  "key11": "5pyAtF5XQSDPG6VBsDjgPdXeUvmN8kR1zy1ybun1j3ie9knu6eutgx9MiV7xePPDgDLvHVUGa6AdFRWE499FhDvW",
  "key12": "3aWpLLfgZfngb1UoXkW65BFwDZqEEzG9NJEmoYsQaHstk7wE75JgDHtag4JQKibxp6hnjtLgEpCMXF8vpWFGJhtC",
  "key13": "tudnFtVyug3JxuzPccZeF6X8SJmB1Ya5w55AYrcTKMwFd8nmbSh3x4xVGF3b2BKw7hP2e93N7pLoLmwFG2hKzvP",
  "key14": "2Kr6wvMbWr32TUjvb9VzrnuAPBwG6MhVF8Az86LNa8uAeUimJVe7Q5UVWzHFBJjNFThM8y3eyDLZnguoYLiUbug4",
  "key15": "4oe1dcUmuTmDn9Fou6FJ9GtqdprjgTi9PYTZ1NedqskJ2MBoMZDbN8YCDCQGuSqpgtNnBVJn4FoNpQJhU7YJbPSV",
  "key16": "2iycSjzqspgJ6N5th2zCHrVSqNweQ6FS3q4Ve5NvhmgZgvJd9HZHM3QQS2qR6nUHQcKjm9yJN6pRrY8a9vNjqr9s",
  "key17": "m9hawprXrhq9zj2SNiPaUNFQuhbgUCboBc3UoVRtzypeWf55by6AXZJkSqNypVC9wvfmzBjfJJFeUjcGeGZEmfH",
  "key18": "5xUSqU2myJiLVJoE5apRYQf4kzH1ApoPBHLgPviScqaoY719d8LPN1keHeE7L3vNBkPUwPwqKL2wkMoDpsV5nMLn",
  "key19": "46Ynhhmh5DxdzfnDkqPWcY37cydE1tdWVkwKtBRVCA3wyaco2HtgeRkbKKiksjzLPZhFxw5hFHQfnBJzhrWN5htZ",
  "key20": "Zi4k78sGSxXKBJrhVuk3qDe4GUBW2tWTtYr24eVsjpxNuuTWUeSPdttRBAhLVDHTCLwK4f58JhANXxhZWyvYDgD",
  "key21": "3BgGM9JqdkCZbN5kY2sNFM5Z3BTPXEhwxRVJ5P9Q3cUPPxcArVQkwdboECajXGA1iS4o3FRFjj4m2zwN9NA43dRN",
  "key22": "4HzvuC8k6dzWC7avpuGkikBsGeiMJXB4TYPhedrftckUprWHhfa2tmSgtgqU3p5YTPvhaUJQKidcmQ6U3q3vadvU",
  "key23": "5iHfK8B56AeSLRYvNthrkyR43bo81ZLoPxJwRxkEMZyhSk3NQapKAR44x9u1yd9uPQiRwtL3UbU2T6UmV6JjF5Cc",
  "key24": "4Bq3RxK6tXYztDxRzgCCYUE76SZNm2qYzhcdB56tcutYu7cR9DhzeForkLnkihHk4uqtLcEJZWgU5zQgB3U8ERmb",
  "key25": "8hNdbVDTeXCZ3cj9wGAVSHnWyJvLjB4g2mNwBcZ3RjAb9JjnCdJsbKtwazcqWGvvG3PfHSt1Ra2AxKr54JT4VV1",
  "key26": "4Q3uxMmLac6U6S9d2VUkpMJW7bGJBtbFCmaDEybubf4r6Qvb2tyg1E22F1zF3sSQczJ5cDKpLT6dwpj1uuXxLRPW",
  "key27": "21scxVVcmCY58iZnKKn4ERdUeVe6HMk5EfXeoHpbNhZVGhQNFNoQaqZ8PZvV4Phq1QVsZAkq1sSv6CKgQS6TdEQy",
  "key28": "49omCszEFGdEJv3UjJKvm9RBWQDtgCS1Q4YE9E9fMuWJ5mpWEZZrP1HTwwbMsG5SJRiPHns1fJzGPkwBj466MVrX",
  "key29": "4rgX9fsV7WBppuk2N2bLPgtzL9QswpkoDKTtBzY9kD8SGXyK8XCfLnW2RjTk7V3sotBQ35di9ByXUBuftLQHgyLf",
  "key30": "4mCF5yeswcDrWaUzpjNniksQNZWJJCPVRnHkMXxkt6TQU1LztSm52R8BvzNkDzAj5yXxYRDu1SabX2DaAPpiBdrm",
  "key31": "4K5EAfqtSPKarU9haGBB3UjTXWMgCMeBa3kitmduAnwETNDwQMTzBri8Ei5tip6bCkSncv41DygirLqrw8Ems2Q3",
  "key32": "2ULMqUHhM49ainuLnt1w79UpJar99dYQeiuHG31DAgNqbBjj7G6ufRtew1G8Kzx53ddMX6Q5XatCqk2uQ9VRH3Y3",
  "key33": "EKR7nCqLknjX6b44EqEauX46BCcqjs3dmDh6k9esgmXkWBs3BX1wa5952kizkmmWvSG73AahpgnWKERbjPBjszF",
  "key34": "5t8KSQmER8fw6JWJVZuWHQ6KASAazcQereyYshdt5XFDCs4BYht9NAw9BqfLuCxZafsgdm2HZyWUErSFiVHNbNKx",
  "key35": "2Lfh5KdWx2DP2VTSQQZ9i8yvy5CfNaLPVfLYrF1BhVCc99y3HQ2FBV88PiEj8NKLVMoiwHEyXsZBKYxwyEpQAmVx"
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
