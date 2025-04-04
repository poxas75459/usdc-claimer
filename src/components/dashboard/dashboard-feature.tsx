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
    "2KtiiATgBwbh9LduNWueJ7T7TDAp3K2J7xRXQDz78audkCr9cijPXmX7oJyjXEfawEYBr5McrWAr27Rdf6NZySh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQkRcvLjmgM6Lx1x6366PoPVF3AXZ32rZBkkkn9S47675KEpMdvwfCNkpiqeM6P2SJtM2u2GFqxdTM5Dx3dWoJd",
  "key1": "3s8mhkfCNDTteBXyT3wZ5VF2v5ytaPHNJy37j8tpZcWMCQHZ2wkZtus9M5AUKdmwiUheuD8nj8rfVKAfDCpEjnms",
  "key2": "3szy2tKq661vhqiZXebpJ1vsqnShH2XdqA1aueGzhzJViV4FXegHXsBtjsvYc11kHKGSwvoRWWehRWNNqZVhuHqJ",
  "key3": "4EeLzxv3h3xwf1ezripgY7i1Jr4nbQ3WBqFADhH1ZXNDbJPdMrqLx2Jh7VZvG7VGgLAgJ6c57Ytspw6ewN5KFwfB",
  "key4": "5LUUtfyT7dJTbH3tythv7bEMnQPKyhhAPw8ovoaULAn3JVcubBVgZ4WVKDVx5TosfkLLd6tjxmCoJUq9TMT8gLWk",
  "key5": "4sFVY6UWVyWsq1F5FnJXZGCWZtw2xRQx8yS1G6hW7pG8A2yjTn6L4bXoSW4d8uLK7YVwCK93dhim9HMhdQPfd9aA",
  "key6": "Q1sn4oxjieM9P8RdewrQXkDDrFPgBfdt7M6G8HTCAwCKJCmCSyVUeKQYydSx6t3MvXQa7DDPYwToRPZZvcwhCwy",
  "key7": "2gCQeR54vX6CiyAnRYpSewqx3PeJU94Gyttz4dYx3j82Fe2af4QFBEKfLr4vP8oJPn3s5PbdWaHem4PLUaBktYJH",
  "key8": "4uSbiAEQTVsGXHgNDSAL7Mes88HynBfkjqmnHrxSMWVEv8rSKTBGwoq67F6gzQCwteL6V8tEwTrG17jDC6WujAMN",
  "key9": "4H3U465ueLvF68vJRhP8SpT6QbHLysWGSXqKqLaJHVUeFDdwCdkfuYWaHk52fmw7QH2tEb3FUN5yqXmQPN74inFz",
  "key10": "3vj9tW2ChGK5LiFV4WwGcMzquSAVuaSaJ65ReJX44spyKq2oYfu1StrX2wigRHRFtgwwFkRvciMtYAsdakvGqhp9",
  "key11": "4WPpjrRDMVkyp3EKCt8AiLN8kAttnzmy49hDAYLK4uBnCFr825sVi4hjdiTjJvWhgQt5dhVEuNRfDEENyzDh3Mm2",
  "key12": "5vePnmjoHgcdP3JpfTBzRdqdWrzoU8bTU6xo38zfna6bTXXVh1pvrSNghhgC2b6jJk6y83dPoFugdnWWwwFaBfin",
  "key13": "35MN31L2X9zz8yD654STrdudkZtiXsVuS2Lt8nGuKLP2qzT7ogWAyXCu11py4GhEd4yTq5LVPmuUFtbgkuR2UrjD",
  "key14": "3JY5RRhoDzrmnRdT4SwfAUbKhoPBP6fWUZ7pyth2GZvr91VUQJek6SFvHb8qLaJq3n2V23y2etnX5juX8inncVes",
  "key15": "23SX2tmpochnahXK4nHgiLNkbq8K3Fe77k1Gqf1QWHxcDJvy6cvbWxFcDmUXbZoRnvdRJU9JhbBFfZ16CamY9ZqW",
  "key16": "55jEMEtGRnY3FxpbEvXQY1nBM18KJbjPPvBZysbqbuUvywcXnRkB49t2eN8rE3tkGXfQQiS6SBUA65K7xB6TVBxi",
  "key17": "2zXqfBLGvTWkAnAaCXdJcLeqpepqZsTgvBjmArR8eULD6NiBmEtQGZnsafmgQz9fxC1Hcjd1Rhssr4qyfexgkRg3",
  "key18": "4SAed5B4KCqEg4Q7dUuMgFjk6GfAupMuiu3B7LEaxNahqsqrmhUaFe6PGfz5kaGYRvsArZBVQ4wtL9hKkf5NtGQZ",
  "key19": "3FEwM7k1dWV7AZGfEjuHRpvRMwZTHyoYKq4E9q69MQtxKEw6USKdUTdDtrUvwqcV5HGtmwg5G9NqVaJ9ttvDqHUU",
  "key20": "48jSTSipgiKmwWnhJDT3KdUWfABG4iNpJcqfhhejxcd3FQsQNCRG1h7XU7ZW82Tgm5XWRdmqWx3bWMPZYXhrwzMi",
  "key21": "2TAm4NXyczzNRVmEN1p5D79414kYx9m5whpcLg5rQx8cL5vRKRzCKJ7dEHGjwHdrhpatQVN6fL2weMAxCxdfVWxj",
  "key22": "497RAsKeqBh1hsK6F7c7wyxvXmdm3Egeb5yFCdByCr3ymqk8sqzxyZGQrgMxrdjF9tE1qAdG8FerG6dz4k3LP4TW",
  "key23": "2B7szYhFJWTdEFgHAmEcaEnucSaUKbwUpcpiNfio2Zq8kkGbgNyzYzUXPdcNk1J2E6B8w72tKKSbnUJPu9GG1zw8",
  "key24": "5wH6GBYnJQv66RjQpTSZZdf2MCrMi9CZaRevj7ja8mEXG22WmjeCabPpHpftWunCqhCDCyZ3h1uJNB9c8xm3V3St",
  "key25": "uzWxJgX2t9pJUznnJgZDweeM6kkBmGy4UVaGTkt6YCYspM3Gi2oALCaqfPnSuS4yLVXqMHzC9zGNE4ghS4siJfh",
  "key26": "4WofRquGMX4pKZD5CUBZJ6qUqG9ZqnGSw6AddKUwjByjrPSxHF74rPzPnkg1kKgrRN61B5Dfn7iPCgMLNXYPkuoM",
  "key27": "4wAdg3xCD4gRHuuabuYBTg3Lx45fHag3mSuaNdF5Qqh3YM9LH2tPDv1axESF319VhhbKZCWbmxreZBNuUmdKPkxD"
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
