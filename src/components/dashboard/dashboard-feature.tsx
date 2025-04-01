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
    "49XgfFzZWmto539CdTK5YprgHuiC6TEjrkri7ct1D7CSJWUhxcjjAiDfwwSM1HnVin7H51Kvs7vUyqGNyEQ8FFXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktqgrjrV9mRhQQ9dTE7Ms6bhZocyKnbYBqDPG1MgzVPzzLEBhZZKCMCVY9MaEw79QufFv1nhUcaPU5Z2VWhpS6Y",
  "key1": "4swB5txqMhH98DcpqjD8xnCwUo9KAnGNR3CdVphfWyo61V37UsmQzxMhiELgmQXQGvDXNFhKvcVcJCTKLPsdaNQF",
  "key2": "3wD4UXw5RMFsBcoVFmXjUqdNEZ7jUGkwCHVXS1Z29PZSEEss32cuitf3roaXLDgVpEHYbRszhwQnZi6BsuazQxyu",
  "key3": "2qoVyb3gm8u75qWEEFJ1swtXEswJvgeobX725bCRVnfcG29YBJPLS6C12vTxagRRySBohM3AfnyMNrUgae3cHikn",
  "key4": "4J9uoyjf5z8jv8JAf65k99q5xeqzACZeeBy5d1ypBSKF6UzmmBFmxunbwKGrPPgC8QBY2Ec7eFLsCHPwdVKgH2PN",
  "key5": "3S7Y1WDvN1uZfZ5hgbG3g5AEnP9cUMJDuSuQFzaYQvCYE6ieg7PBKSMwuL4vAddbgFTwTwAsVtc6gPHmsSRD5PBb",
  "key6": "52VZng8JwHBm1gwSm4dhuzNR8JJMgB5cjWmf9aTgurbVz922zWq7uMopnzceLZqgaVVTxyEExoPHRwgL5kXaDrh1",
  "key7": "4gznB9eGsG9Lx1GzhkJ2NKBcYNKJKYj8Y6uuuopRvdfyndiBzHmy2RuiNrHY2JsPszyxju4uKn2hLxZ5uLp8gGkr",
  "key8": "3gLbN3BbrNtsSAuNbcrFuiy2opqddcyhar5j1vixx1TKz1Nn4EebNhBNunCAejHSj623F29foxFLx9v4A8dCeVB5",
  "key9": "2dX75Lz1KxNZQduqU4URkQiVQtjHaD7DuEbkRnPQmiReGzAi3f4tA3mQxftZGwQNdnm4sMu7h5r9ETy7QjT96tbF",
  "key10": "4BAXyaEDTwwSW39r76EwX7qyQZj75hdfSNqRieUYuDGmHNHh2wNTa5qhhrB6ZyL8fxHEue9CFRzLAqeMieyTYbeq",
  "key11": "2FyF3sJNy2WawgMshdt8asWrmcL3dFf1d5KZhwwWQvAbzXsix6mMPNXvAgy2z9Gp9zzbdxGZiefLbhma48pMZKiV",
  "key12": "i5DYMGt4Tciy8ao4MvSnWRrmoBRxFNWE8wyjoe7nQgV8EyBJLZPyvggeHG9NsqReJSTC7By7rsuo2RLmtTTKnMc",
  "key13": "oqVN3Le5awfYS7YVpPC9NfdHjYB7QRXyDhvbS3Hg7cTvsRorLvCFSeJhY8vgRGzKcHnMuikUSVBRPUpKnu1QpYh",
  "key14": "5w9dG1ZJRcRAdeCifFYfiWuXfgkBKwVnS4grnunuwW5pAHKXNnrfU6ue939iwcBZhykXYC1F82MnKGMnruXYTVJy",
  "key15": "4FEy91X5F6uEKfUpRmFwBYpV1U5A6mC37T9wMVX4gznF2vt9fBS1Aa3LMix4DUvmrvLEtcZWHytouHgnmdqNLcj1",
  "key16": "2HDzaDyZAjzqK4GfgMUuP8XV99r3VqpsxeWenUfkdFvXXLmeFiGKQiQ9rfZrCVYfeVkDFkoky7RHvjywmoCoVgd1",
  "key17": "2Dncu7kUftr91Lm395a4i2gCRTmqafDnmygesmDS9aYo2m87adtbuPGzf7Km7SVArvdbeQSeTtLaZivgax9uZwNM",
  "key18": "3MoWZ5ftfebQCRVrNMhdBv3JuxEkPgCk9uiDEW6t4Cx61stWLg8HhswAFPs6svJfLYM7Kn5ARY9Lx9s2XEfjRybq",
  "key19": "2YAZnWTKTtTADSqF8oa96SYyPmPAmzKbbUKCeuQBxtYcHZwuyMHszcnUAomK7trXcUJYDsouU1R1fbzrQzvPaUgJ",
  "key20": "2EWJds7UhJ2MiGTm8Mu6va1ow3QB9VXXXK1HkMnsos5NBuczGaDEK6Cccr6pWAdYrWvHMrVpi94wdVWmEM1sxXfg",
  "key21": "4vkSfQDjMt4pcDhhQCQQPQw9571yUSYWevxjzHjEgBcP3XMovCPjPAAWk9Vrnpd4cPDav2ewPFUmNfWeNvJM8ZLi",
  "key22": "53LH8rUyfoDWmdP1n44NVd6eWrtFhyeoy3RCVEJ4cNC13ew1QBgFvD5PtTwqzwgsQ4QmyT9jLy3yM4SMHEqLT2oP",
  "key23": "ng2eBX1LB2cd5B4RvsisQhqu52ezYosHQPxjWgcoxFfwTCqwJtdtoPit78WZzaLyAA4zsb27ZkRZEVnwcr1D9Ls",
  "key24": "3KD1PPuGRFpKj1nGcVCGSx8DBJW9H7BU7boxYZycvViHjBQoWc2kNLpaUyQFHsbJVXnoLVvipoqJvPLWwcfpAqbm",
  "key25": "oCuVSykmtzmgoHs7cJBPiDEB91P3kRRFqZgfsKBa2hvwe76gSFwizVsZj7hCDiosGvdxUnsj1qGUMkPiVFHKa5P",
  "key26": "41t4UJkNrppVXi4GjjFsT6cyt6K8baZVcxCRwasTx7QKWzgBfQF48TjvSrCkFnKVQSxURiJ3nX4ecDNofqK7CAaZ",
  "key27": "2FaeY9HwGqt1QiaM5b3g1eFY22uwWqf1EhnDpzVfXj2F4ZL5YSbbc2u1gHyxKV37icmdoAgjG55Hk1LS4EFnDjM7",
  "key28": "2T477mu98GmE7L3s4mv6tp9U7d5iLivnh3MUKRGG1Vx7Nkby6gXatL8VakeeHHCZH5wSggR7f1srHxqi5m8pKquQ",
  "key29": "5cTbSwfNm3MJAz8X9g4EjttYYEpMG4u9J3ncqhtccrfh2UvQJLMbHBdCALqiiQPfat5iGn9PPsJbgyqdwg9QLfZD",
  "key30": "3y9DNMd33BzsHCjsNT8M21AzaWF3hJuFhBNvNgL8x9MNRDc6sfcJA5bmyASxivxLPDXyh6PQxJrfGfcimu6xvnuw",
  "key31": "5VTMMgfizjQWPHPTsTrFf1fbR9XrU2YL2URzz9ipdDr4E9ZVkaTsapd8PrQK1iQSwZ7go8epkdNw9Xzuj6dGLJY2",
  "key32": "2fkNTEgQfxPDbkiApZYuUjvaefuGzf9PAchvq3gHAAhHfkqT1zqPNVWZ2iWCJfACPhM3oCaDwtnRiqvSzWxdmepy",
  "key33": "4HEnyJYxPMgdvxvXzRhijG2ATcsXS2xvxaNFMeBw9w3ddPcz1RzzjUZK2QWHLzYE2AKX2zohpuePmE8RgpQxXJvL",
  "key34": "3ncWht1yXTYTjphET5rR4UVGvPzpFbhBMw1KaLsLYx1XKAMa5mqXRpXbmz76m6Yx7JKrUdGoGsAVt1VAmC5tJKWQ",
  "key35": "5ydzkiF9TniCcs7SVNPGLH8HomSKCDm3AuEyNxu5XwKwnihMWnAVUYA69cK7sdWS9xcSMe5YHxSb71PoPa3vNWvh",
  "key36": "5WmFcSuVHkJkSKihjYTbTRKkZhtk9kyZJVShpWThxy29a6TdPdiX6YUdqKR4UiPjmHEkuhJyVvwpqvMFxTqFBSTk"
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
