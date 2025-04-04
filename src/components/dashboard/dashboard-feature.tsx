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
    "5eBCQGMZYCAEFYeXBQGYkPfgBUm7YifgSuPmoyc4MLMwLXG3zNhKW8oDgCaQ1NbSynRxQ66AuvyJBFVz48K1G22J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7kYYo9vknqcWpBkzELZRJ3rtxVFmamtef1ZzzgJXwLt5M2DBoCwrh8G4hUF2oPrTxPmbK9J67LdWaCsWawe6dz",
  "key1": "3g6WDN4kK3dA15xskzCZBTMCmgX4sMtWwVhyJmaTqacpjVLWKFf8hYHD5zwwVhuKjL5E6K3MJaSqNuXyfB9nSBjW",
  "key2": "5L8YzTigdkCWXUaEWZuq5ETzBhyRPtpfKQKN8gYjS7HkpmkBBXMcuDF5uHqFovmR9c546L5mf1WV8Emqo2qwv9cD",
  "key3": "5qstsSp7Y6BLjsUDNVvGBLYvtWrMthV9yvM4ZEhxWdQrV5RJhZ3a7jenr5SkCdb8rD7cWg12eKAYcwxcUoKE11nF",
  "key4": "5wPdneekPvKq1BLeJmmLPWvfUeNpyBNbk8oK9eVpjYNweR859UkH32zM9PtsXZWbtyLCjyj5PvwEdKdAbDbPirsX",
  "key5": "3iEfym8t3bKCbk5BfmzuAEeS9CUt8KBmbCvNX6J59Edwc9nVVvzBiZuogzPhW7pxGuzeBaKhfZ32adcbuf5wVbCS",
  "key6": "5TW63eia5D3k7Mk842iUcyaS9mNuqghpkEWYyTrWH94VU85se612WKoXxXf8yanqN9H183NLiucVbqeqxDA7UmVR",
  "key7": "oYM2AXhsaKErRcRtZycDXCP7dQagckczVhR1dGELYqCY8exHqsiaMYnys6FLpZdbS1x9t3mhSawDj1u1W5fqAbf",
  "key8": "TrHopi5bB7bzVc37jCeTQQAJUgxah7VsjSKT5qKCTJ3bqAZD5uVFS3xLUs9f7z9fNwn4YDtck31HCkZNfpycuNt",
  "key9": "3UsxfvTq3Yi6wM2rsxzCyeMCXz1ZTsjykuQgJGku1egnd5482KmW2cXrwKWwTLPJ2S3CF282n75hFxmqxtiZgDQQ",
  "key10": "houPNQ8pUWYtZeSah4q2ydFYHMVCcbKuQPM6AV9xLzVE9GtLnqvnJ7cx4GjidDPJX9fhyNyBEF9q3V3h96vgJaN",
  "key11": "xqbWT4d8ATueftnWtvP6yn3NDYqn3H9YZn7vDZD9q6tnWLzsvMedna4SoMbb4rJucG7tKVMGrdzEs1gsV8PAGej",
  "key12": "5HHbMiXxcsjsSp9szLsYsyJo1KHTW5REjourta3i9ZPHPuTxxbQbaPLGbmSAXoPhPnqMAxE1Wu7EizjiQhx1oYse",
  "key13": "522e34DULuJoffjx9G9WKbmomKdUA2YNYJzsriAfepNur9xDYtuMUNcf9QqQp5Lmjv8RVDSg8isbwo45tfXgSiqe",
  "key14": "2SSQFbDdH8ML7qHim21VebagksGB5jFiQfHHMKFveAMeTfWSH5tS6ffY2oxvuGAcV1qvuQESXiP1oNQxDk9M8MoV",
  "key15": "2sguLG6k3ZfKFsPrDWpKiVAVuihGDdfq82jyjyc7k8dJv9k6zh9ay236kcf87Zw8fSQfEqS1TYwYF6A2rCmzSVGG",
  "key16": "4KBQnE8R9JvvjaE7znAfEaKyXT2Vr1VauBVpvejDiSM9yBV7x9UqTok7fZSoKVMdXHu6TkuurL8146hMf4mQNAFb",
  "key17": "2LJG17gEMemmzW67VhfjZW7FykBQfR14AoUDnAEUHDgra62dLMAYqXYafcn69Px59ShvVuV7wkPHp3XMq3GgsdZS",
  "key18": "64xk37mrFu7pmhRXLvs3oCTaFdpndd6qkYJuQiQif98DPzXFCTRaiJc5vPggnyo6S6mes8uGzV2LSs8M5bif9APG",
  "key19": "5uSgFKoJ2oL2D5xKvNsWCxoCxAMRBYU2go65zcKJEKsv4SSxhN4KcG6hxMJUdRnHEmhBcwt3NgCytAjFjpbrJEyz",
  "key20": "3WaaK2x663hNoVQPgpw8YgnWrp7jeCGM9MR31EWJyKWAqphFxFQYfBLf9mwJ3EEDQzDxbqvLJXiHhAbW7pyxcmUg",
  "key21": "3rRhFJouF27nk2HNbNTFfN6v72WccRME7XFpyGN2cBYfcK1bKBVyhKhGFjUyYZfyFBgqugGuKNQttAedKwGSnonD",
  "key22": "2awhHpZLXzzHP2qeAGVtQYT8eK6etED9h1SBeExNzSC93X84borUqbLJcbuEWoFyiWsghgNbieiXJVk8ZFYaNfmx",
  "key23": "4sa8ntc94Y8TDSMcewcACtfLU1fdUM4sHtiCECdP9RxAzc1uNPYvCMH1QV1q5HxDvHYhSf4eWVkEotnaa5iKDEK9",
  "key24": "4eMwQfLsWs7wBwfJDvezeb7FGCu9UYnj5RG9SCmnTUiBLfd3n8yUMYHbkpdYGv4CAv5XTcVfnttDoWbf5LfyBbT3",
  "key25": "2LSwtLT5hKTdpvuZ6H6Kr2GwnNzGP1EW2BNMkg6VZsAov9KEMkdg7fgq9AUpaoHN967FSrSh6jBPKTRFEg12o9Gi",
  "key26": "4fdBkAcqjkafGkzCPd17goiQE63dM5NeXD3JBUxkn8ifXa7WZgzosrsNDNr6W4wgKSGmjcGqH4BincCP9hhBCLsn",
  "key27": "3TbFNQc6NFSksrQWgrzSTEgebEJFchpjB1fH99ZWqizyHE9UpPG6ENvuDotyPrJyKyGZgTPmz3YY9nG9FMudsrQZ",
  "key28": "5NyfdUh1DXNNebqa3QeTH4SpD1THatfJfNiU9HFQ6Z9RsnoFqoEYySdy8vR8BKz6QhxmBrLjEbB8G3MZaGaTj1ss",
  "key29": "2hXKxTkN9X2Mi8usFkiqVc2HcicwD9cupuKuDspQbV6yszf5SjE4ZnzDMhXwfhod18Y794BuSy6RYoC5GJZm2Q8d",
  "key30": "5fRRmjiD7AETf9xDspBjgmp7JkptbgfhZ8dxa2fy64LPJemdiqSKWzx7bKyCEVKEPEhdU8BR19HViDFGGtJ2f4Z6",
  "key31": "48phjS5QzTUt8GDJtsMshRYhuwpeosxgETyn1RuyfQXYrMqAmtMjnzfGuFvNHiWngx5Gq1QpFkuBdCmbhsRN47Js",
  "key32": "gzNiQwpqsyxbTMoJyWqEgMnEKfJYopanqJ6LgdxgfqmMthje7Px8ojwAdtGn8BwMGSyMJRNijVRK6hX1XXJJRk3"
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
