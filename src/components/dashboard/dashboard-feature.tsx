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
    "Ta6WT9eQbqS4yMAd7ubxPe8SwGRecm7xWQWo3rhcJesri1ihBErfSVYYN5rP3VJ6JNp772VT18hRazaKDy7jVa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKjoxpQZubdHsW6NUYESg8H33yzLwsAJnzsWA2qopetpdzHMu4qHzyrRrNmuH8WrQ5NCCDTaJEGwMASrd69PZpX",
  "key1": "2CSzCdnQoVsGTTdPSY4ZcwEvtGxqZr1SQ2EsNyHoeXPC7pms2Zp3ibLRyeydEPEv8TeDRf5UGoKcQ8enCktn3w8g",
  "key2": "5pxPk7GjYzdnmgZ6b8JfujHXjYpmNusvTrPSf1dWbr4Rz76A4DetELk8WgHxFFn3Nys6UULCYoU22rmSWbeDHUvS",
  "key3": "2wsMFiST7f53seTjsphY79EY6Eh8G4j1QzP4VCe9WG4QRnaoSdcyUKnYrWiGUoR7nnuLzHpuv4EXtM1q7p4hLJSL",
  "key4": "51AHiAXPDjtGP2JJjmTppf6hEMJ8AwjPHfkJcP6T82rGcx1k2fJSpVgLvfbfUrUjRcC5TBP7QNx11PHRLzwYenVV",
  "key5": "gSJEJzoRQ7B24G75RBYaaYoo4qpHryD7A9MzR8AAV71C3GdSsZJdbnaqUhWzGXArLEoiZCidMKZxz4KoiByW2AK",
  "key6": "4cCewCCPaR6gApV9KPi8FMok6uojWLQL54rfBigB13LA4CyGBgst6qg1o264BbFNyE9y2AeCBSeQXMqHWps3vNxA",
  "key7": "5FxvnFRhPiqbZ33ADbKT2rQ9pS5viEPATj18XYdC4GFLLUTjfY8VpftuD5pbgY1AQPQVjNyXFaceH11BnUagiBM3",
  "key8": "27KC4iZ5uBBL9EcdMdNteVzqFgRYnLkUJhVkxL5bsfTdfswFTT2sAEkVMVSamVY6N94GGJjBAcb5gJdPzHLhW6vp",
  "key9": "2yVDU4oAng6UqqPF9qAN5RXz43XUPF56R6CsC5w4nLufNox5oeiRDxrjZCUwNfxcytGYLSiU8V1ij2QHupMHxRXM",
  "key10": "5uRHw83xJbftum1bHvkisqJ8PhQEoSyFvaxo2Z8z3EaF5tWnNY49zV77kbnUmbsiKiT3ESm7rkFPHxdoe2iSqZ3b",
  "key11": "cWrvKQzYUpYSXHYRo8i99EaSmzGead9BF7AZrGChUKfrS13dxDnyhXNuBGF9woLjb28ouGAoU9ykUUz8pKdBKSC",
  "key12": "5fcQPR6yjB1mqJHcu27SStr6j2noQUUMTREyqc8jMJv7XPCn2tGGZVDrFEZs58RsnjNLiMMLFknQo8UyQXVMcqAp",
  "key13": "62htpQrAS21tDSsUWr2T6C7DKXdN2c6hxRneuk4QCfdrPB9r3EzweDNPT6xgCtp624znaefm2juLABsmcbzRAxTh",
  "key14": "hY31YVtS5GQUwGg3zdVhLPHxEuQBrZzqRXiPqfx3oj4BVdTxjdwwZ7XDFreipmCMtP26gc4X5kMK3rrkxgd6odb",
  "key15": "VCvQmj3xP7NP96A1sn6RRgv92m8Eytyfoyz9HQm3KU2gknEDyLrb7BqhKtSzQMNCfbX6WpVcSXQ1vKkr47rpAtL",
  "key16": "3665p2HeXZnVWhtoZcUTN3BfDqBavFGyRhAgW4sQwnJUsYghxp8o8Ef1p6MRwmsjee7Qv4Xx2a9REWh2uHiGdUeH",
  "key17": "37FfyPzWU2Fpi6ry6C6yBnhvjRP6EyXBwjuA9rabwNAiD9iUgNVSGos17gX113PW3WWfUDBzGv5TFuptefiG5j3v",
  "key18": "5dLuXpS6cG4vV1R6SAUesJbzxioWSmE6vvVRwA193DQoEf7PrfBfE1UhNqurJ6Hr1ydLX5QakdGUTGXTrJhKAt5n",
  "key19": "2rCU1wFztGssNXUKaTF72e2AAa3ZPh9kvFPSWDmkpE6paCTZEbHzSSNUeDY48REqPH1WGMttv76UgGFZGoxCzkXp",
  "key20": "2Hoj26KSAQnjiN44pRR2PhmbW3DFaZB4Rrb84A6PUUf7HpdwFntJfcTwcA6p5QfxzQ3LrYKmpEXqFzdgA8HWNhvr",
  "key21": "5KR1JNBFBbzrJsq1uWKXsDjqqvtDA9ZDrZqaVNQzce8SAtLReyxszjtxeM8Zh4VuiHWt2NVQi7wmBvYVXK8zP8ys",
  "key22": "34Bf2xT4j5NHoZ3c8AXD3UewbHmTXvjruabrNKjSK3tQfgd1cEPG9JiJkXmU9CNb3RTQ656bzuxiZnWq1EKE3HGY",
  "key23": "4vjjetAhtQKLKEDxMH6gezLntoeKC6TFzEGRQVnX8zLTdkqpPzf17o3JiaFSF7GPrwwQY84RM95uxizANPZW67et",
  "key24": "5pQBuJB26mMJpRfM26t4u1VY7ehnJVjuBUsspnBfapsJpeLaomUEFqTpvxnNN6JdWNLCvE4AoGodeDZ4nPGRGmA8"
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
