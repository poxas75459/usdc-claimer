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
    "3PfevRoZdJoAC8eS1CTmftjMWhVJeBEMHo8o7B2RJLZMFJSxooN8qC2bCsDmiS5ZfHa7XhrpnVzPSvbJ4XCCA5ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ygWRbWXDoHucdpVeRPvPw7hUWT1BxDLRofarVJXyP8qSqirtwKLM1rS2dpE1UoekhqwtLyfSXuHtzfBuwvbYD8u",
  "key1": "3SkLAWBWNVbrEDRBDjgDPM9m7kkWryzeQhESZNsPg84ZwHBs4Li4rxivDrtgXp3GuwkTptyegpJzooQWJ3qkpin9",
  "key2": "c2HuEfGTV2QNkevHMjCNj1Nzar5VQwbSqx3q8passmFTn7KHAztRJMNYCFWjrif6XQppU3ryDkNQruGU59pBNYW",
  "key3": "4TPoTvVXMiYNRJK2whbqjNKZkHdkvWbfWMyiqXwPJL97v5HJHU4UWnY4irhHkv8FLjzoqhdpByHN42CpN9gUMaho",
  "key4": "3K3hy9PDXFZW2avyVjHVhTc7czXoAsahaptRUPWJGD57YeMudBFgk8SAxtwDVoebUdpdZTwzhFmWL88QeDBPMPWU",
  "key5": "4NcUDtCf8AZ8ApqPhJJzKqqNgRhoDEXDc1D675xJXgtBn9CwyDaJUD4UQSEMNADUsFfG6M7nER6fzrSXPdUAnqfu",
  "key6": "2n8Cjhmbhkjnarzs2atQzax4eBM2nSbRzgG2yTDSLspPsiy2TNuoiabLDbcq6EfHm8zc2ZQrZ8t2BcDC2tduV19t",
  "key7": "5yYGss4PfKvDLRPCcnqfo1ue3me8tdMRM21LbUnnW7Z319PQJTPXB9guUPqGDmAGTpAWyaWkYzfyhAC7o5yECEbT",
  "key8": "5gxZGUwEtGCikjdcErung8JvWnRF4HP6KrxhSvf1bV8ryQzXcKB7guuju2xtG3DEnDphYtH9mjhbUyyoDoF5pcjj",
  "key9": "4h5kM9wgrt1n7M38PLzt2yWPeiussfrV82y64R5pA1YSY1gkNHKjJ9LWZdcmYeGhjcoHRKsiEU9cW2DbLUsMEKG9",
  "key10": "ojhQBh4eyabVqyCKa5JtX2FVNX6L4fr8CvXLemukTvnvYVD1jnT1PCPJCnuGEFUUEyymCqgZ6ezdkJA8mSwj8pj",
  "key11": "HPoWuDY8wwyNSMXFJkKRzz7dFW7Ks1JjZibELvLebzqUdBqxovwpNDk63vigcNKKnvQ7ucD1N5y4JagFtRa9bFn",
  "key12": "3Z2J6UY3hcQY4Wj47tsdggT7YxAKUuLe8FMj73kNNDKq5Wa1aXs7SkQDubo7FDkaTwFa33ysreNViJ18hbqSTTkQ",
  "key13": "4PWGzcxCVVtXxR6xfXKm2PPzJbzzmca3fBrezoRcGcpQYM5QaAyN8dg3EVT7pZkqJGm4gqXn4AuBaRLXhafqVaQq",
  "key14": "3RTetjyvu5Q3eeyqh9sjKy3DewrMzaVzQYGqTwSjVauu7YHNHvkJJEknPQ9qCvNtcd8KV7DLTS31EdqRwATzmzZr",
  "key15": "33FKcerdwoSx55cec3sTurAp7GaEPjxjs6RVUQFST13V2hMQ4FszhUTno58irYNVAiJm32aDQjfNcVAcVm33Qfbm",
  "key16": "2p5dCmeT867sNuGfTHidVRdXLCipFX6ChVJUb7Eth6rjyad1FAmJTAmV5tiLqWDkLP7cE9Vj7xY7bHui8FJmkjAQ",
  "key17": "2Hdt3hqw6Gk8EqGXr83x74U32RkZAS4FjnnNmdwahNQEgfS6p8DkoDerjsf1WD8mk95LKQjAYx92mGphjVHbtUFo",
  "key18": "a4RyMfQa9bkhFY1eMkURVy8fLkHWDuufZN1f3ZFE3S6rWGwqLhsnHc7ghpcnQTk9GyPjbESPdz2oLCAV8WTYqeK",
  "key19": "YHCyyFw7nrn9aBYUmGdn3mugGyLNGfhvNrZ69DtSZfJykUqB2jMbT5tCnXnXLP3cYABzDrgRaySmniHF7LCAeSi",
  "key20": "2VCu2MHCN4AFsuXJyUXGwC8Wpv877ky5yuDrySaz9HtVy3cgtqG6hYCpwrHKSpD7M5XkufX9jZf7TibcYTccQEzk",
  "key21": "3xJBtm9YmEZz4uWZ7nyqQfYhvDSr6GNm3eQDYjayBtVcawA8LfqcYGRshSvZzSj21BG268BuQaRQRMF5JDJkQ77a",
  "key22": "2fjDKTmoBdxCK9kQ8MBZYgsxRmS3RCpkncXcUSDdWCzXeWHEeTHyYFjnk3xkogZu9si7xPhH6zsEMfjXtp61Lrw3",
  "key23": "2fWQJWyeo37PATP1NKUyepVacZXoWGj9qUFhcKFn4rpccUhkknCjsBkpwzmjQbidTUcD3ESQdLW4peyhDEYX8dh3",
  "key24": "2jhJ6FDqmwFKZ9speaK6mBPc63L23XHRfG3cEcyj3A2f4BTRthgJ65ERdB4VCbeFHRfZn5JmKSv7sM1n2HjLn1eZ",
  "key25": "5wG3wqFM4ka3PbGQpa6J53ZopYjNzcPLH4WB3Shb8FaqHnRHJScPeNdL5aGNnQueydbEm9skDAAMoLPuHaHtvWSG",
  "key26": "fRepZKMMQHKGY12QkJfZs3Dr9YNxFgZhvRdmDMLwpeJ1Kw8eo3LztM1DdxDfHKH4CR75M8Ju6wyVsQykPCMZMz7",
  "key27": "ksbtdhQyfTL2ew5a5ZnxjrrQ7oDTF7v9aqu9HGsuZWCv8ybx3sSdr18h8gRZ2tej7r689oRZK4Qyge9SnDBPkvv",
  "key28": "4mLaRZKfQQYdatmDS8gDc3RqbPJ7yuemLZsHETHgT6D1kCtzoKANPAitrTWB8AB4jgrZhqvqDmDVYaGq7pNYiPQs",
  "key29": "2FtSotsgnVDhS8KZi4zcFcGCnUDEaRaHp4PPb638ZmhrDD6vrjKTYeyJzpauscaBdQD5U4zLV4orfSctUZNDPQcy",
  "key30": "4oFUpz27pJxesSeJdeSk6c8t7Hj2jbeYYzgcMtt5W9JRNg6febh3zSGdGqgYG4hwnX1WbidssrzzMCcBR4mD33vb",
  "key31": "2mSR7TRZR4aq6EyWZZERUGauKbjENsvSxmxqY2dtNVNxcwh8Ar49SGjTcWc1AXtrjt3BbRUpGjsQ7ptWsrkb7SnR",
  "key32": "5pdJEFBdrqK3pmxX7594MqiC7giLpbg6yg1K4TuupR6KnnvMzkVzRQPpx65nKhBZ4rrUTEQeysBqGszYUf4Pg19X",
  "key33": "FMDLCbScSqX1HcKuhYPnxcyzo6PuidjSvmdKJ131RDguaZuATKVSLxkYQ9KcFJYAw4yFciTH3kh6ijVgYG4PaVn",
  "key34": "gqEna7wyAjxPYRxuttsMbNBaLiu7ZSGF5phPAXBF9BZrHhcpRCBDraiTgSPu72t9Y7dz9Vjy5hcmsKozDx8VAWV",
  "key35": "67bznqST4LdG95hPhTj8Evs3uTFeMJp7o5khjhcyaEJPtdT2sR4XcaoBB3NMF27JjGghjiXRGo41PZTmXPWGS8X1",
  "key36": "aPXPZihiyGiowoKv8sv6UA4yqDRKigVunkBmdXomNVM3RD1rdM26uPPic6Nk6RfomRRGAifJnsgaKGX5e9RiqPo",
  "key37": "2eq1kgFPv3qpXuJ4jruuwjPhmT3b16v6F7fkk79HBwycEGy8YzMFiyzDcmA2H6btSQhMcLLGFUsAjRMwmCveR8bs",
  "key38": "5Ds1cPowBJRQRFn2rHKQxEGHtar1yK7yFMCHgY2mvQgnUW9gsBsBm1qJyRKHMDwM2oY1pEXyabkMXFHNCg6NMx9S",
  "key39": "tUMv5VpSPUDsMvuuXXA1iPZmhevaTNeFZJumKdQzC9C4ryi1amQD9DQAFYSKP2zNgg4MhP1v2zDxUnRuvYrFa6m",
  "key40": "33aRLxbGRs9E1yG49E2ZdwhuCWgVzHoSKbTGnVT4fhFVYoHsJpXA9yEoLkH7KY14bXrSz7239RGXQgPGMQ4iFmmv",
  "key41": "Kt3nEfxrssyudQCjaeVYwPy3F1BDhd2UCs31Q95sNC34eyjkZos3rEnNNrDJBgwcoeegdg2h9K2cV9QkeQczbkD",
  "key42": "58df8wrcjK5RDjQtmVN8tmeyi6xRVMb2WT2uoA6Xbs4XBQgoGcQQRQ89dxSgdxcjSW8RNYoXtWPPn5QoXcpZ1tCD",
  "key43": "4FdrtBh12ThiXRY3hPsmqZMJaMqkU7fPzDQbPaM6aQ43Tw9ktAw85TirsFpxqdzE68K6ZMe1xsHv6MbM5Hz7j6pf",
  "key44": "4w29RpSeA5gGC4sVx2BFWi6BWTbFCSksyKug2zHSBh5BNAgwacYomKAkdQiTCv9K5rBQCLom3pkgLibgnQ7abnVK"
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
