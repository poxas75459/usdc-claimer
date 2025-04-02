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
    "5gbVYrA3Sjf31mWwueHZf3HPh8aZHkSSBv5H7VJJddDVwivKjYeHmfwzToXsufLPqRhQZnExSpugnwoFtjgPLZCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66W1xLy2nhsrb75sSZVXetkHPAFgXQQFn9ArWfiENHdbovoRbUgc3uWrY9acxZRtfhVLSPkXS6PfSZWwwCfbjd1Q",
  "key1": "2tVmPCsEo5nuo7cKfMVXhDEYNh9wRKBw7H232D8uNFbgWwpo2wZ2Hf5rUuSLJSHWrqG4BRaLCXZxiu7mUHAJVqRb",
  "key2": "AVJgQz1bkqokT1NXjEysvBiGENQb4PyESmuebRzw6GkCDuHo1xgpx8freH7d6ZdNWejhV5FY7AtpRB73ZajqKLG",
  "key3": "37Bbf6soFH8p4EZMj7UACpXaghCcoHcTyo2QCpeJUJAtEwTkJDRkiDGCLPv7Vv6Fv6WzLxMN6Bhw381qdHYWcrsc",
  "key4": "4M1PeeU844pg3rDvu9BcBRWqxUbcATEoUWGBagdmpRGtnenjnphUdD58G5T92XePEqUZDjgEtkbr22c8YmcWFa9J",
  "key5": "2Q2nRNEAzqJjpmZfFRoQbM54PbF2CnHyPZtY55veMDwYtVs8qpfDbeKAYUFhxkNbm1Z2boVCXvLCqcybSxeuUovY",
  "key6": "4v4YvMBqUWxCy4CJrhMQNPw8pac3p7CjG9JrAhNCGBgEkE3qaHthBxGfH8QqTuF4djPRQXvfKYbCnQZFZdJYWLQd",
  "key7": "AXWyofAaWvEpfbekM3bjkxz4zac4ZRCX6vAqW6x34WnvVuXYwxh2H43g4Xd7gcx1KgszsVm7Pmj31P2mSEjUPWw",
  "key8": "3pAYzeWfNZWUCeoxTLKTYzrbKkdJFCaKa7UJfUHC2oEJTMNdNQjYApoH7j7b53Nh6viE6Fjxp865dAWkPExn1aYp",
  "key9": "2RGrZqtHryYX7cQpwwLoUmaF9mzoWcinQap77rLbTBwquNEXFDen5G6WYcqQ45ADWGVtKt4vKTVc2c45NbtMTHAb",
  "key10": "3fcFsRQ3RR6EwJRSS3XeNywrVEBA1hzSKVxckQMQhA4jQfs279RFPZwBh3z7p5Dtq5aavCpFoRTfBUs21p2Bm26C",
  "key11": "3vLQqqruivZztiW1pFJdD8eC2WH2AbLpJjdJ1yKNieyhVTDDLK7N3brcoBhMLoV5UoEBRUKqjDNcTsDbx3bLbJrv",
  "key12": "64YDjH5zQk6vrt2QJyWqpz9qVPZrprJGb9eh3BXAQ3dVuJvFD5BjeoCazi9dVN3rK74rKVXcpspZjVCy1rHDyNa1",
  "key13": "39P7of1tVDX4WQNc27UDn7jYkjz1k2ULAWuRMaoMiZRsiTMnuFHBrsKh6H9pGJ7GCRfjrSDa56BaFZt2DW5hboKF",
  "key14": "37m1rn8LSfRgYZSeQnpgJ4EaHqU5VNNwHNSq5ucfChEWdJPzB3R3QUrdGsFLrpzatFMenXZWUnbVFb9WqPnoHgsH",
  "key15": "3hgEJCnNaAYd4NvJsi6SBczMpa7CYUvuTb6kgzSim4iNms2Wwf2E666KaViM5CpSr92cKHGTsYTnLtZe8fGqNNXf",
  "key16": "41Ythp8ZmxAboefUdnsxoG2pgzVyrN7DnzvMpaGrZR4f4uViZxyoNAiUEWZacSCfHRLf9Eybm4njPAQPESFcdMw6",
  "key17": "2iKNbMb1e8s3xf8p9HXeHbCP6NhR7P4snsWbV2SENkXEuqrXjQu3pA2Su72Xtv6WkNtEPkFjjMrfF7tCre79efmt",
  "key18": "27pnytP5tg9ySiDuD6yx4iZmgW4NLaffRkNRmbTk4YzW83NKuRb5JMUg1Qh2JtnUKV3ZgeLuvw8cX1Fboc7gTN3e",
  "key19": "oVfb4vLYt2g3Zvqh3xntiNtowrNoke8E5FFwKgAWMywaZX4dvr4iGbgZte9Q7mrgMPytVp1nR5X38cv5J32PVRB",
  "key20": "5EXvLpnTVcXEoejCSxPC39eyJKvXvo9bXScA12EPAjHEjc62tNHcyxpUxk33ButgH9CzZTRY4jAvFngG6EujBiNk",
  "key21": "3DiEZAnU9AgQcesSjWSspYTBgr43nE8w4vtSb5rLoY5G8eeh9RiLUtHcBmPqR9FXMW9mANgtnrBPXzWQnmz4gjQn",
  "key22": "2VJSqV1Y9iq9McSJBm6NLjvurRdLyLqaT1p42q8PZHG2ocr3QfwHnQdGQkeQtijJWCKJF5RgzgoAqPkZJMCviLG7",
  "key23": "61LYz31Y8qJn3VMwGpoW4qFP7k5LXY1fTqF1bz54ULGxAH1JGJasL1dmoRU9WJDKo1pWwyoLceX4pMhQhqSXgcmH",
  "key24": "62yTQKt7XGiQ4xzcDkxVvMLgLz1QxmHaVNMr7XcGcecUoHMmScwt92dwac1nYEC48XBtV82XRaVqfBpfMAUVsUni",
  "key25": "5gh6DhDeqtyyyBEczs3TSkixpSzmf4YCWS925zyJmxop5TjKScJSDV2CEwPrZkgdVk1zeHViZ2RBnPZcKVui5cjn",
  "key26": "2GbmcvSEfWBFt1KAyGmCLR8Erppdu5z5UziZocYnD2B216MLXLqe4vw2L9UspoYYEuKPS46yBa1D82S1v6yTVuNj",
  "key27": "hJpXSXhscKpZi9X21A8drRzWpPXKWsz7MjUVPm8vEzXPbCiVPYYT6rQPT4Jc1rDjk58YfDfUgwW1rStanBHBazL",
  "key28": "26TGtNaxG3dnMQeDLxNvMfieTCmrbMPGhXSYL6F246JuzhWJSyGn6er7Hy3pWgrQvtpvp2GQFhHqyywxW6CS4XWk",
  "key29": "4JbZLncTAAmxt3D9nXjoSKuhjMQJgxyaRDQKmDVeT475VfmX8ZG8QzvyVSGpMT3Q6UeiwhFkkRY9i8NTJrDB8cWR",
  "key30": "5g6vWf2Xekc9piBdBfFFxNocSb8RXYd61Q7eDy1Ubb9S1QHsAYtGuBwFySX2dXmaAMTzhebtvJrRYdDK2N55n5QU",
  "key31": "4vomipKSMKAHovedxsdAqhA9xKEdFt3rV7szUFgtgKg2mw8skGmJYXpiv3arrmVKneJujSMnq3R2sZhM7umf6RbM",
  "key32": "3PBZ2TQEQyMYfhnMobYWeBGaTVwMT2EucWyqZnUTKhDXnn5huQtbQVJnFFcvP3ewRkLPBneUYX57E5dUVxhttvJ4",
  "key33": "31SCYVNycDRhc9CCkCuRzVtJiZfxRxaBURfKYBri9ohd4ZvKuWoaaz6tYe8GTJYX1A1mdvJoQ1BHgyqzi7TviN3D",
  "key34": "5R66rTFqbnHTKTwY4jQ5niCVGCVNjte5BP3Hz1cvouK6nGRcEVHtbvFtYB6ZMb92Udih3bquqZT62fYKvPE3dzc5",
  "key35": "cEBedj4y8giZPRGvcqGEQXo8bipJj5NMRkti1UkbREwsyUsJKbzcHJyfcH9NXtABBbeydEdzJKkG8Pp1J8otTnC",
  "key36": "2Aa8iiKGpm7d1pLy78qCdR2TysetjLJeGnVzhmngFLP5NuCejf9TarRj3PkUZLfzCadUHYVV9kZLVx6k6HYB2AWP",
  "key37": "5brV6gKgvAR5815L6okPADKUGyLPwEru2K4fha48BymrMUJPerm5dQZyP8MUZcqAkfurcbLXcs5Lm54XH3ynMAdM",
  "key38": "4phvZX1RA9b7p3hr2B8KzHQCUUaozWtv37iFxqY62RjNPXCSz91hcP54ANgTLTjadR1WguvBRqCXLUKy6R2arocU",
  "key39": "3EkYW8gV3vaykYxnP3PnJjBgKmG8wKPEfoC3VJTQ7SPTwuYgMXYTegCwDEV8xTwTC8VhHgxhqYzLBT9Mp2nKewYG",
  "key40": "8JvMU284JPUXyqcFTLjMR3FHAUAp7Vc7P4auhCohzqDQFSSsrPMHHoeFXqnWaE9sWcyXxKyLTG7BxN1Lw1771jC"
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
