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
    "5oRwTuhwEyAcdoQkQ7YdsqYcUTWbmQyE3fAcHU262328hQJCxv7Af1g3nG3Kzx3zgk6yMSMPTpXMQ3DqttBYHYnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBvcVwpJA8ZwvtAWvqcMAoJ4amAMMvpfiyuawvcny9C8xN4hLootaLL1CtyCZX2pxE7aoP1mUrJiFftUemY2ptc",
  "key1": "5ZaVh5kLpi9TyxKAM9TKPv7hoJXu3hQx45ZXVzQQKjjoBMQtY8qcXiMdoLm5TBbGpka7VrxrbdwMFMpXcDNzZnmC",
  "key2": "4RQjkxAUJrG4DTzgM8zkTJ5JU4GsuddcUY5YsrUoo4b57VAA1VXc3PUyJ5sNWwm29jDS4C4tbiAvEM4ps6CDzrqu",
  "key3": "bLMJ6CBYwz3U4Fg18Bp4DfqnZP9zNpNTs4Yn9xH2gNnPBs68ttMBPHnjM5f4eRx4N1GWytkFPVKfVLqVHYJg1LT",
  "key4": "3xt4psRDdVra6u29Gxvsfra33kpfLuydsbgSNPqZPfDp9iUKkEhVciX34nmzjaYwbpqPEMDKqaCbV4735HUxrFuT",
  "key5": "4atpxMf6wyttGTupfKuvJ27GnUQBUUd99GZ5UjVYo84J4gcyZhz7MmzpEeafVkD17QTAANq8Q6ezAQWY1eCgVZ7J",
  "key6": "3ChF2nQqkFfb1EQcRB9rP4LWbVUY2DUf9k2si7Kos6ABAyHaeCUDePKT5f1KqXo9mw9nSBRsha4JtnxHbZ7dGTBm",
  "key7": "4wKa3roNTMBocxHjySnUvHceUPkBTUqa2pPci8fipvhT7BsACU8L8oDA8WdYta8D6ZayWMh2iisfkPMk9vTd5bri",
  "key8": "HtgPUAi1QE16G7CFiJa3jCivZ1uuyxxRLcPVopsaeL99dEVxcBgBdRU5f41nSK97ZwS7y1NUyCxgE8dEzFVvKi7",
  "key9": "h8mmHBPD8wrhqSYDHhoCzVTPNdVQswVEk6qHpi6xkqnVpyYyHm7aghpDEpeM7Wb8ifnt6WmrLNVrzqedpmcDydA",
  "key10": "3jn9Yo9pPqHNf6cerL5Z2ePCr6ntvWsVXy6nEtJqsCiQxWm6uz9g6yNVcarfmLouPVsi87XbjbaLk6sqqn5KgpP7",
  "key11": "4zGfybbeP9tj4qALBDVRpm119afoHgaHpQHdDLYwHrwJPG4V9bLEn7ens1nsqwcvL8fwFng5MVL7zpBEGGvAn8DB",
  "key12": "4NCKMHhdfDxjEv3gdr7wWCzpGmf8nxSsrhwSwzY7jdRHU19W3hkoCETdZEKTvo68LZb5KstTH8KPkLEFGQ39hkBy",
  "key13": "kRqXh12fzx1a8MyuQiWZW7S1kghDH8YCUiSmTw57C7v3RLLEj8xUe4zLt5Hpimji8YbHs928G9pNWwYSyKSBhna",
  "key14": "3Da5EYqU1R2RYHKPsVwrQgpw52oJ15o7VQ3XQMijmT3VKN8k523oenAjMWeR1M31FWvJ9yjatEsZRt7JfR9WAB8b",
  "key15": "22FerjbWiABhXomQnY1wP7qWuVFwsTrkGc7HtPovzp8qnEKU9DuA7KEyNcbeQkJp5eRqLzPpT1ngHSsyTQxPpCqx",
  "key16": "6Lv8K9gqXUXbWxSJjLDjrAg6vU74fAjX1jTzNLGm2YTvyqNNpUvQnN7xkEC3e4nTMoECdNgq2zV4p3rP773viqf",
  "key17": "55iZtvGPoacn3Nz1dGzo4cMafbJ9UthKwNZyPAMc69vj5wReUj648wsB42Fg8ivSgHwYZ8VvXBjHSsQ7uiYzAStt",
  "key18": "45LvZjWtaEx1bgv8FCButzZKCfprU6Dbb6uvApsJKoEKCTG3M8mSheyquhjr5MatcRETTKjLNXPmLv5vbcddjjES",
  "key19": "4Hr9ecgjfsqWV1TiqfDetuuSALaoXJ8NvJ4rSiTdwg6qft5YtJxS2kNqSCaAFL2bbuR24TGK5BdroBN2YNpDndLR",
  "key20": "4WVFbYVqZzarntZmyxoLtxvveT3JTdYCxA8knTxPsgyuTDqrp55a1kdPtbpiixcPSJ5GsDLz87Zgdu4HgCgDB839",
  "key21": "2n9EnFPcu2GxN1SMjBh4rvU4sULCDK8v4jBUxkBdYGGRoRSaaPaxCDi7hy1Ub2P1NNUmCGZVNf8eR7Hnbc2m5fkS",
  "key22": "4C7UjnBLNovwv3awKyWdMqc8hfyfMQjwCEZHeenH5Wj8CnQbGHZd5fMsdAkNoF1VnnKfkRCwPabvGxVZ8CmqEKQ9",
  "key23": "5itFSd5Fk1t3zmdb4oXXejc6Ts9HDEi1mciy3a3oy2T7Fuksqm6EkAQVWayL9AKQYggH1VpWhucMqVJ8ZvuwxCzF",
  "key24": "2RnKTwjHFCzi7VqC6cqPZE7AHPUgUWRcDNMYsF86SyKifyHPSWAQtx3MxhrSgQVShktjkNPgk31gh4B8fYDfQgLs",
  "key25": "4YCtDQSQq1BNLdxYJwNNMnLjhTHvwEtgAWNy4CxJE5tLZdFnRpd5vQJSYUKmExAiK1DsrZy98GppqjqYpCKYSwiJ",
  "key26": "4YvUwg5GG1VMd59SRgV2j8boHeUv88H8RxJBix4VEamFuhGRFTWDGEck4kfuva4w2eSPvAhDCMnu2sTBPL4aFYH3",
  "key27": "5AEDBTRafgw3VHKPNnNeA2LU6q7VUraN6PmKSaNsUH7acb5uZF3NZBuJQiyELKd4qF8BWrfQHi5mb4Tbd4WcqPfh",
  "key28": "3bSg5VytGxQywcMhpAiZkppHwCE3zVpeHNe7Kvc4xsSzzqdQfR1fFbxVUQVFQ39VSoEGrD9DL482yiKJqkZkSe8b",
  "key29": "3fXt4gh91748GWS5E4JwgMFhiwBZFJppUp5G2UapCVwxTBS3qYw2QUzdLtvj6YdtBUXgmzbNtSdXR7pc2gLDJq7R",
  "key30": "4gMzgdRdP9KscmNDMXi4kLrPfBKF3UMmdZevv9WPNCeNDxKrwBxB5gT7Ct38wk63ek7W6kTEWhbo1CVLpo9HdwYi",
  "key31": "4y7kSSixj14SWaDk138LaK1zGsKCBi3itzpFEgiTFhTmoe8ssjjeGyHeV2bRN5EnfgHPfZFy9JHrARwmvH6mJD1V",
  "key32": "gZkoaDqhoSw14T4Xpq8saKFmjBkYuDPjmTJmTcrMKR1eNctvNxHkzNeEcXXJ7gwQ8G4CwoSbzBFspB5f4iyZVac",
  "key33": "BtiF5oCSw7uyNx1smmTxMNUK5CeAe5ARqjTXviktcBPgoabW8fZESxfAws6adfymZ4vp9mHh79ysPS4hzuYdzz8",
  "key34": "3AYDgEyCEdkN6VTS6F48yczGnM29LQNMkq3b69jQUERNnQHHyds7J7queBVARimLNciXADoX5BVLdLYizbybrB2P",
  "key35": "4d6trzt7YBvNwJnH5WqbZ3e6c6Beqfs24TD1rpourWWe6SJfvgMFCZ5KB7bzZQXFuKMJRcg3a24N9e72y7po2RRG"
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
