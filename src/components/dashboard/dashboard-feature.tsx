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
    "2pyo7rymkTj3UB33Jsh8QTcaPjqYj4ff6U4oZKi1ZtNqBhiUW4iks5axwCzs4X72dhcM7tLsTPZ3FUNYQAf6CinN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DjHtuHN99AvCugdxs8onuAw74KpBiwgknqwDcf29ibGVP7ZZaQAgagoU6KrCGKho7v7hF9pSXsZwCrgjtKx66f7",
  "key1": "DD3jBV7uZmp9XXYQDTQArMP13Hwy7pVaos964YvTteMrA6yDT9hn1GPxKhQdbtx5qeprMbLGM1bHrUD9XzqVjDX",
  "key2": "4J4WqJveNncc3Vr48oYEqodysY26e6H8dTxxaCnx8RSVxJjK73W7Jo1smKep72ViT9y2nyAjAze3gkHM6PieQqJd",
  "key3": "PNmp6u124HEkVMFfB5mR8uAq1DHTsTLhn9XRnqu3dkccPkTER5KjNZvM4aJGtN2EHzQSpMQKBMCJ4zDhPfV3Z8o",
  "key4": "65BuPxBmeCtP3jegRNzGvBfkKVjdyA45BbcrYHBirbqu1XQW7ahSDne3bE6p5t1fj7D5ZQuhSVpweS2yxGLtHqbZ",
  "key5": "3XRz2kNFB93RAQr6ySfGv3ezmHGS7pRhnqf4ffqrZR9v9XnCHK5AGg4yGkiM2s1EuXk4WRhn6eUXMvSpHFVMKbrA",
  "key6": "39y2t8FnxeYnk7uB7qWM1KFL4wiAYzZcQGGU1Z6PdtuEXSESH45zSShgpsAvugGV2Ah2FcpJCtPcsbuRWtNmBsu9",
  "key7": "3oowi2RMiSov5pwUWadw2dicdvpa9ooxWDAS3Se8s54XW9NYBtFZSUR14pQgBEYyA9JgVbWECFGyyVaNQuAroMh8",
  "key8": "5CdEHXUoRJ1BX3GWBokPozhA3qFwiWY6K1uW6x9Loe454xGWNjddDPsnP39Z4tfdtz3U2i32fZ8Qq4r7ADyM7BKL",
  "key9": "4F1MTvWLgPWMWJ9wXxXTv9Nh4k1CQCq5xk8ZJdyEMpGRkKxFXbvrVEkbJESQBUKKYzohZyDuZdKmDhH1ALZyU2Xo",
  "key10": "3h5bDWR18Gd3oJuSH3o9Mw3KS3a96mnseSrGJfFiUyNduvRgsaP36ao84LvzKCrkknLXudFntngeLmQ8mV51J6Dg",
  "key11": "3acCD5rJoqZa94KfuFAGixVkW4bDhGcrKrHiSccae4GPzTNGV5CVjLpPJwWWzBrUdh4kZCvAaDStNgTgEKekLdwS",
  "key12": "4RVGuFCvgRZHDZetxp9aATfWFQSJsTZeQriuCDLVDY4konmzXreEjVFeJajwLSqXJTHYB4THFFXmsvVYcrgPPwLU",
  "key13": "4ZJuDas38vXTtHgMNSbDe4aRQFRMKbgD9oh9i1Fu412SSf4qtPr9zZPNcxR7S2DVR1GKuSBDHxm9WaVzBPfrYR7a",
  "key14": "4awQ66PhF8nzB5XvvDBAarrPhhSahwEkUQAxakLHfuxQLEaFknHxpKABZM1xU5ep4pHHCuPk8jjujfXTC7wyiQLi",
  "key15": "mnngjxnYN758DzHV64XTJUVMJqNPd1KDCwEBVwviMPo1ADpojjEPysyeqU9crSRbd1pGyLNgoUyDbkLBHSNv2WF",
  "key16": "2bsTUAM98TGSTcv6se97rtJi3WSmERHttATRiYwvznj7n3kPxarPQv58sD7qddb4EMnT73Xob4aBYWS3CEgCQMfm",
  "key17": "4peDv9T9iFioX16YpvQq4G7542kYjXBQsdmKWFbK6mnzB7PE5xH4F1rjRAFqA6p2b9zVvMKJtiimo43Cic8gcERH",
  "key18": "34tWc51N2cUbHbnjdt45MpGGvBycozh8Q5yMJLUE7ntrGEqntpra8iVWoYCypnwHLaZ1tpUC9q2yLSgAE3NsKJyo",
  "key19": "5C5zQJwT3hBBZavyBeihiH1BErZE23KCLVc4BPfa813QWJjRh8CVyrG9hdBNfukkpvb1kQ6v6PrwpshQxAHrNqXZ",
  "key20": "4cinH1MD2FSEonQGbFPD5V4gKdfvNShjdowRvk4Xk2QBZssqS7wpQCXhfRSQHyky8vMPVN5hCaywMqaZzqVwi24d",
  "key21": "5AhBUrjfGTtUxkx7oJh3Wx83jHPtKPTwPrnVNxjVTVi28Lc9NU11x33qhvkAP5kYnuCvit7mfhGchJCu1pARvWDX",
  "key22": "5Pa2WrJtha4mq2uqEWkfExgh9rciakjVmHThi7eaDySsqzvusFD7mMoXzBoLfaiMQqoEUZ57z8KqZT9iSSifiDYR",
  "key23": "3GXPG7Wsv5nP5oYs8jXqQJhSVdLZS1JYQL5pasoijRRmLTXfiq5J3gAeHjr3Sump8d4CNpXwqThUvbbes5NrzSLu",
  "key24": "RuU4xiRjcWPTBmskU7hHWeouDNHKD2Lo8CB6hfLrCEHUUfZydEN7eHcuhmDfmAkpMqooa2eWxUb8km5BHQCgwob",
  "key25": "5y9cYeUwXLbxYmWvQBRao4cFPwWfiT6iUWDWnmG5jJyaGVWLnEfm6F2uFBKzaVanoQjBsZ5fBhxZfq2K8fTNTkxz",
  "key26": "2LmSHn1MCh4MzEkL3xwN7cYHfymnuBQnBhM5toqYJpddCrVAj2PWPYrUCXMPbirv8FrQVNPRY8sZ4xTyuQLneRCc",
  "key27": "4n59sR6iwxHHsKxDYMgZ8YNqnrtZd15xDAz1f4hjTgmyZ14CT4GZ9C1p5xLbh3rtBmQKx553HjHWExS9y94xLHwE",
  "key28": "67h988BhXkeNfbhRbWuamd4giVFdoGZe7TShotaeBaBUrnXdYGkLPBQNUCtjNUeHvixu94kae8x6D2De8NsR8ZES",
  "key29": "AJo4vXJ7xGQP3UfDWXECiRbNVBPNNFu5NWWinGQEa9JMKwFhdayGSTLgnN6aAR5YCtr59g4R4ihtRywagBc1x1Y",
  "key30": "3q4NqxQqHgJGacDdTuQkuSsuQCic6DQpHQbij9idr1VwFqAbsQcTifbgrzyXwUrQoXvxsVYQZCz7Zx3prnA47yD7",
  "key31": "KHKvXs1kSyTyz31dJCgotyvAu4oNdqrpS9UVAr6p98vCDw5xp2oayKR8ZpW1SZ9hFZSbHDT6jLePnq1a1iVVm4D",
  "key32": "2P4YnVkhYTeC8KsbEk5qey22WwSYzbL5G6W6S3tgZicVWBonQLu4ZKkWx1tTSBJmti7r48tRHzH4njTxoWMvu7xs",
  "key33": "2gJTvrFpkcLVeTw3gs5edJW593BHFKFZ1JBCAV4VyTjNeGo4a9XPigyEKjYmbhjCUYnENZp5EFc2BLGaaZ8aFb7D",
  "key34": "4bafHZTUFbnZkjip8WvNG3Nrhmh6ZRxTKk2Wz8jAKLA4j3xN5LPUqXPKRA7AyCMpYic5w8LpDYuK3sWt34ktfFwp",
  "key35": "3pRzawjTzSsWaaE4PT8BYobAp8APseZLFm7YhH3Xazix5HJkYukvBBHv8PXW6XYPo1h4Mdv1YgJNw7EYdJURyh4n",
  "key36": "2GRTFJfBVmLgyMKS3WVBLVm6dVpdtH8JA4Pm1DUdNjMU218xnTMXRGrDtKLWbsVaaokEkALUJE9JiHWZZ3hGoMiP",
  "key37": "2QurVjY2hALqwEftn5kLY5qNdUpmJ1kKR4hRTVzaAVjQcTFyWNXCHsZzo7gP54WfCDUsBf7XQzbWGYbR32cb2WKb",
  "key38": "48HmWQvwdRHy11g5LZ6AJCvKk2RX2ZrHjcRuEjBPjmTAPnzNqHFEWDTwrku7rzbSZFhYShNckSgrazQ8xwSQWbma",
  "key39": "2uHwxBMDQaYSiKsAftV7PiLGRubo1TRcRCUoW2LfTBWkThBGLz9pEKgxgoBQCCrh1PBupAYBTW9PoVtWuZPfnLE4",
  "key40": "2GsDHGr2S2WpH1Z9kYzQVjnkJjkn945L3S9Pm5JcguXn37RcJEJg7qcafCRqZsukud6DqEFhGRxzXHw9bvUQbwDL",
  "key41": "2oT5ptwYWy3SQEzk8Fim6WhmDVBHvSB1FPBbaN4z7EKZTXdEuFSxpxbJ9ubtTrt2GRsPeBXpvdMXdPf1Y6SfUZ5c",
  "key42": "59gw6aiCQvBjdNLaVubA8ssti8qPS1vy1Hiezqm1XNuAJGhvtEWbcqtc7J6Wg51ctCXXjW2FLG5dF6Jio2bQSoLt",
  "key43": "JnXGnn1CHRxJqpwUCZ7rV3G61WDjvYgHM54XZXDFJ6aqYLZp2hHkjxTRDqHAkgNrLHYtggviCyVyPjvxiURqFEu",
  "key44": "5sUTRDekTB7jkb8KSnxMWwxMpZxXoTdvqNec2AniKcvtThkjCv9tjvyaFgaHAde23bWu2mKJ3dU24yX1YgJgh6bQ",
  "key45": "3vwF3uCRYJ9FZimbphGMXXPDqtWhwmyuFvn3XBpY6FB62gyC53kvfmD6CuuFYAVWCG34qPV8yFSNMVuEoPshw2PJ",
  "key46": "2z6gzCQUcoY7CmadcPdedR16gtUxbVUB5qghwA54C5poxkDFdLd3YVHfzg7QaWBPAyYcso5nonPSKVPwDVZJNUVA",
  "key47": "4jAkCJUV3pQDnvbMz3kr82pKPcWnJZts8Lnzm9dY1brdDVGSq93nuRTUZPUpjtb8JS2bUJrfx6qXqZ54dB5MQJk3"
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
