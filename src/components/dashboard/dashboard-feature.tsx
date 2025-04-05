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
    "bpusVpts6xRa85VtGCGKQDXa93z2SuoXLDB8sYCemDkQKzEnPC7KZr54PSEiQjrJPuApkD68mLiqLW3D7rqzE7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yey59QSNnt17KFqVay2iZmFCcwqPMJQi4Ejk9wvZpVo2rjtmNNZALGgTD9w7uYET11kiTSo2BgMZjKVtqchs9RC",
  "key1": "4XH6oC2hFJorwehoDPFBuFMCJei8DKAcgCb9eNgXwT4w6sMnmn2mw8QywojmSKy3bML3Xn1zchEi9JgdaChvsjNa",
  "key2": "5gkq5JGJZQid5haX17nsyRJ9u1ta6mkPLj62sSgSUgVZocPrh3yHRCkCrUjgis88U5MePzezUyWY4sF8295uPsaD",
  "key3": "FntgXVGwHZi3QQ3oEGmFanp1Rgt7UuDzyKfFGXNx5ZnUhgPUXhsxxvy8DuAFmjoSHTrwfhpedFrwLWshoY6aMZy",
  "key4": "65EtLomquHojxscv3cET5Gu4zJqgTwLqXWPhtRMiAYH42yZoQ6cku2HPrmJV3KBLDBGdK6red1Y4gcUms34jrS2P",
  "key5": "4ha5VS3SvYqkVg4efmyMnL2FM53j9V577GK1WRi8Z1skMnhbPNyJT8seWJqJM6ix7sKm6fMTMEW86tU7PYdUsHZj",
  "key6": "3MXsrNNJ1UuEdvoRYBuXX2AVHCos6ejMkh2nWAnyAUR4UuuHzzCLU8QEjWWyU89m6vyjas152ruahvwnGzyxcXF6",
  "key7": "62FVRButY292EK9cbpHqxHpgckPHQuRvAooh5UH9eBEMh1v5M2bQjBjWdpMyvWUjDYDuGMMTp7jhFTa8NB3jYDwd",
  "key8": "21WbNwvWoF1vBL9xzFNvRvEFfMp4GwWuVsccwynss8xp6j5ZoRzMmZyiYMAyBmTaxTLFbQvkrWDDcpxQNJoXNZhH",
  "key9": "4mAKKjNjPwf5e8CwqDakREmv6QBcP6f8anHH2LtbTHHoSDQD5QeDimxE1wRDJVKqHfXzsZSBJGA8KTUZdr9PKv3r",
  "key10": "wVdM6gf5BCMeXn3JxbJbQdxi2pUrTky8Wx2TBrpRVv5AByCjfu2bm3gNa9PykRHsB4Eywt74oaHwRVpboTxdKyZ",
  "key11": "5tEfhRhrKhABE8J7R5rW2DC6gGKyKZNjwbq8EFvzqNeHtGNN2TRQDf85D8BZxzKSppjWj86tfQn5uCYfHZGVV3j1",
  "key12": "339qXkrgAvFcFWhie6NF6WmHPqe5NmCimU1az9eW1JgdAPi8wHcbZ4pHbHbxg8enGK6Q8m6212DoqcT1QfHnsoKH",
  "key13": "2jL3kE8VYDfhjgU5WuXTLBuCmvuD4HtfTQAtF3SGcpT8Bp6ndAxP38J9b2uYoKVWZtL2xq9zUbm5L4PqFSAhHFvy",
  "key14": "7jPu7xcgCqYdSPr4tYxWA1Y9rALQFs9BbmbarJcHSuMhaBuLRoc8rUwkpcDJ2jBm4hVDu37XUVLCY5waGrGcvMW",
  "key15": "2kYBXvQ6RKQu4dB1iHc5o3jQUh3GF3J81vKQa6oQh911tJ6tKEXH2PtX8WdW5nGnL3gYJVAkDvW7EijSECS1sxwh",
  "key16": "2E4gEE6oscWvmWvvQgddjkwFhXaiMPX5qVhCGCF2P9B1SGu1unywt4d65WaAu79S2qHNQnPopPVPvAufayUE4BKV",
  "key17": "3NqkjUU8u48AL3zZdyQBKUdraUf9xebAYfDHFTSYB6FP3TWvotsASSbtxjKYxbJMZ5DGKJkzjZpkMmwmxiQuV1W8",
  "key18": "5y9FBDULp78nz7Gtv8YEhxmUdhWadhLgwQmjZM2bRJ91hVdbzpwHhAjo63BHRYLAdQYoCEDGK1EjUaF6N1MVQKPi",
  "key19": "5Kdpg9SAt1mFPUxn3RecPqRMoHpHVEX4H7QrdT9xmJZiqthTgy8SfgiVxeqnv3doJ9bAMkQZd9CMrkd4nWRfE3zb",
  "key20": "ZAzigzzGZ3uCgz4Tm4zanvfE3RVcYqpXsJJt7c7BBfFGUy9Kvgg5krsGQ3954Q1F2Y573AH9Shqt97JYpJFAX5o",
  "key21": "51egPCeBZ4y2FgHKBJvMn9tPdSWc2mteHXQCfSt2givVERGA6CvMQCf1pumtySoz6GjT5sJfT43NyBA3rHNgfoG5",
  "key22": "4iDJexZpYvdVt9JqgDHjMjYPMpp4NEYhUGDRhzrwtNW38zb12386y48i9BkbZ9eFDFeMiGe1E9ZRbSm4EFpsbpmg",
  "key23": "5LZvSCLxJyPRkaZsGYRG2YjLBAjbSHnZYHmmYDnQuhDo9S7coR2P3936MDPptVJPB8wdfYmcxN8k9v8MS2CALni6",
  "key24": "4e8LnAbG9zx11P8G8SSLTzVepqPsYZssiYhnL7CWXC9HzK5sPVGrMKaXb2zybpUekmY3tqnje8wwNtuWm5AUjynh",
  "key25": "5u545veKarkxoXYgDiH8bLf2zRKacs4FhxGkjGapVFZoAGQ1vcYsdncq5fHxmigPy5qZSotJrDTYLJadXh7yoi7",
  "key26": "3FioBbmKDVXS4Fd5J5NixvahjRdVVjGQxiro43frGHV3xuYM96WREhu3Ch31kwoAUg8fQxSsZeFk1odttn456em7",
  "key27": "51H8Hhsrh2BryEeYEng5tB9yZDeogN8NH2JMZiF6VxjXX3r2Y23UE9Hcz2c6pP8ui9VPTukF6nF3MGZ1fFE1VDca"
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
