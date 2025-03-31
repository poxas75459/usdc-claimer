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
    "5bAPxiT2AzYVNsXnoviWJj4zF9KmcDsFJrHsuQkr72SnnxoxQFsEoiLmf9hyPrPqvvU2bPR6uoS5P2hKM4Y6ocZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J51UCaVojJJXfdsfhdP82xeA2VQLo37iqi2D5bbT22bYKybpE91WQXeh1e2oS2M3hL6B12oGNjQxk5Cb7VkdQja",
  "key1": "2YhEdFyTN1KDSsKcfwGJx8nmq5PVyx84aNEBqHJ272JFekUKHsMravM2m7pQDJvyrGfTHu4SphUSouXYbUQz9ZxY",
  "key2": "4fAckwZYDquGXTgH1odqL57vVpV6x3Y5JhfwgcAp2oTuEmKTiwF6jiHiq7rT4tkPXJHBoBpqZy2itWBeVNEqfwwb",
  "key3": "yCx5bnzT4ss5nmnr8hLAKpxuL6vydNKgycbspSCVriL2bKVebA1LUQsEb4k27EheD7anQZEF8d1fCusJCTCe1jr",
  "key4": "5zpPpiCgMp6PvpiFuXJ12tRYaFpLi4WbqFK43stnWPnWy4aNGUVU6fP9NUkGrgLNyqpGvs77d4K2UhYDDRfEaoj9",
  "key5": "4YfYActnhW4LxdfdXN8SfnfEBrGsncRXxKFJndAwV1k1ifxt8SgwLA5Paozwz5qPGPzUcEBmd1eHWJmaKPMtopyg",
  "key6": "5an4bF1dkaeEuJa51LGxWXmskw7EgoYZ8DkWqrdXa74vbwrfeGHMM3EFgTnBfaEUkUb3AZrsm7anNLZ4QYjgkuZf",
  "key7": "3dt5Y7AMM8hq5zTaaDsJL6CMFWx17CYMRZbD5YZyQZzmkwp1pmqRf1CaKGZ3Mdh4Bga3XjK8vgwo64LsyJADUaYo",
  "key8": "fJV5fdc9JXrGmsoo1qwWfZRM1GQL2Q72kAyBUBtw6WxwsFGh51Fe8SbRng83gAj4j687F9De8CcwFuuKuXcSUj9",
  "key9": "4eAvvnQtBGjuPcLeWgJKPUzYHY7oX79WKdW2qWiqe3cRxAh81tpjwp2g1kCWZWrunATt9DHdXxqbmdvsNZEjpevz",
  "key10": "2CBgDLrR9GXckWRh5h6HS78K7sjPX1b9brVD39sWuotMTLceCD58rZbkLSpTkeZDhGbysayac7o6zAbxyngjsWrA",
  "key11": "5tvXuzYSrZoXTet5kXWYgwWdZDsLFcopAstHvo1qpWwPnJ1YY76R4SkXMMkZiKoSfGc5HcdV5o2sFPGzMMzns6HJ",
  "key12": "2TsSaipeo2yYGz5q4DtX3yfG5XhhDTnsC2xT9rbU9WGuZ7VeMaePW1Yu6RpttLQdSkLFa3zoXju1FMXookB1uSS5",
  "key13": "5z2JkqDQKhtKkX94rWQ2pfBStukbcn6oNii3HAkxxTrwT6XUYohHvtq7ZuJPwWxe5uRxyej8hc4iexvxhKPFs4n7",
  "key14": "21YHYDepBbL2pWw1UyE7onQv6jcN1rirQXg7QLjxWWRAyCqWRmLPaNpn1ydCNQ1CBnoN5ermLXggM2QPpjzHQrHn",
  "key15": "2kUBVzPPEGdJ5XqASf6LNcEWrJh49z4AiwcjXddLDyKYXK4S7BSbaeiTLxrZLsdvW89C14k7CKeYXgntToqXYE81",
  "key16": "V6px66RQ2jGbfjndMq22Lvrz7ZGpBmdzPpk7miHFeKMBEvhZbaCF5WrV2o5DamDkDU1RVyxHFH6RxvkQcbpCoV3",
  "key17": "WUB1ci7rRxMRDR7bzNmsZaVYBf76QtD19Q2Bo1ib1hm4AGN5LG3CkfKoRw1Ktaous7jPd2GRsYUjwyyhUmp18mM",
  "key18": "2A9ZkQsnfxH9EMQis839ufmhJHeyEc9iiELvEzvbsz4vVkgjV7Ei1eAnj94fL44z5CAftkTAHZk6xBh1tepLxWgL",
  "key19": "4MT6XW8E5D3NgGesSgrcgt95fGKwfQKQtCfALyhdPPzTVLhtE8uzPQX5k88Jpo55vB19tgk6wkUzNXkfj3J9hQ7S",
  "key20": "5pfwrR5QTc9cSHFwHR8sJcKY3eko5FXFF4pKyQo122NS1QFkRnxc7cx1q16gnC84iqhXPb2pAPMguM46nZa82G24",
  "key21": "2wzxiCrXAoNVG7x57FJ4zNruBvkG13UJHdyRBsCqpn3ySkuRtPAKEfFgPj2ye9voY4RJHuyFEUFAjUyoALRYDaHy",
  "key22": "5YNLywjiGJXzkS6QmqeHs7W16cPpRU6cYsoY3XYLeCM3LMc8RfZpvciz6Mv59xAJAZibhpKRvPSNSgFpsrZB9Yxf",
  "key23": "2xi8wSMhrAXUdBPqZWwHpdBbqaojJrXp9CpJ1CYavk6EpZX6WbnKJmQTFrzTXxkcvwKdNnw81Bexz5yHDzZijLzt",
  "key24": "5aAPB6ZtvbqbBXKAU2h9iCqgVZcWKwdB9wT4vuQi7i99ZaFW82ThvXPcnmDDMnJekwe9LonBWvW5817XkHty9Q2y",
  "key25": "3nRoassE6UWTyaFKimR1kaqWR8GtHWnKFsbAi1ugWPEyhBHFsTvhAYomnoBHjieyCNqfqzbxU1vT1k3y2TufDZKP",
  "key26": "RLqHYsgrxeitppBTcwDc37wCpiy7z5E81yynmX9jcBwXBapDBqJQaLvxgXaHC1b8VGNZxh9AEc78NP8uQa3AiTZ",
  "key27": "5mdaLGuEs7WWB8WZsd8rdUZLv6VkLrj3jgoPWzRRUbT8h2Sgx4vYA8cpfpLX8CPxrTxYvQpaQhXAq2MaEByMB6Qw",
  "key28": "4bwnoifVq5jc69jYa9N5JdQdBte6G9TY3UuuotxTrNtATXnKj374JcFWy1VhWMTS1HeoMQURVCZZ96RrQQMUTErF",
  "key29": "5eDWoDamtfqweyTmZnzgi2hTRkW8gUBKc2fa5uUYNdrkXqnPYoa1Ewy6ZX51gX6QQfrjVE9LShR3W9kwXZVpNuxT",
  "key30": "52moZmZ6Dnb6Abg6hKfSMpq1a2ZyDeaRmSbRW9WW3vruQM7coWsL3TC7ddqnxXP2vRznXS6Jpo3dFdnn3HVd4FGJ",
  "key31": "iJpgSNcNm7CH7N3h2DSLbLnwSutqwbVb9XWj4dqyGo5t7CvZ1Rhspz2qDp4KkzAz5Yd7jw2BRp9jynqD9DTW5JX",
  "key32": "3to7N1Dh2AxZgbS1YghPvTFm1qZXNs1V9EfQfSsEPUUamSoMDKWBwAQf1ghcuBTcuaXKLrF4DVf9MTWWtFHFffdK",
  "key33": "64svpGnHq74acHojKheQbUNNeQ6QMHkNQQ3PYA8DSdLauzRD32dHy1hFgkPACaXn94oRVxykukKVoFMikEKbTGmE",
  "key34": "BoJuh51UPBc5S2QTGEJ5ifcHkq2ruL57847rfHAhXrBXWHBaByT88JXVbtzRu1VdVnYiqzEPGLvq9LFxrkoWKes",
  "key35": "2He31hHzBd6N4YpkHVyC3oWgMzgLRsa3nBVHBQmn6U255Arb6DYVksPnya6NqZisSJAabt3AjwaMeBC9mLARUT8W",
  "key36": "2P3vJzabddCLFFJ4Hk4z2s9vPwivXGEtEXfTgouLz8EPnnUtHMLSxaPSiTjnyVPjepkH7wyQDLvShKJS1zk1kfkN",
  "key37": "58uXjYcJcYEuLytdL8sfbJarCH1NYswbVxx1LJafbvgwhpkobVnXJjSgqbgdD88tQsR38vZvixikq3N99Hx623jp"
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
