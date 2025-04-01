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
    "itL1cHx7Y6TjBfagXsjbepM7yYtzkx3mw9PD43H2XWcqrrWbysWYgyBAGZofFKWK3bSmvwtrX6d87h6LAFTaRcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52U9C7g1pNNUs8gFw7pEmVKkCAmedZAjC8ZLZppN8h1uFvnfRDYVZNjBMdo57q3z7jXsNfxhEPQbQDAVsXV14cm9",
  "key1": "4WdFmG75UqCuCPHtVeYwfgYwq36TxXA3CJTPyaaNYWMsTBZxjft3vaCVA8N4zzWBvUb1sTGTX1CH7iPVHEHAADmV",
  "key2": "241N8hJDwTGBXDTyw3j8mFgL48BJGdAwjfkXPTzVYn83XNYDeDHKkPAdwKbnAUzVUuDVgURvs3xfZVU43YguzKfS",
  "key3": "2w3PLAWEgByN2JYDFJuYmGJ3k2uo9efxu8c98reBzpEKH4xuW8ADRKNAKRv7vis7uu389udc4gzYKNwTREUWi97F",
  "key4": "5w9sx1odsh1s4hJkm7ooyWEUEMyEuSJAxQXvfXF5gLXFhXCViaC1P4EkQUbcmh69b3rBeoz67SyvX29KTT9XgDV7",
  "key5": "3REj1SM9RCT1DWH95Y3Bgc5iBx7Bie9G55bDqye52CwnjwtRVoqKYJQ9ucbvLZ6s9kdWkJrzu7n41aY6XCYFV6f7",
  "key6": "5H94Kr2dWv9mruoADnCWRnELkgWY57Mce5qV5NMVuKhxoUiyAtHC8zRuAd3mwBq18tY4coYKntUXqYWRhQBTrGgY",
  "key7": "4gGz8FjYv5XMQYLoEdAbYcojCatuno79UdSzLyDsPcF8DB61ZmYfVZUaAYjFc8ACPP6H7hyJu3QZQtAg5WesN8dM",
  "key8": "59DiVqr9G9iPGqEBVqngwQx4MPRxSB8Q973LM8DuEy9FRPMqYEDsbev2MPa7nb3Mb5aX8wXeEXJymNPF3w1RNJuZ",
  "key9": "2oUHNoFNzWXqodsMFJm4m8qjuv9pJrMuqQVNsNkx8jef1PbxXdPXknxuUZ7EjPE5R8keczbp2wuRtakpRrQvugk5",
  "key10": "2ffx5oVgwJ4C1nMq6WfLBBhLtBzYnuHfqV8i7UPT8xnKhkh3RXAGt43GsRsBuM2niiPwnxcndcAx5tU5Dperv3iU",
  "key11": "3m2WD5sgUo4oYgkKrgtuLuZW9gAUb7LkNG4XsW9m6TrrS2W6XQsthy94dKg8UWyLqFzo4ZddSQc61sq57d3rJedw",
  "key12": "pt5ykJ4vNxgyBi6xpGKpHyhyoocuYABmU6giFN41mz1cR17x26pQ83q2U1bysiYmDvske55DJc5zr4ZdkRW1SUR",
  "key13": "ihaN63UC9UKwvpgkoU3zUSgz4YKJ7tuQf13SJ2WZVZvTAb5EkRudJMKutxFrqw9JbbPb8uMfxRLZNRrx6nyVBku",
  "key14": "3eY5xxZhpGcLCfEDYBoFN2qH535VP1pi5DVvKszVxjEhqu2weWop9qpEJZKbpj8N3F2BXt1pfXrwTQbrgnVY1jxy",
  "key15": "55XwRvLE3CV2NtSxPACApeMZg9atNY4wpToTZVaPb2NmSddocfjZeE2v3k381PVQkN1ThFJorj3ZHcUXh8UTpsUr",
  "key16": "2Hh3ZP3DchdkNA4hARfLPmywondAFVbeXVYdaDYeCDdTUNT9Mf1FRt6Pik6sp6fHGXDQUWxS7ybtoVx75c5p9xw9",
  "key17": "s23oBuxeCDTf3zs4VFd7mQd7cStfpR4WETEdxunWH6wiBWwXUvP4FomC4pyjtPhofzv4rf5XmjBrmXRnHSXmN4j",
  "key18": "yNfzU7zM6JhE6z11NZRmjXYAz7t5oRebonj5BosUkGCL7rDxaxzouLiwiJJ7rhUHtmV8p73q1mw3ZAtdxkjMGqZ",
  "key19": "3Jm8hjZu4FbVw5VPb37EhnEnDt25pyC7f4ho2rj64Dey33voWJ1Adk1Z6f8cFVxrnhLQHFaVEFAaNZPC4mAr34NZ",
  "key20": "4Vak2oAzpscvoTqWESzm6FXbXtEjMneT1fEsv7y8m9m7m3hwJKQrhEvq3Gmv3BmjZrW1knjAy22mt4aV3c1qi98Q",
  "key21": "544eLUmZAYMoreD8jsNsrny5TUakzRQHTRxjKoRRyDVDDprhXm117pCPsviYwXTmHCYDLsu7PZSrGDQYuaVU6wCR",
  "key22": "iTyPSsAcDCABGZvqMBiWwRfKPE1MsS1jh1rk5oz9NapkG4ne23vhH7zpqKQYcQmjjatKWCFqDoNGqVAAvvRByiq",
  "key23": "4b4n4BWzhQDpyuiwAKhfv1aokZd5DvA25rALCCEUPcnEeQjZZ2MhsgftKRazPNRxSBmJtgA4XA3gcAo7EeKbSBQY",
  "key24": "4aJ52EDe65JQjrDH6YFA8GY8EsPtSXmejffMfWN59iQ5598qE8VpwZwvFEbEEE1t5gkst7V4GnjbaVT6VKL2w63w",
  "key25": "2XnNBsyzMC8K8VmaJPHbVW1voVXMzoSF9Cz5HSebcxnYZBJfthAr962NV3aFtYh8q7jtxzjAuRSG6HMBc26HN741",
  "key26": "59752tGwvGCqGTonWLqcqntuRmHCSWoYYqwMaWBByxm2K74ZCtJyGp347HfrAqnGAC1dFUG1XZPbCZYM9zc8LL7T",
  "key27": "2PK18MvbwEVEwWVvBzSnh1SLYS5E9j7D3aKoRG9DcG3F7aA85DPXnFoPRwbFH7atwQYyrMxSu6ACuxA6gYuAwUMi",
  "key28": "4B8AXteMSpZsi5AvdH7aGssKbBgmojNtT3smHf8cxCcUgtP8JMJRVzzoJ7kR6q9tugC7UPusfgghDaHmP2YBNHQX",
  "key29": "5BzVZrJUtWJhs5kpPq8bCK4NWvKhPtRG7HobPGFCSxipMJFtG6qRyWFATXGAL6f9whMTxE4jTKgiEkZr1u5beZoq",
  "key30": "67dEtvbcxPtCJNAhnBA4AKyL1qb9fufqVY3P5LEyZQtQ5WtpDNX28jEfRwjtFymkEgnCsHaCWF79e6FCoS9mzRty",
  "key31": "2vdWnZunbk5gFZVcnE5U3jXGM2S68sZU7zsqzqTQrP7du8sTExWCLgKnbGe5D5dX4jFSL4QhCbwjqy2UhdKS4jTD",
  "key32": "55Kt28HvkFNJYHL7UULSHhhr1DG3fdBnFSBcFT5oCemACkLAshx8aWDMXPjkckddATd9cCnhG2X2d65vufBE1Lnk",
  "key33": "274QgFnzLJGLoSDe8fx7bfjKPYyLwuuLSF71BFKjjvMkPVwFAo9cEdhp7ApJ7pqkaMkPnRb18NJy5ecdp9Pas3KU",
  "key34": "ZMkfoFjZHsmxfCbZR61Yno3yj9nzdNE33onsieY9zXh8YKCihV4Xjd4HTYio54ftNKz1fha4otdRprMwivCiNBP",
  "key35": "2CE1ZbuhBWjtzKbtuY54xwCZbrR4GS9nsnVcXgZT8mS3pEZq8C86LrRpbLQj6Twajvb3r2KEZzwfjzwFx8F1zd6w",
  "key36": "4JkJ1RkPRwaTEsZ5i7cN4tJE2JiNUAdzdjjNPdffoRrhJLiX7dbmPQnvxNaDpJZ2aaXfBfq2HzDfAgBjLhEUdYDW",
  "key37": "53zewaoqv36dgApp7g8uuXXoS2tza9t9aE6cw8C1oURpf5zcA9aHoVaUgSuLdxGMuv932Ray4SZUaV9wmPZsx5CY",
  "key38": "55RwmjHtDzodMjXPXKZVigan7tn26iwEieRiQps68orFkLHhg7ttvb4oRSePDFuvTJ8Dn9xndzWufihFahkkMCUb",
  "key39": "5SdFT5kR6Ffyi4fdeAhDkRq6L1yH2x5k5tehk142kR88xzxfbecZLA1HBU882Rhu9u5YuYTrnfxSQ5hvddic6fuC",
  "key40": "4FQg6f5brUFVEpg4LtboUVNgn8XLBHfdptqNJXvteaH79rsoRRhRRKVEX2ExcFoUy4LYZgr2ZSQj2RFhRugx8myp",
  "key41": "55VdRw4nvmaqyYq2GYEaoxd9VVqH5fEBcZ6aU4junk4Abw87Qrs9QYEZ11Aq2ZuStPqDDaTXFTHqtJJzSmtGBTf6",
  "key42": "27B7Lj4GRLxy2driyKSWx7GnMiHWyk43gEfNfu6oqoaiK9Cg2CGainRXkQoFWEp7L9j87isysMd8Gzqhage2WN8d",
  "key43": "2hZj13wc5QxKb2CFfe4h2pv8gzbAQdiwF1i7oU6vL3YYgU5KBSLjVcxdBr9WzNrF95LbMPj6ajybGasKVr9FqagB",
  "key44": "2QvyogjPK5NqEnfVrzUUiTrHKTcfVyG46Md3azAm6AfYmVzk1UpvamHWPQupmbpHZqnC1xA1ZryZnFYB2L8gD7Gj"
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
