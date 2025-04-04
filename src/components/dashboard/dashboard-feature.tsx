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
    "33dhSz8voyqX9D1881u7awq42dmRc4PeTKNmPQW5cgXqRU9WeoVWpF8Mnw3abzFTVZkmbV8jyzCkUzCBZcdfkXum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAtd3PVVjiFGgbqeHjLFD6fbPJRB3TQEHYQgResKogYBBV1PCycsErHxXKriPZmzYdzNKvTXjErsJfvVmWAktSY",
  "key1": "48JzKbuowdoN33QJ5JRWGAhmfWrBpK383ztZSFMFf8ygPqmjVAsA8yHd8FEvV3zyfW9AYGd4ZjBMAakcaQPp4yiH",
  "key2": "5SGy6Ary6W1F3ZQYkLpJTzni9kKqsaaDRQxHfnrBqKZPBVpcgft4LD4CTA7LU5kgS9DYprG26tmvSV7v8qSgJPWK",
  "key3": "5LjqGqTDuF2WTModp8sUdEoWjv9i35gjhRtvs7SSAz64UYH8yhJqL3iyMbM1JEpfu8U5utdSbter2jsvxd3LB9gr",
  "key4": "2HbHkXV36XQNaLMLuWaowWseEeBdH9EPaGrQ58bQzbQJcMf1Rjr7gi9Nx8EnqSjA9fdpMGopSyZq9YuZXoHBT3Az",
  "key5": "4yhQ3MWyrWRkc1afWug2bvSjVb8LSrMkQn83HotSR4U2DngdPU9k544LYY9s4WqyNG3AMPmPeecQjWqPAgtGd6D3",
  "key6": "3j43WqL9QPtRAu6u4QjSYhxpc4byDzZgUo1aBEFLdPBF3MAF1QcAyVUe3tNtnYSMn6CpSeHV3Y85J2gnzimuFWEW",
  "key7": "DGK22CARLSuBiC2A4Z2LMbpUYySp61cbMLvhYioWd2p3Q5zuKnDNgPn3w3DrQgVZsUCNxZiruD1chNZhYZwj1Xw",
  "key8": "55ZfVfJxGtQ5mqT2C18y7U2p6y17aT8Lp2z3f9mHyjSgEnc3gNWYqcASZp1qPQoms2spu1QhKGY25NyiRf9rCb2i",
  "key9": "2iAVYxX1CogS2ZGparahMVKjN3KV2jXsxzUgmrkzseCxCKJG6F26FHJMVCa4riQcvLXQhJfgWfJfjzovULNUGJJR",
  "key10": "3WxAzXGVkGLnCrC9MSYXjFQ3Gtcv2bVxh8CskxissN1uWWCyS4SFB2zcMAKJjAuKBURphaDz3ZNszB8mi555LX7Z",
  "key11": "5o3QoWkjcE1H7AiPWuypyRrsCFGZ6sN8TLbnAU8L3kKntJ1Vyn5o9VExsvYhvFNZaxWG7DeAtfKuNrE1qaZwtMtx",
  "key12": "7eXvwtpsiH8gUXpRa1BbdKb1vwm8E3LdzAGztCBtr6V9sjq9NXdjmPdWkPQoAGKxF5fwGRKoiZv6q7SZwmDTCKH",
  "key13": "5UsNoFqqr9d9sRHdoKzFPj3MKYEzZMMS8ZMk8MJJzP5F1Hem4JzGV5qQ51FYqbT7PQMJF5X1NDoKdj2BnG5sdpfV",
  "key14": "5xdAXyoscEaKtFxRjReotcTEKA3n61jXV6YLpednLYzLHKtZD8DYXK1CQTRuXqH1CpEkJA3WZ59aZuNJgDXWbWWD",
  "key15": "KwGfrSNFSiR7D1PD5mUoTtAVQr4qkyUUuS7QQAV88LXTxqwxc1GkiLZBK1yx4SMHpTfjS6T8vsNYPaA8bvyHZsn",
  "key16": "AkacSVCf4q47PA4koamtKzTCWCUsEVa9bWRNqfcUrsssSbNYMXnoWaNcrNBSCLtiGDwiQp7SMCCoMuE39QB7Uma",
  "key17": "3gUvME7XMgoNUxyt1z3LGBFhnJr3M4iwmRKWiWkDLSgia7Ma8oXWy9caPSkancxkff7C1brcYXoyqRHJCEypej4r",
  "key18": "2a4FCQYvqfeu61uS5MxKPBq39R8a1V7QdAjWX5imVkMUPZay8dDQ7NJExuyhgMzFxiH9tf5RXZvAzpz7RmcsskUE",
  "key19": "ZPRP31v3LPnRyoJp1yxY2Jiqb3LswgJMkAKq84oZujowGh7QWG3Pn4z8ceFkCkS2R742u9u762A1ydAhye7Veew",
  "key20": "3vqkBn7T1FD3QtucQz7XAmi2z1j76difZYA4A5XTXiJWge5dKYmDYciML6pZNzKB9GzMHccFWoZT1Ln8VmtTBFWz",
  "key21": "5gStSnPdYAEQSrcbU3ADr65QK1ihLExc4REgRxkfM3KRy11ZpLs7EA5hUd1c5X2s54Z7S5eEt4U3nUo1oyBmqKiA",
  "key22": "5J7dHrWxcuAGd3VmqNmuREVzAyycHgJQu8SzjRZDHCpufmVPFp4c5ukGBRBJ4YEJdACZxboQXcpbC3wDo2t1uqH4",
  "key23": "25ANoZL5d9Uz2HQgp5MQWt284p72oe7mSs3LAC1WdpWJtwA5RSsCzatqHu5Z7YLajaVPkq8DSnEKf6dja8H8vYoj",
  "key24": "3tywTPaAoKa5vtfnmxNJLyb2R4mqsCq1xZk1mb1ZSPaPM4nQyPBZbQSSdWxYAHzBUrXDbjEFJcuf9KeBzrv4Sgqg",
  "key25": "2GsMPdNwpkfMXEktxXMeZupzXrLAnGhNBoAn954nVnHwKUDyya4Zc62bcPNj4sgT8RcepwEGQJ6i4aoJiMesgCB9",
  "key26": "25M8w37P249h6W8cYnCtsLoRnHNfyfwE2tCfVsQg1sF6u8cqbdVuWxogJRgLxrq9mBgm21i3NmywoWqEQq4dp4WA",
  "key27": "3BB7Bfhn9R9rUtSv3JU4rJ1H2yMdxRk9r15QARjMMj6Mf2LJPQMuKctXTouctz7eRSUCPQ6XWqqMid5zqs4o7419",
  "key28": "3n1HkmM1mQf797W1qmDixyEd1BHZLNPTcwh9yUna31ZbakijRtjxrh8cjG8b9bomYvcR27X44qo9Q86gp3ht1GMt",
  "key29": "2QKBb4XBLHMiJ81juDHvsi1goEvVUjY6zUTuTAy5FRFmbiuk1sc67Pcb6D37ECHmMUo5NgBGJ57YFRrngpNQivri",
  "key30": "4SdmeeKzVstVoYoTyGRj9LrAc1GFiGxF7wJz8WcaoQtpSdhcnumnLkYWXY2evGKJzjbFLM7GiewnNojRA1etSsAT",
  "key31": "1LnUjb4dWFxiVQpMUDHaPbB8Yo9zkQe7Lz9xdA1NnSnadUweVBafYAWvU6bcLdGKjWWdGxyn6EieFfPJB3DsfHx",
  "key32": "5dmThfz3cLtBFwVacH82CLCHXdziQBCbcn4QqLuHceCzZ8sN76cFwwLSbpW3vk4jrwZe23x5qmikeNemP3L1Jww6",
  "key33": "3JoxvtY4NDHDdy3Zw4YL5UoPFQeYnmQBfiL3X9S4HcDHeMny3QgXEnczPW3mUf23hH8C7pnBuGfftVkebfQ87jpH",
  "key34": "2LTrv7nSjX1CPWMmeFCfca3rVfovJX9L6LJbETtupfb9dW8k3eSADDbwSUN5bDbhoKyi3JwDu3TwQK83HDZ4aV2a",
  "key35": "3ufH6tXSJaBnyNdqpQFXp69NQRNRBkPWRjVCtDpcq2go71jVYYfWbS61d5tPJwCfxZsS7bgm6iwxPWCRm2d8CH8M",
  "key36": "3MZcb3SwD273xs8QDpqn7VT3vefPHqsybZxgf88HYQjGowt6LntMLP2UJy5w3yMoWEB4F9UpcEEPK7q1WRChTAPS",
  "key37": "54NsA68CHcVKmhRkCDb2aqS3i9nAcJM8JewpjCkAhLzKJQ9UaTkVkmrST77cj6n4Wuh7wKJTgcjT6Tv93CxN4zCL",
  "key38": "2wyWubsvfGD1WrYiqj6DLJsfW96kEyHfbSM5mQLCcgJGe9ALiYcjWdRkbds2CQR6ekMXNQJjT6yrx5QmhmxZoGVd",
  "key39": "2gZ9nKtxEPR913xhT7G5vgBjQUYrNARmczPbumnvdss9SQc6H5JmV7tcr84xYVC8jP6yiovf98KdRKpX95jmDKFE",
  "key40": "2BFHQRfJqJ3HzKhZnLeQdGxTN4gUh6CzEQzVv8xCoAC3Ruz93iN3212z6eoCDwZwf9FYNRR7Mt8UciGwBoxRHuQV",
  "key41": "4DNdejkXZJjWdSsRM3BCX7n3LQpDB2cfnDEK4qDzetaspaFv57BiEZ9XjL9iLkzJXrenQ24ZYQoqiydtT3FFQrtB",
  "key42": "3MzbKS9joFLxa99oEePgsGFuXdeF3BLKEsxT1hbb2m7zBUaTdBsvxDJTqi9rPTcTFEbg4C4k2u735zq4wmEbCBb3",
  "key43": "vxAisKwxvVKANMZ7E4UrYJrDbKi1nzv22pvszvGp3Nj1YaufGbbRiibmFdvrVnTLhfT7ZLhWfvWeqU8WEFvyDLq",
  "key44": "5HAfAvbcR2YnhCj1B99Z9g3NXpPYpgaaouuBUNRP5owoahNzD5jJcmHXq9oM3o6XxaVWnHSNn6Ns84NVbE6RcaQa",
  "key45": "3nJ1yq7ryYwnUrsuptfBStJxyCHu1zgK1WrTVxTXsHmBrf6YQ4Wzz19tvrW3E4TpqNZsXL2BDkfEZWnd7Vo1ABgj",
  "key46": "2GX5iEPmF5j754roLYssBGjHpK4KHacwMQFPrguryGtBo2FcfmoCXknys6DovQKk6YVrHVoFvuhR7t7gkWqtZ1C4",
  "key47": "24sKfGV7wBtHSUzsNT5ap3y7Y2CsgTDDHV5La4NcWpk4c2rScBqR1hoeyjAkZ7rnEPzNUBo2rEMh39M3puQpzyHW",
  "key48": "sDKCbr8LBVC59M4LP5VFAcKi7xqRVdw1RXQvc6gen8WDGQZN75dfMigfnEzZsoTaM2zmhfiUptenAcFVJNKxhWr"
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
