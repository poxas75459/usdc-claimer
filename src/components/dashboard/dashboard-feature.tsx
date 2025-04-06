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
    "3LJYMsuixnNfKPkD1AL2D8u264xDay5Dqc99MQfmpxumEheqEBb5R7dQePFnHYxaRgFUGJY6rEWwYYFBEVrcCKFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHSqh3JrF87HGrb8KwCuQVJvw5vNEocGBGBGMnPP5oCs4smuJnknzvSJueEkr1zKUinyrrcyFRJRqLFDCgPhoUK",
  "key1": "5mz2c9erMcZPS68SFTVebbhtaF6UaAXuiEadr8TNssDFxKHFHsNpS8Qw36nvzyXoUyKrckf9xi6W2mUAxCfQctZ7",
  "key2": "5JV2QEFuDGvM4U3KEURuWW49rkaiQWPxNaPdjpvGrjdA4SprvcbnzQKwrkiTfwKHoo5qgAykGrAB6JTaJJf2Kj9N",
  "key3": "3eTjLKvkCJYh5K3mEbbkWqctzgxYApq2maRzPUmDQEpWYLv8UxeHN7PNtbT67PFm1bNZQpRkaUWNhKBmZifC9SZL",
  "key4": "3v4ZtMnL8svbsZnsizrYyPSNumuFPqhGSDki93MPVmnb1rHeR9CUZxGLySkMseMrThbfuNozMBxNtLUjaPjcA7o3",
  "key5": "5WWmGvuarEjLsiNz4DPuKgTS1M3xcK5FgpcHrdgM6qHWtmGG7JR8WYNej9t295GzyUYAu1bxNN5pCd5oZMH7yYwy",
  "key6": "5NKNUx7X8zAfNnKp5qQfgRSF1NNFvpb1wtCWzEYDWvkkooFMujS4GdRka4NNxVS6zcF9p4RNpFjhBXLrut6Br8Wd",
  "key7": "4637rUfLJipSLsuKNTZQzkfn4xZWrxV7exHSav8F9HRdS65wbnYKUoiQNb3AnEjrVvKhp2WH9wTbmu9cjwgLHt1Z",
  "key8": "5MLGW7P5gEyQiyWUEiZd9nHtuvsGVXRknurtH6tUKs9bp2Lyx723oTpqoz2bwt3VW33smE6zriLcAfwFQgNQGRJc",
  "key9": "3J4TxX8H2zsmQkmLMZ1HprxKm4kYFnGHgUoHhAaiRYpPwLRsb2RzRt3U4Vi7HSriffyJWodRJEqqWaW5eRubsNfL",
  "key10": "hoCPwcS5d4qXufW5AYtYPmVSKpZRr7iGicPbwegptnKqrdYygxi3v72Uh4a6khBxzwpET9KXWTNTUBdnAwirYvZ",
  "key11": "4aiPqoebnna7RPyQ7gcDcLuE7fFEUv6chYUaMAVFygV6jxezhFdRfwA6z3BYVQYtYvgQCnoghoFSBMXCQBSmczxf",
  "key12": "38BQya8nGiaL6hBLi7K325cLYfktGBA65EwJYoLkZHQQErEjcXzXyaBJYSoRJYvek67PCQpG3z5QnuAAmNazDCLN",
  "key13": "XHM1fJzM1Czkz97dje447SCfNWxaPEAQHmM7c8Fsdvj9jNGpU4jmGQsaEuwPAaTePvLNVGaaYEmtEG9XAeW58Ru",
  "key14": "GPoou2aNS2zfdAWr9ow7yFE3gNsXuETfqjr4vE92LTRZAoWGasNFEEzzJNkhC34ceM3Y4Bks3AuqMWKz9h11wtU",
  "key15": "5NBbJy6G1JdDAzYKTztHW5x9UwiTEPBDVHkxMuRAZbQtRKuqWxgtGLrCZUQaAdP1o2B451VYpos6Z7vY6aJ6QQuY",
  "key16": "8sq5RqF5NrhQZNT4VYgSuqm8NmXsVKdQ7ViFfptFgm1xwSJEv5RunjS9z2GJRusxQybJEtWJSCYWMoF6oaMTYLV",
  "key17": "3w4wpqdEc4SYm4Hiex8GDQcB7hh22wSA7cfrrpo2dadrtFpfPX7Mi5yhvW15SswEidrGVcoV3jYxury8ca2JWZk4",
  "key18": "3jA7QevDiSuZowsr3temGn9Ud1NTTdjQcdB4LCLCz5dMCcSJ6qa9jfH8LZfb4LVAS4WV88zFLibARN2TMa4NArXJ",
  "key19": "2XDzE4J8L9ivELZMtmW2HXpKu9yd41MksL6m16yrC58Gfsg3WAt7fPpKLuwUYJxtP78HPfY4JY7WSjcTfNkH7vmo",
  "key20": "5kreAjYphodjJC4h9JwZYZrM8sGwSG1zfdioX3gNbSenCNBxWCnctpa8GgPtfcws87Xjyk3QEWB95EQqZuHa5zh",
  "key21": "5WBj4qox64XSTWRMAja3Ado56qWWFo8tp52QzTWzSub3AmTRs1HCKmwt3FJ3h1AGKv4FyYNQCEmNvuaz1pWG6mCm",
  "key22": "2a9UQoJf6o4Ea2EQ2uZUDeYRgmmQy2yf98r31c8Wzc4GcjpUahFqz7jdXCGXFg3ttkbg21eqPqjQacThBcQw168e",
  "key23": "4gYVKKDEb6g7pFsaTE2AmEuAQivhrBVzGzroKsAuXxNhyGeUgCmuEfDisyppgfgwSexcESQ6McPf6yAofJbyMrKH",
  "key24": "2Kg1ngUdUtrmxNKGAe1mWZvaJpdgNrdZd5JdfYz8Qp6xJjgJ6PkmmEa91pMNcYi2Xh6EJbEHBmNgAvqxeov7AeDn",
  "key25": "eQMFszwAsgExq9J3watiSdGPaJ8ejES1bWivDxWPugY6BRTzqLvporU7dsbK2gsjSFDJnpUY3vFFBGJEFrqiT28",
  "key26": "PQCFXdG9ivTFJzuPeYwkSBg1J9FBoAM38xmHhmdQZheFoTJDoMKET9tUC1fETfKftboqfs7sqYu48jvhmAgziiw",
  "key27": "2XUk3Mt8RLPUJnDzsSUT2gx8oPMV7CGrHD6EfkZfNRcXDaDDCBkHv7Haz3V5qiVewQ94D9cb2XCmr3EDUGSKU9PQ",
  "key28": "28Bxqgb2yiJRXqZKeozeuih9zhdCxTJdrMM3hSkeQJLEBo6rjfAzbf8gCSGWr7TmAbyGDhWn9bAbAYyQc62uvNsA",
  "key29": "5vbKX7x54ZLfDi3smrgZbdJ4Pva1dKoDNuYhQcgvc1w1UwYLb7pHMG8BoJuqKL2hVtsmLs96rE65XkPG5JJisqu8",
  "key30": "5PvatUBbqFyHw6ExAKdZr6ChSC2WozTxoSAD3r53uKPvJePivkJGoy1LSP4uZMdPGpybu4XPg5qe4wAeRCu4zdbB",
  "key31": "bbH7SerghSRajoLvrbqWMsmFaQt8kUrrc6U4pEo1ccem9EmHeqQARX7ikf3pgd4FXEtCR4CsVC8UJ143uKzRVfq",
  "key32": "5Ra1oSfXHsK3ny3GL5gBzDfWRB1grVLsnBNhQkAJBDt7Bha7YXS4qq4WwqPCqkuxSe55tu7kmHdmNHM4p95u61dN",
  "key33": "3sEFJc3PURvg11fKn3WHcvpiWupsXwRTbaLRWrM9cpxXtfdMLLvN6mZZBLd89dH3HJWAAzoQ6vWe549RQzhbWTsz",
  "key34": "3YPR8CDZvfTrny7rmmvYfrD6wSUXmwQHgEHXgTzWMKMzYijTHb5N1espEa4zbUzvzV5Go38tmtrKr4MpxLv9kT7R",
  "key35": "2NSRDg7fWRh3NsLVDBjCPsEM3c3TyzMbwbqFq7FhyYdN1LTFJaTheu9g2Mi1aBjobGokxprYuHidnx8AEtknZjW3",
  "key36": "VUophQ69UM9GT5uhQtkkXiTDv791kPWDqNGQJYQfjssRKEhEcGYy4oZEbKy52qyYLiuXVzqFrYV7BVwgv9rpgie",
  "key37": "2kp8dcRdU233yiqjHTZmEoerkmxr5suZVXjdvUCC4fhdXkjzprkmV3QHMARBUiaxSnW58rZkapwcyGbNXVAX3xX7",
  "key38": "5aNHM53jw6sSTxJTPqitHazKjWsffoeraLuVnzWw5JGbWmUSFakGLBc6DVDeeJoXkhEd9wQQYjtJVwB4vXHqAjVi",
  "key39": "2wZbZnNPg2L7pQBjGb3SntKAg31GsxDME8uAid86wU1Jhox9WePxcF9cRCz88E2HsEKpjjmUhRW2W7aBm7ubDV4L",
  "key40": "39pNPt58b8FtwSq9fF6M1JpLmkeHY2wdTSDUVWQp7CD5DYj77c4psvPX2Jw3iH7q1ZRebuGA8cCppV3HsjLuRGUy",
  "key41": "4bV2eb5N4quNBxyvBU8AYXwf8RXbcZf8BCNup2arTPn6NQXA2Be7uh1dYGUmB1m9ZwHxQ6DX7aoTy9dUQ5qW9pkM"
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
