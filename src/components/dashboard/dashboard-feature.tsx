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
    "2Z7QgpnzbLGjSMKEUxMsxbbZr8aqprD6FUj2Pb5NqXUA8BKxx492fEioaEH22qL6TpPn4asY2o7czzMreYMz8tnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zrMJx3kCX1UE4P9Lv4oj8siTGPKip6ePoCErixcbD62Cgp8SUYQmREbq27buGtrLgGwkufJwd3C9Ajkt43xBwwV",
  "key1": "rTp4ciznYZPiQpxjxKc4mZ3iLMY89A7Z8TeUGsQLfF9wWpEQzcuLPA9mfUZ83ZdKhaaZhiyQAD1FmwukMd9oUFV",
  "key2": "3QiG8znB4BuUdEpudhsVAHmhGN7b8qKBzXijNSCGnEVgc3AKVciojcAVEE1HNgtGTZVgRbQdeJWJwtfSgcjLUi8d",
  "key3": "3QNAbYT79qsQooqDVbxgvkGh51mwASYNpfFw4zVgQuaHctthW5qAKKDjHTtavsCPynwQrMgBXDWdjYZFgnvFsvuF",
  "key4": "a6XpM4mT62hVukmH58csvDX757z39u3nrmRanjQUByAjQCjCktTQ87yjJKTvQqyXwTA5QJ64bTvnz6Xe1y8H32i",
  "key5": "naAPXku2HR3zRiyGbiGynN8Tw2mNWpVgJ2qmVv3Q7m1qoMZaKBqWWvpn2nwEMEmjhum5TtKLTvpL1EFL72HRbHN",
  "key6": "4NfAGMGsmenryohE6ATnTjK4pitxt41kPBHMF64HNKLRMTUb1oHDAYsSycqiFY5x9Nxu2bH7F6ECCwcTinqN4HWu",
  "key7": "yzU9FRaojnGps2HTm69qNaivU6vkG3XZPqr1vusBHGpo7n2AZNL7d6CGDTcm9pnJpm5cfFQLeQMMTYiTE5AZugL",
  "key8": "4XBAdw2qv1YPnSsLpEYRbymK9EhwCzi13o9yQpVZPFW2ZiE5KsLnkv5HdTS6ees5rpL5NhpCwbqosuaC58f1hdNR",
  "key9": "5RH6FsauvtqRXQUn2XuJdwMWRjDQUi9vCQw4fmeGGtuQ14XLXkiXKdMzpgQGtNvq6ziCb2Thwi78kWNEj6iohNGV",
  "key10": "WtakLoimgBYHbHyGqcL9jomGWq8kZibcRLPvE1k2pCLhEC1UtE23muCyHYbRkXunyz7fjxVQv8xheQ8m1xNzNQd",
  "key11": "3jQjTAdLeLuzwViC9cJeFT31kfCE93mFnn7Dwf3TCoKBiq4y9rDNHH8YbzhAagYPWD4RGmGJuVWcd3ova1RqbosP",
  "key12": "2Y33Eme8vmjU2S8gBAwJregsBxLZQx7ptjW8LHnrmnifRRE9BtJo8q4NjdNf2S2XFdaHbt1rDYYrvGtuZjie5VJj",
  "key13": "CUgw27ZsLbSXWoPMZ7KymLLRysAJJEhFEJeTNzrgEPyrT2Q5n4eg9sW845tPET56yeZE1C4G8bhpdaNvVKX3Azn",
  "key14": "4bbknnH956RzqHJ7fRLcYNouFEi7fkMrpkfK3g1371dKyEquxonVUKL37S9LnWrnde6xYHHHjsgE5XLVE3tVi3s1",
  "key15": "3ZoNdywtiPz8eYDijdHwGYQJRvoen3PXriyGAwG2Cc1SsWc23zdVkbDJsLmTD32XcPE83D3dPM96PEatsZnrbs5f",
  "key16": "3GNM8cCDyPBU4XpBWYcniBqqxHuCQMmXy5wfyvTJqF1pArp9Mfwd7KiN4KwiosCXcdM7LRtYcXc4HpAmvZZ324s5",
  "key17": "4M71P9WM375Ddngu38EhkB6GxjHzobz5Ezf4fheP59YwduzRzYhq4vvLYRJWSrzVP6sNRGaPvEXLgvF53UjWmWaS",
  "key18": "EtGZQKfyjUvzT7r6NN3MeuEyVwVy8x2BbNeREHKv7DeEsswH7PyLertSgW35ricRkLgDBSZeYfbstA39JFAZmB1",
  "key19": "4DunJdKxMYo1Pn4Aa6jG1CStR98icCTDHcTz4G7Hs2uuBhqmRrGRDNqbMLhxZDxq9gXStyMjkRWNnZeiGtjTYN7w",
  "key20": "5rRrZdUP1rM5HVdyJJesoSKX2dE9RJKisEZUB7i7sQJ4Kzg3ceNvjZV3wnFNB6hYNuQrRi3uQW5kYCHy7Z48okpP",
  "key21": "g7phTwQAY4ky2se5fsFTHzo7Pnrjmo39Bh95PPx98aB2VuZocwmSPNRdbhUkcEUsSXuRY8f8YncpaJWP4hgK1fR",
  "key22": "42XbaSo8CCqPwbDVTLMfHmz4i5zeiHkoiMg8t8opeuvYpUnyKewbi4CDigiqTPVmiYEUmoF5jcpRdFvSzo1kikbS",
  "key23": "2vSoKcJzh9iJCtRw7jo5JsJmxJeaFJ4QpPkXwus5yMqPtmF4DuX64WFiRejLJVnB9z4WGtru6nW18pVt3MN3J4CJ",
  "key24": "51feXNsbrVuwTaCQdnmCvY6kMKmWL2aE4Dy5NRaJ7k6ow2eC3iMQKbQ5XbTJ4MHU6fPdUQUygqNasTjpkJFhyucs",
  "key25": "29QLo6brTdizPCPwwz1egC2si6G13QRjnGozPDUfgacQqS4reMMYQRe4o4fL8DXM2RWVB1YAub1Veh89FJ5ccBfh",
  "key26": "262PXMNDUy8XyrcnRfwNuNefXyWGY8uHo9KQaJVb6H1cb51YWh7WQUWdT67PyEprorrec4EydycieYxSkYzoT3Fw",
  "key27": "4zUSicWFrwugzou5zcs5nyq47sgKsC1LjndYk5Gw5KBzppGqQggmcakV7eZRTpf4nNVYBm4pZ1qEZ8XL5gq5JSxn",
  "key28": "249vcLa5h9FkJSebUzmeHdUFYJDsjL7XHp5qsNe9cRNKA5PE1EC1YpHirdLjx9gufQEFBW92FjWTpFD6DYabGUUr",
  "key29": "39r9oRJ6jMgm8HoUrwTacNdYYaWXgMDnRYZAW5AbBQxAQxosA3sRKLuDUQ8LtVe2TQgfZ19ie99Fyh8b3m4KpHTa",
  "key30": "2XYMVxVks1iJsyXCmv18ZrJgD9edsW4qqSg2MFhpEUoCT8HEYbuxjRnaEnMH2JjAVW6thWc4qKGP7DVshbCvbpkY",
  "key31": "2f38G7tGYUykcFeFnRPyjrYgXsmC8ohCxF2D8ANW7peeEV6dYRAvS3gGhKkqKXtyu1xQ6ofdqCZqWEedcU4t7pZo",
  "key32": "U6sRXXmd5oRXKiSwcDuLUhgNG6tgjBqYbZsujsHwkGM2mdHfvtAPQFjRP44EHFmxB4KRSFoB76fyhExh62cuqXB",
  "key33": "Pvk7t4KZWfynoySVgTCtSNJ9BvrbGFLDFLb8vbyTp1KEPBC7aLuTK7CRgDyNK4KKFd39FyTnCGQy8sf7RdZbbT2",
  "key34": "3pMPtYr8n3pjw2CwH45xzGFgVH4LCgq6Lt3fLjYL8AXZ1iwXCVSLrLgRVBZtyzKpjuUhZF4z7Bnkip9gU6A7d21K",
  "key35": "3hVc6MVKG9nw2YVMy8iARgy9iacZ5Gc3BrFDxFRbF2w6pzdjvLprrxahSGpscKx3RUwq9KtiLUmy2rTgQohzeLRF",
  "key36": "4KWeiAvgWGKoskh69iYq5i8JExroyEeK1AGi2uY9LHdm4cKfmURaGjZ3ZNeVxqhaJBTYK59jpfNNpyZeJYpyQ2VP",
  "key37": "2aku2z8PPMnJ3bXj9JuXhWt6fUopbWZ5YJyHkCNwdp2th6WbHkqg7GSBqzHgN69UtVt61Cz8u1zLzNggHogLwXRu",
  "key38": "2M6X7WuhCagKPeneZcHGaai3xdUboFZKoMtgaiDsD1M8Gn4DWZioPs4d6B7y2jNM9ehucvChZibwthhiseBW2vog",
  "key39": "3rHJKqfJcZPGiF5LSwn6YhZ49EW65MR9TLqQcqTmshz96UuNqpRb9VD5pPB48UZjsPkx6TxSYn3vDsnLNaaRfvEf"
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
