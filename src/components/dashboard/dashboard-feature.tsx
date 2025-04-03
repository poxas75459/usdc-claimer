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
    "4DVQ8nDZsz9RKEDXXEjdipVgi7Rp5GHPh87aVMeknxxBzrgMyWyo4ftQToHcKZ3Upm6FExU1ZPRAavhiwvCuYeGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gstZUNFb8b7hWmUtGGK557f6P2a3Wayo1xqL2eZRcQmsdmwJqpjYcMWaKpKbaL86S1zLrSji5HQD7q6KAJzyn6L",
  "key1": "3ZfhTwSmCkFvFfhotx8612Ds9a66JreKXFeVXndCTvZr87gHTn7ZZafnETZiqu1cyXpDLutJ1KRPvQLeDKdxCBav",
  "key2": "5gXquBFLikK3JGECjz6GgXRz69vKUF84b6d12yzzzLGiVpykz2AKT2ESzWeYdTRAjqMVgxACDbRLhfASDrqyMw8W",
  "key3": "EVps6FGnjRmei9Meyeb5zc8cUB77A7PSSZwJG3Mhr8wX13ScB23ui4FK83sGJiEZqNZ7pazcB3AEPqLV7JrUxGr",
  "key4": "3jHxH6QnyAod1hLgeKNftdJXoxHDqX6CpdLxNNF68eKwdvSDGkdsXnoVi4JhESkXT61ZekHwJVEpYcZXbKBJd8R8",
  "key5": "5dxX9tSWSoabgB2ThhNtqDPxXq5uABfJUKxhpwHViB3c14Q2waSHGPrqVfMvP6RRzqZF2SCWHR43H7g4QrhQb2qU",
  "key6": "3vzJXYqTKNPBJbVPjJhCPSMWJ5AA4PR6YXwWcvoqiEF6ozzRai5yfwj5iETiPW5bNvhHPdGA6tXxrMxVPgFwyGZ2",
  "key7": "2tJvByDPyT8mG3oec7R1ZHiWUWSWPbXByscuu2Atsf3oDriY5gUfHKSUn5uHunUcekCJQoruQUSLhuusxDStsukR",
  "key8": "3sJx1GQSi3bWe4iWsNpNKpnFfw4sH2f6QRSoEL6Kx8UAfM4BaL4U3vmVfTvicnNgehxzb9N4qT4P55ozHdtCM7oo",
  "key9": "5TvcHCQspsKBMRW1ZYYe5iC5RoEyhDB5RCnDSLNRVr28DAaUHV36gMvS5tStQxALND91UoDbDoa7uSzi4mRA4Axu",
  "key10": "2L5NnJs6UbjzjPPVYxqfQRgDq5i1xnJyYh4j2JAr4bTAhdSam7y1GaEJbqG3TbFgZ6WvPCf6Weikph7eLRAR6RcY",
  "key11": "2oFxoYisaXD5nozGhWBYtVKMYyv2fRYrRy62fUdEccuLsk2cVL8LB9sCeAig1ZpwQmodoaGRCjs51AVRF9MQw9yg",
  "key12": "2cwNnsmvf7b9HMJovrrjkSSGZkfuxfEi5xpswHyuqgwsMW6AbfUDc8D1MU1sv1rsWRpMMCamgYtmacTQ3m12Qzj1",
  "key13": "41somq1teakphtnBJF7up39VnustnYGjhkPXwHTK1JisJXEJKF5mgeVLNdFXoKHdAQqSuANY9QxEg8oLn2U4WjYz",
  "key14": "3oVqFqduPyEz5mc952UXRmix6pFLNryADCHC1vwvrZTV6rczEFs37bWPG1HJuhbzwxekaABB6seQKwNdpfRCjAMg",
  "key15": "3DotpSKJjJViMqJFh6aSMMQT9oxYTHgojtduMiKMS7ZQLvm3vrVsnUoUdQF57uLZ9CZEAg9B6h3hoBhZh3mBn9Wm",
  "key16": "fVzYAB7QQRXoRjitLSsvbFf5F8k5cN5qP2FKE6J8hHyVJdpVzQE6En3QFCzH9zRMwrpUj4wjUJFKvirz2eYfmRC",
  "key17": "3HG7U5XGx3hQBAxrjhegKNxPqffR8e1K5guRCtCfMKbfQmxpxHcz87cNmHBNM5PJquPhCjhKUpBhxfZnswP8gSrW",
  "key18": "3DL7KXm7MYePQbuXHcYxkbNfRD6dmRsh6AhKhXL5eqnFCTcTQdvkQiYH7gYquKwN55dhTTVp511zUXWT4kdukG7q",
  "key19": "27ajigamak4EDb11i2CE1zuVcE3LWZ2Ea8Vo1tZgbsqxwsV2M7pcy6rWGv385QyZmXhF3kqtMCLyAP1Q1GpzxPcD",
  "key20": "3DpQVSrTuGi8uTRGxjfyFRMTJUg5WKbrVjy5hPec5BnqVnYPTWRg4o4vv3NHfMpRQEFzwwhXE98aCgMQPuuCUGf6",
  "key21": "4w1Bf5dtsg9fHGBZLc65ARDmK861KEYrh4kWESZHFQQYnqp3n7NEiNTA1FNAaVqFv5vsTNGPa8Er86M3dfUyRS8b",
  "key22": "47oc4xGnQNxQxsw6rfHRipa3ZT8zWVch28ZMffDohnhNoMeTQb2ZYwQbwFrfGRYVmTvrDUrRVryddujVmoEjSN9h",
  "key23": "oBbGPvbKits4ZDuv1ibEUSxEA439ggydroF5NoYypdRPneYq7p9jEkvpFftJENBVa2BTZUd86NaM5y1LxkYsGRM",
  "key24": "4NqPNwrBGBGgPj432ZtzhBD8rxkvXKJZeVZcUjy32Ji4aQMCpm1woy3zFf3uG6THKNdNXLGJjbobQPoCm5EJzRDF",
  "key25": "2CWxDqurYv5khwJkmUgqkKgu5oUatRthQ1guRpwPayQVvw3oorbvbMTJDsv2KW1QwUSLNofWcUpy86ezE1seueou",
  "key26": "4RZMv3FAfBKYBJ887vGCBoiB2thUz9E5JEdhiVTXnjzbn6nFfSKguXX2Uq1ZB8YQdt5L2Rcu9cWi1wwAbWjwhsbh",
  "key27": "3s7WG24GKbLYTt2Duuqs9WUSWQocS4FsvsweECSzhSKMVfsHjXt9SC5uon94METFnovnAu6pWdAgXEooiyJqQ6ro",
  "key28": "3seghbtKz5d1CPqsdRfNbridE1tBLyPNwko372p66Xk1mM7qktk3aznge5LLXxWtBGUvqAT9WL6wExohGc2exn7y",
  "key29": "27wCeLph7a2LdDtzaKBhrmjV3eXdSD7RQxmMB1LxMReYXcxMAUTABoqS2fekuwPAWAdEmNBv42xbUPWWuNtWZKGy",
  "key30": "5Xojw1evemxR97nXuJseevchsMn4747KFaftxYmwdX3HeRiibCksHtGpVsG5U7bqHWZTxQu4CRDtA8Jj3REEBMYT",
  "key31": "5SQzMsvY5qsLu91DFBicfqrzNCLkdZbRVbvaqxCwRELFTXHLTQQ4QQdDcTK2mcDGBhxie3WXky4Dgi7xobwDSXaP",
  "key32": "4btJKaukjPGnAeXBuaZtByeHe5DnECs8Y5XTbeC2HzDThT9CBWZQmpggqx9p129G52LXNpMARRHb12QXC9yb4bot",
  "key33": "4H8vkS4vfLk1cUmiT87nugUFuq2zosGU2dDZjwMwaG6bMJPyUYGDqrD6g1TLHX9BvfVjHs7WbriKsu61sW8NjTdh",
  "key34": "3f5w1rrm5AUXT8AVMCCVzQJWSZLRVT7pdERHiXvBof3EBAAG1oZrw2sEwgqkdQDQM56tjBnaVLqUhaYVXDKiRkas",
  "key35": "4ESvox9QZ6XgSk9qtNerehcArKMT9jXb5SVkXY5Tub1vZV3bu6CNJkAhHan1UCpYnRSPXaK4QXXAiNrHoQcYyD1r",
  "key36": "4R7Fv6rtaZGgbmsPor92SEk8wHS3qbojdXZ3fcRmePjfXpfEehUHG68GFM696B5ciyHqFGEPynXuhJmoTs75mgCg",
  "key37": "QZ5TtFSxaeBKx6NckLcB9fgx5LbX12F4KHU6SmpnZdwPahLvZTRog89UpeHqcZfpPH7qCWAf1U53sjTBcHencpS",
  "key38": "Aa3XZgHckLWQV7w3RQDKmRXHdc1mRGHhweeyTaeozBWwq5xnPoTwqYLnwobbua25Jb8SZqKPQsmgFQY98ueQ8ZB",
  "key39": "3cpZ3nuoERWeDXAJEn1YmEUswNwviJkUhcjJzXQyEVZMBYnFvvw9puzLdMubPXp27STAefoMPSymMbF3xvWPnhwd"
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
