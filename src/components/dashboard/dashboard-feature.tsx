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
    "4RMNEF4TT4M6r4VCy1tru5Yy6BhR8yJ1bN4Qwzf2h9cJesDwk7JDc9e2GZzFhPR6JkNiQWmVp8Z5E8B8UrdyRDe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSVfW9qCirBWAN7e2q1sLFjfUDV97Re8MosibSj3c7KqBK7sRmUSJhT74A1SQAXR4TJNc5SPRH3qwjfNqmHFKQ7",
  "key1": "1gWY4sQRokjGoHXGt4sSZ3YjzSjZj3sc3FL7t6gKDae7e7pwZuPeRAdTGfToGttCVbQV7LpftCfJQhpQy2ZwG9Y",
  "key2": "X6HSeFRChUHzF5gk1DcAFnk33phh6ngAh4UJcecNyqv5bJwzfpFX9ViLjMNffNqyddpMiwH1iCW574WQxUTJ9iS",
  "key3": "3QCPE8HN8nudBE2VXshZHndr7KjEfCt45afughsD11NNG3gKaLaz8oghr4gs2wbu3gU7kSJiw1yYrytQ6gobjk7t",
  "key4": "2U9mXJYBHQxECb9XQ1dmuoVHeKvr52fr3zWovehfLUxyESiBQghDYyaP2ZYrUL7dR6Gw8FHajZK6SBvnxq5giCp9",
  "key5": "4zF6dma4tdafBsPXraQVcnmdiEeufnu3idhyvwPr6UGSNqwHHhBG6K8Xab8Lxm8GpbZUdiSSX7tZ6tL8Z1toVVm5",
  "key6": "2oK8YgjTZtyizgU3bF3uobsVJwicpfg6uBoAMhgxcw7D1DpZeK4PCzJpfHfs2Sd8HFmdstyHvMbZ4SQrcjnZp3re",
  "key7": "65vTifo9YKFSjFzfCuoH4uoDM1p4n6j3nqYv2ZcJ7i1KMuNvWhu6cHBk25wQzpHBSXqbhZeU5KbFh7PxpveRrBJk",
  "key8": "25HLw5QUnZDTD4ZhB4TUC3MXiVvMDn2TtjZ9a1SfPNTrHR34P8BQe2m5hbEF4Pdaege66EpntFdHPtzarvbf3h6i",
  "key9": "55UmRHuM63k9o75j7MRPTNMnJoGR7XpUkHW3Px6FnkW8wSEeXKafZjQUWFjNJrMGnQXK9Y1EBD2R5X2NyVDGkfaw",
  "key10": "3K3YC5NUqMajjKM8MWnycL6ri9CcRSskcLeQxiJZHCvc3ydg53Q3GZtKtNmfAijEpEHEWyYKHxjNcP5Dskh7TdbY",
  "key11": "5StHSDFyNfwUAGEvoBgbCrujnWTtcjcZW2U6JMtwUxb1BJwfg7cjtqm3e3Vyzfn486vShF3BQStoMw6VEEzqMziC",
  "key12": "2N4F4umjicNtf6fbfU5cHKun7aHTo8ybd4hJnak3g7UkQT3iTXg278UAxAZGWGFQs6eD2fcGtiGf9p1vgtTrxv2q",
  "key13": "u2quU9nfcaA55z1QaVcZ74euvqazp6cJgiE5xD4prmGSGURjSTERDJUhUzF51VFikskuKmwAFg4pyxyt2Lq9KEV",
  "key14": "3LQUsYH3Dqw6kboNpEamX2ZSUrFmGBUqcV4rvYjmvFDKZ8yhVEyaF7MTJq939uZe23234dx1wRJfKcQxdQjCF1BZ",
  "key15": "4FeuRD4JnnLAmzDZBzW4eKNEnrf7MAFBRYccKNfMgGHyuoQsQsi5SDuZpUk5qvJ5irZc7ssyqkvGYKNtzTE6zWra",
  "key16": "3UvTouAEJ5uhhRQeKhfcRbBF819ecWX9TuCCSfbrmHmboATk8t4xK7NwiMRh5kStw4q3eoWWbVyxu87SKr5rVPZa",
  "key17": "3yge7fWY9G2CBV9v8yxRfbuBb7hpiQvQzp2oGroXd9viHx7KmeknSQAGKkRFDzYwpMHr7ccvMJASJPXAG8eDjDjB",
  "key18": "zSGBtUakei1AgqpwKd9iUEXysnX4XkbAedjSypKi7gsP2Cy9iiyqoL8ykiHmypUW73Ua1M2ZmHfPPYze9A1JP2Z",
  "key19": "43qbvUzE749YpqKAaEHHRtZcs8bKjou3YBv2k6J7UEWCGx5MUdyUp7bdk2hytAVHEnJQGvJs9XJ148K8vFEEJvoS",
  "key20": "2J1wJ7HYBixdvFYaP5VXPVV47MN36p4Eb9AUkfrYQJgdDYjyNLpcqH8s5twmuNM84yKoBFWNsRLHT6bLMdDrnFqP",
  "key21": "5mck4YA3KKyg3U5zbYrkzeDQXtHsEWYDjhDQp9ejeuREyYvpgXJN8qC9zRCVdY5aXJMLhf6aGEuctNWXqGBjk1R4",
  "key22": "5yxLEXtSYjtShhCoe8eUD4tqeaHyFzWxYjypcisWdVXszMBCjQ5PC8jhq4XkAU4fzYiah4v9p4rkX2zPFKd9ssTJ",
  "key23": "3xNnpmYY4WdEr1XBXxoPP9MoHoPowtqvVordMV7Mp1VAYyR5hisyRhwkBEQXrfXjUhMmFt43q2pgMycWYJK9Tutc",
  "key24": "2bKFFYuX3rHdFawZi2712PyK7GSruz9ErEFqAY4EEJoTJPWUUxGhsogLqWsQ8N7xtdT5NtavwsowkuoW3hMjJjeJ",
  "key25": "2y2sZbwoyb2F1bTW2FgL28MtFxLPcxCWENq4XvtLszPaEry1qp81dhbX9BcgZNLs2tos8rqjtDging5z3Fd3rrEu",
  "key26": "5cLSsaCz6vdM9NiZVFHDVHyezqq4bb1bGhjv4iVhbf1yBdda9khxpCJjM57zVwVnHf4uvpM7LgCJvFx8wrBJ9vvS",
  "key27": "pqFHCeztsV9WWLdVtq5ZFzJ4jE6LddpKAMdEmqVEUjKWourBjzVUCRkyqkKAgSHmGjacjrWfHNoAWwrLK1MntZP",
  "key28": "2oKSsWfdPhMZaCdCQ5cixZngZqeAmZypmSKydGY1BpF8hXfC4jjhpda1P8u4Yw4WPXdCLkpLDqJoknUMt8cNcaGG",
  "key29": "5Yto8wdi5oxaKjbaPJKzDweV4y3rAE99M2wCcFvgbMW69ZhkeTHu1RuikHbyEQgRimLK6EtzQkJa5ZxZGMb7ftSW",
  "key30": "2TWKsGvrxBi4AYWTGREduvNfUqLNBPsjRocdbWm4RawzurCjWrhjhyUvcxzKzr3rhiwZtMwMt3HnDxpZDLN2Hz69",
  "key31": "PS7Ae1gTFPcVRmgcX2th33Lz55EzaGj2w74fR4mAbnNYz3ZmAiXLUpYd8DhopL9CmgT4q7McDFL4zaWZureBJ3d",
  "key32": "5X2FbGW1syQ3t1cZkmhCn6gBLUETwkjRkHRew2HG1D5NSJ4db4zwpS7VFKe2CaL69qepwcRu1Cy37GgJKJb3gSgm"
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
