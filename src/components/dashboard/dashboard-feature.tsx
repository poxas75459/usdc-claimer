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
    "21YM5xoeNL8MkYKBWqQjELdu4y7etBWCubBo7MFJUB68ftMEQDTC6gYnJcFEo22skeEZghYfNT6f35mnzEHeKgMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcFGvaLZ74XWEf2qNBSYDdfbP53CQeT4g2pzNqW7CX5c13zGktEpT4AxkVx4rkDWVfiUZbrQyuhKj9965dpkZyS",
  "key1": "36FfqY71jTqQrSBXLRaZ5afLTAkcPJR3WGxJAUbNjmBB3pbPXaa5NwbkdJYBMG5waDNSPGg8MqMFRVNcJgVGAVdu",
  "key2": "2SJfV2pXM3TiPDKdbbNygZqybEWwC7d8oEctCJ8fWrVFQ8VfBFERrWDuGJC1hmCtT2xJ84QkrVw7vvmHzwg9Aq4o",
  "key3": "4yLBFee7oq8C4wWGtqX3HYTqyhUqJK9nrcui3rZSBb8iZAPLceTAvs7A8ZKeYQA2KAX6PofbCZGx3bNwKXrST78f",
  "key4": "5ATB2tLK1LALqK7B2DN5Mu2iJbi3cZ1gbh9KnWrqWkYP9cMFUGDrFsR2KVYiBkk9wbVUFFdNXSerotVyAjMGEeBh",
  "key5": "3ithy3k6YS4LaygHkFJu2BJqyDGHmVFqQF6K9sJFvRoZ8gDEM8f3632XrHQSE12A5xqCQ1DV4aRPppKiqpnDzejG",
  "key6": "2T3m1GynCmVdUxKmRq25Dmz9n2ettVC5xjT6xQ4ExpCojzJwGQkGvz8MKjsgFczBXrLDss4q4oqw3qXSQ6FepomQ",
  "key7": "4avicD2vTg1HyRvfwvqoCNB3ai5VUJmvreeYyzDsr9vjFMerDcs39zAyXJ9uGbDEP9To3y9szf4grEwqL5t5N7nC",
  "key8": "5Xs1WUML4jw8dc5VFsR5NJdHZHVRAv4ED1mMRTGNHhdZMGoJJb21Km3d5xG8cgcMXvXJ9fwzCC4bn4fXrJHWYtev",
  "key9": "2ajuSMGHVzqUGLUhanW86VwV69XLgM9MdEHGuEVEM5ZhHe3rSwPM26de34TwF6YyNND5QgAAMRqqhPaB7q6zBEMs",
  "key10": "5C3Rm82SE7hLVoi1GGyGfqxzs773MPoioM7LycxEad89EuLuiuky98HWw2BJJKqpXySTFNxfH8bh6Y3jpP2D2X6M",
  "key11": "4BXSqBszbXVDbL6e1xJtZ4zQ7ayQ5LET531Ma2YHWb9MLdM59YEuAuEaJePdeJTBHPxdCP5ad55FbLp83osR8CAR",
  "key12": "2HaY3mq9yhYNtPcEszhGd2GAizQgwWaF9H5jqCoq9po4GDkrCgQDLVLeJqYeUZDxYUcAr4WL6ZGBZke5d9dr938S",
  "key13": "3YJXwejMzapEChkHufS7U7hkUHBnvvYN95VHA5dfvVw79iT8Uk4ca59hCJ3W1Mcv2z85SS9buamFeTRGLBsPqNgY",
  "key14": "5d2Kww9tX9GLB7mpZ8nG7VB75ZB4BUfkLqpUH9p4U8MuBWBZjDZDKfB6td5KL5GJRkk7YKhXqZi7NojTPBH7DYmA",
  "key15": "3sH3YcJJxPASDuA4mbE7smvg13HaeDGWGgnDzrypodkUwLm95Gw8A1ojnFjq4SoowVwfkMDvTx9zj5ergK5ZCzhb",
  "key16": "3rQc4gJGBewyzgKrpdHur7jHirZoiFU1u8WJFTvLdEcKv8jKeUjHfuGUGNSfinMPYUCK1rpoJ4YakJ6TQY3YU82N",
  "key17": "5T26jNbev8jiwFuxBk9xmPFNVPvUE8Z3Q1ZEktEDZRxo1rnMcKz4tbvCyEGNZtULg3RhHMCaem286y9vjFcP8zAB",
  "key18": "5iDSv2YsNDTXM8mix1McPoS1djziTNoRFano58HtYaVNEucxF9BRqWVooLHg7jJvZHueiCNM43ruTUoFtScaa96y",
  "key19": "3x9S35dV9aBiRoE3G5JcwTHjhsWCgneXqdoUG5eCiH1gsVGp7necfZta9cYZsUyw1msNJTtc42WhkKv3Zu3784cs",
  "key20": "23ii9RhbMYen2Rzs8rwjejfvnNf2145RTtkqrmgMMURopMSdhSWAoNzTSzXdKazWTwyKWSm1kVNigpdftNB7NwSu",
  "key21": "5aD2E4tKJtAPHLAsp4knAurXtxp1zAvMn5zmfmXSLsH1ntsFZxLt5jbUSDmfC7RMotSqvV2Z6bGYSkHSDgMGobnF",
  "key22": "4jBQ21m7XPSGQGcryJR1LgHfBepXnf8Sx7ZZgL7M7sDR4uD6zjDyWFEmN9zt2D1EgH6JDHGr2HzuCj6Z9GD6CxEq",
  "key23": "5jsD1DBM7wV36sARtYv8CiYV1eh4E4FQoQN39EbdKHKL8BQwvvkaGQKstP6ZQTXc7LtFw7EWVuZSUeiffxVo94fk",
  "key24": "39MnZErFPDKWgvi1tbkCLtNUZRdX8HFj9B5UArnnH9yD8qQfcxaVNYqTcquAkWVc6AxCrCZJtFN2dRuLchivjhDQ"
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
