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
    "2ZDZ3coqfoE51KrghDy3W3kqa2nCpStLn1PAzdWYGJWVDK2LmFaqcBNDwy1DFgg7oCjKBKbRcWubt22pnjd4hE8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a1wJ7B795rph9svix4aKz2Y7ujdagLR7eGrNY4aYRRNdZPrcvyao3ZWcU5BTeKntELV55Lf1vaDpMV8TVJEgfwc",
  "key1": "2ZB4fctKQV6sBwgise7Q9r9KFjd7sMNvrkAeBsKY5tXfceuPcdHyseoPH6FZHvyuaygkQ4dzU2hZ5DxkUVdxicF8",
  "key2": "22BQKjYnVgaTdG7rR2QZf25ypwUh7Eh3cF1j7SDMCeoAw1SaAoKq1ofWr3Xc7DWu3yY6j7m3EP2DvkSJsaAQjCzA",
  "key3": "3z3BPNibvphw8D9tMojRzGkgWCb2QJUJmifAPkr1wmLhgiN1T9PhH2uGHPPd8D7mVYFpKktJv7esNYRao37waY6s",
  "key4": "636TvE8yX6kvbLSrzdDtPEMgNWuZ269kxzuLU97wU8yubNPhXcYoiMtBuiw6ejqvZV6DAbfVyZMqFrihVj5qBcEC",
  "key5": "5pJGH8yCfBMbLCLudViyv8Ru92JSa1mi7LLsUm85NU94KjSAd7XEJ3LSV1qAoypi3kKYr43gChkEBwYMiUqkdKqp",
  "key6": "5ucn4MNKUsYQrSnYd4XH6mYzom35E8Ti2F2toM6VY21nPkKGYBBRX1mGwmYnLD6RCdzz2dhonTkgJZ41BCD5PKRj",
  "key7": "2NSF2C1ELJd7W7wQyz4BjJtdqGf5FV3QhyNrxeMhfLLGWmxz6z1uF7Swo8JHj55mrJgR7yHaCwpnQZ39GByx6gqS",
  "key8": "4CJK64kMdUqVEp7v13Lp2dRWJogvVEZFeWyu1pf9ArauLCd7gtjxf92xmSBk8LCUbYhmK35QVJqEVM7TqjvKyQXH",
  "key9": "5xg11G8y6KM7E3rAD8zCGb9qihyZCGDcPTKJnKAkxrVz1sudiotfKR8EpddNTsbA4seX6VGKxVHvw5rSUrmgr68W",
  "key10": "3hCUHqBQezyqszdJvA9J6LCK4zgTyU41GQryTsjJL5nsue45JnHt7ehm1M4YKTzrKaucMvm9Hek7zGinFr8hKVf8",
  "key11": "2fCAwvjmfZbr8gCP9q3t5YrQ9YT3L7ZabDE5z3Xy7zz7KdNgebFzX8JCqUZAP2JKFcDH4h2urLDHQE7rWDVWw3JX",
  "key12": "3Bp9tWnzGvK1kDvQvwfm2M5CNeQESNP6vFtkxJ8i7P9xqtoX5XauiRALytuTArZZfwjF81ba6sw6SNohSR4uGe4K",
  "key13": "41vk3XAA2k7oUms9JVrFKkm9sUYmm1pZVR6tRc8uEiBcEQ5sVufKjxmsWV5JDpThUpxr1XAkm3LipTiWHR9sU2vX",
  "key14": "2S8B51j5tLFb7FtUMQbTb3WVyaG2MhQtvRy5hUDFMwoRfaxDwtzpnxBnxgJNrmEKWSvvHiJu56U1dPNPGPntup3S",
  "key15": "4KZWsZ6JJzr2jpdpoBLuvMUatp6ecuNv84e4g7uJkWW3B53GZiCj8o7tb4Zp5djrqHj6C78HK2psk6BuD7eZZuqT",
  "key16": "3NsXtwtSPtZX88yC1HhbnPHYCX6TCbk74yvSz4ScbAghMZbynkZaQ9JLcBWMdxmJkbXMjH4JTPrdnv1vaRTpjfyC",
  "key17": "2L4AD7haqUKLDNL2rBRApYLtRiH15stsqND62bTpGDMVfX9BvyToHciP52NaekuskbVsdrgJTW9xdWeu7RMX9oHJ",
  "key18": "t74vWafdh3VijRtauqRw4K3v6oUgtyTq27q33SMK3iyWAPRX8sV7ocr84Qifo7u9v22dhRHoepnsXjmQLvMAPbP",
  "key19": "4wPKJVBvs7gFLy7X11WDXgMajLaTU5iTeyEw8WZuHNmbiiszmaTuwCUzTXdF4rRNcPDVrTdzb1qPt5uxcvrocqxH",
  "key20": "4CdZ4QPkciP9GarH2suMosLwKVJwcSW69oUFjZkr4UExPCNrBbsf8VCW1XoHX9TbJZWebh8Qha76oNtYvfHSh4jg",
  "key21": "YLQ9zqw7TyfTk4SCixe3ia9XaueYQ9KA2AaavLLLyprgEBzuh1TJQoK8MRefpgPP84cricgohiqCyExprTjjFsY",
  "key22": "4JofMcXF588dpmVzzH8P3txHKPMco1qmnPP6oC2w5GELZJsisYxXCLob3yCEj4eCNWscjCqRiWbLvZoGu5W8WyFX",
  "key23": "4rUc68CjbiaLYKFyke5PD6bjdFuf8G7kYawWVhbPWgC99zJASpNhyyZPPkPLXrwWMT6wLe5mFWV3gziVuxS4v9TX",
  "key24": "2cieiwRt3ULPorKNUex8C1EqNtCrrB478ApnR9Sbbm4N8NgDtdfHF4re1NgVnMGnFUhrE7WPJamTnzjn6WPx2C3p",
  "key25": "37mykGZwLcrGbp3K1pTU6mQmGDpy5fiS4YSr9odtKSvQptfo5p8pN36Hdt3v7JPYARcEVFvjwyLMSwckf194YZmn",
  "key26": "53BzqmvpYNm1k6BeDDSkWc738j2wVNEoyFmHz74bvBuCEfzjjd3WzXRKXf4GSRU1eGG6cF1Vgc6wiBFFPaFbJUXF",
  "key27": "2bsKjUhUiLpbGgCpNmiwzY2VrXVX4hdFetcpqCBgZ7vaBeCdSg1KVbuuuLn5iRV4aJc87wgVMAM7FQu8t8xuZdZ2",
  "key28": "4EcxUePFHcG44R9Xd2vySaZMviiMrZihHZoG3n7HjHQ9GCNnvbZNTdjcdiEs2MMtW4zu96vVwBrxLmabZogNR11M",
  "key29": "2SuSKy1GXcfB5uB6CCBR8Xw8cQMi6efGtpFLyhqxq4nufb2t1AFEA1TGY8XxSNETeETnm65XiQz1QnQP5TuaQJhR",
  "key30": "dtKdeJqQH6AJULxDGm7tsggooJ41DqfFxZXm5uQTan1BLLSA8mRmoY4cK3KiREMcq8ULwRR1jHAHcW9d7tbk8fZ",
  "key31": "5AJ1DyiLK8HU8NnCB8Bz2mPmXoEexNhKVEGxh3mVdXhzhb8jyt3W8K39BhAL9HfW39B4XE7xdQhFAkWdX9HbG3Q3",
  "key32": "5f3LS8h73qvLU2jR9S4b6hG7LmEHXbf9gbuUDGrRdLXdLSVXnvbNXD2SvUuiSqdzKpsQNuMGgvQs4maTYyXSbBUd",
  "key33": "2HuzXQGbnJN6uzhKowNFxg2vyZ3B93URGJoMcfs6ApyC6MV8zmV6ZzfvpNCAYymqwkJDM94KGKKdMmNHHQAEusUG",
  "key34": "2GsoBQ6whffnqqfeP8ttfkLAo3SL4ZDBqh9FNG9hxVymo6YK3AZyQDiGjXQebYSp38MYuUcNi6tFUKQZXmJWE2Bi",
  "key35": "3ejQADJtkWfbiY4qRqi2s54XUmf1VGomUnRT8BHv1UaBg8yqA2aQgAfrWWGZnS1QDMzwtcAHSTpy6H8RNFTQS5tk",
  "key36": "2qSAQZYwCpJVJsa7uuVighDQuwoc72zoqysBM3ve36tQd169c46Ry5eL2RFSC9Ax4oBdvNUdW3bmd9d5srXUwuAL"
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
