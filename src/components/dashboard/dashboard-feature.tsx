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
    "5EQSJRN5mXo2rYcEXFXzYQqCSU3dRD1TyV6vX7iHnmFdByfU6bJHqhLLm9oZJUTdZ696uNRQzEfTUBYpefc152zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rSozK64P65B5DYaEV5dRehHKidDRNENckbtA8u8PGcHtuifFDj5tY3Cwut9iikUMr3BuvPvqUa3GKjMUg7wFv5",
  "key1": "zoT5RTJY4YQByMxGewcqxACQD3LUgU6NjuYaAVuFJDrs8bPwSAU6Z7BgNmHScNccyaSiQdrxCm859T29U1dJaX8",
  "key2": "3sy8Ub5aysxdep8SMybhbzBM1zQU57a31pJreS2C26cxSZMX9dtH7yhfzLz1k8pBBnZ6ZfKdLHVaBL641zQiWRcw",
  "key3": "4M5B2iWnm7YKpa5UokqA73yYwUSSs9Fnw1Ye6hYiZDCYFvnxmwASfHfjd2uQgXHHcHe8YyF7PyjVnMHZpXW7kxnT",
  "key4": "4cAyJixEvVyP4Mig9pKt3mRSFRaAfzp3w2Jvyuoa4UTkbYHaogC2MRkUxhHa7nM7VTdBq53JXv49G3U66NjUZmh",
  "key5": "5L4vovmTC4nEkCCSzV7u1ccsfhj7nEfc7T7aqXPuJLWCa7UxuWXyCwbAQBEiNWJBTxwbBFrCxJGieBeCrofnMhye",
  "key6": "4KrddMWzdJFKzbME67YWa19GQJKeHyEneFLsSNoW6oVZ7mPd4bquukaYWVQy7Lo28Zfnnp5uKGT1DZmrCfP8ursd",
  "key7": "KDfhLwBrQ4mx3zZsY2Fs11EzY32oL58dcd1RWp6jMLMV7bAx5DP3ZEAkYipbaKs2sxTndWNAbMGGnmwnUhWQzFw",
  "key8": "2eaQgXXPguUixz8NKZqWAUFe69FWcWo2XQ62zdvDqbT4zANiRNakRmq7ktU2axC9WrNQeaNf9b366bdGE5na4LHY",
  "key9": "xP7bP3DgJyhfmADwrgCbGz2T1FvgwUCzQxjrykDaRvpcxjDFwz3DdDpcHThqd3hKkUzB46KNfoZ37AYXq2P2e7y",
  "key10": "5ew9hyGB5SyMXaNR3JAp3ZpWyTwjU8aTLfc8QVau2QFrn8ZfFxckVh8JBqrS8W9ebHLC3JF1iwkXi1ZkEz88ftSu",
  "key11": "4UAGVA8SDXyLnnfeFQ3m3JZwXfLkQkZJtP15DHvKySpei8Z1KXRaNJ93pw4Ua1UVZTiAeyLq8EVXUPAaWXp8afa4",
  "key12": "3Dd9fVHYyFgzHb13JmNi5uYkzPfWQDTzFu5KSfcYD2gZScPoxZwEBEpiK8yRqiZZnPwCb7AamK5W6SSvMMfKLhQA",
  "key13": "67f8kwQDbQW3xZWdAhATQPW91ba3fYSrQdiBRDVkp8XJXMtYw9vPPzm2Kx8hTcihFxet7iFQ5hwi6ecw9QEUNhSp",
  "key14": "3ika1f9NgZKetf1ovMMKU8zTiVUCoAJLSVHY9H8i6KxytVCV7WaJuV8u4Lv5NxQiitdiB8zn5a4YezDouhXNR6cg",
  "key15": "2d4zLF4HxoUC6ZtxDvCPbe2chfPqzx9D6RkQFv8nbp3tURnVavJUdVDvQuGiv244aqG5Qhr56EW1PT712Zu2bcNV",
  "key16": "iuaDxqYPTNfwCraeu7Df2Ufzn1gfAKErKtHJQHYnEa2Hu4VDeodHrKqFZ6ay5xWag1UR6TWVfAgcJFZzrf6tdgA",
  "key17": "5iLSL31pfQmXH5aei4uKFR8UM8AqfuVjgBrLcxahVfVyDfujewiNfY357BGVoYHJykQTSYxGubXcXBL67xGJrf4H",
  "key18": "2JeRsNmMCxjnJPe4VkWouW3QraAUZXauicC9Xaz25R4yFdVReLSLkjKByqMtn5Z1r8GPoMEmjs6fxbdep4ofPJBt",
  "key19": "51sNhM3j28GqRdkTtWBU35ZBB8QRQFuaGFH6MGbAKP6okcw9qrr8oFJBrmvHnhS1HbLH6eWoxCE7g2iUCQSeE8Gg",
  "key20": "2BbiiSzgfzs579ALEqLxbZ9ik1eyBNEi4dfmUKrSqtRhUxMg4Nx8CGbSaYAkLN5saEN6pK6fpXY3jg32Gp67m3eU",
  "key21": "G62MMJPsoPKhfWbwxgQNyCx9K3CBYNZfUSJQ7v58KqCEvSU1zSikJaD2qHYdW3PJGicKRS14AL2XgeVvNLcpC3R",
  "key22": "23BnNofj9dgUpLKZWuBfo15Usm758THoYm2K1xrSBJMJLn5cpEkJT7pWvQrr7LmF4CpUXMyE1UcTWq5oLbWKUhwT",
  "key23": "DZS9UEtabRqP4b6Y51eGo8EFyAZTgwBpGp4t26qQ38fcsrSAqzjHSmYScUTyx6Fy4izptyhz9ksDAtnAnF9V2aW",
  "key24": "5sS9mzQk3QF4L7M51Rfspr64824QmLYUbbvXR7paxqVDZmqYukLyFGHVagTNS8PPPp4KqiLwJjh5qReaukjqMc2C",
  "key25": "2QcqdQZN3Gj3KVnHyybC9Z2bfvLZAQuXU1uFrqqduk1orxPkM5bxNxc3ucT9ri4EpuiHQNdYEAJ3fLxgmd4YRNyF",
  "key26": "5TkxKfGZyYbk7FgdMpU5DeyGEHHH64DUFxWbyDqBPA22tj1tSYUeDKxTRUcKYzUushHEx5rNYHF6H2Tvu3RQ1e42",
  "key27": "3Q8rCPULoA2yTepJhMYdXa2gsQSbyc4TTxpqAqCYmWmthXCPtpg4YkHmppp542YC6uHARHhrrpnvkpfyGTXjeAsd",
  "key28": "Yh23bjKtHk8XQESFvrnzpiahV5RzHageKzAVBw3jUQDuDcRWA3koZwEa3AiG9K4Q4hYDdDa3BYe98Knq7xNcfke",
  "key29": "5XE6qJUo8EWAHBNCSwGspPVXwCYmJAPKkCi4gak9Ax3BzFzSrdxpvCL2cKYKn4Zd4tRs2Gk7zx4yxzXjdu36PPtR",
  "key30": "4uZRoT67JCWH2G8XsayUhhYSyuprQsn6MadBd4NiR1BcyjP7nk9i96kU7oZotJib1PB5dNhs6Zy4QrWtQ563LhiN",
  "key31": "3MaufrFhiJ9rkkgBbeXStwwr12dJiZS1NNXZKZrLhsaVNe5hU1frya5AhDrEX7fcKjWDWi2bXM8Jwufb71G2tB6U",
  "key32": "1QsLt4JSPuTEM4xMYxv6LsTiBLmrCKVr99ufoMgkypksTXmy55MJvsbHmFitd7xCwbH3cpKhz7rmK6ApqrY7ufH",
  "key33": "44K96qrD7oRjvUgVx4DoQADebzsE3pnzMn3984TQh4pQjxpj1ufbuNFvHeiAWG1ArzTtkfKEtReAwjeFiUMBEDsQ"
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
