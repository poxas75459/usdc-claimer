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
    "5ZoCmKnhxFq7gYNSbQ3jXHDdTgq8RNaPWjYGaGZgLgAGgREuVgGV5ju2uJEecWC9YEFB1uJ1wJqGDHyxjku4QbnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41y4aGn8v8FfcNkbYMPjndtijNX2UCDiufRdNoqLs3hS3gatUdqzbndG8mgW2KWHLoamfStRkJh2jVnLmEDttC4b",
  "key1": "h47vjuxQfyxvuKpMi75UmgzbBPuborcxbMXZyNn685FPg7gpfjVKVXiPgRY1A2MwT4qW3UeK2jGyQxYshfR77hy",
  "key2": "FamaXbfASfzU8i4tb8pNrQdpiMYuVxwtqPx5kbnqwSoKQ6d6qQ1EAD9Qfi3Hx1dAYbe9heuiTJP9cC2dhwxZcLx",
  "key3": "51bHHc6GqBZduWHMYrEn5rhafDpjqyheXnHNSVFSAqEG6TmZ4A8xF92NXu4ZXyri8vSjGT9TgxkKQyZfyinzM6WL",
  "key4": "5TpEJ1trgbiofb881pNGseT1d9zSbvGVWraAWByU5y39XQppENE2MNC5jUcBBYeMHTt4EFkxHoKVh8vERqoaMm9P",
  "key5": "3X8os2c8WM1efymrXGt4FPUvS64MCaThdXsuviX8Xv3WULEVpHqUz4mTPnAEPF8oJHyEJiEYZqKq3egvdttHsNwk",
  "key6": "124t52YGeJf9HtR2MMSQGo8cGnR3ZiVti2X4ZC6HRb7JaSVAgdBJT4SfyvrWQghxe1BLGhggDfoSTGh97z1BwvdL",
  "key7": "3E52XSZnswEYLJ1AMXjUKKuAWiZVnTssLTER9cxQQAd69nqvPMvpwZwMEH6ax7CBSgWZkzoQohMrj9qfjjM8iBXX",
  "key8": "3m9xcUNfQpFBZTF5VDvRGjGiNpZqeycGWXHaNeEz7WMVug8UAJ1SqmP3EXqefYsm4eCnjywaTi834xb2Q1Ex4Hmj",
  "key9": "31vp6HxGQVdU8XdWRH4Tu5LDeKhiNqohMaXqgqAePEozxn4L9qphbtuGgw2LBestTCPK6wTr5q7dq1WMF4DWovUp",
  "key10": "3ueFpGLax8L5UGnDQBP2mxgJoiro1GsJfZfSD5qXeumBrXXTqENcX3zeHDpmoVH1ev9aM7hRF3bYz54tqquSj7fY",
  "key11": "3Eoe7AimQHWnk2cMtVFub3bx6tzhik9VibdjwtpDUyusee9soZ45DfS7Kdi3NXUXKnNzfKjp682dF8ec7Zm5T7EY",
  "key12": "5My7k8e2Zg8xk1AFhZuYAMamFHY1P3ChdbBC7vUfrveZmU27y4mn86k9ECAGowX9PG3o1AbkjCcqffns5HYXDaHD",
  "key13": "2nsSQWyhfLeQC7f9ufowp4cxWbG8mjs6ig5kQszfcSBP37w2TujG1kWrcqyGcSJr2cADYmKx8E4HGvMoSfKjvURj",
  "key14": "25GuFbEbrujoYUFCgQqSujwJVzzdRwNd7iRmhKQDJqeDqgqEGHTczMVEuUrBwi1UNVKkGhb7yL4nrLSRy9vRUbyC",
  "key15": "xKLhuYdvZ4G8yMpsFJKbogFVSAXgKWPT9h55drgYHbAKj9RB5DNeXznLx9cfJGq4ffThGrUgF1wgnbsn4SWL4HR",
  "key16": "2eNuAUBvFEwUhYT8WNgmSyLNXcMbmpmTdvarHhwXky2HKgdp7Z989FuHheHXTBYZdeWTbb1NePJ37TRD1TMBmgcK",
  "key17": "UDdG458PVfnTvnJUg4fomH4iGQsUyqJWWFxa1spvJoNw9nxnyZP5QKUzVrZqsm59FgCzUsn8YorKmVNHmMq9kUC",
  "key18": "58t3ub3bNCbHq4UsgrksBR8ooXNiP2htRpG6kG6cN1ZHnz3ydLRpHYabcjjcUJZs2VUTSSeSn46HVYLNZ143bUUt",
  "key19": "5MGfsSH7kEmqz6KSsfbXZwH3LmozAgLtUQZkk84z1PGAkimWqGuL1Z2w4HkBqyfyzPw8zfNq2owdsE9fQD73yvyF",
  "key20": "4MciEXmuvXjdre5fvekkNQRFtFo5eQvWhNuFmqfwBG23Z8nBZGnMyauuwDFPcC6MkqjLcd7mEmWCUBknngbdJpeL",
  "key21": "4BRdDvpxfgXiCTEP8Ypb9nBtoMm5vu4dHJzLaMGiQiv9q9tq1smJDi4Sgxchh2MJGfTQ4VEVP5oKxLhkFYfzeHBn",
  "key22": "2vTuN6K3xbLHT3TDBBEZfCAnirRFuwQqeAPYGbXXJ1UkSBnBaZRFTNQwpREgbrNbZnHAotvC5Bjo8LoXCop7rE1t",
  "key23": "44P3CzVbzLnts9FX2BFKeiNpxzJRtsGHcgRZmgbwfLrFAjbtQsc1SoMPuB2b6ncyGTTNbBqsjLxqKJt58PVNQ1R4",
  "key24": "31uXyhGDVsXCT9HD6G38iNJk4GRAMi8jFzzwti8yTVFNNTXUJY9CsXzy3HqzetRPbf7qLtjBHZRg7uAGwn6iJC6e",
  "key25": "3k9hoHEpf4B3UFFEC7MuNwE5wLX5aiwSQKKLLMyiuR7x8Fc2xtV2GG989cQfHni9GpcoUwvnz7UNHccWTxDEWyGT",
  "key26": "3xHMXfLB6u1PmrF41VHiHwrhFs42GiiZvuQoTUp9DwHXVTkPHADXXzbxNFFcGUsY84dzazRKnzEaocrdknbSwccp",
  "key27": "2xv3tWDxN5VWQ9Yk1huejAqhUh2gNLAkQZ5abKsN8Bfkdiayy65tFmyZwxR5JD2nJUceoFiEt4x3gUTU6XHpVqHB",
  "key28": "tRQxnjZ8Af8re9Pd4FtTeYAYVa4GXNKMPEVK26NrY66BJf4U7RSdRCzDY86U8s8dkAVTNGAPL62wyjdJHiXHXqq"
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
