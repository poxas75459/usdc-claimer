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
    "4xwfcgmNnmDKN9f2uvWtDD6b4T1ToNVXNr132waP1e69uboPekMBDzdQmJq5jX7718cA6Z46BcvS8Mh1D7dkHbV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zvt4dyaZQxK98Urkq92z2CY6KEuQkeiJsBkbqqtRwEwVYMhwsRYejTjWLXcb1QU1uYBdpatMKR1zVauBwi8sPus",
  "key1": "5NrDLd7eNietE379BgLcfvGXQsU9oDLMqV8PyAYVjhovRkaAUT8e1TEHzPvbX7ECkbeh7MYLfsSz44v5eqTUC9T6",
  "key2": "2QLf4UJwV2GajTMTdr4Ft6ZbHEXRxn3pKZS3EzF5RkuBxwVFhUyqeJStG1u2WESmao5stQfqWcugnftfMa8rDiHV",
  "key3": "oDQZPC2VdWZ8dQk7733YNa6Zh9R2frDmAw1h2u4k2XgnRBJGVnjakhC1PAwYs1oRvW51MuUKwGEbCKbaDKdjCRY",
  "key4": "4JT1hyqAwjT4AacZiEVLhg9xYKzwuGyuB9NnhwpXzDzxnttoCm4iZLTxQ7UzvefcUZg7t1S65DX76cngb2DG5Uem",
  "key5": "5dcYubECS2eaRmWSFJ8vn7wG3ZXoV4ArwtQKmuciGg4avnB3Ftrjy2G9GQvctVxcUAAAQQB9Y92pnwVbTNBXiHea",
  "key6": "32QRNUSoUvjdEb3vqbPEWsdtXBYfpzUSGeo5VKUNE1bB1HwxPKxe52ZTr6VzQYRSpNLjtFrC5RViaeRkMvuVZwkK",
  "key7": "4HReZNkjaoWQ7o1csGWF3rmtvDvszjBKJqeouxVqepKtAK6ezykcZ8pzuP2t9tszsrweuhj4NdE9nwXGEodEAwmv",
  "key8": "4pg24zCPyQDGt4wCnXhxprdjGLfiFMtDhv2zpT3h2wjvfsrZAX7BE5euzU3yQqBG1KpjwYkW9UB7hwfvKWjKwJHc",
  "key9": "5LX7Cc9ys3ZN8nbdwnVyZe1pLeqU4TRzeCaZFskt3U2fVnu9TMeMpgtgf2WXQJrXs45sPCjryCEBazv7fyYr5L7F",
  "key10": "5LJZ6pz4BfQn75aUknVkmEkgLvVwhjKgdqbgH9WD3Ysxrrj1BFASqoHL8ArCwdNGqM5mmbLSJQRWfQksPJHRZfFt",
  "key11": "nvV5gDQB65PAuPEWCbQffrnaxWRbqTppyi8BB3WuFD12JdhEA4UsaudLqArDCdYxH3hPTYhWsc2PiRFbBAX2Qau",
  "key12": "3NhTeKmF232LghNLG1pYBhxkqSxtRupdtsZXSuGS7GnGzGheXLGeFq7nN93NXxFutLLJCVCrgCamv8fnHcbBTdrh",
  "key13": "2uC396F3vNqtz26bzNFKmF6B1ByAqCEYQ4WCszesNBEjUkZmN3PCb1JG16gZsKmAKB5DdmSeKjfdgM6yiLFBc4zg",
  "key14": "2Sm1vKn31KVKLXRRhph22CKRNpHBCx5L3PTsEXKDdbded5yTmZyAbJxPocHvge4fiRhD1qCaGT2pMHbS622MVctn",
  "key15": "2PpwHG53tGN9ZvMoDxWGV7VxDcAvzee8baQstXGpU4h7kQ66P5iy7WTEpXpHnCBZ5ofwmaMeVsMafZFEoBcqwW6N",
  "key16": "5aK1i7zonut5qKFpoBGM55EMmL8CKkoZBTic7RxfRsAZdVfkkggZmKnYchejF3eSzYz524EJ1UX3stPAkKPKe2D",
  "key17": "3Q3WSyjQpGcjPWxAvBJVATJaB9grN5ACWqGZwBMmJaX1Jz7EXkxesacrmvnQQKxiMyZBmdCo68FYWt411PhkyGKE",
  "key18": "36ReJY7PDreq5wCqqkQJCcGjbMACjuwQPvUy6DXCvaF9ksrXKhp5LZxAoJWZ9eyvM1yCbwuV4Rjd7TRDpaxxibXv",
  "key19": "5ocT1JPjGdFc9HZBt5W67SvTT9go1F1DG6X5bVtifx7gpqfxH4xJismYKsXYXziwb8m4n7mZ4VRzTVejfN4twinv",
  "key20": "bBsDhmTmzoCRPFKJiBmFZfkwDuD8kx83P9s1beLTa1zUjuibD9YQ57oamJ8TU11xTdCX3tcj7hBdisyfwpDFwxs",
  "key21": "4LWhuckQiV5EsT5gdBBJK3vHwSdfWtCbC24DrFYoHqxAChYvjY3JYxfJ6wExcEfFMtFR8qq4Y1AfsVt5afLspR3X",
  "key22": "4ruMxbhYPzAGSfmtTx4nhhT7jv3LdjGovo98MhBDunx3EwuDFxLeKrkDDpwbUww8GgaynFkuEqiA37AXryvo4fuF",
  "key23": "5Bobhu5PQ6HSYzDPQPEoi5uXjgYELMBdzgwi7jip5GRnXj2X1FioGbgmwTnAtN9nvDFfgguKpZ98t3CgGfbncNhp",
  "key24": "938c5aBShz1Yt2f3qZPvNi2zqjuKWsr22j5eKsodQnxgCe4jax9SruZXxudAgGGSK4c3Jia7VtxP5ezRr6pK6KE",
  "key25": "2GQepFigjYytshTcZMAEWbexWzK2EyNQztsWDot89u61p97cK6SBP5nkdhsaB32sZUXDqgMQSaoNBSgFCgjdpEXf",
  "key26": "31DYBXx4n7jM25Mt1GUdRsUaQ1kDse7mCD9vzzqDFYso5D5Er2WEBCwXBrX347NTpQRaBvr59eaWi7ttzVXLFvcz",
  "key27": "2wKG6hpAqLoZPKN2uWphqwTfCYjeb9H49Pm5iGE4MnaVdZneEfRMYQd9P1AHhv11wndAjEnuT2oxmCN5kaZVjUbq",
  "key28": "N9PJSfARe17a4Pg7egBxitj6rPMgcGjuZHPH37xFBo3cS8fvUcdkFwAdDktg2WepNyWJRd8F5jDD8hpmLAkPx9D",
  "key29": "5N1NYQT85dHaup8Ar1ymjqrSFA96KwzcFKKjKqVkToir86n8Jo4o9MT1NMMbuYeLFknLczqNzgMeBXbbxKMixs48",
  "key30": "343eX3XmZnjttXYrPkxbh7odjsB1DRprNBxJQX6qaqENZNexoCUSid9y9DeWutQyN9LiCDqpmA2jDA2PT9chAGPg",
  "key31": "3veSkgnN68NYLUuTQ6vy52uqMrQ3yVJNoQT5FLazFwcd7puYJ7He6iBsKS91PMm1hgYRC15EGjUCvkVWVSNQhyw4"
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
