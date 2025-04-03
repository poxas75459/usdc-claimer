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
    "2ZaVxXNqHQQRJ3dn7iozSWyoxVkKeeDXSKQPcobXD1raXjjxUWA1oNMK3HcSKSVQcuL9J6sSb2RJypNyJjCcpv8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HfiZeNBrvdraJ7Sjjen5HKrDmhgJy1WTLBD3EEtjgmkCHTXWddX6XqMz83Wjgva3mdXXBxyrmrau2ZqqeBpAmku",
  "key1": "39dnNt5pSkycTXft6tTdGNpoUWhT6LQjr9RhQzn6Ao9Z2ggAUbWTC4eTeqoUuUf1vAWyKkYfqtvCUxs8E7k4AhU8",
  "key2": "45BYCVdAwVPYWKDpfAmjaKdxdvzjVMQWaeamqXg8t38Cy7Y2Gy5GXeECZbKV8rCM6rurku1ueknYQn6NDBB3dzGK",
  "key3": "3duVdm445s5THtEZ2BW8HmLB2XyrvbEUJkc9pejQFHLijsNvW7QRb8NKN7XPpGcNs11L9GDxj7hFJCTtua3pMj3X",
  "key4": "5N2AmdNrHwmZq5c4hE6megE1FaZcwDVGPoeMKWz4FYVHAXRfyHE38ejbuAz7XD6yZaGRa5qX9s6u64Cc3v6kiB7q",
  "key5": "2bV7TQafByJ1ZqkTYHDfqTN5Vd1EJ4rUSytxHbTbSyHxJtPmnvoERTQRKTvgiTnZyaLW8rPZ4bCyGYdQiUeb8AdF",
  "key6": "2uKGumuKpR1MxL3ByppsraisqkJQ4G792aQyu2QhnLfYFHBo81Rxu8YJoBF5ALs7aGYqfLn64CuVHZMVrj2LSm6B",
  "key7": "5Aafzqx6Z6exm3BWkjQDDkSUAxx1wbJTV2A3zRriPdNKmZT19yVpxuZutbCLW47AvJsqZzwSvt4G74R2Do2iS2pA",
  "key8": "3LM7JX9mgUpatuusbVPMWMhDPJr7W5U22P6EGuecbjujfuD1Ku2sfMmJkHkjz3Aw4UFdzhHXnySHyKVnzn3EcK7X",
  "key9": "3GhrThnhCbTvnioRFM6tPJUMYkmAgYLknSNRNatCE6vZ5KhtssAPU1Xd9X4pPbirh11Mwu3x9XmmV9Megi24cexA",
  "key10": "5yfogQ4CF6N4NQKp6jVRqSj7NwahsqYiHEQSTM4yWsu8WPRtGf8z6jDDUVsfQxjwpoTWyprZ8UM5m2Jpc84r9KqP",
  "key11": "4iTb3kfQwidZmAVzvRVh3si14p81Y8ji78N3zBk46gXw3iPznSbQbdUnBWoqoNy5nKy23zWL8nMHGmSe42dAm5uA",
  "key12": "5cuGwujCVRPrjacL7bko5E5aiUiY8yXgCHn8ELBQXGPteSb3yJ4EwdcwhBmdzAxsHwZm9pN9FsJTwQvxYjAkq2Le",
  "key13": "5uuyZ7XPimTU2H1Q8swb9gUqH5DHod6G5iJxTdPG58LDyHBGZTRpusw2pqyRV1zb6QQWBuyKCT3bH6WcqRVuAaY5",
  "key14": "3TWUhGBY3Cpo3Ur9b5KuYSafbfNyRa8LcHPGp4mXXkUqRxfQEcHPdk67orkN6UJMoYMBVxEPHrdsdZE217H6MX2b",
  "key15": "BQU3wHhMp6DRuY3wAhmF6q1a8k6QRFLduZaeo3aYAVgYBAEfF7qTudezh2BpZrPLNehV1Lx8KYMW7EvTnpYCurp",
  "key16": "9XXTnhzjRXGPnspLQpbPssFoEhm69WHDRYnSViXcpWw2pvjQXe75U62XfnsVzAZ6Tzx3xeRfrCEtpcd3Cru7skH",
  "key17": "2NcbLWjDqmh5dGpCzBugBtiu8EcCPezbtGLEsFSy1xQ5nesz4axukfs2dWp5bz9YTmC53MQoXNGqT86QPRXBEdP9",
  "key18": "3vs9Tv17Rvsx3LTLmdD8HHogv79CvG9EXRp8ms2uBPPixk7v1ipJYAZBeBum5gDhohTJkDjj2yosoVyyiqdMZwmx",
  "key19": "wJvehhzxgLUgNWbJERHKCpiQxVwYcYWUK3MBye5Ry72AVdWUK7WbkhihN9ABXhpWSLTZRHm1zYkpUjuHArP4CZy",
  "key20": "37ZvKvdNkrNappch9eh8roCbt6NFBDg1KZeHpeyD5KZHnT6DCorzQ6vUejnNaKZxmmC2tVpGhaCpU9jPisbVwkxy",
  "key21": "22AVGVyWbi43cyKzQzUeTsN3qKUXfu2XEjeECzrU5Gdu3qu2izAdqgr1MaXo7GhKBtWRtXVXNkyDgKp28qNy18Lk",
  "key22": "5TbBkpupb3E2i6DRx4eh1A19YwLoAbf7DwZXS6gKikzj52rQSZ5pT1H88uzwFjHiyE6UDp57UaZRttAytGKRUfgJ",
  "key23": "4EP6Qj5YCbBPxf5c9gUa5r4trMAhP7nciBkmNaMU5F8C5fUnTYPiT2GG56z26B1zX1KJyBerU4mhq2ECryuRybSo",
  "key24": "3Go9MjJVtix2kF1L7SjaDMXUMBJZ9MT5n3uVkJS4gWHymkS3ADQXzkZXvmqZ4g1DRHcSvTn8MxWr3DahKWTpmqs",
  "key25": "odTy2oKGpw1uGYi5Yo3pw9CW9Lv5YfTpzg5ndQFedXNTUaeMxrusdQMp32GZqKHTZUriFKeu99KB2qYhNY5y8XP",
  "key26": "2z5gg6bfz7wt5WsGkbQvXMJ2CyF1LNqbL8BqvHh3RHyamFxzG8Va58kcM6CUnZ849MP7JZkZxzr4zPUUMtYa8hRE"
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
