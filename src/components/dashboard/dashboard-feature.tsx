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
    "4fddtsTvRu97VCpY8z92oqFLc9HkR8zb8MPjdzAJc9ZtCZWdTwaj9D4EVMGf2pvCq5NQCYnvpyJiWkZPMVTC4HTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CN9MegtD9wwwRaEkayD2ZpjrdVVeJJAqyq9xNvkv3htQ43gh2b8p1X2TkpTUwzCprHM8AUuPidQD81roHo3riTX",
  "key1": "4YpsTJMF9GrhURGZjBoSiMUwEdoCa1zLnTLsaFAwNJfaV493JT13zPKgGTqnMASyNVed6HQ8zkYsKSj9woj4dj4m",
  "key2": "2DmwJwG56TodgQRpxGxSw5uAjWxUR9iYBJXwyuUDzv4vWpFUtvzXAuYmjJDEQpUeCV37VuDEKiAxuG382DNPZgQp",
  "key3": "bzpoiNiueUw84awaZgr83ZStx5htaUET6av2oxMwFtpS1BPcjuiRxXkaqRXeZ18ZnijqXQyREAA9f1jw7RqAnpt",
  "key4": "22odkaeEUfmGsecA3hNzgbhLUrKd2Mzf5FWrWW8dTW4Y2GCcRLUrHBKedNa7edfwbJD8MWhGDbTquLPwnBLnFFZs",
  "key5": "RPzGi9S8ABwUzjfg2c9rXTjuHeTcJLxdPinNvtqfRfNK8hH54soxRpEFhzbLKFogicKKhNPEaKY7e1srLY75EmT",
  "key6": "2xtpRMyRLxrZmpjdv7yCGW5LCQFzuzzECkMgZqUWns89LAW6crNJftUioudBrAgWVXBRfEwfbWn2KFxrNAKKivfu",
  "key7": "5zGwKmb43eHGTrSCzTWt8FJ8SZd9vz4gWwJJeKGR8B2tL5LTqwXPpomwgNuaV7z3W2xZwG75fSMgNDDPGtnPsDKy",
  "key8": "4q2rGawZ1CniQT8g3w6pfxbTy2MbdZBb7qAL8uNuqJbcDCKLrqKYKvNi9v9vP8BUFDvkhfxBFN4RkhWHN8LsmNEA",
  "key9": "5e3CksCqPAw1Ypgb3AXgXL798d2bdrjnV3Fbm7VMbgdPNE8WL5FsEhXvDLAPihzisbVXbRivxps2QaufZSJAPxd2",
  "key10": "5jv1Cc2zUUd8grcWmchCk1S9VZrM3uXPqLoRCrFXySUM58S98UJSTazMobLTPbm3tFHWy1Z4QJavRtUqyWwbRx6y",
  "key11": "3yHvRGjSdKHNW8Gjtv9jT7vSVXktbhSrS4GpwgwNUBqfhJjzXLFir1dPGSSnAXzUPYQ99QnpB6dGWhcqxaDjLRPK",
  "key12": "Lncab2jxGdz4HJd29Hh3QyZfRYLet9ENqngZrYge71mntjHMQqUEj8jpXVvsuVRUowPnGaCqPajKCKhWfS4uSTH",
  "key13": "jyM9N8bDPjhfrvqgj89bq3taD5jM7PJ3W7ydCicgvpB1v3oobC567m8XrYJZ2iVwxAzrCB4EgLvJSKQcAUZQigU",
  "key14": "4fCzg4gXeycWyStnodGELTYE7teDpPwDu42N1mv6V292m9UD8esu1wz7H7HUsLWvvdEqmUsdw1LYbK4nadfdrK1G",
  "key15": "2mGM3rUXdXTAD9KLonHHy4Lpj6zRJ2yYQ18SeJHaPr5Sd9ZZB7m5oy2cPKZtHTaTRfvckNdFUceCq1v19PWZ6q4q",
  "key16": "2Uqfw8N7ni4pmvfD8y42AowMRstTnPThenpXAxAxhfG3BPnax2uyns7p1E8jehanh6Urs2yfpBe6BZdGp4SX4R2b",
  "key17": "67XtP8qaEGiGV2zyCD9m1MhqKMTsM29T8dp3JqyhuyS77rrSgw3PYJH4ECwaaEdQNx9wiTSXtUPRufu8UA6241qQ",
  "key18": "4dm8qRxUobjsuUx7kMfJKq4bt6CVgudwHY1UCQhuWaSunNEDWgi4hafdVE9mdXyVKHYmNmxc6RtX2HtJKzVQpG7d",
  "key19": "2yV8o9nGghHuM1sWHfgQaH67okVruTZi5s3j6Lj9q5QTT7PR7VF9RpEg9ykZR626gsZyKSEoM93HqWZrtmoidb2c",
  "key20": "4KNpswZhMSwxuDoWneUnFGk8wMcSuymWoLEX1FJ9S6NmqjwLZxKoHpEFjRwsp2EuXasRducqQRvXpctX5PZNo2qC",
  "key21": "4e2goqGGJYt3fMs9oUNmcjoxTEVrkeTpDZ6gakzjtnZpCNGgDc3z3KuewBMvgRniBBdm7g4Sgdqrdx4q5k6UHMhC",
  "key22": "4bBsE8cDH34daTyLGnQVBm9iYsD2tRmkYsuSrLmHCCBr5neHLxtBEdpRBEDjkUV7amg51YyWhWkBuv8dYvfJHSRX",
  "key23": "2rUiDk2TEUPkhna7fDBtkpXMfRJjYDfdKXb59ftAJKCJj5AJqD5kAs3qQC5f5k2VDdKvAsr3qrWJ8zBFs8dbFdsH",
  "key24": "3Jfrn6mTSXske8Q6mFS3a3fHFHWC5dHCmwNRpEHVYREF2eP2XeLmSfH2RwgWg3m9tAApd6od3Xmg8poDaGDyBZT4",
  "key25": "4hvdEs3YTEWUBJtBKu4SmduAkbZnNxFqd4R4c9JBpyszGR6vjhGtL2xDPDQxvjGNUtZAfRwY2AVwNZCFVseKhHwV",
  "key26": "5bRgACN7yssqUx25RFxqtqLLgD9UDm6RHb1t7rYPJvX8WNW2oCrTzQ6ckrcsN1PNeoksUzPQERyTbFeqtGRmGBVY",
  "key27": "2Eak3vS74d9jCLVDXL9PU1L4wAv6fdT1nmrmzwL6Sar5JzVxamNJ7bGP9HG9PweFhc3HgyPn2iZjCMRTFJUneCc4",
  "key28": "3oFwMQhksfJJL9qJv6edqz2w5DcfZpsMQPq2FNPnxLDzfmoUeTApN6Afc2Tb7KW3oN5iNk5TCPoW5rAwS8f2dqJs",
  "key29": "26X5JXtjtAkkb6nwD7VXkepuc8zmo8gyq1e58jpPJzMrYqS6XSSu3RZVN1PvWmuGysYFo9rBtp8GAkvvjtkm9C1u",
  "key30": "625ecH5TnzrjkwvhvMLsBsWkqtsnWm7C7KfrTUU24DCHZqeng4pdCLVyhm1iPnHYA5iFq1rRQbsYTziK1uVWXwS",
  "key31": "2dHDHMmGwEMqYDjCF8xQfQZBfyawd9BaWFAuMSFLbeqjZoM7z7e5LU9NdYb3EeQhBbg3im26iibqUwiirFeogX4M",
  "key32": "2dvrp1wCWkMQTNbJzHjxjHUFmMrCe3cGucT6dKrqpDSFDt2L6fWqcZz9oQPKTbvfRSknvusMVywYEXKwNx1poN9F",
  "key33": "42JkcKhNyYdNmTbbUgVGS2CfBY6Drj4qEzaNuW7wPhWRV5QKP2Jk9DvDd3fQ1dVG4Gtpz6D5zm6wWm1iQgW8jUXA",
  "key34": "4Uc1ai9DfPobJQUaCjcb7CoT1AFT5YNoRdhwUXQPGLn5gsMHd1sh5qWzRTafZ5yMMusKsBDidh4jVEgSSmgvjjUX",
  "key35": "xnaNEagN72wJrv2P55FRnZJ5Sae6K5AdZm3VL58Y4jSrsBNjmQmttGApa3v2Cn36kJwRqAS92zEbDGLTaGa3Z23",
  "key36": "2djPeodUySUjyUXmH9Z9LkP8W2uTRX3JegaDbmbacWCEQkprh2oKABop5ChE9y4wuLNXBPuzjGxrwaB65Gqp5GRo",
  "key37": "5zLQtgfXMSDm3My76FW3R5hnRuiGxmvJdVFXxY6t4h1uJrH5FLipj3fEwPBhL3juFJ5qexUuw9bVHJaJDV28uSHB",
  "key38": "5gyW6KXZW3sKFQD4m8n6uBGVGb9kiSvQfMRUgawPRHi3rhVTkqtdZFEaScki5b2etLH65n1rCYvCf513DvNUfLtp",
  "key39": "3mi3eb1h8sS1ojYHYzLYiHY2XxwRYnt4vCrJ1ogZjGEsFfi2qa4MHhVAQX4ZSJc7mvniLbfL4DYoMeQkj7DSLygp",
  "key40": "2WbKJcumkfQmmA89jkowfMKmMMSuF4rUcDHTvi3E4dcUFAUsBp18q3ggbdwX7e61zPuaTj5kW4ktcWa1x5ai2eRk",
  "key41": "47x4wD5Cn1w4pshvWeQTZEWs23PbGsMZUD8LeKuQwZAanUqZXZiu3LW3ujckPCaTVGfS6eDftFcGJ4uEGQ1dUugP",
  "key42": "2y92twhStrtb9efv8haLCYzetRVv2qnmoFHcpaA9hfycfv7xZE6icUBxuZxkFMAGgtcEiN3WJ7RJ5nowQpPQBu3H",
  "key43": "3eUvcMTdksrhQ844oKjd8ogVBY5ZzPgeje2ZMHuVhKACVahcJH1UJ7Mp4uVUoHT2Rx9ewEELvESQuYeWmSfwmpuj",
  "key44": "5V82SsRwr7L4MGJ1zu5j261UnTSdcTB1tTmdDbNZkewPC1VkorSP7AzgGiXyCC6V424RXGbQ6Ln8PFAUveuncCJP",
  "key45": "iuibEFW399hmDYRX15JBhr3pNNyuN9FuGGMNRXwXZ91mf4S8dKUp4sQnZEemdmZ83wSXYuAMRHWNJtJLjg3cdK4"
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
