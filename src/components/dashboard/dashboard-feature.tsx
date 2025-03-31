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
    "LTmnoXZ26jPNHvfNomNCwEEbsAJFst5TMT48qMv3Fj76bE99PuMZuzRFe75QsP9ug2HnW8Z2oQCVhrQtauL84WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMFJdiGGt1owF7EpEnKzvbqKg5jHetGhXbyCJX2qgxsm8TDweVk73z46aD25Zih4QvNbwbbVAagMTTHhbz9gV6c",
  "key1": "Y3nmyqyWWrhY9VHwvGdb96Qfq6gzYzeWBtgqy6fduXse8NsqrZhUPunJFRN7aPYgffKVQTkdPKVTVwVeFztCpsR",
  "key2": "38zkHESJKhLG8bmvrUiWpXm2sGvszkq5PxeqehyeDUPeC56a4QQhvtuiWFMxmARGUsXxtMY8ZtUpZAVPZgK8mtfM",
  "key3": "3xQE77nHabCZWWP9TVcK9pUV2wceFzhzCw2KNXn2Yhku75HTgyGtDaBNaGXnk4ByFr5bY1mNKvjdTQhPme6y9oVQ",
  "key4": "2K7iKUS6mSsogWqJFtLZm6ppLYqbu3vLdhvk2HDuDCtPUKmQ3oFhWSxEGPXA6iYWX9eEaxt8M3LYQ3oz6s4tJ6Lg",
  "key5": "5hutEYfpzQHUoe53j4ZW9W9pPjKcMSGzYebNX25ai4wME6CEesoEkLTKbr29PUrnKyQ2QW63ByJti6qb5AT8KTjR",
  "key6": "33uGL7HjyiRk6wP58ty2i4XbsfErn1KE3MaBbXmM2tVLWpKzz8MGLsQb3HALsQEA1pwyEgh1i2RksYAA6DkiCCt2",
  "key7": "3RoGAYXBgnbJ7gu5A6NJoyF148qcMBvwmsv9tjHrVZqxmEUXQhBbJxwyEFocrWWQ7ibZd4vZqcdzzzVjeQB8ej5x",
  "key8": "4bNL6eJCrRPjTWpE5ocnuPRVNc6UxLyzrsy5KWPu7kDzq6buJDcwnd2ydiSJxLga98J3QiFq85fE65jiU1hGjrv3",
  "key9": "VNFWCjeAhd5hjtqFJxXChH2iHJRDUSbKn5p9bdFpBKzeEvQRTJ8yavF6oLf93oSb4fWhWmQVLdgKdXwztM7gLEK",
  "key10": "45bmYX5y72wjx9CFkET3ZwPFFA5ZHpQkVjqRFnaWjA5wmtg8ueJs7qFabvZYzWngUN6fq2BUoLPcJABFovEwYogH",
  "key11": "3SnEqdFraHzb1mcGL5wBa4S8KeMWZRmbe7DBGfvYnYwww2CbwiNi7ag5uLaiX9peQjx4ktCTHm5sxeggL8G5wbGc",
  "key12": "4DQoXv894vBeSLuYU2DjvAptzKsyTrbSe8RPn4wEzwvWAYoocebqHNSRBqpUgtv4fD1MRCwX8YpaJjC45Q8AhZD2",
  "key13": "2AMKhujrBP1tw4gVHh3u43LbVYdoqsgZ6Svu55szwpjfCfprJJGTL8VCrqJoatrG2Cr4P2kQjK6rSi89aPW51UHQ",
  "key14": "3MKAf8Ko7f1oH2vdH9seM51ziAoqMjWfx53zsBTbnRrVP5Y6DPGV6FCGxo3gmJWZPw5oLyb9TrTp8Nz9dxi16mh5",
  "key15": "4Bcxh6YaQdu2nPqNqC9riwmky3hv538u6vCRaUbUh8cCa6n9WWs5bDfiY8UGoKQR4CZEn3jBn9E6WJXFE6fBZRb",
  "key16": "4nMjiJt7Gr4JaZBuHwvRMF78xWk4MDbc1ddv7pURQmeGhwNS6osaA6KpUP34UeDFX4og4iTw6CvTCbpkVgr1xEmR",
  "key17": "2tjZ9t5yJZaM4NjdiK95q6YhfB7BGHi3Wre1cQxyp7ZX5ukB1VAN2bG3b5CmzqEkGeGexFW8Pd7HTtLrKUAktBmJ",
  "key18": "UzEkV54AVsLCEMdqHYFpJHkTucDk6abWU2YmoHfnHwdhJ58oKWUeYZoaDRtnVYDkgKGmLEajoqy3YnNdh9d51PL",
  "key19": "5hL7UDS43kYc4g38uEN7wuUyvzwPvnpc9j8FkEwtjBHZ4VencgnBox46QY6ntv9Kv9wcXAMgZjQ6oREsBuuZu5tj",
  "key20": "2M2vBCZCedU4m7rN2SmDJUvMZpvo88VoXKVRd6mvxHgUQVbv4zbXvVjQDxiUBsBpK7PTP6j6etxa1WgEByJSo69s",
  "key21": "4pKDXq9hbvWVA9UN4zCg3k6wB9Da5DYEZBn5CpbgQ99L1WUM7mArtgbALmDPV82UktQ8T2ryBiBdSqDKyXZTK3Bs",
  "key22": "4GSpYsABW76QRzm674qur1uirWRucqS9S2BZ5JM64mhvoYdhy9SvCWKni9KrVXkgSs7y8BgEAFSiwpTMkfSqXYFw",
  "key23": "3gAW4pxzFfaP7oJz62saQUfBhgVn5qYQPHYMRj3WVTbgWGKXrEUhuD66cZkvStApPMeCtx245iokGXP9YN2x7Ef8",
  "key24": "3hkiw7aTrR7sc6nGk9n3TWSLzUYMgTDhHEupbzdQoxs7eYhU4YftUtpHt9HieMuygj92PSuxyzRAZTZmJMvYUT4q",
  "key25": "2tLacLVqCP7jutJVprgHeefqR6Pg6QxoxzBQXyPCguzyNhBToceRR8WLYWKfX2KvL4SkA5KtkUkWECzyhgiKQ4iZ",
  "key26": "36Exw56QHWVPn38fGxUtSG6fMsPGRPX2qbz3LDsKg9sQVkH3sWrbKZjUecPAAiRA3LpieCTyTTV4LHNySXmtc5iF",
  "key27": "4fWTq9mHFUj3o3oeSuMXtgmgqvp2esWLrceaGjVvRJzD21zs8WMszDSTsKKxCRF3FbWkLpoL5aDi9Nf12zYKGjrH",
  "key28": "2FFfbDKSsdaZZprh3eniXGuQggkGYavt3arE2Qwheqy5tUfz2V3U3de2jHPGFRFtn5ATmEJCnRdX2ozmEDXvzKVV",
  "key29": "4o5YJr9qj28i8zWYWkYTd1Ca5Zy5eyDBUpoKYNyR54kHS9oSzMdnjckXrHZYtGC7dQfnkrkqYDDmemBYfCEuZfTZ",
  "key30": "3uTWVcBR4Uk935HbcXrCJck2osC1ZmD9G7Z51amPJUmXwwFSTv2dCypEPBMndkSWuzvgUJZpgLKugiZ1qzxebV7c",
  "key31": "FLT5wvTnf5GC5nRVRghWYhB49XdXsZfjJEtRbVcwyJfrkFVaaYTjZt38UTtcc3KxZYUtxSFHb1srLHCnNVqMett",
  "key32": "2G8MnAhMgNjex98zquxoYvpcz71tj8aFEWoykNAtdgrxiARRmrDE5aUqH1EJ8sWNg4yXcRxRtfPMWPSznVrv3xTz",
  "key33": "4amLkGtYtie73KoGEamsgyee7AZE9YDwu28m3JEaQyHgxqSfiTJKC6Yy4kC5wwCCZrQqLGm3zA6RnDJT62A5t49m",
  "key34": "3dys1oj2obe5jXkTy1X5EfJVc8C1Nt7ktnah7E58Y8cMrf19q3hMr2NWahu2oYzu7M8Ad3kYSHHHPYES3ZbbfkjN",
  "key35": "2Dx3HCdrEav9oJtYKftcoGxYdfPRU2Cj7VZ8CBEGKSyjysR2BefNswKchB2h3ojRCfsp9TRBqpmBXzqRkX2whvhq",
  "key36": "5KMTBjtzGRJcDFWFR9j694TqsVZMb9DgFpeUCegQc3sUibpvVRFVW7SXw44Zcx7keqM5NybTXURGtU3vLndP1NHZ",
  "key37": "3U3gS2QFn6xsWMC5ALdJ1VCdyWAncJWf3hwtE9VKzSWrWK2sPAKPp7chVgCKxmqWjcJiFY5BurQYZsb4iaZYZrfw",
  "key38": "4cyYqxRuCiSrh6dKwGd9JSR2fTrRguDjvL1oPnwJidZC9TXr6qDVAHR4HtUPa6HajgJKTtQqct4X1vqCd5DczqCh",
  "key39": "3L6ZGfmvdxpeXXgu598yGvtNqYo5DubfrgGBa5FzGKfGAFdFUPnuYh23VGJpBrdwXfgvkkFyZ6pmJoA3D6Sstphg",
  "key40": "259oPHz65xdpWnH3WJfFqNivF9U3GMQFnEvSC9zm36FuUSYpSaiAcW3G946r3hnXsyJL2kWDMDLbKfi5nq9P7t9k",
  "key41": "66AhHyAhg58qxzgkoQVeqB3mqAjCMQo85KXTYdxpA6JV1FNxP3zJYbP4iDmYEYeArnTcwQV7X9qt4buKzZM7ZFP5",
  "key42": "4nRj95iJEJtpDu1xL4Wzexu7T7ni5cogaYaAcuky2m32WadbbLyDAQpFuEJNgBddfcdjpEdYtKbyYKmGmFG7hoZ",
  "key43": "3XcGykH3ZFF89Cu8fiJXuB7u89JgSRLmCQ7HJFrj7gpNdyUWkbEQdXpp8YGeBFGz8yFNttoZTysa4S4L9cjvfDo",
  "key44": "3x2N6jktXdskQePbgujEuo265u6Rn2EYu9BmRoTGpcjT8P5ACj7x1ZP1VnGnVz3DADPuotjKv9PwB2CC4aBq8t9F",
  "key45": "3y8yUpksyZqZSewjmMBi4d3H3hT2KHDfBREXJQKEG5qydWCNgUDQuDrodF36LkwBhgsoKfxZH6h45NPxBPmgJPw5",
  "key46": "5NZLnfnMa6juSPRiVsHVmHGCqhPcMNJTmKkP97qZgB88DV3wqGBo7dpoNUbvHEgc4eLtrATbA2Dgim8orvMqbkZu",
  "key47": "5U5NR7NUdJSMCaLGYpuFKLsmy1HNUTnjJrDBXqxa4Hy9NEzExiyjEqJCFPV9Kbdyifb4mQzPAH7CVB15HxQWqgZc"
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
