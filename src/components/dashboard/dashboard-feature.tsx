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
    "5tnxakS7way4vqpXo1QWkRuDHTHEynHsiCrrpBv4cWXt4Q8jsQHETdbYZ44NqCcVyKNxfg41siBx8x8XrVBHff6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6DfXhYCP9QAKgbQ2Kg1dayiN5kAqC4K8ghdt5uVDmngxnsZskf1jjFK6S9eyanzigbR8rvn621rkz1sKtNYLbi",
  "key1": "ekwFr13Epi5wnAjtmvGETknUGHNXU8j2MPBYmGpT7PJ5Yh44sqjeFbzAHiJzZbNxV2Vno7JRVgucZ5DFpkaFfDd",
  "key2": "4dkE3Ryc9h9eGoU6iKQhWALYbpJyQoK1DyaYyMUSjBYRBbAjfSV8BvD8CrsVidQyJqhNcG3AFL3FiQHGY5EExvHg",
  "key3": "4gzgZwpWGkVyqJnhWvM79mmYtgomDMsrCqySHb9pEufRjnGVucptiLk33wYtYVYs2tX9kaH4sKJDRPfntzP6k8Ba",
  "key4": "3sa5kTPTiF6rMYdhkkpA1fnqP1vDhYXe2MG1mDJMwsWQksG65p7GfCBPGgpTSkseeB71EwFyWmwShXe8Rzrx4Syv",
  "key5": "KvCChSuDuELDgcCeVJq5hFH46aEcyhF8aKgtPyMjPyvuVNgrDhWcRbur7CYfhKn4JycU1aohcMiEP6Ggi8T8V2U",
  "key6": "55ZNy6EQf6EBUKqNwbV3a6bchnX3VcimWiVjQybUtsoatVgmMr6DqqHuYM16JNtYnwbKJ34uiXDMv5wVLRTQrL3S",
  "key7": "3kyfzLBYQEtXhxkmRz8VwUmYyzKFaW8K6FNfemv9HgmacWKJAvyn2Djqmi8BBqbuUBFY95dNDgZqkrkfWyPd84qq",
  "key8": "t36xZvGExgfxp4WkridczUQxcMgYfGuTLZxwsFBVTzkGhnRv6Wgv5hNuEpo9fNkQ9G9U498YVLkvwidfpozKZKJ",
  "key9": "4kkSj7HhtvwGq1RGXLozeDE31cCdqXLJQxQCKdakgdzJKdhtoA1eLdh3bG23Z9yKmPEkJvheWLvXUAP4ULMSn1jJ",
  "key10": "3dWG3kckTY5qiD6bQnnQMmX625ZtgyrRffzvt86L5XDcNcFBxFk2PW8UaFEg8vj4cFbyoLmCHxDa5imbm1KNXfuK",
  "key11": "zk1aXTiLLnfYhe1DpfWUZuLYfzA2G76qCvfnAmbYQDhUudLFtB86tdxKp6SCN8PdcDCq6qZvbfUtptNzY8RpSVL",
  "key12": "3FurDSpSyp2dsewvSYT8bMK9yZMq4nRd4maZE2mTN4gTMzZLwxL12YewMKYSdjkTADWbnvhmoDoZFGD7HkPDAFE4",
  "key13": "b6mpSPNbVFfJKrJEbs3yj7icvmAycrTha8xszGCqtJ3ZevEStam4Kcu5WQTJajsdWhR9iWuLR7qATbT6ydjYu1h",
  "key14": "47Z8sLhUEc6UY3QCjUWAAicbnVCCpWhWxwvcqT1R2BZDv7sgD7C5yXwLf7p57wewRDLWZbzHMR3bJXqCejFnuaB1",
  "key15": "2SMfresz34gYxpsjjs9bVgzm7MsktkiiKvuBu9vTMRVVzSTU6iTzEYM4BtMrE63zLVEbGXctssrnQExqpsoZazp6",
  "key16": "8wLa6QQZYMWQXd1vZjP5R3dBz6aN7PRzsVq77sqqksdYjxBHY5HoTz6kk3wVeW21fQ9Js4pHSyJ23287ZH7dtF8",
  "key17": "3nsPSYkVaKyk9orNywx89oaTZ2xbRaZRQ1WGguGAbkBTbg696VzCjqUB2KqLxqMV9dktnb1j48Drd8vKU1XvovXf",
  "key18": "4iPXQRbQqvK14W8qHch2e1AGov7rWNBqjGVbzWYRAEe1iRhxkX83GHpvXc8xLR3zepCVURf3LVhXfox8oMMvUaTv",
  "key19": "3wuSHAw686D45fmYTLxfegtm6in8qniCFntK9DohXV3xC149BPQnYg49v959o9pJAweWfXhUV2Xr1radJyUs6SCV",
  "key20": "46LktxGSom7Uqex844mAduTvMUEPxgDgwzYGxZwVJZNSuRjurwMk9WJfQqvpMAD6gjc2HKyX5e5b5jx5edKdSss2",
  "key21": "2qc2cFdZW8rgqfDmQnH3zsEDyH6QXymuT71W2MKSAEqmEmkswYdnaVT2tySAmJDbHk93yEhActiWTofQ6Am8ye4K",
  "key22": "2PKj5CxsyoHGmzb7rZJMXYmsVWwU77pq1NzBAim3356kdu3UC14danAAypfenUxwdkVigjYbDVmV4Jz4nLZbjFWa",
  "key23": "5a6ViZ7oxkuQ9FTtKPm1mo58hc4w8HEPkvdxu3iyJkT3oVJtrPneozfmp5Ua39AQpbDpsyUapouAB4MmYyadCmmA",
  "key24": "E1s45qP5dMaqEUuFpAuGULoE5BVHwDLwA3zwjcXhYgiqxVjwH8dJcaGjBs5UZwfRfhtTFWSxN1tdpE2ohfpjFtT",
  "key25": "4i7zNmPPwNVzcoN3jUeTMc4ekVz1Vn7kWymAmpaG7h31VNnZi2bKi8D32MZTkkjRBKSGusnk4A8333WsLDy9hrdV",
  "key26": "U5doSDehm1UpjPs4qYiUbUFPjJutDs5zFKdJJwUHorHKYnBprUEvGxiBC6xaVM8iAFU2X5UFtJGrV1KF68vhbNV",
  "key27": "4iSmqp4QbwqGBFuoPs5XjdSoyJ5YUS7nj28rRDSRyBfJbvpgQ74jYdoYSfPi1ciwbVd2Eq5y25WL4RX2Zb9Wrvxh",
  "key28": "5USSUw2RJnUV8zN2J2qKTk56LZCdnSstvQQD97eVaPs2P6FU2MTvEcQidZsJjEczUfM91UmF6ZLsz5ao5mQre6rq",
  "key29": "5o3f9jxSTKfjopgPU4LrJ4KWy1znqY1CF49YebKZiQLFX7Zhfdrfh588mXVHrqMBP1XMBrXXRtXERhMsqEZr2GMr",
  "key30": "3oia4eBMwRUt5g9E6SFhfsifhVritPhUAxbXQMsPTRYYAD3twDnk5P3qLnKeVTa7Xg9ivQmS2QqB7aiKtFKZeud2",
  "key31": "RJP6GndMzWv44aaWWvXmghw3gXFeAHrBjQbcmjQmAv1MPPUBBnpfyLJ5ouSUBuDYe9Lw3ULXjmHAeygJ3uoqbM6",
  "key32": "2K1DZAaiNrEHL2FznbcsyGiuSYZBxEDLnk4Bfq7DF3YgJBv4yw4ndKAafh5pwyUCbsYAs6a4ittKL8HPkT69aSzx",
  "key33": "2ozH5VofpmgFDkPgoquUonM5jqDqMhWFMywjQQai5EUFhrkRsjXry7wcbQjA9PqMSF1xHmE2CU3F9msGDq6Wsy4C",
  "key34": "yiHaMdc5B9KLXXeQqkKioGmt52yfoGwsH234VAmsHsd85xsJCj8piynnchsUWY6SZtLBeMZeJrrpZsRBwvGXQ9A",
  "key35": "rbjFyjpo2rr8L1U9c6c2uibhrHXcwNpWTvshfPK9ctYwWW4Rpm5pFifbxc39BcK4LgEsGR6doohdCrAYV7sgvHR",
  "key36": "57jd9nDcxWbQwPeJ8CgPSdkt46JxTPCPskpsnrBCnqtZDyvHxMFseWe24uoFvqkptgps6W2P8nthoazJ7erZsDbb",
  "key37": "271YxQsyACf7AoJFAUKHKgKMvr1J4YwBZp7XDwyhF8Q5vTi7HMLhbZSCZcFRgmBLbacjmzHCMRybPeNJ66VagXqL",
  "key38": "5WVQPq9TRdx98hWvkE1sgTZsbkqinD2S2DLKTuio5Upfgxyno6zKaX7Mzi7iTtRTMz7kArJFgCUHpEsu8M7HTQXD",
  "key39": "LX3De48y3j4RuU2A1ZWtDhNnTMnMH8R7cb9phUuKjti75DdVT5UkP7C8Jjq2zGgXd37B4M3h7zWE7yJwCoCVuvo",
  "key40": "4F11o2EgW5eSMR5qPzscHpj4WRh4JVu1hF2uphTq7MeUdhMjmv2VypbAnuGFQjaaKEw5oR4oDPv6EqRUwYpxUGvV",
  "key41": "21Hgnua2nB6UtX6Yq8AQFSdFdnNGJQDVoa4Xya8idTg3JKec8mKknkNKEN4az6kRQAv5De2eHZB3aQZjwuVZkWqy",
  "key42": "3F5cAXNT4JKQDUFWA2Wz8YV3eCFfpVC1uNfLdA5ioMyoVPLQ1AFC5zArD9eFqWRLRDf6HwpoXM8MZh9sbEGAfH93",
  "key43": "PU6h6CZ69xtrbBejGoqvSkRBXepYZSLgySgh8JpP583dLodAEmn8rBXvc88gGofoJcNpUr3bQW2hpx9bBy3qphM",
  "key44": "5uaY8r3KFfQtKxmKZiWMBt41EHZnzbmNJPZhE3d6RKPcApRdzE44Q2FWxdCKZDB5a2u9WhQtY7BFQ6aQ51fWAUs3",
  "key45": "rfJofe4MYpQmEH9EPfhRXrKcVdmAW9XPnsz4u9uxaUJvyfpHUzwQHneAgvZzLbSrStmbmSMjxZXTm9f7mYPWiF3",
  "key46": "5bSZjpfq9RUarhn2a8oPg3b7j6mZS5D19b3s1A47QVAeNsUhLE626dnzPTo3nKktYG5HDfWNRsWUscuBXw71bbGw",
  "key47": "4MVUgTHErgQkBYJmFdkVcnETjE77h3PAZ1cZn4XksLavBaaCdLeLk7bCm3nVN1dS2VLW6DnsWGghhZfkzQ9X2o53",
  "key48": "4N6HjuiYzkxsN2AS7mUTozEzqL2BuBPQYTUKezpVe8JJ7SS3GjYcvKeVM5tcRHDDgxX8o5VSkRCxQ3KvXZjgut5i"
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
