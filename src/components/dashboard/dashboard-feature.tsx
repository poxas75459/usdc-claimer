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
    "276iLCfmueTyBN5BMQCBQR4gaWsH752cQqndwGn2W5ftbi3ghW7HCd4tGmVejkAQMDkg4eXvDzSBgco4xACKHLeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFyWFmyhPWvrB7KAe6gsfBCW5eVrGKgmtdJ9Y4Ypo4NM2fxepeJTmj2dJp3vPWCQPH2H2b2kVBquk5EQKcrrTwQ",
  "key1": "67oECts5mkwuA6RqdWdcmCuRENiug1CrPGzWWMAFbxcsu84a6k3RG2dceXJPwc3GG21HScnd7yjUGDDU5Hzv1iCj",
  "key2": "42saiYEByao7F6dadMFYamyPbBgqx5cuQW2iCyqSxx7RbthcBiqgB3g7WgjNKS9B6oZBfRc3eDazRgXAYgqcLrfE",
  "key3": "3wZpginB2ShMSoZ6tTtpeLvBnLD6k98uGCT95nPCGKsr3714FqveQ1aqHeMQKcJ4JTNRmR7KRtWnUYt5C7EWzSJ6",
  "key4": "3gGJ7B3SmL8PWLS62trnKLMpDatzCCr7iXVU8nhTnF2Rc127ZK3tiSQNtCUukrVz9m7XrSjoUd9T9JeoVdUvr6rJ",
  "key5": "2fzPhQyogpzoZrgod4JoYxqgB7JSHpz6jwKBj92HLwqzcPwGMaD8ZUcKEaML82XuTRRoVCyKaFgyCdFpMBTcuJyW",
  "key6": "2BSnEHaV4UXVA6tcAFF7GBxDGW1iHfQ1ps3dPaMr3nqV2Fho9zEgE4qabVpeEP42vyqi6NRkDSiDNeXEzCQyiVJW",
  "key7": "5hdPuJjBfz956EX972zGe7AtypyJWU2naQdmKXF63AgVaVRC6faLNeiSDpH9ddkfY8NniryCH5Q6HndpvWqYFfkz",
  "key8": "4vk5rydLQ1CzF82gKaLnS7WD4TdoyEMNTFV7HjwbCgByNRAc6ctDtHwaDSVtYmeSTjnwvUjMood6EMPVAjQGt46F",
  "key9": "2k8fN12wHfSoDTFRUp6DGJYDsRVNxFMGNH9FAYME6vGR7dNRnKoAUKCtRagdbm1jsLt5TqTbAANfRLk9AN9MHro7",
  "key10": "5daHegzTLNPuFvFAcFCsdE7tJpFecExWyqTTvP4pn8gUL515MMbWeS6ptjcbH1F3dC7z6i2WtZ1bCmDPnE858RCU",
  "key11": "2aEJmjSkv95bbpzJGuGV5HE7UhVP59L6HnXQ5cRGYsTXWwFcNF9wGGg8sxg54ecqQkGcB1HUiMKc4jgfn78GLsMn",
  "key12": "3q1RWyWqZrVnnYKXe1A3yQyiBcqDeuer7EyeAVR8j9MV2RFECtudDG2j8AAGpvdiiniQwBWiVA6DWHHiQAtJYR61",
  "key13": "55VnephbGPqPqS6W5dQPzaDoTZW9cA9SnNWYvVbaavLu9QeWGLxgb9ZxYn6bu8k3rh2yUA95n6fuqs1DvKZ91suS",
  "key14": "4oJx1Vkuqs9PsbzySqsstKMZSe7ry4d5FtEYgeYnPqT8ptc7qyQZy2U4KLzeru9qsoAN2DxxNq8xvadA9Qqn4uu",
  "key15": "3T7ChBK841uvJEA5LPerDgViBdb4f3jhBzdSzaTcFktGQDXUHhj11EDDezzghRKsTzJ2yfqRPDF1xyapz2LpgtUE",
  "key16": "4c1whoAKofPYhjDLnre8NfxMd5nb3dr4xe2vj9Za1YjLMPLXnzfS6cMGWAm7iFLe6oLfoRAoMhRNUWZdKHarXrzH",
  "key17": "4EoXdPatSpp5Xf5KjtfpVrAzHnDoP5NETFS2fNU4XrdCmKkXQ4aF4urSBW7aw4Dw6w74Ttv4iWgDESE7BmVxj5EA",
  "key18": "c1TkV3uc4C9Yhba627MNJhPbvXFTeeeaCzaQdp1a9bxaw4DjiprBLGYs5rZBEwUyRxxe7d7vt6tM2wnhctk2yjb",
  "key19": "2M2ZnpRFMW7JowhbJRF28Qi4yQQbo5RbxXWqWUzemGRaJ6uGiUkjwwZgZSHrjp2ou8zBj67zRrQGZK9V3Qb1xctA",
  "key20": "4pGxZ5G13dPqrbcJTYPgko8KgjZR1Ktwkkot5bqdVJU1ZdMe1JRBH4QZDgteWi2yrmrsMAfFTjsCSRTQVpVau7n6",
  "key21": "3uWtS3Zhgb9iarVgCKZwwygKiF9L4jD68W5XpfDtSiVdtbc9Zd8nENEcMwf33J5vV5rfpXT6cpXAnfhtFYEVjGrd",
  "key22": "2a1vuqf1zaFyqPhvLepYxyC6GMgq3KrLnKgysDzczBt4nbyDg7cfnp9X8JX1XoNwFu6hPNh9jpzU1m9YtuXRPHiD",
  "key23": "2JpGyyYxuKV3uh2kK8qFoqDNUvBPckkQr4FDHLM7qB7UGuJbKeJdU19buvNxLGhbytzdJBcuZ2NokG6hYc8wTiJr",
  "key24": "F4YM2WvsX6RxeBArKZKV5ateqEry3LDG5SFLokZdczCPMN3GxydTnxpDKtFBZu5UKs7bKDpQ3jmHcdjY1YF6fEu",
  "key25": "3Sd8RzfVH3KojPc3XHLduzfj4bPn3mfBT6BmnMob7BxJvZyJwEakFz65gNw9MsFFW5zbqDtb9Et1eYRpA1YpmC5g",
  "key26": "4cjFEVFA2WmVWfUqPuTuqYVnF4raiVahrytYvXAjB2B58CDTBcbXrHUFTqMUv98fRMSeybjzRSuXK7v2AHQFJXYa",
  "key27": "3sGQgQNogb6rMLBy75U7kc6xEU7FAMH4MbeRFm6T6PPqGKUCyMdEx6MDcPRQDezbv1GnXowssF6ZyGJ8GEYUXzfG",
  "key28": "3C4bwZNW8jgjbkwL8B7QA5AKeVY6BxqFbmC3o2CqmAUPPRj3hRc6gSkHJgECewcMLSN5sqCS8gTDisWdwFee8W4L",
  "key29": "5HpUXg6ZTT4y6vHFzcPCvM8gLRbFFFPgvUKfcHdPfYA5KzSkrKHFZhxHRBxX7gA6WmMrjmcQdYwqaZqWYVn6Cc93",
  "key30": "5XRoCAnvBTxHuoN8PRiupdqazqgnNidTisLymY1RPBbXzbWdU6rjkYiaUcuDjMErU6xuvA1koWUzNDgPF3gfiv6A",
  "key31": "Hs2UE89LJ11KcFgmMTgjsgkSNA1SWPL9ruk82MBVaJC29eKRCmpUNDoszR4YZC4F9vPMwHbQvwdJuocePFZNEgj",
  "key32": "5D9C7ozP5VmrxobFaJ9pDLDUqQSGsQ6YyEHM2kim8FUWb9thCcEm6eKJjSpJX5MpAJRQ3cBb7yMZjbuGGyYcccF2",
  "key33": "BDUPtJ6SHKSHhEWDVpvCRypfNQhna8UPMYQiNYTyBZAQwywE9bZCu4V5pKjTReeatXS7GdbkYj2ARQhi4zY8NGo",
  "key34": "3TBaaGBTX3KDLNT6V74yx9iRLB3ysAXh93JEGS176JAXHU9bfjcJMmqcVBgcjU8w7coRaHqf295qsr8NmAV1oSFy",
  "key35": "XCyoz4PrcNt3TxzEM67gP2tQR2uSikXcV2o3uhcwPvfnFVmWnDVs1jsH5ZU5Lt9ViU1M8nZeMajrPXkz4fNEpRh",
  "key36": "2HBcTo8kta4nvNa3EPnVctMDcnsPJGMPp9EJEhUFy2f96TMoaLkt3a4iBNkyX6hvS7GcunbCL289yDqd9733rhS1",
  "key37": "GVujqbVfXi3mw539K83cybq2AzTR7nhVATHcY7CiNUSzTfTiuUkakgaBAXGToDu8GZdZedueTE8GyrkcNv7tFMu",
  "key38": "4xDQg2WpiK7XoPjnhnD186BRD9ksPFPs8KfMPivsURt2ZA2X8X1YmKwPgttNfZ2zhdvBRvGzgETuXvoEnJ5FnXCU",
  "key39": "2yVrhXNeSzYxea4hfhY1bqr1YGjUS5su8T6oPhf3ZeSxTDirzhRopi8LpTFn8SexyAm7FwW1njZo61LAvP56ev7q",
  "key40": "4CQQHwSEF2vUNxyJbwGBmKGYQxBYmi2qUWcz1yN34VGRBCFWuX9hpcMtMm4dvg4gyqY97ufEHc6uz2qEkxk7H2gx",
  "key41": "kaeRqXgoLSE1WoZwDkSReV2k86hNZB1i9FnVzxhvi7xLFwu65c8EWarh3c5P71oaBZ3AXvNhGv7CYAu4oHJCtwG"
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
