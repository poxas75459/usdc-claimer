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
    "2oazZ3eXthp4a9RqAhdVF6SSWtfbprwCYZrjWCArtdmtVVdBU7zm5TY19Bi6dfAkKk8LMi9DFhguRcR48rhi9gsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xa7UYoHUQaXdMmMvLmC7wdgxLhNQcoZvKGJkf7DroPebVUbqxnF2efJPYhBcantDdGWLsPxDHKraoMLnRfHSv31",
  "key1": "56AX6fkUu3ArXouPvcJB1mcywsP5yiLKd1g1UjDgpsUZDybdyBX89sjUdYWC5tpCzdb8DrRox4FWbUNBhqfYd6gm",
  "key2": "UcdsD1GiLr4ZgZiiCUddDYkr5xXNQeRmgEcf54W1mLhJVfCHEXvA6Psrsn5NprqhjwY3BWxUUrA3TGw7SoEQ2Q4",
  "key3": "4pMszYv1KZrYJ4TewTuJpTd2SH4NX1DcD8jq9hzrYNAis9v4KnS3Ru5ifjAjZG8QEiBDdmCfi2uiBUDmRpuiDas8",
  "key4": "2LipahHRuyHQ9udga5WVWJKqAjscQePnrMEMZUAJmyYazH9HdkXcqrZYudpmmRo4sfYcmFJw6SzKm3H4ic1GFxJ8",
  "key5": "2kQVKAmqFXiM8ryYBN67osDMXokHhiVtY4MdizhBHZHp7B1wLa9mJNf2ztY1gythRK5Ai5CWijSbkZ47LDcW1mVm",
  "key6": "5caVScZFxSMQsAhMMcdaEBHh5nRrFeELnMtUKRVfddNrMmMk1bieN7FMvf3dmGqF7AEASKHBA2RoH35qkjjQyxX6",
  "key7": "4awGvwkF6kDE4KuMwhD95abzMU2TXvVzG3DSPt22tFGtQpmZ8hZh2uudGEBU1pCZ5NfcGAEFKYukjCqxTVx1MyyB",
  "key8": "3BwMwHjCPboBgYC4JhoyiXGLN88FLUX24hyFFV3jp1QHJg2CCShta2jeqkyeoCbuxWBGLBuMTfz4wwuDG9T4feBM",
  "key9": "hD9YQou41TWG25JN2h7gN3uNfUwziXiNxwSqE3LXBj9gUiXgvxWL9xXknzP1gA89Hnwkd8P9gNhTzMz488KbbVM",
  "key10": "2KUWTCywHAcpgQCcGSjcAuJ4y9osaaDsqvNCt6rTqh4MmCz8UAdpifw6qEp6TYrSDQQTUaeZpzeGoBjaU8RcaDL2",
  "key11": "fDkHgCkzRx5wubH4QxKtAjYPHztdNP5xPttu2tmUsQkQwRHJgLzUTWE34qFeMz1tASV2YfJxAq3wmLdvw4Chifd",
  "key12": "5TPqt8GUZzBL4GCcVDo9FvBtbf9GzJQTJarEGj2f1nQkkMa4NAZp7wXxF7Ny8qw4AcFfQs5LycW9kj4nnVbYKHiG",
  "key13": "4PhvDK6h5gk8JGVgusxYk3CujLjwMaib5iVA5mQv74KuAwnC5ZDaPweKf8pYhVN99vpse7g5Wp8xoFBMt5cyc1sj",
  "key14": "3BesBbUou8HxTFyaGSqreW9R23o7YZTCkLWmbigj4jJ6qV8yTJsf2vPe3LP82t7y8LqUwy4Ni35FwAuV7xnBd4Zc",
  "key15": "4KHUmMbMmKZiiNMMpqRk2w8zPF6JrNF7g1w9f5HU83Cxgxihgr1n72CakzjshS2raan8KE1ZAvd515UPWciWk1BU",
  "key16": "41xfU2VZhRreQHxD8Vo46YM7xrPSwhRV6FaryDLyKkbjMvG1MWRUDAD6SZk5BcNqJzigiuZhLp8gsHL4z5Xiyx8V",
  "key17": "4UZuDnN9JEdBN9usCNrPRyhMFUvqThAFGGzfWScU8Gnm9urnb57gtcyG6JjAtcqCHG9M5MueWrgP1xjeLpLjyQm1",
  "key18": "3ayNQW45GXMBoR9S6RyouiXH6XwyZ1fpunPEX9wNQbyyTqrzj2zJw5q2EG8AL79Y5Fz8HYkxp1mQMrBcoLfMGDoz",
  "key19": "3rBXviXqrMMMQWZuKAaSqo7uChNiS1bgsUdkAXAzZtyWqjjVLrU3qw1wLr5SfKfDiHFy36sDhhEBj7EB8brsL1zK",
  "key20": "pWTmXARGiByzJepWBKWiDsmKfqC3AZ1DzhjZpgdMWNiSAiKcY2jvwkGeprvcU9JvMbYJsGfX3XGVzLV2qieFn4M",
  "key21": "2fgYyNbhd6Vvqzn7or1khowbw3yXQy6BShU9nYnivai59rvHAomAPVG4Fudq9Kbkt8Z8a88gsQAJ3wqdbRKbsPgU",
  "key22": "49V1QkYMLMiraKnCcETcR2mtb1W63zGiJCsB2upHwqkDGUFvPUdgBqsTj8wSssRjqiA5Sfsgfn4BqKupkYtJwseB",
  "key23": "4n1g2DK4he4E7rPnreJrV9MW211KFwgN17J1GMdEZ2DJxgZvpAZUUC1ZRT9XpptVb8SDKbtkGqxtWaHBUDJhbWoU",
  "key24": "LMBoHLqtWLPai8mJjhsCGoKuQWneJM9JsunrYM8mLLGcddYbdc1Gnhb2YPbQnt7vJ6u2gMQGw9XfvKTmpQdf362",
  "key25": "2tGZcDs4njZzeivUtLoRzhw9Fb1LBGKgxp1xHEirQ6U8AjsMqWD5mxxw1CYm1TsaXBFW16JJVQypTEadYs3Hgwig",
  "key26": "MtqzCBfwem3TMynXzJK43Z7aFYNa3wFkqDqXfYqLU1MsA419WjD5HT7RKDwbuKT69gMmTyKXTvLRkYLhGmN1dNP",
  "key27": "5sBkyXvEBpVPVqQVbRyF7LDy9rAxvctStjmWd26LTaYTPBj6hx2FNneYhF4G1ozjGbTKqW8SMg97RtbMq8EbHZJK",
  "key28": "JktQwVzD5s6QWQ2a4dkBnBziHDyvbgQZDDrcy2GfSb7qCXji8R7HUtT1PhXpAqS8y4vVt22URyKUbtYnKfRvy9r",
  "key29": "uNz5WQdLZiiohi8E7Sqdvs97R5vURsmVxPVy8vSrLiC1qcaxjd2R3ZCn3FZ4jq7n6K7qhQeh4K1hmXPiYuYzXQJ",
  "key30": "54ZEzst3hJ8c3e3C43wEcVhKU8BtEK8SXyiADgaDE872nc2JnceFBYMkBcD6TAcXd6X5VxpzQ2a13vQWz57HLio3",
  "key31": "5GqkkroK5V3u4BERP6EERHtGdVp1KfR6C6uyYU32dK8avQxez917FknRy1ca3LpPLqmZUNFowKZ1ubTU6nDotuGD"
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
