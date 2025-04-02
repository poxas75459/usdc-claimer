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
    "45TRHc8k55EUTivxL3fZgqYR2UFieb7HH9HzjUhouVEMadrCnKNtahcbbugFWmSVDT3rNR2LR1uax5tyhXUS8sh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rCnaSCVSxDSi2uyqg61FKRM1BY1VYidYHnVS5t2qTg67RzcwZEtkY8CNwJa5wpUMikLHnEDWc7d3HXKaNUKPGmh",
  "key1": "4MobzVzMYvSCb6rt5m1Edynxhpo88c6yerbiEnTqiG6oW51ofHsQuJsgQmLcCKReNh61YjxUsvgLQ8jQe5QbPyhi",
  "key2": "4qd5ewBtfX6Gy3aQ18VWX5TQ6LcXXm4ARkxnmwhVyAr91mPGbTb7sR1owrVK1qF7hUG2aLTViuPmVHTd8comgbyJ",
  "key3": "2w4s5Up2yR4NYa6UDTiiXhFgWHMvA9WjTmDt1VicEzdcXS4qJzn3GXxktaczX8kuqLtZg7VxZGFk4gkGNGf3CUyC",
  "key4": "4BknGex27VPZqyoGTGfodWWi6Wy4eAMj7iciubhGpkobF1V6MtR29PSmV2sVQZUf8D7iccQwgs6YX6C9fJppHNgW",
  "key5": "5mJf8R4y213SqiQEvovvo6zNsX4rx1uyvVD57wJjzbEuovgQHDYVXkv2VQQYeZavbRSWey8VaxdP8uzN863GrbZx",
  "key6": "3ym8YRMtZ39MD1LwLx7oxRZyn2nXLYAggDz9xDTVo2XBvJPWnuM1rx7Ayn6BFvS7Lpm5bSU8tM23J8Jyu67YFEs4",
  "key7": "4fnD2carLJQHWNxs22EbYQWLjgW7Fy7RKWqC78SwuQJsUmCrAf7fipkZSQZBxxrYn8kP6EMCftfXspmSbJz2nv3T",
  "key8": "2MgeMhyNFXCHZmuwRd2jXkbG8xBfo4Vwe9JKkKurQaRaTQrhvfibq3PDmCHQQFfk1dyvH7awNvhrrdCXHBQYaC1F",
  "key9": "2FneGgzDtRRhgs18xYRpe8WGKq1JRibxqm5CHLuiHdbMeh5bquRUTT2oV3tmi1LYQwFspx7yJY4NDdHfQobA9x2q",
  "key10": "5hKFhhMCuCt1xNyBw3a4Jg9GhMFhgxVrvBJuzGJrtsVehCKb9F2Ghzo86Yv7v9jBRZVhRnJz6N6KAbroPocfuBBy",
  "key11": "2xEVr92oLL1As44AXjhBTjMs1fQFc3e1ig2hrpnjwizwJ2vhAw8RvkqHfoo6Dsk2asfoYMKc6wE9L5BTDSUtVjU5",
  "key12": "3YpzF39zi1sGhT6SGYytez44GSjHNe25Aq9vjPXVqDqaRfRcZaXzguB6byFnhvo9zbNL842QuLJXxt1AuHH61UPB",
  "key13": "2i5Kx1XNbHjAVLsLWByJYNvHfMXJ7YBQZVfTkDeB1Ho1DPXn8p7YXQxTVDGUvhoVkymPU5vQ9w9r5p4DEB2yPYud",
  "key14": "4qH1FVv2hekfLAEZwe2CoDaMZiDo1iuVfSqCcJXWi11vDqwbD8GEhjKXmwRH26899vCQAbrnPcNuRYtHtH7Td6wU",
  "key15": "3egotGvNZwe73aokWNFrJrPp5eFnSpXCWXgN3P8GwgkzehdfWTPmQ8UzL7qEDWhnZzEVfTWBvDk4z5oyzqMFmrzP",
  "key16": "geuYgQpepjTbwULZjwRHmo1otNrgLXdhBR73Yvo6XkHqc64g5ZY5MxbYLjuDvz28XMrasetassNboYnHeQLYEWP",
  "key17": "5GHxKuFuCC55qjiLqtjizbCdvNffej6oW7XMiT3Wi8yUeEhdFZkbGjxV5SDDZntkAzo4HrqPgrPh1vzc9aofPNV9",
  "key18": "4hhyWGimFvi3y1EvvRf1RsbdPcviP5RDvfs8QfGjjqsLdpUUsqPnXqixBFjK7oqpguJys6dp4oHWrovHu4ADnfzy",
  "key19": "5cwW3iNMCZwjGrkxVbrSLk6wuZ7jhy2orTZNwDi5Dtu2M5YgNpb1HMSAW8Wsz9upJnNdHiyxs2gYmC9QKAYznLzU",
  "key20": "36eQLSWx6AsLirEcNEVgjes9TBdbPt4iowkbXvFS4crUrCvTqfwETNmEoJmHCNckYTudF4Foqa13cUPp1A66UH7W",
  "key21": "4JB3P157gKH6kNVBak78bHdiVD1gefx2nAcdSPYGH7fuNHYWfWStXeGxLC7UbfNBSXnLjDLeSTvV45NNipuVXZxH",
  "key22": "5Db72xc4KABb9W1qMPe2KECLt4vKgdDbaxNB8WseqahkD7vjDw3GDX9FTKZ1KgSWsaNE8TrpyQvDXfqu4x1m5Tg4",
  "key23": "4WL12NzqTomBT8ru61U3251zRnexYaty9rqgTe4mfNps559DYDZyKRvaPnL3KWWeW4TRCnZV8r27P4hRvcQaUDpr",
  "key24": "5PhYpCcLShekqfupwFy9uBvEVcVdW1YedHNK6iX6bFCsVRcGRkTMBGpnVtrygFETqjKSvGnHEDzQ165msUHMcD6F",
  "key25": "3sr1KPF33GB3vBdo3Z5yiMXzoi4HMTNJ9s9n8uSUjM74j2E1vHTCPZLdKSpbLSbs8w2ZQfUp3gx2Lby3todU447s",
  "key26": "tP2Lx3yd5LTHvEMt7SevzYL9n3LVUxKvxpiw7Ld7yLhC72T1wbcTc9e65qjWD2MaEpRYjhw2msAah89FJKqiP6o",
  "key27": "56MK8azsLjhAsdPBEmrmtbCuKRLZuUqYEEit2FWksG4h89ox6WDzGG33JenFyZtMeU3aHZn6Mc4AB6Bv3HsBjyJP",
  "key28": "26kbjbEdVy25Drysc2VwfCDWvjQquvRopKgtADYGhyRFFhiXpCe3fBWmbdYvx72kNwTkdR9Cngn7KywKcXny6jKQ",
  "key29": "3KSwozBszE3sicbXbEYSsYLtQr6xWBisdL4AhaJTj9tiH49RzT5zPnw3qKHht6ydqid4nJz49vfCgCMXivjQLeob",
  "key30": "4KZVDf9MSe1kH52SkfpSzZ84AEs5RA5bwgbtqVCqrawuY4PARZNBs4w5jpjiPSUNFm1XYoNKegBnskY8wo8iini3",
  "key31": "5q51FPdjMHH9qNwC9ENCcVcBuDua9UzXdceAzhJLKCUS11Sq8sqE7KdgXVhKQK8pdt8dBTAcNmv2mjswzK9h1QEz"
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
