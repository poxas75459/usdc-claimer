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
    "28vX2JdruFuH5BsosELjwViywBnZLLAtrTzjhDtmTrQM2uVNsHgpGS2HvakiqtL7s86qfBgoFero53fCToBh1Z2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuALQSVPrvB7oyTNikTpahXY5XQNJChpC6dJ6wUFDUPn63jZKyhGnFSZQ6BhdE69MTkpr2yojic46XpGPxpF8up",
  "key1": "599LNg5QeKxz3Yq5TPJ3xQ1VdiZBZU9RtR1fmAzuLhC2EBTVQAAJvZp99fgZVnbFM6WRCLf9dVKrAjRL7wvLe2fU",
  "key2": "2JRkrrvLwRzAT2PipLpYJPMDiikBJKPPFaHhQcWFi6yA1tPBmG2YtNJtrAbYygGenQbsJ3tGv1AQyJ6p1prKKAN1",
  "key3": "3sgYciuesgMqanahuvg5fyEnhkm76bJob4TcauXyGdEjnFtM2dm9mhzoxg56J8bcwQ8gUKE2qtAsXrCG8PXprH2n",
  "key4": "345WeLH8ATT74YjP9VgxPCjxjaoEKiME2f4Z2itBCyCM3hrBwHpEzyhX66yu8ZjdySM5o7HEC1BumPCRLW8otU59",
  "key5": "3EV5PqPckh53SPteV46QJwoB1ZhccF6JQdtHCuDAZHaNCWMfdHAzr8hhduopPhKyAS8h4Tczp88qv1EuL1EQA2Ky",
  "key6": "vM7bxMyPPZirWawo2W2a6wUNFbCZdU1fvu7c8HRswrthYPjonUwhd1etxYEh5gg5K6YHGLLm4RcK6aApS57NTJm",
  "key7": "2yFMz4JZoAXLGJ5qzipJRZermdN2nHA7as1sTUYxLpFKbrLRokNb9nDz5eiXuqhBTF4jMM3m3X8GMxNE1yoAVRpS",
  "key8": "vZtUgMYc658ysRWS44rEQqaPyX9ExzkB6M7kuPKXcWXQEkRnhvinHWpfngKvHXef295UFVXPByzPjKhLdYN3VAq",
  "key9": "2XHzFy1mUNMeBwniQAyPjPv67NaCvAXmYR4Y4yaRL1aAgGNr1R5kaS3XMMejEWvUKYzGV3wc9zzv6F2AkTEHuojy",
  "key10": "5bqjLhxTmGqWBdRcMbsmpScFkfMHZTLypCcQA3SwPN4cj64Kpnz4PCNmiJ3A6xqZrtvgpR6PacUYY2eh2kxB6b9y",
  "key11": "2Enz2dDfBsmAb6UmsSdAaRJrG9ZVsYBoCm7N6hue4CBTuxeivcg2WneDvC2PGZTNHNWvxiAESJPQ8b1GHcvMKSFu",
  "key12": "3D2FaoqFqHHndToRrz9dsVBrHakVqTjrFVWiH5PgG5j3Ezndp94sWhN7Ah1fLjA4NtvmRHESP4JVHL7HvFNsA1kx",
  "key13": "5nrfooxBLwLNLAvP9ebmy7V75JeVgG13PT8yNRqnAp7nLxPK9SvvDaspMdrCTjc87yGXcQngVQNLUi3E8tz6XVVm",
  "key14": "3eBwN5CBQRpY4GUKFR8ukLFDzTuk69kNJ7jdvK13E8UPPsU8djYHXs8pQdfjjDyinP1SMhHXUq6xd25myYiByxQE",
  "key15": "2RrGKbyvtvVWCKWRozACyFHmreNneKGTx8V2xQvW5J8puuKHtPZHRwu7Pt3sLyutZ93QwYKbGd8sYuai1AgzwbXB",
  "key16": "4kv2Qr3C8VFN1fJeK9b1R76kwv21HJATGQDrLthkUArVdndN3YWmYp6w7VfjZGe1j1kj8ARfzjJrWYkf7n6PxXk8",
  "key17": "LZKj8yzHvFLs2qgYmXD3pRdH5mSvG1G9mufLmVfPhLCTrbQsvULA2GYxJMDQEGjwjiefTDCG2UgfnfSvGXAgi5i",
  "key18": "5dyNP41MfbBU3r5jcNpmn2xaaCwQb3pu9e4QYuJC4WwxoA7oG2FigxG72e5tRrfvFfcmSmZTRPcu8ku9jsU61mdz",
  "key19": "5i4pbXaVotHRhYQVKSkTdrrahGwytjeY7s76J5N4uMYPkP5UZ42RBd9Ev1jogUMZ9a1HhGexZ6gCfw9GRVyXaw1d",
  "key20": "2MR5p4VHhwgF3X7J3xEWQhuwZZgXrWcze4d9pMMNUCbMhEWwg12wTiDszRKpSAAjH4gEsXjdnQzafJ6jdcWEZbvK",
  "key21": "59zRBmANgAcYFZak6TG2BcABULdqYQeS1u1bHyjiDtUnxxHp3j4Ea5mBXTYWnZksawF4vBV9hmZwPcBeHZdCNNir",
  "key22": "2jF4n2LCMC4vtNtdUsyEMbau6kf5y1BXcRPvTANLA9ZASxFxTuUXewUjxHN6ay7hmPBqMhvmP2oDkavZiKE5pBz9",
  "key23": "4j9Wfiws9Ry8w6rdkCa2DFxWvKk4JY24ZZmvVyEoLm7ydX27Tg7zbyZPrB7qDwWaSaPQXMubPyCWa4NbXGzSyV7P",
  "key24": "3u5M1qEjsXkfixQ9Mrs43RFU2YQjxdG7Xf6YFCFLCdj8CTi3u5gNYV3XyEMUXsbktc7i8AcWPgfxBibh4wV31Hp4",
  "key25": "B1jDkKNWxu4ahwGQgN2dx6GBwe697gFjzM4UDAnHFGi91pz1X3WHPW8YBB4PzNoJyZLo8NVxj2erKCWgcCwJ79p",
  "key26": "4nHsvA7Z3uHv9c2BhvLb2uyJkhr1nJP92SiwheQ8bvRP6LAsSY29pdZmMBTFPdwCDJ93kGfnGzr1xkewJ9P4cuxw",
  "key27": "3Uj46xmhLFX19NGp8EmfrXPj5HLucz3uNUE6v7tByULuJjjjJmpXxfH5CMLPNy4qbGZvkrUnVwnrwWEYrpzqdeeD",
  "key28": "4y42yZiZJfQsuNa9vHAA6gJd3Yw4QmiNmxAiNq3jvR8fqPVGmUPzCVKUt2xUwoZwmsuQd6JL4SfCTWMPGAuzYEfV",
  "key29": "4t4AN4aVxetpeA7CXRwEE6V2YKugXbQ5GCHowLM2bYnz8jrP8Dv4zZwiQXihVs8jLFzHskPwtx8AZK3Vr3Mt12xu",
  "key30": "43jUGrwXrwnQ1zRcnqDzNhKJRosjjJwTuK2WujihzortThh7rkSvcj7SLQc5e7Tpa642dTEUt9uszGT3zk5aoZAa",
  "key31": "4nmJmBfz8BmQh6ZYRc5L1xFSjrrvTWvkkGp2P7aCNGbZWu2cGvbvTK9RQaDnpEhzobU33PtXU8yiLvxAZheqZVda",
  "key32": "2uajD71WFS9LVHYGgSzogYst1oWxAJmWnReyuEf2An8kqqSmAM7fKLbuHxGR3thiJ8JZYK1tjSYuvwUHHWkuitDC",
  "key33": "4tpmVai1sSrWgdbcU5cPxEnjmVs4DyPf3jRb535PQtH6y5z9PkzSTvymSiXfATRLdyd6vBSbWDBdhM8LSQcGY663",
  "key34": "LtLFmjTAW6nvuvkryfDgRNZ32EnxjYFhteAXB9qmayV7PdJdnP2rrVXWoQFLr2zb6Rt2jXriEnfoX2oiMeoPhGK",
  "key35": "2gSZ8gCgC6zGNXWpW5gv7F2fjRzjP6DNBySkDwsgUeAfjN5EJtSfqrC3PWRHtGh4JFGzLx6DP2VuZSUfX9orM14U",
  "key36": "mYwpGaNwdiB9XvamBWTHZCdV2RfzfC8vfpEKbvFcYCY7a6aXd6SENttUPZg5DT6VZnYco3wVAagDHeHFtrXZZaN",
  "key37": "36bJLN8M2CBsN1vHULi3NPDcabDcnHvpBHGaD1vgqhMsrv3VMpWydmB75ChAqHbUKk5FSfPFQuJMbdwjK89pVfkd",
  "key38": "5DiLVyBvwQBNqDhQYgfQuKYZY86VSyPP7SM9yEppVFZJccKwKj7DThqMzr17pVLwvE2rYt8iX8yW7RHa9UaYwe7H",
  "key39": "2jJNxEyKUtCtqdPMktQiQbWVqrR6FspMgJDqnfjPoWru91g7qJyBYjPtmCD2rJyAYWshrBAUkbmMzFB53B2xiABu",
  "key40": "5giqEuSKzpU9WXCn5D8ckW1KKVmFh2v3gGEmFN99z3oLTrTY2WZLdzLV2oM7g4j2apcsqSk4bPJqDmC6DrMtGCUQ"
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
