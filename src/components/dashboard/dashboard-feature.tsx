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
    "2XKXGW4uVVbSEGcHctUWiKMQCGjrr2L3BWrG5tRAs65pmtQxWSmpPmrn6KbnYN11mCiNaVDpiYrJft4142TX9US6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4Yp8j25C1d7zWitqWdhhLxXnxXBmCsJBftV2rLBQ18Eoo5WvvjdYLwWGVwmoc9baP3NNiapXXa4LdDgq4D2bZm",
  "key1": "42tas8DxeJzWnJVLGMqb4ktXeewEspjmS6oAd2U1N29sqUp7GyMkfZ3tRup2qphNgzhDEPWwwQAxzKaWARMfDPXX",
  "key2": "aZMesyUWA8hECHrzL1366pNXPLvb4WuFqYHS78g7VXN4n1751cH3CDtc96vYGPh5PHKtWDeCqpYVoFprLfJ6zJ9",
  "key3": "39RsF96C1ATjsVyHayhH5ek7M2JUE5Qozb2BgPKnKjZhgBFsJzVQLzg4HFWWtQFKvqezLFTufg2z2a4yR3fLEhHo",
  "key4": "4qTpddcBvoA4kxMbjcfdpSUisxYfjXiZfye9q58ASMoHQguANvMJYaSyhQcWhCeJZvpGBzJemFyqumyobavyKh6Q",
  "key5": "33ukmpKHmVHjXoFBjJDAfC83tiYgzSP6RfmtZ3bUyJUUrH9QzpXdCAy8PHLcfL4o8pQXL6eJNHYBnSQhYy1Vsecw",
  "key6": "5ruWSHbRWjZoYf7NzpWBZzj57YuTsq4RTS7xJofun1RqMUXAsZWCQiutDihf9PdZQsdQVxmtYda1mj8tkaaLSrE2",
  "key7": "5DHeriCcsrEpG7PQrcR35JEhUT7oCsfbpxno5wy1D6p5dVMuaqJS3aZepdftdZy5N45ykEaHcuJ9nRkxB1zK3tWW",
  "key8": "4Pz476HxSsBsPVYv2EA2A4A3k5pZ9XUVUzGTCr1nVsriPVFcaqCCCBPXoL9crfhcGxp9XFqG2tpT1u3NKwTCDLVi",
  "key9": "5xrAGCNnqHLrMNGucKsp9SiZAFX52tt4ddbGxyicxwoXG3khZ1mCDWEGLca1viNNzZAS6xYZ6rX5cvnCWCHRDR3F",
  "key10": "4R9wrvVy6hqJv7XN9dmNGiiZN42MARDP2t9HSmTggxjMHsHgMYMmYgf3RtWZJHjHYwhrHGYt6bzrueNmmvh8Va49",
  "key11": "66JGzAtgNmuybZWM9LNPUPBTmnD2hUPuWLDTUE7PQeuyeuHj6P8cW9KtFmCnaghvbpkcqgeNkwh878ZZH3sjbEX2",
  "key12": "3pReXEVS5Yn6CASYS4NyH3oQZzGCHt9T64ecBwsHZ8HrtpYPXQwz4ps3wGyf83heTPmUGffJCz4CxLSwJVufyyTT",
  "key13": "3YTB1L8j6n8VzM7kiMFJPyi6eEYy8rrbgKiNEtZXrfgqL3d8hWS3UjU5uV9R8hnjPbVWhvqmWy8DRkgzjJ1LXiW2",
  "key14": "3ownbQ7xVMCNHajKU6JCxpefPQnn9BP4hRcAYEoXHvL2j3N1LbD5xpFoevQH7mjYoktqAdjCqs48awHNYEPc4EyA",
  "key15": "5LLnheviUaHNZXsu6qrmbZiH44KYqmZ7F5MnLdydTZGrguRe2drFQv1tEBBE9pk4MRgtSmKEG5bv5Th2EkuznFi",
  "key16": "jL6ozLzD6emoA5vUJDYaPKF6N4iZaT4RGKdYL4jfKU9UbGM2fqJnSsR6vsqCis5QT3mPfb4uBdTELvccYGBXeia",
  "key17": "219ELZsQTFiuS4gYeHQJQTq38JnoCG7ZJGMm8GvryJF32aQVPingNGfumMSRztMsLePujpA2743tjzDtncpGwhAy",
  "key18": "4zpHQQAws1YhRRPfbhfFwUhWHqwsGrDvtdP2BkNJTjByaVrbjyAXWzMjMPrV9j2w8NGZ5sn4baaMZBHmMAsrV9U1",
  "key19": "5tJCBcJfEpQdY2bTbwntQNonD2RsA29LtbyjsPvfdumm8LQyNhRpkzkR3BmAqxMmzAiiXQurPyMyLP9AX8rmfSAL",
  "key20": "2n3Mf1y3ZxoF1re3ixhriUBRFy1jp7e8SPU2PTKnijMDSo77GL567pGTKQ2zFa3xNGYF61LA3Bv7hRUym7g8boE2",
  "key21": "3TNVoYSfurRAQaXN8AqZ3agQFSTdCaWkcKUfQnuTaCN5q4ez7smj4asz2ju77WpJ1pEm3BenFuJpa6ZXcu9coCwm",
  "key22": "wkZAtFTrsmwfQaD8ZcpCC6BjuT68WeJ9RNRC9QrZayC28CgjrWXWjSeariZy8NPjXgWbLRUk2sr5uLKaSHDgQxG",
  "key23": "JvJ6Z4ZqTErVRHYbjhSAeySFHikEAs9PdUtAWmKwPJKbxMA2QeEYwxry2yRqWpTsFrwF9fxRVECsV51rPwxTpQc",
  "key24": "bviMjWWQ99AbZgiWJmM5QdYwngzL6XEpY4N5xKXBNxhAgogAWvNBKtyZKtQbL2G17NbuCfupLUk5pBxHqPkLQcP",
  "key25": "3EqMQhmz6ibZ1oKdd3C49LrEtLwyK3nuHVNn3YK9x14n9Mqv3KHJWsojYvrVupLE8xSqeYxi5PZgReaudBGJU7g2",
  "key26": "4HFAff1GENDnyE2c7nLtsHdQqEKkLw9cyoSv9JxrZ4NwPjDseAVeBGqrAMWRYirKmfnRzAy5AxZV1i1FFb8w1A2w",
  "key27": "Q7gN6Jpo6tmXvJVRVHkrwTNj1tQG5nhYevueGXhNtWEAQTFgj8jq1JRiHwW7REhTVJWuSsgJNsGTLbXKmuyjM7S",
  "key28": "3ogFYJm5XWadUp6SsdunEN97GgSRvLZ8J3BrDLEJoSKwfuPc35tZqkKWWxgG6P1J4LjpZyLnaBTAiffuB2fgDyts",
  "key29": "2LRnWJTeZDLzpM3mqVqaQjpijQwWbzdVyxYevQM5aYvspxQXJCfb6Kafnz24p16CD2m8VNy3mGD58qn9dJjb29Yf",
  "key30": "5iF6ggW8DhEgZpwZqEFZuSwNBkmwLYubkoYKNrjN4V6bNe3rMwFwLNoZg7kP3W4Mcus3XKsWwNpp3FS9aJdXtixd",
  "key31": "dgCeviABgMWw3yHbJNDH4CMSuo4CNn6XVoreNHPrqYAxdYnMw5gTFyqTiTpfJbQy3pYFLuyC3xRFLonSfZ6BApi",
  "key32": "4ESM5r7kNGwA8NDowBqZsKkKR1Tr4xZVkBcR2mXPV8KKCHNx8wfTF6BrkeWD4QiqfV7Vdn7A6FJbW7SWMQUWFd73",
  "key33": "WaqD5FtojnBFW2rwjWZTJePfYAjjRDbN69RA6LXM1dUAB42zBvSt3fwRG5RZ8BBgUh64dvWLtfGSfpZkPvQkFZm",
  "key34": "4xqwJTt2T7vwQTSQUbHQkJ9oxJGyB9fLpkLPzgpcVJBXgdU2e3KFU6REbWx5yre1wCg2sjK3yiV2G1kqmGGJ9J1j",
  "key35": "wqDirqxshTA84KWpxRBcsJTFBWPTrz1PrcFUA8EpL2RGUeoeTpgsjDVmMfrR1WvhjBc4eP7W4RMH1gfZPG3kzqt",
  "key36": "5FPtAX9CiVstdtz2eutA16aEUhjXWN53z42REE6U4oVCk8QQNYwsJJZPdQhVJmE14gRPUBXwgkpaddmyzmrT3Mns",
  "key37": "isiYHJPaco5523LDpZCxjBLVdqjCWJGmx7G5xxPJSf6XiMeH2PrMwi3w1G24XLtFCZ8ikJvWTEPXAVHZGFSyuZs",
  "key38": "2VPBtzh2MS9dbmUsgSyWXp23NwvMXFsNR3sDcfyUPdh4XG6FCCuXAUMLbb7E4Sc4RHCssMgcMCMy4k4Aomdfwrd2",
  "key39": "4HHCoUj5Kpka73EZ55Ab7GhgtKGbgF7f2iUGQCWTLKhuyziQ93xtxETnoFJ9yBFdD25sQgGiNPCVKWCqBUJQTGcD",
  "key40": "4MSEvw23NqkkbqbVatV22ATmZU3UhoyyUfW7oiBQ5Q6UvERVjmyD1QGdqKFrQgRs6MKdHf5RdRGj1AtBagkfSSB5",
  "key41": "5ZyyhwuCc7KoUV1HrmHMFHDEQfmZio49QdomMvy5T8AJEezw8TYHxVB1PerwrYHQbyqk3yuCBsfuiybM5bxAuqki"
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
