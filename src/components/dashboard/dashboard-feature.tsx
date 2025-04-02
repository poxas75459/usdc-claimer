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
    "z9S7rHJQ8bBbwv2Vsd6rUJx9BeK2S8HjctttwXrPYTWUVDsj5EJvsAxGZKEnhFeNUMvxfEDgrRPdYb9CY3kWd9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FockHtbB8CJmUCPHX58u3TyxLW7qYpUskCgiyHWJhjnmxCe3wmDwr7Ndj9yc3W5Nb1RL1ySD3AH1qZbEtCNEyM",
  "key1": "44tR5JAxr6boRvEMbidfW4toQxmGFQGHgeFRnLNvyYbzvBxbhD1hq9S2ortYXWPQLYKponmDh6PazW7JGBpUFjic",
  "key2": "3VyG3A44nsgeLrhbsrQn3LvHYWvssuRi2iMtuS3e3fDeiMyvMSt2yY6BDmK9xUPmq1rGaUCNwMPr8wrJ2fVZCbhL",
  "key3": "3pn4MV7nP9PQGFej8T3P6ez3vbWzeMh68bYm1Esbub2XVpdwZ2s8FMBEJmmub3FnNVxURuNvZz8LbL7aW2drtFy6",
  "key4": "3ugB6gEFkySsrS1wi3dh8zQFLrYBeACyG2kvs36PvQCbVA5x7JesrDCHNzXs83NsenRfMCzT77FsxAHX5PMbvYn2",
  "key5": "GKaXg4SaRyNouDFSfKiy35Y7Aa3vxXb1k225QRTaadQ58PVSBUFmhh64EQhFnyvmwwePT7eDYv1V4qnDF2BdmZd",
  "key6": "2vJmiLkGUBxSRd3shNjSYEZyzV7meuxMfUFrqupqiJAHnGWKQLoxCvAKfr1cVJtPZY5z91Zwya2HoF15Spa2wnHj",
  "key7": "kwMKRLUZJXkVgvV4xPegkuCGuWsk8nYUY1D2h3kMooQEE7wF32CVP43o4Fi66Ap3r7REGEDcZtVMMdZit1o6fEX",
  "key8": "3DTYrNTJwLQ7z6BcyER1MUwbsUpjihnFrZhww142vReDLewbETK3CVYnH3tKEw3tzJbhsQPqZphP5ozd9Tap15wT",
  "key9": "3ATGTux44Akf1iEA9mcg5k5sUUXwFyUyZVtjpgAUjnwLMyHRw6g7igam2uDPLmaSpspzBBHrcVhVMqhNW967GdPJ",
  "key10": "2hAGgPjm5Z5yEdvu4EcsDuJwSvcg86cNk3vG4W9ib8ih6xPRSUAw3noAX7LKmMMz6XGdr4sLbE6Pis3EpjyYfC6k",
  "key11": "5zRjkzq441oPk8dZ2RYicNWAMcWMfZSQ4LjoXubc8tUYbQToK4RzdsqbbtSCV2KdLYjipVQC8QL9qgomBtA9wDXQ",
  "key12": "E2VYLER2HjrsL7YnvLyL4pbGRk4aNPTnndEAtaxPNBUptLuS85bin6zr9NgZcPFZTVyJSZ8G1gJtKMajPVXXerM",
  "key13": "q2wV8HGUQNcmn3ajYoqhqwEBt1c4CzYY6YQ9mw4dECe4NXEijdKKt7BZwguR8JhjaDF2FKc28MDoxARniQ77E9u",
  "key14": "5AxFPGYcbRe3q3ybTfGi9Lid2fut91ksvyHmq18j4CgWurjAz3eoX1L4ykdyA6s7TDYx4XUDnLyq7WAYe4pga9fB",
  "key15": "3bfbkavhh57fJnLNuMZKoFnw8dc9KBeCXyxjy8gTHpgBKWpVSB5mCyg7ySvULLTMYZxG3q3ye38qjXZwPWpYLiSh",
  "key16": "2oBPZGPsPyg8AtAePwwiyNS1K7yammRiYummRE2R5bBg5dMgpp6jQWjvfyN9bWtn5shGbASpTefqBSAubJCNvoCM",
  "key17": "3T27UNYsEfR5SKeVG4NaCXoi47Zz1DY2Xv6xmf889YuFvoeKqyySSGsF524ijRf368ZrRrAKN3uiXQHFE1Asoi8o",
  "key18": "kZBuCGynD9XGpo4i3G8Fq1hXhi6RGWCt4ygzt64Us8LJeYZUSYeXhmv8UscL8rLj7yHCQXttMyLwcnV5P3MLk24",
  "key19": "4gRPAYmv9wTTDFf9pChD6bgaaigmA8XBRP6xCEGVYw2gs5SNn1ZhkyFtSZz52fBZ4kHuJi4JZH2nuR623gLRduBY",
  "key20": "4F239ZEvFJNg2Pk4uffpaGFgzTDszP5anSiTaiMvU4upG5NfrVsURapGRuY1srTJSCHu2YVsFUrEUijfXBeUhXf1",
  "key21": "3E34BKaAcQm71Z4eMDKrBEyE82FmVMwDckWYdH14HrTa8a8pi4wB2nYNmkNxSQafwrUfVXpGFoeVdxGR5tgDY4CE",
  "key22": "2kiP6dCamh2Y8gaaLxws54FGesgAb7kXFDq8BmKB6QFLzu1UeNbs6QUPXCkZA4NCeGk6mKopwgLjLf3UbBikaRLf",
  "key23": "4CbwKdu9mLBEXn8cTsbP44V5hy5nWZ9u8p1CE6eUt9SFSajaNuZYXJ1dTNLPtFupFLqmP3AoGLXPnsVRZQd2HU67",
  "key24": "oZMSCNkvpByrxeEDxfCFT2TzCkhQc1gFYqPKcvauYMttqFDzdgv4XvdCHLhifZioeWXgWjeoD8JAMLPCAfgd53e",
  "key25": "DBpMQt6WYDfwrmvvPsnbtLmKVY6DL4ZAvvXVStT8fzJ4fRnBTQTPCaSkjbSfiPsx3nQE75aiQejYREPvVTxefB5"
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
