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
    "HwfUuNQZm7c9ykbtkYUVtQrerwZ3Kd2mm5TLwgGXtkZ9mgTX3V9pBh5XtZZBt1gQT9SjRDVBUFWheQVjVy99ox1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWrqHnptfiq6rCY8TkpCDf9nimR4EgfeBr1bmYHzUh5f8wGfKRqtKWMEMkPKxCHHopBrXPGABQnGuFeZKgebNv4",
  "key1": "5QQgtHKsuTv4ss6hbxdTP8yBv2U2ZhAAfkqtGSxKnMrca5y5hVxuGmVxcGMQ4bLPwy4WKKqfGH4e7NGPKXSjhvJf",
  "key2": "5fwZ2SRBZb181uymBWHjHNNq7zPD5nSNvHwUKTFv4iCivPPShUJD7nu8tjhPUuHE63xgfdZWkMyo5r1BA2RxrVrb",
  "key3": "iWqUHMqQAVmwAYkXFeTriPdoAJN63L4QDRP4NCsvtcBwYh3KJNkHg6dVhBdT6J2gnQjL15LqccseeuDXbUohjmP",
  "key4": "3Bih3ZN71y5o1XSc1m9UJcQJughQHrpjMGJDvKsLTmzMiSsPeyPKpbcdwWh5KyykCDSG1yHzFRSZbstp9uCVF4gc",
  "key5": "5G8mF4mzkfL6rjbyY8aEvpFhqoEE2zXw8J16ZRWXYfLK74j7ZmVg6LUxXDJ592vQw5JJPw4Z8XwEQYA6LvuB8axi",
  "key6": "3Stdcy8tt8PqXTq4yxdhNZkEi5B8Uqz3c71MPtEz1tZo3mnF6sQZuuN9mxFfDQCg6qQpabCBUcNaRe2s1Gy4trkM",
  "key7": "4Y3cwNbB3UqvpdowfezbJPtTkMbnXHowMGftyz5bHuNNt7iwXZBMfqzUUM4au8CPRtwVD4MpZemsYHBXD6RsA36o",
  "key8": "411pBLHmMJSJpv5UXbNfiraK8UyRHwDaieAgYG2cZAaR5jcXVejzyve75ioaiuX44bL4ipZK3fJsZ6Dqu328rWdy",
  "key9": "7fi8UMuqbVBGi2mKGMh1bZrW5gAWVrN6fG2tAiJs8YCkAuVYzxyRAZJRkBLdwjgFDM9M49cxx1b6qsWkg5jafH3",
  "key10": "2quuADuLV1RjJRc374r7htsNNFRkUC94GW44i6c6oAYRCzxVKYq7Rku9NuUz8yJv11AghUQy7ka2Cfce15Ctwuv6",
  "key11": "35ReQHhD1Wcu1HwcFxdrbZawKG68aRHhcjjDjDw75midE3ciTp9WnMMkgV5xBjosvQvwFMG2nsU9131uneYPus6e",
  "key12": "2R9RbrKktRTyMBQF9Uysec93r4KnLQaTNyFVEvyxSi8NEX9yggMwFE594YzGDszUzGbNDMKPrFvU5TCDBDJkfY4o",
  "key13": "62U5rY7qKxe2kusJ3bq7KqAo4iXF4N8Bza69sKUGfuMb28Cof4Pxzum2Zp9Xwk1fUxL9myF2aCK1Zowxb6WPQsFJ",
  "key14": "4V1wc5WYvTPypvNwttWA2qhWiRWmsjMSvFwNKdmAXgoV36289VrZU7FRtTse9pDEQXK5cCX9XhRDKkra9WHJL7Zp",
  "key15": "5Aj1gL9JuFoy3tSWM4iSP47kNQDkU2gLo6HE11JnCqYBi8ip53yhZWzeoEu3pvfcBtwEkKcnRAVemTJUS5kYA1Ck",
  "key16": "4MXL4r1wqyCTsTa3V8FduLgDfv9x17kWNYatG3X2wNFHp3Z3qNkrvYHgBb2zQA6VgqgNvvTgjC6mbwpRaV6pL8zF",
  "key17": "iq4zxuWvL6M327iGysnogg9dzuJTnidFLCP41tTJFnwHPzDUq3TTWWWExQ78DDhdGVarJ1yWcnUfGyPzwmvxna3",
  "key18": "3Bnv8Kqx9pRqzPxaGz6baPomejbtArW6QAjp5BCXfzvvQ6kWx1kidTwdY9CCGJ9FPM7PgUQ4aPLa3cPRGwkTkXgw",
  "key19": "3DeFmcQBznmhFCDNNvA82iWw7MqkUPVCMth2Jnu9pQjLi1oFfoQT8mf9wdkpeEFpHUzB51UwWDo9oKK5xRerB6SX",
  "key20": "2ovC69z1Nm6c7KkwMQVKAybXTskyWrKtJvrWfMpXbZBJkqhm6CuJCj5Xy2ebQvfu31pAaAGnjvWJ8MJ7cQQ88X7E",
  "key21": "3MMb3wsQXa3Bo81BYiLAYHGH9iveLdgEzJLNfYPJ2P8HavGsBowosNyx887Bq1M1RwwNNUwsDR25WnRJTngexGpC",
  "key22": "5kHQv5df7sDNb3hA7YFiwx9YpjtgQUsL6NqT3F6561ZEzPepkeWEgbQqPG4i1jqxCTA2g1NUpkwubkVava54moJb",
  "key23": "otYe6LzGgkt719bVw6BDDE1XC54kWCiKq1TXUcoWwofWW7JiGrRj3vV2cP1DXL2HYoiqHgitaH8a2HALPX3jqbe",
  "key24": "uy7RE4hdTCMzc7kRZgAvVBMudYAk5h5m2pj956XFnToboAKLxtSPRkjLQ3GnamZN49mrV9t5LJLhSr7yDmDKiyU",
  "key25": "4gWbfgoisEEKwLqmYyaY6K9gCuvEYUvN87DoGG9VeDaxJhTT1NfYnRzoW7jrwKJQR39adHUkDcWSUpMBrfgndkCw",
  "key26": "2ay8VsX6tNysy5PXhov6PMKEXZ377dYy1Qoz7d5feSWWVbD6fbRHoUzdZbQdTwPZeEWFCVr1hj2aF7HgZmdLXL37",
  "key27": "2FtvcXryfvXpGiKDfKtLWfp7tBi6LsevLEpwTEiuXCkNQbNNTskXX6FX2RmQjpAfbp8ZSihn5SpRyEy7qbKL7TEk",
  "key28": "4F7Qm3PQ1ijvG7kjEf9eRebLhJWv3ywaFZNUx9hroYN1oKWhzCMnHthDhMAi9Mwm9N1j6RkLDLd3nTdTfx2JqJud",
  "key29": "5DN25emqa7biqZv172UjGs2xEVLXQjaMa3pvZygBnDbZhpnxLjgAjSxP52Cf4XQ2rvxoDxRWRA6u5P1bSb46BUM5",
  "key30": "2VHSEmiduyA8k85gq4WfWmRpdGxcUQJatcBVb8S1VsGY2d8xQVr7N71jNSCNP14e1Hqn9SYTesMcodon1cgRRUcd",
  "key31": "3HBPKvPjwpzXJGTWFHGo5xqtQ1EPEGYq8A9x8F5FpbCRSmYVnXgqYde5vq8M2AenW6tkUfAJksC7U7pCniEjHYbv",
  "key32": "2HNFA3TKdmJUK3PLvs3HyEgVjXrFjvHypTKt73DsusfzmDGcLQkWLKvfYBFAmsUTKDCNPBcwa9f1mkESZyi6ErNH",
  "key33": "66YtrvBtcw3WVWXk4UqYHrS7D6QuVgsr41ru8JfycCy7zvBwzh5vhsmxjn9njVTnXTmymwePs3jPH4w2ePc6dc8G",
  "key34": "3WfmyUFurZ7AKo79eQBvGhYZcA4wnCCvEGm3rCjSHFF5oHER7caYrNxLyLenn1ZpY2zact8Uogj4vDsMzao44xy9",
  "key35": "3ARpiB64ViY82mitN95AyZekiFrcj8cpmn335gbQb7vj9GPGuyVCSBMJvdwE6uaoW33hT2DVWNHsB2imFZcjUKAL",
  "key36": "DuW7wR8CcHAeAPUTM2kTXiY6zsngKx5yDz4XvF5oDtoedcCvP4xiQKNKMKJsmhrKwYTytPGz2Q8pUxbR7sHjE9m",
  "key37": "3RHBirt6sY517LM3LcANWqnNo5Nw2DGb8MyULmvPYgx8VTZxwaN7XUykRHrzSRE9NbfaEae1NhD7RZ7cfUVTjEMk",
  "key38": "3taGaNzVriJGRsKLte7SwPUXZUNJqYWhTtptHUMkytYTKy5fyyf91NTTyyT65Gc6ZEMYFsJg3NGa1zhQKkdMsdYi",
  "key39": "5eS5AjKyMkLvbiFBWNeS8j1ic7jfyu6TmW9qFCpqVjAZPAUsgrr1eCCMtjW6it4WqBMdzXjWnfzMNBG8EebVPBe9",
  "key40": "57Gd6DTzbY6MswQhRM8xT7K3DBkzg9A3yn1PBVvhMYN4XV3jxtdk3eaueEZomZGmdYLp3oFPT94ceFapBMFFeQyM",
  "key41": "5h3rMJHC5L5bXgfVF9wJxPZw3U9YpLvypF72pYxrmB4okcG7v8jBFCGFZAVUDfHdXwGLcyzR6LaPvmR5BbfYQNvp",
  "key42": "5uNMHMvHgP5CHEeKvbeuP7rnu4pyG5zitao6EMrvjDXDvy7BmZ4teTbk5dVvTVjXy5WkTqmA1Bpx5GfWjJznCFDX",
  "key43": "ozS4crf1KVKwVbUuJ28BKqwEqtqCq1o1K4EcsxqnvypaEvbYBHJqoZft1w2gExn76dNhrgtLKfwzSbQ2HzaVagW",
  "key44": "4HVHs7aVz5VNuQAAsgs2X93rxgZf6GnavoZzDn9NfcriFT1aRkYCTYR3KRtabwE7zyCss72KiL1Cm9KTp4FFsHcq",
  "key45": "ZHLpFk2ZpiqrD9NsKx4UdwL7pYs9MLZZqLvSjihDndtya2gKsLuG9ZibLBoNUFA4uuep9UCBKtMhDR1Nj6M1vr9",
  "key46": "3fLorYW8G8yUefoCeeZmEXS5BQDZFHbxvaXECy6vh6H79P2qhZg4SnCPMgBXbuACP4En2qFDHUZHnv2JSs28zV7n",
  "key47": "4GJGLPAX27BUiKDViZojrDzRZCnFiv4tgdufq8BYMWS5EXpzhUdSQuB5RYPU3LhkXCYAARNr7o2MXAvbE5uSsABJ",
  "key48": "61FP8vrdYrPQp6gMiaTQUytB5sVmXiQ4fvQ3XZPrpLMzK6GJRx1zHK5Sx8TXgh2LW1AWd4jSsGw7akoSXs8BYEeA"
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
