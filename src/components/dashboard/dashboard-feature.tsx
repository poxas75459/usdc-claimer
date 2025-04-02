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
    "G6UciutRZi7enNnzwWNHRmf9cVgkHXMkPFQdm3kewft8PnZdDuuryKGKNYjMuqvAcskBoCop3qw4WTnCqPz6XbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RsFjCoKQr95iTPkxQCrVGCJoeXhGqQZGcUYJn37H6gZRzvgMZwDPgB1xEn48s2PSXrYnTtrmgVW8zCzbNuTmMNn",
  "key1": "2DEXSsKzH37nvbAMHEsAzJvaGv9eJEx6nRBRVyGTbi2JbWyrP5cN77VM5zTU9MH3dxn8LEyHyWRPEFDwKHrYyyCe",
  "key2": "5J8sfvA6SjFG5PS5qDzj732m2eXbjEzaQARDRTKhScSwaGbeRDSn7EfuzY6FatSD5Gk1T6dWDRj5D2pm83Fyp5aZ",
  "key3": "RG5GkJPKMWssXKo5brUdvTSiTcEr9TAz6nZA7NsijaY3quvwiwrwhDFD8DCAzE1GM1pNqLTYPhMWMiyhruNKiJK",
  "key4": "mHyrWnjBZ5rtUTTqCkj8K5nTd74PvSCa8J7RVmLudVL2QDR13xniFbpjdqwc5nbwJQ4VtuVdqZmFkc2sP4dNYSh",
  "key5": "2yKHZpNwBHqPXJGQjMtTq9JqWB2TwKjNp6CdDxAFiN2BFL2pLo2VKcJZPrecg7CfdECU2pX4qAcDCRKvW2Xxinkb",
  "key6": "5vUGCzy1v5FPmBcZJch7NK1ygjmExYkRwhaPtMuGAK4cvYLcwKgqkcmpfCbBEHnGVMSte7etFp9dzA9ZXmrxffj8",
  "key7": "kARjxQQKA3QvGN1EmQxUBuDyKWKUFuKZPQE8QB1YaSF5w9UUU519W7jeFvkPTmAtsJZK82CiLii27kfyW5vu6io",
  "key8": "2XCJn3ZWHQqwRwptdSerVowoFSWvvnkX3rZYTNN8pV3gZ42RRbb6vwUKCczEU121FT1HQxtzPufQcwCSxC6krxqj",
  "key9": "2S3nmS6QgsUmNCYUgtuYouppQHkgq1r7uLGAgrN3eb3JDHA6XoCCAHUYzxA4HzB4cvCLu2GvwtT3fvCH7M9hez6o",
  "key10": "3eVmnzRbiVtWrE5ipzmesqMsS17C5ZAE9vkKxjU8ECBHHs9FsckkdbaWLHpPiVsQ4vMVk2EVTa368zamHoZuJD19",
  "key11": "4uUqFXgFgcqNPTBHS4pUH4Kk5bfyUPK4YYCTQvxZFB465LKhn1XVcKfNwv7PvzEa5FyQK9QaaxYrK3RCK912wTh",
  "key12": "26yPPWzozzMaJTqhFsboVdw5CVJ1HPLoeS75zYmjogRwC1M1UjDp765rDCtZUN5wvCBBHkavLJLuwqvLCia6wDPE",
  "key13": "2KVXYfPs5zcMyvv7rUeR7tGrvKbetDEmPdt5XdsiFCvnwWegFxmPeKXUevs6Rcg8iUVgcaFNhjSzVAnwQjc4mLQn",
  "key14": "ReGriMcB1E5PZUqYa6TLBmMSsXnRB15npWDBpXZfKVa4kia9sKGWX5gV6GKuFcgBD1toYoD4kWBJ4JppgnADUgU",
  "key15": "ZXj81GWvnTr23PZEcJRQegqazktqKRoo7uoqyh22A4xWmYpSJoSc7W6jFy87vLcT2tmh7Pn1DET3eVS15C1HVh5",
  "key16": "63gNsxcdNof2JkQ6LEYAfGSeg6F8JJ9yQYfjawa9gTCuHfgK8tTDFNHxBu23jfuSiinhrTQFDoF9tmLp4wnuTLNj",
  "key17": "65FNC19xKPHn62BtYU85SRf9pzu28LEfYHrGuFFvBfVTxxi6YnnrBQwYgeXNQrr1grpjSKkMQkrj2GUSVoyuAM9G",
  "key18": "4932of1YU3WShnfSAerwk8FXpAnn87aUCUQg4bbKSj41L121mEEaKhRyfQGqQ8PbdV5RLmjHYDKLn3QN2EoxJ43T",
  "key19": "5L2TjcqgsnfhhhVuStkPkhVZNJ3qYTUTszdKvijHbyi3bUZKwfnAoPyZKQ5j18MXzDNSGrMNuuwSQruPU4U4x7Mi",
  "key20": "5tAqKA3GSaVHUZ11SFFobWDgYcN57Tgt1PqPvdKRWHrGSqoUz23JMrnYTKBbcavMKYVQsvgAyGWVpWxJ4LU5u4Fm",
  "key21": "44Mex4dLzdSpFLUkVkgxCApYtCdovQwXMLv9XUVWPDk7t9fMyNH7eNg4aJXFJPCLtLxYYMUtpApu3Rwcrkni3e41",
  "key22": "5Yhd3DzYHuxCwvNF4dzf5oGL8SgXdT2ZpEDWTKoSMiLq4Jh4G1vq2jCRQVKu6fWDoC1ocXB6VkXY8VZXNJGQdpJE",
  "key23": "65wfTbZXtwRXA8uD8hhkjU1h8pHsSPbqds3dy3GYH7UjQPy4oxyZPuZPL54DyfYGyEiZ16oMSLVHm1ohaZcaFR2q",
  "key24": "4f9JAYF8rY6vY8ZCAx8gYb4odFDjvGgy3tFbRKei67hWqD5cMsKHUYTuTGPjqjHq4KWZpMgfFtuGNJECpWWLfwA1",
  "key25": "5vEPLr5dB8UiQwk7nzKqzQTHArnT2hBZooHa8H5swSQptQAgbTC7hnu1iMRzV69VwenNYXbSDgBHavdwUnoYnCcu",
  "key26": "nohhiwRCxtyfDZ597Jo8ejAKiHwJmuyax3WYnRVsXq1K1ABzQosF8fvJ7mrV43cvWbHdq1VybTDxjzmA6ChMWRu",
  "key27": "4dKLF8Zv8xAq6i4dh6NF4D5nVB9zVkXtfXxyfkL4NyKBMGpXtXQCnUKy3wJxRS3u4FCzeYjjMMNkZiHPHs6LFaor",
  "key28": "kNFHzUXegQNocmzkyAxFQ97SW6ftATujhPXkaCD9MuRJkbp63TdkG1CsrbMKRLwfnSvfoy1WhrA9Ci58WryKj8e",
  "key29": "pMTRjxM1tBtVshTLcbhArBmqER4cS2CYyKvpAtUExgqhtnmV5KJiTpyBQUn51moccEvZK4VTBF9adGFYNpef4d1",
  "key30": "2QKDH2CipwAC6yZc93MR67dsEx8X4a9eZBCx3pzVqoucDyJGMtwAXu6y3JCvfVgZGBNK9czGy1h693WyxZMnYxwc",
  "key31": "4ksia5okze2dfzo2ispXTGKjmBJWU6dRN1N5SABfPiDUqji7EAaMPi5RCd6r8o3gRKzk9LCvWDy4S5CCFW2n7d8G",
  "key32": "4a4ZnNHQRUHsZv1p69KAizpg1rqJDQ86QQQAw3bf1oNi6bEeVf95S36NC977CMGzfZ3gxkocUu6mJHdsZ8zzRv1t",
  "key33": "51bG7pSCjufBWcY8sceK3DPtDZ1xEXGeCCGJJ3fFVZf5KHBVFQVoXWRiLinrgQ8tFXPQL8u4ECFVg6AcfZfH4wF",
  "key34": "hi5LvP1H1faDExYHYZKhEQNKPezhc7TL2ouAxN26S6MaVy4egNZ9C31pKWve9JaXy5st89rVyVHSpGWFpNqUFKo"
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
