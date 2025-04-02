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
    "2aq4jTwp8r6AePoefZQsTN5bADkZgTG44DnbhhCBdjt1iatyUhnJj2dpQVTD5Rj8buT6wZ3LdACSWdjUAf25yrhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXBGuJmrszkLsm12gofzTkSCKy4DFSFFhukZXAGiXanDvZSE5PL74qjP5t2jXupb4NfrP4XsQeqbA1B9zRGhEJy",
  "key1": "4xjShYmy4BwSVLvaspVoRXfviMAYx1YQ8Lg5DdfvDurDKdNzBzyDD8bfhhG5dNkrYTm3TRranXq6bRrcN7kwUUSF",
  "key2": "RmcRPzXih24Fg4yutumiCQLcy32GgEZ7p5YmzHmFbPdKEbcKS36BvcuWANLPoNBuvaA3cHLfA5rnk64TM1F1dUX",
  "key3": "paqpyF1g3qzkTvu3AsG4AfKusaBYtBE39FE9iQixJVNvEVkoHn2NtQkYdjLpYCSQdG76wDcDSPJdi2tZEvEv9ha",
  "key4": "5Lb69sd8sHmmP3ZZjnixL7LEwYH1Av6JwSZBjrqKCc8QbP4goWdP352oTLSDxbGY2KsVi8BxAt6Xfna4BkwuBRnB",
  "key5": "3YvC9RozT3as5c3hGnJeqkuU9esNwcMyqQgCocCg5siD9PaxFyd9DYTi36N1Kfx9S3cipTJF4vVh737SSz55r4pF",
  "key6": "49f7d8faDpgoYr6hTDENusfw6bsWwNKCNrg3GZrbGLmsTgrJCcmSto4CiNHK3R6iMdKAJwFLncXB9PJvhRuCykWi",
  "key7": "4HXfPXFocrwg9YWscYbNroTtm3Tbieu2CxCKsizGmwjd6XR9fLfc5j8tKSHGiQjeM98H5KBsk34DSqk57i59omux",
  "key8": "qnn5AnUqZiqY9P1YcywR35Hf3PXehc7Dt8zJUgi8HaLQCdAeScsPaEyBvoVvMbijEhcW6thw1oYocB4w1mfY8Eu",
  "key9": "5hR6PDdiRKi8porWGN1q8CbTXQGz7pU5y68kKYGeAC5VYeTS4YJoY6tcMpoKKrToyunUDMUQDdyUUozq6stDR7EF",
  "key10": "h63RdrLKp6V2ceuas2FC4P2TCXyUQvfM2BGxVcUmn28W4vER9KVBquADVbUQG7AgfJMcB4GZ77Yrm2LcXt1gEdX",
  "key11": "45PqD8YpxmTbwJcyW6hL8dbu6zBCmy8ngmod8Lku2vijmiRpNpQTgw8vdjjXXitNWzgHLrBEFKRz2jbU2q2xRsB5",
  "key12": "25RuxTjMVigkv6kBTsvsHMJXBppnJW4ZfkzdP4mfvo8xqgGqB8EfSZYSLSsC7JKr6yQpCPE5QknSs15SoAWD86Va",
  "key13": "2ALdzjkHGMZFw9rhxbcKwfvx3jxPGKDCMMvqqdkDqDgNVHNvwrUcdTcYeD1jGrc2xdpUmK7JV56yiqNQEXHAxBZY",
  "key14": "47yR5UodTQoucbsFs7Z7mkach6rFKQZCtqpTBcFB3Avcnc8o9V4JXNHXVgJpwj4rfCvaoaHrb2n2EfoKCA6HRrsj",
  "key15": "2bLzLyVVHyu8SSL3agW45NZAMYdGw3ursTziMeNfge4H4yt3or7MHS5QAxc88HW4urhJt6qyGa9nVZhLSZarSmaX",
  "key16": "5s1PvSkJGRVer3GndcsuZ8jeQT9itVDJeThgU6KFdzsJod3Df9SL9wpEnqUuWerA4SrvBYP4qgSmCp4jYqXADR9A",
  "key17": "555WuAYZnS5hsiCbhLPWiuui7YgCeHSvtKWDpH2zY47pNyUnAeHiM8TL1QuYzDWeNBoeGheiMRVLYvdrFbza152D",
  "key18": "4pjpxWuPtK8rirym55Qfu2jGcaBv7337L2KM9AajMx3D4KEfAkTP9tjk3k7GMfochsv9MtgoMtCChx5SLkJiS8K",
  "key19": "CxNunXG59jB7YxTdriAQNHcacojMfPsZg7fUmZmB9GA8uayUMGPDcuRJrTZEQxPmt2f4pNMQ34vkt2JVhtNwNoG",
  "key20": "p5PoNkad7smMj1mFxsnA5ZHD8vGUVhPDuHAjvp8um84usxww6LUMfTHVPxCvUjVEvUh2TjMHGrtT7m16vXQV6T5",
  "key21": "4wjwVbKYbudZF8p8JgiN8usmDFWJssJmAnNX3mccFuFsx327Fu4fQbVMBVCEHGYCLXsrdfxhLthggAca1KaZL1j3",
  "key22": "5bFS1cjsn2454UGouHwgxvgizRpVPN7eETMgoPAPojQ8cp5kHdaaGtZp4KAznV6ZHddB5jDUgVyyVKGsoVPvUuKa",
  "key23": "WMi814LyZ6Qi4jPrynkv94nfbseNsLmvjQG1hi6jaSfik1BeGoqtMd5DNJ3eXoEHoxNPqPXXwAoj1HhNvcnNYbU",
  "key24": "2B25bCpNBXrS2U8BW6MEkGKqpZPyxc6R6vWaePGGJPPN2qhoB5wQuMJbM3eP6tcwJen4DL7emQkTHhH7dvAhMoue",
  "key25": "5Dgy3r75urZjVtQj89HRnqHbdQ43pUcv9Pn8wt6iQL5zYJMgrFLnmhxfDtcf7ZEyTXbAndJWxBWpod47YhfSo74s",
  "key26": "3SJKphSQZBKkAKK8qUoGSZdrzuajR5haRjgf35akw7AaFNFgRZrnd9F1G8m2kLfV8w5pvzE6UevB7E925RuTDhhk",
  "key27": "397LQtdmEuPnxyMzQxVCLDvXWPjDKeMXDfXhpMuLHPBXJURU6brNhDRpLSD4wYTod5j8M5dF6bzTQafGxBNA8GzG",
  "key28": "58rUrnV6cjXPSiThkR1EoN1TjdgZ1XjQpngGx2gZKWJfdiLuqwhpfwBj52Mt5xQN5iaqZWvgnK491JYAmKF1mwuH"
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
