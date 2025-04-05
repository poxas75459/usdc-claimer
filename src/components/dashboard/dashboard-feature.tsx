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
    "3tcxUEUgKzVu54ijdV2tu2ZQL5k2ErJQUBhwUEDkcsUZ4ZV8JWcLqwEoXypiZgL6F1VZ2Nnry4LkBpfzpJQN5rdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NKcyu6JS2EgjFWEsyvaiaHTV1V3CrBsUWYHZSKuPN31ebimtCSjMWBMUzA5dnz78y6BfgZSSH8HdKNU8NZAP2P",
  "key1": "JgQ99utMSNFvXxRNPP6NJcAWj3w3pV7E5y7fR72g7rpxYLQUzMfeznS5SyseT1DbiFJsU8ki6zTa1T7GimQ7EbP",
  "key2": "5g3jnexTqvqqxb3zujNYrumFHyep6W4EyGSp4bADAzRxDnzysYFuaD6vh1JL3UESRDLsYMsCh7VcfoBQfYUBWEig",
  "key3": "5QxNPQ57dmXT3CquYpjzR8hyDkULrnN8yiXuY4X1JTj8Hu4rdSMu6FcUh2yLAUNCAhmMNRffCspMUuyjuGjjhRMZ",
  "key4": "2d53S5Jp77tb3XYtR4qSuMvq7rE3PbXT1WZ63B2GbbsjWfXUoUhKqMQwM5Qfgi4RM6xwZphmNnPFAefTATBurNKC",
  "key5": "22usUwejbovy1QXfZ8cC9LjCH12UTjaJSSxvNu4ebrYmGYHAkX1SawruTVDPxywJxACF3XTTuu3YLzYzZg9ifqxP",
  "key6": "5ExJzEqFEdqjm6BCvHhefcGFskPrJSJbREhSDpSe1TvyRkP6WwB9emfUY91vQfBoVqbWAugnExUk2bnkTrowKm6g",
  "key7": "2Ft5iiKD9Xx4cvEAmf4mdnhoLqp5hD585VRCiNjEm98Yxn7TSTt1r6vMbKw8uGbAn26asvAqAHWenkEqjfdvrP7u",
  "key8": "3YpHeyLTxHxw6qZ1AgJyYYoJ1L1Xn7pewCDc9yb71Sq1f6q3CAxyCbBrbHWV57C5XYYJenWxF789JhfVXG7WZxzi",
  "key9": "3pKeKb2tayNGGLtaCd9dNxD7gGY9mHpTbZeph4UvtMpM4nP9C2pyJa5HieUZT3c3LojGHnThoa3FURiY5TEnPUmx",
  "key10": "2bTct1Fm3wzEMvzgynBCvSzKfe9t6mk6RrvP69bUHhjXTRJYunNdS82pgk5GgnLh9LirNkTrFPKz5oSvh351BLSm",
  "key11": "2RyYJg1ibmDahto15GMSYBfd8YDpum72rQHBeeCkYnQvdLGGcUahbRwATb7nJ5RKTGEqcnn1qGtqM9p1aPU7hCzv",
  "key12": "2yUw3NgcvMkt7xFiG22rNxChfRWmUTMoXjuhXakzwXvYCZJZGVzXVJ37xQwbmEYqTp79NT1vtwdi7bRfgy2Tz5wp",
  "key13": "34BkTA5gWzwt1991KSVc7ZizMnaxLdgT8HVgruHqQ1k8mbbptDpMZ5hT9JCdKVki2XBWtjYKsZ2vyXNCV6wWVoEa",
  "key14": "5VvKWxPhtz3h1N8CTm4VxEod9mVaYKW2wvkAVvXdjqPjK4NCWF2eKcmJJZUQNBEMeBPirZrdhH3bXRKF7Pt9ScPW",
  "key15": "idWnG19Vm89pbWEd2vXMZZH7xVMigMbAKYNXGGYSHR3x8xcv2KvL6DEeufhJQTxLkscLwiTz8ANwXETHDwiezha",
  "key16": "629MtrCZ3pXh5ovybB6byMvu1MzjoinX4votoUapGhtMY4Z5DjG43zvdggrUamiU3Mt6VTgTXtdo6poYhAXnNAGZ",
  "key17": "5B8wMgF1MqKYEdsrCopcRD9bZDKQcWT35oVy2qP2aiArLsBJCEV7H9hYYse3bXAu2CgSBJfSSLcHx9D5YBi6P7kE",
  "key18": "2qJj6hzytecyrmUBKxj41dcqReZ3nxhxkqqCNMKV2XPJAHiESf5QDxiN4DYByuKygLtmQFneCr6nAqCL42ktQzXW",
  "key19": "4Z9rAb1112v3tVpkNvnHzsiVtyn74VfgpK8H7ZEMaauL7vdBL6c7BsWYSMtQruJTZXbKAyJySv1PEWCnpvKWs6fJ",
  "key20": "GKPZXbGygBq3UABzsizPcMsTxEU2LLsVCQHVT1jHbuDU11S6PDQ7uTTMncGzE9RGsD3XqUwpnsfx3aeeB3f71uF",
  "key21": "4DYjJm6NK9CTLgaAzoy3RrcwUaqTwz4hVvHPGXpPKJ9BzGGyMShPa4rUPRudcbtbHvJJUSyA29YDk5vrtA5wruVv",
  "key22": "55ySQncAk8aqj6Hpjktenw7UvLo5FuxTyAf2kaza1sWrKpoCVRrT3NPy7i2JujCEqTNvYumMv9rpWWwdxX9HUdzy",
  "key23": "6FMxQUpCEHHKWX8QKgTRW4WJ7TTjFdaEX4v8QCZb7qnhJJkz56UzVRYeMuD38hhQN3QwsYWBTGeUJfZPh9oY7yU",
  "key24": "41ie2aymmYeKJ3fWi3BLjB6e9fXGdHxDQkJXqrirpWB5cFGhnVSJ5jyiDpzVxqt27v9BP1vVurbbPZgG9YfNZMuR",
  "key25": "66ecdKmFjPKZDkxCZtsGXsvcrG62LdmbrQpgMsfpB14SdGH97r77kbgfWVxsC29PGNhr1m6p5KUEZHJzSzheuJm1",
  "key26": "5dcyPtdLsRVxPum8Dab9FibYPMLeMr1rrfE5okHD5GB1BooKgebqznQYSL7GLe4gM6PbJT9D1Q2jkfv5TQLNAx2r",
  "key27": "DGzbjPEqwdpetQpJdU6YdYc3LF63HA9NerEBZkQAc6E8xrtm6NfW755GxnjGufumEATNFuSY9RnnJcZaLY6M8vP",
  "key28": "sMrDik3EdpzvUGVwmfpWd86GdtusAXG8gJ5YHpZfcSC6FzyQ9xynmqLPoacqtnKHLbDdRjcjpRQ6GbBMv8XKSgm",
  "key29": "5kCZd2mFgSmzsb79sANW3bihwo82XJtpX7mHBwV2ewMPJhaTbALxdpiuMe3DehrJdWYx1XUd1TjS8ZrafD5nRAsL",
  "key30": "3TCeimP7ES433uNuv4c4V2tddRQkpH38tzAP16s5jRB7htoiLu7HRpbRMcNXHPH66jKYm2jYEAjDK9t8iaxL7gHX",
  "key31": "gvPDihna345MkjkGh6kBthy7EYdBJhVqzTTqpRAHjdBFQU1iJSU2oED7eqP9Ps7Q5DrcHWMPCSLFu6NYgSyGsWK",
  "key32": "2sFwNL3nPaz5qXixp88mRJe7SNcv7UjKX4w3XQkmEfrkVqEEAkZWGoBjMvcLFcXH8y3ks3Y3rQdfVqW2YvUQhFJY",
  "key33": "41JRzDnno8enUf8byjxzMbLkkr4UrFG3XfZT6T2gR41AoSUe6b9oVUGp2CU7RCULwMb1wY4gzBKKig9FgsQJW8JA",
  "key34": "3hqSbsVFdDk1MrHchUtkJ8n5LFPdqmkJsbD7jvFhrkMYAZHXdfDw24mnGgrpY4VCtdLEvF3QeAyJwTr8pYEP98vT",
  "key35": "4K9hcJ2hB7Yf6Eq1gGeTpJXsSQZ2tLbVuUqSMVgD23V6jdPp6Tmv9rCRmHXgUbiQEwLA6ecEjdBJkEEEjaWw8FQr",
  "key36": "5hzN7zoaEnQbwfRfogeJPgyP3j9hWv6ZNh5mYkhHfxfWe2G18FbNMim7L5a1Zqxeh1wUvy47cD6ajUdCNFz8yNQj",
  "key37": "57bkqCp2FPiNqh6Cq7eWMx6f4EjG8ykpevzQm6YRdCmWx6U2qdJpZgd3inuaWvSZVH7XrCFkzUGT5hw2ieFWhRbB",
  "key38": "5iAsyDaxigPNnC9BijP84ySb1N2PVU1JaWZU6z4HEdJh7jh5mQ9ASjuKkuf8xrcAhFxZjmF7dYqoq8aWJEgDsXTQ",
  "key39": "MtKXRNqoyZ8HG4GFeXvhCyr2vjoSkJUUSrwwP2vn3fi4aeWhMnwBoumptgqxUPtSR45EuTvQ6XeKsqMQHKbH7UV",
  "key40": "4hsp5iqCCyrYTyYd38erEp1Z3rJjYqDCo2aK6vn9FGRg9nJMLErSSWmivbx2FBq9vub6sd19hQ9JJeNALhezSGA2",
  "key41": "398XfFc85axt2W3xDWmCadhjWhJy3GDHQGSLsYzwEimSnxfG2apysfhjEJWCMV8DmwPN6PdWpuUfrJx262hxEuhb"
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
