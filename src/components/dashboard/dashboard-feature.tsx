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
    "43VxRXCWL1Ap8fKp5yibQMkS4RJmBcAANEgaErMHpSyWtZmirjBwrgqi8wSBvVxukQjrQegywxh1Peip1DNTYjoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44DXZ5gQBTGwy1AFjX6vWFUA3YZRXvSMLvCMineAVywyewVFMDrm92ozcRd6fP6CWRtk861VXAzHaQP3uFcjMDja",
  "key1": "1caLv6LBt3TUfEvNWyLYHihqZfYeKZZUMRDHJ4g8XrNWbZSnpgVXs2QEKABqTNwNXPpE9XCWTUdFGMLx6Q5xY5X",
  "key2": "27WRV2a4uwsaodww7kHhbk8epF7KoyrFEiD5EK5rAjp1wyiYcLEpoFheDJiuKWPJkQXcg5k6PBYXbrs9dwtM5jC8",
  "key3": "5VSx47Br6EdrLavNzJiLKpncBMw6DEcNJaWMRLdx5c4i2B8oqGSU5piodsaQUbnxD1czRkTrSfJX1uNJ3eVuRFFg",
  "key4": "3oSHapUEfGQs49a9HV6D6LBj37SvNxTpz5fjhXAtXgz7VRzwqgLSYhL8xKG9y5ev6yAFosyfRjYy7aEVVaUKEBqn",
  "key5": "4ASnbiUQHe4syaTxG75SD1wmc5vYs4CxFyok586JKber2S5NJuTjLEFkSKbEHb7rD7k7N8YJznNN4nPi14Hsuisz",
  "key6": "627zdTor4uhkLkSdSrHNmpKHaUHH2qJWn9hAWoUoj6EZt3EMZFtVbf4DTv2LQrNn1hawwM7FwxmvSWF9CiRAdT8r",
  "key7": "5PsmbMt4iUgUaC5Z8uHAUiv7WYt21RYKGrghTx1cKjjKpxV9JwbNUWyG78P44T1hd5NxaeEe72mKTtVBshurJF6g",
  "key8": "2GeT64DgiPeKexK9kpBVLwXBxwP7sucprVcnE6oCSdTADXUzVyReEdp8yNLehxCGNZnaqhLojTfdhuEPkJswZpYm",
  "key9": "5wgBsDT3oLui799ue12RTM4Sn6TjgEdsg3VTbUM68MgavmnLAABtywpixLekn4T6HVxBzBtmN3gjovT3fiy2uh5f",
  "key10": "3xdNpmWrEiH5J443j1mb9wiNpSKggAxXZrYZPMNmCJSjNG1xfhK7PygCyNkdb7xBLXgX9T1twWs2gbsHTkoL5kLX",
  "key11": "5Jb6SoGZrPhQwysgE8rZZ1tZysC9H7JSQYQrev8zkZDNNjqnvfPRQ7tm3rNk6i7qicMueHW3jCRQUJEdqoJHZLme",
  "key12": "4qewrMzdhtYzDqxE6G3VXGfQxotAXxSZUmkPJcQjfstnTVh9cmjmd3SkeKbo26eGTrJ4cv5dSSsiLr5PsA3WKu5s",
  "key13": "2VyzwAL5dJDVi2wT8j1egQ4VQTXJAQsiKCuz7rZvitWkiUvWSQWowDyLvr7ReuvPcxANLXxM5aY6w85YxUMxehPY",
  "key14": "MYZNPoSSKCzwuwDzGTKNA24p5mh54EPo1a5junrZTJzGhgTU7FuA632xrkiwyPMjt3CAzBDaFxkLkmzBysvoLJ4",
  "key15": "5PYmmRNhxBjxrPEVPkKUnonRxKt4dcKKF7Pa5pAYNcUe62FjoG1v3PqknPqjmFTnG6muqqPzBk9n24Kib1EMQobb",
  "key16": "2aEzLYCvvaLwfDcZ7WVTdqWJK3azrJHfn7QoBJ9fuKwN84Ccqp5hEFsMEnkhACn2MxZmddU8WyczenHpyLY2RYUD",
  "key17": "3mJ2gxYjYrz5aPvLiiQvbEmE2U4dpPrZGMyzuR3wMZc4GCrcvLxoKpW6WjHsLZPpd1XuysacjTW2gedpX6Ffrz8E",
  "key18": "5kNwdhmHchhbaoSay8xWA1J2S24f4ueXyvUcs9U6Xq6QXdh1GhqhY4oEAQLxCV7sgw7nKWYtgFfBzfMQRzvktTwt",
  "key19": "2HcrpsPjpK5k2KnajCeX2aAJ9TBDFkKYFoPQRW9aao1d1PauAPqTRvnzj6m4NWAfqnupLon5gjrkLbDXC1jo5pG2",
  "key20": "5vj8m5iK2D2cUGhhxid4o3x1zWS8EL3GcaY8wkeHHXj5tPUbFvT6wiUtsefpSutLjnHWTeL1CFXywEbBKhrB7fpx",
  "key21": "3wT8uphwJ1DJNoJKMCN5CJerw8R2ukjxp7jiBbhQWW8n275djfqzVyF4F21cdnz3NWC7mkCYtFW3Mq7fcJ9EFb7V",
  "key22": "3QVaQJoVt75aF3qLn6GQqdViwmDB18utHC73cxqsiYmqUCAYG65oyAJ2s8uU2Fr1pBtcBLmxZ1wJgyAmr2ZDNFg5",
  "key23": "2yEYgsNs3fr6J5HQ9Yh1hx58jj7YBK4NbQQ7LigP7z7CkZRYzbPoZrkaXLUo9Zsd8ko5QuevG6sSwAB7VakNsaWt",
  "key24": "3njYBBXvgCzG25udyZPeSNGsQdGkxKw1QKXAkHmqFoRdstMjhmJX3KdXRTf6GYMDEwUxQZhMjSpviDuYxVT9gkfE",
  "key25": "8wNmZomf6P7mFnBY4L1np2n6JRYPGp51qZJRN4i74JrjfkJ7oNSDQbiKnttnJcy6K6vBANdpvvWuZNys1Adk9Ym",
  "key26": "5HJDsWFEbUiAgkPmgc31GS4GXHVBUmAvckrqWohtVSb8LT9UNaEbjtXAdSmB1eCe4kYL2ZBZHfxaJepAA4kJkjbB",
  "key27": "2upkzYoto38QvpUYrZNYjcx4Ee4yodnH1Dw3wgkK7QefazChXWeAXuQ9mWFnrwKbwFRM1VHjUVEMwmsZzb4xxqhA",
  "key28": "5BmMY6tCbwWwUzunxhfREHV3zG96KKDrbMQxS8sf1He81i57fvzkrAjN2HeZTdFQXTdfqkF6gwFDQqPNiWhNf38V",
  "key29": "5rYuFEXbAXeHmZkPJFimG21kW8hJL2CmcrgNy4uDLAm2mo5VoorGC9wEB54489eToxPGEZeUWxsf6kUqxWL2LtmC",
  "key30": "4L8kDtNxjzA5xvfWU8f8JMnEppT3x8d96Uk9qkKBz4i1oDj6ZmKdu58znvqFWsbmqQ4QYA2yexBmA386zNbwS74P",
  "key31": "5HFrF2TmcfNpniJ2WUUqhJ5moLF2z4DGKM8qRanUmTP6E7NsF3YeKXeQRT6MEgRv4sZCkWyL6Ks4kXJrxMS6hFnd",
  "key32": "AdGthP2krE5QWhzzcJVDJvZ6XznsGG6agJxMok1dsteD6z47LtTCngNNrtWsJzVDkJYExw16rArL181aUboouyp",
  "key33": "9hqi1VTH1v4x2wnyz1cbNa4cCxTkwNVxYYBo6b2Mn1u2GThAVuPU2iyK37tZXbmbo1eEZm6Rz8Ti2FGUgRnAbvt",
  "key34": "3h8PFP486kARwEDGYMELgim1m8dgxKV2Sahe1m527B1riwfBZ1SqiVZqmb4Ki4w4nx3dnfSqrknZTZX8GTJWAsFP",
  "key35": "43jHgVHaKpiuKaHiQYtNetsguFJcxri2t1eWHakoCJKDcs9gCWWjv8u5Y41XLBEJegB8VJ9UpSnjrbCqBGDH55u7",
  "key36": "2ogKpSnbSkBBQJSM5fdWJjZM6y17eF3rztyaecnhMQn7bFYZXWGD4McfjHdKrJc85rKEx1MBJQpnJ2wDFUyKX5La",
  "key37": "nvSMqE9zPThra2nQ9dYn93ycA5k6EBRmi3mBZH9HeDShTciywKh8FNokJw9P3xd7zLSbCVD4mtSJp6UBhM2y7SV",
  "key38": "47Dtp9B6KzJb8KdCxuG5uFbD9tn3SzhLehFetKLdnXypZVfodowHjgF4vYrZCDDiMH6HK8F7uP3Bx9pWUmXaizzs",
  "key39": "3q7FZCkyJcHpMczC2AgZUJLKLmMz2PVyV6ph4axWEe46m3qnKS1fFHZKTNkrPrDz9CZzEfUwJDRiaqrVakcxQZDL"
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
