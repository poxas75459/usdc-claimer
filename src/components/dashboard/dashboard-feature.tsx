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
    "4YzW7cRa7Vj94c25ZWjACkxJ7tu381gijTa1hbzyPVuQsxRa6mvZGa6dB9iZBrzubkQ3UrRqSkfrm7mJYv8Gus3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34AQ8bp6Cz5Zs3Y4BsCax3NLCuqTCiPcbj5tvj3Bzyg5ok2tZTaF6SkJ2cPDm98yVx29YuGNaWSA5GcyfSHJADQt",
  "key1": "3y6tQx8F2KNK1NbqaC7SZQnYuhknggKWdSn8SrY3VQuAf3AqJmUKWVnGzaboJSVYFQhhv2ABKcWQjpbqEwGe2iyz",
  "key2": "5q5m24aeiz99GEao3Fb1ctGZUHrXwiG9dX7xHdTcVMXfQxf6sxmky68b1Cxzsf83KSXc8V4McTL71q8WL2P7TABj",
  "key3": "5reNc6yKPM55zxEGXBoDnBVLfdt4fkw6ePcstTyGuQSLV7U8zu5jrkyds6mTUhMqdkfG7xXH3uhTHiTPKnyQ3VXg",
  "key4": "3JcvbmvEXbQj167JFLkDzKw1aRCXwdFFFsbzzvb6ywn11M1BbKB3rktLoM6bPi8LiqVvd8MePLQnRtJ7Ba1bJ5uP",
  "key5": "C9fQwHyHFJMimy1fNR8EK8NWnED9bFZghk1RtnSvD4JWFsw1zwkdLf6JQYSXRzNJLwgyLPTvovqtqS4buFVSfF1",
  "key6": "4J86QePbzawvxwkwVu6zCQ5v1TC6dyWLUSBs3F1dN65mRJt9iWu6ysde5BXjobGsr3bXF3bY45fGKCdf4fChKSCJ",
  "key7": "4ZA1g6m2cAcQaaKbG9DDszLA57YKi5eqY6vdAuXucNBDGwNTUb9Ey6eEJv5wgFATa8fxgdHrhAyKT7dNa827P64M",
  "key8": "5JkF5DutLGvZ4FuKFKnULYjn7YYgvPik7J2ixUPrjMBqbTp48ADZVCr9V64yv5oxK543VqxPkhDW4tAjf4omb7jh",
  "key9": "3NLG5AJHQGDnccqapy8F4wQDbGaFBGdJTCv44486vktwQMkvoBP2Tc1NdFgJjqxoCnvue75T3WQN8kYbLmE6rT8U",
  "key10": "5M1bjCxonmFDbzAvRt8jSp3myf35ZZoeEGmVKzsDSQGH1wUdoDWKm4ko1t66G3p4zNqVDtqCbss2KM4toBhj4g9J",
  "key11": "2yAdEuJ9qqyAupA9zpwKwxcS5nNGBq9SnRurv521EnoivHTqBJDLWXkVdnUFE7wrr64ZmjLZvsnGRXMUkm9kh2x7",
  "key12": "2ikAvNAQEnPPVdzYSXvuqMuqrrxVxJpf2AZ2tZFuEZVgMvhGLLud6F4QNhmxM7tL4EN3rX6ts8JJ1f2DPCQXhEXP",
  "key13": "4JNSeZFeBwPDZrdJaLV5WmpTA5zbhfbSN2ULUrbnbPho6WUDzvyJJZw9i3X4Cn3rJZbUL8PXxsHAnV2H4Hx6h9Rz",
  "key14": "Z99yFaZZ5ZvU98d1X1MuBPzfHfnX23c7E14iL8UbPq3kXgm3kHsd5foajxstxxTMJ2ujzqEU1YhSG9hVyXmepjz",
  "key15": "24MAvj3aH4tG8KqdcUxsRwMxiqYNv49zLzfrncgS9fwKx2Kv5e3KqxkZ9Hm1c93DBYoXy1raJBbYrAxQPsjNTh7P",
  "key16": "3NyaCp1CxVvMvyQaxDMwRvMHtfNQcKGsZMng3uEypshAmNJjV7v5EzjhobQFYsaXcKRCm9ANJuE7WjLcoR1gHCz7",
  "key17": "62Nvg4NvcoFdsGDDGjsUxHTf3miw4WAbzQVTvioCzooYV6icxVPJeFcp6pVFQq12f618pAR7S2jqqrCLw1MWxWjY",
  "key18": "2ZhRnEi6WTo6rZVAWX9XnVxjLP4GDrdcS6GpPJbshtab6u8dHEvdzRXtaMFexuKAELRB21UdYvb4f9UMscWxhXWA",
  "key19": "5d7FTPL3jETpYa5Wzt7AhWHkeNNWSVMY1qbEdwvgi7hfYy8ExBSeKYZsjZjTkmiGzDEgaJSuFn2n5c9aR75rAn55",
  "key20": "42iSMmeZc4hEh8HUApYDUYmMNokVxN9oLxrDYVd3BeusVcULCUEP96FjFfuJzzEKpJDtHMTJAvLidXu8wqf7N3z9",
  "key21": "3hQ88fioV2FUJ4EYTK3TP4oTJqeW82sBh8JWDz5gzsBFTY8nZod7vwkkjwbhx1Pzh4tUXzPpPegxNuJmDkT5zWDD",
  "key22": "MC3AXPFSfn1bpyY84axTpyJEjydae7J4ty4Lf7TsR4cBvfHi7zvXfRm4fZs4ztLxcpReRAtfyXMDTmkw3M4aQYx",
  "key23": "4DE7iMHNegud3b5R7JWM1EqDv5F6B5fkZfzLfUqRiyi1jS6MHfXTsT9YFPzMRqfSp2nRTEikKrFAWvxyhyHD7VVA",
  "key24": "2sqHTM9UfYJWAj9sBmHLqKCS3BfTFJRGfRm69Xemxjhyztn4Pd49LXqUWo3ZgLBnY1Dm3BvabgmvLUgadbU9Vrk2",
  "key25": "3i2rTR53kh5wL42H4FstzfCHEEkc4g46ap3JWG2pp672YXpvkVEwWSKQSUaem22dXofK6hb4yGyhgpoNKL19iYuS",
  "key26": "51BLUNPKV4MiX5Hr6Yo8oeSp1HU9NeefsMApMTBxEiw9eNRu4A8sv3hFXkxTdVAgNpPwdMB2aAyn1BA7cvk6V2u1",
  "key27": "5oFTEW8X22G6wVmsP3CQeGiLwyq86VSkRaDx3PSVkLoYAXmNPAkmMrrX6B9ZsLbAKJghHmF1yUjgqNHaH72MRPJL",
  "key28": "5AKaHkR2j6kt6y12yEUjraYfXRqvKsYgrdGRBL78M3iy6PZH4M6YrL94bt2QL6ZJ1TzAUQsGr92HDUVKHJDvgC12",
  "key29": "2ZZZCRb8ed5CvDVwS2u6TEXMzQ8vT9fwbW8PgKM5rPpdQrWJoW7MyEJCvYuYH5MYTqwpmBfDKgUwZQfe6xFVbqG4",
  "key30": "2ndRAN4WD8uEoRadT7R6rhC8uxUpS1nArFU69W4tPVJDCphBbEWwf9VBNBLBS2eMnXifVJzaaX9wwmxdUHybjRci",
  "key31": "3RSGVQnxoEpkmN7F5w2UbYFj268g8VGr5sexxtw1qgcwSvfUHcfAGtkLhay5hG6UqCtcWejRnrU2vs2mfSX3whkp",
  "key32": "4bnkqXbRga5cy4x4e2qTTaVDttErrjuuXETuwwMuqkmU5U9MAVa1zCooiFy5ekWwVUx5sV96sCqjZa2spDdPda8n",
  "key33": "5Z6TohMysQ3hMAhGmSprthyrg3ehcE4S9AGyAjy25BGx9HcpNddyAP8ZDUdzoHwPq3jvqwRsVMqwYyd6onZJMZzr",
  "key34": "26QBaAEAm6qWLNdiQZqJydKJbTsjTW3JQQ3mosWTSC1oVuWvByFQnfDMaviFgFGLTEGDAAEuaF1JJ8V4QMkv92Hq",
  "key35": "2HALY2tTH3tbs36GMm1aN54CKkbZLu5SLMnrwUDaXeKixWcDB4NdtwpuRwj5bbZayFZ8PiEWi4XjFfznhrTrVtdy",
  "key36": "4PspD5ms2DTZMKuqxx5VsNTxWsQX4cVYUK8s3MNgPMXJab6BhWxX3iXz7wmWmkJPoxxddRKYUCjcao71sdPD22pP",
  "key37": "3JSsP4QCLYRpT7fP9KZYo8bjDMUhbMxZKfzoR5cEAo4aUzpooyPTdmhgFCpPVyhry7yiPcTu1NTDHMqYgvfzWc1a",
  "key38": "2F7tGkLcsbpJjMtHJdWuasJbiySMSQdTAcji4KUckaJ1Jb9B3feqKHsFmieMPexeF3f7NH45j8xYr6ZVjsnqRyRL",
  "key39": "2ZZdemXdhi9qXLJyfgNWuKFyU8oJ1ABvs3jemNmZiCH6LP6nbVMKipcKPLjGEwvTCkdqeg36QgewH7M1o5UQzRtG",
  "key40": "5EYFE6WNyqvmcZV5J4PZhb5S41G2KxRAeGceEXevmsnBMK6hzuiwcYFm8yoXgaBtGMfZ3MhBEZPkKj3NbDcD58tn",
  "key41": "2aQvw39sog8kjbT9r72Qp3cXuct26sDxhgSDwuKfQiZ437HU8rGTZxvDw76R3vMPcKvkSDf3DS4kmhspvKJPhU8t",
  "key42": "3oNKftcpCpDT1b6Cq57zefti3bGyKQhvrFe9UzRDmMPmBerCZq4LP1BjkoHt1JV9watXox1uDkpWTRAY4u6ogmFi",
  "key43": "46UorpQ4qEEmmmQykQZEgqNo4QB1vimXsfWivrpDcjvQ7MBhSQftiKHhAFmRFwU8EvWLiXppGunoqDpRUNHbd7Gd",
  "key44": "59e1hPQZRjMz7KBXM6Xxi5gc1woQYEwuR8W2ofURRBLxjxVrHjyiYdqCYP3fQWrrGJ75UK9DTEHdzCP4W2WZpKDt"
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
