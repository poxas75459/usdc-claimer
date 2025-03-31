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
    "FDLMghecEZcCTbSy2BbSkUR2QzNoFiJAhx5at2GysyJ5ZLDuCbeQASSDyezinsGMaZyif4nsKrqdvtYtwmVPM6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQvv3Suq3tqozukrbhJ1D51nvJemmXtCRx6v5NtNB42vwpVG7zkJDQJm2JY7kE3ubJU6Y3LC2zc8YCRzPp5me5z",
  "key1": "4i72tFw1f17V4VHFHP2xWFQaFniE9FrVdE7UqBcc7X7Xs8nbqDfS43JsmujpRNNds7bJS9BnffPPfTaNuvk24Y6V",
  "key2": "2jvw85d7yrBDs76kN9xQADU35v9RnAUvx1eNddN1g3ReucFSccGm46E7opNSD9V6rKomdjFZLMDESn7ua78iQGYH",
  "key3": "iUBBf3A13fAY3MAvPXPU5a9cSFhd8YJw4TgLbMa1QpyzsuRDaR4Qak8ZLuEvVuBi1SBRxgJXTWyto9vTChXeKW2",
  "key4": "d3WUaUsRcQyVjyaY7MiPJQ56XB1tkEsUSfV9tHNnU9gVR5da14ezYRx3jeqkejB7vGHtdKt5RgJ8smWx9wU66UH",
  "key5": "SNLSrAASppVVQ9nZsdgCBdDCoJ1UC1QzuXub9Q659SqVR9jZicdmxhSocP9ioLixnWuJh9XPAoRZRc7arowVFmx",
  "key6": "ecZcyiT18M8LRwY5AaeCsYRfTgh9ZcqfhCJZWXWLvkW6DwSkrGjDwmZ71FD8eqtnQsk7q4jwWM1FHMa4rRLQSSW",
  "key7": "4mQ9kUUpMQLH6FQvTnFnjviZtqK5dKDsTuHzH4jXuJpCpqMB1k3nAAYvfTPvoEW29Z4LbfCFpyoqiNTF1gCPNkyd",
  "key8": "49aMHWUwjFkHZWGFxX1Cb2qXFQbLsMTdBqAXypqyd8pWSRQ8iQpfnrDXeuq3Jhvq5vCdsZPLx2x2bocBQQkXgG5i",
  "key9": "2ZctCKU2zJT1MyTATR8xwGEkP5Q5cq5QvK4LKXTbprQxHKyKif7pKxMXtUrk5VrCAw6hrdW97JxBUhqPWuPJs3nm",
  "key10": "3QbtqQ6UAjN94aMackSunvU7zunrm27M79CHGLAmVfMVwt9svaqsVbNgzcoCbxYnJoetbZ5QsJS2ire6ovy5PjM2",
  "key11": "QAkFnDZpf1BPKubqGL8SkC82mLkLWjpTzJWkrMoLcxwcKyxmH4VzpCnps7BdDcQRbXdT6LL4CY7STuVFJnYKKs2",
  "key12": "4ertEPijXZ8UrGYgDKSrwFsEjwgmo6MrC6rtMGnQpFP2Xj62o8HNhB2noXYg188eux7hSabxyDpfgnhpt5U76vff",
  "key13": "5PhcZ7wA2uUtJQEVNaAoXknMszUbzK2ocrPSvkZmdbWhy3m3nWb6GuM8DxGLGh8vYCFn2MB3tEFGqkbd9gNPxBpP",
  "key14": "54nJAb2U1wugSQLJHziDTqgmyHjskZ7NYgd682NhZ4Dy8zjjZxE4ySqvZKXEK7TyDGpLZct7TbkrhFZsNfJjJf1Y",
  "key15": "2GVWjo5KnLrZYzKUHDUyypYFeMJ5T53s4BJKbPXLXD3dBfYJHQsEXi6FpNf5jKhm5KnPCYfycXfmesswWEpHeaPs",
  "key16": "4pznAgAoTjUVoDXetnEHAUaRWgyTN2dxiC8CGMMyPJJoywe7snEfeiWztAsua6hPrqTJrs2jYx6Y8YnxJJnrFdex",
  "key17": "4qTUg5gVJJfQtpe1bkjWDFqB8L9kCVRoX3dHYKjtpQPWbaQs4YdNYyRhkzZ2EiEKGdAnFygCtKxhR9mbNyzws5oZ",
  "key18": "tTGDfyawX2xRcqqdr72ZcgScqVRGpyPkwwuJDA7SP6gzDDKow7DkwxP8yHzLc6gwfyjzmHyBB98qhY1PcEeUX1q",
  "key19": "2dPyEehvTvhSkLfmz1XYkzpPXwaCezWxx2N1vRtvQ8pbP7KSAZWKRB2giAbFVUzgtCab6KTJ4qXoABBnNRKkVrm9",
  "key20": "5Sfu9vaJqhN45gexnqTDcMS3NYBSNHX1F32BwvFZqcaca4PXzRkygKNFXkC9oTfCYewb5JqdNxfuqTTvAXH36GV",
  "key21": "5zSmSAQCqNM3sgjgxCcfFrzfrUgZBigc3S7NyorZYnv8SWjoiN5RBdNtdqF5Db59FkTn1hqz31MqG4REhaB8G1sq",
  "key22": "2MNbg8X9Cq65voW4eXjA6JetARbUzccr3U6gZujrskVtSd1NwUxwgR5VvaKKbSy42Ho3Ad1JLtcVwBhQzxNcsWkc",
  "key23": "4h3VytxSep1RTw2NRJcjnwS1MjoDiDTXHfvCZ1bz6JW4Ge7EgbdiN6LvAxLPpcPjWQ3Sj7AWMBngipqTyKPTuAfx",
  "key24": "dxWfK29Fkfxr5KA5veDKjdbFNT5xfA6gJferG92WcLVyPkBRjXNHSvY51qGkskJ98kEiCzQYpy6xxnfRKmgBjQd",
  "key25": "4FKQD8hD9TbW9SXazHtXFfwekDGXyTiZuSj3qnH1GPLZ2a8AgX2wA7M81fqMA1yYdDmtughpotnwD3Hvnug5E8bY",
  "key26": "5RJYcLgfL5aJho8xzgtDCnkkemAC1jJD9a4Fas3cAGA3QbtMaswhkiDiSpUFVrtqCtV3wBmWxDz4bGYWTe6ADNk2",
  "key27": "3VuKXnW99R8RbR6RhKpG2Lg2wqhX1DC8faGsm238VUga2vNDWQ92LpZkJowarV9J47zySMmSmfSxwXjLF6VJKYZx",
  "key28": "3RJtE93pZV7YXTYurjvewbFjsVXywUDyPa5u8BjBGQDpKAA6s9Vy7Jp3tytCf8vbnTDN97e6f3h5mHyzBcjC9A3V",
  "key29": "5booWZhuyh9GW8zfb51M6FP4HGexMZ1fEeswv9bkwsgiDb5yn3pX8cbfXiRDtvVXJvbFTHbAxmhnUCEwxBZofqch",
  "key30": "EsNZE7TxLR1NVRrRnhFtUWTCjUNDLEZUVwoaa85EEa5J5N5J8Deao7e3az5DX7tfTDoTuxBQNjRuAGcJ4KsJr85",
  "key31": "53wbGZcpGK2FRtDNKU6TTyToth1td4KkY628KstASsMqmBjbsJj2dCR4b1qxNLiyz1sgbkFtKSTRCe9BapooJHox",
  "key32": "45XV7cv217jwBQ3GYfctnovwY5n64YAr8Mtqxmck9ykaVG6TUK1QzL5XdbV3Tkw8uSbfobd7PNDdu9CEUDqWjNuc",
  "key33": "3LD4BQxpbz5SKdpqGBpHJaFLL219CBaXw391QbvxAL4N8yohKZrCGBAn8prmtSrd48a8WNz9UukJhQmDxVNW6mZv",
  "key34": "3HkbykSq1mG7yMWTcK16fpzfHkDznqygxJy8CsAZ2efA5iE3GCUPbBaUMshVoeTFasZLJWgUXHG8hkDN4HzjWq1J",
  "key35": "KWDgso6EfKCi4LcZaqnWJmMCBQWwK1yVQsTvPUS7ERgYCAvF2FpSKXBtYEdEoWuNj9h3L1ekaBZkZMm1hMbrp4o",
  "key36": "62szdR8msno6UpVHNXtoQMr1g8Eo87M5k83uxN2Sr5u1Q9emXSdkxBy54mWQCHsXQA1ZH37eMkY6Fuxjbm4FKTc9",
  "key37": "3ND36w7g8tQcHMzgcBxqjC4xxtuUzJv2nu1K4mKyf5XEFaii42R744jCTrd4tt7Y83LS2pFRLSjyGaEsv7EjfC7H"
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
