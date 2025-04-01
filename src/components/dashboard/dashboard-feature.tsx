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
    "5hQAr91QrFg1jzn7WkQfsDjFk4V3PTayhuXqRB8RrnJUBASedCCtMJYra24FZtvpWqJUFYVYSXwDzuYgGtTkP2Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqd5UQQtE3d3CEx2P1kXDnkKEq4TCN5QzUFjjZzFvCzhukAxt4KQTXboJuv6dbtAPz29wziMXAqp9WsfvZ7ynV",
  "key1": "3t4sFbV19DNaK3HBLnsK25mWanSjCfGC1UYcHQnRV77asxzpS2Kr6S5w8tnFp29N35XAiTGhAa2bQoiBjRA6g4zY",
  "key2": "AUTrjDWxYQsuL3mjnMHMvQx5QBBwWN3C8zcSYYLNfSqNGaMPxQQYLJWL6HD2KtiUasdKAMtTuvR9smyR3qSVBEB",
  "key3": "5FdujoRJRqT4YTeDqfDmFtv7A6LtaGmNwR1goQK7vu21FoAN4CvzMqHoFMmqNuaF6aEbHWcU8LrP5Taj4xVGepia",
  "key4": "3yq3c2VBg68LvBdUNGP8CwzEr9Hax7CCUGFLNFu14vDy43bYhjGW4Cx5p3XP8acuCKEZhmoxybyxNh59B5AyyuXN",
  "key5": "2ya4bMaerkerhToUJCESM6TJfK17WFSipZmMd7dMsSE1tWKjjYL966xHYXeyhBU4Wnh1ifJjR4kJRYTbwcNn7xbU",
  "key6": "3WtA6MTiRdgziHVbT95P74Ds1q5qirw1bsqPfZtabAtbeDBpCiZvuFpT7aXJ91xgkE5epyZE5p3kdGyNoC6vtJ7e",
  "key7": "3LqJEwozXETWrxghuFMyYnmyhraGc1FitFQsrNyqQaYUePn91TXxWfZ97BChekafC7vJhMPi97oyTLCoiP21Psvb",
  "key8": "RtQ5AmMjmvGxxhK7UYAa1XuHYtgswUPds9oZnf5ukAZbAZ3kBmQZV7KTAjy7AnbEEBUeDnkqmt3yb9F9CpFb9uM",
  "key9": "dxBcLr9hYfL88HFvMuEbzJYzhjhH44ohoPZeNyfnpuVMo5XoQc6QbeKsPGNgpahYVvR3hyqXYB79XPXq16TYe7G",
  "key10": "5snqTbnc7dn6vUnc8xiWae2LBkuMz6qT5trvGYQ9sxEMxvK13HsLiKKRRfq17faaxZXLonrL2CwiT3nbRvcD4Gin",
  "key11": "5sXboKXfYakdCDwWs6AhXRkzrxBeZwi9wBD5qHGHfzHzrRAa19qkjJQMktcEEpsNWqhV9Sj6vMPsszBwPbscaDsV",
  "key12": "umdojXHa7UvPLD2Jzy7Z7n8GYnLsZNEDXMRwMGrGRowCDCa1L1Deu2GzvpcrMxMg9ozEieQE3swuk9zqjL1T3Vx",
  "key13": "4hdUr2SGQ8AvLxbRknXam6aLRtdHMLXmi49T5XFTF55cjgAcfQvqkexTEiHT4Szfb2jAsFzxkqS4SRWLikmYfxqY",
  "key14": "bYeeSUgVhPPVwy9QsV6bz4sb9vDfxwDrqyT8FkbbWNxuCkf1AoyVLLDAigqd4YG9SwPFnzCKjvvAksS9jsYmNYK",
  "key15": "4VofmvxvjXMeBC8BuscmbMhpGVM8pMxGbnnWNsrAzpg84FMHczwqwrsW3LZ1DdhnLDmBZBFENwx6EoPx2XkR3ueh",
  "key16": "kLWw8HFpzHaZwWjNfQMSShCb4vuYttJyq1Zo26z1ck7ADHgdZBQzmzN6n5PtS9LoXkBJN1XHCBszkFtgY2VcxrA",
  "key17": "4AFk7JomrwSCAZ4a8uTGqPr4CDheLWd3zha1aAUFk7aALmPcT5RFqPA4NZQabGPkxRvWahcLyBXdbFqKNo3TcLi1",
  "key18": "5Xo5poBpf7qvZHL1Vd8ZgQGTe5MYxdMLhAatTTTHXxnJKd7uDsP1xr2HHqHkhFPFRFwUbmzPzdhpb2bvinXqo2SR",
  "key19": "wTBuDzz18Med7umrmkx3kgJBWpi8h4dxBkzNVWoJvjdC6yWdm4CWKwqH43ePav9p6dKEcWspfiLRe6BDnYrbrha",
  "key20": "hEsY3uqyJayUB8RdtxyAmDCZ8nAvYiDxEt2VyP3Qnvv1nSSqKsKr6f9Su1yMVi6mTLNkQMWCBScEVojbYo26gJ9",
  "key21": "2fALn7kFS7U299cYuQj1nX9FgRJJ5J9LhQi2sYnXRfPBTNkGErE7yNi9UPD2mtyz75vrBvzDukKxPnSTunZbwAEn",
  "key22": "43DqHkwWRQBFZav9NdSbEVDHVa7EtzteVRZjkVqpJD8MEAXiWMymhqMKyqhE5qvZ9U4tLhD2sfrjkbfHB8Xxe9mU",
  "key23": "3BRtaswboj5ZnqRvDWsprxAtqgNbtz85thKwH8VN79BPS84MMWsY1SVre6rkwiNJdCWWNjGP8Sfg9Y7ZEZvfdnu5",
  "key24": "43UrmciBr9nQfVSn3mqGhHbhyEEFmAkGNQMuBrSz91qQzbrdc2FZQJ3L6nH7XeMjnHF5pgPLWb2A1SfxLfhCiDhT",
  "key25": "56MR28vEjrSkXzrsGkKuuH69i1Egbk6Kcd9ykqqusNmdmTuzKE6qU5yqGR3Tn5fcPAAVaRLpDUacHoSqTEDZJhPU",
  "key26": "4oBLBW6x7n9QUoPMN3umLgFBdMJ7dzdLJp3D66PMDrHSXwManLrCAd5hkhkzTu3MofLH9CHp4H7cuVNJxvqrvdBf",
  "key27": "qcjG6wuPJHDFH4mDZR4BMG627y21M5fR4QwFHXYjYf9DiM7qHwbJdehVHHH8HCgPuEecuFGZ4RFfgbvn61q8v8K",
  "key28": "3gqFwoob738z4uofno5Pv3Cr3Nx3Pa22f6a9xNRdjucLFjCFQ3yxhqzshe1WGGE2xQ4oM6mMwZczjfx3Kgn6zg7u",
  "key29": "4r9Rvwhk9Zhcvga9RH5VP25S9GKyDi7gbU3DfhYwGhxmwEcVgwh4EaUxnHjn4Rr84Jn3MowiXX8DBtTTvAKsA4Ep",
  "key30": "5X9W7ARVa3Y2q2bQes48egfZdu3JYqxfFmsHZ9Ux4rMUbzAqB6qS75TquPEBTg92xVLthphzu3DNRqraaGx8g9pi"
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
