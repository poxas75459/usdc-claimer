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
    "uYQnobesM47HsBR1z4kk55CSU7cw76Bx5iHQo85MiSxrHooKYoBbKctFpDTtHAUM2iccKKohu96mS2UTJXNpTdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wtXBmrLmYHmr7ceR9vrWybXP1P1fBzxbnrcP3WwVTnQRU6pR4hZ9ri92Gw8gsMomfcRRTA839Cb6N6WkjVZvQZS",
  "key1": "61Vi6TpyU9nGdEacMiUp89rfe7M6r1NNtdAk7hatQGKeV2bT32JM4fCpzjfZfY4b3C1GFekgaNJFpgNuDUYHvANL",
  "key2": "oD6UJCVZ6wYgHNEg21Sbw5dWriGz1rkmS1f5sNSxFTQ6zHwWSy1tEqUDbKdAMw8MPnS8Jwx3PDkxa6GPrX9VLdg",
  "key3": "4MDWEiue7xG4sZtSQ4RPXoTYzMBN6gyiz9pxhQrtNHp7guMtxzh7bzPN2wv87Q8pCaUEArPbn7YFgLk4ghYTrkQk",
  "key4": "4V2sZN1Ta8VSXTgaCeRrFBUeyC2fT1b2jK5MzXfPJU3z6hmbRHyZ2Hr7HR2eGJavomutW7p5iGG4pCF139aGBTGq",
  "key5": "3vVRKDFNnDxRCD2V3KgY3X46Zq97WePBBeT9AcHW6xvkMeDXm7Pqkrm9pPK52pFJTjnVmckECseiHA9jMqUXnNJN",
  "key6": "5t7dbKU5GtzUe1baRb6zmSUhkBLR3rWyJWjrEJZwEHVpbdmex5qdeJ7e1XCrtKWu7pjGz5cZg7hnWRxGgeoQfb4K",
  "key7": "LiuwJfRoz1yrMwGtS4zxoapnzsuYweskAidYyJGnK5oU239o588mZ9ovvtfKVLDV6HmCMbfo34Tuq7k2MhYvTLg",
  "key8": "WLXajWWSbDy4d5NNd8sxqe9R2BwDddVM5xaoQz3j2uCqKAK2bCctGZKQzKvqkNgqBdhoLJdrTdugro3YZaNS84e",
  "key9": "2vQukzuxas2DDUvxXYxG3SVzBqakHEFHbhHFmzbiKUzpxdNnRGj2NpzZUVphEg7pz4nUyJvX7LAyncBqi4yG4CZi",
  "key10": "5a8rNcfAe5z3yhpCzAcajAPyWGLUDD4WX6JjZmknXznHUZA3ho7HNawSNEV2mdu3GyEMmFJ439nXZYxNMLa4XrdF",
  "key11": "2h1ZJcTB3Qap3m4VpNYSqaGwhNTmGWDDoZgqdHUQBj4rKJcXpSfo1pcf5JCy7BpP6XxFpA1ymW65XAj4CMSbNtzm",
  "key12": "3EyivvqtYTJCE8uTq5kcTw59GfHaRf8JoTFHPnpFzsLXKsZW8fZhidNXeZ4Py6Af4xxUAzxXUvpjsXKZTQBcvCyK",
  "key13": "2yLELGijki6uhspVfxyxZeH3qsMdTeW31zWLW3WM7uadxy4bsHaFPRQDCnZs2sZ6Q1WsF21V4ZJs9oPoGmwXXpAj",
  "key14": "3oaZXYEDBcxh4KDc4newSoYnr57ZLpp1QGcr7fuZngaaKUhjbWaWDjycVGwszoukGFszV5soYcxAxQCC5i6Wd2hZ",
  "key15": "ZWhCc49pmLQG39wt4mrDcpVAc1395PCz3UKt4sTMsFArf2JECGGp6LAD8ui3gfm8eTedx5nP6iaDaWTRAXu7zv2",
  "key16": "3ATJ9QSywTtp9nis3WiSgw8AXY7owkAUJ2vcJqvJpZMUzKqUofbEkX9oVAjtxrHcA5WKBK9iUh8ekNx8Ab3u9ZgU",
  "key17": "27eDRaYfKqvVtFcXN3JmJNE3RspyrjjpcuJJVHHZFEEmFaWfzAp5jk5AbjGtyx1So3C6Uj6ximZVfwXGgrDxxHym",
  "key18": "5qExK8RNxF7A8pJYyRGVF7NB6YvGkcRfmdhkTkGSavS2RgrFL8W2BGnRJE8qWvCs3eoGYmX3Zuwc9uiBNjczTRfv",
  "key19": "343pLHNBLBG5Dn7yRkSzPnayyPqCPyoEbqgmdaHYn6H8MqXdo7SMtTV8cLP6UyKwTp12hqcHYtwvdQBZnYu2CCcM",
  "key20": "2TMmMDJQQ2ZCUB6fNLJ6wLmfaoH8DYNrB55gVJgixGX56GcZzmWWtyWYPvKTavN5XqZ4j1ixkENksmu7WMbeXLxT",
  "key21": "2jVwTvV3dXvtLsLdynz9P4LpYdt3bJ9hbGSUTa2WXsZ8xcNM3rvrGw16suruVmfoua7QhBv7eCooK3hzrk9tPEoH",
  "key22": "5Fh7FPC6RRwmq9Cu1UeU39DyZgHZz7cjjymGRHgn16dCaPeLf4FY3uK9ffz2kAxeNZw7kcppoZih6CUVUypVGCqT",
  "key23": "3TWrHUNEnTdoYHZqYMKotXkyLy2cRUZz52PfDADJ36wwxsXkVnfw3BtZ3mGeM88Vyexp1XLGwCHETbhQBsg6mQW",
  "key24": "5pVXFkvij1ngYS6Eyoti73nEGbU2kipy1JYfT2zheReeBVXMVePL1KaUpeoNmgyCbwYAQ9dbAfiUReyjWyXXHN6Z",
  "key25": "3G5kF1tCQpGDEGoDSLWeA4XV5tQYkXMRqPX2EcbdJ7w95LCci6pbshjJMfJETpMb8ei3TB9GBjrGbxZWVseD7dme",
  "key26": "4STt2BNP9ReuYhJuAgcKktuo3HT5Rb2YxRUQJKjFyPk47n4ej2BXBgRmybvadVV4Wuk8za5cuVMDXBjDwDBrXDYy",
  "key27": "2swDuygpt31Eh9usCESx1ap7xGEZ4uhuHjf8p2me17ajxaWm3pgvPsp7oS8jit9qt3ATWLsR1ickP4KXUNpBdwQD",
  "key28": "3D19YXaThDjBKPDshYY1ayvYVcx4SmihSB81gsmtTrMFNHVpuU53bLoXXcQ8rnKoaYXD6sRcBUhSKyFsSAACxmLe",
  "key29": "4cmyb5ekvUoKQHvw1TqyT3tasgr1pjFcE77KtC85Y4qdVip9dshauZhRcskuNVE5Ym9ybiTmRSU8HyUC1u8FSJb1",
  "key30": "3WVC2WNVTr1A8GKra2u24EKSfiYJgH7ZNDYe6y1eZDHqNtTpEihPNfG1oXAQ4cXQAf6Xf5UZjUzfoPvuAKWgLoCP",
  "key31": "477sXfDZGYLMn7nBWEjCThHuRUV1C3WqhuMygyxt72SWvnBB1m1UHA4cS71GCPRErKJ8hvN6Dvhx4kvJpsaHVy47",
  "key32": "4NqCFfanHmvYBEeufWD19AvrWqrvk47pcqaduS6HJR2XddWVDx8zmEpmpE4WcrZzRTmQtqJqJqSxe9kTYtsEepr5",
  "key33": "5WWvn2PfGPewQDHKJFuhuH7EkdTFu4c7bX3dhFnhF5DZz7xJtEihzpYHVWtADxjBuku2g1eaMbMtpQMYGRVn1GmT",
  "key34": "5pmwE8r5y1hpJqpF7ZUVsbo5vTdpRn5G8HaYFbwWQoGnNoY4b6okeu9qd3ptjPBPDW9Bpy7Q3p17gNMXH4uGLuWT",
  "key35": "4BWJKpnMtg6ifVThmzrqZN4VMYEFQzWzH7xGesTW8FsuZ36ZKi8vfpk3nCf9eu6bkzahhUr7dB8s7Yn1qVQj4cBr",
  "key36": "5LNa8BqVaeX9MD6z3hns3h3cQxMpRuLw4g3TVhiHMa47whhYKoRUNwtS2n2k57V4FJGmTw2eRCvLd5b6dhRz87m"
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
