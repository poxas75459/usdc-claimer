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
    "41aAR1QnGRPpoG3Pm81jiReQW6UBnmVM5p2ShEhLPeqZuHR4VFpBNWMv7YED98VkqZxQiHuzUHrcVJHVuVauN352"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfo6AZvuwiQad32My9GofuEx6BuKCuPfYUoitvkMTs8bdBJoPYdxuGA3y7JzyiUgaKhEujXgSJEhCXrbiQRHU7D",
  "key1": "4pvK8q7Srdx2GNEkpGL6nkarRJtTmve7y5d961W9LV3sYtXiGHU9LArFdcWHAXeyPHTmWXVBkkKZbNYP2uXgBVzW",
  "key2": "5DqMknimCwhEMcbmW6iPini3DCAGUj2x6k3Mgw6b2H8aeuTGjgTb3EpdXvcHiEXvSEHRURuaWRnfmwezRA9Go7no",
  "key3": "5vBVnWxZ4YsJB9vxJ16xBERy98Psk2aGSgiGdPP42B2A1GKiew8pE23KUoQXo442QYxtaFiUou2W8KFFvcrBVvke",
  "key4": "4A4DKpWpzdFfVAWBsxceS9goRzLHAGjXMfoNfuw94t3L4UV4GNDKTDLA6KUCkbooAxSZkgh8rHpJsTwsdBo7gC7D",
  "key5": "3rcPxfPFkpe4JPaJkpCERmMgtu4V1Qzst3wwoSspWKFgWgVtXAbYJYVNseQfZNGGxuGxmgTCvE2pMpaEePKN1f4E",
  "key6": "36FgvXYLZ5Uu4F4kYmwAp84EW2Cw6Bf3CUd9hs9DehErto8kCoMoRren9BvnvC31ivUEE5MSKDcNR4FXK9nvgVLb",
  "key7": "gXoQrq3We684o3KfUQwfZdHRuzZMEZ4EPKEgVDJtrYcsWSRZ9RxjSMkHBBL7RSfonz8tpPDc2mExbkd1qVjkAsQ",
  "key8": "3QQSsssrrMrMXg737XqtU8KFhzrtjVGUxD9LKST8GVEJsWTgHCWPdk22YBDWRQrDApPCjFVFddK36h5DxDzPHhBH",
  "key9": "58xYJGvfeASEbcdeAKYqfRhnj99vDLDKDDdCv6JzqydKRH4k7JMmGQYXiJ9qWXWCZP4k2vePXvCEpftKRGGMdwzg",
  "key10": "3sryrdwVEBEvkEkzk34HC5GpDMcJAmG1vNN5J4PJfrWBehW1WR2WJMR2eS9h16oqzsV5CLxoiSTfSpGm92N3e5TS",
  "key11": "2f6DUhJ67K35Q8oYXkRuTXBSSv7YYYQXNp9PLArVFvNyXv9AQ9vfHRA9L9zYdp2ue3i9XA9fM1NrUGfD4itmzb1J",
  "key12": "49xAWTGwHGUHQF4BAAmgL4qqXt3EaaYnCdrKjS7V1aanHuDwWz1p1GsmBQXTQBF5G5kgBm32wsCh3SuqFoTrujx3",
  "key13": "EwA75PVoRLeUF26Pd2UqPUn8pyWwVEZLyFzZ1zmRMARjFPEySkPwptfkNiqwTqZqMN4TBReudniX5C1T81WKhVi",
  "key14": "PZgZ891Ycfv7mXsWoQY4f3AR8wNHRCo3rQqcfQRDBgEWRigo9Wbntq17EzAjRVY82wZTCzLPRvCZM1VVV6Pu7mw",
  "key15": "2HysctnsaEvJ7gDBg3dNX3p46rsDoLMs6iy23CMqddArAkPrZY9E9UtgjxvxZR7FAmq5xawRpVW4KURKUyke8jzi",
  "key16": "4g2y7oYfRtHbyDYaykfzZxVyuDATuYnj6dPcdDmU6cpoQU7aKbLGhhYuAKjdMdSfnZmcYP1iQLWqts8KVdRgM7RS",
  "key17": "4VBtFPnMtWkDTfQ3pdey7UAdLBwB2mC5YE2jVNnYC3LAriqRN7mtg5bYfhJysDNLAUmTqtbZaKfJ21PKzDmpkHBF",
  "key18": "4ySnbEZeuUERY4AthkANZfLQyJKehGmDkF6mCDZhJp7gZSFtBsLEn2pEWH4xTG3JhvVXWPK9x571VhA8r4aczodj",
  "key19": "2Nm42mHZCi6FNTkPnwJbP3NoQ1gWR83VFyajYc6EDdpCUBv6XdRzvax2eXPpZYjdrAFZd9h4JEpDiTdKpwXC1SrK",
  "key20": "5fW3KdQbZZi3kn1ffit41TvwGBjAJ4gCDSuQ4UaotFJxCeWe8jcKecHBrt5cAPQdjscCKsTPDHPd5zqcu9UDkkwJ",
  "key21": "2tQmLC6v8T3o69Nfp6XWsPMEw4dJgEzZTf7ZWZGzzpGw5pDURiFu53NP9nKcUfPRChX7rkBuAYy3bTpDb2ExpyRt",
  "key22": "4QB37fZNspsMpwMeL3DK8nPoQVaYv9xsc8njD5AG5icnDFh85sNRSx1sgUBcYfDfqybtefQ2BoTXA84kyt7TB9Tz",
  "key23": "26fR12dJkLLqkzv61CfzEkWj9wRoja8dePFqYZyiZPWaPKLdvu2nx1oURMpuLbTbj6LfG31UptmyyW3ULFVnaU3W",
  "key24": "3sxCo1SEPi1saxkeiGNAhtmdddh9ehkW6cZdkJ2RyAwpsaKaGtNcJFdKakRWjs8waRKfHy9wpNtWX2hQKUqP6aYZ",
  "key25": "4yVZorjWdqCB7kpeJZYKeCfRKJhomndidLvkMSoBKtTHh2r6E58KDu3TJFhjvZfU5ziNEPBcU4zhwbrkeyF3YrSU",
  "key26": "3b2n2J8BaPAxq23QJS7BCSLm3gpm99LdNTrp952xhaiqw6i3QAM61tHVJBHu46jCENKT99B7rk7YvcVHenGxREqm",
  "key27": "5VW89ZhzXRtHMYnWCzVeTvEKMbznLQ3MkuTSpNc6BcRBiFmsq84nAv5aqUJBdhJtaXPhDzAF7nbN6ou9m6SP7GP5",
  "key28": "5GEMzcdDNtTAZvuVwTmpJYxdoeYtjjfPomfRLzznsLJaNano8xgicxLLrfGZJsV1PCwxZ2FWvFvk8ggghS5ZKyzk",
  "key29": "4UA9camiew8KmmzTW716hrUqsqvRWwabNuoQyanmFptHoN3W5ZcF3TRHgYtvgcF4sePQpja9NZxu9zxKmz7ZzxKL",
  "key30": "4Coj654kwsLGyufJK9DjjH8ASdTsuc6npAeobHkfYqVUgwCQkBMojGgS28LMy4u87Gj6kqVapeb7K7Njh2HrH7Xh",
  "key31": "4CQQUgU6HyG9vQtr8obdVW9pNE1pEVEsmDXrXQ8qTKw2otpNLkNwCx73xe92QuGERtTSHj71hoeyqCm72d9GTvny",
  "key32": "2ATyBYD19ArSRj9Wmxy6mai9cuNBEB96qxfbhHHpuWx8mR1RB6p7qinqfP5PSH3xKL69UTSh87NWZ382F9KJDYQp",
  "key33": "tnASeYi5aTGFiofE6NJ8Ks7pqB7rAy5qSsGaKBTa4QsJ5AahQCh8tCx1vqmF26JrWSPctvbmqmCALWZGokK4QrN",
  "key34": "2YZXAFGxCXSAe1XydijF926UNwbnvnQniEuHJ6R2TnuHEq4zhUvGjZ7uP7RtXpM2sMFBCmXkDearvRdnpjcVfoub",
  "key35": "xeMw9ahQcNpFn4T5QLzXxkDgTuFwuLkasSKYFPFSG8fA96abFDbCQN8FCzX89CjRUscBxQ3r6SAj6hdJKPdyZ3T",
  "key36": "4KH1QeNGFDtovfHPqrfuSXwm6TqM5atMqq7UkqMhBsmLoS91EVaAxZ7aChYC6b7GKJwZE1Xwbzi4JdvMXGvgcTZX"
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
