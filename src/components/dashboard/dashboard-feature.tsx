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
    "25xi4HJuhVyA6PtNcDRprsqu5pDPY6zQiV9R1EuPxF15jsw1k2okS5Ki8G4527pdqtEKkFASKbzBBqtX3x1u2F7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aq8qLaivry7C2shvxzCL6x92rU64xfVX51SGdod7dHoHAi9oV1QsiS4JX2ondZUgYWGWGXBx3WyDPQWsLFQasWT",
  "key1": "3qKN9iggfQy71SQqM9UnvjbZvsYkbJw6fLRPEUUdFa376SkNHqaq41WH41H1hbtmH8JTedERhgQ88Fg315CyvFDy",
  "key2": "5Fxr8BuovUSHP5BxyDgM8nK4iVjNYCQUuD1yKZeXQMJHH3PRGiWNSvPfiiKVrrBKwqr7Fv3fiGX4v8qpZG1z7upJ",
  "key3": "2AhW8Y4TvfHLDoooA9U28vnBKoiPgCB2Uw2gsn4HwxAqgnjHrsp2YdbzYNArKASTXMkdaDLpb7VgZVEu1qq5EvhB",
  "key4": "5hC2QLW5vp4qjQGinGBwCawroRQepUSm7fMCd27nfqNkS2qVzv43doo3mn3yJKyxvSYzDoQHbHuakpLRkgdzqMHR",
  "key5": "5BYQebuj5fyqYQnxCn8UCgLVtPeFPvRnEnBDeHuXd72QUoEH3agujuLqhB1hNpuGCpGHtdsgFcxhDeCd6jCP879B",
  "key6": "9wofCwXVcmcB5c6grSUHz1zEzTd8DSnRTzs1XEeBrrhusvAQs8LxqtyxyDSEjVQsz2ULhnDQ41PPx1MPaC81SVU",
  "key7": "2ADC3B3G6ZCDjT27soRrvpJxfVaDRSEtUsm65bdQVFuYC1V2VQkPVLvvNb6vEpqBCmsuSTWfCkk5QHAunmFeop3X",
  "key8": "yHh8uKoKNcDtMgZfij74P2SbjeHyCwDeJfqzR3TKyk2TF825fe6Agc75HMrpDeRkdT6k3NJvFfqCcLpA374ToMy",
  "key9": "5L3YrmTmHvFQwHpKPuu9T3mkn6zeppMQATWDJiRTtqAXE5KiFfZpiDFLzq1Qg8KJQEMMsHEp71Kw4Ncu7Rbvm3n1",
  "key10": "f5jgjtfCWtkn1banAk1WKFnFu1Umef6UqekiWaPgfHxgyvxHAJJyWSetWiPBXqN6UxLCuXcdJvqtqWwdwE562v9",
  "key11": "3jW1ATss9AVGxc4y1BmouXzQ21ZFxdAs7zP3HXX5DMLvhgMGY11kNHNPDE1N2JGYCyfnheVoDcvU32MsiQ1yGD3y",
  "key12": "3JSWtj3K7UWLk7bMKvGprwdJk9uKmGd3L3M6oV16DKsvAiyTtJfrKf1t6rSbyuSNo3C7NzT28yABWYoYJ1TYjLQC",
  "key13": "64pNMiPtMDrsdf4NQrmyazM5uNrjYkuBxRUpnL2bML5Pj4s2qqM2Ze7ewygw1GdyvJJweEu27n1N14M3pagQGxU8",
  "key14": "5To4jSgFcSMADv2pUKPY1bZH7zeRzENq6s4PGcN1fMBjRJK7MPPYJWkQeJnESkWuW5U7n136dZNGh3nFYrCfiMgY",
  "key15": "4CJPTR7AwebNpMzvJjX3qj3sJx3BeBjxnxZ3K7YqbL3vBANGLJy826uaQWCm89MtaVBVbYDwysLMELP2v44h9tS5",
  "key16": "6br5x8h1DTDbRwhDGXQSyFpbxsUNHfZLjxF7hJGgEt8hqNuYP3CUHnxh6h1xW5PMAtEKvjJFSR7B1TMoMdqKxXS",
  "key17": "281xzqSKsukymArPznHzdhk4VdBkq6BCH6jpSPYTRyxMH4XV69SDyUjBq5JBpjhJaEhaW6Femm5ApnU2AZ3XGPoN",
  "key18": "PK22ivNvFvqFYoh3jMY9LncXCg1FJNSirEQBo71cXhXDb5RpLpP5hkf6hz56jrbVfXWMpesc5wFrui4xNFaupfr",
  "key19": "4472aMX63qCy5EwqVfR4pGgYPYygc8osv1xGXknYqd3thEtmxRbC1sfvuBaruN8MsHBLJCRNY6qzPDdpTdRqWVvC",
  "key20": "2LvUccDkBNuDMMMSGa2P2xU5gv4H234MWe2RCYDQ5Q6HR5VyaR6heg2pJFqS4rEDMLN3gV8TYknJRuz9KZsMZdYD",
  "key21": "5XEf7ysZos7QBytsQJ133BXqLUzfe4gXNnZ4K6rbiDyybxWwy8DrWTjEujQY1HK5yEo6BxX4ee26WZBUV7ZrE91u",
  "key22": "311DBEfssVRBJevANpU7E3QMS2E2iGXX4DfHy5KojYe7Ni6YP3ZdyYzyczSdV31488cHDk6N2z81pcsSc1ri9UeK",
  "key23": "3WrAfRFMVSNMaSxEy2EjTQmASdRSbCjvGg7pT7ptkreYNUBzvHbwz5jDsDg1gmP114wzs7P6zUB5Qem9FDMkknvk",
  "key24": "3KTknFSEb2voAGNUXUqne4xQoaiUtTzh7vKQt6mkoTNduykRWmp678gqoEPeKZtJNq4zuFGJEJrPgB8SwxbXuhqS",
  "key25": "58qvdeJqD7zZYYwx519nTvvMVDoq4FzLYGnsG5XyVKNAgELPna5rTDBiZv5BBowaVexYypaw8R2jocpjfqeuGCoJ",
  "key26": "2xNpmDfNisBaiZn9gy3q5r9ECNbc2cvAkSwCX7L5TKWqCMk7dfMNASSyuEnbEYSgLA47i5mMddsLkCGk5DtJQR1L",
  "key27": "5925uZ1pipxas91iJX4QmJMttcpnaoyXEyRp6eBpeWPJ399Y4qh5EUX4irbzLxnnrX9peCkKN4cFYSLSSHZdCYDo",
  "key28": "3zY2sE29uxc3pDLrPDkw37uboVBikqc2ywWMd4tjdmdBAb6mctiRYfamMfFaXLWB4ceG7hu4TETq1TBUNSUqxyQz",
  "key29": "4dJvEgMs6d2nT988YDoeTgLBvepeyYNt7T6fAvNNY8sw3ZJdv1P4CL2X6hDSDXrjFLSw5w86w51feGVqfovR1unM",
  "key30": "5hFF1Hdv8rYMgYhHBNuWaud2Vt47UvPN4m69jv5WKJy2nKNrs8wX7iZZvbNxCY1p2jhwEq4bKQ9equXQVqkujJ33",
  "key31": "zHCwktaZzHoirnTXAvJzLBSoMrRLSLb2cau6hCWUqH1VAYoMeJLPp6LrZsuVi1SA2tnjJm99Cg9rH2ChK5fSfB8",
  "key32": "4n5TifknVFKRn96ytxWFnMean88x5RKBP86n21XWLU5MMtkqddtZTemwpq31Q81iJF5ozAjojrYzJ4Y7znWoruUb",
  "key33": "4GAyCFygXvuXvL4dHNTk7PfReUHdcU43Lisdi3F4KbUMvj7CGrFUJprzmBJeYDKTKwoF8HxarLGh2cy8uDwxjTnr",
  "key34": "4aduBRhy8DQBdH5zuPbjEPd2c24SVL83mwVgtjfTjt4Mpfeeo5ZpFyo8BiMDcJZ9AUYjcmNL9Vk6kayNbpPijcj8",
  "key35": "5xm3fYvAWz8cbb1ukho9J35qbuxkP6GHkjGUsGp1YX3G2CRHVdhFAUBHPUrn5gqbTNBbgcNJe5jE46Msr5t45Rqa",
  "key36": "nTbfbsnRmDmKXvbKGMvs8bye3qxGUothvzczrYZ6cHKE9RB5GSY9m233Raesfu6gYtt8pPmzFgY5HeA6hNhAF4M",
  "key37": "2XCiuNpKkHMSvMb334H7mXvk8dHsSPxsfJr9fXbM46ndEqbSvCTDaFp7pokZfwpewdhVHAKWQ1SKwMt4h9SKCpNo",
  "key38": "4ff9ukXjqxCMbPjr1ikJUyGpjxgQpkhhvxLPZEYqYiQe5rj75vnf3JmED66GAi9eetmxCbi7xqtWt1jVsPFWuviY",
  "key39": "4CzC21FCmKjaW8SNdv7raj9j1yWDXk3N46ft7GZAA9YaMt5LLz1or3s19cLJ96W6E28FoyViexAWFMWgCMgHYfT",
  "key40": "4Qexb4xvfsVhisSMmNyHrzusZid6cN1MncgUbPSQnHRR8UqnyeHWWs4nvoZFW8T5C1cjvrsspAHKzq8bnwY63G4E",
  "key41": "5CtQre2srvEndvxM4JXQbnETvt8iJoQLVhFriTw7xseAN4KjXFRi4XKMi6QxGLRawHF3tJLjxzzGrDwyVZUt54Ky",
  "key42": "2XqaPxoUyfrceZyiEkBjryLJGeMFCUbZndUsAjgDvK4a55ZPiUFz8Necqqg13BkMrXiGjTHeig4ARThcrBQNcdVt",
  "key43": "xyW93PqmkKgQypYXioL5CUoqxEBDx5bPKKDc6MCnzd2XYpsWoTfLjFUhndy5UHxvvGD6g4ofhgCcvu7PsEEXbak",
  "key44": "5yQKkpqkgBFyVnUhPeAR6rnAL6W82jdJVGAmteDEJebadvx7rWeGUWfwVoQp4mt5nr8wtpT2Hf4WCPexi87XRvVe",
  "key45": "4pMg3bXBiNaWdYtVTVY7vsDT8pzXEbhS8srEUfvn3BRSfLDZw54GXUuNqTTVCBWLpnDtmE3kSmWM39BDArS7wqD4",
  "key46": "4EDgWt8pAJ4HCXh59SYGdkGfMGTCbypQtjZsRjupnZCodGqfiGmcTDzG1XvJsVvPG6doZKuw2oZrz77jJETi3c2d",
  "key47": "4XxMz4KzGoRhW6BAuXp3CrmuMJkHvd3AXPceLGsGmzsVvxZoCadxTM2oTtH4mW4qdwAZUaUR7DqjEgC2SRmsFVuR",
  "key48": "2SDtaSrxNTTzmXk754KcReresvfPcBfzgkvoCFxJmohiAUKZyisva18xm5PZfSRSgN28nXBkhpmhGkmi88o1nVio"
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
