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
    "L323oThYrYemxDC7a5m1NFBJZ3nnUxfWc682oTetfsJg6rhG1UTjZxq4QUn5WrqvJY1zstzgaHXJpqW9WDjqcMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PMoJDUy66trb6qRk1NYthsjM7hxrLKbm58a3ahj7rVvJoimFjTcxHDz7HgQWqdDYLY9xnozW6gzmLsiwHJ8ZoAM",
  "key1": "WKq8yftukKhCnjM2srN6RG4j4ucrQy9s7Gremk4og8Ws6bW4vs12Bo8N4nSkvBEnDcXhpmMELgq3yqWoZ7yrrt8",
  "key2": "2QLAYD2vZF1vyyXPbwcStL7zATYtR7GjG6G6PjDYFEMAt6QF1ZEhsYqge3pX1puebgeiWhbLxXjubJWiye2hoNzL",
  "key3": "54PvDMpNBctT5MS6cLXcEmFXitWvm8wsvZ4LfQG8zVdZY3TfSxkZwRYEqsA2V5XbsBWdVomf6Qd64fc7dAeyznG3",
  "key4": "5R9RiXLSiWVPuHMZheUVyovmAFDDf8LXH2TgGkKVnAqdAAmNmXjBG5duAJQ19mmmQcH5ynY7oBY3GGgb3ov6eogX",
  "key5": "djy51JJDNuThEiNvEUy8YpaYYh6AYhG4TVZwXJxcYqYvv18VWJE2hBbhnxC7Kyyq4i2FzZ9rpg57RcvwR46R8t4",
  "key6": "taR7EPtxUYNPvFyYvWXUN8dUrNvfzHRqSsmxmxhthDvsRCzSNcaEqwZ2t783mrvAQgdeKHabdrAv41T7ywtbnZ3",
  "key7": "678eL87HhFdhCJ2bs18D8GKfAY69ceVGAMiysgpJSEjs5pWfcGZQWM6ErPpF27QgbXfd7qpEMiHBpvCEVQyVdXUe",
  "key8": "xCCK9Yfo7qEGbFBxmE7s4Y7xasSUvWhV9Lfi81ECcKGpjBBp1PBwHbY6VCUEvBABHypd4k9pUzEz7m9N1hTKK1v",
  "key9": "XXrffCTCBWKu55xPCja2w1YrGnWj13FUVnGxfpYf9msEHa1kX2sxDiBfiMcqbU6Jt498jfe65TaeE1UqHzD3iFh",
  "key10": "4xpN8dw4613zMCKM4dD5j6X5JzSyvBvpAYjB44SJ6PQYroaCnkubUyT28En5XnQqDP9zn5z6kt32b6arhPFTRFtd",
  "key11": "5RabKhZpzGho92K8fQVnfySgNb6htkrNGuUTBEPhNZv3jr6BbaMA5WtN795uFXZW9C6M3RduphnG9jyB3xAttCqL",
  "key12": "LdWRMxnGMEW1qcegXuR152N71qa2mzZetKrAJ8uDtrh6zTaYPBhPQenYr5BW345pK87JxM27VqLFp6NnYPJmhjS",
  "key13": "5DtrYM1mK5oYKYCUHK8SyP6VAW4QmGvoSK1sTypKKmx64nbVM2tGXzVSw5dmvcZGBpmfdNCN8UaskpGxSc5ixq61",
  "key14": "5egRoatAMNpuBRV3bXEUjbtU5GiXn3ADdnQEuajAjbzdD6FXV7zVPGkd4r9ft6ZuTgUQELewB8FEQEe2ohpt3FTG",
  "key15": "3sWepN4TscqNgQNUr7eRabgsTLMdoZcY49Pv8ngL5j4D3CsdjbM7462NcXUkGxhN2miHm4egmn9yDcBzsjq5xusR",
  "key16": "5GzEfvRSvKom77E9z1upjZRjTRrLeSLomrXkQd3RcXF7FRhnoB61MX6ckY78mQvDirUbQ9GLweFhYQJkCbeEpD81",
  "key17": "5EyaWvNpzY6RUcxEPHjRiG5vwk2vcu4R5DN9Pe5t6B3GQevife4YwK3GaQdfaa2VarpCAg9FTA46hK3MC9T2Hixw",
  "key18": "3X1aJr51BWwqX1BV1gixMuqdEX8reneaXsZNHx6RtBasB9wXb2BF6dfQch3uymC2v4Rb3kYrzJ3xdJJAKzPL7dUa",
  "key19": "3pLZ7L6uZTioAiJ6A7kFaRsxtnWdEpdpNNLEMYPddY3U541A8gCh6zR4gXwGcXzcBAAmQKWLNoMcoP7Dy2AND8rB",
  "key20": "5KraW5CPwo3RaCuhuvNnKTPMDCmkm5HqWeH9oiS4TzPsBTpAQwKmb3G8t5STTY9ka7fBxUpTP55aGBsKMZbxAPw4",
  "key21": "64f1N5VAHrEuHJrrs2K9Dn2Mz4PUMKLaA9Q5BAQeT67sbLEf1nWei8V5qU1uT17n1xi6w8tXicFq4tgZ6BoUmdc9",
  "key22": "3E69Usy5ZF9sAcfrbRejBrXXU42V1ww1WxZcJsYZvxaPNsCMnHKR2EkdG7Ae4x18PFii9A2mvPMcP6QWpvX4CXnK",
  "key23": "3UM5EAN5tKGqa35CoEeSFwmm4uNxJCrJQAAvmDDd6DmHHeUpnVh9FfJuT7BkYNdy8Mn7aw3Wmrgto6wNVDoNkMWD",
  "key24": "2BMiLCAsvoUhcK3hosujssHZM4QAKAmnxb7mmmMemyTzKaM2o2WsxWFvDzpRTyQyV1eAs856H3LuqGi4StSvya5h",
  "key25": "YESujJbUyVSX8deT6XagoSH5QFxg8FpKXNH2SL3CGs3Mi8kbAktsrkoVPwbTPaqoBS8NpwMqfCpjaybRPaVeEQw",
  "key26": "5S1nkKLw4EkAzpKy9pdRfVSYT7QF4HBpPiHZXtZMztNhxoj46Qvxi7N8v4wp1mtiXmb7mC2C52aEBY2TwxpGvx1p",
  "key27": "2hQ7osKVHRZKkyphDPvBdre5y3Tc3AEKFYJ4y7tuMvYgN8jX3ScSYpWFMa3sQt7B1GRuvzQeP7EJdPnZ9PFmMwPs"
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
