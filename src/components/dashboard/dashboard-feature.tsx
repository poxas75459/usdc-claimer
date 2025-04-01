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
    "4F3BoAR9fZdKqRJ5M9Q92mJ7t4Vtvpx322ZMk1TwETPhugGWr7FhBuWBmCsTDhutDx7CqFQJrdf3zsPhUUpitvCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EWGuyG9GkGws5MBuYfS3dXPHsSbtjmYzs4uKZFHdyziAjNJuvvKnMbJB67ZEuR2oKS4HryDja6GBTHntKroUtkd",
  "key1": "64xJVNgFDAkxEEkhqfPYaopCiptqVCC6cTcbVn5fKCKdNFZdKd8XZpRoaQ4hQatHjr9Fxxx11b6HdfP42u4Akhz9",
  "key2": "5Tw7sWocTEP7uqitcfBdnFbUd18pPQyHJBpmB8pQfiJVwT7Ryhp3PU5yTsyEa9FuiqW43iJcta7Gtw3B3SB2uH1w",
  "key3": "3XzRqaQynxmudqGqHjko1Sk12WbNd8Jm4u5X3qTrWNAR6pTzjie8Z6ka5h7jqyLNsoSCW6LCgd869kFzN7LcXojs",
  "key4": "2ShJTP79YoU64EXYYrbYfFFqd5ou5jbMB6N4gRrrzqz3xCtzHJyb55ovjo1m7hQSJS8Jfo9SzwBTuyRu6xBRDNNX",
  "key5": "2dLksj4XEHRYq3y5DZpkGXsUc6erwERBcSR9pqAzR5nwyvVMSUEN346heoYo9S3zNGviifDjuErCiUzJNiNDzcdB",
  "key6": "57aHPo25hdY35JEgain9HYX7LWyjrtJeu6qUkA6ur1fymzsjUHVtXFH8KUtqvqtTbULqAaPaLLpqgF71u8xDQAoW",
  "key7": "CscSyvqHiedHBH8EpoiYawacJTKNy5HyMet96V3NH5wNoAnU3Q4VrBqAdvMLso1kzzWc3mfXxNwSVSdYzVP3jub",
  "key8": "436Hzd56D6njMYZorBLkF3qNBtonasfnCEJAupt2ioRCBBrYb8xUvcMbc1RTm99SJKwaxUsBmnvZ2vd9hYQPDm6U",
  "key9": "hYyC4UDhfJC1WkVoJybA7J89xN5TD1dRJZEz1exzfMdyV5h8AAYeiBV6ntpF6jYcTXR8d1G2okwX4JQztFhJEZu",
  "key10": "5AqyhbQykDXfsqNb4j9QTS7524s2MeXGx7dCcER3b4f71crFuZauy3BQP6BGQnjC8fK8U4JyoUQ4XyY4X897cmqW",
  "key11": "2psP7DBeVNHxdkvrqcb2Jq737vsZ4NgUUi4vKnjBPT8qaoxuC9xSwmQoxZTdmyogDYUd2Gkj2aQue6deNyRunTU1",
  "key12": "i91PscqcNAnMHxCKE65hgDBJyfYaeNmJJp9dMhw3WoCoHdqjNC251YNoqZjVtk9T1SH3FGm6Sa41x918TT9swUj",
  "key13": "2fTymjLFpAN61FiV9zraevHEN9kcBMZcYWpFmzpkw39Haq2USHeJHVETBk5v3EZsxxapGMEDSoevPtzhtWXT2x3a",
  "key14": "3pc1RoX8rqVZsAYgKgGpMCALnEYB3mQUfWmL657fMSMWCLfRDkxjW82T9LhVFgozLkpx8LSm5XbsTw67yxNh93X3",
  "key15": "5yGioFcPuPKBAzF3aietoo4brTm44rJQUFns7NfJpfmsJChLaZ6h5BWW3XfnhjTGrXp1rWveu4rpV2bJXZ9EaPRL",
  "key16": "22VMnupuZ3YFnZAuZkva9ocC54rxH4RAVNavY7bQnhemRgbBRWeFsudC6iKL1KFtuGU9hZGw3JEGXJQe8kAgFtoD",
  "key17": "4vBTSLQfqAAHX3zFHGR1Hv4S3GyAXtxcCudmNcw8HvzAHzB1ajwzExAxzfhdvaU8RrjrfmeDXgkojdRa9WxMHfCb",
  "key18": "pfr3XoGr6rsfpNRfAsr7jpJJX9U57Rh8j9AgMfKH1WrA8rfTaDnTMadjA5xqNN8PBBqz81x4QMPqRsAnUzU6YUW",
  "key19": "31wFrsjjNxVGbJrmZLPpMmKCehiRX937VbUXhFRjENkNCuvwsSV6vjBMU6yssF91dtwk7e1mkDWaTAKFS4bjKUJt",
  "key20": "3N9D5RsF9sFxfN6t82UZLXAqnaX2sjPkzYKRSFqKDDfAZbDxJkcWDtXL3Lp13jXdhm9K53dSqC7gNQedMNj4kHn",
  "key21": "3jMWe5vfY5c9DeWht8Mofx6FknTDaZnDeh7kdxJgNVQVrJoiRKABZmBxFqwD2BFj4EtVhCbhpPU7vn6cLLCNppTN",
  "key22": "2GWEKF1DA4Gs4L5AzmKJxfRe9ayQ6j3mp9Uawg5mcC1UVKuQbRKLuaHsU23hDXE5nEWfeTczf5iXV1hEVbw3v3Jo",
  "key23": "hiCXeYmsVkV2tytXGcTgbAcRr5jZH65q2Q1sciiWDMzcxirUNuaXjTMkF6ztY2B9NdfFiKgPSnSsfNNoVVUsuj4",
  "key24": "5nRQnu5s8gP2QnMzKwnAsbQ28w5nYDCSdgBvhgVfox1fSkUMEJUEZVYwFcQgN7K9Hnf5FnyRNiEv5nEUi2kSRSsv",
  "key25": "3UWWfKohnRYk6xrQcNBmpHwGvQHZje8a4VKbRREsKB5S4zsRad4P38GPBSxhdmnWpy5DmNL2EPH5p1XRW2q57miW",
  "key26": "48DnCzky5Abm3UMhTykDArWsq8B61S8QRi4usn5Ppw7Cp8jVB5AEHrN74F6viYkGaxa6fjrQRiwvJR3BfBEL1hG9",
  "key27": "2jQbmWkY8w6d4MhkXKV7hkBvSztBovfKzwErS1b3aeRQak5R2arJQ8ocBn6ojUJpgJva1BDxjKyLSHzEjhCkJk9E",
  "key28": "3jSkdEeDErXRtYZs44CMdQjkdqygsyfD6krCDsx9mtsu8aTbuwswoWRgATGEGWsD6W7F5APi9aiLmScTduspyWjZ",
  "key29": "2KtDiCtM7mh3mg1syadyAcvRdp2LuxywjxWxLogTWffVPxVzKMvRkjDj4s8AHgn2d6CV99B49BdrVa4gPbTtGcpU",
  "key30": "2J1tkJ35iofyahpGUWr7hMhQGsCeQUhu5Eg4F4oKW2Ez6m1oWfg3gAcwvUWGoLbBkgs9MuQGtXJ3WxSR6JXCuCZK",
  "key31": "3G8yoAs9eESQM2ZfM4Q7pwkf1Z8eCYRJRgfdRAti4nmefquA9UEa5tJwgNmNxoDH4wZ31Eft2mySqHznErjv3zc6",
  "key32": "4DUdRbVaC6hcEm9DMoNyijWGuMpoJ4kcHzW1ER3iR6LStMdpKMgHy7JrFaqjmqEteKtUdptSr9aJorLuYuXktbCk"
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
