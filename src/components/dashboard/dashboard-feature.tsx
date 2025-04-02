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
    "3GEx68rvxhFGLvv21UPEcVYgD6L4rLGY9oa5fAUk1bh8WCvG2XTAQo3hV4DtWFYu8i5cKMLDHhC3rqkyiHThzrU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2spCAhYCozy8cbJwbQBrtPrPv3Hx6ABq59a9bPidXFAY5RdxVvxi5h91xL1DA4Q7WKcTr42WSKazkpVzVFDRXPr6",
  "key1": "4Y491hTYYABmRoE6z3QXjWFmuFM1umqYtCwYnWSkrWPqEbj8Lxxx4FF6AjBLZvN8uYRE2ei8GHtTTKSrYbQ6vpx9",
  "key2": "2JR1AxCgRV3JUUKCrY7KsV6CGANisLDeEvp4Sdo7y7vkgfDApnQ59VAP4fHcJsNTjuj9kzhKNU5p36mdXFDcr7x3",
  "key3": "3BU3VrF2HCxiHQWCFKFukbmmuwL1kr9siXaQ8sgJcUkcCbbVnKTpaCrM8CSxvWcZYKbXcWjgBkvsnQ2PMA1kqbFf",
  "key4": "61Lku2p3daznoqCVx1akpZZCca2Q9gWy5YtvHqm8xy7zucHKvTNtk7CfYivb6KJdUo9BMysGSymTC2yaPdHKm3zf",
  "key5": "3i1Coe5GdJTbMGTTTTTKPTd9ejmHhbP359rWnUapRLQxREojZVpwvZWi195xoqmyCmeyogPfmawZidDQ7fVuY7su",
  "key6": "5EuYuz5uQ8ZzmYZ47gBNfoAnQuMKtgmU4Eygq77hbL7hkGsVhAvNyBLH5DGcGqPzWLmcSJA8BL4QK2eqy9rbDvHR",
  "key7": "5V1Mx1kqUKHvz4qWeNT1HjAf8svL43tcQvwfXJguLhAzvKcNbhvakkQgXyF3o3VU3T97wtYYBHYHDCZR4LNEmxWz",
  "key8": "o4G6wc5JayWnFu2MXcJr5pcUyaSyveMCdaSUTS3o8cLEmBRk1MoHQ1RzS2P9REsksq9cRQprXR5c826An47vFe7",
  "key9": "3LqKVKyTSF2tqkggiHNZjHfiTj9WFM6bmfdSP849mPQizRgFcYApLrWCfoTYzp9RamRqFwMDbmmFRyY6hYYNwex",
  "key10": "3DS737VxrSY1LXeMyQ3ypvMpHgtkXAntfrJ7iBtQBhNLJZmvjvZg63FR5nUM71ZEDhtfvZH3TuM3uVQE7TKJkLY5",
  "key11": "4TZhbnXLeK2Yc19y8j33UXzLZbrmDqo1iWScb5HWMn8o5EhTvnM1Jdc1NPTtBJxdHpvvLgLsjAJLxUMzCNm5iJSe",
  "key12": "4jzMZfxZ7JrpoqvDanUM18oXs2acuFm7r9KigBa7pyf9qibroLBZPfcYqLK7k3SVXCaFfjwvqf7vT8vpQa7WpNAu",
  "key13": "qagoMcVTndFPTWdmnen6uHXjzxTmADTvthvox6iMkANBxWLoT7xLT2TjK1QqRMBFexLjeNYjznFrP8YXrr8QcCW",
  "key14": "5Ge9Jg4AY9Cc66kj2TkyQi3vCN7mWvzVr2ZpLa6JFzEFVihAeskPK4P3JWwCJT5FeuFxXnpbSiMVjSALFQTsPjmY",
  "key15": "65TVVCUhuPUAfLt1Quwg8zyNWFGG3ERajX3UEihKTPGppyfvPef8CLquWgTD6rScQSn5X8YQfZwx5MjhSMpSkGet",
  "key16": "3sN7uxityx6Xt4Kp7edz7W7ryx3wVHD9mmwbUCaRTUBZp4p54N1WJFCqrXMP84g9wkgYjyPxxU9wZVFvyzQ42GPW",
  "key17": "3fVsLVttqYB46PBB9Mku5e6YTrrSue447uDUspGxJyTPMQKNVMBbUiMpqgcAKBBw9akje71wBaG6dBWq5vmvECMk",
  "key18": "5DgvfQdV98xfa1uDpq5Mc9d7NHoUgZnnyGh3WvWxQ8yG2UcntKBq7beRyFQ44B6378V4LMVaYXCnZQjnf3ABcJYM",
  "key19": "2MvMfm4duKsYGmPRrU4ZsqeFrvdEEcFtvgqyY79WPjhAMCKfodUTyo4i7eT3rGJewkYFV7eAoBuMQw6uDFDQDtSQ",
  "key20": "2nVkxmFJAaXzasvL2at1JP4Dbsixv6ai6GeYYKBJeEBegXqaQnrqv9RWuJvS2pFX8XiFNqT7GgUcEBoLVr6VcwYo",
  "key21": "57FKSnZArKEnpDXCeM3dvMWbVZGyNYpaN469YGwH6duEtChaoKbToWzc4wq7X7nZMbCb69gEbHCfrUFxmgkvK9f6",
  "key22": "2oN7xJZghWbWNqQfLwEGR5aKXKqJDjP8D8PK5XE3s7Xopk93RWqiBkF9yXMHdwX44xyeo7m6oRtHNoErR95NLMuX",
  "key23": "bVomwiiAdwCTTT4YxMpmi8gb9NsDkZKi95WLvixX3Va4Yb292r7grFTnSzp48hZ4YV42Rd8EAe4wf7W5Sg18zGf",
  "key24": "RqzZspfDQNGM4CJoSnAhrRjpWJaYbzcaGSGxJ5uiDu5pALDtBXg5ePnVug6jNZqZ9UWZ3sm915cyQfKic76YWw2",
  "key25": "57LosjsTumC31H7j93MkZjMsosq5nfaz6Xzgwe728aspS36z45HDYagjt9GjbvPM9sw7czshZAVx25HQEpUnCWP5",
  "key26": "tojLrnZuf5yT7Pm7GVmXCFrNmarEHcj19CfrGbQPNK3PN5oyewwDM9RZeM4VTKhMsBcjMtK7UdMvd2c4TARuJ4y",
  "key27": "5vPqvHRjaCP5AnyPkpQnVniyKtVeU4ZUyohoHgAh2cR83KgEVqQktUjj9PLkmXe3GwKSBgXphnbKjJSSc9PAGbaK",
  "key28": "4ZK43xYTVbYQSgCqjEiDQBbH2gtrhUV6VBK9KgoXSvZUGQYa8JTyEiLj4Sz5RpECoAwko3mxeoXX1JG1GV5PjMNy",
  "key29": "4524TiEFAkREBqcKVTqLJybSVicLd1BJpbkhihmUX6PPqYHrHwL228rmxQGiEUPD8XFbTZf31xDML7x3mi4UG4wa",
  "key30": "2sQuw7eBw8gCg7JyXnFqXASTRoyzYWyfmhA4jwXPeSuP92bjbNyvv83WkVRQbGDpqLm6h5si7dLAAPGKEosKFmrz",
  "key31": "4ACjTB6w4Z4mrUFEarMoqyY7mjivYwAVEEUxZ66CeK971yL6ZjKUEpJR14776ZaH6QLij21Y9NL2qewifNVUfbmN",
  "key32": "5rm9yNWkGcennJy85EtbKrUKm3APSAhMkvHX8hVzkoEUMFm3ab9kzjBFxa7p13Tv2u1QSBNN7LsVFDPAQTpoXCxY",
  "key33": "3a6EJN3YeGrBNn4HnAYwvdkmKCh2C1WfYMGnmEryS5LuS7suExEGJyo38jGTtZKCu3sFEPAfDydMhEmrk7vJHpGS",
  "key34": "2MCPJNpSU3oqPqkVwThz2hK1ibtPoCpzFYxz1EJnns3N2SPpC4czTXAiKkNHKPKp2mLEQEwusBZCePJRtPBKktpJ",
  "key35": "DAQPE8aMpzRoFJseq1jc197N1YocL724LzN1CDPEK2gPh8efsN3Cu5hvaTnKRG1F1Z7nAP6Dmi5X1tL7d4ifwzY",
  "key36": "S9RVcambctUyZCpTWepxzeRYx8X848ruCbQ291p9exg52BdM3Xj22H7QufJr3xWmeEEcMmCMeQT2V6NRZHFvQxv",
  "key37": "5pdbUX6S546FFKxpgcxYAjmQok9GqfMgJTaaQdfw3LwLqM7KyoTGpbK2Mqod7xJHi86388EztniuURa1g2Zdjhxi",
  "key38": "5MtVBpH5z6TiFseajZLKAviyTW6YNtMtgA2PzTSeLdX4uqkFowuHVoLxVoRHK7ocS9Wtx8mdhjQzDS4k52iYPS62",
  "key39": "3k3yJoiqCFicQMZfTc6MmdfPJZeY14Nu7KLWTbqSnixN9Cp3YH8AVvMiZ713nrmEKLhA9iX1CaMZZwgKv6HT85tv",
  "key40": "QMCJBcwcSL7devFv9ZLjM5RaKeXGbPsPf3sft2Hk3XgG5so6NBZuecXu4HhnYdSnD2sL5RWB4xUJ6gg2BcknyWk",
  "key41": "3GENHthG7sGYx9bNrTFrV6Z3XohJxGmha3MkCxd1SM4AHncmeJbEC6qv2pamMYPhVc2LCsNe7Je6XLdxMPMvJed2",
  "key42": "4R4NHHQmTdP66vUkeLAsz5LbGoRTGHwvM9U7cw7MY2bkMqMQ3dqAZYiRV1WmaaVfedczuPE8ynbuSmPrmmy3jdp6",
  "key43": "59U1t7JkXL3jfiMdSLNwhfEkU5xrAJCT5Nx8symFB3LedYRUXuNWLXitXvGPrgbP8nQvLXxKtCy5G88VwtFJw4qQ",
  "key44": "38r7dGYBR769WamrpN643Kw5gsoEYrRwuTX8Fsx1oaxa5paoLngJ1nDWoLp6BoMGyF83F9qs6zAMwvgBdXxtNAo4"
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
