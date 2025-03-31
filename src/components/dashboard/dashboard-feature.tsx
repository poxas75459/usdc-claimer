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
    "WzxRCyZew47We5N9qPepGhXM5AUPezaigyZTmgwNxAZUbvGqWXg5sEmhejvQ5FZURHExFih3mtgEYjByPjcnpPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytm8KMuDXmkbQptWiRKM83GShu5aavN8LztkJgFFpuTjSXttydcKTvHsd2wn6kKtmJxS5jbWxB1wfmutgbsZChB",
  "key1": "kEKLU4eNZp3DZfqWAf7YYfh6Hj7TRuWCDiwbzihwgDn2y995jsD9Hqk3d84ujD8ejDbLu2c4GMXBAGUwveqXa9p",
  "key2": "n9BwWRghsSx9HZhpJtnxTNwt9BYZZNPgHgrt9ki7EjLMf9yXJiG6p1mgfNbc6xVgYCTNtv2bwAtqYwRn7S6Ur6o",
  "key3": "XDP4UqSS5v9mx6pzUai7dUzN2SS4Q9NoSkzE1EynisVfzifVqKaNFzkcpP3i979HutH2QfUbYZXLuHxjCodPauR",
  "key4": "MYj4x2nkirNakRDmPnSGpfBz4KV1T1Q5pC387N8EysP4FoRuJHB6LiK8Ynr15wB5v9YarFrvC2H7LSocRTve2tw",
  "key5": "5LfdZhaCahfpfp9F5gQ685LVbs5vLQMviNqS56Zy8b8oWLaT5XZoTjjM9bvWXi2wCFMqhBbMPuajuRp6FKAA2hhf",
  "key6": "4gBaovUfxqaT5pKGxtHPNgu3vH22H7mrNMfB4rtHz98VbB7ZVBWAZQy3gsh1zrNxjJEMtTuXXj6SZTxek8XTc9ES",
  "key7": "3hWKXQSB4E9s45tgyGzJetHoQZubnzvff4xDk44TspUH1NXuqL3oam14c53jmBe3VETkMnK3aCtybXwRg11Lutd7",
  "key8": "4EZ7265ShcL4RjChopwKpsZsvqVK2VHrrF3utA4yKkwcTg91YP1K9yvx55GXSbvn62zV9V2Wd5MQ5yTYKvaj9wso",
  "key9": "wDxWwHr9kZz9UBUCmKNZSZYXY16eHW7jbwN2ik8eLgSxxcXKC8aEZp1SAtmQuLcvym89LUM6cR9Qm1EN6iZDJyA",
  "key10": "4tt6cMp9mAekwLLk21VSYDqgUzvQzhqwmtA8Leor2nauAh5mbnGxpsJmKttziH1YsGB5o9A5hZdu9dt2a9LHHgWW",
  "key11": "2MhvoTZ9S6h9LDBAYgcL41rmWwSUy5JA7Wi4hXGMhQyyHPCNoCFG3gre91ZTsGVCnjPPe2nr9mTedqryfAkMyJ8x",
  "key12": "2UYBUjEEFtmcspjMDUs82oTPrFpa5r5QYQb7vdhVQKuREDSM7sJsNwbeK9utLoLtRLwwTV3JNtUrnbXETzgx7WKJ",
  "key13": "5HGVDN1QoaHWJviuuXRgXqhwFXowzocsoF1Yof6ChE3UY2PpdWBuHwcnbPZq3tzkz9F4JB7oLjpGCBUfPK33Xse9",
  "key14": "26LCa3MrA42yz1Wy5guZv4jVD8ZPeyMwAtsmWdBA6U3Eg9Ygo6DM2yKdEjAyAcn5du2k1oahLchWvNrpmtWgeHV2",
  "key15": "5aYcDKmGwukvaNUh2mfUEKqq998VEK1J9gbBKMtX357ytmi4EjU8kxWGtSj4yuwGSyxpXPhFfLrAmEQk5Yv7MH94",
  "key16": "KeJefaDroVpLZKwJsqfJQ47sstutXk6PVVX7zFoThbTofJYx3MVMLDfzvqeENJKDYASGM199Dyj6SYUpuGQgY7p",
  "key17": "3sdV7xa3WhGyvQrLVZfb6VK7C45thU547b51CpyKzadBgB44jWrGaXRgBPqe7VY74z8xfiY86q9qA98w2vJQVHsU",
  "key18": "3t9D8iUDqaWfvrXy5T6VnQw2PjorgnMNrcNgs4aDpRChgjuhZHvDeLWhwoZs92damdMmTGCGE34zqHrKD4S8dHrA",
  "key19": "1ENRe1aPAEsC5KxhqB6f12XJWSTGfUK15fzxTv2xuVqEVj3eGs6ooSqEPJ5v8jgg8rkX756jLzjAzWukLpU9cEg",
  "key20": "2jbuzyHGvEiKwpY2ckS59GuCtri5njpuYNqdTvMUkZ8wHFemreno4Kda1xazGjAGEB7cw5vMvn7Btg4i1NTqAXfs",
  "key21": "3QJNWd17p14VrugXb6WWwTRRfQ17sfzPGeLYVYDDkJ5zAgyGDuS7VRqFpmSwPVjCPYyn4YCL3cNdhpSqzJ4KjdDQ",
  "key22": "2n2Z3834SqWCe5gms7s1Tg8E3fcyWrnkM9DKEe8LcPUMUTRe3N8hhce67i7JD75Hx8Age618sjGU5Gs5CkPdhrx5",
  "key23": "4nckZcjNaJsA9boutBQmkg6NjmRtmJ8jHAUB9VdwTdUvmwHDPHNNiei18RHZkDfKvqS13JjnNcasi4ikcS5b3jo1",
  "key24": "5cLpewr7wx8QDnXoEu1Z4ZvRVYPYWmH9YuBYZ7QgcJKdpCSnuGPq71yUreA1QuCH3SraP8bn9LfGnzCesLURVapP",
  "key25": "4Ea1ETyqEqK7K2G2mghDQTtdumGeG2SiDQ6gQ2J56q2EXpvPQArYs57sh29mMrtvUZVCEjDY9EL3d41iYVwM1PTx",
  "key26": "4h1t6dReKzc3Daupqej4uLmHmQRSWTT5CafifRCF18bimqyNxZbnWLDvTYnabk2wAEMsd2EUrrs4AWmvLh2YEmDy",
  "key27": "2GDh55ctMywzb8oLeayCG7Ch1ajbeH1aKf8gr9TbE1gEqYsAaNu7CbKcoMHSs1FPhLsBbSFAaSmnGAoSzJ9uKtJJ",
  "key28": "5WH7QXKYhZarhjc8qYAGNkk6x9tj8HEYL773bbXn4vpCQBAqPnJcidutQNN7QkgBhAFHKcEuYTL5umczge5HxYb8",
  "key29": "4mjRv6THDiLpRJYGkKYqX46UCuDwTgCBvCstJxTaDLYBpBiCY1BiU7BMjTrztqP99YqTPkNgXbi87bPWBkEd6bHo",
  "key30": "4MMYZJbLr1N5bEr7zkTnfnuWYXeLC3LeZKbAAoQLGtgLYhpXQx5eGFrv2myzuEwCzrA9HJS4H4Yt2bvQof3vaBom",
  "key31": "35uyhaRyFZ92zjwySyjHnMpQm2AWxRuuQ412sX5PK3kmi7ByTzYSY8dAqFUnzaMwENCPzDNMwSymHqJPTUP1Jeeu",
  "key32": "4XJAxmhuGcRcEYPa8hF2aRWbZ49AULRV3CYRS8Ap9cfuiRXXroyPE8HqoVMZ24xx3Dqw3RDu2iFzf9tQM16XcFcW",
  "key33": "4METjGSjnuErRdaH33YzskZ4ccy67Y1GA6eurLDgoFvCy4uPoJ6aCfCqGP4tTttYinKEt4QTMzQ1WpAsyyapfXX",
  "key34": "2za1agidpQbF2LqQX7aaqrXeX7LWE6AgTqKiqsh2KxP13JqiUpW2rirpTVAm7mxM2az5d2m2ZnCAnXJRdkBfodgn"
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
