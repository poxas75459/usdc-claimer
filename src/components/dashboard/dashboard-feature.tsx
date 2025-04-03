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
    "71tqT8YCyWo12BeMeQ1Acbtm46f5V4xv5KUcCxDykVoyT8Wz2f47Y47Y2PtuAGWw3NBcgZ27snWpr1eFPFwkBqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58iQ2i1Dwecd3jeLvvg1dYjGY87kwnjHNddf7ssAwfawJQDfFEHDydbucSkhPjwe6oRrjdW42XKckau46EMLQgih",
  "key1": "koCqHBkBLJLL1gCSKiQCJwZSR3JJEMwcchzop78GmuaoayNDE32P6jmKhFCSqcPh5PBForSo7atKkbj3T2zfS7x",
  "key2": "4JAK92J7qNC5XJUwm72nxmb9Y8P3Utxg6Q7PxqrMZqeTRNqQ9iiBW2GkmGQZj8NBpqjGFDGTM2FJwspoRiQePvfJ",
  "key3": "5EAFmks4exjaBdn5EyhWW8nceHGfwQNv6Nm5sQHG3Co8DdncjCutmNmckbo3RAfPrH7DR7NKFwkQQCW89XhXV26R",
  "key4": "5SMhcd4WsZsinYotQ76A8RDwMx5dKWkKkCnE5G5YZgu6fMXupcZQ3ZDkDXqDrdmJ3dMkXWC8RoBfmxkK1JocdPia",
  "key5": "4VQjZoK8rTU9qb6rnpyp68mscuehCDFCJCHm9CFKWR4C5KchHmY4dMwb2ZNDkjA3eDmG68ic9sGhj61ktRg8MX4Z",
  "key6": "28rCrPsbvokagaNNGKVahZF2XYh5vVqeCgknw9QbRW2BcE4DTqnK6joCqBuhavf48U8nYhFfeN3qMxKYfT2nfeCZ",
  "key7": "nuhAqtY72QxtpofZNLWvc1m5dr4gvyXSSrJckcYy6icfbP2ozB5UVu9kzLtobnH6g61vFp5LfrtAFwDNpSyFmYW",
  "key8": "3ZF4wzoYvjzqkDGAmFNSWVUzUndgSvnaQRZykDqx2nnVf4J3ts9Yt3dJfbjen8mJQVeW7XvTeX5RKZ9kY1Ls8qRd",
  "key9": "3JVHZiEwnhMArKbvynFEpW9NTZrVgvpiXHfHRxxYEPKrh5s7rEFBQDjbrM7M6SASt6yM5NuDYhbqfawbqYCBNkK9",
  "key10": "5TcXmd39owrxmCsC9ukjwAqZaQnPuCGrmDSLYp8erKyqvYSTN2NCNd2vrvfRbCxNusqXNyW5hQXJpvX3eC8hURxG",
  "key11": "5AYPadLv6w25v2L3R8kVPbEfYddJb5NxE2ReuUvGJULPCfjFryY7w7g3EniVr5Eo2k4ymatDgd1Wm7YHj7z6dspd",
  "key12": "2LpVr6j5TxZpa8CRbuRvkrYS6V4cMfiPo28AJQDXpTdQsdL6LhXMbnUVA2T5KnvsQcb7KGko9uq5kTJ9DT2hL8vd",
  "key13": "3jR5bFyKa1syk4ThtdSXB8hBUQG3QZpgAiRusx4osw7dF7W4RpGm9izjc3jA7wngv6K4S4omyzYcLVQT9g1XfqJZ",
  "key14": "4GvjTEXWCL1Evsewu8edC2DjCsQpiSjLfeEea3sm2nJd7c6s1rxSTVrB9hoCiy3uawEfR3VniKcfLjAuo82MaJMA",
  "key15": "3Banp6NGidTw9fDtD4pPkZazUEDLNHG4wC5jzCDuSBrnJWcDRmx14PEF7aWKfyPMmvHZbTbjG6g4pBJetaeQeiqU",
  "key16": "4RmCqP4ds6g3h1UgGvcBBA3Mz3ScA6CruP2G6KgkipoUxMMP7YTaYGFzGvKPnb1Df1xjM7iFAncb8614GcsoFwaN",
  "key17": "453wJs5WBCKjBoqPRsenrxeyE8aGYRAnToENM7UD3rEpDrTTe7ruyyf1gKjtmpfdzT2QHbLpaE5ykaS7DCs4dWEa",
  "key18": "5FW1GDiK7Zg4LYZan8Xi3vUcEvNT1ruBpS5yqeKq4JLJX9oNk8b33Uzkn2JkC55Rx7GXnKhH3xqV1MWthbqzoi89",
  "key19": "4UgxoLEGdjqAqwMHZ3VPYenXfr9FMbhin7b5CW1ZD1mFck6ePzCoZem46hJiLq4pU5kHBvgjWnC6x5KML7VYit59",
  "key20": "32k76Ypa9FjiRMQMckXa12jbDoti85y2FtMtNWwYHZxcmtHMQwFLsiUppk5g7QNYwURXRqTc6fqGzuG2J4mTTkYW",
  "key21": "3qMP5qk74p1nZoxy4KD9xCZEz2U2yhqANLWhnpf8zVNwc6fNcgnY9SUFZiWcTKESmxhXxDeyRtUK21BtxhTJwoU9",
  "key22": "4GY3VPNnms2mM5aE4h8KBhqcCnwZJVxjnnQEds7w4hLPfGnZMcTiEUq4bXU3bpUCnVWTLa6hJfmamDqQ4A7CvXww",
  "key23": "4TSFxcrrqP7GuvZ3BZRniU2vMpz34wQjbpegeGjSyJF2p66pNfsRTGMQVUcuTDxsFCEz1wbqBUfVzguJguM7rWjQ",
  "key24": "2Kemh2TvTBRvHa1Eyooz74ENvj58HihyWKeoNyZT2UJKJMnQyjojFCTggUwEnbdjNBFN99RQrBS6J2eDSJH6BhHZ",
  "key25": "3hAvDCh56X36BzeiEaP3VovePGRXziUnsC6x4d6ezkJx6aKsrWiYwwFZ87qjAaY672pjtqKLrt3RgzoZcPqqvZ1i",
  "key26": "5rULC4EHmmrdAbeHLuCaYxn6frVgKJSZqr8DAQaQyjJC3B4SetJcP2KJmmPC6bz3WrYdTNVzksseQiPVoNjUe3VV",
  "key27": "5a2vcmWSiVTYzgZGqK8XLFPzQFpb1zqYbyNUY9ktocFM8S9qbCq7eGiFYoqx73oP4vqkRaB1tzCTy7V36qM4hu1b",
  "key28": "5e5xtzNi74Rbm8Ex2tRz7e7T76JTMVevYiB2bvGbCUzCdRaHZhi6F8Ss21j4hUGSdkR11LS5SCLGDBGvx4QcVxf2",
  "key29": "4k1kqbmsVMshsuRkKi6TrXAxhERc5AFQtifWNXpCWpM1gRpEuLwh4Ws3PYiybwQ2QYuV2oR2jafmcRn2Nceenv39",
  "key30": "3nYUJ2h9nWiKa6nSQLCQeQqShbbXAcGXhM8MJ1x1xftTXUsQhxqugSJEkXYDevKuzT46f3hc7Y13hL5eEVY8aDrY",
  "key31": "3TSPLbeYCXLMLZ54eV7x7sCuWqrhZuXPEce8ru638Bi7fug6Lj3maNMwT46up9KycMouaWF95ZF7THmpHLKRDk5Z",
  "key32": "4tVMHYs7s4PLkUHvLCRTdc3AyGA39mhYU8kfx3SjsiMndXBs3ttMTqU4TMbSjVmHg2fLhLE2ummfT8YAp6BpMfaF",
  "key33": "4RTkxdJjYunhhj7Ga3rNuFkyVoGwHXswdd6x3fSyAqKrr697ZVwsonmz8Pe8SEP4fijPc4n5LXk4CMiAhPLP9eMe",
  "key34": "jFsGug4P5UVctymirsUndBah3HyFBLgKZJpCnDe5u718Fm6rdwGHifvoea53ixN8n7WXW6DWUKwc87C2K3EN14B",
  "key35": "36VXn6tEbERkjkgoCnzY84bRXwzDBdhGXP84uujW8zs2Ka8dW2yNb8rQb41VUuvEm2ZG6tZ8GPCp4J94AnwT3qpL",
  "key36": "NRceEoGYWA3hJSgv8LDNHWVyiaBmQe45QtMmbqBrUp4wCKbvhddWsr5jwdvN5yNexgSQgfjb7RGEH24zkDRUr2Z",
  "key37": "5aEJzMCTY67TFS3jRPAR4mYbtgHRvdz3f2QfAkDUzCKR6ZZfCyz91NueeDmqB86MXwhHuBqs2U9HYY8NPjwhJAZB",
  "key38": "5FpM5TFwy9bURV6nEizx2SjJxmo1y5w8gJr7xhPc4C3g5fxuNS8m4opQzThbmyG7UzkoeWDtf3tjqtk6JAAaF47t",
  "key39": "4Eqpnf1f1jbCKkG4UrsxUaceAttfLVFiyP78PCgUq9vXMsWwQLQr7eEj9ihGJZo4wGNZHq8WewWzGNqgahs7dNe1",
  "key40": "2dVsvwY1ApuvYz89jyZSPw4xgngRE4YDhZvJDJ5XUAXLP5uKFiWcEijYsD5jsZ1WphzAk7wuj1RLxvj2mHSnUKaT",
  "key41": "3NSGxAnAn4jvJM29WFkQwebcNXURxi8u7ggdmH5sxduxncNCrQZPsmE4rXPdy431uCJq6buMFgAssRcg8MVgLSU9",
  "key42": "Sv2eGZJNXJRDRyg1g9nDxAyf3WoV4x6WR15Z2oiS7iCR16oNVc3dEqSmgFRYTi6bx1zrYXJyNfaod23nmcUgy9J",
  "key43": "EHf3SMAYuGhVLAsAk35Fec4Z1HjBvpgYMtfDcVcJzgKdLT6ZVz6dQ4YYaKqwURzqHb4bLzhjxWoSR6pdHkgtFmU"
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
