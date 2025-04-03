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
    "57cV83hKzjg8FLupibZ2Pp9XJSZLtpsmNFnhMHNas8EnQcEKy6ekKtZPXggkgg9MFsuwgtKEXLS7n8Jq1T8KSNoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moQhFD7DCZWwNkvGsY1oFTyxN662bYX6JDoEMFtbMsFEj7zor4TyLCWBgWBrWAueFZndVDzYqRMDkZPqNTi2bn7",
  "key1": "Yw58EYWtHT5yB4mxNPVvHvT2bxE5x6uJThaxsCpJQxZpGhwB3rDq15cv27PkdWUBMB9fmBrwYh53J3wxQXYyzKM",
  "key2": "2NPJtP9vuT2qcJ4yHyRmXEoS3kFbUigF4QUbusfL5G29iCXbXd7BCtfGBbNp7WCAp6WHgm92RLeQByVMAZ4fq9Sx",
  "key3": "RTojUHN5eMkBYpx7VKrjGLznvuc3dA3KGmFK47kZqSa24ZY1czEzjpjsLeuRsfvKkGSkazvecvwWuQ4zrfgo3Ad",
  "key4": "5YW2kZLV57zz74jt6qA8BhUZ4QDfUCrnktKeyhhMmCTEj3E6r73WxiUSZrBJVsrytUKDoWV5AgVvXXpCrNkTgia6",
  "key5": "334XFZBKriNoXbuqG8jH2Y6MhNy8WxK7F5R5ZtJzYiHWFrHty6ksV8Ln71bsuC4wrc3UBdTQiZbhQp6kKSgfFZWf",
  "key6": "2tUmCe5WB8u3EYGPofkuQH31k8QgdvpWBinnKutmA2H8rmetHWCZL8vFWxeN4CGzLANGtifZVMfqwkREanJ1Gs8Z",
  "key7": "4vWkFvJwu4vv3MuWWGvyCPvfULzXynRkD5mE9yMsCUKgD7RG6oPSS4BX7bs8xJwoDjwPHd9hmBcZCg21217W4zn7",
  "key8": "4gNzWs7FHshANt3hCAM4K6Hk91nqM8qnew4Qyw1hukjd6FPvVzP4ACR7iDAQr7sLu6BpjUKCLLcX61BMG1rKtsvq",
  "key9": "2HFJwb61o4nJxaWhrT3r1wrr8NGHBHKog64aHZVrfgBDBf1whhKiAj9XZb356PR3vDuEzU3doqqwqKaeuM76PLfb",
  "key10": "65xkCj9iQjknBNyFfPhzNK6iFoBbnLy1sVU4VfNNw9sGuf7XeC1TYoPjzc5Fy7KmfZAr5jYfDesd5hS5vr7UtV3P",
  "key11": "5UuM7X1NWjzzqiqzCABYRcNsaLPQ5832LLG2AooMYvsbgagn6vFYHreopeUyv2qt67cuJC5GFV1LKnKcRrJxvy2e",
  "key12": "3vfeFzAuAsBmPhEhUqMWeiiqs8UzvWJ5PGiPojSTHbEeqDniiwypmMbKRHkLJy7UZiA5PVYuKz2ckSvu1xs5tDjs",
  "key13": "4jeS4kZzaBHvjUDrCxE3tVSYGxhQmzwQAfxEnedeaRjKFBzxfMoZ9neBpCq3qCntfcTvic5uCSs6SXTjSBh1X4zV",
  "key14": "2hTwLANfAK3qxMpzJiB24SJ1pHd3FC7R3K82ufkgHBSFKopRqNzwVMMmovAt3FAJ1HZLP91gpmmkGbDhNHq2Lz8r",
  "key15": "4dckQr1Dd3tuagKSeo781jAz4WNz3HWcqyxFbptDqDgvm4n9vhm1zytu4xZfhNfGtoTjP4oGF73x1rY9oKsnkmtT",
  "key16": "38hTinaGCwbpWzNNToQAsP1DCcDshJcvna6zT6dMG3YibZbzATv4bxZkNGQsXXpsWFtowCJfxEnVe5jbzE4mex4Q",
  "key17": "5ReXj3HSRrYFHhopyVPDz4Jv8q5eRGLx6z8aQLujjmKKkU8MVK3uowSEYpa1396ovsMR7PM5zTiC8nSWM9KAWRfR",
  "key18": "4jErwFq1B8F4VizdVz6sV4w8kCk3uccSuuxejQDVDL2fWL7k6gZvEnD44W91NMzWTwj5p6RJcKVCjuko4unSGvtP",
  "key19": "4fHkSiMyEeXuFA2o3fiY9ZFG9LYm7Hv8SqaHf7zNPcpmHWtMZGHHX6N9F36xi8mbnzuBpZhgV2Tgm4UoETFfF9v2",
  "key20": "4i2g1wPxF7LXYDa3qGx2hGFKVcaEtbSG1Y6XcP2mBCQQ31qE9ryNApFwUumfHYbPqiFbhaLLuvxnf5P1gc9JP61h",
  "key21": "5vmx99Fz5b2JjgH3h2Zy6E9VJTosGxkzZKG5hHcXZLUz2Hz4eZgsMTP4vqd6TJ9KQymm4xATCeJw4UWLkvWdvv3g",
  "key22": "4DtkxsphDfS2LgoXXZ7hW2PUBdJBovbu6WonSx1zoV6BsqfacFMc4FiMHNCkDiW8REZmLrg4idmKr5jPvn7sEAoU",
  "key23": "4E1JcFxAfknVcyD7pZ8hPwHuErGdZzUE318MjiVbB6ZCAZ9XQni8nyyx72wV3UePEKJy4MNWFxXHgWwZ6QquLr8y",
  "key24": "248cjUzwhxZ3tv28E3phLzKomVip2i2DndNaT8evJc8enMnhzKMTsh8gDniqVT2W6biXcqkcvC8DD58wrTuFNVen",
  "key25": "3ky1PZUc5nEGKgiAnvLPoYcC5oEVVCX974BbzHZaAGmrdt1t8KERazBcrbTXcmc72pcAbyNcCJtuqVJZ6g6EHc8z",
  "key26": "5xtfZigKJd5n5jYcaiiQgZQJzvNDn6hz6cG3RXpu8KGXVn7XJXZJLcQGnJZX1iUTW6uRbgydv1yqoYs7u4LhHUe",
  "key27": "3xGdgMMBAbdCtrRAfKdHhDpQMMqde5RJhqztrCjNtY3hu8ZuYbukr6RPKR2bbNq7ueKoaMWvJXs5AEqfArizsoXQ",
  "key28": "5UxP7KPsVrTyP2f7MB84LxrgeNrQZw5NpxbXxTSVeopsi6cds59ieSTK6wnNi6mPFXvhfp7hY9DqG624GSoD8tvd",
  "key29": "56x5EnD7S87Tnc3Riw5BzAdp9o27xHphY8p2h6ZUpZHctNSS9vdDansagSCyNboNbRV8W7WBVwBdhJKmC5x9pTFE",
  "key30": "67B6mgvfWthfCtdawuAVxTsgyB1c7CZ85LsrJaD65Nm8EGYTimBW4snaGyGNTbkccKvwmNvWjppwGmpGWHVb2DNL",
  "key31": "bDAYw8qE39m1uVrbXzKzCNh1NMvCKmZDBnvnaZCmY95twQo95r7BnbtNNGH17ZG4GzgtwcnWZ4Zeo7iDCFiwUSm",
  "key32": "5wwKyW1YxkyQbvbULUYw6wJ5kzsjWb3d9cbFJtvvabKPnW5tkFDsKzY7S1NeyiwgGCBiJSuBoaotsUyTYX41tB3d",
  "key33": "5kz6aEUSwYVWBUB5E79BJDx3cKb12wFxq1KmtSArVe9njcXhEaXaKP4VZzNbKruikjABCNuRDRCKG56pnyUxL1zD",
  "key34": "3N3Yzqwb7hcT3g8qddK5xQne871AeaCtk7fL33xuikFFMFxgubGEHr6WsD5EQjRz3aJ2mE3kXmeTzjJimq4ychqx",
  "key35": "5BiyG6ubUGixGfFUMKoyneK6koJRFg3E189Q2Ne81DG6c9EALud9FPCspRDa8mNjMjq55ntdLr6NQXYBawGGsnPM",
  "key36": "sk8WeCmnedatEJov3sG88p9MeGcyvSLvGLCahyLjtUsM9uvRpxtCaWZYcp8zBKXizMxMAeSGcwyhDDj9j3GdyVJ",
  "key37": "2aRhFwHfBJr5zcyG8S7f2EYoDytCpriJXz7HC6ehJxPjsjrTwvizagcFPfiZ6iV1xnVYS3EHnotGiywrRwhCesA9",
  "key38": "2YZcWRWYmsqAZT9bo5FPQ8VES3GEkJD1EDu8ixaUKWijPH1sEmf8jCf7zQXRojMgMBmKX1JJC62k6yFe6SAxRMFh",
  "key39": "2T2ArpawbYFNhJFD2kLgKvRnkP6nyV4FcdcDRbgCDHwKFm56K2xH9XCBF9xX7TPTrkUpjkKvo96B7zQi2zuQDqUD",
  "key40": "4KBZREioMDcKZwMTHRHjuZY4Q4PJrtqmgaNDF4BEhBpo6NNmy7Bt5rBn5n6rLQbdh3XnMhctb6kfy24ETrhn6HaQ",
  "key41": "5Qns6zaeFyKPc6kMCXVNWtHKWkN346VAX3ALxvAm5XCwfBzjnW3T75v992DAg7AMjTyvSHPsJ43bmdzbpQDLbit8",
  "key42": "5pGrCKReut4btx3bSCVaSCVjNAxTwho3FnweoX3N2sqJsEsRZ9ocG53dLM7U668K6znyYovPPDU4jHWahky3ifun",
  "key43": "2i2JGRMWZxsmuCcDK7Z4SDMGWLNGw88qdtEhLX1GganuSPcYVDWZXny7yHKUJ9ZzHTqriv5wSMf3CixxUKjgFnTb"
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
