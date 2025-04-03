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
    "3G4HDA3g4KNE9zAUs6rcVmdYCyb9jYJUXK3fQEx4End7f4B7bvQgrLLaUJsMGNRdt6cJFqwuBvzn4z53MsKmPHKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gt36wPGuub9RUfVHfLbThHtWpvf3AZYTVHx7JHEjvbrCwJXzYrYzNwyxGAvn9FQxEctYasWoDEKiRhtopgrve9i",
  "key1": "5yrMtoegGuz7YpYsj9UeW1SgHqeZzfUeM3622uffeYTn4eGQveFzYFuQdX2W92HQbHyW2PHsxBAigDZmVBqBeAMX",
  "key2": "4yqaPRvrreELhHcmKH3UMrknZDKK5ccDKyQ3Bnz7iXDVzopqHoAfrbA1QmU5RqE7T4dpyL8djAx9nz1rN4CZB12u",
  "key3": "GDFLBuP9h8WLrxTFymjDmpixRT6xVEFezz2eQptZWoSpKERKNBagwrNx6WkB7NEBfW1Vd4n3tX2jcCf6vmDGAk2",
  "key4": "4pmm458xA6vYJJvzFk1YTrspNJzGUCSxeeK7hRx7wyQKmALk3wr9DQu6k1iqX7iJtevXUBfhyjpWZh3UHeDdy3NN",
  "key5": "3UWZeZEhQrPQpMudQdS9RvQNafoN8fm6VriyRn68kaLfPWn3nfe7YDSuZTLHBxG67VJ3CS9wTErsq9s2cRAdzv52",
  "key6": "2Sb9vbvMBKj4PFuJSXGbM2wnAnhL6ccNmQvJsXvxmnAypgedkJdGPXYjyqbN1JteK9uk4eD8Bc7uniEdEtyW7WNL",
  "key7": "4JW7CJ1wvGfUrZmK4TANDNGorx5jaAAnbFARqrJxzf4rfWB25yKjyeYH1DbVNzDgxMn3GzDynKaA3j38KedK9Rkc",
  "key8": "4H7ucFGAzfeGnSKzeZNYEYPKJ4LYXtGu7Z557Q3ieXvCfxntaa1SrdNnehaTLmZPtV6Zgryn3ooheBPgRG9npVzL",
  "key9": "4QRnvy1MFNxLc1By312wj1SWkYvuAEZbQJUaqgym9D2LJvZ4E6nuhYQFsSLFinPiAcctaSdVyzXAtXvgBXKf1FMT",
  "key10": "3moySgrxGzpapevRfXtdMm8yXNJadAZaAAesCzBVykUztYCSLGHY2LGUxVFKPYMCFGg6Lpc9aVcazCbkRJNiCyEw",
  "key11": "XxZaWSGzUyiRwZi7JBy5JpitRVvddBkcJ2qe2ce1LavCBpDRwngufDjVjB67PfbTHMpq1oaYrKK43WfcTfeFeSk",
  "key12": "2HxTjb3PASoJupXqubcBPJJJL48jziniXhEc2oBxbg9LCcgwFWg1aGmkEEQSTuUGjHDvkz8Mt4qLhKuZQApnH1vc",
  "key13": "aEupmyDUh97GsB5yPxAExwC9SEVdpNHFWWmhksPLMYMvswmFxJCoywXFZ4QGaN4QK89tQZa6KYb7rXggRQcEoCb",
  "key14": "33ajLByWhjBTYkDPPrRrP2Piy9EyhYe6HJmaPnMCtRx9dMv24XDdLZEegb1xU3iG6GzQF2JnN3K2a8MUaw5hocSo",
  "key15": "5dFscLwdLuWovJJGWm7rhg433V2r5ZY7Yr3Lr3WsQsivZ2s54dJ9Y2YzQTnVe51xdZ3teCK7gWMS3MuaDiAMm7e6",
  "key16": "5jHKStMz4YFzhKC4mEu2E4CamCUaecYpHhEtqWCQMC6JqLfPFmrycZ73LudcdF2WK4UcdTnGydiSmmjBMcSe74Bm",
  "key17": "3wCyT5hcS52MBmPCvvDKuVQgiRdXu8Df6qdgjC6DrduX7f7oC5GJj3tN2PJEXM7hA2tpdbpsLJ79XRC8nKSniZnW",
  "key18": "29cyougKoca3b2AJRNs6xqkPtRyxZLhiLwTXA5XiaA2UDACw3pBmZ5bfwzRQs2z4CjoXo9DNgoLVidTUvCBBvENC",
  "key19": "5ddxeTUzkGFVfEUtu1nZZHwD4bp1By6ctv23CRhAJqJow8f5xCaFEDo7dXW6Ki4kvM12dHtTZdxgrFFr84Q1Dom9",
  "key20": "5WRXacuXSiEW2DECNCMMMuPfY3sbL96QKfCJkPworPFBy2WdXmNAgYCeSricdc3sj1HRvrwqq7MWhbfrPCGmCe3q",
  "key21": "4Uv7Qd1wcgzwwubvs5ZKiWjitigdXCWMAu6GzjzjYNKFcQWDWmxPqdpmmFjhDRLEutz4candxZwmptsN22dWM2Zr",
  "key22": "4YfgC5kvQc26BryeoQHGFSKwvoA9mcgpoZ2vXz4kycC8oZvhWjx6EAEYUgoLDPZro2vAdxGQgfa4RtG9nmzxJ6QL",
  "key23": "32pc2UeXsgeZDmrjjafSBrEiXZvYpoVpJ7yFwk1tduJAubrDVakBPnq5rYpi4BfqAGjhxGeRz6kkETceKv4aTLQM",
  "key24": "5EZVx39pHAMvjVfzhXxE4kQw7fM5YUcUExh8rCS2bnxoB19iG2ABjG4UXhsEHbxVLwXmDfu3zvuxY76qbisAdfH6",
  "key25": "5VYqqEjYyztX9k9Qmx5QeYUfMHYNBWgZydDwHnt6zbxJDH5GnzAdTa3JDgQrCh6Zic3qVGvbE5QiM6yBwRZcVNJ",
  "key26": "3AJHnSfsxSPias3jpV3CgYV45PS479os44Y3dAp6Y11uGaJjjW4xeTATReN59xKaXRWp4bYconi7GsJ2AGNfwPQz",
  "key27": "2jXTqHwoLaCbaQQnrZDNHMpDBdDRzkXuEiyN4uxAMQCcVAY1UHoSaqoat6MZDKBeFRKM4cK11AkAro3PCK2HahM2",
  "key28": "2FuJExngZRU2d7HpkA2FukAMABXwXv4XKRts2xRVV4HyJm5hxPn73jYzf9CxYqsXYgkNF3tD9HBd8nYpjvADWHS1",
  "key29": "3nsdpgMQtc98B7HC8QMNFxpEKejfi4JtDgmTc6xPzTyiywkHoAj8VU3vQMWGVnWuFLLFnYuSaM3ziHJLn4rAs49P",
  "key30": "31GH4cVgWjXKmqSxd5GzbdSUGL6XQB24g1Bor2yuXRnhXBwPSdwvXFYYwxmQsqbEdktBTZzRshbfRMHNnAscCWrj",
  "key31": "37ATDBEDp9ZaV2MwLsNBpYjKmd8YUuKzhmZ3RUvC3ex5tp2MnmBuKzC72uNY8JMdDq1R5toKFw2BNbXJeXvzZhRV",
  "key32": "3aDRaHCRuvv94c4k7H7asnS7LZiH9ZWXMPKAPDePpXcrAY6poBcsCvbdsJeNLrdFGnbhpQ4dJL7ujEqYpBkJgbwk",
  "key33": "5UVqKgNzhyQQH7DzrcnHagfCNCMwB4ETVCVoRLqdorGv3MoLQcNNTDq97kKwDnQorRMbrUV7UD3LmeDfkfG2EcKx",
  "key34": "2JuoLdtEZ6paZiN3VQaW4izsQGzzsJpqsYaxXACKtt8DkDAabwzXYr3gYgSb8qXvvocAooS4ADnqbCKKktntAFfj",
  "key35": "5ZSJ8dKWMhZy8UCqDKazPZ1y2hk2uoGTNU1d7U9Ke4PTMD5vEYSJ7qF52CGdECZv3fY1hWoMahG8tZat4erZtfHi",
  "key36": "42EKVwjSQyecAifTaw5z8Jw9CPrX6sefkVBEhauava1bAWi9LpkPwcLGKFiuzFdqX4trVP9FDdp4oqnPHrqbkxaa",
  "key37": "4BEtezmUgDvG2NwzQUqk4MHJLGqpaEZFDwyXb7QAGAsBAMsauJfDSPVjzenuddiztWSbrUgahzsRzABRHu6bEAAH",
  "key38": "2CWLzwszXPAx2zako7jkMeHkdEWjK1A3EQSRsGaRjXxXY7PrdaAXVL8SxgWKKcg2NuxJAWAdw69A1pfSSmNCMUJ5",
  "key39": "CtyM1KQzGPkwtdRcYUiUrz8Eg4ZoLwSQbwbiZAAL7CP7mFmSEtxEpXxRJwDDJ3HNM1n7WbNCdVQ1ag1UjjGbpbz",
  "key40": "5ib3YB75iPh4Hd3CuhDqZyD57zH4LBMr5Z412sWhvYCqCh1BvfbWwehkfgX7zvQkVPHqYcHtkyX31bL6UU3RPQab"
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
