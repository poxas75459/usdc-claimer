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
    "FBT82eiJ8hPeo6gMgsv6epD6joJwRXSvfCRc6sfcDc1ChGh4sKt6eqc6uS679TpR6QgDHAqoYrecTPjNQs16k4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSMUdyLC8KUYz1H2yoSAtZeW3MggS2XnB4YRr1qHSF6Ud4rMU4JAWWw1TWmhmDCoa9gXoPR9L85GYUV683NmxGK",
  "key1": "3FpwcJWG1xZuDjN62P5VzQumLiq2PPYm39VVCHUzFEj5Rri25v2HVY8i3MabEkWHSzikyyinrmz1De68Q4zu7Vyt",
  "key2": "VvwQusMBihegXJTsQPfDapxm8BApvcAdqKMcNn4D67eHk6bgsVkfKpZNRp4Q96RhkTjnfJYkBKw9hQ6GPpaEJfS",
  "key3": "VcevUrAtbBG9hbBuM1TniZX8XPYit5C9QhR4kT3iyUfRgZfcMWF6HwRkNFbfseqZMQHhm3gcH563gwzBf2VSbKX",
  "key4": "4XFGspodeFVMM9RL3L35E1b9e7U41m9eWkg9Nst69k8S17akYCBXNYRFoE1QLUD6CZf38XbvRZfQnmpvAyKGFmNc",
  "key5": "41txsX9wNWFAsjqExwavWz3JdKip9jVsDTCeZZj96AF2HYemY76oeh2iVTbTjnn9T1B2p7ZHpabGPPr2janaTU9R",
  "key6": "4Vosoqgt9sVeop8YaWNqSzDw1nXXoS5q7NqULsSukR2H3b8yuYPT262GtpsNEze2qNCVDQbtM2fgxftwuCNY1yaa",
  "key7": "5ej5ySLbRfgD7Vh67qSCgNCGUScGmne6jNdHMrmKeBBxR1zimwh1ywDiJokgNqg1g9zSEFJPobwfyM3fBd8czPAp",
  "key8": "272kqD7GtYeExL1wUHMTqiWQjGJ48ZwUvrkVMBiXciSeJHJxwbHQx3pSupRQgEGKQrepYCQbkFkgP7TFJBF44HVm",
  "key9": "427n8JbzR4v7fHTkFMhVj4WzAfSsWar2nZ996RcZYyffKfYdXjFVNXFjmy5izAtUyW9aQc9JyDW68U4LiXVc3Ket",
  "key10": "3CckYFocx4AgQa6ucLrTcnG1V73iRKZoX35DhnrHGjjqR2HsrpzK7LQXvn5C5oTsr7TTxKVWqRmrnVHHssPoaHD6",
  "key11": "5SadP9XDSddDbUjASRzqPYFjLMU7gTqiyytvQFtNPU7BUYMv1ztMzaTsyAG1iLqHM2v2Pm4wqZ3eqU8j4X8woJb6",
  "key12": "2793mZvuGA7xpxYkzprBUE8cLgPgScNypgWCH5uNQErLv8AjeT3cu6xo1htaWp6fbPjP4NYMP7qeQ8vjYsGtTAe9",
  "key13": "4WTp7BzgNReFiYfHkR1q6egfzxt9SYDHBd4sdf1XoScg1WPqFX3Bb99AqzP16ZETLqYD3Lt6yQ5uSjKf4cveXWT3",
  "key14": "ve7WXcYwzPCaKtqPt216uFfKQNSi75t5uU1k4nxcGmw5Dga8ZRHnrL96d1UhX3FrHXtVY2KLkr7xDyKghKwQt1i",
  "key15": "4rGp93VMt9uejWLYEhjxvVzwFppFxwEtw7hNeTQT286JH2Cmuuk1EACokgVzBBH3EVh6NtXzD3p9dmJ1ukbYAwSk",
  "key16": "BnFWci9uiLT9cfWmZMHMLV7iV2ykotugbB4rwF5GuUBGRudLvhVLkMm9U8tjo8zEBFLkSgYyDiZV3KwWBFaYM7R",
  "key17": "5s9g4V5rEkpHmrF5XjvBn41WQ4RdKJxVV5JzUGGckhpec483zsmNXxy3dSQR9YXvLAxz8aLiYoX6mCQgB1GotU4v",
  "key18": "4CUP3qGKMpKvQcxBdjU3vqw91Y19heYsVZfx7ZGVcYj1Y66vbvMY2sqVpeB7gB6xb1aUd9fF9vBAkbQgvB8xfNdy",
  "key19": "2W8RwACquWyZxj2TxPWaabVttPE67KdshcSSW52Jvm1sNvwMmh6ATLmBsgBfFJdKxKEkRzzC4z5BGeR7V6Kr2YTQ",
  "key20": "3THLigbQSkaRK3DCqYQhQVUzwPecGpYFw7V2P64Q6BhMC3byynS87Yxn61G9DhJzgsjwuPykW8UrddiicTXscWbu",
  "key21": "L8sjxCVMjNp1fmJ4YDPvBxgiyrcgz5in5wHn6PC5yrrASfDDRS8sEJe11tmrgFUMzgeo2zkvx7NbZtkSisGmY4i",
  "key22": "ZeoHQZZ6kjMQ1uEfZ9h9vRhKujohDifybd2hFMHegaqV7BYPUGmmbMYfZz2XMy5QUW2aNFXnceCywCZ39cBXy2q",
  "key23": "4XTQQJtN4hkPWoZ9jpQiFL6JUNMKd1zSKmgXst5pqfQg5QvvNCtRHzSu8PPVNfk95BvkkEsnrsa8YG5cJ1tvKCj5",
  "key24": "jStSe2KNcBFXiZnXgUk88NLXCbQ3NdaYPZU5mTv3ddHgKw55S8jJGbHXCYnAQGAtNPv7HHy2x2BJYMS3ZSSTitY",
  "key25": "3xdyzENwuHxyNptyJ1DwbbPk1JtyiAsK6453pkVkVmEAAcGNAggRNuWnp68F7BPHJJDUzi6Wz9Guoq35ETEa6ZZd",
  "key26": "2LoExToahXLRTsGDEKoVEr5QcstgbRL58GWSoZbhyeSn9uu1mGAc6XpTW3ZjnZqBWQbWDcwVW6Z77QWymD8YYzHM",
  "key27": "5hWhmhYQmKR9vBHriC7MeCwULateu7nxEvxZLaHsgtpPSr6sbT4K4sVdR62p9boP7mZNKovT7AtgB6Z5TqcX3nG",
  "key28": "4UZJQRMrPZcd1FpnxLAQxm5g9BUeFfys8HiyqCN4YcdvWu66UbxaBqE7RSUfXB7wvB5Wq9SeQMEZvumHcAghigpF",
  "key29": "338ui74MmVJPrYACx3iBwYmEsppEGNCxR4K7AwxngrnkKtdzwpzwMfmi2ppWdXsQ9wEaygND1GFpGjEU1TR1HH62",
  "key30": "554JKL36xYstZxbQAizAhq8uMxGgNmDJchQpmK1wYYRA3gey2EHVZM7osSDgHbLDzPJgtjRuyh3fPdLZsEp44TjM",
  "key31": "5tY9su9NBj8gF2a8pte9ZJnmjHVPABZqRRrYGGSWTmhp295LEvvAzvmwN91m6ryB4qTAvdGiyS655mcyPvSTA3Zq",
  "key32": "NdsttrwzZm57c4mMw3uAnmJc56AoQxMmwQfYbMhCyNvPdceh7Pb8KqKfZxpUqnyBgP7qA26c3UERBscbP3sYmfJ",
  "key33": "29qnsXK8gGnNC4mEhEMzRDQdtDH8S65347c4FkYj5sYJ6xdYkhmUPg1nNT1pYLZLeNjAKHHuwHtPjAxE2BbfKCGv",
  "key34": "2n4ibykWEhp7QY33BHVqbZXVgxCvjuc8PV3VDxkkT5NkHFQTSLm3dFGX1KR3CM7q9TPYW8CreHvDW5CKc4k3NCtt",
  "key35": "5X1VX8Qf5oKs3NccUPYMbT5WuYWZRopEu39NbLbN4ciQmd9DMK1AVpz3Pku1GLsNiW9TNVbr2nPDW9uLtFgnYnVt",
  "key36": "4nXY4y1mYv3mDH7dNegfyGngREYJFSSWuhcFV4FuFa19Rk3TwQTyCLk625ECCeien13AV4mLAfNNvASC2M28BapN",
  "key37": "4N6PMEBXULbhFJFSr5jiH3Sz2vLuZ8dW1Wn3xpHwpgkQC7N3JpBXhYzgm1ET3GnP6ErZaPu9peEZdKdKwyzXCpPS",
  "key38": "kVYptiL5HhE52Q5zuz4EAXN3X1PFC8bmPs53cGdLnpwPrUM1wdcye3uoxp4hf4TeVGHW6Xmrwa6JUNnbiatbBrp",
  "key39": "5v1F8huXDJpcip6Zx35eFvvqgzfqZY9xv9BKAYj6ua5aik4rd2Z31Y2tKqfALxxet3NH6MLBoAJCHiJZ3NH9CPc2",
  "key40": "516dHP2axbjqRYbHNhhdFmTdu9D1ywFj2JbawvwjMxpDLJPwgH4cCAUaQAWGS8FDAGpfyqVqCKYUUcAiSSQjWbyK",
  "key41": "2NhbdojA2wa78JPAWKaNESCe63nnu7Qs2RRQkcv5Tx5dfRHE6WZ8xZmfSyRwfHH75kPpnz1Q9UKuBaY9Wgvst8BL",
  "key42": "4cBTWwdkkaBqEi4WDzmcrWLnxr24E4PSHikrszyCKUzR6FPnx6wTiuqgWWEW5Jam1WKXQrPMiWUsc2E5qDASm8vv",
  "key43": "4emhboei8fEiX4YoNnpjeZ54MrZsVNXpy5YsDqhR9ZcYF5aygS1GNLdpydvsH59LCgeXFaR5fA7RDoyrKQrwL2bb",
  "key44": "3qW1yVpZMYXBUnKfmoPz7HLrQoMJgmVZ9ywHPUBc1coT6W8wsmSpNSbRZTz9QwWjRH4zvypbz26niaA1YTwgKsEd"
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
