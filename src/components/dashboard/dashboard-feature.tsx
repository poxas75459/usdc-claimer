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
    "3tgS5zkTgXA6vxtGFvFkLcd7V8Gj8K4QFK7EMrt5qy6HaGYPK7tvj2LGRqg9SUYdbtLQa193vnsZaCTi5j9HRByW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2huC2KXoa8VefueWLTYJEQkyLhBywsEj799PfFkfP2kFmnuQRy9aWgoLhsYre6M75AfzzkxgVkmrgYA7Gef85NZn",
  "key1": "2Yu2hZddfidiYUSBvDyAwK2mbvyqkn9hKRLRQnMq3K7gtMcmXYQSRuq83ZmHM1MN7V3fb9p4mip6Kin1wUWNt19r",
  "key2": "2UrkTDvsYTbg6nh4Jg5wx1tVTKCTQGQJAdiUN3cSzf8Euf1VW38fmFLcz9U66Kw8YupHUJgEE885gcYnRTCgG7k8",
  "key3": "49q3vSHfB9REZtFASktTrz4iYyX78maXpJq5KbephwymTksEUMq3sMCqWtT2e8AoxCPkAyKzvGEZbS9vm2a3coRc",
  "key4": "3rShgdbKrEXUZyUVHURApwkwccfMFQff9wPPLuVN6oTx84TkGfcELZuLjqHg3mPyg2jEnZwTxvqoWkcg6xdHHDsi",
  "key5": "UhPvbQrTt69UbDfk7N5grej57FyDuoRTZuyMTr3H69TXQmhYW6ckQFa7bz8tBa2u1NbLtuDg4SZPRvYToFQavqq",
  "key6": "5jKNCFCWSMYEDAyW7HTn8K5deNxXvuUUnVbLQrbkBFU31bWLNnBibBDWGRcSEAJB2B7dYoK8oZvSPcfqTxnmF4Qj",
  "key7": "4MYRg8UTCtxLhxDWjzLifMJaMAEZs546vFJiQaHpnZxFcbWF43cG8RDLSp99ha1SP52cP7jsuCf8KEdcY7v89UHY",
  "key8": "zZyh8q9kC6wbWnneqgAmmPDb8F9XRuPuDfjYQATZRV7eereAPUmYzGTBWkwuTPjfqiGoY2tdC2VTTzUEiFKNXYL",
  "key9": "2BhQzWKMxD8xhddyoHmwTVRyfiPErBt7ooRig3bw5y5ddwYEs7aq1yvAFfW6ttXCEvHaJPdwcnq6PjpBpf5p89zp",
  "key10": "21YUYK2uXwU8NdpPVhDC1jrZ1LLRhDiyKvdDXEJuDL6LjqTmafYxn3hDE9CqaaZBAo2ipRHVHzn4y54nJmdFWALz",
  "key11": "4hdoehfbsHVonSjKWE8gGrJStLgBvbpjzxvua8XuCETbm6gVG8qxhNNt4AruhJX8NeSEwBum5hWSgcSSfm3Qm7jd",
  "key12": "3NLCV74jh3q1YEwJdmRjVouET5EBzJritvYnmg7s6Fw91RawkCz6t1ArYw2RVSuvouPka68RAhKmwMfoQbJz6KTT",
  "key13": "4E2WwRBDk8bdgaEwzKgr9GLy3axs3HU83Vy2s5xpShRrjfUpUyHizpov6mngbwLh7Y18KCruWuoLybzH59iGYqjE",
  "key14": "3aoXFK7adpYmKsKYzor2Q1bYEP8ezsH2RHqzrSD4mW9KHohsveozRRx8TZFFh2aa7zH9PqU2wr5kYZbZtYBqNzCK",
  "key15": "57mLSdXGmBFjfHRHjyq2K57p5p2tpiNRCCPVZD7Fj7WR9YRHU6Zu1UEXxnij2TqQ76CxvdddgTkjMXqFss4jJnMp",
  "key16": "3h5DNmvSiFfj7kb2gW3CteVmnZhGUjw82cR9Bg6CVxjXd9i13hispA7hVJpEA8Z1Lr2imCjt6H2SFrM4YrWdg6Be",
  "key17": "5YHvnY9owntyoQYVvMXgtpXnMnxFeUBzxNgr9iwyENvtsCDTvsrhLHS1QTwZSA21SmWTN83ERPyzr3HQnW5X4nVq",
  "key18": "5qTwNof5bumg8BdFSA4LoH6FhHsiBdH9syLeYtnjacwmjQ3Rj1wn6DybM6HaNcAoMCvFMqXenDsgvjdknNAa4AcM",
  "key19": "24cXyXVvxtRrpqBuW3EjEkzYJgE4c9xDfCULEGUQ9yCKebqcAdv1FbkFk1WY8UP4C1Ss54he4XMdJ6PaFv6puFuJ",
  "key20": "2crV47jYtpXLPX1UbEdCgDiKgghXWmDxFWrX6d3JK13cAVgxCYKJVwpFMiBSysK2VKsz4YS83NdoR8q6M3hFRvas",
  "key21": "LtLdZpTzTE61jTDaMzzVhks4p4kwoMQ6kxvjKw86XFPDib9K1jmBr7x59ph1GYp2U4sz5657XDB5jduEnWSsUZf",
  "key22": "2AXShUAeDCtVR3B1fg9nphUtsfS4ZAZ7M7atChXjSsNQjayfZb6BE6VEKyfUQaUv94bsGzJ4TVpXEsNtYtP4P2NA",
  "key23": "GxVbG8nSwhsaLzcekh6vgZ9V71D29T6k4qxztfvp2xfKrDDzWrFdTsSmkh9NiDx6mLSaEKsCcbeh8yYD7m4UTgi",
  "key24": "GyxVAUPpYm46gh3qhAXqAzz6RM31KbEiYPYXaFc8sDT6MLhpMwpJteMDFDyngAeVJf9MCGJckRN5U7Qarqu46aw",
  "key25": "4jC7Lqt2V7zjRUYZcEHayZbBvjPSvrc8TKvUoL2C8foW7bz7ZS9CfGM3ekE3Thevqkt9uDmiUcMMh91rYUmTwAMZ",
  "key26": "5Zpsr7nck44NYGPb781ASLh3YkNE3jq61ntWYzCHT3TVhC4yzoD1tcMf3PZJWQup77dkQAmLQkPbH3QEuKRgR2Xx",
  "key27": "4mXPjVjTNTJkuWfYC83reYG9nooJ6X3SCTuB1GgWEMzbhJncpa132WBu2wkSM9BtxUofHor9Zi14VxVqER4C2bA8",
  "key28": "2GoWudbbF1d7tcAUt7K2cc4VZ6EEQggPQeeQFaXg5pwh3SnERL4w4fqMKH5W9vJbKjNAYhLAWxYjQW8WUV8R4QSe",
  "key29": "4Yhjb9rJJBZHNDUtgvkaSC9YCZ2M1fKoxmfGndhKbAb91enZsLVK5Str5U4npnrT6qsK772q6uGB3DBhokGSFcES",
  "key30": "5jH48GR6VobreLvz6JGcgmVrqzr2kxzxsPPpjSM7xFXLohtmWYtVfg2nBDhkDPRhUxBDpo65B3cMv6QQPMS1Z5z6",
  "key31": "3vQ2kBaMfDEy4HJwuEXLosvg4EF666N9gy39nVsphAwcqZEnq2fiJxXfgKEUHBQMGYbiDguWeA4tg2CAYSnKVdhb",
  "key32": "2PCfViGQi2kXonMryYMmNdDMerUiAkWdky7NM7iPzCjWyuoZbmwxPYuSwj76zzf5qGZngejXWz7RUCnMsRRL7ewE",
  "key33": "JbJKEo7ikqGAFrxBujZE6rckMfZyPAAbSToFYNbXnUXyGMRTU6s4f6c9d7JToSgzdZTXL2AyojEbV2zvK3ogMU5",
  "key34": "5b4UCWvia55RBV4UyimXAXiPK6s9dyHQ2Ko8gsyf9W9NHZnDi9nZ9KMKvSCFTb4Qb8rYcxY9ADNDJ3FqsnL2RVkT",
  "key35": "39rRVaSTaMUYAmTn1LiDZo4CjBeb4nQxz3pfCTCedJ3py5SLacF5oVxAP2xiuDCixPPziNuJ4CLs9hHqzVhk8teu",
  "key36": "2v59ySe3h6HxGQahr6Q6FpBN6HEFX9FMasko2WXGNRCFmD5EPgj1YyYkJn4m3aqhTRo4gQcsiapJu4oRc2zMdNAP",
  "key37": "37bjiHbR2S9VYWfwkguQcogV3YKYVkjKnZXGGMP83EHqp1DuzefmM5T2qPiEWStY2oz1E14GUpmQDss9AYZGcExa",
  "key38": "3bcUygMuCCGc8Wge4QVx2F9FwJwgzNrSWoHZuEemLjofwp1cnFuR7FPErufSD5JDUhod8vbuzaxzM5nrySGrkiHp",
  "key39": "5odpzjoHo3KSwnhwRZXv51U4HfCkWVa4ogHTmPWGyPiaDMsis6VD7FaL1dsAoRCoY976sEnx65o1iHm3s3GdNXpb"
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
