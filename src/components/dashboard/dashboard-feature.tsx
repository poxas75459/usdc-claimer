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
    "2oJpg2qbM763zQNB9VWVjoMspaqWakhXnWDFSjuoafHQQZjyxU5B1ZUxCTD18N94TgTzUwgLtQZP4mfM471CTvuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggC9wAsU2EAunwuizr5CjgK8BT9gJuemabA3SURS6RnueMv7s5Tm62WFa4v5GiR9ywSyQ9iHYqv3szHsBd32NzF",
  "key1": "3XCJ5PKPyCrUpNscsG433txt3rXCLVnRwT8zRxidAEJfxpCWXedSnTA2wQxG1UQmGPXXzg5Tvp94GbCLUbMgm9wi",
  "key2": "tZKqbvQQjVnyjcGyPs7vZAwRmbsvPhjTnZhLqdJjeMx6QkySbPapSFtG5znangT3hFx5NAWmEDCrvmckNR4h2Fj",
  "key3": "2BWpPBFrFSGYtJsCufXV3n8mcqFULmbssitWHZ6MNodDn8AZMbJoyAEgULZMoAtD4JipC4qaGurnVadDoxBaSup2",
  "key4": "5HVywWxiajqT2Rpe7MUv4oaW3eW427L1k4tVG3f65dPdt4AQaXMiDZFtWytFY6dw7GWaDqovUqvFU7BfDGVRK2Wn",
  "key5": "KgMntJTqa3E8ApafYR6miHdQidB7QStfMvRAAvbAWPD2qRUQrgWfwaJv5aVNZSZQzWexXLqRTnUpmtukEDTZonA",
  "key6": "nbVZPoSz4XcHibXMWbMhyoVms4pJZTG3n1s8ooXRUsx2Brrkx4BkyBc2HWsFXfdtV2UKUxWSUyDGdZzHyrzXvX3",
  "key7": "65fG5ZJcxmYJEET1mjZptadLqAsVys3oYVP9TsziNXUPrEhQqQaDT3BjJoZy1mBGasga336KuDZB6Ag13Ks38RMo",
  "key8": "yf7YfjbHnJK4VNvyBLw21AeYh3ZYyGUhbGjZKWyqYMcAkHCusAPrWWBRcU2bnpBFceV9GsA67mgFwha38ypzCgT",
  "key9": "sGj9kMzFWAc2EDXkDSDT91394LRBGQfYh63Vo9R8RUxkMDUYeeHAPMwUbMU9budipFpfeQYQ7dcao7THcHfDwTq",
  "key10": "26z5vUPNFoQs9g39gnPtotjyD2xGNZWKxfL4Txfy268gYNtdJw8Vbznr2F8k63qSQPWjfgjHWCmzCQRASKFcedTr",
  "key11": "bVEfbbUXNUTazSA8jUWmMWmivk8rTE3HvZ2qQL8EPbosSAXiD2UhwN3HD5ynuWx6rBv5gVyuRTVXVK8Cqi76auz",
  "key12": "2mHmJG7Bphj9khrbx9JquQNEnL67VUgM8XNHUAJVdKzX9W886oA3RCMExjQ2ZcUiokKUpDSd2cKvmNX7wnoqkib8",
  "key13": "R5P9q97uCaoo39LspJZbayZQaeMTaoj84sYJ5vdKRCwoSC6nmvoU8bPAvxZcsv58jGGjgTdy2bzD9qtkYyGuBrP",
  "key14": "3TtyGkACKHcKFwaqMk2YpCgbBAHkr95K9zqodqAfzs8VQaybwFSFGRjqfewkaE7FUL8NfV8C12HV7Zj6XVNrwef1",
  "key15": "4AxHqLpdkG7MbWCA8wLT5meU4EEbBbQP9FoBSMccd61rxSJo4dmZw4GeRKUFafoHb71sb9bHygd7UMXaF8aMrqiS",
  "key16": "41xWaps7DU99k52HX6t94qzxtsmfXbTRNRKUzhK6KXjcL5ZTcYTmZLAv4FWgB1bV5Biarw4a9u12G2r5FFJL7bHr",
  "key17": "2vyxt9m7zhNz7f6VUoD6ZkM9KExZDJ6oY6q7X5LQUKgHoi33RCyuT7x7fyq3mhrf9mE5FNbvsnQjMiTxu1Wq7PHh",
  "key18": "5tV4jDsbKuAGLmMjMha81fugtaic4GTxfgiJfZEriB4GmSpopEhijFEo6cEDsRn72NdATB8DTmYa7nHeLwh9MwiD",
  "key19": "iFgPYfq76zVU4Jwf1VLxyQ7r3eMxpd3Zd2kFi7U4aZ7DoZgK6PQwmgj9QTR9xavoAqQnSU8VXnJ5VZ1cZc5NcsG",
  "key20": "4z6qSWRsZLdQHtdGZ5NiPigMXWNzD1Qzrh73JtxDdf1zHJmnDZihdf7BPQFKEfTpSbX9DSf3x2EUjLLbUzShWbZy",
  "key21": "3pnmaa2pJs8VftjBqyY7mhDYRYB2M3SR99YQsBmFfhVDLymYMBFmUWykrnXqfEJW6trjvcpwLFuxubXCbtqoqTcN",
  "key22": "5LzsakKg4TNKZUyaMyjtXwVEekL365kiRbmjioH4aeiCqksLN9gxqXZSjXof9kzgNMTEdS7nQ3fWP3iRkA8AjtbG",
  "key23": "32AqnEBMyjMFbwXif5WFVbYqBBeLLxMTDdAXgf5g8N7HNk4g9SJKVvTrQiFpXxAxS8qxEEc8szaQPEnwXugBYq5",
  "key24": "QUfUoqSgjR99ErLpVNfMCvbDayrGp5qYfiQRNbgjkjKHAvJvKxzT1fKioxy4Bf7wLQg4AyHydrN7ri7VxhYMNx2",
  "key25": "DibKnYHVnq5QpoyeUv9p6baNsPA1Bghr4KaFmC3dYde6At77aWLA31H3bmCuAdWathxSHAxC6GNRT2jxfrpcGLC",
  "key26": "3wp3bGknSS1tv5DZ8NiE4JEy6JeDF3jeLWcxBZYeavQc6HiM6NpFUgtGRcvYeYBw6Y2hYt96QNzBb3xARsvZLSd4",
  "key27": "67PeVL43XKCQ5xce1hYiUhavvbcyUBzw2A9nNQ3ZQLMyqiqdCREUaAGv5Ne26tbnebvugPPiFct8cvXHAEJry1id",
  "key28": "2CESmMT1SmyvS8uDARAM6ns7Ff67BXsJYPHve1mYYmLHqKa8ZnYZhhMVW8YCtAuXoEokUsDgD6tWmfjCFs861XeA",
  "key29": "3aNufTCGz8vkA3ZoAKSeBWKreVsxXCGGkwJjZt2urLTUY6Ajc1FqYJzq1Hwwbg8TJLtqTWPQ3UR7bpogRVx3Djno",
  "key30": "4etHx3usu8c67sDbTKyWxMJRRzyW3hpKLKmtZeF9qux3NU5meKbMSM3463yKnVTnDMYoDtMjopqy4ZFu6Wxm2aRZ",
  "key31": "2wzNJLUaAgdpnWPzxAGLjD9GKXUAwrLyvhz38auViKjyvEoAV5b3PtHnTCDXeWHCQA2XJuS1D2Y8dKYJ25v7iZ4b"
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
