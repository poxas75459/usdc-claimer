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
    "2u6tSp2NqudS7fnrQG6ZCAipqSAdGVz7sbo3NPav1rJGJx5GhT9X3RSfoHpZzmxhAMa8grS91b1TKCYQfNg6crTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nqcjv2A2rHLnajoowwRMrfxzThZLFn7yWaZ76yBKCGghxtegeJFXNtXcmMbQxkpzdr3GywRaXJGgdXsKHBgLWZH",
  "key1": "5oKXUsXZRpCd7e6k6QKWVhdGYnnKZZ4xRFViR5e4Noc6mEotGrnUYuuGBuafScWVGtrNX7Kg44SxehAUuGpRH2M6",
  "key2": "2dYjpNzRaXB9mGQSUBoC8zbTtyC4p1nTcW6daTcbJ1uzvKziaMgbrXDabCnRLwMsbatLQKduNV6YfvKLBSLPP86x",
  "key3": "dRbDKRkNawajrRrwHHNnqzKnfgiEL1ke5syNMA8rZdeqriJijEHrBuvGvrYyghGVMiixeRtAT3bsfJRzxUKrzMw",
  "key4": "2uV9nPpF9uiCzmksATbqnAatCB36HCjfnQ3RLJv1K5pm4eD8s8WBpMmJgBSo3CWegpFsEWpGD7X4c12eT13T6Nvr",
  "key5": "EnGV7FSceGkCFSTXwDi6V9Nt83nZ6rgn2gfhrME2a4ppouwx3fmmgg1e39zLhG76ctX4Kt6Q4QVHLtPXWy6QU2i",
  "key6": "3Vz9VtaxKubAY1vVmpXm1C9D82DSLLwTzTVrwdxNPx4Szsjeve5Ppqghx3Lzac8wjhL5U5fbxF3bwBz3QB8A4e5k",
  "key7": "24ZaXRFSpTb1tUzGaiLfuFg2mJ1BNYEAwxQzVcNgygWqqFDxSE32XTP4r8vvuyVMANwd1y9JMrKwjV7mAGY9Fhq4",
  "key8": "4TQbNZBRcxWEmzcVFXxwcddxJHUPw1UHPbWE9JuBuQ6qxharxepZRwpyNGqYxpHbCENpuBHUtvqu54vbL2bUkb9M",
  "key9": "62ZXYxjv8d7S7cQSyoYu7PeAdNnDu5XXio5wruG7c8T6jXPyxE1yp79YdAfCcoTsSAmPvZqw6aijWqE5vsGmEiG2",
  "key10": "3Ks6meeGoiSwtFzgKKyjNkV7ZGhEeSZzhxUv9HDT1KmLo3cPF82iHnpPhw1qnzLtRKGn77W2HdFQgHqzGkfDnUwx",
  "key11": "43dvXujPUCjs1taiRCNapTPkBc2FEjt5UaNhVEH82Si6YR7H6h6WCVzDhuima3ZCjTmt9p11Wr3NgE3kXWs3t1PQ",
  "key12": "5n4YCwADW2rgRhbKJpWuqLGJMpMwRfM5oLZSeRh9ghKSkXipCEmfPaZwVK2Dy5cxVZf11VxdGNLBBnHRyjUBybEJ",
  "key13": "4WQaSeFmPaixQBGRQijkuVr5rRkSZZFPbTZpBybPTfT3VQqEjkNLBBtpG8W3rYQzv8vbacEY1aYuVPKEna58jjyd",
  "key14": "AAmcEUe2y4gowtZ216mYRZPc8H3umqAyTydCW5ZVSvxXcCiBzaqQhvrCuuAEhnH6ZKmcAgtKrBdxQFGiePVX7Dz",
  "key15": "35DbwUo5zANPQ2KYBMCA5P8j3gNfPtyFKvyFxi4k9wzY1khjAVnZiTfqpLc8u2NCfMiLGWu8divcd4wC2utNvK8Y",
  "key16": "CFg4fPokK9JmmVntP9CA4yGddwU9DuHHxq9hQ7pDZuLjSnFAyCvzkxKFgCnsRSQ59Z7qgKWnuwJfSD6Jy37CqBf",
  "key17": "3RKRhd2y1a6YSSZ6hzX1nKmTmfDUc8ymLwiFQf867Qp2mLi9gok7DzrtMqVV8etGohd7gEDg9bjU3YSZVrzQSJQh",
  "key18": "4CBe2sxJtBZRr4FRD91cmxm4cs82WYxYoCek3Km1Lwb3RhXUwPnsWwznVosjY2H2K7KXPgmUX9ubvFhAMQEtf3rB",
  "key19": "5QyWWrdTj3cwdw9syHj9KfqnQXhF8jRfNavN9j5p6PbHYU1UVvenmjw8nZCp9gvo3QCVRYVkd86cVaxgLHwCCjhA",
  "key20": "5RD65esXHQBaV1ssTthzTF4ASkZotWa9FPoQsbEp4trAEatkqP8bvAEDZ5UdrevXaqaE2gsTZBjcrEaGzQ8yAxHd",
  "key21": "5b8zWeRhgbXXwq4aaHccPy3MVw7m1mLrd1ZgDyaF9NJcc9ugLJXVx5eEZbqEjcYwnLz4hbF7YzvyQLnS7zjHqY9Q",
  "key22": "5FMQNZZ2AJYa5kqizbsTLrtSHY2mBEwR6sVnhZ6T2Rj6ZDbRLCTtJLQFaPHxqcFNnjyJU2Yy2dGa1VCZGpTYdHh5",
  "key23": "4pjXyN3D3YSvxbtEjVdqSwLNa7NDTZumDfg2WCwTifrqRLiMQ5SENx7fWP7Uis2ZBupKopr39zSvLi4edRoi9Sm3",
  "key24": "2AQRq3rZaWcEhjgrvF9mHo1xJVNLvBxgUHn15ShbATPZ9NwgcF9Yf547kiprwKKL615Kfqk7p1Qsa2J4UkuYvsYJ",
  "key25": "4xSBZwUdR8o9iDJzkwrx8UdPAJHSorHBoiSdqrk46d29daiwnfgFotjE8YmxGjNTEXLVWwFgXfwj4ceDFmGbsZwr",
  "key26": "3sTuEBHrDFioX9jU2mGeR2kfDPtYsJmL4HJB6qbx2DnULPhJp9TB1dnkKK1GAGLA877Sdi8B3c4cMdQ1mPgvEyQ3",
  "key27": "BXMoUyzneBqzNYW9zqN9Mc2ef6rLPqFtSV7MpPRJ5dEk5MpYtbpdSXjm4fBRTcot7bF4dRivAEzWNjGyoiidHKw",
  "key28": "4pvXm4iEU4h96fwLiox4ACe1dwf59ubE7aupDc5bp1hwX6pvw11Tr8FJGYBgBzgkGBaDXFj35gTPpYpjjgcuimB6",
  "key29": "5M6uSp3s15T9JFBuCBHAYVFzEyMxWW7ReeA7KBAUEGBekUJaEqQWhYQTje4MsNDUWut3KQmr9KaNmGtfZXhWjT6G",
  "key30": "2DLUWnJ1kGP7H99LeHCXtYwp3QsBxn7JLee32XU6h5GsHKNgTbncDvvu6BxvfMqDhCmQU6cW2GkXb4FWD1c6zyZC",
  "key31": "5CqafbGfg2CpqhC1buHbMEVzm3peMTKhmCEh1RAHK8r4hux6joGaMbw3qKTZ2uYM1XFcaDfhgEu6EpHgKsk7Vf8L",
  "key32": "5z377jciicRPQR3zWyCCqdKgXFdX8sAnXegc5UnHUUHE8uwnnr2MYfepgn7oF1bpbTtjuECcacTCzayVyiM9ufpS",
  "key33": "2dHVU8iDzYL2qUXzhu24sfHMdW5bNj37iQZBYnX1cji4QT2ffMzgQsvrXF6qwm9Rf41pK59ngTVGTyWiu2BCdRjo",
  "key34": "dtoN82FcjpexZ2FsYBxZNWsXdrLHbYpYB9MxZ17bZgeFaePFWmaBk2Y3Qj2g5WAzoyWoKuAb4MpXoHMacmF8FYy",
  "key35": "3tTX7C93Z2VPQy5hT1LGJosAAwnyFPnFmCHJNrFgjy7N4j13A9iLivN8Tg7pmJ1AeuM8nNCYM7PWur8hs1t2LyRc",
  "key36": "sfQpfiBBwErpxAoMoNgB9Tim4fZC7J1nSu3UZVR1eZ4HwTcxpjyRXnxQQxEETZrCcYBeJG7K8PH5yy97zbhjCHD",
  "key37": "2vCZ5UdVdCxDn3FWHCiHxRHabgsyqqb6DVYBKu4FKjD3ZfXBZFYWjYP7hC7QN3QD67ptRRcznvWF5QcVxuPEtxHC",
  "key38": "4qZTKpphXiRSYYoCgcKevi9GD11z28QxsPVNbWz6mgFk9wSRH1RTLYokGpFx1EyZcExv3atrrNTgLQzErXzz4KjA",
  "key39": "5hqx6RPCtX8DQ5y81YjAS7NEd5gsPcikyHTrHggv6brh9RaqRaRz2uv6W18XaUwPT5qeEodH1efbSDaiBR4RaH4j",
  "key40": "5F81r1ggJJDcobB7HxcdJonUZmQBQmzfw1ANirWCc5oCK5GUbfRqSz3xxHNWYhcoDRj8M2BsDXdNAQfM2k5bRa5E",
  "key41": "3ssS8FVZHCtpLSv3W7dSYdru934pn3HdZ9mtrkAmVz9HTyPsXRV2rL77rZwfDjNw1CdcoxGdkTn7pQ37wmbfBkrF",
  "key42": "2GAD5PQxbRrfH49cDKyoKdueKkHipF9jwyArpucCmqnGPjiYPyi7wPh1CVZbvH5qt3eHy6ysh48i1pL5hxo7PSaC"
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
