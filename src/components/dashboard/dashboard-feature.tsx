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
    "5THUCngY7jHMb3oH4kFQxKKbb1KHQLFqhhsbCefyT7F47poygbS8nciJ6bKrMV2qwvjnUfrS8Dei9gcEJdevzh7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62gDYFAz2jwidPvRPLyToLf7BB1AjMrVrXLnicLuzaWQx6xvXkJYsqQobiBQiFoS7RLpktwiN8yjJcFWGuJQSi3i",
  "key1": "PyJUfRRCUVtymAcWqAGmPFbHSMqUYWRDyTFRA8mD8qGQxKeJP4WX8Cgs5XRcEGQiyTUPk2UeYfBaW5R6SdQDPbw",
  "key2": "2PxP9ejDAmRvaB7X6VVXSnZnhcsrWwsh6ZTNaeeTvvVCuspXVXaKsdFKxBLN946EGetat85pxG1x14axRwP6wGqz",
  "key3": "5pW3ujEYbAbVVHyxjFK74rGg5KUmvTcgHm8JxsLLvNqeJaSdhbptSxhKcVeWHmCm7Eo6pHFe5eqCRXMUKYVCCuRE",
  "key4": "4Tb4deP8RTvmbQMaHqxUpxdY2XKKB4qERwb92SnZVjiStaadkhBoUPiJsHkTMicN4zn7DaXPNC8iHysSPVttpv5c",
  "key5": "3A2h5srz35ppUNbreNDeKCum1rDQCWmamJnGCx9gXKHjgVAYtfq6WHdR1XTL9xwYJzbY5xWirHWoPTjKE2SaFTHS",
  "key6": "3skJrTBfKfAVXCiM3nJQPEvL9ZpuMPtFqnNHjAhUfjuQZRJpjuCGhZZHCdmxe5beX89uBmDNbo1mNvW2Z2mhnDoG",
  "key7": "243Cfizx5BvU9CYXgLEaMw7LJfBChoBL6MzHQvbNYN2NBmWtxZd9y1krHJwh9fH6FDNpihjPTho94n47tiQv87Jr",
  "key8": "3PpFxLsaCMtTNqzRgJGadFGqMt2knHWcL2UPLTSbsBdNJaU9bFWUQUvxLPBJk4evz45VkLeEAVUXyiAafRpd1UE6",
  "key9": "45bDoK6ahmr5sUxAvaGu6Tjo9WVAsLhVxmsTtg3yRAFdsMgoCEUB2obT48SknUrLLaZUko3MTkdFvQBuaXUmdRqj",
  "key10": "2rLJh57nvPxM9o1o9B6WtQ6h6SyhH62hajQcLC3bNePRb8jDvsG7Ar3h9xNLdnaxLYDPLGW2R7bG1oHiEBN4su8K",
  "key11": "4bJCx3EGMf71uPMSwLxU78ixcj23NzfkTNLsx3wWEdy2sSxhYpGJm29kdefv72k4HcaxmPDUJr2XVp8GaPuv7ieF",
  "key12": "3rFCpuBbNS72cpWkWNtg2uhpm2HWUwTiTgVNEZzD4VEQYBZQrrpsHrWTS1rsBezWXEBEg4je9oEG1cm33PwBQWdP",
  "key13": "3zQrfNcFc2789SqFZwbaUxrwV6RWs6N4M5hUtN4YHXsK3jKkJp1wdHNdN5ek7HnqYNDGGuJ4mjm1XayFqgoJPDyp",
  "key14": "2Fab9r4Vf4n2DV2T8NBYP7juron6p4w1KFeu6pRt4yixd2sAyoAKFshSTY7TMMyFSoN3K8Da8XzErZmnq27GgjJH",
  "key15": "2tP9Z9n2H7Cqr3juPruGmxeZjC5qMbGm4xL9unJuL9dzDhj2WP7NX4afbB7UfuRE67ETv5mpvasFQdpDW83T61v1",
  "key16": "pRjH1HvGKH8UUFNYi1H6GaSjSGh2xaV7kZb8wXEMuArnFoNSHLdpDfry4HmexMktUyxz8857V3FiNZvPXDWefY3",
  "key17": "29QuqYopJaAVimttg5xzCRvtFPWJPxByf83Sf6xZBK7p6C7uTen331KFBiDTP4RvyDzCj8QTA3H3PToDx2Przsqc",
  "key18": "23t97Cbx1aEgTf3uzDf1fa1LeMBfmkUJp6xrnNSWGBQhLge4eUPQLCCijGLYiGiZg6kjYzkbk7Z4WWfvxRhXKE9R",
  "key19": "2G1WDMpt6rKWnMe33PkS7UoMd1He22vGkuEMgFd4ucEeuQMtH8E7ezrwAqtPh4BGWEsn2TioMG6VUoMpvNf9cqHq",
  "key20": "2sY3E9pfyLf69X5FDoZ856aeKgBukJhgTTbBdwivbRBXMXGXfpwBViuaQyGsQ5KDHXjj6vTyX9X1UkXvDAS7dr6T",
  "key21": "5YJNhnPguaZqE7e6uj1ZHEnkQ8R3LU4ZSRr6w1NMCTHXDz3fkENm8f9AqGps1TLzAsMoLLncxamZtSjh7Vn6YwRk",
  "key22": "4iiEVaK87MCzjjghMhxJY3qgj26ZNtToujw4peDAiMn5Xq7PcLd6PhsaLH5ArEE3wPGsBGtbtaAYnpdzGTxWcimF",
  "key23": "5vQTjbwiGK91EaXbQ3rffG9MydHopMsTg2UULrhKsdTuDS29UMKWdx8k1VZmoiLyMsWY33noQs9zcnbVq9km6awU",
  "key24": "4keQGUgz5NAFZL5fiW5hMBn8mX2g1wbiXaogFVP6mA22mv8Kh3LH8NM61FDuPPMBCMFSidtQMWB25S6hDXi3MQxu",
  "key25": "3XDiTptEEEqzrPS1Keq5kmJ19ru1sHVznqaJvJ24swsG7BDV5tTKJdoms8VP4GYq2aVcnNTB9fa3kyRNAworeB45",
  "key26": "4rvzZjRwQJ4dFswSngUa2wgo68TQgzGmSQwXEzMtLcksCFi1X1Z5CvGTt32UJT49QWrSnXXygpQCfyQgz1j87RE1",
  "key27": "5PfGrJSf4BNyBNjUnwa5wjFJsU5egEsT2a1j8DrnW2T6v44M98zxKriFVY1szhUH7gACSTL6qdHw5poF9nGF1Hcx",
  "key28": "2jPvz2WdBLRFKyRcuKFjvWjVriXyunU5bmaZLyYrS9uN9DhbpT8mEExrF9oStFdEsRjX7ucVrJF77K7hXDqMtK3p",
  "key29": "252WYRFUDp5w4VZwim3cuAx1TNtzjdYTCn7a7DKDXFZBPX6GMsbNX37KwHjRo69X8gTvyVFmMbYyFra6QJpYuRwH",
  "key30": "4U5vfECjnAHN4MJEpcdxiTyXyXfUZemUiksHRnMp1Go9YgGryMDJi724zCP8VEEoUqG5FPZ6S4dsP57LkdBZdofy",
  "key31": "5vHnp689uahgKQwFVrzEQrcmSDL41s5SMUENYd7QGzjBdyTPnuzX3zgub3TQckmwRaEh2koDytx3yCUjPF27Aaub",
  "key32": "T4RuRAEeCnK2Enp9uQHMxo1DsYEEUkqm2EsFS6G76WYWoJnBmAFJVGA7KJTHNun5CMopKSt9cxYRiwBJWHgZDR1",
  "key33": "UWADwFfvkW1DxnwRYmosQQjXCaNtTmFunGVc9taMLMymNUUwSjV1C5sXQw6oxJDHyacbGBvnTQHnkXpo2MJQZNg",
  "key34": "4tn618oni7P5HeLTwQjyxMK4KdQYkGSLes2HYgQznSY7tG9AA8zedA7tNKPrUJCMMTwRVmwbyzCwM6e9BggKFpBY",
  "key35": "1959EPU7SCDxTLgKNHRDotXi7PWVTq3R9aBfTRUv2tJBBP42jVvWP58JkaqvS5wGouTBpezpX4mpcdZTL3BMKmR",
  "key36": "4BqQunnNSBWHFbmxCMfHUTb9x1niMuZ53Eqgk7uC3mdq47HYHA1eufX1aQ12UhDs5vze8VQRiQNXP7CkN9HPpyTk",
  "key37": "3NaQ6qQtAsM4hbD7aPYRu4TA3jxRL6vbqf5VfHTuvnuxYorYofiajTi673gEk41y7xsVQ7e54Jgd5b4YJLmYrW6q",
  "key38": "4SaEBAfcULTbvGuenrW1EB3qyqS8XLfmc9BhjLgSDnnVrH8hgqktKJYLVYX3LncQvoZ5J2dD6LMxMuWSQA73tkCc",
  "key39": "5s8jewzGq3DioNjYH2bMEk6DwkzCj4tGt3W7tnWHCapTsQaN6qW2HBpmyYhoJ7dECwcukGwFATkxteJ7SCFioav2",
  "key40": "2kQSrSyZQtpTmKxcrEiTAXgahmRN9DR8paaEnqUyjK3To6kQctdECCn6EmNXFyAas481HPSXD6SZTNvEtYnRMRWX",
  "key41": "ZEmoiYUpD5a3V2dgKUeqc7v9eEBhDSBdCudAvkJFLC6byLnxKqL4N8fZUKiV6m4kx6b2qvQ4BVDLrWrBPaJMPJz"
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
