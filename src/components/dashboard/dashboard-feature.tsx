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
    "2Z5oHz9RK5UUcYLdLiDngoRx749YKSFyATEG6akTNefdpYoKBYWdtVLoyQFfv1o86R86T4UMXkDxYffDTxaqRctt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSzV4KWJCUbq8oNdVb6qzNSNC6mhewP8v6FLt1bZrPatcx489ajHpyM3nCoSHBAFX6eztys6emhEp1C5CZQPF4S",
  "key1": "4yEEoGSkjmCpVb9ktjSt4urSpePddGGE498nEQrQ4Gf5Fx3wtqSLq8Ce5Bjw3nh4uqbT7hX7wV9BkhRJuaZijH9q",
  "key2": "2XFDjWS4CeVdDHkKSjSxkT9ty91z6EaVgZSTAuwqm7GNegiQTWgYWcaEQqdNuWa5ZDqj91UMQ6hy9LKrhDuqZGVv",
  "key3": "2535wyy934dHQiw7ShfxyD3Z9cm9erPE9fjVsgkj8iXvMscnNjrUrSf6RbP6QdhSrbagJF6exydCWh1RoC1uLqto",
  "key4": "29YwUJT1RY9iqmbZ1B3SKG1i91G69KvQSftCUfVmyG2LyQ5rQcsqsHt3CJZUwbAccHwSCtHYAxYdHPXT1PEvrThm",
  "key5": "Z8Pf3ECXfyJL7BrR9g6xvUhmieQAnFrSN3AbLX7FvM8irNLoEvmmHiByWs5UBMQC9KrdtdfdKcusCQE9yNAYEVG",
  "key6": "3RQVpHUsd9F5rQSVE9gHQepQSxBRkTG65PVCwAeMDWZr64BvFySmMMoaeBUE6Z1YaTvW2W9Jo171kSSTujGEC8A4",
  "key7": "5XDuEqDAwE55qhH68MdhEgo5cupfvoVwapP3XFX3X2n71iNZyAv8PMUXmxhKuPZodpKpNuWEGQXsHjdQCXZ2Gv5x",
  "key8": "62UqKu9KtTLzUNdhijeUVjcbBbCgFMYtYDsYdW7S9ZjdDMTUiERmtDBvHM2GsQn1dNUTMTTJUgpw9BH54op48XT1",
  "key9": "33Hgg2AdL8C9D6Ac5WAQJux81xvCEBVezAWbYemeB4ahBBH7DLmENusQKmnpPsppxakojZpmFU3DQbvFoXr23K5",
  "key10": "2HA7MxDpN2tQfcNu1NzhC2eXTcs46Ji9Zvjoz3FYAHHVqskkQhuwQzYc4NV1Tpd1ro9roQ7n5cNrVyySiNQV4pR6",
  "key11": "JwfLi4vspm44Hmt9WNZYzUGmUf3QECmRyCDfDRLTq3yzr2tsrTPzmCc4itxwRg9RairAU9E5WAV7W8h3UWew5bp",
  "key12": "5T4qFV8hXjHTdgo32iFPKX4n6bQwHScvDARSZgEtJbFDBtSc2biJhnhEW56mYWjsRTmCQnbkoELY8ftjivyUwQAX",
  "key13": "svb3adi7p83sfjbkSPz7W7zfgcw4ASCdEJ4rq4vwkP1uFuYNnMeEJCmiCqTbzJpveLrjPCPnauTZmF3vLQV22PR",
  "key14": "qEqsohfDBtG8rNE4iDJoTPp9yK5XWaW8W3rgrvRzSBsWwLgS6sZYzTTj2D1YarZXKk6BiGQH4dpsspsNSBHrWBY",
  "key15": "5YY1rezmKx7BJuHsmL2SApdt3GBk14xBWTmjXpporC6LBd4BwF7k9HtHQS52ZrvWsFNUe63ffeWpZHNYQZa9rJM1",
  "key16": "2WfXoXhGNrQL5ebfaXQQqExmR8pohhC2Fuc55Ri442cc7bEse5Sg2f8m3hy1PYZkyoH9mazsoDdWAqQZ8atvqESJ",
  "key17": "51UfHbdLXJ9p1E8eQm3DSTsE6ZS2X4rZMt31u2mxbxFctrqQvqENF2bis1ZYmoAbLpd7MN4xQUMgorR5me72JjMy",
  "key18": "23YFbV9yFew5EHYTjpGwCtdFxAXCJzsCzZkCYBQJuzPus3299Gi8XWGQjsefo46Tmv18Tzj3rnuywEXbTEu7Huhm",
  "key19": "45KxQCG8jNbBJ8EZGu29TK2c1Cvv7ixBzVZLZP4T49QNKaNG8MwmKcTg5ui1rx13CJJgGhoYcXWdcz1NTcjdgrPQ",
  "key20": "3wUx7oBrMrvzG8NtNgdQa2JZZGuTcbpDkopdsRi1QyUeWM1x3WcfQgHjSmcmyFjMdKBX5BpRyjJ3zCFqC3skdk6K",
  "key21": "454unqQ5soEirbWDsexL6j8ozLUKGxBGJJt3Yuw7CRSLrRci7bSaHNtGfUNGYjXgsXwATRJaMW1o36fYV3N8BPsF",
  "key22": "3gc4JZujc4DNQHFp9VE6QrenHWHN1UNyqBgdfZqhqMDhEt58XqVVaDt82EVasCarczBHzZFreg9koxaZFkPEG62D",
  "key23": "j839wYCgajT8npG8yqBjbYJNKViKtY9ShXsk2oGGNLvh8HVubvwCbQhJPc3PBXPxk9iis1fKa6Erq9K6uuBp8f2",
  "key24": "cDEdxZwtLiaJJmqpCX6c3xrmYAu4oravsTfHtqKYnJZTMgJYRQ8xHi7m4i5LgoHJ2aqPtNejCLQGeMwJ4W26RFJ",
  "key25": "3d1utitz5PUvonemWvvk1xG57XgcndJCWCHzDiHYXrW2M47NtogyZYufyxYxkEEPSGdXC8nKcra9CzpY6nofvVwc",
  "key26": "2HAhBJoZYQ4it3PL4ze3mQ8n5MQicefEJVYLKRHk2SiQMtjd1f8vyzQuAeLWW5B3KSAbVfZCTL1mKsK3uzPMK3HF",
  "key27": "5n7SpKiZteLCHTTRU2howQeRynsLto9WiHdQWQsrc73T5zSegzdmNPrfB4AvhgPz7RtEfj5nRHW6AuQr3eH79Srg"
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
