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
    "4hgxELpG7iryFgYuwVpctR8DcgTC4R2GZSWfDvhennXZMXH1ZsUWFLnUkdoY3EoeZvky1KqseJH5KgZDV1UQHa75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X7mnq1xf5ThJxoK3TAQDyVSaUTnPRUhMG6rkB37ZVvUXq4LB3ZRppNwXpgZSUiMbWo5YjWcDHqnSZcAVuJntW1D",
  "key1": "2E9ZsLMASeXCwAcRLGRU1zudkzh47o6nWBs8mSmECaV7qZy8Y6qX1tYaUuS6bwaRgUsgPbWT9WGjCwi734QDXvd5",
  "key2": "5Vomkdwi1kQK3v28wVHcRHMZ7dgAAa8oZ6BadbUa784e6dBYCY3nTPyEJ7wtvwLTcAvrtcw6KwjSSkjXQtTdkkqe",
  "key3": "3XhoxsJ66CDWaCsY1rWZtGtVWnWkS9yc6nmkymJxxji3tkuqrVqWskJuxgqsKyHuxNM8TRYQxB9jvAey3CnKomN3",
  "key4": "5ZS4bpEw8G5fFdzNgC92ULL5CSV5bwQbPQPfkZNiD3FuDttGcvEZ1JTVV7WHg2gD5AG6cpN2x3C1F9XkQgNgTEfw",
  "key5": "58E6gaz9GzeV31MBeqJmK6zM4J2tXwPekMUUrS1qTqJZJLdsyQcnuue9TntTyzff3FsBqrw71tmjbynjFtsDmF29",
  "key6": "224ztrAR1sNq82Dk9JJQdCfgqGKqnxf5WVEyLwSSRiJqzmcxV4fve4BjAPb8TDcYgPp7imRAHMdNZskorMiEQWn3",
  "key7": "2XeQrQ2eP9mt6xsH88xtF2s8iH22A9jZstUyuWMQB19CrjKGmRipJyXYX5Z3nUw4GTW5JFY9ZD97VMMPqJ2LEg6m",
  "key8": "4FG1cibxpZR14r38w45YAt6QTeRBpEcFKwa4pbvw8QtC1qBsmM7cB8uhz7tLoCcbsgHAi4e4gjX7fNLKGmQeaMmP",
  "key9": "215bpLQyQtoa3y891GsGzEYNYUE6B7t1ArCA9DxaMPZfqYPZMG35atARdg4daxED115qEA1c2uA2u5maAbjCQnfy",
  "key10": "3K8GhzmsidAYTKHP2BNtxQTK5Ha9w7RPzFnnhqMPbdkGedYRRG4hZBYcjkC9BKEMi4xfxSDqKkzubEdNnVcVAGLz",
  "key11": "nC1Nx4VH4iv1HGyaj6WRCMw4XW1FYMrRiiBEpDdLFwwfNbNzFAQ4KZzbTLxhYgpCSAV46mfKfWcj6AbtZ2oqPJh",
  "key12": "5oWsrCsdSnNviRZ3fgnoZkKv5brQKfsCLbiJ8yFPCij2J2K1iJsdRxx66DbuVSnamyf38eXe82NUYTP8VdxMF92b",
  "key13": "2WZ5nCmg4ksHNjEPps15cb2Uvs8yEjhAA59DE1kw4c5RbAvxb435tzDjZH3vcbycvSp1VYXtVpinrNgvDH1qbDoR",
  "key14": "63tCuqq6bdG2Gciz7ZNKAUHZC8AkELa1vCkMaUKT9iGoobSbutabNfsfGSUNTfN64GF6uemyTeZpA3xccnVZPJwo",
  "key15": "4ECmyvuGhNeKGkt7SW1XSdDrnDmqZPpJ4qZH96ZT9qxFtbs4yx8eW8tZAowYrqpmk8QQH1MqxvFFvp3Ugj2qSWXw",
  "key16": "35q4ZYb8F5mBChiHMRSPHiotkUfKngjWYaQPyfeE2fyAE5MN6WJjkrdrFPs99jDNXjeHQE7jBVHeKXLz9ZF7c3Rk",
  "key17": "4kYydBjLw5edJ9CAGGL2KbiBR9dH9FLchASodDGbxQHpzTMpfwJKXweLkUkjSYszkbU6dYVqKzzxMwqxhj5KHUon",
  "key18": "21oQWmrVc1hbMDAgKBZ35mtsHxZGzMrTp21s4BUsx8mGm1Lo6eekEPaVQQiWta88TnkTx1qY2hxfRWxwP4s9ruWz",
  "key19": "9m734WBpeXfTPT5svNq8Qd4fM5eiWV5nNC8EFzEUCdSqd2wnxxJ2P5ZURKGD3DHSaSKwiAY1XV8jrWa6hMzzA23",
  "key20": "2Rdn3sxvKsp14vUf7C3GMn8hm1Du41He7UZWkEgA8eoRZiXtBtsQgeoHSvvaLYpRYcmhQ8xd8WzyFQHJFAifJhPh",
  "key21": "2dnTixM6QgCyLdSvKDdr6WqAokChELbAWNatz7qeA3ScsREtzWgZSwDcfApRx5TS8Xtqie86wE1eSJzieNtKzCkL",
  "key22": "5wJJr4yga7kjeNxP3pTS6aLvm56K7aQmY5YzdD7u3MjEX5AzGcALdAHJt1F6EgskgFAfeeAXdpbD7H37bT7y745P",
  "key23": "3b7XfbvqEU383yYvzvvfHX5ghVJKWfw1hiWck2DzcsFWCQSRJq3mRX5Y5u44mA6QyoRYYQ8Qn85XyjhKJyDgGB6X",
  "key24": "3WJrfrTiK3ccBPR98SxkR1sMn7bepk8iFcMFz7oLBTjA33i81AS9XQ3ChUKqFmka9NKjK5BuTaN4GafRsjbaoVco",
  "key25": "4dgGLRjHS4NLxutMan9BsQzwaWwg84BBjsuDRLKNu1ij9YFmtqJXffTjHVZ3EoGtizcRocPDxGQsxiRVqDHAN4aB",
  "key26": "4bXyebpknLsSkjqFJUEvz95ocKgrhWZ6JyqmCRkn7oGPZevSVzh5dKKEQkjMCHDm9h1d768mdbjeVnYU9X6Vb2H",
  "key27": "ch8BEKEyCAcQWyUxqDaxvq4dxJZgkggUMSSkLGNwoFLv7viDZReY8o2XpbXFRLi8RA6rLHmNSTKrdq7P2C3qv3C",
  "key28": "3o8AHgum8jR38nfTdxznXbnThSKV7Aj3NKGApTbRQVJ7HmgBN9gbysCfbZsJYtd8PtSrN95RZtTWpTGx75aZuUFP",
  "key29": "36EYdGiZffthqowTT7t4h8DYz3CxP8Y8BWpLuaBnyERnCfdjMJuzqGhqJ8beMxPCPVUixxzDwqejKmsdd4SNr9Un",
  "key30": "5QgNe8yAhKKAYKK2HM2MQacAXTNpe6U3KvX7bgUWpFRwX1VaU1Ch2VSmi74zPRYgRAApR6kZwctQ9f4Uk3W2cKHX",
  "key31": "537PNLGTgJBMpbGj5dRp31WeYW6aRACvW1b4BrPtNRsZM37t79p9pNAjgGGTD4dfF1hT22TirGhgRLVzy18MRCr6"
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
