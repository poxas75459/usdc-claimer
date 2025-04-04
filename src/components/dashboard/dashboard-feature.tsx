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
    "5dLxYBehhyRAtST1DdWhn7Nkf4T2guYEEvUGuBrm4EWDgrWjvPgZhmkqciFyqME7ReaonirQqAvSPHxCzoN4huZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gy3us5YZmUKn1rBzb2xLsLsSwiuqgTHSgqd4gVEchcqtkuuexeuuCjzn4RJAsFuRVe7WqRjc5WEBuqBKam81ksW",
  "key1": "2MjsocYiQw6S9GakRPPwovGXPJs3HPBU5ZAuK7HaKtEv8s7W9L6Z4zbE7DLF2sPjz1g4RW9n5DCd5tUbbNgfRMhF",
  "key2": "5bx9fPaTq6w3SoyTmUboPmrwmjn1Xw4qVeeoXSWcN63HCEy66LnVRZcMNq4MXQxDFCPQhPczvCDeZRcq967pDdRm",
  "key3": "4EZ5amWaxgWEvyqUzZWdXwnh9piaVaQtQ5bh2HZZd5EvNMBTmDXwJhCWUDjE1RCUuFibnPpcbruD35fRL55h8KJt",
  "key4": "23NcwWzcGESZVvQMnpt8K5huzHrayLugqt9wRyMsWVaoW5CxbwfwEQtsxZL8DUn15j2oH2ovoj7HRhNuGmCqbYvR",
  "key5": "29eZz4b58gtk6rBrbQGJs8aJvwYDUvyi5Qv2hSCxf6kTSUpKKhcfq8zJZhB7CD1ecg2WwYSwGqqHhdKG65XZz6MB",
  "key6": "4BBhGD8TEwgcRVNfYDCQQ1PrSB9bWmyhY6Dkw4XFv66Ea21AZPhq1twpb4K3SPnc1n7u2LK4gHUw97N23xhYrHK4",
  "key7": "2FACe4wNEvMTvasLUrAy7GX6i31LLnkEVdQcZ7tyJ8vQ9swxPkrDzQRZ1YdFnbLohWcZ99rSTcY8PenYnZQj7qfV",
  "key8": "44bKwWy1muXWh3uF2uCFdpgmeu8dP3FCyszPzxvQEdryU11jAseb5cuH5UMfbezQv6BNaPXAqLRPWkXumLm9NLPq",
  "key9": "zR6GjRaxdSxD8D8JBy92gXKGdaoA9L5uQ1E5BvtejUgTQm2QWycL9xNWJKkF8JUUyMByrtyGVWp4Zng9mnFkaQh",
  "key10": "3Ciop6xzeRvvUnyzZjcceHVYBtNdVgcwiU84MUreyfFKh3eEKYJoJqRjYZt5otZrzue8MARQhAdtsZqdNkUwR8FW",
  "key11": "2NpfbAxpHXGw4zoZuFe9HmQGYo9nVsnkZaEMowXFPF9JU4wBtnLKUJVCuoMELsyToAiC8mW7CSnup8GkrhM5FWUa",
  "key12": "xP8chdypkxDNQ9igR9y2qHEdBpBqcgQmEo4bPTJBLFccmmfHAZrNSJnPhn3wzkc44ogKExCAAwuxxWmrQzULSUS",
  "key13": "3qHgQQ31m9Rr5bvkq6XFtvfinsuW29pFQYtg674rRZH2fT22yDiB2tcrGkuTbFZU2qk3AEgYwm18cDWKRVJfSJys",
  "key14": "2S9UFXGGaJNtoKUYy5UyxaeRLcmkxVXsEJv5gFx4TTWgjNT1sdUu2dBwmuHJaBybBSCK2LC5zzevbE6mVZw9ctBy",
  "key15": "3K3jKhMcfb3NE4ujhHUSrjffqDB8cg375HFzm9vMdgxpMuRSazma2RacaAcksHANWLGbYsbmJyzCUGx3ELUyVkRz",
  "key16": "4pisqL4wJzH4g4mNvAaZfaX5XLUQHo8MfyyDexkHYfw99WzXztLA424xQu58s4NJgZXg6hM8a1mi3NDuwGbEtdhB",
  "key17": "VsXXsQMByMVATHg4RXd3JUZCuujAB9AcHnwuJjLZZ1zUFzmzrYjGDkSBf7xMetj4w3zgN13faCeocZRVxuTBLJV",
  "key18": "62YXLBBzWYcnUJtwBDKNw3aJrB93RfvDLupjhuWGZ2Q1VSH7GdHipL5Ef76U2JCovjt33VSqf8XdWWFQkoBipLBn",
  "key19": "YyZAj4JnH64h2AAXRgHK69fs7xjqzaANEeX9qKJyPcUyKo3bxgo2KYkRsTDvFiBJiR9AqfQLdpwCY4csBY82eL2",
  "key20": "2fzktAGfwQRNeT9FMEYbPGjVj7pQHmZQdNEzhnpNHW349BzxTz8Dsad2TTckVbtR2JEH2RovBmxBrj4mQfPU8GQG",
  "key21": "uboxQV3rL2wQ8H5ZYwKLTiAtAtcvnmpHxZLBS3RmGf4hxkNqrn3Vt4qjwGg4yPW4eSETU6PtcdLGcbWpTbv2Uhg",
  "key22": "r2hEMD4iZLnREvhpK9jvVCXW5GzuDUbBYYbvuUpbZMpAz9frksVvwiBZWYm6y4ARJkNjYKSi2GZNcjVytdXz9Ts",
  "key23": "2jV2xJNSC3oWoGqJcYjjBapDR3hPmsBiHkUWSqpkHpy9TrKRsHEXCAsZFK4ydPE2LeJNocQV1LP9aucBqzy4Di3U",
  "key24": "3anEsE7AjoBHEBNMxNDkzKZmWKm3m1wrZ6GkEidXou27FToik3GKMDL5W7nrf4v3C4T8o12ovMEXybJefyoGEUrz",
  "key25": "4kpwvi2FmbsMZo9CQL4m4Ejf5RmwkbhBzDXcqUii5zhfqpJ7rCibtTmauA1pEJafP2xMsDR42Z9x51hVkPGaHkcH",
  "key26": "5hhVTr8eXX5sNJdE8BrFsMtGW4fa5dQxpXECAcZdcmFF8WbYzYUBtfwY7U9WCh8EHGVTBNygCqYmjaN7ggHbymvL",
  "key27": "3UNirH2oZs6FhX3Kb6uTnvtXFAQqTWC7LsJzh1pnGasBgCVbZLJfo2MxxLpn61ZHGfuqV7JHSe5ZDsknbqAG7xey",
  "key28": "K4kwcMhBcz7cGd99A2aHPfM4XF5uqC8wh4sEBGKLenDJZScAonMfUVQLW6KsjTv4G5hoLpYmijiGz1GaWb7JWQz",
  "key29": "5VpgxaEqnhdKJwHV86NKGMVv4V3wwHXVauzpaDVcRdS8ZcJp5RHVfswnfpMxnjvbV3JqykGPwCgeAfP5e7SSxQGA",
  "key30": "6729RG7gu8ZkqATcbhnxL912vZ8maJM4az7N227jMGtg6LzUSaFZA1ofWQnq8gJ6zXuiUoZPfTbhdScfVtRLJjwQ",
  "key31": "5zzLPq9BhyMB1x8H9zWYq3EMZPiZrCVJ8ewfHx2rxhJQscG9smCPJK2vnuYKUmRBYbKWkDKRqZddNuxAwLfZfunK",
  "key32": "2HRRgLRBy8VofE9b7CddudjD6WR5QGUNodBnG3qX7oVTxt6gW7PtGf7d7zBEgf7c1Wwt9HBfPHweaafp6Uja6EzM",
  "key33": "2EakmoZp2RuEmHPPvrvSiAVDX54aFg6BAmfVLJJQEkNAJrLnevewVD9HFBdnBi8WeR3eNVdzb27rwhByjopUB9f5",
  "key34": "HWtSrXFr8sY2hMrn2z4e18NFB6xUp6kBkTQPCedWry1Tbzh7p4t4JgDfNSdhitR2KB5K8gMfEF5xmvr2kM2DwXZ",
  "key35": "2LosQ1hoTUtnMYuWr9Vac8f1vkL7MjSC73K5sAeh7PsHuvvecoXJ3wFR3iLx6T9qVGdBPWoCk9FCszE3zbw7qC1z",
  "key36": "4p1sHXLyQvzMpAZF5LxZhirUFAEBkCSZHSYdSZ3a7vvp53ovz82JBEcNhDbTGSkBnHtci4UnVyNb1peyH5Cn3moo",
  "key37": "4dNFAR1msusXvaVytLZgqFq4eihmLUDaWp8duPDWvPrE4oSCuJMSM4Lho5VtaoirRpFQB76PMpkDwzZyCsTzbhNv",
  "key38": "2V8aqBSyLErwevCd9hnLBK8Bdoua6LD381znyL1if9NXrryHDNNzpo2RU5gkqCzMKRRWwRuTfZvLLLiUXjbaHphf",
  "key39": "aYoVGebvRxdqWqAvB87PrBTExy7SzLRxJZhhbCW1qUDzi5UspT5Hzx9seYRxh1uFCq3tQjfmvHSyy3TZUb4i8uL",
  "key40": "48kiiWZKHQnHzn6PLrZdHszwsvSyJhRM5d945Ni1U8Nppz38Q2qV1xDGb8ZKaCqKvWgZwN9z77wVy2FpMbTKP23d",
  "key41": "42ie5heZfcGfADow2tNr9ebXwkF5YQnHn48wK2smrvpjP9oZMwqo2WrhESAFKQ5CsFU1bpShdvKetjtiJdsYq9Ru",
  "key42": "3B5Yx4dg2x1NvFJywuyhm5DbAfBEm8nLsp7TkTCqWVmyANwg3rz6iSrqvmNzRpvwg5BoFSYKEzb8jGvix2URDsBz",
  "key43": "4cGytXKMHpWpYMawG45yNfDdPEgJ1Gvm8ZHeV5Cifm3c81zNMeWDHxHFP4qjgYXE8GPkVKcPWDqEMHuWBc1j6jPH"
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
