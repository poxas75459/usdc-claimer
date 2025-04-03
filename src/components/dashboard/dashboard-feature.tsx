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
    "JZnbVp1oREJMZcL3VpDpFkjPYJK2yNV9Kcew94Xgt4Am5CURd8bxhXtRqudzXYhptaGGg7xgpzUbPDBjjZrn1No"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTbJmcSA6i1UTUv6sPSj6g6M6Jur1PqNT6vJmqs8Ti8xcZsnzNwMV5qA2xNbZy4ZpRcpHMegFu52eSNs6majW5R",
  "key1": "2pCfqszr6DCUJTzzMrVvyKAnumvWpsefcqosqTaE8hbE66L3F4xKNzpp8EBq9VjSzpHyfGd2EwM4617jiU5SeL4x",
  "key2": "3saPVC7tdJNT4hAbzTDZb9ios97nnNSGsoMv6Mfd3MmvZ5mA5mz3h4whRU1SyRzdmbAYak22XKqTLgTtDqrPC8LB",
  "key3": "21xg1AcJT5JruaRy96ooirbrRZrZXMvrbarFBxtSBVUPoesztc71dWo5xxFaq5Xxc7VrVhEv5Xv3gT5N4YyFSiSk",
  "key4": "27icHdq7Fj5eyefYr192HBH1jmJN6RmT95Z9ACEbVaHTjVrKYd7qETPd2whbc5sJXjxxc3KunmzAmP8eYUh6qV7J",
  "key5": "36HYoJ1GHSXcWmFqbJ2RtQ5oKto2aikqnx2udHEtpnpoAwruuFnyvemoGtsZDcfqnN52Zaa8kgiger2ox3aWZk14",
  "key6": "x1E84EueLNqUmXxFwBU1TiuxcQR3gUcnHtzkixiBJG3i1RN5RMgRP78srrgs9z5RTePL74rrG2Vjb3s8nUzCgkw",
  "key7": "38diFgcjFY2Ay4zG5m6CePfF8z3WpZtz9mGEXoSFdadoiJQkMjZ5HjXWDiJ6mL6HabQ5T5hTHfUDy26r4D6pe9p2",
  "key8": "4hhmiADx2ty8mMVztwqEfF78gm9kwPmT41uEwPCwwdFtg4hesCaxfipRBjHi5mPXC8oBJFkPctz49BJ6cXGuZSGP",
  "key9": "3BS1xXpRhgYTY582nhJ3EbNR8mrqYchAeHaxnymVuNsmfsKNXLSTqaUbGQjvSUBUv6v3Zhakv8NFdAyufAKcZGqF",
  "key10": "49mAZ4dZGkK8QygV3z4gXyFor9jE9sF2YuKvBWREXwqzADEabSEfgoZ8wp99aDHrbZ8h3QL2qJkQ9SKx9eX1KEtx",
  "key11": "Q6q8nKeJzh1dhgJx3rW8n5hmmk25uWA4CHEkEGRsieBes4xLqF7rbGbdUfWPgLkMPV7nB7ZnpBQ9HLkZLzAg9bj",
  "key12": "49buFEyaiD2hcVwugVBArRJ2geeqWyV3WCqYxgRoinqiqE2YW473EhLfYkTBrU16r6S9DPe7b3F5zcT2hGBFktbh",
  "key13": "2Wv7srwGZcoVCwQ1mGP71jzG5SfcV3mbAmcW49cf4rJL6d4sGnW6ZaRjwSFqSwBpGFVmhHmtgVcYah9mpMK7abPx",
  "key14": "LtWP5hq9hWvQyFwaF3cisHFfv1ww38rc7zUX7VFPjwT8YAd9zZNdmUMuNHRn9wQoYM4jm49wM76wdUTcHmK6S3J",
  "key15": "31HKWXKXgcg7E7bsFpLVsSGUp3U4D7XDiG4rqGYtAXGdTLqCDM8nY7ca4n5237ZbXhxbv3S8E3GZwN5T2Ut6vvkg",
  "key16": "3W2fbLMqcjW8kFyzte31Nxs6fiY8gRNkTwWBZQq7UjYqSbySFzNUkAd1UhDNJDW6zQXDoXXX2CTGe1twhXDv4f3L",
  "key17": "54YSyAgasdC1awtwCKokKrairFHkZFo7U2RDaJq4SDeY2EvCpH3LGzYvYYJ5ihrSubbohG2GWeg6jLGAoG6f8bDA",
  "key18": "iThWt59xNGfHNydbC2PsErDWJDhm2SUCdGtK5TJDXWAkQYvUqrS2jCWGdT5U5pJdw9MgxnbxmHQZBxBas3RZk4G",
  "key19": "eaVuYCTskoiJ9SkMoNshiG32TQAGm71cmqHFYw27TpVyCisMQVHfWswzKeApXKrbeV12HVKdkF1W5JiHEkWe1GS",
  "key20": "59fbgX7CqEMzqCaVxAszACKqwGCdgtv4UmunKN8UwkTMzUwCo6zmH3gAXjUL6i9KA3pbiRsi2vwyN4stFjewp2fX",
  "key21": "MGFZPzwx2GndEjnamn4aN88X3QSxXA64mjQwVuwkwQwYpQvg8TShFwr8nGQBuNCQwCuKZV7EV5Nufi3Un7Xvrw8",
  "key22": "5XkPRe2brY67fTzUQmaY9bJ5e4NVa8Jqi7PVsdb2wj2oCNAXdhGL4zmMTykpS2J8m7XkiX8QNtYTpw8YaRxZtbJG",
  "key23": "gVzEZs8x4ViPZoLshij3yTRycEwsqvTz42MLPA3kuG5AmTk6SQ4jjKNJRtCeUJio86z2sENEbCnbYvy8ejVneeX",
  "key24": "3cr8NikRipJzWwcLVzUeA58RuxwyFfEBBGTBJfzdegistA6wTyD4mb4s6wzhta2ioGh896tdwrqKQcnMmouG7Koo",
  "key25": "4yzYgnTmRWu2fj3J3CxeshoVVgPmKDmKssMgjwCyC8KLuQkZA9iiXtPVtXTTwJ3o7zrJe4Mj5ESWpJNjZnEC2uVk",
  "key26": "41wVAMSiZMH9Lgd29RxoHzaat96XZJxkSQypdqRWNgCc72kUfeF77bdsmckZQBakYTK4KSMZjEPy1mz2WSJ2CCdA",
  "key27": "3xoajKqYYDnZUW1zVpGFBT9XVc2oFhLxV347uL58aGNiFLfGVQh29oUGGsdNMm9YXysMmhNc19TBkcFpaLYwGLfu",
  "key28": "3kkYKx9zNqvd7d6EgEQJjCce3U38KWLrAVuk39K5QG8oBnQYnp31XwWs3yZXkoAGs9mmCNPuEXD3HR9vZJzA6n6P",
  "key29": "HubHfBpqyp5DoFFRon7MNj9jGneovb2AT5Z3qNS1wfqRTXQVVQFM6ChZ9cBxm9c8MzaXqnn5HH9LnZ6VDnhrXxD",
  "key30": "32cmAsGpfY2b5vNmNFCt86hUK2J4GY2GEnm1GgWhiVU8DKs84sY1BXXAy5NiTjWgWWV5ytX2GxJL55wFjAD77X5",
  "key31": "2m9BmZaN6X7xwJ9hqPrx3vmAd5pQFTVtbipUEJKyNZmRVndmQWY18Q7SS385b8Ve2T9RT7TvzeaZseyaoauuVzLi",
  "key32": "nY1bokUZKxF8oYuLq3eYSWiZG1Rd1gETS1RAD9EJgWRPXfbHj4G2ogHkMTCpum2ptkbJ4SouCRU8itkqCwTXemj",
  "key33": "54rGgA8q7QjHgwAhek3z68qWhYnmXeYcg8NinLkCTP9hWYyuMeWtx1CgBTZnjXtTCF2RhnmUK7GPWVNXuwUdN2UE",
  "key34": "34v1jrteYwsVAEjuqkWhNb85kGSKbxvZH74RY5acr21x73KPnSvVTrjdWFdUsPdg3oRkYuhA9wnqh8kUtZhsSMbD",
  "key35": "5gtmCQQeyiPtQ43dsKQBwr5PXGejfSmnSZftbGJGAARvEosU7yaE1igXrLvniMJx8q4icszJRKuhc7FJ8UwSt2RY",
  "key36": "3GvvbR5UzMFB4AfDYUMxtJHdVRv7YZNmxjizjxAvcNXe5QwudosWmFoY4TdWwQnGypqqwZ4NcBr5mHTeT9BtkUBJ"
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
