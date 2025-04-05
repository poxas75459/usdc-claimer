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
    "57HqcSkHoUsVJ4vgfkxLNBvhPKioAU5qdF2upZdiv8GoP9Gb4VESx1PWXKJqrCp6xPj48fNRyWrvfLaB8thod7Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKR17hTqDFjiPAL6bPagCjhWYQCT6ZGxFhZfypPTaZz8svvGq2pyhExsnQD3s3PKfX7BJuV2aSrrSvi8hJVafAH",
  "key1": "4Uw5gSxuhbv6az5a1dmMm9u2CuaBB4522y2cEfDrugELA4sEaCN9Z8Gg1E37J4jvvNxqk36RzBnR88kAHR89aees",
  "key2": "3GZyYUxsVfULYZjmGnDDyGmVcg8BS4buh9sfFpknPca6LvcX8w8YecDEHocA4Buc9Pi368myR5ewtgSB9aUZEiGM",
  "key3": "2aw9o3kky3dFTs6aNsHuab32zcDrHFFUfjQbKijFSrZmZmPy7HmZJeXpCuLGPTTcN3eK8sLdwHfjBbVckEeS9Pq8",
  "key4": "3zMGdGeoUvAwuVikhXhT5aqQpwtegWGXfYdZWJueNyp6pRtzniRi88XtXMXurq7b1dnSVRv5ukfQxFRVAF6YymbN",
  "key5": "UQTkqNeSGVtHzpxhgoVShspwJn6sSX47grHCLYYJxHyXr68US6bUv9Levh9uoUxRZPrYQhrCcSkaktRUympeve5",
  "key6": "5Y48Dqxyhss2EV6CNJ7UZoNMzS55vG1NNr5dkRpx5tJ9U6ztvEEaaHVr2fYgYHt5qavRfYiHnfQ2hTFUymcDeYvk",
  "key7": "W3LeShqQbYWK5cM6zQcP1Atgq4tc1SxZDmYFof3pwErCa54Ba4G2tMcD49JCh7Sjw3rH47HUu4e11zeS5J23Qox",
  "key8": "43rXVvhxxQvAVHnJnU72cKV3cQ8Fng5mKScxF9hJveLNsG39VT3dfTnT4XkXt9o6aTDFySSPbB3DrfsMGNxzL4o3",
  "key9": "41Jks4Dn3LTbG2ra9rXKanAvsizWVgBX2YGt54c4iXbqyHd6psz9mUsey1nDSMA1C1b5KfbyaBXj6b9S4rrNEjok",
  "key10": "4oYa8jbBx1Lv3bKzHPx9w3B4anm5TF5qmUMsxc663txtvmLDG9FS8utrREg4GEEiLaFiPhTutMKPzJReZirbqcLY",
  "key11": "5T6Tej7GykAXqXU9b7rRDqgBELSFFtDHsWAK2cK4RJfeXEo7EMspcDwvNCSNBJLPjRBHhyqPTqBXdxxoaRnuseUy",
  "key12": "CsCtpZpg2HsrSXFPaSGz75DBSFZXiNb2aTe9WmwDVP1SS9w51pCWhQyLE9dpDwd5kgFaDYoJNkUcmDFt5nyjvpC",
  "key13": "EzZiMRJSkEUK6u3mdzeUSD3ke5FwMeDV5GEfRKwYZG2H6SSFQQLnkVnU3tBitUoLZ4TgUXGYFdhkbHXpwW7S1bm",
  "key14": "t3rMdShLYdNc6XqeZkuDiFxxV6FKaGQboAKMkTyNBUujuJsmQptN4mMf6CThgtyU6Et6L2xWqoxe87m49WFX11L",
  "key15": "3jh1K3n7XZ3DPhaQKAT3Qmepgk1RxNmQsm3ehwaVo4jEH1G8MQPKDP1YfqsvU6R1mYQpt7suJAPuYhUMj7emWUD4",
  "key16": "fnKqr76E3mtepQJAxQ2JazpFwaopMA47eE8kbJzcpffz9SrV6hWbFAoXh6nBwPevsWsuUamYiTsT1zahcG8HDTv",
  "key17": "2jwVxjadg3GRRfWkPGN2MQ3nGrcgbwYGEYhCVmxnRLzYGK8kzhkRv2PeEkHZNhNF671rUZKFCwBoMJ2bshidMXjy",
  "key18": "523Q956z9T6zpm7qaC9w4JJq37gatKdoXo6eUhFULFNU4rtqhTVFTnsyL6jgL9qy4yzxuRLmWmfyUo6QhgZpgKEW",
  "key19": "4J5xJQRWDCqk3mXmSEzXGCSZmxdMCNX4B95ws84mRwsXwFgpz1176vFsPAxnLqB4JuWfK67pJpxyyx6tDyc1fP3F",
  "key20": "4zCh3sgjSJpuEts9fahgAqNaUpgVUYBBWDQg8D4ZBojEbJBAX1xiqoajwEiT6ES89iuGNHrYYWh7tVqRzNJpGFwV",
  "key21": "41H7ycDAikWkPgVpKWpVf6VgW4oSCUYoQHM9b3Gxgr5FTW4gVHzbZBGcgxfa6LeafuK8mqanBzMwG4zDvmS4QNZK",
  "key22": "xGrbRRGd4F6VYEKWxEeKaeLSbGKFyd86afsyttSszPzU1FXAmuEcEnQ8zSuu9WQTYbSZM8gfKx4rJPJUMCuWgre",
  "key23": "5cJDyuVQiApeyX68zWxosB3wBntBZ8JaCAQHpvKALDopzRNCxnAvAhEiWDvtWUqDVtLTUMiswsT6qSw5RC7WkskC",
  "key24": "29gEiT2bqUcBkQVtijbJ6jmLv6LPkTbJYSquDFXNfiFiSP5oTALJJbCssQaqBwqWYLtqfBXH357BwAU3x3YSGWRc",
  "key25": "57ZWhYJDnq4EAqcHaUmp8RXNK2yMGG6dMGAWyMxkEw2LaDKf8KvbEFCRmQUYQLGpz8DD68KVScKiw2Xsj23mycXJ",
  "key26": "2dMV4BUR31zjqRWTURAysLQHZbko2zZj7oNbcUw3GUnADTy4WbSopX9xAmB2SqgVgCyxs6gmSVs5HCYV1eF4h9od",
  "key27": "XsjiiGUXw3q9oYEsj46NREL59nU2RMs7ScfHJsgDR2jgkG51XFF3bxMta6jG8aBxhmfmJGJY92G3b5TDBQsUn3V",
  "key28": "wpiY3LVmc1cXJNqjpjrtXUfLwXAQocFRm6tbEPGwuB1Jq4SYbBtK6n4jsM6Kn8LgkoiPVddvAFUfsmNfXpcfMZN",
  "key29": "4rjxWuAGmw12UVBJ5EzsGnCNwDYxShMUjhvT15ZrQJ2eNHCrjB549E6aTgLT8b67smwaG4zjcK6my3oqXWA3U44n",
  "key30": "fwYgn41qF8XxXVWKAsQinjiDxTDfhJbmC6n1m3DTtE2oAR73e88Up1D5TeZmc7D4tBKSdCY13d8Nr6ok3GsJCHF",
  "key31": "hxZnZvzCFvXyMV4HQu6wDLgYeZY8LoEhc9ruLM5uEoSLpByu8AMXDxSwrPhtMPrRCm1D1GfN3N86fmnRJmRKbtk",
  "key32": "4XsAktR8zeVjtBhQTxftu7sEdDZ9KEAGytxh34St2Nk42ur64WRPSr9mvDVGvuqdd5QXhepnMSDQWUE4RSg51FaN",
  "key33": "29QZta2kushS1yimw4mxGcDB54R2c4vsgbQfzwNi7XwCWdZ7jGoezTkp1F1yUzDCN1urv8LWPMaZ7X2JZ4pDVzfF",
  "key34": "2Ckr9jU6mQicQJHapcQfqpzCkKacDJVKzLtBdpQiYjBGVsm6TJvVc9nyVj4NCe8jd7Hea7rPZuGMB5QsyqE45FkH",
  "key35": "28uxfr2hz48NmQZ31rrKLa9cSNJDYma6A4zo7xXnWHZReeWgFwU1YHnhWGxnFQBPKBqn62S1XQTVyBrQ4MvXHmyq",
  "key36": "2ENQJDbaDD7BR7CjXMXWNTqJxKAHKojA1MDWP7qguiZmRhX8AtWHwRhR8vA9ZrMFpwMbmeazcPA2MmNZ3BKc4M4H",
  "key37": "4hUFFYgpuAq8jgRFpGGqe6b3jdhJSnKwyuLYAzQvjyd4iNM72KqwugLuus1zU8CV5A7Gnqh6suJZo3yGStPgQ4XY",
  "key38": "R77wEC3wkKMJ6rhmRtxUWXCJa6fs7avDvmzPNTFTeMAzdZpZW886ewLC7KXJpRxKhrdA3jQMFrwL3C3h57ZreEK",
  "key39": "25c7DrX5NL2cWtDsYVXucCE34EuCo1CN5MhZez7ZFYYzjR8CkuBcMNYovkpdQpoYhLDxK21pj1itnYCaMCdhNKiv",
  "key40": "2UMWn5dVgPq1Uf9hfmNaD3BCAw1KRkuLcRQKU2jRR71KwyKG6NbsyPraHVMA9VcxrdJ5AKCQqRFiATEzDAko9rsQ",
  "key41": "5Jmb7c53Yf4zXBYk9Ne52AWG8eLDXNydCpEpAWnRR7P9RZz6VEBErQ7755eNqLkDy1LV9ZnFcd9LiTFaUytmoqRM",
  "key42": "2FbozLkaXAAtLgnsKEmQm3zxvLtoDxfi8gnHTNSQ9MMr3gKj1A7pSP5Nrb8PAXdHQNzBq1phghY1cRos6eiQTeEr",
  "key43": "3pF3LVkyKzfqE6zHD6uDsCM3xGhXajxzP4ezWq5mQ8xZE4nNoHLpZR2bH6qH4y6qkeFaTHEMNtitTC8PU1z5uQTR",
  "key44": "2JeKMqRoG95kU3xhopvEBwuQHuEX2R77uS6rGotoBPWbmJHaXdohgmKuYa12XknrGWhWtQHAL2hWtm5ZLCvjb1WJ",
  "key45": "HEj5dXTLZBYaEPaoY35AM5gFtYepqWeTFuq9GZDKsdFKQ5mfQZD8j153XQuW3DKjYW3HLyAPqSTxRpfTLjzAaBV",
  "key46": "63mgDDudvBgC549A7FuQBsJe4Efa8Va1XCGwmFeMopoHd5BqH12jQZV2pTZveZ2xQNPXSyoE73B3132WRZ3wYufB",
  "key47": "4DNnfNLKNTqWE7zYDcutbFmHTr1CgcS8vFhWMed9Nc6JXHB5farDxtoCBVt16NMvFcFXFYHCkwpsv4A83brxaQj2",
  "key48": "4VUoPxKhavNCREvSeX5AQePY2adR27LeM17c38XcEogL4wLKvjtMVAUKqXHHbQNzmxkVfs99uKytcybYS8mKcWjZ",
  "key49": "5EupKsJAB4NQLzqDvD47q2EPj46iMow5tuYyy9gr3AS2vGdmNap9AUePbWrMfsPY4TzqwyDg44scqAfje3bZc2YA"
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
