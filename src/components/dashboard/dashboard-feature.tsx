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
    "PmMDA347G31VtHb9YHu5mmKapA7SvdbCJrjLwp2opgdq5rtBsBX3ZJEqFpXWtZ8vFnnsbsfHagw1mWTosuDrZAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENmhMQDHx1EBEbm2htLqMyz9LokagMPsMkxwuoN3S4iHgEyLUWvJkBiUwmUxHdahhH9zQBSE84Lp1ds9NhNScVM",
  "key1": "4k322Y2k6Z8yzYM48tDxVxjrPSWUcv28SAew7MbqfpMAX5PVUJCuB1fgw42D6Txr97pXkPqqhJMMFBEELZAZmSMV",
  "key2": "5JQGY47VLzhHcWb5LJGeoFmfAs8PK61DzbhT2dmFHmHmiXGFHu8B3xzox6K8dH74XmU2hhDqAEpddmfmSTsrA5u2",
  "key3": "5LxGxnNNQrscHYK3WxrGhbBqxf7ib35RBjcaymthCej1bdjdqoXNXCqtLC6xiZXQByootqkA7UBcpYCAxTHk6w5C",
  "key4": "5cCbKQetP2w4znienbiMAzAw3NU6zGpR6p4ZXhhjE4vzRdCtnepJuCmtHRp8WiidVCnppG2SGx3QhbC1eeGRnLqe",
  "key5": "5dCFDQcqofUHTQsWoMo3PajUopzf1nZDSSQS3uGkMvFYCbh4dJevqoGM5jQKetHAnvH98VANxLcZUsrzG7b7b3on",
  "key6": "2uoj7y6HJS7XLgfSDgSWz45S1zxqnooG76XE1KUPcBa5XEXwJQyBeKTmSzUhw5thkG2Zu3QoCURM7571ecPUA3An",
  "key7": "2nrtpzJ2n7FKjXovCi4B3ZwQRiFJbVeDz2r5jhKnga3spmUUSfsh69efC4BMQhTFooZg2zwLE54sUipQSvpVH8KQ",
  "key8": "Dh8RzusiRm7yJThnHcBxgVvhU7NYvJqxaN9gmG95HdrkQXTrG7N9CP1kT5FG6JoWekPRM2mGq5xSD5DSQCG5aA2",
  "key9": "51Nx8m6BRMLaUExN5ua6c5DUMPy34FLzf3S2fVYk9EUKi2NncJh2MdUprNWss8kEwyQaAubAg9aQqE4cTS7VecGC",
  "key10": "2Wdb1So8uyzJYaTyfvdrNANDsk7KdyJKsbUJwjN43P4oF8D2PoULvhS5RvgNqbVBVbuYVdUKUGgqBLuRYhS8TcDX",
  "key11": "iBJvZzX1VY6HM8StszcnxK3QXPSjoY64jRSwn6Wdgpaaczk4bcRThZvpFkFfACxxT5WJpjUnqTp7pyb9Rh1UbM9",
  "key12": "2z54AE1GPgxBSG8TwiB6G8FPg7ZWjognj4BmNvBdJALJszARheQ7RtwUsZ5899CHRmzZYtm9ZdXctnt1qDPBHdM7",
  "key13": "2NnQYa5LnrNA8wz3JgCTUouax7DpctNr7da4SzUvcQ737WkqZhS6UiNDeGkvvJ59FH9o2Y3nP94ndHeQeqNFwMxt",
  "key14": "4k4nkpVwQU6uuDtHPoU7S3UuF8iHX8DWbX4vh79PMKNuYRP7KakWjH5NVAZHZQsBfZNXAn9fyGyA54DiN8QKLVTi",
  "key15": "24LhSFfQtaJZM5GSayvJ7mJiunctBbCvvEEbw6WQ2EmAHrKRsAP5ups8zh436f3VgUTZLZTPK1zx7MYZL4t9wt3p",
  "key16": "2PFj522m7sJL5u8NkHzS9cV8s7FYK7duJcUapeiiSyS7vt5kmugmT7KtPBrBSiZQebDPBXwXrBUQTTGBYWgkh28L",
  "key17": "65zWEXkGmYmt6fufHYNj4f6qmdH6hCKHfVgGr4K27sC35suNANTdzAkR8GnNgMJpqfRqHVTuPJLScCycS8kTnjjh",
  "key18": "4UZDLrmgL699w8tqfFYUMbZsECZdamLZ2BvTGUJAqjAYPj4z1e4o4RWAhe8em7MkJ4yvUKWKd529fagoBPt1KGY8",
  "key19": "3McTEQMJ5sY2uKW7qRCDJPrptjsnXvcrevypB9PQKd8m6oNnsRefDosZcKocBY4fAEYotTQ4CgvX5g3nGqsgzr8M",
  "key20": "4ssvubTzm2nz4hvg28pL8oX99z6M9czunXddF4v4wBxc1ty8T55qCSDPAWEMHUSsyzQBd5xeWLm6LfdiujGCgFHK",
  "key21": "3481HYtHXZJ78MJdtb9B3nfovg9H6uLdyi76AYmVLGDZbDgpF9Ne5UAEKv3Dk7bdbRnzEiNVnEyck3jkqc8R8Rbf",
  "key22": "3wqrFbiVEDSfh8i4ZNoj9z3CEqkViKWvTxXP9iFdYhLCAfmd9uQy2PXZCX5Eq9JJVkvJACARr4AnHnfDzAmNnFdo",
  "key23": "2WHtoBYUmAb44HcVReNU2BURGH5EpHkgPmwvSGjSuWR93HKDhgs3W4CS715HgMZxswS6MoLWcTLRWK9kWhW3hwBo",
  "key24": "H5F16JPqmWb5yP6Z45ydAT4RLXnGzeRHDQ4Dkxe7PWZsk5cqtoBfsFo3BwV3KJvHjao3EDnCQ6MYWRNPP5TkAJn",
  "key25": "3TRoxaRsr62r6vdkuvJPreFFDwFBckMrRw66HZqSdgCnbWDjS9SoDZq4QmA67J7SZtNY8UTbG3nmQVqjtwZD9BwR",
  "key26": "43n5zsGyGvwyPzx56pCrEZrVqJtAFNuHachfKkzsmiXGs2oLjrrD4TMvzeBaYVDkqAuf3jbBW5LwS9Hzg6JkVFvG",
  "key27": "211UqdrKgpbqKzSsZuHkNyDft96cFJ84Nhs4gAbuZjXWCfJwP9txqiR186xU2FNYeCo4USnvkaf59bTUrH7YwupM",
  "key28": "5U7KWUN9pghT6usz7sQPsNxjUXBu7QqtnKfStqRSWbX8GyxV1DCFEDZtRSsbrrzCDBE6Xmp1BpProB1MayxKY3je",
  "key29": "4rp8dpRvZkxmrzY1xJi3cVPAa7fg2K4Nm2ewKX5LrYSRVRCw6eW7TCZxKiYBHFsEo2DrTE5dKirEZbFgHCxsiAhF",
  "key30": "3rY5kg2pGtnssFgvKrsQy86HVpZxgcWPoESKCV1w3RPMamRxQHBxci5MMKhj8v9t36Pwb9RjiE9KNKEcXFCdMYrU",
  "key31": "3rtGGFwCFBpVQNRHbL2Wy3Ltr7EuvDpZXQTeUDLXLggUPPSrwSmYNvsbXfXfCvmjV5zugsAevqVwdt1y4QpookQ8"
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
