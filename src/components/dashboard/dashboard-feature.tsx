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
    "46BV6XJNrpTgwoYnbnEfXnTSR7optPjyLyLtkFb1sa4YzXc9zLUqxxDyX78sPQbdjPjigegLhhG2ynSF9fGggsXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKVxNWpaJJmqzT4GkAM3XvsgT5vsGCcSBe7pozwvdifkRgtawTVE8BkJJJELMbz9unWvNn5kaaMaiECEuprnQLM",
  "key1": "5zJW9YyMqSaSFCg1WpJGnFPHTYSEozrhndHaxvxj8pwoKsB2rzPCbv37rVePmy3XumDUHqZcMbdLdohqCbG27Sjp",
  "key2": "2uXXRra4zBrjZjz87VaUCGrggLgX8aL26z9uPShaeXb2U4mqgQkHHDe2aXmSx1sMrXcpZ2Gv3JD54d4eyxJ9m519",
  "key3": "5pWa1kN5Y2rXQeaGphheNR4TEgVK7g7HwTNaVuYxeDCT5wkXQnhptonodWjyztQ8ko7ZCZz7A5sX1BzgoRKJtbho",
  "key4": "4Dc27yACEEQVj9oRFxaxEa91TtwjbELLg56WJEc4vS7B3rNsywzMwQ7wWYXtWBrzYY2sM4yBcFGjTYM5kQEQ3MSr",
  "key5": "2Ytq2k1ZnB97tAHoLjGSSQ3kADXtWQQp1qzArth6FuGTpQjyiY5wFcf1XhCT32fE2syzMhrUpa3gBjNwQvDEcbdF",
  "key6": "1Ru678kp1nXTPxfcVm8sLKy8xkD49Kvy4pPGkNp1Z5NMcoohZ4wpVn2n1JJyAEkwgjBh3LE4yxg89q996ysrLms",
  "key7": "fM8YqSQh34VWwee2zk5PXkE4jHvDG4g59nrcMHAxBGzin3kVuAGLQXmd4ioFScjotNWvmk5vjghKdy5LTStkvjZ",
  "key8": "2f8XtmcpiWm7QcDrKSCbuaYvuj7rRiqeALQ894LTavujMffN9FtGScz52DWetXFRnTDrdCxJMMApPuANhPmsGcV2",
  "key9": "48BgYs65z4ysbEMLQR7fMzx91b3aVxVnZZWEH14Vrx8XcV4urzRAEszPgmgUH4oaetrW3T7vE6G3UGhDdCmDMbCL",
  "key10": "josm76tn1m9C7JbzWMWN3KzkdqHbgcWj6u9r4ih44vsEUfWu2X8QbdLXqqAWEEkDmkzC7aWEjkKhs4wT9Yaqf77",
  "key11": "4jaZNgnsKGxH6eQSBx2ctZ1KSKZJoYZRSgZiAaA7cReC9DtbPQkG1cNwFJdpGw6kbCrntgfGvou81MY9KSKaQoWV",
  "key12": "2Ccz3ko36DZLyE8mNiFm8mfLpV8VCuhPe5wkHoB6HADi8HnGVZzpwxXW3ELiYaMW65aJxo7JNqDN4PBgmRgGApSZ",
  "key13": "3pTuLpL36QNU1tY6n6chA5UgWgtg56tucxiKEDdUTYP4HvhwxCeeb9y6TBJE9JBYDVTS3BEhF61RZQVmYjZg7zQw",
  "key14": "LjSGuWuvSv1aKjec9z5Afz1bVX9kpuMnqqyye7K91Ds5CHAyLR6oXoYqF8N7mPf3oD8A85f1bYoSzX8SGTUFKtf",
  "key15": "5Yxfap1fntz3FDseR49NpyhSM3DszsMjT9GfTBGA1Zfcz5qXgKQzWnnS1BJnpHixJ5SVCpZ8xmENACEzPB1jExMX",
  "key16": "58TjmXcK8QhxB1qvWMPNRjhMMQNa5Mt52zJVNoYtTJHCiWCXkwqH6i2H1br5VTNNmmK5MrXrKqVvKiXATBp8QZ9w",
  "key17": "4WTGdXsAzxN1vtf8uySGwCdGwbVqEMgDiWyfy1BM9ApLrk8WouX6RLAxmwb59ALMUDK6NVhVG3HHgp3jEgw9QbVn",
  "key18": "4bfYdyutLH3oSx2FhF9LE6DrTjbzEG3rc2XkUct1T98XwcZmDUiSQPEh4b2Z5eH3FVqu5A7vTo19HwqBpYzHoBEG",
  "key19": "2D2HnktgXm7V7Mgh6ExsPot2dDUKMQnZcsgpL1He5Rzu2NWf3xmXjuQvnqnu7SRToftmKQyy8FosgUAth9N2UQGx",
  "key20": "3vRyhomJXZdr5UuDaN91q4qaxuG23fU9PG1DEVf8DXoBCAZ6Jsfxw4VpmoXhs9YYDYLZikUGQkvny7JAHxovo2EW",
  "key21": "2dCqRSwcseSd69vf8KfHPzXgRktEPk3UyGqH8y2tA3abyc2PmPsw4nFvAXYnPXAryA6uQhAcqe4Tvk8xPj4NrF3E",
  "key22": "4kcpoEYUdqTQgkWYB3fpem5vY3ttx8oP4RLD4dRwUdcAGtv7L4ZtCH6r6mvhJcCvsPrVdRHSQWyQivEKvw79eK6S",
  "key23": "SBKKyHcMbvSmqbGHhkgAGLN4yLU8fPmdjvMS2ehZ2tPKt6eXVqq16okSF17fzfBhSozXXgsUpW7bWFhvxKGrXqT",
  "key24": "3HZ6zNxxWePbg1n1LCeUasGKL2GRf9uTZrsofamGvtR8LSbApLbCpFTbU7hChFkuzL5p1WNGZ2zJWsmNpzdRENzN",
  "key25": "KkX1YyMbQHiTjGFSbs2HyReJgfnSAkQM52v7S2y6c6opMyvHcG2PTuMpEoVGQ5mChpCi1dBnGLjmQHiASnUZq9j",
  "key26": "u4ChE9bk9GXmtnXLkN1N17NhbBfQMvQNUKr8Lv41YuMcFuD5TCZnLpbD1ynkgZNkq93DK7yQBsYcGwZCv8JDDBr",
  "key27": "56DnwLuxWoSfroaJsfmYgw7A1LGXWnPJqffduzJLZykKqsYcQsSACGGqBKptGLqPtoootSiaZpELFj4xds3CXVLf",
  "key28": "5yJ2qSnxPiXabPn8e4WUrCC9SXCZC8gRqJ8517PKHpsoqjcyUGz9arqeZJZ8JZRpNBJ7nhFKvHtUw4MtqmPHw86h",
  "key29": "2jBDwNrCSHjkrDJoqtBSq2ZLmjWrTRQ8dsr1EYW9MAWCfxp9ppZooMyhaDvhcWsvCGwWYn9ivMtqA8eue654uGdc",
  "key30": "2hHG5fqEwPuYHrUVpKM3VTjQRAGzz2VvQUvPEe5sLR4iSd9YTHmjLv5XXFNTadpbpFYenNAXJ12JPJEqBDurmjv",
  "key31": "nxR2LYCD8pa5Qw9LZbGm22pSw5M9zyEGjqNMmadRdapqbbDjTxTukBoSdZL4YRHSxHYXLG7wYVmzBQrmB2rpEs3",
  "key32": "5kXrTGWvF7jCPnoDr9eEa4GUgKiT8BBBukjE3H4b9sUGyfsF34a2NqBibKRTffUzWZQacd6xsahTWMZxJt6YWiMM",
  "key33": "HMmv87nGRiUY5aZGD1ydw8yKTt8Fs3x7vTXgmvedYxNrEova12deGKL4rfsBHF6nsRVdT6z53ChH7THVd6pJE5j",
  "key34": "5KYQ8A7ttgWnwpfuiT8svHT4S6c4tGdbx2Vme3J5kANKcXud2YTq9Hf4wBC6ddfjYNMTg7GX3gxBCEpRrKeiSJD8",
  "key35": "51mDKV9VHYKCcJn5cssF4v8DtBr9oFMnSm9f9PrgiiZV4fQR9zeL1g697NvQUCxBT1wGoSWvChL2dAcyXLLkqRJV",
  "key36": "iTv8SeQJtjAnWoFhBuXqzSr2GpmTc9aPjD3ejX9jGqfiBi29jAMkUJZdSS2jRjJJXPCqEEJUL9PqTWDbhYsXPiW"
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
