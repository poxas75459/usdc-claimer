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
    "5wgCgsPGsAa2UGA9RKpAbsbu5s9K5QkcpUrS4oLLV1hWfyVJrPcGdUZDYuTDsxvpNVsv73mdADedYbAHmvAm12m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6siDPY7veCYuQVgmdABKpphcJVSrV4tKKtBaTC7n73RrdCycb1MoCLBRdrjSQhhkuh1H3XHA6zDwVTXv6hQUp2u",
  "key1": "35pDTJ5BwvaLPutZW9T4EM5ya73uSycPVMd8a5HgX1FCvKKM4YDCp3FgjzDgGMkaq1tNckqsYXx3cUgBFYr18HuV",
  "key2": "SiXbdC1wh9xrgtZHNhcJ6tBHjbkjaJy18PeK3PkFD4YF8xP3HC9Vz4MukDFF8GCF5TDCSe95sQpBFy5G7fZbeyc",
  "key3": "34WTH629EYposdP8Yf7G3H4uF4YW4EY595SE3uuvpzFk2uaySnm2tRfGS7ShkMay7e8kobnk8h7PsDw4PupBYvNH",
  "key4": "2AP3Msn2WHRb7rYcEcgCmzLgsx4JsstxpSEn1tPWMDoDxZg3SHfBgASGWbLJv9nUE64FPsYUvMxbzw6dnLMXxPJK",
  "key5": "5FrHc7kJrNJtTnVzbLp6sZUVAhkw9brk4gzYGuqaaTGhwo69ak2tVCf8SX3VnDQA4RJef9ZDBSa7nhWXnpz1hkna",
  "key6": "3PXihBHfqgAsWKFWPqG6tRD3CGGfH8py8Zj8tkPfUPN6ZWSWaBg5s8GFJbbGhJBhnDwnFfVDrkgipyhccGzdbzyP",
  "key7": "3jYM2ieVHUgFGQgyPLiLbqrE3xqPHUCX5Wo3PpHZqHQoc7dVPdFMg8L1ZhpugdH8f4mAYhDM16oZ3RHdmc6w5vxR",
  "key8": "4zz8PYvDbB9ALG6rQx3eartvwNA9kCUNay59A2mLK8kXtzMT34KWU5Q252dr3NEeujgo2f6C5sZFouHfPvd46FPr",
  "key9": "5jT4KCBAHZkq5SHS7hLhQtSMTHMbqzk6ds5UuujRMmC3jrZn4uJe7xWDjGAfG6EYvrkajvAeHZcEVGzTLZGSqEvJ",
  "key10": "5XL1pMwrzteTFhe5xP7ZbnQm1gWJYjeq5bT8t5XYF9bXmDdgXDfrMW8GTd3wkxmqmdDD8gLP4SHGt5k1HcFQAQyF",
  "key11": "3yDjCSg1DKfzNxhcrFXfiFJALgqJgcuErRqnrg13Wq46RqfZL5KcWPXzVcD5uvPVcPaXvHP7qSy67H4hz1iRb8dK",
  "key12": "3fYYUci7mGmdRw6XTqcby2uBfgfbufe7bpGE6Zuj6uWejXPj6r1Z3qo92wpPt9oyXQihVHMPkDjp2kVqbfqb4pQQ",
  "key13": "3DmLek8VVjPkfNyBpqb7j35kSU1b4Hf9vAxCq1yb39qPVgGWXitb2R6BqSFynTyQrDg5mZjJFp12cCMvGREetc8A",
  "key14": "4em6VHeWiPCFDDCWu8mWYoeufie6S1UmK4zK4jEjZSvXoDvrXTU1zk5GCXh4sFbssGAKV2jGchwuKKED5GxHZ8M",
  "key15": "4ScNRbmNJhxdepH9zVQgEHSmoqGsCBK6t3TZZK7WVMDw21CVr5RQwJeDSbfL7no5nza87xu5hMhkJyfx1VbGDA2U",
  "key16": "crQMDQjqu1BCP3PJUNkZGWoBXST3NaNf6K6ha8YuRBi6TMDgzyFK3ELsRWgzjSQ8Ds9dEK9hM3QWEwq9ZJArenc",
  "key17": "3zDtWqbhyHxHVM7UtiTmXDPe49hREWiaREPUwnMYkbt2SSm7uPMkW56wiWR7FNGDzXwpraAXVXBCB49uuV2uhnsE",
  "key18": "4t6tSGnGVUajqx3QQHjTUZKBs8z4jse7T39HPrgNxzrNZprF1FeDVEfWPP5Lc6WEYgk4rmPMuuqsEWWZZGD8tdrp",
  "key19": "63C6KhLm22VNnGZL7QoqWibje1FiqrCD7jzPK99ZGYnseKowcdayzrUeTL7H5kEjshL5ii3GpXJWZAH1ZPmVRwXp",
  "key20": "2D2KbqzG4NvyHChS7V6qaywfpgH29GgUHfNsEvvcR3xcbxNXao1YXRN1G3adGKFoKhbXTnAMzmhkcSomZPqiZmLK",
  "key21": "3b8s118eqpbPG36qdpV2uW9t6yxiPDj4hnGJbNrZ4LK13JYm6L4PrwSwdiDEre79bezMLqhbWXu4hFDYMenMEW1i",
  "key22": "4bQ6Mxb8A1bxiVkQFVRhq6MX6kgNL8ecxqcvGJnDcRFZz52bAfCwqKzCh3ih36xpjLTuvX5khnfrxFAV9FXAcztn",
  "key23": "15xWZzB3jeGGk3WkExEZwXre2U7TZGx5srm8nCNMqm1XcjYoYEnpXJnu45PmfjtwhTT2w5tn56GnqsWxzQkzu6K",
  "key24": "3hLAgDwVXuq56CBFJ14oJ4398U6Xus1UosxvFnm98zr86ReWVNkTEmdtUnfUghEEcDGKkgiUKS2Cm4hG4g8cc9yL",
  "key25": "3R47MczZYUeniXVdCq8MaS6mewrAKx3tNaCH27BJJPUHLDrLNsN78wuP9wJNA7D3ccronRXTMADzjDTLZqCyUmPG",
  "key26": "4p7YGhG45dqwWgXjfuFhPmUFmomgSG6XGDtf7PV5jxgVUyrSy7Vp8oCqzHFaRAB4Euviq31cdZF6g46Vi8utzMsE",
  "key27": "2iu3YHAg7yF3tfB6qAGa6BPtNgLKt1yZ5iMSf6i6xqmUcDNwVhrNTggHqbWdmbw5XJCXeK8zikThWxmf9Xxk8B7G",
  "key28": "2HwLauVwuNHvqXr9s6Ajgiz69wYugHZAiFX5t7bPsT8SkWndbVhWhUpDXD6hDfSkbMWieSTdxrQc4ddzWN4BTpYn",
  "key29": "2UkLgAKwHo7NFYbKkd2ZnTJLjTX8L5XAyLENZZdXxV2sYN2UNkF6GBoMM3o61yviArXeW4tjPPSk9CgV4cfqBvZg",
  "key30": "QStJxLthPcbfvPy9ZZqXLTNVzudwMp79M3HSTc5PmCUnXxcSpW5qhh5ieoQ5BvS3HBKupXsFFGX8LaPLTDbCUNg",
  "key31": "2XRkg3dvThmKNg1qCWxummvbUoWdKZ6GDUzX5vUXpKyFeWuBBvM72Ggt57VoE3Tu3s56DtDdX4hfGRn54VurNcTz",
  "key32": "23vdNvUgfhSGYmenDhTruTs3X8s4BfrFh5xircAaTotGwLKvdCdPhy8imVmxTUFxg6wUsg3FkiS9F5nCR6Jbur58",
  "key33": "47YxfdaXuPrKdVTcbXZC5bH2w8FkdjYPfXyvifcbU4GR4gqvaYii7yP4oGkHetkw9bSDvw6n1p7cFZrptWymrrFM",
  "key34": "5gMR7be7oDWFbDnkhuoT7Xk3uzD67vd53HP5CYLzTtFW5BZDpKrLvZiyqaVWXpCwQ68wURghcF3nnQDX8fQojt9Q",
  "key35": "3gyBb6YKydDJCNvXxNg6SYU9aKJ6oJyGS3ZioGDZ4CYojRTetp9BtuB8LjmTFMK6dWWHdq2jkXroNa3s75x4WgQi",
  "key36": "4wHBy22jufDtKjwmeRKJhdaKtczgmYa13xWtHNL2rVE5RnNs32JRxcc7E7uRrDHZcuGpqzm3ppy8ZTN1Jiwc7SnY",
  "key37": "5vRrKvkaLDCdTcfTuUer4u8pLzu6TJ3NJXGrH8qtHf6Fm89pwZU8McUpx4DpF6ww6wYCigXpAjGYJbQzCZtwhQr4",
  "key38": "ZkUUKQ8iRmxcmMi3NzV1oZmiusq3k5kRTbsMemaEvWV3DFJGs1SMSxaheT4cK4QosYBWTGyLcAJ12F6AGdQxCxu",
  "key39": "3FVyBGRGsdEpDHFiP9KzoNwCzFdoR1sXa8Rd5aeDRDn7tEvUNGfVsiYs7N58VDMPxmJeheNhvDnUWd9jirfuMQNH",
  "key40": "3exfKZNDpErVWrVoamtWr6GzawEDmPcTZkdCMP8ETQaPJ41wDLGorFEzWid8TbewkcfAu3ztKX95gjCqgACkRbKw",
  "key41": "5yzWB755kZ5bQFgj4zihd9dxHkjS3cU7pYgEJpdcrRoKHGUxhey87iWNHdd6kBuuYZdiyseVQY9TnfLBLwS2sZMM",
  "key42": "4gQBXw2g94GREEsouNFK5UpdfAHoQJk2K46bT7tbMYGFqYmViHT7qWwjRrdwpgTCBNmQHez6Hzfm1QuER17tXhHn",
  "key43": "2cE9ZSsDhTWPdyTvNCKBksjNYd7myjmx2YtQxtn1iATJdi2k4CzYTTzp285zNzPVABB2n8myLF2btT3o7ij6CRzb",
  "key44": "4dmRfZyXHTvn8aDaBv2cTu7SkUidCoyhTbK1cERRANexRHLLtzzLfc6jZQXLH6bgHhjkRPUFkPseitgZfLcXT4dK",
  "key45": "2onoTdsJJetGzn58K3fjVuxcwYKjWqcBhgr6Qq4nuvBiPNMEg1ZGUTZPUMdgjL5kYZWyyo2ae5a3wwmwjweZVoKr",
  "key46": "27WZkdopp5RXbVi3ujAKf2ZSGW9KN4AiFB327M5z4DtHtoEzzj8wYi6RCY4oL6g5A5rkGKRFWnCkF4Bs7eC2hb91",
  "key47": "GcZVdwaP3JRnjCE8wgLmESTngnt28AgUCgDwg3Rxhe11eDFc5zJcSKoVh7FzG5ywxMJEjuczeiPEixmjUngDp2n",
  "key48": "3KvFvWasUmsU5s4zRZpd2b4NKK7R3fKY8pMYjCZ75T3gVL6KJrRombD1A6eomw7bYVLzeLF7xKQYAKdQifE7BYTd"
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
