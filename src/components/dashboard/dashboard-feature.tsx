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
    "38dN5ime5HWGawBjFPTtPh6gLcrEfkhQvGfAtfmTvKgwrJSKRRpKbmaAHBGqSkDKwembJmdDJ7843Nb7vZL6fgJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMedXt8ccgHTDTu4Y77smZW2gR3uZuB7MnZAyNNXXmdP4ECp3me3SwM6j1d375yhpQXymGQ7ALxSDmojBRfzw1k",
  "key1": "66LU6wJVV4uN1Wr9mGWMs3Ahw4qa2XMyatYNDTLShACGCL1uPA1wNiLszFzXWWFXSwjayHGQz4LtwBXHuvGv2Tb4",
  "key2": "2mZVXGiN4smH5cEdT49HJddczZiKC6Gxaa32ntvFegHDGR5yGZXFiiS9cHTvZNmN2DytzZV92wbxXEgLzVrw2k82",
  "key3": "636UuRXHzTzRGZCUg66hiVJixWHcHUn7Ma1Se8jjQogjfFTqgmLY52S3LuAQRdph2C3tDEzHWEh9eAXBHuYMdRAk",
  "key4": "4nU3QT6ZdhrZWL1yMfdQbwMVDrx9VUYvTrEt8tgRLssnmH3fDL48dCG323RxqDsjKs7UASsLz77FKnBeo8RnaNjv",
  "key5": "MGFGfEKcTTrGJB59cohKsoJzA16Cn7WXatAnwv4VkhEvXRnipXUgFNT2CFec7CjH2RDrqdjRWqPc8x7uJy1SWuf",
  "key6": "q1ySYf8eruNN5jGT4v9GFN34W5EDtnA3EkyP6UQYuMmsG6JAvibUX1ddVCNDSvkyaQKK2suWUy2mmyY3oCB5Hpd",
  "key7": "2STWiJVQLGnsoF9g9jz3vdffNuJcWudJcmAWxwt8VeP7xwF2t4JQ4WYaRA9t28ZwWnuAihsa4MHm8JJxWUL5DmbY",
  "key8": "3xAZ1PtrvjCDfUVxMSaeHprqwhAqgnZirbWehN6j8AwzUhMzcZJAzMKw58BLjp44jzv87Umx1QGyHwLUB36ioBHR",
  "key9": "5r2UQ2zXXtb9SqqnwtJfSE4ogKdULgpQ3Hx3Bum7oy95Ta9HhtJewtJvKoAiAJToefBuoRtHjNxREPTZRJSXd2p5",
  "key10": "4femiwLAme3MLxkPgt5nArvkWSDF5MZtm7sq1eFVCUMZ3AS7GS5gTDX4Xwrnq8vJeKXWwT6F59AVVaK5Q3GcD7SX",
  "key11": "4GKc4hAPQ3wDDv1XbgHAYJnXjKYTTMLyzjFqxmsi8A3eS5zJRaiVGTgti6F48P45cEGq8jPhho7nNneqG99v5oNH",
  "key12": "56xxN6mbytTCFWitrMfJLYbUJWzBt3YfbPwsCKY8ANbVpUhw1tu2F8U9dvZvG1uc7z5oMHq8qTMgB9gUcFUHabkS",
  "key13": "2Mk7LBks6dmzHcvGwJf9P6vUXeWwA7wWe8z8xwLpXZ2qV7gZUtPivSUx89gqDSrmiMbGLQPhgBV6mm8jcwfYbwqj",
  "key14": "2TSYrC66YFc7Kz6BLtfVqhN4AxynH4d15T3pFVMSaVNRzWv6KLbyHrSv7159m6sKdDM5mqGzwv761uD9ABnTWyWf",
  "key15": "3dNpxxxxwpyBQFD143D1nb3gNotH8v4zaRHmPDLk4wiz7UAEA2DAwKqoMJ8DezJH7xRwv7s1ry4P9mJV4MQuaWUK",
  "key16": "HvhdKAeDaKVUUiBX7NDM6TV4WyZ8oHCNu8vpvGiY56YRL8FupakQERgxSCECV67WvypAVdnjMjnqxwa7CUmN5Py",
  "key17": "3pBj5keibkop4a3LwCHV3dRP9h2ZaDWGneAM8p7wFiYzchniUzMdoA1EZPNQHsmTT69M1WmKvLBqufXwJFiU1BPs",
  "key18": "YWhZsHaNy5pEt5tEeBcc3EKbDtUFEKCS2RrYbeXXio5LP9qwTaEM6gUmLipGLkzPTfm8aZTbfi3b3et7LMRvdng",
  "key19": "4fQc7fFktSMHFQbWQ8dmFgAKmzYhkMLEjoGGsSXWTBiz3iwzMn7Ntv2ryvcdcRTmkfP2MtyBDYW5iMRhNPyXL7DT",
  "key20": "v27Q2K31CQQMdQ4jAd1Zhs78ByMVKM3E4FU2kJpzMrhufw1K4QDTkE1koyp2dGkKq5BfkbcXGWzWx1wLZREWaRF",
  "key21": "4BxestefKn2s3G4ymXUE7mAz9yBwqM62N5Ldh4GziyKTi6PXTVw58YqZ7WSEJw8aLTRqpyPaBcFBKkU5xDnvtuW8",
  "key22": "62gZWHL3tbhmNEdA9EJbykBUVavBRVSQRGS28D4iEJu81nVm1ZwkjjwR5eJqATJvQ4EEMJ3beqQRbWx3518FoyxK",
  "key23": "5YRRzSJd1tun79FkLAcDXpti9K8AafTaHGfrUbkRVzsTaajZ2Z4TjvGnnRXLwPP7dryGdfyatHamakyzyyDmXXQC",
  "key24": "66hdViYgoRKR3set8P5KgcPehhv1Bcfbboh6JbipUoG4pQMgvfiUvf4Rv1PST2UUJSNoqHZ8CUHdwAPfk3hEbssz",
  "key25": "fFirGVSSVtY6j2osaajFMgW1AzkF4ceJz8562bFY5LJkQJ4wx1dK3q8DNcrGfXzobfFNePZGtwbKhabBdmZsY1V",
  "key26": "2cB5ydokmgqTuEXs147cBko3LPDn486q9nMAF5n29GHWvPRRcNbq3vb74BRosAxHdwQ9BNuMWHrD33MQ9ZQNmHNZ",
  "key27": "b9HG5EYhJGWCYuZeraaTSBELZfPPRAidbmeRCLwhVjhBs6ey8doGW8NDV47wEWrtTSuf86zKkDJge8WHyRLfLWm",
  "key28": "3o4HXeJNWjaBRpbXG3kEe1iysQdN726u3Vw8U7S6g7FQEaMvGVAkqBJrDwTMnMGGcotLxsahr2GVygrJtxvbjs3v",
  "key29": "4kpSbkDEupou1hoEpznihcjbNWehXhaNoG1SLVea7g3MoaA49bn2Q2ojBNtaCjF4TjMDw5QcvW75S2crPAxJU2dV",
  "key30": "Hr5PSvvG1A9R76r52um31ve7VC86vWp4TGUJa98SceAfj3SCLNCmAzZNYTSR6v7NVNBPF4fPei9G12ds1euTTHc",
  "key31": "4kb7o2YxQAur9Z6AFfJY772gusEUYmuzvcweeLfsRrffU2hm6jDRYfGYq69HwappyZFAG5TGD9aUTBchrgZXh6sA",
  "key32": "21BC7Z5vxbfTVmiVWpqzNngHkwxes7ArX5k7t6Yem9AbqGTyaN9RzeSo45faM6h3wsMMcJ2c9ufKfnahkB1dfCUd",
  "key33": "Y9MmmKxEjtua3QXhEcMAUBXt6od5cJcwStsR6d1BYGFuV2yxYoqNT3vhVeTrk1fzoaNRVBoztbKL6qfhuBYEvdb",
  "key34": "2Q6fFq1Zuxbz7AT7qfgnTpFPtXTr8Rzn5Wm4sSVoDdFs7AFth1xzajysiaooTUGxNoqfe6eWGfryG4He3enNhG4M",
  "key35": "5zyVEWTDBCges1nLMwZj5XqcSPtpAc38k4UgEXXJQ2pWcryXsN9vZqzPTE5ypN8Kub5SUxsCxzvYg9Xmvx4toxUZ",
  "key36": "4tfzbCbsa7xCzUh14wGPmpaHw78gkWeruaDBRG7wdAkTtRiXsSzU3UxRxN5UDSn9oFgqRhEke9HnYiDQNnuSykzR",
  "key37": "4hjebusaWxEnJN7ubKJGyWAoQ8vP6vCfpDLWzFpFv4n9U5GBMHBxbr4vb87vR7o2u7z8iuHHjewT2sLsQDuDdg2q",
  "key38": "5xaKbYPCoYyVmMT1eHyBTFdwaSjaHiJdeQNw9XiJbm1HNuYEXtfFTkEVFRPfQUt93mNM8Vpw2XQ6EJKw6EdX2R2b",
  "key39": "4DWubeLY9pcd5Sb5dSiGAXE6qERWKX9YzeDxn9BDexDWAyveTLLQ9WTdzseYSnxBukHpU5EW3yPXHDzcEguqcHrX",
  "key40": "5gGQhuYBTeXNxPfJJHb37e4F7VACr4Nm5GcrkTVgyoUKWiZ2rNhZR8MtXJ5iq8BUG4U85vTgzCLJCfnVtfZBcnCb"
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
