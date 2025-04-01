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
    "3tMNgj8LPHeHVtVxSg5JfkJf3zfduzRcDgU2HeX5ApYF1oQJ4wDQ2nbrWuU7z7HyNCp2SYS4d1szbxmXQTyXMTov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhAXYk7QzSVzcEevi7f7DmJnAQLR7yMKXucCc784n4DATKcHGZxZ87JjX1p2cner9MomoqiL4i4iGv7McnmTPh1",
  "key1": "3RVy9QvUqzGn4GnxEgpwiwxas6bK5Q1bWz5gfUtDWnsPcAiYiz46KhvYb7rX1ykW3UtQDWXQvkNVXuGuPHwn2hoo",
  "key2": "5JkW4V7R8b9hTnkd7QRU6LcXsWa4jii4E5srki2BQEdB7KNkwWA3aBvg7eZEhnBYTUvKxc2rnu8Se3XqyoRCPpQB",
  "key3": "41jM8d7queipQhMYTHVLLEjYMyX6nNk3M1L5cspRbqLyBBg427aUACrDEkEeVDjiiHj1hvVGQDkQB4WKiLy44kpa",
  "key4": "3urdFYYwvMAhF9WXcLuAZ188gmXKA7RcKhGLwno6ySLDn81jjuGPVvyZ1XhAzHaaHAKkQa2dQqgFG9jrxgkATf4S",
  "key5": "2N4z3nri2nGRvuVBEujzusD7XvM4VLXrYNzrWHHTmmfY7cnpzjA2CymYoGF3KkWNN1J9AmvT4sdXxKDRsrke6X5e",
  "key6": "43GeNNLxW3keznJFCZ2G2VhcR9Bo9pystYSg5Eqo2gPLP6PZz3DCFii2QhCR461c7mmRfM4iuv63UFnx5s9i5LXw",
  "key7": "4WfB7XYKMwQkJCHxXkr7DbTgzWHZX9VXSeKmjjwrWsggc4KuWS1uBG1rcSZuVLpQAPeemdHnhUVRSoiEh3AwZ5yZ",
  "key8": "SVakLZBmFTNYc4tiA449pYXf4HYAnyU4oAvgrGrbhaz2gNecM4rwUxnhPocEey6BoXcHsZ9eXWjTi5keVaMLE2i",
  "key9": "3aT2mSeWAiJXqV7XXQGGdBdS9MquHmzMv6YRfQ4pjetJ4yGgSaLxYhPEvixwiuH4G4pdzvjsnKiwXSsa5QhjcgyJ",
  "key10": "266KLvE6MFcu1AWeYZP46JFpV6a3XXfoH9imNx4q7E1v1Mi1BBn59EvwQDGzWEfNon7XMuarW3iixurWXCp6y8Yq",
  "key11": "2LVn2T2A34dCZET6cnrYmkfcoztDdiFcYiGZ2yMcy75u2TBZkdGnJ1CdTXvebtbyf3KmQvNAjQZ4SMRZPnCPUXW3",
  "key12": "3fzcMqfsa5qffhbvZgP6ifxo2SrYTki15rAQm4DohWeXz86oLZdDa7nBazCWxJaGZqR9wsYnzN6ECfbuymqEzdb8",
  "key13": "mcjNyvN1eSoPqDFCMjjqKa4LuitwK1bxy5Xo4wWaoGRtoQgY8todjWkZ8XjRfCde1T5QNzG9sR3pNdVrP2SfVLr",
  "key14": "rH5PNXQVYKnGn98N5j9GEHkUBN3KxQrknfHZRwxLRtM3JRULHcnZJzdvYQi4vn881o8z7dEhVh5QHNQJFuy1Pcv",
  "key15": "3RF6NkchxZXw2h281ufSpk1XuZARHjxtUMJsCAvSk259TJ4T6SGXGY2UETnadCVcVUWQzYbEoHXVpX9vuqvryTA2",
  "key16": "5jBGVD6U6xHezFWxdk6RkQExYFKypFyoACtk8sxD9f2JvdfBRPD6RVf2QfbtoWr3mL1NwXBnyTEVLDnyT825F4Hi",
  "key17": "5Vbv5Zs7j5UABxeJP5Qutc2J8n53DdR8r4xwxJJeyTJoCys6L2JoxCg5KUNbMUx1C5G81SouXSGiYUi6dYMEP9Hf",
  "key18": "3QkFE47ykQJvhaAAZxQHdUDBEHLLRbD9BQKT86MejvdETFCNd2xNQYzQUfWgH8bcvvJwdF67zRwaQz6EzaaqD9A6",
  "key19": "4PxoSdecN51nUzTprJ9536ys5T6HM5p6k7pzGQHeGLuUFr4n8V3G2GeTTFrgvYvP93jJ3X6A3Ksx7Su9eGo5AjPU",
  "key20": "XSSthFV2zdFFu5hTCsk9c8CVBLCkKLLPicqveve1nVWhi2hvKVW4yBBmbJ21SoeQkE9yrQyPBL4WEaD5ohP352o",
  "key21": "2veoZxZcLVf4sYt4BPDnoETYZWcjn4Th6V9F9crGHPNE7rR8J7WPHVfRnvaaAwDzoc6UuzRvPmhrCS4yZ747j3w6",
  "key22": "4DfjXcHC1YbjMADXJC4cU6BhRjUyYJbCqAKfWaoHiT1jQuCps9NT86EAjUKRoBtMCfCUyPaEBi5wxzkag5FLrUNV",
  "key23": "wk7es3W8i7Urrxp9yUX2jnbTeBCAPtZX9NZ3HWD4UTSHZLpw3BFKVhRtv2S1u3EeSyrWXYD2yQtAEFFNATtg4Wd",
  "key24": "36dDxjSPzSDLpn1fhM1BStA562RFvdqgPR1HhmcNADFNb7PmWVHvxYi87nr82DGxytgzpQdo6zSD1nUBDYFc6Jkb",
  "key25": "4y7xNGudikcGLbBiDbNay1bRfyLfCBB8zSaTzd2BaYgYy2uASaY3U2SpFMRvH6175kELh5SCg7Q9qQX2jXB1RQmh",
  "key26": "2F3h2jejknzQLqq8TArshNMZVYPTdN17v9eAFQ8JzTUgMhPi8NwDWwsNbrKVq74umJfCek8W1cPvtAc6DUjE9aKg",
  "key27": "5yEgicxJwgscuwK9Bki9cGfW9CMmV3VCUkpDRRCs1tMfxThSpzVVCSS9HyDwVswJPx6MNuL6ceBppcSJRq8Z4ag9",
  "key28": "VZizgLjJ3D6eqh1jEksrQQPZg6BwP6NTB4RpXLCtPVyA12AvbBL1pn6ztgKxwjAynjkjKMSc39cdFRVd2cFTfnd",
  "key29": "49kZiGUoxHUa3HStJisD1nhVdj8mAmtZkzMnuEN8hLPwE3CyyavYBdZZ5QnRepSVURc9tKzhQwQweQEzZ8MzynLP",
  "key30": "5yvu3xQGUZr4q7nDzAeD5MeELK4zvB2ZaqRPQExk3CofpU8c8S9abd4uBwgeGoMVDuGVeQpZbGMFoAwrtNguPM2b",
  "key31": "2meYkWm6YgZ2aQbMKRtLddhzoKvJ4u9Ci1VbwWeF3Rtf4w61B8oKbqfu9DjLW7qEbkM79JkDuNHwa17XTfD1neP",
  "key32": "4U5NvwQ9Ak5iv2acompZiwZf7pzNKFhx6mTBjYGMqvmHQLxF5LV9wnfKf4GR2r2c4hv8A3jLz5fTsqb4AbvhVCD1",
  "key33": "3Ws22HZ29dv2QTzgkAYHabTa8Fe3y4p99m8m174XMFBbY6bdXUEP1gsvuZQiedUzqjVM2pd8eBCvidyUfChNCQYJ"
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
