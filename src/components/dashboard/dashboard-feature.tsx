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
    "c2WNwNTUmei221djSNBo7LQ7wiSiVWv5xTHoysje6yQKrqehiKzt7BGJokwmr1dvAB9ucPuF1ncvBW995pWQY5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDza51enwV7wK856CGgKBFEmHwUr1JLhE4C6KnvWDG5km8nUQXySCYrtgv5XqSKKbMsAmT31gd5d3bi67ZKTKHA",
  "key1": "2ygtea9VzwteiLSJ3tJ7fgtYNRX4XMnTaw1YZhe7RTERhNxJnfy9uqvmS874dyQt9hvRTibwJit1TFXs2UHJCf7v",
  "key2": "Giu82dQ3xC8iFU2UinySA1Y9MHDDjdtz5Ub8Da81WsBUF3DZhMM14CTMaWy9hEmtjrmDmpdwgXcA1qQCHVFZktB",
  "key3": "oh95YUsEtDsYtTJQuBgQ8nGTWUGEmEt1cSSvijXtANf95wKRTBMMsiw3FtpNp29sTzrZxX2CocwR3vsAoGUpE8A",
  "key4": "2VXtJ4WAJBAg9T44vNCPWFCwoiW5s5MYosKG6uixv2Zr8duk6Bz6benz7ioxFAunb5Zdng8W2RGjPvd32r2JeH4B",
  "key5": "5UwnfbPyQE5PWU4TFA9Q4KzxfzpbghMPj4RpGZKaF3GUzpe1Qj5x4ndZKE95iBErGirA1vxbCVdsJsDt8AoXs88d",
  "key6": "5FC61GGoV2175n1bAE2qhks2SmKBvTwGu2mXGiJ7ohbytsmrj9oGJ1bmZNzmmWQQkA3akv99u92awMjR47fc3X71",
  "key7": "2iQ9N9HpH6XumRBCnMCgZzSnN7KKh5QYEApxkjs4EVC33yvD2Y4u1cyHW1ZpG1r97tUA4HPtnqGT5hKaQpngWnvf",
  "key8": "2G1yE9m8ymQsz7AxadGQAAKJgM5ZigMkavqDXWighgYofaBaQGB2cXiboLzgE28QyXqLUY1BJnEGk7vbczBXXF7M",
  "key9": "3fzXF7aiSxGBGqvHArak3a6fdotqvCizEJNkyuyMgRLe3V4i2pYcL3qjTyzZmyohZU3XiuSpXFs6V3ZBQjTFQ6b3",
  "key10": "5zpFjFLDycpozKBrRpjjAZreJrnhfxTLBnW4f8Ta4j2maTuL8u53FURb51fCq8fAUwwbUKYaDUmkSHwibEQACuS7",
  "key11": "5HcYmEn9r7eZSC2yFk6hmJfZycvV156QNJqK1xEeJLePvWeKuvBr5wioPu1KQp2C2c4hfnr6FMHewRJLQvrDdCdQ",
  "key12": "2tXiFmXetyLLsXXAbCdtjULvxCiiNa1uf98k54yAGvBUEQVwuZJ1JkymgMrnrfzbnYRjMeAxEnAz8hx3WUt22wZV",
  "key13": "3sHWripE9zDAUpNXx44eBYb1HfF76nXD7MBv7rGE2jQfgcuj7kSA4ohwCK7D5T5yT1pT7RxXGgv5M6t7YvZSdrwT",
  "key14": "2s9eLoeJ4ppNdAacP8YTPVtTBWXCqTEezYQjDK4R7EVeVa8ZujCoEHtem9WcixMKgF2UpXPig6U5pTBnqnHAmK3N",
  "key15": "cdqUQtSxEBGPXzJJQfehcrmJZRrvNCNtCGzgAHGmN2zkvGuje1HjCAWc7VkWkJD4LXR8vV4UnKhiRvYRCLrQzJb",
  "key16": "2Rrt1kyAh6g6W6agNhCqNCnTFq5PeG8TxaecVCuAUdFJj6hVdrcMKifNriPcctXtA4EsVNof75sBqAaM1xq1gQDy",
  "key17": "yPR9vNp16xjP5Xh8yg7GgTBj8ZbNFrQKAoVKp3NCd21ri3aZVLxAKCyV6SqatndmU9WZBpBJKsLSaD6f8j3yZmP",
  "key18": "44uuLmzLkiA21S5XrneRFtXKNPkTVvH5KmDcDV5JExY8BNJohzNDU6tQWitMwGJgEYixc4nz7wYuJieDj2W4Ga2V",
  "key19": "yxkMAccMGcPCyCC4Hz43YE1RokRDscF1Ki49npd4hiyrbwb4t92Zf4hm95bUJYe1qt1PpUMqrY386aT1MfS613B",
  "key20": "2JZLfs9B1wFGzWqMxYYmazcvKkYoWkCDj734iD1u1EST6q4rpjb4qGa9XjvE3w4qkjcJVDTWQzLLvMNvFu9s1UEX",
  "key21": "2T1PzrdwhRcZBKVY4cBF43pE6CbXxjSc9SDBnwiRf9nyTMCaAEtoB8umvtP5FxwP3AKmUpASZzCbBEhr3YDJ6dat",
  "key22": "2mSWJhFW5YEJ4UPkVFRkELKxLuSaRtLNi9Czc6XG944rxyK35pYNP7c93GaKpnEhZZzKbBtzrMMsBDSbFH8fkJXC",
  "key23": "4FYiTM7qZuXsXrjYXibkwi7dCaRgdMGDGNYFDjkM7rBW7qdW498fXdkJJuGUec3aKTYpAe7QStzf5oisEEeuJ7yH",
  "key24": "5u15FXhmZZjfE7AX4QkontJTUdxpepETT2r64rPqc6uFcQPSyyYrHNb7rAnrEtxuyo4FSfBpgFrx1tFgqvMEWgv2",
  "key25": "4TQpC4o3FrqC9nDsRvrLWHfTfE3VsAYTCmJh8TRHCnzDGnP87MkBWXnWd3Mf3q1JhNmJ4XNFaLgixcW4jYM5LWMQ",
  "key26": "29rYJEL9prZUyzN86VqHv3WRybTo8tnLeUGULZUvPMKTiuhGDGPRfrTbcQiu7X2HU2nHG3SiyU5i6Mm9D18p7AZ2",
  "key27": "3y5FrukVZB9SUf5GvSzrMz5eC5z1U9KeGkCdxVDuYySBv7EJozZFwyVs86aRj2gsxq6roJjoAkseCvov9opsbZ7j",
  "key28": "2xKTDDJmThNuPUTSvx4atH8fk8jtnpGRAHqPv3zATWzU9ws38WueKhddkSkHRaytGiiZdATwHNWxvrE28BxQVdHs",
  "key29": "VbBn3q5yR7qymRtSwSSpgcwaGT3X8SsWsJMgUPEeGAqfPp17RoABQPSkYa6C7u3p3L73x8oc2r2XLoVbthK6zfZ",
  "key30": "5CCiYBgjwjMkbZKSnouyJx7CyoDgkX5zraHcV5ztAAYF96bKuQMpoPG4QKQC3xVDJ7htmjoqCzBWkdgdkQDi1o69",
  "key31": "5VBDMTPTaXccSjSPGCFL8BUC5jN5rEic2mxqAB9UyPzxciBNtRtDhUPYynFe9v8QoXXUbX4q2Z71oVHsp3uuPtYc",
  "key32": "2HA6VJiedXgcHKyre93Fr8GNNGEREuyBHh3pLhcCXTFEo4RCxnAdqX1rT3fnaWP2QjRwgn8f22ySPZypuH8rSV1P",
  "key33": "4kSz8kAPyqNxdC6FDK7a9j4Lx1pzSMtsycio6hChS7LC8Fgnnw11L8W1Y3BZ8emBcc98cKsg4z2STWAToY6vhrtc",
  "key34": "31VVbUQD87Rw3f3QFCUu6BXrhApsWRL4qLZYNd3utHwJy34QeeX8QPzDTFZf4w6i51ajxsWm4AYLj5G3oq9k4FrU",
  "key35": "2N2RXRkPpQLhHqWMceQnh1FqBBFo2qShWk3tEBmU6iKgcs9rg9tWaTQErjZSWXeiz6tXehiJE4oBwXNPyjsTYxeP",
  "key36": "5rfkRr9SPK3uesgYYXTxgg6Hby5iotyfwKTYwKLPfvMEaFex5Lo69pBUgRuPgmsyHuoHq1pyw4DUoC5K7BrAzPu1",
  "key37": "5L1puRC4G99fU8NqdA4Rfm4bL8gktwm4cnm4KdmE2h1xBSMtwYcxQaNSCyqfZ6dE3F6UGiVFGe1arwB5HtGxU6w8",
  "key38": "5fopEGWcT4M19wGrsZLRfSBTvcU4zziZX7qYFXTXLe2rbaFpNVwvn8svJYWeBwQeuhV23p6kt93CXyx9i4Hx5QCV",
  "key39": "3fwJ1q7pbGTbvzc3a2e5WWf58ffojPGCNagBzQ1oQ4oHGQDu9nYyjx2fj191u7GUDSbQECjjrvQYNLcp2TARnhG3",
  "key40": "3QyWH3CPCsRxEV8Ak6q6cuck1rAafNKPo5isFLepAhL18LGog4jKFTG9GTzxnHMUZmMV9p5WjzDmhHBJQKKMxqG7",
  "key41": "2Jpx2s8XewknAzqD17DUcMmva8opa8FuV1sJH3eJKFmxD6J3FVki6WX8nY1Tpm2b9hFw2jhd4xrMMoV18estkuiB",
  "key42": "4GcyK86WH3yEet5JEMZFjRsicF9b7x7zGMzGSrFS761NthXwEquBnceaGVqck5rcNbk6BGaoEvUoDbNPw96fMMNe",
  "key43": "5Q1pDS4XZYwDmJ52J8xmhorkXjVh5T95x4cxADFkF2M1AahDEMx6jN3gGkuYhJSUSk74ik8dWvp9qqwAjku1ndpP",
  "key44": "35zPHRNXAbbnHz5qkimNbFTHf1CbKMzCyHHmdd6s3Je1mQPgagXZuX34LmsjZZCHJFh1Qfc5rugD7y8iULv7FHXF",
  "key45": "61mhxRwAUBLmYJNz2hWrygZPgVNkYHLAcLQKPXwctT24iyLkSzbPG7NvTg66fzAui9ZSaijZ9KgoYE8bEejYJ89s",
  "key46": "54TnzKrdUe9jw99zsYL2dBvA6xkhpquaDQh2qNHd8FrRbQtV9wittbx6bbxriD75SNM1bnCwWALswWuCouJJycdb",
  "key47": "4Ly35VDbwuws1JqrxKqLhEEhWpET9YYTah9wEfh5KE48HCtKWDAVtokCn4JkxeWjJNtMqeErbAnJ6yUka2bJ1XWc"
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
