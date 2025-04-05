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
    "67dWEGkDQddDESiBtTMXRWabYFvY4ZabTE9nW7oAfenRm9jg42gLeaCpvybP2ALxGy9EGRs4GNB6FjrP4Xbyntho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyjSK7T8CsFbQtD2Gu3y9tHUYDouzJEa98wvMAmYbhP5pbh3PT62MmUmTzPTyHPeaKVP7fVfYERTo7TayrcVm8o",
  "key1": "9KuX2x7Mp1Rz73hoCC4hQHyunoq9TwNbTrqQV1TevyGFDni6aXBeNCCkw42HnAUrQ3yquHmYuMVZ2h6EyHfGXPW",
  "key2": "hDscs5JP4CaCKHv8NTythLEjVgUMyjRWVWZoAQ6CBTp1Tq2nncaHrokWZhTmuvXKWf3MMUQ6eFXJR3Wh3aMVNYM",
  "key3": "47mVJu5deHTc2agimvHkC5CmBZTqqzGHLyB9FAYNMBbQeykPXVNFdRDaAqYvhjXpoV2hSRCnYMgkEq4zGRaQ71cA",
  "key4": "37nxLakBkLwG4YCje1bfWBk31t8YiXj565BoxqzehZgfKNHif4FjFSSd7wtP5UmaBKwwm9rb2WBd3embyXUaTWBs",
  "key5": "3rLnqNGEiD2wNY6DYqMLbUreoUCisAbJrFkngHK8uY3jbuP1WaJNyS3UZFwytTrzfYgM4HTccp9LSQ37ovekFuqs",
  "key6": "4RaarQr5VZY2NNh39VYckA9rGqo4dDDDCsrH5gVznZ9VgzoTdmncdrg6gvWWMMQrhdMuaq8uBn6E53a27Br1jJa7",
  "key7": "4XFMbZbrtvkiyHsteqVFMiXCQKJ1zhM2GjspfzLGwLPGUR9Yqu5DMLqwLyM4ke8TCDBEUNEpspmWHU7qoBj5RoYK",
  "key8": "3qJZQVyi795z42UhXWavDt8ovUjs23LkekB2ofTjqU3QWk764WbCNtrUfYpzysLApX4mXDP41m2ApAFMufjR7e3q",
  "key9": "2sVT2d9iKABLMKJnnQK3vqVt5AiDXEbLusFxMwZkPVbcmamJWXK72FZiozFdMPnMHKJ4NPLZxQsnjDxwM5VtZLnr",
  "key10": "3VVccmutTjxqFypWrjVJhzuV3YfxEDrTan6No8EEX8br1rkAAysfjG6fdstxDMPEZAALbUprrJVXJva5a53mGxmK",
  "key11": "SbotazmXV4kfbVAFQDfnZeMw2NZxg3vCrFJV9MQRy9oGk6epDCoXQFHrXjSZweN1Hhks7vBrbJnQLsvXnQyeDkr",
  "key12": "5aY2vAfd27FzdmZSx1sJmRzE2Afp9N79ujyhqWQ84C2otW2Wy6YrMFSEdKq7zyGXrjAcC6uGZQTDi6CuGRZquvpL",
  "key13": "2m2MqERuggpdHdbeGaEQKpUKU4QUmLgys7SQtZiaywmWCq7fgr7PZmmpq7chuG74eh9cwcoSfUaqtLQBJnvTteXt",
  "key14": "N7q7FtcFFoQuWP234PZCbeFir9Er9KeSmfPxfvrrXHVVxWkHj2NYpW2CwdQUssLWCzrxL4NarWKgUm6PTBrAPjs",
  "key15": "42FnQtCPUsKw3TSteBvntVXwfXwaxxbPHRL8kTNFDUp1zTRbPM5CrPi8YwBwoyePUE48jhQoUoQztpXTSRJ65Ne7",
  "key16": "TNgR9dkzqEb7xZCzGuzHQ2cL8FQwknSHbDvxL3QrfreCqgXT1FjeLizkvPPSorjDxKFxLVakh8cdKpEXKM6u5Ni",
  "key17": "ghnW4D2YHwG8EZyncR5aBe8r9LQhJzpJdK2Tnobhr45egnJFe5rNRq2bNPjtZrn1B31eUF5NTCjK2objw6ABRCC",
  "key18": "4H5qZWMQ18jsP8T7Cx6dW2QVg2nQ66Q3YQfWuw5drgtsvycAqxb5EA7RQdqyTz9h5HdXwZn8ga5capbiY2ggNi6o",
  "key19": "wtdQ93Zo6xHfESq72qhHrYz7xMPDn8c6wGwR2nEqT7ztXowpLJ5SATE17mDQV3MCrTSH4oNDWVHtEfp94DKucvX",
  "key20": "4mwQCHJ6D8aMXdDMxFK2PgGZkUQccLYK7dkBoabzd4MJdwrwYzWoWQmFhF4Hxzwtty6aCZHLCsiyNjQ7oEx941hr",
  "key21": "4gyiWq6HTEoXn3Wk1JQfpjN24g1ty87px6NhTBerFsUViSpB9YKo3EqmkMLXgi1h9ss2LvpdFriojtXCfncZW82S",
  "key22": "4APnqU845aXgwk3VNTSoX6v5h4ekuWi8aZNDWcdgDjXp2gXvh6iVKHfkPKncXgbwtv1Vjd1tqomaHeikRiNbuybD",
  "key23": "G958yR3L8JhMJjuN3RwPmqVL9MPsK7aujEPNYJcTHBP9sVcNzWb5LJsVKvqi7zR4qew9iGKnfVpVEAvhLNPjtNx",
  "key24": "46gAKETQdCvY3uZ2MNuCSvDQ4L6pKtv8omfHXYMXF9wRjohP4ebQtfoprDhaSneN9wUur4UZnmxYkgCxWKKtq6xJ",
  "key25": "2FsSGmV8jepgsVExi9mwsbHoPhq3hz6rLaActEUoCu9TwDDPHaTUPKezLq4ic3nKNYTsBV9bhur7UKTZm5T2vght",
  "key26": "4gP1PWTs4sQxeuMQwM6N7fkoycrMaGEvzxhxWYLQNJrABFQgBRbvrj6xtg3YV9kATFi5c5RRumNk8zMMn6WrKxoF",
  "key27": "5QTUU1MYkryoqxmt7h7EHVomQzgpyCDuch6SPeaEhF2MjZKhXM1dSULzUAuB84DamtiEzKscdmjv2oHbcXcJv66s",
  "key28": "5ejASyx2zedt4fcNBrxMTK7Cf2u4UXe5uCNhyuowP1Mtdu7qxu7AsWzz3deDCQ5tMW39rUpQkpFNvNpHkigxTXyQ",
  "key29": "2TtEQxvU7EJDjwxiG7sk66Q1pHFssaqirUcJnfNLueiYhDkMfyqRYWRwzcZb51FEcX99zVbvJsN6iUbjbSv3LbfV",
  "key30": "2eYGnYJrqy1J9JYnmGYT5biSnW4PZNv1a4yw2pK7f2rbDMgDigZajJVNTfuxt53kWx17U4oU7rvsPRQLLEWKaZUY",
  "key31": "2nZJFxobNMvxahER32RS5AEz3HsXn8GnLSR7QJN8gaiac8AyN5vLA4WF97AGjWtNMk6tv6oFqrjuUygUPtW7BvYb",
  "key32": "4r8hbEjVTuwFUWyaADuJNCtptdgDQGqkVk5oqAfL4KXYt7m5RcXWZVtfXBQVus8nPyfia2qi8J3axAKzQ5qea9zY",
  "key33": "2eRQ2RQoQswzeUDBqaVh5ef7TG9N9bFLzAvivLqEiPsuWMSVKjj43yockTyeYDaJNEr7VsNde9xH56bGp62SwE8E",
  "key34": "2Vna7vxAREYm1RPKwFkkLFVZbxRzDCdg1146GbSyTUJHpv6Bd9KKqYs1G2z3QTtioH97tYSu7Y4oFz4QnKDHaPYd",
  "key35": "541n2HJsk8eALa3xQQ56Hz6zDhamH9ksQVFK7v3BCrLqFjma5VnvwgAkWmGBgUBUY6NnxYsFDeBFnaFkMQUDD6W7",
  "key36": "27EoUdXMEjrVgq2UUNEbEDxw4dR1R5P8Pm4P7gQGaCoGLx777fsMq6KNN9sY7mwhPYQhGRibofFvpK999JbsdjtA",
  "key37": "4KH2MA9brN3apdQzzHdu88RM5x9ZmSuDruCGcmbuXC2scuY89563xuXSR181Df5PDYSy9KaxhiGgGS7ZovrUg5zQ"
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
