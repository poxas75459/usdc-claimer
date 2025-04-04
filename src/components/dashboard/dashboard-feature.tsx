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
    "pXrPynKeq3gi1im7ZprDkV1VEVJ4no4MJ5bt3yDWgbRZVfZbAujazQjAuSp8kXjx8XHZafjwRymgNVaSQTGGpwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TLjLqSZSWJ2wjapQkuvzE8j1nWoXXrdTZ6dsMoWAuL8PqQwkgHHx5zup4UbWLkvivGFhyi7CD3sRxVv5pYiDtX",
  "key1": "4nfyuFK2xdTwAn1dWnYn6xDUH73nnnXEaeAG5rKyPMpsHED2Q6TcCnSBknMtpd2A1hUAn6v1sx8o3LVPnumtBYC1",
  "key2": "4MzFPJQ95Ej3HLooGfg7HHLet8wAagDSsDjt7g3U7f2RPSPAJzDyBLxJDakJZoeDmKp7GPURa7Bs6LXeqjtxXXtx",
  "key3": "3tdkhikbPfZFojxeVD3DmpHCMzSCZ6cAEA9bhxX2sdbRd1XHddkqnxo3vZrqRcqo4EWiRbBRyLacTbvBm7CrRqzh",
  "key4": "5UTL18Rq8gbcAemJ52LY58LASW4PbvHyPZN5QgBDmQQ8ZLAcksCKghG3PMWxSah1wuUmhte59A176BVsJTa8dsH6",
  "key5": "kMwEMMHFGm1F8hb33hyde4nBwydcSZz1eNL7nw9jApymBcyhMERpoMKzYEpMLbaTqZgnLhvHjM2guSS4pT9yXVT",
  "key6": "2HrApdaWLzZQjSE2pxbezjemXkEci7FdATB7ou5Tbjb3cCbdQx15GXmjSy34TVug75Qtfu5EkRwyJvSyaS1BkAZ9",
  "key7": "Hkt5BvSSwGH9hiRsKVnPVbifdEr5sdhcn9whaFB9Yqr49bQMR8eFMgREgwL1oBC6gnEAzE1W3g1hsssTW1ttSbz",
  "key8": "31ooQTFiYAHziR2m73dYeCCHcMaredN1fmpdEuWy5bFB1jG9BWXNxEf4LQgboJpbuuV5gK61nZzNNY7JPSufQAiJ",
  "key9": "3rEhNEgW3ZGNrn1LwFwMd6yitq1KDVTT23zhyCCJUiZfEAKzxASF4V3yr4Ra5mtje4gQms5aBEaferYVCDYYWNqg",
  "key10": "UiMkXk4ciTYtnRq4KuPnCXkzJig3iRFbGNQcrK7toVPT2gHzN2i7aDWUG9sYkG9vM6BsG8fByErxzcjkYLazUcG",
  "key11": "44FkjSYTwhcnDqWn9zNgqPS3L3R6v5TWuyQemMrCNGtcChpHFoenuhiyGcAd3mfiLpWfvkfF4Geqo9VdVYJwRexG",
  "key12": "4fMWxJresJQNFgffhSga7B78nu7ijVVJeZzXFy6Mj7vq5goP7DacqLGgQBPhfdgmaVxvU4c9FKaroy37Q9ZVjAEH",
  "key13": "23WGDQp6YTz4YmD7VqyY5MJaiT6s6kHLKaMYqiUstJPVro1AEFBLTmJe3AcPYxKiUgWBKPqA2eHxNBY3npx4B56m",
  "key14": "2XbhrPCLfQc7Mtv6N7LQKaWycByYbJac2xWjwSdZrSwM1o4npQDWfQq2AWQLeRaXaCNCcTR9FLQEVGsQMPWEx2HJ",
  "key15": "5ZyVk13iQ3gbsw22Cv44ZMH768ix3BDc1sXHFqyLMpUC97sc43cJ7KL92GWFCbWKpJQfP8g8Ypk8fxybgxcgKHCT",
  "key16": "THUhGpsvBYW8AbbDChSLyKjTte5XMX9HMfxaeU5mvbnsXBULDMumrDrRLVNXatsvdrc2q9XWVhiNEMadAAeX1JL",
  "key17": "pSMSUgkLXEzXcvfTeEmvAWhhyZrfbaqUw6L5dC3HHKa59MjkQkdFaGhLEvg3UtzPr19a9q2m8ABpepa1FrXqRdX",
  "key18": "2vrPU7S4mtWNbVhS5EUBTX8zFy23DtFAfwwKStmzqUjpepnBXVsrxWoJgSv2s7ANk2SCVqNFQsxdD1ozhLUxB1Z6",
  "key19": "42psET4XSS5i1dJ2UBjfjt7N3rBz53KPcZV1kUa8Dwbt2YCKw5LmG93HmvNmNjNqgi2mQKruFdxcizUtk8hioU6j",
  "key20": "2PGBQ5Dt27GDwEhVdNDqaQZH4JKsK8m2V2uZmvqTn78dCbSKR8rYXEcFAbEVijwCrbMip1L3XvTp797ByTRYwNUY",
  "key21": "3extWpkKxJASQCnzFHyjUqZFbJc943AYatUBZpgkqLvuqAc1Xem7uRvyAAcP11gr6uXBSU5PmV2zMe6Xy2tqoBj1",
  "key22": "2gewSjPz9J1Us9EPryZm8SJCpw1eKUxWFXEQ3h3pXJhRMZ6XoXyBdUVG5GDHvkfL2FzrxqufxTdcrnZTyWEdv2yJ",
  "key23": "8Qn29A9CA3EzjeKcjX1NsGqhX3WNuowvatcTDm5CugQT2WnzjUF9GMed8WRt9Q8rMtPcwVbgS8ccQHrwNDQZerJ",
  "key24": "3z4uur4LG3hw8bD9T5JyhAcLWfsbNj8AsthAUJmELm1VighDGBmqrp5pBt4hPNpRLYKDoCiF3i1MgGrBV4bCPcmQ",
  "key25": "2i2ufg8NKxJGEaUCag9hkBcUSeXCkcboHTmksFstsemoYmtaxEf72dppNqn7dUJhLyCTWo3xzZdbjVChmpsMnkMS",
  "key26": "4hobxTbjrehaKbG6937BjBp5gQrUWgajBaUGehHu22k1iK2u8K5aLxaSpXchNDZ2f2qame2eHPybzbuWjUvvTcBC",
  "key27": "2BujPomNBqUFPPViZcyhEf5wCkMWDPivBys2drGSW8yH7xYPDsZhqHE3kwbkH8kDVuiSYAfDV5erK2ZWRsNLyLoq",
  "key28": "2eFD7Czbq4tzvyxifKxMMbeZfc3riXb73gY5cmpQtSbggbvcB9hKzZgct9LJLvHKtnUt4E3GAMuxJ7XwYSc68n4M",
  "key29": "UHviMoLeRqLvvTUYj9yNNoSYmuHcAko59oTTUc14Ub4AavcdSF1kHLLGCSLR5kwCGCmrAgnSZLJbNB5RhtGrAGB",
  "key30": "awvBfp4srDf6XF67euZQJaMTXXzeA716CuQLE1i1yTFu49E3xfmCsbHBER4nccg2smVP9gFFe9nNaXceLgttqS9",
  "key31": "2J2fmTS3ZKjfs48pUivEa8aBPYe18kdYijk6HcLGZaKrKAeZGnHnzTfbnfQK65Xr4j6NJwfbHv9E8FGdE1XY4rQh",
  "key32": "2dmHqChCGaFzreBgJhMM2vKeuqdg72MucxW5pe21bJS5uRa3Mr2inafSbs326hugQYSQcGAknyNDDFTp6iuPJJSY",
  "key33": "3DyLWurVUFCxtiQx2PPKGTrPUhERdQofZnUachvhHKhbcnB3SQiTaATGRmUmPqXniaK4kgRKA7xjrbaBssgeYZaW",
  "key34": "2sthZuDi77515ueXSSycSYcy419LVcfFE4jGg9w1c6tc2df2D9znQeKbrQ6T1JfL2xteCu2GihDNapasGvSXyYZ4",
  "key35": "2uj9E5sgSz3RAFJBkuk6rqCh7kt5RELTBjnXkG4EqstZVN8UL3qjGh8AvttgSto9XBWWQFyzNmcJMZo57st7z83V",
  "key36": "3zH92mCqQWX4p5V6CD7xSMX4VYqonwWEWv3mY3B3bgLeruA3y9oPr1aQ8cuswB3Jc9EB8tK7jQSd3CLVnzEqEM7x",
  "key37": "2t4uFpzWg5PgGQRbsoYLLXukCUritywDAo7dDPRtrLCYqRv9LPe62yy3xux8qnybyf6fRWVCuuirqw7tLR2HJPrN",
  "key38": "5AFjQ1iC9X6vyRT6k7DaKZ4BTuuebEwnh1Pa4hCaYxGzEQwo2TV8EJA2yPjB9XZr7uTFgCFEzKMuaeeG8wGfyVuS",
  "key39": "42YDbGpLzm5Pzhx1ToxvzCXfgJ4sWrt2GYcaBSEQM3ZxE2NqaEQ4qGDpaeNkemQt4B2MiBLouQfDvDyC47baUs28"
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
