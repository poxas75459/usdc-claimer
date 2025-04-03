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
    "eQRKKXa8KmRRkFNFVeadPWce7D963DLtYTMgKzszkhevR4pwvYL5S8dvh9PDkcJHtMzT6BRbXYzDezMGsf6U9Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9HRrUHBA97SXjc36DUeqNt5qfb8qQaa9TKzRUCK2dpV2pTqD1XTqbWQFQJjRbWGMQ25rswTyRzMw5fsSCC5R24",
  "key1": "41xhmMvzyfeUJMdE9ZR1iUFbkxyQUoZxvoZSaSJh5F4MAv9LK3y3HfiRAC3NFCXZ6FfxXhjXYA8MrBcYUR6ixbyy",
  "key2": "64J2LxDUGhNTnLBZ2nsgMg4mMeoRTBU7HgKwPpy2Jz1qYwaS977Jx5Kvsv4XY3t1y8p5QyABYTCJyuN9aGhWLjGY",
  "key3": "2N54erj8m4KNDQStg43S8NRi62wcrVFD9zvJpscEw63FJdR1sU185b2sbuyX7918Zk54NrVqDDesupqYbTrsftpu",
  "key4": "54JLhuj5GjUfCwQEM6n3xMJcXhSXa6cQd2Ng9nzYioBKiLSD9XRbmFb2GCMj6c8KLmnkeLBk81wNzAmQSRQvrorh",
  "key5": "dQ1ZCT6BbZRxwrCftSiCxZC8PjNvec98zyWWB8EY7974WAHqXsP7N2drwdnaq7Pska23CEpLKtyRbjzYgXsjyrA",
  "key6": "ZXjjnGRCigjtGsMMxBiTARQFe3hxWY3CaQTKNPNgiCM5C2Za62HqroKjQVXLv4UmHy6267yepbAmDgWXUYWC7zx",
  "key7": "2RrymaRQ5mozkj8yd7N1z1Yowwfc1CJ5yB1CGUhqnkLR8gyrWpc3isNf5Sam2j6vHDBvDzqcXRSUvk88wG7wahCd",
  "key8": "3s4DZvCLihZqRJjbK3yBq2oxwMB1zxuynRho6kLF3j31yWxfHdT6gQtZTbCdYHH46vxqEMF6cLnscBPWEJKTPGyW",
  "key9": "pNdJnefJtrqpuT4gwGvt5ChiDRE7o9baeZxWf6zzyxLaxo92dwtkocFr5WvuRL2Y89GdMc2HHHJTrMMBrpSkPYZ",
  "key10": "66nKi7Vou8LEdcnKSpYsy4wmbNdwJFNBt6ivUB33oTPVcC3pw49xs2gJ2tRmeXKw3d9LENkPA559fmLDr8QHuBzK",
  "key11": "2eHwLYTijUudcYQMLxJX5GC69CUq25E8h3oNTMiNWCdgUdwW3vtVMyAc6gniPnT85J9HRrQxuHcdyRdSYxHqAdMM",
  "key12": "42MkwSjWzbhuBe2FNiUePzhwgmFZpMu1qZZ7hzPhdh7tmSEXdjZcnbRG73XjzANAXsZ6LHL62ASHTzLbL8XVdm2t",
  "key13": "3EavSQVD3zTrkWorCSfdFu8z1gddYt5tXt4UL6iigMYGYDfBjyJwiNFG4o4e3eHDYtvrHrmR3PZuLuhXEprDXjXe",
  "key14": "5FVqBy47K6qLrQyUsoQSxb8sjJUujTRiVi4rJaMX7o1Jj9jn32qnPPxnY5suy88FEnuTvNBCEAyRBUuK4n16LDxK",
  "key15": "uimxdAvHjUzh8goxdu9Bp5D8TZsyGgqx7tBCApgRrqYhCJhXtHTZtfbuPMAsCp5rb2iUnZi8nRf9wuih5hAeLRy",
  "key16": "52YURKYmFmRCgu4FeeukkDgDHAVKJiz6QbreKRrTtReo2ryd26Lj5J7vGR69iiV54Znp3potvQUXLPoUcM4zA9Uf",
  "key17": "4BvrWx27hqXgQw7rguS6mXQMJqUsxbn8JAT5aRunTt8btmL5apDEvAtU85zUwFrPzXyCG91bf5aqrDW4ttAfr85J",
  "key18": "56J9EMPvCtHoETfCvvTY6rDmpw8KFUh4xMXU6gXmcufpa8kXffScECgaksnzcjPnV2LfccQL1ByQ1JMJFjbULTZt",
  "key19": "5GujfMUy6s5Uiu4PoEP5tAaWMPY3PSwcJENyEJZzVRNTcYfzMSECqh6uQXcxxzbRSm5CSitUBhhqHc4Priav1M9H",
  "key20": "5zFc8u3yrXpq4of1iseRMwofurNRr8je7q9PNqRP3dJdWPmFgYu8zjDuXkJzNUPFAbZS8XRD18FzYJJLpiBxBgLY",
  "key21": "62X5DcebFCmXQQX8L4Fv71GKh72gHKqMqMpE7ZtZL4ExgMqE9E6FPxTPPTozY9BrWtkXd22jrLWECyhNd8GvvfwE",
  "key22": "3JFFMQawYki69Nr1MVCKowxavrEKNUiZYBhXwbfoZfHiDQhBo9aE2gvYp54V7KUg4DdzagxHdzX2NVJdG9mQBP2v",
  "key23": "3JCpJUEzktXgDYLasaqsK6zDMQ6aw4huEnansn1fLorf55dKf7EuFZJbVdqTn6P28S1rvCtfvMKmYUfLtQ7RxC7E",
  "key24": "3C5S38sjRiaFC3ybK5s7QD4YEoMS9Qr6gD5emaWyzCtTvNsFGdxv66X3oTXapHGKYZJ1L4m21ryLKz3ZZobMijq5",
  "key25": "2Fgb2PEFEFS9VjGq5Lpxxs6HHydJ8ETLWcXUeJez9UAUEcDqMcdvDGYBZauRJYUhgU59zeERcQVRGtvW5wmcfh6b",
  "key26": "2wnHyeKBrfGkCKHM5tDH2S5dnd7bBhUvKQsKdDRqya2xHNHHTfLFDtmFdnNqytNEXZTuprBugkzxrWthiWXVUXCc",
  "key27": "2TmeiLdom39JvF9aDGCYZKFPQyonYdpypsmWffQntWrMMSfgsCJZnJsfcbc2QZwDUD2PmThNXnDA4X2FBjgcPMXK",
  "key28": "5yy5UUMpSC1YpB5Q51vtr469NUPnitu65H3GzV64uGPZtB3XKZweVDoDGwxz97RxpLdcNdPjjsNframHakwdJKXy",
  "key29": "38nbRrwKUagGRamxE1qAJs7mgrtuiKRo7eDvXKwoSgZp3HwyQEw1k3H21b154KkTdhkfYuRDqfyfcbRdrwTEQKqq",
  "key30": "GhGANme6RRsJxCoE6XKW11RG8s2DJtKyohvZS7uG8VaGez2AZt8MHBShSjqtxnowbn5wRyUWLqbfkyKNnnZKNuS",
  "key31": "5M1UuoX9xWdTgXvAvm8fyXYE9MvAWpgBdCaGEMBhEtbieKD9EdFFwgFSUm4GRXoi3dTUX2WPvhTT2Nu1Mj1VmMuE",
  "key32": "5piM6yzmpMYG3c2SeW1KpfgUnjy6ToNi9CFs3ByBdpPPYzptzKcK2qUe63YFuNhXC6d5wLGCAmJfEuj2LUs1y49A",
  "key33": "2gYpvWh81dwgQwZKCNWCk3NnKdJRDEBTyJcMiSR5uGbMSTuYxZBZtht2ziD8b4EsGniw8T2BcmnvJ4CtGVAyGKa1",
  "key34": "RJ98XGCAYgG9BS86KQgmcv6ohKKYJbrrh9irgEHM3mow6Cs329qoYki6qUSXT3vnxGcEDy2bR4ZXbc5DPP5G6Jh",
  "key35": "272XM4NuWSBaT8r5N4FaZZAKH5n1VWSs4Tzq7nheKFwoHQJqErrk7nEub3PY2m3Kv1QbeWJCjrhuoXH4b2BVHmdZ"
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
