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
    "3sf3p8fU5cz6GXvBa9GsNhsUYrGBKkDT6m9LzCkYLLB39zyfdUobSLPS2uyuHNkzrfgeG5ojmtjxp26kLsCz3dYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptnC9or6A4XLpncFGx2ohFEDHoFewcDrjrY8JkGKTS4D7H3GteD11WLrj2vfsuyy3EcL9sP2H4KW8ZjLgD8n28Z",
  "key1": "5RxHajkanENPfHuNTLWq62hM2d6CkDEXmx3HdYAZUSXaKVE5BoGpHa4e4zCNJ2YB9KnK6Cq6KArYuwNUzqGYNjjs",
  "key2": "5CesTWqpxTjhF9W9xUy1RZYWa55VSYybx5yvBA5vtUQJS9SM7R5XHpmHnWLmoKtwx6njTb4YKN897keauDCioxdD",
  "key3": "2VJEyAm6X3PzUhTWSNyYViALxumv439va6A9U5Pen92oNg9MBMrQjPd77BjHaVtxdPzieBp6QKuDYdcEoLfqekww",
  "key4": "3bS6CH4Kf5yivAGkEiBDCAr5q9SV7Q9hggsnFBbSDLN8p1VYu8FKXMcbezHW2JBNLpH7td2dZSrtYRmoLq69zXjf",
  "key5": "TsBMp1EhL43PUVueKFvp8SSjnrEqJe72MazpXrRdc23G6SejFkrDhsygeuKwzFS8cTg4RqRHarvJ6TcPZbzXGsp",
  "key6": "DckLjp76VsHCQxPCNeM6vpZ8CZNTbJdAGQb12YWve8fFZf61frDjzcabzS1tBZPStV64YyHVbQdQaGqzW3ds4Gm",
  "key7": "2apHjxKPMPVVqVhnNsJdWHVvUGKEkHLR3gK9rhxoZDU9MAwoAeFeqp5Qh45GXEWDXzRygA5XVzDFxgMCmuKxgbuD",
  "key8": "4Vinn8BbHGWKcR9C9qef2YygiW7A6sgPYXzMZfBfqxPzYMejVD7ZLnbHwTQtrnPeBTKRukJ4Vf3vExAz8i3QaD3m",
  "key9": "34yG6AW6kNCRX97MzUzHxS3N1WfdsFsKVJqS2hvxZmSv2yggEm3XSUoegFPjmors1iMJSFMnz5z6U1khMiM3jgkX",
  "key10": "d6MsBNLqjxYEznsngaX96474GQZyefRmBuMo9FobwMgQY3d5JjZnTJfMRprwcj23f9hADm3wewHpNLU7bWA4qTH",
  "key11": "2MQNouo6Ef6ZaQK3tdnik3jJK8GBhKkddn6aJVe2ww95JqyPh4ahsqWLLuScB67uFuRgvxLvyc3PNPsVSjThfMBQ",
  "key12": "4MZTBLLpv1HWd8VgfdH512yTJYA3kgpArUjg8GtaVR3nVoRfVHbM7GwW7VR41kh15GA9YSLbL49gTnLNtVm6awkP",
  "key13": "PS2MGkhkQCybyJyQBrxtx2XpqrpntQy3yB8VUBSQX3chQmXESfnX7z4SMhuKk4M6nXDJGSmK6eVgen2QrZjBpyE",
  "key14": "26yjmT9h87nAu6HW1VdTTnBnCVXgE6vHxp528FMMUriLU5QHCNetnbHTuVCWaMFXDM15abYmt3JxH2VLtHdf3hXc",
  "key15": "3nDA1XRnXgm48KsYWRNGha9epDF4iPM32haxiHC4N7FBXhF355tcMqPBz2zwbUZ2NfWHjjjvX7umngRmmzjAFeUP",
  "key16": "4hA6gxPD3PDe3Y4ffJJCJ2hzCPV8nQ6b5sbmv9X151niUiecAZf2UZzpZz3zbW4mUmvXPtYejxKRowPhzhrCEqQ1",
  "key17": "265v3pCtAZTDDcLvKkoRuErtBpAnDsWEiZNgYAkTe5ZYRNpphpXfHjDBYLdaBmeqbzdPdCJXzdaBhZxqAqYvVuFm",
  "key18": "2QJPzMWif2XwEa91qfbnHo7Ch4AK19HznuJmr9EGxfzJ9gZvVkUzfKZ6xoFAs3JuuCq3BYnp6YzS3CaxWBvd33wc",
  "key19": "3KCAanLuzjuHLwEQ8xQmrSznfqhWgnQYYyByYMq5uA3VLzkB9gmkuQu9B8FrZ9KajSpMUSgzgPaq27wbiNiX51eE",
  "key20": "RBfYYW2Ssp3thv7Tkx49wwB2Bxiann5zhcBJdiQqHamdsb4niPpWazGXYfmYZQCnf6KPUJokqQo9A8um9nDEyqM",
  "key21": "2ZgFWykJU5eoocn7BNabkKB1YcdpJWouEqG1fjrbQxMGeGCXzfC3NVC874aBLyB8o4dpti4Jy1bXj4yGpJk62hbE",
  "key22": "sBoeEaMmZbCo7Df9UXEC8rymc1zK95yoJ2ezkjci5o3g3mC3V7uLA6o89vzm4PxpsGtmvcmDnifasWbWFiQm2q8",
  "key23": "5TA8iHuKmVs3PnQsNCEWq2wzK418nZeZfq17fBLgtPjfu2WYgSZBfcMEkjy1gGfWSycHTYTU9ZTgN1uiU3MfbAEm",
  "key24": "QDdy35epxG5NLRYMyhYM45DmQCnJaMVx3j1muYUNCLNMgQGJNF6NYP8BqXgQoRWBnct3gym6UWYhmZtnVuWrgxq",
  "key25": "2xMBupUtfHYn58jV3ZR7sDbqLTStD9wobRpxPNeJKbGZiUy4ZtUR5f7oD2kXHKuGvysmvYQNgQnrUskMTQefJ5xY",
  "key26": "5W2jk9Qff2LCKiqneSfiJbwuypDskvPfNt9yb2WYfQ4dwGZP1RsNCLxgRvkc12BzvGjzyQbe3E69LxM3iBNCQ585",
  "key27": "5Ro4YJXaLed1quHqqTNKd9MCz5Svta9rV1WeXuaVVtsjmkcjPMYkqGBJ9dT8Gd74b88tXXvzwo2aY1EvNs8d4vRm",
  "key28": "3mCZG83zyHsM67AuApJghnJGDsh8i2CqoUyuWukcnVyAVhWSaWiDmHS6V5K5Dr2FPYSpgDB5qmEo8cqrEmvnVvNr",
  "key29": "3K4w5dQkPqcFsLhAsP8gpRaecL8exN34UnsDCrswT7nnP3NwH7m5xsxeXF9Z75uH644HibFefV5dZm6LeBVRursr",
  "key30": "Fn5USqk39kf4kRht2yiz1GM9fibDoaK9SFfh58EFq57jbUdrMF7krY5xYUDgNDhkoqsZdkVdiekzfvAqWqJCr8D"
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
