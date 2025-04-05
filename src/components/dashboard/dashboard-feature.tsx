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
    "2HyhQoJEu5TgHMmWgrEjM8L48u7E3Nbfg4eVtHWRoEjbcFT4uvBNLVE85voqPK4YwcFcfeYM12KvZKvM6BThPXeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVJ9krvQWTkNkLd6WiQuyrJ2dvdzPKAW9GPDMgc8CcE1soJi83cAGoaqWXgqXJawAmvacDxdGrL5tFSq373KBE9",
  "key1": "1GRR6u52Y3omVCxwxcgZo8fuqMhJueKKm3es4GwkKhrmBdQSX5NxxSk7WmirNtaBRBZQS1CapDHGwE32VSVy2Xa",
  "key2": "2sTbvT9QWqjpPt4ocJho5yzvrj497S416XqSCkxvvyQjm5UyykW16g4kE8Chqv5zNKWUG8UPemmz94rMrU1zCEep",
  "key3": "iRpDCsjd5fUYBUhFnR9nBRZpK1YCPg8veo5T1G9n2niALqpKjWxdsqLQgL9fReDu1rfbHrH3GWKJsuKm7c6kXSB",
  "key4": "3ccqsmaU6ijN4UoHbs1t1TSovGFwTPrQVkzhs6haRS9wCH4knShMPishtCFt75p4stH2ShQ1z98qimFmGZ7VAxv4",
  "key5": "65wJuGScbb118r11YN5kEuKoBQKE3L1Ek4mWt4oNEhiVYidtn2x2qFbyGVwVZ7uAbqeWSscitywoVRycXmrALSDb",
  "key6": "4E1B22F87HeNg6ivxADzPfp2V7idwPUNTgBVS8D3j7SyS2AdtgupNTej2uFyUwQBXGVPEmD8MuUGbeHSG8pyGmUq",
  "key7": "5agHSgWxJ4e1bGDabxhS4mSAo87LsDXLw1r4zrC2TCpuM8GJvYLxBWv7hH8BJGzmtJhWK9aMLiVMAR7vjvPVxWfg",
  "key8": "65uzRb2c5yuyS6Ff9DvnF9K3xUMeh4YkxgztpRMPr1xCQyHuVS6US2m4yFMGqdCRg1rmkficNhutQuQQ45qrzenJ",
  "key9": "44bPFFC5bfFPDEN171bcgerunhjrbWFF2qyCEbrdfDCJk1AX7ru9H1wfgsVHuYmvJfgYRqqLSbgURGWthUSGo7Xt",
  "key10": "gJYc5QXfQnS69zAhLV7RpNNsiGTffgUibLyJu1B5k7rAXzhMGy7r6nBWp4Kd1pQYWPSY8uhwA3DcNogyQS8VCEf",
  "key11": "YLvmk58rCJ3tYjXHqjCV8ivBQkoVGk7zJuCPiGhpvq5p5pW1DJYxH29SAUSsiMZNK9mK4fH9gCge4aH4FvhCLPb",
  "key12": "4cqHiFEQmWtxx2abDwW2hsRcwGzq1GZ898zhbj3MvVgBa7XptB9nddJCikRQuE76hrN8MDquGw9fk4mcP6N39Umx",
  "key13": "5ukp5FKy34EvWyeqVHChMccbjxvQWN65dXX42nvcJprVnzketGQdcrcqXCVHpaEj2yZy7UZ8wZ9a7JZg7cnjSc1x",
  "key14": "4CHn88myxXL6LbG9GVGULfvDrCgLSXg1eBk4jC9JJgffaTTQBUFoR1fD8yE7G8FoRVBnGNyR6TWPJx2PusCaWHAB",
  "key15": "4WKTEp3sNaC4bmMtMANKm1W5S8F1TiiVhDTqgsj1DfgZNLoHZ1QdvNYtWyrQagzJTZo6xECz5rVrcpxJrmT4CTLw",
  "key16": "4eqjkCCR2s8ki3wJMmfcPaZ6rngekh6xYmgNkhdB1ASHy6iPEWhtVB5aukghwnUEKa2KkVXZhV4gpAzjt2jBYPvc",
  "key17": "2WrGaquKYE1JjWqnK7tVuG7XzH8UFeQ6vuDppn52F7GPoHTejg9bgQiWx2UMB8h332y9pkmMj6BVDCFenCbNs7v5",
  "key18": "uFxfHGfJvVFut8bdasfWvjsQfoUEeVVhkJLJkwAazZxmS72PE6jap23n2PsBs88Zh4XgsWK7XX2qVXQvtauFjeR",
  "key19": "212e6vH66e93DiYrTt1MZcPVTi9EURRZ6Ur8uERFVhH2v7SKyRk32hLiSp24NtyHYKdnqyTtxGWAUfVthajmkhpZ",
  "key20": "4EChCgMLhW78Fa1xmUyoyhEuWwRCb1gUG5CHgfXh7KsAG6hFzpBChNvVrMqv5UfxcvwCxssnStHvSNvj9Cw3vZKW",
  "key21": "2vugoZ2PVT6BJF9NtgpYD9imMigEHQmyUBV3SC7rA84K1VKrKwrKT2g7YNWSf8uqt7wppMBKyAS46WfM7mfBR2Dr",
  "key22": "5jrH7KdRNHPAr6Nax54QhKobvhSXjZeMwh1q6aaHmr3WMKitoT9MSj7LTh1UpkTnFyEfJdMSjr5hBV7mGypemDNY",
  "key23": "2uCcjiizxaBBab7iou4hsU4MAMXEr6YRsKzgr2C4LbsynZgSmWbf3ftaT13YwLpEDdpwogQHcaXGtsnmRDwJmrhd",
  "key24": "3pdk9BbNHfU6Dsd4QErrkoTUtfJQah2fAWahojX8c6KkB6dMXzUzmrrU5DNhxTG9DoAvPdAetLFBQzU1u53Mfor2",
  "key25": "61uJTnvgQzyXkskhZF37hSTWfDtcRSEUNkHAAKcx1MnxqsvdEmhYQiE3UBgRdSwtEgJdLFFTRVjfs7srSKv3fiAp",
  "key26": "41L984Kh4LkvGmpczgUqW4wcG2CLw8EwJGT97guBWkAy5iDy86kxyW9qFpTUkYMUJSA4E4xRzmUd91FgUwi5jKGM",
  "key27": "2Z7JVXW6VUFArXsfmdoH9Uift6A3b8GYSG1veomuQxiA5koqyD7g3dgvTZN2jYs8KjNvHbDmFYkRAU7mJzL78cai",
  "key28": "3f4LruwNxQotwc8LxS5MqtVe1AJtTdXK8XUhrvySK81Q6MDaAEvVgZtmSNwTEFkf4F48vTKQ83a2BpXtGi3gh22H",
  "key29": "3gg7kYXMoPqtta9kpPWsNuX5nMXPXGujiWgwhNGwuXK4c2nokdwaMgnuVT8mMXyj5Pj9mU5xWTPSG3oAfrcYZXJ2",
  "key30": "3JrwKTCjS4S2jh9RLuTbuUruhbjft3e5axV7a7YYbkMA7Q3dktffEycAH3uQdH1nRoZ6EctCxhyjAnqHpKz8dRp",
  "key31": "3uubNePnAQg58sycHqesTVWrTeAEGmfH5tWxErMaBXkyV5wJyc6WZ6Sy8iFDWXi5eupnWK4gbmGc1uKjwEQYHKWn",
  "key32": "4qkLogLVd2qWLXwfNQg9mxEpHHPFukKTTuydXCJ1GSPzsgUATYQhcvLs8thX8ssSfZocQBv5oWxNWyTN3fzoJcV2",
  "key33": "383P6KyW7rGbdbCEWMVLjcuZzjF5uwsLhY8xtwLAR2qVZ8JNrzehPAAYh9kEeYqwT1D8GnxzjrDfs9DmCTeaMsqU",
  "key34": "P6zLrjq7FtZc8Be4j1iC8arSe7H7kQE6sVrUqMqrnEsH4Q1bA6J91D6XndXLKU9YSEzuQBxYvckjESuBER7h4k5",
  "key35": "3Av9Vhe7A7gr5AoqNpVc8VTbwkPTfn6jpKmdq9zvNaJCrvxaKihdmJiatp36UqfvcCqmcHkTb6jMqm8QZSmT5oZ7",
  "key36": "5PEuyetGNicGURMPkPmcopb7AkLR7pqWnoB3oQfx12pH3eBxnyadNy8isMrLJGjuMeTyaoTQd4mqFgjuFd7Z4mBk",
  "key37": "q6vZwGmKoY1bk7g9EU2ffSmginP3PzrZmAxwFSjSEa7XxP9BoQ8d5hqyRFxUdq18i5y4XeyciSH2WF3orNMqmkw",
  "key38": "1298JwXwZRoGr3w3RRxJsJunUHWGWVLUJ9QPagfxcJ5PZPFRRAyNJbLpvF9z9LCEtAF1qNr8YndrerjwCb58P6N",
  "key39": "3yvWkcbjPSNE4GdLBVAh3TCb4atMLFnp63uSq1qkX3eQN3XoZXc28AbuD5pPJWXGXLRbNTSnWZ7aKepbCYuoc6ZR",
  "key40": "5kzXwno14rDoqnzGPrSQ3GNCBf56TcUcGVvRFi5owfqHKDM4czx1wPmNepa1RyHoAYc4AYksFUDJPtdvbsiNzQt7",
  "key41": "2WYmbP1csubvBqzftmCSbxVHwyNPP2rMTaVbcqeqd5NHdgSjj8EVokH9REstULmuVZTbSmJ4Z5QxWt5d9wGHCZGM",
  "key42": "KwERPbph3KiHHZQoa2znCry7izT6ui34MyHeo45ZTvmHLn2pa8otHMxFqWAYC3nrqjc2XH3utWTBauYVN5xawhu",
  "key43": "37hGS6Ag1t4HXSFG6nCL68VJ2QiLqX8xZbzLNAV9QewLWJBvdZfKdHyMtBhnNrdeUpAgu77X98J1iruKVcWKEScR",
  "key44": "2cLbEL3PmMvD5iuFFA8GX9gbXnMSa7ZAtAHNzAkcp7iy74LftzuVLs62pBX728FdB63N95c45HoLJXhTvUKGT1Zc",
  "key45": "4xYHyVq7ju2AHejkpLbL8Yu5TzeCYyYo96pbtKXjuqhQu5BdKta8J34wfgz2brCeyghHRhcFMdYTgeUMLg5AAqRU",
  "key46": "5r3Edq4HhTTuV9cxy87E8BQqhFNXz3bBzPqC9WV2gaq1bZFnQoP4DE3H1paYtHQML8uGUsTVXyt1GvRCguWFLJCG",
  "key47": "5w1crMHjpYp9mPjThb2eniWaLRNhZQk2Y2sYPusqTdpoXiYxdomSFSFCdF2dqz2n8oYSHhkEGHE797BWyeLDRVAd",
  "key48": "3kTZUGXcrGpAs7oV2y57p9eJCXKgqGTse6vpor9vuQJBiCVwhbjMr2AyhShHUAnsRWdhFEFUjxpHRT2NcMYQ8V9P"
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
