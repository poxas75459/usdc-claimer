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
    "4H6W9awJvZUMMDrVwvucZLTwK8tGiJkQWX6eLJskYGyKVzRVxchf8ZjJGceu9G14nWa7mHTnFZHqTR3NvonUZxC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sq2KVogJMjnjrbgYLG5ZRRSvwwy9YFc8KLufGqmD7vTrJEnvxdS1M6mxK63JAR4EAJRFzDVsrv9YpKEJnQ5Fx6k",
  "key1": "2b1cN4CUSpnU525TC9qCbisvf5vg1DG1iTHTDwMS6NXZaarCaCtEheDopnGQvjnE18shTbqKs9eiDxiUvYpZYHqo",
  "key2": "5xk156sgoqRiKpYo3ycDmDStMpq5oUNfaC2zVoxPWbqRheHRMRCtJFveJ42Axkg7gkMGfpRRzkg3jb5ER7xiR438",
  "key3": "5XAg5yfGGBkvT44fonuY5XXVtqcQpVtqEwRmFssnQxCgJ2aLjGNoanPrGZQouycHuasBrxroxfXN5yALC3Jii5M3",
  "key4": "4qDouV1Qbbdz3DGBZ2VQ3LaVTFeRdQCQiBQhaEUuGXo3khJxNgas33vz3uQi8zEkC6XSnvsdPj3jF3AJWztUu39M",
  "key5": "64n6wtQCJw8EqjLiLrDfNJ9ZEnHrbfgm1fM3EA5siAb1j3tkDfdSN89tmBByj24ccZLybLG4k5LGtGiyVNZdWN6c",
  "key6": "23RGZKPWC9RhhLTKysZiBqXsYWmJM5snonUFKDok9pB1ZcYGbL7oLW2QepninKMWyJrYkcHYaxhH5vSKTaF6mgDC",
  "key7": "FJF6HT5yARUzVRpGQh9H4QFdQFGWzwHTCAyuLvTakDksYqYZUywF1R44EUQw3MdoLFZc8M6FRkxGcboRobcppRL",
  "key8": "3g9F21VFZLk15btJnWEmSZ2mowXDy9FqQ98gTwXXuH6BwpVGpsznf6RKMGe7mbZ6s7ngBP4FJJPvrhSyvCzpsG3v",
  "key9": "5oGtbmrs35EH87vhQpUZ8abcQNkzNLfMSWBL3V5yMhzcYGzHFVYXGDReeduSfVhkSntaYitxowHBP2r1q6RotVLV",
  "key10": "25tgLDbXEhoP3DmpTEkJ2LDP3x4txoniW85XPuh1wN2PMkiEAnQjZ8p7mxaTXuC97AFKnexgYp4qCrVeMMeUfuUb",
  "key11": "3K6xh93apHq934wFCouGnRfz6aNd4QESFh8epVWiNgDCHhbKeNuADuCfcJg8xWLia9xcSvvLDwLsCe9UDrbXWERz",
  "key12": "2fusioJrVh4ym6aPSvduEoRX8ysbet5df3sHVn4ZfaULm8r9NZNgtJoNzuGy7PUtTiWCdk5AHHwTSeL9ek9qesTq",
  "key13": "5DMvaX5RHFED8yue4HsoqqLXAqs6kTp16uZ2T1pj5dsAiAYrLPKzPGSEBHcMDqraYRNdctq5XbCRVkyUGBnFNdGi",
  "key14": "5kyiDHm7t4g5v25aBVcmTq7qXMBoJru15Xqa655BpLUk9fyjE7a1pqGtJdxhYjapuAKKFGqRsrV2YooFQ3PrXJZR",
  "key15": "5hhd5anD1Dt6VsQ3Eoh4t5Ctkmg887ABUzLt98s8V5ZV4MtVT6HyY3ogDN7Jk3bpkvy8JcCHmaZdxd5SubkRkqyj",
  "key16": "4gXEMBdNH4V5XkzZDZQGjhc3dpFTn41odUgiCD9SiRwHtyJ11dchyE8HXaaTkF8HRk7sdaeyxK8P6don2RdGNCuD",
  "key17": "3UEX8q6PF8hRq8fHjFDdhqBJhXHfKtmCEZHFZYLaDHN75kCCnvj7ZXheLH33zWZ8C85anSvPrsbDRj4ma54WGpQS",
  "key18": "3Lydswz5GzodYh1dq1UAAcbT71GZmQ9fRRMmRQwV1wH5Q7pvuRgojFosHkZGxEqWrWM8oVNhHtwuSb5oXrSeAntN",
  "key19": "3iv9Y1Ys5uwVHABB7uBuSkUEMVoWnXuzQ8ConENzMin8qqc4mEmDZ9X39R8gjbcmeqqsMZ3y3mWBtU8EfmzCBLTY",
  "key20": "5ETQAti9doUADyJpWwVcQDkKyVafgvDi9fjZmY3811AfZo7v7NasR2SnE5AJvxbF3WDUE2pNo6aChtHD81vR1KET",
  "key21": "2kMgeFfYCa9gGUrtqnUV7hE8uQHiL8JkzHYybvN5tW11npkM7hHLEjacWQXezJ9Kx1HjtwgPVgd9jjihtNMHrvAc",
  "key22": "3uCSenyniDKytmepGUk1EaCAtpvRFJ5J49eLpGQmYEpwYUQiuoG6FG1nk3VMRwAcXriMRnwGfFibdGcaZzUvM8c9",
  "key23": "54UetFH1C37XrYAw7UQEmajWSMZd9bdzUMwcn5P7aSQ31yMSjf56GdnuLZWwsUCioPCBuzCpVHDYuayHQWQJCeCS",
  "key24": "45msBJT7DVosycSEBqQzGqwh9zryD3Mu8oWhqh35jx61w8bBRGZZ21sYfN8rNabWxZk6G4cHxxjzL6Svo4ivSm4c",
  "key25": "5GvMVZj3gkyYHTVixe2gudJsBqMTz6tteoovs1jLnnmJaKxL6KrgnimLDM2eRqch8HvZ8bMeg1QEtyFbh18i6xjY",
  "key26": "QssTUS3JNMrLsof92wB8yC85diCKofU5KCRg5pjSTmkkjwKLXpAp9F6UcvUjgwGznEdmDBPaVGGXpT81tYh5g8L",
  "key27": "5gKebViyAH8iosaNWu4o1bbXS1fFqQDrF32vcGv5GMRa7g8JfAZQQ8o7LpsvxVBHgFXAjH3D127tRRMEwN5bEtm1",
  "key28": "4TeF5CJeUXb68hteZdhn62S9ApZvj8Y1uvcbEZ6NY8CxUbjdDSNDsSEGpkR43xVNmFr3hCSMyupL1fsNXMGwR4EN",
  "key29": "mLYGtzY5iFat1ZMaRvSzTSPHRyqxQFtSm9ea7nhrqojRqUg1tmWxhUdZnsE79EDxDC1icJji3NnpGTwkSw1nzbY",
  "key30": "37RACUZeQqwwynq5S6fC6nLWpnxCQ8Lz8RBrUkHNPMxraVuyq8dBkVcDHh64EvEGqvRbQAahdB4svnMRjXPV8jhE",
  "key31": "5T7xYfpSqwcNxE637JrTDornP2zH8J9temeE2X7neSUDafNanKPquBLtm1LpDPNht2XcvRu9Jjf6Av17fTDZbuYr",
  "key32": "5kTgVAQBrkNweGzNuazTN1RA7vdbvCwmjnSw8GRmfzkhLnkzfHeJ8TQYbR8ByqXd3fvLGYjeVAFwVTaPsyt7G9z8",
  "key33": "5rhidrLbehzYG6o3bCcaCCFY9u9SqhomtYAMq7uDhYU5VrHHgcQdUrUCeYTie2CqVwiqu4giR1udaDKH3f1R667m",
  "key34": "41mqkgctLEvNVwv8jWwFDEymWL6vay3E5Px5t2gNiTsYVf4QPogvEaS8fcqKw5tFbhNrrEqq3fdfABPs56FaUw8R",
  "key35": "397SUXJ9QNpS9T8ruwnCcAwhKQbWjcJfkZ5fz1gCUnr7adZHwpQoFfxLBED6nWuhUaKMdmVXV8ysqFaKJsGraU88",
  "key36": "3jCcC1GDiiynxpx6NsYoATBB6gVgvQ8RBZjN629122R6n35iHP76svrLhC63szxxTXAAvugWNAFqZpyzASeSP8aN",
  "key37": "5ZeY9Wxn8QLWVjAwt8Xp6CSvTQo53LdNPBnoW5hNfMiioSMFz6QJmDd274jHxT8HCwEvRTR3RpCVPger1zuH7MEM",
  "key38": "sXjPCuukhng2k2f35vGAFYsjKopuBNehfwZUzZojJ7LLCcWf8FM2yVXDyGVZ8tgk1GPL89nvRjhgxziu7ANgRmJ",
  "key39": "x7vJf63KHSH5nSkvxtZo3npNmsmdejPmwiUnR1ccZCTNHVpTBRyaPMzD38EGsBR1DmEeRjxM58wFDhPQiq9w7eJ",
  "key40": "5R5L19E7htkbyL6ziGZbQEEWxBDhEh3395RYz4RMVigwJffwPHrVWzDuuChgw6Mi45UGskKVRmfZC3sjpgNsp5mQ"
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
