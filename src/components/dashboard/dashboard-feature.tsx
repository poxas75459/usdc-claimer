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
    "nWofwYCiu8zPcbcrebwZjHSaB92i9WdKFDDxGeJhqKVpb7wS1zXjrppBDXeYWD8H8rENbkL7ef96Mp5rrEAhZbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ap2KsNinL2QHYS3RUYCL3YGpVdTBf84Z5qJKkGJwbPMaxD2cuia5koZWtineHyRMueEnUis4iXZksD481Hgrrch",
  "key1": "UR4QHWLmjCRiqBrKavk4oQmKjdx8B8VhixA2b1BHToizmZFfbydBod51JZsRGVDevnKLqqpWAjaqLLYmfrLdyCw",
  "key2": "43surehQ29MWov6PPdMajJRrTZp16Z2naFNHbg1q8d2AWJeLtwCmLwQYZTZnx3Ly2WQ3Xg5VtVD9mUmqt4Jb8X8H",
  "key3": "4SBNeQ2fcavvm2uGsdNnPHKGcEayft3sLBAfTDvWXMVDgEhjxo1vY7SQfXScLX4AJsTxkeaqSGH5wKdhg6BnatGC",
  "key4": "3uwcQjkb3phXXwASvEjeypgELs63c2UJYoedq5K8yDXVULwa8TD1kXww8R6iHAcLWcMwmBRFURSwUdZtZSgHQBLy",
  "key5": "TAPh6e8FPgmaKRnoitKGwiMx7YKuUAn3S9VstDiHgQyHWWVZwWyZaWbZ4aBQhMDyrPmEEvVGPyfXy7wpmomuUq3",
  "key6": "3pe97hdpzPdL9FQ3F5fe8TAVWrWTFBw8jBD22TeBjJPfZVLzdFZWWrfiJhfyoJc7yj8g5uE2zk2Q8eBQ5eaDjff6",
  "key7": "3qGgnPHuU5jzqMcjBvduPb6x9SMZjXt1KsAX329A8EzemieLouSTsuUrYii8GaDrcjwCaEY6uFDL99qUxZTxeair",
  "key8": "63gDWQiKUnhj2YkwjfeUdELZ5VXypdXtgBZ5EsxRGLMmampygdEs8WbtaNitzxuQRXtC8ZJBo9R1FVypppzKf54M",
  "key9": "2pUFakgS5MYPXDwWkR2WSfzZfg3BosSrRXEKw7hs2ZnGjz7BfWdvwMZhrcWiFWSAH1yd8q5YWgAPgfAH22Tu8fNz",
  "key10": "5KdysgiKnUPrM3GXCsECGVPf727iXF3CBmpq35QwodWaLCb1DPtCBowgyUrtyEbPvTEFWcaUhXQoDh1LdjFmsSwt",
  "key11": "5hPCWALRmJYcpMVkyBAsKo7MUjywAqX8T8VXeirXpJ17uuAoWKkSsHpUArJDnqfNNJ7ZCSY6ffPkXnYbYsZ3wdxA",
  "key12": "gssBzdsc6GxFK5TcYiF67FGUQRz7h5NwimPZJUtrfA2kiDgTqxkh1qNCuB6eJS2WuCUhxPPFHme8rDLFpTUfF99",
  "key13": "4YLe2mdLQPerKWPff7cWMGFZSuye5fEJuCmwHHCkPec5ZzCC35kRU9UaP8p5qJFbYvqNCGAduzpms7WX8vZn286b",
  "key14": "58onFK6Pkssmw2gpEUAFFHqBnneFEYKmSDpZy7UMpMHqp3FBVGjpKBm751DTAyHZ5z46cPFVM8ksWm4PJQjka7V2",
  "key15": "56qYzQSjZEnavmnYpa44APNmRow2icMxjDaqxgzQVoUAG83up4tf55ibHBs2WNA4ojaLuASeF8KxncY64njEE9TP",
  "key16": "4RTtx5fuFm9hrCtL9YAuDSxpqH8GNb3DYJ1hwwiiLfDMnSfTrjXrZcLafEdigVdYc2jJcBWVNmjRQG48LrLa64oa",
  "key17": "2KHJSorYC2y8RLbJpL4mcYnpdHaYdpzubiMsRN5CwgiUKgXzfPub4sqDEPuj3op6KnYREgtwuLfYcYFTWpzkYCGY",
  "key18": "5nC9R7DuzebCQnvAxJXsPAdncEvHP4R4YSVx1HWN9wWvn641BvPZY3oG6Q4cCXDeAYRtMZpjGhkwdKjC6v8qhPPK",
  "key19": "3KVYc8jvQjAC2Mf1hsCoz22iJCECc64MB5pastpLe3h6u2wcFmGq2YSeCm39Udw4DZqhBbYRNxEKxqe1MfXg5Xgp",
  "key20": "2exS8qY4UoWF4RYoMnj7Wz7b8HqCxUiTzvoQT61BGiquTSRwndytfYErtkMexmLogvuGTYeVimmKBAfdGpsksJed",
  "key21": "4MXcFC6SQZr8EjKoLY5ZMmYCDWVu8d2GUsxVxv3EBrM52Mr4NP67D1hQxrCxFkAQhsxqFeezs6ictJ32AnruKHo2",
  "key22": "gnHjZYFhvaNhQXCzvfqSB6W3AkXPG1FaRYAwucoioTWS12PiAzYcpwkqxgEyM1q8uFc19f1j4sF9UFg6oQZoWyw",
  "key23": "UVY53gjkjByRaWFK1XNkVZ6dhDKtHPuXSRAjFFpdhd3T1hFbJQ2MCiEJukzSjs6fLjpDwbfmZ6VLRa6um9S65LA",
  "key24": "45JURmonEX29UqUpnURZ3byMZ2ZGNKptfN5Et7Ap5myNUXgMUfmZ6toCxnBYrhnkiqpYsTwNX8KdSNAxgrVQWLne",
  "key25": "3BYJ4rJ8qP5WYcgexPTAxV1VJbjHww1EctC8m3N89hwHaVWyKoumRaaibq3juZizwVshiEhyoj2gZVtLoFMByQFT",
  "key26": "3L5NdGq3Cp1KbTUHXG2sGHr6VksvTuSiwmyS9BhP14t1nTc7y3CFZLTXzEUM35h9gniRLiQRrLitRri4Q54DUC6G",
  "key27": "33nEnq8tiKitUtoaBCnh4qVjwCm7MRxXiZKPyawrJBAmY6GCTfqUxG1bbRSx96RKZo4MUz4rCQ8CJpLbccPA9uH",
  "key28": "2SDF69TZAL1w9fZthmYNoAmQ3fHdpLQQfPRkC3Jqc5PX4jmyTJ52T5PHjnkjxg3LSKTBkHUHCcpGbS9XXE6ZKhit",
  "key29": "5hDQfkfoKWEsDKm9ZcYQXQDJgYFmMpreXo7baeAG63KHqyHnif53koSuicHeDac2vPfhCkvBcfmE9pqVZ9VGPgw1",
  "key30": "59GsKDofnoai2r3bV6w4hePDBpku96pAE3V9EpscMRd3AmBbFydGKymRe9rZfLWrepiEmGuiZeQrJVLfcjDhccfG",
  "key31": "4pNHTcXQwsfu8xtuV6inEpiE2msDDtApCrgAUbMQotydKmE8RdqVmKHdgMAMHKR1Jx4zgGACkZxGooDHnvZCxC7d",
  "key32": "5m7Tbp5bGfPLGoytdDA8bKdcEotWxyoGAVBAMocFyQoBgaSGiKcUZmMKa7WQTYTfzNuWQ64o3jAeBDDtQMrWzBzL"
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
