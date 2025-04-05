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
    "6xiMApw2rRwQ8f8Kb5JmcDWBguUsL1Fx9SFwTyjipJqhfUAHKDLYFVdEXr7CBsyJq8VfZPwH99D2Uja6egnP4p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZaDc4Fj2oNSTuNKTh8i6QE2zsNA8cgdznje1hkjEdFjQ3x9K85jQrKCNY85gfaFB3QsaYVLhN6oRNPqtEC6HeDR",
  "key1": "31DuUMPcX86hZwLc95bXjDkEP4jrFUNpLLaQNpAnouys4r7jLcgvLF1K8LVWtc7C9j4KG4qeWF6pMj1eSW9JHRXk",
  "key2": "4u6uRSk6QULsaZgGpoKuqc1Rptoy7BeJQdLGDJscfnf1vy76Jr8nvPJFZjiVtgiBCzSXkYnf3b65CHuRW6L5WcdA",
  "key3": "HxNEQx2pBqBMpFxkE6wmB4ssYAkHk5Y9ekNXjg38yR4orP3SGcJXZqC7emu6dWqVjF6N749hvNAhii32cGkPwdj",
  "key4": "5t2r6NoSzMBXWcoEidqrT5UhZLWut5CV2PwnvfFbMhYhitdx4PKTa1HnrVwCFePE5nZibqnZMonwD6qxHmPj4TRf",
  "key5": "5rxKWrXoBJ9c4CKmR71VCd8sjqWepy6mTEuRHdZMae5msgzqtsVHE2TC8fJxcdx9T15duHTYpPR5yDWQaGtsRBQ3",
  "key6": "3MqvVeEEv76sfFzqhnzka2pmsM1CUBkLiQEm8W7MBBoyqLe98ZA68HS5K5KefeG5tvL6beEMLy54AA3LFWZjcUWz",
  "key7": "38buDrgcTKQfNiqsXdYYm8MeFXAboEFuwQjDTdGPK6bgq742H8Cj6jyXQ6RgqYEVytu6T6UzKwkQcqr5oQqa92u9",
  "key8": "5VVRqgDY38B8dB2URES3puWBUXSyRCrwPaHBeb2a8q1pF718GwFpGd5L4NHMoLHk8T7JGpGfPA9GcVsPpQbbrNqt",
  "key9": "5Gin7YPRZu4Avgoo5jx5xqXMZAoS6crhLrToUtr3uFwSyDUcgvhduYzdnyKb2jNPEbvmP9NUuHLnS9k2zjyzkdab",
  "key10": "5c8Vw9pddaTSNdp9skRJytA4ZSqCQPaoMKv2bGoJHfeJeSbmiYQtvaA3wY2q3iFPG4g6md6ELQjcJGScWAiZVjEd",
  "key11": "22qVTanHuYJ1g4n2nHGw4t7aJkFntYBS1Nihji1BEuss7LaityqWUrBxKxZ8PV1yMHua7KenHRFYeeRg4utHqRKy",
  "key12": "4Lcv2cE8EtKgnukh64buw3NTujpBXP8JQ4Qkv6j2dTaNKBiTWyh51ifirKumh8yCuNyB7SXvnyrerLAGLekRxjTp",
  "key13": "2jUdA9nxV2xftGenMZEovwWfcDjGB154w8fVxiiHdogfiHv8Uh23v3qCGawfgQJhB7UpZJXfj9cj6Bp3KbZjjrvA",
  "key14": "2fpz32ry7h5LjT6ufUpe1CyizkRcP5PQ2pXwHyn8ubN4ebehNXpu4eqvRiRkniMjqgf66sspDkaSReL6Q9onTKzP",
  "key15": "64ybeTAvW9uShcCeqrEU7Q4DhAexaEYgEd7rneRj4hCUNizBFNrGrsZJYnHYTaCkWrpoBqvph9QJzxmmBu59MKqG",
  "key16": "yZ3Tefy1Zcp7d4XLyMadaZpGAoiU1eVR3keWDCYLAZ5mtGHLJK4jpjPA86Xzcu7FeiZoUmfSrpC9wys2JKq3RNt",
  "key17": "jSfxR3QtFqj3fWZ2ESZCiU855piFx2fQ7tATgvf3o6YD62gF7mmmGHiDd14fp3NxooBXuCyQnBt84MrY2KDstxD",
  "key18": "2reiXoHXEGzPNfePoj6MWeP9vCEPyF6LTGGpeSkYjpnbb9Ni1t5fKLgqApKRDFNEtqm3RBeF3adyWvAAhhm13urE",
  "key19": "4MioLUQfTonuHqzXvDiiwLDKPb16obGAdjqXggCtdzZmSG2FRoxqCvLvZrLmFYo7mJ14o7kBtRWfigTXkH9XewxV",
  "key20": "51SozFVfbTjpr7jMszbQWvvYhVPxbij5AYLGe8gbNuy8FArsCDB3wTwfjhyXvZPZYiXa1CaibFfEGySt3qQFt2ku",
  "key21": "4R17TadDF6fFhhpC8GHE3MQdz7dH3tJRU9vGXQNuwsvtDoV318DcktCx3SCLodCJyGZ8v8bLHAhRJJrLrJ1CCQ3W",
  "key22": "2N5UkQeQxmDF7Mq6f6mwosYnzodJWNgrm2vyKgZuypoZ1SkCW8DWvM4VKwNFs71seUfaKQ7rUaqSdDUt8JhxFPBd",
  "key23": "FjsLvBqTviZxEE9NoYxa8kKMAyD9Hu2LAm6n8JR3gQSoAqPskJCSDq6kYsjw6oGbvPmff718XGwfJRQ4qs2Wm49",
  "key24": "2mdt66C2uaJStUhpuymEzciSWpwExGBDsAgiKY55CNgpcQNNVbZbZ8mRLiehEXuyasYsrwvb1UxkAwhbfsoE9yjP",
  "key25": "62DnqA9MSrQiCuocJc8avZT6fXff3M8vknCN79khT5H3wSjiw5UfTK4bfJ2XtVNsDKhNAL2KWWvsqe7CqK5S6aV",
  "key26": "3J9dALVtqsRrDfA15A9vR1WuCZDq1AqfEsgLyATLTMaVW9Hnn3kVz43PFEkzEf1Xcvv6NT8PtBctHCJPiZ9UauLr",
  "key27": "2n5ZEHP7wsdnZzCnphJhg7kj12ufLMac46eTUBdy25SkuQ5n9njQf2JYh1h5vdFmU8VPVCP6hemc8hYZ99KbEVP1",
  "key28": "5C4CtV6R9DBH4pRtGPWqS6ufZGeP3gFgdnLARrDymWHxuhMbVwydLLpGC1ubWRjTp9QNmL372iqvsN5Gd5Gy9EdN",
  "key29": "5pXp12Y2xkrMp3txSei9pNnSkDGfFY5h3ndRz7FcQXMfxmu5N9SCRXtE6hn55LhgKuEjpLdtUnVw2MBYRdo3GW3k",
  "key30": "4UstR2c9nkNTLFYQED1g9AgB2TvMvtg3xaZFeLJjWB36tnmnSZua8R13G3tv4PAjQ35LcgrucTR83rcwihPUjtgt",
  "key31": "4EVD2nSJ9ttwY8o15Y5bDYb2XC5PbjV5vjLjTNHUc9upGECj9xeEm7dwi4jK7ALJp4xSndhD9KvAyUkBgkQKY4s1",
  "key32": "2rXU3gBMXo1M8GdU2iGjwZFKCZWPhDdx9DBnEd64UZcnvfZ8xRdgFRZQcmrGhiURW5t6yjW1HEUbTCCYq5bq5sXU",
  "key33": "61w9WdLNvqPUShxHs6KhfXcbEXN7sYUqhXmHVFzNgM5fmXXGGPz6kS1KJ8ifPqrSG4ZLFpzVLXKyC1aHD1vGJfup"
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
