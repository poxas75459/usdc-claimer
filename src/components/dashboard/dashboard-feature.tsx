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
    "LT7yyKsYrbufkm5Yp2JKp2GZuxZfYYBDKx5FNu9k5mudmXHqG1TpxhSZZ9gQxwpiVAWHBJPcq8ktJkvc9NyqXMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGF2jHDkuVqJv4huPGezpoverdpMt94h8wkrT6XLGY5WQbQGq9NSgiVRDDPZe8bi697nmPr3QStg12DR4CBVrMd",
  "key1": "2ZeVdnLXnSpLoZ8Mjs2JpAvreyftxqTQRWjqjCLX4a1FPr3DZn1qGajA64tCoQcr344rVrfbZ9eA3ZC7vJHaBfV4",
  "key2": "HvrjbUvXHjZ9pogc7p9XMmGNCTKWo6eUQygT8ZCxHM5KUPtnUvTTWDuXWKY4D961gkU6HeVAyiYNiJ5s8tDLF5g",
  "key3": "5xh64dZXT5DPsVxzBzLL3zGKGk8m9xR3YD1Qfue2sysKTavnegferFzy4yvsPbkjiwtbEbFcoq6CmzyhzxdJyfq9",
  "key4": "3AP3VjJhPjWmE2mj6cjXSTWYDRtxk4qk9i7qJJ4P7z6Nz2xAbS92awmohSarH7Sk5bgK7LmunkUo47yyQi2SxCGp",
  "key5": "48pbERgP29S6XF3kV9Sk3W3PCDodtwwTKHqJkmVs61X6ijSxd3VhRzy5APVQz8ArxSMBioZh5DL9km1mNpARBD2P",
  "key6": "2XuEx9UpYewowWCdbdtY3kyETs5ABUPxKkGDzxpFaqsD3Vc9U7tNCWTnF1qnnqawvwsjKNRvVjTsikosaN1g3GVD",
  "key7": "Ggr2AggpZ4s6D7KVy3ku7fchryqF9t3HeQTddiYwTkg8dNTo9PLhPvaSakN6x2M6KRHpqnVCtgni8ZB7xP73yxL",
  "key8": "5cBf77AKPsB1F5MWPPMcuNpYsBB1zXZaoFcWBWy29EEgp7YKkmePMuzeL5DJ4MZ7s6HKJzbPL3KfaM6iKS2cAAWz",
  "key9": "39J8RzQRK7nzqhFTgk6vSuaxFtvyvwwr3FRKTXmmjgWWnScw3NxkE4bQZZXEZAkwcaWyNvRBS1ZXd2qHfogQzFuT",
  "key10": "5QXDPvwBjjqMxKG4DR4N7dzs79rTsg8ovespQzbc8EybdqUywha1ohBN8Kb9zaYaRPdR9XQJ8Qj3S8ZoPm84eVwG",
  "key11": "16fVrScRwban3Yqi5PfDNJV1xPqSyE9aeSw2n4BigaRMu6PdkmrgdQ4mZEveXE7zboa5sZyyykPTpxePh3n5K2B",
  "key12": "3c2FvStCprGj1FAkRScraS3ewsDyyLFdbM36KRT1qmEwRfNY4odKfaV76XDKE3Di3kQ5t8ktXTX532v4YGBk6B9S",
  "key13": "4NUvevE9qqVi2kLMg3j5MEMpJyXmqGTRJAsqwKVrsM3ptK9kQgFxZuLZQDToiYsVjuEH5BQyzWzdkNxVqwVVpuLA",
  "key14": "vZnGgswEzyhvNxs1CHVPgS4pXNj2YRfFpk8kB1t38jJugbMZmCbuPkv6UepxgPPEDPDHLd11a41gcv6Xd4yWfxg",
  "key15": "5LhJqD8suPqGJCjdW5oAyD142DSATKTFaVETJsAW5Hh9UechuVyPUcG3NFK1tEhyE7P7QXoZiq2mNDqLqggjtWcb",
  "key16": "L3BkpEhKpvBFfhn9Xr7n6sTsaBQ1wzWyPpN9TsPGDHVJMXrwWwHrqe5CLozhWwkmqLBkuDUPXLYLHUd47LvtrZW",
  "key17": "3sJMVu7SqMQuzTAkmNw9kG5R94GGfxR2gwhpRQC3Arxvp2n2NH5QCLfUqgGQK33JK9zhY5xhz7DaFMwKWnuejuNu",
  "key18": "3BCjZ9VFfA95SeNDAeQXMgLECDkKVKLaUXD21hydzjB8oD5gPyk1jm9iPuZ5ngtnSWoU2H2s7ggXckieW9YieMkU",
  "key19": "3xek3PhRLYKFfM9fmgianf5NqaJAiN8ntfyMaUw8foUKFq6YNAwwxdVJS1Nyq3ymrRZVqeBnTiN95yB1WzoPbGbP",
  "key20": "34bgwXwjCD2iKWzkSecC7NJo74dxdveztBrKeqzQNnTQUNFECpWiFF8KpVNfRk6qhsrLCFyCHKktp4KkmcZBwBUs",
  "key21": "3dyTmdbqewh9Bj5LfLTJgNaiZrveNrTW9s15Pb75qf1FNwpVhZXosjgaKy92YWJcaB3fMgwGTWcM52nuyv5Zjs5x",
  "key22": "313TWUerip8RqjF17UTgUgs6mSTv6CmnxfLnLRPj4v5NBFbixg7KxLbXMWcxmXX1RPSGncV8Zqv6obbYJAsfkKky",
  "key23": "2X6p731X6ChSDMyh8f2HynfBLq31x9xggGLw63Wfbc4UhKx1c81jPrgCH8uWqtos7YD5Dw8boVM97PcTctsERMqf",
  "key24": "2PvomzPZxQYfCa96M9Q8jDrzuh616HwVgKuAg2VaXEUmhqi7Kfv7AwXhtCo4bMbe5r3g425CspTRC6nhmsfveoS6",
  "key25": "4f3Wy1EsBLfEYMQkS9R7MHKvEnDuWVdH2QD319UxCPwZiBso4ascjLceKB1hAh5W1KFat5b9PRcGkG3oA1iJvYga",
  "key26": "3oxAVeMC6xNLr8ShhZT4ZJrwwK5dWXiyGczUBsYFR4zTfpkbykWsRzkhVqtRJ7UeNSbe7uJtMpthuZMaEwLPgqQ6",
  "key27": "62pmcLJibuEZyn5eWDUoyeWaVRmcaUxrpkLix7RdHNynJhuS8iPwDkfDo9Xd1BKVoFPp2xn19phMfZdCHJKDBVHz",
  "key28": "5qx6waczz6yAxVoRZXaUPEtaQmPqHz3B9UjCAdXDTKiimLvovzMY2HiED1jeKQRZKo7bLzR7XX5FAkEwHeYTA2hd",
  "key29": "4FNX6xGef2e8pfMbYe8sYSUhv3jXhBjtBkJVXfiimuLzowXgaj4zcT1SYiDgbkpyLA7NH8hV49F4gxcNxRy96cQm",
  "key30": "2rVsBP9pTfaqmppdmwfqihXMcEV7KHxjU6enUnk6u1f1xzJuspwmxXJrn6543T9GGRg3xyckoby53KPG2VK32tHd",
  "key31": "5RunHn6LTPYhi2jBShNMVUFDYsCTZG6SfMSF84bcnJFVfA6G14UtenMkZhewh1ACZ6riiss9pnyWzBWfvG6dtqoM"
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
