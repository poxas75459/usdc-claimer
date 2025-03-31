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
    "9K4n3frUVPZC8hSRQeodRBSLdP7bZWhHWJZb3kqCaHFHcuAzvMxq95zU9ph9SEWkUkXEZdQhqY8Rj9HKAyX6pim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9SzriA2NLupiMW4ng9BpvXKDFx5YAefqm614Wxf9mDoG8ZpfXGaQFoRb83LeroH5P7veWoykrPNxHpHGig4qPg",
  "key1": "3aVtJYsMn1FDWFZ4DwBEyj91a1UiTXrYboxHwkteBft3yCRujKbPYnmNjG6GYKZrwRen8V1cuccZ2JasBHBniYm1",
  "key2": "4rAFDD7ZpNk8xGd3EmK8gv6YYQu1swyLusaSK2gVULsYeovziZefi91ALWPzk66ACLmzAC3UeuXBpJtAtHU9Ro5t",
  "key3": "4jpxmDP92ygHb7X2aFnhTRQ8m7YoQ1N5m2MWbFLHduiCTau1mPN4UQJVvjUZkNFSuu5zMx2gZzj95SbM61PT4ZvW",
  "key4": "2Bd2RchwE8NWmsX7F3KVn3SCXVoeTSBTNEeRsQ6uXWkMdkNswh7MtaxKqDcq8NvLCyyAUyabNjbuVhTx7oPhAhCL",
  "key5": "ZgFdu7npMNYENM3FnwBwC16LAo5qnxeM2AkVhz6syU3KMZByAk6n7f9u7HxHAEUsqYmPRVXoLxWaowZdmN5DW7a",
  "key6": "4jYwgpQTkkPdFpryeQyfLUxK2vpNKUBSzhDhQyw5sNgPcqJGUL7bBPtnj6T9QHVAG88YAWpdmAnzpVuN87sjhoqP",
  "key7": "2VeEvT5bforT9b1KPA7XaZYkqciX8g3pZthZwc7JcetLidVBgmhBWhn1pydYPnbpvq1tdmtrXGDF6Us4AXoFY27o",
  "key8": "4dASEVNMpwaBie28EcSw2255rNwvfhapcWt5dLupNPEVoJjjAtUfrjG7LngyFeAGKiTvwpsjgrVMfdUBpHHD4bjh",
  "key9": "4GPwKyqX6hD6vBgzuJ3b5M5XcLtJqg58CdL2kSGDTGhfNnzTLQCJ4B5GJiPhHmvceR7a2V3nzAHtaA3s3MEaZe8E",
  "key10": "2AL3HQwdeWtUHWdkTkPSJ8MVAVDoq5imBny9tySpUtL9nsQwpF7VVEPP1C1UPdpJujJ8ZXCh4bgawL8TNK2Qe3JQ",
  "key11": "6vn7eeCMeZ8uXcLi33Dc65zpJsqGzTj2WLLxXCJGxFpDwXUmS7MEWDUeqZxFk485FLyRy6WcPPUNEVhjSnCvrNu",
  "key12": "2q4w1bqVarX6641sZ9yZ3mJBGmgNVXEJ7khvMhYE9w46n3PHurgT3YFrqEEKQ8ygvUFHy7Hk5D9K5JyhztEQekxC",
  "key13": "c7meBBptjenRLRGqCGE8cxzKe55uwwimhapnA1yVZKdQRqjQYBN2p4AqQztdLreG8HDstPDuxAt5YHv3NKVPZRy",
  "key14": "pCLLHrrooquAktqDJC55bs7ojqDSKyJ7ZE7LaRPfUpioPsLvWCB9Lca37Eh4oVdBtj7BiU9BQZqQyLPLG7QgD5E",
  "key15": "9mvrXtKuqqvtHtuv2Ru2uUZqKWmhqN1TyFsF6Ne5ySnYoMvv11JBAUuHXMSaJqbZhrVcpRct2ED1yj8fGXKpCS5",
  "key16": "33xo67TavBLE1mZq2iGzKpfrC6Zp9yktdp8kiGUvw3uQzWDgEsitmBCJdGLHyvevyeRwjhK8U1TRrvzLzg6An59G",
  "key17": "41jy77WQVeRNAZxg1miujrBLj4fj1cAZC7uidz5v4ddopzoaNiMkv2oG9tFvNCEKkpndrDZkX5rksXkWReiJ7nMD",
  "key18": "2z1CC3iCeTnk2Xna7oVscBDmheGHNCoRcCut7AAckwG3r18TsxdQ87WuiPv5esTjgMG3Z7vqPa7kzX53FN6yhFaj",
  "key19": "5bFoz6VJ35kKcYKX4JWmTxyA4CzPeYvv9p2fhfafCdn4dicQm9dRLCBNtf5FhRiDTwGZHhmj83AdxxJg2TLEJ6rd",
  "key20": "5e29MdRmcWK5fMRRENbGVcuCKdiXYfXdrGh6a5G8q5gBh99CnewLyNq5SHrJUU1Bwmd6cqgodweno5KfRgaaTA18",
  "key21": "5SQfxMiGZ71adi6q5HKS79j1FkhL3tDu6wsboy54swSrhSPE4uxfoNRT5kMURAchdQoBT7ay4ks2G7CEBoD4hdry",
  "key22": "5ywcS8BKBSNJsvuGaDBJNwUQrZuPFL8K2zpUH4t72HtaBTEvP9mau1uBFFzGvBP6mFLiQmCCiuMeohhr6AFFdi1h",
  "key23": "2SEXvTpjQZW5shbnzedtktPkdddeXRbVJAb6uFLqcnUFbdUKsYrdG8m3HPmNrxUK4tJP1pmJNwiBCTXrmanpniy3",
  "key24": "5D6BAfX9nLymkV7cGMn1EmQts3PHSvtvLTomLg3fX6pDCJgTgxqG9mebkiqzCbuNNgm1nXTFmarbfPL1GoqqVbMD",
  "key25": "2NyKd17MS1B8quctrgpBhZW5nFpXDzCXE9rJzjFwMJcSmFZQGRDkjpxyXjs3NH8fJKwcQHw9fxs1rqRTaDMX9eDs",
  "key26": "vgmnSBpqxPzvkPbm7x7Lj2BErkyKv3SPuLJpMrPJRA9QJbLGJHjtqifUv1a8BbiUbZEMU8U5dqUHohFn4qvWeov",
  "key27": "43vxicaTeDrSfjJh6ypap6VbzTXaBtekJt9Lma97ANZ7JFYAYyaCBYZuRv6hNWL6g2ffatnoDyKJB7NEbqLA5TqZ",
  "key28": "5cgxnxs4eG5AA1oP5aGdKqYBiHUaMktfGrhWTgNktCP3pv78ngAZukX1WeF6GgqBn9RM7316wbtrCcRGxXZi5zqv",
  "key29": "2rVuEaPGVXwhC6wuCZPGDV9PNogDzq7TyQ9NjxfWiDNsi9TufnyxoB6nvT98L8iWhU6R85XYncuuurfJ6uQzvcvh",
  "key30": "YDxr8jq5mfoYNcrUBMKMF26a1vJgfjzku1PVRKWNwvnoELttwp1tSSU98oRDUimhGvGRWCA6PqRnNc3RW2fctDY",
  "key31": "65Q3AdkEUZ32vfwarBkVP2EtctpkkMTPKR1aSpBG4mZ4kSWJBnmykuAcfzVmgfny2yGSRZypNjPHLW2QxEG5t4Tz",
  "key32": "4QVxnWCxRbdzXbXkkxy94Genx535oyb46XtDwZZjutQYe13DgHAbFTxxUyKLfRSEkhFeg39YBEVk8KDFfgiHZRZc",
  "key33": "GAak7hPAfz7ob7vfvEtPoyns31VMW2aFtbKcVk4vsaN61NCs1VPEc4i1hhHrVb3oB5kDeCyhUeoBsu2UsV1LMAd",
  "key34": "2JenQVu5cC1dDXGxuTGkng1QPN4mru5XodpCSEN8zT6hxanodE57gQ7SNQQqxKUcq6d9TzV8TCJAshMTYfW7vw4y",
  "key35": "2xoGbFRmcWPYsrE82LAVmeWviVhDZECQzhEs8u5W2suAd5kBpKEGpwPHBpEMH3GDa7CPhiuUkrpPUJtBXUYzwwFf",
  "key36": "5Zy4yHC8v6wBkYhZ2BVHqbXiemnKh7VJqgTyHE8vEQCSikxqpjG2i2DTHWTvvH7jMv2MdNekqSPWnKHteBQSLLTs",
  "key37": "3pyesidn29h7aNM4y721rYdKR6c18QP8URDD1b2NJWSp3huwG4D7easmRntnMj4Wf8ryQx8x9TUiavUi9cv8g8MG",
  "key38": "xYwCWZrLnS3oVD5tHfXKvV8t2jKAwAtt2UDHrhk95dkGWQVJhToFWBtnCenhZKo4afSKPGT149g4XBLR79oqUgP",
  "key39": "5DcxSMo2jiEE4jS3UVCqCLdAwEKNdBtG5jkQpA1Xdq5eeuy9WBvbHmnrktbEebgy981sFJnStSLsrk946VrhSRQQ",
  "key40": "46LoWo2povDb2FmcFQ7hLHB6xS1jmKj1XuNTMsug7AP9Ngchpc5Jngege92Xj1KwH9Q4AoWRV4egeptLZ2yvsBEg"
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
