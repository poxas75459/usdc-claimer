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
    "tcrQqgdFQwcuhQSXVbaEvEThqSKo6F3kiKchSDWFpTN2wW6WoYWPYyHKmsDhP6owFTEFGdH8NrtyLttrSuN9nVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzaNkvh2WYTgFGj16NxfTkqqBDQrk69N2chRJtDQk5Txez21N3wotddBxC4Z1SJFZAFh3PWZ6UJG82cqRyBjynj",
  "key1": "36wSCE8Veu1Qibfbd1hNL7faSYQKaD5qBWk6u32vGiQ7fHh93AbkVtDeiZ9q3v4MFtcXAfVPnWxAzmPTe6zYe6rM",
  "key2": "3QHfw7JyvpnV3GYcpu8FmFRHjjhVWs6LKJT1TP3dQjyoQd3miwGqH7ZizSyoHd455BZEozoAchqxZLpGmjaaz4ah",
  "key3": "5jXsZgokQFkAPkBKQhaq3tmk65sKoLet41KU51MHz67PRNsQPv9DTjQAZD5Y5GTkZRm31GPKntVcjc4h4B7W1Wm7",
  "key4": "4hwEhd3hV8vBPLA2RinXfQVTFJY4PjDJxS8sLPhwknWc94Q2NxzXxH1J9FkgzUJ1g6ChDNKNztD9Jn2wR8uh2eN7",
  "key5": "2o5N3HV8Xu5j6QqgH8cj2LmLViKkJmvdW5w1VAhbrdFDkRFv766ER5pc28EPdwxX1SKGWkhPogpMN2SPe7kDq2KB",
  "key6": "4xv9rcwcAYiM7c5b8Aoq38hBfJtSX8jbRuJETVGV5Et964fQfyVRNCgi9bbxBxtXqCSei7tGJ68WKPogEuYZLXjb",
  "key7": "2AAigCXr7tm5kf89g7hPzDnErWVFJqiYA9D3926PkJhngiBDw4fZnXPxR9cZroVe9geV4TXZBwETqkisSBg7cy8q",
  "key8": "3ofxuicfBC6bGcSigvFUYGPxi9Uq43rp9c1fR1risDcdM4ekHkkTfdHXQ2DnVGLwqzq6E2dc33KoasKEjRastQgA",
  "key9": "4FpDi9QM6hwCw9eMqxhc8g3Po2fvZ9wkw1qDhgGLTEik6mothUnYYyyAF5J7NC1wcUkcYdvZwvsBXsmAGc4QecGY",
  "key10": "SpvAYqYLssiYadkUyAmutMpUy8jAa7dUmE6xGw4fm5kWrFBUgxkbGxJbssu6LDNVJdDUskZ5WDFK7hzD9od2wK2",
  "key11": "Dbv6ZX3QR2DTXPZD7Z8tnUUDzRJr2JpUfwZdjfARCioyYXhT9KUwm2c5BJ7YPypfW39iYnMUopwGGD6UhzUc5ZN",
  "key12": "4J523GNP2UCt7v838HhUhj8edKrR3YaZ3LhHvrcD4pT9xkAKuTfP5WzohJwb72vizqBdQpey4rr7rGT33cHRdKyZ",
  "key13": "36uNd4TQwTBrDxXmkB1jqhkcnm9UHnvdndHxDNZLQ8RKE9gB7F5cURGLez2M25Wc8DBKAZM5jaVKD8E6s7eS8kGN",
  "key14": "3RuLaTbodBiQyoFUGEdq9Eas4K8kTLDqPt6aeGSLsDjJVHtTxzsavMJ7W7EcD5tJNbVeaYy7bacerXTD4KwVzQvP",
  "key15": "2AzoE1wZjNXLDMF4D3hGH4mttNn3HLfJMW4VYj8tfmoB8bWZ1mn3VYDDnMuwTQFk3LSbJJ6ofkGtT77t6y47WZRe",
  "key16": "23gs4wodekSwGJkye33UUYcxNMW33tunMD3V4pwm1Qf274ZM1gkr2teS8AmiHSqTscJDyUuwqds8GKZ66H239i7a",
  "key17": "3mpmRjq6cuH2u5CZcPenF9tnGffeZscTmMM2WNyr6KqiaotafVfkaQzn7vxLuy8esTherDEyAcTusBJgiQfLafxq",
  "key18": "5NtPMQtgKtJqxFgsuXs75h9k355pJWjdW5Kcgk4gL7U1dAJgDbhecNFEKPVrL1MhSy2jrJFJQjMmYwgdQ38KEM8x",
  "key19": "21axH3BpNrP9UegQuzwuuVFbxNXxdJ4N4Zy5LCJ2tnQ22igQXKXXKgmBajoE1ofpTLbe8H2yPUArgPdTesYnNzP6",
  "key20": "2Vqg4XYQQfTLKugSUQ1bH94sxknKdR5b6CBuiZkVGmMdsT22VzbQ3NTs4Wzh5U4ABDXoEsn1DZMXFnHuogM3mAoy",
  "key21": "4fut2pb1iAmi7mRsaudvAmQqRFRHJ5Bob9rbdjLV4r4xbLyy4gZ5FuLBQJhUtfz6AxmKvgujSJRPEiQwHBMmTro7",
  "key22": "2jdQRkzCHqpioPXHTCawhjVdauXnXZFfDzREQEgyXckuQAwn4ZBDsfHFFsLpTqxckhpHazuQYVnn12s8ADVaZsaD",
  "key23": "3tpMRe8fbjNPnvR8XqGHw3DcDSrbJ1kqUaRUNB2HivLkWR5NutQShWzEFtyeyW2uXLNecCunsjEjjLznQgAhQSYu",
  "key24": "MJGCn8DbSiLxV2ywdwZfn5ZDqRCQ2Ca5pCmpPpjuUxUKqRM9D94bndnHE1MtTCQFjP1TBTP4S8wDY5EmAHzTh58",
  "key25": "J1Weoa7niUzgWFEcZm7JyEaX1JdvLmNMLYq5gpQULSkcBhqQRE8XM266nEQX6xBFm2pUGAtynWp2NVVkRQTixke"
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
