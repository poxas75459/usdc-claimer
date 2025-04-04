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
    "5wUf5yzxZPwTK6mbkuw8GzGeAfJYWWESUcemcpGSHAR2JTXd689mDSozaa6bCj9X9JDCziC4zAegGj9pvnqnm25b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ePgrXjZzAT9MHq5WdaUJoycgkamqt4FdnenVz78MoMRmBaxnWv6LzJvK9tgRQNTk8AXWDck4MJZbNZkj44icsU3",
  "key1": "hvBhHowYw2CCoqu1ypswGzM2FQEmXgN1Ex35LrW1qJA3zSKeqMSMeCbhTzeb7HQ3V8BoGkMwnnYJcdZNDvW7ABs",
  "key2": "3mrQ4SoxNJSbhAg8pRqPk8YcmbJVbxNvFEunV7Fn7U57L1m3eSx1skw3abz33KEjCKZi4Eh9t1aNKL1anFRzAU15",
  "key3": "3LeNwLJX48D1kUHKKfzvej41bkkJHpTLapQ3ijqx9Rwi1xXtYzqXotkm3WGsMb7wy8J9ot1Y7qHTL3m7So4V7XpS",
  "key4": "2YbcsRaDgcECU1AVDSE7kzj54e2xfPM4STcR55ue1XwZ5eEYJSgpKFHYjtkHse4LYJjZErYfrrTJFP1LFopYBuxZ",
  "key5": "4PAxsi8N7R98Nx3aSAEJLhySVp8yYRiSvrZWfzVir3cumwCqcfwGaF7nYjKvjqDZB48RG1CTSWXg5dwcPjkb4dSA",
  "key6": "5WKnJvkKfgPGwVNwvpKzKyL1JHqet7zcD2CUEpA5DMnZcg7YBnR6tLDnnW8VhqVxKAxrGy1msYa7E7iVkjUb8Z3T",
  "key7": "4ecFxGWtzFE6z3GW1SDvmoizifx4JTnRn4FgaoQBQdAqj1uwdUnhUkQhDByfxA8tcs22mxGu6BYxYorZzTukZxuN",
  "key8": "5a4u7aUrd4D3rJ3FyeyiixphiNsVqiEJWEYrcocUEsdCQvRSuiBAPcnk3XxaEkuLwAmUwXa9kDdswRYDTfutvfrr",
  "key9": "2sXB4kRxP2SLdvWs1tmnfL3f3m12UuC7BHaJoKkEcj8gvKwy9mmFP8rEeVDy9pJJASMVtUUBw4HKYszoU7JaXWp9",
  "key10": "5e1prEV4gaPjm6YrF7D6xzYyFXBUqoqQTpMbMndZrTqQ3Vj5QyTTJsShxhFWLMcYY2MKSytg8qMLiD1LPYi2Utvs",
  "key11": "K7iocAvQkdwJEvyMqwCMNL8eNdRGGQy4jX9JDEc9VKSNys6r4MucKTLz3rRZxpRPvdzGyyzBsTckk8M3dyAeBTB",
  "key12": "4Co8KUeiF3cJhvq38QeUPzLy8g5ZZirFq6M1PThjgH5wjvo2xZAnzxUQEB4WUbZcuVBZ5nhhXeAAXRqCnwfHv6mA",
  "key13": "kXUqUNuRqARk4MFwxoZwWiRkZU1UCEW7gsWbSyE7nvDEbDsueFuir872uYvDrEcaASAphrxioFyLkPXRFDqsVFT",
  "key14": "671zH8FFFKibM34YEpthqV61m7CUh7jCANm8iecXThjEQeSDCwaKXFbDA2uUzmwPJXqHvoaJRRqJ9tg5TCxT2Eqq",
  "key15": "3xnWuqwPcXFQPBf9TmMrDMQiBiJkEkTJ1uCb8RE4LyARCaawfzyP7T3XstZ6ftVZas2yRyLtBXe2sw5ghqaEyFyt",
  "key16": "3GTBs2g4x9yjaHASj9uW5irJQdRMb1Wa2cqn8ACubDiVuoCnz8SgG8EmJqHDmwh3DmAdBoTQG1f15Yy3V3tQXiN",
  "key17": "ECFqxXEd7FmyZXx8GKcaLyTxtkTK7k63UceLLP8VzWvSg1GLo5MMnQWWV8Jk6JDkduXg5VDi1bigQE91mWEAWNb",
  "key18": "2Z5FuEH5i3X55ZcQoSjSC8zMrcquGd66K9nQpC9nKXzM4rFvCSS6nZf3ThjaJbTMHAaR9wftCHieAD6LbEMerteo",
  "key19": "2KDCWYRbzr7C3TpqAPHnaz9tN7eWcS8a18P2stYCMWnUYxQ4iYozUapd8MibEPQsu7tJ863miD7tjAaPmHooppem",
  "key20": "3MWe1WR96fMKyBdQzRXnyQKcho4KG11aVvrgfz5E8r9F8rq3fBg1AtNCKhPZ1WGR766dqZo1PNZCJ56fnxcThuqT",
  "key21": "5QRVnDbJ1pF26eWQXHpA3PMU4UX6fu2ZBKy2WiBERRwjdjkXAYr7LfC8KGttFck6ULgtreMNifBokatWhjTg7N39",
  "key22": "4uZ4z7kzpFTnvy3yhxinKprCUeKTKUGYTvnmKscTSdzbFzLxqSPWrcjJ1nTk1FWZEhE7VTvPK2g6QbGAp26RMq52",
  "key23": "5bQ7w8V3aouvwL3bcqRyxZJEMRxoCezGMMSYF9ECdAgnXHM2f5kUfusrq6Nnh7avty6Am2jiDKehoXKgKU9VdWYh",
  "key24": "4NNbTJLnjbmYL6ei61F3ikrVzeBeZYB57s2m73ouQWnTkKB7oz9DEYs1cM1PAALvqje1UQMZZyeZsnm2iUBUkVkw",
  "key25": "4ghkdgzSsRtoNZbyB3rHNyx3Lv5rg3YaQNYZ7UDJG5BSKuxkagDerMRMKARmBzQyXM49Zn8WL9MT1a2H4mWD947B",
  "key26": "5ooBL8GZhgcepkQWGHVPHF19aLMFQhLJZHK419SBsjE2AntecEesr7wi7nVhkyfPkPsHwtBfWNZecCd1n45kadnq",
  "key27": "3z7U85Y52piPHGriMJQAW5QHqWAp9HiBLCzavYL5q21QsCuFvBrDMM6YwFbvWZ6frb48mC6Ysw9eix4jRXahn1ht",
  "key28": "2NS8JKXsgQf2zCBszfK7YfRJMxKeRvG2rxfxvSR7gWwujFUfFP27E2tH9XogW3XPfhYgPaNMPeeUJGHpERGu9iVR",
  "key29": "5eDH6nTh5iVPG2K3AHH3B7j6X1F22w4xZp4kVhoB2ke3Whx1DW6sbAoXh5Cs7mz8NjzmswiXuMQeRZTmSFshzN8C",
  "key30": "2cRedRdGoUx7wgf4uMnyvyrU6NtxVq8LtwqCYiZHQk85SAtP3sWRaJPyWMCFA48juRiqAFesTtC38S928vU5Uos9",
  "key31": "2skdFRU3ZXWnEzRcweim5pgcMR4TP2Y9ba5s1jPAWkpb2JyarN7Q1RYkcKqmGNcjPiurFLnbxfzNWCfhMUePA5G1",
  "key32": "36rGKyEspioW3GhPnbS52aaHXAr2fAR1EE88VYcDdpVhk8RiAph3fvi6PeJ8qNKMJ1E7Y6tLJnQScmcBbHGgwiVU",
  "key33": "45ntkyfLiiUSqDqLuDUcHhCwDsyY3RAMhKA5Gg4X8KqdE4WkVyepC6UNhvCznsJsr3fJcy9zztkNdSQgMHcthobo",
  "key34": "4nb6u1wajqcQps5w8WuXZPk5BE37Rt2CfSRMKUCikdaJdDRbMubzjUGpnyLU5LywpKpytxyHVWmwywtgLShnCzM9",
  "key35": "3BcdcAaLEZDyoJ2hrnmPqLVhcJn7RDHmnW2qCSL63snKBAoWgn6SzgSXPX7xdj1VF3867YSfPGrUz6S375ii6c7r",
  "key36": "4fUfPnWiLx55AfXxXYQS8wbA4JU9VJspC9YqwgEpV6tMcSRhqdqZutmXVfCosvRYgVysppzXNuwoyh1qPfMda3Tz",
  "key37": "jsqBgNkgivfBmaq5hQaCxAGma48GY36eQErYhHpXt1uncTc66HCnxkrDWv4Htco5pLLJvi6mNQXBB1kVgJi9rnz",
  "key38": "5ZsSMPGRZ85ddQGuSneHNSPxp3ikHDpamZwQ1pq4wsyn6kvg7ZoDqWVSQfB8u1NahXkFyozqM8wWDyhur1W6ecWu",
  "key39": "4S8z3bHkJLsmrCJQAmqf2GjKQbBifbxdVSK6jf4mS3LfW4zPwvGDBQ2A9HhmfEpuNkkqfghvvFhZqYeXxkHpfJt4",
  "key40": "5kMytLVSLjPCnQWLu5ic5fAABDoYdTf5P7RQNNvQ3jDqcPXH1hGB79Aqw9UWyhF1csxZMTSHr4141JuC27sK7C38",
  "key41": "5n5jr84smd3fBnCJrNaGU9Bt2h9dZf65GnxkG5pkhQY9WnguJ4H3awYmD8sQbgb8nqrksfEPAzKiGK4MA33WYAd9",
  "key42": "4ueCKCVNkRueZDKC5gLzUgRH2Gb95zV2iBeDG3mVES1BWzU53Vet91E4E1WgMvAY8onEM5xDdEBS7AYPbkyFXB2q",
  "key43": "2jWJ5eYsntN9SnftTvkLEkJARoemAGn3WLBYo1ZmzJsjumAZSKh8d9PSwZopbKoTSMYmLV2jmPKQm7X8REofrGPK",
  "key44": "D2unUmMvK4qTRS8Nhqz2DsUrKQWZzGeqxFf9KgRsyaghspMojCdk8hqiECk4Y8UTDXkKgfpAebKpfmLu8wJLxgr",
  "key45": "3Tu5zEiLcCN666xepPLzha1W3cSJToQ35FgWjzXHhY1QWTy2fvqwtHyPu22XNcdjg5VQqqsj45m17hF3JvCVUq4A",
  "key46": "z62kMcEz3pnkfoXbVX7DyVe1wNDhyepihbbVXqh7rVpBc2Rcby5Bxp412kCYrgS85j4SCyGXuoCvCdY26NXJBX1",
  "key47": "aSDW3Az8186MxWccVdmUhG5EgKhch8SCyr3wRzoHPuGovMHnNNitePaBhb7tdVYLutWqLmhmF4LS3RKdErT2ccJ",
  "key48": "3jLejoi9sEzkgKGbZ4WYHEs2ADrfbyZ7dDgRmkwDnq7DYfTEfRy6JK7H47NN4MmmnBHjWayEm5poKKAhfpAPr7SL"
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
