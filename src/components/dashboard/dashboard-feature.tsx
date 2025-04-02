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
    "5mrsjt6J7AsNPxPSjUC8qcZwoZ657pF4JDBsiNdwtS3L8Z7d9NLB5M8nD59JRisD9RjzzzWwRRFwRwfsC9NeLCXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jZ5o1rNDQFnacuu33UWsD7yrhHtkTBAnLXrnMCMzVnSVZ9bmpUQt9botSfdn31Rvfk8KeevZQxKVLuZR9CX8Pwk",
  "key1": "65BeY6HSCPVPMPeWUojptMNYjjaCfiBzQpEoviFSvwjMHqY6KUnxex8pXcTSN113Cimruo7wCDYushiwa25w8soM",
  "key2": "64AaMLoPPzUzjqYLBnn21zjhpRGbiw6zRvz1CE9RDBwWTagPK846xTW41Qo8cmGv2agDXFuUjW4GzkdZekizDqAW",
  "key3": "2cfmEyeUgdjmMZtrPHfPN8cJv6soJWKwfQXSxRhVpUqZF7eJsrVxfjM26nuzWzbHnSjowFw1m6ABBbfqH3Vuyf6i",
  "key4": "4iqPPCwb2fBr6LErVuMzrPCkVS1K86vfDnYAygRktvELMQjN2aPQpPpHkE1BPxFEdpv7G7NbAzUbBEgVr3Fq2kvt",
  "key5": "TnMHHbNBhoobR8aTdwB43JLq3fECFuapyTMBfM44hM6Bp4neTrgaVj9tYMuAsRQnuB8zwkTGoWZuHEaNE7LGEWg",
  "key6": "4qfa88t1MyepEZthJsKMr3dZNiridov5Wm6XbBj6chiZ2XkiH88as4pZS8v58K9YKxC2BvSpxFcEuqzNSxC55geg",
  "key7": "4UPj46MpntsqCQe2QGfeSfRsWvYpxUZ7GMCHQTuBXnGqDSXy1tFkeDBeDKXeuoZ51oCtFx6bZauySveWePqcSZ52",
  "key8": "4xCVUXAwAWv1ZBeaCot9suRauo8BoHtNVuoV4W7QzbkZWHWWhbMaknWnXjpR19sNaoeT6x6TcDz8osEZSjYCcjmG",
  "key9": "3FWYC2taJwgWGSavCp9CcwyGh1HMiGBDd9VbMxmuF5UL8NEJrf46Jn6Hu4TTgwJ2yqj7Aws5jP1FP9D6az7Mu3yt",
  "key10": "3pf6VpN9UrUBGLU3u9XsL8oqtwhN3Etx2c6zJRKBzZ26B5CnVTfsRTdhprFq4azsxdmBLreGTM4WQk47SVhZcaVJ",
  "key11": "58jdjd7eUB1nkiDyuxZu9jC6ENGm1NSpyrBnK3zSeQr8174A8UvEd26vFDTiqeaDrAD1ZnkFX5Co39ELco1e6w4w",
  "key12": "5APxdw5wbyqitAeqnKGeVn4PBPwbJQwKem7fnNNetYmyZBcuAkADjFkm7M7xRFBbxV5zdxFv7ChCFvp8TY82vCWH",
  "key13": "2YkbWLAyaAc2xEvYuUyMoYaRprGwzrwF7hD6FBbHdXy2mHkMe3JrP6yZ8u57C49iBdGaidV1NfwCV7Lw3Qv9X9hK",
  "key14": "21TiF2Uo1fwwgGYYyh4JTi1mqU4KEYQapHHjeQA8JXSucb9pFyv3e6iS1d8SUuWXvryYw9u75FfiFN1isP6eupNb",
  "key15": "4hsd747PXVEqSwcV9yRADA3LdGdxd7N6NZFKQrwuKk6gtY4z6ZUg8i3G1xiLkThxvtur9ZemTUfEFHnNAiAdrNU5",
  "key16": "XAUdcxrsSWNDHNdztrsoZjm9jYNXw3qQyjgVThrVECUWXdjx1ZvCe42y3mPbejUahZv6f8dcr4MLm29xNdm6kz3",
  "key17": "38No4rM3epYT9ZBW7pcSdo452k2Srbiq7QtCMrKeSs2PPBBL9vYQaHbTR5WZBsbCEY51wEYHhHunTKmioJMNvXQv",
  "key18": "5j1vY5V6XXKWP1KC7xMLuJXstS3Tyzrbkp3hM8ZbL1K67Ykh9TLpt4YXRtomHw3xJEzscDM83BX337L8QX5VU7Jo",
  "key19": "WmN1C4wsoQkASTHyv9GNpPAsSMW7y3dMoJkWuZNua8LRnq5dvBY1yCByRs4eeqHVZw2igyCPZ2VCjUGBpaV3xjh",
  "key20": "DbUnSqsxmpWkrALBFXe4L5TQvUNwNNzwoDqkTz1YF6ppvG8Da1Atr23PhhzYJHdD4h4qCxQ5Q4SVi2tZ8wNQhpQ",
  "key21": "3LRs1T2gjUBeqCcKhCt9FGFKJwEoFq5QtRuiZ9d9FstmP8kZ1pgF5c5A9TPPxs1zzH6ptfhn5RTNjAPrScJZ35fc",
  "key22": "2QFLKoZA8CKk8obZ3ynGo9AB7XsTsrmUvQXTtWEC5GSRcXF71z4dNnpbf22tAaQ7G74PeDw32haniiDT4X4sjc3R",
  "key23": "3ToNddPrYJCFmhLC2yoY9QE6HmqXU1yd3PWcvAPxivjfrCUzokfpaNi52x8vD8hpTFBxbZWvknQfYXJBcLxZ8NUb",
  "key24": "nhkbojP6DkT5hPqJMwu7bRstdqft618wDyuDyiuuVjE257TTeQXdHy9XLbvkQmCoVN4AahnjL1azSjtJB6sioUu",
  "key25": "3yGrZTQ6dFyNCweN162WaxyEGqFs2dMWVwJYXboNjNZVNm1CcdhbK6yZ1MQXWEci8XuU3dF9vFxhnRvVZpgc2nAc",
  "key26": "4Y4Wikg7RmETf7scWtHUMqYXhFWssxR5TmicMGRVXTQp3rqx6tAAW4SXPs8fHinSnkHpS6cyUfY3CYUFZaCF3d3K",
  "key27": "5pyALG6pBK1For1esvnz5dWWpa9xnuMyfy8H3mYUntTXkvMnTD428TCZAQ7sFHUWQapjiTwuMCZ4aUENERYUByos",
  "key28": "2Wre8EzysNkagAzucKJBkMXmmhUnrLu9jG6QmDQG6cBK7r4w9LYAuRhY44YDFHXbJ8eVWBzY6jjfT4SzyfvQjnVr",
  "key29": "3UnkfnXznhKW66TnoM172b6uKXFHura2a1sQgS8DtkEGfXv4QLN8bWtNiP35ESk51mQ6nJ4UcxRAKVnwscrsiJ1V",
  "key30": "5Ly1a86cc8zL5CHGzsqm5q4zt3xJXqEgzS3NwuvZMcjJu4aKuV91qWpGsWPSkUWn75DYN4oRbL9KjFrk1o3nHxCr"
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
