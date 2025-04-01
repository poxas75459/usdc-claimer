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
    "272gsnLeSneK55DKLF9hhQdcBaWjghJLT5YcEDCcZxAaF18ZicrciYEY5TdZtVurMaDDxmRx5853yEjyy7zdLsx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRtUaLPrBcViiWRtWUkMYQqMzWQyEAsbTA1th8UnmeZaGeNaikQFzKWUJYCnyKfexSGJ4nSus2MgoVBb8H79WRv",
  "key1": "3J4p81UzQRGKH5prm3F97XwLTHiCuenPjnjYy9GhYez6MDeTKcqtUaNRJoapem2NdS5nBAE1HRve8WGbcUFTwP6W",
  "key2": "CNauHVUHpLt5qobymXSPbsucJiWH93PtdWK4GxRr6F4cBmuNwGaxn1VKn3cUpmdGtLeuKNBAv4s9Xv77YwaLkMX",
  "key3": "7Yy3Kjf31NnVTHKfKqhbcjsEbQLK7aNbwjeqeB3tDkZuC4YVeqhiwdPxFTdP5cfC1utG8gFfYSimvUpxZ6bWLXd",
  "key4": "4b3aXvJD2jRWjKNoBEEpat9LnrATYMftNSJnzyYJvj3SKGjh14SjWk4AzXn9pa2vKyTvZY9sqwGPyKvi1xwQeBJE",
  "key5": "62RZGhnuFq3crF3gBTCGy1MKg7yaC6ceAxx6UeFUYFMppZk5HHu5671AbKUGUc6Zk6oEN8JaTQ6x9dHkCSKJdN5s",
  "key6": "2hPPJyfnNhVRetyrFA49w8E8JQVqN7sc6vpAbUk6xnBwmyQ5kLmYnWNf2ryXnKSM5zhHeEtvzwv8hs4ufVZMrnom",
  "key7": "3Qfi2sT5FRGKwhSMUbr1C7Y6rd998rNiunEhByeXMBq1Fo8butJ6Y6keBvjfh2tQPLNo5dpkBPB3c43wSsx4NrbE",
  "key8": "4bBBhZPVxY7YbWw2ZDDXB5GafiaDMyXYZnduRVehV5aLcGHFXWjqLdHL7YBoVNYdj88ydS7ZrMCaDXRT9A19YTzL",
  "key9": "3vpmcuoDWQ51vUEpR53SbnAA9UyXaxsSJP3exkP4P3yhtksSggPysCkFSwCYK8U4ZWFeNkenpBvXHVm8VhfgX5h4",
  "key10": "5qaMEbMzyDswvhns3XFxFyiFwpgLoPeL4vRsfDRe6sCwcYJRxiUxLHhhpMTk4ud4bAKwYREnnrpzTFKqAEQkkG7u",
  "key11": "4u8BJ9VB9x4DpKVx6GsHopLvqqg3CexaXFWA2Ljx2kbyefBZAc1uMWYovuxqpHKw3CDp1j1AhziGQrFVDvUryLZz",
  "key12": "8C5goJnPogMkPadjUYaPitxiG3yrwQry68CiVVH4KD4D5AroofYv6Su25G7mL3wfC9zzNvHVVuKmYEKL8Xc4UXM",
  "key13": "5YoGP3EQc8zZpy4zHZPNVdU54crxJ6HLuTVFMJq67iSjvQLFrYYKGMLX6YAGwzDM5UmahhCYPNgAgJCCwv4aukbH",
  "key14": "3h12PKQA4MypUVH1obEk5j3wTMSBP7cw1veZTJe7bKqdwHg8qTabq9HR5sX6oFQuF9FKReqBPtYRc7ce9CXpLNAo",
  "key15": "3WEdVsQyTvXWyyHGCDL2GcmwbetM6baAsTyCG2iuhQZjVHsabqMGMcDRU4yx73wJbSvBKULi1J9QfZHeoLZJwmPU",
  "key16": "57kHjvnFaCXse4qXFAMMy3PNBJ9H5MoQGQZZt2Vyr5hhhvgc26nufAwYzi8e8dHyjcMS9asstZZBh5mjE35BwsiF",
  "key17": "3pvxEVaQJm9LpXA9kNYen6yoZHRBFSAiTQmEngsi3UPke4QnRCeT3wJVHHrwSVUDdgn1G92jxMBpQWJVKa8DcSxH",
  "key18": "2LLqDGSR1fr4Pue7NZzhqBJc1BFGQx45Yt9JXsS77jzwgcXfwXB55GPg7UAzcrW7wvQ5tbA5LhWUEV1wwQ3G6j2g",
  "key19": "4WYqfbuACHgXknpCyGNvVxLpjM4ViuFwiYJAe546zxc2phrPxET8KrN2iXPA9gU2XKrRysMktjJeQpPFmsAmUVjC",
  "key20": "2NeaK3xvJFNLRD5qBk3rv6NohD3tc818aeaSvXFZDyqpjs97DPoi2Am4xRsdCfU82rcXaWBCNwdQpetwXrDJUp27",
  "key21": "Af4tP9y6wv8jMGYVNQNVkHJnbgjtn5J5m8X9KHeiLVFH6QSEfw94twEUZJSB9G58w2XcVGVELQr9kXXhNoufJXb",
  "key22": "4y5awCQLmmjH4PRtV5yB4jDTqvCe1n4f2HCPy4z9U52ghHgFvQNrWwrnEaYwqpRqa4bQjKepCHhD1pSCVXBHpcFb",
  "key23": "2GkkfauYHVEF6fJd25f79K7rG2iELJi7L8UYC69TWEPU582RPDqjLRdMxSEHskQktdxVsfK6Ra4M5co3sXZKPRu1",
  "key24": "5ZEzKmta3C8csnduZ6YgRRwJSqD3u7VbFGW8J6Wt9REbki7rML3uZ9xH1872SDcqWoa9LBNmypL8EmCFyYw8xHYn",
  "key25": "5uw5PH8BmU7nwxiNVkGXNzrNXKi59bXsbW8enk2yBc9idnBpEAYYH33QU2Q127v2zfcuGWvsXR72ehiCCDBGZDqR",
  "key26": "3fZN8WKKiHBKv2o2jBq5jr6Gyo8bFneGb9Uxz8znoPuGtfbqJHVoP6WAYiMegZT5B3v3mNMxoVWQdUYy6f7e6Mnw",
  "key27": "3JZDu6QC9DryNWuDqnSxw442VtuFkNXQtGewAjWbZDkcAbjw4ynygZJKdeQJj54DWcQ7arLuporMb5GJaJeoir1i",
  "key28": "5mbZXmJB97BBcqWEyjxRrLuDSccGiYfvqA758Muwx4hkdmV1HJqCej7wEUzGu8R9oYA75k86ediYcfsCfM7d6XAe",
  "key29": "4qMV4KJqu82pYW3bu3kVJSZH5oeQHRNNVHsvPBekzo4g6gWsSBrVtsi5eYTg1higQBwXGiogiZDu2jZ3kjLotz1V",
  "key30": "bG2QP1rSivpZAu65BuNHHENPvxPz1k3Y7r2JnN5Q45vysiAgimphU4pDzgpXZfwJf254TfmFPYemsnRvRjUbxFo",
  "key31": "4he8uYNg4kRcGjCiYAzxgQ2hn8Gggeqi2mFVx7UiBC8pidmiyCCmkqwdBudk3Zunf5DzChF8JqQZjMjVAS12yH9F",
  "key32": "2TzxaaaYn8U7Eb1QZoaV4FuGMWKTFmB6NwTdmvsDX2YwpALMLXj2yuSpExaX31ULTombChnmAFbQxi8YmD1Ac2Dm",
  "key33": "45qgas36FrmFZwytZHrQ5puBNJ3VeCTZJvT9PuKJWXWA9sEFy82oKFb66nRwj9GvRNnsaMScvgkv6LTes2sbHhSL",
  "key34": "SERqupihKRQpEhvod9KKsoQH8PTBWqFqDfP8kD6BPb7HA5DhPkJDZ64rSPKqZQsd4qurQa2PDAYChz55EuGNffY",
  "key35": "wZg21G4vqV1uTkkeU24rtWAPyiZPqaHUCHLZXfn27rmpiFw1XgzCzxTDGHft8LfGrEwA5femYomUk4P8iNcYfSh"
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
