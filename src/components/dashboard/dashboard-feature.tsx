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
    "3cuCnJzTzUMpMkBRdYeMTQb2bW3fRfR4uGLHvNERyok412EfGjr4meKYRQPYn3gwDEDdj43FdvdVFtdNzb9ZvpBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sHBjgYgLr96kS3Ph8p8gLgFZATvysTMvVo4B5GwDF8W5ZRxG37fyExM5zk5FLsv27ptZkNX9vqe4BsnNJ4pocb1",
  "key1": "62s39h3izRE6Gp2e7QADXH15DHwrzwX2iY3MLZQiZfsJb95adGNshQeJYAT5DamC4S2bz98QHavrQ1cVypGd46yT",
  "key2": "HkohRdD93GBdHmT7iSRzbAnQzPvR1VYZ6Ge6BmJyftxvvLzGrjabT4VUxt2iTP5gP7XGfrm7gHvhu9HjYc3V3ZF",
  "key3": "4bfUjfXRjzTvhBLhB4yxxETdnTWWLwfv5rmVUjUKTbRS4GZ9i44Vo7eda7S9w1Xx5dRL2XTmTP7mTVN9UJKVKFc5",
  "key4": "ocWXoBJCDwXHMPhQBsQdsFMuUKmwgYLRZmfWaJ2S4MakecMbZNYmegFaRxoTm4KXRyPto4Wa8VKCstohbkEtjx7",
  "key5": "FiDPuFd4XSLpGrBtbFEyvENMfErwMrBHF94qGomh4HwbUwE41Yv55YrGZgof2CbB9JnzYmAwvs94LnTz9CgVUu3",
  "key6": "DFRQpAcbGME7eK97a3uLYYJv4tPdd9SgebJmnEfwN4V2KTL6zhLxJr5pHBEZQvet5rYT9v7FxYnopoUEvXTu7bp",
  "key7": "3fLryzdtmHjQ4YsmLAptiRVsqWJmvCSnCDUGqbYTXy9KCEaXp2sy7FXzLb5L8bHYChHTbYaYMDfK8wYLgWSTzBXa",
  "key8": "2o3N3hDJDNts1qs8BvUtgHEzJJpNVC1ABUpKa8N3WdRffrVWqj97gyvntD9r4LkpqKbkjHhcB3DkHheTGt2WG7Qv",
  "key9": "4jAGZZJA1ifmMoWeYQZKjt1e7HqdHF6KwseKfSPy3YDNiPbtXvzuCzavc1V6Sc7rozR4JcVvraFtmQH4C1wTwEHY",
  "key10": "61ePUGqxwiL7Xco9RfJTvmNPtKVF7uyfRcGeGgAX8UhhZfx6npWHRYZFEYv4gW8qvVvaYe2Az7vGw6w8Vwq4R5RL",
  "key11": "3oMjzpHeNZjLqNpjUZfBEXi1kmn7FMaa762NFdRfeg2mPVKHy8P484nRXynTFWkSmzqyrmbRAnBCAPqFjMDfbXkL",
  "key12": "hbkmBw53S7chgiJGWb9KspqY4wLqFpWT87UcZe8588HUCmteHxfbHK8yR6NpLR8zpgUN4DHcdcFTSVYSz4MC2BJ",
  "key13": "4VJVrXT8ybpwoFQAjVkfyHByCsxosXUMFtZYZFzQkXfjrsBarBUqrFTpbfDncsieUhCQPPwxAcqJEnDjaPfPHSkz",
  "key14": "4jHPMgFSNDWa52wWgGWe2u7HhgEpwasHSpQJeqzZ6uWVxrZYLGfm3DPvzAgojGHBn6e4b9STfVnzDtj7YqfxpGGk",
  "key15": "5MuXr499stzKJmmEDghX3u37JZKWQ8eYDJpzoRTBUtUjaEVvVyQLu4YAg4Ha2SJpkm2nwdTJDpRCMpazSHGjcTKT",
  "key16": "4rbsxLgwLtCWwaBuGTQ67FaoxU31Sajb9w1AWCvjF4ztrsy9ygyRosgJq4MX22vEHyfk5jvkeQeCD7oJ4EkF66Wf",
  "key17": "4uHaaCN3cL261idbTGfZLTs3Qmiz4RWiV655biy7Yyc7jniUMQiDA3CfeLp7vBYnquRgHG2dA9d6zsAQ3z11fnPz",
  "key18": "3MEYq8Xt6Fk9ZtB9whceWihnqRgikitjUm6z8ckvhZigXku8hTQnue2QPCDFuSi8QTbvRgpaq2ZuTsXvBp21eqvo",
  "key19": "4VgrAt6tUvjV7s915MeGy4YV6HShDvyKTfsgekWfmK2MrEKqtG6N1WHEDtzoVaFmMEM8TQDHBoj4MwfmXure8ZiT",
  "key20": "4bvxyu1MqvJVkcLTS3BvfM3wKNJxpvMhaJJhnhvwo4Q57ZxetZf43L48BKYdH9LVdDc1deywrK3AnJKPssusTQXq",
  "key21": "4515aa76TFjfJYDQSh8XrzuAnEQVAYzr47wczYBFMkTUdZ4SUnj72DLqtM4C6Lca1bYCtYAwv71HjaxBXvuaYJN8",
  "key22": "43MPvuWKarRRvmSwKUTAVoYk8fRsvjJ9kGsiE4mhX7iCvvEJYGjtWSwevHWKcJt4qEWCRphmRKCE8rUur8NoyUxD",
  "key23": "w4jPDWScCc3vQSpM4maSbS6Nx5tmqPBGL7M7eznNVS9grtXCyEMB5t9L49j5ziZaUFhNFQZ4ykbjXTXsiZeYyUJ",
  "key24": "2wYuVRMeEVFywATZL3eYxJwFTntm6W62r3rHgLAq5kd6UDByWZrExMWfz8RBWniGXykyrH3MsH1qnBptafw9VNZY",
  "key25": "3TWETG3h9qZAHJdGffWMBPfnErJF6i9gVuAo62T1SuWAy3jhVzFjoaNEDdAMNiCVQTNXARoP9oBz7P1KDBACSK8Y",
  "key26": "4epLe8bFPyCo6U8roZX4nzGkoQ7WiWXLzMMKkd61eQtVFk2QSYaiVLiFSft5s6jeh1AcEx7kAE2ceCg2bytt66E6",
  "key27": "5xiTGVWMUr5qY8TfMGbaz2mEAx5jLusZ8dWv3oxLkKbgR4atGR3dTM5fU5gxwHgomPw4CPPYofcpZnmrsWXi7YTs",
  "key28": "22XJGc4GHyAuXjptF5ggmdMFfcSJ81CDQwJNGXhhr3dSzNsQngcLtp6BTC764YtHuUYJfh6scvLioLZ8jP2gnWLv",
  "key29": "5SJJWgfT4MokqGTiC2f83CFCXVfPcGjLESSMkMTz3tjid2xaLQHnUo39qFMQMhG5cfcqpqJkVz1kfc4ajjP7pkky",
  "key30": "265zg8HaLWGhYZ9FySvSvNL8X5AkmrDc9MdKeinvkAMSR1DGnDXu2mXQRmnpPqLsmgn96SebLWHc55qjUbBX5LfS",
  "key31": "2G64tpqA9SZ2zaoxWBMA5DKGSc9bA4CVRJamECstXpjXdJoqmBEEA7L3hquW8XavCtMBiYx8KBj8YfRVwzoGAfRS",
  "key32": "5reuBXLaHLsQhFwjFGHDmKqSJ9XVLos5Uk5AA6PHJp9E32ttp85JMbCuYYUdLa2GxxobzeS8q82Kd1Pms2yNvreK",
  "key33": "4QrXimMwvShAft6hqsHJwQc94jhNttppFw469PPD7YpAHF65zZYxwou6GQZS8kZt57o8ewyrFaqnufpTEQ2jiXNJ",
  "key34": "pPR4wuaYYpBXyTCBTxVteEHXcHMMmpGAPHuYSUkfrBPJwvjc4NS2jQq39N56BPoMfWUzNW62Jwuy6gsbiQUS4dK",
  "key35": "ZCq3QhgUqD5MhK2vDJtK5x2nHcSypuXNDfdSeXmYxX1n4zjTz7bntXYDmT4Snn5284vdbvqMt5itpmCqx8yETq9",
  "key36": "2X8pYox4r9wBiepPPEExGneK3crjRh774jmLScdxQSZ5yrVfMSg68XjPgZtne87i1pZ9zzihHBQqCf3G2LXi52ya",
  "key37": "3HvRdZLd4qUrS23F54qeJniGQEH3168oKPJBVfQLT1DEJyWkJbCtdDujXxVUNshSwbt9nwsLgZ8pJMGXjhDR88XA",
  "key38": "vMiqmKAoC4TK47brorD9vSsiFD1KwEMc96ko3PJE6vr6vTgyT4G9zCMWYJjLAn8fTSAoS4p2CZncVYEpEMTXBp1",
  "key39": "4X1mDmD3J1v5vJXg8JHFmiAZ6RBHAtw98EFPkidE68Cb23nx9brfvLFxti4x33L7yz6PS7zm73K79p9qLSuFPBKr",
  "key40": "2JkXgYmyn86fKo3bZkxCSQ385wapGe3BH19nu8PzideyjGwkf2YmsD3dnQiDxPXHwFhHY3jy39JEeTXtTDMxdWjh",
  "key41": "3RpKMwG8FZqnJ2bhyKXZoNRGKQnqYt3ifVLpLFCUNvyUqKCJJFPKWf4Ju3cdUPWqrpVc6HKguGt2mwkcPy1qtLvr",
  "key42": "4gXw9ZgbJ6qhhyNSSVMCVbiqnCKE6jyTbapzTp3gtHtWJMY1cHBt8VMx2GivfMRBtg7vFXnZ4SZcaz7tRCqqFNdD",
  "key43": "2U9kzCqai61Ea95So4jomLcgfo92qKG8DygAM1KvFcMs4cSBtXyGAQ5zNacyVvPXcpfv1w9fxPVgnWACV4UxxGrc",
  "key44": "uw38U6qpEWqDPoVD7uf1kJ1UGppZdPUoRL5gxFEAWs3JNQvM13ziv3Yn7DVi8TLrhij5jkuyGvsDi6rSRLp5U6R",
  "key45": "WLKMQTH1kDDxx92pa5PnyND89e9KEs67XjrApqpghLuhsrhfZX4BaRZMFd6Aof277wCNW4htQjJJ7osurTnSYTC",
  "key46": "2vbyShqQckfPoSWgUjZvXd2pzQPAxcxeh8FQDG2iVkm8AzE873Qnmy8vp1RAADjn6yEbqqMgcyFnxpVbTRT66SC6",
  "key47": "43wubY2iYeMJxbXq6CUnFvGmKwfREeg3sCW5czsq5LcsqaMRzbU3kYqCk8NwDMP2GesEQtZwq7YXzYwS513F1RoQ",
  "key48": "2g6cZobfVZrUEPHcpjgZbYYPAvyDYEdNohqfLL5R4akZ1ZE4SXMFatXvQPgfxvuuKGfJry6kJ6kcSiXk6xKdBg2M"
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
