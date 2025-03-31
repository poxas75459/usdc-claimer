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
    "3nMWq3qZPAAoztEwWayNqk1eUDjBFTeJY8zYT9Gq4LPHQa3CutM5dz4YKKgXByNNVJd3sHcz6LQc1NZnY4Po4y5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vaFBGC42BANpXhS8qkgtcYhzWi6PMoPPNprf8zwVxk5kKmoh9W2whamsNSisXFSomenS4iycvTjBQSLTYYLrZes",
  "key1": "5qpkDN6P4n811TFk8nFVGCZ9uNq4UziqQCfARHBcJT7uE3zep1MBHaeSKAhWCqHU5qEUbBLv8A1arhQ5SvNhJ6gW",
  "key2": "28ND7jcyhHuECv5AUVwL2gBjYzWvvBdheWtTVPXfhqqdMPaLDTX8rqEhmHvWrCGJppfUXrCLoXEkw483KfGHFY5G",
  "key3": "58ExrvPM7o6vSCeA3wsSnz5YinDQRAHjR96WPDozATcsiEeLAQSbG7thJWQPysw7wRkZogcwgu1FSSYeXbembtb6",
  "key4": "5RQMT7ECoNjXdVMHqK6wPLpjLyZu63VW6y9HUsUBSEKU4haQdoBH6Qv1oxHCvBLibepxm9odP7vmNZchxyYbj7QG",
  "key5": "5cg6xs7xVQ8sNR6fs54oJTVJ25Mew1NZt5XBdMjULF5ayB3Zuv71uYpvYtwiYCf4QjWDGiF6zbT16c7pQpvHiTak",
  "key6": "5vuJLFPtdqQjTrGJivAjXK3unYEj7Xrh8QYirzP6tatowu7rRYFbmNj5J97zMhZBdaXsz4nPuzgc8XXTd4s8EyU",
  "key7": "3KPK8gFbHkD2yz6d9sJWFabErMkDzM6LmomksBt7zcuuWfUfJUDpip4TC7Uot2ENf2VRaShporyyawYLeQB17zKC",
  "key8": "2i8iGk1yJRkTiq7ZUWGXXgjFEhc8r2bXYTrdTSTSY99wgQjb1aGmLWSH8ZbkpJCdTSg1bncURLjSKMhAsihqqqLk",
  "key9": "433jRPNJfxND2pDbsqpBz13g5qAjYZezcou2oCLbgGLH3fi3MnvBzJ59TxNPphN8qvM6hZcgrCrMkEvNPM6oJQgs",
  "key10": "2Ta9dJUsrAoK4vn6YTMbVJVq89jRkX5wnaeHU2UXwW55Re8oibv5TydCesjx7idJnWryZeiUrwkz5FZHBpadpusa",
  "key11": "2w9EcHVcpeibc1x9vTYpVPkfu3WpwSNJnU9ikzot7vNTgciue3jbjq4FDEsqtEv5HKhXkZzUkdi8NbnMcGvHcRCw",
  "key12": "3x8wNcA9cag4nWRwdtkDKhxcchR2FyTjvgb7dsPXsgR9WTNWyX96T6p8tLHPaCfReBMC6jKo6RQhFaV7frrmTxiz",
  "key13": "5RU9ncVGZxZnGfhDdWP2BP3t5vwGVjp6w2tKGdSaUDGUJVyKwRUdBNGDfbffJuBVcrk7x824dr4bEzZCULyz31dp",
  "key14": "2kMNK6epKXGxJmfnKyPxXprJeTth9CpPYzXe98cQ2mrdcgxrihYLpr5bmM64R3KGB4GCzqhqtoX9SrSLx5rJWPNC",
  "key15": "66MuhmyWh4eTsDfBS5rgiG3sfibzXFpQcnh8LR9Ydq4e9V8gBpe3tWfU7cQiSPcr3X9e1PvibwFZfaS46k3xY3wV",
  "key16": "37gYHQcDUPqpa2Qwia67wqY3AeeKhuig46e7mnGLkdsWUxDRha372HPDmevmyvWDdRncjaGGhS7aJxLXVUR39VWj",
  "key17": "5eDkcSznfk1gYPHTJNUxXin4RR1xHWWVCLirpyAeYc4jUxE1ZfAU43ejjx8Ds7TMARP7RpbA3uRU76zC5uNVph4P",
  "key18": "3gdj2r3eqwnhdqY7E7JKpXFiYhb6Cg4zUrcrF4QhnduJDQtmuebDaHSPaUNKarpSFZw4jj7aCySQCorimttcz1nr",
  "key19": "45bGqE88yr3WecuEMFpeUcQ2tvaDpPc2ZNUjCJr8rd7MzHpfyHqKv4E7SjyMdrZsT53SN4n6m68KBgBAZ9CPfHbn",
  "key20": "4gryTXccX4U3maXVAXwwX9YhHMDSbpEhv73fro7JUxeXDnkf7gS3aazCanMS3E8B1ZLLE2DsiCHAjsJVPYf6rxY",
  "key21": "2mvZnx4N41RDPcCuCQoZXi1jj1SPVxnXRckoTghvuE6GnZ4wT5YTjuU8EuBZqBvnujHG3CXp1e3PnmWh8Pg2dVcN",
  "key22": "3Pb3TLNPyxEUsZWKt8DqQT4JxF2pDNF1wPA5tTThGSsMcQLWPpXYEi4JpQWRDxkMTmcz6ZQbQkUway6dxwK9mkUn",
  "key23": "25byEsRTQe2DZvSF3hXk6LPB53hzUxqeQpt6Rp6srS1kzP8Ms8tNcZ9PAKz6k5pmvnSm8ATSWCBFz3NbnSmhyAv3",
  "key24": "4noYuVujTEdSdNYfcNm8kDAb1hicGgbAGPsJu3pAnCutzfZuVAragDxcFUzSBCzgDEFZ6tZoEtidtRTzez1YALB5",
  "key25": "3hqL3QTu51gG8VeRhYDyBhC5P9iVmXqWKZixyJNvfKDygDUFcQHY6xtLGXucY1zKMFx3r1DVLLFRb54G8w5kn2Qq"
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
