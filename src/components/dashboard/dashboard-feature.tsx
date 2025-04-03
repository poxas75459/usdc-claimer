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
    "5pnKKuBeE9HYXt4PVtTLxg1HWLRPUv2oBLKGNCgWtvuos7oAQqU6ZwXJQ5WC1zzizyrDp1Z3bMQVZgdV5vrKA9Ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXGnRqKcAydaFE6i8AtiNZDNsxeUQzqV5EZYgtrxitziWWamWrNjHHPz6ojR9Jx9b1ozCJgf89UbZLZuzZ5AuaT",
  "key1": "3s7gRqdJFvaXnmHAEkzUeeHFSJNrVeNrwKHyd2HL2ZvodvyuRQ7zhjxR5no2LyUpg3aWuU3aHt2VrNRwqLE4RYSz",
  "key2": "4VZdBLF4fJsTAJ7fw5uGXQS4iHQuQKo9rARxVp82LwDwAZvNdbWCjPs7bFiXzPqD3AoUP4B7xvm3sKtadbHrQpse",
  "key3": "4pmkfyGZPT6XqMV2x1iAsmLagMBhomZD1RSwtFYPLNJ1RJuo6oQuegDu3VqTcEqpYv83vWPpmvdJDnpBs4dPZjEJ",
  "key4": "5MoNndKZp3oT6FZxqLYHSoCCWn4vFLGvrBupD38sSNPVSF4Qcq8kSy1PNBUL6anmxE7KpMrVUg5xpZNT3qxXpPFa",
  "key5": "47sR42vpT78rfadJCxZ4vDF3u9MAb4WivQvotVNEUMaPwmnfpf7HcBi41kHuqHBDwA6sKgFmWvp5cXiHT4mAhn5A",
  "key6": "3Rh3VJPqWLwzP77Jhtpyx3Xj1bux3KrTnnyi24bDuHBCR3JHAvvyjnuNf9K5ubmcosuTkFcksU12NyxzvtAw2z5k",
  "key7": "5dexf4P5qoREEFXmZm8GzYfPCsycCByixXKGX7Xuur7cZeZhj4VDriE3JCRTHX2mjtxjYgAt5oDGPcs78kxon8oD",
  "key8": "DXNn6hNDuEQMJh5JV9b4agf4934nboYhHY1dc6oh9akRZiVP17TjVn6PL5YtGi1Z5mUMrsQeBHDQtjgXtgzpUkH",
  "key9": "5CJG5GSMb2fsyHoW6dRbF11M71Z68Frw6oyyjSLm5u3tNahb81k37F8UJg8ABxHqMzbmK2isPF1e995qQjiF6PPn",
  "key10": "5z38DM8BPeFmo8ji1NQ62uDjYgxk1Xn1YH7JqKbRm8keYK3FUDL2HMgt3HYaKxSdneAw9oZyTALDGYijyHWDUqwz",
  "key11": "2nsWJyAbbGqvKtMja2deM2KEaVnwXevT5y1Yca44tg9ubLi7pRh3oFr8qqhZbh6ZM7VdPpxiSvujXVFMPjAi3Qmy",
  "key12": "ENe1Rn6optu6RZdgbScwjH9mfS24X49ZkRmgBoTfHwuds62nZbQsFA3pcqoSRYhBvxKzwLTgNAHCnGoijNZbEqt",
  "key13": "2L6E5mdY9Cj5sPqgathA75yaH8MGpaRiKULLvrmRy146ui8nBF4YnQpE1AmtHRWf9rFyNEgSweyust47dN41yMj9",
  "key14": "4McxNGEe7HAWGvvooQ56mR9Mu8WsvYyUqtHynHvY2H7gki6EoAjHNdr6Ux8iumm4gtpT5MmqsqfuyLAD3FTFuMmQ",
  "key15": "DQnzy5WkNbf8irVeVW6w2cLPMTdi9VNBeNfJj8uGB9dhpxBGZKiG4oSVGXPZSZs7eRVdyXJDUv1Eh6Tz47Egmyg",
  "key16": "51jdb4rs2R3q4qwpdnGY4ocsyfXGmiKUH1UUTUuTdvmURd3KDK2YUdGN3dL8K2E9syq9ywJCnzLRNLeZpBq39qnJ",
  "key17": "quEbXUsNwFPeMPS14n58zgtE6XXSLpADPdV6b5Sm5dVpqskXYfJqzL2vtEbqBxy9og3iAi3arLCQBMs74466tNd",
  "key18": "2uEqwiKjfG2zXLq3teqxBnENp3nGNCGXawnppSVRAfEHmfDjro4LqNRxvuUKbHSfMwph1Y3CntutJxMhgjVVqZyC",
  "key19": "5avvoYVpKrKTzMVFCwE3EsKcE19RtFiuze4zBrqVsvBqirgadnq3WJ8V6tBbTitFPB6DRL25H62s7nvgUYgo2UeM",
  "key20": "2BqLH51PnE2ysihN3KQoANewBaUudWW9zC8v2zWCjrZonExMjqvTBmKshcq7as8SD58eYc21eQ72TtCBjj67LVnY",
  "key21": "4syxJxFt3KoqKX45BEobk3JtP1ARoU6j7c29nfbFfQxW7f4HhJa9MmRMjshPgRT3Tfx83VVmQ2ujT5SdrSd38oh5",
  "key22": "4w7ubtMpbXVHmDrVkc7XVEWJo5o9euBpn92KBWcdgh9CBNLHojDvUkWFrLm2LM8jjGDi2S2anEBp5tmYmToibqMu",
  "key23": "4uFJPkFb8R9h9gTgCAUwR6AFf1xWhLXeyxHF8JiN9NUxLm3rv2ZNBFwPoLQbmuKiHiyNojSk1tmBVMfapNX2yhhV",
  "key24": "2f5qp2GehhvsgXzYxYtTrXL2qzfrn68T9GApA11sRUACzBMd4vsmWhRAVPvB7jyvNvvnYzmmLqDsEQcuV2AmzMto",
  "key25": "5tXkQmrNNaWEnBphdH1nxnvsFo2ATQVMp8za3VzsRLL1RaZxTBidmLLjsGHVWMCb2FV825SWf3dYrZgjsVwe8McQ",
  "key26": "28rCUwVxuEhFN4AkpUnT4XE6Ye1ZUcKH2x6yqzKjVnC6Yc9LKGu3m3JXTkrHgkCtszrtTRMix4siGm36qb4d3Rcx",
  "key27": "5zt7qYv8nR3X1wG8v7V1uqknU2Hv6FdAP6PgywkGnSik8U4jqdYg4JEyLaQc9C7HX1HnkN1ofUHBoSkbY4xz4Y1p",
  "key28": "p4rq3ivzD61tnBfThz93SNFeV1biPyjAgJdhCcFDhUrYNpCPaEydnbJrZ6HiytGzyT9aXFS2KC16ENbG2hZL2wc",
  "key29": "5TAgvboixpCiawAsUvpaL5MvjdJH3nmbvafCKVGy15FSdzfLuAcAYqXE5eho6f4gx3wco75oRNKrPQbg5FLQTCTi",
  "key30": "4ozok6c7YTAfJdxuskhFF8ruCN2YPBUCiYmpaUW3ZKitqU6cddadWJQhpgCJ6V4CRpCdjEskkEmk7sXiYJS3ghe2",
  "key31": "41WtQKZ6WfAwQAujQovXE7DH7VmdRUDMZNk72rX5E52XBoh3aB9LcooE8ZtLuS54totXUwb4JtgUaMcY7AdQuJT2",
  "key32": "2R4unCfsGT5pmBWigc21MutpkyTuFVhw3UKDuu7C4QEztqeLq9jYpiUf2z758J3o98mvvLvBqxJDBd8zHGrkgCb7",
  "key33": "3PhLGpRdZqgQEKkNbhKHf2DqxBnny4Mf4Dxn1EsdrRe1BF3vsvjCHvzor9aVaRBDxYooKbMKzVUUKNWyiQqVP26T",
  "key34": "5txhPGxKLfK7ZhyBK39P789iZCDffmcQo47cgjiUkW8mLJYqswjDXG4ts3qKA9UsatAHpeH6x4eqHXkzh6o7oLtS",
  "key35": "4n5AKsuSsZsNP2sEuotGUoH6iQfH8sm8C4jvo63fu6httYQ8mw3nbCWmBCgsLBBMtLbfrR3gKEpArhhr2N6goXrh",
  "key36": "3jDYVmVmrzihrd9roTyooviUqhp6msZFg6xuEVhVezhU2U2oDQ8eXFAtUTj19i6wzyTvyWJYwvuP2PS2SMDQuMXU",
  "key37": "4QddckPCvdZwL2MkaigTBMPMMDEdFBw6YwFaCrAmgXMbhrhVvjJ6LyUoWYz3uR8c6UhBsrprzGZECBwtzPmUVb6H",
  "key38": "3J6iQpb9gMuNuw4ErW1CmAmgWpsAZFMJG2QzFbsMPWj5E8QHiGVH3zQvAnth63o9GU6ULJ7ji1ytjKsSamqLnjre",
  "key39": "5E6wpYesWis972H3SLgzcSGXNRyowPtqfVS3xmiTo21roDWuxSU1ohkCYvRsnXFJ42Ru13rNp1cmSJphdLa2vXpm",
  "key40": "631RQe9MvHkgJMvAn731xScoyyz7RiCZSw38AmjyLCCNh2hnCpfZgmbUBtudTW61S5PzgNsTYQUma1acbs2pFmeL",
  "key41": "58hJ58bNe1SWvMdKK9quPUR5Zux6mBxzJ2R8Q72JYV8FCf8K5ttZLqQ4P16u5inNdk9QgmJVFFk9zP3NexdFb1A8",
  "key42": "4FuFwUbpoSAFDE8DjDxqtXmBf4fwg7y4VGzBFbXzDwqLTXraM4hAMHnFAoLuRPSZqk6NTLNPo1dD3YkraYWVAvkH",
  "key43": "2cSNKcgBC1TJe3wPmRENJB8vcGnhzkpr6fC8JiNvpJ8eUuk9y2SniBUJd9c6mZqLfGJQKVknfWMYXvvNV9ugvEDb"
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
