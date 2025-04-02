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
    "5fDmGp294XycCaxPxQDE6APBgewxC5doG5bebT1XFYmVdp8aJqhNDZ5CqFtdPatAixp43ZuC86RPQj31eoynsdT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJaZymGYXPHTFn92wrPT5bCANhxBsRn6ahxa1MvMZhGhKtmaM5Lbtkswuat7tRG2TdRnytn3e4GhqxBDgsL1Xjs",
  "key1": "4yz5CsQqe6RgTSboRJqbAezfDB4Dm2Exm2u8AmFNe75UwndWmBX624ksQyhyTJGaePRdBudYCNmLViGa9idPCdLA",
  "key2": "4q7yvWtJABQBd2NnV7apw51LXHarTRGvWR14yF2cbZxzdQRY6vUZwDy7sa3Tb6mHrSEcoD5QMwCZvSPU9EivoiW2",
  "key3": "4KC7m1pGWrtdPkqgUVf9PE6M4qnYjofSjWjvkupnAJnvQMnQZAvMe1Xcsu5HCF3NJji59BY1zdN9coQBkejJ8X64",
  "key4": "bBtBBPDn9eDhryLmHtQBTPW5qvsFtkFNyCHBbPph1izfiosWMZHoMcAdSFdyT1RfLypwND7Un72HQrWDRqATDHr",
  "key5": "4YkAWTRWGXKMCxVTJAzrq1ZxGquMs368aMoSfaUQeaA9SRsyLm3nty6FYp9sFBzWkTkcXedAU86pnudg1yEpZn6n",
  "key6": "2wTD4RcD7H3DWWzAtgrJHKE2jBgZviLFYAdhVgaLNXdj9UA9kVmF3V6j28G9GjDiCysioBXdgANdV4vKuttDLudc",
  "key7": "2wdsZZdyUetGCegho4Fk1zZEr5U8uBgDXRNouvUmSq9MHUd1UWhK3Dak8NKaTGd2P1dVCNh6LxN53pebdq2Ghuza",
  "key8": "5dsxQb3fE1Xu5Veo4VTRejyaMmyKCecxGPQLT7P7o2KTSMFFMN11qARFZCPzqaxuWZRsvoT16s1Bu7w6Sv7tppoD",
  "key9": "rJCycF78YZP96xvSoSp637tWiCjGER9jUMCzWHsVLYSvC7HhDSuuoYhzUxpRZNRUsfn7rqjsA8fLFpBgv7BCoFo",
  "key10": "61aawNhAii6HfSyFiUZz3QFzmcWSg7bmZno78fCCxccZ2u5SeZczdU2Kv6WfgR66PKLxEdp8v8EmTU8TvLM9Ld84",
  "key11": "3uUdKX28VqVapzgKUeMNwCUX3gK8ve1gW9vCXFVxKupuzZXFaF6gSeijns89KQE1gFDFUcaAkQ6bjSXyKfpnd7Bu",
  "key12": "u3Ne6crM5UGUsapPCCxZC72V4wroDqWVZPXWbZbcDWVZr44ckmWSzhp3GYWvjZfRH18rwFvMqWAzuE2wb3K6gmP",
  "key13": "3QnSW1bzK2gNVKae7bhkcHieBSNNicTY9gQ3gg6bFFYW7jFFgpG75zAx3QdDyov9XgqNRodMVfy5Uxw8VhBq2Cer",
  "key14": "4n6Dps8nbcwgcVXbEo3HhsuU4denUXH1RewmwX3UKsd3RAs4jkxAyKiaFCb8em8bFXqw5vUGCuDApXmYrvNWgY6i",
  "key15": "RQCceAwZSpfyejGdjkSFgee111zNYQjm25xbUWPDfvAuUfQMJUmaiRcyJMhS4nvgWNMDTdSEW3qejvcELAF5yXa",
  "key16": "3ybzdXNzDTWTJbYuhyXKDvCrwBPHjAdRwvpdmCMCQEHvFDkL7k9VAUxZU6GVTV798cmLZ3qve7AAS5Mew61y8fxp",
  "key17": "5HX7MKKA1GaY8JUxgbbS8f28nXURacUgUbpmmMuTQZnBgX5CuAVJiYTc6th9MMH3F95ogBr4ug7obvrBkNiux4Bu",
  "key18": "5dqX5xXE17NZQVaqQGFzPaMxXLK7T5oWiAFK6bRpTqRx7Vg1hZdtm8oD8YiVfbpy4qdU2t2fYqy17jHcPH7qd51B",
  "key19": "42Z8J8PHrSdLKMJBU1fRgMB1di8T5JCnNxeJ1ZQbje5MzMqnwLjGgvVPZkPNs7Df2p2gwwurJHPXJfoCWqzVsvyL",
  "key20": "2QQPtYfhUJJufRAtMdZsgeiyLF2btkAA2fFibZcpuVpv1K3XL1LMKtNyYqbehABkHmdyT1wrgoehm3TJ6xJ24iMF",
  "key21": "2Vh8ax7oAh8dvmeTVhZNA1meBAqB2eYoCSgNxjPLz5HV2AjXRqnKPczGTKn6quoq9mzpFcA59ioWqNa6EGbpagTu",
  "key22": "4kD8AYmrHQdkhX61rBcLMbL5ArTSQ6WJw2wJ3d1erb8xRfGJkpxTNHWhqpfw6oaeWSE3A6Y4u6istcyRYuGLyEZh",
  "key23": "vXHCGMjSFJXHbmdx9JbKjoT8ebRKS93XMNfSh48UyBXLStpHRarTgCT7We3XnUNGN62ok1iXYswkRVvUXQWPmag",
  "key24": "2j4hrj4g2gPPEdZEbsEkFfrUQENCxTD93LQhbCsrmqh5BRSa3cB49bw3iEaxYSgrWgXXfzK7oLC6T66XjW7UDz8B",
  "key25": "3Qirq8qUd1ThFZpZoHMdDiYWozFXhairvTXVuZcPyyk7nWEN5npfjJuk47nCvagxDPhhtjFcyBMCunvTTiLdC48q",
  "key26": "2yLpuu9Cc9BqF3KNa1t7VxWCK9BYRiA87GxWAPxsQ9HVyzge3vpkXSuux1adh2YmkpFktKb4CabauYrTr794ufkV",
  "key27": "499NsrKXcduokYSdLukF372PqkdJ8YK5CxBjrbKdgqw8xJQMYgqqgvZtTGYpJjQ48QHwtZBRhHmMPnvYhkPXL5ED",
  "key28": "2EqTt83jQVLEXN3xoUd3STfv5TeGLqHF1yKrXEfhTVVcFtKAQAWRu33BS69RUs619A39ijHUzyaC6Cve9xQP6Phc",
  "key29": "CcGVMWT7sSDLiWDMsteVjFcUhpTKeBrAxP8YYLQJQP9rW7ujoepcB3E1ujPbsqKmQCmUusu5ChWUbp5rgxCDbEn",
  "key30": "582X7XDJwA24vVYufNVg9kGbFJnyRh5UXrsD8EABfqxUMxkupdmaWfXGHJ44HJ3HXhPVosTERiuxKAQEEwuCPxEK",
  "key31": "5XBABaATVhEyWdSjrJvH1Mn56xewaifTR8X1VJJF5nk5sRDc82wU33PGZy6jBTJvYMNUHav5ZD7ffSLTsny7TuKG",
  "key32": "4h7xzWnZMDCfqs92vc3FEmYXhCV5qb2nYHtdRuLwwCyEh9LnQqSRiFn7GoAT86LxEii7XTpWyeDezn4xBXjFpAZ3",
  "key33": "4wsTAJtAMnJjNPnKpd585p3otDevqSqVPAvuRE41ekuY4FDCSWaqsxCnsBFW73mqaHPsVnRZ7Dwm7xbZ7XmBHBxR",
  "key34": "52fZN767H4rXxuHuvYpEM4KmnUUdou5bFNi5W6QFZqcFD2GV9Tr7TUoj6Q9Ma9pYWhHsibL2GoZct1mrjLGdziey",
  "key35": "37vXmBmiiV3MYf8KhBbfAbFWSJqkxmnorHtgFDXWAjGVwyhxTRAjaPLAubNti7Qb887xo8HQhrG1EvNfRMcXGsum"
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
