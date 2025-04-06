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
    "2LkBtJxZEzrNaJkYjsj6EvnZ7SrBDLqxS31k74EfiGLK5JsGCNhfYZukgwtMCcJYumoVDvMeSJMUdJgepY2Bw5AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGj23HnsWqoxmRGfjUNXf6D1zEsfKzKHf6DKyWQcUFJLjvLqfBoHZZ3YmoeWEC4k1o3ieBK444je24was5FG8RK",
  "key1": "5QHEaD53jzwY12a8xm9BBrj34zB3QqjniVVNj7WqWGnXiV51AVBUH4nFADvC1WspnSdtY3jbP38g84FS8Z7XHohz",
  "key2": "2E1UTLakzwfE7ixoeqVNDSrzppMkRd8dbaPaMAn6fbC26Nh9A7KAN5RgBSyLvbgP6HPhoiPCbTzQb1aiv5CswvTe",
  "key3": "3c1TwPXJAdN9KVpZhBiBKsK7yaLj66Y2CzyiQZuAWk6SpHJi467EjYhch4bn1KkSb8L3ryfD6B67Q3aXjxpoiMdH",
  "key4": "4viuenAeprA9ojAcZNiYC6GsQGndrU6spuegNtdoLKAA9VQKRpU9QpjHaS3nATPn3uKqR6aATxGJ7fXtbHHY88gm",
  "key5": "bLbQQrV8mgnwgf3EtFBVephTCbn5sLGZAdVShMQAGudcZ2hDNN1VCrkvHBNix7qiWTkeN5Ms5QbDxHxmv3RPmBF",
  "key6": "25RZrXSgCigNBjbRPJkYfDoaNHUkWV9giSKbzQUMKnPmSErtKgKzaE9LvnYXTKqEygiebuJMrL6jUDt8S6cBdQSm",
  "key7": "3LXCZ7wTaW55qA6Zd4JGGVvNshuQUqU2boxUfWb1UV4hkGDWtLdTZQFHb1fSukbVCZed8LfAVPSe4h5HNku4MtBE",
  "key8": "57aTqRnSQXho4i4rngrggmAEUSKYEWxP6bG6vqyazgdbxY1NVJwcPWfPavKW4RKTBtBoiugkVhxysdDzzHyyxzYR",
  "key9": "2VWGwr6GPixiisHa9htsQ5vwgHt1Xq6EpLkynByZcqhzDKvjgqRadACXEyw1HUJQ65EPjs3oeA7Uf4pyjeoFa2Mk",
  "key10": "5SCNiqGSL3cwdYYhpFr77FYKnYQoER35AHZv7vryUHoHJeYN9ujAfWq87Z44WYd9JEcC5BCsmUoS3rz8LBqq5E6W",
  "key11": "aD7RhjBvE8raPjiRmuEuSSkjf62DURRxDx6tiY2EXY2JjnrPqLjSuPhcq4kmpYhFVHPBPGetGqjzv1Tt9WmBQ53",
  "key12": "NBece65Em82H8kfQT1fcjDrE8UYRopMxdPtfh5qVRSbK6EC3y5gWRdYn8QKbPJ4CgJxzq6xRQENo3JYQH5d4vYo",
  "key13": "55YVUXAmmGfGv4vwz6NuhHWaxTdKST2JwiTTAYf4vTvkVojXrBKUnmAvRrsvX6CsDKXHucmCM7KW8xLkNNVn62Wd",
  "key14": "goQUaZZACLTKxdJFzRE5mR8DFr97QUC6182kZauWDdxePJ3CX4G6AJNoAY6GYoVF1Mqzi5hkmipRFfrnfeqGP1L",
  "key15": "5JZWAyzwc3tEYWyLGEFqJ1Ma5PUeyRPEfLZa2XWqafiMFXdCCGE76W2MDVEH43V6GKod23YjDj4qNN5EXWGCh5XC",
  "key16": "zvSXh56RioCEbYDGMYuwRvdwic8v5Rxmvup1FaYBycge9pBVQ3jRPzB3Lx1nmYgEZvN3EMKEpLTL8kkppu6rbH5",
  "key17": "4pXiZe9QpAxe953eyjc3ogYW99rUVVxjXkHWVVL2d7Xudk8bQyubP3B42UKda3vxHCFW5o3stgwU8N6PMEqTTYXF",
  "key18": "eYqZdMKeXcGJL27dFakhFPxiUzvi2ZdfbJ1akE8GePupmSfY93ctyPJGwENco7GiMc5VZDw3VPBLPZgG7auyoXV",
  "key19": "3s4JUNezZELYjTiGAwPDghF9LwPvK97VMXQjQcGiWb3xbwh9cqiETXUg1p6zZNnVH4we31VUqwC5MSUVmbVapi6L",
  "key20": "5E73XNJpMeEgrjtqo1kBw3qBdZHAdwg1z5V52Eut6ydi8cDgQiVFabVtsvQrkoHBPR6cqBdv7bXZKNsAr4fNofuK",
  "key21": "39zUhezkCVGzSWiXcACxzFjQfkfwRPNjuxMCSJRkSYqJTLegLW5DURKZzVLLqSTJ4jFPfTLjS6rsjaLj2opzWpVk",
  "key22": "RR5CCXytdUsvwgPKB7eqQfyGv9JcQq7eprrtfnsTaVBfsP3FZ6FFWXKGjxLQrYLgBPqsYKoPVSJJX9RPKYiXfet",
  "key23": "5inokDMX7S3Azo56N4MJHXYDR51chDKoVTaXYdFsRgCQYfwWkAfKGVzTBKaHsNTe3x5wsEHqC7NJk5JK3b57pRha",
  "key24": "2SZhYE3TMUVG5321hBMNVGqUB4DUbDs3wX5RNAYD3pk2RyNcjwrQFPHUXHX8GxQiiyPGwBNCejA1K8YQA4CSP24c",
  "key25": "tR9dFpYBoNyMJhw9SFjRBZW6JtEaBtg5nhX9YgUXwBznsR9EEJYsgNnM524ZgxzfyBgiAx1EEQD73SfekG6c6ei",
  "key26": "5kwWPYZcBSQJfSwcPFXYZuBY6DT4zqim5hZ3mrfReDHbPawdisvQNK3gmQ6gzmSxMm58hUy4T553j9QFXZzPgfAA",
  "key27": "3HTiRLSxVoHR5tsbjUDd8CGAZGN8cnqJdgf9eMVhgdQnYuBEuX8qyZQKN5pcew6tP2D94kG8RsJ23Ra9AzQvWoYV",
  "key28": "CDiky2jtCusEa3CM8omp515rNjDc6dwEm6jXFs2Zn9X21t3euSH69mxozh1QCiAHdUXBadnrVVqNvmPVzj4kjRJ",
  "key29": "5D6be499PbeHioj35rpwan7mDJ8iHZXj2LkKy4mgVargqHpBY3JzXmyVfNUAAaqgAjDMkdxkaTBhnrEFKMYW636p",
  "key30": "2Fk9e6Kv5wCVZP4ZF3q7SQefTy94qpd7wxycNPepgT7ihcv5Z7EJbKCBM61JgwSuNnX1W8rsQgcEs58s4JzaQVsX",
  "key31": "3hRtWiqm8998miAgeFCNJJe4Er5UCUy6i8MnbNve3onDTMpH8ttXAAbDchbEMQCfRWZJ4T7fSkVrBFb58Ux7rV2X",
  "key32": "5SMsCf71KC7cNM9y2wokHJZsRoDbzpnDSzV4Hcy1nyAPqQFMefefzYnhMjLg5sysshPCjGbzmVRiS7ecZBSEKbuT",
  "key33": "rvSwaWus15c8SMjPypnPWgAKDvNGi8Uogc8pzByyaEYEju5LgcqjLKPbhRzrDvg8FiYMqfrgwRz9ydAr3wcfMp9",
  "key34": "xZU4ZXpewpHkD53HVzd1XojM7ZDxZ64RqcZ6X81kh1KWycXn2mYnnDGsWuduTsJUGe7rD9ShRbTD1rBtQuiELNt"
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
