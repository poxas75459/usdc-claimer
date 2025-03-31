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
    "5C7SuGSnTeRVXyNUd8kzUsmZkwtGEDLoLREjzP9cSYoy7y3vhpbqvUTVgebGSGwXshpi4DVZhFTtqeQyWCuyvznv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEYrJykvrFcvWc4VuS37ayT7TCLwE3c5ozn2hoLwNLM6WVX7P648AHtMfmmcmDuFSRHKvjoBa2LKqJmqKnDfVxN",
  "key1": "5egtQdcdSgmpZriUoL2X2u4KZqsPwYju8jTrfnTczDEwgGcq7PQkkZawo799jGQF1AQGY7zBc5WWiUQYsSMUdayC",
  "key2": "x5bYUR8yy5Q8QTx7YRwnqg78LyggVPGvyALCjosBwdS5EBrT1PbrNWS1LVBvoYT1127yfkcVWT58C7gZ3ViKHBp",
  "key3": "5BiRsVhTwjjehLx6vsriuC91T2g5zMW1p4ssGcnAJiSYVjGoZTksvoH7fKMFLKSBNK4RqHhM1yJn4ghuobLGbMGk",
  "key4": "ddkaH3vp4ZTgduNnvJcRbLJzabhTs9o2DgoNMs227ZsAEVuKzHbaiiw5d3hSvgGHyPunP4U1FECmCWiFmpnapce",
  "key5": "1y3bbCwGykk956x3mSonUMKZeEFfptMkXLV179trGSenYz6Eg4TVvx9iyzphdTPvP9wYGHmXieK1YDNGqEj1dGT",
  "key6": "2GcrSJKNaTNzq5a3nsqq1qPzZ2H6jBqqQnP9MmpreUvXQE2tutUA3vTdKoJFZf1VVDSJ3V7Ecn1KSJMe41hS9MA6",
  "key7": "3gz6xXtQuz8HZdCrQBh9xyxyMNpZ4B3butzNLAyQHRE7ksJLLwEbHRKSDS7neCs4pfpPmhEovusDsfc8tQTJEYuc",
  "key8": "5j7gEFRZHGJDmRrSU9NnV8mG99o65hZrEgyGLzqXtGg632rWAkSfhu1qhdxgVZq6QyKGmndMXV2TwtbuFSyTA7Gi",
  "key9": "2DKWJSHm9LhBAX6Gpd4naTKQt5PoeTeAnruXDPqPcY4JzsrDYe94QYRNJdEF8uwUz36ebPpWcXp3dC3245h738gN",
  "key10": "7NMXH5PA3HDb8NBxYDo2cr9MQGBEhq88rZSCh9A67cdxDNG33Hc3d4eAmzXThtAVG74NQYRNMYStStFW6iajGvK",
  "key11": "37pqqbijMhktLHciwggbnz3jzAM7y6xLasj2Aa1X1y931T59fYgbN9P4xuerzkkBWJKEXn3jERuP3QtbvtMrAoXh",
  "key12": "4uWZwvHqKTWsba463ChCJyQhcfc9E4ZfcybYsKN2p8tGcTSWdipTt4FT962jWw5mm7EZuKcMdqMqGm3sxY4mzN73",
  "key13": "4cVmTsqkdLr4sDhRGW4Hs9obtpFNVD8Yxe6PEGJgBqwYnbxYb9WPphWDy6MJ2eLMF4Kmv55CEKVWMLxjPyXS3p6o",
  "key14": "5Py7j3WH3WFWBrPTeu5Xe4FAb6LjE2hRbKDifE5ndzVCGNkTFhFLYjnLgoW1HJinHY1L57JT9WAQuPFMmsc7xMRy",
  "key15": "3SJikTVfAspn6RnNritEwuVCcwiCMismX34wEnPdNPVzDC9NHPrdR2gk8aMcyB5eqJL1asmLGvZjJEP54DYiJ5dS",
  "key16": "PkkXYeNVFUNRrS8HjBKkHcPYPQSzfcjJNPRehKteqmoVLZJPixE6pbzeeJoG1EGK9qkcpzuVpBYgQ1uu9U2sAd3",
  "key17": "591WZ5r5qH2kw5R5vxrXjoPXMBvp82A7KwjmwjKZ1sV8LQzWXubLBXcHg4WZy27WNWe4GE9PXkU7CxzUvy1aq5Em",
  "key18": "3eiWNwvPTRZmwTZERUezqKnSX5B6MMiNBzUWwjvpQwEj9UDx7ReKJQXLukTwXcDWAoruXbYh9auNQ2v548q1DqLK",
  "key19": "huQQaeyyeQrtgQJhwjhi54vaQAVfzGuqgPhRLUYf5XiRV2mNWGrRQiwRt5dz7rNFvgMraCaVubgwQ4n2LLtWneg",
  "key20": "5dZsKPtaRQQDdwThhQo7WQSmSiorSUPvzmvuKvv2yc6z6WBFLyYwxbxhVFsbhPpWTB5FtYb8AdBSjxn8SCEzYW8x",
  "key21": "4SVyD9sr7X1sXga6MKHTjJ6VMeLaKYiiB7BXykNwZig8nknQfwNLc3Sn5nrdTLfE2gPfdnpY26a7oyHwGjhz3AKk",
  "key22": "2EtzjHdQVhekTDTqEuVCZid9TwNh3dC4G5mF9EhqRxzbiGW2osPfvWn3ccukkeUAeLMfr1s1KHyvnAaeStBB3juQ",
  "key23": "629YDVyLeZhd61CemsHapfme63CmYN6gdsBEQqix7XrthVmikJ9Bqm4afhENuBuhRhoT6a7qvRgeZwEGLwX7E5BJ",
  "key24": "2VvHEocWRsbm2kY67i1a8HsfBptsbC9xcz5nRSX9LXNrkJTf2V7jhnyGtpkedg1g9iKzMSFkzH3z7AW9uY5cbrdw",
  "key25": "3Kt7hNv2iWcZ9UfqL8UgSFfgD73YbDtbavfaCirsFbWv4AAVNJho9Zqw1uf6EtzpAQ1JA9sb475hvmK7YdGXsqUu",
  "key26": "xP8emipghAWmHGJnQkA64WZyzvz95Kq23XcMozKiR9P6troeAkoBzrtwgRBQ29aaHzi7AGqPT1uUGzizorcTbGL",
  "key27": "2Ar7bDN27uje36TX5xmRysG959PPXHEyEDNrMx1ckA1HnFksQ9Vxpx6kW353owwgtuZ4rDi8dSbqLRfHEaiiqKLJ",
  "key28": "4R4shd5BQafdF5MPNPUE6UmRzcRnmeRARZsJtTUB9rUkSkYUynFNwzJLmz1WBJ6zSe4njPQbCdiEpCPhLJkvs5k1",
  "key29": "5w8XifcNByScFUzEorcbkj1WEXZHr7erZmseMNqeJ5a5EzxHoCzvqo8XKFhARSebFUusYbsceXok93T9DvEKr2oX",
  "key30": "5DjWvPuHk6nY9dD1dws2bFVzcAitX9FVPXLmTQvPmmKUyKUS9zBRfBfK8fGMw19cdtoqTfRNxAB7tzZtcoBLjaGr",
  "key31": "37x1bFFveCM4YieF6fDz4aVw8rmKu8UtzU6N3nZWQVQoohtxeEf2SWjPHTYuSQdFmQJifpGpMHAunrzmjuJ2siyz",
  "key32": "2Ts4kTMG97iUHnBmTVFj3A8T29G9L5mUKHYKkMUt9FwcPzfJx4GvmoxyKUMEbZi7EW5kFQVviga6StzJPLwYu6a4",
  "key33": "4tHLgiLnfhjVFbtvEbJfLXekujYkXYtFHiQBeBwRaqDyD1L9DZePdovCe2yDBp2H4hMfBPTRVTh5gFBzUFxLhGFt",
  "key34": "5Mwe9XF5dXmdGMvFmDSuMMK9xTrm1DAastm1nifYgu2zH2RVewvqxsiHrP2rFSobgLAkh6wTp63AtXLDEn8zLDHo",
  "key35": "3WNJBEW1bzjKvcmXMjwwpLmnTENM345BnLg8tFYi1YptVKNXmreKsufgawBN5rWPJae7DopKTaP9kj8eBSe87vsq",
  "key36": "HrUMM7m8yFGZ59QFhFMF59FwjraVWHjRRg6nERxKRuFdoPzXr5gwpoUGMHWo6xkmGRhwVi5vcEAiAdMYq1i9JRB"
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
