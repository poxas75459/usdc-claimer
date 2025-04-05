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
    "2tssnDD5B588kuNb8uDnPDzsrvamWzTdCoPrBwt2F8XVtSBeMo4JeH8mNmDRWSL6VrkhDjeESGmWvJD5mXj7gtMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkUFkb73He42LyjQZV43W71KAmWQdy1qyz49Wn5ZzkU7tPBiKRJZVbJYKu4YLvqSRD43zesHvyQSb5mG2LZm7NW",
  "key1": "sZASS1F3Tkt13mvSphBfce5rXduU3oBkYS9SPu9WwJfrvCpZHdLKiip59qNaBSMqEYKvYTXP9fUTUgUogXxLT9b",
  "key2": "xaWW3NWJ5o3vJo6LbMm1kavCamN5eW9S1Jqswi8DBRsezJ267QT1Cm2VcSt7PkpJ3556HHi9q4cEQLZRLZTqk9g",
  "key3": "57nVPuiyUuifKkMwtygxi7owJvf364PWZddmDeRdPMDrUitBaUaNywVU2nxoJxQSyJSb5yPYQzEWyeDP8NNm44DL",
  "key4": "4Xn5J4sjRPambAH7Ln4kByw2mWoj5rssbkwWFCn6rCA3MDySqgY4KHzUtxHzKbZse3fE3app2RDENTMeV27PmJ6z",
  "key5": "5KTN7EFjuGAUqasbVjojRjr1oYUYSQRYpivrFv4znHqqaPDPBVAhqSYYDVgCuXkwfzUj5o1F2ZZBRpHxSVRnjb3C",
  "key6": "5j2WeraxkkNMCHDMedAo75pWhNvZ8JBiUM1MwT8obmBwAnDPjXdJ9CzeoGvxa37VHHui9hVRzLk3j3JJcQsr2tko",
  "key7": "4HZu3c5X4FLXWStEVWXj9MNK2HB3WUFVcqixGNQ53DiZyPSZXZ9t1p7tjsGzMhQh56twiBwdtmVE555ZAZnwVz2P",
  "key8": "2stFTFnfP8j4uGinTrjc4RbF4rkNsztQZJbBi7pCE8hDFLTHWYP2amQivQxVPMkr7Y5LkTV8arzw9wr3hPs1p2KY",
  "key9": "4J7ezcQGnDhnqT5zjtzLBbeEFxrV5SKN8yxVPdJe3LUrc9tefSKcg5KJxirkB7gKSgxoc42bL9XsHD4VU7xQHdhd",
  "key10": "Bc9XemLmkGgbJ9fdC2936YSwRjTiTm2N7CSsqPfBePYRpwvRDNNia2kAHCbVy4ijGiq2pPkBF83BATcH2EFUCt1",
  "key11": "4iMFfMUiNkSzFAkbSESVTLmvuU1maxuaci874xVwPXXf7AUUQ7shfVLBCsB4m3hu1G2UvaG6YrhdLAsgJdxTL234",
  "key12": "3bU1H3UJPhUyN8NWPZZYXZUXMnq2DxPnfAXYqtBb7TTL8ir6oUoydDUY4pVMPm1vEVscHDvEDHjYKeuNCHN5TtWH",
  "key13": "5MB2Ex1s1tH4551pLFicWL9rCPt9o36FTRh1VXSVa97ERx7MkUiedz4uAaJwEX3XQcRMrWCu1XCiteBMbRUznr5k",
  "key14": "3dQY1WPxUTJnLjZgCFMLPfYqtc6NbiKqAFuPqvMzyNzbMS1KiUfqh5Hb9QedKHj1gDvxreAyLZbfwRGpQpddgi43",
  "key15": "4aHtY4ZKyHinaGhnzgFCKFaU3rrrWHaozw6v66bgtQSGztEfG2QFGSsKwgvjZVn9Ua96cZjPWTY6FGebrm2iqA8o",
  "key16": "2CuHV9FNV9c1C1B8zrjkLiA8euLETfSr2xRSPKYBP3iszBoY7oNk6jtD3Ucsc53WxGJ8WufgqWazoCYo9uMoj2Yt",
  "key17": "383LK6gjYwAM71TRH17S9pMPK7BVvdySx3ErRS7yZVpsg1DBcrzFDNDPFRUjSU4QLotrubxEjBdEMPTuUhW8hfqu",
  "key18": "UrS4TMRopm1x8xxLrt1dW9swyMuPXXWLsGEe4pZbqmzryqnTLgFSymtTixQ9F9jcsZwJnRijQyiCzmemLMjAh37",
  "key19": "SbXPp3UeMf2mqgCNkwQmzquoLu7PC4zfZ5zB9mT8HcexBhoaDcaMC6VTYXMNH4S6vgAWZDnydyrcBTC9mPDJtQU",
  "key20": "4dZaB8AuJfhQ7sLySmJubw1uJaViMyYdNhqxAuzy7HztY1RbG5KbBLV6qWnFTNM2nNZCUBMMVZnM7CsogrHPtnST",
  "key21": "rvvKYMDQhACwx5V5e8z9QeS6aU51uBdtPBYXV5nTFGfc42TGjk69xkJ47mKJ7AXP7ASi1g7TMPP4eaEhaFEWXF4",
  "key22": "36MUzrvZBACrKuvnB8r9HUHjRrANTUDzvN3xt1ceu38YxEJFT7v24y23qYahdu5bhgLuyTkJLuapR98rgM5HMCdX",
  "key23": "4bZ47qQC99pjgpGHGu8HA3RZJdWdi1P6k91yx89PvKsoJ7scRu1eaDK3UM2jJgy6gWihT2x5uGH2ZGq2fXr1g186",
  "key24": "5AdvJiu2qyMhv4wcN6bmWumNe8xS5Upd8tPqQQECC9QUWzT1Tf8etk2v1QMdvkYxNhJxBZdBrBbjZJHoePvz5RR6",
  "key25": "2fj7Gmqj5kBjG1Ag2Ljbggbn4cZzt7pPquc6YZBr3XohDSViqFjyKzzFeDgpceWc9p3azTv4X2dALy2YdUZEgMP3",
  "key26": "4osKCjZ18aQMjzMt1v5TTm3c2XLwtVf1xg67Aw42tkT2r9RnQfEDq4adsVT81bXkZuEKBUKrzFVKpoGjJUhrkFZH",
  "key27": "4gBXdi1zEBxV5xxb9EYZFLWJNC6KNDV3HMUQnBBFb1DMdW9HyjWf2UydUgErG4F7FiZhty3RSqzaBKgsM1tCaxgn",
  "key28": "2aH7PzKv6UMbnbs72MCCDTXwHdYj8jYnN9v7DyYaDozs8qvkZ5XVBfQUZrmowpCckXgKpvDa7Z7mM7wBs34p4ouf",
  "key29": "2fMcFx1f8vEMQEdMWLKRJcMB3XYNbKsZBYf73urA27A5jY88bkQJYGVUedxrCYGvfopLfT99q4yejewUCk1ePBjb",
  "key30": "8Hww41BQemhz26zSAwWugkxCtTjUiHEyXDrnPRVVnT7UkS2894bKXet24Qk2MQ6ZiiGiAE5mXRo4jMFPRsLeHKi",
  "key31": "bcs8vSZ11g467wUkCfBPPrSDpAznnw9GP2r7mNMKhy1A2WKVZiRbAZKJVVYBHx5skRvHyYAiShn6RyqxJLxzQGp",
  "key32": "3VBFLnHqttysSVPsmkL1dky9J1hLvYecGCfQZkNGbFiwAQZK9oAuZJqvmWmnxxjxRLN7eAKquyco42b3uW9cPTQ5"
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
