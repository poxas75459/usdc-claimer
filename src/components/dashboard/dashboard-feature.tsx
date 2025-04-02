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
    "5XK1aoyN4JeZFxsc1RNFZhGxDVPnRvv8wx6932t1pbGDXJCb4CwrscH7KMDUkJ8DFbmFPQ1sEuHtfaUZNRT5ZmoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exkjymswoz92vqPhUpeiYVNQHcTtJH3UPCJ9ZZLcDsdhBXjyb6yZobuFi4LfwnM5Jk8783bv8Z1xAbfPdq2Jvcv",
  "key1": "VLTayAd7wSH5zhGpLtU7mkJEXbnDbw8cMnd2EsboQHAsbFhpXizdjJ87s4RRQsZ3LvEmXjryday1zUSS8qEui9q",
  "key2": "4UaUZ1GwjnRDZ4mvK7rb6M3DGfixiGLLj5owpapuxeN9F5BwiPrjoM4hEYiQQTAHzN9VK85xTc8acvQgAqDkhXVK",
  "key3": "2PG1F2bboCmr53exodo9zR5pzoBCnzyuunoyFiMJMduSuxU5QAZkbGJE7nznxc6voNohWKbLzbkuPTHUyJVNRLLM",
  "key4": "2hK67bDd4Qg8W2ahb6t2TJR78dT2nsQxyW7rEnigkuGU376bd7oLQjVgNPxa8pKVq2GafCA6eJeTG6LCQ7d1BzmB",
  "key5": "2Ktz69SR4qCusW62SztcLFRWkpSvQdWGNChU4T78mx9t3XFBvWF17kgAt5SmrVtuCHhxfNwCAcfh5UF74EidQBTx",
  "key6": "7NMk3BGAzGTZ31zu6RNGpvqynANV97ee7p84HikyCHeMpJ28cXqc4cR8HrxrPt4fQ6K2ftXDYAAzuKhbMxh26HU",
  "key7": "3EJXAByEaBELaUQmZM8gdTLQJTsHdp2zZFZQnM2ibGNLpVDZCP7sFY7xT4NZfiXeS53P9UEUr3oQdbH7QhVRqPT7",
  "key8": "4RL2xzwZphYJAZprzprn7pz2s24Y24nWs9YxF9i28XsrqTPcJt68RPcUxQQAFsyhj6zCRJ3VoKCx5TAP4fgsJn3w",
  "key9": "328ZBrYaCeHq5Rw6YetADjz6RJzc4nSd748AuPU48N3seJpoqbtS6Zk7xvjyuXGQsdda5dfzjb2qSqYbeFy1P1Qf",
  "key10": "5zc8TZby7EGu3oMiXQASs4p94EMMCjuaEHJJ9g1sRU997fVCCQZiWHcfRBUkZxUKDLYztApbC1fqJeiqReBKtjTW",
  "key11": "2s7weRsxPupprwNaSscDCLXFkYAaLuV3PCiU8rTSuwXLdmVs7xCspW4faZQ2yxFqqwbCTefcHb5GV9GBXp6XgghE",
  "key12": "5xLPpfZX2ZawWoPVcDnXb7CjmQe83UzZ8rLU8uwnseJE5hNXWgfRv1j4L7nsNYsUj8EiSGAzTjHRgSWnDRBVrKK2",
  "key13": "3sZr225BMiAmpKNrTyby77p51LWCftbvnFwJAWqyKYrs8RLJcjV4jT5KJiXevhDdkQNq15GHNYsNmmSp5CZAJfcV",
  "key14": "3wAyKscBJbwDcA7DHW8UdXrGrVoKm27wEqgejgpYNoYA1WPjXuQWgMjcEgXuj8MPEThoJXcbgVw8u2abQ2t8swWD",
  "key15": "N3da8NZjAdTfaeDVJvS1YNXBsHMLTduBP8NEb6eWnmSR3s7ydRtEqXLGuTzmkEJ95URaeN3eKRYq65cBRCmgwUX",
  "key16": "hB382p8bt8bQYRjX3rCGtGVL8YZm279JZxNGiv7fh9UuxrSJCTd98dKxhEwP7JPo3JXFt98CYhof3bi9LjUsBjZ",
  "key17": "5FfauiQnUJvSPgdS1NjGeN6tAP9qr3RmAo4s6i2YVUqracrtDTUV15c47A64VYqt5eEbqUFjPwSHuyBpYbknBsmk",
  "key18": "2KPy2exr36gPstYKu585cxDRbzrWXh1XTywDkzMtQZhnDFRft4B8TJcxuuRpi9w2eQfKrtuMggxW6GUbiVJfDPYG",
  "key19": "5sLiXkY7UWnoiUe2ZXL7pvhB1ysgjKLJwsmkkVC61qcuPJyK751JotkeK7PSxr4cB3BPA6LQAaoKDsDF9z7nriG6",
  "key20": "NUNaGmXozyUZBd21eWcCzU7Q9nV5E62WUERopanj5QtTXSWw4GY6B11KUQuoTeZ6pwm4uw1SAmBHgnEUw3XmUbE",
  "key21": "5snTaEvGCyJXEX4Av2cwUCDtDTKzQEbFYjfjtftoT37WPCQEtS5HPwyECxrUQVvMeCQzM5dZQgd6gBHNnbd3Bz4b",
  "key22": "2T7Fm69BaA8vPGgt7tpsbDZE3jyCgNvRUL1bbVF5GEofe2kk1bApDY2FttC4uaWmJ2i7St5ujxAFmTXugDZNow2Y",
  "key23": "674KBoADtmxkdJzsHcJ1RL7B7Rv64mbCPzytCbYu7zkFkGujzocnKVnMNDA86yAGyqbNJr9vs9PBGifZRDvuZmpZ",
  "key24": "4eLy4zMJCTtKV54TfrJZdZoHjouACtFPWre36k9LNsGWHCjfy5N2bvRgyhXNbpUzHrPuDKopPTq8HdbME8koTd5X",
  "key25": "4VBbHtQTGucATqpum2xPQqDRxGiszYbTNezAgDg7KDVUHU31iBmReyvF5Hz1edgQN3SekigPBYSknxecWA8cEQ8k",
  "key26": "4yLPXGXx6uwyJ2cNyjZU3gvCX6kcJXhYaBUKRFsWjB8EH8cNawq2WwKsBm25ydemKyGDiosNenCKSFNSvx4q1Vgw",
  "key27": "XodfxtzVTYtb7tPfseRPopSTHsUMDCndzGNh77ZfYRRMQLqcJxHVPNFTxZ11z5MrGYKfoJib7onrbfXxueHDvAN"
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
