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
    "B8vM721F8pf2JUuv1HGiwfrCShc673n32cQziMhNyLuVsv8h4osdQsCCWHNSokB9NHFy8vYPprUzTszwVzEiafs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHJMj6AFgW55qgGEZ3hRKmGf5hpSNzyax3Wpx9dqHwJZCfR7zqMVRTdV2TsfHnbpJr8c2eyNZezQsLw6fTgX4oE",
  "key1": "2UgUsiKwCLE6w79URGipkiZQ4KmxosrbN7GeRKCtWRJhhwALLiDYCDCdGjNvgnyXQRNEtD5ALJ3P7DzdZbVzxBJQ",
  "key2": "2UWUWbqbNgoF6khk16pouJ4yhUtT29NgCsRqMgg6se2DFmbjgStGJzAkPfy9681mCP6HKU7EZBPqtJb4cStVFX4F",
  "key3": "3XZYRTyciA81jkyb4hfoommGJFUaPsFSTTSDPtBRRqGEFvqY8BGprmswrmJvLz6nTxyjHgQQ4A5yuccQwbtHSsfp",
  "key4": "2ECRyn2LBSWoGh6kYANtCnpk47XhzaQoNjuLv3BqMoUJExm1UMjb2qrq42ptdeMrZ56n7g41zvY7oUYY2ehSYRvo",
  "key5": "XQgcLYmUzuyLamxvLr7mA5Yn268F8JRnGUuR651CbqFTAy9Uy2aUJtitHZrrtvmWzghFJaVzDU2tq3DJSW6Bz2W",
  "key6": "33uSRckvk9dKLFPpPmAd24hUCqDpi43e6QZR18oapqKaqNSJyhTyu6SGvxsPVM5s6377Hk1Cxnsozf6U2Jr7i8dL",
  "key7": "2STwEVS8YHiEme4AubGho1eNSUamBrBYwxMXzwbBMaaEXNyF5sBJd79BNEy6zkwCge1ScCEujaNGmyBg9FrnKex1",
  "key8": "4iWe7Voi7cXpgRZtrHDDY9Fg6ALS9M8xuY7bQVnxxnZe5qsaRreGFGhCJsoPbft7QeCQFLY7k62RhQ7h3jVvVmU",
  "key9": "5WSuwZ8rezdj3N8ixm8EwWffjuUXtYfMGTkJZbdiE4JnwVVz9C8q4wYMnLT9LA9E8R42kWoH894CSYQmXzB7LVFV",
  "key10": "5EDA2vbpS8AzgqzDzeDhzBo9p7WD9hMbHbQ5NEWD5GZVmiA666UVi2LJN6TerT2Mk45vjHhBMxLWWL15nQVMxqs7",
  "key11": "2Q1tVxxG6qmKbR4tkACg1yYhsy1xPpFZgkXZncUGuq3Agu5binV9mSRumkf9HsnBddjhgqpjfySx9XDo7QpuaZn9",
  "key12": "4Q1NWfdnSUZuGhsiCqREpeU1Q7ncfLgSBb73Wv5w2B1YeTrQA7cgxwsGppTAV1kgybJznkAEHSe3wxVLeEqac2nL",
  "key13": "53Vn64kTbkyKR6DZg2GX2YJwk6rveD2CkZGr5ziBg1Kt8SzR5nRHnt8sn439grPHtAwHy4YoTCZNT3gu2SUWiu2p",
  "key14": "5uVvfNktP2nkS5PkLP5i3k5Wgh864bGSCGwnytrntiGu4rCLFCFjeMwwJxVz35XpJdjujeZL6xXgzi7P8Rot9RuF",
  "key15": "2tE3g9nR7xmLaBu2C1V2MsnxRYjdVgDCjGEkfRFFatRcaGPaQ76HNQx8x4FEQt6Kj7tbuE7jC5jzkcGjQKqVF7uA",
  "key16": "3FpLovAYbfhdMGgUJ6wEdRwHzi4pYBnoyGiaNXYS12iMUab67HfFpx12yAzUDDS9qhh26GqcDbMMzY9hGgsKXFiQ",
  "key17": "4gmsAyVR5cnLzp6VExwXPZPivdEZCybP6QDorf8vneQxygJfCwbobnUdzevY8GBpRLr2EHj7nhvuS73o4b66aHxG",
  "key18": "64LCmY9bCGF5y1V2dmFjRJHTA1F8JruwN4PUYrYdwbEdCekJkQse4MxwRygyFtnmKX1fRE277gTqsjH2GmkoEv4F",
  "key19": "4NU1qbkt9yCMhw9oGhd489cqdW5WeMvVD2HFgbhWCBbqgB2cg3xTZ2UhKXs27y32ZyV9H5E3yMUwtF1BgBxUZa6S",
  "key20": "4QmfAqrPC72bKf7a3mV2VhUV6eq5MGL2v8G7pm6NPw2E8faLWQwgNEQkwN7sB6USYqJMXLxDNh9EFyXcQZXsQpf2",
  "key21": "3xJZSdQgsHSupAwm8aQrFYSctFfeZ4Azy5gyG2GGRhruYzqBuTcMGk1YNt9qDHv6HpB2VD9BEn35Q7TAMbvyYMaR",
  "key22": "5bqXZJDQ3n7UF9KSBjBPCiCxJocgLccknADQfdBMwcL3BTPD7fZbNs3teXN7oPrnDT1vGdtqytPzq7o7t9FzXjzg",
  "key23": "42rkJ7frJJdDxYZLUZfU8qHjYKLuXQVoYawkDVFuABYoT7tmKwbpry1ATWyfkKREFfLX9EMahyiYd8SjEUFf3Xtb",
  "key24": "61QjZHXu8e1rQN4J41FYfSLVhQQsF8w8cpTBSj5f9YZrC1Fk7xQzjsp52moC2LURUjhEpaqEXNBWeCdR9pMEFaCt",
  "key25": "125Ho4WAFru1p9YkFEbeVP8QZd7xWBTzhnDSCwzs6kmQEjcHCPh1yyMPezirzFRPhFA4XKyEyUKsU2sVTWaGK1jb",
  "key26": "2nY5z7gcjQVjGjzhL5qLMvgGoUZHah7X7NSPpjMAuzYXex9ZupTpQAU2EmU4M6ZXRtsqHYJ2XDsWSYXABvFvauxG",
  "key27": "5g4dcBgVqdLG22G8hNvW2kaNpB3gMC1cKxnbEBHQBss1XLmewBNtsrBcw1xYpKcSsvvU1Fznr7UsEFCbwDuFprqF",
  "key28": "5wX7aMtyCYRcVWNPVy3NxgKhz1rt4Y5d4zcf84nWHZBfciP97JE2nnm8zVAAR5QGEHUu9uwyVppiWHpw7sUNkPKo",
  "key29": "MgZFeAxURqunFk3gpmZg7pC1MwHBxYF98dFhwayu5cPqsKG1WGbmCD292okzV4Yf9xMpthkpJH4LtcZAvi3W3hJ",
  "key30": "4kH28NCtP5wxBCvzydMJCcopzt3cPEV5CgGqHYfNVqcw5ZtdjLM5ctePSvUGQVZQwbzBfeRSs4nzBHSEZrGiVvNK",
  "key31": "4Pic1UzAFWvA8fNNPF1C7sAbBbdHqpruwA2h7oZ7DENoo4akCD2TrVoYgz82temD992HChJ7D8dfFg1rd292aFzj",
  "key32": "31pgujZGeN95BEV2gYqvgHaXjgMLSgBvkp1sb3AVMPHWwoTRWRS7CdUBdEbi9RrNCCJieNVztvckdjVXkgNdXyWb",
  "key33": "FxSJsSAiwUyf3U8Cuop5XYs5ArqvdLNdYpcNbpW6wQHoWcZLX7sATcUtLBV49VYmNHnSjgS85FssTNn4oPqexPn",
  "key34": "5awQca4UYrc8wKxmRQrkuxWRA1rMfUqFadYJaZwMFZKMMZqJpcSguptJQaGsKiSVSFTQsACzmzSKUH6wAYtEGLGG",
  "key35": "3Ai51LkR7xQRpKFtbfdBPZkzJLhFo27qjMFaqUPySfKujNyk6aWP5Nh95dghAThh75dp5hk7xtNKh89yuE1uCkJR",
  "key36": "JG2LUNaLJnHUmjYspbpZTB2KtrhSooergGNUGxFfo9Sc1PmxaMX77N8zqR4wb7yXP9JMRhLDAYZvoXntoKvt2wi",
  "key37": "2ny7pujTKM9kjkaFbdP6GpaHgVyVRrtgzWnpYEvHw321WSNwJbFEoQgUwtS6WmfVL7PmunF7WS6ifC55fotW1Zxb",
  "key38": "5rg9pBE7PHZrNT3r7DbyU9kNVPLphs8vBNva6Diwyafnr7mmM4hb61qHFkwgftZBCBwW1hkD3ZgneFMMageNxyP4",
  "key39": "5Ze1j69UjdPwVhyaoKnEa382mZ4ZH7qr1EqVZ2rMd63FDg5moePhQVrhfoKL1hr3SnpUgi1q8BdXWXu69kCNEUDv",
  "key40": "5LSSnh8ovarLobJzpBjjfdMNaa7t8ZjRjzLMtPUSXvrMjAyNRVC91MVYkyFQgwsc43pTMwqdiBFKkqsBy9XJ7eFF",
  "key41": "2R8hCUR4n5kvn32MUYGSvTxrGnAouwgSTvDGGp1nsr3hfh3hJEuFZ6SgPLDFD7C7XmBdba1Zr3FJCJu5tThEBoV9",
  "key42": "46BqprPMTQQv4wrdgSBqVu1wRrr6BYCNfJL84xEjWpkRA5UiodXgQH8ErNKYPQ1HrLBdcK9gcSvqh4wV4jjWiu1X",
  "key43": "5R2TogxR3yucstSABGRFzRQPyF6UuCvhLKhV9i4okQcvnbAgbEPtg2m9KQ8k8uSRqGbUG1mJ5PgYCKeD6VJt2Md8"
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
