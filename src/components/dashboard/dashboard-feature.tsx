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
    "5QQkDWLedcSCUb4bbrnsRKpfB46hX17Kr69HdgHGXx3qbb5Y1ig8YbB1BAHo5CoNnKjbL9pavmvZrX59EQqNgZun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVEGHU2cFrZtJGGzXQWH9WaD23y9LFY35EUH5Pqd9ZCSvLZqVGMtHCMswpiprR8FLMn68hRxsC65GRSf6o4mACe",
  "key1": "2sGWvrowTTMpnBDr8iuThyj1RczCgbMmiQAyfh2E29Hu8WGQe353zwGWTWzCtpDD2R2TjiQ4vg2fmMmd4YmEiE4Q",
  "key2": "2q9kUdVAVSgnoYDW3TL7ZBV1VwnJBGbRC1Z5QSfGVVabmcpRzPoLY5PjvaVWkPc7j9rk9AYezLDY3oqgFitMadKD",
  "key3": "2CLoTvhFQFv3SDSLcfqLpycQUC9qmaQLTeLsxEFqTpCg4C3XJnTkzgVtuERYcZu8gA9kJ9N2yrcrTRfqesiy1mTF",
  "key4": "2oguedhRuRmPPF7megQ1cKmNcJcoHWt8Qic5C4UvuAQ4V941txo4M6KEpLPV6knYutr73RXfi3pV1bgUuetqoNoC",
  "key5": "4BxWYK9ETv8QJS5dHaLmB7XbwSbnNLrRAxpmPBMbuff8UUkry9SCqu7vqcqeurKgkwXc7HCNHkyrV149nVdd4NYy",
  "key6": "4zRsLVHdCdBA49NMLPi7WERkfqwHaJeWhjRsRBM8ohYVZJExXNMeJ8QGeD1oq75FDZX1yetrwHpRMRo5Edfufv8a",
  "key7": "21Tqaa2bFqNsKR485keJUZXPVRwtVR4WzhsLE5D9SxjQYX7qvSaXBxyndxXhAzo7Vz8h3yReEr1YXZH5bBmcRrDF",
  "key8": "3fX3DR7wXBmiVvRfHQe55ke8ct662NPV371wRgYGE74xgg9gpiCPppUoFFT1WDmdJ9r9frJ9iNA5pdNdKiv61DSC",
  "key9": "ErBLHFe2e7f82BoPByzeYmuj64eS8kx12pN1nspzixBofzEbQwBkGhjFvQvuaYLbvPjJFh4jTikAyi4HFvimo3v",
  "key10": "Hy6Gu4VSXZXWFfDg4yXXJCHiDgpt7hMrv91BC5mqaWKJMdZAe4Ur7ondeqcyv6riUj8DeAxsfz3LXakEcuAAjqN",
  "key11": "4PU4vVGRfAGSTvNj7GAcHMEuY6tQtyx1QrqoX61oMbfMpQ5ykwhbL2QZd3TdZekzvGFsQ7orCbm1ooTEf3J1ZQqX",
  "key12": "mygC1KaouifjYUremwZWyp9naKTRPK7KkD3pF4SsoqPfT9isJJZsAEgXYfpxqSzr4PPWTp4y3BHXQ5ZsPxAhkzN",
  "key13": "3NUW2RLRQR1Wi3EYsCifCWXgbsFLosyLc8AEQjnahLJRS4qKsAjRDyQxEt3P8Rpy2Lq8r7ZZxMezKi3uwo9ceoSa",
  "key14": "QRKZtorEcrcJUf3i2RDMdULDsHUTXBhLQokjLxEYzv7rxE2CNvHqceQkD1CQ5xFpokjCbpkUkgY93UozJgZdues",
  "key15": "4Lgkt8rRnPFifhKH3XsRa3c6eQ6mNnxsKZjUbLjkgMzZDN8SE88M4jMybyRCQ7oioLSG8trpx7fhSFdf8Hs23c2a",
  "key16": "2eMe26wWzCkp7x7XxtqoQhM4yd21dRQRVD3VSbXXPHNZfCCF5f3hvSS71pkRnsVPrBMEkgJs6ktAseSjtwveSc2v",
  "key17": "4GzTAE5aYUvci14M4iKeNXgGmFifRd5z2jkxWgXMTxiAMjV3C52kKgTxVZaEXC9ZHRxV9VpB9bm62YUddYsL6oRU",
  "key18": "3RsRXpeqK51PmRtdcb1EeLZDcaCu4Sj1srjxgrLr2Z1RsdaQWUjX8PMJZKKgEMzdx5YnBhFgjhWJQV1RG1JpU6zq",
  "key19": "2r7kmPNexqhsZhiiGQgEqu3FJvyj13UcrrnUsjHFJhMoGiCSzLhSA8Cr1JGFNvUauEa2QWNR7SwHwtE7Zy9hLXUC",
  "key20": "5KokQkpafLPHTH1xPicTsUYcSX8gjFKDewQCspk3HKfxPHQNwEA8QBeStiAFaRuVvnqKxxjmxKwiweiwB7YKQBPu",
  "key21": "42Gh3PLZyMSxUMPZhjpzTLXHpPJgPhUno9mp9cNifa94wgRhFPmXFe445yLafXfpePmMitvf8cHA5mexPqCoh5ME",
  "key22": "pTCGuu6nReRzzs2UGng7tArqN5XMNFnG2tuusWBT5WuBWzdSTxXVxjH3gHhH9fLF2mGJ3Yyf2Ti4ukbJbDTrE9G",
  "key23": "3CHFVUEuoRoKVZxcEtmjvDmaBEcNcA8qwwttMNyD19RT6NzfgELax51gm2z3tXPj7Mj2H5GpAgyC8d9GLQa2DXK4",
  "key24": "2YJbTkouayuWBd2Db7zp934SSTyizENfQd2PXEdqUAioYJhDsPbNNBdBaD7ojQgeCdBNg22aaGLrkegBq5vXQqP2",
  "key25": "4bkvZUb6orTvPiBee5i96Uz6ewrvRs2MGVd1VkvFUdg5RgZsFah2NdzVQ5egyK6WS3qx8tuTr2EEANTu1Tg5sYaA",
  "key26": "2YNzuEB5yoktEeJMyJcvKSHd6oXkvYYGwf1nVGjDT6fjoa1AgHZMV4qodcHvngAiMX3kc78ECZXP27ZQ2JLWR2U7",
  "key27": "4RmBe9fuYqb8W4WsAwJkdgMAJ2AWrYuYB3g3ory9JU2z1gp5Shf9cJbgQfkBoytJhhYDTcL53VsmpWbwXu3oy3P6",
  "key28": "5W4wdAgXPpbfYn8NZ8FJNbLwSLaHDrCdXFoeTkPmBAEGMPcnPQxaeQV3SqJDHJt4CoRz1wevep6pWYLuMVfNdBjs",
  "key29": "2SQeAeszEafZ4NHrUFmVm8qJGkMpfgMxydiGGPs9DgaNqPpLytvbEkcVupQanWGzmuZzoBZeb8ws33EbiNwLXXWd",
  "key30": "4WuTuQbBGEPeLezmJMPzhVdGVn3AoD3ogAv25v5MtdMotfCFgAvDMQiVB5uhwFpZBAytmV63srG6ZL2h2pfX4ahp",
  "key31": "5vweYvz2NPrEUQHf9FvZqLnvoRYDMkS8JeC51atZchofazbnBDvChNs7ezEm4aKF8y7iNa1ZSjMECW7MrmPp9BoL",
  "key32": "31o2cJFMtSNiBCD3LVSM3B78LaAxwXxbYYdgbvdHx1uZn7puRq5uDsxYCMC6CChDAG4F8nUabxivaHHNHDQ5ECCA",
  "key33": "5b1iLgG5GuPz86tEbik1HVw5HoB6kGekVUbNshYrn5PddTyDeFmDHRrUK8tTeo3zqonX7sahQBNWh7Cd7P86rNvd",
  "key34": "4Cx1UFdxVGuPGaSVRkHsePDVhV8nofkdPHBGdepuJQBZjpbJ3Fjj6e1VkcV2xGd9tT62mDc23K5xguLQFm7A4gVb",
  "key35": "4j91rQAnaPPNb89e2Uqr1jhLa6fazkPVKtzUAPcLWUETdoYvt351yVfdoTrYBFB3yvNRWVmiE93WECfmMzm5ixKy",
  "key36": "2rve2ESe9vnm5JywCQX1C5BJbheMrQkv3Vk3vvEBiNNaWJEt3n3QzQJJKbVDKHaFgydCd4YYibv4fbcGELLr1uDV",
  "key37": "62BQweK4PQziwnW7454WbRLDkKGjXzj5iV9WZmHB7V91AbDDzRoPa8WoHXcwQPY92ERZRJMYjkVKU4Mw8BPeo6uj",
  "key38": "5cfduBU9dcy2gDYHghW9NejdMfTcFyQiCYfYD7K8Y6pDj5GcrwP8FM8aRy1fhKdjowFKCAPuJUr6KwzV8pNxvsAp",
  "key39": "35fihc73M6at9y3Pqez1xD1iQ8V7Cue8PMmxEiV21hc3MiuCcUZJNfHaMUT5JBeCSpWL793GV7XN5WvuLgHFghpg",
  "key40": "2nVXg2vWi4X3aHUE3sxDW9moBE94xoTznhZzzFwmdkJz14yNDcyzzxwWNEtaTHrYxXHyF4t1e9XXit8gRgR8WwXS",
  "key41": "3cxtmxEtkggMFPu6Wv2wd5fNNMi53iz3saP2tuTBmpy2oV1Xxk6uFGyh114ufBXd7rRYrs2Y1SEXVA58mqRwKuaD"
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
