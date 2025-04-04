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
    "3oZurj6KcaMm48242yEcbkJTFCB3mmmwTBqqwR9iNjaRyk7RqKjYnHGJZv4VKxNMU7CajXb5HsQkS2Zcij3PNVpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "332mPb6jk7aztN4wuio9E3zUkSpVQjNjC7haMNdgRR8uvuTeXyBT7ZSG9eQs3QmDqW5tGG9m4HxqP3iyR9WCCg3T",
  "key1": "Wao2TwzZE917zdueu9zb9TJN83hbswTyffJQVKZCjEma65jm7qWhskdYYYkDTE56PN5sUA5uk9qGf7yfMX8ujnj",
  "key2": "2pYvk5QvCxfNVnQpFLeWwZd5gNchLidEnmFCxDZFQQA3tHcJwmai5P3N1XbPxg9TJJAver4aJsGeZzhRYKXj9drr",
  "key3": "5zjauNetRPwcbVeYoGsfri83btbSfD89Qb7zHqJBiZwLm6CfUzK2UEMNGGMBxU3StzoVTXkmLos7dRSxecUC72B6",
  "key4": "vspCjgprzG2VnGE5vKX4Mt64hubciUn5M9yiMW3V6WaL5RRugweR7sk2Muj2nUDwDeasgUgLs3RT2CiPDxBCBnh",
  "key5": "4TDj1nTnr4k6FQE914goQ3WrvJ38rgGvVqHDm5dYFKsXgaPbqVMjzXPLdXcRKkrVTte386r9wwCgrNibQEYtd5B1",
  "key6": "YcmGTYa7dDvdEDDKZpoErkqhP3aWmaBhLrZEDzPSF6VY7Vz61QJmHjoixvvSZ8ef5tirBVYguZ1qczHf3tSgMAe",
  "key7": "2ZHcDZoe5U6NTFCAL8RWCaNok81736GPXs4hdUwXBkSWTz92LoENomRrY2jhF3hyt4sfF1nn4Boy7BPPadFZwiJf",
  "key8": "4SWoiV4F8esDh2ke3jtN6HYN1FVQWyscDVAELqwGtzN68HdYVaqBDPZbdrY4AE9eo23K1Q1tXYfXEKEoqhm262ca",
  "key9": "8TpuFvrmimREBkjw1wU7wL5WhRHepaR7bNgrFra1RKzamxxuxRsMTR22ubtXLJXey5ZXCbvmQKDTNi7defukKoH",
  "key10": "63DJtz9UMUVWeups1HzANti9T5tNm3zs6YK9zH81BDodhdNrXkRXhnTrv5xRrJpVXqHzJhgQrYMHXDZJxs59Wkxr",
  "key11": "5f2RtmQRWPiNhZAd4u7cNBVuXx4M4Wee66TMLWCtkFjqTz7oyw1QnF812ay9m65Necvj2jSFGdnBqtSFyzZX3P68",
  "key12": "jrRXexMcRQXJzKmM9CBFWZsQ9vpW1Wnpg46UKcJMQKDtVJ98RJh8ULoSwfuEFvwR8AgVeHaV6DSKRKf7ZMZ8mmY",
  "key13": "F4E7eckeWutfiuP8FQGjvC8GRWjEnLoCjKSHiUvs5TUWU9B83Ryu6TLiQ5hWmUPHbafHvg8n5qMrvYBQLskinWa",
  "key14": "41GarCwupx4iNc5p3n2iL2rQMmLqiHujGgWJiyykdif9U9PiZ4YpBcr4GLq6hz4MCXAafjMTQLgTXiM43dCfuNU",
  "key15": "4c49LdNdbUQPcwYBvxRrsiTCPdbzwMzL3bQuk94yLLAvgaMGRhy2xRuDQKBmZsRfXQsfbDe899vW669jaVH7H8DJ",
  "key16": "481gpBvSmUvTgYcZaeFWk2TPrm4AB5ezFSxQt1KPxGxmJPfza8WJX4YaeqwfY4czKZGc3oYrPbqrfok2qsQob6yd",
  "key17": "3R5zq1CHwdVx8xDaLY7i9wC74PF4Avbqf1UyHMcDQkWeVWPiJpHz7d4gZGoL3oQHwnBVq4ifNVC8RVugZo8tJf4q",
  "key18": "4eT3dJ1UiYEyznb5m6zHjDnZkgLY6uhzBw6gKz25bJMv38MuxSRMUkpAhFT4AbfSUmvpcxMajCQosz4Nsoavby7S",
  "key19": "4fpEtUcPmAqkneHoRZX15ciKkECyXzKcPMHPixsDoJB921yghCz7R9Z3HeZnSJcphmhdxDaFEMR3ZY6UX4aUd4ro",
  "key20": "5XFAgGnzdxmTnPdhrYNZBcZpwSWjnVqiEQnMK1JtXZkXZjXdcVY2UAe8i73jYfingczwLoYbbaFpVxrsA9MzT8xL",
  "key21": "29x1nHTGK37KoB97NgwBqRJEzkXGkZqJwRedprR1uufBjoFEcP1WsekYm4r6C1bHXgNVpq6pCimPAWhGUdgwj1bV",
  "key22": "2S9h3mxbYkr47Msk23rcQQBsuXj9C7gFdvfafkxSN46tykYtQN4xQaKixunec3b1BJqn6KpeW4FYvTMKaWzP6MWz",
  "key23": "2DVoSezdzDKJA21x1iP13MSvkMbuA4WR2B5SK8kkL6JBcUqEGe544fJjKUwcfBaPpUYLedcznW5mPfEU8ySvSaMx",
  "key24": "3FNpc5c8xEsvUiqBWn5aJPHLoCurKXQ8oFtQrEjtLd5ynAtmaE9Wrr9BovUrFKsvkkkYGM3ckAVmVkarHJ5k2Li9",
  "key25": "3jeB5tTB2x3qpmMbumywEGwvs5VBRhmZDtNegqXVd3QcVGKL6mS1dSQzU37RfwYRh5Q5xTVeNGFHd3QCDzwy4nbA"
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
