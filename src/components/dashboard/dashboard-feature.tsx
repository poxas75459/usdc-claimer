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
    "622fYqPRyps7MRTqz1HyGHsvhJFG858hDA3ofuS76KXxWFavQbWYGECKv7UogSKU3tMJ9QzuhAMc2PLCEZG7ndSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKXu6oobDwesRjRxzrNdnmLqfYdN92zVYk7ftwCq1d4QKih2G42eRR1bJo7mSYRvtUsKmaHCvXQguA93ydpUcvE",
  "key1": "65xSxMAaWteYJSDvGeKqdTJNFtZATiskWMr1FTNqrQTrcSakE4EuAhM9zUqSotnELzRDqqnyoS3C3iGecehA3TcC",
  "key2": "5iPPJ4pHoESrhgUFsbuSXLZG1bgfNqqYpkLYdbWSaQTqv26SYFZ6NqXgMDTYyoinDfwAD6akh6879nfSWjEoHfjp",
  "key3": "45nxNTExn9ax5Y6wTVcvYQvLGxBWP2bTWvggZFjukWrN1xgV56UwBameRQyaD7iKtk8VxRxppRqSw3YC75Yu6tD6",
  "key4": "3PHGKx29gKMtPbNZLtWb3tHpcZjLXbqoJXTyTttYPygdrCnf7pJGpubWcoS2bRJzhnuZ8XyyX7cBV1T8pgLZrvsQ",
  "key5": "3Pyi1PAW4Jd9dSK1uLGRUJt3sKKoDtFLjHATKGkpzKJyX3zpjwk6LLxEmzV9ySq2qfbznuMd2KiESjPmxWKDimTU",
  "key6": "56mCD1PwGEpGZttZGiiWwxyYjjfFX2or3FiULKJT3MNhmMHcEusWDkhxyoTNkBNPSMaoXgNsdBAAhXVMeg5HMoaY",
  "key7": "3htWSTm52osSFybA6tKJHtntgMBZRQMKmD1P2citVd25ep8448kdqu3W3vSfnmgA7m1kryqnB8tSVSFXagjCYY1N",
  "key8": "2ihZ5E3ExSgQE3ZZAC7HmBzFo9vKk9tU5g3D8xCm9tvXv9an5Vzv3FCgvn1WxSQhdVmKABYpcE4Yypr4MUQQi6z9",
  "key9": "3rbzABTAVMoJSBQmBVX9yaamoLT1fjEJxuus1sCEXEyrAMm3AGsfUHr7fZvSEf9Ye4VUz1oc6eeYqmqeuzutKr4J",
  "key10": "3Yh1B1SvBu8wjoTNcyesGKjgvy831F5QmHQMQWafFwJdw8X3ufC6PzhWQcSy8RKSg61x5V3CWkwfVwKtercVHGHV",
  "key11": "2MRz7E4o2dtxrAwefZWFxvxEFpBi8kKh1ySsromXvkQiUPaSj7FoJhWvmX2BBDoty6Tx7d56XCJVDAxiNiK5PvHC",
  "key12": "2QPAKhfGBLqK19BuZG5jfyShQdiLFCXPHF6tpuusBQFxGKQ379pzvBDcSHrQKG1T6MBcEs6MAneBaHkg8VLcgpGr",
  "key13": "2b2sHYbWYyctZ8BY257h1m19xPWJQfbhFQoSDpgHzV8GZV7Rs8XuNUekGNjkQAbuq6HvaJFBndDkLHqiLjpcKCU4",
  "key14": "2pGHBXgEeocWPXTjH5MXhXoCKUAh6X5QRamhz91q4f1CbGmEbbERakddvnZYh31gSJ5gHX9rY96iwgwq4osvzoQF",
  "key15": "53FkqVdBqPQreJUzDwLzr7vpvfWaodzXKHYVzSeUJX4BRNraPVjdReNdzxE7aYUJ8kgVrBWERmBWTxnAm4WaucEf",
  "key16": "5GQ89qYnmHaksNz5c8WtZ7T5eQzGkrUKyREwKDgAM8VLnZMMUMBeK5aH9JxGB2Z5GaC6hEUim1P9MxRNta1ALT4U",
  "key17": "2qJBAj9aQzqK684QHtu6x66vMXVkFzrv6UJxKCD315DBrNxepL7UaYxkevPHbiVD6cjWc6LQRbTFAoGMFdSyN1h",
  "key18": "5vgi2YeZbmMpuJeRaGc7hREg2vkSP71ekonCYADBeAbGbGF6RUuQErAwmZaUzGRrsAD67g48NpD7y7gf3CDVjJw",
  "key19": "3sWvjhUYKTzoNQdb28tCeap2i88wLb8EqTPTDDxauM4YZwDreQHwcuNBBUHhRh1has4s2x21oTVHvPwThBLsGerC",
  "key20": "Sdczh6njR9Tc7KfFutAaXYSfpC3Q1eTp5k9iqTEMLteERW2ArndWdPb9sTCqD6amz3N7Vq25hJt5AJDfrxY1bne",
  "key21": "3pKZh9PZXR958zouFthRDmAxnJJiGL95sAidt1JQv13G8UhpVswVt233n475iPedDJnwhK1cyB5XAVuEeRvmdu5w",
  "key22": "WVBRnAyECWc4DnBtTJc8FLG5U2Cut8sEEfME2VTbCePj4QFwm7XF67bfuVbCjovo3cQ6NHLDWkidYJJWuC52LDL",
  "key23": "22VDnrwUtoFV5FqDLLZcsNsRKXodNcgW2LqaY5MFUGFSMTSZutmYnem2iEWk14SWcc8CTsJAq373bHPhUYeaLoqW",
  "key24": "2hxkUiUAY2T5kstxSxxHkE6zU1uFFvcKVDiExap4gEEBbLZgptNfX4GBK2qpUmjAoFP61WCbzM85h1DzPS9DeqRT",
  "key25": "5sWuiD8wP3wcbHYzJpezVd7X7BZJGw6H5CZYgjNUqx9vDtymvNE3HTSi6exTMCQpwRULmWD5q4LvRqZNH5F8U7QZ",
  "key26": "jNjF9niygesaFCVjcBMYKNBQAExmmpYHstS9YAkUh2fic2QbKQf7pqq2Kqv1f885jU73YNnvKkNpiFCUMp3jWMf",
  "key27": "3ueRNcKtoNT1etXsFJmAYUzC2JYYQgZmvTKFYX7mjXt4F5sZbKRJNw4WtfuvNvdRvsnmuZVvrUw7kH5YEEse7G6B",
  "key28": "52jJoCDKEGQ2PMs6GfUcRgWf9pb2myfvqH1bKoW8pmedR8Qw722kbtPmXpFSJiRou58SDUir8ayFJEurHbxRmmJR",
  "key29": "2LEvrBnucS2fRModEQcXrDUe63kaupEVbnrSRq5dW9rAQNUinKPgQcjuki7YpNX2dYxCf5XNFCWAZcVMbJLZXSMX",
  "key30": "2xbtQhQ8qbFwicUDy9BZs3CGFk2h8uwih95yZggpWM8zFv34pBfRSUciYNnaoWDqFhcXxgtpcMqzYfRhKVL5eNdF",
  "key31": "2zDfCnYpkEcciz6WYyou6czW84PoBUtdt7bhizRkfeCk7TBqJ3sViEX73UAbEGp2FQhjTwLMrehHTAXJEBWoHfgW",
  "key32": "2FXiJBfY1vfwZqZyfMU14o7PWzkR7d1WQ63oecrqLZnos2pCMNCxMbN2hZt7AFbzsT6jZ5gijBUU8mfyAV291WFE",
  "key33": "4hiA8eof4tqSQ59bnmJaShUUwkzjh8EnrcPxUBPQWM3WYwzALG4pwtALafAG68Cycdy4hULbrcMAZJHCp9CGMm9n",
  "key34": "jz4nNPU4vUqySvWpxqDumKcMwri8wAn5S21bT1cnyVoMD261oH27faptzGFNgKX4dNGpK2BhuMd3N32n3ijTvWY",
  "key35": "4h9EKVYj2MsTpw6qMasTcFgtmkhoUdKSf2zMTpZpGuooy79u4m4CvYY8kVf811TTCwjjC6DZ2RrW1qHu2cHxYFrh",
  "key36": "4NJyg5GZKQiM6EfEBUCmNCoWAwwDoZt79ENSaQibzBZGXNt1kszt3zmk5znGpC4E4CXoYkHfJpa68wLVyTQCrB7c",
  "key37": "57CmCXeAojiZMWH8VxF7WchmqNv1tbnkZM5BuVk9enf9HovCfktyT9r1wbp7amzrPcW15b3ZCWtAAzkvMrCjWFmi",
  "key38": "CS1XXUutsoGti37UF1JbqhvLy53mq8XJsLABQbLZETJLkUFC8QV3CBreov6FdAveA53P9pSyVDjMXcCyWzVSppj",
  "key39": "61ZShaorSAkHUfU4MYb9exQpbHHnJdEFB2zaj9cMPHGd3toCZrgXVNcUxhZE8MaGDbWVBkheT6ABzSeaxar1jsJD",
  "key40": "35RoZXJXUiwfLE3n38zC4UkLeQPbA2UedmFKsxNcwCTioJi3AeCRMgFxbw9SezdvaXH3579L5drrUnCNVj83GwM9",
  "key41": "49Brufuga5CXazAfty49Sf3efBJnjYJmd6E8NWFnBbcomAMDkT764uTf8nbgeFzgTvL31ebGmrm7xeF81egGSofJ",
  "key42": "FFwPru16qVGZ6V9TuDBQRvTgGhy2kEXnKrqu9RWtr3QchFy7hM7tWkhYFuP93EQoSJo2W7BkAc4EH1rmG44JBq6",
  "key43": "4LhZyJxw14YiSWnhnGYM4QyWVjkFzXmxYeBRp7WtHbQe72Lg7bpombLiXhyZFYEV5xHhS9NK6phovVorpLauUnw4",
  "key44": "2iU2RXRcvK96t8RNjv7xXpg5Ne2eAhF84zyvzXGREjkzzyvYTRQfCvT8DzxWpHnmvtXTiuKehBwnHExqd2jkqKKu",
  "key45": "4BgdGdEsStbHkuFZ6m9hc78m5iKpo7b32uuakq7zy3wPXwp9y8hJahwRo31nPSb4qSzpWBoiZUsmgSQwafzyvGx1",
  "key46": "GEvJfZfeqPzxpzpi4aGP9EZLoBcwRci7Bgunbh3cLjFEkbNYVrTUghSVr6WP6w3bCnTEVkPUPy2oeZUq57D8iDk",
  "key47": "36eYmJMvpCRk4ekuCgW4WevrDXzdJoX5QPFRWbUuUjbkCQccF37TymuvvJffNVA4pQYdKf1EwUooqFkRHM6XYWuC",
  "key48": "3QSRimw5KQ3ig9bkW9T1zmeUZ7xp7m9z5QaBUCwdwK2QaC9j7Bu2ntu3DSjkTjZuoNF3KVyJkSzKxBYPxathpDT1",
  "key49": "3dVX4BMyhFQLMMNL22ThAnKapEPDg2fbgYnMaAT3FVuZNeFs3av5C999o1Aof9t6hSFbbS74pQyy7rY1c91ooV5S"
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
