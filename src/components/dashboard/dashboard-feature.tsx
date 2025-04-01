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
    "DBmQ5R3aPioDbQ32Mk8CZXizxa5FuSvv4TJtJkStaBSbWUKN5AQf8FrG2BygGBPuD7HRqSENfgSG4zYj4mFSi81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZvUbMsoJ9UhP6DxKkgSRPqPnxiiretp4WvmVBophT9ane1hNLFzniACiiaoV5Wn1nbgaSVE1zWMFUYomFiAFTkQ",
  "key1": "54X38aH6X3GmAGmSZtZNHqVmn2BQdJYFL4rMc1Y8ZeEcmcPQADQdNHezy3jPnKBZN3uA64yzeL6EhuztGW2nbjVZ",
  "key2": "2Qaa6kQeh9wpsK5uzZwAokMLK7ic6YqU71rUgU7KK8b2teGDaivdGJw1UdBpA4SdKBcEc9dCX8uYtJfZfhbSBjgi",
  "key3": "2Sy9JecNRdaRctPheym2173G83KdBYDMNGrzzRDZ6GjPUnB4jn3m3xZa9qhVog7oYCPHDXwzmW4a3L5GmRneBDry",
  "key4": "2HvHsN7CB6H1jnXbCPZEPZQEkuFSn3te3MXrfNtWh2nj6x8mnb4kyCRiA2nFtz8xuZYbHxN4TBHfp1NaswtMf4X4",
  "key5": "67n9HBmszt7d8h47y1d1psAzAUzmMgcpCruA6Ad79ERtvNLZ5kZS6z4JmS6A9yvLoQKEGFkF8KH43CQenEmGuWb6",
  "key6": "HcsBxw9pnLxjsifmSGDQs3s4YoAiChzkYicXcHraVWqBREAR3MfUkpa3f28763ubPyLcTdLGokkMVqm3BCXg7tv",
  "key7": "2Sv1XhG3fUMGEMbzttWF6jXGGiJmrP2pRbYRq1iroDt4Z1b7CNyTsNUCGyct5Mcp8SRML3V1FRXj14FdDyxCCtu5",
  "key8": "29bN63FqZzNiryRuTtjCYrafBg2nFkToUqEQ7qu4e12LnBFsiHNbGZCztNHoy8ZucaQGZ4jRsFwsTyTb4d91pKqf",
  "key9": "5MgX8kyFXnnPgCQkHStDu6rG9SXULKaa2QSuAyJrPQD7hByaiR6oKRo5PD6hRMJFgJ38BCzvWUu1zdzWYRKh9K42",
  "key10": "3fa4LKMJGGi5P8JKiZSkrud3jcDUNKWG6WBbvkPATFxhUtmErjSJFNFLiirVP1RqSPb5Rp2sZSRJoFjHB4mbrRyU",
  "key11": "5hbhMN1LXzAfPjPapqYU46yasN9Dfqfgv2zxekb7bipbUzhkPYctnYtwAF1v21Up8ZUWba6sQChZCQ1urnxWPEW7",
  "key12": "5RANHHcidzS3cGiAAyEDTmENXDWL9BjRFxmSpdQEKdxr5vrBMySLskxARyjue8S1NWRGySBYjeJ6fiqFQz1ygMyP",
  "key13": "idmLM5ab7B1y4x2SXuFqisbLwijtqLu4VNZcKmtiZm92MAcABroPQJPAnhGhedypSLfDMJXUqhXgjZ12a7p4BNk",
  "key14": "2py6u9BvT5A9BhHLey559ntGNWpbd3QhpNV68GL27nj7jmPBP3EkZEEJduo8qZ2WG57AucxYwUG7HzhUFt5nmXJu",
  "key15": "419TeTosKz9TwqYrj3TmXYHpDAtW6PXFFmMNaiQuzi6P8f1JaL2sQt5bd6973vK6FGF3JkV7frzbCZ4G2ZE4h1V3",
  "key16": "2LxcbNrnNySF5nD1G2ffAfa8P7fw8pnUNMbDwspSHjLZ4yB8KcL9tthmk7bMrUwgfyy5QFBcTpuFHXi9vHA7ZNxM",
  "key17": "4rzepPiefhvYGwJZHHR8Yd5bYKXeF2ZpvvcCX8dgj2SdsAgyqRSQuBoTLAkYkuq1MQ8KkxZLpM5m2YtETMW7Thbe",
  "key18": "QFV8R3Cpm3cd8a7mBV88BJcoHVk8cBiD2gjtq3Vt3zJDWPh73iBPw8eGgzEn3eGvameTdQqz39SG9Y3jfAcqy16",
  "key19": "4gc9rByJFKJiAS3cnXyB2vKvZYQ5AGvkiT8Wr1EY3jiTCyw1VBdmsBmhcoWNBe2WeZP27vsn89w5xsia2WUDjYr8",
  "key20": "3PCBzHWEuCtoHn7vvmbGgVxHXP9nvTo5zeGhybVSyrzcsh3JnRMdbakwmyUXDALYhbmaSmzGUyaAeidBm55rRBcH",
  "key21": "5WU6DBFQiGNgeGV1B8a5qC8gVJjfW3K1t3UJHhKPbBcHSsgqsPrfGScC4YPD51NmUihj7fbCwMGTk5wQkKumMUFq",
  "key22": "4JsjpLEUdi79f5LTGxBqnBU9PzAnFNLbwUgdfmbasXqwX8rgoYd9Jdw2gTgNKrTXB4ou48rD8RUupwrLCqxwiWGh",
  "key23": "YgHwU9Mj8Uphkcw6ruiCHt9njLexbU7embqjTqJwHyMed5ZxfXdoBHitC1PbRNmU7WP1kZezhsRtmzsmdk8yMQb",
  "key24": "vnJoKZbUr11KJSFAUDJZLfYxhNAqQ2NKoNySvs67Rx9uvzZq4xjtBi9Kw29vYaFbAAjiMB14YF4CjNzqRJDUSnH",
  "key25": "2MeZu5fG7KSyKFmx4VuXTQ8iZybyZKPJ83GvQPzSxW9vdCMRxRB63f7g534qWEkeAWnz4oXf9Mn7EjryD8etr6Pg",
  "key26": "2s1vAHtHH8yisUmR5SQ8GQEvcw6hsJQAaSWgjup2f7SMrKKzbjG3HxWLKx86RkE27vPzJuVuyC7hY1vosF9GsbXu",
  "key27": "3uKAn1NVHewxXaHGNFSMWSxoFwPdggwASgtBES2qWjxL9AVWE8fXqhHRFpY8so7n4v5saGbaK7URroroNkLMJCBK",
  "key28": "24hcB3iPkPd48A43NbRKbgPZHKvnjfB1P8xUp2t6gNJpuccgLdZFbExaZ5oDhj8p8BAEYSKcUjCjWamAXHghkV61",
  "key29": "2oYxKT2mMhKjZMW5uXjXnwPW9sWCziRj6Pza9J2dba5UAWc2Q3JYqBBeaAmVFGNKEYjhcANdpx1fD5mi1Uj9yCz2",
  "key30": "3wURaxaMrS518akLmWpQTDUbXbAKEGvyE3Rh4EhGXSHAq4YgNXmCn2FtswdTYHhJXd9mqqevCRRUL2MHAe5yvCrt",
  "key31": "5vWmuYpX1WstCuWrSAidwZU4iZucPPdX2kGmfipE8je2fCsGcwKtKXGrRK7Kqp71ELB5z3d7G7eDcokExTK3qASW",
  "key32": "p5PsN8mkai9fgEYzAur5GMJjwXqNVkkw4gWovHhZ6HgTxN4gda8FbycS3sPGDuPjPFxNX2pJzpib2UY4JPAt3pS",
  "key33": "2mZkYjP77X5auUE7vRuh9HPNzEGQBjqEbzmPkDendAfNx7YbQKgVaA5ckspB6Tdoa7WXesRHLmg6QdPPvKhrbPWz",
  "key34": "28RL4GogNYcukwifHdi1k3V2h3u675Bi6DYkvN5NPyuDKDxuqazmnLxu1K33gn3oBA5aJSS4pKdea3B9PqzW6iv6",
  "key35": "2H4WCue6KrL3KD2HFpVWu8Z7WP1kLqmrSqzacutYvp3BuSn7Sn95EbJmTn3Q91WD8ZANQWT6Yya48eH9n77yPtha",
  "key36": "5vUvyT3J24QuByvmraxmUtsCUT775dQwqkHxKin4dcttXTo8SoNPtJbtdmdCmR54s62SVo8gBXfuEbMR6qqJqw7W",
  "key37": "5A1CBhDYhmMoBDmaVLvBw8WuFH4obJNfjXMo612XxJPRWAyyxjEAsMB35VWKk9K1B94eudS68GyYBdDTe6oVzTEV",
  "key38": "5rWGqT7i3Vqxt9H36XWCDdgN7qv8yLmWY3vYCbPsZZomAcb97LJwUFn2b6edbsZVEEdmcWV6AUH6EUdwcAL7QnU3",
  "key39": "36ZKGPSxjoKZWcf7KMjziJpyC9ynDBfxExktCULPCXQnBQ3KFcCrU97iGjiBqTrPdMXpVfNvX3pofqFmk5garBeW",
  "key40": "3VGw8Zihd52xNtVs3r2bGxbXkqzTdPFeDuz6Mc1fHLYDeFrrB1skFSt3jmZZqBNEQkw6E6UbJEoxiD6AWQhxmh7k",
  "key41": "2642YmdMYH8Pmh36sLuPdiNmXB98hSyC2qDtFMnJoVTbR4x1tk3dyB38yd3yCj9e8qcLA1SfMdxJYKW2jcXiw1wp",
  "key42": "2E5VcVE8RxqPCzSJvPr8eUn27zyoy7pApmdJhHc2GpuRvoTxxFicd98Hsy3AkFxQ65bwNvKsXFm5pRWe6PztjaAg",
  "key43": "4kfyF2BZpXyxXiodSNF4bTb9qWqmwTwEamzVmfuhx6XeBDPeWoZYW6gxtLKXWcBjwkhoPjyXXVkj4P3qRH3DdG16",
  "key44": "2P8wqGmpX2YyAGuCuKMq34W2ASEHekMjdn7nfCjbCWj3QkGkkcvaTCD7drScbqgfQqDizv9n2Gh53DG4zhpLQ13X",
  "key45": "JqUivaVJAZgRqBtihpihdvsrB3K5Mw3Ds5pESDgMVYXNLr3FGtwiijLJpwWC9pAwjTesgwer93vAL8ErxWzErmR",
  "key46": "GYtomLgWzJSMsBjEJZ9E6XcYo52JGGU1rDpPad7EkiAgQTqfR3JTtRmY6LVZdygW9oaniFYNmQ8ScgStSV3WKi3",
  "key47": "59rcsZNkuctpSJKnvVXUe99BUhrKob1WnK9EYVfkURpDj7fxV81wGmbuWc61oCivSwGsD6vvF78Cn5kU9vdnYbXn"
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
