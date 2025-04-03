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
    "54ezjPD2yFGPBDmw3vAbFrZJ4RCQuhFLnY7W3p7eD24xznYJWusonmdTJA74PLn7srEp4CX6ZDQsx9vX1mmzCCAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X7RGEyJntTgLJi7Yok31CSeJEieoVqSzMfKPNn12uhCHerLA4vtny2cLytKZ3y8P7kfDffytLZfxZLv3DiWFRiv",
  "key1": "5D7vCKbPZPe5b8q8BrQTYzNh68JCg5CQ8m6gGbeNUFXHuL36KvE2tdBsya6uJ9qQhMWSnxpvhYUj5LFXfYLDp5zE",
  "key2": "3P9ayk7R6Wx2n1sy4FSvtNECryMAwafy6UXLGCMq2emtDECgbhdP6UnMusNSXDQYfjoFvPsKkP8ahzUPKf1Jvtmg",
  "key3": "4VGk6BbTFwYudkZPrMHARHuqNSeYGDEyFtCt9pgLAbW6KiRa16uUM4uMQTNKei433Br9t2dwigbfPe4huzjmrFAX",
  "key4": "63b3E4Ltgus4WN2yC1Li36ejw6nwhNSKnVAB1GabeCF8bJCNk8HN6JBLcBLebhSca426isvf3SugAVqpSbJsodbq",
  "key5": "2BoaDPpVUEPP1PYQj1SkwDHTH29ijSi8GvTdqzgx6BGdBkikRw8hPXzFRSmwLs4hA8YcSDoMFAyUXVeKPfLPj8oa",
  "key6": "5czFCv9PZQZ9FTBwkxv9gZz2GWz6zbeK6kv3BhkvVhhrHy9Hs5Bkr3nGQKTqJ9mZSUyjdcwromvuojDZUNSAFhUq",
  "key7": "4dyFxzVCvXkVuGvCJ4n5zUfyVHd3jNMJ3zBesct6q4NwoAqB3JUbtpJ3ah7vEUnSBHDtGgnf2GuYb3Ekc7Px1Cy5",
  "key8": "45xvz6xj7V1B35Hur5xH6xNX81vP4tTuMHxhSdmbxazdDT28osVtoy12NWpuHwfB85o42iULWnbwg6jZFBNd82Kb",
  "key9": "36w2qXVdB1NyzkqwxbyEw1rkXScZEMdrWY2JXvC5BZZTUFFgF5rfxyVV5EGZYrNBR2dtH7uWaYNnp2jk1SY7bEC6",
  "key10": "5F8BzZQQrEXkHJiVLkbSCzW32TKwbJTvaJ2x9Jfdk6X3q91SfVdvQVMmddCT4xH2M5x4gBWEy9jMkNzUL7ZujscW",
  "key11": "QtX9cMZEucEePjfXRhuBauFa7vwXTiNEqsPfp1BXr1oE1JKxTwMwRLowRkmsu7nzbwC32HxUeW8vB1V5o1FgEFN",
  "key12": "5zBMJCNg6be49AUTZKYcdPXds1cB2PWaDPTGXs7x4VaWt4cndwi9nV6dzabvirCBswRBCywgz4asSNAFZcknUZ8S",
  "key13": "4zoUgJ9TbHeJEA992kW6XjdS2vffzRHX5ZseyH8NWaXcmpog2BgVgeufpoRgs8BA9fNdaUkQihmzUj3n9BXo2sP7",
  "key14": "2S5RzAbeQKW3mxHQrZU2imw2u1XhXSjWngSC2ndUcaoGYD8MPwr1nFJsaTAjahosfLMnExJKqpkbBGcjtxr6KNp8",
  "key15": "3CddxDwiqehuXCGFjSFGwpMdfUXr2e4qSxJTKxTRgojbDupWKbhinZWNxPuFpQHgjXrGbZtK38YSzF78xkT1vhqF",
  "key16": "fnxHdzUFGzFyfPPULPqaqFiDT9yAS5yb4bkW55Y97VHpTLieq2xZ12jLu9p8XA8Ffw6bLRgo1MY7gqMZaJTZ5t9",
  "key17": "L7MuV9e86S1FpFeurVmY9KgRofWGvr1CF5j87hiAuBew1hWKV2snW4aEhsnL3zZZnaQvURGVghqG1Arydp6C8EL",
  "key18": "erxpxXRJqicjHdVPzzFRjom1pCLsLCZjMCmwBgTnifxNdd2B5sVsnevMYwn6fsKGgW93n8xT858duJASbuc8fqZ",
  "key19": "56bn1Ed7EnwmNF2EXs2sAkBJM514q7iAdRBY91GNd1ThQhi3DmLCEt54cVQ4JoG97FrpPyHkLKfTV4YP2tafD5qW",
  "key20": "39EMbMQnh2BvmnuxTbnJYQjFXBf3fSC8FUFu9D81q1nzeVz495KWz9qitejGEesYWkUfAADaQ7cbWZf5p3rFtfgD",
  "key21": "32hwSF2ZqsJhoVKZXMvfLz3vZoYRKbNUnxrX93g2Ai4TJA42bKoGtZBnjGG2PPLe166JjYnUixdSAtigpq1EQe3m",
  "key22": "2qWcc7AwhNhvKkZkysxwEK4ES7ZiynL15k5FK5GBNBeQ19huARDxMD2qjXXtYqrV4vFo3Y6CRbZokp2QeHpceYG9",
  "key23": "Rqsyk9t2Jr8EU5hsUWQiWtYkjJ51ACLZ1UhMbVy7nZS7VCtqt69SvX6YYTwyrkh9RQbfc4rQUMuSDBNw8eNTQNn",
  "key24": "22UPM5PGFd1bBSfG9n7drMwQKtheZnjMZvnv7BFsyqzShyopoCEUgdS9orSRud8yiwfT9Ecdq9KvsyhGtiTyguLy"
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
