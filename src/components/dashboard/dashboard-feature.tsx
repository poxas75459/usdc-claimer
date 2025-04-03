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
    "3EZh1Dda2yHPVsZ9Wyy4A3DkiZfGJVq2AgxQ4DznRyr4pGY2WDfWCx81ow5hgcQHHC9PGW8NP5uuUokgaTipG1RR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUdc1LZaBQaKGxVTdhicp72qV8vjDTqPAJhMXLkhj5Zxh3A2DebXfpX2rfwffb1YcK5XbsqwKVSP5bEwtLg6GGU",
  "key1": "5LPkt2kSVntWGQnUVBo3T9Pnk3Lte541ZQkCvVBdkWTWnw2qAJq6EimCQ7cKapqA8Af6UWNHBtR8xkBQecroVQjN",
  "key2": "65ZucJdn2vAUhnQz46mSXqFYmQV16g2662YHmJQDHW2XYuXdGVEpBzqU4o2jUBEheik3bXkRxF2RZNedqy8BhW56",
  "key3": "3A8PdXBRs2fe8RNbpLficpGUg8sutjnQgBynNCT8da54J8KVpzqweo9SNmxhU89vBc4i3Di4hdisjtiEgyQFjiFm",
  "key4": "5fYP9S47SNCpq1osmfzjxb3YU3x4iTFq7hYnwtZJ6hpp7kntfoJithCW75PFH4vzLpTdsebvrdG2htfnvFM1DA2z",
  "key5": "2Uy4Br5v7XuowTRTgLsoxUqqh5mBPh5oi2ot4Pg5vkom4wYfkTZ7ztRzV9qi5pCtA9TCrHpubV53JUPPqzGJ5KQp",
  "key6": "5p8Aye7Xk9kmNNMVRHp3kHieZtNBWLjc7SMNzx3RnvUJiSQoGKaENvTcz16JmHoTVSfYntKk6zjJYt1G4mtoQQ8Q",
  "key7": "5B2KBFDg6LCJRPeQvYq2hc3UubAj7gBAKbqvBNUYDZ1BF4Xk2EjqaC2FPCvC6QKAQiSWAD1DuhmXtaWQT5CTmip",
  "key8": "5RYuM5psvsyPFw5Zk9EndeCvZG7duG4bKaPjMsod9cXfQ8K5P2kPs5Ewke3cXHFzTHezJ7uPki1TuKNueCnZpMQq",
  "key9": "39YnM9XWfEHJoPyizz2rbpHqe1DFokTzytQ5PJG9q2A5acAqRQX1WMKAg4bhWumQF3xYZKMQWM2VaRwo2ESEid1S",
  "key10": "2xNfuKeEzHFSqJoGguqLmUSZ98xP76F1jCuWo7RgugdrRXnkh359aZc8C2NNs8536CNMRnwB67WmWFVKgSw1YDZJ",
  "key11": "5G2yiSCV6LGMiEDmstZAf5LbemriCnGHr9tvumCGhvK7sU7ejn3x3LVpGNwTyXzj4hYcX5MRD2WcxYwtGQHZwTi8",
  "key12": "2X8y8tf9bjWdhk6t1itNEVDkqn1HJ6VUnn2fYwsiFLSDxBq4ADdDsCMMC5W6U7VFDcVXRUVtk7HxFFtzjx3FushT",
  "key13": "2AtostXs7uWaxXJxd4QatwfTuiEsDxdkrx8fg2m843zj63r9fH1k5nbcgdVZq1WmKbpoeMQdT6snj61BRiqYjBVZ",
  "key14": "3vByzaQ2Pn79tCnNhwfij2Avbm9ckmPv7B6feZPiGbRQGnuYqpeDCw9XrjrMuv31VKuVQABoNkUe1JKLyZQoGXDK",
  "key15": "gAbiLpg5R31L4b7Ba7wFS8QLDRiHjvaFvLtzonbXaJDfwp2pFdTfQPjSqQ3wiXbnKSm4NQjnt3BqB2868xQVGAS",
  "key16": "4fCzz6iXJNekJ2hUBJhDdkFbtJEqWzHL1hQB48yfpuE8XZT4dxQnUF1SNda8Z2iw95dz6LJtTfG1zWUWR1zneg3W",
  "key17": "b3jCDyzAgCizr3EznbRwZtYRs6PGrhuHxQB8U5oRcvHbuHWRq2iJQBxoxArHUWUf6kKx2dTRmVJ7NQRDwhQpEKk",
  "key18": "5qAokMf9rYNk4TWGk5QqKkEJVmZPQveJomk5nAXvWNZxCqYFz2G6WXKCApz61ek8V6sYbvRwYjwsAqEe1Pf6F6pX",
  "key19": "352uZ6XRELBeZBHUfXQ34qEpMkYfwCsLAMwvMvagz3Fp8jnrMdKPR6kyjf9KvgjwN84w2pRKDniAN1AFAV8WQmve",
  "key20": "1VC1LYHebScJM7vpfpaTijMpprR8UYkXhycEUyJcH3GNkPr5HPSm5by8WLhKdUkM82gNqxfFsN6mRxEYV3omATC",
  "key21": "Uzr35RnXMfhmrsAo92F7wzpud3GxTAzxN1XrJHTs5CbaUgWBVRab6jMJRo1yz9DVD46meqFRfDnDd8g2v56XH2o",
  "key22": "2gw27HMSDUjtX6h6pfmUzBXD48dCoWA5jLhZ6Xj85qgFDeW8ht8oz6vCwbg3xehdjunZ8vyhDo6vTUCEVN37VXXi",
  "key23": "2Qxg8VHPkwpFtSbn1n6wkHcxJGXezni1smwAWpyV9VqbuDishK3ATzx1S3pWJpsFXF8J5uVLck4K2rzgWccpjr4j",
  "key24": "5Fd1NfTFgN3R3i1yQHFAtuGukczfuw1vNdCkyTYDQmJYW5qhteCQhBUaGU8Zhzb7yYeKFWt7CcNwMexycUeRLsDr",
  "key25": "5Ls1QxDNxoNHJN4KUzLGZtM98vYuEYMdeozog7H6H2TQtFZo6WZJNd6dFygLWwf2uWkGqhFo52qUENbw1zyBaw2H",
  "key26": "anHkRqLwnjPNdzxsgqWEhCHqC145h47PcDujfPxTbQ5gyXPduqkUnapoowRPhzgf9YgzaHHJ6Z8YGHBYhT9GSgL",
  "key27": "iVY8ybhbXZU6GGfk9Kd3SxvctA1bp9CqwsT89oHxczMjKrttnd7rxnFBqXmwi4N1gRsAsUGmAuYzR1HFfTg5F5E",
  "key28": "3gdza6qTnehwNaczUNfj8JSY7GbqiLAZGDXvQBxvRMMBfjs2n7i8GEW8AZqNWgCPY6Kp8AXicHHjDqFwtQKAHTMX",
  "key29": "2o6gckdKbTCD9fE7Eh7gKRMWUFqqsARp136Z2tCib8QDjg4gfZHv6nF2khdwFx9Bs9QCKNELuGEVHVt1wbfd7CL3",
  "key30": "5mbaGr6hQMgK6dTbrUoLVYuxAj7gfHX9LFr3KNg9CXcPKzjdRW2wzZg19rFSUddaULXPpzWNnRYbQRcUHTMxHeWd",
  "key31": "4whW6rARKnsjMu7yN3povFe59HmF5medG5vm98Tp1HHUg5bLNDTCqfbX1vGMbrCXQrp7SthRCsLjEh8wNKMKfa5G",
  "key32": "4yS8wTKk1VeeTUQSiDw5NkWa7j1Gz6HqUdzuYiWD4NQk8R31PDzehnGvNCtcBu6yaryokeHt1ZTEr6CHcpsrkNXS",
  "key33": "cWrw4QgpWF2j6QB7JwRks2MLbSBWTYFdakB1wgmKDA2cPiyNdCBLEqfFKUC8qwXy9Uv3XKK62ZkTicRDVCLXtEt",
  "key34": "2UPs1dSvUuZN8HdEctwHNrgGnhDgUFSz8VjrZUuxcTKX4yq4qthCAXDEzevq5mq5ZhdM3xYGcqT7KmRbBg3Hd2W3",
  "key35": "58SASoNRTEPUn7zKYDWQkkfjutLxSYoH8XMfkygn1Y1XiWL7cfnx4u73ynvbSJf9u5tjQuX7iaK4Gneph9LQKdL6",
  "key36": "srfkQMs8DbfCvPZrLUySbCrReREH3mx33YGRUbRY9dALNvb8kdRmkeAGmDwtqDCWK8Y2281CvXyvdRuxfqTJ7yJ",
  "key37": "VyTrbbyP7kYJBcJNa6U8BGfHRmqcaqiohwTsBtMZ6Raqko4VZTCeaX1ZBdfmG4JtBNBgoDERCoGBLBkZz1EeVNo",
  "key38": "2ueNTUF3VgeaUAaCx8wvY6NLgwFKCycp6jJhrz6FNNnwPFioAaBtgPMUboEjVbn6GVx56srEAhbT6yTf1jac3V5u",
  "key39": "3JnHjC3GHvDRDk4VPrjTL25VoUEB5Nv62rehHQnr3mFLqwZFqeZB1R9NcTxbasKDyJXrsYV1EubfWW5vVkjsqcdK",
  "key40": "cvSUKhK457HgBzX8WuUsey987PiG5uxSjKHxuMx5YuWdJapMtL2oXTjAkCx2HQLS5j3erbTaTUMkqfhfAMQYjb1",
  "key41": "5KzYUSxFbEpKAg2inTU5vHjJ7bnxgRxSDcYTexaVYueKBnWXESx2DKs4FWSv1gLjcwCA3njzUA3VXjo6SskGvnqA",
  "key42": "38X97U6uUAG44PyAEHthQSwrNqKJ8qcEvrGoTmu9QNRCkBc5itthMGsMnMNtESjs5MB6NZ1mwBpmNbMZ9twZ5DC6",
  "key43": "4whpjdjdtrEQJLf2rj43THtyPNVaJz5qAJEL4kGfLg7imhicjrzFeBhnbAYFrdXGHNDn6CzMyJTx5qJH2Chi2tww",
  "key44": "vBndhFEhoq1qL7thgTH3V9L9R5FZ8K1QVcv9iQ3QQEkrwWCVeFJY21b6BZdiWeBN4yMxMPirePTpXMv2KibDSri",
  "key45": "5R4xmktR3oUpUedKQesEtYwmMksaoSmCqenyEjRxA3A8yw5E8KcwW2Qf1BnJBA9Y2UiwQXpnVoAzCYy4c17cBRw4"
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
