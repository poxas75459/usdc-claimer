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
    "24eNNC7Vgu9CmVvzm6hBFeRDp3SJR8qdGj86RHWa8UEo5mpyg8sQpqBXyswPHwDEzRfgUEj8JwsPS1pS1bRaungJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DwoPY3V7862YnpBJ7kSGZk4AyWbvvLUtdGePrUn79NzLkTkPpsphg4bYJWbwtK8zPoxFwU5h2SDjE78fXrCx3cd",
  "key1": "56HiiBA5e2aMUVvPqQRkcETmoikerHFCBZS2ScfLLP5LygANosQnZNRNSbzmek3wDYe5GnQMptiG1mKVmTkv21C8",
  "key2": "4JtfhFZcrZb3tT2KSLUFxW57MYxcbRS7ZWuum9NVWDPz7GoNd75R4bNHDo1UuBVSFeURiKqdnocdLAzKKwATM7be",
  "key3": "4ZfxVQzjQykbhfLs58JopnPJ22wPxY37SoARC8mwCuUviZvo1Lfd9uQDNozefvcUhapAkwspGhFqMLUN8mU6DLD4",
  "key4": "3CGmLXprMqnd16CmbExNDe6wVdqwNpdPQwkR2erKsdqD79iWJNWFmc4x4U3HHPr1EdTrjnDnUmQ6zDPLWjSKZQrM",
  "key5": "45BqZaGtUKrKj4ZXSCmHfbx6899MWRWuSfuRugBq3nLhXz6qCEwubVcGkGi2gFCTr37j1PXPZ9HbdmciWTExusaR",
  "key6": "2xY29zXzVcqqcspXugmFZtKkfgnhfcp2EPkNa7evxXzEiqPKfVBgKF7QgvB9a9uzNR8p2PdHsEa7qB36YKLju34n",
  "key7": "2kTVC54E2cVkHJKXZZF6Z3t7UBRkLZXcqyfR1NaBa5Hgyq1EE4mJPPWqcZzSFmSyQXaAjo4chM2PvzAGud4QxEvQ",
  "key8": "5dTch323i8eTvuBsb1DpWbGrueo9kKb3PTLaMkfJgZRVR8zAiBw1RXKVagpPoYV9g13sBWHYwKnSm2tfJTnPoSev",
  "key9": "t74aajQQ1FJzP7QZats54HF8e7Kk5BSnPfPixyTe7QrSQwVKD3p3ANirtJyWj3xLWxwrYb5VnRC6skNDnca6Jxi",
  "key10": "KvPnMFmKQiHujqpUjdDV7vPFxgPvpNmtzzVAAFK2e1rw55PzV1UYWq5h6Si5ff8eJYKeeExfvKmzV1wSDqG6yvr",
  "key11": "4GNjDVRYLWyrM7ncsw34WWdPfGx3oTsk5j4pD5gfztpKjWb91GLDRnMN1FnbHQncg1HerinP7DJ7QHoyC8ZMepHi",
  "key12": "4KGe6m72JqTMZ9LoT1cqN5oFVAXyPyEc2gS6XxBRHMaswECUXVjPkgH7prBkAFXAFfFUguBFc9ELxSmwniU5if9C",
  "key13": "3NzCqGkEJ58FGymDPNpG4DK4VprBWHVAu5QzELPsG6sFYYFLPjTUTasqMic18of2A9iWGVBwbWGenJ9k8pz7tUHm",
  "key14": "3FaU8aK4dPerJKMsjRkY4MLHsQiWVzhfBWBDniRVTtXyALmTqKm2Hhk2U9u8uhMpxUcj6SJ7wBGCW1PiWRbeoSus",
  "key15": "4k2v98nY5vrChHtUSdNxJuyCJUDuKXjJ3uiHk5MdqEBTjfYbP9P4GmFfCf2euHi3NADGhwjR58n7MMfgb2n6Yf6Y",
  "key16": "3rtSHVoBeNGnx1Bcx8tqrC8PUH93Leb1pkS9ok8qCQs1sk5nCKFZDhx8DNQUb3dZDYMn5NUmsjqT9JBaHLShZBKc",
  "key17": "5fToShB82da18zK4yNLMJJDRb29x9ZGkq8fUNCej3v9rWCqH47WhM7mqdYhL8uPiRuK6Ke2dbtNNmy4c9BXezPMD",
  "key18": "4fkcXZyFg4DJLfMJCdrRakKmH63MeZmRW6LECiD5fU3RcHQPBosv7X76voy5RLAMQRk9PMV1WzzsFJ4bnMe4FBcN",
  "key19": "4m2uvj7rNRtDsKAbKfKiyuCtzQxL1VvGK9QsPMhLVfvY4EdqKofLY6jnfvRL9Y8ALtRbimkXgeBctYgcAwU4g5BF",
  "key20": "47ZwKrXXKMrvsDPqwFjFezJFZSqcD1Uj6biUfUkSLTsy366PdW8CVqsjp7QwUKqxHcYS8i6XtVVMV7NfcFBDGpZw",
  "key21": "2XfGGP84B2oMeQ2X4JSL1vurRyGvmGMQHkYptTTYQe62dKMxtj2Vdxibf6nonVkAsSXYDVqCYKgtWvWr18mQMGRx",
  "key22": "5RaJBTEuvbkzjvGMq9J1SFFkrGg6MBiYthx53kdCiH8F1WdVaZd9hUhBnMz6uzrRyrXFR3QNDbUXfhuce1zEy5Sk",
  "key23": "Hy1zFTD9P57UEYUuyvRRTHwzir9rF3LjuX71ecKaekxCHiimNrXhPM58sbSeeGheYZtSqPFsQztnrGFdBumdp2a",
  "key24": "3HrJrjVfYu4EaGhC5Az8vnn98DysK4Lzb6z34n48xybkqvXcWUU7zSwnJUrxsMgJzt72Z47n9CDPtBcNA1dD8UJT",
  "key25": "RxqKmsGcKZEotzk31WBTATbdfGwt5GZrAuaUgqZMoC6zrv8VANAd7WSVzm8WJrwk61LSiHKyt6QD6zTgAWsUaBe",
  "key26": "55wCGTUfiqc7P6SyzoErwPcKZ12MNzPcrWpvxRfJhNHTPf89baCiNvWwMHQKUpQLjuP6RrNd3aLBvqtiknjKkMYu",
  "key27": "3HPLtjFQqV2xxvfSUGC29GvUcW2z9tCVgMearqeozgmfSaDe9GpmgQwPWSv9bQBbRuXX6u7oxpv4eAhHE2jFixum",
  "key28": "i2FYDdhJvXY6PFYXY8XRQHr2JPkeni5rKBagMsdwb3Kb1qHzoy5Rcd6puJogZeY7fm6po4hREe1bHqWzBFs9gFB",
  "key29": "4XQJvwyMWZBgwCaQ3JYs2Mijv5tCDsUNQmgvoU9CbaZRpQVQ6qpnPpR3GEgqnNm9Jf9vi9gM2LHKE12ryFcHNwwe",
  "key30": "5RZXQW5QhMJcw2C61wQJi2Gqz8RQuHdjqqmxZ6PBM1dXhyHPg5k6Nf94jeaBW2tqqM88qnh3kdnbpS6iS2PY9XAT",
  "key31": "3WPyJSx9YsB9o1SAgGi5bLzYyuaBRg9vvkrPZsaYUPA9x5beRMVu6o4Ww42ZVRRaf6hSRvs5tPm7JoFj8qo1476z",
  "key32": "261VPtA2mwE1ZKUZtFzZj3zJmReFd9nYJqr31u4NWauqiFvVetqyUSi3fGRsgBb7MaXXRNojTqaeUopuv6cyaPHY",
  "key33": "63RPL2YoQ294sQMEoWxg7VkPo6ygs7bq44oMy25D4oA6x44NJbjE6dYW4aYuvPAZmvqP7FVTjwqNAvKuPY4CqXD5",
  "key34": "2Fw7nkjFpkwkJef72zc9NjtUAB2BjBhKbp1wnNmXybazYqNZZnojdcV5rPjsn7PgPMpxDRNmoXfZ8HsE1bcswCnv",
  "key35": "3Ewh6DhFRxpu92HmaJTcRxPa1wDQTsYNh2MAcKc68hDZ6cwMWHVoXuTWd9ruPwjWRYMaM7sSAZAGNvmK6iEfVYAg"
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
