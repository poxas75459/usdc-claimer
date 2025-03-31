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
    "4u1UmkcENg9SBrXuXMWepfRNWk4HEYJkRFUSAGcuGbsSevTCHfy78B9RCj1pQruB5xsMi67ynZJqpk9ghFayACDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QTdAVh2eB4FG7ZBTNqNw42f3JQ2tAfYQsbnTVaLt7mZJt4UAzMEdTiseejU6BfLJ2Yu5t31GmrvKkB4V44Utsc",
  "key1": "4JPAhfq7ZnrjQLctijaFe7m1yCL5XVK3YgEUftGuT5BHLcKFiW3LHzyVJYXpq4sdwMbo9ad5SnjxPpSPrKcu2E8c",
  "key2": "4nrrevxvhEng8CCXKbCRNv51eGoLWB8UffyegRYuVjV9ZKNrRu62yTKNXQUC2vHjjhuPA3jhsr7u4eHUz1PXR9Pz",
  "key3": "amxMpkUp51Dg9RQtK2rzHYCv3t2VbUQpgcn5biEfeQxh45nLasfWPY7Y33NttoWJPMQJXBNisusQYbqPZjtBHc2",
  "key4": "2m5GKVosSckcJeRiWbjd49puCcJbbYd5rL3WZ5iQZewV8hnUKZqUJMoHa7B4ZHqsQCN22JdNKTyYZ5UbEEiqD2zz",
  "key5": "3LC3SWnsVyiTDNi32MMSbYu9j5uMFD4Jyav4UjC5sxWqoBXed3HKZS7pse6KTwWn29knAkydZUMvQzKvnCtYFBYB",
  "key6": "5vEJ8uTGuBvZMDNCCmLFfpgQnFKpSjzCkpiRLaFAxgd8JrmCdVaK3Z3U2aDoJVeMHJHYtgXum2dPtsKXecbh7NWv",
  "key7": "63rqhRG3Pdc91RLyf62vbDrRQRAgcXtcV8CHgTYJp5jEHM17cTZQEgqdGa2E5hDoCYExePLvucjXs31WU516C7wJ",
  "key8": "5ozuG8SS2FbYJebE4TB5fbJcd7CCJNsADppSG1Q6kHhCyEKusyfVX5LFGPjn54NEPDW2L447zRXM9TCrxB5QDdbM",
  "key9": "3SGoybavCvuM44Abf5vgFeA7ptvfueUyP2Mcn3Mj2Xy1pfUT8XJ2vLJ8zct2sk2AaCEYGzeySBRp4fiJoQHdTVYs",
  "key10": "2hDhnFWpZ4QscQtmAzxzXu6EpGRbdf9VyYyBRDviUg7GRKSSno3dSobagyUZ2Zua7BH9QxptuSsFiuZ8KhEmMWWN",
  "key11": "32rqnNKjzdsV3QxzJWzBbF9Gv1YeovQ1TyYfhW9GjyRGK6vVKrCofeaToV4LNGPGJHcSuYLaAG4KAVCpwuLvBnMq",
  "key12": "4JECf8XZzPzvPyxswf6wgrWJo7tdn1sFP3f9D3yf2B68jtrFLKvfBeZhQKRx1S62u52nBsqXzdDKMffEUaLw6xRf",
  "key13": "5w9dsxjafUKBkgKmdYTue3fGNKdwUV1RpX62pXX9DF5CvUo7ujQCATm2HGzNA2jd6m3yeSfLk16fpPbbTPWP5TVK",
  "key14": "2uhqbG7YMqH1qGT1PWKjy9GACPmn4u5yc29JqyLBJC4KpbmxUXg2gsyDu3B3DHsTAiaSHg5W7KsDEesQztjKePHS",
  "key15": "4mpwb1d1Bggfrj66jBRunVuqDh9QMez4s9R4XeQY2p6TP9W4oURKYtDj7kHxYQ53Tc3JfsSuQVbMHh7moVjTY17z",
  "key16": "5xsZidzcNjjRj4ZBXMpcXE8MNoZFjAHJNKiz11fxpD7F1QTnhAHnBKQVRy4txdu3eWXSaT79d6jn4XJPLcjhnLj4",
  "key17": "5R3NZRTH5YgyrA2vEEFivHgTXTGZxytQthNfKybLBp6qVw2hvnd8PWrSzpJFG4ZVE1Rse7wjqJipyC1kp52p2NRj",
  "key18": "3RHw9qtmG6vzkJnPa3hqEmcua3psFELB9zEcv5ka1bKFhYSguK7SeuLNsvs3k8oTdMjJJfon47GsGFfQxAjDXvkZ",
  "key19": "C4h3UbwEVV6bD4v3v5jDz5dr7gcF1UYT9482cmNgEmjxJAGAW9eJGNGcbxdmoUtS25VsdXP7gSWXYaZ5ww2T8KS",
  "key20": "3CogS5ZQQu8uCnm5iZzdb4kD5fZKcvUv36v7zr5oTMhxqG6nPcx1UHmjc9KuYeMQUSe1xD1XrM2jUoSRUk5qSWXW",
  "key21": "kSyeGtYE4xqjN9RCxNh9zyvYMsXntK1ZXFcRTQbjuvXdRCy91PigVGWqYJ3USCP3NjjdWjvno42pXM8nyqyBixk",
  "key22": "3oWmnY6kLQ3ypupBwjFDGzjVpgqooMQYyyFu9zDPscsJXCfu9Kf8rYsdSQsEJg2qndZ2P4jgys2sLHSTJZ86efPm",
  "key23": "3kTFbMmMPtSX5VJV7gv6zyztQXRaufc7gPWFFaBDqFSuTe49D1imguknc7yGnTQPa5GUnwhC25W5MV1WCGug1GQL",
  "key24": "5snPircAMW4rZxtCgo5v9gLPRYUjKjNXnioaWsXz8yCiUuq7f6crF7rEtRxhfme1u9t7HuosuAHY7xYneUxCyw8C",
  "key25": "z4YY25uzVS5Ht3N65Mw5a7Y3BVnoYGExFks2KgRpedgLYiMzkugHvv86iF9NuCACZuwMBNLDzZHaq9ez1PvsSta",
  "key26": "e4i4Rr7xkev1CoJaH5q7VgPQa7KpK59jEjiXMDFsNHgjuWfso56ozzk9j9e23YBJ1KDJcEJT15CezapYHPidg2F",
  "key27": "3s3wR2Cs6DGVtZpMMaHrGRrCUymP35ohQ3ZzMwvAtNsgZdZk49HGChJWym1REY5kmMBAMoqrfQToVsuvTnayUmAq",
  "key28": "3smcEyAJzh2cxEj3eEP2SKyuyBoTa8sz6XC57XzU1gUbjue5JUaWLgyT3q4iEzz3T6rfYw3jwaB1D1YevaiQM4r9",
  "key29": "4tnSsd61fA2JjWaRmRavqyWGXU9DiowtEwhutq7BwbWuvKgMt9AHfLWHvP6CbyRvt53zje9VB1rTnCyEfr1LcoHm",
  "key30": "3Mnn8Guno3gaioj8v93qqX9DSaUMQdX74HYcvQjhnBgZcZRzKDgQBo6TW3gYKsicKcJ5wT4GKvEb2oPY3wPEqgVf",
  "key31": "4XUSutfoXDUbvdHfLsKYRzcw7tMLTfYdLVWKtNc8E4ArFyQoHys1YLqHqTEkPSzSg187e9UdXXBnMc2bDBH6MLUT",
  "key32": "31LUoGbcKUjhQLwUcHjZYQs33Qms8JAuUBZBk5bymofrP6npJYSshGdmHddHDA6V17zMHWCHQjHYSkVAu6Wgei82",
  "key33": "5VwTuSGSLfqAkNHqPHshcf3wvqmhVfiuvfmQRvFa8KjALTZSCsLejTkxrK3RSjkYqxpACSsHbc1gePPCUwYbnSgZ",
  "key34": "414XyEodeZc4cu1eYwQdcJKemmv6qzgJLJqxcJRcAJcs9kWHLpBBZ3eRToExnQgXcbFsRFWapnmWtrXK2iK5k8Ss",
  "key35": "4im99jj8FbZxGjaTd2h9VYXp2EADwF4mMRj14zKYRJY1MifvAXbfLumFkBufkQ6cdciWrxhQmiMgzT5QVB3Znktm",
  "key36": "5QC5xv7K9wMxymKUHidCr2YJyeXXW6XQrCwYWLKyCvTSd61mYP8aiviKqnduTh9JsfLS2JABKenvHph82Cgs2t8G",
  "key37": "3pv1Rjpbo8hfyjRkzVRzRNzyv22kGru3PHNU5UFgsWbg5kCDHzg8uU9SdtqfsPa4CppAkUeStHVEzUjaabTuRBio",
  "key38": "5Qi79LNFS5kJrWc6E6ipDjU2Sc9dkbLvHj1i5cdePfECnrfCaut6jVBC9SWpmbyy4m93rhr7mdbT7h2a2Ci6bnay",
  "key39": "5yf8HK4poLhSrohCJxPPRLqXFxZ1V5psGhPSRwmhzMhV3JqzyKm9VZz3zRt98PCfwo9w8y6msasFm8Tm9ShdcgG8"
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
