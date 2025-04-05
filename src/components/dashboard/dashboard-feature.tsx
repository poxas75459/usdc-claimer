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
    "4QSbr9vbyfeLMm4wtxUEnPxzUyr3y8AbJkyWA3ibZNcz7Jsmwo4kK3WBNbFH7DNLoghjVtTyW4GYTmkE3tvvLHJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VmmRXfS8ByKcfaD59QdupU4QkknY47cqKHFFcifaxsZu2uYynZgpu8iALxSNnfz3yXrTT1xY4CCfWATm62c9dgs",
  "key1": "2eT7eYLs6UQQqpMKZfWm6bq9dVKidc7QGHev7bNUa15d1YSjoZ25SkucoNeWpDsoUuqCY9gU2trU2hudgQQ5FDE1",
  "key2": "uLV5765pwKHPTHhE4btt1i9UQQGf7DeTRqLx9FVq4NeBSxW9sE1ijrnbBzbqh9H6ohahSU5hBaAyVVs9NWQPWVY",
  "key3": "3pQw75H3oMNUgcKtAgs5UHxcvf1xbQkL4Yj7zZEZvFPorPFJ929cJJfGRYKfjFW1cvYbsSuwnc35PBT5TKUk4ZWZ",
  "key4": "dyHtf4A74bSn9t1Cpxz9HR2qpuXTatnDKk6iMgzwE3J42CwZR2RJLGfRLsvvzneipexeQd5mp4peFNXs8mdBD6p",
  "key5": "4js7zg4EMYj1wNDKuGPDmMEtTfNKth9vqJNGzBws8ivtQdBusVBW7bfBQCSYqX5GVSShXYDBDP8AFdj1Nsxgc8qB",
  "key6": "ETQddCRREHRHuHAiECs7ubMtU8TCkMYvx95DkAx1tnKxzzGBAysopcrhrzVmbWybTsVDEJyJR44CVJfMHw7iR6f",
  "key7": "8jtUF1nGkmR1W2GpAfZPEb8PXgrqL54F11gnNLg1vsjTz43F7YcCzsvH9GrD96cqkZnfEyS5RQwgfeQoXEkdbm2",
  "key8": "2VFmonNxN7HUt7LfJcfUWvDZEr9a7UsCSahTXKCWXjkxfsrwurGLjTyEicLVwUoffYPLHPRpFNvHqqZeoKznAFSd",
  "key9": "2jXAPrdtfpbmpJUxfp9yxfeqpddnVPQhY3N3SPskGauj38VboRvR4KAuPH7bdHNGJee9XepreEuPDJDjWdc64u8G",
  "key10": "dpX32QrkrkhdT2hNZVoSZDDu9WvkLc6zruoYm24fGrnRzpVS28N9tA7WYeTuSNQwDcuhx2zTVaZiN12R8HZFgYL",
  "key11": "3mVb3nnNc8Jk4H5rA2ixQzVSQdppu3QiJ6SG2QMkjDY2ubvcUism18NcKrhYquywdH79yWqJruLSexPnw6bp6Ca2",
  "key12": "2XY44ifTL9MedpKBttWvELe4WYWTgoFnaEiGdioNNxXsnvW3vrsHo1XSgXgoSVcwpS72Lmzg7hU5jLyRcdTTkhA3",
  "key13": "2EzbKobYfjnRKuVFGm76tRYgGTDj4wSBo5CKLokEAWx93L9zUPRjZDAy7GdCEUWb7sNydEmV5SfW9wEnvqjG8rHs",
  "key14": "j6RZ6GV9KZ6VQyndzjNK6R9CZrUDDPtD7udocR92oeNYHcW3WUPhj5s5BMhKJt5k9GHppuB3jRohfRYh8J9wh4B",
  "key15": "4Cf4PHcFo7mj6FBAQphqBcw9zkH95na3KZ2sFTH7r8UCRr8ZRLTtXC92brNA8ATCfh1eBEjK98NvSZnFB3iZKUnt",
  "key16": "4m49DeDC9TXLND8wvEUqqmvWTcWMTon6U9FQ7Yhaph2uas5vqbJeRY13w1DCzV1rcg3D5dmJb5eTSCakM8UAuVy8",
  "key17": "qa7pHzmLUX1mXhQLk8gavchbCDszYuuzc7mbouLJpntiYRGM4rDFhdvpHgYav49BUDUc9SGU3PmpjGdd5JjC8Gj",
  "key18": "55SnNvX2Hdf9CFWYFbKN6Y2zt2EtduKE294MmegBmQK78TrdmmwmZhPSK8Y5JwMWsadPcWk8FsoCQYTCUF9dowrt",
  "key19": "44QfvaxrvWyrcoimvH2pS4PMXq6LrCtqmwxHaTZvfnNjcAksXQbuwQyvg64FHjuVjvi9NnH87hyHWMh1tHtXkU3",
  "key20": "363CofZvw3R81RR6yNFrdquBfkYWG2MyjHc9kMDbJtCnznJFmnfMMUBd9yEkRRy79YkLaE1rAUTkTuG67ELk5Qed",
  "key21": "5BMMAsxXf3zvWvExcQ1rYiUYzWgLahsG51pgnWSfrf1KnW73Sh2oH2tEQFcoiBVJe3jZWzT6EDapNfFpu6yAR1gn",
  "key22": "5nqCD69HqBwVHVs9GHNxVMe4tvDje3pcfUWFpjUnUuQrgLySx4Pko3mXMzmciDCnXPBgVEdGEo94Mr36dLLtA2WL",
  "key23": "3nUSNj7B3kjZKrg3cwaAvBJsnVF8z14DGQxdRWroZmVpzFgTELA92BmatFdx5mMM5QxttyL1PBuaknVatZAtY3GA",
  "key24": "4DCm6n4sG6QknxAfnWC8wN1kBbk8asP1PBCEaqESTDzcB2X1vQYxgxfm2eaG5WKVCaiiT7jpz4TAvkPbF26gckRS",
  "key25": "4QLVCUsrDm5y1N5vpm941F1KarQjHakpC3eHxuRkv69KzmiDUJWofrDUCN5TcU7amLm84bzpFWHZhNqcNw7uLCku",
  "key26": "3PSoMdkz3hMrrP7F6UvVAroh7VaqUqLb5wKefn2WNL6x4DiNpcu8fE15ymuDwfoEx7vnr7a83NkNqe3nHLchCRCJ",
  "key27": "3LBmj85JYt5HaT5NWR7yYN3SUiATBgyrQf7AnE5m6tA23hZqDQfir69gezZAfKoHd4V8EeQjESJrzW3BpLrmHGyd",
  "key28": "pC2DEoPGH5GQCfyCLWdAw79AaQ8CKSDJdqkJ1EcUi5Gv3rsMduJbkQR5bUXnLTwtBQ4a4Pxv4vuPfxsZovYpMb9",
  "key29": "2AGzFF4MpM2MVZ5iXnrzySjbf8tdv7LCAwXzfnvFV2YUAcBMG22roNdcC6uTiGj4euyMKXwU6nzLjHKWZcKZfHpE",
  "key30": "ZpCUxb2JS4zUENruBXdrYP3n3naDkubvyKMk49pNTrf3LtQfKWu7oVqnm9vYq4QvJXfvJV29vcyiFT5C9Sn1jdR",
  "key31": "2fypTZBSwr5Dk4d3m3enQMiCT6qYnr8whCAs4qJVxTr2rkAaJUjzFFN3ntqaMu6Pa9okDAUTtBjV9QuexBCheN4a",
  "key32": "Q2zwPRpNWnHTVj3wps5kh2RtLLYGFBcbgpfYS9MM7FberJN3eAE8L1D6dNW3zn7Xcbf9VvJwi2vmAx7jMXSKM3p",
  "key33": "2mhrv5tHGCCAdQUetGwZBxB521jEb9nzuQzPRFsVwqHfEhbgzAQnjxuYXNHzQP5vFX5L7JC2PG4ra5D1U2QtxAVZ",
  "key34": "5fFK3P2Rymu1Waken7vw22SMfdjqfsY2YT1KNfgPWMyzt5MaJmQo3HHKDvaU7yMZF4Em8h3x8JWBsGDD5P9czT2o",
  "key35": "nJ7x9jrpK2yCg756cneQAxJJGYPxejJ3hm8vdzdzPWe9C5eaBBSLDKaRUrBL1iGBNMnKoBKYpQ3VzRSahVtfEuP",
  "key36": "4FXTJxtjRRwDGxH8taoM2oVK88TkHa23wsvf6X7BrjkJVfvaNMXzquMhk4QzYd8oLCRnunKfxWVBbxZMrvUKWkAx",
  "key37": "4FtFCzNMt7HiYe9VkfvLQgzR54DRsbpqQffMUhmqyVu2rLcSuZJYvJoLqDk6fDVzeo2a1qd31Jpq2toLAd5KtDvf",
  "key38": "3xU1nudggcvJDbUqjHAx4Dak6f55nkMekuaYMiUnynCRqbW3xrabUCwXUjyzkJUP7KnoTjyRSUKJn2icEFurGqox"
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
