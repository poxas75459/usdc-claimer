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
    "wLuabhheScTBLigtZ6UyioMiHf5UMpGb7ENXvoBezkcaJBWqYnHazJV3WAzWPiAWVF84oVDSDZ8xgDF5s6UwVd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33asUYrgG4LVrQmk9tD8bHuyenkKNoPeh8MpbVKJteRzJg3xSWBCJpZYRBUJRKa4KHSjpfYiE3iUEREXf38eyCaQ",
  "key1": "3sQUFZv9LGXK5sv6etYY6RdvADVLfZLGKgy4mxv5xx7KVPoAGBX8QbJmvGZAe8E32ZjqHVhFMy6Qcc9gtzbCSJTv",
  "key2": "3o8DLT1wHg4whDZEJaEmMhQakSTbBPum652oBo1Pev8EVEfTH8ARhVUj7y7XY3P7PzLPNWskfaDedooS3G2GS85H",
  "key3": "4JuKehgHJbbHzjcd6kXZ2pX1s7m6iVsiibpYH7Hhsu5LXMrhh2mP24FczhDV3fxUtFm3PkCk5azTPgrh5WEozpQJ",
  "key4": "EQTmoRV2EUz2AuPsEBDWaRspoWgf2qSEehN2gEoj6CYZ5S9d9nRo54KcV5XJFU2gCCcniwA1kxMJnPdJn56kSHc",
  "key5": "3CktwiWm1n6wVeztdPweZ61W1eoVqHuWQRTTbtR1Mx9o7LmAm3vA6aZEZ3eeERdQHqGkZ5Nag7mZnxEjhhZL8q8L",
  "key6": "3CgdkKwmN45hh7kSZ2BBqzjxFkKtFtWwCqPLh9deiZMaPH71Y11p8eyX2WhgVXT4WbA13uoXqTX7e4ow7WZyx8gR",
  "key7": "1HAZ6hqhUgDMWhA4A1gwdrqgk9sqNg16TvnUv2hr9MAQ7iPinu29fHwWqtGifZFipBtht7MCSdTxTzWXRzG7qv8",
  "key8": "4Zyuzgw8gEj4B4Yyd73asrCtxRAe2exGbuPakUC8oLQRksgD1SFVxnooPY6LcdZHWYcA33vrHKMbM8ug9XtzNeFx",
  "key9": "2Ddd4rjxYBL48Q8a8VWQDLd5u517JCNvtQ1z43MXW6sxpSLZJdz7x3vsfU7tLe5NGJwnTwUkuXcLZWih8Wa4NxHg",
  "key10": "DKH83MooKkvQ13L15Sbj9pmK4PTY2zgdNgoMH4nUZ6bAwvvy29XJcSvSVrgyqxNJHd2wsEv22B6mn9eAJ5GZZzM",
  "key11": "P9Cro9bMk2R8R1BdWdu6CKP9aR4QXeduubXAwUew9VeZYVVuBHTzbyUqZoz6884SeqLXzXVVr3hRWGxpUwz8aio",
  "key12": "4aA3CdpeSxM7vMGKnT2aKCstYdCw2EMqrNT4HcHd4NTHLn1Un1TLsMQ7781ve1BTVEM5HeRJd3BeJ7jMhHr19igR",
  "key13": "2yPXQBmcoJXcZaXdBDYNjfMVAbXerSToA1MR6QdxZ8LVDcSFyJBENxv4WnvfbCghfqjYqidMXCy7knSfPjcrBjja",
  "key14": "66QhbMkVVdfC8AqNMutbUusiMn5wmuQacWzFhhN3oSV5obx3vqRKJyXjxmrX9JBLkza8GXR9Pqja3wFBstwbjBve",
  "key15": "4azc42QzpPeeJpnDuqEjgYGjL3m2aS82S6Qvq64YGbCd7D3LrinA9KZxQBFtmRRAZ6rP6VDv7AeEUHdqXjJJCoyh",
  "key16": "2qpGNRZVR1AzzBMNpsBNtRL9d337dK2MtPkhkTJh6gGyeLfLfRSr7XBfqxtuWWWPQGXPuCpNGrZ8P4xTxHXqR2kV",
  "key17": "shzstHTQofbpiccVCcepMjgNddkDRvtouXxw7cKjbXbrkFH5LdKn8ZjDXcA5PKisKva8XVeU4Vmeu2yo9p2hH8b",
  "key18": "5wpBQ9tWouQKPF4TcK9nr1rQPhB6PeAEizpXyvAQFTtVQaa8PxZcHBu7cQj6y2t4jCVJ8RzAW9CnikVmxqKAzou6",
  "key19": "66SVmdSubSG8zJUUa1W7aJC7knhq7jMnN7UucWFwvSZgMRZKLA1aUeLkTdWNfekYAxcBwFPmDdZYTiYqaU1zr7DZ",
  "key20": "46MwysT7MvFMjGVVNUt5QWjLaUCqgxzVqiVcrFxfqD6RuvXjMpELuq8Cj2BB9K97mWjPM9zBFarJaNnMneFVsuSu",
  "key21": "5hHP3fCdpYngSF9CR1npoM9ASkXiCrbbhHz4TGyfmbYEjB6xBy64CayW7vBEskLY7jJbJb146hFN2QVS1qzeNuQH",
  "key22": "Q4TZMCyVvVg7ib5BPckwCHZyVhgtQfsMBsSK4TuNGQLy4PGu8YjN7ApsdkZpZCKrYUaJGzMd8S9Gvo9i2ua5h1u",
  "key23": "5KZTPQz6B28yGgV4VuMF6A9yD8UXDHWXTW5yRVZ4t3DjnVFVrrN3nuFbKqyMCEKcLEDEXRUW5jLQronajFa8hVWX",
  "key24": "CMyRi2zhyySzwW8q8kbHXUdKDjc4Z2qSRhCH57wPGyycJxMcekwMs5d641DXL7htLGJdnihan7iVyGvtwZKF5mb",
  "key25": "4LugNrxSS9spVV9KzDvhrfXPUWyj7yXgzSA3NH3yHJwr7DjaAXXQtqu64KFAYAuJqSeathjhkaTeCeFNZKFGPCBd",
  "key26": "2XqrKX2C9r3V55i3dnJh2TdQB5kccFwNxtcY4uoRGLNkommzoawYu1E22nVpyhSuAEjZjMRS6xgwMzR8M6Gy6KZ7"
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
