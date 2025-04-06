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
    "yqz1uveHvqYNdWDUj4SpTWzdGCWNYW9buQDW1immxuRTXhdnjpXsWqCCYaNc9R5Fth638G9dQp74Xf2Yda38HQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pzNRmNwCeuuhU1xL4a6GF8u21hLQBGwMREKgmG6UePtS3SzD65CEicGgwxTwrAKb3eUfUaAC3YGcSjwzC74FCJg",
  "key1": "4vTnin9VXLdn2s3NU5igfnQqXXhbgzTX25hKRPaVXJB1NS4HYzKMrnDdr4YKvRAEec2diCXX3qVVvD6cPznzNgqf",
  "key2": "4Ayd92f5tk1aw3RL29ApMjhKPoMeFYjKdf6V3EWQPJXQQAFqEuSTQU62sQrbwm6t11UTz7552P6ZYVZv3guRygHD",
  "key3": "WrEP36h3NsLAhQ6nJHaoCAe3nSGxEDSF49WzDF6jq9SmRbpTZrjmTkgsCewyR4HYLVntiUni94rEGKgJzp46Rdg",
  "key4": "mBuaPfd2RTXJenNgY6B9TrPd9qoZvArxF4oPAEyXf2bjE5aWELbKK6zNGYouoZqYDea1a1dKP3FbWaPQ1dgTLRQ",
  "key5": "29hHTqQdMdZBnFTruXf8HbC1QFKeQox3sj48VQp7eBoUyrF6Cbzp4o8WMtWa65ovdM7qzY7mbuba4zTP7ivgu34K",
  "key6": "2sqFuRTayPCZ89u2ZdjZFThSP3Y6Jhj4a5ZxgdQ4FTVCkAShd8NxX2M1XV9o1aN9NeUYdKH7L7Xgcw7LQF1Q2FmJ",
  "key7": "Pf4FFsn9pmjzJFV7Cfsbt655CgN1nfyQye4ETJscUgUmZnvXo1rZa5Q8W5zr7S73DBZAjGFxBb7aDtdurbrdyKr",
  "key8": "2xfMsgG1qj5KDMkQacdr62gqMZXj6Pqzycna1p1t8tXZZBR84tffQfjwZZ2mNaupuparzWwV8oYEhvwzVUfHXLA1",
  "key9": "2ScDefi2fFGnKMEbFjLQiwrveBADuPVRkLkVWLvCoUQMpu2GcwjQDJiDpYzSdvw2sHN1c8LrU6tBGj7WuMFpGTAy",
  "key10": "2NCv9JB1ZreftFYmAueBAWyw7rvmqyXG58azQBAM7U7gUb9RxixmBagVHrqe7dg8DwzXKa5coLvAtXAQWsaKbFfG",
  "key11": "2igf8toDXmTJqk3QWfzvVM3wSzxXMh7bfC9sVuoqmGbNL1kWP7ecFZiCWA7oz4MnNoTkfm1GBLGFvdK23G8mNXyp",
  "key12": "2ZMdeDp5TzeiqpY8WfUZdp3vmhD8vcf7faA94cfN2BgVq5qcEnb2pjWMJ4DeMVfQHR1vMVhL4Jw7ePn2VkiR4pM1",
  "key13": "Dyb3SxoSSLBdj4mfzQ3euJasczvGStKLyEV7TmenJGABdsEt4pYsghSdQhXwEmgbN5CfPiGtdFixonEcKqViSkE",
  "key14": "2iuZfBasEiBCSaoVMdszgbkBA9Q7RkF33Lu1nQ1vt5MbEX8P6gS99Ks77SsbmpjEGX292mFP4rmML8LWwB4oMRhJ",
  "key15": "2tJVRaJCR2fXR6NYo87SDNUXw9LaRb9kBZ1hUwfxHbWWLbGcEq3fuvDekbdRohjRrTdinxorcWDv4jFNm9RzfDV7",
  "key16": "kLU16mFSwABeL9Po6chQndHSKp953ogfy5Kd45bp8W3bSWnmDQ4csBipexj4be4C5DEF79rvWoJQgxEvuNGL8CX",
  "key17": "5Ue6KE6esvRcrt7RVatdvR7UJfjUZ8LhqnCfedxXLCLcZEv56Sv4R9VpMb1apZCABrjTBfoZfAQseQ8raQKsGo1w",
  "key18": "4jtYCft8mBGayiVP5Pw7iZoZwnwErr2rqyvz3fbSRijJAzDoWvWkjMRiQJU6mJ3ZuwfNMMWWXv9NHqw4Ljn483mb",
  "key19": "53pzur7Lj8fG3yEv28Xoj3jWmWM6ZgN2q39XFCfk41pXWGhSWkxBkEvh2XTdkV4vxM3uZsaRUJ5Wcz9cd2oxxPXW",
  "key20": "5YyK8R41bEp9HD4D4M34EiPxLMJz1DRorJxYLBGMESQB6PK73rdrVr7ttX4FYTqRvTKopKsu7timjvqJn9n4EBJA",
  "key21": "527aqAJQbcZhhPXeDsKu2Nru39iz26DYnr9iTB1WBizGLAuLZk9i25hGgRxpv6omhPsMBMuMvw2PDiTuEQSa6abp",
  "key22": "63SvwGKPhixiajGCTqBLtHDbe2zdZHYK3GAxPpBKTwT6gjE8fWWw9yBTL8arKrL8nmJjBwZ15gecpLUiqugRWsCD",
  "key23": "3m37ZTutXKM14uuvHdgp4wiMwJb8CEqSrrDa6YM9BY8VkapH49BhfZN2ioSwJFYm2SvYv96z5mz8zsa9pWKxz4yK",
  "key24": "2G8yh74ikphe5RbJTKso3TmxXrf6TtekQ2u2L2jZrr3QpsUzSVQREk41tm39iwiEtoayoKDoLK1QJA8PmqBpU7G8",
  "key25": "4CBmjbDAoTHQy1VHqYM6yw7PnzAgwAUg3GnhMow6LfnS7wocBWQs9aHBhxkbusjBsMc2Kj2M9tXbVMQTHuQmrTae",
  "key26": "rbLcoiJ6QixX9WuQdH8CWgAjxaKXkCi9VkwjdmJaLPGHjhCEfRZhKitKXFTFdw3DcXSuXYaaiJAcEipHWxndgZ5",
  "key27": "4QGTF1P31Ub9c2F8ajvBZ2hrcwPEmo3pBXHxTdbPezBgwEAvPdTmKPH67QLDmK9UJDWq2nnsMR6M6s6Eyb4ajxvX",
  "key28": "2FLjymFH9gSR4C9nEpqear1ZPnWi7xgGJuvjcAut5PaPQ2tgT89fynX3LpedtM9Ax8SG3Tvb1u25hNTHTR1iLNnH",
  "key29": "2Fcqkh3uedJgTWtkkbZ3D2pPhzQ1mfuZhERrvoxr6rPjcqFDpwkKSfPGKKMD7DKuuyq2tS5hHSFhQhbCo2a39Hwe",
  "key30": "5AJpWsimeTwZgxT86TWPqm7FB4r83fK7m6gLvajdP4YcXykYZtQijoHynxYnHbzSbr5t2DiLwG5zfWgKgSe2GNeA",
  "key31": "26HrXaWnQmdhuqHS1HFV51wFWHrsmHYag7BFWWL2zXibNDfMBSW6SJSZxsceJSVpCAZNmmhZvnXjbb6hLEkpF256",
  "key32": "2nTFAm2599xouvhdt2LJrRRpmjmwtxzT6BNF9KpfFhWMP7ob4VFzCCNBpiwtUsZQZ28jYMt5GFTU6qiLvX2oAfMG",
  "key33": "49Hn3fwhC6fh562jd3GT985cuha3TVAF2BxfRJwRHRXmXRcutwv6n8zzENCGMcNSAaLCqa3Y6MehzkcQMzJaMV2c",
  "key34": "MjVF3fVQ3NN2ZabyDTzzs5rKcjbqgZTPARRnbBtJHRKoMrnFsZLSvj2c4ThnSEUNNffjBQCUhK3pDYRqtqGv4Bu",
  "key35": "dPJcswyg9UD56pvRSAHPwLQPakSdeFWpqQLbhd9PzVvtpCSv749kerKXrLzykwRTkrXdKQCkLqBdv1KRhnsBExb",
  "key36": "2E7r22eBFAgn24YNj57tZbaziBxTcWnxLNrMzDGwy1Toojy1tzAfx7Swjf8fzAkSWgYciiEvoNwjRWF41WWx6T82",
  "key37": "5PtxsgyNTzQL81AgjiTC6Do9ALGTUZtnogGsGpEfgDSSbwhXcEzzqTUAQqwqHLsYT7NbufLU6waq7x9EmAyZV1PK",
  "key38": "rwGyDv5mBw86PK9ed4is8D86Yqp95gyNJ9WP7QaRYAo1CqzxeijWzaGH9p2MCLSGx4uYHY6Q68MLJojvuRRf9GR",
  "key39": "2z3G3m2rwrsPU1Zf74sy9XeepAyeYvnquq9wxeDRsoLXuUkL36nxgnh27UuMJBGwF35qfRaqtnxNHFUWShjnqXkR",
  "key40": "2oRw2vwFrs7Vy9nsuaajMXbNEiqKua3Gzu6DWdkwLT2wvyxcnY3KneYnKNMMFQEhMFgSwKWGr9XdVdyStBRkSvU8"
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
