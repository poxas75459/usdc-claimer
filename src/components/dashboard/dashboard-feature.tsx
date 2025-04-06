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
    "4gjFAFccJSpHwmXtoD6w7wEz33LZ1uU2hgu8hKCYzFJKjz7e3aqs17PREthbqrvq3ScWCkHacmk5itz8iDdo4fWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbQWiamuDk6DFhND9LJpfdab9wr8fgUCQP8xgwVMpTwEt2nPbJzGiTpiAmEabnYPXxzJzUbJwqxUbAy133dvbbf",
  "key1": "2FWEi8qgCbkDBmtLb7TaFhvbuVeHFsZujJ52aZCMx8UuAjT7eZy1gDFPcnD67DdGRKJVeaCRPZNkpHBuBbPN6kpv",
  "key2": "24udz4cKNYjxum7iKzbNzJ3iShGbevmZPJCdXNSpCBzWxiSRm6CrQu3eJBAfcPtHJFkLFWeHa5Fh936qMqT3L9AV",
  "key3": "4LHq58qAvp9ok4wmnhDi41FVEG3pSgUmbVNCmvwDZYDVSKqTL6M8SVzAubf8devupMddmoCHAdz9bPsN1NKeihs",
  "key4": "2r8jQ7NjXtpsJGmUzJwZeNDJSwq8NDMpBva4KPuPCquMX8gK4sTKjcHScdCzF2K32ZFu684ohKAf1JwziwjdFWvp",
  "key5": "ctDnfmkb2J5vC1QomKSApPQ8uzhnwd4AGJDFEZbsagBpY8WPE4tve69jN7QcFBHCXFPQuDxSqZgNASMbAKxtiw5",
  "key6": "4uohAXZXrs9UrAddjPV534LGtTqCzgReCxY3CbVKTxeM8kfskiUUnyQgPX6sWDdZsMDhfYowE8QKFciP8MxBdzR7",
  "key7": "3LNZYkCnMiFvfQLmuW6826z6CfdmJpzkwGWKNG5W2d45h2t7XeLeVfQ5pD133Ni6kfdetEiszPiffH5dZym7hYvq",
  "key8": "4YTcreDQT27RbaRzyLVbcKVmK3895cYEjiThW8dhAVyEuhAXiKxeqNfEdvT2WNtCchbPPxji6N8frewHy1A26vmT",
  "key9": "6654JJ5iqrpj4DamanEnGG8k9867yt3hMnWac6QAZxnj64fqygEVcgXMAdC9sDwDvJs1YnPcTDysgHazHjMUQ8sp",
  "key10": "kdJjWWZvRUh8WXxXnzN9jejioRrBrNXaUBypF1qd6WjcPvoHhzRo8iEnKQqLihbY9yJ1f7GfKXLpVAuWR6f91WT",
  "key11": "21Kwy7NR3ZFst9rhnCp5gqKSqAWNAyo8UPTUFigcfyNXC9nxCUpKvT1pnLCSEjBjsXMBvHp9sPx277YMDmZH5upy",
  "key12": "4VWS7XjAG2sVTzc8MdxZVTibJGfHNEWFFvtPgmthDft8Y6Q6p3LES56rmm4tQJTjfjjAaxvA9V4LVEMoiTmDjnyo",
  "key13": "5LkeKbr36eFEhjimkp7eTbM3tq2yTQyxiDHvFw5W2mZthu1wcuwCQuRGeAR7A8p828N3PgcvWJipLuujBXf8EfqQ",
  "key14": "4P3AYYxjxrNzGfTEPDmPtVKb6YxVWM1AUrT6CokBotx77fhJPv5ygLNpMbDhzRQNbGwzX3kv6vxhCuzoAc3eXVT1",
  "key15": "FaewxJBkzF8JSqHUkahCF7mXYRQ16epLrG6HH8LKG3pv6VJAuad9Gg86KhAqXnPVRzhLENkNmJTh4JtysNXvUsy",
  "key16": "3GPMXA5iWQ3XFX2ig7PkJJhir5Mnww8QU4vEbPuhaWuo74A7xktcHNAQ4nTyth7rCdVR95mMPPWuJbEgLgaHRxmZ",
  "key17": "py28ujHjMcLCSDvPPtdHQhHyZ5WYN3DgZrTwAHeZBVf7GRJShzQrKxzs6LP8dN8ZHdrHr4eR6G4R3dsb7RNaAD3",
  "key18": "5PzMKxQPawkxn3p7MgTdnj7tzHuMrdEuiXdK6KUfBBUtj5z4p3vbUdEn9f72v6cjHGDSD3Az8uh1rpaQBWiWvWA8",
  "key19": "2gm5cudbCrrVZb3umnLFfoT5W7a9DvBQc5GwGFrguz7mT3yH6T3VdGnNo4kNBoGk53v9Fj6tKSM9WTKs5TMHkRT1",
  "key20": "hMPE8ume6mmv46nW1ppeAQ5mtTRKi5NFcQmFK8TVUXxXDCr3677yvwwZGY5J5ZahUG6tooCJjGae5BBh1bPpeHt",
  "key21": "2bYEJQuEDHK53onGXGQHkhP53hz5HJVZiWQ3dzhRj4qbKxVpyZqC1Er59pKnxsqFeYaHcYTxpQENBcEzExRpuro9",
  "key22": "21Ne9cMUtukCPVK73fHfvR5qJYU9RNQ8E9GBEsmTgbxk4WLZaTSPu4hjEt9LwR7FcctNZcDT7WZNvrowhuvcyNUj",
  "key23": "NTJpPjL6AhadZwq21tHga1Yex1Mg34kGMg5uGGDZabLavphvaGbNkH9vT2URUUjfRpqphvjVeiobvGRoaGgK2Ee",
  "key24": "47kG4zwSeEeSEvctMaAiGdmFA3TXwmGifNSYw4wfrRWY5NTq7rm5y8ncfqyHPpdaR2F4M12uz2tqaxZmpsp8sTei",
  "key25": "5PPPADSWSDGPRFr6nGERoE9jcMQqEDXxcedUF8QizdN1h6anHzcmh1chg3cxnAbqudMS4jRJKUSwMuqjUF6GEUJ6",
  "key26": "4UbmWg21R3GkwboraKGqMM3EME2p9GxXH61q6gPmbKzPGza4gdCVPQ7UnMPTcBx2hDRgUA48SfqWc7EHQe7718eE",
  "key27": "5j6hveqeWte1ez9JVaKj2rNmne1Y1QHoSFv4janvm5PYN5XDu4Gzj9fj1JTde8AxCLU5R9LGT2E5zwozFRh8YQb6",
  "key28": "BTnD19PNy2gWmo7VU775WhDJN1nQNxpU1qAH5zX5fQDyMHdJCLnozF8ETM5VCuHmUdxkyYy7bmCcinCGqqXzZoc",
  "key29": "47S9LTE1GqxhfsWDGpzfZctBvfJBkFjJhck7THeo3U3TAQggdzkqGaTwHJJ8wXwVUzPqD8HkCTpoGEdz8bNKAcHJ",
  "key30": "iLzCZxxmApXGtZ8XUaryazK7p9EL3o5yXBajNWUaK9x9uJbh3hBrvWuAw1EdL6N4jcEmvdoM1HcUFZYEoJXYvt6",
  "key31": "us1xrR5XUZTSviNBrbg2G5kxvzyi2xSz792js5FjM5KLjjx4Eq1pfEW4iy2H6c3cN551s4QfncGUyifUPiaoqob"
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
