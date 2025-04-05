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
    "22MLsTyx7uAJFRVK2ckKPzMYS6cE9FmH8fy9N4xYQVhdTwbNUiptXuBjcvjRTbDsiUBotJBNJtKMrmZjDAfy6SP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2mPwEFRbHgJA9gi7Eby4UebuVsy1HWdopD2GSEKqsYpVoCibKW9d3jLZybwnGERigKuKwKDop1EEdkwv9HvV5e",
  "key1": "3G3rFqhRtxH3npvcg9x6pijrBqTr2N5u5z3xqtM2crVwtZMLsAnjr5sjzkZSrFX8DNugEFmsvKCcKkarNynyXShS",
  "key2": "34we7836hAYudHAZFiNysa4jvrkGPREKVTgLsA4napcrSeqHnHdh7NtjmubPF16bprNV7aRJXtyPbbJuBSELkjMs",
  "key3": "5mX3NizitWDAyy3JeUgkGXQWPUVM8wjPh1fv6bhAWSZJAzcnJcs6ktNJNLScZkdrbzmfo5XmBUCy8Lx7x6tTupEm",
  "key4": "2daucPs9XtNzCmNixUEmBHibDct5zyFpDYS9RRxzWC7mqXd9KAcJMmieYerittYyJzayKfR57cCHVHSYnPaKvu65",
  "key5": "3YSN11yjbYKN9vsaSsygaiLGDUWpySScWRSH5gsZJGfj8ivqLnHKyacANRAJMBYGc7f3inHBSN3Q6hRVsbeD4VdX",
  "key6": "3eDTad3dGKEukd6ViL21KTP8TaPRmaBBewmPFbwHBJuUBTryTcMrUNhGFN2kZXdCvb9mG1aELQmKrzLs3Nxm5J1t",
  "key7": "3s75ehP6AZ7CT96CySPLzJGB5tKrD773AUfg54ChyoeyY5FdFozTs5ixowSu54H2F8yMt5JQ2xoTGQFCq1tVkM4m",
  "key8": "UAnrtRSuXWF9Y831PB5dVykFLNNHWtfkosyC7XmTbR5kcPNuXc1QskHVXXDRvp2jR87XZn2vAsJhVtvrUz83UkM",
  "key9": "5v4yafNDi9eLxRLbX4hY7dZqG5muhdFsszNRMBWrMb4awCm4jrxiMWCzdjQyaEcbVa8ijdqVy4Jk5J68M64yMAiT",
  "key10": "2C9AiuV9oF4RR1FaZzmwsBSsecZAXB8RWkjioP6qHh8epLH2iwyriTdL3ZcYkNw5tJbToCnN5NoEhw6q5tCRQ3R5",
  "key11": "36nt3Seaqa8jZRSmmNFomNnNCKBCb3XgBFTfB5oMuGi312SzAvQaTRcfTpSoU9rvPM19QaRdjZLxa82MunP17iQf",
  "key12": "5WjAcvMyWHg6jakT6qK1ceNjQA3xmXybeESyFgFANb6L8A4jcuXqLM1uqypiLRbotzHhGz5vAxX9ZeM96GcRBQ1P",
  "key13": "ZyKY95CE3hBrqLJ5qDXx6szeF6wtsFuTTyLZ6PZYTnaC4mAjXUpbb9Sz2jw2FXeJCHw1hCA9pjBFBoVppAimwFh",
  "key14": "63pZN8mJ83p33gvgJXESsFbnHL2YJaVLY3ZS6bGYYHk4zxSucyhBMPNupeM9RT99EZdjYYQ6VnXPBPMjDqUa3tdf",
  "key15": "34i1gnuoJsZfNZqvfhsbodV6wJgj7kEtLmRCmzvx5DdpwU1g7sc836T9KZUZNRPRVdDLwMBqFJRJhWHfsSovUaaB",
  "key16": "4k1iR8W4dMtzARi4nMjAEuijZzSdiUtBBo1avWTN2jgotcqVnScYvTJx1kzZRtKDCLLnY6ofJSWSY5BsMshkrDsN",
  "key17": "4hDGqXpyRE8NJPhVLnWS9u48DFadrFMPKjufW3rJ59bQtWsxJKichxRBFyRyrLS4b3N3txTkvRjHUBgdS8XdLr9k",
  "key18": "3aJ6hqx98VZ2NpEM9BbQpKFjzEo3eRoiDnQCuxr1gVii6WGDZ4gZhFS5jC5gcb6ySb9ymqjPtDh5LB1ESr7t6wGp",
  "key19": "5EruA7xso8mf9wcE1sz8YyLdzzUhPmLjdRTxUnbEw73dXrqdKvYWNXmbLs9wUbmMK5nzZ8PZ68K9MX9Cu4QfwZqH",
  "key20": "4onnEJfMknF9aU9dmvYiTmkijh6trZB3k1ibARHFvV4KhY3NoB3wut2G6rhUKowvtoU5K2wr7L1LhLLyX2ttH5zW",
  "key21": "2CDrtotMkLNewKhmDXvsh6BppNLyMuziaa4jsHFbruycxWXgABeLuQ49LdGBkTfGB5fM28kPN6ogmPp8DwBqPuRn",
  "key22": "35rxfwwpUtrRCBxRMN8fco7dZR2yBc7aZHaWwePqpPCATqUk1JjM9YJ14APLw1xCpjJrxoqT8VEWT6TnoYUXbJeB",
  "key23": "2Z3HKTsUMKojp5AVAYQcizoEUkPDyeC9vgEqcujZTnBHoegEMk7kW92847Zm6PG9d1MRiyjP2GyS33YKXVy968r4",
  "key24": "K3RZ3fCWwAPSTR4Nsv1KFLtywGEXScuxwNQv8LAMPcQe8vErggdu9pq8pgEVwVZS5saRvSHK8Ejf3SFyNL2v8wj",
  "key25": "2WufvMTCaFhjn6Kd9xURaZeSL3sMH2McybdC3JaqyQ9CAfNvaJ7Jgm4xEmGVde94hiyCE8FHwUtMiQhbQ1yx8VjT"
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
