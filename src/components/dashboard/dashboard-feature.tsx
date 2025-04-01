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
    "4gNQqFh5yCB7o4JvkVsunZusobZj2J96rLZtaw5hQMAaLWtKd7jKzbuYyXzdtRr3uub4SvErVxHWes12DewTqC4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fyyqhTC7BJES8EUFXGbmQxFDjLM5thbmxKLmHCC9Kr7G5ULHEh5oGJJZBf63gC3nqWrLyw7CUEkUJi69eteQ9p",
  "key1": "5xpAAgNqSEFk7QQ3o188df8bJvjQimNaTuTaq15sK97Z5efaMCoTWSrJHViCQP5JB2ozLAMpBXVv9gRNrQC3UkuU",
  "key2": "2PWVHarxLECv8Zqa5NKQoyxNwNATqZZm3z1qEFzbJrBWuiZMmsJGi4XqemdqsxDsDrSDwfzz2YqUqzK8898Ms4xy",
  "key3": "65qC9sxfnUvJac3f7YHpPtWCAFpzCQn6cbrioyYM3ZRHKTFRquc7uH4W4t4iJs2YEgagtptz5LJYftM25NdahrfB",
  "key4": "3QFM4FEix8GWbMdoAYvN49j4MrTjCGCqeAdsF2Y3Qr9wGPjbcQBxByFMJhiiqk9eAY6a5scJm6P35HxKkjvFQiYm",
  "key5": "4WYsXyZGH5mmM4DoGHGgm67yRZWtdw5ziVRLRMXbZ2aP3Vxs7KHE8Pq87VaWvzBntdaanKTibQf1cz2576qY1irr",
  "key6": "2ffF58Jaus54DnthwQHAEsEv69H1gLj9Vy5sFk1SM6hgg2vt4PHfoThityX7hspPC1M8iRdPeBdEr8WcrQzmXDXx",
  "key7": "2AkPYfCuDJiDvntdBDMfkVCyB7CvwGy96FHs2sQtAFAcyL4J3SLLLbG31zcFiuRJ9VhxpwgdWk7hpFizNsewJ6Es",
  "key8": "3UPxWXxJDoFBKvK9BGuNk4vYrZbURgBGzdcwUTFoaL6zbQM3v8qsBibPA9BcB19hm3MU7LjSFSg8MeKXYXyNYACv",
  "key9": "3njNBsW3ZCL3xjj3frfMN48Wc5FZGPfEfnpctRLykEBC375XuDyW88Z2zJWempxUXsWfBDgiACwM3a8kpB7vBo1K",
  "key10": "CN4GvAhxaFqvu2dEL5zTM5ta3vmMcvNjWLScigceYcVpzhYAsn24z7P7i3gcctkhEsdUETYf1q3Z3JcPAaHBPgj",
  "key11": "TkhqT8jzkuQ5wchqDKqGvYqoW16y8JJyWzkztDMxGmv4rxJXq3kzy3MRVP5ujohP6wav9kNy1xKSWNL9iNHrNpL",
  "key12": "1tS5NH5dyYhXrFwfvdZq6Smyq9rdNX2uVaRBdRuo1ZUFmRwoB2CAwfVBz6VRGPxzCd6GYNoJyqZgqPHWmQeuv9k",
  "key13": "53rmbJipk61r3f4mnZkguonZqP7u6UDN5PEdYbi48M6brNBLLokzEEfhJd4b2Q46Z7ht4Ae5GSYMkm5mea9BBRu3",
  "key14": "4xa9CqtyFfMHTqLHBo8Qyx9MaNWC31cAfzcwk8UfpdJkpSZvvikCZJmdkcmnicsmzirjD6Qy8exkeTr93zrMQHJp",
  "key15": "2ZSB13UnVbNTKSSvokbbU3Svy7UqhM9HtkmrMmDmSxiq1GmANiQxYXUtGazWpNqvwpcwJCgdxFoDaMDWHU8A824s",
  "key16": "3kUFX6btuopieUtMFjip7npCZUWHJeVBRZoCBxiuuomehk7VFRKgtWoFF8MhNU99d4ep6LAsXSCGxfSJjGgHy7Ub",
  "key17": "2rKWFjvfhT7kikKGcFMF2AMXMJy8oVvy27GRM6u9TfmjrhJj3Ts4GBJgXqjBA6D9i2C1Djwp7RZEpXgAwkfjRmef",
  "key18": "4hmdFHgJfzPSYXW4LmPMrsrZhabJKrM6KSBq9yZsfBpAGswqWuYq2js49Xzu5yNF2cuMnbHE6FCGCj9tUnTk9hxq",
  "key19": "mqAiegUbwyENX4WQrXD1mXGpqfjH6rZaf7b4iFnNQsHzaNGD3MstRboWd2GdNH66eovMKSYpFMSinDxUfaK49su",
  "key20": "2Abg5ruF8daVXZRDH2d7kKV2S5F5FhF55ao3MmdhGoPiaDcNSmA3YE5fFVnFXdk6EJp66W9BhmzDavuDtcHg2cwG",
  "key21": "3WaM6LYLoLQXBx1WZbGwnwNdjyukrDbfchKdrshvXpmqoh7KjjTDqQ6xpY31jSu1icBoAJHKdL82eCh8NSfTV6GE",
  "key22": "3iR5UrSqUBqxfhqvLzodAFZ45fZqbwBMjiqoeM4ih5osBUHPdhJw8UwoTcUrgpfycXbataEt1bqWvX4JzSZrL8v",
  "key23": "Gx3J1MoNCFmwqevHrQaRnE9UHXFafP9ytLJhxXazsboQTn5xw2gGQmYEihTbVeydXD4tPNTkxFjv17kowdSP7NH",
  "key24": "5M8tSzohEeYNp2H3CtQV4uwK8Nn7aEWiSHjHKG2kfWJkiMCKuvQJzc4Pn3VLFeifog3iERJKu2Wdib2kcUjpU8WP",
  "key25": "3b43tB6JB5mnm5mUTRvsDTNbUNJbpyhpA8aDPJeUptPna5U7A2ZB1vyjb4isyVtSGPrnfgaC8CnyHa1Vrp6PQ1w",
  "key26": "3gq22FWQxkGzHEMu3LSVNVTJCEdxkKewVJuMZ3efenctYrRNNNodmNg6SSEXejyVuxgAFqHnYtXkWhkpNQY75M89",
  "key27": "2F6ZMsYynhRmjHKCcGwR9zzhHF7u8ZkVcBnUoYuxQt3GgAV8YqbZBhMjNUyLYc5T6vbAzCrozUaoWoHvnpgTGZKq",
  "key28": "2bRWMJuApV5488DeDuE3dd8R59twqx5RUmkejVDiGW7UgQfAmRcdphx4o3mWF5KUxnAeSaa9mhdEtpn3sQh3cEE3",
  "key29": "4YvLwKbGx8QU9be11Uyrt6d6TYLpvwtgt3yAnUrjr9E3AxLSghA4k5JzY2J7DnPXuq8fXBpPcXAhMQhLXBXMF7oj",
  "key30": "3NRjjVb2PSYnasHNaQHY2o1GeK4nny2753hTBZGjricj2sHJi8yXzbE2T3daNMvW8sHuccZW2FqUjBTugQZ52VpJ",
  "key31": "iiE4DoX7p32ayYmrQoxfQcm2kQwvVCGKqG8Q8wCJVv2Ydg8hP7QKTLFrWdMF3akGzYmZyEqeFDFC8L8MgnJLVHf",
  "key32": "4yhwHjZJDkSSErckntGezQwn35vFvNEfmocNnECGVQbKg27udTLbjUNsoTqjYwCn4nyK64WYXCGZZR5T64gFxkUg",
  "key33": "38uT87k1QwDLL8nJdeQ9FErsEBo6jScsyvLiWkNRDG2vMUAYY3AThKwKe2jrgse8FScTjDVsrZkEJA8ZK98yPKGX",
  "key34": "5CFsMw4t5TwJ292ZjQxvR8jV8V8mZUktEF4adK579ccPaCm79q7aWa3MGMkqQPiYw6FzGjQzHWc2VTidtjcUpYJ3",
  "key35": "YvzooZc1PPoVjQ8yyJPyLvgcd6i8eAXFB2zNwU8Risiu9tUxK5yPBX8YxgHfscxpokfBpTT9EqqWALDK5knoK8X",
  "key36": "5HZt7aDTYLiMKE14ztNiDPjNFFmQYzg1rn5qeehfwiJhtBqV1iP4t2fCA5A7P4dKj1SDdtgi8TShfTFDUySxouSi",
  "key37": "41WaF6LcakipCcULKv6aaQV6HabUduPmNsj7LARHsv6tuX7incvRiEBrHk9pb5SfEM8SPYGrs6B7tbWHuy3wBvuh",
  "key38": "3ATKoSJN5ffW9e9YTr4Qd8Mbe6UUq6MaVTboqABeCA2y7yDAANQiaxMXPDTavs56TbWw7FTp9HttdsiDUMxVCyQX",
  "key39": "3ZTrin9v9BkB6n51rUzHv5bbgFMtiwGFGqsuWSvS7GXbwpTdJbyrhKfxftKajNWRceki4hvdzPTR9QxqK4aT8rVc",
  "key40": "4g1u5b4vrVbLmgBkEzrBT5i3bwMMjCFdsEXLaQ3wxqLpfzYLkewbZMHRnBN1BnvzX29yQXmFeTpEU1Ww6UmDz6JA"
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
