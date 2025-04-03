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
    "4ipMnbAkZeNQ8xoUiGLQ2AGX3FhnUyR489hNSTeQx57sNDPyLQ7t4w2j48y6hhnzdU94ezG9MCwZTa4GxjcNJvut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqtA3f4YAjeG3U4mnraTUhTrwFTrxF3441XtixwDxEmXKSaY1NknEWnrQ3W5vTELUTuvPrxnvYS488EVGTwU6B2",
  "key1": "auViCFTrx3cBMosZfuoGs6HMZikGdpWEC4PhW2QcamihHgxf4QZafHVQiekSxgmwTCQyZuRaZ9c7ac6ZV8xbxJ1",
  "key2": "nzJtRU25aEZiGXChBseL4YGDNKoAAwvTPgpi24vFDiWkbLTPWnCVcRbG2XwJiuC8TQtGUnjp1FWmt3tcahbVYVc",
  "key3": "3gDEmJrJCzSCzHGz8efZuDTiWWotAAW9Fr5vafHFkMPC69FP6Q9NKAgRNdkmczAcyH32rn71aJxWZzGpLbeVJbdd",
  "key4": "284gUr82dMRR9NMxxkxuKz9FFJNgbWhdtBKS9uSuJL3dMZEc3zSYAUZBBwFozVL7D7ZffemBCafvbxMqzHWrxt5B",
  "key5": "4ZyFmmDPFvuoQ48QZnGoUmx9kVceR4r36pmcMLeKvaXXWYb86XweKWMrqcmfvbPwCbuCr3DAFi4VhF21CFjcQVmT",
  "key6": "4z7s6SSi2VZXvz8H7yFcnKBkAwv1hnVDzX8LENf7rRdaWguzGGkvqE89DSiMAMSefNbVEpBq2Y6PzT1wTH4rpfqw",
  "key7": "5tEVLJFyCSiGoL3uvNTQ8gKLnTjB55sDyRz1yjxF3aj6QQf2WoPCTNB3k1xFPqz3G4wVH1tEay6cYXSEfn5u88Xk",
  "key8": "31YZfjvDYAzyMiEaiheQNAuWbL5zCHpfomma7A8e3MLWhrYPg1p9hjcGAU7r6pPQWhYoTVzfLFjwZrhQHG3cxaMQ",
  "key9": "28rcVTZmips1dDtmdbZp5VtnQxWj4dcVyg91u3WTMHvaFyFp6XeDRNKYkgCmJ8qtMnLERRkX9EqpzQZZVnhzJNXz",
  "key10": "51eA5ittJ2q2BEtie3GSBmcjdzvgdm6fDRr3RZAATpQNtHPE3zpHh5RhaVxSm7LUGJ4Xc7CEoFq5HMp9Hp6YpFiK",
  "key11": "5XjHbnwTLr3h8613RJGXgTiwTktTSWuE1ru9qN2PBqBxiokqge2M8w4k8cFJMeJRyscNZQJF8JFLYHb4cJweiZNd",
  "key12": "yEcjsDzbxgavR8ViQcLaaCcV7hS53g7sSGYZZgFDyQQJX5Y9BJ4oZa2fGCivSBJhBUXAzjqA3cL3tQQ6ZDLTF2T",
  "key13": "5fzaq2eFZgGNhhJnphJPmKCAfK33GtiYCJVQPj6zz5xv7UW6p8wNrsLMa1vrYYJeJjsRiNH9h8rDPoQyR1wkJj3w",
  "key14": "ncQAyN7MNbuALjKAErJmZeLoC25VmChJGqRMzuhfjWLEc965N2pq1p9kxRxKYFLTihbrNgQ2YNoy8hEPMK8BAEW",
  "key15": "2UFPfuyAJPx4PkR3DEntRKZmRfAimeTNcFc5jSDPDSP11iqVMC1ns97jxGVbqCkNJ7iJR3rTuNBY7xeQwe2xjtst",
  "key16": "2EpbTT47jA2onday4qbvGQTLYXEy5qAaRJBCf7ugo15A53TS7gHE9ANcpqrhDuUBibtHMqoxkPU5ehgLZV1Uxz7Q",
  "key17": "3aeoaSDN7o5P7nd9NBB99RkJNVN7926w32RuHdkXUYXLaKM8eh9WakenfyKq2KDSrHKCaJz9BUDoxAgDaEHeJnMw",
  "key18": "FuMo7hQnFjVHxQ7hYTK8bBYA5chx82drLdVJzGdPyVGffNHzqSGwTyXRSAYhgHeRyZz5dk7YfmJMvJP1HQ8mTqH",
  "key19": "65P2kB9ghmBN6DPPgPSjhwrjgbmKMhM1uSF9GbpKiaKEFaqEDiYtsZajdpWRid84MRwn7b41qBmnQrPGtRkE2WBu",
  "key20": "3AGbqNF8Et2qKGL3qVg5QR9DdNioo5m3y9Hw66gRKpWZQUiFLZgrbWiDy82X1VVriTrecWoq2ycauYwaAgvq6giV",
  "key21": "59tKwKSz5LYfiiFNeq2nj42hw4yLHzzUiaMNELRaQQJ9uDAXekVwKs2dh6yQVAwqpuupSapXpoPx1jEvbC7L2DbU",
  "key22": "4WpQBLjQyw4YXa2kmm8g42F78J4SYh2gyETiNU7xm1WqA42RhQyKqUTCmvCU9rvfqiFdEaTNwmMPxHt62jMzYkY4",
  "key23": "63owkzVZVdf3XWMyEW3TKsshkBaknLQ2iK6p2HYNyHAW7qqrJXSbzsqwchpreWUNvaTReFfb2ngAHk9xTE1CYfoF",
  "key24": "44Z1etUU1t4NDSDyhfhG9E1kbXafaj1V4cJpCWfbJnAigQ3dDSa7ShHZt82H7YiXbh9fSQM8FR9zmNdyd4heT6aq",
  "key25": "3RJqLPZDWvn6HewmPGteK53Bh2bFaPgGTEh3BroHN6bJ3sJQ7ZsK38vU9VyDYdhNo5EBd3tJAgsk3pMvsw2tpZuE",
  "key26": "5e71STQwCVSwohsfMpajbVERyaWp6SEi5DpvSdGZgiptSSVXf78Gp99cEThQBMGqdHdDHGfDGQYmhkhkq3kfS5U9",
  "key27": "2PBtKzUp5MRDAd1es2c7cpidihsoS8H7hejiazFwzHzb1NADmaF3Fjw98i7Uk9zoMhReAP3AjGBbMXG3vvrmGkVb",
  "key28": "34Tt95Sdp5jpitBYCvNNU9ga6mmZSCbiT9yccCmBqmy2JZcUWDQxcxuWpxQ9gCAFwWqhwgGWr149WM6RRtAKdN4b",
  "key29": "3nehfrdCVD6CHFa8sdPFgYniZDSaenCbghmdiXXbQiCQ3PEBEgWnuPVDkobMFJTdm9Fqg2QqHX6bbbBYKsWzuHEo",
  "key30": "5aYJJumKNyqxxfq4EQE26Xwri6ZpLqwje8yFdCjWjyE9Mig7283tFVnd1avDZS8Kd75TAhgcWct71RWH6qY9pKPF",
  "key31": "2q8yhHYjG4uQmhqTjnNE3jsbYS2KwCK6hCQjSiTVcEgQHY1pAUTvMXUZveJHLFzVLAyjbDxXuAy66BeYGHDQnHPy",
  "key32": "RhqCYYPi1RouzdYx5de1cLdjFmoj12m2pvxVsgcpEihYtdvPy9deGzccydNJydZ3arsSbLqNJynqBoSzDbtFVup",
  "key33": "cjMvEFLqbdwci5x9rGMPnZP7zFBNTLTNtPQnqwZPEBSryTB76GYztxGexJdHhCc4fQDc4f5E39UBFAfz3mdUzvN",
  "key34": "4wFJoX2nsCzxRSqXT6PwNQZ4xWQ5GEuumm9zvuEjGCCZRqw13UasrohppzHAvLMoHjT27e8vXRk8jbxmRphb9LqG",
  "key35": "5jsz7MasqT5AFEMJcRA5ZVieuj9CauhTxHydQzDsGJmVoSMde4xiBe9jH1NqNCfMkggZC17oSUSU1esx98zQhXEB",
  "key36": "SPVgLAJSyCs5VLjAnmpHY2pbbzZENav33Tpw8frQ92BoVoGaPTC3CQDhZGhx9LuyvCTcx8oZ8GXAGMvLmvf2uad",
  "key37": "qrFzByoqBNpiBTUYptAKWPYmsrppW5srsunXUR88vAe2Qu8ifNtPS6PWEGKMutu9JyiQnLgUQ4UryxqXucRFM17",
  "key38": "4Ed3hdwPLRSz5jnsV2QowrEfmSaJk5Xcn5pz2Nr5HsVoTZBSGKXjzinZr9bcoY2ZK1Kc9Y1ipSZYMJELraWR9i3s",
  "key39": "USiR5qRyWUnKDVqKwPQLYs9HEmSuQNaSfqFybMchZjRdtWQYuHbLH5px5ThpNWwvykJukmxzRnVgyt8abGhRXch",
  "key40": "5y4NX9XViPpF6gJDDJFgpjDPHYMwYbTB5FBSKC6LxSNqQ4r6aGjM9ft63zHwvf1qzTTeJFBA9Pbd7JWSRhoaueGw",
  "key41": "3PpjU6GaWAbLjCq9tjQCYGjUZTuK7m1Ca8Frkq2zUccsdxQfwK9dckY4UfzWB3MN8U3bh3z2ESCd7HGwyWR3dmRM",
  "key42": "4WAuBHn85nnvyXkK1AxrXh1BbfoBjLYvr2GYpLYRLdMLZiYxEzkbzfQHk6NCmmfcK1GmzoZGkTiioT2U5H6vzfsR",
  "key43": "4P9S1gCsTHuf9a2CR32dNiRkfpFBiBDWZ45gtBVReRxU5oojadwMmnh253UKwUjirmvGVrP6q3MH6d6qsCgxHC76",
  "key44": "674nQuM3dxBPFCTAdPcHG69ebqVqfVfSpdo3a4b6EDEG1HfCXSgMdSByKrUicdRAUjqtqHiLy3mwqutKk3e8ceUP",
  "key45": "sLTtWoU8vADmgfUmTxVWjBhgDv1CFgFHkUUTZkoAsBLu84t6YooSeDqqX31ChNYrroBvyisJxiyBUrGKHH8mjRq"
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
