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
    "8D5ogud9iLN7k2SoL9ZkmdMU8z3fp3tEXtoDW7wQmYX5YoQb4SGNidvWRAKVwnxskmEv8fHuqcCsuoWNiWEZ5ok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFUEY7hKyqyKPPJ2GauW5BmhHMrJR2iVK5iBTEZ2gAwLSZXf7rtAybrkx3fKya8hGHauoACanbDTGrxMpuZyh5P",
  "key1": "5eWiKVZ26RM7ZRqSEcCGaobe4Tz7fxd2FpTmuUFZFVryiQzpcDauemRsavgr48MXEemHUJqyjNHzDWd9WtYYmMm9",
  "key2": "4nYnMjrSsfJRnJtM23igsVKzpp2BqsZnwjat5UmkdK5kyFRBCjFdrfrt4araNk1DEUM8Hd7R5KisQ4YP9pzh6HFQ",
  "key3": "5k5HeEN3Bcgt7KymqkV4UCdwYnajhaJCAQQcyJHyZQ6iY8EAh6EQctmvjJKocHMpovxnZNpS2PeCdmMS2fjh2pzN",
  "key4": "2VEqdTaJTn8FW8gebojJ8iy7ipvXvnZQzYi39kyASNofqFpN6kVNtBzfTcLxHdwDL8tLxheagkYedwNKWGfKzbbE",
  "key5": "4R3dhhbSxw4A3WTT6uGo3hsJkboVingct7yaYnLB2aw87s3yV6h6XTa3WFm19GmgzSTh7tTNx3u9rLHbBtjjxKnC",
  "key6": "3ZWXZ9XRtB65vrGuCM9cQNHyVc4GVgoMvdxPXhq1WtVHVLrZxLuKSumme9fqJFSzWWBvPr14W1viGNH9EjqHVLmG",
  "key7": "2AD9U2TbEW1rLxW9XcAgEN731tV4sqnpuZMPnV5BEV9F3hJHb4cgSoLBsD18ZsqnPnQ7BEasaXvatAPrgi4pYGsw",
  "key8": "4o4D3Fyb5w8XHfbG1crsRYbm1kEVNikupZysWtcFxWegBE269FL4h5LwngLeGDdkbkTXVKHU4Gd1P9RF3DVzWhb7",
  "key9": "49a3tcyGdeBWsBe3uW2WV9qKSqaa91NuBX6nEQYE9eNz4Nrg78k7teGzE1A9s6Kog7siXAb89gL7hairGsrbUuo6",
  "key10": "tXEC6MTJLqNqTBKTnkB4eLXKwxPWqC6gosPhNwruWQLojk5w6ikfHjJco5mGZtczd1KaqhAQgcrcsUj16gJFMwy",
  "key11": "57uwoxHDyxgB1M3NU8hB9f4CZPvcSvMrVUJT8Ry9xyetBmcf23jnKipsSRD8Ff3JTFYq2g3zzQF4yXeYmHdMgfT4",
  "key12": "4iYnXi9J6F6Qbg8aiq5yjf88EacNYprvpnSKE4zdrnoaLQ4fVx6BFL5k23AWcxrhGWBTozrtLjbvFS42UeUjaUVV",
  "key13": "4vjuw9PkkKaGAKBQgXYLd69cgQwpNpJfa6eXxxcHmcadWFm23m3mvUo5uLQ4t4aeHPrzxACktgeJFQqwk53HUjyZ",
  "key14": "3a8FDkv8YgWaQWSxN5obf9aVFzjGKKjqAfh1GhoRkc4ZdxizPdodnW9LVeFjPNB6FL6Cu77fJUm292FbKhVZPCJm",
  "key15": "3iE4cSF56CWc6afc2bUgGVPmvSGXuQVUduaN1WCmgdoLbRN2DeQEyXMLaF1MkCQhTmQWD7tSFEqHkPrtxLLKtVad",
  "key16": "3BdFtdmzoH2GUoMv9LhQart6vzPA7gNTKkD7ZUY3sa2knmoNsyRHxd2Vb1M15uw9T4pViq35857qPfwwQsKr9dLF",
  "key17": "4yiUz2FLyVjtuyM8GyBQNF7ffHXu7prwSEuYNNdKF9ELVzwu3Tuu8VBdAc4iUCcCUoZdbjkMg2GzqUrWTmqadBLW",
  "key18": "2YneU3LwRhYGbTusH8xgUTNfg1f27EfCs1oDseZ8HL7j7YNMrZ5su8oW7rfFSAE1CR4asRwhvchUZWkmLFXhmq45",
  "key19": "3dQwYZERuzkM91b2TPPfawpY1mrFTi1xPghUTxYyMTsMuUkb5XC5nu5v42xytHhNzeJGWvkq9jck2EmDruNB7ggu",
  "key20": "5NJaoa73Ggpz9dNhE9G9BiLAqQZqDC2epqJHYDFRSgw19bgaAXjArkqSnkdQf2d5yKCyauWWJ7aaUXzBZpNPcXg2",
  "key21": "2jbu8ThN9XTmjE1Z6hLHY3FnYFA6hjjgu9qQ6dFQxf1oGVZNKnQFvxdPoEXVKdFkULaRG5msow2s8HLDWrT7et1j",
  "key22": "uojxaKz5Z2KspoE94VYEZaeX74W7t7AX3uwQ2Vg91ttrmG2Xs2zr6DQDu8pK6iRCAeu9BYX5koKk5xVNkkoEKcW",
  "key23": "2VERGWM1v16ELgCndJvbrVA6r7umLtPMaTJEmGy8KaQaz3JagU8TjxwdrbrDQrqR3b2JLsuRkKeMgLcF9oQfHz4b",
  "key24": "3fM8S1MYUuQ9KuFUKq9vrn4ypSeAHhEnEY6nLu6eRGYr6bWTkahtytkWMBULQPsXvBGXJHXnDGoYo2SD6p4VvP8e",
  "key25": "492QRkYhE1nJaLfNthrHGjUH9sqYNN7Pk2fU15kiud5r82uvQDo6xk1GADPwYiMPNEqYgwp8cZkqWoQFnr4BtpeU",
  "key26": "kAkAgC3dGvxgyrF6fgH8Z98YCKKirac4mBoF3BkLcM7sCRoAv1H4E2AQ8sq7SsWvq5dVWNsurgFTFrodW1Gu7uo",
  "key27": "2NGLJXgZo1G7C57FyvUeQHok8ey8Bz3nkXAZnpsYWzj4XihX9PV3PRcRLHpkDxq1GZStW8UJYbW57uGSm7mq9Uhp",
  "key28": "LiedtyToegP3dh11DAofEZmwqk4y7azjmZbR9HcxhonHL8M1q8JpY1KcxM2VqwZgE6iM1AokzGKGicirJWtw75G",
  "key29": "3yDpSHPvqbgLib2UCVVJ4V82kkPvURgBuYX4qvqiZ7vzqLL3Dbi56Vys7qbFA1BcoZuBHJ9k28X4LgPibb4tkRgK",
  "key30": "9QfCkJQebC6UdWZ5TfBkZimsMZ6QpFdJzFoo2RGAsZULbwDmJg9JQU3J4Wxqewhz8YnxejrG1sR6QitdmCA2iaQ",
  "key31": "jL8bUerwXccc76QnwJroht2QbiYkqKMjkXxZYm8vFRiN1j3hPpFdHq7ZEWQCU4sQ26v9yo6Ha1te1ixW2azvpqE",
  "key32": "4Sbb3ZwTCjAY3fWB1SqcM74ovhp1Z5BzgVdfcSmhFpCp7wiaMqy89pikKxQw1DiggiebYx9AejQRZayBFkmYZJWB",
  "key33": "5QtX3P3SBGhdGx2KJdb7wCWRiZT2Eegvar6fvAkCyTL56PN5mtPiQMsoRQKLdrdEVMrxPsDUmQRm6bBRGf17qvVN",
  "key34": "3ATXvJhXkfgyEruptgsn1qoNFomxjYLr4gzHyU7oAi7sG96wbdULqSdhdh3XyhBkbUNbZsQbmyrDevAe4Fdck2KX",
  "key35": "4EWgRCYy3h72bbimmcarnLohMtykSSBEtvHZPobC1d7bjfy9YtSuriKoBGbmAb85CKGpYjwq11ehWM8WHatmQrwT",
  "key36": "48ssYZi5esTXNZ1kqywbeS4Fro6fBiWZsaCAWA4TeP8cELZ6J9BuvgUPD6LJffSL5inVDMh5TC1nimqcrAKjFvmN",
  "key37": "5JsHubtCQaqKrWzVSv1CoiGbAwq44cJtrpxaePKLRyGt9kA4x6RM7FpcuCufY68rDwTpbEzLD2vWQtngBNRrqJFQ",
  "key38": "2GeLXXqB4BgMzdaMdDDovURpuJ5BA1eM6EwCsi91K2qngLFxuDogdcT1HdJaSkMCqR5ekYxAvbLHuVtbuxai5jBm",
  "key39": "258TPay3S5fzxgY6qd5k2SZFYkuNbUzf8Bu6m69m7Moc4X4qfcxoUokb88J4XNKo8L2zeyFZXVFCyXyeg1G9mPg2",
  "key40": "3E2JAerWjCAVaw625nAxVJe3snQa3mjoaL9qBiKjn8b6QyETPhPdT9cacxy3wvvG2YxgeSqFyXjvxNdjrXAtbyA3",
  "key41": "23MGJPAznLHmsmUgVZ6ozLu4fbREXrLh9FEFfps16fit7E8hKKov4nqcSffBDQWmEqK3kcJaRhqjaBvbYC5vAxDm",
  "key42": "2Q9jUrTV6fMeVhnJFBpDi942Pye7dhjKGFZfHEQg5jaWSx2e6BLE3LfVJDzqnbRT2oa9ddXrzft2xF6zMUDCoh3w",
  "key43": "5Gmdg5AqfLWZ8gMN2VfG91oaEyXZYXA9dYfFSoTqY4GZCBx4841xsK7cbJ5GgNFxeAyG3nuvQpTsmA93oCwShy39",
  "key44": "272ATfmrYr67RVR3T46CtfkLSiaBU1B24A5DWvHTxn7ou2BXVmHBWh1jphgiwsc9bhsHEmhEgDMqz2XfUtQEVH7A",
  "key45": "4N2T7jxMrUiQdFUUHqWNAgF5sVVH7cXUcPR5hMfTvjsBTCSgeAoHW5VM8KCQoP29cpc31ZpM9BKmNRVJisGLttyr",
  "key46": "2jXCQvqHoDd4VGMxb8qttHjZL4NXutTHajxb3m7oeNkWEn3ChDMfKYg8VEbJ3pDNJ8mqJZW1E2MbSm2DRVJuXamQ",
  "key47": "322ozACmF3ANiUoR8PQdR7VzxikyfDzFBzBHrQqK5ZwSWWjZK32ebmfCYcdvxtpWWY8ixF3Lz7Wbgctpk71aUYZp",
  "key48": "2D1juWDaNVmpdGJPMDqz5MCSaBw23bHv18H6XrWYYmMFQJyTmQGvTWkcxhZbgSwiWEhDW5UE8yyeVboxMWuTR4ge",
  "key49": "5zf3ym4HA3ddHjS77mq22uGnbV5eRY7CxreVB2CDsUM8AssbbwsGw5UJZ6yYT2jPHDQTArCVnrmg7u8Nto2Z2PcH"
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
