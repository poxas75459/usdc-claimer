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
    "tAks2osPLqw8NSr4FjkAr8xe3FJGLTm8jEAmKTBmBHt31zEgqt95zyXMwTNW9ECCgtwBzYUZLNDPEhPKcvzQf2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgirTWG2E6cMekQMhnqLAYbcMH8EqfQ8xcCDdY2zxNyiGGh8M1QQdZvNeLJ5Mgo3MxohhTza9zBuxs1M6sndGA1",
  "key1": "3ffvuEJjtkjCuV88yu7QphDRhny6AxPodGojsQAeHgfJFrjDJnBap6tfiWkXYz8hr8HxDYPaLq3Du9dF9j3S7pJt",
  "key2": "4b9NvRefMVyhc6x37M57VaK2wuVHiLEsHmFXaGARM7cgBz1TBC1J86xTv5ipFV1PACaC1VPx4gJFNDv2ENaMvmxZ",
  "key3": "277qYwHqxtAYsN5u74i1hwfbXkrpTBovmN3XjhGjajkLu1sue7THgesvJ81hq3pMb9End4nSsHbyg1iC2NuPqych",
  "key4": "2pHZkmt327jT4wUmB19KQgTDbK9ombEdHsCs49bDLNG98XR3sSZsxBwDzCcyun486Xc8bVMrnVrFMTeWUs69ndwx",
  "key5": "3QVHUQTemqFuFhcBntfg3jR5FjrqTAsAwJMZHKrdBrfBcgYE7zMVwe4XqzrKYzEdumSbrnXBkb8qpePAzBqdzBVc",
  "key6": "5b1eXRq8qZ7EeJh8m4cUgjoasLfpUKmxFF5Q6SjSpNm6eUNfEkREv3VVLx1MUYCMQGE4xj6k22Ng8tn2tcEdkS5M",
  "key7": "5sdKgi4GBVAfa12nb73JpWGKLKRU2K9s566onHvLVGDEKKgHxjyfeFhqc1W3qQJ9PpAaTiAa12hxGcphQtZap2jN",
  "key8": "4GGcFa188tdA9TKV9uhSR38hYCLM8E3iwFixK2FDYEGCoqZ45BmefwjAywRAsf61FNwojVXQurBQnXRGGkmq5n6Q",
  "key9": "5v2A7SioqRMmNUarKQjdB15yZhNUv43sQQr54avppNtgdHcuGo7UVjNFZD5kFUbLXB67KkcqdDS2Gs89DbJfSZ4D",
  "key10": "5QjpNB3nVrgp1EmEwX8FT73yrtBbC94gtQHHVr9NM8qQgGBhyxe7ioXKbDC8uEk6XdkwBNWKhXshu7fqoEwjBXZw",
  "key11": "4cHV4qDd8NYxFyN4WN8Wo5NySxuKzTg2oULBJTpPqYmcYhF5TTtYCyPmzfNooDmcR71Z5VzynM7Hxgj5e1QixcdP",
  "key12": "5SKoK346gdR2ffuw9wyST4PvUw9L4BxGeN9fqBhmyynSRRvmT2DT64rf5ErXS1ZRftSZfVBaoCwMhL3hGKc8LYFy",
  "key13": "46jeJpfUS1JbZf7KGNnUkwaNtynkMYFWsGKj8Y45HinU581zbZRQht7sF2v4ki9g4JZf9qaYSXuTNyxUmDpca3ne",
  "key14": "QBGBgyG2XfX7kA9MJ9waqKNYmPReiP3iq6y2TDTi1mfAHeF3uyPE8vtLgxburCqjBHZUrvtnrqF8T4gYs6xh8zm",
  "key15": "4RyxfNxZ7sX4sWFJimZcB9aAqBHngHWh6uKssPL3Qm5QDDN8ChZwGim71vdEK7hMUQEpq2XiELWVzHHxaggvp8K6",
  "key16": "3SVaLqwuUdP8jUQrvags33wxeZPcFJpA5Zwq1Lp7bmbRYENDyFMYJHBt4ThHvZxwALepMUV9K4gBNGMdsJcNGXXd",
  "key17": "2XP5MTQT9mZyVRBW86Bsrbo3rMCCKvpVFWmwW6Xdt5AqypizSV9gkerMBxqxJEaWVies8bbyS1ZEhr8uKrj9Uazj",
  "key18": "4RJZMYZ9CWCe7GmEcmDx4nksqMQUUVUaJJ6BUNFjywYz9CoFG4grraXAm6i7c6knfGoLJaHNESAftGuLQFuSXG12",
  "key19": "5Pjndadg5XY95uML7jaM7bsBtr55toU4YsSxp89j847ssRpCsP25YXf66JdcwHc8HxPecJKaF1YMDA5e7heCXadU",
  "key20": "Mt93JZAUQXoVLYmLCxze5aaASeDUhCMqng7bnf2EjA7rAZa2Unkxvm5c1HwVR1N1scqavRfHTQ65ghvsPTuxdZg",
  "key21": "36dJtc5NBPQScrYVGzgj6o1yFrRQC8FvUdrYvLe3SbmdZgWG6aYnzwWuXXJ7mnmjhbyCPNzWK61HrAQr7MjdskjU",
  "key22": "6Mwt7v52V3y7Lvi1NwXmvrwaJs9tLVSEYkBAM2bwdsMbMqqHZ7nQyEfwqT2rZU94WK67ZAGeJ5suhV9Qzf7UjJv",
  "key23": "3mtacQEkSmiNuZp5u7mHuTGKyHVwSn2cfcj25a69iPSBJFhHZnNYu7hEM9RC4sG8cLfHhmuwxNuSV5KCvEVFNwvE",
  "key24": "LVWe4DYj1kNAEQCNfLwQfjQdLG2LKSShNQQZR5KUnd5HcLCY9QD8tfYRvHJNHUBD8AhCtT9xFubXjmpGexmMgCP",
  "key25": "33eeYFnV6TTYiFfYSc9GqQd7hyp215ZeZMw9jXPjrArHWDAx5az2R9dfYnuf8qAQp63peWAEMWciewDTdYJYoioN",
  "key26": "5qdAttkNp8QQ7QUeP9EsDegdFqNTrnpQpm8qXJDmJa4fitzahfQUjcLfxEPwye6Y4ndj5VyrhDnSX6Zw1i5G7TUM",
  "key27": "55gZe67UaA1yNXUsoJnNG8FGKLjLMxst11Gaz6viesRS2PNg3rkUNXj3CXdLP6xKT7xY3bwgN1wcqtxecwPr2CAK",
  "key28": "66GYwdKjsvLxUNgragRpuVQ3ia24fhP8KRZrZxESBiZJpyS5kwb8CB6e7bSGRqaonz3YAA6ppHammBVmq6DEKgTJ",
  "key29": "3G2oL6k6t349DrAxkRF2nXKXBbyQLBkSkfe3aREdTDX3JAjH5xVTSsRiFz8eDxhXLJbApewa8o63YgVHnUBN8g6K",
  "key30": "4FWrk9skQBb68BxJ8W3GLXtvk8hbfJ45Mf3YCkbJUm77F8x9S5sPNQe8SNubmr6VRMNpUJrVeVzye7FzsrZAn5yt",
  "key31": "63gMXYX3ABgn2bdeyNkJL2C5B4KVvKFGRdogHQoy9G4GBiA8VvL6m6yrfr2oR38jZrykteFkRq4b4uKVnvGGicdn",
  "key32": "2FLux11T2Dwtn9tCRXHRZEaH9fcS7k5PQZK6ovvf1iP2UijeQAm9NkCTqSPS47hqEtfx6acRNfw97drJ6n6keP1J",
  "key33": "4dhsaihr3xeDWCQ1nEECJMBNErBes3z8gstuG82oxxqoZvJrs45EDvWwsArVsRmr7CpsCT3SQNwZvYKPaYLzyQx8",
  "key34": "wbLbnV4eehYtihESygju4izRt16b3KxGeY6AjQJ23Wi7j9ZZ5f76NGgz6JusPj5QPS3NhPHwd6RHkFriZJGcgto",
  "key35": "4JypkCLLukH5dxqdPXd2MYcZvSVgn9vXuPuj3DdmqjpVB5StBJy4DBZ8rC1pDDrE6dTt3MsabXJLhgZHAEumacrE",
  "key36": "5W8MEoXr2tw3Vp3WwbJj7J8RCNQLCKZBYbv7nAtL9az9CQ6EVPSRdQxnNHeQLBkyjQQ2Q4JNRKNr9EZ4wwsUN91k",
  "key37": "5b5hniAjKWDdnhc36K69CxAKSSCCW4GYSSPs7dmgs8mPaJQMdukLugYtPGDqP7xoYcSqWoAxNwkyu53PJiXgTgA8",
  "key38": "E1q1Xo8ddqKEcDoVmWTnvs47bZS87AvsZeLZM7KNGa9uC8k6hG9Bbc61dEGnCiYPRe3WsfGQCJa5oPxjDfo69yN"
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
