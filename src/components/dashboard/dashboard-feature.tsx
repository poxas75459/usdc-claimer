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
    "5ivQRHxvdNng3FX8qAK1iK4WtofGuxi243jAKaQHPmwfa1qGNCEXiayEck4zN6MWU1oZUVhb9JLuaiqL6g28ev7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMFnnytSnZcZhpnkLf12XkDtw85Xo9Qw9D2Ykuv1jt5n6NtGrfPo59QLL8SjnnU4B4svQyCnr7mb5AhviqaaETE",
  "key1": "3fALLmuXhrM3am54QACma6Tcqbi7qTyUtnXJheb624nEWTiQ5buzPucwHcAqaDL6JeFiswv4wrWHVffqromha5os",
  "key2": "5jzN61GYpvm4PZU8Gd99vibuZHdyg6DBQUPdzWyVdbcVueUMQ7WeGix8cE1TSw1pB38kzgeTjq7hvV57LyY6kRUB",
  "key3": "2GaSEpGvoohhxPMZKgvgrD1U3v1py7Gd553yKqtZtC7NqDF1ripVpxLS1hH4BcjTKinEg6trHy2ELY6FVXMfsMzi",
  "key4": "2ABAGeHCAinWC1uw2vpynyhDmCWz9iqCPbQjNF8JNiXMSJ6BwqBP67QJU2MqBYTKB9oDLjMRQuUrv5NdLeeUzmAz",
  "key5": "1TFHwAHAiQqBFaBJCXHsf3mFh8Twg33KTiDz5YLXm5vtC6pXWQqWbXpZQsng9gWLja8u1rksw17TvJ4Bs7VTgnK",
  "key6": "4pejtySikzVoewpgpE7zUSeirWWTRy4PH3PHeZNqzN2S7bSGkVNbBofZGD1JjFLyVpMNYFMpEyDJxAAJypRAmZd5",
  "key7": "2n3WWTfy5TYV6p63hn6ZiL7zb3S9QtfVvhTuMtbQvJEmAogAufg4sQnH2Piu3MHUuvGxRvmd1TWcQhs29cjQSMoA",
  "key8": "2ENUNj7Jix2AWP8agg7nTM4DNyNx69LWUVUGw2rAT1yfdGV5eCL1aFQQ5G3CRQsCwCSk7dd8JrADLVmec8UBmae2",
  "key9": "5vgsr3DDfNDBtkRzpnf7o6GDMwW9CUfqW77dphi96o1UjYNEZNHyoqKzTm1zNA4FKw3ACVs12v6iboSrqPzknYwY",
  "key10": "QT6Lww6GVSztDry9cED3TgGC1wyD85ceRViehasSSdy67HeTK1sK5UxmPP3QsBomhXzU3t9bCDRVbFRQKC5N5Yz",
  "key11": "3YVDbryNNbSkxvDomkaZJuwybEYH2EdfLZMFz4nnJ6mb8jNXRbTZ36U5BERZSfceyLG1h4zHD8aKJ6ApBitCUHB2",
  "key12": "33pQhahrjKt6cPHZqZcbzbU7AmWeezNCyxWuRknnQhMAQ1nQQJYr2TS8GFSCLDbToztx4DkVnY872JnX5XqZcggj",
  "key13": "42eY4ijYZa2auMXQCzpBq31A9G3pztakHMLDuCJLcwtz8zyJqU4pJDgRdd5yHubsNKE5sXrDYVNez3nwBUVKRT5e",
  "key14": "csJNxaR6aAih7VKENnVKfbWPrZqyLcV7hBfzMihapL85ty6spYYH8k4RFbrN6bGTKwZEAzRcTqCdMsXpDTMx2cQ",
  "key15": "5SuVUoYpBJXo3uLu1FkyM94vMmyfEuJ9JoQp9Vdfd9zNTRu4y9xhZbbsqdhCYnA5WpwaEPGPujTv4BGVNgxwUoPK",
  "key16": "54Z8EfwwLpEPeKWCQfSGGSaL7eZdGaAPDxdtMzg7hZDUrWno7tHqnCXEEDBJ4NDhMKde4FGntNZ9LL4eRKLAmcMX",
  "key17": "4eqvVHf91XCLZ9TA52YxDzLh8tCpgyPY8X28vg1ZeG6X6dsYpanurPiN6n9nC1QyNJktLuG3UqDDHPn1mnDVMu54",
  "key18": "3yVLxYKFG4sYNbzBfciJvU2VSVrA1FhcgUt1i9x1Xr1AJ7aHYsLB66PY2iodKfSU7BTrnYXXwdAoK9UJfuYU8toF",
  "key19": "5DDD1DZhpQCAWtBfXS5JgKHFrw9XnRwvq31MMCf1h8bw7NPeMEMXjz8Dtt9XMJaLhsacAA86QeUCwoFwu2two2tT",
  "key20": "2pGSYfuDRWdeG2n2oAM4yh5K8FgUmZoBggKCjMFDu6vM8gCamdZJ31B9QxEVrsunnkEN6KJKQyisfpoy31zgD3Qo",
  "key21": "5tdWTw7fV2fQPmNHHZd4FLQR4zxcr6SypDv2brzdX2ahUFprakBBpdKMXVF9aLPNSRBUk5bnGgap7XKccwVNupsx",
  "key22": "3Rf1DfJvtDbJRFiP9B8RpeGCwi9QmKUqXCgKqoskbJeJTZ2kj9WFJ4xyewztte4aj9u7nR998TWTAYA3CcXqo5sD",
  "key23": "2vzdPkubwHFeDhbNTA4zCNEF4qpcsCdnkz7HLXDWSwuPixSWye1pTae6tgMDTQH7hWbY5kD7FJ61JqNd31ULPBEY",
  "key24": "5L2G9ZM36jZAh5dAqNSCSzTCpAp3VnC7FPK36kTHFgz44QoPAgWw1peoigfKVYB6FZ9sYQbRBHWeH6zXUBUfTSZ2",
  "key25": "3wJFUyFp5jyDpuecfNNDW59iUVDLSUpWkC4uysFNa6vR6EZq8hE67KhJWJzyP6YeZ6jYUQ4UGFbaKQ8m9XrrxvLN",
  "key26": "3eKbFbrAGvcLA7zh7iSAcUX3GDu1HzWxtwFsEWUze6cvj9puyd3SnrDx8EiyVtRaXrzYwdxv29FrfcgHQSqV4qVE",
  "key27": "2iJmFQBD2jNYP14SbAkNrxyTNzMbeFasom4juJkSknvvWLy3MJYjbPWxFND9uWJa1HCxBTgMKbn9aB6W4euf5U2B",
  "key28": "5XuzPCzx39u3fPqnybmBGvk1DfNYZA8sXH3t2KsAdgeCT58yXocnisMBwpsj4ZgA7j719ynQr1C1DhJcv1d9Zez9",
  "key29": "4gwb3rGAdDw4UKiM4PX8kw5udhCL7b9d2cNmocfDXNMxVDrJipmwQsdeWwF7spLY6msY2mmYUpRMb5WGGGyk1hb2",
  "key30": "5Qgv9Yc7ZPatFpaYJAmCT6zK4KYUjin7hgF6yuBzrsdcWPrxoCXZpiRwLfpK4xnrrqu1x8o6TVuzMF1MP85BoyrV",
  "key31": "2shHEbxhZv3sUdvdfvVjWmC3BwzQQd69MsWzabMNrVq1rp2YHQdJXUsc4WBE3ymkUWU4CT8RA1vAkLJw34gi8YHS",
  "key32": "3U7JYmo45jgRZ43niZ8fo9Z8M8ZVzUU9UFXomE1jXN1UkRkfJ2SfyH7NBYwwbJZJko6Q7YHnc3eRDGC15FR4P1xx",
  "key33": "3VCvFhJzA1Y9UGEtvpUwbciur7bYhdWLVrKBKwogTwEbqPmQpxPE8rvjv11thJckmZpp5NwnYQxPDsD75okyWVwz",
  "key34": "4jAYGxiH8uQSVFsGDp5QPFucPc3ebCeTG9KnBPTMZoKy14tj9hi6VRPnwxet9TQ9gLmT7yGqudjCyvb8RriLxd2P",
  "key35": "2ESBziPZveFwCNzxC1SRSM6fuWmwQYX6pzL1LgzdNLRxsgmzP9iQUn7MfwY22F5MUWyg3CZzquqaB7rGxN7Z2aWH"
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
