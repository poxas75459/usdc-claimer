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
    "2v9vzcdSB866bBCzPwjMCFmMKff3gYQEtZ7hQ4piqdnEDM6B6erXXmsNkNsFPEFcbD2HYYNXuf6zUqaK8BzpCj4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaFer4KNxod831xaNAr6a7Es187hwv1KW1nTzrjKkY4zz4YTrMNyDAYKgKWcuYd2B4fNHHDzkGA44gkrrGrLGzJ",
  "key1": "4eJ6AUR2bpN13WstTkPQV86PEoiE4dcryn3YegqFsrDx47n3LGeyWrJN5g8ytFq9G6chBmDSZv47ZZwo43t1KvX6",
  "key2": "MnX1tJS1UkxaR9BY5uVBiaUzHhLBvtyAhBAAwcQxMKEECEUeSkdeMaSFcHwtj6RpbP6QnjaAj6GmJGrXmCZp9FS",
  "key3": "3A18Ay1wRGGChnudsZGZd6pCX7FGRGt4vMgf4j5XdLh92MKzoXJn5crN8u18Nj3YvVVBgPZy9DyMDD6FBFoLK83R",
  "key4": "3wUCTtLMK8tY6m9nGmJnkKp43iGEHxLMMsBqsq3aCCGe1f54awRPzv4cGCybuqBmipX1y2bvkio6FWfKnTUGbXth",
  "key5": "nrGGz6kW59Tm4dnyDyKiN1dBdSsZsQpEzoHvuLYmTKAeGFQnN9FhgqBhQgJ4R7PYeC1wyUbK5rKwdmns59tUDyr",
  "key6": "4kEmePDyvq7nxJuSLonYbDDnQ6po12rCjdYDn2L6vsx6nEzHMzMpB78btP7FcNQ6FrXnvwYG7nCFwV7enJyaXSpn",
  "key7": "32m6aH1vZpyj3jExi1V8Pc93ub74FCqfKMtu1SedybdjjL2A6rynmBphFYcoREPeS8ezzemKQd3GiExXerjixwAn",
  "key8": "2QHCNfBd5un4r7YvUX9JZgQKpre6KLMM9BGUZcK6gutg1Nxs775idzWMG1FW2WHdb961iUR7ZyuZXndsrzqgCqx8",
  "key9": "U9FXFRi8MuvrrqPybyq8oSXrDhDLptML6eETW3grppJF7JeBfJPGNcjKC8ZcEdcuvnSUEcjJbLW4Ma8xCtMWBWS",
  "key10": "4SERn58EtH1QHAHheNUpfjif74WbDe4YpPMtR2Y7kFfGKET4BAHwVur7Hwvv2oiWVkaXumiZvnUh62MmEHfSfpgT",
  "key11": "3Dw7uuJJo13fJ6PPw6Hkq3xjEZRLWtYewwXi285Wv5FaZ2Mh6fH7zWhe3QJp8U6xAzc5xFo5AUiihyGbfCNLm4co",
  "key12": "3NY4PQ1vc1ujLn2cYmnDqqFZZZBMALSNs7wufGLmSR9ztmkTH8dTXeE4JEDvwTcUKX8WzWdQvVoQYrhmrUhJ5WFh",
  "key13": "5xs8WGUvPBcwXcQpkQHtyTZsqDMQFLvce5WMfemaS6ExePgTvhAf3c6584L62vHUNZTUcrGEzXVtbFdvPYPFUoNi",
  "key14": "5QJL6P3s7LYb4FLim2cHy2sUxmFxh2hRf2pBCHkK96w7piWcGgttFY5qzE3Z7CZDSpuRcrEM5GdZX1WjNyt8iPkZ",
  "key15": "3EomRKqbENnAMzDWRVYe8xPe3MB6kJByBQDAu7LwhcFijSfDT4P2SoHDorMuR8LhckM4Fp1kd8qZ1wYCBx1qXMYE",
  "key16": "3byWDR2GaHmJNYjUzzkHG5g6AgbiYjyGe7J19zDneSJHtcoSjS9mEjkc4CqxStZSpeQwFshEUDRAyfzhPi5cqFjr",
  "key17": "2bmXLkkw3R2un6zpEBnXqEnVjv94AAPeWmZ26U6edKYy8gWkMeun2wTV9H8ZfHRSFbp7rk33Haz7G8BSCvs9aSJq",
  "key18": "35ewaUzbrz3oW168XR7Hgi29aaG1sS16hYkrKsvicf4emJSZZE2JDBTzMRtMy3XuUGtdy9wVivqUiU7ufPcfqc3i",
  "key19": "41ivESFSYrYgRJJTje54dLMgGfgxutMyjKLuHuzhmm5HkNgiqnDGoQ3Kjb6NuoFjs5co25TCX9w4PHcHuJL8Kk3S",
  "key20": "3oZLZkc2qvVPixepJenBjMkq1s8Gf7QjMKsJXczNKCk8K9xQW3ZEPAU6N7uhdVy1CfrTkuCsg3ZiFvAydUfJGurr",
  "key21": "4PTnikvbXewVjQRNVu4aM2ZB7hfDyeEAphFtggwfohhquWyGA1xLj88yXgDzns5WGJxiCkKCjh58bzTpGSH5aZNp",
  "key22": "MtkRzKXXEnSRZ9ye5H3p3x4HzF1a2zcE5uu2hr76XYjfvNnweDjVef2Bn5RUKYpknVrsLCK4TTSVz56wn3ABfwN",
  "key23": "GoC96CZc2aFpnyw25nedKxPx9quCrWchvwToj1Qtonhiba2EwTjKbx9JshKWb4tmDvKkzAKXwX1qavtB8s95Cr3",
  "key24": "2th1TsB4ucXw7NdgzKijc62M9LAADtGsqV9kJz6WmLSikgmLytafPoPG6KNcGWh7gbSJ1TzA37TYcc762UGPwZE5",
  "key25": "2RwBu4pQDY7uYrqgRkLgvMZLV3S3TZVX5wiV89jEyCWs5Mhbw1e5BqGzujoDZHq7chsC2H4nzjBfhTVmWqVz1MsY",
  "key26": "RJMAbfWuACrjUhG6UEptoGAY8fUycJCZxuwNwvV3dcALxiZCTtTSwTh7Pizgm38E6DBSjvozzBmF2H2ELC2JPv1",
  "key27": "3ySt4mN3ueZztUfFxAgShy9wrB4tyS2AjjCkNMAH6ZMhJMo1xMbCKbLPzy6jzLPbVokuzpCnvreYYrVZXH5WxHaR",
  "key28": "67eA4VDtuasabvM53yESZeDLxwN6yyePaoTtXBxxYaH1VdQyVbYPJ6vFCfUrCkraXFt2nyjzQFqSauVqV9csCepE",
  "key29": "hkbvXNTzjQJW9oumz6uRnfBYPBmTFTTVxLsV2rERMWUqNaGgSEqK67NgawYR2whZ2LdtGkc9uSUj1uHeWVwnZox",
  "key30": "fdmbgh5CqZXdSEEGkp9nZ9YSAV3eFEDt5VcSfeRvpQpguTfVi8LApS7tYePMd91QP33Muhvu16x3Zi42Wv2sbA5",
  "key31": "5ec7cKQwPj22twrnkLz2nJcn8LcmvJDrLycAs3RJBJ5D5WKXkTLjaUTFTB6eXWLxUznMEJL4ipFWj1cTKhEuWonJ",
  "key32": "4TGbjbDz7nNGNh6oZBfTR14dCWcFdLfMXKmVpSZ5WzjugAy5XZu9PvcW7hqeAKsNssXm4irHZut4etj1R8YBRnV3",
  "key33": "t9X4ttE2X1s6h96aSEGSB7RPZg4TS2a25ju5DAvv3yateHxijWQJuGdF1MW1JGKAWzNu8FFTGJz7cMuYTcGoKnd",
  "key34": "Awy4BDmFCFDuBYSU1or9ZB9thXcTpW225wTboL6s8kScwjDyvvTGMiyabt1r23JdXtDZjw62wpVht2GP6DZ9uCh",
  "key35": "3FhGgBxqmEqd1vKmrbfaKXodiy57hRHCgTr4UmrRKDUrGUuTRjxKq9ESu3oZ9yXTiJ7HRGedbgxCu5drthDVo8Yv",
  "key36": "4shskxDkkU17Ng5k8yKCxZJxycvffBJJ2VsakehjLnkk2QmhEU2wvA6mMUcyiJ5KXwbfDxXdMBEg98ugb8uYgR9j",
  "key37": "5kaRP7f7T4A3au79cjTU6FZY9LKBJ2oXZWeq2SWjA7CSE4itXt1Smmpx9C9m3F5zjbLN4KztbxXi5d3CDhmeX68M",
  "key38": "5YCtjuFJCjawUVGMo64uWrG8Yj8CxpEusgaQrs83A1FnoMHv9WMPDQiSP6sN9EUMVenSEexiHJftT9KVaSSMK6QX",
  "key39": "4yrF7wLcFExGP1Nou24puoBXEk9Ajys7P4siZAzU19fLmQC3Kf9RqWkoUB76wisSNxC1thoGkf7t8RCudxmXKJxS",
  "key40": "rN8zKfoF4kvUaaRC8bgTLHDQUYYGrxB5zn12PQGYrBWqju1Rpd4nFRHprB3Vy6z81iwntmfBBa1BmQ1vYk7BXF4"
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
